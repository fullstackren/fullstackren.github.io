(window.webpackJsonp=window.webpackJsonp||[]).push([[12,17,18],{241:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return h})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));n(90);const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function p(t){if(u(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return s.test(i)?t:i+".html"+n}function f(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function d(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return d(n,e,r);if(Array.isArray(e))return Object.assign(d(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},248:function(t,e){t.exports=function(t){return null==t}},251:function(t,e,n){},252:function(t,e,n){},265:function(t,e,n){"use strict";n(251)},266:function(t,e,n){var r=n(11),i=n(4),s=n(10);t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&"[object String]"==r(t)}},267:function(t,e,n){"use strict";n(252)},268:function(t,e,n){},275:function(t,e,n){"use strict";n.r(e);var r=n(248),i=n.n(r),s=n(241),a={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:r="master",docsRepo:s=e}=this.$site.themeConfig;return t&&s&&this.$page.relativePath?this.createEditLink(e,s,n,r,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,r,i){if(/bitbucket.org/.test(t)){return(s.i.test(e)?e:t).replace(s.a,"")+"/src"+`/${r}/`+(n?n.replace(s.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${r}&fileviewer=file-view-default`}return(s.i.test(e)?e:"https://github.com/"+e).replace(s.a,"")+"/edit"+`/${r}/`+(n?n.replace(s.a,"")+"/":"")+i}}},o=(n(265),n(14)),u=Object(o.a)(a,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=u.exports},276:function(t,e,n){"use strict";n.r(e);n(90);var r=n(241),i=n(266),s=n.n(i),a=n(248),o=n.n(a),u={name:"PageNav",props:["sidebarItems"],computed:{prev(){return l(c.PREV,this)},next(){return l(c.NEXT,this)}}};const c={NEXT:{resolveLink:function(t,e){return p(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return p(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function l(t,{$themeConfig:e,$page:n,$route:i,$site:a,sidebarItems:u}){const{resolveLink:c,getThemeLinkConfig:l,getPageLinkConfig:p}=t,f=l(e),d=p(n),h=o()(d)?f:d;return!1===h?void 0:s()(h)?Object(r.k)(a.pages,h,i.path):c(n,u)}function p(t,e,n){const r=[];!function t(e,n){for(let r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(let e=0;e<r.length;e++){const i=r[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return r[e+n]}}var f=u,d=(n(267),n(14)),h=Object(d.a)(f,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?e("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))]):t._e()],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},[t.next?e("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=h.exports},281:function(t,e,n){"use strict";n(268)},292:function(t,e,n){"use strict";n.r(e);var r=n(275),i=n(276),s={components:{PageEdit:r.default,PageNav:i.default},data:()=>({}),async mounted(){},computed:{},props:["sidebarItems"]},a=(n(281),n(14)),o=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"page",class:t.$page.frontmatter.single?"page-single":""},[t._t("top"),t._v(" "),e("div",{class:{"theme-default-content":!0}},[e("Content")],1),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports}}]);