import{_ as g,F as S,a as B,S as $}from"./SiteFooter.BdW49o3D.js";import{as as v,o as a,c,a as t,q as o,F as w,at as y,u as n,m as k,t as i,v as A,x as l,au as F,B as C,J as R,U as q,K as D,W as L,Y as N}from"./entry.Bne7xLjd.js";import T from"./ContentRenderer.RClieDFx.js";import{u as U}from"./asyncData.h_cVqlYl.js";import{q as V}from"./query.V-9OzoG7.js";import"./StandardNavItem.OHDJjUh0.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./SimpleUserProfilePicture.DuKrGTjy.js";import"./client-only.CxcK7-XB.js";import"./SiteLogo.BLp-dWlo.js";import"./ContentRendererMarkdown.vue.COOSIaIa.js";import"./index.BsYmvPZw.js";import"./preview.BIeH3vCk.js";const W={class:"d-flex align-items-center flex-column p-5 border-top border-success",style:{"border-top-width":"3px !important"}},E=l("div",null,[l("h2",{class:"mb-5 coloured-underline"},"Recent Articles")],-1),G={__name:"RecentArticlesSection",async setup(_){let s,r;const{data:m}=([s,r]=v(()=>U("recent-articles",()=>V("blog").where({date:{$exists:!0,$lte:new Date},draft:{$not:!0},hidden:{$not:!0}}).sort({date:1}).limit(3).find())),s=await s,r(),s);return(K,M)=>{const d=F,u=C,p=R,f=T,h=q,x=D,b=L;return a(),c("div",W,[E,t(b,{fluid:""},{default:o(()=>[t(x,null,{default:o(()=>[(a(!0),c(w,null,y(n(m),e=>(a(),k(h,{key:e._path,class:"mb-3",cols:"12",md:"4"},{default:o(()=>[t(f,{value:e},{default:o(()=>[t(p,{title:e.title,"img-alt":e.title||"https://place-hold.it/1200x600/#28a74/#21252&text=GoTrash","img-src":e.img,"img-top":"",tag:"article"},{default:o(()=>[t(d,null,{default:o(()=>[i(A(e.description),1)]),_:2},1024),t(u,{to:e._path,variant:"success"},{default:o(()=>[i("Read More")]),_:2},1032,["to"])]),_:2},1032,["title","img-alt","img-src"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1})])}}},J=G,st={__name:"blog",setup(_){return(s,r)=>(a(),c("div",null,[t(n(g),{"icon-classes":"text-success","logo-color":"#f8f9fa"}),N(s.$slots,"default"),t(J),t(n(S)),t(n(B)),t(n($))]))}};export{st as default};
//# sourceMappingURL=blog.DlAtQT9h.js.map
