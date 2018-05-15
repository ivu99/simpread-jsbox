/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

// https://github.com/kenshin/notify
var Notify = ( function () {
    var VERSION = "2.0.1",
        name    = "notify",
        root    = "notify-gp",
        roottmpl= "<" + root + ">",
        num     = 0,
        NORMAL  = 0,
        SUCCESS = 1,
        WARNING = 2,
        ERROR   = 3,
        MODE    = {
            toast    : "toast",
            modal    : "modal",
            snackbar : "snackbar",
        },
        STATE   = {
            loading  : "loading",
            holdon   : "holdon",
        },
        POSITION= {
            lefttop     : "lt",
            leftbottom  : "lb",
            rightbottom : "rb",
        },
        options = {
            version : VERSION,
            title   : "",
            content : "",
            type    : NORMAL,
            mode    : MODE.toast,
            state   : undefined,
            flat    : false,
            delay   : 1000 * 5,
            icon    : "",
            action  : "",
            cancel  : "",
            callback: undefined,
            complete: undefined,
        },
        timer      = {},
        $root,
        TMPL       = '\
        <notify>\
            <notify-a href="javascript:;"><notify-span></notify-span></notify-a>\
            <notify-i></notify-i>\
            <notify-title></notify-title>\
            <notify-content></notify-content>\
            <notify-action></notify-action>\
            <notify-cancel></notify-cancel>\
        </notify>',
        loading    = '\
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling">\
                <circle stroke="#fff" stroke-width="10" cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" r="30" stroke-dasharray="141.37166941154067 49.12388980384689" transform="rotate(102 50 50)">\
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>\
                </circle>\
            </svg>',
        prefix     = function( value ) {
            return name + "-" + value;
        },
        registyElement = function( name, elements ) {
            elements.forEach( function( item ) {
                document.createElement( prefix( item ));
            });
        },
        closeHandle = function( event ) {
            $root.off( "click", "." + event.data + " notify-a", closeHandle );
            hidden( $(this).parent() );
        },
        delayHandler = function( item ) {
            clearTimeout( timer[item] );
            delete timer[item];
            hidden( this );
        },
        callbackHander = function( event ) {
            event.data[1] && event.data[1]( event.data[2] );
            $root.off( "click", "." + event.data[0] + " notify-action", callbackHander );
            hidden( $(this).parent() );
        },
        completeHandler = function() {
            hidden( this );
        },
        hidden = function( target ) {
            target.addClass( "notify-hide" ).slideUp( 500, function() {
                target.remove();
                if ($root.children().length === 0 ) $root.css( "z-index", 0 );
            });
        },
        render = function() {
            var $target  = $( TMPL ),
                $title   = $target.find(prefix( "title"   )),
                $content = $target.find(prefix( "content" )),
                $close   = $target.find(prefix( "a"       )),
                $icon    = $target.find(prefix( "i"       )),
                $action  = $target.find(prefix( "action"  )),
                $cancel  = $target.find(prefix( "cancel"  )),
                item     = "notify-item-" + num++,
                position = this.constructor.Position;

            this.title   ? $title.text( this.title )     : $title.hide();
            this.content ? $content.html( this.content ) : $content.hide();

            if ( this.mode === MODE.modal ) {
                $target.addClass( "notify-modal" );
                $content.addClass( "notify-modal-content" );
                $root.on( "click", "." + item + " notify-a", item, closeHandle );
            } else {
                $close.hide();
                this.mode == MODE.snackbar && $target.addClass( "notify-snackbar" );
            }

            this.mode !== MODE.modal && this.icon !== "" &&
                $icon.css({ "background-image": "url(" + this.icon + ")", "display": "block" });

            switch( this.type ) {
                case 1:
                    $content.addClass( "notify-success" );
                    break;
                case 2:
                    $content.addClass( "notify-warning" );
                    break;
                case 3:
                    $content.addClass( "notify-error" );
                    break;
            }

            if ( this.action !== "" && this.callback && typeof this.callback == "function" ) {
                $content.css( "width", "100%" );
                $action.text( this.action ).css( "display", "block" );
                $root.on( "click", "." + item + " notify-action", [ item, this.callback, "action" ], callbackHander );
            }

            if ( this.cancel !== "" && this.callback && typeof this.callback == "function" ) {
                $content.css( "width", "100%" );
                $cancel.text( this.cancel ).css( "display", "block" );
                $root.on( "click", "." + item + " notify-cancel", [ item, this.callback, "cancel" ], callbackHander );
            }

            this.mode !== MODE.modal && this.state !== STATE.loading && this.state !== STATE.holdon && ( this.action == "" || !this.callback || typeof this.callback != "function" ) &&
                ( timer[item] = setTimeout( delayHandler.bind( $target, item ), this.delay ) );

            if ( this.state == STATE.loading ) {
                $icon.html( loading );
                $icon.css({ display: "block" });
                this.complete = completeHandler.bind( $target );
            }

            if ( this.state == STATE.holdon ) {
                $icon.css({ display: "block" }).addClass( "holdon" );
                $cancel.after( $icon[0].outerHTML );
                $target.find( "notify-i:first" ).remove();
                $root.on( "click", "." + item + " notify-i", [ item, this.callback, "holdon" ], callbackHander );
                if ( !this.action || !this.cancel ) $content.css({ width: "100%" });
            }

            if ( this.flat ) {
                $target.css({ "box-shadow": "none", "border-radius": "2px" });
            }

            if ( position == POSITION.rightbottom || position == POSITION.leftbottom ) {
                $target.css({ "transform-origin": "left bottom 0px" });
                $root.addClass( "notify-position-" + position + "-corner" );
            } else if ( position == POSITION.lefttop ) {
                $root.addClass( "notify-position-" + position + "-corner" );
            }

            $target.addClass( item );
            $root.append( $target ).css( "z-index", 2147483647 );
            this.mode == MODE.snackbar && $target.css( "margin-left", "-" + $target.width()/2 + "px" );
            setTimeout( function() { $target.addClass( "notify-show" ); }, 200 );
        };

    function Notify() {
        registyElement( name, [ "gp", "div", "a", "span", "title", "content", "i" ] );
        if ( $( "html" ).find ( root ).length == 0 ) {
            $( "html" ).append( roottmpl );
            $root = $( root );
        }
    }

    Notify.prototype.title   = options.title;
    Notify.prototype.content = options.content;
    Notify.prototype.type    = options.type;
    Notify.prototype.mode    = options.mode;
    Notify.prototype.state   = options.state;
    Notify.prototype.delay   = options.delay;
    Notify.prototype.icon    = options.icon;
    Notify.prototype.flat    = options.flat;
    Notify.prototype.action  = options.action;
    Notify.prototype.cancel  = options.cancel;
    Notify.prototype.callback= options.callback;
    Notify.prototype.complete= options.complete;
    Notify.Position          = undefined;

    Notify.prototype.Render  = function () {

        var self = this;

        if ( arguments.length === 1 && typeof arguments[0] === "object" ) {
            options = arguments[0];

            Object.keys( options ).forEach( function( item ) {
                self[item] = options[item];
            });

            render.bind( self )();
        }
        else if ( typeof arguments[0] !== "object" && arguments.length > 0 && arguments.length < 5 ) {
            switch ( arguments.length ) {
                case 1:
                    this.content = arguments[0];
                    break;
                case 2:
                    if ( arguments[0] == MODE.snackbar ) {
                        this.mode = arguments[0];
                    }
                    else if ( typeof arguments[0] == "number" ) {
                        this.type  = arguments[0];
                    } else {
                        this.mode  = MODE.modal,
                        this.title = arguments[0];
                    }
                    this.content   = arguments[1];
                    break;
                case 3:
                    this.content   = arguments[0];
                    this.action    = arguments[1];
                    this.callback  = arguments[2];
                    break;
                case 4:
                    if ( arguments[0] == MODE.snackbar ) {
                        this.mode      = arguments[0];
                        this.content   = arguments[1];
                        this.action    = arguments[2];
                        this.callback  = arguments[3];
                    }
                    break;
            }
            render.bind( self )();
        }
        else {
            console.error( "Arguments error", arguments );
        }
        return self;
    };

    Notify.prototype.Clone  = function () {
        return new Notify();
    };

    return Notify;

})();

// https://github.com/kenshin/puread
var PureRead = (function () {
    'use strict';
  
    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  
    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
  
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  
    var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
  
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
  
      return target;
    };
  
    var get = function get(object, property, receiver) {
      if (object === null) object = Function.prototype;
      var desc = Object.getOwnPropertyDescriptor(object, property);
  
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
  
        if (parent === null) {
          return undefined;
        } else {
          return get(parent, property, receiver);
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
  
        if (getter === undefined) {
          return undefined;
        }
  
        return getter.call(receiver);
      }
    };
  
    var inherits = function (subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
  
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
  
    var possibleConstructorReturn = function (self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };
  
    var slicedToArray = function () {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
  
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
  
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
  
        return _arr;
      }
  
      return function (arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
  
    var toConsumableArray = function (arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
  
        return arr2;
      } else {
        return Array.from(arr);
      }
    };
  
    console.log("=== PureRead: Util load ===");
  
    /**
     * Deep clone object
     * 
     * @param  {object} target object
     * @return {object} new target object
     */
    function clone(target) {
        return $.extend(true, {}, target);
    }
  
    /**
     * Get URI
     * 
     * @return {string} e.g. current site url is http://www.cnbeta.com/articles/1234.html return http://www.cnbeta.com/articles/
     */
    function getURI() {
        var name = function name(pathname) {
            pathname = pathname != "/" && pathname.endsWith("/") ? pathname = pathname.replace(/\/$/, "") : pathname;
            return pathname.replace(/\/[%@#.~a-zA-Z0-9_-]+$|^\/$/g, "");
        },
            path = name(window.location.pathname);
        return window.location.protocol + "//" + window.location.hostname + path + "/";
    }
  
    /**
     * Verify html
     * 
     * @param  {string} input include html tag, e.g.:
        <div class="article fmt article__content">
     *
     * @return {array} 0: int include ( -1: fail； 0: empty html; 1: success; 2: special tag )
     *                 1: result
     */
    function verifyHtml(html) {
        if (html == "") return [0, html];else if (specTest(html)) return [2, html];
        var item = html.match(/<\S+ (class|id)=("|')?[\w-_=;:' ]+("|')?>?$|<[^/][-_a-zA-Z0-9]+>?$/ig);
        if (item && item.length > 0) {
            return [1, item];
        } else {
            return [-1, undefined];
        }
    }
  
    /**
     * Conver html to jquery object
     * 
     * @param  {string} input include html tag, e.g.:
        <div class="article fmt article__content">
     *
     * @return {string} formatting e.g.:
                h2#news_title
                div.introduction
                div.content
                div.clearfix
                div.rating_box
                span
                special tag, @see specTest
                     e.g. [['<strong>▽</strong>']]        [[[$('.article-btn')]]]
                          [[/src=\\S+(342459.png)\\S+'/]] [[{$('.content').html()}]]
     *
     */
    function selector(html) {
        var _verifyHtml = verifyHtml(html),
            _verifyHtml2 = slicedToArray(_verifyHtml, 2),
            code = _verifyHtml2[0],
            item = _verifyHtml2[1];
  
        if (code == 2) return html;else if (code == 1) {
            var _item$0$trim$replace$ = item[0].trim().replace(/['"<>]/g, "").replace(/ /ig, "=").split("="),
                _item$0$trim$replace$2 = slicedToArray(_item$0$trim$replace$, 3),
                tag = _item$0$trim$replace$2[0],
                prop = _item$0$trim$replace$2[1],
                value = _item$0$trim$replace$2[2]; // ["h2", "class", "title"]
  
  
            if (!prop) prop = tag;else if (prop.toLowerCase() === "class") prop = tag + "." + value;else if (prop.toLowerCase() === "id") prop = tag + "#" + value;
            return prop;
        } else {
            return null;
        }
    }
  
    /**
     * Verify special action, action include:
       - [[{juqery code}]] // new Function, e.g. $("xxx").xxx() return string
       - [['text']]        // remove '<text>'
       - [[/regexp/]]      // regexp e.g. $("sr-rd-content").find( "*[src='http://ifanr-cdn.b0.upaiyun.com/wp-content/uploads/2016/09/AppSo-qrcode-signature.jpg']" )
       - [[[juqery code]]] // new Function, e.g. $("xxx").find() return jquery object
  
     * 
     * @param  {string} verify content
     * @return {boolen} verify result
     */
    function specTest(content) {
        return (/^(\[\[)[\[{'/]{1}[ \S]+[}'/\]]\]\]{1}($)/g.test(content)
        );
    }
  
    /**
     * Exec special action, action include: @see specTest
     * type: 0, 3 - be chiefly used in include logic
     * type: 1, 2 - be chiefly used in exclude logic
     * 
     * @param  {string} content
     * @return {array}  0: result; 1: type( include: -1:error 0:{} 1:'' 2:// 3:[])
     */
    function specAction(content) {
        var _ref = [content.replace(/(^)\[\[|\]\]$/g, "")],
            value = _ref[0],
            type = _ref[1];
  
        switch (value[0]) {
            case "{":
                value = value.replace(/^{|}$/g, "");
                content = function (v) {
                    return new Function("return " + v)();
                }(value);
                type = 0;
                break;
            case "'":
                content = value.replace(/^'|'$/g, "");
                var name = content.match(/^<[a-zA-Z0-9_-]+>/g).join("").replace(/<|>/g, "");
                var str = content.replace(/<[/a-zA-Z0-9_-]+>/g, "");
                content = name + ":contains(" + str + ")";
                type = 1;
                break;
            case "/":
                content = value.replace(/^\/|\/$/g, "").replace(/\\{2}/g, "\\").replace(/'/g, '"');
                type = 2;
                break;
            case "[":
                value = value.replace(/^{|}$/g, "");
                content = function (v) {
                    return new Function("return " + v)();
                }(value)[0];
                type = 3;
                break;
            default:
                console.error("Not support current action.", content);
                type = -1;
                break;
        }
        return [content, type];
    }
  
    console.log("=== PureRead: AdapteSite load ===");
  
    var site = {
        url: "",
        target: "",
        matching: [],
        name: "", // only read mode
        title: "", // only read mode
        desc: "", // only read mode
        exclude: [],
        include: "",
        avatar: [],
        paging: []
    };
    var minimatch = void 0;
  
    var AdapteSite = function () {
        function AdapteSite() {
            var sites = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { global: [], custom: [], local: [] };
            classCallCheck(this, AdapteSite);
  
            this.url = getURI();
            this.sites = sites; // include: global, custom, local
            this.current = {};
            this.state = "none"; // include: meta, txt, adapter, none, temp
            this.origins = [];
        }
  
        /**
         * Set global minimatch
         */
  
  
        createClass(AdapteSite, [{
            key: "SetMinimatch",
            value: function SetMinimatch(value) {
                minimatch = value;
            }
  
            /**
             * Get site from url
             * 
             * @param {string} include: global, custom, local
             * @param {string} url 
             */
  
        }, {
            key: "Getsite",
            value: function Getsite(type, url) {
                return this.sites[type].find(function (item) {
                    return item[0] == url;
                });
            }
  
            /**
             * Get sites from url
             */
  
        }, {
            key: "Getsites",
            value: function Getsites() {
                var matching = [],
                    meta = readmeta();
                this.current.url = this.url;
                if (meta) {
                    this.current.auto = meta.auto;
                    this.current.url = meta.url;
                    delete meta.auto;
                    delete meta.url;
                    this.current.site = _extends({}, meta);
                    this.current.site.name.startsWith("metaread::") && (this.state = "meta");
                    this.current.site.name.startsWith("txtread::") && (this.state = "txt");
                } else {
                    getsite("local", new Map(this.sites.local), this.url, matching);
                    getsite("global", new Map(this.sites.global), this.url, matching);
                    getsite("custom", new Map(this.sites.custom), this.url, matching);
                    if (matching.length > 0) {
                        var found = matching[0];
                        this.current.url = found[0];
                        this.current.site = this.Safesite(_extends({}, found[1]), found[2], found[0]);
                        this.state = "adapter";
                    } else {
                        var obj = readmulti();
                        if (obj != -1) {
                            this.Newmultisite("read", obj);
                            this.state = "temp";
                        } else {
                            var $dom = readtmpl();
                            if ($dom != -1) {
                                this.Newsite("read", $dom[0].outerHTML);
                                this.dom = $dom[0];
                                this.state = "temp";
                            } else this.current.site = clone(site);
                        }
                    }
                }
                this.current.site.matching = matching;
            }
  
            /**
             * Add new sites to this.sites.global( global sites )
             * 
             * @param {object} sites.[array]
             * @return {int} update sites count
             */
  
        }, {
            key: "Addsites",
            value: function Addsites(result) {
                var count = 0;
                if (this.sites.global.length == 0) {
                    this.sites.global = this.Formatsites(result);
                    count = this.sites.global.length;
                } else {
                    var obj = addsites(this.Formatsites(result), this.sites.global);
                    count = obj.count;
                    this.sites.global = obj.newsites;
                }
                return count;
            }
  
            /**
             * Add new sites to this.sites.local( local sites )
             * 
             * @param  {object} new sites
             * @return {array} this.sites.local
             */
  
        }, {
            key: "Addlocalsites",
            value: function Addlocalsites(new_sites) {
                this.sites.local = [].concat(toConsumableArray(new_sites));
                return this.sites.local;
            }
  
            /**
             * Add all sites to this.sites
             * 
             * @param  {object} new sites
             * @return {object} this.sites
             */
  
        }, {
            key: "Addallsites",
            value: function Addallsites(sites) {
                this.sites = {
                    global: [].concat(toConsumableArray(sites.global)),
                    custom: [].concat(toConsumableArray(sites.custom)),
                    local: [].concat(toConsumableArray(sites.local))
                };
                return this.sites;
            }
  
            /**
             * Add new site( read only )
             * 
             * @param {string} include: focus, read
             * @param {string} when read html is dom.outerHTML
             */
  
        }, {
            key: "Newsite",
            value: function Newsite(mode, html) {
                var new_site = { mode: mode, url: window.location.href, site: { name: "tempread::" + window.location.host, title: "<title>", desc: "", include: "", exclude: [] } };
                html && (new_site.site.html = html);
                this.current.mode = new_site.mode, this.current.url = new_site.url;
                this.current.site = this.Safesite(_extends({}, new_site.site), "local", new_site.url);
                console.log("【read only】current site object is ", this.current);
            }
  
            /**
             * Add new multi-site( read only )
             * 
             * @param {string} include: focus, read
             * @param {object} multi-page, avator, include
             */
  
        }, {
            key: "Newmultisite",
            value: function Newmultisite(mode, multi) {
                var new_site = { mode: mode, url: window.location.href, site: { name: "tempread::" + window.location.host, title: "<title>", desc: "", include: multi.include, exclude: [], avatar: multi.avatar } };
                this.current.mode = new_site.mode, this.current.url = new_site.url;
                this.current.site = this.Safesite(_extends({}, new_site.site), "local", new_site.url);
                console.log("【read only】current multi-site object is ", this.current);
            }
  
            /**
             * Update url and site from param
             * 
             * @param {string} value is: global, custom, local
             * @param {string} older url
             * @param {array}  [ url, new site]
             */
  
        }, {
            key: "Updatesite",
            value: function Updatesite(key, older, newer) {
                var idx = this.sites[key].findIndex(function (item) {
                    return item[0] == older;
                });
                idx == -1 && (idx = this.sites[key].length);
                this.sites[key].splice(idx, 1, newer);
            }
  
            /**
             * Delete site from this.sites.local
             * 
             * @param {string} value is: global, custom, local
             * @param {string} older url
             * @param {func}   callback
             */
  
        }, {
            key: "Deletesite",
            value: function Deletesite(key, older, callback) {
                var idx = this.sites[key].findIndex(function (item) {
                    return item[0] == older;
                });
                idx != -1 && this.sites[key].splice(idx, 1);
                callback(idx);
            }
  
            /**
             * Safe site, add all site props
             * 
             * @param {object} modify site 
             * @param {string} target include: global custom local
             * @param {string} url 
             * @returns {object} site
             */
  
        }, {
            key: "Safesite",
            value: function Safesite(site, target, url) {
                site.url = url;
                site.target = target;
                site.name == "" && (site.name = "tempread::");
                (!site.avatar || site.avatar.length == 0) && (site.avatar = [{ name: "" }, { url: "" }]);
                (!site.paging || site.paging.length == 0) && (site.paging = [{ prev: "" }, { next: "" }]);
                return site;
            }
  
            /**
             * Clean useless site props
             * 
             * @param   {object} site
             * @returns {object} site
            */
  
        }, {
            key: "Cleansite",
            value: function Cleansite(site) {
                delete site.url;
                delete site.html;
                delete site.target;
                delete site.matching;
                site.avatar && site.avatar.length > 0 && site.avatar[0].name == "" && delete site.avatar;
                site.paging && site.paging.length > 0 && site.paging[0].prev == "" && delete site.paging;
                return site;
            }
  
            /**
             * Format sites object from local or remote json file
             * 
             * @param  {object} sites.[array]
             * @return {array} foramat e.g. [[ <url>, object ],[ <url>, object ]]
             */
  
        }, {
            key: "Formatsites",
            value: function Formatsites(result) {
                var format = new Map();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;
  
                try {
                    for (var _iterator = result.sites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _site = _step.value;
  
                        if (verifysite(_site) != 0) continue;
                        var url = _site.url;
                        delete _site.url;
                        format.set(url, _site);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
  
                return [].concat(toConsumableArray(format));
            }
  
            /**
             * Clear sites
             * 
             * @param {string} site type, only include: global, custom. local
             */
  
        }, {
            key: "Clearsites",
            value: function Clearsites(type) {
                type ? this.sites[type] = [] : this.sites = { global: [], custom: [], local: [] };
            }
  
            /**
             * Add urls to origins
             * 
             * @param {json} result json
             */
  
        }, {
            key: "Origins",
            value: function Origins(result) {
                var urls = result.origins.map(function (item) {
                    return item.url;
                });
                urls = new Set(this.origins.concat(urls));
                urls.forEach(function (item) {
                    if (item.trim() == "" || !item.trim().startsWith("http") || !item.trim().endsWith(".json")) urls.delete(item);
                });
                this.origins = [].concat(toConsumableArray(urls));
                return this.origins;
            }
  
            /**
             * Add new sites to this.sites.custom( custom sites )
             * 
             * @param  {object} new sites
             * @return {array} this.sites.custom
             */
  
        }, {
            key: "Addorigins",
            value: function Addorigins(new_sites) {
                this.sites.custom = [].concat(toConsumableArray(new_sites));
                return this.sites.custom;
            }
  
            /**
             * Clear origins
             * 
             * @returns custom.length
             */
  
        }, {
            key: "Clearorigins",
            value: function Clearorigins() {
                var len = this.sites.custom.length;
                this.sites.custom = [];
                return len;
            }
        }]);
        return AdapteSite;
    }();
    function readmeta() {
        if (minimatch(location.href, "file://**/*.txt") || minimatch(location.href, "http*://**/*.txt")) {
            return readtxt();
        }
        var reg = /<\S+ (class|id)=("|')?[\w-_=;:' ]+("|')?>?$|<[^/][-_a-zA-Z0-9]+>?$/ig,
            // from util.verifyHtml()
        meta = {
            name: $("meta[name='simpread:name']").attr("content"),
            url: $("meta[name='simpread:url']").attr("content"),
            title: $("meta[name='simpread:title']").attr("content"),
            desc: $("meta[name='simpread:desc']").attr("content"),
            include: $("meta[name='simpread:include']").attr("content"),
            exp: $("meta[name='simpread:exclude']").attr("content"),
            auto: $("meta[name='simpread:auto']").attr("content"),
            exclude: []
        };
        if (meta.name && meta.include) {
            if (meta.url && !minimatch(location.href, meta.url)) {
                return undefined;
            }
            !meta.title && (meta.title = "<title>");
            !meta.desc && (meta.desc = "");
            !meta.exp && (meta.exp = "");
            meta.name = "metaread::" + meta.name;
            meta.auto = meta.auto == "true" ? true : false;
            var idx = ["title", "desc", "include", "exp"].findIndex(function (item) {
                return meta[item] != "" && !meta[item].match(reg);
            });
            meta.exclude.push(meta.exp);
            delete meta.exp;
            console.assert(idx == -1, "meta read mode error. ", meta);
            return idx == -1 ? meta : undefined;
        } else {
            console.warn("current not found meta data", meta);
            return undefined;
        }
    }
  
    /**
     * Read txt, include: file and http
     */
    function readtxt() {
        var title = location.pathname.split("/").pop(),
            type = location.protocol == "file:" ? "local" : "remote",
            meta = {
            name: "txtread::" + type,
            title: "<title>",
            desc: "",
            include: "<pre>",
            auto: false,
            exclude: []
        };
        if (type == "remote") {
            meta.include = "";
            meta.html = $("body pre").html().replace(/\n/ig, "<br>");
        }
        !$("title").html() && $("head").append("<title>" + decodeURI(title.replace(".txt", "")) + "</title>");
        return meta;
    }
  
    /**
     * Read mode template, include:
     * 
     * - Hexo
     * - WordPress
     * - Common( include <article> )
     * 
     * @return {jquery} jquery object
     */
    function readtmpl() {
        var $root = $("body"),
            selectors = [".post-content", ".entry-content", ".post-article", ".content-post", ".article-entry", ".article-content", ".article-body", ".markdown-body", "[itemprop='articleBody']", "article", ".post", ".content"];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;
  
        try {
            for (var _iterator2 = selectors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var selector$$1 = _step2.value;
  
                var $target = $root.find(selector$$1);
                if ($target.length > 0) {
                    console.warn("current selector is", selector$$1);
                    return $target;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
  
        return -1;
    }
  
    /**
     * Read mode multi template, include:
     * 
     * - Discuz
     * - Discourse
     * 
     * @return {object} true: object; false: -1
     */
    function readmulti() {
        if (location.pathname.includes("thread") || location.pathname.includes("forum.php")) {
            if ($('.t_f').length > 0 && $('.favatar').find('.authi').length > 0 && $('.avatar').find('img').length > 0) {
                return {
                    avatar: [{ "name": "[[{$('.favatar').find('.authi')}]]" }, { "url": "[[{$('.avatar').find('img')}]]" }],
                    include: "[[{$('.t_f')}]]"
                };
            }
        } else if (/\/t\/[\w-]+\/\d+/.test(location.pathname) && $('meta[name=generator]').attr("content").includes("discourse")) {
            return {
                avatar: [{ "name": "[[{$('.topic-avatar').find('.a[data-user-card]')}]]" }, { "url": "[[{$('.topic-avatar').find('img')}]]" }],
                include: "[[{$('.cooked')}]]"
            };
        }
        return -1;
    }
  
    /**
     * Add new sites to old sites
     * 
     * @param  {array}  new     sites from local or remote
     * @param  {array}  current sites from this.sites.global
     * @return {object} count: new sites; forced: update sites( discard, all site must be forced update)
     */
    function addsites(newsites, old) {
        var oldsites = new Map(old),
            urls = [].concat(toConsumableArray(oldsites.keys()));
        var count = 0;
  
        newsites.map(function (site) {
            if (!urls.includes(site[0])) {
                count++;
            } else if (urls.includes(site[0])) {
            }
        });
        return { count: count, newsites: newsites };
    }
  
    /**
     * Find site by url from sites
     * 
     * @param  {string} type, include: global, local, custom
     * @param  {map}    sites
     * @param  {string} url
     * @param  {array}  matching sites
     * 
     * @return {array}  0: current site; 1: current url， 2: type
     */
    function getsite(type, sites, url) {
        var matching = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  
        var domain = function domain(names) {
            var arr = names.replace("www.", "").match(/\.\S+\.\S+/g);
            if (arr) {
                return arr[0].substr(1);
            } else {
                return names.replace("www.", "");
            }
        },
            urls = [].concat(toConsumableArray(sites.keys())),
            arr = url.match(/[.a-zA-z0-9-_]+/g),
            uri = arr[1].replace("www.", ""),
            hostname = domain(window.location.hostname),
            isroot = function isroot() {
            return window.location.pathname == "/" || /\/(default|index|portal).[0-9a-zA-Z]+$/.test(window.location.pathname);
        };
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;
  
        try {
            for (var _iterator3 = urls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var cur = _step3.value;
  
                var name = sites.get(cur).name,
                    sufname = domain(name);
                if (!isroot() && !cur.endsWith("*") && cur.replace(/^http[s]?:/, "") == url.replace(/^http[s]?:/, "")) {
                    matching.push([cur, clone(sites.get(cur)), type]);
                } else if (cur.match(/\*/g) && cur.match(/\*/g).length == 1 && !isroot() && cur.endsWith("*") && uri.includes(sufname) && hostname == sufname && url.includes(name)) {
                    // e.g. https://www.douban.com/* http://mp.weixin.qq.com/*
                    matching.push([cur, clone(sites.get(cur)), type]);
                } else if (minimatch(window.location.origin + window.location.pathname, cur)) {
                    matching.push([cur, clone(sites.get(cur)), type]);
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
    }
  
    /**
     * Verify site validity, include:
     * - name, url, include, error is -1
     * - title include desc, error is -2
     * - paging, error is -3 ~ -6
     * - avatar, error is -7 ~ -10
     * 
     * @param {object} site 
     */
    function verifysite(site) {
        if (!site.name || !site.url || !site.include) return -1;
        if (verifyHtml(site.title)[0] == -1 || verifyHtml(site.include)[0] == -1 || verifyHtml(site.desc)[0] == -1) {
            return -2;
        }
        if (site.paging) {
            if (site.paging.length != 2) return -3;
            if (!site.paging[0].prev) return -4;
            if (!site.paging[1].next) return -5;
            if (verifyHtml(site.paging[0].prev)[0] == -1 || verifyHtml(site.paging[1].next)[0] == -1) {
                return -6;
            }
        }
        if (site.avatar) {
            if (site.avatar.length != 2) return -7;
            if (!site.avatar[0].name) return -8;
            if (!site.avatar[1].url) return -9;
            if (verifyHtml(site.avatar[0].name)[0] == -1 || verifyHtml(site.avatar[1].url)[0] == -1) {
                return -10;
            }
        }
        return 0;
    }
  
    console.log("=== PureRead: PureRead load ===");
  
    var PureRead = function (_AdapteSite) {
        inherits(PureRead, _AdapteSite);
  
        function PureRead(sites) {
            classCallCheck(this, PureRead);
  
            var _this = possibleConstructorReturn(this, (PureRead.__proto__ || Object.getPrototypeOf(PureRead)).call(this, sites));
  
            _this.version = "0.0.2";
            _this.org_url = location.href;
            _this.html = {}; // clone site, include: title, desc, include, avatar, paging
            _this.plugin = {};
            return _this;
        }
  
        /**
         * Verify current puread is same
         * 
         * @return {boolean} true: same; false: not same;
         */
  
  
        createClass(PureRead, [{
            key: 'Exist',
            value: function Exist() {
                return this.org_url == location.href;
            }
  
            /**
             * Add Plugin
             * 
             * @param {object} plugin object
             */
  
        }, {
            key: 'AddPlugin',
            value: function AddPlugin(plugin) {
                this.plugin = {
                    minimatch: plugin.minimatch,
                    pangu: plugin.pangu,
                    beautify: plugin.beautify,
                    stylesheet: plugin.style
                };
                get(PureRead.prototype.__proto__ || Object.getPrototypeOf(PureRead.prototype), 'SetMinimatch', this).call(this, this.plugin.minimatch);
            }
  
            /**
             * Create temp read mode
             * 
             * @param {string} include: read, focus
             * @param {dom} html dom element
             */
  
        }, {
            key: 'TempMode',
            value: function TempMode(mode, dom) {
                this.state = "temp";
                this.dom = dom;
                this.Newsite(mode, dom.outerHTML);
            }
  
            /**
             * Get read mode html
             */
  
        }, {
            key: 'ReadMode',
            value: function ReadMode() {
                this.html = wrap(this.current.site);
            }
  
            /**
             * Get highlight( focus ) jquery, only usage focus mode
             * 
             * @return {jquery} jquery object
             */
  
        }, {
            key: 'Include',
            value: function Include() {
                var include = this.current.site.include,
                    $focus = [];
                var target = selector(include);
                try {
                    if (specTest(target)) {
                        var _util$specAction = specAction(include),
                            _util$specAction2 = slicedToArray(_util$specAction, 2),
                            value = _util$specAction2[0],
                            state = _util$specAction2[1];
  
                        if (state == 0) {
                            include = include.replace(/\[\[{\$\(|}\]\]|\).html\(\)/g, "");
                            $focus = $(specAction('[[[' + include + ']]]')[0]);
                        } else if (state == 3) {
                            $focus = value;
                        }
                    } else if (target) {
                        $focus = $("body").find(target);
                    }
                } catch (error) {
                    console.error("Get $focus failed", error);
                }
                return $focus;
            }
  
            /**
             * Get exlcude jquery selector array list
             * 
             * @param  {jquery} jquery object
             * @return {array} jquery selector
             */
  
        }, {
            key: 'Exclude',
            value: function Exclude($target) {
                return excludeSelector($target, this.current.site.exclude);
            }
  
            /**
             * Beautify html
             * 
             * @param {jquery} jquery
             */
  
        }, {
            key: 'Beautify',
            value: function Beautify($target) {
                if (this.plugin.beautify) {
                    this.plugin.beautify.specbeautify(this.current.site.name, $target);
                    this.plugin.beautify.removeSpareTag(this.current.site.name, $target);
                    this.plugin.beautify.htmlbeautify($target);
                    this.plugin.beautify.commbeautify(this.current.site.name, $target);
                }
            }
  
            /**
             * Format usage pangu plugin
             * 
             * @param {string} class name
             */
  
        }, {
            key: 'Format',
            value: function Format(cls) {
                this.plugin.pangu && this.plugin.pangu.spacingElementByClassName(cls);
            }
        }]);
        return PureRead;
    }(AdapteSite);
    function wrap(site) {
        var wrapper = clone(site),
            title = selector(site.title == "" ? "<title>" : site.title),
            desc = selector(site.desc),
            include = selector(site.include);
        wrapper.title = query(title);
        wrapper.desc = query(desc);
        wrapper.include = site.include == "" && site.html != "" ? site.html : query(include, "html");
        wrapper.avatar && wrapper.avatar.length > 0 && wrapper.avatar[0].name == "" && delete wrapper.avatar;
        wrapper.paging && wrapper.paging.length > 0 && wrapper.paging[0].prev == "" && delete wrapper.paging;
        wrapper.avatar && wrapper.avatar.forEach(function (item) {
            var key = Object.keys(item).join(),
                value = item[key];
            item[key] = query(selector(value), "html");
        });
        wrapper.paging && wrapper.paging.forEach(function (item) {
            var key = Object.keys(item).join(),
                value = item[key];
            item[key] = query(selector(value));
        });
        return wrapper;
    }
  
    /**
     * Query content usage jquery
     * 
     * @param  {string} query content
     * @param  {string} type, incldue: text,  html and multi
     * @return {string} query result
     */
    function query(content) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "text";
  
        var $root = $("html");
        if (specTest(content)) {
            var _util$specAction3 = specAction(content),
                _util$specAction4 = slicedToArray(_util$specAction3, 2),
                value = _util$specAction4[0],
                state = _util$specAction4[1];
  
            if (state == 0) {
                content = value;
            } else if (state == 3) {
                content = getcontent($root.find(value));
            }
        } else if (type == "html") {
            content = getcontent($root.find(content));
        } else if (type == "multi") {
            // TO-DO
        } else {
            content = $root.find(content).text().trim();
        }
        return content;
    }
  
    /**
     * Get content from current.site.include
     * 
     * @param  {jquery} jquery object e.g. $root.find( content )
     * @return {string} $target html
     */
    function getcontent($target) {
        var html = "";
        switch ($target.length) {
            case 0:
                html = "<sr-rd-content-error></sr-rd-content-error>";
                break;
            case 1:
                html = $target.html().trim();
                break;
            default:
                html = $target.map(function (index, item) {
                    return $(item).html();
                }).get().join("<br>");
                break;
        }
        return html;
    }
  
    /**
     * Get exclude tags list
     * 
     * @param  {jquery} jquery object
     * @param  {array}  hidden html
     * @return {string} tags list string
     */
    function excludeSelector($target, exclude) {
        var tags = [],
            tag = "";
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
  
        try {
            for (var _iterator = exclude[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var content = _step.value;
  
                if (specTest(content)) {
                    var _util$specAction5 = specAction(content),
                        _util$specAction6 = slicedToArray(_util$specAction5, 2),
                        value = _util$specAction6[0],
                        type = _util$specAction6[1];
  
                    if (type == 1) {
                        tag = value;
                    } else if (type == 2) {
                        var arr = $target.html().match(new RegExp(value, "g"));
                        if (arr && arr.length > 0) {
                            var str = arr.join("");
                            tag = '*[' + str + ']';
                        } else {
                            tag = undefined;
                        }
                    } else if (type == 3) {
                        value.remove();
                    }
                } else {
                    tag = selector(content);
                }
                if (tag) tags.push(tag);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
  
        return tags.join(",");
    }
  
    return PureRead;
  
}());

// https://github.com/kenshin/puread
var puplugin = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var pangu_min = createCommonjsModule(function (module, exports) {
	  /*!
	   * pangu.js
	   * --------
	   * @version: 3.3.0
	   * @homepage: https://github.com/vinta/pangu.js
	   * @license: MIT
	   * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
	   */
	  !function (e, u) {
	    module.exports = u();
	  }(commonjsGlobal, function () {
	    return function (e) {
	      function u(a) {
	        if (f[a]) return f[a].exports;var t = f[a] = { exports: {}, id: a, loaded: !1 };return e[a].call(t.exports, t, t.exports, u), t.loaded = !0, t.exports;
	      }var f = {};return u.m = e, u.c = f, u.p = "", u(0);
	    }([function (e, u, f) {
	      function a(e, u) {
	        if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function");
	      }function t(e, u) {
	        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !u || "object" != (typeof u === 'undefined' ? 'undefined' : _typeof(u)) && "function" != typeof u ? e : u;
	      }function n(e, u) {
	        if ("function" != typeof u && null !== u) throw new TypeError("Super expression must either be null or a function, not " + (typeof u === 'undefined' ? 'undefined' : _typeof(u)));e.prototype = Object.create(u && u.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : e.__proto__ = u);
	      }var i = function () {
	        function e(e, u) {
	          for (var f = 0; f < u.length; f++) {
	            var a = u[f];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
	          }
	        }return function (u, f, a) {
	          return f && e(u.prototype, f), a && e(u, a), u;
	        };
	      }(),
	          r = f(1).Pangu,
	          o = 8,
	          s = function (e) {
	        function u() {
	          a(this, u);var e = t(this, Object.getPrototypeOf(u).call(this));return e.topTags = /^(html|head|body|#document)$/i, e.ignoreTags = /^(script|code|pre|textarea)$/i, e.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i, e.spaceLikeTags = /^(br|hr|i|img|pangu)$/i, e.blockTags = /^(div|h1|h2|h3|h4|h5|h6|p)$/i, e;
	        }return n(u, e), i(u, [{ key: "canIgnoreNode", value: function value(e) {
	            for (var u = e.parentNode; u && u.nodeName && u.nodeName.search(this.topTags) === -1;) {
	              if (u.nodeName.search(this.ignoreTags) >= 0 || u.isContentEditable || "true" === u.getAttribute("g_editable")) return !0;u = u.parentNode;
	            }return !1;
	          } }, { key: "isFirstTextChild", value: function value(e, u) {
	            for (var f = e.childNodes, a = 0; a < f.length; a++) {
	              var t = f[a];if (t.nodeType !== o && t.textContent) return t === u;
	            }return !1;
	          } }, { key: "isLastTextChild", value: function value(e, u) {
	            for (var f = e.childNodes, a = f.length - 1; a > -1; a--) {
	              var t = f[a];if (t.nodeType !== o && t.textContent) return t === u;
	            }return !1;
	          } }, { key: "spacingNodeByXPath", value: function value(e, u) {
	            for (var f = document.evaluate(e, u, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), a = void 0, t = void 0, n = f.snapshotLength - 1; n > -1; --n) {
	              if (a = f.snapshotItem(n), this.canIgnoreNode(a)) t = a;else {
	                var i = this.spacing(a.data);if (a.data !== i && (a.data = i), t) {
	                  if (a.nextSibling && a.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
	                    t = a;continue;
	                  }var r = a.data.toString().substr(-1) + t.data.toString().substr(0, 1),
	                      o = this.spacing(r);if (o !== r) {
	                    for (var s = t; s.parentNode && s.nodeName.search(this.spaceSensitiveTags) === -1 && this.isFirstTextChild(s.parentNode, s);) {
	                      s = s.parentNode;
	                    }for (var c = a; c.parentNode && c.nodeName.search(this.spaceSensitiveTags) === -1 && this.isLastTextChild(c.parentNode, c);) {
	                      c = c.parentNode;
	                    }if (c.nextSibling && c.nextSibling.nodeName.search(this.spaceLikeTags) >= 0) {
	                      t = a;continue;
	                    }if (c.nodeName.search(this.blockTags) === -1) if (s.nodeName.search(this.spaceSensitiveTags) === -1) s.nodeName.search(this.ignoreTags) === -1 && s.nodeName.search(this.blockTags) === -1 && (t.previousSibling ? t.previousSibling.nodeName.search(this.spaceLikeTags) === -1 && (t.data = " " + t.data) : this.canIgnoreNode(t) || (t.data = " " + t.data));else if (c.nodeName.search(this.spaceSensitiveTags) === -1) a.data = a.data + " ";else {
	                      var d = document.createElement("pangu");d.innerHTML = " ", s.previousSibling ? s.previousSibling.nodeName.search(this.spaceLikeTags) === -1 && s.parentNode.insertBefore(d, s) : s.parentNode.insertBefore(d, s), d.previousElementSibling || d.parentNode && d.parentNode.removeChild(d);
	                    }
	                  }
	                }t = a;
	              }
	            }
	          } }, { key: "spacingNode", value: function value(e) {
	            var u = ".//*/text()[normalize-space(.)]";this.spacingNodeByXPath(u, e);
	          } }, { key: "spacingElementById", value: function value(e) {
	            var u = 'id("' + e + '")//text()';this.spacingNodeByXPath(u, document);
	          } }, { key: "spacingElementByClassName", value: function value(e) {
	            var u = '//*[contains(concat(" ", normalize-space(@class), " "), "' + e + '")]//text()';this.spacingNodeByXPath(u, document);
	          } }, { key: "spacingElementByTagName", value: function value(e) {
	            var u = "//" + e + "//text()";this.spacingNodeByXPath(u, document);
	          } }, { key: "spacingPageTitle", value: function value() {
	            var e = "/html/head/title/text()";this.spacingNodeByXPath(e, document);
	          } }, { key: "spacingPageBody", value: function value() {
	            for (var e = "/html/body//*/text()[normalize-space(.)]", u = ["script", "style", "textarea"], f = 0; f < u.length; f++) {
	              var a = u[f];e += '[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="' + a + '"]';
	            }this.spacingNodeByXPath(e, document);
	          } }, { key: "spacingPage", value: function value() {
	            this.spacingPageTitle(), this.spacingPageBody();
	          } }]), u;
	      }(r),
	          c = new s();u = e.exports = c, u.Pangu = s;
	    }, function (e, u) {
	      function f(e, u) {
	        if (!(e instanceof u)) throw new TypeError("Cannot call a class as a function");
	      }var a = function () {
	        function e(e, u) {
	          for (var f = 0; f < u.length; f++) {
	            var a = u[f];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
	          }
	        }return function (u, f, a) {
	          return f && e(u.prototype, f), a && e(u, a), u;
	        };
	      }(),
	          t = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(["])/g,
	          n = /(["])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,
	          i = /(["']+)(\s*)(.+?)(\s*)(["']+)/g,
	          r = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])( )(')([A-Za-z])/g,
	          o = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#)([A-Za-z0-9\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]+)(#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,
	          s = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#([^ ]))/g,
	          c = /(([^ ])#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,
	          d = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\+\-\*\/=&\\|<>])([A-Za-z0-9])/g,
	          p = /([A-Za-z0-9])([\+\-\*\/=&\\|<>])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,
	          l = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c]+(.*?)[\)\]\}>\u201d]+)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,
	          g = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c>])/g,
	          h = /([\)\]\}>\u201d<])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,
	          v = /([\(\[\{<\u201c]+)(\s*)(.+?)(\s*)([\)\]\}>\u201d]+)/,
	          b = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([~!;:,\.\?\u2026])([A-Za-z0-9])/g,
	          y = /([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([A-Za-z0-9`\$%\^&\*\-=\+\\\|\/@\u00a1-\u00ff\u2022\u2027\u2150-\u218f])/g,
	          m = /([A-Za-z0-9`~\$%\^&\*\-=\+\\\|\/!;:,\.\?\u00a1-\u00ff\u2022\u2026\u2027\u2150-\u218f])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/g,
	          $ = function () {
	        function e() {
	          f(this, e);
	        }return a(e, [{ key: "spacing", value: function value(e) {
	            var u = e;u = u.replace(t, "$1 $2"), u = u.replace(n, "$1 $2"), u = u.replace(i, "$1$3$5"), u = u.replace(r, "$1$3$4"), u = u.replace(o, "$1 $2$3$4 $5"), u = u.replace(s, "$1 $2"), u = u.replace(c, "$1 $3"), u = u.replace(d, "$1 $2 $3"), u = u.replace(p, "$1 $2 $3");var f = u,
	                a = u.replace(l, "$1 $2 $4");return u = a, f === a && (u = u.replace(g, "$1 $2"), u = u.replace(h, "$1 $2")), u = u.replace(v, "$1$3$5"), u = u.replace(b, "$1$2 $3"), u = u.replace(y, "$1 $2"), u = u.replace(m, "$1 $2");
	          } }, { key: "spacingText", value: function value(e) {
	            var u = arguments.length <= 1 || void 0 === arguments[1] ? function () {} : arguments[1];try {
	              var f = this.spacing(e);u(null, f);
	            } catch (a) {
	              u(a);
	            }
	          } }]), e;
	      }(),
	          N = new $();u = e.exports = N, u.Pangu = $;
	    }]);
	  });
	  
	});
	var pangu_min_1 = pangu_min.pangu;

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	function resolve() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : '/';

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	}
	// path.normalize(path)
	// posix version
	function normalize(path) {
	  var isPathAbsolute = isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isPathAbsolute).join('/');

	  if (!path && !isPathAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isPathAbsolute ? '/' : '') + path;
	}
	// posix version
	function isAbsolute(path) {
	  return path.charAt(0) === '/';
	}

	// posix version
	function join() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	}


	// path.relative(from, to)
	// posix version
	function relative(from, to) {
	  from = resolve(from).substr(1);
	  to = resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	}

	var sep = '/';
	var delimiter = ':';

	function dirname(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	}

	function basename(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	}


	function extname(path) {
	  return splitPath(path)[3];
	}
	var path = {
	  extname: extname,
	  basename: basename,
	  dirname: dirname,
	  sep: sep,
	  delimiter: delimiter,
	  relative: relative,
	  join: join,
	  isAbsolute: isAbsolute,
	  normalize: normalize,
	  resolve: resolve
	};
	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b' ?
	    function (str, start, len) { return str.substr(start, len) } :
	    function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	var path$1 = /*#__PURE__*/Object.freeze({
		resolve: resolve,
		normalize: normalize,
		isAbsolute: isAbsolute,
		join: join,
		relative: relative,
		sep: sep,
		delimiter: delimiter,
		dirname: dirname,
		basename: basename,
		extname: extname,
		default: path
	});

	var concatMap = function (xs, fn) {
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        var x = fn(xs[i], i);
	        if (isArray(x)) res.push.apply(res, x);
	        else res.push(x);
	    }
	    return res;
	};

	var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};

	var balancedMatch = balanced;
	function balanced(a, b, str) {
	  if (a instanceof RegExp) a = maybeMatch(a, str);
	  if (b instanceof RegExp) b = maybeMatch(b, str);

	  var r = range(a, b, str);

	  return r && {
	    start: r[0],
	    end: r[1],
	    pre: str.slice(0, r[0]),
	    body: str.slice(r[0] + a.length, r[1]),
	    post: str.slice(r[1] + b.length)
	  };
	}

	function maybeMatch(reg, str) {
	  var m = str.match(reg);
	  return m ? m[0] : null;
	}

	balanced.range = range;
	function range(a, b, str) {
	  var begs, beg, left, right, result;
	  var ai = str.indexOf(a);
	  var bi = str.indexOf(b, ai + 1);
	  var i = ai;

	  if (ai >= 0 && bi > 0) {
	    begs = [];
	    left = str.length;

	    while (i >= 0 && !result) {
	      if (i == ai) {
	        begs.push(i);
	        ai = str.indexOf(a, i + 1);
	      } else if (begs.length == 1) {
	        result = [ begs.pop(), bi ];
	      } else {
	        beg = begs.pop();
	        if (beg < left) {
	          left = beg;
	          right = bi;
	        }

	        bi = str.indexOf(b, i + 1);
	      }

	      i = ai < bi && ai >= 0 ? ai : bi;
	    }

	    if (begs.length) {
	      result = [ left, right ];
	    }
	  }

	  return result;
	}

	var braceExpansion = expandTop;

	var escSlash = '\0SLASH'+Math.random()+'\0';
	var escOpen = '\0OPEN'+Math.random()+'\0';
	var escClose = '\0CLOSE'+Math.random()+'\0';
	var escComma = '\0COMMA'+Math.random()+'\0';
	var escPeriod = '\0PERIOD'+Math.random()+'\0';

	function numeric(str) {
	  return parseInt(str, 10) == str
	    ? parseInt(str, 10)
	    : str.charCodeAt(0);
	}

	function escapeBraces(str) {
	  return str.split('\\\\').join(escSlash)
	            .split('\\{').join(escOpen)
	            .split('\\}').join(escClose)
	            .split('\\,').join(escComma)
	            .split('\\.').join(escPeriod);
	}

	function unescapeBraces(str) {
	  return str.split(escSlash).join('\\')
	            .split(escOpen).join('{')
	            .split(escClose).join('}')
	            .split(escComma).join(',')
	            .split(escPeriod).join('.');
	}


	// Basically just str.split(","), but handling cases
	// where we have nested braced sections, which should be
	// treated as individual members, like {a,{b,c},d}
	function parseCommaParts(str) {
	  if (!str)
	    return [''];

	  var parts = [];
	  var m = balancedMatch('{', '}', str);

	  if (!m)
	    return str.split(',');

	  var pre = m.pre;
	  var body = m.body;
	  var post = m.post;
	  var p = pre.split(',');

	  p[p.length-1] += '{' + body + '}';
	  var postParts = parseCommaParts(post);
	  if (post.length) {
	    p[p.length-1] += postParts.shift();
	    p.push.apply(p, postParts);
	  }

	  parts.push.apply(parts, p);

	  return parts;
	}

	function expandTop(str) {
	  if (!str)
	    return [];

	  // I don't know why Bash 4.3 does this, but it does.
	  // Anything starting with {} will have the first two bytes preserved
	  // but *only* at the top level, so {},a}b will not expand to anything,
	  // but a{},b}c will be expanded to [a}c,abc].
	  // One could argue that this is a bug in Bash, but since the goal of
	  // this module is to match Bash's rules, we escape a leading {}
	  if (str.substr(0, 2) === '{}') {
	    str = '\\{\\}' + str.substr(2);
	  }

	  return expand(escapeBraces(str), true).map(unescapeBraces);
	}

	function embrace(str) {
	  return '{' + str + '}';
	}
	function isPadded(el) {
	  return /^-?0\d/.test(el);
	}

	function lte(i, y) {
	  return i <= y;
	}
	function gte(i, y) {
	  return i >= y;
	}

	function expand(str, isTop) {
	  var expansions = [];

	  var m = balancedMatch('{', '}', str);
	  if (!m || /\$$/.test(m.pre)) return [str];

	  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
	  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
	  var isSequence = isNumericSequence || isAlphaSequence;
	  var isOptions = m.body.indexOf(',') >= 0;
	  if (!isSequence && !isOptions) {
	    // {a},b}
	    if (m.post.match(/,.*\}/)) {
	      str = m.pre + '{' + m.body + escClose + m.post;
	      return expand(str);
	    }
	    return [str];
	  }

	  var n;
	  if (isSequence) {
	    n = m.body.split(/\.\./);
	  } else {
	    n = parseCommaParts(m.body);
	    if (n.length === 1) {
	      // x{{a,b}}y ==> x{a}y x{b}y
	      n = expand(n[0], false).map(embrace);
	      if (n.length === 1) {
	        var post = m.post.length
	          ? expand(m.post, false)
	          : [''];
	        return post.map(function(p) {
	          return m.pre + n[0] + p;
	        });
	      }
	    }
	  }

	  // at this point, n is the parts, and we know it's not a comma set
	  // with a single entry.

	  // no need to expand pre, since it is guaranteed to be free of brace-sets
	  var pre = m.pre;
	  var post = m.post.length
	    ? expand(m.post, false)
	    : [''];

	  var N;

	  if (isSequence) {
	    var x = numeric(n[0]);
	    var y = numeric(n[1]);
	    var width = Math.max(n[0].length, n[1].length);
	    var incr = n.length == 3
	      ? Math.abs(numeric(n[2]))
	      : 1;
	    var test = lte;
	    var reverse = y < x;
	    if (reverse) {
	      incr *= -1;
	      test = gte;
	    }
	    var pad = n.some(isPadded);

	    N = [];

	    for (var i = x; test(i, y); i += incr) {
	      var c;
	      if (isAlphaSequence) {
	        c = String.fromCharCode(i);
	        if (c === '\\')
	          c = '';
	      } else {
	        c = String(i);
	        if (pad) {
	          var need = width - c.length;
	          if (need > 0) {
	            var z = new Array(need + 1).join('0');
	            if (i < 0)
	              c = '-' + z + c.slice(1);
	            else
	              c = z + c;
	          }
	        }
	      }
	      N.push(c);
	    }
	  } else {
	    N = concatMap(n, function(el) { return expand(el, false) });
	  }

	  for (var j = 0; j < N.length; j++) {
	    for (var k = 0; k < post.length; k++) {
	      var expansion = pre + N[j] + post[k];
	      if (!isTop || isSequence || expansion)
	        expansions.push(expansion);
	    }
	  }

	  return expansions;
	}

	var require$$0 = ( path$1 && path ) || path$1;

	var minimatch_1 = minimatch;
	minimatch.Minimatch = Minimatch;

	var path$2 = { sep: '/' };
	try {
	  path$2 = require$$0;
	} catch (er) {}

	var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {};

	var plTypes = {
	  '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
	  '?': { open: '(?:', close: ')?' },
	  '+': { open: '(?:', close: ')+' },
	  '*': { open: '(?:', close: ')*' },
	  '@': { open: '(?:', close: ')' }

	  // any single thing other than /
	  // don't need to escape / when using new RegExp()
	};var qmark = '[^/]';

	// * => any number of characters
	var star = qmark + '*?';

	// ** when dots are allowed.  Anything goes, except .. and .
	// not (^ or / followed by one or two dots followed by $ or /),
	// followed by anything, any number of times.
	var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';

	// not a ^ or / followed by a dot,
	// followed by anything, any number of times.
	var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';

	// characters that need to be escaped in RegExp.
	var reSpecials = charSet('().*{}+?[]^$\\!');

	// "abc" -> { a:true, b:true, c:true }
	function charSet(s) {
	  return s.split('').reduce(function (set, c) {
	    set[c] = true;
	    return set;
	  }, {});
	}

	// normalizes slashes.
	var slashSplit = /\/+/;

	minimatch.filter = filter$1;
	function filter$1(pattern, options) {
	  options = options || {};
	  return function (p, i, list) {
	    return minimatch(p, pattern, options);
	  };
	}

	function ext(a, b) {
	  a = a || {};
	  b = b || {};
	  var t = {};
	  Object.keys(b).forEach(function (k) {
	    t[k] = b[k];
	  });
	  Object.keys(a).forEach(function (k) {
	    t[k] = a[k];
	  });
	  return t;
	}

	minimatch.defaults = function (def) {
	  if (!def || !Object.keys(def).length) return minimatch;

	  var orig = minimatch;

	  var m = function minimatch(p, pattern, options) {
	    return orig.minimatch(p, pattern, ext(def, options));
	  };

	  m.Minimatch = function Minimatch(pattern, options) {
	    return new orig.Minimatch(pattern, ext(def, options));
	  };

	  return m;
	};

	Minimatch.defaults = function (def) {
	  if (!def || !Object.keys(def).length) return Minimatch;
	  return minimatch.defaults(def).Minimatch;
	};

	function minimatch(p, pattern, options) {
	  if (typeof pattern !== 'string') {
	    throw new TypeError('glob pattern string required');
	  }

	  if (!options) options = {};

	  // shortcut: comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    return false;
	  }

	  // "" only matches ""
	  if (pattern.trim() === '') return p === '';

	  return new Minimatch(pattern, options).match(p);
	}

	function Minimatch(pattern, options) {
	  if (!(this instanceof Minimatch)) {
	    return new Minimatch(pattern, options);
	  }

	  if (typeof pattern !== 'string') {
	    throw new TypeError('glob pattern string required');
	  }

	  if (!options) options = {};
	  pattern = pattern.trim();

	  // windows support: need to use /, not \
	  if (path$2.sep !== '/') {
	    pattern = pattern.split(path$2.sep).join('/');
	  }

	  this.options = options;
	  this.set = [];
	  this.pattern = pattern;
	  this.regexp = null;
	  this.negate = false;
	  this.comment = false;
	  this.empty = false;

	  // make the set of regexps etc.
	  this.make();
	}

	Minimatch.prototype.debug = function () {};

	Minimatch.prototype.make = make;
	function make() {
	  // don't do it more than once.
	  if (this._made) return;

	  var pattern = this.pattern;
	  var options = this.options;

	  // empty patterns and comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    this.comment = true;
	    return;
	  }
	  if (!pattern) {
	    this.empty = true;
	    return;
	  }

	  // step 1: figure out negation, etc.
	  this.parseNegate();

	  // step 2: expand braces
	  var set = this.globSet = this.braceExpand();

	  if (options.debug) this.debug = console.error;

	  this.debug(this.pattern, set);

	  // step 3: now we have a set, so turn each one into a series of path-portion
	  // matching patterns.
	  // These will be regexps, except in the case of "**", which is
	  // set to the GLOBSTAR object for globstar behavior,
	  // and will not contain any / characters
	  set = this.globParts = set.map(function (s) {
	    return s.split(slashSplit);
	  });

	  this.debug(this.pattern, set);

	  // glob --> regexps
	  set = set.map(function (s, si, set) {
	    return s.map(this.parse, this);
	  }, this);

	  this.debug(this.pattern, set);

	  // filter out everything that didn't compile properly.
	  set = set.filter(function (s) {
	    return s.indexOf(false) === -1;
	  });

	  this.debug(this.pattern, set);

	  this.set = set;
	}

	Minimatch.prototype.parseNegate = parseNegate;
	function parseNegate() {
	  var pattern = this.pattern;
	  var negate = false;
	  var options = this.options;
	  var negateOffset = 0;

	  if (options.nonegate) return;

	  for (var i = 0, l = pattern.length; i < l && pattern.charAt(i) === '!'; i++) {
	    negate = !negate;
	    negateOffset++;
	  }

	  if (negateOffset) this.pattern = pattern.substr(negateOffset);
	  this.negate = negate;
	}

	// Brace expansion:
	// a{b,c}d -> abd acd
	// a{b,}c -> abc ac
	// a{0..3}d -> a0d a1d a2d a3d
	// a{b,c{d,e}f}g -> abg acdfg acefg
	// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
	//
	// Invalid sets are not expanded.
	// a{2..}b -> a{2..}b
	// a{b}c -> a{b}c
	minimatch.braceExpand = function (pattern, options) {
	  return braceExpand(pattern, options);
	};

	Minimatch.prototype.braceExpand = braceExpand;

	function braceExpand(pattern, options) {
	  if (!options) {
	    if (this instanceof Minimatch) {
	      options = this.options;
	    } else {
	      options = {};
	    }
	  }

	  pattern = typeof pattern === 'undefined' ? this.pattern : pattern;

	  if (typeof pattern === 'undefined') {
	    throw new TypeError('undefined pattern');
	  }

	  if (options.nobrace || !pattern.match(/\{.*\}/)) {
	    // shortcut. no need to expand.
	    return [pattern];
	  }

	  return braceExpansion(pattern);
	}

	// parse a component of the expanded set.
	// At this point, no pattern may contain "/" in it
	// so we're going to return a 2d array, where each entry is the full
	// pattern, split on '/', and then turned into a regular expression.
	// A regexp is made at the end which joins each array with an
	// escaped /, and another full one which joins each regexp with |.
	//
	// Following the lead of Bash 4.1, note that "**" only has special meaning
	// when it is the *only* thing in a path portion.  Otherwise, any series
	// of * is equivalent to a single *.  Globstar behavior is enabled by
	// default, and can be disabled by setting options.noglobstar.
	Minimatch.prototype.parse = parse;
	var SUBPARSE = {};
	function parse(pattern, isSub) {
	  if (pattern.length > 1024 * 64) {
	    throw new TypeError('pattern is too long');
	  }

	  var options = this.options;

	  // shortcuts
	  if (!options.noglobstar && pattern === '**') return GLOBSTAR;
	  if (pattern === '') return '';

	  var re = '';
	  var hasMagic = !!options.nocase;
	  var escaping = false;
	  // ? => one single character
	  var patternListStack = [];
	  var negativeLists = [];
	  var stateChar;
	  var inClass = false;
	  var reClassStart = -1;
	  var classStart = -1;
	  // . and .. never match anything that doesn't start with .,
	  // even when options.dot is set.
	  var patternStart = pattern.charAt(0) === '.' ? '' // anything
	  // not (start or / followed by . or .. followed by / or end)
	  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))' : '(?!\\.)';
	  var self = this;

	  function clearStateChar() {
	    if (stateChar) {
	      // we had some state-tracking character
	      // that wasn't consumed by this pass.
	      switch (stateChar) {
	        case '*':
	          re += star;
	          hasMagic = true;
	          break;
	        case '?':
	          re += qmark;
	          hasMagic = true;
	          break;
	        default:
	          re += '\\' + stateChar;
	          break;
	      }
	      self.debug('clearStateChar %j %j', stateChar, re);
	      stateChar = false;
	    }
	  }

	  for (var i = 0, len = pattern.length, c; i < len && (c = pattern.charAt(i)); i++) {
	    this.debug('%s\t%s %s %j', pattern, i, re, c);

	    // skip over any that are escaped.
	    if (escaping && reSpecials[c]) {
	      re += '\\' + c;
	      escaping = false;
	      continue;
	    }

	    switch (c) {
	      case '/':
	        // completely not allowed, even escaped.
	        // Should already be path-split by now.
	        return false;

	      case '\\':
	        clearStateChar();
	        escaping = true;
	        continue;

	      // the various stateChar values
	      // for the "extglob" stuff.
	      case '?':
	      case '*':
	      case '+':
	      case '@':
	      case '!':
	        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);

	        // all of those are literals inside a class, except that
	        // the glob [!a] means [^a] in regexp
	        if (inClass) {
	          this.debug('  in class');
	          if (c === '!' && i === classStart + 1) c = '^';
	          re += c;
	          continue;
	        }

	        // if we already have a stateChar, then it means
	        // that there was something like ** or +? in there.
	        // Handle the stateChar, then proceed with this one.
	        self.debug('call clearStateChar %j', stateChar);
	        clearStateChar();
	        stateChar = c;
	        // if extglob is disabled, then +(asdf|foo) isn't a thing.
	        // just clear the statechar *now*, rather than even diving into
	        // the patternList stuff.
	        if (options.noext) clearStateChar();
	        continue;

	      case '(':
	        if (inClass) {
	          re += '(';
	          continue;
	        }

	        if (!stateChar) {
	          re += '\\(';
	          continue;
	        }

	        patternListStack.push({
	          type: stateChar,
	          start: i - 1,
	          reStart: re.length,
	          open: plTypes[stateChar].open,
	          close: plTypes[stateChar].close
	        });
	        // negation is (?:(?!js)[^/]*)
	        re += stateChar === '!' ? '(?:(?!(?:' : '(?:';
	        this.debug('plType %j %j', stateChar, re);
	        stateChar = false;
	        continue;

	      case ')':
	        if (inClass || !patternListStack.length) {
	          re += '\\)';
	          continue;
	        }

	        clearStateChar();
	        hasMagic = true;
	        var pl = patternListStack.pop();
	        // negation is (?:(?!js)[^/]*)
	        // The others are (?:<pattern>)<type>
	        re += pl.close;
	        if (pl.type === '!') {
	          negativeLists.push(pl);
	        }
	        pl.reEnd = re.length;
	        continue;

	      case '|':
	        if (inClass || !patternListStack.length || escaping) {
	          re += '\\|';
	          escaping = false;
	          continue;
	        }

	        clearStateChar();
	        re += '|';
	        continue;

	      // these are mostly the same in regexp and glob
	      case '[':
	        // swallow any state-tracking char before the [
	        clearStateChar();

	        if (inClass) {
	          re += '\\' + c;
	          continue;
	        }

	        inClass = true;
	        classStart = i;
	        reClassStart = re.length;
	        re += c;
	        continue;

	      case ']':
	        //  a right bracket shall lose its special
	        //  meaning and represent itself in
	        //  a bracket expression if it occurs
	        //  first in the list.  -- POSIX.2 2.8.3.2
	        if (i === classStart + 1 || !inClass) {
	          re += '\\' + c;
	          escaping = false;
	          continue;
	        }

	        // handle the case where we left a class open.
	        // "[z-a]" is valid, equivalent to "\[z-a\]"
	        if (inClass) {
	          // split where the last [ was, make sure we don't have
	          // an invalid re. if so, re-walk the contents of the
	          // would-be class to re-translate any characters that
	          // were passed through as-is
	          // TODO: It would probably be faster to determine this
	          // without a try/catch and a new RegExp, but it's tricky
	          // to do safely.  For now, this is safe and works.
	          var cs = pattern.substring(classStart + 1, i);
	          try {
	          } catch (er) {
	            // not a valid class!
	            var sp = this.parse(cs, SUBPARSE);
	            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]';
	            hasMagic = hasMagic || sp[1];
	            inClass = false;
	            continue;
	          }
	        }

	        // finish up the class.
	        hasMagic = true;
	        inClass = false;
	        re += c;
	        continue;

	      default:
	        // swallow any state char that wasn't consumed
	        clearStateChar();

	        if (escaping) {
	          // no need
	          escaping = false;
	        } else if (reSpecials[c] && !(c === '^' && inClass)) {
	          re += '\\';
	        }

	        re += c;

	    } // switch
	  } // for

	  // handle the case where we left a class open.
	  // "[abc" is valid, equivalent to "\[abc"
	  if (inClass) {
	    // split where the last [ was, and escape it
	    // this is a huge pita.  We now have to re-walk
	    // the contents of the would-be class to re-translate
	    // any characters that were passed through as-is
	    cs = pattern.substr(classStart + 1);
	    sp = this.parse(cs, SUBPARSE);
	    re = re.substr(0, reClassStart) + '\\[' + sp[0];
	    hasMagic = hasMagic || sp[1];
	  }

	  // handle the case where we had a +( thing at the *end*
	  // of the pattern.
	  // each pattern list stack adds 3 chars, and we need to go through
	  // and escape any | chars that were passed through as-is for the regexp.
	  // Go through and escape them, taking care not to double-escape any
	  // | chars that were already escaped.
	  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
	    var tail = re.slice(pl.reStart + pl.open.length);
	    this.debug('setting tail', re, pl);
	    // maybe some even number of \, then maybe 1 \, followed by a |
	    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
	      if (!$2) {
	        // the | isn't already escaped, so escape it.
	        $2 = '\\';
	      }

	      // need to escape all those slashes *again*, without escaping the
	      // one that we need for escaping the | character.  As it works out,
	      // escaping an even number of slashes can be done by simply repeating
	      // it exactly after itself.  That's why this trick works.
	      //
	      // I am sorry that you have to see this.
	      return $1 + $1 + $2 + '|';
	    });

	    this.debug('tail=%j\n   %s', tail, tail, pl, re);
	    var t = pl.type === '*' ? star : pl.type === '?' ? qmark : '\\' + pl.type;

	    hasMagic = true;
	    re = re.slice(0, pl.reStart) + t + '\\(' + tail;
	  }

	  // handle trailing things that only matter at the very end.
	  clearStateChar();
	  if (escaping) {
	    // trailing \\
	    re += '\\\\';
	  }

	  // only need to apply the nodot start if the re starts with
	  // something that could conceivably capture a dot
	  var addPatternStart = false;
	  switch (re.charAt(0)) {
	    case '.':
	    case '[':
	    case '(':
	      addPatternStart = true;
	  }

	  // Hack to work around lack of negative lookbehind in JS
	  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
	  // like 'a.xyz.yz' doesn't match.  So, the first negative
	  // lookahead, has to look ALL the way ahead, to the end of
	  // the pattern.
	  for (var n = negativeLists.length - 1; n > -1; n--) {
	    var nl = negativeLists[n];

	    var nlBefore = re.slice(0, nl.reStart);
	    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
	    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd);
	    var nlAfter = re.slice(nl.reEnd);

	    nlLast += nlAfter;

	    // Handle nested stuff like *(*.js|!(*.json)), where open parens
	    // mean that we should *not* include the ) in the bit that is considered
	    // "after" the negated section.
	    var openParensBefore = nlBefore.split('(').length - 1;
	    var cleanAfter = nlAfter;
	    for (i = 0; i < openParensBefore; i++) {
	      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
	    }
	    nlAfter = cleanAfter;

	    var dollar = '';
	    if (nlAfter === '' && isSub !== SUBPARSE) {
	      dollar = '$';
	    }
	    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast;
	    re = newRe;
	  }

	  // if the re is not "" at this point, then we need to make sure
	  // it doesn't match against an empty path part.
	  // Otherwise a/* will match a/, which it should not.
	  if (re !== '' && hasMagic) {
	    re = '(?=.)' + re;
	  }

	  if (addPatternStart) {
	    re = patternStart + re;
	  }

	  // parsing just a piece of a larger pattern.
	  if (isSub === SUBPARSE) {
	    return [re, hasMagic];
	  }

	  // skip the regexp for non-magical patterns
	  // unescape anything in it, though, so that it'll be
	  // an exact match against a file etc.
	  if (!hasMagic) {
	    return globUnescape(pattern);
	  }

	  var flags = options.nocase ? 'i' : '';
	  try {
	    var regExp = new RegExp('^' + re + '$', flags);
	  } catch (er) {
	    // If it was an invalid regular expression, then it can't match
	    // anything.  This trick looks for a character after the end of
	    // the string, which is of course impossible, except in multi-line
	    // mode, but it's not a /m regex.
	    return new RegExp('$.');
	  }

	  regExp._glob = pattern;
	  regExp._src = re;

	  return regExp;
	}

	minimatch.makeRe = function (pattern, options) {
	  return new Minimatch(pattern, options || {}).makeRe();
	};

	Minimatch.prototype.makeRe = makeRe;
	function makeRe() {
	  if (this.regexp || this.regexp === false) return this.regexp;

	  // at this point, this.set is a 2d array of partial
	  // pattern strings, or "**".
	  //
	  // It's better to use .match().  This function shouldn't
	  // be used, really, but it's pretty convenient sometimes,
	  // when you just want to work with a regex.
	  var set = this.set;

	  if (!set.length) {
	    this.regexp = false;
	    return this.regexp;
	  }
	  var options = this.options;

	  var twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
	  var flags = options.nocase ? 'i' : '';

	  var re = set.map(function (pattern) {
	    return pattern.map(function (p) {
	      return p === GLOBSTAR ? twoStar : typeof p === 'string' ? regExpEscape(p) : p._src;
	    }).join('\\\/');
	  }).join('|');

	  // must match entire pattern
	  // ending in a * or ** will make it less strict.
	  re = '^(?:' + re + ')$';

	  // can match anything, as long as it's not this.
	  if (this.negate) re = '^(?!' + re + ').*$';

	  try {
	    this.regexp = new RegExp(re, flags);
	  } catch (ex) {
	    this.regexp = false;
	  }
	  return this.regexp;
	}

	minimatch.match = function (list, pattern, options) {
	  options = options || {};
	  var mm = new Minimatch(pattern, options);
	  list = list.filter(function (f) {
	    return mm.match(f);
	  });
	  if (mm.options.nonull && !list.length) {
	    list.push(pattern);
	  }
	  return list;
	};

	Minimatch.prototype.match = match;
	function match(f, partial) {
	  this.debug('match', f, this.pattern);
	  // short-circuit in the case of busted things.
	  // comments, etc.
	  if (this.comment) return false;
	  if (this.empty) return f === '';

	  if (f === '/' && partial) return true;

	  var options = this.options;

	  // windows: need to use /, not \
	  if (path$2.sep !== '/') {
	    f = f.split(path$2.sep).join('/');
	  }

	  // treat the test path as a set of pathparts.
	  f = f.split(slashSplit);
	  this.debug(this.pattern, 'split', f);

	  // just ONE of the pattern sets in this.set needs to match
	  // in order for it to be valid.  If negating, then just one
	  // match means that we have failed.
	  // Either way, return on the first hit.

	  var set = this.set;
	  this.debug(this.pattern, 'set', set);

	  // Find the basename of the path by looking for the last non-empty segment
	  var filename;
	  var i;
	  for (i = f.length - 1; i >= 0; i--) {
	    filename = f[i];
	    if (filename) break;
	  }

	  for (i = 0; i < set.length; i++) {
	    var pattern = set[i];
	    var file = f;
	    if (options.matchBase && pattern.length === 1) {
	      file = [filename];
	    }
	    var hit = this.matchOne(file, pattern, partial);
	    if (hit) {
	      if (options.flipNegate) return true;
	      return !this.negate;
	    }
	  }

	  // didn't get any hits.  this is success if it's a negative
	  // pattern, failure otherwise.
	  if (options.flipNegate) return false;
	  return this.negate;
	}

	// set partial to true to test if, for example,
	// "/a/b" matches the start of "/*/b/*/d"
	// Partial means, if you run out of file before you run
	// out of pattern, then that's fine, as long as all
	// the parts match.
	Minimatch.prototype.matchOne = function (file, pattern, partial) {
	  var options = this.options;

	  this.debug('matchOne', { 'this': this, file: file, pattern: pattern });

	  this.debug('matchOne', file.length, pattern.length);

	  for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
	    this.debug('matchOne loop');
	    var p = pattern[pi];
	    var f = file[fi];

	    this.debug(pattern, p, f);

	    // should be impossible.
	    // some invalid regexp stuff in the set.
	    if (p === false) return false;

	    if (p === GLOBSTAR) {
	      this.debug('GLOBSTAR', [pattern, p, f]);

	      // "**"
	      // a/**/b/**/c would match the following:
	      // a/b/x/y/z/c
	      // a/x/y/z/b/c
	      // a/b/x/b/x/c
	      // a/b/c
	      // To do this, take the rest of the pattern after
	      // the **, and see if it would match the file remainder.
	      // If so, return success.
	      // If not, the ** "swallows" a segment, and try again.
	      // This is recursively awful.
	      //
	      // a/**/b/**/c matching a/b/x/y/z/c
	      // - a matches a
	      // - doublestar
	      //   - matchOne(b/x/y/z/c, b/**/c)
	      //     - b matches b
	      //     - doublestar
	      //       - matchOne(x/y/z/c, c) -> no
	      //       - matchOne(y/z/c, c) -> no
	      //       - matchOne(z/c, c) -> no
	      //       - matchOne(c, c) yes, hit
	      var fr = fi;
	      var pr = pi + 1;
	      if (pr === pl) {
	        this.debug('** at the end');
	        // a ** at the end will just swallow the rest.
	        // We have found a match.
	        // however, it will not swallow /.x, unless
	        // options.dot is set.
	        // . and .. are *never* matched by **, for explosively
	        // exponential reasons.
	        for (; fi < fl; fi++) {
	          if (file[fi] === '.' || file[fi] === '..' || !options.dot && file[fi].charAt(0) === '.') return false;
	        }
	        return true;
	      }

	      // ok, let's see if we can swallow whatever we can.
	      while (fr < fl) {
	        var swallowee = file[fr];

	        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);

	        // XXX remove this slice.  Just pass the start index.
	        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
	          this.debug('globstar found match!', fr, fl, swallowee);
	          // found a match.
	          return true;
	        } else {
	          // can't swallow "." or ".." ever.
	          // can only swallow ".foo" when explicitly asked.
	          if (swallowee === '.' || swallowee === '..' || !options.dot && swallowee.charAt(0) === '.') {
	            this.debug('dot detected!', file, fr, pattern, pr);
	            break;
	          }

	          // ** swallows a segment, and continue.
	          this.debug('globstar swallow a segment, and continue');
	          fr++;
	        }
	      }

	      // no match was found.
	      // However, in partial mode, we can't say this is necessarily over.
	      // If there's more *pattern* left, then
	      if (partial) {
	        // ran out of file
	        this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
	        if (fr === fl) return true;
	      }
	      return false;
	    }

	    // something other than **
	    // non-magic patterns just have to match exactly
	    // patterns with magic have been turned into regexps.
	    var hit;
	    if (typeof p === 'string') {
	      if (options.nocase) {
	        hit = f.toLowerCase() === p.toLowerCase();
	      } else {
	        hit = f === p;
	      }
	      this.debug('string match', p, f, hit);
	    } else {
	      hit = f.match(p);
	      this.debug('pattern match', p, f, hit);
	    }

	    if (!hit) return false;
	  }

	  // Note: ending in / means that we'll get a final ""
	  // at the end of the pattern.  This can only match a
	  // corresponding "" at the end of the file.
	  // If the file ends in /, then it can only match a
	  // a pattern that ends in /, unless the pattern just
	  // doesn't have any more for it. But, a/b/ should *not*
	  // match "a/b/*", even though "" matches against the
	  // [^/]*? pattern, except in partial mode, where it might
	  // simply not be reached yet.
	  // However, a/b/ should still satisfy a/*

	  // now either we fell off the end of the pattern, or we're done.
	  if (fi === fl && pi === pl) {
	    // ran out of pattern and filename at the same time.
	    // an exact hit!
	    return true;
	  } else if (fi === fl) {
	    // ran out of file, but still had pattern left.
	    // this is ok if we're doing the match as part of
	    // a glob fs traversal.
	    return partial;
	  } else if (pi === pl) {
	    // ran out of pattern, still have file left.
	    // this is only acceptable if we're on the very last
	    // empty segment of a file with a trailing slash.
	    // a/* should match a/b/
	    var emptyFileEnd = fi === fl - 1 && file[fi] === '';
	    return emptyFileEnd;
	  }

	  // should be unreachable.
	  throw new Error('wtf?');
	};

	// replace stuff like \* with *
	function globUnescape(s) {
	  return s.replace(/\\(.)/g, '$1');
	}

	function regExpEscape(s) {
	  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}

	console.log("=== PureRead: Beautify load ===");

	/**
	 * Beautify html
	 * 
	 * @param {string} storage.current.site.name
	 */
	function specbeautify(name, $target) {
	    switch (name) {
	        case "sspai.com":
	            //TO-DO
	            $target.find(".relation-apps").remove();
	            $target.find(".ss-app-card").remove();
	            break;
	        case "post.smzdm.com":
	            $target.find("img.face").addClass("sr-rd-content-nobeautify");
	            $target.find(".insert-outer img").addClass("sr-rd-content-nobeautify");
	            break;
	        case "infoq.com":
	            $target.find("img").map(function (index, item) {
	                if ($(item).css("float") == "left") {
	                    $(item).addClass("sr-rd-content-nobeautify");
	                }
	            });
	            $target.find("script").remove();
	            break;
	        case "appinn.com":
	            $target.find(".emoji").addClass("sr-rd-content-nobeautify");
	            break;
	        case "hacpai.com":
	            $target.find(".emoji").addClass("sr-rd-content-nobeautify");
	            break;
	        case "douban.com":
	            $target.find(".review-content").children().unwrap();
	            $target.find("table").addClass("sr-rd-content-center");
	            $target.find("p").css({ "white-space": "pre-wrap" });
	            $target.find(".cc").removeClass();
	            break;
	        case "qdaily.com":
	            $target.find("img").map(function (index, item) {
	                var $target = $(item),
	                    height = Number.parseInt($target.css("height"));
	                if (height == 0) $target.remove();
	            });
	            $target.find(".com-insert-images").map(function (index, item) {
	                var $target = $(item),
	                    imgs = $target.find("img").map(function (index, item) {
	                    return "<div>" + item.outerHTML + "</div>";
	                }),
	                    str = imgs.get().join("");
	                $target.empty().removeAttr("class").append(str);
	            });
	            $target.find(".com-insert-embed").remove();
	            break;
	        case "news.mtime.com":
	            $target.find(".newspictool").map(function (index, item) {
	                var $target = $(item),
	                    $img = $target.find("img"),
	                    $label = $target.find("p:last");
	                $target.removeAttr("class").addClass("sr-rd-content-center").empty().append($img).append($label);
	            });
	            break;
	        case "blog.csdn.net":
	            $target.find(".save_code").remove();
	            $target.find(".pre-numbering").remove();
	            $target.find("pre").removeAttr("style").removeAttr("class");
	            $target.find("code").removeAttr("style");
	            $target.find(".dp-highlighter").map(function (index, item) {
	                $(item).find(".bar .tools").remove();
	                if ($(item).next().is("pre")) $(item).next().remove();
	            });
	            break;
	        case "news.sohu.com":
	            $target.find(".conserve-photo").remove();
	            $target.find("table").addClass("sr-rd-content-center");
	            break;
	        case "qq.com":
	            $target.find(".rv-root-v2, #backqqcom").remove();
	            break;
	        case "azofreeware.com":
	            $target.find("iframe").remove();
	            break;
	        case "apprcn.com":
	            $target.find("img").map(function (index, item) {
	                var $target = $(item),
	                    src = $target.attr("src");
	                if (src && src.includes("Apprcn_Wechat_Small.jpeg")) $target.parent().remove();
	            });
	            $target.find("a").map(function (index, item) {
	                var $target = $(item),
	                    text = $target.text();
	                if (text == "来自反斗软件") $target.parent().remove();
	            });
	            break;
	        case "tieba.baidu.com":
	            $target.find(".BDE_Smiley").addClass("sr-rd-content-nobeautify");
	            $target.find(".replace_div").removeAttr("class").removeAttr("style");
	            $target.find(".replace_tip").remove();
	            $target.find(".d_post_content, .j_d_post_content, .post_bubble_top, .post_bubble_middle, .post_bubble_bottom").map(function (idx, target) {
	                $(target).removeAttr("class").removeAttr("style");
	            });
	            $("body").find(".p_author_face").map(function (idx, target) {
	                var $target = $(target).find("img"),
	                    src = $target.attr("data-tb-lazyload"),
	                    name = $target.attr("username");
	                src && $("sr-rd-mult-avatar").find("span").map(function (idx, span) {
	                    var $span = $(span),
	                        text = $span.text();
	                    if (text == name) {
	                        $span.parent().find("img").attr("src", src);
	                    }
	                });
	            });
	            break;
	        case "jingyan.baidu.com":
	            $target.find(".exp-image-wraper").removeAttr("class").removeAttr("href");
	            break;
	        case "question.zhihu.com":
	            $target.find(".zu-edit-button").remove();
	            $target.find("a.external").map(function (idx, target) {
	                $(target).removeAttr("class").attr("style", "border: none;");
	            });
	            $target.find(".VagueImage").map(function (idx, target) {
	                var $target = $(target),
	                    src = $target.attr("data-src");
	                $target.replaceWith("<img class=\"sr-rd-content-img\" src=\"" + src + "\" style=\"zoom: 0.6;\">");
	            });
	            break;
	        case "chiphell.com":
	            $target.find("img").map(function (index, item) {
	                var $target = $(item),
	                    $parent = $target.parent(),
	                    src = $target.attr("src"),
	                    smilieid = $target.attr("smilieid");
	                if ($parent.is("ignore_js_op")) $target.unwrap();
	                smilieid && src && src.includes("static/image/smiley") && $target.addClass("sr-rd-content-nobeautify").attr("style", "width: 50px;");
	            });
	            $target.find(".quote").remove();
	            break;
	        case "jiemian.com":
	            $target.find("script").remove();
	            break;
	        case "36kr.com":
	            $target.find(".load-html-img").removeAttr("class");
	            break;
	        case "cnblogs.com":
	            $target.find(".cnblogs_code").removeClass();
	            $target.find(".cnblogs_code_hide").removeClass().removeAttr("style");
	            $target.find(".cnblogs_code_toolbar").remove();
	            $target.find(".code_img_opened").remove();
	            $target.find(".code_img_closed").remove();
	            break;
	        case "news.cnblogs.com":
	            $target.find(".topic_img").remove();
	            break;
	        case "g-cores.com":
	            $target.find(".swiper-slide-active").find("img").map(function (index, item) {
	                var $target = $(item);
	                $target.parent().parent().parent().parent().parent().parent().removeAttr("class").removeAttr("style").html($target);
	            });
	            break;
	        case "feng.com":
	            $target.find("span").removeAttr("style");
	            break;
	        case "young.ifeng.com":
	            $target.find("span").removeAttr("style");
	            break;
	        case "ftchinese.com":
	            $target.find("script").remove();
	            break;
	        case "segmentfault.com":
	            $target.find(".widget-codetool").remove();
	            break;
	        case "mp.weixin.qq.com":
	            $target.find('section[powered-by="xiumi.us"]').find("img").map(function (index, item) {
	                var $target = $(item),
	                    src = $target.attr("data-src");
	                $target.addClass("sr-rd-content-nobeautify").attr("src", src);
	            });
	            break;
	        case "ruby-china.org":
	            $target.find(".twemoji").remove();
	            break;
	        case "w3cplus.com":
	            $target.find("iframe").addClass("sr-rd-content-nobeautify");
	            break;
	        case "zuojj.com":
	            $target.find(".syntaxhighlighter .Brush").attr("style", "font-size: .7em !important;");
	            break;
	        case "aotu.io":
	            $target.find(".highlight table").map(function (index, item) {
	                var $target = $(item),
	                    $pre = $target.find("pre"),
	                    $table = $target.find("table");
	                $target.html($pre[1]);
	                $table.unwrap();
	            });
	            $target.find("table").addClass("sr-rd-content-center");
	            break;
	        case "colobu.com":
	            $target.find(".highlight table").map(function (index, item) {
	                var $target = $(item),
	                    $pre = $target.find("pre");
	                $target.html($pre[1]);
	                $target.unwrap();
	            });
	            break;
	        case "hao.caibaojian.com":
	            $target.find(".tlink").map(function (index, item) {
	                var $target = $(item);
	                $target.html("<link>");
	            });
	            break;
	        case "wkee.net":
	            $target.find("script").remove();
	            break;
	        case "linux.cn":
	            $target.find("pre").attr("style", "background-color: #161b20; background-image: none;");
	            $target.find("code").attr("style", "background-color: transparent; background-image: none;");
	            break;
	        case "zhuanlan.zhihu.com":
	            $target.find("div[data-src]").map(function (index, item) {
	                var $target = $(item),
	                    src = $target.attr("data-src");
	                $target.replaceWith("<div class=\"sr-rd-content-center\"><img src=\"" + src + "\"></div>");
	            });
	            break;
	        case "jianshu.com":
	            $target.find(".image-package").map(function (index, item) {
	                var $target = $(item),
	                    $div = $target.find("img");
	                $target.html($div);
	            });
	            break;
	    }
	}

	/**
	 * Remove spare tag
	 * 
	 * @param {string} storage.current.site.name
	 * @param {jquery} jquery object
	 */
	function removeSpareTag(name, $target) {
	    var remove = false,
	        tag = "";

	    if (["lib.csdn.net", "huxiu.com", "my.oschina.net", "caixin.com", "163.com", "steachs.com", "hacpai.com", "apprcn.com", "mp.weixin.qq.com"].includes(name)) {
	        remove = true;
	        tag = "p";
	    } else if (["nationalgeographic.com.cn", "dgtle.com", "news.mtime.com"].includes(name)) {
	        remove = true;
	        tag = "div";
	    } else if (["chiphell.com"].includes(name)) {
	        remove = true;
	        tag = "font";
	    }
	    if (remove) {
	        $target.find(tag).map(function (index, item) {
	            var str = $(item).text().toLowerCase().trim();
	            if ($(item).find("img").length == 0 && str == "") $(item).remove();
	        });
	    }
	}

	/**
	 * Beautify html, incldue:
	 * 
	 * - change all <blockquote> to <sr-blockquote>
	 * - remove useless <br>
	 * 
	 * @param {jquery} jquery object
	 */
	function htmlbeautify($target) {
	    try {
	        $target.html(function (index, html) {
	            return html.trim().replace(/<\/?blockquote/g, function (value) {
	                return value[1] == "/" ? "</sr-blockquote" : "<sr-blockquote";
	            }).replace(/<br>\n?<br>(\n?<br>)*/g, "<br>").replace(/\/(div|p)>\n*(<br>\n)+/g, function (value) {
	                return value.replace("<br>", "");
	            });
	        });
	    } catch (error) {
	        console.error(error);
	        return $target.html();
	    }
	}

	/**
	 * Common Beautify html, include:
	 * - task: all webiste image, remove old image and create new image
	 * - task: all webiste sr-blockquote, remove style
	 * - task: all webiste iframe, embed add center style
	 * - task: all hr tag add simpread-hidden class
	 * - task: all pre/code tag remove class
	 * - task: all a tag remove style
	 * 
	 * @param {jquery}
	 */
	function commbeautify(name, $target) {
	    $target.find("img:not(.sr-rd-content-nobeautify)").map(function (index, item) {
	        var $target = $(item),
	            $orgpar = $target.parent(),
	            $img = $("<img class='sr-rd-content-img-load'>"),
	            src = $target.attr("src"),
	            lazysrc = $target.attr("data-src"),
	            zuimei = $target.attr("data-original"),
	            cnbeta = $target.attr("original"),
	            jianshu = $target.attr("data-original-src"),
	            fixOverflowImgsize = function fixOverflowImgsize() {
	            $img.removeClass("sr-rd-content-img-load");
	            if ($img[0].clientWidth > 1000) {
	                $img.css("zoom", "0.6");
	            } else if ($img[0].clientHeight > 620) {
	                $img.attr("height", 620);
	                if ($img[0].clientWidth < $("sr-rd-content").width()) $img.css({ "width": "auto" });
	            }
	            if ($img[0].clientWidth > $("sr-rd-content").width()) $img.addClass("sr-rd-content-img");
	        },
	            loaderrorHandle = function loaderrorHandle() {
	            $img.addClass("simpread-hidden");
	            if ($img.parent().hasClass("sr-rd-content-center")) {
	                $img.parent().removeAttr("class").addClass("simpread-hidden");
	            }
	        };
	        var newsrc = void 0,
	            $parent = $target.parent(),
	            tagname = $parent[0].tagName.toLowerCase();

	        // remove current image and create new image object
	        newsrc = cnbeta ? cnbeta : src;
	        newsrc = lazysrc ? lazysrc : newsrc;
	        newsrc = zuimei ? zuimei : newsrc;
	        newsrc = jianshu ? jianshu : newsrc;
	        !newsrc.startsWith("http") && (newsrc = newsrc.startsWith("//") ? location.protocol + newsrc : location.origin + newsrc);
	        $img.attr("src", newsrc).one("load", function () {
	            return fixOverflowImgsize();
	        }).one("error", function () {
	            return loaderrorHandle();
	        }).replaceAll($target).wrap("<div class='sr-rd-content-center'></div>");
	    });
	    $target.find("sr-blockquote").map(function (index, item) {
	        var $target = $(item),
	            $parent = $target.parent();
	        $target.removeAttr("style").removeAttr("class");
	        if (name == "dgtle.com") {
	            $parent.removeClass("quote");
	        }
	    });
	    $target.find("iframe:not(.sr-rd-content-nobeautify), embed:not(.sr-rd-content-nobeautify)").map(function (index, item) {
	        $(item).wrap("<div class='sr-rd-content-center'></div>");
	    });
	    $target.find("hr").map(function (index, item) {
	        $(item).addClass("simpread-hidden");
	    });
	    $target.find("pre").map(function (index, item) {
	        $(item).find("code").removeAttr("class");
	    });
	    $target.find("pre").removeAttr("class");
	    $target.find("a").removeAttr("style");
	}

	var be = /*#__PURE__*/Object.freeze({
		specbeautify: specbeautify,
		removeSpareTag: removeSpareTag,
		htmlbeautify: htmlbeautify,
		commbeautify: commbeautify
	});

	console.log("=== PureRead: StyleSheet load ===");

	var bgcolorstyl = "background-color",
	    bgcls = ".simpread-focus-root";

	var html_style_bal = "-1";

	/**
	 * Get background color value for focus mode
	 * 
	 * @param  {string} background-color, e.g. rgba(235, 235, 235, 0.901961)
	 * @return {string} e.g. 235, 235, 235
	 */
	function getColor(value) {
	    var arr = value ? value.match(/[0-9]+, /ig) : [];
	    if (arr.length > 0) {
	        return arr.join("").replace(/, $/, "");
	    } else {
	        return null;
	    }
	}
	/**
	 * Set focus mode background color for focus mode
	 * 
	 * @param  {string} background color
	 * @param  {number} background opacity
	 * @return {string} new background color
	 */
	function backgroundColor(bgcolor, opacity) {
	    var color = getColor(bgcolor),
	        newval = "rgba(" + color + ", " + opacity / 100 + ")";
	    $(bgcls).css(bgcolorstyl, newval);
	    return newval;
	}

	/**
	 * Set background opacity for focus mode
	 * 
	 * @param  {string} opacity
	 * @return {string} new background color or null
	 */
	function opacity(opacity) {
	    var bgcolor = $(bgcls).css(bgcolorstyl),
	        color = getColor(bgcolor),
	        newval = "rgba(" + color + ", " + opacity / 100 + ")";
	    if (color) {
	        $(bgcls).css(bgcolorstyl, newval);
	        return newval;
	    } else {
	        return null;
	    }
	}

	/**
	 * Set read mode font family for read mode
	 * 
	 * @param {string} font family name e.g. PingFang SC; Microsoft Yahei
	 */
	function fontFamily(family) {
	    $("sr-read").css("font-family", family == "default" ? "" : family);
	}

	/**
	 * Set read mode font size for read mode
	 * 
	 * @param {string} font size, e.g. 70% 62.5%
	 */
	function fontSize(value) {
	    if (html_style_bal == "-1") {
	        html_style_bal = $("html").attr("style");
	        html_style_bal == undefined && (html_style_bal = "");
	    }
	    value ? $("html").attr("style", "font-size: " + value + "!important;" + html_style_bal) : $("html").attr("style", html_style_bal);
	}

	/**
	 * Set read mode layout width for read mode
	 * 
	 * @param {string} layout width
	 */
	function layout(width) {
	    $("sr-read").css("margin", width ? "20px " + width : "");
	}

	/**
	 * Add custom css to <head> for read mode
	 * 
	 * @param {string} read.custom[type]
	 * @param {object} read.custom
	 */
	function custom(type, props) {
	    var format = function format(name) {
	        return name.replace(/[A-Z]/, function (name) {
	            return "-" + name.toLowerCase();
	        });
	    },
	        arr = Object.keys(props).map(function (v) {
	        return props[v] && format(v) + ": " + props[v] + ";";
	    });
	    var styles = arr.join("");
	    switch (type) {
	        case "title":
	            styles = "sr-rd-title {" + styles + "}";
	            break;
	        case "desc":
	            styles = "sr-rd-desc {" + styles + "}";
	            break;
	        case "art":
	            styles = "sr-rd-content *, sr-rd-content p, sr-rd-content div {" + styles + "}";
	            break;
	        case "pre":
	            styles = "sr-rd-content pre {" + styles + "}";
	            break;
	        case "code":
	            styles = "sr-rd-content pre code, sr-rd-content pre code * {" + styles + "}";
	            break;
	    }

	    var $target = $("head").find("style#simpread-custom-" + type);
	    if ($target.length == 0) {
	        $("head").append("<style type=\"text/css\" id=\"simpread-custom-" + type + "\">" + styles + "</style>");
	    } else {
	        $target.html(styles);
	    }
	}

	/**
	 * Add css to <head> for read mode
	 * 
	 * @param {string} read.custom.css
	 * @param {object} read.custom.css value
	 */
	function css(type, styles) {
	    var $target = $("head").find("style#simpread-custom-" + type);
	    if ($target.length == 0) {
	        $("head").append("<style type=\"text/css\" id=\"simpread-custom-" + type + "\">" + styles + "</style>");
	    } else {
	        $target.html(styles);
	    }
	}

	/**
	 * Add/Remove current site styles( string ) to head for read mdoe
	 * 
	 * @param {string} styles 
	 */
	function siteCSS(styles) {
	    styles ? $("head").append("<style type=\"text/css\" id=\"simpread-site-css\">" + styles + "</style>") : $("#simpread-site-css").remove();
	}

	/**
	 * Add custom to .preview tag
	 * 
	 * @param {object} read.custom
	 * @param {string} theme backgroud color
	 */
	function preview(styles) {
	    Object.keys(styles).forEach(function (v) {
	        v != "css" && custom(v, styles[v]);
	    });
	    css("css", styles["css"]);
	}

	/**
	 * Verify custom is exist
	 * 
	 * @param {string} verify type
	 * @param {object} read.custom value
	 */
	function vfyCustom(type, styles) {
	    switch (type) {
	        case "layout":
	        case "margin":
	        case "fontfamily":
	        case "custom":
	            return styles.css != "";
	        case "fontsize":
	            return styles.title.fontSize != "" || styles.desc.fontSize != "" || styles.art.fontSize != "" || styles.css != "";
	        case "theme":
	            return styles.css.search("simpread-theme-root") != -1;
	    }
	}

	var ss = /*#__PURE__*/Object.freeze({
		GetColor: getColor,
		BgColor: backgroundColor,
		Opacity: opacity,
		FontFamily: fontFamily,
		FontSize: fontSize,
		Layout: layout,
		SiteCSS: siteCSS,
		Preview: preview,
		Custom: custom,
		CSS: css,
		VerifyCustom: vfyCustom
	});

	console.log("=== PureRead: Plugin load ===");

	var plugins = {
	    pangu: pangu_min,
	    minimatch: minimatch_1,
	    beautify: be,
	    style: ss
	};

	/**
	 * Get PureRead Plugin
	 * 
	 * @param  {string} plugin name, when undefined, return all plugin
	 * @return {object} all plugins
	 *         {string} plgin
	 */
	function Plugin(type) {
	    var result = void 0;
	    if (type == undefined) {
	        result = plugins;
	    } else {
	        result = plugins[type];
	    }
	    return result;
	}

	exports.Plugin = Plugin;

	return exports;

}({}));

var mduikit = (function (exports) {
    'use strict';

    // global destory array

    var destorys = [];

    /**
     * Button
     * 
     * @param {string} id 
     * @param {string} text 
     * @param {object} include: href, type, mode, disable, color, bgColor, shadow, css, width
     */
    var Button = function Button(id, text) {
        var others = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var style = {};
        var param = {
            href: "javascript:;",
            type: "raised", // include: raised flat
            mode: "primary", // include: primary secondary
            disable: false,
            color: "rgba(255, 255, 255, .7)",
            bgColor: "rgba(0, 137, 123, 1)",
            shadow: "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)",
            css: "",
            width: "",
            onclick: undefined
        },
            disable = {
            flat: "cursor: no-drop; color: rgba(0, 0, 0, 0.298039);",
            raised: "cursor: no-drop; color: rgba(0, 0, 0, 0.298039); background-color: rgb(229, 229, 229); box-shadow: none;"
        },
            secondary = {
            flat: "opacity: 0.6;",
            raised: "backgroundColor: rgba( 153, 153, 153, .2);"
        };
        if (others.type == "flat") {
            param.color = "rgba(0, 137, 123, .8)";
            param.bgColor = "transparent";
            param.shadow = "none";
        }

        Object.assign(style, param, others);
        style.disable = style.disable == true ? disable[style.type] : "";
        style.mode = style.mode == "secondary" ? secondary[style.type] : "";
        style.width = others.width != undefined ? "width: " + others.width + ";" : "";

        style.onclick && $("html").on("click", "#" + id, style.onclick);
        style.onclick && destorys.push({ id: id, event: "click" });

        return "<a id=\"" + id + "\" style=\"display:block;min-width:88px;height:36px;margin:6px;padding:0;font-family:sans-serif;text-decoration:none;cursor:pointer;border:none;border-radius:2px;box-shadow:" + style.shadow + ";color:" + style.color + ";background-color:" + style.bgColor + ";margin-right:0px;" + style.disable + ";" + style.width + ";" + style.css + ";\" class=\"md-waves-effect md-waves-button\" href=\"" + style.href + "\" target=\"_self\" type=\"" + style.type + "\">\n                <button-mask style=\"display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; margin: 0px; padding: 0px 8px; border: medium none; border-radius: 2px; box-sizing: border-box; transition: all 0.5s ease-in-out 0s; background-color: transparent;" + style.mode + "\">\n                    <button-span style=\"display:flex;align-items:center;user-select:none;\">\n                        <button-icon style=\"order:-1;display:none;width:24px;height:24px;border:none;background-position:center;background-repeat:no-repeat;\"></button-icon>\n                        <button-text style=\"padding:0 8px 0;text-decoration:none;text-align:center;letter-spacing:.5px;font-size:15px;line-height:1;\">" + text + "</button-text>\n                    </button-span>\n                </button-mask>\n            </a>";
    };

    /**
     * Texteare
     * 
     * @param {string} id 
     * @param {string} text 
     * @param {object} include: disable, color, placeholder, css, width, height
     */
    var Textarea = function Textarea(id, text) {
        var others = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var style = {};
        var param = {
            disable: false,
            placeholder: "",
            height: "60px;",
            width: "100%",
            size: "14px",
            color: "rgba(51, 51, 51, .87)",
            float_color: "rgba(0, 137, 123, 0.8)",
            state_color: "rgba(0, 137, 123, 0.8)",
            border_color: "border-top:none rgba(224, 224, 224, 1);border-left:none rgba(224, 224, 224, 1);border-right:none rgba(224, 224, 224, 1);border-bottom:1px solid rgba(224, 224, 224, 1)",
            error_color: "rgba(244, 67, 54, 1)",
            css: {
                float: "",
                textarea: "",
                border: "",
                state: "",
                error: ""
            }
        };

        Object.assign(style, param, others);
        style.disable = style.disable == true ? disable[style.type] : "";
        style.width = others.width != undefined ? "width: " + others.width + ";" : "";
        style.height = others.height != undefined ? "height: " + others.height + ";" : "";

        $("html").on("focus", "#" + id, function (event) {
            $("#field-" + id).find("#state").css({ transform: "scaleX(1)" });
        });
        $("html").on("blur", "#" + id, function (event) {
            $("#field-" + id).find("#state").css({ transform: "scaleX(0)" });
        });

        destorys.push({ id: id, event: "focus" });
        destorys.push({ id: id, event: "blur" });

        return "<text-field id=\"field-" + id + "\" style=\"display:block;position:relative;margin:0;padding:0;width:100%;line-height:1;\">\n                <text-field-float id=\"float\" style=\"display: block; position: absolute; margin: -8px 0px 0px; color: " + style.float_color + "; font-size: 14px; font-weight: bold; pointer-events: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; transform: scale(0.75) translate(0px, -8px); transform-origin: left top 0px; -moz-user-select: none;" + style.css.float + "\"></text-field-float>\n                <textarea id=\"" + id + "\" style=\"position:relative;color:rgba(51, 51, 51, .87);background-color:transparent;width:100%;height:180px;margin:8px 0 0 0;padding:0;font-family:sans-serif;font-size:" + style.size + ";line-height:1.5;cursor:inherit;border:none;outline:none;resize:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-appearance:textfield;color:" + style.color + ";" + style.width + ";" + style.height + ";" + style.css.textarea + ";\" placeholder=\"" + style.placeholder + "\">" + text + "</textarea>\n                <div>\n                    <text-field-border id=\"border\" style=\"display:block;width:100%;margin:8px 0 0 0;" + style.border_color + ";box-sizing:content-box;" + style.css.border + "\"></text-field-border>\n                    <text-field-state id=\"state\" style=\"display: block; position: absolute; width: 100%; margin: -1px 0px 0px; border-width: medium medium 2px; border-style: none none solid; border-color: " + style.state_color + "; box-sizing: content-box; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;" + style.css.state + "\"></text-field-state>\n                </div>\n                <text-field-error id=\"error\" style=\"display:block;position:relative;margin:8px 0 0 0;max-width:428px;font-size:14px;font-weight:bold;line-height:1.5;text-align:initial;word-wrap:break-word;user-select:none;color:" + style.error_color + ";transform:scale(0.75) translate( -73px, 0 );" + style.css.error + "\"></text-field-error>\n            </text-field>";
    };

    /**
     * Clean events
     * 
     * @param {array} id array, e.g. [ "id1", "id2" ]
     * @param {string} event name, e.g. click, mouseover
     */
    var Destory = function Destory() {
        destorys.forEach(function (item) {
            return $("html").off(item.event, "#" + item.id);
        });
        destorys = [];
    };

    exports.Button = Button;
    exports.Textarea = Textarea;
    exports.Destory = Destory;

    return exports;

}({}));