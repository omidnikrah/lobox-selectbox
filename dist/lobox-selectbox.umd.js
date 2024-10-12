(function(a,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],r):(a=typeof globalThis<"u"?globalThis:a||self,r(a["lobox-selectbox"]={},a.jsxRuntime,a.React))})(this,function(a,r,i){"use strict";const y=i.createContext(void 0),f=()=>{const e=i.useContext(y);if(!e)throw new Error("SelectBox components must be used within a SelectBox.Root");return e};function m(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=m(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function j(){for(var e,t,n=0,o="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=m(e))&&(o&&(o+=" "),o+=t);return o}/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=(...e)=>e.filter((t,n,o)=>!!t&&o.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:p,...u},_)=>i.createElement("svg",{ref:_,...N,width:t,height:t,stroke:e,strokeWidth:o?Number(n)*24/Number(t):n,className:C("lucide",s),...u},[...p.map(([b,g])=>i.createElement(b,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(e,t)=>{const n=i.forwardRef(({className:o,...s},l)=>i.createElement(B,{ref:l,iconNode:t,className:C(`lucide-${D(e)}`,o),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=v("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=v("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),d={selectbox__wrapper:"_selectbox__wrapper_1fejq_1",selectbox__trigger:"_selectbox__trigger_1fejq_9","selectbox__search-input":"_selectbox__search-input_1fejq_19","selectbox__trigger-icon":"_selectbox__trigger-icon_1fejq_31",selectbox__options:"_selectbox__options_1fejq_45",selectbox__option:"_selectbox__option_1fejq_45","selectbox__option--selected":"_selectbox__option--selected_1fejq_68"},q=({option:e})=>{const{selectedOptions:t,handleOptionClick:n,handleKeyDown:o}=f(),s=t.includes(e.value);return r.jsxs("li",{className:j(d.selectbox__option,{[d["selectbox__option--selected"]]:s}),onClick:()=>n(e),onKeyDown:o,tabIndex:0,role:"option","aria-selected":s?"true":"false",children:[e.label,s&&r.jsx(K,{width:16,height:16})]})},E=()=>{const{isOpen:e,filteredOptions:t,handleAddNewItem:n,handleKeyDown:o}=f();return e?r.jsxs("ul",{className:d.selectbox__options,role:"listbox","aria-multiselectable":"true",children:[!t.length&&r.jsx("li",{className:d.selectbox__option,onClick:n,onKeyDown:o,tabIndex:0,role:"option","aria-selected":"false",children:"Add new option"}),t.map(s=>r.jsx(q,{option:s},s.value))]}):null},I=e=>{const t=i.useRef(null);return i.useEffect(()=>{const n=o=>{t.current&&!t.current.contains(o.target)&&e()};return document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}},[e]),t},h=Object.freeze({Root:({children:e,options:t,onAddNewItem:n})=>{const[o,s]=i.useState(!1),[l,p]=i.useState(""),[u,_]=i.useState([]),b=I(()=>{s(!1)}),g=i.useMemo(()=>t.filter(c=>c.label.toLowerCase().includes(l.toLowerCase())||c.value.toLowerCase().includes(l.toLowerCase())),[t,l]),S=()=>s(c=>!c),A=c=>{o||s(!0),p(c.target.value)},$=c=>{if(c.key==="Enter"&&l){const x=t.find(w=>w.value===l);x?O(x):k()}},O=c=>{if(u.includes(c.value)){const x=u.filter(w=>w!==c.value);_(x)}else _([...u,c.value]);s(!1)},k=()=>{n({value:l,label:l}),_([...u,l]),p(""),s(!1)},M=c=>{(c.key==="Enter"||c.key===" ")&&(S(),c.preventDefault())};return r.jsx(y.Provider,{value:{isOpen:o,searchValue:l,selectedOptions:u,options:t,filteredOptions:g,handleToggle:S,handleSearchChange:A,handleSearchInputKeyDown:$,handleOptionClick:O,handleAddNewItem:k,handleKeyDown:M},children:r.jsx("div",{className:d.selectbox__wrapper,ref:b,role:"combobox","aria-expanded":o?"true":"false","aria-haspopup":"listbox","aria-owns":"selectbox__options","aria-controls":"selectbox__options",children:e})})},Trigger:()=>{const{searchValue:e,handleToggle:t,handleSearchChange:n,handleKeyDown:o,handleSearchInputKeyDown:s,isOpen:l}=f();return r.jsxs("div",{className:d.selectbox__trigger,onClick:t,role:"button",tabIndex:0,"aria-expanded":l?"true":"false",onKeyDown:o,children:[r.jsx("input",{type:"text",value:e,placeholder:"Type something",className:d["selectbox__search-input"],onChange:n,onKeyDown:s,"aria-autocomplete":"none","aria-controls":"selectbox__options"}),r.jsx(L,{className:d["selectbox__trigger-icon"],width:20,height:20})]})},Options:E}),T=({name:e,options:t,onAddNewItem:n})=>r.jsxs(h.Root,{name:e,options:t,onAddNewItem:n,children:[r.jsx(h.Trigger,{}),r.jsx(h.Options,{})]});a.SelectBox=T,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=lobox-selectbox.umd.js.map
