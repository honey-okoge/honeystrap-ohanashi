(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/honeystrap-ohanashi/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-8",attrs:{id:"app"}},[a("Idols"),a("faces"),a("TextForm"),a("Results")],1)},s=[],i=(a("7db0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("メンバを選ぶ")]),a("div",{staticClass:"form-inline"},[a("span",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.type,expression:"search.type"}],attrs:{name:"type",type:"radio",value:""},domProps:{checked:e._q(e.search.type,"")},on:{change:function(t){return e.$set(e.search,"type","")}}}),e._v("All")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.type,expression:"search.type"}],attrs:{name:"type",type:"radio",value:"honeystrap"},domProps:{checked:e._q(e.search.type,"honeystrap")},on:{change:function(t){return e.$set(e.search,"type","honeystrap")}}}),e._v("HoneyStrap")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search.type,expression:"search.type"}],attrs:{name:"type",type:"radio",value:"sugarlyric"},domProps:{checked:e._q(e.search.type,"sugarlyric")},on:{change:function(t){return e.$set(e.search,"type","sugarlyric")}}}),e._v("SugarLyric")])]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"search",size:"20",placeholder:"すおうぱとら"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}})])]),a("ul",{staticClass:"nav nav-pills"},e._l(e.filteredIdols,(function(t,n){return a("li",{key:n,class:{active:e.selectedIdol===t},on:{click:function(a){return e.select(t)}}},[a("a",[a("img",{staticClass:"face icon select",attrs:{src:t.images[0]}})])])})),0)])}),o=[],c=(a("4de4"),a("caad"),a("b0c0"),a("ac1f"),a("2532"),a("841c"),a("fb6a"),a("a434"),a("d3b7"),a("53ca")),l=a("d4ec"),u=a("bee2"),d=a("2caf"),p=a("262e"),h=a("faa1"),f=a.n(h),v=function(e){Object(p["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.call(this),e.data={paragraphs:[]},e}return Object(u["a"])(a,[{key:"fetchIdols",value:function(){var e=this;y("774.json").then((function(t){e.data.idols=t,e.emit("idols-updated",g(t))})).catch((function(e){return alert("アイドルデータの読み込みに失敗しました: "+e)}))}},{key:"selectIdol",value:function(e){var t=e.id?e.id:e,a=(this.data.idols||[]).find((function(e){return e.id===t}));this.emit("idol-selected",g(a))}},{key:"selectImage",value:function(e){this.emit("image-selected",g(e))}},{key:"addParagraph",value:function(e,t,a){this.data.paragraphs.push({idol:e,image:t,text:a}),this.emit("paragraphs-updated",g(this.data.paragraphs))}},{key:"swapParagraphs",value:function(e,t){var a=this.data.paragraphs,n=a[e];a[e]=a[t],a[t]=n,this.emit("paragraphs-updated",g(a))}},{key:"removeParagraph",value:function(e){this.data.paragraphs.splice(e,1),this.emit("paragraphs-updated",g(this.data.paragraphs))}},{key:"updateParagraph",value:function(){this.emit("paragraphs-updated",g(this.data.paragraphs))}}]),a}(f.a),m=new v;function g(e){return console.log(e),"object"!==Object(c["a"])(e)||null===e?(console.log("a"),e):Array.isArray(e)?(console.log("b"),e.slice()):(console.log("c"),Object.assign({},e))}function y(e){var t=new XMLHttpRequest;return t.open("GET",e),t.responseType="json",t.send(),new Promise((function(e,a){t.addEventListener("load",(function(){return e(t.response)})),t.addEventListener("error",a)}))}var b={name:"Idols",data:function(){return{idols:[],search:{type:""},searchText:"",selectedIdol:null}},created:function(){m.on("idols-updated",this.onIdolsUpdated),m.on("idol-selected",this.onIdolSelected)},destroyed:function(){m.removeListener("idols-updated",this.onIdolsUpdated),m.removeListener("idol-selected",this.onIdolSelected)},methods:{select:function(e){m.selectIdol(e)},onIdolsUpdated:function(e){this.idols=e},onIdolSelected:function(e){this.selectedIdol=e}},filters:{search:function(e){var t=this;return e.filter((function(e){return(!t.search.type||e.type===t.search.type)&&(e.name.includes(t.searchText)||e.yomi.includes(t.searchText))}))}},computed:{filteredIdols:function(){var e=this,t=this;return t.idols.filter((function(t){return(!e.search.type||t.type===e.search.type)&&(t.name.includes(e.searchText)||t.yomi.includes(e.searchText))}))}}},x=b,w=a("2877"),_=Object(w["a"])(x,i,o,!1,null,null,null),k=_.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.idol?a("section",[a("h2",[e._v("表情を選ぶ")]),a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active"},e._l(e.idol.images,(function(t,n){return a("span",{key:n},[a("img",{staticClass:"face select",attrs:{src:t,alt:""},on:{click:function(a){return e.select(t)}}})])})),0)])]):e._e()])},C=[],P={name:"faces",template:"#faces-template",data:function(){return{idol:null}},created:function(){m.on("idol-selected",this.onIdolSelected)},destroyed:function(){m.removeListener("idol-selected",this.onIdolSelected)},methods:{select:function(e){m.selectImage(e)},onIdolSelected:function(e){this.idol=e,this.select(e.images[0])}}},j=P,O=Object(w["a"])(j,I,C,!1,null,null,null),S=O.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("できあがり")]),a("p",[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.editting,expression:"editting"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.editting)?e._i(e.editting,null)>-1:e.editting},on:{change:[function(t){var a=e.editting,n=t.target,r=!!n.checked;if(Array.isArray(a)){var s=null,i=e._i(a,s);n.checked?i<0&&(e.editting=a.concat([s])):i>-1&&(e.editting=a.slice(0,i).concat(a.slice(i+1)))}else e.editting=r},e.changeCheckBox]}}),e._v("編集モード")])]),a("section",{directives:[{name:"show",rawName:"v-show",value:e.editting,expression:"editting"}]},[a("List",{directives:[{name:"show",rawName:"v-show",value:e.editting,expression:"editting"}]})],1),a("section",{directives:[{name:"show",rawName:"v-show",value:!e.editting,expression:"!editting"}]},[a("og-canvas",{ref:"canvas"}),a("p",[e._v(" 長押しや右クリックで画像を保存してお楽しみください。 ")]),a("p",[a("button",{staticClass:"btn btn-default",on:{click:e.open}},[e._v(" 保存できないので画像だけを表示してみる ")])]),a("p")],1)])},$=[],E=(a("4160"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scenario"},e._l(e.paragraphs,(function(t,n){return a("div",{key:n},[a("div",{staticClass:"paragraph"},[a("img",{staticClass:"face",attrs:{src:t.image}}),a("div",{staticClass:"fukidashi"},[t.idol?a("p",{staticClass:"name"},[e._v(e._s(t.idol.name))]):e._e(),a("pre",{staticClass:"serifu"},[e._v(e._s(t.text))])])]),a("p",{staticClass:"serifu"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"p.text"}],attrs:{rows:"2",cols:"60"},domProps:{value:t.text},on:{input:function(a){a.target.composing||e.$set(t,"text",a.target.value)}}})]),a("div",[a("button",{staticClass:"btn",attrs:{type:"button",disabled:0===n},on:{click:function(t){return e.moveup(n)}}},[e._v("↑ ")]),a("button",{staticClass:"btn",attrs:{type:"button",disalbed:n+1===e.paragraphs.length},on:{click:function(t){return e.movedown(n)}}},[e._v("↓ ")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.remove(n)}}},[e._v("削除 ")])])])})),0)}),L=[],U={name:"list",data:function(){return{paragraphs:[]}},created:function(){var e=this;m.on("paragraphs-updated",(function(t){return e.paragraphs=t}))},watch:{paragraphs:function(){}},methods:{moveup:function(e){m.swapParagraphs(e,e-1)},movedown:function(e){m.swapParagraphs(e,e+1)},remove:function(e){m.removeParagraph(e)}}},N=U,A=Object(w["a"])(N,E,L,!1,null,null,null),R=A.exports,H={name:"results",components:{List:R},data:function(){return{editting:!1}},methods:{open:function(e){e.preventDefault(),window.open(this.$refs.canvas.getUrl())},changeCheckBox:function(){m.updateParagraph()},twitterShare:function(){var e="https://twitter.com/intent/tweet?text=テストツイート&url="+this.$refs.canvas.getUrl();location.href=e}}};function M(e,t,a){var n=[];if(!e)return n;for(var r=1;r<e.length;++r){var s=t.measureText(e.substring(0,r));s.width>a&&(n.push(e.substring(0,r-1)),e=e.substring(r-1),r=0)}return n.push(e),n}n["a"].component("og-canvas",{template:'<canvas id="ohanashi" width=640 v-bind:height="height" style="width: 320px"></canvas>',replace:!0,data:function(){return{paragraphs:[],unitHeight:168,wakuUrl:"images/11006e59e67.png",bgUrl:"images/11002c9b1d8.png"}},created:function(){var e=this;m.on("paragraphs-updated",(function(t){return e.paragraphs=t})),this.waku=new Image,this.waku.src=this.wakuUrl,this.bg=new Image,this.bg.src=this.bgUrl},watch:{paragraphs:function(e){this.$nextTick((function(){for(var t=this,a=this.$el.getContext("2d"),n=0;n<this.height;n+=this.bg.height)a.drawImage(this.bg,0,n);function r(e,t,n){var r=new Image;r.src=e,r.onload=function(){return a.drawImage(r,t,n,152,152)}}e.forEach((function(e,n){var s=n*t.unitHeight;r(e.image,8,8+s),a.drawImage(t.waku,174,8+s),a.font='bold 28px/35px "Arial", sans-serif',a.fillStyle="#f33281",a.fillText(e.idol.name,184,42+s),a.fillStyle="black";var i=M(e.text,a,428);i.forEach((function(e,t){var n=s+76+35*t;a.fillText(e,184,n)}))}))}))}},computed:{height:function(){return this.paragraphs.length*this.unitHeight}},methods:{getUrl:function(){var e=this.$el;return e.toDataURL()}}});var q=H,D=Object(w["a"])(q,T,$,!1,null,null,null),F=D.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.isReady?a("section",[a("h2",[e._v("せりふを考える")]),a("form",{on:{submit:e.addParagraph}},[a("div",{staticClass:"scenario"},[a("div",{staticClass:"paragraph"},[a("img",{staticClass:"face",attrs:{src:e.image}}),a("div",{staticClass:"fukidashi"},[e.idol?a("p",{staticClass:"name"},[e._v(e._s(e.idol.name))]):e._e(),a("pre",{staticClass:"serifu"},[e._v(e._s(e.text))])])])]),a("p",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{rows:"2",cols:"60"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),e._m(0)])]):e._e()])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("button",{staticClass:"btn btn-default"},[e._v("↓追加↓")])])}],z={name:"form-text",data:function(){return{idol:null,image:null,text:""}},created:function(){m.on("idol-selected",this.onIdolSelected),m.on("image-selected",this.onImageSelected)},destroyed:function(){m.removeListener("idol-selected",this.onIdolSelected),m.removeListener("image-selected",this.onImageSelected)},computed:{isReady:function(){return null!==this.idol&&null!==this.image}},methods:{addParagraph:function(e){e.preventDefault(),m.addParagraph(this.idol,this.image,this.text),this.text=""},onIdolSelected:function(e){this.idol=e,this.text||(this.text=e["default_text"])},onImageSelected:function(e){this.image=e}}},G=z,X=Object(w["a"])(G,B,J,!1,null,null,null),K=X.exports,Q={name:"App",components:{Idols:k,Faces:S,TextForm:K,Results:F},created:function(){m.on("idols-updated",(function(e){m.selectIdol(e.find((function(e){return"patra"===e.id})))})),m.fetchIdols()}},V=Q,W=Object(w["a"])(V,r,s,!1,null,null,null),Y=W.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Y)}}).$mount("#app")}});
//# sourceMappingURL=app.c64d50bd.js.map