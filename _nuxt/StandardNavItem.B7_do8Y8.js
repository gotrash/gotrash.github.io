import{z as l,o as a,A as n,e as d,a3 as u,G as o,c as m,a2 as _,g as f,t as C,at as k,T as x}from"./entry.flha_NBA.js";import{_ as y}from"./_plugin-vue_export-helper.DlAUqK2U.js";const h={inheritAttrs:!1,emit:["click"],props:{hideText:Boolean,icon:{type:[Array,String],required:!1,default(){}},iconClasses:{type:[Array,Object,String],required:!1,default:""},text:{type:String,required:!1,default(){return""}},to:{type:[Object,String],required:!1}},emits:["click"],computed:{_iconClasses(){const{iconClasses:e}=this,s="mr-2 mr-md-0 fa-fw text-success";return Array.isArray(e)?[s,...e]:[s,e]}},methods:{onClick(e){this.$emit("click",e)}}},p={key:1,class:"text-success"};function g(e,s,t,A,S,c){const r=l("fa-icon"),i=x;return a(),n(i,k(e.$attrs,{"active-class":"active",label:t.text,to:t.to,onClick:c.onClick}),{default:d(()=>[t.icon?(a(),n(r,{key:0,icon:t.icon,class:u(c._iconClasses)},null,8,["icon","class"])):o("",!0),t.hideText?o("",!0):(a(),m("span",p,[_(e.$slots,"default",{},()=>[f(C(t.text),1)])]))]),_:3},16,["label","to","onClick"])}const T=y(h,[["render",g]]);export{T as default};
//# sourceMappingURL=StandardNavItem.B7_do8Y8.js.map
