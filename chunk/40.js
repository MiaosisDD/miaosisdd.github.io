(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"79":function(t,e,n){"use strict";n.r(e),n.d(e,"taro_rich_text_core",(function(){return c}));var r=n(7),i=n(22),c=function(){function RichText(t){var e=this;Object(i.g)(this,t),this.renderNode=function(t){if("type"in t&&"text"===t.type)return(t.text||"").replace(/&nbsp;/g," ");if("name"in t&&t.name){var n=t.name,c=t.attrs,o=t.children,a={},u=[];if(c&&"object"===Object(r.a)(c)){var f=function _loop_1(t){var e=c[t];if("style"===t&&"string"==typeof e){var n=e.split(";").map((function(t){return t.trim()})).filter((function(t){return t})),r={};return n.forEach((function(t){if(t){var e=/(.+): *(.+)/g.exec(t);if(e){var n=e[1],i=e[2],c=n.replace(/-([a-z])/g,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[1].toUpperCase()}));r[c]=i}}})),Object.keys(r).length&&(a.style=r),"continue"}a[t]=e};for(var p in c)f(p)}return o&&o.length&&(u=o.map((function(t){return e.renderNode(t)}))),Object(i.f)(n,a,u)}return null}}return RichText.prototype.render=function(){var t=this.nodes,e=this.renderNode;return Array.isArray(t)?Object(i.f)(i.a,null,t.map((function(t){return e(t)}))):Object(i.f)(i.a,{"innerHTML":t})},RichText}()}}]);