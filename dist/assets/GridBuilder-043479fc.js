import{_ as $,k,l,m as x,n as v,o as _,c as h,a as e,t as I,F as S,r as C,p as E,q as R,v as B,g as d,x as g,y}from"./index-51d83cde.js";import{p as G}from"./pxToRem-e4b86be4.js";import{_ as H}from"./BaseButton-55a050b4.js";import{_ as M}from"./BaseInput-a7390dd9.js";import{_ as b}from"./BaseRadioButton-e62e5ba7.js";const w=n=>(E("data-v-63e72941"),n=n(),R(),n),N={class:"grid gap-y-4"},O={class:"grid gap-y-2"},T=w(()=>e("div",{class:"border border-text-secondary/10 px-4 py-2"},[e("span",null,"Output")],-1)),U={class:"border border-text-secondary/10 px-4 py-2"},z={class:"grid gap-y-2"},F=w(()=>e("div",{class:"border border-text-secondary/10 px-4 py-2 overflow-hidden"},[e("span",null,"Result")],-1)),W={clas:"overflow-hidden"},q={class:"grid gap-4 builder-grid border border-text-secondary/10 p-4 overflow-hidden"},D={__name:"GridOutput",props:{width:{type:Number},units:{type:String}},setup(n,{expose:o}){const s=n;k(f=>({"0745bb68":u.value}));const t=l(null);o({outputElement:t});const{units:i}=x(s),p=v(()=>i.value==="rem"?"rem":"px"),u=v(()=>`repeat(auto-fill, minmax(min(100%, ${m.value}${p.value}), 1fr))`),c=v(()=>`grid-template-columns: ${u.value}`),{width:m}=x(s);return(f,a)=>(_(),h("div",N,[e("div",O,[T,e("div",U,I(c.value),1)]),e("div",z,[F,e("div",W,[e("div",{class:"resize-x overflow-hidden transition-[width] will-change-[width]",ref_key:"outputElement",ref:t},[e("div",q,[(_(),h(S,null,C(12,(r,V)=>e("div",{key:V,class:"bg-primary rounded-md min-h-[150px]"})),64))])],512)])])]))}},j=$(D,[["__scopeId","data-v-63e72941"]]),L={class:"mb-4 grid gap-y-2 justify-items-start"},P=e("span",null,"Output Units: ",-1),X={class:"flex gap-4"},A={class:"text-text-secondary text-sm"},ee={__name:"GridBuilder",setup(n){const o=l(0),s=l(""),t=l("px"),i=l(!0),p=l(null),u=l(null),c=()=>{s.value?(t.value==="rem"?o.value=G(s.value):o.value=s.value,i.value=!0,p.value.outputElement.style.width="100%",setTimeout(()=>{u.value.scrollIntoView({block:"start",behavior:"smooth"})},100)):(i.value=!1,window.scrollTo({top:0,behavior:"smooth"}))},m=()=>{o.value&&c()};return B(()=>{}),(f,a)=>(_(),h("section",null,[e("div",L,[d(M,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=r=>s.value=r),label:"Min size of each card in px",type:"number",placeholder:"Width in pxs",isValid:i.value,errorMessage:"This Field Is Required"},null,8,["modelValue","isValid"]),d(H,{label:"Generate",onClick:c}),e("div",{class:"grid gap-y-2 min-h-[84px] auto-rows-min",ref_key:"outputHead",ref:u},[P,e("div",X,[d(b,{label:"PX",modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=r=>t.value=r),name:"unit",value:"px",checked:"",onChange:m},null,8,["modelValue"]),d(b,{label:"REM",modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=r=>t.value=r),name:"unit",value:"rem",onChange:m},null,8,["modelValue"])]),g(e("p",A," Calculation based on a root font-size of 16 pixel. ",512),[[y,t.value==="rem"]])],512)]),g(d(j,{ref_key:"output",ref:p,units:t.value,width:Number(o.value)},null,8,["units","width"]),[[y,o.value]])]))}};export{ee as default};