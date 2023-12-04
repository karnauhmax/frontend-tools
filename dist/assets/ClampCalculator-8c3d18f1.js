import{p as _}from"./pxToRem-e4b86be4.js";import{_ as g}from"./BaseCopyBtn-d5dc99b1.js";import{_ as p}from"./BaseInput-c96ed8b2.js";import{l as t,n as s,o as M,c as w,a as e,g as u,z as f,t as C}from"./index-0f64a5f9.js";const $={class:"border border-text-secondary/10 p-4 grid grid-cols-2 gap-x-4 xl:gap-x-7 gap-y-4"},U=e("div",{class:"flex items-center gap-4 col-span-2"},null,-1),h={class:"grid gap-y-4"},F=e("p",{class:"font-bold"},"Values",-1),B={class:"flex flex-col xl:flex-row gap-2"},P={class:"grid gap-y-5"},k=e("p",{class:"font-bold"},"Viewport",-1),z={class:"flex flex-col xl:flex-row gap-2"},N={class:"col-span-2 grid gap-y-2"},T=e("span",null,"Output",-1),j={__name:"ClampCalculator",setup(D){const d=t(360),r=t(1920),n=t(24),i=t(16),o=t(!1);t([{id:1,name:"px",value:"px"},{id:2,name:"rem",value:"rem"}]);const c=t("px");s(()=>c.value==="rem");const y=()=>{o.value=!0,setTimeout(()=>{o.value=!1},3e3)},m=s(()=>(n.value-i.value)/(r.value-d.value)),v=s(()=>parseFloat(((n.value-r.value*m.value)/16).toFixed(3))),V=s(()=>_(i.value)),b=s(()=>_(n.value)),x=s(()=>`clamp(${V.value}rem, ${v.value?`${v.value}rem + `:""} ${parseFloat((100*m.value).toFixed(2))}vw, ${b.value}rem)`);return(E,l)=>(M(),w("div",$,[U,e("div",h,[F,e("div",B,[u(p,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=a=>i.value=a),label:"Minimal Value",units:c.value,type:"number"},null,8,["modelValue","units"]),u(p,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=a=>n.value=a),label:"Max Value",units:c.value,type:"number"},null,8,["modelValue","units"])])]),e("div",P,[k,e("div",z,[u(p,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=a=>d.value=a),label:"Minimal Value",units:"px",type:"number"},null,8,["modelValue"]),u(p,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=a=>r.value=a),label:"Max Value",units:"px",type:"number"},null,8,["modelValue"])])]),e("div",N,[T,e("div",{class:f(["border transition px-2 py-2 relative pr-[30px]",{"border-primary":o.value,"border-text-secondary":!o.value}])},[e("p",null,C(x.value),1),u(g,{"content-to-copy":x.value,onCopied:y,class:"absolute right-[10px] top-[10px]"},null,8,["content-to-copy"])],2),e("p",{class:f(["transition-opacity text-sm text-primary",{"opacity-1":o.value,"opacity-0":!o.value}])}," Copied ",2)])]))}};export{j as default};
