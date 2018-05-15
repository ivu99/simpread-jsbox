
var vernder = $file.read( "scripts/vender.js"  ).string,
    css     = $file.read( "scripts/css.js"     ).string,
    website = $file.read( "scripts/website.js" ).string,
    app     = $file.read( "scripts/app.js"     ).string;

$safari.inject( vernder + css + website + app );