import{_ as w,S}from"./D6JM5p8k.js";import{g as b,o as a,b as _,i as t,w as e,F as $,r as F,j as s,c as L,a as r,t as R,d as T,T as A,au as z,J as D,av as M,u as N,k as V,X as q,_ as H,z as X,ad as j}from"./CFG7M_Nj.js";import E from"./BZ8iJRZK.js";import{a as J}from"./B7RYbQLb.js";import{q as O}from"./DvA9eh6M.js";import{F as U,a as G}from"./DhXZPCSG.js";import"./3dB8xpf0.js";import"./DlAUqK2U.js";import"./BYYGQKVW.js";import"./CC7D5923.js";import"./DQZPhkaF.js";import"./DRp5Ik13.js";import"./C-v3KzvZ.js";import"./puiNGRaC.js";const I={id:"recent-articles-wrapper",class:"py-5"},K=r("h2",{class:"mb-5 coloured-underline"},"Recent Articles",-1),P=["src","img-alt"],Q={class:"text-start card-title"},W=["innerHTML"],Y={__name:"RecentArticlesSection",async setup(i){let n,c;const m=new Date,{data:d,error:l}=([n,c]=b(async()=>J("blog",async()=>await O("blog").where({date:{$exists:!0,$lte:m},hidden:{$not:!0}}).sort({date:-1}).find())),n=await n,c(),n);return l.value&&console.error(l.value),(u,Z)=>{const p=A,f=z,h=D,g=M,y=N,B=E,x=V,C=q,k=H,v=X;return a(),_("div",I,[K,t(v,{id:"recent-articles-container"},{default:e(()=>[t(k,null,{default:e(()=>[t(C,null,{default:e(()=>[(a(!0),_($,null,F(s(d),o=>(a(),L(x,{key:o._path,class:"mb-3",cols:"12",lg:"4",sm:"6"},{default:e(()=>[t(B,{value:o},{default:e(()=>[t(y,{class:"article-summary-card",title:o.title,tag:"article","no-body":""},{default:e(()=>[r("img",{class:"card-img",src:o.image.url,"img-alt":o.title},null,8,P),t(g,null,{default:e(()=>[t(p,{to:o._path},{default:e(()=>[r("h4",Q,R(o.title),1)]),_:2},1032,["to"]),t(f,null,{default:e(()=>[r("div",{innerHTML:o.summary},null,8,W)]),_:2},1024),t(h,{to:o._path,variant:"success"},{default:e(()=>[T("Read More")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}}},pt={__name:"blog",setup(i){return(n,c)=>(a(),_("div",null,[t(s(w),{"icon-classes":"text-success","logo-color":"#f8f9fa"}),j(n.$slots,"default"),t(Y),t(s(U)),t(s(G)),t(s(S))]))}};export{pt as default};
//# sourceMappingURL=DpOYOQ0m.js.map
