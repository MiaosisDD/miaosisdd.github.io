(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{"113":function(t,e,n){var i=n(21),a=n(1912);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={"insert":"head","singleton":!1},r=(i(a,o),a.locals?a.locals:{});t.exports=r},"114":function(t,e,n){var i=n(21),a=n(1914);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={"insert":"head","singleton":!1},r=(i(a,o),a.locals?a.locals:{});t.exports=r},"119":function(t,e,n){"use strict";n.r(e);var i=n(2),a=n(0),o=n(9),r=n(87),s=n(90),m=n(88),c={"name":"NumberDisplay","props":{"battelBackground":{"type":String,"default":""},"enemyDigimon":{"type":String,"default":""},"enemyAttrGain":{"type":Object,"default":function _default(t){return{}}},"tamerAttrGain":{"type":Object,"default":function _default(t){return{}}},"finallyCallback":{"type":Function,"default":null},"gifs":{"type":Object,"default":null}},"computed":{"enemyDigimonAttrGain":function enemyDigimonAttrGain(){return Object(a.a)(Object(a.a)({},r.a),this.enemyAttrGain)},"tamerDigimonAttrGain":function tamerDigimonAttrGain(){return Object(a.a)(Object(a.a)({},r.a),this.tamerAttrGain)},"getTamerData":function getTamerData(){return this.$store.getters.getTamerData},"computedDigimonAttr":function computedDigimonAttr(){return Object(m.a)(this.currrentDigimonData,this.currentDigimonInfo)},"currrentDigimonData":function currrentDigimonData(){return r.c[this.getTamerData.currentDigimon]},"normalAction":function normalAction(){return this.currrentDigimonData.actionGroup.normal},"touchAction":function touchAction(){return this.currrentDigimonData.actionGroup.touch},"attackAction":function attackAction(){return this.currrentDigimonData.actionGroup.attack},"enemyDigimonData":function enemyDigimonData(){return this.enemyDigimon?r.c[this.enemyDigimon]:this.targetBoss?r.c.zeedmillenniumon:r.c[this.randomDigimon]},"computedEnemyDigimonAttr":function computedEnemyDigimonAttr(){var t={"attr":{"level":this.enemyDigimonAttrGain.level}};return Object(m.a)(this.enemyDigimonData,t)},"enemyNormalAction":function enemyNormalAction(){return this.enemyDigimonData.actionGroup.normal},"enemyTouchAction":function enemyTouchAction(){return this.enemyDigimonData.actionGroup.touch},"enemyAttackAction":function enemyAttackAction(){return this.enemyDigimonData.actionGroup.attack},"isCurrentAttack":function isCurrentAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==1&&this.showAttackNormal},"isEnemyAttack":function isEnemyAttack(){return this.isAttackNormal>0&&this.isAttackNormal%2==0&&this.showAttackNormal},"currentHpPrecent":function currentHpPrecent(){return 100-this.battleInfo.current.hp/this.computedDigimonAttr.attr.hp*100+"%"},"enemyHpPrecent":function enemyHpPrecent(){return 100-this.battleInfo.enemy.hp/this.computedEnemyDigimonAttr.attr.hp*100+"%"},"currentDigimonInfo":function currentDigimonInfo(){return this.$store.state.currentDigimonInfo}},"data":function data(){return{"touchHandle":0,"enemyHurt":"","currentHurt":"","randomDigimon":"","targetBoss":Math.random()>.97,"timer":null,"time":1,"isAttackNormal":0,"intervalTime":1e3,"showAttackNormal":!1,"behit":!1,"battleInfo":{"enemy":{"hp":0},"current":{"hp":0}}}},"created":function created(){this.getRandomDigimon()},"mounted":function mounted(){console.log(this.gifs),console.log("当前出场数码兽"),console.log(this.currrentDigimonData),this.initCountDown(),this.initAttr(),console.log(this.computedDigimonAttr),console.log(this.computedEnemyDigimonAttr)},"methods":{"getRandomDigimon":function getRandomDigimon(){var t=Object.keys(r.c).reduce((function(t,e){return t[e]=e,t}),{}),e=t.agumon,n=t.greymon,i=t.wargreymon,a=t.metalgreymon,o=t.gabumon,s=t.garurumon,c=t.weregarurumon,l=t.metalgarurumon,u=t.patamon,d=t.angemon,g=t.shenshengtianshi,h=t.jiujitianshi,p=t.jiachongshou,f=t.biduoshou,b=t.chaobiduoshou,y=t.jiujibiduoshou,k=t.xiaogou,v=t.dilu,w=t.tiannv,D=t.shenglong,x=(t.shenshengtiannv,t.balu),j=t.xianrenzhang,A=t.huaxian,z=t.meigui,I=t.biqiu,_=t.baduola,N=t.jialouda,O=t.fenghuang,C=t.gema,H=t.haishi,T=t.zudun,Z=t.weijing,G=[e,o,u,p,k,x,I,C];this.currentDigimonInfo.attr.level>=10&&G.push(n,s,d,f,v,j,_,H),this.currentDigimonInfo.attr.level>=30&&G.push(a,i,g,b,w,A,N,T),this.currentDigimonInfo.attr.level>=40&&G.push(c,l,h,y,D,z,O,Z),this.randomDigimon=G[Object(m.h)(0,G.length-1)]},"initAttr":function initAttr(){var t=this.computedDigimonAttr.attr.hp,e=this.computedEnemyDigimonAttr.attr.hp;this.battleInfo={"enemy":{"hp":e*this.enemyDigimonAttrGain.hp},"current":{"hp":t}}},"initCountDown":function initCountDown(){var t=this;this.timer=setInterval((function(){t.time++,t.time>=3&&t.beginBattle(),3==t.time&&(setTimeout((function(){t.intervalTime=1500,t.initCountDown()}),200),clearInterval(t.timer))}),this.intervalTime)},"beginBattle":function beginBattle(){var t=this;this.isAttackNormal+=1,this.showAttackNormal=!0,setTimeout((function(){t.showAttackNormal=!1,t.handleHit()}),900)},"getHurt":function getHurt(t,e,n){var i=t.at*n.at-e.de;return i>0?i:0},"handleHit":function handleHit(){var t=this;if(this.behit=!0,this.isAttackNormal%2==0){var e=this.getHurt(this.computedEnemyDigimonAttr.attr,this.computedDigimonAttr.attr,this.enemyDigimonAttrGain);this.battleInfo.current.hp-=e>0?e:0,console.log("敌人造成伤害"+e),this.enemyHurt=e}else{var n=this.getHurt(this.computedDigimonAttr.attr,this.computedEnemyDigimonAttr.attr,this.tamerDigimonAttrGain);this.touchHandle>10&&(n*=1.5,n=parseInt(n),this.touchHandle=0),this.battleInfo.enemy.hp-=n>0?n:0,console.log("我方造成伤害"+n),this.currentHurt=n}if(this.battleInfo.current.hp<=0||this.battleInfo.enemy.hp<=0){var i="success";this.battleInfo.current.hp<=0&&(i="fail"),clearInterval(this.timer),setTimeout((function(){t.handleFinish(i)}),800)}setTimeout((function(){t.behit=!1}),300),setTimeout((function(){t.enemyHurt="",t.currentHurt=""}),600)},"handleFinish":function handleFinish(t){var e=this,n=Object(m.d)({"level":this.currentDigimonInfo.attr.level}),r="",c="";if(this.gifs){var l=this.gifs.type;if("expGain"==l)n*=this.gifs.expGain;else if("jcegg"==l)Math.random()>this.gifs.percent&&(c={"11":this.$store.state.storeItems[11]&&this.$store.state.storeItems[11]+1||1});else if("zsj_card"==l){if(Math.random()>this.gifs.percent){var u=this.$store.state.storeItems[13]&&this.$store.state.storeItems[13]+1||1;u<=10&&(c={"13":u})}}else if("hjegg"==l){if(Math.random()>this.gifs.percent){var d=this.$store.state.storeItems[12]&&this.$store.state.storeItems[12]+1||1;d<=100&&(c={"12":d})}}else if("mowegg"==l&&Math.random()>this.gifs.percent){var g=this.$store.state.storeItems[14]&&this.$store.state.storeItems[14]+1||1;g<=100&&(c={"14":g})}}!this.enemyDigimon&&this.targetBoss&&(n*=5)<3e3&&(n=3e3);var h=(new Date).getHours();h>=18&&h<=21&&(n*=5);var p=this.enemyDigimon&&Math.random()>.98,f=this.enemyDigimon&&Math.random()>.9;"success"==t&&(p||f)&&(r+="".concat(p?" 获得数码蛋 ":""),r+="".concat(f?"获得卡片":"")),Object(o.showToast)({"title":"success"==t?"获得".concat(n,"经验").concat(r):"打不过？就这就这","icon":"none","duration":2e3,"success":function success(r){if("success"==t){var l=Object(m.b)({"level":e.currentDigimonInfo.attr.level,"exp":n,"nowExp":e.currentDigimonInfo.attr.exp});if("shijieshu"===e.enemyDigimon&&Object(o.showModal)({"title":"击败世界树了啊","content":"交流群：961490006 不要随意公开\n携带该码可进群：".concat(+new Date),"confirmText":"欢迎加入"}),c){var u=Object(a.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(a.a)(Object(a.a)({},u),c))}if(p){var d=Object(a.a)({},e.$store.state.storeItems);e.$store.dispatch("updateStoreItems",Object(a.a)(Object(a.a)({},d),{},{"1":d[1]&&d[1]+1||1}))}if(f){var g=Object(a.a)({},e.$store.state.storeItems),h=Object.values(s.a).filter((function(t){return"card"===t.type})),b=h[Object(m.h)(0,h.length-1)].id;e.$store.dispatch("updateStoreItems",Object(a.a)(Object(a.a)({},g),{},Object(i.a)({},b,g[b]&&g[b]+1||1)))}e.$store.dispatch("updateCurrentDigimonInfo",{"attr":Object(a.a)(Object(a.a)({},e.currentDigimonInfoattr),{},{"exp":l.exp,"level":l.level}),"name":e.currentDigimonInfo.name})}setTimeout((function(){e.finallyCallback?e.finallyCallback(t):e.$store.state.sceneType="normal"}),800)}})}}},l=(n(95),n(86)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("taro-view",{"staticClass":"digimon-battle"},[t.time<=2?n("taro-view",{"staticClass":"count-down"},[t._v("\n    "+t._s(3-t.time)+"\n  ")]):t._e(),t._v(" "),n("taro-view",{"staticClass":"battle-container","style":{"backgroundImage":"url("+t.battelBackground+")","backgroundSize":"96%","backgroundRepeat":"no-repeat","backgroundPosition":"50% 40%"}},[n("taro-view",{"staticClass":"hp-box"},[n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.enemyHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-left","class":{"active":t.currentHurt>0}},[t._v("-"+t._s(t.currentHurt))]),t._v(" "),n("taro-view",{"staticClass":"hp-item"},[n("taro-view",{"staticClass":"hp-item-inner","style":{"transform":"translateX("+t.currentHpPrecent+")"}})],1),t._v(" "),n("taro-view",{"staticClass":"hp-hurt hurt-right","class":{"active":t.enemyHurt>0}},[t._v("-"+t._s(t.enemyHurt))])],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box enemy-digimon"},[t.isEnemyAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyNormalAction[0]}}),t._v(" "),t.isEnemyAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==1},"attrs":{"src":t.enemyTouchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isEnemyAttack},"attrs":{"src":t.enemyAttackAction[0]}})],1),t._v(" "),n("taro-view",{"staticClass":"digimon-box current-digimon","on":{"tap":function(e){t.touchHandle++}}},[t.isCurrentAttack?t._e():n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.normalAction[0]}}),t._v(" "),t.isCurrentAttack?n("taro-image",{"class":{"behit":this.behit&&t.isAttackNormal>0&&t.isAttackNormal%2==0},"attrs":{"src":t.touchAction[0]}}):t._e(),t._v(" "),n("taro-image",{"staticClass":"attack-normal","class":{"active":t.isCurrentAttack&&t.touchHandle<10,"bigactive":t.isCurrentAttack&&t.touchHandle>10},"attrs":{"src":t.attackAction[0]}})],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},"1911":function(t,e,n){"use strict";n(113)},"1912":function(t,e,n){var i=n(22),a=n(89),o=n(102),r=n(94);e=i(!1);var s=a(o),m=a(r);e.push([t.i,".zone-list {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100vw;\n  height: 90%;\n}\n.zone-list .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.zone-list .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.zone-list .zone-item {\n  width: 30%;\n  height: 4.26667rem;\n  background: url("+s+") no-repeat 50% 0;\n  background-size: 4.26667rem;\n  position: relative;\n  overflow: hidden;\n}\n.zone-list .zone-item:last-child {\n  width: 60%;\n  margin: 0 auto;\n  background: url("+m+") no-repeat 50% 0;\n  background-size: 100% 100%;\n}\n.zone-list .zone-item .enemy-name {\n  width: 100%;\n  height: 0.85333rem;\n  line-height: 0.85333rem;\n  text-align: center;\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 0.256rem;\n  z-index: 100;\n}\n.zone-list .zone-item .enemy-img {\n  display: block;\n  width: 3.41333rem;\n  height: 3.41333rem;\n  margin: 0.42667rem auto 0;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  -o-transition: transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n}\n.zone-list .zone-item .enemy-img.un-open {\n  -webkit-filter: brightness(0);\n          filter: brightness(0);\n  opacity: 0.8;\n}\n.zone-list .zone-item .enemy-img.open:active {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n",""]),t.exports=e},"1913":function(t,e,n){"use strict";n(114)},"1914":function(t,e,n){var i=n(22),a=n(89),o=n(93),r=n(94);e=i(!1);var s=a(o),m=a(r);e.push([t.i,".digimon-zones {\n  width: 100vw;\n  height: 100vh;\n  padding: 0.42667rem 0 0.42667rem;\n  overflow-y: auto;\n  background: url("+s+") no-repeat;\n  background-size: 100vw 100vh;\n}\n.digimon-zones .back-button {\n  position: absolute;\n  top: 0.21333rem;\n  left: 0.21333rem;\n  color: #fff;\n  -webkit-transition: color 0.3s ease;\n  -o-transition: color 0.3s ease;\n  transition: color 0.3s ease;\n}\n.digimon-zones .back-button:active {\n  color: rgba(0, 0, 0, 0.4);\n}\n.digimon-zones .zone-list-item {\n  width: 10.66667rem;\n  height: 5.12rem;\n  -webkit-box-shadow: 0 0 0.42667rem rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 0.42667rem rgba(0, 0, 0, 0.4);\n  margin: 1.28rem auto 1.28rem;\n  border-radius: 0.128rem;\n  -webkit-transition: -webkit-transform 0.3s ease;\n  transition: -webkit-transform 0.3s ease;\n  -o-transition: transform 0.3s ease;\n  transition: transform 0.3s ease;\n  transition: transform 0.3s ease, -webkit-transform 0.3s ease;\n  background: url("+m+") no-repeat;\n  background-size: 100% 100%;\n  position: relative;\n}\n.digimon-zones .zone-list-item .zone-name {\n  position: absolute;\n  right: 0.34133rem;\n  bottom: 0.256rem;\n  font-size: 1.28rem;\n  color: rgba(255, 255, 255, 0.8);\n  z-index: 100;\n}\n.digimon-zones .zone-list-item .zone-img {\n  width: 10.24rem;\n  height: 4.69333rem;\n  margin: 0.21333rem 0 0 0.256rem;\n}\n.digimon-zones .zone-list-item:active {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n",""]),t.exports=e},"1925":function(t,e,n){"use strict";n.r(e);var i=n(9),a=n(2),o=n(119),r=n(87),s={"name":"ZoneList","components":{"DigimonBattle":o.default},"props":{"activeZoneItem":{"type":Object,"default":function _default(){return{}}},"activeZone":{"type":String,"default":""},"enemyList":{"type":Array,"default":function _default(){return[]}},"gifsMap":{"type":Object,"default":null}},"data":function data(){return{"enemyDigimonName":""}},"computed":{"zoneStatus":function zoneStatus(){return this.$store.state.zoneStatus[this.activeZone]},"computedEnemyList":function computedEnemyList(){return this.enemyList.map((function(t){return{"img":r.c[t].img,"name":t,"nameZh":r.c[t].name}}))}},"mounted":function mounted(){this.zoneStatus||this.$store.dispatch("updateZoneStatus",Object(a.a)({},this.activeZone,0))},"methods":{"backHandle":function backHandle(){this.$emit("chengeZone","")},"finallyCallback":function finallyCallback(t){var e=this;"success"==t&&this.zoneIndex>=this.zoneStatus&&this.$store.dispatch("updateZoneStatus",Object(a.a)({},this.activeZone,this.zoneStatus+1)),this.$nextTick((function(){e.enemyDigimonName=""}))},"selectEnemy":function selectEnemy(t,e){this.zoneStatus<e?Object(i.showToast)({"title":"前面都没打 想跳关？？","icon":"none","duration":1e3}):(this.zoneIndex=e,this.enemyDigimonName=t.name)}},"onReady":function onReady(){}},m=(n(1911),n(86)),c={"name":"DigimonZones","components":{"ZoneList":Object(m.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("taro-view",{"staticClass":"zone-list"},[""==t.enemyDigimonName?n("taro-view",{"staticClass":"back-button","on":{"tap":t.backHandle}},[t._v("返回")]):t._e(),t._v(" "),t.enemyDigimonName?n("digimon-battle",{"attrs":{"battel-background":t.activeZoneItem.img,"gifs":t.gifsMap&&t.enemyDigimonName&&t.gifsMap[t.enemyDigimonName],"enemy-digimon":t.enemyDigimonName,"finally-callback":t.finallyCallback}}):n("taro-view",{"staticClass":"zone-list"},t._l(t.computedEnemyList,(function(e,i){return n("taro-view",{"key":i,"staticClass":"zone-item","on":{"tap":function(n){return t.selectEnemy(e,i)}}},[n("taro-view",{"staticClass":"enemy-name"},[t._v(t._s(i<=t.zoneStatus?e.nameZh:"？？？"))]),t._v(" "),n("taro-image",{"staticClass":"enemy-img","class":{"un-open":i>t.zoneStatus,"open":i<=t.zoneStatus},"attrs":{"src":e.img}})],1)})),1)],1)}),[],!1,null,null,null).exports},"computed":{},"data":function data(){return{"activeZone":"","activeZoneItem":{},"enemyList":[],"gifsMap":null,"zonesList":[{"zoneId":"20210119","name":"大冒号","enemyList":Object.keys(r.p),"img":n(106),"gifsMap":Object.keys(r.p).reduce((function(t,e,n){return t[e]={"type":"expGain","expGain":n<9?2:5},t}),{})},{"zoneId":"20210204","name":"四天王","enemyList":Object.keys(r.k),"img":n(103),"gifsMap":Object.keys(r.k).reduce((function(t,e,n){return t[e]={"type":"expGain","expGain":n<9?2:5},t}),{})},{"zoneId":"20210220","name":"七魔王","enemyList":Object.keys(r.o),"img":n(108),"gifsMap":Object.keys(r.o).reduce((function(t,e,n){return t[e]={"type":"mowegg","percent":n<9?.99:.9},t}),{})},{"zoneId":"20210221","name":"帝厉魔","enemyList":Object.keys(r.j),"img":n(101),"gifsMap":Object.keys(r.j).reduce((function(t,e,n){return t[e]={"type":"expGain","expGain":n<9?2:5},t}),{})},{"zoneId":"20210224","name":"超恶魔兽的逆袭","enemyList":Object.keys(r.n),"img":n(107),"gifsMap":Object.keys(r.n).reduce((function(t,e,n){return t[e]={"type":"expGain","expGain":n<9?2:5},t}),{})},{"zoneId":"20210225","name":"皇家骑士","enemyList":Object.keys(r.l),"img":n(104),"gifsMap":Object.keys(r.l).reduce((function(t,e,n){return t[e]="honglian"===e?{"type":"zsj_card","percent":.995}:{"type":"hjegg","percent":n<9?.99:.9},t}),{})},{"zoneId":"20210314","name":"组合战争","enemyList":Object.keys(r.m),"img":n(105),"gifsMap":Object.keys(r.m).reduce((function(t,e,n){return t[e]={"type":"jcegg","percent":n<9?.99:.98},t}),{})},{"zoneId":"","name":"","enemyList":[],"img":"","gifsMap":null}]}},"methods":{"backHandle":function backHandle(){this.$store.commit("UPDATE_SCENETYPE","normal")},"tapHandle":function tapHandle(t){var e=this;t.zoneId?(this.enemyList=t.enemyList,this.gifsMap=t.gifsMap||null,this.activeZoneItem=t,setTimeout((function(){e.activeZone=t.zoneId}),400)):Object(i.showToast)({"title":"还没做好啊 别点了","icon":"none","duration":1e3})}},"onReady":function onReady(){}},l=(n(1913),Object(m.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("taro-view",{"staticClass":"digimon-zones"},[""==t.activeZone?n("taro-view",{"staticClass":"back-button","on":{"tap":t.backHandle}},[t._v("返回")]):t._e(),t._v(" "),t._l(t.zonesList,(function(e,i){return n("taro-view",{"directives":[{"name":"show","rawName":"v-show","value":""==t.activeZone,"expression":"activeZone == ''"}],"key":i,"staticClass":"zone-list-item","on":{"tap":function(n){return t.tapHandle(e)}}},[e.name?n("taro-view",{"staticClass":"zone-name"},[t._v(t._s(e.name))]):t._e(),t._v(" "),e.img?n("taro-image",{"staticClass":"zone-img","attrs":{"src":e.img}}):t._e()],1)})),t._v(" "),t.activeZone?n("zone-list",{"attrs":{"activeZoneItem":t.activeZoneItem,"activeZone":t.activeZone,"enemyList":t.enemyList,"gifsMap":t.gifsMap},"on":{"chengeZone":function(e){t.activeZone=""}}}):t._e()],2)}),[],!1,null,null,null));e.default=l.exports},"90":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=function gimg(t){try{return n(92)("./".concat(t))}catch(t){return console.warn(t),""}},a={"1":{"id":1,"name":"数码蛋","img":i("eggs/01.png"),"maxNum":100,"type":"egg","useType":"egg","descript":"普通的数码蛋 可以随机获得一个数码兽"},"2":{"id":2,"name":"蓝卡","img":i("card/bcard.jpg"),"maxNum":100,"type":"card","useType":"blueCard","descript":"平平无奇的蓝卡"},"3":{"id":3,"name":"at增益","img":i("card/at.jpg"),"maxNum":100,"type":"card","useType":"at","descript":"at增益卡"},"4":{"id":4,"name":"at增益3倍","img":i("card/at3.jpeg"),"maxNum":100,"type":"card","useType":"at3","descript":"at增益卡"},"5":{"id":5,"name":"atde增益","img":i("card/atde.jpeg"),"maxNum":100,"type":"card","useType":"atde","descript":"atde增益卡"},"6":{"id":6,"name":"de增益","img":i("card/de.jpg"),"maxNum":100,"type":"card","useType":"de","descript":"de增益卡"},"7":{"id":7,"name":"de增益999","img":i("card/de999.jpeg"),"maxNum":100,"type":"card","useType":"de999","descript":"de增益卡"},"8":{"id":8,"name":"de增益9999","img":i("card/de9999.jpeg"),"maxNum":100,"type":"card","useType":"de9999","descript":"de增益卡"},"9":{"id":9,"name":"hp回复50","img":i("card/hp50.jpeg"),"maxNum":100,"type":"card","useType":"hp50","descript":"恢复生命值50%"},"10":{"id":10,"name":"hp回复100","img":i("card/hp100.jpg"),"maxNum":100,"type":"card","useType":"hp100","descript":"恢复生命值100%"},"11":{"id":11,"name":"数码蛋","img":i("eggs/04.png"),"maxNum":100,"type":"egg","useType":"jczzegg","descript":"交错战争数码蛋"},"12":{"id":12,"name":"数码蛋","img":i("eggs/05.png"),"maxNum":100,"type":"egg","useType":"hjqsegg","descript":"皇家骑士副本限定数码蛋"},"13":{"id":13,"name":"中世纪红莲怪物卡","img":i("card/zsj.jpg"),"maxNum":100,"type":"useCard","useType":"zsjCard","descript":"不知道是什么卡片 收集10张好像才可以用"},"14":{"id":14,"name":"数码蛋","img":i("eggs/06.png"),"maxNum":100,"type":"egg","useType":"mowegg","descript":"七魔王限定数码蛋"}}},"91":function(t,e,n){var i=n(21),a=n(96);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={"insert":"head","singleton":!1},r=(i(a,o),a.locals?a.locals:{});t.exports=r},"95":function(t,e,n){"use strict";n(91)},"96":function(t,e,n){(e=n(22)(!1)).push([t.i,"@-webkit-keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@keyframes attackNormal {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(2);\n            transform: translate3d(-60vw, -50%, 0) scale(2);\n}\n}\n@-webkit-keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n@keyframes attackZoom {\nfrom {\n    -webkit-transform: translate3d(0, -50%, 0) scale(1);\n            transform: translate3d(0, -50%, 0) scale(1);\n}\nto {\n    -webkit-transform: translate3d(-60vw, -50%, 0) scale(5);\n            transform: translate3d(-60vw, -50%, 0) scale(5);\n}\n}\n.digimon-battle {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.digimon-battle .count-down {\n  color: #fff;\n  font-size: 2.13333rem;\n  width: 100%;\n  top: 3.84rem;\n  text-align: center;\n  position: absolute;\n}\n.digimon-battle .battle-container {\n  width: 100%;\n  height: 10.66667rem;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .hp-box {\n  width: 100%;\n  height: 0.256rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n  top: 32%;\n  padding: 0 4%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-filter: blur(0.02133rem);\n          filter: blur(0.02133rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item {\n  width: 1.70667rem;\n  background: -webkit-gradient(linear, left top, left bottom, from(#6a6a6a), to(#434343));\n  background: -webkit-linear-gradient(#6a6a6a, #434343);\n  background: -o-linear-gradient(#6a6a6a, #434343);\n  background: linear-gradient(#6a6a6a, #434343);\n  border: 0.04267rem solid #d5d7d3;\n  border-radius: 0.08533rem;\n  overflow: hidden;\n}\n.digimon-battle .battle-container .hp-box .hp-item .hp-item-inner {\n  background: -webkit-gradient(linear, left top, left bottom, from(#da3c2e), to(#a31c0f));\n  background: -webkit-linear-gradient(#da3c2e, #a31c0f);\n  background: -o-linear-gradient(#da3c2e, #a31c0f);\n  background: linear-gradient(#da3c2e, #a31c0f);\n  height: 0.256rem;\n  width: 1.70667rem;\n  -webkit-transform: translateX(-1.06667rem);\n      -ms-transform: translateX(-1.06667rem);\n          transform: translateX(-1.06667rem);\n}\n.digimon-battle .battle-container .hp-box .hp-item:first-child {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n.digimon-battle .battle-container .hp-box .hp-hurt {\n  color: red;\n  font-size: 1.06667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.active {\n  -webkit-transform: translate3d(0, -1.28rem, 0) scale(1.1);\n          transform: translate3d(0, -1.28rem, 0) scale(1.1);\n  opacity: 0.8;\n  -webkit-transition: all 0.35s ease;\n  -o-transition: all 0.35s ease;\n  transition: all 0.35s ease;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-right {\n  position: absolute;\n  top: -0.42667rem;\n  right: 0.64rem;\n}\n.digimon-battle .battle-container .hp-box .hp-hurt.hurt-left {\n  position: absolute;\n  top: -0.42667rem;\n  left: 0.64rem;\n}\n.digimon-battle .battle-container .digimon-box {\n  width: 2.56rem;\n  height: 2.56rem;\n  position: absolute;\n}\n.digimon-battle .battle-container .digimon-box .behit {\n  -webkit-transition: all 0.3s ease;\n  -o-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  opacity: 0.2;\n  -webkit-transform: translateX(0.10667rem);\n      -ms-transform: translateX(0.10667rem);\n          transform: translateX(0.10667rem);\n}\n.digimon-battle .battle-container .digimon-box.enemy-digimon {\n  top: 50%;\n  left: 0.42667rem;\n  -webkit-transform: translateY(-50%) rotateY(180deg);\n          transform: translateY(-50%) rotateY(180deg);\n}\n.digimon-battle .battle-container .digimon-box.current-digimon {\n  top: 50%;\n  right: 0.42667rem;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.digimon-battle .battle-container .digimon-box image,\n.digimon-battle .battle-container .digimon-box img,\n.digimon-battle .battle-container .digimon-box taro-image-core {\n  width: 100%;\n  height: 100%;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal {\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n  right: 2.98667rem;\n  opacity: 0;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.active {\n  opacity: 1;\n  -webkit-animation: attackNormal 1s linear alternate;\n          animation: attackNormal 1s linear alternate;\n}\n.digimon-battle .battle-container .digimon-box .attack-normal.bigactive {\n  opacity: 1;\n  -webkit-animation: attackZoom 1s linear alternate;\n          animation: attackZoom 1s linear alternate;\n}\n",""]),t.exports=e}}]);