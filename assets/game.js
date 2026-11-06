"use strict";(()=>{var vC=Object.create;var e0=Object.defineProperty;var _C=Object.getOwnPropertyDescriptor;var MC=Object.getOwnPropertyNames;var LC=Object.getPrototypeOf,CC=Object.prototype.hasOwnProperty;var Vn=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var bC=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of MC(e))!CC.call(t,i)&&i!==a&&e0(t,i,{get:()=>e[i],enumerable:!(n=_C(e,i))||n.enumerable});return t};var hn=(t,e,a)=>(a=t!=null?vC(LC(t)):{},bC(e||!t||!t.__esModule?e0(a,"default",{value:t,enumerable:!0}):a,t));var c0=Vn(Ot=>{"use strict";function Hh(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<cc(i,e))t[n]=e,t[a]=i,a=n;else break e}}function qn(t){return t.length===0?null:t[0]}function dc(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>cc(o,a))l<i&&0>cc(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>cc(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function cc(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Ot.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(t0=performance,Ot.unstable_now=function(){return t0.now()}):(Fh=Date,a0=Fh.now(),Ot.unstable_now=function(){return Fh.now()-a0});var t0,Fh,a0,ui=[],Vi=[],AC=1,pn=null,Ta=3,Gh=!1,Yo=!1,Zo=!1,Vh=!1,s0=typeof setTimeout=="function"?setTimeout:null,r0=typeof clearTimeout=="function"?clearTimeout:null,n0=typeof setImmediate<"u"?setImmediate:null;function fc(t){for(var e=qn(Vi);e!==null;){if(e.callback===null)dc(Vi);else if(e.startTime<=t)dc(Vi),e.sortIndex=e.expirationTime,Hh(ui,e);else break;e=qn(Vi)}}function qh(t){if(Zo=!1,fc(t),!Yo)if(qn(ui)!==null)Yo=!0,Sr||(Sr=!0,xr());else{var e=qn(Vi);e!==null&&Wh(qh,e.startTime-t)}}var Sr=!1,Ko=-1,o0=5,l0=-1;function u0(){return Vh?!0:!(Ot.unstable_now()-l0<o0)}function zh(){if(Vh=!1,Sr){var t=Ot.unstable_now();l0=t;var e=!0;try{e:{Yo=!1,Zo&&(Zo=!1,r0(Ko),Ko=-1),Gh=!0;var a=Ta;try{t:{for(fc(t),pn=qn(ui);pn!==null&&!(pn.expirationTime>t&&u0());){var n=pn.callback;if(typeof n=="function"){pn.callback=null,Ta=pn.priorityLevel;var i=n(pn.expirationTime<=t);if(t=Ot.unstable_now(),typeof i=="function"){pn.callback=i,fc(t),e=!0;break t}pn===qn(ui)&&dc(ui),fc(t)}else dc(ui);pn=qn(ui)}if(pn!==null)e=!0;else{var s=qn(Vi);s!==null&&Wh(qh,s.startTime-t),e=!1}}break e}finally{pn=null,Ta=a,Gh=!1}e=void 0}}finally{e?xr():Sr=!1}}}var xr;typeof n0=="function"?xr=function(){n0(zh)}:typeof MessageChannel<"u"?(kh=new MessageChannel,i0=kh.port2,kh.port1.onmessage=zh,xr=function(){i0.postMessage(null)}):xr=function(){s0(zh,0)};var kh,i0;function Wh(t,e){Ko=s0(function(){t(Ot.unstable_now())},e)}Ot.unstable_IdlePriority=5;Ot.unstable_ImmediatePriority=1;Ot.unstable_LowPriority=4;Ot.unstable_NormalPriority=3;Ot.unstable_Profiling=null;Ot.unstable_UserBlockingPriority=2;Ot.unstable_cancelCallback=function(t){t.callback=null};Ot.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):o0=0<t?Math.floor(1e3/t):5};Ot.unstable_getCurrentPriorityLevel=function(){return Ta};Ot.unstable_next=function(t){switch(Ta){case 1:case 2:case 3:var e=3;break;default:e=Ta}var a=Ta;Ta=e;try{return t()}finally{Ta=a}};Ot.unstable_requestPaint=function(){Vh=!0};Ot.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Ta;Ta=t;try{return e()}finally{Ta=a}};Ot.unstable_scheduleCallback=function(t,e,a){var n=Ot.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:AC++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,Hh(Vi,t),qn(ui)===null&&t===qn(Vi)&&(Zo?(r0(Ko),Ko=-1):Zo=!0,Wh(qh,a-n))):(t.sortIndex=i,Hh(ui,t),Yo||Gh||(Yo=!0,Sr||(Sr=!0,xr()))),t};Ot.unstable_shouldYield=u0;Ot.unstable_wrapCallback=function(t){var e=Ta;return function(){var a=Ta;Ta=e;try{return t.apply(this,arguments)}finally{Ta=a}}}});var d0=Vn((r2,f0)=>{"use strict";f0.exports=c0()});var L0=Vn(Ge=>{"use strict";var Zh=Symbol.for("react.transitional.element"),TC=Symbol.for("react.portal"),IC=Symbol.for("react.fragment"),EC=Symbol.for("react.strict_mode"),wC=Symbol.for("react.profiler"),RC=Symbol.for("react.consumer"),DC=Symbol.for("react.context"),PC=Symbol.for("react.forward_ref"),UC=Symbol.for("react.suspense"),NC=Symbol.for("react.memo"),x0=Symbol.for("react.lazy"),BC=Symbol.for("react.activity"),h0=Symbol.iterator;function OC(t){return t===null||typeof t!="object"?null:(t=h0&&t[h0]||t["@@iterator"],typeof t=="function"?t:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,v0={};function vr(t,e,a){this.props=t,this.context=e,this.refs=v0,this.updater=a||S0}vr.prototype.isReactComponent={};vr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _0(){}_0.prototype=vr.prototype;function Kh(t,e,a){this.props=t,this.context=e,this.refs=v0,this.updater=a||S0}var Jh=Kh.prototype=new _0;Jh.constructor=Kh;y0(Jh,vr.prototype);Jh.isPureReactComponent=!0;var p0=Array.isArray;function Yh(){}var Rt={H:null,A:null,T:null,S:null},M0=Object.prototype.hasOwnProperty;function Qh(t,e,a){var n=a.ref;return{$$typeof:Zh,type:t,key:e,ref:n!==void 0?n:null,props:a}}function FC(t,e){return Qh(t.type,e,t.props)}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zh}function zC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var m0=/\/+/g;function Xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zC(""+t.key):e.toString(36)}function kC(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Yh,Yh):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function yr(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Zh:case TC:r=!0;break;case x0:return r=t._init,yr(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+Xh(t,0):n,p0(i)?(a="",r!=null&&(a=r.replace(m0,"$&/")+"/"),yr(i,e,a,"",function(u){return u})):i!=null&&(jh(i)&&(i=FC(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(m0,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(p0(t))for(var l=0;l<t.length;l++)n=t[l],s=o+Xh(n,l),r+=yr(n,e,a,s,i);else if(l=OC(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+Xh(n,l++),r+=yr(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return yr(kC(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function hc(t,e,a){if(t==null)return t;var n=[],i=0;return yr(t,n,"","",function(s){return e.call(a,s,i++)}),n}function HC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var g0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},GC={map:hc,forEach:function(t,e,a){hc(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return hc(t,function(){e++}),e},toArray:function(t){return hc(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Activity=BC;Ge.Children=GC;Ge.Component=vr;Ge.Fragment=IC;Ge.Profiler=wC;Ge.PureComponent=Kh;Ge.StrictMode=EC;Ge.Suspense=UC;Ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Rt;Ge.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Rt.H.useMemoCache(t)}};Ge.cache=function(t){return function(){return t.apply(null,arguments)}};Ge.cacheSignal=function(){return null};Ge.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=y0({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!M0.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return Qh(t.type,i,n)};Ge.createContext=function(t){return t={$$typeof:DC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:RC,_context:t},t};Ge.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)M0.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return Qh(t,s,i)};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:PC,render:t}};Ge.isValidElement=jh;Ge.lazy=function(t){return{$$typeof:x0,_payload:{_status:-1,_result:t},_init:HC}};Ge.memo=function(t,e){return{$$typeof:NC,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Rt.T,a={};Rt.T=a;try{var n=t(),i=Rt.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Yh,g0)}catch(s){g0(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Rt.T=e}};Ge.unstable_useCacheRefresh=function(){return Rt.H.useCacheRefresh()};Ge.use=function(t){return Rt.H.use(t)};Ge.useActionState=function(t,e,a){return Rt.H.useActionState(t,e,a)};Ge.useCallback=function(t,e){return Rt.H.useCallback(t,e)};Ge.useContext=function(t){return Rt.H.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t,e){return Rt.H.useDeferredValue(t,e)};Ge.useEffect=function(t,e){return Rt.H.useEffect(t,e)};Ge.useEffectEvent=function(t){return Rt.H.useEffectEvent(t)};Ge.useId=function(){return Rt.H.useId()};Ge.useImperativeHandle=function(t,e,a){return Rt.H.useImperativeHandle(t,e,a)};Ge.useInsertionEffect=function(t,e){return Rt.H.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Rt.H.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Rt.H.useMemo(t,e)};Ge.useOptimistic=function(t,e){return Rt.H.useOptimistic(t,e)};Ge.useReducer=function(t,e,a){return Rt.H.useReducer(t,e,a)};Ge.useRef=function(t){return Rt.H.useRef(t)};Ge.useState=function(t){return Rt.H.useState(t)};Ge.useSyncExternalStore=function(t,e,a){return Rt.H.useSyncExternalStore(t,e,a)};Ge.useTransition=function(){return Rt.H.useTransition()};Ge.version="19.2.6"});var qi=Vn((l2,C0)=>{"use strict";C0.exports=L0()});var A0=Vn(Na=>{"use strict";var VC=qi();function b0(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wi(){}var Ua={d:{f:Wi,r:function(){throw Error(b0(522))},D:Wi,C:Wi,L:Wi,m:Wi,X:Wi,S:Wi,M:Wi},p:0,findDOMNode:null},qC=Symbol.for("react.portal");function WC(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qC,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var Jo=VC.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Na.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ua;Na.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(b0(299));return WC(t,e,null,a)};Na.flushSync=function(t){var e=Jo.T,a=Ua.p;try{if(Jo.T=null,Ua.p=2,t)return t()}finally{Jo.T=e,Ua.p=a,Ua.d.f()}};Na.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Ua.d.C(t,e))};Na.prefetchDNS=function(t){typeof t=="string"&&Ua.d.D(t)};Na.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=pc(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?Ua.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&Ua.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Na.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=pc(e.as,e.crossOrigin);Ua.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Ua.d.M(t)};Na.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=pc(a,e.crossOrigin);Ua.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Na.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=pc(e.as,e.crossOrigin);Ua.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Ua.d.m(t)};Na.requestFormReset=function(t){Ua.d.r(t)};Na.unstable_batchedUpdates=function(t,e){return t(e)};Na.useFormState=function(t,e,a){return Jo.H.useFormState(t,e,a)};Na.useFormStatus=function(){return Jo.H.useHostTransitionStatus()};Na.version="19.2.6"});var E0=Vn((c2,I0)=>{"use strict";function T0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T0)}catch(t){console.error(t)}}T0(),I0.exports=A0()});var H_=Vn(kf=>{"use strict";var ra=d0(),ty=qi(),XC=E0();function ae(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ay(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function ny(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function iy(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w0(t){if(Bl(t)!==t)throw Error(ae(188))}function YC(t){var e=t.alternate;if(!e){if(e=Bl(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return w0(i),t;if(s===n)return w0(i),e;s=s.sibling}throw Error(ae(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error(ae(189))}}if(a.alternate!==n)throw Error(ae(190))}if(a.tag!==3)throw Error(ae(188));return a.stateNode.current===a?t:e}function sy(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=sy(t),e!==null)return e;t=t.sibling}return null}var Ut=Object.assign,ZC=Symbol.for("react.element"),mc=Symbol.for("react.transitional.element"),il=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),Dp=Symbol.for("react.profiler"),oy=Symbol.for("react.consumer"),xi=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Up=Symbol.for("react.suspense_list"),Im=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),Np=Symbol.for("react.activity"),KC=Symbol.for("react.memo_cache_sentinel"),R0=Symbol.iterator;function Qo(t){return t===null||typeof t!="object"?null:(t=R0&&t[R0]||t["@@iterator"],typeof t=="function"?t:null)}var JC=Symbol.for("react.client.reference");function Bp(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===JC?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ar:return"Fragment";case Dp:return"Profiler";case ry:return"StrictMode";case Pp:return"Suspense";case Up:return"SuspenseList";case Np:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case il:return"Portal";case xi:return t.displayName||"Context";case oy:return(t._context.displayName||"Context")+".Consumer";case Tm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Im:return e=t.displayName||null,e!==null?e:Bp(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return Bp(t(e))}catch{}}return null}var sl=Array.isArray,Oe=ty.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=XC.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ks={pending:!1,data:null,method:null,action:null},Op=[],Tr=-1;function Kn(t){return{current:t}}function ha(t){0>Tr||(t.current=Op[Tr],Op[Tr]=null,Tr--)}function Tt(t,e){Tr++,Op[Tr]=t.current,t.current=e}var Zn=Kn(null),Ml=Kn(null),ns=Kn(null),Zc=Kn(null);function Kc(t,e){switch(Tt(ns,e),Tt(Ml,t),Tt(Zn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?FS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=FS(e),t=T_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ha(Zn),Tt(Zn,t)}function Wr(){ha(Zn),ha(Ml),ha(ns)}function Fp(t){t.memoizedState!==null&&Tt(Zc,t);var e=Zn.current,a=T_(e,t.type);e!==a&&(Tt(Ml,t),Tt(Zn,a))}function Jc(t){Ml.current===t&&(ha(Zn),ha(Ml)),Zc.current===t&&(ha(Zc),Pl._currentValue=ks)}var $h,D0;function Bs(t){if($h===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);$h=e&&e[1]||"",D0=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$h+t+D0}var ep=!1;function tp(t,e){if(!t||ep)return"";ep=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var f=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){f=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){f=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var d=`
`+l[n].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=n&&0<=i);break}}}finally{ep=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Bs(a):""}function QC(t,e){switch(t.tag){case 26:case 27:case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return t.child!==e&&e!==null?Bs("Suspense Fallback"):Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 15:return tp(t.type,!1);case 11:return tp(t.type.render,!1);case 1:return tp(t.type,!0);case 31:return Bs("Activity");default:return""}}function P0(t){try{var e="",a=null;do e+=QC(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var zp=Object.prototype.hasOwnProperty,Em=ra.unstable_scheduleCallback,ap=ra.unstable_cancelCallback,jC=ra.unstable_shouldYield,$C=ra.unstable_requestPaint,tn=ra.unstable_now,eb=ra.unstable_getCurrentPriorityLevel,ly=ra.unstable_ImmediatePriority,uy=ra.unstable_UserBlockingPriority,Qc=ra.unstable_NormalPriority,tb=ra.unstable_LowPriority,cy=ra.unstable_IdlePriority,ab=ra.log,nb=ra.unstable_setDisableYieldValue,Ol=null,an=null;function ji(t){if(typeof ab=="function"&&nb(t),an&&typeof an.setStrictMode=="function")try{an.setStrictMode(Ol,t)}catch{}}var nn=Math.clz32?Math.clz32:rb,ib=Math.log,sb=Math.LN2;function rb(t){return t>>>=0,t===0?32:31-(ib(t)/sb|0)|0}var gc=256,xc=262144,Sc=4194304;function Os(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cf(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=Os(n):(r&=o,r!==0?i=Os(r):a||(a=o&~t,a!==0&&(i=Os(a))))):(o=n&~s,o!==0?i=Os(o):r!==0?i=Os(r):a||(a=n&~t,a!==0&&(i=Os(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function Fl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ob(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fy(){var t=Sc;return Sc<<=1,(Sc&62914560)===0&&(Sc=4194304),t}function np(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function zl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function lb(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var d=31-nn(a),p=1<<d;o[d]=0,l[d]=-1;var f=u[d];if(f!==null)for(u[d]=null,d=0;d<f.length;d++){var h=f[d];h!==null&&(h.lane&=-536870913)}a&=~p}n!==0&&dy(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function dy(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-nn(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function hy(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-nn(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function py(t,e){var a=e&-e;return a=(a&42)!==0?1:wm(a),(a&(t.suspendedLanes|e))!==0?0:a}function wm(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rm(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function my(){var t=ht.p;return t!==0?t:(t=window.event,t===void 0?32:F_(t.type))}function U0(t,e){var a=ht.p;try{return ht.p=t,e()}finally{ht.p=a}}var gs=Math.random().toString(36).slice(2),ya="__reactFiber$"+gs,Wa="__reactProps$"+gs,ao="__reactContainer$"+gs,kp="__reactEvents$"+gs,ub="__reactListeners$"+gs,cb="__reactHandles$"+gs,N0="__reactResources$"+gs,kl="__reactMarker$"+gs;function Dm(t){delete t[ya],delete t[Wa],delete t[kp],delete t[ub],delete t[cb]}function Ir(t){var e=t[ya];if(e)return e;for(var a=t.parentNode;a;){if(e=a[ao]||a[ya]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=VS(t);t!==null;){if(a=t[ya])return a;t=VS(t)}return e}t=a,a=t.parentNode}return null}function no(t){if(t=t[ya]||t[ao]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function rl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ae(33))}function Fr(t){var e=t[N0];return e||(e=t[N0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function da(t){t[kl]=!0}var gy=new Set,xy={};function Js(t,e){Xr(t,e),Xr(t+"Capture",e)}function Xr(t,e){for(xy[t]=e,t=0;t<e.length;t++)gy.add(e[t])}var fb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),B0={},O0={};function db(t){return zp.call(O0,t)?!0:zp.call(B0,t)?!1:fb.test(t)?O0[t]=!0:(B0[t]=!0,!1)}function Pc(t,e,a){if(db(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function yc(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ci(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function gn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hb(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hp(t){if(!t._valueTracker){var e=Sy(t)?"checked":"value";t._valueTracker=hb(t,e,""+t[e])}}function yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Sy(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pb=/[\n"\\]/g;function yn(t){return t.replace(pb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Gp(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+gn(e)):t.value!==""+gn(e)&&(t.value=""+gn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Vp(t,r,gn(e)):a!=null?Vp(t,r,gn(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+gn(o):t.removeAttribute("name")}function vy(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Hp(t);return}a=a!=null?""+gn(a):"",e=e!=null?""+gn(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Hp(t)}function Vp(t,e,a){e==="number"&&jc(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function zr(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+gn(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _y(t,e,a){if(e!=null&&(e=""+gn(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+gn(a):""}function My(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(ae(92));if(sl(n)){if(1<n.length)throw Error(ae(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=gn(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),Hp(t)}function Yr(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var mb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function F0(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||mb.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Ly(t,e,a){if(e!=null&&typeof e!="object")throw Error(ae(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&F0(t,i,n)}else for(var s in e)e.hasOwnProperty(s)&&F0(t,s,e[s])}function Pm(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uc(t){return xb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Si(){}var qp=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Er=null,kr=null;function z0(t){var e=no(t);if(e&&(t=e.stateNode)){var a=t[Wa]||null;e:switch(t=e.stateNode,e.type){case"input":if(Gp(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Wa]||null;if(!i)throw Error(ae(90));Gp(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&yy(n)}break e;case"textarea":_y(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&zr(t,!!a.multiple,e,!1)}}}var ip=!1;function Cy(t,e,a){if(ip)return t(e,a);ip=!0;try{var n=t(e);return n}finally{if(ip=!1,(Er!==null||kr!==null)&&(Bf(),Er&&(e=Er,t=kr,kr=Er=null,z0(e),t)))for(e=0;e<t.length;e++)z0(t[e])}}function Ll(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Wa]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(ae(231,e,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wp=!1;if(Li)try{_r={},Object.defineProperty(_r,"passive",{get:function(){Wp=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{Wp=!1}var _r,$i=null,Nm=null,Nc=null;function by(){if(Nc)return Nc;var t,e=Nm,a=e.length,n,i="value"in $i?$i.value:$i.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return Nc=i.slice(t,1<n?1-n:void 0)}function Bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vc(){return!0}function k0(){return!1}function Xa(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vc:k0,this.isPropagationStopped=k0,this}return Ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vc)},persist:function(){},isPersistent:vc}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Xa(Qs),Hl=Ut({},Qs,{view:0,detail:0}),Sb=Xa(Hl),sp,rp,jo,Af=Ut({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(sp=t.screenX-jo.screenX,rp=t.screenY-jo.screenY):rp=sp=0,jo=t),sp)},movementY:function(t){return"movementY"in t?t.movementY:rp}}),H0=Xa(Af),yb=Ut({},Af,{dataTransfer:0}),vb=Xa(yb),_b=Ut({},Hl,{relatedTarget:0}),op=Xa(_b),Mb=Ut({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Lb=Xa(Mb),Cb=Ut({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bb=Xa(Cb),Ab=Ut({},Qs,{data:0}),G0=Xa(Ab),Tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Eb[t])?!!e[t]:!1}function Bm(){return wb}var Rb=Ut({},Hl,{key:function(t){if(t.key){var e=Tb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ib[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(t){return t.type==="keypress"?Bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Db=Xa(Rb),Pb=Ut({},Af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),V0=Xa(Pb),Ub=Ut({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),Nb=Xa(Ub),Bb=Ut({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ob=Xa(Bb),Fb=Ut({},Af,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zb=Xa(Fb),kb=Ut({},Qs,{newState:0,oldState:0}),Hb=Xa(kb),Gb=[9,13,27,32],Om=Li&&"CompositionEvent"in window,ul=null;Li&&"documentMode"in document&&(ul=document.documentMode);var Vb=Li&&"TextEvent"in window&&!ul,Ay=Li&&(!Om||ul&&8<ul&&11>=ul),q0=" ",W0=!1;function Ty(t,e){switch(t){case"keyup":return Gb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function qb(t,e){switch(t){case"compositionend":return Iy(e);case"keypress":return e.which!==32?null:(W0=!0,q0);case"textInput":return t=e.data,t===q0&&W0?null:t;default:return null}}function Wb(t,e){if(wr)return t==="compositionend"||!Om&&Ty(t,e)?(t=by(),Nc=Nm=$i=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ay&&e.locale!=="ko"?null:e.data;default:return null}}var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function X0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Xb[t.type]:e==="textarea"}function Ey(t,e,a,n){Er?kr?kr.push(n):kr=[n]:Er=n,e=xf(e,"onChange"),0<e.length&&(a=new bf("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var cl=null,Cl=null;function Yb(t){C_(t,0)}function Tf(t){var e=rl(t);if(yy(e))return t}function Y0(t,e){if(t==="change")return e}var wy=!1;Li&&(Li?(Mc="oninput"in document,Mc||(lp=document.createElement("div"),lp.setAttribute("oninput","return;"),Mc=typeof lp.oninput=="function"),_c=Mc):_c=!1,wy=_c&&(!document.documentMode||9<document.documentMode));var _c,Mc,lp;function Z0(){cl&&(cl.detachEvent("onpropertychange",Ry),Cl=cl=null)}function Ry(t){if(t.propertyName==="value"&&Tf(Cl)){var e=[];Ey(e,Cl,t,Um(t)),Cy(Yb,e)}}function Zb(t,e,a){t==="focusin"?(Z0(),cl=e,Cl=a,cl.attachEvent("onpropertychange",Ry)):t==="focusout"&&Z0()}function Kb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tf(Cl)}function Jb(t,e){if(t==="click")return Tf(e)}function Qb(t,e){if(t==="input"||t==="change")return Tf(e)}function jb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:jb;function bl(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!zp.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function K0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function J0(t,e){var a=K0(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=K0(a)}}function Dy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Py(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=jc(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=jc(t.document)}return e}function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var $b=Li&&"documentMode"in document&&11>=document.documentMode,Rr=null,Xp=null,fl=null,Yp=!1;function Q0(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yp||Rr==null||Rr!==jc(n)||(n=Rr,"selectionStart"in n&&Fm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),fl&&bl(fl,n)||(fl=n,n=xf(Xp,"onSelect"),0<n.length&&(e=new bf("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Rr)))}function Ns(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Dr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},up={},Uy={};Li&&(Uy=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function js(t){if(up[t])return up[t];if(!Dr[t])return t;var e=Dr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Uy)return up[t]=e[a];return t}var Ny=js("animationend"),By=js("animationiteration"),Oy=js("animationstart"),eA=js("transitionrun"),tA=js("transitionstart"),aA=js("transitioncancel"),Fy=js("transitionend"),zy=new Map,Zp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zp.push("scrollEnd");function Un(t,e){zy.set(t,e),Js(e,[t])}var $c=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mn=[],Pr=0,zm=0;function If(){for(var t=Pr,e=zm=Pr=0;e<t;){var a=mn[e];mn[e++]=null;var n=mn[e];mn[e++]=null;var i=mn[e];mn[e++]=null;var s=mn[e];if(mn[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&ky(a,i,s)}}function Ef(t,e,a,n){mn[Pr++]=t,mn[Pr++]=e,mn[Pr++]=a,mn[Pr++]=n,zm|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function km(t,e,a,n){return Ef(t,e,a,n),ef(t)}function $s(t,e){return Ef(t,null,null,e),ef(t)}function ky(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-nn(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function ef(t){if(50<vl)throw vl=0,mm=null,Error(ae(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ur={};function nA(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $a(t,e,a,n){return new nA(t,e,a,n)}function Hm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vi(t,e){var a=t.alternate;return a===null?(a=$a(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hy(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Oc(t,e,a,n,i,s){var r=0;if(n=t,typeof t=="function")Hm(t)&&(r=1);else if(typeof t=="string")r=rT(t,a,Zn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Np:return t=$a(31,a,e,i),t.elementType=Np,t.lanes=s,t;case Ar:return Hs(a.children,i,s,e);case ry:r=8,i|=24;break;case Dp:return t=$a(12,a,e,i|2),t.elementType=Dp,t.lanes=s,t;case Pp:return t=$a(13,a,e,i),t.elementType=Pp,t.lanes=s,t;case Up:return t=$a(19,a,e,i),t.elementType=Up,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xi:r=10;break e;case oy:r=9;break e;case Tm:r=11;break e;case Im:r=14;break e;case Xi:r=16,n=null;break e}r=29,a=Error(ae(130,t===null?"null":typeof t,"")),n=null}return e=$a(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function Hs(t,e,a,n){return t=$a(7,t,n,e),t.lanes=a,t}function cp(t,e,a){return t=$a(6,t,null,e),t.lanes=a,t}function Gy(t){var e=$a(18,null,null,0);return e.stateNode=t,e}function fp(t,e,a){return e=$a(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var j0=new WeakMap;function vn(t,e){if(typeof t=="object"&&t!==null){var a=j0.get(t);return a!==void 0?a:(e={value:t,source:e,stack:P0(e)},j0.set(t,e),e)}return{value:t,source:e,stack:P0(e)}}var Nr=[],Br=0,tf=null,Al=0,xn=[],Sn=0,ds=null,Wn=1,Xn="";function mi(t,e){Nr[Br++]=Al,Nr[Br++]=tf,tf=t,Al=e}function Vy(t,e,a){xn[Sn++]=Wn,xn[Sn++]=Xn,xn[Sn++]=ds,ds=t;var n=Wn;t=Xn;var i=32-nn(n)-1;n&=~(1<<i),a+=1;var s=32-nn(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,Wn=1<<32-nn(e)+i|a<<i|n,Xn=s+t}else Wn=1<<s|a<<i|n,Xn=t}function Gm(t){t.return!==null&&(mi(t,1),Vy(t,1,0))}function Vm(t){for(;t===tf;)tf=Nr[--Br],Nr[Br]=null,Al=Nr[--Br],Nr[Br]=null;for(;t===ds;)ds=xn[--Sn],xn[Sn]=null,Xn=xn[--Sn],xn[Sn]=null,Wn=xn[--Sn],xn[Sn]=null}function qy(t,e){xn[Sn++]=Wn,xn[Sn++]=Xn,xn[Sn++]=ds,Wn=e.id,Xn=e.overflow,ds=t}var va=null,Pt=null,st=!1,is=null,_n=!1,Kp=Error(ae(519));function hs(t){var e=Error(ae(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Tl(vn(e,t)),Kp}function $0(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[ya]=t,e[Wa]=n,a){case"dialog":je("cancel",e),je("close",e);break;case"iframe":case"object":case"embed":je("load",e);break;case"video":case"audio":for(a=0;a<Rl.length;a++)je(Rl[a],e);break;case"source":je("error",e);break;case"img":case"image":case"link":je("error",e),je("load",e);break;case"details":je("toggle",e);break;case"input":je("invalid",e),vy(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":je("invalid",e);break;case"textarea":je("invalid",e),My(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||A_(e.textContent,a)?(n.popover!=null&&(je("beforetoggle",e),je("toggle",e)),n.onScroll!=null&&je("scroll",e),n.onScrollEnd!=null&&je("scrollend",e),n.onClick!=null&&(e.onclick=Si),e=!0):e=!1,e||hs(t,!0)}function eS(t){for(va=t.return;va;)switch(va.tag){case 5:case 31:case 13:_n=!1;return;case 27:case 3:_n=!0;return;default:va=va.return}}function Mr(t){if(t!==va)return!1;if(!st)return eS(t),st=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vm(t.type,t.memoizedProps)),a=!a),a&&Pt&&hs(t),eS(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));Pt=GS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));Pt=GS(t)}else e===27?(e=Pt,xs(t.type)?(t=Cm,Cm=null,Pt=t):Pt=e):Pt=va?Ln(t.stateNode.nextSibling):null;return!0}function Ws(){Pt=va=null,st=!1}function dp(){var t=is;return t!==null&&(Va===null?Va=t:Va.push.apply(Va,t),is=null),t}function Tl(t){is===null?is=[t]:is.push(t)}var Jp=Kn(null),er=null,yi=null;function Zi(t,e,a){Tt(Jp,e._currentValue),e._currentValue=a}function _i(t){t._currentValue=Jp.current,ha(Jp)}function Qp(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function jp(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),Qp(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(ae(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Qp(r,a,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function io(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(ae(387));if(r=r.memoizedProps,r!==null){var o=i.type;rn(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===Zc.current){if(r=i.alternate,r===null)throw Error(ae(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Pl):t=[Pl])}i=i.return}t!==null&&jp(e,t,a,n),e.flags|=262144}function af(t){for(t=t.firstContext;t!==null;){if(!rn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Xs(t){er=t,yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _a(t){return Wy(er,t)}function Lc(t,e){return er===null&&Xs(t),Wy(t,e)}function Wy(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},yi===null){if(t===null)throw Error(ae(308));yi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else yi=yi.next=e;return a}var iA=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},sA=ra.unstable_scheduleCallback,rA=ra.unstable_NormalPriority,ta={$$typeof:xi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qm(){return{controller:new iA,data:new Map,refCount:0}}function Gl(t){t.refCount--,t.refCount===0&&sA(rA,function(){t.controller.abort()})}var dl=null,$p=0,Zr=0,Hr=null;function oA(t,e){if(dl===null){var a=dl=[];$p=0,Zr=mg(),Hr={status:"pending",value:void 0,then:function(n){a.push(n)}}}return $p++,e.then(tS,tS),e}function tS(){if(--$p===0&&dl!==null){Hr!==null&&(Hr.status="fulfilled");var t=dl;dl=null,Zr=0,Hr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function lA(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var aS=Oe.S;Oe.S=function(t,e){s_=tn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&oA(t,e),aS!==null&&aS(t,e)};var Gs=Kn(null);function Wm(){var t=Gs.current;return t!==null?t:Ct.pooledCache}function Fc(t,e){e===null?Tt(Gs,Gs.current):Tt(Gs,e.pool)}function Xy(){var t=Wm();return t===null?null:{parent:ta._currentValue,pool:t}}var so=Error(ae(460)),Xm=Error(ae(474)),wf=Error(ae(542)),nf={then:function(){}};function nS(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yy(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Si,Si),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sS(t),t;default:if(typeof e.status=="string")e.then(Si,Si);else{if(t=Ct,t!==null&&100<t.shellSuspendCounter)throw Error(ae(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,sS(t),t}throw Vs=e,so}}function Fs(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Vs=a,so):a}}var Vs=null;function iS(){if(Vs===null)throw Error(ae(459));var t=Vs;return Vs=null,t}function sS(t){if(t===so||t===wf)throw Error(ae(483))}var Gr=null,Il=0;function Cc(t){var e=Il;return Il+=1,Gr===null&&(Gr=[]),Yy(Gr,t,e)}function $o(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function bc(t,e){throw e.$$typeof===ZC?Error(ae(525)):(t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Zy(t){function e(c,m){if(t){var v=c.deletions;v===null?(c.deletions=[m],c.flags|=16):v.push(m)}}function a(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function n(c){for(var m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(c,m){return c=vi(c,m),c.index=0,c.sibling=null,c}function s(c,m,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags|=67108866,m):v):(c.flags|=67108866,m)):(c.flags|=1048576,m)}function r(c){return t&&c.alternate===null&&(c.flags|=67108866),c}function o(c,m,v,y){return m===null||m.tag!==6?(m=cp(v,c.mode,y),m.return=c,m):(m=i(m,v),m.return=c,m)}function l(c,m,v,y){var A=v.type;return A===Ar?d(c,m,v.props.children,y,v.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&Fs(A)===m.type)?(m=i(m,v.props),$o(m,v),m.return=c,m):(m=Oc(v.type,v.key,v.props,null,c.mode,y),$o(m,v),m.return=c,m)}function u(c,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=fp(v,c.mode,y),m.return=c,m):(m=i(m,v.children||[]),m.return=c,m)}function d(c,m,v,y,A){return m===null||m.tag!==7?(m=Hs(v,c.mode,y,A),m.return=c,m):(m=i(m,v),m.return=c,m)}function p(c,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=cp(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mc:return v=Oc(m.type,m.key,m.props,null,c.mode,v),$o(v,m),v.return=c,v;case il:return m=fp(m,c.mode,v),m.return=c,m;case Xi:return m=Fs(m),p(c,m,v)}if(sl(m)||Qo(m))return m=Hs(m,c.mode,v,null),m.return=c,m;if(typeof m.then=="function")return p(c,Cc(m),v);if(m.$$typeof===xi)return p(c,Lc(c,m),v);bc(c,m)}return null}function f(c,m,v,y){var A=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return A!==null?null:o(c,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mc:return v.key===A?l(c,m,v,y):null;case il:return v.key===A?u(c,m,v,y):null;case Xi:return v=Fs(v),f(c,m,v,y)}if(sl(v)||Qo(v))return A!==null?null:d(c,m,v,y,null);if(typeof v.then=="function")return f(c,m,Cc(v),y);if(v.$$typeof===xi)return f(c,m,Lc(c,v),y);bc(c,v)}return null}function h(c,m,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return c=c.get(v)||null,o(m,c,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mc:return c=c.get(y.key===null?v:y.key)||null,l(m,c,y,A);case il:return c=c.get(y.key===null?v:y.key)||null,u(m,c,y,A);case Xi:return y=Fs(y),h(c,m,v,y,A)}if(sl(y)||Qo(y))return c=c.get(v)||null,d(m,c,y,A,null);if(typeof y.then=="function")return h(c,m,v,Cc(y),A);if(y.$$typeof===xi)return h(c,m,v,Lc(m,y),A);bc(m,y)}return null}function S(c,m,v,y){for(var A=null,T=null,x=m,C=m=0,D=null;x!==null&&C<v.length;C++){x.index>C?(D=x,x=null):D=x.sibling;var E=f(c,x,v[C],y);if(E===null){x===null&&(x=D);break}t&&x&&E.alternate===null&&e(c,x),m=s(E,m,C),T===null?A=E:T.sibling=E,T=E,x=D}if(C===v.length)return a(c,x),st&&mi(c,C),A;if(x===null){for(;C<v.length;C++)x=p(c,v[C],y),x!==null&&(m=s(x,m,C),T===null?A=x:T.sibling=x,T=x);return st&&mi(c,C),A}for(x=n(x);C<v.length;C++)D=h(x,c,C,v[C],y),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?C:D.key),m=s(D,m,C),T===null?A=D:T.sibling=D,T=D);return t&&x.forEach(function(U){return e(c,U)}),st&&mi(c,C),A}function L(c,m,v,y){if(v==null)throw Error(ae(151));for(var A=null,T=null,x=m,C=m=0,D=null,E=v.next();x!==null&&!E.done;C++,E=v.next()){x.index>C?(D=x,x=null):D=x.sibling;var U=f(c,x,E.value,y);if(U===null){x===null&&(x=D);break}t&&x&&U.alternate===null&&e(c,x),m=s(U,m,C),T===null?A=U:T.sibling=U,T=U,x=D}if(E.done)return a(c,x),st&&mi(c,C),A;if(x===null){for(;!E.done;C++,E=v.next())E=p(c,E.value,y),E!==null&&(m=s(E,m,C),T===null?A=E:T.sibling=E,T=E);return st&&mi(c,C),A}for(x=n(x);!E.done;C++,E=v.next())E=h(x,c,C,E.value,y),E!==null&&(t&&E.alternate!==null&&x.delete(E.key===null?C:E.key),m=s(E,m,C),T===null?A=E:T.sibling=E,T=E);return t&&x.forEach(function(G){return e(c,G)}),st&&mi(c,C),A}function g(c,m,v,y){if(typeof v=="object"&&v!==null&&v.type===Ar&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case mc:e:{for(var A=v.key;m!==null;){if(m.key===A){if(A=v.type,A===Ar){if(m.tag===7){a(c,m.sibling),y=i(m,v.props.children),y.return=c,c=y;break e}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Xi&&Fs(A)===m.type){a(c,m.sibling),y=i(m,v.props),$o(y,v),y.return=c,c=y;break e}a(c,m);break}else e(c,m);m=m.sibling}v.type===Ar?(y=Hs(v.props.children,c.mode,y,v.key),y.return=c,c=y):(y=Oc(v.type,v.key,v.props,null,c.mode,y),$o(y,v),y.return=c,c=y)}return r(c);case il:e:{for(A=v.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){a(c,m.sibling),y=i(m,v.children||[]),y.return=c,c=y;break e}else{a(c,m);break}else e(c,m);m=m.sibling}y=fp(v,c.mode,y),y.return=c,c=y}return r(c);case Xi:return v=Fs(v),g(c,m,v,y)}if(sl(v))return S(c,m,v,y);if(Qo(v)){if(A=Qo(v),typeof A!="function")throw Error(ae(150));return v=A.call(v),L(c,m,v,y)}if(typeof v.then=="function")return g(c,m,Cc(v),y);if(v.$$typeof===xi)return g(c,m,Lc(c,v),y);bc(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(a(c,m.sibling),y=i(m,v),y.return=c,c=y):(a(c,m),y=cp(v,c.mode,y),y.return=c,c=y),r(c)):a(c,m)}return function(c,m,v,y){try{Il=0;var A=g(c,m,v,y);return Gr=null,A}catch(x){if(x===so||x===wf)throw x;var T=$a(29,x,null,c.mode);return T.lanes=y,T.return=c,T}}}var Ys=Zy(!0),Ky=Zy(!1),Yi=!1;function Ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function em(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ss(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rs(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(dt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=ef(t),ky(t,null,a),e}return Ef(t,n,e,a),ef(t)}function hl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,hy(t,a)}}function hp(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var tm=!1;function pl(){if(tm){var t=Hr;if(t!==null)throw t}}function ml(t,e,a,n){tm=!1;var i=t.updateQueue;Yi=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,d=u=l=null,o=s;do{var f=o.lane&-536870913,h=f!==o.lane;if(h?(at&f)===f:(n&f)===f){f!==0&&f===Zr&&(tm=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,L=o;f=e;var g=a;switch(L.tag){case 1:if(S=L.payload,typeof S=="function"){p=S.call(g,p,f);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=L.payload,f=typeof S=="function"?S.call(g,p,f):S,f==null)break e;p=Ut({},p,f);break e;case 2:Yi=!0}}f=o.callback,f!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,r|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,s===null&&(i.shared.lanes=0),ms|=r,t.lanes=r,t.memoizedState=p}}function Jy(t,e){if(typeof t!="function")throw Error(ae(191,t));t.call(e)}function Qy(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jy(a[t],e)}var Kr=Kn(null),sf=Kn(0);function rS(t,e){t=Ti,Tt(sf,t),Tt(Kr,e),Ti=t|e.baseLanes}function am(){Tt(sf,Ti),Tt(Kr,Kr.current)}function Zm(){Ti=sf.current,ha(Kr),ha(sf)}var on=Kn(null),Mn=null;function Ki(t){var e=t.alternate;Tt(Zt,Zt.current&1),Tt(on,t),Mn===null&&(e===null||Kr.current!==null||e.memoizedState!==null)&&(Mn=t)}function nm(t){Tt(Zt,Zt.current),Tt(on,t),Mn===null&&(Mn=t)}function jy(t){t.tag===22?(Tt(Zt,Zt.current),Tt(on,t),Mn===null&&(Mn=t)):Ji(t)}function Ji(){Tt(Zt,Zt.current),Tt(on,on.current)}function ja(t){ha(on),Mn===t&&(Mn=null),ha(Zt)}var Zt=Kn(0);function rf(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mm(a)||Lm(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ci=0,We=null,Mt=null,$t=null,of=!1,Vr=!1,Zs=!1,lf=0,El=0,qr=null,uA=0;function Wt(){throw Error(ae(321))}function Km(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!rn(t[a],e[a]))return!1;return!0}function Jm(t,e,a,n,i,s){return Ci=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oe.H=t===null||t.memoizedState===null?Ev:og,Zs=!1,s=a(n,i),Zs=!1,Vr&&(s=ev(e,a,n,i)),$y(t),s}function $y(t){Oe.H=wl;var e=Mt!==null&&Mt.next!==null;if(Ci=0,$t=Mt=We=null,of=!1,El=0,qr=null,e)throw Error(ae(300));t===null||aa||(t=t.dependencies,t!==null&&af(t)&&(aa=!0))}function ev(t,e,a,n){We=t;var i=0;do{if(Vr&&(qr=null),El=0,Vr=!1,25<=i)throw Error(ae(301));if(i+=1,$t=Mt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Oe.H=wv,s=e(a,n)}while(Vr);return s}function cA(){var t=Oe.H,e=t.useState()[0];return e=typeof e.then=="function"?Vl(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(We.flags|=1024),e}function Qm(){var t=lf!==0;return lf=0,t}function jm(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function $m(t){if(of){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}of=!1}Ci=0,$t=Mt=We=null,Vr=!1,El=lf=0,qr=null}function Ba(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?We.memoizedState=$t=t:$t=$t.next=t,$t}function Kt(){if(Mt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=$t===null?We.memoizedState:$t.next;if(e!==null)$t=e,Mt=t;else{if(t===null)throw We.alternate===null?Error(ae(467)):Error(ae(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},$t===null?We.memoizedState=$t=t:$t=$t.next=t}return $t}function Rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(t){var e=El;return El+=1,qr===null&&(qr=[]),t=Yy(qr,t,e),e=We,($t===null?e.memoizedState:$t.next)===null&&(e=e.alternate,Oe.H=e===null||e.memoizedState===null?Ev:og),t}function Df(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vl(t);if(t.$$typeof===xi)return _a(t)}throw Error(ae(438,String(t)))}function eg(t){var e=null,a=We.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=We.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Rf(),We.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=KC;return e.index++,a}function bi(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Kt();return tg(e,Mt,t)}function tg(t,e,a){var n=t.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,d=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(at&p)===p:(Ci&p)===p){var f=u.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Zr&&(d=!0);else if((Ci&f)===f){u=u.next,f===Zr&&(d=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,We.lanes|=f,ms|=f;p=u.action,Zs&&a(s,p),s=u.hasEagerState?u.eagerState:a(s,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,We.lanes|=p,ms|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!rn(s,t.memoizedState)&&(aa=!0,d&&(a=Hr,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function pp(t){var e=Kt(),a=e.queue;if(a===null)throw Error(ae(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);rn(s,e.memoizedState)||(aa=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function tv(t,e,a){var n=We,i=Kt(),s=st;if(s){if(a===void 0)throw Error(ae(407));a=a()}else a=e();var r=!rn((Mt||i).memoizedState,a);if(r&&(i.memoizedState=a,aa=!0),i=i.queue,ag(iv.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,Jr(9,{destroy:void 0},nv.bind(null,n,i,a,e),null),Ct===null)throw Error(ae(349));s||(Ci&127)!==0||av(n,e,a)}return a}function av(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=We.updateQueue,e===null?(e=Rf(),We.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function nv(t,e,a,n){e.value=a,e.getSnapshot=n,sv(e)&&rv(t)}function iv(t,e,a){return a(function(){sv(e)&&rv(t)})}function sv(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!rn(t,a)}catch{return!0}}function rv(t){var e=$s(t,2);e!==null&&qa(e,t,2)}function im(t){var e=Ba();if(typeof t=="function"){var a=t;if(t=a(),Zs){ji(!0);try{a()}finally{ji(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:t},e}function ov(t,e,a,n){return t.baseState=a,tg(t,Mt,typeof n=="function"?n:bi)}function fA(t,e,a,n,i){if(Uf(t))throw Error(ae(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Oe.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,lv(e,s)):(s.next=a.next,e.pending=a.next=s)}}function lv(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=Oe.T,r={};Oe.T=r;try{var o=a(i,n),l=Oe.S;l!==null&&l(r,o),oS(t,e,o)}catch(u){sm(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),Oe.T=s}}else try{s=a(i,n),oS(t,e,s)}catch(u){sm(t,e,u)}}function oS(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){lS(t,e,n)},function(n){return sm(t,e,n)}):lS(t,e,a)}function lS(t,e,a){e.status="fulfilled",e.value=a,uv(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,lv(t,a)))}function sm(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,uv(e),e=e.next;while(e!==n)}t.action=null}function uv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function cv(t,e){return e}function uS(t,e){if(st){var a=Ct.formState;if(a!==null){e:{var n=We;if(st){if(Pt){t:{for(var i=Pt,s=_n;i.nodeType!==8;){if(!s){i=null;break t}if(i=Ln(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Pt=Ln(i.nextSibling),n=i.data==="F!";break e}}hs(n)}n=!1}n&&(e=a[0])}}return a=Ba(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cv,lastRenderedState:e},a.queue=n,a=Av.bind(null,We,n),n.dispatch=a,n=im(!1),s=rg.bind(null,We,!1,n.queue),n=Ba(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=fA.bind(null,We,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function cS(t){var e=Kt();return fv(e,Mt,t)}function fv(t,e,a){if(e=tg(t,e,cv)[0],t=zc(bi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Vl(e)}catch(r){throw r===so?wf:r}else n=e;e=Kt();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(We.flags|=2048,Jr(9,{destroy:void 0},dA.bind(null,i,a),null)),[n,s,t]}function dA(t,e){t.action=e}function fS(t){var e=Kt(),a=Mt;if(a!==null)return fv(e,a,t);Kt(),e=e.memoizedState,a=Kt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Jr(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=We.updateQueue,e===null&&(e=Rf(),We.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function dv(){return Kt().memoizedState}function kc(t,e,a,n){var i=Ba();We.flags|=t,i.memoizedState=Jr(1|e,{destroy:void 0},a,n===void 0?null:n)}function Pf(t,e,a,n){var i=Kt();n=n===void 0?null:n;var s=i.memoizedState.inst;Mt!==null&&n!==null&&Km(n,Mt.memoizedState.deps)?i.memoizedState=Jr(e,s,a,n):(We.flags|=t,i.memoizedState=Jr(1|e,s,a,n))}function dS(t,e){kc(8390656,8,t,e)}function ag(t,e){Pf(2048,8,t,e)}function hA(t){We.flags|=4;var e=We.updateQueue;if(e===null)e=Rf(),We.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function hv(t){var e=Kt().memoizedState;return hA({ref:e,nextImpl:t}),function(){if((dt&2)!==0)throw Error(ae(440));return e.impl.apply(void 0,arguments)}}function pv(t,e){return Pf(4,2,t,e)}function mv(t,e){return Pf(4,4,t,e)}function gv(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,a){a=a!=null?a.concat([t]):null,Pf(4,4,gv.bind(null,e,t),a)}function ng(){}function Sv(t,e){var a=Kt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Km(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function yv(t,e){var a=Kt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Km(e,n[1]))return n[0];if(n=t(),Zs){ji(!0);try{t()}finally{ji(!1)}}return a.memoizedState=[n,e],n}function ig(t,e,a){return a===void 0||(Ci&1073741824)!==0&&(at&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=o_(),We.lanes|=t,ms|=t,a)}function vv(t,e,a,n){return rn(a,e)?a:Kr.current!==null?(t=ig(t,a,n),rn(t,e)||(aa=!0),t):(Ci&42)===0||(Ci&1073741824)!==0&&(at&261930)===0?(aa=!0,t.memoizedState=a):(t=o_(),We.lanes|=t,ms|=t,e)}function _v(t,e,a,n,i){var s=ht.p;ht.p=s!==0&&8>s?s:8;var r=Oe.T,o={};Oe.T=o,rg(t,!1,e,a);try{var l=i(),u=Oe.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=lA(l,n);gl(t,e,d,sn(t))}else gl(t,e,n,sn(t))}catch(p){gl(t,e,{then:function(){},status:"rejected",reason:p},sn())}finally{ht.p=s,r!==null&&o.types!==null&&(r.types=o.types),Oe.T=r}}function pA(){}function rm(t,e,a,n){if(t.tag!==5)throw Error(ae(476));var i=Mv(t).queue;_v(t,i,e,ks,a===null?pA:function(){return Lv(t),a(n)})}function Mv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ks,baseState:ks,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:ks},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Lv(t){var e=Mv(t);e.next===null&&(e=t.alternate.memoizedState),gl(t,e.next.queue,{},sn())}function sg(){return _a(Pl)}function Cv(){return Kt().memoizedState}function bv(){return Kt().memoizedState}function mA(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=sn();t=ss(a);var n=rs(e,t,a);n!==null&&(qa(n,e,a),hl(n,e,a)),e={cache:qm()},t.payload=e;return}e=e.return}}function gA(t,e,a){var n=sn();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Uf(t)?Tv(e,a):(a=km(t,e,a,n),a!==null&&(qa(a,t,n),Iv(a,e,n)))}function Av(t,e,a){var n=sn();gl(t,e,a,n)}function gl(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uf(t))Tv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,rn(o,r))return Ef(t,e,i,0),Ct===null&&If(),!1}catch{}if(a=km(t,e,i,n),a!==null)return qa(a,t,n),Iv(a,e,n),!0}return!1}function rg(t,e,a,n){if(n={lane:2,revertLane:mg(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Uf(t)){if(e)throw Error(ae(479))}else e=km(t,a,n,2),e!==null&&qa(e,t,2)}function Uf(t){var e=t.alternate;return t===We||e!==null&&e===We}function Tv(t,e){Vr=of=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Iv(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,hy(t,a)}}var wl={readContext:_a,use:Df,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useLayoutEffect:Wt,useInsertionEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useSyncExternalStore:Wt,useId:Wt,useHostTransitionStatus:Wt,useFormState:Wt,useActionState:Wt,useOptimistic:Wt,useMemoCache:Wt,useCacheRefresh:Wt};wl.useEffectEvent=Wt;var Ev={readContext:_a,use:Df,useCallback:function(t,e){return Ba().memoizedState=[t,e===void 0?null:e],t},useContext:_a,useEffect:dS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,kc(4194308,4,gv.bind(null,e,t),a)},useLayoutEffect:function(t,e){return kc(4194308,4,t,e)},useInsertionEffect:function(t,e){kc(4,2,t,e)},useMemo:function(t,e){var a=Ba();e=e===void 0?null:e;var n=t();if(Zs){ji(!0);try{t()}finally{ji(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Ba();if(a!==void 0){var i=a(e);if(Zs){ji(!0);try{a(e)}finally{ji(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=gA.bind(null,We,t),[n.memoizedState,t]},useRef:function(t){var e=Ba();return t={current:t},e.memoizedState=t},useState:function(t){t=im(t);var e=t.queue,a=Av.bind(null,We,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:ng,useDeferredValue:function(t,e){var a=Ba();return ig(a,t,e)},useTransition:function(){var t=im(!1);return t=_v.bind(null,We,t.queue,!0,!1),Ba().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=We,i=Ba();if(st){if(a===void 0)throw Error(ae(407));a=a()}else{if(a=e(),Ct===null)throw Error(ae(349));(at&127)!==0||av(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,dS(iv.bind(null,n,s,t),[t]),n.flags|=2048,Jr(9,{destroy:void 0},nv.bind(null,n,s,a,e),null),a},useId:function(){var t=Ba(),e=Ct.identifierPrefix;if(st){var a=Xn,n=Wn;a=(n&~(1<<32-nn(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=lf++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=uA++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:sg,useFormState:uS,useActionState:uS,useOptimistic:function(t){var e=Ba();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=rg.bind(null,We,!0,a),a.dispatch=e,[t,e]},useMemoCache:eg,useCacheRefresh:function(){return Ba().memoizedState=mA.bind(null,We)},useEffectEvent:function(t){var e=Ba(),a={impl:t};return e.memoizedState=a,function(){if((dt&2)!==0)throw Error(ae(440));return a.impl.apply(void 0,arguments)}}},og={readContext:_a,use:Df,useCallback:Sv,useContext:_a,useEffect:ag,useImperativeHandle:xv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:yv,useReducer:zc,useRef:dv,useState:function(){return zc(bi)},useDebugValue:ng,useDeferredValue:function(t,e){var a=Kt();return vv(a,Mt.memoizedState,t,e)},useTransition:function(){var t=zc(bi)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:Vl(t),e]},useSyncExternalStore:tv,useId:Cv,useHostTransitionStatus:sg,useFormState:cS,useActionState:cS,useOptimistic:function(t,e){var a=Kt();return ov(a,Mt,t,e)},useMemoCache:eg,useCacheRefresh:bv};og.useEffectEvent=hv;var wv={readContext:_a,use:Df,useCallback:Sv,useContext:_a,useEffect:ag,useImperativeHandle:xv,useInsertionEffect:pv,useLayoutEffect:mv,useMemo:yv,useReducer:pp,useRef:dv,useState:function(){return pp(bi)},useDebugValue:ng,useDeferredValue:function(t,e){var a=Kt();return Mt===null?ig(a,t,e):vv(a,Mt.memoizedState,t,e)},useTransition:function(){var t=pp(bi)[0],e=Kt().memoizedState;return[typeof t=="boolean"?t:Vl(t),e]},useSyncExternalStore:tv,useId:Cv,useHostTransitionStatus:sg,useFormState:fS,useActionState:fS,useOptimistic:function(t,e){var a=Kt();return Mt!==null?ov(a,Mt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:eg,useCacheRefresh:bv};wv.useEffectEvent=hv;function mp(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:Ut({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var om={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=sn(),i=ss(n);i.payload=e,a!=null&&(i.callback=a),e=rs(t,i,n),e!==null&&(qa(e,t,n),hl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=sn(),i=ss(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=rs(t,i,n),e!==null&&(qa(e,t,n),hl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=sn(),n=ss(a);n.tag=2,e!=null&&(n.callback=e),e=rs(t,n,a),e!==null&&(qa(e,t,a),hl(e,t,a))}};function hS(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!bl(a,n)||!bl(i,s):!0}function pS(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&om.enqueueReplaceState(e,e.state,null)}function Ks(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=Ut({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function Rv(t){$c(t)}function Dv(t){console.error(t)}function Pv(t){$c(t)}function uf(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function mS(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lm(t,e,a){return a=ss(a),a.tag=3,a.payload={element:null},a.callback=function(){uf(t,e)},a}function Uv(t){return t=ss(t),t.tag=3,t}function Nv(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){mS(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){mS(e,a,n),typeof i!="function"&&(os===null?os=new Set([this]):os.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function xA(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&io(e,a,i,!0),a=on.current,a!==null){switch(a.tag){case 31:case 13:return Mn===null?pf():a.alternate===null&&Xt===0&&(Xt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===nf?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Ap(t,n,i)),!1;case 22:return a.flags|=65536,n===nf?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Ap(t,n,i)),!1}throw Error(ae(435,a.tag))}return Ap(t,n,i),pf(),!1}if(st)return e=on.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Kp&&(t=Error(ae(422),{cause:n}),Tl(vn(t,a)))):(n!==Kp&&(e=Error(ae(423),{cause:n}),Tl(vn(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=vn(n,a),i=lm(t.stateNode,n,i),hp(t,i),Xt!==4&&(Xt=2)),!1;var s=Error(ae(520),{cause:n});if(s=vn(s,a),yl===null?yl=[s]:yl.push(s),Xt!==4&&(Xt=2),e===null)return!0;n=vn(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=lm(a.stateNode,n,t),hp(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(os===null||!os.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Uv(i),Nv(i,t,a,n),hp(a,i),!1}a=a.return}while(a!==null);return!1}var lg=Error(ae(461)),aa=!1;function Sa(t,e,a,n){e.child=t===null?Ky(e,null,a,n):Ys(e,t.child,a,n)}function gS(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return Xs(e),n=Jm(t,e,a,r,s,i),o=Qm(),t!==null&&!aa?(jm(t,e,i),Ai(t,e,i)):(st&&o&&Gm(e),e.flags|=1,Sa(t,e,n,i),e.child)}function xS(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!Hm(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,Bv(t,e,s,n,i)):(t=Oc(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!ug(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:bl,a(r,n)&&t.ref===e.ref)return Ai(t,e,i)}return e.flags|=1,t=vi(s,n),t.ref=e.ref,t.return=e,e.child=t}function Bv(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if(bl(s,n)&&t.ref===e.ref)if(aa=!1,e.pendingProps=n=s,ug(t,i))(t.flags&131072)!==0&&(aa=!0);else return e.lanes=t.lanes,Ai(t,e,i)}return um(t,e,a,n,i)}function Ov(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return SS(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fc(e,s!==null?s.cachePool:null),s!==null?rS(e,s):am(),jy(e);else return n=e.lanes=536870912,SS(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(Fc(e,s.cachePool),rS(e,s),Ji(e),e.memoizedState=null):(t!==null&&Fc(e,null),am(),Ji(e));return Sa(t,e,i,a),e.child}function ol(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function SS(t,e,a,n,i){var s=Wm();return s=s===null?null:{parent:ta._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&Fc(e,null),am(),jy(e),t!==null&&io(t,e,n,!0),e.childLanes=i,null}function Hc(t,e){return e=cf({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function yS(t,e,a){return Ys(e,t.child,null,a),t=Hc(e,e.pendingProps),t.flags|=2,ja(e),e.memoizedState=null,t}function SA(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(st){if(n.mode==="hidden")return t=Hc(e,n),e.lanes=536870912,ol(null,t);if(nm(e),(t=Pt)?(t=E_(t,_n),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ds!==null?{id:Wn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},a=Gy(t),a.return=e,e.child=a,va=e,Pt=null)):t=null,t===null)throw hs(e);return e.lanes=536870912,null}return Hc(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(nm(e),i)if(e.flags&256)e.flags&=-257,e=yS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ae(558));else if(aa||io(t,e,a,!1),i=(a&t.childLanes)!==0,aa||i){if(n=Ct,n!==null&&(r=py(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,$s(t,r),qa(n,t,r),lg;pf(),e=yS(t,e,a)}else t=s.treeContext,Pt=Ln(r.nextSibling),va=e,st=!0,is=null,_n=!1,t!==null&&qy(e,t),e=Hc(e,n),e.flags|=4096;return e}return t=vi(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Gc(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(ae(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function um(t,e,a,n,i){return Xs(e),a=Jm(t,e,a,n,void 0,i),n=Qm(),t!==null&&!aa?(jm(t,e,i),Ai(t,e,i)):(st&&n&&Gm(e),e.flags|=1,Sa(t,e,a,i),e.child)}function vS(t,e,a,n,i,s){return Xs(e),e.updateQueue=null,a=ev(e,n,a,i),$y(t),n=Qm(),t!==null&&!aa?(jm(t,e,s),Ai(t,e,s)):(st&&n&&Gm(e),e.flags|=1,Sa(t,e,a,s),e.child)}function _S(t,e,a,n,i){if(Xs(e),e.stateNode===null){var s=Ur,r=a.contextType;typeof r=="object"&&r!==null&&(s=_a(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=om,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},Ym(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?_a(r):Ur,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(mp(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&om.enqueueReplaceState(s,s.state,null),ml(e,n,s,i),pl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=Ks(a,o);s.props=l;var u=s.context,d=a.contextType;r=Ur,typeof d=="object"&&d!==null&&(r=_a(d));var p=a.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&pS(e,s,n,r),Yi=!1;var f=e.memoizedState;s.state=f,ml(e,n,s,i),pl(),u=e.memoizedState,o||f!==u||Yi?(typeof p=="function"&&(mp(e,a,p,n),u=e.memoizedState),(l=Yi||hS(e,a,l,n,f,u,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,em(t,e),r=e.memoizedProps,d=Ks(a,r),s.props=d,p=e.pendingProps,f=s.context,u=a.contextType,l=Ur,typeof u=="object"&&u!==null&&(l=_a(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||f!==l)&&pS(e,s,n,l),Yi=!1,f=e.memoizedState,s.state=f,ml(e,n,s,i),pl();var h=e.memoizedState;r!==p||f!==h||Yi||t!==null&&t.dependencies!==null&&af(t.dependencies)?(typeof o=="function"&&(mp(e,a,o,n),h=e.memoizedState),(d=Yi||hS(e,a,d,n,f,h,l)||t!==null&&t.dependencies!==null&&af(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,Gc(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=Ys(e,t.child,null,i),e.child=Ys(e,null,a,i)):Sa(t,e,a,i),e.memoizedState=s.state,t=e.child):t=Ai(t,e,i),t}function MS(t,e,a,n){return Ws(),e.flags|=256,Sa(t,e,a,n),e.child}var gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xp(t){return{baseLanes:t,cachePool:Xy()}}function Sp(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=en),t}function Fv(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(st){if(i?Ki(e):Ji(e),(t=Pt)?(t=E_(t,_n),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:ds!==null?{id:Wn,overflow:Xn}:null,retryLane:536870912,hydrationErrors:null},a=Gy(t),a.return=e,e.child=a,va=e,Pt=null)):t=null,t===null)throw hs(e);return Lm(t)?e.lanes=32:e.lanes=536870912,null}var o=n.children;return n=n.fallback,i?(Ji(e),i=e.mode,o=cf({mode:"hidden",children:o},i),n=Hs(n,i,a,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n=e.child,n.memoizedState=xp(a),n.childLanes=Sp(t,r,a),e.memoizedState=gp,ol(null,n)):(Ki(e),cm(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Ki(e),e.flags&=-257,e=yp(t,e,a)):e.memoizedState!==null?(Ji(e),e.child=t.child,e.flags|=128,e=null):(Ji(e),o=n.fallback,i=e.mode,n=cf({mode:"visible",children:n.children},i),o=Hs(o,i,a,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,Ys(e,t.child,null,a),n=e.child,n.memoizedState=xp(a),n.childLanes=Sp(t,r,a),e.memoizedState=gp,e=ol(null,n));else if(Ki(e),Lm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,n=Error(ae(419)),n.stack="",n.digest=r,Tl({value:n,source:null,stack:null}),e=yp(t,e,a)}else if(aa||io(t,e,a,!1),r=(a&t.childLanes)!==0,aa||r){if(r=Ct,r!==null&&(n=py(r,a),n!==0&&n!==l.retryLane))throw l.retryLane=n,$s(t,n),qa(r,t,n),lg;Mm(o)||pf(),e=yp(t,e,a)}else Mm(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Pt=Ln(o.nextSibling),va=e,st=!0,is=null,_n=!1,t!==null&&qy(e,t),e=cm(e,n.children),e.flags|=4096);return e}return i?(Ji(e),o=n.fallback,i=e.mode,l=t.child,u=l.sibling,n=vi(l,{mode:"hidden",children:n.children}),n.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=vi(u,o):(o=Hs(o,i,a,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,ol(null,n),n=e.child,o=t.child.memoizedState,o===null?o=xp(a):(i=o.cachePool,i!==null?(l=ta._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=Xy(),o={baseLanes:o.baseLanes|a,cachePool:i}),n.memoizedState=o,n.childLanes=Sp(t,r,a),e.memoizedState=gp,ol(t.child,n)):(Ki(e),a=t.child,t=a.sibling,a=vi(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function cm(t,e){return e=cf({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function cf(t,e){return t=$a(22,t,null,e),t.lanes=0,t}function yp(t,e,a){return Ys(e,t.child,null,a),t=cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LS(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Qp(t.return,e,a)}function vp(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function zv(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=Zt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Tt(Zt,r),Sa(t,e,n,a),n=st?Al:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&LS(t,a,e);else if(t.tag===19)LS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&rf(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),vp(e,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rf(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}vp(e,!0,a,null,s,n);break;case"together":vp(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Ai(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(io(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,a=vi(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=vi(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function ug(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&af(t)))}function yA(t,e,a){switch(e.tag){case 3:Kc(e,e.stateNode.containerInfo),Zi(e,ta,t.memoizedState.cache),Ws();break;case 27:case 5:Fp(e);break;case 4:Kc(e,e.stateNode.containerInfo);break;case 10:Zi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,nm(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Ki(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Fv(t,e,a):(Ki(e),t=Ai(t,e,a),t!==null?t.sibling:null);Ki(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(io(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return zv(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Tt(Zt,Zt.current),n)break;return null;case 22:return e.lanes=0,Ov(t,e,a,e.pendingProps);case 24:Zi(e,ta,t.memoizedState.cache)}return Ai(t,e,a)}function kv(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)aa=!0;else{if(!ug(t,a)&&(e.flags&128)===0)return aa=!1,yA(t,e,a);aa=(t.flags&131072)!==0}else aa=!1,st&&(e.flags&1048576)!==0&&Vy(e,Al,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=Fs(e.elementType),e.type=t,typeof t=="function")Hm(t)?(n=Ks(t,n),e.tag=1,e=_S(null,e,t,n,a)):(e.tag=0,e=um(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===Tm){e.tag=11,e=gS(null,e,t,n,a);break e}else if(i===Im){e.tag=14,e=xS(null,e,t,n,a);break e}}throw e=Bp(t)||t,Error(ae(306,e,""))}}return e;case 0:return um(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Ks(n,e.pendingProps),_S(t,e,n,i,a);case 3:e:{if(Kc(e,e.stateNode.containerInfo),t===null)throw Error(ae(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,em(t,e),ml(e,n,null,a);var r=e.memoizedState;if(n=r.cache,Zi(e,ta,n),n!==s.cache&&jp(e,[ta],a,!0),pl(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=MS(t,e,n,a);break e}else if(n!==i){i=vn(Error(ae(424)),e),Tl(i),e=MS(t,e,n,a);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Pt=Ln(t.firstChild),va=e,st=!0,is=null,_n=!0,a=Ky(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),n===i){e=Ai(t,e,a);break e}Sa(t,e,n,a)}e=e.child}return e;case 26:return Gc(t,e),t===null?(a=WS(e.type,null,e.pendingProps,null))?e.memoizedState=a:st||(a=e.type,t=e.pendingProps,n=Sf(ns.current).createElement(a),n[ya]=e,n[Wa]=t,Ma(n,a,t),da(n),e.stateNode=n):e.memoizedState=WS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Fp(e),t===null&&st&&(n=e.stateNode=w_(e.type,e.pendingProps,ns.current),va=e,_n=!0,i=Pt,xs(e.type)?(Cm=i,Pt=Ln(n.firstChild)):Pt=i),Sa(t,e,e.pendingProps.children,a),Gc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&st&&((i=n=Pt)&&(n=YA(n,e.type,e.pendingProps,_n),n!==null?(e.stateNode=n,va=e,Pt=Ln(n.firstChild),_n=!1,i=!0):i=!1),i||hs(e)),Fp(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,vm(i,s)?n=null:r!==null&&vm(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=Jm(t,e,cA,null,null,a),Pl._currentValue=i),Gc(t,e),Sa(t,e,n,a),e.child;case 6:return t===null&&st&&((t=a=Pt)&&(a=ZA(a,e.pendingProps,_n),a!==null?(e.stateNode=a,va=e,Pt=null,t=!0):t=!1),t||hs(e)),null;case 13:return Fv(t,e,a);case 4:return Kc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Ys(e,null,n,a):Sa(t,e,n,a),e.child;case 11:return gS(t,e,e.type,e.pendingProps,a);case 7:return Sa(t,e,e.pendingProps,a),e.child;case 8:return Sa(t,e,e.pendingProps.children,a),e.child;case 12:return Sa(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Zi(e,e.type,n.value),Sa(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Xs(e),i=_a(i),n=n(i),e.flags|=1,Sa(t,e,n,a),e.child;case 14:return xS(t,e,e.type,e.pendingProps,a);case 15:return Bv(t,e,e.type,e.pendingProps,a);case 19:return zv(t,e,a);case 31:return SA(t,e,a);case 22:return Ov(t,e,a,e.pendingProps);case 24:return Xs(e),n=_a(ta),t===null?(i=Wm(),i===null&&(i=Ct,s=qm(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},Ym(e),Zi(e,ta,i)):((t.lanes&a)!==0&&(em(t,e),ml(e,null,null,a),pl()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Zi(e,ta,n)):(n=s.cache,Zi(e,ta,n),n!==i.cache&&jp(e,[ta],a,!0))),Sa(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(ae(156,e.tag))}function fi(t){t.flags|=4}function _p(t,e,a,n,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(c_())t.flags|=8192;else throw Vs=nf,Xm}else t.flags&=-16777217}function CS(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!P_(e))if(c_())t.flags|=8192;else throw Vs=nf,Xm}function Ac(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?fy():536870912,t.lanes|=e,Qr|=e)}function el(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function vA(t,e,a){var n=e.pendingProps;switch(Vm(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(e),null;case 1:return Dt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),_i(ta),Wr(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Mr(e)?fi(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,dp())),Dt(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(fi(e),s!==null?(Dt(e),CS(e,s)):(Dt(e),_p(e,i,null,n,a))):s?s!==t.memoizedState?(fi(e),Dt(e),CS(e,s)):(Dt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&fi(e),Dt(e),_p(e,i,t,n,a)),null;case 27:if(Jc(e),a=ns.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&fi(e);else{if(!n){if(e.stateNode===null)throw Error(ae(166));return Dt(e),null}t=Zn.current,Mr(e)?$0(e,t):(t=w_(i,n,a),e.stateNode=t,fi(e))}return Dt(e),null;case 5:if(Jc(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&fi(e);else{if(!n){if(e.stateNode===null)throw Error(ae(166));return Dt(e),null}if(s=Zn.current,Mr(e))$0(e,s);else{var r=Sf(ns.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[ya]=e,s[Wa]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(Ma(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&fi(e)}}return Dt(e),_p(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&fi(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(ae(166));if(t=ns.current,Mr(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=va,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[ya]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||A_(t.nodeValue,a)),t||hs(e,!0)}else t=Sf(t).createTextNode(n),t[ya]=e,e.stateNode=t}return Dt(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=Mr(e),a!==null){if(t===null){if(!n)throw Error(ae(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(557));t[ya]=e}else Ws(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),t=!1}else a=dp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ja(e),e):(ja(e),null);if((e.flags&128)!==0)throw Error(ae(558))}return Dt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Mr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(ae(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ae(317));i[ya]=e}else Ws(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Dt(e),i=!1}else i=dp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(ja(e),e):(ja(e),null)}return ja(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Ac(e,e.updateQueue),Dt(e),null);case 4:return Wr(),t===null&&gg(e.stateNode.containerInfo),Dt(e),null;case 10:return _i(e.type),Dt(e),null;case 19:if(ha(Zt),n=e.memoizedState,n===null)return Dt(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)el(n,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=rf(t),s!==null){for(e.flags|=128,el(n,!1),t=s.updateQueue,e.updateQueue=t,Ac(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Hy(a,t),a=a.sibling;return Tt(Zt,Zt.current&1|2),st&&mi(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&tn()>df&&(e.flags|=128,i=!0,el(n,!1),e.lanes=4194304)}else{if(!i)if(t=rf(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Ac(e,t),el(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!st)return Dt(e),null}else 2*tn()-n.renderingStartTime>df&&a!==536870912&&(e.flags|=128,i=!0,el(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=tn(),t.sibling=null,a=Zt.current,Tt(Zt,i?a&1|2:a&1),st&&mi(e,n.treeForkCount),t):(Dt(e),null);case 22:case 23:return ja(e),Zm(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Dt(e),e.subtreeFlags&6&&(e.flags|=8192)):Dt(e),a=e.updateQueue,a!==null&&Ac(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&ha(Gs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_i(ta),Dt(e),null;case 25:return null;case 30:return null}throw Error(ae(156,e.tag))}function _A(t,e){switch(Vm(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _i(ta),Wr(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Jc(e),null;case 31:if(e.memoizedState!==null){if(ja(e),e.alternate===null)throw Error(ae(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ja(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ha(Zt),null;case 4:return Wr(),null;case 10:return _i(e.type),null;case 22:case 23:return ja(e),Zm(),t!==null&&ha(Gs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _i(ta),null;case 25:return null;default:return null}}function Hv(t,e){switch(Vm(e),e.tag){case 3:_i(ta),Wr();break;case 26:case 27:case 5:Jc(e);break;case 4:Wr();break;case 31:e.memoizedState!==null&&ja(e);break;case 13:ja(e);break;case 19:ha(Zt);break;case 10:_i(e.type);break;case 22:case 23:ja(e),Zm(),t!==null&&ha(Gs);break;case 24:_i(ta)}}function ql(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){xt(e,e.return,o)}}function ps(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(d){xt(i,l,d)}}}n=n.next}while(n!==s)}}catch(d){xt(e,e.return,d)}}function Gv(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Qy(e,a)}catch(n){xt(t,t.return,n)}}}function Vv(t,e,a){a.props=Ks(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){xt(t,e,n)}}function xl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){xt(t,e,i)}}function Yn(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){xt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){xt(t,e,i)}else a.current=null}function qv(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){xt(t,t.return,i)}}function Mp(t,e,a){try{var n=t.stateNode;HA(n,t.type,a,e),n[Wa]=e}catch(i){xt(t,t.return,i)}}function Wv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xs(t.type)||t.tag===4}function Lp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fm(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Si));else if(n!==4&&(n===27&&xs(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(fm(t,e,a),t=t.sibling;t!==null;)fm(t,e,a),t=t.sibling}function ff(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&xs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ff(t,e,a),t=t.sibling;t!==null;)ff(t,e,a),t=t.sibling}function Xv(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ma(e,n,a),e[ya]=t,e[Wa]=a}catch(s){xt(t,t.return,s)}}var gi=!1,ea=!1,Cp=!1,bS=typeof WeakSet=="function"?WeakSet:Set,fa=null;function MA(t,e){if(t=t.containerInfo,Sm=Mf,t=Py(t),Fm(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var r=0,o=-1,l=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var h;p!==a||i!==0&&p.nodeType!==3||(o=r+i),p!==s||n!==0&&p.nodeType!==3||(l=r+n),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===t)break t;if(f===a&&++u===i&&(o=r),f===s&&++d===n&&(l=r),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}a=o===-1||l===-1?null:{start:o,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(ym={focusedElem:t,selectionRange:a},Mf=!1,fa=e;fa!==null;)if(e=fa,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fa=t;else for(;fa!==null;){switch(e=fa,s=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,a=e,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var S=Ks(a.type,i);t=n.getSnapshotBeforeUpdate(S,s),n.__reactInternalSnapshotBeforeUpdate=t}catch(L){xt(a,a.return,L)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)_m(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_m(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(ae(163))}if(t=e.sibling,t!==null){t.return=e.return,fa=t;break}fa=e.return}}function Yv(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:hi(t,a),n&4&&ql(5,a);break;case 1:if(hi(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){xt(a,a.return,r)}else{var i=Ks(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){xt(a,a.return,r)}}n&64&&Gv(a),n&512&&xl(a,a.return);break;case 3:if(hi(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Qy(t,e)}catch(r){xt(a,a.return,r)}}break;case 27:e===null&&n&4&&Xv(a);case 26:case 5:hi(t,a),e===null&&n&4&&qv(a),n&512&&xl(a,a.return);break;case 12:hi(t,a);break;case 31:hi(t,a),n&4&&Jv(t,a);break;case 13:hi(t,a),n&4&&Qv(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=RA.bind(null,a),KA(t,a))));break;case 22:if(n=a.memoizedState!==null||gi,!n){e=e!==null&&e.memoizedState!==null||ea,i=gi;var s=ea;gi=n,(ea=e)&&!s?pi(t,a,(a.subtreeFlags&8772)!==0):hi(t,a),gi=i,ea=s}break;case 30:break;default:hi(t,a)}}function Zv(t){var e=t.alternate;e!==null&&(t.alternate=null,Zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Dm(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ft=null,Ga=!1;function di(t,e,a){for(a=a.child;a!==null;)Kv(t,e,a),a=a.sibling}function Kv(t,e,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Ol,a)}catch{}switch(a.tag){case 26:ea||Yn(a,e),di(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ea||Yn(a,e);var n=Ft,i=Ga;xs(a.type)&&(Ft=a.stateNode,Ga=!1),di(t,e,a),_l(a.stateNode),Ft=n,Ga=i;break;case 5:ea||Yn(a,e);case 6:if(n=Ft,i=Ga,Ft=null,di(t,e,a),Ft=n,Ga=i,Ft!==null)if(Ga)try{(Ft.nodeType===9?Ft.body:Ft.nodeName==="HTML"?Ft.ownerDocument.body:Ft).removeChild(a.stateNode)}catch(s){xt(a,e,s)}else try{Ft.removeChild(a.stateNode)}catch(s){xt(a,e,s)}break;case 18:Ft!==null&&(Ga?(t=Ft,kS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),to(t)):kS(Ft,a.stateNode));break;case 4:n=Ft,i=Ga,Ft=a.stateNode.containerInfo,Ga=!0,di(t,e,a),Ft=n,Ga=i;break;case 0:case 11:case 14:case 15:ps(2,a,e),ea||ps(4,a,e),di(t,e,a);break;case 1:ea||(Yn(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Vv(a,e,n)),di(t,e,a);break;case 21:di(t,e,a);break;case 22:ea=(n=ea)||a.memoizedState!==null,di(t,e,a),ea=n;break;default:di(t,e,a)}}function Jv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{to(t)}catch(a){xt(e,e.return,a)}}}function Qv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{to(t)}catch(a){xt(e,e.return,a)}}function LA(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new bS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new bS),e;default:throw Error(ae(435,t.tag))}}function Tc(t,e){var a=LA(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=DA.bind(null,t,n);n.then(i,i)}})}function ka(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(xs(o.type)){Ft=o.stateNode,Ga=!1;break e}break;case 5:Ft=o.stateNode,Ga=!1;break e;case 3:case 4:Ft=o.stateNode.containerInfo,Ga=!0;break e}o=o.return}if(Ft===null)throw Error(ae(160));Kv(s,r,i),Ft=null,Ga=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)jv(e,t),e=e.sibling}var Pn=null;function jv(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ka(e,t),Ha(t),n&4&&(ps(3,t,t.return),ql(3,t),ps(5,t,t.return));break;case 1:ka(e,t),Ha(t),n&512&&(ea||a===null||Yn(a,a.return)),n&64&&gi&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Pn;if(ka(e,t),Ha(t),n&512&&(ea||a===null||Yn(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){e:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[kl]||s[ya]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),Ma(s,n,a),s[ya]=t,da(s),n=s;break e;case"link":var r=YS("link","href",i).get(n+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break t}}s=i.createElement(n),Ma(s,n,a),i.head.appendChild(s);break;case"meta":if(r=YS("meta","content",i).get(n+(a.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break t}}s=i.createElement(n),Ma(s,n,a),i.head.appendChild(s);break;default:throw Error(ae(468,n))}s[ya]=t,da(s),n=s}t.stateNode=n}else ZS(i,t.type,t.stateNode);else t.stateNode=XS(i,n,t.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?ZS(i,t.type,t.stateNode):XS(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Mp(t,t.memoizedProps,a.memoizedProps)}break;case 27:ka(e,t),Ha(t),n&512&&(ea||a===null||Yn(a,a.return)),a!==null&&n&4&&Mp(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ka(e,t),Ha(t),n&512&&(ea||a===null||Yn(a,a.return)),t.flags&32){i=t.stateNode;try{Yr(i,"")}catch(S){xt(t,t.return,S)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Mp(t,i,a!==null?a.memoizedProps:i)),n&1024&&(Cp=!0);break;case 6:if(ka(e,t),Ha(t),n&4){if(t.stateNode===null)throw Error(ae(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(S){xt(t,t.return,S)}}break;case 3:if(Wc=null,i=Pn,Pn=yf(e.containerInfo),ka(e,t),Pn=i,Ha(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{to(e.containerInfo)}catch(S){xt(t,t.return,S)}Cp&&(Cp=!1,$v(t));break;case 4:n=Pn,Pn=yf(t.stateNode.containerInfo),ka(e,t),Ha(t),Pn=n;break;case 12:ka(e,t),Ha(t);break;case 31:ka(e,t),Ha(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tc(t,n)));break;case 13:ka(e,t),Ha(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nf=tn()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tc(t,n)));break;case 22:i=t.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=gi,d=ea;if(gi=u||i,ea=d||l,ka(e,t),ea=d,gi=u,Ha(t),n&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||l||gi||ea||zs(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){l=a=e;try{if(s=l.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,f=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(S){xt(l,l.return,S)}}}else if(e.tag===6){if(a===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(S){xt(l,l.return,S)}}}else if(e.tag===18){if(a===null){l=e;try{var h=l.stateNode;i?HS(h,!0):HS(l.stateNode,!1)}catch(S){xt(l,l.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Tc(t,a))));break;case 19:ka(e,t),Ha(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Tc(t,n)));break;case 30:break;case 21:break;default:ka(e,t),Ha(t)}}function Ha(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Wv(n)){a=n;break}n=n.return}if(a==null)throw Error(ae(160));switch(a.tag){case 27:var i=a.stateNode,s=Lp(t);ff(t,s,i);break;case 5:var r=a.stateNode;a.flags&32&&(Yr(r,""),a.flags&=-33);var o=Lp(t);ff(t,o,r);break;case 3:case 4:var l=a.stateNode.containerInfo,u=Lp(t);fm(t,u,l);break;default:throw Error(ae(161))}}catch(d){xt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $v(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;$v(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function hi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Yv(t,e.alternate,e),e=e.sibling}function zs(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ps(4,e,e.return),zs(e);break;case 1:Yn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Vv(e,e.return,a),zs(e);break;case 27:_l(e.stateNode);case 26:case 5:Yn(e,e.return),zs(e);break;case 22:e.memoizedState===null&&zs(e);break;case 30:zs(e);break;default:zs(e)}t=t.sibling}}function pi(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:pi(i,s,a),ql(4,s);break;case 1:if(pi(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){xt(n,n.return,u)}if(n=s,i=n.updateQueue,i!==null){var o=n.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Jy(l[i],o)}catch(u){xt(n,n.return,u)}}a&&r&64&&Gv(s),xl(s,s.return);break;case 27:Xv(s);case 26:case 5:pi(i,s,a),a&&n===null&&r&4&&qv(s),xl(s,s.return);break;case 12:pi(i,s,a);break;case 31:pi(i,s,a),a&&r&4&&Jv(i,s);break;case 13:pi(i,s,a),a&&r&4&&Qv(i,s);break;case 22:s.memoizedState===null&&pi(i,s,a),xl(s,s.return);break;case 30:break;default:pi(i,s,a)}e=e.sibling}}function cg(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Gl(a))}function fg(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gl(t))}function Dn(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)e_(t,e,a,n),e=e.sibling}function e_(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Dn(t,e,a,n),i&2048&&ql(9,e);break;case 1:Dn(t,e,a,n);break;case 3:Dn(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gl(t)));break;case 12:if(i&2048){Dn(t,e,a,n),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){xt(e,e.return,l)}}else Dn(t,e,a,n);break;case 31:Dn(t,e,a,n);break;case 13:Dn(t,e,a,n);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?Dn(t,e,a,n):Sl(t,e):s._visibility&2?Dn(t,e,a,n):(s._visibility|=2,Cr(t,e,a,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&cg(r,e);break;case 24:Dn(t,e,a,n),i&2048&&fg(e.alternate,e);break;default:Dn(t,e,a,n)}}function Cr(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:Cr(s,r,o,l,i),ql(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Cr(s,r,o,l,i):Sl(s,r):(d._visibility|=2,Cr(s,r,o,l,i)),i&&u&2048&&cg(r.alternate,r);break;case 24:Cr(s,r,o,l,i),i&&u&2048&&fg(r.alternate,r);break;default:Cr(s,r,o,l,i)}e=e.sibling}}function Sl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Sl(a,n),i&2048&&cg(n.alternate,n);break;case 24:Sl(a,n),i&2048&&fg(n.alternate,n);break;default:Sl(a,n)}e=e.sibling}}var ll=8192;function Lr(t,e,a){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)t_(t,e,a),t=t.sibling}function t_(t,e,a){switch(t.tag){case 26:Lr(t,e,a),t.flags&ll&&t.memoizedState!==null&&oT(a,Pn,t.memoizedState,t.memoizedProps);break;case 5:Lr(t,e,a);break;case 3:case 4:var n=Pn;Pn=yf(t.stateNode.containerInfo),Lr(t,e,a),Pn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ll,ll=16777216,Lr(t,e,a),ll=n):Lr(t,e,a));break;default:Lr(t,e,a)}}function a_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function tl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];fa=n,i_(n,t)}a_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)n_(t),t=t.sibling}function n_(t){switch(t.tag){case 0:case 11:case 15:tl(t),t.flags&2048&&ps(9,t,t.return);break;case 3:tl(t);break;case 12:tl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Vc(t)):tl(t);break;default:tl(t)}}function Vc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];fa=n,i_(n,t)}a_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ps(8,e,e.return),Vc(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Vc(e));break;default:Vc(e)}t=t.sibling}}function i_(t,e){for(;fa!==null;){var a=fa;switch(a.tag){case 0:case 11:case 15:ps(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Gl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,fa=n;else e:for(a=t;fa!==null;){n=fa;var i=n.sibling,s=n.return;if(Zv(n),n===a){fa=null;break e}if(i!==null){i.return=s,fa=i;break e}fa=s}}}var CA={getCacheForType:function(t){var e=_a(ta),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return _a(ta).controller.signal}},bA=typeof WeakMap=="function"?WeakMap:Map,dt=0,Ct=null,$e=null,at=0,gt=0,Qa=null,es=!1,ro=!1,dg=!1,Ti=0,Xt=0,ms=0,qs=0,hg=0,en=0,Qr=0,yl=null,Va=null,dm=!1,Nf=0,s_=0,df=1/0,hf=null,os=null,sa=0,ls=null,jr=null,Mi=0,hm=0,pm=null,r_=null,vl=0,mm=null;function sn(){return(dt&2)!==0&&at!==0?at&-at:Oe.T!==null?mg():my()}function o_(){if(en===0)if((at&536870912)===0||st){var t=xc;xc<<=1,(xc&3932160)===0&&(xc=262144),en=t}else en=536870912;return t=on.current,t!==null&&(t.flags|=32),en}function qa(t,e,a){(t===Ct&&(gt===2||gt===9)||t.cancelPendingCommit!==null)&&($r(t,0),ts(t,at,en,!1)),zl(t,a),((dt&2)===0||t!==Ct)&&(t===Ct&&((dt&2)===0&&(qs|=a),Xt===4&&ts(t,at,en,!1)),Jn(t))}function l_(t,e,a){if((dt&6)!==0)throw Error(ae(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Fl(t,e),i=n?IA(t,e):bp(t,e,!0),s=n;do{if(i===0){ro&&!n&&ts(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!AA(a)){i=bp(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=yl;var l=o.current.memoizedState.isDehydrated;if(l&&($r(o,r).flags|=256),r=bp(o,r,!1),r!==2){if(dg&&!l){o.errorRecoveryDisabledLanes|=s,qs|=s,i=4;break e}s=Va,Va=i,s!==null&&(Va===null?Va=s:Va.push.apply(Va,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){$r(t,0),ts(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error(ae(345));case 4:if((e&4194048)!==e)break;case 6:ts(n,e,en,!es);break e;case 2:Va=null;break;case 3:case 5:break;default:throw Error(ae(329))}if((e&62914560)===e&&(i=Nf+300-tn(),10<i)){if(ts(n,e,en,!es),Cf(n,0,!0)!==0)break e;Mi=e,n.timeoutHandle=I_(AS.bind(null,n,a,Va,hf,dm,e,en,qs,Qr,es,s,"Throttled",-0,0),i);break e}AS(n,a,Va,hf,dm,e,en,qs,Qr,es,s,null,-0,0)}}break}while(!0);Jn(t)}function AS(t,e,a,n,i,s,r,o,l,u,d,p,f,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Si},t_(e,s,p);var S=(s&62914560)===s?Nf-tn():(s&4194048)===s?s_-tn():0;if(S=lT(p,S),S!==null){Mi=s,t.cancelPendingCommit=S(IS.bind(null,t,e,s,a,n,i,r,o,l,d,p,null,f,h)),ts(t,s,r,!u);return}}IS(t,e,s,a,n,i,r,o,l)}function AA(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ts(t,e,a,n){e&=~hg,e&=~qs,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-nn(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&dy(t,a,e)}function Bf(){return(dt&6)===0?(Wl(0,!1),!1):!0}function pg(){if($e!==null){if(gt===0)var t=$e.return;else t=$e,yi=er=null,$m(t),Gr=null,Il=0,t=$e;for(;t!==null;)Hv(t.alternate,t),t=t.return;$e=null}}function $r(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qA(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Mi=0,pg(),Ct=t,$e=a=vi(t.current,null),at=e,gt=0,Qa=null,es=!1,ro=Fl(t,e),dg=!1,Qr=en=hg=qs=ms=Xt=0,Va=yl=null,dm=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-nn(n),s=1<<i;e|=t[i],n&=~s}return Ti=e,If(),a}function u_(t,e){We=null,Oe.H=wl,e===so||e===wf?(e=iS(),gt=3):e===Xm?(e=iS(),gt=4):gt=e===lg?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Qa=e,$e===null&&(Xt=1,uf(t,vn(e,t.current)))}function c_(){var t=on.current;return t===null?!0:(at&4194048)===at?Mn===null:(at&62914560)===at||(at&536870912)!==0?t===Mn:!1}function f_(){var t=Oe.H;return Oe.H=wl,t===null?wl:t}function d_(){var t=Oe.A;return Oe.A=CA,t}function pf(){Xt=4,es||(at&4194048)!==at&&on.current!==null||(ro=!0),(ms&134217727)===0&&(qs&134217727)===0||Ct===null||ts(Ct,at,en,!1)}function bp(t,e,a){var n=dt;dt|=2;var i=f_(),s=d_();(Ct!==t||at!==e)&&(hf=null,$r(t,e)),e=!1;var r=Xt;e:do try{if(gt!==0&&$e!==null){var o=$e,l=Qa;switch(gt){case 8:pg(),r=6;break e;case 3:case 2:case 9:case 6:on.current===null&&(e=!0);var u=gt;if(gt=0,Qa=null,Or(t,o,l,u),a&&ro){r=0;break e}break;default:u=gt,gt=0,Qa=null,Or(t,o,l,u)}}TA(),r=Xt;break}catch(d){u_(t,d)}while(!0);return e&&t.shellSuspendCounter++,yi=er=null,dt=n,Oe.H=i,Oe.A=s,$e===null&&(Ct=null,at=0,If()),r}function TA(){for(;$e!==null;)h_($e)}function IA(t,e){var a=dt;dt|=2;var n=f_(),i=d_();Ct!==t||at!==e?(hf=null,df=tn()+500,$r(t,e)):ro=Fl(t,e);e:do try{if(gt!==0&&$e!==null){e=$e;var s=Qa;t:switch(gt){case 1:gt=0,Qa=null,Or(t,e,s,1);break;case 2:case 9:if(nS(s)){gt=0,Qa=null,TS(e);break}e=function(){gt!==2&&gt!==9||Ct!==t||(gt=7),Jn(t)},s.then(e,e);break e;case 3:gt=7;break e;case 4:gt=5;break e;case 7:nS(s)?(gt=0,Qa=null,TS(e)):(gt=0,Qa=null,Or(t,e,s,7));break;case 5:var r=null;switch($e.tag){case 26:r=$e.memoizedState;case 5:case 27:var o=$e;if(r?P_(r):o.stateNode.complete){gt=0,Qa=null;var l=o.sibling;if(l!==null)$e=l;else{var u=o.return;u!==null?($e=u,Of(u)):$e=null}break t}}gt=0,Qa=null,Or(t,e,s,5);break;case 6:gt=0,Qa=null,Or(t,e,s,6);break;case 8:pg(),Xt=6;break e;default:throw Error(ae(462))}}EA();break}catch(d){u_(t,d)}while(!0);return yi=er=null,Oe.H=n,Oe.A=i,dt=a,$e!==null?0:(Ct=null,at=0,If(),Xt)}function EA(){for(;$e!==null&&!jC();)h_($e)}function h_(t){var e=kv(t.alternate,t,Ti);t.memoizedProps=t.pendingProps,e===null?Of(t):$e=e}function TS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=vS(a,e,e.pendingProps,e.type,void 0,at);break;case 11:e=vS(a,e,e.pendingProps,e.type.render,e.ref,at);break;case 5:$m(e);default:Hv(a,e),e=$e=Hy(e,Ti),e=kv(a,e,Ti)}t.memoizedProps=t.pendingProps,e===null?Of(t):$e=e}function Or(t,e,a,n){yi=er=null,$m(e),Gr=null,Il=0;var i=e.return;try{if(xA(t,i,e,a,at)){Xt=1,uf(t,vn(a,t.current)),$e=null;return}}catch(s){if(i!==null)throw $e=i,s;Xt=1,uf(t,vn(a,t.current)),$e=null;return}e.flags&32768?(st||n===1?t=!0:ro||(at&536870912)!==0?t=!1:(es=t=!0,(n===2||n===9||n===3||n===6)&&(n=on.current,n!==null&&n.tag===13&&(n.flags|=16384))),p_(e,t)):Of(e)}function Of(t){var e=t;do{if((e.flags&32768)!==0){p_(e,es);return}t=e.return;var a=vA(e.alternate,e,Ti);if(a!==null){$e=a;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Xt===0&&(Xt=5)}function p_(t,e){do{var a=_A(t.alternate,t);if(a!==null){a.flags&=32767,$e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){$e=t;return}$e=t=a}while(t!==null);Xt=6,$e=null}function IS(t,e,a,n,i,s,r,o,l){t.cancelPendingCommit=null;do Ff();while(sa!==0);if((dt&6)!==0)throw Error(ae(327));if(e!==null){if(e===t.current)throw Error(ae(177));if(s=e.lanes|e.childLanes,s|=zm,lb(t,a,s,r,o,l),t===Ct&&($e=Ct=null,at=0),jr=e,ls=t,Mi=a,hm=s,pm=i,r_=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,PA(Qc,function(){return y_(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=Oe.T,Oe.T=null,i=ht.p,ht.p=2,r=dt,dt|=4;try{MA(t,e,a)}finally{dt=r,ht.p=i,Oe.T=n}}sa=1,m_(),g_(),x_()}}function m_(){if(sa===1){sa=0;var t=ls,e=jr,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=Oe.T,Oe.T=null;var n=ht.p;ht.p=2;var i=dt;dt|=4;try{jv(e,t);var s=ym,r=Py(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Dy(o.ownerDocument.documentElement,o)){if(l!==null&&Fm(o)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,f=p&&p.defaultView||window;if(f.getSelection){var h=f.getSelection(),S=o.textContent.length,L=Math.min(l.start,S),g=l.end===void 0?L:Math.min(l.end,S);!h.extend&&L>g&&(r=g,g=L,L=r);var c=J0(o,L),m=J0(o,g);if(c&&m&&(h.rangeCount!==1||h.anchorNode!==c.node||h.anchorOffset!==c.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var v=p.createRange();v.setStart(c.node,c.offset),h.removeAllRanges(),L>g?(h.addRange(v),h.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),h.addRange(v))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}Mf=!!Sm,ym=Sm=null}finally{dt=i,ht.p=n,Oe.T=a}}t.current=e,sa=2}}function g_(){if(sa===2){sa=0;var t=ls,e=jr,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=Oe.T,Oe.T=null;var n=ht.p;ht.p=2;var i=dt;dt|=4;try{Yv(t,e.alternate,e)}finally{dt=i,ht.p=n,Oe.T=a}}sa=3}}function x_(){if(sa===4||sa===3){sa=0,$C();var t=ls,e=jr,a=Mi,n=r_;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?sa=5:(sa=0,jr=ls=null,S_(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(os=null),Rm(a),e=e.stateNode,an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Ol,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=Oe.T,i=ht.p,ht.p=2,Oe.T=null;try{for(var s=t.onRecoverableError,r=0;r<n.length;r++){var o=n[r];s(o.value,{componentStack:o.stack})}}finally{Oe.T=e,ht.p=i}}(Mi&3)!==0&&Ff(),Jn(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===mm?vl++:(vl=0,mm=t):vl=0,Wl(0,!1)}}function S_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Gl(e)))}function Ff(){return m_(),g_(),x_(),y_()}function y_(){if(sa!==5)return!1;var t=ls,e=hm;hm=0;var a=Rm(Mi),n=Oe.T,i=ht.p;try{ht.p=32>a?32:a,Oe.T=null,a=pm,pm=null;var s=ls,r=Mi;if(sa=0,jr=ls=null,Mi=0,(dt&6)!==0)throw Error(ae(331));var o=dt;if(dt|=4,n_(s.current),e_(s,s.current,r,a),dt=o,Wl(0,!1),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Ol,s)}catch{}return!0}finally{ht.p=i,Oe.T=n,S_(t,e)}}function ES(t,e,a){e=vn(a,e),e=lm(t.stateNode,e,2),t=rs(t,e,2),t!==null&&(zl(t,2),Jn(t))}function xt(t,e,a){if(t.tag===3)ES(t,t,a);else for(;e!==null;){if(e.tag===3){ES(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(os===null||!os.has(n))){t=vn(a,t),a=Uv(2),n=rs(e,a,2),n!==null&&(Nv(a,n,e,t),zl(n,2),Jn(n));break}}e=e.return}}function Ap(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new bA;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(dg=!0,i.add(a),t=wA.bind(null,t,e,a),e.then(t,t))}function wA(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ct===t&&(at&a)===a&&(Xt===4||Xt===3&&(at&62914560)===at&&300>tn()-Nf?(dt&2)===0&&$r(t,0):hg|=a,Qr===at&&(Qr=0)),Jn(t)}function v_(t,e){e===0&&(e=fy()),t=$s(t,e),t!==null&&(zl(t,e),Jn(t))}function RA(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),v_(t,a)}function DA(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(ae(314))}n!==null&&n.delete(e),v_(t,a)}function PA(t,e){return Em(t,e)}var mf=null,br=null,gm=!1,gf=!1,Tp=!1,as=0;function Jn(t){t!==br&&t.next===null&&(br===null?mf=br=t:br=br.next=t),gf=!0,gm||(gm=!0,NA())}function Wl(t,e){if(!Tp&&gf){Tp=!0;do for(var a=!1,n=mf;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-nn(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,wS(n,s))}else s=at,s=Cf(n,n===Ct?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Fl(n,s)||(a=!0,wS(n,s));n=n.next}while(a);Tp=!1}}function UA(){__()}function __(){gf=gm=!1;var t=0;as!==0&&VA()&&(t=as);for(var e=tn(),a=null,n=mf;n!==null;){var i=n.next,s=M_(n,e);s===0?(n.next=null,a===null?mf=i:a.next=i,i===null&&(br=a)):(a=n,(t!==0||(s&3)!==0)&&(gf=!0)),n=i}sa!==0&&sa!==5||Wl(t,!1),as!==0&&(as=0)}function M_(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-nn(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=ob(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=Ct,a=at,a=Cf(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(gt===2||gt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&ap(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Fl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&ap(n),Rm(a)){case 2:case 8:a=uy;break;case 32:a=Qc;break;case 268435456:a=cy;break;default:a=Qc}return n=L_.bind(null,t),a=Em(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&ap(n),t.callbackPriority=2,t.callbackNode=null,2}function L_(t,e){if(sa!==0&&sa!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ff()&&t.callbackNode!==a)return null;var n=at;return n=Cf(t,t===Ct?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(l_(t,n,e),M_(t,tn()),t.callbackNode!=null&&t.callbackNode===a?L_.bind(null,t):null)}function wS(t,e){if(Ff())return null;l_(t,e,!0)}function NA(){WA(function(){(dt&6)!==0?Em(ly,UA):__()})}function mg(){if(as===0){var t=Zr;t===0&&(t=gc,gc<<=1,(gc&261888)===0&&(gc=256)),as=t}return as}function RS(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Uc(""+t)}function DS(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function BA(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=RS((i[Wa]||null).action),r=n.submitter;r&&(e=(e=r[Wa]||null)?RS(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new bf("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(as!==0){var l=r?DS(i,r):new FormData(i);rm(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?DS(i,r):new FormData(i),rm(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(Ic=0;Ic<Zp.length;Ic++)Ec=Zp[Ic],PS=Ec.toLowerCase(),US=Ec[0].toUpperCase()+Ec.slice(1),Un(PS,"on"+US);var Ec,PS,US,Ic;Un(Ny,"onAnimationEnd");Un(By,"onAnimationIteration");Un(Oy,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(eA,"onTransitionRun");Un(tA,"onTransitionStart");Un(aA,"onTransitionCancel");Un(Fy,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);Js("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Js("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Js("onBeforeInput",["compositionend","keypress","textInput","paste"]);Js("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Js("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rl));function C_(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){$c(d)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){$c(d)}i.currentTarget=null,s=l}}}}function je(t,e){var a=e[kp];a===void 0&&(a=e[kp]=new Set);var n=t+"__bubble";a.has(n)||(b_(e,t,2,!1),a.add(n))}function Ip(t,e,a){var n=0;e&&(n|=4),b_(a,t,n,e)}var wc="_reactListening"+Math.random().toString(36).slice(2);function gg(t){if(!t[wc]){t[wc]=!0,gy.forEach(function(a){a!=="selectionchange"&&(OA.has(a)||Ip(a,!1,t),Ip(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wc]||(e[wc]=!0,Ip("selectionchange",!1,e))}}function b_(t,e,a,n){switch(F_(e)){case 2:var i=fT;break;case 8:i=dT;break;default:i=vg}a=i.bind(null,e,a,t),i=void 0,!Wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Ep(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=Ir(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}Cy(function(){var u=s,d=Um(a),p=[];e:{var f=zy.get(t);if(f!==void 0){var h=bf,S=t;switch(t){case"keypress":if(Bc(a)===0)break e;case"keydown":case"keyup":h=Db;break;case"focusin":S="focus",h=op;break;case"focusout":S="blur",h=op;break;case"beforeblur":case"afterblur":h=op;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=H0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=vb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Nb;break;case Ny:case By:case Oy:h=Lb;break;case Fy:h=Ob;break;case"scroll":case"scrollend":h=Sb;break;case"wheel":h=zb;break;case"copy":case"cut":case"paste":h=bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=V0;break;case"toggle":case"beforetoggle":h=Hb}var L=(e&4)!==0,g=!L&&(t==="scroll"||t==="scrollend"),c=L?f!==null?f+"Capture":null:f;L=[];for(var m=u,v;m!==null;){var y=m;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||c===null||(y=Ll(m,c),y!=null&&L.push(Dl(m,y,v))),g)break;m=m.return}0<L.length&&(f=new h(f,S,null,a,d),p.push({event:f,listeners:L}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&a!==qp&&(S=a.relatedTarget||a.fromElement)&&(Ir(S)||S[ao]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(S=a.relatedTarget||a.toElement,h=u,S=S?Ir(S):null,S!==null&&(g=Bl(S),L=S.tag,S!==g||L!==5&&L!==27&&L!==6)&&(S=null)):(h=null,S=u),h!==S)){if(L=H0,y="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(L=V0,y="onPointerLeave",c="onPointerEnter",m="pointer"),g=h==null?f:rl(h),v=S==null?f:rl(S),f=new L(y,m+"leave",h,a,d),f.target=g,f.relatedTarget=v,y=null,Ir(d)===u&&(L=new L(c,m+"enter",S,a,d),L.target=v,L.relatedTarget=g,y=L),g=y,h&&S)t:{for(L=FA,c=h,m=S,v=0,y=c;y;y=L(y))v++;y=0;for(var A=m;A;A=L(A))y++;for(;0<v-y;)c=L(c),v--;for(;0<y-v;)m=L(m),y--;for(;v--;){if(c===m||m!==null&&c===m.alternate){L=c;break t}c=L(c),m=L(m)}L=null}else L=null;h!==null&&NS(p,f,h,L,!1),S!==null&&g!==null&&NS(p,g,S,L,!0)}}e:{if(f=u?rl(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var T=Y0;else if(X0(f))if(wy)T=Qb;else{T=Kb;var x=Zb}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&Pm(u.elementType)&&(T=Y0):T=Jb;if(T&&(T=T(t,u))){Ey(p,T,a,d);break e}x&&x(t,f,u),t==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Vp(f,"number",f.value)}switch(x=u?rl(u):window,t){case"focusin":(X0(x)||x.contentEditable==="true")&&(Rr=x,Xp=u,fl=null);break;case"focusout":fl=Xp=Rr=null;break;case"mousedown":Yp=!0;break;case"contextmenu":case"mouseup":case"dragend":Yp=!1,Q0(p,a,d);break;case"selectionchange":if($b)break;case"keydown":case"keyup":Q0(p,a,d)}var C;if(Om)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else wr?Ty(t,a)&&(D="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(D="onCompositionStart");D&&(Ay&&a.locale!=="ko"&&(wr||D!=="onCompositionStart"?D==="onCompositionEnd"&&wr&&(C=by()):($i=d,Nm="value"in $i?$i.value:$i.textContent,wr=!0)),x=xf(u,D),0<x.length&&(D=new G0(D,t,null,a,d),p.push({event:D,listeners:x}),C?D.data=C:(C=Iy(a),C!==null&&(D.data=C)))),(C=Vb?qb(t,a):Wb(t,a))&&(D=xf(u,"onBeforeInput"),0<D.length&&(x=new G0("onBeforeInput","beforeinput",null,a,d),p.push({event:x,listeners:D}),x.data=C)),BA(p,t,u,a,d)}C_(p,e)})}function Dl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function xf(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Ll(t,a),i!=null&&n.unshift(Dl(t,i,s)),i=Ll(t,e),i!=null&&n.push(Dl(t,i,s))),t.tag===3)return n;t=t.return}return[]}function FA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function NS(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=Ll(a,s),u!=null&&r.unshift(Dl(a,u,l))):i||(u=Ll(a,s),u!=null&&r.push(Dl(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var zA=/\r\n?/g,kA=/\u0000|\uFFFD/g;function BS(t){return(typeof t=="string"?t:""+t).replace(zA,`
`).replace(kA,"")}function A_(t,e){return e=BS(e),BS(t)===e}function _t(t,e,a,n,i,s){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Yr(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Yr(t,""+n);break;case"className":yc(t,"class",n);break;case"tabIndex":yc(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":yc(t,a,n);break;case"style":Ly(t,n,s);break;case"data":if(e!=="object"){yc(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Uc(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&_t(t,e,"name",i.name,i,null),_t(t,e,"formEncType",i.formEncType,i,null),_t(t,e,"formMethod",i.formMethod,i,null),_t(t,e,"formTarget",i.formTarget,i,null)):(_t(t,e,"encType",i.encType,i,null),_t(t,e,"method",i.method,i,null),_t(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Uc(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=Si);break;case"onScroll":n!=null&&je("scroll",t);break;case"onScrollEnd":n!=null&&je("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ae(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ae(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Uc(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":je("beforetoggle",t),je("toggle",t),Pc(t,"popover",n);break;case"xlinkActuate":ci(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ci(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ci(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ci(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ci(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ci(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ci(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ci(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ci(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Pc(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gb.get(a)||a,Pc(t,a,n))}}function xm(t,e,a,n,i,s){switch(a){case"style":Ly(t,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ae(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ae(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Yr(t,n):(typeof n=="number"||typeof n=="bigint")&&Yr(t,""+n);break;case"onScroll":n!=null&&je("scroll",t);break;case"onScrollEnd":n!=null&&je("scrollend",t);break;case"onClick":n!=null&&(t.onclick=Si);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),s=t[Wa]||null,s=s!=null?s[a]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break e}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Pc(t,a,n)}}}function Ma(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",t),je("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:_t(t,e,s,r,a,null)}}i&&_t(t,e,"srcSet",a.srcSet,a,null),n&&_t(t,e,"src",a.src,a,null);return;case"input":je("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var d=a[n];if(d!=null)switch(n){case"name":i=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ae(137,e));break;default:_t(t,e,n,d,a,null)}}vy(t,s,o,l,u,r,i,!1);return;case"select":je("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:_t(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?zr(t,!!n,e,!1):a!=null&&zr(t,!!n,a,!0);return;case"textarea":je("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ae(91));break;default:_t(t,e,r,o,a,null)}My(t,n,i,s);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":_t(t,e,l,n,a,null));return;case"dialog":je("beforetoggle",t),je("toggle",t),je("cancel",t),je("close",t);break;case"iframe":case"object":je("load",t);break;case"video":case"audio":for(n=0;n<Rl.length;n++)je(Rl[n],t);break;case"image":je("error",t),je("load",t);break;case"details":je("toggle",t);break;case"embed":case"source":case"link":je("error",t),je("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:_t(t,e,u,n,a,null)}return;default:if(Pm(e)){for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!==void 0&&xm(t,e,d,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&_t(t,e,o,n,a,null))}function HA(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,d=null;for(h in a){var p=a[h];if(a.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:n.hasOwnProperty(h)||_t(t,e,h,null,n,p)}}for(var f in n){var h=n[f];if(p=a[f],n.hasOwnProperty(f)&&(h!=null||p!=null))switch(f){case"type":s=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ae(137,e));break;default:h!==p&&_t(t,e,f,h,n,p)}}Gp(t,r,o,l,u,d,s,i);return;case"select":h=r=o=f=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||_t(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":f=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&_t(t,e,i,s,n,l)}e=o,a=r,n=h,f!=null?zr(t,!!a,f,!1):!!n!=!!a&&(e!=null?zr(t,!!a,e,!0):zr(t,!!a,a?[]:"",!1));return;case"textarea":h=f=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_t(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":f=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(ae(91));break;default:i!==s&&_t(t,e,r,i,n,s)}_y(t,f,h);return;case"option":for(var S in a)f=a[S],a.hasOwnProperty(S)&&f!=null&&!n.hasOwnProperty(S)&&(S==="selected"?t.selected=!1:_t(t,e,S,null,n,f));for(l in n)f=n[l],h=a[l],n.hasOwnProperty(l)&&f!==h&&(f!=null||h!=null)&&(l==="selected"?t.selected=f&&typeof f!="function"&&typeof f!="symbol":_t(t,e,l,f,n,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in a)f=a[L],a.hasOwnProperty(L)&&f!=null&&!n.hasOwnProperty(L)&&_t(t,e,L,null,n,f);for(u in n)if(f=n[u],h=a[u],n.hasOwnProperty(u)&&f!==h&&(f!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(ae(137,e));break;default:_t(t,e,u,f,n,h)}return;default:if(Pm(e)){for(var g in a)f=a[g],a.hasOwnProperty(g)&&f!==void 0&&!n.hasOwnProperty(g)&&xm(t,e,g,void 0,n,f);for(d in n)f=n[d],h=a[d],!n.hasOwnProperty(d)||f===h||f===void 0&&h===void 0||xm(t,e,d,f,n,h);return}}for(var c in a)f=a[c],a.hasOwnProperty(c)&&f!=null&&!n.hasOwnProperty(c)&&_t(t,e,c,null,n,f);for(p in n)f=n[p],h=a[p],!n.hasOwnProperty(p)||f===h||f==null&&h==null||_t(t,e,p,f,n,h)}function OS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&OS(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var d=l.transferSize,p=l.initiatorType;d&&OS(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Sm=null,ym=null;function Sf(t){return t.nodeType===9?t:t.ownerDocument}function FS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function vm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wp=null;function VA(){var t=window.event;return t&&t.type==="popstate"?t===wp?!1:(wp=t,!0):(wp=null,!1)}var I_=typeof setTimeout=="function"?setTimeout:void 0,qA=typeof clearTimeout=="function"?clearTimeout:void 0,zS=typeof Promise=="function"?Promise:void 0,WA=typeof queueMicrotask=="function"?queueMicrotask:typeof zS<"u"?function(t){return zS.resolve(null).then(t).catch(XA)}:I_;function XA(t){setTimeout(function(){throw t})}function xs(t){return t==="head"}function kS(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),to(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")_l(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_l(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[kl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&_l(t.ownerDocument.body);a=i}while(a);to(e)}function HS(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function _m(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_m(a),Dm(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function YA(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[kl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=Ln(t.nextSibling),t===null)break}return null}function ZA(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ln(t.nextSibling),t===null))return null;return t}function E_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ln(t.nextSibling),t===null))return null;return t}function Mm(t){return t.data==="$?"||t.data==="$~"}function Lm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function KA(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function Ln(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Cm=null;function GS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return Ln(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function VS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function w_(t,e,a){switch(e=Sf(a),t){case"html":if(t=e.documentElement,!t)throw Error(ae(452));return t;case"head":if(t=e.head,!t)throw Error(ae(453));return t;case"body":if(t=e.body,!t)throw Error(ae(454));return t;default:throw Error(ae(451))}}function _l(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Dm(t)}var Cn=new Map,qS=new Set;function yf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ii=ht.d;ht.d={f:JA,r:QA,D:jA,C:$A,L:eT,m:tT,X:nT,S:aT,M:iT};function JA(){var t=Ii.f(),e=Bf();return t||e}function QA(t){var e=no(t);e!==null&&e.tag===5&&e.type==="form"?Lv(e):Ii.r(t)}var oo=typeof document>"u"?null:document;function R_(t,e,a){var n=oo;if(n&&typeof e=="string"&&e){var i=yn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),qS.has(i)||(qS.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Ma(e,"link",t),da(e),n.head.appendChild(e)))}}function jA(t){Ii.D(t),R_("dns-prefetch",t,null)}function $A(t,e){Ii.C(t,e),R_("preconnect",t,e)}function eT(t,e,a){Ii.L(t,e,a);var n=oo;if(n&&t&&e){var i='link[rel="preload"][as="'+yn(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+yn(a.imageSizes)+'"]')):i+='[href="'+yn(t)+'"]';var s=i;switch(e){case"style":s=eo(t);break;case"script":s=lo(t)}Cn.has(s)||(t=Ut({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Cn.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Xl(s))||e==="script"&&n.querySelector(Yl(s))||(e=n.createElement("link"),Ma(e,"link",t),da(e),n.head.appendChild(e)))}}function tT(t,e){Ii.m(t,e);var a=oo;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+yn(n)+'"][href="'+yn(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=lo(t)}if(!Cn.has(s)&&(t=Ut({rel:"modulepreload",href:t},e),Cn.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yl(s)))return}n=a.createElement("link"),Ma(n,"link",t),da(n),a.head.appendChild(n)}}}function aT(t,e,a){Ii.S(t,e,a);var n=oo;if(n&&t){var i=Fr(n).hoistableStyles,s=eo(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(Xl(s)))o.loading=5;else{t=Ut({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Cn.get(s))&&xg(t,a);var l=r=n.createElement("link");da(l),Ma(l,"link",t),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,qc(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function nT(t,e){Ii.X(t,e);var a=oo;if(a&&t){var n=Fr(a).hoistableScripts,i=lo(t),s=n.get(i);s||(s=a.querySelector(Yl(i)),s||(t=Ut({src:t,async:!0},e),(e=Cn.get(i))&&Sg(t,e),s=a.createElement("script"),da(s),Ma(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function iT(t,e){Ii.M(t,e);var a=oo;if(a&&t){var n=Fr(a).hoistableScripts,i=lo(t),s=n.get(i);s||(s=a.querySelector(Yl(i)),s||(t=Ut({src:t,async:!0,type:"module"},e),(e=Cn.get(i))&&Sg(t,e),s=a.createElement("script"),da(s),Ma(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function WS(t,e,a,n){var i=(i=ns.current)?yf(i):null;if(!i)throw Error(ae(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=eo(a.href),a=Fr(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=eo(a.href);var s=Fr(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(Xl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),Cn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Cn.set(t,a),s||sT(i,t,a,r.state))),e&&n===null)throw Error(ae(528,""));return r}if(e&&n!==null)throw Error(ae(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=lo(a),a=Fr(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(ae(444,t))}}function eo(t){return'href="'+yn(t)+'"'}function Xl(t){return'link[rel="stylesheet"]['+t+"]"}function D_(t){return Ut({},t,{"data-precedence":t.precedence,precedence:null})}function sT(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Ma(e,"link",a),da(e),t.head.appendChild(e))}function lo(t){return'[src="'+yn(t)+'"]'}function Yl(t){return"script[async]"+t}function XS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+yn(a.href)+'"]');if(n)return e.instance=n,da(n),n;var i=Ut({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),da(n),Ma(n,"style",i),qc(n,a.precedence,t),e.instance=n;case"stylesheet":i=eo(a.href);var s=t.querySelector(Xl(i));if(s)return e.state.loading|=4,e.instance=s,da(s),s;n=D_(a),(i=Cn.get(i))&&xg(n,i),s=(t.ownerDocument||t).createElement("link"),da(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ma(s,"link",n),e.state.loading|=4,qc(s,a.precedence,t),e.instance=s;case"script":return s=lo(a.src),(i=t.querySelector(Yl(s)))?(e.instance=i,da(i),i):(n=a,(i=Cn.get(s))&&(n=Ut({},a),Sg(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),da(i),Ma(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(ae(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,qc(n,a.precedence,t));return e.instance}function qc(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function xg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Sg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Wc=null;function YS(t,e,a){if(Wc===null){var n=new Map,i=Wc=new Map;i.set(a,n)}else i=Wc,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[kl]||s[ya]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function ZS(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function rT(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function P_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function oT(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=eo(n.href),s=e.querySelector(Xl(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=vf.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,da(s);return}s=e.ownerDocument||e,n=D_(n),(i=Cn.get(i))&&xg(n,i),s=s.createElement("link"),da(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Ma(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=vf.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Rp=0;function lT(t,e){return t.stylesheets&&t.count===0&&Xc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Rp===0&&(Rp=62500*GA());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Rp?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function vf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _f=null;function Xc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_f=new Map,e.forEach(uT,t),_f=null,vf.call(t))}function uT(t,e){if(!(e.state.loading&4)){var a=_f.get(t);if(a)var n=a.get(null);else{a=new Map,_f.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=vf.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Pl={$$typeof:xi,Provider:null,Consumer:null,_currentValue:ks,_currentValue2:ks,_threadCount:0};function cT(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=np(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=np(0),this.hiddenUpdates=np(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function U_(t,e,a,n,i,s,r,o,l,u,d,p){return t=new cT(t,e,a,r,l,u,d,p,o),e=1,s===!0&&(e|=24),s=$a(3,null,null,e),t.current=s,s.stateNode=t,e=qm(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},Ym(s),t}function N_(t){return t?(t=Ur,t):Ur}function B_(t,e,a,n,i,s){i=N_(i),n.context===null?n.context=i:n.pendingContext=i,n=ss(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=rs(t,n,e),a!==null&&(qa(a,t,e),hl(a,t,e))}function KS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function yg(t,e){KS(t,e),(t=t.alternate)&&KS(t,e)}function O_(t){if(t.tag===13||t.tag===31){var e=$s(t,67108864);e!==null&&qa(e,t,67108864),yg(t,67108864)}}function JS(t){if(t.tag===13||t.tag===31){var e=sn();e=wm(e);var a=$s(t,e);a!==null&&qa(a,t,e),yg(t,e)}}var Mf=!0;function fT(t,e,a,n){var i=Oe.T;Oe.T=null;var s=ht.p;try{ht.p=2,vg(t,e,a,n)}finally{ht.p=s,Oe.T=i}}function dT(t,e,a,n){var i=Oe.T;Oe.T=null;var s=ht.p;try{ht.p=8,vg(t,e,a,n)}finally{ht.p=s,Oe.T=i}}function vg(t,e,a,n){if(Mf){var i=bm(n);if(i===null)Ep(t,e,n,Lf,a),QS(t,n);else if(pT(i,t,e,a,n))n.stopPropagation();else if(QS(t,n),e&4&&-1<hT.indexOf(t)){for(;i!==null;){var s=no(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Os(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-nn(r);o.entanglements[1]|=l,r&=~l}Jn(s),(dt&6)===0&&(df=tn()+500,Wl(0,!1))}}break;case 31:case 13:o=$s(s,2),o!==null&&qa(o,s,2),Bf(),yg(s,2)}if(s=bm(n),s===null&&Ep(t,e,n,Lf,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else Ep(t,e,n,null,a)}}function bm(t){return t=Um(t),_g(t)}var Lf=null;function _g(t){if(Lf=null,t=Ir(t),t!==null){var e=Bl(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=ny(e),t!==null)return t;t=null}else if(a===31){if(t=iy(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Lf=t,null}function F_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(eb()){case ly:return 2;case uy:return 8;case Qc:case tb:return 32;case cy:return 268435456;default:return 32}default:return 32}}var Am=!1,us=null,cs=null,fs=null,Ul=new Map,Nl=new Map,Qi=[],hT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function QS(t,e){switch(t){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":Ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nl.delete(e.pointerId)}}function al(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=no(e),e!==null&&O_(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pT(t,e,a,n,i){switch(e){case"focusin":return us=al(us,t,e,a,n,i),!0;case"dragenter":return cs=al(cs,t,e,a,n,i),!0;case"mouseover":return fs=al(fs,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return Ul.set(s,al(Ul.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Nl.set(s,al(Nl.get(s)||null,t,e,a,n,i)),!0}return!1}function z_(t){var e=Ir(t.target);if(e!==null){var a=Bl(e);if(a!==null){if(e=a.tag,e===13){if(e=ny(a),e!==null){t.blockedOn=e,U0(t.priority,function(){JS(a)});return}}else if(e===31){if(e=iy(a),e!==null){t.blockedOn=e,U0(t.priority,function(){JS(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=bm(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);qp=n,a.target.dispatchEvent(n),qp=null}else return e=no(a),e!==null&&O_(e),t.blockedOn=a,!1;e.shift()}return!0}function jS(t,e,a){Yc(t)&&a.delete(e)}function mT(){Am=!1,us!==null&&Yc(us)&&(us=null),cs!==null&&Yc(cs)&&(cs=null),fs!==null&&Yc(fs)&&(fs=null),Ul.forEach(jS),Nl.forEach(jS)}function Rc(t,e){t.blockedOn===e&&(t.blockedOn=null,Am||(Am=!0,ra.unstable_scheduleCallback(ra.unstable_NormalPriority,mT)))}var Dc=null;function $S(t){Dc!==t&&(Dc=t,ra.unstable_scheduleCallback(ra.unstable_NormalPriority,function(){Dc===t&&(Dc=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(_g(n||a)===null)continue;break}var s=no(a);s!==null&&(t.splice(e,3),e-=3,rm(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function to(t){function e(l){return Rc(l,t)}us!==null&&Rc(us,t),cs!==null&&Rc(cs,t),fs!==null&&Rc(fs,t),Ul.forEach(e),Nl.forEach(e);for(var a=0;a<Qi.length;a++){var n=Qi[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)z_(a),a.blockedOn===null&&Qi.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[Wa]||null;if(typeof s=="function")r||$S(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[Wa]||null)o=r.formAction;else if(_g(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),$S(a)}}}function k_(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Mg(t){this._internalRoot=t}zf.prototype.render=Mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));var a=e.current,n=sn();B_(a,n,t,e,null,null)};zf.prototype.unmount=Mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;B_(t.current,2,null,t,null,null),Bf(),e[ao]=null}};function zf(t){this._internalRoot=t}zf.prototype.unstable_scheduleHydration=function(t){if(t){var e=my();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Qi.length&&e!==0&&e<Qi[a].priority;a++);Qi.splice(a,0,t),a===0&&z_(t)}};var ey=ty.version;if(ey!=="19.2.6")throw Error(ae(527,ey,"19.2.6"));ht.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=YC(e),t=t!==null?sy(t):null,t=t===null?null:t.stateNode,t};var gT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Oe,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(nl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!nl.isDisabled&&nl.supportsFiber))try{Ol=nl.inject(gT),an=nl}catch{}var nl;kf.createRoot=function(t,e){if(!ay(t))throw Error(ae(299));var a=!1,n="",i=Rv,s=Dv,r=Pv;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=U_(t,1,!1,null,null,a,n,null,i,s,r,k_),t[ao]=e.current,gg(t),new Mg(e)};kf.hydrateRoot=function(t,e,a){if(!ay(t))throw Error(ae(299));var n=!1,i="",s=Rv,r=Dv,o=Pv,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=U_(t,1,!0,e,a??null,n,i,l,s,r,o,k_),e.context=N_(null),a=e.current,n=sn(),n=wm(n),i=ss(n),i.callback=null,rs(a,i,n),a=n,e.current.lanes=a,zl(e,a),Jn(e),t[ao]=e.current,gg(t),new zf(e)};kf.version="19.2.6"});var q_=Vn((d2,V_)=>{"use strict";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(t){console.error(t)}}G_(),V_.exports=H_()});var dC=Vn(Oh=>{"use strict";var t2=Symbol.for("react.transitional.element"),a2=Symbol.for("react.fragment");function fC(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var i in e)i!=="key"&&(a[i]=e[i])}else a=e;return e=a.ref,{$$typeof:t2,type:t,key:n,ref:e!==void 0?e:null,props:a}}Oh.Fragment=a2;Oh.jsx=fC;Oh.jsxs=fC});var dr=Vn((pN,hC)=>{"use strict";hC.exports=dC()});var SC=hn(q_());var Bt=hn(qi());var yM=0,$g=1,vM=2;var Tu=1,Vd=2,Bo=3,ws=0,za=1,In=2,rr=0,Oo=1,ex=2,tx=3,ax=4,_M=5;var or=100,MM=101,LM=102,CM=103,bM=104,AM=200,TM=201,IM=202,EM=203,nx=204,ix=205,wM=206,RM=207,DM=208,PM=209,UM=210,NM=211,BM=212,OM=213,FM=214,fd=0,dd=1,hd=2,Co=3,pd=4,md=5,gd=6,xd=7,sx=0,zM=1,kM=2,ii=0,rx=1,ox=2,lx=3,Iu=4,ux=5,cx=6,fx=7;var dx=300,lr=301,Fo=302,qd=303,Wd=304,Sd=1e3,jn=1001,yd=1002,ma=1003,HM=1004;var Eu=1005;var Fa=1006,Xd=1007;var zi=1008;var Za=1009,hx=1010,px=1011,zo=1012,Yd=1013,zn=1014,kn=1015,Hn=1016,Zd=1017,Kd=1018,ur=1020,mx=35902,gx=35899,xx=1021,Sx=1022,Gn=1023,Ni=1026,ki=1027,yx=1028,Jd=1029,Rs=1030,Qd=1031;var jd=1033,wu=33776,Ru=33777,Du=33778,Pu=33779,$d=35840,eh=35841,th=35842,ah=35843,nh=36196,ih=37492,sh=37496,rh=37488,oh=37489,Uu=37490,lh=37491,uh=37808,ch=37809,fh=37810,dh=37811,hh=37812,ph=37813,mh=37814,gh=37815,xh=37816,Sh=37817,yh=37818,vh=37819,_h=37820,Mh=37821,Lh=36492,Ch=36494,bh=36495,Ah=36283,Th=36284,Nu=36285,Ih=36286;var au=2300,vd=2301,ud=2302,qg=2303,Wg=2400,Xg=2401,Yg=2402;var GM=3200;var Eh=0,VM=1,Hi="",Oa="srgb",nu="srgb-linear",iu="linear",mt="srgb";var cd=7680;var qM=519,WM=512,XM=513,YM=514,vx=515,ZM=516,KM=517,_x=518,Mx=519,JM=35044;var Lx="300 es",An=2e3,bo=2001;function xT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ST(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function su(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function QM(){let t=su("canvas");return t.style.display="block",t}var W_={},Ao=null;function Cx(...t){let e="THREE."+t.shift();Ao?Ao("log",e,...t):console.log(e,...t)}function jM(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=jM(t);let e="THREE."+t.shift();if(Ao)Ao("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Fe(...t){t=jM(t);let e="THREE."+t.shift();if(Ao)Ao("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function $l(...t){let e=t.join(" ");e in W_||(W_[e]=!0,Ue(...t))}function $M(t,e,a){return new Promise(function(n,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,a);break;default:n()}}setTimeout(s,a)})}var eL={[fd]:fd,[hd]:gd,[pd]:pd,[Co]:md,[dd]:dd,[gd]:hd,[xd]:xd,[md]:Co},ti=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Ia=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],X_=1234567,eu=Math.PI/180,To=180/Math.PI;function ko(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ia[t&255]+Ia[t>>8&255]+Ia[t>>16&255]+Ia[t>>24&255]+"-"+Ia[e&255]+Ia[e>>8&255]+"-"+Ia[e>>16&15|64]+Ia[e>>24&255]+"-"+Ia[a&63|128]+Ia[a>>8&255]+"-"+Ia[a>>16&255]+Ia[a>>24&255]+Ia[n&255]+Ia[n>>8&255]+Ia[n>>16&255]+Ia[n>>24&255]).toLowerCase()}function it(t,e,a){return Math.max(e,Math.min(a,t))}function bx(t,e){return(t%e+e)%e}function yT(t,e,a,n,i){return n+(t-e)*(i-n)/(a-e)}function vT(t,e,a){return t!==e?(a-t)/(e-t):0}function tu(t,e,a){return(1-a)*t+a*e}function _T(t,e,a,n){return tu(t,e,1-Math.exp(-a*n))}function MT(t,e=1){return e-Math.abs(bx(t,e*2)-e)}function LT(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*(3-2*t))}function CT(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*t*(t*(t*6-15)+10))}function bT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function AT(t,e){return t+Math.random()*(e-t)}function TT(t){return t*(.5-Math.random())}function IT(t){t!==void 0&&(X_=t);let e=X_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ET(t){return t*eu}function wT(t){return t*To}function RT(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function DT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ax(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function PT(t,e,a,n,i){let s=Math.cos,r=Math.sin,o=s(a/2),l=r(a/2),u=s((e+n)/2),d=r((e+n)/2),p=s((e-n)/2),f=r((e-n)/2),h=s((n-e)/2),S=r((n-e)/2);switch(i){case"XYX":t.set(o*d,l*p,l*f,o*u);break;case"YZY":t.set(l*f,o*d,l*p,o*u);break;case"ZXZ":t.set(l*p,l*f,o*d,o*u);break;case"XZX":t.set(o*d,l*S,l*h,o*u);break;case"YXY":t.set(l*h,o*d,l*S,o*u);break;case"ZYZ":t.set(l*S,l*h,o*d,o*u);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tx(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tL(t,e){if(e.constructor===Float32Array)return t;let a=Tx(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/a,-1)}function aL(t,e){if(e.constructor===Float32Array)return t;let a=Tx(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*a)}var Bu={DEG2RAD:eu,RAD2DEG:To,generateUUID:ko,clamp:it,euclideanModulo:bx,mapLinear:yT,inverseLerp:vT,lerp:tu,damp:_T,pingpong:MT,smoothstep:LT,smootherstep:CT,randInt:bT,randFloat:AT,randFloatSpread:TT,seededRandom:IT,degToRad:ET,radToDeg:wT,isPowerOfTwo:RT,ceilPowerOfTwo:DT,floorPowerOfTwo:Ax,setQuaternionFromProperEuler:PT,normalize:aL,denormalize:tL},Dx=class Dx{constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=it(this.x,e.x,a.x),this.y=it(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=it(this.x,e,a),this.y=it(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dx.prototype.isVector2=!0;var Je=Dx,ai=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],d=n[i+2],p=n[i+3],f=s[r+0],h=s[r+1],S=s[r+2],L=s[r+3];if(p!==L||l!==f||u!==h||d!==S){let g=l*f+u*h+d*S+p*L;g<0&&(f=-f,h=-h,S=-S,L=-L,g=-g);let c=1-o;if(g<.9995){let m=Math.acos(g),v=Math.sin(m);c=Math.sin(c*m)/v,o=Math.sin(o*m)/v,l=l*c+f*o,u=u*c+h*o,d=d*c+S*o,p=p*c+L*o}else{l=l*c+f*o,u=u*c+h*o,d=d*c+S*o,p=p*c+L*o;let m=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=m,u*=m,d*=m,p*=m}}e[a]=l,e[a+1]=u,e[a+2]=d,e[a+3]=p}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],d=n[i+3],p=s[r],f=s[r+1],h=s[r+2],S=s[r+3];return e[a]=o*S+d*p+l*h-u*f,e[a+1]=l*S+d*f+u*p-o*h,e[a+2]=u*S+d*h+o*f-l*p,e[a+3]=d*S-o*p-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(i/2),p=o(s/2),f=l(n/2),h=l(i/2),S=l(s/2);switch(r){case"XYZ":this._x=f*d*p+u*h*S,this._y=u*h*p-f*d*S,this._z=u*d*S+f*h*p,this._w=u*d*p-f*h*S;break;case"YXZ":this._x=f*d*p+u*h*S,this._y=u*h*p-f*d*S,this._z=u*d*S-f*h*p,this._w=u*d*p+f*h*S;break;case"ZXY":this._x=f*d*p-u*h*S,this._y=u*h*p+f*d*S,this._z=u*d*S+f*h*p,this._w=u*d*p-f*h*S;break;case"ZYX":this._x=f*d*p-u*h*S,this._y=u*h*p+f*d*S,this._z=u*d*S-f*h*p,this._w=u*d*p+f*h*S;break;case"YZX":this._x=f*d*p+u*h*S,this._y=u*h*p+f*d*S,this._z=u*d*S-f*h*p,this._w=u*d*p-f*h*S;break;case"XZY":this._x=f*d*p-u*h*S,this._y=u*h*p-f*d*S,this._z=u*d*S+f*h*p,this._w=u*d*p+f*h*S;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],d=a[6],p=a[10],f=n+o+p;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,d=a._w;return this._x=n*d+r*o+i*u-s*l,this._y=i*d+r*l+s*o-n*u,this._z=s*d+r*u+n*l-i*o,this._w=r*d-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,a=Math.sin(a*u)/d,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Px=class Px{constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(Y_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(Y_.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),d=2*(o*a-s*i),p=2*(s*n-r*a);return this.x=a+l*u+r*p-o*d,this.y=n+l*d+o*u-s*p,this.z=i+l*p+s*d-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=it(this.x,e.x,a.x),this.y=it(this.y,e.y,a.y),this.z=it(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=it(this.x,e,a),this.y=it(this.y,e,a),this.z=it(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lg.copy(this).projectOnVector(e),this.sub(Lg)}reflect(e){return this.sub(Lg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Px.prototype.isVector3=!0;var H=Px,Lg=new H,Y_=new ai,Ux=class Ux{constructor(e,a,n,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=a,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],d=n[4],p=n[7],f=n[2],h=n[5],S=n[8],L=i[0],g=i[3],c=i[6],m=i[1],v=i[4],y=i[7],A=i[2],T=i[5],x=i[8];return s[0]=r*L+o*m+l*A,s[3]=r*g+o*v+l*T,s[6]=r*c+o*y+l*x,s[1]=u*L+d*m+p*A,s[4]=u*g+d*v+p*T,s[7]=u*c+d*y+p*x,s[2]=f*L+h*m+S*A,s[5]=f*g+h*v+S*T,s[8]=f*c+h*y+S*x,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return a*r*d-a*o*u-n*s*d+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*r-o*u,f=o*l-d*s,h=u*s-r*l,S=a*p+n*f+i*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/S;return e[0]=p*L,e[1]=(i*u-d*n)*L,e[2]=(o*n-i*r)*L,e[3]=f*L,e[4]=(d*a-i*l)*L,e[5]=(i*s-o*a)*L,e[6]=h*L,e[7]=(n*l-u*a)*L,e[8]=(r*a-n*s)*L,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return $l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cg.makeScale(e,a)),this}rotate(e){return $l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cg.makeRotation(-e)),this}translate(e,a){return $l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cg.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ux.prototype.isMatrix3=!0;var ze=Ux,Cg=new ze,Z_=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UT(){let t={enabled:!0,workingColorSpace:nu,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===mt&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===mt&&(i.r=Lo(i.r),i.g=Lo(i.g),i.b=Lo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hi?iu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[nu]:{primaries:e,whitePoint:n,transfer:iu,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:Oa},outputColorSpaceConfig:{drawingBufferColorSpace:Oa}},[Oa]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:Oa}}}),t}var nt=UT();function Ui(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var uo,_d=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{uo===void 0&&(uo=su("canvas")),uo.width=e.width,uo.height=e.height;let i=uo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=uo}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=su("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ui(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(Ui(a[n]/255)*255):a[n]=Ui(a[n]);return{data:a,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},NT=0,Io=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width||0,a.height||0,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(bg(i[r].image)):s.push(bg(i[r]))}else s=bg(i);n.url=s}return a||(e.images[this.uuid]=n),n}};function bg(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_d.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var BT=0,Ag=new H,Ya=class t extends ti{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=jn,i=jn,s=Fa,r=zi,o=Gn,l=Za,u=t.DEFAULT_ANISOTROPY,d=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=ko(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ag).x}get height(){return this.source.getSize(Ag).y}get depth(){return this.source.getSize(Ag).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Ue(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ue(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ya.DEFAULT_IMAGE=null;Ya.DEFAULT_MAPPING=dx;Ya.DEFAULT_ANISOTROPY=1;var Nx=class Nx{constructor(e=0,a=0,n=0,i=1){this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],h=l[5],S=l[9],L=l[2],g=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-L)<.01&&Math.abs(S-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+L)<.1&&Math.abs(S+g)<.1&&Math.abs(u+h+c-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let v=(u+1)/2,y=(h+1)/2,A=(c+1)/2,T=(d+f)/4,x=(p+L)/4,C=(S+g)/4;return v>y&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=x/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=x/s,i=C/s),this.set(n,i,s,a),this}let m=Math.sqrt((g-S)*(g-S)+(p-L)*(p-L)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(g-S)/m,this.y=(p-L)/m,this.z=(f-d)/m,this.w=Math.acos((u+h+c-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=it(this.x,e.x,a.x),this.y=it(this.y,e.y,a.y),this.z=it(this.z,e.z,a.z),this.w=it(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=it(this.x,e,a),this.y=it(this.y,e,a),this.z=it(this.z,e,a),this.w=it(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nx.prototype.isVector4=!0;var zt=Nx,Md=class extends ti{constructor(e=1,a=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fa,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=n.depth,this.scissor=new zt(0,0,e,a),this.scissorTest=!1,this.viewport=new zt(0,0,e,a),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Ya({width:e,height:a,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Fa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(a.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,n=1){if(this.width!==e||this.height!==a||this.depth!==n){this.width=e,this.height=a,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=a,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let i=Object.assign({},e.textures[a].image);this.textures[a].source=new Io(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Md{constructor(e=1,a=1,n={}){super(e,a,n),this.isWebGLRenderTarget=!0}},ru=class extends Ya{constructor(e=null,a=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=ma,this.minFilter=ma,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ld=class extends Ya{constructor(e=null,a=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=ma,this.minFilter=ma,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Gd=class Gd{constructor(e,a,n,i,s,r,o,l,u,d,p,f,h,S,L,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,d,p,f,h,S,L,g)}set(e,a,n,i,s,r,o,l,u,d,p,f,h,S,L,g){let c=this.elements;return c[0]=e,c[4]=a,c[8]=n,c[12]=i,c[1]=s,c[5]=r,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=p,c[14]=f,c[3]=h,c[7]=S,c[11]=L,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gd().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,n=e.elements,i=1/co.setFromMatrixColumn(e,0).length(),s=1/co.setFromMatrixColumn(e,1).length(),r=1/co.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=r*d,h=r*p,S=o*d,L=o*p;a[0]=l*d,a[4]=-l*p,a[8]=u,a[1]=h+S*u,a[5]=f-L*u,a[9]=-o*l,a[2]=L-f*u,a[6]=S+h*u,a[10]=r*l}else if(e.order==="YXZ"){let f=l*d,h=l*p,S=u*d,L=u*p;a[0]=f+L*o,a[4]=S*o-h,a[8]=r*u,a[1]=r*p,a[5]=r*d,a[9]=-o,a[2]=h*o-S,a[6]=L+f*o,a[10]=r*l}else if(e.order==="ZXY"){let f=l*d,h=l*p,S=u*d,L=u*p;a[0]=f-L*o,a[4]=-r*p,a[8]=S+h*o,a[1]=h+S*o,a[5]=r*d,a[9]=L-f*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let f=r*d,h=r*p,S=o*d,L=o*p;a[0]=l*d,a[4]=S*u-h,a[8]=f*u+L,a[1]=l*p,a[5]=L*u+f,a[9]=h*u-S,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let f=r*l,h=r*u,S=o*l,L=o*u;a[0]=l*d,a[4]=L-f*p,a[8]=S*p+h,a[1]=p,a[5]=r*d,a[9]=-o*d,a[2]=-u*d,a[6]=h*p+S,a[10]=f-L*p}else if(e.order==="XZY"){let f=r*l,h=r*u,S=o*l,L=o*u;a[0]=l*d,a[4]=-p,a[8]=u*d,a[1]=f*p+L,a[5]=r*d,a[9]=h*p-S,a[2]=S*p-h,a[6]=o*d,a[10]=L*p+f}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OT,e,FT)}lookAt(e,a,n){let i=this.elements;return ln.subVectors(e,a),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Ss.crossVectors(n,ln),Ss.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Ss.crossVectors(n,ln)),Ss.normalize(),Hf.crossVectors(ln,Ss),i[0]=Ss.x,i[4]=Hf.x,i[8]=ln.x,i[1]=Ss.y,i[5]=Hf.y,i[9]=ln.y,i[2]=Ss.z,i[6]=Hf.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],d=n[1],p=n[5],f=n[9],h=n[13],S=n[2],L=n[6],g=n[10],c=n[14],m=n[3],v=n[7],y=n[11],A=n[15],T=i[0],x=i[4],C=i[8],D=i[12],E=i[1],U=i[5],G=i[9],K=i[13],R=i[2],k=i[6],q=i[10],z=i[14],te=i[3],W=i[7],$=i[11],ie=i[15];return s[0]=r*T+o*E+l*R+u*te,s[4]=r*x+o*U+l*k+u*W,s[8]=r*C+o*G+l*q+u*$,s[12]=r*D+o*K+l*z+u*ie,s[1]=d*T+p*E+f*R+h*te,s[5]=d*x+p*U+f*k+h*W,s[9]=d*C+p*G+f*q+h*$,s[13]=d*D+p*K+f*z+h*ie,s[2]=S*T+L*E+g*R+c*te,s[6]=S*x+L*U+g*k+c*W,s[10]=S*C+L*G+g*q+c*$,s[14]=S*D+L*K+g*z+c*ie,s[3]=m*T+v*E+y*R+A*te,s[7]=m*x+v*U+y*k+A*W,s[11]=m*C+v*G+y*q+A*$,s[15]=m*D+v*K+y*z+A*ie,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],h=e[14],S=e[3],L=e[7],g=e[11],c=e[15],m=l*h-u*f,v=o*h-u*p,y=o*f-l*p,A=r*h-u*d,T=r*f-l*d,x=r*p-o*d;return a*(L*m-g*v+c*y)-n*(S*m-g*A+c*T)+i*(S*v-L*A+c*x)-s*(S*y-L*T+g*x)}determinantAffine(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return a*(r*d-o*u)-n*(s*d-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],h=e[11],S=e[12],L=e[13],g=e[14],c=e[15],m=a*o-n*r,v=a*l-i*r,y=a*u-s*r,A=n*l-i*o,T=n*u-s*o,x=i*u-s*l,C=d*L-p*S,D=d*g-f*S,E=d*c-h*S,U=p*g-f*L,G=p*c-h*L,K=f*c-h*g,R=m*K-v*G+y*U+A*E-T*D+x*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/R;return e[0]=(o*K-l*G+u*U)*k,e[1]=(i*G-n*K-s*U)*k,e[2]=(L*x-g*T+c*A)*k,e[3]=(f*T-p*x-h*A)*k,e[4]=(l*E-r*K-u*D)*k,e[5]=(a*K-i*E+s*D)*k,e[6]=(g*y-S*x-c*v)*k,e[7]=(d*x-f*y+h*v)*k,e[8]=(r*G-o*E+u*C)*k,e[9]=(n*E-a*G-s*C)*k,e[10]=(S*T-L*y+c*m)*k,e[11]=(p*y-d*T-h*m)*k,e[12]=(o*D-r*U-l*C)*k,e[13]=(a*U-n*D+i*C)*k,e[14]=(L*v-S*A-g*m)*k,e[15]=(d*A-p*v+f*m)*k,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,d=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,d*o+n,d*l-i*r,0,u*l-i*o,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,d=r+r,p=o+o,f=s*u,h=s*d,S=s*p,L=r*d,g=r*p,c=o*p,m=l*u,v=l*d,y=l*p,A=n.x,T=n.y,x=n.z;return i[0]=(1-(L+c))*A,i[1]=(h+y)*A,i[2]=(S-v)*A,i[3]=0,i[4]=(h-y)*T,i[5]=(1-(f+c))*T,i[6]=(g+m)*T,i[7]=0,i[8]=(S+v)*x,i[9]=(g-m)*x,i[10]=(1-(f+L))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),a.identity(),this;let r=co.set(i[0],i[1],i[2]).length(),o=co.set(i[4],i[5],i[6]).length(),l=co.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Nn.copy(this);let u=1/r,d=1/o,p=1/l;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=p,Nn.elements[9]*=p,Nn.elements[10]*=p,a.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=An,l=!1){let u=this.elements,d=2*s/(a-e),p=2*s/(n-i),f=(a+e)/(a-e),h=(n+i)/(n-i),S,L;if(l)S=s/(r-s),L=r*s/(r-s);else if(o===An)S=-(r+s)/(r-s),L=-2*r*s/(r-s);else if(o===bo)S=-r/(r-s),L=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=L,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=An,l=!1){let u=this.elements,d=2/(a-e),p=2/(n-i),f=-(a+e)/(a-e),h=-(n+i)/(n-i),S,L;if(l)S=1/(r-s),L=r/(r-s);else if(o===An)S=-2/(r-s),L=-(r+s)/(r-s);else if(o===bo)S=-1/(r-s),L=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=S,u[14]=L,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}};Gd.prototype.isMatrix4=!0;var It=Gd,co=new H,Nn=new It,OT=new H(0,0,0),FT=new H(1,1,1),Ss=new H,Hf=new H,ln=new H,J_=new It,Q_=new ai,Bi=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],d=i[9],p=i[2],f=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return J_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(J_,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Eo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zT=0,j_=new H,fo=new ai,Ei=new It,Gf=new H,Zl=new H,kT=new H,HT=new ai,$_=new H(1,0,0),eM=new H(0,1,0),tM=new H(0,0,1),aM={type:"added"},GT={type:"removed"},ho={type:"childadded",child:null},Tg={type:"childremoved",child:null},La=class t extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zT++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new H,a=new Bi,n=new ai,i=new H(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new It},normalMatrix:{value:new ze}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return fo.setFromAxisAngle(e,a),this.quaternion.multiply(fo),this}rotateOnWorldAxis(e,a){return fo.setFromAxisAngle(e,a),this.quaternion.premultiply(fo),this}rotateX(e){return this.rotateOnAxis($_,e)}rotateY(e){return this.rotateOnAxis(eM,e)}rotateZ(e){return this.rotateOnAxis(tM,e)}translateOnAxis(e,a){return j_.copy(e).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis($_,e)}translateY(e){return this.translateOnAxis(eM,e)}translateZ(e){return this.translateOnAxis(tM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?Gf.copy(e):Gf.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Zl,Gf,this.up):Ei.lookAt(Gf,Zl,this.up),this.quaternion.setFromRotationMatrix(Ei),i&&(Ei.extractRotation(i.matrixWorld),fo.setFromRotationMatrix(Ei),this.quaternion.premultiply(fo.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(aM),ho.child=e,this.dispatchEvent(ho),ho.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(GT),Tg.child=e,this.dispatchEvent(Tg),Tg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(aM),ho.child=e,this.dispatchEvent(ho),ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,e,kT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zl,HT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),a===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),d=r(e.images),p=r(e.shapes),f=r(e.skeletons),h=r(e.animations),S=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),S.length>0&&(n.nodes=S)}return n.object=i,n;function r(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};La.DEFAULT_UP=new H(0,1,0);La.DEFAULT_MATRIX_AUTO_UPDATE=!0;La.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=class extends La{constructor(){super(),this.isGroup=!0,this.type="Group"}},VT={type:"move"},wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let n of e.hand.values())this._getHandJoint(a,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let L of e.hand.values()){let g=a.getJointPose(L,n),c=this._getHandJoint(u,L);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),h=.02,S=.005;u.inputState.pinching&&f>h+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=a.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=a.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(VT)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[a.jointName]=n,e.add(n)}return e.joints[a.jointName]}},nL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Vf={h:0,s:0,l:0};function Ig(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var Ye=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=Oa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=nt.workingColorSpace){return this.r=e,this.g=a,this.b=n,nt.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=nt.workingColorSpace){if(e=bx(e,1),a=it(a,0,1),n=it(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=Ig(r,s,e+1/3),this.g=Ig(r,s,e),this.b=Ig(r,s,e-1/3)}return nt.colorSpaceToWorking(this,i),this}setStyle(e,a=Oa){function n(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,a);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=Oa){let n=nL[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oa){return nt.workingToColorSpace(Ea.copy(this),e),Math.round(it(Ea.r*255,0,255))*65536+Math.round(it(Ea.g*255,0,255))*256+Math.round(it(Ea.b*255,0,255))}getHexString(e=Oa){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=nt.workingColorSpace){nt.workingToColorSpace(Ea.copy(this),a);let n=Ea.r,i=Ea.g,s=Ea.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,d=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=d<=.5?p/(r+o):p/(2-r-o),r){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,a=nt.workingColorSpace){return nt.workingToColorSpace(Ea.copy(this),a),e.r=Ea.r,e.g=Ea.g,e.b=Ea.b,e}getStyle(e=Oa){nt.workingToColorSpace(Ea.copy(this),e);let a=Ea.r,n=Ea.g,i=Ea.b;return e!==Oa?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+a,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(ys),e.getHSL(Vf);let n=tu(ys.h,Vf.h,a),i=tu(ys.s,Vf.s,a),s=tu(ys.l,Vf.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ea=new Ye;Ye.NAMES=nL;var ou=class t{constructor(e,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=a}clone(){return new t(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var lu=class extends La{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},Bn=new H,wi=new H,Eg=new H,Ri=new H,po=new H,mo=new H,nM=new H,wg=new H,Rg=new H,Dg=new H,Pg=new zt,Ug=new zt,Ng=new zt,Ls=class t{constructor(e=new H,a=new H,n=new H){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),Bn.subVectors(e,a),i.cross(Bn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){Bn.subVectors(i,a),wi.subVectors(n,a),Eg.subVectors(e,a);let r=Bn.dot(Bn),o=Bn.dot(wi),l=Bn.dot(Eg),u=wi.dot(wi),d=wi.dot(Eg),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let f=1/p,h=(u*l-o*d)*f,S=(r*d-o*l)*f;return s.set(1-h-S,S,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(r,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return Pg.setScalar(0),Ug.setScalar(0),Ng.setScalar(0),Pg.fromBufferAttribute(e,a),Ug.fromBufferAttribute(e,n),Ng.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Pg,s.x),r.addScaledVector(Ug,s.y),r.addScaledVector(Ng,s.z),r}static isFrontFacing(e,a,n,i){return Bn.subVectors(n,a),wi.subVectors(e,a),Bn.cross(wi).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Bn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;po.subVectors(i,n),mo.subVectors(s,n),wg.subVectors(e,n);let l=po.dot(wg),u=mo.dot(wg);if(l<=0&&u<=0)return a.copy(n);Rg.subVectors(e,i);let d=po.dot(Rg),p=mo.dot(Rg);if(d>=0&&p<=d)return a.copy(i);let f=l*p-d*u;if(f<=0&&l>=0&&d<=0&&l-d>0)return r=l/(l-d),a.copy(n).addScaledVector(po,r);Dg.subVectors(e,s);let h=po.dot(Dg),S=mo.dot(Dg);if(S>=0&&h<=S)return a.copy(s);let L=h*u-l*S;if(L<=0&&u>=0&&S<=0)return o=u/(u-S),a.copy(n).addScaledVector(mo,o);let g=d*S-h*p;if(g<=0&&p-d>=0&&h-S>=0)return nM.subVectors(s,i),o=(p-d)/(p-d+(h-S)),a.copy(i).addScaledVector(nM,o);let c=1/(g+L+f);return r=L*c,o=f*c,a.copy(n).addScaledVector(po,r).addScaledVector(mo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cs=class{constructor(e=new H(1/0,1/0,1/0),a=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(On.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(On.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=On.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,On):On.fromBufferAttribute(s,r),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qf.copy(n.boundingBox)),qf.applyMatrix4(e.matrixWorld),this.union(qf)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kl),Wf.subVectors(this.max,Kl),go.subVectors(e.a,Kl),xo.subVectors(e.b,Kl),So.subVectors(e.c,Kl),vs.subVectors(xo,go),_s.subVectors(So,xo),tr.subVectors(go,So);let a=[0,-vs.z,vs.y,0,-_s.z,_s.y,0,-tr.z,tr.y,vs.z,0,-vs.x,_s.z,0,-_s.x,tr.z,0,-tr.x,-vs.y,vs.x,0,-_s.y,_s.x,0,-tr.y,tr.x,0];return!Bg(a,go,xo,So,Wf)||(a=[1,0,0,0,1,0,0,0,1],!Bg(a,go,xo,So,Wf))?!1:(Xf.crossVectors(vs,_s),a=[Xf.x,Xf.y,Xf.z],Bg(a,go,xo,So,Wf))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Di=[new H,new H,new H,new H,new H,new H,new H,new H],On=new H,qf=new Cs,go=new H,xo=new H,So=new H,vs=new H,_s=new H,tr=new H,Kl=new H,Wf=new H,Xf=new H,ar=new H;function Bg(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){ar.fromArray(t,s);let o=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),l=e.dot(ar),u=a.dot(ar),d=n.dot(ar);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}var na=new H,Yf=new Je,qT=0,ei=class extends ti{constructor(e,a,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qT++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=JM,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=e!==void 0?Tx(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)Yf.fromBufferAttribute(this,a),Yf.applyMatrix3(e),this.setXY(a,Yf.x,Yf.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.applyMatrix3(e),this.setXYZ(a,na.x,na.y,na.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.applyMatrix4(e),this.setXYZ(a,na.x,na.y,na.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.applyNormalMatrix(e),this.setXYZ(a,na.x,na.y,na.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)na.fromBufferAttribute(this,a),na.transformDirection(e),this.setXYZ(a,na.x,na.y,na.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,a,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=this._denormalize(a)),a}setX(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=this._denormalize(a)),a}setY(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=this._denormalize(a)),a}setZ(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=this._denormalize(a)),a}setW(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let a=this._normalizationScale;return a!==void 0?Math.max(e/a,-1):tL(e,this.array)}_normalize(e){let a=this._normalizationScale;return a!==void 0?Math.round(e*a):aL(e,this.array)}};var uu=class extends ei{constructor(e,a,n){super(new Uint16Array(e),a,n)}};var cu=class extends ei{constructor(e,a,n){super(new Uint32Array(e),a,n)}};var Ra=class extends ei{constructor(e,a,n){super(new Float32Array(e),a,n)}},WT=new Cs,Jl=new H,Og=new H,sr=class{constructor(e=new H,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):WT.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jl.subVectors(e,this.center);let a=Jl.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector(Jl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Og.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jl.copy(e.center).add(Og)),this.expandByPoint(Jl.copy(e.center).sub(Og))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},XT=0,bn=new It,Fg=new La,yo=new H,un=new Cs,Ql=new Cs,pa=new H,Tn=class t extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xT(e)?cu:uu)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,a,n){return bn.makeTranslation(e,a,n),this.applyMatrix4(bn),this}scale(e,a,n){return bn.makeScale(e,a,n),this.applyMatrix4(bn),this}lookAt(e){return Fg.lookAt(e),Fg.updateMatrix(),this.applyMatrix4(Fg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ra(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];un.setFromBufferAttribute(s),this.morphTargetsRelative?(pa.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(pa),pa.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(pa)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];Ql.setFromBufferAttribute(o),this.morphTargetsRelative?(pa.addVectors(un.min,Ql.min),un.expandByPoint(pa),pa.addVectors(un.max,Ql.max),un.expandByPoint(pa)):(un.expandByPoint(Ql.min),un.expandByPoint(Ql.max))}un.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)pa.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(pa));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)pa.fromBufferAttribute(o,u),l&&(yo.fromBufferAttribute(e,u),pa.add(yo)),i=Math.max(i,n.distanceToSquared(pa))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],u=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new H,l[D]=new H;let d=new H,p=new H,f=new H,h=new Je,S=new Je,L=new Je,g=new H,c=new H;function m(D,E,U){u[D]=u[E]=u[U]=1,d.fromBufferAttribute(n,D),p.fromBufferAttribute(n,E),f.fromBufferAttribute(n,U),h.fromBufferAttribute(s,D),S.fromBufferAttribute(s,E),L.fromBufferAttribute(s,U),p.sub(d),f.sub(d),S.sub(h),L.sub(h);let G=1/(S.x*L.y-L.x*S.y);isFinite(G)&&(g.copy(p).multiplyScalar(L.y).addScaledVector(f,-S.y).multiplyScalar(G),c.copy(f).multiplyScalar(S.x).addScaledVector(p,-L.x).multiplyScalar(G),o[D].add(g),o[E].add(g),o[U].add(g),l[D].add(c),l[E].add(c),l[U].add(c))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,E=v.length;D<E;++D){let U=v[D],G=U.start,K=U.count;for(let R=G,k=G+K;R<k;R+=3)m(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new H,A=new H,T=new H,x=new H;function C(D){T.fromBufferAttribute(i,D),x.copy(T);let E=o[D];y.copy(E),y.sub(T.multiplyScalar(T.dot(E))).normalize(),A.crossVectors(x,E);let G=A.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,G)}for(let D=0,E=n.count;D<E;++D)u[D]&&C(D);this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==a.count)n=new ei(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new H,s=new H,r=new H,o=new H,l=new H,u=new H,d=new H,p=new H;if(e)for(let f=0,h=e.count;f<h;f+=3){let S=e.getX(f+0),L=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(a,S),s.fromBufferAttribute(a,L),r.fromBufferAttribute(a,g),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,g),o.add(d),l.add(d),u.add(d),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(L,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,h=a.count;f<h;f+=3)i.fromBufferAttribute(a,f+0),s.fromBufferAttribute(a,f+1),r.fromBufferAttribute(a,f+2),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)pa.fromBufferAttribute(e,a),pa.normalize(),e.setXYZ(a,pa.x,pa.y,pa.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(l.length*d),h=0,S=0;for(let L=0,g=l.length;L<g;L++){o.isInterleavedBufferAttribute?h=l[L]*o.data.stride+o.offset:h=l[L]*d;for(let c=0;c<d;c++)f[S++]=u[h++]}return new ei(f,d,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let d=0,p=u.length;d<p;d++){let f=u[d],h=e(f,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){let h=u[p];d.push(h.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let d=i[u];this.setAttribute(u,d.clone(a))}let s=e.morphAttributes;for(let u in s){let d=[],p=s[u];for(let f=0,h=p.length;f<h;f++)d.push(p[f].clone(a));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,d=r.length;u<d;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var zg=new H,YT=new H,ZT=new ze,Fn=class{constructor(e=new H(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,n,i){return this.normal.set(e,a,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,n){let i=zg.subVectors(n,a).cross(YT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,n=!0){let i=e.delta(zg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:a.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let a=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return a<0&&n>0||n<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let n=a||ZT.getNormalMatrix(e),i=this.coplanarPoint(zg).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},KT=0,Oi=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=Oo,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nx,this.blendDst=ix,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cd,this.stencilZFail=cd,this.stencilZPass=cd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Ue(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ue(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Fn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Je().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=a[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Pi=new H,kg=new H,Zf=new H,Kf=new H,Ro=class{constructor(e=new H,a=new H(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=Pi.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,a),Pi.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){kg.copy(e).add(a).multiplyScalar(.5),Zf.copy(a).sub(e).normalize(),Kf.copy(this.origin).sub(kg);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Zf),o=Kf.dot(this.direction),l=-Kf.dot(Zf),u=Kf.lengthSq(),d=Math.abs(1-r*r),p,f,h,S;if(d>0)if(p=r*l-o,f=r*o-l,S=s*d,p>=0)if(f>=-S)if(f<=S){let L=1/d;p*=L,f*=L,h=p*(p+r*f+2*o)+f*(r*p+f+2*l)+u}else f=s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+u;else f<=-S?(p=Math.max(0,-(-r*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+u):f<=S?(p=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(p=Math.max(0,-(r*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+u);else f=r>0?-s:s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(kg).addScaledVector(Zf,f),h}intersectSphere(e,a){if(e.radius<0)return null;Pi.subVectors(e.center,this.origin);let n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,a,n,i,s){let r=this.origin,o=this.direction,l=o.x,u=o.y,d=o.z,p=e.x-r.x,f=e.y-r.y,h=e.z-r.z,S=a.x-r.x,L=a.y-r.y,g=a.z-r.z,c=n.x-r.x,m=n.y-r.y,v=n.z-r.z,y=Math.abs(l),A=Math.abs(u),T=Math.abs(d),x,C,D,E,U,G,K,R,k,q,z,te;if(y>=A&&y>=T?(D=l,G=p,k=S,te=c,l>=0?(x=u,C=d,E=f,U=h,K=L,R=g,q=m,z=v):(x=d,C=u,E=h,U=f,K=g,R=L,q=v,z=m)):A>=T?(D=u,G=f,k=L,te=m,u>=0?(x=d,C=l,E=h,U=p,K=g,R=S,q=v,z=c):(x=l,C=d,E=p,U=h,K=S,R=g,q=c,z=v)):(D=d,G=h,k=g,te=v,d>=0?(x=l,C=u,E=p,U=f,K=S,R=L,q=c,z=m):(x=u,C=l,E=f,U=p,K=L,R=S,q=m,z=c)),D===0)return null;let W=x/D,$=C/D,ie=1/D,Le=E-W*G,Ne=U-$*G,Q=K-W*k,ge=R-$*k,Me=q-W*te,he=z-$*te,Se=Me*ge-he*Q,Be=Le*he-Ne*Me,Et=Q*Ne-ge*Le;if(i){if(Se<0||Be<0||Et<0)return null}else if((Se<0||Be<0||Et<0)&&(Se>0||Be>0||Et>0))return null;let _e=Se+Be+Et;if(_e===0)return null;let ot=ie*(Se*G+Be*k+Et*te);return(_e>0?ot<0:ot>0)?null:this.at(ot/_e,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Do=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},iM=new It,nr=new Ro,Jf=new sr,sM=new H,Qf=new H,jf=new H,$f=new H,Hg=new H,ed=new H,rM=new H,td=new H,Ca=class extends La{constructor(e=new Tn,a=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ed.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let d=o[l],p=s[l];d!==0&&(Hg.fromBufferAttribute(p,e),r?ed.addScaledVector(Hg,d):ed.addScaledVector(Hg.sub(a),d))}a.add(ed)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jf.copy(n.boundingSphere),Jf.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Jf.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Jf,sM)===null||nr.origin.distanceToSquared(sM)>(e.far-e.near)**2))&&(iM.copy(s).invert(),nr.copy(e.ray).applyMatrix4(iM),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,nr)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,L=f.length;S<L;S++){let g=f[S],c=r[g.materialIndex],m=Math.max(g.start,h.start),v=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=m,A=v;y<A;y+=3){let T=o.getX(y),x=o.getX(y+1),C=o.getX(y+2);i=ad(this,c,e,n,u,d,p,T,x,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),L=Math.min(o.count,h.start+h.count);for(let g=S,c=L;g<c;g+=3){let m=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);i=ad(this,r,e,n,u,d,p,m,v,y),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,L=f.length;S<L;S++){let g=f[S],c=r[g.materialIndex],m=Math.max(g.start,h.start),v=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=m,A=v;y<A;y+=3){let T=y,x=y+1,C=y+2;i=ad(this,c,e,n,u,d,p,T,x,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),L=Math.min(l.count,h.start+h.count);for(let g=S,c=L;g<c;g+=3){let m=g,v=g+1,y=g+2;i=ad(this,r,e,n,u,d,p,m,v,y),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}}};function JT(t,e,a,n,i,s,r,o){let l;if(e.side===za?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===ws,o),l===null)return null;td.copy(o),td.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(td);return u<a.near||u>a.far?null:{distance:u,point:td.clone(),object:t}}function ad(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,Qf),t.getVertexPosition(l,jf),t.getVertexPosition(u,$f);let d=JT(t,e,a,n,Qf,jf,$f,rM);if(d){let p=new H;Ls.getBarycoord(rM,Qf,jf,$f,p),i&&(d.uv=Ls.getInterpolatedAttribute(i,o,l,u,p,new Je)),s&&(d.uv1=Ls.getInterpolatedAttribute(s,o,l,u,p,new Je)),r&&(d.normal=Ls.getInterpolatedAttribute(r,o,l,u,p,new H),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c:u,normal:new H,materialIndex:0};Ls.getNormal(Qf,jf,$f,f.normal),d.face=f,d.barycoord=p}return d}var Cd=class extends Ya{constructor(e=null,a=1,n=1,i,s,r,o,l,u=ma,d=ma,p,f){super(null,r,o,l,u,d,i,s,p,f),this.isDataTexture=!0,this.image={data:e,width:a,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=new sr,QT=new Je(.5,.5),nd=new H,bs=class{constructor(e=new Fn,a=new Fn,n=new Fn,i=new Fn,s=new Fn,r=new Fn){this.planes=[e,a,n,i,s,r]}set(e,a,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(a),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let a=this.planes;for(let n=0;n<6;n++)a[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,a=An,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],d=s[4],p=s[5],f=s[6],h=s[7],S=s[8],L=s[9],g=s[10],c=s[11],m=s[12],v=s[13],y=s[14],A=s[15];if(i[0].setComponents(u-r,h-d,c-S,A-m).normalize(),i[1].setComponents(u+r,h+d,c+S,A+m).normalize(),i[2].setComponents(u+o,h+p,c+L,A+v).normalize(),i[3].setComponents(u-o,h-p,c-L,A-v).normalize(),n)i[4].setComponents(l,f,g,y).normalize(),i[5].setComponents(u-l,h-f,c-g,A-y).normalize();else if(i[4].setComponents(u-l,h-f,c-g,A-y).normalize(),a===An)i[5].setComponents(u+l,h+f,c+g,A+y).normalize();else if(a===bo)i[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),ir.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);let a=QT.distanceTo(e.center);return ir.radius=.7071067811865476+a,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){let a=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let n=0;n<6;n++){let i=a[n];if(nd.x=i.normal.x>0?e.max.x:e.min.x,nd.y=i.normal.y>0?e.max.y:e.min.y,nd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nd)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let n=0;n<6;n++)if(a[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oM=new It,bd=class t{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let a=e.cameras,n=this._frustums;for(let i=0;i<a.length;i++){let s=a[i];oM.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new bs),n[i].setFromProjectionMatrix(oM,s.coordinateSystem,s.reversedDepth)}return this._count=a.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsBox(e))return!0;return!1}containsPoint(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let a=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)a[i]===void 0&&(a[i]=new bs),a[i].copy(n[i]);return this._count=e._count,this}clone(){return new t().copy(this)}};var Po=class extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ad=new H,Td=new H,lM=new It,jl=new Ro,id=new sr,Gg=new H,uM=new H,fu=class extends La{constructor(e=new Tn,a=new Po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let a=e.attributes.position,n=[0];for(let i=1,s=a.count;i<s;i++)Ad.fromBufferAttribute(a,i-1),Td.fromBufferAttribute(a,i),n[i]=n[i-1],n[i]+=Ad.distanceTo(Td);e.setAttribute("lineDistance",new Ra(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),id.copy(n.boundingSphere),id.applyMatrix4(i),id.radius+=s,e.ray.intersectsSphere(id)===!1)return;lM.copy(i).invert(),jl.copy(e.ray).applyMatrix4(lM);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){let h=Math.max(0,r.start),S=Math.min(d.count,r.start+r.count);for(let L=h,g=S-1;L<g;L+=u){let c=d.getX(L),m=d.getX(L+1),v=sd(this,e,jl,l,c,m,L);v&&a.push(v)}if(this.isLineLoop){let L=d.getX(S-1),g=d.getX(h),c=sd(this,e,jl,l,L,g,S-1);c&&a.push(c)}}else{let h=Math.max(0,r.start),S=Math.min(f.count,r.start+r.count);for(let L=h,g=S-1;L<g;L+=u){let c=sd(this,e,jl,l,L,L+1,L);c&&a.push(c)}if(this.isLineLoop){let L=sd(this,e,jl,l,S-1,h,S-1);L&&a.push(L)}}}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function sd(t,e,a,n,i,s,r){let o=t.geometry.attributes.position;if(Ad.fromBufferAttribute(o,i),Td.fromBufferAttribute(o,s),a.distanceSqToSegment(Ad,Td,Gg,uM)>n)return;Gg.applyMatrix4(t.matrixWorld);let u=e.ray.origin.distanceTo(Gg);if(!(u<e.near||u>e.far))return{distance:u,point:uM.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}var du=class extends Ya{constructor(e=[],a=lr,n,i,s,r,o,l,u,d){super(e,a,n,i,s,r,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Fi=class extends Ya{constructor(e,a,n=zn,i,s,r,o=ma,l=ma,u,d=Ni,p=1){if(d!==Ni&&d!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:a,depth:p};super(f,i,s,r,o,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},hu=class extends Fi{constructor(e,a=zn,n=lr,i,s,r=ma,o=ma,l,u=Ni){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,a,n,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pu=class extends Ya{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},As=class t extends Tn{constructor(e=1,a=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],p=[],f=0,h=0;S("z","y","x",-1,-1,n,a,e,r,s,0),S("z","y","x",1,-1,n,a,-e,r,s,1),S("x","z","y",1,1,e,n,a,i,r,2),S("x","z","y",1,-1,e,n,-a,i,r,3),S("x","y","z",1,-1,e,a,n,i,s,4),S("x","y","z",-1,-1,e,a,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ra(u,3)),this.setAttribute("normal",new Ra(d,3)),this.setAttribute("uv",new Ra(p,2));function S(L,g,c,m,v,y,A,T,x,C,D){let E=y/x,U=A/C,G=y/2,K=A/2,R=T/2,k=x+1,q=C+1,z=0,te=0,W=new H;for(let $=0;$<q;$++){let ie=$*U-K;for(let Le=0;Le<k;Le++){let Ne=Le*E-G;W[L]=Ne*m,W[g]=ie*v,W[c]=R,u.push(W.x,W.y,W.z),W[L]=0,W[g]=0,W[c]=T>0?1:-1,d.push(W.x,W.y,W.z),p.push(Le/x),p.push(1-$/C),z+=1}}for(let $=0;$<C;$++)for(let ie=0;ie<x;ie++){let Le=f+ie+k*$,Ne=f+ie+k*($+1),Q=f+(ie+1)+k*($+1),ge=f+(ie+1)+k*$;l.push(Le,Ne,ge),l.push(Ne,Q,ge),te+=6}o.addGroup(h,te,D),h+=te,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mu=class t extends Tn{constructor(e=1,a=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:n,heightSegments:i};let s=e/2,r=a/2,o=Math.floor(n),l=Math.floor(i),u=o+1,d=l+1,p=e/o,f=a/l,h=[],S=[],L=[],g=[];for(let c=0;c<d;c++){let m=c*f-r;for(let v=0;v<u;v++){let y=v*p-s;S.push(y,-m,0),L.push(0,0,1),g.push(v/o),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){let v=m+u*c,y=m+u*(c+1),A=m+1+u*(c+1),T=m+1+u*c;h.push(v,y,T),h.push(y,A,T)}this.setIndex(h),this.setAttribute("position",new Ra(S,3)),this.setAttribute("normal",new Ra(L,3)),this.setAttribute("uv",new Ra(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},gu=class t extends Tn{constructor(e=.5,a=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:a,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],u=[],d=[],p=e,f=(a-e)/i,h=new H,S=new Je;for(let L=0;L<=i;L++){for(let g=0;g<=n;g++){let c=s+g/n*r;h.x=p*Math.cos(c),h.y=p*Math.sin(c),l.push(h.x,h.y,h.z),u.push(0,0,1),S.x=(h.x/a+1)/2,S.y=(h.y/a+1)/2,d.push(S.x,S.y)}p+=f}for(let L=0;L<i;L++){let g=L*(n+1);for(let c=0;c<n;c++){let m=c+g,v=m,y=m+n+1,A=m+n+2,T=m+1;o.push(v,y,T),o.push(y,A,T)}}this.setIndex(o),this.setAttribute("position",new Ra(l,3)),this.setAttribute("normal",new Ra(u,3)),this.setAttribute("uv",new Ra(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function cr(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];if(cM(i))i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone();else if(Array.isArray(i))if(cM(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[a][n]=s}else e[a][n]=i.slice();else e[a][n]=i}}return e}function Da(t){let e={};for(let a=0;a<t.length;a++){let n=cr(t[a]);for(let i in n)e[i]=n[i]}return e}function cM(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function jT(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function Ix(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var iL={clone:cr,merge:Da},$T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$T,this.fragmentShader=e1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=jT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?a.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?a.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?a.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?a.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?a.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?a.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?a.uniforms[i]={type:"m4",value:r.toArray()}:a.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(a.extensions=n),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=a[i.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new Je().fromArray(i.value);break;case"v3":this.uniforms[n].value=new H().fromArray(i.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new It().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Id=class extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xu=class extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ed=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wd=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function vo(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function rd(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Ts=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Rd=class extends Ts{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wg,endingEnd:Wg}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Xg:s=e,o=2*a-n;break;case Yg:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xg:r=e,l=2*n-a;break;case Yg:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,d=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,h=this._weightNext,S=(n-a)/(i-a),L=S*S,g=L*S,c=-f*g+2*f*L-f*S,m=(1+f)*g+(-1.5-2*f)*L+(-.5+f)*S+1,v=(-1-h)*g+(1.5+h)*L+.5*S,y=h*g-h*L;for(let A=0;A!==o;++A)s[A]=c*r[d+A]+m*r[u+A]+v*r[l+A]+y*r[p+A];return s}},Dd=class extends Ts{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(n-a)/(i-a),p=1-d;for(let f=0;f!==o;++f)s[f]=r[u+f]*p+r[l+f]*d;return s}},Pd=class extends Ts{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ud=class extends Ts{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let S=(n-a)/(i-a),L=1-S;for(let g=0;g!==o;++g)s[g]=r[u+g]*L+r[l+g]*S;return s}let f=o*2,h=e-1;for(let S=0;S!==o;++S){let L=r[u+S],g=r[l+S],c=h*f+S*2,m=p[c],v=p[c+1],y=e*f+S*2,A=d[y],T=d[y+1],x=a1(n,a,m,A,i);s[S]=sL(x,L,v,T,g)}return s}};function sL(t,e,a,n,i){let s=1-t;return s*s*s*e+3*s*s*t*a+3*s*t*t*n+t*t*t*i}function t1(t,e,a,n,i){let s=1-t;return 3*s*s*(a-e)+6*s*t*(n-a)+3*t*t*(i-n)}function a1(t,e,a,n,i){let s=(t-e)/(i-e);for(let r=0;r<8;r++){let o=sL(s,e,a,n,i)-t;if(Math.abs(o)<1e-10)break;let l=t1(s,e,a,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var fn=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(a,this.TimeBufferType),this.values=vo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),rd(e.settings)&&(n.settings={inTangents:vo(e.settings.inTangents,Array),outTangents:vo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Ud(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case au:a=this.InterpolantFactoryMethodDiscrete;break;case vd:a=this.InterpolantFactoryMethodLinear;break;case ud:a=this.InterpolantFactoryMethodSmooth;break;case qg:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return au;case this.InterpolantFactoryMethodLinear:return vd;case this.InterpolantFactoryMethodSmooth:return ud;case this.InterpolantFactoryMethodBezier:return qg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e;rd(this.settings)&&(fM(this.settings.inTangents,e),fM(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e;rd(this.settings)&&(dM(this.settings.inTangents,e),dM(this.settings.outTangents,e))}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Fe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Fe("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&ST(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Fe("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ud,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*n,f=p-n,h=p+n;for(let S=0;S!==n;++S){let L=a[p+S];if(L!==a[f+S]||L!==a[h+S]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*n,f=r*n;for(let h=0;h!==n;++h)a[f+h]=a[p+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,rd(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function fM(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]+=e}function dM(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=vd;var Is=class extends fn{constructor(e,a,n){super(e,a,n)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=au;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Nd=class extends fn{constructor(e,a,n,i){super(e,a,n,i)}};Nd.prototype.ValueTypeName="color";var Bd=class extends fn{constructor(e,a,n,i){super(e,a,n,i)}};Bd.prototype.ValueTypeName="number";var Od=class extends Ts{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let d=u+o;u!==d;u+=4)ai.slerpFlat(s,0,r,u-o,r,u,l);return s}},Su=class extends fn{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new Od(this.times,this.values,this.getValueSize(),e)}};Su.prototype.ValueTypeName="quaternion";Su.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends fn{constructor(e,a,n){super(e,a,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=au;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Fd=class extends fn{constructor(e,a,n,i){super(e,a,n,i)}};Fd.prototype.ValueTypeName="vector";var zd=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=u.length;p<f;p+=2){let h=u[p],S=u[p+1];if(h.global&&(h.lastIndex=0),h.test(d))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rL=new zd,kd=class{constructor(e){this.manager=e!==void 0?e:rL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};kd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo=class extends La{static registerNode(e){this.prototype._lightNode=e}constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}},yu=class extends Uo{constructor(e,a,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(La.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(a)}copy(e,a){return super.copy(e,a),this.groundColor.copy(e.groundColor),this}toJSON(e){let a=super.toJSON(e);return a.object.groundColor=this.groundColor.getHex(),a}},Vg=new It,hM=new H,pM=new H,vu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Za,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bs,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;hM.setFromMatrixPosition(e.matrixWorld),a.position.copy(hM),pM.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(pM),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,n,i){Vg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vg,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,u=i?i.y/s.y:0;e.coordinateSystem===bo||e.reversedDepth?a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),a.multiply(Vg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},od=new H,ld=new ai,Qn=new H,_u=class extends La{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(od,ld,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(od,ld,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,a,n=!1){super.updateWorldMatrix(e,a,n),this.matrixWorld.decompose(od,ld,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(od,ld,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new H,mM=new Je,gM=new Je,wa=class extends _u{constructor(e=50,a=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,n){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,a){return this.getViewBounds(e,mM,gM),a.subVectors(gM,mM)}setViewOffset(e,a,n,i,s,r){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(eu*.5*this.fov)/this.zoom,n=2*a,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,a-=r.offsetY*n/u,i*=r.width/l,n*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var Zg=class extends vu{constructor(){super(new wa(90,1,.5,500)),this.isPointLightShadow=!0}},Mu=class extends Uo{constructor(e,a,n=0,i=2){super(e,a),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,a){return super.copy(e,a),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.distance=this.distance,a.object.decay=this.decay,a.object.shadow=this.shadow.toJSON(),a}},Lu=class extends _u{constructor(e=-1,a=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+a,l=i-a;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},Kg=class extends vu{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cu=class extends Uo{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(La.DEFAULT_UP),this.updateMatrix(),this.target=new La,this.shadow=new Kg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var _o=-90,Mo=1,No=class extends La{constructor(e,a,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wa(_o,Mo,e,a);i.layers=this.layers,this.add(i);let s=new wa(_o,Mo,e,a);s.layers=this.layers,this.add(s);let r=new wa(_o,Mo,e,a);r.layers=this.layers,this.add(r);let o=new wa(_o,Mo,e,a);o.layers=this.layers,this.add(o);let l=new wa(_o,Mo,e,a);l.layers=this.layers,this.add(l);let u=new wa(_o,Mo,e,a);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[n,i,s,r,o,l]=a;for(let u of a)this.remove(u);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of a)this.add(u),u.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let L=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),n.texture.mipmapsAutoUpdate=L,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,d),e.setRenderTarget(p,f,h),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Hd=class extends wa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ex="\\[\\]\\.:\\/",n1=new RegExp("["+Ex+"]","g"),wx="[^"+Ex+"]",i1="[^"+Ex.replace("\\.","")+"]",s1=/((?:WC+[\/:])*)/.source.replace("WC",wx),r1=/(WCOD+)?/.source.replace("WCOD",i1),o1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wx),l1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wx),u1=new RegExp("^"+s1+r1+o1+l1+"$"),c1=["material","materials","bones","map"],Jg=class{constructor(e,a,n){let i=n||Nt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},Nt=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(n1,"")}static parseTrackName(e){let a=u1.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);c1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Fe("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Jg;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var h2=new Float32Array(1);var xM=new It,bu=class{constructor(e,a,n=0,i=1/0){this.ray=new Ro(e,a),this.near=n,this.far=i,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):Fe("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return xM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xM),this}intersectObject(e,a=!0,n=[]){return Qg(e,this,n,a),n.sort(SM),n}intersectObjects(e,a=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Qg(e[i],this,n,a);return n.sort(SM),n}};function SM(t,e){return t.distance-e.distance}function Qg(t,e,a,n){let i=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(i=!1),i===!0&&n===!0){let s=t.children;for(let r=0,o=s.length;r<o;r++)Qg(s[r],e,a,!0)}}var Au=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let a=performance.now();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}};var Bx=class Bx{constructor(e,a,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let n=0;n<4;n++)this.elements[n]=e[n+a];return this}set(e,a,n,i){let s=this.elements;return s[0]=e,s[2]=a,s[1]=n,s[3]=i,this}};Bx.prototype.isMatrix2=!0;var jg=Bx;function Rx(t,e,a,n){let i=f1(n);switch(a){case xx:return t*e;case yx:return t*e/i.components*i.byteLength;case Jd:return t*e/i.components*i.byteLength;case Rs:return t*e*2/i.components*i.byteLength;case Qd:return t*e*2/i.components*i.byteLength;case Sx:return t*e*3/i.components*i.byteLength;case Gn:return t*e*4/i.components*i.byteLength;case jd:return t*e*4/i.components*i.byteLength;case wu:case Ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Du:case Pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:case ah:return Math.max(t,16)*Math.max(e,8)/4;case $d:case th:return Math.max(t,8)*Math.max(e,8)/2;case nh:case ih:case rh:case oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sh:case Uu:case lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lh:case Ch:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ah:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Nu:case Ih:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function f1(t){switch(t){case Za:case hx:return{byteLength:1,components:1};case zo:case px:case Hn:return{byteLength:2,components:1};case Zd:case Kd:return{byteLength:2,components:4};case zn:case Yd:case kn:return{byteLength:4,components:1};case mx:case gx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function IL(){let t=null,e=!1,a=null,n=null;function i(s,r){n=t.requestAnimationFrame(i),a(s,r)}return{start:function(){e!==!0&&a!==null&&t!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function h1(t){let e=new WeakMap;function a(o,l){let u=o.array,d=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){let d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((h,S)=>h.start-S.start);let f=0;for(let h=1;h<p.length;h++){let S=p[f],L=p[h];L.start<=S.start+S.count+1?S.count=Math.max(S.count,L.start+L.count-S.start):(++f,p[f]=L)}p.length=f+1;for(let h=0,S=p.length;h<S;h++){let L=p[h];t.bufferSubData(u,L.start*d.BYTES_PER_ELEMENT,d,L.start,L.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,a(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}var p1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m1=`#ifdef USE_ALPHAHASH
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
#endif`,g1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,x1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v1=`#ifdef USE_AOMAP
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
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M1=`#ifdef USE_BATCHING
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
#endif`,L1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,I1=`#ifdef USE_BUMPMAP
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,N1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,O1=`#define PI 3.141592653589793
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
} // validated`,F1=`vec3 transformedNormal = objectNormal;
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
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,J1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eI=`#ifdef USE_GRADIENTMAP
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
}`,tI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iI=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sI=`#ifdef USE_ENVMAP
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
#endif`,rI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cI=`PhysicalMaterial material;
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
#endif`,fI=`uniform sampler2D dfgLUT;
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
}`,dI=`
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
#endif`,hI=`#if defined( RE_IndirectDiffuse )
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
#endif`,pI=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mI=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,gI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_I=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LI=`#if defined( USE_POINTS_UV )
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
#endif`,CI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TI=`#if defined( USE_MORPHCOLORS )
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
#endif`,II=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EI=`#ifdef USE_MORPHTARGETS
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
#endif`,wI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,BI=`#ifdef USE_NORMALMAP
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
#endif`,OI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GI=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jI=`float getShadowMask() {
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
}`,$I=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
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
#endif`,nE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,lE=`#ifdef USE_TRANSMISSION
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
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pE=`uniform sampler2D t2D;
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform float backgroundBlurriness;
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
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`#include <common>
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
}`,vE=`#if DEPTH_PACKING == 3200
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
}`,_E=`#define DISTANCE
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
}`,ME=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`uniform float scale;
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
}`,AE=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,IE=`uniform vec3 diffuse;
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
}`,EE=`#define LAMBERT
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
}`,wE=`#define LAMBERT
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
}`,RE=`#define MATCAP
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
}`,DE=`#define MATCAP
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
}`,PE=`#define NORMAL
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
}`,UE=`#define NORMAL
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
}`,NE=`#define PHONG
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
}`,BE=`#define PHONG
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
}`,OE=`#define STANDARD
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
}`,FE=`#define STANDARD
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
}`,zE=`#define TOON
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
}`,kE=`#define TOON
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
}`,HE=`uniform float size;
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
}`,GE=`uniform vec3 diffuse;
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
}`,VE=`#include <common>
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
}`,qE=`uniform vec3 color;
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
}`,WE=`uniform float rotation;
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
}`,XE=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:p1,alphahash_pars_fragment:m1,alphamap_fragment:g1,alphamap_pars_fragment:x1,alphatest_fragment:S1,alphatest_pars_fragment:y1,aomap_fragment:v1,aomap_pars_fragment:_1,batching_pars_vertex:M1,batching_vertex:L1,begin_vertex:C1,beginnormal_vertex:b1,bsdfs:A1,iridescence_fragment:T1,bumpmap_pars_fragment:I1,clipping_planes_fragment:E1,clipping_planes_pars_fragment:w1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:D1,color_fragment:P1,color_pars_fragment:U1,color_pars_vertex:N1,color_vertex:B1,common:O1,defaultnormal_vertex:F1,displacementmap_pars_vertex:z1,displacementmap_vertex:k1,emissivemap_fragment:H1,emissivemap_pars_fragment:G1,colorspace_fragment:V1,colorspace_pars_fragment:q1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:Y1,envmap_pars_vertex:Z1,envmap_physical_pars_fragment:sI,envmap_vertex:K1,fog_vertex:J1,fog_pars_vertex:Q1,fog_fragment:j1,fog_pars_fragment:$1,gradientmap_pars_fragment:eI,lightmap_pars_fragment:tI,lights_lambert_fragment:aI,lights_lambert_pars_fragment:nI,lights_pars_begin:iI,lights_toon_fragment:rI,lights_toon_pars_fragment:oI,lights_phong_fragment:lI,lights_phong_pars_fragment:uI,lights_physical_fragment:cI,lights_physical_pars_fragment:fI,lights_fragment_begin:dI,lights_fragment_maps:hI,lights_fragment_end:pI,lightprobes_pars_fragment:mI,logdepthbuf_fragment:gI,logdepthbuf_pars_fragment:xI,logdepthbuf_pars_vertex:SI,logdepthbuf_vertex:yI,map_fragment:vI,map_pars_fragment:_I,map_particle_fragment:MI,map_particle_pars_fragment:LI,metalnessmap_fragment:CI,metalnessmap_pars_fragment:bI,morphinstance_vertex:AI,morphcolor_vertex:TI,morphnormal_vertex:II,morphtarget_pars_vertex:EI,morphtarget_vertex:wI,normal_fragment_begin:RI,normal_fragment_maps:DI,normal_pars_fragment:PI,normal_pars_vertex:UI,normal_vertex:NI,normalmap_pars_fragment:BI,clearcoat_normal_fragment_begin:OI,clearcoat_normal_fragment_maps:FI,clearcoat_pars_fragment:zI,iridescence_pars_fragment:kI,opaque_fragment:HI,packing:GI,premultiplied_alpha_fragment:VI,project_vertex:qI,dithering_fragment:WI,dithering_pars_fragment:XI,roughnessmap_fragment:YI,roughnessmap_pars_fragment:ZI,shadowmap_pars_fragment:KI,shadowmap_pars_vertex:JI,shadowmap_vertex:QI,shadowmask_pars_fragment:jI,skinbase_vertex:$I,skinning_pars_vertex:eE,skinning_vertex:tE,skinnormal_vertex:aE,specularmap_fragment:nE,specularmap_pars_fragment:iE,tonemapping_fragment:sE,tonemapping_pars_fragment:rE,transmission_fragment:oE,transmission_pars_fragment:lE,uv_pars_fragment:uE,uv_pars_vertex:cE,uv_vertex:fE,worldpos_vertex:dE,background_vert:hE,background_frag:pE,backgroundCube_vert:mE,backgroundCube_frag:gE,cube_vert:xE,cube_frag:SE,depth_vert:yE,depth_frag:vE,distance_vert:_E,distance_frag:ME,equirect_vert:LE,equirect_frag:CE,linedashed_vert:bE,linedashed_frag:AE,meshbasic_vert:TE,meshbasic_frag:IE,meshlambert_vert:EE,meshlambert_frag:wE,meshmatcap_vert:RE,meshmatcap_frag:DE,meshnormal_vert:PE,meshnormal_frag:UE,meshphong_vert:NE,meshphong_frag:BE,meshphysical_vert:OE,meshphysical_frag:FE,meshtoon_vert:zE,meshtoon_frag:kE,points_vert:HE,points_frag:GE,shadow_vert:VE,shadow_frag:qE,sprite_vert:WE,sprite_frag:XE},ye={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},ri={basic:{uniforms:Da([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Da([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Da([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Da([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Da([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Da([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Da([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Da([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Da([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Da([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Da([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Da([ye.common,ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Da([ye.lights,ye.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ri.physical={uniforms:Da([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var wh={r:0,b:0,g:0},YE=new It,EL=new ze;EL.set(-1,0,0,0,1,0,0,0,1);function ZE(t,e,a,n,i,s){let r=new Ye(0),o=i===!0?0:1,l,u,d=null,p=0,f=null;function h(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){let y=m.backgroundBlurriness>0;v=e.get(v,y)}return v}function S(m){let v=!1,y=h(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),v=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?a.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function L(m,v){let y=h(v);y&&y.isCubeTexture?(u===void 0&&(u=new Ca(new As(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:cr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YE.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(EL),u.material.toneMapped=nt.getTransfer(y.colorSpace)!==mt,(d!==y||p!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ca(new mu(2,2),new ni({name:"BackgroundMaterial",uniforms:cr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,v){m.getRGB(wh,Ix(t)),a.buffers.color.setClear(wh.r,wh.g,wh.b,v,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,v=1){r.set(m),o=v,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:S,addToRenderList:L,dispose:c}}function KE(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,r=!1;function o(U,G,K,R,k){let q=!1,z=p(U,R,K,G);s!==z&&(s=z,u(s.object)),q=h(U,R,K,k),q&&S(U,R,K,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,y(U,G,K,R),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(U){return t.bindVertexArray(U)}function d(U){return t.deleteVertexArray(U)}function p(U,G,K,R){let k=R.wireframe===!0,q=n[G.id];q===void 0&&(q={},n[G.id]=q);let z=U.isInstancedMesh===!0?U.id:0,te=q[z];te===void 0&&(te={},q[z]=te);let W=te[K.id];W===void 0&&(W={},te[K.id]=W);let $=W[k];return $===void 0&&($=f(l()),W[k]=$),$}function f(U){let G=[],K=[],R=[];for(let k=0;k<a;k++)G[k]=0,K[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:R,object:U,attributes:{},index:null}}function h(U,G,K,R){let k=s.attributes,q=G.attributes,z=0,te=K.getAttributes();for(let W in te)if(te[W].location>=0){let ie=k[W],Le=q[W];if(Le===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Le=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Le=U.instanceColor)),ie===void 0||ie.attribute!==Le||Le&&ie.data!==Le.data)return!0;z++}return s.attributesNum!==z||s.index!==R}function S(U,G,K,R){let k={},q=G.attributes,z=0,te=K.getAttributes();for(let W in te)if(te[W].location>=0){let ie=q[W];ie===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor));let Le={};Le.attribute=ie,ie&&ie.data&&(Le.data=ie.data),k[W]=Le,z++}s.attributes=k,s.attributesNum=z,s.index=R}function L(){let U=s.newAttributes;for(let G=0,K=U.length;G<K;G++)U[G]=0}function g(U){c(U,0)}function c(U,G){let K=s.newAttributes,R=s.enabledAttributes,k=s.attributeDivisors;K[U]=1,R[U]===0&&(t.enableVertexAttribArray(U),R[U]=1),k[U]!==G&&(t.vertexAttribDivisor(U,G),k[U]=G)}function m(){let U=s.newAttributes,G=s.enabledAttributes;for(let K=0,R=G.length;K<R;K++)G[K]!==U[K]&&(t.disableVertexAttribArray(K),G[K]=0)}function v(U,G,K,R,k,q,z){z===!0?t.vertexAttribIPointer(U,G,K,k,q):t.vertexAttribPointer(U,G,K,R,k,q)}function y(U,G,K,R){L();let k=R.attributes,q=K.getAttributes(),z=G.defaultAttributeValues;for(let te in q){let W=q[te];if(W.location>=0){let $=k[te];if($===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),$!==void 0){let ie=$.normalized,Le=$.itemSize,Ne=e.get($);if(Ne===void 0)continue;let Q=Ne.buffer,ge=Ne.type,Me=Ne.bytesPerElement,he=ge===t.INT||ge===t.UNSIGNED_INT||$.gpuType===Yd;if($.isInterleavedBufferAttribute){let Se=$.data,Be=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Et=$.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)c(W.location+_e,Se.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let _e=0;_e<W.locationSize;_e++)g(W.location+_e);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let _e=0;_e<W.locationSize;_e++)v(W.location+_e,Le/W.locationSize,ge,ie,Be*Me,(Et+Le/W.locationSize*_e)*Me,he)}else{if($.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)c(W.location+Se,$.meshPerAttribute);U.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Se=0;Se<W.locationSize;Se++)g(W.location+Se);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let Se=0;Se<W.locationSize;Se++)v(W.location+Se,Le/W.locationSize,ge,ie,Le*Me,Le/W.locationSize*Se*Me,he)}}else if(z!==void 0){let ie=z[te];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(W.location,ie);break;case 3:t.vertexAttrib3fv(W.location,ie);break;case 4:t.vertexAttrib4fv(W.location,ie);break;default:t.vertexAttrib1fv(W.location,ie)}}}}m()}function A(){D();for(let U in n){let G=n[U];for(let K in G){let R=G[K];for(let k in R){let q=R[k];for(let z in q)d(q[z].object),delete q[z];delete R[k]}}delete n[U]}}function T(U){if(n[U.id]===void 0)return;let G=n[U.id];for(let K in G){let R=G[K];for(let k in R){let q=R[k];for(let z in q)d(q[z].object),delete q[z];delete R[k]}}delete n[U.id]}function x(U){for(let G in n){let K=n[G];for(let R in K){let k=K[R];if(k[U.id]===void 0)continue;let q=k[U.id];for(let z in q)d(q[z].object),delete q[z];delete k[U.id]}}}function C(U){for(let G in n){let K=n[G],R=U.isInstancedMesh===!0?U.id:0,k=K[R];if(k!==void 0){for(let q in k){let z=k[q];for(let te in z)d(z[te].object),delete z[te];delete k[q]}delete K[R],Object.keys(K).length===0&&delete n[G]}}}function D(){E(),r=!0,s!==i&&(s=i,u(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:C,releaseStatesOfProgram:x,initAttributes:L,enableAttribute:g,disableUnusedAttributes:m}}function JE(t,e,a){let n;function i(l){n=l}function s(l,u){t.drawArrays(n,l,u),a.update(u,n,1)}function r(l,u,d){d!==0&&(t.drawArraysInstanced(n,l,u,d),a.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let h=0;h<d;h++)f+=u[h];a.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function QE(t,e,a,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){return!(x!==Gn&&n.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let C=x===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Za&&x!==kn&&!C&&n.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=a.precision!==void 0?a.precision:"highp",d=l(u);d!==u&&(Ue("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let p=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=a.logarithmicDepthBuffer===!0&&p===!1;a.reversedDepthBuffer===!0&&p===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),a.logarithmicDepthBuffer===!0&&p===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:S,maxTextureSize:L,maxCubemapSize:g,maxAttributes:c,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,maxSamples:A,samples:T}}function jE(t){let e=this,a=null,n=0,i=!1,s=!1,r=new Fn,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let h=p.length!==0||f||n!==0||i;return i=f,n=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){a=d(p,f,0)},this.setState=function(p,f,h){let S=p.clippingPlanes,L=p.clipIntersection,g=p.clipShadows,c=t.get(p);if(!i||S===null||S.length===0||s&&!g)s?d(null):u();else{let m=s?0:n,v=m*4,y=c.clippingState||null;l.value=y,y=d(S,f,v,h);for(let A=0;A!==v;++A)y[A]=a[A];c.clippingState=y,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==a&&(l.value=a,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,h,S){let L=p!==null?p.length:0,g=null;if(L!==0){if(g=l.value,S!==!0||g===null){let c=h+L*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<c)&&(g=new Float32Array(c));for(let v=0,y=h;v!==L;++v,y+=4)r.copy(p[v]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,g}}var zu=class extends cn{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new du(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new As(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:za,blending:rr});s.uniforms.tEquirect.value=a;let r=new Ca(i,s),o=a.minFilter;return a.minFilter===zi&&(a.minFilter=Fa),new No(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,n,i);e.setRenderTarget(s)}},oL=256,$E=3,ew=20,wL=256,RL=16,tw=3,aw=new H,nw=new Ye,Dh=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new No(1,10,null),this._boxMesh=new Ca(new As(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,a=0,n=.1,i=100,s={}){let{size:r=256,position:o=aw}=s,l=this._renderer;this._setSize(r);let u=this._allocateTarget(),d=this._getSourceTarget(!0);a>0&&(d.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,S=l.autoClearStencil,L=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,L===null&&(e.background=l.getClearColor(nw));let g=new No(n,i,d);return g.position.copy(o),g.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=S,e.background=L,a>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(u,a)),this._applyPMREM(u),u}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cL(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uL(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,a){return a>0?1-Math.sqrt(1-e/a):0}_setSize(e){this._cubeSize=Math.max(oL,Ax(e))}_fromTexture(e,a){e.mapping===lr||e.mapping===Fo?this._setSize(e.image.length===0?oL:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=a||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,a=lL(e,!1,!1),n=Math.log2(e)-$E;for(let i=0;i<=n;i++)a.texture.mipmaps.push({width:e>>i,height:e>>i});return a.texture.name="PMREM",a.texture.isPMREMTexture=!0,a}_getSourceTarget(e=!1){let a=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==a||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=lL(a,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,a,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=a;let r=e.width>>a;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let a;e.mapping===lr||e.mapping===Fo?(this._cubemapMaterial===null&&(this._cubemapMaterial=cL()),a=this._cubemapMaterial,a.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=uL()),a=this._equirectMaterial),a.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,a)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=iw(),this._integrationMaterial=sw());let a=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(a/RL);for(let r=0;r<=n;r++){let o=t.lodToRoughness(r,n);if(r>n-tw)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(a)+.5*Math.log2(6/(wL*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,a){this._blurMaterial===null&&(this._blurMaterial=rw());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(a,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function lL(t,e,a){return new zu(t,{minFilter:zi,generateMipmaps:e,type:Hn,colorSpace:nu,depthBuffer:a})}function ku(t,e,a){return new ni({name:t,uniforms:e,vertexShader:Ke.cube_vert,fragmentShader:a,side:za,blending:rr,depthTest:!1,depthWrite:!1})}function iw(){return ku("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${wL}u

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
	`)}function sw(){return ku("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:RL}},`

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
	`)}function rw(){return ku("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ew}
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
	`)}function uL(){return ku("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function cL(){return ku("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ow(t){let e=new WeakMap,a=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?r(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===qd||h===Wd)if(e.has(f)){let S=e.get(f).texture;return o(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let L=new zu(S.height);return L.fromEquirectangularTexture(t,f),e.set(f,L),f.addEventListener("dispose",u),o(L.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,S=h===qd||h===Wd,L=h===lr||h===Fo;if(S||L){let g=a.get(f),c=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return n===null&&(n=new Dh(t)),g=S?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,a.set(f,g),g.texture;if(g!==void 0)return g.texture;{let m=f.image;return S&&m&&m.height>0||L&&m&&l(m)?(n===null&&(n=new Dh(t)),g=S?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,a.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,h){return h===qd?f.mapping=lr:h===Wd&&(f.mapping=Fo),f}function l(f){let h=0,S=6;for(let L=0;L<S;L++)f[L]!==void 0&&h++;return h===S}function u(f){let h=f.target;h.removeEventListener("dispose",u);let S=e.get(h);S!==void 0&&(e.delete(h),S.dispose())}function d(f){let h=f.target;h.removeEventListener("dispose",d);let S=a.get(h);S!==void 0&&(a.delete(h),S.dispose())}function p(){e=new WeakMap,a=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function lw(t){let e={};function a(n){if(e[n]!==void 0)return e[n];let i=t.getExtension(n);return e[n]=i,i}return{has:function(n){return a(n)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(n){let i=a(n);return i===null&&$l("WebGLRenderer: "+n+" extension not supported."),i}}}function uw(t,e,a,n){let i={},s=new WeakMap,r=new FinalizationRegistry(S=>delete i[S]);function o(S){l(S.target)}function l(S){S.index!==null&&e.remove(S.index);for(let g in S.attributes)e.remove(S.attributes[g]);S.removeEventListener("dispose",o),delete i[S.id],r.unregister(S);let L=s.get(S);L&&(e.remove(L),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function u(S,L){return i[L.id]!==void 0||(L.addEventListener("dispose",o),i[L.id]=new WeakRef(L),r.register(L,L.id,L),a.memory.geometries++),L}function d(S){let L=S.attributes;for(let g in L)e.update(L[g],t.ARRAY_BUFFER)}function p(S){let L=S.index,g=S.attributes.position,c=0;if(g===void 0)return;let m=L!==null?L.array.length:g.array.length/3-1,v=g.count>=65535?cu:uu,y=new v(Math.ceil(m/3)*6,1),A=y.array;if(L!==null){let x=L.array;c=L.version;for(let C=0,D=0;C<m;C+=3){let E=x[C+0],U=x[C+1],G=x[C+2];A[D++]=E,A[D++]=U,A[D++]=U,A[D++]=G,A[D++]=G,A[D++]=E}}else{c=g.version;for(let x=0,C=0;x<m;x+=3){let D=x+0,E=x+1,U=x+2;A[C++]=D,A[C++]=E,A[C++]=E,A[C++]=U,A[C++]=U,A[C++]=D}}y.version=c;let T=s.get(S);T&&e.remove(T),s.set(S,y)}function f(S){let L=s.get(S);if(L){let g=S.index;g!==null&&L.version<g.version&&p(S)}else p(S);return s.get(S)}function h(){for(let S in i){let L=i[S].deref();L!==void 0&&l(L)}}return{get:u,update:d,getWireframeAttribute:f,dispose:h}}function cw(t,e,a){let n;function i(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,f){t.drawElements(n,f,s,p*r),a.update(f,n,1)}function u(p,f,h){h!==0&&(t.drawElementsInstanced(n,f,s,p*r,h),a.update(f,n,h))}function d(p,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,h);let L=0;for(let g=0;g<h;g++)L+=f[g];a.update(L,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function fw(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(a.calls++,r){case t.TRIANGLES:a.triangles+=o*(s/3);break;case t.LINES:a.lines+=o*(s/2);break;case t.LINE_STRIP:a.lines+=o*(s-1);break;case t.LINE_LOOP:a.lines+=o*s;break;case t.POINTS:a.points+=o*s;break;default:Fe("WebGLInfo: Unknown draw mode:",r);break}}function i(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:n}}function dw(t,e,a){let n=new WeakMap,i=new zt;function s(r,o,l){let u=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==p){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,L=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],v=0;h===!0&&(v=1),S===!0&&(v=2),L===!0&&(v=3);let y=o.attributes.position.count*v,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*A*4*p),x=new ru(T,y,A,p);x.type=kn,x.needsUpdate=!0;let C=v*4;for(let E=0;E<p;E++){let U=g[E],G=c[E],K=m[E],R=y*A*4*E;for(let k=0;k<U.count;k++){let q=k*C;h===!0&&(i.fromBufferAttribute(U,k),T[R+q+0]=i.x,T[R+q+1]=i.y,T[R+q+2]=i.z,T[R+q+3]=0),S===!0&&(i.fromBufferAttribute(G,k),T[R+q+4]=i.x,T[R+q+5]=i.y,T[R+q+6]=i.z,T[R+q+7]=0),L===!0&&(i.fromBufferAttribute(K,k),T[R+q+8]=i.x,T[R+q+9]=i.y,T[R+q+10]=i.z,T[R+q+11]=K.itemSize===4?i.w:1)}}f={count:p,texture:x,size:new Je(y,A)},n.set(o,f),o.addEventListener("dispose",D)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,a);else{let h=0;for(let L=0;L<u.length;L++)h+=u[L];let S=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function hw(t,e,a,n,i){let s=new WeakMap;function r(u){let d=i.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(a.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&a.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return f}function o(){s=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),a.remove(d.instanceMatrix),d.instanceColor!==null&&a.remove(d.instanceColor)}return{update:r,dispose:o}}var pw={[rx]:"LINEAR_TONE_MAPPING",[ox]:"REINHARD_TONE_MAPPING",[lx]:"CINEON_TONE_MAPPING",[Iu]:"ACES_FILMIC_TONE_MAPPING",[cx]:"AGX_TONE_MAPPING",[fx]:"NEUTRAL_TONE_MAPPING",[ux]:"CUSTOM_TONE_MAPPING"};function mw(t,e,a,n,i,s){let r=new cn(e,a,{type:t,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,d=new Tn;d.setAttribute("position",new Ra([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ra([0,2,0,0,2,0],2));let p=new Id({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ca(d,p),h=new Lu(-1,1,1,-1,0,1),S=null,L=null,g=!1,c,m=null,v=[],y=!1;this.setSize=function(A,T){r.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let x=0;x<v.length;x++){let C=v[x];C.setSize&&C.setSize(A,T)}},this.setEffects=function(A){v=A,y=v.length>0&&v[0].isRenderPass===!0;let T=r.width,x=r.height;v.length>0&&o===null&&(o=new cn(T,x,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(T,x,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));let C=i===!0&&v.some(D=>D.needsDepthTexture===!0);C!==(r.depthTexture!==null)&&(C===!0&&u===null&&(u=new Fi(T,x),s===!0&&(u.format=ki,u.type=ur)),r.dispose(),r.depthTexture=C?u:null,r.resolveDepthBuffer=C,r.storeMultisampledDepthBuffer=C);for(let D=0;D<v.length;D++){let E=v[D];E.setSize&&E.setSize(T,x),C&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(u)}},this.begin=function(A,T){if(g||A.toneMapping===ii&&v.length===0)return!1;if(m=T,T!==null){let x=T.width,C=T.height;(r.width!==x||r.height!==C)&&this.setSize(x,C)}return y===!1&&A.setRenderTarget(r),c=A.toneMapping,A.toneMapping=ii,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=c,g=!0;let x=r,C=o;for(let D=0;D<v.length;D++){let E=v[D];E.enabled!==!1&&(E.render(A,C,x,T),E.needsSwap!==!1&&(x=C,C=C===o?l:o))}if(S!==A.outputColorSpace||L!==A.toneMapping){S=A.outputColorSpace,L=A.toneMapping,p.defines={},nt.getTransfer(S)===mt&&(p.defines.SRGB_TRANSFER="");let D=pw[L];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(m),A.render(f,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),p.dispose()}}var DL=new Ya,PL=new Fi(1,1),UL=new hu(1),NL=new ru,BL=new Ld,OL=new du,fL=[],dL=[],hL=new Float32Array(16),pL=new Float32Array(9),mL=new Float32Array(4);function Go(t,e,a){let n=t[0];if(n<=0||n>0)return t;let i=e*a,s=fL[i];if(s===void 0&&(s=new Float32Array(i),fL[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=a,t[r].toArray(s,o)}return s}function oa(t,e){if(t.length!==e.length)return!1;for(let a=0,n=t.length;a<n;a++)if(t[a]!==e[a])return!1;return!0}function la(t,e){for(let a=0,n=e.length;a<n;a++)t[a]=e[a]}function Uh(t,e){let a=dL[e];a===void 0&&(a=new Int32Array(e),dL[e]=a);for(let n=0;n!==e;++n)a[n]=t.allocateTextureUnit();return a}function gw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function xw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(oa(a,e))return;t.uniform2fv(this.addr,e),la(a,e)}}function Sw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(oa(a,e))return;t.uniform3fv(this.addr,e),la(a,e)}}function yw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(oa(a,e))return;t.uniform4fv(this.addr,e),la(a,e)}}function vw(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(oa(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),la(a,e)}else{if(oa(a,n))return;mL.set(n),t.uniformMatrix2fv(this.addr,!1,mL),la(a,n)}}function _w(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(oa(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),la(a,e)}else{if(oa(a,n))return;pL.set(n),t.uniformMatrix3fv(this.addr,!1,pL),la(a,n)}}function Mw(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(oa(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),la(a,e)}else{if(oa(a,n))return;hL.set(n),t.uniformMatrix4fv(this.addr,!1,hL),la(a,n)}}function Lw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function Cw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(oa(a,e))return;t.uniform2iv(this.addr,e),la(a,e)}}function bw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(oa(a,e))return;t.uniform3iv(this.addr,e),la(a,e)}}function Aw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(oa(a,e))return;t.uniform4iv(this.addr,e),la(a,e)}}function Tw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function Iw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(oa(a,e))return;t.uniform2uiv(this.addr,e),la(a,e)}}function Ew(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(oa(a,e))return;t.uniform3uiv(this.addr,e),la(a,e)}}function ww(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(oa(a,e))return;t.uniform4uiv(this.addr,e),la(a,e)}}function Nh(t){return t.version===0&&(t.compareFunction=Mx,t.needsUpdate=!0),t}function Rw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?s=Nh(PL):s=DL,a.setTexture2D(e||s,i)}function Dw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture3D(e||BL,i)}function Pw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Nh(UL):s=OL,a.setTextureCube(e||s,i)}function Uw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture2DArray(e||NL,i)}function Nw(t){switch(t){case 5126:return gw;case 35664:return xw;case 35665:return Sw;case 35666:return yw;case 35674:return vw;case 35675:return _w;case 35676:return Mw;case 5124:case 35670:return Lw;case 35667:case 35671:return Cw;case 35668:case 35672:return bw;case 35669:case 35673:return Aw;case 5125:return Tw;case 36294:return Iw;case 36295:return Ew;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Bw(t,e){t.uniform1fv(this.addr,e)}function Ow(t,e){let a=Go(e,this.size,2);t.uniform2fv(this.addr,a)}function Fw(t,e){let a=Go(e,this.size,3);t.uniform3fv(this.addr,a)}function zw(t,e){let a=Go(e,this.size,4);t.uniform4fv(this.addr,a)}function kw(t,e){let a=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function Hw(t,e){let a=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function Gw(t,e){let a=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function Vw(t,e){t.uniform1iv(this.addr,e)}function qw(t,e){t.uniform2iv(this.addr,e)}function Ww(t,e){t.uniform3iv(this.addr,e)}function Xw(t,e){t.uniform4iv(this.addr,e)}function Yw(t,e){t.uniform1uiv(this.addr,e)}function Zw(t,e){t.uniform2uiv(this.addr,e)}function Kw(t,e){t.uniform3uiv(this.addr,e)}function Jw(t,e){t.uniform4uiv(this.addr,e)}function Qw(t,e,a){let n=this.cache,i=e.length,s=Uh(a,i);oa(n,s)||(t.uniform1iv(this.addr,s),la(n,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Nh(PL):r=DL;for(let o=0;o!==i;++o)a.setTexture2D(e[o]||r,s[o])}function jw(t,e,a){let n=this.cache,i=e.length,s=Uh(a,i);oa(n,s)||(t.uniform1iv(this.addr,s),la(n,s));for(let r=0;r!==i;++r)a.setTexture3D(e[r]||BL,s[r])}function $w(t,e,a){let n=this.cache,i=e.length,s=Uh(a,i);oa(n,s)||(t.uniform1iv(this.addr,s),la(n,s));let r;this.type===t.SAMPLER_CUBE_SHADOW?r=Nh(UL):r=OL;for(let o=0;o!==i;++o)a.setTextureCube(e[o]||r,s[o])}function eR(t,e,a){let n=this.cache,i=e.length,s=Uh(a,i);oa(n,s)||(t.uniform1iv(this.addr,s),la(n,s));for(let r=0;r!==i;++r)a.setTexture2DArray(e[r]||NL,s[r])}function tR(t){switch(t){case 5126:return Bw;case 35664:return Ow;case 35665:return Fw;case 35666:return zw;case 35674:return kw;case 35675:return Hw;case 35676:return Gw;case 5124:case 35670:return Vw;case 35667:case 35671:return qw;case 35668:case 35672:return Ww;case 35669:case 35673:return Xw;case 5125:return Yw;case 36294:return Zw;case 36295:return Kw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return eR}}var zx=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.setValue=Nw(a.type)}},kx=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=tR(a.type)}},Hx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,a[o.id],n)}}},Ox=/(\w+)(\])?(\[|\.)?/g;function gL(t,e){t.seq.push(e),t.map[e.id]=e}function aR(t,e,a){let n=t.name,i=n.length;for(Ox.lastIndex=0;;){let s=Ox.exec(n),r=Ox.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){gL(a,u===void 0?new zx(o,t,e):new kx(o,t,e));break}else{let p=a.map[o];p===void 0&&(p=new Hx(o),gL(a,p)),a=p}}}var Ho=class{constructor(e,a){this.seq=[],this.map={};let n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(a,r),l=e.getUniformLocation(a,o.name);aR(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,a,n,i){let s=this.map[a];s!==void 0&&s.setValue(e,n,i)}setOptional(e,a,n){let i=a[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,a,n,i){for(let s=0,r=a.length;s!==r;++s){let o=a[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,a){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in a&&n.push(r)}return n}};function xL(t,e,a){let n=t.createShader(e);return t.shaderSource(n,a),t.compileShader(n),n}var nR=37297,iR=0;function sR(t,e){let a=t.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,a.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${a[r]}`)}return n.join(`
`)}var SL=new ze;function rR(t){nt._getMatrix(SL,nt.workingColorSpace,t);let e=`mat3( ${SL.elements.map(a=>a.toFixed(4))} )`;switch(nt.getTransfer(t)){case iu:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function yL(t,e,a){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return a.toUpperCase()+`

`+s+`

`+sR(t.getShaderSource(e),o)}else return s}function oR(t,e){let a=rR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( ${a[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lR={[rx]:"Linear",[ox]:"Reinhard",[lx]:"Cineon",[Iu]:"ACESFilmic",[cx]:"AgX",[fx]:"Neutral",[ux]:"Custom"};function uR(t,e){let a=lR[e];return a===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Rh=new H;function cR(){nt.getLuminanceCoefficients(Rh);let t=Rh.x.toFixed(4),e=Rh.y.toFixed(4),a=Rh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fu).join(`
`)}function dR(t){let e=[];for(let a in t){let n=t[a];n!==!1&&e.push("#define "+a+" "+n)}return e.join(`
`)}function hR(t,e){let a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),a[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return a}function Fu(t){return t!==""}function vL(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _L(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gx(t){return t.replace(pR,mR)}function mR(t,e){let a=Ke[e];if(a===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Gx(a)}var gR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ML(t){return t.replace(gR,xR)}function xR(t,e,a,n){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function LL(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var SR={[Tu]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function yR(t){return SR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var vR={[Fo]:"ENVMAP_MODE_REFRACTION"};function _R(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":vR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var MR={[sx]:"ENVMAP_BLENDING_MULTIPLY",[zM]:"ENVMAP_BLENDING_MIX",[kM]:"ENVMAP_BLENDING_ADD"};function LR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":MR[t.combine]||"ENVMAP_BLENDING_NONE"}function CR(t,e,a,n){let i=t.getContext(),s=a.defines,r=a.vertexShader,o=a.fragmentShader,l=yR(a),u=a.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=_R(a),p=LR(a),f=fR(a),h=dR(s),S=i.createProgram(),L,g,c=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(L=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(Fu).join(`
`),L.length>0&&(L+=`
`),g=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(Fu).join(`
`),g.length>0&&(g+=`
`)):(L=[LL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+d:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+a.diffuseRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fu).join(`
`),g=[LL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.envMap?"#define "+d:"",a.envMap?"#define "+p:"",a.envMapPMREM?"#define ENVMAP_MAX_LOD "+a.envMapMaxLod+".0":"",a.envMapPMREM?"#define ENVMAP_SIZE "+a.envMapSize+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==ii?"#define TONE_MAPPING":"",a.toneMapping!==ii?Ke.tonemapping_pars_fragment:"",a.toneMapping!==ii?uR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,oR("linearToOutputTexel",a.outputColorSpace),cR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(Fu).join(`
`)),r=Gx(r),r=vL(r,a),r=_L(r,a),o=Gx(o),o=vL(o,a),o=_L(o,a),r=ML(r),o=ML(o),a.isRawShaderMaterial!==!0&&(c=`#version 300 es
`,L=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,g=["#define varying in",a.glslVersion===Lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=c+L+r,v=c+g+o,y=xL(i,i.VERTEX_SHADER,m),A=xL(i,i.FRAGMENT_SHADER,v);i.attachShader(S,y),i.attachShader(S,A),a.index0AttributeName!==void 0?i.bindAttribLocation(S,0,a.index0AttributeName):a.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function T(E){if(t.debug.checkShaderErrors){let U=i.getProgramInfoLog(S)||"",G=i.getShaderInfoLog(y)||"",K=i.getShaderInfoLog(A)||"",R=U.trim(),k=G.trim(),q=K.trim(),z=!0,te=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,S,y,A);else{let W=yL(i,y,"vertex"),$=yL(i,A,"fragment");Fe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+R+`
`+W+`
`+$)}else R!==""?Ue("WebGLProgram: Program Info Log:",R):(k===""||q==="")&&(te=!1);te&&(E.diagnostics={runnable:z,programLog:R,vertexShader:{log:k,prefix:L},fragmentShader:{log:q,prefix:g}})}i.deleteShader(y),i.deleteShader(A),x=new Ho(i,S),C=hR(i,S)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let D=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(S,nR)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=iR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=A,this}var bR=0,Vx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,n){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let n of a)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,n=a.get(e);return n===void 0&&(n=new Set,a.set(e,n)),n}_getShaderStage(e){let a=this.shaderCache,n=a.get(e);return n===void 0&&(n=new qx(e),a.set(e,n)),n}},qx=class{constructor(e){this.id=bR++,this.code=e,this.usedTimes=0}};function AR(t){return t===Rs||t===Uu||t===Nu}function TR(t,e,a,n,i,s){let r=new Eo,o=new Vx,l=new Set,u=[],d=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,C,D,E,U,G){let K=E.fog,R=U.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||k,q),te=f[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Ue("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let $=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ie=$!==void 0?$.length:0,Le=0;R.morphAttributes.position!==void 0&&(Le=1),R.morphAttributes.normal!==void 0&&(Le=2),R.morphAttributes.color!==void 0&&(Le=3);let Ne,Q,ge,Me;if(te){let xe=ri[te];Ne=xe.vertexShader,Q=xe.fragmentShader}else{Ne=x.vertexShader,Q=x.fragmentShader;let xe=o.getVertexShaderStage(x),ct=o.getFragmentShaderStage(x);o.update(x,xe,ct),ge=xe.id,Me=ct.id}let he=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,Et=U.isBatchedMesh===!0,_e=!!x.map,ot=!!x.matcap,pt=!!z,Ve=pt&&z.isPMREMTexture===!0,kt=!!x.aoMap,Ht=!!x.lightMap,ua=!!x.bumpMap&&x.wireframe===!1,bt=!!x.normalMap,Ka=!!x.displacementMap,Jt=!!x.emissiveMap,St=!!x.metalnessMap,Xe=!!x.roughnessMap,Qt=x.anisotropy>0,P=x.clearcoat>0,ia=x.diffuseRoughness>0,yt=x.dispersion>0,vt=x.retroreflectivity>0,se=x.iridescence>0,Vt=x.sheen>0,De=x.transmission>0,Te=Qt&&!!x.anisotropyMap,b=P&&!!x.clearcoatMap,_=P&&!!x.clearcoatNormalMap,N=P&&!!x.clearcoatRoughnessMap,ne=ia&&!!x.diffuseRoughnessMap,ee=se&&!!x.iridescenceMap,le=se&&!!x.iridescenceThicknessMap,de=Vt&&!!x.sheenColorMap,Y=Vt&&!!x.sheenRoughnessMap,Z=!!x.specularMap,fe=!!x.specularColorMap,I=!!x.specularIntensityMap,j=De&&!!x.transmissionMap,X=De&&!!x.thicknessMap,oe=!!x.gradientMap,ue=!!x.alphaMap,ce=x.alphaTest>0,Ee=!!x.alphaHash,qe=!!x.extensions,re=ii;x.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(re=t.toneMapping);let we=Ve?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,ke={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:Q,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:Me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:Et,batchingColor:Et&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:_e,matcap:ot,envMap:pt,envMapMode:pt&&z.mapping,envMapPMREM:Ve,envMapMaxLod:Ve?we.length-1:null,envMapSize:Ve?we[0].width:null,aoMap:kt,lightMap:Ht,bumpMap:ua,normalMap:bt,displacementMap:Ka,emissiveMap:Jt,normalMapObjectSpace:bt&&x.normalMapType===VM,normalMapTangentSpace:bt&&x.normalMapType===Eh,packedNormalMap:bt&&x.normalMapType===Eh&&AR(x.normalMap.format),metalnessMap:St,roughnessMap:Xe,anisotropy:Qt,anisotropyMap:Te,clearcoat:P,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:N,diffuseRoughness:ia,diffuseRoughnessMap:ne,dispersion:yt,retroreflection:vt,iridescence:se,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:Vt,sheenColorMap:de,sheenRoughnessMap:Y,specularMap:Z,specularColorMap:fe,specularIntensityMap:I,transmission:De,transmissionMap:j,thicknessMap:X,gradientMap:oe,opaque:x.transparent===!1&&x.blending===Oo&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:ce,alphaHash:Ee,combine:x.combine,mapUv:_e&&h(x.map.channel),aoMapUv:kt&&h(x.aoMap.channel),lightMapUv:Ht&&h(x.lightMap.channel),bumpMapUv:ua&&h(x.bumpMap.channel),normalMapUv:bt&&h(x.normalMap.channel),displacementMapUv:Ka&&h(x.displacementMap.channel),emissiveMapUv:Jt&&h(x.emissiveMap.channel),metalnessMapUv:St&&h(x.metalnessMap.channel),roughnessMapUv:Xe&&h(x.roughnessMap.channel),anisotropyMapUv:Te&&h(x.anisotropyMap.channel),clearcoatMapUv:b&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:_&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:de&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&h(x.sheenRoughnessMap.channel),specularMapUv:Z&&h(x.specularMap.channel),specularColorMapUv:fe&&h(x.specularColorMap.channel),specularIntensityMapUv:I&&h(x.specularIntensityMap.channel),transmissionMapUv:j&&h(x.transmissionMap.channel),thicknessMapUv:X&&h(x.thicknessMap.channel),alphaMapUv:ue&&h(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(bt||Qt),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!R.attributes.uv&&(_e||ue),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Le,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:G.filter(xe=>xe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:re,decodeVideoTexture:_e&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Jt&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===za,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:qe&&x.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&x.extensions.multiDraw===!0||Et)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function L(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)C.push(D),C.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(C,x),c(C,x),C.push(t.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function g(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapPMREM),x.push(C.envMapMaxLod),x.push(C.envMapSize),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.diffuseRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.numLightProbeGrids),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function c(x,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.retroreflection&&r.enable(24),C.diffuseRoughness&&r.enable(25),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function m(x){let C=f[x.type],D;if(C){let E=ri[C];D=iL.clone(E.uniforms)}else D=x.uniforms;return D}function v(x,C){let D=d.get(C);return D!==void 0?++D.usedTimes:(D=new CR(t,C,x,i),u.push(D),d.set(C,D)),D}function y(x){if(--x.usedTimes===0){let C=u.indexOf(x);u[C]=u[u.length-1],u.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:L,getUniforms:m,acquireProgram:v,releaseProgram:y,releaseShaderCache:A,programs:u,dispose:T}}function IR(){let t=new WeakMap;function e(r){return t.has(r)}function a(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:a,remove:n,update:i,dispose:s}}function ER(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function CL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bL(){let t=[],e=0,a=[],n=[],i=[];function s(){e=0,a.length=0,n.length=0,i.length=0}function r(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,S,L,g,c){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:S,materialVariant:r(f),groupOrder:L,renderOrder:f.renderOrder,z:g,group:c},t[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=S,m.materialVariant=r(f),m.groupOrder=L,m.renderOrder=f.renderOrder,m.z=g,m.group=c),e++,m}function l(f,h,S,L,g,c,m){m.reversedDepth===!0&&(g=-g);let v=o(f,h,S,L,g,c);S.transmission>0?n.push(v):S.transparent===!0?i.push(v):a.push(v)}function u(f,h,S,L,g,c){let m=o(f,h,S,L,g,c);S.transmission>0?n.unshift(m):S.transparent===!0?i.unshift(m):a.unshift(m)}function d(f,h){a.length>1&&a.sort(f||ER),n.length>1&&n.sort(h||CL),i.length>1&&i.sort(h||CL)}function p(){for(let f=e,h=t.length;f<h;f++){let S=t[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:a,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:d}}function wR(){let t=new WeakMap;function e(n,i){let s=t.get(n),r;return s===void 0?(r=new bL,t.set(n,[r])):i>=s.length?(r=new bL,s.push(r)):r=s[i],r}function a(){t=new WeakMap}return{get:e,dispose:a}}function RR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new H,color:new Ye};break;case"SpotLight":a={position:new H,direction:new H,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new H,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":a={direction:new H,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":a={color:new Ye,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=a,a}}}function DR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var PR=0;function UR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NR(t){let e=new RR,a=DR(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);let i=new H,s=new It,r=new It;function o(u){let d=0,p=0,f=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let h=0,S=0,L=0,g=0,c=0,m=0,v=0,y=0,A=0,T=0,x=0,C=0,D=0,E=0;u.sort(UR);for(let G=0,K=u.length;G<K;G++){let R=u[G],k=R.color,q=R.intensity,z=R.distance,te=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Rs?te=R.shadow.map.texture:te=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=k.r*q,p+=k.g*q,f+=k.b*q;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],q);E++}else if(R.isSunLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,ie=a.get(R);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[S]=ie,n.sunShadowMap[S]=te;let Le=$.getViewportCount();for(let Ne=0;Ne<Le;Ne++)n.sunShadowMatrix[L+Ne]=$.getMatrix(Ne),n.sunShadowCascade[L+Ne]=$._cascadeData[Ne];L+=Le,S++}n.sun[h]=W,h++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,ie=a.get(R);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=te,n.directionalShadowMatrix[g]=R.shadow.matrix,A++}n.directional[g]=W,g++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(k).multiplyScalar(q),W.distance=z,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[m]=W;let $=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,$.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[m]=$.matrix,R.castShadow){let ie=a.get(R);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,n.spotShadow[m]=ie,n.spotShadowMap[m]=te,x++}m++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(k).multiplyScalar(q),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=W,v++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){let $=R.shadow,ie=a.get(R);ie.shadowIntensity=$.intensity,ie.shadowBias=$.bias,ie.shadowNormalBias=$.normalBias,ie.shadowRadius=$.radius,ie.shadowMapSize=$.mapSize,ie.shadowCameraNear=$.camera.near,ie.shadowCameraFar=$.camera.far,n.pointShadow[c]=ie,n.pointShadowMap[c]=te,n.pointShadowMatrix[c]=R.shadow.matrix,T++}n.point[c]=W,c++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(q),W.groundColor.copy(R.groundColor).multiplyScalar(q),n.hemi[y]=W,y++}}v>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;let U=n.hash;(U.sunLength!==h||U.directionalLength!==g||U.pointLength!==c||U.spotLength!==m||U.rectAreaLength!==v||U.hemiLength!==y||U.numSunShadows!==S||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==x||U.numSpotMaps!==C||U.numLightProbes!==E)&&(n.sun.length=h,n.directional.length=g,n.spot.length=m,n.rectArea.length=v,n.point.length=c,n.hemi.length=y,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=L,n.sunShadowCascade.length=L,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+C-D,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=E,U.sunLength=h,U.directionalLength=g,U.pointLength=c,U.spotLength=m,U.rectAreaLength=v,U.hemiLength=y,U.numSunShadows=S,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=x,U.numSpotMaps=C,U.numLightProbes=E,n.version=PR++)}function l(u,d){let p=0,f=0,h=0,S=0,L=0,g=0,c=d.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){let y=u[m];if(y.isSunLight){let A=n.sun[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(c),p++}else if(y.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(c),f++}else if(y.isSpotLight){let A=n.spot[S];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),A.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(c),S++}else if(y.isRectAreaLight){let A=n.rectArea[L];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),r.identity(),s.copy(y.matrixWorld),s.premultiply(c),r.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(r),A.halfHeight.applyMatrix4(r),L++}else if(y.isPointLight){let A=n.point[h];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(c),h++}else if(y.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(c),g++}}}return{setup:o,setupView:l,state:n}}function AL(t){let e=new NR(t),a=[],n=[],i=[];function s(p){d.camera=p,a.length=0,n.length=0,i.length=0}function r(p){p.isLightProbeGrid?i.push(p):a.push(p)}function o(p){n.push(p)}function l(){e.setup(a),i.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function u(p){e.setupView(a,p)}let d={lightsArray:a,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o}}function BR(t){let e=new WeakMap;function a(i,s=0){let r=e.get(i),o;return r===void 0?(o=new AL(t),e.set(i,[o])):s>=r.length?(o=new AL(t),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:a,dispose:n}}var OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FR=`uniform sampler2D shadow_pass;
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
}`,zR=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],kR=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],TL=new It,Ou=new H,Fx=new H;function HR(t,e,a){let n=new bs,i=new Je,s=new Je,r=new zt,o=new Ed,l=new wd,u={},d=a.maxTextureSize,p={[ws]:za,[za]:ws,[In]:In},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:OR,fragmentShader:FR}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let S=new Tn;S.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let L=new Ca(S,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let c=this.type;this.render=function(T,x,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Vd&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tu);let D=t.getRenderTarget(),E=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),G=t.state;G.setBlending(rr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let K=c!==this.type;K&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(k=>k.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,k=T.length;R<k;R++){let q=T[R],z=q.shadow;if(z===void 0){Ue("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let te=z.getFrameExtents();i.multiply(te),s.copy(z.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/te.x),i.x=s.x*te.x,z.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/te.y),i.y=s.y*te.y,z.mapSize.y=s.y));let W=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Bo){if(q.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new cn(i.x,i.y,{format:Rs,type:Hn,minFilter:Fa,magFilter:Fa,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Fi(i.x,i.y,kn),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Ni,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ma,z.map.depthTexture.magFilter=ma}else q.isPointLight?(z.map=new zu(i.x),z.map.depthTexture=new hu(i.x,zn)):(z.map=new cn(i.x,i.y),z.map.depthTexture=new Fi(i.x,i.y,zn)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Ni,this.type===Tu?(z.map.depthTexture.compareFunction=W?_x:vx,z.map.depthTexture.minFilter=Fa,z.map.depthTexture.magFilter=Fa):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ma,z.map.depthTexture.magFilter=ma);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let $=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,C);let ie=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:C.layers;for(let Le=0;Le<$;Le++){let Ne=z.getCamera(Le);if(q.isPointLight){let Q=z.camera,ge=z.matrix,Me=q.distance||Q.far;Me!==Q.far&&(Q.far=Me,Q.updateProjectionMatrix()),Ou.setFromMatrixPosition(q.matrixWorld),Q.position.copy(Ou),Fx.copy(Q.position),Fx.add(zR[Le]),Q.up.copy(kR[Le]),Q.lookAt(Fx),Q.updateMatrixWorld(),ge.makeTranslation(-Ou.x,-Ou.y,-Ou.z),TL.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(TL,Q.coordinateSystem,Q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,Le),t.clear();else{Le===0&&(t.setRenderTarget(z.map),t.clear());let Q=z.getViewport(Le);r.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),G.viewport(r)}n=z.getFrustum(Le),y(x,C,Ne,q,ie,this.type)}z.isPointLightShadow!==!0&&this.type===Bo&&m(z,C),z.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(D,E,U)};function m(T,x){let C=e.update(L);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new cn(i.x,i.y,{format:Rs,type:Hn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(x,null,C,f,L,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(x,null,C,h,L,null)}function v(T,x,C,D){let E=null,U=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)E=U;else if(E=C.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let G=E.uuid,K=x.uuid,R=u[G];R===void 0&&(R={},u[G]=R);let k=R[K];k===void 0&&(k=E.clone(),R[K]=k,x.addEventListener("dispose",A)),E=k}if(E.visible=x.visible,E.wireframe=x.wireframe,D===Bo?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:p[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=t.properties.get(E);G.light=C}return E}function y(T,x,C,D,E,U){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===Bo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let R=e.update(T),k=T.material;if(Array.isArray(k)){let q=R.groups;for(let z=0,te=q.length;z<te;z++){let W=q[z],$=k[W.materialIndex];if($&&$.visible){let ie=v(T,$,D,U);T.onBeforeShadow(t,T,x,C,R,ie,W),t.renderBufferDirect(C,null,R,ie,T,W),T.onAfterShadow(t,T,x,C,R,ie,W)}}}else if(k.visible){let q=v(T,k,D,U);T.onBeforeShadow(t,T,x,C,R,q,null),t.renderBufferDirect(C,null,R,q,T,null),T.onAfterShadow(t,T,x,C,R,q,null)}}let K=T.children;for(let R=0,k=K.length;R<k;R++)y(K[R],x,C,D,E,U)}function A(T){T.target.removeEventListener("dispose",A);for(let C in u){let D=u[C],E=T.target.uuid;E in D&&(D[E].dispose(),delete D[E])}}}function GR(t,e){function a(){let I=!1,j=new zt,X=null,oe=new zt(0,0,0,0);return{setMask:function(ue){X!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){I=ue},setClear:function(ue,ce,Ee,qe,re){re===!0&&(ue*=qe,ce*=qe,Ee*=qe),j.set(ue,ce,Ee,qe),oe.equals(j)===!1&&(t.clearColor(ue,ce,Ee,qe),oe.copy(j))},reset:function(){I=!1,X=null,oe.set(-1,0,0,0)}}}function n(){let I=!1,j=!1,X=null,oe=null,ue=null;return{setReversed:function(ce){if(j!==ce){let Ee=e.get("EXT_clip_control");ce?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),j=ce;let qe=ue;ue=null,this.setClear(qe)}},getReversed:function(){return j},setTest:function(ce){ce?Se(t.DEPTH_TEST):Be(t.DEPTH_TEST)},setMask:function(ce){X!==ce&&!I&&(t.depthMask(ce),X=ce)},setFunc:function(ce){if(j&&(ce=eL[ce]),oe!==ce){switch(ce){case fd:t.depthFunc(t.NEVER);break;case dd:t.depthFunc(t.ALWAYS);break;case hd:t.depthFunc(t.LESS);break;case Co:t.depthFunc(t.LEQUAL);break;case pd:t.depthFunc(t.EQUAL);break;case md:t.depthFunc(t.GEQUAL);break;case gd:t.depthFunc(t.GREATER);break;case xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=ce}},setLocked:function(ce){I=ce},setClear:function(ce){ue!==ce&&(ue=ce,j&&(ce=1-ce),t.clearDepth(ce))},reset:function(){I=!1,X=null,oe=null,ue=null,j=!1}}}function i(){let I=!1,j=null,X=null,oe=null,ue=null,ce=null,Ee=null,qe=null,re=null;return{setTest:function(we){I||(we?Se(t.STENCIL_TEST):Be(t.STENCIL_TEST))},setMask:function(we){j!==we&&!I&&(t.stencilMask(we),j=we)},setFunc:function(we,ke,xe){(X!==we||oe!==ke||ue!==xe)&&(t.stencilFunc(we,ke,xe),X=we,oe=ke,ue=xe)},setOp:function(we,ke,xe){(ce!==we||Ee!==ke||qe!==xe)&&(t.stencilOp(we,ke,xe),ce=we,Ee=ke,qe=xe)},setLocked:function(we){I=we},setClear:function(we){re!==we&&(t.clearStencil(we),re=we)},reset:function(){I=!1,j=null,X=null,oe=null,ue=null,ce=null,Ee=null,qe=null,re=null}}}let s=new a,r=new n,o=new i,l={},u=new WeakMap,d={},p={},f={},h=new WeakMap,S=[],L=null,g=!1,c=null,m=null,v=null,y=null,A=null,T=null,x=null,C=new Ye(0,0,0),D=0,E=!1,U=null,G=null,K=null,R=null,k=null,q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,te=0,W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=te>=2);let $=null,ie={},Le=t.getParameter(t.SCISSOR_BOX),Ne=t.getParameter(t.VIEWPORT),Q=new zt().fromArray(Le),ge=new zt().fromArray(Ne);function Me(I,j,X,oe){let ue=new Uint8Array(4),ce=t.createTexture();t.bindTexture(I,ce),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<X;Ee++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(j,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(j+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return ce}let he={};he[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(t.DEPTH_TEST),r.setFunc(Co),ua(!1),bt($g),Se(t.CULL_FACE),kt(rr);function Se(I){d[I]!==!0&&(t.enable(I),d[I]=!0)}function Be(I){d[I]!==!1&&(t.disable(I),d[I]=!1)}function Et(I,j){return f[I]!==j?(t.bindFramebuffer(I,j),f[I]=j,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=j),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=j),!0):!1}function _e(I,j){let X=S,oe=!1;if(I){X=h.get(j),X===void 0&&(X=[],h.set(j,X));let ue=I.textures;if(X.length!==ue.length||X[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ee=ue.length;ce<Ee;ce++)X[ce]=t.COLOR_ATTACHMENT0+ce;X.length=ue.length,oe=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,oe=!0);oe&&t.drawBuffers(X)}function ot(I){return L!==I?(t.useProgram(I),L=I,!0):!1}let pt={[or]:t.FUNC_ADD,[MM]:t.FUNC_SUBTRACT,[LM]:t.FUNC_REVERSE_SUBTRACT};pt[CM]=t.MIN,pt[bM]=t.MAX;let Ve={[AM]:t.ZERO,[TM]:t.ONE,[IM]:t.SRC_COLOR,[nx]:t.SRC_ALPHA,[UM]:t.SRC_ALPHA_SATURATE,[DM]:t.DST_COLOR,[wM]:t.DST_ALPHA,[EM]:t.ONE_MINUS_SRC_COLOR,[ix]:t.ONE_MINUS_SRC_ALPHA,[PM]:t.ONE_MINUS_DST_COLOR,[RM]:t.ONE_MINUS_DST_ALPHA,[NM]:t.CONSTANT_COLOR,[BM]:t.ONE_MINUS_CONSTANT_COLOR,[OM]:t.CONSTANT_ALPHA,[FM]:t.ONE_MINUS_CONSTANT_ALPHA};function kt(I,j,X,oe,ue,ce,Ee,qe,re,we){if(I===rr){g===!0&&(Be(t.BLEND),g=!1);return}if(g===!1&&(Se(t.BLEND),g=!0),I!==_M){if(I!==c||we!==E){if((m!==or||A!==or)&&(t.blendEquation(t.FUNC_ADD),m=or,A=or),we)switch(I){case Oo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ex:t.blendFunc(t.ONE,t.ONE);break;case tx:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ax:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Fe("WebGLState: Invalid blending: ",I);break}else switch(I){case Oo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ex:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case tx:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ax:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",I);break}v=null,y=null,T=null,x=null,C.set(0,0,0),D=0,c=I,E=we}return}ue=ue||j,ce=ce||X,Ee=Ee||oe,(j!==m||ue!==A)&&(t.blendEquationSeparate(pt[j],pt[ue]),m=j,A=ue),(X!==v||oe!==y||ce!==T||Ee!==x)&&(t.blendFuncSeparate(Ve[X],Ve[oe],Ve[ce],Ve[Ee]),v=X,y=oe,T=ce,x=Ee),(qe.equals(C)===!1||re!==D)&&(t.blendColor(qe.r,qe.g,qe.b,re),C.copy(qe),D=re),c=I,E=!1}function Ht(I,j){I.side===In?Be(t.CULL_FACE):Se(t.CULL_FACE);let X=I.side===za;j&&(X=!X),ua(X),I.blending===Oo&&I.transparent===!1?kt(rr):kt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);let oe=I.stencilWrite;o.setTest(oe),oe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):Be(t.SAMPLE_ALPHA_TO_COVERAGE)}function ua(I){U!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),U=I)}function bt(I){I!==yM?(Se(t.CULL_FACE),I!==G&&(I===$g?t.cullFace(t.BACK):I===vM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Be(t.CULL_FACE),G=I}function Ka(I){I!==K&&(z&&t.lineWidth(I),K=I)}function Jt(I,j,X){I?(Se(t.POLYGON_OFFSET_FILL),(R!==j||k!==X)&&(R=j,k=X,r.getReversed()&&(j=-j,X=-X),t.polygonOffset(j,X))):Be(t.POLYGON_OFFSET_FILL)}function St(I){I?Se(t.SCISSOR_TEST):Be(t.SCISSOR_TEST)}function Xe(I){I===void 0&&(I=t.TEXTURE0+q-1),$!==I&&(t.activeTexture(I),$=I)}function Qt(I,j,X){X===void 0&&($===null?X=t.TEXTURE0+q-1:X=$);let oe=ie[X];oe===void 0&&(oe={type:void 0,texture:void 0},ie[X]=oe),(oe.type!==I||oe.texture!==j)&&($!==X&&(t.activeTexture(X),$=X),t.bindTexture(I,j||he[I]),oe.type=I,oe.texture=j)}function P(){let I=ie[$];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ia(){try{t.compressedTexImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function yt(){try{t.compressedTexImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function vt(){try{t.texSubImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function se(){try{t.texSubImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function Vt(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function Te(){try{t.texStorage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function b(){try{t.texStorage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function _(){try{t.texImage2D(...arguments)}catch(I){Fe("WebGLState:",I)}}function N(){try{t.texImage3D(...arguments)}catch(I){Fe("WebGLState:",I)}}function ne(I){return p[I]!==void 0?p[I]:t.getParameter(I)}function ee(I,j){p[I]!==j&&(t.pixelStorei(I,j),p[I]=j)}function le(I){Q.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function de(I){ge.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function Y(I,j){let X=u.get(j);X===void 0&&(X=new WeakMap,u.set(j,X));let oe=X.get(I);oe===void 0&&(oe=t.getUniformBlockIndex(j,I.name),t.uniformBlockBinding(j,oe,oe),X.set(I,oe))}function Z(I,j,X){let ue=u.get(j).get(I);l[ue]!==X&&(t.bindBufferBase(t.UNIFORM_BUFFER,ue,X),l[ue]=X)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},$=null,ie={},f={},l={},h=new WeakMap,S=[],L=null,g=!1,c=null,m=null,v=null,y=null,A=null,T=null,x=null,C=new Ye(0,0,0),D=0,E=!1,U=null,G=null,K=null,R=null,k=null,Q.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Se,disable:Be,bindFramebuffer:Et,drawBuffers:_e,useProgram:ot,setBlending:kt,setMaterial:Ht,setFlipSided:ua,setCullFace:bt,setLineWidth:Ka,setPolygonOffset:Jt,setScissorTest:St,activeTexture:Xe,bindTexture:Qt,unbindTexture:P,compressedTexImage2D:ia,compressedTexImage3D:yt,texImage2D:_,texImage3D:N,pixelStorei:ee,getParameter:ne,updateUBOMapping:Y,uniformBlockBinding:Z,texStorage2D:Te,texStorage3D:b,texSubImage2D:vt,texSubImage3D:se,compressedTexSubImage2D:Vt,compressedTexSubImage3D:De,scissor:le,viewport:de,reset:fe}}function VR(t,e,a,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,d=new WeakMap,p=new Set,f,h=new WeakMap,S=new Set,L=new FinalizationRegistry(b=>S.delete(b)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function c(b,_){return g?new OffscreenCanvas(b,_):su("canvas")}function m(b,_,N){let ne=1,ee=Te(b);if((ee.width>N||ee.height>N)&&(ne=N/Math.max(ee.width,ee.height)),ne<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let le=Math.floor(ne*ee.width),de=Math.floor(ne*ee.height);f===void 0&&(f=c(le,de));let Y=_?c(le,de):f;return Y.width=le,Y.height=de,Y.getContext("2d").drawImage(b,0,0,le,de),Ue("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+le+"x"+de+")."),Y}else return"data"in b&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function v(b){return b.generateMipmaps}function y(b){t.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(b,_,N,ne,ee,le=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de;ne&&(de=e.get("EXT_texture_norm16"),de||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===t.RED&&(N===t.FLOAT&&(Y=t.R32F),N===t.HALF_FLOAT&&(Y=t.R16F),N===t.UNSIGNED_BYTE&&(Y=t.R8),N===t.UNSIGNED_SHORT&&de&&(Y=de.R16_EXT),N===t.SHORT&&de&&(Y=de.R16_SNORM_EXT)),_===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.R8UI),N===t.UNSIGNED_SHORT&&(Y=t.R16UI),N===t.UNSIGNED_INT&&(Y=t.R32UI),N===t.BYTE&&(Y=t.R8I),N===t.SHORT&&(Y=t.R16I),N===t.INT&&(Y=t.R32I)),_===t.RG&&(N===t.FLOAT&&(Y=t.RG32F),N===t.HALF_FLOAT&&(Y=t.RG16F),N===t.UNSIGNED_BYTE&&(Y=t.RG8),N===t.UNSIGNED_SHORT&&de&&(Y=de.RG16_EXT),N===t.SHORT&&de&&(Y=de.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RG8UI),N===t.UNSIGNED_SHORT&&(Y=t.RG16UI),N===t.UNSIGNED_INT&&(Y=t.RG32UI),N===t.BYTE&&(Y=t.RG8I),N===t.SHORT&&(Y=t.RG16I),N===t.INT&&(Y=t.RG32I)),_===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),N===t.UNSIGNED_INT&&(Y=t.RGB32UI),N===t.BYTE&&(Y=t.RGB8I),N===t.SHORT&&(Y=t.RGB16I),N===t.INT&&(Y=t.RGB32I)),_===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),N===t.UNSIGNED_INT&&(Y=t.RGBA32UI),N===t.BYTE&&(Y=t.RGBA8I),N===t.SHORT&&(Y=t.RGBA16I),N===t.INT&&(Y=t.RGBA32I)),_===t.RGB&&(N===t.UNSIGNED_SHORT&&de&&(Y=de.RGB16_EXT),N===t.SHORT&&de&&(Y=de.RGB16_SNORM_EXT),N===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),_===t.RGBA){let Z=le?iu:nt.getTransfer(ee);N===t.FLOAT&&(Y=t.RGBA32F),N===t.HALF_FLOAT&&(Y=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Y=Z===mt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT&&de&&(Y=de.RGBA16_EXT),N===t.SHORT&&de&&(Y=de.RGBA16_SNORM_EXT),N===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(b,_){let N;return b?_===null||_===zn||_===ur?N=t.DEPTH24_STENCIL8:_===kn?N=t.DEPTH32F_STENCIL8:_===zo&&(N=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===ur?N=t.DEPTH_COMPONENT24:_===kn?N=t.DEPTH_COMPONENT32F:_===zo&&(N=t.DEPTH_COMPONENT16),N}function C(b,_){return v(b)===!0||b.isFramebufferTexture&&b.minFilter!==ma&&b.minFilter!==Fa?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function D(b){let _=new WeakRef(b);n.get(b).__ref=_,S.add(_),L.register(b,_,_)}function E(b){let _=n.get(b).__ref;_!==void 0&&(S.delete(_),L.unregister(_))}function U(b){K(b.target)}function G(b){R(b.target)}function K(b){b.removeEventListener("dispose",U),E(b),q(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&p.delete(b)}function R(b){b.removeEventListener("dispose",G),E(b),te(b)}function k(){for(let b of S){let _=b.deref();_!==void 0&&(_.isRenderTarget===!0?R(_):K(_))}S.clear(),p.clear()}function q(b){let _=n.get(b);if(_.__webglInit===void 0)return;let N=b.source,ne=h.get(N);if(ne){let ee=ne[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(b),Object.keys(ne).length===0&&h.delete(N)}n.remove(b)}function z(b){let _=n.get(b);t.deleteTexture(_.__webglTexture);let N=b.source,ne=h.get(N);delete ne[_.__cacheKey],r.memory.textures--}function te(b){let _=n.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();let N=b.depthTexture;if(N&&N.renderTarget===b&&K(N),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let le=0;le<_.__webglFramebuffer[ee].length;le++)t.deleteFramebuffer(_.__webglFramebuffer[ee][le]);else t.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)t.deleteFramebuffer(_.__webglFramebuffer[ee]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ne=b.textures;for(let ee=0,le=ne.length;ee<le;ee++){let de=n.get(ne[ee]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),r.memory.textures--),n.remove(ne[ee])}n.remove(b)}let W=0;function $(){W=0}function ie(){return W}function Le(b){W=b}function Ne(){let b=W;return b>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,b}function Q(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function ge(b,_){let N=n.get(b);if(b.isVideoTexture&&Vt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let ne=b.image;if(ne===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(N,b,_);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+_)}function Me(b,_){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){Ht(N,b,_);return}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+_)}function he(b,_){let N=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){Ht(N,b,_);return}a.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+_)}function Se(b,_){let N=n.get(b);if(b.version>0&&N.__version!==b.version){ua(N,b,_);return}a.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+_)}let Be={[Sd]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},Et={[ma]:t.NEAREST,[HM]:t.NEAREST_MIPMAP_NEAREST,[Eu]:t.NEAREST_MIPMAP_LINEAR,[Fa]:t.LINEAR,[Xd]:t.LINEAR_MIPMAP_NEAREST,[zi]:t.LINEAR_MIPMAP_LINEAR},_e={[WM]:t.NEVER,[Mx]:t.ALWAYS,[XM]:t.LESS,[vx]:t.LEQUAL,[YM]:t.EQUAL,[_x]:t.GEQUAL,[ZM]:t.GREATER,[KM]:t.NOTEQUAL};function ot(b,_){if(_.type===kn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Fa||_.magFilter===Xd||_.magFilter===Eu||_.magFilter===zi||_.minFilter===Fa||_.minFilter===Xd||_.minFilter===Eu||_.minFilter===zi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Be[_.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Be[_.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Be[_.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Et[_.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,_e[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ma||_.minFilter!==Eu&&_.minFilter!==zi||_.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function pt(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",U),D(_));let ne=_.source,ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));let le=Q(_);if(le!==b.__cacheKey){ee[le]===void 0&&(ee[le]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,N=!0),ee[le].usedTimes++;let de=ee[b.__cacheKey];de!==void 0&&(ee[b.__cacheKey].usedTimes--,de.usedTimes===0&&z(_)),b.__cacheKey=le,b.__webglTexture=ee[le].texture}return N}function Ve(b,_,N){return Math.floor(Math.floor(b/N)/_)}function kt(b,_,N,ne){let le=b.updateRanges;if(le.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,N,ne,_.data);else{le.sort((I,j)=>I.start-j.start);let de=0;for(let I=1;I<le.length;I++){let j=le[de],X=le[I],oe=j.start+j.count,ue=Ve(X.start,_.width,4),ce=Ve(j.start,_.width,4);X.start<=oe+1&&ue===ce&&Ve(X.start+X.count-1,_.width,4)===ue?j.count=Math.max(j.count,X.start+X.count-j.start):(++de,le[de]=X)}le.length=de+1;let Y=a.getParameter(t.UNPACK_ROW_LENGTH),Z=a.getParameter(t.UNPACK_SKIP_PIXELS),fe=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let I=0,j=le.length;I<j;I++){let X=le[I],oe=Math.floor(X.start/4),ue=Math.ceil(X.count/4),ce=oe%_.width,Ee=Math.floor(oe/_.width),qe=ue,re=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,ce),a.pixelStorei(t.UNPACK_SKIP_ROWS,Ee),a.texSubImage2D(t.TEXTURE_2D,0,ce,Ee,qe,re,N,ne,_.data)}b.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,Y),a.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),a.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Ht(b,_,N){let ne=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=t.TEXTURE_3D);let ee=pt(b,_),le=_.source;a.bindTexture(ne,b.__webglTexture,t.TEXTURE0+N);let de=n.get(le);if(le.version!==de.__version||ee===!0){if(a.activeTexture(t.TEXTURE0+N),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let re=nt.getPrimaries(nt.workingColorSpace),we=_.colorSpace===Hi?null:nt.getPrimaries(_.colorSpace),ke=_.colorSpace===Hi||re===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let Z=m(_.image,!1,i.maxTextureSize);Z=De(_,Z);let fe=s.convert(_.format,_.colorSpace),I=s.convert(_.type),j=T(_.internalFormat,fe,I,_.normalized,_.colorSpace,_.isVideoTexture);ot(ne,_);let X,oe=_.mipmaps,ue=_.isVideoTexture!==!0,ce=de.__version===void 0||ee===!0,Ee=le.dataReady,qe=C(_,Z);if(_.isDepthTexture)j=x(_.format===ki,_.type),ce&&(ue?a.texStorage2D(t.TEXTURE_2D,1,j,Z.width,Z.height):a.texImage2D(t.TEXTURE_2D,0,j,Z.width,Z.height,0,fe,I,null));else if(_.isDataTexture)if(oe.length>0){ue&&ce&&a.texStorage2D(t.TEXTURE_2D,qe,j,oe[0].width,oe[0].height);for(let re=0,we=oe.length;re<we;re++)X=oe[re],ue?Ee&&a.texSubImage2D(t.TEXTURE_2D,re,0,0,X.width,X.height,fe,I,X.data):a.texImage2D(t.TEXTURE_2D,re,j,X.width,X.height,0,fe,I,X.data);_.generateMipmaps=!1}else ue?(ce&&a.texStorage2D(t.TEXTURE_2D,qe,j,Z.width,Z.height),Ee&&kt(_,Z,fe,I)):a.texImage2D(t.TEXTURE_2D,0,j,Z.width,Z.height,0,fe,I,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ue&&ce&&a.texStorage3D(t.TEXTURE_2D_ARRAY,qe,j,oe[0].width,oe[0].height,Z.depth);for(let re=0,we=oe.length;re<we;re++)if(X=oe[re],_.format!==Gn)if(fe!==null)if(ue){if(Ee)if(_.layerUpdates.size>0){let ke=Rx(X.width,X.height,_.format,_.type);for(let xe of _.layerUpdates){let ct=X.data.subarray(xe*ke/X.data.BYTES_PER_ELEMENT,(xe+1)*ke/X.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,xe,X.width,X.height,1,fe,ct)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,Z.depth,fe,X.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,j,X.width,X.height,Z.depth,0,X.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?Ee&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,Z.depth,fe,I,X.data):a.texImage3D(t.TEXTURE_2D_ARRAY,re,j,X.width,X.height,Z.depth,0,fe,I,X.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ue&&ce&&a.texStorage2D(t.TEXTURE_2D,qe,j,oe[0].width,oe[0].height);for(let re=0,we=oe.length;re<we;re++)X=oe[re],_.format!==Gn?fe!==null?ue?Ee&&a.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,X.width,X.height,fe,X.data):a.compressedTexImage2D(t.TEXTURE_2D,re,j,X.width,X.height,0,X.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?Ee&&a.texSubImage2D(t.TEXTURE_2D,re,0,0,X.width,X.height,fe,I,X.data):a.texImage2D(t.TEXTURE_2D,re,j,X.width,X.height,0,fe,I,X.data)}else if(_.isDataArrayTexture)if(ue){if(ce&&a.texStorage3D(t.TEXTURE_2D_ARRAY,qe,j,Z.width,Z.height,Z.depth),Ee)if(_.layerUpdates.size>0){let re=Rx(Z.width,Z.height,_.format,_.type);for(let we of _.layerUpdates){let ke=Z.data.subarray(we*re/Z.data.BYTES_PER_ELEMENT,(we+1)*re/Z.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,we,Z.width,Z.height,1,fe,I,ke)}_.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,fe,I,Z.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,j,Z.width,Z.height,Z.depth,0,fe,I,Z.data);else if(_.isData3DTexture)ue?(ce&&a.texStorage3D(t.TEXTURE_3D,qe,j,Z.width,Z.height,Z.depth),Ee&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,fe,I,Z.data)):a.texImage3D(t.TEXTURE_3D,0,j,Z.width,Z.height,Z.depth,0,fe,I,Z.data);else if(_.isFramebufferTexture){if(ce)if(ue)a.texStorage2D(t.TEXTURE_2D,qe,j,Z.width,Z.height);else{let re=Z.width,we=Z.height;for(let ke=0;ke<qe;ke++)a.texImage2D(t.TEXTURE_2D,ke,j,re,we,0,fe,I,null),re>>=1,we>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let re=t.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Z.parentNode!==re){re.appendChild(Z),p.add(_),re.onpaint=we=>{let ke=we.changedElements;for(let xe of p)ke.includes(xe.image)&&(xe.needsUpdate=!0)},re.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Z);else{let ke=t.RGBA,xe=t.RGBA,ct=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ke,xe,ct,Z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ue&&ce){let re=Te(oe[0]);a.texStorage2D(t.TEXTURE_2D,qe,j,re.width,re.height)}for(let re=0,we=oe.length;re<we;re++)X=oe[re],ue?Ee&&a.texSubImage2D(t.TEXTURE_2D,re,0,0,fe,I,X):a.texImage2D(t.TEXTURE_2D,re,j,fe,I,X);_.generateMipmaps=!1}else if(ue){if(ce){let re=Te(Z);a.texStorage2D(t.TEXTURE_2D,qe,j,re.width,re.height)}Ee&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,I,Z)}else a.texImage2D(t.TEXTURE_2D,0,j,fe,I,Z);v(_)&&_.mipmapsAutoUpdate===!0&&y(ne),de.__version=le.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ua(b,_,N){if(_.image.length!==6)return;let ne=pt(b,_),ee=_.source;a.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+N);let le=n.get(ee);if(ee.version!==le.__version||ne===!0){a.activeTexture(t.TEXTURE0+N);let de=nt.getPrimaries(nt.workingColorSpace),Y=_.colorSpace===Hi?null:nt.getPrimaries(_.colorSpace),Z=_.colorSpace===Hi||de===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,I=_.image[0]&&_.image[0].isDataTexture,j=[];for(let xe=0;xe<6;xe++)!fe&&!I?j[xe]=m(_.image[xe],!0,i.maxCubemapSize):j[xe]=I?_.image[xe].image:_.image[xe],j[xe]=De(_,j[xe]);let X=j[0],oe=s.convert(_.format,_.colorSpace),ue=s.convert(_.type),ce=T(_.internalFormat,oe,ue,_.normalized,_.colorSpace),Ee=_.isVideoTexture!==!0,qe=le.__version===void 0||ne===!0,re=ee.dataReady,we=C(_,X);ot(t.TEXTURE_CUBE_MAP,_);let ke;if(_.isDepthTexture){if(ce=x(_.format===ki,_.type),qe)if(Ee)a.texStorage2D(t.TEXTURE_CUBE_MAP,1,ce,X.width,X.height);else for(let xe=0;xe<6;xe++)a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,X.width,X.height,0,oe,ue,null)}else if(fe){Ee&&qe&&a.texStorage2D(t.TEXTURE_CUBE_MAP,we,ce,X.width,X.height);for(let xe=0;xe<6;xe++){ke=j[xe].mipmaps;for(let ct=0;ct<ke.length;ct++){let Yt=ke[ct];_.format!==Gn?oe!==null?Ee?re&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,0,0,Yt.width,Yt.height,oe,Yt.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,ce,Yt.width,Yt.height,0,Yt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,0,0,Yt.width,Yt.height,oe,ue,Yt.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct,ce,Yt.width,Yt.height,0,oe,ue,Yt.data)}}}else{if(ke=_.mipmaps,Ee&&qe){ke.length>0&&we++;let xe=Te(j[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,we,ce,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(I){Ee?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,j[xe].width,j[xe].height,oe,ue,j[xe].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,j[xe].width,j[xe].height,0,oe,ue,j[xe].data);for(let ct=0;ct<ke.length;ct++){let En=ke[ct].image[xe].image;Ee?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,0,0,En.width,En.height,oe,ue,En.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,ce,En.width,En.height,0,oe,ue,En.data)}}else{Ee?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,oe,ue,j[xe]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,oe,ue,j[xe]);for(let ct=0;ct<ke.length;ct++){let Yt=ke[ct];Ee?re&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,0,0,oe,ue,Yt.image[xe]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ct+1,ce,oe,ue,Yt.image[xe])}}}v(_)&&_.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),le.__version=ee.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function bt(b,_,N,ne,ee,le){let de=s.convert(N.format,N.colorSpace),Y=s.convert(N.type),Z=T(N.internalFormat,de,Y,N.normalized,N.colorSpace),fe=n.get(_),I=n.get(N);if(I.__renderTarget=_,!fe.__hasExternalTextures){let j=Math.max(1,_.width>>le),X=Math.max(1,_.height>>le);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?a.texImage3D(ee,le,Z,j,X,_.depth,0,de,Y,null):a.texImage2D(ee,le,Z,j,X,0,de,Y,null)}a.bindFramebuffer(t.FRAMEBUFFER,b),se(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,I.__webglTexture,0,vt(_)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,I.__webglTexture,le),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ka(b,_,N){if(t.bindRenderbuffer(t.RENDERBUFFER,b),_.depthBuffer){let ne=_.depthTexture,ee=ne&&ne.isDepthTexture?ne.type:null,le=x(_.stencilBuffer,ee),de=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;se(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),le,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),le,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,le,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,b)}else{let ne=_.textures;for(let ee=0;ee<ne.length;ee++){let le=ne[ee],de=s.convert(le.format,le.colorSpace),Y=s.convert(le.type),Z=T(le.internalFormat,de,Y,le.normalized,le.colorSpace);se(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),Z,_.width,_.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),Z,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Z,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Jt(b,_,N){let ne=_.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(_.depthTexture);ee.__renderTarget=_;let le=ne?_.depthTexture.image[0]:_.depthTexture.image;(!ee.__webglTexture||le.width!==_.width||le.height!==_.height)&&(le.width=_.width,le.height=_.height,_.depthTexture.needsUpdate=!0),ne?Se(_.depthTexture,0):ge(_.depthTexture,0);let de=ee.__webglTexture,Y=vt(_),Z=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,fe=_.depthTexture.format===ki?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ni)se(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Z,de,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Z,de,0);else if(_.depthTexture.format===ki)se(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Z,de,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(b){let _=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let ne=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",ee)};ne.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=ne}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let ne=0;ne<6;ne++)Jt(_.__webglFramebuffer[ne],b,ne);else b.texture.mipmaps.length>0?Jt(_.__webglFramebuffer[0],b,0):Jt(_.__webglFramebuffer,b,0);else if(N){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=t.createRenderbuffer(),Ka(_.__webglDepthbuffer[ne],b,!1);else{let ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,le)}}else if(b.texture.mipmaps.length>0?a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ka(_.__webglDepthbuffer,b,!1);else{let ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,le)}a.bindFramebuffer(t.FRAMEBUFFER,null)}function Xe(b,_,N){let ne=n.get(b);_!==void 0&&bt(ne.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&St(b)}function Qt(b){let _=b.texture,N=n.get(b),ne=n.get(_);b.addEventListener("dispose",G),D(b);let ee=b.textures,le=b.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=_.version,r.memory.textures++),le){N.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){N.__webglFramebuffer[Y]=[];for(let Z=0;Z<_.mipmaps.length;Z++)N.__webglFramebuffer[Y][Z]=t.createFramebuffer()}else N.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(_.mipmaps.length>0){N.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)N.__webglFramebuffer[Y]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(de)for(let Y=0,Z=ee.length;Y<Z;Y++){let fe=n.get(ee[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),r.memory.textures++)}if(b.samples>0&&se(b)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Y=0;Y<ee.length;Y++){let Z=ee[Y];N.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[Y]);let fe=s.convert(Z.format,Z.colorSpace),I=s.convert(Z.type),j=T(Z.internalFormat,fe,I,Z.normalized,Z.colorSpace,b.isXRRenderTarget===!0),X=vt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,X,j,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,N.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ka(N.__webglDepthRenderbuffer,b,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){a.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ot(t.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)bt(N.__webglFramebuffer[Y][Z],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else bt(N.__webglFramebuffer[Y],b,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);v(_)?y(t.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),a.unbindTexture()}else if(de){for(let Y=0,Z=ee.length;Y<Z;Y++){let fe=ee[Y],I=n.get(fe),j=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(j,I.__webglTexture),ot(j,fe),bt(N.__webglFramebuffer,b,fe,t.COLOR_ATTACHMENT0+Y,j,0),v(fe)&&y(j)}a.unbindTexture()}else{let Y=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Y,ne.__webglTexture),ot(Y,_),_.mipmaps.length>0)for(let Z=0;Z<_.mipmaps.length;Z++)bt(N.__webglFramebuffer[Z],b,_,t.COLOR_ATTACHMENT0,Y,Z);else bt(N.__webglFramebuffer,b,_,t.COLOR_ATTACHMENT0,Y,0);v(_)?y(Y):_.mipmaps.length>0&&t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),a.unbindTexture()}b.depthBuffer&&St(b)}function P(b){let _=b.textures;for(let N=0,ne=_.length;N<ne;N++){let ee=_[N];if(v(ee)&&ee.mipmapsAutoUpdate===!0){let le=A(b),de=n.get(ee).__webglTexture;a.bindTexture(le,de),y(le),a.unbindTexture()}}}let ia=[];function yt(b){if(b.samples>0){if(se(b)===!1){let _=b.textures,N=b.width,ne=b.height,ee=t.COLOR_BUFFER_BIT,le=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=n.get(b),Y=_.length>1;if(Y)for(let fe=0;fe<_.length;fe++)a.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let I=n.get(_[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}t.blitFramebuffer(0,0,N,ne,0,0,N,ne,ee,t.NEAREST),l===!0&&(ia.length=0,ia.push(t.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&ia.push(le),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ia))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<_.length;fe++){a.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let I=n.get(_[fe]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,I,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function vt(b){return Math.min(i.maxSamples,b.samples)}function se(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Vt(b){let _=r.render.frame;d.get(b)!==_&&(d.set(b,_),b.update())}function De(b,_){let N=b.colorSpace,ne=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==nu&&N!==Hi&&(nt.getTransfer(N)===mt?(ne!==Gn||ee!==Za)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",N)),_}function Te(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=Ne,this.resetTextureUnits=$,this.getTextureUnits=ie,this.setTextureUnits=Le,this.setTexture2D=ge,this.setTexture2DArray=Me,this.setTexture3D=he,this.setTextureCube=Se,this.rebindTextures=Xe,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=se,this.dispose=k}function qR(t,e){function a(n,i=Hi){let s,r=nt.getTransfer(i);if(n===Za)return t.UNSIGNED_BYTE;if(n===Zd)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Kd)return t.UNSIGNED_SHORT_5_5_5_1;if(n===mx)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===gx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===hx)return t.BYTE;if(n===px)return t.SHORT;if(n===zo)return t.UNSIGNED_SHORT;if(n===Yd)return t.INT;if(n===zn)return t.UNSIGNED_INT;if(n===kn)return t.FLOAT;if(n===Hn)return t.HALF_FLOAT;if(n===xx)return t.ALPHA;if(n===Sx)return t.RGB;if(n===Gn)return t.RGBA;if(n===Ni)return t.DEPTH_COMPONENT;if(n===ki)return t.DEPTH_STENCIL;if(n===yx)return t.RED;if(n===Jd)return t.RED_INTEGER;if(n===Rs)return t.RG;if(n===Qd)return t.RG_INTEGER;if(n===jd)return t.RGBA_INTEGER;if(n===wu||n===Ru||n===Du||n===Pu)if(r===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Du)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$d||n===eh||n===th||n===ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nh||n===ih||n===sh||n===rh||n===oh||n===Uu||n===lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nh||n===ih)return r===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===sh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===rh)return s.COMPRESSED_R11_EAC;if(n===oh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Uu)return s.COMPRESSED_RG11_EAC;if(n===lh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uh||n===ch||n===fh||n===dh||n===hh||n===ph||n===mh||n===gh||n===xh||n===Sh||n===yh||n===vh||n===_h||n===Mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ch)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ph)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_h)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return r===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lh||n===Ch||n===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Lh)return r===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ch)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===Th||n===Nu||n===Ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ah)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Th)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:a}}var WR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XR=`
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

}`,Wx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let n=new pu(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,n=new ni({vertexShader:WR,fragmentShader:XR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Ca(new mu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xx=class extends ti{constructor(e,a){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,d=null,p=null,f=null,h=null,S=null,L=typeof XRWebGLBinding<"u",g=new Wx,c={},m=a.getContextAttributes(),v=null,y=null,A=[],T=[],x=new Je,C=null,D=null,E=new wa;E.viewport=new zt;let U=new wa;U.viewport=new zt;let G=[E,U],K=new Hd,R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ge=A[Q];return ge===void 0&&(ge=new wo,A[Q]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Q){let ge=A[Q];return ge===void 0&&(ge=new wo,A[Q]=ge),ge.getGripSpace()},this.getHand=function(Q){let ge=A[Q];return ge===void 0&&(ge=new wo,A[Q]=ge),ge.getHandSpace()};function q(Q){let ge=T.indexOf(Q.inputSource);if(ge===-1)return;let Me=A[ge];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,u||r),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",te);for(let Q=0;Q<A.length;Q++){let ge=T[Q];ge!==null&&(T[Q]=null,A[Q].disconnect(ge))}R=null,k=null,g.reset();for(let Q in c)delete c[Q];if(e.setRenderTarget(v),h=null,f=null,p=null,i=null,y=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),D!==null){let Q=D.camera;Q.fov=D.fov,Q.zoom=D.zoom,Q.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p===null&&L&&(p=new XRWebGLBinding(i,a)),p},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",z),i.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await a.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,he=null,Se=null;m.depth&&(Se=m.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,Me=m.stencil?ki:Ni,he=m.stencil?ur:zn);let Be={colorFormat:a.RGBA8,depthFormat:Se,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new cn(f.textureWidth,f.textureHeight,{format:Gn,type:Za,depthTexture:new Fi(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,a,Me),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new cn(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:Za,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function te(Q){for(let ge=0;ge<Q.removed.length;ge++){let Me=Q.removed[ge],he=T.indexOf(Me);he>=0&&(T[he]=null,A[he].disconnect(Me))}for(let ge=0;ge<Q.added.length;ge++){let Me=Q.added[ge],he=T.indexOf(Me);if(he===-1){for(let Be=0;Be<A.length;Be++)if(Be>=T.length){T.push(Me),he=Be;break}else if(T[Be]===null){T[Be]=Me,he=Be;break}if(he===-1)break}let Se=A[he];Se&&Se.connect(Me)}}function W(Q,ge){ge===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ge.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ge=Q.near,Me=Q.far;g.texture!==null&&(g.depthNear>0&&(ge=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),K.near=U.near=E.near=ge,K.far=U.far=E.far=Me,(R!==K.near||k!==K.far)&&(i.updateRenderState({depthNear:K.near,depthFar:K.far}),R=K.near,k=K.far),K.layers.mask=Q.layers.mask|6,E.layers.mask=K.layers.mask&-5,U.layers.mask=K.layers.mask&-3;let he=Q.parent,Se=K.cameras;W(K,he);for(let Be=0;Be<Se.length;Be++)W(Se[Be],he);K.projectionMatrix.copy(E.projectionMatrix),K.projectionMatrixInverse.copy(E.projectionMatrixInverse),D===null&&Q.isPerspectiveCamera&&(D={camera:Q,fov:Q.fov,zoom:Q.zoom}),$(Q,K,he)};function $(Q,ge,Me){Me===null?Q.matrix.copy(ge.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ge.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ge.projectionMatrix),Q.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=To*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(K)},this.getCameraTexture=function(Q){return c[Q]};let ie=null;function Le(Q,ge){if(d=ge.getViewerPose(u||r),S=ge,d!==null){let Me=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let he=!1;Me.length!==K.cameras.length&&(K.cameras.length=0,he=!0);for(let _e=0;_e<Me.length;_e++){let ot=Me[_e],pt=null;if(h!==null)pt=h.getViewport(ot);else{let kt=p.getViewSubImage(f,ot);pt=kt.viewport,_e===0&&(e.setRenderTargetTextures(y,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(y))}let Ve=G[_e];Ve===void 0&&(Ve=new wa,Ve.layers.enable(_e),Ve.viewport=new zt,G[_e]=Ve),Ve.matrix.fromArray(ot.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ot.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(pt.x,pt.y,pt.width,pt.height),_e===0&&(K.matrix.copy(Ve.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),he===!0&&K.cameras.push(Ve)}let Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&L){p=n.getBinding();let _e=p.getDepthInformation(Me[0]);_e&&_e.isValid&&_e.texture&&g.init(_e,i.renderState)}if(Se&&Se.includes("camera-access")&&L){e.state.unbindTexture(),p=n.getBinding();for(let _e=0;_e<Me.length;_e++){let ot=Me[_e].camera;if(ot){let pt=c[ot];pt||(pt=new pu,c[ot]=pt);let Ve=p.getCameraImage(ot);pt.sourceTexture=Ve}}}}for(let Me=0;Me<A.length;Me++){let he=T[Me],Se=A[Me];he!==null&&Se!==void 0&&Se.update(he,ge,u||r)}ie&&ie(Q,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),S=null}let Ne=new IL;Ne.setAnimationLoop(Le),this.setAnimationLoop=function(Q){ie=Q},this.dispose=function(){}}},YR=new It,FL=new ze;FL.set(-1,0,0,0,1,0,0,0,1);function ZR(t,e){function a(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function n(g,c){c.color.getRGB(g.fogColor.value,Ix(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function i(g,c,m,v,y){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?s(g,c):c.isMeshLambertMaterial?(s(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(g,c),p(g,c)):c.isMeshPhongMaterial?(s(g,c),d(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(g,c),f(g,c),c.isMeshPhysicalMaterial&&h(g,c,y)):c.isMeshMatcapMaterial?(s(g,c),S(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),L(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(r(g,c),c.isLineDashedMaterial&&o(g,c)):c.isPointsMaterial?l(g,c,m,v):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,a(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,a(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,a(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===za&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,a(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===za&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,a(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,a(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,a(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);let m=e.get(c),v=m.envMap,y=m.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(YR.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(FL),g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity,a(c.lightMap,g.lightMapTransform)),c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,a(c.aoMap,g.aoMapTransform))}function r(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,a(c.map,g.mapTransform))}function o(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,m,v){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*m,g.scale.value=v*.5,c.map&&(g.map.value=c.map,a(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,a(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,a(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,a(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function d(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function p(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function f(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,a(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,a(c.roughnessMap,g.roughnessMapTransform)),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function h(g,c,m){g.ior.value=c.ior,c.diffuseRoughness>0&&(g.diffuseRoughness.value=c.diffuseRoughness,c.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=c.diffuseRoughnessMap,a(c.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,a(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,a(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,a(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,a(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,a(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===za&&g.clearcoatNormalScale.value.negate())),c.dispersion>0&&(g.dispersion.value=c.dispersion),c.retroreflectivity>0&&(g.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=c.iridescenceThicknessMaximum,c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,a(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,a(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,a(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,a(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,a(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,a(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,a(c.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,c){c.matcap&&(g.matcap.value=c.matcap)}function L(g,c){let m=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function KR(t,e,a,n){let i={},s={};function r(m,v){let y=v.program;n.uniformBlockBinding(m,y,i[m.id])}function o(m,v){let y=i[m.id];y===void 0&&(S(m),y=l(m),i[m.id]=y,m.addEventListener("dispose",g));let A=v.program;n.updateUBOMapping(m,A);let T=e.render.frame;s[m.id]!==T&&(u(m),s[m.id]=T)}function l(m){let v=t.createBuffer(),y=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,y,A),t.bindBuffer(t.UNIFORM_BUFFER,null),v}function u(m){let v=i[m.id],y=m.uniforms,A=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,x=y.length;T<x;T++){let C=y[T];if(Array.isArray(C))for(let D=0,E=C.length;D<E;D++)d(C[D],T,D,A);else d(C,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(m,v,y,A){if(f(m,v,y,A)===!0){let T=m.__offset,x=m.value;if(Array.isArray(x)){let C=0;for(let D=0;D<x.length;D++){let E=x[D],U=L(E,!0);p(E,m.__data,C),C+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,m.__data)}}function p(m,v,y){typeof m=="number"||typeof m=="boolean"?v[y]=m:m.isMatrix3?(v[y]=m.elements[0],v[y+1]=m.elements[1],v[y+2]=m.elements[2],v[y+3]=0,v[y+4]=m.elements[3],v[y+5]=m.elements[4],v[y+6]=m.elements[5],v[y+7]=0,v[y+8]=m.elements[6],v[y+9]=m.elements[7],v[y+10]=m.elements[8],v[y+11]=0):ArrayBuffer.isView(m)?v.set(m.subarray(0,v.length-y),y):m.toArray(v,y)}function f(m,v,y,A){let T=m.value,x=v+"_"+y;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);let C=A[x],D=!1;for(let E=0;E<T.length;E++)h(T[E],C,E)===!0&&(D=!0);return D}return h(T,A,x)}function h(m,v,y){if(v[y]===void 0)return typeof m=="number"||typeof m=="boolean"?v[y]=m:ArrayBuffer.isView(m)?v[y]=m.slice():v[y]=m.clone(),!0;{let A=v[y];if(typeof m=="number"||typeof m=="boolean"){if(A!==m)return v[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(A.equals(m)===!1)return A.copy(m),!0}}return!1}function S(m){let v=m.uniforms,y=0,A=16;for(let x=0,C=v.length;x<C;x++){let D=Array.isArray(v[x])?v[x]:[v[x]];for(let E=0,U=D.length;E<U;E++){let G=D[E],K=Array.isArray(G.value)?G.value:[G.value],R=Array.isArray(v[x])||Array.isArray(G.value),k=y;for(let z=0,te=K.length;z<te;z++){let W=K[z],$=L(W,R),ie=y%A,Le=ie%$.boundary,Ne=ie+Le;y+=Le,Ne!==0&&A-Ne<$.storage&&(y+=A-Ne),z===0&&(k=y),y+=$.storage}let q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new q((y-k)/Float32Array.BYTES_PER_ELEMENT),G.__offset=k}}let T=y%A;return T>0&&(y+=A-T),m.__size=y,m.__cache={},this}function L(m,v){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",m),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(m){let v=m.target;v.removeEventListener("dispose",g),t.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function c(){for(let m in i)t.deleteBuffer(i[m]);i={},s={}}return{bind:r,update:o,dispose:c}}var JR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function QR(){return si===null&&(si=new Cd(JR,16,16,Rs,Hn),si.name="DFG_LUT",si.minFilter=Fa,si.magFilter=Fa,si.wrapS=jn,si.wrapT=jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var Ph=class{constructor(e={}){let{canvas:a=QM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Za}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=r;let L=h,g=new Set([jd,Qd,Jd]),c=new Set([Za,zn,zo,ur,Zd,Kd]),m=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,T=null,x=[],C=[],D=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,U=!1,G=null,K=null,R=null,k=null;this._outputColorSpace=Oa;let q=0,z=0,te=null,W=-1,$=null,ie=new zt,Le=new zt,Ne=null,Q=new Ye(0),ge=0,Me=a.width,he=a.height,Se=1,Be=null,Et=null,_e=new zt(0,0,Me,he),ot=new zt(0,0,Me,he),pt=!1,Ve=new bs,kt=new bd,Ht=!1,ua=!1,bt=new It,Ka=new H,Jt=new zt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Qt(){return te===null?Se:1}let P=n;function ia(M,w){return a.getContext(M,w)}let yt,vt,se,Vt,De,Te,b,_,N,ne,ee,le,de,Y,Z,fe,I,j,X,oe,ue,ce,Ee;try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${"187"}`),a.addEventListener("webglcontextlost",we,!1),a.addEventListener("webglcontextrestored",ke,!1),a.addEventListener("webglcontextcreationerror",xe,!1),P===null){let w="webgl2";if(P=ia(w,M),P===null)throw ia(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}qe()}catch(M){throw a.removeEventListener("webglcontextlost",we,!1),a.removeEventListener("webglcontextrestored",ke,!1),a.removeEventListener("webglcontextcreationerror",xe,!1),Fe("WebGLRenderer: "+M.message),M}function qe(){yt=new lw(P),yt.init(),ue=new qR(P,yt),vt=new QE(P,yt,e,ue),se=new GR(P,yt),vt.reversedDepthBuffer&&f&&se.buffers.depth.setReversed(!0),K=P.createFramebuffer(),R=P.createFramebuffer(),k=P.createFramebuffer(),Vt=new fw(P),De=new IR,Te=new VR(P,yt,se,De,vt,ue,Vt),b=new ow(E),_=new h1(P),ce=new KE(P,_),N=new uw(P,_,Vt,ce),ne=new hw(P,N,_,ce,Vt),j=new dw(P,vt,Te),Z=new jE(De),ee=new TR(E,b,yt,vt,ce,Z),le=new ZR(E,De),de=new wR,Y=new BR(yt),I=new ZE(E,b,se,ne,S,l),fe=new HR(E,ne,vt),Ee=new KR(P,Vt,vt,se),X=new JE(P,yt,Vt),oe=new cw(P,yt,Vt),Vt.programs=ee.programs,E.capabilities=vt,E.extensions=yt,E.properties=De,E.renderLists=de,E.shadowMap=fe,E.state=se,E.info=Vt}L!==Za&&(D=new mw(L,a.width,a.height,o,i,s));let re=new Xx(E,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(M){M!==void 0&&(Se=M,this.setSize(Me,he,!1))},this.getSize=function(M){return M.set(Me,he)},this.setSize=function(M,w,V=!0){if(re.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=M,he=w,a.width=Math.floor(M*Se),a.height=Math.floor(w*Se),V===!0&&(a.style.width=M+"px",a.style.height=w+"px"),D!==null&&D.setSize(a.width,a.height),this.setViewport(0,0,M,w)},this.getDrawingBufferSize=function(M){return M.set(Me*Se,he*Se).floor()},this.setDrawingBufferSize=function(M,w,V){Me=M,he=w,Se=V,a.width=Math.floor(M*V),a.height=Math.floor(w*V),this.setViewport(0,0,M,w)},this.setEffects=function(M){if(L===Za){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let w=0;w<M.length;w++)if(M[w].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ie)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,w,V,B){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,w,V,B),se.viewport(ie.copy(_e).multiplyScalar(Qt()).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,w,V,B){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,w,V,B),se.scissor(Le.copy(ot).multiplyScalar(Qt()).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(M){se.setScissorTest(pt=M)},this.setOpaqueSort=function(M){Be=M},this.setTransparentSort=function(M){Et=M},this.getClearColor=function(M){return M.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(M=!0,w=!0,V=!0){let B=0;if(M){let O=!1;if(te!==null){let me=te.texture.format;O=g.has(me)}if(O){let me=te.texture.type,Ce=c.has(me),pe=I.getClearColor(),ve=I.getClearAlpha(),Ie=pe.r,He=pe.g,et=pe.b;Ce?(m[0]=Ie,m[1]=He,m[2]=et,m[3]=ve,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=Ie,v[1]=He,v[2]=et,v[3]=ve,P.clearBufferiv(P.COLOR,0,v))}else B|=P.COLOR_BUFFER_BIT}w&&(B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){a.removeEventListener("webglcontextlost",we,!1),a.removeEventListener("webglcontextrestored",ke,!1),a.removeEventListener("webglcontextcreationerror",xe,!1),I.dispose(),de.dispose(),Y.dispose(),Te.dispose(),De.dispose(),b.dispose(),ne.dispose(),N.dispose(),ce.dispose(),Ee.dispose(),ee.dispose(),re.dispose(),re.removeEventListener("sessionstart",mr),re.removeEventListener("sessionend",Xo),oi.stop()};function we(M){M.preventDefault(),Cx("WebGLRenderer: Context Lost."),U=!0}function ke(){Cx("WebGLRenderer: Context Restored."),U=!1;let M=Vt.autoReset,w=fe.enabled,V=fe.autoUpdate,B=fe.needsUpdate,O=fe.type;qe(),Vt.autoReset=M,fe.enabled=w,fe.autoUpdate=V,fe.needsUpdate=B,fe.type=O}function xe(M){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ct(M){let w=M.target;w.removeEventListener("dispose",ct),Yt(w)}function Yt(M){En(M),De.remove(M)}function En(M){let w=De.get(M).programs;w!==void 0&&(w.forEach(function(V){ee.releaseProgram(V)}),M.isShaderMaterial&&ee.releaseShaderCache(M))}this.renderBufferDirect=function(M,w,V,B,O,me){w===null&&(w=St);let Ce=O.isMesh&&O.matrixWorld.determinantAffine()<0,pe=oc(M,w,V,B,O);se.setMaterial(B,Ce);let ve=V.index,Ie=1;if(B.wireframe===!0){if(ve=N.getWireframeAttribute(V),ve===void 0)return;Ie=2}let He=V.drawRange,et=V.attributes.position,be=He.start*Ie,tt=(He.start+He.count)*Ie;me!==null&&(be=Math.max(be,me.start*Ie),tt=Math.min(tt,(me.start+me.count)*Ie)),ve!==null?(be=Math.max(be,0),tt=Math.min(tt,ve.count)):et!=null&&(be=Math.max(be,0),tt=Math.min(tt,et.count));let jt=tt-be;if(jt<0||jt===1/0)return;ce.setup(O,B,pe,V,ve);let At,Lt=X;if(ve!==null&&(At=_.get(ve),Lt=oe,Lt.setIndex(At)),O.isMesh)B.wireframe===!0?(se.setLineWidth(B.wireframeLinewidth*Qt()),Lt.setMode(P.LINES)):Lt.setMode(P.TRIANGLES);else if(O.isLine){let ba=B.linewidth;ba===void 0&&(ba=1),se.setLineWidth(ba*Qt()),O.isLineSegments?Lt.setMode(P.LINES):O.isLineLoop?Lt.setMode(P.LINE_LOOP):Lt.setMode(P.LINE_STRIP)}else O.isPoints?Lt.setMode(P.POINTS):O.isSprite&&Lt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let ba=O._multiDrawStarts,Ae=O._multiDrawCounts,Pa=O._multiDrawCount,ft=ve?_.get(ve).bytesPerElement:1,Ps=De.get(B).currentProgram.getUniforms();for(let Aa=0;Aa<Pa;Aa++)Ps.setValue(P,"_gl_DrawID",Aa),Lt.render(ba[Aa]/ft,Ae[Aa])}else if(O.isInstancedMesh)Lt.renderInstances(be,jt,O.count);else if(V.isInstancedBufferGeometry){let ba=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ae=Math.min(V.instanceCount,ba);Lt.renderInstances(be,jt,Ae)}else Lt.render(be,jt)};function Wo(M,w,V,B){G!==null&&M.isNodeMaterial&&G.setObject(B,M),Ht===!0&&Z.setState(M,V,!1),M.transparent===!0&&M.side===In&&M.forceSinglePass===!1?(M.side=za,M.needsUpdate=!0,wt(M,w,B),M.side=ws,M.needsUpdate=!0,wt(M,w,B),M.side=In):wt(M,w,B)}this.compile=function(M,w,V=null){V===null&&(V=M),G!==null&&G.renderStart(M,w,V),T=Y.get(V),T.init(w),C.push(T),V.traverseVisible(function(O){O.isLight&&O.layers.test(w.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),M!==V&&M.traverseVisible(function(O){O.isLight&&O.layers.test(w.layers)&&(T.pushLight(O),O.castShadow&&T.pushShadow(O))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),ua=this.localClippingEnabled,Ht=Z.init(this.clippingPlanes,ua),Ht===!0&&Z.setGlobalState(this.clippingPlanes,w),G!==null&&fe.render(T.state.shadowsArray,V,w);let B=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let me=O.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){let pe=me[Ce];Wo(pe,V,w,O),B.add(pe)}else Wo(me,V,w,O),B.add(me)}),T=C.pop(),G!==null&&G.renderEnd(),B},this.compileAsync=function(M,w,V=null){let B=this.compile(M,w,V);return new Promise(O=>{function me(){if(B.forEach(function(Ce){let ve=De.get(Ce).currentProgram;(ve===void 0||ve.isReady())&&B.delete(Ce)}),B.size===0){O(M);return}setTimeout(me,10)}yt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let pr=null;function rc(M){pr&&pr(M)}function mr(){oi.stop()}function Xo(){oi.start()}let oi=new IL;oi.setAnimationLoop(rc),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(M){pr=M,re.setAnimationLoop(M),M===null?oi.stop():oi.start()},re.addEventListener("sessionstart",mr),re.addEventListener("sessionend",Xo),this.render=function(M,w){if(w!==void 0&&w.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;G!==null&&G.renderStart(M,w);let V=re.enabled===!0&&re.isPresenting===!0,B=D!==null&&(te===null||V)&&D.begin(E,te);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(w),w=re.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,w,te),T=Y.get(M,C.length),T.init(w),T.state.textureUnits=Te.getTextureUnits(),C.push(T),bt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.isArrayCamera?kt.setFromArrayCamera(w):Ve.setFromProjectionMatrix(bt,An,w.reversedDepth),ua=this.localClippingEnabled,Ht=Z.init(this.clippingPlanes,ua),A=de.get(M,x.length),A.init(),x.push(A),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Ce=E.xr.getDepthSensingMesh();Ce!==null&&gr(Ce,w,-1/0,E.sortObjects)}gr(M,w,0,E.sortObjects),A.finish(),G!==null&&G.updateLights(T.state.lightsArray),E.sortObjects===!0&&A.sort(Be,Et),Xe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Xe&&I.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),Ht===!0&&Z.beginShadows();let O=T.state.shadowsArray;if(fe.render(O,M,w),Ht===!0&&Z.endShadows(),(B&&D.hasRenderPass())===!1){let Ce=A.opaque,pe=A.transmissive;if(T.setupLights(),w.isArrayCamera){let ve=w.cameras;if(pe.length>0)for(let Ie=0,He=ve.length;Ie<He;Ie++){let et=ve[Ie];Re(Ce,pe,M,et)}Xe&&I.render(M);for(let Ie=0,He=ve.length;Ie<He;Ie++){let et=ve[Ie];J(A,M,et,et.viewport)}}else pe.length>0&&Re(Ce,pe,M,w),Xe&&I.render(M),J(A,M,w)}te!==null&&z===0&&(Te.updateMultisampleRenderTarget(te),Te.updateRenderTargetMipmap(te)),B&&D.end(E),M.isScene===!0&&M.onAfterRender(E,M,w),ce.resetDefaultState(),W=-1,$=null,C.pop(),C.length>0?(T=C[C.length-1],Te.setTextureUnits(T.state.textureUnits),Ht===!0&&Z.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,G!==null&&G.renderEnd()};function gr(M,w,V,B){if(M.visible===!1)return;if(M.layers.test(w.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(w);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){let Ce=w.isArrayCamera?kt:Ve;if(!M.frustumCulled||M.intersectsFrustum(Ce)){B&&Jt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);let pe=ne.update(M),ve=M.material;ve.visible&&A.push(M,pe,ve,V,Jt.z,null,w)}}else if(M.isMesh||M.isLine||M.isPoints){let Ce=w.isArrayCamera?kt:Ve;if(!M.frustumCulled||M.intersectsFrustum(Ce)){let pe=ne.update(M),ve=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Jt.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Jt.copy(pe.boundingSphere.center)),Jt.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(ve)){let Ie=pe.groups;for(let He=0,et=Ie.length;He<et;He++){let be=Ie[He],tt=ve[be.materialIndex];tt&&tt.visible&&A.push(M,pe,tt,V,Jt.z,be,w)}}else ve.visible&&A.push(M,pe,ve,V,Jt.z,null,w)}}}let me=M.children;for(let Ce=0,pe=me.length;Ce<pe;Ce++)gr(me[Ce],w,V,B)}function J(M,w,V,B){let{opaque:O,transmissive:me,transparent:Ce}=M;T.setupLightsView(V),Ht===!0&&Z.setGlobalState(E.clippingPlanes,V),B&&se.viewport(ie.copy(B)),O.length>0&&Ze(O,w,V),me.length>0&&Ze(me,w,V),Ce.length>0&&Ze(Ce,w,V),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Re(M,w,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let be=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new cn(1,1,{generateMipmaps:!0,type:be?Hn:Za,minFilter:zi,samples:Math.max(4,vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let me=T.state.transmissionRenderTarget[B.id],Ce=B.viewport||ie;me.setSize(Ce.z*E.transmissionResolutionScale,Ce.w*E.transmissionResolutionScale);let pe=E.getRenderTarget(),ve=E.getActiveCubeFace(),Ie=E.getActiveMipmapLevel();E.setRenderTarget(me),E.getClearColor(Q),ge=E.getClearAlpha(),ge<1&&E.setClearColor(16777215,.5),E.clear(),Xe&&I.render(V);let He=E.toneMapping;E.toneMapping=ii;let et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Ht===!0&&Z.setGlobalState(E.clippingPlanes,B),Ze(M,V,B),Te.updateMultisampleRenderTarget(me),Te.updateRenderTargetMipmap(me),yt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let tt=0,jt=w.length;tt<jt;tt++){let At=w[tt],{object:Lt,geometry:ba,material:Ae,group:Pa}=At;if(Ae.side===In&&Lt.layers.test(B.layers)){let ft=Ae.side;Ae.side=za,Ae.needsUpdate=!0,lt(Lt,V,B,ba,Ae,Pa),Ae.side=ft,Ae.needsUpdate=!0,be=!0}}be===!0&&(Te.updateMultisampleRenderTarget(me),Te.updateRenderTargetMipmap(me))}E.setRenderTarget(pe,ve,Ie),E.setClearColor(Q,ge),et!==void 0&&(B.viewport=et),E.toneMapping=He}function Ze(M,w,V){let B=w.isScene===!0?w.overrideMaterial:null;for(let O=0,me=M.length;O<me;O++){let Ce=M[O],{object:pe,geometry:ve,group:Ie}=Ce,He=Ce.material;He.allowOverride===!0&&B!==null&&(He=B),pe.layers.test(V.layers)&&lt(pe,w,V,ve,He,Ie)}}function lt(M,w,V,B,O,me){G!==null&&O.isNodeMaterial&&G.setObject(M,O),M.onBeforeRender(E,w,V,B,O,me),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(E,w,V,B,M,me),O.transparent===!0&&O.side===In&&O.forceSinglePass===!1?(O.side=za,O.needsUpdate=!0,E.renderBufferDirect(V,w,B,O,M,me),O.side=ws,O.needsUpdate=!0,E.renderBufferDirect(V,w,B,O,M,me),O.side=In):E.renderBufferDirect(V,w,B,O,M,me),M.onAfterRender(E,w,V,B,O,me)}function qt(M){let w=0;for(let V of M)V.texture!==null&&w++;return w}function wt(M,w,V){w.isScene!==!0&&(w=St);let B=De.get(M),O=T.state.lights,me=T.state.shadowsArray,Ce=O.state.version,pe=ee.getParameters(M,O.state,me,w,V,T.state.lightProbeGridArray),ve=ee.getProgramCacheKey(pe),Ie=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?w.environment:null,B.fog=w.fog;let He=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=b.get(M.envMap||B.environment,He),B.envMapRotation=B.environment!==null&&M.envMap===null?w.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",ct),Ie=new Map,B.programs=Ie,B.programVariants=new Map);let et=Ie.get(ve);if(et!==void 0){if(B.currentProgram===et&&B.lightsStateVersion===Ce)return Ja(M,pe),et}else pe.uniforms=ee.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,V,pe),M.onBeforeCompile(pe,E),et=ee.acquireProgram(pe,ve),Ie.set(ve,et),B.uniforms=pe.uniforms;let be=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=Z.uniform),Ja(M,pe),B.needsLights=dn(M),B.lightsStateVersion=Ce,B.needsLights&&(be.ambientLightColor.value=O.state.ambient,be.lightProbe.value=O.state.probe,be.sunLights.value=O.state.sun,be.sunLightShadows.value=O.state.sunShadow,be.directionalLights.value=O.state.directional,be.directionalLightShadows.value=O.state.directionalShadow,be.spotLights.value=O.state.spot,be.spotLightShadows.value=O.state.spotShadow,be.rectAreaLights.value=O.state.rectArea,be.ltc_1.value=O.state.rectAreaLTC1,be.ltc_2.value=O.state.rectAreaLTC2,be.pointLights.value=O.state.point,be.pointLightShadows.value=O.state.pointShadow,be.hemisphereLights.value=O.state.hemi,be.sunShadowMatrix.value=O.state.sunShadowMatrix,be.sunShadowCascade.value=O.state.sunShadowCascade,be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,be.spotLightMatrix.value=O.state.spotLightMatrix,be.spotLightMap.value=O.state.spotLightMap,be.pointShadowMatrix.value=O.state.pointShadowMatrix),B.numLightProbeGrids=qt(T.state.lightProbeGridArray),B.currentProgram=et,B.uniformsList=null,et}function ga(M,w,V,B,O){let me=De.get(M),Ce=me.currentProgram.id+","+B+","+O,pe=me.programVariants.get(Ce);return pe===void 0?(pe=wt(M,w,V),me.programVariants.set(Ce,pe)):(me.currentProgram=pe,me.uniformsList=null,me.outputColorSpace=B,me.toneMapping=O),pe}function Pe(M){if(M.uniformsList===null){let w=M.currentProgram.getUniforms();M.uniformsList=Ho.seqWithValue(w.seq,M.uniforms)}return M.uniformsList}function Ja(M,w){let V=De.get(M);V.outputColorSpace=w.outputColorSpace,V.batching=w.batching,V.batchingColor=w.batchingColor,V.instancing=w.instancing,V.instancingColor=w.instancingColor,V.instancingMorph=w.instancingMorph,V.skinning=w.skinning,V.morphTargets=w.morphTargets,V.morphNormals=w.morphNormals,V.morphColors=w.morphColors,V.morphTargetsCount=w.morphTargetsCount,V.numClippingPlanes=w.numClippingPlanes,V.numIntersection=w.numClipIntersection,V.vertexAlphas=w.vertexAlphas,V.vertexTangents=w.vertexTangents,V.toneMapping=w.toneMapping}function oc(M,w,V,B,O){w.isScene!==!0&&(w=St),Te.resetTextureUnits();let me=w.fog,Ce=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?w.environment:null,pe=te===null?E.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:nt.workingColorSpace,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ie=b.get(B.envMap||Ce,ve),He=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,et=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!V.morphAttributes.position,tt=!!V.morphAttributes.normal,jt=!!V.morphAttributes.color,At=ii;B.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(At=E.toneMapping);let Lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ba=Lt!==void 0?Lt.length:0,Ae=De.get(B),Pa=T.state.lights;if(Ht===!0&&(ua===!0||M!==$)){let Gt=M===$&&B.id===W;Z.setState(B,M,Gt)}let ft=!1,Ps=!1;B.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==Pa.state.version||O.isBatchedMesh&&Ae.batching===!1||!O.isBatchedMesh&&Ae.batching===!0||O.isBatchedMesh&&Ae.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Ae.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Ae.instancing===!1||!O.isInstancedMesh&&Ae.instancing===!0||O.isSkinnedMesh&&Ae.skinning===!1||!O.isSkinnedMesh&&Ae.skinning===!0||O.isInstancedMesh&&Ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ae.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ae.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ae.instancingMorph===!1&&O.morphTexture!==null||Ae.envMap!==Ie||B.fog===!0&&Ae.fog!==me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Z.numPlanes||Ae.numIntersection!==Z.numIntersection)||Ae.vertexAlphas!==He||Ae.vertexTangents!==et||Ae.morphTargets!==be||Ae.morphNormals!==tt||Ae.morphColors!==jt||Ae.morphTargetsCount!==ba||Ae.numLightProbeGrids!==qt(T.state.lightProbeGridArray)?ft=!0:(Ae.outputColorSpace!==pe||Ae.toneMapping!==At)&&(Ps=!0):(ft=!0,Ae.__version=B.version);let Aa=Ae.currentProgram;(ft===!0||Ps===!0)&&(Aa=Ps===!0?ga(B,w,O,pe,At):wt(B,w,O),G&&B.isNodeMaterial&&G.onUpdateProgram(B,Aa,Ae));let uc=!1,Gi=!1,Us=!1,ut=Aa.getUniforms(),xa=Ae.uniforms;if(se.useProgram(Aa.program)&&(uc=!0,Gi=!0,Us=!0),B.id!==W&&(W=B.id,Gi=!0),uc||$!==M){se.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ut.setValue(P,"projectionMatrix",M.projectionMatrix),ut.setValue(P,"viewMatrix",M.matrixWorldInverse);let ca=ut.map.cameraPosition;ca!==void 0&&ca.setValue(P,Ka.setFromMatrixPosition(M.matrixWorld)),vt.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ut.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,Gi=!0,Us=!0)}if(Ae.needsLights&&(Pa.state.sunShadowMap.length>0&&ut.setValue(P,"sunShadowMap",Pa.state.sunShadowMap,Te),Pa.state.directionalShadowMap.length>0&&ut.setValue(P,"directionalShadowMap",Pa.state.directionalShadowMap,Te),Pa.state.spotShadowMap.length>0&&ut.setValue(P,"spotShadowMap",Pa.state.spotShadowMap,Te),Pa.state.pointShadowMap.length>0&&ut.setValue(P,"pointShadowMap",Pa.state.pointShadowMap,Te)),O.isSkinnedMesh){ut.setOptional(P,O,"bindMatrix"),ut.setOptional(P,O,"bindMatrixInverse");let Gt=O.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ut.setValue(P,"boneTexture",Gt.boneTexture,Te))}O.isBatchedMesh&&(ut.setOptional(P,O,"batchingTexture"),ut.setValue(P,"batchingTexture",O._matricesTexture,Te),ut.setOptional(P,O,"batchingIdTexture"),ut.setValue(P,"batchingIdTexture",O._indirectTexture,Te),ut.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&ut.setValue(P,"batchingColorTexture",O._colorsTexture,Te));let Rn=V.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&j.update(O,V,Aa),(Gi||Ae.receiveShadow!==O.receiveShadow)&&(Ae.receiveShadow=O.receiveShadow,ut.setValue(P,"receiveShadow",O.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&w.environment!==null&&(xa.envMapIntensity.value=w.environmentIntensity),xa.dfgLUT!==void 0&&(xa.dfgLUT.value=QR()),Gi){if(ut.setValue(P,"toneMappingExposure",E.toneMappingExposure),Ae.needsLights&&wn(xa,Us),me&&B.fog===!0&&le.refreshFogUniforms(xa,me),le.refreshMaterialUniforms(xa,B,Se,he,T.state.transmissionRenderTarget[M.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let Gt=y,ca=0;for(let li of T.state.lightProbeGridArray)li.texture!==null&&(Gt.textures[ca]=li.texture,Gt.min[ca]=li.boundingBox.min,Gt.max[ca]=li.boundingBox.max,Gt.resolution[ca]=li.resolution,ca++);for(let li in Gt)Gt[li].length=ca;xa.probesSH.value=Gt.textures,xa.probesMin.value=Gt.min,xa.probesMax.value=Gt.max,xa.probesResolution.value=Gt.resolution}Ho.upload(P,Pe(Ae),xa,Te)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ho.upload(P,Pe(Ae),xa,Te),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ut.setValue(P,"center",O.center),ut.setValue(P,"modelViewMatrix",O.modelViewMatrix),ut.setValue(P,"normalMatrix",O.normalMatrix),ut.setValue(P,"modelMatrix",O.matrixWorld),B.uniformsGroups!==void 0){let Gt=B.uniformsGroups;for(let ca=0,li=Gt.length;ca<li;ca++){let $x=Gt[ca];Ee.update($x,Aa),Ee.bind($x,Aa)}}return Aa}function wn(M,w){M.ambientLightColor.needsUpdate=w,M.lightProbe.needsUpdate=w,M.sunLights.needsUpdate=w,M.sunLightShadows.needsUpdate=w,M.directionalLights.needsUpdate=w,M.directionalLightShadows.needsUpdate=w,M.pointLights.needsUpdate=w,M.pointLightShadows.needsUpdate=w,M.spotLights.needsUpdate=w,M.spotLightShadows.needsUpdate=w,M.rectAreaLights.needsUpdate=w,M.hemisphereLights.needsUpdate=w}function dn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(M,w,V){let B=De.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),De.get(M.texture).__webglTexture=w,De.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,w){let V=De.get(M);V.__webglFramebuffer=w,V.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(M,w=0,V=0){te=M,q=w,z=V;let B=null,O=!1,me=!1;if(M){let pe=De.get(M);if(pe.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(P.FRAMEBUFFER,pe.__webglFramebuffer),ie.copy(M.viewport),Le.copy(M.scissor),Ne=M.scissorTest,se.viewport(ie),se.scissor(Le),se.setScissorTest(Ne),W=-1;return}else if(pe.__webglFramebuffer===void 0)Te.setupRenderTarget(M);else if(pe.__hasExternalTextures)Te.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let He=M.depthTexture;if(pe.__boundDepthTexture!==He){if(He!==null&&De.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Te.setupDepthRenderbuffer(M)}}let ve=M.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(me=!0);let Ie=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[w])?B=Ie[w][V]:B=Ie[w],O=!0):M.samples>0&&Te.useMultisampledRTT(M)===!1?B=De.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[V]:B=Ie,ie.copy(M.viewport),Le.copy(M.scissor),Ne=M.scissorTest}else ie.copy(_e).multiplyScalar(Se).floor(),Le.copy(ot).multiplyScalar(Se).floor(),Ne=pt;if(V!==0&&(B=K),se.bindFramebuffer(P.FRAMEBUFFER,B)&&se.drawBuffers(M,B),se.viewport(ie),se.scissor(Le),se.setScissorTest(Ne),O){let pe=De.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+w,pe.__webglTexture,V)}else if(me){let pe=w;for(let ve=0;ve<M.textures.length;ve++){let Ie=De.get(M.textures[ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ve,Ie.__webglTexture,V,pe)}}else if(M!==null&&V!==0){let pe=De.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pe.__webglTexture,V)}W=-1};function lc(M){let w=De.get(M);return(w.__readFormat!==M.format||w.__readType!==M.type)&&(w.__readFormat=M.format,w.__readType=M.type,w.__formatReadable=vt.textureFormatReadable(M.format),w.__typeReadable=vt.textureTypeReadable(M.type)),w}this.readRenderTargetPixels=function(M,w,V,B,O,me,Ce,pe=0){if(!(M&&M.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(ve=ve[Ce],Array.isArray(ve)&&(ve=ve[0])),ve){se.bindFramebuffer(P.FRAMEBUFFER,ve);try{let Ie=M.textures[pe],He=Ie.format,et=Ie.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe);let be=lc(Ie);if(be.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=M.width-B&&V>=0&&V<=M.height-O&&P.readPixels(w,V,B,O,ue.convert(He),ue.convert(et),me)}finally{let Ie=te!==null?De.get(te).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,w,V,B,O,me,Ce,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(ve=ve[Ce],Array.isArray(ve)&&(ve=ve[0])),ve)if(w>=0&&w<=M.width-B&&V>=0&&V<=M.height-O){se.bindFramebuffer(P.FRAMEBUFFER,ve);let Ie=M.textures[pe],He=Ie.format,et=Ie.type;M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pe);let be=lc(Ie);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),P.readPixels(w,V,B,O,ue.convert(He),ue.convert(et),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let jt=te!==null?De.get(te).__webglFramebuffer:null;se.bindFramebuffer(P.FRAMEBUFFER,jt);let At=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $M(P,At,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(tt),P.deleteSync(At),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,w=null,V=0){let B=Math.pow(2,-V),O=Math.floor(M.image.width*B),me=Math.floor(M.image.height*B),Ce=w!==null?w.x:0,pe=w!==null?w.y:0;Te.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Ce,pe,O,me),se.unbindTexture()},this.copyTextureToTexture=function(M,w,V=null,B=null,O=0,me=0){let Ce,pe,ve,Ie,He,et,be,tt,jt,At=M.isCompressedTexture?M.mipmaps[me]:M.image;if(V!==null)Ce=V.max.x-V.min.x,pe=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,He=V.min.y,et=V.isBox3?V.min.z:0;else{let ut=Math.pow(2,-O);Ce=Math.floor(At.width*ut),pe=Math.floor(At.height*ut),M.isDataArrayTexture?ve=At.depth:M.isData3DTexture?ve=Math.floor(At.depth*ut):ve=1,Ie=0,He=0,et=0}B!==null?(be=B.x,tt=B.y,jt=B.z):(be=0,tt=0,jt=0);let Lt=ue.convert(w.format),ba=ue.convert(w.type),Ae;w.isData3DTexture?(Te.setTexture3D(w,0),Ae=P.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Te.setTexture2DArray(w,0),Ae=P.TEXTURE_2D_ARRAY):(Te.setTexture2D(w,0),Ae=P.TEXTURE_2D),se.activeTexture(P.TEXTURE0),se.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,w.flipY),se.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),se.pixelStorei(P.UNPACK_ALIGNMENT,w.unpackAlignment);let Pa=se.getParameter(P.UNPACK_ROW_LENGTH),ft=se.getParameter(P.UNPACK_IMAGE_HEIGHT),Ps=se.getParameter(P.UNPACK_SKIP_PIXELS),Aa=se.getParameter(P.UNPACK_SKIP_ROWS),uc=se.getParameter(P.UNPACK_SKIP_IMAGES);se.pixelStorei(P.UNPACK_ROW_LENGTH,At.width),se.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At.height),se.pixelStorei(P.UNPACK_SKIP_PIXELS,Ie),se.pixelStorei(P.UNPACK_SKIP_ROWS,He),se.pixelStorei(P.UNPACK_SKIP_IMAGES,et);let Gi=M.isDataArrayTexture||M.isData3DTexture,Us=w.isDataArrayTexture||w.isData3DTexture;if(M.isDepthTexture){let ut=De.get(M),xa=De.get(w),Rn=De.get(ut.__renderTarget),Gt=De.get(xa.__renderTarget);se.bindFramebuffer(P.READ_FRAMEBUFFER,Rn.__webglFramebuffer),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let ca=0;ca<ve;ca++)Gi&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(M).__webglTexture,O,et+ca),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(w).__webglTexture,me,jt+ca)),P.blitFramebuffer(Ie,He,Ie+Ce,He+pe,be,tt,be+Ce,tt+pe,P.DEPTH_BUFFER_BIT,P.NEAREST);se.bindFramebuffer(P.READ_FRAMEBUFFER,null),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||De.has(M)){let ut=De.get(M),xa=De.get(w);se.bindFramebuffer(P.READ_FRAMEBUFFER,R),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,k);for(let Rn=0;Rn<ve;Rn++)Gi?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ut.__webglTexture,O,et+Rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ut.__webglTexture,O),Us?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xa.__webglTexture,me,jt+Rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xa.__webglTexture,me),O!==0?P.blitFramebuffer(Ie,He,Ie+Ce,He+pe,be,tt,be+Ce,tt+pe,P.COLOR_BUFFER_BIT,P.NEAREST):Us?P.copyTexSubImage3D(Ae,me,be,tt,jt+Rn,Ie,He,Ce,pe):P.copyTexSubImage2D(Ae,me,be,tt,Ie,He,Ce,pe);se.bindFramebuffer(P.READ_FRAMEBUFFER,null),se.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Us?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Ae,me,be,tt,jt,Ce,pe,ve,Lt,ba,At.data):w.isCompressedArrayTexture?P.compressedTexSubImage3D(Ae,me,be,tt,jt,Ce,pe,ve,Lt,At.data):P.texSubImage3D(Ae,me,be,tt,jt,Ce,pe,ve,Lt,ba,At):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,me,be,tt,Ce,pe,Lt,ba,At.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,me,be,tt,At.width,At.height,Lt,At.data):P.texSubImage2D(P.TEXTURE_2D,me,be,tt,Ce,pe,Lt,ba,At);se.pixelStorei(P.UNPACK_ROW_LENGTH,Pa),se.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),se.pixelStorei(P.UNPACK_SKIP_PIXELS,Ps),se.pixelStorei(P.UNPACK_SKIP_ROWS,Aa),se.pixelStorei(P.UNPACK_SKIP_IMAGES,uc),me===0&&w.generateMipmaps===!0&&w.mipmapsAutoUpdate===!0&&P.generateMipmap(Ae),se.unbindTexture()},this.initRenderTarget=function(M){De.get(M).__webglFramebuffer===void 0&&Te.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Te.setTextureCube(M,0):M.isData3DTexture?Te.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Te.setTexture2DArray(M,0):Te.setTexture2D(M,0),se.unbindTexture()},this.resetState=function(){q=0,z=0,te=null,se.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),a.unpackColorSpace=nt._getUnpackColorSpace()}};var Bh=hn(qi(),1);var zL=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function kL(t,e,a=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:zL(t),size:24,node:e,...a.length>0?{aliases:a}:{}}}var HL=t=>{let e="",a=!1;for(let n of t){if(n==="-"||n==="_"||n<=" "){a=e.length>0;continue}e.length===0?e+=n.toLowerCase():e+=a?n.toUpperCase():n,a=!1}return e};var GL=t=>{let e=HL(t);return e.charAt(0).toUpperCase()+e.slice(1)};var Gu=hn(qi(),1);var Hu=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim();var Ds={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Yx(t){return t!=null}function VL(t,e={}){let a=e.attributeNames??{},n=f=>a[f]??f,i=t.size??t.width??Ds.width,s=t.size??t.height??Ds.height,r=t.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],l=e.className?.split(" ").filter(Boolean)??[],u=e.includeDefaultClasses===!1?Hu(...l):Hu("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??Ds["stroke-width"])*Number(t.size??t.width??Ds.width)/Number(e.size??e.width??Ds.width):e.strokeWidth??Ds["stroke-width"];return["svg",{...Object.entries(Ds).reduce((f,[h,S])=>(f[n(h)]=S,f),{}),..."color"in e&&e.color&&{[n("stroke")]:e.color},..."size"in e&&Yx(e.size)&&{[n("width")]:e.size,[n("height")]:e.size},..."width"in e&&Yx(e.width)&&{[n("width")]:e.width},..."height"in e&&Yx(e.height)&&{[n("height")]:e.height},[n("stroke-width")]:d,...u&&{[n("class")]:u},[n("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[n("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(f=>{let[h,S,L]=f,g=e.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...S}:S;return L?[h,g,L]:[h,g]})]}function qL(t,e={}){return VL(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var WL=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Vo=hn(qi(),1);var $R=(0,Vo.createContext)({});var XL=()=>(0,Vo.useContext)($R);var YL=(0,Gu.forwardRef)(({color:t,size:e,width:a,height:n,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:l,iconNode:u=[],icon:d={node:u,aliases:[],size:24},...p},f)=>{let{size:h=24,strokeWidth:S=2,absoluteStrokeWidth:L=!1,nonScalingStroke:g=!1,color:c="currentColor",className:m=""}=XL()??{},v=!!l||WL(p),[y,A,T=[]]=qL(d,{color:t??c,width:a??e??h,height:n??e??h,strokeWidth:i??S,absoluteStrokeWidth:s??L,nonScalingStroke:r??g,className:Hu(m,o),hasA11yProp:v,attributes:p});return(0,Gu.createElement)(y,{ref:f,...A},[...T.map(([x,C])=>(0,Gu.createElement)(x,C)),...Array.isArray(l)?l:[l]])});function rt(t,e=[],a=[]){let n=typeof t=="string"?kL(t,e,a):t,i=(0,Bh.forwardRef)(({className:s,...r},o)=>(0,Bh.createElement)(YL,{ref:o,icon:n,className:s,...r}));return n.name&&(i.displayName=GL(n.name)),i}var ZL={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};ZL.node;var Vu=rt(ZL);var KL={name:"cloud",size:24,node:[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]};KL.node;var qu=rt(KL);var JL={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};JL.node;var qo=rt(JL);var QL={name:"expand",size:24,node:[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]]};QL.node;var Wu=rt(QL);var jL={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};jL.node;var Xu=rt(jL);var $L={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};$L.node;var Yu=rt($L);var eC={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};eC.node;var Zu=rt(eC);var tC={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};tC.node;var Ku=rt(tC);var aC={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};aC.node;var Ju=rt(aC);var nC={name:"mouse-pointer-2",size:24,node:[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]};nC.node;var Qu=rt(nC);var iC={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};iC.node;var ju=rt(iC);var sC={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};sC.node;var $u=rt(sC);var rC={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};rC.node;var fr=rt(rC);var oC={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};oC.node;var ec=rt(oC);var lC={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};lC.node;var tc=rt(lC);var uC={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};uC.node;var ac=rt(uC);var cC={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};cC.node;var nc=rt(cC);var hr=hn(qi());var Zx="aimforge-scores-v1";function ic(){try{let t=JSON.parse(localStorage.getItem(Zx)||"[]");return Array.isArray(t)?t.filter(e2).slice(0,20):[]}catch{return[]}}function e2(t){if(!t||typeof t!="object")return!1;let e=t;return typeof e.name=="string"&&e.name.length>=1&&e.name.length<=16&&["easy","normal","hard"].includes(String(e.difficulty))&&typeof e.date=="string"&&!Number.isNaN(Date.parse(e.date))&&Number.isInteger(e.kills)&&Number(e.kills)>=0&&Number(e.kills)<=1e4&&Number.isInteger(e.shots)&&Number(e.shots)>=0&&Number(e.shots)<=1e5&&Number.isInteger(e.hits)&&Number(e.hits)>=0&&Number(e.hits)<=Number(e.shots)&&Number(e.kills)*3<=Number(e.hits)&&typeof e.time=="number"&&Number.isFinite(e.time)&&e.time>=0&&e.time<=86400&&Number(e.shots)<=(e.time+1)*8}function sc(t){return[...t].sort((e,a)=>a.kills-e.kills||a.hits/Math.max(1,a.shots)-e.hits/Math.max(1,e.shots)||e.time-a.time)}var Qe=hn(dr()),Kx=!0,n2={easy:"D\u1EC4",normal:"TH\u01AF\u1EDCNG",hard:"KH\xD3"};function Jx({latest:t,onClose:e}){let[a,n]=(0,hr.useState)(()=>sc(ic())),[i,s]=(0,hr.useState)("local"),[r,o]=(0,hr.useState)("\u0110\u1EB6C V\u1EE4"),[l,u]=(0,hr.useState)(""),[d,p]=(0,hr.useState)(!1),[f,h]=(0,hr.useState)(!1);async function S(){s("server"),u(""),p(!0),n([]);try{let g=await fetch("/api/scores",{cache:"no-store"});if(!g.ok)throw new Error;let c=await g.json();if(!Array.isArray(c))throw new Error;n(c)}catch{u("Kh\xF4ng k\u1EBFt n\u1ED1i \u0111\u01B0\u1EE3c m\xE1y ch\u1EE7. \u0110i\u1EC3m tr\xEAn m\xE1y v\u1EABn \u0111\u01B0\u1EE3c gi\u1EEF l\u1EA1i.")}finally{p(!1)}}async function L(){if(!t||!r.trim()){u("H\xE3y nh\u1EADp t\xEAn c\u1EE7a b\u1EA1n.");return}p(!0),u("");try{if(!(await fetch("/api/scores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,name:r.trim()})})).ok)throw new Error;h(!0),await S(),u("\u0110\xE3 g\u1EEDi \u0111i\u1EC3m l\xEAn m\xE1y ch\u1EE7.")}catch{u("Kh\xF4ng th\u1EC3 g\u1EEDi \u0111i\u1EC3m. H\xE3y th\u1EED l\u1EA1i khi c\xF3 k\u1EBFt n\u1ED1i.")}finally{p(!1)}}return(0,Qe.jsx)("div",{className:"scores-backdrop",onClick:e,children:(0,Qe.jsxs)("section",{className:"scores-panel",role:"dialog","aria-modal":"true","aria-label":"B\u1EA3ng th\xE0nh t\xEDch",onClick:g=>g.stopPropagation(),children:[(0,Qe.jsxs)("div",{className:"scores-heading",children:[(0,Qe.jsxs)("div",{children:[(0,Qe.jsx)("span",{className:"panel-eyebrow",children:"H\u1ED2 S\u01A0 CHI\u1EBEN \u0110\u1EA4U / 01"}),(0,Qe.jsxs)("h2",{children:[(0,Qe.jsx)(fr,{size:22})," B\u1EA2NG TH\xC0NH T\xCDCH"]})]}),(0,Qe.jsx)("button",{className:"close-panel",onClick:e,"aria-label":"\u0110\xF3ng",children:(0,Qe.jsx)(ac,{size:20})})]}),(0,Qe.jsxs)("p",{children:["Th\xE0nh t\xEDch \u0111\u01B0\u1EE3c l\u01B0u tr\xEAn thi\u1EBFt b\u1ECB. ",Kx?"B\u1EA3n GitHub Pages ch\u01A1i ho\xE0n to\xE0n ngo\u1EA1i tuy\u1EBFn.":"C\xF3 th\u1EC3 t\u1EF1 g\u1EEDi k\u1EBFt qu\u1EA3 l\xEAn m\xE1y ch\u1EE7."]}),(0,Qe.jsxs)("div",{className:"score-tabs",children:[(0,Qe.jsxs)("button",{className:i==="local"?"active":"",onClick:()=>{s("local"),n(sc(ic())),u("")},children:[(0,Qe.jsx)(Yu,{size:15})," THI\u1EBET B\u1ECA"]}),!Kx&&(0,Qe.jsxs)("button",{className:i==="server"?"active":"",onClick:()=>{S()},children:[(0,Qe.jsx)(qu,{size:15})," M\xC1Y CH\u1EE6"]})]}),(0,Qe.jsxs)("div",{className:"score-table",children:[(0,Qe.jsxs)("div",{className:"score-row score-header",children:[(0,Qe.jsx)("span",{children:"#"}),(0,Qe.jsx)("span",{children:"\u0110\u1EB6C V\u1EE4"}),(0,Qe.jsx)("span",{children:"\u0110\u1ED8 KH\xD3"}),(0,Qe.jsx)("span",{children:"CH\xCDNH X\xC1C"}),(0,Qe.jsx)("span",{children:"H\u1EA0 G\u1EE4C"})]}),a.length===0?(0,Qe.jsx)("div",{className:"score-empty",children:d?"\u0110ANG T\u1EA2I...":"CH\u01AFA C\xD3 TH\xC0NH T\xCDCH N\xC0O"}):a.slice(0,10).map((g,c)=>(0,Qe.jsxs)("div",{className:"score-row",children:[(0,Qe.jsx)("span",{children:String(c+1).padStart(2,"0")}),(0,Qe.jsx)("span",{children:g.name}),(0,Qe.jsx)("span",{children:n2[g.difficulty]}),(0,Qe.jsxs)("span",{children:[g.shots?Math.round(g.hits/g.shots*100):0,"%"]}),(0,Qe.jsx)("strong",{children:g.kills})]},`${g.date}-${c}`))]}),!Kx&&t&&(0,Qe.jsxs)("div",{className:"score-submit",children:[(0,Qe.jsx)("label",{htmlFor:"agent-name",children:"G\u1EECI L\u01AF\u1EE2T V\u1EEAA CH\u01A0I L\xCAN M\xC1Y CH\u1EE6"}),(0,Qe.jsxs)("div",{children:[(0,Qe.jsx)("input",{id:"agent-name",maxLength:16,value:r,onChange:g=>o(g.target.value),placeholder:"T\xEAn \u0111\u1EB7c v\u1EE5"}),(0,Qe.jsx)("button",{disabled:d||f,onClick:()=>{L()},children:f?"\u0110\xC3 G\u1EECI":"G\u1EECI \u0110I\u1EC2M \u2197"})]}),(0,Qe.jsx)("small",{children:"\u0110i\u1EC3m do ng\u01B0\u1EDDi ch\u01A1i g\u1EEDi, kh\xF4ng \u0111\u01B0\u1EE3c x\xE1c minh ch\u1ED1ng gian l\u1EADn."})]}),l&&(0,Qe.jsx)("div",{className:"score-message",children:l})]})})}var F=hn(dr()),Qx={health:100,ammo:30,kills:0,shots:0,hits:0,time:0,reloading:!1,medkits:3},pC=27,mC=[{x:-9,z:-8,w:5,d:3,h:2.5},{x:9,z:-10,w:5,d:3,h:2.5},{x:-15,z:-1,w:3,d:5,h:2.8},{x:15,z:1,w:3,d:5,h:2.8},{x:-7,z:7,w:4,d:3,h:1.5},{x:8,z:8,w:4,d:3,h:1.5},{x:0,z:-15,w:5,d:3,h:2},{x:0,z:18,w:5,d:3,h:1.5}];function gC(t){return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(Math.floor(t%60)).padStart(2,"0")}`}function jx(){let t=(0,Bt.useRef)(null),e=(0,Bt.useRef)(null),[a,n]=(0,Bt.useState)("ready"),[i,s]=(0,Bt.useState)("normal"),r=(0,Bt.useRef)("normal"),[o,l]=(0,Bt.useState)(!1),[u,d]=(0,Bt.useState)(null),[p,f]=(0,Bt.useState)(Qx),[h,S]=(0,Bt.useState)(!1),[L,g]=(0,Bt.useState)(""),[c,m]=(0,Bt.useState)(!1),[v,y]=(0,Bt.useState)(!1),[A,T]=(0,Bt.useState)(!1),[x,C]=(0,Bt.useState)(!1),D=(0,Bt.useRef)(null),E=(0,Bt.useRef)(null),U=(0,Bt.useCallback)(k=>{let q={name:"\u0110\u1EB6C V\u1EE4",kills:k.kills,shots:k.shots,hits:k.hits,time:k.time,difficulty:r.current,date:new Date().toISOString()};d(q);try{localStorage.setItem(Zx,JSON.stringify(sc([q,...ic()]).slice(0,20)))}catch{}},[]),G=(0,Bt.useCallback)(()=>{y(!0),D.current&&clearTimeout(D.current),D.current=setTimeout(()=>y(!1),130)},[]),K=(0,Bt.useCallback)(()=>{T(!0),E.current&&clearTimeout(E.current),E.current=setTimeout(()=>T(!1),250)},[]);(0,Bt.useEffect)(()=>{let k=t.current;if(!k)return;let q;try{q=new Ph({antialias:!0,powerPreference:"high-performance"})}catch{queueMicrotask(()=>C(!0));return}q.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),q.setSize(k.clientWidth,k.clientHeight),q.shadowMap.enabled=!0,q.shadowMap.type=Vd,q.outputColorSpace=Oa,q.toneMapping=Iu,q.toneMappingExposure=1.15,k.appendChild(q.domElement);let z=new lu;z.background=new Ye("#1a292d"),z.fog=new ou("#243638",.024);let te=new wa(70,k.clientWidth/k.clientHeight,.08,110);te.position.set(0,1.7,22),z.add(te),z.add(new yu("#c4e7de","#293338",2));let W=new Cu("#e0e8d3",2.8);W.position.set(-15,35,15),W.castShadow=!0,W.shadow.mapSize.set(1024,1024),W.shadow.camera.left=-35,W.shadow.camera.right=35,W.shadow.camera.top=35,W.shadow.camera.bottom=-35,W.shadow.normalBias=.04,z.add(W);let $=(J,Re={})=>new xu({color:J,roughness:.82,...Re}),ie=$("#404d49"),Le=$("#354441"),Ne=$("#202d2c"),Q=$("#81958a"),ge=$("#e0ad63",{emissive:"#9c5a1c",emissiveIntensity:.35}),Me=$("#8fffe1",{emissive:"#59f6c6",emissiveIntensity:2});function he(J,Re,Ze,lt,qt,wt,ga,Pe=z){let Ja=new Ca(new As(J,Re,Ze),lt);return Ja.position.set(qt,wt,ga),Ja.castShadow=!0,Ja.receiveShadow=!0,Pe.add(Ja),Ja}he(58,.4,58,ie,0,-.25,0);let Se=$("#74847a");for(let J=-24;J<=24;J+=6)he(.025,.012,54,Se,J,-.035,0),he(54,.012,.025,Se,0,-.034,J);for(let J of[-28,28]){he(1,9,58,Le,J,4.5,0),he(.12,.1,55,Me,J*.98,3.1,0);for(let Re=-24;Re<=24;Re+=8)he(1.5,10,1.4,Ne,J,5,Re)}for(let J of[-28,28]){he(58,9,1,Le,0,4.5,J),he(55,.1,.12,Me,0,3.1,J*.98);for(let Re=-24;Re<=24;Re+=8)he(1.4,10,1.5,Ne,Re,5,J)}for(let J=0;J<18;J++){let Re=J/18*Math.PI*2,Ze=38+J%3*5,lt=12+J%5*4;he(5+J%3,lt,5,J%2?Ne:Le,Math.sin(Re)*Ze,lt/2-1,Math.cos(Re)*Ze)}mC.forEach(J=>{he(J.w,J.h,J.d,Ne,J.x,J.h/2,J.z),he(J.w+.12,.12,J.d+.12,Q,J.x,J.h+.02,J.z),he(J.w*.55,.09,.04,ge,J.x,J.h*.65,J.z+J.d/2+.025);for(let Re of[-1,1])he(.1,J.h*.8,.08,Q,J.x+Re*(J.w/2-.25),J.h/2,J.z+J.d/2+.04)});let Be=new Ca(new gu(4.4,4.47,64),new Do({color:"#97c0a9",side:In}));Be.rotation.x=-Math.PI/2,Be.position.y=-.02,z.add(Be);let Et=Be.clone();Et.scale.setScalar(.75),z.add(Et);for(let J=0;J<8;J++){let Re=J*Math.PI/4,Ze=he(.12,.018,.8,ge,Math.sin(Re)*4.1,-.01,Math.cos(Re)*4.1);Ze.rotation.y=Re}let _e=new $n;_e.position.set(.42,-.42,-.83),_e.rotation.set(-.02,-.08,-.02),te.add(_e);let ot=$("#172321",{metalness:.55,roughness:.4}),pt=$("#586c61",{metalness:.5,roughness:.45});he(.25,.23,.8,ot,0,0,0,_e),he(.18,.12,.58,pt,0,.15,-.05,_e),he(.13,.13,.5,ot,0,.03,-.58,_e),he(.19,.16,.14,pt,0,.03,-.84,_e),he(.11,.32,.15,ot,0,-.24,.16,_e).rotation.x=-.3,he(.08,.08,.22,Me,.13,.02,.05,_e),he(.06,.07,.13,ge,0,.25,.1,_e);let Ve=new Mu("#ffcf85",0,8);Ve.position.set(0,.04,-.95),_e.add(Ve);let kt=[],Ht=$("#253533",{metalness:.5,roughness:.5}),ua=$("#879889",{metalness:.45,roughness:.45}),bt=$("#ff8a59",{emissive:"#ff5633",emissiveIntensity:2}),Ka=[];function Jt(J,Re,Ze){let lt=new $n;lt.position.set(J,0,Re),z.add(lt);let qt=he(.8,.9,.42,ua.clone(),0,1.37,0,lt),wt=[];he(.55,.5,.4,Ht,0,2.08,0,lt),he(.42,.11,.04,bt,0,2.08,.22,lt),he(.22,.19,.05,bt,0,1.42,.23,lt);for(let ga of[-1,1])wt.push(he(.22,.77,.25,Ht,ga*.55,1.32,0,lt)),he(.3,.26,.34,ua,ga*.55,1.7,0,lt),wt.push(he(.25,.85,.3,Ht,ga*.22,.48,0,lt)),he(.29,.18,.39,ua,ga*.22,.12,.04,lt);lt.traverse(ga=>{ga instanceof Ca&&(ga.userData.botIndex=Ze,Ka.push(ga))}),kt.push({group:lt,body:qt,limbs:wt,health:100,speed:1.3+Math.random()*.6,phase:Math.random()*7,cooldown:1+Math.random()*3,dead:!1,hitFlash:0,deathAt:0})}[[-11,-17],[0,-20],[11,-16],[-18,-12],[17,-4],[-13,2]].forEach(([J,Re],Ze)=>Jt(J,Re,Ze));let St="ready",Xe={...Qx},Qt=0,P=0,ia=!1,yt=0,vt=0,se=0,Vt=0,De=!0,Te=null,b=0,_=0,N=!1,ne=new Set,ee=new Au,le=new bu,de=new Je(0,0),Y=new H,Z=[];function fe(J,Re,Ze){let lt=new Tn().setFromPoints([J,Re]),qt=new Po({color:Ze,transparent:!0,opacity:.9,depthWrite:!1}),wt=new fu(lt,qt);z.add(wt),Z.push({line:wt,life:.13})}function I(J){let{line:Re}=Z[J];z.remove(Re),Re.geometry.dispose(),Re.material.dispose(),Z.splice(J,1)}function j(){St!=="playing"||Xe.medkits<=0||Xe.health>=100||(Xe.health=Math.min(100,Xe.health+35),Xe.medkits--,X(650,.2,"sine"),oe())}function X(J,Re,Ze="square",lt=.025){if(De)try{Te??(Te=new AudioContext),Te.state==="suspended"&&Te.resume();let qt=Te.createOscillator(),wt=Te.createGain();qt.type=Ze,qt.frequency.setValueAtTime(J,Te.currentTime),qt.frequency.exponentialRampToValueAtTime(Math.max(40,J*.45),Te.currentTime+Re),wt.gain.setValueAtTime(lt,Te.currentTime),wt.gain.exponentialRampToValueAtTime(.001,Te.currentTime+Re),qt.connect(wt),wt.connect(Te.destination),qt.start(),qt.stop(Te.currentTime+Re)}catch{}}function oe(){f({...Xe})}function ue(J){return Math.hypot(te.position.x-J.group.position.x,te.position.z-J.group.position.z)}function ce(J,Re,Ze=.45){return Math.abs(J)>pC||Math.abs(Re)>pC?!0:mC.some(lt=>Math.abs(J-lt.x)<lt.w/2+Ze&&Math.abs(Re-lt.z)<lt.d/2+Ze)}function Ee(){Xe={...Qx},se=0,vt=0,yt=0,te.position.set(0,1.7,22),Qt=0,P=0,te.rotation.set(0,0,0),kt.forEach((J,Re)=>{let Ze=[[-11,-17],[0,-20],[11,-16],[-18,-12],[17,-4],[-13,2]][Re];J.group.position.set(Ze[0],0,Ze[1]),J.health=100,J.dead=!1,J.group.visible=!0,J.group.rotation.z=0,J.hitFlash=0,J.cooldown=1+Math.random()*3}),oe()}function qe(){if(document.pointerLockElement!==q.domElement){let J=q.domElement.requestPointerLock();J&&typeof J.catch=="function"&&J.catch(()=>g("Kh\xF4ng th\u1EC3 kh\xF3a chu\u1ED9t. H\xE3y nh\u1EA5n v\xE0o m\xE0n h\xECnh \u0111\u1EC3 th\u1EED l\u1EA1i."))}}function re(){(St==="gameover"||St==="ready")&&Ee(),qe()}function we(){St!=="playing"||Xe.reloading||Xe.ammo===30||(Xe.reloading=!0,vt=se+1.4,X(260,.16,"triangle"),oe())}function ke(J){if(St!=="playing"||Xe.reloading||J-yt<.14)return;if(Xe.ammo<=0){we();return}yt=J,Xe.ammo--,Xe.shots++,b=1,Ve.intensity=7,X(125,.09,"sawtooth",.035),le.setFromCamera(de,te);let Ze=le.intersectObjects(Ka,!1).find(Pe=>{let Ja=kt[Pe.object.userData.botIndex];return Ja&&!Ja.dead}),lt=z.children.filter(Pe=>Pe instanceof Ca&&Pe!==Be&&Pe!==Et),qt=le.intersectObjects(lt,!1)[0],wt=!!(Ze&&qt&&qt.distance<Ze.distance-.05),ga=Ze&&!wt?Ze.point:qt?.point??le.ray.at(50,new H);if(fe(_e.localToWorld(new H(0,.04,-.95)),ga,"#bfffe2"),Ze&&!wt){let Pe=kt[Ze.object.userData.botIndex];Pe.health-=34,Pe.hitFlash=.18,Xe.hits++,G(),X(650,.07,"sine",.025),Pe.health<=0&&(Pe.dead=!0,Pe.deathAt=se,Xe.kills++,Pe.cooldown=se+3)}Xe.ammo===0&&we(),oe()}function xe(){document.pointerLockElement===q.domElement?(St="playing",n("playing"),g(""),ee.getDelta()):St==="playing"&&(St="paused",n("paused"),ia=!1,ne.clear())}function ct(J){St==="playing"&&(Qt-=J.movementX*.0022,P=Bu.clamp(P-J.movementY*.0022,-1.25,1.25),te.rotation.order="YXZ",te.rotation.set(P,Qt,0))}function Yt(J){J.button===0&&St==="playing"&&(ia=!0,ke(se))}function En(J){J.button===0&&(ia=!1)}function Wo(J){St==="playing"&&(["KeyW","KeyA","KeyS","KeyD","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(J.code)&&J.preventDefault(),ne.add(J.code),J.code==="KeyR"&&!J.repeat&&we(),J.code==="KeyQ"&&!J.repeat&&j())}function pr(J){ne.delete(J.code)}function rc(){ne.clear(),ia=!1}function mr(){k&&(q.setSize(k.clientWidth,k.clientHeight),te.aspect=k.clientWidth/k.clientHeight,te.updateProjectionMatrix())}function Xo(){m(!!document.fullscreenElement),mr()}function oi(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>g("Tr\xECnh duy\u1EC7t kh\xF4ng h\u1ED7 tr\u1EE3 to\xE0n m\xE0n h\xECnh."))}document.addEventListener("pointerlockchange",xe),document.addEventListener("mousemove",ct),document.addEventListener("mousedown",Yt),document.addEventListener("mouseup",En),window.addEventListener("keydown",Wo),window.addEventListener("keyup",pr),window.addEventListener("blur",rc),window.addEventListener("resize",mr),document.addEventListener("fullscreenchange",Xo),e.current={start:re,reload:we,fullscreen:oi,sound:J=>{De=J}};function gr(){if(N)return;_=requestAnimationFrame(gr);let J=Math.min(ee.getDelta(),.05);for(let Re=Z.length-1;Re>=0;Re--)Z[Re].life-=J,Z[Re].line.material.opacity=Math.max(0,Z[Re].life/.13),Z[Re].life<=0&&I(Re);if(St==="playing"){se+=J,Xe.time=se,Xe.reloading&&se>=vt&&(Xe.ammo=30,Xe.reloading=!1,X(450,.1,"triangle"),oe()),ia&&ke(se);let Re=Number(ne.has("KeyW")||ne.has("ArrowUp"))-Number(ne.has("KeyS")||ne.has("ArrowDown")),Ze=Number(ne.has("KeyD")||ne.has("ArrowRight"))-Number(ne.has("KeyA")||ne.has("ArrowLeft")),lt=Math.hypot(Re,Ze)||1,qt=(ne.has("ShiftLeft")?8:5.2)*J/lt,wt=(Ze*Math.cos(Qt)-Re*Math.sin(Qt))*qt,ga=(-Re*Math.cos(Qt)-Ze*Math.sin(Qt))*qt;ce(te.position.x+wt,te.position.z)||(te.position.x+=wt),ce(te.position.x,te.position.z+ga)||(te.position.z+=ga),b=Math.max(0,b-J*6),Ve.intensity=Math.max(0,Ve.intensity-J*65),_e.position.y=-.42-b*.08+(Re||Ze?Math.sin(se*10)*.012:0)-(Xe.reloading?.12:0),_e.position.z=-.83+b*.12,_e.rotation.z=Bu.lerp(_e.rotation.z,Xe.reloading?-.4:Ze*-.035-.02,J*6),_e.rotation.x=Bu.lerp(_e.rotation.x,Xe.reloading?-.25:-.02+b*.08,J*6),Et.rotation.z+=J*.1,kt.forEach((Pe,Ja)=>{if(St!=="playing")return;if(Pe.dead){if(Pe.group.rotation.z=Math.min(1.35,(se-Pe.deathAt)*4),se-Pe.deathAt>.8&&(Pe.group.visible=!1),se>=Pe.cooldown){let dn=[[-20,-20],[20,-18],[-20,10],[20,10],[0,-22],[-10,-20]][Ja];Pe.group.position.set(dn[0],0,dn[1]),Pe.health=100,Pe.dead=!1,Pe.group.visible=!0,Pe.group.rotation.z=0,Pe.cooldown=2}return}Pe.hitFlash=Math.max(0,Pe.hitFlash-J),Pe.body.material.emissive.set(Pe.hitFlash>0?"#ff6644":"#000000"),Pe.limbs.forEach((wn,dn)=>{wn.rotation.x=Math.sin(se*7+Pe.phase+(dn%2?Math.PI:0))*(ue(Pe)>9?.3:.03)}),Y.set(te.position.x-Pe.group.position.x,0,te.position.z-Pe.group.position.z);let oc=Y.length();if(Y.normalize(),Pe.group.rotation.y=Math.atan2(Y.x,Y.z),oc>9){let wn=Pe.group.position.x+Y.x*Pe.speed*(r.current==="easy"?.7:r.current==="hard"?1.45:1)*J,dn=Pe.group.position.z+Y.z*Pe.speed*(r.current==="easy"?.7:r.current==="hard"?1.45:1)*J;ce(wn,Pe.group.position.z,.6)||(Pe.group.position.x=wn),ce(Pe.group.position.x,dn,.6)||(Pe.group.position.z=dn)}else Pe.group.position.x+=Math.cos(se+Pe.phase)*J*.3;if(Pe.cooldown-=J,oc<22&&Pe.cooldown<=0){Pe.cooldown=(2.3+Math.random()*1.6)*(r.current==="easy"?1.4:r.current==="hard"?.7:1);let wn=Pe.group.position.clone().add(new H(0,1.5,0)),dn=te.position.clone().sub(wn),lc=dn.length();le.set(wn,dn.normalize()),le.intersectObjects(z.children.filter(w=>w instanceof Ca),!1).some(w=>w.distance<lc-.3)||(fe(wn,te.position.clone(),"#ff956c"),Xe.health=Math.max(0,Xe.health-(r.current==="easy"?5:r.current==="hard"?12:8)),K(),X(90,.15,"sawtooth",.025),oe()),Xe.health<=0&&(St="gameover",n("gameover"),U(Xe),ia=!1,document.pointerLockElement&&document.exitPointerLock(),oe())}}),se-Vt>.2&&(Vt=se,oe())}else St==="ready"&&(te.rotation.y=Math.sin(performance.now()*15e-5)*.06);q.render(z,te)}return gr(),()=>{for(N=!0,cancelAnimationFrame(_),e.current=null,document.removeEventListener("pointerlockchange",xe),document.removeEventListener("mousemove",ct),document.removeEventListener("mousedown",Yt),document.removeEventListener("mouseup",En),window.removeEventListener("keydown",Wo),window.removeEventListener("keyup",pr),window.removeEventListener("blur",rc),window.removeEventListener("resize",mr),document.removeEventListener("fullscreenchange",Xo),document.pointerLockElement===q.domElement&&document.exitPointerLock(),z.traverse(J=>{J instanceof Ca&&(J.geometry.dispose(),(Array.isArray(J.material)?J.material:[J.material]).forEach(Ze=>Ze.dispose()))});Z.length;)I(0);q.dispose(),q.domElement.remove(),Te&&Te.close(),D.current&&clearTimeout(D.current),E.current&&clearTimeout(E.current)}},[G,K,U]),(0,Bt.useEffect)(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(new URL("./sw.js",document.baseURI).href)},[]);let R=p.shots?Math.round(p.hits/p.shots*100):0;return(0,F.jsxs)("main",{className:"app-shell",children:[(0,F.jsx)("div",{className:"game-canvas",ref:t}),(0,F.jsx)("div",{className:"vignette"}),(0,F.jsx)("div",{className:`damage ${A?"show":""}`}),(0,F.jsxs)("header",{className:"topbar",children:[(0,F.jsxs)("div",{className:"brand",children:[(0,F.jsx)("div",{className:"brand-mark",children:(0,F.jsx)(qo,{size:21})}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("div",{className:"brand-name",children:["AIM",(0,F.jsx)("span",{children:"FORGE"}),(0,F.jsx)("i",{children:"\xAE"})]}),(0,F.jsx)("div",{className:"brand-sub",children:"TACTICAL TRAINING SYSTEM"})]})]}),(0,F.jsxs)("div",{className:"top-center",children:[(0,F.jsx)("span",{className:"status-dot"})," H\u1EC6 TH\u1ED0NG S\u1EB4N S\xC0NG ",(0,F.jsx)("span",{className:"top-divider"})," CH\u1EBE \u0110\u1ED8 NGO\u1EA0I TUY\u1EBEN"]}),(0,F.jsxs)("div",{className:"top-actions",children:[(0,F.jsx)("button",{title:h?"B\u1EADt \xE2m thanh":"T\u1EAFt \xE2m thanh",onClick:()=>{S(!h),e.current?.sound(h)},children:h?(0,F.jsx)(tc,{size:17}):(0,F.jsx)(ec,{size:17})}),(0,F.jsx)("button",{title:c?"Tho\xE1t to\xE0n m\xE0n h\xECnh":"To\xE0n m\xE0n h\xECnh",onClick:()=>e.current?.fullscreen(),children:(0,F.jsx)(Wu,{size:17})}),(0,F.jsxs)("div",{className:"profile",children:[(0,F.jsx)("span",{children:"01"}),(0,F.jsxs)("div",{children:[(0,F.jsx)("b",{children:"\u0110\u1EB6C V\u1EE4"}),(0,F.jsx)("small",{children:"NG\u01AF\u1EDCI CH\u01A0I"})]})]})]})]}),(0,F.jsxs)("div",{className:"side-label left-label",children:[(0,F.jsx)("span",{children:"AF / TRAINING GROUNDS"}),(0,F.jsx)("i",{})," ",(0,F.jsx)("span",{children:"SECTOR 07"})]}),(0,F.jsxs)("div",{className:"side-label right-label",children:[(0,F.jsx)("span",{children:"SIMULATION ENVIRONMENT"}),(0,F.jsx)("i",{})," ",(0,F.jsx)("span",{children:"V.01"})]}),a==="playing"&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:"play-top",children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"live-dot"})," \u0110ANG HU\u1EA4N LUY\u1EC6N ",(0,F.jsx)("small",{children:" / \u0110\u1EA4U V\u1EDAI BOT"})]}),(0,F.jsx)("strong",{children:gC(p.time)})]}),(0,F.jsxs)("div",{className:`crosshair ${v?"hit":""}`,children:[(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("i",{})]}),(0,F.jsxs)("div",{className:"playing-hud",children:[(0,F.jsxs)("div",{className:"hud-health",children:[(0,F.jsxs)("div",{className:"hud-label",children:[(0,F.jsx)(ju,{size:14})," SINH L\u1EF0C"]}),(0,F.jsxs)("div",{className:"hud-value",children:[p.health,(0,F.jsx)("small",{children:" / 100"})]}),(0,F.jsx)("div",{className:"health-track",children:(0,F.jsx)("i",{style:{width:`${p.health}%`}})})]}),(0,F.jsxs)("div",{className:"hud-score",children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"med-icon",children:"\u271A"})," [Q] H\u1ED2I M\xC1U ",(0,F.jsx)("strong",{children:p.medkits})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)($u,{size:14})," H\u1EA0 G\u1EE4C ",(0,F.jsx)("strong",{children:String(p.kills).padStart(2,"0")})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(Xu,{size:14})," CH\xCDNH X\xC1C ",(0,F.jsxs)("strong",{children:[R,"%"]})]})]}),(0,F.jsxs)("div",{className:"hud-ammo",children:[(0,F.jsxs)("div",{className:"hud-label",children:["AEGIS-IX ",(0,F.jsx)("span",{children:" / \u0110\u1EA0N D\u01AF\u1EE2C"})]}),(0,F.jsxs)("div",{className:"hud-value",children:[String(p.ammo).padStart(2,"0"),(0,F.jsx)("small",{children:" / \u221E"})]}),(0,F.jsx)("div",{className:"ammo-caption",children:p.reloading?"\u0110ANG N\u1EA0P \u0110\u1EA0N...":"[ R ] N\u1EA0P \u0110\u1EA0N"})]})]})]}),a!=="playing"&&(0,F.jsxs)("div",{className:"overlay",children:[(0,F.jsxs)("div",{className:"intro",children:[(0,F.jsxs)("div",{className:"eyebrow",children:[(0,F.jsx)("span",{className:"eyebrow-line"})," PH\xD2NG HU\u1EA4N LUY\u1EC6N CHI\u1EBEN THU\u1EACT ",(0,F.jsx)("span",{className:"eyebrow-number",children:" / 01"})]}),(0,F.jsx)("h1",{children:a==="gameover"?(0,F.jsxs)(F.Fragment,{children:["NHI\u1EC6M V\u1EE4",(0,F.jsx)("br",{}),(0,F.jsx)("em",{children:"K\u1EBET TH\xDAC."})]}):a==="paused"?(0,F.jsxs)(F.Fragment,{children:["T\u1EA0M",(0,F.jsx)("br",{}),(0,F.jsx)("em",{children:"D\u1EEANG."})]}):(0,F.jsxs)(F.Fragment,{children:["S\u1EB4N S\xC0NG",(0,F.jsx)("br",{}),(0,F.jsx)("em",{children:"CHI\u1EBEN \u0110\u1EA4U."})]})}),(0,F.jsx)("p",{children:a==="gameover"?`B\u1EA1n \u0111\xE3 h\u1EA1 ${p.kills} bot trong ${gC(p.time)}. H\xE3y quay l\u1EA1i v\xE0 ph\xE1 k\u1EF7 l\u1EE5c c\u1EE7a m\xECnh.`:a==="paused"?"M\xF4 ph\u1ECFng \u0111ang t\u1EA1m d\u1EEBng. Ti\u1EBFp t\u1EE5c khi b\u1EA1n \u0111\xE3 s\u1EB5n s\xE0ng.":"R\xE8n luy\u1EC7n ph\u1EA3n x\u1EA1, l\xE0m ch\u1EE7 t\xE2m ng\u1EAFm. B\u01B0\u1EDBc v\xE0o \u0111\u1EA5u tr\u01B0\u1EDDng v\xE0 \u0111\u1ED1i \u0111\u1EA7u v\u1EDBi c\xE1c m\u1EE5c ti\xEAu AI."}),(0,F.jsxs)("div",{className:"mode-card",children:[(0,F.jsx)("div",{className:"mode-icon",children:(0,F.jsx)(qo,{size:22})}),(0,F.jsxs)("div",{className:"mode-copy",children:[(0,F.jsx)("small",{children:"CH\u1EBE \u0110\u1ED8 \u0110\xC3 CH\u1ECCN"}),(0,F.jsx)("b",{children:"\u0110\u1EA4U V\u1EDAI BOT"}),(0,F.jsx)("span",{children:"G\xF3c nh\xECn th\u1EE9 nh\u1EA5t \xB7 Kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian"})]}),(0,F.jsx)("span",{className:"mode-check",children:"\u2713"})]}),(0,F.jsxs)("div",{className:"difficulty-selector",children:[(0,F.jsx)("span",{children:"\u0110\u1ED8 KH\xD3"}),[["easy","D\u1EC4"],["normal","TH\u01AF\u1EDCNG"],["hard","KH\xD3"]].map(([k,q])=>(0,F.jsx)("button",{disabled:a==="paused",className:i===k?"selected":"",onClick:()=>{r.current=k,s(k)},children:q},k))]}),(0,F.jsxs)("div",{className:"actions",children:[(0,F.jsxs)("button",{className:"start-button",onClick:()=>e.current?.start(),disabled:x,children:[(0,F.jsx)("span",{children:a==="paused"?"TI\u1EBEP T\u1EE4C":a==="gameover"?"CH\u01A0I L\u1EA0I":"B\u1EAET \u0110\u1EA6U HU\u1EA4N LUY\u1EC6N"}),(0,F.jsx)("span",{className:"arrow",children:"\u2197"})]}),(0,F.jsx)("button",{className:"fullscreen-button",onClick:()=>e.current?.fullscreen(),title:"B\u1EADt / t\u1EAFt to\xE0n m\xE0n h\xECnh",children:(0,F.jsx)(Ju,{size:18})})]}),(0,F.jsxs)("div",{className:"intro-bottom",children:[(0,F.jsxs)("div",{className:"offline-note",children:[(0,F.jsx)("span",{})," CH\u01A0I NGAY \xB7 KH\xD4NG C\u1EA6N \u0110\u0102NG NH\u1EACP"]}),(0,F.jsxs)("button",{className:"score-open",onClick:()=>l(!0),children:[(0,F.jsx)(fr,{size:14})," TH\xC0NH T\xCDCH \u2197"]})]}),L&&(0,F.jsx)("div",{className:"notice",children:L}),x&&(0,F.jsx)("div",{className:"notice",children:"Kh\xF4ng th\u1EC3 kh\u1EDFi t\u1EA1o WebGL. H\xE3y b\u1EADt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng ho\u1EB7c th\u1EED tr\xECnh duy\u1EC7t kh\xE1c."})]}),(0,F.jsxs)("div",{className:"environment-tag",children:[(0,F.jsx)("span",{className:"tag-cross",children:"\u2733"}),(0,F.jsxs)("div",{children:[(0,F.jsx)("small",{children:"\u0110\u1ECAA \u0110I\u1EC2M HU\u1EA4N LUY\u1EC6N"}),(0,F.jsx)("b",{children:"THE PROVING GROUND"}),(0,F.jsx)("span",{children:"SECTOR 07 \u2014 M\xD4 PH\u1ECENG CHI\u1EBEN \u0110\u1EA4U"})]})]}),(0,F.jsxs)("div",{className:"coordinates",children:[`35\xB0 41' 22.8" N`,(0,F.jsx)("br",{}),`139\xB0 41' 30.1" E`]})]}),o&&(0,F.jsx)(Jx,{latest:a==="gameover"?u:null,onClose:()=>l(!1)}),(0,F.jsxs)("footer",{className:"bottom-bar",children:[(0,F.jsxs)("div",{className:"controls",children:[(0,F.jsxs)("div",{children:[(0,F.jsx)(Ku,{size:17}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"W A S D"}),(0,F.jsx)("small",{children:"DI CHUY\u1EC2N"})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(Qu,{size:16}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"CHU\u1ED8T"}),(0,F.jsx)("small",{children:"NG\u1EAEM & B\u1EAEN"})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"key-icon",children:"R"}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"PH\xCDM R"}),(0,F.jsx)("small",{children:"N\u1EA0P \u0110\u1EA0N"})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"key-icon",children:"ESC"}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"ESC"}),(0,F.jsx)("small",{children:"T\u1EA0M D\u1EEANG"})]})]})]}),(0,F.jsxs)("div",{className:"bottom-right",children:[(0,F.jsx)(Zu,{size:16}),(0,F.jsx)("span",{children:"\u0110EO TAI NGHE \u0110\u1EC2 C\xD3 TR\u1EA2I NGHI\u1EC6M T\u1ED0T NH\u1EA4T"}),(0,F.jsx)("i",{})," ",(0,F.jsxs)("b",{children:[(0,F.jsx)(nc,{size:13})," AIMFORGE ENGINE"]})]})]}),(0,F.jsxs)("div",{className:"mobile-warning",children:[(0,F.jsx)(Vu,{size:20}),(0,F.jsx)("b",{children:"C\u1EA6N B\xC0N PH\xCDM & CHU\u1ED8T"}),(0,F.jsx)("span",{children:"Vui l\xF2ng m\u1EDF tr\xF2 ch\u01A1i tr\xEAn m\xE1y t\xEDnh \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7."})]})]})}var yC=hn(dr()),xC=document.getElementById("root");xC&&(0,SC.createRoot)(xC).render((0,yC.jsx)(jx,{}));})();
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
lucide-react/dist/esm/icons/cloud.mjs:
lucide-react/dist/esm/icons/crosshair.mjs:
lucide-react/dist/esm/icons/expand.mjs:
lucide-react/dist/esm/icons/gauge.mjs:
lucide-react/dist/esm/icons/hard-drive.mjs:
lucide-react/dist/esm/icons/headphones.mjs:
lucide-react/dist/esm/icons/keyboard.mjs:
lucide-react/dist/esm/icons/maximize.mjs:
lucide-react/dist/esm/icons/mouse-pointer-2.mjs:
lucide-react/dist/esm/icons/shield.mjs:
lucide-react/dist/esm/icons/target.mjs:
lucide-react/dist/esm/icons/trophy.mjs:
lucide-react/dist/esm/icons/volume-2.mjs:
lucide-react/dist/esm/icons/volume-x.mjs:
lucide-react/dist/esm/icons/x.mjs:
lucide-react/dist/esm/icons/zap.mjs:
lucide-react/dist/esm/lucide-react.mjs:
  (**
   * @license lucide-react v1.70.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
