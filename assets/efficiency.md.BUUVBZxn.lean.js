import{d as g,p as k,B as b,o as d,b as A,e as _,R as N,c as v,C as w,F as y,K as E,j as e,a,G as s,k as o}from"./chunks/framework.zajLutfY.js";/* empty css                                                               */const u="fullstackren-efficiency-links",C=g({__name:"DfNavEfficiencyLatest",setup(p){const t=k((()=>{if(!N)return[];const c=localStorage.getItem(u);if(c)try{return JSON.parse(c)}catch{return[]}return[]})()),r=c=>{let n=t.value.filter(i=>i.link!==c.link);n.unshift(c),n.length>4&&(n=n.slice(0,4)),localStorage.setItem(u,JSON.stringify(n)),t.value=n};return(c,n)=>{const i=b("DfNavLinks");return t.value.length?(d(),A(i,{key:0,title:"最近使用",onNavClick:r,items:t.value},null,8,["items"])):_("",!0)}}}),f="fullstackren-efficiency-links",l=g({__name:"DfNavEfficiency",props:{data:{}},setup(p){const h=()=>{if(!N)return[];const n=localStorage.getItem(f);if(n)try{return JSON.parse(n)}catch{return[]}return[]},t=p,r=k(h()),c=n=>{let i=r.value.filter(m=>m.link!==n.link);i.unshift(n),i.length>4&&(i=i.slice(0,4)),localStorage.setItem(f,JSON.stringify(i)),r.value=i};return(n,i)=>{const m=b("DfNavLinks");return d(!0),v(y,null,w(t.data,I=>(d(),A(m,E({ref_for:!0},I,{onNavClick:c}),null,16))),256)}}}),x=[{title:"",items:[{title:"ChatGPT",link:"https://chatgpt.com/chat",icon:"/icons/chatgpt.png",badge:"AI"},{title:"通义千问",link:"https://tongyi.aliyun.com/qianwen/",icon:"/icons/tongyi.png",badge:"AI"},{title:"豆包",link:"https://www.doubao.com/chat/",icon:"/icons/doubao.png",badge:"AI"},{title:"文心一言",link:"https://www.doubao.com/chat/",icon:"/icons/yiyan.png",badge:"AI"},{title:"Kimi.ai",link:"https://kimi.moonshot.cn/",desc:"超长文本对话。",icon:"icons/kimi.ico",badge:"AI"},{title:"智谱清言",link:"https://chatglm.cn/?lang=zh",desc:"超长文本对话。",icon:"/icons/chatglm.png",badge:"AI"}]}],S=[{title:"",items:[{title:"Carbon",desc:"代码图片生成。",link:"https://carbon.now.sh",icon:"/icons/carbon.png"},{title:"TinyPNG",desc:"图片压缩工具。",link:"https://tinypng.com",icon:"https://tinypng.com/images/apple-touch-icon.png"},{title:"Squoosh",desc:"基于浏览器的本地图片压缩工具（支持自定义参数和格式转换）。",link:"https://squoosh.app/",icon:"/icons/squoosh.png"},{title:"Shields.io",desc:"制作简洁、一致、易读的徽章。",link:"https://shields.io/",icon:"/icons/shields.png"},{title:"Midjourney",link:"https://www.midjourney.com/",icon:"/icons/midjourney.png",badge:"AI"},{title:"Excalidraw",desc:"手绘风格流程图",link:"https://excalidraw.com",icon:"/icons/excalidraw.ico"}]}],T=[{title:"",items:[{title:"Git",desc:"Git。",link:"/tool/version-control/git/",icon:"/icons/git.png",badge:""}]}],D=[{title:"",items:[{title:"Notion AI",link:"https://www.notion.so/",icon:"/icons/notion.png"}]}],P=[{title:"",items:[{title:"npm 库在线执行",desc:"在浏览器控制台中在线运行调试与测试 npm 中的库",link:"https://npm.devtool.tech",icon:"https://npm.devtool.tech/logo.svg"},{title:"Json 中文网",desc:"JSON 在线解析及格式化验证",link:"https://www.json.cn",icon:"/icons/json-cn.ico"},{icon:"https://transform.tools/static/favicon.png",title:"transform",desc:"一个支持多语言的在线转换器",link:"https://transform.tools/json-schema-to-typescript"}]}],O=[{title:"",items:[{title:"Vitepress",desc:"是一个静态网站生成器，它基于 VuePress，并使用 Vite 作为构建工具。",link:"https://www.fullstack.ren/tool/vitepress",icon:"https://vitepress.dev/vitepress-logo-mini.svg"}]}],L=[{title:"",items:[{title:"Can I use",desc:"前端 API 兼容性查询。",link:"https://caniuse.com/",icon:"https://caniuse.com/img/favicon-128.png"},{title:"npm trends",desc:"比较 npm package 的大小、下载数据、github 数据等。",link:"https://npmtrends.com/",icon:"/icons/npm-trends.png"}]}],F=[{title:"",items:[{title:"懒人 Excel",desc:"Excel 函数公式、操作技巧、数据分析、图表模板、VBA、数据透视表教程。",link:"https://www.lanrenexcel.com/excel-shortcuts/",icon:"/icons/lanrenexcel.png"}]}],R=[{title:"",items:[{title:"开发者武器库",desc:"开发者武器库，做开发者最专业最好用的专业工具箱",link:"https://devtool.tech",icon:"https://devtool.tech/logo.svg"},{title:"在线工具",desc:"开发人员的工具箱",link:"https://tool.lu",icon:"https://tool.lu/favicon.ico"}]}],j=JSON.parse('{"title":"工具提效","description":"工具提效是由江湖制作并收录了大量高质量的工具，为开发工程师提供最简单、便捷的工具服务","frontmatter":{"description":"工具提效是由江湖制作并收录了大量高质量的工具，为开发工程师提供最简单、便捷的工具服务","layoutClass":"df-nav-layout","outline":[2,3,4]},"headers":[],"relativePath":"efficiency.md","filePath":"efficiency.md"}'),G={name:"efficiency.md"},B=Object.assign(G,{setup(p){return(h,t)=>(d(),v("div",null,[t[0]||(t[0]=e("h1",{id:"工具提效",tabindex:"-1"},[a("工具提效 "),e("a",{class:"header-anchor",href:"#工具提效","aria-label":'Permalink to "工具提效"'},"​")],-1)),s(C),t[1]||(t[1]=e("h2",{id:"问答",tabindex:"-1"},[a("问答 "),e("a",{class:"header-anchor",href:"#问答","aria-label":'Permalink to "问答"'},"​")],-1)),s(l,{data:o(x)},null,8,["data"]),t[2]||(t[2]=e("h2",{id:"图形图像",tabindex:"-1"},[a("图形图像 "),e("a",{class:"header-anchor",href:"#图形图像","aria-label":'Permalink to "图形图像"'},"​")],-1)),s(l,{data:o(S)},null,8,["data"]),t[3]||(t[3]=e("h2",{id:"笔记",tabindex:"-1"},[a("笔记 "),e("a",{class:"header-anchor",href:"#笔记","aria-label":'Permalink to "笔记"'},"​")],-1)),s(l,{data:o(D)},null,8,["data"]),t[4]||(t[4]=e("h2",{id:"版本控制",tabindex:"-1"},[a("版本控制 "),e("a",{class:"header-anchor",href:"#版本控制","aria-label":'Permalink to "版本控制"'},"​")],-1)),s(l,{data:o(T)},null,8,["data"]),t[5]||(t[5]=e("h2",{id:"在线调试",tabindex:"-1"},[a("在线调试 "),e("a",{class:"header-anchor",href:"#在线调试","aria-label":'Permalink to "在线调试"'},"​")],-1)),s(l,{data:o(P)},null,8,["data"]),t[6]||(t[6]=e("h2",{id:"站点搭建",tabindex:"-1"},[a("站点搭建 "),e("a",{class:"header-anchor",href:"#站点搭建","aria-label":'Permalink to "站点搭建"'},"​")],-1)),s(l,{data:o(O)},null,8,["data"]),t[7]||(t[7]=e("h2",{id:"数据查询",tabindex:"-1"},[a("数据查询 "),e("a",{class:"header-anchor",href:"#数据查询","aria-label":'Permalink to "数据查询"'},"​")],-1)),s(l,{data:o(L)},null,8,["data"]),t[8]||(t[8]=e("h2",{id:"职场办公",tabindex:"-1"},[a("职场办公 "),e("a",{class:"header-anchor",href:"#职场办公","aria-label":'Permalink to "职场办公"'},"​")],-1)),s(l,{data:o(F)},null,8,["data"]),t[9]||(t[9]=e("h2",{id:"工具集合",tabindex:"-1"},[a("工具集合 "),e("a",{class:"header-anchor",href:"#工具集合","aria-label":'Permalink to "工具集合"'},"​")],-1)),s(l,{data:o(R)},null,8,["data"])]))}});export{j as __pageData,B as default};
