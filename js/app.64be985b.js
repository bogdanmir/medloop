(function(e){function t(t){for(var a,o,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d22bcc3":"e26e5111","chunk-3ef80558":"2fce1389","chunk-490a14fe":"6aec0c20","chunk-6597b36d":"5f4ca4a1","chunk-24b44a91":"3efc691a","chunk-4060c501":"dba48fd4","chunk-23385358":"80fd5dea","chunk-45389511":"1d8f7815","chunk-7049ec69":"682a9e46","chunk-2643b84b":"893211bd"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-490a14fe":1,"chunk-24b44a91":1,"chunk-23385358":1,"chunk-45389511":1,"chunk-7049ec69":1,"chunk-2643b84b":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d22bcc3":"31d6cfe0","chunk-3ef80558":"31d6cfe0","chunk-490a14fe":"fd79da1b","chunk-6597b36d":"31d6cfe0","chunk-24b44a91":"71f72053","chunk-4060c501":"31d6cfe0","chunk-23385358":"17767f07","chunk-45389511":"9a153a2c","chunk-7049ec69":"eb2c40eb","chunk-2643b84b":"44c89856"}[e]+".css",r=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1dff":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return r}));var a={},o={},r={app:{appName:"Vuexy",appLogoImage:n("ed29")},layout:{isRTL:!1,skin:"light",routerTransition:"zoom-fade",type:"vertical",contentWidth:"full",menu:{hidden:!1,isCollapsed:!1},navbar:{type:"floating",backgroundColor:""},footer:{type:"static"},customizer:!0,enableScrollToTop:!0}}},4131:function(e,t,n){},4360:function(e,t,n){"use strict";var a=n("2b0e"),o=n("2f62"),r=n("1dff"),c={namespaced:!0,state:{windowWidth:0,shallShowOverlay:!1},getters:{currentBreakPoint:function(e){var t=e.windowWidth;return t>=r["a"].xl?"xl":t>=r["a"].lg?"lg":t>=r["a"].md?"md":t>=r["a"].sm?"sm":"xs"}},mutations:{UPDATE_WINDOW_WIDTH:function(e,t){e.windowWidth=t},TOGGLE_OVERLAY:function(e,t){e.shallShowOverlay=void 0!==t?t:!e.shallShowOverlay}},actions:{}},u=(n("ac1f"),n("466d"),{namespaced:!0,state:{layout:{isRTL:r["c"].layout.isRTL,skin:localStorage.getItem("vuexy-skin")||r["c"].layout.skin,routerTransition:r["c"].layout.routerTransition,type:r["c"].layout.type,contentWidth:r["c"].layout.contentWidth,menu:{hidden:r["c"].layout.menu.hidden},navbar:{type:r["c"].layout.navbar.type,backgroundColor:r["c"].layout.navbar.backgroundColor},footer:{type:r["c"].layout.footer.type}}},getters:{},mutations:{TOGGLE_RTL:function(e){e.layout.isRTL=!e.layout.isRTL,document.documentElement.setAttribute("dir",e.layout.isRTL?"rtl":"ltr")},UPDATE_SKIN:function(e,t){e.layout.skin=t,localStorage.setItem("vuexy-skin",t),"dark"===t?document.body.classList.add("dark-layout"):document.body.className.match("dark-layout")&&document.body.classList.remove("dark-layout")},UPDATE_ROUTER_TRANSITION:function(e,t){e.layout.routerTransition=t},UPDATE_LAYOUT_TYPE:function(e,t){e.layout.type=t},UPDATE_CONTENT_WIDTH:function(e,t){e.layout.contentWidth=t},UPDATE_NAV_MENU_HIDDEN:function(e,t){e.layout.menu.hidden=t},UPDATE_NAVBAR_CONFIG:function(e,t){Object.assign(e.layout.navbar,t)},UPDATE_FOOTER_CONFIG:function(e,t){Object.assign(e.layout.footer,t)}},actions:{}}),i={namespaced:!0,state:{isVerticalMenuCollapsed:r["c"].layout.menu.isCollapsed},getters:{},mutations:{UPDATE_VERTICAL_MENU_COLLAPSED:function(e,t){e.isVerticalMenuCollapsed=t}},actions:{}},s=(n("c740"),n("e9c4"),n("7db0"),n("d3b7"),{state:{users:[{id:"94723",practice:"Family & Wellness Medicine, LLC",addresses:["34004 16th Ave. S., Ste. 100 Federal Way, WA 98003"],email:["wsomerlie1l@accuweather.com"],status:"Active",actions:"View",phones:["253-944-1223","253-944-1223"],city:"",state:"",country:"",zipCode:"",fax:["253-944-1255"],webSite:"",EHRSystem:"",startDate:"",endDate:"",contacts:[{name:"",position:"",phone:"",email:""}]},{id:"35471",practice:"Focus Health DPC",addresses:["2522 N. Proctor St., #228 Tacoma, WA 98406"],email:[],status:"Active",actions:"View",phones:["206-372-3194"],city:"",state:"",country:"",zipCode:"",fax:[],webSite:"",EHRSystem:"",startDate:"",endDate:"",contacts:[{name:"",position:"",phone:"",email:""}]},{id:"98756",practice:"The Manette Clinic",addresses:["1100 Wheaton Way, Ste. F and G Bremerton, WA 98310"],email:["wsomerlie1l@accuweather.com"],status:"Active",actions:"View",phones:[],city:"",state:"",country:"",zipCode:"",fax:["253-944-1255"],webSite:"",EHRSystem:"",startDate:"",endDate:"",contacts:[{name:"",position:"",phone:"",email:""}]},{id:"65487",practice:"Nurture Well Center",addresses:["34004 16th Ave. S., Ste. 100 Federal Way, WA 98003"],email:["wsomerlie1l@accuweather.com"],status:"Inactive",actions:"View",phones:["253-944-1223"],city:"",state:"",country:"",zipCode:"",fax:["253-944-1255"],webSite:"",EHRSystem:"",startDate:"",endDate:"",contacts:[{name:"",position:"",phone:"",email:""}]},{id:"48971",practice:"Family & Wellness Medicine, LLC",addresses:["1100 Wheaton Way, Ste. F and G Bremerton, WA 98310"],email:["wsomerlie1l@accuweather.com"],status:"Inactive",actions:"View",phones:["253-944-1223"],city:"",state:"",country:"",zipCode:"",fax:["253-944-1255"],webSite:"",EHRSystem:"",startDate:"",endDate:"",contacts:[{name:"",position:"",phone:"",email:""}]}]},mutations:{saveUser:function(e,t){console.log(t);var n=e.users.findIndex((function(e){return e.id==t.id}));e.users[n]=JSON.parse(JSON.stringify(t))}},actions:{},getters:{getUsers:function(e){return e.users},getUser:function(e){return function(t){return e.users.find((function(e){return e.id==t}))}}}});a["default"].use(o["a"]);t["a"]=new o["a"].Store({modules:{app:c,appConfig:u,verticalMenu:i,users:s},strict:Object({NODE_ENV:"production",BASE_URL:"/"}).DEV})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,r=n("2b0e"),c=n("51c2"),u=n("dbbe"),i=n("ed09"),s=n("a18c"),l=n("4360"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-100",class:[e.skinClasses],attrs:{id:"app"}},[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},f=[],p=(n("d3b7"),n("3ca3"),n("ddb0"),n("498a"),n("a9e3"),n("fb6a"),n("1dff")),m=n("04b0"),b=n("b8f2"),h=n("16ce"),y=function(){return Promise.all([n.e("chunk-6597b36d"),n.e("chunk-4060c501"),n.e("chunk-23385358"),n.e("chunk-45389511")]).then(n.bind(null,"03d1"))},g=function(){return Promise.all([n.e("chunk-6597b36d"),n.e("chunk-4060c501"),n.e("chunk-23385358"),n.e("chunk-7049ec69")]).then(n.bind(null,"2607"))},v=function(){return n.e("chunk-2d22bcc3").then(n.bind(null,"f102"))},T={components:{LayoutHorizontal:g,LayoutVertical:y,LayoutFull:v},computed:{layout:function(){return"full"===this.$route.meta.layout?"layout-full":"layout-".concat(this.contentLayoutType)},contentLayoutType:function(){return this.$store.state.appConfig.layout.type}},beforeCreate:function(){for(var e=["primary","secondary","success","info","warning","danger","light","dark"],t=0,n=e.length;t<n;t++)p["b"][e[t]]=Object(h["a"])("--".concat(e[t]),document.documentElement).value.trim();for(var a=["xs","sm","md","lg","xl"],o=0,r=a.length;o<r;o++)p["a"][a[o]]=Number(Object(h["a"])("--breakpoint-".concat(a[o]),document.documentElement).value.slice(0,-2));var c=p["c"].layout.isRTL;document.documentElement.setAttribute("dir",c?"rtl":"ltr")},setup:function(){var e=Object(b["a"])(),t=e.skin,n=e.skinClasses;"dark"===t.value&&document.body.classList.add("dark-layout"),Object(m["provideToast"])({hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),l["a"].commit("app/UPDATE_WINDOW_WIDTH",window.innerWidth);var a=Object(h["b"])(),o=a.width;return Object(i["watch"])(o,(function(e){l["a"].commit("app/UPDATE_WINDOW_WIDTH",e)})),{skinClasses:n}}},k=T,O=n("2877"),C=Object(O["a"])(k,d,f,!1,null,null,null),E=C.exports,_=(n("b0c0"),n("5530")),A=n("0a35"),w={name:"FeatherIcon",functional:!0,props:{icon:{required:!0,type:[String,Object]},size:{type:String,default:"14"},badge:{type:[String,Object,Number],default:null},badgeClasses:{type:[String,Object,Array],default:"badge-primary"}},render:function(e,t){var n=t.props,a=t.data,o=e(A[n.icon],Object(_["a"])({props:{size:n.size}},a));if(!n.badge)return o;var r=e("span",{staticClass:"badge badge-up badge-pill",class:n.badgeClasses},[n.badge]);return e("span",{staticClass:"feather-icon position-relative"},[o,r])}},D=w,S=(n("8bd0"),Object(O["a"])(D,a,o,!1,null,null,null)),N=S.exports;r["default"].component(N.name,N);var P=n("2b88"),L=n.n(P);r["default"].use(L.a);var j=n("6c42");n("cc0f");r["default"].use(j["default"],{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:3e3,transition:"Vue-Toastification__fade"}),r["default"].use(c["a"]),r["default"].use(u["a"]),r["default"].use(i["default"]),n("4131"),n("78a7"),r["default"].config.productionTip=!1,new r["default"]({router:s["a"],store:l["a"],render:function(e){return e(E)}}).$mount("#app")},"602d4":function(e,t,n){},"78a7":function(e,t,n){},"8bd0":function(e,t,n){"use strict";n("602d4")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),o=n("8c4f");a["default"].use(o["a"]);var r=new o["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",name:"scrubber-page",component:function(){return n.e("chunk-3ef80558").then(n.bind(null,"f0f1"))},meta:{pageTitle:"Scrubber",breadcrumb:[{text:"Scrubber",active:!0}]}},{path:"/",name:"practices-page",component:function(){return Promise.all([n.e("chunk-6597b36d"),n.e("chunk-4060c501"),n.e("chunk-2643b84b")]).then(n.bind(null,"1b7a"))},meta:{pageTitle:"Practices",breadcrumb:[{text:"Practices",active:!0}]}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-6597b36d"),n.e("chunk-24b44a91")]).then(n.bind(null,"a55b"))},meta:{layout:"full"}},{path:"/error-404",name:"error-404",component:function(){return n.e("chunk-490a14fe").then(n.bind(null,"d80f"))},meta:{layout:"full"}},{path:"*",redirect:"error-404"}]});r.afterEach((function(){var e=document.getElementById("loading-bg");e&&(e.style.display="none")})),t["a"]=r},b8f2:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("ed09"),o=n("4360");function r(){var e=Object(a["computed"])({get:function(){return o["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){o["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),t=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.isRTL},set:function(e){o["a"].commit("appConfig/TOGGLE_RTL",e)}}),n=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.skin},set:function(e){o["a"].commit("appConfig/UPDATE_SKIN",e)}}),r=Object(a["computed"])((function(){return"bordered"===n.value?"bordered-layout":"semi-dark"===n.value?"semi-dark-layout":null})),c=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.routerTransition},set:function(e){o["a"].commit("appConfig/UPDATE_ROUTER_TRANSITION",e)}}),u=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.type},set:function(e){o["a"].commit("appConfig/UPDATE_LAYOUT_TYPE",e)}});Object(a["watch"])(u,(function(e){"horizontal"===e&&"semi-dark"===n.value&&(n.value="light")}));var i=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.contentWidth},set:function(e){o["a"].commit("appConfig/UPDATE_CONTENT_WIDTH",e)}}),s=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.menu.hidden},set:function(e){o["a"].commit("appConfig/UPDATE_NAV_MENU_HIDDEN",e)}}),l=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.backgroundColor},set:function(e){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{backgroundColor:e})}}),d=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.navbar.type},set:function(e){o["a"].commit("appConfig/UPDATE_NAVBAR_CONFIG",{type:e})}}),f=Object(a["computed"])({get:function(){return o["a"].state.appConfig.layout.footer.type},set:function(e){o["a"].commit("appConfig/UPDATE_FOOTER_CONFIG",{type:e})}});return{isVerticalMenuCollapsed:e,isRTL:t,skin:n,skinClasses:r,routerTransition:c,navbarBackgroundColor:l,navbarType:d,footerType:f,layoutType:u,contentWidth:i,isNavMenuHidden:s}}},cc0f:function(e,t,n){},ed29:function(e,t,n){e.exports=n.p+"img/logo.36f34a9f.svg"}});
//# sourceMappingURL=app.64be985b.js.map