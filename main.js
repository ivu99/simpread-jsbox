
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
 * Read shared simpread_website
 */
function readShared() {
    var exist = $file.exists( "shared://simpread-website.js" );
    if ( exist ) {
        var success = $file.move({
            src: "shared://simpread-website.js",
            dst: "scripts/website.js"
        });
        success && $ui.toast( "已导入最新的适配列表" );
    }
}

/**
 * Read shared simpread config
 */
function readConfig() {
    var exist = $file.exists( "shared://simpread-config.json" );
    if ( exist ) {
        var success = $file.move({
            src: "shared://simpread-config.json",
            dst: "simpread-config.json"
        });
    }
}

/**
 * Read shared link
 */
function readURL() {
    var exist = $file.exists( "shared://simpread-link.txt" );
    if ( exist ) {
        var file = $file.read( "shared://simpread-link.txt" );
        url = file.string;
        $file.delete( "shared://simpread-link.txt" );
    }
}

/**
 * Enter
 */
readShared();
readConfig();

var query = $context.query,
    link  = $clipboard.text,
    url;

if ( query.url == undefined ) {
    if ( /http(s)?:\/\//.test( link )) {
        url = link;
    } else {
        $ui.alert( "请确保分享时的 URL 正确，支持从剪切板读取 URL。" );
    }
} else url = query.url;

if ( url ) {
    readURL();
    $ui.render({
        views: [
          {
            type: "web",
            props: {
              url: url,
              script: inject()
            },
            layout: $layout.fill,
            events: {
                open: function( result ) {
                    $console.info( result )
                    $app.openURL( result.url )
                },
                clipboard: function( result ) {
                    $console.info( result )
                    $clipboard.text = result.string;
                }
              }
          }
        ]
    });
}