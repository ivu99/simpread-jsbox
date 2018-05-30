
var pr = new PureRead();
pr.Addsites(website_list);
pr.AddPlugin(puplugin.Plugin());
pr.Getsites();
if (pr.state == "none") {
    new Notify().Render("当前页面不支持简悦的阅读模式");
} else readMode(pr, puplugin, $);

/**
 * User Agent
 * 
 * @return {string} ipad and iphone
 */
function userAgent() {
    if (/iphone|android/i.test(navigator.userAgent)) {
        return "iphone";
    } else {
        return "ipad";
    }
}

/**
 * Platform
 * 
 * @return {string} pc and mobile
 */
function platform() {
    if (/win|mac/i.test(navigator.platform)) {
        return "pc";
    } else {
        return "mobile";
    }
}

/**
 * Set style
 * 
 * @param {object} puplugin.Plugin( "style" )
 */
function setStyle(style) {
    $("head").append("<style type=\"text/css\">" + theme_pixyii + "</style>");
    if (userAgent() == "iphone") {
        style.FontSize("72%");
        $("head").append("<style type=\"text/css\">" + mobile_style + "</style>");
    } else {
        style.FontSize("75%");
        style.Layout("10%");
    }

    var maxWidth = $(document).width(),
        width    = $("sr-read").width();
    if ( width >= maxWidth ) {
        $("sr-read").css({ "min-width": maxWidth - 20 + "px" });
    }
}

/**
 * Control bar
 */
function controlbar() {
    var cur = 0;
        $(window).scroll(function (event) {
            var next = $(window).scrollTop();
            if (next > cur) {
                $("sr-rd-crlbar").css({ opacity: 0 });
                $("sr-crlbar-group").css({ opacity: 0 });
            } else {
                $("sr-rd-crlbar").css({ opacity: 1 });
            }
            cur = next;
        });
        $(".simpread-read-root sr-rd-crlbar fab.anchor").on("click", function (event) {
            $("sr-crlbar-group").css({ opacity: 1, display: "flex" });
        });
}

/**
 * Read mode
 */
function readMode(pr, puplugin, $) {
    var $root = $("html"),
    bgtmpl = "<div class=\"simpread-read-root\">\n                        <sr-read>\n                            <sr-rd-title></sr-rd-title>\n                            <sr-rd-desc></sr-rd-desc>\n                            <sr-rd-content></sr-rd-content>\n                            <sr-page></sr-page>\n                            <sr-rd-footer>\n                                <sr-rd-footer-text style=\"display:none;\">\u5168\u6587\u5B8C</sr-rd-footer-text>\n                                <sr-rd-footer-copywrite>\n                                    <span>\u672C\u6587\u7531 \u7B80\u60A6 </span><a href=\"http://ksria.com/simpread\" target=\"_blank\">SimpRead</a><span> \u4F18\u5316\uFF0C\u7528\u4EE5\u63D0\u5347\u9605\u8BFB\u4F53\u9A8C\u3002</span>\n                                </sr-rd-footer-copywrite>\n                                </sr-rd-footer>\n                            <sr-rd-crlbar>\n                                <sr-crlbar-group>\n                                    <fab class=\"drafts\"></fab>\n                                    <fab class=\"bear\"></fab>\n                                    <fab class=\"markdown\"></fab>\n                                    <fab class=\"dropbox\"></fab>\n                                    <fab class=\"yinxiang\"></fab>\n                                    <fab class=\"evernote\"></fab>\n                                    <fab class=\"pocket\"></fab>\n                                </sr-crlbar-group>\n                                <fab class=\"anchor\" style=\"opacity:1;\"></fab>\n                                <fab class=\"crlbar-close\"></fab>\n                            </sr-rd-crlbar>\n                        </sr-read>\n                    </div>",
        multiple = function multiple(include, avatar) {
        var contents = [],
            names = avatar[0].name,
            urls = avatar[1].url;
        include.each(function (idx, item) {
            var art = {};
            art.name = $(names[idx]).text();
            art.url = $(urls[idx]).attr("src");
            art.content = $(item).html();
            !art.url && (art.url = default_src);
            contents.push(art);
        });
        var child = contents.map(function (item) {
            return "<sr-rd-mult>\n                            <sr-rd-mult-avatar>\n                                <div class=\"sr-rd-content-nobeautify\"><img src=" + item.url + " /></div>\n                                <span>" + item.name + "</span>\n                            </sr-rd-mult-avatar>\n                            <sr-rd-mult-content>" + item.content + "</sr-rd-mult-content>\n                    </sr-rd-mult>";
        });
        $("sr-rd-content").html(child);
    },
        paging = function paging(page) {
        var prev = page[0].prev,
            next = page[1].next,
            btn_next = mduikit.Button("btn-next", "后一页 →", { href: next == undefined ? "javascript:;" : next, disable: next == undefined ? true : false, color: "#fff", bgColor: "#1976D2" }),
            btn_prev = mduikit.Button("btn-prev", "← 前一页", { href: prev == undefined ? "javascript:;" : prev, disable: prev == undefined ? true : false, color: "#fff", bgColor: "#1976D2" });
        if (!prev && !next) $("sr-page").remove();else $("sr-page").html(btn_prev + btn_next);
    },
        special = function special() {
        if (pr.html.include && pr.html.include.includes && pr.html.include.includes("sr-rd-content-error")) {
            new Notify().Render("\u5F53\u524D\u9875\u9762\u7ED3\u6784\u6539\u53D8\u5BFC\u81F4\u4E0D\u5339\u914D\u9605\u8BFB\u6A21\u5F0F\uFF0C\u8BF7\u62A5\u544A <a href=\"https://github.com/Kenshin/simpread/issues/new\" target=\"_blank\">\u6B64\u9875\u9762</a>");
            return true;
        }
    };

    pr.ReadMode();

    if (special()) return;

    $("body").addClass("simpread-hidden");
    $root.addClass("simpread-font").addClass("simpread-theme-root").append(bgtmpl);

    $(".simpread-read-root").addClass("simpread-theme-root").animate({ opacity: 1 }, { delay: 100 }).addClass("simpread-read-root-show");

    $("sr-rd-title").html(pr.html.title);
    if (pr.html.desc != "") $("sr-rd-desc").html(pr.html.desc);else $("sr-rd-desc").remove();
    if (pr.html.avatar) multiple(pr.html.include, pr.html.avatar);else $("sr-rd-content").html(pr.html.include);
    if (pr.html.paging) paging(pr.html.paging);else $("sr-page").remove();

    $("sr-rd-content").find(pr.Exclude($("sr-rd-content"))).remove();
    pr.Beautify($("sr-rd-content"));
    pr.Format("simpread-read-root");

    setTimeout(function () {
        setStyle(puplugin.Plugin("style"));
        controlbar();
        service();
        close( $root );
    }, 500);

}

/**
 * Close
 * 
 * @param {jquery} root jquery object
 */
function close( $root ) {
    $(".simpread-read-root sr-rd-crlbar fab.crlbar-close").on("click", function (event) {
        $(".simpread-read-root").addClass("simpread-read-root-hide");
        $root.removeClass("simpread-theme-root").removeClass("simpread-font");
        if ($root.attr("style")) $root.attr("style", $root.attr("style").replace("font-size: 62.5%!important", ""));
        $("body").removeClass("simpread-hidden");
        $(".simpread-read-root").remove();
    });
}

/**
 * Service
 */
function service() {
    var clickEvent = function clickEvent(event) {
        var server = "https://simpread.herokuapp.com",
                // http://192.168.199.130:3000
            type = event.target.className,
            token = simpread_config.secret && simpread_config.secret[type] ? simpread_config.secret[type].access_token : "",
            notify = new Notify().Render({ state: "loading", content: "保存中，请稍后！" }),
            success = function success(result, textStatus, jqXHR) {
                console.log(result, textStatus, jqXHR);
                notify.complete();
                if (result.code == 200) {
                    new Notify().Render("保存成功！");
                } else new Notify().Render("保存失败，请稍候再试！");
            },
            failed = function failed(jqXHR, textStatus, error) {
                console.error(jqXHR, textStatus, error);
                notify.complete();
                new Notify().Render("保存失败，请稍候再试！");
            },
            markdown = function markdown() {
                var mdService = new TurndownService();
                return mdService.turndown(clearMD($("sr-rd-content").html()));
        };
        if (type == "pocket") {
            $.ajax({
                url: server + "/service/add",
                type: "POST",
                data: {
                    name: "pocket",
                    token: token,
                    tags: "temp",
                    title: pr.html.title,
                    url: location.href
                }
            }).done(success).fail(failed);
        } else if (type == "evernote" || type == "yinxiang") {
            $.ajax({
                url: server + "/evernote/add",
                type: "POST",
                headers: { sandbox: false, china: type == "evernote" ? false : true, type: type },
                data: {
                    token: token,
                    title: pr.html.title,
                    content: html2enml($("sr-rd-content").html(), pr.org_url)
                }
            }).done(success).fail(failed);
        } else if ( type == "dropbox" ) {
            const data      = markdown(),
                  path      = "md/",
                  name      = pr.html.title + ".md",
                  safename  = data => data.replace( /\//ig, "" ),
                  args      = { path: `/${path}${safename(name)}`, mode: "overwrite" },
                  safejson  = args => {
                    const charsToEncode = /[\u007f-\uffff]/g;
                    return JSON.stringify(args).replace( charsToEncode, c => {
                        return '\\u' + ( '000' + c.charCodeAt(0).toString(16)).slice(-4);
                    });
                  };

            $.ajax({
                url     : "https://content.dropboxapi.com/2/files/upload",
                type    : "POST",
                data    : data,
                headers : {
                    "Authorization"   : `Bearer ${token}`,
                    "Dropbox-API-Arg" : safejson( args ),
                    "Content-Type"    : "application/octet-stream"
                },
                processData : false,
                contentType : false
            }).done( ( data, textStatus, jqXHR ) => success( {code:200, data}, textStatus, jqXHR )).fail( failed );
        } else if ( type == "bear" || type == "drafts" ) {
            var _data = markdown(),
                title = encodeURIComponent(pr.html.title),
                text = encodeURIComponent(_data),
                bear = "bear://x-callback-url/create?title=" + title + "&text=" + text + "&tags=simpread",
                drafts = "drafts4://x-callback-url/create?text=" + encodeURIComponent("# " + pr.html.title + "\r\n\r\n") + text,
                _name = type == "bear" ? "Bear" : "Drafts";
            notify.complete();
            new Notify().Render("保存成功，2 秒后，将会提示打开 " + _name);
            setTimeout(function () {
                window.location.href = type == "bear" ? bear : drafts;
                $notify && $notify( "open", {"url": type == "bear" ? bear : drafts });
            }, 2000);
        } else if (type == "markdown") {
            notify.complete();
            var _data2 = markdown();
            try {
                $notify && $notify( "clipboard", { string: _data2 });
                new Notify().Render("已成功复制到剪切板！");
            } catch ( error ) {
                new Notify().Render( "此功能只能在「阅读器」中使用。" );
            }
        }
    };
    simpread_config.secret && simpread_config.secret.pocket   && $("sr-rd-crlbar fab.pocket").click(clickEvent)   && $("sr-rd-crlbar fab.pocket").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    simpread_config.secret && simpread_config.secret.evernote && $("sr-rd-crlbar fab.evernote").click(clickEvent) && $("sr-rd-crlbar fab.evernote").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    simpread_config.secret && simpread_config.secret.yinxiang && $("sr-rd-crlbar fab.yinxiang").click(clickEvent) && $("sr-rd-crlbar fab.yinxiang").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    simpread_config.secret && simpread_config.secret.yinxiang && $("sr-rd-crlbar fab.dropbox").click(clickEvent)  && $("sr-rd-crlbar fab.dropbox").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    platform() != "pc"     && $("sr-rd-crlbar fab.markdown").click(clickEvent) && $("sr-rd-crlbar fab.markdown").css({ opacity: 1 });
    platform() != "pc"     && $("sr-rd-crlbar fab.bear").click(clickEvent)   && $("sr-rd-crlbar fab.bear").css({ opacity: 1 });
    platform() != "pc"     && $("sr-rd-crlbar fab.drafts").click(clickEvent) && $("sr-rd-crlbar fab.drafts").css({ opacity: 1 });
}

/**
 * Html convert to enml( from simpread util.HTML2ENML )
 * 
 * @param  {string} convert string
 * @param  {string} url
 * 
 * @return {string} convert string
 */
function html2enml(html, url) {
    var $target = void 0,
        str = void 0;
    var tags = ["figure", "sup", "hr", "section", "applet", "base", "basefont", "bgsound", "blink", "body", "button", "dir", "embed", "fieldset", "form", "frame", "frameset", "head", "html", "iframe", "ilayer", "input", "isindex", "label", "layer", "legend", "link", "marquee", "menu", "meta", "noframes", "noscript", "object", "optgroup", "option", "param", "plaintext", "script", "select", "style", "textarea", "xml"];

    $("html").append("<div id=\"simpread-en\" style=\"display: none;\">" + html + "</div>");
    $target = $("#simpread-en");
    $target.find("img:not(.sr-rd-content-nobeautify)").map(function (index, item) {
        $("<div>").attr("style", "width: " + item.naturalWidth + "px; height:" + item.naturalHeight + "px; background: url(" + item.src + ")").replaceAll($(item));
    });
    $target.find(tags.join(",")).map(function (index, item) {
        $("<div>").html($(item).html()).replaceAll($(item));
    });
    $target.find(tags.join(",")).remove();
    str = $target.html();
    $target.remove();

    try {
        str = "<blockquote>\u672C\u6587\u7531 <a href=\"http://ksria.com/simpread\" target=\"_blank\">\u7B80\u60A6 SimpRead</a> \u8F6C\u7801\uFF0C\u539F\u6587\u5730\u5740 <a href=\"" + url + "\" target=\"_blank\">" + url + "</a></blockquote><hr></hr><br></br>" + str;
        str = str.replace(/(id|class|onclick|ondblclick|accesskey|data|dynsrc|tabindex)="[\w- ]+"/g, "")
        //.replace( / style=[ \w="-:\/\/:#;]+/ig, "" )             // style="xxxx"
        .replace(/label=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/ig, "") // label="xxxx"
        .replace(/ finallycleanhtml=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/ig, "") // finallycleanhtml="xxxx"
        .replace(/<img[ \w="-:\/\/?!]+>/ig, "") // <img>
        .replace(/data[-\w]*=[ \w=\-.:\/\/?!;+"]+"[ ]?/ig, "") // data="xxx" || data-xxx="xxx"
        .replace(/href="javascript:[\w()"]+/ig, "") // href="javascript:xxx"
        .replace(/sr-blockquote/ig, "blockquote") // sr-blockquote to blockquote
        .replace(/<p[ -\w*= \w=\-.:\/\/?!;+"]*>/ig, "") // <p> || <p > || <p xxx="xxx">
        .replace(/<figcaption[ -\w*= \w=\-.:\/\/?!;+"]*>/ig, "") // <figcaption >
        .replace(/<\/figcaption>/ig, "") // </figcaption>
        .replace(/<\/br>/ig, "") // </br>
        .replace(/<br>/ig, "<br></br>").replace(/<\/p>/ig, "<br></br>");

        return str;
    } catch (error) {
        return "<div>\u8F6C\u6362\u5931\u8D25\uFF0C\u539F\u6587\u5730\u5740 <a href=\"" + url + "\" target=\"_blank\">" + url + "</a></div>";
    }
}

/**
 * Clear Html to MD, erorr <tag>( from simpread util.HTML2ENML )
 * 
 * @param {string} convert string
 */
function clearMD(str) {
    str = "<blockquote><p>\u672C\u6587\u7531 <a href=\"http://ksria.com/simpread/\" target=\"_blank\">\u7B80\u60A6 SimpRead</a> \u8F6C\u7801\uFF0C \u539F\u6587\u5730\u5740 <a href=\"" + window.location.href + "\" target=\"_blank\">" + window.location.href + "</a></p></blockquote>\r\n\r\n " + str;
    str = str.replace(/<\/?(ins|font|span|div|canvas|noscript|fig\w+)[ -\w*= \w=\-.:&\/\/?!;,%+()#'"{}\u4e00-\u9fa5]*>/ig, "").replace(/sr-blockquote/ig, "blockquote").replace(/<\/?style[ -\w*= \w=\-.:&\/\/?!;,+()#"\S]*>/ig, "").replace(/(name|lable)=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/ig, "");
    return str;
}