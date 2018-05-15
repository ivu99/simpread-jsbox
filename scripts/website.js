var website_list = {
    "sites"  : [{
        "name"    : "cnbeta.com",
        "url"     : "http*://*.cnbeta.com/articles/*/*",
        "title"   : "[[{$('header.title h1').text()}]]",
        "desc"    : "[[{$('.article-summary').text()}]]",
        "include" : "<div class='article-content'>",
        "exclude" : [
            "<div class='clearfix'>",
            "<div class='rating_box'>",
            "[['<strong>[广告]活动入口:</strong>']]",
            "<div class='article-relation'>"
        ]
    },{
        "name"    : "qdaily.com",
        "url"     : "http://www.qdaily.com/articles/",
        "title"   : "<h2 class='title'>",
        "desc"    : "<p class='excerpt'>",
        "include" : "<div class='article-detail-bd'>",
        "exclude" : [
            "<div class='author-share'>",
            "<div class='embed-control'>"
        ]
    },{
        "name"    : "36kr.com",
        "url"     : "http://36kr.com/p/",
        "title"   : "<title>",
        "desc"    : "<section class='summary'>",
        "include" : "<section class='textblock'>",
        "exclude" : [
            "<div class='author-panel'>",
            "<section class='article-footer-label'>",
            "<section class='report-code-section'>",
            "<section class='single-post-tags'>",
            "<div class='share-nav'>"
        ]
    },{
        "name"    : "pingwest.com",
        "url"     : "http://www.pingwest.com/",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div id='sc-container'>",
        "exclude" : [
            "<p class='post-footer-wx'>"
        ]
    },{
        "name"    : "pingwest.com",
        "url"     : "http://www.pingwest.com/wire/",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div id='sc-container'>",
        "exclude" : [
            "<p class='post-footer-wx'>"
        ]
    },{
        "name"    : "jiemian.com",
        "url"     : "http://www.jiemian.com/article/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='article-main'>",
        "exclude" : [
            "<div class='share-view'>",
            "[[[$('.article-btn')]]]",
            "<div class='article-footer'>",
            "<p class='report-view'>",
            "[[/src=\\S+(146241438767289600_a580xH)\\S+'/]]"
        ]
    },{
        "name"    : "news.ifanr.com",
        "url"     : "http://www.ifanr.com/news/",
        "title"   : "<h1 class='c-single-normal__title'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "minapp.ifanr.com",
        "url"     : "http://www.ifanr.com/minapp/",
        "title"   : "<h1 class='c-single-normal__title'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            "[['<span>本文由知晓程序授权转载</span>']]",
            "[[/src=\\S+(new_zx-1)\\S+'/]]",
            "[[/src=\\S+(zxcx-qun-1)\\S+'/]]"
        ]
    },{
        "name"    : "app.ifanr.com",
        "url"     : "http://www.ifanr.com/app/",
        "title"   : "<title>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "<article>",
        "exclude" : [
            "<div class='c-appso-download'>",
            "[['<strong>本文由让手机更好用</strong>']]",
            "[[/src=\\S+(AppSo-qrcode-signature)\\S+'/]]",
            "[['<strong>▽</strong>']]",
            "[[/src=\\S+(banner2)\\S+'/]]"
        ]
    },{
        "name"    : "dasheng.ifanr.com",
        "url"     : "http://www.ifanr.com/dasheng/",
        "title"   : "<p class='c-single-dasheng__content'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "data.ifanr.com",
        "url"     : "http://www.ifanr.com/data/",
        "title"   : "<p class='c-single-data__desc'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "weizhizao.ifanr.com",
        "url"     : "http://www.ifanr.com/weizhizao/",
        "title"   : "<h1 class='c-single-normal__title'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "ifanr.com",
        "url"     : "http://www.ifanr.com/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            "[['<span>快速关注知晓程序</span>']]",
            "[['<strong>本文由知晓程序原创出品</strong>']]",
            "[['<strong>爱范儿旗下专注于小程序生态的公众号</strong>']]",
            "<div class='entry-header'>",
            "<div class='entry-meta'>",
            "<a class='entry-comment-number'>",
            "<div class='article-header'>",
            "<div class='article-jiong-banner'>",
            "<div class='popup'>",
            "<div class='article-sns-tool'>",
            "[[/src=\\S+(zxcx-1)\\S+'/]]"
        ]
    },{
        "name"    : "minapp.com",
        "url"     : "https://minapp.com/article/",
        "title"   : "<h1 class='article-header-title'>",
        "desc"    : "",
        "include" : "<div class='origin-content'>",
        "exclude" : [
            "[['<strong>本文由知晓程序</strong>']]",
            "[[/src=\\S+(zxcx_0208)\\S+'/]]"
        ]
    },{
        "name"    : "sspai.com",
        "url"     : "https://sspai.com/post/",
        "title"   : "<h1 class='title'>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "[[[$('.content')]]]",
        "exclude" : [
            "<img id='s1' >",
            "<hr>",
            "[['<span>我们主张分享真实的产品体验</span>']]",
            "[['<span>本文内容仅代表作者本人观点</span>']]",
            "[[/src=\\S+(342459.png)\\S+'/]]"
        ]
    },{
        "name"    : "dgtle.com",
        "url"     : "http*://www.dgtle.com/article-*.html",
        "title"   : "<title>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "<div class='view_content'>",
        "exclude" : [
            "<div id='comments_top'>",
            "[[/src=\\S+(xxxxxbbs)\\S+'/]]"
        ]
    },{
        "name"    : "bbs.dgtle.com",
        "url"     : "http*://*.dgtle.com/thread-*.html",
        "title"   : "<title>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "<div class='forum-viewthread-article-box'>",
        "exclude" : [
            "<div id='comments_top'>",
            "[[/src=\\S+(xxxxxbbs)\\S+'/]]"
        ]
    },{
        "name"    : "zhuanlan.zhihu.com",
        "url"     : "https://zhuanlan.zhihu.com/p/",
        "title"   : "<h1 class='Post-Title'>",
        "desc"    : "",
        "include" : "<div class='RichText Post-RichText'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "dudu.zhihu.com",
        "url"     : "http://dudu.zhihu.com/story/",
        "title"   : "<h1 class='headline-title'>",
        "desc"    : "",
        "include" : "<div class='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "daily.zhihu.com",
        "url"     : "https://daily.zhihu.com/story/",
        "title"   : "<h1 class='headline-title'>",
        "desc"    : "",
        "include" : "[[[$('.content')]]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "question.zhihu.com",
        "url"     : "https://www.zhihu.com/question/**/*",
        "type"    : "multi",
        "avatar"  : [
            {"name" : "[[{$('.AuthorInfo-name')}]]"},
            {"url"  : "[[{$('.AuthorInfo-avatar')}]]"}
        ],
        "title"   : "[[{$($('.QuestionHeader-main').find('h1')[0]).text()}]]",
        "desc"    : "",
        "include" : "[[{$('.RichContent-inner')}]]",
        "exclude" : [
            "<i class='icon-external'>"
        ]
    },{
        "name"    : "geekpark.net",
        "url"     : "http://www.geekpark.net/topics/",
        "title"   : "<h1 class='topic-title'>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "<article class='article-body'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "jianshu.com",
        "url"     : "http://www.jianshu.com/p/",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div class='show-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "waerfa.com",
        "url"     : "http://www.waerfa.com/",
        "title"   : "<h1 class='Article__title'>",
        "desc"    : "",
        "include" : "<div class='Article__content'>",
        "exclude" : [
            "<div class='u-post-share-wrap'>"
        ]
    },{
        "name"    : "mp.weixin.qq.com",
        "url"     : "http://mp.weixin.qq.com/*",
        "title"   : "<h2 id='activity-name'>",
        "desc"    : "",
        "include" : "<div id='js_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "article.guokr.com",
        "url"     : "http://www.guokr.com/article/",
        "title"   : "<h1 id='articleTitle'>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "<div id='articleContent'>",
        "exclude" : [
            "<div class='article-extend'>",
            "<p class='copyright'>"
        ]
    },{
        "name"    : "post.guokr.com",
        "url"     : "http://www.guokr.com/post/",
        "title"   : "<h1 id='articleTitle'>",
        "desc"    : "",
        "include" : "<div id='articleContent'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "question.guokr.com",
        "url"     : "http://www.guokr.com/question/*",
        "avatar"  : [
            {"name" : "[[{$('.p_author_name')}]]"},
            {"url"  : "[[{$('.p_author_face').find('img')}]]"}
        ],
        "title"   : "<h1 id='articleTitle'>",
        "desc"    : "",
        "include" : "[[{$('.gbbcode-content')}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "zuimeia.com",
        "url"     : "http://zuimeia.com/app/",
        "title"   : "<span class='sub-title'>",
        "desc"    : "<div class='short-des'>",
        "include" : "<div id='article_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "huxiu.com",
        "url"     : "https://www.huxiu.com/article/",
        "title"   : "<h1 class='t-h1'>",
        "desc"    : "",
        "include" : "<div class='article-content-wrap'>",
        "exclude" : [
            "<div class='neirong-shouquan'>",
            "<div class='neirong-shouquan-public'>"
        ]
    },{
        "name"    : "moment.douban.com",
        "url"     : "https://moment.douban.com/post/*/",
        "title"   : "<h1 id='title'>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "douban.com",
        "url"     : "https://www.douban.com/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='link-report'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "qingmang.me",
        "url"     : "http://qingmang.me/magazines/*/**/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            "<header>"
        ]
    },{
        "name"    : "leiphone.com",
        "url"     : "https://www.leiphone.com/news/*/*.html",
        "title"   : "<h1 class='headTit'>",
        "desc"    : "",
        "include" : "<div class='lph-article-comView'>",
        "exclude" : [
            "[['<span>公众号：雷锋网</span>']]",
            "[['<p>未经授权禁止转载</p>']]"
        ]
    },{
        "name"    : "tmtpost.com",
        "url"     : "http://www.tmtpost.com/*.html",
        "title"   : "<h1>",
        "desc"    : "<p class='post-abstract'>",
        "include" : "<article>",
        "exclude" : [
            "<h1>",
            "<div class='post-info'>",
            "<p class='post-abstract'>",
            "<div class='pro_icon'>",
            "<div class='pro_intro tc'>",
            "[['<strong>更多精彩内容</strong>']]",
            "[['<strong>关注钛媒体微信号</strong>']]",
            "[[/src=\\S+(wzny_ewm)\\S+'/]]"
        ]
    },{
        "name"    : "songshuhui.net",
        "url"     : "http://songshuhui.net/archives/",
        "title"   : "<span class='contenttitle'>",
        "desc"    : "",
        "include" : "<div class='entry'>",
        "exclude" : [
            "<div class='bshare-custom'>",
            "<div class='my-related-posts-box'>",
            "[['<strong>相关文章</strong>']]"
        ]
    },{
        "name"    : "infzm.com",
        "url"     : "http://www.infzm.com/content/",
        "title"   : "<h1 class='articleHeadline'>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "<section id='articleContent'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "nationalgeographic.com.cn",
        "url"     : "http://www.nationalgeographic.com.cn/**/*/*.html",
        "title"   : "<div class='title'>",
        "desc"    : "",
        "include" : "<div id='detailMain_box_img'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "appinn.com",
        "url"     : "http*://www.appinn.com/*/",
        "title"   : "<h2 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "<div class='open_social_box'>",
            "<div class='os-share-box'>",
            "[[/src=\\S+(ds-logo-1-2-64)\\S+'/]]",
            "[[/src=\\S+(down)\\S+'/]]"
        ]
    },{
        "name"    : "apprcn.com",
        "url"     : "http://www.apprcn.com/*.html",
        "title"   : "<h2 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "<div class='wumii-hook'>",
            "<div id='wumiiDisplayDiv'>",
            "<div id='wp-share-list-container'>"
        ]
    },{
        "name"    : "playpcesor.com",
        "url"     : "http*://www.playpcesor.com/**/*.html",
        "title"   : "<h3 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "steachs.com",
        "url"     : "https://steachs.com/archives/",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='post-contents'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "azofreeware.com",
        "url"     : "http*://www.azofreeware.com/**/*.html",
        "title"   : "<h2 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "weibo.com",
        "url"     : "http*://weibo.com/ttarticle/p/*",
        "title"   : "[[{$('.main_editor ').find('.title').text()}]]",
        "desc"    : "",
        "include" : "<div class='WB_editor_iframe'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "leikeji.com",
        "url"     : "http://www.leikeji.com/article/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<div class='article-body'>",
        "exclude" : [
            "<div class='signature-qr'>",
            "<ul class='tag-list'>"
        ]
    },{
        "name"    : "xueqiu.com",
        "url"     : "http*://xueqiu.com/*/*",
        "title"   : "<h1 class='article__bd__title'>",
        "desc"    : "",
        "include" : "<div class='article__bd__detail'>",
        "exclude" : [
            "<script class='single-description'>",
            "<a class='ke_img_link'>"
        ]
    },{
        "name"    : "chuansong.me",
        "url"     : "http://chuansong.me/n/",
        "title"   : "<h2 id='activity-name'>",
        "desc"    : "",
        "include" : "<div id='js_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "stream.107cine.cm",
        "url"     : "http://107cine.com/stream/*",
        "title"   : "<h2>",
        "desc"    : "",
        "include" : "<div class='flow_content'>",
        "exclude" : [
            "<div class='postfix'>",
            "[['<p>影视工业网不会对原创文章作任何编辑</p>']]"
        ]
    },{
        "name"    : "zhuanti.107cine.cm",
        "url"     : "http://107cine.com/zhuanti/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='zhuanti'>",
        "exclude" : [
            "<div class='z-top'>",
            "<div class='datu'>"
        ]
    },{
        "name"    : "jiemi.baike.com",
        "url"     : "http://jiemi.baike.com/pa/detail?id=*",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div class='jiemi-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "wikipedia.org",
        "url"     : "https://*.wikipedia.org/wiki/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='mw-parser-output'>",
        "exclude" : [
            "<div id='toc'>",
            "<table class='infobox'>",
            "<span class='mw-editsection'>",
            "<table class='navbox'>",
            "<div class='thumb'>",
            "<div class='dablink'>",
            "<table class='metadata'>"
        ]
    },{
        "name"    : "article.pmcaff.com",
        "url"     : "http*://www.pmcaff.com/article/index/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='editorContent'>",
        "exclude" : [
            "[[/src=\\S+(FlHy2hPIJYsjjeQRRKHhk0yfoLv)\\S+'/]]",
            "[['<b>本文由PMCAFF专栏作者</b>']]",
            "[['<strong>本文由</strong>']]",
            "[['<strong>版权归原作者所有</strong>']]"
        ]
    },{
        "name"    : "discuss.pmcaff.com",
        "url"     : "http*://www.pmcaff.com/discuss/answer/*",
        "title"   : "<title>",
        "desc"    : "<div class='discussion-content'>",
        "include" : "[[{$('.panel-body').find('.content').html()}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "answer.pmcaff.com",
        "url"     : "http*://www.pmcaff.com/discuss/index/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='editorContent'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "dxy.cn",
        "url"     : "http://*.dxy.cn/article/*",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            "<div class='x_detail_btm'>"
        ]
    },{
        "name"    : "faq.dxy.com",
        "url"     : "https://dxy.com/faq/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='editor-style'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "column.dxy.com",
        "url"     : "https://dxy.com/column/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='editor-body'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "creative.adquan.com",
        "url"     : "http://creative.adquan.com/show/*",
        "title"   : "<h2 class='text_title'>",
        "desc"    : "",
        "include" : "<div class='con_Text'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "post.adquan.com",
        "url"     : "http://www.adquan.com/post-*.html",
        "title"   : "<h2 class='text_title'>",
        "desc"    : "",
        "include" : "<div class='con_Text'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "gonglve.mafengwo.cn",
        "url"     : "http*://www.mafengwo.cn/gonglve/ziyouxing/*.html",
        "title"   : "<h1>",
        "desc"    : "[[{$('meta[name=description]').attr('content')}]]",
        "include" : "<div class='_j_content'>",
        "exclude" : [
            "<section class='travelnote'>",
            "<div class='product-box'>",
            "<div class='pro_list'>"
        ]
    },{
        "name"    : "i.mafengwo.cn",
        "url"     : "http*://www.mafengwo.cn/i/*.html",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='vc_article'>",
        "exclude" : [
            "<a class='_j_anchor'>",
            "<div id='_j_paragraph_1'>"
        ]
    },{
        "name"    : "bohaishibei.com",
        "url"     : "https://bohaishibei.com/post/*/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "read.bilibili.com",
        "url"     : "https://www.bilibili.com/read/cv*",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div class='article-holder'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "www.yixieshi.com",
        "url"     : "http*://www.yixieshi.com/*.html",
        "title"   : "<h1 class='post-title'>",
        "desc"    : "",
        "include" : "<article class='article-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "blog.jobbole.com",
        "url"     : "http://blog.jobbole.com/*/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='entry'>",
        "exclude" : [
            "<div class='copyright-area'>",
            "<blockquote class='rewards'>",
            "<div class='post-adds'>",
            "<div id='author-bio'>"
        ]
    },{
        "name"    : "android.jobbole.com",
        "url"     : "http://android.jobbole.com/*/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='entry'>",
        "exclude" : [
            "<div class='copyright-area'>",
            "<blockquote class='rewards'>",
            "<div class='post-adds'>",
            "<div id='author-bio'>"
        ]
    },{
        "name"    : "ios.jobbole.com",
        "url"     : "http://ios.jobbole.com/*/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='entry'>",
        "exclude" : [
            "<div class='copyright-area'>",
            "<blockquote class='rewards'>",
            "<div class='post-adds'>",
            "<div id='author-bio'>"
        ]
    },{
        "name"    : "python.jobbole.com",
        "url"     : "http://python.jobbole.com/*/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='entry'>",
        "exclude" : [
            "<div class='copyright-area'>",
            "<blockquote class='rewards'>",
            "<div class='post-adds'>",
            "<div id='author-bio'>"
        ]
    },{
        "name"    : "top.jobbole.com",
        "url"     : "http://top.jobbole.com/*/",
        "title"   : "<h1 class='p-tit-single'>",
        "desc"    : "",
        "include" : "<div class='p-entry'>",
        "exclude" : [
            "<div class='textwidget'>"
        ]
    },{
        "name"    : "cnodejs.org",
        "url"     : "https://cnodejs.org/topic/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='topic_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "w3cplus.com",
        "url"     : "https://www.w3cplus.com/**/*.html",
        "title"   : "<h1 id='page-title'>",
        "desc"    : "",
        "include" : "<div class='body-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "w3cways.com",
        "url"     : "https://www.w3cways.com/*.html",
        "title"   : "[[{$('.container').find('h2 span').text()}]]",
        "desc"    : "",
        "include" : "<article class='article-content'>",
        "exclude" : [
            "<p class='post-copyright'>"
        ]
    },{
        "name"    : "div.io",
        "url"     : "http://div.io/topic/",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='topic-firstfloor-detail'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.aotu.io",
        "url"     : "https://news.aotu.io/a/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='news-body'>",
        "exclude" : [
            "[['<p>未经许可，禁止转载。</p>']]"
        ]
    },{
        "name"    : "aotu.io",
        "url"     : "https://aotu.io/notes/**/*/*/",
        "title"   : "<h1 class='post-tit'>",
        "desc"    : "",
        "include" : "<div class='post-content'>",
        "exclude" : [
            "<div class='post-revision'>"
        ]
    },{
        "name"    : "ruby-china.org",
        "url"     : "https://ruby-china.org/topics/",
        "title"   : "<h1 class='media-heading'>",
        "desc"    : "",
        "include" : "[[{$($('.panel-body')[0]).html()}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "infoq.com",
        "url"     : "http://www.infoq.com/cn/articles/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='text_info_article'>",
        "exclude" : [
            "<div class='random_links'>",
            "<div id='comment_here'>",
            "<div class='comments'>",
            "<div class='all_comments'>",
            "<div id='overlay_comments'>",
            "<div id='replyPopup'>",
            "<div id='editCommentPopup'>",
            "<div id='messagePopup'>",
            "<div id='responseContent'>",
            "[['<p>对本文的审校</p>']]",
            "[['<p>中文站投稿或者参与内容翻译工作</p>']]",
            "[['<b>QCon北京2017</b>']]"
        ]
    },{
        "name"    : "news.infoq.com",
        "url"     : "http://www.infoq.com/cn/news/**/*",
        "title"   : "<h1 class='general'>",
        "desc"    : "",
        "include" : "<div class='text_info'>",
        "exclude" : [
            "<div class='random_links'>"
        ]
    },{
        "name"    : "segmentfault.com",
        "url"     : "https://segmentfault.com/a/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='article__content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "post.juejin.im",
        "url"     : "http*://juejin.im/post/*",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<div class='article-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "entry.juejin.im",
        "url"     : "http*://juejin.im/entry/*",
        "title"   : "[[{$('.entry-public-view h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "qianduan.net",
        "url"     : "https://www.qianduan.net/*/",
        "title"   : "<h1 class='post-title'>",
        "desc"    : "",
        "include" : "<section class='post-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "importnew.com",
        "url"     : "http://www.importnew.com/*.html",
        "title"   : "<div class='entry-header'>",
        "desc"    : "",
        "include" : "<div class='entry'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "solidot.org",
        "url"     : "https://www.solidot.org/story?sid=*",
        "title"   : "<div class='bg_htit'>",
        "desc"    : "",
        "include" : "<div class='p_mainnew'>",
        "exclude" : [
            "[[/src=\\S+(liiLIZF8Uh6yM.jpg)\\S+/]]"
        ]
    },{
        "name"    : "ifeve.com",
        "url"     : "http://ifeve.com/*/",
        "title"   : "<h3 class='title'>",
        "desc"    : "",
        "include" : "<div class='post_content'>",
        "exclude" : [
            "<div id='jiathis_style_32x32'>",
            "<div class='abh_box'>",
            "<span class='wpfp-span'>",
            "<div class='yarpp-related'>",
            "[['<p>转载请注明</p>']]",
            "[[/src=\\S+(ifeve500X150)\\S+'/]]"
        ]
    },{
        "name"    : "code.oschina.net",
        "url"     : "https://www.oschina.net/code/snippet_*_*",
        "title"   : "[[{$('.QTitle').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='Body'>",
        "exclude" : [
            "<div class='Title'>",
            "<div id='toolbar_wrapper'>",
            "[[[$('.code_pieces').find('h2')]]]",
            "<div class='toolbar'>",
            "<div class='QuestionRelations'>",
            "<div id='related_codes'>",
            "<div class='code_comments'>",
            "<div class='CommentForm'>",
            "[['<p>开源中国-程序员在线工具</p>']]",
            "<i class='jump_to_code'>",
            "<div class='code_report'>"
        ]
    },{
        "name"    : "translate.oschina.net",
        "url"     : "https://www.oschina.net/translate/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "project.oschina.net",
        "url"     : "https://www.oschina.net/p/",
        "title"   : "[[{$('header.box').find('a').attr('title')}]]",
        "desc"    : "",
        "include" : "<div class='editor-viewer'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "my.oschina.net",
        "url"     : "https://my.oschina.net/**/*/blog/*",
        "title"   : "<title>",
        "desc"    : "<div class='blog-abstract'>",
        "include" : "<div class='BlogContent'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "oschina.net",
        "url"     : "https://www.oschina.net/news/**/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='editor-viewer'>",
        "exclude" : [
            "[[/src=\\S+(hot3)\\S+'/]]",
            "<div class='thumb'>"
        ]
    },{
        "name"    : "question.oschina.net",
        "url"     : "https://www.oschina.net/question/*_*",
        "title"   : "<span class='question-title-link'>",
        "desc"    : "",
        "include" : "<header class='detail'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "geek.csdn.net",
        "url"     : "http*://geek.csdn.net/news/detail/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='news_description'>",
        "exclude" : [
            "[['<p>欢迎关注CSDN大数据公众号</p>']]",
            "[['<strong>关注以下公众号</strong>']]",
            "[[/src=\\S+(20170119091646909)\\S+'/]]",
            "[[/src=\\S+(20170119152206448)\\S+'/]]",
            "[[/src=\\S+(20170120110155787)\\S+'/]]",
            "[[/src=\\S+(8tPUexU)\\S+'/]]"
        ]
    },{
        "name"    : "blog.csdn.net",
        "url"     : "http*://blog.csdn.net/*/article/details/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='article_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "lib.csdn.net",
        "url"     : "http*://lib.csdn.net/article/*/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='divtexts'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "hacpai.com",
        "url"     : "https://hacpai.com/article/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<div class='article-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "freebuf.com",
        "url"     : "http://www.freebuf.com/**/*/*.html",
        "title"   : "[[{$('.title h2').text()}]]",
        "desc"    : "",
        "include" : "<div id='contenttxt'>",
        "exclude" : [
            "[['<b>注明来自</b>']]"
        ]
    },{
        "name"    : "ruanyifeng.com",
        "url"     : "http://www.ruanyifeng.com/blog/**/*/*.html",
        "title"   : "<h1 id='page-title'>",
        "desc"    : "",
        "include" : "<div id='main-content'>",
        "exclude" : [
            "[['<p>（完）</p>']]"
        ]
    },{
        "name"    : "v2ex.com",
        "url"     : "https://www.v2ex.com/t/",
        "title"   : "[[{$('.header h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='topic_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.cnblogs.com",
        "url"     : "https://news.cnblogs.com/n/",
        "title"   : "<div id='news_title'>",
        "desc"    : "",
        "include" : "<div id='news_body'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "cnblogs.com",
        "url"     : "http://www.cnblogs.com/**/*/*.html",
        "title"   : "<a id='cb_post_title_url'>",
        "desc"    : "",
        "include" : "<div id='cnblogs_post_body'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "tuicool.com",
        "url"     : "http://www.tuicool.com/articles/",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='article_body'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "w3ctech.com",
        "url"     : "https://www.w3ctech.com/topic/",
        "title"   : "[[{$('.topic_info ').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='callout'>",
        "exclude" : [
            "[['<h2>关注我们</h2>']]",
            "[['<p>本文原文</p>']]",
            "[['<p>我们专注于H5技术生态的改善</p>']]",
            "[['<p>欢迎有兴趣的同行一起来玩儿</p>']]",
            "[[/src=\\S+(yufe2015)\\S+'/]]",
            "<div id='wx-qrcode'>"
        ]
    },{
        "name"    : "html-js.com",
        "url"     : "http://www.html-js.com/article/",
        "title"   : "[[{$('.wrapper ').find('div[rel=bookmark]').text()}]]",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "<div class='entry-meta'>"
        ]
    },{
        "name"    : "open-open.com",
        "url"     : "http://www.open-open.com/lib/*/*.html",
        "title"   : "<h1 id='articleTitle'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "colobu.com",
        "url"     : "http://colobu.com/**/*/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<div class='article-entry'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "liqi.io",
        "url"     : "http://liqi.io/*/",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "[['<span>你也可以分享自己的利器</span>']]"
        ]
    },{
        "name"    : "daqianduan.com",
        "url"     : "http://www.daqianduan.com/*.html",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<article class='article-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "caibaojian.com",
        "url"     : "http://caibaojian.com/*.html",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "<div class='article_index'>",
            "[['<span>原创翻译，未经许可，禁止转载</span>']]"
        ]
    },{
        "name"    : "hao.caibaojian.com",
        "url"     : "http://hao.caibaojian.com/*.html",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "<div class='article_index'>",
            "[['<span>原创翻译，未经许可，禁止转载</span>']]"
        ]
    },{
        "name"    : "xfenglin.com",
        "url"     : "http://xfenglin.com/a/",
        "title"   : "[[{$('.t-head').find('h2').text()}]]",
        "desc"    : "",
        "include" : "<div class='article__content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "ibm.com",
        "url"     : "https://www.ibm.com/developerworks/cn/**/*/*.html",
        "title"   : "<h1 id='ibm-pagetitle-h1'>",
        "desc"    : "",
        "include" : "<div class='ibm-col-6-4'>",
        "exclude" : [
            "<h1 id='ibm-pagetitle-h1'>",
            "<div class='dw-article-topbar'>",
            "<div class='ibm-alternate-rule'>",
            "<h4 id='artrelatedtopics'>",
            "<ul class='ibm-plain-list'>",
            "<div id='dw-article-cmts-top'>",
            "<div class='dw-article-cmts-container'>",
            "<p class='ibm-ind-link'>",
            "<div class='dw-article-sidebar'>"
        ]
    },{
        "name"    : "guanggoo.com",
        "url"     : "http://www.guanggoo.com/t/",
        "title"   : "<h3 class='title'>",
        "desc"    : "",
        "include" : "[[{$($('.ui-content')[0]).html()}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "ctolib.com",
        "url"     : "http://www.ctolib.com/*.html",
        "title"   : "<h3 class='m-t-xs'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            "<a class='anchor'>"
        ]
    },{
        "name"    : "zuojj.com",
        "url"     : "http://www.zuojj.com/archives/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<article class='article-content'>",
        "exclude" : [
            "<div class='copyright_con'>",
            "<div class='article-social'>"
        ]
    },{
        "name"    : "wkee.net",
        "url"     : "http://wkee.net/post/",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div id='content0'>",
        "exclude" : [
            "<p class='author'>",
            "<div class='sharebar'>"
        ]
    },{
        "name"    : "xituqu.com",
        "url"     : "https://xituqu.com/*.html",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div class='post-content'>",
        "exclude" : [
            "[['<h2>关注稀土区微信公众号，获取一手资源</h2>']]",
            "[[/src=\\S+(006tNc79gw1f6gzqizciyj3076076aai)\\S+'/]]"
        ]
    },{
        "name"    : "linuxsight.com",
        "url"     : "http://www.linuxsight.com/blog/",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='single-content'>",
        "exclude" : [
            "<div class='ad-site'>"
        ]
    },{
        "name"    : "coyee.com",
        "url"     : "https://coyee.com/article/",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='sections'>",
        "exclude" : [
            "<div class='section_side_bar'>"
        ]
    },{
        "name"    : "36dsj.com",
        "url"     : "http://www.36dsj.com/archives/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<article class='article-content'>",
        "exclude" : [
            "[['<p>转载请注明来自</p>']]",
            "[['<p>End.</p>']]"
        ]
    },{
        "name"    : "cocoachina.com",
        "url"     : "http://www.cocoachina.com/*/*/*.html",
        "title"   : "<h2>",
        "desc"    : "",
        "include" : "<div id='detailbody'>",
        "exclude" : [
            "<td class='gutter'>"
        ]
    },{
        "name"    : "dataunion.org",
        "url"     : "http://dataunion.org/*.html",
        "title"   : "<h1 class='mscctitle'>",
        "desc"    : "",
        "include" : "<div class='content-text'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "linux.cn",
        "url"     : "https://linux.cn/article-*.html",
        "title"   : "<h1 id='article_title'>",
        "desc"    : "",
        "include" : "<div id='article_content'>",
        "exclude" : [
            "[['<p>本文由</p>']]"
        ]
    },{
        "name"    : "techug.com",
        "url"     : "http://www.techug.com/post/",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div id='content0'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "article.ituring.com.cn",
        "url"     : "http://www.ituring.com.cn/article/",
        "title"   : "[[{$('.article-title').find('h2').text()}]]",
        "desc"    : "",
        "include" : "<div class='article'>",
        "exclude" : [
            "[['<h2>加入图灵访谈微信</h2>']]",
            "[[/src=\\S+(01YrJhnWRMld)\\S+'/]]"
        ]
    },{
        "name"    : "book.ituring.com.cn",
        "url"     : "http://www.ituring.com.cn/book/tupubarticle/",
        "title"   : "[[{$('.online-book-title').find('h3').text()}]]",
        "desc"    : "",
        "include" : "<div class='article-detail'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "issue.github.com",
        "url"     : "https://github.com/*/*/issues/*",
        "title"   : "[[{$('h1.gh-header-title .js-issue-title').text()}]]",
        "desc"    : "",
        "include" : "[[{$('#discussion_bucket table td.js-comment-body').html()}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "readme.github.com",
        "url"     : "https://github.com/**/*/README*.md",
        "title"   : "[[{$('title').text()}]]",
        "desc"    : "",
        "include" : "<article class='markdown-body'>",
        "exclude" : [
            "<a class='anchor'>"
        ]
    },{
        "name"    : "msdn.microsoft.com",
        "url"     : "https://msdn.microsoft.com/**/*/*.aspx",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            "<div id='navigationButtons'>"
        ]
    },{
      "name"    : "docs.microsoft.com",
      "url"     : "https://docs.microsoft.com/*/*/*",
      "title"   : "<h1>",
      "desc"    : "",
      "include" : "<div id='main'>",
      "exclude" : [
          ""
      ]
    },{
        "name"    : "developer.mozilla.org",
        "url"     : "https://developer.mozilla.org/*/docs/*/**/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<article id='wikiArticle'>",
        "exclude" : [
            "<aside id='helpful-survey'>",
            "<a class='section-edit'>"
        ]
    },{
        "name"    : "apps.mozilla.org",
        "url"     : "https://developer.mozilla.org/*/Apps/*/**/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<article id='wikiArticle'>",
        "exclude" : [
            "<aside id='helpful-survey'>",
            "<a class='section-edit'>"
        ]
    },{
      "name"    : "article.52im.net",
      "url"     : "http://www.52im.net/article-*.html",
      "title"   : "<h1 class='ph'>",
      "desc"    : "<div class='js-ptl-atcl-summery'>",
      "include" : "<td id='article_content'>",
      "exclude" : [
          ""
      ]
    },{
      "name"    : "thread.52im.net",
      "url"     : "http://www.52im.net/thread-*.html",
      "title"   : "<span id='thread_subject'>",
      "desc"    : "",
      "include" : "[[{$('td.t_f:first').html()}]]",
      "exclude" : [
          ""
      ]
    },{
        "name"    : "edaoe.com",
        "url"     : "http*://www.edaoe.com/*.html",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<article class='article-content'>",
        "exclude" : [
            "<div class='article-social'>"
        ]
    },{
        "name"    : "gallery.edaoe.com",
        "url"     : "http://www.edaoe.com/gallery/*.html",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<article class='article-content'>",
        "exclude" : [
            "<div class='article-social'>"
        ]
    },{
        "name"    : "chinabyte.cm",
        "url"     : "http://*.chinabyte.com/**/*/*.shtml",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='art_txt'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "wiki.jikexueyuan.com",
        "url"     : "http://wiki.jikexueyuan.com/project/*",
        "paging"  : [
            {"prev" : "[[{$('#previous_link').attr('href')}]]"},
            {"next" : "[[{$('#next_link').attr('href')}]]"}
        ],
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='markdown-body'>",
        "exclude" : [
            "<h1>",
            "<a rel='nofollow'>"
        ]
    },{
        "name"    : "ourcoders.com",
        "url"     : "http://ourcoders.com/thread/show/*/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "[[{$($('.threadblock')[0]).html()}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "uisdc.com",
        "url"     : "http://www.uisdc.com/*",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "<div class='similarity'>",
            "<div class='post-copyright'>",
            "[[/src=\\S+(youshege725)\\S+'/]]"
        ]
    },{
        "name"    : "kancloud.cn",
        "url"     : "http*://www.kancloud.cn/*/*/*",
        "paging"  : [
            {"prev" : "[[{$('.article-navigation').find('.prev a').attr('href')}]]"},
            {"next" : "[[{$('.article-navigation').find('.next a').attr('href')}]]"}
        ],
        "title"   : "[[{$('.article-head').find('h1').text()}]]",
        "desc"    : "",
        "include" : "[[{$($('.article-body')[0]).html()}]]",
        "exclude" : [
            "[[/src=\\S+(5a5e9e309af5e)\\S+'/]]"
        ]
    },{
        "name"    : "index.gitbook.com",
        "url"     : "http*://*.gitbooks.io/*/content/",
        "paging"  : [
            {"prev" : "[[{$('.navigation-prev').attr('href')}]]"},
            {"next" : "[[{$('.navigation-next').attr('href')}]]"}
        ],
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='page-inner'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "gitbook.com",
        "url"     : "http*://*.gitbooks.io/*/content/**/*",
        "paging"  : [
            {"prev" : "[[{$('.navigation-prev').attr('href')}]]"},
            {"next" : "[[{$('.navigation-next').attr('href')}]]"}
        ],
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='page-inner'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "index.developers.weixin.qq.com",
        "url"     : "http*://developers.weixin.qq.com/miniprogram/dev/",
        "paging"  : [
            {"prev" : "[[{$('.navigation-prev').attr('href')}]]"},
            {"next" : "[[{$('.navigation-next').attr('href')}]]"}
        ],
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<section class='markdown-section'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "developers.weixin.qq.com",
        "url"     : "http*://developers.weixin.qq.com/miniprogram/dev/**/*",
        "paging"  : [
            {"prev" : "[[{$('.navigation-prev').attr('href')}]]"},
            {"next" : "[[{$('.navigation-next').attr('href')}]]"}
        ],
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<section class='markdown-section'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "williamlong.info",
        "url"     : "http*://www.williamlong.info/archives/*.html",
        "title"   : "<h1 class='post-title'>",
        "desc"    : "",
        "include" : "<div id='artibody'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "blog.wanqu.co",
        "url"     : "https://wanqu.co/b/*/*.html*",
        "title"   : "[[{$('.blog-post-body h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='blog-post-body'>",
        "exclude" : [
            "<h1>"
        ]
    },{
        "name"    : "hacknews.codedata.cn",
        "url"     : "http://www.codedata.cn/hacknews/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "topics.codedata.cn",
        "url"     : "http://www.codedata.cn/topics/*",
        "title"   : "<h1 class='media-heading'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "teakki.com",
        "url"     : "https://teakki.com/p/*",
        "title"   : "<h1 class='content-title'>",
        "desc"    : "",
        "include" : "<div class='content-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "cppdaxue.com",
        "url"     : "http://cppdaxue.com/*/*.html",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<article class='article-content>",
        "exclude" : [
            "<div class='article-social'>"
        ]
    },{
        "name"    : "bobao.360.cn",
        "url"     : "http://bobao.360.cn/*/*/*.html",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='article_box'>",
        "exclude" : [
            "<h2>",
            "<div class='article-msg'>",
            "<hr>"
        ]
    },{
        "name"    : "thebigdata.cn",
        "url"     : "http://www.thebigdata.cn/*/*.html",
        "title"   : "<h1 class='aTitle'>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "blog.codingnow.com",
        "url"     : "https://blog.codingnow.com/*/*/*.html",
        "title"   : "<h3 class='entry-header'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "coolshell.cn",
        "url"     : "https://coolshell.cn/articles/*.html",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            "<div class='jiathis_style'>",
            "<div id='wp_rp_first'>",
            "<div class='post-ratings'>",
            "<footer class='entry-footer'>",
            "[[/src=\\S+(qrcode_for_gh_dd9d8c843f20_860)\\S+'/]]",
            "[[/src=\\S+(100offer_600_200)\\S+'/]]",
            "[['<p>微信公众账号可以在手机端搜索文章</p>']]",
            "[['<p>全文完</p>']]",
            "[['<strong>转载本站文章请注明作者</strong>']]",
            "[['<div>——===</div>']]",
            "[['<b>酷壳404页面</b>']]"
        ]
    },{
        "name"    : "kotlinguides.github.io",
        "url"     : "https://*.github.io/kotlin-guides/*.html",
        "title"   : "<h1 class='post-title'>",
        "desc"    : "",
        "include" : "<article class='post-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "readhub.me",
        "url"     : "http*://readhub.me/topic/",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='summary___1i4y3'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "voidcn.com",
        "url"     : "http://www.voidcn.com/blog/**/*/*.html",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<div class='post-content'>",
        "exclude" : [
            "<div class='wumii-hook'>",
            "[[/src=\\S+(pixel)\\S+'/]]"
        ]
    },{
        "name"    : "thepaper.cn",
        "url"     : "http://www.thepaper.cn/newsDetail_*",
        "title"   : "<h1 class='news_title'>",
        "desc"    : "",
        "include" : "<div class='news_txt'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "vice.cn",
        "url"     : "http://www.vice.cn/read/",
        "title"   : "<h3 class='article-title'>",
        "desc"    : "<div class='article-summary'>",
        "include" : "<div class='article-body'>",
        "exclude" : [
            "<div class='contributor-list'>",
            "<span class='site-signature-icon'></span>",
            "<div class='social-share social-share-btm'>",
            "<div class='article-copyright'>"
        ]
    },{
        "name"    : "jandan.net",
        "url"     : "http://jandan.net/**/*/*.html",
        "title"   : "[[{$('.post h1').text()}]]",
        "desc"    : "",
        "include" : "[[{$($('.post')[0]).html()}]]",
        "exclude" : [
            "<script>",
            "<h3>",
            "<div class='time_s'>",
            "<h1>",
            "<div class='shang'>",
            "<div class='star-rating>",
            "<a class='jandan-zan'>",
            "<span class='comment-big'>"
        ]
    },{
        "name"    : "post.smzdm.com",
        "url"     : "http://post.smzdm.com/p/",
        "title"   : "<h1 class='item-name'>",
        "desc"    : "",
        "include" : "<article>",
        "exclude" : [
            "<h1 class='item-name'>"
        ]
    },{
        "name"    : "news.mydrivers.com",
        "url"     : "http://news.mydrivers.com/*/*/*.htm",
        "title"   : "<div id='thread_subject'>",
        "desc"    : "",
        "include" : "<div class='news_info'>",
        "exclude" : [
            "<div class='btnPrev'>",
            "<div class='btnNext'>",
            "<div class='postpage'>",
            "<div class='adggg1'>",
            "<p class='news_bq'>",
            "<p class='jcuo1'>",
            "<div id='weixin'>",
            "<table>"
        ]
    },{
        "name"    : "ftchinese.com",
        "url"     : "http://www.ftchinese.com/story/",
        "title"   : "<h1 class='story-headline'>",
        "desc"    : "<div class='story-lead'>",
        "include" : "<div class='story-body'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "young.ifeng.com",
        "url"     : "http://young.ifeng.com/a/*/*.shtml",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='ya_main_con'>",
        "exclude" : [
            "<p class='yamc_zrbj'>",
            "<p class='yamc_sming'>",
            "<span class='ifengLogo'>",
            "[['<p>原标题</p>']]",
            "[['<strong>获取更多有趣又有料的内容</strong>']]",
            "[[/src=\\S+(a76d59f9f93e84b_size52_w700_h236)\\S+'/]]"
        ]
    },{
        "name"    : "news.ifeng.com",
        "url"     : "http://*.ifeng.com/a/*/*.shtml",
        "title"   : "<h1 id='artical_topic'>",
        "desc"    : "",
        "include" : "<div id='artical_real'>",
        "exclude" : [
            "<span class='ifengLogo'>",
            "[['<p>原标题</p>']]"
        ]
    },{
        "name"    : "news.mtime.com",
        "url"     : "http://news.mtime.com/**/*/*.html",
        "title"   : "<h2>",
        "desc"    : "<div class='newsnote'>",
        "include" : "<div id='newsContent'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "feng.com",
        "url"     : "http://*.feng.com/**/*/*.shtml",
        "title"   : "[[{$('.h2').text()==''?$('h1').text():$('.h2').text()}]]",
        "desc"    : "<p class='content_title'>",
        "include" : "<div id='article_content'>",
        "exclude" : [
            "<p class='content_title'>"
        ]
    },{
        "name"    : "caixin.com",
        "url"     : "http://*.caixin.com/*/*.html",
        "title"   : "<h1>",
        "desc"    : "<div id='subhead'>",
        "include" : "<div id='Main_Content_Val'>",
        "exclude" : [
             "[[/src=\\S+(favicon)\\S+'/]]"
        ]
    },{
        "name"    : "ithome.com",
        "url"     : "https://www.ithome.com/html/**/*/*.htm",
        "title"   : "[[{$('.post_title').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div id='paragraph'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.sohu.com",
        "url"     : "http*://news.sohu.com/*/*.shtml",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='contentText'>",
        "exclude" : [
            "<div class='conserve-photo'>"
        ]
    },{
        "name"    : "sohu.com",
        "url"     : "http*://www.sohu.com/a/*_*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<article class='article'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.sina.com.cn",
        "url"     : "http*://news.sina.com.cn/**/*/*.shtml",
        "title"   : "<h1 class='main-title'>",
        "desc"    : "",
        "include" : "<div id='article'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "tech.sina.com.cn",
        "url"     : "http*://tech.sina.com.cn/**/*/*.shtml",
        "title"   : "<h1 class='main-title'>",
        "desc"    : "",
        "include" : "<div id='artibody'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "finance.sina.com.cn",
        "url"     : "http*://finance.sina.com.cn/**/*/*.shtml",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='artibody'>",
        "exclude" : [
            "[['<p>【新浪财经股吧】</p>']]"
        ]
    },{
        "name"    : "sports.sina.com.cn",
        "url"     : "http*://sports.sina.com.cn/**/*.shtml",
        "title"   : "<h1 class='main-title'>",
        "desc"    : "",
        "include" : "<div id='artibody'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "collection.sina.com.cn",
        "url"     : "http*://collection.sina.com.cn/**/*.shtml",
        "title"   : "<h1 id='main_title'>",
        "desc"    : "",
        "include" : "<div id='artibody'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "blog.sina.com.cn",
        "url"     : "http*://blog.sina.com.cn/s/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='articalContent'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.workercn.cn",
        "url"     : "http://news.workercn.cn/*/*/**/*.shtml",
        "title"   : "<div class='ad_tl_main'>",
        "desc"    : "",
        "include" : "<div class='ad_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.xinhuanet.com",
        "url"     : "http://news.xinhuanet.com/**/*/*.htm",
        "title"   : "<div class='h-title'>",
        "desc"    : "",
        "include" : "<div id='p-detail'>",
        "exclude" : [
            "<div class='zan-wap'>",
            "<div class='p-tags'>",
            "[[/src=\\S+(129713364_15065013734641n)\\S+'/]]"
        ]
    },{
        "name"    : "news.gold678.com",
        "url"     : "http*://www.gold678.com/C/**/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='news_inter_area'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "stockstar.com",
        "url"     : "http://*.stockstar.com/*.shtml",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='container-article'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "takungpao.com",
        "url"     : "http://*.takungpao.com/**/*/*.html",
        "title"   : "<h1 class='tpk_con_tle'>",
        "desc"    : "",
        "include" : "<div class='tpk_text'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "money.jrj.com.cn",
        "url"     : "http://money.jrj.com.cn/**/*/*.shtml",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='titimg'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.ynet.com",
        "url"     : "http://news.ynet.com/**/*/*.html",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='articleAll'>",
        "exclude" : [
            "<ul class='pageBox'>",
            "<span class='authors'>",
            "<a class='scrollLeft'>",
            "<a class='scrollRight'>"
        ]
    },{
        "name"    : "qianlong.com",
        "url"     : "http://*.qianlong.com/*/*/*.shtml",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='article-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "article.myzaker.com",
        "url"     : "http://www.myzaker.com/article/*/",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='article_content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "people.com.cn",
        "url"     : "http://*.people.com.cn/**/*/*.html",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='rwb_zw'>",
        "exclude" : [
            "<div class='edit'>"
        ]
    },{
        "name"    : "chinanews.com",
        "url"     : "http://www.chinanews.com/*/**/*/*.shtml",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='left_zw'>",
        "exclude" : [
            "<table>"
        ]
    },{
        "name"    : "toutiao.com",
        "url"     : "http*://www.toutiao.com/a*/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<div class='article-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "toutiao.com",
        "url"     : "http*://www.toutiao.com/i*/",
        "title"   : "<h1 class='article-title'>",
        "desc"    : "",
        "include" : "<div class='article-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "cwzg.cm",
        "url"     : "http://www.cwzg.cn/*/*/*.html",
        "title"   : "<h1>",
        "desc"    : "<div class='article-brief'>",
        "include" : "<div id='article'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "idianzixun.com",
        "url"     : "http://www.yidianzixun.com/article/*",
        "title"   : "<h2>",
        "desc"    : "",
        "include" : "<div class='content-bd'>",
        "exclude" : [
            "<div class='postfix'>",
            "<p class='yidian-wm-copyright-bottom'>"
        ]
    },{
        "name"    : "reader.s-reader.com",
        "url"     : "http://reader.s-reader.com/article/*/*.html",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div class='content'>",
        "exclude" : [
            "<h1>"
        ]
    },{
        "name"    : "news.163.com",
        "url"     : "http*://news.163.com/**/*/*.html",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='endText'>",
        "exclude" : [
            "<div class='ep-source'>"
        ]
    },{
        "name"    : "renjian.163.com",
        "url"     : "http*://renjian.163.com/**/*/*.html",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<div id='endText'>",
        "exclude" : [
            "<div class='ep-source'>",
            "<div class='ep-pages'>",
            "<p class='end'>"
        ]
    },{
        "name"    : "dy.163.com",
        "url"     : "http*://dy.163.com/v2/article/detail/*.html",
        "title"   : "<h2>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "tech.163.com",
        "url"     : "http*://*.163.com/**/*/*.html",
        "title"   : "[[{$('.post_content_main').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='post_text'>",
        "exclude" : [
            "<div class='ep-source cDGray'>"
        ]
    },{
        "name"    : "mi.techweb.com.cn",
        "url"     : "http*://mi.techweb.com.cn/tmt/*/*.shtml",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "techweb.com.cn",
        "url"     : "http*://www.techweb.com.cn/*/*/*.shtml",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "donews.com",
        "url"     : "http://www.donews.com/**/*/*.html",
        "title"   : "[[{$($('.contentbox').find('h2')[0]).text()}]]",
        "desc"    : "",
        "include" : "[[{$($('.article-con')[0]).html()}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "flashnews.donews.com",
        "url"     : "http://www.donews.com/flashnews/detail/",
        "title"   : "[[{$($('.contentbox').find('h2')[0]).text()}]]",
        "desc"    : "",
        "include" : "[[{$($('.article-con')[0]).html()}]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "newseed.pedaily.cn",
        "url"     : "http://newseed.pedaily.cn/*/*.shtml",
        "title"   : "<h1>",
        "desc"    : "<div class='subject'>",
        "include" : "<div id='news-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.newseed.cn",
        "url"     : "http*://news.newseed.cn/p/*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='news-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "digi.tech.qq.com",
        "url"     : "http://digi.tech.qq.com/a/*/*.htm",
        "title"   : "[[{$('.hd').find('h1').text()}]]",
        "desc"    : "<p class='titdd-Article'>",
        "include" : "<div class='Cnt-Main-Article-QQ'>",
        "exclude" : [
            "<p class='titdd-Article'>",
            "<div class='wxdigi'>",
            "<a id='backqqcom'>"
        ]
    },{
        "name"    : "qq.com",
        "url"     : "http://*.qq.com/a/*/*.htm",
        "title"   : "[[{$('.hd h1').text()}]]",
        "desc"    : "",
        "include" : "<div id='Cnt-Main-Article-QQ'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "view.inews.qq.com",
        "url"     : "http://view.inews.qq.com/a/",
        "title"   : "<p class='title'>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            "<p class='title'>",
            "<div class='src'>"
        ]
    },{
        "name"    : "view2.inews.qq.com",
        "url"     : "http://view.news.qq.com/original/intouchtoday/*.html",
        "title"   : "<h2 id='sharetitle'>",
        "desc"    : "",
        "include" : "<div id='articleContent'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "new.qq.com",
        "url"     : "http*://new.qq.com/**/*/*.html",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='content-article'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.china.com.cn",
        "url"     : "http://news.china.com.cn/**/*/*.htm",
        "title"   : "<h1 class='articleTitle'>",
        "desc"    : "",
        "include" : "<div id='articleBody'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "article.huanqiu.com/",
        "url"     : "http*://*.huanqiu.com/*/*/*.html",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='la_con'>",
        "exclude" : [
            "<div class='editorSign'>",
            "<div class='reTopics'>"
        ]
    },{
        "name"    : "news.mindynode.com",
        "url"     : "https://news.mindynode.com/zh/links/*",
        "title"   : "<div id='parsed_title'>",
        "desc"    : "",
        "include" : "<div id='parsed_content'>",
        "exclude" : [
            "<div class='reTopics'>",
            "<p class='read-art-extra-bonus'>",
            "<div class='editorSign'>"
        ]
    },{
        "name"    : "8btc.com",
        "url"     : "http://www.8btc.com/*-*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "[[{$($('.article-content')[0]).html()}]]",
        "exclude" : [
            "<div class='content-source-info'>",
            "<div class='content-bottom'>"
        ]
    },{
        "name"    : "wiki.8btc.com",
        "url"     : "http://www.8btc.com/wiki/*",
        "title"   : "<div class='page-title'>",
        "desc"    : "",
        "include" : "<div class='col-xs-12'>",
        "exclude" : [
            "<div class='page-title'>"
        ]
    },{
        "name"    : "vip.qikan.com",
        "url"     : "http://nlc.vip.qikan.com/text/Article.aspx*",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='newartbox'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "zhidx.com",
        "url"     : "http://zhidx.com/p/",
        "title"   : "[[{$('.finTit').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='finCnt'>",
        "exclude" : [
            "[[/src=\\S+(ZDX-Card-for-PC-e1466578693228)\\S+'/]]"
        ]
    },{
        "name"    : "iheima.com",
        "url"     : "http://www.iheima.com/zixun/*/*/*.shtml",
        "title"   : "<div class='title'>",
        "desc"    : "<div class='outline'>",
        "include" : "<div class='main-content'>",
        "exclude" : [
            "<div class='title'>",
            "<div class='outline'>",
            "<div class='author'>",
            "<div class='copyright'>",
            "<div class='mesinfo'>",
            "<div class='article-list'>",
            "<div class='mobile-common'>"
        ]
    },{
        "name"    : "pintu360.com",
        "url"     : "http://www.pintu360.com/article/",
        "title"   : "<h1 class='title'>",
        "desc"    : "<div class='article-note'>",
        "include" : "[[[$('.article-content').find('.text')]]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "tech2ipo.com",
        "url"     : "http://tech2ipo.com/*",
        "title"   : "[[{$('.title').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "column.iresearch.cn",
        "url"     : "http://column.iresearch.cn/b/*/*.shtml",
        "title"   : "[[{$('.title').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='m-article'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "news.iresearch.cn",
        "url"     : "http://news.iresearch.cn/content/**/*/*.shtml",
        "title"   : "[[{$('.title').find('h1').text()}]]",
        "desc"    : "<div class='review'>",
        "include" : "<div class='m-article'>",
        "exclude" : [
            "<div class='review'>"
        ]
    },{
        "name"    : "lanjingtmt.com",
        "url"     : "http://www.lanjingtmt.com/news/detail/",
        "title"   : "[[{$('.newsTitle').find('h1').text()}]]",
        "desc"    : "<div class='dm_zy'>",
        "include" : "<div id='pageTxt'>",
        "exclude" : [
            "<div class='dm_zy'>",
            "[[/src=\\S+(1438828721808210)\\S+'/]]"
        ]
    },{
        "name"    : "timetimetime.net",
        "url"     : "http://www.timetimetime.net/*/*.html",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "[[[$('.neir')]]]",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "mifengtd.cn",
        "url"     : "http://www.mifengtd.cn/articles/",
        "title"   : "<a class='p-name'>",
        "desc"    : "",
        "include" : "<div class='e-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "vgtime.com",
        "url"     : "http://www.vgtime.com/article/",
        "title"   : "<h1 class='art_max_width'>",
        "desc"    : "",
        "include" : "<div class='paragraph'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "keke289.com",
        "url"     : "http://www.keke289.com/news/",
        "title"   : "<h2>",
        "desc"    : "",
        "include" : "<section class='article-bd'>",
        "exclude" : [
            "<div class='article-annotation'>",
            "[['<strong>关注科客网官方微信kekebat</strong>']]"
        ]
    },{
        "name"    : "ebrun.com",
        "url"     : "http://www.ebrun.com/*/*.shtml",
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div class='cmsDiv'>",
        "exclude" : [
            "<p class='ybfirst_go'>",
            "<div id='corp'>",
            "[[/src=\\S+(2017013185214858280529103)\\S+'/]]",
            "[['<span>百人讲新年纳新 588份精华课件免费赠</span>']]",
            "[['<p>【版权提示】亿邦动力网倡导尊重与保护知识产权。</p>']]"
        ]
    },{
        "name"    : "cokeji.com",
        "url"     : "http://www.cokeji.com/*.html",
        "title"   : "[[{$('.single-header').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='single-main'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "199it.com",
        "url"     : "http://www.199it.com/archives/",
        "title"   : "<h1 class='entry-title'>",
        "desc"    : "",
        "include" : "<div class='entry-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "aliresearch.com",
        "url"     : "http://www.aliresearch.com/blog/article/detail/id/",
        "title"   : "<h2>",
        "desc"    : "",
        "include" : "<section id='contents'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "cn.engadget.com",
        "url"     : "http*://cn.engadget.com/*/*/*/*/",
        "title"   : "[[{$('head').find('title').text()}]]",
        "desc"    : "",
        "include" : "<div class='article-text'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "chinaventure.com.cn",
        "url"     : "https://www.chinaventure.com.cn/cmsmodel/news/detail/",
        "title"   : "<h1 class='h1_01'>",
        "desc"    : "",
        "include" : "<div class='content_01'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "baijia.baidu.com",
        "url"     : "https://baijia.baidu.com/s?id=*",
        "title"   : "<h1 class='title'>",
        "desc"    : "",
        "include" : "<section class='news-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "jingyan.baidu.com",
        "url"     : "http*://jingyan.baidu.com/article/*.html",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "<li class='exp-content-list'>",
        "exclude" : [
            "<span class='exp-album-enter-mask'>",
            "<span class='enter-step-btn'>",
            "<span class='last-item-end'>",
            "<div class='quote-item'>",
            "<div class='list-icon'>"
        ]
    },{
        "name"    : "g-cores.com",
        "url"     : "http://www.g-cores.com/articles/",
        "title"   : "<h1 class='story_title'>",
        "desc"    : "<p class='story_desc'>",
        "include" : "<div class='story'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "tieba.baidu.com",
        "url"     : "http*://tieba.baidu.com/p/*",
        "avatar"  : [
            {"name" : "[[{$('.p_author_name')}]]"},
            {"url"  : "[[{$('.p_author_face').find('img')}]]"}
        ],
        "paging"  : [
            {"prev" : "[[{$('.pb_list_pager').find('.tP').prev().attr('href')}]]"},
            {"next" : "[[{$('.pb_list_pager').find('.tP').next().attr('href')}]]"}
        ],
        "title"   : "[[{$('.core_title_txt').text()}]]",
        "desc"    : "",
        "include" : "[[{$('.p_content')}]]",
        "exclude" : [
            "<span class='apc_src_wrapper'>",
            "<div class='save_face_bg_2'>"
        ]
    },{
        "name"    : "qgc.qq.com",
        "url"     : "http*://qgc.qq.com/*/t/*",
        "avatar"  : [
            {"name" : "[[{$('.gn')}]]"},
            {"url"  : "[[{$('.avatar').find('img').filter(':even')}]]"}
        ],
        "title"   : "<title>",
        "desc"    : "",
        "include" : "[[{$('.pctmessage')}]]",
        "exclude" : [
            "<span class='apc_src_wrapper'>",
            "<div class='save_face_bg_2'>"
        ]
    },{
        "name"    : "article.chiphell.com",
        "url"     : "https://www.chiphell.com/article-*.html",
        "title"   : "<h1 class='ph'>",
        "desc"    : "",
        "include" : "<table class='vwtb'>",
        "exclude" : [
            "<i class='pstatus'>"
        ]
    },{
        "name"    : "chiphell.com",
        "url"     : "https://www.chiphell.com/thread-*.html",
        "title"   : "<span id='thread_subject'>",
        "desc"    : "",
        "avatar"  : [
            {"name" : "[[{$('.favatar').find('.authi')}]]"},
            {"url"  : "[[{$('.avatar').find('img')}]]"}
        ],
        "include" : "[[{$('.t_f')}]]",
        "exclude" : [
            "<i class='pstatus'>",
            "[[/src=\\S+(none.gif)\\S+'/]]",
            "<div class='aimg_tip'>"
        ]
    },{
        "name"    : "bbs.hupu.com",
        "url"     : "https://bbs.hupu.com/*.html",
        "title"   : "<h1 id='j_data'>",
        "desc"    : "",
        "avatar"  : [
            {"name" : "[[{$('.author').find('.left a')}]]"},
            {"url"  : "[[{$('.user').find('img')}]]"}
        ],
        "include" : "[[{$('table.case')}]]",
        "exclude" : [
            "<div class='video-play-1'>",
            "<div class='vote_box'>"
        ]
    },{
        "name"    : "qu.la",
        "url"     : "http://www.qu.la/book/*/*.html",
        "paging"  : [
            {"prev" : "[[{$('#A1').attr('href')}]]"},
            {"next" : "[[{$('#A3').attr('href')}]]"}
        ],
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            "[['<a>章节错误,点此举报</a>']]"
        ]
    },{
        "name"    : "biquge.com.tw",
        "url"     : "http://www.biquge.com.tw/**/*.html",
        "title"   : "[[{$('.bookname').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "xxbiquge.com",
        "url"     : "http://www.xxbiquge.com/**/*.html",
        "paging"  : [
            {"prev" : "[[{$($('.bottem2').find('a')[0]).attr('href')}]]"},
            {"next" : "[[{$($('.bottem2').find('a')[2]).attr('href')}]]"}
        ],
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            "[['<a>章节错误,点此举报</a>']]"
        ]
    },{
        "name"    : "biquge5200.com",
        "url"     : "http://www.biquge5200.com/**/*.html",
        "paging"  : [
            {"prev" : "[[{$($('.bottem2').find('a')[1]).attr('href')}]]"},
            {"next" : "[[{$($('.bottem2').find('a')[3]).attr('href')}]]"}
        ],
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "piaotian.com",
        "url"     : "http://www.piaotian.com/html/**/*.html",
        "paging"  : [
            {"prev" : "[[{$($('.bottomlink').find('a')[0]).attr('href')}]]"},
            {"next" : "[[{$($('.bottomlink').find('a')[5]).attr('href')}]]"}
        ],
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            "<h1>",
            "<div class='toplink'>",
            "<table>"
        ]
    },{
        "name"    : "zanghaihua.org",
        "url"     : "http://www.zanghaihua.org/*.html",
        "paging"  : [
            {"prev" : "[[{$($('.linkbtn').find('a')[0]).attr('href')}]]"},
            {"next" : "[[{$($('.linkbtn').find('a')[2]).attr('href')}]]"}
        ],
        "title"   : "[[{$('.chaptertitle').find('h1').text()}]]",
        "desc"    : "",
        "include" : "<div class='bookcontent'>",
        "exclude" : [
            "<script>",
            "<a>"
        ]
    },{
        "name"    : "read.qidian.com",
        "url"     : "https://read.qidian.com/chapter/**/*",
        "paging"  : [
            {"prev" : "[[{$('#j_chapterPrev').attr('href')}]]"},
            {"next" : "[[{$('#j_chapterNext').attr('href')}]]"}
        ],
        "title"   : "<h3 class='j_chapterName'>",
        "desc"    : "",
        "include" : "<div class='read-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "vipreader.qidian.com",
        "url"     : "https://vipreader.qidian.com/chapter/**/*",
        "paging"  : [
            {"prev" : "[[{$('#j_chapterPrev').attr('href')}]]"},
            {"next" : "[[{$('#j_chapterNext').attr('href')}]]"}
        ],
        "title"   : "<h3 class='j_chapterName'>",
        "desc"    : "",
        "include" : "<div class='read-content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "37zw.net",
        "url"     : "http://www.37zw.net/**/*.html",
        "paging"  : [
            {"prev" : "[[{$($('.bottem2').find('a')[1]).attr('href')}]]"},
            {"next" : "[[{$($('.bottem2').find('a')[3]).attr('href')}]]"}
        ],
        "title"   : "<h1>",
        "desc"    : "",
        "include" : "<div id='content'>",
        "exclude" : [
            ""
        ]
    },{
        "name"    : "lofter.com",
        "url"     : "http://*.lofter.com/post/*",
        "title"   : "<title>",
        "desc"    : "",
        "include" : "[[{$('.content').html()||$('.text').html()}]]",
        "exclude" : [
            ""
        ]
    }]
};