import{o,c as u,a as t,g as f,h as v,j as V,F as b,r as g,t as c,d as p,n as y,z as h,b as S,p as T,k as $}from"./index-1a1c2c0a.js";import{_ as k}from"./BaseCopyBtn-8d78850e.js";import{_ as I}from"./BaseInput-d415bbc3.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const w=["max","min","step"],C={__name:"BaseRangeInput",props:{modelValue:{type:[String,Number],default:0},minValue:{type:[String,Number],default:"0"},maxValue:{type:[String,Number],default:"100"},stepValue:{type:[String,Number],default:"1"}},emits:["update:modelValue"],setup(a,{emit:s}){const r=s,m=n=>{r("update:modelValue",n.target.value)};return(n,i)=>(o(),u("label",null,[t("input",{max:a.maxValue,min:a.minValue,step:a.stepValue,type:"range",onInput:m},null,40,w)]))}},N=x(C,[["__scopeId","data-v-59022cc8"]]);const B=a=>(T("data-v-0ab7b94b"),a=a(),$(),a),R={class:"flex gap-x-4 gap-y-8 flex-wrap mb-8"},z={key:0},U=B(()=>t("div",{class:"bg-dark overflow-hidden border border-text-secondary/10 resize-none w-full min-h-[500px] transition p-4 grid place-items-center mb-4"},[t("div",{class:"result transition-transform"})],-1)),G={class:""},j={__name:"TransformGenerator",setup(a){f(_=>({"107e8da0":n.value}));const s=v(!1),r=v([{id:1,name:"Translate X",cssValue:"translateX",value:0,min:-200,max:200,step:1,unit:"px"},{id:2,name:"Translate Y",cssValue:"translateY",value:0,min:-200,max:200,step:1,unit:"px"},{id:3,name:"Scale",cssValue:"scale",value:1,min:0,max:2,step:.01,unit:""},{id:4,name:"Rotate",cssValue:"rotate",value:0,min:-360,max:360,step:1,unit:"deg"},{id:5,name:"Skew",cssValue:"skew",value:0,min:-360,max:360,step:1,unit:"deg"}]),m=()=>{s.value=!0,setTimeout(()=>{s.value=!1},2e3)},n=V(()=>`

  ${r.value.map(l=>l.value?`${l.cssValue}(${l.value}${l.unit}) `:"").join("")}

  `),i=V(()=>`transform: ${n.value};`);return(_,l)=>(o(),u("div",null,[t("div",R,[(o(!0),u(b,null,g(r.value,e=>(o(),u("div",{class:"grid gap-y-4",key:e.id},[t("p",null,[h(c(e.name)+" ",1),e.unit?(o(),u("span",z,"("+c(e.unit)+")",1)):S("",!0)]),p(N,{name:e.name,value:e.value,minValue:e.min,maxValue:e.max,stepValue:e.step,modelValue:e.value,"onUpdate:modelValue":d=>e.value=d},null,8,["name","value","minValue","maxValue","stepValue","modelValue","onUpdate:modelValue"]),p(I,{type:"number",class:"max-w-[100px]",modelValue:e.value,"onUpdate:modelValue":d=>e.value=d},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),U,t("div",{class:y(`bg-dark border resize-none w-full transition-colors p-4 duration-300 ${s.value?"border-primary":"border-text-secondary/10"}`)},[t("p",G,c(i.value),1),p(k,{onCopied:m,contentToCopy:i.value,class:"absolute right-[15px] top-[18px]"},null,8,["contentToCopy"])],2)]))}},D=x(j,[["__scopeId","data-v-0ab7b94b"]]);export{D as default};