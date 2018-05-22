
/**
 * Enter
 */
$ui.menu({
    items: [ "阅读模式", "打开到「阅读器」", "设定" ],
    handler: function(title, idx) {
        if ( idx == 0 ) inject();
        if ( idx == 1 ) open();
        else setting();
    }
});

/**
 * Get config
 */
function getConfig() {
    var path   = "simpread-config.json",
        file   = $file.read( path ),
        config = "var simpread_config = ";
    if ( file != undefined ) {
        config += file.string + ";";
    } else {
        config += "{};";
    }
    return config;
}

/**
 * Inject( Read mode )
 */
function inject() {
    var vernder = $file.read( "scripts/vender.js"  ).string,
        css     = $file.read( "scripts/css.js"     ).string,
        website = $file.read( "scripts/website.js" ).string,
        app     = $file.read( "scripts/app.js"     ).string;
    $safari.inject( vernder + css + website + getConfig() + app );
}

/**
 * Open link to SimpRead reader
 */
function open() {
    var names  = [ "simpread-reader", "简悦 · 阅读器" ],
        addins = $addin.list,
        name   = "",
        link   = $context.link;

    Object.keys( addins ).forEach( function( idx ) {
        if ( names.includes( addins[idx].name )) {
            name = addins[idx].name;
        }
    });

    if ( /http(s)?:\/\//.test( link )) {
        if ( name == "" ) {
            $ui.alert( "请确保已经安装 【简悦 · 阅读器】。" );
        } else {
            $app.openURL( "jsbox://run?name=" + encodeURIComponent(name) + "&url=" + link );
            $context.close();
        }
    } else {
        $ui.alert( "当前 URL 非法，请确保正确的 URL。" );
    }
}

/**
 * Setting
 */
function setting() {
    var path = "simpread-config.json",
        file = $file.read( path );

    $ui.render({
        views: [
            {
                type: "label",
                props: {
                    text: "粘贴简悦的配置文件到下方！",
                    textColor: $color("#2196F3"),
                    align: $align.center
                },
                layout: function(make, view) {
                    make.left.top.right.inset( 5 );
                }
            },
            {
                type: "text",
                props: {
                    id: "input",
                    text: file == undefined ? "" : file.string
                },
                layout: function(make, view) {
                    make.left.inset( 5 );
                    make.width.equalTo( view.super.width );
                    make.top.offset( 30 );
                    make.height.equalTo( 180 );
                }
            },
            {
                type: "button",
                props: {
                    title: "导入到配置文件",
                    bgcolor: $color("#FF5252")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 220 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function(sender) {
                        var config = $("input").text,
                            file   = $file.write({
                            data: $data({string: config }),
                            path: path
                        });
                        $ui.toast( "导入成功！" );
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "清除配置文件",
                    bgcolor: $color("#757575")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 280 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function(sender) {
                        $("input").text = "";
                        var file = $file.delete( path );
                        $ui.toast( "清除成功！" );
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "手动同步适配列表",
                    bgcolor: $color("#2196F3")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 340 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $http.get({
                            url: "http://ojec5ddd5.bkt.clouddn.com/website_list_v4.json",
                            handler: function( resp ) {
                                if ( resp.error != null ) {
                                    $ui.error( "导入发生了错误，请稍后再试！" );
                                    return;
                                }
                                var success = $file.write({
                                    data: $data({string: "var website_list = " + JSON.stringify(resp.data) + ";" }),
                                    path: "scripts/website.js"
                                });
                                $ui.alert( "导入成功，共计：" + resp.data.sites.length + " 条站点配置。" );
                            }
                        });
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "从 Dropbox 读取你的配置信息",
                    bgcolor: $color("#2196F3")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 400 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        var token = "C3ItaGv086wAAAAAAAAC8WE6q0XMGnFoxscYu-W8uw2IMTXfZChtPznJBlgQ2tcY",
                            data  = { path: "/simpread_config.json" };
                        $http.request({
                            method: "POST",
                            url: "https://content.dropboxapi.com/2/files/download",
                            header: {
                                "Authorization"   : "Bearer " + token,
                                "Dropbox-API-Arg" : JSON.stringify( data ),
                            },
                            handler: function(resp) {
                                var data = JSON.stringify( resp.data );
                                if ( resp.error != null ) {
                                    $ui.error( "导入发生了错误，请稍后再试！" );
                                    return;
                                }
                                var success = $file.write({
                                    data: $data({string: data }),
                                    path: "simpread-config.json"
                                });
                                $("input").text = data;
                                $ui.toast( "导入成功。" );
                            }
                        });
                    }
                }
            },
            /*
            {
                type: "button",
                props: {
                    title: "加载测试数据",
                    bgcolor: $color("#1976D2")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 340 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function(sender) {
                        var config = $file.read( "scripts/config.js" ).string;
                        $("input").text = config;
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "测试配置文件",
                    bgcolor: $color("#1976D2")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 400 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function(sender) {
                        $console.info(getConfig())
                    }
                }
            }
            */
        ]
    })
}
