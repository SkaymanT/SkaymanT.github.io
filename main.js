(()=>{var t={757:(t,e,i)=>{t.exports=i(666)},666:t=>{var e=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,i){return t[e]=i}}function l(t,e,i,n){var o=e&&e.prototype instanceof v?e:v,r=Object.create(o.prototype),s=new Y(n||[]);return r._invoke=function(t,e,i){var n=d;return function(o,r){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw r;return k()}for(i.method=o,i.arg=r;;){var s=i.delegate;if(s){var a=S(s,i);if(a){if(a===m)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===d)throw n=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=f;var c=u(t,e,i);if("normal"===c.type){if(n=i.done?p:h,c.arg===m)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(n=p,i.method="throw",i.arg=c.arg)}}}(t,i,s),r}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function v(){}function y(){}function g(){}var w={};w[r]=function(){return this};var b=Object.getPrototypeOf,L=b&&b(b(x([])));L&&L!==i&&n.call(L,r)&&(w=L);var C=g.prototype=v.prototype=Object.create(w);function M(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function i(o,r,s,a){var c=u(t[o],t,r);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,s,a)}),(function(t){i("throw",t,s,a)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return i("throw",t,s,a)}))}a(c.arg)}var o;this._invoke=function(t,n){function r(){return new e((function(e,o){i(t,n,e,o)}))}return o=o?o.then(r,r):r()}}function S(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,S(t,i),"throw"===i.method))return m;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,m;var r=o.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,m):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function X(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function x(t){if(t){var i=t[r];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,s=function i(){for(;++o<t.length;)if(n.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}return{next:k}}function k(){return{value:e,done:!0}}return y.prototype=C.constructor=g,g.constructor=y,y.displayName=c(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,a,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},M(E.prototype),E.prototype[s]=function(){return this},t.AsyncIterator=E,t.async=function(e,i,n,o,r){void 0===r&&(r=Promise);var s=new E(l(e,i,n,o),r);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},M(C),c(C,a,"Generator"),C[r]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=x,Y.prototype={constructor:Y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(X),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(n,o){return a.type="throw",a.arg=t,i.next=n,o&&(i.method="next",i.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],a=s.completion;if("root"===s.tryLoc)return o("end");if(s.tryLoc<=this.prev){var c=n.call(s,"catchLoc"),l=n.call(s,"finallyLoc");if(c&&l){if(this.prev<s.catchLoc)return o(s.catchLoc,!0);if(this.prev<s.finallyLoc)return o(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return o(s.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return o(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),X(i),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var o=n.arg;X(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:x(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=function(){document.getElementById("menu__toggle").checked=!1,document.querySelector(".header_wrapper").classList.remove("open_menu")};function e(t,e,i,n,o,r,s){try{var a=t[r](s),c=a.value}catch(t){return void i(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var i=this,n=arguments;return new Promise((function(o,r){var s=t.apply(i,n);function a(t){e(s,o,r,a,c,"next",t)}function c(t){e(s,o,r,a,c,"throw",t)}a(void 0)}))}}var o=i(757),r=i.n(o);function s(){return a.apply(this,arguments)}function a(){return(a=n(r().mark((function t(){var e,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./assets/items.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return l.apply(this,arguments)}function l(){return(l=n(r().mark((function t(){var e,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("./assets/certificate.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,i){return e&&d(t.prototype,e),i&&d(t,i),t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e,i){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(i):o.value}})(t,e,i||t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var w=function(){function t(e){u(this,t),this.classes=e,this.modal="",this.modalContent="",this.modalCloseBtn="",this.overlay=""}return h(t,[{key:"createModal",value:function(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal__content"),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"div","modal__close"),this.modalCloseBtn.innerHTML='<button class="button_close">x</button>',this.setContent(t),this.appendModalElement(),this.bindEvents(),this.addModal()}},{key:"createDomNode",value:function(t,e){var i;t=document.createElement(e);for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return(i=t.classList).add.apply(i,o),t}},{key:"setContent",value:function(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.append(t))}},{key:"appendModalElement",value:function(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}},{key:"bindEvents",value:function(){var t=this;this.modalCloseBtn.addEventListener("click",(function(e){return t.handlerCloseModal(e)})),this.overlay.addEventListener("click",(function(e){return t.handlerCloseModal(e)}))}},{key:"addModal",value:function(){document.body.append(this.overlay)}},{key:"openModal",value:function(){this.modal.classList.add("open")}},{key:"handlerCloseModal",value:function(t){(t.target.classList.contains("overlay")||null!==t.target.closest(".button_close")&&t.target.closest(".button_close").classList.contains("button_close"))&&null!==document.querySelector(".overlay")&&this.closeModal()}},{key:"closeModal",value:function(){document.querySelector(".overlay").remove()}}]),t}();var b=function(t){v(o,t);var e,i,n=(e=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=f(e);if(i){var o=f(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return g(this,t)});function o(t,e){var i,r=e.id,s=e.time,a=e.demo,c=e.img,l=e.description,d=e.category,h=e.code,f=e.stack;return u(this,o),(i=n.call(this,t)).id=r,i.time=s,i.demo=a,i.img=c,i.description=l,i.category=d,i.code=h,i.stack=f,i}return h(o,[{key:"generateContentCardModal",value:function(){return this.content=p(f(o.prototype),"createDomNode",this).call(this,this.modal,"div","card-modal-content"),this.body=p(f(o.prototype),"createDomNode",this).call(this,this.modal,"div","card-modal-body"),this.imgCardModal=p(f(o.prototype),"createDomNode",this).call(this,this.imgCardModal,"img","card-modal-img"),this.imgCardModal.src=this.img,this.imgCardModal.alt=this.id,this.infoCardModal=p(f(o.prototype),"createDomNode",this).call(this,this.infoCardModal,"div","card-modal-info"),this.infoTitle=p(f(o.prototype),"createDomNode",this).call(this,this.infoTitle,"h3","info-title"),this.infoTitle.innerHTML=this.id,this.buttonsModal=p(f(o.prototype),"createDomNode",this).call(this,this.buttonsModal,"div","buttons_modal"),this.infoDemo=p(f(o.prototype),"createDomNode",this).call(this,this.infoDemo,"a","button_primary"),this.infoDemo.innerHTML="LIVE DEMO",this.infoDemo.href=this.demo,this.infoCode=p(f(o.prototype),"createDomNode",this).call(this,this.infoCode,"a","button_primary"),this.infoCode.innerHTML="CODE",this.infoCode.href=this.code,this.infoParagraph=p(f(o.prototype),"createDomNode",this).call(this,this.infoParagraph,"h5","info-paragraph"),this.infoParagraph.innerHTML=this.description,this.infoList=p(f(o.prototype),"createDomNode",this).call(this,this.infoList,"ul","info-list"),this.infoList.innerHTML="<li><h5>Development time: <span>".concat(this.time,"</span></h5></li>\n    <li><h5>Category: <span>").concat(this.category,"</span></h5></li>\n    <li><h5>Tech stack: <span>").concat(this.stack.join(", "),"</span></h5></li>"),this.appendCardModalElement(),this.content}},{key:"closeModal",value:function(){p(f(o.prototype),"closeModal",this).call(this),document.querySelectorAll(".card").forEach((function(t){t.classList.remove("active-card")}))}},{key:"appendCardModalElement",value:function(){this.content.append(this.infoTitle),this.content.append(this.body),this.body.append(this.imgCardModal),this.body.append(this.infoCardModal),this.infoCardModal.append(this.infoList),this.infoCardModal.append(this.buttonsModal),this.buttonsModal.append(this.infoDemo),this.buttonsModal.append(this.infoCode),this.infoCardModal.append(this.infoParagraph)}},{key:"renderCardModal",value:function(){var t=this.generateContentCardModal();p(f(o.prototype),"createModal",this).call(this,t)}}]),o}(w);function L(t){var e=C(e,"div","filter-container");return t.forEach((function(t){var i=C(i,"a","filter-item","active-item");i.dataset.category=t.category;var n=C(n,"div","card");n.id=t.id,i.append(n);var o=C(o,"div","card__title");o.innerHTML="Click for detail",n.append(o);var r=C(r,"div","card__image");n.append(r);var s=C(r,"img");s.src=t.img,r.append(s);var a=C(a,"div","card__name");a.innerHTML=t.id,n.append(a),function(t){var e,i,n,o;t.onmousemove=(e=t,i=t.children[0],n=e,o=i,function(t){var e,i;e=t.pageX,i=t.pageY;var r=n.offsetLeft+n.clientWidth/2,s=n.offsetTop+n.clientHeight/2,a=(e-r)/(n.clientWidth/2),c=-(i-s)/(n.clientHeight/2);o.style.transform="perspective(400px) rotateY("+5*a+"deg) rotateX("+5*c+"deg)scale(1.3)",o.style.zIndex="2",o.style.cursor="pointer"}),t.onmouseenter=function(t){var e=t;return function(){setTimeout((function(){e.style.transition=""}),100),e.style.transition="transform 0.1s"}}(t.children[0]),t.onmouseleave=function(t){var e=t;return function(){e.style.transition="transform 0.1s",setTimeout((function(){e.style.transition=""}),100),e.style.transform="perspective(400px) rotateY(0deg) rotateX(0deg)",e.style.zIndex="0"}}(t.children[0])}(i),e.append(i)})),e}function C(t,e){var i;t=document.createElement(e);for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return(i=t.classList).add.apply(i,o),t}function M(){return(M=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:e=t.sent,document.querySelector(".filter-container").addEventListener("click",(function(t){t.target.closest(".card")&&(S(E(e,t.target.closest(".card").id)),t.target.closest(".card").classList.add("active-card"))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,e){return t.find((function(t){return t.id.toLowerCase()===e.toLowerCase()}))}var S=function(t){var e=new b("modal",t);e.renderCardModal(),setTimeout((function(){e.openModal()}),1)};function _(){return(_=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s();case 2:e=t.sent,document.querySelector(".filter-container").remove(),document.querySelector(".portfolios__wrapper").append(L(e));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var X=function(t){v(o,t);var e,i,n=(e=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=f(e);if(i){var o=f(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return g(this,t)});function o(t,e){var i,r=e.id,s=e.date,a=e.certificate,c=e.img,l=e.category;return u(this,o),(i=n.call(this,t)).id=r,i.date=s,i.certificate=a,i.img=c,i.category=l,i}return h(o,[{key:"generateContentCardModal",value:function(){return this.content=p(f(o.prototype),"createDomNode",this).call(this,this.modal,"div","card-modal-content"),this.body=p(f(o.prototype),"createDomNode",this).call(this,this.modal,"div","card-modal-body"),this.imgCardModal=p(f(o.prototype),"createDomNode",this).call(this,this.imgCardModal,"img","card-modal-img"),this.imgCardModal.src=this.img,this.imgCardModal.alt=this.id,this.infoCardModal=p(f(o.prototype),"createDomNode",this).call(this,this.infoCardModal,"div","card-modal-info"),this.infoTitle=p(f(o.prototype),"createDomNode",this).call(this,this.infoTitle,"h3","info-title"),this.infoTitle.innerHTML="Certificate",this.buttonsModal=p(f(o.prototype),"createDomNode",this).call(this,this.buttonsModal,"div","buttons_modal"),this.infoCertificate=p(f(o.prototype),"createDomNode",this).call(this,this.infoCertificate,"a","button_primary"),this.infoCertificate.innerHTML="CERTIFICATE",this.infoCertificate.href=this.certificate,this.infoList=p(f(o.prototype),"createDomNode",this).call(this,this.infoList,"ul","info-list"),this.infoList.innerHTML="<li><h5>Date: <span>".concat(this.date,"</span></h5></li>\n    <li><h5>Category: <span>").concat(this.category,"</span></h5></li>"),this.appendCardModalElement(),this.content}},{key:"closeModal",value:function(){p(f(o.prototype),"closeModal",this).call(this),document.querySelectorAll(".card").forEach((function(t){t.classList.remove("active-card")}))}},{key:"appendCardModalElement",value:function(){this.content.append(this.infoTitle),this.content.append(this.body),this.body.append(this.imgCardModal),this.body.append(this.infoCardModal),this.infoCardModal.append(this.infoList),this.infoCardModal.append(this.buttonsModal),this.buttonsModal.append(this.infoCertificate)}},{key:"renderCardModal",value:function(){var t=this.generateContentCardModal();p(f(o.prototype),"createModal",this).call(this,t)}}]),o}(w);function Y(){return(Y=n(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c();case 2:e=t.sent,document.querySelectorAll(".certificate").forEach((function(t){t.addEventListener("click",(function(t){t.target.closest(".certificate")&&k(x(e,t.target.closest(".certificate").id))}))}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e){return console.log(t,e),t.find((function(t){return t.id.toLowerCase()===e.toLowerCase()}))}var k=function(t){var e=new X("modal",t);e.renderCardModal(),setTimeout((function(){e.openModal()}),1)};function D(t,e){for(var i=t.className.split(" "),n=e.split(" "),o=0;o<n.length;o+=1)-1==i.indexOf(n[o])&&(t.className+=" "+n[o])}function N(t,e){for(var i=t.className.split(" "),n=e.split(" "),o=0;o<n.length;o+=1)for(;i.indexOf(n[o])>-1;)i.splice(i.indexOf(n[o]),1);t.className=i.join(" ")}function q(){var t=document.querySelector("header").offsetHeight,e=window.scrollY+t,i=document.querySelectorAll("body>section"),n=document.querySelectorAll(".navigation__item");i.forEach((function(t){t.offsetTop<=e&&t.offsetTop+t.offsetHeight>e&&n.forEach((function(e){e.classList.remove("active"),t.id===e.querySelector(".navigation__item_link").innerHTML.toLowerCase()&&e.classList.add("active")}))}))}function T(t){for(var e=0;e<t.length;e++){var i=t[e],n=i.offsetHeight,o=(s=i,void 0,void 0,void 0,a=s.getBoundingClientRect(),c=window.pageXOffset||document.documentElement.scrollLeft,l=window.pageYOffset||document.documentElement.scrollTop,{top:a.top+l,left:a.left+c}).top,r=window.innerHeight-n/4;n>window.innerHeight&&(r=window.innerHeight-window.innerHeight/4),pageYOffset>o-r&&pageYOffset<o+n&&i.classList.add("anim-active")}var s,a,c,l}var O=function(){function t(e){u(this,t),this.sidesName=["Vanilla JS","Vue","React","TypeScript","Angular","Cube for development"],this.fps=e.fps,this.sensivity=e.sensivity,this.sensivityFade=e.sensivityFade,this.touchSensivity=e.touchSensivity,this.speed=e.speed,this.lastX=0,this.lastY=0,this.mouseX=0,this.mouseY=0,this.distanceX=0,this.distanceY=0,this.positionX=1122,this.positionY=136,this.torqueX=0,this.torqueY=0,this.down=!1,this.upsideDown=!1,this.previousPositionX=0,this.previousPositionY=0,this.currentSide=0,this.calculatedSide=0}return h(t,[{key:"createCube",value:function(){var t=this;return this.viewport=this.createDomNode(this.viewport,"div","viewport"),this.cube=this.createDomNode(this.cube,"div","cube"),this.styleCube=this.createDomNode(this.cube,"style"),this.coef=.2,this.sidesName.forEach((function(e,i){var n=t.createDomNode(n,"div","side");if(5===i){var o=t.createDomNode(o,"div","side-content","active");o.innerHTML=e,n.append(o)}else{var r=t.createDomNode(r,"div","side-content");r.innerHTML=e,n.append(r)}t.cube.append(n)})),this.sides=this.cube.children,this.bindEvents(),this.appendCubeElement(),setInterval(this.animate.bind(this),this.fps),this.viewport}},{key:"createDomNode",value:function(t,e){var i;t=document.createElement(e);for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return(i=t.classList).add.apply(i,o),t}},{key:"appendCubeElement",value:function(){this.viewport.append(this.cube)}},{key:"bindEvents",value:function(){var t=this;this.viewport.addEventListener("mousedown",(function(e){t.down=!0})),this.viewport.addEventListener("touchstart",(function(e){t.down=!0,e.touches&&(e=e.touches[0]),t.mouseX=e.pageX/t.touchSensivity,t.mouseY=e.pageY/t.touchSensivity,t.lastX=t.mouseX,t.lastY=t.mouseY})),document.addEventListener("mousemove",(function(e){t.mouseX=e.pageX,t.mouseY=e.pageY})),document.addEventListener("touchmove",(function(e){1==e.touches.length&&(e.touches&&(e=e.touches[0]),t.mouseX=e.pageX/t.touchSensivity,t.mouseY=e.pageY/t.touchSensivity)})),document.addEventListener("mouseup",(function(e){t.down=!1})),document.addEventListener("touchend",(function(e){t.down=!1}))}},{key:"animate",value:function(){this.distanceX=this.mouseX-this.lastX,this.distanceY=this.mouseY-this.lastY,this.lastX=this.mouseX,this.lastY=this.mouseY,this.down&&(this.torqueX=this.torqueX*this.sensivityFade+(this.distanceX*this.speed-this.torqueX)*this.sensivity,this.torqueY=this.torqueY*this.sensivityFade+(this.distanceY*this.speed-this.torqueY)*this.sensivity),(Math.abs(this.torqueX)>1||Math.abs(this.torqueY)>1)&&(this.down||(this.torqueX*=this.sensivityFade,this.torqueY*=this.sensivityFade),this.positionY-=this.torqueY,this.positionY>360?this.positionY-=360:this.positionY<0&&(this.positionY+=360),this.positionY>90&&this.positionY<270?(this.positionX-=this.torqueX,this.upsideDown||(this.upsideDown=!0,this.doUpsideDown())):(this.positionX+=this.torqueX,this.upsideDown&&(this.upsideDown=!1,this.doUpsideDown())),this.positionX>360?this.positionX-=360:this.positionX<0&&(this.positionX+=360),this.positionY>=46&&this.positionY<=130||this.positionY>=220&&this.positionY<=308?(this.positionY>=46&&this.positionY<=130&&(this.calculatedSide=6),this.positionY>=220&&this.positionY<=308&&(this.calculatedSide=1)):this.upsideDown?this.positionX>=42&&this.positionX<=130?this.calculatedSide=3:this.positionX>=131&&this.positionX<=223?this.calculatedSide=2:this.positionX>=224&&this.positionX<=314?this.calculatedSide=5:this.calculatedSide=4:this.positionX>=42&&this.positionX<=130?this.calculatedSide=5:this.positionX>=131&&this.positionX<=223?this.calculatedSide=4:this.positionX>=224&&this.positionX<=314?this.calculatedSide=3:this.calculatedSide=2,this.calculatedSide!==this.currentSide&&(this.currentSide=this.calculatedSide,this.doSideChange())),this.cube.style.transform="rotateX("+this.positionY+"deg) rotateY("+this.positionX+"deg)",this.positionY==this.previousPositionY&&this.positionX==this.previousPositionX||(this.previousPositionY=this.positionY,this.previousPositionX=this.positionX,this.doRotateSides())}},{key:"doRotateSides",value:function(){this.positionY>90&&this.positionY<270?(this.sides[0].querySelector(".side-content").style.transform="rotate("+(this.positionX+this.torqueX)+"deg)",this.sides[5].querySelector(".side-content").style.transform="rotate("+-(this.positionX+180+this.torqueX)+"deg)"):(this.sides[0].querySelector(".side-content").style.transform="rotate("+(this.positionX-this.torqueX)+"deg)",this.sides[5].querySelector(".side-content").style.transform="rotate("+-(this.positionX+180-this.torqueX)+"deg)")}},{key:"doUpsideDown",value:function(){for(var t=1==this.upsideDown?"180deg":"0deg",e=5;e>0&&--e;)this.sides[e].querySelector(".side-content").style.transform="rotate("+t+")"}},{key:"doSideChange",value:function(){for(var t=0;t<this.sides.length;++t)this.sides[t].querySelector(".side-content").className="side-content";this.sides[this.currentSide-1].querySelector(".side-content").className="side-content active"}}]),t}();window.onload=function(){var e,i;!function(){_.apply(this,arguments)}(),document.querySelector(".header__menu").addEventListener("click",(function(e){document.getElementById("menu__toggle").checked?document.querySelector(".header_wrapper").classList.add("open_menu"):document.querySelector(".header_wrapper").classList.remove("open_menu"),function(t){return t.target.classList.contains("menu__container")}(e)&&t(),function(t){if(0!=t.target.classList.length){var e=t.target,i=e.classList,n=e.parentNode;return i.length&&(i.contains("navigation__item")||n.classList.contains("navigation__item"))}}(e)&&(t(),function(t){e=t.target.closest("li");var e=document.getElementById(e.querySelector("a").innerHTML);e.scrollIntoView()}(e))})),document.addEventListener("mousemove",(function(t){!function(t){var e=document.querySelector("#parallax-image"),i=window.innerWidth/2,n=window.innerHeight/2,o=t.clientX,r=t.clientY,s="".concat(50-.01*(o-i),"% ").concat(50-.01*(r-n),"%"),a="".concat(50-.02*(o-i),"% ").concat(50-.02*(r-n),"%"),c="".concat(50-.06*(o-i),"% ").concat(50-.06*(r-n),"%"),l="".concat(c,", ").concat(a,", ").concat(s);e.style.backgroundPosition=l}(t)})),function(){for(var t=document.querySelector(".portfolios_filter").children,e=function(e){t[e].addEventListener("click",(function(){!function(t){var e=document.querySelectorAll(".filter-item"),i=document.querySelectorAll(".active-tab");i[0].className=i[0].className.replace("active-tab",""),t.className+="active-tab";for(var n="all"===t.dataset.filter?t="":t.dataset.filter,o=0;o<e.length;o+=1)N(e[o],"active-item"),e[o].dataset.category.indexOf(n)>-1&&D(e[o],"active-item")}(t[e])}))},i=0;i<t.length;i+=1)e(i)}(),document.addEventListener("scroll",q),e=document.querySelectorAll(".anim-items"),setTimeout((function(){T(e)}),300),e.length>0&&window.addEventListener("scroll",(function(){return T(e)})),function(){M.apply(this,arguments)}(),function(){Y.apply(this,arguments)}(),i=new O({fps:20,sensivity:.1,sensivityFade:.93,speed:2,touchSensivity:1.5}),document.querySelector("#wrapper-cube").append(i.createCube())}})()})();