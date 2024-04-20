import{M as _,j as B,y as b,N as q,O as C,P as N,Q as w,R as L,S as T,U,m as P,E as j,B as O,V,W as E,X as I,i as D,s as R,Y as F,l as H,C as M}from"./entry.Dx1TCEG5.js";async function k(t,n=_()){const{path:u,matched:e}=n.resolve(t);if(!e.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(u)))return;const r=n._preloadPromises=n._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>k(t,n));n._routePreloaded.add(u);const i=e.map(s=>{var a;return(a=s.components)==null?void 0:a.default}).filter(s=>typeof s=="function");for(const s of i){const a=Promise.resolve(s()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}const z=(...t)=>t.find(n=>n!==void 0);function Q(t){const n=t.componentName||"NuxtLink";function u(e,r){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return S(e,t.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:r(e).path,s={...e,path:S(i,t.trailingSlash)};return"name"in s&&delete s.name,s}return B({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const i=_(),s=D(),a=b(()=>{const l=e.to||e.href||"";return u(l,i.resolve)}),f=b(()=>typeof a.value=="string"&&q(a.value,{acceptRelative:!0})),g=b(()=>e.target&&e.target!=="_self"),p=b(()=>e.external||g.value?!0:typeof a.value=="object"?!1:a.value===""||f.value),x=C(!1),v=C(null),A=l=>{var d;v.value=e.custom?(d=l==null?void 0:l.$el)==null?void 0:d.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!$()){const d=R();let h,o=null;N(()=>{const y=W();w(()=>{h=L(()=>{var c;(c=v==null?void 0:v.value)!=null&&c.tagName&&(o=y.observe(v.value,async()=>{o==null||o(),o=null;const m=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",m).catch(()=>{}),!p.value&&k(a.value,i).catch(()=>{})]),x.value=!0}))})})}),T(()=>{h&&U(h),o==null||o(),o=null})}return()=>{var o,y;if(!p.value){const c={ref:A,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel||void 0),P(j("RouterLink"),c,r.default)}const l=typeof a.value=="object"?((o=i.resolve(a.value))==null?void 0:o.href)??null:a.value&&!e.external&&!f.value?u(O(s.app.baseURL,a.value),i.resolve):a.value||null,d=e.target||null,h=z(e.noRel?"":e.rel,t.externalRelAttribute,f.value||g.value?"noopener noreferrer":"")||null;if(e.custom){if(!r.default)return null;const c=()=>F(l,{replace:e.replace,external:e.external});return r.default({href:l,navigate:c,get route(){if(!l)return;const m=V(l);return{path:m.pathname,fullPath:m.pathname,get query(){return E(m.search)},hash:m.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:d,isExternal:p.value,isActive:!1,isExactActive:!1})}return P("a",{ref:v,href:l,rel:h,target:d},(y=r.default)==null?void 0:y.call(r))}}})}const Y=Q(I);function S(t,n){const u=n==="append"?H:M;return q(t)&&!t.startsWith("http")?t:u(t,!0)}function W(){const t=R();if(t._observer)return t._observer;let n=null;const u=new Map,e=(i,s)=>(n||(n=new IntersectionObserver(a=>{for(const f of a){const g=u.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&g&&g()}})),u.set(i,s),n.observe(i),()=>{u.delete(i),n.unobserve(i),u.size===0&&(n.disconnect(),n=null)});return t._observer={observe:e}}function $(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{Y as _};
//# sourceMappingURL=nuxt-link.BQCr0m2H.js.map
