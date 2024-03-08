import{o as s,c as a,a as o,t as _,b as g,m as P,A as H,F as k,d as u,w as I,z as L,n as S,s as T,h as f,j as y,B as j,r as U,f as x}from"./index-1a1c2c0a.js";import{u as q}from"./main-store-ad28e10a.js";import{_ as O}from"./BaseInput-d415bbc3.js";import{_ as D}from"./BaseButton-88d8365c.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as $}from"./BaseRadioButton-45879acd.js";const E={},F={class:"loader"};function G(t,l){return s(),a("div",F)}const Z=h(E,[["render",G],["__scopeId","data-v-30691fc1"]]),J={name:"InformationOutlineIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},K=["aria-hidden","aria-label"],Q=["fill","width","height"],W={d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"},X={key:0};function Y(t,l,e,n,p,v){return s(),a("span",P(t.$attrs,{"aria-hidden":e.title?null:!0,"aria-label":e.title,class:"material-design-icon information-outline-icon",role:"img",onClick:l[0]||(l[0]=r=>t.$emit("click",r))}),[(s(),a("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[o("path",W,[e.title?(s(),a("title",X,_(e.title),1)):g("",!0)])],8,Q))],16,K)}const ee=h(J,[["render",Y]]),te={},se={class:"absolute rounded-md bg-gradient-to-b from-gray-700/50 to-dark min-h-[100px] w-full -translate-y-24 z-10 px-4 py-2 break-words hidden"};function ae(t,l){return s(),a("div",se,[H(t.$slots,"default")])}const le=h(te,[["render",ae]]),oe={class:"grid gap-y-2"},re={class:"grid items-center gap-x-2 grid-cols-performance-items-layout"},ie={class:"text-md"},V={__name:"PerformanceReportMetric",props:{title:{type:String,required:!0},displayValue:{type:[String,Number],required:!0},score:{type:Number,required:!0},description:{type:String}},setup(t){const l=e=>{const n=e*100;return n>=89?"border-score-high text-score-high":n>=50&&n<89?"border-score-mid text-score-mid":"border-score-low text-score-low"};return(e,n)=>(s(),a("div",oe,[o("div",re,[o("p",ie,_(t.title),1),t.description?(s(),a(k,{key:0},[u(le,null,{default:I(()=>[L(_(t.description),1)]),_:1}),u(ee,{size:21,class:"tooltip-icon"})],64)):g("",!0)]),o("div",{class:S(`min-w-[80px] min-h-[80px] rounded-sm border text-primary font-bold text-3xl grid place-items-center ${l(t.score)}`)},_(t.displayValue),3)]))}},ne={class:"grid gap-y-5 md:gap-y-10"},ce={class:"flex gap-x-4"},de={key:0,class:"grid gap-y-8"},ue={class:"grid gap-y-2 md:max-w-[200px] w-full justify-self-center"},me={class:"grid grid-cols-performance-metrics-layout gap-x-6 gap-y-8"},he={__name:"PerformanceReport",setup(t){const l=q(),{pageSpeedReport:e}=T(l),{generatePageSpeedReport:n}=l,p=f("https://alescalifetech.com/"),v=f(!1),r=f(!1),m=f("mobile"),w=()=>{r.value=!0,n(p.value,m.value).then(()=>{v.value=!0,r.value=!1})},C=["cumulative-layout-shift","largest-contentful-paint","first-contentful-paint","speed-index","total-blocking-time","first-input-delay","first-meaningful-paint"],M=y(()=>{var c;return(c=e.value.lighthouseResult)==null?void 0:c.audits}),R=y(()=>Object.entries(M.value).filter(([i])=>C.includes(i))),b=y(()=>{var c;return(c=e.value.lighthouseResult)==null?void 0:c.categories.performance.score});return(c,i)=>(s(),a("div",null,[o("div",ne,[o("form",{onSubmit:j(w,["prevent"]),class:S(`grid gap-y-5 ${r.value?"disabled":""}`)},[u(O,{modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=d=>p.value=d),label:"URL of the page"},null,8,["modelValue"]),o("div",ce,[u($,{modelValue:m.value,"onUpdate:modelValue":i[1]||(i[1]=d=>m.value=d),label:"Mobile",value:"mobile",name:"device-type",checked:""},null,8,["modelValue"]),u($,{modelValue:m.value,"onUpdate:modelValue":i[2]||(i[2]=d=>m.value=d),name:"device-type",label:"Desktop",value:"desktop"},null,8,["modelValue"])]),u(D,{label:"Generate",class:"justify-self-start",type:"submit",disabled:r.value},null,8,["disabled"])],34),v.value&&!r.value?(s(),a("div",de,[o("div",ue,[u(V,{title:"Performance Score","display-value":b.value*100,score:b.value},null,8,["display-value","score"])]),o("div",me,[(s(!0),a(k,null,U(R.value,([,{title:d,description:B,displayValue:z,score:A}],N)=>(s(),x(V,{title:d,"display-value":z,score:A,description:B,key:N},null,8,["title","display-value","score","description"]))),128))])])):g("",!0)]),r.value?(s(),x(Z,{key:0,class:"absolute right-1/2 transform-x-1/2"})):g("",!0)]))}};export{he as default};
