import{o as t,c as a,t as n,b as r}from"./index-c81fd57a.js";const s=["disabled"],i={key:0,class:"font-medium"},b={__name:"BaseButton",props:{label:{type:[String,Boolean],default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:o}){const l=()=>{o("click")};return(c,d)=>(t(),a("button",{onClick:l,class:"border-2 border-primary bg-primary text-dark px-2 py-2 rounded-md min-w-[150px] inline-flex items-center justify-center transition-colors duration-300 hover:bg-dark hover:text-white",disabled:e.disabled},[e.label?(t(),a("span",i,n(e.label),1)):r("",!0)],8,s))}};export{b as _};