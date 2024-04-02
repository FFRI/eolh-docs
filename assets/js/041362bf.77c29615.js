"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Signatures",s={unversionedId:"reference/signatures",id:"reference/signatures",title:"Signatures",description:"In Eolh, detection rules are implemented as Signatures. Eolh's Signature is almost identical to Tracee's Signature, except that it deals with ETW Events.",source:"@site/docs/reference/signatures.md",sourceDirName:"reference",slug:"/reference/signatures",permalink:"/eolh-docs/docs/reference/signatures",draft:!1,editUrl:"https://github.com/ffri/eolh-docs/tree/main/docs/reference/signatures.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reference",previous:{title:"Eolh Events",permalink:"/eolh-docs/docs/reference/events"},next:{title:"CLI Flags",permalink:"/eolh-docs/docs/reference/cli"}},c={},l=[{value:"<code>detect.Signature</code> Interface",id:"detectsignature-interface",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signatures"},"Signatures"),(0,a.kt)("p",null,"In Eolh, detection rules are implemented as Signatures. Eolh's Signature is almost identical to Tracee's Signature, except that it deals with ETW Events."),(0,a.kt)("h2",{id:"detectsignature-interface"},(0,a.kt)("inlineCode",{parentName:"h2"},"detect.Signature")," Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Signature interface {\n    // GetMetadata allows the signature to declare information about itself\n    GetMetadata() (SignatureMetadata, error)\n    // GetSelectedEvents allows the signature to declare which events it subscribes to\n    GetSelectedEvents() ([]SignatureEventSelector, error)\n    // Init allows the signature to initialize its internal state\n    Init(ctx SignatureContext) error\n    // Close cleans the signature after Init operation\n    Close()\n    // OnEvent allows the signature to process events passed by the Engine. this is the business logic of the signature\n    OnEvent(event protocol.Event) error\n    // OnSignal allows the signature to handle lifecycle events of the signature\n    OnSignal(signal Signal) error\n}\n")))}d.isMDXComponent=!0}}]);