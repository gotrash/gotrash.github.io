import{x as l,o as a,y as n,e as d,a5 as u,H as o,c as m,a4 as _,B as f,t as C,aA as k,Y as x}from"./bJEmem18.js";import{_ as y}from"./DlAUqK2U.js";const h={inheritAttrs:!1,emit:["click"],props:{hideText:Boolean,icon:{type:[Array,String],required:!1,default(){}},iconClasses:{type:[Array,Object,String],required:!1,default:""},text:{type:String,required:!1,default(){return""}},to:{type:[Object,String],required:!1}},emits:["click"],computed:{_iconClasses(){const{iconClasses:e}=this,s="mr-2 mr-md-0 fa-fw text-success";return Array.isArray(e)?[s,...e]:[s,e]}},methods:{onClick(e){this.$emit("click",e)}}},p={key:1,class:"text-success"};function g(e,s,t,A,S,c){const r=l("fa-icon"),i=x;return a(),n(i,k(e.$attrs,{"active-class":"active",label:t.text,to:t.to,onClick:c.onClick}),{default:d(()=>[t.icon?(a(),n(r,{key:0,icon:t.icon,class:u(c._iconClasses)},null,8,["icon","class"])):o("",!0),t.hideText?o("",!0):(a(),m("span",p,[_(e.$slots,"default",{},()=>[f(C(t.text),1)])]))]),_:3},16,["label","to","onClick"])}const B=y(h,[["render",g]]);export{B as default};
//# sourceMappingURL=BzuYYyc7.js.map
