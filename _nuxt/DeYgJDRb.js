import{g as v,o as n,b as _,i as a,w as e,F as x,r as k,j as $,c as A,a as s,t as B,d as F,T,au as q,J as z,av as C,u as D,k as L,X as M,z as N}from"./CFG7M_Nj.js";import V from"./BZ8iJRZK.js";import{a as H}from"./B7RYbQLb.js";import{q as S}from"./DvA9eh6M.js";const X={id:"featured-articles-wrapper",class:"py-5"},j=s("h2",{class:"mb-5 coloured-underline"},"Featured Articles",-1),E={class:"card-img-holder"},J=["src","img-alt"],R={class:"h5 card-title fw-bold text-start"},G=["innerHTML"],W={__name:"FeaturedArticlesSection",async setup(I){let o,r;const l=new Date,{data:d,error:c}=([o,r]=v(async()=>H("blog",async()=>await S("blog").where({date:{$exists:!0,$lte:l},hidden:{$not:!0},featured:{$exists:!0,$eq:!0}}).sort({date:-1}).limit(3).find())),o=await o,r(),o);return c.value&&console.error(c.value),(i,K)=>{const u=T,m=q,p=z,f=C,b=D,h=V,g=L,y=M,w=N;return n(),_("div",X,[j,a(w,{id:"featured-articles-container"},{default:e(()=>[a(y,null,{default:e(()=>[(n(!0),_(x,null,k($(d),t=>(n(),A(g,{key:t._path,class:"mb-3",cols:"12",lg:"4",sm:"6"},{default:e(()=>[a(h,{value:t},{default:e(()=>[a(b,{class:"article-summary-card",title:t.title,tag:"article","no-body":""},{default:e(()=>[s("div",E,[s("img",{style:{"background-color":"rgba(0, 0, 0, 0.6)"},class:"card-img",src:t.image.url,"img-alt":t.title},null,8,J)]),a(f,null,{default:e(()=>[a(u,{to:t._path},{default:e(()=>[s("h4",R,B(t.title),1)]),_:2},1032,["to"]),a(m,null,{default:e(()=>[s("div",{class:"fw-normal",innerHTML:t.summary},null,8,G)]),_:2},1024),a(p,{to:t._path,variant:"success"},{default:e(()=>[F("Read More")]),_:2},1032,["to"])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1})])}}};export{W as _};
//# sourceMappingURL=DeYgJDRb.js.map
