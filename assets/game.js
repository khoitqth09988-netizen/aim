"use strict";(()=>{var KL=Object.create;var Rx=Object.defineProperty;var JL=Object.getOwnPropertyDescriptor;var QL=Object.getOwnPropertyNames;var jL=Object.getPrototypeOf,$L=Object.prototype.hasOwnProperty;var Rn=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var eC=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of QL(e))!$L.call(t,i)&&i!==a&&Rx(t,i,{get:()=>e[i],enumerable:!(n=JL(e,i))||n.enumerable});return t};var jn=(t,e,a)=>(a=t!=null?KL(jL(t)):{},eC(e||!t||!t.__esModule?Rx(a,"default",{value:t,enumerable:!0}):a,t));var Hx=Rn(Ut=>{"use strict";function gh(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<Gu(i,e))t[n]=e,t[a]=i,a=n;else break e}}function Dn(t){return t.length===0?null:t[0]}function qu(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>Gu(o,a))l<i&&0>Gu(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>Gu(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function Gu(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Ut.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Dx=performance,Ut.unstable_now=function(){return Dx.now()}):(hh=Date,Px=hh.now(),Ut.unstable_now=function(){return hh.now()-Px});var Dx,hh,Px,$n=[],Pi=[],tC=1,sn=null,xa=3,xh=!1,Po=!1,Uo=!1,Sh=!1,Bx=typeof setTimeout=="function"?setTimeout:null,Ox=typeof clearTimeout=="function"?clearTimeout:null,Ux=typeof setImmediate<"u"?setImmediate:null;function Vu(t){for(var e=Dn(Pi);e!==null;){if(e.callback===null)qu(Pi);else if(e.startTime<=t)qu(Pi),e.sortIndex=e.expirationTime,gh($n,e);else break;e=Dn(Pi)}}function vh(t){if(Uo=!1,Vu(t),!Po)if(Dn($n)!==null)Po=!0,ir||(ir=!0,nr());else{var e=Dn(Pi);e!==null&&yh(vh,e.startTime-t)}}var ir=!1,No=-1,Fx=5,zx=-1;function kx(){return Sh?!0:!(Ut.unstable_now()-zx<Fx)}function ph(){if(Sh=!1,ir){var t=Ut.unstable_now();zx=t;var e=!0;try{e:{Po=!1,Uo&&(Uo=!1,Ox(No),No=-1),xh=!0;var a=xa;try{t:{for(Vu(t),sn=Dn($n);sn!==null&&!(sn.expirationTime>t&&kx());){var n=sn.callback;if(typeof n=="function"){sn.callback=null,xa=sn.priorityLevel;var i=n(sn.expirationTime<=t);if(t=Ut.unstable_now(),typeof i=="function"){sn.callback=i,Vu(t),e=!0;break t}sn===Dn($n)&&qu($n),Vu(t)}else qu($n);sn=Dn($n)}if(sn!==null)e=!0;else{var s=Dn(Pi);s!==null&&yh(vh,s.startTime-t),e=!1}}break e}finally{sn=null,xa=a,xh=!1}e=void 0}}finally{e?nr():ir=!1}}}var nr;typeof Ux=="function"?nr=function(){Ux(ph)}:typeof MessageChannel<"u"?(mh=new MessageChannel,Nx=mh.port2,mh.port1.onmessage=ph,nr=function(){Nx.postMessage(null)}):nr=function(){Bx(ph,0)};var mh,Nx;function yh(t,e){No=Bx(function(){t(Ut.unstable_now())},e)}Ut.unstable_IdlePriority=5;Ut.unstable_ImmediatePriority=1;Ut.unstable_LowPriority=4;Ut.unstable_NormalPriority=3;Ut.unstable_Profiling=null;Ut.unstable_UserBlockingPriority=2;Ut.unstable_cancelCallback=function(t){t.callback=null};Ut.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fx=0<t?Math.floor(1e3/t):5};Ut.unstable_getCurrentPriorityLevel=function(){return xa};Ut.unstable_next=function(t){switch(xa){case 1:case 2:case 3:var e=3;break;default:e=xa}var a=xa;xa=e;try{return t()}finally{xa=a}};Ut.unstable_requestPaint=function(){Sh=!0};Ut.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=xa;xa=t;try{return e()}finally{xa=a}};Ut.unstable_scheduleCallback=function(t,e,a){var n=Ut.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:tC++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,gh(Pi,t),Dn($n)===null&&t===Dn(Pi)&&(Uo?(Ox(No),No=-1):Uo=!0,yh(vh,a-n))):(t.sortIndex=i,gh($n,t),Po||xh||(Po=!0,ir||(ir=!0,nr()))),t};Ut.unstable_shouldYield=kx;Ut.unstable_wrapCallback=function(t){var e=xa;return function(){var a=xa;xa=e;try{return t.apply(this,arguments)}finally{xa=a}}}});var Vx=Rn((PR,Gx)=>{"use strict";Gx.exports=Hx()});var e0=Rn(He=>{"use strict";var Lh=Symbol.for("react.transitional.element"),aC=Symbol.for("react.portal"),nC=Symbol.for("react.fragment"),iC=Symbol.for("react.strict_mode"),sC=Symbol.for("react.profiler"),rC=Symbol.for("react.consumer"),oC=Symbol.for("react.context"),lC=Symbol.for("react.forward_ref"),uC=Symbol.for("react.suspense"),cC=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),fC=Symbol.for("react.activity"),qx=Symbol.iterator;function dC(t){return t===null||typeof t!="object"?null:(t=qx&&t[qx]||t["@@iterator"],typeof t=="function"?t:null)}var Kx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jx=Object.assign,Qx={};function rr(t,e,a){this.props=t,this.context=e,this.refs=Qx,this.updater=a||Kx}rr.prototype.isReactComponent={};rr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jx(){}jx.prototype=rr.prototype;function Ch(t,e,a){this.props=t,this.context=e,this.refs=Qx,this.updater=a||Kx}var bh=Ch.prototype=new jx;bh.constructor=Ch;Jx(bh,rr.prototype);bh.isPureReactComponent=!0;var Wx=Array.isArray;function Mh(){}var Tt={H:null,A:null,T:null,S:null},$x=Object.prototype.hasOwnProperty;function Ah(t,e,a){var n=a.ref;return{$$typeof:Lh,type:t,key:e,ref:n!==void 0?n:null,props:a}}function hC(t,e){return Ah(t.type,e,t.props)}function Th(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lh}function pC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var Xx=/\/+/g;function _h(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pC(""+t.key):e.toString(36)}function mC(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Mh,Mh):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function sr(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Lh:case aC:r=!0;break;case Zx:return r=t._init,sr(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+_h(t,0):n,Wx(i)?(a="",r!=null&&(a=r.replace(Xx,"$&/")+"/"),sr(i,e,a,"",function(u){return u})):i!=null&&(Th(i)&&(i=hC(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Xx,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(Wx(t))for(var l=0;l<t.length;l++)n=t[l],s=o+_h(n,l),r+=sr(n,e,a,s,i);else if(l=dC(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+_h(n,l++),r+=sr(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return sr(mC(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function Wu(t,e,a){if(t==null)return t;var n=[],i=0;return sr(t,n,"","",function(s){return e.call(a,s,i++)}),n}function gC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yx=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xC={map:Wu,forEach:function(t,e,a){Wu(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return Wu(t,function(){e++}),e},toArray:function(t){return Wu(t,function(e){return e})||[]},only:function(t){if(!Th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Activity=fC;He.Children=xC;He.Component=rr;He.Fragment=nC;He.Profiler=sC;He.PureComponent=Ch;He.StrictMode=iC;He.Suspense=uC;He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;He.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Tt.H.useMemoCache(t)}};He.cache=function(t){return function(){return t.apply(null,arguments)}};He.cacheSignal=function(){return null};He.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=Jx({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!$x.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return Ah(t.type,i,n)};He.createContext=function(t){return t={$$typeof:oC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:rC,_context:t},t};He.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)$x.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return Ah(t,s,i)};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:lC,render:t}};He.isValidElement=Th;He.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:gC}};He.memo=function(t,e){return{$$typeof:cC,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Tt.T,a={};Tt.T=a;try{var n=t(),i=Tt.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Mh,Yx)}catch(s){Yx(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Tt.T=e}};He.unstable_useCacheRefresh=function(){return Tt.H.useCacheRefresh()};He.use=function(t){return Tt.H.use(t)};He.useActionState=function(t,e,a){return Tt.H.useActionState(t,e,a)};He.useCallback=function(t,e){return Tt.H.useCallback(t,e)};He.useContext=function(t){return Tt.H.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t,e){return Tt.H.useDeferredValue(t,e)};He.useEffect=function(t,e){return Tt.H.useEffect(t,e)};He.useEffectEvent=function(t){return Tt.H.useEffectEvent(t)};He.useId=function(){return Tt.H.useId()};He.useImperativeHandle=function(t,e,a){return Tt.H.useImperativeHandle(t,e,a)};He.useInsertionEffect=function(t,e){return Tt.H.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Tt.H.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Tt.H.useMemo(t,e)};He.useOptimistic=function(t,e){return Tt.H.useOptimistic(t,e)};He.useReducer=function(t,e,a){return Tt.H.useReducer(t,e,a)};He.useRef=function(t){return Tt.H.useRef(t)};He.useState=function(t){return Tt.H.useState(t)};He.useSyncExternalStore=function(t,e,a){return Tt.H.useSyncExternalStore(t,e,a)};He.useTransition=function(){return Tt.H.useTransition()};He.version="19.2.6"});var As=Rn((NR,t0)=>{"use strict";t0.exports=e0()});var n0=Rn(Ia=>{"use strict";var SC=As();function a0(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ui(){}var Ta={d:{f:Ui,r:function(){throw Error(a0(522))},D:Ui,C:Ui,L:Ui,m:Ui,X:Ui,S:Ui,M:Ui},p:0,findDOMNode:null},vC=Symbol.for("react.portal");function yC(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vC,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var Bo=SC.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Xu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ia.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ta;Ia.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(a0(299));return yC(t,e,null,a)};Ia.flushSync=function(t){var e=Bo.T,a=Ta.p;try{if(Bo.T=null,Ta.p=2,t)return t()}finally{Bo.T=e,Ta.p=a,Ta.d.f()}};Ia.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ta.d.C(t,e))};Ia.prefetchDNS=function(t){typeof t=="string"&&Ta.d.D(t)};Ia.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=Xu(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Ta.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&Ta.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ia.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=Xu(e.as,e.crossOrigin);Ta.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ta.d.M(t)};Ia.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=Xu(a,e.crossOrigin);Ta.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ia.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=Xu(e.as,e.crossOrigin);Ta.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ta.d.m(t)};Ia.requestFormReset=function(t){Ta.d.r(t)};Ia.unstable_batchedUpdates=function(t,e){return t(e)};Ia.useFormState=function(t,e,a){return Bo.H.useFormState(t,e,a)};Ia.useFormStatus=function(){return Bo.H.useHostTransitionStatus()};Ia.version="19.2.6"});var r0=Rn((OR,s0)=>{"use strict";function i0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i0)}catch(t){console.error(t)}}i0(),s0.exports=n0()});var S_=Rn(Sf=>{"use strict";var jt=Vx(),DS=As(),_C=r0();function ee(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function PS(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function US(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function NS(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function o0(t){if(Ml(t)!==t)throw Error(ee(188))}function MC(t){var e=t.alternate;if(!e){if(e=Ml(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return o0(i),t;if(s===n)return o0(i),e;s=s.sibling}throw Error(ee(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error(ee(189))}}if(a.alternate!==n)throw Error(ee(190))}if(a.tag!==3)throw Error(ee(188));return a.stateNode.current===a?t:e}function BS(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=BS(t),e!==null)return e;t=t.sibling}return null}var wt=Object.assign,LC=Symbol.for("react.element"),Yu=Symbol.for("react.transitional.element"),qo=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),OS=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),FS=Symbol.for("react.consumer"),oi=Symbol.for("react.context"),am=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),up=Symbol.for("react.suspense_list"),nm=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),cp=Symbol.for("react.activity"),CC=Symbol.for("react.memo_cache_sentinel"),l0=Symbol.iterator;function Oo(t){return t===null||typeof t!="object"?null:(t=l0&&t[l0]||t["@@iterator"],typeof t=="function"?t:null)}var bC=Symbol.for("react.client.reference");function fp(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bC?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case dr:return"Fragment";case op:return"Profiler";case OS:return"StrictMode";case lp:return"Suspense";case up:return"SuspenseList";case cp:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case qo:return"Portal";case oi:return t.displayName||"Context";case FS:return(t._context.displayName||"Context")+".Consumer";case am:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nm:return e=t.displayName||null,e!==null?e:fp(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return fp(t(e))}catch{}}return null}var Wo=Array.isArray,Be=DS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct=_C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ds={pending:!1,data:null,method:null,action:null},dp=[],hr=-1;function On(t){return{current:t}}function ia(t){0>hr||(t.current=dp[hr],dp[hr]=null,hr--)}function Lt(t,e){hr++,dp[hr]=t.current,t.current=e}var Bn=On(null),ll=On(null),Xi=On(null),Ac=On(null);function Tc(t,e){switch(Lt(Xi,e),Lt(ll,t),Lt(Bn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?mS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=mS(e),t=i_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ia(Bn),Lt(Bn,t)}function Rr(){ia(Bn),ia(ll),ia(Xi)}function hp(t){t.memoizedState!==null&&Lt(Ac,t);var e=Bn.current,a=i_(e,t.type);e!==a&&(Lt(ll,t),Lt(Bn,a))}function Ic(t){ll.current===t&&(ia(Bn),ia(ll)),Ac.current===t&&(ia(Ac),vl._currentValue=Ds)}var Ih,u0;function Is(t){if(Ih===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);Ih=e&&e[1]||"",u0=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ih+t+u0}var Eh=!1;function wh(t,e){if(!t||Eh)return"";Eh=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var c=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){c=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){c=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&c&&typeof h.stack=="string")return[h.stack,c.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var d=`
`+l[n].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=n&&0<=i);break}}}finally{Eh=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Is(a):""}function AC(t,e){switch(t.tag){case 26:case 27:case 5:return Is(t.type);case 16:return Is("Lazy");case 13:return t.child!==e&&e!==null?Is("Suspense Fallback"):Is("Suspense");case 19:return Is("SuspenseList");case 0:case 15:return wh(t.type,!1);case 11:return wh(t.type.render,!1);case 1:return wh(t.type,!0);case 31:return Is("Activity");default:return""}}function c0(t){try{var e="",a=null;do e+=AC(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var pp=Object.prototype.hasOwnProperty,im=jt.unstable_scheduleCallback,Rh=jt.unstable_cancelCallback,TC=jt.unstable_shouldYield,IC=jt.unstable_requestPaint,Za=jt.unstable_now,EC=jt.unstable_getCurrentPriorityLevel,zS=jt.unstable_ImmediatePriority,kS=jt.unstable_UserBlockingPriority,Ec=jt.unstable_NormalPriority,wC=jt.unstable_LowPriority,HS=jt.unstable_IdlePriority,RC=jt.log,DC=jt.unstable_setDisableYieldValue,Ll=null,Ka=null;function Hi(t){if(typeof RC=="function"&&DC(t),Ka&&typeof Ka.setStrictMode=="function")try{Ka.setStrictMode(Ll,t)}catch{}}var Ja=Math.clz32?Math.clz32:NC,PC=Math.log,UC=Math.LN2;function NC(t){return t>>>=0,t===0?32:31-(PC(t)/UC|0)|0}var Zu=256,Ku=262144,Ju=4194304;function Es(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function tf(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=Es(n):(r&=o,r!==0?i=Es(r):a||(a=o&~t,a!==0&&(i=Es(a))))):(o=n&~s,o!==0?i=Es(o):r!==0?i=Es(r):a||(a=n&~t,a!==0&&(i=Es(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function Cl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function BC(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GS(){var t=Ju;return Ju<<=1,(Ju&62914560)===0&&(Ju=4194304),t}function Dh(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function bl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function OC(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var d=31-Ja(a),p=1<<d;o[d]=0,l[d]=-1;var c=u[d];if(c!==null)for(u[d]=null,d=0;d<c.length;d++){var h=c[d];h!==null&&(h.lane&=-536870913)}a&=~p}n!==0&&VS(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function VS(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Ja(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function qS(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Ja(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function WS(t,e){var a=e&-e;return a=(a&42)!==0?1:sm(a),(a&(t.suspendedLanes|e))!==0?0:a}function sm(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rm(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function XS(){var t=ct.p;return t!==0?t:(t=window.event,t===void 0?32:m_(t.type))}function f0(t,e){var a=ct.p;try{return ct.p=t,e()}finally{ct.p=a}}var ss=Math.random().toString(36).slice(2),ua="__reactFiber$"+ss,ka="__reactProps$"+ss,Gr="__reactContainer$"+ss,mp="__reactEvents$"+ss,FC="__reactListeners$"+ss,zC="__reactHandles$"+ss,d0="__reactResources$"+ss,Al="__reactMarker$"+ss;function om(t){delete t[ua],delete t[ka],delete t[mp],delete t[FC],delete t[zC]}function pr(t){var e=t[ua];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Gr]||a[ua]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=yS(t);t!==null;){if(a=t[ua])return a;t=yS(t)}return e}t=a,a=t.parentNode}return null}function Vr(t){if(t=t[ua]||t[Gr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Xo(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ee(33))}function Cr(t){var e=t[d0];return e||(e=t[d0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function na(t){t[Al]=!0}var YS=new Set,ZS={};function Gs(t,e){Dr(t,e),Dr(t+"Capture",e)}function Dr(t,e){for(ZS[t]=e,t=0;t<e.length;t++)YS.add(e[t])}var kC=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),h0={},p0={};function HC(t){return pp.call(p0,t)?!0:pp.call(h0,t)?!1:kC.test(t)?p0[t]=!0:(h0[t]=!0,!1)}function fc(t,e,a){if(HC(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Qu(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ei(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function on(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function KS(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GC(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gp(t){if(!t._valueTracker){var e=KS(t)?"checked":"value";t._valueTracker=GC(t,e,""+t[e])}}function JS(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=KS(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var VC=/[\n"\\]/g;function cn(t){return t.replace(VC,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xp(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+on(e)):t.value!==""+on(e)&&(t.value=""+on(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Sp(t,r,on(e)):a!=null?Sp(t,r,on(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+on(o):t.removeAttribute("name")}function QS(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){gp(t);return}a=a!=null?""+on(a):"",e=e!=null?""+on(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),gp(t)}function Sp(t,e,a){e==="number"&&wc(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function br(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+on(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jS(t,e,a){if(e!=null&&(e=""+on(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+on(a):""}function $S(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(ee(92));if(Wo(n)){if(1<n.length)throw Error(ee(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=on(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),gp(t)}function Pr(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var qC=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function m0(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||qC.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function ev(t,e,a){if(e!=null&&typeof e!="object")throw Error(ee(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&m0(t,i,n)}else for(var s in e)e.hasOwnProperty(s)&&m0(t,s,e[s])}function lm(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var WC=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XC=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dc(t){return XC.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function li(){}var vp=null;function um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mr=null,Ar=null;function g0(t){var e=Vr(t);if(e&&(t=e.stateNode)){var a=t[ka]||null;e:switch(t=e.stateNode,e.type){case"input":if(xp(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[ka]||null;if(!i)throw Error(ee(90));xp(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&JS(n)}break e;case"textarea":jS(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&br(t,!!a.multiple,e,!1)}}}var Ph=!1;function tv(t,e,a){if(Ph)return t(e,a);Ph=!0;try{var n=t(e);return n}finally{if(Ph=!1,(mr!==null||Ar!==null)&&(pf(),mr&&(e=mr,t=Ar,Ar=mr=null,g0(e),t)))for(e=0;e<t.length;e++)g0(t[e])}}function ul(t,e){var a=t.stateNode;if(a===null)return null;var n=a[ka]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(ee(231,e,typeof a));return a}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yp=!1;if(hi)try{or={},Object.defineProperty(or,"passive",{get:function(){yp=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{yp=!1}var or,Gi=null,cm=null,hc=null;function av(){if(hc)return hc;var t,e=cm,a=e.length,n,i="value"in Gi?Gi.value:Gi.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return hc=i.slice(t,1<n?1-n:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ju(){return!0}function x0(){return!1}function Ha(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ju:x0,this.isPropagationStopped=x0,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Ha(Vs),Tl=wt({},Vs,{view:0,detail:0}),YC=Ha(Tl),Uh,Nh,Fo,nf=wt({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fo&&(Fo&&t.type==="mousemove"?(Uh=t.screenX-Fo.screenX,Nh=t.screenY-Fo.screenY):Nh=Uh=0,Fo=t),Uh)},movementY:function(t){return"movementY"in t?t.movementY:Nh}}),S0=Ha(nf),ZC=wt({},nf,{dataTransfer:0}),KC=Ha(ZC),JC=wt({},Tl,{relatedTarget:0}),Bh=Ha(JC),QC=wt({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),jC=Ha(QC),$C=wt({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),eb=Ha($C),tb=wt({},Vs,{data:0}),v0=Ha(tb),ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ib={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ib[t])?!!e[t]:!1}function fm(){return sb}var rb=wt({},Tl,{key:function(t){if(t.key){var e=ab[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fm,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ob=Ha(rb),lb=wt({},nf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y0=Ha(lb),ub=wt({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fm}),cb=Ha(ub),fb=wt({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),db=Ha(fb),hb=wt({},nf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pb=Ha(hb),mb=wt({},Vs,{newState:0,oldState:0}),gb=Ha(mb),xb=[9,13,27,32],dm=hi&&"CompositionEvent"in window,Ko=null;hi&&"documentMode"in document&&(Ko=document.documentMode);var Sb=hi&&"TextEvent"in window&&!Ko,nv=hi&&(!dm||Ko&&8<Ko&&11>=Ko),_0=" ",M0=!1;function iv(t,e){switch(t){case"keyup":return xb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gr=!1;function vb(t,e){switch(t){case"compositionend":return sv(e);case"keypress":return e.which!==32?null:(M0=!0,_0);case"textInput":return t=e.data,t===_0&&M0?null:t;default:return null}}function yb(t,e){if(gr)return t==="compositionend"||!dm&&iv(t,e)?(t=av(),hc=cm=Gi=null,gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var _b={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function L0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_b[t.type]:e==="textarea"}function rv(t,e,a,n){mr?Ar?Ar.push(n):Ar=[n]:mr=n,e=Zc(e,"onChange"),0<e.length&&(a=new af("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var Jo=null,cl=null;function Mb(t){t_(t,0)}function sf(t){var e=Xo(t);if(JS(e))return t}function C0(t,e){if(t==="change")return e}var ov=!1;hi&&(hi?(ec="oninput"in document,ec||(Oh=document.createElement("div"),Oh.setAttribute("oninput","return;"),ec=typeof Oh.oninput=="function"),$u=ec):$u=!1,ov=$u&&(!document.documentMode||9<document.documentMode));var $u,ec,Oh;function b0(){Jo&&(Jo.detachEvent("onpropertychange",lv),cl=Jo=null)}function lv(t){if(t.propertyName==="value"&&sf(cl)){var e=[];rv(e,cl,t,um(t)),tv(Mb,e)}}function Lb(t,e,a){t==="focusin"?(b0(),Jo=e,cl=a,Jo.attachEvent("onpropertychange",lv)):t==="focusout"&&b0()}function Cb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sf(cl)}function bb(t,e){if(t==="click")return sf(e)}function Ab(t,e){if(t==="input"||t==="change")return sf(e)}function Tb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ja=typeof Object.is=="function"?Object.is:Tb;function fl(t,e){if(ja(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!pp.call(e,i)||!ja(t[i],e[i]))return!1}return!0}function A0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function T0(t,e){var a=A0(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=A0(a)}}function uv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=wc(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=wc(t.document)}return e}function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ib=hi&&"documentMode"in document&&11>=document.documentMode,xr=null,_p=null,Qo=null,Mp=!1;function I0(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mp||xr==null||xr!==wc(n)||(n=xr,"selectionStart"in n&&hm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qo&&fl(Qo,n)||(Qo=n,n=Zc(_p,"onSelect"),0<n.length&&(e=new af("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=xr)))}function Ts(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Sr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Fh={},fv={};hi&&(fv=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function qs(t){if(Fh[t])return Fh[t];if(!Sr[t])return t;var e=Sr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in fv)return Fh[t]=e[a];return t}var dv=qs("animationend"),hv=qs("animationiteration"),pv=qs("animationstart"),Eb=qs("transitionrun"),wb=qs("transitionstart"),Rb=qs("transitioncancel"),mv=qs("transitionend"),gv=new Map,Lp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lp.push("scrollEnd");function Mn(t,e){gv.set(t,e),Gs(e,[t])}var Rc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},rn=[],vr=0,pm=0;function rf(){for(var t=vr,e=pm=vr=0;e<t;){var a=rn[e];rn[e++]=null;var n=rn[e];rn[e++]=null;var i=rn[e];rn[e++]=null;var s=rn[e];if(rn[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&xv(a,i,s)}}function of(t,e,a,n){rn[vr++]=t,rn[vr++]=e,rn[vr++]=a,rn[vr++]=n,pm|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function mm(t,e,a,n){return of(t,e,a,n),Dc(t)}function Ws(t,e){return of(t,null,null,e),Dc(t)}function xv(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-Ja(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function Dc(t){if(50<rl)throw rl=0,qp=null,Error(ee(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var yr={};function Db(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xa(t,e,a,n){return new Db(t,e,a,n)}function gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ci(t,e){var a=t.alternate;return a===null?(a=Xa(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sv(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function mc(t,e,a,n,i,s){var r=0;if(n=t,typeof t=="function")gm(t)&&(r=1);else if(typeof t=="string")r=NA(t,a,Bn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case cp:return t=Xa(31,a,e,i),t.elementType=cp,t.lanes=s,t;case dr:return Ps(a.children,i,s,e);case OS:r=8,i|=24;break;case op:return t=Xa(12,a,e,i|2),t.elementType=op,t.lanes=s,t;case lp:return t=Xa(13,a,e,i),t.elementType=lp,t.lanes=s,t;case up:return t=Xa(19,a,e,i),t.elementType=up,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oi:r=10;break e;case FS:r=9;break e;case am:r=11;break e;case nm:r=14;break e;case Ni:r=16,n=null;break e}r=29,a=Error(ee(130,t===null?"null":typeof t,"")),n=null}return e=Xa(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function Ps(t,e,a,n){return t=Xa(7,t,n,e),t.lanes=a,t}function zh(t,e,a){return t=Xa(6,t,null,e),t.lanes=a,t}function vv(t){var e=Xa(18,null,null,0);return e.stateNode=t,e}function kh(t,e,a){return e=Xa(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var E0=new WeakMap;function fn(t,e){if(typeof t=="object"&&t!==null){var a=E0.get(t);return a!==void 0?a:(e={value:t,source:e,stack:c0(e)},E0.set(t,e),e)}return{value:t,source:e,stack:c0(e)}}var _r=[],Mr=0,Pc=null,dl=0,ln=[],un=0,ts=null,Pn=1,Un="";function si(t,e){_r[Mr++]=dl,_r[Mr++]=Pc,Pc=t,dl=e}function yv(t,e,a){ln[un++]=Pn,ln[un++]=Un,ln[un++]=ts,ts=t;var n=Pn;t=Un;var i=32-Ja(n)-1;n&=~(1<<i),a+=1;var s=32-Ja(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Pn=1<<32-Ja(e)+i|a<<i|n,Un=s+t}else Pn=1<<s|a<<i|n,Un=t}function xm(t){t.return!==null&&(si(t,1),yv(t,1,0))}function Sm(t){for(;t===Pc;)Pc=_r[--Mr],_r[Mr]=null,dl=_r[--Mr],_r[Mr]=null;for(;t===ts;)ts=ln[--un],ln[un]=null,Un=ln[--un],ln[un]=null,Pn=ln[--un],ln[un]=null}function _v(t,e){ln[un++]=Pn,ln[un++]=Un,ln[un++]=ts,Pn=e.id,Un=e.overflow,ts=t}var ca=null,Et=null,it=!1,Yi=null,dn=!1,Cp=Error(ee(519));function as(t){var e=Error(ee(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hl(fn(e,t)),Cp}function w0(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ua]=t,e[ka]=n,a){case"dialog":Je("cancel",e),Je("close",e);break;case"iframe":case"object":case"embed":Je("load",e);break;case"video":case"audio":for(a=0;a<xl.length;a++)Je(xl[a],e);break;case"source":Je("error",e);break;case"img":case"image":case"link":Je("error",e),Je("load",e);break;case"details":Je("toggle",e);break;case"input":Je("invalid",e),QS(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Je("invalid",e);break;case"textarea":Je("invalid",e),$S(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||n_(e.textContent,a)?(n.popover!=null&&(Je("beforetoggle",e),Je("toggle",e)),n.onScroll!=null&&Je("scroll",e),n.onScrollEnd!=null&&Je("scrollend",e),n.onClick!=null&&(e.onclick=li),e=!0):e=!1,e||as(t,!0)}function R0(t){for(ca=t.return;ca;)switch(ca.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:ca=ca.return}}function lr(t){if(t!==ca)return!1;if(!it)return R0(t),it=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kp(t.type,t.memoizedProps)),a=!a),a&&Et&&as(t),R0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Et=vS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Et=vS(t)}else e===27?(e=Et,rs(t.type)?(t=$p,$p=null,Et=t):Et=e):Et=ca?pn(t.stateNode.nextSibling):null;return!0}function Os(){Et=ca=null,it=!1}function Hh(){var t=Yi;return t!==null&&(Fa===null?Fa=t:Fa.push.apply(Fa,t),Yi=null),t}function hl(t){Yi===null?Yi=[t]:Yi.push(t)}var bp=On(null),Xs=null,ui=null;function Oi(t,e,a){Lt(bp,e._currentValue),e._currentValue=a}function fi(t){t._currentValue=bp.current,ia(bp)}function Ap(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Tp(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),Ap(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(ee(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Ap(r,a,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function qr(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(ee(387));if(r=r.memoizedProps,r!==null){var o=i.type;ja(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===Ac.current){if(r=i.alternate,r===null)throw Error(ee(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(vl):t=[vl])}i=i.return}t!==null&&Tp(e,t,a,n),e.flags|=262144}function Uc(t){for(t=t.firstContext;t!==null;){if(!ja(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fs(t){Xs=t,ui=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function fa(t){return Mv(Xs,t)}function tc(t,e){return Xs===null&&Fs(t),Mv(t,e)}function Mv(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},ui===null){if(t===null)throw Error(ee(308));ui=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ui=ui.next=e;return a}var Pb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Ub=jt.unstable_scheduleCallback,Nb=jt.unstable_NormalPriority,Yt={$$typeof:oi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vm(){return{controller:new Pb,data:new Map,refCount:0}}function Il(t){t.refCount--,t.refCount===0&&Ub(Nb,function(){t.controller.abort()})}var jo=null,Ip=0,Ur=0,Tr=null;function Bb(t,e){if(jo===null){var a=jo=[];Ip=0,Ur=qm(),Tr={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ip++,e.then(D0,D0),e}function D0(){if(--Ip===0&&jo!==null){Tr!==null&&(Tr.status="fulfilled");var t=jo;jo=null,Ur=0,Tr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ob(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var P0=Be.S;Be.S=function(t,e){By=Za(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Bb(t,e),P0!==null&&P0(t,e)};var Us=On(null);function ym(){var t=Us.current;return t!==null?t:_t.pooledCache}function gc(t,e){e===null?Lt(Us,Us.current):Lt(Us,e.pool)}function Lv(){var t=ym();return t===null?null:{parent:Yt._currentValue,pool:t}}var Wr=Error(ee(460)),_m=Error(ee(474)),lf=Error(ee(542)),Nc={then:function(){}};function U0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cv(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(li,li),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,B0(t),t;default:if(typeof e.status=="string")e.then(li,li);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(ee(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,B0(t),t}throw Ns=e,Wr}}function ws(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ns=a,Wr):a}}var Ns=null;function N0(){if(Ns===null)throw Error(ee(459));var t=Ns;return Ns=null,t}function B0(t){if(t===Wr||t===lf)throw Error(ee(483))}var Ir=null,pl=0;function ac(t){var e=pl;return pl+=1,Ir===null&&(Ir=[]),Cv(Ir,t,e)}function zo(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function nc(t,e){throw e.$$typeof===LC?Error(ee(525)):(t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function bv(t){function e(f,m){if(t){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function a(f,m){if(!t)return null;for(;m!==null;)e(f,m),m=m.sibling;return null}function n(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(f,m){return f=ci(f,m),f.index=0,f.sibling=null,f}function s(f,m,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=67108866,m):y):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,y,v){return m===null||m.tag!==6?(m=zh(y,f.mode,v),m.return=f,m):(m=i(m,y),m.return=f,m)}function l(f,m,y,v){var A=y.type;return A===dr?d(f,m,y.props.children,v,y.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ni&&ws(A)===m.type)?(m=i(m,y.props),zo(m,y),m.return=f,m):(m=mc(y.type,y.key,y.props,null,f.mode,v),zo(m,y),m.return=f,m)}function u(f,m,y,v){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=kh(y,f.mode,v),m.return=f,m):(m=i(m,y.children||[]),m.return=f,m)}function d(f,m,y,v,A){return m===null||m.tag!==7?(m=Ps(y,f.mode,v,A),m.return=f,m):(m=i(m,y),m.return=f,m)}function p(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=zh(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yu:return y=mc(m.type,m.key,m.props,null,f.mode,y),zo(y,m),y.return=f,y;case qo:return m=kh(m,f.mode,y),m.return=f,m;case Ni:return m=ws(m),p(f,m,y)}if(Wo(m)||Oo(m))return m=Ps(m,f.mode,y,null),m.return=f,m;if(typeof m.then=="function")return p(f,ac(m),y);if(m.$$typeof===oi)return p(f,tc(f,m),y);nc(f,m)}return null}function c(f,m,y,v){var A=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return A!==null?null:o(f,m,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yu:return y.key===A?l(f,m,y,v):null;case qo:return y.key===A?u(f,m,y,v):null;case Ni:return y=ws(y),c(f,m,y,v)}if(Wo(y)||Oo(y))return A!==null?null:d(f,m,y,v,null);if(typeof y.then=="function")return c(f,m,ac(y),v);if(y.$$typeof===oi)return c(f,m,tc(f,y),v);nc(f,y)}return null}function h(f,m,y,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(y)||null,o(m,f,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yu:return f=f.get(v.key===null?y:v.key)||null,l(m,f,v,A);case qo:return f=f.get(v.key===null?y:v.key)||null,u(m,f,v,A);case Ni:return v=ws(v),h(f,m,y,v,A)}if(Wo(v)||Oo(v))return f=f.get(y)||null,d(m,f,v,A,null);if(typeof v.then=="function")return h(f,m,y,ac(v),A);if(v.$$typeof===oi)return h(f,m,y,tc(m,v),A);nc(m,v)}return null}function S(f,m,y,v){for(var A=null,T=null,g=m,C=m=0,D=null;g!==null&&C<y.length;C++){g.index>C?(D=g,g=null):D=g.sibling;var I=c(f,g,y[C],v);if(I===null){g===null&&(g=D);break}t&&g&&I.alternate===null&&e(f,g),m=s(I,m,C),T===null?A=I:T.sibling=I,T=I,g=D}if(C===y.length)return a(f,g),it&&si(f,C),A;if(g===null){for(;C<y.length;C++)g=p(f,y[C],v),g!==null&&(m=s(g,m,C),T===null?A=g:T.sibling=g,T=g);return it&&si(f,C),A}for(g=n(g);C<y.length;C++)D=h(g,f,C,y[C],v),D!==null&&(t&&D.alternate!==null&&g.delete(D.key===null?C:D.key),m=s(D,m,C),T===null?A=D:T.sibling=D,T=D);return t&&g.forEach(function(U){return e(f,U)}),it&&si(f,C),A}function L(f,m,y,v){if(y==null)throw Error(ee(151));for(var A=null,T=null,g=m,C=m=0,D=null,I=y.next();g!==null&&!I.done;C++,I=y.next()){g.index>C?(D=g,g=null):D=g.sibling;var U=c(f,g,I.value,v);if(U===null){g===null&&(g=D);break}t&&g&&U.alternate===null&&e(f,g),m=s(U,m,C),T===null?A=U:T.sibling=U,T=U,g=D}if(I.done)return a(f,g),it&&si(f,C),A;if(g===null){for(;!I.done;C++,I=y.next())I=p(f,I.value,v),I!==null&&(m=s(I,m,C),T===null?A=I:T.sibling=I,T=I);return it&&si(f,C),A}for(g=n(g);!I.done;C++,I=y.next())I=h(g,f,C,I.value,v),I!==null&&(t&&I.alternate!==null&&g.delete(I.key===null?C:I.key),m=s(I,m,C),T===null?A=I:T.sibling=I,T=I);return t&&g.forEach(function(k){return e(f,k)}),it&&si(f,C),A}function x(f,m,y,v){if(typeof y=="object"&&y!==null&&y.type===dr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Yu:e:{for(var A=y.key;m!==null;){if(m.key===A){if(A=y.type,A===dr){if(m.tag===7){a(f,m.sibling),v=i(m,y.props.children),v.return=f,f=v;break e}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ni&&ws(A)===m.type){a(f,m.sibling),v=i(m,y.props),zo(v,y),v.return=f,f=v;break e}a(f,m);break}else e(f,m);m=m.sibling}y.type===dr?(v=Ps(y.props.children,f.mode,v,y.key),v.return=f,f=v):(v=mc(y.type,y.key,y.props,null,f.mode,v),zo(v,y),v.return=f,f=v)}return r(f);case qo:e:{for(A=y.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){a(f,m.sibling),v=i(m,y.children||[]),v.return=f,f=v;break e}else{a(f,m);break}else e(f,m);m=m.sibling}v=kh(y,f.mode,v),v.return=f,f=v}return r(f);case Ni:return y=ws(y),x(f,m,y,v)}if(Wo(y))return S(f,m,y,v);if(Oo(y)){if(A=Oo(y),typeof A!="function")throw Error(ee(150));return y=A.call(y),L(f,m,y,v)}if(typeof y.then=="function")return x(f,m,ac(y),v);if(y.$$typeof===oi)return x(f,m,tc(f,y),v);nc(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(a(f,m.sibling),v=i(m,y),v.return=f,f=v):(a(f,m),v=zh(y,f.mode,v),v.return=f,f=v),r(f)):a(f,m)}return function(f,m,y,v){try{pl=0;var A=x(f,m,y,v);return Ir=null,A}catch(g){if(g===Wr||g===lf)throw g;var T=Xa(29,g,null,f.mode);return T.lanes=v,T.return=f,T}}}var zs=bv(!0),Av=bv(!1),Bi=!1;function Mm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ep(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Zi(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(ut&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Dc(t),xv(t,null,a),e}return of(t,n,e,a),Dc(t)}function $o(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,qS(t,a)}}function Gh(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var wp=!1;function el(){if(wp){var t=Tr;if(t!==null)throw t}}function tl(t,e,a,n){wp=!1;var i=t.updateQueue;Bi=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,d=u=l=null,o=s;do{var c=o.lane&-536870913,h=c!==o.lane;if(h?(tt&c)===c:(n&c)===c){c!==0&&c===Ur&&(wp=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,L=o;c=e;var x=a;switch(L.tag){case 1:if(S=L.payload,typeof S=="function"){p=S.call(x,p,c);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=L.payload,c=typeof S=="function"?S.call(x,p,c):S,c==null)break e;p=wt({},p,c);break e;case 2:Bi=!0}}c=o.callback,c!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[c]:h.push(c))}else h={lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,r|=c;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,s===null&&(i.shared.lanes=0),is|=r,t.lanes=r,t.memoizedState=p}}function Tv(t,e){if(typeof t!="function")throw Error(ee(191,t));t.call(e)}function Iv(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Tv(a[t],e)}var Nr=On(null),Bc=On(0);function O0(t,e){t=xi,Lt(Bc,t),Lt(Nr,e),xi=t|e.baseLanes}function Rp(){Lt(Bc,xi),Lt(Nr,Nr.current)}function Lm(){xi=Bc.current,ia(Nr),ia(Bc)}var $a=On(null),hn=null;function Fi(t){var e=t.alternate;Lt(Gt,Gt.current&1),Lt($a,t),hn===null&&(e===null||Nr.current!==null||e.memoizedState!==null)&&(hn=t)}function Dp(t){Lt(Gt,Gt.current),Lt($a,t),hn===null&&(hn=t)}function Ev(t){t.tag===22?(Lt(Gt,Gt.current),Lt($a,t),hn===null&&(hn=t)):zi(t)}function zi(){Lt(Gt,Gt.current),Lt($a,$a.current)}function Wa(t){ia($a),hn===t&&(hn=null),ia(Gt)}var Gt=On(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qp(a)||jp(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var pi=0,Ve=null,gt=null,Wt=null,Fc=!1,Er=!1,ks=!1,zc=0,ml=0,wr=null,Fb=0;function zt(){throw Error(ee(321))}function Cm(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!ja(t[a],e[a]))return!1;return!0}function bm(t,e,a,n,i,s){return pi=s,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Be.H=t===null||t.memoizedState===null?ry:Bm,ks=!1,s=a(n,i),ks=!1,Er&&(s=Rv(e,a,n,i)),wv(t),s}function wv(t){Be.H=gl;var e=gt!==null&&gt.next!==null;if(pi=0,Wt=gt=Ve=null,Fc=!1,ml=0,wr=null,e)throw Error(ee(300));t===null||Zt||(t=t.dependencies,t!==null&&Uc(t)&&(Zt=!0))}function Rv(t,e,a,n){Ve=t;var i=0;do{if(Er&&(wr=null),ml=0,Er=!1,25<=i)throw Error(ee(301));if(i+=1,Wt=gt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Be.H=oy,s=e(a,n)}while(Er);return s}function zb(){var t=Be.H,e=t.useState()[0];return e=typeof e.then=="function"?El(e):e,t=t.useState()[0],(gt!==null?gt.memoizedState:null)!==t&&(Ve.flags|=1024),e}function Am(){var t=zc!==0;return zc=0,t}function Tm(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Im(t){if(Fc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Fc=!1}pi=0,Wt=gt=Ve=null,Er=!1,ml=zc=0,wr=null}function Ea(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ve.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Vt(){if(gt===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Wt===null?Ve.memoizedState:Wt.next;if(e!==null)Wt=e,gt=t;else{if(t===null)throw Ve.alternate===null?Error(ee(467)):Error(ee(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Wt===null?Ve.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function uf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(t){var e=ml;return ml+=1,wr===null&&(wr=[]),t=Cv(wr,t,e),e=Ve,(Wt===null?e.memoizedState:Wt.next)===null&&(e=e.alternate,Be.H=e===null||e.memoizedState===null?ry:Bm),t}function cf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return El(t);if(t.$$typeof===oi)return fa(t)}throw Error(ee(438,String(t)))}function Em(t){var e=null,a=Ve.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Ve.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=uf(),Ve.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=CC;return e.index++,a}function mi(t,e){return typeof e=="function"?e(t):e}function xc(t){var e=Vt();return wm(e,gt,t)}function wm(t,e,a){var n=t.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,d=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(tt&p)===p:(pi&p)===p){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Ur&&(d=!0);else if((pi&c)===c){u=u.next,c===Ur&&(d=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Ve.lanes|=c,is|=c;p=u.action,ks&&a(s,p),s=u.hasEagerState?u.eagerState:a(s,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=c,r=s):l=l.next=c,Ve.lanes|=p,is|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!ja(s,t.memoizedState)&&(Zt=!0,d&&(a=Tr,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function Vh(t){var e=Vt(),a=e.queue;if(a===null)throw Error(ee(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);ja(s,e.memoizedState)||(Zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function Dv(t,e,a){var n=Ve,i=Vt(),s=it;if(s){if(a===void 0)throw Error(ee(407));a=a()}else a=e();var r=!ja((gt||i).memoizedState,a);if(r&&(i.memoizedState=a,Zt=!0),i=i.queue,Rm(Nv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Br(9,{destroy:void 0},Uv.bind(null,n,i,a,e),null),_t===null)throw Error(ee(349));s||(pi&127)!==0||Pv(n,e,a)}return a}function Pv(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Ve.updateQueue,e===null?(e=uf(),Ve.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Uv(t,e,a,n){e.value=a,e.getSnapshot=n,Bv(e)&&Ov(t)}function Nv(t,e,a){return a(function(){Bv(e)&&Ov(t)})}function Bv(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!ja(t,a)}catch{return!0}}function Ov(t){var e=Ws(t,2);e!==null&&za(e,t,2)}function Pp(t){var e=Ea();if(typeof t=="function"){var a=t;if(t=a(),ks){Hi(!0);try{a()}finally{Hi(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:t},e}function Fv(t,e,a,n){return t.baseState=a,wm(t,gt,typeof n=="function"?n:mi)}function kb(t,e,a,n,i){if(df(t))throw Error(ee(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Be.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,zv(e,s)):(s.next=a.next,e.pending=a.next=s)}}function zv(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=Be.T,r={};Be.T=r;try{var o=a(i,n),l=Be.S;l!==null&&l(r,o),F0(t,e,o)}catch(u){Up(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),Be.T=s}}else try{s=a(i,n),F0(t,e,s)}catch(u){Up(t,e,u)}}function F0(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){z0(t,e,n)},function(n){return Up(t,e,n)}):z0(t,e,a)}function z0(t,e,a){e.status="fulfilled",e.value=a,kv(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,zv(t,a)))}function Up(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,kv(e),e=e.next;while(e!==n)}t.action=null}function kv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Hv(t,e){return e}function k0(t,e){if(it){var a=_t.formState;if(a!==null){e:{var n=Ve;if(it){if(Et){t:{for(var i=Et,s=dn;i.nodeType!==8;){if(!s){i=null;break t}if(i=pn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Et=pn(i.nextSibling),n=i.data==="F!";break e}}as(n)}n=!1}n&&(e=a[0])}}return a=Ea(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hv,lastRenderedState:e},a.queue=n,a=ny.bind(null,Ve,n),n.dispatch=a,n=Pp(!1),s=Nm.bind(null,Ve,!1,n.queue),n=Ea(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=kb.bind(null,Ve,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function H0(t){var e=Vt();return Gv(e,gt,t)}function Gv(t,e,a){if(e=wm(t,e,Hv)[0],t=xc(mi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=El(e)}catch(r){throw r===Wr?lf:r}else n=e;e=Vt();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(Ve.flags|=2048,Br(9,{destroy:void 0},Hb.bind(null,i,a),null)),[n,s,t]}function Hb(t,e){t.action=e}function G0(t){var e=Vt(),a=gt;if(a!==null)return Gv(e,a,t);Vt(),e=e.memoizedState,a=Vt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Br(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Ve.updateQueue,e===null&&(e=uf(),Ve.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Vv(){return Vt().memoizedState}function Sc(t,e,a,n){var i=Ea();Ve.flags|=t,i.memoizedState=Br(1|e,{destroy:void 0},a,n===void 0?null:n)}function ff(t,e,a,n){var i=Vt();n=n===void 0?null:n;var s=i.memoizedState.inst;gt!==null&&n!==null&&Cm(n,gt.memoizedState.deps)?i.memoizedState=Br(e,s,a,n):(Ve.flags|=t,i.memoizedState=Br(1|e,s,a,n))}function V0(t,e){Sc(8390656,8,t,e)}function Rm(t,e){ff(2048,8,t,e)}function Gb(t){Ve.flags|=4;var e=Ve.updateQueue;if(e===null)e=uf(),Ve.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function qv(t){var e=Vt().memoizedState;return Gb({ref:e,nextImpl:t}),function(){if((ut&2)!==0)throw Error(ee(440));return e.impl.apply(void 0,arguments)}}function Wv(t,e){return ff(4,2,t,e)}function Xv(t,e){return ff(4,4,t,e)}function Yv(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zv(t,e,a){a=a!=null?a.concat([t]):null,ff(4,4,Yv.bind(null,e,t),a)}function Dm(){}function Kv(t,e){var a=Vt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Cm(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Jv(t,e){var a=Vt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Cm(e,n[1]))return n[0];if(n=t(),ks){Hi(!0);try{t()}finally{Hi(!1)}}return a.memoizedState=[n,e],n}function Pm(t,e,a){return a===void 0||(pi&1073741824)!==0&&(tt&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=Fy(),Ve.lanes|=t,is|=t,a)}function Qv(t,e,a,n){return ja(a,e)?a:Nr.current!==null?(t=Pm(t,a,n),ja(t,e)||(Zt=!0),t):(pi&42)===0||(pi&1073741824)!==0&&(tt&261930)===0?(Zt=!0,t.memoizedState=a):(t=Fy(),Ve.lanes|=t,is|=t,e)}function jv(t,e,a,n,i){var s=ct.p;ct.p=s!==0&&8>s?s:8;var r=Be.T,o={};Be.T=o,Nm(t,!1,e,a);try{var l=i(),u=Be.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=Ob(l,n);al(t,e,d,Qa(t))}else al(t,e,n,Qa(t))}catch(p){al(t,e,{then:function(){},status:"rejected",reason:p},Qa())}finally{ct.p=s,r!==null&&o.types!==null&&(r.types=o.types),Be.T=r}}function Vb(){}function Np(t,e,a,n){if(t.tag!==5)throw Error(ee(476));var i=$v(t).queue;jv(t,i,e,Ds,a===null?Vb:function(){return ey(t),a(n)})}function $v(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Ds,baseState:Ds,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:Ds},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mi,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function ey(t){var e=$v(t);e.next===null&&(e=t.alternate.memoizedState),al(t,e.next.queue,{},Qa())}function Um(){return fa(vl)}function ty(){return Vt().memoizedState}function ay(){return Vt().memoizedState}function qb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Qa();t=Zi(a);var n=Ki(e,t,a);n!==null&&(za(n,e,a),$o(n,e,a)),e={cache:vm()},t.payload=e;return}e=e.return}}function Wb(t,e,a){var n=Qa();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},df(t)?iy(e,a):(a=mm(t,e,a,n),a!==null&&(za(a,t,n),sy(a,e,n)))}function ny(t,e,a){var n=Qa();al(t,e,a,n)}function al(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(df(t))iy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,ja(o,r))return of(t,e,i,0),_t===null&&rf(),!1}catch{}if(a=mm(t,e,i,n),a!==null)return za(a,t,n),sy(a,e,n),!0}return!1}function Nm(t,e,a,n){if(n={lane:2,revertLane:qm(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},df(t)){if(e)throw Error(ee(479))}else e=mm(t,a,n,2),e!==null&&za(e,t,2)}function df(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function iy(t,e){Er=Fc=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function sy(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,qS(t,a)}}var gl={readContext:fa,use:cf,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt};gl.useEffectEvent=zt;var ry={readContext:fa,use:cf,useCallback:function(t,e){return Ea().memoizedState=[t,e===void 0?null:e],t},useContext:fa,useEffect:V0,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Sc(4194308,4,Yv.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Sc(4194308,4,t,e)},useInsertionEffect:function(t,e){Sc(4,2,t,e)},useMemo:function(t,e){var a=Ea();e=e===void 0?null:e;var n=t();if(ks){Hi(!0);try{t()}finally{Hi(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Ea();if(a!==void 0){var i=a(e);if(ks){Hi(!0);try{a(e)}finally{Hi(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=Wb.bind(null,Ve,t),[n.memoizedState,t]},useRef:function(t){var e=Ea();return t={current:t},e.memoizedState=t},useState:function(t){t=Pp(t);var e=t.queue,a=ny.bind(null,Ve,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Dm,useDeferredValue:function(t,e){var a=Ea();return Pm(a,t,e)},useTransition:function(){var t=Pp(!1);return t=jv.bind(null,Ve,t.queue,!0,!1),Ea().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Ve,i=Ea();if(it){if(a===void 0)throw Error(ee(407));a=a()}else{if(a=e(),_t===null)throw Error(ee(349));(tt&127)!==0||Pv(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,V0(Nv.bind(null,n,s,t),[t]),n.flags|=2048,Br(9,{destroy:void 0},Uv.bind(null,n,s,a,e),null),a},useId:function(){var t=Ea(),e=_t.identifierPrefix;if(it){var a=Un,n=Pn;a=(n&~(1<<32-Ja(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=zc++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Fb++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Um,useFormState:k0,useActionState:k0,useOptimistic:function(t){var e=Ea();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Nm.bind(null,Ve,!0,a),a.dispatch=e,[t,e]},useMemoCache:Em,useCacheRefresh:function(){return Ea().memoizedState=qb.bind(null,Ve)},useEffectEvent:function(t){var e=Ea(),a={impl:t};return e.memoizedState=a,function(){if((ut&2)!==0)throw Error(ee(440));return a.impl.apply(void 0,arguments)}}},Bm={readContext:fa,use:cf,useCallback:Kv,useContext:fa,useEffect:Rm,useImperativeHandle:Zv,useInsertionEffect:Wv,useLayoutEffect:Xv,useMemo:Jv,useReducer:xc,useRef:Vv,useState:function(){return xc(mi)},useDebugValue:Dm,useDeferredValue:function(t,e){var a=Vt();return Qv(a,gt.memoizedState,t,e)},useTransition:function(){var t=xc(mi)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:El(t),e]},useSyncExternalStore:Dv,useId:ty,useHostTransitionStatus:Um,useFormState:H0,useActionState:H0,useOptimistic:function(t,e){var a=Vt();return Fv(a,gt,t,e)},useMemoCache:Em,useCacheRefresh:ay};Bm.useEffectEvent=qv;var oy={readContext:fa,use:cf,useCallback:Kv,useContext:fa,useEffect:Rm,useImperativeHandle:Zv,useInsertionEffect:Wv,useLayoutEffect:Xv,useMemo:Jv,useReducer:Vh,useRef:Vv,useState:function(){return Vh(mi)},useDebugValue:Dm,useDeferredValue:function(t,e){var a=Vt();return gt===null?Pm(a,t,e):Qv(a,gt.memoizedState,t,e)},useTransition:function(){var t=Vh(mi)[0],e=Vt().memoizedState;return[typeof t=="boolean"?t:El(t),e]},useSyncExternalStore:Dv,useId:ty,useHostTransitionStatus:Um,useFormState:G0,useActionState:G0,useOptimistic:function(t,e){var a=Vt();return gt!==null?Fv(a,gt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Em,useCacheRefresh:ay};oy.useEffectEvent=qv;function qh(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:wt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bp={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Qa(),i=Zi(n);i.payload=e,a!=null&&(i.callback=a),e=Ki(t,i,n),e!==null&&(za(e,t,n),$o(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Qa(),i=Zi(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=Ki(t,i,n),e!==null&&(za(e,t,n),$o(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Qa(),n=Zi(a);n.tag=2,e!=null&&(n.callback=e),e=Ki(t,n,a),e!==null&&(za(e,t,a),$o(e,t,a))}};function q0(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!fl(a,n)||!fl(i,s):!0}function W0(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Bp.enqueueReplaceState(e,e.state,null)}function Hs(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=wt({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function ly(t){Rc(t)}function uy(t){console.error(t)}function cy(t){Rc(t)}function kc(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function X0(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Op(t,e,a){return a=Zi(a),a.tag=3,a.payload={element:null},a.callback=function(){kc(t,e)},a}function fy(t){return t=Zi(t),t.tag=3,t}function dy(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){X0(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){X0(e,a,n),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function Xb(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&qr(e,a,i,!0),a=$a.current,a!==null){switch(a.tag){case 31:case 13:return hn===null?Wc():a.alternate===null&&kt===0&&(kt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Nc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),tp(t,n,i)),!1;case 22:return a.flags|=65536,n===Nc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),tp(t,n,i)),!1}throw Error(ee(435,a.tag))}return tp(t,n,i),Wc(),!1}if(it)return e=$a.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Cp&&(t=Error(ee(422),{cause:n}),hl(fn(t,a)))):(n!==Cp&&(e=Error(ee(423),{cause:n}),hl(fn(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=fn(n,a),i=Op(t.stateNode,n,i),Gh(t,i),kt!==4&&(kt=2)),!1;var s=Error(ee(520),{cause:n});if(s=fn(s,a),sl===null?sl=[s]:sl.push(s),kt!==4&&(kt=2),e===null)return!0;n=fn(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Op(a.stateNode,n,t),Gh(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ji===null||!Ji.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=fy(i),dy(i,t,a,n),Gh(a,i),!1}a=a.return}while(a!==null);return!1}var Om=Error(ee(461)),Zt=!1;function la(t,e,a,n){e.child=t===null?Av(e,null,a,n):zs(e,t.child,a,n)}function Y0(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return Fs(e),n=bm(t,e,a,r,s,i),o=Am(),t!==null&&!Zt?(Tm(t,e,i),gi(t,e,i)):(it&&o&&xm(e),e.flags|=1,la(t,e,n,i),e.child)}function Z0(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!gm(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,hy(t,e,s,n,i)):(t=mc(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Fm(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:fl,a(r,n)&&t.ref===e.ref)return gi(t,e,i)}return e.flags|=1,t=ci(s,n),t.ref=e.ref,t.return=e,e.child=t}function hy(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if(fl(s,n)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=n=s,Fm(t,i))(t.flags&131072)!==0&&(Zt=!0);else return e.lanes=t.lanes,gi(t,e,i)}return Fp(t,e,a,n,i)}function py(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return K0(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&gc(e,s!==null?s.cachePool:null),s!==null?O0(e,s):Rp(),Ev(e);else return n=e.lanes=536870912,K0(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(gc(e,s.cachePool),O0(e,s),zi(e),e.memoizedState=null):(t!==null&&gc(e,null),Rp(),zi(e));return la(t,e,i,a),e.child}function Yo(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function K0(t,e,a,n,i){var s=ym();return s=s===null?null:{parent:Yt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&gc(e,null),Rp(),Ev(e),t!==null&&qr(t,e,n,!0),e.childLanes=i,null}function vc(t,e){return e=Hc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function J0(t,e,a){return zs(e,t.child,null,a),t=vc(e,e.pendingProps),t.flags|=2,Wa(e),e.memoizedState=null,t}function Yb(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(it){if(n.mode==="hidden")return t=vc(e,n),e.lanes=536870912,Yo(null,t);if(Dp(e),(t=Et)?(t=r_(t,dn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ts!==null?{id:Pn,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},a=vv(t),a.return=e,e.child=a,ca=e,Et=null)):t=null,t===null)throw as(e);return e.lanes=536870912,null}return vc(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(Dp(e),i)if(e.flags&256)e.flags&=-257,e=J0(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ee(558));else if(Zt||qr(t,e,a,!1),i=(a&t.childLanes)!==0,Zt||i){if(n=_t,n!==null&&(r=WS(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,Ws(t,r),za(n,t,r),Om;Wc(),e=J0(t,e,a)}else t=s.treeContext,Et=pn(r.nextSibling),ca=e,it=!0,Yi=null,dn=!1,t!==null&&_v(e,t),e=vc(e,n),e.flags|=4096;return e}return t=ci(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function yc(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(ee(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Fp(t,e,a,n,i){return Fs(e),a=bm(t,e,a,n,void 0,i),n=Am(),t!==null&&!Zt?(Tm(t,e,i),gi(t,e,i)):(it&&n&&xm(e),e.flags|=1,la(t,e,a,i),e.child)}function Q0(t,e,a,n,i,s){return Fs(e),e.updateQueue=null,a=Rv(e,n,a,i),wv(t),n=Am(),t!==null&&!Zt?(Tm(t,e,s),gi(t,e,s)):(it&&n&&xm(e),e.flags|=1,la(t,e,a,s),e.child)}function j0(t,e,a,n,i){if(Fs(e),e.stateNode===null){var s=yr,r=a.contextType;typeof r=="object"&&r!==null&&(s=fa(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Bp,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},Mm(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?fa(r):yr,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(qh(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Bp.enqueueReplaceState(s,s.state,null),tl(e,n,s,i),el(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=Hs(a,o);s.props=l;var u=s.context,d=a.contextType;r=yr,typeof d=="object"&&d!==null&&(r=fa(d));var p=a.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&W0(e,s,n,r),Bi=!1;var c=e.memoizedState;s.state=c,tl(e,n,s,i),el(),u=e.memoizedState,o||c!==u||Bi?(typeof p=="function"&&(qh(e,a,p,n),u=e.memoizedState),(l=Bi||q0(e,a,l,n,c,u,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,Ep(t,e),r=e.memoizedProps,d=Hs(a,r),s.props=d,p=e.pendingProps,c=s.context,u=a.contextType,l=yr,typeof u=="object"&&u!==null&&(l=fa(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||c!==l)&&W0(e,s,n,l),Bi=!1,c=e.memoizedState,s.state=c,tl(e,n,s,i),el();var h=e.memoizedState;r!==p||c!==h||Bi||t!==null&&t.dependencies!==null&&Uc(t.dependencies)?(typeof o=="function"&&(qh(e,a,o,n),h=e.memoizedState),(d=Bi||q0(e,a,d,n,c,h,l)||t!==null&&t.dependencies!==null&&Uc(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,yc(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=zs(e,t.child,null,i),e.child=zs(e,null,a,i)):la(t,e,a,i),e.memoizedState=s.state,t=e.child):t=gi(t,e,i),t}function $0(t,e,a,n){return Os(),e.flags|=256,la(t,e,a,n),e.child}var Wh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xh(t){return{baseLanes:t,cachePool:Lv()}}function Yh(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ya),t}function my(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Gt.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(it){if(i?Fi(e):zi(e),(t=Et)?(t=r_(t,dn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ts!==null?{id:Pn,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},a=vv(t),a.return=e,e.child=a,ca=e,Et=null)):t=null,t===null)throw as(e);return jp(t)?e.lanes=32:e.lanes=536870912,null}var o=n.children;return n=n.fallback,i?(zi(e),i=e.mode,o=Hc({mode:"hidden",children:o},i),n=Ps(n,i,a,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n=e.child,n.memoizedState=Xh(a),n.childLanes=Yh(t,r,a),e.memoizedState=Wh,Yo(null,n)):(Fi(e),zp(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Fi(e),e.flags&=-257,e=Zh(t,e,a)):e.memoizedState!==null?(zi(e),e.child=t.child,e.flags|=128,e=null):(zi(e),o=n.fallback,i=e.mode,n=Hc({mode:"visible",children:n.children},i),o=Ps(o,i,a,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,zs(e,t.child,null,a),n=e.child,n.memoizedState=Xh(a),n.childLanes=Yh(t,r,a),e.memoizedState=Wh,e=Yo(null,n));else if(Fi(e),jp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,n=Error(ee(419)),n.stack="",n.digest=r,hl({value:n,source:null,stack:null}),e=Zh(t,e,a)}else if(Zt||qr(t,e,a,!1),r=(a&t.childLanes)!==0,Zt||r){if(r=_t,r!==null&&(n=WS(r,a),n!==0&&n!==l.retryLane))throw l.retryLane=n,Ws(t,n),za(r,t,n),Om;Qp(o)||Wc(),e=Zh(t,e,a)}else Qp(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Et=pn(o.nextSibling),ca=e,it=!0,Yi=null,dn=!1,t!==null&&_v(e,t),e=zp(e,n.children),e.flags|=4096);return e}return i?(zi(e),o=n.fallback,i=e.mode,l=t.child,u=l.sibling,n=ci(l,{mode:"hidden",children:n.children}),n.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=ci(u,o):(o=Ps(o,i,a,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,Yo(null,n),n=e.child,o=t.child.memoizedState,o===null?o=Xh(a):(i=o.cachePool,i!==null?(l=Yt._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=Lv(),o={baseLanes:o.baseLanes|a,cachePool:i}),n.memoizedState=o,n.childLanes=Yh(t,r,a),e.memoizedState=Wh,Yo(t.child,n)):(Fi(e),a=t.child,t=a.sibling,a=ci(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function zp(t,e){return e=Hc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Hc(t,e){return t=Xa(22,t,null,e),t.lanes=0,t}function Zh(t,e,a){return zs(e,t.child,null,a),t=zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eS(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Ap(t.return,e,a)}function Kh(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function gy(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=Gt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Lt(Gt,r),la(t,e,n,a),n=it?dl:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eS(t,a,e);else if(t.tag===19)eS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Oc(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Kh(e,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Kh(e,!0,a,null,s,n);break;case"together":Kh(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function gi(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(qr(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,a=ci(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ci(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Fm(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Uc(t)))}function Zb(t,e,a){switch(e.tag){case 3:Tc(e,e.stateNode.containerInfo),Oi(e,Yt,t.memoizedState.cache),Os();break;case 27:case 5:hp(e);break;case 4:Tc(e,e.stateNode.containerInfo);break;case 10:Oi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Dp(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Fi(e),e.flags|=128,null):(a&e.child.childLanes)!==0?my(t,e,a):(Fi(e),t=gi(t,e,a),t!==null?t.sibling:null);Fi(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(qr(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return gy(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Lt(Gt,Gt.current),n)break;return null;case 22:return e.lanes=0,py(t,e,a,e.pendingProps);case 24:Oi(e,Yt,t.memoizedState.cache)}return gi(t,e,a)}function xy(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Zt=!0;else{if(!Fm(t,a)&&(e.flags&128)===0)return Zt=!1,Zb(t,e,a);Zt=(t.flags&131072)!==0}else Zt=!1,it&&(e.flags&1048576)!==0&&yv(e,dl,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=ws(e.elementType),e.type=t,typeof t=="function")gm(t)?(n=Hs(t,n),e.tag=1,e=j0(null,e,t,n,a)):(e.tag=0,e=Fp(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===am){e.tag=11,e=Y0(null,e,t,n,a);break e}else if(i===nm){e.tag=14,e=Z0(null,e,t,n,a);break e}}throw e=fp(t)||t,Error(ee(306,e,""))}}return e;case 0:return Fp(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Hs(n,e.pendingProps),j0(t,e,n,i,a);case 3:e:{if(Tc(e,e.stateNode.containerInfo),t===null)throw Error(ee(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,Ep(t,e),tl(e,n,null,a);var r=e.memoizedState;if(n=r.cache,Oi(e,Yt,n),n!==s.cache&&Tp(e,[Yt],a,!0),el(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=$0(t,e,n,a);break e}else if(n!==i){i=fn(Error(ee(424)),e),hl(i),e=$0(t,e,n,a);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Et=pn(t.firstChild),ca=e,it=!0,Yi=null,dn=!0,a=Av(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Os(),n===i){e=gi(t,e,a);break e}la(t,e,n,a)}e=e.child}return e;case 26:return yc(t,e),t===null?(a=MS(e.type,null,e.pendingProps,null))?e.memoizedState=a:it||(a=e.type,t=e.pendingProps,n=Kc(Xi.current).createElement(a),n[ua]=e,n[ka]=t,da(n,a,t),na(n),e.stateNode=n):e.memoizedState=MS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return hp(e),t===null&&it&&(n=e.stateNode=o_(e.type,e.pendingProps,Xi.current),ca=e,dn=!0,i=Et,rs(e.type)?($p=i,Et=pn(n.firstChild)):Et=i),la(t,e,e.pendingProps.children,a),yc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&it&&((i=n=Et)&&(n=MA(n,e.type,e.pendingProps,dn),n!==null?(e.stateNode=n,ca=e,Et=pn(n.firstChild),dn=!1,i=!0):i=!1),i||as(e)),hp(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,Kp(i,s)?n=null:r!==null&&Kp(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=bm(t,e,zb,null,null,a),vl._currentValue=i),yc(t,e),la(t,e,n,a),e.child;case 6:return t===null&&it&&((t=a=Et)&&(a=LA(a,e.pendingProps,dn),a!==null?(e.stateNode=a,ca=e,Et=null,t=!0):t=!1),t||as(e)),null;case 13:return my(t,e,a);case 4:return Tc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=zs(e,null,n,a):la(t,e,n,a),e.child;case 11:return Y0(t,e,e.type,e.pendingProps,a);case 7:return la(t,e,e.pendingProps,a),e.child;case 8:return la(t,e,e.pendingProps.children,a),e.child;case 12:return la(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Oi(e,e.type,n.value),la(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Fs(e),i=fa(i),n=n(i),e.flags|=1,la(t,e,n,a),e.child;case 14:return Z0(t,e,e.type,e.pendingProps,a);case 15:return hy(t,e,e.type,e.pendingProps,a);case 19:return gy(t,e,a);case 31:return Yb(t,e,a);case 22:return py(t,e,a,e.pendingProps);case 24:return Fs(e),n=fa(Yt),t===null?(i=ym(),i===null&&(i=_t,s=vm(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},Mm(e),Oi(e,Yt,i)):((t.lanes&a)!==0&&(Ep(t,e),tl(e,null,null,a),el()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Oi(e,Yt,n)):(n=s.cache,Oi(e,Yt,n),n!==i.cache&&Tp(e,[Yt],a,!0))),la(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(ee(156,e.tag))}function ti(t){t.flags|=4}function Jh(t,e,a,n,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Hy())t.flags|=8192;else throw Ns=Nc,_m}else t.flags&=-16777217}function tS(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c_(e))if(Hy())t.flags|=8192;else throw Ns=Nc,_m}function ic(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?GS():536870912,t.lanes|=e,Or|=e)}function ko(t,e){if(!it)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function Kb(t,e,a){var n=e.pendingProps;switch(Sm(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return It(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),fi(Yt),Rr(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(lr(e)?ti(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hh())),It(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(ti(e),s!==null?(It(e),tS(e,s)):(It(e),Jh(e,i,null,n,a))):s?s!==t.memoizedState?(ti(e),It(e),tS(e,s)):(It(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&ti(e),It(e),Jh(e,i,t,n,a)),null;case 27:if(Ic(e),a=Xi.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ti(e);else{if(!n){if(e.stateNode===null)throw Error(ee(166));return It(e),null}t=Bn.current,lr(e)?w0(e,t):(t=o_(i,n,a),e.stateNode=t,ti(e))}return It(e),null;case 5:if(Ic(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&ti(e);else{if(!n){if(e.stateNode===null)throw Error(ee(166));return It(e),null}if(s=Bn.current,lr(e))w0(e,s);else{var r=Kc(Xi.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[ua]=e,s[ka]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(da(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ti(e)}}return It(e),Jh(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&ti(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Xi.current,lr(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=ca,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ua]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||n_(t.nodeValue,a)),t||as(e,!0)}else t=Kc(t).createTextNode(n),t[ua]=e,e.stateNode=t}return It(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=lr(e),a!==null){if(t===null){if(!n)throw Error(ee(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(557));t[ua]=e}else Os(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;It(e),t=!1}else a=Hh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Wa(e),e):(Wa(e),null);if((e.flags&128)!==0)throw Error(ee(558))}return It(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=lr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(ee(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ee(317));i[ua]=e}else Os(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;It(e),i=!1}else i=Hh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Wa(e),e):(Wa(e),null)}return Wa(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),ic(e,e.updateQueue),It(e),null);case 4:return Rr(),t===null&&Wm(e.stateNode.containerInfo),It(e),null;case 10:return fi(e.type),It(e),null;case 19:if(ia(Gt),n=e.memoizedState,n===null)return It(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)ko(n,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Oc(t),s!==null){for(e.flags|=128,ko(n,!1),t=s.updateQueue,e.updateQueue=t,ic(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Sv(a,t),a=a.sibling;return Lt(Gt,Gt.current&1|2),it&&si(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&Za()>Vc&&(e.flags|=128,i=!0,ko(n,!1),e.lanes=4194304)}else{if(!i)if(t=Oc(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,ic(e,t),ko(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!it)return It(e),null}else 2*Za()-n.renderingStartTime>Vc&&a!==536870912&&(e.flags|=128,i=!0,ko(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Za(),t.sibling=null,a=Gt.current,Lt(Gt,i?a&1|2:a&1),it&&si(e,n.treeForkCount),t):(It(e),null);case 22:case 23:return Wa(e),Lm(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),a=e.updateQueue,a!==null&&ic(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&ia(Us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fi(Yt),It(e),null;case 25:return null;case 30:return null}throw Error(ee(156,e.tag))}function Jb(t,e){switch(Sm(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fi(Yt),Rr(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ic(e),null;case 31:if(e.memoizedState!==null){if(Wa(e),e.alternate===null)throw Error(ee(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Wa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ia(Gt),null;case 4:return Rr(),null;case 10:return fi(e.type),null;case 22:case 23:return Wa(e),Lm(),t!==null&&ia(Us),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return fi(Yt),null;case 25:return null;default:return null}}function Sy(t,e){switch(Sm(e),e.tag){case 3:fi(Yt),Rr();break;case 26:case 27:case 5:Ic(e);break;case 4:Rr();break;case 31:e.memoizedState!==null&&Wa(e);break;case 13:Wa(e);break;case 19:ia(Gt);break;case 10:fi(e.type);break;case 22:case 23:Wa(e),Lm(),t!==null&&ia(Us);break;case 24:fi(Yt)}}function wl(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){pt(e,e.return,o)}}function ns(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(d){pt(i,l,d)}}}n=n.next}while(n!==s)}}catch(d){pt(e,e.return,d)}}function vy(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Iv(e,a)}catch(n){pt(t,t.return,n)}}}function yy(t,e,a){a.props=Hs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){pt(t,e,n)}}function nl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){pt(t,e,i)}}function Nn(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){pt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){pt(t,e,i)}else a.current=null}function _y(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){pt(t,t.return,i)}}function Qh(t,e,a){try{var n=t.stateNode;gA(n,t.type,a,e),n[ka]=e}catch(i){pt(t,t.return,i)}}function My(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rs(t.type)||t.tag===4}function jh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||My(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kp(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=li));else if(n!==4&&(n===27&&rs(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(kp(t,e,a),t=t.sibling;t!==null;)kp(t,e,a),t=t.sibling}function Gc(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&rs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Gc(t,e,a),t=t.sibling;t!==null;)Gc(t,e,a),t=t.sibling}function Ly(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);da(e,n,a),e[ua]=t,e[ka]=a}catch(s){pt(t,t.return,s)}}var ri=!1,Xt=!1,$h=!1,aS=typeof WeakSet=="function"?WeakSet:Set,aa=null;function Qb(t,e){if(t=t.containerInfo,Yp=$c,t=cv(t),hm(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var r=0,o=-1,l=-1,u=0,d=0,p=t,c=null;t:for(;;){for(var h;p!==a||i!==0&&p.nodeType!==3||(o=r+i),p!==s||n!==0&&p.nodeType!==3||(l=r+n),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)c=p,p=h;for(;;){if(p===t)break t;if(c===a&&++u===i&&(o=r),c===s&&++d===n&&(l=r),(h=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=h}a=o===-1||l===-1?null:{start:o,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zp={focusedElem:t,selectionRange:a},$c=!1,aa=e;aa!==null;)if(e=aa,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,aa=t;else for(;aa!==null;){switch(e=aa,s=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,a=e,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var S=Hs(a.type,i);t=n.getSnapshotBeforeUpdate(S,s),n.__reactInternalSnapshotBeforeUpdate=t}catch(L){pt(a,a.return,L)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Jp(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jp(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(ee(163))}if(t=e.sibling,t!==null){t.return=e.return,aa=t;break}aa=e.return}}function Cy(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ni(t,a),n&4&&wl(5,a);break;case 1:if(ni(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){pt(a,a.return,r)}else{var i=Hs(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){pt(a,a.return,r)}}n&64&&vy(a),n&512&&nl(a,a.return);break;case 3:if(ni(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Iv(t,e)}catch(r){pt(a,a.return,r)}}break;case 27:e===null&&n&4&&Ly(a);case 26:case 5:ni(t,a),e===null&&n&4&&_y(a),n&512&&nl(a,a.return);break;case 12:ni(t,a);break;case 31:ni(t,a),n&4&&Ty(t,a);break;case 13:ni(t,a),n&4&&Iy(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=rA.bind(null,a),CA(t,a))));break;case 22:if(n=a.memoizedState!==null||ri,!n){e=e!==null&&e.memoizedState!==null||Xt,i=ri;var s=Xt;ri=n,(Xt=e)&&!s?ii(t,a,(a.subtreeFlags&8772)!==0):ni(t,a),ri=i,Xt=s}break;case 30:break;default:ni(t,a)}}function by(t){var e=t.alternate;e!==null&&(t.alternate=null,by(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&om(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Nt=null,Oa=!1;function ai(t,e,a){for(a=a.child;a!==null;)Ay(t,e,a),a=a.sibling}function Ay(t,e,a){if(Ka&&typeof Ka.onCommitFiberUnmount=="function")try{Ka.onCommitFiberUnmount(Ll,a)}catch{}switch(a.tag){case 26:Xt||Nn(a,e),ai(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xt||Nn(a,e);var n=Nt,i=Oa;rs(a.type)&&(Nt=a.stateNode,Oa=!1),ai(t,e,a),ol(a.stateNode),Nt=n,Oa=i;break;case 5:Xt||Nn(a,e);case 6:if(n=Nt,i=Oa,Nt=null,ai(t,e,a),Nt=n,Oa=i,Nt!==null)if(Oa)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(a.stateNode)}catch(s){pt(a,e,s)}else try{Nt.removeChild(a.stateNode)}catch(s){pt(a,e,s)}break;case 18:Nt!==null&&(Oa?(t=Nt,xS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hr(t)):xS(Nt,a.stateNode));break;case 4:n=Nt,i=Oa,Nt=a.stateNode.containerInfo,Oa=!0,ai(t,e,a),Nt=n,Oa=i;break;case 0:case 11:case 14:case 15:ns(2,a,e),Xt||ns(4,a,e),ai(t,e,a);break;case 1:Xt||(Nn(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&yy(a,e,n)),ai(t,e,a);break;case 21:ai(t,e,a);break;case 22:Xt=(n=Xt)||a.memoizedState!==null,ai(t,e,a),Xt=n;break;default:ai(t,e,a)}}function Ty(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hr(t)}catch(a){pt(e,e.return,a)}}}function Iy(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hr(t)}catch(a){pt(e,e.return,a)}}function jb(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new aS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new aS),e;default:throw Error(ee(435,t.tag))}}function sc(t,e){var a=jb(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=oA.bind(null,t,n);n.then(i,i)}})}function Na(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(rs(o.type)){Nt=o.stateNode,Oa=!1;break e}break;case 5:Nt=o.stateNode,Oa=!1;break e;case 3:case 4:Nt=o.stateNode.containerInfo,Oa=!0;break e}o=o.return}if(Nt===null)throw Error(ee(160));Ay(s,r,i),Nt=null,Oa=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ey(e,t),e=e.sibling}var _n=null;function Ey(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Na(e,t),Ba(t),n&4&&(ns(3,t,t.return),wl(3,t),ns(5,t,t.return));break;case 1:Na(e,t),Ba(t),n&512&&(Xt||a===null||Nn(a,a.return)),n&64&&ri&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=_n;if(Na(e,t),Ba(t),n&512&&(Xt||a===null||Nn(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){e:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Al]||s[ua]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),da(s,n,a),s[ua]=t,na(s),n=s;break e;case"link":var r=CS("link","href",i).get(n+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break t}}s=i.createElement(n),da(s,n,a),i.head.appendChild(s);break;case"meta":if(r=CS("meta","content",i).get(n+(a.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break t}}s=i.createElement(n),da(s,n,a),i.head.appendChild(s);break;default:throw Error(ee(468,n))}s[ua]=t,na(s),n=s}t.stateNode=n}else bS(i,t.type,t.stateNode);else t.stateNode=LS(i,n,t.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?bS(i,t.type,t.stateNode):LS(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Qh(t,t.memoizedProps,a.memoizedProps)}break;case 27:Na(e,t),Ba(t),n&512&&(Xt||a===null||Nn(a,a.return)),a!==null&&n&4&&Qh(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Na(e,t),Ba(t),n&512&&(Xt||a===null||Nn(a,a.return)),t.flags&32){i=t.stateNode;try{Pr(i,"")}catch(S){pt(t,t.return,S)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Qh(t,i,a!==null?a.memoizedProps:i)),n&1024&&($h=!0);break;case 6:if(Na(e,t),Ba(t),n&4){if(t.stateNode===null)throw Error(ee(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(S){pt(t,t.return,S)}}break;case 3:if(Lc=null,i=_n,_n=Jc(e.containerInfo),Na(e,t),_n=i,Ba(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Hr(e.containerInfo)}catch(S){pt(t,t.return,S)}$h&&($h=!1,wy(t));break;case 4:n=_n,_n=Jc(t.stateNode.containerInfo),Na(e,t),Ba(t),_n=n;break;case 12:Na(e,t),Ba(t);break;case 31:Na(e,t),Ba(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,sc(t,n)));break;case 13:Na(e,t),Ba(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hf=Za()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,sc(t,n)));break;case 22:i=t.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=ri,d=Xt;if(ri=u||i,Xt=d||l,Na(e,t),Xt=d,ri=u,Ba(t),n&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||l||ri||Xt||Rs(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){l=a=e;try{if(s=l.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,c=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(S){pt(l,l.return,S)}}}else if(e.tag===6){if(a===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(S){pt(l,l.return,S)}}}else if(e.tag===18){if(a===null){l=e;try{var h=l.stateNode;i?SS(h,!0):SS(l.stateNode,!1)}catch(S){pt(l,l.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,sc(t,a))));break;case 19:Na(e,t),Ba(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,sc(t,n)));break;case 30:break;case 21:break;default:Na(e,t),Ba(t)}}function Ba(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(My(n)){a=n;break}n=n.return}if(a==null)throw Error(ee(160));switch(a.tag){case 27:var i=a.stateNode,s=jh(t);Gc(t,s,i);break;case 5:var r=a.stateNode;a.flags&32&&(Pr(r,""),a.flags&=-33);var o=jh(t);Gc(t,o,r);break;case 3:case 4:var l=a.stateNode.containerInfo,u=jh(t);kp(t,u,l);break;default:throw Error(ee(161))}}catch(d){pt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;wy(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ni(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Cy(t,e.alternate,e),e=e.sibling}function Rs(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ns(4,e,e.return),Rs(e);break;case 1:Nn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&yy(e,e.return,a),Rs(e);break;case 27:ol(e.stateNode);case 26:case 5:Nn(e,e.return),Rs(e);break;case 22:e.memoizedState===null&&Rs(e);break;case 30:Rs(e);break;default:Rs(e)}t=t.sibling}}function ii(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:ii(i,s,a),wl(4,s);break;case 1:if(ii(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){pt(n,n.return,u)}if(n=s,i=n.updateQueue,i!==null){var o=n.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Tv(l[i],o)}catch(u){pt(n,n.return,u)}}a&&r&64&&vy(s),nl(s,s.return);break;case 27:Ly(s);case 26:case 5:ii(i,s,a),a&&n===null&&r&4&&_y(s),nl(s,s.return);break;case 12:ii(i,s,a);break;case 31:ii(i,s,a),a&&r&4&&Ty(i,s);break;case 13:ii(i,s,a),a&&r&4&&Iy(i,s);break;case 22:s.memoizedState===null&&ii(i,s,a),nl(s,s.return);break;case 30:break;default:ii(i,s,a)}e=e.sibling}}function zm(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Il(a))}function km(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Il(t))}function yn(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ry(t,e,a,n),e=e.sibling}function Ry(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:yn(t,e,a,n),i&2048&&wl(9,e);break;case 1:yn(t,e,a,n);break;case 3:yn(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Il(t)));break;case 12:if(i&2048){yn(t,e,a,n),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){pt(e,e.return,l)}}else yn(t,e,a,n);break;case 31:yn(t,e,a,n);break;case 13:yn(t,e,a,n);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?yn(t,e,a,n):il(t,e):s._visibility&2?yn(t,e,a,n):(s._visibility|=2,cr(t,e,a,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&zm(r,e);break;case 24:yn(t,e,a,n),i&2048&&km(e.alternate,e);break;default:yn(t,e,a,n)}}function cr(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:cr(s,r,o,l,i),wl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?cr(s,r,o,l,i):il(s,r):(d._visibility|=2,cr(s,r,o,l,i)),i&&u&2048&&zm(r.alternate,r);break;case 24:cr(s,r,o,l,i),i&&u&2048&&km(r.alternate,r);break;default:cr(s,r,o,l,i)}e=e.sibling}}function il(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:il(a,n),i&2048&&zm(n.alternate,n);break;case 24:il(a,n),i&2048&&km(n.alternate,n);break;default:il(a,n)}e=e.sibling}}var Zo=8192;function ur(t,e,a){if(t.subtreeFlags&Zo)for(t=t.child;t!==null;)Dy(t,e,a),t=t.sibling}function Dy(t,e,a){switch(t.tag){case 26:ur(t,e,a),t.flags&Zo&&t.memoizedState!==null&&BA(a,_n,t.memoizedState,t.memoizedProps);break;case 5:ur(t,e,a);break;case 3:case 4:var n=_n;_n=Jc(t.stateNode.containerInfo),ur(t,e,a),_n=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Zo,Zo=16777216,ur(t,e,a),Zo=n):ur(t,e,a));break;default:ur(t,e,a)}}function Py(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Ho(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];aa=n,Ny(n,t)}Py(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uy(t),t=t.sibling}function Uy(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&ns(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,_c(t)):Ho(t);break;default:Ho(t)}}function _c(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];aa=n,Ny(n,t)}Py(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ns(8,e,e.return),_c(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,_c(e));break;default:_c(e)}t=t.sibling}}function Ny(t,e){for(;aa!==null;){var a=aa;switch(a.tag){case 0:case 11:case 15:ns(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Il(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,aa=n;else e:for(a=t;aa!==null;){n=aa;var i=n.sibling,s=n.return;if(by(n),n===a){aa=null;break e}if(i!==null){i.return=s,aa=i;break e}aa=s}}}var $b={getCacheForType:function(t){var e=fa(Yt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return fa(Yt).controller.signal}},eA=typeof WeakMap=="function"?WeakMap:Map,ut=0,_t=null,Qe=null,tt=0,ht=0,qa=null,Vi=!1,Xr=!1,Hm=!1,xi=0,kt=0,is=0,Bs=0,Gm=0,Ya=0,Or=0,sl=null,Fa=null,Hp=!1,hf=0,By=0,Vc=1/0,qc=null,Ji=null,Qt=0,Qi=null,Fr=null,di=0,Gp=0,Vp=null,Oy=null,rl=0,qp=null;function Qa(){return(ut&2)!==0&&tt!==0?tt&-tt:Be.T!==null?qm():XS()}function Fy(){if(Ya===0)if((tt&536870912)===0||it){var t=Ku;Ku<<=1,(Ku&3932160)===0&&(Ku=262144),Ya=t}else Ya=536870912;return t=$a.current,t!==null&&(t.flags|=32),Ya}function za(t,e,a){(t===_t&&(ht===2||ht===9)||t.cancelPendingCommit!==null)&&(zr(t,0),qi(t,tt,Ya,!1)),bl(t,a),((ut&2)===0||t!==_t)&&(t===_t&&((ut&2)===0&&(Bs|=a),kt===4&&qi(t,tt,Ya,!1)),Fn(t))}function zy(t,e,a){if((ut&6)!==0)throw Error(ee(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Cl(t,e),i=n?nA(t,e):ep(t,e,!0),s=n;do{if(i===0){Xr&&!n&&qi(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!tA(a)){i=ep(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=sl;var l=o.current.memoizedState.isDehydrated;if(l&&(zr(o,r).flags|=256),r=ep(o,r,!1),r!==2){if(Hm&&!l){o.errorRecoveryDisabledLanes|=s,Bs|=s,i=4;break e}s=Fa,Fa=i,s!==null&&(Fa===null?Fa=s:Fa.push.apply(Fa,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){zr(t,0),qi(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error(ee(345));case 4:if((e&4194048)!==e)break;case 6:qi(n,e,Ya,!Vi);break e;case 2:Fa=null;break;case 3:case 5:break;default:throw Error(ee(329))}if((e&62914560)===e&&(i=hf+300-Za(),10<i)){if(qi(n,e,Ya,!Vi),tf(n,0,!0)!==0)break e;di=e,n.timeoutHandle=s_(nS.bind(null,n,a,Fa,qc,Hp,e,Ya,Bs,Or,Vi,s,"Throttled",-0,0),i);break e}nS(n,a,Fa,qc,Hp,e,Ya,Bs,Or,Vi,s,null,-0,0)}}break}while(!0);Fn(t)}function nS(t,e,a,n,i,s,r,o,l,u,d,p,c,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:li},Dy(e,s,p);var S=(s&62914560)===s?hf-Za():(s&4194048)===s?By-Za():0;if(S=OA(p,S),S!==null){di=s,t.cancelPendingCommit=S(sS.bind(null,t,e,s,a,n,i,r,o,l,d,p,null,c,h)),qi(t,s,r,!u);return}}sS(t,e,s,a,n,i,r,o,l)}function tA(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!ja(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e,a,n){e&=~Gm,e&=~Bs,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-Ja(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&VS(t,a,e)}function pf(){return(ut&6)===0?(Rl(0,!1),!1):!0}function Vm(){if(Qe!==null){if(ht===0)var t=Qe.return;else t=Qe,ui=Xs=null,Im(t),Ir=null,pl=0,t=Qe;for(;t!==null;)Sy(t.alternate,t),t=t.return;Qe=null}}function zr(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,vA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),di=0,Vm(),_t=t,Qe=a=ci(t.current,null),tt=e,ht=0,qa=null,Vi=!1,Xr=Cl(t,e),Hm=!1,Or=Ya=Gm=Bs=is=kt=0,Fa=sl=null,Hp=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Ja(n),s=1<<i;e|=t[i],n&=~s}return xi=e,rf(),a}function ky(t,e){Ve=null,Be.H=gl,e===Wr||e===lf?(e=N0(),ht=3):e===_m?(e=N0(),ht=4):ht=e===Om?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qa=e,Qe===null&&(kt=1,kc(t,fn(e,t.current)))}function Hy(){var t=$a.current;return t===null?!0:(tt&4194048)===tt?hn===null:(tt&62914560)===tt||(tt&536870912)!==0?t===hn:!1}function Gy(){var t=Be.H;return Be.H=gl,t===null?gl:t}function Vy(){var t=Be.A;return Be.A=$b,t}function Wc(){kt=4,Vi||(tt&4194048)!==tt&&$a.current!==null||(Xr=!0),(is&134217727)===0&&(Bs&134217727)===0||_t===null||qi(_t,tt,Ya,!1)}function ep(t,e,a){var n=ut;ut|=2;var i=Gy(),s=Vy();(_t!==t||tt!==e)&&(qc=null,zr(t,e)),e=!1;var r=kt;e:do try{if(ht!==0&&Qe!==null){var o=Qe,l=qa;switch(ht){case 8:Vm(),r=6;break e;case 3:case 2:case 9:case 6:$a.current===null&&(e=!0);var u=ht;if(ht=0,qa=null,Lr(t,o,l,u),a&&Xr){r=0;break e}break;default:u=ht,ht=0,qa=null,Lr(t,o,l,u)}}aA(),r=kt;break}catch(d){ky(t,d)}while(!0);return e&&t.shellSuspendCounter++,ui=Xs=null,ut=n,Be.H=i,Be.A=s,Qe===null&&(_t=null,tt=0,rf()),r}function aA(){for(;Qe!==null;)qy(Qe)}function nA(t,e){var a=ut;ut|=2;var n=Gy(),i=Vy();_t!==t||tt!==e?(qc=null,Vc=Za()+500,zr(t,e)):Xr=Cl(t,e);e:do try{if(ht!==0&&Qe!==null){e=Qe;var s=qa;t:switch(ht){case 1:ht=0,qa=null,Lr(t,e,s,1);break;case 2:case 9:if(U0(s)){ht=0,qa=null,iS(e);break}e=function(){ht!==2&&ht!==9||_t!==t||(ht=7),Fn(t)},s.then(e,e);break e;case 3:ht=7;break e;case 4:ht=5;break e;case 7:U0(s)?(ht=0,qa=null,iS(e)):(ht=0,qa=null,Lr(t,e,s,7));break;case 5:var r=null;switch(Qe.tag){case 26:r=Qe.memoizedState;case 5:case 27:var o=Qe;if(r?c_(r):o.stateNode.complete){ht=0,qa=null;var l=o.sibling;if(l!==null)Qe=l;else{var u=o.return;u!==null?(Qe=u,mf(u)):Qe=null}break t}}ht=0,qa=null,Lr(t,e,s,5);break;case 6:ht=0,qa=null,Lr(t,e,s,6);break;case 8:Vm(),kt=6;break e;default:throw Error(ee(462))}}iA();break}catch(d){ky(t,d)}while(!0);return ui=Xs=null,Be.H=n,Be.A=i,ut=a,Qe!==null?0:(_t=null,tt=0,rf(),kt)}function iA(){for(;Qe!==null&&!TC();)qy(Qe)}function qy(t){var e=xy(t.alternate,t,xi);t.memoizedProps=t.pendingProps,e===null?mf(t):Qe=e}function iS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Q0(a,e,e.pendingProps,e.type,void 0,tt);break;case 11:e=Q0(a,e,e.pendingProps,e.type.render,e.ref,tt);break;case 5:Im(e);default:Sy(a,e),e=Qe=Sv(e,xi),e=xy(a,e,xi)}t.memoizedProps=t.pendingProps,e===null?mf(t):Qe=e}function Lr(t,e,a,n){ui=Xs=null,Im(e),Ir=null,pl=0;var i=e.return;try{if(Xb(t,i,e,a,tt)){kt=1,kc(t,fn(a,t.current)),Qe=null;return}}catch(s){if(i!==null)throw Qe=i,s;kt=1,kc(t,fn(a,t.current)),Qe=null;return}e.flags&32768?(it||n===1?t=!0:Xr||(tt&536870912)!==0?t=!1:(Vi=t=!0,(n===2||n===9||n===3||n===6)&&(n=$a.current,n!==null&&n.tag===13&&(n.flags|=16384))),Wy(e,t)):mf(e)}function mf(t){var e=t;do{if((e.flags&32768)!==0){Wy(e,Vi);return}t=e.return;var a=Kb(e.alternate,e,xi);if(a!==null){Qe=a;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);kt===0&&(kt=5)}function Wy(t,e){do{var a=Jb(t.alternate,t);if(a!==null){a.flags&=32767,Qe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Qe=t;return}Qe=t=a}while(t!==null);kt=6,Qe=null}function sS(t,e,a,n,i,s,r,o,l){t.cancelPendingCommit=null;do gf();while(Qt!==0);if((ut&6)!==0)throw Error(ee(327));if(e!==null){if(e===t.current)throw Error(ee(177));if(s=e.lanes|e.childLanes,s|=pm,OC(t,a,s,r,o,l),t===_t&&(Qe=_t=null,tt=0),Fr=e,Qi=t,di=a,Gp=s,Vp=i,Oy=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,lA(Ec,function(){return Jy(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=Be.T,Be.T=null,i=ct.p,ct.p=2,r=ut,ut|=4;try{Qb(t,e,a)}finally{ut=r,ct.p=i,Be.T=n}}Qt=1,Xy(),Yy(),Zy()}}function Xy(){if(Qt===1){Qt=0;var t=Qi,e=Fr,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=Be.T,Be.T=null;var n=ct.p;ct.p=2;var i=ut;ut|=4;try{Ey(e,t);var s=Zp,r=cv(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&uv(o.ownerDocument.documentElement,o)){if(l!==null&&hm(o)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var h=c.getSelection(),S=o.textContent.length,L=Math.min(l.start,S),x=l.end===void 0?L:Math.min(l.end,S);!h.extend&&L>x&&(r=x,x=L,L=r);var f=T0(o,L),m=T0(o,x);if(f&&m&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var y=p.createRange();y.setStart(f.node,f.offset),h.removeAllRanges(),L>x?(h.addRange(y),h.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),h.addRange(y))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var v=p[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}$c=!!Yp,Zp=Yp=null}finally{ut=i,ct.p=n,Be.T=a}}t.current=e,Qt=2}}function Yy(){if(Qt===2){Qt=0;var t=Qi,e=Fr,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=Be.T,Be.T=null;var n=ct.p;ct.p=2;var i=ut;ut|=4;try{Cy(t,e.alternate,e)}finally{ut=i,ct.p=n,Be.T=a}}Qt=3}}function Zy(){if(Qt===4||Qt===3){Qt=0,IC();var t=Qi,e=Fr,a=di,n=Oy;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Qt=5:(Qt=0,Fr=Qi=null,Ky(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ji=null),rm(a),e=e.stateNode,Ka&&typeof Ka.onCommitFiberRoot=="function")try{Ka.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=Be.T,i=ct.p,ct.p=2,Be.T=null;try{for(var s=t.onRecoverableError,r=0;r<n.length;r++){var o=n[r];s(o.value,{componentStack:o.stack})}}finally{Be.T=e,ct.p=i}}(di&3)!==0&&gf(),Fn(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===qp?rl++:(rl=0,qp=t):rl=0,Rl(0,!1)}}function Ky(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Il(e)))}function gf(){return Xy(),Yy(),Zy(),Jy()}function Jy(){if(Qt!==5)return!1;var t=Qi,e=Gp;Gp=0;var a=rm(di),n=Be.T,i=ct.p;try{ct.p=32>a?32:a,Be.T=null,a=Vp,Vp=null;var s=Qi,r=di;if(Qt=0,Fr=Qi=null,di=0,(ut&6)!==0)throw Error(ee(331));var o=ut;if(ut|=4,Uy(s.current),Ry(s,s.current,r,a),ut=o,Rl(0,!1),Ka&&typeof Ka.onPostCommitFiberRoot=="function")try{Ka.onPostCommitFiberRoot(Ll,s)}catch{}return!0}finally{ct.p=i,Be.T=n,Ky(t,e)}}function rS(t,e,a){e=fn(a,e),e=Op(t.stateNode,e,2),t=Ki(t,e,2),t!==null&&(bl(t,2),Fn(t))}function pt(t,e,a){if(t.tag===3)rS(t,t,a);else for(;e!==null;){if(e.tag===3){rS(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ji===null||!Ji.has(n))){t=fn(a,t),a=fy(2),n=Ki(e,a,2),n!==null&&(dy(a,n,e,t),bl(n,2),Fn(n));break}}e=e.return}}function tp(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new eA;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(Hm=!0,i.add(a),t=sA.bind(null,t,e,a),e.then(t,t))}function sA(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,_t===t&&(tt&a)===a&&(kt===4||kt===3&&(tt&62914560)===tt&&300>Za()-hf?(ut&2)===0&&zr(t,0):Gm|=a,Or===tt&&(Or=0)),Fn(t)}function Qy(t,e){e===0&&(e=GS()),t=Ws(t,e),t!==null&&(bl(t,e),Fn(t))}function rA(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Qy(t,a)}function oA(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(ee(314))}n!==null&&n.delete(e),Qy(t,a)}function lA(t,e){return im(t,e)}var Xc=null,fr=null,Wp=!1,Yc=!1,ap=!1,Wi=0;function Fn(t){t!==fr&&t.next===null&&(fr===null?Xc=fr=t:fr=fr.next=t),Yc=!0,Wp||(Wp=!0,cA())}function Rl(t,e){if(!ap&&Yc){ap=!0;do for(var a=!1,n=Xc;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-Ja(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,oS(n,s))}else s=tt,s=tf(n,n===_t?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Cl(n,s)||(a=!0,oS(n,s));n=n.next}while(a);ap=!1}}function uA(){jy()}function jy(){Yc=Wp=!1;var t=0;Wi!==0&&SA()&&(t=Wi);for(var e=Za(),a=null,n=Xc;n!==null;){var i=n.next,s=$y(n,e);s===0?(n.next=null,a===null?Xc=i:a.next=i,i===null&&(fr=a)):(a=n,(t!==0||(s&3)!==0)&&(Yc=!0)),n=i}Qt!==0&&Qt!==5||Rl(t,!1),Wi!==0&&(Wi=0)}function $y(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Ja(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=BC(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=_t,a=tt,a=tf(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(ht===2||ht===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Rh(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Cl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Rh(n),rm(a)){case 2:case 8:a=kS;break;case 32:a=Ec;break;case 268435456:a=HS;break;default:a=Ec}return n=e_.bind(null,t),a=im(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Rh(n),t.callbackPriority=2,t.callbackNode=null,2}function e_(t,e){if(Qt!==0&&Qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(gf()&&t.callbackNode!==a)return null;var n=tt;return n=tf(t,t===_t?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(zy(t,n,e),$y(t,Za()),t.callbackNode!=null&&t.callbackNode===a?e_.bind(null,t):null)}function oS(t,e){if(gf())return null;zy(t,e,!0)}function cA(){yA(function(){(ut&6)!==0?im(zS,uA):jy()})}function qm(){if(Wi===0){var t=Ur;t===0&&(t=Zu,Zu<<=1,(Zu&261888)===0&&(Zu=256)),Wi=t}return Wi}function lS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dc(""+t)}function uS(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function fA(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=lS((i[ka]||null).action),r=n.submitter;r&&(e=(e=r[ka]||null)?lS(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new af("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Wi!==0){var l=r?uS(i,r):new FormData(i);Np(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?uS(i,r):new FormData(i),Np(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(rc=0;rc<Lp.length;rc++)oc=Lp[rc],cS=oc.toLowerCase(),fS=oc[0].toUpperCase()+oc.slice(1),Mn(cS,"on"+fS);var oc,cS,fS,rc;Mn(dv,"onAnimationEnd");Mn(hv,"onAnimationIteration");Mn(pv,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(Eb,"onTransitionRun");Mn(wb,"onTransitionStart");Mn(Rb,"onTransitionCancel");Mn(mv,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);Gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function t_(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){Rc(d)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){Rc(d)}i.currentTarget=null,s=l}}}}function Je(t,e){var a=e[mp];a===void 0&&(a=e[mp]=new Set);var n=t+"__bubble";a.has(n)||(a_(e,t,2,!1),a.add(n))}function np(t,e,a){var n=0;e&&(n|=4),a_(a,t,n,e)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Wm(t){if(!t[lc]){t[lc]=!0,YS.forEach(function(a){a!=="selectionchange"&&(dA.has(a)||np(a,!1,t),np(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lc]||(e[lc]=!0,np("selectionchange",!1,e))}}function a_(t,e,a,n){switch(m_(e)){case 2:var i=kA;break;case 8:i=HA;break;default:i=Km}a=i.bind(null,e,a,t),i=void 0,!yp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function ip(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=pr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}tv(function(){var u=s,d=um(a),p=[];e:{var c=gv.get(t);if(c!==void 0){var h=af,S=t;switch(t){case"keypress":if(pc(a)===0)break e;case"keydown":case"keyup":h=ob;break;case"focusin":S="focus",h=Bh;break;case"focusout":S="blur",h=Bh;break;case"beforeblur":case"afterblur":h=Bh;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=S0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=KC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=cb;break;case dv:case hv:case pv:h=jC;break;case mv:h=db;break;case"scroll":case"scrollend":h=YC;break;case"wheel":h=pb;break;case"copy":case"cut":case"paste":h=eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=y0;break;case"toggle":case"beforetoggle":h=gb}var L=(e&4)!==0,x=!L&&(t==="scroll"||t==="scrollend"),f=L?c!==null?c+"Capture":null:c;L=[];for(var m=u,y;m!==null;){var v=m;if(y=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||y===null||f===null||(v=ul(m,f),v!=null&&L.push(Sl(m,v,y))),x)break;m=m.return}0<L.length&&(c=new h(c,S,null,a,d),p.push({event:c,listeners:L}))}}if((e&7)===0){e:{if(c=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",c&&a!==vp&&(S=a.relatedTarget||a.fromElement)&&(pr(S)||S[Gr]))break e;if((h||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,h?(S=a.relatedTarget||a.toElement,h=u,S=S?pr(S):null,S!==null&&(x=Ml(S),L=S.tag,S!==x||L!==5&&L!==27&&L!==6)&&(S=null)):(h=null,S=u),h!==S)){if(L=S0,v="onMouseLeave",f="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(L=y0,v="onPointerLeave",f="onPointerEnter",m="pointer"),x=h==null?c:Xo(h),y=S==null?c:Xo(S),c=new L(v,m+"leave",h,a,d),c.target=x,c.relatedTarget=y,v=null,pr(d)===u&&(L=new L(f,m+"enter",S,a,d),L.target=y,L.relatedTarget=x,v=L),x=v,h&&S)t:{for(L=hA,f=h,m=S,y=0,v=f;v;v=L(v))y++;v=0;for(var A=m;A;A=L(A))v++;for(;0<y-v;)f=L(f),y--;for(;0<v-y;)m=L(m),v--;for(;y--;){if(f===m||m!==null&&f===m.alternate){L=f;break t}f=L(f),m=L(m)}L=null}else L=null;h!==null&&dS(p,c,h,L,!1),S!==null&&x!==null&&dS(p,x,S,L,!0)}}e:{if(c=u?Xo(u):window,h=c.nodeName&&c.nodeName.toLowerCase(),h==="select"||h==="input"&&c.type==="file")var T=C0;else if(L0(c))if(ov)T=Ab;else{T=Cb;var g=Lb}else h=c.nodeName,!h||h.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&lm(u.elementType)&&(T=C0):T=bb;if(T&&(T=T(t,u))){rv(p,T,a,d);break e}g&&g(t,c,u),t==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Sp(c,"number",c.value)}switch(g=u?Xo(u):window,t){case"focusin":(L0(g)||g.contentEditable==="true")&&(xr=g,_p=u,Qo=null);break;case"focusout":Qo=_p=xr=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,I0(p,a,d);break;case"selectionchange":if(Ib)break;case"keydown":case"keyup":I0(p,a,d)}var C;if(dm)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else gr?iv(t,a)&&(D="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(D="onCompositionStart");D&&(nv&&a.locale!=="ko"&&(gr||D!=="onCompositionStart"?D==="onCompositionEnd"&&gr&&(C=av()):(Gi=d,cm="value"in Gi?Gi.value:Gi.textContent,gr=!0)),g=Zc(u,D),0<g.length&&(D=new v0(D,t,null,a,d),p.push({event:D,listeners:g}),C?D.data=C:(C=sv(a),C!==null&&(D.data=C)))),(C=Sb?vb(t,a):yb(t,a))&&(D=Zc(u,"onBeforeInput"),0<D.length&&(g=new v0("onBeforeInput","beforeinput",null,a,d),p.push({event:g,listeners:D}),g.data=C)),fA(p,t,u,a,d)}t_(p,e)})}function Sl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Zc(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=ul(t,a),i!=null&&n.unshift(Sl(t,i,s)),i=ul(t,e),i!=null&&n.push(Sl(t,i,s))),t.tag===3)return n;t=t.return}return[]}function hA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function dS(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=ul(a,s),u!=null&&r.unshift(Sl(a,u,l))):i||(u=ul(a,s),u!=null&&r.push(Sl(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var pA=/\r\n?/g,mA=/\u0000|\uFFFD/g;function hS(t){return(typeof t=="string"?t:""+t).replace(pA,`
`).replace(mA,"")}function n_(t,e){return e=hS(e),hS(t)===e}function mt(t,e,a,n,i,s){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Pr(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Pr(t,""+n);break;case"className":Qu(t,"class",n);break;case"tabIndex":Qu(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Qu(t,a,n);break;case"style":ev(t,n,s);break;case"data":if(e!=="object"){Qu(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=dc(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&mt(t,e,"name",i.name,i,null),mt(t,e,"formEncType",i.formEncType,i,null),mt(t,e,"formMethod",i.formMethod,i,null),mt(t,e,"formTarget",i.formTarget,i,null)):(mt(t,e,"encType",i.encType,i,null),mt(t,e,"method",i.method,i,null),mt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=dc(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=li);break;case"onScroll":n!=null&&Je("scroll",t);break;case"onScrollEnd":n!=null&&Je("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ee(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ee(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=dc(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":Je("beforetoggle",t),Je("toggle",t),fc(t,"popover",n);break;case"xlinkActuate":ei(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ei(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ei(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ei(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ei(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ei(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ei(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ei(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ei(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":fc(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=WC.get(a)||a,fc(t,a,n))}}function Xp(t,e,a,n,i,s){switch(a){case"style":ev(t,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ee(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ee(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Pr(t,n):(typeof n=="number"||typeof n=="bigint")&&Pr(t,""+n);break;case"onScroll":n!=null&&Je("scroll",t);break;case"onScrollEnd":n!=null&&Je("scrollend",t);break;case"onClick":n!=null&&(t.onclick=li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ZS.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),s=t[ka]||null,s=s!=null?s[a]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break e}a in t?t[a]=n:n===!0?t.setAttribute(a,""):fc(t,a,n)}}}function da(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Je("error",t),Je("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:mt(t,e,s,r,a,null)}}i&&mt(t,e,"srcSet",a.srcSet,a,null),n&&mt(t,e,"src",a.src,a,null);return;case"input":Je("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var d=a[n];if(d!=null)switch(n){case"name":i=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ee(137,e));break;default:mt(t,e,n,d,a,null)}}QS(t,s,o,l,u,r,i,!1);return;case"select":Je("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:mt(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?br(t,!!n,e,!1):a!=null&&br(t,!!n,a,!0);return;case"textarea":Je("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ee(91));break;default:mt(t,e,r,o,a,null)}$S(t,n,i,s);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":mt(t,e,l,n,a,null));return;case"dialog":Je("beforetoggle",t),Je("toggle",t),Je("cancel",t),Je("close",t);break;case"iframe":case"object":Je("load",t);break;case"video":case"audio":for(n=0;n<xl.length;n++)Je(xl[n],t);break;case"image":Je("error",t),Je("load",t);break;case"details":Je("toggle",t);break;case"embed":case"source":case"link":Je("error",t),Je("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:mt(t,e,u,n,a,null)}return;default:if(lm(e)){for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!==void 0&&Xp(t,e,d,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&mt(t,e,o,n,a,null))}function gA(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,d=null;for(h in a){var p=a[h];if(a.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:n.hasOwnProperty(h)||mt(t,e,h,null,n,p)}}for(var c in n){var h=n[c];if(p=a[c],n.hasOwnProperty(c)&&(h!=null||p!=null))switch(c){case"type":s=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ee(137,e));break;default:h!==p&&mt(t,e,c,h,n,p)}}xp(t,r,o,l,u,d,s,i);return;case"select":h=r=o=c=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||mt(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":c=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&mt(t,e,i,s,n,l)}e=o,a=r,n=h,c!=null?br(t,!!a,c,!1):!!n!=!!a&&(e!=null?br(t,!!a,e,!0):br(t,!!a,a?[]:"",!1));return;case"textarea":h=c=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:mt(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":c=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(ee(91));break;default:i!==s&&mt(t,e,r,i,n,s)}jS(t,c,h);return;case"option":for(var S in a)c=a[S],a.hasOwnProperty(S)&&c!=null&&!n.hasOwnProperty(S)&&(S==="selected"?t.selected=!1:mt(t,e,S,null,n,c));for(l in n)c=n[l],h=a[l],n.hasOwnProperty(l)&&c!==h&&(c!=null||h!=null)&&(l==="selected"?t.selected=c&&typeof c!="function"&&typeof c!="symbol":mt(t,e,l,c,n,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in a)c=a[L],a.hasOwnProperty(L)&&c!=null&&!n.hasOwnProperty(L)&&mt(t,e,L,null,n,c);for(u in n)if(c=n[u],h=a[u],n.hasOwnProperty(u)&&c!==h&&(c!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(ee(137,e));break;default:mt(t,e,u,c,n,h)}return;default:if(lm(e)){for(var x in a)c=a[x],a.hasOwnProperty(x)&&c!==void 0&&!n.hasOwnProperty(x)&&Xp(t,e,x,void 0,n,c);for(d in n)c=n[d],h=a[d],!n.hasOwnProperty(d)||c===h||c===void 0&&h===void 0||Xp(t,e,d,c,n,h);return}}for(var f in a)c=a[f],a.hasOwnProperty(f)&&c!=null&&!n.hasOwnProperty(f)&&mt(t,e,f,null,n,c);for(p in n)c=n[p],h=a[p],!n.hasOwnProperty(p)||c===h||c==null&&h==null||mt(t,e,p,c,n,h)}function pS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&pS(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var d=l.transferSize,p=l.initiatorType;d&&pS(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yp=null,Zp=null;function Kc(t){return t.nodeType===9?t:t.ownerDocument}function mS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Kp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sp=null;function SA(){var t=window.event;return t&&t.type==="popstate"?t===sp?!1:(sp=t,!0):(sp=null,!1)}var s_=typeof setTimeout=="function"?setTimeout:void 0,vA=typeof clearTimeout=="function"?clearTimeout:void 0,gS=typeof Promise=="function"?Promise:void 0,yA=typeof queueMicrotask=="function"?queueMicrotask:typeof gS<"u"?function(t){return gS.resolve(null).then(t).catch(_A)}:s_;function _A(t){setTimeout(function(){throw t})}function rs(t){return t==="head"}function xS(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),Hr(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")ol(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ol(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Al]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&ol(t.ownerDocument.body);a=i}while(a);Hr(e)}function SS(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function Jp(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jp(a),om(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function MA(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Al])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=pn(t.nextSibling),t===null)break}return null}function LA(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pn(t.nextSibling),t===null))return null;return t}function r_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=pn(t.nextSibling),t===null))return null;return t}function Qp(t){return t.data==="$?"||t.data==="$~"}function jp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function CA(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var $p=null;function vS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return pn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function yS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function o_(t,e,a){switch(e=Kc(a),t){case"html":if(t=e.documentElement,!t)throw Error(ee(452));return t;case"head":if(t=e.head,!t)throw Error(ee(453));return t;case"body":if(t=e.body,!t)throw Error(ee(454));return t;default:throw Error(ee(451))}}function ol(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);om(t)}var mn=new Map,_S=new Set;function Jc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Si=ct.d;ct.d={f:bA,r:AA,D:TA,C:IA,L:EA,m:wA,X:DA,S:RA,M:PA};function bA(){var t=Si.f(),e=pf();return t||e}function AA(t){var e=Vr(t);e!==null&&e.tag===5&&e.type==="form"?ey(e):Si.r(t)}var Yr=typeof document>"u"?null:document;function l_(t,e,a){var n=Yr;if(n&&typeof e=="string"&&e){var i=cn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),_S.has(i)||(_S.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),da(e,"link",t),na(e),n.head.appendChild(e)))}}function TA(t){Si.D(t),l_("dns-prefetch",t,null)}function IA(t,e){Si.C(t,e),l_("preconnect",t,e)}function EA(t,e,a){Si.L(t,e,a);var n=Yr;if(n&&t&&e){var i='link[rel="preload"][as="'+cn(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+cn(a.imageSizes)+'"]')):i+='[href="'+cn(t)+'"]';var s=i;switch(e){case"style":s=kr(t);break;case"script":s=Zr(t)}mn.has(s)||(t=wt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),mn.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Dl(s))||e==="script"&&n.querySelector(Pl(s))||(e=n.createElement("link"),da(e,"link",t),na(e),n.head.appendChild(e)))}}function wA(t,e){Si.m(t,e);var a=Yr;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+cn(n)+'"][href="'+cn(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Zr(t)}if(!mn.has(s)&&(t=wt({rel:"modulepreload",href:t},e),mn.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Pl(s)))return}n=a.createElement("link"),da(n,"link",t),na(n),a.head.appendChild(n)}}}function RA(t,e,a){Si.S(t,e,a);var n=Yr;if(n&&t){var i=Cr(n).hoistableStyles,s=kr(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(Dl(s)))o.loading=5;else{t=wt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=mn.get(s))&&Xm(t,a);var l=r=n.createElement("link");na(l),da(l,"link",t),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Mc(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function DA(t,e){Si.X(t,e);var a=Yr;if(a&&t){var n=Cr(a).hoistableScripts,i=Zr(t),s=n.get(i);s||(s=a.querySelector(Pl(i)),s||(t=wt({src:t,async:!0},e),(e=mn.get(i))&&Ym(t,e),s=a.createElement("script"),na(s),da(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function PA(t,e){Si.M(t,e);var a=Yr;if(a&&t){var n=Cr(a).hoistableScripts,i=Zr(t),s=n.get(i);s||(s=a.querySelector(Pl(i)),s||(t=wt({src:t,async:!0,type:"module"},e),(e=mn.get(i))&&Ym(t,e),s=a.createElement("script"),na(s),da(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function MS(t,e,a,n){var i=(i=Xi.current)?Jc(i):null;if(!i)throw Error(ee(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=kr(a.href),a=Cr(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=kr(a.href);var s=Cr(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(Dl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),mn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mn.set(t,a),s||UA(i,t,a,r.state))),e&&n===null)throw Error(ee(528,""));return r}if(e&&n!==null)throw Error(ee(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Zr(a),a=Cr(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(ee(444,t))}}function kr(t){return'href="'+cn(t)+'"'}function Dl(t){return'link[rel="stylesheet"]['+t+"]"}function u_(t){return wt({},t,{"data-precedence":t.precedence,precedence:null})}function UA(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),da(e,"link",a),na(e),t.head.appendChild(e))}function Zr(t){return'[src="'+cn(t)+'"]'}function Pl(t){return"script[async]"+t}function LS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+cn(a.href)+'"]');if(n)return e.instance=n,na(n),n;var i=wt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),na(n),da(n,"style",i),Mc(n,a.precedence,t),e.instance=n;case"stylesheet":i=kr(a.href);var s=t.querySelector(Dl(i));if(s)return e.state.loading|=4,e.instance=s,na(s),s;n=u_(a),(i=mn.get(i))&&Xm(n,i),s=(t.ownerDocument||t).createElement("link"),na(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),da(s,"link",n),e.state.loading|=4,Mc(s,a.precedence,t),e.instance=s;case"script":return s=Zr(a.src),(i=t.querySelector(Pl(s)))?(e.instance=i,na(i),i):(n=a,(i=mn.get(s))&&(n=wt({},a),Ym(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),na(i),da(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(ee(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Mc(n,a.precedence,t));return e.instance}function Mc(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function Xm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ym(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Lc=null;function CS(t,e,a){if(Lc===null){var n=new Map,i=Lc=new Map;i.set(a,n)}else i=Lc,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[Al]||s[ua]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function bS(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function NA(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function c_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function BA(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=kr(n.href),s=e.querySelector(Dl(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Qc.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,na(s);return}s=e.ownerDocument||e,n=u_(n),(i=mn.get(i))&&Xm(n,i),s=s.createElement("link"),na(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),da(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Qc.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var rp=0;function OA(t,e){return t.stylesheets&&t.count===0&&Cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&rp===0&&(rp=62500*xA());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>rp?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var jc=null;function Cc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,jc=new Map,e.forEach(FA,t),jc=null,Qc.call(t))}function FA(t,e){if(!(e.state.loading&4)){var a=jc.get(t);if(a)var n=a.get(null);else{a=new Map,jc.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=Qc.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var vl={$$typeof:oi,Provider:null,Consumer:null,_currentValue:Ds,_currentValue2:Ds,_threadCount:0};function zA(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dh(0),this.hiddenUpdates=Dh(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function f_(t,e,a,n,i,s,r,o,l,u,d,p){return t=new zA(t,e,a,r,l,u,d,p,o),e=1,s===!0&&(e|=24),s=Xa(3,null,null,e),t.current=s,s.stateNode=t,e=vm(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},Mm(s),t}function d_(t){return t?(t=yr,t):yr}function h_(t,e,a,n,i,s){i=d_(i),n.context===null?n.context=i:n.pendingContext=i,n=Zi(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Ki(t,n,e),a!==null&&(za(a,t,e),$o(a,t,e))}function AS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Zm(t,e){AS(t,e),(t=t.alternate)&&AS(t,e)}function p_(t){if(t.tag===13||t.tag===31){var e=Ws(t,67108864);e!==null&&za(e,t,67108864),Zm(t,67108864)}}function TS(t){if(t.tag===13||t.tag===31){var e=Qa();e=sm(e);var a=Ws(t,e);a!==null&&za(a,t,e),Zm(t,e)}}var $c=!0;function kA(t,e,a,n){var i=Be.T;Be.T=null;var s=ct.p;try{ct.p=2,Km(t,e,a,n)}finally{ct.p=s,Be.T=i}}function HA(t,e,a,n){var i=Be.T;Be.T=null;var s=ct.p;try{ct.p=8,Km(t,e,a,n)}finally{ct.p=s,Be.T=i}}function Km(t,e,a,n){if($c){var i=em(n);if(i===null)ip(t,e,n,ef,a),IS(t,n);else if(VA(i,t,e,a,n))n.stopPropagation();else if(IS(t,n),e&4&&-1<GA.indexOf(t)){for(;i!==null;){var s=Vr(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Es(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Ja(r);o.entanglements[1]|=l,r&=~l}Fn(s),(ut&6)===0&&(Vc=Za()+500,Rl(0,!1))}}break;case 31:case 13:o=Ws(s,2),o!==null&&za(o,s,2),pf(),Zm(s,2)}if(s=em(n),s===null&&ip(t,e,n,ef,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else ip(t,e,n,null,a)}}function em(t){return t=um(t),Jm(t)}var ef=null;function Jm(t){if(ef=null,t=pr(t),t!==null){var e=Ml(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=US(e),t!==null)return t;t=null}else if(a===31){if(t=NS(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ef=t,null}function m_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(EC()){case zS:return 2;case kS:return 8;case Ec:case wC:return 32;case HS:return 268435456;default:return 32}default:return 32}}var tm=!1,ji=null,$i=null,es=null,yl=new Map,_l=new Map,ki=[],GA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function IS(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":yl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(e.pointerId)}}function Go(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vr(e),e!==null&&p_(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function VA(t,e,a,n,i){switch(e){case"focusin":return ji=Go(ji,t,e,a,n,i),!0;case"dragenter":return $i=Go($i,t,e,a,n,i),!0;case"mouseover":return es=Go(es,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return yl.set(s,Go(yl.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,_l.set(s,Go(_l.get(s)||null,t,e,a,n,i)),!0}return!1}function g_(t){var e=pr(t.target);if(e!==null){var a=Ml(e);if(a!==null){if(e=a.tag,e===13){if(e=US(a),e!==null){t.blockedOn=e,f0(t.priority,function(){TS(a)});return}}else if(e===31){if(e=NS(a),e!==null){t.blockedOn=e,f0(t.priority,function(){TS(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=em(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);vp=n,a.target.dispatchEvent(n),vp=null}else return e=Vr(a),e!==null&&p_(e),t.blockedOn=a,!1;e.shift()}return!0}function ES(t,e,a){bc(t)&&a.delete(e)}function qA(){tm=!1,ji!==null&&bc(ji)&&(ji=null),$i!==null&&bc($i)&&($i=null),es!==null&&bc(es)&&(es=null),yl.forEach(ES),_l.forEach(ES)}function uc(t,e){t.blockedOn===e&&(t.blockedOn=null,tm||(tm=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,qA)))}var cc=null;function wS(t){cc!==t&&(cc=t,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,function(){cc===t&&(cc=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(Jm(n||a)===null)continue;break}var s=Vr(a);s!==null&&(t.splice(e,3),e-=3,Np(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Hr(t){function e(l){return uc(l,t)}ji!==null&&uc(ji,t),$i!==null&&uc($i,t),es!==null&&uc(es,t),yl.forEach(e),_l.forEach(e);for(var a=0;a<ki.length;a++){var n=ki[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<ki.length&&(a=ki[0],a.blockedOn===null);)g_(a),a.blockedOn===null&&ki.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[ka]||null;if(typeof s=="function")r||wS(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[ka]||null)o=r.formAction;else if(Jm(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),wS(a)}}}function x_(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Qm(t){this._internalRoot=t}xf.prototype.render=Qm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));var a=e.current,n=Qa();h_(a,n,t,e,null,null)};xf.prototype.unmount=Qm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;h_(t.current,2,null,t,null,null),pf(),e[Gr]=null}};function xf(t){this._internalRoot=t}xf.prototype.unstable_scheduleHydration=function(t){if(t){var e=XS();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ki.length&&e!==0&&e<ki[a].priority;a++);ki.splice(a,0,t),a===0&&g_(t)}};var RS=DS.version;if(RS!=="19.2.6")throw Error(ee(527,RS,"19.2.6"));ct.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=MC(e),t=t!==null?BS(t):null,t=t===null?null:t.stateNode,t};var WA={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Be,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Vo.isDisabled&&Vo.supportsFiber))try{Ll=Vo.inject(WA),Ka=Vo}catch{}var Vo;Sf.createRoot=function(t,e){if(!PS(t))throw Error(ee(299));var a=!1,n="",i=ly,s=uy,r=cy;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=f_(t,1,!1,null,null,a,n,null,i,s,r,x_),t[Gr]=e.current,Wm(t),new Qm(e)};Sf.hydrateRoot=function(t,e,a){if(!PS(t))throw Error(ee(299));var n=!1,i="",s=ly,r=uy,o=cy,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=f_(t,1,!0,e,a??null,n,i,l,s,r,o,x_),e.context=d_(null),a=e.current,n=Qa(),n=sm(n),i=Zi(n),i.callback=null,Ki(a,i,n),a=n,e.current.lanes=a,bl(e,a),Fn(e),t[Gr]=e.current,Wm(t),new xf(e)};Sf.version="19.2.6"});var __=Rn((zR,y_)=>{"use strict";function v_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v_)}catch(t){console.error(t)}}v_(),y_.exports=S_()});var OL=Rn(fh=>{"use strict";var ER=Symbol.for("react.transitional.element"),wR=Symbol.for("react.fragment");function BL(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var i in e)i!=="key"&&(a[i]=e[i])}else a=e;return e=a.ref,{$$typeof:ER,type:t,key:n,ref:e!==void 0?e:null,props:a}}fh.Fragment=wR;fh.jsx=BL;fh.jsxs=BL});var zu=Rn((wU,FL)=>{"use strict";FL.exports=OL()});var VL=jn(__());var Jt=jn(As());var Z_=0,Tg=1,K_=2;var du=1,xd=2,_o=3,ys=0,Pa=1,Sn=2,Qs=0,Mo=1,Ig=2,Eg=3,wg=4,J_=5;var js=100,Q_=101,j_=102,$_=103,eM=104,tM=200,aM=201,nM=202,iM=203,Rg=204,Dg=205,sM=206,rM=207,oM=208,lM=209,uM=210,cM=211,fM=212,dM=213,hM=214,Hf=0,Gf=1,Vf=2,uo=3,qf=4,Wf=5,Xf=6,Yf=7,Pg=0,pM=1,mM=2,Xn=0,Ug=1,Ng=2,Bg=3,hu=4,Og=5,Fg=6,zg=7;var kg=300,$s=301,Lo=302,Sd=303,vd=304,Zf=1e3,kn=1001,Kf=1002,ra=1003,gM=1004;var pu=1005;var Da=1006,yd=1007;var Ei=1008;var Va=1009,Hg=1010,Gg=1011,Co=1012,_d=1013,Tn=1014,In=1015,En=1016,Md=1017,Ld=1018,er=1020,Vg=35902,qg=35899,Wg=1021,Xg=1022,wn=1023,bi=1026,wi=1027,Yg=1028,Cd=1029,_s=1030,bd=1031;var Ad=1033,mu=33776,gu=33777,xu=33778,Su=33779,Td=35840,Id=35841,Ed=35842,wd=35843,Rd=36196,Dd=37492,Pd=37496,Ud=37488,Nd=37489,vu=37490,Bd=37491,Od=37808,Fd=37809,zd=37810,kd=37811,Hd=37812,Gd=37813,Vd=37814,qd=37815,Wd=37816,Xd=37817,Yd=37818,Zd=37819,Kd=37820,Jd=37821,Qd=36492,jd=36494,$d=36495,eh=36283,th=36284,yu=36285,ah=36286;var Hl=2300,Jf=2301,zf=2302,Sg=2303,vg=2400,yg=2401,_g=2402;var xM=3200;var nh=0,SM=1,Ri="",wa="srgb",Gl="srgb-linear",Vl="linear",dt="srgb";var kf=7680;var vM=519,yM=512,_M=513,MM=514,Zg=515,LM=516,CM=517,Kg=518,Jg=519,bM=35044;var Qg="300 es",xn=2e3,co=2001;function XA(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function YA(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AM(){let t=ql("canvas");return t.style.display="block",t}var M_={},fo=null;function jg(...t){let e="THREE."+t.shift();fo?fo("log",e,...t):console.log(e,...t)}function TM(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=TM(t);let e="THREE."+t.shift();if(fo)fo("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Oe(...t){t=TM(t);let e="THREE."+t.shift();if(fo)fo("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function Fl(...t){let e=t.join(" ");e in M_||(M_[e]=!0,Ne(...t))}function IM(t,e,a){return new Promise(function(n,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,a);break;default:n()}}setTimeout(s,a)})}var EM={[Hf]:Hf,[Vf]:Xf,[qf]:qf,[uo]:Wf,[Gf]:Gf,[Xf]:Vf,[Yf]:Yf,[Wf]:uo},Vn=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Sa=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],L_=1234567,zl=Math.PI/180,ho=180/Math.PI;function bo(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sa[t&255]+Sa[t>>8&255]+Sa[t>>16&255]+Sa[t>>24&255]+"-"+Sa[e&255]+Sa[e>>8&255]+"-"+Sa[e>>16&15|64]+Sa[e>>24&255]+"-"+Sa[a&63|128]+Sa[a>>8&255]+"-"+Sa[a>>16&255]+Sa[a>>24&255]+Sa[n&255]+Sa[n>>8&255]+Sa[n>>16&255]+Sa[n>>24&255]).toLowerCase()}function nt(t,e,a){return Math.max(e,Math.min(a,t))}function $g(t,e){return(t%e+e)%e}function ZA(t,e,a,n,i){return n+(t-e)*(i-n)/(a-e)}function KA(t,e,a){return t!==e?(a-t)/(e-t):0}function kl(t,e,a){return(1-a)*t+a*e}function JA(t,e,a,n){return kl(t,e,1-Math.exp(-a*n))}function QA(t,e=1){return e-Math.abs($g(t,e*2)-e)}function jA(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*(3-2*t))}function $A(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*t*(t*(t*6-15)+10))}function eT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function tT(t,e){return t+Math.random()*(e-t)}function aT(t){return t*(.5-Math.random())}function nT(t){t!==void 0&&(L_=t);let e=L_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iT(t){return t*zl}function sT(t){return t*ho}function rT(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function oT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ex(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lT(t,e,a,n,i){let s=Math.cos,r=Math.sin,o=s(a/2),l=r(a/2),u=s((e+n)/2),d=r((e+n)/2),p=s((e-n)/2),c=r((e-n)/2),h=s((n-e)/2),S=r((n-e)/2);switch(i){case"XYX":t.set(o*d,l*p,l*c,o*u);break;case"YZY":t.set(l*c,o*d,l*p,o*u);break;case"ZXZ":t.set(l*p,l*c,o*d,o*u);break;case"XZX":t.set(o*d,l*S,l*h,o*u);break;case"YXY":t.set(l*h,o*d,l*S,o*u);break;case"ZYZ":t.set(l*S,l*h,o*d,o*u);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tx(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wM(t,e){if(e.constructor===Float32Array)return t;let a=tx(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/a,-1)}function RM(t,e){if(e.constructor===Float32Array)return t;let a=tx(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*a)}var ax={DEG2RAD:zl,RAD2DEG:ho,generateUUID:bo,clamp:nt,euclideanModulo:$g,mapLinear:ZA,inverseLerp:KA,lerp:kl,damp:JA,pingpong:QA,smoothstep:jA,smootherstep:$A,randInt:eT,randFloat:tT,randFloatSpread:aT,seededRandom:nT,degToRad:iT,radToDeg:sT,isPowerOfTwo:rT,ceilPowerOfTwo:oT,floorPowerOfTwo:ex,setQuaternionFromProperEuler:lT,normalize:RM,denormalize:wM},ox=class ox{constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=nt(this.x,e.x,a.x),this.y=nt(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=nt(this.x,e,a),this.y=nt(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ox.prototype.isVector2=!0;var Ke=ox,qn=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],d=n[i+2],p=n[i+3],c=s[r+0],h=s[r+1],S=s[r+2],L=s[r+3];if(p!==L||l!==c||u!==h||d!==S){let x=l*c+u*h+d*S+p*L;x<0&&(c=-c,h=-h,S=-S,L=-L,x=-x);let f=1-o;if(x<.9995){let m=Math.acos(x),y=Math.sin(m);f=Math.sin(f*m)/y,o=Math.sin(o*m)/y,l=l*f+c*o,u=u*f+h*o,d=d*f+S*o,p=p*f+L*o}else{l=l*f+c*o,u=u*f+h*o,d=d*f+S*o,p=p*f+L*o;let m=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=m,u*=m,d*=m,p*=m}}e[a]=l,e[a+1]=u,e[a+2]=d,e[a+3]=p}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],d=n[i+3],p=s[r],c=s[r+1],h=s[r+2],S=s[r+3];return e[a]=o*S+d*p+l*h-u*c,e[a+1]=l*S+d*c+u*p-o*h,e[a+2]=u*S+d*h+o*c-l*p,e[a+3]=d*S-o*p-l*c-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(i/2),p=o(s/2),c=l(n/2),h=l(i/2),S=l(s/2);switch(r){case"XYZ":this._x=c*d*p+u*h*S,this._y=u*h*p-c*d*S,this._z=u*d*S+c*h*p,this._w=u*d*p-c*h*S;break;case"YXZ":this._x=c*d*p+u*h*S,this._y=u*h*p-c*d*S,this._z=u*d*S-c*h*p,this._w=u*d*p+c*h*S;break;case"ZXY":this._x=c*d*p-u*h*S,this._y=u*h*p+c*d*S,this._z=u*d*S+c*h*p,this._w=u*d*p-c*h*S;break;case"ZYX":this._x=c*d*p-u*h*S,this._y=u*h*p+c*d*S,this._z=u*d*S-c*h*p,this._w=u*d*p+c*h*S;break;case"YZX":this._x=c*d*p+u*h*S,this._y=u*h*p+c*d*S,this._z=u*d*S-c*h*p,this._w=u*d*p-c*h*S;break;case"XZY":this._x=c*d*p-u*h*S,this._y=u*h*p-c*d*S,this._z=u*d*S+c*h*p,this._w=u*d*p+c*h*S;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],d=a[6],p=a[10],c=n+o+p;if(c>0){let h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,d=a._w;return this._x=n*d+r*o+i*u-s*l,this._y=i*d+r*l+s*o-n*u,this._z=s*d+r*u+n*l-i*o,this._w=r*d-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,a=Math.sin(a*u)/d,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lx=class lx{constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(C_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(C_.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),d=2*(o*a-s*i),p=2*(s*n-r*a);return this.x=a+l*u+r*p-o*d,this.y=n+l*d+o*u-s*p,this.z=i+l*p+s*d-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=nt(this.x,e.x,a.x),this.y=nt(this.y,e.y,a.y),this.z=nt(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=nt(this.x,e,a),this.y=nt(this.y,e,a),this.z=nt(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jm.copy(this).projectOnVector(e),this.sub(jm)}reflect(e){return this.sub(jm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lx.prototype.isVector3=!0;var G=lx,jm=new G,C_=new qn,ux=class ux{constructor(e,a,n,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=a,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],d=n[4],p=n[7],c=n[2],h=n[5],S=n[8],L=i[0],x=i[3],f=i[6],m=i[1],y=i[4],v=i[7],A=i[2],T=i[5],g=i[8];return s[0]=r*L+o*m+l*A,s[3]=r*x+o*y+l*T,s[6]=r*f+o*v+l*g,s[1]=u*L+d*m+p*A,s[4]=u*x+d*y+p*T,s[7]=u*f+d*v+p*g,s[2]=c*L+h*m+S*A,s[5]=c*x+h*y+S*T,s[8]=c*f+h*v+S*g,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return a*r*d-a*o*u-n*s*d+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*r-o*u,c=o*l-d*s,h=u*s-r*l,S=a*p+n*c+i*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/S;return e[0]=p*L,e[1]=(i*u-d*n)*L,e[2]=(o*n-i*r)*L,e[3]=c*L,e[4]=(d*a-i*l)*L,e[5]=(i*s-o*a)*L,e[6]=h*L,e[7]=(n*l-u*a)*L,e[8]=(r*a-n*s)*L,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return Fl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($m.makeScale(e,a)),this}rotate(e){return Fl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($m.makeRotation(-e)),this}translate(e,a){return Fl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($m.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ux.prototype.isMatrix3=!0;var ze=ux,$m=new ze,b_=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A_=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uT(){let t={enabled:!0,workingColorSpace:Gl,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===dt&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===dt&&(i.r=lo(i.r),i.g=lo(i.g),i.b=lo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ri?Vl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[Gl]:{primaries:e,whitePoint:n,transfer:Vl,toXYZ:b_,fromXYZ:A_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:wa},outputColorSpaceConfig:{drawingBufferColorSpace:wa}},[wa]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:b_,fromXYZ:A_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:wa}}}),t}var at=uT();function Ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Kr,Qf=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=ql("canvas")),Kr.width=e.width,Kr.height=e.height;let i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=ql("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ci(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(Ci(a[n]/255)*255):a[n]=Ci(a[n]);return{data:a,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cT=0,po=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width||0,a.height||0,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(eg(i[r].image)):s.push(eg(i[r]))}else s=eg(i);n.url=s}return a||(e.images[this.uuid]=n),n}};function eg(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var fT=0,tg=new G,Ga=class t extends Vn{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=kn,i=kn,s=Da,r=Ei,o=wn,l=Va,u=t.DEFAULT_ANISOTROPY,d=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=bo(),this.name="",this.source=new po(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tg).x}get height(){return this.source.getSize(tg).y}get depth(){return this.source.getSize(tg).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Ne(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ne(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ga.DEFAULT_IMAGE=null;Ga.DEFAULT_MAPPING=kg;Ga.DEFAULT_ANISOTROPY=1;var cx=class cx{constructor(e=0,a=0,n=0,i=1){this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],d=l[4],p=l[8],c=l[1],h=l[5],S=l[9],L=l[2],x=l[6],f=l[10];if(Math.abs(d-c)<.01&&Math.abs(p-L)<.01&&Math.abs(S-x)<.01){if(Math.abs(d+c)<.1&&Math.abs(p+L)<.1&&Math.abs(S+x)<.1&&Math.abs(u+h+f-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let y=(u+1)/2,v=(h+1)/2,A=(f+1)/2,T=(d+c)/4,g=(p+L)/4,C=(S+x)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=T/n,s=g/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=g/s,i=C/s),this.set(n,i,s,a),this}let m=Math.sqrt((x-S)*(x-S)+(p-L)*(p-L)+(c-d)*(c-d));return Math.abs(m)<.001&&(m=1),this.x=(x-S)/m,this.y=(p-L)/m,this.z=(c-d)/m,this.w=Math.acos((u+h+f-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=nt(this.x,e.x,a.x),this.y=nt(this.y,e.y,a.y),this.z=nt(this.z,e.z,a.z),this.w=nt(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=nt(this.x,e,a),this.y=nt(this.y,e,a),this.z=nt(this.z,e,a),this.w=nt(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cx.prototype.isVector4=!0;var Bt=cx,jf=class extends Vn{constructor(e=1,a=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Da,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=n.depth,this.scissor=new Bt(0,0,e,a),this.scissorTest=!1,this.viewport=new Bt(0,0,e,a),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ga({width:e,height:a,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Da,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(a.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,n=1){if(this.width!==e||this.height!==a||this.depth!==n){this.width=e,this.height=a,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=a,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let i=Object.assign({},e.textures[a].image);this.textures[a].source=new po(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends jf{constructor(e=1,a=1,n={}){super(e,a,n),this.isWebGLRenderTarget=!0}},Wl=class extends Ga{constructor(e=null,a=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=ra,this.minFilter=ra,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $f=class extends Ga{constructor(e=null,a=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=ra,this.minFilter=ra,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var gd=class gd{constructor(e,a,n,i,s,r,o,l,u,d,p,c,h,S,L,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,d,p,c,h,S,L,x)}set(e,a,n,i,s,r,o,l,u,d,p,c,h,S,L,x){let f=this.elements;return f[0]=e,f[4]=a,f[8]=n,f[12]=i,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=u,f[6]=d,f[10]=p,f[14]=c,f[3]=h,f[7]=S,f[11]=L,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gd().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,n=e.elements,i=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),r=1/Jr.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let c=r*d,h=r*p,S=o*d,L=o*p;a[0]=l*d,a[4]=-l*p,a[8]=u,a[1]=h+S*u,a[5]=c-L*u,a[9]=-o*l,a[2]=L-c*u,a[6]=S+h*u,a[10]=r*l}else if(e.order==="YXZ"){let c=l*d,h=l*p,S=u*d,L=u*p;a[0]=c+L*o,a[4]=S*o-h,a[8]=r*u,a[1]=r*p,a[5]=r*d,a[9]=-o,a[2]=h*o-S,a[6]=L+c*o,a[10]=r*l}else if(e.order==="ZXY"){let c=l*d,h=l*p,S=u*d,L=u*p;a[0]=c-L*o,a[4]=-r*p,a[8]=S+h*o,a[1]=h+S*o,a[5]=r*d,a[9]=L-c*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let c=r*d,h=r*p,S=o*d,L=o*p;a[0]=l*d,a[4]=S*u-h,a[8]=c*u+L,a[1]=l*p,a[5]=L*u+c,a[9]=h*u-S,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let c=r*l,h=r*u,S=o*l,L=o*u;a[0]=l*d,a[4]=L-c*p,a[8]=S*p+h,a[1]=p,a[5]=r*d,a[9]=-o*d,a[2]=-u*d,a[6]=h*p+S,a[10]=c-L*p}else if(e.order==="XZY"){let c=r*l,h=r*u,S=o*l,L=o*u;a[0]=l*d,a[4]=-p,a[8]=u*d,a[1]=c*p+L,a[5]=r*d,a[9]=h*p-S,a[2]=S*p-h,a[6]=o*d,a[10]=L*p+c}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dT,e,hT)}lookAt(e,a,n){let i=this.elements;return en.subVectors(e,a),en.lengthSq()===0&&(en.z=1),en.normalize(),os.crossVectors(n,en),os.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),os.crossVectors(n,en)),os.normalize(),vf.crossVectors(en,os),i[0]=os.x,i[4]=vf.x,i[8]=en.x,i[1]=os.y,i[5]=vf.y,i[9]=en.y,i[2]=os.z,i[6]=vf.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],d=n[1],p=n[5],c=n[9],h=n[13],S=n[2],L=n[6],x=n[10],f=n[14],m=n[3],y=n[7],v=n[11],A=n[15],T=i[0],g=i[4],C=i[8],D=i[12],I=i[1],U=i[5],k=i[9],Z=i[13],R=i[2],W=i[6],j=i[10],q=i[14],ie=i[3],B=i[7],te=i[11],ae=i[15];return s[0]=r*T+o*I+l*R+u*ie,s[4]=r*g+o*U+l*W+u*B,s[8]=r*C+o*k+l*j+u*te,s[12]=r*D+o*Z+l*q+u*ae,s[1]=d*T+p*I+c*R+h*ie,s[5]=d*g+p*U+c*W+h*B,s[9]=d*C+p*k+c*j+h*te,s[13]=d*D+p*Z+c*q+h*ae,s[2]=S*T+L*I+x*R+f*ie,s[6]=S*g+L*U+x*W+f*B,s[10]=S*C+L*k+x*j+f*te,s[14]=S*D+L*Z+x*q+f*ae,s[3]=m*T+y*I+v*R+A*ie,s[7]=m*g+y*U+v*W+A*B,s[11]=m*C+y*k+v*j+A*te,s[15]=m*D+y*Z+v*q+A*ae,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],c=e[10],h=e[14],S=e[3],L=e[7],x=e[11],f=e[15],m=l*h-u*c,y=o*h-u*p,v=o*c-l*p,A=r*h-u*d,T=r*c-l*d,g=r*p-o*d;return a*(L*m-x*y+f*v)-n*(S*m-x*A+f*T)+i*(S*y-L*A+f*g)-s*(S*v-L*T+x*g)}determinantAffine(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return a*(r*d-o*u)-n*(s*d-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],c=e[10],h=e[11],S=e[12],L=e[13],x=e[14],f=e[15],m=a*o-n*r,y=a*l-i*r,v=a*u-s*r,A=n*l-i*o,T=n*u-s*o,g=i*u-s*l,C=d*L-p*S,D=d*x-c*S,I=d*f-h*S,U=p*x-c*L,k=p*f-h*L,Z=c*f-h*x,R=m*Z-y*k+v*U+A*I-T*D+g*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/R;return e[0]=(o*Z-l*k+u*U)*W,e[1]=(i*k-n*Z-s*U)*W,e[2]=(L*g-x*T+f*A)*W,e[3]=(c*T-p*g-h*A)*W,e[4]=(l*I-r*Z-u*D)*W,e[5]=(a*Z-i*I+s*D)*W,e[6]=(x*v-S*g-f*y)*W,e[7]=(d*g-c*v+h*y)*W,e[8]=(r*k-o*I+u*C)*W,e[9]=(n*I-a*k-s*C)*W,e[10]=(S*T-L*v+f*m)*W,e[11]=(p*v-d*T-h*m)*W,e[12]=(o*D-r*U-l*C)*W,e[13]=(a*U-n*D+i*C)*W,e[14]=(L*y-S*A-x*m)*W,e[15]=(d*A-p*y+c*m)*W,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,d=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,d*o+n,d*l-i*r,0,u*l-i*o,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,d=r+r,p=o+o,c=s*u,h=s*d,S=s*p,L=r*d,x=r*p,f=o*p,m=l*u,y=l*d,v=l*p,A=n.x,T=n.y,g=n.z;return i[0]=(1-(L+f))*A,i[1]=(h+v)*A,i[2]=(S-y)*A,i[3]=0,i[4]=(h-v)*T,i[5]=(1-(c+f))*T,i[6]=(x+m)*T,i[7]=0,i[8]=(S+y)*g,i[9]=(x-m)*g,i[10]=(1-(c+L))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),a.identity(),this;let r=Jr.set(i[0],i[1],i[2]).length(),o=Jr.set(i[4],i[5],i[6]).length(),l=Jr.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Ln.copy(this);let u=1/r,d=1/o,p=1/l;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=p,Ln.elements[9]*=p,Ln.elements[10]*=p,a.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=xn,l=!1){let u=this.elements,d=2*s/(a-e),p=2*s/(n-i),c=(a+e)/(a-e),h=(n+i)/(n-i),S,L;if(l)S=s/(r-s),L=r*s/(r-s);else if(o===xn)S=-(r+s)/(r-s),L=-2*r*s/(r-s);else if(o===co)S=-r/(r-s),L=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=L,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=xn,l=!1){let u=this.elements,d=2/(a-e),p=2/(n-i),c=-(a+e)/(a-e),h=-(n+i)/(n-i),S,L;if(l)S=1/(r-s),L=r/(r-s);else if(o===xn)S=-2/(r-s),L=-(r+s)/(r-s);else if(o===co)S=-1/(r-s),L=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=S,u[14]=L,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}};gd.prototype.isMatrix4=!0;var Dt=gd,Jr=new G,Ln=new Dt,dT=new G(0,0,0),hT=new G(1,1,1),os=new G,vf=new G,en=new G,T_=new Dt,I_=new qn,Ai=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],d=i[9],p=i[2],c=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return I_.setFromEuler(this),this.setFromQuaternion(I_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var mo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pT=0,E_=new G,Qr=new qn,vi=new Dt,yf=new G,Ul=new G,mT=new G,gT=new qn,w_=new G(1,0,0),R_=new G(0,1,0),D_=new G(0,0,1),P_={type:"added"},xT={type:"removed"},jr={type:"childadded",child:null},ag={type:"childremoved",child:null},_a=class t extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new G,a=new Ai,n=new qn,i=new G(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ze}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Qr.setFromAxisAngle(e,a),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,a){return Qr.setFromAxisAngle(e,a),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(w_,e)}rotateY(e){return this.rotateOnAxis(R_,e)}rotateZ(e){return this.rotateOnAxis(D_,e)}translateOnAxis(e,a){return E_.copy(e).applyQuaternion(this.quaternion),this.position.add(E_.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(w_,e)}translateY(e){return this.translateOnAxis(R_,e)}translateZ(e){return this.translateOnAxis(D_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?yf.copy(e):yf.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ul,yf,this.up):vi.lookAt(yf,Ul,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Qr.setFromRotationMatrix(vi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P_),jr.child=e,this.dispatchEvent(jr),jr.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(xT),ag.child=e,this.dispatchEvent(ag),ag.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P_),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,e,mT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ul,gT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),a===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),d=r(e.images),p=r(e.shapes),c=r(e.skeletons),h=r(e.animations),S=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),S.length>0&&(n.nodes=S)}return n.object=i,n;function r(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_a.DEFAULT_UP=new G(0,1,0);_a.DEFAULT_MATRIX_AUTO_UPDATE=!0;_a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=class extends _a{constructor(){super(),this.isGroup=!0,this.type="Group"}},ST={type:"move"},go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let n of e.hand.values())this._getHandJoint(a,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let L of e.hand.values()){let x=a.getJointPose(L,n),f=this._getHandJoint(u,L);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=d.position.distanceTo(p.position),h=.02,S=.005;u.inputState.pinching&&c>h+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=h-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=a.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=a.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ST)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[a.jointName]=n,e.add(n)}return e.joints[a.jointName]}},DM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},_f={h:0,s:0,l:0};function ng(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var We=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=wa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=at.workingColorSpace){return this.r=e,this.g=a,this.b=n,at.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=at.workingColorSpace){if(e=$g(e,1),a=nt(a,0,1),n=nt(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=ng(r,s,e+1/3),this.g=ng(r,s,e),this.b=ng(r,s,e-1/3)}return at.colorSpaceToWorking(this,i),this}setStyle(e,a=wa){function n(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,a);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Ne("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=wa){let n=DM[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wa){return at.workingToColorSpace(va.copy(this),e),Math.round(nt(va.r*255,0,255))*65536+Math.round(nt(va.g*255,0,255))*256+Math.round(nt(va.b*255,0,255))}getHexString(e=wa){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=at.workingColorSpace){at.workingToColorSpace(va.copy(this),a);let n=va.r,i=va.g,s=va.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,d=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=d<=.5?p/(r+o):p/(2-r-o),r){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,a=at.workingColorSpace){return at.workingToColorSpace(va.copy(this),a),e.r=va.r,e.g=va.g,e.b=va.b,e}getStyle(e=wa){at.workingToColorSpace(va.copy(this),e);let a=va.r,n=va.g,i=va.b;return e!==wa?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+a,ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(ls),e.getHSL(_f);let n=kl(ls.h,_f.h,a),i=kl(ls.s,_f.s,a),s=kl(ls.l,_f.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},va=new We;We.NAMES=DM;var Xl=class t{constructor(e,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=a}clone(){return new t(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Yl=class extends _a{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},Cn=new G,yi=new G,ig=new G,_i=new G,$r=new G,eo=new G,U_=new G,sg=new G,rg=new G,og=new G,lg=new Bt,ug=new Bt,cg=new Bt,ds=class t{constructor(e=new G,a=new G,n=new G){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),Cn.subVectors(e,a),i.cross(Cn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){Cn.subVectors(i,a),yi.subVectors(n,a),ig.subVectors(e,a);let r=Cn.dot(Cn),o=Cn.dot(yi),l=Cn.dot(ig),u=yi.dot(yi),d=yi.dot(ig),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let c=1/p,h=(u*l-o*d)*c,S=(r*d-o*l)*c;return s.set(1-h-S,S,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(r,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return lg.setScalar(0),ug.setScalar(0),cg.setScalar(0),lg.fromBufferAttribute(e,a),ug.fromBufferAttribute(e,n),cg.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(lg,s.x),r.addScaledVector(ug,s.y),r.addScaledVector(cg,s.z),r}static isFrontFacing(e,a,n,i){return Cn.subVectors(n,a),yi.subVectors(e,a),Cn.cross(yi).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Cn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;$r.subVectors(i,n),eo.subVectors(s,n),sg.subVectors(e,n);let l=$r.dot(sg),u=eo.dot(sg);if(l<=0&&u<=0)return a.copy(n);rg.subVectors(e,i);let d=$r.dot(rg),p=eo.dot(rg);if(d>=0&&p<=d)return a.copy(i);let c=l*p-d*u;if(c<=0&&l>=0&&d<=0&&l-d>0)return r=l/(l-d),a.copy(n).addScaledVector($r,r);og.subVectors(e,s);let h=$r.dot(og),S=eo.dot(og);if(S>=0&&h<=S)return a.copy(s);let L=h*u-l*S;if(L<=0&&u>=0&&S<=0)return o=u/(u-S),a.copy(n).addScaledVector(eo,o);let x=d*S-h*p;if(x<=0&&p-d>=0&&h-S>=0)return U_.subVectors(s,i),o=(p-d)/(p-d+(h-S)),a.copy(i).addScaledVector(U_,o);let f=1/(x+L+c);return r=L*f,o=c*f,a.copy(n).addScaledVector($r,r).addScaledVector(eo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hs=class{constructor(e=new G(1/0,1/0,1/0),a=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(bn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(bn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=bn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,bn):bn.fromBufferAttribute(s,r),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mf.copy(n.boundingBox)),Mf.applyMatrix4(e.matrixWorld),this.union(Mf)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Lf.subVectors(this.max,Nl),to.subVectors(e.a,Nl),ao.subVectors(e.b,Nl),no.subVectors(e.c,Nl),us.subVectors(ao,to),cs.subVectors(no,ao),Ys.subVectors(to,no);let a=[0,-us.z,us.y,0,-cs.z,cs.y,0,-Ys.z,Ys.y,us.z,0,-us.x,cs.z,0,-cs.x,Ys.z,0,-Ys.x,-us.y,us.x,0,-cs.y,cs.x,0,-Ys.y,Ys.x,0];return!fg(a,to,ao,no,Lf)||(a=[1,0,0,0,1,0,0,0,1],!fg(a,to,ao,no,Lf))?!1:(Cf.crossVectors(us,cs),a=[Cf.x,Cf.y,Cf.z],fg(a,to,ao,no,Lf))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mi=[new G,new G,new G,new G,new G,new G,new G,new G],bn=new G,Mf=new hs,to=new G,ao=new G,no=new G,us=new G,cs=new G,Ys=new G,Nl=new G,Lf=new G,Cf=new G,Zs=new G;function fg(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){Zs.fromArray(t,s);let o=i.x*Math.abs(Zs.x)+i.y*Math.abs(Zs.y)+i.z*Math.abs(Zs.z),l=e.dot(Zs),u=a.dot(Zs),d=n.dot(Zs);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}var Kt=new G,bf=new Ke,vT=0,Gn=class extends Vn{constructor(e,a,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vT++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=bM,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?tx(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)bf.fromBufferAttribute(this,a),bf.applyMatrix3(e),this.setXY(a,bf.x,bf.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)Kt.fromBufferAttribute(this,a),Kt.applyMatrix3(e),this.setXYZ(a,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)Kt.fromBufferAttribute(this,a),Kt.applyMatrix4(e),this.setXYZ(a,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)Kt.fromBufferAttribute(this,a),Kt.applyNormalMatrix(e),this.setXYZ(a,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)Kt.fromBufferAttribute(this,a),Kt.transformDirection(e),this.setXYZ(a,Kt.x,Kt.y,Kt.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,a,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=this._denormalize(a)),a}setX(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=this._denormalize(a)),a}setY(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=this._denormalize(a)),a}setZ(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=this._denormalize(a)),a}setW(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let a=this._normalizationScale;return a!==void 0?Math.max(e/a,-1):wM(e,this.array)}_normalize(e){let a=this._normalizationScale;return a!==void 0?Math.round(e*a):RM(e,this.array)}};var Zl=class extends Gn{constructor(e,a,n){super(new Uint16Array(e),a,n)}};var Kl=class extends Gn{constructor(e,a,n){super(new Uint32Array(e),a,n)}};var Ra=class extends Gn{constructor(e,a,n){super(new Float32Array(e),a,n)}},yT=new hs,Bl=new G,dg=new G,xo=class{constructor(e=new G,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):yT.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bl.subVectors(e,this.center);let a=Bl.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector(Bl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bl.copy(e.center).add(dg)),this.expandByPoint(Bl.copy(e.center).sub(dg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_T=0,gn=new Dt,hg=new _a,io=new G,tn=new hs,Ol=new hs,sa=new G,Ti=class t extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(XA(e)?Kl:Zl)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,a,n){return gn.makeTranslation(e,a,n),this.applyMatrix4(gn),this}scale(e,a,n){return gn.makeScale(e,a,n),this.applyMatrix4(gn),this}lookAt(e){return hg.lookAt(e),hg.updateMatrix(),this.applyMatrix4(hg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(io).negate(),this.translate(io.x,io.y,io.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ra(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(sa.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(sa),sa.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(sa)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xo);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];Ol.setFromBufferAttribute(o),this.morphTargetsRelative?(sa.addVectors(tn.min,Ol.min),tn.expandByPoint(sa),sa.addVectors(tn.max,Ol.max),tn.expandByPoint(sa)):(tn.expandByPoint(Ol.min),tn.expandByPoint(Ol.max))}tn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)sa.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(sa));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)sa.fromBufferAttribute(o,u),l&&(io.fromBufferAttribute(e,u),sa.add(io)),i=Math.max(i,n.distanceToSquared(sa))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Gn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],u=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new G,l[D]=new G;let d=new G,p=new G,c=new G,h=new Ke,S=new Ke,L=new Ke,x=new G,f=new G;function m(D,I,U){u[D]=u[I]=u[U]=1,d.fromBufferAttribute(n,D),p.fromBufferAttribute(n,I),c.fromBufferAttribute(n,U),h.fromBufferAttribute(s,D),S.fromBufferAttribute(s,I),L.fromBufferAttribute(s,U),p.sub(d),c.sub(d),S.sub(h),L.sub(h);let k=1/(S.x*L.y-L.x*S.y);isFinite(k)&&(x.copy(p).multiplyScalar(L.y).addScaledVector(c,-S.y).multiplyScalar(k),f.copy(c).multiplyScalar(S.x).addScaledVector(p,-L.x).multiplyScalar(k),o[D].add(x),o[I].add(x),o[U].add(x),l[D].add(f),l[I].add(f),l[U].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,I=y.length;D<I;++D){let U=y[D],k=U.start,Z=U.count;for(let R=k,W=k+Z;R<W;R+=3)m(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let v=new G,A=new G,T=new G,g=new G;function C(D){T.fromBufferAttribute(i,D),g.copy(T);let I=o[D];v.copy(I),v.sub(T.multiplyScalar(T.dot(I))).normalize(),A.crossVectors(g,I);let k=A.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,k)}for(let D=0,I=n.count;D<I;++D)u[D]&&C(D);this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==a.count)n=new Gn(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);let i=new G,s=new G,r=new G,o=new G,l=new G,u=new G,d=new G,p=new G;if(e)for(let c=0,h=e.count;c<h;c+=3){let S=e.getX(c+0),L=e.getX(c+1),x=e.getX(c+2);i.fromBufferAttribute(a,S),s.fromBufferAttribute(a,L),r.fromBufferAttribute(a,x),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,x),o.add(d),l.add(d),u.add(d),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(L,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let c=0,h=a.count;c<h;c+=3)i.fromBufferAttribute(a,c+0),s.fromBufferAttribute(a,c+1),r.fromBufferAttribute(a,c+2),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)sa.fromBufferAttribute(e,a),sa.normalize(),e.setXYZ(a,sa.x,sa.y,sa.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,p=o.normalized,c=new u.constructor(l.length*d),h=0,S=0;for(let L=0,x=l.length;L<x;L++){o.isInterleavedBufferAttribute?h=l[L]*o.data.stride+o.offset:h=l[L]*d;for(let f=0;f<d;f++)c[S++]=u[h++]}return new Gn(c,d,p)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let d=0,p=u.length;d<p;d++){let c=u[d],h=e(c,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let p=0,c=u.length;p<c;p++){let h=u[p];d.push(h.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let d=i[u];this.setAttribute(u,d.clone(a))}let s=e.morphAttributes;for(let u in s){let d=[],p=s[u];for(let c=0,h=p.length;c<h;c++)d.push(p[c].clone(a));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,d=r.length;u<d;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pg=new G,MT=new G,LT=new ze,An=class{constructor(e=new G(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,n,i){return this.normal.set(e,a,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,n){let i=pg.subVectors(n,a).cross(MT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,n=!0){let i=e.delta(pg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:a.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let a=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return a<0&&n>0||n<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let n=a||LT.getNormalMatrix(e),i=this.coplanarPoint(pg).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},CT=0,ps=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CT++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Mo,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rg,this.blendDst=Dg,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kf,this.stencilZFail=kf,this.stencilZPass=kf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Ne(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ne(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new An().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=a[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Li=new G,mg=new G,Af=new G,Tf=new G,Jl=class{constructor(e=new G,a=new G(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=Li.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,a),Li.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){mg.copy(e).add(a).multiplyScalar(.5),Af.copy(a).sub(e).normalize(),Tf.copy(this.origin).sub(mg);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Af),o=Tf.dot(this.direction),l=-Tf.dot(Af),u=Tf.lengthSq(),d=Math.abs(1-r*r),p,c,h,S;if(d>0)if(p=r*l-o,c=r*o-l,S=s*d,p>=0)if(c>=-S)if(c<=S){let L=1/d;p*=L,c*=L,h=p*(p+r*c+2*o)+c*(r*p+c+2*l)+u}else c=s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c<=-S?(p=Math.max(0,-(-r*s+o)),c=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u):c<=S?(p=0,c=Math.min(Math.max(-s,-l),s),h=c*(c+2*l)+u):(p=Math.max(0,-(r*s+o)),c=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u);else c=r>0?-s:s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(mg).addScaledVector(Af,c),h}intersectSphere(e,a){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),d>=0?(s=(e.min.y-c.y)*d,r=(e.max.y-c.y)*d):(s=(e.max.y-c.y)*d,r=(e.min.y-c.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,a,n,i,s){let r=this.origin,o=this.direction,l=o.x,u=o.y,d=o.z,p=e.x-r.x,c=e.y-r.y,h=e.z-r.z,S=a.x-r.x,L=a.y-r.y,x=a.z-r.z,f=n.x-r.x,m=n.y-r.y,y=n.z-r.z,v=Math.abs(l),A=Math.abs(u),T=Math.abs(d),g,C,D,I,U,k,Z,R,W,j,q,ie;if(v>=A&&v>=T?(D=l,k=p,W=S,ie=f,l>=0?(g=u,C=d,I=c,U=h,Z=L,R=x,j=m,q=y):(g=d,C=u,I=h,U=c,Z=x,R=L,j=y,q=m)):A>=T?(D=u,k=c,W=L,ie=m,u>=0?(g=d,C=l,I=h,U=p,Z=x,R=S,j=y,q=f):(g=l,C=d,I=p,U=h,Z=S,R=x,j=f,q=y)):(D=d,k=h,W=x,ie=y,d>=0?(g=l,C=u,I=p,U=c,Z=S,R=L,j=f,q=m):(g=u,C=l,I=c,U=p,Z=L,R=S,j=m,q=f)),D===0)return null;let B=g/D,te=C/D,ae=1/D,Me=I-B*k,Ee=U-te*k,J=Z-B*W,xe=R-te*W,_e=j-B*ie,we=q-te*ie,Se=_e*xe-we*J,Fe=Me*we-Ee*_e,Ot=J*Ee-xe*Me;if(i){if(Se<0||Fe<0||Ot<0)return null}else if((Se<0||Fe<0||Ot<0)&&(Se>0||Fe>0||Ot>0))return null;let Ue=Se+Fe+Ot;if(Ue===0)return null;let ot=ae*(Se*k+Fe*W+Ot*ie);return(Ue>0?ot<0:ot>0)?null:this.at(ot/Ue,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},So=class extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},N_=new Dt,Ks=new Jl,If=new xo,B_=new G,Ef=new G,wf=new G,Rf=new G,gg=new G,Df=new G,O_=new G,Pf=new G,ha=class extends _a{constructor(e=new Ti,a=new So){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Df.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let d=o[l],p=s[l];d!==0&&(gg.fromBufferAttribute(p,e),r?Df.addScaledVector(gg,d):Df.addScaledVector(gg.sub(a),d))}a.add(Df)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),If.copy(n.boundingSphere),If.applyMatrix4(s),Ks.copy(e.ray).recast(e.near),!(If.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(If,B_)===null||Ks.origin.distanceToSquared(B_)>(e.far-e.near)**2))&&(N_.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(N_),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,Ks)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,c=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,L=c.length;S<L;S++){let x=c[S],f=r[x.materialIndex],m=Math.max(x.start,h.start),y=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let v=m,A=y;v<A;v+=3){let T=o.getX(v),g=o.getX(v+1),C=o.getX(v+2);i=Uf(this,f,e,n,u,d,p,T,g,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),L=Math.min(o.count,h.start+h.count);for(let x=S,f=L;x<f;x+=3){let m=o.getX(x),y=o.getX(x+1),v=o.getX(x+2);i=Uf(this,r,e,n,u,d,p,m,y,v),i&&(i.faceIndex=Math.floor(x/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,L=c.length;S<L;S++){let x=c[S],f=r[x.materialIndex],m=Math.max(x.start,h.start),y=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let v=m,A=y;v<A;v+=3){let T=v,g=v+1,C=v+2;i=Uf(this,f,e,n,u,d,p,T,g,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),L=Math.min(l.count,h.start+h.count);for(let x=S,f=L;x<f;x+=3){let m=x,y=x+1,v=x+2;i=Uf(this,r,e,n,u,d,p,m,y,v),i&&(i.faceIndex=Math.floor(x/3),a.push(i))}}}};function bT(t,e,a,n,i,s,r,o){let l;if(e.side===Pa?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===ys,o),l===null)return null;Pf.copy(o),Pf.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(Pf);return u<a.near||u>a.far?null:{distance:u,point:Pf.clone(),object:t}}function Uf(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,Ef),t.getVertexPosition(l,wf),t.getVertexPosition(u,Rf);let d=bT(t,e,a,n,Ef,wf,Rf,O_);if(d){let p=new G;ds.getBarycoord(O_,Ef,wf,Rf,p),i&&(d.uv=ds.getInterpolatedAttribute(i,o,l,u,p,new Ke)),s&&(d.uv1=ds.getInterpolatedAttribute(s,o,l,u,p,new Ke)),r&&(d.normal=ds.getInterpolatedAttribute(r,o,l,u,p,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new G,materialIndex:0};ds.getNormal(Ef,wf,Rf,c.normal),d.face=c,d.barycoord=p}return d}var ed=class extends Ga{constructor(e=null,a=1,n=1,i,s,r,o,l,u=ra,d=ra,p,c){super(null,r,o,l,u,d,i,s,p,c),this.isDataTexture=!0,this.image={data:e,width:a,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=new xo,AT=new Ke(.5,.5),Nf=new G,ms=class{constructor(e=new An,a=new An,n=new An,i=new An,s=new An,r=new An){this.planes=[e,a,n,i,s,r]}set(e,a,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(a),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let a=this.planes;for(let n=0;n<6;n++)a[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,a=xn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],d=s[4],p=s[5],c=s[6],h=s[7],S=s[8],L=s[9],x=s[10],f=s[11],m=s[12],y=s[13],v=s[14],A=s[15];if(i[0].setComponents(u-r,h-d,f-S,A-m).normalize(),i[1].setComponents(u+r,h+d,f+S,A+m).normalize(),i[2].setComponents(u+o,h+p,f+L,A+y).normalize(),i[3].setComponents(u-o,h-p,f-L,A-y).normalize(),n)i[4].setComponents(l,c,x,v).normalize(),i[5].setComponents(u-l,h-c,f-x,A-v).normalize();else if(i[4].setComponents(u-l,h-c,f-x,A-v).normalize(),a===xn)i[5].setComponents(u+l,h+c,f+x,A+v).normalize();else if(a===co)i[5].setComponents(l,c,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Js.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let a=AT.distanceTo(e.center);return Js.radius=.7071067811865476+a,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let a=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let n=0;n<6;n++){let i=a[n];if(Nf.x=i.normal.x>0?e.max.x:e.min.x,Nf.y=i.normal.y>0?e.max.y:e.min.y,Nf.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nf)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let n=0;n<6;n++)if(a[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},F_=new Dt,td=class t{constructor(){this.coordinateSystem=xn,this._frustums=[],this._count=0}setFromArrayCamera(e){let a=e.cameras,n=this._frustums;for(let i=0;i<a.length;i++){let s=a[i];F_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new ms),n[i].setFromProjectionMatrix(F_,s.coordinateSystem,s.reversedDepth)}return this._count=a.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsBox(e))return!0;return!1}containsPoint(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let a=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)a[i]===void 0&&(a[i]=new ms),a[i].copy(n[i]);return this._count=e._count,this}clone(){return new t().copy(this)}};var Ql=class extends Ga{constructor(e=[],a=$s,n,i,s,r,o,l,u,d){super(e,a,n,i,s,r,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ii=class extends Ga{constructor(e,a,n=Tn,i,s,r,o=ra,l=ra,u,d=bi,p=1){if(d!==bi&&d!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:a,depth:p};super(c,i,s,r,o,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new po(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},jl=class extends Ii{constructor(e,a=Tn,n=$s,i,s,r=ra,o=ra,l,u=bi){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,a,n,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$l=class extends Ga{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},gs=class t extends Ti{constructor(e=1,a=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],p=[],c=0,h=0;S("z","y","x",-1,-1,n,a,e,r,s,0),S("z","y","x",1,-1,n,a,-e,r,s,1),S("x","z","y",1,1,e,n,a,i,r,2),S("x","z","y",1,-1,e,n,-a,i,r,3),S("x","y","z",1,-1,e,a,n,i,s,4),S("x","y","z",-1,-1,e,a,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ra(u,3)),this.setAttribute("normal",new Ra(d,3)),this.setAttribute("uv",new Ra(p,2));function S(L,x,f,m,y,v,A,T,g,C,D){let I=v/g,U=A/C,k=v/2,Z=A/2,R=T/2,W=g+1,j=C+1,q=0,ie=0,B=new G;for(let te=0;te<j;te++){let ae=te*U-Z;for(let Me=0;Me<W;Me++){let Ee=Me*I-k;B[L]=Ee*m,B[x]=ae*y,B[f]=R,u.push(B.x,B.y,B.z),B[L]=0,B[x]=0,B[f]=T>0?1:-1,d.push(B.x,B.y,B.z),p.push(Me/g),p.push(1-te/C),q+=1}}for(let te=0;te<C;te++)for(let ae=0;ae<g;ae++){let Me=c+ae+W*te,Ee=c+ae+W*(te+1),J=c+(ae+1)+W*(te+1),xe=c+(ae+1)+W*te;l.push(Me,Ee,xe),l.push(Ee,J,xe),ie+=6}o.addGroup(h,ie,D),h+=ie,c+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var eu=class t extends Ti{constructor(e=1,a=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:n,heightSegments:i};let s=e/2,r=a/2,o=Math.floor(n),l=Math.floor(i),u=o+1,d=l+1,p=e/o,c=a/l,h=[],S=[],L=[],x=[];for(let f=0;f<d;f++){let m=f*c-r;for(let y=0;y<u;y++){let v=y*p-s;S.push(v,-m,0),L.push(0,0,1),x.push(y/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let y=m+u*f,v=m+u*(f+1),A=m+1+u*(f+1),T=m+1+u*f;h.push(y,v,T),h.push(v,A,T)}this.setIndex(h),this.setAttribute("position",new Ra(S,3)),this.setAttribute("normal",new Ra(L,3)),this.setAttribute("uv",new Ra(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},tu=class t extends Ti{constructor(e=.5,a=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:a,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],u=[],d=[],p=e,c=(a-e)/i,h=new G,S=new Ke;for(let L=0;L<=i;L++){for(let x=0;x<=n;x++){let f=s+x/n*r;h.x=p*Math.cos(f),h.y=p*Math.sin(f),l.push(h.x,h.y,h.z),u.push(0,0,1),S.x=(h.x/a+1)/2,S.y=(h.y/a+1)/2,d.push(S.x,S.y)}p+=c}for(let L=0;L<i;L++){let x=L*(n+1);for(let f=0;f<n;f++){let m=f+x,y=m,v=m+n+1,A=m+n+2,T=m+1;o.push(y,v,T),o.push(v,A,T)}}this.setIndex(o),this.setAttribute("position",new Ra(l,3)),this.setAttribute("normal",new Ra(u,3)),this.setAttribute("uv",new Ra(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function tr(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];if(z_(i))i.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone();else if(Array.isArray(i))if(z_(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[a][n]=s}else e[a][n]=i.slice();else e[a][n]=i}}return e}function Ma(t){let e={};for(let a=0;a<t.length;a++){let n=tr(t[a]);for(let i in n)e[i]=n[i]}return e}function z_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function TT(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function nx(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var PM={clone:tr,merge:Ma},IT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ET=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IT,this.fragmentShader=ET,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=TT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?a.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?a.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?a.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?a.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?a.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?a.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?a.uniforms[i]={type:"m4",value:r.toArray()}:a.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(a.extensions=n),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=a[i.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Dt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ad=class extends Wn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},au=class extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var nd=class extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},id=class extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function so(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Bf(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var xs=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sd=class extends xs{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vg,endingEnd:vg}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case yg:s=e,o=2*a-n;break;case _g:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case yg:r=e,l=2*n-a;break;case _g:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,d=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,h=this._weightNext,S=(n-a)/(i-a),L=S*S,x=L*S,f=-c*x+2*c*L-c*S,m=(1+c)*x+(-1.5-2*c)*L+(-.5+c)*S+1,y=(-1-h)*x+(1.5+h)*L+.5*S,v=h*x-h*L;for(let A=0;A!==o;++A)s[A]=f*r[d+A]+m*r[u+A]+y*r[l+A]+v*r[p+A];return s}},rd=class extends xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(n-a)/(i-a),p=1-d;for(let c=0;c!==o;++c)s[c]=r[u+c]*p+r[l+c]*d;return s}},od=class extends xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ld=class extends xs{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let S=(n-a)/(i-a),L=1-S;for(let x=0;x!==o;++x)s[x]=r[u+x]*L+r[l+x]*S;return s}let c=o*2,h=e-1;for(let S=0;S!==o;++S){let L=r[u+S],x=r[l+S],f=h*c+S*2,m=p[f],y=p[f+1],v=e*c+S*2,A=d[v],T=d[v+1],g=RT(n,a,m,A,i);s[S]=UM(g,L,y,T,x)}return s}};function UM(t,e,a,n,i){let s=1-t;return s*s*s*e+3*s*s*t*a+3*s*t*t*n+t*t*t*i}function wT(t,e,a,n,i){let s=1-t;return 3*s*s*(a-e)+6*s*t*(n-a)+3*t*t*(i-n)}function RT(t,e,a,n,i){let s=(t-e)/(i-e);for(let r=0;r<8;r++){let o=UM(s,e,a,n,i)-t;if(Math.abs(o)<1e-10)break;let l=wT(s,e,a,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var nn=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(a,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Bf(e.settings)&&(n.settings={inTangents:so(e.settings.inTangents,Array),outTangents:so(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new ld(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case Hl:a=this.InterpolantFactoryMethodDiscrete;break;case Jf:a=this.InterpolantFactoryMethodLinear;break;case zf:a=this.InterpolantFactoryMethodSmooth;break;case Sg:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hl;case this.InterpolantFactoryMethodLinear:return Jf;case this.InterpolantFactoryMethodSmooth:return zf;case this.InterpolantFactoryMethodBezier:return Sg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e;Bf(this.settings)&&(k_(this.settings.inTangents,e),k_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e;Bf(this.settings)&&(H_(this.settings.inTangents,e),H_(this.settings.outTangents,e))}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&YA(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Oe("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zf,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*n,c=p-n,h=p+n;for(let S=0;S!==n;++S){let L=a[p+S];if(L!==a[c+S]||L!==a[h+S]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*n,c=r*n;for(let h=0;h!==n;++h)a[c+h]=a[p+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,Bf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function k_(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]+=e}function H_(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]*=e}nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=Jf;var Ss=class extends nn{constructor(e,a,n){super(e,a,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Hl;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ud=class extends nn{constructor(e,a,n,i){super(e,a,n,i)}};ud.prototype.ValueTypeName="color";var cd=class extends nn{constructor(e,a,n,i){super(e,a,n,i)}};cd.prototype.ValueTypeName="number";var fd=class extends xs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let d=u+o;u!==d;u+=4)qn.slerpFlat(s,0,r,u-o,r,u,l);return s}},nu=class extends nn{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new fd(this.times,this.values,this.getValueSize(),e)}};nu.prototype.ValueTypeName="quaternion";nu.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends nn{constructor(e,a,n){super(e,a,n)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Hl;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var dd=class extends nn{constructor(e,a,n,i){super(e,a,n,i)}};dd.prototype.ValueTypeName="vector";var hd=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,c=u.length;p<c;p+=2){let h=u[p],S=u[p+1];if(h.global&&(h.lastIndex=0),h.test(d))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},NM=new hd,pd=class{constructor(e){this.manager=e!==void 0?e:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};pd.DEFAULT_MATERIAL_NAME="__DEFAULT";var vo=class extends _a{static registerNode(e){this.prototype._lightNode=e}constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}},iu=class extends vo{constructor(e,a,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_a.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(a)}copy(e,a){return super.copy(e,a),this.groundColor.copy(e.groundColor),this}toJSON(e){let a=super.toJSON(e);return a.object.groundColor=this.groundColor.getHex(),a}},xg=new Dt,G_=new G,V_=new G,su=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Va,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;G_.setFromMatrixPosition(e.matrixWorld),a.position.copy(G_),V_.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(V_),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,n,i){xg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xg,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,u=i?i.y/s.y:0;e.coordinateSystem===co||e.reversedDepth?a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),a.multiply(xg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Of=new G,Ff=new qn,zn=new G,ru=class extends _a{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Of,Ff,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Of,Ff,zn.set(1,1,1)).invert()}updateWorldMatrix(e,a,n=!1){super.updateWorldMatrix(e,a,n),this.matrixWorld.decompose(Of,Ff,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Of,Ff,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new G,q_=new Ke,W_=new Ke,ya=class extends ru{constructor(e=50,a=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=ho*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,a){return this.getViewBounds(e,q_,W_),a.subVectors(W_,q_)}setViewOffset(e,a,n,i,s,r){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(zl*.5*this.fov)/this.zoom,n=2*a,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,a-=r.offsetY*n/u,i*=r.width/l,n*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var Mg=class extends su{constructor(){super(new ya(90,1,.5,500)),this.isPointLightShadow=!0}},ou=class extends vo{constructor(e,a,n=0,i=2){super(e,a),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,a){return super.copy(e,a),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.distance=this.distance,a.object.decay=this.decay,a.object.shadow=this.shadow.toJSON(),a}},lu=class extends ru{constructor(e=-1,a=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+a,l=i-a;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},Lg=class extends su{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},uu=class extends vo{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_a.DEFAULT_UP),this.updateMatrix(),this.target=new _a,this.shadow=new Lg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var ro=-90,oo=1,yo=class extends _a{constructor(e,a,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ya(ro,oo,e,a);i.layers=this.layers,this.add(i);let s=new ya(ro,oo,e,a);s.layers=this.layers,this.add(s);let r=new ya(ro,oo,e,a);r.layers=this.layers,this.add(r);let o=new ya(ro,oo,e,a);o.layers=this.layers,this.add(o);let l=new ya(ro,oo,e,a);l.layers=this.layers,this.add(l);let u=new ya(ro,oo,e,a);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[n,i,s,r,o,l]=a;for(let u of a)this.remove(u);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of a)this.add(u),u.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,d]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let L=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,o),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),n.texture.mipmapsAutoUpdate=L,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,d),e.setRenderTarget(p,c,h),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},md=class extends ya{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ix="\\[\\]\\.:\\/",DT=new RegExp("["+ix+"]","g"),sx="[^"+ix+"]",PT="[^"+ix.replace("\\.","")+"]",UT=/((?:WC+[\/:])*)/.source.replace("WC",sx),NT=/(WCOD+)?/.source.replace("WCOD",PT),BT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sx),OT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sx),FT=new RegExp("^"+UT+NT+BT+OT+"$"),zT=["material","materials","bones","map"],Cg=class{constructor(e,a,n){let i=n||Rt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},Rt=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(DT,"")}static parseTrackName(e){let a=FT.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);zT.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Oe("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Cg;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kR=new Float32Array(1);var X_=new Dt,cu=class{constructor(e,a,n=0,i=1/0){this.ray=new Jl(e,a),this.near=n,this.far=i,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):Oe("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return X_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X_),this}intersectObject(e,a=!0,n=[]){return bg(e,this,n,a),n.sort(Y_),n}intersectObjects(e,a=!0,n=[]){for(let i=0,s=e.length;i<s;i++)bg(e[i],this,n,a);return n.sort(Y_),n}};function Y_(t,e){return t.distance-e.distance}function bg(t,e,a,n){let i=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(i=!1),i===!0&&n===!0){let s=t.children;for(let r=0,o=s.length;r<o;r++)bg(s[r],e,a,!0)}}var fu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let a=performance.now();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}};var fx=class fx{constructor(e,a,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let n=0;n<4;n++)this.elements[n]=e[n+a];return this}set(e,a,n,i){let s=this.elements;return s[0]=e,s[2]=a,s[1]=n,s[3]=i,this}};fx.prototype.isMatrix2=!0;var Ag=fx;function rx(t,e,a,n){let i=kT(n);switch(a){case Wg:return t*e;case Yg:return t*e/i.components*i.byteLength;case Cd:return t*e/i.components*i.byteLength;case _s:return t*e*2/i.components*i.byteLength;case bd:return t*e*2/i.components*i.byteLength;case Xg:return t*e*3/i.components*i.byteLength;case wn:return t*e*4/i.components*i.byteLength;case Ad:return t*e*4/i.components*i.byteLength;case mu:case gu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xu:case Su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Id:case wd:return Math.max(t,16)*Math.max(e,8)/4;case Td:case Ed:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Dd:case Ud:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pd:case vu:case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qd:case jd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yu:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function kT(t){switch(t){case Va:case Hg:return{byteLength:1,components:1};case Co:case Gg:case En:return{byteLength:2,components:1};case Md:case Ld:return{byteLength:2,components:4};case Tn:case _d:case In:return{byteLength:4,components:1};case Vg:case qg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function nL(){let t=null,e=!1,a=null,n=null;function i(s,r){n=t.requestAnimationFrame(i),a(s,r)}return{start:function(){e!==!0&&a!==null&&t!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function GT(t){let e=new WeakMap;function a(o,l){let u=o.array,d=o.usage,p=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,d),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){let d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((h,S)=>h.start-S.start);let c=0;for(let h=1;h<p.length;h++){let S=p[c],L=p[h];L.start<=S.start+S.count+1?S.count=Math.max(S.count,L.start+L.count-S.start):(++c,p[c]=L)}p.length=c+1;for(let h=0,S=p.length;h<S;h++){let L=p[h];t.bufferSubData(u,L.start*d.BYTES_PER_ELEMENT,d,L.start,L.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,a(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}var VT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$T=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,a1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,d1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S1="gl_FragColor = linearToOutputTexel( gl_FragColor );",v1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,U1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,W1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aI=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,SI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_I=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,II=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OI=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,GI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WI=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZI=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KI=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JI=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QI=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$I=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:VT,alphahash_pars_fragment:qT,alphamap_fragment:WT,alphamap_pars_fragment:XT,alphatest_fragment:YT,alphatest_pars_fragment:ZT,aomap_fragment:KT,aomap_pars_fragment:JT,batching_pars_vertex:QT,batching_vertex:jT,begin_vertex:$T,beginnormal_vertex:e1,bsdfs:t1,iridescence_fragment:a1,bumpmap_pars_fragment:n1,clipping_planes_fragment:i1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:o1,color_fragment:l1,color_pars_fragment:u1,color_pars_vertex:c1,color_vertex:f1,common:d1,defaultnormal_vertex:h1,displacementmap_pars_vertex:p1,displacementmap_vertex:m1,emissivemap_fragment:g1,emissivemap_pars_fragment:x1,colorspace_fragment:S1,colorspace_pars_fragment:v1,envmap_fragment:y1,envmap_common_pars_fragment:_1,envmap_pars_fragment:M1,envmap_pars_vertex:L1,envmap_physical_pars_fragment:U1,envmap_vertex:C1,fog_vertex:b1,fog_pars_vertex:A1,fog_fragment:T1,fog_pars_fragment:I1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:w1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:D1,lights_pars_begin:P1,lights_toon_fragment:N1,lights_toon_pars_fragment:B1,lights_phong_fragment:O1,lights_phong_pars_fragment:F1,lights_physical_fragment:z1,lights_physical_pars_fragment:k1,lights_fragment_begin:H1,lights_fragment_maps:G1,lights_fragment_end:V1,lightprobes_pars_fragment:q1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:X1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:Z1,map_fragment:K1,map_pars_fragment:J1,map_particle_fragment:Q1,map_particle_pars_fragment:j1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:eI,morphinstance_vertex:tI,morphcolor_vertex:aI,morphnormal_vertex:nI,morphtarget_pars_vertex:iI,morphtarget_vertex:sI,normal_fragment_begin:rI,normal_fragment_maps:oI,normal_pars_fragment:lI,normal_pars_vertex:uI,normal_vertex:cI,normalmap_pars_fragment:fI,clearcoat_normal_fragment_begin:dI,clearcoat_normal_fragment_maps:hI,clearcoat_pars_fragment:pI,iridescence_pars_fragment:mI,opaque_fragment:gI,packing:xI,premultiplied_alpha_fragment:SI,project_vertex:vI,dithering_fragment:yI,dithering_pars_fragment:_I,roughnessmap_fragment:MI,roughnessmap_pars_fragment:LI,shadowmap_pars_fragment:CI,shadowmap_pars_vertex:bI,shadowmap_vertex:AI,shadowmask_pars_fragment:TI,skinbase_vertex:II,skinning_pars_vertex:EI,skinning_vertex:wI,skinnormal_vertex:RI,specularmap_fragment:DI,specularmap_pars_fragment:PI,tonemapping_fragment:UI,tonemapping_pars_fragment:NI,transmission_fragment:BI,transmission_pars_fragment:OI,uv_pars_fragment:FI,uv_pars_vertex:zI,uv_vertex:kI,worldpos_vertex:HI,background_vert:GI,background_frag:VI,backgroundCube_vert:qI,backgroundCube_frag:WI,cube_vert:XI,cube_frag:YI,depth_vert:ZI,depth_frag:KI,distance_vert:JI,distance_frag:QI,equirect_vert:jI,equirect_frag:$I,linedashed_vert:eE,linedashed_frag:tE,meshbasic_vert:aE,meshbasic_frag:nE,meshlambert_vert:iE,meshlambert_frag:sE,meshmatcap_vert:rE,meshmatcap_frag:oE,meshnormal_vert:lE,meshnormal_frag:uE,meshphong_vert:cE,meshphong_frag:fE,meshphysical_vert:dE,meshphysical_frag:hE,meshtoon_vert:pE,meshtoon_frag:mE,points_vert:gE,points_frag:xE,shadow_vert:SE,shadow_frag:vE,sprite_vert:yE,sprite_frag:_E},ve={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Zn={basic:{uniforms:Ma([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ma([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ma([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ma([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ma([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ma([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ma([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ma([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ma([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ma([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ma([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Ma([ve.common,ve.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Ma([ve.lights,ve.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Zn.physical={uniforms:Ma([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var ih={r:0,b:0,g:0},ME=new Dt,iL=new ze;iL.set(-1,0,0,0,1,0,0,0,1);function LE(t,e,a,n,i,s){let r=new We(0),o=i===!0?0:1,l,u,d=null,p=0,c=null;function h(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let v=m.backgroundBlurriness>0;y=e.get(y,v)}return y}function S(m){let y=!1,v=h(m);v===null?x(r,o):v&&v.isColor&&(x(v,1),y=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?a.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function L(m,y){let v=h(y);v&&v.isCubeTexture?(u===void 0&&(u=new ha(new gs(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:tr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Pa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ME.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(iL),u.material.toneMapped=at.getTransfer(v.colorSpace)!==dt,(d!==v||p!==v.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,p=v.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ha(new eu(2,2),new Wn({name:"BackgroundMaterial",uniforms:tr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=at.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,d=v,p=v.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,y){m.getRGB(ih,nx(t)),a.buffers.color.setClear(ih.r,ih.g,ih.b,y,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,x(r,o)},render:S,addToRenderList:L,dispose:f}}function CE(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,r=!1;function o(U,k,Z,R,W){let j=!1,q=p(U,R,Z,k);s!==q&&(s=q,u(s.object)),j=h(U,R,Z,W),j&&S(U,R,Z,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,v(U,k,Z,R),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(U){return t.bindVertexArray(U)}function d(U){return t.deleteVertexArray(U)}function p(U,k,Z,R){let W=R.wireframe===!0,j=n[k.id];j===void 0&&(j={},n[k.id]=j);let q=U.isInstancedMesh===!0?U.id:0,ie=j[q];ie===void 0&&(ie={},j[q]=ie);let B=ie[Z.id];B===void 0&&(B={},ie[Z.id]=B);let te=B[W];return te===void 0&&(te=c(l()),B[W]=te),te}function c(U){let k=[],Z=[],R=[];for(let W=0;W<a;W++)k[W]=0,Z[W]=0,R[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:R,object:U,attributes:{},index:null}}function h(U,k,Z,R){let W=s.attributes,j=k.attributes,q=0,ie=Z.getAttributes();for(let B in ie)if(ie[B].location>=0){let ae=W[B],Me=j[B];if(Me===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(Me=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(Me=U.instanceColor)),ae===void 0||ae.attribute!==Me||Me&&ae.data!==Me.data)return!0;q++}return s.attributesNum!==q||s.index!==R}function S(U,k,Z,R){let W={},j=k.attributes,q=0,ie=Z.getAttributes();for(let B in ie)if(ie[B].location>=0){let ae=j[B];ae===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor));let Me={};Me.attribute=ae,ae&&ae.data&&(Me.data=ae.data),W[B]=Me,q++}s.attributes=W,s.attributesNum=q,s.index=R}function L(){let U=s.newAttributes;for(let k=0,Z=U.length;k<Z;k++)U[k]=0}function x(U){f(U,0)}function f(U,k){let Z=s.newAttributes,R=s.enabledAttributes,W=s.attributeDivisors;Z[U]=1,R[U]===0&&(t.enableVertexAttribArray(U),R[U]=1),W[U]!==k&&(t.vertexAttribDivisor(U,k),W[U]=k)}function m(){let U=s.newAttributes,k=s.enabledAttributes;for(let Z=0,R=k.length;Z<R;Z++)k[Z]!==U[Z]&&(t.disableVertexAttribArray(Z),k[Z]=0)}function y(U,k,Z,R,W,j,q){q===!0?t.vertexAttribIPointer(U,k,Z,W,j):t.vertexAttribPointer(U,k,Z,R,W,j)}function v(U,k,Z,R){L();let W=R.attributes,j=Z.getAttributes(),q=k.defaultAttributeValues;for(let ie in j){let B=j[ie];if(B.location>=0){let te=W[ie];if(te===void 0&&(ie==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),ie==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){let ae=te.normalized,Me=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;let J=Ee.buffer,xe=Ee.type,_e=Ee.bytesPerElement,we=xe===t.INT||xe===t.UNSIGNED_INT||te.gpuType===_d;if(te.isInterleavedBufferAttribute){let Se=te.data,Fe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Ot=te.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ue=0;Ue<B.locationSize;Ue++)f(B.location+Ue,Se.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)x(B.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,J);for(let Ue=0;Ue<B.locationSize;Ue++)y(B.location+Ue,Me/B.locationSize,xe,ae,Fe*_e,(Ot+Me/B.locationSize*Ue)*_e,we)}else{if(te.isInstancedBufferAttribute){for(let Se=0;Se<B.locationSize;Se++)f(B.location+Se,te.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<B.locationSize;Se++)x(B.location+Se);t.bindBuffer(t.ARRAY_BUFFER,J);for(let Se=0;Se<B.locationSize;Se++)y(B.location+Se,Me/B.locationSize,xe,ae,Me*_e,Me/B.locationSize*Se*_e,we)}}else if(q!==void 0){let ae=q[ie];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(B.location,ae);break;case 3:t.vertexAttrib3fv(B.location,ae);break;case 4:t.vertexAttrib4fv(B.location,ae);break;default:t.vertexAttrib1fv(B.location,ae)}}}}m()}function A(){D();for(let U in n){let k=n[U];for(let Z in k){let R=k[Z];for(let W in R){let j=R[W];for(let q in j)d(j[q].object),delete j[q];delete R[W]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let k=n[U.id];for(let Z in k){let R=k[Z];for(let W in R){let j=R[W];for(let q in j)d(j[q].object),delete j[q];delete R[W]}}delete n[U.id]}function g(U){for(let k in n){let Z=n[k];for(let R in Z){let W=Z[R];if(W[U.id]===void 0)continue;let j=W[U.id];for(let q in j)d(j[q].object),delete j[q];delete W[U.id]}}}function C(U){for(let k in n){let Z=n[k],R=U.isInstancedMesh===!0?U.id:0,W=Z[R];if(W!==void 0){for(let j in W){let q=W[j];for(let ie in q)d(q[ie].object),delete q[ie];delete W[j]}delete Z[R],Object.keys(Z).length===0&&delete n[k]}}}function D(){I(),r=!0,s!==i&&(s=i,u(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:C,releaseStatesOfProgram:g,initAttributes:L,enableAttribute:x,disableUnusedAttributes:m}}function bE(t,e,a){let n;function i(l){n=l}function s(l,u){t.drawArrays(n,l,u),a.update(u,n,1)}function r(l,u,d){d!==0&&(t.drawArraysInstanced(n,l,u,d),a.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let c=0;for(let h=0;h<d;h++)c+=u[h];a.update(c,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function AE(t,e,a,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(g){return!(g!==wn&&n.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let C=g===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Va&&g!==In&&!C&&n.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=a.precision!==void 0?a.precision:"highp",d=l(u);d!==u&&(Ne("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let p=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),c=a.logarithmicDepthBuffer===!0&&p===!1;a.reversedDepthBuffer===!0&&p===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),a.logarithmicDepthBuffer===!0&&p===!0&&Ne("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:c,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:S,maxTextureSize:L,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:v,maxSamples:A,samples:T}}function TE(t){let e=this,a=null,n=0,i=!1,s=!1,r=new An,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let h=p.length!==0||c||n!==0||i;return i=c,n=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){a=d(p,c,0)},this.setState=function(p,c,h){let S=p.clippingPlanes,L=p.clipIntersection,x=p.clipShadows,f=t.get(p);if(!i||S===null||S.length===0||s&&!x)s?d(null):u();else{let m=s?0:n,y=m*4,v=f.clippingState||null;l.value=v,v=d(S,c,y,h);for(let A=0;A!==y;++A)v[A]=a[A];f.clippingState=v,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==a&&(l.value=a,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,c,h,S){let L=p!==null?p.length:0,x=null;if(L!==0){if(x=l.value,S!==!0||x===null){let f=h+L*4,m=c.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<f)&&(x=new Float32Array(f));for(let y=0,v=h;y!==L;++y,v+=4)r.copy(p[y]).applyMatrix4(m,o),r.normal.toArray(x,v),x[v+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,x}}var Lu=class extends an{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ql(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gs(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pa,blending:Qs});s.uniforms.tEquirect.value=a;let r=new ha(i,s),o=a.minFilter;return a.minFilter===Ei&&(a.minFilter=Da),new yo(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,n,i);e.setRenderTarget(s)}},BM=256,IE=3,EE=20,sL=256,rL=16,wE=3,RE=new G,DE=new We,rh=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yo(1,10,null),this._boxMesh=new ha(new gs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,a=0,n=.1,i=100,s={}){let{size:r=256,position:o=RE}=s,l=this._renderer;this._setSize(r);let u=this._allocateTarget(),d=this._getSourceTarget(!0);a>0&&(d.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,c=l.autoClearColor,h=l.autoClearDepth,S=l.autoClearStencil,L=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,L===null&&(e.background=l.getClearColor(DE));let x=new yo(n,i,d);return x.position.copy(o),x.update(l,e),l.autoClear=p,l.autoClearColor=c,l.autoClearDepth=h,l.autoClearStencil=S,e.background=L,a>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(u,a)),this._applyPMREM(u),u}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=FM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,a){return a>0?1-Math.sqrt(1-e/a):0}_setSize(e){this._cubeSize=Math.max(BM,ex(e))}_fromTexture(e,a){e.mapping===$s||e.mapping===Lo?this._setSize(e.image.length===0?BM:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=a||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,a=OM(e,!1,!1),n=Math.log2(e)-IE;for(let i=0;i<=n;i++)a.texture.mipmaps.push({width:e>>i,height:e>>i});return a.texture.name="PMREM",a.texture.isPMREMTexture=!0,a}_getSourceTarget(e=!1){let a=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==a||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=OM(a,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,a,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=a;let r=e.width>>a;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let a;e.mapping===$s||e.mapping===Lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=zM()),a=this._cubemapMaterial,a.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=FM()),a=this._equirectMaterial),a.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,a)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=PE(),this._integrationMaterial=UE());let a=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(a/rL);for(let r=0;r<=n;r++){let o=t.lodToRoughness(r,n);if(r>n-wE)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(a)+.5*Math.log2(6/(sL*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,a){this._blurMaterial===null&&(this._blurMaterial=NE());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(a,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function OM(t,e,a){return new Lu(t,{minFilter:Ei,generateMipmaps:e,type:En,colorSpace:Gl,depthBuffer:a})}function Cu(t,e,a){return new Wn({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:a,side:Pa,blending:Qs,depthTest:!1,depthWrite:!1})}function PE(){return Cu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sL}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function UE(){return Cu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rL}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function NE(){return Cu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${EE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function FM(){return Cu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zM(){return Cu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function BE(t){let e=new WeakMap,a=new WeakMap,n=null;function i(c,h=!1){return c==null?null:h?r(c):s(c)}function s(c){if(c&&c.isTexture){let h=c.mapping;if(h===Sd||h===vd)if(e.has(c)){let S=e.get(c).texture;return o(S,c.mapping)}else{let S=c.image;if(S&&S.height>0){let L=new Lu(S.height);return L.fromEquirectangularTexture(t,c),e.set(c,L),c.addEventListener("dispose",u),o(L.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture&&c.isPMREMTexture!==!0){let h=c.mapping,S=h===Sd||h===vd,L=h===$s||h===Lo;if(S||L){let x=a.get(c),f=x!==void 0?x.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return n===null&&(n=new rh(t)),x=S?n.fromEquirectangular(c,x):n.fromCubemap(c,x),x.texture.pmremVersion=c.pmremVersion,a.set(c,x),x.texture;if(x!==void 0)return x.texture;{let m=c.image;return S&&m&&m.height>0||L&&m&&l(m)?(n===null&&(n=new rh(t)),x=S?n.fromEquirectangular(c):n.fromCubemap(c),x.texture.pmremVersion=c.pmremVersion,a.set(c,x),c.addEventListener("dispose",d),x.texture):null}}}return c}function o(c,h){return h===Sd?c.mapping=$s:h===vd&&(c.mapping=Lo),c}function l(c){let h=0,S=6;for(let L=0;L<S;L++)c[L]!==void 0&&h++;return h===S}function u(c){let h=c.target;h.removeEventListener("dispose",u);let S=e.get(h);S!==void 0&&(e.delete(h),S.dispose())}function d(c){let h=c.target;h.removeEventListener("dispose",d);let S=a.get(h);S!==void 0&&(a.delete(h),S.dispose())}function p(){e=new WeakMap,a=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function OE(t){let e={};function a(n){if(e[n]!==void 0)return e[n];let i=t.getExtension(n);return e[n]=i,i}return{has:function(n){return a(n)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(n){let i=a(n);return i===null&&Fl("WebGLRenderer: "+n+" extension not supported."),i}}}function FE(t,e,a,n){let i={},s=new WeakMap,r=new FinalizationRegistry(S=>delete i[S]);function o(S){l(S.target)}function l(S){S.index!==null&&e.remove(S.index);for(let x in S.attributes)e.remove(S.attributes[x]);S.removeEventListener("dispose",o),delete i[S.id],r.unregister(S);let L=s.get(S);L&&(e.remove(L),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function u(S,L){return i[L.id]!==void 0||(L.addEventListener("dispose",o),i[L.id]=new WeakRef(L),r.register(L,L.id,L),a.memory.geometries++),L}function d(S){let L=S.attributes;for(let x in L)e.update(L[x],t.ARRAY_BUFFER)}function p(S){let L=S.index,x=S.attributes.position,f=0;if(x===void 0)return;let m=L!==null?L.array.length:x.array.length/3-1,y=x.count>=65535?Kl:Zl,v=new y(Math.ceil(m/3)*6,1),A=v.array;if(L!==null){let g=L.array;f=L.version;for(let C=0,D=0;C<m;C+=3){let I=g[C+0],U=g[C+1],k=g[C+2];A[D++]=I,A[D++]=U,A[D++]=U,A[D++]=k,A[D++]=k,A[D++]=I}}else{f=x.version;for(let g=0,C=0;g<m;g+=3){let D=g+0,I=g+1,U=g+2;A[C++]=D,A[C++]=I,A[C++]=I,A[C++]=U,A[C++]=U,A[C++]=D}}v.version=f;let T=s.get(S);T&&e.remove(T),s.set(S,v)}function c(S){let L=s.get(S);if(L){let x=S.index;x!==null&&L.version<x.version&&p(S)}else p(S);return s.get(S)}function h(){for(let S in i){let L=i[S].deref();L!==void 0&&l(L)}}return{get:u,update:d,getWireframeAttribute:c,dispose:h}}function zE(t,e,a){let n;function i(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,c){t.drawElements(n,c,s,p*r),a.update(c,n,1)}function u(p,c,h){h!==0&&(t.drawElementsInstanced(n,c,s,p*r,h),a.update(c,n,h))}function d(p,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,p,0,h);let L=0;for(let x=0;x<h;x++)L+=c[x];a.update(L,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function kE(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(a.calls++,r){case t.TRIANGLES:a.triangles+=o*(s/3);break;case t.LINES:a.lines+=o*(s/2);break;case t.LINE_STRIP:a.lines+=o*(s-1);break;case t.LINE_LOOP:a.lines+=o*s;break;case t.POINTS:a.points+=o*s;break;default:Oe("WebGLInfo: Unknown draw mode:",r);break}}function i(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:n}}function HE(t,e,a){let n=new WeakMap,i=new Bt;function s(r,o,l){let u=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,c=n.get(o);if(c===void 0||c.count!==p){let D=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",D)};c!==void 0&&c.texture.dispose();let h=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,L=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],y=0;h===!0&&(y=1),S===!0&&(y=2),L===!0&&(y=3);let v=o.attributes.position.count*y,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*A*4*p),g=new Wl(T,v,A,p);g.type=In,g.needsUpdate=!0;let C=y*4;for(let I=0;I<p;I++){let U=x[I],k=f[I],Z=m[I],R=v*A*4*I;for(let W=0;W<U.count;W++){let j=W*C;h===!0&&(i.fromBufferAttribute(U,W),T[R+j+0]=i.x,T[R+j+1]=i.y,T[R+j+2]=i.z,T[R+j+3]=0),S===!0&&(i.fromBufferAttribute(k,W),T[R+j+4]=i.x,T[R+j+5]=i.y,T[R+j+6]=i.z,T[R+j+7]=0),L===!0&&(i.fromBufferAttribute(Z,W),T[R+j+8]=i.x,T[R+j+9]=i.y,T[R+j+10]=i.z,T[R+j+11]=Z.itemSize===4?i.w:1)}}c={count:p,texture:g,size:new Ke(v,A)},n.set(o,c),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,a);else{let h=0;for(let L=0;L<u.length;L++)h+=u[L];let S=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function GE(t,e,a,n,i){let s=new WeakMap;function r(u){let d=i.render.frame,p=u.geometry,c=e.get(u,p);if(s.get(c)!==d&&(e.update(c),s.set(c,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(a.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&a.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return c}function o(){s=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),a.remove(d.instanceMatrix),d.instanceColor!==null&&a.remove(d.instanceColor)}return{update:r,dispose:o}}var VE={[Ug]:"LINEAR_TONE_MAPPING",[Ng]:"REINHARD_TONE_MAPPING",[Bg]:"CINEON_TONE_MAPPING",[hu]:"ACES_FILMIC_TONE_MAPPING",[Fg]:"AGX_TONE_MAPPING",[zg]:"NEUTRAL_TONE_MAPPING",[Og]:"CUSTOM_TONE_MAPPING"};function qE(t,e,a,n,i,s){let r=new an(e,a,{type:t,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,d=new Ti;d.setAttribute("position",new Ra([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ra([0,2,0,0,2,0],2));let p=new ad({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ha(d,p),h=new lu(-1,1,1,-1,0,1),S=null,L=null,x=!1,f,m=null,y=[],v=!1;this.setSize=function(A,T){r.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let g=0;g<y.length;g++){let C=y[g];C.setSize&&C.setSize(A,T)}},this.setEffects=function(A){y=A,v=y.length>0&&y[0].isRenderPass===!0;let T=r.width,g=r.height;y.length>0&&o===null&&(o=new an(T,g,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new an(T,g,{type:En,depthBuffer:!1,stencilBuffer:!1}));let C=i===!0&&y.some(D=>D.needsDepthTexture===!0);C!==(r.depthTexture!==null)&&(C===!0&&u===null&&(u=new Ii(T,g),s===!0&&(u.format=wi,u.type=er)),r.dispose(),r.depthTexture=C?u:null,r.resolveDepthBuffer=C,r.storeMultisampledDepthBuffer=C);for(let D=0;D<y.length;D++){let I=y[D];I.setSize&&I.setSize(T,g),C&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(u)}},this.begin=function(A,T){if(x||A.toneMapping===Xn&&y.length===0)return!1;if(m=T,T!==null){let g=T.width,C=T.height;(r.width!==g||r.height!==C)&&this.setSize(g,C)}return v===!1&&A.setRenderTarget(r),f=A.toneMapping,A.toneMapping=Xn,!0},this.hasRenderPass=function(){return v},this.end=function(A,T){A.toneMapping=f,x=!0;let g=r,C=o;for(let D=0;D<y.length;D++){let I=y[D];I.enabled!==!1&&(I.render(A,C,g,T),I.needsSwap!==!1&&(g=C,C=C===o?l:o))}if(S!==A.outputColorSpace||L!==A.toneMapping){S=A.outputColorSpace,L=A.toneMapping,p.defines={},at.getTransfer(S)===dt&&(p.defines.SRGB_TRANSFER="");let D=VE[L];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(m),A.render(c,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),p.dispose()}}var oL=new Ga,lL=new Ii(1,1),uL=new jl(1),cL=new Wl,fL=new $f,dL=new Ql,kM=[],HM=[],GM=new Float32Array(16),VM=new Float32Array(9),qM=new Float32Array(4);function To(t,e,a){let n=t[0];if(n<=0||n>0)return t;let i=e*a,s=kM[i];if(s===void 0&&(s=new Float32Array(i),kM[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=a,t[r].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let a=0,n=t.length;a<n;a++)if(t[a]!==e[a])return!1;return!0}function ea(t,e){for(let a=0,n=e.length;a<n;a++)t[a]=e[a]}function lh(t,e){let a=HM[e];a===void 0&&(a=new Int32Array(e),HM[e]=a);for(let n=0;n!==e;++n)a[n]=t.allocateTextureUnit();return a}function WE(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function XE(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if($t(a,e))return;t.uniform2fv(this.addr,e),ea(a,e)}}function YE(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if($t(a,e))return;t.uniform3fv(this.addr,e),ea(a,e)}}function ZE(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if($t(a,e))return;t.uniform4fv(this.addr,e),ea(a,e)}}function KE(t,e){let a=this.cache,n=e.elements;if(n===void 0){if($t(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),ea(a,e)}else{if($t(a,n))return;qM.set(n),t.uniformMatrix2fv(this.addr,!1,qM),ea(a,n)}}function JE(t,e){let a=this.cache,n=e.elements;if(n===void 0){if($t(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),ea(a,e)}else{if($t(a,n))return;VM.set(n),t.uniformMatrix3fv(this.addr,!1,VM),ea(a,n)}}function QE(t,e){let a=this.cache,n=e.elements;if(n===void 0){if($t(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),ea(a,e)}else{if($t(a,n))return;GM.set(n),t.uniformMatrix4fv(this.addr,!1,GM),ea(a,n)}}function jE(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function $E(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if($t(a,e))return;t.uniform2iv(this.addr,e),ea(a,e)}}function ew(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if($t(a,e))return;t.uniform3iv(this.addr,e),ea(a,e)}}function tw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if($t(a,e))return;t.uniform4iv(this.addr,e),ea(a,e)}}function aw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function nw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if($t(a,e))return;t.uniform2uiv(this.addr,e),ea(a,e)}}function iw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if($t(a,e))return;t.uniform3uiv(this.addr,e),ea(a,e)}}function sw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if($t(a,e))return;t.uniform4uiv(this.addr,e),ea(a,e)}}function uh(t){return t.version===0&&(t.compareFunction=Jg,t.needsUpdate=!0),t}function rw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?s=uh(lL):s=oL,a.setTexture2D(e||s,i)}function ow(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture3D(e||fL,i)}function lw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=uh(uL):s=dL,a.setTextureCube(e||s,i)}function uw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture2DArray(e||cL,i)}function cw(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return YE;case 35666:return ZE;case 35674:return KE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return jE;case 35667:case 35671:return $E;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return aw;case 36294:return nw;case 36295:return iw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return uw}}function fw(t,e){t.uniform1fv(this.addr,e)}function dw(t,e){let a=To(e,this.size,2);t.uniform2fv(this.addr,a)}function hw(t,e){let a=To(e,this.size,3);t.uniform3fv(this.addr,a)}function pw(t,e){let a=To(e,this.size,4);t.uniform4fv(this.addr,a)}function mw(t,e){let a=To(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function gw(t,e){let a=To(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function xw(t,e){let a=To(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function Sw(t,e){t.uniform1iv(this.addr,e)}function vw(t,e){t.uniform2iv(this.addr,e)}function yw(t,e){t.uniform3iv(this.addr,e)}function _w(t,e){t.uniform4iv(this.addr,e)}function Mw(t,e){t.uniform1uiv(this.addr,e)}function Lw(t,e){t.uniform2uiv(this.addr,e)}function Cw(t,e){t.uniform3uiv(this.addr,e)}function bw(t,e){t.uniform4uiv(this.addr,e)}function Aw(t,e,a){let n=this.cache,i=e.length,s=lh(a,i);$t(n,s)||(t.uniform1iv(this.addr,s),ea(n,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=uh(lL):r=oL;for(let o=0;o!==i;++o)a.setTexture2D(e[o]||r,s[o])}function Tw(t,e,a){let n=this.cache,i=e.length,s=lh(a,i);$t(n,s)||(t.uniform1iv(this.addr,s),ea(n,s));for(let r=0;r!==i;++r)a.setTexture3D(e[r]||fL,s[r])}function Iw(t,e,a){let n=this.cache,i=e.length,s=lh(a,i);$t(n,s)||(t.uniform1iv(this.addr,s),ea(n,s));let r;this.type===t.SAMPLER_CUBE_SHADOW?r=uh(uL):r=dL;for(let o=0;o!==i;++o)a.setTextureCube(e[o]||r,s[o])}function Ew(t,e,a){let n=this.cache,i=e.length,s=lh(a,i);$t(n,s)||(t.uniform1iv(this.addr,s),ea(n,s));for(let r=0;r!==i;++r)a.setTexture2DArray(e[r]||cL,s[r])}function ww(t){switch(t){case 5126:return fw;case 35664:return dw;case 35665:return hw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return xw;case 5124:case 35670:return Sw;case 35667:case 35671:return vw;case 35668:case 35672:return yw;case 35669:case 35673:return _w;case 5125:return Mw;case 36294:return Lw;case 36295:return Cw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Ew}}var px=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.setValue=cw(a.type)}},mx=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=ww(a.type)}},gx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,a[o.id],n)}}},dx=/(\w+)(\])?(\[|\.)?/g;function WM(t,e){t.seq.push(e),t.map[e.id]=e}function Rw(t,e,a){let n=t.name,i=n.length;for(dx.lastIndex=0;;){let s=dx.exec(n),r=dx.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){WM(a,u===void 0?new px(o,t,e):new mx(o,t,e));break}else{let p=a.map[o];p===void 0&&(p=new gx(o),WM(a,p)),a=p}}}var Ao=class{constructor(e,a){this.seq=[],this.map={};let n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(a,r),l=e.getUniformLocation(a,o.name);Rw(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,a,n,i){let s=this.map[a];s!==void 0&&s.setValue(e,n,i)}setOptional(e,a,n){let i=a[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,a,n,i){for(let s=0,r=a.length;s!==r;++s){let o=a[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,a){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in a&&n.push(r)}return n}};function XM(t,e,a){let n=t.createShader(e);return t.shaderSource(n,a),t.compileShader(n),n}var Dw=37297,Pw=0;function Uw(t,e){let a=t.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,a.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${a[r]}`)}return n.join(`
`)}var YM=new ze;function Nw(t){at._getMatrix(YM,at.workingColorSpace,t);let e=`mat3( ${YM.elements.map(a=>a.toFixed(4))} )`;switch(at.getTransfer(t)){case Vl:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ZM(t,e,a){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return a.toUpperCase()+`

`+s+`

`+Uw(t.getShaderSource(e),o)}else return s}function Bw(t,e){let a=Nw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( ${a[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ow={[Ug]:"Linear",[Ng]:"Reinhard",[Bg]:"Cineon",[hu]:"ACESFilmic",[Fg]:"AgX",[zg]:"Neutral",[Og]:"Custom"};function Fw(t,e){let a=Ow[e];return a===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var sh=new G;function zw(){at.getLuminanceCoefficients(sh);let t=sh.x.toFixed(4),e=sh.y.toFixed(4),a=sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mu).join(`
`)}function Hw(t){let e=[];for(let a in t){let n=t[a];n!==!1&&e.push("#define "+a+" "+n)}return e.join(`
`)}function Gw(t,e){let a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),a[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return a}function Mu(t){return t!==""}function KM(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function JM(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function xx(t){return t.replace(Vw,qw)}function qw(t,e){let a=Xe[e];if(a===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xx(a)}var Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function QM(t){return t.replace(Ww,Xw)}function Xw(t,e,a,n){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function jM(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Yw={[du]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function Zw(t){return Yw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kw={[Lo]:"ENVMAP_MODE_REFRACTION"};function Jw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Kw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qw={[Pg]:"ENVMAP_BLENDING_MULTIPLY",[pM]:"ENVMAP_BLENDING_MIX",[mM]:"ENVMAP_BLENDING_ADD"};function jw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Qw[t.combine]||"ENVMAP_BLENDING_NONE"}function $w(t,e,a,n){let i=t.getContext(),s=a.defines,r=a.vertexShader,o=a.fragmentShader,l=Zw(a),u=a.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Jw(a),p=jw(a),c=kw(a),h=Hw(s),S=i.createProgram(),L,x,f=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(L=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(Mu).join(`
`),L.length>0&&(L+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(Mu).join(`
`),x.length>0&&(x+=`
`)):(L=[jM(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+d:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+a.diffuseRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mu).join(`
`),x=[jM(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.envMap?"#define "+d:"",a.envMap?"#define "+p:"",a.envMapPMREM?"#define ENVMAP_MAX_LOD "+a.envMapMaxLod+".0":"",a.envMapPMREM?"#define ENVMAP_SIZE "+a.envMapSize+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Xn?"#define TONE_MAPPING":"",a.toneMapping!==Xn?Xe.tonemapping_pars_fragment:"",a.toneMapping!==Xn?Fw("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Bw("linearToOutputTexel",a.outputColorSpace),zw(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(Mu).join(`
`)),r=xx(r),r=KM(r,a),r=JM(r,a),o=xx(o),o=KM(o,a),o=JM(o,a),r=QM(r),o=QM(o),a.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,L=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,x=["#define varying in",a.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let m=f+L+r,y=f+x+o,v=XM(i,i.VERTEX_SHADER,m),A=XM(i,i.FRAGMENT_SHADER,y);i.attachShader(S,v),i.attachShader(S,A),a.index0AttributeName!==void 0?i.bindAttribLocation(S,0,a.index0AttributeName):a.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function T(I){if(t.debug.checkShaderErrors){let U=i.getProgramInfoLog(S)||"",k=i.getShaderInfoLog(v)||"",Z=i.getShaderInfoLog(A)||"",R=U.trim(),W=k.trim(),j=Z.trim(),q=!0,ie=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,S,v,A);else{let B=ZM(i,v,"vertex"),te=ZM(i,A,"fragment");Oe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+B+`
`+te)}else R!==""?Ne("WebGLProgram: Program Info Log:",R):(W===""||j==="")&&(ie=!1);ie&&(I.diagnostics={runnable:q,programLog:R,vertexShader:{log:W,prefix:L},fragmentShader:{log:j,prefix:x}})}i.deleteShader(v),i.deleteShader(A),g=new Ao(i,S),C=Gw(i,S)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let D=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(S,Dw)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=v,this.fragmentShader=A,this}var eR=0,Sx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,n){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let n of a)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,n=a.get(e);return n===void 0&&(n=new Set,a.set(e,n)),n}_getShaderStage(e){let a=this.shaderCache,n=a.get(e);return n===void 0&&(n=new vx(e),a.set(e,n)),n}},vx=class{constructor(e){this.id=eR++,this.code=e,this.usedTimes=0}};function tR(t){return t===_s||t===vu||t===yu}function aR(t,e,a,n,i,s){let r=new mo,o=new Sx,l=new Set,u=[],d=new Map,p=n.logarithmicDepthBuffer,c={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,C,D,I,U,k){let Z=I.fog,R=U.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,j=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,q=e.get(g.envMap||W,j),ie=c[g.type],B=n.precision;g.precision!==null&&(B=n.getMaxPrecision(g.precision),B!==g.precision&&Ne("WebGLProgram.getParameters:",g.precision,"not supported, using",B,"instead."));let te=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ae=te!==void 0?te.length:0,Me=0;R.morphAttributes.position!==void 0&&(Me=1),R.morphAttributes.normal!==void 0&&(Me=2),R.morphAttributes.color!==void 0&&(Me=3);let Ee,J,xe,_e;if(ie){let ne=Zn[ie];Ee=ne.vertexShader,J=ne.fragmentShader}else{Ee=g.vertexShader,J=g.fragmentShader;let ne=o.getVertexShaderStage(g),Te=o.getFragmentShaderStage(g);o.update(g,ne,Te),xe=ne.id,_e=Te.id}let we=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,Ot=U.isBatchedMesh===!0,Ue=!!g.map,ot=!!g.matcap,qe=!!q,Re=qe&&q.isPMREMTexture===!0,bt=!!g.aoMap,Pt=!!g.lightMap,Ht=!!g.bumpMap&&g.wireframe===!1,xt=!!g.normalMap,Ua=!!g.displacementMap,rt=!!g.emissiveMap,La=!!g.metalnessMap,Ca=!!g.roughnessMap,St=g.anisotropy>0,P=g.clearcoat>0,ba=g.diffuseRoughness>0,vt=g.dispersion>0,Ze=g.retroreflectivity>0,me=g.iridescence>0,At=g.sheen>0,De=g.transmission>0,Pe=St&&!!g.anisotropyMap,b=P&&!!g.clearcoatMap,_=P&&!!g.clearcoatNormalMap,N=P&&!!g.clearcoatRoughnessMap,se=ba&&!!g.diffuseRoughnessMap,$=me&&!!g.iridescenceMap,ue=me&&!!g.iridescenceThicknessMap,ce=At&&!!g.sheenColorMap,Y=At&&!!g.sheenRoughnessMap,K=!!g.specularMap,fe=!!g.specularColorMap,E=!!g.specularIntensityMap,Q=De&&!!g.transmissionMap,X=De&&!!g.thicknessMap,de=!!g.gradientMap,oe=!!g.alphaMap,le=g.alphaTest>0,Ae=!!g.alphaHash,Ge=!!g.extensions,re=Xn;g.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(re=t.toneMapping);let F=Re?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,he={shaderID:ie,shaderType:g.type,shaderName:g.name,vertexShader:Ee,fragmentShader:J,defines:g.defines,customVertexShaderID:xe,customFragmentShaderID:_e,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:B,batching:Ot,batchingColor:Ot&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,outputColorSpace:we===null?t.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ue,matcap:ot,envMap:qe,envMapMode:qe&&q.mapping,envMapPMREM:Re,envMapMaxLod:Re?F.length-1:null,envMapSize:Re?F[0].width:null,aoMap:bt,lightMap:Pt,bumpMap:Ht,normalMap:xt,displacementMap:Ua,emissiveMap:rt,normalMapObjectSpace:xt&&g.normalMapType===SM,normalMapTangentSpace:xt&&g.normalMapType===nh,packedNormalMap:xt&&g.normalMapType===nh&&tR(g.normalMap.format),metalnessMap:La,roughnessMap:Ca,anisotropy:St,anisotropyMap:Pe,clearcoat:P,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:N,diffuseRoughness:ba,diffuseRoughnessMap:se,dispersion:vt,retroreflection:Ze,iridescence:me,iridescenceMap:$,iridescenceThicknessMap:ue,sheen:At,sheenColorMap:ce,sheenRoughnessMap:Y,specularMap:K,specularColorMap:fe,specularIntensityMap:E,transmission:De,transmissionMap:Q,thicknessMap:X,gradientMap:de,opaque:g.transparent===!1&&g.blending===Mo&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:le,alphaHash:Ae,combine:g.combine,mapUv:Ue&&h(g.map.channel),aoMapUv:bt&&h(g.aoMap.channel),lightMapUv:Pt&&h(g.lightMap.channel),bumpMapUv:Ht&&h(g.bumpMap.channel),normalMapUv:xt&&h(g.normalMap.channel),displacementMapUv:Ua&&h(g.displacementMap.channel),emissiveMapUv:rt&&h(g.emissiveMap.channel),metalnessMapUv:La&&h(g.metalnessMap.channel),roughnessMapUv:Ca&&h(g.roughnessMap.channel),anisotropyMapUv:Pe&&h(g.anisotropyMap.channel),clearcoatMapUv:b&&h(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&h(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&h(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&h(g.diffuseRoughnessMap.channel),iridescenceMapUv:$&&h(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&h(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&h(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&h(g.sheenRoughnessMap.channel),specularMapUv:K&&h(g.specularMap.channel),specularColorMapUv:fe&&h(g.specularColorMap.channel),specularIntensityMapUv:E&&h(g.specularIntensityMap.channel),transmissionMapUv:Q&&h(g.transmissionMap.channel),thicknessMapUv:X&&h(g.thicknessMap.channel),alphaMapUv:oe&&h(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(xt||St),vertexNormals:!!R.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!R.attributes.uv&&(Ue||oe),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||R.attributes.normal===void 0&&xt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Me,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:k.filter(ne=>ne.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:Ue&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===dt,decodeVideoTextureEmissive:rt&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===dt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Sn,flipSided:g.side===Pa,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ge&&g.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&g.extensions.multiDraw===!0||Ot)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function L(g){let C=[];if(g.shaderID?C.push(g.shaderID):(C.push(g.customVertexShaderID),C.push(g.customFragmentShaderID)),g.defines!==void 0)for(let D in g.defines)C.push(D),C.push(g.defines[D]);return g.isRawShaderMaterial===!1&&(x(C,g),f(C,g),C.push(t.outputColorSpace)),C.push(g.customProgramCacheKey),C.join()}function x(g,C){g.push(C.precision),g.push(C.outputColorSpace),g.push(C.envMapMode),g.push(C.envMapPMREM),g.push(C.envMapMaxLod),g.push(C.envMapSize),g.push(C.mapUv),g.push(C.alphaMapUv),g.push(C.lightMapUv),g.push(C.aoMapUv),g.push(C.bumpMapUv),g.push(C.normalMapUv),g.push(C.displacementMapUv),g.push(C.emissiveMapUv),g.push(C.metalnessMapUv),g.push(C.roughnessMapUv),g.push(C.anisotropyMapUv),g.push(C.clearcoatMapUv),g.push(C.clearcoatNormalMapUv),g.push(C.clearcoatRoughnessMapUv),g.push(C.diffuseRoughnessMapUv),g.push(C.iridescenceMapUv),g.push(C.iridescenceThicknessMapUv),g.push(C.sheenColorMapUv),g.push(C.sheenRoughnessMapUv),g.push(C.specularMapUv),g.push(C.specularColorMapUv),g.push(C.specularIntensityMapUv),g.push(C.transmissionMapUv),g.push(C.thicknessMapUv),g.push(C.combine),g.push(C.fogExp2),g.push(C.sizeAttenuation),g.push(C.morphTargetsCount),g.push(C.numSunLights),g.push(C.numDirLights),g.push(C.numPointLights),g.push(C.numSpotLights),g.push(C.numSpotLightMaps),g.push(C.numHemiLights),g.push(C.numRectAreaLights),g.push(C.numSunLightShadows),g.push(C.numDirLightShadows),g.push(C.numPointLightShadows),g.push(C.numSpotLightShadows),g.push(C.numSpotLightShadowsWithMaps),g.push(C.numLightProbes),g.push(C.numLightProbeGrids),g.push(C.shadowMapType),g.push(C.toneMapping),g.push(C.numClippingPlanes),g.push(C.numClipIntersection),g.push(C.depthPacking)}function f(g,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.retroreflection&&r.enable(24),C.diffuseRoughness&&r.enable(25),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function m(g){let C=c[g.type],D;if(C){let I=Zn[C];D=PM.clone(I.uniforms)}else D=g.uniforms;return D}function y(g,C){let D=d.get(C);return D!==void 0?++D.usedTimes:(D=new $w(t,C,g,i),u.push(D),d.set(C,D)),D}function v(g){if(--g.usedTimes===0){let C=u.indexOf(g);u[C]=u[u.length-1],u.pop(),d.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:L,getUniforms:m,acquireProgram:y,releaseProgram:v,releaseShaderCache:A,programs:u,dispose:T}}function nR(){let t=new WeakMap;function e(r){return t.has(r)}function a(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:a,remove:n,update:i,dispose:s}}function iR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function $M(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function eL(){let t=[],e=0,a=[],n=[],i=[];function s(){e=0,a.length=0,n.length=0,i.length=0}function r(c){let h=0;return c.isInstancedMesh&&(h+=2),c.isSkinnedMesh&&(h+=1),h}function o(c,h,S,L,x,f){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:h,material:S,materialVariant:r(c),groupOrder:L,renderOrder:c.renderOrder,z:x,group:f},t[e]=m):(m.id=c.id,m.object=c,m.geometry=h,m.material=S,m.materialVariant=r(c),m.groupOrder=L,m.renderOrder=c.renderOrder,m.z=x,m.group=f),e++,m}function l(c,h,S,L,x,f,m){m.reversedDepth===!0&&(x=-x);let y=o(c,h,S,L,x,f);S.transmission>0?n.push(y):S.transparent===!0?i.push(y):a.push(y)}function u(c,h,S,L,x,f){let m=o(c,h,S,L,x,f);S.transmission>0?n.unshift(m):S.transparent===!0?i.unshift(m):a.unshift(m)}function d(c,h){a.length>1&&a.sort(c||iR),n.length>1&&n.sort(h||$M),i.length>1&&i.sort(h||$M)}function p(){for(let c=e,h=t.length;c<h;c++){let S=t[c];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:a,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:d}}function sR(){let t=new WeakMap;function e(n,i){let s=t.get(n),r;return s===void 0?(r=new eL,t.set(n,[r])):i>=s.length?(r=new eL,s.push(r)):r=s[i],r}function a(){t=new WeakMap}return{get:e,dispose:a}}function rR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new G,color:new We};break;case"SpotLight":a={position:new G,direction:new G,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new G,color:new We,distance:0,decay:0};break;case"HemisphereLight":a={direction:new G,skyColor:new We,groundColor:new We};break;case"RectAreaLight":a={color:new We,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=a,a}}}function oR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var lR=0;function uR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function cR(t){let e=new rR,a=oR(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new G);let i=new G,s=new Dt,r=new Dt;function o(u){let d=0,p=0,c=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let h=0,S=0,L=0,x=0,f=0,m=0,y=0,v=0,A=0,T=0,g=0,C=0,D=0,I=0;u.sort(uR);for(let k=0,Z=u.length;k<Z;k++){let R=u[k],W=R.color,j=R.intensity,q=R.distance,ie=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===_s?ie=R.shadow.map.texture:ie=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=W.r*j,p+=W.g*j,c+=W.b*j;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],j);I++}else if(R.isSunLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,ae=a.get(R);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[S]=ae,n.sunShadowMap[S]=ie;let Me=te.getViewportCount();for(let Ee=0;Ee<Me;Ee++)n.sunShadowMatrix[L+Ee]=te.getMatrix(Ee),n.sunShadowCascade[L+Ee]=te._cascadeData[Ee];L+=Me,S++}n.sun[h]=B,h++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let te=R.shadow,ae=a.get(R);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,n.directionalShadow[x]=ae,n.directionalShadowMap[x]=ie,n.directionalShadowMatrix[x]=R.shadow.matrix,A++}n.directional[x]=B,x++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(W).multiplyScalar(j),B.distance=q,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[m]=B;let te=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,te.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[m]=te.matrix,R.castShadow){let ae=a.get(R);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,n.spotShadow[m]=ae,n.spotShadowMap[m]=ie,g++}m++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(W).multiplyScalar(j),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[y]=B,y++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let te=R.shadow,ae=a.get(R);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,ae.shadowCameraNear=te.camera.near,ae.shadowCameraFar=te.camera.far,n.pointShadow[f]=ae,n.pointShadowMap[f]=ie,n.pointShadowMatrix[f]=R.shadow.matrix,T++}n.point[f]=B,f++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(j),B.groundColor.copy(R.groundColor).multiplyScalar(j),n.hemi[v]=B,v++}}y>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=c;let U=n.hash;(U.sunLength!==h||U.directionalLength!==x||U.pointLength!==f||U.spotLength!==m||U.rectAreaLength!==y||U.hemiLength!==v||U.numSunShadows!==S||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==g||U.numSpotMaps!==C||U.numLightProbes!==I)&&(n.sun.length=h,n.directional.length=x,n.spot.length=m,n.rectArea.length=y,n.point.length=f,n.hemi.length=v,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=L,n.sunShadowCascade.length=L,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+C-D,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,U.sunLength=h,U.directionalLength=x,U.pointLength=f,U.spotLength=m,U.rectAreaLength=y,U.hemiLength=v,U.numSunShadows=S,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=g,U.numSpotMaps=C,U.numLightProbes=I,n.version=lR++)}function l(u,d){let p=0,c=0,h=0,S=0,L=0,x=0,f=d.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){let v=u[m];if(v.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(f),p++}else if(v.isDirectionalLight){let A=n.directional[c];A.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(f),c++}else if(v.isSpotLight){let A=n.spot[S];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(f),S++}else if(v.isRectAreaLight){let A=n.rectArea[L];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(f),r.identity(),s.copy(v.matrixWorld),s.premultiply(f),r.extractRotation(s),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),L++}else if(v.isPointLight){let A=n.point[h];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){let A=n.hemi[x];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(f),x++}}}return{setup:o,setupView:l,state:n}}function tL(t){let e=new cR(t),a=[],n=[],i=[];function s(p){d.camera=p,a.length=0,n.length=0,i.length=0}function r(p){p.isLightProbeGrid?i.push(p):a.push(p)}function o(p){n.push(p)}function l(){e.setup(a),i.sort((p,c)=>p.priority-c.priority||p.id-c.id)}function u(p){e.setupView(a,p)}let d={lightsArray:a,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o}}function fR(t){let e=new WeakMap;function a(i,s=0){let r=e.get(i),o;return r===void 0?(o=new tL(t),e.set(i,[o])):s>=r.length?(o=new tL(t),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:a,dispose:n}}var dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pR=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],mR=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],aL=new Dt,_u=new G,hx=new G;function gR(t,e,a){let n=new ms,i=new Ke,s=new Ke,r=new Bt,o=new nd,l=new id,u={},d=a.maxTextureSize,p={[ys]:Pa,[Pa]:ys,[Sn]:Sn},c=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:dR,fragmentShader:hR}),h=c.clone();h.defines.HORIZONTAL_PASS=1;let S=new Ti;S.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let L=new ha(S,c),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let f=this.type;this.render=function(T,g,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===xd&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=du);let D=t.getRenderTarget(),I=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Qs),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let Z=f!==this.type;Z&&g.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(W=>W.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,W=T.length;R<W;R++){let j=T[R],q=j.shadow;if(q===void 0){Ne("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let ie=q.getFrameExtents();i.multiply(ie),s.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/ie.x),i.x=s.x*ie.x,q.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/ie.y),i.y=s.y*ie.y,q.mapSize.y=s.y));let B=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=B,q.map===null||Z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===_o){if(j.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new an(i.x,i.y,{format:_s,type:En,minFilter:Da,magFilter:Da,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new Ii(i.x,i.y,In),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=bi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ra,q.map.depthTexture.magFilter=ra}else j.isPointLight?(q.map=new Lu(i.x),q.map.depthTexture=new jl(i.x,Tn)):(q.map=new an(i.x,i.y),q.map.depthTexture=new Ii(i.x,i.y,Tn)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=bi,this.type===du?(q.map.depthTexture.compareFunction=B?Kg:Zg,q.map.depthTexture.minFilter=Da,q.map.depthTexture.magFilter=Da):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ra,q.map.depthTexture.magFilter=ra);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);let te=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,C);let ae=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:C.layers;for(let Me=0;Me<te;Me++){let Ee=q.getCamera(Me);if(j.isPointLight){let J=q.camera,xe=q.matrix,_e=j.distance||J.far;_e!==J.far&&(J.far=_e,J.updateProjectionMatrix()),_u.setFromMatrixPosition(j.matrixWorld),J.position.copy(_u),hx.copy(J.position),hx.add(pR[Me]),J.up.copy(mR[Me]),J.lookAt(hx),J.updateMatrixWorld(),xe.makeTranslation(-_u.x,-_u.y,-_u.z),aL.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),q._frustum.setFromProjectionMatrix(aL,J.coordinateSystem,J.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,Me),t.clear();else{Me===0&&(t.setRenderTarget(q.map),t.clear());let J=q.getViewport(Me);r.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),k.viewport(r)}n=q.getFrustum(Me),v(g,C,Ee,j,ae,this.type)}q.isPointLightShadow!==!0&&this.type===_o&&m(q,C),q.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(D,I,U)};function m(T,g){let C=e.update(L);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new an(i.x,i.y,{format:_s,type:En}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value.set(T.map.width,T.map.height),c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(g,null,C,c,L,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(g,null,C,h,L,null)}function y(T,g,C,D){let I=null,U=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)I=U;else if(I=C.isPointLight===!0?l:o,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=I.uuid,Z=g.uuid,R=u[k];R===void 0&&(R={},u[k]=R);let W=R[Z];W===void 0&&(W=I.clone(),R[Z]=W,g.addEventListener("dispose",A)),I=W}if(I.visible=g.visible,I.wireframe=g.wireframe,D===_o?I.side=g.shadowSide!==null?g.shadowSide:g.side:I.side=g.shadowSide!==null?g.shadowSide:p[g.side],I.alphaMap=g.alphaMap,I.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,I.map=g.map,I.clipShadows=g.clipShadows,I.clippingPlanes=g.clippingPlanes,I.clipIntersection=g.clipIntersection,I.displacementMap=g.displacementMap,I.displacementScale=g.displacementScale,I.displacementBias=g.displacementBias,I.wireframeLinewidth=g.wireframeLinewidth,I.linewidth=g.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let k=t.properties.get(I);k.light=C}return I}function v(T,g,C,D,I,U){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===_o)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let R=e.update(T),W=T.material;if(Array.isArray(W)){let j=R.groups;for(let q=0,ie=j.length;q<ie;q++){let B=j[q],te=W[B.materialIndex];if(te&&te.visible){let ae=y(T,te,D,U);T.onBeforeShadow(t,T,g,C,R,ae,B),t.renderBufferDirect(C,null,R,ae,T,B),T.onAfterShadow(t,T,g,C,R,ae,B)}}}else if(W.visible){let j=y(T,W,D,U);T.onBeforeShadow(t,T,g,C,R,j,null),t.renderBufferDirect(C,null,R,j,T,null),T.onAfterShadow(t,T,g,C,R,j,null)}}let Z=T.children;for(let R=0,W=Z.length;R<W;R++)v(Z[R],g,C,D,I,U)}function A(T){T.target.removeEventListener("dispose",A);for(let C in u){let D=u[C],I=T.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function xR(t,e){function a(){let E=!1,Q=new Bt,X=null,de=new Bt(0,0,0,0);return{setMask:function(oe){X!==oe&&!E&&(t.colorMask(oe,oe,oe,oe),X=oe)},setLocked:function(oe){E=oe},setClear:function(oe,le,Ae,Ge,re){re===!0&&(oe*=Ge,le*=Ge,Ae*=Ge),Q.set(oe,le,Ae,Ge),de.equals(Q)===!1&&(t.clearColor(oe,le,Ae,Ge),de.copy(Q))},reset:function(){E=!1,X=null,de.set(-1,0,0,0)}}}function n(){let E=!1,Q=!1,X=null,de=null,oe=null;return{setReversed:function(le){if(Q!==le){let Ae=e.get("EXT_clip_control");le?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Q=le;let Ge=oe;oe=null,this.setClear(Ge)}},getReversed:function(){return Q},setTest:function(le){le?Se(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(le){X!==le&&!E&&(t.depthMask(le),X=le)},setFunc:function(le){if(Q&&(le=EM[le]),de!==le){switch(le){case Hf:t.depthFunc(t.NEVER);break;case Gf:t.depthFunc(t.ALWAYS);break;case Vf:t.depthFunc(t.LESS);break;case uo:t.depthFunc(t.LEQUAL);break;case qf:t.depthFunc(t.EQUAL);break;case Wf:t.depthFunc(t.GEQUAL);break;case Xf:t.depthFunc(t.GREATER);break;case Yf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=le}},setLocked:function(le){E=le},setClear:function(le){oe!==le&&(oe=le,Q&&(le=1-le),t.clearDepth(le))},reset:function(){E=!1,X=null,de=null,oe=null,Q=!1}}}function i(){let E=!1,Q=null,X=null,de=null,oe=null,le=null,Ae=null,Ge=null,re=null;return{setTest:function(F){E||(F?Se(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(F){Q!==F&&!E&&(t.stencilMask(F),Q=F)},setFunc:function(F,he,ne){(X!==F||de!==he||oe!==ne)&&(t.stencilFunc(F,he,ne),X=F,de=he,oe=ne)},setOp:function(F,he,ne){(le!==F||Ae!==he||Ge!==ne)&&(t.stencilOp(F,he,ne),le=F,Ae=he,Ge=ne)},setLocked:function(F){E=F},setClear:function(F){re!==F&&(t.clearStencil(F),re=F)},reset:function(){E=!1,Q=null,X=null,de=null,oe=null,le=null,Ae=null,Ge=null,re=null}}}let s=new a,r=new n,o=new i,l={},u=new WeakMap,d={},p={},c={},h=new WeakMap,S=[],L=null,x=!1,f=null,m=null,y=null,v=null,A=null,T=null,g=null,C=new We(0,0,0),D=0,I=!1,U=null,k=null,Z=null,R=null,W=null,j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ie=0,B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=ie>=1):B.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=ie>=2);let te=null,ae={},Me=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),J=new Bt().fromArray(Me),xe=new Bt().fromArray(Ee);function _e(E,Q,X,de){let oe=new Uint8Array(4),le=t.createTexture();t.bindTexture(E,le),t.texParameteri(E,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(E,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<X;Ae++)E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(Q+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return le}let we={};we[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(t.DEPTH_TEST),r.setFunc(uo),Ht(!1),xt(Tg),Se(t.CULL_FACE),bt(Qs);function Se(E){d[E]!==!0&&(t.enable(E),d[E]=!0)}function Fe(E){d[E]!==!1&&(t.disable(E),d[E]=!1)}function Ot(E,Q){return c[E]!==Q?(t.bindFramebuffer(E,Q),c[E]=Q,E===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=Q),E===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ue(E,Q){let X=S,de=!1;if(E){X=h.get(Q),X===void 0&&(X=[],h.set(Q,X));let oe=E.textures;if(X.length!==oe.length||X[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Ae=oe.length;le<Ae;le++)X[le]=t.COLOR_ATTACHMENT0+le;X.length=oe.length,de=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,de=!0);de&&t.drawBuffers(X)}function ot(E){return L!==E?(t.useProgram(E),L=E,!0):!1}let qe={[js]:t.FUNC_ADD,[Q_]:t.FUNC_SUBTRACT,[j_]:t.FUNC_REVERSE_SUBTRACT};qe[$_]=t.MIN,qe[eM]=t.MAX;let Re={[tM]:t.ZERO,[aM]:t.ONE,[nM]:t.SRC_COLOR,[Rg]:t.SRC_ALPHA,[uM]:t.SRC_ALPHA_SATURATE,[oM]:t.DST_COLOR,[sM]:t.DST_ALPHA,[iM]:t.ONE_MINUS_SRC_COLOR,[Dg]:t.ONE_MINUS_SRC_ALPHA,[lM]:t.ONE_MINUS_DST_COLOR,[rM]:t.ONE_MINUS_DST_ALPHA,[cM]:t.CONSTANT_COLOR,[fM]:t.ONE_MINUS_CONSTANT_COLOR,[dM]:t.CONSTANT_ALPHA,[hM]:t.ONE_MINUS_CONSTANT_ALPHA};function bt(E,Q,X,de,oe,le,Ae,Ge,re,F){if(E===Qs){x===!0&&(Fe(t.BLEND),x=!1);return}if(x===!1&&(Se(t.BLEND),x=!0),E!==J_){if(E!==f||F!==I){if((m!==js||A!==js)&&(t.blendEquation(t.FUNC_ADD),m=js,A=js),F)switch(E){case Mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ig:t.blendFunc(t.ONE,t.ONE);break;case Eg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wg:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Oe("WebGLState: Invalid blending: ",E);break}else switch(E){case Mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ig:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Eg:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wg:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",E);break}y=null,v=null,T=null,g=null,C.set(0,0,0),D=0,f=E,I=F}return}oe=oe||Q,le=le||X,Ae=Ae||de,(Q!==m||oe!==A)&&(t.blendEquationSeparate(qe[Q],qe[oe]),m=Q,A=oe),(X!==y||de!==v||le!==T||Ae!==g)&&(t.blendFuncSeparate(Re[X],Re[de],Re[le],Re[Ae]),y=X,v=de,T=le,g=Ae),(Ge.equals(C)===!1||re!==D)&&(t.blendColor(Ge.r,Ge.g,Ge.b,re),C.copy(Ge),D=re),f=E,I=!1}function Pt(E,Q){E.side===Sn?Fe(t.CULL_FACE):Se(t.CULL_FACE);let X=E.side===Pa;Q&&(X=!X),Ht(X),E.blending===Mo&&E.transparent===!1?bt(Qs):bt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),r.setFunc(E.depthFunc),r.setTest(E.depthTest),r.setMask(E.depthWrite),s.setMask(E.colorWrite);let de=E.stencilWrite;o.setTest(de),de&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),rt(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(E){U!==E&&(E?t.frontFace(t.CW):t.frontFace(t.CCW),U=E)}function xt(E){E!==Z_?(Se(t.CULL_FACE),E!==k&&(E===Tg?t.cullFace(t.BACK):E===K_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),k=E}function Ua(E){E!==Z&&(q&&t.lineWidth(E),Z=E)}function rt(E,Q,X){E?(Se(t.POLYGON_OFFSET_FILL),(R!==Q||W!==X)&&(R=Q,W=X,r.getReversed()&&(Q=-Q,X=-X),t.polygonOffset(Q,X))):Fe(t.POLYGON_OFFSET_FILL)}function La(E){E?Se(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function Ca(E){E===void 0&&(E=t.TEXTURE0+j-1),te!==E&&(t.activeTexture(E),te=E)}function St(E,Q,X){X===void 0&&(te===null?X=t.TEXTURE0+j-1:X=te);let de=ae[X];de===void 0&&(de={type:void 0,texture:void 0},ae[X]=de),(de.type!==E||de.texture!==Q)&&(te!==X&&(t.activeTexture(X),te=X),t.bindTexture(E,Q||we[E]),de.type=E,de.texture=Q)}function P(){let E=ae[te];E!==void 0&&E.type!==void 0&&(t.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function ba(){try{t.compressedTexImage2D(...arguments)}catch(E){Oe("WebGLState:",E)}}function vt(){try{t.compressedTexImage3D(...arguments)}catch(E){Oe("WebGLState:",E)}}function Ze(){try{t.texSubImage2D(...arguments)}catch(E){Oe("WebGLState:",E)}}function me(){try{t.texSubImage3D(...arguments)}catch(E){Oe("WebGLState:",E)}}function At(){try{t.compressedTexSubImage2D(...arguments)}catch(E){Oe("WebGLState:",E)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(E){Oe("WebGLState:",E)}}function Pe(){try{t.texStorage2D(...arguments)}catch(E){Oe("WebGLState:",E)}}function b(){try{t.texStorage3D(...arguments)}catch(E){Oe("WebGLState:",E)}}function _(){try{t.texImage2D(...arguments)}catch(E){Oe("WebGLState:",E)}}function N(){try{t.texImage3D(...arguments)}catch(E){Oe("WebGLState:",E)}}function se(E){return p[E]!==void 0?p[E]:t.getParameter(E)}function $(E,Q){p[E]!==Q&&(t.pixelStorei(E,Q),p[E]=Q)}function ue(E){J.equals(E)===!1&&(t.scissor(E.x,E.y,E.z,E.w),J.copy(E))}function ce(E){xe.equals(E)===!1&&(t.viewport(E.x,E.y,E.z,E.w),xe.copy(E))}function Y(E,Q){let X=u.get(Q);X===void 0&&(X=new WeakMap,u.set(Q,X));let de=X.get(E);de===void 0&&(de=t.getUniformBlockIndex(Q,E.name),t.uniformBlockBinding(Q,de,de),X.set(E,de))}function K(E,Q,X){let oe=u.get(Q).get(E);l[oe]!==X&&(t.bindBufferBase(t.UNIFORM_BUFFER,oe,X),l[oe]=X)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},te=null,ae={},c={},l={},h=new WeakMap,S=[],L=null,x=!1,f=null,m=null,y=null,v=null,A=null,T=null,g=null,C=new We(0,0,0),D=0,I=!1,U=null,k=null,Z=null,R=null,W=null,J.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:Fe,bindFramebuffer:Ot,drawBuffers:Ue,useProgram:ot,setBlending:bt,setMaterial:Pt,setFlipSided:Ht,setCullFace:xt,setLineWidth:Ua,setPolygonOffset:rt,setScissorTest:La,activeTexture:Ca,bindTexture:St,unbindTexture:P,compressedTexImage2D:ba,compressedTexImage3D:vt,texImage2D:_,texImage3D:N,pixelStorei:$,getParameter:se,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:Pe,texStorage3D:b,texSubImage2D:Ze,texSubImage3D:me,compressedTexSubImage2D:At,compressedTexSubImage3D:De,scissor:ue,viewport:ce,reset:fe}}function SR(t,e,a,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,d=new WeakMap,p=new Set,c,h=new WeakMap,S=new Set,L=new FinalizationRegistry(b=>S.delete(b)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(b,_){return x?new OffscreenCanvas(b,_):ql("canvas")}function m(b,_,N){let se=1,$=Pe(b);if(($.width>N||$.height>N)&&(se=N/Math.max($.width,$.height)),se<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ue=Math.floor(se*$.width),ce=Math.floor(se*$.height);c===void 0&&(c=f(ue,ce));let Y=_?f(ue,ce):c;return Y.width=ue,Y.height=ce,Y.getContext("2d").drawImage(b,0,0,ue,ce),Ne("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ue+"x"+ce+")."),Y}else return"data"in b&&Ne("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function y(b){return b.generateMipmaps}function v(b){t.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(b,_,N,se,$,ue=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ce;se&&(ce=e.get("EXT_texture_norm16"),ce||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===t.RED&&(N===t.FLOAT&&(Y=t.R32F),N===t.HALF_FLOAT&&(Y=t.R16F),N===t.UNSIGNED_BYTE&&(Y=t.R8),N===t.UNSIGNED_SHORT&&ce&&(Y=ce.R16_EXT),N===t.SHORT&&ce&&(Y=ce.R16_SNORM_EXT)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.R8UI),N===t.UNSIGNED_SHORT&&(Y=t.R16UI),N===t.UNSIGNED_INT&&(Y=t.R32UI),N===t.BYTE&&(Y=t.R8I),N===t.SHORT&&(Y=t.R16I),N===t.INT&&(Y=t.R32I)),_===t.RG&&(N===t.FLOAT&&(Y=t.RG32F),N===t.HALF_FLOAT&&(Y=t.RG16F),N===t.UNSIGNED_BYTE&&(Y=t.RG8),N===t.UNSIGNED_SHORT&&ce&&(Y=ce.RG16_EXT),N===t.SHORT&&ce&&(Y=ce.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RG8UI),N===t.UNSIGNED_SHORT&&(Y=t.RG16UI),N===t.UNSIGNED_INT&&(Y=t.RG32UI),N===t.BYTE&&(Y=t.RG8I),N===t.SHORT&&(Y=t.RG16I),N===t.INT&&(Y=t.RG32I)),_===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),N===t.UNSIGNED_INT&&(Y=t.RGB32UI),N===t.BYTE&&(Y=t.RGB8I),N===t.SHORT&&(Y=t.RGB16I),N===t.INT&&(Y=t.RGB32I)),_===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),N===t.UNSIGNED_INT&&(Y=t.RGBA32UI),N===t.BYTE&&(Y=t.RGBA8I),N===t.SHORT&&(Y=t.RGBA16I),N===t.INT&&(Y=t.RGBA32I)),_===t.RGB&&(N===t.UNSIGNED_SHORT&&ce&&(Y=ce.RGB16_EXT),N===t.SHORT&&ce&&(Y=ce.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),_===t.RGBA){let K=ue?Vl:at.getTransfer($);N===t.FLOAT&&(Y=t.RGBA32F),N===t.HALF_FLOAT&&(Y=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Y=K===dt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&ce&&(Y=ce.RGBA16_EXT),N===t.SHORT&&ce&&(Y=ce.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(b,_){let N;return b?_===null||_===Tn||_===er?N=t.DEPTH24_STENCIL8:_===In?N=t.DEPTH32F_STENCIL8:_===Co&&(N=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===er?N=t.DEPTH_COMPONENT24:_===In?N=t.DEPTH_COMPONENT32F:_===Co&&(N=t.DEPTH_COMPONENT16),N}function C(b,_){return y(b)===!0||b.isFramebufferTexture&&b.minFilter!==ra&&b.minFilter!==Da?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){let _=new WeakRef(b);n.get(b).__ref=_,S.add(_),L.register(b,_,_)}function I(b){let _=n.get(b).__ref;_!==void 0&&(S.delete(_),L.unregister(_))}function U(b){Z(b.target)}function k(b){R(b.target)}function Z(b){b.removeEventListener("dispose",U),I(b),j(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&p.delete(b)}function R(b){b.removeEventListener("dispose",k),I(b),ie(b)}function W(){for(let b of S){let _=b.deref();_!==void 0&&(_.isRenderTarget===!0?R(_):Z(_))}S.clear(),p.clear()}function j(b){let _=n.get(b);if(_.__webglInit===void 0)return;let N=b.source,se=h.get(N);if(se){let $=se[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&q(b),Object.keys(se).length===0&&h.delete(N)}n.remove(b)}function q(b){let _=n.get(b);t.deleteTexture(_.__webglTexture);let N=b.source,se=h.get(N);delete se[_.__cacheKey],r.memory.textures--}function ie(b){let _=n.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();let N=b.depthTexture;if(N&&N.renderTarget===b&&Z(N),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let ue=0;ue<_.__webglFramebuffer[$].length;ue++)t.deleteFramebuffer(_.__webglFramebuffer[$][ue]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let se=b.textures;for(let $=0,ue=se.length;$<ue;$++){let ce=n.get(se[$]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),r.memory.textures--),n.remove(se[$])}n.remove(b)}let B=0;function te(){B=0}function ae(){return B}function Me(b){B=b}function Ee(){let b=B;return b>=i.maxTextures&&Ne("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,b}function J(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function xe(b,_){let N=n.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let se=b.image;if(se===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(N,b,_);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function _e(b,_){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){Pt(N,b,_);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function we(b,_){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){Pt(N,b,_);return}a.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function Se(b,_){let N=n.get(b);if(b.version>0&&N.__version!==b.version){Ht(N,b,_);return}a.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}let Fe={[Zf]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[Kf]:t.MIRRORED_REPEAT},Ot={[ra]:t.NEAREST,[gM]:t.NEAREST_MIPMAP_NEAREST,[pu]:t.NEAREST_MIPMAP_LINEAR,[Da]:t.LINEAR,[yd]:t.LINEAR_MIPMAP_NEAREST,[Ei]:t.LINEAR_MIPMAP_LINEAR},Ue={[yM]:t.NEVER,[Jg]:t.ALWAYS,[_M]:t.LESS,[Zg]:t.LEQUAL,[MM]:t.EQUAL,[Kg]:t.GEQUAL,[LM]:t.GREATER,[CM]:t.NOTEQUAL};function ot(b,_){if(_.type===In&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Da||_.magFilter===yd||_.magFilter===pu||_.magFilter===Ei||_.minFilter===Da||_.minFilter===yd||_.minFilter===pu||_.minFilter===Ei)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Fe[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Fe[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Fe[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Ot[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Ot[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ra||_.minFilter!==pu&&_.minFilter!==Ei||_.type===In&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function qe(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",U),D(_));let se=_.source,$=h.get(se);$===void 0&&($={},h.set(se,$));let ue=J(_);if(ue!==b.__cacheKey){$[ue]===void 0&&($[ue]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,N=!0),$[ue].usedTimes++;let ce=$[b.__cacheKey];ce!==void 0&&($[b.__cacheKey].usedTimes--,ce.usedTimes===0&&q(_)),b.__cacheKey=ue,b.__webglTexture=$[ue].texture}return N}function Re(b,_,N){return Math.floor(Math.floor(b/N)/_)}function bt(b,_,N,se){let ue=b.updateRanges;if(ue.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,N,se,_.data);else{ue.sort((E,Q)=>E.start-Q.start);let ce=0;for(let E=1;E<ue.length;E++){let Q=ue[ce],X=ue[E],de=Q.start+Q.count,oe=Re(X.start,_.width,4),le=Re(Q.start,_.width,4);X.start<=de+1&&oe===le&&Re(X.start+X.count-1,_.width,4)===oe?Q.count=Math.max(Q.count,X.start+X.count-Q.start):(++ce,ue[ce]=X)}ue.length=ce+1;let Y=a.getParameter(t.UNPACK_ROW_LENGTH),K=a.getParameter(t.UNPACK_SKIP_PIXELS),fe=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let E=0,Q=ue.length;E<Q;E++){let X=ue[E],de=Math.floor(X.start/4),oe=Math.ceil(X.count/4),le=de%_.width,Ae=Math.floor(de/_.width),Ge=oe,re=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,le),a.pixelStorei(t.UNPACK_SKIP_ROWS,Ae),a.texSubImage2D(t.TEXTURE_2D,0,le,Ae,Ge,re,N,se,_.data)}b.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,Y),a.pixelStorei(t.UNPACK_SKIP_PIXELS,K),a.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Pt(b,_,N){let se=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(se=t.TEXTURE_3D);let $=qe(b,_),ue=_.source;a.bindTexture(se,b.__webglTexture,t.TEXTURE0+N);let ce=n.get(ue);if(ue.version!==ce.__version||$===!0){if(a.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let re=at.getPrimaries(at.workingColorSpace),F=_.colorSpace===Ri?null:at.getPrimaries(_.colorSpace),he=_.colorSpace===Ri||re===F?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,i.maxTextureSize);K=De(_,K);let fe=s.convert(_.format,_.colorSpace),E=s.convert(_.type),Q=T(_.internalFormat,fe,E,_.normalized,_.colorSpace,_.isVideoTexture);ot(se,_);let X,de=_.mipmaps,oe=_.isVideoTexture!==!0,le=ce.__version===void 0||$===!0,Ae=ue.dataReady,Ge=C(_,K);if(_.isDepthTexture)Q=g(_.format===wi,_.type),le&&(oe?a.texStorage2D(t.TEXTURE_2D,1,Q,K.width,K.height):a.texImage2D(t.TEXTURE_2D,0,Q,K.width,K.height,0,fe,E,null));else if(_.isDataTexture)if(de.length>0){oe&&le&&a.texStorage2D(t.TEXTURE_2D,Ge,Q,de[0].width,de[0].height);for(let re=0,F=de.length;re<F;re++)X=de[re],oe?Ae&&a.texSubImage2D(t.TEXTURE_2D,re,0,0,X.width,X.height,fe,E,X.data):a.texImage2D(t.TEXTURE_2D,re,Q,X.width,X.height,0,fe,E,X.data);_.generateMipmaps=!1}else oe?(le&&a.texStorage2D(t.TEXTURE_2D,Ge,Q,K.width,K.height),Ae&&bt(_,K,fe,E)):a.texImage2D(t.TEXTURE_2D,0,Q,K.width,K.height,0,fe,E,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){oe&&le&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Q,de[0].width,de[0].height,K.depth);for(let re=0,F=de.length;re<F;re++)if(X=de[re],_.format!==wn)if(fe!==null)if(oe){if(Ae)if(_.layerUpdates.size>0){let he=rx(X.width,X.height,_.format,_.type);for(let ne of _.layerUpdates){let Te=X.data.subarray(ne*he/X.data.BYTES_PER_ELEMENT,(ne+1)*he/X.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,ne,X.width,X.height,1,fe,Te)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,K.depth,fe,X.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Q,X.width,X.height,K.depth,0,X.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ae&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,K.depth,fe,E,X.data):a.texImage3D(t.TEXTURE_2D_ARRAY,re,Q,X.width,X.height,K.depth,0,fe,E,X.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{oe&&le&&a.texStorage2D(t.TEXTURE_2D,Ge,Q,de[0].width,de[0].height);for(let re=0,F=de.length;re<F;re++)X=de[re],_.format!==wn?fe!==null?oe?Ae&&a.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,X.width,X.height,fe,X.data):a.compressedTexImage2D(t.TEXTURE_2D,re,Q,X.width,X.height,0,X.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ae&&a.texSubImage2D(t.TEXTURE_2D,re,0,0,X.width,X.height,fe,E,X.data):a.texImage2D(t.TEXTURE_2D,re,Q,X.width,X.height,0,fe,E,X.data)}else if(_.isDataArrayTexture)if(oe){if(le&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,Q,K.width,K.height,K.depth),Ae)if(_.layerUpdates.size>0){let re=rx(K.width,K.height,_.format,_.type);for(let F of _.layerUpdates){let he=K.data.subarray(F*re/K.data.BYTES_PER_ELEMENT,(F+1)*re/K.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,F,K.width,K.height,1,fe,E,he)}_.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,fe,E,K.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,Q,K.width,K.height,K.depth,0,fe,E,K.data);else if(_.isData3DTexture)oe?(le&&a.texStorage3D(t.TEXTURE_3D,Ge,Q,K.width,K.height,K.depth),Ae&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,fe,E,K.data)):a.texImage3D(t.TEXTURE_3D,0,Q,K.width,K.height,K.depth,0,fe,E,K.data);else if(_.isFramebufferTexture){if(le)if(oe)a.texStorage2D(t.TEXTURE_2D,Ge,Q,K.width,K.height);else{let re=K.width,F=K.height;for(let he=0;he<Ge;he++)a.texImage2D(t.TEXTURE_2D,he,Q,re,F,0,fe,E,null),re>>=1,F>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),K.parentNode!==re){re.appendChild(K),p.add(_),re.onpaint=F=>{let he=F.changedElements;for(let ne of p)he.includes(ne.image)&&(ne.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{let he=t.RGBA,ne=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,he,ne,Te,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(de.length>0){if(oe&&le){let re=Pe(de[0]);a.texStorage2D(t.TEXTURE_2D,Ge,Q,re.width,re.height)}for(let re=0,F=de.length;re<F;re++)X=de[re],oe?Ae&&a.texSubImage2D(t.TEXTURE_2D,re,0,0,fe,E,X):a.texImage2D(t.TEXTURE_2D,re,Q,fe,E,X);_.generateMipmaps=!1}else if(oe){if(le){let re=Pe(K);a.texStorage2D(t.TEXTURE_2D,Ge,Q,re.width,re.height)}Ae&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,E,K)}else a.texImage2D(t.TEXTURE_2D,0,Q,fe,E,K);y(_)&&_.mipmapsAutoUpdate===!0&&v(se),ce.__version=ue.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ht(b,_,N){if(_.image.length!==6)return;let se=qe(b,_),$=_.source;a.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+N);let ue=n.get($);if($.version!==ue.__version||se===!0){a.activeTexture(t.TEXTURE0+N);let ce=at.getPrimaries(at.workingColorSpace),Y=_.colorSpace===Ri?null:at.getPrimaries(_.colorSpace),K=_.colorSpace===Ri||ce===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,E=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!fe&&!E?Q[ne]=m(_.image[ne],!0,i.maxCubemapSize):Q[ne]=E?_.image[ne].image:_.image[ne],Q[ne]=De(_,Q[ne]);let X=Q[0],de=s.convert(_.format,_.colorSpace),oe=s.convert(_.type),le=T(_.internalFormat,de,oe,_.normalized,_.colorSpace),Ae=_.isVideoTexture!==!0,Ge=ue.__version===void 0||se===!0,re=$.dataReady,F=C(_,X);ot(t.TEXTURE_CUBE_MAP,_);let he;if(_.isDepthTexture){if(le=g(_.format===wi,_.type),Ge)if(Ae)a.texStorage2D(t.TEXTURE_CUBE_MAP,1,le,X.width,X.height);else for(let ne=0;ne<6;ne++)a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,le,X.width,X.height,0,de,oe,null)}else if(fe){Ae&&Ge&&a.texStorage2D(t.TEXTURE_CUBE_MAP,F,le,X.width,X.height);for(let ne=0;ne<6;ne++){he=Q[ne].mipmaps;for(let Te=0;Te<he.length;Te++){let je=he[Te];_.format!==wn?de!==null?Ae?re&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,je.width,je.height,de,je.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,le,je.width,je.height,0,je.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,je.width,je.height,de,oe,je.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,le,je.width,je.height,0,de,oe,je.data)}}}else{if(he=_.mipmaps,Ae&&Ge){he.length>0&&F++;let ne=Pe(Q[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,F,le,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(E){Ae?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,de,oe,Q[ne].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,le,Q[ne].width,Q[ne].height,0,de,oe,Q[ne].data);for(let Te=0;Te<he.length;Te++){let Ye=he[Te].image[ne].image;Ae?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,Ye.width,Ye.height,de,oe,Ye.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,le,Ye.width,Ye.height,0,de,oe,Ye.data)}}else{Ae?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de,oe,Q[ne]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,le,de,oe,Q[ne]);for(let Te=0;Te<he.length;Te++){let je=he[Te];Ae?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,de,oe,je.image[ne]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,le,de,oe,je.image[ne])}}}y(_)&&_.mipmapsAutoUpdate===!0&&v(t.TEXTURE_CUBE_MAP),ue.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function xt(b,_,N,se,$,ue){let ce=s.convert(N.format,N.colorSpace),Y=s.convert(N.type),K=T(N.internalFormat,ce,Y,N.normalized,N.colorSpace),fe=n.get(_),E=n.get(N);if(E.__renderTarget=_,!fe.__hasExternalTextures){let Q=Math.max(1,_.width>>ue),X=Math.max(1,_.height>>ue);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?a.texImage3D($,ue,K,Q,X,_.depth,0,ce,Y,null):a.texImage2D($,ue,K,Q,X,0,ce,Y,null)}a.bindFramebuffer(t.FRAMEBUFFER,b),me(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,$,E.__webglTexture,0,Ze(_)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,$,E.__webglTexture,ue),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ua(b,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){let se=_.depthTexture,$=se&&se.isDepthTexture?se.type:null,ue=g(_.stencilBuffer,$),ce=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;me(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze(_),ue,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze(_),ue,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ue,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,b)}else{let se=_.textures;for(let $=0;$<se.length;$++){let ue=se[$],ce=s.convert(ue.format,ue.colorSpace),Y=s.convert(ue.type),K=T(ue.internalFormat,ce,Y,ue.normalized,ue.colorSpace);me(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze(_),K,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze(_),K,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,K,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function rt(b,_,N){let se=_.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(_.depthTexture);$.__renderTarget=_;let ue=se?_.depthTexture.image[0]:_.depthTexture.image;(!$.__webglTexture||ue.width!==_.width||ue.height!==_.height)&&(ue.width=_.width,ue.height=_.height,_.depthTexture.needsUpdate=!0),se?Se(_.depthTexture,0):xe(_.depthTexture,0);let ce=$.__webglTexture,Y=Ze(_),K=se?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,fe=_.depthTexture.format===wi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===bi)me(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,K,ce,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,K,ce,0);else if(_.depthTexture.format===wi)me(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,K,ce,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function La(b){let _=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let se=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),se){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,se.removeEventListener("dispose",$)};se.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=se}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let se=0;se<6;se++)rt(_.__webglFramebuffer[se],b,se);else b.texture.mipmaps.length>0?rt(_.__webglFramebuffer[0],b,0):rt(_.__webglFramebuffer,b,0);else if(N){_.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[se]),_.__webglDepthbuffer[se]===void 0)_.__webglDepthbuffer[se]=t.createRenderbuffer(),Ua(_.__webglDepthbuffer[se],b,!1);else{let $=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ue)}}else if(b.texture.mipmaps.length>0?a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ua(_.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ue)}a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ca(b,_,N){let se=n.get(b);_!==void 0&&xt(se.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&La(b)}function St(b){let _=b.texture,N=n.get(b),se=n.get(_);b.addEventListener("dispose",k),D(b);let $=b.textures,ue=b.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=_.version,r.memory.textures++),ue){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let K=0;K<_.mipmaps.length;K++)N.__webglFramebuffer[Y][K]=t.createFramebuffer()}else N.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(_.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)N.__webglFramebuffer[Y]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ce)for(let Y=0,K=$.length;Y<K;Y++){let fe=n.get($[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),r.memory.textures++)}if(b.samples>0&&me(b)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let K=$[Y];N.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let fe=s.convert(K.format,K.colorSpace),E=s.convert(K.type),Q=T(K.internalFormat,fe,E,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),X=Ze(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,X,Q,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ua(N.__webglDepthRenderbuffer,b,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){a.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),ot(t.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)xt(N.__webglFramebuffer[Y][K],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else xt(N.__webglFramebuffer[Y],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);y(_)?v(t.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),a.unbindTexture()}else if(ce){for(let Y=0,K=$.length;Y<K;Y++){let fe=$[Y],E=n.get(fe),Q=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Q=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Q,E.__webglTexture),ot(Q,fe),xt(N.__webglFramebuffer,b,fe,t.COLOR_ATTACHMENT0+Y,Q,0),y(fe)&&v(Q)}a.unbindTexture()}else{let Y=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Y,se.__webglTexture),ot(Y,_),_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)xt(N.__webglFramebuffer[K],b,_,t.COLOR_ATTACHMENT0,Y,K);else xt(N.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,Y,0);y(_)?v(Y):_.mipmaps.length>0&&t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),a.unbindTexture()}b.depthBuffer&&La(b)}function P(b){let _=b.textures;for(let N=0,se=_.length;N<se;N++){let $=_[N];if(y($)&&$.mipmapsAutoUpdate===!0){let ue=A(b),ce=n.get($).__webglTexture;a.bindTexture(ue,ce),v(ue),a.unbindTexture()}}}let ba=[];function vt(b){if(b.samples>0){if(me(b)===!1){let _=b.textures,N=b.width,se=b.height,$=t.COLOR_BUFFER_BIT,ue=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=n.get(b),Y=_.length>1;if(Y)for(let fe=0;fe<_.length;fe++)a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);let E=n.get(_[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,E,0)}t.blitFramebuffer(0,0,N,se,0,0,N,se,$,t.NEAREST),l===!0&&(ba.length=0,ba.push(t.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&ba.push(ue),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ba))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<_.length;fe++){a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);let E=n.get(_[fe]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,E,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Ze(b){return Math.min(i.maxSamples,b.samples)}function me(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function At(b){let _=r.render.frame;d.get(b)!==_&&(d.set(b,_),b.update())}function De(b,_){let N=b.colorSpace,se=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Gl&&N!==Ri&&(at.getTransfer(N)===dt?(se!==wn||$!==Va)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",N)),_}function Pe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=Ee,this.resetTextureUnits=te,this.getTextureUnits=ae,this.setTextureUnits=Me,this.setTexture2D=xe,this.setTexture2DArray=_e,this.setTexture3D=we,this.setTextureCube=Se,this.rebindTextures=Ca,this.setupRenderTarget=St,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=La,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=me,this.dispose=W}function vR(t,e){function a(n,i=Ri){let s,r=at.getTransfer(i);if(n===Va)return t.UNSIGNED_BYTE;if(n===Md)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Ld)return t.UNSIGNED_SHORT_5_5_5_1;if(n===Vg)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===qg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hg)return t.BYTE;if(n===Gg)return t.SHORT;if(n===Co)return t.UNSIGNED_SHORT;if(n===_d)return t.INT;if(n===Tn)return t.UNSIGNED_INT;if(n===In)return t.FLOAT;if(n===En)return t.HALF_FLOAT;if(n===Wg)return t.ALPHA;if(n===Xg)return t.RGB;if(n===wn)return t.RGBA;if(n===bi)return t.DEPTH_COMPONENT;if(n===wi)return t.DEPTH_STENCIL;if(n===Yg)return t.RED;if(n===Cd)return t.RED_INTEGER;if(n===_s)return t.RG;if(n===bd)return t.RG_INTEGER;if(n===Ad)return t.RGBA_INTEGER;if(n===mu||n===gu||n===xu||n===Su)if(r===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Su)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Td||n===Id||n===Ed||n===wd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Td)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Id)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ed)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rd||n===Dd||n===Pd||n===Ud||n===Nd||n===vu||n===Bd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rd||n===Dd)return r===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ud)return s.COMPRESSED_R11_EAC;if(n===Nd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===vu)return s.COMPRESSED_RG11_EAC;if(n===Bd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Od||n===Fd||n===zd||n===kd||n===Hd||n===Gd||n===Vd||n===qd||n===Wd||n===Xd||n===Yd||n===Zd||n===Kd||n===Jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Od)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jd)return r===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qd||n===jd||n===$d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qd)return r===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===th||n===yu||n===ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===eh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===th)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:a}}var yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_R=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let n=new $l(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,n=new Wn({vertexShader:yR,fragmentShader:_R,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new ha(new eu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_x=class extends Vn{constructor(e,a){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,d=null,p=null,c=null,h=null,S=null,L=typeof XRWebGLBinding<"u",x=new yx,f={},m=a.getContextAttributes(),y=null,v=null,A=[],T=[],g=new Ke,C=null,D=null,I=new ya;I.viewport=new Bt;let U=new ya;U.viewport=new Bt;let k=[I,U],Z=new md,R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let xe=A[J];return xe===void 0&&(xe=new go,A[J]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(J){let xe=A[J];return xe===void 0&&(xe=new go,A[J]=xe),xe.getGripSpace()},this.getHand=function(J){let xe=A[J];return xe===void 0&&(xe=new go,A[J]=xe),xe.getHandSpace()};function j(J){let xe=T.indexOf(J.inputSource);if(xe===-1)return;let _e=A[xe];_e!==void 0&&(_e.update(J.inputSource,J.frame,u||r),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",ie);for(let J=0;J<A.length;J++){let xe=T[J];xe!==null&&(T[J]=null,A[J].disconnect(xe))}R=null,W=null,x.reset();for(let J in f)delete f[J];if(e.setRenderTarget(y),h=null,c=null,p=null,i=null,v=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(g.width,g.height,!1),D!==null){let J=D.camera;J.fov=D.fov,J.zoom=D.zoom,J.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return p===null&&L&&(p=new XRWebGLBinding(i,a)),p},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",q),i.addEventListener("inputsourceschange",ie),m.xrCompatible!==!0&&await a.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(g),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,we=null,Se=null;m.depth&&(Se=m.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,_e=m.stencil?wi:bi,we=m.stencil?er:Tn);let Fe={colorFormat:a.RGBA8,depthFormat:Se,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(Fe),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),v=new an(c.textureWidth,c.textureHeight,{format:wn,type:Va,depthTexture:new Ii(c.textureWidth,c.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}else{let _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,a,_e),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new an(h.framebufferWidth,h.framebufferHeight,{format:wn,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),Ee.setContext(i),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ie(J){for(let xe=0;xe<J.removed.length;xe++){let _e=J.removed[xe],we=T.indexOf(_e);we>=0&&(T[we]=null,A[we].disconnect(_e))}for(let xe=0;xe<J.added.length;xe++){let _e=J.added[xe],we=T.indexOf(_e);if(we===-1){for(let Fe=0;Fe<A.length;Fe++)if(Fe>=T.length){T.push(_e),we=Fe;break}else if(T[Fe]===null){T[Fe]=_e,we=Fe;break}if(we===-1)break}let Se=A[we];Se&&Se.connect(_e)}}function B(J,xe){xe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(xe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let xe=J.near,_e=J.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),Z.near=U.near=I.near=xe,Z.far=U.far=I.far=_e,(R!==Z.near||W!==Z.far)&&(i.updateRenderState({depthNear:Z.near,depthFar:Z.far}),R=Z.near,W=Z.far),Z.layers.mask=J.layers.mask|6,I.layers.mask=Z.layers.mask&-5,U.layers.mask=Z.layers.mask&-3;let we=J.parent,Se=Z.cameras;B(Z,we);for(let Fe=0;Fe<Se.length;Fe++)B(Se[Fe],we);Z.projectionMatrix.copy(I.projectionMatrix),Z.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&J.isPerspectiveCamera&&(D={camera:J,fov:J.fov,zoom:J.zoom}),te(J,Z,we)};function te(J,xe,_e){_e===null?J.matrix.copy(xe.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(xe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(xe.projectionMatrix),J.projectionMatrixInverse.copy(xe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ho*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(c===null&&h===null))return l},this.setFoveation=function(J){l=J,c!==null&&(c.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(J){return f[J]};let ae=null;function Me(J,xe){if(d=xe.getViewerPose(u||r),S=xe,d!==null){let _e=d.views;h!==null&&(e.setRenderTargetFramebuffer(v,h.framebuffer),e.setRenderTarget(v));let we=!1;_e.length!==Z.cameras.length&&(Z.cameras.length=0,we=!0);for(let Ue=0;Ue<_e.length;Ue++){let ot=_e[Ue],qe=null;if(h!==null)qe=h.getViewport(ot);else{let bt=p.getViewSubImage(c,ot);qe=bt.viewport,Ue===0&&(e.setRenderTargetTextures(v,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(v))}let Re=k[Ue];Re===void 0&&(Re=new ya,Re.layers.enable(Ue),Re.viewport=new Bt,k[Ue]=Re),Re.matrix.fromArray(ot.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ot.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(qe.x,qe.y,qe.width,qe.height),Ue===0&&(Z.matrix.copy(Re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),we===!0&&Z.cameras.push(Re)}let Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&L){p=n.getBinding();let Ue=p.getDepthInformation(_e[0]);Ue&&Ue.isValid&&Ue.texture&&x.init(Ue,i.renderState)}if(Se&&Se.includes("camera-access")&&L){e.state.unbindTexture(),p=n.getBinding();for(let Ue=0;Ue<_e.length;Ue++){let ot=_e[Ue].camera;if(ot){let qe=f[ot];qe||(qe=new $l,f[ot]=qe);let Re=p.getCameraImage(ot);qe.sourceTexture=Re}}}}for(let _e=0;_e<A.length;_e++){let we=T[_e],Se=A[_e];we!==null&&Se!==void 0&&Se.update(we,xe,u||r)}ae&&ae(J,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),S=null}let Ee=new nL;Ee.setAnimationLoop(Me),this.setAnimationLoop=function(J){ae=J},this.dispose=function(){}}},MR=new Dt,hL=new ze;hL.set(-1,0,0,0,1,0,0,0,1);function LR(t,e){function a(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,nx(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function i(x,f,m,y,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),d(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),c(x,f),f.isMeshPhysicalMaterial&&h(x,f,v)):f.isMeshMatcapMaterial?(s(x,f),S(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),L(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(r(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,m,y):f.isSpriteMaterial?u(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,a(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,a(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,a(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Pa&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,a(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Pa&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,a(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,a(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,a(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);let m=e.get(f),y=m.envMap,v=m.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(hL),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,a(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,a(f.aoMap,x.aoMapTransform))}function r(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,a(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,m,y){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*m,x.scale.value=y*.5,f.map&&(x.map.value=f.map,a(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,a(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,a(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,a(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function d(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function c(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,a(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,a(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function h(x,f,m){x.ior.value=f.ior,f.diffuseRoughness>0&&(x.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=f.diffuseRoughnessMap,a(f.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,a(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,a(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,a(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,a(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,a(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pa&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.retroreflectivity>0&&(x.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,a(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,a(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,a(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,a(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,a(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,a(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,a(f.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,f){f.matcap&&(x.matcap.value=f.matcap)}function L(x,f){let m=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function CR(t,e,a,n){let i={},s={};function r(m,y){let v=y.program;n.uniformBlockBinding(m,v,i[m.id])}function o(m,y){let v=i[m.id];v===void 0&&(S(m),v=l(m),i[m.id]=v,m.addEventListener("dispose",x));let A=y.program;n.updateUBOMapping(m,A);let T=e.render.frame;s[m.id]!==T&&(u(m),s[m.id]=T)}function l(m){let y=t.createBuffer(),v=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,v,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function u(m){let y=i[m.id],v=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,g=v.length;T<g;T++){let C=v[T];if(Array.isArray(C))for(let D=0,I=C.length;D<I;D++)d(C[D],T,D,A);else d(C,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(m,y,v,A){if(c(m,y,v,A)===!0){let T=m.__offset,g=m.value;if(Array.isArray(g)){let C=0;for(let D=0;D<g.length;D++){let I=g[D],U=L(I,!0);p(I,m.__data,C),C+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,m.__data)}}function p(m,y,v){typeof m=="number"||typeof m=="boolean"?y[v]=m:m.isMatrix3?(y[v]=m.elements[0],y[v+1]=m.elements[1],y[v+2]=m.elements[2],y[v+3]=0,y[v+4]=m.elements[3],y[v+5]=m.elements[4],y[v+6]=m.elements[5],y[v+7]=0,y[v+8]=m.elements[6],y[v+9]=m.elements[7],y[v+10]=m.elements[8],y[v+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-v),v):m.toArray(y,v)}function c(m,y,v,A){let T=m.value,g=y+"_"+v;if(Array.isArray(T)){A[g]===void 0&&(A[g]=[]);let C=A[g],D=!1;for(let I=0;I<T.length;I++)h(T[I],C,I)===!0&&(D=!0);return D}return h(T,A,g)}function h(m,y,v){if(y[v]===void 0)return typeof m=="number"||typeof m=="boolean"?y[v]=m:ArrayBuffer.isView(m)?y[v]=m.slice():y[v]=m.clone(),!0;{let A=y[v];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return y[v]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function S(m){let y=m.uniforms,v=0,A=16;for(let g=0,C=y.length;g<C;g++){let D=Array.isArray(y[g])?y[g]:[y[g]];for(let I=0,U=D.length;I<U;I++){let k=D[I],Z=Array.isArray(k.value)?k.value:[k.value],R=Array.isArray(y[g])||Array.isArray(k.value),W=v;for(let q=0,ie=Z.length;q<ie;q++){let B=Z[q],te=L(B,R),ae=v%A,Me=ae%te.boundary,Ee=ae+Me;v+=Me,Ee!==0&&A-Ee<te.storage&&(v+=A-Ee),q===0&&(W=v),v+=te.storage}let j=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new j((v-W)/Float32Array.BYTES_PER_ELEMENT),k.__offset=W}}let T=v%A;return T>0&&(v+=A-T),m.__size=v,m.__cache={},this}function L(m,y){let v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=16,v.storage=48):m.isMatrix4?(v.boundary=16,v.storage=64):m.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function x(m){let y=m.target;y.removeEventListener("dispose",x),t.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(let m in i)t.deleteBuffer(i[m]);i={},s={}}return{bind:r,update:o,dispose:f}}var bR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function AR(){return Yn===null&&(Yn=new ed(bR,16,16,_s,En),Yn.name="DFG_LUT",Yn.minFilter=Da,Yn.magFilter=Da,Yn.wrapS=kn,Yn.wrapT=kn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var oh=class{constructor(e={}){let{canvas:a=AM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:h=Va}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=r;let L=h,x=new Set([Ad,bd,Cd]),f=new Set([Va,Tn,Co,er,Md,Ld]),m=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,T=null,g=[],C=[],D=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,k=null,Z=null,R=null,W=null;this._outputColorSpace=wa;let j=0,q=0,ie=null,B=-1,te=null,ae=new Bt,Me=new Bt,Ee=null,J=new We(0),xe=0,_e=a.width,we=a.height,Se=1,Fe=null,Ot=null,Ue=new Bt(0,0,_e,we),ot=new Bt(0,0,_e,we),qe=!1,Re=new ms,bt=new td,Pt=!1,Ht=!1,xt=new Dt,Ua=new G,rt=new Bt,La={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ca=!1;function St(){return ie===null?Se:1}let P=n;function ba(M,w){return a.getContext(M,w)}let vt,Ze,me,At,De,Pe,b,_,N,se,$,ue,ce,Y,K,fe,E,Q,X,de,oe,le,Ae;try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${"187"}`),a.addEventListener("webglcontextlost",F,!1),a.addEventListener("webglcontextrestored",he,!1),a.addEventListener("webglcontextcreationerror",ne,!1),P===null){let w="webgl2";if(P=ba(w,M),P===null)throw ba(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(M){throw a.removeEventListener("webglcontextlost",F,!1),a.removeEventListener("webglcontextrestored",he,!1),a.removeEventListener("webglcontextcreationerror",ne,!1),Oe("WebGLRenderer: "+M.message),M}function Ge(){vt=new OE(P),vt.init(),oe=new vR(P,vt),Ze=new AE(P,vt,e,oe),me=new xR(P,vt),Ze.reversedDepthBuffer&&c&&me.buffers.depth.setReversed(!0),Z=P.createFramebuffer(),R=P.createFramebuffer(),W=P.createFramebuffer(),At=new kE(P),De=new nR,Pe=new SR(P,vt,me,De,Ze,oe,At),b=new BE(I),_=new GT(P),le=new CE(P,_),N=new FE(P,_,At,le),se=new GE(P,N,_,le,At),Q=new HE(P,Ze,Pe),K=new TE(De),$=new aR(I,b,vt,Ze,le,K),ue=new LR(I,De),ce=new sR,Y=new fR(vt),E=new LE(I,b,me,se,S,l),fe=new gR(I,se,Ze),Ae=new CR(P,At,Ze,me),X=new bE(P,vt,At),de=new zE(P,vt,At),At.programs=$.programs,I.capabilities=Ze,I.extensions=vt,I.properties=De,I.renderLists=ce,I.shadowMap=fe,I.state=me,I.info=At}L!==Va&&(D=new qE(L,a.width,a.height,o,i,s));let re=new _x(I,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=vt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=vt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(M){M!==void 0&&(Se=M,this.setSize(_e,we,!1))},this.getSize=function(M){return M.set(_e,we)},this.setSize=function(M,w,V=!0){if(re.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=M,we=w,a.width=Math.floor(M*Se),a.height=Math.floor(w*Se),V===!0&&(a.style.width=M+"px",a.style.height=w+"px"),D!==null&&D.setSize(a.width,a.height),this.setViewport(0,0,M,w)},this.getDrawingBufferSize=function(M){return M.set(_e*Se,we*Se).floor()},this.setDrawingBufferSize=function(M,w,V){_e=M,we=w,Se=V,a.width=Math.floor(M*V),a.height=Math.floor(w*V),this.setViewport(0,0,M,w)},this.setEffects=function(M){if(L===Va){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let w=0;w<M.length;w++)if(M[w].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ae)},this.getViewport=function(M){return M.copy(Ue)},this.setViewport=function(M,w,V,O){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,w,V,O),me.viewport(ae.copy(Ue).multiplyScalar(St()).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,w,V,O){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,w,V,O),me.scissor(Me.copy(ot).multiplyScalar(St()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){me.setScissorTest(qe=M)},this.setOpaqueSort=function(M){Fe=M},this.setTransparentSort=function(M){Ot=M},this.getClearColor=function(M){return M.copy(E.getClearColor())},this.setClearColor=function(){E.setClearColor(...arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha(...arguments)},this.clear=function(M=!0,w=!0,V=!0){let O=0;if(M){let z=!1;if(ie!==null){let ge=ie.texture.format;z=x.has(ge)}if(z){let ge=ie.texture.type,Le=f.has(ge),pe=E.getClearColor(),ye=E.getClearAlpha(),Ie=pe.r,ke=pe.g,$e=pe.b;Le?(m[0]=Ie,m[1]=ke,m[2]=$e,m[3]=ye,P.clearBufferuiv(P.COLOR,0,m)):(y[0]=Ie,y[1]=ke,y[2]=$e,y[3]=ye,P.clearBufferiv(P.COLOR,0,y))}else O|=P.COLOR_BUFFER_BIT}w&&(O|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){a.removeEventListener("webglcontextlost",F,!1),a.removeEventListener("webglcontextrestored",he,!1),a.removeEventListener("webglcontextcreationerror",ne,!1),E.dispose(),ce.dispose(),Y.dispose(),Pe.dispose(),De.dispose(),b.dispose(),se.dispose(),N.dispose(),le.dispose(),Ae.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",wo),re.removeEventListener("sessionend",Jn),pa.stop()};function F(M){M.preventDefault(),jg("WebGLRenderer: Context Lost."),U=!0}function he(){jg("WebGLRenderer: Context Restored."),U=!1;let M=At.autoReset,w=fe.enabled,V=fe.autoUpdate,O=fe.needsUpdate,z=fe.type;Ge(),At.autoReset=M,fe.enabled=w,fe.autoUpdate=V,fe.needsUpdate=O,fe.type=z}function ne(M){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Te(M){let w=M.target;w.removeEventListener("dispose",Te),je(w)}function je(M){Ye(M),De.remove(M)}function Ye(M){let w=De.get(M).programs;w!==void 0&&(w.forEach(function(V){$.releaseProgram(V)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,w,V,O,z,ge){w===null&&(w=La);let Le=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=XL(M,w,V,O,z);me.setMaterial(O,Le);let ye=V.index,Ie=1;if(O.wireframe===!0){if(ye=N.getWireframeAttribute(V),ye===void 0)return;Ie=2}let ke=V.drawRange,$e=V.attributes.position,Ce=ke.start*Ie,et=(ke.start+ke.count)*Ie;ge!==null&&(Ce=Math.max(Ce,ge.start*Ie),et=Math.min(et,(ge.start+ge.count)*Ie)),ye!==null?(Ce=Math.max(Ce,0),et=Math.min(et,ye.count)):$e!=null&&(Ce=Math.max(Ce,0),et=Math.min(et,$e.count));let qt=et-Ce;if(qt<0||qt===1/0)return;le.setup(z,O,pe,V,ye);let Mt,yt=X;if(ye!==null&&(Mt=_.get(ye),yt=de,yt.setIndex(Mt)),z.isMesh)O.wireframe===!0?(me.setLineWidth(O.wireframeLinewidth*St()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(z.isLine){let ma=O.linewidth;ma===void 0&&(ma=1),me.setLineWidth(ma*St()),z.isLineSegments?yt.setMode(P.LINES):z.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else z.isPoints?yt.setMode(P.POINTS):z.isSprite&&yt.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))yt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ma=z._multiDrawStarts,be=z._multiDrawCounts,Aa=z._multiDrawCount,lt=ye?_.get(ye).bytesPerElement:1,Cs=De.get(O).currentProgram.getUniforms();for(let ga=0;ga<Aa;ga++)Cs.setValue(P,"_gl_DrawID",ga),yt.render(ma[ga]/lt,be[ga])}else if(z.isInstancedMesh)yt.renderInstances(Ce,qt,z.count);else if(V.isInstancedBufferGeometry){let ma=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,be=Math.min(V.instanceCount,ma);yt.renderInstances(Ce,qt,be)}else yt.render(Ce,qt)};function Ls(M,w,V,O){k!==null&&M.isNodeMaterial&&k.setObject(O,M),Pt===!0&&K.setState(M,V,!1),M.transparent===!0&&M.side===Sn&&M.forceSinglePass===!1?(M.side=Pa,M.needsUpdate=!0,Do(M,w,O),M.side=ys,M.needsUpdate=!0,Do(M,w,O),M.side=Sn):Do(M,w,O)}this.compile=function(M,w,V=null){V===null&&(V=M),k!==null&&k.renderStart(M,w,V),T=Y.get(V),T.init(w),C.push(T),V.traverseVisible(function(z){z.isLight&&z.layers.test(w.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),M!==V&&M.traverseVisible(function(z){z.isLight&&z.layers.test(w.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),Ht=this.localClippingEnabled,Pt=K.init(this.clippingPlanes,Ht),Pt===!0&&K.setGlobalState(this.clippingPlanes,w),k!==null&&fe.render(T.state.shadowsArray,V,w);let O=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ge=z.material;if(ge)if(Array.isArray(ge))for(let Le=0;Le<ge.length;Le++){let pe=ge[Le];Ls(pe,V,w,z),O.add(pe)}else Ls(ge,V,w,z),O.add(ge)}),T=C.pop(),k!==null&&k.renderEnd(),O},this.compileAsync=function(M,w,V=null){let O=this.compile(M,w,V);return new Promise(z=>{function ge(){if(O.forEach(function(Le){let ye=De.get(Le).currentProgram;(ye===void 0||ye.isReady())&&O.delete(Le)}),O.size===0){z(M);return}setTimeout(ge,10)}vt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ft=null;function Kn(M){ft&&ft(M)}function wo(){pa.stop()}function Jn(){pa.start()}let pa=new nL;pa.setAnimationLoop(Kn),typeof self<"u"&&pa.setContext(self),this.setAnimationLoop=function(M){ft=M,re.setAnimationLoop(M),M===null?pa.stop():pa.start()},re.addEventListener("sessionstart",wo),re.addEventListener("sessionend",Jn),this.render=function(M,w){if(w!==void 0&&w.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;k!==null&&k.renderStart(M,w);let V=re.enabled===!0&&re.isPresenting===!0,O=D!==null&&(ie===null||V)&&D.begin(I,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(w),w=re.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,w,ie),T=Y.get(M,C.length),T.init(w),T.state.textureUnits=Pe.getTextureUnits(),C.push(T),xt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.isArrayCamera?bt.setFromArrayCamera(w):Re.setFromProjectionMatrix(xt,xn,w.reversedDepth),Ht=this.localClippingEnabled,Pt=K.init(this.clippingPlanes,Ht),A=ce.get(M,g.length),A.init(),g.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Le=I.xr.getDepthSensingMesh();Le!==null&&Ro(Le,w,-1/0,I.sortObjects)}Ro(M,w,0,I.sortObjects),A.finish(),k!==null&&k.updateLights(T.state.lightsArray),I.sortObjects===!0&&A.sort(Fe,Ot),Ca=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ca&&E.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&K.beginShadows();let z=T.state.shadowsArray;if(fe.render(z,M,w),Pt===!0&&K.endShadows(),(O&&D.hasRenderPass())===!1){let Le=A.opaque,pe=A.transmissive;if(T.setupLights(),w.isArrayCamera){let ye=w.cameras;if(pe.length>0)for(let Ie=0,ke=ye.length;Ie<ke;Ie++){let $e=ye[Ie];ar(Le,pe,M,$e)}Ca&&E.render(M);for(let Ie=0,ke=ye.length;Ie<ke;Ie++){let $e=ye[Ie];dh(A,M,$e,$e.viewport)}}else pe.length>0&&ar(Le,pe,M,w),Ca&&E.render(M),dh(A,M,w)}ie!==null&&q===0&&(Pe.updateMultisampleRenderTarget(ie),Pe.updateRenderTargetMipmap(ie)),O&&D.end(I),M.isScene===!0&&M.onAfterRender(I,M,w),le.resetDefaultState(),B=-1,te=null,C.pop(),C.length>0?(T=C[C.length-1],Pe.setTextureUnits(T.state.textureUnits),Pt===!0&&K.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,k!==null&&k.renderEnd()};function Ro(M,w,V,O){if(M.visible===!1)return;if(M.layers.test(w.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(w);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let Le=w.isArrayCamera?bt:Re;if(!M.frustumCulled||M.intersectsFrustum(Le)){O&&rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);let pe=se.update(M),ye=M.material;ye.visible&&A.push(M,pe,ye,V,rt.z,null,w)}}else if(M.isMesh||M.isLine||M.isPoints){let Le=w.isArrayCamera?bt:Re;if(!M.frustumCulled||M.intersectsFrustum(Le)){let pe=se.update(M),ye=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),rt.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),rt.copy(pe.boundingSphere.center)),rt.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(ye)){let Ie=pe.groups;for(let ke=0,$e=Ie.length;ke<$e;ke++){let Ce=Ie[ke],et=ye[Ce.materialIndex];et&&et.visible&&A.push(M,pe,et,V,rt.z,Ce,w)}}else ye.visible&&A.push(M,pe,ye,V,rt.z,null,w)}}}let ge=M.children;for(let Le=0,pe=ge.length;Le<pe;Le++)Ro(ge[Le],w,V,O)}function dh(M,w,V,O){let{opaque:z,transmissive:ge,transparent:Le}=M;T.setupLightsView(V),Pt===!0&&K.setGlobalState(I.clippingPlanes,V),O&&me.viewport(ae.copy(O)),z.length>0&&ku(z,w,V),ge.length>0&&ku(ge,w,V),Le.length>0&&ku(Le,w,V),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ar(M,w,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Ce=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new an(1,1,{generateMipmaps:!0,type:Ce?En:Va,minFilter:Ei,samples:Math.max(4,Ze.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let ge=T.state.transmissionRenderTarget[O.id],Le=O.viewport||ae;ge.setSize(Le.z*I.transmissionResolutionScale,Le.w*I.transmissionResolutionScale);let pe=I.getRenderTarget(),ye=I.getActiveCubeFace(),Ie=I.getActiveMipmapLevel();I.setRenderTarget(ge),I.getClearColor(J),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),Ca&&E.render(V);let ke=I.toneMapping;I.toneMapping=Xn;let $e=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Pt===!0&&K.setGlobalState(I.clippingPlanes,O),ku(M,V,O),Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let et=0,qt=w.length;et<qt;et++){let Mt=w[et],{object:yt,geometry:ma,material:be,group:Aa}=Mt;if(be.side===Sn&&yt.layers.test(O.layers)){let lt=be.side;be.side=Pa,be.needsUpdate=!0,bx(yt,V,O,ma,be,Aa),be.side=lt,be.needsUpdate=!0,Ce=!0}}Ce===!0&&(Pe.updateMultisampleRenderTarget(ge),Pe.updateRenderTargetMipmap(ge))}I.setRenderTarget(pe,ye,Ie),I.setClearColor(J,xe),$e!==void 0&&(O.viewport=$e),I.toneMapping=ke}function ku(M,w,V){let O=w.isScene===!0?w.overrideMaterial:null;for(let z=0,ge=M.length;z<ge;z++){let Le=M[z],{object:pe,geometry:ye,group:Ie}=Le,ke=Le.material;ke.allowOverride===!0&&O!==null&&(ke=O),pe.layers.test(V.layers)&&bx(pe,w,V,ye,ke,Ie)}}function bx(M,w,V,O,z,ge){k!==null&&z.isNodeMaterial&&k.setObject(M,z),M.onBeforeRender(I,w,V,O,z,ge),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(I,w,V,O,M,ge),z.transparent===!0&&z.side===Sn&&z.forceSinglePass===!1?(z.side=Pa,z.needsUpdate=!0,I.renderBufferDirect(V,w,O,z,M,ge),z.side=ys,z.needsUpdate=!0,I.renderBufferDirect(V,w,O,z,M,ge),z.side=Sn):I.renderBufferDirect(V,w,O,z,M,ge),M.onAfterRender(I,w,V,O,z,ge)}function Ax(M){let w=0;for(let V of M)V.texture!==null&&w++;return w}function Do(M,w,V){w.isScene!==!0&&(w=La);let O=De.get(M),z=T.state.lights,ge=T.state.shadowsArray,Le=z.state.version,pe=$.getParameters(M,z.state,ge,w,V,T.state.lightProbeGridArray),ye=$.getProgramCacheKey(pe),Ie=O.programs;O.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?w.environment:null,O.fog=w.fog;let ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;O.envMap=b.get(M.envMap||O.environment,ke),O.envMapRotation=O.environment!==null&&M.envMap===null?w.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",Te),Ie=new Map,O.programs=Ie,O.programVariants=new Map);let $e=Ie.get(ye);if($e!==void 0){if(O.currentProgram===$e&&O.lightsStateVersion===Le)return Ix(M,pe),$e}else pe.uniforms=$.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,V,pe),M.onBeforeCompile(pe,I),$e=$.acquireProgram(pe,ye),Ie.set(ye,$e),O.uniforms=pe.uniforms;let Ce=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=K.uniform),Ix(M,pe),O.needsLights=ZL(M),O.lightsStateVersion=Le,O.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.sunLights.value=z.state.sun,Ce.sunLightShadows.value=z.state.sunShadow,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.sunShadowMatrix.value=z.state.sunShadowMatrix,Ce.sunShadowCascade.value=z.state.sunShadowCascade,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=Ax(T.state.lightProbeGridArray),O.currentProgram=$e,O.uniformsList=null,$e}function WL(M,w,V,O,z){let ge=De.get(M),Le=ge.currentProgram.id+","+O+","+z,pe=ge.programVariants.get(Le);return pe===void 0?(pe=Do(M,w,V),ge.programVariants.set(Le,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=O,ge.toneMapping=z),pe}function Tx(M){if(M.uniformsList===null){let w=M.currentProgram.getUniforms();M.uniformsList=Ao.seqWithValue(w.seq,M.uniforms)}return M.uniformsList}function Ix(M,w){let V=De.get(M);V.outputColorSpace=w.outputColorSpace,V.batching=w.batching,V.batchingColor=w.batchingColor,V.instancing=w.instancing,V.instancingColor=w.instancingColor,V.instancingMorph=w.instancingMorph,V.skinning=w.skinning,V.morphTargets=w.morphTargets,V.morphNormals=w.morphNormals,V.morphColors=w.morphColors,V.morphTargetsCount=w.morphTargetsCount,V.numClippingPlanes=w.numClippingPlanes,V.numIntersection=w.numClipIntersection,V.vertexAlphas=w.vertexAlphas,V.vertexTangents=w.vertexTangents,V.toneMapping=w.toneMapping}function XL(M,w,V,O,z){w.isScene!==!0&&(w=La),Pe.resetTextureUnits();let ge=w.fog,Le=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?w.environment:null,pe=ie===null?I.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:at.workingColorSpace,ye=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ie=b.get(O.envMap||Le,ye),ke=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,$e=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ce=!!V.morphAttributes.position,et=!!V.morphAttributes.normal,qt=!!V.morphAttributes.color,Mt=Xn;O.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Mt=I.toneMapping);let yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ma=yt!==void 0?yt.length:0,be=De.get(O),Aa=T.state.lights;if(Pt===!0&&(Ht===!0||M!==te)){let Ft=M===te&&O.id===B;K.setState(O,M,Ft)}let lt=!1,Cs=!1;O.version===be.__version?be.needsLights&&be.lightsStateVersion!==Aa.state.version||z.isBatchedMesh&&be.batching===!1||!z.isBatchedMesh&&be.batching===!0||z.isBatchedMesh&&be.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&be.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&be.instancing===!1||!z.isInstancedMesh&&be.instancing===!0||z.isSkinnedMesh&&be.skinning===!1||!z.isSkinnedMesh&&be.skinning===!0||z.isInstancedMesh&&be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&be.instancingMorph===!1&&z.morphTexture!==null||be.envMap!==Ie||O.fog===!0&&be.fog!==ge||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==K.numPlanes||be.numIntersection!==K.numIntersection)||be.vertexAlphas!==ke||be.vertexTangents!==$e||be.morphTargets!==Ce||be.morphNormals!==et||be.morphColors!==qt||be.morphTargetsCount!==ma||be.numLightProbeGrids!==Ax(T.state.lightProbeGridArray)?lt=!0:(be.outputColorSpace!==pe||be.toneMapping!==Mt)&&(Cs=!0):(lt=!0,be.__version=O.version);let ga=be.currentProgram;(lt===!0||Cs===!0)&&(ga=Cs===!0?WL(O,w,z,pe,Mt):Do(O,w,z),k&&O.isNodeMaterial&&k.onUpdateProgram(O,ga,be));let Hu=!1,Di=!1,bs=!1,st=ga.getUniforms(),oa=be.uniforms;if(me.useProgram(ga.program)&&(Hu=!0,Di=!0,bs=!0),O.id!==B&&(B=O.id,Di=!0),Hu||te!==M){me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),st.setValue(P,"projectionMatrix",M.projectionMatrix),st.setValue(P,"viewMatrix",M.matrixWorldInverse);let ta=st.map.cameraPosition;ta!==void 0&&ta.setValue(P,Ua.setFromMatrixPosition(M.matrixWorld)),Ze.logarithmicDepthBuffer&&st.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&st.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),te!==M&&(te=M,Di=!0,bs=!0)}if(be.needsLights&&(Aa.state.sunShadowMap.length>0&&st.setValue(P,"sunShadowMap",Aa.state.sunShadowMap,Pe),Aa.state.directionalShadowMap.length>0&&st.setValue(P,"directionalShadowMap",Aa.state.directionalShadowMap,Pe),Aa.state.spotShadowMap.length>0&&st.setValue(P,"spotShadowMap",Aa.state.spotShadowMap,Pe),Aa.state.pointShadowMap.length>0&&st.setValue(P,"pointShadowMap",Aa.state.pointShadowMap,Pe)),z.isSkinnedMesh){st.setOptional(P,z,"bindMatrix"),st.setOptional(P,z,"bindMatrixInverse");let Ft=z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),st.setValue(P,"boneTexture",Ft.boneTexture,Pe))}z.isBatchedMesh&&(st.setOptional(P,z,"batchingTexture"),st.setValue(P,"batchingTexture",z._matricesTexture,Pe),st.setOptional(P,z,"batchingIdTexture"),st.setValue(P,"batchingIdTexture",z._indirectTexture,Pe),st.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&st.setValue(P,"batchingColorTexture",z._colorsTexture,Pe));let vn=V.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Q.update(z,V,ga),(Di||be.receiveShadow!==z.receiveShadow)&&(be.receiveShadow=z.receiveShadow,st.setValue(P,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&w.environment!==null&&(oa.envMapIntensity.value=w.environmentIntensity),oa.dfgLUT!==void 0&&(oa.dfgLUT.value=AR()),Di){if(st.setValue(P,"toneMappingExposure",I.toneMappingExposure),be.needsLights&&YL(oa,bs),ge&&O.fog===!0&&ue.refreshFogUniforms(oa,ge),ue.refreshMaterialUniforms(oa,O,Se,we,T.state.transmissionRenderTarget[M.id]),be.needsLights&&be.numLightProbeGrids>0){let Ft=v,ta=0;for(let Qn of T.state.lightProbeGridArray)Qn.texture!==null&&(Ft.textures[ta]=Qn.texture,Ft.min[ta]=Qn.boundingBox.min,Ft.max[ta]=Qn.boundingBox.max,Ft.resolution[ta]=Qn.resolution,ta++);for(let Qn in Ft)Ft[Qn].length=ta;oa.probesSH.value=Ft.textures,oa.probesMin.value=Ft.min,oa.probesMax.value=Ft.max,oa.probesResolution.value=Ft.resolution}Ao.upload(P,Tx(be),oa,Pe)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ao.upload(P,Tx(be),oa,Pe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&st.setValue(P,"center",z.center),st.setValue(P,"modelViewMatrix",z.modelViewMatrix),st.setValue(P,"normalMatrix",z.normalMatrix),st.setValue(P,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let Ft=O.uniformsGroups;for(let ta=0,Qn=Ft.length;ta<Qn;ta++){let wx=Ft[ta];Ae.update(wx,ga),Ae.bind(wx,ga)}}return ga}function YL(M,w){M.ambientLightColor.needsUpdate=w,M.lightProbe.needsUpdate=w,M.sunLights.needsUpdate=w,M.sunLightShadows.needsUpdate=w,M.directionalLights.needsUpdate=w,M.directionalLightShadows.needsUpdate=w,M.pointLights.needsUpdate=w,M.pointLightShadows.needsUpdate=w,M.spotLights.needsUpdate=w,M.spotLightShadows.needsUpdate=w,M.rectAreaLights.needsUpdate=w,M.hemisphereLights.needsUpdate=w}function ZL(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,w,V){let O=De.get(M);O.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),De.get(M.texture).__webglTexture=w,De.get(M.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,w){let V=De.get(M);V.__webglFramebuffer=w,V.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(M,w=0,V=0){ie=M,j=w,q=V;let O=null,z=!1,ge=!1;if(M){let pe=De.get(M);if(pe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(P.FRAMEBUFFER,pe.__webglFramebuffer),ae.copy(M.viewport),Me.copy(M.scissor),Ee=M.scissorTest,me.viewport(ae),me.scissor(Me),me.setScissorTest(Ee),B=-1;return}else if(pe.__webglFramebuffer===void 0)Pe.setupRenderTarget(M);else if(pe.__hasExternalTextures)Pe.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ke=M.depthTexture;if(pe.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(M)}}let ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ge=!0);let Ie=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[w])?O=Ie[w][V]:O=Ie[w],z=!0):M.samples>0&&Pe.useMultisampledRTT(M)===!1?O=De.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[V]:O=Ie,ae.copy(M.viewport),Me.copy(M.scissor),Ee=M.scissorTest}else ae.copy(Ue).multiplyScalar(Se).floor(),Me.copy(ot).multiplyScalar(Se).floor(),Ee=qe;if(V!==0&&(O=Z),me.bindFramebuffer(P.FRAMEBUFFER,O)&&me.drawBuffers(M,O),me.viewport(ae),me.scissor(Me),me.setScissorTest(Ee),z){let pe=De.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+w,pe.__webglTexture,V)}else if(ge){let pe=w;for(let ye=0;ye<M.textures.length;ye++){let Ie=De.get(M.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,Ie.__webglTexture,V,pe)}}else if(M!==null&&V!==0){let pe=De.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,V)}B=-1};function Ex(M){let w=De.get(M);return(w.__readFormat!==M.format||w.__readType!==M.type)&&(w.__readFormat=M.format,w.__readType=M.type,w.__formatReadable=Ze.textureFormatReadable(M.format),w.__typeReadable=Ze.textureTypeReadable(M.type)),w}this.readRenderTargetPixels=function(M,w,V,O,z,ge,Le,pe=0){if(!(M&&M.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(ye=ye[Le],Array.isArray(ye)&&(ye=ye[0])),ye){me.bindFramebuffer(P.FRAMEBUFFER,ye);try{let Ie=M.textures[pe],ke=Ie.format,$e=Ie.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe);let Ce=Ex(Ie);if(Ce.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=M.width-O&&V>=0&&V<=M.height-z&&P.readPixels(w,V,O,z,oe.convert(ke),oe.convert($e),ge)}finally{let Ie=ie!==null?De.get(ie).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,w,V,O,z,ge,Le,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(ye=ye[Le],Array.isArray(ye)&&(ye=ye[0])),ye)if(w>=0&&w<=M.width-O&&V>=0&&V<=M.height-z){me.bindFramebuffer(P.FRAMEBUFFER,ye);let Ie=M.textures[pe],ke=Ie.format,$e=Ie.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe);let Ce=Ex(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,et),P.bufferData(P.PIXEL_PACK_BUFFER,ge.byteLength,P.STREAM_READ),P.readPixels(w,V,O,z,oe.convert(ke),oe.convert($e),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let qt=ie!==null?De.get(ie).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,qt);let Mt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await IM(P,Mt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ge),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(et),P.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,w=null,V=0){let O=Math.pow(2,-V),z=Math.floor(M.image.width*O),ge=Math.floor(M.image.height*O),Le=w!==null?w.x:0,pe=w!==null?w.y:0;Pe.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Le,pe,z,ge),me.unbindTexture()},this.copyTextureToTexture=function(M,w,V=null,O=null,z=0,ge=0){let Le,pe,ye,Ie,ke,$e,Ce,et,qt,Mt=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(V!==null)Le=V.max.x-V.min.x,pe=V.max.y-V.min.y,ye=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,ke=V.min.y,$e=V.isBox3?V.min.z:0;else{let st=Math.pow(2,-z);Le=Math.floor(Mt.width*st),pe=Math.floor(Mt.height*st),M.isDataArrayTexture?ye=Mt.depth:M.isData3DTexture?ye=Math.floor(Mt.depth*st):ye=1,Ie=0,ke=0,$e=0}O!==null?(Ce=O.x,et=O.y,qt=O.z):(Ce=0,et=0,qt=0);let yt=oe.convert(w.format),ma=oe.convert(w.type),be;w.isData3DTexture?(Pe.setTexture3D(w,0),be=P.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Pe.setTexture2DArray(w,0),be=P.TEXTURE_2D_ARRAY):(Pe.setTexture2D(w,0),be=P.TEXTURE_2D),me.activeTexture(P.TEXTURE0),me.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,w.flipY),me.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),me.pixelStorei(P.UNPACK_ALIGNMENT,w.unpackAlignment);let Aa=me.getParameter(P.UNPACK_ROW_LENGTH),lt=me.getParameter(P.UNPACK_IMAGE_HEIGHT),Cs=me.getParameter(P.UNPACK_SKIP_PIXELS),ga=me.getParameter(P.UNPACK_SKIP_ROWS),Hu=me.getParameter(P.UNPACK_SKIP_IMAGES);me.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),me.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),me.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),me.pixelStorei(P.UNPACK_SKIP_ROWS,ke),me.pixelStorei(P.UNPACK_SKIP_IMAGES,$e);let Di=M.isDataArrayTexture||M.isData3DTexture,bs=w.isDataArrayTexture||w.isData3DTexture;if(M.isDepthTexture){let st=De.get(M),oa=De.get(w),vn=De.get(st.__renderTarget),Ft=De.get(oa.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,vn.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let ta=0;ta<ye;ta++)Di&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(M).__webglTexture,z,$e+ta),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(w).__webglTexture,ge,qt+ta)),P.blitFramebuffer(Ie,ke,Ie+Le,ke+pe,Ce,et,Ce+Le,et+pe,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||De.has(M)){let st=De.get(M),oa=De.get(w);me.bindFramebuffer(P.READ_FRAMEBUFFER,R),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,W);for(let vn=0;vn<ye;vn++)Di?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,st.__webglTexture,z,$e+vn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,st.__webglTexture,z),bs?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,oa.__webglTexture,ge,qt+vn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,oa.__webglTexture,ge),z!==0?P.blitFramebuffer(Ie,ke,Ie+Le,ke+pe,Ce,et,Ce+Le,et+pe,P.COLOR_BUFFER_BIT,P.NEAREST):bs?P.copyTexSubImage3D(be,ge,Ce,et,qt+vn,Ie,ke,Le,pe):P.copyTexSubImage2D(be,ge,Ce,et,Ie,ke,Le,pe);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else bs?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(be,ge,Ce,et,qt,Le,pe,ye,yt,ma,Mt.data):w.isCompressedArrayTexture?P.compressedTexSubImage3D(be,ge,Ce,et,qt,Le,pe,ye,yt,Mt.data):P.texSubImage3D(be,ge,Ce,et,qt,Le,pe,ye,yt,ma,Mt):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ge,Ce,et,Le,pe,yt,ma,Mt.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ge,Ce,et,Mt.width,Mt.height,yt,Mt.data):P.texSubImage2D(P.TEXTURE_2D,ge,Ce,et,Le,pe,yt,ma,Mt);me.pixelStorei(P.UNPACK_ROW_LENGTH,Aa),me.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt),me.pixelStorei(P.UNPACK_SKIP_PIXELS,Cs),me.pixelStorei(P.UNPACK_SKIP_ROWS,ga),me.pixelStorei(P.UNPACK_SKIP_IMAGES,Hu),ge===0&&w.generateMipmaps===!0&&w.mipmapsAutoUpdate===!0&&P.generateMipmap(be),me.unbindTexture()},this.initRenderTarget=function(M){De.get(M).__webglFramebuffer===void 0&&Pe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Pe.setTextureCube(M,0):M.isData3DTexture?Pe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Pe.setTexture2DArray(M,0):Pe.setTexture2D(M,0),me.unbindTexture()},this.resetState=function(){j=0,q=0,ie=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),a.unpackColorSpace=at._getUnpackColorSpace()}};var ch=jn(As(),1);var pL=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function mL(t,e,a=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:pL(t),size:24,node:e,...a.length>0?{aliases:a}:{}}}var gL=t=>{let e="",a=!1;for(let n of t){if(n==="-"||n==="_"||n<=" "){a=e.length>0;continue}e.length===0?e+=n.toLowerCase():e+=a?n.toUpperCase():n,a=!1}return e};var xL=t=>{let e=gL(t);return e.charAt(0).toUpperCase()+e.slice(1)};var Au=jn(As(),1);var bu=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim();var Ms={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Mx(t){return t!=null}function SL(t,e={}){let a=e.attributeNames??{},n=c=>a[c]??c,i=t.size??t.width??Ms.width,s=t.size??t.height??Ms.height,r=t.aliases?.filter(c=>typeof c=="string"&&c.trim()!=="").map(c=>`lucide-${c}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],l=e.className?.split(" ").filter(Boolean)??[],u=e.includeDefaultClasses===!1?bu(...l):bu("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??Ms["stroke-width"])*Number(t.size??t.width??Ms.width)/Number(e.size??e.width??Ms.width):e.strokeWidth??Ms["stroke-width"];return["svg",{...Object.entries(Ms).reduce((c,[h,S])=>(c[n(h)]=S,c),{}),..."color"in e&&e.color&&{[n("stroke")]:e.color},..."size"in e&&Mx(e.size)&&{[n("width")]:e.size,[n("height")]:e.size},..."width"in e&&Mx(e.width)&&{[n("width")]:e.width},..."height"in e&&Mx(e.height)&&{[n("height")]:e.height},[n("stroke-width")]:d,...u&&{[n("class")]:u},[n("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[n("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(c=>{let[h,S,L]=c,x=e.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...S}:S;return L?[h,x,L]:[h,x]})]}function vL(t,e={}){return SL(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var yL=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Io=jn(As(),1);var IR=(0,Io.createContext)({});var _L=()=>(0,Io.useContext)(IR);var ML=(0,Au.forwardRef)(({color:t,size:e,width:a,height:n,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:l,iconNode:u=[],icon:d={node:u,aliases:[],size:24},...p},c)=>{let{size:h=24,strokeWidth:S=2,absoluteStrokeWidth:L=!1,nonScalingStroke:x=!1,color:f="currentColor",className:m=""}=_L()??{},y=!!l||yL(p),[v,A,T=[]]=vL(d,{color:t??f,width:a??e??h,height:n??e??h,strokeWidth:i??S,absoluteStrokeWidth:s??L,nonScalingStroke:r??x,className:bu(m,o),hasA11yProp:y,attributes:p});return(0,Au.createElement)(v,{ref:c,...A},[...T.map(([g,C])=>(0,Au.createElement)(g,C)),...Array.isArray(l)?l:[l]])});function Ct(t,e=[],a=[]){let n=typeof t=="string"?mL(t,e,a):t,i=(0,ch.forwardRef)(({className:s,...r},o)=>(0,ch.createElement)(ML,{ref:o,icon:n,className:s,...r}));return n.name&&(i.displayName=xL(n.name)),i}var LL={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};LL.node;var Tu=Ct(LL);var CL={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};CL.node;var Eo=Ct(CL);var bL={name:"expand",size:24,node:[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]]};bL.node;var Iu=Ct(bL);var AL={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};AL.node;var Eu=Ct(AL);var TL={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};TL.node;var wu=Ct(TL);var IL={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};IL.node;var Ru=Ct(IL);var EL={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};EL.node;var Du=Ct(EL);var wL={name:"mouse-pointer-2",size:24,node:[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]};wL.node;var Pu=Ct(wL);var RL={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};RL.node;var Uu=Ct(RL);var DL={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};DL.node;var Nu=Ct(DL);var PL={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};PL.node;var Bu=Ct(PL);var UL={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};UL.node;var Ou=Ct(UL);var NL={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};NL.node;var Fu=Ct(NL);var H=jn(zu()),Lx={health:100,ammo:30,kills:0,shots:0,hits:0,time:0,reloading:!1},zL=27,kL=[{x:-9,z:-8,w:5,d:3,h:2.5},{x:9,z:-10,w:5,d:3,h:2.5},{x:-15,z:-1,w:3,d:5,h:2.8},{x:15,z:1,w:3,d:5,h:2.8},{x:-7,z:7,w:4,d:3,h:1.5},{x:8,z:8,w:4,d:3,h:1.5},{x:0,z:-15,w:5,d:3,h:2},{x:0,z:18,w:5,d:3,h:1.5}];function HL(t){return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(Math.floor(t%60)).padStart(2,"0")}`}function Cx(){let t=(0,Jt.useRef)(null),e=(0,Jt.useRef)(null),[a,n]=(0,Jt.useState)("ready"),[i,s]=(0,Jt.useState)(Lx),[r,o]=(0,Jt.useState)(!1),[l,u]=(0,Jt.useState)(""),[d,p]=(0,Jt.useState)(!1),[c,h]=(0,Jt.useState)(!1),[S,L]=(0,Jt.useState)(!1),[x,f]=(0,Jt.useState)(!1),m=(0,Jt.useRef)(null),y=(0,Jt.useRef)(null),v=(0,Jt.useCallback)(()=>{h(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>h(!1),130)},[]),A=(0,Jt.useCallback)(()=>{L(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>L(!1),250)},[]);(0,Jt.useEffect)(()=>{let g=t.current;if(!g)return;let C;try{C=new oh({antialias:!0,powerPreference:"high-performance"})}catch{queueMicrotask(()=>f(!0));return}C.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),C.setSize(g.clientWidth,g.clientHeight),C.shadowMap.enabled=!0,C.shadowMap.type=xd,C.outputColorSpace=wa,C.toneMapping=hu,C.toneMappingExposure=1.15,g.appendChild(C.domElement);let D=new Yl;D.background=new We("#1a292d"),D.fog=new Xl("#243638",.024);let I=new ya(70,g.clientWidth/g.clientHeight,.08,110);I.position.set(0,1.7,22),D.add(I),D.add(new iu("#c4e7de","#293338",2));let U=new uu("#e0e8d3",2.8);U.position.set(-15,35,15),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),U.shadow.camera.left=-35,U.shadow.camera.right=35,U.shadow.camera.top=35,U.shadow.camera.bottom=-35,U.shadow.normalBias=.04,D.add(U);let k=(F,he={})=>new au({color:F,roughness:.82,...he}),Z=k("#404d49"),R=k("#354441"),W=k("#202d2c"),j=k("#81958a"),q=k("#e0ad63",{emissive:"#9c5a1c",emissiveIntensity:.35}),ie=k("#8fffe1",{emissive:"#59f6c6",emissiveIntensity:2});function B(F,he,ne,Te,je,Ye,Ls,ft=D){let Kn=new ha(new gs(F,he,ne),Te);return Kn.position.set(je,Ye,Ls),Kn.castShadow=!0,Kn.receiveShadow=!0,ft.add(Kn),Kn}B(58,.4,58,Z,0,-.25,0);let te=k("#74847a");for(let F=-24;F<=24;F+=6)B(.025,.012,54,te,F,-.035,0),B(54,.012,.025,te,0,-.034,F);for(let F of[-28,28]){B(1,9,58,R,F,4.5,0),B(.12,.1,55,ie,F*.98,3.1,0);for(let he=-24;he<=24;he+=8)B(1.5,10,1.4,W,F,5,he)}for(let F of[-28,28]){B(58,9,1,R,0,4.5,F),B(55,.1,.12,ie,0,3.1,F*.98);for(let he=-24;he<=24;he+=8)B(1.4,10,1.5,W,he,5,F)}for(let F=0;F<18;F++){let he=F/18*Math.PI*2,ne=38+F%3*5,Te=12+F%5*4;B(5+F%3,Te,5,F%2?W:R,Math.sin(he)*ne,Te/2-1,Math.cos(he)*ne)}kL.forEach(F=>{B(F.w,F.h,F.d,W,F.x,F.h/2,F.z),B(F.w+.12,.12,F.d+.12,j,F.x,F.h+.02,F.z),B(F.w*.55,.09,.04,q,F.x,F.h*.65,F.z+F.d/2+.025);for(let he of[-1,1])B(.1,F.h*.8,.08,j,F.x+he*(F.w/2-.25),F.h/2,F.z+F.d/2+.04)});let ae=new ha(new tu(4.4,4.47,64),new So({color:"#97c0a9",side:Sn}));ae.rotation.x=-Math.PI/2,ae.position.y=-.02,D.add(ae);let Me=ae.clone();Me.scale.setScalar(.75),D.add(Me);for(let F=0;F<8;F++){let he=F*Math.PI/4,ne=B(.12,.018,.8,q,Math.sin(he)*4.1,-.01,Math.cos(he)*4.1);ne.rotation.y=he}let Ee=new Hn;Ee.position.set(.42,-.42,-.83),Ee.rotation.set(-.02,-.08,-.02),I.add(Ee);let J=k("#172321",{metalness:.55,roughness:.4}),xe=k("#586c61",{metalness:.5,roughness:.45});B(.25,.23,.8,J,0,0,0,Ee),B(.18,.12,.58,xe,0,.15,-.05,Ee),B(.13,.13,.5,J,0,.03,-.58,Ee),B(.19,.16,.14,xe,0,.03,-.84,Ee),B(.11,.32,.15,J,0,-.24,.16,Ee).rotation.x=-.3,B(.08,.08,.22,ie,.13,.02,.05,Ee),B(.06,.07,.13,q,0,.25,.1,Ee);let _e=new ou("#ffcf85",0,8);_e.position.set(0,.04,-.95),Ee.add(_e);let we=[],Se=k("#253533",{metalness:.5,roughness:.5}),Fe=k("#879889",{metalness:.45,roughness:.45}),Ot=k("#ff8a59",{emissive:"#ff5633",emissiveIntensity:2}),Ue=[];function ot(F,he,ne){let Te=new Hn;Te.position.set(F,0,he),D.add(Te);let je=B(.8,.9,.42,Fe,0,1.37,0,Te);B(.55,.5,.4,Se,0,2.08,0,Te),B(.42,.11,.04,Ot,0,2.08,.22,Te),B(.22,.19,.05,Ot,0,1.42,.23,Te);for(let Ye of[-1,1])B(.22,.77,.25,Se,Ye*.55,1.32,0,Te),B(.3,.26,.34,Fe,Ye*.55,1.7,0,Te),B(.25,.85,.3,Se,Ye*.22,.48,0,Te),B(.29,.18,.39,Fe,Ye*.22,.12,.04,Te);Te.traverse(Ye=>{Ye instanceof ha&&(Ye.userData.botIndex=ne,Ue.push(Ye))}),we.push({group:Te,body:je,health:100,speed:1.3+Math.random()*.6,phase:Math.random()*7,cooldown:1+Math.random()*3,dead:!1})}[[-11,-17],[0,-20],[11,-16],[-18,-12],[17,-4],[-13,2]].forEach(([F,he],ne)=>ot(F,he,ne));let qe="ready",Re={...Lx},bt=0,Pt=0,Ht=!1,xt=0,Ua=0,rt=0,La=0,Ca=!0,St=null,P=0,ba=0,vt=!1,Ze=new Set,me=new fu,At=new cu,De=new Ke(0,0),Pe=new G;function b(F,he,ne="square",Te=.025){if(Ca)try{St??(St=new AudioContext),St.state==="suspended"&&St.resume();let je=St.createOscillator(),Ye=St.createGain();je.type=ne,je.frequency.setValueAtTime(F,St.currentTime),je.frequency.exponentialRampToValueAtTime(Math.max(40,F*.45),St.currentTime+he),Ye.gain.setValueAtTime(Te,St.currentTime),Ye.gain.exponentialRampToValueAtTime(.001,St.currentTime+he),je.connect(Ye),Ye.connect(St.destination),je.start(),je.stop(St.currentTime+he)}catch{}}function _(){s({...Re})}function N(F,he,ne=.45){return Math.abs(F)>zL||Math.abs(he)>zL?!0:kL.some(Te=>Math.abs(F-Te.x)<Te.w/2+ne&&Math.abs(he-Te.z)<Te.d/2+ne)}function se(){Re={...Lx},rt=0,Ua=0,xt=0,I.position.set(0,1.7,22),bt=0,Pt=0,I.rotation.set(0,0,0),we.forEach((F,he)=>{let ne=[[-11,-17],[0,-20],[11,-16],[-18,-12],[17,-4],[-13,2]][he];F.group.position.set(ne[0],0,ne[1]),F.health=100,F.dead=!1,F.group.visible=!0,F.cooldown=1+Math.random()*3}),_()}function $(){if(document.pointerLockElement!==C.domElement){let F=C.domElement.requestPointerLock();F&&typeof F.catch=="function"&&F.catch(()=>u("Kh\xF4ng th\u1EC3 kh\xF3a chu\u1ED9t. H\xE3y nh\u1EA5n v\xE0o m\xE0n h\xECnh \u0111\u1EC3 th\u1EED l\u1EA1i."))}}function ue(){(qe==="gameover"||qe==="ready")&&se(),$()}function ce(){qe!=="playing"||Re.reloading||Re.ammo===30||(Re.reloading=!0,Ua=rt+1.4,b(260,.16,"triangle"),_())}function Y(F){if(qe!=="playing"||Re.reloading||F-xt<.14)return;if(Re.ammo<=0){ce();return}xt=F,Re.ammo--,Re.shots++,P=1,_e.intensity=7,b(125,.09,"sawtooth",.035),At.setFromCamera(De,I);let ne=At.intersectObjects(Ue,!1).find(Te=>{let je=we[Te.object.userData.botIndex];return je&&!je.dead});if(ne){let Te=D.children.filter(Ye=>Ye instanceof ha&&Ye!==ae&&Ye!==Me);if(!At.intersectObjects(Te,!1).some(Ye=>Ye.distance<ne.distance-.05)){let Ye=we[ne.object.userData.botIndex];Ye.health-=34,Re.hits++,v(),b(650,.07,"sine",.025),Ye.health<=0&&(Ye.dead=!0,Ye.group.visible=!1,Re.kills++,Ye.cooldown=rt+3)}}Re.ammo===0&&ce(),_()}function K(){document.pointerLockElement===C.domElement?(qe="playing",n("playing"),u(""),me.getDelta()):qe==="playing"&&(qe="paused",n("paused"),Ht=!1,Ze.clear())}function fe(F){qe==="playing"&&(bt-=F.movementX*.0022,Pt=ax.clamp(Pt-F.movementY*.0022,-1.25,1.25),I.rotation.order="YXZ",I.rotation.set(Pt,bt,0))}function E(F){F.button===0&&qe==="playing"&&(Ht=!0,Y(rt))}function Q(F){F.button===0&&(Ht=!1)}function X(F){["KeyW","KeyA","KeyS","KeyD","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(F.code)&&F.preventDefault(),Ze.add(F.code),F.code==="KeyR"&&!F.repeat&&ce()}function de(F){Ze.delete(F.code)}function oe(){Ze.clear(),Ht=!1}function le(){g&&(C.setSize(g.clientWidth,g.clientHeight),I.aspect=g.clientWidth/g.clientHeight,I.updateProjectionMatrix())}function Ae(){p(!!document.fullscreenElement),le()}function Ge(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>u("Tr\xECnh duy\u1EC7t kh\xF4ng h\u1ED7 tr\u1EE3 to\xE0n m\xE0n h\xECnh."))}document.addEventListener("pointerlockchange",K),document.addEventListener("mousemove",fe),document.addEventListener("mousedown",E),document.addEventListener("mouseup",Q),window.addEventListener("keydown",X),window.addEventListener("keyup",de),window.addEventListener("blur",oe),window.addEventListener("resize",le),document.addEventListener("fullscreenchange",Ae),e.current={start:ue,reload:ce,fullscreen:Ge,sound:F=>{Ca=F}};function re(){if(vt)return;ba=requestAnimationFrame(re);let F=Math.min(me.getDelta(),.05);if(qe==="playing"){rt+=F,Re.time=rt,Re.reloading&&rt>=Ua&&(Re.ammo=30,Re.reloading=!1,b(450,.1,"triangle"),_()),Ht&&Y(rt);let he=Number(Ze.has("KeyW")||Ze.has("ArrowUp"))-Number(Ze.has("KeyS")||Ze.has("ArrowDown")),ne=Number(Ze.has("KeyD")||Ze.has("ArrowRight"))-Number(Ze.has("KeyA")||Ze.has("ArrowLeft")),Te=Math.hypot(he,ne)||1,je=(Ze.has("ShiftLeft")?8:5.2)*F/Te,Ye=(ne*Math.cos(bt)-he*Math.sin(bt))*je,Ls=(-he*Math.cos(bt)-ne*Math.sin(bt))*je;N(I.position.x+Ye,I.position.z)||(I.position.x+=Ye),N(I.position.x,I.position.z+Ls)||(I.position.z+=Ls),P=Math.max(0,P-F*6),_e.intensity=Math.max(0,_e.intensity-F*65),Ee.position.y=-.42-P*.08+(he||ne?Math.sin(rt*10)*.008:0),Ee.position.z=-.83+P*.12,we.forEach((ft,Kn)=>{if(ft.dead){if(rt>=ft.cooldown){let pa=[[-20,-20],[20,-18],[-20,10],[20,10],[0,-22],[-10,-20]][Kn];ft.group.position.set(pa[0],0,pa[1]),ft.health=100,ft.dead=!1,ft.group.visible=!0,ft.cooldown=2}return}Pe.set(I.position.x-ft.group.position.x,0,I.position.z-ft.group.position.z);let wo=Pe.length();if(Pe.normalize(),ft.group.rotation.y=Math.atan2(Pe.x,Pe.z),wo>9){let Jn=ft.group.position.x+Pe.x*ft.speed*F,pa=ft.group.position.z+Pe.z*ft.speed*F;N(Jn,ft.group.position.z,.6)||(ft.group.position.x=Jn),N(ft.group.position.x,pa,.6)||(ft.group.position.z=pa)}else ft.group.position.x+=Math.cos(rt+ft.phase)*F*.3;if(ft.cooldown-=F,wo<22&&ft.cooldown<=0){ft.cooldown=2.3+Math.random()*1.6;let Jn=ft.group.position.clone().add(new G(0,1.5,0)),pa=I.position.clone().sub(Jn),Ro=pa.length();At.set(Jn,pa.normalize()),At.intersectObjects(D.children.filter(ar=>ar instanceof ha),!1).some(ar=>ar.distance<Ro-.3)||(Re.health=Math.max(0,Re.health-8),A(),b(90,.15,"sawtooth",.025),_()),Re.health<=0&&(qe="gameover",n("gameover"),Ht=!1,document.pointerLockElement&&document.exitPointerLock(),_())}}),rt-La>.2&&(La=rt,_())}else qe==="ready"&&(I.rotation.y=Math.sin(performance.now()*15e-5)*.06);C.render(D,I)}return re(),()=>{vt=!0,cancelAnimationFrame(ba),e.current=null,document.removeEventListener("pointerlockchange",K),document.removeEventListener("mousemove",fe),document.removeEventListener("mousedown",E),document.removeEventListener("mouseup",Q),window.removeEventListener("keydown",X),window.removeEventListener("keyup",de),window.removeEventListener("blur",oe),window.removeEventListener("resize",le),document.removeEventListener("fullscreenchange",Ae),document.pointerLockElement===C.domElement&&document.exitPointerLock(),D.traverse(F=>{F instanceof ha&&(F.geometry.dispose(),(Array.isArray(F.material)?F.material:[F.material]).forEach(ne=>ne.dispose()))}),C.dispose(),C.domElement.remove(),St&&St.close(),m.current&&clearTimeout(m.current),y.current&&clearTimeout(y.current)}},[v,A]),(0,Jt.useEffect)(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(new URL("./sw.js",document.baseURI).href)},[]);let T=i.shots?Math.round(i.hits/i.shots*100):0;return(0,H.jsxs)("main",{className:"app-shell",children:[(0,H.jsx)("div",{className:"game-canvas",ref:t}),(0,H.jsx)("div",{className:"vignette"}),(0,H.jsx)("div",{className:`damage ${S?"show":""}`}),(0,H.jsxs)("header",{className:"topbar",children:[(0,H.jsxs)("div",{className:"brand",children:[(0,H.jsx)("div",{className:"brand-mark",children:(0,H.jsx)(Eo,{size:21})}),(0,H.jsxs)("div",{children:[(0,H.jsxs)("div",{className:"brand-name",children:["AIM",(0,H.jsx)("span",{children:"FORGE"}),(0,H.jsx)("i",{children:"\xAE"})]}),(0,H.jsx)("div",{className:"brand-sub",children:"TACTICAL TRAINING SYSTEM"})]})]}),(0,H.jsxs)("div",{className:"top-center",children:[(0,H.jsx)("span",{className:"status-dot"})," H\u1EC6 TH\u1ED0NG TR\u1EF0C TUY\u1EBEN ",(0,H.jsx)("span",{className:"top-divider"})," CH\u1EBE \u0110\u1ED8 NGO\u1EA0I TUY\u1EBEN"]}),(0,H.jsxs)("div",{className:"top-actions",children:[(0,H.jsx)("button",{title:r?"B\u1EADt \xE2m thanh":"T\u1EAFt \xE2m thanh",onClick:()=>{o(!r),e.current?.sound(r)},children:r?(0,H.jsx)(Ou,{size:17}):(0,H.jsx)(Bu,{size:17})}),(0,H.jsx)("button",{title:d?"Tho\xE1t to\xE0n m\xE0n h\xECnh":"To\xE0n m\xE0n h\xECnh",onClick:()=>e.current?.fullscreen(),children:(0,H.jsx)(Iu,{size:17})}),(0,H.jsxs)("div",{className:"profile",children:[(0,H.jsx)("span",{children:"01"}),(0,H.jsxs)("div",{children:[(0,H.jsx)("b",{children:"\u0110\u1EB6C V\u1EE4"}),(0,H.jsx)("small",{children:"NG\u01AF\u1EDCI CH\u01A0I"})]})]})]})]}),(0,H.jsxs)("div",{className:"side-label left-label",children:[(0,H.jsx)("span",{children:"AF / TRAINING GROUNDS"}),(0,H.jsx)("i",{})," ",(0,H.jsx)("span",{children:"SECTOR 07"})]}),(0,H.jsxs)("div",{className:"side-label right-label",children:[(0,H.jsx)("span",{children:"SIMULATION ENVIRONMENT"}),(0,H.jsx)("i",{})," ",(0,H.jsx)("span",{children:"V.01"})]}),a==="playing"&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)("div",{className:"play-top",children:[(0,H.jsxs)("div",{children:[(0,H.jsx)("span",{className:"live-dot"})," \u0110ANG HU\u1EA4N LUY\u1EC6N ",(0,H.jsx)("small",{children:" / \u0110\u1EA4U V\u1EDAI BOT"})]}),(0,H.jsx)("strong",{children:HL(i.time)})]}),(0,H.jsxs)("div",{className:`crosshair ${c?"hit":""}`,children:[(0,H.jsx)("span",{}),(0,H.jsx)("span",{}),(0,H.jsx)("span",{}),(0,H.jsx)("span",{}),(0,H.jsx)("i",{})]}),(0,H.jsxs)("div",{className:"playing-hud",children:[(0,H.jsxs)("div",{className:"hud-health",children:[(0,H.jsxs)("div",{className:"hud-label",children:[(0,H.jsx)(Uu,{size:14})," SINH L\u1EF0C"]}),(0,H.jsxs)("div",{className:"hud-value",children:[i.health,(0,H.jsx)("small",{children:" / 100"})]}),(0,H.jsx)("div",{className:"health-track",children:(0,H.jsx)("i",{style:{width:`${i.health}%`}})})]}),(0,H.jsxs)("div",{className:"hud-score",children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(Nu,{size:14})," H\u1EA0 G\u1EE4C ",(0,H.jsx)("strong",{children:String(i.kills).padStart(2,"0")})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)(Eu,{size:14})," CH\xCDNH X\xC1C ",(0,H.jsxs)("strong",{children:[T,"%"]})]})]}),(0,H.jsxs)("div",{className:"hud-ammo",children:[(0,H.jsxs)("div",{className:"hud-label",children:["AEGIS-IX ",(0,H.jsx)("span",{children:" / \u0110\u1EA0N D\u01AF\u1EE2C"})]}),(0,H.jsxs)("div",{className:"hud-value",children:[String(i.ammo).padStart(2,"0"),(0,H.jsx)("small",{children:" / \u221E"})]}),(0,H.jsx)("div",{className:"ammo-caption",children:i.reloading?"\u0110ANG N\u1EA0P \u0110\u1EA0N...":"[ R ] N\u1EA0P \u0110\u1EA0N"})]})]})]}),a!=="playing"&&(0,H.jsxs)("div",{className:"overlay",children:[(0,H.jsxs)("div",{className:"intro",children:[(0,H.jsxs)("div",{className:"eyebrow",children:[(0,H.jsx)("span",{className:"eyebrow-line"})," PH\xD2NG HU\u1EA4N LUY\u1EC6N CHI\u1EBEN THU\u1EACT ",(0,H.jsx)("span",{className:"eyebrow-number",children:" / 01"})]}),(0,H.jsx)("h1",{children:a==="gameover"?(0,H.jsxs)(H.Fragment,{children:["NHI\u1EC6M V\u1EE4",(0,H.jsx)("br",{}),(0,H.jsx)("em",{children:"K\u1EBET TH\xDAC."})]}):a==="paused"?(0,H.jsxs)(H.Fragment,{children:["T\u1EA0M",(0,H.jsx)("br",{}),(0,H.jsx)("em",{children:"D\u1EEANG."})]}):(0,H.jsxs)(H.Fragment,{children:["S\u1EB4N S\xC0NG",(0,H.jsx)("br",{}),(0,H.jsx)("em",{children:"CHI\u1EBEN \u0110\u1EA4U."})]})}),(0,H.jsx)("p",{children:a==="gameover"?`B\u1EA1n \u0111\xE3 h\u1EA1 ${i.kills} bot trong ${HL(i.time)}. H\xE3y quay l\u1EA1i v\xE0 ph\xE1 k\u1EF7 l\u1EE5c c\u1EE7a m\xECnh.`:a==="paused"?"M\xF4 ph\u1ECFng \u0111ang t\u1EA1m d\u1EEBng. Ti\u1EBFp t\u1EE5c khi b\u1EA1n \u0111\xE3 s\u1EB5n s\xE0ng.":"R\xE8n luy\u1EC7n ph\u1EA3n x\u1EA1, l\xE0m ch\u1EE7 t\xE2m ng\u1EAFm. B\u01B0\u1EDBc v\xE0o \u0111\u1EA5u tr\u01B0\u1EDDng v\xE0 \u0111\u1ED1i \u0111\u1EA7u v\u1EDBi c\xE1c m\u1EE5c ti\xEAu AI."}),(0,H.jsxs)("div",{className:"mode-card",children:[(0,H.jsx)("div",{className:"mode-icon",children:(0,H.jsx)(Eo,{size:22})}),(0,H.jsxs)("div",{className:"mode-copy",children:[(0,H.jsx)("small",{children:"CH\u1EBE \u0110\u1ED8 \u0110\xC3 CH\u1ECCN"}),(0,H.jsx)("b",{children:"\u0110\u1EA4U V\u1EDAI BOT"}),(0,H.jsx)("span",{children:"G\xF3c nh\xECn th\u1EE9 nh\u1EA5t \xB7 Kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian"})]}),(0,H.jsx)("span",{className:"mode-check",children:"\u2713"})]}),(0,H.jsxs)("div",{className:"actions",children:[(0,H.jsxs)("button",{className:"start-button",onClick:()=>e.current?.start(),disabled:x,children:[(0,H.jsx)("span",{children:a==="paused"?"TI\u1EBEP T\u1EE4C":a==="gameover"?"CH\u01A0I L\u1EA0I":"B\u1EAET \u0110\u1EA6U HU\u1EA4N LUY\u1EC6N"}),(0,H.jsx)("span",{className:"arrow",children:"\u2197"})]}),(0,H.jsx)("button",{className:"fullscreen-button",onClick:()=>e.current?.fullscreen(),title:"B\u1EADt / t\u1EAFt to\xE0n m\xE0n h\xECnh",children:(0,H.jsx)(Du,{size:18})})]}),(0,H.jsxs)("div",{className:"offline-note",children:[(0,H.jsx)("span",{})," CH\u01A0I NGAY \xB7 KH\xD4NG C\u1EA6N \u0110\u0102NG NH\u1EACP"]}),l&&(0,H.jsx)("div",{className:"notice",children:l}),x&&(0,H.jsx)("div",{className:"notice",children:"Kh\xF4ng th\u1EC3 kh\u1EDFi t\u1EA1o WebGL. H\xE3y b\u1EADt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng ho\u1EB7c th\u1EED tr\xECnh duy\u1EC7t kh\xE1c."})]}),(0,H.jsxs)("div",{className:"environment-tag",children:[(0,H.jsx)("span",{className:"tag-cross",children:"\u2733"}),(0,H.jsxs)("div",{children:[(0,H.jsx)("small",{children:"\u0110\u1ECAA \u0110I\u1EC2M HU\u1EA4N LUY\u1EC6N"}),(0,H.jsx)("b",{children:"THE PROVING GROUND"}),(0,H.jsx)("span",{children:"SECTOR 07 \u2014 M\xD4 PH\u1ECENG CHI\u1EBEN \u0110\u1EA4U"})]})]}),(0,H.jsxs)("div",{className:"coordinates",children:[`35\xB0 41' 22.8" N`,(0,H.jsx)("br",{}),`139\xB0 41' 30.1" E`]})]}),(0,H.jsxs)("footer",{className:"bottom-bar",children:[(0,H.jsxs)("div",{className:"controls",children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(Ru,{size:17}),(0,H.jsxs)("span",{children:[(0,H.jsx)("b",{children:"W A S D"}),(0,H.jsx)("small",{children:"DI CHUY\u1EC2N"})]})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)(Pu,{size:16}),(0,H.jsxs)("span",{children:[(0,H.jsx)("b",{children:"CHU\u1ED8T"}),(0,H.jsx)("small",{children:"NG\u1EAEM & B\u1EAEN"})]})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("span",{className:"key-icon",children:"R"}),(0,H.jsxs)("span",{children:[(0,H.jsx)("b",{children:"PH\xCDM R"}),(0,H.jsx)("small",{children:"N\u1EA0P \u0110\u1EA0N"})]})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("span",{className:"key-icon",children:"ESC"}),(0,H.jsxs)("span",{children:[(0,H.jsx)("b",{children:"ESC"}),(0,H.jsx)("small",{children:"T\u1EA0M D\u1EEANG"})]})]})]}),(0,H.jsxs)("div",{className:"bottom-right",children:[(0,H.jsx)(wu,{size:16}),(0,H.jsx)("span",{children:"\u0110EO TAI NGHE \u0110\u1EC2 C\xD3 TR\u1EA2I NGHI\u1EC6M T\u1ED0T NH\u1EA4T"}),(0,H.jsx)("i",{})," ",(0,H.jsxs)("b",{children:[(0,H.jsx)(Fu,{size:13})," AIMFORGE ENGINE"]})]})]}),(0,H.jsxs)("div",{className:"mobile-warning",children:[(0,H.jsx)(Tu,{size:20}),(0,H.jsx)("b",{children:"C\u1EA6N B\xC0N PH\xCDM & CHU\u1ED8T"}),(0,H.jsx)("span",{children:"Vui l\xF2ng m\u1EDF tr\xF2 ch\u01A1i tr\xEAn m\xE1y t\xEDnh \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7."})]})]})}var qL=jn(zu()),GL=document.getElementById("root");GL&&(0,VL.createRoot)(GL).render((0,qL.jsx)(Cx,{}));})();
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs:
lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs:
lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs:
lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs:
lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs:
lucide-react/dist/esm/shared/src/build/defaultAttributes.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs:
lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs:
lucide-react/dist/esm/context.mjs:
lucide-react/dist/esm/Icon.mjs:
lucide-react/dist/esm/createLucideIcon.mjs:
lucide-react/dist/esm/icons/activity.mjs:
lucide-react/dist/esm/icons/crosshair.mjs:
lucide-react/dist/esm/icons/expand.mjs:
lucide-react/dist/esm/icons/gauge.mjs:
lucide-react/dist/esm/icons/headphones.mjs:
lucide-react/dist/esm/icons/keyboard.mjs:
lucide-react/dist/esm/icons/maximize.mjs:
lucide-react/dist/esm/icons/mouse-pointer-2.mjs:
lucide-react/dist/esm/icons/shield.mjs:
lucide-react/dist/esm/icons/target.mjs:
lucide-react/dist/esm/icons/volume-2.mjs:
lucide-react/dist/esm/icons/volume-x.mjs:
lucide-react/dist/esm/icons/zap.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.70.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
