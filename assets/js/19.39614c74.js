(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{310:function(t,v,s){t.exports=s.p+"assets/img/monolithic-architecture.771a45e2.png"},311:function(t,v,s){t.exports=s.p+"assets/img/distributed-architecture.4da1e39b.png"},312:function(t,v,s){t.exports=s.p+"assets/img/microservice-architecture.df29560b.png"},313:function(t,v,s){t.exports=s.p+"assets/img/serverless-architecture.2ad83993.png"},372:function(t,v,s){"use strict";s.r(v);var _=s(14),i=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"后端架构演进"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后端架构演进"}},[t._v("#")]),t._v(" 后端架构演进")]),t._v(" "),v("h2",{attrs:{id:"单体架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单体架构"}},[t._v("#")]),t._v(" 单体架构")]),t._v(" "),v("p",[t._v("单体架构比较初级，典型的三级架构，比如 Java Spring mvc 或 Python Django 框架应用。架构图如下所示：")]),t._v(" "),v("img",{staticClass:"article-image",attrs:{src:s(310),width:"50%"}}),t._v(" "),v("p",[t._v("单体架构的应用比较容易部署和测试。项目初期可以很好运行，但随着需求不断增加，越多的人加入开发团队，代码库也在膨胀，单体应用变得臃肿，可维护性、灵活性逐渐减低。具体表现为：")]),t._v(" "),v("ul",[v("li",[t._v("复杂性高")]),t._v(" "),v("li",[t._v("技术债务")]),t._v(" "),v("li",[t._v("部署频率低")]),t._v(" "),v("li",[t._v("可靠性差")]),t._v(" "),v("li",[t._v("扩展能力受限")]),t._v(" "),v("li",[t._v("阻碍技术创新")])]),t._v(" "),v("h2",{attrs:{id:"分布式应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式应用"}},[t._v("#")]),t._v(" 分布式应用")]),t._v(" "),v("p",[t._v("分布式架构是将中间层和数据库进行分布式，将一个大的系统拆分成多个业务子系统，业务子系统分别部署在不同的服务器上，各业务模块之间通过接口进行数据交互。其代表有 redis、ES、solor等。")]),t._v(" "),v("img",{staticClass:"article-image",attrs:{src:s(311),width:"50%"}}),t._v(" "),v("p",[t._v("分布式架构提供了负载均衡的能力，解决了网站高并发的需求。包含以下特点：")]),t._v(" "),v("ul",[v("li",[t._v("降低了耦合度")]),t._v(" "),v("li",[t._v("责任清晰")]),t._v(" "),v("li",[t._v("扩展方便")]),t._v(" "),v("li",[t._v("部署方便")]),t._v(" "),v("li",[t._v("提高代码的复用性")])]),t._v(" "),v("p",[t._v("缺点：\n系统之间的交互要使用远程通信，接口开发增大工作量，但是利大于弊。")]),t._v(" "),v("h2",{attrs:{id:"微服务架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[t._v("#")]),t._v(" 微服务架构")]),t._v(" "),v("p",[t._v("微服务架构将系统拆分成多个小应用（微服务），每个服务完成一个功能，微服务可部署在不同服务器上，也可以部署在相同服务器不同容器上。单应用的故障不会影响到其他应用，单应用的负载业不会影响其他应用，其代表有 Spring Cloud 和 Dubbo。其架构图如下所示：")]),t._v(" "),v("img",{staticClass:"article-image",attrs:{src:s(312),width:"50%"}}),t._v(" "),v("p",[t._v("包含以下特点：")]),t._v(" "),v("ul",[v("li",[t._v("易于开发和维护")]),t._v(" "),v("li",[t._v("单个微服务启动较快")]),t._v(" "),v("li",[t._v("局部修改容易部署")]),t._v(" "),v("li",[t._v("技术栈不受限")]),t._v(" "),v("li",[t._v("运维要求较高")]),t._v(" "),v("li",[t._v("分部署固有的复杂性")]),t._v(" "),v("li",[t._v("接口调整成本高")]),t._v(" "),v("li",[t._v("重复劳动")])]),t._v(" "),v("h2",{attrs:{id:"serverless-架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#serverless-架构"}},[t._v("#")]),t._v(" Serverless 架构")]),t._v(" "),v("p",[t._v("Serverless 架构将应用程序的运行环境作为服务提供，开发者只需要关注业务逻辑，而无需关注服务器等底层资源。Serverless 架构是云计算的又一种表现形式，其代表有 AWS Lambda 和阿里云函数计算。")]),t._v(" "),v("img",{staticClass:"article-image",attrs:{src:s(313),width:"50%"}}),t._v(" "),v("p",[t._v("优点如下所示：")]),t._v(" "),v("ul",[v("li",[t._v("低运营成本")]),t._v(" "),v("li",[t._v("简化设备运维")]),t._v(" "),v("li",[t._v("提升可维护性")]),t._v(" "),v("li",[t._v("更快的开发速度")]),t._v(" "),v("li",[t._v("厂商平台绑定")]),t._v(" "),v("li",[t._v("成功案例较少，没有行业标准")])])])}),[],!1,null,null,null);v.default=i.exports}}]);