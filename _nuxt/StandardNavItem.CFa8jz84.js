import{l,o as a,m as n,q as d,Z as m,C as r,c as u,Y as _,t as f,v as C,ar as k,am as x}from"./entry.NVuBYiDK.js";import{_ as y}from"./_plugin-vue_export-helper.DlAUqK2U.js";const h={inheritAttrs:!1,emit:["click"],props:{hideText:Boolean,icon:{type:[Array,String],required:!1,default(){}},iconClasses:{type:[Array,Object,String],required:!1,default:""},text:{type:String,required:!1,default(){return""}},to:{type:[Object,String],required:!1}},emits:["click"],computed:{_iconClasses(){const{iconClasses:e}=this,s="mr-2 mr-md-0 fa-fw text-success";return Array.isArray(e)?[s,...e]:[s,e]}},methods:{onClick(e){this.$emit("click",e)}}},p={key:1,class:"text-success"};function g(e,s,t,v,S,c){const o=l("fa-icon"),i=x;return a(),n(i,k(e.$attrs,{"active-class":"active",label:t.text,to:t.to,onClick:c.onClick}),{default:d(()=>[t.icon?(a(),n(o,{key:0,icon:t.icon,class:m(c._iconClasses)},null,8,["icon","class"])):r("",!0),t.hideText?r("",!0):(a(),u("span",p,[_(e.$slots,"default",{},()=>[f(C(t.text),1)])]))]),_:3},16,["label","to","onClick"])}const A=y(h,[["render",g]]);export{A as default};
//# sourceMappingURL=StandardNavItem.CFa8jz84.js.map
