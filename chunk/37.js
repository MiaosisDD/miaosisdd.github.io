(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"81":function(e,t,a){"use strict";a.r(t),a.d(t,"taro_textarea_core",(function(){return o}));var n=a(21);function fixControlledValue(e){return null!=e?e:""}var o=function(){function Textarea(e){var t=this;Object(n.g)(this,e),this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.hanldeInput=function(e){e.stopPropagation(),t.onInput.emit({"value":e.target.value,"cursor":e.target.value.length})},this.handleFocus=function(e){t.onFocus.emit({"value":e.target.value})},this.handleBlur=function(e){t.onBlur.emit({"value":e.target.value})},this.handleChange=function(e){e.stopPropagation(),t.onChange.emit({"value":e.target.value})},this.onInput=Object(n.d)(this,"input",7),this.onFocus=Object(n.d)(this,"focus",7),this.onBlur=Object(n.d)(this,"blur",7),this.onChange=Object(n.d)(this,"change",7)}return Textarea.prototype.componentDidLoad=function(){var e=this;Object.defineProperty(this.el,"value",{"get":function get(){return e.textareaRef.value},"set":function set(t){return e.value=t},"configurable":!0}),this.autoFocus&&this.textareaRef.focus()},Textarea.prototype.render=function(){var e=this,t=this,a=t.value,o=t.placeholder,r=t.disabled,u=t.maxlength,i=t.autoFocus,l=t.name,c=t.hanldeInput,s=t.handleFocus,h=t.handleBlur,d=t.handleChange;return Object(n.f)("textarea",{"ref":function ref(t){t&&(e.textareaRef=t)},"class":"taro-textarea","value":fixControlledValue(a),"placeholder":o,"name":l,"disabled":r,"maxlength":u,"autofocus":i,"onInput":c,"onFocus":s,"onBlur":h,"onChange":d})},Object.defineProperty(Textarea.prototype,"el",{"get":function get(){return Object(n.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(Textarea,"style",{"get":function get(){return"taro-textarea-core{display:block;width:300px;height:150px}.taro-textarea{-webkit-appearance:none;cursor:auto;width:100%;height:100%;border:0;display:block;position:relative}.taro-textarea:focus{outline:none}"},"enumerable":!0,"configurable":!0}),Textarea}()}}]);