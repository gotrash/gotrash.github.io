import{w as x,o as s,c as _,d as a,e,I as v,R as L,b as A,y as B,a as o,t as $,B as k,U as F,aB as D,D as q,aK as C,P as K,L as M,K as N,z as R,aL as S}from"./D3_13JqX.js";import T from"./CkwbLf_M.js";import{u as V}from"./DZFRTYns.js";import{q as z}from"./DgP7dpgg.js";const H={id:"featured-articles-wrapper",class:"py-5"},U=o("h2",{class:"mb-5 coloured-underline"},"Featured Articles",-1),E=["src","img-alt"],I={class:"card-title"},P=["innerHTML"],j={__name:"FeaturedArticlesSection",async setup(G){let n,r;const l=new Date,{data:d,error:c}=([n,r]=x(async()=>V("blog",async()=>await z("blog").where({date:{$exists:!0,$lte:l},draft:{$not:!0},hidden:{$not:!0},featured:{$exists:!0,$eq:!0}}).sort({date:1}).limit(3).find())),n=await n,r(),n);return c.value&&console.error(c.value),(i,J)=>{const u=F,m=D,p=q,f=C,b=K,g=T,h=M,y=N,w=R;return s(),_("div",H,[U,a(w,{id:"featured-articles-container"},{default:e(()=>[a(y,null,{default:e(()=>[(s(!0),_(v,null,L(A(d),t=>(s(),B(h,{key:t._path,class:"mb-3",cols:"12",lg:"4",sm:"6"},{default:e(()=>[a(g,{value:t},{default:e(()=>[a(b,{class:"article-summary-card",title:t.title,tag:"article","no-body":""},{default:e(()=>[o("img",{class:"card-img",src:t.img,"img-alt":t.title},null,8,E),a(f,null,{default:e(()=>[a(u,{to:t._path},{default:e(()=>[o("h4",I,$(t.title),1)]),_:2},1032,["to"]),a(m,null,{default:e(()=>[o("div",{innerHTML:t.summary},null,8,P)]),_:2},1024),a(p,{to:t._path,variant:"success"},{default:e(()=>[k("Read More")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1})])}}},Y=j;S("/images/google-play-badge.png");export{Y as F};
//# sourceMappingURL=Ci0Ti421.js.map
