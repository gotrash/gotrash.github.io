import{o as i,b as o,i as r,w as d,a as f,R as m,t as _,c as g,P as y,S as p,L as S,K as v,z as B,r as b,F as k,h as w,C as x,j as h,U as P,V as $,W as l}from"./PA0DvY3f.js";import{_ as q}from"./DlAUqK2U.js";import{A as z}from"./CC7D5923.js";const C={key:0,class:"page-header-banner-title"},K={__name:"PageHeaderBanner",props:{backgroundColor:String,padTop:Boolean,mini:Boolean,imageUrl:{type:String,required:!1,default(){}},title:{type:String,required:!1}},setup(e){return(n,t)=>{const s=p,c=S,a=v,u=B;return i(),o("div",{class:m(["page-header-banner",{"page-header-banner-mini":!!e.mini}]),style:y({"background-color":e.backgroundColor,"background-image":e.imageUrl?`url(${e.imageUrl})`:void 0})},[r(u,{fluid:""},{default:d(()=>[r(a,null,{default:d(()=>[r(c,{cols:"12",md:"10",lg:"7",xl:"8","offset-md":"1"},{default:d(()=>[f("div",{class:m([{pending:!e.title},"page-header-banner-title-wrapper"])},[e.title?(i(),o("h1",C,_(e.title),1)):(i(),g(s,{key:1,size:"lg",variant:"dark",animation:"glow"}))],2)]),_:1})]),_:1})]),_:1})],6)}}},L={};function A(e,n){const t=p;return i(),o("div",null,[f("h2",null,[r(t,{variant:"success",animation:"glow",size:"lg"})]),f("p",null,[r(t,{animation:"glow"}),r(t,{animation:"glow"}),r(t,{animation:"glow"}),r(t,{animation:"glow"}),r(t,{animation:"glow"})])])}const N=q(L,[["render",A]]),E={__name:"ArticlePlaceholdersPanel",props:{value:{type:Number,required:!1,default(){return 3}}},setup(e){return(n,t)=>(i(!0),o(k,null,b(new Array(e.value).map((s,c)=>c),s=>(i(),g(N,{key:`article-section-placeholder-${s+1}`}))),128))}},U={__name:"LoadingSpinnerPanel",props:{height:{type:[Number,String],required:!1,default(){return 100}},icon:{type:String,required:!1,default(){return"spinner"}},iconSize:{type:String,required:!1,default(){return"2x"},validator(e){return z.includes(e)}},spin:{type:Boolean,required:!1,default(){return!0}}},setup(e){const n=e,t=w(()=>isNaN(n.height)?n.height:n.height+"px");return(s,c)=>{const a=x("fa-icon");return i(),o("div",{class:"gt-loading-spinner-panel",style:y(`height: ${h(t)}`)},[r(a,{icon:e.icon,class:m([`fa-fw fa-${e.iconSize} text-success`,{"fa-spin":!!e.spin}])},null,8,["icon","class"])],4)}}},F=U,R={__name:"LinksPanel",props:["busy","links"],setup(e){const n=e,t=w(()=>(n.links||[]).filter(s=>!s.hidden));return(s,c)=>e.busy?(i(),g(F,{key:0})):(i(!0),o(k,{key:1},b(h(t),(a,u)=>(i(),g(P(h($)),{key:`sidebar-link-${u+1}`,to:a.to,href:a.url,target:a.url?a.target||"_blank":a.target||void 0},{default:d(()=>[f("div",{class:m(["border-bottom border-success p-2",{"mb-1 border-top":u===0}])},_(a.title),3)]),_:2},1032,["to","href","target"]))),128))}},H={props:{busy:Boolean,description:{type:String,required:!1,default(){return"For more information, please see the following links with further information relevant to this article."}},links:{type:Array,required:!0},title:{type:String,required:!1,default(){return"Related Links"}}},setup(e){return()=>{const n=[];if(n.push(l("h3",[e.busy?l(p,{animation:"glow",variant:"success",size:"lg"}):l("a",{href:"#related-links"},e.title)])),e.busy)for(let t=0;t<3;t++)n.push(l(p,{animation:"glow",key:`related-articles-text-placeholder-${t}`}));else n.push(l("p",e.description)),n.push(l(R,{links:e.links}));return l("div",{id:"related-links"},n)}}};export{K as _,E as a,H as b};
//# sourceMappingURL=B-ZhWTlo.js.map
