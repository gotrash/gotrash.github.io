function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.ZwamEAN-.js","./entry.DDwjtg9W.js","./query.Zm-KpEuR.js","./preview.D6vUoMg7.js","./index.BsYmvPZw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as m}from"./asyncData.DQzlckr9.js";import{q as v,r as l,s as d,i as g,v as f,_ as y,j as h,x as _,y as w,k as C,m as p}from"./entry.DDwjtg9W.js";import{q as x,w as c,e as P,s as $,j as N,u as j}from"./query.Zm-KpEuR.js";import{u as E}from"./preview.D6vUoMg7.js";import{_ as T}from"./nuxt-link.DS3k0q4d.js";const S="$s";function b(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=d(),i=v(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(l(s))return r.payload.state[a]=s,s;i.value=s}return i}const D=async t=>{const{content:e}=g().public;typeof(t==null?void 0:t.params)!="function"&&(t=x(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${P(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if($())return(await y(()=>import("./client-db.ZwamEAN-.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:N(n),previewToken:E().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},R=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&b("dd-navigation").value){const{navigation:a}=j();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>D(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(T,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),K=R;export{K as default};
//# sourceMappingURL=ContentNavigation.B-csy-Cr.js.map
