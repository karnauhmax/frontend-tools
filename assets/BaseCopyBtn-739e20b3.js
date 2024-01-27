import{_ as c}from"./_plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,a as d,t as m,b as _,m as p,d as u}from"./index-66a792e9.js";const f={name:"ContentCopyIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},g=["aria-hidden","aria-label"],C=["fill","width","height"],h={d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"},y={key:0};function V(e,o,t,a,r,s){return i(),n("span",p(e.$attrs,{"aria-hidden":!t.title,"aria-label":t.title,class:"material-design-icon content-copy-icon",role:"img",onClick:o[0]||(o[0]=l=>e.$emit("click",l))}),[(i(),n("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[d("path",h,[t.title?(i(),n("title",y,m(t.title),1)):_("",!0)])],8,C))],16,g)}const b=c(f,[["render",V]]),B={__name:"BaseCopyBtn",props:{contentToCopy:{type:[String,Number],required:!0}},emits:["copied"],setup(e,{emit:o}){const t=e,a=()=>{navigator.clipboard.writeText(t.contentToCopy),o("copied")};return(r,s)=>(i(),n("button",null,[u(b,{onClick:a,fillColor:"rgba(235, 235, 235, .6)",size:18})]))}};export{B as _};
