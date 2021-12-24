(this["webpackJsonpexpenditure-notebook"]=this["webpackJsonpexpenditure-notebook"]||[]).push([[0],{31:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(22),o=n.n(a),s=(n(31),n(7)),i=n(14),l=n(6),u=n(12),d=n.n(u),b=n(0);function x(e){var t=e.value,n=e.currency,r=e.onChange,a=c.a.useRef(null),o="".concat((t/100).toFixed(2)).concat(d()(n)),s=window.screen.width;return Object(b.jsx)("input",{ref:a,style:{fontSize:1.5*s/o.length},className:"digit center text-color-100 bg-primary-700 text-center",value:o,type:"tel",onKeyDown:function(e){var n=e.key,c=parseInt(n);Number.isNaN(c)||r(10*t+c),"Backspace"===n&&r(Math.floor(t/10))}})}var j,f=n(9),p=n(11);!function(e){e[e.HOME_PAGE=0]="HOME_PAGE",e[e.RECORD_LIST_PAGE=1]="RECORD_LIST_PAGE"}(j||(j={}));var m,h=n(23),v=n.n(h),O=n(10);!function(e){e.EUR="EUR",e.USD="USD",e.PLN="PLN",e.HKD="HKD"}(m||(m={}));var g={expenditures:[]},y="ls/expenditure",C=c.a.createContext({store:g,addExpenditure:function(e){}});function N(e){var t=e.children,n=function(e){try{var t=JSON.parse(localStorage.getItem(y)||"")||g;return e?e.split(".").reduce((function(e,t){return null===e||void 0===e?void 0:e[t]}),t):t}catch(n){return null}}()||{expenditures:[]},r=c.a.useState(n),a=Object(l.a)(r,2),o=a[0],u=a[1];c.a.useEffect((function(){var e;o&&(e=o,localStorage.setItem(y,JSON.stringify(e)))}),[o]);var d={store:o,addExpenditure:function(e){u(Object(s.a)(Object(s.a)({},o),{},{expenditures:[].concat(Object(i.a)(o.expenditures),[e])}))}};return Object(b.jsx)(C.Provider,{value:d,children:t})}var w=n(13),E=n.n(w);function S(e){var t=e.children,n=e.title,r=e.opened,c=e.onClose,a=e.className;return r?Object(b.jsx)("div",{className:"fixed z-10 inset-0 p-4 center bg-color-700 bg-opacity-60",onClick:c,children:Object(b.jsxs)("div",{onClick:function(e){return e.stopPropagation()},className:E()("rounded-lg w-full bg-primary-600 text-color-100 vertical overflow-y-auto",a||"h-2/3 p-2"),children:[Object(b.jsx)("span",{className:"uppercase font-bold text-md text-color-100 mb-2",children:n}),t]})}):null}function k(e){var t=e.opened,n=e.onClose,r=c.a.useContext(C).store;return Object(b.jsxs)(S,{title:"Copy store content to clipboard",opened:t,onClose:n,children:[Object(b.jsx)("textarea",{id:"store-text",className:"shadow-inner rounded-lg bg-primary-700 code digit flex-1 resize-none",value:JSON.stringify(r),contentEditable:!1}),Object(b.jsx)("div",{className:"h-16 py-2 flex items-center justify-end",children:Object(b.jsxs)("button",{type:"button",onClick:function(){v()(JSON.stringify(r)),O.b.success("Copied store value to clipboard!")},className:"rounded-lg bg-secondary-500 gap-2 flex items-center p-2 h-full hover:bg-secondary-600",children:[Object(b.jsx)(p.a,{icon:f.a}),"Copy to clipboard"]})})]})}function R(e){var t=e.currentPage,n=e.goPage,r=t===j.HOME_PAGE?j.RECORD_LIST_PAGE:j.HOME_PAGE,a=r===j.HOME_PAGE?f.b:f.c,o=c.a.useState(!1),s=Object(l.a)(o,2),i=s[0],u=s[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:"h-16 flex-0 center relative",children:[Object(b.jsx)("span",{className:"uppercase text-lg",children:"Expenditure logbook"}),Object(b.jsxs)("div",{className:"absolute right-0 top-0 h-full horizontal-center gap-4 text-xl",children:[Object(b.jsx)(p.a,{icon:f.a,className:"cursor-pointer",onClick:function(){return u(!0)}}),Object(b.jsx)(p.a,{icon:a,onClick:function(){return n(r)},className:"cursor-pointer"})]})]}),Object(b.jsx)(k,{opened:i,onClose:function(){return u(!1)}})]})}n(40);function P(e){var t=e.children,n=e.className,r=e.name,c=e.label,a=e.value,o=e.onChange;return Object(b.jsxs)("div",{className:"vertical gap-1",children:[Object(b.jsx)("label",{htmlFor:r,children:c}),Object(b.jsxs)("div",{className:E()("rounded-lg bg-primary-500 p-4 horizontal",n),children:[t,Object(b.jsx)("input",{className:"bg-primary-500 text-primary-100 w-full outline-none text-xl",value:a,onChange:function(e){return o(e.target.value)}})]})]})}function D(e){var t=e.onOpenUploadModal,n=e.onSubmit;return Object(b.jsxs)("div",{className:"h-1/6 md:h-1/3 center w-full relative",children:[Object(b.jsx)("button",{onClick:n,className:"h-20 w-20 md:h-96 md:w-96 rounded-full bg-secondary-500 text-xl md:text-7xl",children:Object(b.jsx)(p.a,{icon:f.d})}),Object(b.jsx)("div",{className:"absolute right-0 top-0 h-full horizontal-center gap-2",children:Object(b.jsx)("button",{onClick:t,className:"text-3xl md:text-7xl rounded-full center h-12 w-12 bg-color-50 text-primary-700",children:Object(b.jsx)(p.a,{icon:f.e,className:"text-primary-700"})})})]})}function F(e){var t=e.text,n=e.onDelete;return Object(b.jsxs)("div",{onClick:n,className:"horizontal-center px-2 py-1 rounded-md bg-primary-500 text-sm text-color-100",children:[Object(b.jsx)("span",{className:"pr-1",children:t}),Object(b.jsx)(p.a,{icon:f.f,className:"pl-1 w-8 h-8"})]})}function M(e){var t=e.name,n=e.label,r=e.values,a=e.onChange,o=e.selectableOptions,s=void 0===o?[]:o,u=c.a.useRef(null),d=c.a.useState(""),x=Object(l.a)(d,2),j=x[0],f=x[1],p=function(e){var t=e||j;t&&(r.find((function(e){return e.toLowerCase()===t.toLowerCase()}))||(a([].concat(Object(i.a)(r),[t])),f("")))},m=function(e){return function(){a(r.filter((function(t){return t!==e})))}},h=j.length<2?[]:s.filter((function(e){return e.toLowerCase().includes(j.toLowerCase())&&!r.find((function(t){return t.toLowerCase()===e.toLowerCase()}))})).sort().slice(0,5);return Object(b.jsxs)("div",{className:"vertical gap-1 overflow-y-visible",children:[Object(b.jsx)("label",{htmlFor:t,children:n}),Object(b.jsx)("div",{className:"flex items-center gap-2 overflow-x-auto max-w-md",children:r.map((function(e){return Object(b.jsx)(F,{text:e,onDelete:m(e)},e)}))}),Object(b.jsx)("div",{ref:u,className:E()("relative inline-block rounded-lg bg-primary-500 p-4 horizontal overflow-x-auto overflow-y-hidden","gap-2"),children:Object(b.jsx)("input",{onKeyDown:function(e){"Enter"===e.key&&p(),"Backspace"===e.key&&0===j.length&&r.length>0&&m(r[r.length-1])()},className:"bg-primary-500 w-full outline-none text-xl",value:j,onChange:function(e){return f(e.target.value)}})}),(null===h||void 0===h?void 0:h.length)>0&&Object(b.jsx)("div",{className:"absolute min-h-20 bg-primary-500 rounded-lg left-0 right-0 bottom-0 z-20 max-h-32 mt-2 overflow-y-auto",children:h.map((function(e){return Object(b.jsx)("div",{onClick:function(){return p(e)},className:"cursor-pointer px-2 h-12 whitespace-nowrap overflow-ellipsis horizontal-center hover:bg-primary-700",children:e},e)}))})]})}var _=n(51),L=n(49),A=n(50);function U(){var e,t,n,r,a,o=c.a.useContext(C).store,s=null===o||void 0===o||null===(e=o.expenditures)||void 0===e?void 0:e.sort((function(e,t){return new Date(t.date).getTime()-new Date(e.date).getTime()})),i=new Date,l=Object(_.a)(i,1),u=null!==(t=null===(n=o.expenditures)||void 0===n?void 0:n.filter((function(e){return Object(L.a)(i,new Date(e.date))})).reduce((function(e,t){return e+t.amount}),0))&&void 0!==t?t:0,x=u-(null!==(r=null===(a=o.expenditures)||void 0===a?void 0:a.filter((function(e){return Object(L.a)(l,new Date(e.date))})).reduce((function(e,t){return e+t.amount}),0))&&void 0!==r?r:0);return Object(b.jsxs)("div",{className:"vertical flex-1 overflow-y-scroll",children:[Object(b.jsxs)("div",{className:"sticky top-0 h-16 flex-shrink-0 bg-primary-700 flex items-center justify-between",children:[Object(b.jsxs)("div",{className:"text-sm uppercase vertical text-green-500 font-bold",children:[Object(b.jsx)("span",{children:"Current month"}),Object(b.jsxs)("b",{className:"text-3xl text-green-400",children:[u.toFixed(2),"\u20ac"]})]}),Object(b.jsxs)("div",{className:E()("text-sm",x<=0?"text-green-500":"text-red-500"),children:[x<=0?"-":"+",Math.abs(x).toFixed(2),"\u20ac"]})]}),null===s||void 0===s?void 0:s.map((function(e){return Object(b.jsxs)("div",{className:"flex-shrink-0 items-center grid grid-cols-12 h-16 border-t border-b border-primary-200",children:[Object(b.jsx)("span",{className:"col-span-3",children:Object(A.a)(new Date(e.date),"yyyy-MM-dd HH:mm")}),Object(b.jsx)("span",{className:"col-span-6 whitespace-nowrap overflow-hidden overflow-ellipsis",children:e.description}),Object(b.jsxs)("div",{className:"flex flex-col justify-center col-span-3 whitespace-nowrap overflow-hidden overflow-ellipsis",children:[e.amount.toFixed(2),"\u20ac",e.currencyConfig&&Object(b.jsxs)("span",{className:"text-opacity-60 text-xs font-bold",children:["(",(e.amount*e.currencyConfig.exchangeRate).toFixed(2)," ",d()(e.currencyConfig.currency),")"]})]})]})}))]})}var G=n(21),H=n.n(G),z=n(24),T=n(25),I=n.n(T);function J(e){var t=e.opened,n=e.onClose,r=c.a.useContext(C).store,a=function(){var e=Object(z.a)(H.a.mark((function e(t){var c,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=19;break}if((null===(c=JSON.parse(t))||void 0===c?void 0:c.url)&&(null===c||void 0===c?void 0:c.key)){e.next=4;break}throw new Error;case 4:return e.prev=4,e.next=7,fetch(c.url,{method:"POST",body:JSON.stringify(r)});case 7:return a=e.sent,e.next=10,a.json();case 10:e.sent,O.b.success("Code detected"),n(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0),O.b.error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(S,{title:"Upload record",opened:t,onClose:n,children:[Object(b.jsx)("span",{className:"text-sm font-bold text-color-300 leading-4",children:"Upload expenditure records on this device to server by sending its QR code."}),Object(b.jsx)(I.a,{className:"mt-4 rounded-lg w-full overflow-hidden",onError:function(e){var t;O.b.error(null!==(t=null===e||void 0===e?void 0:e.message)&&void 0!==t?t:"Error with QR code")},onScan:a})]})}function B(e){var t=e.onClose,n=e.opened,c=e.onSelect,a=Object(r.useState)("1"),o=Object(l.a)(a,2),s=o[0],i=o[1];return Object(b.jsxs)(S,{onClose:t,opened:n,title:"Change record currency",children:[Object(b.jsx)("div",{className:"grid gap-4 grid-cols-2 flex-1 mb-4",children:Object.values(m).map((function(e){return Object(b.jsxs)("button",{onClick:function(){return function(e){var n,r=null!==(n=parseFloat(s))&&void 0!==n?n:1;c({exchangeRate:r,currency:e}),t()}(e)},className:"rounded-lg bg-primary-500 border-none bg-transparent flex flex-col items-center justify-center",children:[Object(b.jsx)("div",{className:"text-5xl",children:d()(e)}),Object(b.jsx)("div",{children:e})]})}))}),Object(b.jsx)(P,{label:"Exchange rate (1 EUR -> ?)",value:s.toString(),onChange:i,name:"exchangeRate"})]})}function K(e){var t=e.amount,n=e.currencyConfig,c=e.onChangeCurrency,a=Object(r.useState)(!1),o=Object(l.a)(a,2),s=o[0],i=o[1],u=n.currency,x=n.exchangeRate,j=d()(u);return Object(b.jsxs)("div",{className:"w-full flex items-center justify-end mb-2",children:[u!==m.EUR&&Object(b.jsxs)("div",{className:"flex flex-col gap-1 flex-1",children:[Object(b.jsxs)("span",{className:"font-bold text-sm text-secondary-500",children:["\u2248 ",(t/100/x).toFixed(2),"\u20ac"]}),Object(b.jsxs)("span",{className:"text-xs",children:["(1\u20ac : ",x.toFixed(2)," ",j,")"]})]}),Object(b.jsx)("button",{onClick:function(){return i(!0)},className:"rounded-full w-12 h-8 flex items-center justify-center bg-primary-500 text-primary-100",children:j}),s&&Object(b.jsx)(B,{onSelect:c,onClose:function(){return i(!1)},opened:s})]})}var Q={amount:0,description:"",labels:[],currencyConfig:{currency:m.EUR,exchangeRate:1}};function q(){var e=c.a.useState(j.HOME_PAGE),t=Object(l.a)(e,2),n=t[0],r=t[1],a=c.a.useContext(C),o=a.addExpenditure,u=a.store,d=c.a.useState(Q),f=Object(l.a)(d,2),p=f[0],h=f[1],v=c.a.useState(!1),g=Object(l.a)(v,2),y=g[0],N=g[1],w=u.expenditures.reduce((function(e,t){return Array.from(new Set([].concat(Object(i.a)(e),Object(i.a)(t.labels))))}),[]);return Object(b.jsxs)("div",{className:"absolute vertical inset-0 flex p-4 bg-primary-700 overflow-hidden",children:[Object(b.jsx)(O.a,{}),Object(b.jsx)(J,{opened:y,onClose:function(){return N(!1)}}),Object(b.jsx)(R,{currentPage:n,goPage:r}),n===j.HOME_PAGE&&Object(b.jsxs)("div",{className:"flex-1 vertical overflow-hidden",children:[Object(b.jsx)(x,{currency:p.currencyConfig.currency,value:p.amount,onChange:function(e){return h(Object(s.a)(Object(s.a)({},p),{},{amount:e}))}}),Object(b.jsx)(K,{amount:p.amount,currencyConfig:p.currencyConfig,onChangeCurrency:function(e){return h(Object(s.a)(Object(s.a)({},p),{},{currencyConfig:e}))}}),Object(b.jsx)(P,{name:"description",label:"description",value:p.description,onChange:function(e){return h(Object(s.a)(Object(s.a)({},p),{},{description:e}))}}),Object(b.jsx)(M,{name:"labels",label:"tags",values:p.labels,onChange:function(e){return h(Object(s.a)(Object(s.a)({},p),{},{labels:e}))},selectableOptions:w}),Object(b.jsx)("div",{className:"flex-1"}),Object(b.jsx)(D,{onOpenUploadModal:function(){return N(!0)},onSubmit:function(){if(p.amount<=0||!p.description)O.b.error("missing description or amount is invalid.");else if([0,1].includes(p.currencyConfig.exchangeRate))O.b.error("Exchange rate cannot be 0 or 1");else{var e=p.currencyConfig.currency===m.EUR?p.amount:p.amount/p.currencyConfig.exchangeRate;o(Object(s.a)(Object(s.a)({},p),{},{amount:e/100,date:new Date,id:"".concat((new Date).getTime(),"-").concat(Math.random().toString().split(".")[1])})),h(Q),O.b.success("Expenditure logged!")}}})]}),n===j.RECORD_LIST_PAGE&&Object(b.jsx)(U,{})]})}function V(){return Object(b.jsx)(N,{children:Object(b.jsx)(q,{})})}var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(V,{})}),document.getElementById("root")),W()}},[[46,1,2]]]);
//# sourceMappingURL=main.8d5f9d0d.chunk.js.map