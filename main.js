
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
    const link = $context.link;
    if ( /http(s)?:\/\//.test( link ) ) {
        $app.openURL( "jsbox://run?name=simpread-reader&url=" + link );
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
        ]
    })
}
