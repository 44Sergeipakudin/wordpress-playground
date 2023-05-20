"use strict";(self.webpackChunkdocusaurus_classic_typescript=self.webpackChunkdocusaurus_classic_typescript||[]).push([[4478],{1142:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(11),i=t(2735),l=t(45),r=t(4094),o=t(7585),c=t(7253);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_fMI7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_bdx1"};function m(e){let{as:n,id:t,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===n||!t)return i.createElement(n,(0,a.Z)({},m,{id:void 0}));const u=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:t});return i.createElement(n,(0,a.Z)({},m,{className:(0,l.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:t}),m.children,i.createElement(c.default,{className:"hash-link",to:`#${t}`,"aria-label":u,title:u},"\u200b"))}},4099:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z});var a=t(11),i=t(2735),l=t(2947);var r=t(7283);var o=t(7253);var c=t(45),s=t(9806),m=t(9371);const d={details:"details_CLKC",isBrowser:"isBrowser_ZW3Y",collapsibleContent:"collapsibleContent_DD2J"};function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function f(e,n){return!!e&&(e===n||f(e.parentElement,n))}function h(e){let{summary:n,children:t,...l}=e;const r=(0,s.Z)(),o=(0,i.useRef)(null),{collapsed:h,setCollapsed:p}=(0,m.u)({initialState:!l.open}),[v,g]=(0,i.useState)(l.open),E=i.isValidElement(n)?n:i.createElement("summary",null,n??"Details");return i.createElement("details",(0,a.Z)({},l,{ref:o,open:v,"data-collapsed":h,className:(0,c.Z)(d.details,r&&d.isBrowser,l.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;u(n)&&f(n,o.current)&&(e.preventDefault(),h?(p(!1),g(!0)):p(!0))}}),E,i.createElement(m.z,{lazy:!1,collapsed:h,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),g(!e)}},i.createElement("div",{className:d.collapsibleContent},t)))}const p={details:"details_hTlw"},v="alert alert--info";function g(e){let{...n}=e;return i.createElement(h,(0,a.Z)({},n,{className:(0,c.Z)(v,p.details,n.className)}))}var E=t(1142);function C(e){return i.createElement(E.default,e)}const b={containsTaskList:"containsTaskList_NqrU"};const N={img:"img_k8mF"};var y=t(1497),L=t(4094);const k="admonition_LC0I",H="admonitionHeading_OQg0",Z="admonitionIcon_EMUo",x="admonitionContent_N0eM";const T={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(L.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(L.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(L.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(L.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(L.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},_={secondary:"note",important:"info",success:"tip",warning:"danger"};function M(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=i.createElement(i.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:a}}(e.children);return{...e,title:e.title??n,children:t}}const z={head:function(e){const n=i.Children.map(e.children,(e=>i.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...a}=e.props;return i.createElement(e.props.originalType,a)}return e}(e):e));return i.createElement(l.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,i.isValidElement)(e)&&n.includes(e.props?.mdxType)))?i.createElement("code",e):i.createElement(r.Z,e)},a:function(e){return i.createElement(o.default,e)},pre:function(e){return i.createElement(r.Z,(0,i.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.props?.mdxType)),l=i.createElement(i.Fragment,null,n.filter((e=>e!==t)));return i.createElement(g,(0,a.Z)({},e,{summary:t}),l)},ul:function(e){return i.createElement("ul",(0,a.Z)({},e,{className:(n=e.className,(0,c.Z)(n,n?.includes("contains-task-list")&&b.containsTaskList))}));var n},img:function(e){return i.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(n=e.className,(0,c.Z)(n,N.img))}));var n},h1:e=>i.createElement(C,(0,a.Z)({as:"h1"},e)),h2:e=>i.createElement(C,(0,a.Z)({as:"h2"},e)),h3:e=>i.createElement(C,(0,a.Z)({as:"h3"},e)),h4:e=>i.createElement(C,(0,a.Z)({as:"h4"},e)),h5:e=>i.createElement(C,(0,a.Z)({as:"h5"},e)),h6:e=>i.createElement(C,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:a,icon:l}=M(e),r=function(e){const n=_[e]??e,t=T[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),T.info)}(t),o=a??r.label,{iconComponent:s}=r,m=l??i.createElement(s,null);return i.createElement("div",{className:(0,c.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,k)},i.createElement("div",{className:H},i.createElement("span",{className:Z},m),o),i.createElement("div",{className:x},n))},mermaid:t(8961).Z}},4228:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var a=t(2735),i=t(9530),l=t(4099);function r(e){let{children:n}=e;return a.createElement(i.Zo,{components:l.default},n)}},185:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(11),i=t(2735),l=t(45),r=t(8349);const o={tableOfContents:"tableOfContents_zXaw",docItemContainer:"docItemContainer_p3xW"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return i.createElement("div",{className:(0,l.Z)(o.tableOfContents,"thin-scrollbar",n)},i.createElement(r.Z,(0,a.Z)({},t,{linkClassName:c,linkActiveClassName:s})))}},8349:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(11),i=t(2735),l=t(7585),r=t(2555),o=t(9712);function c(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?i.createElement("ul",{className:l?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const s=i.memo(c);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const h=(0,l.L)(),p=d??h.tableOfContents.minHeadingLevel,v=u??h.tableOfContents.maxHeadingLevel,g=(0,r.b)({toc:n,minHeadingLevel:p,maxHeadingLevel:v}),E=(0,i.useMemo)((()=>{if(c&&m)return{linkClassName:c,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:v}}),[c,m,p,v]);return(0,o.S)(E),i.createElement(s,(0,a.Z)({toc:g,className:t,linkClassName:c},f))}},9712:(e,n,t)=>{t.d(n,{S:()=>c});var a=t(2735),i=t(7585);function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=r(c,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}},2555:(e,n,t)=>{t.d(n,{a:()=>l,b:()=>o});var a=t(2735);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){return(0,a.useMemo)((()=>i(e)),[e])}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>r({toc:i(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}}}]);