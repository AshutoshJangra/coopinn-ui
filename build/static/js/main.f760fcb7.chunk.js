(this["webpackJsonpcoopinn-ui"]=this["webpackJsonpcoopinn-ui"]||[]).push([[0],{148:function(e,t,c){},149:function(e,t,c){},153:function(e,t){},155:function(e,t){},169:function(e,t){},171:function(e,t){},199:function(e,t){},201:function(e,t){},202:function(e,t){},207:function(e,t){},209:function(e,t){},228:function(e,t){},240:function(e,t){},243:function(e,t){},282:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(141),i=c.n(s),r=(c(148),c(149),c(4)),o=c(45),j=c(46),l=c(142),u=c(72),b=new(function(){function e(){Object(o.a)(this,e),this.tokenKey="auth_token"}return Object(j.a)(e,[{key:"getToken",value:function(){return localStorage.getItem(this.tokenKey)}},{key:"decode",value:function(e){return l.decode(JSON.parse(e))}},{key:"saveToken",value:function(e){localStorage.setItem(this.tokenKey,JSON.stringify(e.token))}},{key:"invalidateUser",value:function(){localStorage.removeItem(this.tokenKey)}},{key:"getExpiration",value:function(e){var t=this.decode(e).exp;return u.unix(t)}},{key:"isValid",value:function(e){return u().isBefore(this.getExpiration(e))}},{key:"isAuthenticated",value:function(){var e=this.getToken();return!(!e||!this.isValid(e))}}]),e}()),h=c(13),d=c(23),O=c.n(d),x=c(0),m=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),a=c[0],s=c[1],i={checkAuthState:function(e){b.isAuthenticated()&&s(!0)},signOut:function(){b.invalidateUser(),s(!1)},signIn:function(e){return(t=e,O.a.post("/api/v1/shops/login",Object(h.a)({},t)).then((function(e){return e.data})).catch((function(e){return console.log(e)}))).then((function(e){return b.saveToken(e),s(!0),e}));var t},isAuth:a,isAuthenticated:function(){return b.isAuthenticated()}};return Object(x.jsx)(m.Provider,{value:i,children:e.children})},f=c(9),g=c(5),v=function(){var e=Object(n.useContext)(m),t=e.isAuth,c=e.signIn,a=Object(n.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1],j=Object(n.useState)(""),l=Object(r.a)(j,2),u=l[0],b=l[1];return t?Object(x.jsx)(g.a,{to:{pathname:"/dashboard"}}):Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c({email:i,password:u})},children:[Object(x.jsx)("label",{children:" Name "}),Object(x.jsx)("input",{type:"text",placeholder:"username",onChange:function(e){return o(e.target.value)},required:!0}),Object(x.jsx)("label",{children:" Password "}),Object(x.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return b(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"submit"})]})})},_=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)(),u=Object(r.a)(l,2),b=u[0],d=u[1],m=Object(n.useState)(""),p=Object(r.a)(m,2),f=p[0],v=p[1],_=Object(n.useState)(""),N=Object(r.a)(_,2),k=N[0],y=N[1],S=Object(n.useState)(""),C=Object(r.a)(S,2),w=C[0],A=C[1],I=Object(n.useState)(),E=Object(r.a)(I,2),q=E[0],P=E[1],R=Object(n.useState)(""),T=Object(r.a)(R,2),B=T[0],D=T[1],F=Object(n.useState)(!1),M=Object(r.a)(F,2),J=M[0],L=M[1],U={name:c,sellerName:o,mobile:b,email:f,password:k,passwordConfirm:w,rewardPercentage:q};return J?Object(x.jsx)(g.a,{to:{pathname:"/login"}}):Object(x.jsxs)("div",{className:"Register",children:[Object(x.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),(t=U,O.a.post("/api/v1/shops/signup",Object(h.a)({},t)).then((function(e){return e.data}),(function(e){return Promise.reject(e.response.data.errors)}))).then((function(e){return L(!0)}),(function(e){return D(e)}))},children:[Object(x.jsx)("label",{children:" Name "}),Object(x.jsx)("input",{type:"text",placeholder:"name",onChange:function(e){return a(e.target.value)},required:!0}),Object(x.jsx)("label",{children:" Shop Name "}),Object(x.jsx)("input",{type:"text",placeholder:"shop name",onChange:function(e){return j(e.target.value)},required:!0}),Object(x.jsx)("label",{children:" Mobile Number "}),Object(x.jsx)("input",{type:"number",placeholder:"mobile number",onChange:function(e){return d(e.target.value)},required:!0}),Object(x.jsx)("label",{children:" Email "}),Object(x.jsx)("input",{type:"email",placeholder:"email",onChange:function(e){return v(e.target.value)},required:!0}),Object(x.jsx)("label",{children:" Password "}),Object(x.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return y(e.target.value)},required:!0}),Object(x.jsx)("label",{children:" Confirm Password "}),Object(x.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return A(e.target.value)},required:!0}),Object(x.jsx)("label",{children:" Reward Percentage "}),Object(x.jsx)("input",{type:"number",placeholder:"reward",onChange:function(e){return P(e.target.value)},required:!0}),Object(x.jsx)("input",{type:"submit"})]}),B?"error yes":""]})},N=c.p+"static/media/logoCo.c8daa3e6.svg",k=function(){var e=Object(n.useContext)(m),t=e.isAuth,c=e.signOut;return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("label",{className:"logoCo",children:Object(x.jsx)("img",{src:N})}),Object(x.jsx)("nav",{className:"navlinks",children:t?Object(x.jsx)(a.a.Fragment,{children:Object(x.jsx)(f.b,{className:"navlink",to:"/",onClick:c,children:"logout"})}):Object(x.jsx)(a.a.Fragment,{children:Object(x.jsx)(f.b,{className:"navlink",to:"/register",children:"Join Us"})})})]})},y=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),o=i[0],j=i[1];return o?Object(x.jsx)(g.a,{exact:!0,to:{pathname:"/dashboard/".concat(c)}}):Object(x.jsx)("div",{children:Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(!0)},className:"dashboard",children:[Object(x.jsx)("h1",{children:" Welcome "}),Object(x.jsxs)("label",{children:["Number:",Object(x.jsx)("input",{type:"number",onChange:function(e){return a(e.target.value)},required:!0})]}),Object(x.jsx)("input",{type:"submit"})]})})},S=new(function(){function e(){Object(o.a)(this,e),this.axiosInstance={},this.initInstance()}return Object(j.a)(e,[{key:"initInstance",value:function(){return this.axiosInstance=O.a.create({baseURL:"/api/v1",timeout:4e3}),this.axiosInstance.interceptors.request.use((function(e){var t=b.getToken();return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),this.axiosInstance}},{key:"getInstance",value:function(){return this.axiosInstance||this.initInstance()}}]),e}()),C=S.getInstance(),w=function(e){var t=Object(n.useState)({}),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(),o=Object(r.a)(i,2),j=o[0],l=o[1],u=Object(n.useState)(0),b=Object(r.a)(u,2),h=b[0],d=b[1],O=Object(n.useState)(!1),m=Object(r.a)(O,2),p=m[0],f=m[1],v={bill:j,custNumber:1*e.match.params.number,debit:h};Object(n.useEffect)((function(){C.get("/api/v1/users/".concat(e.match.params.number)).then((function(e){return s(e.data.user)}))}),[e.match.params.number]);return p?Object(x.jsx)(g.a,{to:{pathname:"/"}}):a?Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C.post("/api/v1/transaction",v).then((function(e){return console.log("handle",e)})),f(!0)},children:[Object(x.jsxs)("label",{children:["Bill:",Object(x.jsx)("input",{type:"number",onChange:function(e){return l(e.target.value)},required:!0})]}),Object(x.jsxs)("label",{children:["Debit:",Object(x.jsx)("input",{type:"number",onChange:function(e){return d(e.target.value)}})]}),Object(x.jsx)("input",{type:"submit"})]}),Object(x.jsx)("button",{onClick:function(){return f(!0)},children:" back "}),Object(x.jsx)("h3",{children:a.totalShopping}),Object(x.jsx)("h3",{children:a.totalRewards})]}):Object(x.jsx)("div",{children:" please wait.... "})},A=S.getInstance(),I=function(e){var t=Object(n.useState)({}),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){A.get("/api/v1/shops/l").then((function(e){return s(e.data.shop)}))}),[]),Object(x.jsxs)("div",{children:[a?a.name:"profile",Object(x.jsx)(f.b,{to:"/",children:" Back "})]})},E=function(){return Object(x.jsxs)("section",{className:"features_section",children:[Object(x.jsxs)("div",{className:"feature_1 feature",children:[Object(x.jsx)("h2",{className:"feature_headline",children:"Save Money"}),Object(x.jsx)("p",{className:"feature_paragraph",children:"save money on every purchase. get assured cashback and use it for your next purchase"})]}),Object(x.jsxs)("div",{className:"feature_2 feature",children:[Object(x.jsx)("h2",{className:"feature_headline",children:"No Debit Card Required"}),Object(x.jsx)("p",{className:"feature_paragraph",children:"save money on every purchase. get assured cashback and use it for your next purchase"})]}),Object(x.jsxs)("div",{className:"feature_3 feature",children:[Object(x.jsx)("h2",{className:"feature_headline",children:"Coopinn Elite"}),Object(x.jsx)("p",{className:"feature_paragraph",children:"save money on every purchase. get assured cashback and use it for your next purchase"})]})]})},q=c.p+"static/media/image_1.69a3413c.png",P=c.p+"static/media/image_2.6e2e851d.png",R=c.p+"static/media/image_3.d70a99fd.png",T=function(){return Object(x.jsxs)("section",{className:"working_section",children:[Object(x.jsxs)("div",{className:"working",children:[Object(x.jsx)("h4",{className:"working_heading",children:" 3 Easy Steps "}),Object(x.jsx)("h3",{className:"working_sub_heading",children:" Step 1 "}),Object(x.jsx)("img",{className:"working_image",src:q,alt:"image_1"}),Object(x.jsx)("h2",{className:"working_headline",children:"Give Your Mobile Number At Checkout"})]}),Object(x.jsxs)("div",{className:" working",children:[Object(x.jsx)("h4",{className:"working_heading",children:" 3 Easy Steps "}),Object(x.jsx)("h3",{className:"working_sub_heading",children:" Step 2 "}),Object(x.jsx)("img",{className:"working_image",src:P,alt:"image_2"}),Object(x.jsx)("h2",{className:"working_headline",children:"Get Assured Cashback"})]}),Object(x.jsxs)("div",{className:" working",children:[Object(x.jsx)("h4",{className:"working_heading",children:" 3 Easy Steps "}),Object(x.jsx)("h3",{className:"working_sub_heading",children:" Step 3 "}),Object(x.jsx)("img",{className:"working_image",src:R,alt:"image_3"}),Object(x.jsx)("h2",{className:"working_headline",children:"Redeem At Any Coopinn Merchant"})]})]})},B=c.p+"static/media/eliteCard.c6373b31.png",D=function(){return Object(x.jsxs)("section",{className:"elite_section",children:[Object(x.jsx)("h4",{className:"elite_section_heading",children:" Introducing "}),Object(x.jsx)("div",{className:"elite_section_box",children:Object(x.jsxs)("div",{className:"elite_section_box_content",children:[Object(x.jsx)("img",{className:"elite_section_box_content_image",src:B,alt:"image_1"}),Object(x.jsx)("h2",{className:"elite_section_box_content_heading",children:"Coopinn Elite"}),Object(x.jsx)("h4",{className:"elite_section_box_content_feature",children:"Show Card At Any Coopinn Merchant"}),Object(x.jsx)("h4",{className:"elite_section_box_content_feature",children:"Get Or Redeem Credits"}),Object(x.jsx)("h4",{className:"elite_section_box_content_feature",children:"Customized Coopinn Elite Card"}),Object(x.jsx)("h4",{className:"elite_section_box_content_feature",children:"Hassle Free"}),Object(x.jsx)("h4",{className:"elite_section_box_content_feature",children:"Seemless Checkout"})]})})]})},F=function(){return Object(x.jsxs)("section",{className:"public_footer_section",children:[Object(x.jsxs)("div",{className:"public_footer",children:[Object(x.jsxs)("h4",{className:"public_footer_sub_heading_1",children:[" ","Get Your Card From"]}),Object(x.jsx)("h4",{className:"public_footer_sub_heading_2",children:"Nearby Coopinn Partner"}),Object(x.jsx)("h3",{className:"public_footer_public_cta",children:" SHOP NOW "}),Object(x.jsxs)("div",{className:"public_footer_seperator",children:[Object(x.jsx)("div",{className:"public_footer_seperator_line"}),Object(x.jsx)("div",{className:"public_footer_seperator_text",children:" OR "}),Object(x.jsx)("div",{className:"public_footer_seperator_line"})]}),Object(x.jsx)("h4",{className:"public_footer_sub_heading_3",children:"Become A Merchant"}),Object(x.jsx)("h3",{className:"public_footer_cta",children:" JOIN US "})]}),Object(x.jsx)("h2",{className:"public_footer_brand_name",children:" Coopinn. "})]})},M=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(r.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)(!1),u=Object(r.a)(l,2),b=u[0],h=u[1];return b?Object(x.jsx)(g.a,{to:{pathname:"/public/".concat(c,"/").concat(o)}}):Object(x.jsxs)("div",{className:"public_view",children:[Object(x.jsxs)("h1",{className:"headline",children:["Coin ",Object(x.jsx)("span",{children:"At"}),Object(x.jsx)("br",{})," Every Pinn."]}),Object(x.jsxs)("form",{className:"form_box",onSubmit:function(e){e.preventDefault(),h(!0)},children:[Object(x.jsx)("input",{type:"number",className:"input_mobile",onChange:function(e){return a(e.target.value)},placeholder:"Enter Mobile Number",required:!0}),Object(x.jsx)("input",{type:"number",className:"input_passcode",onChange:function(e){return j(e.target.value)},placeholder:"Passcode",required:!0}),Object(x.jsx)("input",{className:"input_submit",type:"submit",value:"Let's Coopinn \u2192"})]}),Object(x.jsx)("div",{className:"shop_login",children:Object(x.jsx)(f.b,{className:"shop_login_link",to:"/login",children:"Login as merchant \u2192"})}),Object(x.jsx)("section",{className:"features",children:Object(x.jsx)(E,{})}),Object(x.jsx)("section",{className:"workings",children:Object(x.jsx)(T,{})}),Object(x.jsx)("section",{className:"elite",children:Object(x.jsx)(D,{})}),Object(x.jsx)("footer",{className:"public",children:Object(x.jsx)(F,{})})]})},J=function(e){var t=Object(n.useState)({}),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),o=Object(r.a)(i,2),j=o[0],l=o[1],u=e.match.params,b=u.number,h=u.code;return Object(n.useEffect)((function(){O.a.get("/api/v1/users?number=".concat(b,"&code=").concat(h)).then((function(e){return s(e.data.user)}))}),[b,h]),j?Object(x.jsx)(g.a,{to:{pathname:"/"}}):a?Object(x.jsxs)("div",{children:[Object(x.jsxs)("h4",{children:[" Total Shopping: ",a.totalShopping," "]}),Object(x.jsxs)("h4",{children:[" Total Rewards: ",a.totalRewards," "]}),Object(x.jsx)("button",{onClick:function(){return l(!0)},children:" Back "})]}):Object(x.jsx)("div",{children:Object(x.jsx)("h5",{children:" Please Wait... "})})},L=c(47);function U(e){var t=e.children,c=Object(L.a)(e,["children"]),n=a.a.Children.only(t);return Object(x.jsx)(g.b,Object(h.a)(Object(h.a)({},c),{},{render:function(e){return b.isAuthenticated()?a.a.cloneElement(n,Object(h.a)(Object(h.a)({},c),e)):Object(x.jsx)(g.a,{to:{pathname:"/"}})}}))}function G(e){var t=e.component,c=Object(L.a)(e,["component"]);return Object(x.jsx)(g.b,Object(h.a)(Object(h.a)({},c),{},{render:function(e){return b.isAuthenticated()?Object(x.jsx)(g.a,{to:{pathname:"/dashboard"}}):Object(x.jsx)(t,Object(h.a)(Object(h.a)({},e),c))}}))}var K=function(){var e=Object(n.useContext)(m);return Object(n.useEffect)((function(){e.checkAuthState()}),[e]),Object(x.jsxs)("div",{className:"mainApp",children:[Object(x.jsxs)("div",{className:"design",children:[Object(x.jsxs)("div",{className:"color_box",children:[Object(x.jsx)("div",{className:"c1",children:" "}),Object(x.jsx)("div",{className:"c2",children:" "})]}),Object(x.jsxs)("div",{className:"color_box",children:[Object(x.jsx)("div",{className:"c3",children:" "}),Object(x.jsx)("div",{className:"c4",children:" "})]}),Object(x.jsxs)("div",{className:"color_box",children:[Object(x.jsx)("div",{className:"c5",children:" "}),Object(x.jsx)("div",{className:"c6",children:" "})]})]}),Object(x.jsxs)(f.a,{children:[Object(x.jsx)(k,{}),Object(x.jsxs)(g.d,{children:[Object(x.jsx)(g.b,{exact:!0,path:"/",children:e.isAuth?Object(x.jsx)(g.a,{to:"/dashboard"}):Object(x.jsx)(M,{})}),Object(x.jsx)(g.b,{exact:!0,path:"/public/:number/:code",component:J}),Object(x.jsx)(g.b,{exact:!0,path:"/login",component:v}),Object(x.jsx)(G,{exact:!0,path:"/register",component:_}),Object(x.jsx)(U,{exact:!0,path:"/dashboard",children:Object(x.jsx)(y,{})}),Object(x.jsx)(g.b,{exact:!0,path:"/dashboard/:number",component:w}),Object(x.jsx)(U,{exact:!0,path:"/profile",children:Object(x.jsx)(I,{})})]})]})]})};var W=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(p,{children:Object(x.jsx)(K,{})})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,283)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root")),z()}},[[282,1,2]]]);
//# sourceMappingURL=main.f760fcb7.chunk.js.map