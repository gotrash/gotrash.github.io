import{l as b,o as u,m as h,q as t,a as e,u as $,x as o,v as p,C as r,s as N,t as a,as as D,at as E,au as L,av as U,aw as R,O as F,B as O,ax as I,ay as M,az as G,c as g,U as k,am as P,al as B,K as y,W as x}from"./entry.CCj1nbhs.js";import W from"./StandardNavItem.D7-BKAWL.js";import q from"./SimpleUserProfilePicture.BUGLLRUw.js";import{_ as H}from"./client-only.Hg09gRwy.js";import{S as j}from"./SiteLogo.BtYcSDEC.js";import{_ as v}from"./_plugin-vue_export-helper.DlAUqK2U.js";const Y=o("div",{class:"dropdown-divider"},null,-1),ge={__name:"FrontendNavbar",props:{iconClasses:{type:String,required:!1,default:void 0},logoColor:{type:String,required:!1,default:void 0},type:{type:String,required:!1,default(){return"dark"}}},setup(s){return(n,l)=>{const _=b("i18n-t"),c=D,i=b("fa-icon"),d=E,f=W,w=L,m=U,C=R,S=q,V=H,_e=F,ie=O,de=I,A=M,T=G;return u(),h(T,{id:"frontend-navbar",class:"px-0 px-good-6 py-3 border-bottom border-success",style:{"border-bottom-width":"4px !important"},toggleable:"md",type:"light"},{default:t(()=>[e(c,{class:"py-0 px-2",style:{margin:"4px 0"},to:n.localePath({name:"index"})},{default:t(()=>[e($(j),{color:s.logoColor},null,8,["color"]),r("",!0)]),_:1},8,["to"]),e(d,{target:"nav-collapse",class:"mx-2 text-primary py-2 border-0"},{default:t(()=>[e(i,{icon:"bars"})]),_:1}),e(A,{id:"nav-collapse","is-nav":""},{default:t(()=>[e(w,{class:"mx-2 text-primary py-2 border-0"},{default:t(()=>[r("",!0),r("",!0)]),_:1}),e(w,{class:"ms-auto py-2"},{default:t(()=>[e(V,null,{fallback:t(()=>[e(i,{icon:"spinner",class:"d-none fa-spin fa-2x my-2",style:{"padding-bottom":"2px"}})]),default:t(()=>[n.authenticated?r("",!0):(u(),h(f,{key:0,onClick:N(n.onSignIn,["stop","prevent"])},{default:t(()=>[a(p(n.$t("NAV__LOGIN")),1)]),_:1},8,["onClick"])),n.authenticated?r("",!0):(u(),h(f,{key:1,to:n.localePath({name:"auth-sign-up"})},{default:t(()=>[a(p(n.$t("NAV__SIGNUP")),1)]),_:1},8,["to"])),r("",!0),n.authenticated?(u(),h(C,{key:3,"align-end":"","no-caret":"","auto-close":""},{"button-content":t(()=>[e(S,{class:"text-success align-items-center d-flex"})]),default:t(()=>[e(m,{to:n.localePath({name:"session"})},{default:t(()=>[a("Session")]),_:1},8,["to"]),e(m,{to:n.localePath({name:"provider"})},{default:t(()=>[a(p(n.$t("NAV__PROVIDER_DASHBOARD")),1)]),_:1},8,["to"]),e(m,{to:n.localePath({name:"user"})},{default:t(()=>[a(p(n.$t("NAV__USER_PROFILE")),1)]),_:1},8,["to"]),e(m,{to:n.localePath({name:"admin"})},{default:t(()=>[a(p(n.$t("NAV__SYSTEM_ADMIN")),1)]),_:1},8,["to"]),e(m,{to:n.localePath({name:"users"})},{default:t(()=>[a(p(n.$t("NAV__DASHBOARD")),1)]),_:1},8,["to"]),Y,e(m,{onClick:N(n.signOut,["stop","prevent"])},{default:t(()=>[a("Sign Out")]),_:1},8,["onClick"])]),_:1})):r("",!0)]),_:1})]),_:1}),r("",!0)]),_:1})]),_:1})}}},z={},K=o("h4",{class:"ml-0 ml-md-2 mb-3",style:{"max-width":"420px"}},"Registered Address",-1),J=o("address",{class:"ml-0 ml-md-2",style:{"max-width":"420px"}},[a(" Birkenhead,"),o("br"),a("Wirral,"),o("br"),a("Merseyside."),o("br"),a("CH43 4UE. ")],-1),Q=o("h4",{class:"mb-3",style:{"max-width":"420px"}},"Company Details",-1);const X=o("div",null,[o("div",null,[o("div",null,[o("div",null,[o("b",{class:"h6"},"Company No:"),a(),o("span",{class:"font-weight-bolder"},"12345678")])]),o("div",null,[o("div",null,[o("b",{class:"h6"},"VAT No:"),a(),o("span",{class:"font-weight-bolder"},"123 4567 89")])]),o("div",null,[o("div",null,[o("b",{class:"h6"},"Waste Licence ID:"),a(),o("span",{class:"font-weight-bolder"},"ABCD12345")])])])],-1),Z=o("h4",{class:"ml-0 ml-md-2 mb-3",style:{"max-width":"420px"}},"Social Links",-1),ee=o("div",{class:"ml-0 ml-md-2",style:{"max-width":"420px"}},[o("p",null,"Find us in the usual places using the links below...")],-1);function te(s,n){const l=k,_=b("fa-icon"),c=P,i=B,d=y,f=x;return u(),g("section",null,[e(f,{fluid:""},{default:t(()=>[e(d,{class:"bg-light"},{default:t(()=>[e(l,null,{default:t(()=>[e(f,null,{default:t(()=>[e(d,null,{default:t(()=>[e(l,{cols:"12",md:"4",class:"py-5",order:"2","order-md":"1"},{default:t(()=>[K,J]),_:1}),e(l,{cols:"12",md:"5",class:"py-5",order:"3","order-md":"2"},{default:t(()=>[Q,r("",!0),X]),_:1}),e(l,{cols:"12",md:"3",class:"py-5",order:"1","order-md":"3"},{default:t(()=>[Z,ee,o("div",null,[e(i,null,{default:t(()=>[e(c,{title:"Blog",to:s.localePath({name:"blog"}),"link-attrs":{style:"width: 2rem; height: 2rem; line-height: 2rem"},"link-classes":"text-center m-2 rounded rounded-circle border border-light p-0"},{default:t(()=>[e(_,{icon:"rss"})]),_:1},8,["to"]),e(c,{title:"Github",href:"https://github.com/gotrash",target:"_blank","link-attrs":{style:"width: 2rem; height: 2rem; line-height: 2rem"},"link-classes":"text-center m-2 rounded rounded-circle border border-light p-0"},{default:t(()=>[e(_,{icon:["fab","github"]})]),_:1}),e(c,{title:"Twitter",href:"https://twitter.com/GoTrashUk",target:"_blank","link-attrs":{style:"width: 2rem; height: 2rem; line-height: 2rem"},"link-classes":"text-center m-2 rounded rounded-circle border border-light p-0"},{default:t(()=>[e(_,{icon:["fab","twitter"]})]),_:1}),e(c,{title:"Youtube",href:"https://youtube.com/@go-trash",target:"_blank","link-attrs":{style:"width: 2rem; height: 2rem; line-height: 2rem"},"link-classes":"text-center m-2 rounded rounded-circle border border-light p-0"},{default:t(()=>[e(_,{icon:["fab","youtube"]})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const ke=v(z,[["render",te]]),oe={},ae=o("h5",{class:"font-weight-bolder mb-3"},"Useful Links",-1);function ne(s,n){const l=P,_=B,c=k,i=y,d=x;return u(),g("section",null,[e(d,{fluid:""},{default:t(()=>[e(i,{class:"py-5 bg-dark"},{default:t(()=>[e(c,null,{default:t(()=>[e(d,null,{default:t(()=>[ae,e(i,{class:"mb-2"},{default:t(()=>[e(c,{cols:"12",md:"4"},{default:t(()=>[e(_,{vertical:""},{default:t(()=>[e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"cookie-policy"}})},{default:t(()=>[a("Cookie Policy")]),_:1},8,["to"]),e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"modern-slavery-statement"}})},{default:t(()=>[a("Modern Slavery Statement")]),_:1},8,["to"]),e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"privacy-policy"}})},{default:t(()=>[a("Privacy Policy")]),_:1},8,["to"]),e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"sustainability-policy"}})},{default:t(()=>[a("Sustainability Policy")]),_:1},8,["to"]),e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"terms-and-conditions"}})},{default:t(()=>[a("Terms & Conditions")]),_:1},8,["to"])]),_:1})]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(_,{vertical:""},{default:t(()=>[e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"about-us"}})},{default:t(()=>[a("About Us")]),_:1},8,["to"]),e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"bug-bounty"}})},{default:t(()=>[a("Bug Bounty")]),_:1},8,["to"]),e(l,{"link-classes":"px-1",to:s.localePath({name:"contact-us"})},{default:t(()=>[a("Contact Us")]),_:1},8,["to"])]),_:1})]),_:1}),e(c,{cols:"12",md:"4"},{default:t(()=>[e(_,{vertical:""},{default:t(()=>[r("",!0),r("",!0),e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"careers"}})},{default:t(()=>[a("Careers")]),_:1},8,["to"]),r("",!0),e(l,{"link-classes":"px-1",to:s.localePath({name:"pages-slug",params:{slug:"ethical-concerns"}})},{default:t(()=>[a("Ethical Concerns")]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const ye=v(oe,[["render",ne]]),le={},se={id:"site-footer"},ce=o("h5",{class:"my-2"},"© GoTrash Ltd 2023",-1);function re(s,n){const l=k,_=y,c=x;return u(),g("footer",se,[e(c,{fluid:""},{default:t(()=>[e(_,{class:"py-3 bg-gray-100",style:{"border-top":"2px solid #28a744"}},{default:t(()=>[e(l,null,{default:t(()=>[e(c,null,{default:t(()=>[e(_,{class:"align-items-center"},{default:t(()=>[e(l,{class:"text-center",cols:"12",md:"12",order:"2","order-md":"1"},{default:t(()=>[ce]),_:1}),r("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const xe=v(le,[["render",re]]);export{ke as F,xe as S,ge as _,ye as a};
//# sourceMappingURL=SiteFooter.SH2wlf-x.js.map
