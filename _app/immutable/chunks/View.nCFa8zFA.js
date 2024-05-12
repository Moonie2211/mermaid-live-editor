import{T as yt,s as St,b as ct,e as N,h as ht,c as D,d as k,g as d,u as P,U as T,j as b,k as j,n as $,m as tt,o as Et,V as et,w as ot,t as z,p as U,f as C,W as xt,l as Mt}from"./scheduler.DwsPIhql.js";import{S as Zt,i as zt}from"./index.md5u5HDA.js";import{am as Ct,an as H,ak as nt,al as Pt,ao as F,ap as At,aq as Nt,ar as it,as as Dt,a as Bt}from"./state.DGDfh19o.js";function st(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}let L=!0,ft,R,W;const It=1e3,Tt=150,pt=Ct(()=>{L=!0,ft()},It),_t=(t,e)=>{W==null||W();const{autoSync:o}=yt(H);if(!o)return;ft=e;const n=t>Tt;L||pt(),L=!n},Vt=()=>(R||(R=new Promise(t=>{W=()=>{R=void 0,t()}})),L||pt(),L),ee=()=>R??Promise.resolve();var kt=function(){var t="",e,o,n,i=[],s={passive:!0};window.addEventListener?(e="addEventListener",o="removeEventListener"):(e="attachEvent",o="detachEvent",t="on"),n="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll";function r(m,p){var f=function(v){!v&&(v=window.event);var w={originalEvent:v,target:v.target||v.srcElement,type:"wheel",deltaMode:v.type=="MozMousePixelScroll"?0:1,deltaX:0,delatZ:0,preventDefault:function(){v.preventDefault?v.preventDefault():v.returnValue=!1}};return n=="mousewheel"?(w.deltaY=-.025*v.wheelDelta,v.wheelDeltaX&&(w.deltaX=-.025*v.wheelDeltaX)):w.deltaY=v.detail,p(w)};return i.push({element:m,fn:f}),f}function a(m){for(var p=0;p<i.length;p++)if(i[p].element===m)return i[p].fn;return function(){}}function l(m){for(var p=0;p<i.length;p++)if(i[p].element===m)return i.splice(p,1)}function h(m,p,f,v){var w;n==="wheel"?w=f:w=r(m,f),m[e](t+p,w,v?s:!1)}function M(m,p,f,v){var w;n==="wheel"?w=f:w=a(m),m[o](t+p,w,v?s:!1),l(m)}function E(m,p,f){h(m,n,p,f),n=="DOMMouseScroll"&&h(m,"MozMousePixelScroll",p,f)}function _(m,p,f){M(m,n,p,f),n=="DOMMouseScroll"&&M(m,"MozMousePixelScroll",p,f)}return{on:E,off:_}}(),K={extend:function(t,e){t=t||{};for(var o in e)this.isObject(e[o])?t[o]=this.extend(t[o],e[o]):t[o]=e[o];return t},isElement:function(t){return t instanceof HTMLElement||t instanceof SVGElement||t instanceof SVGSVGElement||t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"},isObject:function(t){return Object.prototype.toString.call(t)==="[object Object]"},isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getSvg:function(t){var e,o;if(this.isElement(t))e=t;else if(typeof t=="string"||t instanceof String){if(e=document.querySelector(t),!e)throw new Error("Provided selector did not find any elements. Selector: "+t)}else throw new Error("Provided selector is not an HTML object nor String");if(e.tagName.toLowerCase()==="svg")o=e;else if(e.tagName.toLowerCase()==="object")o=e.contentDocument.documentElement;else if(e.tagName.toLowerCase()==="embed")o=e.getSVGDocument().documentElement;else throw e.tagName.toLowerCase()==="img"?new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'):new Error("Cannot get SVG.");return o},proxy:function(t,e){return function(){return t.apply(e,arguments)}},getType:function(t){return Object.prototype.toString.apply(t).replace(/^\[object\s/,"").replace(/\]$/,"")},mouseAndTouchNormalize:function(t,e){if(t.clientX===void 0||t.clientX===null)if(t.clientX=0,t.clientY=0,t.touches!==void 0&&t.touches.length){if(t.touches[0].clientX!==void 0)t.clientX=t.touches[0].clientX,t.clientY=t.touches[0].clientY;else if(t.touches[0].pageX!==void 0){var o=e.getBoundingClientRect();t.clientX=t.touches[0].pageX-o.left,t.clientY=t.touches[0].pageY-o.top}}else t.originalEvent!==void 0&&t.originalEvent.clientX!==void 0&&(t.clientX=t.originalEvent.clientX,t.clientY=t.originalEvent.clientY)},isDblClick:function(t,e){if(t.detail===2)return!0;if(e!=null){var o=t.timeStamp-e.timeStamp,n=Math.sqrt(Math.pow(t.clientX-e.clientX,2)+Math.pow(t.clientY-e.clientY,2));return o<250&&n<10}return!1},now:Date.now||function(){return new Date().getTime()},throttle:function(t,e,o){var n=this,i,s,r,a=null,l=0;o||(o={});var h=function(){l=o.leading===!1?0:n.now(),a=null,r=t.apply(i,s),a||(i=s=null)};return function(){var M=n.now();!l&&o.leading===!1&&(l=M);var E=e-(M-l);return i=this,s=arguments,E<=0||E>e?(clearTimeout(a),a=null,l=M,r=t.apply(i,s),a||(i=s=null)):!a&&o.trailing!==!1&&(a=setTimeout(h,E)),r}},createRequestAnimationFrame:function(t){var e=null;return t!=="auto"&&t<60&&t>1&&(e=Math.floor(1e3/t)),e===null?window.requestAnimationFrame||rt(33):rt(e)}};function rt(t){return function(e){window.setTimeout(e,t)}}var X=K,mt="unknown";document.documentMode&&(mt="ie");var J={svgNS:"http://www.w3.org/2000/svg",xmlNS:"http://www.w3.org/XML/1998/namespace",xmlnsNS:"http://www.w3.org/2000/xmlns/",xlinkNS:"http://www.w3.org/1999/xlink",evNS:"http://www.w3.org/2001/xml-events",getBoundingClientRectNormalized:function(t){if(t.clientWidth&&t.clientHeight)return{width:t.clientWidth,height:t.clientHeight};if(t.getBoundingClientRect())return t.getBoundingClientRect();throw new Error("Cannot get BoundingClientRect for SVG.")},getOrCreateViewport:function(t,e){var o=null;if(X.isElement(e)?o=e:o=t.querySelector(e),!o){var n=Array.prototype.slice.call(t.childNodes||t.children).filter(function(l){return l.nodeName!=="defs"&&l.nodeName!=="#text"});n.length===1&&n[0].nodeName==="g"&&n[0].getAttribute("transform")===null&&(o=n[0])}if(!o){var i="viewport-"+new Date().toISOString().replace(/\D/g,"");o=document.createElementNS(this.svgNS,"g"),o.setAttribute("id",i);var s=t.childNodes||t.children;if(s&&s.length>0)for(var r=s.length;r>0;r--)s[s.length-r].nodeName!=="defs"&&o.appendChild(s[s.length-r]);t.appendChild(o)}var a=[];return o.getAttribute("class")&&(a=o.getAttribute("class").split(" ")),~a.indexOf("svg-pan-zoom_viewport")||(a.push("svg-pan-zoom_viewport"),o.setAttribute("class",a.join(" "))),o},setupSvgAttributes:function(t){if(t.setAttribute("xmlns",this.svgNS),t.setAttributeNS(this.xmlnsNS,"xmlns:xlink",this.xlinkNS),t.setAttributeNS(this.xmlnsNS,"xmlns:ev",this.evNS),t.parentNode!==null){var e=t.getAttribute("style")||"";e.toLowerCase().indexOf("overflow")===-1&&t.setAttribute("style","overflow: hidden; "+e)}},internetExplorerRedisplayInterval:300,refreshDefsGlobal:X.throttle(function(){for(var t=document.querySelectorAll("defs"),e=t.length,o=0;o<e;o++){var n=t[o];n.parentNode.insertBefore(n,n)}},nt?nt.internetExplorerRedisplayInterval:null),setCTM:function(t,e,o){var n=this,i="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")";t.setAttributeNS(null,"transform",i),"transform"in t.style?t.style.transform=i:"-ms-transform"in t.style?t.style["-ms-transform"]=i:"-webkit-transform"in t.style&&(t.style["-webkit-transform"]=i),mt==="ie"&&o&&(o.parentNode.insertBefore(o,o),window.setTimeout(function(){n.refreshDefsGlobal()},n.internetExplorerRedisplayInterval))},getEventPoint:function(t,e){var o=e.createSVGPoint();return X.mouseAndTouchNormalize(t,e),o.x=t.clientX,o.y=t.clientY,o},getSvgCenterPoint:function(t,e,o){return this.createSVGPoint(t,e/2,o/2)},createSVGPoint:function(t,e,o){var n=t.createSVGPoint();return n.x=e,n.y=o,n}},y=J,Lt={enable:function(t){var e=t.svg.querySelector("defs");e||(e=document.createElementNS(y.svgNS,"defs"),t.svg.appendChild(e));var o=e.querySelector("style#svg-pan-zoom-controls-styles");if(!o){var n=document.createElementNS(y.svgNS,"style");n.setAttribute("id","svg-pan-zoom-controls-styles"),n.setAttribute("type","text/css"),n.textContent=".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }",e.appendChild(n)}var i=document.createElementNS(y.svgNS,"g");i.setAttribute("id","svg-pan-zoom-controls"),i.setAttribute("transform","translate("+(t.width-70)+" "+(t.height-76)+") scale(0.75)"),i.setAttribute("class","svg-pan-zoom-control"),i.appendChild(this._createZoomIn(t)),i.appendChild(this._createZoomReset(t)),i.appendChild(this._createZoomOut(t)),t.svg.appendChild(i),t.controlIcons=i},_createZoomIn:function(t){var e=document.createElementNS(y.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-in"),e.setAttribute("transform","translate(30.5 5) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomIn()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomIn()},!1);var o=document.createElementNS(y.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(y.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},_createZoomReset:function(t){var e=document.createElementNS(y.svgNS,"g");e.setAttribute("id","svg-pan-zoom-reset-pan-zoom"),e.setAttribute("transform","translate(5 35) scale(0.4)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().reset()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().reset()},!1);var o=document.createElementNS(y.svgNS,"rect");o.setAttribute("x","2"),o.setAttribute("y","2"),o.setAttribute("width","182"),o.setAttribute("height","58"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(y.svgNS,"path");n.setAttribute("d","M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n);var i=document.createElementNS(y.svgNS,"path");return i.setAttribute("d","M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"),i.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(i),e},_createZoomOut:function(t){var e=document.createElementNS(y.svgNS,"g");e.setAttribute("id","svg-pan-zoom-zoom-out"),e.setAttribute("transform","translate(30.5 70) scale(0.015)"),e.setAttribute("class","svg-pan-zoom-control"),e.addEventListener("click",function(){t.getPublicInstance().zoomOut()},!1),e.addEventListener("touchstart",function(){t.getPublicInstance().zoomOut()},!1);var o=document.createElementNS(y.svgNS,"rect");o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("width","1500"),o.setAttribute("height","1400"),o.setAttribute("class","svg-pan-zoom-control-background"),e.appendChild(o);var n=document.createElementNS(y.svgNS,"path");return n.setAttribute("d","M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"),n.setAttribute("class","svg-pan-zoom-control-element"),e.appendChild(n),e},disable:function(t){t.controlIcons&&(t.controlIcons.parentNode.removeChild(t.controlIcons),t.controlIcons=null)}},Ot=J,A=K,g=function(t,e){this.init(t,e)};g.prototype.init=function(t,e){this.viewport=t,this.options=e,this.originalState={zoom:1,x:0,y:0},this.activeState={zoom:1,x:0,y:0},this.updateCTMCached=A.proxy(this.updateCTM,this),this.requestAnimationFrame=A.createRequestAnimationFrame(this.options.refreshRate),this.viewBox={x:0,y:0,width:0,height:0},this.cacheViewBox();var o=this.processCTM();this.setCTM(o),this.updateCTM()};g.prototype.cacheViewBox=function(){var t=this.options.svg.getAttribute("viewBox");if(t){var e=t.split(/[\s\,]/).filter(function(n){return n}).map(parseFloat);this.viewBox.x=e[0],this.viewBox.y=e[1],this.viewBox.width=e[2],this.viewBox.height=e[3];var o=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height);this.activeState.zoom=o,this.activeState.x=(this.options.width-this.viewBox.width*o)/2,this.activeState.y=(this.options.height-this.viewBox.height*o)/2,this.updateCTMOnNextFrame(),this.options.svg.removeAttribute("viewBox")}else this.simpleViewBoxCache()};g.prototype.simpleViewBoxCache=function(){var t=this.viewport.getBBox();this.viewBox.x=t.x,this.viewBox.y=t.y,this.viewBox.width=t.width,this.viewBox.height=t.height};g.prototype.getViewBox=function(){return A.extend({},this.viewBox)};g.prototype.processCTM=function(){var t=this.getCTM();if(this.options.fit||this.options.contain){var e;this.options.fit?e=Math.min(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height):e=Math.max(this.options.width/this.viewBox.width,this.options.height/this.viewBox.height),t.a=e,t.d=e,t.e=-this.viewBox.x*e,t.f=-this.viewBox.y*e}if(this.options.center){var o=(this.options.width-(this.viewBox.width+this.viewBox.x*2)*t.a)*.5,n=(this.options.height-(this.viewBox.height+this.viewBox.y*2)*t.a)*.5;t.e=o,t.f=n}return this.originalState.zoom=t.a,this.originalState.x=t.e,this.originalState.y=t.f,t};g.prototype.getOriginalState=function(){return A.extend({},this.originalState)};g.prototype.getState=function(){return A.extend({},this.activeState)};g.prototype.getZoom=function(){return this.activeState.zoom};g.prototype.getRelativeZoom=function(){return this.activeState.zoom/this.originalState.zoom};g.prototype.computeRelativeZoom=function(t){return t/this.originalState.zoom};g.prototype.getPan=function(){return{x:this.activeState.x,y:this.activeState.y}};g.prototype.getCTM=function(){var t=this.options.svg.createSVGMatrix();return t.a=this.activeState.zoom,t.b=0,t.c=0,t.d=this.activeState.zoom,t.e=this.activeState.x,t.f=this.activeState.y,t};g.prototype.setCTM=function(t){var e=this.isZoomDifferent(t),o=this.isPanDifferent(t);if(e||o){if(e&&(this.options.beforeZoom(this.getRelativeZoom(),this.computeRelativeZoom(t.a))===!1?(t.a=t.d=this.activeState.zoom,e=!1):(this.updateCache(t),this.options.onZoom(this.getRelativeZoom()))),o){var n=this.options.beforePan(this.getPan(),{x:t.e,y:t.f}),i=!1,s=!1;n===!1?(t.e=this.getPan().x,t.f=this.getPan().y,i=s=!0):A.isObject(n)&&(n.x===!1?(t.e=this.getPan().x,i=!0):A.isNumber(n.x)&&(t.e=n.x),n.y===!1?(t.f=this.getPan().y,s=!0):A.isNumber(n.y)&&(t.f=n.y)),i&&s||!this.isPanDifferent(t)?o=!1:(this.updateCache(t),this.options.onPan(this.getPan()))}(e||o)&&this.updateCTMOnNextFrame()}};g.prototype.isZoomDifferent=function(t){return this.activeState.zoom!==t.a};g.prototype.isPanDifferent=function(t){return this.activeState.x!==t.e||this.activeState.y!==t.f};g.prototype.updateCache=function(t){this.activeState.zoom=t.a,this.activeState.x=t.e,this.activeState.y=t.f};g.prototype.pendingUpdate=!1;g.prototype.updateCTMOnNextFrame=function(){this.pendingUpdate||(this.pendingUpdate=!0,this.requestAnimationFrame.call(window,this.updateCTMCached))};g.prototype.updateCTM=function(){var t=this.getCTM();Ot.setCTM(this.viewport,t,this.defs),this.pendingUpdate=!1,this.options.onUpdatedCTM&&this.options.onUpdatedCTM(t)};var qt=function(t,e){return new g(t,e)},dt=kt,Y=Lt,S=K,x=J,Rt=qt,c=function(t,e){this.init(t,e)},Wt={viewportSelector:".svg-pan-zoom_viewport",panEnabled:!0,controlIconsEnabled:!1,zoomEnabled:!0,dblClickZoomEnabled:!0,mouseWheelZoomEnabled:!0,preventMouseEventsDefault:!0,zoomScaleSensitivity:.1,minZoom:.5,maxZoom:10,fit:!0,contain:!1,center:!0,refreshRate:"auto",beforeZoom:null,onZoom:null,beforePan:null,onPan:null,customEventsHandler:null,eventsListenerElement:null,onUpdatedCTM:null},vt={passive:!0};c.prototype.init=function(t,e){var o=this;this.svg=t,this.defs=t.querySelector("defs"),x.setupSvgAttributes(this.svg),this.options=S.extend(S.extend({},Wt),e),this.state="none";var n=x.getBoundingClientRectNormalized(t);this.width=n.width,this.height=n.height,this.viewport=Rt(x.getOrCreateViewport(this.svg,this.options.viewportSelector),{svg:this.svg,width:this.width,height:this.height,fit:this.options.fit,contain:this.options.contain,center:this.options.center,refreshRate:this.options.refreshRate,beforeZoom:function(s,r){if(o.viewport&&o.options.beforeZoom)return o.options.beforeZoom(s,r)},onZoom:function(s){if(o.viewport&&o.options.onZoom)return o.options.onZoom(s)},beforePan:function(s,r){if(o.viewport&&o.options.beforePan)return o.options.beforePan(s,r)},onPan:function(s){if(o.viewport&&o.options.onPan)return o.options.onPan(s)},onUpdatedCTM:function(s){if(o.viewport&&o.options.onUpdatedCTM)return o.options.onUpdatedCTM(s)}});var i=this.getPublicInstance();i.setBeforeZoom(this.options.beforeZoom),i.setOnZoom(this.options.onZoom),i.setBeforePan(this.options.beforePan),i.setOnPan(this.options.onPan),i.setOnUpdatedCTM(this.options.onUpdatedCTM),this.options.controlIconsEnabled&&Y.enable(this),this.lastMouseWheelEventTime=Date.now(),this.setupHandlers()};c.prototype.setupHandlers=function(){var t=this,e=null;if(this.eventListeners={mousedown:function(s){var r=t.handleMouseDown(s,e);return e=s,r},touchstart:function(s){var r=t.handleMouseDown(s,e);return e=s,r},mouseup:function(s){return t.handleMouseUp(s)},touchend:function(s){return t.handleMouseUp(s)},mousemove:function(s){return t.handleMouseMove(s)},touchmove:function(s){return t.handleMouseMove(s)},mouseleave:function(s){return t.handleMouseUp(s)},touchleave:function(s){return t.handleMouseUp(s)},touchcancel:function(s){return t.handleMouseUp(s)}},this.options.customEventsHandler!=null){this.options.customEventsHandler.init({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});var o=this.options.customEventsHandler.haltEventListeners;if(o&&o.length)for(var n=o.length-1;n>=0;n--)this.eventListeners.hasOwnProperty(o[n])&&delete this.eventListeners[o[n]]}for(var i in this.eventListeners)(this.options.eventsListenerElement||this.svg).addEventListener(i,this.eventListeners[i],this.options.preventMouseEventsDefault?!1:vt);this.options.mouseWheelZoomEnabled&&(this.options.mouseWheelZoomEnabled=!1,this.enableMouseWheelZoom())};c.prototype.enableMouseWheelZoom=function(){if(!this.options.mouseWheelZoomEnabled){var t=this;this.wheelListener=function(o){return t.handleMouseWheel(o)};var e=!this.options.preventMouseEventsDefault;dt.on(this.options.eventsListenerElement||this.svg,this.wheelListener,e),this.options.mouseWheelZoomEnabled=!0}};c.prototype.disableMouseWheelZoom=function(){if(this.options.mouseWheelZoomEnabled){var t=!this.options.preventMouseEventsDefault;dt.off(this.options.eventsListenerElement||this.svg,this.wheelListener,t),this.options.mouseWheelZoomEnabled=!1}};c.prototype.handleMouseWheel=function(t){if(!(!this.options.zoomEnabled||this.state!=="none")){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var e=t.deltaY||1,o=Date.now()-this.lastMouseWheelEventTime,n=3+Math.max(0,30-o);this.lastMouseWheelEventTime=Date.now(),"deltaMode"in t&&t.deltaMode===0&&t.wheelDelta&&(e=t.deltaY===0?0:Math.abs(t.wheelDelta)/t.deltaY),e=-.3<e&&e<.3?e:(e>0?1:-1)*Math.log(Math.abs(e)+10)/n;var i=this.svg.getScreenCTM().inverse(),s=x.getEventPoint(t,this.svg).matrixTransform(i),r=Math.pow(1+this.options.zoomScaleSensitivity,-1*e);this.zoomAtPoint(r,s)}};c.prototype.zoomAtPoint=function(t,e,o){var n=this.viewport.getOriginalState();o?(t=Math.max(this.options.minZoom*n.zoom,Math.min(this.options.maxZoom*n.zoom,t)),t=t/this.getZoom()):this.getZoom()*t<this.options.minZoom*n.zoom?t=this.options.minZoom*n.zoom/this.getZoom():this.getZoom()*t>this.options.maxZoom*n.zoom&&(t=this.options.maxZoom*n.zoom/this.getZoom());var i=this.viewport.getCTM(),s=e.matrixTransform(i.inverse()),r=this.svg.createSVGMatrix().translate(s.x,s.y).scale(t).translate(-s.x,-s.y),a=i.multiply(r);a.a!==i.a&&this.viewport.setCTM(a)};c.prototype.zoom=function(t,e){this.zoomAtPoint(t,x.getSvgCenterPoint(this.svg,this.width,this.height),e)};c.prototype.publicZoom=function(t,e){e&&(t=this.computeFromRelativeZoom(t)),this.zoom(t,e)};c.prototype.publicZoomAtPoint=function(t,e,o){if(o&&(t=this.computeFromRelativeZoom(t)),S.getType(e)!=="SVGPoint")if("x"in e&&"y"in e)e=x.createSVGPoint(this.svg,e.x,e.y);else throw new Error("Given point is invalid");this.zoomAtPoint(t,e,o)};c.prototype.getZoom=function(){return this.viewport.getZoom()};c.prototype.getRelativeZoom=function(){return this.viewport.getRelativeZoom()};c.prototype.computeFromRelativeZoom=function(t){return t*this.viewport.getOriginalState().zoom};c.prototype.resetZoom=function(){var t=this.viewport.getOriginalState();this.zoom(t.zoom,!0)};c.prototype.resetPan=function(){this.pan(this.viewport.getOriginalState())};c.prototype.reset=function(){this.resetZoom(),this.resetPan()};c.prototype.handleDblClick=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.options.controlIconsEnabled){var e=t.target.getAttribute("class")||"";if(e.indexOf("svg-pan-zoom-control")>-1)return!1}var o;t.shiftKey?o=1/((1+this.options.zoomScaleSensitivity)*2):o=(1+this.options.zoomScaleSensitivity)*2;var n=x.getEventPoint(t,this.svg).matrixTransform(this.svg.getScreenCTM().inverse());this.zoomAtPoint(o,n)};c.prototype.handleMouseDown=function(t,e){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),S.mouseAndTouchNormalize(t,this.svg),this.options.dblClickZoomEnabled&&S.isDblClick(t,e)?this.handleDblClick(t):(this.state="pan",this.firstEventCTM=this.viewport.getCTM(),this.stateOrigin=x.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()))};c.prototype.handleMouseMove=function(t){if(this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&this.options.panEnabled){var e=x.getEventPoint(t,this.svg).matrixTransform(this.firstEventCTM.inverse()),o=this.firstEventCTM.translate(e.x-this.stateOrigin.x,e.y-this.stateOrigin.y);this.viewport.setCTM(o)}};c.prototype.handleMouseUp=function(t){this.options.preventMouseEventsDefault&&(t.preventDefault?t.preventDefault():t.returnValue=!1),this.state==="pan"&&(this.state="none")};c.prototype.fit=function(){var t=this.viewport.getViewBox(),e=Math.min(this.width/t.width,this.height/t.height);this.zoom(e,!0)};c.prototype.contain=function(){var t=this.viewport.getViewBox(),e=Math.max(this.width/t.width,this.height/t.height);this.zoom(e,!0)};c.prototype.center=function(){var t=this.viewport.getViewBox(),e=(this.width-(t.width+t.x*2)*this.getZoom())*.5,o=(this.height-(t.height+t.y*2)*this.getZoom())*.5;this.getPublicInstance().pan({x:e,y:o})};c.prototype.updateBBox=function(){this.viewport.simpleViewBoxCache()};c.prototype.pan=function(t){var e=this.viewport.getCTM();e.e=t.x,e.f=t.y,this.viewport.setCTM(e)};c.prototype.panBy=function(t){var e=this.viewport.getCTM();e.e+=t.x,e.f+=t.y,this.viewport.setCTM(e)};c.prototype.getPan=function(){var t=this.viewport.getState();return{x:t.x,y:t.y}};c.prototype.resize=function(){var t=x.getBoundingClientRectNormalized(this.svg);this.width=t.width,this.height=t.height;var e=this.viewport;e.options.width=this.width,e.options.height=this.height,e.processCTM(),this.options.controlIconsEnabled&&(this.getPublicInstance().disableControlIcons(),this.getPublicInstance().enableControlIcons())};c.prototype.destroy=function(){var t=this;this.beforeZoom=null,this.onZoom=null,this.beforePan=null,this.onPan=null,this.onUpdatedCTM=null,this.options.customEventsHandler!=null&&this.options.customEventsHandler.destroy({svgElement:this.svg,eventsListenerElement:this.options.eventsListenerElement,instance:this.getPublicInstance()});for(var e in this.eventListeners)(this.options.eventsListenerElement||this.svg).removeEventListener(e,this.eventListeners[e],this.options.preventMouseEventsDefault?!1:vt);this.disableMouseWheelZoom(),this.getPublicInstance().disableControlIcons(),this.reset(),Z=Z.filter(function(o){return o.svg!==t.svg}),delete this.options,delete this.viewport,delete this.publicInstance,delete this.pi,this.getPublicInstance=function(){return null}};c.prototype.getPublicInstance=function(){var t=this;return this.publicInstance||(this.publicInstance=this.pi={enablePan:function(){return t.options.panEnabled=!0,t.pi},disablePan:function(){return t.options.panEnabled=!1,t.pi},isPanEnabled:function(){return!!t.options.panEnabled},pan:function(e){return t.pan(e),t.pi},panBy:function(e){return t.panBy(e),t.pi},getPan:function(){return t.getPan()},setBeforePan:function(e){return t.options.beforePan=e===null?null:S.proxy(e,t.publicInstance),t.pi},setOnPan:function(e){return t.options.onPan=e===null?null:S.proxy(e,t.publicInstance),t.pi},enableZoom:function(){return t.options.zoomEnabled=!0,t.pi},disableZoom:function(){return t.options.zoomEnabled=!1,t.pi},isZoomEnabled:function(){return!!t.options.zoomEnabled},enableControlIcons:function(){return t.options.controlIconsEnabled||(t.options.controlIconsEnabled=!0,Y.enable(t)),t.pi},disableControlIcons:function(){return t.options.controlIconsEnabled&&(t.options.controlIconsEnabled=!1,Y.disable(t)),t.pi},isControlIconsEnabled:function(){return!!t.options.controlIconsEnabled},enableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!0,t.pi},disableDblClickZoom:function(){return t.options.dblClickZoomEnabled=!1,t.pi},isDblClickZoomEnabled:function(){return!!t.options.dblClickZoomEnabled},enableMouseWheelZoom:function(){return t.enableMouseWheelZoom(),t.pi},disableMouseWheelZoom:function(){return t.disableMouseWheelZoom(),t.pi},isMouseWheelZoomEnabled:function(){return!!t.options.mouseWheelZoomEnabled},setZoomScaleSensitivity:function(e){return t.options.zoomScaleSensitivity=e,t.pi},setMinZoom:function(e){return t.options.minZoom=e,t.pi},setMaxZoom:function(e){return t.options.maxZoom=e,t.pi},setBeforeZoom:function(e){return t.options.beforeZoom=e===null?null:S.proxy(e,t.publicInstance),t.pi},setOnZoom:function(e){return t.options.onZoom=e===null?null:S.proxy(e,t.publicInstance),t.pi},zoom:function(e){return t.publicZoom(e,!0),t.pi},zoomBy:function(e){return t.publicZoom(e,!1),t.pi},zoomAtPoint:function(e,o){return t.publicZoomAtPoint(e,o,!0),t.pi},zoomAtPointBy:function(e,o){return t.publicZoomAtPoint(e,o,!1),t.pi},zoomIn:function(){return this.zoomBy(1+t.options.zoomScaleSensitivity),t.pi},zoomOut:function(){return this.zoomBy(1/(1+t.options.zoomScaleSensitivity)),t.pi},getZoom:function(){return t.getRelativeZoom()},setOnUpdatedCTM:function(e){return t.options.onUpdatedCTM=e===null?null:S.proxy(e,t.publicInstance),t.pi},resetZoom:function(){return t.resetZoom(),t.pi},resetPan:function(){return t.resetPan(),t.pi},reset:function(){return t.reset(),t.pi},fit:function(){return t.fit(),t.pi},contain:function(){return t.contain(),t.pi},center:function(){return t.center(),t.pi},updateBBox:function(){return t.updateBBox(),t.pi},resize:function(){return t.resize(),t.pi},getSizes:function(){return{width:t.width,height:t.height,realZoom:t.getZoom(),viewBox:t.viewport.getViewBox()}},destroy:function(){return t.destroy(),t.pi}}),this.publicInstance};var Z=[],Ut=function(t,e){var o=S.getSvg(t);if(o===null)return null;for(var n=Z.length-1;n>=0;n--)if(Z[n].svg===o)return Z[n].instance.getPublicInstance();return Z.push({svg:o,instance:new c(o,e)}),Z[Z.length-1].instance.getPublicInstance()},Gt=Ut;const Ft=Pt(Gt);function at(t,e,o){const n=t.slice();return n[18]=e[o],n}function lt(t){let e,o;function n(r,a){return r[2]?jt:Xt}let i=n(t),s=i(t);return{c(){e=N("div"),s.c(),this.h()},l(r){e=D(r,"DIV",{class:!0,id:!0});var a=k(e);s.l(a),a.forEach(d),this.h()},h(){P(e,"class",o="absolute z-10 w-full p-2 font-mono "+(t[2]?"text-red-600":"text-yellow-600")+" bg-base-100 bg-opacity-80 text-left"),P(e,"id","errorContainer")},m(r,a){b(r,e,a),s.m(e,null)},p(r,a){i===(i=n(r))&&s?s.p(r,a):(s.d(1),s=i(r),s&&(s.c(),s.m(e,null))),a&4&&o!==(o="absolute z-10 w-full p-2 font-mono "+(r[2]?"text-red-600":"text-yellow-600")+" bg-base-100 bg-opacity-80 text-left")&&P(e,"class",o)},d(r){r&&d(e),s.d()}}}function Xt(t){let e,o,n,i;function s(l,h){return l[6].autoSync?Yt:Ht}let r=s(t),a=r(t);return{c(){e=z("Diagram out of sync. "),o=N("br"),n=ct(),a.c(),i=U()},l(l){e=C(l,"Diagram out of sync. "),o=D(l,"BR",{}),n=ht(l),a.l(l),i=U()},m(l,h){b(l,e,h),b(l,o,h),b(l,n,h),a.m(l,h),b(l,i,h)},p(l,h){r!==(r=s(l))&&(a.d(1),a=r(l),a&&(a.c(),a.m(i.parentNode,i)))},d(l){l&&(d(e),d(o),d(n),d(i)),a.d(l)}}}function jt(t){let e,o=st(t[3]),n=[];for(let i=0;i<o.length;i+=1)n[i]=ut(at(t,o,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=U()},l(i){for(let s=0;s<n.length;s+=1)n[s].l(i);e=U()},m(i,s){for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(i,s);b(i,e,s)},p(i,s){if(s&8){o=st(i[3]);let r;for(r=0;r<o.length;r+=1){const a=at(i,o,r);n[r]?n[r].p(a,s):(n[r]=ut(a),n[r].c(),n[r].m(e.parentNode,e))}for(;r<n.length;r+=1)n[r].d(1);n.length=o.length}},d(i){i&&d(e),xt(n,i)}}}function Ht(t){let e,o,n,i,s,r,a;return{c(){e=z("Press "),o=N("i"),n=z(" (Sync button) or "),i=N("kbd"),s=z(it),r=z(" + Enter"),a=z(" to sync."),this.h()},l(l){e=C(l,"Press "),o=D(l,"I",{class:!0}),k(o).forEach(d),n=C(l," (Sync button) or "),i=D(l,"KBD",{});var h=k(i);s=C(h,it),r=C(h," + Enter"),h.forEach(d),a=C(l," to sync."),this.h()},h(){P(o,"class","fas fa-sync")},m(l,h){b(l,e,h),b(l,o,h),b(l,n,h),b(l,i,h),j(i,s),j(i,r),b(l,a,h)},d(l){l&&(d(e),d(o),d(n),d(i),d(a))}}}function Yt(t){let e;return{c(){e=z("It will be updated automatically.")},l(o){e=C(o,"It will be updated automatically.")},m(o,n){b(o,e,n)},d(o){o&&d(e)}}}function ut(t){let e=t[18]+"",o,n;return{c(){o=z(e),n=N("br")},l(i){o=C(i,e),n=D(i,"BR",{})},m(i,s){b(i,o,s),b(i,n,s)},p(i,s){s&8&&e!==(e=i[18]+"")&&Mt(o,e)},d(i){i&&(d(o),d(n))}}}function Kt(t){let e,o,n,i=(t[2]&&t[6].error instanceof Error||t[4])&&lt(t);return{c(){i&&i.c(),e=ct(),o=N("div"),n=N("div"),this.h()},l(s){i&&i.l(s),e=ht(s),o=D(s,"DIV",{id:!0,class:!0});var r=k(o);n=D(r,"DIV",{id:!0,class:!0}),k(n).forEach(d),r.forEach(d),this.h()},h(){P(n,"id","container"),P(n,"class","h-full overflow-auto svelte-1ewr4tw"),T(n,"hide",t[5]),P(o,"id","view"),P(o,"class","h-full p-2 svelte-1ewr4tw"),T(o,"error",t[2]),T(o,"outOfSync",t[4])},m(s,r){i&&i.m(s,r),b(s,e,r),b(s,o,r),j(o,n),t[7](n),t[8](o)},p(s,[r]){s[2]&&s[6].error instanceof Error||s[4]?i?i.p(s,r):(i=lt(s),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),r&32&&T(n,"hide",s[5]),r&4&&T(o,"error",s[2]),r&16&&T(o,"outOfSync",s[4])},i:$,o:$,d(s){s&&(d(e),d(o)),i&&i.d(s),t[7](null),t[8](null)}}}function Jt(t,e,o){let n,i;tt(t,H,u=>o(6,n=u)),tt(t,F,u=>o(14,i=u));let s="",r="",a,l,h=!1,M=[],E=!1,_=!1,m=!0,p=n.panZoom,f;const v=()=>{if(!f)return;const u=f.getPan(),B=f.getZoom();Dt({pan:u,zoom:B}),Bt("panZoom")},w=u=>{u.panZoom&&(o(5,_=!0),f==null||f.destroy(),f=void 0,Promise.resolve().then(()=>{const B=document.querySelector("#graph-div");if(!B)return;f=Ft(B,{onPan:v,onZoom:v,controlIconsEnabled:!0,fit:!0,center:!0});const{pan:V,zoom:I}=u;V!==void 0&&I!==void 0&&Number.isFinite(I)&&(f.zoom(I),f.pan(V)),o(5,_=!1)}))},gt=async u=>{var I;const B=Date.now();if(u.error!==void 0){o(2,h=!0),o(3,M=u.error.toString().split(`
`));return}o(2,h=!1);try{if(a&&u&&(u.updateDiagram||u.autoSync)){if(u.autoSync||et(F,i.updateDiagram=!1,i),o(4,E=!1),m=!0,s===u.code&&r===u.mermaid&&p===u.panZoom)return;if(!Vt()){o(4,E=!0);return}s=u.code,r=u.mermaid,p=u.panZoom;const O=(I=l.parentElement)==null?void 0:I.scrollTop;delete a.dataset.processed;const{svg:G,bindFunctions:Q}=await At(Object.assign({},JSON.parse(u.mermaid)),s,"graph-div");if(G.length>0){w(u),o(0,a.innerHTML=G,a),console.log({svg:G});const q=document.querySelector("#graph-div");if(!q)throw new Error("graph-div not found");q.setAttribute("height","100%"),q.style.maxWidth="100%",Q&&Q(q)}l.parentElement&&O&&o(1,l.parentElement.scrollTop=O,l),o(2,h=!1)}else m?m=!1:(s!==u.code||r!==u.mermaid)&&o(4,E=!0)}catch(O){console.error("view fail",O),o(2,h=!0)}const V=Date.now()-B;Nt(s,V),_t(V,()=>{et(F,i.updateDiagram=!0,i)})};Et(()=>{H.subscribe(u=>{gt(u)}),window.addEventListener("resize",()=>{n.panZoom&&f&&f.resize()})});function bt(u){ot[u?"unshift":"push"](()=>{a=u,o(0,a)})}function wt(u){ot[u?"unshift":"push"](()=>{l=u,o(1,l)})}return[a,l,h,M,E,_,n,bt,wt]}class oe extends Zt{constructor(e){super(),zt(this,e,Jt,Kt,St,{})}}export{oe as V,st as e,ee as w};
