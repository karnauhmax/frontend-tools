import{o as t,c as r,t as n,B as c}from"./index-0f64a5f9.js";const i={key:0,class:"font-medium"},d={__name:"BaseButton",props:{label:{type:[String,Boolean],default:!1}},emits:["click"],setup(e,{emit:o}){const a=()=>{o("click")};return(s,l)=>(t(),r("button",{onClick:a,class:"border-2 border-primary bg-primary text-dark px-2 py-2 rounded-md min-w-[150px] inline-flex items-center justify-center transition-colors duration-300 hover:bg-dark hover:text-white"},[e.label?(t(),r("span",i,n(e.label),1)):c("",!0)]))}};export{d as _};