import{u as g}from"./asyncData.CTB0zUrY.js";import{q as m}from"./query.B0lZ8DdQ.js";import{m as C,B as S,C as b,l as A,j as _,A as k,q as N,v as O}from"./entry.eNGIpM51.js";import"./preview.D2H5ttOc.js";const Q=C({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(u){const{path:t,only:r,without:o,where:a,sort:l,limit:f,skip:d,locale:s,find:p}=S(u),y=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),h=!A().public.content.experimental.advanceQuery;_(()=>u,()=>n(),{deep:!0});const i=e=>h?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:n}=await g(`content-query-${k(u)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),a.value&&(e=e.where(a.value)),l.value&&(e=e.sort(l.value)),f.value&&(e=e.limit(f.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),p.value==="one"?e.findOne().then(i):p.value==="surround"?t.value?h?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:y,data:v,refresh:n}},render(u){var c;const t=N(),{data:r,refresh:o,isPartial:a,path:l,only:f,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:v}=u,n={path:l,only:f,without:d,where:s,sort:p,limit:y,skip:h,locale:i,find:v};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((c=r==null?void 0:r.body)!=null&&c.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:a,props:n,...this.$attrs}):((w,q)=>O("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:a})}}),B=Q;export{B as default};
//# sourceMappingURL=ContentQuery.BXy9n1dA.js.map
