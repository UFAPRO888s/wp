(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],d=0,l=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0681":function(t,e,n){"use strict";n("9ef3")},"0792":function(t,e,n){"use strict";n("13cb")},"0d4d":function(t,e,n){},"13cb":function(t,e,n){},"166e":function(t,e,n){"use strict";n("a5fa")},2401:function(t,e,n){},"268f":function(t,e,n){"use strict";n("661c")},2761:function(t,e,n){"use strict";n("0d4d")},4185:function(t,e,n){},"460c":function(t,e,n){"use strict";n("92b1")},5387:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("0284"),o=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TopBar",{on:{showUpdater:function(e){t.showUpdater=!0}}}),n("div",{attrs:{id:"wrapper"}},[t.showUpdater?n("Updater",{attrs:{error:t.error},on:{close:function(e){t.showUpdater=!1}}}):t._e(),t.loadingOn?n("Loading",{attrs:{message:t.loadingMessage,showWheel:t.loadingWheel}}):t._e(),n("router-view",{key:this.viewKey})],1),n("Foot")],1)},i=[],u=new r["a"],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v(" Made by "),n("a",{attrs:{href:"https://ufatop1.net/"}},[t._v("PNCK DEV APP")]),t._v(" See "),n("a",{attrs:{href:"https://www.ufatop1.net/wp/"}},[t._v("System performance UFAX ")]),t._v(". ")])}],d={name:"Foot"},l=d,f=(n("8fd6"),n("2877")),h=Object(f["a"])(l,c,p,!1,null,"71d511e2",null),m=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v(t._s(t.message))]),t.showWheel?n("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[n("path",{attrs:{fill:"#ffffff",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"}},[n("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)]):t._e()])},v=[],_={name:"Loading",props:{message:{type:String},showWheel:{type:Boolean,default:!0}}},w=_,b=(n("2761"),Object(f["a"])(w,g,v,!1,null,"c6f5f9b8",null)),x=b.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[n("h2",[t._v("Endpoint")]),n("p",[t._v("ใส่ url ปลายทาง WordPress REST ที่ถูกต้อง.")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.updatedEndpoint,expression:"updatedEndpoint"}],attrs:{type:"text"},domProps:{value:t.updatedEndpoint},on:{input:function(e){e.target.composing||(t.updatedEndpoint=e.target.value)}}}),t.error?n("span",[t._v(t._s(t.error))]):t._e(),n("button",{attrs:{type:"submit"}},[t._v("Save")])]),t.error?t._e():n("a",{on:{click:t.close}},[t._v("Nevermind.")])])},y=[],E={name:"Updater",props:{error:{type:String,default:""}},data:function(){return{updatedEndpoint:""}},created:function(){this.updatedEndpoint=this.$store.state.endpoint},methods:{close:function(){this.$emit("close")},submit:function(){this.$ga.event({eventCategory:"form",eventAction:"updateEndpoint",eventLabel:"Update to ".concat(this.updatedEndpoint)}),this.$store.commit("cache/wipe"),this.$store.commit("updateEndpoint",this.updatedEndpoint),this.$router.push("/posts"),this.$emit("close")}}},$=E,k=(n("268f"),Object(f["a"])($,P,y,!1,null,"c7f1f386",null)),O=k.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("h1",[n("router-link",{attrs:{to:{name:"home"}}},[t._v(" WORDPRESS ROUTER UFAX ")])],1),n("div",[n("p",[t._v(" กำลังแสดงผล จาก "),n("a",{attrs:{href:t.sourceURL}},[t._v(t._s(t.splitEndpoint[2]))])]),n("button",{on:{click:t.showUpdater}},[t._v(" Change Endpoint ")])])])},R=[],U=(n("ac1f"),n("1276"),{name:"TopBar",data:function(){return{}},computed:{splitEndpoint:function(){return this.$store.state.endpoint.split("/")},sourceURL:function(){return this.splitEndpoint[0]+this.splitEndpoint[1]+this.splitEndpoint[2]}},methods:{showUpdater:function(){this.$emit("showUpdater")}}}),S=U,F=(n("0792"),Object(f["a"])(S,j,R,!1,null,"231f55c0",null)),L=F.exports,T={name:"App",data:function(){return{error:"",loadingOn:!0,loadingMessage:"WORDPRESS ROUTER UFAX Loading ",loadingWheel:!0,showUpdater:!1,viewKey:0}},created:function(){var t=this;this.assignEndpointFromURL(),u.$on("toggleLoading",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if("string"===typeof e)return t.loadingOn=!0,t.showWheel=!1,void(t.loadingMessage=e);t.loadingMessage="Loading...",t.loadingWheel=!0,t.loadingOn=e})),u.$on("bumpViewKey",(function(e){u.$emit("toggleLoading",e),t.viewKey=t.viewKey+1})),u.$on("showUpdater",(function(e){t.showUpdater=!0,t.error=e})),u.$on("clearError",(function(){t.error=""}))},methods:{assignEndpointFromURL:function(){var t=this.getQueryString("endpoint");t&&this.$store.commit("updateEndpoint",t)}},components:{Foot:m,Loading:x,Updater:O,TopBar:L}},A=T,M=(n("5c0b"),Object(f["a"])(A,s,i,!1,null,null,null)),B=M.exports,q=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("ul",t._l(t.posts,(function(t){return n("Card",{key:t.id,attrs:{post:t}})})),1),n("Pagination",{attrs:{currentPage:parseInt(t.page),totalPages:parseInt(t.totalPages)}})],1)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("p",[t._v(" System Performance UFAX แสดงโพสต์ ปลายทาง ผ่าน WordPress REST API แสดงมุมมอง รวม & บทความของเว็บ ๆ เพื่อให้ ครอบคลุม CC ระบบ "),n("a",{attrs:{href:"https://ufatop1.net/"}},[t._v("MAIN UFATOP1.NET")]),t._v(". ")])])}],I=n("1da1"),C=(n("96cf"),n("b0c0"),n("99af"),n("159b"),n("d3b7"),n("d81d"),n("3ca3"),n("ddb0"),n("2ca0"),n("caad"),n("2532"),{methods:{get:function(t){var e=this;return new Promise(function(){var n=Object(I["a"])(regeneratorRuntime.mark((function n(r,a){var o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(void 0===e.$store.state.cache.requests[t]){n.next=2;break}return n.abrupt("return",r(e.$store.state.cache.requests[t]));case 2:return n.prev=2,n.next=5,fetch(e.$store.state.endpoint+t,{method:"GET"});case 5:return o=n.sent,n.next=8,o.json();case 8:n.t0=n.sent,n.t1={"x-wp-total":o.headers.get("x-wp-total"),"x-wp-totalpages":o.headers.get("x-wp-totalpages")},s={data:n.t0,headers:n.t1},n.next=16;break;case 13:return n.prev=13,n.t2=n["catch"](2),n.abrupt("return",a(n.t2));case 16:return e.$store.commit("cache/saveRequest",{path:t,data:s}),t.startsWith("/posts")&&!t.includes("slug")&&s.data.forEach((function(t){e.$store.commit("cache/saveRequest",{path:"/posts?slug=".concat(t.slug),data:{data:[t]}})})),n.abrupt("return",r(s));case 19:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(t,e){return n.apply(this,arguments)}}())}}}),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t.post.featured_image?n("router-link",{attrs:{to:{name:"post",params:{slug:t.post.slug}}}},[n("img",{attrs:{src:t.post.featured_image,alt:"Blog Post Featured Image"}})]):t._e(),n("span",[n("i",[t._v("—")]),t._v(" "+t._s(t.getFormattedDate(t.post.date))+" "),n("i",[t._v("—")])]),n("h3",[n("router-link",{attrs:{to:{name:"post",params:{slug:t.post.slug}}},domProps:{innerHTML:t._s(t.post.title.rendered)}})],1)],1)},K=[],H={name:"Card",props:{post:{type:Object}}},V=H,X=(n("a3e3"),Object(f["a"])(V,N,K,!1,null,"46c85ee0",null)),z=X.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",[n("li",[n("router-link",{class:{"is-disabled":1===t.currentPage},attrs:{to:{name:"page",params:{page:this.currentPage-1}}}},[t._v(" Previous Page ")])],1),n("li",[n("router-link",{class:{"is-disabled":t.currentPage===this.totalPages},attrs:{to:{name:"page",params:{page:this.currentPage+1}}}},[t._v(" Next Page ")])],1)]),n("p",[t._v("page "),n("strong",[t._v(t._s(t.currentPage))]),t._v(" out of "),n("strong",[t._v(t._s(t.totalPages))])])])},J=[],Q={name:"Pagination",props:{currentPage:{default:1},totalPages:{default:1}}},Y=Q,Z=(n("0681"),Object(f["a"])(Y,G,J,!1,null,"b4025716",null)),tt=Z.exports,et={name:"Feed",mixins:[C],data:function(){return{posts:[],page:1,totalPages:null}},mounted:function(){this.getPosts()},created:function(){"page"===this.$route.name&&(this.page=this.$route.params.page)},methods:{getPosts:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.get("/posts?per_page=".concat("9","&page=").concat(this.page));case 3:e=t.sent,this.totalPages=e.headers["x-wp-totalpages"],t.next=12;break;case 7:return t.prev=7,t.t0=t["catch"](0),u.$emit("showUpdater","Are you sure that's a valid endpoint?"),u.$emit("toggleLoading",!1),t.abrupt("return");case 12:return t.next=14,this.getFeaturedImages(e.data);case 14:this.posts=t.sent,this.getAdjacentPageData(),u.$emit("toggleLoading",!1);case 17:case"end":return t.stop()}}),t,this,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),getAdjacentPageData:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a=this,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=o.length>0&&void 0!==o[0]&&o[0],n=!0===e?parseInt(this.page)-1:parseInt(this.page)+1,!(n>0)){t.next=13;break}return t.prev=3,t.next=6,this.get("/posts?per_page=".concat("9","&page=").concat(n));case 6:r=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.error(t.t0);case 12:r.data.forEach((function(t){t.featured_media<=0||a.get("/media/".concat(t.featured_media))}));case 13:e||this.getAdjacentPageData(!0);case 14:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(){return t.apply(this,arguments)}return e}(),getFeaturedImages:function(t){var e=this;return new Promise((function(n){var r=t.map((function(t){return new Promise(function(){var n=Object(I["a"])(regeneratorRuntime.mark((function n(r){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,!(t.featured_media<=0)){n.next=3;break}throw"No featured image.";case 3:return n.next=5,e.get("/media/".concat(t.featured_media));case 5:a=n.sent,t.featured_image=a.data.media_details.sizes["medium"].source_url,n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),t.featured_image=null;case 12:r(t);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}())}));Promise.all(r).then((function(t){return n(t)}))}))}},components:{Card:z,Pagination:tt}},nt=et,rt=(n("460c"),Object(f["a"])(nt,D,W,!1,null,"51508f2c",null)),at=rt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[n("h2",[t._v(" ขออภัย หน้านั้นไม่มีอยู่จริง T-T. ")]),n("button",{on:{click:t.goBack}},[t._v("Go Home")])])])},st=[],it={name:"FourOFour",created:function(){u.$emit("toggleLoading",!1)},methods:{goBack:function(){this.$router.push("/posts")}}},ut=it,ct=(n("edff"),Object(f["a"])(ut,ot,st,!1,null,"67bc21a7",null)),pt=ct.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("article",[n("a",{on:{click:t.goBack}},[t._v("Back to All Posts")]),n("header",[t.featured_image?n("img",{attrs:{src:t.featured_image}}):t._e(),n("h1",{domProps:{innerHTML:t._s(t.title)}}),n("ul",[n("li",[n("span",[t._v("เผยแพร่เมื่อ "+t._s(t.date))])]),n("li",[n("span",[n("a",{attrs:{href:t.link}},[t._v("ลิ้งค์ไป ที่เว็บหลัก")])])])])]),n("PostBody",{attrs:{content:t.content}})],1)])},lt=[],ft=(n("9911"),n("2b3d"),n("841c"),{data:function(){return{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","อาจ","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]}},methods:{getFormattedDate:function(t){var e=new Date(t);return"".concat(this.months[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},goBack:function(){this.$router.go(-1)},getQueryString:function(t){var e=new URLSearchParams(window.location.search);return e.get(t)}}}),ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.content)}})},mt=[],gt={name:"PostBody",props:{content:{type:String,required:!0}}},vt=gt,_t=(n("166e"),Object(f["a"])(vt,ht,mt,!1,null,null,null)),wt=_t.exports,bt={name:"Post",mixins:[ft,C],data:function(){return{post:{},date:"",link:"",title:"",content:"",featured_image:""}},created:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.setPost();case 2:return this.post=t.sent,this.link=this.post.link,this.date=this.getFormattedDate(this.post.date),this.title=this.post.title.rendered,this.content=this.post.content.rendered,t.next=9,this.getFeaturedImage(this.post.featured_media);case 9:this.featured_image=t.sent,u.$emit("toggleLoading",!1);case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{setPost:function(){var t=this;return new Promise(function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get("/posts?slug=".concat(t.$route.params.slug));case 3:r=e.sent,e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](0),t.$router.push({name:"four-o-four"}),e.abrupt("return");case 10:n(r.data[0]);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())},getFeaturedImage:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!(post.featured_media<=0)){t.next=3;break}throw"No featured image.";case 3:return t.next=5,this.get("/media/".concat(e));case 5:n=t.sent,t.next=11;break;case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",null);case 11:return t.abrupt("return",n.data.media_details.sizes["medium"].source_url);case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()},components:{PostBody:wt}},xt=bt,Pt=(n("d89d"),Object(f["a"])(xt,dt,lt,!1,null,"ebacb77e",null)),yt=Pt.exports;r["a"].use(q["a"]);var Et=[{name:"home",path:"/",redirect:"/posts"},{name:"posts",path:"/posts",component:at},{name:"post",path:"/posts/:slug",component:yt},{name:"page",path:"/page/:page",component:at},{name:"four-o-four",path:"/404",component:pt},{path:"*",redirect:"/404"}],$t=new q["a"]({mode:"history",routes:Et});$t.afterEach((function(){u.$emit("bumpViewKey")}));var kt=$t,Ot=n("2f62"),jt=(n("b64b"),{namespaced:!0,state:{requests:{}},mutations:{saveRequest:function(t,e){Object.keys(t.requests).length>="150"&&delete t.requests[Object.keys(t.requests)[0]],t.requests[e.path]=e.data},wipe:function(t){t.requests={}}}});r["a"].use(Ot["a"]);var Rt=new Ot["a"].Store({state:{endpoint:"https://ufatop1.net/wp-json/wp/v2"},mutations:{updateEndpoint:function(t,e){t.endpoint=e,u.$emit("clearError"),u.$emit("bumpViewKey","Updating content...")}},modules:{cache:jt}});r["a"].mixin(ft),r["a"].use(o.a,{id:"UA-204980691-1",router:kt}),new r["a"]({el:"#app",router:kt,store:Rt,render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("5387")},"661c":function(t,e,n){},"8fd6":function(t,e,n){"use strict";n("94a9")},"92b1":function(t,e,n){},"92ff":function(t,e,n){},"94a9":function(t,e,n){},"9ef3":function(t,e,n){},a3e3:function(t,e,n){"use strict";n("4185")},a5fa:function(t,e,n){},d89d:function(t,e,n){"use strict";n("2401")},edff:function(t,e,n){"use strict";n("92ff")}});
//# sourceMappingURL=app.3f087536.js.map