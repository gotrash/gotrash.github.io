import{o as P,c as w,w as E,i as y,l as Ae,n as we,d as ie,a as k,k as le,X as ce,z as ue,m as Ve,p as R,q as De,s as D,v as G,x as H,y as Le,h as v,j as d,A as Te,B as je,C as Q,D as W,E as J,G as de,H as fe,t as V,b as T,$ as Ie,O as Ne,I as ze,J as Fe,K as Be,_ as Ge,L as Y,e as me,F as Me,M as He,N as Ue,P as Ze,Q as qe,R as Ke,u as Xe}from"./CFG7M_Nj.js";import{_ as Qe}from"./CTjtrRgW.js";import{_ as We}from"./DeYgJDRb.js";import{F as Je,a as Ye}from"./DhXZPCSG.js";import{_ as $e}from"./DlAUqK2U.js";import{S as pe}from"./DQZPhkaF.js";import"./BZ8iJRZK.js";import"./DRp5Ik13.js";import"./C-v3KzvZ.js";import"./puiNGRaC.js";import"./B7RYbQLb.js";import"./DvA9eh6M.js";const et=k("span",{style:{"font-weight":"800","font-size":"100px"}},"?",-1),tt={__name:"ComingSoonSection",props:{elementClasses:{type:String,required:!1,default(){return"fw-bold"}},tag:{type:String,required:!1,default(){return"h2"}}},setup(e){return(s,n)=>{const t=le,o=ce,a=ue;return P(),w(a,{fluid:""},{default:E(()=>[y(o,null,{default:E(()=>[y(t,{class:"text-center py-10",cols:"12"},{default:E(()=>[et,(P(),w(Ae(e.tag),{class:we(e.elementClasses)},{default:E(()=>[ie("Coming Soon")]),_:1},8,["class"]))]),_:1})]),_:1})]),_:1})}}};function ee(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,t)}return n}function x(e){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?ee(Object(n),!0).forEach(function(t){nt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function nt(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function te(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,t)=>(s.includes(t)||(n[t]=d(e[t])),n),{})}function j(e){return typeof e=="function"}function st(e){return Te(e)||je(e)}function he(e,s,n){let t=e;const o=s.split(".");for(let a=0;a<o.length;a++){if(!t[o[a]])return n;t=t[o[a]]}return t}function B(e,s,n){return v(()=>e.some(t=>he(s,t,{[n]:!1})[n]))}function ne(e,s,n){return v(()=>e.reduce((t,o)=>{const a=he(s,o,{[n]:!1})[n]||[];return t.concat(a)},[]))}function ve(e,s,n,t){return e.call(t,d(s),d(n),t)}function ge(e){return e.$valid!==void 0?!e.$valid:!e}function rt(e,s,n,t,o,a,p){let{$lazy:l,$rewardEarly:u}=o,i=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],$=arguments.length>8?arguments[8]:void 0,m=arguments.length>9?arguments[9]:void 0,g=arguments.length>10?arguments[10]:void 0;const h=R(!!t.value),r=R(0);n.value=!1;const f=D([s,t].concat(i,g),()=>{if(l&&!t.value||u&&!m.value&&!n.value)return;let c;try{c=ve(e,s,$,p)}catch(_){c=Promise.reject(_)}r.value++,n.value=!!r.value,h.value=!1,Promise.resolve(c).then(_=>{r.value--,n.value=!!r.value,a.value=_,h.value=ge(_)}).catch(_=>{r.value--,n.value=!!r.value,a.value=_,h.value=!0})},{immediate:!0,deep:typeof s=="object"});return{$invalid:h,$unwatch:f}}function ot(e,s,n,t,o,a,p,l){let{$lazy:u,$rewardEarly:i}=t;const $=()=>({}),m=v(()=>{if(u&&!n.value||i&&!l.value)return!1;let g=!0;try{const h=ve(e,s,p,a);o.value=h,g=ge(h)}catch(h){o.value=h}return g});return{$unwatch:$,$invalid:m}}function at(e,s,n,t,o,a,p,l,u,i,$){const m=R(!1),g=e.$params||{},h=R(null);let r,f;e.$async?{$invalid:r,$unwatch:f}=rt(e.$validator,s,m,n,t,h,o,e.$watchTargets,u,i,$):{$invalid:r,$unwatch:f}=ot(e.$validator,s,n,t,h,o,u,i);const c=e.$message;return{$message:j(c)?v(()=>c(te({$pending:m,$invalid:r,$params:te(g),$model:s,$response:h,$validator:a,$propertyPath:l,$property:p}))):c||"",$params:g,$pending:m,$invalid:r,$response:h,$unwatch:f}}function it(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const s=d(e),n=Object.keys(s),t={},o={},a={};let p=null;return n.forEach(l=>{const u=s[l];switch(!0){case j(u.$validator):t[l]=u;break;case j(u):t[l]={$validator:u};break;case l==="$validationGroups":p=u;break;case l.startsWith("$"):a[l]=u;break;default:o[l]=u}}),{rules:t,nestedValidators:o,config:a,validationGroups:p}}const lt="__root";function ct(e,s,n,t,o,a,p,l,u){const i=Object.keys(e),$=t.get(o,e),m=R(!1),g=R(!1),h=R(0);if($){if(!$.$partial)return $;$.$unwatch(),m.value=$.$dirty.value}const r={$dirty:m,$path:o,$touch:()=>{m.value||(m.value=!0)},$reset:()=>{m.value&&(m.value=!1)},$commit:()=>{}};return i.length?(i.forEach(f=>{r[f]=at(e[f],s,r.$dirty,a,p,f,n,o,u,g,h)}),r.$externalResults=v(()=>l.value?[].concat(l.value).map((f,c)=>({$propertyPath:o,$property:n,$validator:"$externalResults",$uid:`${o}-externalResult-${c}`,$message:f,$params:{},$response:null,$pending:!1})):[]),r.$invalid=v(()=>{const f=i.some(c=>d(r[c].$invalid));return g.value=f,!!r.$externalResults.value.length||f}),r.$pending=v(()=>i.some(f=>d(r[f].$pending))),r.$error=v(()=>r.$dirty.value?r.$pending.value||r.$invalid.value:!1),r.$silentErrors=v(()=>i.filter(f=>d(r[f].$invalid)).map(f=>{const c=r[f];return H({$propertyPath:o,$property:n,$validator:f,$uid:`${o}-${f}`,$message:c.$message,$params:c.$params,$response:c.$response,$pending:c.$pending})}).concat(r.$externalResults.value)),r.$errors=v(()=>r.$dirty.value?r.$silentErrors.value:[]),r.$unwatch=()=>i.forEach(f=>{r[f].$unwatch()}),r.$commit=()=>{g.value=!0,h.value=Date.now()},t.set(o,e,r),r):($&&t.set(o,e,r),r)}function ut(e,s,n,t,o,a,p){const l=Object.keys(e);return l.length?l.reduce((u,i)=>(u[i]=M({validations:e[i],state:s,key:i,parentKey:n,resultsCache:t,globalConfig:o,instance:a,externalResults:p}),u),{}):{}}function dt(e,s,n){const t=v(()=>[s,n].filter(r=>r).reduce((r,f)=>r.concat(Object.values(d(f))),[])),o=v({get(){return e.$dirty.value||(t.value.length?t.value.every(r=>r.$dirty):!1)},set(r){e.$dirty.value=r}}),a=v(()=>{const r=d(e.$silentErrors)||[],f=t.value.filter(c=>(d(c).$silentErrors||[]).length).reduce((c,_)=>c.concat(..._.$silentErrors),[]);return r.concat(f)}),p=v(()=>{const r=d(e.$errors)||[],f=t.value.filter(c=>(d(c).$errors||[]).length).reduce((c,_)=>c.concat(..._.$errors),[]);return r.concat(f)}),l=v(()=>t.value.some(r=>r.$invalid)||d(e.$invalid)||!1),u=v(()=>t.value.some(r=>d(r.$pending))||d(e.$pending)||!1),i=v(()=>t.value.some(r=>r.$dirty)||t.value.some(r=>r.$anyDirty)||o.value),$=v(()=>o.value?u.value||l.value:!1),m=()=>{e.$touch(),t.value.forEach(r=>{r.$touch()})},g=()=>{e.$commit(),t.value.forEach(r=>{r.$commit()})},h=()=>{e.$reset(),t.value.forEach(r=>{r.$reset()})};return t.value.length&&t.value.every(r=>r.$dirty)&&m(),{$dirty:o,$errors:p,$invalid:l,$anyDirty:i,$error:$,$pending:u,$touch:m,$reset:h,$silentErrors:a,$commit:g}}function M(e){let{validations:s,state:n,key:t,parentKey:o,childResults:a,resultsCache:p,globalConfig:l={},instance:u,externalResults:i}=e;const $=o?`${o}.${t}`:t,{rules:m,nestedValidators:g,config:h,validationGroups:r}=it(s),f=x(x({},l),h),c=t?v(()=>{const b=d(n);return b?d(b[t]):void 0}):n,_=x({},d(i)||{}),Z=v(()=>{const b=d(i);return t?b?d(b[t]):void 0:b}),q=ct(m,c,t,p,$,f,u,Z,n),C=ut(g,c,$,p,f,u,Z),K={};r&&Object.entries(r).forEach(b=>{let[S,O]=b;K[S]={$invalid:B(O,C,"$invalid"),$error:B(O,C,"$error"),$pending:B(O,C,"$pending"),$errors:ne(O,C,"$errors"),$silentErrors:ne(O,C,"$silentErrors")}});const{$dirty:I,$errors:ye,$invalid:N,$anyDirty:Ee,$error:Re,$pending:z,$touch:F,$reset:Pe,$silentErrors:Oe,$commit:X}=dt(q,C,a),xe=t?v({get:()=>d(c),set:b=>{I.value=!0;const S=d(n),O=d(i);O&&(O[t]=_[t]),G(S[t])?S[t].value=b:S[t]=b}}):null;t&&f.$autoDirty&&D(c,()=>{I.value||F();const b=d(i);b&&(b[t]=_[t])},{flush:"sync"});async function Ce(){return F(),f.$rewardEarly&&(X(),await J()),await J(),new Promise(b=>{if(!z.value)return b(!N.value);const S=D(z,()=>{b(!N.value),S()})})}function Se(b){return(a.value||{})[b]}function ke(){G(i)?i.value=_:Object.keys(_).length===0?Object.keys(i).forEach(b=>{delete i[b]}):Object.assign(i,_)}return H(x(x(x({},q),{},{$model:xe,$dirty:I,$error:Re,$errors:ye,$invalid:N,$anyDirty:Ee,$pending:z,$touch:F,$reset:Pe,$path:$||lt,$silentErrors:Oe,$validate:Ce,$commit:X},a&&{$getResultsForChild:Se,$clearExternalResults:ke,$validationGroups:K}),C))}class ft{constructor(){this.storage=new Map}set(s,n,t){this.storage.set(s,{rules:n,result:t})}checkRulesValidity(s,n,t){const o=Object.keys(t),a=Object.keys(n);return a.length!==o.length||!a.every(l=>o.includes(l))?!1:a.every(l=>n[l].$params?Object.keys(n[l].$params).every(u=>d(t[l].$params[u])===d(n[l].$params[u])):!0)}get(s,n){const t=this.storage.get(s);if(!t)return;const{rules:o,result:a}=t,p=this.checkRulesValidity(s,n,o),l=a.$unwatch?a.$unwatch:()=>({});return p?a:{$dirty:a.$dirty,$partial:!0,$unwatch:l}}}const L={COLLECT_ALL:!0,COLLECT_NONE:!1},se=Symbol("vuelidate#injectChildResults"),re=Symbol("vuelidate#removeChildResults");function mt(e){let{$scope:s,instance:n}=e;const t={},o=R([]),a=v(()=>o.value.reduce(($,m)=>($[m]=d(t[m]),$),{}));function p($,m){let{$registerAs:g,$scope:h,$stopPropagation:r}=m;r||s===L.COLLECT_NONE||h===L.COLLECT_NONE||s!==L.COLLECT_ALL&&s!==h||(t[g]=$,o.value.push(g))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],p);function l($){o.value=o.value.filter(m=>m!==$),delete t[$]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],l);const u=Q(se,[]);W(se,n.__vuelidateInjectInstances);const i=Q(re,[]);return W(re,n.__vuelidateRemoveInstances),{childResults:a,sendValidationResultsToParent:u,removeValidationResultsFromParent:i}}function _e(e){return new Proxy(e,{get(s,n){return typeof s[n]=="object"?_e(s[n]):v(()=>s[n])}})}let oe=0;function $t(e,s){var n;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(t=e,e=void 0,s=void 0);let{$registerAs:o,$scope:a=L.COLLECT_ALL,$stopPropagation:p,$externalResults:l,currentVueInstance:u}=t;const i=u||((n=Ve())===null||n===void 0?void 0:n.proxy),$=i?i.$options:{};o||(oe+=1,o=`_vuelidate_${oe}`);const m=R({}),g=new ft,{childResults:h,sendValidationResultsToParent:r,removeValidationResultsFromParent:f}=i?mt({$scope:a,instance:i}):{childResults:R({})};if(!e&&$.validations){const c=$.validations;s=R({}),De(()=>{s.value=i,D(()=>j(c)?c.call(s.value,new _e(s.value)):c,_=>{m.value=M({validations:_,state:s,childResults:h,resultsCache:g,globalConfig:t,instance:i,externalResults:l||i.vuelidateExternalResults})},{immediate:!0})}),t=$.validationsConfig||t}else{const c=G(e)||st(e)?e:H(e||{});D(c,_=>{m.value=M({validations:_,state:s,childResults:h,resultsCache:g,globalConfig:t,instance:i??{},externalResults:l})},{immediate:!0})}return i&&(r.forEach(c=>c(m,{$registerAs:o,$scope:a,$stopPropagation:p})),Le(()=>f.forEach(c=>c(o)))),v(()=>x(x({},d(m.value)),h.value))}const U=e=>{if(e=d(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let s in e)return!0;return!1}return!!String(e).length},pt=e=>(e=d(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function A(){for(var e=arguments.length,s=new Array(e),n=0;n<e;n++)s[n]=arguments[n];return t=>(t=d(t),!U(t)||s.every(o=>(o.lastIndex=0,o.test(t))))}A(/^[a-zA-Z]*$/);A(/^[a-zA-Z0-9]*$/);A(/^\d*(\.\d+)?$/);const ht=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;A(ht);function vt(e){return s=>!U(s)||pt(s)<=d(e)}function gt(e){return{$validator:vt(e),$message:s=>{let{$params:n}=s;return`The maximum length allowed is ${n.max}`},$params:{max:e,type:"maxLength"}}}function _t(e){return typeof e=="string"&&(e=e.trim()),U(e)}var bt={$validator:_t,$message:"Value is required",$params:{type:"required"}};const yt=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;A(yt);A(/(^[0-9]*$)|(^-[0-9]+$)/);A(/^[-]?\d*(\.\d+)?$/);const Et=/(GIR 0AA)|((((?![QVX])[A-Z][0-9][0-9]?)|(((?![QVX])[A-Z](?![IJZ])[A-Z][0-9][0-9]?)|(((?![QVX])[A-Z][0-9][A-HJKSTUW])|((?![QVX])[A-Z](?![QVX])[A-Z][0-9][ABEHMNPRVWXY])))) ?[0-9]((?![CIKMOV])[A-Z]){2})/i,Rt=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,Pt={UK_POSTCODE:Et,STRONG_PASSWORD:Rt},ae=e=>Pt.UK_POSTCODE.test(e),Ot={props:["busy","disabled","modelValue"],emits:["update:modelValue","submit"],setup(){return{v$:$t()}},computed:{isDisabled(){const{busy:e,disabled:s,form:n}=this;return e||s||!ae(n.postcode)},form:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},validations:{form:{postcode:{isPostcode:e=>ae(e),required:bt,maxLength:gt(9)}}},methods:{focus(){this.$nextTick(this.$refs["postcode-input"].focus)},validateState(e){const{$dirty:s,$error:n}=this.v$;return s?!n:null},onSubmit(e){e!=null&&e.preventDefault&&e.preventDefault(),e!=null&&e.stopPropagation&&e.stopPropagation(),this.v$.form.$touch(),!this.v$.form.$invalid&&this.$emit("submit",e)}}},xt={class:"d-flex align-items-center justify-content-end"},Ct={key:1};function St(e,s,n,t,o,a){const p=Ie,l=Ne,u=ze,i=de("fa-icon"),$=Fe,m=Be,g=Ge;return P(),w(g,null,{default:E(()=>[y(m,{id:`postcode-checker-form-${e._.uid}`,onSubmit:fe(a.onSubmit,["stop","prevent"])},{default:E(()=>[y(u,{class:"mb-3",label:e.$t("GENERAL.LABEL.POSTCODE"),"label-class":"text-primary","label-for":`postcode-checker-postcode-input-${e._.uid}`},{default:E(()=>[y(p,{id:`postcode-checker-postcode-input-${e._.uid}`,ref:"postcode-input",modelValue:a.form.postcode,"onUpdate:modelValue":s[0]||(s[0]=h=>a.form.postcode=h),disabled:n.busy,form:`postcode-checker-form-${e._.uid}`,autocomplete:"off",maxlength:"8",name:"postcode",placeholder:e.$t("GENERAL.LABEL.POSTCODE"),state:a.validateState("postcode"),style:{"background-color":"transparent",border:"none","border-bottom":"2px solid #28a744","border-radius":"0px"},"aria-describedby":`postcode-checker-postcode-input-${e._.uid}-live-feedback`},null,8,["id","modelValue","disabled","form","placeholder","state","aria-describedby"]),y(l,{id:`postcode-checker-postcode-input-${e._.uid}-live-feedback`},{default:E(()=>[ie(V(e.$t("POSTCODES.MESSAGE.INVALID_POSTCODE")),1)]),_:1},8,["id"])]),_:1},8,["label","label-for"]),k("div",xt,[y($,{disabled:a.isDisabled||n.busy,title:a.isDisabled?e.$t("FRONTEND.MESSAGE.POSTCODE_CHECKER_SUBMIT_DISABLED"):void 0,type:"submit",variant:a.isDisabled?n.busy?"transparent":"secondary":"primary"},{default:E(()=>[n.busy?(P(),w(i,{key:0,icon:"spinner",class:"fa-fw fa-spin text-success"})):(P(),T("span",Ct,V(e.$t("GENERAL.LABEL.SUBMIT")),1))]),_:1},8,["disabled","title","variant"])])]),_:1},8,["id","onSubmit"])]),_:1})}const kt=$e(Ot,[["render",St]]),At=60*24*7,wt=60,Vt={components:{SimplePostcodeForm:kt},props:{hideMessage:Boolean},emits:["postcode:checked","providers:found","providers:not-found"],data(){return{busy:!1,form:{postcode:null},noProviders:null}},computed:{showError(){const{noProviders:e}=this;return e===!0}},watch:{"form.postcode":{handler(e,s){e!==s&&(this.noProviders=null)}}},created(){this.$route.query.noProviders&&(this.noProviders=!0)},mounted(){const e=this.getHasProvidersCookie(!0),s=this.getPostcodeCookie(!0);e.value!==null&&this.$nextTick(()=>this.noProviders=!e.value),s&&(this.form.postcode=s.value)},methods:{async checkPostcode(){this.busy=!0;const{postcode:e}=this.form,s=He();await new Promise(n=>setTimeout(n,500)),this.$nextTick(async()=>{const n=this.getPostcodeCookie();n.value=e,await $fetch(`${s.public.apiUrl}/check-postcode`,{params:{postcode:e}}).then(t=>{this.noProviders=!t;const o=this.getHasProvidersCookie();o.value=!!t,this.$emit("postcode:checked",t),t?this.$emit("providers:found"):this.$emit("providers:not-found")}).catch(t=>{console.error(t),this.busy=!1,this.focus()}).finally(()=>{this.$nextTick(()=>{this.busy=!1})})})},focus(){this.$nextTick(()=>{this.$refs.form.focus()})},getHasProvidersCookie(e=!1){return Y("hasProviders",{default:()=>null,maxAge:wt,readonly:e})},getPostcodeCookie(e=!1){return Y("lastCheckedPostcode",{maxAge:At,readonly:!1,sameSite:!0})},onAlertDismissed(){this.noProviders=null;const e=this.getHasProvidersCookie();e.value=null}}},Dt={class:"mb-2"},Lt={class:"mb-1"},Tt={key:0,class:"mb-3 text-center"};function jt(e,s,n,t,o,a){const p=Ue,l=de("simple-postcode-form");return P(),T(Me,null,[y(p,{"model-value":a.showError,class:"text-center mb-4",dismissible:"",variant:"danger",onClose:a.onAlertDismissed},{default:E(()=>[k("h4",Dt,[k("u",null,V(e.$t("FRONTEND.LABEL.NO_PROVIDERS_ALERT")),1)]),k("p",Lt,V(e.$t("FRONTEND.MESSAGE.POSTCODE_CHECKER_NO_PROVIDERS")),1)]),_:1},8,["model-value","onClose"]),n.hideMessage?me("",!0):(P(),T("p",Tt,V(e.$t("MSG__CHECK_FOR_PROVIDERS_COVERING_YOUR_AREA")),1)),y(l,{ref:"form",modelValue:o.form,"onUpdate:modelValue":s[0]||(s[0]=u=>o.form=u),disabled:o.noProviders,busy:o.busy,onSubmit:fe(a.checkPostcode,["stop","prevent"])},null,8,["modelValue","disabled","busy","onSubmit"])],64)}const It=$e(Vt,[["render",jt]]),be=""+new URL("rubbish-truck.DVfvWP9q.jpg",import.meta.url).href,Nt=k("div",{class:"overlay"},null,-1),zt={components:{PostcodeChecker:It,SiteLogo:pe},data(){return{headerBg:be,submitted:!1}},methods:{onSubmit(){this.submitted=!0},onProvidersFound(){Ke().push(this.localePath({name:"trash-something"}))},onProvidersNotFound(){console.log("No Providers Found")}}},Jt=Object.assign(zt,{__name:"index",setup(e){Ze({bodyAttrs:{class:"floating-navbar"}});const s="production";return(n,t)=>{const o=Xe,a=le,p=ce,l=ue,u=Qe;return P(),T("div",null,[k("div",{class:"d-flex align-items-center pb-10 position-relative",style:qe({"background-image":`url(${d(be)})`,"background-size":"cover","background-position":"center center","background-attachment":"fixed","padding-top":"12.75rem"})},[Nt,y(l,{fluid:""},{default:E(()=>[y(p,null,{default:E(()=>[y(a,{cols:"12",sm:"10","offset-sm":"1",md:"10","offset-md":"1",lg:"8","offset-lg":"2"},{default:E(()=>[y(o,{class:"rounded-lg","body-bg-variant":"gray-300","footer-bg-variant":"light","header-bg-variant":"light",style:{"max-width":"420px",margin:"0 auto 1rem"}},{default:E(()=>[y(d(pe),{class:"d-block mb-3 mx-auto",color:"#1D1D1D"}),me("",!0)]),_:1})]),_:1})]),_:1})]),_:1})],4),y(u),d(s)!=="development"?(P(),w(d(tt),{key:0})):(P(),w(We,{key:1})),y(d(Je)),y(d(Ye))])}}});export{Jt as default};
//# sourceMappingURL=CO3QSzZW.js.map
