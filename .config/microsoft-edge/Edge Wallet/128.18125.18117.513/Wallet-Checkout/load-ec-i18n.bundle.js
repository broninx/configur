(()=>{"use strict";const t=t=>{const r=t??"";switch(r){case"en-au":case"en-AU":return"en-GB";case"zh-TW":return"zh-Hant";case"zh-CN":return"zh-Hans"}const e=r.split("-")?.[0];switch(e){case"pt":return"pt-PT";case"zh":return"zh-Hans";default:return`${e}`}},r=Array.isArray,e=function(t,r){for(var e=-1,n=null==t?0:t.length,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o},n=function(t,r){return t===r||t!=t&&r!=r},o=function(t,r){for(var e=t.length;e--;)if(n(t[e][0],r))return e;return-1};var u=Array.prototype.splice;function a(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}a.prototype.clear=function(){this.__data__=[],this.size=0},a.prototype.delete=function(t){var r=this.__data__,e=o(r,t);return!(e<0||(e==r.length-1?r.pop():u.call(r,e,1),--this.size,0))},a.prototype.get=function(t){var r=this.__data__,e=o(r,t);return e<0?void 0:r[e][1]},a.prototype.has=function(t){return o(this.__data__,t)>-1},a.prototype.set=function(t,r){var e=this.__data__,n=o(e,t);return n<0?(++this.size,e.push([t,r])):e[n][1]=r,this};const c=a,i="object"==typeof global&&global&&global.Object===Object&&global;var s="object"==typeof self&&self&&self.Object===Object&&self;const f=i||s||Function("return this")(),l=f.Symbol;var p=Object.prototype,v=p.hasOwnProperty,h=p.toString,y=l?l.toStringTag:void 0;var b=Object.prototype.toString;var _=l?l.toStringTag:void 0;const d=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_&&_ in Object(t)?function(t){var r=v.call(t,y),e=t[y];try{t[y]=void 0;var n=!0}catch(t){}var o=h.call(t);return n&&(r?t[y]=e:delete t[y]),o}(t):function(t){return b.call(t)}(t)},j=function(t){var r=typeof t;return null!=t&&("object"==r||"function"==r)},g=function(t){if(!j(t))return!1;var r=d(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},O=f["__core-js_shared__"];var w,m=(w=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"";var z=Function.prototype.toString;const A=function(t){if(null!=t){try{return z.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var P=/^\[object .+?Constructor\]$/,S=Function.prototype,x=Object.prototype,E=S.toString,T=x.hasOwnProperty,$=RegExp("^"+E.call(T).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const k=function(t){return!(!j(t)||(r=t,m&&m in r))&&(g(t)?$:P).test(A(t));var r},F=function(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return k(e)?e:void 0},B=F(f,"Map"),D=F(Object,"create");var U=Object.prototype.hasOwnProperty;var C=Object.prototype.hasOwnProperty;function I(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}I.prototype.clear=function(){this.__data__=D?D(null):{},this.size=0},I.prototype.delete=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},I.prototype.get=function(t){var r=this.__data__;if(D){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return U.call(r,t)?r[t]:void 0},I.prototype.has=function(t){var r=this.__data__;return D?void 0!==r[t]:C.call(r,t)},I.prototype.set=function(t,r){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=D&&void 0===r?"__lodash_hash_undefined__":r,this};const M=I,V=function(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map};function L(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}L.prototype.clear=function(){this.size=0,this.__data__={hash:new M,map:new(B||c),string:new M}},L.prototype.delete=function(t){var r=V(this,t).delete(t);return this.size-=r?1:0,r},L.prototype.get=function(t){return V(this,t).get(t)},L.prototype.has=function(t){return V(this,t).has(t)},L.prototype.set=function(t,r){var e=V(this,t),n=e.size;return e.set(t,r),this.size+=e.size==n?0:1,this};const N=L;function R(t){var r=this.__data__=new c(t);this.size=r.size}R.prototype.clear=function(){this.__data__=new c,this.size=0},R.prototype.delete=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e},R.prototype.get=function(t){return this.__data__.get(t)},R.prototype.has=function(t){return this.__data__.has(t)},R.prototype.set=function(t,r){var e=this.__data__;if(e instanceof c){var n=e.__data__;if(!B||n.length<199)return n.push([t,r]),this.size=++e.size,this;e=this.__data__=new N(n)}return e.set(t,r),this.size=e.size,this};const W=R;function H(t){var r=-1,e=null==t?0:t.length;for(this.__data__=new N;++r<e;)this.add(t[r])}H.prototype.add=H.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},H.prototype.has=function(t){return this.__data__.has(t)};const q=H,G=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1},X=function(t,r,e,n,o,u){var a=1&e,c=t.length,i=r.length;if(c!=i&&!(a&&i>c))return!1;var s=u.get(t),f=u.get(r);if(s&&f)return s==r&&f==t;var l=-1,p=!0,v=2&e?new q:void 0;for(u.set(t,r),u.set(r,t);++l<c;){var h=t[l],y=r[l];if(n)var b=a?n(y,h,l,r,t,u):n(h,y,l,t,r,u);if(void 0!==b){if(b)continue;p=!1;break}if(v){if(!G(r,(function(t,r){if(a=r,!v.has(a)&&(h===t||o(h,t,e,n,u)))return v.push(r);var a}))){p=!1;break}}else if(h!==y&&!o(h,y,e,n,u)){p=!1;break}}return u.delete(t),u.delete(r),p},J=f.Uint8Array,K=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e},Q=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e};var Y=l?l.prototype:void 0,Z=Y?Y.valueOf:void 0;const tt=function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t},rt=function(t,e,n){var o=e(t);return r(t)?o:tt(o,n(t))},et=function(){return[]};var nt=Object.prototype.propertyIsEnumerable,ot=Object.getOwnPropertySymbols;const ut=ot?function(t){return null==t?[]:(t=Object(t),function(t,r){for(var e=-1,n=null==t?0:t.length,o=0,u=[];++e<n;){var a=t[e];r(a,e,t)&&(u[o++]=a)}return u}(ot(t),(function(r){return nt.call(t,r)})))}:et,at=function(t){return null!=t&&"object"==typeof t},ct=function(t){return at(t)&&"[object Arguments]"==d(t)};var it=Object.prototype,st=it.hasOwnProperty,ft=it.propertyIsEnumerable;const lt=ct(function(){return arguments}())?ct:function(t){return at(t)&&st.call(t,"callee")&&!ft.call(t,"callee")};var pt="object"==typeof exports&&exports&&!exports.nodeType&&exports,vt=pt&&"object"==typeof module&&module&&!module.nodeType&&module,ht=vt&&vt.exports===pt?f.Buffer:void 0;const yt=(ht?ht.isBuffer:void 0)||function(){return!1};var bt=/^(?:0|[1-9]\d*)$/;const _t=function(t,r){var e=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==e||"symbol"!=e&&bt.test(t))&&t>-1&&t%1==0&&t<r},dt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};var jt={};jt["[object Float32Array]"]=jt["[object Float64Array]"]=jt["[object Int8Array]"]=jt["[object Int16Array]"]=jt["[object Int32Array]"]=jt["[object Uint8Array]"]=jt["[object Uint8ClampedArray]"]=jt["[object Uint16Array]"]=jt["[object Uint32Array]"]=!0,jt["[object Arguments]"]=jt["[object Array]"]=jt["[object ArrayBuffer]"]=jt["[object Boolean]"]=jt["[object DataView]"]=jt["[object Date]"]=jt["[object Error]"]=jt["[object Function]"]=jt["[object Map]"]=jt["[object Number]"]=jt["[object Object]"]=jt["[object RegExp]"]=jt["[object Set]"]=jt["[object String]"]=jt["[object WeakMap]"]=!1;var gt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Ot=gt&&"object"==typeof module&&module&&!module.nodeType&&module,wt=Ot&&Ot.exports===gt&&i.process,mt=function(){try{return Ot&&Ot.require&&Ot.require("util").types||wt&&wt.binding&&wt.binding("util")}catch(t){}}(),zt=mt&&mt.isTypedArray;const At=zt?(Pt=zt,function(t){return Pt(t)}):function(t){return at(t)&&dt(t.length)&&!!jt[d(t)]};var Pt,St=Object.prototype.hasOwnProperty;const xt=function(t,e){var n=r(t),o=!n&&lt(t),u=!n&&!o&&yt(t),a=!n&&!o&&!u&&At(t),c=n||o||u||a,i=c?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],s=i.length;for(var f in t)!e&&!St.call(t,f)||c&&("length"==f||u&&("offset"==f||"parent"==f)||a&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||_t(f,s))||i.push(f);return i};var Et=Object.prototype;const Tt=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Et)},$t=function(t,r){return function(e){return t(r(e))}},kt=$t(Object.keys,Object);var Ft=Object.prototype.hasOwnProperty;const Bt=function(t){return null!=t&&dt(t.length)&&!g(t)},Dt=function(t){return Bt(t)?xt(t):function(t){if(!Tt(t))return kt(t);var r=[];for(var e in Object(t))Ft.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)},Ut=function(t){return rt(t,Dt,ut)};var Ct=Object.prototype.hasOwnProperty;const It=F(f,"DataView"),Mt=F(f,"Promise"),Vt=F(f,"Set"),Lt=F(f,"WeakMap");var Nt="[object Map]",Rt="[object Promise]",Wt="[object Set]",Ht="[object WeakMap]",qt="[object DataView]",Gt=A(It),Xt=A(B),Jt=A(Mt),Kt=A(Vt),Qt=A(Lt),Yt=d;(It&&Yt(new It(new ArrayBuffer(1)))!=qt||B&&Yt(new B)!=Nt||Mt&&Yt(Mt.resolve())!=Rt||Vt&&Yt(new Vt)!=Wt||Lt&&Yt(new Lt)!=Ht)&&(Yt=function(t){var r=d(t),e="[object Object]"==r?t.constructor:void 0,n=e?A(e):"";if(n)switch(n){case Gt:return qt;case Xt:return Nt;case Jt:return Rt;case Kt:return Wt;case Qt:return Ht}return r});const Zt=Yt;var tr="[object Arguments]",rr="[object Array]",er="[object Object]",nr=Object.prototype.hasOwnProperty;const or=function(t,e,o,u,a,c){var i=r(t),s=r(e),f=i?rr:Zt(t),l=s?rr:Zt(e),p=(f=f==tr?er:f)==er,v=(l=l==tr?er:l)==er,h=f==l;if(h&&yt(t)){if(!yt(e))return!1;i=!0,p=!1}if(h&&!p)return c||(c=new W),i||At(t)?X(t,e,o,u,a,c):function(t,r,e,o,u,a,c){switch(e){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!a(new J(t),new J(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return n(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var i=K;case"[object Set]":var s=1&o;if(i||(i=Q),t.size!=r.size&&!s)return!1;var f=c.get(t);if(f)return f==r;o|=2,c.set(t,r);var l=X(i(t),i(r),o,u,a,c);return c.delete(t),l;case"[object Symbol]":if(Z)return Z.call(t)==Z.call(r)}return!1}(t,e,f,o,u,a,c);if(!(1&o)){var y=p&&nr.call(t,"__wrapped__"),b=v&&nr.call(e,"__wrapped__");if(y||b){var _=y?t.value():t,d=b?e.value():e;return c||(c=new W),a(_,d,o,u,c)}}return!!h&&(c||(c=new W),function(t,r,e,n,o,u){var a=1&e,c=Ut(t),i=c.length;if(i!=Ut(r).length&&!a)return!1;for(var s=i;s--;){var f=c[s];if(!(a?f in r:Ct.call(r,f)))return!1}var l=u.get(t),p=u.get(r);if(l&&p)return l==r&&p==t;var v=!0;u.set(t,r),u.set(r,t);for(var h=a;++s<i;){var y=t[f=c[s]],b=r[f];if(n)var _=a?n(b,y,f,r,t,u):n(y,b,f,t,r,u);if(!(void 0===_?y===b||o(y,b,e,n,u):_)){v=!1;break}h||(h="constructor"==f)}if(v&&!h){var d=t.constructor,j=r.constructor;d==j||!("constructor"in t)||!("constructor"in r)||"function"==typeof d&&d instanceof d&&"function"==typeof j&&j instanceof j||(v=!1)}return u.delete(t),u.delete(r),v}(t,e,o,u,a,c))},ur=function t(r,e,n,o,u){return r===e||(null==r||null==e||!at(r)&&!at(e)?r!=r&&e!=e:or(r,e,n,o,t,u))},ar=function(t){return t==t&&!j(t)},cr=function(t,r){return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},ir=function(t){var r=function(t){for(var r=Dt(t),e=r.length;e--;){var n=r[e],o=t[n];r[e]=[n,o,ar(o)]}return r}(t);return 1==r.length&&r[0][2]?cr(r[0][0],r[0][1]):function(e){return e===t||function(t,r,e,n){var o=e.length,u=o,a=!n;if(null==t)return!u;for(t=Object(t);o--;){var c=e[o];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++o<u;){var i=(c=e[o])[0],s=t[i],f=c[1];if(a&&c[2]){if(void 0===s&&!(i in t))return!1}else{var l=new W;if(n)var p=n(s,f,i,t,r,l);if(!(void 0===p?ur(f,s,3,n,l):p))return!1}}return!0}(e,t,r)}},sr=function(t){return"symbol"==typeof t||at(t)&&"[object Symbol]"==d(t)};var fr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lr=/^\w*$/;const pr=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!sr(t))||lr.test(t)||!fr.test(t)||null!=e&&t in Object(e)};function vr(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],u=e.cache;if(u.has(o))return u.get(o);var a=t.apply(this,n);return e.cache=u.set(o,a)||u,a};return e.cache=new(vr.Cache||N),e}vr.Cache=N;var hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,yr=/\\(\\)?/g;const br=(_r=vr((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(hr,(function(t,e,n,o){r.push(n?o.replace(yr,"$1"):e||t)})),r}),(function(t){return 500===dr.size&&dr.clear(),t})),dr=_r.cache,_r);var _r,dr,jr=l?l.prototype:void 0,gr=jr?jr.toString:void 0;const Or=function t(n){if("string"==typeof n)return n;if(r(n))return e(n,t)+"";if(sr(n))return gr?gr.call(n):"";var o=n+"";return"0"==o&&1/n==-1/0?"-0":o},wr=function(t){return null==t?"":Or(t)},mr=function(t,e){return r(t)?t:pr(t,e)?[t]:br(wr(t))},zr=function(t){if("string"==typeof t||sr(t))return t;var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Ar=function(t,r){for(var e=0,n=(r=mr(r,t)).length;null!=t&&e<n;)t=t[zr(r[e++])];return e&&e==n?t:void 0},Pr=function(t,r){return null!=t&&r in Object(t)},Sr=function(t,e){return null!=t&&function(t,e,n){for(var o=-1,u=(e=mr(e,t)).length,a=!1;++o<u;){var c=zr(e[o]);if(!(a=null!=t&&n(t,c)))break;t=t[c]}return a||++o!=u?a:!!(u=null==t?0:t.length)&&dt(u)&&_t(c,u)&&(r(t)||lt(t))}(t,e,Pr)},xr=function(t,r){return pr(t)&&ar(r)?cr(zr(t),r):function(e){var n=function(t,r,e){var n=null==t?void 0:Ar(t,r);return void 0===n?e:n}(e,t);return void 0===n&&n===r?Sr(e,t):ur(r,n,3)}},Er=function(t){return t},Tr=function(t){return pr(t)?(r=zr(t),function(t){return null==t?void 0:t[r]}):function(t){return function(r){return Ar(r,t)}}(t);var r},$r=function(){try{var t=F(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var kr=Object.prototype.hasOwnProperty;const Fr=function(t,r,e){var o=t[r];kr.call(t,r)&&n(o,e)&&(void 0!==e||r in t)||function(t,r,e){"__proto__"==r&&$r?$r(t,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[r]=e}(t,r,e)},Br=function(t,r,e,n){if(!j(t))return t;for(var o=-1,u=(r=mr(r,t)).length,a=u-1,c=t;null!=c&&++o<u;){var i=zr(r[o]),s=e;if("__proto__"===i||"constructor"===i||"prototype"===i)return t;if(o!=a){var f=c[i];void 0===(s=n?n(f,i,c):void 0)&&(s=j(f)?f:_t(r[o+1])?[]:{})}Fr(c,i,s),c=c[i]}return t},Dr=$t(Object.getPrototypeOf,Object),Ur=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)tt(r,ut(t)),t=Dr(t);return r}:et;var Cr=Object.prototype.hasOwnProperty;const Ir=function(t){if(!j(t))return function(t){var r=[];if(null!=t)for(var e in Object(t))r.push(e);return r}(t);var r=Tt(t),e=[];for(var n in t)("constructor"!=n||!r&&Cr.call(t,n))&&e.push(n);return e},Mr=function(t){return Bt(t)?xt(t,!0):Ir(t)},Vr=function(t,n){if(null==t)return{};var o,u=e(function(t){return rt(t,Mr,Ur)}(t),(function(t){return[t]}));return n="function"==typeof(o=n)?o:null==o?Er:"object"==typeof o?r(o)?xr(o[0],o[1]):ir(o):Tr(o),function(t,r,e){for(var n=-1,o=r.length,u={};++n<o;){var a=r[n],c=Ar(t,a);e(c,a)&&Br(u,mr(a,t),c)}return u}(t,u,(function(t,r){return n(t,r[0])}))};window.loadXpayECI18n=function(e,n){const o=t=>import(`./json/i18n-ec/${t}/strings.json`,{assert:{type:"json"}}),u=t=>import(`./json/i18n-shared-components/${t}/strings.json`,{assert:{type:"json"}}),a=r=>o(r).catch((()=>o(t(r)))).catch((()=>{Promise.resolve({})})),c=r=>u(r).catch((()=>u(t(r)))).catch((()=>{Promise.resolve({})}));return async(t=null)=>{const e=window.loadTimeData?.data_?.locale||navigator.language;return"en-US"===(n=e)||"en-us"===n||"en"===n?Promise.resolve():Promise.all([a(e),c(e)]).then((e=>{const n=e[0],o=e[1];let u;if(!u){const{loadTimeData:t}=window;u=t}n&&n.default&&u.overrideValues(r(t)?Vr(n.default,((r,e)=>-1!==t.indexOf(e))):n.default),o&&o.default&&u.overrideValues(r(t)?Vr(o.default,((r,e)=>-1!==t.indexOf(e))):o.default)}));var n}}()})();