/*! For license information please see 10.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"76":function(l,o,r){"use strict";r.r(o),r.d(o,"taro_scroll_view_core",(function(){return s}));var t=r(21),e=r(86);function easeOutScroll(l,o,r){if(l!==o&&"number"==typeof l){var t=o-l,e=Date.now(),s=o>=l;!function step(){l=function linear(l,o,r,t){return r*l/t+o}(Date.now()-e,l,t,500),s&&l>=o||!s&&o>=l?r(o):(r(l),requestAnimationFrame(step))}()}}var s=function(){function ScrollView(l){var o=this;Object(t.g)(this,l),this.scrollX=!1,this.scrollY=!1,this.upperThreshold=50,this.lowerThreshold=50,this.scrollWithAnimation=!1,this.handleScroll=function(l){if(!(l instanceof CustomEvent)){var r=o.el,t=r.scrollLeft,e=r.scrollTop,s=r.scrollHeight,c=r.scrollWidth;o._scrollLeft=t,o._scrollTop=e,o.uperAndLower(),o.onScroll.emit({"scrollLeft":t,"scrollTop":e,"scrollHeight":s,"scrollWidth":c})}},this.uperAndLower=function debounce(l,o){var r;return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];clearTimeout(r),r=setTimeout((function(){l.apply(void 0,t)}),o)}}((function(){var l=o.el,r=l.offsetWidth,t=l.offsetHeight,e=l.scrollLeft,s=l.scrollTop,c=l.scrollHeight,i=l.scrollWidth,n=Number(o.lowerThreshold),a=Number(o.upperThreshold);!isNaN(n)&&(o.scrollY&&t+s+n>=c||o.scrollX&&r+e+n>=i)&&o.onScrollToLower.emit({"direction":o.scrollX?"right":o.scrollY?"bottom":""}),!isNaN(a)&&(o.scrollY&&s<=a||o.scrollX&&e<=a)&&o.onScrollToUpper.emit({"direction":o.scrollX?"left":o.scrollY?"top":""})}),200),this.onScroll=Object(t.d)(this,"scroll",7),this.onScrollToUpper=Object(t.d)(this,"scrolltoupper",7),this.onScrollToLower=Object(t.d)(this,"scrolltolower",7)}return ScrollView.prototype.watchScrollLeft=function(l){var o=this,r=Number(l);this.scrollX&&!isNaN(r)&&r!==this._scrollLeft&&(this.scrollWithAnimation?easeOutScroll(this._scrollLeft,r,(function(l){return o.el.scrollLeft=l})):this.el.scrollLeft=r,this._scrollLeft=r)},ScrollView.prototype.watchScrollTop=function(l){var o=this,r=Number(l);this.scrollY&&!isNaN(r)&&r!==this._scrollTop&&(this.scrollWithAnimation?easeOutScroll(this._scrollTop,r,(function(l){return o.el.scrollTop=l})):this.el.scrollTop=r,this._scrollTop=r)},ScrollView.prototype.watchScrollIntoView=function(l){var o;"string"==typeof l&&l&&(null===(o=document.querySelector("#"+l))||void 0===o||o.scrollIntoView({"behavior":"smooth","block":"center","inline":"start"}))},ScrollView.prototype.componentDidLoad=function(){var l=this,o=this.scrollY,r=this.scrollX,t=this.scrollWithAnimation,e=Number(this.mpScrollTop),s=Number(this.mpScrollLeft);o&&!isNaN(e)&&(t?easeOutScroll(0,e,(function(o){return l.el.scrollTop=o})):this.el.scrollTop=e,this._scrollTop=e),r&&!isNaN(s)&&(t?easeOutScroll(0,s,(function(o){return l.el.scrollLeft=o})):this.el.scrollLeft=s,this._scrollLeft=s)},ScrollView.prototype.render=function(){var l=this.scrollX,o=this.scrollY,r=Object(e.a)({"taro-scroll-view__scroll-x":l,"taro-scroll-view__scroll-y":o});return Object(t.f)(t.a,{"class":r,"onScroll":this.handleScroll},Object(t.f)("slot",null))},Object.defineProperty(ScrollView.prototype,"el",{"get":function get(){return Object(t.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(ScrollView,"watchers",{"get":function get(){return{"mpScrollLeft":["watchScrollLeft"],"mpScrollTop":["watchScrollTop"],"mpScrollIntoView":["watchScrollIntoView"]}},"enumerable":!0,"configurable":!0}),Object.defineProperty(ScrollView,"style",{"get":function get(){return"taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}"},"enumerable":!0,"configurable":!0}),ScrollView}()},"86":function(l,o,r){"use strict";r.d(o,"a",(function(){return e}));var t=r(7);var e=function createCommonjsModule(l,o){return l(o={"exports":{}},o.exports),o.exports}((function(l){!function(){var o={}.hasOwnProperty;function classNames(){for(var l=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var s=Object(t.a)(e);if("string"===s||"number"===s)l.push(e);else if(Array.isArray(e)&&e.length){var c=classNames.apply(null,e);c&&l.push(c)}else if("object"===s)for(var i in e)o.call(e,i)&&e[i]&&l.push(i)}}return l.join(" ")}l.exports?(classNames.default=classNames,l.exports=classNames):window.classNames=classNames}()}))}}]);