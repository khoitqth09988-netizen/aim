"use strict";(()=>{var wb=Object.create;var n0=Object.defineProperty;var Rb=Object.getOwnPropertyDescriptor;var Db=Object.getOwnPropertyNames;var Pb=Object.getPrototypeOf,Ub=Object.prototype.hasOwnProperty;var Bn=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}};var Nb=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Db(e))!Ub.call(t,i)&&i!==a&&n0(t,i,{get:()=>e[i],enumerable:!(n=Rb(e,i))||n.enumerable});return t};var Ea=(t,e,a)=>(a=t!=null?wb(Pb(t)):{},Nb(e||!t||!t.__esModule?n0(a,"default",{value:t,enumerable:!0}):a,t));var h0=Bn(Pt=>{"use strict";function qh(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<dc(i,e))t[n]=e,t[a]=i,a=n;else break e}}function Fn(t){return t.length===0?null:t[0]}function pc(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>dc(o,a))l<i&&0>dc(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>dc(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function dc(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Pt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(i0=performance,Pt.unstable_now=function(){return i0.now()}):(Hh=Date,s0=Hh.now(),Pt.unstable_now=function(){return Hh.now()-s0});var i0,Hh,s0,ai=[],Gi=[],Ob=1,rn=null,ya=3,Wh=!1,Jo=!1,Qo=!1,Xh=!1,l0=typeof setTimeout=="function"?setTimeout:null,u0=typeof clearTimeout=="function"?clearTimeout:null,r0=typeof setImmediate<"u"?setImmediate:null;function hc(t){for(var e=Fn(Gi);e!==null;){if(e.callback===null)pc(Gi);else if(e.startTime<=t)pc(Gi),e.sortIndex=e.expirationTime,qh(ai,e);else break;e=Fn(Gi)}}function Yh(t){if(Qo=!1,hc(t),!Jo)if(Fn(ai)!==null)Jo=!0,gr||(gr=!0,mr());else{var e=Fn(Gi);e!==null&&Zh(Yh,e.startTime-t)}}var gr=!1,jo=-1,c0=5,f0=-1;function d0(){return Xh?!0:!(Pt.unstable_now()-f0<c0)}function Gh(){if(Xh=!1,gr){var t=Pt.unstable_now();f0=t;var e=!0;try{e:{Jo=!1,Qo&&(Qo=!1,u0(jo),jo=-1),Wh=!0;var a=ya;try{t:{for(hc(t),rn=Fn(ai);rn!==null&&!(rn.expirationTime>t&&d0());){var n=rn.callback;if(typeof n=="function"){rn.callback=null,ya=rn.priorityLevel;var i=n(rn.expirationTime<=t);if(t=Pt.unstable_now(),typeof i=="function"){rn.callback=i,hc(t),e=!0;break t}rn===Fn(ai)&&pc(ai),hc(t)}else pc(ai);rn=Fn(ai)}if(rn!==null)e=!0;else{var s=Fn(Gi);s!==null&&Zh(Yh,s.startTime-t),e=!1}}break e}finally{rn=null,ya=a,Wh=!1}e=void 0}}finally{e?mr():gr=!1}}}var mr;typeof r0=="function"?mr=function(){r0(Gh)}:typeof MessageChannel<"u"?(Vh=new MessageChannel,o0=Vh.port2,Vh.port1.onmessage=Gh,mr=function(){o0.postMessage(null)}):mr=function(){l0(Gh,0)};var Vh,o0;function Zh(t,e){jo=l0(function(){t(Pt.unstable_now())},e)}Pt.unstable_IdlePriority=5;Pt.unstable_ImmediatePriority=1;Pt.unstable_LowPriority=4;Pt.unstable_NormalPriority=3;Pt.unstable_Profiling=null;Pt.unstable_UserBlockingPriority=2;Pt.unstable_cancelCallback=function(t){t.callback=null};Pt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c0=0<t?Math.floor(1e3/t):5};Pt.unstable_getCurrentPriorityLevel=function(){return ya};Pt.unstable_next=function(t){switch(ya){case 1:case 2:case 3:var e=3;break;default:e=ya}var a=ya;ya=e;try{return t()}finally{ya=a}};Pt.unstable_requestPaint=function(){Xh=!0};Pt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=ya;ya=t;try{return e()}finally{ya=a}};Pt.unstable_scheduleCallback=function(t,e,a){var n=Pt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:Ob++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,qh(Gi,t),Fn(ai)===null&&t===Fn(Gi)&&(Qo?(u0(jo),jo=-1):Qo=!0,Zh(Yh,a-n))):(t.sortIndex=i,qh(ai,t),Jo||Wh||(Jo=!0,gr||(gr=!0,mr()))),t};Pt.unstable_shouldYield=d0;Pt.unstable_wrapCallback=function(t){var e=ya;return function(){var a=ya;ya=e;try{return t.apply(this,arguments)}finally{ya=a}}}});var m0=Bn((S2,p0)=>{"use strict";p0.exports=h0()});var A0=Bn(qe=>{"use strict";var Qh=Symbol.for("react.transitional.element"),Bb=Symbol.for("react.portal"),Fb=Symbol.for("react.fragment"),zb=Symbol.for("react.strict_mode"),kb=Symbol.for("react.profiler"),Hb=Symbol.for("react.consumer"),Gb=Symbol.for("react.context"),Vb=Symbol.for("react.forward_ref"),qb=Symbol.for("react.suspense"),Wb=Symbol.for("react.memo"),v0=Symbol.for("react.lazy"),Xb=Symbol.for("react.activity"),g0=Symbol.iterator;function Yb(t){return t===null||typeof t!="object"?null:(t=g0&&t[g0]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M0=Object.assign,L0={};function Sr(t,e,a){this.props=t,this.context=e,this.refs=L0,this.updater=a||_0}Sr.prototype.isReactComponent={};Sr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function b0(){}b0.prototype=Sr.prototype;function jh(t,e,a){this.props=t,this.context=e,this.refs=L0,this.updater=a||_0}var $h=jh.prototype=new b0;$h.constructor=jh;M0($h,Sr.prototype);$h.isPureReactComponent=!0;var x0=Array.isArray;function Jh(){}var Tt={H:null,A:null,T:null,S:null},C0=Object.prototype.hasOwnProperty;function ep(t,e,a){var n=a.ref;return{$$typeof:Qh,type:t,key:e,ref:n!==void 0?n:null,props:a}}function Zb(t,e){return ep(t.type,e,t.props)}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qh}function Kb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var S0=/\/+/g;function Kh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kb(""+t.key):e.toString(36)}function Jb(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Jh,Jh):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function xr(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Qh:case Bb:r=!0;break;case v0:return r=t._init,xr(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+Kh(t,0):n,x0(i)?(a="",r!=null&&(a=r.replace(S0,"$&/")+"/"),xr(i,e,a,"",function(u){return u})):i!=null&&(tp(i)&&(i=Zb(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(S0,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(x0(t))for(var l=0;l<t.length;l++)n=t[l],s=o+Kh(n,l),r+=xr(n,e,a,s,i);else if(l=Yb(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+Kh(n,l++),r+=xr(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return xr(Jb(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function mc(t,e,a){if(t==null)return t;var n=[],i=0;return xr(t,n,"","",function(s){return e.call(a,s,i++)}),n}function Qb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var y0=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},jb={map:mc,forEach:function(t,e,a){mc(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return mc(t,function(){e++}),e},toArray:function(t){return mc(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Activity=Xb;qe.Children=jb;qe.Component=Sr;qe.Fragment=Fb;qe.Profiler=kb;qe.PureComponent=jh;qe.StrictMode=zb;qe.Suspense=qb;qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;qe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Tt.H.useMemoCache(t)}};qe.cache=function(t){return function(){return t.apply(null,arguments)}};qe.cacheSignal=function(){return null};qe.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=M0({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!C0.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return ep(t.type,i,n)};qe.createContext=function(t){return t={$$typeof:Gb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Hb,_context:t},t};qe.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)C0.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return ep(t,s,i)};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:Vb,render:t}};qe.isValidElement=tp;qe.lazy=function(t){return{$$typeof:v0,_payload:{_status:-1,_result:t},_init:Qb}};qe.memo=function(t,e){return{$$typeof:Wb,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=Tt.T,a={};Tt.T=a;try{var n=t(),i=Tt.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(Jh,y0)}catch(s){y0(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Tt.T=e}};qe.unstable_useCacheRefresh=function(){return Tt.H.useCacheRefresh()};qe.use=function(t){return Tt.H.use(t)};qe.useActionState=function(t,e,a){return Tt.H.useActionState(t,e,a)};qe.useCallback=function(t,e){return Tt.H.useCallback(t,e)};qe.useContext=function(t){return Tt.H.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t,e){return Tt.H.useDeferredValue(t,e)};qe.useEffect=function(t,e){return Tt.H.useEffect(t,e)};qe.useEffectEvent=function(t){return Tt.H.useEffectEvent(t)};qe.useId=function(){return Tt.H.useId()};qe.useImperativeHandle=function(t,e,a){return Tt.H.useImperativeHandle(t,e,a)};qe.useInsertionEffect=function(t,e){return Tt.H.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return Tt.H.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return Tt.H.useMemo(t,e)};qe.useOptimistic=function(t,e){return Tt.H.useOptimistic(t,e)};qe.useReducer=function(t,e,a){return Tt.H.useReducer(t,e,a)};qe.useRef=function(t){return Tt.H.useRef(t)};qe.useState=function(t){return Tt.H.useState(t)};qe.useSyncExternalStore=function(t,e,a){return Tt.H.useSyncExternalStore(t,e,a)};qe.useTransition=function(){return Tt.H.useTransition()};qe.version="19.2.6"});var ni=Bn((v2,T0)=>{"use strict";T0.exports=A0()});var E0=Bn(Ra=>{"use strict";var $b=ni();function I0(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Vi(){}var wa={d:{f:Vi,r:function(){throw Error(I0(522))},D:Vi,C:Vi,L:Vi,m:Vi,X:Vi,S:Vi,M:Vi},p:0,findDOMNode:null},eC=Symbol.for("react.portal");function tC(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eC,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var $o=$b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wa;Ra.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(I0(299));return tC(t,e,null,a)};Ra.flushSync=function(t){var e=$o.T,a=wa.p;try{if($o.T=null,wa.p=2,t)return t()}finally{$o.T=e,wa.p=a,wa.d.f()}};Ra.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,wa.d.C(t,e))};Ra.prefetchDNS=function(t){typeof t=="string"&&wa.d.D(t)};Ra.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=gc(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?wa.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&wa.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ra.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=gc(e.as,e.crossOrigin);wa.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&wa.d.M(t)};Ra.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=gc(a,e.crossOrigin);wa.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ra.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=gc(e.as,e.crossOrigin);wa.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else wa.d.m(t)};Ra.requestFormReset=function(t){wa.d.r(t)};Ra.unstable_batchedUpdates=function(t,e){return t(e)};Ra.useFormState=function(t,e,a){return $o.H.useFormState(t,e,a)};Ra.useFormStatus=function(){return $o.H.useHostTransitionStatus()};Ra.version="19.2.6"});var D0=Bn((M2,R0)=>{"use strict";function w0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0)}catch(t){console.error(t)}}w0(),R0.exports=E0()});var q_=Bn(Gf=>{"use strict";var $t=m0(),iy=ni(),aC=D0();function ae(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function sy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function ry(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oy(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function P0(t){if(zl(t)!==t)throw Error(ae(188))}function nC(t){var e=t.alternate;if(!e){if(e=zl(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return P0(i),t;if(s===n)return P0(i),e;s=s.sibling}throw Error(ae(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error(ae(189))}}if(a.alternate!==n)throw Error(ae(190))}if(a.tag!==3)throw Error(ae(188));return a.stateNode.current===a?t:e}function ly(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=ly(t),e!==null)return e;t=t.sibling}return null}var wt=Object.assign,iC=Symbol.for("react.element"),xc=Symbol.for("react.transitional.element"),ol=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),uy=Symbol.for("react.strict_mode"),Np=Symbol.for("react.profiler"),cy=Symbol.for("react.consumer"),fi=Symbol.for("react.context"),wm=Symbol.for("react.forward_ref"),Op=Symbol.for("react.suspense"),Bp=Symbol.for("react.suspense_list"),Rm=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),Fp=Symbol.for("react.activity"),sC=Symbol.for("react.memo_cache_sentinel"),U0=Symbol.iterator;function el(t){return t===null||typeof t!="object"?null:(t=U0&&t[U0]||t["@@iterator"],typeof t=="function"?t:null)}var rC=Symbol.for("react.client.reference");function zp(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rC?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case br:return"Fragment";case Np:return"Profiler";case uy:return"StrictMode";case Op:return"Suspense";case Bp:return"SuspenseList";case Fp:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ol:return"Portal";case fi:return t.displayName||"Context";case cy:return(t._context.displayName||"Context")+".Consumer";case wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rm:return e=t.displayName||null,e!==null?e:zp(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return zp(t(e))}catch{}}return null}var ll=Array.isArray,Oe=iy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft=aC.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Hs={pending:!1,data:null,method:null,action:null},kp=[],Cr=-1;function Vn(t){return{current:t}}function sa(t){0>Cr||(t.current=kp[Cr],kp[Cr]=null,Cr--)}function Ct(t,e){Cr++,kp[Cr]=t.current,t.current=e}var Gn=Vn(null),Cl=Vn(null),ts=Vn(null),Jc=Vn(null);function Qc(t,e){switch(Ct(ts,e),Ct(Cl,t),Ct(Gn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?HS(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=HS(e),t=w_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}sa(Gn),Ct(Gn,t)}function Vr(){sa(Gn),sa(Cl),sa(ts)}function Hp(t){t.memoizedState!==null&&Ct(Jc,t);var e=Gn.current,a=w_(e,t.type);e!==a&&(Ct(Cl,t),Ct(Gn,a))}function jc(t){Cl.current===t&&(sa(Gn),sa(Cl)),Jc.current===t&&(sa(Jc),Ol._currentValue=Hs)}var ap,N0;function Bs(t){if(ap===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ap=e&&e[1]||"",N0=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ap+t+N0}var np=!1;function ip(t,e){if(!t||np)return"";np=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var f=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){f=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){f=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var d=`
`+l[n].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=n&&0<=i);break}}}finally{np=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Bs(a):""}function oC(t,e){switch(t.tag){case 26:case 27:case 5:return Bs(t.type);case 16:return Bs("Lazy");case 13:return t.child!==e&&e!==null?Bs("Suspense Fallback"):Bs("Suspense");case 19:return Bs("SuspenseList");case 0:case 15:return ip(t.type,!1);case 11:return ip(t.type.render,!1);case 1:return ip(t.type,!0);case 31:return Bs("Activity");default:return""}}function O0(t){try{var e="",a=null;do e+=oC(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Gp=Object.prototype.hasOwnProperty,Dm=$t.unstable_scheduleCallback,sp=$t.unstable_cancelCallback,lC=$t.unstable_shouldYield,uC=$t.unstable_requestPaint,Ka=$t.unstable_now,cC=$t.unstable_getCurrentPriorityLevel,fy=$t.unstable_ImmediatePriority,dy=$t.unstable_UserBlockingPriority,$c=$t.unstable_NormalPriority,fC=$t.unstable_LowPriority,hy=$t.unstable_IdlePriority,dC=$t.log,hC=$t.unstable_setDisableYieldValue,kl=null,Ja=null;function Ji(t){if(typeof dC=="function"&&hC(t),Ja&&typeof Ja.setStrictMode=="function")try{Ja.setStrictMode(kl,t)}catch{}}var Qa=Math.clz32?Math.clz32:gC,pC=Math.log,mC=Math.LN2;function gC(t){return t>>>=0,t===0?32:31-(pC(t)/mC|0)|0}var Sc=256,yc=262144,vc=4194304;function Fs(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Af(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=Fs(n):(r&=o,r!==0?i=Fs(r):a||(a=o&~t,a!==0&&(i=Fs(a))))):(o=n&~s,o!==0?i=Fs(o):r!==0?i=Fs(r):a||(a=n&~t,a!==0&&(i=Fs(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function Hl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function xC(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function py(){var t=vc;return vc<<=1,(vc&62914560)===0&&(vc=4194304),t}function rp(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Gl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function SC(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var d=31-Qa(a),p=1<<d;o[d]=0,l[d]=-1;var f=u[d];if(f!==null)for(u[d]=null,d=0;d<f.length;d++){var h=f[d];h!==null&&(h.lane&=-536870913)}a&=~p}n!==0&&my(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function my(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Qa(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function gy(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Qa(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function xy(t,e){var a=e&-e;return a=(a&42)!==0?1:Pm(a),(a&(t.suspendedLanes|e))!==0?0:a}function Pm(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Um(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Sy(){var t=ft.p;return t!==0?t:(t=window.event,t===void 0?32:H_(t.type))}function B0(t,e){var a=ft.p;try{return ft.p=t,e()}finally{ft.p=a}}var ps=Math.random().toString(36).slice(2),da="__reactFiber$"+ps,Ha="__reactProps$"+ps,eo="__reactContainer$"+ps,Vp="__reactEvents$"+ps,yC="__reactListeners$"+ps,vC="__reactHandles$"+ps,F0="__reactResources$"+ps,Vl="__reactMarker$"+ps;function Nm(t){delete t[da],delete t[Ha],delete t[Vp],delete t[yC],delete t[vC]}function Ar(t){var e=t[da];if(e)return e;for(var a=t.parentNode;a;){if(e=a[eo]||a[da]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=XS(t);t!==null;){if(a=t[da])return a;t=XS(t)}return e}t=a,a=t.parentNode}return null}function to(t){if(t=t[da]||t[eo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function ul(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ae(33))}function Or(t){var e=t[F0];return e||(e=t[F0]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ia(t){t[Vl]=!0}var yy=new Set,vy={};function Qs(t,e){qr(t,e),qr(t+"Capture",e)}function qr(t,e){for(vy[t]=e,t=0;t<e.length;t++)yy.add(e[t])}var _C=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),z0={},k0={};function MC(t){return Gp.call(k0,t)?!0:Gp.call(z0,t)?!1:_C.test(t)?k0[t]=!0:(z0[t]=!0,!1)}function Nc(t,e,a){if(MC(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function _c(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function ii(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function ln(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LC(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qp(t){if(!t._valueTracker){var e=_y(t)?"checked":"value";t._valueTracker=LC(t,e,""+t[e])}}function My(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=_y(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function ef(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var bC=/[\n"\\]/g;function fn(t){return t.replace(bC,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Wp(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ln(e)):t.value!==""+ln(e)&&(t.value=""+ln(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Xp(t,r,ln(e)):a!=null?Xp(t,r,ln(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+ln(o):t.removeAttribute("name")}function Ly(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){qp(t);return}a=a!=null?""+ln(a):"",e=e!=null?""+ln(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),qp(t)}function Xp(t,e,a){e==="number"&&ef(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Br(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+ln(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function by(t,e,a){if(e!=null&&(e=""+ln(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ln(a):""}function Cy(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(ae(92));if(ll(n)){if(1<n.length)throw Error(ae(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=ln(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),qp(t)}function Wr(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var CC=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function H0(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||CC.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Ay(t,e,a){if(e!=null&&typeof e!="object")throw Error(ae(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&H0(t,i,n)}else for(var s in e)e.hasOwnProperty(s)&&H0(t,s,e[s])}function Om(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var AC=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),TC=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oc(t){return TC.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function di(){}var Yp=null;function Bm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Fr=null;function G0(t){var e=to(t);if(e&&(t=e.stateNode)){var a=t[Ha]||null;e:switch(t=e.stateNode,e.type){case"input":if(Wp(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fn(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Ha]||null;if(!i)throw Error(ae(90));Wp(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&My(n)}break e;case"textarea":by(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&Br(t,!!a.multiple,e,!1)}}}var op=!1;function Ty(t,e,a){if(op)return t(e,a);op=!0;try{var n=t(e);return n}finally{if(op=!1,(Tr!==null||Fr!==null)&&(Ff(),Tr&&(e=Tr,t=Fr,Fr=Tr=null,G0(e),t)))for(e=0;e<t.length;e++)G0(t[e])}}function Al(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Ha]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(ae(231,e,typeof a));return a}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zp=!1;if(xi)try{yr={},Object.defineProperty(yr,"passive",{get:function(){Zp=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{Zp=!1}var yr,Qi=null,Fm=null,Bc=null;function Iy(){if(Bc)return Bc;var t,e=Fm,a=e.length,n,i="value"in Qi?Qi.value:Qi.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return Bc=i.slice(t,1<n?1-n:void 0)}function Fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mc(){return!0}function V0(){return!1}function Ga(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Mc:V0,this.isPropagationStopped=V0,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mc)},persist:function(){},isPersistent:Mc}),e}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tf=Ga(js),ql=wt({},js,{view:0,detail:0}),IC=Ga(ql),lp,up,tl,If=wt({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==tl&&(tl&&t.type==="mousemove"?(lp=t.screenX-tl.screenX,up=t.screenY-tl.screenY):up=lp=0,tl=t),lp)},movementY:function(t){return"movementY"in t?t.movementY:up}}),q0=Ga(If),EC=wt({},If,{dataTransfer:0}),wC=Ga(EC),RC=wt({},ql,{relatedTarget:0}),cp=Ga(RC),DC=wt({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),PC=Ga(DC),UC=wt({},js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NC=Ga(UC),OC=wt({},js,{data:0}),W0=Ga(OC),BC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zC[t])?!!e[t]:!1}function zm(){return kC}var HC=wt({},ql,{key:function(t){if(t.key){var e=BC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zm,charCode:function(t){return t.type==="keypress"?Fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GC=Ga(HC),VC=wt({},If,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X0=Ga(VC),qC=wt({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zm}),WC=Ga(qC),XC=wt({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),YC=Ga(XC),ZC=wt({},If,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KC=Ga(ZC),JC=wt({},js,{newState:0,oldState:0}),QC=Ga(JC),jC=[9,13,27,32],km=xi&&"CompositionEvent"in window,dl=null;xi&&"documentMode"in document&&(dl=document.documentMode);var $C=xi&&"TextEvent"in window&&!dl,Ey=xi&&(!km||dl&&8<dl&&11>=dl),Y0=" ",Z0=!1;function wy(t,e){switch(t){case"keyup":return jC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ry(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ir=!1;function eA(t,e){switch(t){case"compositionend":return Ry(e);case"keypress":return e.which!==32?null:(Z0=!0,Y0);case"textInput":return t=e.data,t===Y0&&Z0?null:t;default:return null}}function tA(t,e){if(Ir)return t==="compositionend"||!km&&wy(t,e)?(t=Iy(),Bc=Fm=Qi=null,Ir=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ey&&e.locale!=="ko"?null:e.data;default:return null}}var aA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function K0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aA[t.type]:e==="textarea"}function Dy(t,e,a,n){Tr?Fr?Fr.push(n):Fr=[n]:Tr=n,e=yf(e,"onChange"),0<e.length&&(a=new Tf("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var hl=null,Tl=null;function nA(t){T_(t,0)}function Ef(t){var e=ul(t);if(My(e))return t}function J0(t,e){if(t==="change")return e}var Py=!1;xi&&(xi?(bc="oninput"in document,bc||(fp=document.createElement("div"),fp.setAttribute("oninput","return;"),bc=typeof fp.oninput=="function"),Lc=bc):Lc=!1,Py=Lc&&(!document.documentMode||9<document.documentMode));var Lc,bc,fp;function Q0(){hl&&(hl.detachEvent("onpropertychange",Uy),Tl=hl=null)}function Uy(t){if(t.propertyName==="value"&&Ef(Tl)){var e=[];Dy(e,Tl,t,Bm(t)),Ty(nA,e)}}function iA(t,e,a){t==="focusin"?(Q0(),hl=e,Tl=a,hl.attachEvent("onpropertychange",Uy)):t==="focusout"&&Q0()}function sA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ef(Tl)}function rA(t,e){if(t==="click")return Ef(e)}function oA(t,e){if(t==="input"||t==="change")return Ef(e)}function lA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $a=typeof Object.is=="function"?Object.is:lA;function Il(t,e){if($a(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Gp.call(e,i)||!$a(t[i],e[i]))return!1}return!0}function j0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $0(t,e){var a=j0(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=j0(a)}}function Ny(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ny(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Oy(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ef(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=ef(t.document)}return e}function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var uA=xi&&"documentMode"in document&&11>=document.documentMode,Er=null,Kp=null,pl=null,Jp=!1;function eS(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jp||Er==null||Er!==ef(n)||(n=Er,"selectionStart"in n&&Hm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),pl&&Il(pl,n)||(pl=n,n=yf(Kp,"onSelect"),0<n.length&&(e=new Tf("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Er)))}function Os(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var wr={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},dp={},By={};xi&&(By=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function $s(t){if(dp[t])return dp[t];if(!wr[t])return t;var e=wr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in By)return dp[t]=e[a];return t}var Fy=$s("animationend"),zy=$s("animationiteration"),ky=$s("animationstart"),cA=$s("transitionrun"),fA=$s("transitionstart"),dA=$s("transitioncancel"),Hy=$s("transitionend"),Gy=new Map,Qp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qp.push("scrollEnd");function Cn(t,e){Gy.set(t,e),Qs(e,[t])}var tf=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},on=[],Rr=0,Gm=0;function wf(){for(var t=Rr,e=Gm=Rr=0;e<t;){var a=on[e];on[e++]=null;var n=on[e];on[e++]=null;var i=on[e];on[e++]=null;var s=on[e];if(on[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&Vy(a,i,s)}}function Rf(t,e,a,n){on[Rr++]=t,on[Rr++]=e,on[Rr++]=a,on[Rr++]=n,Gm|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Vm(t,e,a,n){return Rf(t,e,a,n),af(t)}function er(t,e){return Rf(t,null,null,e),af(t)}function Vy(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-Qa(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function af(t){if(50<Ll)throw Ll=0,Sm=null,Error(ae(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Dr={};function hA(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ya(t,e,a,n){return new hA(t,e,a,n)}function qm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pi(t,e){var a=t.alternate;return a===null?(a=Ya(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function qy(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function zc(t,e,a,n,i,s){var r=0;if(n=t,typeof t=="function")qm(t)&&(r=1);else if(typeof t=="string")r=gT(t,a,Gn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Fp:return t=Ya(31,a,e,i),t.elementType=Fp,t.lanes=s,t;case br:return Gs(a.children,i,s,e);case uy:r=8,i|=24;break;case Np:return t=Ya(12,a,e,i|2),t.elementType=Np,t.lanes=s,t;case Op:return t=Ya(13,a,e,i),t.elementType=Op,t.lanes=s,t;case Bp:return t=Ya(19,a,e,i),t.elementType=Bp,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fi:r=10;break e;case cy:r=9;break e;case wm:r=11;break e;case Rm:r=14;break e;case qi:r=16,n=null;break e}r=29,a=Error(ae(130,t===null?"null":typeof t,"")),n=null}return e=Ya(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function Gs(t,e,a,n){return t=Ya(7,t,n,e),t.lanes=a,t}function hp(t,e,a){return t=Ya(6,t,null,e),t.lanes=a,t}function Wy(t){var e=Ya(18,null,null,0);return e.stateNode=t,e}function pp(t,e,a){return e=Ya(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var tS=new WeakMap;function dn(t,e){if(typeof t=="object"&&t!==null){var a=tS.get(t);return a!==void 0?a:(e={value:t,source:e,stack:O0(e)},tS.set(t,e),e)}return{value:t,source:e,stack:O0(e)}}var Pr=[],Ur=0,nf=null,El=0,un=[],cn=0,cs=null,zn=1,kn="";function ui(t,e){Pr[Ur++]=El,Pr[Ur++]=nf,nf=t,El=e}function Xy(t,e,a){un[cn++]=zn,un[cn++]=kn,un[cn++]=cs,cs=t;var n=zn;t=kn;var i=32-Qa(n)-1;n&=~(1<<i),a+=1;var s=32-Qa(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,zn=1<<32-Qa(e)+i|a<<i|n,kn=s+t}else zn=1<<s|a<<i|n,kn=t}function Wm(t){t.return!==null&&(ui(t,1),Xy(t,1,0))}function Xm(t){for(;t===nf;)nf=Pr[--Ur],Pr[Ur]=null,El=Pr[--Ur],Pr[Ur]=null;for(;t===cs;)cs=un[--cn],un[cn]=null,kn=un[--cn],un[cn]=null,zn=un[--cn],un[cn]=null}function Yy(t,e){un[cn++]=zn,un[cn++]=kn,un[cn++]=cs,zn=e.id,kn=e.overflow,cs=t}var ha=null,Et=null,nt=!1,as=null,hn=!1,jp=Error(ae(519));function fs(t){var e=Error(ae(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wl(dn(e,t)),jp}function aS(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[da]=t,e[Ha]=n,a){case"dialog":Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":case"embed":Qe("load",e);break;case"video":case"audio":for(a=0;a<Ul.length;a++)Qe(Ul[a],e);break;case"source":Qe("error",e);break;case"img":case"image":case"link":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"input":Qe("invalid",e),Ly(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Qe("invalid",e);break;case"textarea":Qe("invalid",e),Cy(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||E_(e.textContent,a)?(n.popover!=null&&(Qe("beforetoggle",e),Qe("toggle",e)),n.onScroll!=null&&Qe("scroll",e),n.onScrollEnd!=null&&Qe("scrollend",e),n.onClick!=null&&(e.onclick=di),e=!0):e=!1,e||fs(t,!0)}function nS(t){for(ha=t.return;ha;)switch(ha.tag){case 5:case 31:case 13:hn=!1;return;case 27:case 3:hn=!0;return;default:ha=ha.return}}function vr(t){if(t!==ha)return!1;if(!nt)return nS(t),nt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lm(t.type,t.memoizedProps)),a=!a),a&&Et&&fs(t),nS(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));Et=WS(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));Et=WS(t)}else e===27?(e=Et,ms(t.type)?(t=Tm,Tm=null,Et=t):Et=e):Et=ha?mn(t.stateNode.nextSibling):null;return!0}function Xs(){Et=ha=null,nt=!1}function mp(){var t=as;return t!==null&&(za===null?za=t:za.push.apply(za,t),as=null),t}function wl(t){as===null?as=[t]:as.push(t)}var $p=Vn(null),tr=null,hi=null;function Xi(t,e,a){Ct($p,e._currentValue),e._currentValue=a}function mi(t){t._currentValue=$p.current,sa($p)}function em(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function tm(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),em(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(ae(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),em(r,a,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function ao(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(ae(387));if(r=r.memoizedProps,r!==null){var o=i.type;$a(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===Jc.current){if(r=i.alternate,r===null)throw Error(ae(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ol):t=[Ol])}i=i.return}t!==null&&tm(e,t,a,n),e.flags|=262144}function sf(t){for(t=t.firstContext;t!==null;){if(!$a(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ys(t){tr=t,hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pa(t){return Zy(tr,t)}function Cc(t,e){return tr===null&&Ys(t),Zy(t,e)}function Zy(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},hi===null){if(t===null)throw Error(ae(308));hi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else hi=hi.next=e;return a}var pA=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},mA=$t.unstable_scheduleCallback,gA=$t.unstable_NormalPriority,Zt={$$typeof:fi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ym(){return{controller:new pA,data:new Map,refCount:0}}function Wl(t){t.refCount--,t.refCount===0&&mA(gA,function(){t.controller.abort()})}var ml=null,am=0,Xr=0,zr=null;function xA(t,e){if(ml===null){var a=ml=[];am=0,Xr=Sg(),zr={status:"pending",value:void 0,then:function(n){a.push(n)}}}return am++,e.then(iS,iS),e}function iS(){if(--am===0&&ml!==null){zr!==null&&(zr.status="fulfilled");var t=ml;ml=null,Xr=0,zr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function SA(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var sS=Oe.S;Oe.S=function(t,e){l_=Ka(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&xA(t,e),sS!==null&&sS(t,e)};var Vs=Vn(null);function Zm(){var t=Vs.current;return t!==null?t:bt.pooledCache}function kc(t,e){e===null?Ct(Vs,Vs.current):Ct(Vs,e.pool)}function Ky(){var t=Zm();return t===null?null:{parent:Zt._currentValue,pool:t}}var no=Error(ae(460)),Km=Error(ae(474)),Df=Error(ae(542)),rf={then:function(){}};function rS(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jy(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(di,di),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lS(t),t;default:if(typeof e.status=="string")e.then(di,di);else{if(t=bt,t!==null&&100<t.shellSuspendCounter)throw Error(ae(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,lS(t),t}throw qs=e,no}}function zs(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qs=a,no):a}}var qs=null;function oS(){if(qs===null)throw Error(ae(459));var t=qs;return qs=null,t}function lS(t){if(t===no||t===Df)throw Error(ae(483))}var kr=null,Rl=0;function Ac(t){var e=Rl;return Rl+=1,kr===null&&(kr=[]),Jy(kr,t,e)}function al(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Tc(t,e){throw e.$$typeof===iC?Error(ae(525)):(t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Qy(t){function e(c,m){if(t){var v=c.deletions;v===null?(c.deletions=[m],c.flags|=16):v.push(m)}}function a(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function n(c){for(var m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function i(c,m){return c=pi(c,m),c.index=0,c.sibling=null,c}function s(c,m,v){return c.index=v,t?(v=c.alternate,v!==null?(v=v.index,v<m?(c.flags|=67108866,m):v):(c.flags|=67108866,m)):(c.flags|=1048576,m)}function r(c){return t&&c.alternate===null&&(c.flags|=67108866),c}function o(c,m,v,y){return m===null||m.tag!==6?(m=hp(v,c.mode,y),m.return=c,m):(m=i(m,v),m.return=c,m)}function l(c,m,v,y){var I=v.type;return I===br?d(c,m,v.props.children,y,v.key):m!==null&&(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===qi&&zs(I)===m.type)?(m=i(m,v.props),al(m,v),m.return=c,m):(m=zc(v.type,v.key,v.props,null,c.mode,y),al(m,v),m.return=c,m)}function u(c,m,v,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=pp(v,c.mode,y),m.return=c,m):(m=i(m,v.children||[]),m.return=c,m)}function d(c,m,v,y,I){return m===null||m.tag!==7?(m=Gs(v,c.mode,y,I),m.return=c,m):(m=i(m,v),m.return=c,m)}function p(c,m,v){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=hp(""+m,c.mode,v),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xc:return v=zc(m.type,m.key,m.props,null,c.mode,v),al(v,m),v.return=c,v;case ol:return m=pp(m,c.mode,v),m.return=c,m;case qi:return m=zs(m),p(c,m,v)}if(ll(m)||el(m))return m=Gs(m,c.mode,v,null),m.return=c,m;if(typeof m.then=="function")return p(c,Ac(m),v);if(m.$$typeof===fi)return p(c,Cc(c,m),v);Tc(c,m)}return null}function f(c,m,v,y){var I=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return I!==null?null:o(c,m,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xc:return v.key===I?l(c,m,v,y):null;case ol:return v.key===I?u(c,m,v,y):null;case qi:return v=zs(v),f(c,m,v,y)}if(ll(v)||el(v))return I!==null?null:d(c,m,v,y,null);if(typeof v.then=="function")return f(c,m,Ac(v),y);if(v.$$typeof===fi)return f(c,m,Cc(c,v),y);Tc(c,v)}return null}function h(c,m,v,y,I){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return c=c.get(v)||null,o(m,c,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xc:return c=c.get(y.key===null?v:y.key)||null,l(m,c,y,I);case ol:return c=c.get(y.key===null?v:y.key)||null,u(m,c,y,I);case qi:return y=zs(y),h(c,m,v,y,I)}if(ll(y)||el(y))return c=c.get(v)||null,d(m,c,y,I,null);if(typeof y.then=="function")return h(c,m,v,Ac(y),I);if(y.$$typeof===fi)return h(c,m,v,Cc(m,y),I);Tc(m,y)}return null}function S(c,m,v,y){for(var I=null,T=null,g=m,C=m=0,U=null;g!==null&&C<v.length;C++){g.index>C?(U=g,g=null):U=g.sibling;var R=f(c,g,v[C],y);if(R===null){g===null&&(g=U);break}t&&g&&R.alternate===null&&e(c,g),m=s(R,m,C),T===null?I=R:T.sibling=R,T=R,g=U}if(C===v.length)return a(c,g),nt&&ui(c,C),I;if(g===null){for(;C<v.length;C++)g=p(c,v[C],y),g!==null&&(m=s(g,m,C),T===null?I=g:T.sibling=g,T=g);return nt&&ui(c,C),I}for(g=n(g);C<v.length;C++)U=h(g,c,C,v[C],y),U!==null&&(t&&U.alternate!==null&&g.delete(U.key===null?C:U.key),m=s(U,m,C),T===null?I=U:T.sibling=U,T=U);return t&&g.forEach(function(O){return e(c,O)}),nt&&ui(c,C),I}function M(c,m,v,y){if(v==null)throw Error(ae(151));for(var I=null,T=null,g=m,C=m=0,U=null,R=v.next();g!==null&&!R.done;C++,R=v.next()){g.index>C?(U=g,g=null):U=g.sibling;var O=f(c,g,R.value,y);if(O===null){g===null&&(g=U);break}t&&g&&O.alternate===null&&e(c,g),m=s(O,m,C),T===null?I=O:T.sibling=O,T=O,g=U}if(R.done)return a(c,g),nt&&ui(c,C),I;if(g===null){for(;!R.done;C++,R=v.next())R=p(c,R.value,y),R!==null&&(m=s(R,m,C),T===null?I=R:T.sibling=R,T=R);return nt&&ui(c,C),I}for(g=n(g);!R.done;C++,R=v.next())R=h(g,c,C,R.value,y),R!==null&&(t&&R.alternate!==null&&g.delete(R.key===null?C:R.key),m=s(R,m,C),T===null?I=R:T.sibling=R,T=R);return t&&g.forEach(function(H){return e(c,H)}),nt&&ui(c,C),I}function x(c,m,v,y){if(typeof v=="object"&&v!==null&&v.type===br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xc:e:{for(var I=v.key;m!==null;){if(m.key===I){if(I=v.type,I===br){if(m.tag===7){a(c,m.sibling),y=i(m,v.props.children),y.return=c,c=y;break e}}else if(m.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===qi&&zs(I)===m.type){a(c,m.sibling),y=i(m,v.props),al(y,v),y.return=c,c=y;break e}a(c,m);break}else e(c,m);m=m.sibling}v.type===br?(y=Gs(v.props.children,c.mode,y,v.key),y.return=c,c=y):(y=zc(v.type,v.key,v.props,null,c.mode,y),al(y,v),y.return=c,c=y)}return r(c);case ol:e:{for(I=v.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){a(c,m.sibling),y=i(m,v.children||[]),y.return=c,c=y;break e}else{a(c,m);break}else e(c,m);m=m.sibling}y=pp(v,c.mode,y),y.return=c,c=y}return r(c);case qi:return v=zs(v),x(c,m,v,y)}if(ll(v))return S(c,m,v,y);if(el(v)){if(I=el(v),typeof I!="function")throw Error(ae(150));return v=I.call(v),M(c,m,v,y)}if(typeof v.then=="function")return x(c,m,Ac(v),y);if(v.$$typeof===fi)return x(c,m,Cc(c,v),y);Tc(c,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,m!==null&&m.tag===6?(a(c,m.sibling),y=i(m,v),y.return=c,c=y):(a(c,m),y=hp(v,c.mode,y),y.return=c,c=y),r(c)):a(c,m)}return function(c,m,v,y){try{Rl=0;var I=x(c,m,v,y);return kr=null,I}catch(g){if(g===no||g===Df)throw g;var T=Ya(29,g,null,c.mode);return T.lanes=y,T.return=c,T}}}var Zs=Qy(!0),jy=Qy(!1),Wi=!1;function Jm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ns(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function is(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(ct&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=af(t),Vy(t,null,a),e}return Rf(t,n,e,a),af(t)}function gl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,gy(t,a)}}function gp(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var im=!1;function xl(){if(im){var t=zr;if(t!==null)throw t}}function Sl(t,e,a,n){im=!1;var i=t.updateQueue;Wi=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,d=u=l=null,o=s;do{var f=o.lane&-536870913,h=f!==o.lane;if(h?($e&f)===f:(n&f)===f){f!==0&&f===Xr&&(im=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=t,M=o;f=e;var x=a;switch(M.tag){case 1:if(S=M.payload,typeof S=="function"){p=S.call(x,p,f);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=M.payload,f=typeof S=="function"?S.call(x,p,f):S,f==null)break e;p=wt({},p,f);break e;case 2:Wi=!0}}f=o.callback,f!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=h,l=p):d=d.next=h,r|=f;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,s===null&&(i.shared.lanes=0),hs|=r,t.lanes=r,t.memoizedState=p}}function $y(t,e){if(typeof t!="function")throw Error(ae(191,t));t.call(e)}function ev(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)$y(a[t],e)}var Yr=Vn(null),of=Vn(0);function uS(t,e){t=_i,Ct(of,t),Ct(Yr,e),_i=t|e.baseLanes}function sm(){Ct(of,_i),Ct(Yr,Yr.current)}function Qm(){_i=of.current,sa(Yr),sa(of)}var en=Vn(null),pn=null;function Yi(t){var e=t.alternate;Ct(Vt,Vt.current&1),Ct(en,t),pn===null&&(e===null||Yr.current!==null||e.memoizedState!==null)&&(pn=t)}function rm(t){Ct(Vt,Vt.current),Ct(en,t),pn===null&&(pn=t)}function tv(t){t.tag===22?(Ct(Vt,Vt.current),Ct(en,t),pn===null&&(pn=t)):Zi(t)}function Zi(){Ct(Vt,Vt.current),Ct(en,en.current)}function Xa(t){sa(en),pn===t&&(pn=null),sa(Vt)}var Vt=Vn(0);function lf(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Cm(a)||Am(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Si=0,We=null,Lt=null,Xt=null,uf=!1,Hr=!1,Ks=!1,cf=0,Dl=0,Gr=null,yA=0;function Ft(){throw Error(ae(321))}function jm(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!$a(t[a],e[a]))return!1;return!0}function $m(t,e,a,n,i,s){return Si=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oe.H=t===null||t.memoizedState===null?Dv:cg,Ks=!1,s=a(n,i),Ks=!1,Hr&&(s=nv(e,a,n,i)),av(t),s}function av(t){Oe.H=Pl;var e=Lt!==null&&Lt.next!==null;if(Si=0,Xt=Lt=We=null,uf=!1,Dl=0,Gr=null,e)throw Error(ae(300));t===null||Kt||(t=t.dependencies,t!==null&&sf(t)&&(Kt=!0))}function nv(t,e,a,n){We=t;var i=0;do{if(Hr&&(Gr=null),Dl=0,Hr=!1,25<=i)throw Error(ae(301));if(i+=1,Xt=Lt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Oe.H=Pv,s=e(a,n)}while(Hr);return s}function vA(){var t=Oe.H,e=t.useState()[0];return e=typeof e.then=="function"?Xl(e):e,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(We.flags|=1024),e}function eg(){var t=cf!==0;return cf=0,t}function tg(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function ag(t){if(uf){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}uf=!1}Si=0,Xt=Lt=We=null,Hr=!1,Dl=cf=0,Gr=null}function Da(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?We.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function qt(){if(Lt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Xt===null?We.memoizedState:Xt.next;if(e!==null)Xt=e,Lt=t;else{if(t===null)throw We.alternate===null?Error(ae(467)):Error(ae(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Xt===null?We.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function Pf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(t){var e=Dl;return Dl+=1,Gr===null&&(Gr=[]),t=Jy(Gr,t,e),e=We,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,Oe.H=e===null||e.memoizedState===null?Dv:cg),t}function Uf(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xl(t);if(t.$$typeof===fi)return pa(t)}throw Error(ae(438,String(t)))}function ng(t){var e=null,a=We.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=We.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Pf(),We.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=sC;return e.index++,a}function yi(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=qt();return ig(e,Lt,t)}function ig(t,e,a){var n=t.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,d=!1;do{var p=u.lane&-536870913;if(p!==u.lane?($e&p)===p:(Si&p)===p){var f=u.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Xr&&(d=!0);else if((Si&f)===f){u=u.next,f===Xr&&(d=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,We.lanes|=f,hs|=f;p=u.action,Ks&&a(s,p),s=u.hasEagerState?u.eagerState:a(s,p)}else f={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,We.lanes|=p,hs|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!$a(s,t.memoizedState)&&(Kt=!0,d&&(a=zr,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function xp(t){var e=qt(),a=e.queue;if(a===null)throw Error(ae(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);$a(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function iv(t,e,a){var n=We,i=qt(),s=nt;if(s){if(a===void 0)throw Error(ae(407));a=a()}else a=e();var r=!$a((Lt||i).memoizedState,a);if(r&&(i.memoizedState=a,Kt=!0),i=i.queue,sg(ov.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,Zr(9,{destroy:void 0},rv.bind(null,n,i,a,e),null),bt===null)throw Error(ae(349));s||(Si&127)!==0||sv(n,e,a)}return a}function sv(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=We.updateQueue,e===null?(e=Pf(),We.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function rv(t,e,a,n){e.value=a,e.getSnapshot=n,lv(e)&&uv(t)}function ov(t,e,a){return a(function(){lv(e)&&uv(t)})}function lv(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!$a(t,a)}catch{return!0}}function uv(t){var e=er(t,2);e!==null&&ka(e,t,2)}function om(t){var e=Da();if(typeof t=="function"){var a=t;if(t=a(),Ks){Ji(!0);try{a()}finally{Ji(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:t},e}function cv(t,e,a,n){return t.baseState=a,ig(t,Lt,typeof n=="function"?n:yi)}function _A(t,e,a,n,i){if(Of(t))throw Error(ae(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Oe.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,fv(e,s)):(s.next=a.next,e.pending=a.next=s)}}function fv(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=Oe.T,r={};Oe.T=r;try{var o=a(i,n),l=Oe.S;l!==null&&l(r,o),cS(t,e,o)}catch(u){lm(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),Oe.T=s}}else try{s=a(i,n),cS(t,e,s)}catch(u){lm(t,e,u)}}function cS(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){fS(t,e,n)},function(n){return lm(t,e,n)}):fS(t,e,a)}function fS(t,e,a){e.status="fulfilled",e.value=a,dv(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,fv(t,a)))}function lm(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,dv(e),e=e.next;while(e!==n)}t.action=null}function dv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function hv(t,e){return e}function dS(t,e){if(nt){var a=bt.formState;if(a!==null){e:{var n=We;if(nt){if(Et){t:{for(var i=Et,s=hn;i.nodeType!==8;){if(!s){i=null;break t}if(i=mn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Et=mn(i.nextSibling),n=i.data==="F!";break e}}fs(n)}n=!1}n&&(e=a[0])}}return a=Da(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hv,lastRenderedState:e},a.queue=n,a=Ev.bind(null,We,n),n.dispatch=a,n=om(!1),s=ug.bind(null,We,!1,n.queue),n=Da(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=_A.bind(null,We,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function hS(t){var e=qt();return pv(e,Lt,t)}function pv(t,e,a){if(e=ig(t,e,hv)[0],t=Hc(yi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Xl(e)}catch(r){throw r===no?Df:r}else n=e;e=qt();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(We.flags|=2048,Zr(9,{destroy:void 0},MA.bind(null,i,a),null)),[n,s,t]}function MA(t,e){t.action=e}function pS(t){var e=qt(),a=Lt;if(a!==null)return pv(e,a,t);qt(),e=e.memoizedState,a=qt();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function Zr(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=We.updateQueue,e===null&&(e=Pf(),We.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function mv(){return qt().memoizedState}function Gc(t,e,a,n){var i=Da();We.flags|=t,i.memoizedState=Zr(1|e,{destroy:void 0},a,n===void 0?null:n)}function Nf(t,e,a,n){var i=qt();n=n===void 0?null:n;var s=i.memoizedState.inst;Lt!==null&&n!==null&&jm(n,Lt.memoizedState.deps)?i.memoizedState=Zr(e,s,a,n):(We.flags|=t,i.memoizedState=Zr(1|e,s,a,n))}function mS(t,e){Gc(8390656,8,t,e)}function sg(t,e){Nf(2048,8,t,e)}function LA(t){We.flags|=4;var e=We.updateQueue;if(e===null)e=Pf(),We.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function gv(t){var e=qt().memoizedState;return LA({ref:e,nextImpl:t}),function(){if((ct&2)!==0)throw Error(ae(440));return e.impl.apply(void 0,arguments)}}function xv(t,e){return Nf(4,2,t,e)}function Sv(t,e){return Nf(4,4,t,e)}function yv(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vv(t,e,a){a=a!=null?a.concat([t]):null,Nf(4,4,yv.bind(null,e,t),a)}function rg(){}function _v(t,e){var a=qt();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&jm(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function Mv(t,e){var a=qt();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&jm(e,n[1]))return n[0];if(n=t(),Ks){Ji(!0);try{t()}finally{Ji(!1)}}return a.memoizedState=[n,e],n}function og(t,e,a){return a===void 0||(Si&1073741824)!==0&&($e&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=c_(),We.lanes|=t,hs|=t,a)}function Lv(t,e,a,n){return $a(a,e)?a:Yr.current!==null?(t=og(t,a,n),$a(t,e)||(Kt=!0),t):(Si&42)===0||(Si&1073741824)!==0&&($e&261930)===0?(Kt=!0,t.memoizedState=a):(t=c_(),We.lanes|=t,hs|=t,e)}function bv(t,e,a,n,i){var s=ft.p;ft.p=s!==0&&8>s?s:8;var r=Oe.T,o={};Oe.T=o,ug(t,!1,e,a);try{var l=i(),u=Oe.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=SA(l,n);yl(t,e,d,ja(t))}else yl(t,e,n,ja(t))}catch(p){yl(t,e,{then:function(){},status:"rejected",reason:p},ja())}finally{ft.p=s,r!==null&&o.types!==null&&(r.types=o.types),Oe.T=r}}function bA(){}function um(t,e,a,n){if(t.tag!==5)throw Error(ae(476));var i=Cv(t).queue;bv(t,i,e,Hs,a===null?bA:function(){return Av(t),a(n)})}function Cv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Hs,baseState:Hs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:Hs},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Av(t){var e=Cv(t);e.next===null&&(e=t.alternate.memoizedState),yl(t,e.next.queue,{},ja())}function lg(){return pa(Ol)}function Tv(){return qt().memoizedState}function Iv(){return qt().memoizedState}function CA(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=ja();t=ns(a);var n=is(e,t,a);n!==null&&(ka(n,e,a),gl(n,e,a)),e={cache:Ym()},t.payload=e;return}e=e.return}}function AA(t,e,a){var n=ja();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Of(t)?wv(e,a):(a=Vm(t,e,a,n),a!==null&&(ka(a,t,n),Rv(a,e,n)))}function Ev(t,e,a){var n=ja();yl(t,e,a,n)}function yl(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Of(t))wv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,$a(o,r))return Rf(t,e,i,0),bt===null&&wf(),!1}catch{}if(a=Vm(t,e,i,n),a!==null)return ka(a,t,n),Rv(a,e,n),!0}return!1}function ug(t,e,a,n){if(n={lane:2,revertLane:Sg(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Of(t)){if(e)throw Error(ae(479))}else e=Vm(t,a,n,2),e!==null&&ka(e,t,2)}function Of(t){var e=t.alternate;return t===We||e!==null&&e===We}function wv(t,e){Hr=uf=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Rv(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,gy(t,a)}}var Pl={readContext:pa,use:Uf,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft};Pl.useEffectEvent=Ft;var Dv={readContext:pa,use:Uf,useCallback:function(t,e){return Da().memoizedState=[t,e===void 0?null:e],t},useContext:pa,useEffect:mS,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Gc(4194308,4,yv.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Gc(4194308,4,t,e)},useInsertionEffect:function(t,e){Gc(4,2,t,e)},useMemo:function(t,e){var a=Da();e=e===void 0?null:e;var n=t();if(Ks){Ji(!0);try{t()}finally{Ji(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Da();if(a!==void 0){var i=a(e);if(Ks){Ji(!0);try{a(e)}finally{Ji(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=AA.bind(null,We,t),[n.memoizedState,t]},useRef:function(t){var e=Da();return t={current:t},e.memoizedState=t},useState:function(t){t=om(t);var e=t.queue,a=Ev.bind(null,We,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:rg,useDeferredValue:function(t,e){var a=Da();return og(a,t,e)},useTransition:function(){var t=om(!1);return t=bv.bind(null,We,t.queue,!0,!1),Da().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=We,i=Da();if(nt){if(a===void 0)throw Error(ae(407));a=a()}else{if(a=e(),bt===null)throw Error(ae(349));($e&127)!==0||sv(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,mS(ov.bind(null,n,s,t),[t]),n.flags|=2048,Zr(9,{destroy:void 0},rv.bind(null,n,s,a,e),null),a},useId:function(){var t=Da(),e=bt.identifierPrefix;if(nt){var a=kn,n=zn;a=(n&~(1<<32-Qa(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=cf++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=yA++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:lg,useFormState:dS,useActionState:dS,useOptimistic:function(t){var e=Da();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=ug.bind(null,We,!0,a),a.dispatch=e,[t,e]},useMemoCache:ng,useCacheRefresh:function(){return Da().memoizedState=CA.bind(null,We)},useEffectEvent:function(t){var e=Da(),a={impl:t};return e.memoizedState=a,function(){if((ct&2)!==0)throw Error(ae(440));return a.impl.apply(void 0,arguments)}}},cg={readContext:pa,use:Uf,useCallback:_v,useContext:pa,useEffect:sg,useImperativeHandle:vv,useInsertionEffect:xv,useLayoutEffect:Sv,useMemo:Mv,useReducer:Hc,useRef:mv,useState:function(){return Hc(yi)},useDebugValue:rg,useDeferredValue:function(t,e){var a=qt();return Lv(a,Lt.memoizedState,t,e)},useTransition:function(){var t=Hc(yi)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Xl(t),e]},useSyncExternalStore:iv,useId:Tv,useHostTransitionStatus:lg,useFormState:hS,useActionState:hS,useOptimistic:function(t,e){var a=qt();return cv(a,Lt,t,e)},useMemoCache:ng,useCacheRefresh:Iv};cg.useEffectEvent=gv;var Pv={readContext:pa,use:Uf,useCallback:_v,useContext:pa,useEffect:sg,useImperativeHandle:vv,useInsertionEffect:xv,useLayoutEffect:Sv,useMemo:Mv,useReducer:xp,useRef:mv,useState:function(){return xp(yi)},useDebugValue:rg,useDeferredValue:function(t,e){var a=qt();return Lt===null?og(a,t,e):Lv(a,Lt.memoizedState,t,e)},useTransition:function(){var t=xp(yi)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Xl(t),e]},useSyncExternalStore:iv,useId:Tv,useHostTransitionStatus:lg,useFormState:pS,useActionState:pS,useOptimistic:function(t,e){var a=qt();return Lt!==null?cv(a,Lt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ng,useCacheRefresh:Iv};Pv.useEffectEvent=gv;function Sp(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:wt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cm={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=ja(),i=ns(n);i.payload=e,a!=null&&(i.callback=a),e=is(t,i,n),e!==null&&(ka(e,t,n),gl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=ja(),i=ns(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=is(t,i,n),e!==null&&(ka(e,t,n),gl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=ja(),n=ns(a);n.tag=2,e!=null&&(n.callback=e),e=is(t,n,a),e!==null&&(ka(e,t,a),gl(e,t,a))}};function gS(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!Il(a,n)||!Il(i,s):!0}function xS(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&cm.enqueueReplaceState(e,e.state,null)}function Js(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=wt({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function Uv(t){tf(t)}function Nv(t){console.error(t)}function Ov(t){tf(t)}function ff(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function SS(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function fm(t,e,a){return a=ns(a),a.tag=3,a.payload={element:null},a.callback=function(){ff(t,e)},a}function Bv(t){return t=ns(t),t.tag=3,t}function Fv(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){SS(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){SS(e,a,n),typeof i!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function TA(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&ao(e,a,i,!0),a=en.current,a!==null){switch(a.tag){case 31:case 13:return pn===null?gf():a.alternate===null&&zt===0&&(zt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===rf?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Ep(t,n,i)),!1;case 22:return a.flags|=65536,n===rf?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Ep(t,n,i)),!1}throw Error(ae(435,a.tag))}return Ep(t,n,i),gf(),!1}if(nt)return e=en.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==jp&&(t=Error(ae(422),{cause:n}),wl(dn(t,a)))):(n!==jp&&(e=Error(ae(423),{cause:n}),wl(dn(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=dn(n,a),i=fm(t.stateNode,n,i),gp(t,i),zt!==4&&(zt=2)),!1;var s=Error(ae(520),{cause:n});if(s=dn(s,a),Ml===null?Ml=[s]:Ml.push(s),zt!==4&&(zt=2),e===null)return!0;n=dn(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=fm(a.stateNode,n,t),gp(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ss===null||!ss.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Bv(i),Fv(i,t,a,n),gp(a,i),!1}a=a.return}while(a!==null);return!1}var fg=Error(ae(461)),Kt=!1;function fa(t,e,a,n){e.child=t===null?jy(e,null,a,n):Zs(e,t.child,a,n)}function yS(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return Ys(e),n=$m(t,e,a,r,s,i),o=eg(),t!==null&&!Kt?(tg(t,e,i),vi(t,e,i)):(nt&&o&&Wm(e),e.flags|=1,fa(t,e,n,i),e.child)}function vS(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!qm(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,zv(t,e,s,n,i)):(t=zc(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!dg(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:Il,a(r,n)&&t.ref===e.ref)return vi(t,e,i)}return e.flags|=1,t=pi(s,n),t.ref=e.ref,t.return=e,e.child=t}function zv(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if(Il(s,n)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=n=s,dg(t,i))(t.flags&131072)!==0&&(Kt=!0);else return e.lanes=t.lanes,vi(t,e,i)}return dm(t,e,a,n,i)}function kv(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return _S(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&kc(e,s!==null?s.cachePool:null),s!==null?uS(e,s):sm(),tv(e);else return n=e.lanes=536870912,_S(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(kc(e,s.cachePool),uS(e,s),Zi(e),e.memoizedState=null):(t!==null&&kc(e,null),sm(),Zi(e));return fa(t,e,i,a),e.child}function cl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function _S(t,e,a,n,i){var s=Zm();return s=s===null?null:{parent:Zt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&kc(e,null),sm(),tv(e),t!==null&&ao(t,e,n,!0),e.childLanes=i,null}function Vc(t,e){return e=df({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function MS(t,e,a){return Zs(e,t.child,null,a),t=Vc(e,e.pendingProps),t.flags|=2,Xa(e),e.memoizedState=null,t}function IA(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(nt){if(n.mode==="hidden")return t=Vc(e,n),e.lanes=536870912,cl(null,t);if(rm(e),(t=Et)?(t=D_(t,hn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:cs!==null?{id:zn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},a=Wy(t),a.return=e,e.child=a,ha=e,Et=null)):t=null,t===null)throw fs(e);return e.lanes=536870912,null}return Vc(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(rm(e),i)if(e.flags&256)e.flags&=-257,e=MS(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ae(558));else if(Kt||ao(t,e,a,!1),i=(a&t.childLanes)!==0,Kt||i){if(n=bt,n!==null&&(r=xy(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,er(t,r),ka(n,t,r),fg;gf(),e=MS(t,e,a)}else t=s.treeContext,Et=mn(r.nextSibling),ha=e,nt=!0,as=null,hn=!1,t!==null&&Yy(e,t),e=Vc(e,n),e.flags|=4096;return e}return t=pi(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function qc(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(ae(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function dm(t,e,a,n,i){return Ys(e),a=$m(t,e,a,n,void 0,i),n=eg(),t!==null&&!Kt?(tg(t,e,i),vi(t,e,i)):(nt&&n&&Wm(e),e.flags|=1,fa(t,e,a,i),e.child)}function LS(t,e,a,n,i,s){return Ys(e),e.updateQueue=null,a=nv(e,n,a,i),av(t),n=eg(),t!==null&&!Kt?(tg(t,e,s),vi(t,e,s)):(nt&&n&&Wm(e),e.flags|=1,fa(t,e,a,s),e.child)}function bS(t,e,a,n,i){if(Ys(e),e.stateNode===null){var s=Dr,r=a.contextType;typeof r=="object"&&r!==null&&(s=pa(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=cm,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},Jm(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?pa(r):Dr,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(Sp(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&cm.enqueueReplaceState(s,s.state,null),Sl(e,n,s,i),xl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=Js(a,o);s.props=l;var u=s.context,d=a.contextType;r=Dr,typeof d=="object"&&d!==null&&(r=pa(d));var p=a.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&xS(e,s,n,r),Wi=!1;var f=e.memoizedState;s.state=f,Sl(e,n,s,i),xl(),u=e.memoizedState,o||f!==u||Wi?(typeof p=="function"&&(Sp(e,a,p,n),u=e.memoizedState),(l=Wi||gS(e,a,l,n,f,u,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,nm(t,e),r=e.memoizedProps,d=Js(a,r),s.props=d,p=e.pendingProps,f=s.context,u=a.contextType,l=Dr,typeof u=="object"&&u!==null&&(l=pa(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||f!==l)&&xS(e,s,n,l),Wi=!1,f=e.memoizedState,s.state=f,Sl(e,n,s,i),xl();var h=e.memoizedState;r!==p||f!==h||Wi||t!==null&&t.dependencies!==null&&sf(t.dependencies)?(typeof o=="function"&&(Sp(e,a,o,n),h=e.memoizedState),(d=Wi||gS(e,a,d,n,f,h,l)||t!==null&&t.dependencies!==null&&sf(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,qc(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=Zs(e,t.child,null,i),e.child=Zs(e,null,a,i)):fa(t,e,a,i),e.memoizedState=s.state,t=e.child):t=vi(t,e,i),t}function CS(t,e,a,n){return Xs(),e.flags|=256,fa(t,e,a,n),e.child}var yp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vp(t){return{baseLanes:t,cachePool:Ky()}}function _p(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Za),t}function Hv(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Vt.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(nt){if(i?Yi(e):Zi(e),(t=Et)?(t=D_(t,hn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:cs!==null?{id:zn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},a=Wy(t),a.return=e,e.child=a,ha=e,Et=null)):t=null,t===null)throw fs(e);return Am(t)?e.lanes=32:e.lanes=536870912,null}var o=n.children;return n=n.fallback,i?(Zi(e),i=e.mode,o=df({mode:"hidden",children:o},i),n=Gs(n,i,a,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n=e.child,n.memoizedState=vp(a),n.childLanes=_p(t,r,a),e.memoizedState=yp,cl(null,n)):(Yi(e),hm(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Yi(e),e.flags&=-257,e=Mp(t,e,a)):e.memoizedState!==null?(Zi(e),e.child=t.child,e.flags|=128,e=null):(Zi(e),o=n.fallback,i=e.mode,n=df({mode:"visible",children:n.children},i),o=Gs(o,i,a,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,Zs(e,t.child,null,a),n=e.child,n.memoizedState=vp(a),n.childLanes=_p(t,r,a),e.memoizedState=yp,e=cl(null,n));else if(Yi(e),Am(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,n=Error(ae(419)),n.stack="",n.digest=r,wl({value:n,source:null,stack:null}),e=Mp(t,e,a)}else if(Kt||ao(t,e,a,!1),r=(a&t.childLanes)!==0,Kt||r){if(r=bt,r!==null&&(n=xy(r,a),n!==0&&n!==l.retryLane))throw l.retryLane=n,er(t,n),ka(r,t,n),fg;Cm(o)||gf(),e=Mp(t,e,a)}else Cm(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Et=mn(o.nextSibling),ha=e,nt=!0,as=null,hn=!1,t!==null&&Yy(e,t),e=hm(e,n.children),e.flags|=4096);return e}return i?(Zi(e),o=n.fallback,i=e.mode,l=t.child,u=l.sibling,n=pi(l,{mode:"hidden",children:n.children}),n.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=pi(u,o):(o=Gs(o,i,a,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,cl(null,n),n=e.child,o=t.child.memoizedState,o===null?o=vp(a):(i=o.cachePool,i!==null?(l=Zt._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=Ky(),o={baseLanes:o.baseLanes|a,cachePool:i}),n.memoizedState=o,n.childLanes=_p(t,r,a),e.memoizedState=yp,cl(t.child,n)):(Yi(e),a=t.child,t=a.sibling,a=pi(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function hm(t,e){return e=df({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function df(t,e){return t=Ya(22,t,null,e),t.lanes=0,t}function Mp(t,e,a){return Zs(e,t.child,null,a),t=hm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AS(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),em(t.return,e,a)}function Lp(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function Gv(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=Vt.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Ct(Vt,r),fa(t,e,n,a),n=nt?El:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&AS(t,a,e);else if(t.tag===19)AS(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&lf(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Lp(e,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&lf(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Lp(e,!0,a,null,s,n);break;case"together":Lp(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function vi(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(ao(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,a=pi(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=pi(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function dg(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&sf(t)))}function EA(t,e,a){switch(e.tag){case 3:Qc(e,e.stateNode.containerInfo),Xi(e,Zt,t.memoizedState.cache),Xs();break;case 27:case 5:Hp(e);break;case 4:Qc(e,e.stateNode.containerInfo);break;case 10:Xi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,rm(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(Yi(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Hv(t,e,a):(Yi(e),t=vi(t,e,a),t!==null?t.sibling:null);Yi(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(ao(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return Gv(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ct(Vt,Vt.current),n)break;return null;case 22:return e.lanes=0,kv(t,e,a,e.pendingProps);case 24:Xi(e,Zt,t.memoizedState.cache)}return vi(t,e,a)}function Vv(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Kt=!0;else{if(!dg(t,a)&&(e.flags&128)===0)return Kt=!1,EA(t,e,a);Kt=(t.flags&131072)!==0}else Kt=!1,nt&&(e.flags&1048576)!==0&&Xy(e,El,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=zs(e.elementType),e.type=t,typeof t=="function")qm(t)?(n=Js(t,n),e.tag=1,e=bS(null,e,t,n,a)):(e.tag=0,e=dm(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===wm){e.tag=11,e=yS(null,e,t,n,a);break e}else if(i===Rm){e.tag=14,e=vS(null,e,t,n,a);break e}}throw e=zp(t)||t,Error(ae(306,e,""))}}return e;case 0:return dm(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=Js(n,e.pendingProps),bS(t,e,n,i,a);case 3:e:{if(Qc(e,e.stateNode.containerInfo),t===null)throw Error(ae(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,nm(t,e),Sl(e,n,null,a);var r=e.memoizedState;if(n=r.cache,Xi(e,Zt,n),n!==s.cache&&tm(e,[Zt],a,!0),xl(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=CS(t,e,n,a);break e}else if(n!==i){i=dn(Error(ae(424)),e),wl(i),e=CS(t,e,n,a);break e}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Et=mn(t.firstChild),ha=e,nt=!0,as=null,hn=!0,a=jy(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),n===i){e=vi(t,e,a);break e}fa(t,e,n,a)}e=e.child}return e;case 26:return qc(t,e),t===null?(a=ZS(e.type,null,e.pendingProps,null))?e.memoizedState=a:nt||(a=e.type,t=e.pendingProps,n=vf(ts.current).createElement(a),n[da]=e,n[Ha]=t,ma(n,a,t),ia(n),e.stateNode=n):e.memoizedState=ZS(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Hp(e),t===null&&nt&&(n=e.stateNode=P_(e.type,e.pendingProps,ts.current),ha=e,hn=!0,i=Et,ms(e.type)?(Tm=i,Et=mn(n.firstChild)):Et=i),fa(t,e,e.pendingProps.children,a),qc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&nt&&((i=n=Et)&&(n=nT(n,e.type,e.pendingProps,hn),n!==null?(e.stateNode=n,ha=e,Et=mn(n.firstChild),hn=!1,i=!0):i=!1),i||fs(e)),Hp(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,Lm(i,s)?n=null:r!==null&&Lm(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=$m(t,e,vA,null,null,a),Ol._currentValue=i),qc(t,e),fa(t,e,n,a),e.child;case 6:return t===null&&nt&&((t=a=Et)&&(a=iT(a,e.pendingProps,hn),a!==null?(e.stateNode=a,ha=e,Et=null,t=!0):t=!1),t||fs(e)),null;case 13:return Hv(t,e,a);case 4:return Qc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Zs(e,null,n,a):fa(t,e,n,a),e.child;case 11:return yS(t,e,e.type,e.pendingProps,a);case 7:return fa(t,e,e.pendingProps,a),e.child;case 8:return fa(t,e,e.pendingProps.children,a),e.child;case 12:return fa(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,Xi(e,e.type,n.value),fa(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Ys(e),i=pa(i),n=n(i),e.flags|=1,fa(t,e,n,a),e.child;case 14:return vS(t,e,e.type,e.pendingProps,a);case 15:return zv(t,e,e.type,e.pendingProps,a);case 19:return Gv(t,e,a);case 31:return IA(t,e,a);case 22:return kv(t,e,a,e.pendingProps);case 24:return Ys(e),n=pa(Zt),t===null?(i=Zm(),i===null&&(i=bt,s=Ym(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},Jm(e),Xi(e,Zt,i)):((t.lanes&a)!==0&&(nm(t,e),Sl(e,null,null,a),xl()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Xi(e,Zt,n)):(n=s.cache,Xi(e,Zt,n),n!==i.cache&&tm(e,[Zt],a,!0))),fa(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(ae(156,e.tag))}function si(t){t.flags|=4}function bp(t,e,a,n,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(h_())t.flags|=8192;else throw qs=rf,Km}else t.flags&=-16777217}function TS(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!O_(e))if(h_())t.flags|=8192;else throw qs=rf,Km}function Ic(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?py():536870912,t.lanes|=e,Kr|=e)}function nl(t,e){if(!nt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function wA(t,e,a){var n=e.pendingProps;switch(Xm(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return It(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),mi(Zt),Vr(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(vr(e)?si(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,mp())),It(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(si(e),s!==null?(It(e),TS(e,s)):(It(e),bp(e,i,null,n,a))):s?s!==t.memoizedState?(si(e),It(e),TS(e,s)):(It(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&si(e),It(e),bp(e,i,t,n,a)),null;case 27:if(jc(e),a=ts.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&si(e);else{if(!n){if(e.stateNode===null)throw Error(ae(166));return It(e),null}t=Gn.current,vr(e)?aS(e,t):(t=P_(i,n,a),e.stateNode=t,si(e))}return It(e),null;case 5:if(jc(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&si(e);else{if(!n){if(e.stateNode===null)throw Error(ae(166));return It(e),null}if(s=Gn.current,vr(e))aS(e,s);else{var r=vf(ts.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[da]=e,s[Ha]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(ma(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&si(e)}}return It(e),bp(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&si(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(ae(166));if(t=ts.current,vr(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=ha,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[da]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||E_(t.nodeValue,a)),t||fs(e,!0)}else t=vf(t).createTextNode(n),t[da]=e,e.stateNode=t}return It(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=vr(e),a!==null){if(t===null){if(!n)throw Error(ae(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(557));t[da]=e}else Xs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;It(e),t=!1}else a=mp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Xa(e),e):(Xa(e),null);if((e.flags&128)!==0)throw Error(ae(558))}return It(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=vr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(ae(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ae(317));i[da]=e}else Xs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;It(e),i=!1}else i=mp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Xa(e),e):(Xa(e),null)}return Xa(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),Ic(e,e.updateQueue),It(e),null);case 4:return Vr(),t===null&&yg(e.stateNode.containerInfo),It(e),null;case 10:return mi(e.type),It(e),null;case 19:if(sa(Vt),n=e.memoizedState,n===null)return It(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)nl(n,!1);else{if(zt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=lf(t),s!==null){for(e.flags|=128,nl(n,!1),t=s.updateQueue,e.updateQueue=t,Ic(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)qy(a,t),a=a.sibling;return Ct(Vt,Vt.current&1|2),nt&&ui(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&Ka()>pf&&(e.flags|=128,i=!0,nl(n,!1),e.lanes=4194304)}else{if(!i)if(t=lf(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Ic(e,t),nl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!nt)return It(e),null}else 2*Ka()-n.renderingStartTime>pf&&a!==536870912&&(e.flags|=128,i=!0,nl(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Ka(),t.sibling=null,a=Vt.current,Ct(Vt,i?a&1|2:a&1),nt&&ui(e,n.treeForkCount),t):(It(e),null);case 22:case 23:return Xa(e),Qm(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),a=e.updateQueue,a!==null&&Ic(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&sa(Vs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),mi(Zt),It(e),null;case 25:return null;case 30:return null}throw Error(ae(156,e.tag))}function RA(t,e){switch(Xm(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mi(Zt),Vr(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return jc(e),null;case 31:if(e.memoizedState!==null){if(Xa(e),e.alternate===null)throw Error(ae(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Xa(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return sa(Vt),null;case 4:return Vr(),null;case 10:return mi(e.type),null;case 22:case 23:return Xa(e),Qm(),t!==null&&sa(Vs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return mi(Zt),null;case 25:return null;default:return null}}function qv(t,e){switch(Xm(e),e.tag){case 3:mi(Zt),Vr();break;case 26:case 27:case 5:jc(e);break;case 4:Vr();break;case 31:e.memoizedState!==null&&Xa(e);break;case 13:Xa(e);break;case 19:sa(Vt);break;case 10:mi(e.type);break;case 22:case 23:Xa(e),Qm(),t!==null&&sa(Vs);break;case 24:mi(Zt)}}function Yl(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){gt(e,e.return,o)}}function ds(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(d){gt(i,l,d)}}}n=n.next}while(n!==s)}}catch(d){gt(e,e.return,d)}}function Wv(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{ev(e,a)}catch(n){gt(t,t.return,n)}}}function Xv(t,e,a){a.props=Js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){gt(t,e,n)}}function vl(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){gt(t,e,i)}}function Hn(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){gt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){gt(t,e,i)}else a.current=null}function Yv(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){gt(t,t.return,i)}}function Cp(t,e,a){try{var n=t.stateNode;QA(n,t.type,a,e),n[Ha]=e}catch(i){gt(t,t.return,i)}}function Zv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ms(t.type)||t.tag===4}function Ap(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ms(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pm(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=di));else if(n!==4&&(n===27&&ms(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(pm(t,e,a),t=t.sibling;t!==null;)pm(t,e,a),t=t.sibling}function hf(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&ms(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(hf(t,e,a),t=t.sibling;t!==null;)hf(t,e,a),t=t.sibling}function Kv(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ma(e,n,a),e[da]=t,e[Ha]=a}catch(s){gt(t,t.return,s)}}var ci=!1,Yt=!1,Tp=!1,IS=typeof WeakSet=="function"?WeakSet:Set,na=null;function DA(t,e){if(t=t.containerInfo,_m=bf,t=Oy(t),Hm(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var r=0,o=-1,l=-1,u=0,d=0,p=t,f=null;t:for(;;){for(var h;p!==a||i!==0&&p.nodeType!==3||(o=r+i),p!==s||n!==0&&p.nodeType!==3||(l=r+n),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)f=p,p=h;for(;;){if(p===t)break t;if(f===a&&++u===i&&(o=r),f===s&&++d===n&&(l=r),(h=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=h}a=o===-1||l===-1?null:{start:o,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mm={focusedElem:t,selectionRange:a},bf=!1,na=e;na!==null;)if(e=na,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,na=t;else for(;na!==null;){switch(e=na,s=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,a=e,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var S=Js(a.type,i);t=n.getSnapshotBeforeUpdate(S,s),n.__reactInternalSnapshotBeforeUpdate=t}catch(M){gt(a,a.return,M)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)bm(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bm(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(ae(163))}if(t=e.sibling,t!==null){t.return=e.return,na=t;break}na=e.return}}function Jv(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:oi(t,a),n&4&&Yl(5,a);break;case 1:if(oi(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){gt(a,a.return,r)}else{var i=Js(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){gt(a,a.return,r)}}n&64&&Wv(a),n&512&&vl(a,a.return);break;case 3:if(oi(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ev(t,e)}catch(r){gt(a,a.return,r)}}break;case 27:e===null&&n&4&&Kv(a);case 26:case 5:oi(t,a),e===null&&n&4&&Yv(a),n&512&&vl(a,a.return);break;case 12:oi(t,a);break;case 31:oi(t,a),n&4&&$v(t,a);break;case 13:oi(t,a),n&4&&e_(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=HA.bind(null,a),sT(t,a))));break;case 22:if(n=a.memoizedState!==null||ci,!n){e=e!==null&&e.memoizedState!==null||Yt,i=ci;var s=Yt;ci=n,(Yt=e)&&!s?li(t,a,(a.subtreeFlags&8772)!==0):oi(t,a),ci=i,Yt=s}break;case 30:break;default:oi(t,a)}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Nm(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ut=null,Fa=!1;function ri(t,e,a){for(a=a.child;a!==null;)jv(t,e,a),a=a.sibling}function jv(t,e,a){if(Ja&&typeof Ja.onCommitFiberUnmount=="function")try{Ja.onCommitFiberUnmount(kl,a)}catch{}switch(a.tag){case 26:Yt||Hn(a,e),ri(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||Hn(a,e);var n=Ut,i=Fa;ms(a.type)&&(Ut=a.stateNode,Fa=!1),ri(t,e,a),bl(a.stateNode),Ut=n,Fa=i;break;case 5:Yt||Hn(a,e);case 6:if(n=Ut,i=Fa,Ut=null,ri(t,e,a),Ut=n,Fa=i,Ut!==null)if(Fa)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(a.stateNode)}catch(s){gt(a,e,s)}else try{Ut.removeChild(a.stateNode)}catch(s){gt(a,e,s)}break;case 18:Ut!==null&&(Fa?(t=Ut,VS(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),$r(t)):VS(Ut,a.stateNode));break;case 4:n=Ut,i=Fa,Ut=a.stateNode.containerInfo,Fa=!0,ri(t,e,a),Ut=n,Fa=i;break;case 0:case 11:case 14:case 15:ds(2,a,e),Yt||ds(4,a,e),ri(t,e,a);break;case 1:Yt||(Hn(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Xv(a,e,n)),ri(t,e,a);break;case 21:ri(t,e,a);break;case 22:Yt=(n=Yt)||a.memoizedState!==null,ri(t,e,a),Yt=n;break;default:ri(t,e,a)}}function $v(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{$r(t)}catch(a){gt(e,e.return,a)}}}function e_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$r(t)}catch(a){gt(e,e.return,a)}}function PA(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new IS),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new IS),e;default:throw Error(ae(435,t.tag))}}function Ec(t,e){var a=PA(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=GA.bind(null,t,n);n.then(i,i)}})}function Oa(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(ms(o.type)){Ut=o.stateNode,Fa=!1;break e}break;case 5:Ut=o.stateNode,Fa=!1;break e;case 3:case 4:Ut=o.stateNode.containerInfo,Fa=!0;break e}o=o.return}if(Ut===null)throw Error(ae(160));jv(s,r,i),Ut=null,Fa=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)t_(e,t),e=e.sibling}var bn=null;function t_(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Oa(e,t),Ba(t),n&4&&(ds(3,t,t.return),Yl(3,t),ds(5,t,t.return));break;case 1:Oa(e,t),Ba(t),n&512&&(Yt||a===null||Hn(a,a.return)),n&64&&ci&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=bn;if(Oa(e,t),Ba(t),n&512&&(Yt||a===null||Hn(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){e:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Vl]||s[da]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),ma(s,n,a),s[da]=t,ia(s),n=s;break e;case"link":var r=JS("link","href",i).get(n+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break t}}s=i.createElement(n),ma(s,n,a),i.head.appendChild(s);break;case"meta":if(r=JS("meta","content",i).get(n+(a.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break t}}s=i.createElement(n),ma(s,n,a),i.head.appendChild(s);break;default:throw Error(ae(468,n))}s[da]=t,ia(s),n=s}t.stateNode=n}else QS(i,t.type,t.stateNode);else t.stateNode=KS(i,n,t.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?QS(i,t.type,t.stateNode):KS(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Cp(t,t.memoizedProps,a.memoizedProps)}break;case 27:Oa(e,t),Ba(t),n&512&&(Yt||a===null||Hn(a,a.return)),a!==null&&n&4&&Cp(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Oa(e,t),Ba(t),n&512&&(Yt||a===null||Hn(a,a.return)),t.flags&32){i=t.stateNode;try{Wr(i,"")}catch(S){gt(t,t.return,S)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Cp(t,i,a!==null?a.memoizedProps:i)),n&1024&&(Tp=!0);break;case 6:if(Oa(e,t),Ba(t),n&4){if(t.stateNode===null)throw Error(ae(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(S){gt(t,t.return,S)}}break;case 3:if(Yc=null,i=bn,bn=_f(e.containerInfo),Oa(e,t),bn=i,Ba(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{$r(e.containerInfo)}catch(S){gt(t,t.return,S)}Tp&&(Tp=!1,a_(t));break;case 4:n=bn,bn=_f(t.stateNode.containerInfo),Oa(e,t),Ba(t),bn=n;break;case 12:Oa(e,t),Ba(t);break;case 31:Oa(e,t),Ba(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ec(t,n)));break;case 13:Oa(e,t),Ba(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bf=Ka()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ec(t,n)));break;case 22:i=t.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=ci,d=Yt;if(ci=u||i,Yt=d||l,Oa(e,t),Yt=d,ci=u,Ba(t),n&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||l||ci||Yt||ks(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){l=a=e;try{if(s=l.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,f=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(S){gt(l,l.return,S)}}}else if(e.tag===6){if(a===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(S){gt(l,l.return,S)}}}else if(e.tag===18){if(a===null){l=e;try{var h=l.stateNode;i?qS(h,!0):qS(l.stateNode,!1)}catch(S){gt(l,l.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ec(t,a))));break;case 19:Oa(e,t),Ba(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Ec(t,n)));break;case 30:break;case 21:break;default:Oa(e,t),Ba(t)}}function Ba(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(Zv(n)){a=n;break}n=n.return}if(a==null)throw Error(ae(160));switch(a.tag){case 27:var i=a.stateNode,s=Ap(t);hf(t,s,i);break;case 5:var r=a.stateNode;a.flags&32&&(Wr(r,""),a.flags&=-33);var o=Ap(t);hf(t,o,r);break;case 3:case 4:var l=a.stateNode.containerInfo,u=Ap(t);pm(t,u,l);break;default:throw Error(ae(161))}}catch(d){gt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function a_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;a_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function oi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Jv(t,e.alternate,e),e=e.sibling}function ks(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:ds(4,e,e.return),ks(e);break;case 1:Hn(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Xv(e,e.return,a),ks(e);break;case 27:bl(e.stateNode);case 26:case 5:Hn(e,e.return),ks(e);break;case 22:e.memoizedState===null&&ks(e);break;case 30:ks(e);break;default:ks(e)}t=t.sibling}}function li(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:li(i,s,a),Yl(4,s);break;case 1:if(li(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){gt(n,n.return,u)}if(n=s,i=n.updateQueue,i!==null){var o=n.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)$y(l[i],o)}catch(u){gt(n,n.return,u)}}a&&r&64&&Wv(s),vl(s,s.return);break;case 27:Kv(s);case 26:case 5:li(i,s,a),a&&n===null&&r&4&&Yv(s),vl(s,s.return);break;case 12:li(i,s,a);break;case 31:li(i,s,a),a&&r&4&&$v(i,s);break;case 13:li(i,s,a),a&&r&4&&e_(i,s);break;case 22:s.memoizedState===null&&li(i,s,a),vl(s,s.return);break;case 30:break;default:li(i,s,a)}e=e.sibling}}function hg(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Wl(a))}function pg(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wl(t))}function Ln(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)n_(t,e,a,n),e=e.sibling}function n_(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ln(t,e,a,n),i&2048&&Yl(9,e);break;case 1:Ln(t,e,a,n);break;case 3:Ln(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Wl(t)));break;case 12:if(i&2048){Ln(t,e,a,n),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){gt(e,e.return,l)}}else Ln(t,e,a,n);break;case 31:Ln(t,e,a,n);break;case 13:Ln(t,e,a,n);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?Ln(t,e,a,n):_l(t,e):s._visibility&2?Ln(t,e,a,n):(s._visibility|=2,Mr(t,e,a,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&hg(r,e);break;case 24:Ln(t,e,a,n),i&2048&&pg(e.alternate,e);break;default:Ln(t,e,a,n)}}function Mr(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:Mr(s,r,o,l,i),Yl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Mr(s,r,o,l,i):_l(s,r):(d._visibility|=2,Mr(s,r,o,l,i)),i&&u&2048&&hg(r.alternate,r);break;case 24:Mr(s,r,o,l,i),i&&u&2048&&pg(r.alternate,r);break;default:Mr(s,r,o,l,i)}e=e.sibling}}function _l(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:_l(a,n),i&2048&&hg(n.alternate,n);break;case 24:_l(a,n),i&2048&&pg(n.alternate,n);break;default:_l(a,n)}e=e.sibling}}var fl=8192;function _r(t,e,a){if(t.subtreeFlags&fl)for(t=t.child;t!==null;)i_(t,e,a),t=t.sibling}function i_(t,e,a){switch(t.tag){case 26:_r(t,e,a),t.flags&fl&&t.memoizedState!==null&&xT(a,bn,t.memoizedState,t.memoizedProps);break;case 5:_r(t,e,a);break;case 3:case 4:var n=bn;bn=_f(t.stateNode.containerInfo),_r(t,e,a),bn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=fl,fl=16777216,_r(t,e,a),fl=n):_r(t,e,a));break;default:_r(t,e,a)}}function s_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function il(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];na=n,o_(n,t)}s_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r_(t),t=t.sibling}function r_(t){switch(t.tag){case 0:case 11:case 15:il(t),t.flags&2048&&ds(9,t,t.return);break;case 3:il(t);break;case 12:il(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Wc(t)):il(t);break;default:il(t)}}function Wc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];na=n,o_(n,t)}s_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ds(8,e,e.return),Wc(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Wc(e));break;default:Wc(e)}t=t.sibling}}function o_(t,e){for(;na!==null;){var a=na;switch(a.tag){case 0:case 11:case 15:ds(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,na=n;else e:for(a=t;na!==null;){n=na;var i=n.sibling,s=n.return;if(Qv(n),n===a){na=null;break e}if(i!==null){i.return=s,na=i;break e}na=s}}}var UA={getCacheForType:function(t){var e=pa(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return pa(Zt).controller.signal}},NA=typeof WeakMap=="function"?WeakMap:Map,ct=0,bt=null,je=null,$e=0,mt=0,Wa=null,ji=!1,io=!1,mg=!1,_i=0,zt=0,hs=0,Ws=0,gg=0,Za=0,Kr=0,Ml=null,za=null,mm=!1,Bf=0,l_=0,pf=1/0,mf=null,ss=null,jt=0,rs=null,Jr=null,gi=0,gm=0,xm=null,u_=null,Ll=0,Sm=null;function ja(){return(ct&2)!==0&&$e!==0?$e&-$e:Oe.T!==null?Sg():Sy()}function c_(){if(Za===0)if(($e&536870912)===0||nt){var t=yc;yc<<=1,(yc&3932160)===0&&(yc=262144),Za=t}else Za=536870912;return t=en.current,t!==null&&(t.flags|=32),Za}function ka(t,e,a){(t===bt&&(mt===2||mt===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),$i(t,$e,Za,!1)),Gl(t,a),((ct&2)===0||t!==bt)&&(t===bt&&((ct&2)===0&&(Ws|=a),zt===4&&$i(t,$e,Za,!1)),qn(t))}function f_(t,e,a){if((ct&6)!==0)throw Error(ae(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Hl(t,e),i=n?FA(t,e):Ip(t,e,!0),s=n;do{if(i===0){io&&!n&&$i(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!OA(a)){i=Ip(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=Ml;var l=o.current.memoizedState.isDehydrated;if(l&&(Qr(o,r).flags|=256),r=Ip(o,r,!1),r!==2){if(mg&&!l){o.errorRecoveryDisabledLanes|=s,Ws|=s,i=4;break e}s=za,za=i,s!==null&&(za===null?za=s:za.push.apply(za,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){Qr(t,0),$i(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error(ae(345));case 4:if((e&4194048)!==e)break;case 6:$i(n,e,Za,!ji);break e;case 2:za=null;break;case 3:case 5:break;default:throw Error(ae(329))}if((e&62914560)===e&&(i=Bf+300-Ka(),10<i)){if($i(n,e,Za,!ji),Af(n,0,!0)!==0)break e;gi=e,n.timeoutHandle=R_(ES.bind(null,n,a,za,mf,mm,e,Za,Ws,Kr,ji,s,"Throttled",-0,0),i);break e}ES(n,a,za,mf,mm,e,Za,Ws,Kr,ji,s,null,-0,0)}}break}while(!0);qn(t)}function ES(t,e,a,n,i,s,r,o,l,u,d,p,f,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:di},i_(e,s,p);var S=(s&62914560)===s?Bf-Ka():(s&4194048)===s?l_-Ka():0;if(S=ST(p,S),S!==null){gi=s,t.cancelPendingCommit=S(RS.bind(null,t,e,s,a,n,i,r,o,l,d,p,null,f,h)),$i(t,s,r,!u);return}}RS(t,e,s,a,n,i,r,o,l)}function OA(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!$a(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e,a,n){e&=~gg,e&=~Ws,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-Qa(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&my(t,a,e)}function Ff(){return(ct&6)===0?(Zl(0,!1),!1):!0}function xg(){if(je!==null){if(mt===0)var t=je.return;else t=je,hi=tr=null,ag(t),kr=null,Rl=0,t=je;for(;t!==null;)qv(t.alternate,t),t=t.return;je=null}}function Qr(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,eT(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),gi=0,xg(),bt=t,je=a=pi(t.current,null),$e=e,mt=0,Wa=null,ji=!1,io=Hl(t,e),mg=!1,Kr=Za=gg=Ws=hs=zt=0,za=Ml=null,mm=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Qa(n),s=1<<i;e|=t[i],n&=~s}return _i=e,wf(),a}function d_(t,e){We=null,Oe.H=Pl,e===no||e===Df?(e=oS(),mt=3):e===Km?(e=oS(),mt=4):mt=e===fg?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Wa=e,je===null&&(zt=1,ff(t,dn(e,t.current)))}function h_(){var t=en.current;return t===null?!0:($e&4194048)===$e?pn===null:($e&62914560)===$e||($e&536870912)!==0?t===pn:!1}function p_(){var t=Oe.H;return Oe.H=Pl,t===null?Pl:t}function m_(){var t=Oe.A;return Oe.A=UA,t}function gf(){zt=4,ji||($e&4194048)!==$e&&en.current!==null||(io=!0),(hs&134217727)===0&&(Ws&134217727)===0||bt===null||$i(bt,$e,Za,!1)}function Ip(t,e,a){var n=ct;ct|=2;var i=p_(),s=m_();(bt!==t||$e!==e)&&(mf=null,Qr(t,e)),e=!1;var r=zt;e:do try{if(mt!==0&&je!==null){var o=je,l=Wa;switch(mt){case 8:xg(),r=6;break e;case 3:case 2:case 9:case 6:en.current===null&&(e=!0);var u=mt;if(mt=0,Wa=null,Nr(t,o,l,u),a&&io){r=0;break e}break;default:u=mt,mt=0,Wa=null,Nr(t,o,l,u)}}BA(),r=zt;break}catch(d){d_(t,d)}while(!0);return e&&t.shellSuspendCounter++,hi=tr=null,ct=n,Oe.H=i,Oe.A=s,je===null&&(bt=null,$e=0,wf()),r}function BA(){for(;je!==null;)g_(je)}function FA(t,e){var a=ct;ct|=2;var n=p_(),i=m_();bt!==t||$e!==e?(mf=null,pf=Ka()+500,Qr(t,e)):io=Hl(t,e);e:do try{if(mt!==0&&je!==null){e=je;var s=Wa;t:switch(mt){case 1:mt=0,Wa=null,Nr(t,e,s,1);break;case 2:case 9:if(rS(s)){mt=0,Wa=null,wS(e);break}e=function(){mt!==2&&mt!==9||bt!==t||(mt=7),qn(t)},s.then(e,e);break e;case 3:mt=7;break e;case 4:mt=5;break e;case 7:rS(s)?(mt=0,Wa=null,wS(e)):(mt=0,Wa=null,Nr(t,e,s,7));break;case 5:var r=null;switch(je.tag){case 26:r=je.memoizedState;case 5:case 27:var o=je;if(r?O_(r):o.stateNode.complete){mt=0,Wa=null;var l=o.sibling;if(l!==null)je=l;else{var u=o.return;u!==null?(je=u,zf(u)):je=null}break t}}mt=0,Wa=null,Nr(t,e,s,5);break;case 6:mt=0,Wa=null,Nr(t,e,s,6);break;case 8:xg(),zt=6;break e;default:throw Error(ae(462))}}zA();break}catch(d){d_(t,d)}while(!0);return hi=tr=null,Oe.H=n,Oe.A=i,ct=a,je!==null?0:(bt=null,$e=0,wf(),zt)}function zA(){for(;je!==null&&!lC();)g_(je)}function g_(t){var e=Vv(t.alternate,t,_i);t.memoizedProps=t.pendingProps,e===null?zf(t):je=e}function wS(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=LS(a,e,e.pendingProps,e.type,void 0,$e);break;case 11:e=LS(a,e,e.pendingProps,e.type.render,e.ref,$e);break;case 5:ag(e);default:qv(a,e),e=je=qy(e,_i),e=Vv(a,e,_i)}t.memoizedProps=t.pendingProps,e===null?zf(t):je=e}function Nr(t,e,a,n){hi=tr=null,ag(e),kr=null,Rl=0;var i=e.return;try{if(TA(t,i,e,a,$e)){zt=1,ff(t,dn(a,t.current)),je=null;return}}catch(s){if(i!==null)throw je=i,s;zt=1,ff(t,dn(a,t.current)),je=null;return}e.flags&32768?(nt||n===1?t=!0:io||($e&536870912)!==0?t=!1:(ji=t=!0,(n===2||n===9||n===3||n===6)&&(n=en.current,n!==null&&n.tag===13&&(n.flags|=16384))),x_(e,t)):zf(e)}function zf(t){var e=t;do{if((e.flags&32768)!==0){x_(e,ji);return}t=e.return;var a=wA(e.alternate,e,_i);if(a!==null){je=a;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);zt===0&&(zt=5)}function x_(t,e){do{var a=RA(t.alternate,t);if(a!==null){a.flags&=32767,je=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){je=t;return}je=t=a}while(t!==null);zt=6,je=null}function RS(t,e,a,n,i,s,r,o,l){t.cancelPendingCommit=null;do kf();while(jt!==0);if((ct&6)!==0)throw Error(ae(327));if(e!==null){if(e===t.current)throw Error(ae(177));if(s=e.lanes|e.childLanes,s|=Gm,SC(t,a,s,r,o,l),t===bt&&(je=bt=null,$e=0),Jr=e,rs=t,gi=a,gm=s,xm=i,u_=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,VA($c,function(){return M_(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=Oe.T,Oe.T=null,i=ft.p,ft.p=2,r=ct,ct|=4;try{DA(t,e,a)}finally{ct=r,ft.p=i,Oe.T=n}}jt=1,S_(),y_(),v_()}}function S_(){if(jt===1){jt=0;var t=rs,e=Jr,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=Oe.T,Oe.T=null;var n=ft.p;ft.p=2;var i=ct;ct|=4;try{t_(e,t);var s=Mm,r=Oy(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ny(o.ownerDocument.documentElement,o)){if(l!==null&&Hm(o)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,f=p&&p.defaultView||window;if(f.getSelection){var h=f.getSelection(),S=o.textContent.length,M=Math.min(l.start,S),x=l.end===void 0?M:Math.min(l.end,S);!h.extend&&M>x&&(r=x,x=M,M=r);var c=$0(o,M),m=$0(o,x);if(c&&m&&(h.rangeCount!==1||h.anchorNode!==c.node||h.anchorOffset!==c.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var v=p.createRange();v.setStart(c.node,c.offset),h.removeAllRanges(),M>x?(h.addRange(v),h.extend(m.node,m.offset)):(v.setEnd(m.node,m.offset),h.addRange(v))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}bf=!!_m,Mm=_m=null}finally{ct=i,ft.p=n,Oe.T=a}}t.current=e,jt=2}}function y_(){if(jt===2){jt=0;var t=rs,e=Jr,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=Oe.T,Oe.T=null;var n=ft.p;ft.p=2;var i=ct;ct|=4;try{Jv(t,e.alternate,e)}finally{ct=i,ft.p=n,Oe.T=a}}jt=3}}function v_(){if(jt===4||jt===3){jt=0,uC();var t=rs,e=Jr,a=gi,n=u_;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?jt=5:(jt=0,Jr=rs=null,__(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(ss=null),Um(a),e=e.stateNode,Ja&&typeof Ja.onCommitFiberRoot=="function")try{Ja.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=Oe.T,i=ft.p,ft.p=2,Oe.T=null;try{for(var s=t.onRecoverableError,r=0;r<n.length;r++){var o=n[r];s(o.value,{componentStack:o.stack})}}finally{Oe.T=e,ft.p=i}}(gi&3)!==0&&kf(),qn(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===Sm?Ll++:(Ll=0,Sm=t):Ll=0,Zl(0,!1)}}function __(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Wl(e)))}function kf(){return S_(),y_(),v_(),M_()}function M_(){if(jt!==5)return!1;var t=rs,e=gm;gm=0;var a=Um(gi),n=Oe.T,i=ft.p;try{ft.p=32>a?32:a,Oe.T=null,a=xm,xm=null;var s=rs,r=gi;if(jt=0,Jr=rs=null,gi=0,(ct&6)!==0)throw Error(ae(331));var o=ct;if(ct|=4,r_(s.current),n_(s,s.current,r,a),ct=o,Zl(0,!1),Ja&&typeof Ja.onPostCommitFiberRoot=="function")try{Ja.onPostCommitFiberRoot(kl,s)}catch{}return!0}finally{ft.p=i,Oe.T=n,__(t,e)}}function DS(t,e,a){e=dn(a,e),e=fm(t.stateNode,e,2),t=is(t,e,2),t!==null&&(Gl(t,2),qn(t))}function gt(t,e,a){if(t.tag===3)DS(t,t,a);else for(;e!==null;){if(e.tag===3){DS(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ss===null||!ss.has(n))){t=dn(a,t),a=Bv(2),n=is(e,a,2),n!==null&&(Fv(a,n,e,t),Gl(n,2),qn(n));break}}e=e.return}}function Ep(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new NA;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(mg=!0,i.add(a),t=kA.bind(null,t,e,a),e.then(t,t))}function kA(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,bt===t&&($e&a)===a&&(zt===4||zt===3&&($e&62914560)===$e&&300>Ka()-Bf?(ct&2)===0&&Qr(t,0):gg|=a,Kr===$e&&(Kr=0)),qn(t)}function L_(t,e){e===0&&(e=py()),t=er(t,e),t!==null&&(Gl(t,e),qn(t))}function HA(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),L_(t,a)}function GA(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(ae(314))}n!==null&&n.delete(e),L_(t,a)}function VA(t,e){return Dm(t,e)}var xf=null,Lr=null,ym=!1,Sf=!1,wp=!1,es=0;function qn(t){t!==Lr&&t.next===null&&(Lr===null?xf=Lr=t:Lr=Lr.next=t),Sf=!0,ym||(ym=!0,WA())}function Zl(t,e){if(!wp&&Sf){wp=!0;do for(var a=!1,n=xf;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-Qa(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,PS(n,s))}else s=$e,s=Af(n,n===bt?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Hl(n,s)||(a=!0,PS(n,s));n=n.next}while(a);wp=!1}}function qA(){b_()}function b_(){Sf=ym=!1;var t=0;es!==0&&$A()&&(t=es);for(var e=Ka(),a=null,n=xf;n!==null;){var i=n.next,s=C_(n,e);s===0?(n.next=null,a===null?xf=i:a.next=i,i===null&&(Lr=a)):(a=n,(t!==0||(s&3)!==0)&&(Sf=!0)),n=i}jt!==0&&jt!==5||Zl(t,!1),es!==0&&(es=0)}function C_(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Qa(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=xC(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=bt,a=$e,a=Af(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(mt===2||mt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&sp(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Hl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&sp(n),Um(a)){case 2:case 8:a=dy;break;case 32:a=$c;break;case 268435456:a=hy;break;default:a=$c}return n=A_.bind(null,t),a=Dm(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&sp(n),t.callbackPriority=2,t.callbackNode=null,2}function A_(t,e){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(kf()&&t.callbackNode!==a)return null;var n=$e;return n=Af(t,t===bt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(f_(t,n,e),C_(t,Ka()),t.callbackNode!=null&&t.callbackNode===a?A_.bind(null,t):null)}function PS(t,e){if(kf())return null;f_(t,e,!0)}function WA(){tT(function(){(ct&6)!==0?Dm(fy,qA):b_()})}function Sg(){if(es===0){var t=Xr;t===0&&(t=Sc,Sc<<=1,(Sc&261888)===0&&(Sc=256)),es=t}return es}function US(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Oc(""+t)}function NS(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function XA(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=US((i[Ha]||null).action),r=n.submitter;r&&(e=(e=r[Ha]||null)?US(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new Tf("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(es!==0){var l=r?NS(i,r):new FormData(i);um(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?NS(i,r):new FormData(i),um(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(wc=0;wc<Qp.length;wc++)Rc=Qp[wc],OS=Rc.toLowerCase(),BS=Rc[0].toUpperCase()+Rc.slice(1),Cn(OS,"on"+BS);var Rc,OS,BS,wc;Cn(Fy,"onAnimationEnd");Cn(zy,"onAnimationIteration");Cn(ky,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(cA,"onTransitionRun");Cn(fA,"onTransitionStart");Cn(dA,"onTransitionCancel");Cn(Hy,"onTransitionEnd");qr("onMouseEnter",["mouseout","mouseover"]);qr("onMouseLeave",["mouseout","mouseover"]);qr("onPointerEnter",["pointerout","pointerover"]);qr("onPointerLeave",["pointerout","pointerover"]);Qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function T_(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){tf(d)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(d){tf(d)}i.currentTarget=null,s=l}}}}function Qe(t,e){var a=e[Vp];a===void 0&&(a=e[Vp]=new Set);var n=t+"__bubble";a.has(n)||(I_(e,t,2,!1),a.add(n))}function Rp(t,e,a){var n=0;e&&(n|=4),I_(a,t,n,e)}var Dc="_reactListening"+Math.random().toString(36).slice(2);function yg(t){if(!t[Dc]){t[Dc]=!0,yy.forEach(function(a){a!=="selectionchange"&&(YA.has(a)||Rp(a,!1,t),Rp(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Dc]||(e[Dc]=!0,Rp("selectionchange",!1,e))}}function I_(t,e,a,n){switch(H_(e)){case 2:var i=_T;break;case 8:i=MT;break;default:i=Lg}a=i.bind(null,e,a,t),i=void 0,!Zp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function Dp(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=Ar(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}Ty(function(){var u=s,d=Bm(a),p=[];e:{var f=Gy.get(t);if(f!==void 0){var h=Tf,S=t;switch(t){case"keypress":if(Fc(a)===0)break e;case"keydown":case"keyup":h=GC;break;case"focusin":S="focus",h=cp;break;case"focusout":S="blur",h=cp;break;case"beforeblur":case"afterblur":h=cp;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=wC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=WC;break;case Fy:case zy:case ky:h=PC;break;case Hy:h=YC;break;case"scroll":case"scrollend":h=IC;break;case"wheel":h=KC;break;case"copy":case"cut":case"paste":h=NC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=X0;break;case"toggle":case"beforetoggle":h=QC}var M=(e&4)!==0,x=!M&&(t==="scroll"||t==="scrollend"),c=M?f!==null?f+"Capture":null:f;M=[];for(var m=u,v;m!==null;){var y=m;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||c===null||(y=Al(m,c),y!=null&&M.push(Nl(m,y,v))),x)break;m=m.return}0<M.length&&(f=new h(f,S,null,a,d),p.push({event:f,listeners:M}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&a!==Yp&&(S=a.relatedTarget||a.fromElement)&&(Ar(S)||S[eo]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(S=a.relatedTarget||a.toElement,h=u,S=S?Ar(S):null,S!==null&&(x=zl(S),M=S.tag,S!==x||M!==5&&M!==27&&M!==6)&&(S=null)):(h=null,S=u),h!==S)){if(M=q0,y="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=X0,y="onPointerLeave",c="onPointerEnter",m="pointer"),x=h==null?f:ul(h),v=S==null?f:ul(S),f=new M(y,m+"leave",h,a,d),f.target=x,f.relatedTarget=v,y=null,Ar(d)===u&&(M=new M(c,m+"enter",S,a,d),M.target=v,M.relatedTarget=x,y=M),x=y,h&&S)t:{for(M=ZA,c=h,m=S,v=0,y=c;y;y=M(y))v++;y=0;for(var I=m;I;I=M(I))y++;for(;0<v-y;)c=M(c),v--;for(;0<y-v;)m=M(m),y--;for(;v--;){if(c===m||m!==null&&c===m.alternate){M=c;break t}c=M(c),m=M(m)}M=null}else M=null;h!==null&&FS(p,f,h,M,!1),S!==null&&x!==null&&FS(p,x,S,M,!0)}}e:{if(f=u?ul(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var T=J0;else if(K0(f))if(Py)T=oA;else{T=sA;var g=iA}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&Om(u.elementType)&&(T=J0):T=rA;if(T&&(T=T(t,u))){Dy(p,T,a,d);break e}g&&g(t,f,u),t==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Xp(f,"number",f.value)}switch(g=u?ul(u):window,t){case"focusin":(K0(g)||g.contentEditable==="true")&&(Er=g,Kp=u,pl=null);break;case"focusout":pl=Kp=Er=null;break;case"mousedown":Jp=!0;break;case"contextmenu":case"mouseup":case"dragend":Jp=!1,eS(p,a,d);break;case"selectionchange":if(uA)break;case"keydown":case"keyup":eS(p,a,d)}var C;if(km)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Ir?wy(t,a)&&(U="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(U="onCompositionStart");U&&(Ey&&a.locale!=="ko"&&(Ir||U!=="onCompositionStart"?U==="onCompositionEnd"&&Ir&&(C=Iy()):(Qi=d,Fm="value"in Qi?Qi.value:Qi.textContent,Ir=!0)),g=yf(u,U),0<g.length&&(U=new W0(U,t,null,a,d),p.push({event:U,listeners:g}),C?U.data=C:(C=Ry(a),C!==null&&(U.data=C)))),(C=$C?eA(t,a):tA(t,a))&&(U=yf(u,"onBeforeInput"),0<U.length&&(g=new W0("onBeforeInput","beforeinput",null,a,d),p.push({event:g,listeners:U}),g.data=C)),XA(p,t,u,a,d)}T_(p,e)})}function Nl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function yf(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Al(t,a),i!=null&&n.unshift(Nl(t,i,s)),i=Al(t,e),i!=null&&n.push(Nl(t,i,s))),t.tag===3)return n;t=t.return}return[]}function ZA(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function FS(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=Al(a,s),u!=null&&r.unshift(Nl(a,u,l))):i||(u=Al(a,s),u!=null&&r.push(Nl(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var KA=/\r\n?/g,JA=/\u0000|\uFFFD/g;function zS(t){return(typeof t=="string"?t:""+t).replace(KA,`
`).replace(JA,"")}function E_(t,e){return e=zS(e),zS(t)===e}function Mt(t,e,a,n,i,s){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||Wr(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&Wr(t,""+n);break;case"className":_c(t,"class",n);break;case"tabIndex":_c(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":_c(t,a,n);break;case"style":Ay(t,n,s);break;case"data":if(e!=="object"){_c(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Oc(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&Mt(t,e,"name",i.name,i,null),Mt(t,e,"formEncType",i.formEncType,i,null),Mt(t,e,"formMethod",i.formMethod,i,null),Mt(t,e,"formTarget",i.formTarget,i,null)):(Mt(t,e,"encType",i.encType,i,null),Mt(t,e,"method",i.method,i,null),Mt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Oc(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=di);break;case"onScroll":n!=null&&Qe("scroll",t);break;case"onScrollEnd":n!=null&&Qe("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ae(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ae(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Oc(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":Qe("beforetoggle",t),Qe("toggle",t),Nc(t,"popover",n);break;case"xlinkActuate":ii(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ii(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ii(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ii(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ii(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ii(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ii(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ii(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ii(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Nc(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=AC.get(a)||a,Nc(t,a,n))}}function vm(t,e,a,n,i,s){switch(a){case"style":Ay(t,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ae(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ae(60));t.innerHTML=a}}break;case"children":typeof n=="string"?Wr(t,n):(typeof n=="number"||typeof n=="bigint")&&Wr(t,""+n);break;case"onScroll":n!=null&&Qe("scroll",t);break;case"onScrollEnd":n!=null&&Qe("scrollend",t);break;case"onClick":n!=null&&(t.onclick=di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vy.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),s=t[Ha]||null,s=s!=null?s[a]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break e}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Nc(t,a,n)}}}function ma(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",t),Qe("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:Mt(t,e,s,r,a,null)}}i&&Mt(t,e,"srcSet",a.srcSet,a,null),n&&Mt(t,e,"src",a.src,a,null);return;case"input":Qe("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var d=a[n];if(d!=null)switch(n){case"name":i=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ae(137,e));break;default:Mt(t,e,n,d,a,null)}}Ly(t,s,o,l,u,r,i,!1);return;case"select":Qe("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:Mt(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?Br(t,!!n,e,!1):a!=null&&Br(t,!!n,a,!0);return;case"textarea":Qe("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ae(91));break;default:Mt(t,e,r,o,a,null)}Cy(t,n,i,s);return;case"option":for(l in a)a.hasOwnProperty(l)&&(n=a[l],n!=null)&&(l==="selected"?t.selected=n&&typeof n!="function"&&typeof n!="symbol":Mt(t,e,l,n,a,null));return;case"dialog":Qe("beforetoggle",t),Qe("toggle",t),Qe("cancel",t),Qe("close",t);break;case"iframe":case"object":Qe("load",t);break;case"video":case"audio":for(n=0;n<Ul.length;n++)Qe(Ul[n],t);break;case"image":Qe("error",t),Qe("load",t);break;case"details":Qe("toggle",t);break;case"embed":case"source":case"link":Qe("error",t),Qe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(ae(137,e));default:Mt(t,e,u,n,a,null)}return;default:if(Om(e)){for(d in a)a.hasOwnProperty(d)&&(n=a[d],n!==void 0&&vm(t,e,d,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&Mt(t,e,o,n,a,null))}function QA(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,d=null;for(h in a){var p=a[h];if(a.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:n.hasOwnProperty(h)||Mt(t,e,h,null,n,p)}}for(var f in n){var h=n[f];if(p=a[f],n.hasOwnProperty(f)&&(h!=null||p!=null))switch(f){case"type":s=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ae(137,e));break;default:h!==p&&Mt(t,e,f,h,n,p)}}Wp(t,r,o,l,u,d,s,i);return;case"select":h=r=o=f=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||Mt(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":f=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&Mt(t,e,i,s,n,l)}e=o,a=r,n=h,f!=null?Br(t,!!a,f,!1):!!n!=!!a&&(e!=null?Br(t,!!a,e,!0):Br(t,!!a,a?[]:"",!1));return;case"textarea":h=f=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Mt(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":f=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(ae(91));break;default:i!==s&&Mt(t,e,r,i,n,s)}by(t,f,h);return;case"option":for(var S in a)f=a[S],a.hasOwnProperty(S)&&f!=null&&!n.hasOwnProperty(S)&&(S==="selected"?t.selected=!1:Mt(t,e,S,null,n,f));for(l in n)f=n[l],h=a[l],n.hasOwnProperty(l)&&f!==h&&(f!=null||h!=null)&&(l==="selected"?t.selected=f&&typeof f!="function"&&typeof f!="symbol":Mt(t,e,l,f,n,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in a)f=a[M],a.hasOwnProperty(M)&&f!=null&&!n.hasOwnProperty(M)&&Mt(t,e,M,null,n,f);for(u in n)if(f=n[u],h=a[u],n.hasOwnProperty(u)&&f!==h&&(f!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(ae(137,e));break;default:Mt(t,e,u,f,n,h)}return;default:if(Om(e)){for(var x in a)f=a[x],a.hasOwnProperty(x)&&f!==void 0&&!n.hasOwnProperty(x)&&vm(t,e,x,void 0,n,f);for(d in n)f=n[d],h=a[d],!n.hasOwnProperty(d)||f===h||f===void 0&&h===void 0||vm(t,e,d,f,n,h);return}}for(var c in a)f=a[c],a.hasOwnProperty(c)&&f!=null&&!n.hasOwnProperty(c)&&Mt(t,e,c,null,n,f);for(p in n)f=n[p],h=a[p],!n.hasOwnProperty(p)||f===h||f==null&&h==null||Mt(t,e,p,f,n,h)}function kS(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jA(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&kS(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var d=l.transferSize,p=l.initiatorType;d&&kS(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _m=null,Mm=null;function vf(t){return t.nodeType===9?t:t.ownerDocument}function HS(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function w_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Lm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pp=null;function $A(){var t=window.event;return t&&t.type==="popstate"?t===Pp?!1:(Pp=t,!0):(Pp=null,!1)}var R_=typeof setTimeout=="function"?setTimeout:void 0,eT=typeof clearTimeout=="function"?clearTimeout:void 0,GS=typeof Promise=="function"?Promise:void 0,tT=typeof queueMicrotask=="function"?queueMicrotask:typeof GS<"u"?function(t){return GS.resolve(null).then(t).catch(aT)}:R_;function aT(t){setTimeout(function(){throw t})}function ms(t){return t==="head"}function VS(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),$r(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")bl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bl(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Vl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&bl(t.ownerDocument.body);a=i}while(a);$r(e)}function qS(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function bm(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bm(a),Nm(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nT(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Vl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=mn(t.nextSibling),t===null)break}return null}function iT(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=mn(t.nextSibling),t===null))return null;return t}function D_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=mn(t.nextSibling),t===null))return null;return t}function Cm(t){return t.data==="$?"||t.data==="$~"}function Am(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sT(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Tm=null;function WS(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return mn(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function XS(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function P_(t,e,a){switch(e=vf(a),t){case"html":if(t=e.documentElement,!t)throw Error(ae(452));return t;case"head":if(t=e.head,!t)throw Error(ae(453));return t;case"body":if(t=e.body,!t)throw Error(ae(454));return t;default:throw Error(ae(451))}}function bl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Nm(t)}var gn=new Map,YS=new Set;function _f(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Mi=ft.d;ft.d={f:rT,r:oT,D:lT,C:uT,L:cT,m:fT,X:hT,S:dT,M:pT};function rT(){var t=Mi.f(),e=Ff();return t||e}function oT(t){var e=to(t);e!==null&&e.tag===5&&e.type==="form"?Av(e):Mi.r(t)}var so=typeof document>"u"?null:document;function U_(t,e,a){var n=so;if(n&&typeof e=="string"&&e){var i=fn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),YS.has(i)||(YS.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),ma(e,"link",t),ia(e),n.head.appendChild(e)))}}function lT(t){Mi.D(t),U_("dns-prefetch",t,null)}function uT(t,e){Mi.C(t,e),U_("preconnect",t,e)}function cT(t,e,a){Mi.L(t,e,a);var n=so;if(n&&t&&e){var i='link[rel="preload"][as="'+fn(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+fn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+fn(a.imageSizes)+'"]')):i+='[href="'+fn(t)+'"]';var s=i;switch(e){case"style":s=jr(t);break;case"script":s=ro(t)}gn.has(s)||(t=wt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),gn.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(Kl(s))||e==="script"&&n.querySelector(Jl(s))||(e=n.createElement("link"),ma(e,"link",t),ia(e),n.head.appendChild(e)))}}function fT(t,e){Mi.m(t,e);var a=so;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+fn(n)+'"][href="'+fn(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ro(t)}if(!gn.has(s)&&(t=wt({rel:"modulepreload",href:t},e),gn.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jl(s)))return}n=a.createElement("link"),ma(n,"link",t),ia(n),a.head.appendChild(n)}}}function dT(t,e,a){Mi.S(t,e,a);var n=so;if(n&&t){var i=Or(n).hoistableStyles,s=jr(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(Kl(s)))o.loading=5;else{t=wt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=gn.get(s))&&vg(t,a);var l=r=n.createElement("link");ia(l),ma(l,"link",t),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xc(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function hT(t,e){Mi.X(t,e);var a=so;if(a&&t){var n=Or(a).hoistableScripts,i=ro(t),s=n.get(i);s||(s=a.querySelector(Jl(i)),s||(t=wt({src:t,async:!0},e),(e=gn.get(i))&&_g(t,e),s=a.createElement("script"),ia(s),ma(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function pT(t,e){Mi.M(t,e);var a=so;if(a&&t){var n=Or(a).hoistableScripts,i=ro(t),s=n.get(i);s||(s=a.querySelector(Jl(i)),s||(t=wt({src:t,async:!0,type:"module"},e),(e=gn.get(i))&&_g(t,e),s=a.createElement("script"),ia(s),ma(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function ZS(t,e,a,n){var i=(i=ts.current)?_f(i):null;if(!i)throw Error(ae(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=jr(a.href),a=Or(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var s=Or(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(Kl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),gn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gn.set(t,a),s||mT(i,t,a,r.state))),e&&n===null)throw Error(ae(528,""));return r}if(e&&n!==null)throw Error(ae(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ro(a),a=Or(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(ae(444,t))}}function jr(t){return'href="'+fn(t)+'"'}function Kl(t){return'link[rel="stylesheet"]['+t+"]"}function N_(t){return wt({},t,{"data-precedence":t.precedence,precedence:null})}function mT(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),ma(e,"link",a),ia(e),t.head.appendChild(e))}function ro(t){return'[src="'+fn(t)+'"]'}function Jl(t){return"script[async]"+t}function KS(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+fn(a.href)+'"]');if(n)return e.instance=n,ia(n),n;var i=wt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),ia(n),ma(n,"style",i),Xc(n,a.precedence,t),e.instance=n;case"stylesheet":i=jr(a.href);var s=t.querySelector(Kl(i));if(s)return e.state.loading|=4,e.instance=s,ia(s),s;n=N_(a),(i=gn.get(i))&&vg(n,i),s=(t.ownerDocument||t).createElement("link"),ia(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ma(s,"link",n),e.state.loading|=4,Xc(s,a.precedence,t),e.instance=s;case"script":return s=ro(a.src),(i=t.querySelector(Jl(s)))?(e.instance=i,ia(i),i):(n=a,(i=gn.get(s))&&(n=wt({},a),_g(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),ia(i),ma(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(ae(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Xc(n,a.precedence,t));return e.instance}function Xc(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function vg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function _g(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Yc=null;function JS(t,e,a){if(Yc===null){var n=new Map,i=Yc=new Map;i.set(a,n)}else i=Yc,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[Vl]||s[da]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function QS(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function gT(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function O_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function xT(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=jr(n.href),s=e.querySelector(Kl(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Mf.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,ia(s);return}s=e.ownerDocument||e,n=N_(n),(i=gn.get(i))&&vg(n,i),s=s.createElement("link"),ia(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ma(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Mf.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Up=0;function ST(t,e){return t.stylesheets&&t.count===0&&Zc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&Zc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Up===0&&(Up=62500*jA());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Zc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Up?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Mf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lf=null;function Zc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lf=new Map,e.forEach(yT,t),Lf=null,Mf.call(t))}function yT(t,e){if(!(e.state.loading&4)){var a=Lf.get(t);if(a)var n=a.get(null);else{a=new Map,Lf.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=Mf.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ol={$$typeof:fi,Provider:null,Consumer:null,_currentValue:Hs,_currentValue2:Hs,_threadCount:0};function vT(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.hiddenUpdates=rp(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function B_(t,e,a,n,i,s,r,o,l,u,d,p){return t=new vT(t,e,a,r,l,u,d,p,o),e=1,s===!0&&(e|=24),s=Ya(3,null,null,e),t.current=s,s.stateNode=t,e=Ym(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},Jm(s),t}function F_(t){return t?(t=Dr,t):Dr}function z_(t,e,a,n,i,s){i=F_(i),n.context===null?n.context=i:n.pendingContext=i,n=ns(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=is(t,n,e),a!==null&&(ka(a,t,e),gl(a,t,e))}function jS(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Mg(t,e){jS(t,e),(t=t.alternate)&&jS(t,e)}function k_(t){if(t.tag===13||t.tag===31){var e=er(t,67108864);e!==null&&ka(e,t,67108864),Mg(t,67108864)}}function $S(t){if(t.tag===13||t.tag===31){var e=ja();e=Pm(e);var a=er(t,e);a!==null&&ka(a,t,e),Mg(t,e)}}var bf=!0;function _T(t,e,a,n){var i=Oe.T;Oe.T=null;var s=ft.p;try{ft.p=2,Lg(t,e,a,n)}finally{ft.p=s,Oe.T=i}}function MT(t,e,a,n){var i=Oe.T;Oe.T=null;var s=ft.p;try{ft.p=8,Lg(t,e,a,n)}finally{ft.p=s,Oe.T=i}}function Lg(t,e,a,n){if(bf){var i=Im(n);if(i===null)Dp(t,e,n,Cf,a),ey(t,n);else if(bT(i,t,e,a,n))n.stopPropagation();else if(ey(t,n),e&4&&-1<LT.indexOf(t)){for(;i!==null;){var s=to(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=Fs(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Qa(r);o.entanglements[1]|=l,r&=~l}qn(s),(ct&6)===0&&(pf=Ka()+500,Zl(0,!1))}}break;case 31:case 13:o=er(s,2),o!==null&&ka(o,s,2),Ff(),Mg(s,2)}if(s=Im(n),s===null&&Dp(t,e,n,Cf,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else Dp(t,e,n,null,a)}}function Im(t){return t=Bm(t),bg(t)}var Cf=null;function bg(t){if(Cf=null,t=Ar(t),t!==null){var e=zl(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=ry(e),t!==null)return t;t=null}else if(a===31){if(t=oy(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Cf=t,null}function H_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cC()){case fy:return 2;case dy:return 8;case $c:case fC:return 32;case hy:return 268435456;default:return 32}default:return 32}}var Em=!1,os=null,ls=null,us=null,Bl=new Map,Fl=new Map,Ki=[],LT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ey(t,e){switch(t){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":Bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fl.delete(e.pointerId)}}function sl(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=to(e),e!==null&&k_(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bT(t,e,a,n,i){switch(e){case"focusin":return os=sl(os,t,e,a,n,i),!0;case"dragenter":return ls=sl(ls,t,e,a,n,i),!0;case"mouseover":return us=sl(us,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return Bl.set(s,sl(Bl.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Fl.set(s,sl(Fl.get(s)||null,t,e,a,n,i)),!0}return!1}function G_(t){var e=Ar(t.target);if(e!==null){var a=zl(e);if(a!==null){if(e=a.tag,e===13){if(e=ry(a),e!==null){t.blockedOn=e,B0(t.priority,function(){$S(a)});return}}else if(e===31){if(e=oy(a),e!==null){t.blockedOn=e,B0(t.priority,function(){$S(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Kc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Im(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);Yp=n,a.target.dispatchEvent(n),Yp=null}else return e=to(a),e!==null&&k_(e),t.blockedOn=a,!1;e.shift()}return!0}function ty(t,e,a){Kc(t)&&a.delete(e)}function CT(){Em=!1,os!==null&&Kc(os)&&(os=null),ls!==null&&Kc(ls)&&(ls=null),us!==null&&Kc(us)&&(us=null),Bl.forEach(ty),Fl.forEach(ty)}function Pc(t,e){t.blockedOn===e&&(t.blockedOn=null,Em||(Em=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,CT)))}var Uc=null;function ay(t){Uc!==t&&(Uc=t,$t.unstable_scheduleCallback($t.unstable_NormalPriority,function(){Uc===t&&(Uc=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(bg(n||a)===null)continue;break}var s=to(a);s!==null&&(t.splice(e,3),e-=3,um(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function $r(t){function e(l){return Pc(l,t)}os!==null&&Pc(os,t),ls!==null&&Pc(ls,t),us!==null&&Pc(us,t),Bl.forEach(e),Fl.forEach(e);for(var a=0;a<Ki.length;a++){var n=Ki[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<Ki.length&&(a=Ki[0],a.blockedOn===null);)G_(a),a.blockedOn===null&&Ki.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[Ha]||null;if(typeof s=="function")r||ay(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[Ha]||null)o=r.formAction;else if(bg(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),ay(a)}}}function V_(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Cg(t){this._internalRoot=t}Hf.prototype.render=Cg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));var a=e.current,n=ja();z_(a,n,t,e,null,null)};Hf.prototype.unmount=Cg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;z_(t.current,2,null,t,null,null),Ff(),e[eo]=null}};function Hf(t){this._internalRoot=t}Hf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sy();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Ki.length&&e!==0&&e<Ki[a].priority;a++);Ki.splice(a,0,t),a===0&&G_(t)}};var ny=iy.version;if(ny!=="19.2.6")throw Error(ae(527,ny,"19.2.6"));ft.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=nC(e),t=t!==null?ly(t):null,t=t===null?null:t.stateNode,t};var AT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Oe,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(rl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!rl.isDisabled&&rl.supportsFiber))try{kl=rl.inject(AT),Ja=rl}catch{}var rl;Gf.createRoot=function(t,e){if(!sy(t))throw Error(ae(299));var a=!1,n="",i=Uv,s=Nv,r=Ov;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=B_(t,1,!1,null,null,a,n,null,i,s,r,V_),t[eo]=e.current,yg(t),new Cg(e)};Gf.hydrateRoot=function(t,e,a){if(!sy(t))throw Error(ae(299));var n=!1,i="",s=Uv,r=Nv,o=Ov,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=B_(t,1,!0,e,a??null,n,i,l,s,r,o,V_),e.context=F_(null),a=e.current,n=ja(),n=Pm(n),i=ns(n),i.callback=null,is(a,i,n),a=n,e.current.lanes=a,Gl(e,a),qn(e),t[eo]=e.current,yg(t),new Hf(e)};Gf.version="19.2.6"});var Y_=Bn((b2,X_)=>{"use strict";function W_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W_)}catch(t){console.error(t)}}W_(),X_.exports=q_()});var yb=Bn(zh=>{"use strict";var f2=Symbol.for("react.transitional.element"),d2=Symbol.for("react.fragment");function Sb(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var i in e)i!=="key"&&(a[i]=e[i])}else a=e;return e=a.ref,{$$typeof:f2,type:t,key:n,ref:e!==void 0?e:null,props:a}}zh.Fragment=d2;zh.jsx=Sb;zh.jsxs=Sb});var Fi=Bn((wN,vb)=>{"use strict";vb.exports=yb()});var Ib=Ea(Y_());var xt=Ea(ni());var MM=0,ax=1,LM=2;var wu=1,Wd=2,Uo=3,Is=0,Na=1,vn=2,or=0,No=1,nx=2,ix=3,sx=4,bM=5;var lr=100,CM=101,AM=102,TM=103,IM=104,EM=200,wM=201,RM=202,DM=203,rx=204,ox=205,PM=206,UM=207,NM=208,OM=209,BM=210,FM=211,zM=212,kM=213,HM=214,hd=0,pd=1,md=2,Mo=3,gd=4,xd=5,Sd=6,yd=7,lx=0,GM=1,VM=2,Qn=0,ux=1,cx=2,fx=3,Ru=4,dx=5,hx=6,px=7;var mx=300,ur=301,Oo=302,Xd=303,Yd=304,vd=1e3,Xn=1001,_d=1002,oa=1003,qM=1004;var Du=1005;var Ua=1006,Zd=1007;var Pi=1008;var qa=1009,gx=1010,xx=1011,Bo=1012,Kd=1013,Rn=1014,Dn=1015,Pn=1016,Jd=1017,Qd=1018,cr=1020,Sx=35902,yx=35899,vx=1021,_x=1022,Un=1023,Ei=1026,Ui=1027,Mx=1028,jd=1029,Es=1030,$d=1031;var eh=1033,Pu=33776,Uu=33777,Nu=33778,Ou=33779,th=35840,ah=35841,nh=35842,ih=35843,sh=36196,rh=37492,oh=37496,lh=37488,uh=37489,Bu=37490,ch=37491,fh=37808,dh=37809,hh=37810,ph=37811,mh=37812,gh=37813,xh=37814,Sh=37815,yh=37816,vh=37817,_h=37818,Mh=37819,Lh=37820,bh=37821,Ch=36492,Ah=36494,Th=36495,Ih=36283,Eh=36284,Fu=36285,wh=36286;var su=2300,Md=2301,fd=2302,Yg=2303,Zg=2400,Kg=2401,Jg=2402;var WM=3200;var Rh=0,XM=1,Ni="",Pa="srgb",ru="srgb-linear",ou="linear",ht="srgb";var dd=7680;var YM=519,ZM=512,KM=513,JM=514,Lx=515,QM=516,jM=517,bx=518,Cx=519,$M=35044;var Ax="300 es",Sn=2e3,Lo=2001;function TT(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function IT(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function lu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function eL(){let t=lu("canvas");return t.style.display="block",t}var Z_={},bo=null;function Tx(...t){let e="THREE."+t.shift();bo?bo("log",e,...t):console.log(e,...t)}function tL(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=tL(t);let e="THREE."+t.shift();if(bo)bo("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Be(...t){t=tL(t);let e="THREE."+t.shift();if(bo)bo("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function au(...t){let e=t.join(" ");e in Z_||(Z_[e]=!0,Ue(...t))}function aL(t,e,a){return new Promise(function(n,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,a);break;default:n()}}setTimeout(s,a)})}var nL={[hd]:hd,[md]:Sd,[gd]:gd,[Mo]:xd,[pd]:pd,[Sd]:md,[yd]:yd,[xd]:Mo},Zn=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},va=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],K_=1234567,nu=Math.PI/180,Co=180/Math.PI;function Fo(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(va[t&255]+va[t>>8&255]+va[t>>16&255]+va[t>>24&255]+"-"+va[e&255]+va[e>>8&255]+"-"+va[e>>16&15|64]+va[e>>24&255]+"-"+va[a&63|128]+va[a>>8&255]+"-"+va[a>>16&255]+va[a>>24&255]+va[n&255]+va[n>>8&255]+va[n>>16&255]+va[n>>24&255]).toLowerCase()}function tt(t,e,a){return Math.max(e,Math.min(a,t))}function Ix(t,e){return(t%e+e)%e}function ET(t,e,a,n,i){return n+(t-e)*(i-n)/(a-e)}function wT(t,e,a){return t!==e?(a-t)/(e-t):0}function iu(t,e,a){return(1-a)*t+a*e}function RT(t,e,a,n){return iu(t,e,1-Math.exp(-a*n))}function DT(t,e=1){return e-Math.abs(Ix(t,e*2)-e)}function PT(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*(3-2*t))}function UT(t,e,a){return t<=e?0:t>=a?1:(t=(t-e)/(a-e),t*t*t*(t*(t*6-15)+10))}function NT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function OT(t,e){return t+Math.random()*(e-t)}function BT(t){return t*(.5-Math.random())}function FT(t){t!==void 0&&(K_=t);let e=K_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zT(t){return t*nu}function kT(t){return t*Co}function HT(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function GT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ex(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function VT(t,e,a,n,i){let s=Math.cos,r=Math.sin,o=s(a/2),l=r(a/2),u=s((e+n)/2),d=r((e+n)/2),p=s((e-n)/2),f=r((e-n)/2),h=s((n-e)/2),S=r((n-e)/2);switch(i){case"XYX":t.set(o*d,l*p,l*f,o*u);break;case"YZY":t.set(l*f,o*d,l*p,o*u);break;case"ZXZ":t.set(l*p,l*f,o*d,o*u);break;case"XZX":t.set(o*d,l*S,l*h,o*u);break;case"YXY":t.set(l*h,o*d,l*S,o*u);break;case"ZYZ":t.set(l*S,l*h,o*d,o*u);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wx(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function iL(t,e){if(e.constructor===Float32Array)return t;let a=wx(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/a,-1)}function sL(t,e){if(e.constructor===Float32Array)return t;let a=wx(e);if(a===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*a)}var fr={DEG2RAD:nu,RAD2DEG:Co,generateUUID:Fo,clamp:tt,euclideanModulo:Ix,mapLinear:ET,inverseLerp:wT,lerp:iu,damp:RT,pingpong:DT,smoothstep:PT,smootherstep:UT,randInt:NT,randFloat:OT,randFloatSpread:BT,seededRandom:FT,degToRad:zT,radToDeg:kT,isPowerOfTwo:HT,ceilPowerOfTwo:GT,floorPowerOfTwo:Ex,setQuaternionFromProperEuler:VT,normalize:sL,denormalize:iL},Nx=class Nx{constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=tt(this.x,e.x,a.x),this.y=tt(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=tt(this.x,e,a),this.y=tt(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nx.prototype.isVector2=!0;var Ke=Nx,Kn=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],d=n[i+2],p=n[i+3],f=s[r+0],h=s[r+1],S=s[r+2],M=s[r+3];if(p!==M||l!==f||u!==h||d!==S){let x=l*f+u*h+d*S+p*M;x<0&&(f=-f,h=-h,S=-S,M=-M,x=-x);let c=1-o;if(x<.9995){let m=Math.acos(x),v=Math.sin(m);c=Math.sin(c*m)/v,o=Math.sin(o*m)/v,l=l*c+f*o,u=u*c+h*o,d=d*c+S*o,p=p*c+M*o}else{l=l*c+f*o,u=u*c+h*o,d=d*c+S*o,p=p*c+M*o;let m=1/Math.sqrt(l*l+u*u+d*d+p*p);l*=m,u*=m,d*=m,p*=m}}e[a]=l,e[a+1]=u,e[a+2]=d,e[a+3]=p}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],d=n[i+3],p=s[r],f=s[r+1],h=s[r+2],S=s[r+3];return e[a]=o*S+d*p+l*h-u*f,e[a+1]=l*S+d*f+u*p-o*h,e[a+2]=u*S+d*h+o*f-l*p,e[a+3]=d*S-o*p-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),d=o(i/2),p=o(s/2),f=l(n/2),h=l(i/2),S=l(s/2);switch(r){case"XYZ":this._x=f*d*p+u*h*S,this._y=u*h*p-f*d*S,this._z=u*d*S+f*h*p,this._w=u*d*p-f*h*S;break;case"YXZ":this._x=f*d*p+u*h*S,this._y=u*h*p-f*d*S,this._z=u*d*S-f*h*p,this._w=u*d*p+f*h*S;break;case"ZXY":this._x=f*d*p-u*h*S,this._y=u*h*p+f*d*S,this._z=u*d*S+f*h*p,this._w=u*d*p-f*h*S;break;case"ZYX":this._x=f*d*p-u*h*S,this._y=u*h*p+f*d*S,this._z=u*d*S-f*h*p,this._w=u*d*p+f*h*S;break;case"YZX":this._x=f*d*p+u*h*S,this._y=u*h*p+f*d*S,this._z=u*d*S-f*h*p,this._w=u*d*p-f*h*S;break;case"XZY":this._x=f*d*p-u*h*S,this._y=u*h*p-f*d*S,this._z=u*d*S+f*h*p,this._w=u*d*p+f*h*S;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],d=a[6],p=a[10],f=n+o+p;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,d=a._w;return this._x=n*d+r*o+i*u-s*l,this._y=i*d+r*l+s*o-n*u,this._z=s*d+r*u+n*l-i*o,this._w=r*d-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,a=Math.sin(a*u)/d,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ox=class Ox{constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(J_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(J_.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),d=2*(o*a-s*i),p=2*(s*n-r*a);return this.x=a+l*u+r*p-o*d,this.y=n+l*d+o*u-s*p,this.z=i+l*p+s*d-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=tt(this.x,e.x,a.x),this.y=tt(this.y,e.y,a.y),this.z=tt(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=tt(this.x,e,a),this.y=tt(this.y,e,a),this.z=tt(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ag.copy(this).projectOnVector(e),this.sub(Ag)}reflect(e){return this.sub(Ag.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ox.prototype.isVector3=!0;var z=Ox,Ag=new z,J_=new Kn,Bx=class Bx{constructor(e,a,n,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=a,d[4]=s,d[5]=l,d[6]=n,d[7]=r,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],d=n[4],p=n[7],f=n[2],h=n[5],S=n[8],M=i[0],x=i[3],c=i[6],m=i[1],v=i[4],y=i[7],I=i[2],T=i[5],g=i[8];return s[0]=r*M+o*m+l*I,s[3]=r*x+o*v+l*T,s[6]=r*c+o*y+l*g,s[1]=u*M+d*m+p*I,s[4]=u*x+d*v+p*T,s[7]=u*c+d*y+p*g,s[2]=f*M+h*m+S*I,s[5]=f*x+h*v+S*T,s[8]=f*c+h*y+S*g,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return a*r*d-a*o*u-n*s*d+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=d*r-o*u,f=o*l-d*s,h=u*s-r*l,S=a*p+n*f+i*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/S;return e[0]=p*M,e[1]=(i*u-d*n)*M,e[2]=(o*n-i*r)*M,e[3]=f*M,e[4]=(d*a-i*l)*M,e[5]=(i*s-o*a)*M,e[6]=h*M,e[7]=(n*l-u*a)*M,e[8]=(r*a-n*s)*M,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return au("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tg.makeScale(e,a)),this}rotate(e){return au("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tg.makeRotation(-e)),this}translate(e,a){return au("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tg.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bx.prototype.isMatrix3=!0;var He=Bx,Tg=new He,Q_=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j_=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qT(){let t={enabled:!0,workingColorSpace:ru,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ht&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ht&&(i.r=_o(i.r),i.g=_o(i.g),i.b=_o(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?ou:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[ru]:{primaries:e,whitePoint:n,transfer:ou,toXYZ:Q_,fromXYZ:j_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:Pa},outputColorSpaceConfig:{drawingBufferColorSpace:Pa}},[Pa]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Q_,fromXYZ:j_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:Pa}}}),t}var et=qT();function Ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _o(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var oo,Ld=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{oo===void 0&&(oo=lu("canvas")),oo.width=e.width,oo.height=e.height;let i=oo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=oo}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=lu("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ii(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(Ii(a[n]/255)*255):a[n]=Ii(a[n]);return{data:a,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},WT=0,Ao=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width||0,a.height||0,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ig(i[r].image)):s.push(Ig(i[r]))}else s=Ig(i);n.url=s}return a||(e.images[this.uuid]=n),n}};function Ig(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ld.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var XT=0,Eg=new z,Va=class t extends Zn{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=Xn,i=Xn,s=Ua,r=Pi,o=Un,l=qa,u=t.DEFAULT_ANISOTROPY,d=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=Fo(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Eg).x}get height(){return this.source.getSize(Eg).y}get depth(){return this.source.getSize(Eg).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Ue(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ue(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Va.DEFAULT_IMAGE=null;Va.DEFAULT_MAPPING=mx;Va.DEFAULT_ANISOTROPY=1;var Fx=class Fx{constructor(e=0,a=0,n=0,i=1){this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],d=l[4],p=l[8],f=l[1],h=l[5],S=l[9],M=l[2],x=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(p-M)<.01&&Math.abs(S-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+M)<.1&&Math.abs(S+x)<.1&&Math.abs(u+h+c-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let v=(u+1)/2,y=(h+1)/2,I=(c+1)/2,T=(d+f)/4,g=(p+M)/4,C=(S+x)/4;return v>y&&v>I?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=g/n):y>I?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=C/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=g/s,i=C/s),this.set(n,i,s,a),this}let m=Math.sqrt((x-S)*(x-S)+(p-M)*(p-M)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(x-S)/m,this.y=(p-M)/m,this.z=(f-d)/m,this.w=Math.acos((u+h+c-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=tt(this.x,e.x,a.x),this.y=tt(this.y,e.y,a.y),this.z=tt(this.z,e.z,a.z),this.w=tt(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=tt(this.x,e,a),this.y=tt(this.y,e,a),this.z=tt(this.z,e,a),this.w=tt(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fx.prototype.isVector4=!0;var Nt=Fx,bd=class extends Zn{constructor(e=1,a=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ua,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=n.depth,this.scissor=new Nt(0,0,e,a),this.scissorTest=!1,this.viewport=new Nt(0,0,e,a),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Va({width:e,height:a,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Ua,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(a.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,n=1){if(this.width!==e||this.height!==a||this.depth!==n){this.width=e,this.height=a,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=a,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let i=Object.assign({},e.textures[a].image);this.textures[a].source=new Ao(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let a=e.depthTexture.clone();a.renderTarget=null,this.depthTexture=a}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends bd{constructor(e=1,a=1,n={}){super(e,a,n),this.isWebGLRenderTarget=!0}},uu=class extends Va{constructor(e=null,a=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=oa,this.minFilter=oa,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cd=class extends Va{constructor(e=null,a=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=oa,this.minFilter=oa,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var qd=class qd{constructor(e,a,n,i,s,r,o,l,u,d,p,f,h,S,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,d,p,f,h,S,M,x)}set(e,a,n,i,s,r,o,l,u,d,p,f,h,S,M,x){let c=this.elements;return c[0]=e,c[4]=a,c[8]=n,c[12]=i,c[1]=s,c[5]=r,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=p,c[14]=f,c[3]=h,c[7]=S,c[11]=M,c[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qd().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,n=e.elements,i=1/lo.setFromMatrixColumn(e,0).length(),s=1/lo.setFromMatrixColumn(e,1).length(),r=1/lo.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=r*d,h=r*p,S=o*d,M=o*p;a[0]=l*d,a[4]=-l*p,a[8]=u,a[1]=h+S*u,a[5]=f-M*u,a[9]=-o*l,a[2]=M-f*u,a[6]=S+h*u,a[10]=r*l}else if(e.order==="YXZ"){let f=l*d,h=l*p,S=u*d,M=u*p;a[0]=f+M*o,a[4]=S*o-h,a[8]=r*u,a[1]=r*p,a[5]=r*d,a[9]=-o,a[2]=h*o-S,a[6]=M+f*o,a[10]=r*l}else if(e.order==="ZXY"){let f=l*d,h=l*p,S=u*d,M=u*p;a[0]=f-M*o,a[4]=-r*p,a[8]=S+h*o,a[1]=h+S*o,a[5]=r*d,a[9]=M-f*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let f=r*d,h=r*p,S=o*d,M=o*p;a[0]=l*d,a[4]=S*u-h,a[8]=f*u+M,a[1]=l*p,a[5]=M*u+f,a[9]=h*u-S,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let f=r*l,h=r*u,S=o*l,M=o*u;a[0]=l*d,a[4]=M-f*p,a[8]=S*p+h,a[1]=p,a[5]=r*d,a[9]=-o*d,a[2]=-u*d,a[6]=h*p+S,a[10]=f-M*p}else if(e.order==="XZY"){let f=r*l,h=r*u,S=o*l,M=o*u;a[0]=l*d,a[4]=-p,a[8]=u*d,a[1]=f*p+M,a[5]=r*d,a[9]=h*p-S,a[2]=S*p-h,a[6]=o*d,a[10]=M*p+f}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YT,e,ZT)}lookAt(e,a,n){let i=this.elements;return tn.subVectors(e,a),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),gs.crossVectors(n,tn),gs.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),gs.crossVectors(n,tn)),gs.normalize(),Vf.crossVectors(tn,gs),i[0]=gs.x,i[4]=Vf.x,i[8]=tn.x,i[1]=gs.y,i[5]=Vf.y,i[9]=tn.y,i[2]=gs.z,i[6]=Vf.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],d=n[1],p=n[5],f=n[9],h=n[13],S=n[2],M=n[6],x=n[10],c=n[14],m=n[3],v=n[7],y=n[11],I=n[15],T=i[0],g=i[4],C=i[8],U=i[12],R=i[1],O=i[5],H=i[9],Z=i[13],P=i[2],X=i[6],K=i[10],V=i[14],ce=i[3],W=i[7],ne=i[11],re=i[15];return s[0]=r*T+o*R+l*P+u*ce,s[4]=r*g+o*O+l*X+u*W,s[8]=r*C+o*H+l*K+u*ne,s[12]=r*U+o*Z+l*V+u*re,s[1]=d*T+p*R+f*P+h*ce,s[5]=d*g+p*O+f*X+h*W,s[9]=d*C+p*H+f*K+h*ne,s[13]=d*U+p*Z+f*V+h*re,s[2]=S*T+M*R+x*P+c*ce,s[6]=S*g+M*O+x*X+c*W,s[10]=S*C+M*H+x*K+c*ne,s[14]=S*U+M*Z+x*V+c*re,s[3]=m*T+v*R+y*P+I*ce,s[7]=m*g+v*O+y*X+I*W,s[11]=m*C+v*H+y*K+I*ne,s[15]=m*U+v*Z+y*V+I*re,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],d=e[2],p=e[6],f=e[10],h=e[14],S=e[3],M=e[7],x=e[11],c=e[15],m=l*h-u*f,v=o*h-u*p,y=o*f-l*p,I=r*h-u*d,T=r*f-l*d,g=r*p-o*d;return a*(M*m-x*v+c*y)-n*(S*m-x*I+c*T)+i*(S*v-M*I+c*g)-s*(S*y-M*T+x*g)}determinantAffine(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],d=e[10];return a*(r*d-o*u)-n*(s*d-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],d=e[8],p=e[9],f=e[10],h=e[11],S=e[12],M=e[13],x=e[14],c=e[15],m=a*o-n*r,v=a*l-i*r,y=a*u-s*r,I=n*l-i*o,T=n*u-s*o,g=i*u-s*l,C=d*M-p*S,U=d*x-f*S,R=d*c-h*S,O=p*x-f*M,H=p*c-h*M,Z=f*c-h*x,P=m*Z-v*H+y*O+I*R-T*U+g*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(o*Z-l*H+u*O)*X,e[1]=(i*H-n*Z-s*O)*X,e[2]=(M*g-x*T+c*I)*X,e[3]=(f*T-p*g-h*I)*X,e[4]=(l*R-r*Z-u*U)*X,e[5]=(a*Z-i*R+s*U)*X,e[6]=(x*y-S*g-c*v)*X,e[7]=(d*g-f*y+h*v)*X,e[8]=(r*H-o*R+u*C)*X,e[9]=(n*R-a*H-s*C)*X,e[10]=(S*T-M*y+c*m)*X,e[11]=(p*y-d*T-h*m)*X,e[12]=(o*U-r*O-l*C)*X,e[13]=(a*O-n*U+i*C)*X,e[14]=(M*v-S*I-x*m)*X,e[15]=(d*I-p*v+f*m)*X,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,d=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,d*o+n,d*l-i*r,0,u*l-i*o,d*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,d=r+r,p=o+o,f=s*u,h=s*d,S=s*p,M=r*d,x=r*p,c=o*p,m=l*u,v=l*d,y=l*p,I=n.x,T=n.y,g=n.z;return i[0]=(1-(M+c))*I,i[1]=(h+y)*I,i[2]=(S-v)*I,i[3]=0,i[4]=(h-y)*T,i[5]=(1-(f+c))*T,i[6]=(x+m)*T,i[7]=0,i[8]=(S+v)*g,i[9]=(x-m)*g,i[10]=(1-(f+M))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),a.identity(),this;let r=lo.set(i[0],i[1],i[2]).length(),o=lo.set(i[4],i[5],i[6]).length(),l=lo.set(i[8],i[9],i[10]).length();s<0&&(r=-r),An.copy(this);let u=1/r,d=1/o,p=1/l;return An.elements[0]*=u,An.elements[1]*=u,An.elements[2]*=u,An.elements[4]*=d,An.elements[5]*=d,An.elements[6]*=d,An.elements[8]*=p,An.elements[9]*=p,An.elements[10]*=p,a.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=Sn,l=!1){let u=this.elements,d=2*s/(a-e),p=2*s/(n-i),f=(a+e)/(a-e),h=(n+i)/(n-i),S,M;if(l)S=s/(r-s),M=r*s/(r-s);else if(o===Sn)S=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===Lo)S=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=S,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=Sn,l=!1){let u=this.elements,d=2/(a-e),p=2/(n-i),f=-(a+e)/(a-e),h=-(n+i)/(n-i),S,M;if(l)S=1/(r-s),M=r/(r-s);else if(o===Sn)S=-2/(r-s),M=-(r+s)/(r-s);else if(o===Lo)S=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=S,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}};qd.prototype.isMatrix4=!0;var At=qd,lo=new z,An=new At,YT=new z(0,0,0),ZT=new z(1,1,1),gs=new z,Vf=new z,tn=new z,$_=new At,eM=new Kn,wi=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],d=i[9],p=i[2],f=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return $_.makeRotationFromQuaternion(e),this.setFromRotationMatrix($_,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return eM.setFromEuler(this),this.setFromQuaternion(eM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";var To=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},KT=0,tM=new z,uo=new Kn,Li=new At,qf=new z,Ql=new z,JT=new z,QT=new Kn,aM=new z(1,0,0),nM=new z(0,1,0),iM=new z(0,0,1),sM={type:"added"},jT={type:"removed"},co={type:"childadded",child:null},wg={type:"childremoved",child:null},ga=class t extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,a=new wi,n=new Kn,i=new z(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new He}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return uo.setFromAxisAngle(e,a),this.quaternion.multiply(uo),this}rotateOnWorldAxis(e,a){return uo.setFromAxisAngle(e,a),this.quaternion.premultiply(uo),this}rotateX(e){return this.rotateOnAxis(aM,e)}rotateY(e){return this.rotateOnAxis(nM,e)}rotateZ(e){return this.rotateOnAxis(iM,e)}translateOnAxis(e,a){return tM.copy(e).applyQuaternion(this.quaternion),this.position.add(tM.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(aM,e)}translateY(e){return this.translateOnAxis(nM,e)}translateZ(e){return this.translateOnAxis(iM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?qf.copy(e):qf.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Ql,qf,this.up):Li.lookAt(qf,Ql,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),uo.setFromRotationMatrix(Li),this.quaternion.premultiply(uo.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sM),co.child=e,this.dispatchEvent(co),co.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(jT),wg.child=e,this.dispatchEvent(wg),wg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sM),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,e,JT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,QT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),a===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),d=r(e.images),p=r(e.shapes),f=r(e.skeletons),h=r(e.animations),S=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),S.length>0&&(n.nodes=S)}return n.object=i,n;function r(o){let l=[];for(let u in o){let d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ga.DEFAULT_UP=new z(0,1,0);ga.DEFAULT_MATRIX_AUTO_UPDATE=!0;ga.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends ga{constructor(){super(),this.isGroup=!0,this.type="Group"}},$T={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let n of e.hand.values())this._getHandJoint(a,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let M of e.hand.values()){let x=a.getJointPose(M,n),c=this._getHandJoint(u,M);x!==null&&(c.matrix.fromArray(x.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=x.radius),c.visible=x!==null}let d=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=d.position.distanceTo(p.position),h=.02,S=.005;u.inputState.pinching&&f>h+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=a.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=a.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($T)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[a.jointName]=n,e.add(n)}return e.joints[a.jointName]}},rL={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},Wf={h:0,s:0,l:0};function Rg(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var Xe=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=Pa){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=et.workingColorSpace){return this.r=e,this.g=a,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=et.workingColorSpace){if(e=Ix(e,1),a=tt(a,0,1),n=tt(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=Rg(r,s,e+1/3),this.g=Rg(r,s,e),this.b=Rg(r,s,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,a=Pa){function n(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,a);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=Pa){let n=rL[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pa){return et.workingToColorSpace(_a.copy(this),e),Math.round(tt(_a.r*255,0,255))*65536+Math.round(tt(_a.g*255,0,255))*256+Math.round(tt(_a.b*255,0,255))}getHexString(e=Pa){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=et.workingColorSpace){et.workingToColorSpace(_a.copy(this),a);let n=_a.r,i=_a.g,s=_a.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,d=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=d<=.5?p/(r+o):p/(2-r-o),r){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,a=et.workingColorSpace){return et.workingToColorSpace(_a.copy(this),a),e.r=_a.r,e.g=_a.g,e.b=_a.b,e}getStyle(e=Pa){et.workingToColorSpace(_a.copy(this),e);let a=_a.r,n=_a.g,i=_a.b;return e!==Pa?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+a,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(xs),e.getHSL(Wf);let n=iu(xs.h,Wf.h,a),i=iu(xs.s,Wf.s,a),s=iu(xs.l,Wf.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_a=new Xe;Xe.NAMES=rL;var cu=class t{constructor(e,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=a}clone(){return new t(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var fu=class extends ga{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),a.object.backgroundBlurriness=this.backgroundBlurriness,a.object.backgroundIntensity=this.backgroundIntensity,a.object.backgroundRotation=this.backgroundRotation.toArray(),a.object.environmentIntensity=this.environmentIntensity,a.object.environmentRotation=this.environmentRotation.toArray(),a}},Tn=new z,bi=new z,Dg=new z,Ci=new z,fo=new z,ho=new z,rM=new z,Pg=new z,Ug=new z,Ng=new z,Og=new Nt,Bg=new Nt,Fg=new Nt,_s=class t{constructor(e=new z,a=new z,n=new z){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),Tn.subVectors(e,a),i.cross(Tn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){Tn.subVectors(i,a),bi.subVectors(n,a),Dg.subVectors(e,a);let r=Tn.dot(Tn),o=Tn.dot(bi),l=Tn.dot(Dg),u=bi.dot(bi),d=bi.dot(Dg),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let f=1/p,h=(u*l-o*d)*f,S=(r*d-o*l)*f;return s.set(1-h-S,S,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(r,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return Og.setScalar(0),Bg.setScalar(0),Fg.setScalar(0),Og.fromBufferAttribute(e,a),Bg.fromBufferAttribute(e,n),Fg.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Og,s.x),r.addScaledVector(Bg,s.y),r.addScaledVector(Fg,s.z),r}static isFrontFacing(e,a,n,i){return Tn.subVectors(n,a),bi.subVectors(e,a),Tn.cross(bi).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Tn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;fo.subVectors(i,n),ho.subVectors(s,n),Pg.subVectors(e,n);let l=fo.dot(Pg),u=ho.dot(Pg);if(l<=0&&u<=0)return a.copy(n);Ug.subVectors(e,i);let d=fo.dot(Ug),p=ho.dot(Ug);if(d>=0&&p<=d)return a.copy(i);let f=l*p-d*u;if(f<=0&&l>=0&&d<=0&&l-d>0)return r=l/(l-d),a.copy(n).addScaledVector(fo,r);Ng.subVectors(e,s);let h=fo.dot(Ng),S=ho.dot(Ng);if(S>=0&&h<=S)return a.copy(s);let M=h*u-l*S;if(M<=0&&u>=0&&S<=0)return o=u/(u-S),a.copy(n).addScaledVector(ho,o);let x=d*S-h*p;if(x<=0&&p-d>=0&&h-S>=0)return rM.subVectors(s,i),o=(p-d)/(p-d+(h-S)),a.copy(i).addScaledVector(rM,o);let c=1/(x+M+f);return r=M*c,o=f*c,a.copy(n).addScaledVector(fo,r).addScaledVector(ho,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ms=class{constructor(e=new z(1/0,1/0,1/0),a=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(In.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(In.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=In.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,In):In.fromBufferAttribute(s,r),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xf.copy(n.boundingBox)),Xf.applyMatrix4(e.matrixWorld),this.union(Xf)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jl),Yf.subVectors(this.max,jl),po.subVectors(e.a,jl),mo.subVectors(e.b,jl),go.subVectors(e.c,jl),Ss.subVectors(mo,po),ys.subVectors(go,mo),ar.subVectors(po,go);let a=[0,-Ss.z,Ss.y,0,-ys.z,ys.y,0,-ar.z,ar.y,Ss.z,0,-Ss.x,ys.z,0,-ys.x,ar.z,0,-ar.x,-Ss.y,Ss.x,0,-ys.y,ys.x,0,-ar.y,ar.x,0];return!zg(a,po,mo,go,Yf)||(a=[1,0,0,0,1,0,0,0,1],!zg(a,po,mo,go,Yf))?!1:(Zf.crossVectors(Ss,ys),a=[Zf.x,Zf.y,Zf.z],zg(a,po,mo,go,Yf))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new z,new z,new z,new z,new z,new z,new z,new z],In=new z,Xf=new Ms,po=new z,mo=new z,go=new z,Ss=new z,ys=new z,ar=new z,jl=new z,Yf=new z,Zf=new z,nr=new z;function zg(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){nr.fromArray(t,s);let o=i.x*Math.abs(nr.x)+i.y*Math.abs(nr.y)+i.z*Math.abs(nr.z),l=e.dot(nr),u=a.dot(nr),d=n.dot(nr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}var Jt=new z,Kf=new Ke,e1=0,Yn=class extends Zn{constructor(e,a,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=$M,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=e!==void 0?wx(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)Kf.fromBufferAttribute(this,a),Kf.applyMatrix3(e),this.setXY(a,Kf.x,Kf.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)Jt.fromBufferAttribute(this,a),Jt.applyMatrix3(e),this.setXYZ(a,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)Jt.fromBufferAttribute(this,a),Jt.applyMatrix4(e),this.setXYZ(a,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)Jt.fromBufferAttribute(this,a),Jt.applyNormalMatrix(e),this.setXYZ(a,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)Jt.fromBufferAttribute(this,a),Jt.transformDirection(e),this.setXYZ(a,Jt.x,Jt.y,Jt.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,a,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=this._denormalize(a)),a}setX(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=this._denormalize(a)),a}setY(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=this._denormalize(a)),a}setZ(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=this._denormalize(a)),a}setW(e,a){return this.normalized&&(a=this._normalize(a)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=this._normalize(a),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let a=this._normalizationScale;return a!==void 0?Math.max(e/a,-1):iL(e,this.array)}_normalize(e){let a=this._normalizationScale;return a!==void 0?Math.round(e*a):sL(e,this.array)}};var du=class extends Yn{constructor(e,a,n){super(new Uint16Array(e),a,n)}};var hu=class extends Yn{constructor(e,a,n){super(new Uint32Array(e),a,n)}};var La=class extends Yn{constructor(e,a,n){super(new Float32Array(e),a,n)}},t1=new Ms,$l=new z,kg=new z,rr=class{constructor(e=new z,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):t1.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$l.subVectors(e,this.center);let a=$l.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector($l,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($l.copy(e.center).add(kg)),this.expandByPoint($l.copy(e.center).sub(kg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},a1=0,xn=new At,Hg=new ga,xo=new z,an=new Ms,eu=new Ms,ra=new z,yn=class t extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(TT(e)?hu:du)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,a,n){return xn.makeTranslation(e,a,n),this.applyMatrix4(xn),this}scale(e,a,n){return xn.makeScale(e,a,n),this.applyMatrix4(xn),this}lookAt(e){return Hg.lookAt(e),Hg.updateMatrix(),this.applyMatrix4(Hg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new La(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(ra.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(ra),ra.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(ra)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];eu.setFromBufferAttribute(o),this.morphTargetsRelative?(ra.addVectors(an.min,eu.min),an.expandByPoint(ra),ra.addVectors(an.max,eu.max),an.expandByPoint(ra)):(an.expandByPoint(eu.min),an.expandByPoint(eu.max))}an.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ra.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ra));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)ra.fromBufferAttribute(o,u),l&&(xo.fromBufferAttribute(e,u),ra.add(xo)),i=Math.max(i,n.distanceToSquared(ra))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[],u=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new z,l[U]=new z;let d=new z,p=new z,f=new z,h=new Ke,S=new Ke,M=new Ke,x=new z,c=new z;function m(U,R,O){u[U]=u[R]=u[O]=1,d.fromBufferAttribute(n,U),p.fromBufferAttribute(n,R),f.fromBufferAttribute(n,O),h.fromBufferAttribute(s,U),S.fromBufferAttribute(s,R),M.fromBufferAttribute(s,O),p.sub(d),f.sub(d),S.sub(h),M.sub(h);let H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(x.copy(p).multiplyScalar(M.y).addScaledVector(f,-S.y).multiplyScalar(H),c.copy(f).multiplyScalar(S.x).addScaledVector(p,-M.x).multiplyScalar(H),o[U].add(x),o[R].add(x),o[O].add(x),l[U].add(c),l[R].add(c),l[O].add(c))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let U=0,R=v.length;U<R;++U){let O=v[U],H=O.start,Z=O.count;for(let P=H,X=H+Z;P<X;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new z,I=new z,T=new z,g=new z;function C(U){T.fromBufferAttribute(i,U),g.copy(T);let R=o[U];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),I.crossVectors(g,R);let H=I.dot(l[U])<0?-1:1;r.setXYZW(U,y.x,y.y,y.z,H)}for(let U=0,R=n.count;U<R;++U)u[U]&&C(U);this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==a.count)n=new Yn(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new z,s=new z,r=new z,o=new z,l=new z,u=new z,d=new z,p=new z;if(e)for(let f=0,h=e.count;f<h;f+=3){let S=e.getX(f+0),M=e.getX(f+1),x=e.getX(f+2);i.fromBufferAttribute(a,S),s.fromBufferAttribute(a,M),r.fromBufferAttribute(a,x),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),o.fromBufferAttribute(n,S),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),o.add(d),l.add(d),u.add(d),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,h=a.count;f<h;f+=3)i.fromBufferAttribute(a,f+0),s.fromBufferAttribute(a,f+1),r.fromBufferAttribute(a,f+2),d.subVectors(r,s),p.subVectors(i,s),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)ra.fromBufferAttribute(e,a),ra.normalize(),e.setXYZ(a,ra.x,ra.y,ra.z)}toNonIndexed(){function e(o,l){let u=o.array,d=o.itemSize,p=o.normalized,f=new u.constructor(l.length*d),h=0,S=0;for(let M=0,x=l.length;M<x;M++){o.isInterleavedBufferAttribute?h=l[M]*o.data.stride+o.offset:h=l[M]*d;for(let c=0;c<d;c++)f[S++]=u[h++]}return new Yn(f,d,p)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let d=0,p=u.length;d<p;d++){let f=u[d],h=e(f,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],d=[];for(let p=0,f=u.length;p<f;p++){let h=u[p];d.push(h.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let d=i[u];this.setAttribute(u,d.clone(a))}let s=e.morphAttributes;for(let u in s){let d=[],p=s[u];for(let f=0,h=p.length;f<h;f++)d.push(p[f].clone(a));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,d=r.length;u<d;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Gg=new z,n1=new z,i1=new He,En=class{constructor(e=new z(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,n,i){return this.normal.set(e,a,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,n){let i=Gg.subVectors(n,a).cross(n1.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,n=!0){let i=e.delta(Gg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:a.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let a=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return a<0&&n>0||n<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let n=a||i1.getNormalMatrix(e),i=this.coplanarPoint(Gg).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},s1=0,Ri=class extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=No,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rx,this.blendDst=ox,this.blendEquation=lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=YM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dd,this.stencilZFail=dd,this.stencilZPass=dd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Ue(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ue(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=a[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ti=new z,Vg=new z,Jf=new z,Qf=new z,Eo=class{constructor(e=new z,a=new z(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=Ti.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,a),Ti.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){Vg.copy(e).add(a).multiplyScalar(.5),Jf.copy(a).sub(e).normalize(),Qf.copy(this.origin).sub(Vg);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Jf),o=Qf.dot(this.direction),l=-Qf.dot(Jf),u=Qf.lengthSq(),d=Math.abs(1-r*r),p,f,h,S;if(d>0)if(p=r*l-o,f=r*o-l,S=s*d,p>=0)if(f>=-S)if(f<=S){let M=1/d;p*=M,f*=M,h=p*(p+r*f+2*o)+f*(r*p+f+2*l)+u}else f=s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+u;else f<=-S?(p=Math.max(0,-(-r*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+u):f<=S?(p=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+u):(p=Math.max(0,-(r*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+f*(f+2*l)+u);else f=r>0?-s:s,p=Math.max(0,-(r*f+o)),h=-p*p+f*(f+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Vg).addScaledVector(Jf,f),h}intersectSphere(e,a){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,r=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,r=(e.min.y-f.y)*d),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,a,n,i,s){let r=this.origin,o=this.direction,l=o.x,u=o.y,d=o.z,p=e.x-r.x,f=e.y-r.y,h=e.z-r.z,S=a.x-r.x,M=a.y-r.y,x=a.z-r.z,c=n.x-r.x,m=n.y-r.y,v=n.z-r.z,y=Math.abs(l),I=Math.abs(u),T=Math.abs(d),g,C,U,R,O,H,Z,P,X,K,V,ce;if(y>=I&&y>=T?(U=l,H=p,X=S,ce=c,l>=0?(g=u,C=d,R=f,O=h,Z=M,P=x,K=m,V=v):(g=d,C=u,R=h,O=f,Z=x,P=M,K=v,V=m)):I>=T?(U=u,H=f,X=M,ce=m,u>=0?(g=d,C=l,R=h,O=p,Z=x,P=S,K=v,V=c):(g=l,C=d,R=p,O=h,Z=S,P=x,K=c,V=v)):(U=d,H=h,X=x,ce=v,d>=0?(g=l,C=u,R=p,O=f,Z=S,P=M,K=c,V=m):(g=u,C=l,R=f,O=p,Z=M,P=S,K=m,V=c)),U===0)return null;let W=g/U,ne=C/U,re=1/U,Te=R-W*H,ze=O-ne*H,k=Z-W*X,ie=P-ne*X,ye=K-W*ce,ge=V-ne*ce,xe=ye*ie-ge*k,Ee=Te*ge-ze*ye,Dt=k*ze-ie*Te;if(i){if(xe<0||Ee<0||Dt<0)return null}else if((xe<0||Ee<0||Dt<0)&&(xe>0||Ee>0||Dt>0))return null;let we=xe+Ee+Dt;if(we===0)return null;let it=re*(xe*H+Ee*X+Dt*ce);return(we>0?it<0:it>0)?null:this.at(it/we,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wo=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},oM=new At,ir=new Eo,jf=new rr,lM=new z,$f=new z,ed=new z,td=new z,qg=new z,ad=new z,uM=new z,nd=new z,la=class extends ga{constructor(e=new yn,a=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ad.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let d=o[l],p=s[l];d!==0&&(qg.fromBufferAttribute(p,e),r?ad.addScaledVector(qg,d):ad.addScaledVector(qg.sub(a),d))}a.add(ad)}return a}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jf.copy(n.boundingSphere),jf.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(jf.containsPoint(ir.origin)===!1&&(ir.intersectSphere(jf,lM)===null||ir.origin.distanceToSquared(lM)>(e.far-e.near)**2))&&(oM.copy(s).invert(),ir.copy(e.ray).applyMatrix4(oM),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,ir)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let S=0,M=f.length;S<M;S++){let x=f[S],c=r[x.materialIndex],m=Math.max(x.start,h.start),v=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let y=m,I=v;y<I;y+=3){let T=o.getX(y),g=o.getX(y+1),C=o.getX(y+2);i=id(this,c,e,n,u,d,p,T,g,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let x=S,c=M;x<c;x+=3){let m=o.getX(x),v=o.getX(x+1),y=o.getX(x+2);i=id(this,r,e,n,u,d,p,m,v,y),i&&(i.faceIndex=Math.floor(x/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let S=0,M=f.length;S<M;S++){let x=f[S],c=r[x.materialIndex],m=Math.max(x.start,h.start),v=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let y=m,I=v;y<I;y+=3){let T=y,g=y+1,C=y+2;i=id(this,c,e,n,u,d,p,T,g,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=x.materialIndex,a.push(i))}}else{let S=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let x=S,c=M;x<c;x+=3){let m=x,v=x+1,y=x+2;i=id(this,r,e,n,u,d,p,m,v,y),i&&(i.faceIndex=Math.floor(x/3),a.push(i))}}}};function r1(t,e,a,n,i,s,r,o){let l;if(e.side===Na?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Is,o),l===null)return null;nd.copy(o),nd.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(nd);return u<a.near||u>a.far?null:{distance:u,point:nd.clone(),object:t}}function id(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,$f),t.getVertexPosition(l,ed),t.getVertexPosition(u,td);let d=r1(t,e,a,n,$f,ed,td,uM);if(d){let p=new z;_s.getBarycoord(uM,$f,ed,td,p),i&&(d.uv=_s.getInterpolatedAttribute(i,o,l,u,p,new Ke)),s&&(d.uv1=_s.getInterpolatedAttribute(s,o,l,u,p,new Ke)),r&&(d.normal=_s.getInterpolatedAttribute(r,o,l,u,p,new z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c:u,normal:new z,materialIndex:0};_s.getNormal($f,ed,td,f.normal),d.face=f,d.barycoord=p}return d}var Ad=class extends Va{constructor(e=null,a=1,n=1,i,s,r,o,l,u=oa,d=oa,p,f){super(null,r,o,l,u,d,i,s,p,f),this.isDataTexture=!0,this.image={data:e,width:a,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sr=new rr,o1=new Ke(.5,.5),sd=new z,Ls=class{constructor(e=new En,a=new En,n=new En,i=new En,s=new En,r=new En){this.planes=[e,a,n,i,s,r]}set(e,a,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(a),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let a=this.planes;for(let n=0;n<6;n++)a[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,a=Sn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],d=s[4],p=s[5],f=s[6],h=s[7],S=s[8],M=s[9],x=s[10],c=s[11],m=s[12],v=s[13],y=s[14],I=s[15];if(i[0].setComponents(u-r,h-d,c-S,I-m).normalize(),i[1].setComponents(u+r,h+d,c+S,I+m).normalize(),i[2].setComponents(u+o,h+p,c+M,I+v).normalize(),i[3].setComponents(u-o,h-p,c-M,I-v).normalize(),n)i[4].setComponents(l,f,x,y).normalize(),i[5].setComponents(u-l,h-f,c-x,I-y).normalize();else if(i[4].setComponents(u-l,h-f,c-x,I-y).normalize(),a===Sn)i[5].setComponents(u+l,h+f,c+x,I+y).normalize();else if(a===Lo)i[5].setComponents(l,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),sr.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);let a=o1.distanceTo(e.center);return sr.radius=.7071067811865476+a,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){let a=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let n=0;n<6;n++){let i=a[n];if(sd.x=i.normal.x>0?e.max.x:e.min.x,sd.y=i.normal.y>0?e.max.y:e.min.y,sd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sd)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let n=0;n<6;n++)if(a[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},cM=new At,Td=class t{constructor(){this.coordinateSystem=Sn,this._frustums=[],this._count=0}setFromArrayCamera(e){let a=e.cameras,n=this._frustums;for(let i=0;i<a.length;i++){let s=a[i];cM.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ls),n[i].setFromProjectionMatrix(cM,s.coordinateSystem,s.reversedDepth)}return this._count=a.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].intersectsBox(e))return!0;return!1}containsPoint(e){let a=this._frustums;for(let n=0;n<this._count;n++)if(a[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let a=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)a[i]===void 0&&(a[i]=new Ls),a[i].copy(n[i]);return this._count=e._count,this}clone(){return new t().copy(this)}};var Ro=class extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Id=new z,Ed=new z,fM=new At,tu=new Eo,rd=new rr,Wg=new z,dM=new z,pu=class extends ga{constructor(e=new yn,a=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let a=e.attributes.position,n=[0];for(let i=1,s=a.count;i<s;i++)Id.fromBufferAttribute(a,i-1),Ed.fromBufferAttribute(a,i),n[i]=n[i-1],n[i]+=Id.distanceTo(Ed);e.setAttribute("lineDistance",new La(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,a){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rd.copy(n.boundingSphere),rd.applyMatrix4(i),rd.radius+=s,e.ray.intersectsSphere(rd)===!1)return;fM.copy(i).invert(),tu.copy(e.ray).applyMatrix4(fM);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){let h=Math.max(0,r.start),S=Math.min(d.count,r.start+r.count);for(let M=h,x=S-1;M<x;M+=u){let c=d.getX(M),m=d.getX(M+1),v=od(this,e,tu,l,c,m,M);v&&a.push(v)}if(this.isLineLoop){let M=d.getX(S-1),x=d.getX(h),c=od(this,e,tu,l,M,x,S-1);c&&a.push(c)}}else{let h=Math.max(0,r.start),S=Math.min(f.count,r.start+r.count);for(let M=h,x=S-1;M<x;M+=u){let c=od(this,e,tu,l,M,M+1,M);c&&a.push(c)}if(this.isLineLoop){let M=od(this,e,tu,l,S-1,h,S-1);M&&a.push(M)}}}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function od(t,e,a,n,i,s,r){let o=t.geometry.attributes.position;if(Id.fromBufferAttribute(o,i),Ed.fromBufferAttribute(o,s),a.distanceSqToSegment(Id,Ed,Wg,dM)>n)return;Wg.applyMatrix4(t.matrixWorld);let u=e.ray.origin.distanceTo(Wg);if(!(u<e.near||u>e.far))return{distance:u,point:dM.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}var mu=class extends Va{constructor(e=[],a=ur,n,i,s,r,o,l,u,d){super(e,a,n,i,s,r,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Di=class extends Va{constructor(e,a,n=Rn,i,s,r,o=oa,l=oa,u,d=Ei,p=1){if(d!==Ei&&d!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:a,depth:p};super(f,i,s,r,o,l,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ao(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return a.compareFunction=this.compareFunction,a}},gu=class extends Di{constructor(e,a=Rn,n=ur,i,s,r=oa,o=oa,l,u=Ei){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,a,n,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xu=class extends Va{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bs=class t extends yn{constructor(e=1,a=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],d=[],p=[],f=0,h=0;S("z","y","x",-1,-1,n,a,e,r,s,0),S("z","y","x",1,-1,n,a,-e,r,s,1),S("x","z","y",1,1,e,n,a,i,r,2),S("x","z","y",1,-1,e,n,-a,i,r,3),S("x","y","z",1,-1,e,a,n,i,s,4),S("x","y","z",-1,-1,e,a,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new La(u,3)),this.setAttribute("normal",new La(d,3)),this.setAttribute("uv",new La(p,2));function S(M,x,c,m,v,y,I,T,g,C,U){let R=y/g,O=I/C,H=y/2,Z=I/2,P=T/2,X=g+1,K=C+1,V=0,ce=0,W=new z;for(let ne=0;ne<K;ne++){let re=ne*O-Z;for(let Te=0;Te<X;Te++){let ze=Te*R-H;W[M]=ze*m,W[x]=re*v,W[c]=P,u.push(W.x,W.y,W.z),W[M]=0,W[x]=0,W[c]=T>0?1:-1,d.push(W.x,W.y,W.z),p.push(Te/g),p.push(1-ne/C),V+=1}}for(let ne=0;ne<C;ne++)for(let re=0;re<g;re++){let Te=f+re+X*ne,ze=f+re+X*(ne+1),k=f+(re+1)+X*(ne+1),ie=f+(re+1)+X*ne;l.push(Te,ze,ie),l.push(ze,k,ie),ce+=6}o.addGroup(h,ce,U),h+=ce,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Su=class t extends yn{constructor(e=1,a=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:n,heightSegments:i};let s=e/2,r=a/2,o=Math.floor(n),l=Math.floor(i),u=o+1,d=l+1,p=e/o,f=a/l,h=[],S=[],M=[],x=[];for(let c=0;c<d;c++){let m=c*f-r;for(let v=0;v<u;v++){let y=v*p-s;S.push(y,-m,0),M.push(0,0,1),x.push(v/o),x.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){let v=m+u*c,y=m+u*(c+1),I=m+1+u*(c+1),T=m+1+u*c;h.push(v,y,T),h.push(y,I,T)}this.setIndex(h),this.setAttribute("position",new La(S,3)),this.setAttribute("normal",new La(M,3)),this.setAttribute("uv",new La(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},yu=class t extends yn{constructor(e=.5,a=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:a,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],u=[],d=[],p=e,f=(a-e)/i,h=new z,S=new Ke;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){let c=s+x/n*r;h.x=p*Math.cos(c),h.y=p*Math.sin(c),l.push(h.x,h.y,h.z),u.push(0,0,1),S.x=(h.x/a+1)/2,S.y=(h.y/a+1)/2,d.push(S.x,S.y)}p+=f}for(let M=0;M<i;M++){let x=M*(n+1);for(let c=0;c<n;c++){let m=c+x,v=m,y=m+n+1,I=m+n+2,T=m+1;o.push(v,y,T),o.push(y,I,T)}}this.setIndex(o),this.setAttribute("position",new La(l,3)),this.setAttribute("normal",new La(u,3)),this.setAttribute("uv",new La(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};function dr(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];if(hM(i))i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone();else if(Array.isArray(i))if(hM(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[a][n]=s}else e[a][n]=i.slice();else e[a][n]=i}}return e}function ba(t){let e={};for(let a=0;a<t.length;a++){let n=dr(t[a]);for(let i in n)e[i]=n[i]}return e}function hM(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function l1(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function Rx(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var oL={clone:dr,merge:ba},u1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u1,this.fragmentShader=c1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=l1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?a.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?a.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?a.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?a.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?a.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?a.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?a.uniforms[i]={type:"m4",value:r.toArray()}:a.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(a.extensions=n),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=a[i.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new He().fromArray(i.value);break;case"m4":this.uniforms[n].value=new At().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wd=class extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vu=class extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Rd=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dd=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function So(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function ld(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Cs=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Pd=class extends Cs{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zg,endingEnd:Zg}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Kg:s=e,o=2*a-n;break;case Jg:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Kg:r=e,l=2*n-a;break;case Jg:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,d=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*d,this._offsetNext=r*d}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,h=this._weightNext,S=(n-a)/(i-a),M=S*S,x=M*S,c=-f*x+2*f*M-f*S,m=(1+f)*x+(-1.5-2*f)*M+(-.5+f)*S+1,v=(-1-h)*x+(1.5+h)*M+.5*S,y=h*x-h*M;for(let I=0;I!==o;++I)s[I]=c*r[d+I]+m*r[u+I]+v*r[l+I]+y*r[p+I];return s}},Ud=class extends Cs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=(n-a)/(i-a),p=1-d;for(let f=0;f!==o;++f)s[f]=r[u+f]*p+r[l+f]*d;return s}},Nd=class extends Cs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Od=class extends Cs{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let S=(n-a)/(i-a),M=1-S;for(let x=0;x!==o;++x)s[x]=r[u+x]*M+r[l+x]*S;return s}let f=o*2,h=e-1;for(let S=0;S!==o;++S){let M=r[u+S],x=r[l+S],c=h*f+S*2,m=p[c],v=p[c+1],y=e*f+S*2,I=d[y],T=d[y+1],g=d1(n,a,m,I,i);s[S]=lL(g,M,v,T,x)}return s}};function lL(t,e,a,n,i){let s=1-t;return s*s*s*e+3*s*s*t*a+3*s*t*t*n+t*t*t*i}function f1(t,e,a,n,i){let s=1-t;return 3*s*s*(a-e)+6*s*t*(n-a)+3*t*t*(i-n)}function d1(t,e,a,n,i){let s=(t-e)/(i-e);for(let r=0;r<8;r++){let o=lL(s,e,a,n,i)-t;if(Math.abs(o)<1e-10)break;let l=f1(s,e,a,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var sn=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(a,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ld(e.settings)&&(n.settings={inTangents:So(e.settings.inTangents,Array),outTangents:So(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ud(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Od(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case su:a=this.InterpolantFactoryMethodDiscrete;break;case Md:a=this.InterpolantFactoryMethodLinear;break;case fd:a=this.InterpolantFactoryMethodSmooth;break;case Yg:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return su;case this.InterpolantFactoryMethodLinear:return Md;case this.InterpolantFactoryMethodSmooth:return fd;case this.InterpolantFactoryMethodBezier:return Yg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e;ld(this.settings)&&(pM(this.settings.inTangents,e),pM(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e;ld(this.settings)&&(mM(this.settings.inTangents,e),mM(this.settings.outTangents,e))}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Be("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&IT(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Be("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fd,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],d=e[o+1];if(u!==d&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*n,f=p-n,h=p+n;for(let S=0;S!==n;++S){let M=a[p+S];if(M!==a[f+S]||M!==a[h+S]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*n,f=r*n;for(let h=0;h!==n;++h)a[f+h]=a[p+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,ld(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function pM(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]+=e}function mM(t,e){for(let a=0,n=t.length;a!==n;a+=2)t[a]*=e}sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Md;var As=class extends sn{constructor(e,a,n){super(e,a,n)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=su;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Bd=class extends sn{constructor(e,a,n,i){super(e,a,n,i)}};Bd.prototype.ValueTypeName="color";var Fd=class extends sn{constructor(e,a,n,i){super(e,a,n,i)}};Fd.prototype.ValueTypeName="number";var zd=class extends Cs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let d=u+o;u!==d;u+=4)Kn.slerpFlat(s,0,r,u-o,r,u,l);return s}},_u=class extends sn{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new zd(this.times,this.values,this.getValueSize(),e)}};_u.prototype.ValueTypeName="quaternion";_u.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends sn{constructor(e,a,n){super(e,a,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=su;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var kd=class extends sn{constructor(e,a,n,i){super(e,a,n,i)}};kd.prototype.ValueTypeName="vector";var Hd=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,s===!1&&i.onStart!==void 0&&i.onStart(d,r,o),s=!0},this.itemEnd=function(d){r++,i.onProgress!==void 0&&i.onProgress(d,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,p){return u.push(d,p),this},this.removeHandler=function(d){let p=u.indexOf(d);return p!==-1&&u.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=u.length;p<f;p+=2){let h=u[p],S=u[p+1];if(h.global&&(h.lastIndex=0),h.test(d))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uL=new Hd,Gd=class{constructor(e){this.manager=e!==void 0?e:uL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Gd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Do=class extends ga{static registerNode(e){this.prototype._lightNode=e}constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=a}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}},Mu=class extends Do{constructor(e,a,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ga.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(a)}copy(e,a){return super.copy(e,a),this.groundColor.copy(e.groundColor),this}toJSON(e){let a=super.toJSON(e);return a.object.groundColor=this.groundColor.getHex(),a}},Xg=new At,gM=new z,xM=new z,Lu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=qa,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera;gM.setFromMatrixPosition(e.matrixWorld),a.position.copy(gM),xM.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(xM),a.updateMatrixWorld(),this._updateMatrix(a,this.matrix,this._frustum)}_updateMatrix(e,a,n,i){Xg.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Xg,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,u=i?i.y/s.y:0;e.coordinateSystem===Lo||e.reversedDepth?a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):a.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),a.multiply(Xg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ud=new z,cd=new Kn,Wn=new z,bu=class extends ga{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ud,cd,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ud,cd,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,a,n=!1){super.updateWorldMatrix(e,a,n),this.matrixWorld.decompose(ud,cd,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ud,cd,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new z,SM=new Ke,yM=new Ke,Ma=class extends bu{constructor(e=50,a=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(nu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,a){return this.getViewBounds(e,SM,yM),a.subVectors(yM,SM)}setViewOffset(e,a,n,i,s,r){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(nu*.5*this.fov)/this.zoom,n=2*a,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,a-=r.offsetY*n/u,i*=r.width/l,n*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var Qg=class extends Lu{constructor(){super(new Ma(90,1,.5,500)),this.isPointLightShadow=!0}},Cu=class extends Do{constructor(e,a,n=0,i=2){super(e,a),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,a){return super.copy(e,a),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.distance=this.distance,a.object.decay=this.decay,a.object.shadow=this.shadow.toJSON(),a}},Au=class extends bu{constructor(e=-1,a=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+a,l=i-a;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},jg=class extends Lu{constructor(){super(new Au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Tu=class extends Do{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ga.DEFAULT_UP),this.updateMatrix(),this.target=new ga,this.shadow=new jg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}};var yo=-90,vo=1,Po=class extends ga{constructor(e,a,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ma(yo,vo,e,a);i.layers=this.layers,this.add(i);let s=new Ma(yo,vo,e,a);s.layers=this.layers,this.add(s);let r=new Ma(yo,vo,e,a);r.layers=this.layers,this.add(r);let o=new Ma(yo,vo,e,a);o.layers=this.layers,this.add(o);let l=new Ma(yo,vo,e,a);l.layers=this.layers,this.add(l);let u=new Ma(yo,vo,e,a);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[n,i,s,r,o,l]=a;for(let u of a)this.remove(u);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of a)this.add(u),u.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,d]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,o),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(a,d),e.setRenderTarget(p,f,h),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Vd=class extends Ma{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Dx="\\[\\]\\.:\\/",h1=new RegExp("["+Dx+"]","g"),Px="[^"+Dx+"]",p1="[^"+Dx.replace("\\.","")+"]",m1=/((?:WC+[\/:])*)/.source.replace("WC",Px),g1=/(WCOD+)?/.source.replace("WCOD",p1),x1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Px),S1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Px),y1=new RegExp("^"+m1+g1+x1+S1+"$"),v1=["material","materials","bones","map"],$g=class{constructor(e,a,n){let i=n||Rt.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},Rt=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h1,"")}static parseTrackName(e){let a=y1.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);v1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Be("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=$g;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C2=new Float32Array(1);var vM=new At,Iu=class{constructor(e,a,n=0,i=1/0){this.ray=new Eo(e,a),this.near=n,this.far=i,this.camera=null,this.layers=new To,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):Be("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return vM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vM),this}intersectObject(e,a=!0,n=[]){return ex(e,this,n,a),n.sort(_M),n}intersectObjects(e,a=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ex(e[i],this,n,a);return n.sort(_M),n}};function _M(t,e){return t.distance-e.distance}function ex(t,e,a,n){let i=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(i=!1),i===!0&&n===!0){let s=t.children;for(let r=0,o=s.length;r<o;r++)ex(s[r],e,a,!0)}}var Eu=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ue("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let a=performance.now();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}};var zx=class zx{constructor(e,a,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let n=0;n<4;n++)this.elements[n]=e[n+a];return this}set(e,a,n,i){let s=this.elements;return s[0]=e,s[2]=a,s[1]=n,s[3]=i,this}};zx.prototype.isMatrix2=!0;var tx=zx;function Ux(t,e,a,n){let i=_1(n);switch(a){case vx:return t*e;case Mx:return t*e/i.components*i.byteLength;case jd:return t*e/i.components*i.byteLength;case Es:return t*e*2/i.components*i.byteLength;case $d:return t*e*2/i.components*i.byteLength;case _x:return t*e*3/i.components*i.byteLength;case Un:return t*e*4/i.components*i.byteLength;case eh:return t*e*4/i.components*i.byteLength;case Pu:case Uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:case ih:return Math.max(t,16)*Math.max(e,8)/4;case th:case nh:return Math.max(t,8)*Math.max(e,8)/2;case sh:case rh:case lh:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oh:case Bu:case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Ah:case Th:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ih:case Eh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fu:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function _1(t){switch(t){case qa:case gx:return{byteLength:1,components:1};case Bo:case xx:case Pn:return{byteLength:2,components:1};case Jd:case Qd:return{byteLength:2,components:4};case Rn:case Kd:case Dn:return{byteLength:4,components:1};case Sx:case yx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function RL(){let t=null,e=!1,a=null,n=null;function i(s,r){n=t.requestAnimationFrame(i),a(s,r)}return{start:function(){e!==!0&&a!==null&&t!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function L1(t){let e=new WeakMap;function a(o,l){let u=o.array,d=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){let d=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,d);else{p.sort((h,S)=>h.start-S.start);let f=0;for(let h=1;h<p.length;h++){let S=p[f],M=p[h];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++f,p[f]=M)}p.length=f+1;for(let h=0,S=p.length;h<S;h++){let M=p[h];t.bufferSubData(u,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,a(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}var b1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C1=`#ifdef USE_ALPHAHASH
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
#endif`,A1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w1=`#ifdef USE_AOMAP
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
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
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
#endif`,P1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,U1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B1=`#ifdef USE_IRIDESCENCE
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
#endif`,F1=`#ifdef USE_BUMPMAP
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,G1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Y1=`#define PI 3.141592653589793
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
} // validated`,Z1=`vec3 transformedNormal = objectNormal;
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
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$1="gl_FragColor = linearToOutputTexel( gl_FragColor );",eI=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tI=`#ifdef USE_ENVMAP
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
#endif`,aI=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nI=`#ifdef USE_ENVMAP
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
#endif`,iI=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sI=`#ifdef USE_ENVMAP
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
#endif`,rI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cI=`#ifdef USE_GRADIENTMAP
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
}`,fI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pI=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mI=`#ifdef USE_ENVMAP
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
#endif`,gI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vI=`PhysicalMaterial material;
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
#endif`,_I=`uniform sampler2D dfgLUT;
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
}`,MI=`
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
#endif`,LI=`#if defined( RE_IndirectDiffuse )
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
#endif`,bI=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CI=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,AI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TI=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,II=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EI=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PI=`#if defined( USE_POINTS_UV )
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
#endif`,UI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BI=`#if defined( USE_MORPHCOLORS )
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
#endif`,FI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zI=`#ifdef USE_MORPHTARGETS
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
#endif`,kI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,GI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,XI=`#ifdef USE_NORMALMAP
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
#endif`,YI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jI=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$I=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
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
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,hE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#ifdef USE_TRANSMISSION
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
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ME=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform float backgroundBlurriness;
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
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
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
}`,wE=`#if DEPTH_PACKING == 3200
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
}`,RE=`#define DISTANCE
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
}`,DE=`#define DISTANCE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
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
}`,OE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,FE=`uniform vec3 diffuse;
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
}`,zE=`#define LAMBERT
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
}`,kE=`#define LAMBERT
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
}`,HE=`#define MATCAP
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
}`,GE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,qE=`#define NORMAL
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
}`,WE=`#define PHONG
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
}`,XE=`#define PHONG
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
}`,YE=`#define STANDARD
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
}`,ZE=`#define STANDARD
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
}`,KE=`#define TOON
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
}`,JE=`#define TOON
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
}`,QE=`uniform float size;
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
}`,jE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,ew=`uniform vec3 color;
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
}`,tw=`uniform float rotation;
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
}`,aw=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:b1,alphahash_pars_fragment:C1,alphamap_fragment:A1,alphamap_pars_fragment:T1,alphatest_fragment:I1,alphatest_pars_fragment:E1,aomap_fragment:w1,aomap_pars_fragment:R1,batching_pars_vertex:D1,batching_vertex:P1,begin_vertex:U1,beginnormal_vertex:N1,bsdfs:O1,iridescence_fragment:B1,bumpmap_pars_fragment:F1,clipping_planes_fragment:z1,clipping_planes_pars_fragment:k1,clipping_planes_pars_vertex:H1,clipping_planes_vertex:G1,color_fragment:V1,color_pars_fragment:q1,color_pars_vertex:W1,color_vertex:X1,common:Y1,defaultnormal_vertex:Z1,displacementmap_pars_vertex:K1,displacementmap_vertex:J1,emissivemap_fragment:Q1,emissivemap_pars_fragment:j1,colorspace_fragment:$1,colorspace_pars_fragment:eI,envmap_fragment:tI,envmap_common_pars_fragment:aI,envmap_pars_fragment:nI,envmap_pars_vertex:iI,envmap_physical_pars_fragment:mI,envmap_vertex:sI,fog_vertex:rI,fog_pars_vertex:oI,fog_fragment:lI,fog_pars_fragment:uI,gradientmap_pars_fragment:cI,lightmap_pars_fragment:fI,lights_lambert_fragment:dI,lights_lambert_pars_fragment:hI,lights_pars_begin:pI,lights_toon_fragment:gI,lights_toon_pars_fragment:xI,lights_phong_fragment:SI,lights_phong_pars_fragment:yI,lights_physical_fragment:vI,lights_physical_pars_fragment:_I,lights_fragment_begin:MI,lights_fragment_maps:LI,lights_fragment_end:bI,lightprobes_pars_fragment:CI,logdepthbuf_fragment:AI,logdepthbuf_pars_fragment:TI,logdepthbuf_pars_vertex:II,logdepthbuf_vertex:EI,map_fragment:wI,map_pars_fragment:RI,map_particle_fragment:DI,map_particle_pars_fragment:PI,metalnessmap_fragment:UI,metalnessmap_pars_fragment:NI,morphinstance_vertex:OI,morphcolor_vertex:BI,morphnormal_vertex:FI,morphtarget_pars_vertex:zI,morphtarget_vertex:kI,normal_fragment_begin:HI,normal_fragment_maps:GI,normal_pars_fragment:VI,normal_pars_vertex:qI,normal_vertex:WI,normalmap_pars_fragment:XI,clearcoat_normal_fragment_begin:YI,clearcoat_normal_fragment_maps:ZI,clearcoat_pars_fragment:KI,iridescence_pars_fragment:JI,opaque_fragment:QI,packing:jI,premultiplied_alpha_fragment:$I,project_vertex:eE,dithering_fragment:tE,dithering_pars_fragment:aE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:rE,shadowmap_vertex:oE,shadowmask_pars_fragment:lE,skinbase_vertex:uE,skinning_pars_vertex:cE,skinning_vertex:fE,skinnormal_vertex:dE,specularmap_fragment:hE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:xE,transmission_pars_fragment:SE,uv_pars_fragment:yE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:ME,background_vert:LE,background_frag:bE,backgroundCube_vert:CE,backgroundCube_frag:AE,cube_vert:TE,cube_frag:IE,depth_vert:EE,depth_frag:wE,distance_vert:RE,distance_frag:DE,equirect_vert:PE,equirect_frag:UE,linedashed_vert:NE,linedashed_frag:OE,meshbasic_vert:BE,meshbasic_frag:FE,meshlambert_vert:zE,meshlambert_frag:kE,meshmatcap_vert:HE,meshmatcap_frag:GE,meshnormal_vert:VE,meshnormal_frag:qE,meshphong_vert:WE,meshphong_frag:XE,meshphysical_vert:YE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:JE,points_vert:QE,points_frag:jE,shadow_vert:$E,shadow_frag:ew,sprite_vert:tw,sprite_frag:aw},Le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},$n={basic:{uniforms:ba([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:ba([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:ba([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:ba([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:ba([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:ba([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:ba([Le.points,Le.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:ba([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:ba([Le.common,Le.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:ba([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:ba([Le.sprite,Le.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:ba([Le.common,Le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:ba([Le.lights,Le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};$n.physical={uniforms:ba([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Dh={r:0,b:0,g:0},nw=new At,DL=new He;DL.set(-1,0,0,0,1,0,0,0,1);function iw(t,e,a,n,i,s){let r=new Xe(0),o=i===!0?0:1,l,u,d=null,p=0,f=null;function h(m){let v=m.isScene===!0?m.background:null;if(v&&v.isTexture){let y=m.backgroundBlurriness>0;v=e.get(v,y)}return v}function S(m){let v=!1,y=h(m);y===null?x(r,o):y&&y.isColor&&(x(y,1),v=!0);let I=t.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,v){let y=h(v);y&&y.isCubeTexture?(u===void 0&&(u=new la(new bs(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:dr($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nw.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(DL),u.material.toneMapped=et.getTransfer(y.colorSpace)!==ht,(d!==y||p!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new la(new Su(2,2),new Jn({name:"BackgroundMaterial",uniforms:dr($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,v){m.getRGB(Dh,Rx(t)),a.buffers.color.setClear(Dh.r,Dh.g,Dh.b,v,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,v=1){r.set(m),o=v,x(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,x(r,o)},render:S,addToRenderList:M,dispose:c}}function sw(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,r=!1;function o(O,H,Z,P,X){let K=!1,V=p(O,P,Z,H);s!==V&&(s=V,u(s.object)),K=h(O,P,Z,X),K&&S(O,P,Z,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(O,H,Z,P),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function u(O){return t.bindVertexArray(O)}function d(O){return t.deleteVertexArray(O)}function p(O,H,Z,P){let X=P.wireframe===!0,K=n[H.id];K===void 0&&(K={},n[H.id]=K);let V=O.isInstancedMesh===!0?O.id:0,ce=K[V];ce===void 0&&(ce={},K[V]=ce);let W=ce[Z.id];W===void 0&&(W={},ce[Z.id]=W);let ne=W[X];return ne===void 0&&(ne=f(l()),W[X]=ne),ne}function f(O){let H=[],Z=[],P=[];for(let X=0;X<a;X++)H[X]=0,Z[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:P,object:O,attributes:{},index:null}}function h(O,H,Z,P){let X=s.attributes,K=H.attributes,V=0,ce=Z.getAttributes();for(let W in ce)if(ce[W].location>=0){let re=X[W],Te=K[W];if(Te===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(Te=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(Te=O.instanceColor)),re===void 0||re.attribute!==Te||Te&&re.data!==Te.data)return!0;V++}return s.attributesNum!==V||s.index!==P}function S(O,H,Z,P){let X={},K=H.attributes,V=0,ce=Z.getAttributes();for(let W in ce)if(ce[W].location>=0){let re=K[W];re===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(re=O.instanceColor));let Te={};Te.attribute=re,re&&re.data&&(Te.data=re.data),X[W]=Te,V++}s.attributes=X,s.attributesNum=V,s.index=P}function M(){let O=s.newAttributes;for(let H=0,Z=O.length;H<Z;H++)O[H]=0}function x(O){c(O,0)}function c(O,H){let Z=s.newAttributes,P=s.enabledAttributes,X=s.attributeDivisors;Z[O]=1,P[O]===0&&(t.enableVertexAttribArray(O),P[O]=1),X[O]!==H&&(t.vertexAttribDivisor(O,H),X[O]=H)}function m(){let O=s.newAttributes,H=s.enabledAttributes;for(let Z=0,P=H.length;Z<P;Z++)H[Z]!==O[Z]&&(t.disableVertexAttribArray(Z),H[Z]=0)}function v(O,H,Z,P,X,K,V){V===!0?t.vertexAttribIPointer(O,H,Z,X,K):t.vertexAttribPointer(O,H,Z,P,X,K)}function y(O,H,Z,P){M();let X=P.attributes,K=Z.getAttributes(),V=H.defaultAttributeValues;for(let ce in K){let W=K[ce];if(W.location>=0){let ne=X[ce];if(ne===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor)),ne!==void 0){let re=ne.normalized,Te=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;let k=ze.buffer,ie=ze.type,ye=ze.bytesPerElement,ge=ie===t.INT||ie===t.UNSIGNED_INT||ne.gpuType===Kd;if(ne.isInterleavedBufferAttribute){let xe=ne.data,Ee=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Dt=ne.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let we=0;we<W.locationSize;we++)c(W.location+we,xe.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let we=0;we<W.locationSize;we++)x(W.location+we);t.bindBuffer(t.ARRAY_BUFFER,k);for(let we=0;we<W.locationSize;we++)v(W.location+we,Te/W.locationSize,ie,re,Ee*ye,(Dt+Te/W.locationSize*we)*ye,ge)}else{if(ne.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)c(W.location+xe,ne.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<W.locationSize;xe++)x(W.location+xe);t.bindBuffer(t.ARRAY_BUFFER,k);for(let xe=0;xe<W.locationSize;xe++)v(W.location+xe,Te/W.locationSize,ie,re,Te*ye,Te/W.locationSize*xe*ye,ge)}}else if(V!==void 0){let re=V[ce];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(W.location,re);break;case 3:t.vertexAttrib3fv(W.location,re);break;case 4:t.vertexAttrib4fv(W.location,re);break;default:t.vertexAttrib1fv(W.location,re)}}}}m()}function I(){U();for(let O in n){let H=n[O];for(let Z in H){let P=H[Z];for(let X in P){let K=P[X];for(let V in K)d(K[V].object),delete K[V];delete P[X]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let H=n[O.id];for(let Z in H){let P=H[Z];for(let X in P){let K=P[X];for(let V in K)d(K[V].object),delete K[V];delete P[X]}}delete n[O.id]}function g(O){for(let H in n){let Z=n[H];for(let P in Z){let X=Z[P];if(X[O.id]===void 0)continue;let K=X[O.id];for(let V in K)d(K[V].object),delete K[V];delete X[O.id]}}}function C(O){for(let H in n){let Z=n[H],P=O.isInstancedMesh===!0?O.id:0,X=Z[P];if(X!==void 0){for(let K in X){let V=X[K];for(let ce in V)d(V[ce].object),delete V[ce];delete X[K]}delete Z[P],Object.keys(Z).length===0&&delete n[H]}}}function U(){R(),r=!0,s!==i&&(s=i,u(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:U,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfObject:C,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:x,disableUnusedAttributes:m}}function rw(t,e,a){let n;function i(l){n=l}function s(l,u){t.drawArrays(n,l,u),a.update(u,n,1)}function r(l,u,d){d!==0&&(t.drawArraysInstanced(n,l,u,d),a.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let h=0;h<d;h++)f+=u[h];a.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function ow(t,e,a,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(g){return!(g!==Un&&n.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let C=g===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==qa&&g!==Dn&&!C&&n.convert(g)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=a.precision!==void 0?a.precision:"highp",d=l(u);d!==u&&(Ue("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let p=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=a.logarithmicDepthBuffer===!0&&p===!1;a.reversedDepthBuffer===!0&&p===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),a.logarithmicDepthBuffer===!0&&p===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:x,maxAttributes:c,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,maxSamples:I,samples:T}}function lw(t){let e=this,a=null,n=0,i=!1,s=!1,r=new En,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let h=p.length!==0||f||n!==0||i;return i=f,n=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){a=d(p,f,0)},this.setState=function(p,f,h){let S=p.clippingPlanes,M=p.clipIntersection,x=p.clipShadows,c=t.get(p);if(!i||S===null||S.length===0||s&&!x)s?d(null):u();else{let m=s?0:n,v=m*4,y=c.clippingState||null;l.value=y,y=d(S,f,v,h);for(let I=0;I!==v;++I)y[I]=a[I];c.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==a&&(l.value=a,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,f,h,S){let M=p!==null?p.length:0,x=null;if(M!==0){if(x=l.value,S!==!0||x===null){let c=h+M*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<c)&&(x=new Float32Array(c));for(let v=0,y=h;v!==M;++v,y+=4)r.copy(p[v]).applyMatrix4(m,o),r.normal.toArray(x,y),x[y+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}var Hu=class extends nn{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mu(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new bs(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Na,blending:or});s.uniforms.tEquirect.value=a;let r=new la(i,s),o=a.minFilter;return a.minFilter===Pi&&(a.minFilter=Ua),new Po(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,n,i);e.setRenderTarget(s)}},cL=256,uw=3,cw=20,PL=256,UL=16,fw=3,dw=new z,hw=new Xe,Uh=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Po(1,10,null),this._boxMesh=new la(new bs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,a=0,n=.1,i=100,s={}){let{size:r=256,position:o=dw}=s,l=this._renderer;this._setSize(r);let u=this._allocateTarget(),d=this._getSourceTarget(!0);a>0&&(d.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,S=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(hw));let x=new Po(n,i,d);return x.position.copy(o),x.update(l,e),l.autoClear=p,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=S,e.background=M,a>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(u,a)),this._applyPMREM(u),u}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hL(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dL(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,a){return a>0?1-Math.sqrt(1-e/a):0}_setSize(e){this._cubeSize=Math.max(cL,Ex(e))}_fromTexture(e,a){e.mapping===ur||e.mapping===Oo?this._setSize(e.image.length===0?cL:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=a||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,a=fL(e,!1,!1),n=Math.log2(e)-uw;for(let i=0;i<=n;i++)a.texture.mipmaps.push({width:e>>i,height:e>>i});return a.texture.name="PMREM",a.texture.isPMREMTexture=!0,a}_getSourceTarget(e=!1){let a=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==a||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fL(a,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,a,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=a;let r=e.width>>a;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let a;e.mapping===ur||e.mapping===Oo?(this._cubemapMaterial===null&&(this._cubemapMaterial=hL()),a=this._cubemapMaterial,a.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dL()),a=this._equirectMaterial),a.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,a)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=pw(),this._integrationMaterial=mw());let a=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(a/UL);for(let r=0;r<=n;r++){let o=t.lodToRoughness(r,n);if(r>n-fw)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let l=o>0?Math.log2(a)+.5*Math.log2(6/(PL*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,a){this._blurMaterial===null&&(this._blurMaterial=gw());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(a,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function fL(t,e,a){return new Hu(t,{minFilter:Pi,generateMipmaps:e,type:Pn,colorSpace:ru,depthBuffer:a})}function Gu(t,e,a){return new Jn({name:t,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:a,side:Na,blending:or,depthTest:!1,depthWrite:!1})}function pw(){return Gu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${PL}u

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
	`)}function mw(){return Gu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:UL}},`

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
	`)}function gw(){return Gu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cw}
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
	`)}function dL(){return Gu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function hL(){return Gu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xw(t){let e=new WeakMap,a=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?r(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===Xd||h===Yd)if(e.has(f)){let S=e.get(f).texture;return o(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let M=new Hu(S.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",u),o(M.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,S=h===Xd||h===Yd,M=h===ur||h===Oo;if(S||M){let x=a.get(f),c=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return n===null&&(n=new Uh(t)),x=S?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,a.set(f,x),x.texture;if(x!==void 0)return x.texture;{let m=f.image;return S&&m&&m.height>0||M&&m&&l(m)?(n===null&&(n=new Uh(t)),x=S?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,a.set(f,x),f.addEventListener("dispose",d),x.texture):null}}}return f}function o(f,h){return h===Xd?f.mapping=ur:h===Yd&&(f.mapping=Oo),f}function l(f){let h=0,S=6;for(let M=0;M<S;M++)f[M]!==void 0&&h++;return h===S}function u(f){let h=f.target;h.removeEventListener("dispose",u);let S=e.get(h);S!==void 0&&(e.delete(h),S.dispose())}function d(f){let h=f.target;h.removeEventListener("dispose",d);let S=a.get(h);S!==void 0&&(a.delete(h),S.dispose())}function p(){e=new WeakMap,a=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function Sw(t){let e={};function a(n){if(e[n]!==void 0)return e[n];let i=t.getExtension(n);return e[n]=i,i}return{has:function(n){return a(n)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(n){let i=a(n);return i===null&&au("WebGLRenderer: "+n+" extension not supported."),i}}}function yw(t,e,a,n){let i={},s=new WeakMap,r=new FinalizationRegistry(S=>delete i[S]);function o(S){l(S.target)}function l(S){S.index!==null&&e.remove(S.index);for(let x in S.attributes)e.remove(S.attributes[x]);S.removeEventListener("dispose",o),delete i[S.id],r.unregister(S);let M=s.get(S);M&&(e.remove(M),s.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,a.memory.geometries--}function u(S,M){return i[M.id]!==void 0||(M.addEventListener("dispose",o),i[M.id]=new WeakRef(M),r.register(M,M.id,M),a.memory.geometries++),M}function d(S){let M=S.attributes;for(let x in M)e.update(M[x],t.ARRAY_BUFFER)}function p(S){let M=S.index,x=S.attributes.position,c=0;if(x===void 0)return;let m=M!==null?M.array.length:x.array.length/3-1,v=x.count>=65535?hu:du,y=new v(Math.ceil(m/3)*6,1),I=y.array;if(M!==null){let g=M.array;c=M.version;for(let C=0,U=0;C<m;C+=3){let R=g[C+0],O=g[C+1],H=g[C+2];I[U++]=R,I[U++]=O,I[U++]=O,I[U++]=H,I[U++]=H,I[U++]=R}}else{c=x.version;for(let g=0,C=0;g<m;g+=3){let U=g+0,R=g+1,O=g+2;I[C++]=U,I[C++]=R,I[C++]=R,I[C++]=O,I[C++]=O,I[C++]=U}}y.version=c;let T=s.get(S);T&&e.remove(T),s.set(S,y)}function f(S){let M=s.get(S);if(M){let x=S.index;x!==null&&M.version<x.version&&p(S)}else p(S);return s.get(S)}function h(){for(let S in i){let M=i[S].deref();M!==void 0&&l(M)}}return{get:u,update:d,getWireframeAttribute:f,dispose:h}}function vw(t,e,a){let n;function i(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,f){t.drawElements(n,f,s,p*r),a.update(f,n,1)}function u(p,f,h){h!==0&&(t.drawElementsInstanced(n,f,s,p*r,h),a.update(f,n,h))}function d(p,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,h);let M=0;for(let x=0;x<h;x++)M+=f[x];a.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function _w(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(a.calls++,r){case t.TRIANGLES:a.triangles+=o*(s/3);break;case t.LINES:a.lines+=o*(s/2);break;case t.LINE_STRIP:a.lines+=o*(s-1);break;case t.LINE_LOOP:a.lines+=o*s;break;case t.POINTS:a.points+=o*s;break;default:Be("WebGLInfo: Unknown draw mode:",r);break}}function i(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:n}}function Mw(t,e,a){let n=new WeakMap,i=new Nt;function s(r,o,l){let u=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==p){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],v=0;h===!0&&(v=1),S===!0&&(v=2),M===!0&&(v=3);let y=o.attributes.position.count*v,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*I*4*p),g=new uu(T,y,I,p);g.type=Dn,g.needsUpdate=!0;let C=v*4;for(let R=0;R<p;R++){let O=x[R],H=c[R],Z=m[R],P=y*I*4*R;for(let X=0;X<O.count;X++){let K=X*C;h===!0&&(i.fromBufferAttribute(O,X),T[P+K+0]=i.x,T[P+K+1]=i.y,T[P+K+2]=i.z,T[P+K+3]=0),S===!0&&(i.fromBufferAttribute(H,X),T[P+K+4]=i.x,T[P+K+5]=i.y,T[P+K+6]=i.z,T[P+K+7]=0),M===!0&&(i.fromBufferAttribute(Z,X),T[P+K+8]=i.x,T[P+K+9]=i.y,T[P+K+10]=i.z,T[P+K+11]=Z.itemSize===4?i.w:1)}}f={count:p,texture:g,size:new Ke(y,I)},n.set(o,f),o.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,a);else{let h=0;for(let M=0;M<u.length;M++)h+=u[M];let S=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Lw(t,e,a,n,i){let s=new WeakMap;function r(u){let d=i.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(a.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&a.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return f}function o(){s=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),a.remove(d.instanceMatrix),d.instanceColor!==null&&a.remove(d.instanceColor)}return{update:r,dispose:o}}var bw={[ux]:"LINEAR_TONE_MAPPING",[cx]:"REINHARD_TONE_MAPPING",[fx]:"CINEON_TONE_MAPPING",[Ru]:"ACES_FILMIC_TONE_MAPPING",[hx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[dx]:"CUSTOM_TONE_MAPPING"};function Cw(t,e,a,n,i,s){let r=new nn(e,a,{type:t,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,u=null,d=new yn;d.setAttribute("position",new La([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new La([0,2,0,0,2,0],2));let p=new wd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new la(d,p),h=new Au(-1,1,1,-1,0,1),S=null,M=null,x=!1,c,m=null,v=[],y=!1;this.setSize=function(I,T){r.setSize(I,T),o!==null&&o.setSize(I,T),l!==null&&l.setSize(I,T);for(let g=0;g<v.length;g++){let C=v[g];C.setSize&&C.setSize(I,T)}},this.setEffects=function(I){v=I,y=v.length>0&&v[0].isRenderPass===!0;let T=r.width,g=r.height;v.length>0&&o===null&&(o=new nn(T,g,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(T,g,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let C=i===!0&&v.some(U=>U.needsDepthTexture===!0);C!==(r.depthTexture!==null)&&(C===!0&&u===null&&(u=new Di(T,g),s===!0&&(u.format=Ui,u.type=cr)),r.dispose(),r.depthTexture=C?u:null,r.resolveDepthBuffer=C,r.storeMultisampledDepthBuffer=C);for(let U=0;U<v.length;U++){let R=v[U];R.setSize&&R.setSize(T,g),C&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(u)}},this.begin=function(I,T){if(x||I.toneMapping===Qn&&v.length===0)return!1;if(m=T,T!==null){let g=T.width,C=T.height;(r.width!==g||r.height!==C)&&this.setSize(g,C)}return y===!1&&I.setRenderTarget(r),c=I.toneMapping,I.toneMapping=Qn,!0},this.hasRenderPass=function(){return y},this.end=function(I,T){I.toneMapping=c,x=!0;let g=r,C=o;for(let U=0;U<v.length;U++){let R=v[U];R.enabled!==!1&&(R.render(I,C,g,T),R.needsSwap!==!1&&(g=C,C=C===o?l:o))}if(S!==I.outputColorSpace||M!==I.toneMapping){S=I.outputColorSpace,M=I.toneMapping,p.defines={},et.getTransfer(S)===ht&&(p.defines.SRGB_TRANSFER="");let U=bw[M];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,I.setRenderTarget(m),I.render(f,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),p.dispose()}}var NL=new Va,OL=new Di(1,1),BL=new gu(1),FL=new uu,zL=new Cd,kL=new mu,pL=[],mL=[],gL=new Float32Array(16),xL=new Float32Array(9),SL=new Float32Array(4);function ko(t,e,a){let n=t[0];if(n<=0||n>0)return t;let i=e*a,s=pL[i];if(s===void 0&&(s=new Float32Array(i),pL[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=a,t[r].toArray(s,o)}return s}function ea(t,e){if(t.length!==e.length)return!1;for(let a=0,n=t.length;a<n;a++)if(t[a]!==e[a])return!1;return!0}function ta(t,e){for(let a=0,n=e.length;a<n;a++)t[a]=e[a]}function Oh(t,e){let a=mL[e];a===void 0&&(a=new Int32Array(e),mL[e]=a);for(let n=0;n!==e;++n)a[n]=t.allocateTextureUnit();return a}function Aw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function Tw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ea(a,e))return;t.uniform2fv(this.addr,e),ta(a,e)}}function Iw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(ea(a,e))return;t.uniform3fv(this.addr,e),ta(a,e)}}function Ew(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ea(a,e))return;t.uniform4fv(this.addr,e),ta(a,e)}}function ww(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ea(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),ta(a,e)}else{if(ea(a,n))return;SL.set(n),t.uniformMatrix2fv(this.addr,!1,SL),ta(a,n)}}function Rw(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ea(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),ta(a,e)}else{if(ea(a,n))return;xL.set(n),t.uniformMatrix3fv(this.addr,!1,xL),ta(a,n)}}function Dw(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(ea(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),ta(a,e)}else{if(ea(a,n))return;gL.set(n),t.uniformMatrix4fv(this.addr,!1,gL),ta(a,n)}}function Pw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function Uw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ea(a,e))return;t.uniform2iv(this.addr,e),ta(a,e)}}function Nw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(ea(a,e))return;t.uniform3iv(this.addr,e),ta(a,e)}}function Ow(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ea(a,e))return;t.uniform4iv(this.addr,e),ta(a,e)}}function Bw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function Fw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(ea(a,e))return;t.uniform2uiv(this.addr,e),ta(a,e)}}function zw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(ea(a,e))return;t.uniform3uiv(this.addr,e),ta(a,e)}}function kw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(ea(a,e))return;t.uniform4uiv(this.addr,e),ta(a,e)}}function Bh(t){return t.version===0&&(t.compareFunction=Cx,t.needsUpdate=!0),t}function Hw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?s=Bh(OL):s=NL,a.setTexture2D(e||s,i)}function Gw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture3D(e||zL,i)}function Vw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Bh(BL):s=kL,a.setTextureCube(e||s,i)}function qw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture2DArray(e||FL,i)}function Ww(t){switch(t){case 5126:return Aw;case 35664:return Tw;case 35665:return Iw;case 35666:return Ew;case 35674:return ww;case 35675:return Rw;case 35676:return Dw;case 5124:case 35670:return Pw;case 35667:case 35671:return Uw;case 35668:case 35672:return Nw;case 35669:case 35673:return Ow;case 5125:return Bw;case 36294:return Fw;case 36295:return zw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Vw;case 36289:case 36303:case 36311:case 36292:return qw}}function Xw(t,e){t.uniform1fv(this.addr,e)}function Yw(t,e){let a=ko(e,this.size,2);t.uniform2fv(this.addr,a)}function Zw(t,e){let a=ko(e,this.size,3);t.uniform3fv(this.addr,a)}function Kw(t,e){let a=ko(e,this.size,4);t.uniform4fv(this.addr,a)}function Jw(t,e){let a=ko(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function Qw(t,e){let a=ko(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function jw(t,e){let a=ko(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function $w(t,e){t.uniform1iv(this.addr,e)}function eR(t,e){t.uniform2iv(this.addr,e)}function tR(t,e){t.uniform3iv(this.addr,e)}function aR(t,e){t.uniform4iv(this.addr,e)}function nR(t,e){t.uniform1uiv(this.addr,e)}function iR(t,e){t.uniform2uiv(this.addr,e)}function sR(t,e){t.uniform3uiv(this.addr,e)}function rR(t,e){t.uniform4uiv(this.addr,e)}function oR(t,e,a){let n=this.cache,i=e.length,s=Oh(a,i);ea(n,s)||(t.uniform1iv(this.addr,s),ta(n,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Bh(OL):r=NL;for(let o=0;o!==i;++o)a.setTexture2D(e[o]||r,s[o])}function lR(t,e,a){let n=this.cache,i=e.length,s=Oh(a,i);ea(n,s)||(t.uniform1iv(this.addr,s),ta(n,s));for(let r=0;r!==i;++r)a.setTexture3D(e[r]||zL,s[r])}function uR(t,e,a){let n=this.cache,i=e.length,s=Oh(a,i);ea(n,s)||(t.uniform1iv(this.addr,s),ta(n,s));let r;this.type===t.SAMPLER_CUBE_SHADOW?r=Bh(BL):r=kL;for(let o=0;o!==i;++o)a.setTextureCube(e[o]||r,s[o])}function cR(t,e,a){let n=this.cache,i=e.length,s=Oh(a,i);ea(n,s)||(t.uniform1iv(this.addr,s),ta(n,s));for(let r=0;r!==i;++r)a.setTexture2DArray(e[r]||FL,s[r])}function fR(t){switch(t){case 5126:return Xw;case 35664:return Yw;case 35665:return Zw;case 35666:return Kw;case 35674:return Jw;case 35675:return Qw;case 35676:return jw;case 5124:case 35670:return $w;case 35667:case 35671:return eR;case 35668:case 35672:return tR;case 35669:case 35673:return aR;case 5125:return nR;case 36294:return iR;case 36295:return sR;case 36296:return rR;case 35678:case 36198:case 36298:case 36306:case 35682:return oR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return uR;case 36289:case 36303:case 36311:case 36292:return cR}}var Gx=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.setValue=Ww(a.type)}},Vx=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=fR(a.type)}},qx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,a[o.id],n)}}},kx=/(\w+)(\])?(\[|\.)?/g;function yL(t,e){t.seq.push(e),t.map[e.id]=e}function dR(t,e,a){let n=t.name,i=n.length;for(kx.lastIndex=0;;){let s=kx.exec(n),r=kx.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){yL(a,u===void 0?new Gx(o,t,e):new Vx(o,t,e));break}else{let p=a.map[o];p===void 0&&(p=new qx(o),yL(a,p)),a=p}}}var zo=class{constructor(e,a){this.seq=[],this.map={};let n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(a,r),l=e.getUniformLocation(a,o.name);dR(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,a,n,i){let s=this.map[a];s!==void 0&&s.setValue(e,n,i)}setOptional(e,a,n){let i=a[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,a,n,i){for(let s=0,r=a.length;s!==r;++s){let o=a[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,a){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in a&&n.push(r)}return n}};function vL(t,e,a){let n=t.createShader(e);return t.shaderSource(n,a),t.compileShader(n),n}var hR=37297,pR=0;function mR(t,e){let a=t.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,a.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${a[r]}`)}return n.join(`
`)}var _L=new He;function gR(t){et._getMatrix(_L,et.workingColorSpace,t);let e=`mat3( ${_L.elements.map(a=>a.toFixed(4))} )`;switch(et.getTransfer(t)){case ou:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ML(t,e,a){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return a.toUpperCase()+`

`+s+`

`+mR(t.getShaderSource(e),o)}else return s}function xR(t,e){let a=gR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( ${a[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var SR={[ux]:"Linear",[cx]:"Reinhard",[fx]:"Cineon",[Ru]:"ACESFilmic",[hx]:"AgX",[px]:"Neutral",[dx]:"Custom"};function yR(t,e){let a=SR[e];return a===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Ph=new z;function vR(){et.getLuminanceCoefficients(Ph);let t=Ph.x.toFixed(4),e=Ph.y.toFixed(4),a=Ph.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _R(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ku).join(`
`)}function MR(t){let e=[];for(let a in t){let n=t[a];n!==!1&&e.push("#define "+a+" "+n)}return e.join(`
`)}function LR(t,e){let a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),a[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return a}function ku(t){return t!==""}function LL(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function bL(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var bR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wx(t){return t.replace(bR,CR)}function CR(t,e){let a=Ze[e];if(a===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wx(a)}var AR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function CL(t){return t.replace(AR,TR)}function TR(t,e,a,n){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function AL(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var IR={[wu]:"SHADOWMAP_TYPE_PCF",[Uo]:"SHADOWMAP_TYPE_VSM"};function ER(t){return IR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wR={[Oo]:"ENVMAP_MODE_REFRACTION"};function RR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":wR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DR={[lx]:"ENVMAP_BLENDING_MULTIPLY",[GM]:"ENVMAP_BLENDING_MIX",[VM]:"ENVMAP_BLENDING_ADD"};function PR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":DR[t.combine]||"ENVMAP_BLENDING_NONE"}function UR(t,e,a,n){let i=t.getContext(),s=a.defines,r=a.vertexShader,o=a.fragmentShader,l=ER(a),u=a.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=RR(a),p=PR(a),f=_R(a),h=MR(s),S=i.createProgram(),M,x,c=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(M=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(ku).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h].filter(ku).join(`
`),x.length>0&&(x+=`
`)):(M=[AL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+d:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+a.diffuseRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ku).join(`
`),x=[AL(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,h,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.envMap?"#define "+d:"",a.envMap?"#define "+p:"",a.envMapPMREM?"#define ENVMAP_MAX_LOD "+a.envMapMaxLod+".0":"",a.envMapPMREM?"#define ENVMAP_SIZE "+a.envMapSize+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",a.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.retroreflection?"#define USE_RETROREFLECTION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Qn?"#define TONE_MAPPING":"",a.toneMapping!==Qn?Ze.tonemapping_pars_fragment:"",a.toneMapping!==Qn?yR("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,xR("linearToOutputTexel",a.outputColorSpace),vR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ku).join(`
`)),r=Wx(r),r=LL(r,a),r=bL(r,a),o=Wx(o),o=LL(o,a),o=bL(o,a),r=CL(r),o=CL(o),a.isRawShaderMaterial!==!0&&(c=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",a.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let m=c+M+r,v=c+x+o,y=vL(i,i.VERTEX_SHADER,m),I=vL(i,i.FRAGMENT_SHADER,v);i.attachShader(S,y),i.attachShader(S,I),a.index0AttributeName!==void 0?i.bindAttribLocation(S,0,a.index0AttributeName):a.hasPositionAttribute===!0&&i.bindAttribLocation(S,0,"position"),i.linkProgram(S);function T(R){if(t.debug.checkShaderErrors){let O=i.getProgramInfoLog(S)||"",H=i.getShaderInfoLog(y)||"",Z=i.getShaderInfoLog(I)||"",P=O.trim(),X=H.trim(),K=Z.trim(),V=!0,ce=!0;if(i.getProgramParameter(S,i.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,S,y,I);else{let W=ML(i,y,"vertex"),ne=ML(i,I,"fragment");Be("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(S,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+W+`
`+ne)}else P!==""?Ue("WebGLProgram: Program Info Log:",P):(X===""||K==="")&&(ce=!1);ce&&(R.diagnostics={runnable:V,programLog:P,vertexShader:{log:X,prefix:M},fragmentShader:{log:K,prefix:x}})}i.deleteShader(y),i.deleteShader(I),g=new zo(i,S),C=LR(i,S)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let U=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(S,hR)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(S),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=pR++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=I,this}var NR=0,Xx=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,n){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let n of a)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,n=a.get(e);return n===void 0&&(n=new Set,a.set(e,n)),n}_getShaderStage(e){let a=this.shaderCache,n=a.get(e);return n===void 0&&(n=new Yx(e),a.set(e,n)),n}},Yx=class{constructor(e){this.id=NR++,this.code=e,this.usedTimes=0}};function OR(t){return t===Es||t===Bu||t===Fu}function BR(t,e,a,n,i,s){let r=new To,o=new Xx,l=new Set,u=[],d=new Map,p=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(g){return l.add(g),g===0?"uv":`uv${g}`}function S(g,C,U,R,O,H){let Z=R.fog,P=O.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=e.get(g.envMap||X,K),ce=f[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Ue("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let ne=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,re=ne!==void 0?ne.length:0,Te=0;P.morphAttributes.position!==void 0&&(Te=1),P.morphAttributes.normal!==void 0&&(Te=2),P.morphAttributes.color!==void 0&&(Te=3);let ze,k,ie,ye;if(ce){let ve=$n[ce];ze=ve.vertexShader,k=ve.fragmentShader}else{ze=g.vertexShader,k=g.fragmentShader;let ve=o.getVertexShaderStage(g),ot=o.getFragmentShaderStage(g);o.update(g,ve,ot),ie=ve.id,ye=ot.id}let ge=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Ee=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,we=!!g.map,it=!!g.matcap,dt=!!V,Ye=dt&&V.isPMREMTexture===!0,kt=!!g.aoMap,De=!!g.lightMap,ua=!!g.bumpMap&&g.wireframe===!1,pt=!!g.normalMap,Ca=!!g.displacementMap,Je=!!g.emissiveMap,Qt=!!g.metalnessMap,Aa=!!g.roughnessMap,Ta=g.anisotropy>0,N=g.clearcoat>0,Ht=g.diffuseRoughness>0,St=g.dispersion>0,yt=g.retroreflectivity>0,_e=g.iridescence>0,Bt=g.sheen>0,Pe=g.transmission>0,Ce=Ta&&!!g.anisotropyMap,A=N&&!!g.clearcoatMap,_=N&&!!g.clearcoatNormalMap,B=N&&!!g.clearcoatRoughnessMap,se=Ht&&!!g.diffuseRoughnessMap,$=_e&&!!g.iridescenceMap,Se=_e&&!!g.iridescenceThicknessMap,le=Bt&&!!g.sheenColorMap,Y=Bt&&!!g.sheenRoughnessMap,J=!!g.specularMap,fe=!!g.specularColorMap,w=!!g.specularIntensityMap,j=Pe&&!!g.transmissionMap,q=Pe&&!!g.thicknessMap,de=!!g.gradientMap,me=!!g.alphaMap,pe=g.alphaTest>0,be=!!g.alphaHash,Ve=!!g.extensions,ue=Qn;g.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ue=t.toneMapping);let Re=Ye?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ne={shaderID:ce,shaderType:g.type,shaderName:g.name,vertexShader:ze,fragmentShader:k,defines:g.defines,customVertexShaderID:ie,customFragmentShaderID:ye,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&O.instanceColor!==null,instancingMorph:Ee&&O.morphTexture!==null,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:we,matcap:it,envMap:dt,envMapMode:dt&&V.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Re.length-1:null,envMapSize:Ye?Re[0].width:null,aoMap:kt,lightMap:De,bumpMap:ua,normalMap:pt,displacementMap:Ca,emissiveMap:Je,normalMapObjectSpace:pt&&g.normalMapType===XM,normalMapTangentSpace:pt&&g.normalMapType===Rh,packedNormalMap:pt&&g.normalMapType===Rh&&OR(g.normalMap.format),metalnessMap:Qt,roughnessMap:Aa,anisotropy:Ta,anisotropyMap:Ce,clearcoat:N,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:B,diffuseRoughness:Ht,diffuseRoughnessMap:se,dispersion:St,retroreflection:yt,iridescence:_e,iridescenceMap:$,iridescenceThicknessMap:Se,sheen:Bt,sheenColorMap:le,sheenRoughnessMap:Y,specularMap:J,specularColorMap:fe,specularIntensityMap:w,transmission:Pe,transmissionMap:j,thicknessMap:q,gradientMap:de,opaque:g.transparent===!1&&g.blending===No&&g.alphaToCoverage===!1,alphaMap:me,alphaTest:pe,alphaHash:be,combine:g.combine,mapUv:we&&h(g.map.channel),aoMapUv:kt&&h(g.aoMap.channel),lightMapUv:De&&h(g.lightMap.channel),bumpMapUv:ua&&h(g.bumpMap.channel),normalMapUv:pt&&h(g.normalMap.channel),displacementMapUv:Ca&&h(g.displacementMap.channel),emissiveMapUv:Je&&h(g.emissiveMap.channel),metalnessMapUv:Qt&&h(g.metalnessMap.channel),roughnessMapUv:Aa&&h(g.roughnessMap.channel),anisotropyMapUv:Ce&&h(g.anisotropyMap.channel),clearcoatMapUv:A&&h(g.clearcoatMap.channel),clearcoatNormalMapUv:_&&h(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&h(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&h(g.diffuseRoughnessMap.channel),iridescenceMapUv:$&&h(g.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&h(g.iridescenceThicknessMap.channel),sheenColorMapUv:le&&h(g.sheenColorMap.channel),sheenRoughnessMapUv:Y&&h(g.sheenRoughnessMap.channel),specularMapUv:J&&h(g.specularMap.channel),specularColorMapUv:fe&&h(g.specularColorMap.channel),specularIntensityMapUv:w&&h(g.specularIntensityMap.channel),transmissionMapUv:j&&h(g.transmissionMap.channel),thicknessMapUv:q&&h(g.thicknessMap.channel),alphaMapUv:me&&h(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(pt||Ta),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(we||me),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&pt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Te,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.filter(ve=>ve.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:ue,decodeVideoTexture:we&&g.map.isVideoTexture===!0&&et.getTransfer(g.map.colorSpace)===ht,decodeVideoTextureEmissive:Je&&g.emissiveMap.isVideoTexture===!0&&et.getTransfer(g.emissiveMap.colorSpace)===ht,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===vn,flipSided:g.side===Na,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ve&&g.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&g.extensions.multiDraw===!0||Dt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function M(g){let C=[];if(g.shaderID?C.push(g.shaderID):(C.push(g.customVertexShaderID),C.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)C.push(U),C.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(x(C,g),c(C,g),C.push(t.outputColorSpace)),C.push(g.customProgramCacheKey),C.join()}function x(g,C){g.push(C.precision),g.push(C.outputColorSpace),g.push(C.envMapMode),g.push(C.envMapPMREM),g.push(C.envMapMaxLod),g.push(C.envMapSize),g.push(C.mapUv),g.push(C.alphaMapUv),g.push(C.lightMapUv),g.push(C.aoMapUv),g.push(C.bumpMapUv),g.push(C.normalMapUv),g.push(C.displacementMapUv),g.push(C.emissiveMapUv),g.push(C.metalnessMapUv),g.push(C.roughnessMapUv),g.push(C.anisotropyMapUv),g.push(C.clearcoatMapUv),g.push(C.clearcoatNormalMapUv),g.push(C.clearcoatRoughnessMapUv),g.push(C.diffuseRoughnessMapUv),g.push(C.iridescenceMapUv),g.push(C.iridescenceThicknessMapUv),g.push(C.sheenColorMapUv),g.push(C.sheenRoughnessMapUv),g.push(C.specularMapUv),g.push(C.specularColorMapUv),g.push(C.specularIntensityMapUv),g.push(C.transmissionMapUv),g.push(C.thicknessMapUv),g.push(C.combine),g.push(C.fogExp2),g.push(C.sizeAttenuation),g.push(C.morphTargetsCount),g.push(C.numSunLights),g.push(C.numDirLights),g.push(C.numPointLights),g.push(C.numSpotLights),g.push(C.numSpotLightMaps),g.push(C.numHemiLights),g.push(C.numRectAreaLights),g.push(C.numSunLightShadows),g.push(C.numDirLightShadows),g.push(C.numPointLightShadows),g.push(C.numSpotLightShadows),g.push(C.numSpotLightShadowsWithMaps),g.push(C.numLightProbes),g.push(C.numLightProbeGrids),g.push(C.shadowMapType),g.push(C.toneMapping),g.push(C.numClippingPlanes),g.push(C.numClipIntersection),g.push(C.depthPacking)}function c(g,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.retroreflection&&r.enable(24),C.diffuseRoughness&&r.enable(25),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),g.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),g.push(r.mask)}function m(g){let C=f[g.type],U;if(C){let R=$n[C];U=oL.clone(R.uniforms)}else U=g.uniforms;return U}function v(g,C){let U=d.get(C);return U!==void 0?++U.usedTimes:(U=new UR(t,C,g,i),u.push(U),d.set(C,U)),U}function y(g){if(--g.usedTimes===0){let C=u.indexOf(g);u[C]=u[u.length-1],u.pop(),d.delete(g.cacheKey),g.destroy()}}function I(g){o.remove(g)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:M,getUniforms:m,acquireProgram:v,releaseProgram:y,releaseShaderCache:I,programs:u,dispose:T}}function FR(){let t=new WeakMap;function e(r){return t.has(r)}function a(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:a,remove:n,update:i,dispose:s}}function zR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function TL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function IL(){let t=[],e=0,a=[],n=[],i=[];function s(){e=0,a.length=0,n.length=0,i.length=0}function r(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,S,M,x,c){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:S,materialVariant:r(f),groupOrder:M,renderOrder:f.renderOrder,z:x,group:c},t[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=S,m.materialVariant=r(f),m.groupOrder=M,m.renderOrder=f.renderOrder,m.z=x,m.group=c),e++,m}function l(f,h,S,M,x,c,m){m.reversedDepth===!0&&(x=-x);let v=o(f,h,S,M,x,c);S.transmission>0?n.push(v):S.transparent===!0?i.push(v):a.push(v)}function u(f,h,S,M,x,c){let m=o(f,h,S,M,x,c);S.transmission>0?n.unshift(m):S.transparent===!0?i.unshift(m):a.unshift(m)}function d(f,h){a.length>1&&a.sort(f||zR),n.length>1&&n.sort(h||TL),i.length>1&&i.sort(h||TL)}function p(){for(let f=e,h=t.length;f<h;f++){let S=t[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:a,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:d}}function kR(){let t=new WeakMap;function e(n,i){let s=t.get(n),r;return s===void 0?(r=new IL,t.set(n,[r])):i>=s.length?(r=new IL,s.push(r)):r=s[i],r}function a(){t=new WeakMap}return{get:e,dispose:a}}function HR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={direction:new z,color:new Xe};break;case"SpotLight":a={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":a={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":a={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=a,a}}}function GR(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"SunLight":case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var VR=0;function qR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function WR(t){let e=new HR,a=GR(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new z);let i=new z,s=new At,r=new At;function o(u){let d=0,p=0,f=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let h=0,S=0,M=0,x=0,c=0,m=0,v=0,y=0,I=0,T=0,g=0,C=0,U=0,R=0;u.sort(qR);for(let H=0,Z=u.length;H<Z;H++){let P=u[H],X=P.color,K=P.intensity,V=P.distance,ce=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Es?ce=P.shadow.map.texture:ce=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=X.r*K,p+=X.g*K,f+=X.b*K;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],K);R++}else if(P.isSunLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,re=a.get(P);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[S]=re,n.sunShadowMap[S]=ce;let Te=ne.getViewportCount();for(let ze=0;ze<Te;ze++)n.sunShadowMatrix[M+ze]=ne.getMatrix(ze),n.sunShadowCascade[M+ze]=ne._cascadeData[ze];M+=Te,S++}n.sun[h]=W,h++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,re=a.get(P);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.directionalShadow[x]=re,n.directionalShadowMap[x]=ce,n.directionalShadowMatrix[x]=P.shadow.matrix,I++}n.directional[x]=W,x++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(X).multiplyScalar(K),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[m]=W;let ne=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,ne.updateMatrices(P),P.castShadow&&U++),n.spotLightMatrix[m]=ne.matrix,P.castShadow){let re=a.get(P);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,n.spotShadow[m]=re,n.spotShadowMap[m]=ce,g++}m++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(X).multiplyScalar(K),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[v]=W,v++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let ne=P.shadow,re=a.get(P);re.shadowIntensity=ne.intensity,re.shadowBias=ne.bias,re.shadowNormalBias=ne.normalBias,re.shadowRadius=ne.radius,re.shadowMapSize=ne.mapSize,re.shadowCameraNear=ne.camera.near,re.shadowCameraFar=ne.camera.far,n.pointShadow[c]=re,n.pointShadowMap[c]=ce,n.pointShadowMatrix[c]=P.shadow.matrix,T++}n.point[c]=W,c++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(K),W.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[y]=W,y++}}v>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;let O=n.hash;(O.sunLength!==h||O.directionalLength!==x||O.pointLength!==c||O.spotLength!==m||O.rectAreaLength!==v||O.hemiLength!==y||O.numSunShadows!==S||O.numDirectionalShadows!==I||O.numPointShadows!==T||O.numSpotShadows!==g||O.numSpotMaps!==C||O.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=x,n.spot.length=m,n.rectArea.length=v,n.point.length=c,n.hemi.length=y,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+C-U,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,O.sunLength=h,O.directionalLength=x,O.pointLength=c,O.spotLength=m,O.rectAreaLength=v,O.hemiLength=y,O.numSunShadows=S,O.numDirectionalShadows=I,O.numPointShadows=T,O.numSpotShadows=g,O.numSpotMaps=C,O.numLightProbes=R,n.version=VR++)}function l(u,d){let p=0,f=0,h=0,S=0,M=0,x=0,c=d.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){let y=u[m];if(y.isSunLight){let I=n.sun[p];I.direction.setFromMatrixPosition(y.matrixWorld),I.direction.transformDirection(c),p++}else if(y.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(c),f++}else if(y.isSpotLight){let I=n.spot[S];I.position.setFromMatrixPosition(y.matrixWorld),I.position.applyMatrix4(c),I.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),I.direction.sub(i),I.direction.transformDirection(c),S++}else if(y.isRectAreaLight){let I=n.rectArea[M];I.position.setFromMatrixPosition(y.matrixWorld),I.position.applyMatrix4(c),r.identity(),s.copy(y.matrixWorld),s.premultiply(c),r.extractRotation(s),I.halfWidth.set(y.width*.5,0,0),I.halfHeight.set(0,y.height*.5,0),I.halfWidth.applyMatrix4(r),I.halfHeight.applyMatrix4(r),M++}else if(y.isPointLight){let I=n.point[h];I.position.setFromMatrixPosition(y.matrixWorld),I.position.applyMatrix4(c),h++}else if(y.isHemisphereLight){let I=n.hemi[x];I.direction.setFromMatrixPosition(y.matrixWorld),I.direction.transformDirection(c),x++}}}return{setup:o,setupView:l,state:n}}function EL(t){let e=new WR(t),a=[],n=[],i=[];function s(p){d.camera=p,a.length=0,n.length=0,i.length=0}function r(p){p.isLightProbeGrid?i.push(p):a.push(p)}function o(p){n.push(p)}function l(){e.setup(a),i.sort((p,f)=>p.priority-f.priority||p.id-f.id)}function u(p){e.setupView(a,p)}let d={lightsArray:a,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:r,pushShadow:o}}function XR(t){let e=new WeakMap;function a(i,s=0){let r=e.get(i),o;return r===void 0?(o=new EL(t),e.set(i,[o])):s>=r.length?(o=new EL(t),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:a,dispose:n}}var YR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZR=`uniform sampler2D shadow_pass;
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
}`,KR=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],JR=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],wL=new At,zu=new z,Hx=new z;function QR(t,e,a){let n=new Ls,i=new Ke,s=new Ke,r=new Nt,o=new Rd,l=new Dd,u={},d=a.maxTextureSize,p={[Is]:Na,[Na]:Is,[vn]:vn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:YR,fragmentShader:ZR}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let S=new yn;S.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new la(S,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let c=this.type;this.render=function(T,g,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Wd&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wu);let U=t.getRenderTarget(),R=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),H=t.state;H.setBlending(or),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Z=c!==this.type;Z&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=T.length;P<X;P++){let K=T[P],V=K.shadow;if(V===void 0){Ue("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ce=V.getFrameExtents();i.multiply(ce),s.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/ce.x),i.x=s.x*ce.x,V.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/ce.y),i.y=s.y*ce.y,V.mapSize.y=s.y));let W=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Uo){if(K.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new nn(i.x,i.y,{format:Es,type:Pn,minFilter:Ua,magFilter:Ua,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Di(i.x,i.y,Dn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=Ei,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=oa,V.map.depthTexture.magFilter=oa}else K.isPointLight?(V.map=new Hu(i.x),V.map.depthTexture=new gu(i.x,Rn)):(V.map=new nn(i.x,i.y),V.map.depthTexture=new Di(i.x,i.y,Rn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=Ei,this.type===wu?(V.map.depthTexture.compareFunction=W?bx:Lx,V.map.depthTexture.minFilter=Ua,V.map.depthTexture.magFilter=Ua):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=oa,V.map.depthTexture.magFilter=oa);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let ne=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,C);let re=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:C.layers;for(let Te=0;Te<ne;Te++){let ze=V.getCamera(Te);if(K.isPointLight){let k=V.camera,ie=V.matrix,ye=K.distance||k.far;ye!==k.far&&(k.far=ye,k.updateProjectionMatrix()),zu.setFromMatrixPosition(K.matrixWorld),k.position.copy(zu),Hx.copy(k.position),Hx.add(KR[Te]),k.up.copy(JR[Te]),k.lookAt(Hx),k.updateMatrixWorld(),ie.makeTranslation(-zu.x,-zu.y,-zu.z),wL.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V._frustum.setFromProjectionMatrix(wL,k.coordinateSystem,k.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Te),t.clear();else{Te===0&&(t.setRenderTarget(V.map),t.clear());let k=V.getViewport(Te);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),H.viewport(r)}n=V.getFrustum(Te),y(g,C,ze,K,re,this.type)}V.isPointLightShadow!==!0&&this.type===Uo&&m(V,C),V.needsUpdate=!1}c=this.type,x.needsUpdate=!1,t.setRenderTarget(U,R,O)};function m(T,g){let C=e.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new nn(i.x,i.y,{format:Es,type:Pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(g,null,C,f,M,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(g,null,C,h,M,null)}function v(T,g,C,U){let R=null,O=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)R=O;else if(R=C.isPointLight===!0?l:o,t.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let H=R.uuid,Z=g.uuid,P=u[H];P===void 0&&(P={},u[H]=P);let X=P[Z];X===void 0&&(X=R.clone(),P[Z]=X,g.addEventListener("dispose",I)),R=X}if(R.visible=g.visible,R.wireframe=g.wireframe,U===Uo?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:p[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=t.properties.get(R);H.light=C}return R}function y(T,g,C,U,R,O){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===Uo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let P=e.update(T),X=T.material;if(Array.isArray(X)){let K=P.groups;for(let V=0,ce=K.length;V<ce;V++){let W=K[V],ne=X[W.materialIndex];if(ne&&ne.visible){let re=v(T,ne,U,O);T.onBeforeShadow(t,T,g,C,P,re,W),t.renderBufferDirect(C,null,P,re,T,W),T.onAfterShadow(t,T,g,C,P,re,W)}}}else if(X.visible){let K=v(T,X,U,O);T.onBeforeShadow(t,T,g,C,P,K,null),t.renderBufferDirect(C,null,P,K,T,null),T.onAfterShadow(t,T,g,C,P,K,null)}}let Z=T.children;for(let P=0,X=Z.length;P<X;P++)y(Z[P],g,C,U,R,O)}function I(T){T.target.removeEventListener("dispose",I);for(let C in u){let U=u[C],R=T.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function jR(t,e){function a(){let w=!1,j=new Nt,q=null,de=new Nt(0,0,0,0);return{setMask:function(me){q!==me&&!w&&(t.colorMask(me,me,me,me),q=me)},setLocked:function(me){w=me},setClear:function(me,pe,be,Ve,ue){ue===!0&&(me*=Ve,pe*=Ve,be*=Ve),j.set(me,pe,be,Ve),de.equals(j)===!1&&(t.clearColor(me,pe,be,Ve),de.copy(j))},reset:function(){w=!1,q=null,de.set(-1,0,0,0)}}}function n(){let w=!1,j=!1,q=null,de=null,me=null;return{setReversed:function(pe){if(j!==pe){let be=e.get("EXT_clip_control");pe?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),j=pe;let Ve=me;me=null,this.setClear(Ve)}},getReversed:function(){return j},setTest:function(pe){pe?xe(t.DEPTH_TEST):Ee(t.DEPTH_TEST)},setMask:function(pe){q!==pe&&!w&&(t.depthMask(pe),q=pe)},setFunc:function(pe){if(j&&(pe=nL[pe]),de!==pe){switch(pe){case hd:t.depthFunc(t.NEVER);break;case pd:t.depthFunc(t.ALWAYS);break;case md:t.depthFunc(t.LESS);break;case Mo:t.depthFunc(t.LEQUAL);break;case gd:t.depthFunc(t.EQUAL);break;case xd:t.depthFunc(t.GEQUAL);break;case Sd:t.depthFunc(t.GREATER);break;case yd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=pe}},setLocked:function(pe){w=pe},setClear:function(pe){me!==pe&&(me=pe,j&&(pe=1-pe),t.clearDepth(pe))},reset:function(){w=!1,q=null,de=null,me=null,j=!1}}}function i(){let w=!1,j=null,q=null,de=null,me=null,pe=null,be=null,Ve=null,ue=null;return{setTest:function(Re){w||(Re?xe(t.STENCIL_TEST):Ee(t.STENCIL_TEST))},setMask:function(Re){j!==Re&&!w&&(t.stencilMask(Re),j=Re)},setFunc:function(Re,Ne,ve){(q!==Re||de!==Ne||me!==ve)&&(t.stencilFunc(Re,Ne,ve),q=Re,de=Ne,me=ve)},setOp:function(Re,Ne,ve){(pe!==Re||be!==Ne||Ve!==ve)&&(t.stencilOp(Re,Ne,ve),pe=Re,be=Ne,Ve=ve)},setLocked:function(Re){w=Re},setClear:function(Re){ue!==Re&&(t.clearStencil(Re),ue=Re)},reset:function(){w=!1,j=null,q=null,de=null,me=null,pe=null,be=null,Ve=null,ue=null}}}let s=new a,r=new n,o=new i,l={},u=new WeakMap,d={},p={},f={},h=new WeakMap,S=[],M=null,x=!1,c=null,m=null,v=null,y=null,I=null,T=null,g=null,C=new Xe(0,0,0),U=0,R=!1,O=null,H=null,Z=null,P=null,X=null,K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ce=0,W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=ce>=1):W.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=ce>=2);let ne=null,re={},Te=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),k=new Nt().fromArray(Te),ie=new Nt().fromArray(ze);function ye(w,j,q,de){let me=new Uint8Array(4),pe=t.createTexture();t.bindTexture(w,pe),t.texParameteri(w,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(w,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<q;be++)w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY?t.texImage3D(j,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(j+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return pe}let ge={};ge[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),xe(t.DEPTH_TEST),r.setFunc(Mo),ua(!1),pt(ax),xe(t.CULL_FACE),kt(or);function xe(w){d[w]!==!0&&(t.enable(w),d[w]=!0)}function Ee(w){d[w]!==!1&&(t.disable(w),d[w]=!1)}function Dt(w,j){return f[w]!==j?(t.bindFramebuffer(w,j),f[w]=j,w===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=j),w===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=j),!0):!1}function we(w,j){let q=S,de=!1;if(w){q=h.get(j),q===void 0&&(q=[],h.set(j,q));let me=w.textures;if(q.length!==me.length||q[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,be=me.length;pe<be;pe++)q[pe]=t.COLOR_ATTACHMENT0+pe;q.length=me.length,de=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,de=!0);de&&t.drawBuffers(q)}function it(w){return M!==w?(t.useProgram(w),M=w,!0):!1}let dt={[lr]:t.FUNC_ADD,[CM]:t.FUNC_SUBTRACT,[AM]:t.FUNC_REVERSE_SUBTRACT};dt[TM]=t.MIN,dt[IM]=t.MAX;let Ye={[EM]:t.ZERO,[wM]:t.ONE,[RM]:t.SRC_COLOR,[rx]:t.SRC_ALPHA,[BM]:t.SRC_ALPHA_SATURATE,[NM]:t.DST_COLOR,[PM]:t.DST_ALPHA,[DM]:t.ONE_MINUS_SRC_COLOR,[ox]:t.ONE_MINUS_SRC_ALPHA,[OM]:t.ONE_MINUS_DST_COLOR,[UM]:t.ONE_MINUS_DST_ALPHA,[FM]:t.CONSTANT_COLOR,[zM]:t.ONE_MINUS_CONSTANT_COLOR,[kM]:t.CONSTANT_ALPHA,[HM]:t.ONE_MINUS_CONSTANT_ALPHA};function kt(w,j,q,de,me,pe,be,Ve,ue,Re){if(w===or){x===!0&&(Ee(t.BLEND),x=!1);return}if(x===!1&&(xe(t.BLEND),x=!0),w!==bM){if(w!==c||Re!==R){if((m!==lr||I!==lr)&&(t.blendEquation(t.FUNC_ADD),m=lr,I=lr),Re)switch(w){case No:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nx:t.blendFunc(t.ONE,t.ONE);break;case ix:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sx:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Be("WebGLState: Invalid blending: ",w);break}else switch(w){case No:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case nx:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ix:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sx:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",w);break}v=null,y=null,T=null,g=null,C.set(0,0,0),U=0,c=w,R=Re}return}me=me||j,pe=pe||q,be=be||de,(j!==m||me!==I)&&(t.blendEquationSeparate(dt[j],dt[me]),m=j,I=me),(q!==v||de!==y||pe!==T||be!==g)&&(t.blendFuncSeparate(Ye[q],Ye[de],Ye[pe],Ye[be]),v=q,y=de,T=pe,g=be),(Ve.equals(C)===!1||ue!==U)&&(t.blendColor(Ve.r,Ve.g,Ve.b,ue),C.copy(Ve),U=ue),c=w,R=!1}function De(w,j){w.side===vn?Ee(t.CULL_FACE):xe(t.CULL_FACE);let q=w.side===Na;j&&(q=!q),ua(q),w.blending===No&&w.transparent===!1?kt(or):kt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),s.setMask(w.colorWrite);let de=w.stencilWrite;o.setTest(de),de&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Je(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):Ee(t.SAMPLE_ALPHA_TO_COVERAGE)}function ua(w){O!==w&&(w?t.frontFace(t.CW):t.frontFace(t.CCW),O=w)}function pt(w){w!==MM?(xe(t.CULL_FACE),w!==H&&(w===ax?t.cullFace(t.BACK):w===LM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ee(t.CULL_FACE),H=w}function Ca(w){w!==Z&&(V&&t.lineWidth(w),Z=w)}function Je(w,j,q){w?(xe(t.POLYGON_OFFSET_FILL),(P!==j||X!==q)&&(P=j,X=q,r.getReversed()&&(j=-j,q=-q),t.polygonOffset(j,q))):Ee(t.POLYGON_OFFSET_FILL)}function Qt(w){w?xe(t.SCISSOR_TEST):Ee(t.SCISSOR_TEST)}function Aa(w){w===void 0&&(w=t.TEXTURE0+K-1),ne!==w&&(t.activeTexture(w),ne=w)}function Ta(w,j,q){q===void 0&&(ne===null?q=t.TEXTURE0+K-1:q=ne);let de=re[q];de===void 0&&(de={type:void 0,texture:void 0},re[q]=de),(de.type!==w||de.texture!==j)&&(ne!==q&&(t.activeTexture(q),ne=q),t.bindTexture(w,j||ge[w]),de.type=w,de.texture=j)}function N(){let w=re[ne];w!==void 0&&w.type!==void 0&&(t.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Ht(){try{t.compressedTexImage2D(...arguments)}catch(w){Be("WebGLState:",w)}}function St(){try{t.compressedTexImage3D(...arguments)}catch(w){Be("WebGLState:",w)}}function yt(){try{t.texSubImage2D(...arguments)}catch(w){Be("WebGLState:",w)}}function _e(){try{t.texSubImage3D(...arguments)}catch(w){Be("WebGLState:",w)}}function Bt(){try{t.compressedTexSubImage2D(...arguments)}catch(w){Be("WebGLState:",w)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(w){Be("WebGLState:",w)}}function Ce(){try{t.texStorage2D(...arguments)}catch(w){Be("WebGLState:",w)}}function A(){try{t.texStorage3D(...arguments)}catch(w){Be("WebGLState:",w)}}function _(){try{t.texImage2D(...arguments)}catch(w){Be("WebGLState:",w)}}function B(){try{t.texImage3D(...arguments)}catch(w){Be("WebGLState:",w)}}function se(w){return p[w]!==void 0?p[w]:t.getParameter(w)}function $(w,j){p[w]!==j&&(t.pixelStorei(w,j),p[w]=j)}function Se(w){k.equals(w)===!1&&(t.scissor(w.x,w.y,w.z,w.w),k.copy(w))}function le(w){ie.equals(w)===!1&&(t.viewport(w.x,w.y,w.z,w.w),ie.copy(w))}function Y(w,j){let q=u.get(j);q===void 0&&(q=new WeakMap,u.set(j,q));let de=q.get(w);de===void 0&&(de=t.getUniformBlockIndex(j,w.name),t.uniformBlockBinding(j,de,de),q.set(w,de))}function J(w,j,q){let me=u.get(j).get(w);l[me]!==q&&(t.bindBufferBase(t.UNIFORM_BUFFER,me,q),l[me]=q)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},ne=null,re={},f={},l={},h=new WeakMap,S=[],M=null,x=!1,c=null,m=null,v=null,y=null,I=null,T=null,g=null,C=new Xe(0,0,0),U=0,R=!1,O=null,H=null,Z=null,P=null,X=null,k.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:xe,disable:Ee,bindFramebuffer:Dt,drawBuffers:we,useProgram:it,setBlending:kt,setMaterial:De,setFlipSided:ua,setCullFace:pt,setLineWidth:Ca,setPolygonOffset:Je,setScissorTest:Qt,activeTexture:Aa,bindTexture:Ta,unbindTexture:N,compressedTexImage2D:Ht,compressedTexImage3D:St,texImage2D:_,texImage3D:B,pixelStorei:$,getParameter:se,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Ce,texStorage3D:A,texSubImage2D:yt,texSubImage3D:_e,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Pe,scissor:Se,viewport:le,reset:fe}}function $R(t,e,a,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ke,d=new WeakMap,p=new Set,f,h=new WeakMap,S=new Set,M=new FinalizationRegistry(A=>S.delete(A)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function c(A,_){return x?new OffscreenCanvas(A,_):lu("canvas")}function m(A,_,B){let se=1,$=Ce(A);if(($.width>B||$.height>B)&&(se=B/Math.max($.width,$.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Se=Math.floor(se*$.width),le=Math.floor(se*$.height);f===void 0&&(f=c(Se,le));let Y=_?c(Se,le):f;return Y.width=Se,Y.height=le,Y.getContext("2d").drawImage(A,0,0,Se,le),Ue("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Se+"x"+le+")."),Y}else return"data"in A&&Ue("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function v(A){return A.generateMipmaps}function y(A){t.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(A,_,B,se,$,Se=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;se&&(le=e.get("EXT_texture_norm16"),le||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8),B===t.UNSIGNED_SHORT&&le&&(Y=le.R16_EXT),B===t.SHORT&&le&&(Y=le.R16_SNORM_EXT)),_===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),_===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8),B===t.UNSIGNED_SHORT&&le&&(Y=le.RG16_EXT),B===t.SHORT&&le&&(Y=le.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),_===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),_===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),_===t.RGB&&(B===t.UNSIGNED_SHORT&&le&&(Y=le.RGB16_EXT),B===t.SHORT&&le&&(Y=le.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),_===t.RGBA){let J=Se?ou:et.getTransfer($);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=J===ht?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&le&&(Y=le.RGBA16_EXT),B===t.SHORT&&le&&(Y=le.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(A,_){let B;return A?_===null||_===Rn||_===cr?B=t.DEPTH24_STENCIL8:_===Dn?B=t.DEPTH32F_STENCIL8:_===Bo&&(B=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Rn||_===cr?B=t.DEPTH_COMPONENT24:_===Dn?B=t.DEPTH_COMPONENT32F:_===Bo&&(B=t.DEPTH_COMPONENT16),B}function C(A,_){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==oa&&A.minFilter!==Ua?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function U(A){let _=new WeakRef(A);n.get(A).__ref=_,S.add(_),M.register(A,_,_)}function R(A){let _=n.get(A).__ref;_!==void 0&&(S.delete(_),M.unregister(_))}function O(A){Z(A.target)}function H(A){P(A.target)}function Z(A){A.removeEventListener("dispose",O),R(A),K(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&p.delete(A)}function P(A){A.removeEventListener("dispose",H),R(A),ce(A)}function X(){for(let A of S){let _=A.deref();_!==void 0&&(_.isRenderTarget===!0?P(_):Z(_))}S.clear(),p.clear()}function K(A){let _=n.get(A);if(_.__webglInit===void 0)return;let B=A.source,se=h.get(B);if(se){let $=se[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&V(A),Object.keys(se).length===0&&h.delete(B)}n.remove(A)}function V(A){let _=n.get(A);t.deleteTexture(_.__webglTexture);let B=A.source,se=h.get(B);delete se[_.__cacheKey],r.memory.textures--}function ce(A){let _=n.get(A);_.__depthDisposeCallback&&_.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&Z(B),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Se=0;Se<_.__webglFramebuffer[$].length;Se++)t.deleteFramebuffer(_.__webglFramebuffer[$][Se]);else t.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)t.deleteFramebuffer(_.__webglFramebuffer[$]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let se=A.textures;for(let $=0,Se=se.length;$<Se;$++){let le=n.get(se[$]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),r.memory.textures--),n.remove(se[$])}n.remove(A)}let W=0;function ne(){W=0}function re(){return W}function Te(A){W=A}function ze(){let A=W;return A>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,A}function k(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ie(A,_){let B=n.get(A);if(A.isVideoTexture&&Bt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let se=A.image;if(se===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{De(B,A,_);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+_)}function ye(A,_){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){De(B,A,_);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+_)}function ge(A,_){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){De(B,A,_);return}a.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+_)}function xe(A,_){let B=n.get(A);if(A.version>0&&B.__version!==A.version){ua(B,A,_);return}a.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+_)}let Ee={[vd]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},Dt={[oa]:t.NEAREST,[qM]:t.NEAREST_MIPMAP_NEAREST,[Du]:t.NEAREST_MIPMAP_LINEAR,[Ua]:t.LINEAR,[Zd]:t.LINEAR_MIPMAP_NEAREST,[Pi]:t.LINEAR_MIPMAP_LINEAR},we={[ZM]:t.NEVER,[Cx]:t.ALWAYS,[KM]:t.LESS,[Lx]:t.LEQUAL,[JM]:t.EQUAL,[bx]:t.GEQUAL,[QM]:t.GREATER,[jM]:t.NOTEQUAL};function it(A,_){if(_.type===Dn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ua||_.magFilter===Zd||_.magFilter===Du||_.magFilter===Pi||_.minFilter===Ua||_.minFilter===Zd||_.minFilter===Du||_.minFilter===Pi)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Ee[_.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Ee[_.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Ee[_.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Dt[_.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Dt[_.minFilter]),_.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===oa||_.minFilter!==Du&&_.minFilter!==Pi||_.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function dt(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",O),U(_));let se=_.source,$=h.get(se);$===void 0&&($={},h.set(se,$));let Se=k(_);if(Se!==A.__cacheKey){$[Se]===void 0&&($[Se]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,B=!0),$[Se].usedTimes++;let le=$[A.__cacheKey];le!==void 0&&($[A.__cacheKey].usedTimes--,le.usedTimes===0&&V(_)),A.__cacheKey=Se,A.__webglTexture=$[Se].texture}return B}function Ye(A,_,B){return Math.floor(Math.floor(A/B)/_)}function kt(A,_,B,se){let Se=A.updateRanges;if(Se.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,B,se,_.data);else{Se.sort((w,j)=>w.start-j.start);let le=0;for(let w=1;w<Se.length;w++){let j=Se[le],q=Se[w],de=j.start+j.count,me=Ye(q.start,_.width,4),pe=Ye(j.start,_.width,4);q.start<=de+1&&me===pe&&Ye(q.start+q.count-1,_.width,4)===me?j.count=Math.max(j.count,q.start+q.count-j.start):(++le,Se[le]=q)}Se.length=le+1;let Y=a.getParameter(t.UNPACK_ROW_LENGTH),J=a.getParameter(t.UNPACK_SKIP_PIXELS),fe=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let w=0,j=Se.length;w<j;w++){let q=Se[w],de=Math.floor(q.start/4),me=Math.ceil(q.count/4),pe=de%_.width,be=Math.floor(de/_.width),Ve=me,ue=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,pe),a.pixelStorei(t.UNPACK_SKIP_ROWS,be),a.texSubImage2D(t.TEXTURE_2D,0,pe,be,Ve,ue,B,se,_.data)}A.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,Y),a.pixelStorei(t.UNPACK_SKIP_PIXELS,J),a.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function De(A,_,B){let se=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(se=t.TEXTURE_3D);let $=dt(A,_),Se=_.source;a.bindTexture(se,A.__webglTexture,t.TEXTURE0+B);let le=n.get(Se);if(Se.version!==le.__version||$===!0){if(a.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ue=et.getPrimaries(et.workingColorSpace),Re=_.colorSpace===Ni?null:et.getPrimaries(_.colorSpace),Ne=_.colorSpace===Ni||ue===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let J=m(_.image,!1,i.maxTextureSize);J=Pe(_,J);let fe=s.convert(_.format,_.colorSpace),w=s.convert(_.type),j=T(_.internalFormat,fe,w,_.normalized,_.colorSpace,_.isVideoTexture);it(se,_);let q,de=_.mipmaps,me=_.isVideoTexture!==!0,pe=le.__version===void 0||$===!0,be=Se.dataReady,Ve=C(_,J);if(_.isDepthTexture)j=g(_.format===Ui,_.type),pe&&(me?a.texStorage2D(t.TEXTURE_2D,1,j,J.width,J.height):a.texImage2D(t.TEXTURE_2D,0,j,J.width,J.height,0,fe,w,null));else if(_.isDataTexture)if(de.length>0){me&&pe&&a.texStorage2D(t.TEXTURE_2D,Ve,j,de[0].width,de[0].height);for(let ue=0,Re=de.length;ue<Re;ue++)q=de[ue],me?be&&a.texSubImage2D(t.TEXTURE_2D,ue,0,0,q.width,q.height,fe,w,q.data):a.texImage2D(t.TEXTURE_2D,ue,j,q.width,q.height,0,fe,w,q.data);_.generateMipmaps=!1}else me?(pe&&a.texStorage2D(t.TEXTURE_2D,Ve,j,J.width,J.height),be&&kt(_,J,fe,w)):a.texImage2D(t.TEXTURE_2D,0,j,J.width,J.height,0,fe,w,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){me&&pe&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,j,de[0].width,de[0].height,J.depth);for(let ue=0,Re=de.length;ue<Re;ue++)if(q=de[ue],_.format!==Un)if(fe!==null)if(me){if(be)if(_.layerUpdates.size>0){let Ne=Ux(q.width,q.height,_.format,_.type);for(let ve of _.layerUpdates){let ot=q.data.subarray(ve*Ne/q.data.BYTES_PER_ELEMENT,(ve+1)*Ne/q.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,ve,q.width,q.height,1,fe,ot)}}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,q.width,q.height,J.depth,fe,q.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,j,q.width,q.height,J.depth,0,q.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?be&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,q.width,q.height,J.depth,fe,w,q.data):a.texImage3D(t.TEXTURE_2D_ARRAY,ue,j,q.width,q.height,J.depth,0,fe,w,q.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{me&&pe&&a.texStorage2D(t.TEXTURE_2D,Ve,j,de[0].width,de[0].height);for(let ue=0,Re=de.length;ue<Re;ue++)q=de[ue],_.format!==Un?fe!==null?me?be&&a.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,q.width,q.height,fe,q.data):a.compressedTexImage2D(t.TEXTURE_2D,ue,j,q.width,q.height,0,q.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?be&&a.texSubImage2D(t.TEXTURE_2D,ue,0,0,q.width,q.height,fe,w,q.data):a.texImage2D(t.TEXTURE_2D,ue,j,q.width,q.height,0,fe,w,q.data)}else if(_.isDataArrayTexture)if(me){if(pe&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,j,J.width,J.height,J.depth),be)if(_.layerUpdates.size>0){let ue=Ux(J.width,J.height,_.format,_.type);for(let Re of _.layerUpdates){let Ne=J.data.subarray(Re*ue/J.data.BYTES_PER_ELEMENT,(Re+1)*ue/J.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Re,J.width,J.height,1,fe,w,Ne)}_.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,w,J.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,j,J.width,J.height,J.depth,0,fe,w,J.data);else if(_.isData3DTexture)me?(pe&&a.texStorage3D(t.TEXTURE_3D,Ve,j,J.width,J.height,J.depth),be&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,w,J.data)):a.texImage3D(t.TEXTURE_3D,0,j,J.width,J.height,J.depth,0,fe,w,J.data);else if(_.isFramebufferTexture){if(pe)if(me)a.texStorage2D(t.TEXTURE_2D,Ve,j,J.width,J.height);else{let ue=J.width,Re=J.height;for(let Ne=0;Ne<Ve;Ne++)a.texImage2D(t.TEXTURE_2D,Ne,j,ue,Re,0,fe,w,null),ue>>=1,Re>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){let ue=t.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),J.parentNode!==ue){ue.appendChild(J),p.add(_),ue.onpaint=Re=>{let Ne=Re.changedElements;for(let ve of p)Ne.includes(ve.image)&&(ve.needsUpdate=!0)},ue.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{let Ne=t.RGBA,ve=t.RGBA,ot=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ne,ve,ot,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(de.length>0){if(me&&pe){let ue=Ce(de[0]);a.texStorage2D(t.TEXTURE_2D,Ve,j,ue.width,ue.height)}for(let ue=0,Re=de.length;ue<Re;ue++)q=de[ue],me?be&&a.texSubImage2D(t.TEXTURE_2D,ue,0,0,fe,w,q):a.texImage2D(t.TEXTURE_2D,ue,j,fe,w,q);_.generateMipmaps=!1}else if(me){if(pe){let ue=Ce(J);a.texStorage2D(t.TEXTURE_2D,Ve,j,ue.width,ue.height)}be&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,w,J)}else a.texImage2D(t.TEXTURE_2D,0,j,fe,w,J);v(_)&&_.mipmapsAutoUpdate===!0&&y(se),le.__version=Se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ua(A,_,B){if(_.image.length!==6)return;let se=dt(A,_),$=_.source;a.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);let Se=n.get($);if($.version!==Se.__version||se===!0){a.activeTexture(t.TEXTURE0+B);let le=et.getPrimaries(et.workingColorSpace),Y=_.colorSpace===Ni?null:et.getPrimaries(_.colorSpace),J=_.colorSpace===Ni||le===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,w=_.image[0]&&_.image[0].isDataTexture,j=[];for(let ve=0;ve<6;ve++)!fe&&!w?j[ve]=m(_.image[ve],!0,i.maxCubemapSize):j[ve]=w?_.image[ve].image:_.image[ve],j[ve]=Pe(_,j[ve]);let q=j[0],de=s.convert(_.format,_.colorSpace),me=s.convert(_.type),pe=T(_.internalFormat,de,me,_.normalized,_.colorSpace),be=_.isVideoTexture!==!0,Ve=Se.__version===void 0||se===!0,ue=$.dataReady,Re=C(_,q);it(t.TEXTURE_CUBE_MAP,_);let Ne;if(_.isDepthTexture){if(pe=g(_.format===Ui,_.type),Ve)if(be)a.texStorage2D(t.TEXTURE_CUBE_MAP,1,pe,q.width,q.height);else for(let ve=0;ve<6;ve++)a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pe,q.width,q.height,0,de,me,null)}else if(fe){be&&Ve&&a.texStorage2D(t.TEXTURE_CUBE_MAP,Re,pe,q.width,q.height);for(let ve=0;ve<6;ve++){Ne=j[ve].mipmaps;for(let ot=0;ot<Ne.length;ot++){let Gt=Ne[ot];_.format!==Un?de!==null?be?ue&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot,0,0,Gt.width,Gt.height,de,Gt.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot,pe,Gt.width,Gt.height,0,Gt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ue&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot,0,0,Gt.width,Gt.height,de,me,Gt.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot,pe,Gt.width,Gt.height,0,de,me,Gt.data)}}}else{if(Ne=_.mipmaps,be&&Ve){Ne.length>0&&Re++;let ve=Ce(j[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,Re,pe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(w){be?ue&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,j[ve].width,j[ve].height,de,me,j[ve].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pe,j[ve].width,j[ve].height,0,de,me,j[ve].data);for(let ot=0;ot<Ne.length;ot++){let On=Ne[ot].image[ve].image;be?ue&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot+1,0,0,On.width,On.height,de,me,On.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot+1,pe,On.width,On.height,0,de,me,On.data)}}else{be?ue&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,me,j[ve]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,pe,de,me,j[ve]);for(let ot=0;ot<Ne.length;ot++){let Gt=Ne[ot];be?ue&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot+1,0,0,de,me,Gt.image[ve]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ot+1,pe,de,me,Gt.image[ve])}}}v(_)&&_.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),Se.__version=$.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function pt(A,_,B,se,$,Se){let le=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),J=T(B.internalFormat,le,Y,B.normalized,B.colorSpace),fe=n.get(_),w=n.get(B);if(w.__renderTarget=_,!fe.__hasExternalTextures){let j=Math.max(1,_.width>>Se),q=Math.max(1,_.height>>Se);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?a.texImage3D($,Se,J,j,q,_.depth,0,le,Y,null):a.texImage2D($,Se,J,j,q,0,le,Y,null)}a.bindFramebuffer(t.FRAMEBUFFER,A),_e(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,$,w.__webglTexture,0,yt(_)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,$,w.__webglTexture,Se),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Ca(A,_,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),_.depthBuffer){let se=_.depthTexture,$=se&&se.isDepthTexture?se.type:null,Se=g(_.stencilBuffer,$),le=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;_e(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(_),Se,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(_),Se,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Se,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,A)}else{let se=_.textures;for(let $=0;$<se.length;$++){let Se=se[$],le=s.convert(Se.format,Se.colorSpace),Y=s.convert(Se.type),J=T(Se.internalFormat,le,Y,Se.normalized,Se.colorSpace);_e(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(_),J,_.width,_.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(_),J,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,J,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Je(A,_,B){let se=_.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(_.depthTexture);$.__renderTarget=_;let Se=se?_.depthTexture.image[0]:_.depthTexture.image;(!$.__webglTexture||Se.width!==_.width||Se.height!==_.height)&&(Se.width=_.width,Se.height=_.height,_.depthTexture.needsUpdate=!0),se?xe(_.depthTexture,0):ie(_.depthTexture,0);let le=$.__webglTexture,Y=yt(_),J=se?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,fe=_.depthTexture.format===Ui?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ei)_e(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,J,le,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,J,le,0);else if(_.depthTexture.format===Ui)_e(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,J,le,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(A){let _=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let se=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),se){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,se.removeEventListener("dispose",$)};se.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=se}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let se=0;se<6;se++)Je(_.__webglFramebuffer[se],A,se);else A.texture.mipmaps.length>0?Je(_.__webglFramebuffer[0],A,0):Je(_.__webglFramebuffer,A,0);else if(B){_.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[se]),_.__webglDepthbuffer[se]===void 0)_.__webglDepthbuffer[se]=t.createRenderbuffer(),Ca(_.__webglDepthbuffer[se],A,!1);else{let $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,Se)}}else if(A.texture.mipmaps.length>0?a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ca(_.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Se),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,Se)}a.bindFramebuffer(t.FRAMEBUFFER,null)}function Aa(A,_,B){let se=n.get(A);_!==void 0&&pt(se.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Qt(A)}function Ta(A){let _=A.texture,B=n.get(A),se=n.get(_);A.addEventListener("dispose",H),U(A);let $=A.textures,Se=A.isWebGLCubeRenderTarget===!0,le=$.length>1;if(le||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=_.version,r.memory.textures++),Se){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<_.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=t.createFramebuffer()}else B.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)B.__webglFramebuffer[Y]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(le)for(let Y=0,J=$.length;Y<J;Y++){let fe=n.get($[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),r.memory.textures++)}if(A.samples>0&&_e(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<$.length;Y++){let J=$[Y];B.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let fe=s.convert(J.format,J.colorSpace),w=s.convert(J.type),j=T(J.internalFormat,fe,w,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),q=yt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,q,j,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ca(B.__webglDepthRenderbuffer,A,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Se){a.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),it(t.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)pt(B.__webglFramebuffer[Y][J],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else pt(B.__webglFramebuffer[Y],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);v(_)?y(t.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),a.unbindTexture()}else if(le){for(let Y=0,J=$.length;Y<J;Y++){let fe=$[Y],w=n.get(fe),j=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(j,w.__webglTexture),it(j,fe),pt(B.__webglFramebuffer,A,fe,t.COLOR_ATTACHMENT0+Y,j,0),v(fe)&&y(j)}a.unbindTexture()}else{let Y=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(Y,se.__webglTexture),it(Y,_),_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)pt(B.__webglFramebuffer[J],A,_,t.COLOR_ATTACHMENT0,Y,J);else pt(B.__webglFramebuffer,A,_,t.COLOR_ATTACHMENT0,Y,0);v(_)?y(Y):_.mipmaps.length>0&&t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),a.unbindTexture()}A.depthBuffer&&Qt(A)}function N(A){let _=A.textures;for(let B=0,se=_.length;B<se;B++){let $=_[B];if(v($)&&$.mipmapsAutoUpdate===!0){let Se=I(A),le=n.get($).__webglTexture;a.bindTexture(Se,le),y(Se),a.unbindTexture()}}}let Ht=[];function St(A){if(A.samples>0){if(_e(A)===!1){let _=A.textures,B=A.width,se=A.height,$=t.COLOR_BUFFER_BIT,Se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=n.get(A),Y=_.length>1;if(Y)for(let fe=0;fe<_.length;fe++)a.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[fe]);let w=n.get(_[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,w,0)}t.blitFramebuffer(0,0,B,se,0,0,B,se,$,t.NEAREST),l===!0&&(Ht.length=0,Ht.push(t.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ht.push(Se),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ht))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<_.length;fe++){a.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,le.__webglColorRenderbuffer[fe]);let w=n.get(_[fe]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,w,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function yt(A){return Math.min(i.maxSamples,A.samples)}function _e(A){let _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Bt(A){let _=r.render.frame;d.get(A)!==_&&(d.set(A,_),A.update())}function Pe(A,_){let B=A.colorSpace,se=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==ru&&B!==Ni&&(et.getTransfer(B)===ht?(se!==Un||$!==qa)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",B)),_}function Ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=ze,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=Te,this.setTexture2D=ie,this.setTexture2DArray=ye,this.setTexture3D=ge,this.setTextureCube=xe,this.rebindTextures=Aa,this.setupRenderTarget=Ta,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=_e,this.dispose=X}function e2(t,e){function a(n,i=Ni){let s,r=et.getTransfer(i);if(n===qa)return t.UNSIGNED_BYTE;if(n===Jd)return t.UNSIGNED_SHORT_4_4_4_4;if(n===Qd)return t.UNSIGNED_SHORT_5_5_5_1;if(n===Sx)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===yx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===gx)return t.BYTE;if(n===xx)return t.SHORT;if(n===Bo)return t.UNSIGNED_SHORT;if(n===Kd)return t.INT;if(n===Rn)return t.UNSIGNED_INT;if(n===Dn)return t.FLOAT;if(n===Pn)return t.HALF_FLOAT;if(n===vx)return t.ALPHA;if(n===_x)return t.RGB;if(n===Un)return t.RGBA;if(n===Ei)return t.DEPTH_COMPONENT;if(n===Ui)return t.DEPTH_STENCIL;if(n===Mx)return t.RED;if(n===jd)return t.RED_INTEGER;if(n===Es)return t.RG;if(n===$d)return t.RG_INTEGER;if(n===eh)return t.RGBA_INTEGER;if(n===Pu||n===Uu||n===Nu||n===Ou)if(r===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ou)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===th||n===ah||n===nh||n===ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ah)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sh||n===rh||n===oh||n===lh||n===uh||n===Bu||n===ch)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sh||n===rh)return r===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===lh)return s.COMPRESSED_R11_EAC;if(n===uh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Bu)return s.COMPRESSED_RG11_EAC;if(n===ch)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fh||n===dh||n===hh||n===ph||n===mh||n===gh||n===xh||n===Sh||n===yh||n===vh||n===_h||n===Mh||n===Lh||n===bh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_h)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return r===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ch||n===Ah||n===Th)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ch)return r===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ah)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Eh||n===Fu||n===wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ih)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:a}}var t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a2=`
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

}`,Zx=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let n=new xu(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,n=new Jn({vertexShader:t2,fragmentShader:a2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new la(new Su(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kx=class extends Zn{constructor(e,a){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,d=null,p=null,f=null,h=null,S=null,M=typeof XRWebGLBinding<"u",x=new Zx,c={},m=a.getContextAttributes(),v=null,y=null,I=[],T=[],g=new Ke,C=null,U=null,R=new Ma;R.viewport=new Nt;let O=new Ma;O.viewport=new Nt;let H=[R,O],Z=new Vd,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ie=I[k];return ie===void 0&&(ie=new Io,I[k]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(k){let ie=I[k];return ie===void 0&&(ie=new Io,I[k]=ie),ie.getGripSpace()},this.getHand=function(k){let ie=I[k];return ie===void 0&&(ie=new Io,I[k]=ie),ie.getHandSpace()};function K(k){let ie=T.indexOf(k.inputSource);if(ie===-1)return;let ye=I[ie];ye!==void 0&&(ye.update(k.inputSource,k.frame,u||r),ye.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",ce);for(let k=0;k<I.length;k++){let ie=T[k];ie!==null&&(T[k]=null,I[k].disconnect(ie))}P=null,X=null,x.reset();for(let k in c)delete c[k];if(e.setRenderTarget(v),h=null,f=null,p=null,i=null,y=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(g.width,g.height,!1),U!==null){let k=U.camera;k.fov=U.fov,k.zoom=U.zoom,k.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(i,a)),p},this.getFrame=function(){return S},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",V),i.addEventListener("inputsourceschange",ce),m.xrCompatible!==!0&&await a.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ge=null,xe=null;m.depth&&(xe=m.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,ye=m.stencil?Ui:Ei,ge=m.stencil?cr:Rn);let Ee={colorFormat:a.RGBA8,depthFormat:xe,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new nn(f.textureWidth,f.textureHeight,{format:Un,type:qa,depthTexture:new Di(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,a,ye),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new nn(h.framebufferWidth,h.framebufferHeight,{format:Un,type:qa,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ce(k){for(let ie=0;ie<k.removed.length;ie++){let ye=k.removed[ie],ge=T.indexOf(ye);ge>=0&&(T[ge]=null,I[ge].disconnect(ye))}for(let ie=0;ie<k.added.length;ie++){let ye=k.added[ie],ge=T.indexOf(ye);if(ge===-1){for(let Ee=0;Ee<I.length;Ee++)if(Ee>=T.length){T.push(ye),ge=Ee;break}else if(T[Ee]===null){T[Ee]=ye,ge=Ee;break}if(ge===-1)break}let xe=I[ge];xe&&xe.connect(ye)}}function W(k,ie){ie===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ie.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let ie=k.near,ye=k.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),Z.near=O.near=R.near=ie,Z.far=O.far=R.far=ye,(P!==Z.near||X!==Z.far)&&(i.updateRenderState({depthNear:Z.near,depthFar:Z.far}),P=Z.near,X=Z.far),Z.layers.mask=k.layers.mask|6,R.layers.mask=Z.layers.mask&-5,O.layers.mask=Z.layers.mask&-3;let ge=k.parent,xe=Z.cameras;W(Z,ge);for(let Ee=0;Ee<xe.length;Ee++)W(xe[Ee],ge);Z.projectionMatrix.copy(R.projectionMatrix),Z.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&k.isPerspectiveCamera&&(U={camera:k,fov:k.fov,zoom:k.zoom}),ne(k,Z,ge)};function ne(k,ie,ye){ye===null?k.matrix.copy(ie.matrixWorld):(k.matrix.copy(ye.matrixWorld),k.matrix.invert(),k.matrix.multiply(ie.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ie.projectionMatrix),k.projectionMatrixInverse.copy(ie.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Co*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(k){return c[k]};let re=null;function Te(k,ie){if(d=ie.getViewerPose(u||r),S=ie,d!==null){let ye=d.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let ge=!1;ye.length!==Z.cameras.length&&(Z.cameras.length=0,ge=!0);for(let we=0;we<ye.length;we++){let it=ye[we],dt=null;if(h!==null)dt=h.getViewport(it);else{let kt=p.getViewSubImage(f,it);dt=kt.viewport,we===0&&(e.setRenderTargetTextures(y,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(y))}let Ye=H[we];Ye===void 0&&(Ye=new Ma,Ye.layers.enable(we),Ye.viewport=new Nt,H[we]=Ye),Ye.matrix.fromArray(it.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(it.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(dt.x,dt.y,dt.width,dt.height),we===0&&(Z.matrix.copy(Ye.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ge===!0&&Z.cameras.push(Ye)}let xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let we=p.getDepthInformation(ye[0]);we&&we.isValid&&we.texture&&x.init(we,i.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let we=0;we<ye.length;we++){let it=ye[we].camera;if(it){let dt=c[it];dt||(dt=new xu,c[it]=dt);let Ye=p.getCameraImage(it);dt.sourceTexture=Ye}}}}for(let ye=0;ye<I.length;ye++){let ge=T[ye],xe=I[ye];ge!==null&&xe!==void 0&&xe.update(ge,ie,u||r)}re&&re(k,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),S=null}let ze=new RL;ze.setAnimationLoop(Te),this.setAnimationLoop=function(k){re=k},this.dispose=function(){}}},n2=new At,HL=new He;HL.set(-1,0,0,0,1,0,0,0,1);function i2(t,e){function a(x,c){x.matrixAutoUpdate===!0&&x.updateMatrix(),c.value.copy(x.matrix)}function n(x,c){c.color.getRGB(x.fogColor.value,Rx(t)),c.isFog?(x.fogNear.value=c.near,x.fogFar.value=c.far):c.isFogExp2&&(x.fogDensity.value=c.density)}function i(x,c,m,v,y){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?s(x,c):c.isMeshLambertMaterial?(s(x,c),c.envMap&&(x.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(x,c),p(x,c)):c.isMeshPhongMaterial?(s(x,c),d(x,c),c.envMap&&(x.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(x,c),f(x,c),c.isMeshPhysicalMaterial&&h(x,c,y)):c.isMeshMatcapMaterial?(s(x,c),S(x,c)):c.isMeshDepthMaterial?s(x,c):c.isMeshDistanceMaterial?(s(x,c),M(x,c)):c.isMeshNormalMaterial?s(x,c):c.isLineBasicMaterial?(r(x,c),c.isLineDashedMaterial&&o(x,c)):c.isPointsMaterial?l(x,c,m,v):c.isSpriteMaterial?u(x,c):c.isShadowMaterial?(x.color.value.copy(c.color),x.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(x,c){x.opacity.value=c.opacity,c.color&&x.diffuse.value.copy(c.color),c.emissive&&x.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(x.map.value=c.map,a(c.map,x.mapTransform)),c.alphaMap&&(x.alphaMap.value=c.alphaMap,a(c.alphaMap,x.alphaMapTransform)),c.bumpMap&&(x.bumpMap.value=c.bumpMap,a(c.bumpMap,x.bumpMapTransform),x.bumpScale.value=c.bumpScale,c.side===Na&&(x.bumpScale.value*=-1)),c.normalMap&&(x.normalMap.value=c.normalMap,a(c.normalMap,x.normalMapTransform),x.normalScale.value.copy(c.normalScale),c.side===Na&&x.normalScale.value.negate()),c.displacementMap&&(x.displacementMap.value=c.displacementMap,a(c.displacementMap,x.displacementMapTransform),x.displacementScale.value=c.displacementScale,x.displacementBias.value=c.displacementBias),c.emissiveMap&&(x.emissiveMap.value=c.emissiveMap,a(c.emissiveMap,x.emissiveMapTransform)),c.specularMap&&(x.specularMap.value=c.specularMap,a(c.specularMap,x.specularMapTransform)),c.alphaTest>0&&(x.alphaTest.value=c.alphaTest);let m=e.get(c),v=m.envMap,y=m.envMapRotation;v&&(x.envMap.value=v,x.envMapRotation.value.setFromMatrix4(n2.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(HL),x.reflectivity.value=c.reflectivity,x.ior.value=c.ior,x.refractionRatio.value=c.refractionRatio),c.lightMap&&(x.lightMap.value=c.lightMap,x.lightMapIntensity.value=c.lightMapIntensity,a(c.lightMap,x.lightMapTransform)),c.aoMap&&(x.aoMap.value=c.aoMap,x.aoMapIntensity.value=c.aoMapIntensity,a(c.aoMap,x.aoMapTransform))}function r(x,c){x.diffuse.value.copy(c.color),x.opacity.value=c.opacity,c.map&&(x.map.value=c.map,a(c.map,x.mapTransform))}function o(x,c){x.dashSize.value=c.dashSize,x.totalSize.value=c.dashSize+c.gapSize,x.scale.value=c.scale}function l(x,c,m,v){x.diffuse.value.copy(c.color),x.opacity.value=c.opacity,x.size.value=c.size*m,x.scale.value=v*.5,c.map&&(x.map.value=c.map,a(c.map,x.uvTransform)),c.alphaMap&&(x.alphaMap.value=c.alphaMap,a(c.alphaMap,x.alphaMapTransform)),c.alphaTest>0&&(x.alphaTest.value=c.alphaTest)}function u(x,c){x.diffuse.value.copy(c.color),x.opacity.value=c.opacity,x.rotation.value=c.rotation,c.map&&(x.map.value=c.map,a(c.map,x.mapTransform)),c.alphaMap&&(x.alphaMap.value=c.alphaMap,a(c.alphaMap,x.alphaMapTransform)),c.alphaTest>0&&(x.alphaTest.value=c.alphaTest)}function d(x,c){x.specular.value.copy(c.specular),x.shininess.value=Math.max(c.shininess,1e-4)}function p(x,c){c.gradientMap&&(x.gradientMap.value=c.gradientMap)}function f(x,c){x.metalness.value=c.metalness,c.metalnessMap&&(x.metalnessMap.value=c.metalnessMap,a(c.metalnessMap,x.metalnessMapTransform)),x.roughness.value=c.roughness,c.roughnessMap&&(x.roughnessMap.value=c.roughnessMap,a(c.roughnessMap,x.roughnessMapTransform)),c.envMap&&(x.envMapIntensity.value=c.envMapIntensity)}function h(x,c,m){x.ior.value=c.ior,c.diffuseRoughness>0&&(x.diffuseRoughness.value=c.diffuseRoughness,c.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=c.diffuseRoughnessMap,a(c.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),c.sheen>0&&(x.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),x.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(x.sheenColorMap.value=c.sheenColorMap,a(c.sheenColorMap,x.sheenColorMapTransform)),c.sheenRoughnessMap&&(x.sheenRoughnessMap.value=c.sheenRoughnessMap,a(c.sheenRoughnessMap,x.sheenRoughnessMapTransform))),c.clearcoat>0&&(x.clearcoat.value=c.clearcoat,x.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(x.clearcoatMap.value=c.clearcoatMap,a(c.clearcoatMap,x.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,a(c.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(x.clearcoatNormalMap.value=c.clearcoatNormalMap,a(c.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Na&&x.clearcoatNormalScale.value.negate())),c.dispersion>0&&(x.dispersion.value=c.dispersion),c.retroreflectivity>0&&(x.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(x.iridescence.value=c.iridescence,x.iridescenceIOR.value=c.iridescenceIOR,x.iridescenceThicknessMinimum.value=c.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=c.iridescenceThicknessMaximum,c.iridescenceMap&&(x.iridescenceMap.value=c.iridescenceMap,a(c.iridescenceMap,x.iridescenceMapTransform)),c.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=c.iridescenceThicknessMap,a(c.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),c.transmission>0&&(x.transmission.value=c.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(x.transmissionMap.value=c.transmissionMap,a(c.transmissionMap,x.transmissionMapTransform)),x.thickness.value=c.thickness,c.thicknessMap&&(x.thicknessMap.value=c.thicknessMap,a(c.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=c.attenuationDistance,x.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(x.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(x.anisotropyMap.value=c.anisotropyMap,a(c.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=c.specularIntensity,x.specularColor.value.copy(c.specularColor),c.specularColorMap&&(x.specularColorMap.value=c.specularColorMap,a(c.specularColorMap,x.specularColorMapTransform)),c.specularIntensityMap&&(x.specularIntensityMap.value=c.specularIntensityMap,a(c.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,c){c.matcap&&(x.matcap.value=c.matcap)}function M(x,c){let m=e.get(c).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function s2(t,e,a,n){let i={},s={};function r(m,v){let y=v.program;n.uniformBlockBinding(m,y,i[m.id])}function o(m,v){let y=i[m.id];y===void 0&&(S(m),y=l(m),i[m.id]=y,m.addEventListener("dispose",x));let I=v.program;n.updateUBOMapping(m,I);let T=e.render.frame;s[m.id]!==T&&(u(m),s[m.id]=T)}function l(m){let v=t.createBuffer(),y=m.__size,I=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,y,I),t.bindBuffer(t.UNIFORM_BUFFER,null),v}function u(m){let v=i[m.id],y=m.uniforms,I=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,g=y.length;T<g;T++){let C=y[T];if(Array.isArray(C))for(let U=0,R=C.length;U<R;U++)d(C[U],T,U,I);else d(C,T,0,I)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(m,v,y,I){if(f(m,v,y,I)===!0){let T=m.__offset,g=m.value;if(Array.isArray(g)){let C=0;for(let U=0;U<g.length;U++){let R=g[U],O=M(R,!0);p(R,m.__data,C),C+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,m.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,m.__data)}}function p(m,v,y){typeof m=="number"||typeof m=="boolean"?v[y]=m:m.isMatrix3?(v[y]=m.elements[0],v[y+1]=m.elements[1],v[y+2]=m.elements[2],v[y+3]=0,v[y+4]=m.elements[3],v[y+5]=m.elements[4],v[y+6]=m.elements[5],v[y+7]=0,v[y+8]=m.elements[6],v[y+9]=m.elements[7],v[y+10]=m.elements[8],v[y+11]=0):ArrayBuffer.isView(m)?v.set(m.subarray(0,v.length-y),y):m.toArray(v,y)}function f(m,v,y,I){let T=m.value,g=v+"_"+y;if(Array.isArray(T)){I[g]===void 0&&(I[g]=[]);let C=I[g],U=!1;for(let R=0;R<T.length;R++)h(T[R],C,R)===!0&&(U=!0);return U}return h(T,I,g)}function h(m,v,y){if(v[y]===void 0)return typeof m=="number"||typeof m=="boolean"?v[y]=m:ArrayBuffer.isView(m)?v[y]=m.slice():v[y]=m.clone(),!0;{let I=v[y];if(typeof m=="number"||typeof m=="boolean"){if(I!==m)return v[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(I.equals(m)===!1)return I.copy(m),!0}}return!1}function S(m){let v=m.uniforms,y=0,I=16;for(let g=0,C=v.length;g<C;g++){let U=Array.isArray(v[g])?v[g]:[v[g]];for(let R=0,O=U.length;R<O;R++){let H=U[R],Z=Array.isArray(H.value)?H.value:[H.value],P=Array.isArray(v[g])||Array.isArray(H.value),X=y;for(let V=0,ce=Z.length;V<ce;V++){let W=Z[V],ne=M(W,P),re=y%I,Te=re%ne.boundary,ze=re+Te;y+=Te,ze!==0&&I-ze<ne.storage&&(y+=I-ze),V===0&&(X=y),y+=ne.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((y-X)/Float32Array.BYTES_PER_ELEMENT),H.__offset=X}}let T=y%I;return T>0&&(y+=I-T),m.__size=y,m.__cache={},this}function M(m,v){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",m),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function x(m){let v=m.target;v.removeEventListener("dispose",x),t.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function c(){for(let m in i)t.deleteBuffer(i[m]);i={},s={}}return{bind:r,update:o,dispose:c}}var r2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function o2(){return jn===null&&(jn=new Ad(r2,16,16,Es,Pn),jn.name="DFG_LUT",jn.minFilter=Ua,jn.magFilter=Ua,jn.wrapS=Xn,jn.wrapT=Xn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var Nh=class{constructor(e={}){let{canvas:a=eL(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:h=qa}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=r;let M=h,x=new Set([eh,$d,jd]),c=new Set([qa,Rn,Bo,cr,Jd,Qd]),m=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},I=null,T=null,g=[],C=[],U=null;this.domElement=a,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,O=!1,H=null,Z=null,P=null,X=null;this._outputColorSpace=Pa;let K=0,V=0,ce=null,W=-1,ne=null,re=new Nt,Te=new Nt,ze=null,k=new Xe(0),ie=0,ye=a.width,ge=a.height,xe=1,Ee=null,Dt=null,we=new Nt(0,0,ye,ge),it=new Nt(0,0,ye,ge),dt=!1,Ye=new Ls,kt=new Td,De=!1,ua=!1,pt=new At,Ca=new z,Je=new Nt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Aa=!1;function Ta(){return ce===null?xe:1}let N=n;function Ht(L,D){return a.getContext(L,D)}let St,yt,_e,Bt,Pe,Ce,A,_,B,se,$,Se,le,Y,J,fe,w,j,q,de,me,pe,be;try{let L={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${"187"}`),a.addEventListener("webglcontextlost",Re,!1),a.addEventListener("webglcontextrestored",Ne,!1),a.addEventListener("webglcontextcreationerror",ve,!1),N===null){let D="webgl2";if(N=Ht(D,L),N===null)throw Ht(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(L){throw a.removeEventListener("webglcontextlost",Re,!1),a.removeEventListener("webglcontextrestored",Ne,!1),a.removeEventListener("webglcontextcreationerror",ve,!1),Be("WebGLRenderer: "+L.message),L}function Ve(){St=new Sw(N),St.init(),me=new e2(N,St),yt=new ow(N,St,e,me),_e=new jR(N,St),yt.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),Z=N.createFramebuffer(),P=N.createFramebuffer(),X=N.createFramebuffer(),Bt=new _w(N),Pe=new FR,Ce=new $R(N,St,_e,Pe,yt,me,Bt),A=new xw(R),_=new L1(N),pe=new sw(N,_),B=new yw(N,_,Bt,pe),se=new Lw(N,B,_,pe,Bt),j=new Mw(N,yt,Ce),J=new lw(Pe),$=new BR(R,A,St,yt,pe,J),Se=new i2(R,Pe),le=new kR,Y=new XR(St),w=new iw(R,A,_e,se,S,l),fe=new QR(R,se,yt),be=new s2(N,Bt,yt,_e),q=new rw(N,St,Bt),de=new vw(N,St,Bt),Bt.programs=$.programs,R.capabilities=yt,R.extensions=St,R.properties=Pe,R.renderLists=le,R.shadowMap=fe,R.state=_e,R.info=Bt}M!==qa&&(U=new Cw(M,a.width,a.height,o,i,s));let ue=new Kx(R,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let L=St.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=St.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(L){L!==void 0&&(xe=L,this.setSize(ye,ge,!1))},this.getSize=function(L){return L.set(ye,ge)},this.setSize=function(L,D,G=!0){if(ue.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=L,ge=D,a.width=Math.floor(L*xe),a.height=Math.floor(D*xe),G===!0&&(a.style.width=L+"px",a.style.height=D+"px"),U!==null&&U.setSize(a.width,a.height),this.setViewport(0,0,L,D)},this.getDrawingBufferSize=function(L){return L.set(ye*xe,ge*xe).floor()},this.setDrawingBufferSize=function(L,D,G){ye=L,ge=D,xe=G,a.width=Math.floor(L*G),a.height=Math.floor(D*G),this.setViewport(0,0,L,D)},this.setEffects=function(L){if(M===qa){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let D=0;D<L.length;D++)if(L[D].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(re)},this.getViewport=function(L){return L.copy(we)},this.setViewport=function(L,D,G,b){L.isVector4?we.set(L.x,L.y,L.z,L.w):we.set(L,D,G,b),_e.viewport(re.copy(we).multiplyScalar(Ta()).round())},this.getScissor=function(L){return L.copy(it)},this.setScissor=function(L,D,G,b){L.isVector4?it.set(L.x,L.y,L.z,L.w):it.set(L,D,G,b),_e.scissor(Te.copy(it).multiplyScalar(Ta()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(L){_e.setScissorTest(dt=L)},this.setOpaqueSort=function(L){Ee=L},this.setTransparentSort=function(L){Dt=L},this.getClearColor=function(L){return L.copy(w.getClearColor())},this.setClearColor=function(){w.setClearColor(...arguments)},this.getClearAlpha=function(){return w.getClearAlpha()},this.setClearAlpha=function(){w.setClearAlpha(...arguments)},this.clear=function(L=!0,D=!0,G=!0){let b=0;if(L){let E=!1;if(ce!==null){let Q=ce.texture.format;E=x.has(Q)}if(E){let Q=ce.texture.type,ee=c.has(Q),te=w.getClearColor(),oe=w.getClearAlpha(),Me=te.r,he=te.g,Fe=te.b;ee?(m[0]=Me,m[1]=he,m[2]=Fe,m[3]=oe,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=Me,v[1]=he,v[2]=Fe,v[3]=oe,N.clearBufferiv(N.COLOR,0,v))}else b|=N.COLOR_BUFFER_BIT}D&&(b|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(b|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b!==0&&N.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),H=L},this.dispose=function(){a.removeEventListener("webglcontextlost",Re,!1),a.removeEventListener("webglcontextrestored",Ne,!1),a.removeEventListener("webglcontextcreationerror",ve,!1),w.dispose(),le.dispose(),Y.dispose(),Ce.dispose(),Pe.dispose(),A.dispose(),se.dispose(),B.dispose(),pe.dispose(),be.dispose(),$.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ds),ue.removeEventListener("sessionend",Vo),ei.stop()};function Re(L){L.preventDefault(),Tx("WebGLRenderer: Context Lost."),O=!0}function Ne(){Tx("WebGLRenderer: Context Restored."),O=!1;let L=Bt.autoReset,D=fe.enabled,G=fe.autoUpdate,b=fe.needsUpdate,E=fe.type;Ve(),Bt.autoReset=L,fe.enabled=D,fe.autoUpdate=G,fe.needsUpdate=b,fe.type=E}function ve(L){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ot(L){let D=L.target;D.removeEventListener("dispose",ot),Gt(D)}function Gt(L){On(L),Pe.remove(L)}function On(L){let D=Pe.get(L).programs;D!==void 0&&(D.forEach(function(G){$.releaseProgram(G)}),L.isShaderMaterial&&$.releaseShaderCache(L))}this.renderBufferDirect=function(L,D,G,b,E,Q){D===null&&(D=Qt);let ee=E.isMesh&&E.matrixWorld.determinantAffine()<0,te=lc(L,D,G,b,E);_e.setMaterial(b,ee);let oe=G.index,Me=1;if(b.wireframe===!0){if(oe=B.getWireframeAttribute(G),oe===void 0)return;Me=2}let he=G.drawRange,Fe=G.attributes.position,Ae=he.start*Me,ke=(he.start+he.count)*Me;Q!==null&&(Ae=Math.max(Ae,Q.start*Me),ke=Math.min(ke,(Q.start+Q.count)*Me)),oe!==null?(Ae=Math.max(Ae,0),ke=Math.min(ke,oe.count)):Fe!=null&&(Ae=Math.max(Ae,0),ke=Math.min(ke,Fe.count));let lt=ke-Ae;if(lt<0||lt===1/0)return;pe.setup(E,b,te,G,oe);let vt,_t=q;if(oe!==null&&(vt=_.get(oe),_t=de,_t.setIndex(vt)),E.isMesh)b.wireframe===!0?(_e.setLineWidth(b.wireframeLinewidth*Ta()),_t.setMode(N.LINES)):_t.setMode(N.TRIANGLES);else if(E.isLine){let Wt=b.linewidth;Wt===void 0&&(Wt=1),_e.setLineWidth(Wt*Ta()),E.isLineSegments?_t.setMode(N.LINES):E.isLineLoop?_t.setMode(N.LINE_LOOP):_t.setMode(N.LINE_STRIP)}else E.isPoints?_t.setMode(N.POINTS):E.isSprite&&_t.setMode(N.TRIANGLES);if(E.isBatchedMesh)if(St.get("WEBGL_multi_draw"))_t.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{let Wt=E._multiDrawStarts,Ie=E._multiDrawCounts,Ia=E._multiDrawCount,ut=oe?_.get(oe).bytesPerElement:1,Us=Pe.get(b).currentProgram.getUniforms();for(let Sa=0;Sa<Ia;Sa++)Us.setValue(N,"_gl_DrawID",Sa),_t.render(Wt[Sa]/ut,Ie[Sa])}else if(E.isInstancedMesh)_t.renderInstances(Ae,lt,E.count);else if(G.isInstancedBufferGeometry){let Wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ie=Math.min(G.instanceCount,Wt);_t.renderInstances(Ae,lt,Ie)}else _t.render(Ae,lt)};function _n(L,D,G,b){H!==null&&L.isNodeMaterial&&H.setObject(b,L),De===!0&&J.setState(L,G,!1),L.transparent===!0&&L.side===vn&&L.forceSinglePass===!1?(L.side=Na,L.needsUpdate=!0,ki(L,D,b),L.side=Is,L.needsUpdate=!0,ki(L,D,b),L.side=vn):ki(L,D,b)}this.compile=function(L,D,G=null){G===null&&(G=L),H!==null&&H.renderStart(L,D,G),T=Y.get(G),T.init(D),C.push(T),G.traverseVisible(function(E){E.isLight&&E.layers.test(D.layers)&&(T.pushLight(E),E.castShadow&&T.pushShadow(E))}),L!==G&&L.traverseVisible(function(E){E.isLight&&E.layers.test(D.layers)&&(T.pushLight(E),E.castShadow&&T.pushShadow(E))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),ua=this.localClippingEnabled,De=J.init(this.clippingPlanes,ua),De===!0&&J.setGlobalState(this.clippingPlanes,D),H!==null&&fe.render(T.state.shadowsArray,G,D);let b=new Set;return L.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;let Q=E.material;if(Q)if(Array.isArray(Q))for(let ee=0;ee<Q.length;ee++){let te=Q[ee];_n(te,G,D,E),b.add(te)}else _n(Q,G,D,E),b.add(Q)}),T=C.pop(),H!==null&&H.renderEnd(),b},this.compileAsync=function(L,D,G=null){let b=this.compile(L,D,G);return new Promise(E=>{function Q(){if(b.forEach(function(ee){let oe=Pe.get(ee).currentProgram;(oe===void 0||oe.isReady())&&b.delete(ee)}),b.size===0){E(L);return}setTimeout(Q,10)}St.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let xa=null;function kh(L){xa&&xa(L)}function Ds(){ei.stop()}function Vo(){ei.start()}let ei=new RL;ei.setAnimationLoop(kh),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(L){xa=L,ue.setAnimationLoop(L),L===null?ei.stop():ei.start()},ue.addEventListener("sessionstart",Ds),ue.addEventListener("sessionend",Vo),this.render=function(L,D){if(D!==void 0&&D.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;H!==null&&H.renderStart(L,D);let G=ue.enabled===!0&&ue.isPresenting===!0,b=U!==null&&(ce===null||G)&&U.begin(R,ce);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(D),D=ue.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,D,ce),T=Y.get(L,C.length),T.init(D),T.state.textureUnits=Ce.getTextureUnits(),C.push(T),pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?kt.setFromArrayCamera(D):Ye.setFromProjectionMatrix(pt,Sn,D.reversedDepth),ua=this.localClippingEnabled,De=J.init(this.clippingPlanes,ua),I=le.get(L,g.length),I.init(),g.push(I),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let ee=R.xr.getDepthSensingMesh();ee!==null&&qo(ee,D,-1/0,R.sortObjects)}qo(L,D,0,R.sortObjects),I.finish(),H!==null&&H.updateLights(T.state.lightsArray),R.sortObjects===!0&&I.sort(Ee,Dt),Aa=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Aa&&w.addToRenderList(I,L),this.info.autoReset===!0&&this.info.reset(),De===!0&&J.beginShadows();let E=T.state.shadowsArray;if(fe.render(E,L,D),De===!0&&J.endShadows(),(b&&U.hasRenderPass())===!1){let ee=I.opaque,te=I.transmissive;if(T.setupLights(),D.isArrayCamera){let oe=D.cameras;if(te.length>0)for(let Me=0,he=oe.length;Me<he;Me++){let Fe=oe[Me];zi(ee,te,L,Fe)}Aa&&w.render(L);for(let Me=0,he=oe.length;Me<he;Me++){let Fe=oe[Me];rc(I,L,Fe,Fe.viewport)}}else te.length>0&&zi(ee,te,L,D),Aa&&w.render(L),rc(I,L,D)}ce!==null&&V===0&&(Ce.updateMultisampleRenderTarget(ce),Ce.updateRenderTargetMipmap(ce)),b&&U.end(R),L.isScene===!0&&L.onAfterRender(R,L,D),pe.resetDefaultState(),W=-1,ne=null,C.pop(),C.length>0?(T=C[C.length-1],Ce.setTextureUnits(T.state.textureUnits),De===!0&&J.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?I=g[g.length-1]:I=null,H!==null&&H.renderEnd()};function qo(L,D,G,b){if(L.visible===!1)return;if(L.layers.test(D.layers)){if(L.isGroup)G=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(D);else if(L.isLight)T.pushLight(L),L.castShadow&&T.pushShadow(L);else if(L.isSprite){let ee=D.isArrayCamera?kt:Ye;if(!L.frustumCulled||L.intersectsFrustum(ee)){b&&Je.setFromMatrixPosition(L.matrixWorld).applyMatrix4(pt);let te=se.update(L),oe=L.material;oe.visible&&I.push(L,te,oe,G,Je.z,null,D)}}else if(L.isMesh||L.isLine||L.isPoints){let ee=D.isArrayCamera?kt:Ye;if(!L.frustumCulled||L.intersectsFrustum(ee)){let te=se.update(L),oe=L.material;if(b&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Je.copy(L.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Je.copy(te.boundingSphere.center)),Je.applyMatrix4(L.matrixWorld).applyMatrix4(pt)),Array.isArray(oe)){let Me=te.groups;for(let he=0,Fe=Me.length;he<Fe;he++){let Ae=Me[he],ke=oe[Ae.materialIndex];ke&&ke.visible&&I.push(L,te,ke,G,Je.z,Ae,D)}}else oe.visible&&I.push(L,te,oe,G,Je.z,null,D)}}}let Q=L.children;for(let ee=0,te=Q.length;ee<te;ee++)qo(Q[ee],D,G,b)}function rc(L,D,G,b){let{opaque:E,transmissive:Q,transparent:ee}=L;T.setupLightsView(G),De===!0&&J.setGlobalState(R.clippingPlanes,G),b&&_e.viewport(re.copy(b)),E.length>0&&Ps(E,D,G),Q.length>0&&Ps(Q,D,G),ee.length>0&&Ps(ee,D,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function zi(L,D,G,b){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[b.id]===void 0){let Ae=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[b.id]=new nn(1,1,{generateMipmaps:!0,type:Ae?Pn:qa,minFilter:Pi,samples:Math.max(4,yt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let Q=T.state.transmissionRenderTarget[b.id],ee=b.viewport||re;Q.setSize(ee.z*R.transmissionResolutionScale,ee.w*R.transmissionResolutionScale);let te=R.getRenderTarget(),oe=R.getActiveCubeFace(),Me=R.getActiveMipmapLevel();R.setRenderTarget(Q),R.getClearColor(k),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),Aa&&w.render(G);let he=R.toneMapping;R.toneMapping=Qn;let Fe=b.viewport;if(b.viewport!==void 0&&(b.viewport=void 0),T.setupLightsView(b),De===!0&&J.setGlobalState(R.clippingPlanes,b),Ps(L,G,b),Ce.updateMultisampleRenderTarget(Q),Ce.updateRenderTargetMipmap(Q),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ke=0,lt=D.length;ke<lt;ke++){let vt=D[ke],{object:_t,geometry:Wt,material:Ie,group:Ia}=vt;if(Ie.side===vn&&_t.layers.test(b.layers)){let ut=Ie.side;Ie.side=Na,Ie.needsUpdate=!0,Wo(_t,G,b,Wt,Ie,Ia),Ie.side=ut,Ie.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ce.updateMultisampleRenderTarget(Q),Ce.updateRenderTargetMipmap(Q))}R.setRenderTarget(te,oe,Me),R.setClearColor(k,ie),Fe!==void 0&&(b.viewport=Fe),R.toneMapping=he}function Ps(L,D,G){let b=D.isScene===!0?D.overrideMaterial:null;for(let E=0,Q=L.length;E<Q;E++){let ee=L[E],{object:te,geometry:oe,group:Me}=ee,he=ee.material;he.allowOverride===!0&&b!==null&&(he=b),te.layers.test(G.layers)&&Wo(te,D,G,oe,he,Me)}}function Wo(L,D,G,b,E,Q){H!==null&&E.isNodeMaterial&&H.setObject(L,E),L.onBeforeRender(R,D,G,b,E,Q),L.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),E.onBeforeRender(R,D,G,b,L,Q),E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=Na,E.needsUpdate=!0,R.renderBufferDirect(G,D,b,E,L,Q),E.side=Is,E.needsUpdate=!0,R.renderBufferDirect(G,D,b,E,L,Q),E.side=vn):R.renderBufferDirect(G,D,b,E,L,Q),L.onAfterRender(R,D,G,b,E,Q)}function Xo(L){let D=0;for(let G of L)G.texture!==null&&D++;return D}function ki(L,D,G){D.isScene!==!0&&(D=Qt);let b=Pe.get(L),E=T.state.lights,Q=T.state.shadowsArray,ee=E.state.version,te=$.getParameters(L,E.state,Q,D,G,T.state.lightProbeGridArray),oe=$.getProgramCacheKey(te),Me=b.programs;b.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?D.environment:null,b.fog=D.fog;let he=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;b.envMap=A.get(L.envMap||b.environment,he),b.envMapRotation=b.environment!==null&&L.envMap===null?D.environmentRotation:L.envMapRotation,Me===void 0&&(L.addEventListener("dispose",ot),Me=new Map,b.programs=Me,b.programVariants=new Map);let Fe=Me.get(oe);if(Fe!==void 0){if(b.currentProgram===Fe&&b.lightsStateVersion===ee)return Zo(L,te),Fe}else te.uniforms=$.getUniforms(L),H!==null&&L.isNodeMaterial&&H.build(L,G,te),L.onBeforeCompile(te,R),Fe=$.acquireProgram(te,oe),Me.set(oe,Fe),b.uniforms=te.uniforms;let Ae=b.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ae.clippingPlanes=J.uniform),Zo(L,te),b.needsLights=uc(L),b.lightsStateVersion=ee,b.needsLights&&(Ae.ambientLightColor.value=E.state.ambient,Ae.lightProbe.value=E.state.probe,Ae.sunLights.value=E.state.sun,Ae.sunLightShadows.value=E.state.sunShadow,Ae.directionalLights.value=E.state.directional,Ae.directionalLightShadows.value=E.state.directionalShadow,Ae.spotLights.value=E.state.spot,Ae.spotLightShadows.value=E.state.spotShadow,Ae.rectAreaLights.value=E.state.rectArea,Ae.ltc_1.value=E.state.rectAreaLTC1,Ae.ltc_2.value=E.state.rectAreaLTC2,Ae.pointLights.value=E.state.point,Ae.pointLightShadows.value=E.state.pointShadow,Ae.hemisphereLights.value=E.state.hemi,Ae.sunShadowMatrix.value=E.state.sunShadowMatrix,Ae.sunShadowCascade.value=E.state.sunShadowCascade,Ae.directionalShadowMatrix.value=E.state.directionalShadowMatrix,Ae.spotLightMatrix.value=E.state.spotLightMatrix,Ae.spotLightMap.value=E.state.spotLightMap,Ae.pointShadowMatrix.value=E.state.pointShadowMatrix),b.numLightProbeGrids=Xo(T.state.lightProbeGridArray),b.currentProgram=Fe,b.uniformsList=null,Fe}function oc(L,D,G,b,E){let Q=Pe.get(L),ee=Q.currentProgram.id+","+b+","+E,te=Q.programVariants.get(ee);return te===void 0?(te=ki(L,D,G),Q.programVariants.set(ee,te)):(Q.currentProgram=te,Q.uniformsList=null,Q.outputColorSpace=b,Q.toneMapping=E),te}function Yo(L){if(L.uniformsList===null){let D=L.currentProgram.getUniforms();L.uniformsList=zo.seqWithValue(D.seq,L.uniforms)}return L.uniformsList}function Zo(L,D){let G=Pe.get(L);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function lc(L,D,G,b,E){D.isScene!==!0&&(D=Qt),Ce.resetTextureUnits();let Q=D.fog,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,te=ce===null?R.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:et.workingColorSpace,oe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Me=A.get(b.envMap||ee,oe),he=b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),Ae=!!G.morphAttributes.position,ke=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color,vt=Qn;b.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(vt=R.toneMapping);let _t=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Wt=_t!==void 0?_t.length:0,Ie=Pe.get(b),Ia=T.state.lights;if(De===!0&&(ua===!0||L!==ne)){let Ot=L===ne&&b.id===W;J.setState(b,L,Ot)}let ut=!1,Us=!1;b.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==Ia.state.version||E.isBatchedMesh&&Ie.batching===!1||!E.isBatchedMesh&&Ie.batching===!0||E.isBatchedMesh&&Ie.batchingColor===!0&&E._colorsTexture===null||E.isBatchedMesh&&Ie.batchingColor===!1&&E._colorsTexture!==null||E.isInstancedMesh&&Ie.instancing===!1||!E.isInstancedMesh&&Ie.instancing===!0||E.isSkinnedMesh&&Ie.skinning===!1||!E.isSkinnedMesh&&Ie.skinning===!0||E.isInstancedMesh&&Ie.instancingColor===!0&&E.instanceColor===null||E.isInstancedMesh&&Ie.instancingColor===!1&&E.instanceColor!==null||E.isInstancedMesh&&Ie.instancingMorph===!0&&E.morphTexture===null||E.isInstancedMesh&&Ie.instancingMorph===!1&&E.morphTexture!==null||Ie.envMap!==Me||b.fog===!0&&Ie.fog!==Q||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==J.numPlanes||Ie.numIntersection!==J.numIntersection)||Ie.vertexAlphas!==he||Ie.vertexTangents!==Fe||Ie.morphTargets!==Ae||Ie.morphNormals!==ke||Ie.morphColors!==lt||Ie.morphTargetsCount!==Wt||Ie.numLightProbeGrids!==Xo(T.state.lightProbeGridArray)?ut=!0:(Ie.outputColorSpace!==te||Ie.toneMapping!==vt)&&(Us=!0):(ut=!0,Ie.__version=b.version);let Sa=Ie.currentProgram;(ut===!0||Us===!0)&&(Sa=Us===!0?oc(b,D,E,te,vt):ki(b,D,E),H&&b.isNodeMaterial&&H.onUpdateProgram(b,Sa,Ie));let fc=!1,Hi=!1,Ns=!1,rt=Sa.getUniforms(),ca=Ie.uniforms;if(_e.useProgram(Sa.program)&&(fc=!0,Hi=!0,Ns=!0),b.id!==W&&(W=b.id,Hi=!0),fc||ne!==L){_e.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),rt.setValue(N,"projectionMatrix",L.projectionMatrix),rt.setValue(N,"viewMatrix",L.matrixWorldInverse);let aa=rt.map.cameraPosition;aa!==void 0&&aa.setValue(N,Ca.setFromMatrixPosition(L.matrixWorld)),yt.logarithmicDepthBuffer&&rt.setValue(N,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)&&rt.setValue(N,"isOrthographic",L.isOrthographicCamera===!0),ne!==L&&(ne=L,Hi=!0,Ns=!0)}if(Ie.needsLights&&(Ia.state.sunShadowMap.length>0&&rt.setValue(N,"sunShadowMap",Ia.state.sunShadowMap,Ce),Ia.state.directionalShadowMap.length>0&&rt.setValue(N,"directionalShadowMap",Ia.state.directionalShadowMap,Ce),Ia.state.spotShadowMap.length>0&&rt.setValue(N,"spotShadowMap",Ia.state.spotShadowMap,Ce),Ia.state.pointShadowMap.length>0&&rt.setValue(N,"pointShadowMap",Ia.state.pointShadowMap,Ce)),E.isSkinnedMesh){rt.setOptional(N,E,"bindMatrix"),rt.setOptional(N,E,"bindMatrixInverse");let Ot=E.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),rt.setValue(N,"boneTexture",Ot.boneTexture,Ce))}E.isBatchedMesh&&(rt.setOptional(N,E,"batchingTexture"),rt.setValue(N,"batchingTexture",E._matricesTexture,Ce),rt.setOptional(N,E,"batchingIdTexture"),rt.setValue(N,"batchingIdTexture",E._indirectTexture,Ce),rt.setOptional(N,E,"batchingColorTexture"),E._colorsTexture!==null&&rt.setValue(N,"batchingColorTexture",E._colorsTexture,Ce));let Mn=G.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&j.update(E,G,Sa),(Hi||Ie.receiveShadow!==E.receiveShadow)&&(Ie.receiveShadow=E.receiveShadow,rt.setValue(N,"receiveShadow",E.receiveShadow)),(b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial)&&b.envMap===null&&D.environment!==null&&(ca.envMapIntensity.value=D.environmentIntensity),ca.dfgLUT!==void 0&&(ca.dfgLUT.value=o2()),Hi){if(rt.setValue(N,"toneMappingExposure",R.toneMappingExposure),Ie.needsLights&&Ko(ca,Ns),Q&&b.fog===!0&&Se.refreshFogUniforms(ca,Q),Se.refreshMaterialUniforms(ca,b,xe,ge,T.state.transmissionRenderTarget[L.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let Ot=y,aa=0;for(let ti of T.state.lightProbeGridArray)ti.texture!==null&&(Ot.textures[aa]=ti.texture,Ot.min[aa]=ti.boundingBox.min,Ot.max[aa]=ti.boundingBox.max,Ot.resolution[aa]=ti.resolution,aa++);for(let ti in Ot)Ot[ti].length=aa;ca.probesSH.value=Ot.textures,ca.probesMin.value=Ot.min,ca.probesMax.value=Ot.max,ca.probesResolution.value=Ot.resolution}zo.upload(N,Yo(Ie),ca,Ce)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0&&(zo.upload(N,Yo(Ie),ca,Ce),b.uniformsNeedUpdate=!1),b.isSpriteMaterial&&rt.setValue(N,"center",E.center),rt.setValue(N,"modelViewMatrix",E.modelViewMatrix),rt.setValue(N,"normalMatrix",E.normalMatrix),rt.setValue(N,"modelMatrix",E.matrixWorld),b.uniformsGroups!==void 0){let Ot=b.uniformsGroups;for(let aa=0,ti=Ot.length;aa<ti;aa++){let a0=Ot[aa];be.update(a0,Sa),be.bind(a0,Sa)}}return Sa}function Ko(L,D){L.ambientLightColor.needsUpdate=D,L.lightProbe.needsUpdate=D,L.sunLights.needsUpdate=D,L.sunLightShadows.needsUpdate=D,L.directionalLights.needsUpdate=D,L.directionalLightShadows.needsUpdate=D,L.pointLights.needsUpdate=D,L.pointLightShadows.needsUpdate=D,L.spotLights.needsUpdate=D,L.spotLightShadows.needsUpdate=D,L.rectAreaLights.needsUpdate=D,L.hemisphereLights.needsUpdate=D}function uc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(L,D,G){let b=Pe.get(L);b.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1&&(b.__useRenderToTexture=!1),Pe.get(L.texture).__webglTexture=D,Pe.get(L.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:G,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,D){let G=Pe.get(L);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(L,D=0,G=0){ce=L,K=D,V=G;let b=null,E=!1,Q=!1;if(L){let te=Pe.get(L);if(te.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(N.FRAMEBUFFER,te.__webglFramebuffer),re.copy(L.viewport),Te.copy(L.scissor),ze=L.scissorTest,_e.viewport(re),_e.scissor(Te),_e.setScissorTest(ze),W=-1;return}else if(te.__webglFramebuffer===void 0)Ce.setupRenderTarget(L);else if(te.__hasExternalTextures)Ce.rebindTextures(L,Pe.get(L.texture).__webglTexture,Pe.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let he=L.depthTexture;if(te.__boundDepthTexture!==he){if(he!==null&&Pe.has(he)&&(L.width!==he.image.width||L.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(L)}}let oe=L.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Q=!0);let Me=Pe.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Me[D])?b=Me[D][G]:b=Me[D],E=!0):L.samples>0&&Ce.useMultisampledRTT(L)===!1?b=Pe.get(L).__webglMultisampledFramebuffer:Array.isArray(Me)?b=Me[G]:b=Me,re.copy(L.viewport),Te.copy(L.scissor),ze=L.scissorTest}else re.copy(we).multiplyScalar(xe).floor(),Te.copy(it).multiplyScalar(xe).floor(),ze=dt;if(G!==0&&(b=Z),_e.bindFramebuffer(N.FRAMEBUFFER,b)&&_e.drawBuffers(L,b),_e.viewport(re),_e.scissor(Te),_e.setScissorTest(ze),E){let te=Pe.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,te.__webglTexture,G)}else if(Q){let te=D;for(let oe=0;oe<L.textures.length;oe++){let Me=Pe.get(L.textures[oe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+oe,Me.__webglTexture,G,te)}}else if(L!==null&&G!==0){let te=Pe.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,te.__webglTexture,G)}W=-1};function cc(L){let D=Pe.get(L);return(D.__readFormat!==L.format||D.__readType!==L.type)&&(D.__readFormat=L.format,D.__readType=L.type,D.__formatReadable=yt.textureFormatReadable(L.format),D.__typeReadable=yt.textureTypeReadable(L.type)),D}this.readRenderTargetPixels=function(L,D,G,b,E,Q,ee,te=0){if(!(L&&L.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=Pe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ee!==void 0&&(oe=oe[ee],Array.isArray(oe)&&(oe=oe[0])),oe){_e.bindFramebuffer(N.FRAMEBUFFER,oe);try{let Me=L.textures[te],he=Me.format,Fe=Me.type;L.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+te);let Ae=cc(Me);if(Ae.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=L.width-b&&G>=0&&G<=L.height-E&&N.readPixels(D,G,b,E,me.convert(he),me.convert(Fe),Q)}finally{let Me=ce!==null?Pe.get(ce).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(L,D,G,b,E,Q,ee,te=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=Pe.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&ee!==void 0&&(oe=oe[ee],Array.isArray(oe)&&(oe=oe[0])),oe)if(D>=0&&D<=L.width-b&&G>=0&&G<=L.height-E){_e.bindFramebuffer(N.FRAMEBUFFER,oe);let Me=L.textures[te],he=Me.format,Fe=Me.type;L.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+te);let Ae=cc(Me);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,G,b,E,me.convert(he),me.convert(Fe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let lt=ce!==null?Pe.get(ce).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,lt);let vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await aL(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ke),N.deleteSync(vt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,D=null,G=0){let b=Math.pow(2,-G),E=Math.floor(L.image.width*b),Q=Math.floor(L.image.height*b),ee=D!==null?D.x:0,te=D!==null?D.y:0;Ce.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ee,te,E,Q),_e.unbindTexture()},this.copyTextureToTexture=function(L,D,G=null,b=null,E=0,Q=0){let ee,te,oe,Me,he,Fe,Ae,ke,lt,vt=L.isCompressedTexture?L.mipmaps[Q]:L.image;if(G!==null)ee=G.max.x-G.min.x,te=G.max.y-G.min.y,oe=G.isBox3?G.max.z-G.min.z:1,Me=G.min.x,he=G.min.y,Fe=G.isBox3?G.min.z:0;else{let rt=Math.pow(2,-E);ee=Math.floor(vt.width*rt),te=Math.floor(vt.height*rt),L.isDataArrayTexture?oe=vt.depth:L.isData3DTexture?oe=Math.floor(vt.depth*rt):oe=1,Me=0,he=0,Fe=0}b!==null?(Ae=b.x,ke=b.y,lt=b.z):(Ae=0,ke=0,lt=0);let _t=me.convert(D.format),Wt=me.convert(D.type),Ie;D.isData3DTexture?(Ce.setTexture3D(D,0),Ie=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ce.setTexture2DArray(D,0),Ie=N.TEXTURE_2D_ARRAY):(Ce.setTexture2D(D,0),Ie=N.TEXTURE_2D),_e.activeTexture(N.TEXTURE0),_e.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),_e.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_e.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Ia=_e.getParameter(N.UNPACK_ROW_LENGTH),ut=_e.getParameter(N.UNPACK_IMAGE_HEIGHT),Us=_e.getParameter(N.UNPACK_SKIP_PIXELS),Sa=_e.getParameter(N.UNPACK_SKIP_ROWS),fc=_e.getParameter(N.UNPACK_SKIP_IMAGES);_e.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),_e.pixelStorei(N.UNPACK_SKIP_ROWS,he),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe);let Hi=L.isDataArrayTexture||L.isData3DTexture,Ns=D.isDataArrayTexture||D.isData3DTexture;if(L.isDepthTexture){let rt=Pe.get(L),ca=Pe.get(D),Mn=Pe.get(rt.__renderTarget),Ot=Pe.get(ca.__renderTarget);_e.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let aa=0;aa<oe;aa++)Hi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(L).__webglTexture,E,Fe+aa),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(D).__webglTexture,Q,lt+aa)),N.blitFramebuffer(Me,he,Me+ee,he+te,Ae,ke,Ae+ee,ke+te,N.DEPTH_BUFFER_BIT,N.NEAREST);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(E!==0||L.isRenderTargetTexture||Pe.has(L)){let rt=Pe.get(L),ca=Pe.get(D);_e.bindFramebuffer(N.READ_FRAMEBUFFER,P),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,X);for(let Mn=0;Mn<oe;Mn++)Hi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rt.__webglTexture,E,Fe+Mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rt.__webglTexture,E),Ns?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ca.__webglTexture,Q,lt+Mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ca.__webglTexture,Q),E!==0?N.blitFramebuffer(Me,he,Me+ee,he+te,Ae,ke,Ae+ee,ke+te,N.COLOR_BUFFER_BIT,N.NEAREST):Ns?N.copyTexSubImage3D(Ie,Q,Ae,ke,lt+Mn,Me,he,ee,te):N.copyTexSubImage2D(Ie,Q,Ae,ke,Me,he,ee,te);_e.bindFramebuffer(N.READ_FRAMEBUFFER,null),_e.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ns?L.isDataTexture||L.isData3DTexture?N.texSubImage3D(Ie,Q,Ae,ke,lt,ee,te,oe,_t,Wt,vt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Ie,Q,Ae,ke,lt,ee,te,oe,_t,vt.data):N.texSubImage3D(Ie,Q,Ae,ke,lt,ee,te,oe,_t,Wt,vt):L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Q,Ae,ke,ee,te,_t,Wt,vt.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Q,Ae,ke,vt.width,vt.height,_t,vt.data):N.texSubImage2D(N.TEXTURE_2D,Q,Ae,ke,ee,te,_t,Wt,vt);_e.pixelStorei(N.UNPACK_ROW_LENGTH,Ia),_e.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut),_e.pixelStorei(N.UNPACK_SKIP_PIXELS,Us),_e.pixelStorei(N.UNPACK_SKIP_ROWS,Sa),_e.pixelStorei(N.UNPACK_SKIP_IMAGES,fc),Q===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&N.generateMipmap(Ie),_e.unbindTexture()},this.initRenderTarget=function(L){Pe.get(L).__webglFramebuffer===void 0&&Ce.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Ce.setTextureCube(L,0):L.isData3DTexture?Ce.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ce.setTexture2DArray(L,0):Ce.setTexture2D(L,0),_e.unbindTexture()},this.resetState=function(){K=0,V=0,ce=null,_e.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),a.unpackColorSpace=et._getUnpackColorSpace()}};var Fh=Ea(ni(),1);var GL=t=>t?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();function VL(t,e,a=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:GL(t),size:24,node:e,...a.length>0?{aliases:a}:{}}}var qL=t=>{let e="",a=!1;for(let n of t){if(n==="-"||n==="_"||n<=" "){a=e.length>0;continue}e.length===0?e+=n.toLowerCase():e+=a?n.toUpperCase():n,a=!1}return e};var WL=t=>{let e=qL(t);return e.charAt(0).toUpperCase()+e.slice(1)};var qu=Ea(ni(),1);var Vu=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim();var ws={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Jx(t){return t!=null}function XL(t,e={}){let a=e.attributeNames??{},n=f=>a[f]??f,i=t.size??t.width??ws.width,s=t.size??t.height??ws.height,r=t.aliases?.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`)??[],o=[...t.name?[`lucide-${t.name}`]:[],...r],l=e.className?.split(" ").filter(Boolean)??[],u=e.includeDefaultClasses===!1?Vu(...l):Vu("lucide",...o,...l),d=e.absoluteStrokeWidth?Number(e.strokeWidth??ws["stroke-width"])*Number(t.size??t.width??ws.width)/Number(e.size??e.width??ws.width):e.strokeWidth??ws["stroke-width"];return["svg",{...Object.entries(ws).reduce((f,[h,S])=>(f[n(h)]=S,f),{}),..."color"in e&&e.color&&{[n("stroke")]:e.color},..."size"in e&&Jx(e.size)&&{[n("width")]:e.size,[n("height")]:e.size},..."width"in e&&Jx(e.width)&&{[n("width")]:e.width},..."height"in e&&Jx(e.height)&&{[n("height")]:e.height},[n("stroke-width")]:d,...u&&{[n("class")]:u},[n("viewBox")]:`0 0 ${i} ${s}`,...e.hasA11yProp===!1?{[n("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(f=>{let[h,S,M]=f,x=e.nonScalingStroke?{[n("vector-effect")]:"non-scaling-stroke",...S}:S;return M?[h,x,M]:[h,x]})]}function YL(t,e={}){return XL(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}var ZL=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var Ho=Ea(ni(),1);var u2=(0,Ho.createContext)({});var KL=()=>(0,Ho.useContext)(u2);var JL=(0,qu.forwardRef)(({color:t,size:e,width:a,height:n,strokeWidth:i,absoluteStrokeWidth:s,nonScalingStroke:r,className:o="",children:l,iconNode:u=[],icon:d={node:u,aliases:[],size:24},...p},f)=>{let{size:h=24,strokeWidth:S=2,absoluteStrokeWidth:M=!1,nonScalingStroke:x=!1,color:c="currentColor",className:m=""}=KL()??{},v=!!l||ZL(p),[y,I,T=[]]=YL(d,{color:t??c,width:a??e??h,height:n??e??h,strokeWidth:i??S,absoluteStrokeWidth:s??M,nonScalingStroke:r??x,className:Vu(m,o),hasA11yProp:v,attributes:p});return(0,qu.createElement)(y,{ref:f,...I},[...T.map(([g,C])=>(0,qu.createElement)(g,C)),...Array.isArray(l)?l:[l]])});function at(t,e=[],a=[]){let n=typeof t=="string"?VL(t,e,a):t,i=(0,Fh.forwardRef)(({className:s,...r},o)=>(0,Fh.createElement)(JL,{ref:o,icon:n,className:s,...r}));return n.name&&(i.displayName=WL(n.name)),i}var QL={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};QL.node;var Wu=at(QL);var jL={name:"cloud",size:24,node:[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]};jL.node;var Xu=at(jL);var $L={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};$L.node;var Go=at($L);var eb={name:"expand",size:24,node:[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]]};eb.node;var Yu=at(eb);var tb={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};tb.node;var Zu=at(tb);var ab={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};ab.node;var Ku=at(ab);var nb={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};nb.node;var Ju=at(nb);var ib={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};ib.node;var Qu=at(ib);var sb={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};sb.node;var ju=at(sb);var rb={name:"mouse-pointer-2",size:24,node:[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]};rb.node;var $u=at(rb);var ob={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};ob.node;var ec=at(ob);var lb={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};lb.node;var tc=at(lb);var ub={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};ub.node;var hr=at(ub);var cb={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};cb.node;var Oi=at(cb);var fb={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};fb.node;var ac=at(fb);var db={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};db.node;var nc=at(db);var hb={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};hb.node;var pr=at(hb);var pb={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};pb.node;var ic=at(pb);var Nn=Ea(ni());var Qx="aimforge-scores-v1";function sc(){try{let t=JSON.parse(localStorage.getItem(Qx)||"[]");return Array.isArray(t)?t.filter(c2).slice(0,50):[]}catch{return[]}}function c2(t){if(!t||typeof t!="object")return!1;let e=t;return typeof e.name=="string"&&e.name.length>=1&&e.name.length<=16&&["easy","normal","hard"].includes(String(e.difficulty))&&typeof e.date=="string"&&!Number.isNaN(Date.parse(e.date))&&Number.isInteger(e.kills)&&Number(e.kills)>=0&&Number(e.kills)<=1e4&&Number.isInteger(e.shots)&&Number(e.shots)>=0&&Number(e.shots)<=1e5&&Number.isInteger(e.hits)&&Number(e.hits)>=0&&Number(e.hits)<=Number(e.shots)&&Number(e.kills)*3<=Number(e.hits)&&typeof e.time=="number"&&Number.isFinite(e.time)&&e.time>=0&&e.time<=86400&&Number(e.shots)<=(e.time+1)*8}function mb(t){return[...t].sort((e,a)=>a.kills-e.kills||a.hits/Math.max(1,a.shots)-e.hits/Math.max(1,e.shots)||e.time-a.time)}function gb(t){let e=new URL(t.trim());if(e.protocol==="https:"&&(e.protocol="wss:"),e.protocol==="http:"&&(e.protocol="ws:"),!["ws:","wss:"].includes(e.protocol)||e.username||e.password||e.search||e.hash||e.pathname!=="/"&&e.pathname!=="/multiplayer")throw new Error("\u0110\u1ECBa ch\u1EC9 m\xE1y ch\u1EE7 kh\xF4ng h\u1EE3p l\u1EC7.");if(typeof window<"u"&&window.location.protocol==="https:"&&e.protocol!=="wss:")throw new Error("Trang HTTPS c\u1EA7n m\xE1y ch\u1EE7 c\xF3 WSS (TLS).");return e.pathname="/multiplayer",e.toString()}function xb(t){let e=new URL(t);return e.protocol=e.protocol==="wss:"?"https:":"http:",e.pathname="/api/online-scores",e.toString()}function Bi(t,e){t?.socket.readyState===WebSocket.OPEN&&t.socket.send(JSON.stringify(e))}var Ge=Ea(Fi()),_b=!0,h2={easy:"D\u1EC4",normal:"TH\u01AF\u1EDCNG",hard:"KH\xD3"};function Mb(t,e){return e==="top"?mb(t):[...t].sort((a,n)=>Date.parse(n.date)-Date.parse(a.date))}function jx({latest:t,onlineConfig:e,onClose:a}){let[n,i]=(0,Nn.useState)(()=>Mb(sc(),"top")),[s,r]=(0,Nn.useState)("local"),[o,l]=(0,Nn.useState)("top"),[u,d]=(0,Nn.useState)("\u0110\u1EB6C V\u1EE4"),[p,f]=(0,Nn.useState)(!1),[h,S]=(0,Nn.useState)(""),[M,x]=(0,Nn.useState)(!1),[c,m]=(0,Nn.useState)(!1),v=(0,Nn.useRef)(0);async function y(T,g,C=p){let U=++v.current;if(r(T),l(g),S(""),T==="local"){x(!1),i(Mb(sc(),g));return}x(!0),i([]);try{let R=T==="online"&&e?new URL(xb(e.url)):new URL("/api/scores",window.location.origin);R.searchParams.set("sort",g),T==="online"&&C&&e&&R.searchParams.set("name",e.name);let O=await fetch(R,{cache:"no-store"});if(!O.ok)throw new Error;let H=await O.json();if(!Array.isArray(H))throw new Error;U===v.current&&i(H)}catch{U===v.current&&S("Kh\xF4ng k\u1EBFt n\u1ED1i \u0111\u01B0\u1EE3c m\xE1y ch\u1EE7. L\u1ECBch s\u1EED tr\xEAn thi\u1EBFt b\u1ECB v\u1EABn \u0111\u01B0\u1EE3c gi\u1EEF l\u1EA1i.")}finally{U===v.current&&x(!1)}}async function I(){if(!t||!u.trim()){S("H\xE3y nh\u1EADp t\xEAn c\u1EE7a b\u1EA1n.");return}x(!0),S("");try{if(!(await fetch("/api/scores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,name:u.trim()})})).ok)throw new Error;m(!0),await y("server",o),S("\u0110\xE3 g\u1EEDi \u0111i\u1EC3m l\xEAn m\xE1y ch\u1EE7.")}catch{S("Kh\xF4ng th\u1EC3 g\u1EEDi \u0111i\u1EC3m. H\xE3y th\u1EED l\u1EA1i khi c\xF3 k\u1EBFt n\u1ED1i.")}finally{x(!1)}}return(0,Ge.jsx)("div",{className:"scores-backdrop",onClick:a,children:(0,Ge.jsxs)("section",{className:"scores-panel",role:"dialog","aria-modal":"true","aria-label":"B\u1EA3ng th\xE0nh t\xEDch",onClick:T=>T.stopPropagation(),children:[(0,Ge.jsxs)("div",{className:"scores-heading",children:[(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("span",{className:"panel-eyebrow",children:"H\u1ED2 S\u01A0 CHI\u1EBEN \u0110\u1EA4U / 01"}),(0,Ge.jsxs)("h2",{children:[(0,Ge.jsx)(hr,{size:22})," B\u1EA2NG TH\xC0NH T\xCDCH"]})]}),(0,Ge.jsx)("button",{className:"close-panel",onClick:a,"aria-label":"\u0110\xF3ng",children:(0,Ge.jsx)(pr,{size:20})})]}),(0,Ge.jsx)("p",{children:"Th\xE0nh t\xEDch offline l\u01B0u tr\xEAn thi\u1EBFt b\u1ECB. L\u01B0\u1EE3t co-op \u0111\u01B0\u1EE3c m\xE1y ch\u1EE7 l\u01B0u khi k\u1EBFt th\xFAc ho\u1EB7c r\u1EDDi ph\xF2ng."}),(0,Ge.jsxs)("div",{className:"score-tabs",children:[(0,Ge.jsxs)("button",{className:s==="local"?"active":"",onClick:()=>{y("local",o)},children:[(0,Ge.jsx)(Ku,{size:15})," THI\u1EBET B\u1ECA"]}),!_b&&(0,Ge.jsxs)("button",{className:s==="server"?"active":"",onClick:()=>{y("server",o)},children:[(0,Ge.jsx)(Xu,{size:15})," M\xC1Y CH\u1EE6"]}),e&&(0,Ge.jsxs)("button",{className:s==="online"?"active":"",onClick:()=>{y("online",o)},children:[(0,Ge.jsx)(Oi,{size:15})," CO-OP"]})]}),(0,Ge.jsxs)("div",{className:"score-filters",children:[(0,Ge.jsx)("button",{className:o==="top"?"active":"",onClick:()=>{y(s,"top")},children:"X\u1EBEP H\u1EA0NG"}),(0,Ge.jsx)("button",{className:o==="recent"?"active":"",onClick:()=>{y(s,"recent")},children:"L\u1ECACH S\u1EEC G\u1EA6N \u0110\xC2Y"}),s==="online"&&(0,Ge.jsxs)("label",{children:[(0,Ge.jsx)("input",{type:"checkbox",checked:p,onChange:T=>{f(T.target.checked),y(s,o,T.target.checked)}})," CH\u1EC8 T\xCAN C\u1EE6A T\xD4I"]})]}),(0,Ge.jsxs)("div",{className:"score-table",children:[(0,Ge.jsxs)("div",{className:"score-row score-header",children:[(0,Ge.jsx)("span",{children:"#"}),(0,Ge.jsx)("span",{children:"\u0110\u1EB6C V\u1EE4"}),(0,Ge.jsx)("span",{children:s==="online"?"PH\xD2NG":"\u0110\u1ED8 KH\xD3"}),(0,Ge.jsx)("span",{children:"CH\xCDNH X\xC1C"}),(0,Ge.jsx)("span",{children:"H\u1EA0 G\u1EE4C"})]}),n.length===0?(0,Ge.jsx)("div",{className:"score-empty",children:M?"\u0110ANG T\u1EA2I...":"CH\u01AFA C\xD3 TH\xC0NH T\xCDCH N\xC0O"}):n.slice(0,20).map((T,g)=>(0,Ge.jsxs)("div",{className:"score-row",title:new Date(T.date).toLocaleString("vi-VN"),children:[(0,Ge.jsx)("span",{children:String(g+1).padStart(2,"0")}),(0,Ge.jsxs)("span",{children:[T.name,o==="recent"&&(0,Ge.jsxs)("small",{className:"score-date",children:[new Date(T.date).toLocaleString("vi-VN")," \xB7 ",Math.floor(T.time/60),":",String(Math.floor(T.time%60)).padStart(2,"0")]})]}),(0,Ge.jsx)("span",{children:"room"in T?T.room:h2[T.difficulty]}),(0,Ge.jsxs)("span",{children:[T.shots?Math.round(T.hits/T.shots*100):0,"%"]}),(0,Ge.jsx)("strong",{children:T.kills})]},`${T.date}-${g}`))]}),!_b&&t&&(0,Ge.jsxs)("div",{className:"score-submit",children:[(0,Ge.jsx)("label",{htmlFor:"agent-name",children:"G\u1EECI L\u01AF\u1EE2T V\u1EEAA CH\u01A0I L\xCAN M\xC1Y CH\u1EE6 NEXT.JS"}),(0,Ge.jsxs)("div",{children:[(0,Ge.jsx)("input",{id:"agent-name",maxLength:16,value:u,onChange:T=>d(T.target.value),placeholder:"T\xEAn \u0111\u1EB7c v\u1EE5"}),(0,Ge.jsx)("button",{disabled:M||c,onClick:()=>{I()},children:c?"\u0110\xC3 G\u1EECI":"G\u1EECI \u0110I\u1EC2M \u2197"})]}),(0,Ge.jsx)("small",{children:"\u0110i\u1EC3m g\u1EEDi th\u1EE7 c\xF4ng kh\xF4ng \u0111\u01B0\u1EE3c x\xE1c minh ch\u1ED1ng gian l\u1EADn."})]}),h&&(0,Ge.jsx)("div",{className:"score-message",children:h})]})})}var Rs=Ea(ni());var st=Ea(Fi()),Lb=!0,p2="";function m2(t){let e=new URLSearchParams(window.location.search);return{url:t?.url||e.get("server")||p2||(Lb?"":window.location.origin),room:t?.room||e.get("room")||"ARENA",name:t?.name||"\u0110\u1EB6C V\u1EE4"}}function $x({connected:t,config:e,onConnect:a,onDisconnect:n,onClose:i}){let[s]=(0,Rs.useState)(()=>m2(e)),[r,o]=(0,Rs.useState)(s.url),[l,u]=(0,Rs.useState)(s.name),[d,p]=(0,Rs.useState)(s.room),[f,h]=(0,Rs.useState)(!1),[S,M]=(0,Rs.useState)(""),[x,c]=(0,Rs.useState)(!1);async function m(){try{if(!r.trim())throw new Error("H\xE3y nh\u1EADp \u0111\u1ECBa ch\u1EC9 m\xE1y ch\u1EE7 online. GitHub Pages kh\xF4ng t\u1EF1 ch\u1EA1y m\xE1y ch\u1EE7.");let y;try{y=gb(r)}catch(g){throw g instanceof Error&&g.message.includes("WSS")?g:new Error("\u0110\u1ECBa ch\u1EC9 kh\xF4ng h\u1EE3p l\u1EC7. Nh\u1EADp \u0111\u1ECBa ch\u1EC9 \u0111\u1EA7y \u0111\u1EE7 b\u1EAFt \u0111\u1EA7u b\u1EB1ng https:// ho\u1EB7c wss://.")}let I=d.trim().toUpperCase(),T=l.trim();if(!T||!/^[A-Z0-9_-]{1,16}$/.test(I))throw new Error("Nh\u1EADp t\xEAn v\xE0 m\xE3 ph\xF2ng (A\u2013Z, 0\u20139, _ ho\u1EB7c -, t\u1ED1i \u0111a 16 k\xFD t\u1EF1).");M(""),h(!0),await a({url:y,name:T,room:I}),i()}catch(y){M(y instanceof Error?y.message:"Kh\xF4ng th\u1EC3 k\u1EBFt n\u1ED1i m\xE1y ch\u1EE7.")}finally{h(!1)}}function v(){let y=new URL(window.location.href);return y.search="",y.hash="",e&&(y.searchParams.set("server",e.url),y.searchParams.set("room",e.room)),y.toString()}return(0,st.jsx)("div",{className:"scores-backdrop",onClick:i,children:(0,st.jsxs)("section",{className:"scores-panel online-panel",role:"dialog","aria-modal":"true","aria-label":"Ph\xF2ng tr\u1EF1c tuy\u1EBFn",onClick:y=>y.stopPropagation(),children:[(0,st.jsxs)("div",{className:"scores-heading",children:[(0,st.jsxs)("div",{children:[(0,st.jsx)("span",{className:"panel-eyebrow",children:"CO-OP / T\u1ED0I \u0110A 8 NG\u01AF\u1EDCI"}),(0,st.jsxs)("h2",{children:[(0,st.jsx)(Oi,{size:22})," PH\xD2NG TR\u1EF0C TUY\u1EBEN"]})]}),(0,st.jsx)("button",{className:"close-panel",onClick:i,"aria-label":"\u0110\xF3ng",children:(0,st.jsx)(pr,{size:20})})]}),(0,st.jsx)("p",{children:"C\xF9ng ng\u01B0\u1EDDi ch\u01A1i trong ph\xF2ng ti\xEAu di\u1EC7t bot chung. Kh\xF4ng c\u1EA7n t\xE0i kho\u1EA3n. B\u1EA1n b\xE8 c\u1EA7n c\xF9ng m\xE1y ch\u1EE7 v\xE0 m\xE3 ph\xF2ng."}),t?(0,st.jsxs)(st.Fragment,{children:[(0,st.jsxs)("div",{className:"online-connected",children:[(0,st.jsx)("span",{className:"status-dot"})," \u0110\xC3 K\u1EBET N\u1ED0I M\xC1Y CH\u1EE6 \xB7 PH\xD2NG ",e?.room]}),(0,st.jsx)("p",{children:"Nh\u1EA5n \u0111\xF3ng r\u1ED3i b\u1EAFt \u0111\u1EA7u \u0111\u1EC3 v\xE0o tr\u1EADn. Tr\u1EADn tr\u1EF1c tuy\u1EBFn v\u1EABn di\u1EC5n ra khi nh\u1EA5n Esc."}),(0,st.jsxs)("label",{children:["LINK M\u1EDCI B\u1EA0N B\xC8",(0,st.jsx)("input",{readOnly:!0,value:v(),onFocus:y=>y.currentTarget.select()})]}),(0,st.jsx)("button",{className:"online-action",onClick:()=>{if(!navigator.clipboard){M("Kh\xF4ng th\u1EC3 sao ch\xE9p t\u1EF1 \u0111\u1ED9ng. H\xE3y ch\u1ECDn v\xE0 sao ch\xE9p link b\xEAn tr\xEAn.");return}navigator.clipboard.writeText(v()).then(()=>c(!0)).catch(()=>M("Kh\xF4ng th\u1EC3 sao ch\xE9p t\u1EF1 \u0111\u1ED9ng. H\xE3y ch\u1ECDn v\xE0 sao ch\xE9p link b\xEAn tr\xEAn."))},children:x?"\u0110\xC3 SAO CH\xC9P":"SAO CH\xC9P LINK M\u1EDCI"}),S&&(0,st.jsx)("div",{className:"score-message error",children:S}),(0,st.jsx)("button",{className:"online-action secondary",onClick:()=>{n(),i()},children:"NG\u1EAET K\u1EBET N\u1ED0I / CH\u01A0I OFFLINE"})]}):(0,st.jsxs)(st.Fragment,{children:[(0,st.jsxs)("label",{children:["\u0110\u1ECAA CH\u1EC8 M\xC1Y CH\u1EE6",(0,st.jsx)("input",{value:r,onChange:y=>o(y.target.value),placeholder:"wss://ten-may-chu-cua-ban",autoComplete:"url"})]}),(0,st.jsxs)("label",{children:["T\xCAN \u0110\u1EB6C V\u1EE4",(0,st.jsx)("input",{value:l,onChange:y=>u(y.target.value),maxLength:16})]}),(0,st.jsxs)("label",{children:["M\xC3 PH\xD2NG",(0,st.jsx)("input",{value:d,onChange:y=>p(y.target.value.toUpperCase()),maxLength:16})]}),(0,st.jsx)("p",{className:"online-hint",children:Lb?"GitHub Pages ch\u1EC9 ch\u1EE9a game t\u0129nh: c\u1EA7n m\xE1y ch\u1EE7 online ri\xEAng c\xF3 WSS/TLS. \u0110i\u1EC1n \u0111\u1ECBa ch\u1EC9 m\xE1y ch\u1EE7 \u0111\xF3 \u1EDF tr\xEAn.":"M\u1EB7c \u0111\u1ECBnh d\xF9ng m\xE1y ch\u1EE7 c\u1EE7a trang n\xE0y. B\u1EA1n c\u0169ng c\xF3 th\u1EC3 nh\u1EADp m\xE1y ch\u1EE7 kh\xE1c; trang HTTPS y\xEAu c\u1EA7u WSS/TLS."}),S&&(0,st.jsx)("div",{className:"score-message error",role:"alert",children:S}),(0,st.jsx)("button",{className:"online-action",disabled:f,onClick:()=>{m()},children:f?"\u0110ANG K\u1EBET N\u1ED0I...":"K\u1EBET N\u1ED0I M\xC1Y CH\u1EE6 \u2197"})]})]})})}var F=Ea(Fi()),e0={health:100,ammo:30,kills:0,shots:0,hits:0,time:0,reloading:!1,medkits:3},bb=27,Cb=[{x:-9,z:-8,w:5,d:3,h:2.5},{x:9,z:-10,w:5,d:3,h:2.5},{x:-15,z:-1,w:3,d:5,h:2.8},{x:15,z:1,w:3,d:5,h:2.8},{x:-7,z:7,w:4,d:3,h:1.5},{x:8,z:8,w:4,d:3,h:1.5},{x:0,z:-15,w:5,d:3,h:2},{x:0,z:18,w:5,d:3,h:1.5}];function Ab(t){return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(Math.floor(t%60)).padStart(2,"0")}`}function t0(){let t=(0,xt.useRef)(null),e=(0,xt.useRef)(null),[a,n]=(0,xt.useState)("ready"),[i,s]=(0,xt.useState)("normal"),r=(0,xt.useRef)("normal"),[o,l]=(0,xt.useState)(!1),[u,d]=(0,xt.useState)(!1),[p,f]=(0,xt.useState)(!1),[h,S]=(0,xt.useState)(null),M=(0,xt.useRef)(null),[x,c]=(0,xt.useState)(null),[m,v]=(0,xt.useState)(e0),[y,I]=(0,xt.useState)(!1),[T,g]=(0,xt.useState)(""),[C,U]=(0,xt.useState)(!1),[R,O]=(0,xt.useState)(!1),[H,Z]=(0,xt.useState)(!1),[P,X]=(0,xt.useState)(!1),K=(0,xt.useRef)(null),V=(0,xt.useRef)(null),ce=(0,xt.useCallback)(k=>{let ie={name:"\u0110\u1EB6C V\u1EE4",kills:k.kills,shots:k.shots,hits:k.hits,time:k.time,difficulty:r.current,date:new Date().toISOString()};c(ie);try{localStorage.setItem(Qx,JSON.stringify([ie,...sc()].slice(0,50)))}catch{}},[]);async function W(k){let ie=new WebSocket(k.url),ye={socket:ie,config:k,id:"",joined:!1,queue:[]};await new Promise((ge,xe)=>{let Ee=window.setTimeout(()=>{ie.close(),xe(new Error("M\xE1y ch\u1EE7 kh\xF4ng ph\u1EA3n h\u1ED3i \u0111\xFAng giao th\u1EE9c. Ki\u1EC3m tra \u0111\u1ECBa ch\u1EC9 v\xE0 phi\xEAn b\u1EA3n server."))},8e3);ie.onmessage=Dt=>{try{let we=JSON.parse(Dt.data);if(we.type!=="hello"||we.protocol!==1)return;window.clearTimeout(Ee),ge()}catch{}},ie.onerror=()=>{window.clearTimeout(Ee),ie.close(),xe(new Error("Kh\xF4ng k\u1EBFt n\u1ED1i \u0111\u01B0\u1EE3c m\xE1y ch\u1EE7. Ki\u1EC3m tra \u0111\u1ECBa ch\u1EC9, WSS/TLS v\xE0 server \u0111ang ch\u1EA1y."))},ie.onclose=()=>{window.clearTimeout(Ee),xe(new Error("M\xE1y ch\u1EE7 \u0111\xE3 \u0111\xF3ng k\u1EBFt n\u1ED1i tr\u01B0\u1EDBc khi x\xE1c nh\u1EADn."))}}),M.current?.socket.close(),M.current=ye,ie.onmessage=ge=>{try{let xe=JSON.parse(ge.data);ye.queue.length<100&&ye.queue.push(xe)}catch{}},ie.onclose=()=>{M.current===ye&&(ye.queue.push({type:"disconnected"}),f(!1))},ie.onerror=()=>{},S(k),f(!0),g("")}function ne(){let k=M.current;k&&(Bi(k,{type:"leave"}),k.socket.close()),M.current=null,f(!1),g("")}let re=(0,xt.useCallback)(()=>{O(!0),K.current&&clearTimeout(K.current),K.current=setTimeout(()=>O(!1),130)},[]),Te=(0,xt.useCallback)(()=>{Z(!0),V.current&&clearTimeout(V.current),V.current=setTimeout(()=>Z(!1),250)},[]);(0,xt.useEffect)(()=>{let k=t.current;if(!k)return;let ie;try{ie=new Nh({antialias:!0,powerPreference:"high-performance"})}catch{queueMicrotask(()=>X(!0));return}ie.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),ie.setSize(k.clientWidth,k.clientHeight),ie.shadowMap.enabled=!0,ie.shadowMap.type=Wd,ie.outputColorSpace=Pa,ie.toneMapping=Ru,ie.toneMappingExposure=1.15,k.appendChild(ie.domElement);let ye=new fu;ye.background=new Xe("#1a292d"),ye.fog=new cu("#243638",.024);let ge=new Ma(70,k.clientWidth/k.clientHeight,.08,110);ge.position.set(0,1.7,22),ye.add(ge),ye.add(new Mu("#c4e7de","#293338",2));let xe=new Tu("#e0e8d3",2.8);xe.position.set(-15,35,15),xe.castShadow=!0,xe.shadow.mapSize.set(1024,1024),xe.shadow.camera.left=-35,xe.shadow.camera.right=35,xe.shadow.camera.top=35,xe.shadow.camera.bottom=-35,xe.shadow.normalBias=.04,ye.add(xe);let Ee=(b,E={})=>new vu({color:b,roughness:.82,...E}),Dt=Ee("#404d49"),we=Ee("#354441"),it=Ee("#202d2c"),dt=Ee("#81958a"),Ye=Ee("#e0ad63",{emissive:"#9c5a1c",emissiveIntensity:.35}),kt=Ee("#8fffe1",{emissive:"#59f6c6",emissiveIntensity:2});function De(b,E,Q,ee,te,oe,Me,he=ye){let Fe=new la(new bs(b,E,Q),ee);return Fe.position.set(te,oe,Me),Fe.castShadow=!0,Fe.receiveShadow=!0,he.add(Fe),Fe}De(58,.4,58,Dt,0,-.25,0);let ua=Ee("#74847a");for(let b=-24;b<=24;b+=6)De(.025,.012,54,ua,b,-.035,0),De(54,.012,.025,ua,0,-.034,b);for(let b of[-28,28]){De(1,9,58,we,b,4.5,0),De(.12,.1,55,kt,b*.98,3.1,0);for(let E=-24;E<=24;E+=8)De(1.5,10,1.4,it,b,5,E)}for(let b of[-28,28]){De(58,9,1,we,0,4.5,b),De(55,.1,.12,kt,0,3.1,b*.98);for(let E=-24;E<=24;E+=8)De(1.4,10,1.5,it,E,5,b)}for(let b=0;b<18;b++){let E=b/18*Math.PI*2,Q=38+b%3*5,ee=12+b%5*4;De(5+b%3,ee,5,b%2?it:we,Math.sin(E)*Q,ee/2-1,Math.cos(E)*Q)}Cb.forEach(b=>{De(b.w,b.h,b.d,it,b.x,b.h/2,b.z),De(b.w+.12,.12,b.d+.12,dt,b.x,b.h+.02,b.z),De(b.w*.55,.09,.04,Ye,b.x,b.h*.65,b.z+b.d/2+.025);for(let E of[-1,1])De(.1,b.h*.8,.08,dt,b.x+E*(b.w/2-.25),b.h/2,b.z+b.d/2+.04)});let pt=new la(new yu(4.4,4.47,64),new wo({color:"#97c0a9",side:vn}));pt.rotation.x=-Math.PI/2,pt.position.y=-.02,ye.add(pt);let Ca=pt.clone();Ca.scale.setScalar(.75),ye.add(Ca);for(let b=0;b<8;b++){let E=b*Math.PI/4,Q=De(.12,.018,.8,Ye,Math.sin(E)*4.1,-.01,Math.cos(E)*4.1);Q.rotation.y=E}let Je=new wn;Je.position.set(.42,-.42,-.83),Je.rotation.set(-.02,-.08,-.02),ge.add(Je);let Qt=Ee("#172321",{metalness:.55,roughness:.4}),Aa=Ee("#586c61",{metalness:.5,roughness:.45}),Ta=Ee("#9eeac4",{emissive:"#165e42",emissiveIntensity:.5});De(.25,.23,.8,Qt,0,0,0,Je),De(.18,.12,.58,Aa,0,.15,-.05,Je),De(.13,.13,.5,Qt,0,.03,-.58,Je),De(.19,.16,.14,Aa,0,.03,-.84,Je),De(.11,.32,.15,Qt,0,-.24,.16,Je).rotation.x=-.3,De(.08,.08,.22,kt,.13,.02,.05,Je),De(.06,.07,.13,Ye,0,.25,.1,Je);let N=new Cu("#ffcf85",0,8);N.position.set(0,.04,-.95),Je.add(N);let Ht=[],St=Ee("#253533",{metalness:.5,roughness:.5}),yt=Ee("#879889",{metalness:.45,roughness:.45}),_e=Ee("#ff8a59",{emissive:"#ff5633",emissiveIntensity:2}),Bt=[];function Pe(b,E,Q){let ee=new wn;ee.position.set(b,0,E),ye.add(ee);let te=De(.8,.9,.42,yt.clone(),0,1.37,0,ee),oe=[];De(.55,.5,.4,St,0,2.08,0,ee),De(.42,.11,.04,_e,0,2.08,.22,ee),De(.22,.19,.05,_e,0,1.42,.23,ee);for(let Me of[-1,1])oe.push(De(.22,.77,.25,St,Me*.55,1.32,0,ee)),De(.3,.26,.34,yt,Me*.55,1.7,0,ee),oe.push(De(.25,.85,.3,St,Me*.22,.48,0,ee)),De(.29,.18,.39,yt,Me*.22,.12,.04,ee);ee.traverse(Me=>{Me instanceof la&&(Me.userData.botIndex=Q,Bt.push(Me))}),Ht.push({group:ee,body:te,limbs:oe,health:100,speed:1.3+Math.random()*.6,phase:Math.random()*7,cooldown:1+Math.random()*3,dead:!1,hitFlash:0,deathAt:0})}[[-11,-17],[0,-20],[11,-16],[-18,-12],[17,-4],[-13,2]].forEach(([b,E],Q)=>Pe(b,E,Q));let Ce="ready",A={...e0},_=0,B=0,se=!1,$=0,Se=0,le=0,Y=0,J=!0,fe=null,w=0,j=0,q=!1,de=!1,me=0,pe=new Map,be=new Set,Ve=new Eu,ue=new Iu,Re=new Ke(0,0),Ne=new z,ve=[];function ot(b,E,Q){let ee=new yn().setFromPoints([b,E]),te=new Ro({color:Q,transparent:!0,opacity:.9,depthWrite:!1}),oe=new pu(ee,te);ye.add(oe),ve.push({line:oe,life:.13})}function Gt(b){let{line:E}=ve[b];ye.remove(E),E.geometry.dispose(),E.material.dispose(),ve.splice(b,1)}function On(){if(!(Ce!=="playing"||A.medkits<=0||A.health>=100)){if(de){Bi(M.current,{type:"heal"});return}A.health=Math.min(100,A.health+35),A.medkits--,_n(650,.2,"sine"),xa()}}function _n(b,E,Q="square",ee=.025){if(J)try{fe??(fe=new AudioContext),fe.state==="suspended"&&fe.resume();let te=fe.createOscillator(),oe=fe.createGain();te.type=Q,te.frequency.setValueAtTime(b,fe.currentTime),te.frequency.exponentialRampToValueAtTime(Math.max(40,b*.45),fe.currentTime+E),oe.gain.setValueAtTime(ee,fe.currentTime),oe.gain.exponentialRampToValueAtTime(.001,fe.currentTime+E),te.connect(oe),oe.connect(fe.destination),te.start(),te.stop(fe.currentTime+E)}catch{}}function xa(){v({...A})}function kh(b){return Math.hypot(ge.position.x-b.group.position.x,ge.position.z-b.group.position.z)}function Ds(b,E,Q=.45){return Math.abs(b)>bb||Math.abs(E)>bb?!0:Cb.some(ee=>Math.abs(b-ee.x)<ee.w/2+Q&&Math.abs(E-ee.z)<ee.d/2+Q)}function Vo(b){let E=pe.get(b);E&&(ye.remove(E.group),E.group.traverse(Q=>{Q instanceof la&&Q.geometry.dispose()}),pe.delete(b))}function ei(){for(let b of pe.keys())Vo(b);A={...e0},le=0,Se=0,$=0,ge.position.set(0,1.7,22),_=0,B=0,ge.rotation.set(0,0,0),Ht.forEach((b,E)=>{let Q=[[-11,-17],[0,-20],[11,-16],[-18,-12],[17,-4],[-13,2]][E];b.group.position.set(Q[0],0,Q[1]),b.health=100,b.dead=!1,b.group.visible=!0,b.group.rotation.z=0,b.hitFlash=0,b.cooldown=1+Math.random()*3}),xa()}function qo(){if(document.pointerLockElement!==ie.domElement){let b=ie.domElement.requestPointerLock();b&&typeof b.catch=="function"&&b.catch(()=>{de&&(Bi(M.current,{type:"leave"}),M.current&&(M.current.joined=!1,M.current.queue.length=0),de=!1),g("Kh\xF4ng th\u1EC3 kh\xF3a chu\u1ED9t. H\xE3y nh\u1EA5n v\xE0o m\xE0n h\xECnh \u0111\u1EC3 th\u1EED l\u1EA1i.")})}}function rc(){if(Ce==="gameover"||Ce==="ready"){let b=M.current;if(b&&b.socket.readyState!==WebSocket.OPEN){g("\u0110\xE3 m\u1EA5t k\u1EBFt n\u1ED1i. M\u1EDF PH\xD2NG ONLINE \u0111\u1EC3 k\u1EBFt n\u1ED1i l\u1EA1i ho\u1EB7c ch\u1ECDn ch\u01A1i offline.");return}ei(),de=!!b,b&&(b.joined=!1,b.id="",b.queue.length=0,Bi(b,{type:"leave"}),Bi(b,{type:"join",room:b.config.room,name:b.config.name}))}qo()}function zi(){Ce!=="playing"||A.reloading||A.ammo===30||(de&&Bi(M.current,{type:"reload"}),A.reloading=!0,Se=le+1.4,_n(260,.16,"triangle"),xa())}function Ps(b){if(Ce!=="playing"||A.reloading||b-$<.14||de&&!M.current?.joined)return;if(A.ammo<=0){zi();return}$=b,A.ammo--,A.shots++,w=1,N.intensity=7,_n(125,.09,"sawtooth",.035),ue.setFromCamera(Re,ge);let Q=ue.intersectObjects(Bt,!1).find(he=>{let Fe=Ht[he.object.userData.botIndex];return Fe&&!Fe.dead}),ee=ye.children.filter(he=>he instanceof la&&he!==pt&&he!==Ca),te=ue.intersectObjects(ee,!1)[0],oe=!!(Q&&te&&te.distance<Q.distance-.05),Me=Q&&!oe?Q.point:te?.point??ue.ray.at(50,new z);if(ot(Je.localToWorld(new z(0,.04,-.95)),Me,"#bfffe2"),de){Bi(M.current,{type:"shoot",yaw:_,pitch:B}),A.ammo===0&&zi(),xa();return}if(Q&&!oe){let he=Ht[Q.object.userData.botIndex];he.health-=34,he.hitFlash=.18,A.hits++,re(),_n(650,.07,"sine",.025),he.health<=0&&(he.dead=!0,he.deathAt=le,A.kills++,he.cooldown=le+3)}A.ammo===0&&zi(),xa()}function Wo(){document.pointerLockElement===ie.domElement?(Ce="playing",n("playing"),g(""),Ve.getDelta()):Ce==="playing"&&(Ce="paused",n("paused"),se=!1,be.clear())}function Xo(b){Ce==="playing"&&(_-=b.movementX*.0022,B=fr.clamp(B-b.movementY*.0022,-1.25,1.25),ge.rotation.order="YXZ",ge.rotation.set(B,_,0))}function ki(b){b.button===0&&Ce==="playing"&&(se=!0,Ps(le))}function oc(b){b.button===0&&(se=!1)}function Yo(b){Ce==="playing"&&(["KeyW","KeyA","KeyS","KeyD","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(b.code)&&b.preventDefault(),be.add(b.code),b.code==="KeyR"&&!b.repeat&&zi(),b.code==="KeyQ"&&!b.repeat&&On())}function Zo(b){be.delete(b.code)}function lc(){be.clear(),se=!1}function Ko(){k&&(ie.setSize(k.clientWidth,k.clientHeight),ge.aspect=k.clientWidth/k.clientHeight,ge.updateProjectionMatrix())}function uc(){U(!!document.fullscreenElement),Ko()}function cc(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>g("Tr\xECnh duy\u1EC7t kh\xF4ng h\u1ED7 tr\u1EE3 to\xE0n m\xE0n h\xECnh."))}document.addEventListener("pointerlockchange",Wo),document.addEventListener("mousemove",Xo),document.addEventListener("mousedown",ki),document.addEventListener("mouseup",oc),window.addEventListener("keydown",Yo),window.addEventListener("keyup",Zo),window.addEventListener("blur",lc),window.addEventListener("resize",Ko),document.addEventListener("fullscreenchange",uc),e.current={start:rc,reload:zi,fullscreen:cc,sound:b=>{J=b}};function L(b){A={...A,health:b.health,ammo:b.ammo,medkits:b.medkits,kills:b.kills,shots:b.shots,hits:b.hits,time:b.time,reloading:b.reloading},Math.hypot(ge.position.x-b.x,ge.position.z-b.z)>1.5&&(ge.position.x=b.x,ge.position.z=b.z)}function D(){let b=M.current;if(!(!de||!b))for(let E of b.queue.splice(0))if(E.type==="joined")b.joined=!0,b.id=E.id,ge.position.set(E.x,1.7,E.z);else if(E.type==="snapshot"&&b.joined){L(E.self);for(let ee of E.bots){let te=Ht[ee.id];te&&(te.group.position.set(ee.x,0,ee.z),te.group.visible=ee.health>0,te.dead=ee.health<=0,te.health=ee.health,te.group.rotation.z=0,te.group.rotation.y=Math.atan2(ge.position.x-ee.x,ge.position.z-ee.z),te.limbs.forEach((oe,Me)=>{oe.rotation.x=Math.sin(performance.now()*.006+te.phase+(Me%2?Math.PI:0))*.22}))}let Q=new Set;for(let ee of E.players){if(ee.id===b.id)continue;Q.add(ee.id);let te=pe.get(ee.id);if(!te){let oe=new wn;De(.8,.9,.42,Ta,0,1.37,0,oe),De(.55,.5,.4,Qt,0,2.08,0,oe);for(let Me of[-1,1])De(.24,.8,.25,Qt,Me*.55,1.32,0,oe),De(.25,.85,.3,Qt,Me*.22,.48,0,oe);ye.add(oe),te={group:oe,x:ee.x,z:ee.z,yaw:ee.yaw},oe.position.set(ee.x,0,ee.z),pe.set(ee.id,te)}te.x=ee.x,te.z=ee.z,te.yaw=ee.yaw,te.group.visible=ee.health>0}for(let ee of pe.keys())Q.has(ee)||Vo(ee);xa()}else if(E.type==="hit"){re();let Q=Ht[E.bot];Q&&(Q.hitFlash=.18),_n(650,.07,"sine",.025)}else E.type==="damage"?(A.health=E.health,Te(),_n(90,.15,"sawtooth",.025)):E.type==="defeated"&&Ce!=="gameover"?(L(E.self),Ce="gameover",n("gameover"),ce(A),se=!1,b.joined=!1,document.pointerLockElement&&document.exitPointerLock(),xa()):E.type==="error"?(g(E.message),Ce="gameover",n("gameover"),document.pointerLockElement&&document.exitPointerLock()):E.type==="disconnected"&&(Ce==="playing"||Ce==="paused")&&(Ce="gameover",n("gameover"),g("M\u1EA5t k\u1EBFt n\u1ED1i m\xE1y ch\u1EE7. H\xE3y k\u1EBFt n\u1ED1i l\u1EA1i ho\u1EB7c ch\u1ECDn ch\u01A1i offline."),se=!1,ce(A),document.pointerLockElement&&document.exitPointerLock(),xa())}function G(){if(q)return;j=requestAnimationFrame(G);let b=Math.min(Ve.getDelta(),.05);if(D(),de)for(let E of Ht)E.hitFlash=Math.max(0,E.hitFlash-b),E.body.material.emissive.set(E.hitFlash>0?"#ff6644":"#000000");for(let E of pe.values())E.group.position.x=fr.lerp(E.group.position.x,E.x,Math.min(1,b*12)),E.group.position.z=fr.lerp(E.group.position.z,E.z,Math.min(1,b*12)),E.group.rotation.y=Math.atan2(-Math.sin(E.yaw),-Math.cos(E.yaw));for(let E=ve.length-1;E>=0;E--)ve[E].life-=b,ve[E].line.material.opacity=Math.max(0,ve[E].life/.13),ve[E].life<=0&&Gt(E);if(Ce==="playing"){le+=b,A.time=le,!de&&A.reloading&&le>=Se&&(A.ammo=30,A.reloading=!1,_n(450,.1,"triangle"),xa()),se&&Ps(le);let E=Number(be.has("KeyW")||be.has("ArrowUp"))-Number(be.has("KeyS")||be.has("ArrowDown")),Q=Number(be.has("KeyD")||be.has("ArrowRight"))-Number(be.has("KeyA")||be.has("ArrowLeft")),ee=Math.hypot(E,Q)||1,te=(be.has("ShiftLeft")?8:5.2)*b/ee,oe=(Q*Math.cos(_)-E*Math.sin(_))*te,Me=(-E*Math.cos(_)-Q*Math.sin(_))*te;(!de||M.current?.joined)&&!Ds(ge.position.x+oe,ge.position.z)&&(ge.position.x+=oe),(!de||M.current?.joined)&&!Ds(ge.position.x,ge.position.z+Me)&&(ge.position.z+=Me),de&&M.current?.joined&&performance.now()-me>100&&(me=performance.now(),Bi(M.current,{type:"move",x:ge.position.x,z:ge.position.z,yaw:_,pitch:B})),w=Math.max(0,w-b*6),N.intensity=Math.max(0,N.intensity-b*65),Je.position.y=-.42-w*.08+(E||Q?Math.sin(le*10)*.012:0)-(A.reloading?.12:0),Je.position.z=-.83+w*.12,Je.rotation.z=fr.lerp(Je.rotation.z,A.reloading?-.4:Q*-.035-.02,b*6),Je.rotation.x=fr.lerp(Je.rotation.x,A.reloading?-.25:-.02+w*.08,b*6),Ca.rotation.z+=b*.1,de||Ht.forEach((he,Fe)=>{if(Ce!=="playing")return;if(he.dead){if(he.group.rotation.z=Math.min(1.35,(le-he.deathAt)*4),le-he.deathAt>.8&&(he.group.visible=!1),le>=he.cooldown){let lt=[[-20,-20],[20,-18],[-20,10],[20,10],[0,-22],[-10,-20]][Fe];he.group.position.set(lt[0],0,lt[1]),he.health=100,he.dead=!1,he.group.visible=!0,he.group.rotation.z=0,he.cooldown=2}return}he.hitFlash=Math.max(0,he.hitFlash-b),he.body.material.emissive.set(he.hitFlash>0?"#ff6644":"#000000"),he.limbs.forEach((ke,lt)=>{ke.rotation.x=Math.sin(le*7+he.phase+(lt%2?Math.PI:0))*(kh(he)>9?.3:.03)}),Ne.set(ge.position.x-he.group.position.x,0,ge.position.z-he.group.position.z);let Ae=Ne.length();if(Ne.normalize(),he.group.rotation.y=Math.atan2(Ne.x,Ne.z),Ae>9){let ke=he.group.position.x+Ne.x*he.speed*(r.current==="easy"?.7:r.current==="hard"?1.45:1)*b,lt=he.group.position.z+Ne.z*he.speed*(r.current==="easy"?.7:r.current==="hard"?1.45:1)*b;Ds(ke,he.group.position.z,.6)||(he.group.position.x=ke),Ds(he.group.position.x,lt,.6)||(he.group.position.z=lt)}else he.group.position.x+=Math.cos(le+he.phase)*b*.3;if(he.cooldown-=b,Ae<22&&he.cooldown<=0){he.cooldown=(2.3+Math.random()*1.6)*(r.current==="easy"?1.4:r.current==="hard"?.7:1);let ke=he.group.position.clone().add(new z(0,1.5,0)),lt=ge.position.clone().sub(ke),vt=lt.length();ue.set(ke,lt.normalize()),ue.intersectObjects(ye.children.filter(Wt=>Wt instanceof la),!1).some(Wt=>Wt.distance<vt-.3)||(ot(ke,ge.position.clone(),"#ff956c"),A.health=Math.max(0,A.health-(r.current==="easy"?5:r.current==="hard"?12:8)),Te(),_n(90,.15,"sawtooth",.025),xa()),A.health<=0&&(Ce="gameover",n("gameover"),ce(A),se=!1,document.pointerLockElement&&document.exitPointerLock(),xa())}}),le-Y>.2&&(Y=le,xa())}else Ce==="ready"&&(ge.rotation.y=Math.sin(performance.now()*15e-5)*.06);ie.render(ye,ge)}return G(),()=>{for(q=!0,cancelAnimationFrame(j),e.current=null,document.removeEventListener("pointerlockchange",Wo),document.removeEventListener("mousemove",Xo),document.removeEventListener("mousedown",ki),document.removeEventListener("mouseup",oc),window.removeEventListener("keydown",Yo),window.removeEventListener("keyup",Zo),window.removeEventListener("blur",lc),window.removeEventListener("resize",Ko),document.removeEventListener("fullscreenchange",uc),document.pointerLockElement===ie.domElement&&document.exitPointerLock(),ye.traverse(b=>{b instanceof la&&(b.geometry.dispose(),(Array.isArray(b.material)?b.material:[b.material]).forEach(Q=>Q.dispose()))}),Ta.dispose();ve.length;)Gt(0);M.current?.socket.close(),M.current=null,ie.dispose(),ie.domElement.remove(),fe&&fe.close(),K.current&&clearTimeout(K.current),V.current&&clearTimeout(V.current)}},[re,Te,ce]),(0,xt.useEffect)(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(new URL("./sw.js",document.baseURI).href)},[]);let ze=m.shots?Math.round(m.hits/m.shots*100):0;return(0,F.jsxs)("main",{className:"app-shell",children:[(0,F.jsx)("div",{className:"game-canvas",ref:t}),(0,F.jsx)("div",{className:"vignette"}),(0,F.jsx)("div",{className:`damage ${H?"show":""}`}),(0,F.jsxs)("header",{className:"topbar",children:[(0,F.jsxs)("div",{className:"brand",children:[(0,F.jsx)("div",{className:"brand-mark",children:(0,F.jsx)(Go,{size:21})}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("div",{className:"brand-name",children:["AIM",(0,F.jsx)("span",{children:"FORGE"}),(0,F.jsx)("i",{children:"\xAE"})]}),(0,F.jsx)("div",{className:"brand-sub",children:"TACTICAL TRAINING SYSTEM"})]})]}),(0,F.jsxs)("div",{className:"top-center",children:[(0,F.jsx)("span",{className:"status-dot"})," H\u1EC6 TH\u1ED0NG S\u1EB4N S\xC0NG ",(0,F.jsx)("span",{className:"top-divider"})," ",p?`ONLINE / ${h?.room}`:"CH\u1EBE \u0110\u1ED8 NGO\u1EA0I TUY\u1EBEN"]}),(0,F.jsxs)("div",{className:"top-actions",children:[(0,F.jsx)("button",{title:y?"B\u1EADt \xE2m thanh":"T\u1EAFt \xE2m thanh",onClick:()=>{I(!y),e.current?.sound(y)},children:y?(0,F.jsx)(nc,{size:17}):(0,F.jsx)(ac,{size:17})}),(0,F.jsx)("button",{title:C?"Tho\xE1t to\xE0n m\xE0n h\xECnh":"To\xE0n m\xE0n h\xECnh",onClick:()=>e.current?.fullscreen(),children:(0,F.jsx)(Yu,{size:17})}),(0,F.jsxs)("div",{className:"profile",children:[(0,F.jsx)("span",{children:"01"}),(0,F.jsxs)("div",{children:[(0,F.jsx)("b",{children:"\u0110\u1EB6C V\u1EE4"}),(0,F.jsx)("small",{children:"NG\u01AF\u1EDCI CH\u01A0I"})]})]})]})]}),(0,F.jsxs)("div",{className:"side-label left-label",children:[(0,F.jsx)("span",{children:"AF / TRAINING GROUNDS"}),(0,F.jsx)("i",{})," ",(0,F.jsx)("span",{children:"SECTOR 07"})]}),(0,F.jsxs)("div",{className:"side-label right-label",children:[(0,F.jsx)("span",{children:"SIMULATION ENVIRONMENT"}),(0,F.jsx)("i",{})," ",(0,F.jsx)("span",{children:"V.01"})]}),a==="playing"&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("div",{className:"play-top",children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"live-dot"})," \u0110ANG HU\u1EA4N LUY\u1EC6N ",(0,F.jsxs)("small",{children:[" / ",p?`CO-OP ${h?.room}`:"\u0110\u1EA4U V\u1EDAI BOT"]})]}),(0,F.jsx)("strong",{children:Ab(m.time)})]}),(0,F.jsxs)("div",{className:`crosshair ${R?"hit":""}`,children:[(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("span",{}),(0,F.jsx)("i",{})]}),(0,F.jsxs)("div",{className:"playing-hud",children:[(0,F.jsxs)("div",{className:"hud-health",children:[(0,F.jsxs)("div",{className:"hud-label",children:[(0,F.jsx)(ec,{size:14})," SINH L\u1EF0C"]}),(0,F.jsxs)("div",{className:"hud-value",children:[m.health,(0,F.jsx)("small",{children:" / 100"})]}),(0,F.jsx)("div",{className:"health-track",children:(0,F.jsx)("i",{style:{width:`${m.health}%`}})})]}),(0,F.jsxs)("div",{className:"hud-score",children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"med-icon",children:"\u271A"})," [Q] H\u1ED2I M\xC1U ",(0,F.jsx)("strong",{children:m.medkits})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(tc,{size:14})," H\u1EA0 G\u1EE4C ",(0,F.jsx)("strong",{children:String(m.kills).padStart(2,"0")})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)(Zu,{size:14})," CH\xCDNH X\xC1C ",(0,F.jsxs)("strong",{children:[ze,"%"]})]})]}),(0,F.jsxs)("div",{className:"hud-ammo",children:[(0,F.jsxs)("div",{className:"hud-label",children:["AEGIS-IX ",(0,F.jsx)("span",{children:" / \u0110\u1EA0N D\u01AF\u1EE2C"})]}),(0,F.jsxs)("div",{className:"hud-value",children:[String(m.ammo).padStart(2,"0"),(0,F.jsx)("small",{children:" / \u221E"})]}),(0,F.jsx)("div",{className:"ammo-caption",children:m.reloading?"\u0110ANG N\u1EA0P \u0110\u1EA0N...":"[ R ] N\u1EA0P \u0110\u1EA0N"})]})]})]}),a!=="playing"&&(0,F.jsxs)("div",{className:"overlay",children:[(0,F.jsxs)("div",{className:"intro",children:[(0,F.jsxs)("div",{className:"eyebrow",children:[(0,F.jsx)("span",{className:"eyebrow-line"})," PH\xD2NG HU\u1EA4N LUY\u1EC6N CHI\u1EBEN THU\u1EACT ",(0,F.jsx)("span",{className:"eyebrow-number",children:" / 01"})]}),(0,F.jsx)("h1",{children:a==="gameover"?(0,F.jsxs)(F.Fragment,{children:["NHI\u1EC6M V\u1EE4",(0,F.jsx)("br",{}),(0,F.jsx)("em",{children:"K\u1EBET TH\xDAC."})]}):a==="paused"?(0,F.jsxs)(F.Fragment,{children:["T\u1EA0M",(0,F.jsx)("br",{}),(0,F.jsx)("em",{children:"D\u1EEANG."})]}):(0,F.jsxs)(F.Fragment,{children:["S\u1EB4N S\xC0NG",(0,F.jsx)("br",{}),(0,F.jsx)("em",{children:"CHI\u1EBEN \u0110\u1EA4U."})]})}),(0,F.jsx)("p",{children:a==="gameover"?`B\u1EA1n \u0111\xE3 h\u1EA1 ${m.kills} bot trong ${Ab(m.time)}. H\xE3y quay l\u1EA1i v\xE0 ph\xE1 k\u1EF7 l\u1EE5c c\u1EE7a m\xECnh.`:a==="paused"?p?"Tr\u1EADn online v\u1EABn ti\u1EBFp di\u1EC5n khi b\u1EA1n nh\u1EA3 chu\u1ED9t. Quay l\u1EA1i \u0111\u1EC3 ti\u1EBFp t\u1EE5c.":"M\xF4 ph\u1ECFng \u0111ang t\u1EA1m d\u1EEBng. Ti\u1EBFp t\u1EE5c khi b\u1EA1n \u0111\xE3 s\u1EB5n s\xE0ng.":"R\xE8n luy\u1EC7n ph\u1EA3n x\u1EA1, l\xE0m ch\u1EE7 t\xE2m ng\u1EAFm. B\u01B0\u1EDBc v\xE0o \u0111\u1EA5u tr\u01B0\u1EDDng v\xE0 \u0111\u1ED1i \u0111\u1EA7u v\u1EDBi c\xE1c m\u1EE5c ti\xEAu AI."}),(0,F.jsxs)("div",{className:"mode-card",children:[(0,F.jsx)("div",{className:"mode-icon",children:(0,F.jsx)(Go,{size:22})}),(0,F.jsxs)("div",{className:"mode-copy",children:[(0,F.jsx)("small",{children:"CH\u1EBE \u0110\u1ED8 \u0110\xC3 CH\u1ECCN"}),(0,F.jsx)("b",{children:p?`CO-OP / ${h?.room}`:"\u0110\u1EA4U V\u1EDAI BOT"}),(0,F.jsx)("span",{children:p?"C\xF9ng \u0111\u1ED3ng \u0111\u1ED9i chi\u1EBFn \u0111\u1EA5u v\u1EDBi bot \xB7 Online":"G\xF3c nh\xECn th\u1EE9 nh\u1EA5t \xB7 Kh\xF4ng gi\u1EDBi h\u1EA1n th\u1EDDi gian"})]}),(0,F.jsx)("span",{className:"mode-check",children:"\u2713"})]}),!p&&(0,F.jsxs)("div",{className:"difficulty-selector",children:[(0,F.jsx)("span",{children:"\u0110\u1ED8 KH\xD3"}),[["easy","D\u1EC4"],["normal","TH\u01AF\u1EDCNG"],["hard","KH\xD3"]].map(([k,ie])=>(0,F.jsx)("button",{disabled:a==="paused",className:i===k?"selected":"",onClick:()=>{r.current=k,s(k)},children:ie},k))]}),(0,F.jsxs)("div",{className:"actions",children:[(0,F.jsxs)("button",{className:"start-button",onClick:()=>e.current?.start(),disabled:P,children:[(0,F.jsx)("span",{children:a==="paused"?"TI\u1EBEP T\u1EE4C":a==="gameover"?"CH\u01A0I L\u1EA0I":"B\u1EAET \u0110\u1EA6U HU\u1EA4N LUY\u1EC6N"}),(0,F.jsx)("span",{className:"arrow",children:"\u2197"})]}),(0,F.jsx)("button",{className:"fullscreen-button",onClick:()=>e.current?.fullscreen(),title:"B\u1EADt / t\u1EAFt to\xE0n m\xE0n h\xECnh",children:(0,F.jsx)(ju,{size:18})})]}),(0,F.jsxs)("div",{className:"intro-bottom",children:[(0,F.jsxs)("div",{className:"offline-note",children:[(0,F.jsx)("span",{})," CH\u01A0I NGAY \xB7 KH\xD4NG C\u1EA6N \u0110\u0102NG NH\u1EACP"]}),a!=="paused"&&(0,F.jsxs)("button",{className:"score-open",onClick:()=>d(!0),children:[(0,F.jsx)(Oi,{size:14})," PH\xD2NG ONLINE \u2197"]}),(0,F.jsxs)("button",{className:"score-open",onClick:()=>l(!0),children:[(0,F.jsx)(hr,{size:14})," TH\xC0NH T\xCDCH \u2197"]})]}),T&&(0,F.jsx)("div",{className:"notice",children:T}),P&&(0,F.jsx)("div",{className:"notice",children:"Kh\xF4ng th\u1EC3 kh\u1EDFi t\u1EA1o WebGL. H\xE3y b\u1EADt t\u0103ng t\u1ED1c ph\u1EA7n c\u1EE9ng ho\u1EB7c th\u1EED tr\xECnh duy\u1EC7t kh\xE1c."})]}),(0,F.jsxs)("div",{className:"environment-tag",children:[(0,F.jsx)("span",{className:"tag-cross",children:"\u2733"}),(0,F.jsxs)("div",{children:[(0,F.jsx)("small",{children:"\u0110\u1ECAA \u0110I\u1EC2M HU\u1EA4N LUY\u1EC6N"}),(0,F.jsx)("b",{children:"THE PROVING GROUND"}),(0,F.jsx)("span",{children:"SECTOR 07 \u2014 M\xD4 PH\u1ECENG CHI\u1EBEN \u0110\u1EA4U"})]})]}),(0,F.jsxs)("div",{className:"coordinates",children:[`35\xB0 41' 22.8" N`,(0,F.jsx)("br",{}),`139\xB0 41' 30.1" E`]})]}),u&&(0,F.jsx)($x,{connected:p,config:h,onConnect:W,onDisconnect:ne,onClose:()=>d(!1)}),o&&(0,F.jsx)(jx,{latest:a==="gameover"?x:null,onlineConfig:h,onClose:()=>l(!1)}),(0,F.jsxs)("footer",{className:"bottom-bar",children:[(0,F.jsxs)("div",{className:"controls",children:[(0,F.jsxs)("div",{children:[(0,F.jsx)(Qu,{size:17}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"W A S D"}),(0,F.jsx)("small",{children:"DI CHUY\u1EC2N"})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)($u,{size:16}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"CHU\u1ED8T"}),(0,F.jsx)("small",{children:"NG\u1EAEM & B\u1EAEN"})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"key-icon",children:"R"}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"PH\xCDM R"}),(0,F.jsx)("small",{children:"N\u1EA0P \u0110\u1EA0N"})]})]}),(0,F.jsxs)("div",{children:[(0,F.jsx)("span",{className:"key-icon",children:"ESC"}),(0,F.jsxs)("span",{children:[(0,F.jsx)("b",{children:"ESC"}),(0,F.jsx)("small",{children:"T\u1EA0M D\u1EEANG"})]})]})]}),(0,F.jsxs)("div",{className:"bottom-right",children:[(0,F.jsx)(Ju,{size:16}),(0,F.jsx)("span",{children:"\u0110EO TAI NGHE \u0110\u1EC2 C\xD3 TR\u1EA2I NGHI\u1EC6M T\u1ED0T NH\u1EA4T"}),(0,F.jsx)("i",{})," ",(0,F.jsxs)("b",{children:[(0,F.jsx)(ic,{size:13})," AIMFORGE ENGINE"]})]})]}),(0,F.jsxs)("div",{className:"mobile-warning",children:[(0,F.jsx)(Wu,{size:20}),(0,F.jsx)("b",{children:"C\u1EA6N B\xC0N PH\xCDM & CHU\u1ED8T"}),(0,F.jsx)("span",{children:"Vui l\xF2ng m\u1EDF tr\xF2 ch\u01A1i tr\xEAn m\xE1y t\xEDnh \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m \u0111\u1EA7y \u0111\u1EE7."})]})]})}var Eb=Ea(Fi()),Tb=document.getElementById("root");Tb&&(0,Ib.createRoot)(Tb).render((0,Eb.jsx)(t0,{}));})();
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
lucide-react/dist/esm/icons/users.mjs:
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
