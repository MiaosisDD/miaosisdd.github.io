(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"74":function(e,t,o){"use strict";o.r(t),o.d(t,"taro_radio_core",(function(){return n})),o.d(t,"taro_radio_group_core",(function(){return r}));var i=o(21),n=function(){function Radio(e){var t=this;Object(i.g)(this,e),this.value="",this.checked=!1,this.handleClick=function(){t.checked||(t.checked=!0)},this.onChange=Object(i.d)(this,"radiochange",7)}return Radio.prototype.watchChecked=function(e){e&&this.onChange.emit({"value":this.value})},Radio.prototype.watchId=function(e){e&&this.inputEl.setAttribute("id",e)},Radio.prototype.componentDidRender=function(){this.id&&this.el.removeAttribute("id")},Radio.prototype.render=function(){var e=this,t=this.checked,o=this.name,n=this.value;return Object(i.f)(i.a,{"className":"weui-cells_checkbox","onClick":this.handleClick},Object(i.f)("input",{"ref":function ref(t){t&&(e.inputEl=t,e.id&&t.setAttribute("id",e.id))},"type":"radio","name":o,"value":n,"class":"weui-check","checked":t,"onChange":function onChange(e){return e.stopPropagation()}}),Object(i.f)("i",{"class":"weui-icon-checked"}),Object(i.f)("slot",null))},Object.defineProperty(Radio.prototype,"el",{"get":function get(){return Object(i.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(Radio,"watchers",{"get":function get(){return{"checked":["watchChecked"],"id":["watchId"]}},"enumerable":!0,"configurable":!0}),Radio}(),r=function(){function RadioGroup(e){Object(i.g)(this,e),this.uniqueName=Date.now().toString(36),this.onChange=Object(i.d)(this,"change",7)}return RadioGroup.prototype.function=function(e){if(e.stopPropagation(),"TARO-RADIO-CORE"===e.target.tagName){var t=e.target;if(t.checked)this.el.querySelectorAll("taro-radio-core").forEach((function(e){e!==t&&(e.checked=!1)})),this.value=e.detail.value,this.onChange.emit({"value":this.value})}},RadioGroup.prototype.componentDidLoad=function(){var e=this;this.el.querySelectorAll("taro-radio-core").forEach((function(t){t.setAttribute("name",e.name||e.uniqueName)})),Object.defineProperty(this.el,"value",{"get":function get(){if(!e.value){var t=e.el.querySelectorAll("taro-radio-core");e.value=e.getValues(t)}return e.value},"configurable":!0})},RadioGroup.prototype.getValues=function(e){var t="";return Array.from(e).forEach((function(e){var o=e.querySelector("input");(null==o?void 0:o.checked)&&(t=o.value||"")})),t},RadioGroup.prototype.render=function(){return Object(i.f)(i.a,{"class":"weui-cells_radiogroup"})},Object.defineProperty(RadioGroup.prototype,"el",{"get":function get(){return Object(i.e)(this)},"enumerable":!0,"configurable":!0}),RadioGroup}()}}]);