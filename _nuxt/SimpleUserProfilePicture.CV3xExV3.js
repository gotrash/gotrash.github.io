import{p as b,ap as c,$ as I,m as O,aq as $,ar as x,I as v,as as D,a5 as F,z as N,o as d,c as g,a as B,a3 as y,d as f,L as P,b as q,G as j}from"./entry.flha_NBA.js";import{u as M}from"./asyncData.Bg81Y2YN.js";function _(s,e,t){const[o={},a]=typeof e=="string"?[{},e]:[e,t],r=b(()=>{let l=s;return typeof l=="function"&&(l=l()),c(l)}),n=o.key||I([a,typeof r.value=="string"?r.value:"",...V(o)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const u=n===a?"$f"+n:n;if(!o.baseURL&&typeof r.value=="string"&&r.value[0]==="/"&&r.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:w,lazy:E,default:R,transform:U,pick:L,watch:p,immediate:C,getCachedData:z,deep:A,dedupe:S,...T}=o,h=O({...$,...T,cache:typeof o.cache=="boolean"?void 0:o.cache}),k={server:w,lazy:E,default:R,transform:U,pick:L,immediate:C,getCachedData:z,deep:A,dedupe:S,watch:p===!1?[]:[h,r,...p||[]]};let i;return M(u,()=>{var m;(m=i==null?void 0:i.abort)==null||m.call(i),i=typeof AbortController<"u"?new AbortController:{};const l=c(o.timeout);return l&&setTimeout(()=>i.abort(),l),(o.$fetch||globalThis.$fetch)(r.value,{signal:i.signal,...h})},k)}function V(s){var t;const e=[((t=c(s.method))==null?void 0:t.toUpperCase())||"GET",c(s.baseURL)];for(const o of[s.params||s.query]){const a=c(o);if(!a)continue;const r={};for(const[n,u]of Object.entries(a))r[c(n)]=c(u);e.push(r)}return e}async function G(s,e={}){var u;const{getSession:t}=useAuth(),o=v(),a=await t(),r={method:"GET",baseURL:o.public.apiUrl??"http://localhost:8090",headers:{Authorization:`Bearer ${(u=a==null?void 0:a.token)==null?void 0:u.access_token}`},lazy:!0,server:!1},n=x(e,r);return _(s,n,"$UqgiltlUfE")}const H=v(),K=D("user",{actions:{async LOAD_PROFILE_PICTURE_BLOB(s){this.profilePicture&&(await new Promise(e=>{try{URL.revokeObjectURL(this.profilePicture)}catch{}finally{e()}}),await new Promise(e=>{this.profilePicture=null,e()})),this.profilePicture=URL.createObjectURL(s)},async FETCH_PROFILE_PICTURE(){var t,o,a;this.loadingProfilePicture=!0;const{getSession:s}=useAuth(),e=await s();(o=(t=e==null?void 0:e.session)==null?void 0:t.user)!=null&&o.image&&_(e.session.user.image,{responseType:"blob",baseURL:H.public.apiUrl??"http://localhost:8090",key:"user-profile-picture",server:!0,lazy:!1,headers:{Authorization:`Bearer ${(a=e==null?void 0:e.token)==null?void 0:a.access_token}`}},"$vpSqNedazv").then(r=>{this.LOAD_PROFILE_PICTURE_BLOB(r.data.value)}).catch(r=>{console.error("There was a problem loading the profile picture. %o",r)}).finally(()=>{this.loadingProfilePicture=!1})},async UPDATE_PROFILE_PICTURE(s){if(useAuth(),this.loadingProfilePicture=!0,!!s)try{console.log("We have a file: %o",s),await new Promise(t=>setTimeout(t,1e3));const e=new FormData;e.append("image",s),G("/user/profile/picture",{method:"post",body:e}).then(t=>{console.log("Pinia Response: %o",t)}).catch(t=>{console.log("Pinia Error: %o",t)}).finally(()=>{this.loadingProfilePicture=!1})}catch{}finally{}}},getters:{shouldRememberUser(s){return s.rememberMe}},state:()=>({loadingProfilePicture:!0,profilePicture:null,rememberMe:!1})}),W=["xs","sm","lg","2x","3x","5x","7x","10x"],J=["alt","src"],ee={__name:"SimpleUserProfilePicture",props:{elevation:{type:[String,Number],requireD:!1,default(){return 2}},iconSize:{type:String,default(){return"lg"},validator(s){return W.includes(s)}},overlayIconClasses:{default(){return null}},overlayColor:{type:String,required:!1,default(){return"rgba(0, 0, 0, 0.8)"}},size:{type:[String,Number],requireD:!1,default(){return"2.1rem"}},animationMode:{type:String,default(){return"spin"},validator(s){return["pulse","spin"].includes(s)}}},setup(s){const e=K(),t=s,o=b(()=>{const a=[`fa-${t.animationMode}`,`fa-${t.iconSize}`];return t.overlayIconClasses&&a.push(t.overlayIconClasses),a});return e.FETCH_PROFILE_PICTURE(),F(()=>{console.log("Is Mounted")}),(a,r)=>{const n=N("fa-icon");return d(),g("div",{class:"position-relative",style:P({height:Number.isNaN(t.size)?t.size+"px":t.size,width:Number.isNaN(t.size)?t.size+"px":t.size,margin:`.15rem 0 .15rem ${(t.elevation||1)*2/10}rem`})},[B("img",{ref:"image",alt:a.$t("GENERAL.LABEL.USER_AVATAR"),class:y(["img-circle",`elevation-${s.elevation}`,"m-0"]),src:f(e).profilePicture||"/images/user-placeholder.png",style:{"object-fit":"cover",height:"100%",width:"100%"}},null,10,J),f(e).loadingProfilePicture?(d(),g("div",{key:0,class:"position-absolute d-flex align-items-center justify-content-around text-success rounded-circle",style:P({top:0,left:0,width:"100%",height:"100%","background-color":s.overlayColor})},[q(n,{icon:"spinner",class:y(f(o))},null,8,["class"])],4)):j("",!0)],4)}}};export{ee as default};
//# sourceMappingURL=SimpleUserProfilePicture.CV3xExV3.js.map
