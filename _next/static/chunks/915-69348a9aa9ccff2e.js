(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.6.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,r,s=(Math.abs(t).toFixed(i.options.decimalPlaces)+"").split(".");if(e=s[0],n=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){r="";for(var a=3,o=0,u=0,l=e.length;u<l;++u)i.options.useIndianSeparators&&4===u&&(a=2,o=1),0!==u&&o%a==0&&(r=i.options.separator+r),o++,r=e[l-u-1]+r;e=r}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return i.options.numerals[+t]}),n=n.replace(/[0-9]/g,function(t){return i.options.numerals[+t]})),(t<0?"-":"")+i.options.prefix+e+n+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(t){return t()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<e&&i>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>i||r>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>t,Math.abs(t-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);null!==(e=this.options.plugin)&&void 0!==e&&e.render?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},9008:function(t,e,n){t.exports=n(2636)},7857:function(t,e,n){"use strict";var r=n(7294),i=n(8273);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){var r,i,s;r=t,i=e,s=n[e],(i=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(i))in r?Object.defineProperty(r,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[i]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var u="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function l(t){var e=r.useRef(t);return u(function(){e.current=t}),r.useCallback(function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)},[])}var c=function(t,e){var n=e.decimal,r=e.decimals,s=e.duration,a=e.easingFn,o=e.end,u=e.formattingFn,l=e.numerals,c=e.prefix,f=e.separator,p=e.start,h=e.suffix,d=e.useEasing,m=e.useGrouping,g=e.useIndianSeparators,y=e.enableScrollSpy,v=e.scrollSpyDelay,b=e.scrollSpyOnce;return new i.CountUp(t,o,{startVal:p,duration:s,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:u,numerals:l,separator:f,prefix:c,suffix:h,useEasing:d,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:v,scrollSpyOnce:b})},f=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1};e.$i=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(t){return void 0!==(function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,s,a,o=[],u=!0,l=!1;try{if(s=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=s.call(n)).done)&&(o.push(r.value),o.length!==e);u=!0);}catch(t){l=!0,i=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw i}}return o}}(t,2)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return a(a({},p),e)},[t]),i=n.ref,s=n.startOnMount,u=n.enableReinitialize,h=n.delay,d=n.onEnd,m=n.onStart,g=n.onPauseResume,y=n.onReset,v=n.onUpdate,b=function(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(n,f),V=r.useRef(),w=r.useRef(),E=r.useRef(!1),S=l(function(){return c("string"==typeof i?i:i.current,b)}),O=l(function(t){var e=V.current;if(e&&!t)return e;var n=S();return V.current=n,n}),F=l(function(){var t=function(){return O(!0).start(function(){null==d||d({pauseResume:A,reset:j,start:x,update:R})})};h&&h>0?w.current=setTimeout(t,1e3*h):t(),null==m||m({pauseResume:A,reset:j,update:R})}),A=l(function(){O().pauseResume(),null==g||g({reset:j,start:x,update:R})}),j=l(function(){O().el&&(w.current&&clearTimeout(w.current),O().reset(),null==y||y({pauseResume:A,start:x,update:R}))}),R=l(function(t){O().update(t),null==v||v({pauseResume:A,reset:j,start:x})}),x=l(function(){j(),F()}),P=l(function(t){s&&(t&&j(),F())});return r.useEffect(function(){E.current?u&&P(!0):(E.current=!0,P())},[u,E,P,h,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect(function(){return function(){j()}},[j]),{start:x,pauseResume:A,reset:j,update:R,getCountUp:O}}},5815:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r,i=n(7294),s=function(){if(void 0!==r)return r;var t=!1,e={get passive(){t=!0}},n=function(){};return window.addEventListener("t",n,e),window.removeEventListener("t",n,e),r=t,t},a=i.useLayoutEffect,o=function(t){var e=i.useRef(t);return a(function(){e.current=t}),e},u="touchstart",l=["mousedown",u],c=function(t){if(t===u&&s())return{passive:!0}},f=document;function p(t,e,n){var r=(void 0===n?{}:n).document,s=void 0===r?f:r,a=o(e);(0,i.useEffect)(function(){if(e){var n=function(e){!t.current||!a.current||t.current.contains(e.target)||a.current(e)};return l.forEach(function(t){s.addEventListener(t,n,c(t))}),function(){l.forEach(function(t){s.removeEventListener(t,n)})}}},[!e])}},7650:function(t,e,n){"use strict";let r;n.d(e,{YD:function(){return u}});var i=n(7294);let s=new Map,a=new WeakMap,o=0;function u({threshold:t,delay:e,trackVisibility:n,rootMargin:u,root:l,triggerOnce:c,skip:f,initialInView:p,fallbackInView:h,onChange:d}={}){var m;let[g,y]=i.useState(null),v=i.useRef(),[b,V]=i.useState({inView:!!p,entry:void 0});v.current=d,i.useEffect(()=>{let i;if(!f&&g)return i=function(t,e,n={},i=r){if(void 0===window.IntersectionObserver&&void 0!==i){let r=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:u,observer:l,elements:c}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var n;return`${e}_${"root"===e?(n=t.root)?(a.has(n)||(o+=1,a.set(n,o.toString())),a.get(n)):"0":t[e]}`}).toString(),n=s.get(e);if(!n){let r;let i=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{var n;let s=e.isIntersecting&&r.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=s),null==(n=i.get(e.target))||n.forEach(t=>{t(s,e)})})},t);r=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:a,elements:i},s.set(e,n)}return n}(n),f=c.get(t)||[];return c.has(t)||c.set(t,f),f.push(e),l.observe(t),function(){f.splice(f.indexOf(e),1),0===f.length&&(c.delete(t),l.unobserve(t)),0===c.size&&(l.disconnect(),s.delete(u))}}(g,(t,e)=>{V({inView:t,entry:e}),v.current&&v.current(t,e),e.isIntersecting&&c&&i&&(i(),i=void 0)},{root:l,rootMargin:u,threshold:t,trackVisibility:n,delay:e},h),()=>{i&&i()}},[Array.isArray(t)?t.toString():t,g,l,u,c,f,n,h,e]);let w=null==(m=b.entry)?void 0:m.target,E=i.useRef();g||!w||c||f||E.current===w||(E.current=w,V({inView:!!p,entry:void 0}));let S=[y,b.inView,b.entry];return S.ref=S[0],S.inView=S[1],S.entry=S[2],S}}}]);