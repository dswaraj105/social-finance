(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[12],{300:function(e,a,t){e.exports={Nav:"Nav_Nav__3E1Nk",left:"Nav_left__kqW7H",center:"Nav_center__3zyjJ",navitem:"Nav_navitem__2oCFb"}},301:function(e,a,t){e.exports={Row:"Row_Row__2I4qx",left:"Row_left__30oFM",center:"Row_center__1Vyfx",navitem:"Row_navitem__3B2c3"}},302:function(e,a,t){e.exports={header:"CryptoCurrency_header__25-YB"}},377:function(e,a,t){"use strict";t.r(a);var c=t(9),n=t(0),s=t(231),i=t(41),m=t(245),r=t(300),l=t.n(r),j=t(1),o=function(){return Object(j.jsx)("div",{className:l.a.Nav,children:Object(j.jsxs)(m.a,{container:!0,children:[Object(j.jsx)(m.a,{className:l.a.navitem,item:!0,xs:1,children:"#"}),Object(j.jsx)(m.a,{className:[l.a.navitem,l.a.left].join(" "),item:!0,xs:3,children:"Name"}),Object(j.jsx)(m.a,{className:l.a.navitem,item:!0,xs:2,children:"Price"}),Object(j.jsx)(m.a,{className:l.a.navitem,item:!0,xs:1,children:"24h %"}),Object(j.jsx)(m.a,{className:l.a.navitem,item:!0,xs:1,children:"7d %"}),Object(j.jsx)(m.a,{className:l.a.navitem,item:!0,xs:2,children:"Market Cap"}),Object(j.jsx)(m.a,{className:[l.a.navitem,l.a.center].join(" "),item:!0,xs:2,children:"Volume"})]})})},x=t(301),u=t.n(x),d=function(e){return Object(j.jsxs)(m.a,{container:!0,className:u.a.Row,children:[Object(j.jsx)(m.a,{className:u.a.navitem,item:!0,xs:1,children:e.num}),Object(j.jsxs)(m.a,{className:[u.a.navitem,u.a.left].join(" "),item:!0,xs:3,children:[e.name," ",e.symbol]}),Object(j.jsx)(m.a,{className:u.a.navitem,item:!0,xs:2,children:e.price}),Object(j.jsxs)(m.a,{className:u.a.navitem,item:!0,xs:1,children:[e.day," %"]}),Object(j.jsxs)(m.a,{className:u.a.navitem,item:!0,xs:1,children:[e.week," %"]}),Object(j.jsxs)(m.a,{className:u.a.navitem,item:!0,xs:2,children:["$",e.marketcap]}),Object(j.jsxs)(m.a,{className:[u.a.navitem].join(" "),item:!0,xs:2,children:["$",e.volume]})]})},h=function(e){var a=e.data.map((function(e,a){return Object(j.jsx)(d,{num:(a+1).toString(),name:e.name,price:e.price,symbol:e.symbol,volume:e.volume,week:e["7d"],day:e["24h"],supply:e.circulatingsupply,marketcap:e.marketcap},a)}));return Object(j.jsx)(j.Fragment,{children:a})},v=t(302),b=t.n(v);a.default=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],m=a[1];return Object(n.useEffect)((function(){fetch("/companystats/crypto").then((function(e){return e.json()})).then((function(e){m(e)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(i.a,{className:b.a.header,variant:"h5",children:"CryptoCurrency"}),Object(j.jsx)(o,{}),Object(j.jsx)(h,{data:t})]})}}}]);
//# sourceMappingURL=12.ced36433.chunk.js.map