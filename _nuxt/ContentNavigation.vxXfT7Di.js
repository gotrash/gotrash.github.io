function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.CVxEJoZQ.js","./entry.B53Zpzy5.js","./query.CWb0mrRX.js","./preview.CLIqEmU5.js","./index.BsYmvPZw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{u as m}from"./asyncData.Bz5XyNBy.js";import{R as v,i as l,S as d,D as g,T as f,_ as y,M as h,X as _,f as w,N as C,Q as p}from"./entry.B53Zpzy5.js";import{q as N,w as c,e as P,s as $,j as x,u as T}from"./query.CWb0mrRX.js";import{u as E}from"./preview.CLIqEmU5.js";import{_ as S}from"./nuxt-link.DoFv4mtC.js";const j="$s";function D(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=j+n,r=d(),i=v(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(l(s))return r.payload.state[a]=s,s;i.value=s}return i}const R=async t=>{const{content:e}=g().public;typeof(t==null?void 0:t.params)!="function"&&(t=N(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${P(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if($())return(await y(()=>import("./client-db.CVxEJoZQ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:x(n),previewToken:E().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&D("dd-navigation").value){const{navigation:a}=T();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>R(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(S,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),K=b;export{K as default};
//# sourceMappingURL=ContentNavigation.vxXfT7Di.js.map
