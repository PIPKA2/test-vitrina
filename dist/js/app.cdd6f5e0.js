(function(){"use strict";var e={739:function(e,t,r){var i=r(963),s=r(252);const n={class:"container"},o=(0,s._)("h1",{class:"title"},"Мгновенные займы онлайн",-1),c=(0,s._)("div",{class:"description"},[(0,s._)("p",null,[(0,s.Uk)(" Для 100% одобрения "),(0,s._)("span",{class:"description__bold"},"отправьте 3 заявки"),(0,s.Uk)(" в несколько банков ")])],-1);function a(e,t,r,i,a,l){const p=(0,s.up)("the-header"),f=(0,s.up)("the-loans");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(p),(0,s._)("section",null,[(0,s._)("div",n,[o,c,(0,s.Wm)(f)])])],64)}var l=r.p+"img/logo.1b33117e.svg";const p=e=>((0,s.dD)("data-v-eb66189a"),e=e(),(0,s.Cn)(),e),f=p((()=>(0,s._)("div",{class:"container"},[(0,s._)("div",{class:"logo d-flex align-items-center justify-content-center"},[(0,s._)("img",{src:l,alt:"логотип"})])],-1))),d=[f];function u(e,t,r,i,n,o){return(0,s.wg)(),(0,s.iD)("header",null,d)}var h={},v=r(744);const g=(0,v.Z)(h,[["render",u],["__scopeId","data-v-eb66189a"]]);var A=g,m=r(577);const k={class:"wrapper"};function _(e,t,r,i,n,o){const c=(0,s.up)("the-loan"),a=(0,s.up)("fixed-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",{class:(0,m.C_)(["loans",""+(n.popupIsActive?"padding":"")]),onClick:t[0]||(t[0]=(...t)=>e.test&&e.test(...t))},[(0,s._)("div",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.isArrSorted,((e,t)=>((0,s.wg)(),(0,s.j4)(c,{key:e.id,offer:e,initSteps:n.startSteps,finalSteps:n.maxSteps,offerPos:t,onIncrease:o.increaseInitNum,onDecrease:o.decreaseInitNum,onJumpToEnd:o.getSortedArr,onCheckPopup:o.getActivePopup,onFilterActive:o.filterActiveOffer,onClickActive:o.addToClickedArr},null,8,["offer","initSteps","finalSteps","offerPos","onIncrease","onDecrease","onJumpToEnd","onCheckPopup","onFilterActive","onClickActive"])))),128))])],2),n.popupIsActive?((0,s.wg)(),(0,s.j4)(a,{key:0,initSteps:n.startSteps,finalSteps:n.maxSteps,progressBar:n.initProgressBar,notClicked:n.notClickedArr},null,8,["initSteps","finalSteps","progressBar","notClicked"])):(0,s.kq)("",!0)],64)}var w=r(594);const S={class:"top"},b={class:"logo d-flex align-items-center justify-content-center"},C=["src","alt","title"],y={class:"price"},x={class:"bottom"},O={class:"percent"},P={class:"years"},j={class:"btn-wrapper d-flex justify-content-center"},I=["href"];function B(e,t,r,i,n,o){return(0,s.wg)(),(0,s.iD)("div",{class:(0,m.C_)(["card d-flex flex-column align-items-center",""+(n.isActive?"active":"")])},[(0,s._)("div",S,[(0,s._)("div",b,[(0,s._)("img",{src:r.offer.logo,alt:r.offer.title,title:r.offer.title},null,8,C)]),(0,s._)("div",y,(0,m.zw)(r.offer.header)+" ₽",1)]),(0,s._)("div",x,[(0,s._)("div",O,[(0,s._)("span",null,(0,m.zw)(r.offer.chance)+"%",1),(0,s.Uk)(" одобрения ")]),(0,s._)("div",P,(0,m.zw)(r.offer.subHeader),1)]),(0,s._)("div",j,[(0,s._)("a",{class:"btn",target:"_blank",href:r.offer.link,onClick:t[0]||(t[0]=e=>o.toggleActive(e))},(0,m.zw)(""+(n.isActive?"Отменить":"Получить деньги")),9,I)])],2)}var T={props:["offer","initSteps","finalSteps","offerPos"],emits:["increase","decrease","jumpToEnd","checkPopup","filterActive","clickActive"],data(){return{isActive:!1}},methods:{toggleActive(e){this.isActive?(e.preventDefault(),this.isActive=!1,this.decreaseNum(),this.clickActiveOffer()):this.initSteps<this.finalSteps?(this.isActive=!0,this.increaseNum(),this.getToEnd(),this.showPopup(),this.filterActive()):e.preventDefault()},increaseNum(){this.$emit("increase")},decreaseNum(){this.$emit("decrease")},getToEnd(){this.$emit("jumpToEnd",this.offerPos)},showPopup(){this.$emit("checkPopup",!0)},filterActive(){this.$emit("filterActive",this.offer.id)},clickActiveOffer(){this.$emit("clickActive",this.offer.id)}}};const D=(0,v.Z)(T,[["render",B],["__scopeId","data-v-2f4d98e8"]]);var E=D;const N=e=>((0,s.dD)("data-v-158f2aca"),e=e(),(0,s.Cn)(),e),z={class:"popup d-flex justify-content-center"},L={class:"progress-bar"},$={class:"wrapper d-flex flex-column align-items-center"},Z={class:"subtitle"},H=N((()=>(0,s._)("p",{class:"text"}," Получите персональное предложение с максимальной вероятностью одобрения ",-1))),F={class:"btn-wrapper"},U=["href"];function Y(e,t,r,i,n,o){return(0,s.wg)(),(0,s.j4)(s.lR,{to:"body"},[(0,s._)("div",z,[(0,s._)("div",L,[(0,s._)("div",{class:"bar",style:(0,m.j5)(`width: ${r.progressBar}%`)},null,4)]),(0,s._)("div",$,[(0,s._)("div",Z," Отправлено "+(0,m.zw)(r.initSteps)+" из "+(0,m.zw)(r.finalSteps)+" заявок ",1),H,(0,s._)("div",F,[(0,s._)("a",{class:(0,m.C_)(["btn",""+(r.initSteps===r.finalSteps?"active":"")]),href:n.maxOfferLink,target:"_blank",onClick:t[0]||(t[0]=e=>o.getMaxOfferLink(r.notClicked))},"Оформить займ",10,U)])])])])}var J={props:["initSteps","finalSteps","progressBar","notClicked"],data(){return{maxOfferLink:null}},methods:{getMaxOfferLink(e){const t=[...e].reduce(((e,t)=>e.chance>t.chance?e:t));this.maxOfferLink=t.link}}};const M=(0,v.Z)(J,[["render",Y],["__scopeId","data-v-158f2aca"]]);var W=M,q={components:{TheLoan:E,FixedPopup:W},data(){return{offers:[],startSteps:0,maxSteps:3,initProgressBar:10,propgressBarStep:30,popupIsActive:!1,sortedArr:null,notClickedArr:null,clickedArr:[]}},created(){this.goBack("https://yescash.ru"),w.Z.get("/api/final").then((e=>{Object.prototype.hasOwnProperty.call(e.data,"targets")&&(this.offers=Object.freeze(e.data.targets.default))})).catch((e=>{throw new Error(e)}))},methods:{increaseInitNum(){this.startSteps<this.maxSteps&&(this.startSteps++,this.initProgressBar+=this.propgressBarStep)},decreaseInitNum(){this.startSteps--,this.initProgressBar-=this.propgressBarStep},getSortedArr(e){const t=[...this.sortedArr?this.sortedArr:this.offers].filter(((t,r)=>r!==e)),r=[...this.sortedArr?this.sortedArr:this.offers].splice(e,1),i=t.concat(r);this.sortedArr=i},getActivePopup(e){this.popupIsActive=e},goBack(e){window.history&&history.pushState&&(window.history.pushState(-1,null),window.history.pushState(0,null),window.history.pushState(1,null),window.history.go(-1),window.onpopstate=t=>{-1===t.state&&(window.location.href=e)})},filterActiveOffer(e){const t=[...this.notClickedArr?this.notClickedArr:this.sortedArr].filter((t=>t.id!==e));this.notClickedArr=t},addToClickedArr(e){const t=[...this.sortedArr].filter((t=>t.id===e)),r=this.notClickedArr.concat(t);this.notClickedArr=r}},computed:{isArrSorted(){return this.sortedArr?this.sortedArr:this.offers}}};const K=(0,v.Z)(q,[["render",_],["__scopeId","data-v-0984323e"]]);var R=K,G={name:"App",components:{TheHeader:A,TheLoans:R}};const Q=(0,v.Z)(G,[["render",a]]);var V=Q;const X=(0,i.ri)(V);X.mount("#app")}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,i,s,n){if(!i){var o=1/0;for(p=0;p<e.length;p++){i=e[p][0],s=e[p][1],n=e[p][2];for(var c=!0,a=0;a<i.length;a++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](i[a])}))?i.splice(a--,1):(c=!1,n<o&&(o=n));if(c){e.splice(p--,1);var l=s();void 0!==l&&(t=l)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[i,s,n]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,n,o=i[0],c=i[1],a=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in c)r.o(c,s)&&(r.m[s]=c[s]);if(a)var p=a(r)}for(t&&t(i);l<o.length;l++)n=o[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(p)},i=self["webpackChunkvitrina_beeline_vue"]=self["webpackChunkvitrina_beeline_vue"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(739)}));i=r.O(i)})();
//# sourceMappingURL=app.cdd6f5e0.js.map