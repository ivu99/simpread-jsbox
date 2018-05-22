
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
    var path   = "simpread-config.json",
        config = $file.read( path ),
        token  = "";
    
    try {
        token = JSON.parse( config.string ).secret.dropbox.access_token;
    } catch ( errror ) {
        $ui.alert( "请粘贴 Dropbox token 到输入框！" );
    }

    $ui.render({
        views: [
            {
                type: "label",
                props: {
                    text: "粘贴 Dropbox token 到下方！",
                    textColor: $color("#2196F3"),
                    align: $align.center
                },
                layout: function(make, view) {
                    make.left.top.right.inset( 5 );
                }
            },
            {
                type: "input",
                props: {
                    text: token
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 30 );
                    make.height.equalTo( 50 );
                }
            },
            {
                type: "button",
                props: {
                    title: "从 Dropbox 读取你的配置信息",
                    bgcolor: $color("#FF5252")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 90 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        if ( $("input").text == "" ) {
                            $ui.alert( "请确保输入框中存在 Dropbox token" );
                            return;
                        }
                        $ui.loading( true );
                        var data  = { path: "/simpread_config.json" };
                        $http.request({
                            method: "POST",
                            url: "https://content.dropboxapi.com/2/files/download",
                            header: {
                                "Authorization"   : "Bearer " + $("input").text,
                                "Dropbox-API-Arg" : JSON.stringify( data ),
                            },
                            handler: function(resp) {
                                $ui.loading( false );
                                var data = JSON.stringify( resp.data );
                                if ( resp.error != null || /error/i.test( data ) ) {
                                    $ui.error( "导入发生了错误，请稍后再试！" );
                                    return;
                                }
                                var success = $file.write({
                                    data: $data({string: data }),
                                    path: "simpread-config.json"
                                });
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
            */
            {
                type: "button",
                props: {
                    title: "清除配置文件",
                    bgcolor: $color("#757575")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 150 );
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
                    make.top.offset( 210 );
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
