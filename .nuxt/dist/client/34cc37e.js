(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(t,e,r){"use strict";r.d(e,"d",(function(){return c})),r.d(e,"f",(function(){return o})),r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return d}));var n=r(67),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})}},199:function(t,e,r){var n=r(3),c=r(32),o=r(10),l=r(200),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},200:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(t,e,r){var n=r(3),c=r(210);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},210:function(t,e,r){var n=r(5).parseInt,c=r(199).trim,o=r(200),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},211:function(t,e,r){"use strict";var n=r(5),c=r(25),o=r(26),l=r(131),f=r(68),v=r(10),d=r(51).f,m=r(52).f,_=r(12).f,h=r(199).trim,C="Number",O=n[C],y=O,x=O.prototype,k=o(r(87)(x))==C,j="trim"in String.prototype,E=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=j?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!O(" 0o1")||!O("0b1")||O("+0x1")){O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(k?v((function(){x.valueOf.call(r)})):o(r)!=C)?l(new y(E(e)),r,O):E(e)};for(var I,w=r(7)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;w.length>N;N++)c(y,I=w[N])&&!c(O,I)&&_(O,I,m(y,I));O.prototype=x,x.constructor=O,r(14)(n,C,O)}},272:function(t,e,r){"use strict";r.r(e);var n=r(22),c=r(11),o=r(4),l=(r(36),r(209),r(211),r(38),r(15),r(39),r(37),r(23),r(24),r(49),r(50),r(195)),f=r(67),v=r(48);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"HomeIndex",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,d,m,_,h,C,O,y,x,k,j,E,I;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number.parseInt(r.page||1),v=20,d=r.tag,m=r.tab,_=void 0===m?"global_feed":m,h=n.state.user&&"your_feed"===_?l.f:l.d,e.next=7,Promise.all([h({limit:v,offset:(o-1)*v,tag:d}),Object(f.b)({method:"GET",url:"/api/tags"})]);case 7:return C=e.sent,O=Object(c.a)(C,2),y=O[0],x=O[1],k=y.data,j=k.articles,E=k.articlesCount,I=x.data.tags,j.forEach((function(t){return t.favoriteDisabled=!1})),e.abrupt("return",{articles:j,articlesCount:E,limit:v,page:o,tags:I,tag:d,tab:_});case 15:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:m(m({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.b)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(l.a)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(30),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[t._m(0),t._v(" "),e("div",{staticClass:"container page"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"feed-toggle"},[e("ul",{staticClass:"nav nav-pills outline-active"},[t.user?e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tag"}}}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return e("div",{key:article.slug,staticClass:"article-preview"},[e("div",{staticClass:"article-meta"},[e("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[e("img",{attrs:{src:article.author.image}})]),t._v(" "),e("div",{staticClass:"info"},[e("nuxt-link",{staticClass:"author",attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),e("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[e("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),e("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[e("h1",[t._v(t._s(article.title))]),t._v(" "),e("p",[t._v(t._s(article.description))]),t._v(" "),e("span",[t._v("Read more...")])])],1)})),t._v(" "),e("nav",[e("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(r){return e("li",{key:r,staticClass:"page-item ng-scope",class:{active:r===t.page}},[e("nuxt-link",{staticClass:"page-link ng-binding",attrs:{to:{name:"home",query:{page:r,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(r))])],1)})),0)])],2),t._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"sidebar"},[e("p",[t._v("Popular Tags")]),t._v(" "),e("div",{staticClass:"tag-list"},t._l(t.tags,(function(r){return e("nuxt-link",{key:r,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:r,tab:"tag"}}}},[t._v("\n              "+t._s(r)+"\n            ")])})),1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),e("p",[t._v("A place to share your knowledge.")])])])}],!1,null,"5f1b7e8b",null);e.default=component.exports}}]);