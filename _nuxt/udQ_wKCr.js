import{a4 as _,P as C,a6 as g,a7 as v,f as D,a2 as o}from"./DXaxC3tg.js";import{u as d}from"./BRlW_2CM.js";import w from"./vF5UVK3v.js";import x from"./BdNaq-R2.js";import"./DIWVMfXO.js";import"./BsYmvPZw.js";import"./vBMzxSKA.js";import"./XxGIIbjf.js";import"./CtxkS6kE.js";const S=_({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(f){const{contentHead:c}=C().public.content,t=g(),{tag:m,excerpt:r,path:s,query:i,head:a}=f,u=a===void 0?c:a,l={...i||{},path:s||(i==null?void 0:i.path)||v(D().path),find:"one"},h=(e,n)=>o("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:e,data:n},null,2));return o(x,l,{default:t!=null&&t.default?({data:e,refresh:n,isPartial:y})=>{var p;return u&&d(e),(p=t.default)==null?void 0:p.call(t,{doc:e,refresh:n,isPartial:y,excerpt:r,...this.$attrs})}:({data:e})=>(u&&d(e),o(w,{value:e,excerpt:r,tag:m,...this.$attrs},{empty:n=>t!=null&&t.empty?t.empty(n):h("default",e)})),empty:e=>{var n;return((n=t==null?void 0:t.empty)==null?void 0:n.call(t,e))||o("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":e=>{var n;return((n=t==null?void 0:t["not-found"])==null?void 0:n.call(t,e))||o("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),q=S,I=q;export{I as default};
//# sourceMappingURL=udQ_wKCr.js.map
