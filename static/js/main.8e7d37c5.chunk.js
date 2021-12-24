(this["webpackJsonpexpenditure-notebook"]=this["webpackJsonpexpenditure-notebook"]||[]).push([[0],{32:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r,c=n(1),a=n.n(c),o=n(22),s=n.n(o),i=(n(32),n(6)),l=n(8),u=n(14),d=n(7);!function(e){e.EUR="EUR",e.USD="USD",e.PLN="PLN",e.HKD="HKD"}(r||(r={}));var b,x={expenditures:[]},j="ls/expenditure",f=n(0),p=a.a.createContext({store:x,addExpenditure:function(e){}});function m(e){var t=e.children,n=function(e){try{var t=JSON.parse(localStorage.getItem(j)||"")||x;return e?e.split(".").reduce((function(e,t){return null===e||void 0===e?void 0:e[t]}),t):t}catch(n){return null}}()||{expenditures:[]},r=a.a.useState(n),c=Object(i.a)(r,2),o=c[0],s=c[1];a.a.useEffect((function(){var e;o&&(e=o,localStorage.setItem(j,JSON.stringify(e)))}),[o]);var l={store:o,addExpenditure:function(e){s(Object(d.a)(Object(d.a)({},o),{},{expenditures:[].concat(Object(u.a)(o.expenditures),[e])}))}};return Object(f.jsx)(p.Provider,{value:l,children:t})}!function(e){e[e.HOME_PAGE=0]="HOME_PAGE",e[e.RECORD_LIST_PAGE=1]="RECORD_LIST_PAGE"}(b||(b={}));var h=n(49),v=n(51),O=n(12),g=n.n(O),y=n(50),C=n(13),N=n.n(C);function w(e){var t=e.record;return Object(f.jsxs)("div",{className:"flex-shrink-0 items-center grid grid-cols-12 h-16 border-t border-b border-primary-200",children:[Object(f.jsx)("span",{className:"col-span-3",children:Object(y.a)(new Date(t.date),"yyyy-MM-dd HH:mm")}),Object(f.jsx)("span",{className:"col-span-6 whitespace-nowrap overflow-hidden overflow-ellipsis",children:t.description}),Object(f.jsxs)("div",{className:"flex flex-col justify-center col-span-3 whitespace-nowrap overflow-hidden overflow-ellipsis",children:[t.amount.toFixed(2),"\u20ac",t.currencyConfig&&t.currencyConfig.currency!==r.EUR&&Object(f.jsxs)("span",{className:"text-opacity-60 text-xs font-bold",children:["(",(t.amount*t.currencyConfig.exchangeRate).toFixed(2)," ",N()(t.currencyConfig.currency),")"]})]})]})}var E=function(e,t){var n,r;return null!==(n=null===(r=e.expenditures)||void 0===r?void 0:r.filter((function(e){return Object(h.a)(t,new Date(e.date))})).reduce((function(e,t){return e+t.amount}),0))&&void 0!==n?n:0};function S(){var e,t=a.a.useContext(p).store,n=null===t||void 0===t||null===(e=t.expenditures)||void 0===e?void 0:e.sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()})),r=new Date,c=Object(v.a)(r,1),o=E(t,r),s=o-E(t,c);return Object(f.jsxs)("div",{className:"vertical flex-1 overflow-y-scroll",children:[Object(f.jsxs)("div",{className:"sticky top-0 h-16 flex-shrink-0 bg-primary-700 flex items-center justify-between",children:[Object(f.jsxs)("div",{className:"text-sm uppercase vertical text-green-500 font-bold",children:[Object(f.jsx)("span",{children:"Current month"}),Object(f.jsxs)("b",{className:"text-3xl text-green-400",children:[o.toFixed(2),"\u20ac"]})]}),Object(f.jsxs)("div",{className:g()("text-sm",s<=0?"text-green-500":"text-red-500"),children:[s<=0?"-":"+",Math.abs(s).toFixed(2),"\u20ac"]})]}),null===n||void 0===n?void 0:n.map((function(e){return Object(f.jsx)(w,{record:e},e.id)}))]})}function k(e){var t=e.value,n=e.currency,r=e.onChange,c=a.a.useRef(null),o="".concat((t/100).toFixed(2)).concat(N()(n)),s=window.screen.width;return Object(f.jsx)("input",{ref:c,style:{fontSize:Math.min(1.5*s/o.length,128)},className:"digit center text-color-100 bg-primary-700 text-center",value:o,type:"tel",onKeyDown:function(e){var n=e.key,c=parseInt(n);Number.isNaN(c)||r(10*t+c),"Backspace"===n&&r(Math.floor(t/10))}})}function R(e){var t=e.children,n=e.className,r=e.name,c=e.label,a=e.value,o=e.onChange;return Object(f.jsxs)("div",{className:"vertical gap-1",children:[Object(f.jsx)("label",{htmlFor:r,children:c}),Object(f.jsxs)("div",{className:g()("rounded-lg bg-primary-500 p-4 horizontal",n),children:[t,Object(f.jsx)("input",{className:"bg-primary-500 text-primary-100 w-full outline-none text-xl",value:a,onChange:function(e){return o(e.target.value)}})]})]})}function P(e){var t=e.children,n=e.title,r=e.opened,c=e.onClose,a=e.className;return r?Object(f.jsx)("div",{className:"fixed z-10 inset-0 p-4 center bg-color-700 bg-opacity-60",onClick:c,children:Object(f.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:g()("rounded-lg w-full bg-primary-600 text-color-100 vertical overflow-y-auto",a||"h-2/3 p-2"),children:[Object(f.jsx)("span",{className:"uppercase font-bold text-md text-color-100 mb-2",children:n}),t]})}):null}function D(e){var t=e.onClose,n=e.opened,a=e.onSelect,o=Object(c.useState)("1"),s=Object(i.a)(o,2),l=s[0],u=s[1];return Object(f.jsxs)(P,{onClose:t,opened:n,title:"Change record currency",children:[Object(f.jsx)("div",{className:"grid gap-4 grid-cols-2 flex-1 mb-4",children:Object.values(r).map((function(e){return Object(f.jsxs)("button",{onClick:function(){return function(e){var n,r=null!==(n=parseFloat(l))&&void 0!==n?n:1;a({exchangeRate:r,currency:e}),t()}(e)},className:"rounded-lg bg-primary-500 border-none bg-transparent flex flex-col items-center justify-center",children:[Object(f.jsx)("div",{className:"text-5xl",children:N()(e)}),Object(f.jsx)("div",{children:e})]})}))}),Object(f.jsx)(R,{label:"Exchange rate (1 EUR -> ?)",value:l.toString(),onChange:u,name:"exchangeRate"})]})}function M(e){var t=e.amount,n=e.currencyConfig,a=e.onChangeCurrency,o=Object(c.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1],d=n.currency,b=n.exchangeRate,x=N()(d);return Object(f.jsxs)("div",{className:"w-full flex items-center justify-end mb-2",children:[d!==r.EUR&&Object(f.jsxs)("div",{className:"flex flex-col gap-1 flex-1",children:[Object(f.jsxs)("span",{className:"font-bold text-sm text-secondary-500",children:["\u2248 ",(t/100/b).toFixed(2),"\u20ac"]}),Object(f.jsxs)("span",{className:"text-xs",children:["(1\u20ac : ",b.toFixed(2)," ",x,")"]})]}),Object(f.jsx)("button",{onClick:function(){return u(!0)},className:"rounded-full w-12 h-8 flex items-center justify-center bg-primary-500 text-primary-100",children:x}),l&&Object(f.jsx)(D,{onSelect:a,onClose:function(){return u(!1)},opened:l})]})}var F=n(10),_=n(11);function L(e){var t=e.text,n=e.onDelete;return Object(f.jsxs)("div",{onClick:n,className:"horizontal-center px-2 py-1 rounded-md bg-primary-500 text-sm text-color-100",children:[Object(f.jsx)("span",{className:"pr-1",children:t}),Object(f.jsx)(_.a,{icon:F.f,className:"pl-1 w-8 h-8"})]})}function U(e){var t=e.name,n=e.label,r=e.values,c=e.onChange,o=e.selectableOptions,s=void 0===o?[]:o,l=a.a.useState(""),d=Object(i.a)(l,2),b=d[0],x=d[1],j=function(e){var t=e||b;t&&(r.find((function(e){return e.toLowerCase()===t.toLowerCase()}))||(c([].concat(Object(u.a)(r),[t])),x("")))},p=function(e){return function(){c(r.filter((function(t){return t!==e})))}},m=b.length<2?[]:s.filter((function(e){return e.toLowerCase().includes(b.toLowerCase())&&!r.find((function(t){return t.toLowerCase()===e.toLowerCase()}))})).sort().slice(0,5);return Object(f.jsxs)("div",{className:"vertical gap-1 overflow-y-visible",children:[Object(f.jsx)("label",{htmlFor:t,children:n}),Object(f.jsx)("div",{className:"flex items-center gap-2 overflow-x-auto max-w-md",children:r.map((function(e){return Object(f.jsx)(L,{text:e,onDelete:p(e)},e)}))}),Object(f.jsx)("div",{className:g()("relative inline-block rounded-lg bg-primary-500 p-4 horizontal overflow-x-auto overflow-y-hidden","gap-2"),children:Object(f.jsx)("input",{onKeyDown:function(e){"Enter"===e.key&&j(),"Backspace"===e.key&&0===b.length&&r.length>0&&p(r[r.length-1])()},className:"bg-primary-500 w-full outline-none text-xl",value:b,onChange:function(e){return x(e.target.value)}})}),(null===m||void 0===m?void 0:m.length)>0&&Object(f.jsx)("div",{className:"absolute min-h-20 bg-primary-500 rounded-lg left-0 right-0 bottom-0 z-20 max-h-32 mt-2 overflow-y-auto",children:m.map((function(e){return Object(f.jsx)("div",{onClick:function(){return j(e)},className:"cursor-pointer px-2 h-12 whitespace-nowrap overflow-ellipsis horizontal-center hover:bg-primary-700",children:e},e)}))})]})}function A(e){var t=e.onOpenUploadModal,n=e.formValue,c=e.onSubmit,o=a.a.useContext(p).addExpenditure;return Object(f.jsxs)("div",{className:"h-1/6 md:h-1/3 center w-full relative",children:[Object(f.jsx)("button",{onClick:function(){if(n.amount<=0||!n.description)l.b.error("missing description or amount is invalid.");else if([0,1].includes(n.currencyConfig.exchangeRate)&&n.currencyConfig.currency!==r.EUR)l.b.error("Exchange rate cannot be 0 or 1");else{var e=n.currencyConfig.currency===r.EUR?n.amount:n.amount/n.currencyConfig.exchangeRate;o(Object(d.a)(Object(d.a)({},n),{},{amount:e/100,date:new Date,id:"".concat((new Date).getTime(),"-").concat(Math.random().toString().split(".")[1])})),c(),l.b.success("Expenditure logged!")}},className:"h-20 w-20 md:h-96 md:w-96 lg:h-48 lg:w-48 rounded-full bg-secondary-500 text-xl md:text-7xl",children:Object(f.jsx)(_.a,{icon:F.d})}),Object(f.jsx)("div",{className:"absolute right-0 top-0 h-full horizontal-center gap-2",children:Object(f.jsx)("button",{onClick:t,className:"text-3xl md:text-7xl rounded-full center h-12 w-12 lg:h-24 lg:w-24 bg-color-50 text-primary-700",children:Object(f.jsx)(_.a,{icon:F.e,className:"text-primary-700"})})})]})}var G=n(21),H=n.n(G),z=n(23),T=n(24),I=n.n(T);function J(e){var t=e.opened,n=e.onClose,r=a.a.useContext(p).store,c=function(){var e=Object(z.a)(H.a.mark((function e(t){var c,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=19;break}if((null===(c=JSON.parse(t))||void 0===c?void 0:c.url)&&(null===c||void 0===c?void 0:c.key)){e.next=4;break}throw new Error;case 4:return e.prev=4,e.next=7,fetch(c.url,{method:"POST",body:JSON.stringify(r)});case 7:return a=e.sent,e.next=10,a.json();case 10:e.sent,l.b.success("Code detected"),n(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),l.b.error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(P,{title:"Upload record",opened:t,onClose:n,children:[Object(f.jsx)("span",{className:"text-sm font-bold text-color-300 leading-4",children:"Upload expenditure records on this device to server by sending its QR code."}),Object(f.jsx)(I.a,{className:"mt-4 rounded-lg w-full overflow-hidden",onError:function(e){var t;l.b.error(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:"Error with QR code")},onScan:c})]})}var B={amount:0,description:"",labels:[],currencyConfig:{currency:r.EUR,exchangeRate:1}};function K(){var e=a.a.useContext(p).store,t=a.a.useState(!1),n=Object(i.a)(t,2),r=n[0],c=n[1],o=a.a.useState(B),s=Object(i.a)(o,2),l=s[0],b=s[1],x=e.expenditures.reduce((function(e,t){return Array.from(new Set([].concat(Object(u.a)(e),Object(u.a)(t.labels))))}),[]);return Object(f.jsxs)("div",{className:"flex-1 vertical overflow-hidden",children:[Object(f.jsx)(J,{opened:r,onClose:function(){return c(!1)}}),Object(f.jsx)(k,{currency:l.currencyConfig.currency,value:l.amount,onChange:function(e){return b(Object(d.a)(Object(d.a)({},l),{},{amount:e}))}}),Object(f.jsx)(M,{amount:l.amount,currencyConfig:l.currencyConfig,onChangeCurrency:function(e){return b(Object(d.a)(Object(d.a)({},l),{},{currencyConfig:e}))}}),Object(f.jsx)(R,{name:"description",label:"description",value:l.description,onChange:function(e){return b(Object(d.a)(Object(d.a)({},l),{},{description:e}))}}),Object(f.jsx)(U,{name:"labels",label:"tags",values:l.labels,onChange:function(e){return b(Object(d.a)(Object(d.a)({},l),{},{labels:e}))},selectableOptions:x}),Object(f.jsx)("div",{className:"flex-1"}),Object(f.jsx)(A,{onSubmit:function(){return b(B)},formValue:l,onOpenUploadModal:function(){return c(!0)}})]})}var Q=n(26),V=n.n(Q);function q(e){var t=e.opened,n=e.onClose,r=a.a.useContext(p).store;return Object(f.jsxs)(P,{title:"Copy store content to clipboard",opened:t,onClose:n,children:[Object(f.jsx)("textarea",{id:"store-text",className:"shadow-inner rounded-lg bg-primary-700 code digit flex-1 resize-none",value:JSON.stringify(r),contentEditable:!1}),Object(f.jsx)("div",{className:"h-16 py-2 flex items-center justify-end",children:Object(f.jsxs)("button",{type:"button",onClick:function(){V()(JSON.stringify(r)),l.b.success("Copied store value to clipboard!")},className:"rounded-lg bg-secondary-500 gap-2 flex items-center p-2 h-full hover:bg-secondary-600",children:[Object(f.jsx)(_.a,{icon:F.a}),"Copy to clipboard"]})})]})}function W(e){var t=e.currentPage,n=e.goPage,r=t===b.HOME_PAGE?b.RECORD_LIST_PAGE:b.HOME_PAGE,c=r===b.HOME_PAGE?F.b:F.c,o=a.a.useState(!1),s=Object(i.a)(o,2),l=s[0],u=s[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("header",{className:"h-16 flex-0 center relative",children:[Object(f.jsx)("span",{className:"uppercase text-lg",children:"Expenditure logbook"}),Object(f.jsxs)("div",{className:"absolute right-0 top-0 h-full horizontal-center gap-4 text-xl",children:[Object(f.jsx)(_.a,{icon:F.a,className:"cursor-pointer",onClick:function(){return u(!0)}}),Object(f.jsx)(_.a,{icon:c,onClick:function(){return n(r)},className:"cursor-pointer"})]})]}),Object(f.jsx)(q,{opened:l,onClose:function(){return u(!1)}})]})}n(46);function X(){var e=a.a.useState(b.HOME_PAGE),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{className:"absolute vertical inset-0 flex p-4 bg-primary-700 overflow-hidden",children:[Object(f.jsx)(l.a,{}),Object(f.jsx)(W,{currentPage:n,goPage:r}),n===b.HOME_PAGE&&Object(f.jsx)(K,{}),n===b.RECORD_LIST_PAGE&&Object(f.jsx)(S,{})]})}function Y(){return Object(f.jsx)(m,{children:Object(f.jsx)(X,{})})}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[47,1,2]]]);
//# sourceMappingURL=main.8e7d37c5.chunk.js.map