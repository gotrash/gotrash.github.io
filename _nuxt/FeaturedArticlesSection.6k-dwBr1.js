import{as as x,o as s,c as r,a as o,q as e,F as b,at as g,u as B,m as w,t as c,v as y,x as i,au as $,B as v,J as A,U as F,K as C,W as k}from"./entry.B53Zpzy5.js";import q from"./ContentRenderer.3Zh-ZTtS.js";import{u as D}from"./asyncData.Bz5XyNBy.js";import{q as N}from"./query.CWb0mrRX.js";const S={class:"d-flex align-items-center flex-column p-5 border-top border-success",style:{"border-top-width":"3px !important"}},T=i("div",null,[i("h2",{class:"mb-5 coloured-underline"},"Featured Articles")],-1),V={__name:"FeaturedArticlesSection",async setup(R){let a,n;const{data:l}=([a,n]=x(()=>D("featured-articles",()=>N("blog").where({date:{$exists:!0,$lte:new Date},draft:{$not:!0},hidden:{$not:!0},featured:{$exists:!0,$eq:!0}}).sort({date:1}).limit(3).find())),a=await a,n(),a);return(U,W)=>{const _=$,d=v,u=A,m=q,p=F,f=C,h=k;return s(),r("div",S,[T,o(h,{fluid:""},{default:e(()=>[o(f,null,{default:e(()=>[(s(!0),r(b,null,g(B(l),t=>(s(),w(p,{key:t._path,class:"mb-3",cols:"12",md:"4"},{default:e(()=>[o(m,{value:t},{default:e(()=>[o(u,{title:t.title,"img-alt":t.title||"https://place-hold.it/1200x600/#28a74/#21252&text=GoTrash","img-src":t.img,"img-top":"",tag:"article"},{default:e(()=>[o(_,null,{default:e(()=>[c(y(t.description),1)]),_:2},1024),o(d,{to:t._path,variant:"success"},{default:e(()=>[c("Read More")]),_:2},1032,["to"])]),_:2},1032,["title","img-alt","img-src"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1})])}}},L=V;export{L as F};
//# sourceMappingURL=FeaturedArticlesSection.6k-dwBr1.js.map
