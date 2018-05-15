var notif_style  = "\n/*\n* Notify Group\n*/\nnotify-gp {\n    font: 300 14px -apple-system, PingFang SC, Microsoft Yahei, Lantinghei SC, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;\n    text-rendering: optimizelegibility;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n\n    display: -webkit-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n\n    position: fixed;\n\n    top: 0;\n    right: 0;\n\n    margin: 0 15px 0 0;\n    padding: 0;\n\n    text-transform: none;\n\n    pointer-events: none;\n}\n\nnotify-gp notify {\n    display: -webkit-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n\n    margin: 0;\n    margin-top: 15px;\n    padding: 14px 24px;\n\n    min-width: 288px;\n    max-width: 568px;\n\n    height: 48px;\n    max-height: 48px;\n\n    color: rgba(255, 255, 255, .7);\n    background-color: rgba(50, 50, 50, 1);\n\n    box-sizing: border-box;\n    border-radius: 4px;\n    pointer-events: auto;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n\n    opacity: 0;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n    -webkit-transform-origin: left top 0px;\n            transform-origin: left top 0px;\n    -webkit-transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms, -webkit-transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms, -webkit-transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms, -webkit-transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, .302), 0 4px 8px 3px rgba(60, 64, 67, .149);\n}\n\nnotify-gp notify-title {\n    font-size: 13px;\n    font-weight: bold;\n}\n\nnotify-gp notify-content {\n    display: block;\n\n    font-size: 14px;\n    text-align: left;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\nnotify-gp notify-content a,\nnotify-gp notify-content a:link,\nnotify-gp notify-content a:visited,\nnotify-gp notify-content a:active {\n    margin: inherit;\n    padding-bottom: 5px;\n\n    color: #fff;\n    font-size: inherit;\n\n    text-decoration: none;\n\n    -webkit-transition: color .5s;\n\n    transition: color .5s;\n}\n\nnotify-gp notify-content a:hover {\n    margin: 0;\n    margin: initial;\n    padding: 0;\n    padding: initial;\n\n    color: inherit;\n    font-size: inherit;\n\n    text-decoration: none;\n}\n\nnotify-gp notify-i {\n    display: none;\n\n    margin: 0 10px 0 0;\n\n    width: 24px;\n    height: 24px;\n\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\nnotify-gp notify-action,\nnotify-gp notify-cancel {\n    display: none;\n\n    margin: 0 0 0 24px;\n\n    max-width: 80px;\n    min-width: 56px;\n\n    color: #8ab4f8;\n\n    font-weight: 500;\n    font-size: inherit;\n    text-transform: uppercase;\n    text-align: right;\n\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    cursor: pointer;\n}\n\nnotify-gp notify-cancel {\n    margin: 0;\n}\n\nnotify-gp notify-a {\n    display: block;\n    position: absolute;\n\n    top: 5px;\n    right: 5px;\n\n    cursor: pointer;\n}\n\nnotify-gp notify-a notify-span {\n    display: block;\n    width: 16px;\n    height: 16px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABpFBMVEUAAADl5eXj4+NSVFRTVVVaXFxLTU1hY2NdX18pLCwhJCSdnp5sbm6HiYmjpKSDhYX///+rrKytrq6XmJgzNTUoKyt3eXlydHRlZ2dbXV1ucHB4enrv7++KjIyIiort7e1oamosLy8aHR0VGBgUFxcbHh4rLi5oamprbGwgIyMKDQ0KDQ0iJSVjZWWfoaEkJiYICwsLDg4KDQ0MDw8iJSWMjo41ODgMDw8JDAw2OTkvMTELDg4LDg4xMzM1NzcJDAwLDg40NjYeISEHCgoeISFkZmYtLy8yNDRvcXEWGRkHCgoaHR3///8RFBQHCgohJCShoqLIyMgaHR0HCgoZGxv4+PgRFBQLDg4xMzOWl5eam5ssLi4bHh7///8fIiIJDAwwMzNzdHQXGhoeISFlZmYsLi4KDQ0gIiI6PDwOEREuMDAXGhoHCgodHx8pLCwNEBA1ODj///8nKSkICwsICwsJDAwnKSnZ2dl9fn4pKysNDw8OEREpLCxyc3ORkpIzNTUjJSUVGBgUFxcgIyM5PDyanJwEBwcDBwcDBgYFCAgGCQn///+5RDDmAAAAhnRSTlMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQUFAQU+i7S0jkAGEYrw8Y8SBIn++Pr3jQQ67fx8dvX6iWr27z+B/YsOcoMPdPiEAaL7iAgEcfWsA6D7iAkGcawDef2LDnOFD3T4gTLnfHb6iWrqNQJ4+ff7fQILd+ToewsCLHWZmXUwAyFsKwcAAAABYktHRBCVsg0sAAAAzElEQVQY02NgwAoYZWTl5JngXGYFRSVlFVU1dRYIn1VDU6sNCLR1dNlAfHY9fQNDw/YOI2MDE1MOoACnmbmFpZW1ja2dvYMjFwMDN4NTp7OLq5u7h6dXpzcDDwOvj29bm59/QGBQcFtbSCgfA79AWFtHeERkVLR1W1tMrCCDEENcZ3xCYlJySmpaZzqDMAODSEamRVZ2cE5unn1+gSjQFrHCIqNir7a2nJLSsnJxkEMkKiqrutrauqpraiUhTpWqq29obGpuaZVmIAYAAO06McffKEk8AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTA0LTAzVDE3OjE4OjAzKzA4OjAwRdgB9wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMS0wNS0xOFQyMDowMTowMCswODowMB0r3XkAAABNdEVYdHNvZnR3YXJlAEltYWdlTWFnaWNrIDYuOC44LTcgUTE2IHg4Nl82NCAyMDE0LTAyLTI4IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3JnWaRffwAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTI4Q3xBgAAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxMjjQjRHdAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADEzMDU3MjAwNjArP9HVAAAAE3RFWHRUaHVtYjo6U2l6ZQAxLjAzS0JCZtQvXwAAAFx0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvZnRwLzE1MjAvZWFzeWljb24uY24vZWFzeWljb24uY24vY2RuLWltZy5lYXN5aWNvbi5jbi9wbmcvMTcvMTc4Ni5wbmcRsze7AAAAAElFTkSuQmCC);\n}\n\nnotify-gp notify-i.holdon {\n    display: block;\n    margin: 0 0 0 24px;\n\n    width: 20px;\n    height: 20px;\n\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAATUlEQVR4AWMYSuB/4P+V/1lRRFiBIoEYCoGC//+vAypFKFsHFFkJV4AsAVGKzsOjFFUZHqUElCGUwpRRrpCw1YQ9Qzh4SA5wwlE4hAAAiFGQefYhNJkAAAAASUVORK5CYII=);\n    cursor: pointer;\n}\n\nnotify-gp .notify-show {\n    opacity: 1;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n}\n\nnotify-gp .notify-hide {\n    opacity: 0;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n}\n\nnotify-gp .notify-success {\n    color: rgba(118, 255, 3, .8);\n}\n\nnotify-gp .notify-warning {\n    color: rgba(255, 238, 88, 1);\n}\n\nnotify-gp .notify-error {\n    color: rgba(239, 83, 80, 1);\n}\n\nnotify-gp .notify-modal {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n\n    height: auto;\n    max-height: 200px;\n\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2);\n}\n\nnotify-gp .notify-modal .notify-modal-content {\n    margin-top: 5px;\n    font-size: 13px;\n    white-space: normal;\n}\n\nnotify-gp .notify-modal .notify-modal-content a {\n    margin: 0;\n    padding: 0;\n\n    color: inherit;\n\n    font-size: inherit;\n    text-decoration: underline;\n    \n    cursor: pointer;\n}\n\nnotify-gp .notify-modal .notify-modal-content a:hover,\nnotify-gp .notify-modal .notify-modal-content a:active,\nnotify-gp .notify-modal .notify-modal-content a:visited,\nnotify-gp .notify-modal .notify-modal-content a:focus {\n    color: inherit;\n}\n\nnotify-gp .notify-snackbar {\n    position: fixed;\n    bottom: 0;\n    left: 50%;\n    margin-bottom: 5px;\n    -webkit-transform-origin: left bottom 0px;\n            transform-origin: left bottom 0px;\n}\n\n.notify-position-lt-corner {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n\n    margin: 0 0 0 15px;\n\n    left: 0;\n    right: auto;\n    right: initial;\n}\n\n.notify-position-lb-corner {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-flow: column-reverse wrap-reverse;\n            flex-flow: column-reverse wrap-reverse;\n\n    margin: 0 0 15px 15px;\n\n    right: auto;\n\n    right: initial;\n    top: auto;\n    top: initial;\n\n    left: 0;\n    bottom: 0;\n}\n\n.notify-position-rb-corner {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-flow: column-reverse wrap-reverse;\n            flex-flow: column-reverse wrap-reverse;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n\n    margin: 0 15px 15px 0;\n\n    top: auto;\n\n    top: initial;\n    left: auto;\n    left: initial;\n\n    bottom: 0;\n    right: 0;\n}";
var main_style   = "/**\n* Golbal style\n*/\n\n.simpread-font {\n   font: 300 16px/1.8 -apple-system, PingFang SC, Microsoft Yahei, Lantinghei SC, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;\n\n   color:#333;\n\n   text-rendering: optimizelegibility;\n   -webkit-text-size-adjust: 100%;\n   -webkit-font-smoothing: antialiased;\n}\n\n.simpread-hidden {\n   display: none;\n}\n\n/**\n*  Focus: Background( root ) style\n*/\n.simpread-focus-root {\n   display: block;\n   position: fixed;\n\n   top: 0;\n   left: 0;\n   right: 0;\n   bottom: 0;\n\n   background-color: rgba( 235, 235, 235, 0.9 );\n   z-index: 2147483645;\n\n   opacity: 0;\n   transition : opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n\n.simpread-focus-highlight {\n   position: relative;\n\n   box-shadow: 0 0 0 20px #fff;\n   background-color: #fff;\n\n   overflow: visible;\n   z-index: 2147483646;\n}\n\n.sr-controlbar-bg sr-rd-crlbar {\n   z-index: 2147483647;\n}\n\n.sr-controlbar-bg sr-rd-crlbar fab {\n   z-index: 2147483647;\n}\n\n/**\n*  Read: background( root ) style\n*/\n.simpread-read-root {\n   display: -webkit-flex;\n   justify-content:center;\n   align-items:center;\n\n   position: relative;\n   margin: 0;\n\n   top: -1000px;\n   left: 0;\n\n   width: 100%;\n\n   z-index: 2147483646;\n\n   overflow-x: hidden;\n   opacity: 0;\n   transition: all 1000ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n}\n\n.simpread-read-root-show {\n   top: 0;\n}\n\n.simpread-read-root-hide {\n   top: 1000px;\n}\n\n/**\n* Read: Read mode style\n*/\nsr-read {\n   display: -webkit-flex;\n   flex-flow:column nowrap;\n\n   margin: 20px 20%;\n\n   min-width: 400px;\n   min-height: 400px;\n\n   text-align: center;\n}\n\nread-process {\n   position: fixed;\n\n   top: 0;\n   left: 0;\n\n   height: 3px;\n   width: 100%;\n\n   background-color: #64B5F6;\n   transition: width 2s;\n}\n\nsr-rd-content-error {\n   display: block;\n   position: relative;\n\n   margin: 0px;\n   margin-bottom: 30px;\n   padding: 25px;\n\n   background-color: rgba(0,0,0,0.05);\n}\n\nsr-rd-footer {\n   display: block;\n\n   margin-top: 10px;\n   padding: 40px 0 30px;\n\n   text-align: center;\n\n   border-top: 1px solid #E0E0E0;\n   clear: both;\n}\n\nsr-rd-footer-text {\n   display: block;\n\n   width: 100px;\n\n   margin: 20px auto;\n   padding: 10px 20px;\n\n   color: #fff;\n   background: #424242;\n\n   border-radius: 5px;\n\n   font-size: 20px;\n   text-align: center;\n\n   box-sizing: border-box;\n}\n\nsr-rd-footer-copywrite {\n   display: block;\n\n   padding: 0;\n   margin-bottom: 20px;\n\n   min-height: 24px;\n\n   color: #787878;\n\n   font-size: 17px;\n   font-weight: 700;\n\n   box-sizing: border-box;\n}\n\nsr-rd-footer-copywrite a,\nsr-rd-footer-copywrite a:link {\n   margin: 0;\n   padding: 0;\n\n   color: #787878;\n   background-color: transparent;\n\n   font-size: 17px;\n   line-height: initial;\n   text-decoration: none;\n   vertical-align: initial;\n\n   box-sizing: border-box;\n}\n\nsr-rd-footer-copywrite a:hover,\nsr-rd-footer-copywrite a:focus,\nsr-rd-footer a:active {\n   color: #787878;\n   text-decoration: underline;\n}\n\n/**\n* Controlbar: focus mode and read mode\n*/\nsr-rd-crlbar.controlbar {\n   position: fixed;\n\n   right: 0;\n   bottom: 0;\n\n   width: 100px;\n   height: 100%;\n\n   opacity: 0;\n   transition: opacity .5s ease;\n}\n\nsr-rd-crlbar.controlbar:hover {\n   opacity: 1;\n}\n\n/**\n* Golbal\n*/\n@media all and ( max-height: 620px ) {\n\n   fab {\n       zoom: .8;\n   }\n\n}\n\n@media all and ( max-height: 783px ) {\n\n   dialog-gp dialog-content {\n       max-height: 580px;\n   }\n\n   dialog-gp dialog-footer {\n       border-top: 1px solid rgba(224, 224, 224, 1);\n   }\n\n}\n\n/**\n* Highlight\n*/\n.simpread-highlight-selector {\n   background-color: #fafafa;\n   outline: 3px dashed #1976d2;\n   opacity: .8;\n   cursor: pointer;\n   transition: opacity .5s ease;\n}\n\n/**\n* TOC\n*/\ntoc-bg {\n   position: fixed;\n   right: 0;\n   top: 0;\n   width: 300px;\n   height: 500px;\n\n   font-size: initial;\n}\n\ntoc-bg:hover {\n   z-index: 3;\n}\n\n.toc-bg-hidden {\n   opacity: 0;\n   transition: opacity .5s ease;\n}\n\n.toc-bg-hidden:hover {\n   opacity: 1;\n   z-index: 3;\n}\n\ntoc * {\n   all: unset;\n}\n\ntoc {\n   position: fixed;\n   right: 0;\n   top: 100px;\n\n   display: flex;\n   flex-direction: column;\n   align-items: flex-start;\n\n   padding: 10px;\n\n   max-width: 200px;\n   max-height: 500px;\n\n   overflow-x: hidden;\n   cursor: pointer;\n   border: 1px solid rgba(158, 158, 158, 0.22);\n   transition: width 1.5s;\n}\n\ntoc outline {\n   position: relative;\n   display: -webkit-box;\n   -webkit-line-clamp: 1;\n   -webkit-box-orient: vertical;\n   overflow: hidden;\n   text-overflow: ellipsis;\n\n   margin: 2px 0;\n   min-height: 21px;\n\n   line-height: 21px;\n   text-align: left;\n}\n\ntoc outline a,\ntoc outline a:active,\ntoc outline a:visited,\ntoc outline a:focus\n{\n   color: inherit;\n   text-decoration: none!important;\n}\n\ntoc outline a:hover {\n   font-weight: bold!important;\n   text-decoration: underline!important;\n}\n\ntoc outline a.toc-outline-theme-dark,\ntoc outline a.toc-outline-theme-night {\n   color: #fff!important;\n}\n\n.toc-level-h2 {\n   padding-left: 10px;\n}\n.toc-level-h3 {\n   padding-left: 25px;\n}\n.toc-level-h4 {\n   padding-left: 35px;\n}\n\n.toc-outline-active {\n   background-color: rgb(244, 67, 54);\n}\n\ntoc outline active {\n   position: absolute;\n\n   left: 0;\n   top: 0;\n   bottom: 0;\n\n   padding: 0 0 0 3px;\n}\n\n/**\n* Keyboard\n*/\n\nsr-kbd {\n   background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(255, 247, 133)), to(rgb(255, 197, 66)));\n   border-width: 1px;\n   border-style: solid;\n   border-color: rgb(227, 190, 35);\n   border-image: initial;\n\n   position: absolute;\n   left: 0;\n   padding: 1px 3px 0px;\n\n   font-size: 11px!important;\n   font-weight: bold;\n   box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 7px 0px;\n   overflow: hidden;\n   border-radius: 3px;\n}\n\n.sr-kbd-a {\n   position: relative;\n}\n\nkbd-mapping {\n   position: fixed;\n   left: 5px;\n   bottom: 5px;\n\n   display: flex;\n   flex-direction: column;\n\n   width: 500px;\n   height: 500px;\n\n   background-color: #fff;\n\n   border: 1px solid rgba(158, 158, 158, .22);\n   box-shadow: 0 2px 5px rgba(0,0,0,.26);\n   border-radius: 3px;\n}\n\nkbd-maps {\n   display: flex;\n   flex-flow: column wrap;    \n}\n\nkbd-mapping kbd-map-title {\n   margin: 5px 0;\n   \n   font-size: 14px;\n   font-weight: bold;\n}\n\nkbd-maps-group {\n   display: flex;\n   flex-direction: column;\n   align-items: flex-start;\n}\n\nkbd-maps-title {\n   margin: 5px 0;\n   padding-left: 53px;\n\n   font-size: 12px;\n   font-weight: bold;\n}\n\nkbd-map kbd {\n   display: inline-block;\n   padding: 3px 5px;\n   font-size: 11px;\n   line-height: 10px;\n   color: #444d56;\n   vertical-align: middle;\n   background-color: #fafbfc;\n   border: solid 1px #c6cbd1;\n   border-bottom-color: #959da5;\n   border-radius: 3px;\n   box-shadow: inset 0 -1px 0 #959da5;\n}\n\nkbd-map kbd-name {\n   display: inline-block;\n   text-align: right;\n\n   width: 50px;\n}\n\nkbd-map kbd-desc {\n   padding-left: 3px;\n}";
var user_style   = "sr-rd-crlbar.controlbar {\n    width: 100px;\n    height: 200px;\n\n    z-index: 2147483647;\n}\n\nsr-rd-crlbar fab {\n    position: fixed;\n    display: block;\n\n    bottom: 45px;\n    right: 24px;\n\n    width: 56px;\n    height: 56px;\n    line-height: 56px;\n\n    font-size: 15px;\n    text-align: center;\n\n    color: #fff;\n    background-color: rgb(76, 175, 80);\n\n    border-radius: 50%;\n    cursor: pointer;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);\n\n    transform: rotate(0deg);\n    transition: all 450ms 0ms;\n}\n\n.simpread-read-root sr-rd-crlbar fab.crlbar-close:hover {\n    transform: rotate(45deg);\n    transition: all 450ms 0ms;\n}\n\n.simpread-read-root sr-rd-crlbar fab.crlbar-close {\n    background-color: rgba(244, 67, 54, 1);\n}\n\nsr-rd-crlbar fab.crlbar-close {\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAdklEQVQ4y+WTuQ3AIBAEaQKK8NN/BEUArmccgGyj43MMIZo5TqtFqbUPJxYtbg2OvS44IJQKhguwdUETSiXjXr77KhGICRjihWKm8Dw3KXP4Z5VZ/Lfw7B5kyD1cy5C7uAx5iJcht6vhRTUi4OrC0Szftvi/vAFNdbZ2Dp661QAAAABJRU5ErkJggg==);\n}\n\nsr-rd-crlbar fab.not-adapter {\n    background-color: rgba(189, 189, 189, 1);\n}\n\nsr-rd-crlbar fab.setting,\nsr-rd-crlbar fab.about,\nsr-rd-crlbar fab.pocket {\n    bottom: 100px;\n    right: 33px;\n\n    margin-bottom: 10px;\n\n    width: 40px;\n    height: 40px;\n\n    line-height: 40px;\n    font-size: 10px;\n\n    background-color: rgb(3, 169, 244);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABvUlEQVRIS72WjVFCQQyENxVoB2oF2oFYiZYAFYgVaAlQidgBdoAdaAVxvptkjMffQxluhoF3L5fNZff2MB1huPuCNGY2cveppEdJd2a2sCPkVwCcSRpLeojP0QFuu2J3A7j7paT7smhuZquaxN1HkkhM1XRjJinn+L3a2qJY/FoStoo6gOw3028dBy30F4C7UwlVTySdS1oDiH4vzWwcu2SnL5IuJC0l8cyHHMsG4O4kuy4EQRaDhTmYIwG74JvnD9oWoDcFALAfDja0Y6i4nsxsulemsVXakwQB8BGkJRjvqay+W8BLtJZzMItiyTNjdz0Ha6Rl9qgypdgIHbJNi4UewZUgqqPXbbg7PU7iP6Pf+XpSYyswAJm8zq9JsgAdFH8SgHp4aBFEIkH63LcIvyH+q2vReGuL9p3Mf5McBKbvoIxUB76Dn1SZEsfId+xyk0xRW/OuPMkkrbYwRIHEDD5oyA8ZVi8iwXNBat4ShbwHT6tiFVhN9aJ1u44TCQgkDzU7RIFnXXVe1LzrtHbdKQpC2U2O5i1dTIqCOA5gXjjMz3deOENZDhVyNg67Mv8AAGd56XNpHf3S3/i35Rt5qiGSUhS/qAAAAABJRU5ErkJggg==);\n\n    opacity: 0;\n    transition: opacity .5s ease;\n}\n\nsr-rd-crlbar fab.pocket {\n    opacity: 1;\n    bottom: 100px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABKElEQVQ4T72UYVEDMRCF36eAOgAUgAOKhCqAOsAB4IAqoHVQB4ACDgfFQVGwzLtJmNxNelw7hfy5mcvm2923L0FHXhyZpxYYERNJN5L83XdtgFU+lIHLBNwXluPngBk/Fb5KujqUJukRePhX4Iekix0Vf0naSjot9gcrXAB3EXEr6bkHNWwKNBHRFEkHgWtglqZfQkuY3fAu6Swl/FXDJTAvoE9FZYa9SLocarlmmxI6AbbJr32YuTNgXU65ppf3O9BKZbnIc2BTAt2Gf5xUJuvqF2lAZZs59A2Ydm5K0srGvD/A3NeAL0a7Oo9Dzwpj2K3FysA+0K072y5Tl2dXgLXvrOrzFRFu35lrmn56L091FDAHRYTF9iDy0BrfkiEt/uaBHaP+2JhvPYuFFTslm1gAAAAASUVORK5CYII=);\n}\n\nsr-rd-crlbar fab.about {\n    bottom: 150px;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAeklEQVRIie3T0QmAIBDG8RuhEdwkR3CENmiE3KxRXKEN/r0oSJkvXaHgB/ckfD84OZFWAlhgTqNd7rnHDyAHXAFwakDfARZgu8wKTBrltrB7vU/+AzDA8RmQQf0f2gAeiw2wA6EAhPhm3gC1O0ix7QIR8bV5VT4iInICHxrcTgOet60AAAAASUVORK5CYII=);\n}\n\nsr-rd-crlbar fab.show {\n    opacity: 1;\n}\n\n.simpread-option-root {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 100%;\n    height: 100%;\n\n    color: rgb(255, 255, 255);\n    background-color: rgba(0,0,0,.5);\n\n    text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;\n\n    opacity: 0;\n    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n    z-index: 2147483646;\n}\n\ndialog-gp {\n    display: -webkit-flex;\n    flex-direction: column;\n\n    margin: 0;\n    padding: 0;\n\n    min-width: 480px;\n    min-height: 300px;\n\n    color: rgba(0, 0, 0, 0.870588);\n    background-color: rgb(255, 255, 255);\n\n    border-radius: 3px;\n    box-sizing: border-box;\n    box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;\n}\n\ndialog-head {\n    display: block;\n\n    padding: 24px 24px 20px 24px;\n\n    min-height: 25px;\n    line-height: 25px;\n\n    font-size: 21px;\n    font-weight: 500;\n    \n    color: #fff;\n    background-color: rgb(100, 181, 246);\n}\n\ndialog-content {\n    display: block;\n\n    padding: 12px 24px 0;\n\n    width: 100%;\n    min-height: 244px;\n    max-height: 580px;\n\n    overflow-y: auto;\n    box-sizing: border-box;\n}\n\ndialog-footer {\n    display: -webkit-flex;\n    flex-flow: row nowrap;\n    justify-content: flex-end;\n\n    width: 100%;\n    min-height: 52px;\n\n    box-sizing: border-box;\n}\n\nsr-opt-gp sr-opt-label {\n    font-weight:500;\n    color: rgb(33, 150, 243);\n}\n\nsr-opt-gp sr-opt-item {\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n\n    width: 100%;\n}\n\ndialog-content .about {\n    padding: 3px 0 10px 0;\n\n    width: 650px;\n\n    color: rgba(51, 51, 51, 0.7);\n\n    font-weight: 400;\n    font-size: 14px;\n\n    text-align: center;\n    text-shadow: none;\n    line-height: 1.8;\n}\n\ndialog-content .about a {\n    text-decoration: none;\n\n    color: rgba(51, 51, 51, 0.87);\n    border-bottom: 1px dotted rgba(51, 51, 51, 0.7);\n}";
var option_style = "\n/**\n *  Option: Focus/Read mode\n */\nsr-opt-focus,\nsr-opt-read {\n    display: -webkit-flex;\n    flex-direction:column;\n\n    width: 100%;\n    /*height: 100%;*/\n}\n\nsr-opt-gp {\n    display: -webkit-flex;\n    position: relative;\n\n    flex-flow:row nowrap;\n    justify-content:flex-start;\n\n    width: 100%;\n    margin-bottom: 25px;\n\n    font-size: 15px;\n}\n\nsr-opt-gp sr-opt-label {\n    display: block;\n    position: absolute;\n\n    margin: -8px 0 0 0;\n\n    font-size: 14px;\n    font-weight: bold;\n\n    color: rgba(0, 137, 123, .8);\n\n    user-select: none;\n    pointer-events: none;\n\n    transform: scale(0.75) translate( 0px, -8px );\n    transform-origin: left top 0px;\n}\n\nsr-opt-themes {\n    display: -webkit-flex;\n    flex-flow:row nowrap;\n    justify-content:space-between;\n\n    width: 100%;\n    /*height: 100%;*/\n\n    margin: 8px 0 17px;\n    padding: 0;\n}\n\nsr-opt-theme {\n    width: 40px;\n    height: 20px;\n\n    cursor: pointer;\n    list-style: none;\n\n    border-radius: 3px;\n    border: 1px solid #212121;\n    box-sizing: border-box;\n\n    opacity: 1;\n    transition: all 500ms opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n\nsr-opt-theme:hover {\n    opacity: .2;\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);\n}\n\nsr-opt-theme:not(:first-child) {\n    margin-left: 5px;\n}\n\nsr-opt-theme[sr-type=\"active\"] {\n    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14),0 2px 20px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.7);\n}\n\nopacity {\n    margin: 8px 0 0 0;\n\n    width: 100%;\n    height: 37px;\n}\n\nopacity input[type=range] {\n    width: 100%;\n\n    margin: 6px 0;\n    padding: 0;\n\n    border: none;\n    background-color: transparent;\n    -webkit-appearance: none;\n}\n\nopacity input[type=range]:focus {\n    outline: none;\n}\n\nopacity input[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 1px;\n\n    background: #9e9e9e;\n\n    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.5), 0px 0px 0px rgba(13, 13, 13, 0.5);\n    border-radius: 1.3px;\n\n    transition: all 0.3s;\n    cursor: pointer;\n}\n\nopacity input[type=range]::-webkit-slider-runnable-track:hover {\n    background: #00897B;\n}\n\nopacity input[type=range]::-webkit-slider-thumb {\n    height: 20px;\n    width: 20px;\n\n    margin-top: -9px;\n\n    background: rgba(0, 137, 123, 1);\n\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);\n    border: 1px solid rgba(0, 0, 0, 0);\n    border-radius: 50px;\n\n    cursor: pointer;\n    -webkit-appearance: none;\n    transition: all .5s ease-in-out .1s;\n}\n\nopacity input[type=range]:focus::-webkit-slider-thumb {\n    background: #00897B;\n}\n\nopacity input[type=range]:focus::-webkit-slider-thumb:hover {\n    background: #00695C;\n}\n\nopacity input[type=range]:focus::-webkit-slider-runnable-track {\n    background: #00897B;\n}";
var theme_common = "/**\n* Common style, include:\n* .simpread-theme-root\n* sr-rd-title, sr-rd-desc, sr-rd-content, p, div, a, img, pre, code, sr-blockquote, ul ol\n*/\n\n.simpread-theme-root {\n   font-size: 62.5%!important;\n}\n\nsr-rd-title, sr-rd-desc, sr-rd-content {\n   width: 100%;\n}\n\nsr-rd-title {\n   text-rendering: optimizelegibility;\n   margin: 1em 0px 0.5em;\n}\n\nsr-rd-content {\n   text-align: left;\n   word-break: break-word;\n}\n\nsr-rd-desc {\n   text-align: left;\n   line-height: 2.4;\n   margin: 0 0 1.2em 0;\n}\n\nsr-rd-content {\n   font-size: 1.6rem;\n   line-height: 1.6;\n}\n\nsr-rd-content p,\nsr-rd-content div {\n   display: block;\n   float: inherit;\n   line-height: 1.6;\n   font-size: 1.6rem;\n}\n\nsr-rd-content p,\nsr-rd-content div,\nsr-rd-content pre,\nsr-rd-content sr-blockquote {\n   margin: 0 0 1.2em 0;\n   word-break: break-word;\n   /*\n   word-wrap: break-word;\n   white-space: pre-wrap;\n   */\n}\n\nsr-rd-content a {\n   padding: 0 5px;\n   vertical-align: initial;\n}\n\nsr-rd-content a:hover {\n   background: transparent;\n}\n\nsr-rd-content img {\n   margin: 10px;\n   padding: 5px;\n   background: #fff;\n   border: 1px solid #bbb;\n   box-shadow: 1px 1px 3px #d4d4d4;\n}\n\nsr-rd-content sr-blockquote {\n   display: block;\n   position: relative;\n   padding: 15px 25px;\n   text-align: left;\n   line-height: inherit;\n}\n\nsr-rd-content sr-blockquote:before {\n   position: absolute;\n}\n\nsr-rd-content sr-blockquote * {\n   margin: 0;\n   font-size: inherit;\n}\n\nsr-rd-content table {\n   width: 100%;\n   margin: 0 0 1.2em 0;\n   word-break: keep-all;\n   word-break:normal;\n   overflow: auto;\n   border: none;\n}\n\nsr-rd-content table th, sr-rd-content table td {\n   border: none;\n}\n\nsr-rd-content ul, sr-rd-content ol {\n   margin: 0;\n   padding: 0;\n}\n\nsr-rd-content ul {\n   margin: 0 0 1.2em 0;\n   margin-left: 1.3em;\n   padding: 0;\n   list-style: disc;\n}\n\nsr-rd-content ol {\n   list-style: decimal;\n   margin-left: 1.3em;\n}\n\nsr-rd-content ul li, sr-rd-content ol li {\n   font-size: inherit;\n   list-style: disc;\n   margin: 0 0 1.2em 0;\n}\n\nsr-rd-content ul li *, sr-rd-content ol li * {\n   margin: 0;\n   text-align: initial;\n}\n\nsr-rd-content li ul, sr-rd-content li ol {\n   margin-bottom: 0.8em;\n   margin-left: 2em;\n}\n\nsr-rd-content li ul {\n   list-style: circle;\n}\n\nsr-rd-content pre {\n   font-family: Consolas, Monaco, 'Andale Mono', \"Source Code Pro\", \"Liberation Mono\", Courier, monospace;\n\n   display: block;\n\n   padding: 15px;\n\n   font-size: 1.1rem;\n   line-height: 1.5;\n\n   word-break: break-all;\n   word-wrap: break-word;\n   white-space: pre;\n\n   overflow: auto;\n}\n\nsr-rd-content pre div {\n   font-size: 1.1rem;\n}\n\nsr-rd-content pre * {\n   font-size: 1.1rem;\n}\n\nsr-rd-content pre,\nsr-rd-content li pre code,\nsr-rd-content p pre code {\n   background-color: transparent;\n   border: none;\n}\n\nsr-rd-content pre code {\n   margin: 0;\n   padding: 0;\n   font-size: 1.1rem;\n}\n\nsr-rd-content pre code * {\n   font-size: 1.1rem;\n}\n\nsr-rd-content li code,\nsr-rd-content p code {\n   margin: 0 4px;\n   padding: 2px 4px;\n   font-size: 1.1rem;\n}\n\n.sr-rd-content-img {\n   width: 90%;\n   height: auto;\n}\n\n.sr-rd-content-img-load {\n   width: 48px;\n   height: 48px;\n   margin: 0;\n   padding: 0;\n   border-style: none;\n   border-width: 0;\n   background-repeat: no-repeat;\n   background-image: url( \"../images/loading.gif\" );\n}\n\n.sr-rd-content-center {\n   text-align: center;\n   display: -webkit-box;\n   -webkit-box-align: center;\n   -webkit-box-pack: center;\n   -webkit-box-orient: vertical;\n}\n\n.sr-rd-content-nobeautify {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   box-shadow: 0 0 0;\n}\n\nsr-rd-mult {\n   display: flex;\n   flex-direction: row;\n\n   margin: 0 0 16px 0;\n   padding: 16px 0 24px;\n\n   width: 100%;\n\n   background-color: #fafafa;\n\n   border-radius: 2px;\n   box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);\n}\n\nsr-rd-mult:hover {\n   transition: all 450ms 0ms;\n   box-shadow: 1px 1px 8px rgba(0, 0, 0, .16);\n}\n\nsr-rd-mult sr-rd-mult-content {\n   display: flex;\n   flex-direction: column;\n\n   padding: 0 16px 0;\n}\n\nsr-rd-mult sr-rd-mult-avatar {\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n}\n\nsr-rd-mult sr-rd-mult-avatar span {\n   display: -webkit-box;\n\n   -webkit-line-clamp: 1;\n   -webkit-box-orient: vertical;\n\n   max-width: 75px;\n\n   overflow: hidden;\n   text-overflow: ellipsis;\n   text-align: left;\n\n   font-size: 1rem;\n}\n\nsr-rd-mult sr-rd-mult-avatar img {\n   margin-bottom: 0;\n\n   max-width: 50px;\n   max-height: 50px;\n   width: 50px;\n   height: 50px;\n\n   border-radius: 50%;\n}\n\nsr-rd-mult sr-rd-mult-avatar .sr-rd-content-center {\n   margin: 0;\n}\n\nsr-page {\n   display: flex;\n   flex-direction: row;\n   justify-content: space-between;\n\n   width: 100%;\n}";
var theme_pixyii = "sr-rd-theme-pixyii{display:none;}\n\n/**\n * Pixyii style\n */\n\n/**\n * Common style, include: h1 ~ h6; ol ul; code pre; table; sr-blockquote\n */\n\nsr-rd-content h1,sr-rd-content h1 *,sr-rd-content h2,sr-rd-content h2 *,sr-rd-content h3,sr-rd-content h3 *,sr-rd-content h4,sr-rd-content h4 *,sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{color:inherit;font-weight:900;line-height:1.2;margin:1em 0 1em}sr-rd-content h1,sr-rd-content h1 *{font-size:3.92rem}sr-rd-content h2,sr-rd-content h2 *{font-size:3.64rem}sr-rd-content h3,sr-rd-content h3 *{font-size:2.275rem}sr-rd-content h4,sr-rd-content h4 *{font-size:1.82rem}sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{font-size:1.573rem}\nsr-rd-content ol,sr-rd-content ul{font-size:1.75rem;line-height:1.5rem}sr-rd-content li{font-size:1.575rem;line-height:1.8;margin:0;position:relative}\nsr-rd-content table{width:100%;font-size:1.575rem}sr-rd-content table>thead>tr>th,sr-rd-content table>thead>tr>td,sr-rd-content table>tbody>tr>th,sr-rd-content table>tbody>tr>td,sr-rd-content table>tfoot>tr>th,sr-rd-content table>tfoot>tr>td{padding:12px;line-height:1.2;vertical-align:top;border-top:1px solid #333}sr-rd-content table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #333}sr-rd-content table>caption+thead>tr:first-child>th,sr-rd-content table>caption+thead>tr:first-child>td,sr-rd-content table>colgroup+thead>tr:first-child>th,sr-rd-content table>colgroup+thead>tr:first-child>td,sr-rd-content table>thead:first-child>tr:first-child>th,sr-rd-content table>thead:first-child>tr:first-child>td{border-top:0}sr-rd-content table>tbody+tbody{border-top:2px solid #333}\nsr-rd-content sr-blockquote {\n    margin: 1rem 0px;\n    padding: 1.33em;\n    font-style: italic;\n    border-left: 5px solid rgb(122, 122, 122);\n    color: rgb(85, 85, 85);\n}\n\n/**\n * Custom style, include: background; title; desc; sr-rd-content; p,div; a; pre\n */\n\n.simpread-theme-root {\n    background-color: rgb(255, 255, 255);\n    color: rgb(85, 85, 85);\n}\n\nsr-rd-title {\n    font-family: PingFang SC,Hiragino Sans GB,Microsoft Yahei,WenQuanYi Micro Hei,sans-serif;\n    font-size: 4.2rem;\n    font-weight: 900;\n    line-height: 1.2;\n}\n\nsr-rd-desc {\n    margin: 1rem 0px;\n    padding: 1.33em;\n    font-style: italic;\n    font-size: 2rem;\n    line-height: 2;\n    border-left: 5px solid rgb(122, 122, 122);\n    color: rgb(85, 85, 85);\n}\n\nsr-rd-content {\n    font-size: 2.1rem;\n    line-height: 1.8;\n    font-weight: 400;\n    color: rgb(85, 85, 85);\n}\n\nsr-rd-content *,\nsr-rd-content p,\nsr-rd-content div {\n    color: rgb(85, 85, 85);\n    font-size: 1.75rem;\n    line-height: 1.8;\n    font-weight: 300;\n}\n\nsr-rd-content strong {\n    font-weight: 400;\n}\n\nsr-rd-content a,\nsr-rd-content a:link {\n    color: rgb(70, 63, 92);\n    text-decoration: underline;\n}\n\nsr-rd-content a:hover,\nsr-rd-content a:focus,\nsr-rd-content a:active {\n    color: rgb(70, 63, 92);\n    text-decoration: underline;\n}\n\nsr-rd-content sr-blockquote code {\n    font-size: inherit;\n}\n\nsr-rd-content pre {\n    color: rgb(122, 122, 122);\n    background-color: transparent;\n    border: 1px solid rgb(122, 122, 122);\n}\n\nsr-rd-content li code,\nsr-rd-content p code {\n    color: rgb(122, 122, 122);\n    background-color: transparent;\n}";
var theme_gothic = "sr-rd-theme-gothic{display:none;}\n\n/**\n * Gothic style\n */\n\n/**\n * Common style, include: h1 ~ h6; ol ul; code pre; table; sr-blockquote\n */\n\nsr-rd-content h1{line-height:4rem;margin:4rem 0 1.75rem;padding:20px 30px}sr-rd-content h1,sr-rd-content h2{font-weight:400;text-align:center;text-transform:uppercase}sr-rd-content h2{line-height:3rem;margin:3rem 0 1.9375rem;padding:0 30px}sr-rd-content h3,sr-rd-content h4,sr-rd-content h5{font-weight:400}sr-rd-content h6{font-weight:700}sr-rd-content h1{font-size:3.6rem}sr-rd-content h2{font-size:3.2rem}sr-rd-content h3{font-size:2.5rem}sr-rd-content h4{font-size:2.2rem}sr-rd-content h5{font-size:1.9rem}sr-rd-content h6{font-size:1.7rem}sr-rd-content h1,sr-rd-content h2,sr-rd-content h3,sr-rd-content h4,sr-rd-content h5,sr-rd-content h6{margin-top:1.2em;margin-bottom:0.6em;color:#111}\nsr-rd-content ol,sr-rd-content ul{list-style-type:disc}sr-rd-content ul, sr-rd-content ol{margin-left:3em}sr-rd-content ol ol,sr-rd-content ul ol{list-style-type:lower-roman}sr-rd-content ol ol ol,sr-rd-content ol ul ol,sr-rd-content ul ol ol,sr-rd-content ul ul ol{list-style-type:lower-alpha}\nsr-rd-content table{margin-bottom:20px}sr-rd-content table th,sr-rd-content table td{padding:8px;line-height:1.25rem;vertical-align:top;border-top:1px solid #ddd}sr-rd-content table th{font-weight:bold}sr-rd-content table thead th{vertical-align:bottom}sr-rd-content table caption+thead tr:first-child th,sr-rd-content table caption+thead tr:first-child td,sr-rd-content table colgroup+thead tr:first-child th,sr-rd-content table colgroup+thead tr:first-child td,sr-rd-content table thead:first-child tr:first-child th,sr-rd-content table thead:first-child tr:first-child td{border-top:0}sr-rd-content table tbody+tbody{border-top:2px solid #ddd}\nsr-rd-content sr-blockquote {\n    margin: 0 0 1.11111rem;\n    padding: 0.5rem 1.11111rem 0 1.05556rem;\n    border-left: 1px solid gray;\n}\nsr-rd-content sr-blockquote,\nsr-rd-content sr-blockquote p {\n    line-height: 2;\n    color: #6f6f6f;\n}\n\n/**\n * Custom style, include: background; title; desc; sr-rd-content; p,div; a; pre\n */\n\n.simpread-theme-root {\n    background: rgb(252, 252, 252);\n    color: #333;\n}\n\nsr-rd-title {\n    font-weight: normal;\n    line-height: 4rem;\n    text-align: center;\n    text-transform: uppercase;\n\n    color: rgb(17, 17, 17);\n    font-size: 3.2rem;\n}\n\nsr-rd-desc {\n    margin: 0px 0px 1.11111rem;\n    padding: 0.5rem 1.11111rem 0px 1.05556rem;\n\n    font-size: 2rem;\n    line-height: 2;\n    color: rgb(111, 111, 111);\n\n    border-left: 1px solid gray;\n}\n\nsr-rd-content {\n    font-weight: 400;\n    color: #333;\n}\n\nsr-rd-content *,\nsr-rd-content p,\nsr-rd-content div {\n    color: #333;\n}\n\nsr-rd-content a,\nsr-rd-content a:link {\n    color: rgb(153, 0, 0);\n    text-decoration: none;\n}\n\nsr-rd-content a:hover,\nsr-rd-content a:focus,\nsr-rd-content a:active {\n    color: rgb(153, 0, 0);\n    text-decoration: underline;\n}\n\nsr-rd-content pre {\n    background-color: transparent;\n    border: 1px solid rgb(204, 204, 204);\n}\n\nsr-rd-content li code,\nsr-rd-content p code {\n    background-color: transparent;\n    border: 1px solid rgb(204, 204, 204);\n}\n\n/**\n * Multiple page\n */\nsr-rd-mult {\n    background-color: #f2f2f2;\n}";

$("head").append("<style type=\"text/css\">" + notif_style  + "</style>");
$("head").append("<style type=\"text/css\">" + main_style   + "</style>");
$("head").append("<style type=\"text/css\">" + user_style   + "</style>");
$("head").append("<style type=\"text/css\">" + option_style + "</style>");
$("head").append("<style type=\"text/css\">" + theme_common + "</style>");