import{o as i,b as o,a as u,i as r,w as g,n as f,t as _,c as m,R as y,U as p,L as v,K as S,z as B,r as b,F as k,h as w,E as x,j as h,k as $,V as q,W as s}from"./xlgVRyPm.js";import{_ as z}from"./DlAUqK2U.js";import{A as P}from"./CC7D5923.js";const C={key:0,class:"page-header-banner-title"},E={__name:"PageHeaderBanner",props:{backgroundColor:String,padTop:Boolean,mini:Boolean,imageUrl:{type:String,required:!1,default(){}},title:{type:String,required:!1}},setup(e){return(n,t)=>{const l=p,c=v,a=S,d=B;return i(),o("div",null,[u("div",{class:f(["page-header-banner",{"page-header-banner-mini":!!e.mini}]),style:y({"background-color":e.backgroundColor,"background-image":e.imageUrl?`linear-gradient(
                        rgba(0, 0, 0, 0.9),
                        rgba(0, 0, 0, .4),
                        rgba(0, 0, 0, .4),
                        rgba(0, 0, 0, .9)
                      ), url(${e.imageUrl})`:void 0})},[r(d,{fluid:""},{default:g(()=>[r(a,null,{default:g(()=>[r(c,{cols:"12",md:"10",lg:"7",xl:"8","offset-md":"1"},{default:g(()=>[u("div",{class:f([{pending:!e.title},"page-header-banner-title-wrapper"])},[e.title?(i(),o("h1",C,_(e.title),1)):(i(),m(l,{key:1,size:"lg",variant:"dark",animation:"glow"}))],2)]),_:1})]),_:1})]),_:1})],6)])}}},L={};function A(e,n){const t=p;return i(),o("div",null,[u("h2",null,[r(t,{variant:"success",animation:"glow",size:"lg"})]),u("p",null,[r(t,{animation:"glow"}),r(t,{animation:"glow"}),r(t,{animation:"glow"}),r(t,{animation:"glow"}),r(t,{animation:"glow"})])])}const N=z(L,[["render",A]]),K={__name:"ArticlePlaceholdersPanel",props:{value:{type:Number,required:!1,default(){return 3}}},setup(e){return(n,t)=>(i(!0),o(k,null,b(new Array(e.value).map((l,c)=>c),l=>(i(),m(N,{key:`article-section-placeholder-${l+1}`}))),128))}},U={__name:"LoadingSpinnerPanel",props:{height:{type:[Number,String],required:!1,default(){return 100}},icon:{type:String,required:!1,default(){return"spinner"}},iconSize:{type:String,required:!1,default(){return"2x"},validator(e){return P.includes(e)}},spin:{type:Boolean,required:!1,default(){return!0}}},setup(e){const n=e,t=w(()=>isNaN(n.height)?n.height:n.height+"px");return(l,c)=>{const a=x("fa-icon");return i(),o("div",{class:"gt-loading-spinner-panel",style:y(`height: ${h(t)}`)},[r(a,{icon:e.icon,class:f([`fa-fw fa-${e.iconSize} text-success`,{"fa-spin":!!e.spin}])},null,8,["icon","class"])],4)}}},F=U,R={__name:"LinksPanel",props:["busy","links"],setup(e){const n=e,t=w(()=>(n.links||[]).filter(l=>!l.hidden));return(l,c)=>e.busy?(i(),m(F,{key:0})):(i(!0),o(k,{key:1},b(h(t),(a,d)=>(i(),m($(h(q)),{key:`sidebar-link-${d+1}`,to:a.to,href:a.url,target:a.url?a.target||"_blank":a.target||void 0},{default:g(()=>[u("div",{class:f(["border-bottom border-success p-2",{"mb-1 border-top":d===0}])},_(a.title),3)]),_:2},1032,["to","href","target"]))),128))}},H={props:{busy:Boolean,description:{type:String,required:!1,default(){return"For more information, please see the following links with further information relevant to this article."}},links:{type:Array,required:!0},title:{type:String,required:!1,default(){return"Related Links"}}},setup(e){return()=>{const n=[];if(n.push(s("h3",[e.busy?s(p,{animation:"glow",variant:"success",size:"lg"}):s("a",{href:"#related-links"},e.title)])),e.busy)for(let t=0;t<3;t++)n.push(s(p,{animation:"glow",key:`related-articles-text-placeholder-${t}`}));else n.push(s("p",e.description)),n.push(s(R,{links:e.links}));return s("div",{id:"related-links"},n)}}};export{E as _,K as a,H as b};
//# sourceMappingURL=BEi5dBzz.js.map
