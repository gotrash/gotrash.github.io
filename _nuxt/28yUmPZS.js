import{_ as S,S as L}from"./DT_SRxWv.js";import{g as b,o as a,b as _,i as t,w as e,F as k,r as F,j as s,c as R,a as r,t as $,d as A,V as T,ap as V,H as q,aq as D,u as H,L as M,K as N,J as z,z as K,a8 as j}from"./v6t9Lw8l.js";import E from"./DIgP2E62.js";import{a as J}from"./DbNmeqDd.js";import{q as O}from"./CkEtxFl4.js";import{F as U,a as G}from"./Btl5XiQQ.js";import"./B99NeU29.js";import"./DlAUqK2U.js";import"./who1tSdb.js";import"./CC7D5923.js";import"./8LvnrNZw.js";import"./NSS4YtJq.js";import"./BsYmvPZw.js";import"./BiZrphst.js";const I={id:"recent-articles-wrapper",class:"py-5"},P=r("h2",{class:"mb-5 coloured-underline"},"Recent Articles",-1),Q=["src","img-alt"],W={class:"text-start card-title"},X=["innerHTML"],Y={__name:"RecentArticlesSection",async setup(i){let n,c;const m=new Date,{data:u,error:l}=([n,c]=b(async()=>J("blog",async()=>await O("blog").where({date:{$exists:!0,$lte:m},hidden:{$not:!0}}).sort({date:-1}).find())),n=await n,c(),n);return l.value&&console.error(l.value),(d,tt)=>{const p=T,f=V,h=q,g=D,y=H,B=E,x=M,w=N,C=z,v=K;return a(),_("div",I,[P,t(v,{id:"recent-articles-container"},{default:e(()=>[t(C,null,{default:e(()=>[t(w,null,{default:e(()=>[(a(!0),_(k,null,F(s(u),o=>(a(),R(x,{key:o._path,class:"mb-3",cols:"12",lg:"4",sm:"6"},{default:e(()=>[t(B,{value:o},{default:e(()=>[t(y,{class:"article-summary-card",title:o.title,tag:"article","no-body":""},{default:e(()=>[r("img",{class:"card-img",src:o.image.url,"img-alt":o.title},null,8,Q),t(g,null,{default:e(()=>[t(p,{to:o._path},{default:e(()=>[r("h4",W,$(o.title),1)]),_:2},1032,["to"]),t(f,null,{default:e(()=>[r("div",{innerHTML:o.summary},null,8,X)]),_:2},1024),t(h,{to:o._path,variant:"success"},{default:e(()=>[A("Read More")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}}},Z=Y,ft={__name:"blog",setup(i){return(n,c)=>(a(),_("div",null,[t(s(S),{"icon-classes":"text-success","logo-color":"#f8f9fa"}),j(n.$slots,"default"),t(Z),t(s(U)),t(s(G)),t(s(L))]))}};export{ft as default};
//# sourceMappingURL=28yUmPZS.js.map
