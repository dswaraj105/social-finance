(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[9],{301:function(e,t,n){e.exports={nav:"Nav_nav__30Z6V",activenav:"Nav_activenav__2Po5E",line:"Nav_line__31fNr"}},302:function(e,t,n){e.exports={Row:"Row_Row__GcoGV",companyname:"Row_companyname__37GGR",bold:"Row_bold__2T6HR",dot:"Row_dot__1_990",numbers:"Row_numbers__3Dmp2",numval:"Row_numval__kq12j"}},303:function(e,t,n){"use strict";var a=n(30),s=n(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=s(n(0)),r=(0,a(n(32)).default)(c.createElement("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");t.default=r},304:function(e,t,n){e.exports={header:"MutualFunds_header__2YF3t"}},353:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n(0),c=n(235),r=n(42),i=n(231),o=n(242),l=n(301),d=n.n(l),j=n(1),u=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(i.a,{style:"highreturns"===e.type?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.changed.bind(null,"highreturns"),children:"High Returns"}),Object(j.jsx)(i.a,{style:"taxsaving"===e.type?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.changed.bind(null,"taxsaving"),children:"Tax Saving"}),Object(j.jsx)(i.a,{style:"betterthanfd"===e.type?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.changed.bind(null,"betterthanfd"),children:"Better Than Fd"}),Object(j.jsx)(i.a,{style:"topcompanies"===e.type?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.changed.bind(null,"topcompanies"),children:"Top Companies"}),Object(j.jsx)(i.a,{style:"sip"===e.type?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.changed.bind(null,"sip"),children:"SIP with 500"}),Object(j.jsx)(i.a,{style:"sector"===e.type?{borderBottom:"4px solid #2BAE66"}:{},onClick:e.changed.bind(null,"sector"),children:"Sector Bets"}),Object(j.jsx)(o.a,{className:d.a.line})]})},b=n(133),h=n(303),m=n.n(h),v=n(302),x=n.n(v),p=function(e){return Object(j.jsxs)(b.a,{elevation:2,className:x.a.Row,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(r.a,{variant:"button",className:x.a.companyname,children:e.name}),Object(j.jsx)("br",{}),Object(j.jsxs)(r.a,{variant:"overline",children:[e.risk,Object(j.jsx)(m.a,{className:x.a.dot}),e.mode,Object(j.jsx)(m.a,{className:x.a.dot})," ",e.stars," *"]})]}),Object(j.jsxs)("div",{className:x.a.numbers,children:[Object(j.jsxs)("div",{className:x.a.numval,children:[" ",Object(j.jsxs)("div",{className:x.a.bold,children:[e.day,"%"]})," ",Object(j.jsx)("div",{children:"1D"})," "]}),Object(j.jsxs)("div",{className:x.a.numval,children:[" ",Object(j.jsxs)("div",{className:x.a.bold,children:[e.year,"%"]})," ",Object(j.jsx)("div",{children:"1Y"})," "]}),Object(j.jsxs)("div",{className:x.a.numval,children:[" ",Object(j.jsxs)("div",{className:x.a.bold,children:[e.year3,"%"]})," ",Object(j.jsx)("div",{children:"3Y"})," "]})]})]})},O=n(304),_=n.n(O);t.default=function(){var e=Object(s.useState)("highreturns"),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(s.useState)([]),l=Object(a.a)(o,2),d=l[0],b=l[1],h=Object(s.useState)([]),m=Object(a.a)(h,2),v=m[0],x=m[1];Object(s.useEffect)((function(){fetch("/companystats/mutualfunds").then((function(e){return e.json()})).then((function(e){b(e);var t=e.filter((function(e){return"highreturns"===e.type}));x(t)})).catch((function(e){console.log(e)}))}),[]);var O=v.map((function(e,t){return Object(j.jsx)(p,{name:e.name,risk:e.risk,mode:e.mode,stars:e.stars,day:e["1day"],year:e["1year"],year3:e["3year"]},t)}));return Object(j.jsxs)(c.a,{children:[Object(j.jsx)(r.a,{className:_.a.header,variant:"h4",children:"Mutual Funds"}),Object(j.jsx)(u,{type:n,changed:function(e){i(e);var t=d.filter((function(t){return t.type===e}));x(t)}}),O]})}}}]);
//# sourceMappingURL=9.f6d19cbd.chunk.js.map