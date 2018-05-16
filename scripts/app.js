
var pr = new PureRead();
pr.Addsites(website_list);
pr.AddPlugin(puplugin.Plugin());
pr.Getsites();
if (pr.state == "none") {
    alert(location.href);
    new Notify().Render("当前页面不支持简悦的阅读模式");
} else readMode(pr, puplugin, $);

/**
 * User Agent
 * 
 * @return {string} ipad and iphone
 */
function userAgent() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/iphone/i) == "iphone") {
        return "iphone";
    } else {
        return "ipad";
    }
}

/**
 * Set style
 * 
 * @param {object} puplugin.Plugin( "style" )
 */
function setStyle(style) {
    if (userAgent() == "iphone") {
        style.FontSize("62.5%");
        $("sr-read").css({ "padding": "0 50px" });
        $("head").append("<style type=\"text/css\">" + theme_gothic + "</style>");
    } else {
        style.FontSize("72%");
        style.Layout("10%");
        $("head").append("<style type=\"text/css\">" + theme_pixyii + "</style>");
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
            $("fab").css({ opacity: 0 });
        } else {
            $("fab").css({ opacity: 1 });
        }
        cur = next;
    });
}

/**
 * Read mode
 */
function readMode(pr, puplugin, $) {
    var $root = $("html"),
    bgtmpl = "<div class=\"simpread-read-root\">\n                        <sr-read>\n                            <sr-rd-title></sr-rd-title>\n                            <sr-rd-desc></sr-rd-desc>\n                            <sr-rd-content></sr-rd-content>\n                            <sr-page></sr-page>\n                            <sr-rd-footer>\n                                <sr-rd-footer-text style=\"display:none;\">\u5168\u6587\u5B8C</sr-rd-footer-text>\n                                <sr-rd-footer-copywrite>\n                                    <span>\u672C\u6587\u7531 \u7B80\u60A6 </span><a href=\"http://ksria.com/simpread\" target=\"_blank\">SimpRead</a><span> \u4F18\u5316\uFF0C\u7528\u4EE5\u63D0\u5347\u9605\u8BFB\u4F53\u9A8C\u3002</span>\n                                </sr-rd-footer-copywrite>\n                                </sr-rd-footer>\n                            <sr-rd-crlbar>\n                                <fab class=\"evernote\"></fab>\n                                <fab class=\"pocket\"></fab>\n                                <fab class=\"crlbar-close\"></fab>\n                            </sr-rd-crlbar>\n                        </sr-read>\n                    </div>",
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
        if (pr.html.include.includes && pr.html.include.includes("sr-rd-content-error")) {
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

    setStyle(puplugin.Plugin("style"));
    controlbar();
    service();

    // exit
    $(".simpread-read-root sr-rd-crlbar fab.crlbar-close").one("click", function (event) {
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
        };
        if (type == "pocket") {
            $.ajax({
                url: server + "/service/add",
                type: "POST",
                data: {
                    name: "pocket",
                    token: "68d4c6c6-7460-b8e3-96c5-7a176f",
                    tags: "temp",
                    title: pr.html.title,
                    url: location.href
                }
            }).done(success).fail(failed);
        } else if (type == "evernote") {
            $.ajax({
                url: server + "/evernote/add",
                type: "POST",
                headers: { sandbox: false, china: false, type: "evernote" },
                data: {
                    token: "S=s1:U=120a6:E=16739f21c19:C=15fe240ee38:P=81:A=wonle-9146:V=2:H=e95d8333616d0ec4946bbfca9e5b9c6d",
                    title: pr.html.title,
                    content: pr.html.include
                }
            }).done(success).fail(failed);
        }
    };
    $("sr-rd-crlbar fab.pocket").click(clickEvent);
    $("sr-rd-crlbar fab.evernote").click(clickEvent);
}