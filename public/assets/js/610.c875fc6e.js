(self.webpackChunkvuepressbeta=self.webpackChunkvuepressbeta||[]).push([[610],{1610:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ut});var l=a(6252),n=a(9963),i=a(2262),o=a(3577),r=a(2119),s=a(7621),u=a(5858),c=a(480),v=a(6333);const d=(...e)=>{const t=(0,r.tv)().resolve(...e),a=t.matched[t.matched.length-1];if(!a?.redirect)return t;const{redirect:l}=a,n=(0,c.mf)(l)?l(t):l,i=(0,c.HD)(n)?{path:n}:n;return d({hash:t.hash,query:t.query,params:t.params,...i})},m=e=>(0,c.HD)(e)?p(e):e.children?{...e,children:e.children.map(m)}:e,p=e=>{const t=d(e);return{text:t.meta.title||e,link:"404"===t.name?e:t.fullPath}},k=()=>(0,v.X6)();var h=(0,l.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0},exact:{type:Boolean,default:!1}},emits:["focusout"],setup(e,{emit:t}){const a=(0,r.yj)(),n=(0,s.WF)(),o=(0,u.sS)(),{item:v}=(0,i.BK)(e),d=(0,l.Fl)((()=>(0,c.ak)(v.value.link))),m=(0,l.Fl)((()=>(0,c.B2)(v.value.link)||(0,c.R5)(v.value.link))),p=(0,l.Fl)((()=>m.value?void 0:v.value.target?v.value.target:d.value?"_blank":void 0)),k=(0,l.Fl)((()=>"_blank"===p.value)),h=(0,l.Fl)((()=>!d.value&&!m.value&&!k.value)),g=(0,l.Fl)((()=>m.value?void 0:v.value.rel?v.value.rel:k.value?"noopener noreferrer":void 0)),f=(0,l.Fl)((()=>v.value.ariaLabel||v.value.text)),b=(0,l.Fl)((()=>{if(e.exact)return!1;const t=Object.keys(n.value.locales);return t.length?!t.some((e=>e===v.value.link)):"/"!==v.value.link}));return{isActive:(0,l.Fl)((()=>!(!h.value||!b.value)&&a.path.startsWith(v.value.link))),iconPrefix:o,isBlankTarget:k,isRouterLink:h,linkRel:g,linkTarget:p,linkAriaLabel:f,focusoutAction:()=>t("focusout")}}});h.render=function(e,t,a,n,i,r){const s=(0,l.up)("RouterLink"),u=(0,l.up)("OutboundLink");return e.isRouterLink?((0,l.wg)(),(0,l.j4)(s,(0,l.dG)({key:0,class:["nav-link",{active:e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs,{onFocusout:e.focusoutAction}),{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"before",{},(()=>[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0)])),(0,l.Uk)(" "+(0,o.zw)(e.item.text)+" ",1),(0,l.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label","onFocusout"])):((0,l.wg)(),(0,l.j4)("a",(0,l.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs,{onFocusout:t[1]||(t[1]=(...t)=>e.focusoutAction&&e.focusoutAction(...t))}),[(0,l.WI)(e.$slots,"before",{},(()=>[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0)])),(0,l.Uk)(" "+(0,o.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,l.wg)(),(0,l.j4)(u,{key:0})):(0,l.kq)("v-if",!0),(0,l.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))},h.__file="src/client/components/NavLink.vue";var g=(0,l.aZ)({name:"NavbarDropdownLink",components:{NavLink:h},props:{item:{type:Object,required:!0}},setup(e){const t=(0,r.yj)(),a=(0,u.sS)(),n=(0,i.Vh)(e,"item"),o=(0,l.Fl)((()=>n.value.ariaLabel||n.value.text)),s=(0,i.iH)(!1);return(0,l.YP)((()=>t.path),(()=>{s.value=!1})),{open:s,dropdownAriaLabel:o,iconPrefix:a,handleDropdown:e=>{0===e.detail&&(s.value=!s.value)},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});const f={class:"title"},b=(0,l.Wm)("span",{class:"arrow down"},null,-1),w={class:"nav-dropdown"},y={class:"dropdown-subtitle"},L={key:1},W={class:"dropdown-subitem-wrapper"};g.render=function(e,t,a,n,i,r){const s=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.j4)("div",{class:["dropdown-wrapper",{open:e.open}]},[(0,l.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,l.WI)(e.$slots,"title",{},(()=>[(0,l.Wm)("span",f,[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0),(0,l.Uk)(" "+(0,o.zw)(e.item.text),1)])])),b],8,["aria-label"]),(0,l.Wm)("ul",w,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.item.children,((t,a)=>((0,l.wg)(),(0,l.j4)("li",{key:t.link||a,class:"dropdown-item"},[t.children?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[(0,l.Wm)("h4",y,[t.link?((0,l.wg)(),(0,l.j4)(s,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&e.setOpen(!1)},null,8,["item","onFocusout"])):((0,l.wg)(),(0,l.j4)("span",L,(0,o.zw)(t.text),1))]),(0,l.Wm)("ul",W,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(t.children,(a=>((0,l.wg)(),(0,l.j4)("li",{key:a.link,class:"dropdown-subitem"},[(0,l.Wm)(s,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&e.setOpen(!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,l.wg)(),(0,l.j4)(s,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&e.setOpen(!1)},null,8,["item","onFocusout"]))])))),128))])],2)},g.__file="src/client/components/navbar/DropdownLink.vue";const j=()=>(0,l.h)(u.A0,{name:"i18n"},{default:()=>[(0,l.h)("path",{d:"M639.981 344.075c14.805 44.45 34.542 79.023 69.084 113.596 29.603-29.634 49.34-69.146 64.145-113.596H639.981zM314.33 591.024h128.29l-64.145-172.865-64.145 172.865z",fill:"currentColor"}),(0,l.h)("path",{d:"M807.746 116.882H215.643c-54.274 0-98.681 44.45-98.681 98.78v592.677c0 54.329 44.407 98.78 98.68 98.78h592.104c54.273 0 98.681-44.451 98.681-98.78V215.66c0-54.329-39.475-98.78-98.68-98.78zM565.971 754.01c-9.866 9.878-19.738 9.878-29.603 9.878-4.94 0-14.805 0-19.738-4.939-4.939-4.939-9.872 0-9.872-4.939s-4.932-9.878-9.865-19.756c-4.94-9.878-4.94-14.817-9.872-24.695L467.29 655.23H294.592l-19.737 54.33c-9.866 19.755-14.805 34.572-19.738 44.45-4.939 9.878-14.804 9.878-29.603 9.878-9.871 0-19.737-4.939-29.609-9.878-9.865-9.878-14.798-14.817-14.798-24.695 0-4.939 0-9.878 4.933-19.756 4.939-9.878 4.939-14.817 9.865-24.695l108.553-276.583c4.939-9.878 4.939-19.756 9.872-29.633 4.932-9.878 9.865-19.756 14.798-24.695 4.939-4.94 9.872-14.817 19.737-19.756 9.872-4.94 19.738-4.94 29.61-4.94 9.865 0 19.73 0 29.603 4.94 9.865 4.939 14.804 9.878 19.737 19.756 4.933 4.939 9.866 14.817 14.798 24.695 4.94 9.877 9.872 19.755 14.805 34.572l108.553 271.644c9.865 19.756 14.804 34.573 14.804 44.451-4.939 4.94-9.872 14.817-14.804 24.695zm271.378-192.62c-54.273-19.756-93.748-44.451-128.29-74.085-34.536 34.573-78.943 59.268-133.223 74.085l-14.798-24.695c54.273-14.817 98.68-34.573 133.223-69.146-34.542-34.573-64.145-79.024-74.017-128.413h-49.34V319.38h133.228c-9.877-14.817-19.743-34.573-29.609-49.39l14.799-4.94c9.871 14.818 24.676 34.574 34.542 54.33h123.35v24.695h-49.34c-14.798 49.39-39.468 93.84-69.077 123.474 34.541 29.634 74.01 54.329 128.29 69.146l-19.738 24.695z",fill:"currentColor"})]});j.displayName="I18nIcon";var x=(0,l.aZ)({name:"LanguageDropdown",setup(){const e=(()=>{const e=(0,r.tv)(),t=(0,s.I)(),a=(0,s.I5)(),n=k();return(0,l.Fl)((()=>{const l=Object.keys(a.value.locales);if(l.length<2)return null;const i=e.currentRoute.value.path,o=e.currentRoute.value.fullPath;return{text:n.value.selectLanguageText??"unkown language",ariaLabel:n.value.selectLanguageAriaLabel??"unkown language",children:l.map((l=>{const r=a.value.locales?.[l]??{},s=n.value.locales?.[l]??{},u=r.lang||"",c=s.selectLanguageName??u;let v;if(u===a.value.lang)v=o;else{const a=i.replace(t.value,l);v=e.getRoutes().some((e=>e.path===a))?a:s.home??l}return{text:c,link:v}}))}}))})();return()=>e.value?(0,l.h)(g,{item:e.value},{title:()=>(0,l.h)(j,{style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}):null}}),F=(0,l.aZ)({name:"RepoLink",setup(){const e=(()=>{const e=k(),t=(0,l.Fl)((()=>e.value.repo)),a=(0,l.Fl)((()=>{return t.value?(e=t.value,!(0,c.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null):null;var e})),n=(0,l.Fl)((()=>t.value&&!(0,c.ak)(t.value)?`https://github.com/${t.value}`:t.value)),i=(0,l.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,l.Fl)((()=>n.value&&i.value?{text:i.value,link:n.value}:null))})();return()=>e.value?(0,l.h)(h,{class:"repo-link",item:e.value}):null}}),I=(0,l.aZ)({name:"NavbarLinks",setup(){const e=(0,l.Fl)((()=>(k().value.navbar||[]).map(m)));return()=>e.value.length?(0,l.h)("nav",{class:"nav-links"},[...e.value.map((e=>(0,l.h)("div",{class:["nav-item","hide-in-mobile"]},(0,l.h)("children"in e?g:h,{item:e})))),(0,l.h)("div",{class:["nav-item"]},(0,l.h)(x)),(0,l.h)("div",{class:["nav-item","hide-in-mobile"]},(0,l.h)(F))]):null}}),A=(0,l.aZ)({name:"ToggleDarkButton",setup(){const e=(0,i.iH)(!1),t=()=>{window?.document.querySelector("html")?.classList.toggle("dark",e.value)};return(0,l.bv)((()=>{const a=window.matchMedia("(prefers-color-scheme: dark)");e.value=a.matches,a.addEventListener("change",(t=>{e.value=t.matches})),(0,l.YP)(e,t,{immediate:!0})})),{isDark:e,toggleDark:()=>{e.value=!e.value}}}});const $={class:"icon",focusable:"false",viewBox:"0 0 32 32"},B=(0,l.Wm)("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),T=(0,l.Wm)("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),N=(0,l.Wm)("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),S=(0,l.Wm)("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),_=(0,l.Wm)("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),H=(0,l.Wm)("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),P=(0,l.Wm)("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),q=(0,l.Wm)("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),z=(0,l.Wm)("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),D={class:"icon",focusable:"false",viewBox:"0 0 32 32"},C=(0,l.Wm)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1);A.render=function(e,t,a,i,o,r){return(0,l.wg)(),(0,l.j4)("button",{class:"toggle-dark-button",onClick:t[1]||(t[1]=(...t)=>e.toggleDark&&e.toggleDark(...t))},[(0,l.wy)(((0,l.wg)(),(0,l.j4)("svg",$,[B,T,N,S,_,H,P,q,z],512)),[[n.F8,!e.isDark]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)("svg",D,[C],512)),[[n.F8,e.isDark]])])},A.__file="src/client/components/navbar/ToggleDarkButton.vue";var R=(0,l.aZ)({name:"ToggleSidebarButton",emits:["toggle"],setup:(e,{emit:t})=>()=>(0,l.h)("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},(0,l.h)("span",{class:"icon"}))});const E=(e,t)=>{const a=e?.ownerDocument.defaultView?.getComputedStyle(e,null)[t],l=Number.parseInt(a,10);return Number.isNaN(l)?0:l};var O=(0,l.aZ)({name:"Navbar",components:{NavbarLinks:I,ToggleDarkButton:A,ToggleSidebarButton:R},emits:["toggle-sidebar"],setup(){const e=(0,s.I)(),t=(0,s.I5)(),a=k(),n=(0,i.iH)(!1),o=(0,i.iH)(null),r=(0,i.iH)(null),u=(0,l.Fl)((()=>a.value.home||e.value)),c=(0,l.Fl)((()=>a.value.logo?(0,s.pJ)(a.value.logo):null)),v=(0,l.Fl)((()=>a.value.darkLogo?(0,s.pJ)(a.value.darkLogo):null)),d=(0,l.Fl)((()=>t.value.title)),m=(0,i.iH)(0),p=(0,l.Fl)((()=>m.value?{"max-width":`${m.value}px`}:{})),h=(0,l.Fl)((()=>{const e=a.value.navAutoHide;return"none"!==e&&("always"===e||n.value)}));let g;return(0,l.bv)((()=>{const e=E(o.value,"paddingLeft")+E(o.value,"paddingRight");g=()=>{window.innerWidth<719?(n.value=!0,m.value=0):(n.value=!1,m.value=o.value.offsetWidth-e-(r.value?.offsetWidth||0))},g(),window.addEventListener("resize",g,!1),window.addEventListener("orientationchange",g,!1)})),(0,l.wF)((()=>{window.removeEventListener("resize",g,!1),window.removeEventListener("orientationchange",g,!1)})),{autoHide:h,navbar:o,siteBrand:r,siteBrandLink:u,siteBrandLogo:c,siteBrandDarkLogo:v,siteBrandTitle:d,linksWrapperStyle:p,withBase:s.pJ}}});O.render=function(e,t,a,n,i,r){const s=(0,l.up)("ToggleSidebarButton"),u=(0,l.up)("RouterLink"),c=(0,l.up)("NavbarLinks"),v=(0,l.up)("ToggleDarkButton"),d=(0,l.up)("NavbarSearch");return(0,l.wg)(),(0,l.j4)("header",{ref:"navbar",class:["navbar",{"auto-hide":e.autoHide}]},[(0,l.Wm)(s,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),(0,l.Wm)(u,{ref:"siteBrand",to:e.siteBrandLink,class:"home-link"},{default:(0,l.w5)((()=>[e.siteBrandLogo?((0,l.wg)(),(0,l.j4)("img",{key:0,class:["logo",{light:Boolean(e.siteBrandDarkLogo)}],src:e.withBase(e.siteBrandLogo),alt:e.siteBrandTitle},null,10,["src","alt"])):(0,l.kq)("v-if",!0),e.siteBrandDarkLogo?((0,l.wg)(),(0,l.j4)("img",{key:1,class:"logo dark",src:e.withBase(e.siteBrandDarkLogo),alt:e.siteBrandTitle},null,8,["src","alt"])):(0,l.kq)("v-if",!0),e.siteBrandTitle?((0,l.wg)(),(0,l.j4)("span",{key:2,class:["site-name",{"hide-in-mobile":e.siteBrandLogo}]},(0,o.zw)(e.siteBrandTitle),3)):(0,l.kq)("v-if",!0)])),_:1},8,["to"]),(0,l.Wm)("div",{class:"navbar-links-wrapper",style:e.linksWrapperStyle},[(0,l.WI)(e.$slots,"before"),(0,l.Wm)(c),(0,l.WI)(e.$slots,"center"),(0,l.Wm)(v),(0,l.Wm)(d),(0,l.WI)(e.$slots,"after")],4)],2)},O.__file="src/client/components/navbar/Navbar.vue";const M=O,Z=(...e)=>{const t=(0,r.tv)().resolve(...e),a=t.matched[t.matched.length-1];if(!a?.redirect)return t;const{redirect:l}=a,n=(0,c.mf)(l)?l(t):l,i=(0,c.HD)(n)?{path:n}:n;return Z({hash:t.hash,query:t.query,params:t.params,...i})},Y=e=>(0,c.HD)(e)?G(e):e.children?{...e,children:e.children.map(Y)}:e,G=e=>{const t=Z(e);return{text:t.meta.title||e,link:"404"===t.name?e:t.fullPath}},U=()=>(0,v.X6)(),K=/#.*$/u,V=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),J=(e,t)=>void 0!==t&&(!(e=>{const t=K.exec(e);return t?t[0]:""})(t)||e.hash===t)&&V(e.path)===V(t),X=(e,t)=>!!J(e,t.link)||!!t.children&&t.children.some((t=>X(e,t))),Q=()=>{const e=U(),t=(0,l.Fl)((()=>e.value.repo)),a=(0,l.Fl)((()=>{return t.value?(e=t.value,!(0,c.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null):null;var e})),n=(0,l.Fl)((()=>t.value&&!(0,c.ak)(t.value)?`https://github.com/${t.value}`:t.value)),i=(0,l.Fl)((()=>n.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,l.Fl)((()=>n.value&&i.value?{text:i.value,link:n.value}:null))},ee=Symbol.for("sidebarItems");var te=(0,l.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0},exact:{type:Boolean,default:!1}},emits:["focusout"],setup(e,{emit:t}){const a=(0,r.yj)(),n=(0,s.WF)(),o=(0,u.sS)(),{item:v}=(0,i.BK)(e),d=(0,l.Fl)((()=>(0,c.ak)(v.value.link))),m=(0,l.Fl)((()=>(0,c.B2)(v.value.link)||(0,c.R5)(v.value.link))),p=(0,l.Fl)((()=>m.value?void 0:v.value.target?v.value.target:d.value?"_blank":void 0)),k=(0,l.Fl)((()=>"_blank"===p.value)),h=(0,l.Fl)((()=>!d.value&&!m.value&&!k.value)),g=(0,l.Fl)((()=>m.value?void 0:v.value.rel?v.value.rel:k.value?"noopener noreferrer":void 0)),f=(0,l.Fl)((()=>v.value.ariaLabel||v.value.text)),b=(0,l.Fl)((()=>{if(e.exact)return!1;const t=Object.keys(n.value.locales);return t.length?!t.some((e=>e===v.value.link)):"/"!==v.value.link}));return{isActive:(0,l.Fl)((()=>!(!h.value||!b.value)&&a.path.startsWith(v.value.link))),iconPrefix:o,isBlankTarget:k,isRouterLink:h,linkRel:g,linkTarget:p,linkAriaLabel:f,focusoutAction:()=>t("focusout")}}});te.render=function(e,t,a,n,i,r){const s=(0,l.up)("RouterLink"),u=(0,l.up)("OutboundLink");return e.isRouterLink?((0,l.wg)(),(0,l.j4)(s,(0,l.dG)({key:0,class:["nav-link",{active:e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs,{onFocusout:e.focusoutAction}),{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"before",{},(()=>[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0)])),(0,l.Uk)(" "+(0,o.zw)(e.item.text)+" ",1),(0,l.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label","onFocusout"])):((0,l.wg)(),(0,l.j4)("a",(0,l.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs,{onFocusout:t[1]||(t[1]=(...t)=>e.focusoutAction&&e.focusoutAction(...t))}),[(0,l.WI)(e.$slots,"before",{},(()=>[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0)])),(0,l.Uk)(" "+(0,o.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,l.wg)(),(0,l.j4)(u,{key:0})):(0,l.kq)("v-if",!0),(0,l.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))},te.__file="src/client/components/NavLink.vue";const ae=e=>e?(0,l.h)("i",{class:["iconfont",`${(0,u.sS)().value}${e}`]}):null,le=(e,t)=>e.link?(0,l.h)(te,{...t,item:e}):(0,l.h)("p",t,[ae(e.icon),e.text]),ne=({collapsable:e,icon:t,text:a},n)=>[ae(t),(0,l.h)("span",{class:"title"},a),e?(0,l.h)("span",{class:["arrow",n?"down":"right"]},a):null],ie=e=>{const t=(0,r.yj)();return e?(0,l.h)("ul",{class:"sidebar-sub-headers"},e.map((e=>{const a=J(t,e.link);return(0,l.h)("li",{class:"sidebar-sub-header"},[le(e,{class:{"sidebar-link":!0,heading:!0,active:a}}),ie(e.children)])}))):null};var oe=(0,l.aZ)({name:"RepoLink",setup(){const e=Q();return()=>e.value?(0,l.h)(te,{class:"repo-link",item:e.value}):null}}),re=(0,l.aZ)({name:"ExpandTransition",setup(){const e=e=>{e.style.height=`${e.scrollHeight}px`},t=e=>{e.style.height=""};return()=>(0,l.h)(n.uT,{name:"expand",onEnter:e,onAfterEnter:t,onBefoerLeave:t})}}),se=(0,l.aZ)({name:"SidebarDropdownLink",components:{ExpandTransition:re,NavLink:te},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,i.BK)(e),a=(0,u.sS)(),n=(0,l.Fl)((()=>t.value.ariaLabel||t.value.text)),o=(0,i.iH)(!1),s=(0,r.yj)();return(0,l.YP)((()=>s.path),(()=>{o.value=!1})),{open:o,dropdownAriaLabel:n,iconPrefix:a,handleDropdown:e=>{const t=0===e.detail;o.value=!!t&&!o.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});const ue={class:"title"},ce={class:"nav-dropdown"},ve={class:"dropdown-subtitle"},de={key:1},me={class:"dropdown-subitem-wrapper"};se.render=function(e,t,a,i,r,s){const u=(0,l.up)("NavLink"),c=(0,l.up)("ExpandTransition");return(0,l.wg)(),(0,l.j4)("div",{class:["mobile-dropdown-wrapper",{open:e.open}]},[(0,l.Wm)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,l.WI)(e.$slots,"title",{},(()=>[(0,l.Wm)("span",ue,[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0),(0,l.Uk)(" "+(0,o.zw)(e.item.text),1)])])),(0,l.Wm)("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)("ul",ce,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.item.children,((t,a)=>((0,l.wg)(),(0,l.j4)("li",{key:t.link||a,class:"dropdown-item"},[t.children?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[(0,l.Wm)("h4",ve,[t.link?((0,l.wg)(),(0,l.j4)(u,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,l.wg)(),(0,l.j4)("span",de,(0,o.zw)(t.text),1))]),(0,l.Wm)("ul",me,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(t.children,(a=>((0,l.wg)(),(0,l.j4)("li",{key:a.link,class:"dropdown-subitem"},[(0,l.Wm)(u,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,l.wg)(),(0,l.j4)(u,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[n.F8,e.open]])])),_:1})],2)},se.__file="src/client/components/sidebar/DropdownLink.vue";var pe=(0,l.aZ)({name:"SidebarNavLinks",components:{NavLink:te,RepoLink:oe,SidebarDropdownLink:se},setup(){const e=(0,l.Fl)((()=>(U().value.navbar||[]).map(Y))),t=Q();return{navbarLinks:(0,l.Fl)((()=>[...e.value,t.value]))}}});const ke={key:0,class:"sidebar-nav-links"};pe.render=function(e,t,a,n,i,o){const r=(0,l.up)("SidebarDropdownLink"),s=(0,l.up)("NavLink"),u=(0,l.up)("RepoLink");return e.navbarLinks.length?((0,l.wg)(),(0,l.j4)("nav",ke,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.navbarLinks,(e=>((0,l.wg)(),(0,l.j4)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,l.wg)(),(0,l.j4)(r,{key:0,item:e},null,8,["item"])):((0,l.wg)(),(0,l.j4)(s,{key:1,item:e},null,8,["item"]))])))),128)),(0,l.Wm)(u)])):(0,l.kq)("v-if",!0)},pe.__file="src/client/components/sidebar/NavLinks.vue";var he=(0,l.aZ)({name:"SidebarChild",props:{item:{type:Object,required:!0}},setup(e){const t=(0,r.yj)();return()=>[le(e.item,{class:{"sidebar-link":!0,heading:"heading"===e.item.type,active:J(t,e.item.link)},exact:!0}),ie(e.item.children)]}}),ge=(0,l.aZ)({name:"SidebarGroup",props:{item:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const a=(0,r.yj)(),n=X(a,e.item);return()=>[(0,l.h)("section",{class:"sidebar-group"},[e.item.link?(0,l.h)(r.rH,{to:e.item.link,class:{"sidebar-heading":!0,clickable:!0,active:n},onClick:()=>t("toggle")},ne(e.item,e.open)):(0,l.h)("p",{to:e.item.link,class:{"sidebar-heading":!0,clickable:e.item.collapsable,active:n},onClick:()=>t("toggle")},ne(e.item,e.open)),(0,l.h)(be,{items:e.item.children||[]})])]}});const fe=(e,t)=>"group"===t.type&&t.children.some((t=>"group"===t.type?fe(e,t):"page"===t.type&&J(e,t.link)));var be=(0,l.aZ)({name:"SidebarLinks",props:{items:{type:Array,required:!0}},setup(e){const t=(0,r.yj)(),a=(0,i.iH)(0);return(0,l.YP)((()=>t.path),(()=>{(()=>{const l=((e,t)=>{for(let a=0;a<t.length;a++)if(fe(e,t[a]))return a;return-1})(t,e.items);l>-1&&(a.value=l)})()})),()=>(0,l.h)("ul",{class:"sidebar-links"},e.items.map(((e,t)=>(0,l.h)("li","group"===e.type?(0,l.h)(ge,{item:e,open:t===a.value,onToggle:()=>(e=>{a.value=e===a.value?-1:e})(t)}):(0,l.h)(he,{item:e})))))}}),we=(0,l.aZ)({name:"Sidebar",components:{SidebarNavLinks:pe,SidebarLinks:be},setup:()=>({sidebarItems:(()=>{const e=(0,l.f3)(ee);if(!e)throw new Error("useSidebarItems() is called without provider.");return e})()})});const ye={class:"sidebar"};we.render=function(e,t,a,n,i,o){const r=(0,l.up)("SidebarNavLinks"),s=(0,l.up)("SidebarLinks");return(0,l.wg)(),(0,l.j4)("aside",ye,[(0,l.Wm)(r),(0,l.WI)(e.$slots,"top"),(0,l.Wm)(s,{items:e.sidebarItems},null,8,["items"]),(0,l.WI)(e.$slots,"bottom")])},we.__file="src/client/components/sidebar/Sidebar.vue";const Le=we;var We=(0,l.aZ)({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25}},setup:e=>({setStyle:t=>{t.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle:e=>{e.style.transform="translateY(0)",e.style.opacity="1"}})});We.render=function(e,t,a,i,o,r){return(0,l.wg)(),(0,l.j4)(l.HY,null,["single"===e.type?((0,l.wg)(),(0,l.j4)(n.uT,{key:0,name:"drop",appear:"",onAppear:e.setStyle,onAfterAppear:e.unsetStyle,onEnter:e.setStyle,onAfterEnter:e.unsetStyle,onBeforeLeave:e.setStyle},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3},8,["onAppear","onAfterAppear","onEnter","onAfterEnter","onBeforeLeave"])):(0,l.kq)("v-if",!0),"group"===e.type?((0,l.wg)(),(0,l.j4)(n.W3,{key:1,name:"drop",appear:"",onAppear:e.setStyle,onAfterAppear:e.unsetStyle,onEnter:e.setStyle,onAfterEnter:e.unsetStyle,onBeforeLeave:e.setStyle},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3},8,["onAppear","onAfterAppear","onEnter","onAfterEnter","onBeforeLeave"])):(0,l.kq)("v-if",!0)],64)},We.__file="src/client/components/transitions/DropTransition.vue";var je=(0,l.aZ)({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0},exact:{type:Boolean,default:!1}},emits:["focusout"],setup(e,{emit:t}){const a=(0,r.yj)(),n=(0,s.WF)(),o=(0,u.sS)(),{item:v}=(0,i.BK)(e),d=(0,l.Fl)((()=>(0,c.ak)(v.value.link))),m=(0,l.Fl)((()=>(0,c.B2)(v.value.link)||(0,c.R5)(v.value.link))),p=(0,l.Fl)((()=>m.value?void 0:v.value.target?v.value.target:d.value?"_blank":void 0)),k=(0,l.Fl)((()=>"_blank"===p.value)),h=(0,l.Fl)((()=>!d.value&&!m.value&&!k.value)),g=(0,l.Fl)((()=>m.value?void 0:v.value.rel?v.value.rel:k.value?"noopener noreferrer":void 0)),f=(0,l.Fl)((()=>v.value.ariaLabel||v.value.text)),b=(0,l.Fl)((()=>{if(e.exact)return!1;const t=Object.keys(n.value.locales);return t.length?!t.some((e=>e===v.value.link)):"/"!==v.value.link}));return{isActive:(0,l.Fl)((()=>!(!h.value||!b.value)&&a.path.startsWith(v.value.link))),iconPrefix:o,isBlankTarget:k,isRouterLink:h,linkRel:g,linkTarget:p,linkAriaLabel:f,focusoutAction:()=>t("focusout")}}});je.render=function(e,t,a,n,i,r){const s=(0,l.up)("RouterLink"),u=(0,l.up)("OutboundLink");return e.isRouterLink?((0,l.wg)(),(0,l.j4)(s,(0,l.dG)({key:0,class:["nav-link",{active:e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs,{onFocusout:e.focusoutAction}),{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"before",{},(()=>[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0)])),(0,l.Uk)(" "+(0,o.zw)(e.item.text)+" ",1),(0,l.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label","onFocusout"])):((0,l.wg)(),(0,l.j4)("a",(0,l.dG)({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs,{onFocusout:t[1]||(t[1]=(...t)=>e.focusoutAction&&e.focusoutAction(...t))}),[(0,l.WI)(e.$slots,"before",{},(()=>[e.item.icon?((0,l.wg)(),(0,l.j4)("i",{key:0,class:`iconfont ${e.iconPrefix}${e.item.icon}`},null,2)):(0,l.kq)("v-if",!0)])),(0,l.Uk)(" "+(0,o.zw)(e.item.text)+" ",1),e.isBlankTarget?((0,l.wg)(),(0,l.j4)(u,{key:0})):(0,l.kq)("v-if",!0),(0,l.WI)(e.$slots,"after")],16,["href","rel","target","aria-label"]))},je.__file="src/client/components/NavLink.vue";var xe=(0,l.aZ)({name:"Home",components:{DropTransition:We,NavLink:je},setup(){const e=(0,s.I2)(),t=(0,s.I5)(),a=(0,u.Cf)(),n=(0,l.Fl)((()=>e.value.heroImage?(0,s.pJ)(e.value.heroImage):null)),i=(0,l.Fl)((()=>e.value.darkHeroImage?(0,s.pJ)(e.value.darkHeroImage):null)),o=(0,l.Fl)((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),r=(0,l.Fl)((()=>e.value.heroAlt||o.value||"hero")),v=(0,l.Fl)((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),d=(0,l.Fl)((()=>(0,c.kJ)(e.value.actions)?e.value.actions.map((({text:e,link:t,type:a="primary"})=>({text:e,link:t,type:a}))):[])),m=(0,l.Fl)((()=>(0,c.kJ)(e.value.features)?e.value.features:[]));return{darkHeroImage:i,heroImage:n,heroAlt:r,heroText:o,tagline:v,actions:d,features:m,isPure:a}}});const Fe={class:"hero"},Ie={class:"hero-info"},Ae={key:0,class:"actions"},$e={key:0,class:"features"},Be={class:"theme-default-content custom"};xe.render=function(e,t,a,n,i,r){const s=(0,l.up)("DropTransition"),u=(0,l.up)("NavLink"),c=(0,l.up)("RouterLink"),v=(0,l.up)("Content");return(0,l.wg)(),(0,l.j4)("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[(0,l.Wm)("header",Fe,[(0,l.Wm)(s,{type:"group"},{default:(0,l.w5)((()=>[e.heroImage?((0,l.wg)(),(0,l.j4)("img",{key:"light",class:{light:Boolean(e.darkHeroImage)},src:e.heroImage,alt:e.heroAlt},null,10,["src","alt"])):(0,l.kq)("v-if",!0),e.darkHeroImage?((0,l.wg)(),(0,l.j4)("img",{key:"dark",class:"dark",src:e.darkHeroImage,alt:e.heroAlt},null,8,["src","alt"])):(0,l.kq)("v-if",!0)])),_:1}),(0,l.Wm)("div",Ie,[e.heroText?((0,l.wg)(),(0,l.j4)(s,{key:0,delay:.04},{default:(0,l.w5)((()=>[(0,l.Wm)("h1",{id:"main-title",textContent:(0,o.zw)(e.heroText)},null,8,["textContent"])])),_:1},8,["delay"])):(0,l.kq)("v-if",!0),e.tagline?((0,l.wg)(),(0,l.j4)(s,{key:1,delay:.08},{default:(0,l.w5)((()=>[(0,l.Wm)("p",{class:"description",textContent:(0,o.zw)(e.tagline)},null,8,["textContent"])])),_:1},8,["delay"])):(0,l.kq)("v-if",!0),(0,l.Wm)(s,{delay:.12},{default:(0,l.w5)((()=>[e.actions.length?((0,l.wg)(),(0,l.j4)("p",Ae,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.actions,(e=>((0,l.wg)(),(0,l.j4)(u,{key:e.text,class:["action-button",e.type],item:e},null,8,["class","item"])))),128))])):(0,l.kq)("v-if",!0)])),_:1},8,["delay"])])]),(0,l.Wm)(s,{delay:.16},{default:(0,l.w5)((()=>[e.features.length?((0,l.wg)(),(0,l.j4)("div",$e,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.$frontmatter.features,((t,a)=>((0,l.wg)(),(0,l.j4)(l.HY,{key:t.title},[t.link?((0,l.wg)(),(0,l.j4)(c,{key:0,to:t.link,class:["feature link",{["feature"+(a%9+1)]:!e.isPure}],role:"navigation"},{default:(0,l.w5)((()=>[(0,l.Wm)("h2",null,(0,o.zw)(t.title),1),(0,l.Wm)("p",null,(0,o.zw)(t.details),1)])),_:2},1032,["to","class"])):((0,l.wg)(),(0,l.j4)("div",{key:1,class:["feature","feature"+(a%9+1)]},[(0,l.Wm)("h2",null,(0,o.zw)(t.title),1),(0,l.Wm)("p",null,(0,o.zw)(t.details),1)],2))],64)))),128))])):(0,l.kq)("v-if",!0)])),_:1},8,["delay"]),(0,l.Wm)(s,{delay:.24},{default:(0,l.w5)((()=>[(0,l.Wm)("div",Be,[(0,l.Wm)(v)])])),_:1},8,["delay"])],8,["aria-labelledby"])},xe.__file="src/client/components/Home.vue";const Te=(...e)=>{const t=(0,r.tv)().resolve(...e),a=t.matched[t.matched.length-1];if(!a?.redirect)return t;const{redirect:l}=a,n=(0,c.mf)(l)?l(t):l,i=(0,c.HD)(n)?{path:n}:n;return Te({hash:t.hash,query:t.query,params:t.params,...i})},Ne=()=>(0,v.X6)(),Se={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"};let _e=null,He=null;const Pe={wait:()=>_e,pending:()=>{_e=new Promise((e=>He=e))},resolve:()=>{He?.(),_e=null,He=null}},qe=Symbol.for("sidebarItems"),ze=()=>{const e=(0,l.f3)(qe);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},De=()=>(0,l.h)(u.A0,{name:"edit"},{default:()=>(0,l.h)("path",{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0",fill:"currentColor"})});De.displayName="EditIcon";const Ce=()=>(0,l.h)(u.A0,{name:"prev"},{default:()=>(0,l.h)("path",{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z",fill:"currentColor"})});Ce.displayName="PrevIcon";const Re=()=>(0,l.h)(u.A0,{name:"next"},{default:()=>(0,l.h)("path",{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z",fill:"currentColor"})});Re.displayName="NextIcon";var Ee=(0,l.aZ)({name:"PageMeta",components:{EditIcon:De,NavLink:je},setup:()=>({themeLocale:Ne(),editNavLink:(()=>{const e=Ne(),t=(0,s.Vi)(),a=(0,s.I2)();return(0,l.Fl)((()=>{if(a.value.editLink??e.value.editLink)return null;const{repo:l,docsRepo:n=l,docsBranch:i="main",docsDir:o="",editLinkText:r}=e.value;if(!n)return null;const s=(({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:l,editLinkPattern:n})=>{const i=!(0,c.ak)(o=e)||/github\.com/.test(o)?"GitHub":/bitbucket\.org/.test(o)?"Bitbucket":/gitlab\.com/.test(o)?"GitLab":/gitee\.com/.test(o)?"Gitee":null;var o;let r;return n?r=n:null!==i&&(r=Se[i]),r?r.replace(/:repo/,(0,c.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,(0,c.FY)(`${(0,c.U1)(a)}/${l}`)):null})({docsRepo:n,docsBranch:i,docsDir:o,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return s?{text:r??"Edit this page",link:s}:null}))})(),updateTime:(()=>{const e=(0,s.I5)(),t=Ne(),a=(0,s.Vi)(),n=(0,s.I2)();return(0,l.Fl)((()=>n.value.lastUpdated??t.value.lastUpdated?null:a.value.git?.updatedTime?new Date(a.value.git?.updatedTime).toLocaleString(e.value.lang):null))})(),contributors:(()=>{const e=Ne(),t=(0,s.Vi)(),a=(0,s.I2)();return(0,l.Fl)((()=>a.value.contributors??e.value.contributors??1?t.value.git?.contributors??null:null))})()})});const Oe={class:"page-meta"},Me={key:0,class:"meta-item edit-link"},Ze={key:1,class:"meta-item update-time"},Ye={class:"label"},Ge={class:"info"},Ue={key:2,class:"meta-item contributors"},Ke={class:"label"},Ve={class:"info"},Je=(0,l.Uk)(", ");Ee.render=function(e,t,a,n,i,r){const s=(0,l.up)("EditIcon"),u=(0,l.up)("NavLink");return(0,l.wg)(),(0,l.j4)("footer",Oe,[e.editNavLink?((0,l.wg)(),(0,l.j4)("div",Me,[(0,l.Wm)(u,{class:"label",item:e.editNavLink},{before:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1},8,["item"])])):(0,l.kq)("v-if",!0),e.updateTime?((0,l.wg)(),(0,l.j4)("div",Ze,[(0,l.Wm)("span",Ye,(0,o.zw)(e.themeLocale.lastUpdatedText)+": ",1),(0,l.Wm)("span",Ge,(0,o.zw)(e.updateTime),1)])):(0,l.kq)("v-if",!0),e.contributors&&e.contributors.length?((0,l.wg)(),(0,l.j4)("div",Ue,[(0,l.Wm)("span",Ke,(0,o.zw)(e.themeLocale.contributorsText)+": ",1),(0,l.Wm)("span",Ve,[((0,l.wg)(!0),(0,l.j4)(l.HY,null,(0,l.Ko)(e.contributors,((t,a)=>((0,l.wg)(),(0,l.j4)(l.HY,{key:a},[(0,l.Wm)("span",{class:"contributor",title:`email: ${t.email}`},(0,o.zw)(t.name),9,["title"]),a!==e.contributors.length-1?((0,l.wg)(),(0,l.j4)(l.HY,{key:0},[Je],2112)):(0,l.kq)("v-if",!0)],64)))),128))])])):(0,l.kq)("v-if",!0)])},Ee.__file="src/client/components/PageMeta.vue";const Xe=e=>!1===e?null:(0,c.HD)(e)?(e=>{const t=Te(e);return{text:t.meta.title||e,link:"404"===t.name?e:t.fullPath}})(e):!!(0,c.PO)(e)&&e,Qe=(e,t,a)=>{const l=e.findIndex((e=>e.link===t));if(-1!==l){const t=e[l+a];return t?.link?t:null}for(const l of e)if(l.children){const e=Qe(l.children,t,a);if(e)return e}return null};var et=(0,l.aZ)({name:"PageNav",components:{NavLink:je,NextIcon:Re,PrevIcon:Ce},setup(){const e=(0,s.I2)(),t=ze(),a=(0,r.yj)();return{prevNavLink:(0,l.Fl)((()=>{const l=Xe(e.value.prev);return!1!==l?l:Qe(t.value,a.path,-1)})),nextNavLink:(0,l.Fl)((()=>{const l=Xe(e.value.next);return!1!==l?l:Qe(t.value,a.path,1)}))}}});const tt={key:0,class:"page-nav"},at={class:"inner"},lt={key:0,class:"prev"},nt={key:1,class:"next"};et.render=function(e,t,a,n,i,o){const r=(0,l.up)("PrevIcon"),s=(0,l.up)("NavLink"),u=(0,l.up)("NextIcon");return e.prevNavLink||e.nextNavLink?((0,l.wg)(),(0,l.j4)("nav",tt,[(0,l.Wm)("p",at,[e.prevNavLink?((0,l.wg)(),(0,l.j4)("span",lt,[(0,l.Wm)(r),(0,l.Wm)(s,{item:e.prevNavLink},null,8,["item"])])):(0,l.kq)("v-if",!0),e.nextNavLink?((0,l.wg)(),(0,l.j4)("span",nt,[(0,l.Wm)(s,{item:e.nextNavLink},null,8,["item"]),(0,l.Wm)(u)])):(0,l.kq)("v-if",!0)])])):(0,l.kq)("v-if",!0)},et.__file="src/client/components/PageNav.vue";var it=(0,l.aZ)({name:"Page",components:{PageMeta:Ee,PageNav:et}});const ot={class:"page"},rt={class:"theme-default-content"};it.render=function(e,t,a,n,i,o){const r=(0,l.up)("PageInfo"),s=(0,l.up)("Content"),u=(0,l.up)("PageMeta"),c=(0,l.up)("PageNav"),v=(0,l.up)("Comment");return(0,l.wg)(),(0,l.j4)("main",ot,[(0,l.WI)(e.$slots,"top"),(0,l.Wm)(r),(0,l.Wm)("div",rt,[(0,l.Wm)(s)]),(0,l.Wm)(u),(0,l.Wm)(c),(0,l.Wm)(v),(0,l.WI)(e.$slots,"bottom")])},it.__file="src/client/components/Page.vue";var st=(0,l.aZ)({name:"Layout",components:{Home:xe,Page:it,Navbar:M,Sidebar:Le,Transition:n.uT},setup(){const e=(0,s.Vi)(),t=(0,s.I2)(),a=Ne(),n=(0,l.Fl)((()=>!1!==t.value.navbar&&!1!==a.value.navbar)),o=ze(),u=(0,i.iH)(!1),c=e=>{u.value="boolean"==typeof e?e:!u.value},v={x:0,y:0},d=(0,l.Fl)((()=>[{"no-navbar":!n.value,"no-sidebar":!o.value.length,"sidebar-open":u.value},t.value.pageClass]));let m;return(0,l.bv)((()=>{const e=(0,r.tv)();m=e.afterEach((()=>{c(!1)}))})),(0,l.Ah)((()=>{m()})),{frontmatter:t,page:e,containerClass:d,shouldShowNavbar:n,toggleSidebar:c,onTouchStart:e=>{v.x=e.changedTouches[0].clientX,v.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-v.x,a=e.changedTouches[0].clientY-v.y;Math.abs(t)>Math.abs(a)&&Math.abs(t)>40&&(t>0&&v.x<=80?c(!0):c(!1))},onBeforeEnter:Pe.resolve,onBeforeLeave:Pe.pending}}});st.render=function(e,t,a,i,o,r){const s=(0,l.up)("Navbar"),u=(0,l.up)("Sidebar"),c=(0,l.up)("Home"),v=(0,l.up)("Page");return(0,l.wg)(),(0,l.j4)("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?((0,l.wg)(),(0,l.j4)(s,{key:0,onToggleSidebar:e.toggleSidebar},{before:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"navbar-before")])),after:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):(0,l.kq)("v-if",!0),(0,l.Wm)("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),(0,l.Wm)(u,null,{top:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"sidebar-top")])),bottom:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"sidebar-bottom")])),_:1}),e.frontmatter.home?((0,l.wg)(),(0,l.j4)(c,{key:1})):((0,l.wg)(),(0,l.j4)(n.uT,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:(0,l.w5)((()=>[(0,l.Wm)(v,{key:e.page.path},{top:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"page-top")])),bottom:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"page-bottom")])),_:1})])),_:1},8,["onBeforeEnter","onBeforeLeave"]))],34)},st.__file="src/client/layouts/Layout.vue";const ut=st}}]);