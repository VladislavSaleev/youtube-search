(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2658fd83"],{"0b9a":function(t,e,r){"use strict";r("7cd7")},"498a":function(t,e,r){"use strict";var a=r("23e7"),s=r("58a8").trim,n=r("c8d2");a({target:"String",proto:!0,forced:n("trim")},{trim:function(){return s(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("e330"),s=r("1d80"),n=r("577e"),i=r("5899"),c=a("".replace),o="["+i+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var r=n(s(e));return 1&t&&(r=c(r,u,"")),2&t&&(r=c(r,l,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},"7cd7":function(t,e,r){},"85b6":function(t,e,r){},c8d2:function(t,e,r){var a=r("5e77").PROPER,s=r("d039"),n=r("5899"),i="​᠎";t.exports=function(t){return s((function(){return!!n[t]()||i[t]()!==i||a&&n[t].name!==t}))}},cd56:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.currentUser?r("div",{staticClass:"wrapper"},[r("el-row",{staticClass:"search__title",style:t.isSearched?"margin: 20px 0 20px;":"margin: 250px 0 20px",attrs:{type:"flex",justify:t.isSearched?"start":"center"}},[r("el-col",{style:t.isSearched?"text-align: start;":"text-align: center;",attrs:{span:4}},[r("h2",[t._v("Поиск видео")])])],1),r("el-row",{attrs:{type:"flex",justify:t.isSearched?"start":"center",gutter:10}},[r("el-col",{attrs:{span:t.isSearched?21:13}},[r("el-input",{attrs:{placeholder:"Что хотите посмотреть?",value:t.currentQuery},on:{input:t.updateCurrentQuery}})],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{type:"primary"},on:{click:t.getVideos}},[t._v("Найти")])],1),t.isSearched?r("el-col",{attrs:{span:1}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-star-off",circle:""},on:{click:t.openModal}})],1):t._e()],1),t.isSearched?r("div",{staticClass:"content"},[r("el-row",{staticClass:"content__header",attrs:{type:"flex",justify:"space-around"}},[r("el-col",{staticClass:"content__header__text",attrs:{span:22}},[r("h4",[t._v('Видео по запросу: "'+t._s(t.currentQuery.trim())+'"')])]),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{icon:"el-icon-s-unfold",circle:""},on:{click:function(e){return t.updateVideoDisplayStyle("list")}}}),r("el-button",{attrs:{icon:"el-icon-menu",circle:""},on:{click:function(e){return t.updateVideoDisplayStyle("card")}}})],1)],1),r("VideoList",{attrs:{videos:t.videos}}),r("Modal")],1):t._e()],1):r("NotAuthorized",{staticClass:"wrapper"})},s=[],n=r("1da1"),i=r("5530"),c=(r("96cf"),r("498a"),r("bc3a")),o=r.n(c),u=r("2f62"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["list"===t.videoDisplayStyle?r("div",t._l(t.searchedVideos.items,(function(e,a){return r("el-row",{key:a,staticClass:"video",attrs:{type:"flex",justify:"start",gutter:50}},[r("el-col",{attrs:{span:4}},[r("a",{attrs:{href:t.rootVideoUrl+e.id.videoId,target:"_blank"}},[r("img",{staticClass:"video__img",attrs:{src:e.snippet.thumbnails.medium.url,alt:"image"}})])]),r("el-col",{staticClass:"video__text",attrs:{span:14}},[r("h3",{staticClass:"video__text__top"},[r("a",{attrs:{href:t.rootVideoUrl+e.id.videoId,target:"_blank"}},[t._v(t._s(e.snippet.title))])]),r("div",{staticClass:"video__text__bottom"},[r("span",{staticClass:"video__text__bottom__bts"},[r("a",{attrs:{href:t.rootChannelUrl+e.snippet.channelId,target:"_blank"}},[t._v(" "+t._s(e.snippet.channelTitle)+" ")])]),r("span",{staticClass:"video__text__bottom__bts"},[t._v(t._s(e.snippet.publishTime.slice(0,10).split("-").reverse().join(".")))])])])],1)})),1):t._e(),"card"===t.videoDisplayStyle?r("div",{staticClass:"card__wrapper"},t._l(t.searchedVideos.items,(function(e,a){return r("div",{key:a,staticClass:"card"},[r("a",{attrs:{href:t.rootVideoUrl+e.id.videoId,target:"_blank"}},[r("img",{staticClass:"card__img",attrs:{src:e.snippet.thumbnails.medium.url,alt:"img"}})]),r("h3",{staticClass:"card__title"},[r("a",{attrs:{href:t.rootVideoUrl+e.id.videoId,target:"_blank"}},[t._v(" "+t._s(e.snippet.title)+" ")])]),r("div",{staticClass:"card__bottom"},[r("span",{staticClass:"card__bottom__bts"},[r("a",{attrs:{href:t.rootChannelUrl+e.snippet.channelId,target:"_blank"}},[t._v(" "+t._s(e.snippet.channelTitle)+" ")])]),r("span",{staticClass:"card__bottom__bts"},[t._v(t._s(e.snippet.publishTime.slice(0,10).split("-").reverse().join(".")))])])])})),0):t._e()])},d=[],p={data:function(){return{rootVideoUrl:"https://www.youtube.com/watch?v=",rootChannelUrl:"https://www.youtube.com/channel/"}},props:{videos:{type:Object}},computed:Object(i["a"])({},Object(u["c"])({videoDisplayStyle:function(t){return t.videoDisplayStyle},searchedVideos:function(t){return t.searchedVideos}}))},_=p,h=(r("fa5c"),r("2877")),f=Object(h["a"])(_,l,d,!1,null,"85cb9754",null),v=f.exports,m=r("4e3f"),b=r("714b"),y={components:{VideoList:v,NotAuthorized:m["a"],Modal:b["a"]},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["updateFavorites","updateIsSearched","updateVideoDisplayStyle","updateShowModal","updateCurrentQuery","updateCurrentName","updateCurrentOrder","updateCurrentMaxResults","updateSearchedVideos"])),{},{getVideos:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("https://youtube.googleapis.com/youtube/v3/search",{params:{part:"snippet",q:t.currentQuery.trim(),order:"relevance",maxResults:12,key:t.currentUser.APIKey}});case 3:r=e.sent,console.log(r.data),t.updateSearchedVideos(r.data),t.updateIsSearched(!0),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.$message.error(e.t0.response.data.error.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},openModal:function(){""!==this.currentQuery.trim()?(this.updateCurrentQuery(this.currentQuery.trim()),this.updateCurrentName(this.currentQuery.trim()),this.updateCurrentOrder("relevance"),this.updateCurrentMaxResults(12),this.updateShowModal(!0)):this.$message.error("Запрос не может быть пустым.")}}),computed:Object(i["a"])({},Object(u["c"])({currentUser:function(t){return t.currentUser},isSearched:function(t){return t.isSearched},currentQuery:function(t){return t.currentQuery}}))},g=y,C=(r("0b9a"),Object(h["a"])(g,a,s,!1,null,"3de58810",null));e["default"]=C.exports},fa5c:function(t,e,r){"use strict";r("85b6")}}]);
//# sourceMappingURL=chunk-2658fd83.30685dfa.js.map