(function(d,l){typeof exports=="object"&&typeof module<"u"?l(exports,require("react/jsx-runtime"),require("react")):typeof define=="function"&&define.amd?define(["exports","react/jsx-runtime","react"],l):(d=typeof globalThis<"u"?globalThis:d||self,l(d["lobox-selectbox"]={},d.jsxRuntime,d.React))})(this,function(d,l,c){"use strict";const m=c.createContext(void 0),h=()=>{const e=c.useContext(m);if(!e)throw new Error("SelectBox components must be used within a SelectBox.Root");return e};function y(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(o=y(e[t]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}function j(){for(var e,t,o=0,s="",n=arguments.length;o<n;o++)(e=arguments[o])&&(t=y(e))&&(s&&(s+=" "),s+=t);return s}/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v=(...e)=>e.filter((t,o,s)=>!!t&&s.indexOf(t)===o).join(" ");/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:n="",children:i,iconNode:u,...a},f)=>c.createElement("svg",{ref:f,...N,width:t,height:t,stroke:e,strokeWidth:s?Number(o)*24/Number(t):o,className:v("lucide",n),...a},[...u.map(([p,x])=>c.createElement(p,x)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(e,t)=>{const o=c.forwardRef(({className:s,...n},i)=>c.createElement(B,{ref:i,iconNode:t,className:v(`lucide-${D(e)}`,s),...n}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=S("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=S("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),_={selectbox__wrapper:"_selectbox__wrapper_1fejq_1",selectbox__trigger:"_selectbox__trigger_1fejq_9","selectbox__search-input":"_selectbox__search-input_1fejq_19","selectbox__trigger-icon":"_selectbox__trigger-icon_1fejq_31",selectbox__options:"_selectbox__options_1fejq_45",selectbox__option:"_selectbox__option_1fejq_45","selectbox__option--selected":"_selectbox__option--selected_1fejq_68"},K=({option:e})=>{const{selectedOptions:t,handleOptionClick:o,handleKeyDown:s}=h(),n=t.includes(e.value);return l.jsxs("li",{className:j(_.selectbox__option,{[_["selectbox__option--selected"]]:n}),onClick:()=>o(e),onKeyDown:s,tabIndex:0,role:"option","aria-selected":n?"true":"false",children:[e.label,n&&l.jsx(E,{width:16,height:16})]})},L=()=>{const{isOpen:e,filteredOptions:t,handleAddNewItem:o,handleKeyDown:s}=h();return e?l.jsxs("ul",{className:_.selectbox__options,role:"listbox","aria-multiselectable":"true",children:[!t.length&&l.jsx("li",{className:_.selectbox__option,onClick:o,onKeyDown:s,tabIndex:0,role:"option","aria-selected":"false",children:"Add new option"}),t.map(n=>l.jsx(K,{option:n},n.value))]}):null},q=e=>{const t=c.useRef(null);return c.useEffect(()=>{const o=s=>{t.current&&!t.current.contains(s.target)&&e()};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[e]),t},g=Object.freeze({Root:({children:e,defaultValue:t,options:o,onAddNewItem:s,onChange:n})=>{const[i,u]=c.useState(!1),[a,f]=c.useState(""),[p,x]=c.useState([]),A=q(()=>{u(!1)});c.useEffect(()=>{t&&x(t)},[t]);const $=c.useMemo(()=>o.filter(r=>r.label.toLowerCase().includes(a.toLowerCase())||r.value.toLowerCase().includes(a.toLowerCase())),[o,a]),O=()=>u(r=>!r),M=r=>{i||u(!0),f(r.target.value)},P=r=>{if(r.key==="Enter"&&a){const b=o.find(w=>w.value===a);b?k(b):C()}},k=r=>{if(p.includes(r.value)){const b=p.filter(w=>w!==r.value);x(b)}else x([...p,r.value]);n==null||n(r),u(!1)},C=()=>{const r={value:a,label:a};s(r),n==null||n(r),x([...p,a]),f(""),u(!1)},V=r=>{(r.key==="Enter"||r.key===" ")&&(O(),r.preventDefault())};return l.jsx(m.Provider,{value:{isOpen:i,searchValue:a,selectedOptions:p,options:o,filteredOptions:$,handleToggle:O,handleSearchChange:M,handleSearchInputKeyDown:P,handleOptionClick:k,handleAddNewItem:C,handleKeyDown:V},children:l.jsx("div",{className:_.selectbox__wrapper,ref:A,role:"combobox","aria-expanded":i?"true":"false","aria-haspopup":"listbox","aria-owns":"selectbox__options","aria-controls":"selectbox__options",children:e})})},Trigger:()=>{const{searchValue:e,handleToggle:t,handleSearchChange:o,handleKeyDown:s,handleSearchInputKeyDown:n,isOpen:i}=h();return l.jsxs("div",{className:_.selectbox__trigger,onClick:t,role:"button",tabIndex:0,"aria-expanded":i?"true":"false",onKeyDown:s,children:[l.jsx("input",{type:"text",value:e,placeholder:"Type something",className:_["selectbox__search-input"],onChange:o,onKeyDown:n,"aria-autocomplete":"none","aria-controls":"selectbox__options"}),l.jsx(I,{className:_["selectbox__trigger-icon"],width:20,height:20})]})},Options:L}),T=({name:e,defaultValue:t,options:o,onAddNewItem:s,onChange:n})=>l.jsxs(g.Root,{name:e,defaultValue:t,options:o,onAddNewItem:s,onChange:n,children:[l.jsx(g.Trigger,{}),l.jsx(g.Options,{})]});d.SelectBox=T,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=lobox-selectbox.umd.js.map
