/*jquery.min.js*/

//# sourceMappingURL=jquery.min.map
/*
bootstrap.min.js
Bootstrap v3.3.6 (http://getbootstrap.com)
*/
/*modernizr.min.js*/
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function C(a){j.cssText=a}function D(a,b){return C(n.join(a+";")+(b||""))}function E(a,b){return typeof a===b}function F(a,b){return!!~(""+a).indexOf(b)}function G(a,b){for(var d in a){var e=a[d];if(!F(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function H(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:E(f,"function")?f.bind(d||b):f}return!1}function I(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return E(b,"string")||E(b,"undefined")?G(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),H(e,b,c))}function J(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=E(e[d],"function"),E(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),A={}.hasOwnProperty,B;!E(A,"undefined")&&!E(A.call,"undefined")?B=function(a,b){return A.call(a,b)}:B=function(a,b){return b in a&&E(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return I("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!E(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!I("indexedDB",a)},s.hashchange=function(){return z("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return C("background-color:rgba(150,255,150,.5)"),F(j.backgroundColor,"rgba")},s.hsla=function(){return C("background-color:hsla(120,40%,100%,.5)"),F(j.backgroundColor,"rgba")||F(j.backgroundColor,"hsla")},s.multiplebgs=function(){return C("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return I("backgroundSize")},s.borderimage=function(){return I("borderImage")},s.borderradius=function(){return I("borderRadius")},s.boxshadow=function(){return I("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return D("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return I("animationName")},s.csscolumns=function(){return I("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return C((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),F(j.backgroundImage,"gradient")},s.cssreflections=function(){return I("boxReflect")},s.csstransforms=function(){return!!I("transform")},s.csstransforms3d=function(){var a=!!I("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return I("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var K in s)B(s,K)&&(x=K.toLowerCase(),e[x]=s[K](),v.push((e[x]?"":"no-")+x));return e.input||J(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)B(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},C(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=z,e.testProp=function(a){return G([a])},e.testAllProps=I,e.testStyles=y,e.prefixed=function(a,b,c){return b?I(a,b,c):I(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*ini.js*/
/*!
 * M['weburl']      网站网址
 * M['lang']        网站语言
 * M['navurl']      相对于根目录地址
 * M['tem']         模板目录路径
 * M['classnow']    当前栏目ID
 * M['id']          当前页面ID
 * M['module']      当前页面所属模块
 * default_placeholder 开发者自定义默认图片延迟加载方式，'base64'：灰色背景；自定义背景图片路径；'blur'：图片高斯模糊；默认为'blur'
 * met_prevarrow,met_nextarrow slick插件翻页按钮自定义html
 * device_type       客户端判断（d：PC端，t：平板端，m：手机端）
 */
// 网站参数
window.MSTR=document.querySelector('meta[name=\"generator\"]').getAttribute('data-variable').split('|'),
    M=new Array();
M['weburl']=MSTR[0],
M['lang']=MSTR[1],
M['navurl']=MSTR[2],
M['classnow']=parseInt(MSTR[3]),
M['id']=parseInt(MSTR[4]),
M['module']=parseInt(MSTR[5]),
M['tem']=MSTR[0]+'templates/'+MSTR[6]+'/';
M['accurl'] = MSTR[7];
window.useragent=navigator.userAgent,
    useragent_tlc=useragent.toLowerCase(),
    device_type = /iPad/.test(useragent) ? 't' : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(useragent) ? 'm' : 'd',
    is_ucbro=/UC/.test(useragent),
    is_lteie9=false;
// IE9浏览器判断
if(new RegExp('msie').test(useragent_tlc)){
    var iebrowser_ver=(useragent_tlc.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1];
    if(iebrowser_ver<10) is_lteie9=true;
}
if(Breakpoints) Breakpoints();// 窗口宽度断点函数
// js严格模式
(function(document, window, $) {
    'use strict';
    var Site=window.Site;
    $(function(){
        Site.run();
        // 中间弹窗隐藏效果优化（点击弹窗框外上下方隐藏弹窗）
        $(document).on('click', '.modal-dialog.modal-center', function(e) {
            if(!$(e.target).closest(".modal-dialog.modal-center .modal-content").length) $(this).parents('.modal').modal('hide');
        });
    })
})(document, window, jQuery);

/*formValidation.min.js*/

/*jquery.enplaceholder.min.js*/
/**
 * jQuery EnPlaceholder plug
 * EnPlaceholder是一个跨浏览器实现placeholder效果的jQuery插件
 * version 1.0
 * by Frans.Lee <dmon@foxmail.com>  http://www.ifrans.cn
 */
/*jquery.asScrollable.all.min.js*/
/*asscrollable.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("scrollable", {
  mode: "init",
  defaults: {
    namespace: "scrollable",
    contentSelector: "> [data-role='content']",
    containerSelector: "> [data-role='container']"
  },
  init: function(context) {
    if (!$.fn.asScrollable) return;
    var defaults = $.components.getDefaults("scrollable");

    $('[data-plugin="scrollable"]', context).each(function() {
      var options = $.extend({}, defaults, $(this).data());

      $(this).asScrollable(options);
    });
  }
});

/*animsition.min.js*/
/*!
 * animsition v4.0.1
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";var n="animsition",i={init:function(a){a=t.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(t){window.location.href=t}},a),i.settings={timer:!1,data:{inClass:"animsition-in-class",inDuration:"animsition-in-duration",outClass:"animsition-out-class",outDuration:"animsition-out-duration",overlay:"animsition-overlay"},events:{inStart:"animsition.inStart",inEnd:"animsition.inEnd",outStart:"animsition.outStart",outEnd:"animsition.outEnd"}};var o=i.supportCheck.call(this,a);if(!o&&a.browser.length>0&&(!o||!this.length))return"console"in window||(window.console={},window.console.log=function(t){return t}),this.length||console.log("Animsition: Element does not exist on page."),o||console.log("Animsition: Does not support this browser."),i.destroy.call(this);var e=i.optionCheck.call(this,a);return e&&i.addOverlay.call(this,a),a.loading&&i.addLoading.call(this,a),this.each(function(){var o=this,e=t(this),s=t(window),r=t(document),l=e.data(n);l||(a=t.extend({},a),e.data(n,{options:a}),a.timeout&&i.addTimer.call(o),a.onLoadEvent&&s.on("load."+n,function(){i.settings.timer&&clearTimeout(i.settings.timer),i["in"].call(o)}),s.on("pageshow."+n,function(t){t.originalEvent.persisted&&i["in"].call(o)}),s.on("unload."+n,function(){}),r.on("click."+n,a.linkElement,function(n){n.preventDefault();var a=t(this),e=a.attr("href");2===n.which||n.metaKey||n.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&n.ctrlKey?window.open(e,"_blank"):i.out.call(o,a,e)}))})},addOverlay:function(n){t(n.overlayParentElement).prepend('<div class="'+n.overlayClass+'"></div>')},addLoading:function(n){t(n.loadingParentElement).append('<div class="'+n.loadingClass+'">'+n.loadingInner+"</div>")},removeLoading:function(){var i=t(this),a=i.data(n).options,o=t(a.loadingParentElement).children("."+a.loadingClass);o.fadeOut().remove()},addTimer:function(){var a=this,o=t(this),e=o.data(n).options;i.settings.timer=setTimeout(function(){i["in"].call(a),t(window).off("load."+n)},e.timeoutCountdown)},supportCheck:function(n){var i=t(this),a=n.browser,o=a.length,e=!1;0===o&&(e=!0);for(var s=0;o>s;s++)if("string"==typeof i.css(a[s])){e=!0;break}return e},optionCheck:function(n){var a,o=t(this);return a=n.overlay||o.data(i.settings.data.overlay)?!0:!1},animationCheck:function(i,a,o){var e=t(this),s=e.data(n).options,r=typeof i,l=!a&&"number"===r,d=a&&"string"===r&&i.length>0;return l||d?i=i:a&&o?i=s.inClass:!a&&o?i=s.inDuration:a&&!o?i=s.outClass:a||o||(i=s.outDuration),i},"in":function(){var a=this,o=t(this),e=o.data(n).options,s=o.data(i.settings.data.inDuration),r=o.data(i.settings.data.inClass),l=i.animationCheck.call(a,s,!1,!0),d=i.animationCheck.call(a,r,!0,!0),u=i.optionCheck.call(a,e),c=o.data(n).outClass;e.loading&&i.removeLoading.call(a),c&&o.removeClass(c),u?i.inOverlay.call(a,d,l):i.inDefault.call(a,d,l)},inDefault:function(n,a){var o=t(this);o.css({"animation-duration":a+"ms"}).addClass(n).trigger(i.settings.events.inStart).animateCallback(function(){o.removeClass(n).css({opacity:1}).trigger(i.settings.events.inEnd)})},inOverlay:function(a,o){var e=t(this),s=e.data(n).options;e.css({opacity:1}).trigger(i.settings.events.inStart),t(s.overlayParentElement).children("."+s.overlayClass).css({"animation-duration":o+"ms"}).addClass(a).animateCallback(function(){e.trigger(i.settings.events.inEnd)})},out:function(a,o){var e=this,s=t(this),r=s.data(n).options,l=a.data(i.settings.data.outClass),d=s.data(i.settings.data.outClass),u=a.data(i.settings.data.outDuration),c=s.data(i.settings.data.outDuration),m=l?l:d,g=u?u:c,f=i.animationCheck.call(e,m,!0,!1),v=i.animationCheck.call(e,g,!1,!1),h=i.optionCheck.call(e,r);s.data(n).outClass=f,h?i.outOverlay.call(e,f,v,o):i.outDefault.call(e,f,v,o)},outDefault:function(a,o,e){var s=t(this),r=s.data(n).options;s.css({"animation-duration":o+1+"ms"}).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){s.trigger(i.settings.events.outEnd),r.transition(e)})},outOverlay:function(a,o,e){var s=this,r=t(this),l=r.data(n).options,d=r.data(i.settings.data.inClass),u=i.animationCheck.call(s,d,!0,!0);t(l.overlayParentElement).children("."+l.overlayClass).css({"animation-duration":o+1+"ms"}).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function(){r.trigger(i.settings.events.outEnd),l.transition(e)})},destroy:function(){return this.each(function(){var i=t(this);t(window).off("."+n),i.css({opacity:1}).removeData(n)})}};t.fn.animateCallback=function(n){var i="animationend webkitAnimationEnd";return this.each(function(){var a=t(this);a.on(i,function(){return a.off(i),n.call(this)})})},t.fn.animsition=function(a){return i[a]?i[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void t.error("Method "+a+" does not exist on jQuery."+n):i.init.apply(this,arguments)}});
/*animsition.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("animsition",{mode:"manual",defaults:{inClass:"fade-in",outClass:"fade-out",inDuration:800,outDuration:500,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"loader",loadingType:"default",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",inDefaults:["fade-in","fade-in-up-sm","fade-in-up","fade-in-up-lg","fade-in-down-sm","fade-in-down","fade-in-down-lg","fade-in-left-sm","fade-in-left","fade-in-left-lg","fade-in-right-sm","fade-in-right","fade-in-right-lg","zoom-in-sm","zoom-in","zoom-in-lg"],outDefaults:["fade-out","fade-out-up-sm","fade-out-up","fade-out-up-lg","fade-out-down-sm","fade-out-down","fade-out-down-lg","fade-out-left-sm","fade-out-left","fade-out-left-lg","fade-out-right-sm","fade-out-right","fade-out-right-lg","zoom-out-sm","zoom-out","zoom-out-lg"]},init:function(context,callback){var options=$.components.getDefaults("animsition");if(options.random){var li=options.inDefaults.length,lo=options.outDefaults.length,ni=parseInt(li*Math.random(),0),no=parseInt(lo*Math.random(),0);options.inClass=options.inDefaults[ni],options.outClass=options.outDefaults[no]}var $this=$(".animsition",context);return $this.animsition(options),$("."+options.loadingClass).addClass("loader-"+options.loadingType),$this.animsition("supportCheck",options)?($.isFunction(callback)&&$this.one("animsition.end",function(){callback.call()}),!0):($.isFunction(callback)&&callback.call(),!1)}});
/*alertify.js*/
(function() {

    "use strict";

    var TRANSITION_FALLBACK_DURATION = 500;
    var hideElement = function(el) {

        if (! el) {
            return;
        }

        var removeThis = function() {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };

        el.classList.remove("show");
        el.classList.add("hide");
        el.addEventListener("transitionend", removeThis);

        // Fallback for no transitions.
        setTimeout(removeThis, TRANSITION_FALLBACK_DURATION);

    };

    function Alertify() {

        /**
         * Alertify private object
         * @type {Object}
         */
        var _alertify = {

            version: "1.0.8",
            defaultOkLabel: "Ok",
            okLabel: "Ok",
            defaultCancelLabel: "Cancel",
            cancelLabel: "Cancel",
            defaultMaxLogItems: 2,
            maxLogItems: 2,
            promptValue: "",
            promptPlaceholder: "",
            closeLogOnClick: false,
            closeLogOnClickDefault: false,
            delay: 5000,
            defaultDelay: 5000,
            logContainerClass: "alertify-logs",
            logContainerDefaultClass: "alertify-logs",
            dialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },

            defaultDialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },

            /**
             * Build the proper message box
             *
             * @param  {Object} item    Current object in the queue
             *
             * @return {String}         An HTML string of the message box
             */
            build: function(item) {

                var btnTxt = this.dialogs.buttons.ok;
                var html = "<div class='dialog'>" + "<div>" + this.dialogs.message.replace("{{message}}", item.message);

                if(item.type === "confirm" || item.type === "prompt") {
                    btnTxt = this.dialogs.buttons.cancel + this.dialogs.buttons.ok;
                }

                if (item.type === "prompt") {
                    html += this.dialogs.input;
                }

                html = (html + this.dialogs.buttons.holder + "</div>" + "</div>")
                  .replace("{{buttons}}", btnTxt)
                  .replace("{{ok}}", this.okLabel)
                  .replace("{{cancel}}", this.cancelLabel);

                return html;

            },

            setCloseLogOnClick: function(bool) {
                this.closeLogOnClick = !! bool;
            },

            /**
             * Close the log messages
             *
             * @param  {Object} elem    HTML Element of log message to close
             * @param  {Number} wait    [optional] Time (in ms) to wait before automatically hiding the message, if 0 never hide
             *
             * @return {undefined}
             */
            close: function(elem, wait) {

                if (this.closeLogOnClick) {
                    elem.addEventListener("click", function(ev) {
                        hideElement(ev.srcElement);
                    });
                }

                wait = wait && !isNaN(+wait) ? +wait : this.delay;

                if (wait < 0) {
                    hideElement(elem);
                } else if(wait > 0) {
                    setTimeout(function() {
                        hideElement(elem);
                    }, wait);
                }

            },

            /**
             * Create a dialog box
             *
             * @param  {String}   message      The message passed from the callee
             * @param  {String}   type         Type of dialog to create
             * @param  {Function} onOkay       [Optional] Callback function when clicked okay.
             * @param  {Function} onCancel     [Optional] Callback function when cancelled.
             *
             * @return {Object}
             */
            dialog: function(message, type, onOkay, onCancel) {
                return this.setup({
                    type: type,
                    message: message,
                    onOkay: onOkay,
                    onCancel: onCancel
                });
            },

            /**
             * Show a new log message box
             *
             * @param  {String} message    The message passed from the callee
             * @param  {String} type       [Optional] Optional type of log message
             * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding the log
             *
             * @return {Object}
             */
            log: function(message, type, click) {

                var existing = document.querySelectorAll(".alertify-logs > div");
                if (existing) {
                    var diff = existing.length - this.maxLogItems;
                    if (diff >= 0) {
                        for (var i = 0, _i = diff + 1; i < _i; i++) {
                            this.close(existing[i], -1);
                        }
                    }
                }

                this.notify(message, type, click);
            },

            setLogPosition: function(str) {
                this.logContainerClass = "alertify-logs " + str;
            },

            setupLogContainer: function() {

                var elLog = document.querySelector(".alertify-logs");
                var className = this.logContainerClass;
                if (! elLog) {
                    elLog = document.createElement("div");
                    elLog.className = className;
                    document.body.appendChild(elLog);
                }

                // Make sure it's positioned properly.
                if (elLog.className !== className) {
                    elLog.className = className;
                }

                return elLog;

            },

            /**
             * Add new log message
             * If a type is passed, a class name "{type}" will get added.
             * This allows for custom look and feel for various types of notifications.
             *
             * @param  {String} message    The message passed from the callee
             * @param  {String} type       [Optional] Type of log message
             * @param  {Number} wait       [Optional] Time (in ms) to wait before auto-hiding
             *
             * @return {undefined}
             */
            notify: function(message, type, click) {

                var elLog = this.setupLogContainer();
                var log = document.createElement("div");

                log.className = (type || "default");
                if (_alertify.logTemplateMethod) {
                    log.innerHTML = _alertify.logTemplateMethod(message);
                } else {
                    log.innerHTML = message;
                }

                // Add the click handler, if specified.
                if ("function" === typeof click) {
                    log.addEventListener("click", click);
                }

                elLog.appendChild(log);
                setTimeout(function() {
                    log.className += " show";
                }, 10);

                this.close(log, this.delay);

            },

            /**
             * Initiate all the required pieces for the dialog box
             *
             * @return {undefined}
             */
            setup: function(item) {

                var el = document.createElement("div");
                el.className = "alertify hide";
                el.innerHTML = this.build(item);

                var btnOK = el.querySelector(".ok");
                var btnCancel = el.querySelector(".cancel");
                var input = el.querySelector("input");
                var label = el.querySelector("label");

                // Set default value/placeholder of input
                if (input) {
                    if (typeof this.promptPlaceholder === "string") {
                        // Set the label, if available, for MDL, etc.
                        if (label) {
                            label.textContent = this.promptPlaceholder;
                        } else {
                            input.placeholder = this.promptPlaceholder;
                        }
                    }
                    if (typeof this.promptValue === "string") {
                        input.value = this.promptValue;
                    }
                }

                function setupHandlers(resolve) {
                    if ("function" !== typeof resolve) {
                        // promises are not available so resolve is a no-op
                        resolve = function () {};
                    }

                    if (btnOK) {
                        btnOK.addEventListener("click", function(ev) {
                            if (item.onOkay && "function" === typeof item.onOkay) {
                                if (input) {
                                    item.onOkay(input.value, ev);
                                } else {
                                    item.onOkay(ev);
                                }
                            }

                            if (input) {
                                resolve({
                                    buttonClicked: "ok",
                                    inputValue: input.value,
                                    event: ev
                                });
                            } else {
                                resolve({
                                    buttonClicked: "ok",
                                    event: ev
                                });
                            }

                            hideElement(el);
                        });
                    }

                    if (btnCancel) {
                        btnCancel.addEventListener("click", function(ev) {
                            if (item.onCancel && "function" === typeof item.onCancel) {
                                item.onCancel(ev);
                            }

                            resolve({
                                buttonClicked: "cancel",
                                event: ev
                            });

                            hideElement(el);
                        });
                    }
                }

                var promise;

                if (typeof Promise === "function") {
                    promise = new Promise(setupHandlers);
                } else {
                    setupHandlers();
                }

                document.body.appendChild(el);
                setTimeout(function() {
                    el.classList.remove("hide");
                    if(input && item.type && item.type === "prompt") {
                        input.select();
                        input.focus();
                    } else {
                        if (btnOK) {
                            btnOK.focus();
                        }
                    }
                }, 100);

                return promise;
            },

            okBtn: function(label) {
                this.okLabel = label;
                return this;
            },

            setDelay: function(time) {
                var dur = parseInt(time || 0, 10);
                this.delay = isNaN(dur) ? this.defultDelay : time;
                return this;
            },

            cancelBtn: function(str) {
                this.cancelLabel = str;
                return this;
            },

            setMaxLogItems: function(num) {
                this.maxLogItems = parseInt(num || this.defaultMaxLogItems);
            },

            theme: function(themeStr) {
                switch(themeStr.toLowerCase()) {
                case "bootstrap":
                    this.dialogs.buttons.ok = "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>";
                    this.dialogs.input = "<input type='text' class='form-control'>";
                    break;
                case "purecss":
                    this.dialogs.buttons.ok = "<button class='ok pure-button' tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";
                    break;
                case "mdl":
                case "material-design-light":
                    this.dialogs.buttons.ok = "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>";
                    this.dialogs.input = "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";
                    break;
                case "angular-material":
                    this.dialogs.buttons.ok = "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>";
                    this.dialogs.buttons.cancel = "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>";
                    this.dialogs.input = "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";
                    break;
                case "default":
                default:
                    this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok;
                    this.dialogs.buttons.cancel = this.defaultDialogs.buttons.cancel;
                    this.dialogs.input = this.defaultDialogs.input;
                    break;
                }
            },

            reset: function() {
                this.theme("default");
                this.okBtn(this.defaultOkLabel);
                this.cancelBtn(this.defaultCancelLabel);
                this.setMaxLogItems();
                this.promptValue = "";
                this.promptPlaceholder = "";
                this.delay = this.defaultDelay;
                this.setCloseLogOnClick(this.closeLogOnClickDefault);
                this.setLogPosition("bottom left");
                this.logTemplateMethod = null;
            },

            injectCSS: function() {
                if (!document.querySelector("#alertifyCSS")) {
                    var head = document.getElementsByTagName("head")[0];
                    var css = document.createElement("style");
                    css.type = "text/css";
                    css.id = "alertifyCSS";
                    css.innerHTML = "/* style.css */";
                    head.insertBefore(css, head.firstChild);
                }
            },

            removeCSS: function() {
                var css = document.querySelector("#alertifyCSS");
                if (css && css.parentNode) {
                    css.parentNode.removeChild(css);
                }
            }

        };

        _alertify.injectCSS();

        return {
            _$$alertify: _alertify,
            reset: function() {
                _alertify.reset();
                return this;
            },
            alert: function(message, onOkay, onCancel) {
                return _alertify.dialog(message, "alert", onOkay, onCancel) || this;
            },
            confirm: function(message, onOkay, onCancel) {
                return _alertify.dialog(message, "confirm", onOkay, onCancel) || this;
            },
            prompt: function(message, onOkay, onCancel) {
                return _alertify.dialog(message, "prompt", onOkay, onCancel) || this;
            },
            log: function(message, click) {
                _alertify.log(message, "default", click);
                return this;
            },
            theme: function(themeStr) {
                _alertify.theme(themeStr);
                return this;
            },
            success: function(message, click) {
                _alertify.log(message, "success", click);
                return this;
            },
            error: function(message, click) {
                _alertify.log(message, "error", click);
                return this;
            },
            cancelBtn: function(label) {
                _alertify.cancelBtn(label);
                return this;
            },
            okBtn: function(label) {
                _alertify.okBtn(label);
                return this;
            },
            delay: function(time) {
                _alertify.setDelay(time);
                return this;
            },
            placeholder: function(str) {
                _alertify.promptPlaceholder = str;
                return this;
            },
            defaultValue: function(str) {
                _alertify.promptValue = str;
                return this;
            },
            maxLogItems: function(num) {
                _alertify.setMaxLogItems(num);
                return this;
            },
            closeLogOnClick: function(bool) {
                _alertify.setCloseLogOnClick(!! bool);
                return this;
            },
            logPosition: function(str) {
                _alertify.setLogPosition(str || "");
                return this;
            },
            setLogTemplate: function(templateMethod) {
                _alertify.logTemplateMethod = templateMethod;
                return this;
            },
            clearLogs: function() {
                _alertify.setupLogContainer().innerHTML = "";
                return this;
            },
            version: _alertify.version
        };
    }

    // AMD, window, and NPM support
    if ("undefined" !== typeof module && !! module && !! module.exports) {
        // Preserve backwards compatibility
        module.exports = function() {
            return new Alertify();
        };
        var obj = new Alertify();
        for (var key in obj) {
            module.exports[key] = obj[key];
        }
    } else if (typeof define === "function" && define.amd) {
        define(function() {
            return new Alertify();
        });
    } else {
        window.alertify = new Alertify();
    }

}());

/*jquery.appear.js*/
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = $(selectors[index]).filter(function() {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  };

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());

/*jquery-appear.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("appear",{defaults:{},api:function(context){$.fn.appear&&($(document).on("appear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||($item.removeClass("invisible").addClass("animation-"+animate),$item.data("repeat")===!1&&$item.addClass("appear-no-repeat"))}),$(document).on("disappear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||$item.addClass("invisible").removeClass("animation-"+animate)}))},init:function(context){if($.fn.appear){var defaults=$.components.getDefaults("appear");$('[data-plugin="appear"]',context).appear(defaults),$('[data-plugin="appear"]',context).not(":appeared").addClass("invisible")}}});
/*bootstrap-hover-dropdown.min.js*/
/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function(e,n){var o=e();e.fn.dropdownHover=function(t){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function r(){d.parents(".navbar").find(".navbar-toggle").is(":visible")||(n.clearTimeout(a),n.clearTimeout(i),i=n.setTimeout(function(){o.find(":focus").blur(),v.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(i),d.attr("aria-expanded","true"),s.addClass("open"),d.trigger(h)},v.hoverDelay))}var a,i,d=e(this),s=d.parent(),u={delay:500,hoverDelay:0,instantlyCloseOthers:!0},l={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},h="show.bs.dropdown",c="hide.bs.dropdown",v=e.extend(!0,{},u,t,l);s.hover(function(e){return s.hasClass("open")||d.is(e.target)?void r(e):!0},function(){n.clearTimeout(i),a=n.setTimeout(function(){d.attr("aria-expanded","false"),s.removeClass("open"),d.trigger(c)},v.delay)}),d.hover(function(e){return s.hasClass("open")||s.is(e.target)?void r(e):!0}),s.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},v.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);
/*jquery.webui-popover.min.js*/
/*
 *  webui popover plugin  - v1.2.3
 *  A lightWeight popover plugin with jquery ,enchance the  popover plugin of bootstrap with some awesome new features. It works well with bootstrap ,but bootstrap is not necessary!
 *  https://github.com/sandywalker/webui-popover
 *
 *  Made by Sandy Duan
 *  Under MIT License
 */
!function(a,b,c){"use strict";function d(b,c){this.$element=a(b),c&&("string"===a.type(c.delay)||"number"===a.type(c.delay))&&(c.delay={show:c.delay,hide:c.delay}),this.options=a.extend({},h,c),this._defaults=h,this._name=e,this._targetclick=!1,this.init(),i.push(this.$element)}var e="webuiPopover",f="webui-popover",g="webui.popover",h={placement:"auto",width:"auto",height:"auto",trigger:"click",style:"",delay:{show:null,hide:null},async:{before:null,success:null},cache:!0,multi:!1,arrow:!0,title:"",content:"",closeable:!1,padding:!0,url:"",type:"html",animation:null,template:'<div class="webui-popover"><div class="arrow"></div><div class="webui-popover-inner"><a href="#" class="close">&times;</a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',backdrop:!1,dismissible:!0,onShow:null,onHide:null,abortXHR:!0,autoHide:!1,offsetTop:0,offsetLeft:0,iframeOptions:{frameborder:"0",allowtransparency:"true",id:"",name:"",scrolling:"",onload:"",height:"",width:""}},i=[],j=a('<div class="webui-popover-backdrop"></div>'),k=0,l=!1,m=-2e3,n=a(c),o=function(a,b){return isNaN(a)?b||0:Number(a)},p=function(a){return a.data("plugin_"+e)},q=function(){for(var a=0;a<i.length;a++)i[a].webuiPopover("hide");n.trigger("hiddenAll."+g)},r=function(a){var b={x:0,y:0};if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type){var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];b.x=c.pageX,b.y=c.pageY}else("mousedown"===a.type||"mouseup"===a.type||"click"===a.type)&&(b.x=a.pageX,b.y=a.pageY);return b};d.prototype={init:function(){"click"===this.getTrigger()?this.$element.off("click touchend").on("click touchend",a.proxy(this.toggle,this)):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave click").on("mouseenter",a.proxy(this.mouseenterHandler,this)).on("mouseleave",a.proxy(this.mouseleaveHandler,this)),this._poped=!1,this._inited=!0,this._opened=!1,this._idSeed=k,this.options.backdrop&&j.appendTo(c.body).hide(),k++,"sticky"===this.getTrigger()&&this.show()},destroy:function(){for(var a=-1,b=0;b<i.length;b++)if(i[b]===this.$element){a=b;break}i.splice(a,1),this.hide(),this.$element.data("plugin_"+e,null),"click"===this.getTrigger()?this.$element.off("click"):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave"),this.$target&&this.$target.remove()},hide:function(b,c){if((b||"sticky"!==this.getTrigger())&&this._opened){c&&(c.preventDefault(),c.stopPropagation()),this.xhr&&this.options.abortXHR===!0&&(this.xhr.abort(),this.xhr=null);var d=a.Event("hide."+g);if(this.$element.trigger(d,[this.$target]),this.$target){this.$target.removeClass("in").addClass(this.getHideAnimation());var e=this;setTimeout(function(){e.$target.hide()},300)}this.options.backdrop&&j.hide(),this._opened=!1,this.$element.trigger("hidden."+g,[this.$target]),this.options.onHide&&this.options.onHide(this.$target)}},resetAutoHide:function(){var a=this,b=a.getAutoHide();b&&(a.autoHideHandler&&clearTimeout(a.autoHideHandler),a.autoHideHandler=setTimeout(function(){a.hide()},b))},toggle:function(a){a&&(a.preventDefault(),a.stopPropagation()),this[this.getTarget().hasClass("in")?"hide":"show"]()},hideAll:function(){q()},show:function(){var a=this.getTarget().removeClass().addClass(f).addClass(this._customTargetClass);this.options.multi||this.hideAll(),this._opened||(this.getCache()&&this._poped&&""!==this.content||(this.content="",this.setTitle(this.getTitle()),this.options.closeable||a.find(".close").off("click").remove(),this.isAsync()?this.setContentASync(this.options.content):this.setContent(this.getContent()),a.show()),this.displayContent(),this.options.onShow&&this.options.onShow(a),this.bindBodyEvents(),this.options.backdrop&&j.show(),this._opened=!0,this.resetAutoHide())},displayContent:function(){var b=this.getElementPosition(),d=this.getTarget().removeClass().addClass(f).addClass(this._customTargetClass),e=this.getContentElement(),h=d[0].offsetWidth,i=d[0].offsetHeight,j="bottom",k=a.Event("show."+g);this.$element.trigger(k,[d]);var l=this.$element.data("width")||this.options.width;""===l&&(l=this._defaults.width),"auto"!==l&&d.width(l);var n=this.$element.data("height")||this.options.height;""===n&&(n=this._defaults.height),"auto"!==n&&e.height(n),this.options.style&&this.$target.addClass(f+"-"+this.options.style),this.options.arrow||d.find(".arrow").remove(),d.detach().css({top:m,left:m,display:"block"}),this.getAnimation()&&d.addClass(this.getAnimation()),d.appendTo(c.body),j=this.getPlacement(b),this.$element.trigger("added."+g),this.initTargetEvents(),this.options.padding||("auto"!==this.options.height&&e.css("height",e.outerHeight()),this.$target.addClass("webui-no-padding")),h=d[0].offsetWidth,i=d[0].offsetHeight;var o=this.getTargetPositin(b,j,h,i);if(this.$target.css(o.position).addClass(j).addClass("in"),"iframe"===this.options.type){var p=d.find("iframe"),q=d.width(),r=p.parent().height();""!==this.options.iframeOptions.width&&"auto"!==this.options.iframeOptions.width&&(q=this.options.iframeOptions.width),""!==this.options.iframeOptions.height&&"auto"!==this.options.iframeOptions.height&&(r=this.options.iframeOptions.height),p.width(q).height(r)}if(this.options.arrow||this.$target.css({margin:0}),this.options.arrow){var s=this.$target.find(".arrow");s.removeAttr("style"),"left"===j||"right"===j?s.css({top:this.$target.height()/2}):("top"===j||"bottom"===j)&&s.css({left:this.$target.width()/2}),o.arrowOffset&&(-1===o.arrowOffset.left||-1===o.arrowOffset.top?s.hide():s.css(o.arrowOffset))}this._poped=!0,this.$element.trigger("shown."+g,[this.$target])},isTargetLoaded:function(){return 0===this.getTarget().find("i.glyphicon-refresh").length},getTriggerElement:function(){return this.$element},getTarget:function(){if(!this.$target){var b=e+this._idSeed;this.$target=a(this.options.template).attr("id",b).data("trigger-element",this.getTriggerElement()),this._customTargetClass=this.$target.attr("class")!==f?this.$target.attr("class"):null,this.getTriggerElement().attr("data-target",b)}return this.$target},getTitleElement:function(){return this.getTarget().find("."+f+"-title")},getContentElement:function(){return this.$contentElement||(this.$contentElement=this.getTarget().find("."+f+"-content")),this.$contentElement},getTitle:function(){return this.$element.attr("data-title")||this.options.title||this.$element.attr("title")},getUrl:function(){return this.$element.attr("data-url")||this.options.url},getAutoHide:function(){return this.$element.attr("data-auto-hide")||this.options.autoHide},getOffsetTop:function(){return o(this.$element.attr("data-offset-top"))||this.options.offsetTop},getOffsetLeft:function(){return o(this.$element.attr("data-offset-left"))||this.options.offsetLeft},getCache:function(){var a=this.$element.attr("data-cache");if("undefined"!=typeof a)switch(a.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":return!1}return this.options.cache},getTrigger:function(){return this.$element.attr("data-trigger")||this.options.trigger},getDelayShow:function(){var a=this.$element.attr("data-delay-show");return"undefined"!=typeof a?a:0===this.options.delay.show?0:this.options.delay.show||100},getHideDelay:function(){var a=this.$element.attr("data-delay-hide");return"undefined"!=typeof a?a:0===this.options.delay.hide?0:this.options.delay.hide||100},getAnimation:function(){var a=this.$element.attr("data-animation");return a||this.options.animation},getHideAnimation:function(){var a=this.getAnimation();return a?a+"-out":"out"},setTitle:function(a){var b=this.getTitleElement();a?b.html(a):b.remove()},hasContent:function(){return this.getContent()},getIframe:function(){var b=a("<iframe></iframe>").attr("src",this.getUrl()),c=this;return a.each(this._defaults.iframeOptions,function(a){"undefined"!=typeof c.options.iframeOptions[a]&&b.attr(a,c.options.iframeOptions[a])}),b},getContent:function(){if(this.getUrl())switch(this.options.type){case"iframe":this.content=this.getIframe();break;case"html":try{this.content=a(this.getUrl()),this.content.is(":visible")||this.content.show()}catch(b){throw new Error("Unable to get popover content. Invalid selector specified.")}}else if(!this.content){var c="";if(c=a.isFunction(this.options.content)?this.options.content.apply(this.$element[0],[this]):this.options.content,this.content=this.$element.attr("data-content")||c,!this.content){var d=this.$element.next();d&&d.hasClass(f+"-content")&&(this.content=d)}}return this.content},setContent:function(a){var b=this.getTarget(),c=this.getContentElement();"string"==typeof a?c.html(a):a instanceof jQuery&&(a.removeClass(f+"-content"),c.html(""),a.appendTo(c)),this.$target=b},isAsync:function(){return"async"===this.options.type},setContentASync:function(b){var c=this;this.xhr||(this.xhr=a.ajax({url:this.getUrl(),type:"GET",cache:this.getCache(),beforeSend:function(a){c.options.async.before&&c.options.async.before(c,a)},success:function(d){c.bindBodyEvents(),c.content=b&&a.isFunction(b)?b.apply(c.$element[0],[d]):d,c.setContent(c.content);var e=c.getContentElement();e.removeAttr("style"),c.displayContent(),c.options.async.success&&c.options.async.success(c,d)},complete:function(){c.xhr=null}}))},bindBodyEvents:function(){this.options.dismissible&&"click"===this.getTrigger()&&!l&&(n.off("keyup.webui-popover").on("keyup.webui-popover",a.proxy(this.escapeHandler,this)),n.off("click.webui-popover touchend.webui-popover").on("click.webui-popover touchend.webui-popover",a.proxy(this.bodyClickHandler,this)))},mouseenterHandler:function(){var a=this;a._timeout&&clearTimeout(a._timeout),a._enterTimeout=setTimeout(function(){a.getTarget().is(":visible")||a.show()},this.getDelayShow())},mouseleaveHandler:function(){var a=this;clearTimeout(a._enterTimeout),a._timeout=setTimeout(function(){a.hide()},this.getHideDelay())},escapeHandler:function(a){27===a.keyCode&&this.hideAll()},bodyClickHandler:function(a){l=!0;for(var b=!0,c=0;c<i.length;c++){var d=p(i[c]);if(d._opened){var e=d.getTarget().offset().left,f=d.getTarget().offset().top,g=d.getTarget().offset().left+d.getTarget().width(),h=d.getTarget().offset().top+d.getTarget().height(),j=r(a),k=j.x>=e&&j.x<=g&&j.y>=f&&j.y<=h;if(k){b=!1;break}}}b&&q()},initTargetEvents:function(){"hover"===this.getTrigger()&&this.$target.off("mouseenter mouseleave").on("mouseenter",a.proxy(this.mouseenterHandler,this)).on("mouseleave",a.proxy(this.mouseleaveHandler,this)),this.$target.find(".close").off("click").on("click",a.proxy(this.hide,this,!0))},getPlacement:function(a){var b,d=c.documentElement,e=c.body,f=d.clientWidth,g=d.clientHeight,h=Math.max(e.scrollTop,d.scrollTop),i=Math.max(e.scrollLeft,d.scrollLeft),j=Math.max(0,a.left-i),k=Math.max(0,a.top-h);b="function"==typeof this.options.placement?this.options.placement.call(this,this.getTarget()[0],this.$element[0]):this.$element.data("placement")||this.options.placement;var l="horizontal"===b,m="vertical"===b,n="auto"===b||l||m;return n?b=f/3>j?g/3>k?l?"right-bottom":"bottom-right":2*g/3>k?m?g/2>=k?"bottom-right":"top-right":"right":l?"right-top":"top-right":2*f/3>j?g/3>k?l?f/2>=j?"right-bottom":"left-bottom":"bottom":2*g/3>k?l?f/2>=j?"right":"left":g/2>=k?"bottom":"top":l?f/2>=j?"right-top":"left-top":"top":g/3>k?l?"left-bottom":"bottom-left":2*g/3>k?m?g/2>=k?"bottom-left":"top-left":"left":l?"left-top":"top-left":"auto-top"===b?b=f/3>j?"top-right":2*f/3>j?"top":"top-left":"auto-bottom"===b?b=f/3>j?"bottom-right":2*f/3>j?"bottom":"bottom-left":"auto-left"===b?b=g/3>k?"left-top":2*g/3>k?"left":"left-bottom":"auto-right"===b&&(b=g/3>k?"right-top":2*g/3>k?"right":"right-bottom"),b},getElementPosition:function(){return a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTargetPositin:function(a,b,d,e){var f=a,g=c.documentElement,h=c.body,i=g.clientWidth,j=g.clientHeight,k=this.$element.outerWidth(),l=this.$element.outerHeight(),n=Math.max(h.scrollTop,g.scrollTop),o=Math.max(h.scrollLeft,g.scrollLeft),p={},q=null,r=this.options.arrow?20:0,s=10,t=r+s>k?r:0,u=r+s>l?r:0,v=0,w=j+n,x=i+o,y=f.left+f.width/2-t>0,z=f.left+f.width/2+t<x,A=f.top+f.height/2-u>0,B=f.top+f.height/2+u<w;switch(b){case"bottom":p={top:f.top+f.height,left:f.left+f.width/2-d/2};break;case"top":p={top:f.top-e,left:f.left+f.width/2-d/2};break;case"left":p={top:f.top+f.height/2-e/2,left:f.left-d};break;case"right":p={top:f.top+f.height/2-e/2,left:f.left+f.width};break;case"top-right":p={top:f.top-e,left:y?f.left-t:s},q={left:y?Math.min(k,d)/2+t:m};break;case"top-left":v=z?t:-s,p={top:f.top-e,left:f.left-d+f.width+v},q={left:z?d-Math.min(k,d)/2-t:m};break;case"bottom-right":p={top:f.top+f.height,left:y?f.left-t:s},q={left:y?Math.min(k,d)/2+t:m};break;case"bottom-left":v=z?t:-s,p={top:f.top+f.height,left:f.left-d+f.width+v},q={left:z?d-Math.min(k,d)/2-t:m};break;case"right-top":v=B?u:-s,p={top:f.top-e+f.height+v,left:f.left+f.width},q={top:B?e-Math.min(l,e)/2-u:m};break;case"right-bottom":p={top:A?f.top-u:s,left:f.left+f.width},q={top:A?Math.min(l,e)/2+u:m};break;case"left-top":v=B?u:-s,p={top:f.top-e+f.height+v,left:f.left-d},q={top:B?e-Math.min(l,e)/2-u:m};break;case"left-bottom":p={top:A?f.top-u:s,left:f.left-d},q={top:A?Math.min(l,e)/2+u:m}}return p.top+=this.getOffsetTop(),p.left+=this.getOffsetLeft(),{position:p,arrowOffset:q}}},a.fn[e]=function(b,c){var f=[],g=this.each(function(){var g=a.data(this,"plugin_"+e);g?"destroy"===b?g.destroy():"string"==typeof b&&f.push(g[b]()):(b?"string"==typeof b?"destroy"!==b&&(c||(g=new d(this,null),f.push(g[b]()))):"object"==typeof b&&(g=new d(this,b)):g=new d(this,null),a.data(this,"plugin_"+e,g))});return f.length?f:g}}(jQuery,window,document);
/*webui-popover.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("webuiPopover",{mode:"default",defaults:{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}});
/*masonry.pkgd.min.js*/
/*!
 * Masonry PACKAGED v3.3.2
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){}function d(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function e(c){function e(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||f("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=c("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var g=document.body||document.documentElement;g.appendChild(e);var h=j(e);l=200===b(h.width),g.removeChild(e)}}}function h(a){if(e(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var c=j(a);if("none"===c.display)return d();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var h=f.isBorderBox=!(!k||!c[k]||"border-box"!==c[k]),m=0,n=g.length;n>m;m++){var o=g[m],p=c[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=h&&l,y=b(c.width);y!==!1&&(f.width=y+(x?0:r+v));var z=b(c.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return h}var f="undefined"==typeof console?c:function(a){console.error(a)},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],e):"object"==typeof exports?module.exports=e(require("desandro-get-style-property")):a.getSize=e(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d});
/*masonry.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("masonry",{mode:"init",defaults:{itemSelector:".masonry-item"},init:function(context){if("undefined"!=typeof $.fn.masonry){var defaults=$.components.getDefaults("masonry"),callback=function(){$('[data-plugin="masonry"]',context).each(function(){var $this=$(this),options=$.extend(!0,{},defaults,$this.data());$this.masonry(options)})};context!==document?callback():$(window).on("load",function(){callback()})}}});
/*jquery.bootstrap-touchspin.min.js*/
/*
 *  Bootstrap TouchSpin - v3.0.1
 *  A mobile and touch friendly input spinner component for Bootstrap 3.
 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */
!function(a){"use strict";function b(a,b){return a+".touchspin_"+b}function c(c,d){return a.map(c,function(a){return b(a,d)})}var d=0;a.fn.TouchSpin=function(b){if("destroy"===b)return void this.each(function(){var b=a(this),d=b.data();a(document).off(c(["mouseup","touchend","touchcancel","mousemove","touchmove","scroll","scrollstart"],d.spinnerid).join(" "))});var e={min:0,max:100,initval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,verticalbuttons:!1,verticalupclass:"glyphicon glyphicon-chevron-up",verticaldownclass:"glyphicon glyphicon-chevron-down",prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-default",buttonup_class:"btn btn-default",buttondown_txt:"-",buttonup_txt:"+"},f={min:"min",max:"max",initval:"init-val",step:"step",decimals:"decimals",stepinterval:"step-interval",verticalbuttons:"vertical-buttons",verticalupclass:"vertical-up-class",verticaldownclass:"vertical-down-class",forcestepdivisibility:"force-step-divisibility",stepintervaldelay:"step-interval-delay",prefix:"prefix",postfix:"postfix",prefix_extraclass:"prefix-extra-class",postfix_extraclass:"postfix-extra-class",booster:"booster",boostat:"boostat",maxboostedstep:"max-boosted-step",mousewheel:"mouse-wheel",buttondown_class:"button-down-class",buttonup_class:"button-up-class",buttondown_txt:"button-down-txt",buttonup_txt:"button-up-txt"};return this.each(function(){function g(){if(!J.data("alreadyinitialized")){if(J.data("alreadyinitialized",!0),d+=1,J.data("spinnerid",d),!J.is("input"))return void console.log("Must be an input.");j(),h(),u(),m(),p(),q(),r(),s(),D.input.css("display","block")}}function h(){""!==B.initval&&""===J.val()&&J.val(B.initval)}function i(a){l(a),u();var b=D.input.val();""!==b&&(b=Number(D.input.val()),D.input.val(b.toFixed(B.decimals)))}function j(){B=a.extend({},e,K,k(),b)}function k(){var b={};return a.each(f,function(a,c){var d="bts-"+c;J.is("[data-"+d+"]")&&(b[a]=J.data(d))}),b}function l(b){B=a.extend({},B,b)}function m(){var a=J.val(),b=J.parent();""!==a&&(a=Number(a).toFixed(B.decimals)),J.data("initvalue",a).val(a),J.addClass("form-control"),b.hasClass("input-group")?n(b):o()}function n(b){b.addClass("bootstrap-touchspin");var c,d,e=J.prev(),f=J.next(),g='<span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+"</span>",h='<span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+"</span>";e.hasClass("input-group-btn")?(c='<button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+"</button>",e.append(c)):(c='<span class="input-group-btn"><button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+"</button></span>",a(c).insertBefore(J)),f.hasClass("input-group-btn")?(d='<button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button>",f.prepend(d)):(d='<span class="input-group-btn"><button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button></span>",a(d).insertAfter(J)),a(g).insertBefore(J),a(h).insertAfter(J),C=b}function o(){var b;b=B.verticalbuttons?'<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+'</span><span class="input-group-btn-vertical"><button class="'+B.buttondown_class+' bootstrap-touchspin-up" type="button"><i class="'+B.verticalupclass+'"></i></button><button class="'+B.buttonup_class+' bootstrap-touchspin-down" type="button"><i class="'+B.verticaldownclass+'"></i></button></span></div>':'<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+B.buttondown_class+' bootstrap-touchspin-down" type="button">'+B.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+B.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+B.postfix+'</span><span class="input-group-btn"><button class="'+B.buttonup_class+' bootstrap-touchspin-up" type="button">'+B.buttonup_txt+"</button></span></div>",C=a(b).insertBefore(J),a(".bootstrap-touchspin-prefix",C).after(J),J.hasClass("input-sm")?C.addClass("input-group-sm"):J.hasClass("input-lg")&&C.addClass("input-group-lg")}function p(){D={down:a(".bootstrap-touchspin-down",C),up:a(".bootstrap-touchspin-up",C),input:a("input",C),prefix:a(".bootstrap-touchspin-prefix",C).addClass(B.prefix_extraclass),postfix:a(".bootstrap-touchspin-postfix",C).addClass(B.postfix_extraclass)}}function q(){""===B.prefix&&D.prefix.hide(),""===B.postfix&&D.postfix.hide()}function r(){J.on("keydown",function(a){var b=a.keyCode||a.which;38===b?("up"!==M&&(w(),z()),a.preventDefault()):40===b&&("down"!==M&&(x(),y()),a.preventDefault())}),J.on("keyup",function(a){var b=a.keyCode||a.which;38===b?A():40===b&&A()}),J.on("blur",function(){u()}),D.down.on("keydown",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&("down"!==M&&(x(),y()),a.preventDefault())}),D.down.on("keyup",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&A()}),D.up.on("keydown",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&("up"!==M&&(w(),z()),a.preventDefault())}),D.up.on("keyup",function(a){var b=a.keyCode||a.which;(32===b||13===b)&&A()}),D.down.on("mousedown.touchspin",function(a){D.down.off("touchstart.touchspin"),J.is(":disabled")||(x(),y(),a.preventDefault(),a.stopPropagation())}),D.down.on("touchstart.touchspin",function(a){D.down.off("mousedown.touchspin"),J.is(":disabled")||(x(),y(),a.preventDefault(),a.stopPropagation())}),D.up.on("mousedown.touchspin",function(a){D.up.off("touchstart.touchspin"),J.is(":disabled")||(w(),z(),a.preventDefault(),a.stopPropagation())}),D.up.on("touchstart.touchspin",function(a){D.up.off("mousedown.touchspin"),J.is(":disabled")||(w(),z(),a.preventDefault(),a.stopPropagation())}),D.up.on("mouseout touchleave touchend touchcancel",function(a){M&&(a.stopPropagation(),A())}),D.down.on("mouseout touchleave touchend touchcancel",function(a){M&&(a.stopPropagation(),A())}),D.down.on("mousemove touchmove",function(a){M&&(a.stopPropagation(),a.preventDefault())}),D.up.on("mousemove touchmove",function(a){M&&(a.stopPropagation(),a.preventDefault())}),a(document).on(c(["mouseup","touchend","touchcancel"],d).join(" "),function(a){M&&(a.preventDefault(),A())}),a(document).on(c(["mousemove","touchmove","scroll","scrollstart"],d).join(" "),function(a){M&&(a.preventDefault(),A())}),J.on("mousewheel DOMMouseScroll",function(a){if(B.mousewheel&&J.is(":focus")){var b=a.originalEvent.wheelDelta||-a.originalEvent.deltaY||-a.originalEvent.detail;a.stopPropagation(),a.preventDefault(),0>b?x():w()}})}function s(){J.on("touchspin.uponce",function(){A(),w()}),J.on("touchspin.downonce",function(){A(),x()}),J.on("touchspin.startupspin",function(){z()}),J.on("touchspin.startdownspin",function(){y()}),J.on("touchspin.stopspin",function(){A()}),J.on("touchspin.updatesettings",function(a,b){i(b)})}function t(a){switch(B.forcestepdivisibility){case"round":return(Math.round(a/B.step)*B.step).toFixed(B.decimals);case"floor":return(Math.floor(a/B.step)*B.step).toFixed(B.decimals);case"ceil":return(Math.ceil(a/B.step)*B.step).toFixed(B.decimals);default:return a}}function u(){var a,b,c;a=J.val(),""!==a&&(B.decimals>0&&"."===a||(b=parseFloat(a),isNaN(b)&&(b=0),c=b,b.toString()!==a&&(c=b),b<B.min&&(c=B.min),b>B.max&&(c=B.max),c=t(c),Number(a).toString()!==c.toString()&&(J.val(c),J.trigger("change"))))}function v(){if(B.booster){var a=Math.pow(2,Math.floor(L/B.boostat))*B.step;return B.maxboostedstep&&a>B.maxboostedstep&&(a=B.maxboostedstep,E=Math.round(E/a)*a),Math.max(B.step,a)}return B.step}function w(){u(),E=parseFloat(D.input.val()),isNaN(E)&&(E=0);var a=E,b=v();E+=b,E>B.max&&(E=B.max,J.trigger("touchspin.on.max"),A()),D.input.val(Number(E).toFixed(B.decimals)),a!==E&&J.trigger("change")}function x(){u(),E=parseFloat(D.input.val()),isNaN(E)&&(E=0);var a=E,b=v();E-=b,E<B.min&&(E=B.min,J.trigger("touchspin.on.min"),A()),D.input.val(E.toFixed(B.decimals)),a!==E&&J.trigger("change")}function y(){A(),L=0,M="down",J.trigger("touchspin.on.startspin"),J.trigger("touchspin.on.startdownspin"),H=setTimeout(function(){F=setInterval(function(){L++,x()},B.stepinterval)},B.stepintervaldelay)}function z(){A(),L=0,M="up",J.trigger("touchspin.on.startspin"),J.trigger("touchspin.on.startupspin"),I=setTimeout(function(){G=setInterval(function(){L++,w()},B.stepinterval)},B.stepintervaldelay)}function A(){switch(clearTimeout(H),clearTimeout(I),clearInterval(F),clearInterval(G),M){case"up":J.trigger("touchspin.on.stopupspin"),J.trigger("touchspin.on.stopspin");break;case"down":J.trigger("touchspin.on.stopdownspin"),J.trigger("touchspin.on.stopspin")}L=0,M=!1}var B,C,D,E,F,G,H,I,J=a(this),K=J.data(),L=0,M=!1;g()})}}(jQuery);
/*spin.min.js*/
(function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()})(this,function(){"use strict";function t(t,e){var i,n=document.createElement(t||"div");for(i in e)n[i]=e[i];return n}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,n){var r=["opacity",e,~~(100*t),i,n].join("-"),o=.01+100*(i/n),a=Math.max(1-(1-t)/e*(100-o),t),s=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return c[r]||(p.insertRule("@"+l+"keyframes "+r+"{"+"0%{opacity:"+a+"}"+o+"%{opacity:"+t+"}"+(o+.01)+"%{opacity:1}"+(o+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+a+"}"+"}",p.cssRules.length),c[r]=1),r}function n(t,e){var i,n,r=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;d.length>n;n++)if(i=d[n]+e,void 0!==r[i])return i;return void 0!==r[e]?e:void 0}function r(t,e){for(var i in e)t.style[n(t,i)||i]=e[i];return t}function o(t){for(var e=1;arguments.length>e;e++){var i=arguments[e];for(var n in i)void 0===t[n]&&(t[n]=i[n])}return t}function a(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t){this.opts=o(t||{},s.defaults,f)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}p.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(t,n){function o(){return r(i("group",{coordsize:d+" "+d,coordorigin:-u+" "+-u}),{width:d,height:d})}function s(t,s,l){e(p,e(r(o(),{rotation:360/n.lines*t+"deg",left:~~s}),e(r(i("roundrect",{arcsize:n.corners}),{width:u,height:n.width,left:n.radius,top:-n.width>>1,filter:l}),i("fill",{color:a(n.color,t),opacity:n.opacity}),i("stroke",{opacity:0}))))}var l,u=n.length+n.width,d=2*u,c=2*-(n.width+n.length)+"px",p=r(o(),{position:"absolute",top:c,left:c});if(n.shadow)for(l=1;n.lines>=l;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;n.lines>=l;l++)s(l);return e(t,p)},s.prototype.opacity=function(t,e,i,n){var r=t.firstChild;n=n.shadow&&n.lines||0,r&&r.childNodes.length>e+n&&(r=r.childNodes[e+n],r=r&&r.firstChild,r=r&&r.firstChild,r&&(r.opacity=i))}}var u,d=["webkit","Moz","ms","O"],c={},p=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};s.defaults={},o(s.prototype,{spin:function(e){this.stop();var i=this,n=i.opts,o=i.el=r(t(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex});if(n.radius+n.length+n.width,r(o,{left:n.left,top:n.top}),e&&e.insertBefore(o,e.firstChild||null),o.setAttribute("role","progressbar"),i.lines(o,i.opts),!u){var a,s=0,l=(n.lines-1)*(1-n.direction)/2,d=n.fps,c=d/n.speed,p=(1-n.opacity)/(c*n.trail/100),f=c/n.lines;(function h(){s++;for(var t=0;n.lines>t;t++)a=Math.max(1-(s+(n.lines-t)*f)%c*p,n.opacity),i.opacity(o,t*n.direction+l,a,n);i.timeout=i.el&&setTimeout(h,~~(1e3/d))})()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(n,o){function s(e,i){return r(t(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*d+o.rotate)+"deg) translate("+o.radius+"px"+",0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var l,d=0,c=(o.lines-1)*(1-o.direction)/2;o.lines>d;d++)l=r(t(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:u&&i(o.opacity,o.trail,c+d*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&e(l,r(s("#000","0 0 4px #000"),{top:"2px"})),e(n,e(l,s(a(o.color,d),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(t,e,i){t.childNodes.length>e&&(t.childNodes[e].style.opacity=i)}});var h=r(t("group"),{behavior:"url(#default#VML)"});return!n(h,"transform")&&h.adj?l():u=n(h,"animation"),s});
/*ladda.min.js*/
/*!
 * Ladda 0.9.4 (2014-06-21, 11:24)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2014 Hakim El Hattab, http://hakim.se
 */
(function(t,e){"object"==typeof exports?module.exports=e(require("spin.js")):"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)})(this,function(t){"use strict";function e(t){if(t===void 0)return console.warn("Ladda button target must be defined."),void 0;t.querySelector(".ladda-label")||(t.innerHTML='<span class="ladda-label">'+t.innerHTML+"</span>");var e,n=document.createElement("span");n.className="ladda-spinner",t.appendChild(n);var r,a={start:function(){return e||(e=o(t)),t.setAttribute("disabled",""),t.setAttribute("data-loading",""),clearTimeout(r),e.spin(n),this.setProgress(0),this},startAfter:function(t){return clearTimeout(r),r=setTimeout(function(){a.start()},t),this},stop:function(){return t.removeAttribute("disabled"),t.removeAttribute("data-loading"),clearTimeout(r),e&&(r=setTimeout(function(){e.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(e){e=Math.max(Math.min(e,1),0);var n=t.querySelector(".ladda-progress");0===e&&n&&n.parentNode?n.parentNode.removeChild(n):(n||(n=document.createElement("div"),n.className="ladda-progress",t.appendChild(n)),n.style.width=(e||0)*t.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),t.setAttribute("disabled",""),this},isLoading:function(){return t.hasAttribute("data-loading")},remove:function(){clearTimeout(r),t.removeAttribute("disabled",""),t.removeAttribute("data-loading",""),e&&(e.stop(),e=null);for(var n=0,i=u.length;i>n;n++)if(a===u[n]){u.splice(n,1);break}}};return u.push(a),a}function n(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}function r(t){for(var e=["input","textarea"],n=[],r=0;e.length>r;r++)for(var a=t.getElementsByTagName(e[r]),i=0;a.length>i;i++)a[i].hasAttribute("required")&&n.push(a[i]);return n}function a(t,a){a=a||{};var i=[];"string"==typeof t?i=s(document.querySelectorAll(t)):"object"==typeof t&&"string"==typeof t.nodeName&&(i=[t]);for(var o=0,u=i.length;u>o;o++)(function(){var t=i[o];if("function"==typeof t.addEventListener){var s=e(t),u=-1;t.addEventListener("click",function(){var e=!0,i=n(t,"FORM");if(i!==void 0)for(var o=r(i),d=0;o.length>d;d++)""===o[d].value.replace(/^\s+|\s+$/g,"")&&(e=!1);e&&(s.startAfter(1),"number"==typeof a.timeout&&(clearTimeout(u),u=setTimeout(s.stop,a.timeout)),"function"==typeof a.callback&&a.callback.apply(null,[s]))},!1)}})()}function i(){for(var t=0,e=u.length;e>t;t++)u[t].stop()}function o(e){var n,r=e.offsetHeight;0===r&&(r=parseFloat(window.getComputedStyle(e).height)),r>32&&(r*=.8),e.hasAttribute("data-spinner-size")&&(r=parseInt(e.getAttribute("data-spinner-size"),10)),e.hasAttribute("data-spinner-color")&&(n=e.getAttribute("data-spinner-color"));var a=12,i=.2*r,o=.6*i,s=7>i?2:3;return new t({color:n||"#fff",lines:a,radius:i,length:o,width:s,zIndex:"auto",top:"auto",left:"auto",className:""})}function s(t){for(var e=[],n=0;t.length>n;n++)e.push(t[n]);return e}var u=[];return{bind:a,create:e,stopAll:i}});
/*ladda-bootstrap.min.js*/
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2015 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
$.components.register("ladda",{mode:"init",defaults:{timeout:2e3},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("ladda");Ladda.bind('[data-plugin="ladda"]',defaults)}}}),$.components.register("laddaProgress",{mode:"init",defaults:{init:function(instance){var progress=0,interval=setInterval(function(){progress=Math.min(progress+.1*Math.random(),1),instance.setProgress(progress),1===progress&&(instance.stop(),clearInterval(interval))},200)}},init:function(){if("undefined"!=typeof Ladda){var defaults=$.components.getDefaults("laddaProgress");Ladda.bind('[data-plugin="laddaProgress"]',defaults)}}});
/*tablesaw.js*/
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
/*
* tablesaw: A set of plugins for responsive tables
* Stack and Column Toggle tables
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/

if( typeof Tablesaw === "undefined" ) {
	Tablesaw = {
		i18n: {
			modes: [ 'Stack', 'Swipe', 'Toggle' ],
			columns: 'Col<span class=\"a11y-sm\">umn</span>s',
			columnBtnText: 'Columns',
			columnsDialogError: 'No eligible columns.',
			sort: 'Sort'
		},
		// cut the mustard
		mustard: 'querySelector' in document &&
			( !window.blackberry || window.WebKitPoint ) &&
			!window.operamini
	};
}
if( !Tablesaw.config ) {
	Tablesaw.config = {};
}
if( Tablesaw.mustard ) {
	jQuery( document.documentElement ).addClass( 'tablesaw-enhanced' );
}

;(function( $ ) {
	var pluginName = "table",
		classes = {
			toolbar: "tablesaw-bar"
		},
		events = {
			create: "tablesawcreate",
			destroy: "tablesawdestroy",
			refresh: "tablesawrefresh"
		},
		defaultMode = "stack",
		initSelector = "table[data-tablesaw-mode],table[data-tablesaw-sortable]";

	var Table = function( element ) {
		if( !element ) {
			throw new Error( "Tablesaw requires an element." );
		}

		this.table = element;
		this.$table = $( element );

		this.mode = this.$table.attr( "data-tablesaw-mode" ) || defaultMode;

		this.init();
	};

	Table.prototype.init = function() {
		// assign an id if there is none
		if ( !this.$table.attr( "id" ) ) {
			this.$table.attr( "id", pluginName + "-" + Math.round( Math.random() * 10000 ) );
		}

		this.createToolbar();

		var colstart = this._initCells();

		this.$table.trigger( events.create, [ this, colstart ] );
	};

	Table.prototype._initCells = function() {
		var colstart,
			thrs = this.table.querySelectorAll( "thead tr" ),
			self = this;

		$( thrs ).each( function(){
			var coltally = 0;

			$( this ).children().each( function(){
				var span = parseInt( this.getAttribute( "colspan" ), 10 ),
					sel = ":nth-child(" + ( coltally + 1 ) + ")";

				colstart = coltally + 1;

				if( span ){
					for( var k = 0; k < span - 1; k++ ){
						coltally++;
						sel += ", :nth-child(" + ( coltally + 1 ) + ")";
					}
				}

				// Store "cells" data on header as a reference to all cells in the same column as this TH
				this.cells = self.$table.find("tr").not( thrs[0] ).not( this ).children().filter( sel );
				coltally++;
			});
		});

		return colstart;
	};

	Table.prototype.refresh = function() {
		this._initCells();

		this.$table.trigger( events.refresh );
	};

	Table.prototype.createToolbar = function() {
		// Insert the toolbar
		// TODO move this into a separate component
		var $toolbar = this.$table.prev().filter( '.' + classes.toolbar );
		if( !$toolbar.length ) {
			$toolbar = $( '<div>' )
				.addClass( classes.toolbar )
				.insertBefore( this.$table );
		}
		this.$toolbar = $toolbar;

		if( this.mode ) {
			this.$toolbar.addClass( 'mode-' + this.mode );
		}
	};

	Table.prototype.destroy = function() {
		// Don’t remove the toolbar. Some of the table features are not yet destroy-friendly.
		this.$table.prev().filter( '.' + classes.toolbar ).each(function() {
			this.className = this.className.replace( /\bmode\-\w*\b/gi, '' );
		});

		var tableId = this.$table.attr( 'id' );
		$( document ).unbind( "." + tableId );
		$( window ).unbind( "." + tableId );

		// other plugins
		this.$table.trigger( events.destroy, [ this ] );

		this.$table.removeAttr( 'data-tablesaw-mode' );

		this.$table.removeData( pluginName );
	};

	// Collection method.
	$.fn[ pluginName ] = function() {
		return this.each( function() {
			var $t = $( this );

			if( $t.data( pluginName ) ){
				return;
			}

			var table = new Table( this );
			$t.data( pluginName, table );
		});
	};

	$( document ).on( "enhance.tablesaw", function( e ) {
		// Cut the mustard
		if( Tablesaw.mustard ) {
			$( e.target ).find( initSelector )[ pluginName ]();
		}
	});

}( jQuery ));

;(function( win, $, undefined ){

	var classes = {
		stackTable: 'tablesaw-stack',
		cellLabels: 'tablesaw-cell-label',
		cellContentLabels: 'tablesaw-cell-content'
	};

	var data = {
		obj: 'tablesaw-stack'
	};

	var attrs = {
		labelless: 'data-tablesaw-no-labels',
		hideempty: 'data-tablesaw-hide-empty'
	};

	var Stack = function( element ) {

		this.$table = $( element );

		this.labelless = this.$table.is( '[' + attrs.labelless + ']' );
		this.hideempty = this.$table.is( '[' + attrs.hideempty + ']' );

		if( !this.labelless ) {
			// allHeaders references headers, plus all THs in the thead, which may include several rows, or not
			this.allHeaders = this.$table.find( "th" );
		}

		this.$table.data( data.obj, this );
	};

	Stack.prototype.init = function( colstart ) {
		this.$table.addClass( classes.stackTable );

		if( this.labelless ) {
			return;
		}

		// get headers in reverse order so that top-level headers are appended last
		var reverseHeaders = $( this.allHeaders );
		var hideempty = this.hideempty;
		
		// create the hide/show toggles
		reverseHeaders.each(function(){
			var $t = $( this ),
				$cells = $( this.cells ).filter(function() {
					return !$( this ).parent().is( "[" + attrs.labelless + "]" ) && ( !hideempty || !$( this ).is( ":empty" ) );
				}),
				hierarchyClass = $cells.not( this ).filter( "thead th" ).length && " tablesaw-cell-label-top",
				// TODO reduce coupling with sortable
				$sortableButton = $t.find( ".tablesaw-sortable-btn" ),
				html = $sortableButton.length ? $sortableButton.html() : $t.html();

			if( html !== "" ){
				if( hierarchyClass ){
					var iteration = parseInt( $( this ).attr( "colspan" ), 10 ),
						filter = "";

					if( iteration ){
						filter = "td:nth-child("+ iteration +"n + " + ( colstart ) +")";
					}
					$cells.filter( filter ).prepend( "<b class='" + classes.cellLabels + hierarchyClass + "'>" + html + "</b>"  );
				} else {
					$cells.wrapInner( "<span class='" + classes.cellContentLabels + "'></span>" );
					$cells.prepend( "<b class='" + classes.cellLabels + "'>" + html + "</b>"  );
				}
			}
		});
	};

	Stack.prototype.destroy = function() {
		this.$table.removeClass( classes.stackTable );
		this.$table.find( '.' + classes.cellLabels ).remove();
		this.$table.find( '.' + classes.cellContentLabels ).each(function() {
			$( this ).replaceWith( this.childNodes );
		});
	};

	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw, colstart ){
		if( Tablesaw.mode === 'stack' ){
			var table = new Stack( Tablesaw.table );
			table.init( colstart );
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){

		if( Tablesaw.mode === 'stack' ){
			$( Tablesaw.table ).data( data.obj ).destroy();
		}

	} );

}( this, jQuery ));
;(function( $ ) {
	var pluginName = "tablesawbtn",
		methods = {
			_create: function(){
				return $( this ).each(function() {
					$( this )
						.trigger( "beforecreate." + pluginName )
						[ pluginName ]( "_init" )
						.trigger( "create." + pluginName );
				});
			},
			_init: function(){
				var oEl = $( this ),
					sel = this.getElementsByTagName( "select" )[ 0 ];

				if( sel ) {
					$( this )
						.addClass( "btn-select" )
						[ pluginName ]( "_select", sel );
				}
				return oEl;
			},
			_select: function( sel ) {
				var update = function( oEl, sel ) {
					var opts = $( sel ).find( "option" ),
						label, el, children;

					opts.each(function() {
						var opt = this;
						if( opt.selected ) {
							label = document.createTextNode( opt.text );
						}
					});

					children = oEl.childNodes;
					if( opts.length > 0 ){
						for( var i = 0, l = children.length; i < l; i++ ) {
							el = children[ i ];

							if( el && el.nodeType === 3 ) {
								oEl.replaceChild( label, el );
							}
						}
					}
				};

				update( this, sel );
				$( this ).bind( "change refresh", function() {
					update( this, sel );
				});
			}
		};

	// Collection method.
	$.fn[ pluginName ] = function( arrg, a, b, c ) {
		return this.each(function() {

		// if it's a method
		if( arrg && typeof( arrg ) === "string" ){
			return $.fn[ pluginName ].prototype[ arrg ].call( this, a, b, c );
		}

		// don't re-init
		if( $( this ).data( pluginName + "active" ) ){
			return $( this );
		}

		// otherwise, init

		$( this ).data( pluginName + "active", true );
			$.fn[ pluginName ].prototype._create.call( this );
		});
	};

	// add methods
	$.extend( $.fn[ pluginName ].prototype, methods );

}( jQuery ));
;(function( win, $, undefined ){

	var ColumnToggle = function( element ) {

		this.$table = $( element );

		this.classes = {
			columnToggleTable: 'tablesaw-columntoggle',
			columnBtnContain: 'tablesaw-columntoggle-btnwrap tablesaw-advance',
			columnBtn: 'tablesaw-columntoggle-btn tablesaw-nav-btn down',
			popup: 'tablesaw-columntoggle-popup',
			priorityPrefix: 'tablesaw-priority-',
			// TODO duplicate class, also in tables.js
			toolbar: 'tablesaw-bar'
		};

		// Expose headers and allHeaders properties on the widget
		// headers references the THs within the first TR in the table
		this.headers = this.$table.find( 'tr:first > th' );

		this.$table.data( 'tablesaw-coltoggle', this );
	};

	ColumnToggle.prototype.init = function() {

		var tableId,
			id,
			$menuButton,
			$popup,
			$menu,
			$btnContain,
			self = this;

		this.$table.addClass( this.classes.columnToggleTable );

		tableId = this.$table.attr( "id" );
		id = tableId + "-popup";
		$btnContain = $( "<div class='" + this.classes.columnBtnContain + "'></div>" );
		$menuButton = $( "<a href='#" + id + "' class='btn btn-micro " + this.classes.columnBtn +"' data-popup-link>" +
										"<span>" + Tablesaw.i18n.columnBtnText + "</span></a>" );
		$popup = $( "<div class='dialog-table-coltoggle " + this.classes.popup + "' id='" + id + "'></div>" );
		$menu = $( "<div class='btn-group'></div>" );

		var hasNonPersistentHeaders = false;
		$( this.headers ).not( "td" ).each( function() {
			var $this = $( this ),
				priority = $this.attr("data-tablesaw-priority"),
				$cells = self.$getCells( this );

			if( priority && priority !== "persist" ) {
				$cells.addClass( self.classes.priorityPrefix + priority );

				$("<label><input type='checkbox' checked>" + $this.text() + "</label>" )
					.appendTo( $menu )
					.children( 0 )
					.data( "tablesaw-header", this );

				hasNonPersistentHeaders = true;
			}
		});

		if( !hasNonPersistentHeaders ) {
			$menu.append( '<label>' + Tablesaw.i18n.columnsDialogError + '</label>' );
		}

		$menu.appendTo( $popup );

		// bind change event listeners to inputs - TODO: move to a private method?
		$menu.find( 'input[type="checkbox"]' ).on( "change", function(e) {
			var checked = e.target.checked;

			self.$getCellsFromCheckbox( e.target )
				.toggleClass( "tablesaw-cell-hidden", !checked )
				.toggleClass( "tablesaw-cell-visible", checked );

			self.$table.trigger( 'tablesawcolumns' );
		});

		$menuButton.appendTo( $btnContain );
		$btnContain.appendTo( this.$table.prev().filter( '.' + this.classes.toolbar ) );

		var closeTimeout;
		function openPopup() {
			$btnContain.addClass( 'visible' );
			$menuButton.removeClass( 'down' ).addClass( 'up' );

			$( document ).unbind( 'click.' + tableId, closePopup );

			window.clearTimeout( closeTimeout );
			closeTimeout = window.setTimeout(function() {
				$( document ).one( 'click.' + tableId, closePopup );
			}, 15 );
		}

		function closePopup( event ) {
			// Click came from inside the popup, ignore.
			if( event && $( event.target ).closest( "." + self.classes.popup ).length ) {
				return;
			}

			$( document ).unbind( 'click.' + tableId );
			$menuButton.removeClass( 'up' ).addClass( 'down' );
			$btnContain.removeClass( 'visible' );
		}

		$menuButton.on( "click.tablesaw", function( event ) {
			event.preventDefault();

			if( !$btnContain.is( ".visible" ) ) {
				openPopup();
			} else {
				closePopup();
			}
		});

		$popup.appendTo( $btnContain );

		this.$menu = $menu;

		$(window).on( "resize." + tableId, function(){
			self.refreshToggle();
		});

		this.refreshToggle();
	};

	ColumnToggle.prototype.$getCells = function( th ) {
		return $( th ).add( th.cells );
	};

	ColumnToggle.prototype.$getCellsFromCheckbox = function( checkbox ) {
		var th = $( checkbox ).data( "tablesaw-header" );
		return this.$getCells( th );
	};

	ColumnToggle.prototype.refreshToggle = function() {
		var self = this;
		this.$menu.find( "input" ).each( function() {
			this.checked = self.$getCellsFromCheckbox( this ).eq( 0 ).css( "display" ) === "table-cell";
		});
	};

	ColumnToggle.prototype.refreshPriority = function(){
		var self = this;
		$(this.headers).not( "td" ).each( function() {
			var $this = $( this ),
				priority = $this.attr("data-tablesaw-priority"),
				$cells = $this.add( this.cells );

			if( priority && priority !== "persist" ) {
				$cells.addClass( self.classes.priorityPrefix + priority );
			}
		});
	};

	ColumnToggle.prototype.destroy = function() {
		// table toolbars, document and window .tableId events
		// removed in parent tables.js destroy method

		this.$table.removeClass( this.classes.columnToggleTable );
		this.$table.find( 'th, td' ).each(function() {
			var $cell = $( this );
			$cell.removeClass( 'tablesaw-cell-hidden' )
				.removeClass( 'tablesaw-cell-visible' );

			this.className = this.className.replace( /\bui\-table\-priority\-\d\b/g, '' );
		});
	};

	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( Tablesaw.mode === 'columntoggle' ){
			var table = new ColumnToggle( Tablesaw.table );
			table.init();
		}

	} );

	$( document ).on( "tablesawdestroy", function( e, Tablesaw ){
		if( Tablesaw.mode === 'columntoggle' ){
			$( Tablesaw.table ).data( 'tablesaw-coltoggle' ).destroy();
		}
	} );

}( this, jQuery ));
;(function( win, $, undefined ){

	$.extend( Tablesaw.config, {
		swipe: {
			horizontalThreshold: 15,
			verticalThreshold: 30
		}
	});

	function isIE8() {
		var div = document.createElement('div'),
			all = div.getElementsByTagName('i');

		div.innerHTML = '<!--[if lte IE 8]><i></i><![endif]-->';

		return !!all.length;
	}

	function createSwipeTable( $table ){

		var $btns = $( "<div class='tablesaw-advance'></div>" ),
			$prevBtn = $( "<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>" ).appendTo( $btns ),
			$nextBtn = $( "<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>" ).appendTo( $btns ),
			hideBtn = 'disabled',
			persistWidths = 'tablesaw-fix-persist',
			$headerCells = $table.find( "thead th" ),
			$headerCellsNoPersist = $headerCells.not( '[data-tablesaw-priority="persist"]' ),
			headerWidths = [],
			$head = $( document.head || 'head' ),
			tableId = $table.attr( 'id' ),
			// TODO switch this to an nth-child feature test
			supportsNthChild = !isIE8();

		if( !$headerCells.length ) {
			throw new Error( "tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?" );
		}

		// Calculate initial widths
		$table.css('width', 'auto');
		$headerCells.each(function() {
			headerWidths.push( $( this ).outerWidth() );
		});
		$table.css( 'width', '' );

		$btns.appendTo( $table.prev().filter( '.tablesaw-bar' ) );

		$table.addClass( "tablesaw-swipe" );

		if( !tableId ) {
			tableId = 'tableswipe-' + Math.round( Math.random() * 10000 );
			$table.attr( 'id', tableId );
		}

		function $getCells( headerCell ) {
			return $( headerCell.cells ).add( headerCell );
		}

		function showColumn( headerCell ) {
			$getCells( headerCell ).removeClass( 'tablesaw-cell-hidden' );
		}

		function hideColumn( headerCell ) {
			$getCells( headerCell ).addClass( 'tablesaw-cell-hidden' );
		}

		function persistColumn( headerCell ) {
			$getCells( headerCell ).addClass( 'tablesaw-cell-persist' );
		}

		function isPersistent( headerCell ) {
			return $( headerCell ).is( '[data-tablesaw-priority="persist"]' );
		}

		function unmaintainWidths() {
			$table.removeClass( persistWidths );
			$( '#' + tableId + '-persist' ).remove();
		}

		function maintainWidths() {
			var prefix = '#' + tableId + '.tablesaw-swipe ',
				styles = [],
				tableWidth = $table.width(),
				hash = [],
				newHash;

			$headerCells.each(function( index ) {
				var width;
				if( isPersistent( this ) ) {
					width = $( this ).outerWidth();

					// Only save width on non-greedy columns (take up less than 75% of table width)
					if( width < tableWidth * 0.75 ) {
						hash.push( index + '-' + width );
						styles.push( prefix + ' .tablesaw-cell-persist:nth-child(' + ( index + 1 ) + ') { width: ' + width + 'px; }' );
					}
				}
			});
			newHash = hash.join( '_' );

			$table.addClass( persistWidths );

			var $style = $( '#' + tableId + '-persist' );
			// If style element not yet added OR if the widths have changed
			if( !$style.length || $style.data( 'hash' ) !== newHash ) {
				// Remove existing
				$style.remove();

				if( styles.length ) {
					$( '<style>' + styles.join( "\n" ) + '</style>' )
						.attr( 'id', tableId + '-persist' )
						.data( 'hash', newHash )
						.appendTo( $head );
				}
			}
		}

		function getNext(){
			var next = [],
				checkFound;

			$headerCellsNoPersist.each(function( i ) {
				var $t = $( this ),
					isHidden = $t.css( "display" ) === "none" || $t.is( ".tablesaw-cell-hidden" );

				if( !isHidden && !checkFound ) {
					checkFound = true;
					next[ 0 ] = i;
				} else if( isHidden && checkFound ) {
					next[ 1 ] = i;

					return false;
				}
			});

			return next;
		}

		function getPrev(){
			var next = getNext();
			return [ next[ 1 ] - 1 , next[ 0 ] - 1 ];
		}

		function nextpair( fwd ){
			return fwd ? getNext() : getPrev();
		}

		function canAdvance( pair ){
			return pair[ 1 ] > -1 && pair[ 1 ] < $headerCellsNoPersist.length;
		}

		function matchesMedia() {
			var matchMedia = $table.attr( "data-tablesaw-swipe-media" );
			return !matchMedia || ( "matchMedia" in win ) && win.matchMedia( matchMedia ).matches;
		}

		function fakeBreakpoints() {
			if( !matchesMedia() ) {
				return;
			}

			var extraPaddingPixels = 20,
				containerWidth = $table.parent().width(),
				persist = [],
				sum = 0,
				sums = [],
				visibleNonPersistantCount = $headerCells.length;

			$headerCells.each(function( index ) {
				var $t = $( this ),
					isPersist = $t.is( '[data-tablesaw-priority="persist"]' );

				persist.push( isPersist );

				sum += headerWidths[ index ] + ( isPersist ? 0 : extraPaddingPixels );
				sums.push( sum );

				// is persistent or is hidden
				if( isPersist || sum > containerWidth ) {
					visibleNonPersistantCount--;
				}
			});

			var needsNonPersistentColumn = visibleNonPersistantCount === 0;

			$headerCells.each(function( index ) {
				if( persist[ index ] ) {

					// for visual box-shadow
					persistColumn( this );
					return;
				}

				if( sums[ index ] <= containerWidth || needsNonPersistentColumn ) {
					needsNonPersistentColumn = false;
					showColumn( this );
				} else {
					hideColumn( this );
				}
			});

			if( supportsNthChild ) {
				unmaintainWidths();
			}
			$table.trigger( 'tablesawcolumns' );
		}

		function advance( fwd ){
			var pair = nextpair( fwd );
			if( canAdvance( pair ) ){
				if( isNaN( pair[ 0 ] ) ){
					if( fwd ){
						pair[0] = 0;
					}
					else {
						pair[0] = $headerCellsNoPersist.length - 1;
					}
				}

				if( supportsNthChild ) {
					maintainWidths();
				}

				hideColumn( $headerCellsNoPersist.get( pair[ 0 ] ) );
				showColumn( $headerCellsNoPersist.get( pair[ 1 ] ) );

				$table.trigger( 'tablesawcolumns' );
			}
		}

		$prevBtn.add( $nextBtn ).click(function( e ){
			advance( !!$( e.target ).closest( $nextBtn ).length );
			e.preventDefault();
		});

		function getCoord( event, key ) {
			return ( event.touches || event.originalEvent.touches )[ 0 ][ key ];
		}

		$table
			.bind( "touchstart.swipetoggle", function( e ){
				var originX = getCoord( e, 'pageX' ),
					originY = getCoord( e, 'pageY' ),
					x,
					y;

				$( win ).off( "resize", fakeBreakpoints );

				$( this )
					.bind( "touchmove", function( e ){
						x = getCoord( e, 'pageX' );
						y = getCoord( e, 'pageY' );
						var cfg = Tablesaw.config.swipe;
						if( Math.abs( x - originX ) > cfg.horizontalThreshold && Math.abs( y - originY ) < cfg.verticalThreshold ) {
							e.preventDefault();
						}
					})
					.bind( "touchend.swipetoggle", function(){
						var cfg = Tablesaw.config.swipe;
						if( Math.abs( y - originY ) < cfg.verticalThreshold ) {
							if( x - originX < -1 * cfg.horizontalThreshold ){
								advance( true );
							}
							if( x - originX > cfg.horizontalThreshold ){
								advance( false );
							}
						}

						window.setTimeout(function() {
							$( win ).on( "resize", fakeBreakpoints );
						}, 300);
						$( this ).unbind( "touchmove touchend" );
					});

			})
			.bind( "tablesawcolumns.swipetoggle", function(){
				$prevBtn[ canAdvance( getPrev() ) ? "removeClass" : "addClass" ]( hideBtn );
				$nextBtn[ canAdvance( getNext() ) ? "removeClass" : "addClass" ]( hideBtn );
			})
			.bind( "tablesawnext.swipetoggle", function(){
				advance( true );
			} )
			.bind( "tablesawprev.swipetoggle", function(){
				advance( false );
			} )
			.bind( "tablesawdestroy.swipetoggle", function(){
				var $t = $( this );

				$t.removeClass( 'tablesaw-swipe' );
				$t.prev().filter( '.tablesaw-bar' ).find( '.tablesaw-advance' ).remove();
				$( win ).off( "resize", fakeBreakpoints );

				$t.unbind( ".swipetoggle" );
			});

		fakeBreakpoints();
		$( win ).on( "resize", fakeBreakpoints );
	}



	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( Tablesaw.mode === 'swipe' ){
			createSwipeTable( Tablesaw.$table );
		}

	} );

}( this, jQuery ));

;(function( $ ) {
	function getSortValue( cell ) {
		return $.map( cell.childNodes, function( el ) {
				var $el = $( el );
				if( $el.is( 'input, select' ) ) {
					return $el.val();
				} else if( $el.hasClass( 'tablesaw-cell-label' ) ) {
					return;
				}
				return $.trim( $el.text() );
			}).join( '' );
	}

	var pluginName = "tablesaw-sortable",
		initSelector = "table[data-" + pluginName + "]",
		sortableSwitchSelector = "[data-" + pluginName + "-switch]",
		attrs = {
			defaultCol: "data-tablesaw-sortable-default-col",
			numericCol: "data-tablesaw-sortable-numeric"
		},
		classes = {
			head: pluginName + "-head",
			ascend: pluginName + "-ascending",
			descend: pluginName + "-descending",
			switcher: pluginName + "-switch",
			tableToolbar: 'tablesaw-toolbar',
			sortButton: pluginName + "-btn"
		},
		methods = {
			_create: function( o ){
				return $( this ).each(function() {
					var init = $( this ).data( "init" + pluginName );
					if( init ) {
						return false;
					}
					$( this )
						.data( "init"+ pluginName, true )
						.trigger( "beforecreate." + pluginName )
						[ pluginName ]( "_init" , o )
						.trigger( "create." + pluginName );
				});
			},
			_init: function(){
				var el = $( this ),
					heads,
					$switcher;

				var addClassToTable = function(){
						el.addClass( pluginName );
					},
					addClassToHeads = function( h ){
						$.each( h , function( i , v ){
							$( v ).addClass( classes.head );
						});
					},
					makeHeadsActionable = function( h , fn ){
						$.each( h , function( i , v ){
							var b = $( "<button class='" + classes.sortButton + "'/>" );
							b.bind( "click" , { col: v } , fn );
							$( v ).wrapInner( b );
						});
					},
					clearOthers = function( sibs ){
						$.each( sibs , function( i , v ){
							var col = $( v );
							col.removeAttr( attrs.defaultCol );
							col.removeClass( classes.ascend );
							col.removeClass( classes.descend );
						});
					},
					headsOnAction = function( e ){
						if( $( e.target ).is( 'a[href]' ) ) {
							return;
						}

						e.stopPropagation();
						var head = $( this ).parent(),
							v = e.data.col,
							newSortValue = heads.index( head );

						clearOthers( head.siblings() );
						if( head.hasClass( classes.descend ) ){
							el[ pluginName ]( "sortBy" , v , true);
							newSortValue += '_asc';
						} else {
							el[ pluginName ]( "sortBy" , v );
							newSortValue += '_desc';
						}
						if( $switcher ) {
							$switcher.find( 'select' ).val( newSortValue ).trigger( 'refresh' );
						}

						e.preventDefault();
					},
					handleDefault = function( heads ){
						$.each( heads , function( idx , el ){
							var $el = $( el );
							if( $el.is( "[" + attrs.defaultCol + "]" ) ){
								if( !$el.hasClass( classes.descend ) ) {
									$el.addClass( classes.ascend );
								}
							}
						});
					},
					addSwitcher = function( heads ){
						$switcher = $( '<div>' ).addClass( classes.switcher ).addClass( classes.tableToolbar ).html(function() {
							var html = [ '<label>' + Tablesaw.i18n.sort + ':' ];

							html.push( '<span class="btn btn-small">&#160;<select>' );
							heads.each(function( j ) {
								var $t = $( this );
								var isDefaultCol = $t.is( "[" + attrs.defaultCol + "]" );
								var isDescending = $t.hasClass( classes.descend );

								var hasNumericAttribute = $t.is( '[data-sortable-numeric]' );
								var numericCount = 0;
								// Check only the first four rows to see if the column is numbers.
								var numericCountMax = 5;

								$( this.cells ).slice( 0, numericCountMax ).each(function() {
									if( !isNaN( parseInt( getSortValue( this ), 10 ) ) ) {
										numericCount++;
									}
								});
								var isNumeric = numericCount === numericCountMax;
								if( !hasNumericAttribute ) {
									$t.attr( "data-sortable-numeric", isNumeric ? "" : "false" );
								}

								html.push( '<option' + ( isDefaultCol && !isDescending ? ' selected' : '' ) + ' value="' + j + '_asc">' + $t.text() + ' ' + ( isNumeric ? '&#x2191;' : '(A-Z)' ) + '</option>' );
								html.push( '<option' + ( isDefaultCol && isDescending ? ' selected' : '' ) + ' value="' + j + '_desc">' + $t.text() + ' ' + ( isNumeric ? '&#x2193;' : '(Z-A)' ) + '</option>' );
							});
							html.push( '</select></span></label>' );

							return html.join('');
						});

						var $toolbar = el.prev().filter( '.tablesaw-bar' ),
							$firstChild = $toolbar.children().eq( 0 );

						if( $firstChild.length ) {
							$switcher.insertBefore( $firstChild );
						} else {
							$switcher.appendTo( $toolbar );
						}
						$switcher.find( '.btn' ).tablesawbtn();
						$switcher.find( 'select' ).on( 'change', function() {
							var val = $( this ).val().split( '_' ),
								head = heads.eq( val[ 0 ] );

							clearOthers( head.siblings() );
							el[ pluginName ]( 'sortBy', head.get( 0 ), val[ 1 ] === 'asc' );
						});
					};

					addClassToTable();
					heads = el.find( "thead th[data-" + pluginName + "-col]" );
					addClassToHeads( heads );
					makeHeadsActionable( heads , headsOnAction );
					handleDefault( heads );

					if( el.is( sortableSwitchSelector ) ) {
						addSwitcher( heads, el.find('tbody tr:nth-child(-n+3)') );
					}
			},
			getColumnNumber: function( col ){
				return $( col ).prevAll().length;
			},
			getTableRows: function(){
				return $( this ).find( "tbody tr" );
			},
			sortRows: function( rows , colNum , ascending, col ){
				var cells, fn, sorted;
				var getCells = function( rows ){
						var cells = [];
						$.each( rows , function( i , r ){
							var element = $( r ).children().get( colNum );
							cells.push({
								element: element,
								cell: getSortValue( element ),
								rowNum: i
							});
						});
						return cells;
					},
					getSortFxn = function( ascending, forceNumeric ){
						var fn,
							regex = /[^\-\+\d\.]/g;
						if( ascending ){
							fn = function( a , b ){
								if( forceNumeric ) {
									return parseFloat( a.cell.replace( regex, '' ) ) - parseFloat( b.cell.replace( regex, '' ) );
								} else {
									return a.cell.toLowerCase() > b.cell.toLowerCase() ? 1 : -1;
								}
							};
						} else {
							fn = function( a , b ){
								if( forceNumeric ) {
									return parseFloat( b.cell.replace( regex, '' ) ) - parseFloat( a.cell.replace( regex, '' ) );
								} else {
									return a.cell.toLowerCase() < b.cell.toLowerCase() ? 1 : -1;
								}
							};
						}
						return fn;
					},
					applyToRows = function( sorted , rows ){
						var newRows = [], i, l, cur;
						for( i = 0, l = sorted.length ; i < l ; i++ ){
							cur = sorted[ i ].rowNum;
							newRows.push( rows[cur] );
						}
						return newRows;
					};

				cells = getCells( rows );
				var customFn = $( col ).data( 'tablesaw-sort' );
				fn = ( customFn && typeof customFn === "function" ? customFn( ascending ) : false ) ||
					getSortFxn( ascending, $( col ).is( '[data-sortable-numeric]' ) && !$( col ).is( '[data-sortable-numeric="false"]' ) );
				sorted = cells.sort( fn );
				rows = applyToRows( sorted , rows );
				return rows;
			},
			replaceTableRows: function( rows ){
				var el = $( this ),
					body = el.find( "tbody" );
				body.html( rows );
			},
			makeColDefault: function( col , a ){
				var c = $( col );
				c.attr( attrs.defaultCol , "true" );
				if( a ){
					c.removeClass( classes.descend );
					c.addClass( classes.ascend );
				} else {
					c.removeClass( classes.ascend );
					c.addClass( classes.descend );
				}
			},
			sortBy: function( col , ascending ){
				var el = $( this ), colNum, rows;

				colNum = el[ pluginName ]( "getColumnNumber" , col );
				rows = el[ pluginName ]( "getTableRows" );
				rows = el[ pluginName ]( "sortRows" , rows , colNum , ascending, col );
				el[ pluginName ]( "replaceTableRows" , rows );
				el[ pluginName ]( "makeColDefault" , col , ascending );
			}
		};

	// Collection method.
	$.fn[ pluginName ] = function( arrg ) {
		var args = Array.prototype.slice.call( arguments , 1),
			returnVal;

		// if it's a method
		if( arrg && typeof( arrg ) === "string" ){
			returnVal = $.fn[ pluginName ].prototype[ arrg ].apply( this[0], args );
			return (typeof returnVal !== "undefined")? returnVal:$(this);
		}
		// check init
		if( !$( this ).data( pluginName + "data" ) ){
			$( this ).data( pluginName + "active", true );
			$.fn[ pluginName ].prototype._create.call( this , arrg );
		}
		return $(this);
	};
	// add methods
	$.extend( $.fn[ pluginName ].prototype, methods );

	$( document ).on( "tablesawcreate", function( e, Tablesaw ) {
		if( Tablesaw.$table.is( initSelector ) ) {
			Tablesaw.$table[ pluginName ]();
		}
	});

}( jQuery ));

;(function( win, $, undefined ){

	var MM = {
		attr: {
			init: 'data-tablesaw-minimap'
		}
	};

	function createMiniMap( $table ){

		var $btns = $( '<div class="tablesaw-advance minimap">' ),
			$dotNav = $( '<ul class="tablesaw-advance-dots">' ).appendTo( $btns ),
			hideDot = 'tablesaw-advance-dots-hide',
			$headerCells = $table.find( 'thead th' );

		// populate dots
		$headerCells.each(function(){
			$dotNav.append( '<li><i></i></li>' );
		});

		$btns.appendTo( $table.prev().filter( '.tablesaw-bar' ) );

		function showMinimap( $table ) {
			var mq = $table.attr( MM.attr.init );
			return !mq || win.matchMedia && win.matchMedia( mq ).matches;
		}

		function showHideNav(){
			if( !showMinimap( $table ) ) {
				$btns.hide();
				return;
			}
			$btns.show();

			// show/hide dots
			var dots = $dotNav.find( "li" ).removeClass( hideDot );
			$table.find( "thead th" ).each(function(i){
				if( $( this ).css( "display" ) === "none" ){
					dots.eq( i ).addClass( hideDot );
				}
			});
		}

		// run on init and resize
		showHideNav();
		$( win ).on( "resize", showHideNav );


		$table
			.bind( "tablesawcolumns.minimap", function(){
				showHideNav();
			})
			.bind( "tablesawdestroy.minimap", function(){
				var $t = $( this );

				$t.prev().filter( '.tablesaw-bar' ).find( '.tablesaw-advance' ).remove();
				$( win ).off( "resize", showHideNav );

				$t.unbind( ".minimap" );
			});
	}



	// on tablecreate, init
	$( document ).on( "tablesawcreate", function( e, Tablesaw ){

		if( ( Tablesaw.mode === 'swipe' || Tablesaw.mode === 'columntoggle' ) && Tablesaw.$table.is( '[ ' + MM.attr.init + ']' ) ){
			createMiniMap( Tablesaw.$table );
		}

	} );

}( this, jQuery ));

;(function( win, $ ) {

	var S = {
		selectors: {
			init: 'table[data-tablesaw-mode-switch]'
		},
		attributes: {
			excludeMode: 'data-tablesaw-mode-exclude'
		},
		classes: {
			main: 'tablesaw-modeswitch',
			toolbar: 'tablesaw-toolbar'
		},
		modes: [ 'stack', 'swipe', 'columntoggle' ],
		init: function( table ) {
			var $table = $( table ),
				ignoreMode = $table.attr( S.attributes.excludeMode ),
				$toolbar = $table.prev().filter( '.tablesaw-bar' ),
				modeVal = '',
				$switcher = $( '<div>' ).addClass( S.classes.main + ' ' + S.classes.toolbar ).html(function() {
					var html = [ '<label>' + Tablesaw.i18n.columns + ':' ],
						dataMode = $table.attr( 'data-tablesaw-mode' ),
						isSelected;

					html.push( '<span class="btn btn-small">&#160;<select>' );
					for( var j=0, k = S.modes.length; j<k; j++ ) {
						if( ignoreMode && ignoreMode.toLowerCase() === S.modes[ j ] ) {
							continue;
						}

						isSelected = dataMode === S.modes[ j ];

						if( isSelected ) {
							modeVal = S.modes[ j ];
						}

						html.push( '<option' +
							( isSelected ? ' selected' : '' ) +
							' value="' + S.modes[ j ] + '">' + Tablesaw.i18n.modes[ j ] + '</option>' );
					}
					html.push( '</select></span></label>' );

					return html.join('');
				});

			var $otherToolbarItems = $toolbar.find( '.tablesaw-advance' ).eq( 0 );
			if( $otherToolbarItems.length ) {
				$switcher.insertBefore( $otherToolbarItems );
			} else {
				$switcher.appendTo( $toolbar );
			}

			$switcher.find( '.btn' ).tablesawbtn();
			$switcher.find( 'select' ).bind( 'change', S.onModeChange );
		},
		onModeChange: function() {
			var $t = $( this ),
				$switcher = $t.closest( '.' + S.classes.main ),
				$table = $t.closest( '.tablesaw-bar' ).nextUntil( $table ).eq( 0 ),
				val = $t.val();

			$switcher.remove();
			$table.data( 'table' ).destroy();

			$table.attr( 'data-tablesaw-mode', val );
			$table.table();
		}
	};

	$( win.document ).on( "tablesawcreate", function( e, Tablesaw ) {
		if( Tablesaw.$table.is( S.selectors.init ) ) {
			S.init( Tablesaw.table );
		}
	});

})( this, jQuery );
/*tablesaw-init.js*/
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
;(function( $ ) {

	// DOM-ready auto-init of plugins.
	// Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
	$( function(){
		$( document ).trigger( "enhance.tablesaw" );
	});

})( jQuery );
/*imagesloaded.js*/
/*!
 * imagesLoaded v3.0.2
 * JavaScript is all like "You images are done yet or what?"
 */

( function( window ) {

'use strict';

var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// --------------------------  -------------------------- //

function defineImagesLoaded( EventEmitter, eventie ) {

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    this.emit( 'progress', this, image );
    if ( this.jqDeferred ) {
      this.jqDeferred.notify( this, image );
    }
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emit( eventName, this );
    this.emit( 'always', this );
    if ( this.jqDeferred ) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  var cache = {};

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var cached = cache[ this.img.src ];
    if ( cached ) {
      this.useCached( cached );
      return;
    }
    // add this to cache
    cache[ this.img.src ] = this;

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var proxyImage = this.proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.img.src;
  };

  LoadingImage.prototype.useCached = function( cached ) {
    if ( cached.isConfirmed ) {
      this.confirm( cached.isLoaded, 'cached was confirmed' );
    } else {
      var _this = this;
      cached.on( 'confirm', function( image ) {
        _this.confirm( image.isLoaded, 'cache emitted confirmed' );
        return true; // bind once
      });
    }
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents();
  };

  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents();
  };

  LoadingImage.prototype.unbindProxyEvents = function() {
    eventie.unbind( this.proxyImage, 'load', this );
    eventie.unbind( this.proxyImage, 'error', this );
  };

  // -----  ----- //

  return ImagesLoaded;
}

// -------------------------- transport -------------------------- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( [
      'eventEmitter',
      'eventie'
    ],
    defineImagesLoaded );
} else {
  // browser global
  window.imagesLoaded = defineImagesLoaded(
    window.EventEmitter,
    window.eventie
  );
}

})( window );
/*classie.js*/
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*AnimOnScroll.js*/
/**
 * animOnScroll.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';
	
	var docElem = window.document.documentElement;

	function getViewportH() {
		var client = docElem['clientHeight'],
			inner = window['innerHeight'];
		
		if( client < inner )
			return inner;
		else
			return client;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	// http://stackoverflow.com/a/5598797/989439
	function getOffset( el ) {
		var offsetTop = 0, offsetLeft = 0;
		do {
			if ( !isNaN( el.offsetTop ) ) {
				offsetTop += el.offsetTop;
			}
			if ( !isNaN( el.offsetLeft ) ) {
				offsetLeft += el.offsetLeft;
			}
		} while( el = el.offsetParent )

		return {
			top : offsetTop,
			left : offsetLeft
		}
	}

	function inViewport( el, h ) {
		var elH = el.offsetHeight,
			scrolled = scrollY(),
			viewed = scrolled + getViewportH(),
			elTop = getOffset(el).top,
			elBottom = elTop + elH,
			// if 0, the element is considered in the viewport as soon as it enters.
			// if 1, the element is considered in the viewport only when it's fully inside
			// value in percentage (1 >= h >= 0)
			h = h || 0;

		return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
	}

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function AnimOnScroll( el, options ) {	
		this.el = el;
		this.options = extend( this.defaults, options );
		this._init();
	}

	AnimOnScroll.prototype = {
		defaults : {
			// Minimum and a maximum duration of the animation (random value is chosen)
			minDuration : 0,
			maxDuration : 0,
			// The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
			// if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport. 
			// If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
			viewportFactor : 0,
			MasonryOk 	: true
		},
		_init : function() {
			this.items = Array.prototype.slice.call( document.querySelectorAll( '#' + this.el.id + ' > li' ) );
			this.itemsCount = this.items.length;
			this.itemsRenderedCount = 0;
			this.didScroll = false;

			var self = this;

			imagesLoaded( this.el, function() {
				
				// initialize masonry
					var msnry = new Masonry( self.el, {
						itemSelector: 'li',
						transitionDuration : 0
					} );
					window.metgrid = msnry;
				
				if( Modernizr.cssanimations ) {
					// the items already shown...
					self.items.forEach( function( el, i ) {
						if( inViewport( el ) ) {
							self._checkTotalRendered();
							classie.add( el, 'shown' );
						}
					} );

					// animate on scroll the items inside the viewport
					window.addEventListener( 'scroll', function() {
						self._onScrollFn();
					}, false );
					window.addEventListener( 'resize', function() {
						self._resizeHandler();
					}, false );
				}

			});
		},
		_onScrollFn : function() {
			var self = this;
			if( !this.didScroll ) {
				this.didScroll = true;
				setTimeout( function() { self._scrollPage(); }, 60 );
			}
		},
		_scrollPage : function() {
			var self = this;
			this.items.forEach( function( el, i ) {
				if( !classie.has( el, 'shown' ) && !classie.has( el, 'animate' ) && inViewport( el, self.options.viewportFactor ) ) {
					setTimeout( function() {
						var perspY = scrollY() + getViewportH() / 2;
						self.el.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
						self.el.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
						self.el.style.perspectiveOrigin = '50% ' + perspY + 'px';

						self._checkTotalRendered();

						if( self.options.minDuration && self.options.maxDuration ) {
							var randDuration = ( Math.random() * ( self.options.maxDuration - self.options.minDuration ) + self.options.minDuration ) + 's';
							el.style.WebkitAnimationDuration = randDuration;
							el.style.MozAnimationDuration = randDuration;
							el.style.animationDuration = randDuration;
						}
						
						classie.add( el, 'animate' );
					}, 25 );
				}
			});
			this.didScroll = false;
		},
		_resizeHandler : function() {
			var self = this;
			function delayed() {
				self._scrollPage();
				self.resizeTimeout = null;
			}
			if ( this.resizeTimeout ) {
				clearTimeout( this.resizeTimeout );
			}
			this.resizeTimeout = setTimeout( delayed, 1000 );
		},
		_checkTotalRendered : function() {
			++this.itemsRenderedCount;
			if( this.itemsRenderedCount === this.itemsCount ) {
				window.removeEventListener( 'scroll', this._onScrollFn );
			}
		}
	}

	// add to global namespace
	window.AnimOnScroll = AnimOnScroll;

} )( window );
/*picturefill.min.js*/
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);
/*swiper-3.3.1.jquery.min.js*/
/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,s){function r(e){return Math.floor(e)}function i(){y.autoplayTimeoutId=setTimeout(function(){y.params.loop?(y.fixLoop(),y._slideNext(),y.emit("onAutoplay",y)):y.isEnd?s.autoplayStopOnLast?y.stopAutoplay():(y._slideTo(0),y.emit("onAutoplay",y)):(y._slideNext(),y.emit("onAutoplay",y))},y.params.autoplay)}function n(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){y.onResize(!0),y.emit("onObserverUpdate",y,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),y.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!y.params.allowSwipeToNext&&(y.isHorizontal()&&39===a||!y.isHorizontal()&&40===a))return!1;if(!y.params.allowSwipeToPrev&&(y.isHorizontal()&&37===a||!y.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(y.container.parents(".swiper-slide").length>0&&0===y.container.parents(".swiper-slide-active").length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=y.container.offset();y.rtl&&(n.left=n.left-y.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+y.width,n.top],[n.left,n.top+y.height],[n.left+y.width,n.top+y.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}y.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!y.rtl||37===a&&y.rtl)&&y.slideNext(),(37===a&&!y.rtl||39===a&&y.rtl)&&y.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&y.slideNext(),38===a&&y.slidePrev())}}function p(e){e.originalEvent&&(e=e.originalEvent);var a=y.mousewheel.event,t=0,s=y.rtl?-1:1;if("mousewheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*s}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*s:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*s}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*s:-e.deltaY;if(0!==t){if(y.params.mousewheelInvert&&(t=-t),y.params.freeMode){var r=y.getWrapperTranslate()+t*y.params.mousewheelSensitivity,i=y.isBeginning,n=y.isEnd;if(r>=y.minTranslate()&&(r=y.minTranslate()),r<=y.maxTranslate()&&(r=y.maxTranslate()),y.setWrapperTransition(0),y.setWrapperTranslate(r),y.updateProgress(),y.updateActiveIndex(),(!i&&y.isBeginning||!n&&y.isEnd)&&y.updateClasses(),y.params.freeModeSticky?(clearTimeout(y.mousewheel.timeout),y.mousewheel.timeout=setTimeout(function(){y.slideReset()},300)):y.params.lazyLoading&&y.lazy&&y.lazy.load(),0===r||r===y.maxTranslate())return}else{if((new window.Date).getTime()-y.mousewheel.lastScrollTime>60)if(0>t)if(y.isEnd&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slideNext();else if(y.isBeginning&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slidePrev();y.mousewheel.lastScrollTime=(new window.Date).getTime()}return y.params.autoplay&&y.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function d(e,t){e=a(e);var s,r,i,n=y.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):y.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},m=s&&s.virtualTranslate;s=s||{};var f={};for(var g in s)if("object"!=typeof s[g]||null===s[g]||(s[g].nodeType||s[g]===window||s[g]===document||"undefined"!=typeof Dom7&&s[g]instanceof Dom7||"undefined"!=typeof jQuery&&s[g]instanceof jQuery))f[g]=s[g];else{f[g]={};for(var h in s[g])f[g][h]=s[g][h]}for(var v in c)if("undefined"==typeof s[v])s[v]=c[v];else if("object"==typeof s[v])for(var w in c[v])"undefined"==typeof s[v][w]&&(s[v][w]=c[v][w]);var y=this;if(y.params=s,y.originalParams=f,y.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof Dom7&&(a=Dom7),("undefined"!=typeof a||(a="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(y.$=a,y.currentBreakpoint=void 0,y.getActiveBreakpoint=function(){if(!y.params.breakpoints)return!1;var e,a=!1,t=[];for(e in y.params.breakpoints)y.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},y.setBreakpoint=function(){var e=y.getActiveBreakpoint();if(e&&y.currentBreakpoint!==e){var a=e in y.params.breakpoints?y.params.breakpoints[e]:y.originalParams,t=y.params.loop&&a.slidesPerView!==y.params.slidesPerView;for(var s in a)y.params[s]=a[s];y.currentBreakpoint=e,t&&y.destroyLoop&&y.reLoop(!0)}},y.params.breakpoints&&y.setBreakpoint(),y.container=a(e),0!==y.container.length)){if(y.container.length>1){var b=[];return y.container.each(function(){b.push(new t(this,s))}),b}y.container[0].swiper=y,y.container.data("swiper",y),y.classNames.push("swiper-container-"+y.params.direction),y.params.freeMode&&y.classNames.push("swiper-container-free-mode"),y.support.flexbox||(y.classNames.push("swiper-container-no-flexbox"),y.params.slidesPerColumn=1),y.params.autoHeight&&y.classNames.push("swiper-container-autoheight"),(y.params.parallax||y.params.watchSlidesVisibility)&&(y.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(y.params.effect)>=0&&(y.support.transforms3d?(y.params.watchSlidesProgress=!0,y.classNames.push("swiper-container-3d")):y.params.effect="slide"),"slide"!==y.params.effect&&y.classNames.push("swiper-container-"+y.params.effect),"cube"===y.params.effect&&(y.params.resistanceRatio=0,y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.centeredSlides=!1,y.params.spaceBetween=0,y.params.virtualTranslate=!0,y.params.setWrapperSize=!1),("fade"===y.params.effect||"flip"===y.params.effect)&&(y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.watchSlidesProgress=!0,y.params.spaceBetween=0,y.params.setWrapperSize=!1,"undefined"==typeof m&&(y.params.virtualTranslate=!0)),y.params.grabCursor&&y.support.touch&&(y.params.grabCursor=!1),y.wrapper=y.container.children("."+y.params.wrapperClass),y.params.pagination&&(y.paginationContainer=a(y.params.pagination),y.params.uniqueNavElements&&"string"==typeof y.params.pagination&&y.paginationContainer.length>1&&1===y.container.find(y.params.pagination).length&&(y.paginationContainer=y.container.find(y.params.pagination)),"bullets"===y.params.paginationType&&y.params.paginationClickable?y.paginationContainer.addClass("swiper-pagination-clickable"):y.params.paginationClickable=!1,y.paginationContainer.addClass("swiper-pagination-"+y.params.paginationType)),(y.params.nextButton||y.params.prevButton)&&(y.params.nextButton&&(y.nextButton=a(y.params.nextButton),y.params.uniqueNavElements&&"string"==typeof y.params.nextButton&&y.nextButton.length>1&&1===y.container.find(y.params.nextButton).length&&(y.nextButton=y.container.find(y.params.nextButton))),y.params.prevButton&&(y.prevButton=a(y.params.prevButton),y.params.uniqueNavElements&&"string"==typeof y.params.prevButton&&y.prevButton.length>1&&1===y.container.find(y.params.prevButton).length&&(y.prevButton=y.container.find(y.params.prevButton)))),y.isHorizontal=function(){return"horizontal"===y.params.direction},y.rtl=y.isHorizontal()&&("rtl"===y.container[0].dir.toLowerCase()||"rtl"===y.container.css("direction")),y.rtl&&y.classNames.push("swiper-container-rtl"),y.rtl&&(y.wrongRTL="-webkit-box"===y.wrapper.css("display")),y.params.slidesPerColumn>1&&y.classNames.push("swiper-container-multirow"),y.device.android&&y.classNames.push("swiper-container-android"),y.container.addClass(y.classNames.join(" ")),y.translate=0,y.progress=0,y.velocity=0,y.lockSwipeToNext=function(){y.params.allowSwipeToNext=!1},y.lockSwipeToPrev=function(){y.params.allowSwipeToPrev=!1},y.lockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!1},y.unlockSwipeToNext=function(){y.params.allowSwipeToNext=!0},y.unlockSwipeToPrev=function(){y.params.allowSwipeToPrev=!0},y.unlockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!0},y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab"),y.imagesToLoad=[],y.imagesLoaded=0,y.loadImage=function(e,a,t,s,r){function i(){r&&r()}var n;e.complete&&s?i():a?(n=new window.Image,n.onload=i,n.onerror=i,t&&(n.srcset=t),a&&(n.src=a)):i()},y.preloadImages=function(){function e(){"undefined"!=typeof y&&null!==y&&(void 0!==y.imagesLoaded&&y.imagesLoaded++,y.imagesLoaded===y.imagesToLoad.length&&(y.params.updateOnImagesReady&&y.update(),y.emit("onImagesReady",y)))}y.imagesToLoad=y.container.find("img");for(var a=0;a<y.imagesToLoad.length;a++)y.loadImage(y.imagesToLoad[a],y.imagesToLoad[a].currentSrc||y.imagesToLoad[a].getAttribute("src"),y.imagesToLoad[a].srcset||y.imagesToLoad[a].getAttribute("srcset"),!0,e)},y.autoplayTimeoutId=void 0,y.autoplaying=!1,y.autoplayPaused=!1,y.startAutoplay=function(){return"undefined"!=typeof y.autoplayTimeoutId?!1:y.params.autoplay?y.autoplaying?!1:(y.autoplaying=!0,y.emit("onAutoplayStart",y),void i()):!1},y.stopAutoplay=function(e){y.autoplayTimeoutId&&(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplaying=!1,y.autoplayTimeoutId=void 0,y.emit("onAutoplayStop",y))},y.pauseAutoplay=function(e){y.autoplayPaused||(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplayPaused=!0,0===e?(y.autoplayPaused=!1,i()):y.wrapper.transitionEnd(function(){y&&(y.autoplayPaused=!1,y.autoplaying?i():y.stopAutoplay())}))},y.minTranslate=function(){return-y.snapGrid[0]},y.maxTranslate=function(){return-y.snapGrid[y.snapGrid.length-1]},y.updateAutoHeight=function(){var e=y.slides.eq(y.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&y.wrapper.css("height",a+"px")}},y.updateContainerSize=function(){var e,a;e="undefined"!=typeof y.params.width?y.params.width:y.container[0].clientWidth,a="undefined"!=typeof y.params.height?y.params.height:y.container[0].clientHeight,0===e&&y.isHorizontal()||0===a&&!y.isHorizontal()||(e=e-parseInt(y.container.css("padding-left"),10)-parseInt(y.container.css("padding-right"),10),a=a-parseInt(y.container.css("padding-top"),10)-parseInt(y.container.css("padding-bottom"),10),y.width=e,y.height=a,y.size=y.isHorizontal()?y.width:y.height)},y.updateSlidesSize=function(){y.slides=y.wrapper.children("."+y.params.slideClass),y.snapGrid=[],y.slidesGrid=[],y.slidesSizesGrid=[];var e,a=y.params.spaceBetween,t=-y.params.slidesOffsetBefore,s=0,i=0;if("undefined"!=typeof y.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*y.size),y.virtualSize=-a,y.rtl?y.slides.css({marginLeft:"",marginTop:""}):y.slides.css({marginRight:"",marginBottom:""});var n;y.params.slidesPerColumn>1&&(n=Math.floor(y.slides.length/y.params.slidesPerColumn)===y.slides.length/y.params.slidesPerColumn?y.slides.length:Math.ceil(y.slides.length/y.params.slidesPerColumn)*y.params.slidesPerColumn,"auto"!==y.params.slidesPerView&&"row"===y.params.slidesPerColumnFill&&(n=Math.max(n,y.params.slidesPerView*y.params.slidesPerColumn)));var o,l=y.params.slidesPerColumn,p=n/l,d=p-(y.params.slidesPerColumn*p-y.slides.length);for(e=0;e<y.slides.length;e++){o=0;var u=y.slides.eq(e);if(y.params.slidesPerColumn>1){var c,m,f;"column"===y.params.slidesPerColumnFill?(m=Math.floor(e/l),f=e-m*l,(m>d||m===d&&f===l-1)&&++f>=l&&(f=0,m++),c=m+f*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(f=Math.floor(e/p),m=e-f*p),u.css({"margin-top":0!==f&&y.params.spaceBetween&&y.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",f)}"none"!==u.css("display")&&("auto"===y.params.slidesPerView?(o=y.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),y.params.roundLengths&&(o=r(o))):(o=(y.size-(y.params.slidesPerView-1)*a)/y.params.slidesPerView,y.params.roundLengths&&(o=r(o)),y.isHorizontal()?y.slides[e].style.width=o+"px":y.slides[e].style.height=o+"px"),y.slides[e].swiperSlideSize=o,y.slidesSizesGrid.push(o),y.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-y.size/2-a),Math.abs(t)<.001&&(t=0),i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t)):(i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t),t=t+o+a),y.virtualSize+=o+a,s=o,i++)}y.virtualSize=Math.max(y.virtualSize,y.size)+y.params.slidesOffsetAfter;var g;if(y.rtl&&y.wrongRTL&&("slide"===y.params.effect||"coverflow"===y.params.effect)&&y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),(!y.support.flexbox||y.params.setWrapperSize)&&(y.isHorizontal()?y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}):y.wrapper.css({height:y.virtualSize+y.params.spaceBetween+"px"})),y.params.slidesPerColumn>1&&(y.virtualSize=(o+y.params.spaceBetween)*n,y.virtualSize=Math.ceil(y.virtualSize/y.params.slidesPerColumn)-y.params.spaceBetween,y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),y.params.centeredSlides)){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<y.virtualSize+y.snapGrid[0]&&g.push(y.snapGrid[e]);y.snapGrid=g}if(!y.params.centeredSlides){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<=y.virtualSize-y.size&&g.push(y.snapGrid[e]);y.snapGrid=g,Math.floor(y.virtualSize-y.size)-Math.floor(y.snapGrid[y.snapGrid.length-1])>1&&y.snapGrid.push(y.virtualSize-y.size)}0===y.snapGrid.length&&(y.snapGrid=[0]),0!==y.params.spaceBetween&&(y.isHorizontal()?y.rtl?y.slides.css({marginLeft:a+"px"}):y.slides.css({marginRight:a+"px"}):y.slides.css({marginBottom:a+"px"})),y.params.watchSlidesProgress&&y.updateSlidesOffset()}},y.updateSlidesOffset=function(){for(var e=0;e<y.slides.length;e++)y.slides[e].swiperSlideOffset=y.isHorizontal()?y.slides[e].offsetLeft:y.slides[e].offsetTop},y.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=y.translate||0),0!==y.slides.length){"undefined"==typeof y.slides[0].swiperSlideOffset&&y.updateSlidesOffset();var a=-e;y.rtl&&(a=e),y.slides.removeClass(y.params.slideVisibleClass);for(var t=0;t<y.slides.length;t++){var s=y.slides[t],r=(a-s.swiperSlideOffset)/(s.swiperSlideSize+y.params.spaceBetween);if(y.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+y.slidesSizesGrid[t],o=i>=0&&i<y.size||n>0&&n<=y.size||0>=i&&n>=y.size;o&&y.slides.eq(t).addClass(y.params.slideVisibleClass)}s.progress=y.rtl?-r:r}}},y.updateProgress=function(e){"undefined"==typeof e&&(e=y.translate||0);var a=y.maxTranslate()-y.minTranslate(),t=y.isBeginning,s=y.isEnd;0===a?(y.progress=0,y.isBeginning=y.isEnd=!0):(y.progress=(e-y.minTranslate())/a,y.isBeginning=y.progress<=0,y.isEnd=y.progress>=1),y.isBeginning&&!t&&y.emit("onReachBeginning",y),y.isEnd&&!s&&y.emit("onReachEnd",y),y.params.watchSlidesProgress&&y.updateSlidesProgress(e),y.emit("onProgress",y,y.progress)},y.updateActiveIndex=function(){var e,a,t,s=y.rtl?y.translate:-y.translate;for(a=0;a<y.slidesGrid.length;a++)"undefined"!=typeof y.slidesGrid[a+1]?s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]-(y.slidesGrid[a+1]-y.slidesGrid[a])/2?e=a:s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]&&(e=a+1):s>=y.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/y.params.slidesPerGroup),t>=y.snapGrid.length&&(t=y.snapGrid.length-1),e!==y.activeIndex&&(y.snapIndex=t,y.previousIndex=y.activeIndex,y.activeIndex=e,y.updateClasses())},y.updateClasses=function(){y.slides.removeClass(y.params.slideActiveClass+" "+y.params.slideNextClass+" "+y.params.slidePrevClass);var e=y.slides.eq(y.activeIndex);e.addClass(y.params.slideActiveClass);var t=e.next("."+y.params.slideClass).addClass(y.params.slideNextClass);y.params.loop&&0===t.length&&y.slides.eq(0).addClass(y.params.slideNextClass);var s=e.prev("."+y.params.slideClass).addClass(y.params.slidePrevClass);if(y.params.loop&&0===s.length&&y.slides.eq(-1).addClass(y.params.slidePrevClass),y.paginationContainer&&y.paginationContainer.length>0){var r,i=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length;if(y.params.loop?(r=Math.ceil((y.activeIndex-y.loopedSlides)/y.params.slidesPerGroup),r>y.slides.length-1-2*y.loopedSlides&&(r-=y.slides.length-2*y.loopedSlides),r>i-1&&(r-=i),0>r&&"bullets"!==y.params.paginationType&&(r=i+r)):r="undefined"!=typeof y.snapIndex?y.snapIndex:y.activeIndex||0,"bullets"===y.params.paginationType&&y.bullets&&y.bullets.length>0&&(y.bullets.removeClass(y.params.bulletActiveClass),y.paginationContainer.length>1?y.bullets.each(function(){a(this).index()===r&&a(this).addClass(y.params.bulletActiveClass)}):y.bullets.eq(r).addClass(y.params.bulletActiveClass)),"fraction"===y.params.paginationType&&(y.paginationContainer.find("."+y.params.paginationCurrentClass).text(r+1),y.paginationContainer.find("."+y.params.paginationTotalClass).text(i)),"progress"===y.params.paginationType){var n=(r+1)/i,o=n,l=1;y.isHorizontal()||(l=n,o=1),y.paginationContainer.find("."+y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(y.params.speed)}"custom"===y.params.paginationType&&y.params.paginationCustomRender&&(y.paginationContainer.html(y.params.paginationCustomRender(y,r+1,i)),y.emit("onPaginationRendered",y,y.paginationContainer[0]))}y.params.loop||(y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.isBeginning?(y.prevButton.addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(y.prevButton)):(y.prevButton.removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(y.prevButton))),y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.isEnd?(y.nextButton.addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(y.nextButton)):(y.nextButton.removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(y.nextButton))))},y.updatePagination=function(){if(y.params.pagination&&y.paginationContainer&&y.paginationContainer.length>0){var e="";if("bullets"===y.params.paginationType){for(var a=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length,t=0;a>t;t++)e+=y.params.paginationBulletRender?y.params.paginationBulletRender(t,y.params.bulletClass):"<"+y.params.paginationElement+' class="'+y.params.bulletClass+'"></'+y.params.paginationElement+">";y.paginationContainer.html(e),y.bullets=y.paginationContainer.find("."+y.params.bulletClass),y.params.paginationClickable&&y.params.a11y&&y.a11y&&y.a11y.initPagination()}"fraction"===y.params.paginationType&&(e=y.params.paginationFractionRender?y.params.paginationFractionRender(y,y.params.paginationCurrentClass,y.params.paginationTotalClass):'<span class="'+y.params.paginationCurrentClass+'"></span> / <span class="'+y.params.paginationTotalClass+'"></span>',y.paginationContainer.html(e)),"progress"===y.params.paginationType&&(e=y.params.paginationProgressRender?y.params.paginationProgressRender(y,y.params.paginationProgressbarClass):'<span class="'+y.params.paginationProgressbarClass+'"></span>',y.paginationContainer.html(e)),"custom"!==y.params.paginationType&&y.emit("onPaginationRendered",y,y.paginationContainer[0])}},y.update=function(e){function a(){s=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate()),y.setWrapperTranslate(s),y.updateActiveIndex(),y.updateClasses()}if(y.updateContainerSize(),y.updateSlidesSize(),y.updateProgress(),y.updatePagination(),y.updateClasses(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),e){var t,s;y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode?(a(),y.params.autoHeight&&y.updateAutoHeight()):(t=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0),t||a())}else y.params.autoHeight&&y.updateAutoHeight()},y.onResize=function(e){y.params.breakpoints&&y.setBreakpoint();var a=y.params.allowSwipeToPrev,t=y.params.allowSwipeToNext;y.params.allowSwipeToPrev=y.params.allowSwipeToNext=!0,y.updateContainerSize(),y.updateSlidesSize(),("auto"===y.params.slidesPerView||y.params.freeMode||e)&&y.updatePagination(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),y.controller&&y.controller.spline&&(y.controller.spline=void 0);var s=!1;if(y.params.freeMode){var r=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate());y.setWrapperTranslate(r),y.updateActiveIndex(),y.updateClasses(),y.params.autoHeight&&y.updateAutoHeight()}else y.updateClasses(),s=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0);y.params.lazyLoading&&!s&&y.lazy&&y.lazy.load(),y.params.allowSwipeToPrev=a,y.params.allowSwipeToNext=t};var x=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?x=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(x=["MSPointerDown","MSPointerMove","MSPointerUp"]),y.touchEvents={start:y.support.touch||!y.params.simulateTouch?"touchstart":x[0],move:y.support.touch||!y.params.simulateTouch?"touchmove":x[1],end:y.support.touch||!y.params.simulateTouch?"touchend":x[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===y.params.touchEventsTarget?y.container:y.wrapper).addClass("swiper-wp8-"+y.params.direction),y.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===y.params.touchEventsTarget?y.container[0]:y.wrapper[0],i=y.support.touch?r:document,n=y.params.nested?!0:!1;y.browser.ie?(r[t](y.touchEvents.start,y.onTouchStart,!1),i[t](y.touchEvents.move,y.onTouchMove,n),i[t](y.touchEvents.end,y.onTouchEnd,!1)):(y.support.touch&&(r[t](y.touchEvents.start,y.onTouchStart,!1),r[t](y.touchEvents.move,y.onTouchMove,n),r[t](y.touchEvents.end,y.onTouchEnd,!1)),!s.simulateTouch||y.device.ios||y.device.android||(r[t]("mousedown",y.onTouchStart,!1),document[t]("mousemove",y.onTouchMove,n),document[t]("mouseup",y.onTouchEnd,!1))),window[t]("resize",y.onResize),y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.nextButton[a]("click",y.onClickNext),y.params.a11y&&y.a11y&&y.nextButton[a]("keydown",y.a11y.onEnterKey)),y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.prevButton[a]("click",y.onClickPrev),y.params.a11y&&y.a11y&&y.prevButton[a]("keydown",y.a11y.onEnterKey)),y.params.pagination&&y.params.paginationClickable&&(y.paginationContainer[a]("click","."+y.params.bulletClass,y.onClickIndex),y.params.a11y&&y.a11y&&y.paginationContainer[a]("keydown","."+y.params.bulletClass,y.a11y.onEnterKey)),(y.params.preventClicks||y.params.preventClicksPropagation)&&r[t]("click",y.preventClicks,!0)},y.attachEvents=function(){y.initEvents()},y.detachEvents=function(){y.initEvents(!0)},y.allowClick=!0,y.preventClicks=function(e){y.allowClick||(y.params.preventClicks&&e.preventDefault(),y.params.preventClicksPropagation&&y.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},y.onClickNext=function(e){e.preventDefault(),(!y.isEnd||y.params.loop)&&y.slideNext()},y.onClickPrev=function(e){e.preventDefault(),(!y.isBeginning||y.params.loop)&&y.slidePrev()},y.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*y.params.slidesPerGroup;y.params.loop&&(t+=y.loopedSlides),y.slideTo(t)},y.updateClickedSlide=function(e){var t=n(e,"."+y.params.slideClass),s=!1;if(t)for(var r=0;r<y.slides.length;r++)y.slides[r]===t&&(s=!0);if(!t||!s)return y.clickedSlide=void 0,void(y.clickedIndex=void 0);if(y.clickedSlide=t,y.clickedIndex=a(t).index(),y.params.slideToClickedSlide&&void 0!==y.clickedIndex&&y.clickedIndex!==y.activeIndex){var i,o=y.clickedIndex;if(y.params.loop){if(y.animating)return;i=a(y.clickedSlide).attr("data-swiper-slide-index"),y.params.centeredSlides?o<y.loopedSlides-y.params.slidesPerView/2||o>y.slides.length-y.loopedSlides+y.params.slidesPerView/2?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o):o>y.slides.length-y.params.slidesPerView?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o)}else y.slideTo(o)}};var T,S,C,z,M,P,I,k,E,B,D="input, select, textarea, button",L=Date.now(),H=[];y.animating=!1,y.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,A;if(y.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(y.params.noSwiping&&n(e,"."+y.params.noSwipingClass))return void(y.allowClick=!0);if(!y.params.swipeHandler||n(e,y.params.swipeHandler)){var t=y.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=y.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(y.device.ios&&y.params.iOSEdgeSwipeDetection&&t<=y.params.iOSEdgeSwipeThreshold)){if(T=!0,S=!1,C=!0,M=void 0,A=void 0,y.touches.startX=t,y.touches.startY=s,z=Date.now(),y.allowClick=!0,y.updateContainerSize(),y.swipeDirection=void 0,y.params.threshold>0&&(k=!1),"touchstart"!==e.type){var r=!0;a(e.target).is(D)&&(r=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),r&&e.preventDefault()}y.emit("onTouchStart",y,e)}}}},y.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return y.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(y.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(y.params.onlyExternal)return y.allowClick=!1,void(T&&(y.touches.startX=y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.startY=y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,z=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return S=!0,void(y.allowClick=!1);if(C&&y.emit("onTouchMove",y,e),!(e.targetTouches&&e.targetTouches.length>1)){if(y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof M){var t=180*Math.atan2(Math.abs(y.touches.currentY-y.touches.startY),Math.abs(y.touches.currentX-y.touches.startX))/Math.PI;M=y.isHorizontal()?t>y.params.touchAngle:90-t>y.params.touchAngle}if(M&&y.emit("onTouchMoveOpposite",y,e),"undefined"==typeof A&&y.browser.ieTouch&&(y.touches.currentX!==y.touches.startX||y.touches.currentY!==y.touches.startY)&&(A=!0),T){if(M)return void(T=!1);if(A||!y.browser.ieTouch){y.allowClick=!1,y.emit("onSliderMove",y,e),e.preventDefault(),y.params.touchMoveStopPropagation&&!y.params.nested&&e.stopPropagation(),S||(s.loop&&y.fixLoop(),I=y.getWrapperTranslate(),y.setWrapperTransition(0),y.animating&&y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),y.params.autoplay&&y.autoplaying&&(y.params.autoplayDisableOnInteraction?y.stopAutoplay():y.pauseAutoplay()),B=!1,y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grabbing",y.container[0].style.cursor="-moz-grabbin",y.container[0].style.cursor="grabbing")),S=!0;var r=y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY;r*=y.params.touchRatio,y.rtl&&(r=-r),y.swipeDirection=r>0?"prev":"next",P=r+I;var i=!0;if(r>0&&P>y.minTranslate()?(i=!1,y.params.resistance&&(P=y.minTranslate()-1+Math.pow(-y.minTranslate()+I+r,y.params.resistanceRatio))):0>r&&P<y.maxTranslate()&&(i=!1,y.params.resistance&&(P=y.maxTranslate()+1-Math.pow(y.maxTranslate()-I-r,y.params.resistanceRatio))),
i&&(e.preventedByNestedSwiper=!0),!y.params.allowSwipeToNext&&"next"===y.swipeDirection&&I>P&&(P=I),!y.params.allowSwipeToPrev&&"prev"===y.swipeDirection&&P>I&&(P=I),y.params.followFinger){if(y.params.threshold>0){if(!(Math.abs(r)>y.params.threshold||k))return void(P=I);if(!k)return k=!0,y.touches.startX=y.touches.currentX,y.touches.startY=y.touches.currentY,P=I,void(y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY)}(y.params.freeMode||y.params.watchSlidesProgress)&&y.updateActiveIndex(),y.params.freeMode&&(0===H.length&&H.push({position:y.touches[y.isHorizontal()?"startX":"startY"],time:z}),H.push({position:y.touches[y.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),y.updateProgress(P),y.setWrapperTranslate(P)}}}}}},y.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),C&&y.emit("onTouchEnd",y,e),C=!1,T){y.params.grabCursor&&S&&T&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab");var t=Date.now(),s=t-z;if(y.allowClick&&(y.updateClickedSlide(e),y.emit("onTap",y,e),300>s&&t-L>300&&(E&&clearTimeout(E),E=setTimeout(function(){y&&(y.params.paginationHide&&y.paginationContainer.length>0&&!a(e.target).hasClass(y.params.bulletClass)&&y.paginationContainer.toggleClass(y.params.paginationHiddenClass),y.emit("onClick",y,e))},300)),300>s&&300>t-L&&(E&&clearTimeout(E),y.emit("onDoubleTap",y,e))),L=Date.now(),setTimeout(function(){y&&(y.allowClick=!0)},0),!T||!S||!y.swipeDirection||0===y.touches.diff||P===I)return void(T=S=!1);T=S=!1;var r;if(r=y.params.followFinger?y.rtl?y.translate:-y.translate:-P,y.params.freeMode){if(r<-y.minTranslate())return void y.slideTo(y.activeIndex);if(r>-y.maxTranslate())return void(y.slides.length<y.snapGrid.length?y.slideTo(y.snapGrid.length-1):y.slideTo(y.slides.length-1));if(y.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;y.velocity=o/l,y.velocity=y.velocity/2,Math.abs(y.velocity)<y.params.freeModeMinimumVelocity&&(y.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(y.velocity=0)}else y.velocity=0;H.length=0;var p=1e3*y.params.freeModeMomentumRatio,d=y.velocity*p,u=y.translate+d;y.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(y.velocity)*y.params.freeModeMomentumBounceRatio;if(u<y.maxTranslate())y.params.freeModeMomentumBounce?(u+y.maxTranslate()<-f&&(u=y.maxTranslate()-f),c=y.maxTranslate(),m=!0,B=!0):u=y.maxTranslate();else if(u>y.minTranslate())y.params.freeModeMomentumBounce?(u-y.minTranslate()>f&&(u=y.minTranslate()+f),c=y.minTranslate(),m=!0,B=!0):u=y.minTranslate();else if(y.params.freeModeSticky){var g,h=0;for(h=0;h<y.snapGrid.length;h+=1)if(y.snapGrid[h]>-u){g=h;break}u=Math.abs(y.snapGrid[g]-u)<Math.abs(y.snapGrid[g-1]-u)||"next"===y.swipeDirection?y.snapGrid[g]:y.snapGrid[g-1],y.rtl||(u=-u)}if(0!==y.velocity)p=y.rtl?Math.abs((-u-y.translate)/y.velocity):Math.abs((u-y.translate)/y.velocity);else if(y.params.freeModeSticky)return void y.slideReset();y.params.freeModeMomentumBounce&&m?(y.updateProgress(c),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating=!0,y.wrapper.transitionEnd(function(){y&&B&&(y.emit("onMomentumBounce",y),y.setWrapperTransition(y.params.speed),y.setWrapperTranslate(c),y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))})):y.velocity?(y.updateProgress(u),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))):y.updateProgress(u),y.updateActiveIndex()}return void((!y.params.freeModeMomentum||s>=y.params.longSwipesMs)&&(y.updateProgress(),y.updateActiveIndex()))}var v,w=0,b=y.slidesSizesGrid[0];for(v=0;v<y.slidesGrid.length;v+=y.params.slidesPerGroup)"undefined"!=typeof y.slidesGrid[v+y.params.slidesPerGroup]?r>=y.slidesGrid[v]&&r<y.slidesGrid[v+y.params.slidesPerGroup]&&(w=v,b=y.slidesGrid[v+y.params.slidesPerGroup]-y.slidesGrid[v]):r>=y.slidesGrid[v]&&(w=v,b=y.slidesGrid[y.slidesGrid.length-1]-y.slidesGrid[y.slidesGrid.length-2]);var x=(r-y.slidesGrid[w])/b;if(s>y.params.longSwipesMs){if(!y.params.longSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&(x>=y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w)),"prev"===y.swipeDirection&&(x>1-y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w))}else{if(!y.params.shortSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&y.slideTo(w+y.params.slidesPerGroup),"prev"===y.swipeDirection&&y.slideTo(w)}}},y._slideTo=function(e,a){return y.slideTo(e,a,!0,!0)},y.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),y.snapIndex=Math.floor(e/y.params.slidesPerGroup),y.snapIndex>=y.snapGrid.length&&(y.snapIndex=y.snapGrid.length-1);var r=-y.snapGrid[y.snapIndex];y.params.autoplay&&y.autoplaying&&(s||!y.params.autoplayDisableOnInteraction?y.pauseAutoplay(a):y.stopAutoplay()),y.updateProgress(r);for(var i=0;i<y.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*y.slidesGrid[i])&&(e=i);return!y.params.allowSwipeToNext&&r<y.translate&&r<y.minTranslate()?!1:!y.params.allowSwipeToPrev&&r>y.translate&&r>y.maxTranslate()&&(y.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=y.params.speed),y.previousIndex=y.activeIndex||0,y.activeIndex=e,y.rtl&&-r===y.translate||!y.rtl&&r===y.translate?(y.params.autoHeight&&y.updateAutoHeight(),y.updateClasses(),"slide"!==y.params.effect&&y.setWrapperTranslate(r),!1):(y.updateClasses(),y.onTransitionStart(t),0===a?(y.setWrapperTranslate(r),y.setWrapperTransition(0),y.onTransitionEnd(t)):(y.setWrapperTranslate(r),y.setWrapperTransition(a),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd(t)}))),!0))},y.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),y.params.autoHeight&&y.updateAutoHeight(),y.lazy&&y.lazy.onTransitionStart(),e&&(y.emit("onTransitionStart",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeStart",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextStart",y):y.emit("onSlidePrevStart",y)))},y.onTransitionEnd=function(e){y.animating=!1,y.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),y.lazy&&y.lazy.onTransitionEnd(),e&&(y.emit("onTransitionEnd",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeEnd",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextEnd",y):y.emit("onSlidePrevEnd",y))),y.params.hashnav&&y.hashnav&&y.hashnav.setHash()},y.slideNext=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)}return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)},y._slideNext=function(e){return y.slideNext(!0,e,!0)},y.slidePrev=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex-1,a,e,t)}return y.slideTo(y.activeIndex-1,a,e,t)},y._slidePrev=function(e){return y.slidePrev(!0,e,!0)},y.slideReset=function(e,a,t){return y.slideTo(y.activeIndex,a,e)},y.setWrapperTransition=function(e,a){y.wrapper.transition(e),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTransition(e),y.params.parallax&&y.parallax&&y.parallax.setTransition(e),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTransition(e),y.params.control&&y.controller&&y.controller.setTransition(e,a),y.emit("onSetTransition",y,e)},y.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;y.isHorizontal()?s=y.rtl?-e:e:i=e,y.params.roundLengths&&(s=r(s),i=r(i)),y.params.virtualTranslate||(y.support.transforms3d?y.wrapper.transform("translate3d("+s+"px, "+i+"px, "+n+"px)"):y.wrapper.transform("translate("+s+"px, "+i+"px)")),y.translate=y.isHorizontal()?s:i;var o,l=y.maxTranslate()-y.minTranslate();o=0===l?0:(e-y.minTranslate())/l,o!==y.progress&&y.updateProgress(e),a&&y.updateActiveIndex(),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTranslate(y.translate),y.params.parallax&&y.parallax&&y.parallax.setTranslate(y.translate),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTranslate(y.translate),y.params.control&&y.controller&&y.controller.setTranslate(y.translate,t),y.emit("onSetTranslate",y,y.translate)},y.getTranslate=function(e,a){var t,s,r,i;return"undefined"==typeof a&&(a="x"),y.params.virtualTranslate?y.rtl?-y.translate:y.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),y.rtl&&s&&(s=-s),s||0)},y.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=y.isHorizontal()?"x":"y"),y.getTranslate(y.wrapper[0],e)},y.observers=[],y.initObservers=function(){if(y.params.observeParents)for(var e=y.container.parents(),a=0;a<e.length;a++)o(e[a]);o(y.container[0],{childList:!1}),o(y.wrapper[0],{attributes:!1})},y.disconnectObservers=function(){for(var e=0;e<y.observers.length;e++)y.observers[e].disconnect();y.observers=[]},y.createLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove();var e=y.wrapper.children("."+y.params.slideClass);"auto"!==y.params.slidesPerView||y.params.loopedSlides||(y.params.loopedSlides=e.length),y.loopedSlides=parseInt(y.params.loopedSlides||y.params.slidesPerView,10),y.loopedSlides=y.loopedSlides+y.params.loopAdditionalSlides,y.loopedSlides>e.length&&(y.loopedSlides=e.length);var t,s=[],r=[];for(e.each(function(t,i){var n=a(this);t<y.loopedSlides&&r.push(i),t<e.length&&t>=e.length-y.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)y.wrapper.append(a(r[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)y.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass))},y.destroyLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove(),y.slides.removeAttr("data-swiper-slide-index")},y.reLoop=function(e){var a=y.activeIndex-y.loopedSlides;y.destroyLoop(),y.createLoop(),y.updateSlidesSize(),e&&y.slideTo(a+y.loopedSlides,0,!1)},y.fixLoop=function(){var e;y.activeIndex<y.loopedSlides?(e=y.slides.length-3*y.loopedSlides+y.activeIndex,e+=y.loopedSlides,y.slideTo(e,0,!1,!0)):("auto"===y.params.slidesPerView&&y.activeIndex>=2*y.loopedSlides||y.activeIndex>y.slides.length-2*y.params.slidesPerView)&&(e=-y.slides.length+y.activeIndex+y.loopedSlides,e+=y.loopedSlides,y.slideTo(e,0,!1,!0))},y.appendSlide=function(e){if(y.params.loop&&y.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&y.wrapper.append(e[a]);else y.wrapper.append(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0)},y.prependSlide=function(e){y.params.loop&&y.destroyLoop();var a=y.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&y.wrapper.prepend(e[t]);a=y.activeIndex+e.length}else y.wrapper.prepend(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.slideTo(a,0,!1)},y.removeSlide=function(e){y.params.loop&&(y.destroyLoop(),y.slides=y.wrapper.children("."+y.params.slideClass));var a,t=y.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.params.loop?y.slideTo(t+y.loopedSlides,0,!1):y.slideTo(t,0,!1)},y.removeAllSlides=function(){for(var e=[],a=0;a<y.slides.length;a++)e.push(a);y.removeSlide(e)},y.effects={fade:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var a=y.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;y.params.virtualTranslate||(s-=y.translate);var r=0;y.isHorizontal()||(r=s,s=0);var i=y.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(y.slides.transition(e),y.params.virtualTranslate&&0!==e){var a=!1;y.slides.transitionEnd(function(){if(!a&&y){a=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)y.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var t=y.slides.eq(e),s=t[0].progress;y.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(y.isHorizontal()?y.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+y.slides.length,y.params.flip.slideShadows){var d=y.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=y.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.virtualTranslate&&0!==e){var t=!1;y.slides.eq(y.activeIndex).transitionEnd(function(){if(!t&&y&&a(this).hasClass(y.params.slideActiveClass)){t=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)y.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;y.params.cube.shadow&&(y.isHorizontal()?(e=y.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.wrapper.append(e)),e.css({height:y.width+"px"})):(e=y.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.container.append(e))));for(var s=0;s<y.slides.length;s++){var r=y.slides.eq(s),i=90*s,n=Math.floor(i/360);y.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*y.size,d=0):(s-1)%4===0?(l=0,d=4*-n*y.size):(s-2)%4===0?(l=y.size+4*n*y.size,d=y.size):(s-3)%4===0&&(l=-y.size,d=3*y.size+4*y.size*n),y.rtl&&(l=-l),y.isHorizontal()||(p=l,l=0);var u="rotateX("+(y.isHorizontal()?0:-i)+"deg) rotateY("+(y.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*s+90*o,y.rtl&&(t=90*-s-90*o)),r.transform(u),y.params.cube.slideShadows){var c=y.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),m=y.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),r.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(y.wrapper.css({"-webkit-transform-origin":"50% 50% -"+y.size/2+"px","-moz-transform-origin":"50% 50% -"+y.size/2+"px","-ms-transform-origin":"50% 50% -"+y.size/2+"px","transform-origin":"50% 50% -"+y.size/2+"px"}),y.params.cube.shadow)if(y.isHorizontal())e.transform("translate3d(0px, "+(y.width/2+y.params.cube.shadowOffset)+"px, "+-y.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+y.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),h=y.params.cube.shadowScale,v=y.params.cube.shadowScale/g,w=y.params.cube.shadowOffset;e.transform("scale3d("+h+", 1, "+v+") translate3d(0px, "+(y.height/2+w)+"px, "+-y.height/2/v+"px) rotateX(-90deg)")}var b=y.isSafari||y.isUiWebView?-y.size/2:0;y.wrapper.transform("translate3d(0px,0,"+b+"px) rotateX("+(y.isHorizontal()?0:t)+"deg) rotateY("+(y.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.cube.shadow&&!y.isHorizontal()&&y.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=y.translate,t=y.isHorizontal()?-e+y.width/2:-e+y.height/2,s=y.isHorizontal()?y.params.coverflow.rotate:-y.params.coverflow.rotate,r=y.params.coverflow.depth,i=0,n=y.slides.length;n>i;i++){var o=y.slides.eq(i),l=y.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*y.params.coverflow.modifier,u=y.isHorizontal()?s*d:0,c=y.isHorizontal()?0:s*d,m=-r*Math.abs(d),f=y.isHorizontal()?0:y.params.coverflow.stretch*d,g=y.isHorizontal()?y.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var h="translate3d("+g+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(h),o[0].style.zIndex=-Math.abs(Math.round(d))+1,y.params.coverflow.slideShadows){var v=y.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=y.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(y.browser.ie){var b=y.wrapper[0].style;b.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},y.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==y.slides.length)){var s=y.slides.eq(e),r=s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!s.hasClass("swiper-lazy")||s.hasClass("swiper-lazy-loaded")||s.hasClass("swiper-lazy-loading")||(r=r.add(s[0])),0!==r.length&&r.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset");y.loadImage(e[0],i||r,n,!1,function(){if(r?(e.css("background-image",'url("'+r+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),s.find(".swiper-lazy-preloader, .preloader").remove(),y.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(y.params.slideDuplicateClass)){var o=y.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+y.params.slideDuplicateClass+")");y.lazy.loadImageInSlide(o.index(),!1)}else{var l=y.wrapper.children("."+y.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');y.lazy.loadImageInSlide(l.index(),!1)}}y.emit("onLazyImageReady",y,s[0],e[0])}),y.emit("onLazyImageLoad",y,s[0],e[0])})}},load:function(){var e;if(y.params.watchSlidesVisibility)y.wrapper.children("."+y.params.slideVisibleClass).each(function(){y.lazy.loadImageInSlide(a(this).index())});else if(y.params.slidesPerView>1)for(e=y.activeIndex;e<y.activeIndex+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);else y.lazy.loadImageInSlide(y.activeIndex);if(y.params.lazyLoadingInPrevNext)if(y.params.slidesPerView>1||y.params.lazyLoadingInPrevNextAmount&&y.params.lazyLoadingInPrevNextAmount>1){var t=y.params.lazyLoadingInPrevNextAmount,s=y.params.slidesPerView,r=Math.min(y.activeIndex+s+Math.max(t,s),y.slides.length),i=Math.max(y.activeIndex-Math.max(s,t),0);for(e=y.activeIndex+y.params.slidesPerView;r>e;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);for(e=i;e<y.activeIndex;e++)y.slides[e]&&y.lazy.loadImageInSlide(e)}else{var n=y.wrapper.children("."+y.params.slideNextClass);n.length>0&&y.lazy.loadImageInSlide(n.index());var o=y.wrapper.children("."+y.params.slidePrevClass);o.length>0&&y.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){y.params.lazyLoading&&(y.params.lazyLoadingOnTransitionStart||!y.params.lazyLoadingOnTransitionStart&&!y.lazy.initialImageLoaded)&&y.lazy.load()},onTransitionEnd:function(){y.params.lazyLoading&&!y.params.lazyLoadingOnTransitionStart&&y.lazy.load()}},y.scrollbar={isTouched:!1,setDragPosition:function(e){var a=y.scrollbar,t=y.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[y.isHorizontal()?"left":"top"]-a.dragSize/2,r=-y.minTranslate()*a.moveDivider,i=-y.maxTranslate()*a.moveDivider;r>s?s=r:s>i&&(s=i),s=-s/a.moveDivider,y.updateProgress(s),y.setWrapperTranslate(s,!0)},dragStart:function(e){var a=y.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),y.params.scrollbarHide&&a.track.css("opacity",1),y.wrapper.transition(100),a.drag.transition(100),y.emit("onScrollbarDragStart",y)},dragMove:function(e){var a=y.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),y.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),y.emit("onScrollbarDragMove",y))},dragEnd:function(e){var a=y.scrollbar;a.isTouched&&(a.isTouched=!1,y.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),y.emit("onScrollbarDragEnd",y),y.params.scrollbarSnapOnRelease&&y.slideReset())},enableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).on(y.touchEvents.start,e.dragStart),a(t).on(y.touchEvents.move,e.dragMove),a(t).on(y.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).off(y.touchEvents.start,e.dragStart),a(t).off(y.touchEvents.move,e.dragMove),a(t).off(y.touchEvents.end,e.dragEnd)},set:function(){if(y.params.scrollbar){var e=y.scrollbar;e.track=a(y.params.scrollbar),y.params.uniqueNavElements&&"string"==typeof y.params.scrollbar&&e.track.length>1&&1===y.container.find(y.params.scrollbar).length&&(e.track=y.container.find(y.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=y.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=y.size/y.virtualSize,e.moveDivider=e.divider*(e.trackSize/y.size),e.dragSize=e.trackSize*e.divider,y.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",y.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(y.params.scrollbar){var e,a=y.scrollbar,t=(y.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*y.progress,y.rtl&&y.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),y.isHorizontal()?(y.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(y.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),y.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){y.params.scrollbar&&y.scrollbar.drag.transition(e)}},y.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=r(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var r=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}()},getInterpolateFunction:function(e){y.controller.spline||(y.controller.spline=y.params.loop?new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid):new y.controller.LinearSpline(y.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-y.translate:y.translate,"slide"===y.params.controlBy&&(y.controller.getInterpolateFunction(a),i=-y.controller.spline.interpolate(-e)),i&&"container"!==y.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(y.maxTranslate()-y.minTranslate()),i=(e-y.minTranslate())*r+a.minTranslate()),y.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,y),a.updateActiveIndex()}var r,i,n=y.params.control;if(y.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){a.setWrapperTransition(e,y),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===y.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=y.params.control;if(y.isArray(i))for(r=0;r<i.length;r++)i[r]!==a&&i[r]instanceof t&&s(i[r]);else i instanceof t&&a!==i&&s(i)}},y.hashnav={init:function(){if(y.params.hashnav){y.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,s=y.slides.length;s>t;t++){var r=y.slides.eq(t),i=r.attr("data-hash");if(i===e&&!r.hasClass(y.params.slideDuplicateClass)){var n=r.index();y.slideTo(n,a,y.params.runCallbacksOnInit,!0)}}}},setHash:function(){y.hashnav.initialized&&y.params.hashnav&&(document.location.hash=y.slides.eq(y.activeIndex).attr("data-hash")||"")}},y.disableKeyboardControl=function(){y.params.keyboardControl=!1,a(document).off("keydown",l)},y.enableKeyboardControl=function(){y.params.keyboardControl=!0,a(document).on("keydown",l)},y.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},y.params.mousewheelControl){try{new window.WheelEvent("wheel"),y.mousewheel.event="wheel"}catch(O){(window.WheelEvent||y.container[0]&&"wheel"in y.container[0])&&(y.mousewheel.event="wheel")}!y.mousewheel.event&&window.WheelEvent,y.mousewheel.event||void 0===document.onmousewheel||(y.mousewheel.event="mousewheel"),y.mousewheel.event||(y.mousewheel.event="DOMMouseScroll")}y.disableMousewheelControl=function(){return y.mousewheel.event?(y.container.off(y.mousewheel.event,p),!0):!1},y.enableMousewheelControl=function(){return y.mousewheel.event?(y.container.on(y.mousewheel.event,p),!0):!1},y.parallax={setTranslate:function(){y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,y.progress)}),y.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);d(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=y.params.speed),y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},y._plugins=[];for(var N in y.plugins){var R=y.plugins[N](y,y.params[N]);R&&y._plugins.push(R)}return y.callPlugins=function(e){for(var a=0;a<y._plugins.length;a++)e in y._plugins[a]&&y._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.emitterEventListeners={},y.emit=function(e){y.params[e]&&y.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(y.emitterEventListeners[e])for(a=0;a<y.emitterEventListeners[e].length;a++)y.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);y.callPlugins&&y.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.on=function(e,a){return e=u(e),y.emitterEventListeners[e]||(y.emitterEventListeners[e]=[]),y.emitterEventListeners[e].push(a),y},y.off=function(e,a){var t;if(e=u(e),"undefined"==typeof a)return y.emitterEventListeners[e]=[],y;if(y.emitterEventListeners[e]&&0!==y.emitterEventListeners[e].length){for(t=0;t<y.emitterEventListeners[e].length;t++)y.emitterEventListeners[e][t]===a&&y.emitterEventListeners[e].splice(t,1);return y}},y.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),y.off(e,t)};return y.on(e,t),y},y.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(y.params.nextButton)?(y.onClickNext(e),y.isEnd?y.a11y.notify(y.params.lastSlideMessage):y.a11y.notify(y.params.nextSlideMessage)):a(e.target).is(y.params.prevButton)&&(y.onClickPrev(e),y.isBeginning?y.a11y.notify(y.params.firstSlideMessage):y.a11y.notify(y.params.prevSlideMessage)),a(e.target).is("."+y.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=y.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.a11y.makeFocusable(y.nextButton),y.a11y.addRole(y.nextButton,"button"),y.a11y.addLabel(y.nextButton,y.params.nextSlideMessage)),y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.a11y.makeFocusable(y.prevButton),y.a11y.addRole(y.prevButton,"button"),y.a11y.addLabel(y.prevButton,y.params.prevSlideMessage)),a(y.container).append(y.a11y.liveRegion)},initPagination:function(){y.params.pagination&&y.params.paginationClickable&&y.bullets&&y.bullets.length&&y.bullets.each(function(){var e=a(this);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){y.a11y.liveRegion&&y.a11y.liveRegion.length>0&&y.a11y.liveRegion.remove()}},y.init=function(){y.params.loop&&y.createLoop(),y.updateContainerSize(),y.updateSlidesSize(),y.updatePagination(),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.set(),y.params.scrollbarDraggable&&y.scrollbar.enableDraggable()),"slide"!==y.params.effect&&y.effects[y.params.effect]&&(y.params.loop||y.updateProgress(),y.effects[y.params.effect].setTranslate()),y.params.loop?y.slideTo(y.params.initialSlide+y.loopedSlides,0,y.params.runCallbacksOnInit):(y.slideTo(y.params.initialSlide,0,y.params.runCallbacksOnInit),0===y.params.initialSlide&&(y.parallax&&y.params.parallax&&y.parallax.setTranslate(),y.lazy&&y.params.lazyLoading&&(y.lazy.load(),y.lazy.initialImageLoaded=!0))),y.attachEvents(),y.params.observer&&y.support.observer&&y.initObservers(),y.params.preloadImages&&!y.params.lazyLoading&&y.preloadImages(),y.params.autoplay&&y.startAutoplay(),y.params.keyboardControl&&y.enableKeyboardControl&&y.enableKeyboardControl(),y.params.mousewheelControl&&y.enableMousewheelControl&&y.enableMousewheelControl(),
y.params.hashnav&&y.hashnav&&y.hashnav.init(),y.params.a11y&&y.a11y&&y.a11y.init(),y.emit("onInit",y)},y.cleanupStyles=function(){y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),y.wrapper.removeAttr("style"),y.slides&&y.slides.length&&y.slides.removeClass([y.params.slideVisibleClass,y.params.slideActiveClass,y.params.slideNextClass,y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),y.paginationContainer&&y.paginationContainer.length&&y.paginationContainer.removeClass(y.params.paginationHiddenClass),y.bullets&&y.bullets.length&&y.bullets.removeClass(y.params.bulletActiveClass),y.params.prevButton&&a(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.nextButton&&a(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.track&&y.scrollbar.track.length&&y.scrollbar.track.removeAttr("style"),y.scrollbar.drag&&y.scrollbar.drag.length&&y.scrollbar.drag.removeAttr("style"))},y.destroy=function(e,a){y.detachEvents(),y.stopAutoplay(),y.params.scrollbar&&y.scrollbar&&y.params.scrollbarDraggable&&y.scrollbar.disableDraggable(),y.params.loop&&y.destroyLoop(),a&&y.cleanupStyles(),y.disconnectObservers(),y.params.keyboardControl&&y.disableKeyboardControl&&y.disableKeyboardControl(),y.params.mousewheelControl&&y.disableMousewheelControl&&y.disableMousewheelControl(),y.params.a11y&&y.a11y&&y.a11y.destroy(),y.emit("onDestroy"),e!==!1&&(y=null)},y.init(),y}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var s=["jQuery","Zepto","Dom7"],r=0;r<s.length;r++)window[s[r]]&&e(window[s[r]]);var i;i="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,i&&("transitionEnd"in i.fn||(i.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in i.fn||(i.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in i.fn||(i.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map

/*jquery.lazyload.min.js*/
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/*slick.min.js*/
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                placeHolder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",
                lazyloadPrevNext:!1,
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    ds = a(this).attr("data-srcset"),
                    e = document.createElement("img");
                c.animate({
                    opacity: 0
                }, 100, function() {
                    c.attr({
                        src: d,
                        srcset: ds
                    }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").animate({
                        opacity: 1
                    }, 200), b.$slider.trigger("lazyLoaded", [b, c, d])
                });
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        if (a.options.placeHolder)
            a.$slideTrack.find('img[data-lazy]').attr({
                src: a.options.placeHolder
            });
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, fs, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), fs = e.attr("data-srcset"), g = document.createElement("img"), g.onload = function() {
            e.attr({
                src: f,
                srcset: fs
            }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        if(a.options.lazyloadPrevNext && a.$slideTrack.find('.slick-slide').length>2){
            var slide_index=a.$slideTrack.find('.slick-active').index(),
                slide_prevnext_order=[slide_index-1,slide_index+1];
            for (var i = 0; i < 2; i++) {
                a.$slideTrack.find('.slick-slide:eq('+slide_prevnext_order[i]+') img').each(function(){
                    if($(this).attr('data-lazy')) $(this).attr({src:$(this).data('lazy')}).removeAttr('data-lazy').removeClass('slick-loading');
                    if($(this).attr('data-srcset')) $(this).attr({srcset:$(this).data('srcset')}).removeAttr('data-srcset');
                })
            }
        }
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
var met_prevarrow='<button type="button" class="slick-prev"><i class="iconfont icon-prev"></button>',
    met_nextarrow='<button type="button" class="slick-next"><i class="iconfont icon-next"></i></button>';
/*lightgallery-all.min.js*/
/*! lightgallery - v1.2.22 - 2016-07-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function(a,b,c,d){"use strict";function e(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},f,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in c.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var f={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};e.prototype.init=function(){var c=this;c.s.preload>c.$items.length&&(c.s.preload=c.$items.length);var d=b.location.hash;d.indexOf("lg="+this.s.galleryId)>0&&(c.index=parseInt(d.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){c.build(c.index)}),a("body").addClass("lg-on"))),c.s.dynamic?(c.$el.trigger("onBeforeOpen.lg"),c.index=c.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){c.build(c.index),a("body").addClass("lg-on")})):c.$items.on("click.lgcustom",function(b){try{b.preventDefault(),b.preventDefault()}catch(a){b.returnValue=!1}c.$el.trigger("onBeforeOpen.lg"),c.index=c.s.index||c.$items.index(this),a("body").hasClass("lg-on")||(c.build(c.index),a("body").addClass("lg-on"))})},e.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1&&(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg")},e.prototype.structure=function(){var c,d="",e="",f=0,g="",h=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),f=0;f<this.$items.length;f++)d+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(e='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(g='<div class="lg-sub-html"></div>'),c='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+d+'</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>'+e+g+"</div></div>",a("body").append(c),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),h.setTop(),a(b).on("resize.lg orientationchange.lg",function(){setTimeout(function(){h.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var i=this.$outer.find(".lg-inner");i.css("transition-timing-function",this.s.cssEasing),i.css("transition-duration",this.s.speed+"ms")}a(".lg-backdrop").addClass("in"),setTimeout(function(){h.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(b).scrollTop()},e.prototype.setTop=function(){if("100%"!==this.s.height){var c=a(b).height(),d=(c-parseInt(this.s.height,10))/2,e=this.$outer.find(".lg");c>=parseInt(this.s.height,10)?e.css("top",d+"px"):e.css("top","0px")}},e.prototype.doCss=function(){var a=function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=c.documentElement,d=0;for(d=0;d<a.length;d++)if(a[d]in b.style)return!0};return!!a()},e.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a&&c)return{html5:!0};var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},e.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},e.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if("undefined"!=typeof e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),"undefined"!=typeof e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},e.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},e.prototype.loadContent=function(c,d,e){var f,g,h,i,j,k,l=this,m=!1,n=function(c){for(var d=[],e=[],f=0;f<c.length;f++){var h=c[f].split(" ");""===h[0]&&h.splice(0,1),e.push(h[0]),d.push(h[1])}for(var i=a(b).width(),j=0;j<d.length;j++)if(parseInt(d[j],10)>i){g=e[j];break}};if(l.s.dynamic){if(l.s.dynamicEl[c].poster&&(m=!0,h=l.s.dynamicEl[c].poster),k=l.s.dynamicEl[c].html,g=l.s.dynamicEl[c].src,l.s.dynamicEl[c].responsive){var o=l.s.dynamicEl[c].responsive.split(",");n(o)}i=l.s.dynamicEl[c].srcset,j=l.s.dynamicEl[c].sizes}else{if(l.$items.eq(c).attr("data-poster")&&(m=!0,h=l.$items.eq(c).attr("data-poster")),k=l.$items.eq(c).attr("data-html"),g=l.$items.eq(c).attr("href")||l.$items.eq(c).attr("data-src"),l.$items.eq(c).attr("data-responsive")){var p=l.$items.eq(c).attr("data-responsive").split(",");n(p)}i=l.$items.eq(c).attr("data-srcset"),j=l.$items.eq(c).attr("data-sizes")}var q=!1;l.s.dynamic?l.s.dynamicEl[c].iframe&&(q=!0):"true"===l.$items.eq(c).attr("data-iframe")&&(q=!0);var r=l.isVideo(g,c);if(!l.$slide.eq(c).hasClass("lg-loaded")){if(q)l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:'+l.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+g+'"  allowfullscreen="true"></iframe></div></div>');else if(m){var s="";s=r&&r.youtube?"lg-has-youtube":r&&r.vimeo?"lg-has-vimeo":"lg-has-html5",l.$slide.eq(c).prepend('<div class="lg-video-cont '+s+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+h+'" /></div></div>')}else r?(l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.$el.trigger("hasVideo.lg",[c,g,k])):l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+g+'" /></div>');if(l.$el.trigger("onAferAppendSlide.lg",[c]),f=l.$slide.eq(c).find(".lg-object"),j&&f.attr("sizes",j),i){f.attr("srcset",i);try{picturefill({elements:[f[0]]})}catch(a){console.error("Make sure you have included Picturefill version 2")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&l.addHtml(c),l.$slide.eq(c).addClass("lg-loaded")}l.$slide.eq(c).find(".lg-object").on("load.lg error.lg",function(){var b=0;e&&!a("body").hasClass("lg-from-hash")&&(b=e),setTimeout(function(){l.$slide.eq(c).addClass("lg-complete"),l.$el.trigger("onSlideItemLoad.lg",[c,e||0])},b)}),r&&r.html5&&!m&&l.$slide.eq(c).addClass("lg-complete"),d===!0&&(l.$slide.eq(c).hasClass("lg-complete")?l.preload(c):l.$slide.eq(c).find(".lg-object").on("load.lg error.lg",function(){l.preload(c)}))},e.prototype.slide=function(b,c,d){var e=this.$outer.find(".lg-current").index(),f=this;if(!f.lGalleryOn||e!==b){var g=this.$slide.length,h=f.lGalleryOn?this.s.speed:0,i=!1,j=!1;if(!f.lgBusy){if(this.s.download){var k;k=f.s.dynamic?f.s.dynamicEl[b].downloadUrl!==!1&&(f.s.dynamicEl[b].downloadUrl||f.s.dynamicEl[b].src):"false"!==f.$items.eq(b).attr("data-download-url")&&(f.$items.eq(b).attr("data-download-url")||f.$items.eq(b).attr("href")||f.$items.eq(b).attr("data-src")),k?(a("#lg-download").attr("href",k),f.$outer.removeClass("lg-hide-download")):f.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[e,b,c,d]),f.lgBusy=!0,clearTimeout(f.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){f.addHtml(b)},h),this.arrowDisable(b),c){var l=b-1,m=b+1;0===b&&e===g-1?(m=0,l=g-1):b===g-1&&0===e&&(m=0,l=g-1),this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),f.$slide.eq(l).addClass("lg-prev-slide"),f.$slide.eq(m).addClass("lg-next-slide"),f.$slide.eq(b).addClass("lg-current")}else f.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),b<e?(j=!0,0!==b||e!==g-1||d||(j=!1,i=!0)):b>e&&(i=!0,b!==g-1||0!==e||d||(j=!0,i=!1)),j?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")):i&&(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(e).addClass("lg-prev-slide")),setTimeout(function(){f.$slide.removeClass("lg-current"),f.$slide.eq(b).addClass("lg-current"),f.$outer.removeClass("lg-no-trans")},50);f.lGalleryOn?(setTimeout(function(){f.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){f.lgBusy=!1,f.$el.trigger("onAfterSlide.lg",[e,b,c,d])},this.s.speed)):(f.loadContent(b,!0,f.s.backdropDuration),f.lgBusy=!1,f.$el.trigger("onAfterSlide.lg",[e,b,c,d])),f.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}}},e.prototype.goToNextSlide=function(a){var b=this;b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1)):b.s.loop?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1)):b.s.slideEndAnimatoin&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},e.prototype.goToPrevSlide=function(a){var b=this;b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1)):b.s.loop?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1)):b.s.slideEndAnimatoin&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},e.prototype.keyPress=function(){var c=this;this.$items.length>1&&a(b).on("keyup.lg",function(a){c.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),c.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),c.goToNextSlide()))}),a(b).on("keydown.lg",function(a){c.s.escKey===!0&&27===a.keyCode&&(a.preventDefault(),c.$outer.hasClass("lg-thumb-open")?c.$outer.removeClass("lg-thumb-open"):c.destroy())})},e.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},e.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},e.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},e.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},e.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},e.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.isTouch&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},e.prototype.enableDrag=function(){var c=this,d=0,e=0,f=!1,g=!1;c.s.enableDrag&&!c.isTouch&&c.doCss()&&(c.$slide.on("mousedown.lg",function(b){c.$outer.hasClass("lg-zoomed")||(a(b.target).hasClass("lg-object")||a(b.target).hasClass("lg-video-play"))&&(b.preventDefault(),c.lgBusy||(c.manageSwipeClass(),d=b.pageX,f=!0,c.$outer.scrollLeft+=1,c.$outer.scrollLeft-=1,c.$outer.removeClass("lg-grab").addClass("lg-grabbing"),c.$el.trigger("onDragstart.lg")))}),a(b).on("mousemove.lg",function(a){f&&(g=!0,e=a.pageX,c.touchMove(d,e),c.$el.trigger("onDragmove.lg"))}),a(b).on("mouseup.lg",function(b){g?(g=!1,c.touchEnd(e-d),c.$el.trigger("onDragend.lg")):(a(b.target).hasClass("lg-object")||a(b.target).hasClass("lg-video-play"))&&c.$el.trigger("onSlideClick.lg"),f&&(f=!1,c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},e.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1,c=this.$slide.length;this.s.loop&&(0===this.index?b=c-1:this.index===c-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},e.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},e.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},e.prototype.destroy=function(c){var d=this;c||d.$el.trigger("onBeforeClose.lg"),a(b).scrollTop(d.prevScrollTop),c&&(d.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(d.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){d.modules[a]&&d.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(d.hideBartimeout),this.hideBartimeout=!1,a(b).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),d.$outer&&d.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){d.$outer&&d.$outer.remove(),a(".lg-backdrop").remove(),c||d.$el.trigger("onCloseAfter.lg")},d.s.backdropDuration+50)},a.fn.lightGallery=function(b){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new e(this,b))})},a.fn.lightGallery.modules={}}(jQuery,window,document),function(a,b,c,d){"use strict";var e={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),!(this.core.$items.length<2)&&(this.core.s=a.extend({},e,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};f.prototype.init=function(){var a=this;a.core.s.autoplayControls&&a.controls(),a.core.s.progressBar&&a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),a.progress(),a.core.s.autoplay&&a.startlAuto(),a.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){a.interval&&(a.cancelAuto(),a.canceledOnTouch=!0)}),a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!a.interval&&a.canceledOnTouch&&(a.startlAuto(),a.canceledOnTouch=!1)})},f.prototype.progress=function(){var a,b,c=this;c.$el.on("onBeforeSlide.lg.tm",function(){c.core.s.progressBar&&c.fromAuto&&(a=c.core.$outer.find(".lg-progress-bar"),b=c.core.$outer.find(".lg-progress"),c.interval&&(b.removeAttr("style"),a.removeClass("lg-start"),setTimeout(function(){b.css("transition","width "+(c.core.s.speed+c.core.s.pause)+"ms ease 0s"),a.addClass("lg-start")},20))),c.fromAuto||c.core.s.fourceAutoplay||c.cancelAuto(),c.fromAuto=!1})},f.prototype.controls=function(){var b=this,c='<span class="lg-autoplay-button lg-icon"></span>';a(this.core.s.appendAutoplayControlsTo).append(c),b.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){a(b.core.$outer).hasClass("lg-show-autoplay")?(b.cancelAuto(),b.core.s.fourceAutoplay=!1):b.interval||(b.startlAuto(),b.core.s.fourceAutoplay=b.fourceAutoplayTemp)})},f.prototype.startlAuto=function(){var a=this;a.core.$outer.find(".lg-progress").css("transition","width "+(a.core.s.speed+a.core.s.pause)+"ms ease 0s"),a.core.$outer.addClass("lg-show-autoplay"),a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),a.interval=setInterval(function(){a.core.index+1<a.core.$items.length?a.core.index++:a.core.index=0,a.fromAuto=!0,a.core.slide(a.core.index,!1,!1)},a.core.s.speed+a.core.s.pause)},f.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},f.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},a.fn.lightGallery.modules.autoplay=f}(jQuery,window,document),function(a,b,c,d){"use strict";var e={fullScreen:!0},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},e,this.core.s),this.init(),this};f.prototype.init=function(){var a="";if(this.core.s.fullScreen){if(!(c.fullscreenEnabled||c.webkitFullscreenEnabled||c.mozFullScreenEnabled||c.msFullscreenEnabled))return;a='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(a),this.fullScreen()}},f.prototype.requestFullscreen=function(){var a=c.documentElement;a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()},f.prototype.exitFullscreen=function(){c.exitFullscreen?c.exitFullscreen():c.msExitFullscreen?c.msExitFullscreen():c.mozCancelFullScreen?c.mozCancelFullScreen():c.webkitExitFullscreen&&c.webkitExitFullscreen()},f.prototype.fullScreen=function(){var b=this;a(c).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){b.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement||c.msFullscreenElement?b.exitFullscreen():b.requestFullscreen()})},f.prototype.destroy=function(){this.exitFullscreen(),a(c).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},a.fn.lightGallery.modules.fullscreen=f}(jQuery,window,document),function(a,b,c,d){"use strict";var e={pager:!1},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},e,this.core.s),this.core.s.pager&&this.core.$items.length>1&&this.init(),this};f.prototype.init=function(){var b,c,d,e=this,f="";if(e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),e.core.s.dynamic)for(var g=0;g<e.core.s.dynamicEl.length;g++)f+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e.core.s.dynamicEl[g].thumb+'" /></div></span>';else e.core.$items.each(function(){f+=e.core.s.exThumbImage?'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).attr(e.core.s.exThumbImage)+'" /></div></span>':'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).find("img").attr("src")+'" /></div></span>'});c=e.core.$outer.find(".lg-pager-outer"),c.html(f),b=e.core.$outer.find(".lg-pager-cont"),b.on("click.lg touchend.lg",function(){var b=a(this);e.core.index=b.index(),e.core.slide(e.core.index,!1,!1)}),c.on("mouseover.lg",function(){clearTimeout(d),c.addClass("lg-pager-hover")}),c.on("mouseout.lg",function(){d=setTimeout(function(){c.removeClass("lg-pager-hover")})}),e.core.$el.on("onBeforeSlide.lg.tm",function(a,c,d){b.removeClass("lg-pager-active"),b.eq(d).addClass("lg-pager-active")})},f.prototype.destroy=function(){},a.fn.lightGallery.modules.pager=f}(jQuery,window,document),function(a,b,c,d){"use strict";var e={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},f=function(b){return this.core=a(b).data("lightGallery"),this.core.s=a.extend({},e,this.core.s),this.$el=a(b),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};f.prototype.init=function(){var a=this;this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){a.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},f.prototype.build=function(){function c(a,b,c){var d,h=e.core.isVideo(a,c)||{},i="";h.youtube||h.vimeo||h.dailymotion?h.youtube?d=e.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+h.youtube[1]+"/"+e.core.s.youtubeThumbSize+".jpg":b:h.vimeo?e.core.s.loadVimeoThumbnail?(d="//i.vimeocdn.com/video/error_"+g+".jpg",i=h.vimeo[1]):d=b:h.dailymotion&&(d=e.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+h.dailymotion[1]:b):d=b,f+='<div data-vimeo-id="'+i+'" class="lg-thumb-item" style="width:'+e.core.s.thumbWidth+"px; margin-right: "+e.core.s.thumbMargin+'px"><img src="'+d+'" /></div>',i=""}var d,e=this,f="",g="",h='<div class="lg-thumb-outer"><div class="lg-thumb group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":g="640";break;case"thumbnail_medium":g="200x150";break;case"thumbnail_small":g="100x75"}if(e.core.$outer.addClass("lg-has-thumb"),e.core.$outer.find(".lg").append(h),e.$thumbOuter=e.core.$outer.find(".lg-thumb-outer"),e.thumbOuterWidth=e.$thumbOuter.width(),e.core.s.animateThumb&&e.core.$outer.find(".lg-thumb").css({width:e.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&e.$thumbOuter.css("height",e.core.s.thumbContHeight+"px"),e.core.s.dynamic)for(var i=0;i<e.core.s.dynamicEl.length;i++)c(e.core.s.dynamicEl[i].src,e.core.s.dynamicEl[i].thumb,i);else e.core.$items.each(function(b){e.core.s.exThumbImage?c(a(this).attr("href")||a(this).attr("data-src"),a(this).attr(e.core.s.exThumbImage),b):c(a(this).attr("href")||a(this).attr("data-src"),a(this).find("img").attr("src"),b)});e.core.$outer.find(".lg-thumb").html(f),d=e.core.$outer.find(".lg-thumb-item"),d.each(function(){var b=a(this),c=b.attr("data-vimeo-id");c&&a.getJSON("//www.vimeo.com/api/v2/video/"+c+".json?callback=?",{format:"json"},function(a){b.find("img").attr("src",a[0][e.core.s.vimeoThumbSize])})}),d.eq(e.core.index).addClass("active"),e.core.$el.on("onBeforeSlide.lg.tm",function(){d.removeClass("active"),d.eq(e.core.index).addClass("active")}),d.on("click.lg touchend.lg",function(){var b=a(this);setTimeout(function(){(e.thumbClickable&&!e.core.lgBusy||!e.core.doCss())&&(e.core.index=b.index(),e.core.slide(e.core.index,!1,!0))},50)}),e.core.$el.on("onBeforeSlide.lg.tm",function(){e.animateThumb(e.core.index)}),a(b).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){e.animateThumb(e.core.index),e.thumbOuterWidth=e.$thumbOuter.width()},200)})},f.prototype.setTranslate=function(a){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+a+"px, 0px, 0px)"})},f.prototype.animateThumb=function(a){var b=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var c;switch(this.core.s.currentPagerPosition){case"left":c=0;break;case"middle":c=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":c=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*a-1-c,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(b.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||b.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||b.css("left",-this.left+"px"),this.setTranslate(this.left)}},f.prototype.enableThumbDrag=function(){var c=this,d=0,e=0,f=!1,g=!1,h=0;c.$thumbOuter.addClass("lg-grab"),c.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(a){c.thumbTotalWidth>c.thumbOuterWidth&&(a.preventDefault(),d=a.pageX,f=!0,c.core.$outer.scrollLeft+=1,c.core.$outer.scrollLeft-=1,c.thumbClickable=!1,c.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),a(b).on("mousemove.lg.thumb",function(a){f&&(h=c.left,g=!0,e=a.pageX,c.$thumbOuter.addClass("lg-dragging"),h-=e-d,h>c.thumbTotalWidth-c.thumbOuterWidth&&(h=c.thumbTotalWidth-c.thumbOuterWidth),h<0&&(h=0),c.setTranslate(h))}),a(b).on("mouseup.lg.thumb",function(){g?(g=!1,c.$thumbOuter.removeClass("lg-dragging"),c.left=h,Math.abs(e-d)<c.core.s.swipeThreshold&&(c.thumbClickable=!0)):c.thumbClickable=!0,f&&(f=!1,c.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},f.prototype.enableThumbSwipe=function(){var a=this,b=0,c=0,d=!1,e=0;a.core.$outer.find(".lg-thumb").on("touchstart.lg",function(c){a.thumbTotalWidth>a.thumbOuterWidth&&(c.preventDefault(),b=c.originalEvent.targetTouches[0].pageX,a.thumbClickable=!1)}),a.core.$outer.find(".lg-thumb").on("touchmove.lg",function(f){a.thumbTotalWidth>a.thumbOuterWidth&&(f.preventDefault(),c=f.originalEvent.targetTouches[0].pageX,d=!0,a.$thumbOuter.addClass("lg-dragging"),e=a.left,e-=c-b,e>a.thumbTotalWidth-a.thumbOuterWidth&&(e=a.thumbTotalWidth-a.thumbOuterWidth),e<0&&(e=0),a.setTranslate(e))}),a.core.$outer.find(".lg-thumb").on("touchend.lg",function(){a.thumbTotalWidth>a.thumbOuterWidth&&d?(d=!1,a.$thumbOuter.removeClass("lg-dragging"),Math.abs(c-b)<a.core.s.swipeThreshold&&(a.thumbClickable=!0),a.left=e):a.thumbClickable=!0})},f.prototype.toogle=function(){var a=this;a.core.s.toogleThumb&&(a.core.$outer.addClass("lg-can-toggle"),a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),a.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){a.core.$outer.toggleClass("lg-thumb-open")}))},f.prototype.thumbkeyPress=function(){var c=this;a(b).on("keydown.lg.thumb",function(a){38===a.keyCode?(a.preventDefault(),c.core.$outer.addClass("lg-thumb-open")):40===a.keyCode&&(a.preventDefault(),c.core.$outer.removeClass("lg-thumb-open"))})},f.prototype.destroy=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(a(b).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},a.fn.lightGallery.modules.Thumbnail=f}(jQuery,window,document),function(a,b,c,d){"use strict";var e={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},e,this.core.s),this.videoLoaded=!1,this.init(),this};f.prototype.init=function(){var b=this;b.core.$el.on("hasVideo.lg.tm",function(a,c,d,e){if(b.core.$slide.eq(c).find(".lg-video").append(b.loadVideo(d,"lg-object",!0,c,e)),e)if(b.core.s.videojs)try{videojs(b.core.$slide.eq(c).find(".lg-html5").get(0),b.core.s.videojsOptions,function(){b.videoLoaded||this.play()})}catch(a){console.error("Make sure you have included videojs")}else b.core.$slide.eq(c).find(".lg-html5").get(0).play()}),b.core.$el.on("onAferAppendSlide.lg.tm",function(a,c){b.core.$slide.eq(c).find(".lg-video-cont").css("max-width",b.core.s.videoMaxWidth),b.videoLoaded=!0});var c=function(a){if(a.find(".lg-object").hasClass("lg-has-poster")&&a.find(".lg-object").is(":visible"))if(a.hasClass("lg-has-video")){var c=a.find(".lg-youtube").get(0),d=a.find(".lg-vimeo").get(0),e=a.find(".lg-dailymotion").get(0),f=a.find(".lg-html5").get(0);if(c)c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(d)try{$f(d).api("play")}catch(a){console.error("Make sure you have included froogaloop2 js")}else if(e)e.contentWindow.postMessage("play","*");else if(f)if(b.core.s.videojs)try{videojs(f).play()}catch(a){console.error("Make sure you have included videojs")}else f.play();a.addClass("lg-video-playing");
}else{a.addClass("lg-video-playing lg-has-video");var g,h,i=function(c,d){if(a.find(".lg-video").append(b.loadVideo(c,"",!1,b.core.index,d)),d)if(b.core.s.videojs)try{videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0),b.core.s.videojsOptions,function(){this.play()})}catch(a){console.error("Make sure you have included videojs")}else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()};b.core.s.dynamic?(g=b.core.s.dynamicEl[b.core.index].src,h=b.core.s.dynamicEl[b.core.index].html,i(g,h)):(g=b.core.$items.eq(b.core.index).attr("href")||b.core.$items.eq(b.core.index).attr("data-src"),h=b.core.$items.eq(b.core.index).attr("data-html"),i(g,h));var j=a.find(".lg-object");a.find(".lg-video").append(j),a.find(".lg-video-object").hasClass("lg-html5")||(a.removeClass("lg-complete"),a.find(".lg-video-object").on("load.lg error.lg",function(){a.addClass("lg-complete")}))}};b.core.doCss()&&b.core.$items.length>1&&(b.core.s.enableSwipe&&b.core.isTouch||b.core.s.enableDrag&&!b.core.isTouch)?b.core.$el.on("onSlideClick.lg.tm",function(){var a=b.core.$slide.eq(b.core.index);c(a)}):b.core.$slide.on("click.lg",function(){c(a(this))}),b.core.$el.on("onBeforeSlide.lg.tm",function(c,d,e){var f=b.core.$slide.eq(d),g=f.find(".lg-youtube").get(0),h=f.find(".lg-vimeo").get(0),i=f.find(".lg-dailymotion").get(0),j=f.find(".lg-vk").get(0),k=f.find(".lg-html5").get(0);if(g)g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(h)try{$f(h).api("pause")}catch(a){console.error("Make sure you have included froogaloop2 js")}else if(i)i.contentWindow.postMessage("pause","*");else if(k)if(b.core.s.videojs)try{videojs(k).pause()}catch(a){console.error("Make sure you have included videojs")}else k.pause();j&&a(j).attr("src",a(j).attr("src").replace("&autoplay","&noplay"));var l;l=b.core.s.dynamic?b.core.s.dynamicEl[e].src:b.core.$items.eq(e).attr("href")||b.core.$items.eq(e).attr("data-src");var m=b.core.isVideo(l,e)||{};(m.youtube||m.vimeo||m.dailymotion||m.vk)&&b.core.$outer.addClass("lg-hide-download")}),b.core.$el.on("onAfterSlide.lg.tm",function(a,c){b.core.$slide.eq(c).removeClass("lg-video-playing")})},f.prototype.loadVideo=function(b,c,d,e,f){var g="",h=1,i="",j=this.core.isVideo(b,e)||{};if(d&&(h=this.videoLoaded?0:1),j.youtube)i="?wmode=opaque&autoplay="+h+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(i=i+"&"+a.param(this.core.s.youtubePlayerParams)),g='<iframe class="lg-video-object lg-youtube '+c+'" width="560" height="315" src="//www.youtube.com/embed/'+j.youtube[1]+i+'" frameborder="0" allowfullscreen></iframe>';else if(j.vimeo)i="?autoplay="+h+"&api=1",this.core.s.vimeoPlayerParams&&(i=i+"&"+a.param(this.core.s.vimeoPlayerParams)),g='<iframe class="lg-video-object lg-vimeo '+c+'" width="560" height="315"  src="//player.vimeo.com/video/'+j.vimeo[1]+i+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(j.dailymotion)i="?wmode=opaque&autoplay="+h+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(i=i+"&"+a.param(this.core.s.dailymotionPlayerParams)),g='<iframe class="lg-video-object lg-dailymotion '+c+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+j.dailymotion[1]+i+'" frameborder="0" allowfullscreen></iframe>';else if(j.html5){var k=f.substring(0,1);"."!==k&&"#"!==k||(f=a(f).html()),g=f}else j.vk&&(i="&autoplay="+h,this.core.s.vkPlayerParams&&(i=i+"&"+a.param(this.core.s.vkPlayerParams)),g='<iframe class="lg-video-object lg-vk '+c+'" width="560" height="315" src="http://vk.com/video_ext.php?'+j.vk[1]+i+'" frameborder="0" allowfullscreen></iframe>');return g},f.prototype.destroy=function(){this.videoLoaded=!1},a.fn.lightGallery.modules.video=f}(jQuery,window,document),function(a,b,c,d){"use strict";var e={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300},f=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},e,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=a(b).width()/2,this.pageY=a(b).height()/2+a(b).scrollTop()),this};f.prototype.init=function(){var c=this,d='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';c.core.s.actualSize&&(d+='<span id="lg-actual-size" class="lg-icon"></span>'),this.core.$outer.find(".lg-toolbar").append(d),c.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(b,d,e){var f=c.core.s.enableZoomAfter+e;a("body").hasClass("lg-from-hash")&&e?f=0:a("body").removeClass("lg-from-hash"),c.zoomabletimeout=setTimeout(function(){c.core.$slide.eq(d).addClass("lg-zoomable")},f+30)});var e=1,f=function(d){var e,f,g=c.core.$outer.find(".lg-current .lg-image"),h=(a(b).width()-g.width())/2,i=(a(b).height()-g.height())/2+a(b).scrollTop();e=c.pageX-h,f=c.pageY-i;var j=(d-1)*e,k=(d-1)*f;g.css("transform","scale3d("+d+", "+d+", 1)").attr("data-scale",d),g.parent().css({left:-j+"px",top:-k+"px"}).attr("data-x",j).attr("data-y",k)},g=function(){e>1?c.core.$outer.addClass("lg-zoomed"):c.resetZoom(),e<1&&(e=1),f(e)},h=function(d,f,h,i){var j,k=f.width();j=c.core.s.dynamic?c.core.s.dynamicEl[h].width||f[0].naturalWidth||k:c.core.$items.eq(h).attr("data-width")||f[0].naturalWidth||k;var l;c.core.$outer.hasClass("lg-zoomed")?e=1:j>k&&(l=j/k,e=l||2),i?(c.pageX=a(b).width()/2,c.pageY=a(b).height()/2+a(b).scrollTop()):(c.pageX=d.pageX||d.originalEvent.targetTouches[0].pageX,c.pageY=d.pageY||d.originalEvent.targetTouches[0].pageY),g(),setTimeout(function(){c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)},i=!1;c.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(a,b){var d=c.core.$slide.eq(b).find(".lg-image");d.on("dblclick",function(a){h(a,d,b)}),d.on("touchstart",function(a){i?(clearTimeout(i),i=null,h(a,d,b)):i=setTimeout(function(){i=null},300),a.preventDefault()})}),a(b).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){c.pageX=a(b).width()/2,c.pageY=a(b).height()/2+a(b).scrollTop(),f(e)}),a("#lg-zoom-out").on("click.lg",function(){c.core.$outer.find(".lg-current .lg-image").length&&(e-=c.core.s.scale,g())}),a("#lg-zoom-in").on("click.lg",function(){c.core.$outer.find(".lg-current .lg-image").length&&(e+=c.core.s.scale,g())}),a("#lg-actual-size").on("click.lg",function(a){h(a,c.core.$slide.eq(c.core.index).find(".lg-image"),c.core.index,!0)}),c.core.$el.on("onBeforeSlide.lg.tm",function(){e=1,c.resetZoom()}),c.core.isTouch||c.zoomDrag(),c.core.isTouch&&c.zoomSwipe()},f.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=a(b).width()/2,this.pageY=a(b).height()/2+a(b).scrollTop()},f.prototype.zoomSwipe=function(){var a=this,b={},c={},d=!1,e=!1,f=!1;a.core.$slide.on("touchstart.lg",function(c){if(a.core.$outer.hasClass("lg-zoomed")){var d=a.core.$slide.eq(a.core.index).find(".lg-object");f=d.outerHeight()*d.attr("data-scale")>a.core.$outer.find(".lg").height(),e=d.outerWidth()*d.attr("data-scale")>a.core.$outer.find(".lg").width(),(e||f)&&(c.preventDefault(),b={x:c.originalEvent.targetTouches[0].pageX,y:c.originalEvent.targetTouches[0].pageY})}}),a.core.$slide.on("touchmove.lg",function(g){if(a.core.$outer.hasClass("lg-zoomed")){var h,i,j=a.core.$slide.eq(a.core.index).find(".lg-img-wrap");g.preventDefault(),d=!0,c={x:g.originalEvent.targetTouches[0].pageX,y:g.originalEvent.targetTouches[0].pageY},a.core.$outer.addClass("lg-zoom-dragging"),i=f?-Math.abs(j.attr("data-y"))+(c.y-b.y):-Math.abs(j.attr("data-y")),h=e?-Math.abs(j.attr("data-x"))+(c.x-b.x):-Math.abs(j.attr("data-x")),(Math.abs(c.x-b.x)>15||Math.abs(c.y-b.y)>15)&&j.css({left:h+"px",top:i+"px"})}}),a.core.$slide.on("touchend.lg",function(){a.core.$outer.hasClass("lg-zoomed")&&d&&(d=!1,a.core.$outer.removeClass("lg-zoom-dragging"),a.touchendZoom(b,c,e,f))})},f.prototype.zoomDrag=function(){var c=this,d={},e={},f=!1,g=!1,h=!1,i=!1;c.core.$slide.on("mousedown.lg.zoom",function(b){var e=c.core.$slide.eq(c.core.index).find(".lg-object");i=e.outerHeight()*e.attr("data-scale")>c.core.$outer.find(".lg").height(),h=e.outerWidth()*e.attr("data-scale")>c.core.$outer.find(".lg").width(),c.core.$outer.hasClass("lg-zoomed")&&a(b.target).hasClass("lg-object")&&(h||i)&&(b.preventDefault(),d={x:b.pageX,y:b.pageY},f=!0,c.core.$outer.scrollLeft+=1,c.core.$outer.scrollLeft-=1,c.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),a(b).on("mousemove.lg.zoom",function(a){if(f){var b,j,k=c.core.$slide.eq(c.core.index).find(".lg-img-wrap");g=!0,e={x:a.pageX,y:a.pageY},c.core.$outer.addClass("lg-zoom-dragging"),j=i?-Math.abs(k.attr("data-y"))+(e.y-d.y):-Math.abs(k.attr("data-y")),b=h?-Math.abs(k.attr("data-x"))+(e.x-d.x):-Math.abs(k.attr("data-x")),k.css({left:b+"px",top:j+"px"})}}),a(b).on("mouseup.lg.zoom",function(a){f&&(f=!1,c.core.$outer.removeClass("lg-zoom-dragging"),!g||d.x===e.x&&d.y===e.y||(e={x:a.pageX,y:a.pageY},c.touchendZoom(d,e,h,i)),g=!1),c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},f.prototype.touchendZoom=function(a,b,c,d){var e=this,f=e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),g=e.core.$slide.eq(e.core.index).find(".lg-object"),h=-Math.abs(f.attr("data-x"))+(b.x-a.x),i=-Math.abs(f.attr("data-y"))+(b.y-a.y),j=(e.core.$outer.find(".lg").height()-g.outerHeight())/2,k=Math.abs(g.outerHeight()*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").height()+j),l=(e.core.$outer.find(".lg").width()-g.outerWidth())/2,m=Math.abs(g.outerWidth()*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").width()+l);(Math.abs(b.x-a.x)>15||Math.abs(b.y-a.y)>15)&&(d&&(i<=-k?i=-k:i>=-j&&(i=-j)),c&&(h<=-m?h=-m:h>=-l&&(h=-l)),d?f.attr("data-y",Math.abs(i)):i=-Math.abs(f.attr("data-y")),c?f.attr("data-x",Math.abs(h)):h=-Math.abs(f.attr("data-x")),f.css({left:h+"px",top:i+"px"}))},f.prototype.destroy=function(){var c=this;c.core.$el.off(".lg.zoom"),a(b).off(".lg.zoom"),c.core.$slide.off(".lg.zoom"),c.core.$el.off(".lg.tm.zoom"),c.resetZoom(),clearTimeout(c.zoomabletimeout),c.zoomabletimeout=!1},a.fn.lightGallery.modules.zoom=f}(jQuery,window,document),function(a,b,c,d){"use strict";var e={hash:!0},f=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},e,this.core.s),this.core.s.hash&&(this.oldHash=b.location.hash,this.init()),this};f.prototype.init=function(){var c,d=this;d.core.$el.on("onAfterSlide.lg.tm",function(a,c,e){b.location.hash="lg="+d.core.s.galleryId+"&slide="+e}),a(b).on("hashchange.lg.hash",function(){c=b.location.hash;var a=parseInt(c.split("&slide=")[1],10);c.indexOf("lg="+d.core.s.galleryId)>-1?d.core.slide(a,!1,!1):d.core.lGalleryOn&&d.core.destroy()})},f.prototype.destroy=function(){this.core.s.hash&&(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?b.location.hash=this.oldHash:history.pushState?history.pushState("",c.title,b.location.pathname+b.location.search):b.location.hash="",this.core.$el.off(".lg.hash"))},a.fn.lightGallery.modules.hash=f}(jQuery,window,document);
/*jquery.fullpage.min.js*/
/*!
 * fullPage 2.8.8
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){"use strict";var a="fullpage-wrapper",r="."+a,l="fp-scrollable",s="."+l,c="fp-responsive",d="fp-notransition",f="fp-destroyed",u="fp-enabled",h="fp-viewing",p="active",v="."+p,m="fp-completely",g="."+m,w=".section",S="fp-section",y="."+S,b=y+v,x=y+":first",C=y+":last",T="fp-tableCell",k="."+T,I="fp-auto-height",L="fp-normal-scroll",E="fp-nav",A="#"+E,M="fp-tooltip",O="."+M,H="fp-show-active",B=".slide",R="fp-slide",z="."+R,D=z+v,P="fp-slides",q="."+P,F="fp-slidesContainer",V="."+F,j="fp-table",Y="fp-slidesNav",N="."+Y,U=N+" a",X="fp-controlArrow",W="."+X,K="fp-prev",Q="."+K,G=X+" "+K,J=W+Q,Z="fp-next",$="."+Z,_=X+" "+Z,ee=W+$,ne=e(n),te=e(t),oe={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};e.fn.fullpage=function(l){function s(n,t){it("autoScrolling",n,t);var o=e(b);l.autoScrolling&&!l.scrollBar?(lt.css({overflow:"hidden",height:"100%"}),X(At.recordHistory,"internal"),mt.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&_n(o.position().top)):(lt.css({overflow:"visible",height:"initial"}),X(!1,"internal"),mt.css({"-ms-touch-action":"","touch-action":""}),_n(0),o.length&&lt.scrollTop(o.position().top))}function X(e,n){it("recordHistory",e,n)}function Q(e,n){it("scrollingSpeed",e,n)}function Z(e,n){it("fitToSection",e,n)}function $(e){l.lockAnchors=e}function ae(e){e?(Xn(),Wn()):(Un(),Kn())}function re(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){nt(n,t,"m")})):n?(ae(!0),Qn()):(ae(!1),Gn())}function le(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){nt(n,t,"k")})):l.keyboardScrolling=n}function se(){var n=e(b).prev(y);n.length||!l.loopTop&&!l.continuousVertical||(n=e(y).last()),n.length&&We(n,null,!0)}function ce(){var n=e(b).next(y);n.length||!l.loopBottom&&!l.continuousVertical||(n=e(y).first()),n.length&&We(n,null,!1)}function de(e,n){Q(0,"internal"),fe(e,n),Q(At.scrollingSpeed,"internal")}function fe(e,n){var t=Rn(e);"undefined"!=typeof n?Dn(e,n):t.length>0&&We(t)}function ue(e){Ne("right",e)}function he(e){Ne("left",e)}function pe(n){if(!mt.hasClass(f)){wt=!0,gt=ne.height(),e(y).each(function(){var n=e(this).find(q),t=e(this).find(z);l.verticalCentered&&e(this).find(k).css("height",Hn(e(this))+"px"),e(this).css("height",gt+"px"),l.scrollOverflow&&(t.length?t.each(function(){Mn(e(this))}):Mn(e(this))),t.length>1&&gn(n,n.find(D))});var t=e(b),o=t.index(y);o&&de(o+1),wt=!1,e.isFunction(l.afterResize)&&n&&l.afterResize.call(mt),e.isFunction(l.afterReBuild)&&!n&&l.afterReBuild.call(mt)}}function ve(n){var t=st.hasClass(c);n?t||(s(!1,"internal"),Z(!1,"internal"),e(A).hide(),st.addClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(mt,n)):t&&(s(At.autoScrolling,"internal"),Z(At.autoScrolling,"internal"),e(A).show(),st.removeClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(mt,n))}function me(){return{options:l,internals:{getXmovement:An,removeAnimation:Tn,getTransforms:et,lazyLoad:$e,addAnimation:Cn,performHorizontalMove:Sn,silentLandscapeScroll:$n,keepSlidesPosition:Ue,silentScroll:_n,styleSlides:be}}}function ge(){l.css3&&(l.css3=Nn()),l.scrollBar=l.scrollBar||l.hybrid,Se(),ye(),re(!0),s(l.autoScrolling,"internal");var n=e(b).find(D);n.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==n.index())&&$n(n),xn(),Yn(),"complete"===t.readyState&&on(),ne.on("load",on)}function we(){ne.on("scroll",He).on("hashchange",an).blur(un).resize(bn),te.keydown(rn).keyup(sn).on("click touchstart",A+" a",hn).on("click touchstart",U,pn).on("click",O,ln),e(y).on("click touchstart",W,fn),l.normalScrollElements&&(te.on("mouseenter",l.normalScrollElements,function(){ae(!1)}),te.on("mouseleave",l.normalScrollElements,function(){ae(!0)}))}function Se(){var n=mt.find(l.sectionSelector);l.anchors.length||(l.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),l.navigationTooltips.length||(l.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function ye(){mt.css({height:"100%",position:"relative"}),mt.addClass(a),e("html").addClass(u),gt=ne.height(),mt.removeClass(f),Te(),e(y).each(function(n){var t=e(this),o=t.find(z),i=o.length;xe(t,n),Ce(t,n),i>0?be(t,o,i):l.verticalCentered&&On(t)}),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(st),l.navigation&&Ie(),Ee(),l.scrollOverflow?("complete"===t.readyState&&Le(),ne.on("load",Le)):Oe()}function be(n,t,o){var i=100*o,a=100/o;t.wrapAll('<div class="'+F+'" />'),t.parent().wrap('<div class="'+P+'" />'),n.find(V).css("width",i+"%"),o>1&&(l.controlArrows&&ke(n),l.slidesNavigation&&qn(n,o)),t.each(function(n){e(this).css("width",a+"%"),l.verticalCentered&&On(e(this))});var r=n.find(D);r.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==r.index())?$n(r):t.eq(0).addClass(p)}function xe(n,t){t||0!==e(b).length||n.addClass(p),n.css("height",gt+"px"),l.paddingTop&&n.css("padding-top",l.paddingTop),l.paddingBottom&&n.css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[t]&&n.css("background-color",l.sectionsColor[t]),"undefined"!=typeof l.anchors[t]&&n.attr("data-anchor",l.anchors[t])}function Ce(n,t){"undefined"!=typeof l.anchors[t]&&n.hasClass(p)&&Ln(l.anchors[t],t),l.menu&&l.css3&&e(l.menu).closest(r).length&&e(l.menu).appendTo(st)}function Te(){mt.find(l.sectionSelector).addClass(S),mt.find(l.slideSelector).addClass(R)}function ke(e){e.find(q).after('<div class="'+G+'"></div><div class="'+_+'"></div>'),"#fff"!=l.controlArrowColor&&(e.find(ee).css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(J).css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(J).hide()}function Ie(){st.append('<div id="'+E+'"><ul></ul></div>');var n=e(A);n.addClass(function(){return l.showActiveTooltip?H+" "+l.navigationPosition:l.navigationPosition});for(var t=0;t<e(y).length;t++){var o="";l.anchors.length&&(o=l.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',a=l.navigationTooltips[t];"undefined"!=typeof a&&""!==a&&(i+='<div class="'+M+" "+l.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(A).css("margin-top","-"+e(A).height()/2+"px"),e(A).find("li").eq(e(b).index(y)).find("a").addClass(p)}function Le(){e(y).each(function(){var n=e(this).find(z);n.length?n.each(function(){Mn(e(this))}):Mn(e(this))}),Oe()}function Ee(){mt.find('iframe[src*="youtube.com/embed/"]').each(function(){Ae(e(this),"enablejsapi=1")})}function Ae(e,n){var t=e.attr("src");e.attr("src",t+Me(t)+n)}function Me(e){return/\?/.test(e)?"&":"?"}function Oe(){var n=e(b);n.addClass(m),l.scrollOverflowHandler.afterRender&&l.scrollOverflowHandler.afterRender(n),$e(n),_e(n),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,n.data("anchor"),n.index(y)+1),e.isFunction(l.afterRender)&&l.afterRender.call(mt)}function He(){var n;if(!l.autoScrolling||l.scrollBar){var o=ne.scrollTop(),i=Re(o),a=0,r=o+ne.height()/2,s=st.height()-ne.height()===o,c=t.querySelectorAll(y);if(s)a=c.length-1;else if(o)for(var d=0;d<c.length;++d){var f=c[d];f.offsetTop<=r&&(a=d)}else a=0;if(Be(i)&&(e(b).hasClass(m)||e(b).addClass(m).siblings().removeClass(m)),n=e(c).eq(a),!n.hasClass(p)){Mt=!0;var u,h,v=e(b),g=v.index(y)+1,w=En(n),S=n.data("anchor"),x=n.index(y)+1,C=n.find(D);C.length&&(h=C.data("anchor"),u=C.index()),yt&&(n.addClass(p).siblings().removeClass(p),e.isFunction(l.onLeave)&&l.onLeave.call(v,g,x,w),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,S,x),nn(v),$e(n),_e(n),Ln(S,x-1),l.anchors.length&&(dt=S),Fn(u,h,S,x)),clearTimeout(It),It=setTimeout(function(){Mt=!1},100)}l.fitToSection&&(clearTimeout(Lt),Lt=setTimeout(function(){yt&&l.fitToSection&&(e(b).is(n)&&(wt=!0),We(e(b)),wt=!1)},l.fitToSectionDelay))}}function Be(n){var t=e(b).position().top,o=t+ne.height();return"up"==n?o>=ne.scrollTop()+ne.height():t<=ne.scrollTop()}function Re(e){var n=e>Ot?"down":"up";return Ot=e,Pt=e,n}function ze(e,n){if(xt.m[e]){var t="down"===e?"bottom":"top",o="down"===e?ce:se;if(n.length>0){if(!l.scrollOverflowHandler.isScrolled(t,n))return!0;o()}else o()}}function De(e){var n=e.originalEvent;l.autoScrolling&&Fe(n)&&e.preventDefault()}function Pe(n){var t=n.originalEvent,i=e(t.target).closest(y);if(!qe(n.target)&&Fe(t)){l.autoScrolling&&n.preventDefault();var a=l.scrollOverflowHandler.scrollable(i);if(yt&&!ht){var r=Zn(t);Rt=r.y,zt=r.x,i.find(q).length&&o.abs(Bt-zt)>o.abs(Ht-Rt)?o.abs(Bt-zt)>ne.outerWidth()/100*l.touchSensitivity&&(Bt>zt?xt.m.right&&ue(i):xt.m.left&&he(i)):l.autoScrolling&&o.abs(Ht-Rt)>ne.height()/100*l.touchSensitivity&&(Ht>Rt?ze("down",a):Rt>Ht&&ze("up",a))}}}function qe(n,t){t=t||0;var o=e(n).parent();return!!(t<l.normalScrollElementTouchThreshold&&o.is(l.normalScrollElements))||t!=l.normalScrollElementTouchThreshold&&qe(o,++t)}function Fe(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function Ve(e){var n=e.originalEvent;if(l.fitToSection&&lt.stop(),Fe(n)){var t=Zn(n);Ht=t.y,Bt=t.x}}function je(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function Ye(t){var i=(new Date).getTime(),a=e(g).hasClass(L);if(l.autoScrolling&&!ut&&!a){t=t||n.event;var r=t.wheelDelta||-t.deltaY||-t.detail,s=o.max(-1,o.min(1,r)),c="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,d=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!c;bt.length>149&&bt.shift(),bt.push(o.abs(r)),l.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var f=e(b),u=l.scrollOverflowHandler.scrollable(f),h=i-Dt;if(Dt=i,h>200&&(bt=[]),yt){var p=je(bt,10),v=je(bt,70),m=p>=v;m&&d&&(s<0?ze("down",u):ze("up",u))}return!1}l.fitToSection&&lt.stop()}function Ne(n,t){var o="undefined"==typeof t?e(b):t,i=o.find(q),a=i.find(z).length;if(!(!i.length||ht||a<2)){var r=i.find(D),s=null;if(s="left"===n?r.prev(z):r.next(z),!s.length){if(!l.loopHorizontal)return;s="left"===n?r.siblings(":last"):r.siblings(":first")}ht=!0,gn(i,s,n)}}function Ue(){e(D).each(function(){$n(e(this),"internal")})}function Xe(e){var n=e.position(),t=n.top,o=n.top>Pt,i=t-gt+e.outerHeight(),a=l.bigSectionsDestination;return e.outerHeight()>gt?(o||a)&&"bottom"!==a||(t=i):(o||wt&&e.is(":last-child"))&&(t=i),Pt=t,t}function We(n,t,o){if("undefined"!=typeof n){var i,a,r=Xe(n),s={element:n,callback:t,isMovementUp:o,dtop:r,yMovement:En(n),anchorLink:n.data("anchor"),sectionIndex:n.index(y),activeSlide:n.find(D),activeSection:e(b),leavingSection:e(b).index(y)+1,localIsResizing:wt};s.activeSection.is(n)&&!wt||l.scrollBar&&ne.scrollTop()===s.dtop&&!n.hasClass(I)||(s.activeSlide.length&&(i=s.activeSlide.data("anchor"),a=s.activeSlide.index()),l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=Ge(s)),e.isFunction(l.onLeave)&&!s.localIsResizing&&l.onLeave.call(s.activeSection,s.leavingSection,s.sectionIndex+1,s.yMovement)===!1||(nn(s.activeSection),l.scrollOverflowHandler.beforeLeave(),n.addClass(p).siblings().removeClass(p),$e(n),l.scrollOverflowHandler.onLeave(),yt=!1,Fn(a,i,s.anchorLink,s.sectionIndex),Ke(s),dt=s.anchorLink,Ln(s.anchorLink,s.sectionIndex)))}}function Ke(n){if(l.css3&&l.autoScrolling&&!l.scrollBar){var t="translate3d(0px, -"+o.round(n.dtop)+"px, 0px)";Bn(t,!0),l.scrollingSpeed?(clearTimeout(Tt),Tt=setTimeout(function(){Ze(n)},l.scrollingSpeed)):Ze(n)}else{var i=Qe(n);e(i.element).animate(i.options,l.scrollingSpeed,l.easing).promise().done(function(){l.scrollBar?setTimeout(function(){Ze(n)},30):Ze(n)})}}function Qe(e){var n={};return l.autoScrolling&&!l.scrollBar?(n.options={top:-e.dtop},n.element=r):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Ge(n){return n.isMovementUp?e(b).before(n.activeSection.nextAll(y)):e(b).after(n.activeSection.prevAll(y).get().reverse()),_n(e(b).position().top),Ue(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=En(n.element),n}function Je(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(x).before(n.wrapAroundElements):e(C).after(n.wrapAroundElements),_n(e(b).position().top),Ue())}function Ze(n){Je(n),e.isFunction(l.afterLoad)&&!n.localIsResizing&&l.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),l.scrollOverflowHandler.afterLoad(),_e(n.element),n.element.addClass(m).siblings().removeClass(m),yt=!0,e.isFunction(n.callback)&&n.callback.call(this)}function $e(n){if(l.lazyLoading){var t,o=tn(n);o.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){t=e(this),t.attr("src",t.data("src")),t.removeAttr("data-src"),t.is("source")&&t.closest("video").get(0).load()})}}function _e(n){var t=tn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&en(n),n.onload=function(){n.hasAttribute("data-autoplay")&&en(n)}})}function en(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function nn(n){var t=tn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function tn(n){var t=n.find(D);return t.length&&(n=e(t)),n}function on(){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]);t&&(l.animateAnchor?Dn(t,o):de(t,o))}function an(){if(!Mt&&!l.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]),i="undefined"==typeof dt,a="undefined"==typeof dt&&"undefined"==typeof o&&!ht;t.length&&(t&&t!==dt&&!i||a||!ht&&ft!=o)&&Dn(t,o)}}function rn(n){clearTimeout(Et);var t=e(":focus");if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&l.keyboardScrolling&&l.autoScrolling){var o=n.which,i=[40,38,32,33,34];e.inArray(o,i)>-1&&n.preventDefault(),ut=n.ctrlKey,Et=setTimeout(function(){vn(n)},150)}}function ln(){e(this).prev().trigger("click")}function sn(e){St&&(ut=e.ctrlKey)}function cn(e){2==e.which&&(qt=e.pageY,mt.on("mousemove",mn))}function dn(e){2==e.which&&mt.off("mousemove")}function fn(){var n=e(this).closest(y);e(this).hasClass(K)?xt.m.left&&he(n):xt.m.right&&ue(n)}function un(){St=!1,ut=!1}function hn(n){n.preventDefault();var t=e(this).parent().index();We(e(y).eq(t))}function pn(n){n.preventDefault();var t=e(this).closest(y).find(q),o=t.find(z).eq(e(this).closest("li").index());gn(t,o)}function vn(n){var t=n.shiftKey;switch(n.which){case 38:case 33:xt.k.up&&se();break;case 32:if(t&&xt.k.up){se();break}case 40:case 34:xt.k.down&&ce();break;case 36:xt.k.up&&fe(1);break;case 35:xt.k.down&&fe(e(y).length);break;case 37:xt.k.left&&he();break;case 39:xt.k.right&&ue();break;default:return}}function mn(e){yt&&(e.pageY<qt&&xt.m.up?se():e.pageY>qt&&xt.m.down&&ce()),qt=e.pageY}function gn(n,t,o){var i=n.closest(y),a={slides:n,destiny:t,direction:o,destinyPos:t.position(),slideIndex:t.index(),section:i,sectionIndex:i.index(y),anchorLink:i.data("anchor"),slidesNav:i.find(N),slideAnchor:jn(t),prevSlide:i.find(D),prevSlideIndex:i.find(D).index(),localIsResizing:wt};return a.xMovement=An(a.prevSlideIndex,a.slideIndex),a.localIsResizing||(yt=!1),l.onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&e.isFunction(l.onSlideLeave)&&l.onSlideLeave.call(a.prevSlide,a.anchorLink,a.sectionIndex+1,a.prevSlideIndex,a.xMovement,a.slideIndex)===!1?void(ht=!1):(t.addClass(p).siblings().removeClass(p),a.localIsResizing||(nn(a.prevSlide),$e(t)),!l.loopHorizontal&&l.controlArrows&&(i.find(J).toggle(0!==a.slideIndex),i.find(ee).toggle(!t.is(":last-child"))),i.hasClass(p)&&Fn(a.slideIndex,a.slideAnchor,a.anchorLink,a.sectionIndex),void Sn(n,a,!0))}function wn(n){yn(n.slidesNav,n.slideIndex),n.localIsResizing||(e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),yt=!0),_e(n.destiny),ht=!1}function Sn(e,n,t){var i=n.destinyPos;if(l.css3){var a="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";Cn(e.find(V)).css(et(a)),kt=setTimeout(function(){t&&wn(n)},l.scrollingSpeed,l.easing)}else e.animate({scrollLeft:o.round(i.left)},l.scrollingSpeed,l.easing,function(){t&&wn(n)})}function yn(e,n){e.find(v).removeClass(p),e.find("li").eq(n).find("a").addClass(p)}function bn(){if(xn(),pt){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=ne.height();o.abs(i-Ft)>20*o.max(Ft,i)/100&&(pe(!0),Ft=i)}}else clearTimeout(Ct),Ct=setTimeout(function(){pe(!0)},350)}function xn(){var e=l.responsive||l.responsiveWidth,n=l.responsiveHeight,t=e&&ne.outerWidth()<e,o=n&&ne.height()<n;e&&n?ve(t||o):e?ve(t):n&&ve(o)}function Cn(e){var n="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass(d),e.css({"-webkit-transition":n,transition:n})}function Tn(e){return e.addClass(d)}function kn(n,t){l.navigation&&(e(A).find(v).removeClass(p),n?e(A).find('a[href="#'+n+'"]').addClass(p):e(A).find("li").eq(t).find("a").addClass(p))}function In(n){l.menu&&(e(l.menu).find(v).removeClass(p),e(l.menu).find('[data-menuanchor="'+n+'"]').addClass(p))}function Ln(e,n){In(e),kn(e,n)}function En(n){var t=e(b).index(y),o=n.index(y);return t==o?"none":t>o?"up":"down"}function An(e,n){return e==n?"none":e>n?"left":"right"}function Mn(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var n,t=l.scrollOverflowHandler,o=t.wrapContent(),i=e.closest(y),a=t.scrollable(e);a.length?n=t.scrollHeight(e):(n=e.get(0).scrollHeight,l.verticalCentered&&(n=e.find(k).get(0).scrollHeight));var r=gt-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));n>r?a.length?t.update(e,r):(l.verticalCentered?e.find(k).wrapInner(o):e.wrapInner(o),t.create(e,r)):t.remove(e),e.css("overflow","")}}function On(e){e.hasClass(j)||e.addClass(j).wrapInner('<div class="'+T+'" style="height:'+Hn(e)+'px;" />')}function Hn(e){var n=gt;if(l.paddingTop||l.paddingBottom){var t=e;t.hasClass(S)||(t=e.closest(y));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=gt-o}return n}function Bn(e,n){n?Cn(mt):Tn(mt),mt.css(et(e)),setTimeout(function(){mt.removeClass(d)},10)}function Rn(n){var t=mt.find(y+'[data-anchor="'+n+'"]');return t.length||(t=e(y).eq(n-1)),t}function zn(e,n){var t=n.find(q),o=t.find(z+'[data-anchor="'+e+'"]');return o.length||(o=t.find(z).eq(e)),o}function Dn(e,n){var t=Rn(e);t.length&&("undefined"==typeof n&&(n=0),e===dt||t.hasClass(p)?Pn(t,n):We(t,function(){Pn(t,n)}))}function Pn(e,n){if("undefined"!=typeof n){var t=e.find(q),o=zn(n,e);o.length&&gn(t,o)}}function qn(e,n){e.append('<div class="'+Y+'"><ul></ul></div>');var t=e.find(N);t.addClass(l.slidesNavPosition);for(var o=0;o<n;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(p)}function Fn(e,n,t,o){var i="";l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof t&&(i=t),"undefined"==typeof n&&(n=e),ft=n,Vn(i+"/"+n)):"undefined"!=typeof e?(ft=n,Vn(t)):Vn(t)),Yn()}function Vn(e){if(l.recordHistory)location.hash=e;else if(pt||vt)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function jn(e){var n=e.data("anchor"),t=e.index();return"undefined"==typeof n&&(n=t),n}function Yn(){var n=e(b),t=n.find(D),o=jn(n),i=jn(t),a=String(o);t.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+h+"-[^\\s]+\\b","g");st[0].className=st[0].className.replace(r,""),st.addClass(h+"-"+a)}function Nn(){var e,o=t.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var r in a)o.style[r]!==i&&(o.style[r]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(a[r]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function Un(){t.addEventListener?(t.removeEventListener("mousewheel",Ye,!1),t.removeEventListener("wheel",Ye,!1),t.removeEventListener("MozMousePixelScroll",Ye,!1)):t.detachEvent("onmousewheel",Ye)}function Xn(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var a="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?t[e](o+"MozMousePixelScroll",Ye,!1):t[e](o+a,Ye,!1)}function Wn(){mt.on("mousedown",cn).on("mouseup",dn)}function Kn(){mt.off("mousedown",cn).off("mouseup",dn)}function Qn(){if(l.autoScrolling&&(pt||vt)){var n=Jn();st.off("touchmove "+n.move).on("touchmove "+n.move,De),e(r).off("touchstart "+n.down).on("touchstart "+n.down,Ve).off("touchmove "+n.move).on("touchmove "+n.move,Pe)}}function Gn(){if(pt||vt){var n=Jn();e(r).off("touchstart "+n.down).off("touchmove "+n.move)}}function Jn(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Zn(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,vt&&Fe(e)&&l.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function $n(e,n){Q(0,"internal"),"undefined"!=typeof n&&(wt=!0),gn(e.closest(q),e),"undefined"!=typeof n&&(wt=!1),Q(At.scrollingSpeed,"internal")}function _n(e){var n=o.round(e);if(l.scrollBar)mt.scrollTop(n);else if(l.css3){var t="translate3d(0px, -"+n+"px, 0px)";Bn(t,!1)}else mt.css("top",-n)}function et(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function nt(e,n,t){switch(n){case"up":xt[t].up=e;break;case"down":xt[t].down=e;break;case"left":xt[t].left=e;break;case"right":xt[t].right=e;break;case"all":"m"==t?re(e):le(e)}}function tt(n){s(!1,"internal"),re(!1),le(!1),mt.addClass(f),clearTimeout(kt),clearTimeout(Tt),clearTimeout(Ct),clearTimeout(It),clearTimeout(Lt),ne.off("scroll",He).off("hashchange",an).off("resize",bn),te.off("click touchstart",A+" a").off("mouseenter",A+" li").off("mouseleave",A+" li").off("click touchstart",U).off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(y).off("click touchstart",W),clearTimeout(kt),clearTimeout(Tt),n&&ot()}function ot(){_n(0),mt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src")}),e(A+", "+N+", "+W).remove(),e(y).css({height:"","background-color":"",padding:""}),e(z).css({width:""}),mt.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),lt.css({overflow:"",height:""}),e("html").removeClass(u),st.removeClass(c),e.each(st.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(h)&&st.removeClass(n)}),e(y+", "+z).each(function(){l.scrollOverflowHandler.remove(e(this)),e(this).removeClass(j+" "+p)}),Tn(mt),mt.find(k+", "+V+", "+q).each(function(){e(this).replaceWith(this.childNodes)}),lt.scrollTop(0);var n=[S,R,F];e.each(n,function(n,t){e("."+t).removeClass(t)})}function it(e,n,t){l[e]=n,"internal"!==t&&(At[e]=n)}function at(){var n=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides"];return e("html").hasClass(u)?void rt("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,rt("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&rt("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),l.continuousVertical&&l.scrollBar&&(l.continuousVertical=!1,rt("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),n.forEach(function(e){l[e]&&rt("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+e)}),void e.each(l.anchors,function(n,t){var o=te.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=te.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(rt("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&rt("error",'"'+t+'" is is being used by another element `id` property'),o.length&&rt("error",'"'+t+'" is is being used by another element `name` property'))}))}function rt(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(u))return void at();var lt=e("html, body"),st=e("body"),ct=e.fn.fullpage;l=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:ie,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,sectionSelector:w,slideSelector:B,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},l);var dt,ft,ut,ht=!1,pt=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),vt="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,mt=e(this),gt=ne.height(),wt=!1,St=!0,yt=!0,bt=[],xt={};xt.m={up:!0,down:!0,left:!0,right:!0},xt.k=e.extend(!0,{},xt.m);var Ct,Tt,kt,It,Lt,Et,At=e.extend(!0,{},l);at(),oe.click=vt,oe=e.extend(oe,l.scrollOverflowOptions),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e(this).length&&(ct.setAutoScrolling=s,ct.setRecordHistory=X,ct.setScrollingSpeed=Q,ct.setFitToSection=Z,ct.setLockAnchors=$,ct.setMouseWheelScrolling=ae,ct.setAllowScrolling=re,ct.setKeyboardScrolling=le,ct.moveSectionUp=se,ct.moveSectionDown=ce,ct.silentMoveTo=de,ct.moveTo=fe,ct.moveSlideRight=ue,ct.moveSlideLeft=he,ct.reBuild=pe,ct.setResponsive=ve,ct.getFullpageData=me,ct.destroy=tt,ge(),we());var Mt=!1,Ot=0,Ht=0,Bt=0,Rt=0,zt=0,Dt=(new Date).getTime(),Pt=0,qt=0,Ft=gt},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var ie={refreshId:null,iScrollInstances:[],onLeave:function(){var n=e(b).find(s).data("iscrollInstance");"undefined"!=typeof n&&n&&n.wheelOff()},beforeLeave:function(){ie.onLeave()},afterLoad:function(){var n=e(b).find(s).data("iscrollInstance");"undefined"!=typeof n&&n&&n.wheelOn()},create:function(n,t){var o=n.find(s);o.height(t),o.each(function(){var n=jQuery(this),t=n.data("iscrollInstance");t&&e.each(ie.iScrollInstances,function(){e(this).destroy()}),t=new IScroll(n.get(0),oe),ie.iScrollInstances.push(t),t.wheelOff(),n.data("iscrollInstance",t)})},isScrolled:function(e,n){var t=n.data("iscrollInstance");return!t||("top"===e?t.y>=0&&!n.scrollTop():"bottom"===e?0-t.y+n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0)},scrollable:function(e){return e.find(q).length?e.find(D).find(s):e.find(s)},scrollHeight:function(e){return e.find(s).children().first().get(0).scrollHeight},remove:function(e){var n=e.find(s);if(n.length){var t=n.data("iscrollInstance");t.destroy(),n.data("iscrollInstance",null)}e.find(s).children().first().children().first().unwrap().unwrap()},update:function(n,t){clearTimeout(ie.refreshId),ie.refreshId=setTimeout(function(){e.each(ie.iScrollInstances,function(){e(this).get(0).refresh()})},150),n.find(s).css("height",t+"px").parent().css("height",t+"px")},wrapContent:function(){return'<div class="'+l+'"><div class="fp-scroller"></div></div>'}}});
//# sourceMappingURL=jquery.fullpage.min.js.map

/*tweenmax.min.js*/
/*!
 * VERSION: beta 1.10.3
 * DATE: 2013-09-02
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){"use strict";window._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=[].slice,r=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=r.prototype.render},n=function(t){return t.jquery||t.length&&t!==window&&t[0]&&(t[0]===window||t[0].nodeType&&t[0].style&&!t.nodeType)},a=r.prototype=i.to({},.1,{}),o=[];r.version="1.10.3",a.constructor=r,a.kill()._gc=!1,r.killTweensOf=r.killDelayedCallsTo=i.killTweensOf,r.getTweensOf=i.getTweensOf,r.ticker=i.ticker,a.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},a.updateTo=function(t,e){var s,r=this.ratio;e&&this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted)if(e)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var n=this._time;this.render(0,!0,!1),this._initted=!1,this.render(n,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var a,o=1/(1-r),h=this._firstPT;h;)a=h.s+h.c,h.c*=o,h.s=a-h.c,h=h._next}return this},a.render=function(t,e,i){var s,r,n,a,h,l,_,u=this._dirty?this.totalDuration():this._totalDuration,p=this._time,f=this._totalTime,c=this._cycle;if(t>=u?(this._totalTime=u,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete"),0===this._duration&&((0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&(i=!0,this._rawPrevTime>0&&(r="onReverseComplete",e&&(t=-1))),this._rawPrevTime=t)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==f||0===this._duration&&this._rawPrevTime>0)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=t)):this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(a=this._duration+this._repeatDelay,this._cycle=this._totalTime/a>>0,0!==this._cycle&&this._cycle===this._totalTime/a&&this._cycle--,this._time=this._totalTime-this._cycle*a,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)),this._easeType?(h=this._time/this._duration,l=this._easeType,_=this._easePower,(1===l||3===l&&h>=.5)&&(h=1-h),3===l&&(h*=2),1===_?h*=h:2===_?h*=h*h:3===_?h*=h*h*h:4===_&&(h*=h*h*h*h),this.ratio=1===l?1-h:2===l?h:.5>this._time/this._duration?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/this._duration)),p===this._time&&!i)return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),void 0;if(!this._initted){if(this._init(),!this._initted)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/this._duration):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===f&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||o))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||o)),this._cycle!==c&&(e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||o)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||o)))},r.to=function(t,e,i){return new r(t,e,i)},r.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new r(t,e,i)},r.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new r(t,e,s)},r.staggerTo=r.allTo=function(t,e,a,h,l,_,u){h=h||0;var p,f,c,m,d=a.delay||0,g=[],v=function(){a.onComplete&&a.onComplete.apply(a.onCompleteScope||this,arguments),l.apply(u||this,_||o)};for(t instanceof Array||("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=s.call(t,0))),p=t.length,c=0;p>c;c++){f={};for(m in a)f[m]=a[m];f.delay=d,c===p-1&&l&&(f.onComplete=v),g[c]=new r(t[c],e,f),d+=h}return g},r.staggerFrom=r.allFrom=function(t,e,i,s,n,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,r.staggerTo(t,e,i,s,n,a,o)},r.staggerFromTo=r.allFromTo=function(t,e,i,s,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,r.staggerTo(t,e,s,n,a,o,h)},r.delayedCall=function(t,e,i,s,n){return new r(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:n,overwrite:0})},r.set=function(t,e){return new r(t,0,e)},r.isTweening=function(t){for(var e,s=i.getTweensOf(t),r=s.length;--r>-1;)if(e=s[r],e._active||e._startTime===e._timeline._time&&e._timeline._active)return!0;return!1};var h=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(h(n,e)),r=s.length),n=n._next;return s},l=r.getAllTweens=function(e){return h(t._rootTimeline,e).concat(h(t._rootFramesTimeline,e))};r.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,h=l(0!=r),_=h.length,u=i&&s&&r;for(o=0;_>o;o++)a=h[o],(u||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a.totalDuration()):a._enabled(!1,!1))},r.killChildTweensOf=function(t,e){if(null!=t){var a,o,h,l,_,u=i._tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),n(t)&&(t=s(t,0)),t instanceof Array)for(l=t.length;--l>-1;)r.killChildTweensOf(t[l],e);else{a=[];for(h in u)for(o=u[h].target.parentNode;o;)o===t&&(a=a.concat(u[h].tweens)),o=o.parentNode;for(_=a.length,l=0;_>l;l++)e&&a[l].totalTime(a[l].totalDuration()),a[l]._enabled(!1,!1)}}};var _=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=l(r),h=i&&s&&r,_=o.length;--_>-1;)a=o[_],(h||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return r.pauseAll=function(t,e,i){_(!0,t,e,i)},r.resumeAll=function(t,e,i){_(!1,t,e,i)},r.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||1e-6,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},a.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},a.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},a.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},a.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},a.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},a.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},a.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},a.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},r},!0),window._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],i instanceof Array&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));r.tweens instanceof Array&&this.add(r.tweens,0,r.align,r.stagger)},r=[],n=function(t){var e,i={};for(e in t)i[e]=t[e];return i},a=function(t,e,i,s){t._timeline.pause(t._startTime),e&&e.apply(s||t._timeline,i||r)},o=r.slice,h=s.prototype=new e;return s.version="1.10.3",h.constructor=s,h.kill()._gc=!1,h.to=function(t,e,s,r){return e?this.add(new i(t,e,s),r):this.set(t,s,r)},h.from=function(t,e,s,r){return this.add(i.from(t,e,s),r)},h.fromTo=function(t,e,s,r,n){return e?this.add(i.fromTo(t,e,s,r),n):this.set(t,r,n)},h.staggerTo=function(t,e,r,a,h,l,_,u){var p,f=new s({onComplete:l,onCompleteParams:_,onCompleteScope:u});for("string"==typeof t&&(t=i.selector(t)||t),!(t instanceof Array)&&t.length&&t!==window&&t[0]&&(t[0]===window||t[0].nodeType&&t[0].style&&!t.nodeType)&&(t=o.call(t,0)),a=a||0,p=0;t.length>p;p++)r.startAt&&(r.startAt=n(r.startAt)),f.to(t[p],e,n(r),p*a);return this.add(f,h)},h.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},h.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},h.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},h.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},h.add=function(r,n,a,o){var h,l,_,u,p,f;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array){for(a=a||"normal",o=o||0,h=n,l=r.length,_=0;l>_;_++)(u=r[_])instanceof Array&&(u=new s({tweens:u})),this.add(u,h),"string"!=typeof u&&"function"!=typeof u&&("sequence"===a?h=u._startTime+u.totalDuration()/u._timeScale:"start"===a&&(u._startTime-=u.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),this._gc&&!this._paused&&this._duration<this.duration())for(p=this,f=p.rawTime()>r._startTime;p._gc&&p._timeline;)p._timeline.smoothChildTiming&&f?p.totalTime(p._totalTime,!0):p._enabled(!0,!1),p=p._timeline;return this},h.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},h._remove=function(t,i){return e.prototype._remove.call(this,t,i),this._last?this._time>this._last._startTime&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=0,this},h.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},h.insert=h.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},h.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},h.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},h.addPause=function(t,e,i,s){return this.call(a,["{self}",e,i,s],this,t)},h.removeLabel=function(t){return delete this._labels[t],this},h.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},h._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r instanceof Array)for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},h.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(t,e){return this.play(t,e)},h.gotoAndStop=function(t,e){return this.pause(t,e)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,l=this._dirty?this.totalDuration():this._totalDuration,_=this._time,u=this._startTime,p=this._timeScale,f=this._paused;if(t>=l?(this._totalTime=this._time=l,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>0&&(o="onReverseComplete"))),this._rawPrevTime=t,t=l+1e-6):1e-7>t?(this._totalTime=this._time=0,(0!==_||0===this._duration&&this._rawPrevTime>0)&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t):(this._rawPrevTime=t,t=0,this._initted||(h=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==_&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==_&&t>0&&(this._active=!0),0===_&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||r)),this._time>=_)for(s=this._first;s&&(a=s._next,!this._paused||f);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||f);)(s._active||_>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),o&&(this._gc||(u===this._startTime||p!==this._timeScale)&&(0===this._time||l>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||r)))}},h._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},h.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},h.getTweensOf=function(t,e){for(var s=i.getTweensOf(t),r=s.length,n=[],a=0;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[a++]=s[r]);return n},h._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},h.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},h._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},h.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var t=this._first;t;)t.invalidate(),t=t._next;return this},h._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},h.progress=function(t){return arguments.length?this.totalTime(this.duration()*t,!1):this._time/this.duration()},h.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},h.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},h.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),window._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=[],n=new i(null,null,1,0),a=function(t){for(;t;){if(t._paused)return!0;t=t._timeline}return!1},o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="1.10.3",o.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.tweenTo=function(t,i){i=i||{};var s,a,o={ease:n,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(s in i)o[s]=i[s];return o.time=this._parseTimeOrLabel(t),a=new e(this,Math.abs(Number(o.time)-this._time)/this._timeScale||.001,o),o.onStart=function(){a.target.paused(!0),a.vars.time!==a.target.time()&&a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||a,i.onStartParams||r)},a},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,l,_=this._dirty?this.totalDuration():this._totalDuration,u=this._duration,p=this._time,f=this._totalTime,c=this._startTime,m=this._timeScale,d=this._rawPrevTime,g=this._paused,v=this._cycle;if(t>=_?(this._locked||(this._totalTime=_,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",0===u&&(0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>0&&(o="onReverseComplete"))),this._rawPrevTime=t,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=u,t=u+1e-6)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==p||0===u&&this._rawPrevTime>0&&!this._locked)&&(o="onReverseComplete",n=this._reversed),0>t?(this._active=!1,0===u&&this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t):(this._rawPrevTime=t,t=0,this._initted||(h=!0))):(this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(l=u+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=u-this._time),this._time>u?(this._time=u,t=u+1e-6):0>this._time?this._time=t=0:t=this._time))),this._cycle!==v&&!this._locked){var y=this._yoyo&&0!==(1&v),T=y===(this._yoyo&&0!==(1&this._cycle)),w=this._totalTime,x=this._cycle,b=this._rawPrevTime,P=this._time;if(this._totalTime=v*u,v>this._cycle?y=!y:this._totalTime+=u,this._time=p,this._rawPrevTime=0===u?d-1e-5:d,this._cycle=v,this._locked=!0,p=y?0:u,this.render(p,e,0===u),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||r),T&&(p=y?u+1e-6:-1e-6,this.render(p,!0,!1)),this._locked=!1,this._paused&&!g)return;this._time=P,this._totalTime=w,this._cycle=x,this._rawPrevTime=b}if(!(this._time!==p&&this._first||i||h))return f!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||r)),this._time>=p)for(s=this._first;s&&(a=s._next,!this._paused||g);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||g);)(s._active||p>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||r)),o&&(this._locked||this._gc||(c===this._startTime||m!==this._timeScale)&&(0===this._time||_>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this.vars[o].apply(this.vars[o+"Scope"]||this,this.vars[o+"Params"]||r)))},o.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],o=this.getChildren(t,e,i),h=0,l=o.length;for(s=0;l>s;s++)r=o[s],r._paused||r._timeline._time>=r._startTime&&r._timeline._time<r._startTime+r._totalDuration/r._timeScale&&(a(r._timeline)||(n[h++]=r));return n},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},o.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},o.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=Math.PI/180,i=[],s=[],r=[],n={},a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},h=(t+e)/2,l=(e+i)/2,_=(i+s)/2,u=(h+l)/2,p=(l+_)/2,f=(p-u)/8;return r.b=h+(t-h)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+p)/2,a.b=p-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},l=function(t,e,n,a,o){var l,_,u,p,f,c,m,d,g,v,y,T,w,x=t.length-1,b=0,P=t[0].a;for(l=0;x>l;l++)f=t[b],_=f.a,u=f.d,p=t[b+1].d,o?(y=i[l],T=s[l],w=.25*(T+y)*e/(a?.5:r[l]||.5),c=u-(u-_)*(a?.5*e:0!==y?w/y:0),m=u+(p-u)*(a?.5*e:0!==T?w/T:0),d=u-(c+((m-c)*(3*y/(y+T)+.5)/4||0))):(c=u-.5*(u-_)*e,m=u+.5*(p-u)*e,d=u-(c+m)/2),c+=d,m+=d,f.c=g=c,f.b=0!==l?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=h(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=h(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,e,r,n){var o,h,l,_,u,p,f=[];if(n)for(t=[n].concat(t),h=t.length;--h>-1;)"string"==typeof(p=t[h][e])&&"="===p.charAt(1)&&(t[h][e]=n[e]+Number(p.charAt(0)+p.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][e],0,0,t[-1>o?0:1][e]),f;for(h=0;o>h;h++)l=t[h][e],_=t[h+1][e],f[h]=new a(l,0,0,_),r&&(u=t[h+2][e],i[h]=(i[h]||0)+(_-l)*(_-l),s[h]=(s[h]||0)+(u-_)*(u-_));return f[h]=new a(t[h][e],0,0,t[h+1][e]),f},u=function(t,e,a,h,u,p){var f,c,m,d,g,v,y,T,w={},x=[],b=p||t[0];u="string"==typeof u?","+u+",":o,null==e&&(e=1);for(c in t[0])x.push(c);if(t.length>1){for(T=t[t.length-1],y=!0,f=x.length;--f>-1;)if(c=x[f],Math.abs(b[c]-T[c])>.05){y=!1;break}y&&(t=t.concat(),p&&t.unshift(p),t.push(t[1]),p=t[t.length-3])}for(i.length=s.length=r.length=0,f=x.length;--f>-1;)c=x[f],n[c]=-1!==u.indexOf(","+c+","),w[c]=_(t,c,n[c],p);for(f=i.length;--f>-1;)i[f]=Math.sqrt(i[f]),s[f]=Math.sqrt(s[f]);if(!h){for(f=x.length;--f>-1;)if(n[c])for(m=w[x[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/s[d]+m[d].da/i[d],r[d]=(r[d]||0)+g*g;for(f=r.length;--f>-1;)r[f]=Math.sqrt(r[f])}for(f=x.length,d=a?4:1;--f>-1;)c=x[f],m=w[c],l(m,e,a,h,n[c]),y&&(m.splice(0,d),m.splice(m.length-d,d));return w},p=function(t,e,i){e=e||"soft";var s,r,n,o,h,l,_,u,p,f,c,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(p in t[0])v.push(p);for(l=v.length;--l>-1;){for(p=v[l],m[p]=h=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][p]:"string"==typeof(c=t[_][p])&&"="===c.charAt(1)?i[p]+Number(c.charAt(0)+c.substr(2)):Number(c),g&&_>1&&u-1>_&&(h[f++]=(s+h[f-2])/2),h[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=h[_],r=h[_+1],n=h[_+2],o=2===d?0:h[_+3],h[f++]=c=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);h.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,h,l,_,u,p,f,c=1/i,m=t.length;--m>-1;)for(p=t[m],n=p.a,a=p.d-n,o=p.c-n,h=p.b-n,s=r=0,_=1;i>=_;_++)l=c*_,u=1-l,s=r-(r=(l*l*a+3*u*(l*o+u*h))*l),f=m*i+_-1,e[f]=(e[f]||0)+s*s},c=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],h=0,l=0,_=e-1,u=[],p=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)h+=Math.sqrt(a[s]),n=s%e,p[n]=h,n===_&&(l+=h,n=s/e>>0,u[n]=p,o[n]=l,h=0,p=[]);return{length:l,lengths:o,segments:u}},m=window._gsDefine.plugin({propName:"bezier",priority:-1,API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,h=e.values||[],l={},_=h[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],l[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||l[s]!==h[0][s]&&(o=l);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):p(h,e.type,l),this._segCount=this._beziers[s].length,this._timeRes){var m=c(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;)for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;return!0},set:function(e){var i,s,r,n,a,o,h,l,_,u,p=this._segCount,f=this._func,c=this._target;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&p-1>r){for(l=p-1;l>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(l=u.length-1;l>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?p-1:p*e>>0,o=(e-i*(1/p))*p;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],h=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(h=h+(h>0?.5:-.5)>>0),f[n]?c[n](h):c[n]=h;if(this._autoRotate){var m,d,g,v,y,T,w,x=this._autoRotate;for(r=x.length;--r>-1;)n=x[r][2],T=x[r][3]||0,w=x[r][4]===!0?1:t,a=this._beziers[x[r][0]],m=this._beziers[x[r][1]],a&&m&&(a=a[i],m=m[i],d=a.a+(a.b-a.a)*o,v=a.b+(a.c-a.b)*o,d+=(v-d)*o,v+=(a.c+(a.d-a.c)*o-v)*o,g=m.a+(m.b-m.a)*o,y=m.b+(m.c-m.b)*o,g+=(y-g)*o,y+=(m.c+(m.d-m.c)*o-y)*o,h=Math.atan2(y-g,v-d)*w+T,f[n]?c[n](h):c[n]=h)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=h,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=window._gsDefine.globals.CSSPlugin;if(t){var i=t._internals,s=i._parseToProxy,r=i._setPluginRatio,n=i.CSSPropTween;i._registerComplexSpecialProp("bezier",{parser:function(t,i,a,o,h,l){i instanceof Array&&(i={values:i}),l=new m;var _,u,p,f=i.values,c=f.length-1,d=[],g={};if(0>c)return h;for(_=0;c>=_;_++)p=s(t,f[_],o,h,l,c!==_),d[_]=p.end;for(u in i)g[u]=i[u];return g.values=d,h=new n(t,"bezier",0,0,p.pt,2),h.data=p,h.plugin=l,h.setRatio=r,0===g.autoRotate&&(g.autoRotate=!0),!g.autoRotate||g.autoRotate instanceof Array||(_=g.autoRotate===!0?0:Number(g.autoRotate)*e,g.autoRotate=null!=p.end.left?[["left","top","rotation",_,!0]]:null!=p.end.x?[["x","y","rotation",_,!0]]:!1),g.autoRotate&&(o._transform||o._enableTransforms(!1),p.autoRotate=o._target._gsTransform),l._onInitTween(p.proxy,g,o._tween),h
}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),window._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o={},h=a.prototype=new t("css");h.constructor=a,a.version="1.10.3",a.API=2,a.defaultTransformPerspective=0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h};var l,_,u,p,f,c,m=/(?:\d|\-\d|\.\d|\-\.\d)+/g,d=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,g=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/[^\d\-\.]/g,y=/(?:\d|\-|\+|=|#|\.)*/g,T=/opacity *= *([^)]*)/,w=/opacity:([^;]*)/,x=/alpha\(opacity *=.+?\)/i,b=/^(rgb|hsl)/,P=/([A-Z])/g,k=/-([a-z])/gi,S=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,R=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,O=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,D=/,(?=[^\)]*(?:\(|$))/gi,M=Math.PI/180,I=180/Math.PI,F={},E=document,N=E.createElement("div"),L=E.createElement("img"),X=a._internals={_specialProps:o},z=navigator.userAgent,U=function(){var t,e=z.indexOf("Android"),i=E.createElement("div");return u=-1!==z.indexOf("Safari")&&-1===z.indexOf("Chrome")&&(-1===e||Number(z.substr(e+8,1))>3),f=u&&6>Number(z.substr(z.indexOf("Version/")+8,1)),p=-1!==z.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z),c=parseFloat(RegExp.$1),i.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",t=i.getElementsByTagName("a")[0],t?/^0.55/.test(t.style.opacity):!1}(),Y=function(t){return T.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},j=function(t){window.console&&console.log(t)},B="",q="",V=function(t,e){e=e||N;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(q=3===s?"ms":i[s],B="-"+q.toLowerCase()+"-",q+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},G=a.getStyle=function(t,e,i,s,r){var n;return U||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t,null))?(t=i.getPropertyValue(e.replace(P,"-$1").toLowerCase()),n=t||i.length?t:i[e]):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):Y(t)},$=function(t,e,i,s,r){if("px"===s||!s)return i;if("auto"===s||!i)return 0;var n,a=A.test(e),o=t,h=N.style,l=0>i;return l&&(i=-i),"%"===s&&-1!==e.indexOf("border")?n=i/100*(a?t.clientWidth:t.clientHeight):(h.cssText="border-style:solid;border-width:0;position:absolute;line-height:0;","%"!==s&&o.appendChild?h[a?"borderLeftWidth":"borderTopWidth"]=i+s:(o=t.parentNode||E.body,h[a?"width":"height"]=i+s),o.appendChild(N),n=parseFloat(N[a?"offsetWidth":"offsetHeight"]),o.removeChild(N),0!==n||r||(n=$(t,e,i,s,!0))),l?-n:n},Q=function(t,e,i){if("absolute"!==G(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=G(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(y,""))||0)},W=function(t,e){var i,s,r={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r[e[i].replace(k,R)]=e.getPropertyValue(e[i]);else for(i in e)r[i]=e[i];else if(e=t.currentStyle||t.style)for(i in e)r[i.replace(k,R)]=e[i];return U||(r.opacity=Y(t)),s=be(t,e,!1),r.rotation=s.rotation*I,r.skewX=s.skewX*I,r.scaleX=s.scaleX,r.scaleY=s.scaleY,r.x=s.x,r.y=s.y,xe&&(r.z=s.z,r.rotationX=s.rotationX*I,r.rotationY=s.rotationY*I,r.scaleZ=s.scaleZ),r.filters&&delete r.filters,r},H=function(t,e,i,s,r){var n,a,o,h={},l=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(h[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(v,"")?n:0:Q(t,a),void 0!==l[a]&&(o=new ue(l,a,l[a],o)));if(s)for(a in s)"className"!==a&&(h[a]=s[a]);return{difs:h,firstMPT:o}},K={width:["Left","Right"],height:["Top","Bottom"]},J=["marginLeft","marginRight","marginTop","marginBottom"],te=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=K[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(G(t,"padding"+r[n],i,!0))||0,s-=parseFloat(G(t,"border"+r[n]+"Width",i,!0))||0;return s},ee=function(t,e){(null==t||""===t||"auto"===t||"auto auto"===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(v,"")),e.oy=parseFloat(r.replace(v,""))),s+" "+r+(i.length>2?" "+i[2]:"")},ie=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},se=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*Number(t.substr(2))+e:parseFloat(t)},re=function(t,e,i,s){var r,n,a,o,h=1e-6;return null==t?o=e:"number"==typeof t?o=t*M:(r=2*Math.PI,n=t.split("_"),a=Number(n[0].replace(v,""))*(-1===t.indexOf("rad")?M:1)-("="===t.charAt(1)?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},ne={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ae=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},oe=function(t){var e,i,s,r,n,a;return t&&""!==t?"number"==typeof t?[t>>16,255&t>>8,255&t]:(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),ne[t]?ne[t]:"#"===t.charAt(0)?(4===t.length&&(e=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+e+e+i+i+s+s),t=parseInt(t.substr(1),16),[t>>16,255&t>>8,255&t]):"hsl"===t.substr(0,3)?(t=t.match(m),r=Number(t[0])%360/360,n=Number(t[1])/100,a=Number(t[2])/100,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.length>3&&(t[3]=Number(t[3])),t[0]=ae(r+1/3,e,i),t[1]=ae(r,e,i),t[2]=ae(r-1/3,e,i),t):(t=t.match(m)||ne.transparent,t[0]=Number(t[0]),t[1]=Number(t[1]),t[2]=Number(t[2]),t.length>3&&(t[3]=Number(t[3])),t)):ne.black},he="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in ne)he+="|"+h+"\\b";he=RegExp(he+")","gi");var le=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(he)||[""])[0]:"",a=t.split(n).join("").match(g)||[],o=t.substr(0,t.indexOf(a[0])),h=")"===t.charAt(t.length-1)?")":"",l=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(m,""):"";return _?r=e?function(t){var e,p,f,c;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(c=t.replace(D,"|").split("|"),f=0;c.length>f;f++)c[f]=r(c[f]);return c.join(",")}if(e=(t.match(he)||[n])[0],p=t.split(e).join("").match(g)||[],f=p.length,_>f--)for(;_>++f;)p[f]=i?p[0|(f-1)/2]:a[f];return o+p.join(l)+l+e+h+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,p;if("number"==typeof t)t+=u;else if(s&&D.test(t)){for(n=t.replace(D,"|").split("|"),p=0;n.length>p;p++)n[p]=r(n[p]);return n.join(",")}if(e=t.match(g)||[],p=e.length,_>p--)for(;_>++p;)e[p]=i?e[0|(p-1)/2]:a[p];return o+e.join(l)+h}:function(t){return t}},_e=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var h,l=(i+"").split(" ");for(o={},h=0;4>h;h++)o[t[h]]=l[h]=l[h]||l[(h-1)/2>>0];return r.parse(e,o,n,a)}},ue=(X._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,h=1e-6;o;)e=a[o.v],o.r?e=e>0?0|e+.5:0|e-.5:h>e&&e>-h&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),pe=(X._parseToProxy=function(t,e,i,s,r,n){var a,o,h,l,_,u=s,p={},f={},c=i._transform,m=F;for(i._transform=null,F=e,s=_=i.parse(t,e,s,r),F=m,n&&(i._transform=c,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,p[o]=s.s,n||(l=new ue(s,"s",o,l,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)h="xn"+a,o=s.p+"_"+h,f[o]=s.data[h],p[o]=s[h],n||(l=new ue(s,h,o,l,s.rxp[h]));s=s._next}return{proxy:p,end:f,firstMPT:l,pt:_}},X.CSSPropTween=function(t,e,s,r,a,o,h,l,_,u,p){this.t=t,this.p=e,this.s=s,this.c=r,this.n=h||e,t instanceof pe||n.push(this.n),this.r=l,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===p?s+r:p,a&&(this._next=a,a._prev=this)}),fe=a.parseComplex=function(t,e,i,s,r,n,a,o,h,_){i=i||n||"",a=new pe(t,e,0,0,a,_?2:1,null,!1,o,i,s),s+="";var u,p,f,c,g,v,y,T,w,x,P,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),A=S.length,C=l!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(D,", ").split(" "),R=R.join(" ").replace(D,", ").split(" "),A=S.length),A!==R.length&&(S=(n||"").split(" "),A=S.length),a.plugin=h,a.setRatio=_,u=0;A>u;u++)if(c=S[u],g=R[u],T=parseFloat(c),T||0===T)a.appendXtra("",T,ie(g,T),g.replace(d,""),C&&-1!==g.indexOf("px"),!0);else if(r&&("#"===c.charAt(0)||ne[c]||b.test(c)))k=","===g.charAt(g.length-1)?"),":")",c=oe(c),g=oe(g),w=c.length+g.length>6,w&&!U&&0===g[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(U||(w=!1),a.appendXtra(w?"rgba(":"rgb(",c[0],g[0]-c[0],",",!0,!0).appendXtra("",c[1],g[1]-c[1],",",!0).appendXtra("",c[2],g[2]-c[2],w?",":k,!0),w&&(c=4>c.length?1:c[3],a.appendXtra("",c,(4>g.length?1:g[3])-c,k,!1)));else if(v=c.match(m)){if(y=g.match(d),!y||y.length!==v.length)return a;for(f=0,p=0;v.length>p;p++)P=v[p],x=c.indexOf(P,f),a.appendXtra(c.substr(f,x-f),Number(P),ie(y[p],P),"",C&&"px"===c.substr(x+P.length,2),0===p),f=x+P.length;a["xs"+a.l]+=c.substr(f)}else a["xs"+a.l]+=a.l?" "+c:c;if(-1!==s.indexOf("=")&&a.data){for(k=a.xs0+a.data.s,u=1;a.l>u;u++)k+=a["xs"+u]+a.data["xn"+u];a.e=k+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ce=9;for(h=pe.prototype,h.l=h.pr=0;--ce>0;)h["xn"+ce]=0,h["xs"+ce]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new pe(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var me=function(t,e){e=e||{},this.p=e.prefix?V(t)||t:t,o[t]=o[this.p]=this,this.format=e.formatter||le(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},de=X._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new me(n[s],e)},ge=function(t){if(!o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";de(t,{parser:function(t,i,s,r,n,a,h){var l=(window.GreenSockGlobals||window).com.greensock.plugins[e];return l?(l._cssRegister(),o[s].parse(t,i,s,r,n,a,h)):(j("Error: "+e+" js file not loaded."),n)}})}};h=me.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,h,l,_,u,p=this.keyword;if(this.multi&&(D.test(i)||D.test(e)?(o=e.replace(D,"|").split("|"),h=i.replace(D,"|").split("|")):p&&(o=[e],h=[i])),h){for(l=h.length>o.length?h.length:o.length,a=0;l>a;a++)e=o[a]=o[a]||this.dflt,i=h[a]=h[a]||this.dflt,p&&(_=e.indexOf(p),u=i.indexOf(p),_!==u&&(i=-1===u?h:o,i[a]+=" "+p));e=o.join(", "),i=h.join(", ")}return fe(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){de(t,{parser:function(t,s,r,n,a,o){var h=new pe(t,r,0,0,a,2,r,!1,i);return h.plugin=o,h.setRatio=e(t,s,n._tween,r),h},priority:i})};var ve="scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),ye=V("transform"),Te=B+"transform",we=V("transformOrigin"),xe=null!==V("perspective"),be=function(t,e,i,s){if(t._gsTransform&&i&&!s)return t._gsTransform;var r,n,o,h,l,_,u,p,f,c,m,d,g,v=i?t._gsTransform||{skewY:0}:{skewY:0},y=0>v.scaleX,T=2e-5,w=1e5,x=-Math.PI+1e-4,b=Math.PI-1e-4,P=xe?parseFloat(G(t,we,e,!1,"0 0 0").split(" ")[2])||v.zOrigin||0:0;for(ye?r=G(t,Te,e,!0):t.currentStyle&&(r=t.currentStyle.filter.match(C),r=r&&4===r.length?[r[0].substr(4),Number(r[2].substr(4)),Number(r[1].substr(4)),r[3].substr(4),v.x||0,v.y||0].join(","):""),n=(r||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],o=n.length;--o>-1;)h=Number(n[o]),n[o]=(l=h-(h|=0))?(0|l*w+(0>l?-.5:.5))/w+h:h;if(16===n.length){var k=n[8],S=n[9],R=n[10],A=n[12],O=n[13],D=n[14];if(v.zOrigin&&(D=-v.zOrigin,A=k*D-n[12],O=S*D-n[13],D=R*D+v.zOrigin-n[14]),!i||s||null==v.rotationX){var M,I,F,E,N,L,X,z=n[0],U=n[1],Y=n[2],j=n[3],B=n[4],q=n[5],V=n[6],Z=n[7],$=n[11],Q=v.rotationX=Math.atan2(V,R),W=x>Q||Q>b;Q&&(E=Math.cos(-Q),N=Math.sin(-Q),M=B*E+k*N,I=q*E+S*N,F=V*E+R*N,k=B*-N+k*E,S=q*-N+S*E,R=V*-N+R*E,$=Z*-N+$*E,B=M,q=I,V=F),Q=v.rotationY=Math.atan2(k,z),Q&&(L=x>Q||Q>b,E=Math.cos(-Q),N=Math.sin(-Q),M=z*E-k*N,I=U*E-S*N,F=Y*E-R*N,S=U*N+S*E,R=Y*N+R*E,$=j*N+$*E,z=M,U=I,Y=F),Q=v.rotation=Math.atan2(U,q),Q&&(X=x>Q||Q>b,E=Math.cos(-Q),N=Math.sin(-Q),z=z*E+B*N,I=U*E+q*N,q=U*-N+q*E,V=Y*-N+V*E,U=I),X&&W?v.rotation=v.rotationX=0:X&&L?v.rotation=v.rotationY=0:L&&W&&(v.rotationY=v.rotationX=0),v.scaleX=(0|Math.sqrt(z*z+U*U)*w+.5)/w,v.scaleY=(0|Math.sqrt(q*q+S*S)*w+.5)/w,v.scaleZ=(0|Math.sqrt(V*V+R*R)*w+.5)/w,v.skewX=0,v.perspective=$?1/(0>$?-$:$):0,v.x=A,v.y=O,v.z=D}}else if(!(xe&&!s&&n.length&&v.x===n[4]&&v.y===n[5]&&(v.rotationX||v.rotationY)||void 0!==v.x&&"none"===G(t,"display",e))){var H=n.length>=6,K=H?n[0]:1,J=n[1]||0,te=n[2]||0,ee=H?n[3]:1;v.x=n[4]||0,v.y=n[5]||0,_=Math.sqrt(K*K+J*J),u=Math.sqrt(ee*ee+te*te),p=K||J?Math.atan2(J,K):v.rotation||0,f=te||ee?Math.atan2(te,ee)+p:v.skewX||0,c=_-Math.abs(v.scaleX||0),m=u-Math.abs(v.scaleY||0),Math.abs(f)>Math.PI/2&&Math.abs(f)<1.5*Math.PI&&(y?(_*=-1,f+=0>=p?Math.PI:-Math.PI,p+=0>=p?Math.PI:-Math.PI):(u*=-1,f+=0>=f?Math.PI:-Math.PI)),d=(p-v.rotation)%Math.PI,g=(f-v.skewX)%Math.PI,(void 0===v.skewX||c>T||-T>c||m>T||-T>m||d>x&&b>d&&false|d*w||g>x&&b>g&&false|g*w)&&(v.scaleX=_,v.scaleY=u,v.rotation=p,v.skewX=f),xe&&(v.rotationX=v.rotationY=v.z=0,v.perspective=parseFloat(a.defaultTransformPerspective)||0,v.scaleZ=1)}v.zOrigin=P;for(o in v)T>v[o]&&v[o]>-T&&(v[o]=0);return i&&(t._gsTransform=v),v},Pe=function(t){var e,i,s=this.data,r=-s.rotation,n=r+s.skewX,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,h=(0|Math.sin(r)*s.scaleX*a)/a,l=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,p=this.t.currentStyle;if(p){i=h,h=-l,l=-i,e=p.filter,u.filter="";var f,m,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==p.position,w="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+h+", M21="+l+", M22="+_,x=s.x,b=s.y;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,m=(s.oyp?.01*g*s.oy:s.oy)-g/2,x+=f-(f*o+m*h),b+=m-(f*l+m*_)),v?(f=d/2,m=g/2,w+=", Dx="+(f-(f*o+m*h)+x)+", Dy="+(m-(f*l+m*_)+b)+")"):w+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(O,w):w+" "+e,(0===t||1===t)&&1===o&&0===h&&0===l&&1===_&&(v&&-1===w.indexOf("Dx=0, Dy=0")||T.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>c?1:-1;for(f=s.ieOffsetX||0,m=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>h?-h:h)*g))/2+x),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>l?-l:l)*d))/2+b),ce=0;4>ce;ce++)k=J[ce],P=p[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(y,""))||0,S=i!==s[k]?2>ce?-s.ieOffsetX:-s.ieOffsetY:2>ce?f-s.ieOffsetX:m-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ce||2===ce?1:R)))+"px"}}},ke=function(){var t,e,i,s,r,n,a,o,h,l,_,u,f,c,m,d,g,v,y,T,w,x,b,P,k,S,R=this.data,A=this.t.style,C=R.rotation,O=R.scaleX,D=R.scaleY,M=R.scaleZ,I=R.perspective;if(p&&(P=A.top?"top":A.bottom?"bottom":parseFloat(G(this.t,"top",null,!1))?"bottom":"top",T=G(this.t,P,null,!1),k=parseFloat(T)||0,S=T.substr((k+"").length)||"px",R._ffFix=!R._ffFix,A[P]=(R._ffFix?k+.05:k-.05)+S),C||R.skewX)v=Math.cos(C),y=Math.sin(C),t=v,r=y,R.skewX&&(C-=R.skewX,v=Math.cos(C),y=Math.sin(C)),e=-y,n=v;else{if(!(R.rotationY||R.rotationX||1!==M||I))return A[ye]="translate3d("+R.x+"px,"+R.y+"px,"+R.z+"px)"+(1!==O||1!==D?" scale("+O+","+D+")":""),void 0;t=n=1,e=r=0}_=1,i=s=a=o=h=l=u=f=c=0,m=I?-1/I:0,d=R.zOrigin,g=1e5,C=R.rotationY,C&&(v=Math.cos(C),y=Math.sin(C),h=_*-y,f=m*-y,i=t*y,a=r*y,_*=v,m*=v,t*=v,r*=v),C=R.rotationX,C&&(v=Math.cos(C),y=Math.sin(C),T=e*v+i*y,w=n*v+a*y,x=l*v+_*y,b=c*v+m*y,i=e*-y+i*v,a=n*-y+a*v,_=l*-y+_*v,m=c*-y+m*v,e=T,n=w,l=x,c=b),1!==M&&(i*=M,a*=M,_*=M,m*=M),1!==D&&(e*=D,n*=D,l*=D,c*=D),1!==O&&(t*=O,r*=O,h*=O,f*=O),d&&(u-=d,s=i*u,o=a*u,u=_*u+d),s=(T=(s+=R.x)-(s|=0))?(0|T*g+(0>T?-.5:.5))/g+s:s,o=(T=(o+=R.y)-(o|=0))?(0|T*g+(0>T?-.5:.5))/g+o:o,u=(T=(u+=R.z)-(u|=0))?(0|T*g+(0>T?-.5:.5))/g+u:u,A[ye]="matrix3d("+[(0|t*g)/g,(0|r*g)/g,(0|h*g)/g,(0|f*g)/g,(0|e*g)/g,(0|n*g)/g,(0|l*g)/g,(0|c*g)/g,(0|i*g)/g,(0|a*g)/g,(0|_*g)/g,(0|m*g)/g,s,o,u,I?1+-u/I:1].join(",")+")"},Se=function(){var t,e,i,s,r,n,a,o,h,l=this.data,_=this.t,u=_.style;p&&(t=u.top?"top":u.bottom?"bottom":parseFloat(G(_,"top",null,!1))?"bottom":"top",e=G(_,t,null,!1),i=parseFloat(e)||0,s=e.substr((i+"").length)||"px",l._ffFix=!l._ffFix,u[t]=(l._ffFix?i+.05:i-.05)+s),l.rotation||l.skewX?(r=l.rotation,n=r-l.skewX,a=1e5,o=l.scaleX*a,h=l.scaleY*a,u[ye]="matrix("+(0|Math.cos(r)*o)/a+","+(0|Math.sin(r)*o)/a+","+(0|Math.sin(n)*-h)/a+","+(0|Math.cos(n)*h)/a+","+l.x+","+l.y+")"):u[ye]="matrix("+l.scaleX+",0,0,"+l.scaleY+","+l.x+","+l.y+")"};de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",{parser:function(t,e,i,s,n,a,o){if(s._transform)return n;var h,l,_,u,p,f,c,m=s._transform=be(t,r,!0,o.parseTransform),d=t.style,g=1e-6,v=ve.length,y=o,T={};if("string"==typeof y.transform&&ye)_=d.cssText,d[ye]=y.transform,d.display="block",h=be(t,null,!1),d.cssText=_;else if("object"==typeof y){if(h={scaleX:se(null!=y.scaleX?y.scaleX:y.scale,m.scaleX),scaleY:se(null!=y.scaleY?y.scaleY:y.scale,m.scaleY),scaleZ:se(null!=y.scaleZ?y.scaleZ:y.scale,m.scaleZ),x:se(y.x,m.x),y:se(y.y,m.y),z:se(y.z,m.z),perspective:se(y.transformPerspective,m.perspective)},c=y.directionalRotation,null!=c)if("object"==typeof c)for(_ in c)y[_]=c[_];else y.rotation=c;h.rotation=re("rotation"in y?y.rotation:"shortRotation"in y?y.shortRotation+"_short":"rotationZ"in y?y.rotationZ:m.rotation*I,m.rotation,"rotation",T),xe&&(h.rotationX=re("rotationX"in y?y.rotationX:"shortRotationX"in y?y.shortRotationX+"_short":m.rotationX*I||0,m.rotationX,"rotationX",T),h.rotationY=re("rotationY"in y?y.rotationY:"shortRotationY"in y?y.shortRotationY+"_short":m.rotationY*I||0,m.rotationY,"rotationY",T)),h.skewX=null==y.skewX?m.skewX:re(y.skewX,m.skewX),h.skewY=null==y.skewY?m.skewY:re(y.skewY,m.skewY),(l=h.skewY-m.skewY)&&(h.skewX+=l,h.rotation+=l)}for(null!=y.force3D&&(m.force3D=y.force3D,f=!0),p=m.force3D||m.z||m.rotationX||m.rotationY||h.z||h.rotationX||h.rotationY||h.perspective,p||null==y.scale||(h.scaleZ=1);--v>-1;)i=ve[v],u=h[i]-m[i],(u>g||-g>u||null!=F[i])&&(f=!0,n=new pe(m,i,m[i],u,n),i in T&&(n.e=T[i]),n.xs0=0,n.plugin=a,s._overwriteProps.push(n.n));return u=y.transformOrigin,(u||xe&&p&&m.zOrigin)&&(ye?(f=!0,i=we,u=(u||G(t,i,r,!1,"50% 50%"))+"",n=new pe(d,i,0,0,n,-1,"transformOrigin"),n.b=d[i],n.plugin=a,xe?(_=m.zOrigin,u=u.split(" "),m.zOrigin=(u.length>2&&(0===_||"0px"!==u[2])?parseFloat(u[2]):_)||0,n.xs0=n.e=d[i]=u[0]+" "+(u[1]||"50%")+" 0px",n=new pe(m,"zOrigin",0,0,n,-1,n.n),n.b=_,n.xs0=n.e=m.zOrigin):n.xs0=n.e=d[i]=u):ee(u+"",m)),f&&(s._transformType=p||3===this._transformType?3:2),n},prefix:!0}),de("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),de("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,h,l,_,u,p,f,c,m,d,g,v,y,T,w,x,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),h=0;b.length>h;h++)this.p.indexOf("border")&&(b[h]=V(b[h])),u=_=G(t,b[h],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),p=l=o[h],f=parseFloat(u),v=u.substr((f+"").length),y="="===p.charAt(1),y?(c=parseInt(p.charAt(0)+"1",10),p=p.substr(2),c*=parseFloat(p),g=p.substr((c+"").length-(0>c?1:0))||""):(c=parseFloat(p),g=p.substr((c+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),w=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(w/d)+"%"):"em"===g?(x=$(t,"borderLeft",1,"em"),u=T/x+"em",_=w/x+"em"):(u=T+"px",_=w+"px"),y&&(p=parseFloat(u)+c+g,l=parseFloat(_)+c+g)),a=fe(P,b[h],u+" "+_,p+" "+l,!1,"0px",a);return a},prefix:!0,formatter:le("0px 0px 0px 0px",!1,!0)}),de("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,h,l,_,u,p,f="background-position",m=r||Z(t,null),d=this.format((m?c?m.getPropertyValue(f+"-x")+" "+m.getPropertyValue(f+"-y"):m.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(p=G(t,"backgroundImage").replace(S,""),p&&"none"!==p)){for(o=d.split(" "),h=g.split(" "),L.setAttribute("src",p),l=2;--l>-1;)d=o[l],_=-1!==d.indexOf("%"),_!==(-1!==h[l].indexOf("%"))&&(u=0===l?t.offsetWidth-L.width:t.offsetHeight-L.height,o[l]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:ee}),de("backgroundSize",{defaultValue:"0 0",formatter:ee}),de("perspective",{defaultValue:"0px",prefix:!0}),de("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),de("transformStyle",{prefix:!0}),de("backfaceVisibility",{prefix:!0}),de("margin",{parser:_e("marginTop,marginRight,marginBottom,marginLeft")}),de("padding",{parser:_e("paddingTop,paddingRight,paddingBottom,paddingLeft")}),de("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,h,l;return 9>c?(h=t.currentStyle,l=8>c?" ":",",o="rect("+h.clipTop+l+h.clipRight+l+h.clipBottom+l+h.clipLeft+")",e=this.format(e).split(",").join(l)):(o=this.format(G(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),de("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),de("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),de("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(G(t,"borderTopWidth",r,!1,"0px")+" "+G(t,"borderTopStyle",r,!1,"solid")+" "+G(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(he)||["#000"])[0]}}),de("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new pe(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Re=function(t){var e,i=this.t,s=i.filter||G(this.data,"filter"),r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!G(this.data,"filter")):(i.filter=s.replace(x,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("opacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(T,"opacity="+r))};de("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(G(t,"opacity",r,!1,"1")),h=t.style,l="autoAlpha"===i;return e=parseFloat(e),l&&1===o&&"hidden"===G(t,"visibility",r)&&0!==e&&(o=0),U?n=new pe(h,"opacity",o,e-o,n):(n=new pe(h,"opacity",100*o,100*(e-o),n),n.xn1=l?1:0,h.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Re),l&&(n=new pe(h,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var Ae=function(t,e){e&&(t.removeProperty?t.removeProperty(e.replace(P,"-$1").toLowerCase()):t.removeAttribute(e))},Ce=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.className=0===t?this.b:this.e;for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:Ae(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.className!==this.e&&(this.t.className=this.e)};de("className",{parser:function(t,e,s,n,a,o,h){var l,_,u,p,f,c=t.className,m=t.style.cssText;if(a=n._classNamePT=new pe(t,s,0,0,a,2),a.setRatio=Ce,a.pr=-11,i=!0,a.b=c,_=W(t,r),u=t._gsClassPT){for(p={},f=u.data;f;)p[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:c.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),n._tween._duration&&(t.className=a.e,l=H(t,_,W(t),h,p),t.className=c,a.data=l.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,l.difs,a,o)),a}});var Oe=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration){var e,i,s,r,n=this.t.style,a=o.transform.parse;if("all"===this.e)n.cssText="",r=!0;else for(e=this.e.split(","),s=e.length;--s>-1;)i=e[s],o[i]&&(o[i].parse===a?r=!0:i="transformOrigin"===i?we:o[i].p),Ae(n,i);r&&(Ae(n,ye),this.t._gsTransform&&delete this.t._gsTransform)}};for(de("clearProps",{parser:function(t,e,s,r,n){return n=new pe(t,s,0,0,n,2),n.setRatio=Oe,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ce=h.length;ce--;)ge(h[ce]);h=a.prototype,h._firstPT=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,l=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,p,c,m,d,g,v,y,T,x=t.style;if(_&&""===x.zIndex&&(h=G(t,"zIndex",r),("auto"===h||""===h)&&(x.zIndex=0)),"string"==typeof e&&(m=x.cssText,h=W(t,r),x.cssText=m+";"+e,h=H(t,h,W(t)).difs,!U&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,x.cssText=m),this._firstPT=p=this.parse(t,e,null),this._transformType){for(T=3===this._transformType,ye?u&&(_=!0,""===x.zIndex&&(v=G(t,"zIndex",r),("auto"===v||""===v)&&(x.zIndex=0)),f&&(x.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(T?"visible":"hidden"))):x.zoom=1,c=p;c&&c._next;)c=c._next;y=new pe(t,"transform",0,0,null,2),this._linkCSSP(y,null,c),y.setRatio=T&&xe?ke:ye?Se:Pe,y.data=this._transform||be(t,r,!0),n.pop()}if(i){for(;p;){for(g=p._next,c=m;c&&c.pr>p.pr;)c=c._next;(p._prev=c?c._prev:d)?p._prev._next=p:m=p,(p._next=c)?c._prev=p:d=p,p=g}this._firstPT=m}return!0},h.parse=function(t,e,i,n){var a,h,_,u,p,f,c,m,d,g,v=t.style;for(a in e)f=e[a],h=o[a],h?i=h.parse(t,f,a,this,i,n,e):(p=G(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&b.test(f)?(d||(f=oe(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=fe(v,a,p,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(_=parseFloat(p),c=_||0===_?p.substr((_+"").length):"",(""===p||"auto"===p)&&("width"===a||"height"===a?(_=te(t,a,r),c="px"):"left"===a||"top"===a?(_=Q(t,a,r),c="px"):(_="opacity"!==a?0:1,c="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(y,"")):(u=parseFloat(f),m=d?f.substr((u+"").length)||"":""),""===m&&(m=s[a]||c),f=u||0===u?(g?u+_:u)+m:e[a],c!==m&&""!==m&&(u||0===u)&&(_||0===_)&&(_=$(t,a,_,c),"%"===m?(_/=$(t,a,100,"%")/100,_>100&&(_=100),e.strictUnits!==!0&&(p=_+"%")):"em"===m?_/=$(t,a,1,"em"):(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+_+m)),g&&(u+=_),!_&&0!==_||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new pe(v,a,u||_||0,0,i,-1,a,!1,0,p,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:p):j("invalid "+a+" tween value: "+e[a]):(i=new pe(v,a,_,u-_,i,0,a,l!==!1&&("px"===m||"zIndex"===a),0,p,f),i.xs0=m)):i=fe(v,a,p,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=e>0?0|e+.5:0|e-.5:n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;)2!==r.type?r.t[r.p]=r.e:r.setRatio(t),r=r._next},h._enableTransforms=function(t){this._transformType=t||3===this._transformType?3:2,this._transform=this._transform||be(this._target,r,!0)},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var De=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)De(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(W(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||De(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o=e.to(t,i,s),h=[o],l=[],_=[],u=[],p=e._internals.reservedProps;for(t=o._targets||o.target,De(t,l,u),o.render(i,!0),De(t,_),o.render(0,!0),o._enabled(!0),r=u.length;--r>-1;)if(n=H(u[r],l[r],_[r]),n.firstMPT){n=n.difs;for(a in s)p[a]&&(n[a]=s[a]);h.push(e.to(u[r],i,n))}return h},t.activate([a]),a},!0),function(){var t=window._gsDefine.plugin({propName:"roundProps",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=t.prototype;e._onInitAllProps=function(){for(var t,e,i,s=this._tween,r=s.vars.roundProps instanceof Array?s.vars.roundProps:s.vars.roundProps.split(","),n=r.length,a={},o=s._propLookup.roundProps;--n>-1;)a[r[n]]=1;for(n=r.length;--n>-1;)for(t=r[n],e=s._firstPT;e;)i=e._next,e.pg?e.t._roundProps(a,!0):e.n===t&&(this._add(e.t,t,e.s,e.c),i&&(i._prev=e._prev),e._prev?e._prev._next=i:s._firstPT===e&&(s._firstPT=i),e._next=e._prev=null,s._propLookup[t]=o),e=i;return!1},e._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)
}}(),window._gsDefine.plugin({propName:"attr",API:2,init:function(t,e){var i;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={};for(i in e)this._addTween(this._proxy,i,parseFloat(t.getAttribute(i)),e[i],i)&&this._overwriteProps.push(i);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,i=this._overwriteProps,s=i.length;--s>-1;)e=i[s],this._target.setAttribute(e,this._proxy[e]+"")}}),window._gsDefine.plugin({propName:"directionalRotation",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,h=e.useRadians===!0?2*Math.PI:360,l=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=h,a!==a%(h/2)&&(a=0>a?a+h:a-h)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*h)%h-(0|a/h)*h:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*h)%h-(0|a/h)*h)),(a>l||-l>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,window._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=window.GreenSockGlobals||window,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},p=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},c=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),f=u,c=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=c?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),c?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new p(1,1,null),f=u;--f>-1;)a=l[f],o=new p(a.x,a.y,o);this._prev=new p(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),c},!0)}),function(t){"use strict";var e,i,s,r,n,a=t.GreenSockGlobals||t,o=function(t){var e,i=t.split("."),s=a;for(e=0;i.length>e;e++)s[i[e]]=s=s[i[e]]||{};return s},h=o("com.greensock"),l=[].slice,_=function(){},u={},p=function(e,i,s,r){this.sc=u[e]?u[e].sc:[],u[e]=this,this.gsClass=null,this.func=s;var n=[];this.check=function(h){for(var l,_,f,c,m=i.length,d=m;--m>-1;)(l=u[i[m]]||new p(i[m],[])).gsClass?(n[m]=l.gsClass,d--):h&&l.sc.push(this);if(0===d&&s)for(_=("com.greensock."+e).split("."),f=_.pop(),c=o(_.join("."))[f]=this.gsClass=s.apply(s,n),r&&(a[f]=c,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+e.split(".").join("/"),[],function(){return c}):"undefined"!=typeof module&&module.exports&&(module.exports=c)),m=0;this.sc.length>m;m++)this.sc[m].check()},this.check(!0)},f=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},c=h._class=function(t,e,i){return e=e||function(){},f(t,[],function(){return e},i),e};f.globals=a;var m=[0,0,1,1],d=[],g=c("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?m.concat(e):m},!0),v=g.map={},y=g.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?c("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],v[n+"."+o]=v[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(s=g.prototype,s._calcEnd=!1,s.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],i=e.length;--i>-1;)s=e[i]+",Power"+i,y(new g(null,null,1,i),s,"easeOut",!0),y(new g(null,null,2,i),s,"easeIn"+(0===i?",easeNone":"")),y(new g(null,null,3,i),s,"easeInOut");v.linear=h.easing.Linear.easeIn,v.swing=h.easing.Quad.easeInOut;var T=c("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});s=T.prototype,s.addEventListener=function(t,e,i,s,a){a=a||0;var o,h,l=this._listeners[t],_=0;for(null==l&&(this._listeners[t]=l=[]),h=l.length;--h>-1;)o=l[h],o.c===e&&o.s===i?l.splice(h,1):0===_&&a>o.pr&&(_=h+1);l.splice(_,0,{c:e,s:i,up:s,pr:a}),this!==r||n||r.wake()},s.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},s.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i)};var w=t.requestAnimationFrame,x=t.cancelAnimationFrame,b=Date.now||function(){return(new Date).getTime()},P=b();for(e=["ms","moz","webkit","o"],i=e.length;--i>-1&&!w;)w=t[e[i]+"RequestAnimationFrame"],x=t[e[i]+"CancelAnimationFrame"]||t[e[i]+"CancelRequestAnimationFrame"];c("Ticker",function(t,e){var i,s,a,o,h,l=this,u=b(),p=e!==!1&&w,f=function(t){P=b(),l.time=(P-u)/1e3;var e,r=l.time-h;(!i||r>0||t===!0)&&(l.frame++,h+=r+(r>=o?.004:o-r),e=!0),t!==!0&&(a=s(f)),e&&l.dispatchEvent("tick")};T.call(l),l.time=l.frame=0,l.tick=function(){f(!0)},l.sleep=function(){null!=a&&(p&&x?x(a):clearTimeout(a),s=_,a=null,l===r&&(n=!1))},l.wake=function(){null!==a&&l.sleep(),s=0===i?_:p&&w?w:function(t){return setTimeout(t,0|1e3*(h-l.time)+1)},l===r&&(n=!0),f(2)},l.fps=function(t){return arguments.length?(i=t,o=1/(i||60),h=this.time+o,l.wake(),void 0):i},l.useRAF=function(t){return arguments.length?(l.sleep(),p=t,l.fps(i),void 0):p},l.fps(t),setTimeout(function(){p&&(!a||5>l.frame)&&l.useRAF(!1)},1500)}),s=h.Ticker.prototype=new h.events.EventDispatcher,s.constructor=h.Ticker;var k=c("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,X){n||r.wake();var i=this.vars.useFrames?L:X;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});r=k.ticker=new h.Ticker,s=k.prototype,s._dirty=s._gc=s._initted=s._paused=!1,s._totalTime=s._time=0,s._rawPrevTime=-1,s._next=s._last=s._onUpdate=s._timeline=s.timeline=null,s._paused=!1;var S=function(){b()-P>2e3&&r.wake(),setTimeout(S,2e3)};S(),s.play=function(t,e){return arguments.length&&this.seek(t,e),this.reversed(!1).paused(!1)},s.pause=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!0)},s.resume=function(t,e){return arguments.length&&this.seek(t,e),this.paused(!1)},s.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},s.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},s.reverse=function(t,e){return arguments.length&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},s.render=function(){},s.invalidate=function(){return this},s._enabled=function(t,e){return n||r.wake(),this._gc=!t,this._active=t&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},s._kill=function(){return this._enabled(!1,!1)},s.kill=function(t,e){return this._kill(t,e),this},s._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},s._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},s.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=i instanceof Array&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},s.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},s.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},s.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},s.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},s.totalTime=function(t,e,i){if(n||r.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,a=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:a._time)-(this._reversed?s-t:t)/this._timeScale,a._dirty||this._uncache(!1),a._timeline)for(;a._timeline;)a._timeline._time!==(a._startTime+a._totalTime)/a._timeScale&&a.totalTime(a._totalTime,!0),a=a._timeline}this._gc&&this._enabled(!0,!1),this._totalTime!==t&&this.render(t,e,!1)}return this},s.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},s.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||1e-6,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},s.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._totalTime,!0)),this):this._reversed},s.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){n||t||r.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=!t&&this._totalTime>0&&this._totalTime<this._totalDuration,t||0===s||0===this._duration||this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var R=c("core.SimpleTimeline",function(t){k.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});s=R.prototype=new k,s.constructor=R,s.kill()._gc=!1,s._first=s._last=null,s._sortChildren=!1,s.add=s.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._timeline&&this._uncache(!0),this},s._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t.timeline=null,t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),this._timeline&&this._uncache(!0)),this},s.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},s.rawTime=function(){return n||r.wake(),this._totalTime};var A=c("TweenLite",function(e,i,s){if(k.call(this,i,s),this.render=A.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:A.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),h=this.vars.overwrite;if(this._overwrite=h=null==h?N[A.defaultOverwrite]:"number"==typeof h?h>>0:N[h],(o||e instanceof Array)&&"number"!=typeof e[0])for(this._targets=a=l.call(e,0),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(l.call(n,0))):(this._siblings[r]=z(n,this,!1),1===h&&this._siblings[r].length>1&&U(n,this,null,1,this._siblings[r])):(n=a[r--]=A.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=z(e,this,!1),1===h&&this._siblings.length>1&&U(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),C=function(e){return e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)E[i]||i in e&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!M[i]||M[i]&&M[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};s=A.prototype=new k,s.constructor=A,s.kill()._gc=!1,s.ratio=0,s._firstPT=s._targets=s._overwrittenProps=s._startAt=null,s._notifyPluginsOfEnabled=!1,A.version="1.10.3",A.defaultEase=s._ease=new g(null,null,1,1),A.defaultOverwrite="auto",A.ticker=r,A.autoSleep=!0,A.selector=t.$||t.jQuery||function(e){return t.$?(A.selector=t.$,t.$(e)):t.document?t.document.getElementById("#"===e.charAt(0)?e.substr(1):e):e};var D=A._internals={},M=A._plugins={},I=A._tweenLookup={},F=0,E=D.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},N={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},L=k._rootFramesTimeline=new R,X=k._rootTimeline=new R;X._startTime=r.time,L._startTime=r.frame,X._active=L._active=!0,k._updateRoot=function(){if(X.render((r.time-X._startTime)*X._timeScale,!1,!1),L.render((r.frame-L._startTime)*L._timeScale,!1,!1),!(r.frame%120)){var t,e,i;for(i in I){for(e=I[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete I[i]}if(i=X._first,(!i||i._paused)&&A.autoSleep&&!L._first&&1===r._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||r.sleep()}}},r.addEventListener("tick",k._updateRoot);var z=function(t,e,i){var s,r,n=t._gsTweenID;if(I[n||(t._gsTweenID=n="t"+F++)]||(I[n]={target:t,tweens:[]}),e&&(s=I[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return I[n].tweens},U=function(t,e,i,s,r){var n,a,o,h;if(1===s||s>=4){for(h=r.length,n=0;h>n;n++)if((o=r[n])!==e)o._gc||o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var l,_=e._startTime+1e-10,u=[],p=0,f=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(l=l||Y(e,0,f),0===Y(o,l,f)&&(u[p++]=o)):_>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale+1e-10>_&&((f||!o._initted)&&2e-10>=_-o._startTime||(u[p++]=o)));for(n=p;--n>-1;)o=u[n],2===s&&o._kill(i,t)&&(a=!0),(2!==s||!o._firstPT&&o._initted)&&o._enabled(!1,!1)&&(a=!0);return a},Y=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime,a=1e-10;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*a>n-e?a:(n+=t.totalDuration()/t._timeScale/r)>e+a?0:n-e-a};s._init=function(){var t,e,i,s,r=this.vars,n=this._overwrittenProps,a=this._duration,o=r.immediateRender,h=r.ease;if(r.startAt){if(this._startAt&&this._startAt.render(-1,!0),r.startAt.overwrite=0,r.startAt.immediateRender=!0,this._startAt=A.to(this.target,0,r.startAt),o)if(this._time>0)this._startAt=null;else if(0!==a)return}else if(r.runBackwards&&r.immediateRender&&0!==a)if(this._startAt)this._startAt.render(-1,!0),this._startAt=null;else if(0===this._time){i={};for(s in r)E[s]&&"autoCSS"!==s||(i[s]=r[s]);return i.overwrite=0,this._startAt=A.to(this.target,0,i),void 0}if(this._ease=h?h instanceof g?r.easeParams instanceof Array?h.config.apply(h,r.easeParams):h:"function"==typeof h?new g(h,r.easeParams):v[h]||A.defaultEase:A.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],n?n[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,n);if(e&&A._onPluginEvent("_onInitAllProps",this),n&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),r.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=r.onUpdate,this._initted=!0},s._initProps=function(e,i,s,r){var n,a,o,h,l,_;if(null==e)return!1;this.vars.css||e.style&&e!==t&&e.nodeType&&M.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars){if(_=this.vars[n],E[n])_ instanceof Array&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(M[n]&&(h=new M[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=l={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:h._priority},a=h._overwriteProps.length;--a>-1;)i[h._overwriteProps[a]]=this._firstPT;(h._priority||h._onInitAllProps)&&(o=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=l={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},l.s=l.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),l.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-l.s||0;l&&l._next&&(l._next._prev=l)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&U(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):o},s.render=function(t,e,i){var s,r,n,a=this._time;if(t>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===this._duration&&((0===t||0>this._rawPrevTime)&&this._rawPrevTime!==t&&(i=!0,this._rawPrevTime>0&&(r="onReverseComplete",e&&(t=-1))),this._rawPrevTime=t);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==a||0===this._duration&&this._rawPrevTime>0)&&(r="onReverseComplete",s=this._reversed),0>t?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(i=!0),this._rawPrevTime=t)):this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var o=t/this._duration,h=this._easeType,l=this._easePower;(1===h||3===h&&o>=.5)&&(o=1-o),3===h&&(o*=2),1===l?o*=o:2===l?o*=o*o:3===l?o*=o*o*o:4===l&&(o*=o*o*o*o),this.ratio=1===h?1-o:2===h?o:.5>t/this._duration?o/2:1-o/2}else this.ratio=this._ease.getRatio(t/this._duration);if(this._time!==a||i){if(!this._initted){if(this._init(),!this._initted)return;this._time&&!s?this.ratio=this._ease.getRatio(this._time/this._duration):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._active||!this._paused&&this._time!==a&&t>=0&&(this._active=!0),0===a&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===this._duration)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||d))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startAt.render(t,e,i),e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||d)),r&&(this._gc||(0>t&&this._startAt&&!this._onUpdate&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||d)))}},s._kill=function(t,e){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:A.selector(e)||e;var i,s,r,n,a,o,h,l;if((e instanceof Array||C(e))&&"number"!=typeof e[0])for(i=e.length;--i>-1;)this._kill(t,e[i])&&(o=!0);else{if(this._targets){for(i=this._targets.length;--i>-1;)if(e===this._targets[i]){a=this._propLookup[i]||{},this._overwrittenProps=this._overwrittenProps||[],s=this._overwrittenProps[i]=t?this._overwrittenProps[i]||{}:"all";break}}else{if(e!==this.target)return!1;a=this._propLookup,s=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(a){h=t||a,l=t!==s&&"all"!==s&&t!==a&&(null==t||t._tempKill!==!0);for(r in h)(n=a[r])&&(n.pg&&n.t._kill(h)&&(o=!0),n.pg&&0!==n.t._overwriteProps.length||(n._prev?n._prev._next=n._next:n===this._firstPT&&(this._firstPT=n._next),n._next&&(n._next._prev=n._prev),n._next=n._prev=null),delete a[r]),l&&(s[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return o},s.invalidate=function(){return this._notifyPluginsOfEnabled&&A._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._startAt=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},s._enabled=function(t,e){if(n||r.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=z(s[i],this,!0);else this._siblings=z(this.target,this,!0)}return k.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?A._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},A.to=function(t,e,i){return new A(t,e,i)},A.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new A(t,e,i)},A.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new A(t,e,s)},A.delayedCall=function(t,e,i,s,r){return new A(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},A.set=function(t,e){return new A(t,0,e)},A.killTweensOf=A.killDelayedCallsTo=function(t,e){for(var i=A.getTweensOf(t),s=i.length;--s>-1;)i[s]._kill(e,t)},A.getTweensOf=function(t){if(null==t)return[];t="string"!=typeof t?t:A.selector(t)||t;var e,i,s,r;if((t instanceof Array||C(t))&&"number"!=typeof t[0]){for(e=t.length,i=[];--e>-1;)i=i.concat(A.getTweensOf(t[e]));for(e=i.length;--e>-1;)for(r=i[e],s=e;--s>-1;)r===i[s]&&i.splice(e,1)}else for(i=z(t).concat(),e=i.length;--e>-1;)i[e]._gc&&i.splice(e,1);return i};var j=c("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=j.prototype},!0);if(s=j.prototype,j.version="1.10.1",j.API=2,s._firstPT=null,s._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},s.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=0|e+(e>0?.5:-.5):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},s._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},s._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},A._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},j.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===j.API&&(M[(new t[e])._propName]=t[e]);return!0},f.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=c("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){j.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new j(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,j.activate([a]),a},e=t._gsQueue){for(i=0;e.length>i;i++)e[i]();for(s in u)u[s].func||t.console.log("GSAP encountered missing dependency: com.greensock."+s)}n=!1}(window);
/*shop_configure.js*/
$(function() {
	if (M['module'] == 3 && M['id']) {
		if ($('#shop-fashion-option').length) {
			$('#shop-fashion-option').on('show.bs.modal', function(e) {
				var body = $("#shop-fashion-option .modal-body");
				if (body.html() == '') {
					//加载状态
					body.html(laoding_html(300));
					$.ajax({
						url: M['weburl'] + 'product/showproduct.php?lang=cn&ajax_shop_option=1&id=' + M['id'],
						type: 'POST',
						success: function(content) {
							//载入内容
							body.html(content);
							shop_option_ini();
							shop_option_pearls();
							if($('#product-summary .imgshow img').length){
								var imgshow_img=$('#product-summary .imgshow img').data('minsrc')/*'http://localhost/upload/201610/1477620175.png'*/;
							}else if($('#shop-btn1').length){
								var imgshow_img=$('#shop-btn1').data('minsrc')/*'http://localhost/upload/201610/1477620175.png'*/;
							}
							$('#shop-option-muban-pane img').attr({src:imgshow_img});
						}
					})
				}
			})
		} else {
			shop_option_ini();
		}
	}
});
/*shop_configure_host.js*/
//设置空间费用重新计算价格

function shop_option_host_set(){

	//价格录入

	$("#host")

		.attr("data-price",$("#host-life").attr("data-price"))

		.attr("data-life",$("#host-life").html());

	//重新计算价格

	shop_option_configure_price();

}

//清除空间费用重新计算价格

function shop_option_host_und(){

	$("#host")

		.attr("data-price",'')

		.attr("data-life",'');

		// .html('');

	shop_option_configure_price();

}

//空间年限

function shop_option_host_life(pid,no){

	var ul = $("#shop-option-configure .host-life ul.dropdown-menu"),

		lf = $("#host-life");

	//显示载入状态

	ul.html(laoding_html(100));

	$("#host").html('计算中...');

	//ajax请求

	$.ajax({

		url: M['weburl']+'domainhost/showproduct.php?lang=cn&ajax_shop_stockjson=1&id='+pid,

		type: 'POST',

		dataType:'json',

		success: function(stockjson) {

			//处理

			var json = {};

			$.each(stockjson, function(i, item){

				switch(item.valuelist){

					case '1年':json[0]=item;break;

					case '2年':json[1]=item;break;

					case '3年':json[2]=item;break;

					case '5年':json[3]=item;break;

				}

			});

			//alert(JSON.stringify(json));

			shop_option_life(json,ul,lf);

			//设置费用计算价格

			shop_option_host_set();

		}

	})

}

//空间商品获取

function shop_option_host_goods(classid){

	var html='',de;

	$.each(hostjson, function(i, item){

		if(i==classid){

			$.each(item, function(k, val){

				if(val['com_ok']==1){

					de = val;

				}

				html+='<li><a href="javascript:void(0)" data-val="'+val['para353']+'" data-pid="'+val['id']+'" data-no="'+val['para351']+'">'+val['para353']+' <span class="badge badge-success">'+val['shop']['price']+'元 / 年</span>'+'</a></li>';

			})

		}

	});

	$("#shop-option-configure .host-size ul.dropdown-menu").html(html);

	$("#host-size").html(de['para353']).attr('data-pid',de['id']).attr('data-no',de['para351']);

	shop_option_host_life(de['id'],de['para351']);

}

//空间绑定事件

function option_host_bind_event(){

	//空间年限选择

	$(document).on('click', '#shop-option-configure .host-life li a', function(e) {

		$("#host-life")

			.html($(this).data('val'))

			.attr('data-price',$(this).attr('data-price'));

		shop_option_host_set();

	});

	//空间容量选择

	$(document).on('click', '#shop-option-configure .host-size li a', function(e) {

		var pid = $(this).data('pid'),val = $(this).data('val');

		$("#host-size").html(val).attr('data-pid',pid).attr('data-no',$(this).data('no'));

		shop_option_host_life(pid,$(this).data('no'));

	});

	//空间类型选择

	$(document).on('click', '#shop-option-configure .host-type li a', function(e) {

		$("#host-type")

			.html($(this).data('val'))

			.attr('data-classid',$(this).data('classid'));

		shop_option_host_goods($(this).data('classid'));

	});

	//是否需要空间选项处理

	$(document).on('click', '#shop-option-configure .shop-option-host a.selectpara', function(e) {

		if($(this).data('val')==1){

			$("#shop-option-host").collapse('show');
			$("#shop-option-host-tips").collapse('hide');
			if($("#host-size").html()==''){

				shop_option_host_goods($("#host-type").data('classid'));

			}else{

				shop_option_host_set();

			}

		}else{

			$("#shop-option-host").collapse('hide');
			$("#shop-option-host-tips").collapse('show');
			shop_option_host_und();

		}

	});

}
/*shop_configure_domain.js*/
//域名注册查询

var current_request;

//域名查询

function shop_option_domain_search(delay){//delay提供延迟处理时长

	var url = 'https://app.metinfo.cn/index.php?n=platform&c=idc&a=docheck_domain_jsonp',

		domain = $('#shop-option-domain input[name="domain"]').val(),

		suffix = $("#domain-type").html(),//域名类型

		life   = $("#domain-time").html(),//年限

		life_price = $("#domain-time").attr('data-price'),//年限价格

		pid    = $("#domain-type").attr('data-pid'),//域名商品ID

		info   = $("#shop-option-domain .domain-info");//错误提示容器

		domain = domain.toLowerCase();

		$('#shop-option-domain input[name="domain"]').val(domain);

		clearTimeout(current_request);//清除延迟处理

		if(domain!=''){//域名不能为空

			if(domain_verification(domain,suffix)){//验证域名格式

				var time = delay;

				//延迟执行

				current_request = setTimeout(function () { 

					shop_option_calm(info);//查询前让输入框保持正常样式状态

					info.html("正在查询域名...").removeClass('hide');//提示文字

					$("#domain").html('计算中...');

					$.ajax({

						url: url+'&domainname='+domain+'&suffix='+suffix,

						type: 'POST',

						dataType:'jsonp',//jsonp可请求外部网址

						success: function(json) {

							if(json.returncode==200){

								//根据返回值判断是否可以注册

								if(json.returnmsg.allow==domain+suffix){

									shop_option_success(info,domain+suffix+' 可注册');
									$('.shop-option-tab-get.get-next').removeClass('disabled');

									if(

										$("#shop-option-configure .shop-option-domain a.selectpara.btn-danger").data('val')==1

										&&

										$('#shop-option-domain input[name="domain"]').val()!=''

									){//因AJAX有延迟，因此需必须满足条件才计算价格

										//配置域名费用

										$("#domain")

											.attr("data-price",life_price)

											.attr("data-life",life)

											.parent().collapse('show');

										//重新计算价格

										shop_option_configure_price();

									}

								}else{

									//已被注册处理

									shop_option_error(info,domain+suffix+' 已被注册');
									$('.shop-option-tab-get.get-next').addClass('disabled');
									shop_option_domain_und();

								}

							}else{

								shop_option_error(info,'服务器 '+json.returncode+' 错误，请联系客服人员或稍后再试。');

								shop_option_domain_und();

							}

						}

					});

				}, time);

				

			}else{

				shop_option_error(info,'域名格式错误，仅允许「英文字母、数字、"-"」');

			}

		}else{

			shop_option_calm(info);

			shop_option_domain_und();

		}

}

//载入域名年限

function shop_option_domain_life(pid){//pid为域名商品ID

	var ul = $("#shop-option-configure .domain-time ul.dropdown-menu"),

		lf = $("#domain-time");

	//显示载入状态

	ul.html(laoding_html(100));

	//ajax请求

	$.ajax({

		url: M['weburl']+'domainhost/showproduct.php?lang=cn&ajax_shop_stockjson=1&id='+pid,

		type: 'POST',

		dataType:'json',

		success: function(stockjson) {

			//处理

			shop_option_life(stockjson,ul,lf);

			//根据载入的年限重新计算价格

			shop_option_domain_search();

		}

	})

}

//清除域名费用重新计算价格

function shop_option_domain_und(){

	$("#domain")

		.attr("data-price",'')

		.attr("data-life",'')

		.html('')

		.parent().collapse('hide');
	if(!$('#shop-option-domain input[name="domain"]').val()) $("#shop-option-domain .domain-info").addClass('hide');
	shop_option_configure_price();

}

//域名格式验证

function domain_verification(domain,suffix){

	var rtn = true;

	var maxlenth = 67 - suffix.length,//域名字节数不能超过67位（包含域名后缀.com...）

		regexp = new RegExp("^^[a-z0-9-]{1,"+maxlenth+"}$","i");

	if(!regexp.test(domain)){

		rtn = false;

	}

	//开头不能为 - 

	if(domain.indexOf('-')==0){

		rtn = false;

	}

	//结尾不能为 -

	if(domain.charAt(domain.length-1)=="-"){

		rtn = false;

	}

	return rtn;

}

//域名填写正常状态

function shop_option_calm(info){

	info.parent('.form-group').removeClass('has-error');

	info.parent('.form-group').removeClass('has-success');

	info.html('').addClass('hide');

}

//域名填写错误

function shop_option_error(info,txt){

	info.parent('.form-group').removeClass('has-success').addClass('has-error');

	info.html(txt).removeClass('hide');

}

//域名填写正确

function shop_option_success(info,txt){

	info.parent('.form-group').removeClass('has-error').addClass('has-success');

	info.html(txt).removeClass('hide');

}

//域名绑定事件

function option_domain_bind_event(){

	//是否需要注册域名选项处理

	$(document).on('click', '#shop-option-configure .shop-option-domain a.selectpara', function(e) {

		//需要注册域名

		if($(this).data('val')==1){

			//显示域名注册区域

			$("#shop-option-domain").collapse('show');
			// $("#shop-option-domain-tips").collapse('hide');
			//查询域名注册与价格计算（考虑到如果已填写域名）

			shop_option_domain_life($("#domain-type").data('pid'));

			//shop_option_domain_search();

		//不需要注册

		}else{
			$("#shop-option-domain").collapse('hide');
			// $("#shop-option-domain-tips").collapse('show');
			//隐藏显示区域
			$('.shop-option-tab-get.get-next').removeClass('disabled');
			//重置价格

			shop_option_domain_und();

		}

	});

	//输入域名

	$(document).on('input propertychange', '#shop-option-domain input[name="domain"]', function(e) {

		shop_option_domain_search(1000);

	});

	//域名类型选择

	$(document).on('click', '#shop-option-configure .domain-type li a', function(e) {

		$("#domain-type")

			.html($(this).data('val'))

			.attr('data-pid',$(this).data('pid'));

		shop_option_domain_life($(this).data('pid'));

	});

	//域名年限选择

	$(document).on('click', '#shop-option-configure .domain-time li a', function(e) {

		$("#domain-time")

			.html($(this).data('val'))

			.attr('data-price',$(this).attr('data-price'));

		shop_option_domain_search();

	});

}
/*shop_function.js*/
/*计算价格-建站套餐*/
function shop_option_package_price() {
	var tempprice = $("#price").data('price'),
		price;
	price = parseFloat(tempprice);
	var act = $('#shop-option-package .pricing-list.active');
	if (act.length == 1) {
		price = parseFloat(act.data('price'));
	}
	$("#price").html('总计：'+price.toFixed(2) + '元');
}
/*计算价格-自选配置*/
function shop_option_configure_price() {
	var tempprice = $("#price").data('price'), //模板价格
		domainprice = $("#domain").attr('data-price'), //域名价格
		hostprice = $("#host").attr('data-price'), //空间价格
		bunsprice = $("#business").attr('data-price'), //商业授权
		price;
	//总价
	price = parseFloat(tempprice);
	//域名
	if (domainprice != '') {
		price += parseFloat(domainprice);
		$("#domain").html(domainprice + '元 / ' + $("#domain").attr('data-life'));
	}
	//空间
	if (hostprice != '') {
		price += parseFloat(hostprice);
		$("#host").html(hostprice + '元 / ' + $("#host").attr('data-life'));
	}
	//授权
	if (bunsprice != '') {
		price += parseFloat(bunsprice);
	}
	$("#price").html('总计：'+price.toFixed(2) + '元');
}
/*加载状态*/
function laoding_html(y) {
	return '<div class="height-' + y + ' vertical-align text-center cart-loader"><div class="loader vertical-align-middle loader-default"></div></div>';
}
/*年限数据载入*/
function shop_option_life(stockjson, ul, lf) {
	var html = '',
		order;
	//内容置为空，方便开始输入内容
	ul.html('');
	//遍历获取到的年限
	$.each(stockjson, function(i, item) {
		//核对排序方式
		if (i == 0 && item.valuelist == '1年') {
			order = 1; //1为正常排序
		}
		html = '<li><a href="javascript:void(0)" data-val="' + item.valuelist + '" data-price="' + item.price + '">' + item.valuelist + ' <span class="badge badge-success">' + item.price + '元</span>' + '</a></li>';
		//正常排序处理
		if (order == 1) {
			if (i == 0) {
				//第一年费用配置
				lf.html(item.valuelist).attr('data-price', item.price);
			}
			ul.append(html);
			//倒序处理
		} else {
			if (i == stockjson.length - 1) {
				//第一年费用配置
				lf.html(item.valuelist).attr('data-price', item.price);
			}
			ul.prepend(html);
		}
	});
}
/*模板编号相关信息*/
function shop_option_tmp(pid, no, name, img) {
	var tmp = {};
	tmp.type = 'tem';
	tmp.no = no;
	tmp.pid = pid;
	tmp.name = name;
	tmp.img = img;
	return tmp;
}
/*后台程序选择*/
function shop_option_bns() {
	var bns = {};
	if ($('#shop-option-configure .shop-option-metinfo a.selectpara.btn-danger').data('val') == 1) {
		bns.type = 'auth';
	}
	return bns;
}
/*空间套餐选择*/
function shop_option_hos() {
	var t = {};
	if ($('#shop-option-configure .shop-option-host a.selectpara.btn-danger').data('val') == 1) {
		t.type = 'vhost';
		t.no = $('#host-size').attr('data-no') + '-' + $('#host').attr('data-life') + '-' + '1';
		t.para = $('#host-type').html() + '-' + $('#host-size').html();
	}
	return t;
}
/*域名选择*/
function shop_option_dom() {
	var t = '0';
	if ($('#shop-option-configure .shop-option-domain a.selectpara.btn-danger').data('val') == 1) {
		var domain = $("input[name='domain']").val(),
			life = $("#domain").attr('data-life'),
			domaintype = $("#domain-type").html();
		if (domain != '' && $("#shop-option-domain .form-group.has-success").length) {
			t = {};
			t.type = 'domain';
			t.no = 'dom' + domaintype.replace(".", "") + '-' + life + '-1';
			t.domain = domain;
		} else {
			if (domain == '') {
				shop_option_error($("#shop-option-domain .domain-info"), '请输入域名');
			}
			$("input[name='domain']").focus();
			$('.shop-option-tab-get.get-next').addClass('disabled');
			return false;
		}
	}
	return t;
}
/*购买配置总流程*/
function shop_option_ini() {
	//选项类型（套餐or自配）
	$('.shop-product-intro .nav-tabs a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		var t = e.target + '';
		var c = t.split('#'),
			v = c[1];
		clearTimeout(current_request); //清除域名查询延迟处理
		if (v == 'shop-option-configure') {
			shop_option_configure_price();
		} else {
			shop_option_package_price();
		}
	})
	$(document).on('click', '#shop-option-package .pricing-list', function(e) {
			$('#shop-option-package .pricing-list').not($(this)).removeClass('active');
			$(this).toggleClass('active');
			shop_option_package_price();
		})
		//选择项
	$(document).on('click', '.selectpara', function(e) {
		var ps = $(this).parent().find('.selectpara');
		ps.removeClass('btn-danger');
		$(this).addClass('btn-danger');
	});
	//空间相关事件绑定
	option_host_bind_event();
	//域名相关事件绑定
	option_domain_bind_event();
	//是否需要商业授权
	$(document).on('click', '#shop-option-configure .shop-option-metinfo a.selectpara', function(e) {
		if ($(this).data('val') == 1) {
			$("#shop-option-metinfo").collapse('show');
			$("#shop-option-metinfo-tips").collapse('hide');
			$("#business")
				.attr("data-price", '699')
				.html('799元 / 永久');
			shop_option_configure_price();
		} else {
			$("#shop-option-metinfo").collapse('hide');
			$("#shop-option-metinfo-tips").collapse('show');
			$("#business")
				.attr("data-price", '');
				// .html('');
			shop_option_configure_price();
		}
	});
	$(document).on('click', '.product-buynow,.product-tocart', function(e) {
		var packid = '',
			json = {},
			type = $(".shop-product-intro .nav-tabs li.active").find('a[data-toggle="tab"]').attr("href"),
			goodtypeid = 0; //0为单独购买模板，-1为自选配置
		//商品列表
		json.goods = {};
		//模板
		json.goods[0] = shop_option_tmp($(this).data('pid'), $(this).data('no'), $(this).data('name'), $('#shop-option-muban-pane-img').attr('src'));
		//类型
		if (type == '#shop-option-configure') {
			var bns = shop_option_bns(),
				hos = shop_option_hos(),
				dom = shop_option_dom();
			if (dom) {
				goodtypeid = 0;
				if (!jQuery.isEmptyObject(bns)) {
					goodtypeid = -1;
					json.goods[1] = bns;
				}
				if (!jQuery.isEmptyObject(hos)) {
					goodtypeid = -1;
					json.goods[2] = hos;
				}
				if (!jQuery.isEmptyObject(dom) && dom != '0') {
					goodtypeid = -1;
					json.goods[3] = dom;
				}
			} else {
				return false;
			}
		} else {
			var a = $('#shop-option-package .pricing-list.active');
			if (a.length == 1) {
				goodtypeid = a.data('tid');
			}
		}
		$(this).addClass('disabled');
		shoptoaccount($(this).data('url'), json, goodtypeid, $(this).data('no'), $(this).data('demo'));
	})
}
/*购买数据提交至会员中心*/
function shoptoaccount(url, json, type, tempno, demo) {
	//alert(JSON.stringify(json));
	url += '&goodtypeid=' + type + '&tempno=' + tempno + '&demo=' + demo;
	$.ajax({
		url: url,
		data: json,
		type: 'POST',
		//dataType:'json',
		success: function(ret) {
			if (ret.indexOf('login.php?gourl') > 0) {
				$("body").append(ret);
			} else {
				window.location.href = ret;
			}
		}
	});
}
/*商业授权、推荐主机、无忧服务页面购买*/
$(function() {
	if ($("a.buy_business").length) {
		$(document).on('click', 'a.buy_business', function(e) {
			var json = {};
			json.goods = {};
			var bns = {};
			bns.type = 'auth';
			json.goods[0] = bns;
			shoptoaccount($(this).data('url'), json, 0);
		})
	}
	if ($("a.buy_host_shop").length) {
		$(document).on('click', 'a.buy_host_shop', function(e) {
			var json = {};
			json.goods = {};
			var hos = {};
			hos.type = 'vhost';
			hos.no = $(this).data('no') + '-1年' + '-' + '1';
			hos.para = $(this).data('type') + '-' + $(this).data('size');
			json.goods[0] = hos;
			shoptoaccount($(this).data('url'), json, 0);
		})
	}
	if ($("a.buy_wuyou").length) {
		$(document).on('click', 'a.buy_wuyou', function(e) {
			var json = {};
			json.goods = {};
			var wuyou = {};
			wuyou.type = 'wuyou';
            wuyou.no = $(this).data('no');
			json.goods[0] = wuyou;
			shoptoaccount($(this).data('url'), json, 0);
		})
	}
})
/*自选配置步骤切换*/
function shop_option_pearls() {
	$('.shop-option-tab-get').click(function() {
		var get_id = $(this).attr('data-get'),
			$get_id_a=$('#'+get_id).find('.selectpara-body a.btn-danger'),
			$thistab=$('#shop-option-configure .tab-pane.active'),
			thistab_id=$thistab.attr('id'),
			navget_index = $('#'+get_id).index(),
			nav_a='.shop-option-nav .step',
			get_prev=$('#'+get_id).prev().attr('id'),
			get_next=$('#'+get_id).next().attr('id');
		if(thistab_id=='shop-option-domain-pane' && $(this).hasClass('get-next')){
			if(!shop_option_dom()) return false;
		}
		if($get_id_a.length && !$('#'+get_id).data('triggernum')){
			$get_id_a.trigger('click');
			$('#'+get_id).attr({'data-triggernum':1});
		}
		pearls(nav_a,navget_index);
		setTimeout(function() {
			$('.get-prev').attr({href:'#'+get_prev,'data-get':get_prev});
			$('.get-next').attr({href:'#'+get_next,'data-get':get_next});
			if(navget_index!=0){
				$('.get-prev,#price').removeClass('hide');
			}else{
				$('.get-prev,#price').addClass('hide');
			}
			if(navget_index==3){
				$('.get-next').hide();
				$('.product-buynow').removeClass('hide');
			}else{
				$('.get-next').show();
				$('.product-buynow').addClass('hide');
			}
			if($('.get-next').hasClass('disabled')) $('.get-next').removeClass('disabled');
		},0)
	});
}
/*购买流程导航切换*/
function pearls(id,index) {
	$(id+':eq('+index+')').addClass('current').removeClass('done');
	$(id+':lt('+index+')').addClass('done').removeClass('current');
	$(id+':gt('+index+')').removeClass('current').removeClass('done');
}

/*form.js*/
$(function() {
    var met_form=".met-form",
        met_form_v=".met-form-validation";
    if($(met_form_v).length){
        $(".met-form-validation").formValidation({
            framework: "bootstrap"
        })
    }
    if($(met_form).length){
        /*验证码输入自动转为大写*/
        $(document).on('keyup', met_form+' input[name=code]', function() {
            $(this).val($(this).val().toUpperCase());
        });
        /*上传组件*/
        $(document).on("change", met_form+" .input-group-file input[type=file]", function() {
            var $this = $(this),
                $text = $(this).parents('.input-group-file').find('.form-control'),
                value = "";
            if(is_lteie9) value=$(this).val();
            if(!value){
                $.each($this[0].files, function(i, file) {
                    value += file.name + ", ";
                });
                value = value.substring(0, value.length - 2);
            }
            $text.val(value);
        });
    }
})
/*验证码点击刷新*/
function codeimgRefresh(){
    var url = $(".met-form-codeimg").data("url");
    $(".met-form-codeimg").attr("src",url+'&random='+Math.floor(Math.random()*9999+1));
}
/*jQuery.Form.js*/
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form 
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
$.fn.attr2 = function() {
    if ( ! hasProp ) {
        return this.attr.apply(this, arguments);
    }
    var val = this.prop.apply(this, arguments);
    if ( ( val && val.jquery ) || typeof val === 'string' ) {
        return val;
    }
    return this.attr.apply(this, arguments);
};

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }
    else if ( options === undefined ) {
        options = {};
    }

    method = options.type || this.attr2('method');
    action = options.url  || this.attr2('action');

    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || $.ajaxSettings.type,
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }

    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    if (options.error) {
        var oldError = options.error;
        options.error = function(xhr, status, error) {
            var context = options.context || this;
            oldError.apply(context, [xhr, status, error, $form]);
        };
    }

     if (options.complete) {
        var oldComplete = options.complete;
        options.complete = function(xhr, status) {
            var context = options.context || this;
            oldComplete.apply(context, [xhr, status, $form]);
        };
    }

    // are there files to upload?

    // [value] (issue #113), also see comment:
    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
    var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++) {
        elements[k] = null;
    }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData, options.traditional).split('&');
        var len = serialized.length;
        var result = [];
        var i, part;
        for (i=0; i < len; i++) {
            // #252; undo param space replacement
            serialized[i] = serialized[i].replace(/\+/g,' ');
            part = serialized[i].split('=');
            // #278; use array instead of object storage, favoring array serializations
            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (i=0; i < serializedData.length; i++) {
                if (serializedData[i]) {
                    formdata.append(serializedData[i][0], serializedData[i][1]);
                }
            }
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });

        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.addEventListener('progress', function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    }, false);
                }
                return xhr;
            };
        }

        s.data = null;
        var beforeSend = s.beforeSend;
        s.beforeSend = function(xhr, o) {
            //Send FormData() provided by user
            if (options.formData) {
                o.data = options.formData;
            }
            else {
                o.data = formdata;
            }
            if(beforeSend) {
                beforeSend.call(this, xhr, o);
            }
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var deferred = $.Deferred();

        // #341
        deferred.abort = function(status) {
            xhr.abort(status);
        };

        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( hasProp ) {
                    el.prop('disabled', false);
                }
                else {
                    el.removeAttr('disabled');
                }
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr2('name');
            if (!n) {
                $io.attr2('name', id);
            }
            else {
                id = n;
            }
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;

                try { // #214, #257
                    if (io.contentWindow.document.execCommand) {
                        io.contentWindow.document.execCommand('Stop');
                    }
                }
                catch(ignore) {}

                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error) {
                    s.error.call(s.context, xhr, e, status);
                }
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, e]);
                }
                if (s.complete) {
                    s.complete.call(s.context, xhr, e);
                }
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;
                
        function getDoc(frame) {
            /* it looks like contentWindow or contentDocument do not
             * carry the protocol property in ie8, when running under ssl
             * frame.document is the only valid response document, since
             * the protocol is know but not on the other two objects. strange?
             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
             */
            
            var doc = null;
            
            // IE8 cascading access check
            try {
                if (frame.contentWindow) {
                    doc = frame.contentWindow.document;
                }
            } catch(err) {
                // IE8 access denied under ssl & missing protocol
                log('cannot get iframe.contentWindow document: ' + err);
            }

            if (doc) { // successful getting content
                return doc;
            }

            try { // simply checking may throw in ie8 under ssl or mismatched protocol
                doc = frame.contentDocument ? frame.contentDocument : frame.document;
            } catch(err) {
                // last attempt
                log('cannot get iframe.contentDocument: ' + err);
                doc = frame.document;
            }
            return doc;
        }

        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr2('target'), 
                a = $form.attr2('action'), 
                mp = 'multipart/form-data',
                et = $form.attr('enctype') || $form.attr('encoding') || mp;

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method || /post/i.test(method) ) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }

            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized') {
                        setTimeout(checkState,50);
                    }
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle) {
                        clearTimeout(timeoutHandle);
                    }
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                }
                if (io.attachEvent) {
                    io.attachEvent('onload', cb);
                }
                else {
                    io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);

                try {
                    form.submit();
                } catch(err) {
                    // just in case form has element with name/id of 'submit'
                    var submitFn = document.createElement('form').submit;
                    submitFn.apply(form);
                }
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                form.setAttribute('enctype', et); // #380
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            
            doc = getDoc(io);
            if(!doc) {
                log('cannot access response document');
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut) {
                    return;
                }
            }
            if (io.detachEvent) {
                io.detachEvent('onload', cb);
            }
            else {
                io.removeEventListener('load', cb, false);
            }

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml) {
                    s.dataType = 'xml';
                }
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header.toLowerCase()];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (err) {
                    status = 'parsererror';
                    xhr.error = errMsg = (err || status);
                }
            }
            catch (err) {
                log('error caught: ',err);
                status = 'error';
                xhr.error = errMsg = (err || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success) {
                    s.success.call(s.context, data, 'success', xhr);
                }
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g) {
                    $.event.trigger("ajaxSuccess", [xhr, s]);
                }
            }
            else if (status) {
                if (errMsg === undefined) {
                    errMsg = xhr.statusText;
                }
                if (s.error) {
                    s.error.call(s.context, xhr, status, errMsg);
                }
                deferred.reject(xhr, 'error', errMsg);
                if (g) {
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }
            }

            if (g) {
                $.event.trigger("ajaxComplete", [xhr, s]);
            }

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete) {
                s.complete.call(s.context, xhr, status);
            }

            callbackProcessed = true;
            if (s.timeout) {
                clearTimeout(timeoutHandle);
            }

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget) {
                    $io.remove();
                }
                else { //adding else to clean up existing iframe response.
                    $io.attr('src', s.iframeSrc);
                }
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error) {
                    $.error('parsererror');
                }
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);

    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(e.target).ajaxSubmit(options); // #365
    }
}

function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is("[type=submit],[type=image]"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest('[type=submit]');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var formId = this.attr('id');
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    var els2;

    if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
        els = $(els).get();  // convert to standard array
    }

    // #386; account for inputs outside the form which use the 'form' attribute
    if ( formId ) {
        els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
        if ( els2.length ) {
            els = (els || []).concat(els2);
        }
    }

    if (!els || !els.length) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n || el.disabled) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) {
                elements.push(el);
            }
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file') {
            if (elements) {
                elements.push(el);
            }
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) {
                elements.push(el);
            }
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $('input[type=text]').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $('input[type=checkbox]').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $('input[type=radio]').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array) {
            $.merge(val, v);
        }
        else {
            val.push(v);
        }
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (t == "file") {
            if (/MSIE/.test(navigator.userAgent)) {
                $(this).replaceWith($(this).clone(true));
            } else {
                $(this).val('');
            }
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                this.value = '';
            }
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) {
        return;
    }
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

}));
/*job.js*/
$(function() {
	if($("#met-job-cv").length){
		/*招聘模块弹出表单*/
		$(document).on('click',".met-job-cvbtn",function(){
			var cvurl = $(this).data('cvurl'),
				jobid = $(this).data('jobid');
			if($("#met-job-cv .modal-body .form-group").length){
				$("#met-job-cv .met-form").data('formValidation').resetForm();
				$("#met-job-cv .modal-body input[name='jobid']").val(jobid);
			}else{
				$("#met-job-cv .modal-body").html('<div class="height-100 vertical-align text-center cart-loader"><div class="loader vertical-align-middle loader-default"></div></div>');
				$.ajax({
					url: cvurl+'&jobid='+jobid,
					type: 'POST',
					success: function(data) {
						$("#met-job-cv .modal-body").html(data).hide().slideDown(500);
						$.components.init('placeholder');
						$("#met-job-cv .met-form").formValidation({
							framework: "bootstrap"
						})
						if(is_lteie9) codeimgRefresh();
					}
				});
			}
			$("#met-job-cv").modal('show');
		});
	}
})
/*product.js*/
$(function() {
	/*产品列表页*/
	if ($('.met-product').length) {
		//产品列表页瀑布流
		if ($('#met-grid').length) MetAnimOnScroll();
		//图片懒加载
		$(".met-product img[data-original]").lazyload({
			threshold: 50,
			effect: "fadeIn"
		});
		$(".met-muban-screen .nav-ul a[data-toggle='collapse']").click(function() {
			$(this).find("i.icon").toggleClass('rx');
		});
		if(device_type=='d'){
			autoScro('.met-product .widget-header,.met-product .imgmb div', 'img'); //图片hover上下滚动
			$('.met-product .widget-header,.met-product .imgmb div').click(function() {
				$('span',this).stop().animate({top: 0},0);
			});
			popvVideo('.met-video-link');
/*			var weixinContent='<p class="text-center"><a class="met-video-link font-size-18" href="javascript:void(0);" data-target="#popup-video" data-toggle="modal" data-src="' + M['tem'] + '/min/video/met-index-mb.mp4">观看影片 <i class="iconfont icon-play font-size-24" aria-hidden="true"></i></a></p><p class="text-center font-size-16">智能适应用户设备的屏幕尺寸<br/>「电脑、平板、手机、微官网」同样美好</p>',
				popvVideo_callback=1;
			weixinSettings={
				title:' ',
				width:350,
				content:weixinContent,
				trigger:'hover',
				animation:'pop',
				onShow:function(){
					if (popvVideo_callback){
						popvVideo('.met-video-link');
						$('.webui-popover-title').hide();
						popvVideo_callback=0;
					}
				}
			};
			$('.met-muban-screen .nav-ul a.xys').webuiPopover(weixinSettings);*/
		};
		if ($(window).width() < 370) resZoom('.met-product.type-1 li.mobileli .widget-header');
	}
	/*产品详情页标准模式*/
	if ($('.met-showproduct.pagetype1').length) {
		adryset();
		$("body").addClass("met-white-lightGallery"); //画廊皮肤
		$('#lightgallery').lightGallery({
			autoplayControls: false,
			exThumbImage: 'data-exthumbimage',
			getCaptionFromTitleOrAlt: false
		});
		$(document).on('click', "#gallery .ad-image img", function(event) {
			var i = $("#lightgallery a.ad-active").parent().index();
			$('#lightgallery').data('lightGallery').build(i);
			$('#lightgallery').data('lightGallery').slide(i, false, false);
		});
		//选项卡滚动条（移动端）
		navtabSwiper('.met-showproduct-navtabs');
		//产品列表瀑布流
		Breakpoints.get('xs').on({
			enter: function() {
				$('.product-hot .mob-masonry').masonry({
					itemSelector: ".masonry-item"
				});
			}
		});
	}
	// 收藏功能
	var $favaorite=$('.shop-favaorite');
	if($favaorite.length){
		var favaoriteAjax=function($self,act){
			$.ajax({
				url: $self.attr('href'),
				type: 'GET',
				dataType: 'jsonp',
				data: {id: $self.data('id'),act:act,is_ajax:'1'},
			}).success(function(result) {
				if(typeof result!="undefined"){
					if(result.state){
						switch(parseInt(result.state)){
							case 0:
								alertify.error('收藏失败！');
								break;
							case 1:
								$self.removeClass('btn-warning').addClass('btn-success').html('已收藏');
								alertify.success('收藏成功，<a href="'+M["accurl"]+'profile/favaorite/" target="_blank" class="label label-outline label-default white" style="background-color: transparent;">查看收藏详情</a>');
								break;
							case 2:
								$self.removeClass('btn-warning').addClass('btn-success').html('已收藏');
								if(!act) alertify.error('您已经收藏过了，<a href="'+M["accurl"]+'profile/favaorite/" target="_blank" class="label label-outline label-default white" style="background-color: transparent;">查看收藏详情</a>');
								break;
						}
					}else if(result.error){
						if(!act) alertify.error('您尚未登录，请 <a href="'+M["accurl"]+'login/" target="_blank" class="label label-outline label-default white" style="background-color: transparent;">登录</a>');
					}
				}
			})
		};
		// 获取收藏状态
		favaoriteAjax($favaorite,'1');
		// 加入收藏、取消收藏
		$favaorite.click(function(event) {
			event.preventDefault();
			favaoriteAjax($(this));
		});
	}
	/*产品演示页*/
	if ($('#met-demo-iframe').length) {
		var $metdemo = $('#met-demo-iframe'),
			$demohead = $('.met-demo-head'),
			$democlose = $('.close-demo-head'),
			demo_reschosse_li='.demo-reschosse li';
		$('body').addClass('less-transition');
		//初始化
		var demoStart = function(demo_class) {
			var $click_li;
			if (demo_class) {
				$click_li=$(demo_reschosse_li+'[data-class=' + demo_class + ']');
			} else if (Breakpoints.is('lg')) {
				$click_li=$(demo_reschosse_li+'[data-class=""]');
			} else if (Breakpoints.is('md')) {
				$click_li=$(demo_reschosse_li+'[data-class=tablet-horizontal-width]');
			}else if(Breakpoints.is('sm')){
				$click_li=$(demo_reschosse_li+'[data-class=tablet-width]');
			}
			setTimeout(function(){
				if($click_li) $click_li.trigger('click');
			},0)
		};
		//响应式点击切换
		$(demo_reschosse_li).click(function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active').siblings().removeClass('active');
				var demo_data_class = $(this).data('class'),
					url_param=getUrlParam('demo_class')?getUrlParam('demo_class'):'';
				if(demo_data_class!=$metdemo.attr('class')){
					$metdemo.attr({class: demo_data_class});
					demoRes(demo_data_class);
				}
				//地址栏传参
				if(url_param!=demo_data_class) replaceParamVal('demo_class', demo_data_class);
			}
		});
		demoStart(getUrlParam('demo_class'));
		//历史记录切换
		window.addEventListener("popstate", function() {
			demoStart(getUrlParam('demo_class'));
		})
		// 隐藏横幅按钮断点监听
		function demoRes(class2) {
			btnClose(class2);
			Breakpoints.on('md',{
				enter: function() {
					if (class2.indexOf('tablet') >= 0) {
						btnClose(0);
					}
				}
			})
			Breakpoints.on('sm',{
				enter: function() {
					if (class2) {
						if (class2.indexOf('tablet') >= 0) {
							btnClose(0);
						} else {
							btnClose(1);
						}
					}
				}
			})
			Breakpoints.on('xs',{
				enter: function() {
					btnClose(0);
				}
			})
		}
		//隐藏横幅按钮判断
		function btnClose(class1) {
			if (class1) {
				$democlose.addClass('hide');
			} else {
				$democlose.removeClass('hide');
			}
		}
		//隐藏横幅
		$democlose.click(function() {
			$demohead.addClass('up-50');
			$('body').removeClass('padding-top-50');
			setTimeout(function() {
				$demohead.remove();
			}, 500)
		});
	}
})
/*产品图片轮播展示*/
function adryset() {
	var ax = $('.ad-gallery').data("x"),
		ay = $('.ad-gallery').data("y"),
		by = ay;
	if (Breakpoints.is('xs')) {
		var bx = $(window).width() - 30;
		by = (ay * bx) / ax;
	}
	//图片切换
	$('.ad-gallery').adGallery({
		effect: 'fade',
		height: by,
		loader_image: ''
	});
}
/*瀑布流配置*/
function MetAnimOnScroll(okno) {
	new AnimOnScroll(document.getElementById('met-grid'), {
		minDuration: 0.4,
		maxDuration: 0.7,
		viewportFactor: 0.2
	});
}

/*product_tab.js*/
$(function() {
	// 产品详情页时尚模式
	var showprotype2='.met-showproduct.pagetype2';
	if($(showprotype2).length){
		var pagenav=showprotype2+' nav.navbar',
			pagenav_a='.met-showproduct-navtabs li a';
		window.metnav_h = $(".met-nav").outerHeight();
		window.$pagenav = $(pagenav);
		$(window).scroll(function (){
			var st = $(this).scrollTop();
			//标题工具栏固定
			if(st>=metnav_h){
				$pagenav.addClass('navbar-fixed-top').parent().css({'padding-top':$pagenav.outerHeight()});
			}else{
				$pagenav.removeClass('navbar-fixed-top').parent().css({'padding-top':0});
			}
			/*购买按钮位置切换*/
			if($('.imgshow .shop-btn').length){
				if(st>$('.imgshow .shop-btn').offset().top){
					$('.shop-btn-body').removeClass('hide');
				}else{
					if($('#product-summary').is(":visible")){
						$('.shop-btn-body').addClass('hide');
					}else{
						$('.shop-btn-body').removeClass('hide');
					}
				}
			}
			//选项卡自动选中
			$(pagenav_a+'[data-anchor]').each(function(){
				var topsize = pro_topsize($(this));
				if(st>=(topsize-200)) pro_active($(this));
			});
		});
		//选项卡点击滚动事件
		$(document).on('click',pagenav_a+'[data-anchor]', function(e) {
			e.preventDefault();
			var thisobj=$(this);
			$('html,body').animate({'scrollTop':pro_topsize($(this))},300,function () {
				pro_active(thisobj);
			});//页面滑动到指定位置
		})
		//选项卡滚动条（移动端）
		$(pagenav+' .navbar-toggle').one("click", function () {
            setTimeout(function(){
				navtabSwiper(".met-showproduct-navtabs");
			},0)
        });
		/*底部横条切换选项卡*/
		$(document).on('click','.pro-tab',function() {
			var id_href = $(this).data('href');
			$(pagenav_a+'[data-toggle=tab][href='+id_href+']').trigger('click');
		});
		//选项卡tab切换
		$(pagenav_a+'[data-toggle=tab]').on('shown.bs.tab', function (e) {
			var id = $(this).attr('href');
			location.hash=id;
			$('html,body').stop().animate({scrollTop:0},0);
			if(id!='#product-seo' && $('.seo-fullpage').hasClass('fullpage-wrapper') && !$('.seo-fullpage').hasClass('fp-destroyed')){
				$('.seo-fullpage').fullpage.destroy('all');
				$('.met-footnav:eq(1),footer:eq(1)').show();
			}
			if($('#product-summary').is(":visible")){
				$('.shop-btn-body').addClass('hide');
			}else{
				$('.shop-btn-body').removeClass('hide');
			}
			switch(id){
				case '#product-summary':
					resZoom('.imgshow .img-bg-pc');
					purchaseProcess();
				break;
				case '#product-details':
					productajaxtab(id,'details',function(){
						protabNormal(id);
						detailsDespose();
					})
				break;
				case '#product-seo':
					productajaxtab(id,'seo',function(){
						var seofullnum=1;
						Breakpoints.on('sm md lg',{
            				enter: function(){
            					if(seofullnum){
            						//全屏滚动初试化
									$('.seo-fullpage .head-clone div').height(metnav_h+$pagenav.outerHeight());
									$('.seo-fullpage .foot-clone').append($('.met-footnav,footer').clone());
									metweixin('.seo-fullpage .foot-clone #met-weixin','.seo-fullpage .foot-clone #met-weixin-content');
									$('.seo-fullpage').css({top:-(metnav_h+$pagenav.outerHeight())});
									seofullnum=0;
            					}
            					if($(id).is(':visible')) seoFullpage();
							}
						})
						Breakpoints.on('xs',{
							enter: function(){
								if($('.seo-fullpage').hasClass('fullpage-wrapper') && !$('.seo-fullpage').hasClass('fp-destroyed') && $(id).is(':visible')){
									$('.seo-fullpage').fullpage.destroy('all');
									$('.met-footnav:eq(1),footer:eq(1)').show();
								}
								$('.seo-fullpage img[data-original]').lazyload({
									threshold : 50,
									effect : "fadeIn"
								});
								$('.seo-fullpage .section .tab-swiper-body').removeClass('hide');
							}
						})
					});
				break;
				case '#product-exp':
					productajaxtab(id,'exp',function(){
						protabNormal(id);
						Breakpoints.on('md lg', {
							enter: function() {
								autoScro('.exp-1 .img-bg-pc div','source');
							}
						});
						scrollFun('.exp-3-img',-50,1,'',function () {
							var $exp_img=$('.exp-3 .img-bg-ipad1 img');
							$exp_img.hide().attr({src:$exp_img.data('original')}).removeAttr('data-original').fadeIn();
							appear('.exp-3 .img-bg-ipad1');
							Breakpoints.on('md lg', {
								enter: function() {
									setTimeout(function() {
										autoScro('.exp-3 .img-bg-ipad1 div','img');
									},500)
								}
							})
						});
						popvVideo('#product-exp .tab-exp .met-video-link');
					});
				break;
				case '#product-code':
					productajaxtab(id,'code',function(){
						protabNormal(id);
						if(device_type=='d'){
        					var $img_bg_pc_video=$('.code-1 .img-bg-ipad2 video');
        					$img_bg_pc_video.attr({src:$img_bg_pc_video.data('src')});
    					}else{
    						var $img_bg_pc_img=$('.code-1 .img-bg-ipad2 img');
        					$img_bg_pc_img.attr({src:$img_bg_pc_img.data('src')});
    					}
						scrollFun('.code-3-img','',1,'',function () {
							var $code_img=$('.code-3 .img-bg-ipad1 img');
							$code_img.hide().attr({src:$code_img.data('original')}).removeAttr('data-original').fadeIn();
							appear('.code-3 .img-bg-ipad1');
						});
						scrollFun('.gzip',-100,1,'',function(){
							$('.gzip li .progress-bar').each(function() {
								var	bar_w=$(this).attr('aria-valuenow')+'%';
								$(this).width(bar_w);
							});
						});
					});
				break;
				case '#product-para':
					productajaxtab(id,'para');
				break;
				case '#product-seave':
					productajaxtab(id,'seave');
				break;
				case '#product-faq':
					productajaxtab(id,'faq',function () {
						$(id+' #tab-faqlist [data-plugin=appear]').trigger('appear');
					});
				break;
			}
		})
		// 页面刷新加载锚点页面
		var location_hash=location.hash;
		if(location_hash && location_hash.indexOf('&')<0 && location_hash.indexOf('?')<0){
			$location_hash_a=$(pagenav_a+'[data-toggle=tab][href='+location_hash+']');
			if(location_hash!='#product-summary' && $location_hash_a.length) $location_hash_a.trigger('click');
		}
		if(!location_hash || location_hash=='#product-summary'){
			resZoom('.imgshow .img-bg-pc');
			purchaseProcess();
		}
	}
})
/*选中选项卡*/
function pro_active(dom){
	dom.parent().addClass('active').siblings().removeClass('active');
}
// 获取选项卡内容距离顶部的位置
function pro_topsize(dom){
	if(dom.attr("href").indexOf('#')>=0){
		var oftop = $(dom.attr("href")).offset().top,topsize = oftop - 100;
		if($pagenav.hasClass('navbar-fixed-top')){
			topsize = topsize + 50;
		}else{
			if(Breakpoints.is('xs')){
				topsize = topsize - $pagenav.find(".navbar-collapse-toolbar").height();
			}
		}
		if(topsize<0)topsize = 10;
		return topsize;
	}
}
// tab选项卡切换加载
function productajaxtab(id,name,func){
	if($(id).html()==''){
		$(id).html('<div class="example-loading example-well vertical-align text-center margin-0"><div class="loader vertical-align-middle loader-circle" data-type="default"></div></div>');
		var loadh=$(window).height()-$pagenav.outerHeight()-metnav_h;
		$('.met-showproduct.pagetype2 .tab-pane .example-loading').height(loadh);
		$.ajax({
			url: M['weburl']+'product/showproduct.php?ajax_tab='+name+'&id='+M['id'],
			type: 'POST',
			success: function(data) {
				$(id).html(data);
				if($(id+' [class*=img-bg-]').length){
					resZoom(id+' [class*=img-bg-]');
					Breakpoints.on('xs sm',{
						enter: function(){
							setTimeout(function(){
								$(id+' [class*=img-bg-]:eq(0)').removeClass('animation-delay-500 animation-fade hidden-xs hidden-sm').addClass('animation-fade');
							},2000)
						}
					})
				}
				if (typeof func === "function") func();
			}
		});
	}else{
		if(id=='#product-seo' && !Breakpoints.is('xs')) seoFullpage();
	}
}
// 选项卡执行滚屏
function seoFullpage(){
	$('.met-footnav:eq(1),footer:eq(1)').hide();
	$('.seo-fullpage .section').css({'padding-top':$pagenav.outerHeight()});
	$('.seo-fullpage').fullpage({
		sectionSelector:'section',
		verticalCentered: !1,
		navigation: !0,
		scrollBar:true,
		afterRender:function(){
			$('.seo-fullpage .section.seo-1 .tab-swiper-body').addClass('hide');
			setTimeout(function(){
				$('.seo-fullpage .section.seo-1 .tab-swiper-body').removeClass('hide');
			},100)
		},
		onLeave:function(index, nextIndex, direction){
			if(nextIndex!=1&&nextIndex!=$('.seo-fullpage section').length)
			setTimeout(function(){
				$('.seo-fullpage .section .tab-swiper-body').addClass('hide');
				$('.seo-fullpage .section.active .tab-swiper-body').removeClass('hide');
			},500);
		}
	});
}
// 选项卡内容标准动作
function protabNormal(id){
	$(id).find('img[data-original]').lazyload({
		threshold : 50,
		effect : "fadeIn"
	});
	Breakpoints.on('md lg',{
		enter: function(){
			setTimeout(function(){
				$(id).find('.tab-img:eq(0)').addClass('transtab');
			},500);
			$(id).find('.tab-img').each(function() {
				var thisobj=$(this);
				scrollFun(this,-100,'','',function(){
					$(id).find('.tab-img').removeClass('transtab');
					thisobj.addClass('transtab');
				});
			});
		}
	})
}
// 图片hover上下滚动
function autoScro(ascObj,sonObj) {
	$(ascObj).find(sonObj).each(function() {
		var this_obj=$(this).parents('span');
		removeImageSize(this,function(){
			var this_obj_p=this_obj.parents(ascObj),
				sonObjY = this_obj.height() - this_obj_p.height();
			if (sonObjY > 0) {
				this_obj_p.hover(function() {
					var sn = (parseInt(this_obj.css('top')) + sonObjY) / 150 * 1000;
					this_obj.stop().animate({top: -sonObjY},sn);
				},function() {
					var po = -parseInt(this_obj.css('top')) / 150 * 1000;
					this_obj.stop().animate({top: 0},po);
				});
			}
		});
	});
}
// 界面选项卡处理
function detailsDespose() {
	//内容详情图片延迟加载（因为是zoom缩放，但js获取的尺寸还是其真实尺寸，所以滚动触发会有误，只能获取父级元素的尺寸做特殊处理）
	$('#product-details .content-img').parent().each(function(index) {
		var $this=$(this);
		scrollFun(this,50,1,'',function () {
			$this.find('img[data-original]').attr({src:$this.find('img[data-original]').data('original')}).removeAttr('data-original');
		})
		if(index==0){
			$this.find('img[data-original]').attr({src:$this.find('img[data-original]').data('original')}).removeAttr('data-original');
			appear($this);
		}
	});
	//content图片自适应
	resZoom('.content-img');
}
// 购买流程示意图响应式
function purchaseProcess() {
	$(window).scroll(function() {
		if($(window).scrollTop()+$(window).height()>$('.purchase-process').offset().top && $(window).scrollTop()<$('.purchase-process').offset().top){
			$('.purchase-process').removeClass('invisible').addClass('alimation-fade');
		}
	})
	Breakpoints.on('xs',{
		enter: function(){
			$('.purchase-process').removeClass('pearls-lg').addClass('pearls-xs');
		}
	})
	Breakpoints.on('sm md lg',{
		enter: function(){
			$('.purchase-process').removeClass('pearls-xs').addClass('pearls-lg');
		}
	})
}
/*appstore.js*/
$(function() {
    /*应用商店列表页*/
    if($('.met-app-list').length){
        $(".met-app-list img[data-original]").lazyload({
            threshold : 50,
            effect : "fadeIn"
        });
    }

    /*应用商店详情页*/
    if($('.met-appstore-body').length){
        if($('.screenshot').length){
            var screenshot='.screenshot .screenshot-slick';
            // 水平滚动图
            if($(screenshot+' .slick-slide').length>1){
                $(screenshot).width($('.screenshot').width()).slick({
                    infinite:false,
                    swipe:false,
                    prevArrow:met_prevarrow,
                    nextArrow:met_nextarrow,
                    lazyloadPrevNext:true,
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            swipe:true
                        }
                    }]
                })
                $(window).resize(function() {
                    $(screenshot).width($('.screenshot').width());
                });
            }
        }
    }
    /*推荐应用延迟加载*/
    $(".app-sidebar-list img[data-original]").lazyload({
        threshold : 50,
        effect : "fadeIn"
    });

    /*应用商店-商城模块*/
    if($('.mshop_top').length){
        var mshop_slick='.mshop_top .mshop-slick';
        // 水平滚动图
        if($(mshop_slick+' .slick-slide').length>1){
            $(mshop_slick).slick({
                lazyLoad: 'ondemand',
                infinite:false,
                prevArrow:met_prevarrow,
                nextArrow:met_nextarrow,
                lazyloadPrevNext:true,
            })
        }
    }
})

/*case.js*/
$(function() {
    //图片懒加载
    $(".met-case img[data-original]").lazyload({
        threshold : 50,
        effect : "fadeIn"
    });
    //鼠标hover效果
    if($(".met-case .link").length){
        trigger_event_hover('.met-case .met-pager-ajax .widget');
    }
})
function trigger_event_hover(ecotrigger) {
    // var backgOverColor = "#3f3f3f";
    // var backgOutColor = '#141211';
    // var text1BaseColor = '#fff';
    $(ecotrigger).hover(function() {
        var ecowap = '';
        Breakpoints.get('xs').on({
            enter: function() {
                ecowap = 1;
            }
        });
        if (!ecowap) {
            jQueryelement = $(this);
            var icon_zoom = $(".link .zoom-gallery", this),
                icon_link = $(".link .link-gallery", this),
                w = jQueryelement.outerWidth(),
                h = jQueryelement.outerHeight(),
                x = w / 2 - icon_zoom.outerWidth() - 10,
                y =(h  -  icon_zoom.outerHeight())/2;
            if(!icon_link.length) x=(w-icon_zoom.outerWidth())/2;
            customHoverAnimation("over", event, $(this), $(".link", this));
            // var text = $(".thumb-hover-start", this);
            // TweenMax.to(text, 1, {
            //     css: {
            //         color: backgOutColor
            //     },
            //     ease: Quad.easeOut
            // });
            // TweenMax.to($(this), 1, {
            //     // css: {
            //     //     backgroundColor: backgOverColor
            //     // },
            //     ease: Quad.easeOut
            // });
            // alert(x+' '+y);
            TweenMax.to(icon_zoom, .5, {
                css: {
                    // boxShadow: "0px 0px 24px 6px white",
                    // borderRadius: "50%",
                    rotation: 360,
                    left: x,
                    top: y
                },
                ease: Quad.easeOutBounce
            });
            TweenMax.to(icon_link, .5, {
                css: {
                    // boxShadow: "0px 0px 24px 6px white",
                    // borderRadius: "50%",
                    rotation: 360,
                    left: x + icon_zoom.outerWidth() + 20,
                    top: y
                },
                ease: Quad.easeOutBounce
            });
        }
    },
    function() {
        var ecowap = '';
        Breakpoints.get('xs').on({
            enter: function() {
                ecowap = 1;
            }
        });
        if (!ecowap) {
            var icon_zoom = $(".link .zoom-gallery", this),
                icon_link = $(".link .link-gallery", this);
            customHoverAnimation("out", event, $(this), $(".link", this));
            // var text = $(".thumb-hover-start", this);
            // TweenMax.to(text, 1, {
            //     css: {
            //         color: text1BaseColor
            //     },
            //     ease: Circ.easeOut
            // });
            TweenMax.to($(this), 1, {
                // css: {
                //     backgroundColor: backgOutColor
                // },
                ease: Quad.easeOut
            });
            TweenMax.to(icon_zoom, 0.5, {
                css: {
                    // boxShadow: "0px 0px 24px 6px black",
                    rotation: 0,
                    left: 0,
                    top: 0
                }
            });
            TweenMax.to(icon_link, 0.5, {
                css: {
                    // boxShadow: "0px 0px 24px 6px black",
                    rotation: 0,
                    left: "100%",
                    top: '100%'
                }
            });
        }
    });
}
function customHoverAnimation(type, event, parent, child) {
    var directionCSS = getDirectionCSS(parent, {
        x: event.pageX,
        y: event.pageY
    });
    if (type == "over") {
        child.css("left", directionCSS.from.val1);
        child.css("top", directionCSS.from.val2);
        TweenMax.to(child, .3, {
            css: {
                left: directionCSS.to.val1,
                top: directionCSS.to.val2
            },
            ease: Sine.easeInOut
        });
    } else if (type == "out") {
        TweenMax.to(child, .3, {
            css: {
                left: directionCSS.from.val1,
                top: directionCSS.from.val2
            },
            ease: Sine.easeInOut
        });
    }
}
function getDirectionCSS(jQueryelement, coordinates) {
    /** the width and height of the current div **/
    var w = jQueryelement.width(),
        h = jQueryelement.height(),
        /** calculate the x and y to get an angle to the center of the div from that x and y. **/
        /** gets the x value relative to the center of the DIV and "normalize" it **/
        x = (coordinates.x - jQueryelement.offset().left - (w / 2)) * (w > h ? (h / w) : 1),
        y = (coordinates.y - jQueryelement.offset().top - (h / 2)) * (h > w ? (w / h) : 1),
        /** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
        /** first calculate the angle of the point, add 180 deg to get rid of the negative values divide by 90 to get the quadrant
        add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
        direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    var fromClass, toClass;
    switch (direction) {
        case 0:
            /* from top */
            fromClass = {
                instance: 'hover-slideFromTop',
                val1: "0px",
                val2: "-100%"
            };
            toClass = {
                instance: 'hover-slideTopLeft',
                val1: "0px",
                val2: "0px"
            };
            break;
        case 1:
            /* from right */
            fromClass = {
                instance: 'hover-slideFromRight',
                val1: "100%",
                val2: "0px"
            };
            toClass = {
                instance: 'hover-slideTopLeft',
                val1: "0px",
                val2: "0px"
            };
            break;
        case 2:
            /* from bottom */
            fromClass = {
                instance: 'hover-slideFromBottom',
                val1: "0px",
                val2: "100%"
            };
            toClass = {
                instance: 'hover-slideTopLeft',
                val1: "0px",
                val2: "0px"
            };
            break;
        case 3:
            /* from left */
            fromClass = {
                instance: 'hover-slideFromLeft',
                val1: "-100%",
                val2: "0px"
            };
            toClass = {
                instance: 'hover-slideTopLeft',
                val1: "0px",
                val2: "0px"
            };
            break;
    };
    return {
        from: fromClass,
        to: toClass
    };
}
/*news.js*/
$(function() {
	if ($('.met-news-list').length) {
		$(".media img[data-original]").lazyload({
			threshold: 50,
			effect: "fadeIn"
		});
		/*去除图片宽高属性*/
		removeImageSize(".media img");
	}
	/*侧栏图片列表延迟加载及瀑布流*/
	$('.mob-masonry img[data-original]').lazyload({
		threshold: 50,
		effect: "fadeIn",
		load: function() {
			Breakpoints.get('xs').on({
				enter: function() {
					$('.met-news-muban .mob-masonry').masonry({
						itemSelector: ".masonry-item"
					});
				}
			});
		}
	})
})
/*log.js*/
$(function() {

	/*更新日志滚屏加载*/

	if ($('.metinfo-log').length) {

		appear('.timeline-period:eq(0),.timeline-item:lt(2)');

		// $('.timeline-item').appear();

		// $('.timeline-item').not('appeared').each(function() {

		// 	var $item = $(this);

		// 	$item.addClass('timeline-invisible');

		// 	$item.find('.timeline-dot').addClass('invisible');

		// 	$item.find('.timeline-info').addClass('invisible');

		// 	$item.find('.timeline-content').addClass('invisible');

		// });

		// $(document).on('appear', '.timeline-item.timeline-invisible', function(e) {

		// 	var $item = $(this);

		// 	$item.removeClass('timeline-invisible');

		// 	$item.find('.timeline-dot').removeClass('invisible').addClass('animation-scale-up');

		// 	if ($item.hasClass('timeline-reverse') || $item.css('float') === 'none') {

		// 		$item.find('.timeline-info').removeClass('invisible').addClass('animation-slide-right');

		// 		$item.find('.timeline-content').removeClass('invisible').addClass('animation-slide-right');

		// 	} else {

		// 		$item.find('.timeline-info').removeClass('invisible').addClass('animation-slide-left');

		// 		$item.find('.timeline-content').removeClass('invisible').addClass('animation-slide-left');

		// 	}

		// });

	}

})
/*show.js*/
$(function() {
    /*定制案例轮播*/
    var $customcase_slick=$('.case-slick');
    if($('.case-slick .slick-slide').length>2){
        $customcase_slick.slick({
            dots: true,
            infinite:false,
            slidesToShow:2,
            slidesToScroll:2,
            prevArrow:met_prevarrow,
            nextArrow:met_nextarrow,
            responsive: [{
                breakpoint:768,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1
                }
            }]
        })
    }
    if($('.met-table').length){
        Breakpoints.on('xs',{
            enter: function(){
                if($('.met-table').hasClass('hidden-xs')){
                    $('.met-table').removeClass('hidden-xs').find('td.c2,td.c2_b').each(function() {
                        var this_clone=$(this).clone(),
                            this_sib_cone=$(this).nextAll().clone();
                        $(this).addClass('hidden-xs').nextAll().addClass('hidden-xs');
                        $(this).after(this_clone).parent('tr').after('<tr class="visible-xs"></tr>');
                        $(this).parent('tr').next().html(this_sib_cone);
                        $(this).next().removeAttr('rowspan').attr({colspan:2}).addClass('visible-xs');
                    });
                }
            }
        })
    }
})
/*pager.js*/
$(function() {
    /*翻页ajax加载*/
    if ($(".met-pager-ajax").length) {
        if ($(".met_pager a").length == 1) $(".met_pager").addClass('hide');
        if ($(".met-pager-ajax-body").hasClass("visible-xs-block")) {
            Breakpoints.get('xs').on({
                enter: function() {
                    metpageajax();
                }
            });
        } else {
            metpageajax();
        }
    }
})
/*分页脚本*/
function metpageajax() {
    var pagebtn = $("#met-pager-btn"),
        pageul = $(".met-pager-ajax");
    window.pagemax = $(".met_pager a").length - 1;
    window.page = pagebtn.data("page");
    if (pagemax <= page) pagebtn.addClass('hide');
    pagebtn.click(function() {
        var dom = $(this);
        if (!dom.hasClass("disabled")) {
            page++;
            var l = Ladda.create(dom[0]);
            l.start();
            $.ajax({
                url: dom.data("url") + '&page=' + page,
                type: 'POST',
                success: function(data) {
                    pageul.append(data);
                    pagespecial(); /*特殊处理*/
                    l.stop();
                    if (pagemax <= page) dom.addClass('hide');
                }
            });
        }
    });
}
/*无刷新分页获取到数据追加到页面后，可以在此方法继续处理*/
function pagespecial() {
    // 图片延迟加载
    $(".met-pager-ajax li.page" + page + " img[data-original]").lazyload({
        threshold: 50,
        effect: "fadeIn",
        load: function() {
            $(this).height('').removeAttr('width').removeAttr('height');
        }
    });
    //产品模块瀑布流
    if($('#met-grid').length) MetAnimOnScroll();
    //案例模块
    if($('.met-case .met-pager-ajax li.page' + page + ' .thumb-image-hover').length){
          trigger_event_hover('.met-case .met-pager-ajax li.page' + page + ' .widget');
    }
}
/*index.js*/
/*
 * M['weburl'] 		//网站网址
 * M['lang']  		//网站语言
 * M['tem']  		//模板目录路径
 * M['classnow']  	//当前栏目ID
 * M['id']  		//当前页面ID
 * M['module']  	//当前页面所属模块
 * device_type       //客户端判断（d：桌面电脑，t：平板电脑，m：手机）
*/
if(M['module']==10001){
	$(function() {
		/*延迟加载*/
		$("[data-original]").lazyload({
			threshold : 50,
			effect : "fadeIn"
		});
		/*演示左右切换*/
		var $gn_img=$('.met-index-gn [class*=gn-img]');
		if($gn_img.length){
			$gn_img.each(function() {
				var $this_gn_slick=$('.gn-slick',this);
				scrollFun(this,'',1,'',function(){
					$this_gn_slick.slick({
						autoplay:true,
						autoplaySpeed: 3000,
						touchThreshold:10,
						infinite:false,
						prevArrow:'',
						nextArrow:'',
						lazyloadPrevNext:true,
					});
				})
			});
		}
		/*SEO介绍左右切换*/
		var metindexseo='.met-index-seo .seo-slick';
		if($(metindexseo).length){
			scrollFun(metindexseo,30,1,'',function(){
				$(metindexseo).slick({
			        dots: true,
			        infinite:false,
			        prevArrow:met_prevarrow,
			        nextArrow:met_nextarrow,
			        responsive: [{
						breakpoint:1024,
						settings: {
							touchThreshold:3,
							touchMove:false,
						}
					}]
				})
				$(metindexseo).on('setPosition', function(event, slick) {
					appear(metindexseo+' .slick-slide.slick-current');
				});
			})
		}
		/*响应式介绍视频弹窗*/
		if($('.met-index-mb').length) popvVideo('.met-index-mb .met-video-link');
		/*CMS区块移动端效果切换*/
		if(Breakpoints.is('xs')) $('.met-index-cms .blocks li:eq(0),.met-index-cms .blocks li:eq(2)').attr({'data-animate':'slide-bottom'});
		/*评价*/
		var $evaluate_slick=$('.evaluate-slick');
		if($('.evaluate-slick .slick-slide').length){
			scrollFun('.evaluate-slick',30,1,'',function(){
				$evaluate_slick.slick({
					draggable:false,
			        infinite:false,
			        adaptiveHeight: true,
			        prevArrow:'<button type="button" class="slick-prev"><i class="icon pe-angle-left"></i></button>',
			        nextArrow:'<button type="button" class="slick-next"><i class="icon pe-angle-right"></i></button>',
				})
			})
		}
	})
}

/*案例点击购买模板弹窗*/
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
var is_case = GetQueryString("case");
if (is_case){
    $('#case-m').modal('show');
    if($('.case-m').length){
        $('.case-m').modal({
            keyboard:false,
            backdrop:false
        }).on('hide.bs.modal',function(event) {
            $('.page.pay').removeAttr('hidden');
        });
    }
}

/*editor.js*/
$(function() {
	/*编辑器响应式表格*/
	if ($(".met-editor table").length) {
		$(".met-editor table").addClass('table table-bordered table-hover table-striped table-responsive');
		tablexys();
	}
	/*编辑器图片画廊*/
	if ($(".met-editor img").length) {
		$(".met-editor.lazyload img[data-original]").lazyload({
			effect: "fadeIn"
		});
		$(".met-editor").wrapInner("<div class='editorlightgallery'></div>");
		$(".met-editor img").each(function() {
			if ($(this).parent("a").length == 0) {
				var data_src = $(this).data("original") ? $(this).data("original"):($(this).data("src")?$(this).data("src"):$(this).attr("src")),
					data_thumbs=data_src.split('upload/'),
					data_thumb='../include/thumb.php?dir=../upload/'+data_thumbs[1]+'&x=60&y=60';
				$(this).wrap("<div class='lg-item-box' data-src='" + data_src + "' data-exthumbimage='" + data_thumb + "'></div>");
			}
		});
		$("body").addClass("met-white-lightGallery"); //画廊皮肤
		$('.editorlightgallery').lightGallery({
			selector: '.lg-item-box',
			autoplayControls: false,
			exThumbImage: 'data-exthumbimage',
			getCaptionFromTitleOrAlt: false
		});
	}
})
/*表格格式化*/
function tablexys() {
	Breakpoints.get('xs').on({
		enter: function() {
			$(".met-editor table").each(function() {
				var table = $(this);
				if (table.is(':visible') && !table.hasClass('tablesaw')) {
					if (table.find("thead").length) {
						table.addClass('tablesaw').attr("data-tablesaw-mode", "swipe");
					} else {
						var td = table.find("tbody tr:eq(0) td"),
							th;
						if (td.length == 0) td = table.find("tbody tr:eq(0) th");
						td.each(function() {
							th += '<th>' + $(this).html() + '</th>';
						});
						table.prepend("<thead><tr>" + th + "</tr></thead>");
						table.find("tbody tr:eq(0)").remove();
						table.find("tbody td").attr('width', 'auto');
						table.addClass('tablesaw').attr("data-tablesaw-mode", "swipe");
					}
				}
			});
			$(document).trigger("enhance.tablesaw");
		}
	});
}
/*own.js*/
/*
 * M['weburl'] 		//网站网址
 * M['lang']  		//网站语言
 * M['tem']  		//模板目录路径
 * M['classnow']  	//当前栏目ID
 * M['id']  		//当前页面ID
 * M['module']  	//当前页面所属模块
 * device_type       //客户端判断（d：桌面电脑，t：平板电脑，m：手机）
*/
$(function() {
    /*导航处理*/
    $('.met-nav .dropdown a.link').click(function(){
        if(device_type=='d' && !Breakpoints.is('xs') && $(this).data("hover")) window.location.href = $(this).attr('href');
    });

	/*导航固定定位处理*/
	if($(".navbar-fixed-top").length){
		// 导航添加投影
		$(window).scroll(function (){
			if($(".navbar-fixed-top").offset().top>1){
				$(".navbar-fixed-top").addClass("navbar-shadow");
			}else{
				$(".navbar-fixed-top").removeClass("navbar-shadow");
			}
		});
		// 导航绑定滚动条方向事件
		// scrollbarFun(function () {
		// 	$('.navbar-fixed-top').css({top:-50});
		// },function () {
		// 	$('.navbar-fixed-top').css({top:0});
		// })
	}

	/*下拉菜单动画修复*/
	$(".navlist .dropdown-submenu").hover(
		function(){
			$(this).parent('.dropdown-menu').addClass('overflow-visible');
		},
		function(){
			$(this).parent('.dropdown-menu').removeClass('overflow-visible');
		}
	);

	//内页内滚导航条（移动端）
    if($('.met-column-nav-ul').length) navtabSwiper('.met-column-nav-ul');

	/*底部微信*/
    if($('#met-weixin').length){
        metweixin('#met-weixin','#met-weixin-content');
    }

	//底部导航手机端处理
	if($('.met-footnav').length){
		Breakpoints.get('xs').on({
			enter: function(){
				$('.met-footnav .mob-masonry').masonry({itemSelector: ".masonry-item"});
			}
		});
	}
    /*在线反馈按钮*/
    $("#btn-feed").click(function(){
        setTimeout("$('#indexFeed').modal('hide')",2000);
    });
    /*在线工具*/
    if(!$('html').hasClass('no-online')) include(M['tem']+'/min/js/online.js?2017072501');
    // 视频插件异步加载
    if($(".metvideobox").length>0){
        $(".metvideobox").each(function(){
            var data=$(this).attr("data-metvideo");
                data=data.split("|");
            var width=data[0],
                height=data[1],
                poster=data[2],
                autoplay=data[3],
                src=data[4];
            var vhtml='<div class="metvideobox"><video class="metvideo video-js vjs-default-skin" controls preload="none" width="'+width+'" height="'+height+'" poster="'+poster+'" data-setup=\'{\"autoplay\":'+autoplay+'}\'>';
                vhtml+='<source src="'+src+'" type="video/mp4" />';
                vhtml+='</video></div>';
                $(this).after(vhtml).remove();
        });
        include(M['weburl']+'public/ui/v1/js/effects/video-js/video-js.css');
        if(device_type=='d'){
            include(M['weburl']+"public/ui/v1/js/effects/video-js/video_hack.js",function(){
                setTimeout(function(){
                    videoSizeRes('.metvideo');
                },0)
            });
        }else{
            videoSizeRes('.metvideo');
        }
    }
    if($('.met-editor iframe,.met-editor embed').length) videoSizeRes('.met-editor iframe,.met-editor embed');
})

/*选项卡滑动导航标准处理（移动端）*/
function navtabSwiper(navObj) {
    var navtabSdefault=function(){
        var navObjW=sonWidthSum(navObj+'>li')+$('.caret',navObj).length;
        if(navObjW>$(navObj).parent().width()){
            if($(navObj).hasClass('swiper-wrapper')){
                if(!$(navObj).hasClass('flex-start')) $(navObj).addClass('flex-start');
            }else{
                $(navObj)
                .addClass("swiper-wrapper flex-start")
                .wrap("<div class=\"swiper-container swiper-navtab\"></div>").after('<div class="swiper-scrollbar"></div>')
                .find(">li").addClass("swiper-slide");
                var swiperNavtab = new Swiper('.swiper-navtab', {
                    slidesPerView: 'auto',
                    scrollbar:'.swiper-scrollbar',
                    scrollbarHide:false,
                    scrollbarDraggable:true
                });
            }
        }else if($(navObj).hasClass('flex-start')){
            $(navObj).removeClass('flex-start');
        }
    };
    navtabSdefault();
    $(window).resize(function() {
        navtabSdefault();
    })
    //下拉菜单被隐藏特殊情况处理
    if($(navObj+' .dropdown').length) $(".swiper-navtab").addClass("overflow-visible");
}
/*底部微信弹出*/
function metweixin(weixinname,weixin_content){
    var defaults = $.components.getDefaults("webuiPopover"),
        weixinContent = $(weixin_content).html(),
            weixinSettings = {
            title: '',
            content: weixinContent,
            placement:'top',
            trigger:'hover',
            width: 162,
            padding:false,
            offsetTop:-10,
            animation:'pop'
        };
    $(weixinname).webuiPopover($.extend({}, defaults, weixinSettings));
}
/**
 * include 异步加载文件
 * @param  {String}   file 文件路径
 * @param  {function} fun  文件加载完成回调
 */
function include(file,fun) {
    var files=typeof file=="string" ? [file]:file,
        fileallnum=typeof file=="string" ?1:files.length,
        filenum=0;
    for (var i=0; i < fileallnum; i++){
        var name=files[i].replace(/^\s|\s$/g,""),
            att=name.split('.'),
            ext=att[att.length - 1].toLowerCase().split('?');
        if (ext[0]=='js'){
            var filesi=document.createElement('script');
            filesi.src=name;
            filesi.type="text/javascript";
            if (typeof filesi !="undefined") document.getElementsByTagName('html')[0].appendChild(filesi);
        } else if (ext[0]=='css'){
            var filesi=document.createElement('link');
            filesi.href=name;
            filesi.type='text/css';
            filesi.rel="stylesheet";
            if (typeof filesi !="undefined") document.getElementsByTagName('head')[0].appendChild(filesi);
        }
        // 文件加载完成回调
        if (typeof fun==="function"){
            filesi.onload=filesi.onreadystatechange=function(){
                var r=filesi.readyState;
                if (!r || r==='loaded' || r==='complete'){
                    filenum++;
                    if(filenum==fileallnum){
                         filesi.onload=filesi.onreadystatechange=null;
                         fun();
                    }
                }
            };
        }
    }
}
//去除图片宽高属性
function removeImageSize(risObj,fun) {
    $(risObj).each(function() {
        if ($(this).data('original') || $(this).data('lazy')) {
            var risTobj=$(this),
                risT=setInterval(function() {
                    if (risTobj.data('original') == risTobj.attr('src') || risTobj.data('lazy') == risTobj.attr('src')) {
                        risTobj.height('').removeAttr('width').removeAttr('height');
                        if (typeof fun === "function") fun();
                        clearInterval(risT);
                    }
                }, 10);
        } else {
            var img = new Image();
            img.src = $(this).attr('src')?$(this).attr('src'):$(this).attr('srcset');
            if (img.complete) {
                $(this).height('').removeAttr('width').removeAttr('height');
                if (typeof fun === "function") fun();
                return;
            }
            img.onload = function() {
                $(this).height('').removeAttr('width').removeAttr('height');
                if (typeof fun === "function") fun();
            };
        }
    });
};
/*滚动触发*/
function scrollFun(sfObj,top,loop,visible,fun){
    if (typeof fun === "function") {
        var funOpen=1,tops=top?top:0;
        $(window).scroll(function(){
            if(funOpen==1){
                $(sfObj).each(function() {
                    var sfObjT = $(this).offset().top - $(window).scrollTop()-$(window).height(),
                        sfObjB = $(this).offset().top + $(this).outerHeight() - $(window).scrollTop();
                    visible=visible?visible:$(this).is(":visible")?1:0;
                    if(sfObjT<tops && sfObjB>0 && visible){
                        fun();
                        if(loop) funOpen=0;
                    }
                });
            }
        })
    }
}
/*父元素宽度计算*/
function sonWidthSum(sonObj,sonNum){
    var sonObjs=$(sonObj),
        sonTrueNum=sonObjs.length,
        parentObjW=0;
    if(sonNum>sonTrueNum||!sonNum) sonNum=sonTrueNum;
    for (var i = 0; i < sonNum; i++) {
        var sonObjW=sonObjs.eq(i).outerWidth()+parseInt(sonObjs.eq(i).css('marginLeft'))+parseInt(sonObjs.eq(i).css('marginRight'));
        parentObjW+=sonObjW;
    }
    return parentObjW+sonNum;
}
/*获取地址栏参数*/
function getUrlParam(paramName) {
    var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)"),
        r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
/*修改、添加、删除地址栏参数*/
function replaceParamVal(paramName,replaceWith) {
	var newUrl=oldUrl=window.location.href,
        paramNames='&' + paramName + '=';
        re = eval('/('+paramNames+')([^&]*)/gi');
    if(replaceWith){
        if(oldUrl.indexOf(paramNames)>=0){
            newUrl = oldUrl.replace(re, paramNames + replaceWith);
        }else{
            newUrl = oldUrl+ paramNames + replaceWith;
        }
    }else if(oldUrl.indexOf(paramNames)>=0){
        newUrl = oldUrl.replace(re, '');
    }
	history.pushState('','',newUrl);
}
/*手动appear动画*/
function appear(appearObj){
    thisAppear=$(appearObj).hasClass('invisible')?$(appearObj):$(appearObj).find('.invisible');
    thisAppear.each(function() {
        if(!$(this).hasClass('appear-no-repeat')){
            var animate=$(this).data('animate'),
                animation='animation-'+animate+'';
            $(this).addClass(animation).addClass('appear-no-repeat').removeClass('invisible');
        }
    });
}
/*判断滚动条方向*/
// function scrollbarFun(funt,funb) {
//     var initTop = 0;
//     $(window).scroll(function() {
//         var scrollTop = $(document).scrollTop();
//         if (scrollTop > initTop){
//             if(typeof funt === "function") funt();
//         } else {
//             if(typeof funb === "function") funb();
//         }
//         setTimeout(function () {
//             initTop = scrollTop;
//         },0);
//     });
// }
/*数字滚动*/
// function numScroll(numObj,startNum,endNum,time,interval) {
//     var difference=Math.max(startNum,endNum)-Math.min(startNum,endNum),
//         numT=Math.ceil(time/interval),
//         quotient=parseInt(difference/numT),
//         defaultT=showNum=1,
//         numI=setInterval(function () {
//             if(defaultT<numT) {
//                 if(startNum<endNum){
//                     startNum+=quotient;
//                 }else{
//                     startNum-=quotient;
//                 }
//                 var from=parseInt(-quotient/2),to=parseInt(quotient/2);
//                 $(numObj).html(cutStr(volatility(startNum,from,to)));
//             }else{
//                 $(numObj).html(cutStr(endNum));
//                 clearInterval(numI);
//             }
//             defaultT++;
//         },interval);
//     //浮动值
//     function volatility(num, from, to){
//         return Math.round(Math.random() * (to - from)) + num + from;
//     };
//     //每隔四位数添加逗号
//     function cutStr(num) {
//         return num && (num.toString().indexOf('.') != -1 ? num.toString().replace(/(\d)(?=(\d{4})+\.)/g, function($0, $1) {
//                 return $1 + ",";
//             }) : num.toString().replace(/(\d)(?=(\d{4})+\b)/g, function($0, $1) {
//                 return $1 + ",";
//             }));
//     }
// }
// /*16进制颜色转为RGB格式*/
// function colorRgba(sColor,opacity){
//     var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
//         sColor = sColor.toLowerCase();
//     if(sColor && reg.test(sColor)){
//         if(sColor.length === 4){
//             var sColorNew = "#";
//             for(var i=1; i<4; i+=1){
//                 sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
//             }
//             sColor = sColorNew;
//         }
//         //处理六位的颜色值
//         var sColorChange = [];
//         for(var i=1; i<7; i+=2){
//             sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
//         }
//         return "rgba(" + sColorChange.join(",") +","+opacity+ ")";
//     }else{
//         return sColor;
//     }
// };
/*视频弹窗*/
function popvVideo (popvObj) {
    if($(popvObj+'[data-toggle=modal]').length){
            $('body').append(
                '<div class="modal fade modal-fall vertical-align" id="popup-video" aria-hidden="true" data-backdrop="static" aria-labelledby="exampleModalTitle" role="dialog" tabindex="-1"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="iconfont icon-close" aria-hidden="true"></i></button><video controls autoplay class="met-video modal-dialog vertical-align-middle" >您的浏览器不支持 video 标签。</video></div>');
            var videos = document.getElementsByClassName("met-video")[0];
            $(popvObj).click(function() {
                if($('.met-video').attr('src')){
                    $('.met-video').show();
                    videos.play();
                }else{
                    $('.met-video').attr({src:$(this).data('src')});
                }
                setTimeout(function () {
                    $('.modal-backdrop').addClass('bgfop05');
                },0);
            })
            $(document).on('click','#popup-video .close',function() {
                videos.pause();
                $('.met-video').hide();
            })
            videos.addEventListener('ended', function () {
                $('#popup-video .close').trigger('click');
            }, false);
        // }
    }
}
/*响应式缩放*/
function resZoom(zoomObj) {
    var zoomObjs = typeof zoomObj == "string" ? [zoomObj] : zoomObj,
        zoomdeFault=function(thisObj){
            var thisObj=$(thisObj),
                zoom=thisObj.parent().width()/thisObj.outerWidth();
            if(zoom<1){
                thisObj.css({zoom:zoom});
            }else{
                thisObj.css({zoom:1});
            };
        };
    for (var i = 0; i < zoomObjs.length; i++) {
        $(zoomObjs[i]).each(function() {
            var thisObj=this;
            zoomdeFault(this);
            $(window).resize(function() {
                /*if($(thisObj).is(":visible"))*/ zoomdeFault(thisObj);
            });
            // $(window).scroll(function() {
            //     if($(thisObj).is(":visible")) zoomdeFault(thisObj);
            // });
        });
    }
};
// 视频尺寸自适应
function videoSizeRes(ogj){
    $(ogj).each(function(){
        var $this=$(this),
            scale=$(this).attr('height')/$(this).attr('width');
        if(!scale) scale=parseInt($(this).css('height'))/parseInt($(this).css('width'));
        if(scale){
            $(this).height($(this).width()*scale);
            $(window).resize(function(){
                $this.height($this.width()*scale);
            });
        }
    });
}
//下载页面云端 滚动条
        var scroll = $("#scroll");
        var scroll_service = $("#scroll-service");
        if(scroll.length>0 && scroll_service.length>0){
            scroll.click(function(){
                 var top = scroll_service.offset().top-80;
                $("body").animate({
                    scrollTop:top+'px'
                },500)
            });
        }

/*sys.js*/
// 访问统计
if (M["module"] && M["id"]) {
    var modulename = "";
    switch (M["module"]) {
        case 2:
            modulename = "news";
            break;
        case 3:
            modulename = "product";
            break;
        case 4:
            modulename = "download";
            break;
        case 5:
            modulename = "img";
            break
    }
    if (modulename != "") {
        $.ajax({
            type: "POST",
            url: M['weburl'] + "include/hits.php?type=" + modulename + "&id=" + M["id"] + "&metinfover=v2"
        })
    }
}
// 在线交流
var uidata_url = M['weburl'] + "include/interface/uidata.php?lang=" + M["lang"],
    h = window.location.href;
if (h.indexOf("preview=1") != -1) {
    uidata_url = uidata_url + "&theme_preview=1"
}
$.ajax({
    type: "POST",
    url: uidata_url,
    dataType: "json",
    success: function(msg) {
        var c = msg.config;
        // 在线交流
        if (c.met_online_type != 3) {
            $.include([M['weburl'] + "public/css/online.css",M['weburl']+"public/js/jquery-migrate-1.2.1.min.js"],function(){ // jquery-migrate：jQuery 应用迁移辅助插件
                var t, x, y;
                (function($) {
                    jQuery.fn.PositionFixed = function(options) {
                        var defaults = {
                            css: "",
                            x: 0,
                            y: 0
                        };
                        var o = jQuery.extend(defaults, options);
                        var isIe6 = false;
                        if ($.browser.msie && parseInt($.browser.version) == 6) {
                            isIe6 = true
                        }
                        var html = $("html");
                        if (isIe6 && html.css("backgroundAttachment") !== "fixed") {
                            html.css("backgroundAttachment", "fixed")
                        }
                        return this.each(function() {
                            var domThis = $(this)[0];
                            var objThis = $(this);
                            if (isIe6) {
                                var left = parseInt(o.x) - html.scrollLeft(),
                                    top = parseInt(o.y) - html.scrollTop();
                                objThis.css("position", "absolute");
                                domThis.style.setExpression("left", "eval((document.documentElement).scrollLeft + " + o.x + ') + "px"');
                                domThis.style.setExpression("top", "eval((document.documentElement).scrollTop + " + o.y + ') + "px"')
                            } else {
                                objThis.css("position", "fixed").css("top", o.y).css("left", o.x)
                            }
                        })
                    }
                })(jQuery);
                //滚动方式
                var Floaters = {
                    delta: 0.08,
                    queue: null,
                    collection: {},
                    items: [],
                    addItem: function(Obj, left, top, ani) {
                        Obj.style["top"] = top + "px";
                        Obj.style["left"] = left + "px";
                        var newItem = {
                            object: Obj,
                            oLeft: left,
                            oTop: top
                        };
                        this.items[this.items.length] = newItem;
                        this.delta = ani ? ani : this.delta
                    },
                    sPlay: function() {
                        this.collection = this.items;
                        this.queue = setInterval(function() {
                            metplay()
                        }, 10)
                    }
                };

                function checkStandard() {
                    var scrollY;
                    if (document.documentElement && document.documentElement.scrollTop) {
                        scrollY = document.documentElement.scrollTop
                    } else {
                        if (document.body) {
                            scrollY = document.body.scrollTop
                        }
                    }
                    return scrollY
                }

                function metplay() {
                    var diffY = checkStandard();
                    for (var i in Floaters.collection) {
                        var obj = Floaters.collection[i].object;
                        var obj_y = Floaters.collection[i].oTop;
                        var total = diffY + obj_y;
                        if (obj.offsetTop != total) {
                            var oy = (total - obj.offsetTop) * Floaters.delta;
                            oy = (oy > 0 ? 1 : -1) * Math.ceil(Math.abs(oy));
                            obj.style["top"] = obj.offsetTop + oy + "px"
                        } else {
                            clearInterval(Floaters.queue);
                            Floaters.queue = setInterval(function() {
                                metplay()
                            }, 10)
                        }
                    }
                }
                //在线交流部分
                function onlineclose() {
                    $("#onlinebox").hide();
                    return false
                }

                function olne_domx(type, onlinex) {
                    var maxr = document.body.offsetWidth - $("#onlinebox").width();
                    if (type > 1) {
                        onlinex = document.body.scrollWidth - $("#onlinebox").width() - onlinex
                    }
                    if (onlinex < 0) {
                        onlinex = 0
                    }
                    if (onlinex > maxr) {
                        onlinex = maxr;
                        if ($.browser.msie && parseInt($.browser.version) == 6) {
                            onlinex = maxr - 18
                        }
                    }
                    return onlinex
                }

                function olne_domx_op(type, onlinex) {
                    var zwd = document.documentElement.clientWidth;
                    var oboxw = $("#onlinebox").width();
                    oboxw = oboxw == 0 ? $("#onlinebox .onlinebox-conbox").width() : oboxw;
                    var maxr = zwd - oboxw;
                    if (type > 1) {
                        onlinex = zwd - oboxw - onlinex
                    }
                    if (onlinex < 0) {
                        onlinex = 0
                    }
                    if (onlinex > maxr) {
                        onlinex = maxr;
                        if ($.browser.msie && parseInt($.browser.version) == 6) {
                            onlinex = maxr - 18
                        }
                    }
                    return onlinex
                }

                function olne_dd_wd(d) {
                    var w = 0;
                    d.each(function() {
                        w = w > $(this).outerWidth(true) ? w : $(this).outerWidth(true)
                    });
                    return w
                }

                function olne_mouse_on(t, my, nex, type) {
                    if (t == 1) {
                        my.hide();
                        nex.show();
                        var dmk = $("div.onlinebox-conbox .online-tbox").size() ? $("div.onlinebox-conbox .online-tbox").outerWidth(true) : 0;
                        var dt = olne_dd_wd($("div.onlinebox-conbox dd"));
                        dt = dt > dmk ? dt : $("div.onlinebox-conbox .online-tbox").outerWidth(true);
                        if (dt <= 0) {
                            dt = 100
                        }
                        nex.css({
                            "width": dt + "px"
                        })
                    } else {
                        nex.css({
                            "position": "absolute",
                            "left": "0px"
                        });
                        nex.hide();
                        my.show()
                    }
                    olne_resize()
                }
                // 页面尺寸变化
                function olne_resize() {
                    mx = Number(olne_domx_op(t, x));
                    my = Number(y);
                    if (t > 0 && t < 3) {
                        var floatDivr = document.getElementById("onlinebox");
                        Floaters.addItem(floatDivr, mx, my);
                        Floaters.sPlay()
                    } else {
                        $("#onlinebox").PositionFixed({
                            x: mx,
                            y: my
                        })
                    }
                }

                function olne_mouse(dom, type) {
                    var nex = dom.next("div.onlinebox-conbox");
                    if ($(".onlinebox_2").size() > 0) {
                        dom.click(function() {
                            olne_mouse_on(1, $(this), nex, type)
                        })
                    } else {
                        dom.hover(function() {
                            olne_mouse_on(1, $(this), nex, type)
                        }, function() {})
                    }
                    $("#onlinebox .onlinebox-top").click(function() {
                        if (!nex.is(":hidden")) {
                            olne_mouse_on(0, dom, nex, type)
                        }
                    });
                    textWrap($(".onlinebox-showbox span"))
                }

                function textWrap(my) {
                    var text = "",
                        txt = my.text();
                    txt = txt.split("");
                    for (var i = 0; i < txt.length; i++) {
                        text += txt[i] + "<br/>"
                    }
                    my.html(text)
                }

                function olne_app(msg, type, mxq, myq) {
                    $("body").append(msg);
                    mx = Number(olne_domx_op(type, mxq));
                    my = Number(myq);
                    if (type > 0 && type < 3) {
                        var floatDivr = document.getElementById("onlinebox");
                        Floaters.addItem(floatDivr, mx, my);
                        Floaters.sPlay()
                    } else {
                        $("#onlinebox").PositionFixed({
                            x: mx,
                            y: my
                        })
                    }
                    $(window).resize(function() {
                        olne_resize()
                    });
                    $("#onlinebox").show();
                    if ($("div.onlinebox-showbox").size() > 0) {
                        olne_mouse($("div.onlinebox-showbox"), type)
                    }
                }
                $(function() {
                    var online_url = M["weburl"] + "include/online.php?lang=" + M["lang"];
                    $.ajax({
                        type: "POST",
                        url: online_url,
                        dataType: "json",
                        success: function(msg) {
                            t = msg.t, x = msg.x, y = msg.y;
                            if (t != 3) {
                                olne_app(msg.html, t, x, y)
                            }
                        }
                    })
                })
            })
        }
    }
});