(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[8],{259:function(e,t,n){"use strict";t.a=n.p+"static/media/user.bcd1d9ef.jpg"},279:function(e,t,n){e.exports={form:"NewComment_form__10UuF",comment:"NewComment_comment__1rng2"}},280:function(e,t,n){e.exports={Comment:"Comments_Comment__174tr",top:"Comments_top__PXVXF",avatar:"Comments_avatar__64uhT",name:"Comments_name__1gnce",lastLine:"Comments_lastLine__3-msz"}},281:function(e,t,n){e.exports={postImage:"Post_postImage__2741g",red:"Post_red__3jh83"}},375:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var o=n(9),a=n(0),r=n(14),c=n(233),s=n(227),i=n(245),l=n(231),u=n(33),d=n(4),m=n(221),j=n(239),p=n(222),b=n(240),f=n(241),h=n(253),g=n(230),x=n(41),O=n(133),v=n(75),C=n(102),_=n.n(C),y=n(103),S=n.n(y),w=n(17),N=n(64),k=n(237),T=n(238),P=n(250),I=n(279),E=n.n(I),A=n(1),F=function(e){return Object(A.jsxs)("form",{className:E.a.from,onSubmit:e.submit,noValidate:!0,autoComplete:"off",children:[Object(A.jsx)(P.a,{className:E.a.comment,style:{margin:"0 5% 10px 30px"},value:e.val,onChange:e.change,id:"outlined-basic",label:"Add a comment",variant:"outlined"}),Object(A.jsx)(s.a,{className:E.a.btn,style:{marginTop:"8.5px"},type:"submit",variant:"outlined",color:"secondary",children:"Post"})]})},U=n(280),B=n.n(U),J=Object(c.a)((function(e){return{purple:{color:e.palette.getContrastText(k.a[500]),backgroundColor:k.a[500]}}}));function L(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(a.useContext)(w.a),m=J();Object(a.useEffect)((function(){fetch("/getComments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({postId:e.id})}).then((function(e){return e.json()})).then((function(e){console.log(e),u(e)})).catch((function(e){console.log(e)}))}),[e.id]);var j=l.map((function(e){return Object(A.jsxs)("div",{className:B.a.Comment,children:[Object(A.jsx)(T.a,{}),Object(A.jsxs)("div",{className:B.a.top,children:[Object(A.jsx)(h.a,{className:[m.purple,B.a.avatar].join(" "),children:e.user.name[0]}),Object(A.jsxs)("div",{children:[Object(A.jsx)(x.a,{className:B.a.name,style:{padding:"0",margin:"0"},variant:"subtitle2",component:"p",paragraph:!0,children:e.user.name}),Object(A.jsx)(x.a,{variant:"body2",paragraph:!0,style:{padding:"0",margin:"0"},children:e.text})]})]})]})}));return Object(A.jsxs)(a.Fragment,{children:[Object(A.jsx)(F,{val:r,change:function(e){c(e.target.value)},submit:function(t){if(t.preventDefault(),""!==r.trim()){var n={text:r,postId:e.id,userId:d.user._id};console.log(n),fetch("/comment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(console.log(e),c(""),"success"===e.msg){var t={text:n.text,user:{imageUrl:d.user.imageUrl,name:d.user.name}};u((function(e){return[t].concat(Object(N.a)(e))}))}else console.log("comment failed")})).catch((function(e){console.log(e)}))}else console.log("Comment empty")}}),j,Object(A.jsx)(T.a,{className:B.a.lastLine})]})}var z=n(281),D=n.n(z),V=Object(c.a)((function(e){return{root:{maxWidth:600,marginBottom:15},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:v.a[500]}}}));function W(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(e.liked),i=Object(o.a)(s,2),l=i[0],v=i[1],C=Object(a.useState)(e.likesCount),y=Object(o.a)(C,2),N=y[0],k=y[1],T=Object(a.useContext)(w.a),P=V(),I=e.topics.map((function(e,t){return Object(A.jsxs)(x.a,{variant:"h6",component:"p",style:{color:"#2BAE66"},gutterBottom:!0,children:["#",e]},t)})),E=e.date.slice(0,10),F="";l&&(F=D.a.red);return Object(A.jsx)(O.a,{elevation:3,className:P.root,children:Object(A.jsxs)(m.a,{className:P.root,children:[Object(A.jsx)(j.a,{avatar:Object(A.jsx)(h.a,{"aria-label":"recipe",className:P.avatar,children:e.owner[0]}),title:e.owner,subheader:E}),Object(A.jsxs)(p.a,{children:[Object(A.jsx)(x.a,{variant:"body2",component:"p",children:e.text}),I]}),e.imgUrl&&Object(A.jsx)("img",{className:D.a.postImage,src:"/".concat(e.imgUrl),alt:"Post upload"}),Object(A.jsxs)(b.a,{disableSpacing:!0,children:[Object(A.jsx)(g.a,{onClick:function(){if(l){v(!1),k((function(e){return e-1}));var t={postId:e.id,userId:T.user._id};fetch("/unlikePost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),"Server Error"===e.msg&&(v(!0),k((function(e){return e+1})))})).catch((function(e){console.log("err"),v(!0),k((function(e){return e+1}))}))}else{v(!0),k((function(e){return e+1}));var n={postId:e.id,userId:T.user._id};fetch("/likePost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){console.log(e),"Server Error"===e.msg&&(v(!1),k((function(e){return e-1})))})).catch((function(e){console.log("err"),v(!1),k((function(e){return e-1}))}))}},"aria-label":"add to favorites",children:Object(A.jsx)(_.a,{className:F})})," ","\xa0 ",N," Likes",Object(A.jsx)(g.a,{className:Object(d.a)(P.expand,Object(u.a)({},P.expandOpen,r)),onClick:function(){c(!r)},"aria-expanded":r,"aria-label":"show more",children:Object(A.jsx)(S.a,{})}),"Comments \xa0"]}),Object(A.jsx)(f.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(A.jsx)(p.a,{children:Object(A.jsx)(L,{id:e.id})})})]})})}var X=function(){var e=Object(a.useContext)(w.a),t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){var e=localStorage.getItem("searchid");console.log(e),fetch("/usersAllPost/".concat(e)).then((function(e){return e.json()})).then((function(e){e.msg?console.log("Something went wrong"):(0===e.length&&u(!0),c(e))})).catch((function(e){console.log(e)}))}),[]);var d=e.user._id,m=r.map((function(e){return Object(A.jsx)(W,{id:e._id,text:e.postText,topics:e.postTopics,owner:e.postedBy.name,likesCount:e.likesCount,imgUrl:e.imageUrl,date:e.date,liked:e.likes.includes(d)},e._id)}));return Object(A.jsxs)(A.Fragment,{children:[l&&Object(A.jsxs)(O.a,{style:{margin:"10px 0",padding:"5px 10px",color:"#2BAE66",fontWeight:500,fontSize:"1.4rem",textAlign:"center"},children:["You have no posts to display Here",Object(A.jsx)(T.a,{}),"Create your First Post Today"]}),Object(A.jsx)(a.Fragment,{children:m})]})},G=n(259),H=Object(c.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,width:"250px",margin:"20px 0"},button:{backgroundColor:"#2BAE66",color:"#fff",margin:"20px 5px",width:"200px"}}}));function R(){var e=H(),t=Object(a.useContext)(w.a).user,n=Object(r.h)(),c=Object(a.useState)(t.following.includes(n.userid)),u=Object(o.a)(c,2),d=u[0],m=u[1];localStorage.setItem("searchid",n.userid);return Object(A.jsx)(l.a,{children:Object(A.jsxs)(i.a,{container:!0,spacing:3,children:[Object(A.jsxs)(i.a,{item:!0,sm:4,xs:12,children:[Object(A.jsx)("img",{style:{height:"200px",width:"200px",margin:"1%",border:"2px solid #2BAE66",borderRadius:"20px"},src:G.a,alt:"profile"}),Object(A.jsx)("div",{children:Object(A.jsx)(s.a,{variant:"contained",color:"primary",className:e.button,onClick:function(){fetch("/addfollowing",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:t._id,follow:n.userid})}).then((function(e){return e.json()})).then((function(e){"Done"===e.msg&&(d?t.following=t.following.filter((function(e){return e!==n.userid})):t.following.push(n.userid),m((function(e){return!e})))})).catch((function(e){return console.log(e)}))},children:d?"UnFollow":"Follow"})})]}),Object(A.jsx)(i.a,{item:!0,sm:8,xs:12,children:Object(A.jsx)(X,{})})]})})}}}]);
//# sourceMappingURL=8.bd6d43af.chunk.js.map