import{g as x,o as s,b as _,k as a,w as e,F as v,r as k,i as A,c as F,a as o,t as L,d as $,l as M,aC as B,M as C,aD as D,u as q,L as N,K as S,z as T,aM as V}from"./B3r-W5Ln.js";import z from"./BNQVW-Jq.js";import{u as H}from"./DxWyzlYC.js";import{q as K}from"./fEkJI6b2.js";const R={id:"featured-articles-wrapper",class:"py-5"},E=o("h2",{class:"mb-5 coloured-underline"},"Featured Articles",-1),U=["src","img-alt"],j={class:"card-title"},G=["innerHTML"],I={__name:"FeaturedArticlesSection",async setup(J){let n,r;const l=new Date,{data:i,error:c}=([n,r]=x(async()=>H("blog",async()=>await K("blog").where({date:{$exists:!0,$lte:l},draft:{$not:!0},hidden:{$not:!0},featured:{$exists:!0,$eq:!0}}).sort({date:-1}).limit(3).find())),n=await n,r(),n);return c.value&&console.error(c.value),(d,O)=>{const u=M,m=B,p=C,f=D,b=q,g=z,h=N,y=S,w=T;return s(),_("div",R,[E,a(w,{id:"featured-articles-container"},{default:e(()=>[a(y,null,{default:e(()=>[(s(!0),_(v,null,k(A(i),t=>(s(),F(h,{key:t._path,class:"mb-3",cols:"12",lg:"4",sm:"6"},{default:e(()=>[a(g,{value:t},{default:e(()=>[a(b,{class:"article-summary-card",title:t.title,tag:"article","no-body":""},{default:e(()=>[o("img",{class:"card-img",src:t.img,"img-alt":t.title},null,8,U),a(f,null,{default:e(()=>[a(u,{to:t._path},{default:e(()=>[o("h4",j,L(t.title),1)]),_:2},1032,["to"]),a(m,null,{default:e(()=>[o("div",{innerHTML:t.summary},null,8,G)]),_:2},1024),a(p,{to:t._path,variant:"success"},{default:e(()=>[$("Read More")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1})])}}},Y=I;V("/images/google-play-badge.png");export{Y as F};
//# sourceMappingURL=DaYTvuyA.js.map
