
var version = "1.0.1",
    reader  = "",
    logo    = "iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAC+lBMVEUAAAAnNJImM5EnNJMmNJInNJInNJInNJInM5ImM5InNJMnNJInNJInNJInNJInM5InNJInNJInNJInNJImM5EnNJImNJInNJInNJInNJInNJInNJInM5InNJImM5ImM5ImM5ImM5ElM5EmM5EnNJMnNJImM5ImM5EnNJInNJIlM48nNJIlM5EmMJH19fW9vb0oNZP/UlInNJP4+Pi6urq5ubn39/f///+8vLwhLpAlM5IkMZH09PX6+ff///z///rx8vIcKo7Kysr7+/gUIor39/Xz8/Pw8fEiMJEZJ4z+/frn5+cWJIvNzc38/PnHx8ceLI+4uLjDw8MhMpYpNpNelHfopkXFxcXp6enrbC3Y2eclM5Ts7PHr7Ozc3ek6RpwvPJcYJozu7u4+Sp4zQJksOZUkMJT/TEz/SUn/R0ff4Os3Q5r/Tk7n9fXp6e/m5eXh4eFBTZ/o8fHPz8+KkcJvd7Xc3NzY2NiBib55gbphaq4cLpgrNpLzrED5cCbt9PTk5u3f39+bocqVm8eGjMB8hLt2frhye7docbJFUKEdMpn4aWn6+vrq9fXv7/Hm5+7Dxt3a2trS0tLR0dGNlMRrdLNlbrD2eXlfl3ZhmXXubSzS1OTn3Ny4vNjn1tbT09OQlsTAwMBcZqztqqpVX6lQW6ZKVaNHPYPtqEPh4uvNz+Ln4eHIy9/e3t7b29uxtdSprtGlqs+hps1+hrxYYqr0gYH9VVXp+vrx9PTs8/Pj5Ozj4+Pg4OC/wtu0uNatsdPrsLDvnp4uQJBBYoVNd39ajnhinHX/Q0P4sD7pay7u9vbt7e27v9nV1dWSmMbrvb3vl5fziYlVhXuGbGz6YWH7Xl7JYj7s+Pji4+zn0dHqtrbto6MUI5zxkJAxRY4zOI05P4w2OIs6Vok7WYhBRIhGR4dRQHxiV3p6ZnFpR3CwhVu1iFmVVFnKlFGmWFHQmE7YnUv/S0u7XkbOZDvTZTnjajHpw8M1PY03TotLcoBXUIBrXHaqgV77W1vHRZTFAAAALnRSTlMAJBf3VR/pknxQ3dexqoJb45+HbDL8ZfHIwaWZjHdMR0I8LBu8cWA4t8wN0SgKJmwyxAAACJtJREFUaN7V2gVUE3EcwPGzu7u79fb3bjsHnmNMt4mIMDYVndgiKIhioIJgF2J3d3d3d3d3d3e85++KO7YZ2zHf8/sUYU//n/1P7v+/xx2WVKr8GbIWKlS2bNmKFStmhbJBhQsXzgUVKVIkA1PRokVz586dPXv2jFCxYsXKlSuXB8oPlS9fPkeOHGnTps2UKVOFVKkxu0oULkAggoDfCAkfIAS/xBf418QvpR8g4fN8WTJkwpKVLhuBUjaikJSokJlAKV6+3JhQ3vQEckNEYYwrdRZ2fPPw4VbEZjWbzRxJWENCCNcFfg5F2C+G31q0KHY4gmKI+w9uxzAYEbL35l4ixHUhE3uACrBv9cnFJkfePjTDTO5/b7T41WNkRYRl39nJB77sBcvFKlUGIDuChj+Ji2syNe7DIrP104vDixv1OXwuhgjZd3Byw8kHz8YSLgtpMaxyJeb437oYd6RJkyZxL60x5/o0gvq8fhBz88CUhtCUfa4fpFwYVpqdwKKpTZimvo+NeQYAIzy6fvdgQxbY7zqQMzVWnAOOgADAOwFYzABTZANEaSwPAX9aY99yh+i51fyYBQ6/uh2zlz9E92QAJbBi7Loy/OGHuKlT4y7egRPg6eHFi/ss/haDQu5Nhg7u55co6fpkv2ZJVyzJX8mBZeQo86KX7989v2NGKCT23IvXT7+amdPg8/4DZ/dZZJznDEDwgjU21mxmPzNbYq1m7kQjLBarFckF7CLE1+SuUgAgd0akxbLDewxo5ZOUt20BYh7Jq8tVU8hTjGASAE/L3F5DhgzpzjRhwlBo4sSJvZnmQuvXr5/PtIBpIdswpi5durRp06YF1LFjx7ZQS6hdu3YWi4Xw9KxZs66HR00LC6CalhkavV6PM9G0AdIyGY0joWZ8nbhGMfVl2rp16+UlUAe25kJNxToM9PBEmbDcPEDy1fplte1rYFM9aTX6B/BAuxleuBuqMcD7HwDFsaL/AjjuHuCkN+FeYDYAJdwPZABgx38KjAegJAO0dBfg4xCgKNzFKJJyABQBYLQEII3bx/kHMjVm8ufSJeXH1dWvK9s4prFjx86aNevEmG1GIESgGwClbAAKXxFoUirVyVP+XSpVYLSR/C1A0WNVSoXrKU3+waQItGKAXKiuBJilUitkpQwEQQJUSAaM2K6E8WUK/lrKDljOAZS2sVIhO9NKkgcG1rcByEiVApI9BSMlAnmxwqhuWwDYTjCAfCGIFAAkAPU4wE+ZEoCpMw/0tAN0KQKoelBSIBsAS3mga8oA/SQzKC0FqGhVigCRAlDHBiAjU2IG6jnHeGCdLUDROpN8wDSWwkWgKpZVBGAKatlzUCqCSB4YlARMA4ATouWuRWplDxKXAKkYoCMAfNRKtVIGAf84msIlAMEDDXAh0lcHi65J5Tjl7zMpA+EkkwL5UmEVOUAUcN/osV39pOn8dJL8df5CjYW4HdC/6wotiYtAL4cAECNGUBDOR7OJ1/VGrTGp1sbWSR1rbSRH4JAd4NGxKQB/jPpNJJP4nkQgTSqsLAe4ISlQG3dDmsH/BijkXiAdA7Ro7jaggFuBIf8GKGgPkH8Rhf8pvWZIfQHoIAVG0MG+tgWJBbMda42PcA0gDT10c2C1MyVf3tRqhbjIzpkzJ7CxXz8D+XvAC4D0PFBLXEz9VbZbgtpBzMrZOJL8PdCdBSoBsEQAyG2Kv94OYPNbYSPQ9C+AyzxABs9ROrO9qLeJAg1LbfxmrdZA2wBVkEebrcIM/ExOXqsbKeGHNEcTfZdNn77MN/GogaZFoAwL9OUA0tfZ7VIVzU3BYIyYOW9DwoULCRvmzYwwGlig3gRbAD+hdPYSQqelmPHjI/ecPxQaDoUeurAnMl5rA4yq5eK1qVoRTOK0NnHmpLDQ6nyhYZNmbtHSHJCzDJZFBAyBaqcvE4NIeP/TE2B4sbCE6fEGXN9ABDq5DviSdLzvhjAYVipM8t1MkyyQWgrQ/k4fImUwaUjcHRZe3UbYvUWrrz20PsqcGsssANAsAJz+PtUuS2hf3ab2CZFGAFoJQDNSuLpWO3+hu+UjjG/XqS36WrYApHPyRFP7koao0w6A9jcSJUAXASCDFE4dJNUsCtdGbXAAhG2IwMmJLJATgJF6nBc6OyGolX40DsCkNw6ASRG43h4AITIQluu/Gl6lHMfsCIaoSe1/DWThACMAgmCM1ilUJibVr1OqTApdZxyCGZxxAISeicBxEdACIESRhqDIbZ3Ztm/vx7ZiRQ+2lWPGrBwDRUev7BxEc3smHTXPARA+L1GP9/ZhgPQAGACQEo6yu9zFuej4mRvtx98401iLA4T/A5ejDcE3wuyPUHASUInb9F3PcPTKjzc2Z8HGK/F07WbrfVDBylhW7ideMtJG7A4NTzZ+6O4ILV2vw7AAlBXDyiHCZ3wNOQBtjLoW3l4yfvi1KNgPNKPh/kQGDEuVBnkP6+QlS9BGXD0fys0iPDT0/FVmfLzeOh8LczcWy4aQTzeNXp4QNf10wsawQ4fCNiacnp4I49Ne09oRsN8AUCoNIjxXa0h5gjFi2al5e/bMO7Uswsi8f69m8wMQKirccveoOQDXeNWSMQ2DdvOlTdClzVoDjjeo0XeuD4HSp2aBygURqhuwfmdz2kuj0dT4cxpHeSUFQzTbNcybQPnSYlxlQEABPl16dx8M9YIGQevW9YQGQt2g8ePHz549++TJAVB/rrXQGqbV0K5du1ZBO3funLFqbc8F3h4WhIphQpWzgUAE+NSvk7z6bK1atZLcIpTeE+RvA/K3/hCyMLVDHvW94Ys0eTBJOWASjiOS5fmrakryhOFRoZJYsqoVz102S/oCaZjy5cuH5JU+F3f4bYzU6dKlSqpq1dKlS+eFKlQoBZUsWbJEiRLFixeHx3vgIR941Kc8BM/95IHgMSB4GCgjBI8G5c6ev2QZcdSfW94k4uMuzc4AAAAASUVORK5CYII=";

/**
 * Enter
 */
if ( !firstload() ) return;
if ( update() )     return;
if ( $app.env == $env.action ) {
    open();
} else if ( $app.env == $env.safari ) {
    readMode();
} else if ( $app.env == $env.app ) {
    menubar();
}

/**
 * First load
 * 
 * @return {boolean} true: exist; false: not exist
 */
function firstload() {
    var exist = $file.exists( "version.json" );
    if ( !exist ) {
        welcome();
        var success = $file.write({
            data: $data({string: JSON.stringify({"version":version})}),
            path: "version.json"
        });
    }
    return exist;
}

//initialize();

/*
 function initialize() {
    var exist = $file.exists( "version.json" );
    if ( !exist ) {
        welcome();
        var success = $file.write({
            data: $data({string: JSON.stringify({"version":version})}),
            path: "version.json"
        });
    } else {
        menubar();
    }
}
*/

/**
 * Menu
 */
function menubar() {
    $ui.menu({
        items: [ "阅读模式", "打开到「阅读器」", "设定", "帮助 & 支持", "关于" ],
        handler: function(title, idx) {
            if      ( idx == 0 ) readMode();
            else if ( idx == 1 ) open();
            else if ( idx == 2 ) setting();
            else if ( idx == 3 ) help();
            else about();
        }
    });
}

/**
 * Welcome
 */
function welcome() {
    $ui.alert({
        title: "嗨，很高兴见到你",
        message: "\n感谢使用简悦！\n\n希望简悦一如既往的提供「让你瞬间进入沉浸式阅读的」体验。\n\n如果是第一次安装请先点击配置指南。",
        actions: [
            {
                title: "配置指南",
                handler: function() {
                    readme( "GETSTARTED.md" );
                }
            },
            {
                title: "已会使用",
                handler: function() {
                    menubar();
                }
            }
        ]
    });
}

/**
 * Update
 * 
 * @return {boolean} true: open CHANGELOG.md; false: not update
 */
function update() {
    var file     = $file.read( "version.json" ),
        versions = {
            "1.0.1": "增加了「识别当前环境，自动进入阅读模式」、复制 Markdown 到剪切板（只限阅读器）等功能"
        };
    if ( version != JSON.parse( file.string ).version ) {
        var success = $file.write({
            data: $data({string: JSON.stringify({"version":version})}),
            path: "version.json"
        });
        $ui.alert({
            title: "简悦已升级到最新版",
            message: "\n感谢使用简悦！\n本次更新包括：" + versions[version],
            actions: [
                {
                    title: "更新日志",
                    handler: function() {
                        readme( "CHANGELOG.md" );
                    }
                },
                {
                    title: "继续操作",
                    handler: function() {
                        menubar();
                    }
                }
            ]
        });
        return true;
    }
    return false;
}

/**
 * Read me
 * 
 * @param {string} name include: README.md | GETSTARTED.md
 */
function readme( name ) {
    var md = $file.read( name ).string;
    $ui.render({
        views: [
          {
            type: "markdown",
            props: {
              content: md,
            },
            layout: $layout.fill
          },
          {
            type: "button",
            props: {
                title: "更详细的说明请前往 帮助文档 >>",
                bgcolor: $color("#FF5252"),
                align: $align.center
            },
            layout: function(make) {
                make.left.bottom.right.equalTo(0)
                make.height.equalTo(44)
            },
            events: {
                tapped: function(sender) {
                    name == "GETSTARTED.md" ? readme( "README.md" ) : $app.openURL( "https://github.com/Kenshin/simpread/wiki/jsbox" );
                }
            }
          }
        ]
      })
}

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
 * Inject
 * 
 * @return {string} all source
 */
function inject() {
    var vernder = $file.read( "scripts/vender.js"  ).string,
        css     = $file.read( "scripts/css.js"     ).string,
        website = $file.read( "scripts/website.js" ).string,
        analytic= $file.read( "scripts/analytic.js").string,
        app     = $file.read( "scripts/app.js"     ).string;
    return vernder + css + website + getConfig() + app + analytic;
}

/**
 * Read mode
 */
function readMode() {
    if ( !existSafari() ) return;
    $safari.inject( inject() );
}

/**
 * Open link to SimpRead reader
 */
function open() {
    var link   = $context.link;
    if ( !existReader() ) return;
    if ( /http(s)?:\/\//.test( link )) {
        var success = $file.copy({
            src: "simpread-config.json",
            dst: "shared://simpread-config.json"
        });
        var success = $file.write({
            data: $data({string: link }),
            path: "shared://simpread-link.txt"
        });
        $app.openURL( "jsbox://run?name=" + encodeURIComponent(reader) + "&url=" + link );
        $context.close();
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
                    text: "配置信息",
                    font: $font(15),
                    textColor: $color("#333333b3"),
                    align: $align.center
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.inset( 15 );
                }
            },
            {
                type: "input",
                props: {
                    text: token,
                    placeholder: "粘贴 Dropbox token 到这里！"
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 50 );
                    make.height.equalTo( 50 );
                }
            },
            {
                type: "button",
                props: {
                    title: "从 Dropbox 读取你的配置文件",
                    bgcolor: $color("#FF5252")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 110 );
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
            {
                type: "button",
                props: {
                    title: "清除配置文件",
                    bgcolor: $color("#757575")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 170 );
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
                type: "label",
                props: {
                    text: "适配列表",
                    font: $font(15),
                    textColor: $color("#333333b3"),
                    align: $align.center
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.inset( 245 );
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
                    make.top.offset( 280 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $http.get({
                            url: "http://ojec5ddd5.bkt.clouddn.com/website_list_v4.json?" + Math.round(+new Date()),
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
                    title: "共享适配列表给「阅读器」",
                    bgcolor: $color("#0069c0")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 340 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        var success = $file.copy({
                            src: "scripts/website.js",
                            dst: "shared://simpread-website.js"
                        });
                        success && $ui.toast( "共享成功！" );
                        existReader();
                    }
                }
            }
        ]
    })
}

/**
 * About
 */
function about() {
    $ui.render({
        views: [
            {
                type: "image",
                props: {
                  src: "data:image/png;base64," + logo
                },
                layout: function(make, view) {
                  make.centerX.equalTo(view.super)
                  make.size.equalTo($size(96, 96))
                  make.top.offset( 20 );
                }
            },
            {
                type: "label",
                props: {
                    text: "简悦 JSBox " + version + " 正式版",
                    font: $font(13),
                    textColor: $color("#333333b3"),
                    align: $align.center
                },
                layout: function(make, view) {
                    make.top.offset( 120 );
                    make.left.right.inset( 5 );
                }
            },
            {
                type: "button",
                props: {
                    id: "update",
                    title: "检查更新 >>",
                    bgcolor: $color("#0069c0")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 180 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $ui.loading( true );
                        if ( $("update").title == "点击更新 >>" ) {
                            $ui.loading( false );
                            $app.openURL("https://xteko.com/redir?url=http://ojec5ddd5.bkt.clouddn.com/jsbox/simpread-" + version + ".box?" + Math.round(+new Date()) + "&name=%E7%AE%80%E6%82%A6");
                            return;
                        }
                        $http.get({
                            url: "http://ojec5ddd5.bkt.clouddn.com/versions.json",
                            handler: function( resp ) {
                                $ui.loading( false );
                                if ( resp.error != null ) {
                                    $ui.error( "发生了错误，请稍后再试！" );
                                    return;
                                }
                                if ( resp.data.jsbox != version ) {
                                    $ui.toast( "有可用更新。" );
                                    $("update").title   = "点击更新 >>";
                                    $("update").bgcolor = $color("#FF5252");
                                    version = resp.data.jsbox;
                                } else {
                                    $ui.toast( "无需更新。" );
                                }
                            }
                        });
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "版本更新说明 >>",
                    bgcolor: $color("#2196F3")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 240 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $app.openURL("http://ksria.com/simpread/changelog.html#jsbox_" + version );
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "其它平台的简悦 >>",
                    bgcolor: $color("#2196F3")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 300 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $app.openURL( "http://ksria.com/simpread/#downloads" );
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "关于简悦 >>",
                    bgcolor: $color("#1976d2")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 360 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $ui.alert({
                            title: "嗨，很高兴遇见你！",
                            message: "\n我叫 Kenshin，是简悦的作者，这是简悦在 iOS 上面的一次「尝试」。\n\n很感谢 JSBox 的开发者 - 钟颖为我们带来一个这么棒的工具！\n\n无论在哪个平台，都将「还原一个干净的阅读空间，提升你的阅读体验」作为简悦的小目标。\n\n",
                            actions: [
                                {
                                    title: "请杯咖啡 ☕",
                                    handler: function() {
                                        $app.openURL("http://ojec5ddd5.bkt.clouddn.com/zhifu_m2.png");
                                    }
                                },
                                {
                                    title: "再想想",
                                }
                            ]
                        });
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "我的作品 >>",
                    bgcolor: $color("#8BC34A")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 420 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $app.openURL( "http://kenshin.wang/project.html" );
                    }
                }
            }
        ]
    });
}

/**
 * Help
 */
function help() {
    $ui.render({
        views: [
            {
                type: "image",
                props: {
                  src: "data:image/png;base64," + logo
                },
                layout: function(make, view) {
                  make.centerX.equalTo(view.super)
                  make.size.equalTo($size(96, 96))
                  make.top.offset( 20 );
                }
            },
            {
                type: "label",
                props: {
                    text: "简悦 JSBox " + version + " 正式版",
                    font: $font(13),
                    textColor: $color("#333333b3"),
                    align: $align.center
                },
                layout: function(make, view) {
                    make.top.offset( 120 );
                    make.left.right.inset( 5 );
                }
            },
            {
                type: "button",
                props: {
                    id: "update",
                    title: "新手指南 >>",
                    bgcolor: $color("#0069c0")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 180 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        readme( "README.md" );
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "提交问题 / 反馈 >>",
                    bgcolor: $color("#F44336")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 240 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $app.openURL( "https://github.com/Kenshin/simpread/issues/new" );
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "分享简悦给 >>",
                    bgcolor: $color("#2196F3")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 300 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $share.sheet([ "http://ksria.com/simpread/", "简悦 - 让你瞬间进入沉浸式阅读的扩展" ]);
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "在 Twitter 上关注作者 >>",
                    bgcolor: $color("#1DA1F2")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 360 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $app.openURL( "twitter://user?id=wanglei001" );
                    }
                }
            },
            {
                type: "button",
                props: {
                    title: "在 Telegram 上订阅简悦 >>",
                    bgcolor: $color("#0088CC")
                },
                layout: function(make, view) {
                    make.left.right.inset( 5 );
                    make.top.offset( 420 );
                    make.height.equalTo( 50 );
                },
                events: {
                    tapped: function( sender ) {
                        $app.openURL( "https://t.me/simpread" );
                    }
                }
            }
        ]
    });
}

/**
 * Exist reader
 * 
 * @return {boolen} true: exist; false: not exist
 */
function existReader() {
    var names  = [ "simpread-reader", "简悦 · 阅读器" ],
        addins = $addin.list;

    Object.keys( addins ).forEach( function( idx ) {
        if ( names.includes( addins[idx].name )) {
            reader = addins[idx].name;
        }
    });

    if ( reader == "" ) {
        $ui.alert({
            message: "检测到当前环境并没有安装简悦的阅读器，是否安装？",
            actions: [
                {
                    title: "马上安装",
                    handler: function() {
                        $app.openURL("https://xteko.com/redir?url=http://ojec5ddd5.bkt.clouddn.com/jsbox/simpread-reader.box?" + Math.round(+new Date()) + "&name=%E7%AE%80%E6%82%A6%20%C2%B7%20%E9%98%85%E8%AF%BB%E5%99%A8");
                    }
                },
                {
                    title: "暂不安装",
                }
            ]
        });
        return false;
    }
    return true;
}

/**
 * Exist safari
 * 
 * @return {boolean} true: exist; false: not exist
 */
function existSafari() {
    if ( $app.env != $env.safari ) {
        $ui.alert({
            title: "操作提示",
            message: "请在 Safari 的分享面板中使用。",
            
        });
        return false;
    }
    return true;
}