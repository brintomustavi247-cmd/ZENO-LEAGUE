const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-wBp2r4jU.js","assets/index.esm-Dnj41LaA.js","assets/vendor-D3F3s8fL.js","assets/index.esm-CjAk_d4x.js","assets/Dashboard-BF846Nqc.js","assets/MatchCard-DFsEVMXy.css","assets/Matches-DNQd1iLB.js","assets/Matches-_ubqIMVg.css","assets/MatchDetail-B-cPiqH9.js","assets/Wallet-DQSf2y0q.js","assets/Leaderboard-DSv8NyTJ.js","assets/Notifications-Im-3YjmB.js","assets/Admin-D-aA33tj.js","assets/Admin-CtOfbulm.css","assets/Login-BSpaXb4r.js","assets/Profile-BZWoQ6wX.js","assets/Settings-4yZl4Jcj.js"])))=>i.map(i=>d[i]);
import{r as lf,g as uy,a as dy}from"./vendor-D3F3s8fL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Na={exports:{}},_s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function hy(){if(Fu)return _s;Fu=1;var n=lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(c,l,u){var p,m={},_=null,g=null;u!==void 0&&(_=""+u),l.key!==void 0&&(_=""+l.key),l.ref!==void 0&&(g=l.ref);for(p in l)r.call(l,p)&&!i.hasOwnProperty(p)&&(m[p]=l[p]);if(c&&c.defaultProps)for(p in l=c.defaultProps,l)m[p]===void 0&&(m[p]=l[p]);return{$$typeof:e,type:c,key:_,ref:g,props:m,_owner:s.current}}return _s.Fragment=t,_s.jsx=o,_s.jsxs=o,_s}var Uu;function fy(){return Uu||(Uu=1,Na.exports=hy()),Na.exports}var h=fy(),M=lf();const Oc=uy(M);var ji={},Bu;function py(){if(Bu)return ji;Bu=1;var n=dy();return ji.createRoot=n.createRoot,ji.hydrateRoot=n.hydrateRoot,ji}var my=py();const gy="modulepreload",yy=function(n){return"/"+n},zu={},qe=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let o=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");s=o(t.map(u=>{if(u=yy(u),u in zu)return;zu[u]=!0;const p=u.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":gy,p||(_.as="script"),_.crossOrigin="",_.href=u,l&&_.setAttribute("nonce",l),document.head.appendChild(_),p)return new Promise((g,b)=>{_.addEventListener("load",g),_.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},_y=()=>{};var Wu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},by=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,p=i>>2,m=(i&3)<<4|c>>4;let _=(c&15)<<2|u>>6,g=u&63;l||(g=64,o||(_=64)),r.push(t[p],t[m],t[_],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(uf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):by(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||u==null||m==null)throw new Iy;const _=i<<2|c>>4;if(r.push(_),u!==64){const g=c<<4&240|u>>2;if(r.push(g),m!==64){const b=u<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Iy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wy=function(n){const e=uf(n);return df.encodeByteArray(e,!0)},po=function(n){return wy(n).replace(/\./g,"")},hf=function(n){try{return df.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=()=>ff().__FIREBASE_DEFAULTS__,Ey=()=>{if(typeof process>"u"||typeof Wu>"u")return;const n=Wu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hf(n[1]);return e&&JSON.parse(e)},Bo=()=>{try{return _y()||Ty()||Ey()||vy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pf=n=>Bo()?.emulatorHosts?.[n],xy=n=>{const e=pf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mf=()=>Bo()?.config,gf=n=>Bo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[po(JSON.stringify(t)),po(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ry(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function yf(){const n=Bo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Py(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ky(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dy(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function _f(){return!yf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bf(){return!yf()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function If(){try{return typeof indexedDB=="object"}catch{return!1}}function Ny(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}function Fx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="FirebaseError";class Ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Vy,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Oy(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ft(s,c,r)}}function Oy(n,e){return n.replace(My,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const My=/\{\$([^}]+)}/g;function Ly(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(qu(i)&&qu(o)){if(!Jn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function qu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jy(n,e){const t=new Fy(n,e);return t.subscribe.bind(t)}class Fy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Uy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Va),s.error===void 0&&(s.error=Va),s.complete===void 0&&(s.complete=Va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Va(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=1e3,zy=2,Wy=14400*1e3,qy=.5;function Ux(n,e=By,t=zy){const r=e*Math.pow(t,n),s=Math.round(qy*r*(Math.random()-.5)*2);return Math.min(Wy,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wf(n){return(await fetch(n,{credentials:"include"})).ok}class Qn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Sy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gy(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ky(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ky(n){return n===On?void 0:n}function Gy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $y(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const Jy={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Qy=ne.INFO,Xy={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Yy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Xy[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=Qy,this._logHandler=Yy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Zy=(n,e)=>e.some(t=>n instanceof t);let $u,Ku;function e_(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t_(){return Ku||(Ku=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tf=new WeakMap,ec=new WeakMap,Ef=new WeakMap,Oa=new WeakMap,Lc=new WeakMap;function n_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(un(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Tf.set(t,n)}).catch(()=>{}),Lc.set(e,n),e}function r_(n){if(ec.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ec.set(n,e)}let tc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ec.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ef.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return un(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function s_(n){tc=n(tc)}function i_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ma(this),e,...t);return Ef.set(r,e.sort?e.sort():[e]),un(r)}:t_().includes(n)?function(...e){return n.apply(Ma(this),e),un(Tf.get(this))}:function(...e){return un(n.apply(Ma(this),e))}}function o_(n){return typeof n=="function"?i_(n):(n instanceof IDBTransaction&&r_(n),Zy(n,e_())?new Proxy(n,tc):n)}function un(n){if(n instanceof IDBRequest)return n_(n);if(Oa.has(n))return Oa.get(n);const e=o_(n);return e!==n&&(Oa.set(n,e),Lc.set(e,n)),e}const Ma=n=>Lc.get(n);function a_(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(un(o.result),l.oldVersion,l.newVersion,un(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const c_=["get","getKey","getAll","getAllKeys","count"],l_=["put","add","delete","clear"],La=new Map;function Gu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(La.get(e))return La.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=l_.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||c_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),s&&l.done]))[0]};return La.set(e,i),i}s_(n=>({...n,get:(e,t,r)=>Gu(e,t)||n.get(e,t,r),has:(e,t)=>!!Gu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(d_(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function d_(n){return n.getComponent()?.type==="VERSION"}const nc="@firebase/app",Hu="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Mc("@firebase/app"),h_="@firebase/app-compat",f_="@firebase/analytics-compat",p_="@firebase/analytics",m_="@firebase/app-check-compat",g_="@firebase/app-check",y_="@firebase/auth",__="@firebase/auth-compat",b_="@firebase/database",I_="@firebase/data-connect",w_="@firebase/database-compat",T_="@firebase/functions",E_="@firebase/functions-compat",v_="@firebase/installations",x_="@firebase/installations-compat",S_="@firebase/messaging",A_="@firebase/messaging-compat",R_="@firebase/performance",P_="@firebase/performance-compat",C_="@firebase/remote-config",k_="@firebase/remote-config-compat",D_="@firebase/storage",N_="@firebase/storage-compat",V_="@firebase/firestore",O_="@firebase/ai",M_="@firebase/firestore-compat",L_="firebase",j_="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="[DEFAULT]",F_={[nc]:"fire-core",[h_]:"fire-core-compat",[p_]:"fire-analytics",[f_]:"fire-analytics-compat",[g_]:"fire-app-check",[m_]:"fire-app-check-compat",[y_]:"fire-auth",[__]:"fire-auth-compat",[b_]:"fire-rtdb",[I_]:"fire-data-connect",[w_]:"fire-rtdb-compat",[T_]:"fire-fn",[E_]:"fire-fn-compat",[v_]:"fire-iid",[x_]:"fire-iid-compat",[S_]:"fire-fcm",[A_]:"fire-fcm-compat",[R_]:"fire-perf",[P_]:"fire-perf-compat",[C_]:"fire-rc",[k_]:"fire-rc-compat",[D_]:"fire-gcs",[N_]:"fire-gcs-compat",[V_]:"fire-fst",[M_]:"fire-fst-compat",[O_]:"fire-vertex","fire-js":"fire-js",[L_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map,U_=new Map,sc=new Map;function Ju(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kr(n){const e=n.name;if(sc.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,n);for(const t of mo.values())Ju(t,n);for(const t of U_.values())Ju(t,n);return!0}function jc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function at(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new ii("app","Firebase",B_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=j_;function vf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:rc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw dn.create("bad-app-name",{appName:String(s)});if(t||(t=mf()),!t)throw dn.create("no-options");const i=mo.get(s);if(i){if(Jn(t,i.options)&&Jn(r,i.config))return i;throw dn.create("duplicate-app",{appName:s})}const o=new Hy(s);for(const l of sc.values())o.addComponent(l);const c=new z_(t,r,o);return mo.set(s,c),c}function xf(n=rc){const e=mo.get(n);if(!e&&n===rc&&mf())return vf();if(!e)throw dn.create("no-app",{appName:n});return e}function hn(n,e,t){let r=F_[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(o.join(" "));return}kr(new Qn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_="firebase-heartbeat-database",q_=1,Ws="firebase-heartbeat-store";let ja=null;function Sf(){return ja||(ja=a_(W_,q_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ws)}catch(t){console.warn(t)}}}}).catch(n=>{throw dn.create("idb-open",{originalErrorMessage:n.message})})),ja}async function $_(n){try{const t=(await Sf()).transaction(Ws),r=await t.objectStore(Ws).get(Af(n));return await t.done,r}catch(e){if(e instanceof Ft)Nt.warn(e.message);else{const t=dn.create("idb-get",{originalErrorMessage:e?.message});Nt.warn(t.message)}}}async function Qu(n,e){try{const r=(await Sf()).transaction(Ws,"readwrite");await r.objectStore(Ws).put(e,Af(n)),await r.done}catch(t){if(t instanceof Ft)Nt.warn(t.message);else{const r=dn.create("idb-set",{originalErrorMessage:t?.message});Nt.warn(r.message)}}}function Af(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=1024,G_=30;class H_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Q_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xu();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>G_){const s=X_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Nt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xu(),{heartbeatsToSend:t,unsentEntries:r}=J_(this._heartbeatsCache.heartbeats),s=po(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Nt.warn(e),""}}}function Xu(){return new Date().toISOString().substring(0,10)}function J_(n,e=K_){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Yu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Q_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return If()?Ny().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $_(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yu(n){return po(JSON.stringify({version:2,heartbeats:n})).length}function X_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n){kr(new Qn("platform-logger",e=>new u_(e),"PRIVATE")),kr(new Qn("heartbeat",e=>new H_(e),"PRIVATE")),hn(nc,Hu,n),hn(nc,Hu,"esm2020"),hn("fire-js","")}Y_("");var Z_="firebase",e0="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(Z_,e0,"app");var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fn,Rf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,I){function v(){}v.prototype=I.prototype,x.F=I.prototype,x.prototype=new v,x.prototype.constructor=x,x.D=function(A,w,S){for(var T=Array(arguments.length-2),le=2;le<arguments.length;le++)T[le-2]=arguments[le];return I.prototype[w].apply(A,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,I,v){v||(v=0);const A=Array(16);if(typeof I=="string")for(var w=0;w<16;++w)A[w]=I.charCodeAt(v++)|I.charCodeAt(v++)<<8|I.charCodeAt(v++)<<16|I.charCodeAt(v++)<<24;else for(w=0;w<16;++w)A[w]=I[v++]|I[v++]<<8|I[v++]<<16|I[v++]<<24;I=x.g[0],v=x.g[1],w=x.g[2];let S=x.g[3],T;T=I+(S^v&(w^S))+A[0]+3614090360&4294967295,I=v+(T<<7&4294967295|T>>>25),T=S+(w^I&(v^w))+A[1]+3905402710&4294967295,S=I+(T<<12&4294967295|T>>>20),T=w+(v^S&(I^v))+A[2]+606105819&4294967295,w=S+(T<<17&4294967295|T>>>15),T=v+(I^w&(S^I))+A[3]+3250441966&4294967295,v=w+(T<<22&4294967295|T>>>10),T=I+(S^v&(w^S))+A[4]+4118548399&4294967295,I=v+(T<<7&4294967295|T>>>25),T=S+(w^I&(v^w))+A[5]+1200080426&4294967295,S=I+(T<<12&4294967295|T>>>20),T=w+(v^S&(I^v))+A[6]+2821735955&4294967295,w=S+(T<<17&4294967295|T>>>15),T=v+(I^w&(S^I))+A[7]+4249261313&4294967295,v=w+(T<<22&4294967295|T>>>10),T=I+(S^v&(w^S))+A[8]+1770035416&4294967295,I=v+(T<<7&4294967295|T>>>25),T=S+(w^I&(v^w))+A[9]+2336552879&4294967295,S=I+(T<<12&4294967295|T>>>20),T=w+(v^S&(I^v))+A[10]+4294925233&4294967295,w=S+(T<<17&4294967295|T>>>15),T=v+(I^w&(S^I))+A[11]+2304563134&4294967295,v=w+(T<<22&4294967295|T>>>10),T=I+(S^v&(w^S))+A[12]+1804603682&4294967295,I=v+(T<<7&4294967295|T>>>25),T=S+(w^I&(v^w))+A[13]+4254626195&4294967295,S=I+(T<<12&4294967295|T>>>20),T=w+(v^S&(I^v))+A[14]+2792965006&4294967295,w=S+(T<<17&4294967295|T>>>15),T=v+(I^w&(S^I))+A[15]+1236535329&4294967295,v=w+(T<<22&4294967295|T>>>10),T=I+(w^S&(v^w))+A[1]+4129170786&4294967295,I=v+(T<<5&4294967295|T>>>27),T=S+(v^w&(I^v))+A[6]+3225465664&4294967295,S=I+(T<<9&4294967295|T>>>23),T=w+(I^v&(S^I))+A[11]+643717713&4294967295,w=S+(T<<14&4294967295|T>>>18),T=v+(S^I&(w^S))+A[0]+3921069994&4294967295,v=w+(T<<20&4294967295|T>>>12),T=I+(w^S&(v^w))+A[5]+3593408605&4294967295,I=v+(T<<5&4294967295|T>>>27),T=S+(v^w&(I^v))+A[10]+38016083&4294967295,S=I+(T<<9&4294967295|T>>>23),T=w+(I^v&(S^I))+A[15]+3634488961&4294967295,w=S+(T<<14&4294967295|T>>>18),T=v+(S^I&(w^S))+A[4]+3889429448&4294967295,v=w+(T<<20&4294967295|T>>>12),T=I+(w^S&(v^w))+A[9]+568446438&4294967295,I=v+(T<<5&4294967295|T>>>27),T=S+(v^w&(I^v))+A[14]+3275163606&4294967295,S=I+(T<<9&4294967295|T>>>23),T=w+(I^v&(S^I))+A[3]+4107603335&4294967295,w=S+(T<<14&4294967295|T>>>18),T=v+(S^I&(w^S))+A[8]+1163531501&4294967295,v=w+(T<<20&4294967295|T>>>12),T=I+(w^S&(v^w))+A[13]+2850285829&4294967295,I=v+(T<<5&4294967295|T>>>27),T=S+(v^w&(I^v))+A[2]+4243563512&4294967295,S=I+(T<<9&4294967295|T>>>23),T=w+(I^v&(S^I))+A[7]+1735328473&4294967295,w=S+(T<<14&4294967295|T>>>18),T=v+(S^I&(w^S))+A[12]+2368359562&4294967295,v=w+(T<<20&4294967295|T>>>12),T=I+(v^w^S)+A[5]+4294588738&4294967295,I=v+(T<<4&4294967295|T>>>28),T=S+(I^v^w)+A[8]+2272392833&4294967295,S=I+(T<<11&4294967295|T>>>21),T=w+(S^I^v)+A[11]+1839030562&4294967295,w=S+(T<<16&4294967295|T>>>16),T=v+(w^S^I)+A[14]+4259657740&4294967295,v=w+(T<<23&4294967295|T>>>9),T=I+(v^w^S)+A[1]+2763975236&4294967295,I=v+(T<<4&4294967295|T>>>28),T=S+(I^v^w)+A[4]+1272893353&4294967295,S=I+(T<<11&4294967295|T>>>21),T=w+(S^I^v)+A[7]+4139469664&4294967295,w=S+(T<<16&4294967295|T>>>16),T=v+(w^S^I)+A[10]+3200236656&4294967295,v=w+(T<<23&4294967295|T>>>9),T=I+(v^w^S)+A[13]+681279174&4294967295,I=v+(T<<4&4294967295|T>>>28),T=S+(I^v^w)+A[0]+3936430074&4294967295,S=I+(T<<11&4294967295|T>>>21),T=w+(S^I^v)+A[3]+3572445317&4294967295,w=S+(T<<16&4294967295|T>>>16),T=v+(w^S^I)+A[6]+76029189&4294967295,v=w+(T<<23&4294967295|T>>>9),T=I+(v^w^S)+A[9]+3654602809&4294967295,I=v+(T<<4&4294967295|T>>>28),T=S+(I^v^w)+A[12]+3873151461&4294967295,S=I+(T<<11&4294967295|T>>>21),T=w+(S^I^v)+A[15]+530742520&4294967295,w=S+(T<<16&4294967295|T>>>16),T=v+(w^S^I)+A[2]+3299628645&4294967295,v=w+(T<<23&4294967295|T>>>9),T=I+(w^(v|~S))+A[0]+4096336452&4294967295,I=v+(T<<6&4294967295|T>>>26),T=S+(v^(I|~w))+A[7]+1126891415&4294967295,S=I+(T<<10&4294967295|T>>>22),T=w+(I^(S|~v))+A[14]+2878612391&4294967295,w=S+(T<<15&4294967295|T>>>17),T=v+(S^(w|~I))+A[5]+4237533241&4294967295,v=w+(T<<21&4294967295|T>>>11),T=I+(w^(v|~S))+A[12]+1700485571&4294967295,I=v+(T<<6&4294967295|T>>>26),T=S+(v^(I|~w))+A[3]+2399980690&4294967295,S=I+(T<<10&4294967295|T>>>22),T=w+(I^(S|~v))+A[10]+4293915773&4294967295,w=S+(T<<15&4294967295|T>>>17),T=v+(S^(w|~I))+A[1]+2240044497&4294967295,v=w+(T<<21&4294967295|T>>>11),T=I+(w^(v|~S))+A[8]+1873313359&4294967295,I=v+(T<<6&4294967295|T>>>26),T=S+(v^(I|~w))+A[15]+4264355552&4294967295,S=I+(T<<10&4294967295|T>>>22),T=w+(I^(S|~v))+A[6]+2734768916&4294967295,w=S+(T<<15&4294967295|T>>>17),T=v+(S^(w|~I))+A[13]+1309151649&4294967295,v=w+(T<<21&4294967295|T>>>11),T=I+(w^(v|~S))+A[4]+4149444226&4294967295,I=v+(T<<6&4294967295|T>>>26),T=S+(v^(I|~w))+A[11]+3174756917&4294967295,S=I+(T<<10&4294967295|T>>>22),T=w+(I^(S|~v))+A[2]+718787259&4294967295,w=S+(T<<15&4294967295|T>>>17),T=v+(S^(w|~I))+A[9]+3951481745&4294967295,x.g[0]=x.g[0]+I&4294967295,x.g[1]=x.g[1]+(w+(T<<21&4294967295|T>>>11))&4294967295,x.g[2]=x.g[2]+w&4294967295,x.g[3]=x.g[3]+S&4294967295}r.prototype.v=function(x,I){I===void 0&&(I=x.length);const v=I-this.blockSize,A=this.C;let w=this.h,S=0;for(;S<I;){if(w==0)for(;S<=v;)s(this,x,S),S+=this.blockSize;if(typeof x=="string"){for(;S<I;)if(A[w++]=x.charCodeAt(S++),w==this.blockSize){s(this,A),w=0;break}}else for(;S<I;)if(A[w++]=x[S++],w==this.blockSize){s(this,A),w=0;break}}this.h=w,this.o+=I},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var I=1;I<x.length-8;++I)x[I]=0;I=this.o*8;for(var v=x.length-8;v<x.length;++v)x[v]=I&255,I/=256;for(this.v(x),x=Array(16),I=0,v=0;v<4;++v)for(let A=0;A<32;A+=8)x[I++]=this.g[v]>>>A&255;return x};function i(x,I){var v=c;return Object.prototype.hasOwnProperty.call(v,x)?v[x]:v[x]=I(x)}function o(x,I){this.h=I;const v=[];let A=!0;for(let w=x.length-1;w>=0;w--){const S=x[w]|0;A&&S==I||(v[w]=S,A=!1)}this.g=v}var c={};function l(x){return-128<=x&&x<128?i(x,function(I){return new o([I|0],I<0?-1:0)}):new o([x|0],x<0?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return m;if(x<0)return E(u(-x));const I=[];let v=1;for(let A=0;x>=v;A++)I[A]=x/v|0,v*=4294967296;return new o(I,0)}function p(x,I){if(x.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(x.charAt(0)=="-")return E(p(x.substring(1),I));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(I,8));let A=m;for(let S=0;S<x.length;S+=8){var w=Math.min(8,x.length-S);const T=parseInt(x.substring(S,S+w),I);w<8?(w=u(Math.pow(I,w)),A=A.j(w).add(u(T))):(A=A.j(v),A=A.add(u(T)))}return A}var m=l(0),_=l(1),g=l(16777216);n=o.prototype,n.m=function(){if(C(this))return-E(this).m();let x=0,I=1;for(let v=0;v<this.g.length;v++){const A=this.i(v);x+=(A>=0?A:4294967296+A)*I,I*=4294967296}return x},n.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(b(this))return"0";if(C(this))return"-"+E(this).toString(x);const I=u(Math.pow(x,6));var v=this;let A="";for(;;){const w=z(v,I).g;v=N(v,w.j(I));let S=((v.g.length>0?v.g[0]:v.h)>>>0).toString(x);if(v=w,b(v))return S+A;for(;S.length<6;)S="0"+S;A=S+A}},n.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function b(x){if(x.h!=0)return!1;for(let I=0;I<x.g.length;I++)if(x.g[I]!=0)return!1;return!0}function C(x){return x.h==-1}n.l=function(x){return x=N(this,x),C(x)?-1:b(x)?0:1};function E(x){const I=x.g.length,v=[];for(let A=0;A<I;A++)v[A]=~x.g[A];return new o(v,~x.h).add(_)}n.abs=function(){return C(this)?E(this):this},n.add=function(x){const I=Math.max(this.g.length,x.g.length),v=[];let A=0;for(let w=0;w<=I;w++){let S=A+(this.i(w)&65535)+(x.i(w)&65535),T=(S>>>16)+(this.i(w)>>>16)+(x.i(w)>>>16);A=T>>>16,S&=65535,T&=65535,v[w]=T<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function N(x,I){return x.add(E(I))}n.j=function(x){if(b(this)||b(x))return m;if(C(this))return C(x)?E(this).j(E(x)):E(E(this).j(x));if(C(x))return E(this.j(E(x)));if(this.l(g)<0&&x.l(g)<0)return u(this.m()*x.m());const I=this.g.length+x.g.length,v=[];for(var A=0;A<2*I;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<x.g.length;w++){const S=this.i(A)>>>16,T=this.i(A)&65535,le=x.i(w)>>>16,fe=x.i(w)&65535;v[2*A+2*w]+=T*fe,V(v,2*A+2*w),v[2*A+2*w+1]+=S*fe,V(v,2*A+2*w+1),v[2*A+2*w+1]+=T*le,V(v,2*A+2*w+1),v[2*A+2*w+2]+=S*le,V(v,2*A+2*w+2)}for(x=0;x<I;x++)v[x]=v[2*x+1]<<16|v[2*x];for(x=I;x<2*I;x++)v[x]=0;return new o(v,0)};function V(x,I){for(;(x[I]&65535)!=x[I];)x[I+1]+=x[I]>>>16,x[I]&=65535,I++}function j(x,I){this.g=x,this.h=I}function z(x,I){if(b(I))throw Error("division by zero");if(b(x))return new j(m,m);if(C(x))return I=z(E(x),I),new j(E(I.g),E(I.h));if(C(I))return I=z(x,E(I)),new j(E(I.g),I.h);if(x.g.length>30){if(C(x)||C(I))throw Error("slowDivide_ only works with positive integers.");for(var v=_,A=I;A.l(x)<=0;)v=Q(v),A=Q(A);var w=J(v,1),S=J(A,1);for(A=J(A,2),v=J(v,2);!b(A);){var T=S.add(A);T.l(x)<=0&&(w=w.add(v),S=T),A=J(A,1),v=J(v,1)}return I=N(x,w.j(I)),new j(w,I)}for(w=m;x.l(I)>=0;){for(v=Math.max(1,Math.floor(x.m()/I.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),S=u(v),T=S.j(I);C(T)||T.l(x)>0;)v-=A,S=u(v),T=S.j(I);b(S)&&(S=_),w=w.add(S),x=N(x,T)}return new j(w,x)}n.B=function(x){return z(this,x).h},n.and=function(x){const I=Math.max(this.g.length,x.g.length),v=[];for(let A=0;A<I;A++)v[A]=this.i(A)&x.i(A);return new o(v,this.h&x.h)},n.or=function(x){const I=Math.max(this.g.length,x.g.length),v=[];for(let A=0;A<I;A++)v[A]=this.i(A)|x.i(A);return new o(v,this.h|x.h)},n.xor=function(x){const I=Math.max(this.g.length,x.g.length),v=[];for(let A=0;A<I;A++)v[A]=this.i(A)^x.i(A);return new o(v,this.h^x.h)};function Q(x){const I=x.g.length+1,v=[];for(let A=0;A<I;A++)v[A]=x.i(A)<<1|x.i(A-1)>>>31;return new o(v,x.h)}function J(x,I){const v=I>>5;I%=32;const A=x.g.length-v,w=[];for(let S=0;S<A;S++)w[S]=I>0?x.i(S+v)>>>I|x.i(S+v+1)<<32-I:x.i(S+v);return new o(w,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Rf=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=p,fn=o}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pf,xs,Cf,Ji,ic,kf,Df,Nf;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fi=="object"&&Fi];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in f))break e;f=f[P]}a=a[a.length-1],y=f[a],d=d(y),d!=y&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var f=[],y;for(y in d)Object.prototype.hasOwnProperty.call(d,y)&&f.push([y,d[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function l(a,d,f){return a.call.apply(a.bind,arguments)}function u(a,d,f){return u=l,u.apply(null,arguments)}function p(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,d){function f(){}f.prototype=d.prototype,a.Z=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(y,P,k){for(var F=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)F[ee-2]=arguments[ee];return d.prototype[P].apply(y,F)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function g(a){const d=a.length;if(d>0){const f=Array(d);for(let y=0;y<d;y++)f[y]=a[y];return f}return[]}function b(a,d){for(let y=1;y<arguments.length;y++){const P=arguments[y];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const k=P.length||0;a.length=f+k;for(let F=0;F<k;F++)a[f+F]=P[F]}else a.push(P)}}class C{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function E(a){o.setTimeout(()=>{throw a},0)}function N(){var a=x;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class V{constructor(){this.h=this.g=null}add(d,f){const y=j.get();y.set(d,f),this.h?this.h.next=y:this.g=y,this.h=y}}var j=new C(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,J=!1,x=new V,I=()=>{const a=Promise.resolve(void 0);Q=()=>{a.then(v)}};function v(){for(var a;a=N();){try{a.h.call(a.g)}catch(f){E(f)}var d=j;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}J=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function le(a,d){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}m(le,w),le.prototype.init=function(a,d){const f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&le.Z.h.call(this)},le.prototype.h=function(){le.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fe="closure_listenable_"+(Math.random()*1e6|0),Wt=0;function cr(a,d,f,y,P){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!y,this.ha=P,this.key=++Wt,this.da=this.fa=!1}function xn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ht(a,d,f){for(const y in a)d.call(f,a[y],y,a)}function Sn(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function An(a){const d={};for(const f in a)d[f]=a[f];return d}const lr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ei(a,d){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)a[f]=y[f];for(let k=0;k<lr.length;k++)f=lr[k],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function Zr(a){this.src=a,this.g={},this.h=0}Zr.prototype.add=function(a,d,f,y,P){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const F=vi(a,d,y,P);return F>-1?(d=a[F],f||(d.fa=!1)):(d=new cr(d,this.src,k,!!y,P),d.fa=f,a.push(d)),d};function es(a,d){const f=d.type;if(f in a.g){var y=a.g[f],P=Array.prototype.indexOf.call(y,d,void 0),k;(k=P>=0)&&Array.prototype.splice.call(y,P,1),k&&(xn(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function vi(a,d,f,y){for(let P=0;P<a.length;++P){const k=a[P];if(!k.da&&k.listener==d&&k.capture==!!f&&k.ha==y)return P}return-1}var ur="closure_lm_"+(Math.random()*1e6|0),qt={};function ts(a,d,f,y,P){if(Array.isArray(d)){for(let k=0;k<d.length;k++)ts(a,d[k],f,y,P);return null}return f=ql(f),a&&a[fe]?a.J(d,f,c(y)?!!y.capture:!1,P):xi(a,d,f,!1,y,P)}function xi(a,d,f,y,P,k){if(!d)throw Error("Invalid event type");const F=c(P)?!!P.capture:!!P;let ee=pa(a);if(ee||(a[ur]=ee=new Zr(a)),f=ee.add(d,f,y,F,k),f.proxy)return f;if(y=Z(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)S||(P=F),P===void 0&&(P=!1),a.addEventListener(d.toString(),y,P);else if(a.attachEvent)a.attachEvent(Wl(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Z(){function a(f){return d.call(a.src,a.listener,f)}const d=Lg;return a}function ue(a,d,f,y,P){if(Array.isArray(d))for(var k=0;k<d.length;k++)ue(a,d[k],f,y,P);else y=c(y)?!!y.capture:!!y,f=ql(f),a&&a[fe]?(a=a.i,k=String(d).toString(),k in a.g&&(d=a.g[k],f=vi(d,f,y,P),f>-1&&(xn(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete a.g[k],a.h--)))):a&&(a=pa(a))&&(d=a.g[d.toString()],a=-1,d&&(a=vi(d,f,y,P)),(f=a>-1?d[a]:null)&&dr(f))}function dr(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[fe])es(d.i,a);else{var f=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(f,y,a.capture):d.detachEvent?d.detachEvent(Wl(f),y):d.addListener&&d.removeListener&&d.removeListener(y),(f=pa(d))?(es(f,a),f.h==0&&(f.src=null,d[ur]=null)):xn(a)}}}function Wl(a){return a in qt?qt[a]:qt[a]="on"+a}function Lg(a,d){if(a.da)a=!0;else{d=new le(d,this);const f=a.listener,y=a.ha||a.src;a.fa&&dr(a),a=f.call(y,d)}return a}function pa(a){return a=a[ur],a instanceof Zr?a:null}var ma="__closure_events_fn_"+(Math.random()*1e9>>>0);function ql(a){return typeof a=="function"?a:(a[ma]||(a[ma]=function(d){return a.handleEvent(d)}),a[ma])}function Fe(){A.call(this),this.i=new Zr(this),this.M=this,this.G=null}m(Fe,A),Fe.prototype[fe]=!0,Fe.prototype.removeEventListener=function(a,d,f,y){ue(this,a,d,f,y)};function Ke(a,d){var f,y=a.G;if(y)for(f=[];y;y=y.G)f.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new w(d,a);else if(d instanceof w)d.target=d.target||a;else{var P=d;d=new w(y,a),Ei(d,P)}P=!0;let k,F;if(f)for(F=f.length-1;F>=0;F--)k=d.g=f[F],P=Si(k,y,!0,d)&&P;if(k=d.g=a,P=Si(k,y,!0,d)&&P,P=Si(k,y,!1,d)&&P,f)for(F=0;F<f.length;F++)k=d.g=f[F],P=Si(k,y,!1,d)&&P}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const f=a.g[d];for(let y=0;y<f.length;y++)xn(f[y]);delete a.g[d],a.h--}}this.G=null},Fe.prototype.J=function(a,d,f,y){return this.i.add(String(a),d,!1,f,y)},Fe.prototype.K=function(a,d,f,y){return this.i.add(String(a),d,!0,f,y)};function Si(a,d,f,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let P=!0;for(let k=0;k<d.length;++k){const F=d[k];if(F&&!F.da&&F.capture==f){const ee=F.listener,Re=F.ha||F.src;F.fa&&es(a.i,F),P=ee.call(Re,y)!==!1&&P}}return P&&!y.defaultPrevented}function jg(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function $l(a){a.g=jg(()=>{a.g=null,a.i&&(a.i=!1,$l(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Fg extends A{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:$l(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ns(a){A.call(this),this.h=a,this.g={}}m(ns,A);var Kl=[];function Gl(a){ht(a.g,function(d,f){this.g.hasOwnProperty(f)&&dr(d)},a),a.g={}}ns.prototype.N=function(){ns.Z.N.call(this),Gl(this)},ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ga=o.JSON.stringify,Ug=o.JSON.parse,Bg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Hl(){}function Jl(){}var rs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ya(){w.call(this,"d")}m(ya,w);function _a(){w.call(this,"c")}m(_a,w);var Rn={},Ql=null;function Ai(){return Ql=Ql||new Fe}Rn.Ia="serverreachability";function Xl(a){w.call(this,Rn.Ia,a)}m(Xl,w);function ss(a){const d=Ai();Ke(d,new Xl(d))}Rn.STAT_EVENT="statevent";function Yl(a,d){w.call(this,Rn.STAT_EVENT,a),this.stat=d}m(Yl,w);function Ge(a){const d=Ai();Ke(d,new Yl(d,a))}Rn.Ja="timingevent";function Zl(a,d){w.call(this,Rn.Ja,a),this.size=d}m(Zl,w);function is(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function os(){this.g=!0}os.prototype.ua=function(){this.g=!1};function zg(a,d,f,y,P,k){a.info(function(){if(a.g)if(k){var F="",ee=k.split("&");for(let he=0;he<ee.length;he++){var Re=ee[he].split("=");if(Re.length>1){const ke=Re[0];Re=Re[1];const bt=ke.split("_");F=bt.length>=2&&bt[1]=="type"?F+(ke+"="+Re+"&"):F+(ke+"=redacted&")}}}else F=null;else F=k;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+d+`
`+f+`
`+F})}function Wg(a,d,f,y,P,k,F){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+d+`
`+f+`
`+k+" "+F})}function hr(a,d,f,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+$g(a,f)+(y?" "+y:"")})}function qg(a,d){a.info(function(){return"TIMEOUT: "+d})}os.prototype.info=function(){};function $g(a,d){if(!a.g)return d;if(!d)return null;try{const k=JSON.parse(d);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var f=k[a];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var P=y[0];if(P!="noop"&&P!="stop"&&P!="close")for(let F=1;F<y.length;F++)y[F]=""}}}}return ga(k)}catch{return d}}var Ri={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tu;function ba(){}m(ba,Hl),ba.prototype.g=function(){return new XMLHttpRequest},tu=new ba;function as(a){return encodeURIComponent(String(a))}function Kg(a){var d=1;a=a.split(":");const f=[];for(;d>0&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function $t(a,d,f,y){this.j=a,this.i=d,this.l=f,this.S=y||1,this.V=new ns(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},Ia={};function wa(a,d,f){a.M=1,a.A=Ci(_t(d)),a.u=f,a.R=!0,su(a,null)}function su(a,d){a.F=Date.now(),Pi(a),a.B=_t(a.A);var f=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),yu(f.i,"t",y),a.C=0,f=a.j.L,a.h=new nu,a.g=Ou(a.j,f?d:null,!a.u),a.P>0&&(a.O=new Fg(u(a.Y,a,a.g),a.P)),d=a.V,f=a.g,y=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Kl[0]=P.toString()),P=Kl);for(let k=0;k<P.length;k++){const F=ts(f,P[k],y||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=a.J?An(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),ss(),zg(a.i,a.v,a.B,a.l,a.S,a.u)}$t.prototype.ba=function(a){a=a.target;const d=this.O;d&&Ht(a)==3?d.j():this.Y(a)},$t.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Ht(this.g),Re=this.g.ya(),he=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||vu(this.g)))){this.K||ee!=4||Re==7||(Re==8||he<=0?ss(3):ss(2)),Ta(this);var d=this.g.ca();this.X=d;var f=Gg(this);if(this.o=d==200,Wg(this.i,this.v,this.B,this.l,this.S,ee,d),this.o){if(this.U&&!this.L){t:{if(this.g){var y,P=this.g;if((y=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var k=y;break t}}k=null}if(a=k)hr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ea(this,a);else{this.o=!1,this.m=3,Ge(12),Pn(this),cs(this);break e}}if(this.R){a=!0;let ke;for(;!this.K&&this.C<f.length;)if(ke=Hg(this,f),ke==Ia){ee==4&&(this.m=4,Ge(14),a=!1),hr(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==ru){this.m=4,Ge(15),hr(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else hr(this.i,this.l,ke,null),Ea(this,ke);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||f.length!=0||this.h.h||(this.m=1,Ge(16),a=!1),this.o=this.o&&a,!a)hr(this.i,this.l,f,"[Invalid Chunked Response]"),Pn(this),cs(this);else if(f.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),ka(F),F.P=!0,Ge(11))}}else hr(this.i,this.l,f,null),Ea(this,f);ee==4&&Pn(this),this.o&&!this.K&&(ee==4?ku(this.j,this):(this.o=!1,Pi(this)))}else cy(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,Ge(12)):(this.m=0,Ge(13)),Pn(this),cs(this)}}}catch{}finally{}};function Gg(a){if(!iu(a))return a.g.la();const d=vu(a.g);if(d==="")return"";let f="";const y=d.length,P=Ht(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Pn(a),cs(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<y;k++)a.h.h=!0,f+=a.h.i.decode(d[k],{stream:!(P&&k==y-1)});return d.length=0,a.h.g+=f,a.C=0,a.h.g}function iu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Hg(a,d){var f=a.C,y=d.indexOf(`
`,f);return y==-1?Ia:(f=Number(d.substring(f,y)),isNaN(f)?ru:(y+=1,y+f>d.length?Ia:(d=d.slice(y,y+f),a.C=y+f,d)))}$t.prototype.cancel=function(){this.K=!0,Pn(this)};function Pi(a){a.T=Date.now()+a.H,ou(a,a.H)}function ou(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=is(u(a.aa,a),d)}function Ta(a){a.D&&(o.clearTimeout(a.D),a.D=null)}$t.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(qg(this.i,this.B),this.M!=2&&(ss(),Ge(17)),Pn(this),this.m=2,cs(this)):ou(this,this.T-a)};function cs(a){a.j.I==0||a.K||ku(a.j,a)}function Pn(a){Ta(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Gl(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Ea(a,d){try{var f=a.j;if(f.I!=0&&(f.g==a||va(f.h,a))){if(!a.L&&va(f.h,a)&&f.I==3){try{var y=f.Ba.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Oi(f),Ni(f);else break e;Ca(f),Ge(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=is(u(f.Va,f),6e3));lu(f.h)<=1&&f.ta&&(f.ta=void 0)}else kn(f,11)}else if((a.L||f.g==a)&&Oi(f),!T(d))for(P=f.Ba.g.parse(d),d=0;d<P.length;d++){let he=P[d];const ke=he[0];if(!(ke<=f.K))if(f.K=ke,he=he[1],f.I==2)if(he[0]=="c"){f.M=he[1],f.ba=he[2];const bt=he[3];bt!=null&&(f.ka=bt,f.j.info("VER="+f.ka));const Dn=he[4];Dn!=null&&(f.za=Dn,f.j.info("SVER="+f.za));const Jt=he[5];Jt!=null&&typeof Jt=="number"&&Jt>0&&(y=1.5*Jt,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Qt=a.g;if(Qt){const Li=Qt.g?Qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var k=y.h;k.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(xa(k,k.h),k.h=null))}if(y.G){const Da=Qt.g?Qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(y.wa=Da,pe(y.J,y.G,Da))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var F=a;if(y.na=Vu(y,y.L?y.ba:null,y.W),F.L){uu(y.h,F);var ee=F,Re=y.O;Re&&(ee.H=Re),ee.D&&(Ta(ee),Pi(ee)),y.g=F}else Pu(y);f.i.length>0&&Vi(f)}else he[0]!="stop"&&he[0]!="close"||kn(f,7);else f.I==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?kn(f,7):Pa(f):he[0]!="noop"&&f.l&&f.l.qa(he),f.A=0)}}ss(4)}catch{}}var Jg=class{constructor(a,d){this.g=a,this.map=d}};function au(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function lu(a){return a.h?1:a.g?a.g.size:0}function va(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function xa(a,d){a.g?a.g.add(d):a.h=d}function uu(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}au.prototype.cancel=function(){if(this.i=du(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function du(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.G);return d}return g(a.i)}var hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qg(a,d){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const y=a[f].indexOf("=");let P,k=null;y>=0?(P=a[f].substring(0,y),k=a[f].substring(y+1)):P=a[f],d(P,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Kt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof Kt?(this.l=a.l,ls(this,a.j),this.o=a.o,this.g=a.g,us(this,a.u),this.h=a.h,Sa(this,_u(a.i)),this.m=a.m):a&&(d=String(a).match(hu))?(this.l=!1,ls(this,d[1]||"",!0),this.o=ds(d[2]||""),this.g=ds(d[3]||"",!0),us(this,d[4]),this.h=ds(d[5]||"",!0),Sa(this,d[6]||"",!0),this.m=ds(d[7]||"")):(this.l=!1,this.i=new fs(null,this.l))}Kt.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(hs(d,fu,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(hs(d,fu,!0),"@"),a.push(as(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(hs(f,f.charAt(0)=="/"?Zg:Yg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",hs(f,ty)),a.join("")},Kt.prototype.resolve=function(a){const d=_t(this);let f=!!a.j;f?ls(d,a.j):f=!!a.o,f?d.o=a.o:f=!!a.g,f?d.g=a.g:f=a.u!=null;var y=a.h;if(f)us(d,a.u);else if(f=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var P=d.h.lastIndexOf("/");P!=-1&&(y=d.h.slice(0,P+1)+y)}if(P=y,P==".."||P==".")y="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){y=P.lastIndexOf("/",0)==0,P=P.split("/");const k=[];for(let F=0;F<P.length;){const ee=P[F++];ee=="."?y&&F==P.length&&k.push(""):ee==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),y&&F==P.length&&k.push("")):(k.push(ee),y=!0)}y=k.join("/")}else y=P}return f?d.h=y:f=a.i.toString()!=="",f?Sa(d,_u(a.i)):f=!!a.m,f&&(d.m=a.m),d};function _t(a){return new Kt(a)}function ls(a,d,f){a.j=f?ds(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function us(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Sa(a,d,f){d instanceof fs?(a.i=d,ny(a.i,a.l)):(f||(d=hs(d,ey)),a.i=new fs(d,a.l))}function pe(a,d,f){a.i.set(d,f)}function Ci(a){return pe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ds(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hs(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,Xg),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fu=/[#\/\?@]/g,Yg=/[#\?:]/g,Zg=/[#\?]/g,ey=/[#\?@]/g,ty=/#/g;function fs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Cn(a){a.g||(a.g=new Map,a.h=0,a.i&&Qg(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}n=fs.prototype,n.add=function(a,d){Cn(this),this.i=null,a=fr(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function pu(a,d){Cn(a),d=fr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function mu(a,d){return Cn(a),d=fr(a,d),a.g.has(d)}n.forEach=function(a,d){Cn(this),this.g.forEach(function(f,y){f.forEach(function(P){a.call(d,P,y,this)},this)},this)};function gu(a,d){Cn(a);let f=[];if(typeof d=="string")mu(a,d)&&(f=f.concat(a.g.get(fr(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)f=f.concat(a[d]);return f}n.set=function(a,d){return Cn(this),this.i=null,a=fr(this,a),mu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},n.get=function(a,d){return a?(a=gu(this,a),a.length>0?String(a[0]):d):d};function yu(a,d,f){pu(a,d),f.length>0&&(a.i=null,a.g.set(fr(a,d),g(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let y=0;y<d.length;y++){var f=d[y];const P=as(f);f=gu(this,f);for(let k=0;k<f.length;k++){let F=P;f[k]!==""&&(F+="="+as(f[k])),a.push(F)}}return this.i=a.join("&")};function _u(a){const d=new fs;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function fr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ny(a,d){d&&!a.j&&(Cn(a),a.i=null,a.g.forEach(function(f,y){const P=y.toLowerCase();y!=P&&(pu(this,y),yu(this,P,f))},a)),a.j=d}function ry(a,d){const f=new os;if(o.Image){const y=new Image;y.onload=p(Gt,f,"TestLoadImage: loaded",!0,d,y),y.onerror=p(Gt,f,"TestLoadImage: error",!1,d,y),y.onabort=p(Gt,f,"TestLoadImage: abort",!1,d,y),y.ontimeout=p(Gt,f,"TestLoadImage: timeout",!1,d,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function sy(a,d){const f=new os,y=new AbortController,P=setTimeout(()=>{y.abort(),Gt(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(k=>{clearTimeout(P),k.ok?Gt(f,"TestPingServer: ok",!0,d):Gt(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),Gt(f,"TestPingServer: error",!1,d)})}function Gt(a,d,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function iy(){this.g=new Bg}function Aa(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Aa,Hl),Aa.prototype.g=function(){return new ki(this.i,this.h)};function ki(a,d){Fe.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ki,Fe),n=ki.prototype,n.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,ms(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ms(this)),this.g&&(this.readyState=3,ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function bu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ps(this):ms(this),this.readyState==3&&bu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ps(this))},n.Na=function(a){this.g&&(this.response=a,ps(this))},n.ga=function(){this.g&&ps(this)};function ps(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ms(a)}n.setRequestHeader=function(a,d){this.A.append(a,d)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Iu(a){let d="";return ht(a,function(f,y){d+=y,d+=":",d+=f,d+=`\r
`}),d}function Ra(a,d,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Iu(f),typeof a=="string"?f!=null&&as(f):pe(a,d,f))}function be(a){Fe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(be,Fe);var oy=/^https?$/i,ay=["POST","PUT"];n=be.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,d,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tu.g(),this.g.onreadystatechange=_(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(k){wu(this,k);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const k of y.keys())f.set(k,y.get(k));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ay,d,void 0)>=0)||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,F]of f)this.g.setRequestHeader(k,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){wu(this,k)}};function wu(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Tu(a),Di(a)}function Tu(a){a.A||(a.A=!0,Ke(a,"complete"),Ke(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ke(this,"complete"),Ke(this,"abort"),Di(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Di(this,!0)),be.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Eu(this):this.Xa())},n.Xa=function(){Eu(this)};function Eu(a){if(a.h&&typeof i<"u"){if(a.v&&Ht(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ke(a,"readystatechange"),Ht(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var y;if(y=k===0){let F=String(a.D).match(hu)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),y=!oy.test(F?F.toLowerCase():"")}f=y}if(f)Ke(a,"complete"),Ke(a,"success");else{a.o=6;try{var P=Ht(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Tu(a)}}finally{Di(a)}}}}function Di(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,d||Ke(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ht(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Ht(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ug(d)}};function vu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cy(a){const d={};a=(a.g&&Ht(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var f=Kg(a[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=d[P]||[];d[P]=k,k.push(f)}Sn(d,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function xu(a){this.za=0,this.i=[],this.j=new os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gs("baseRetryDelayMs",5e3,a),this.Za=gs("retryDelaySeedMs",1e4,a),this.Ta=gs("forwardChannelMaxRetries",2,a),this.va=gs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new au(a&&a.concurrentRequestLimit),this.Ba=new iy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=xu.prototype,n.ka=8,n.I=1,n.connect=function(a,d,f,y){Ge(0),this.W=a,this.H=d||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Vu(this,null,this.W),Vi(this)};function Pa(a){if(Su(a),a.I==3){var d=a.V++,f=_t(a.J);if(pe(f,"SID",a.M),pe(f,"RID",d),pe(f,"TYPE","terminate"),ys(a,f),d=new $t(a,a.j,d),d.M=2,d.A=Ci(_t(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=Ou(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Pi(d)}Nu(a)}function Ni(a){a.g&&(ka(a),a.g.cancel(),a.g=null)}function Su(a){Ni(a),a.v&&(o.clearTimeout(a.v),a.v=null),Oi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Vi(a){if(!cu(a.h)&&!a.m){a.m=!0;var d=a.Ea;Q||I(),J||(Q(),J=!0),x.add(d,a),a.D=0}}function ly(a,d){return lu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=is(u(a.Ea,a,d),Du(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new $t(this,this.j,a);let k=this.o;if(this.U&&(k?(k=An(k),Ei(k,this.U)):k=this.U),this.u!==null||this.R||(P.J=k,k=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Ru(this,P,d),f=_t(this.J),pe(f,"RID",a),pe(f,"CVER",22),this.G&&pe(f,"X-HTTP-Session-Id",this.G),ys(this,f),k&&(this.R?d="headers="+as(Iu(k))+"&"+d:this.u&&Ra(f,this.u,k)),xa(this.h,P),this.Ra&&pe(f,"TYPE","init"),this.S?(pe(f,"$req",d),pe(f,"SID","null"),P.U=!0,wa(P,f,null)):wa(P,f,d),this.I=2}}else this.I==3&&(a?Au(this,a):this.i.length==0||cu(this.h)||Au(this))};function Au(a,d){var f;d?f=d.l:f=a.V++;const y=_t(a.J);pe(y,"SID",a.M),pe(y,"RID",f),pe(y,"AID",a.K),ys(a,y),a.u&&a.o&&Ra(y,a.u,a.o),f=new $t(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Ru(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),xa(a.h,f),wa(f,y,d)}function ys(a,d){a.H&&ht(a.H,function(f,y){pe(d,y,f)}),a.l&&ht({},function(f,y){pe(d,y,f)})}function Ru(a,d,f){f=Math.min(a.i.length,f);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var P=a.i;let ee=-1;for(;;){const Re=["count="+f];ee==-1?f>0?(ee=P[0].g,Re.push("ofs="+ee)):ee=0:Re.push("ofs="+ee);let he=!0;for(let ke=0;ke<f;ke++){var k=P[ke].g;const bt=P[ke].map;if(k-=ee,k<0)ee=Math.max(0,P[ke].g-100),he=!1;else try{k="req"+k+"_"||"";try{var F=bt instanceof Map?bt:Object.entries(bt);for(const[Dn,Jt]of F){let Qt=Jt;c(Jt)&&(Qt=ga(Jt)),Re.push(k+Dn+"="+encodeURIComponent(Qt))}}catch(Dn){throw Re.push(k+"type="+encodeURIComponent("_badmap")),Dn}}catch{y&&y(bt)}}if(he){F=Re.join("&");break e}}F=void 0}return a=a.i.splice(0,f),d.G=a,F}function Pu(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;Q||I(),J||(Q(),J=!0),x.add(d,a),a.A=0}}function Ca(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=is(u(a.Da,a),Du(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=is(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ge(10),Ni(this),Cu(this))};function ka(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cu(a){a.g=new $t(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=_t(a.na);pe(d,"RID","rpc"),pe(d,"SID",a.M),pe(d,"AID",a.K),pe(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&pe(d,"TO",a.ia),pe(d,"TYPE","xmlhttp"),ys(a,d),a.u&&a.o&&Ra(d,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ci(_t(d)),f.u=null,f.R=!0,su(f,a)}n.Va=function(){this.C!=null&&(this.C=null,Ni(this),Ca(this),Ge(19))};function Oi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ku(a,d){var f=null;if(a.g==d){Oi(a),ka(a),a.g=null;var y=2}else if(va(a.h,d))f=d.G,uu(a.h,d),y=1;else return;if(a.I!=0){if(d.o)if(y==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var P=a.D;y=Ai(),Ke(y,new Zl(y,f)),Vi(a)}else Pu(a);else if(P=d.m,P==3||P==0&&d.X>0||!(y==1&&ly(a,d)||y==2&&Ca(a)))switch(f&&f.length>0&&(d=a.h,d.i=d.i.concat(f)),P){case 1:kn(a,5);break;case 4:kn(a,10);break;case 3:kn(a,6);break;default:kn(a,2)}}}function Du(a,d){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*d}function kn(a,d){if(a.j.info("Error code "+d),d==2){var f=u(a.bb,a),y=a.Ua;const P=!y;y=new Kt(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ls(y,"https"),Ci(y),P?ry(y.toString(),f):sy(y.toString(),f)}else Ge(2);a.I=0,a.l&&a.l.pa(d),Nu(a),Su(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function Nu(a){if(a.I=0,a.ja=[],a.l){const d=du(a.h);(d.length!=0||a.i.length!=0)&&(b(a.ja,d),b(a.ja,a.i),a.h.i.length=0,g(a.i),a.i.length=0),a.l.oa()}}function Vu(a,d,f){var y=f instanceof Kt?_t(f):new Kt(f);if(y.g!="")d&&(y.g=d+"."+y.g),us(y,y.u);else{var P=o.location;y=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;const k=new Kt(null);y&&ls(k,y),d&&(k.g=d),P&&us(k,P),f&&(k.h=f),y=k}return f=a.G,d=a.wa,f&&d&&pe(y,f,d),pe(y,"VER",a.ka),ys(a,y),y}function Ou(a,d,f){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new be(new Aa({ab:f})):new be(a.ma),d.Fa(a.L),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}n=Mu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Mi(){}Mi.prototype.g=function(a,d){return new nt(a,d)};function nt(a,d){Fe.call(this),this.g=new xu(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!T(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new pr(this)}m(nt,Fe),nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){Pa(this.g)},nt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=ga(a),a=f);d.i.push(new Jg(d.Ya++,a)),d.I==3&&Vi(d)},nt.prototype.N=function(){this.g.l=null,delete this.j,Pa(this.g),delete this.g,nt.Z.N.call(this)};function Lu(a){ya.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}m(Lu,ya);function ju(){_a.call(this),this.status=1}m(ju,_a);function pr(a){this.g=a}m(pr,Mu),pr.prototype.ra=function(){Ke(this.g,"a")},pr.prototype.qa=function(a){Ke(this.g,new Lu(a))},pr.prototype.pa=function(a){Ke(this.g,new ju)},pr.prototype.oa=function(){Ke(this.g,"b")},Mi.prototype.createWebChannel=Mi.prototype.g,nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,Nf=function(){return new Mi},Df=function(){return Ai()},kf=Rn,ic={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ri.NO_ERROR=0,Ri.TIMEOUT=8,Ri.HTTP_ERROR=6,Ji=Ri,eu.COMPLETE="complete",Cf=eu,Jl.EventType=rs,rs.OPEN="a",rs.CLOSE="b",rs.ERROR="c",rs.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,xs=Jl,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,Pf=be}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr="12.13.0";function t0(n){Jr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Mc("@firebase/firestore");function wr(){return Xn.logLevel}function O(n,...e){if(Xn.logLevel<=ne.DEBUG){const t=e.map(Fc);Xn.debug(`Firestore (${Jr}): ${n}`,...t)}}function He(n,...e){if(Xn.logLevel<=ne.ERROR){const t=e.map(Fc);Xn.error(`Firestore (${Jr}): ${n}`,...t)}}function yn(n,...e){if(Xn.logLevel<=ne.WARN){const t=e.map(Fc);Xn.warn(`Firestore (${Jr}): ${n}`,...t)}}function Fc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Vf(n,r,t)}function Vf(n,e,t){let r=`FIRESTORE (${Jr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw He(r),new Error(r)}function K(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Vf(e,s,r)}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ve.UNAUTHENTICATED)))}shutdown(){}}class r0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class s0{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Of(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class i0{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class o0{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new i0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ve.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ed{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,at(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ed(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ed(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=c0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function X(n,e){return n<e?-1:n>e?1:0}function oc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Fa(s)===Fa(i)?X(s,i):Fa(s)?1:-1}return X(n.length,e.length)}const l0=55296,u0=57343;function Fa(n){const e=n.charCodeAt(0);return e>=l0&&e<=u0}function Dr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}function Mf(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="__name__";class It{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return It.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof It?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=It.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return X(e.length,t.length)}static compareSegments(e,t){const r=It.isNumericId(e),s=It.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?It.extractNumericId(e).compare(It.extractNumericId(t)):oc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fn.fromString(e.substring(4,e.length-2))}}class ie extends It{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const d0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends It{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return d0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===td}static keyField(){return new _e([td])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ie.fromString(e))}static fromName(e){return new B(ie.fromString(e).popFirst(5))}static empty(){return new B(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n,e,t){if(!t)throw new L(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function h0(n,e,t,r){if(e===!0&&r===!0)throw new L(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nd(n){if(!B.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rd(n){if(B.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":q(12329,{type:typeof n})}function Ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zo(n);throw new L(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function ai(n,e){if(!jf(n))throw new L(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=-62135596800,id=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*id);return new oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<sd)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/id}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ai(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-sd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:Se("string",oe._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(e){return new G(e)}static min(){return new G(new oe(0,0))}static max(){return new G(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=-1;class go{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function ac(n){return n.fields.find((e=>e.kind===2))}function Mn(n){return n.fields.filter((e=>e.kind!==2))}go.UNKNOWN_ID=-1;class Qi{constructor(e,t){this.fieldPath=e,this.kind=t}}class $s{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new $s(0,it.min())}}function f0(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new oe(t+1,0):new oe(t,r));return new it(s,B.empty(),e)}function Ff(n){return new it(n.readTime,n.key,qs)}class it{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new it(G.min(),B.empty(),qs)}static max(){return new it(G.max(),B.empty(),qs)}}function Bc(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Uf)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):R.reject(t)}static resolve(e){return new R(((t,r)=>{t(e)}))}static reject(e){return new R(((t,r)=>{r(e)}))}static waitFor(e){return new R(((t,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next((s=>s?R.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new R(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next((p=>{o[u]=p,++c,c===i&&r(o)}),(p=>s(p)))}}))}static doWhile(e,t){return new R(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="SimpleDb";class Wo{static open(e,t,r,s){try{return new Wo(t,e.transaction(s,r))}catch(i){throw new ks(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new vt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ks(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=zc(r.target.error);this.S.reject(new ks(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(O(rt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new m0(t)}}class pn{static delete(e){return O(rt,"Removing database:",e),jn(ff().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!If())return!1;if(pn.F())return!0;const e=Pe(),t=pn.M(e),r=0<t&&t<10,s=zf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){return typeof process<"u"&&process.__PRIVATE_env?.__PRIVATE_USE_MOCK_PERSISTENCE==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,pn.M(Pe())===12.2&&He("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async L(e){return this.db||(O(rt,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ks(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(D.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(D.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ks(e,o))},s.onupgradeneeded=i=>{O(rt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.N.k(o,s.transaction,i.oldVersion,this.version).next((()=>{O(rt,"Database upgrade to version "+this.version+" complete")}))}}))),this.K&&(this.db.onversionchange=t=>this.K(t)),this.db}q(e){this.K=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.L(e);const c=Wo.open(this.db,e,i?"readonly":"readwrite",r),l=s(c).next((u=>(c.C(),u))).catch((u=>(c.abort(u),R.reject(u)))).toPromise();return l.catch((()=>{})),await c.D,l}catch(c){const l=c,u=l.name!=="FirebaseError"&&o<3;if(O(rt,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function zf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class p0{constructor(e){this.U=e,this.$=!1,this.W=null}get isDone(){return this.$}get G(){return this.W}set cursor(e){this.U=e}done(){this.$=!0}j(e){this.W=e}delete(){return jn(this.U.delete())}}class ks extends L{constructor(e,t){super(D.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Tn(n){return n.name==="IndexedDbTransactionError"}class m0{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(O(rt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(O(rt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),jn(r)}add(e){return O(rt,"ADD",this.store.name,e,e),jn(this.store.add(e))}get(e){return jn(this.store.get(e)).next((t=>(t===void 0&&(t=null),O(rt,"GET",this.store.name,e,t),t)))}delete(e){return O(rt,"DELETE",this.store.name,e),jn(this.store.delete(e))}count(){return O(rt,"COUNT",this.store.name),jn(this.store.count())}J(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new R(((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(r),o=[];return this.H(i,((c,l)=>{o.push(l)})).next((()=>o))}}Z(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new R(((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}}))}X(e,t){O(rt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.H(s,((i,o,c)=>c.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.H(s,t)}te(e){const t=this.cursor({});return new R(((r,s)=>{t.onerror=i=>{const o=zc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((c=>{c?o.continue():r()})):r()}}))}H(e,t){const r=[];return new R(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new p0(c),u=t(c.primaryKey,c.value,l);if(u instanceof R){const p=u.catch((m=>(l.done(),R.reject(m))));r.push(p)}l.isDone?s():l.G===null?c.continue():c.continue(l.G)}})).next((()=>R.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function jn(n){return new R(((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=zc(r.target.error);t(s)}}))}let od=!1;function zc(n){const e=pn.M(Pe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return od||(od=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Ds="IndexBackfiller";class g0{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){O(Ds,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.ne.ie();O(Ds,`Documents written: ${t}`)}catch(t){Tn(t)?O(Ds,"Ignoring IndexedDB error during index backfill: ",t):await sr(t)}await this.re(6e4)}))}}class y0{constructor(e,t){this.localStore=e,this.persistence=t}async ie(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))}se(e,t){const r=new Set;let s=t,i=!0;return R.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return O(Ds,`Processing collection: ${o}`),this.oe(e,o,s).next((c=>{s-=c,r.add(o)}));i=!1})))).next((()=>t-s))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(s,i))).next((c=>(O(Ds,`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((s,i)=>{const o=Ff(i);Bc(o,r)>0&&(r=o)})),new it(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lt.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=-1;function qo(n){return n==null}function Ks(n){return n===0&&1/n==-1/0}function _0(n){return typeof n=="number"&&Number.isInteger(n)&&!Ks(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="";function $e(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ad(e)),e=b0(n.get(t),e);return ad(e)}function b0(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case yo:t+="";break;default:t+=i}}return t}function ad(n){return n+yo+""}function wt(n){const e=n.length;if(K(e>=2,64408,{path:n}),e===2)return K(n.charAt(0)===yo&&n.charAt(1)==="",56145,{path:n}),ie.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(yo,i);switch((o<0||o>t)&&q(50515,{path:n}),n.charAt(o+1)){case"":const c=n.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:q(61167,{path:n})}i=o+2}return new ie(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="remoteDocuments",ci="owner",mr="owner",Gs="mutationQueues",I0="userId",ft="mutations",cd="batchId",zn="userMutationsIndex",ld=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n,e){return[n,$e(e)]}function Wf(n,e,t){return[n,$e(e),t]}const w0={},Nr="documentMutations",_o="remoteDocumentsV14",T0=["prefixPath","collectionGroup","readTime","documentId"],Yi="documentKeyIndex",E0=["prefixPath","collectionGroup","documentId"],qf="collectionGroupIndex",v0=["collectionGroup","readTime","prefixPath","documentId"],Hs="remoteDocumentGlobal",cc="remoteDocumentGlobalKey",Vr="targets",$f="queryTargetsIndex",x0=["canonicalId","targetId"],Or="targetDocuments",S0=["targetId","path"],Wc="documentTargetsIndex",A0=["path","targetId"],bo="targetGlobalKey",$n="targetGlobal",Js="collectionParents",R0=["collectionId","parent"],Mr="clientMetadata",P0="clientId",$o="bundles",C0="bundleId",Ko="namedQueries",k0="name",qc="indexConfiguration",D0="indexId",lc="collectionGroupIndex",N0="collectionGroup",Ns="indexState",V0=["indexId","uid"],Kf="sequenceNumberIndex",O0=["uid","sequenceNumber"],Vs="indexEntries",M0=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Gf="documentKeyIndex",L0=["indexId","uid","orderedDocumentKey"],Go="documentOverlays",j0=["userId","collectionPath","documentId"],uc="collectionPathOverlayIndex",F0=["userId","collectionPath","largestBatchId"],Hf="collectionGroupOverlayIndex",U0=["userId","collectionGroup","largestBatchId"],$c="globals",B0="name",Jf=[Gs,ft,Nr,Ln,Vr,ci,$n,Or,Mr,Hs,Js,$o,Ko],z0=[...Jf,Go],Qf=[Gs,ft,Nr,_o,Vr,ci,$n,Or,Mr,Hs,Js,$o,Ko,Go],Xf=Qf,Kc=[...Xf,qc,Ns,Vs],W0=Kc,Yf=[...Kc,$c],q0=Yf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Bf{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Ce(n,e){const t=Y(n);return pn.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function En(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||Oe.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ui(this.root,e,this.comparator,!0)}}class Ui{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Oe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Oe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function gr(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new Xe([])}unionWith(e){let t=new ce(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Dr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ep("Invalid base64 string: "+i):i}})(e);return new Ae(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const $0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=$0.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ot(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="server_timestamp",np="__type__",rp="__previous_value__",sp="__local_write_time__";function Gc(n){return(n?.mapValue?.fields||{})[np]?.stringValue===tp}function Ho(n){const e=n.mapValue.fields[rp];return Gc(e)?Ho(e):e}function Qs(n){const e=Vt(n.mapValue.fields[sp].timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t,r,s,i,o,c,l,u,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=p,this.apiKey=m}}const Io="(default)";class Yn{constructor(e,t){this.projectId=e,this.database=t||Io}static empty(){return new Yn("","")}get isDefaultDatabase(){return this.database===Io}isEqual(e){return e instanceof Yn&&e.projectId===this.projectId&&e.database===this.database}}function G0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yn(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="__type__",ip="__max__",cn={mapValue:{fields:{__type__:{stringValue:ip}}}},Jc="__vector__",Lr="value",Zi={nullValue:"NULL_VALUE"};function _n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gc(n)?4:op(n)?9007199254740991:Jo(n)?10:11:q(28295,{value:n})}function St(n,e){if(n===e)return!0;const t=_n(n);if(t!==_n(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qs(n).isEqual(Qs(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vt(s.timestampValue),c=Vt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Ot(s.bytesValue).isEqual(Ot(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ye(s.doubleValue),c=ye(i.doubleValue);return o===c?Ks(o)===Ks(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Dr(n.arrayValue.values||[],e.arrayValue.values||[],St);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ud(o)!==ud(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!St(o[l],c[l])))return!1;return!0})(n,e);default:return q(52216,{left:n})}}function Xs(n,e){return(n.values||[]).find((t=>St(t,e)))!==void 0}function bn(n,e){if(n===e)return 0;const t=_n(n),r=_n(e);if(t!==r)return X(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=ye(i.integerValue||i.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return hd(n.timestampValue,e.timestampValue);case 4:return hd(Qs(n),Qs(e));case 5:return oc(n.stringValue,e.stringValue);case 6:return(function(i,o){const c=Ot(i),l=Ot(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const p=X(c[u],l[u]);if(p!==0)return p}return X(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=X(ye(i.latitude),ye(o.latitude));return c!==0?c:X(ye(i.longitude),ye(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return fd(n.arrayValue,e.arrayValue);case 10:return(function(i,o){const c=i.fields||{},l=o.fields||{},u=c[Lr]?.arrayValue,p=l[Lr]?.arrayValue,m=X(u?.values?.length||0,p?.values?.length||0);return m!==0?m:fd(u,p)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===cn.mapValue&&o===cn.mapValue)return 0;if(i===cn.mapValue)return 1;if(o===cn.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},p=Object.keys(u);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const _=oc(l[m],p[m]);if(_!==0)return _;const g=bn(c[l[m]],u[p[m]]);if(g!==0)return g}return X(l.length,p.length)})(n.mapValue,e.mapValue);default:throw q(23264,{he:t})}}function hd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=Vt(n),r=Vt(e),s=X(t.seconds,r.seconds);return s!==0?s:X(t.nanos,r.nanos)}function fd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=bn(t[s],r[s]);if(i)return i}return X(t.length,r.length)}function jr(n){return hc(n)}function hc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Vt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ot(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=hc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hc(t.fields[o])}`;return s+"}"})(n.mapValue):q(61005,{value:n})}function eo(n){switch(_n(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ho(n);return e?16+eo(e):16;case 5:return 2*n.stringValue.length;case 6:return Ot(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+eo(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return En(r.fields,((i,o)=>{s+=i.length+eo(o)})),s})(n.mapValue);default:throw q(13486,{value:n})}}function Ys(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function fc(n){return!!n&&"integerValue"in n}function Zs(n){return!!n&&"arrayValue"in n}function pd(n){return!!n&&"nullValue"in n}function md(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function to(n){return!!n&&"mapValue"in n}function Jo(n){return(n?.mapValue?.fields||{})[Hc]?.stringValue===Jc}function Os(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return En(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Os(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Os(n.arrayValue.values[t]);return e}return{...n}}function op(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ip}const ap={mapValue:{fields:{[Hc]:{stringValue:Jc},[Lr]:{arrayValue:{}}}}};function H0(n){return"nullValue"in n?Zi:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ys(Yn.empty(),B.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Jo(n)?ap:{mapValue:{}}:q(35942,{value:n})}function J0(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ys(Yn.empty(),B.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?ap:"mapValue"in n?Jo(n)?{mapValue:{}}:cn:q(61959,{value:n})}function gd(n,e){const t=bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function yd(n,e){const t=bn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!to(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=Os(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());to(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];to(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){En(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new We(Os(this.value))}}function cp(n){const e=[];return En(n.fields,((t,r)=>{const s=new _e([t]);if(to(r)){const i=cp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Xe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ie(e,0,G.min(),G.min(),G.min(),We.empty(),0)}static newFoundDocument(e,t,r,s){return new Ie(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new Ie(e,2,t,G.min(),G.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,G.min(),G.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.position=e,this.inclusive=t}}function _d(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),t.key):r=bn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function bd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t="asc"){this.field=e,this.dir=t}}function Q0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{}class re extends lp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new X0(e,t,r):t==="array-contains"?new eb(e,r):t==="in"?new mp(e,r):t==="not-in"?new tb(e,r):t==="array-contains-any"?new nb(e,r):new re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Y0(e,r):new Z0(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(bn(t,this.value)):t!==null&&_n(this.value)===_n(t)&&this.matchesComparison(bn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ae extends lp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ae(e,t)}matches(e){return Ur(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ur(n){return n.op==="and"}function pc(n){return n.op==="or"}function Qc(n){return up(n)&&Ur(n)}function up(n){for(const e of n.filters)if(e instanceof ae)return!1;return!0}function mc(n){if(n instanceof re)return n.field.canonicalString()+n.op.toString()+jr(n.value);if(Qc(n))return n.filters.map((e=>mc(e))).join(",");{const e=n.filters.map((t=>mc(t))).join(",");return`${n.op}(${e})`}}function dp(n,e){return n instanceof re?(function(r,s){return s instanceof re&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)})(n,e):n instanceof ae?(function(r,s){return s instanceof ae&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&dp(o,s.filters[c])),!0):!1})(n,e):void q(19439)}function hp(n,e){const t=n.filters.concat(e);return ae.create(t,n.op)}function fp(n){return n instanceof re?(function(t){return`${t.field.canonicalString()} ${t.op} ${jr(t.value)}`})(n):n instanceof ae?(function(t){return t.op.toString()+" {"+t.getFilters().map(fp).join(" ,")+"}"})(n):"Filter"}class X0 extends re{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Y0 extends re{constructor(e,t){super(e,"in",t),this.keys=pp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Z0 extends re{constructor(e,t){super(e,"not-in",t),this.keys=pp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function pp(n,e){return(e.arrayValue?.values||[]).map((t=>B.fromName(t.referenceValue)))}class eb extends re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zs(t)&&Xs(t.arrayValue,this.value)}}class mp extends re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xs(this.value.arrayValue,t)}}class tb extends re{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Xs(this.value.arrayValue,t)}}class nb extends re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Xs(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function gc(n,e=null,t=[],r=[],s=null,i=null,o=null){return new rb(n,e,t,r,s,i,o)}function Zn(n){const e=Y(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>mc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>jr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>jr(r))).join(",")),e.Te=t}return e.Te}function li(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Q0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bd(n.startAt,e.startAt)&&bd(n.endAt,e.endAt)}function wo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function To(n,e){return n.filters.filter((t=>t instanceof re&&t.field.isEqual(e)))}function Id(n,e,t){let r=Zi,s=!0;for(const i of To(n,e)){let o=Zi,c=!0;switch(i.op){case"<":case"<=":o=H0(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=Zi}gd({value:r,inclusive:s},{value:o,inclusive:c})<0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];gd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function wd(n,e,t){let r=cn,s=!0;for(const i of To(n,e)){let o=cn,c=!0;switch(i.op){case">=":case">":o=J0(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=cn}yd({value:r,inclusive:s},{value:o,inclusive:c})>0&&(r=o,s=c)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];yd({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function sb(n,e,t,r,s,i,o,c){return new Qr(n,e,t,r,s,i,o,c)}function ui(n){return new Qr(n)}function Td(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ib(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function gp(n){return n.collectionGroup!==null}function Ms(n){const e=Y(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ce(_e.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ei(i,r))})),t.has(_e.keyField().canonicalString())||e.Ie.push(new ei(_e.keyField(),r))}return e.Ie}function ut(n){const e=Y(n);return e.Ee||(e.Ee=ob(e,Ms(n))),e.Ee}function ob(n,e){if(n.limitType==="F")return gc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ei(s.field,i)}));const t=n.endAt?new Fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fr(n.startAt.position,n.startAt.inclusive):null;return gc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function yc(n,e){const t=n.filters.concat([e]);return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ab(n,e){const t=n.explicitOrderBy.concat([e]);return new Qr(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function _c(n,e,t){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qo(n,e){return li(ut(n),ut(e))&&n.limitType===e.limitType}function yp(n){return`${Zn(ut(n))}|lt:${n.limitType}`}function Tr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>fp(s))).join(", ")}]`),qo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>jr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>jr(s))).join(",")),`Target(${r})`})(ut(n))}; limitType=${n.limitType})`}function di(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=_d(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Ms(r),s)||r.endAt&&!(function(o,c,l){const u=_d(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Ms(r),s))})(n,e)}function cb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _p(n){return(e,t)=>{let r=!1;for(const s of Ms(n)){const i=lb(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function lb(n,e,t){const r=n.field.isKeyField()?B.comparator(e.key,t.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?bn(l,u):q(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){En(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Zf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=new ge(B.comparator);function st(){return ub}const bp=new ge(B.comparator);function Ss(...n){let e=bp;for(const t of n)e=e.insert(t.key,t);return e}function Ip(n){let e=bp;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Tt(){return Ls()}function wp(){return Ls()}function Ls(){return new Ut((n=>n.toString()),((n,e)=>n.isEqual(e)))}const db=new ge(B.comparator),hb=new ce(B.comparator);function te(...n){let e=hb;for(const t of n)e=e.add(t);return e}const fb=new ce(X);function pb(){return fb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ks(e)?"-0":e}}function Tp(n){return{integerValue:""+n}}function mb(n,e){return _0(e)?Tp(e):Xc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this._=void 0}}function gb(n,e,t){return n instanceof ti?(function(s,i){const o={fields:{[np]:{stringValue:tp},[sp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gc(i)&&(i=Ho(i)),i&&(o.fields[rp]=i),{mapValue:o}})(t,e):n instanceof Br?vp(n,e):n instanceof zr?xp(n,e):(function(s,i){const o=Ep(s,i),c=Ed(o)+Ed(s.Ae);return fc(o)&&fc(s.Ae)?Tp(c):Xc(s.serializer,c)})(n,e)}function yb(n,e,t){return n instanceof Br?vp(n,e):n instanceof zr?xp(n,e):t}function Ep(n,e){return n instanceof ni?(function(r){return fc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ti extends Xo{}class Br extends Xo{constructor(e){super(),this.elements=e}}function vp(n,e){const t=Sp(e);for(const r of n.elements)t.some((s=>St(s,r)))||t.push(r);return{arrayValue:{values:t}}}class zr extends Xo{constructor(e){super(),this.elements=e}}function xp(n,e){let t=Sp(e);for(const r of n.elements)t=t.filter((s=>!St(s,r)));return{arrayValue:{values:t}}}class ni extends Xo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ed(n){return ye(n.integerValue||n.doubleValue)}function Sp(n){return Zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,t){this.field=e,this.transform=t}}function bb(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Br&&s instanceof Br||r instanceof zr&&s instanceof zr?Dr(r.elements,s.elements,St):r instanceof ni&&s instanceof ni?St(r.Ae,s.Ae):r instanceof ti&&s instanceof ti})(n.transform,e.transform)}class Ib{constructor(e,t){this.version=e,this.transformResults=t}}class je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new je}static exists(e){return new je(void 0,e)}static updateTime(e){return new je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yo{}function Ap(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Zo(n.key,je.none()):new Xr(n.key,n.data,je.none());{const t=n.data,r=We.empty();let s=new ce(_e.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Bt(n.key,r,new Xe(s.toArray()),je.none())}}function wb(n,e,t){n instanceof Xr?(function(s,i,o){const c=s.value.clone(),l=xd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Bt?(function(s,i,o){if(!no(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=xd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Rp(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function js(n,e,t,r){return n instanceof Xr?(function(i,o,c,l){if(!no(i.precondition,o))return c;const u=i.value.clone(),p=Sd(i.fieldTransforms,l,o);return u.setAll(p),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof Bt?(function(i,o,c,l){if(!no(i.precondition,o))return c;const u=Sd(i.fieldTransforms,l,o),p=o.data;return p.setAll(Rp(i)),p.setAll(u),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((m=>m.field)))})(n,e,t,r):(function(i,o,c){return no(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Tb(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ep(r.transform,s||null);i!=null&&(t===null&&(t=We.empty()),t.set(r.field,i))}return t||null}function vd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Dr(r,s,((i,o)=>bb(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xr extends Yo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bt extends Yo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function xd(n,e,t){const r=new Map;K(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,yb(o,c,t[s]))}return r}function Sd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,gb(i,o,e))}return r}class Zo extends Yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pp extends Yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wb(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=wp();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=Ap(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),te())}isEqual(e){return this.batchId===e.batchId&&Dr(this.mutations,e.mutations,((t,r)=>vd(t,r)))&&Dr(this.baseMutations,e.baseMutations,((t,r)=>vd(t,r)))}}class Zc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){K(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return db})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,se;function vb(n){switch(n){case D.OK:return q(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return q(15467,{code:n})}}function Cp(n){if(n===void 0)return He("GRPC error has no .code"),D.UNKNOWN;switch(n){case ve.OK:return D.OK;case ve.CANCELLED:return D.CANCELLED;case ve.UNKNOWN:return D.UNKNOWN;case ve.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ve.INTERNAL:return D.INTERNAL;case ve.UNAVAILABLE:return D.UNAVAILABLE;case ve.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ve.NOT_FOUND:return D.NOT_FOUND;case ve.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ve.ABORTED:return D.ABORTED;case ve.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ve.DATA_LOSS:return D.DATA_LOSS;default:return q(39323,{code:n})}}(se=ve||(ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=new fn([4294967295,4294967295],0);function Ad(n){const e=xb().encode(n),t=new Rf;return t.update(e),new Uint8Array(t.digest())}function Rd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new fn([t,r],0),new fn([s,i],0)]}class tl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new As(`Invalid padding: ${t}`);if(r<0)throw new As(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new As(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new As(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=fn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(fn.fromNumber(r)));return s.compare(Sb)===1&&(s=new fn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ad(e),[r,s]=Rd(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new tl(i,s,t);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Ad(e),[r,s]=Rd(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class As extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,fi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new hi(G.min(),s,new ge(X),st(),te())}}class fi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fi(r,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class kp{constructor(e,t){this.targetId=e,this.Ce=t}}class Dp{constructor(e,t,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Pd{constructor(){this.ve=0,this.Fe=Cd(),this.Me=Ae.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),r=te();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:q(38017,{changeType:i})}})),new fi(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Cd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ab{constructor(e){this.Ge=e,this.ze=new Map,this.je=st(),this.Je=Bi(),this.He=Bi(),this.Ze=new ge(X)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(wo(i))if(r===0){const o=new B(i.path);this.et(t,o,Ie.newNoDocument(o,G.min()))}else K(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Ot(r).toUint8Array()}catch(l){if(l instanceof ep)return yn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new tl(o,s,i)}catch(l){return yn(l instanceof As?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&wo(c.target)){const l=new B(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ie.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.Ke())}}));let r=te();this.He.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new hi(e,t,this.Ze,this.je,r);return this.je=st(),this.Je=Bi(),this.He=Bi(),this.Ze=new ge(X),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Pd,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ce(X),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ce(X),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Pd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Bi(){return new ge(B.comparator)}function Cd(){return new ge(B.comparator)}const Rb={asc:"ASCENDING",desc:"DESCENDING"},Pb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cb={and:"AND",or:"OR"};class kb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bc(n,e){return n.useProto3Json||qo(e)?e:{value:e}}function Wr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Np(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Db(n,e){return Wr(n,e.toTimestamp())}function Je(n){return K(!!n,49232),G.fromTimestamp((function(t){const r=Vt(t);return new oe(r.seconds,r.nanos)})(n))}function nl(n,e){return Ic(n,e).canonicalString()}function Ic(n,e){const t=(function(s){return new ie(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Vp(n){const e=ie.fromString(n);return K(Wp(e),10190,{key:e.toString()}),e}function Eo(n,e){return nl(n.databaseId,e.path)}function Kn(n,e){const t=Vp(e);if(t.get(1)!==n.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Lp(t))}function Op(n,e){return nl(n.databaseId,e)}function Mp(n){const e=Vp(n);return e.length===4?ie.emptyPath():Lp(e)}function wc(n){return new ie(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Lp(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function kd(n,e,t){return{name:Eo(n,e),fields:t.value.mapValue.fields}}function Nb(n,e,t){const r=Kn(n,e.name),s=Je(e.updateTime),i=e.createTime?Je(e.createTime):G.min(),o=new We({mapValue:{fields:e.fields}}),c=Ie.newFoundDocument(r,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Vb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:q(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,p){return u.useProto3Json?(K(p===void 0||typeof p=="string",58123),Ae.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ae.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const p=u.code===void 0?D.UNKNOWN:Cp(u.code);return new L(p,u.message||"")})(o);t=new Dp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Kn(n,r.document.name),i=Je(r.document.updateTime),o=r.document.createTime?Je(r.document.createTime):G.min(),c=new We({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(s,i,o,c),u=r.targetIds||[],p=r.removedTargetIds||[];t=new ro(u,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Kn(n,r.document),i=r.readTime?Je(r.readTime):G.min(),o=Ie.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ro([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Kn(n,r.document),i=r.removedTargetIds||[];t=new ro([],i,s,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Eb(s,i),c=r.targetId;t=new kp(c,o)}}return t}function vo(n,e){let t;if(e instanceof Xr)t={update:kd(n,e.key,e.value)};else if(e instanceof Zo)t={delete:Eo(n,e.key)};else if(e instanceof Bt)t={update:kd(n,e.key,e.data),updateMask:Ub(e.fieldMask)};else{if(!(e instanceof Pp))return q(16599,{dt:e.type});t={verify:Eo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof ti)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Br)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof zr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ni)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw q(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Db(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q(27497)})(n,e.precondition)),t}function Tc(n,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?je.updateTime(Je(i.updateTime)):i.exists!==void 0?je.exists(i.exists):je.none()})(e.currentDocument):je.none(),r=e.updateTransforms?e.updateTransforms.map((s=>(function(o,c){let l=null;if("setToServerValue"in c)K(c.setToServerValue==="REQUEST_TIME",16630,{proto:c}),l=new ti;else if("appendMissingElements"in c){const p=c.appendMissingElements.values||[];l=new Br(p)}else if("removeAllFromArray"in c){const p=c.removeAllFromArray.values||[];l=new zr(p)}else"increment"in c?l=new ni(o,c.increment):q(16584,{proto:c});const u=_e.fromServerFormat(c.fieldPath);return new _b(u,l)})(n,s))):[];if(e.update){e.update.name;const s=Kn(n,e.update.name),i=new We({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const u=l.fieldPaths||[];return new Xe(u.map((p=>_e.fromServerFormat(p))))})(e.updateMask);return new Bt(s,i,o,t,r)}return new Xr(s,i,t,r)}if(e.delete){const s=Kn(n,e.delete);return new Zo(s,t)}if(e.verify){const s=Kn(n,e.verify);return new Pp(s,t)}return q(1463,{proto:e})}function Ob(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?Je(s.updateTime):Je(i);return o.isEqual(G.min())&&(o=Je(i)),new Ib(o,s.transformResults||[])})(t,e)))):[]}function jp(n,e){return{documents:[Op(n,e.path)]}}function Fp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Op(n,s);const i=(function(u){if(u.length!==0)return zp(ae.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((p=>(function(_){return{field:Er(_.field),direction:Lb(_.dir)}})(p)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=bc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:s}}function Up(n){let e=Mp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){K(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=(function(m){const _=Bp(m);return _ instanceof ae&&Qc(_)?_.getFilters():[_]})(t.where));let o=[];t.orderBy&&(o=(function(m){return m.map((_=>(function(b){return new ei(vr(b.field),(function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(b.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(m){let _;return _=typeof m=="object"?m.value:m,qo(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(m){const _=!!m.before,g=m.values||[];return new Fr(g,_)})(t.startAt));let u=null;return t.endAt&&(u=(function(m){const _=!m.before,g=m.values||[];return new Fr(g,_)})(t.endAt)),sb(e,s,o,i,c,"F",l,u)}function Mb(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Bp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=vr(t.unaryFilter.field);return re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vr(t.unaryFilter.field);return re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vr(t.unaryFilter.field);return re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vr(t.unaryFilter.field);return re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return re.create(vr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ae.create(t.compositeFilter.filters.map((r=>Bp(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return q(1026)}})(t.compositeFilter.op))})(n):q(30097,{filter:n})}function Lb(n){return Rb[n]}function jb(n){return Pb[n]}function Fb(n){return Cb[n]}function Er(n){return{fieldPath:n.canonicalString()}}function vr(n){return _e.fromServerFormat(n.fieldPath)}function zp(n){return n instanceof re?(function(t){if(t.op==="=="){if(md(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NAN"}};if(pd(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(md(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NAN"}};if(pd(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(t.field),op:jb(t.op),value:t.value}}})(n):n instanceof ae?(function(t){const r=t.getFilters().map((s=>zp(s)));return r.length===1?r[0]:{compositeFilter:{op:Fb(t.op),filters:r}}})(n):q(54877,{filter:n})}function Ub(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Wp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function qp(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,r,s,i=G.min(),o=G.min(),c=Ae.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.yt=e}}function Bb(n,e){let t;if(e.document)t=Nb(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=B.fromSegments(e.noDocument.path),s=tr(e.noDocument.readTime);t=Ie.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q(56709);{const r=B.fromSegments(e.unknownDocument.path),s=tr(e.unknownDocument.version);t=Ie.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime((function(s){const i=new oe(s[0],s[1]);return G.fromTimestamp(i)})(e.readTime)),t}function Dd(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:xo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(i,o){return{name:Eo(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Wr(i,o.version.toTimestamp()),createTime:Wr(i,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:er(e.version)};else{if(!e.isUnknownDocument())return q(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:er(e.version)}}return r}function xo(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function er(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function tr(n){const e=new oe(n.seconds,n.nanoseconds);return G.fromTimestamp(e)}function Fn(n,e){const t=(e.baseMutations||[]).map((i=>Tc(n.yt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((i=>Tc(n.yt,i))),s=oe.fromMillis(e.localWriteTimeMs);return new Yc(e.batchId,s,t,r)}function Rs(n){const e=tr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?tr(n.lastLimboFreeSnapshotVersion):G.min();let r;return r=(function(i){return i.documents!==void 0})(n.query)?(function(i){const o=i.documents.length;return K(o===1,1966,{count:o}),ut(ui(Mp(i.documents[0])))})(n.query):(function(i){return ut(Up(i))})(n.query),new Et(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ae.fromBase64String(n.resumeToken))}function Kp(n,e){const t=er(e.snapshotVersion),r=er(e.lastLimboFreeSnapshotVersion);let s;s=wo(e.target)?jp(n.yt,e.target):Fp(n.yt,e.target).ft;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Zn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Gp(n){const e=Up({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?_c(e,e.limit,"L"):e}function Ua(n,e){return new el(e.largestBatchId,Tc(n.yt,e.overlayMutation))}function Nd(n,e){const t=e.path.lastSegment();return[n,$e(e.path.popLast()),t]}function Vd(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:er(r.readTime),documentKey:$e(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{getBundleMetadata(e,t){return Od(e).get(t).next((r=>{if(r)return(function(i){return{id:i.bundleId,createTime:tr(i.createTime),version:i.version}})(r)}))}saveBundleMetadata(e,t){return Od(e).put((function(s){return{bundleId:s.id,createTime:er(Je(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return Md(e).get(t).next((r=>{if(r)return(function(i){return{name:i.name,query:Gp(i.bundledQuery),readTime:tr(i.readTime)}})(r)}))}saveNamedQuery(e,t){return Md(e).put((function(s){return{name:s.name,readTime:er(Je(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Od(n){return Ce(n,$o)}function Md(n){return Ce(n,Ko)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new ea(e,r)}getOverlay(e,t){return bs(e).get(Nd(this.userId,t)).next((r=>r?Ua(this.serializer,r):null))}getOverlays(e,t){const r=Tt();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){const s=[];return r.forEach(((i,o)=>{const c=new el(t,o);s.push(this.St(e,c))})),R.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach((o=>s.add($e(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const c=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(bs(e).X(uc,c))})),R.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Tt(),i=$e(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return bs(e).J(uc,o).next((c=>{for(const l of c){const u=Ua(this.serializer,l);s.set(u.getKey(),u)}return s}))}getOverlaysForCollectionGroup(e,t,r,s){const i=Tt();let o;const c=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return bs(e).ee({index:Hf,range:c},((l,u,p)=>{const m=Ua(this.serializer,u);i.size()<s||m.largestBatchId===o?(i.set(m.getKey(),m),o=m.largestBatchId):p.done()})).next((()=>i))}St(e,t){return bs(e).put((function(s,i,o){const[c,l,u]=Nd(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:vo(s.yt,o.mutation)}})(this.serializer,this.userId,t))}}function bs(n){return Ce(n,Go)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{bt(e){return Ce(e,$c)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t?.value;return r?Ae.fromUint8Array(r):Ae.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(ye(e.integerValue));else if("doubleValue"in e){const r=ye(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Ks(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=Vt(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(Ot(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?op(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Jo(e)?this.kt(e.mapValue,t):(this.Kt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Nt(t)):q(19022,{Ut:e})}Ot(e,t){this.Ft(t,25),this.$t(e,t)}$t(e,t){t.xt(e)}Kt(e,t){const r=e.fields||{};this.Ft(t,55);for(const s of Object.keys(r))this.Ot(s,t),this.Ct(r[s],t)}kt(e,t){const r=e.fields||{};this.Ft(t,53);const s=Lr,i=r[s].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(ye(i)),this.Ot(s,t),this.Ct(r[s],t)}qt(e,t){const r=e.values||[];this.Ft(t,50);for(const s of r)this.Ct(s,t)}Lt(e,t){this.Ft(t,37),B.fromName(e).path.forEach((r=>{this.Ft(t,60),this.$t(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}Un.Wt=new Un;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=255;function qb(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Ld(n){const e=64-(function(r){let s=0;for(let i=0;i<8;++i){const o=qb(255&r[i]);if(s+=o,o!==8)break}return s})(n);return Math.ceil(e/8)}class $b{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Qt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const s=t.codePointAt(0);this.Gt(240|s>>>18),this.Gt(128|63&s>>>12),this.Gt(128|63&s>>>6),this.Gt(128|63&s)}}this.zt()}Xt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const s=t.codePointAt(0);this.Jt(240|s>>>18),this.Jt(128|63&s>>>12),this.Jt(128|63&s>>>6),this.Jt(128|63&s)}}this.Ht()}Yt(e){const t=this.en(e),r=Ld(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}nn(e){const t=this.en(e),r=Ld(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}rn(){this.sn(yr),this.sn(255)}_n(){this.an(yr),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===yr?(this.sn(yr),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===yr?(this.an(yr),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class Kb{constructor(e){this.cn=e}Bt(e){this.cn.Qt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.Yt(e)}vt(){this.cn.rn()}}class Gb{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Xt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Is{constructor(){this.cn=new $b,this.ascending=new Kb(this.cn),this.descending=new Gb(this.cn)}seed(e){this.cn.seed(e)}ln(e){return e===0?this.ascending:this.descending}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,r,s){this.hn=e,this.Pn=t,this.Tn=r,this.In=s}En(){const e=this.In.length,t=e===0||this.In[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.In,0),t!==e?r.set([0],this.In.length):++r[r.length-1],new Bn(this.hn,this.Pn,this.Tn,r)}Rn(e,t,r){return{indexId:this.hn,uid:e,arrayValue:so(this.Tn),directionalValue:so(this.In),orderedDocumentKey:so(t),documentKey:r.path.toArray()}}An(e,t,r){const s=this.Rn(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Xt(n,e){let t=n.hn-e.hn;return t!==0?t:(t=jd(n.Tn,e.Tn),t!==0?t:(t=jd(n.In,e.In),t!==0?t:B.comparator(n.Pn,e.Pn)))}function jd(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function so(n){return bf()?(function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r})(n):n}function Fd(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(n)}class Ud{constructor(e){this.Vn=new ce(((t,r)=>_e.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.dn=e.orderBy,this.mn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.mn.push(r)}}get fn(){return this.Vn.size>1}gn(e){if(K(e.collectionGroup===this.collectionId,49279),this.fn)return!1;const t=ac(e);if(t!==void 0&&!this.pn(t))return!1;const r=Mn(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.pn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const c=this.Vn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=r[i];if(!this.yn(c,l)||!this.wn(this.dn[o++],l))return!1}++i}for(;i<r.length;++i){const c=r[i];if(o>=this.dn.length||!this.wn(this.dn[o++],c))return!1}return!0}Sn(){if(this.fn)return null;let e=new ce(_e.comparator);const t=[];for(const r of this.mn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new Qi(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new Qi(r.field,0))}for(const r of this.dn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new Qi(r.field,r.dir==="asc"?0:1)));return new go(go.UNKNOWN_ID,this.collectionId,t,$s.empty())}pn(e){for(const t of this.mn)if(this.yn(t,e))return!0;return!1}yn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}wn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n){if(K(n instanceof re||n instanceof ae,20012),n instanceof re){if(n instanceof mp){const t=n.value.arrayValue?.values?.map((r=>re.create(n.field,"==",r)))||[];return ae.create(t,"or")}return n}const e=n.filters.map((t=>Hp(t)));return ae.create(e,n.op)}function Hb(n){if(n.getFilters().length===0)return[];const e=xc(Hp(n));return K(Jp(e),7391),Ec(e)||vc(e)?[e]:e.getFilters()}function Ec(n){return n instanceof re}function vc(n){return n instanceof ae&&Qc(n)}function Jp(n){return Ec(n)||vc(n)||(function(t){if(t instanceof ae&&pc(t)){for(const r of t.getFilters())if(!Ec(r)&&!vc(r))return!1;return!0}return!1})(n)}function xc(n){if(K(n instanceof re||n instanceof ae,34018),n instanceof re)return n;if(n.filters.length===1)return xc(n.filters[0]);const e=n.filters.map((r=>xc(r)));let t=ae.create(e,n.op);return t=So(t),Jp(t)?t:(K(t instanceof ae,64498),K(Ur(t),40251),K(t.filters.length>1,57927),t.filters.reduce(((r,s)=>rl(r,s))))}function rl(n,e){let t;return K(n instanceof re||n instanceof ae,38388),K(e instanceof re||e instanceof ae,25473),t=n instanceof re?e instanceof re?(function(s,i){return ae.create([s,i],"and")})(n,e):Bd(n,e):e instanceof re?Bd(e,n):(function(s,i){if(K(s.filters.length>0&&i.filters.length>0,48005),Ur(s)&&Ur(i))return hp(s,i.getFilters());const o=pc(s)?s:i,c=pc(s)?i:s,l=o.filters.map((u=>rl(u,c)));return ae.create(l,"or")})(n,e),So(t)}function Bd(n,e){if(Ur(e))return hp(e,n.getFilters());{const t=e.filters.map((r=>rl(n,r)));return ae.create(t,"or")}}function So(n){if(K(n instanceof re||n instanceof ae,11850),n instanceof re)return n;const e=n.getFilters();if(e.length===1)return So(e[0]);if(up(n))return n;const t=e.map((s=>So(s))),r=[];return t.forEach((s=>{s instanceof re?r.push(s):s instanceof ae&&(s.op===n.op?r.push(...s.filters):r.push(s))})),r.length===1?r[0]:ae.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.bn=new sl}addToCollectionParentIndex(e,t){return this.bn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(it.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(it.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class sl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ce(ie.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ce(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="IndexedDbIndexManager",zi=new Uint8Array(0);class Qb{constructor(e,t){this.databaseId=t,this.Dn=new sl,this.Cn=new Ut((r=>Zn(r)),((r,s)=>li(r,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Dn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.Dn.add(t)}));const i={collectionId:r,parent:$e(s)};return Wd(e).put(i)}return R.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Mf(t),""],!1,!0);return Wd(e).J(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;r.push(wt(o.parent))}return r}))}addFieldIndex(e,t){const r=ws(e),s=(function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=br(e);return i.next((c=>{o.put(Vd(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const r=ws(e),s=br(e),i=_r(e);return r.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=ws(e),r=_r(e),s=br(e);return t.X().next((()=>r.X())).next((()=>s.X()))}createTargetIndexes(e,t){return R.forEach(this.vn(t),(r=>this.getIndexType(e,r).next((s=>{if(s===0||s===1){const i=new Ud(r).Sn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const r=_r(e);let s=!0;const i=new Map;return R.forEach(this.vn(t),(o=>this.Fn(e,o).next((c=>{s&&(s=!!c),i.set(o,c)})))).next((()=>{if(s){let o=te();const c=[];return R.forEach(i,((l,u)=>{O(zd,`Using index ${(function(j){return`id=${j.indexId}|cg=${j.collectionGroup}|f=${j.fields.map((z=>`${z.fieldPath}:${z.kind}`)).join(",")}`})(l)} to execute ${Zn(t)}`);const p=(function(j,z){const Q=ac(z);if(Q===void 0)return null;for(const J of To(j,Q.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null})(u,l),m=(function(j,z){const Q=new Map;for(const J of Mn(z))for(const x of To(j,J.fieldPath))switch(x.op){case"==":case"in":Q.set(J.fieldPath.canonicalString(),x.value);break;case"not-in":case"!=":return Q.set(J.fieldPath.canonicalString(),x.value),Array.from(Q.values())}return null})(u,l),_=(function(j,z){const Q=[];let J=!0;for(const x of Mn(z)){const I=x.kind===0?Id(j,x.fieldPath,j.startAt):wd(j,x.fieldPath,j.startAt);Q.push(I.value),J&&(J=I.inclusive)}return new Fr(Q,J)})(u,l),g=(function(j,z){const Q=[];let J=!0;for(const x of Mn(z)){const I=x.kind===0?wd(j,x.fieldPath,j.endAt):Id(j,x.fieldPath,j.endAt);Q.push(I.value),J&&(J=I.inclusive)}return new Fr(Q,J)})(u,l),b=this.Mn(l,u,_),C=this.Mn(l,u,g),E=this.xn(l,u,m),N=this.On(l.indexId,p,b,_.inclusive,C,g.inclusive,E);return R.forEach(N,(V=>r.Z(V,t.limit).next((j=>{j.forEach((z=>{const Q=B.fromSegments(z.documentKey);o.has(Q)||(o=o.add(Q),c.push(Q))}))}))))})).next((()=>c))}return R.resolve(null)}))}vn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=Hb(ae.create(e.filters,"and")).map((r=>gc(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}On(e,t,r,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),p=[];for(let m=0;m<l;++m){const _=t?this.Nn(t[m/u]):zi,g=this.Bn(e,_,r[m%u],s),b=this.Ln(e,_,i[m%u],o),C=c.map((E=>this.Bn(e,_,E,!0)));p.push(...this.createRange(g,b,C))}return p}Bn(e,t,r,s){const i=new Bn(e,B.empty(),t,r);return s?i:i.En()}Ln(e,t,r,s){const i=new Bn(e,B.empty(),t,r);return s?i.En():i}Fn(e,t){const r=new Ud(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const c of i)r.gn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o}))}getIndexType(e,t){let r=2;const s=this.vn(t);return R.forEach(s,(i=>this.Fn(e,i).next((o=>{o?r!==0&&o.fields.length<(function(l){let u=new ce(_e.comparator),p=!1;for(const m of l.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?p=!0:u=u.add(_.field));for(const m of l.orderBy)m.field.isKeyField()||(u=u.add(m.field));return u.size+(p?1:0)})(i)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&r===2?1:r))}kn(e,t){const r=new Is;for(const s of Mn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.ln(s.kind);Un.Wt.Dt(i,o)}return r.un()}Nn(e){const t=new Is;return Un.Wt.Dt(e,t.ln(0)),t.un()}Kn(e,t){const r=new Is;return Un.Wt.Dt(Ys(this.databaseId,t),r.ln((function(i){const o=Mn(i);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}xn(e,t,r){if(r===null)return[];let s=[];s.push(new Is);let i=0;for(const o of Mn(e)){const c=r[i++];for(const l of s)if(this.qn(t,o.fieldPath)&&Zs(c))s=this.Un(s,o,c);else{const u=l.ln(o.kind);Un.Wt.Dt(c,u)}}return this.$n(s)}Mn(e,t,r){return this.xn(e,t,r.position)}$n(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Un(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const c of s){const l=new Is;l.seed(c.un()),Un.Wt.Dt(o,l.ln(t.kind)),i.push(l)}return i}qn(e,t){return!!e.filters.find((r=>r instanceof re&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=ws(e),s=br(e);return(t?r.J(lc,IDBKeyRange.bound(t,t)):r.J()).next((i=>{const o=[];return R.forEach(i,(c=>s.get([c.indexId,this.uid]).next((l=>{o.push((function(p,m){const _=m?new $s(m.sequenceNumber,new it(tr(m.readTime),new B(wt(m.documentKey)),m.largestBatchId)):$s.empty(),g=p.fields.map((([b,C])=>new Qi(_e.fromServerFormat(b),C)));return new go(p.indexId,p.collectionGroup,g,_)})(c,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:X(r.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const s=ws(e),i=br(e);return this.Wn(e).next((o=>s.J(lc,IDBKeyRange.bound(t,t)).next((c=>R.forEach(c,(l=>i.put(Vd(l.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return R.forEach(t,((s,i)=>{const o=r.get(s.collectionGroup);return(o?R.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((c=>(r.set(s.collectionGroup,c),R.forEach(c,(l=>this.Qn(e,s,l).next((u=>{const p=this.Gn(i,l);return u.isEqual(p)?R.resolve():this.zn(e,i,l,u,p)})))))))}))}jn(e,t,r,s){return _r(e).put(s.Rn(this.uid,this.Kn(r,t.key),t.key))}Jn(e,t,r,s){return _r(e).delete(s.An(this.uid,this.Kn(r,t.key),t.key))}Qn(e,t,r){const s=_r(e);let i=new ce(Xt);return s.ee({index:Gf,range:IDBKeyRange.only([r.indexId,this.uid,so(this.Kn(r,t))])},((o,c)=>{i=i.add(new Bn(r.indexId,t,Fd(c.arrayValue),Fd(c.directionalValue)))})).next((()=>i))}Gn(e,t){let r=new ce(Xt);const s=this.kn(t,e);if(s==null)return r;const i=ac(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Zs(o))for(const c of o.arrayValue.values||[])r=r.add(new Bn(t.indexId,e.key,this.Nn(c),s))}else r=r.add(new Bn(t.indexId,e.key,zi,s));return r}zn(e,t,r,s,i){O(zd,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,u,p,m,_){const g=l.getIterator(),b=u.getIterator();let C=gr(g),E=gr(b);for(;C||E;){let N=!1,V=!1;if(C&&E){const j=p(C,E);j<0?V=!0:j>0&&(N=!0)}else C!=null?V=!0:N=!0;N?(m(E),E=gr(b)):V?(_(C),C=gr(g)):(C=gr(g),E=gr(b))}})(s,i,Xt,(c=>{o.push(this.jn(e,t,r,c))}),(c=>{o.push(this.Jn(e,t,r,c))})),R.waitFor(o)}Wn(e){let t=1;return br(e).ee({index:Kf,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,c)=>Xt(o,c))).filter(((o,c,l)=>!c||Xt(o,l[c-1])!==0));const s=[];s.push(e);for(const o of r){const c=Xt(o,e),l=Xt(o,t);if(c===0)s[0]=e.En();else if(c>0&&l<0)s.push(o),s.push(o.En());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Hn(s[o],s[o+1]))return[];const c=s[o].An(this.uid,zi,B.empty()),l=s[o+1].An(this.uid,zi,B.empty());i.push(IDBKeyRange.bound(c,l))}return i}Hn(e,t){return Xt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(qd)}getMinOffset(e,t){return R.mapArray(this.vn(t),(r=>this.Fn(e,r).next((s=>s||q(44426))))).next(qd)}}function Wd(n){return Ce(n,Js)}function _r(n){return Ce(n,Vs)}function ws(n){return Ce(n,qc)}function br(n){return Ce(n,Ns)}function qd(n){K(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Bc(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new it(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qp=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n,e,t){const r=n.store(ft),s=n.store(Nr),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=r.ee({range:o},((p,m,_)=>(c++,_.delete())));i.push(l.next((()=>{K(c===1,47070,{batchId:t.batchId})})));const u=[];for(const p of t.mutations){const m=Wf(e,p.key.path,t.batchId);i.push(s.delete(m)),u.push(p.key)}return R.waitFor(i).next((()=>u))}function Ao(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw q(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(Qp,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);class ta{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static wt(e,t,r,s){K(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new ta(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yt(e).ee({index:zn,range:r},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,s){const i=xr(e),o=Yt(e);return o.add({}).next((c=>{K(typeof c=="number",49019);const l=new Yc(c,t,r,s),u=(function(g,b,C){const E=C.baseMutations.map((V=>vo(g.yt,V))),N=C.mutations.map((V=>vo(g.yt,V)));return{userId:b,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:E,mutations:N}})(this.serializer,this.userId,l),p=[];let m=new ce(((_,g)=>X(_.canonicalString(),g.canonicalString())));for(const _ of s){const g=Wf(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),p.push(o.put(u)),p.push(i.put(g,w0))}return m.forEach((_=>{p.push(this.indexManager.addToCollectionParentIndex(e,_))})),e.addOnCommittedListener((()=>{this.Zn[c]=l.keys()})),R.waitFor(p).next((()=>l))}))}lookupMutationBatch(e,t){return Yt(e).get(t).next((r=>r?(K(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Fn(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?R.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const s=r.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Yt(e).ee({index:zn,range:s},((o,c,l)=>{c.userId===this.userId&&(K(c.batchId>=r,47524,{Yn:r}),i=Fn(this.serializer,c)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=qn;return Yt(e).ee({index:zn,range:t,reverse:!0},((s,i,o)=>{r=i.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,qn],[this.userId,Number.POSITIVE_INFINITY]);return Yt(e).J(zn,t).next((r=>r.map((s=>Fn(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Xi(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return xr(e).ee({range:s},((o,c,l)=>{const[u,p,m]=o,_=wt(p);if(u===this.userId&&t.path.isEqual(_))return Yt(e).get(m).next((g=>{if(!g)throw q(61480,{er:o,batchId:m});K(g.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:g.userId,batchId:m}),i.push(Fn(this.serializer,g))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(X);const s=[];return t.forEach((i=>{const o=Xi(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=xr(e).ee({range:c},((u,p,m)=>{const[_,g,b]=u,C=wt(g);_===this.userId&&i.path.isEqual(C)?r=r.add(b):m.done()}));s.push(l)})),R.waitFor(s).next((()=>this.tr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Xi(this.userId,r),o=IDBKeyRange.lowerBound(i);let c=new ce(X);return xr(e).ee({range:o},((l,u,p)=>{const[m,_,g]=l,b=wt(_);m===this.userId&&r.isPrefixOf(b)?b.length===s&&(c=c.add(g)):p.done()})).next((()=>this.tr(e,c)))}tr(e,t){const r=[],s=[];return t.forEach((i=>{s.push(Yt(e).get(i).next((o=>{if(o===null)throw q(35274,{batchId:i});K(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(Fn(this.serializer,o))})))})),R.waitFor(s).next((()=>r))}removeMutationBatch(e,t){return Xp(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.nr(t.batchId)})),R.forEach(r,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}nr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return R.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return xr(e).ee({range:r},((i,o,c)=>{if(i[0]===this.userId){const l=wt(i[1]);s.push(l)}else c.done()})).next((()=>{K(s.length===0,56720,{rr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return Yp(e,this.userId,t)}ir(e){return Zp(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:qn,lastStreamToken:""}))}}function Yp(n,e,t){const r=Xi(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return xr(n).ee({range:i,Y:!0},((c,l,u)=>{const[p,m,_]=c;p===e&&m===s&&(o=!0),u.done()})).next((()=>o))}function Yt(n){return Ce(n,ft)}function xr(n){return Ce(n,Nr)}function Zp(n){return Ce(n,Gs)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Mt(0)}static ar(){return new Mt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.ur(e).next((t=>{const r=new Mt(t.highestTargetId);return t.highestTargetId=r.next(),this.cr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.ur(e).next((t=>G.fromTimestamp(new oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.ur(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.ur(e).next((s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.cr(e,s))))}addTargetData(e,t){return this.lr(e,t).next((()=>this.ur(e).next((r=>(r.targetCount+=1,this.hr(t,r),this.cr(e,r))))))}updateTargetData(e,t){return this.lr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Ir(e).delete(t.targetId))).next((()=>this.ur(e))).next((r=>(K(r.targetCount>0,8065),r.targetCount-=1,this.cr(e,r))))}removeTargets(e,t,r){let s=0;const i=[];return Ir(e).ee(((o,c)=>{const l=Rs(c);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))})).next((()=>R.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Ir(e).ee(((r,s)=>{const i=Rs(s);t(i)}))}ur(e){return Kd(e).get(bo).next((t=>(K(t!==null,2888),t)))}cr(e,t){return Kd(e).put(bo,t)}lr(e,t){return Ir(e).put(Kp(this.serializer,t))}hr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.ur(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Zn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ir(e).ee({range:s,index:$f},((o,c,l)=>{const u=Rs(c);li(t,u.target)&&(i=u,l.done())})).next((()=>i))}addMatchingKeys(e,t,r){const s=[],i=nn(e);return t.forEach((o=>{const c=$e(o.path);s.push(i.put({targetId:r,path:c})),s.push(this.referenceDelegate.addReference(e,r,o))})),R.waitFor(s)}removeMatchingKeys(e,t,r){const s=nn(e);return R.forEach(t,(i=>{const o=$e(i.path);return R.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])}))}removeMatchingKeysForTargetId(e,t){const r=nn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=nn(e);let i=te();return s.ee({range:r,Y:!0},((o,c,l)=>{const u=wt(o[1]),p=new B(u);i=i.add(p)})).next((()=>i))}containsKey(e,t){const r=$e(t.path),s=IDBKeyRange.bound([r],[Mf(r)],!1,!0);let i=0;return nn(e).ee({index:Wc,Y:!0,range:s},(([o,c],l,u)=>{o!==0&&(i++,u.done())})).next((()=>i>0))}At(e,t){return Ir(e).get(t).next((r=>r?Rs(r):null))}}function Ir(n){return Ce(n,Vr)}function Kd(n){return Ce(n,$n)}function nn(n){return Ce(n,Or)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="LruGarbageCollector",Yb=1048576;function Hd([n,e],[t,r]){const s=X(n,t);return s===0?X(e,r):s}class Zb{constructor(e){this.Pr=e,this.buffer=new ce(Hd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Hd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class em{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){O(Gd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Tn(t)?O(Gd,"Ignoring IndexedDB error during garbage collection: ",t):await sr(t)}await this.Ar(3e5)}))}}class eI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return R.resolve(lt.ce);const r=new Zb(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve($d)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$d):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,o,c,l,u;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s)))).next((m=>(r=m,c=Date.now(),this.removeTargets(e,r,t)))).next((m=>(i=m,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((m=>(u=Date.now(),wr()<=ne.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(u-l)+`ms
Total Duration: ${u-p}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m}))))}}function tm(n,e){return new eI(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t){this.db=e,this.garbageCollector=tm(this,t)}dr(e){const t=this.pr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}mr(e,t){return this.yr(e,((r,s)=>t(s)))}addReference(e,t,r){return Wi(e,r)}removeReference(e,t,r){return Wi(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Wi(e,t)}wr(e,t){return(function(s,i){let o=!1;return Zp(s).te((c=>Yp(s,c,i).next((l=>(l&&(o=!0),R.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.yr(e,((o,c)=>{if(c<=t){const l=this.wr(e,o).next((u=>{if(!u)return i++,r.getEntry(e,o).next((()=>(r.removeEntry(o,G.min()),nn(e).delete((function(m){return[0,$e(m.path)]})(o)))))}));s.push(l)}})).next((()=>R.waitFor(s))).next((()=>r.apply(e))).next((()=>i))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Wi(e,t)}yr(e,t){const r=nn(e);let s,i=lt.ce;return r.ee({index:Wc},(([o,c],{path:l,sequenceNumber:u})=>{o===0?(i!==lt.ce&&t(new B(wt(s)),i),i=u,s=l):i=lt.ce})).next((()=>{i!==lt.ce&&t(new B(wt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wi(n,e){return nn(n).put((function(r,s){return{targetId:0,path:$e(r.path),sequenceNumber:s}})(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.changes=new Ut((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Nn(e).put(r)}removeEntry(e,t,r){return Nn(e).delete((function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],xo(o),c[c.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Sr(e,r))))}getEntry(e,t){let r=Ie.newInvalidDocument(t);return Nn(e).ee({index:Yi,range:IDBKeyRange.only(Ts(t))},((s,i)=>{r=this.br(t,i)})).next((()=>r))}Dr(e,t){let r={size:0,document:Ie.newInvalidDocument(t)};return Nn(e).ee({index:Yi,range:IDBKeyRange.only(Ts(t))},((s,i)=>{r={document:this.br(t,i),size:Ao(i)}})).next((()=>r))}getEntries(e,t){let r=st();return this.Cr(e,t,((s,i)=>{const o=this.br(s,i);r=r.insert(s,o)})).next((()=>r))}vr(e,t){let r=st(),s=new ge(B.comparator);return this.Cr(e,t,((i,o)=>{const c=this.br(i,o);r=r.insert(i,c),s=s.insert(i,Ao(o))})).next((()=>({documents:r,Fr:s})))}Cr(e,t,r){if(t.isEmpty())return R.resolve();let s=new ce(Xd);t.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(Ts(s.first()),Ts(s.last())),o=s.getIterator();let c=o.getNext();return Nn(e).ee({index:Yi,range:i},((l,u,p)=>{const m=B.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;c&&Xd(c,m)<0;)r(c,null),c=o.getNext();c&&c.isEqual(m)&&(r(c,u),c=o.hasNext()?o.getNext():null),c?p.j(Ts(c)):p.done()})).next((()=>{for(;c;)r(c,null),c=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),xo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Nn(e).J(IDBKeyRange.bound(c,l,!0)).next((u=>{i?.incrementDocumentReadCount(u.length);let p=st();for(const m of u){const _=this.br(B.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(di(t,_)||s.has(_.key))&&(p=p.insert(_.key,_))}return p}))}getAllFromCollectionGroup(e,t,r,s){let i=st();const o=Qd(t,r),c=Qd(t,it.max());return Nn(e).ee({index:qf,range:IDBKeyRange.bound(o,c,!0)},((l,u,p)=>{const m=this.br(B.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(m.key,m),i.size===s&&p.done()})).next((()=>i))}newChangeBuffer(e){return new rI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Jd(e).get(cc).next((t=>(K(!!t,20021),t)))}Sr(e,t){return Jd(e).put(cc,t)}br(e,t){if(t){const r=Bb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(G.min())))return r}return Ie.newInvalidDocument(e)}}function rm(n){return new nI(n)}class rI extends nm{constructor(e,t){super(),this.Mr=e,this.trackRemovals=t,this.Or=new Ut((r=>r.toString()),((r,s)=>r.isEqual(s)))}applyChanges(e){const t=[];let r=0,s=new ce(((i,o)=>X(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const c=this.Or.get(i);if(t.push(this.Mr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=Dd(this.Mr.serializer,o);s=s.add(i.path.popLast());const u=Ao(l);r+=u-c.size,t.push(this.Mr.addEntry(e,i,l))}else if(r-=c.size,this.trackRemovals){const l=Dd(this.Mr.serializer,o.convertToNoDocument(G.min()));t.push(this.Mr.addEntry(e,i,l))}})),s.forEach((i=>{t.push(this.Mr.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Mr.updateMetadata(e,r)),R.waitFor(t)}getFromCache(e,t){return this.Mr.Dr(e,t).next((r=>(this.Or.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Mr.vr(e,t).next((({documents:r,Fr:s})=>(s.forEach(((i,o)=>{this.Or.set(i,{size:o,readTime:r.get(i).readTime})})),r)))}}function Jd(n){return Ce(n,Hs)}function Nn(n){return Ce(n,_o)}function Ts(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qd(n,e){const t=e.documentKey.path.toArray();return[n,xo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Xd(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=X(t[i],r[i]),s)return s;return s=X(t.length,r.length),s||(s=X(t[t.length-2],r[r.length-2]),s||X(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&js(r.mutation,s,Xe.empty(),oe.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,te()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=te()){const s=Tt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=Ss();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Tt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,te())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,r,s){let i=st();const o=Ls(),c=(function(){return Ls()})();return t.forEach(((l,u)=>{const p=r.get(u.key);s.has(u.key)&&(p===void 0||p.mutation instanceof Bt)?i=i.insert(u.key,u):p!==void 0?(o.set(u.key,p.mutation.getFieldMask()),js(p.mutation,u,p.mutation.getFieldMask(),oe.now())):o.set(u.key,Xe.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,p)=>o.set(u,p))),t.forEach(((u,p)=>c.set(u,new sI(p,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const r=Ls();let s=new ge(((o,c)=>o-c)),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let p=r.get(l)||Xe.empty();p=c.applyToLocalView(u,p),r.set(l,p);const m=(s.get(c.batchId)||te()).add(l);s=s.insert(c.batchId,m)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,p=l.value,m=wp();p.forEach((_=>{if(!i.has(_)){const g=Ap(t.get(_),r.get(_));g!==null&&m.set(_,g),i=i.add(_)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,m))}return R.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return ib(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(Tt());let c=qs,l=i;return o.next((u=>R.forEach(u,((p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(p)?R.resolve():this.remoteDocumentCache.getEntry(e,p).next((_=>{l=l.insert(p,_)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,te()))).next((p=>({batchId:c,changes:Ip(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((r=>{let s=Ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Ss();return this.indexManager.getCollectionParents(e,i).next((c=>R.forEach(c,(l=>{const u=(function(m,_){return new Qr(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((p=>{p.forEach(((m,_)=>{o=o.insert(m,_)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const p=u.getKey();o.get(p)===null&&(o=o.insert(p,Ie.newInvalidDocument(p)))}));let c=Ss();return o.forEach(((l,u)=>{const p=i.get(l);p!==void 0&&js(p.mutation,u,Xe.empty(),oe.now()),di(t,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return R.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Je(s.createTime)}})(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:Gp(s.bundledQuery),readTime:Je(s.readTime)}})(t)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.overlays=new ge(B.comparator),this.Lr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Tt();return R.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.St(e,t,i)})),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=Tt(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ge(((u,p)=>u-p));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let p=i.get(u.largestBatchId);p===null&&(p=Tt(),i=i.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const c=Tt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,p)=>c.set(u,p))),!(c.size()>=s)););return R.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new el(t,r));let i=this.Lr.get(t);i===void 0&&(i=te(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.kr=new ce(De.Kr),this.qr=new ce(De.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new De(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new De(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new B(new ie([])),r=new De(t,e),s=new De(t,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new B(new ie([])),r=new De(t,e),s=new De(t,e+1);let i=te();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new De(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return B.comparator(e.key,t.key)||X(e.Jr,t.Jr)}static Ur(e,t){return X(e.Jr,t.Jr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ce(De.Kr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yc(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new De(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,t){return R.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?qn:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new De(t,0),s=new De(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Jr);i.push(c)})),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(X);return t.forEach((s=>{const i=new De(s,0),o=new De(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],(c=>{r=r.add(c.Jr)}))})),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const o=new De(new B(i),0);let c=new ce(X);return this.Hr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Jr)),!0)}),o),R.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){K(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(t.mutations,(s=>{const i=new De(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new De(t,0),s=this.Hr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.ti=e,this.docs=(function(){return new ge(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(t))}getEntries(e,t){let r=st();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ie.newInvalidDocument(s))})),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=st();const o=t.path,c=new B(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:p}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Bc(Ff(p),r)<=0||(s.has(p.key)||di(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){q(9500)}ni(e,t){return R.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new uI(this)}getSize(e){return R.resolve(this.size)}}class uI extends nm{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),R.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.persistence=e,this.ri=new Ut((t=>Zn(t)),li),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.ii=0,this.si=new il,this.targetCount=0,this.oi=Mt._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),R.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Mt(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.lr(t),R.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),R.waitFor(i).next((()=>s))}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this._i={},this.overlays={},this.ai=new lt(0),this.ui=!1,this.ui=!0,this.ci=new aI,this.referenceDelegate=e(this),this.li=new dI(this),this.indexManager=new Jb,this.remoteDocumentCache=(function(s){return new lI(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new $p(t),this.Pi=new iI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new cI(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new hI(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return R.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class hI extends Bf{constructor(e){super(),this.currentSequenceNumber=e}}class na{constructor(e){this.persistence=e,this.Ri=new il,this.Ai=null}static Vi(e){return new na(e)}get di(){if(this.Ai)return this.Ai;throw q(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),R.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,(r=>{const s=B.fromPath(r);return this.mi(e,s).next((i=>{i||t.removeEntry(s,G.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return R.or([()=>R.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ro{constructor(e,t){this.persistence=e,this.fi=new Ut((r=>$e(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=tm(this,t)}static Vi(e,t){return new Ro(e,t)}Ti(){}Ii(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return R.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?R.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(r++,i.removeEntry(o,G.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),R.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=eo(e.data.value)),t}wr(e,t,r){return R.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.serializer=e}k(e,t,r,s){const i=new Wo("createOrUpgrade",t);r<1&&s>=1&&((function(l){l.createObjectStore(ci)})(e),(function(l){l.createObjectStore(Gs,{keyPath:I0}),l.createObjectStore(ft,{keyPath:cd,autoIncrement:!0}).createIndex(zn,ld,{unique:!0}),l.createObjectStore(Nr)})(e),Yd(e),(function(l){l.createObjectStore(Ln)})(e));let o=R.resolve();return r<3&&s>=3&&(r!==0&&((function(l){l.deleteObjectStore(Or),l.deleteObjectStore(Vr),l.deleteObjectStore($n)})(e),Yd(e)),o=o.next((()=>(function(l){const u=l.store($n),p={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return u.put(bo,p)})(i)))),r<4&&s>=4&&(r!==0&&(o=o.next((()=>(function(l,u){return u.store(ft).J().next((m=>{l.deleteObjectStore(ft),l.createObjectStore(ft,{keyPath:cd,autoIncrement:!0}).createIndex(zn,ld,{unique:!0});const _=u.store(ft),g=m.map((b=>_.put(b)));return R.waitFor(g)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(Mr,{keyPath:P0})})(e)}))),r<5&&s>=5&&(o=o.next((()=>this.gi(i)))),r<6&&s>=6&&(o=o.next((()=>((function(l){l.createObjectStore(Hs)})(e),this.pi(i))))),r<7&&s>=7&&(o=o.next((()=>this.yi(i)))),r<8&&s>=8&&(o=o.next((()=>this.wi(e,i)))),r<9&&s>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&s>=10&&(o=o.next((()=>this.Si(i)))),r<11&&s>=11&&(o=o.next((()=>{(function(l){l.createObjectStore($o,{keyPath:C0})})(e),(function(l){l.createObjectStore(Ko,{keyPath:k0})})(e)}))),r<12&&s>=12&&(o=o.next((()=>{(function(l){const u=l.createObjectStore(Go,{keyPath:j0});u.createIndex(uc,F0,{unique:!1}),u.createIndex(Hf,U0,{unique:!1})})(e)}))),r<13&&s>=13&&(o=o.next((()=>(function(l){const u=l.createObjectStore(_o,{keyPath:T0});u.createIndex(Yi,E0),u.createIndex(qf,v0)})(e))).next((()=>this.bi(e,i))).next((()=>e.deleteObjectStore(Ln)))),r<14&&s>=14&&(o=o.next((()=>this.Di(e,i)))),r<15&&s>=15&&(o=o.next((()=>(function(l){l.createObjectStore(qc,{keyPath:D0,autoIncrement:!0}).createIndex(lc,N0,{unique:!1}),l.createObjectStore(Ns,{keyPath:V0}).createIndex(Kf,O0,{unique:!1}),l.createObjectStore(Vs,{keyPath:M0}).createIndex(Gf,L0,{unique:!1})})(e)))),r<16&&s>=16&&(o=o.next((()=>{t.objectStore(Ns).clear()})).next((()=>{t.objectStore(Vs).clear()}))),r<17&&s>=17&&(o=o.next((()=>{(function(l){l.createObjectStore($c,{keyPath:B0})})(e)}))),r<18&&s>=18&&bf()&&(o=o.next((()=>{t.objectStore(Ns).clear()})).next((()=>{t.objectStore(Vs).clear()}))),o}pi(e){let t=0;return e.store(Ln).ee(((r,s)=>{t+=Ao(s)})).next((()=>{const r={byteSize:t};return e.store(Hs).put(cc,r)}))}gi(e){const t=e.store(Gs),r=e.store(ft);return t.J().next((s=>R.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,qn],[i.userId,i.lastAcknowledgedBatchId]);return r.J(zn,o).next((c=>R.forEach(c,(l=>{K(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=Fn(this.serializer,l);return Xp(e,i.userId,u).next((()=>{}))}))))}))))}yi(e){const t=e.store(Or),r=e.store(Ln);return e.store($n).get(bo).next((s=>{const i=[];return r.ee(((o,c)=>{const l=new ie(o),u=(function(m){return[0,$e(m)]})(l);i.push(t.get(u).next((p=>p?R.resolve():(m=>t.put({targetId:0,path:$e(m),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>R.waitFor(i)))}))}wi(e,t){e.createObjectStore(Js,{keyPath:R0});const r=t.store(Js),s=new sl,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return r.put({collectionId:c,parent:$e(l)})}};return t.store(Ln).ee({Y:!0},((o,c)=>{const l=new ie(o);return i(l.popLast())})).next((()=>t.store(Nr).ee({Y:!0},(([o,c,l],u)=>{const p=wt(c);return i(p.popLast())}))))}Si(e){const t=e.store(Vr);return t.ee(((r,s)=>{const i=Rs(s),o=Kp(this.serializer,i);return t.put(o)}))}bi(e,t){const r=t.store(Ln),s=[];return r.ee(((i,o)=>{const c=t.store(_o),l=(function(m){return m.document?new B(ie.fromString(m.document.name).popFirst(5)):m.noDocument?B.fromSegments(m.noDocument.path):m.unknownDocument?B.fromSegments(m.unknownDocument.path):q(36783)})(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(u))})).next((()=>R.waitFor(s)))}Di(e,t){const r=t.store(ft),s=rm(this.serializer),i=new ol(na.Vi,this.serializer.yt);return r.J().next((o=>{const c=new Map;return o.forEach((l=>{let u=c.get(l.userId)??te();Fn(this.serializer,l).keys().forEach((p=>u=u.add(p))),c.set(l.userId,u)})),R.forEach(c,((l,u)=>{const p=new Ve(u),m=ea.wt(this.serializer,p),_=i.getIndexManager(p),g=ta.wt(p,this.serializer,_,i.referenceDelegate);return new sm(s,g,m,_).recalculateAndSaveOverlaysForDocumentKeys(new dc(t,lt.ce),l).next()}))}))}}function Yd(n){n.createObjectStore(Or,{keyPath:S0}).createIndex(Wc,A0,{unique:!0}),n.createObjectStore(Vr,{keyPath:"targetId"}).createIndex($f,x0,{unique:!0}),n.createObjectStore($n)}const Zt="IndexedDbPersistence",Ba=18e5,za=5e3,Wa="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",pI="main";class al{constructor(e,t,r,s,i,o,c,l,u,p,m=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ci=i,this.window=o,this.document=c,this.Fi=u,this.Mi=p,this.xi=m,this.ai=null,this.ui=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Oi=null,this.inForeground=!1,this.Ni=null,this.Bi=null,this.Li=Number.NEGATIVE_INFINITY,this.ki=_=>Promise.resolve(),!al.v())throw new L(D.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tI(this,s),this.Ki=t+pI,this.serializer=new $p(l),this.qi=new pn(this.Ki,this.xi,new fI(this.serializer)),this.ci=new Wb,this.li=new Xb(this.referenceDelegate,this.serializer),this.remoteDocumentCache=rm(this.serializer),this.Pi=new zb,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,p===!1&&He(Zt,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.$i().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(D.FAILED_PRECONDITION,Wa);return this.Wi(),this.Qi(),this.Gi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.li.getHighestSequenceNumber(e)))})).then((e=>{this.ai=new lt(e,this.Fi)})).then((()=>{this.ui=!0})).catch((e=>(this.qi&&this.qi.close(),Promise.reject(e))))}zi(e){return this.ki=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.qi.q((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ci.enqueueAndForget((async()=>{this.started&&await this.$i()})))}$i(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>qi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ji(e).next((t=>{t||(this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))))}))})).next((()=>this.Ji(e))).next((t=>this.isPrimary&&!t?this.Hi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(Tn(e))return O(Zt,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O(Zt,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ci.enqueueRetryable((()=>this.ki(e))),this.isPrimary=e}))}ji(e){return Es(e).get(mr).next((t=>R.resolve(this.Xi(t))))}Yi(e){return qi(e).delete(this.clientId)}async es(){if(this.isPrimary&&!this.ts(this.Li,Ba)){this.Li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Ce(t,Mr);return r.J().next((s=>{const i=this.ns(s,Ba),o=s.filter((c=>i.indexOf(c)===-1));return R.forEach(o,(c=>r.delete(c.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.rs(t.clientId))}}Gi(){this.Bi=this.Ci.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.$i().then((()=>this.es())).then((()=>this.Gi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Ji(e){return this.Mi?R.resolve(!0):Es(e).get(mr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,za)&&!this.ss(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new L(D.FAILED_PRECONDITION,Wa);return!1}}return!(!this.networkEnabled||!this.inForeground)||qi(e).J().next((r=>this.ns(r,za).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&O(Zt,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ui=!1,this._s(),this.Bi&&(this.Bi.cancel(),this.Bi=null),this.us(),this.cs(),await this.qi.runTransaction("shutdown","readwrite",[ci,Mr],(e=>{const t=new dc(e,lt.ce);return this.Hi(t).next((()=>this.Yi(t)))})),this.qi.close(),this.ls()}ns(e,t){return e.filter((r=>this.ts(r.updateTimeMs,t)&&!this.ss(r.clientId)))}hs(){return this.runTransaction("getActiveClients","readonly",(e=>qi(e).J().next((t=>this.ns(t,Ba).map((r=>r.clientId))))))}get started(){return this.ui}getGlobalsCache(){return this.ci}getMutationQueue(e,t){return ta.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Qb(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return ea.wt(this.serializer,e)}getBundleCache(){return this.Pi}runTransaction(e,t,r){O(Zt,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?q0:l===17?Yf:l===16?W0:l===15?Kc:l===14?Xf:l===13?Qf:l===12?z0:l===11?Jf:void q(60245)})(this.xi);let o;return this.qi.runTransaction(e,s,i,(c=>(o=new dc(c,this.ai?this.ai.next():lt.ce),t==="readwrite-primary"?this.ji(o).next((l=>!!l||this.Ji(o))).next((l=>{if(!l)throw He(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ci.enqueueRetryable((()=>this.ki(!1))),new L(D.FAILED_PRECONDITION,Uf);return r(o)})).next((l=>this.Zi(o).next((()=>l)))):this.Ps(o).next((()=>r(o)))))).then((c=>(o.raiseOnCommittedEvent(),c)))}Ps(e){return Es(e).get(mr).next((t=>{if(t!==null&&this.ts(t.leaseTimestampMs,za)&&!this.ss(t.ownerId)&&!this.Xi(t)&&!(this.Mi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(D.FAILED_PRECONDITION,Wa)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Es(e).put(mr,t)}static v(){return pn.v()}Hi(e){const t=Es(e);return t.get(mr).next((r=>this.Xi(r)?(O(Zt,"Releasing primary lease."),t.delete(mr)):R.resolve()))}ts(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(He(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ni=()=>{this.Ci.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.$i())))},this.document.addEventListener("visibilitychange",this.Ni),this.inForeground=this.document.visibilityState==="visible")}us(){this.Ni&&(this.document.removeEventListener("visibilitychange",this.Ni),this.Ni=null)}Qi(){typeof this.window?.addEventListener=="function"&&(this.Oi=()=>{this._s();const e=/(?:Version|Mobile)\/1[456]/;_f()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ci.enterRestrictedMode(!0),this.Ci.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Oi))}cs(){this.Oi&&(this.window.removeEventListener("pagehide",this.Oi),this.Oi=null)}ss(e){try{const t=this.Ui?.getItem(this.rs(e))!==null;return O(Zt,`Client '${e}' ${t?"is":"is not"} zombied in LocalStorage`),t}catch(t){return He(Zt,"Failed to get zombied client id.",t),!1}}_s(){if(this.Ui)try{this.Ui.setItem(this.rs(this.clientId),String(Date.now()))}catch(e){He("Failed to set zombie client id.",e)}}ls(){if(this.Ui)try{this.Ui.removeItem(this.rs(this.clientId))}catch{}}rs(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Es(n){return Ce(n,ci)}function qi(n){return Ce(n,Mr)}function mI(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=te(),s=te();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new cl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return _f()?8:zf(Pe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new gI;return this.ys(e,t,o).next((c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>i.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(wr()<=ne.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(wr()<=ne.DEBUG&&O("QueryEngine","Query:",Tr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(wr()<=ne.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):R.resolve())}gs(e,t){if(Td(t))return R.resolve(null);let r=ut(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=_c(t,null,"F"),r=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=te(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.Ss(t,c);return this.bs(t,u,o,l.readTime)?this.gs(e,_c(t,null,"F")):this.Ds(e,u,t,l)}))))})))))}ps(e,t,r,s){return Td(t)||s.isEqual(G.min())?R.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.Ss(t,i);return this.bs(t,o,r,s)?R.resolve(null):(wr()<=ne.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tr(t)),this.Ds(e,o,t,f0(s,qs)).next((c=>c)))}))}Ss(e,t){let r=new ce(_p(e));return t.forEach(((s,i)=>{di(e,i)&&(r=r.add(i))})),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return wr()<=ne.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Tr(t)),this.fs.getDocumentsMatchingQuery(e,t,it.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="LocalStore",yI=3e8;class _I{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ge(X),this.Fs=new Ut((i=>Zn(i)),li),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function om(n,e,t,r){return new _I(n,e,t,r)}async function am(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=te();for(const u of s){o.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}for(const u of i){c.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function bI(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,p){const m=u.batch,_=m.keys();let g=R.resolve();return _.forEach((b=>{g=g.next((()=>p.getEntry(l,b))).next((C=>{const E=u.docVersions.get(b);K(E!==null,48541),C.version.compareTo(E)<0&&(m.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),p.addEntry(C)))}))})),g.next((()=>c.mutationQueue.removeMutationBatch(l,m)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=te();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function cm(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function II(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((p,m)=>{const _=s.get(m);if(!_)return;c.push(t.li.removeMatchingKeys(i,p.removedDocuments,m).next((()=>t.li.addMatchingKeys(i,p.addedDocuments,m))));let g=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?g=g.withResumeToken(Ae.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):p.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(p.resumeToken,r)),s=s.insert(m,g),(function(C,E,N){return C.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=yI?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(_,g,p)&&c.push(t.li.updateTargetData(i,g))}));let l=st(),u=te();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))})),c.push(wI(i,o,e.documentUpdates).next((p=>{l=p.Bs,u=p.Ls}))),!r.isEqual(G.min())){const p=t.li.getLastRemoteSnapshotVersion(i).next((m=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(p)}return R.waitFor(c).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(t.vs=s,i)))}function wI(n,e,t){let r=te(),s=te();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=st();return t.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):O(ll,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function TI(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=qn),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function EI(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.li.getTargetData(r,e).next((i=>i?(s=i,R.resolve(s)):t.li.allocateTargetId(r).next((o=>(s=new Et(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function Sc(n,e,t){const r=Y(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Tn(o))throw o;O(ll,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Zd(n,e,t){const r=Y(n);let s=G.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,p){const m=Y(l),_=m.Fs.get(p);return _!==void 0?R.resolve(m.vs.get(_)):m.li.getTargetData(u,p)})(r,o,ut(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:G.min(),t?i:te()))).next((c=>(vI(r,cb(e),c),{documents:c,ks:i})))))}function vI(n,e,t){let r=n.Ms.get(e)||G.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.Ms.set(e,r)}class eh{constructor(){this.activeTargetIds=pb()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lm{constructor(){this.vo=new eh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new eh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="ConnectivityMonitor";class nh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){O(th,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){O(th,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i=null;function Ac(){return $i===null?$i=(function(){return 268435456+Math.round(2147483648*Math.random())})():$i++,"0x"+$i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="RestConnection",SI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class AI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Io?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=Ac(),c=this.Qo(e,t.toUriEncodedString());O(qa,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),p=oi(u);return this.zo(e,c,l,r,p).then((m=>(O(qa,`Received RPC '${e}' ${o}: `,m),m)),(m=>{throw yn(qa,`RPC '${e}' ${o} failed with error: `,m,"url: ",c,"request:",r),m}))}jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Jr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,t){const r=SI[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection",vs=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Sr extends AI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Sr.c_){const e=Df();vs(e,kf.STAT_EVENT,(t=>{t.stat===ic.PROXY?O(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===ic.NOPROXY&&O(Ue,"STAT_EVENT: detected no buffering proxy")})),Sr.c_=!0}}zo(e,t,r,s,i){const o=Ac();return new Promise(((c,l)=>{const u=new Pf;u.setWithCredentials(!0),u.listenOnce(Cf.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ji.NO_ERROR:const m=u.getResponseJson();O(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),c(m);break;case Ji.TIMEOUT:O(Ue,`RPC '${e}' ${o} timed out`),l(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case Ji.HTTP_ERROR:const _=u.getStatus();if(O(Ue,`RPC '${e}' ${o} failed with status:`,_,"response text:",u.getResponseText()),_>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const b=g?.error;if(b&&b.status&&b.message){const C=(function(N){const V=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(V)>=0?V:D.UNKNOWN})(b.status);l(new L(C,b.message))}else l(new L(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new L(D.UNAVAILABLE,"Connection failed."));break;default:q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{O(Ue,`RPC '${e}' ${o} completed.`)}}));const p=JSON.stringify(s);O(Ue,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",p,r,15)}))}T_(e,t,r){const s=Ac(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");O(Ue,`Creating RPC '${e}' stream ${s}: ${u}`,c);const p=o.createWebChannel(u,c);this.I_(p);let m=!1,_=!1;const g=new RI({Jo:b=>{_?O(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(m||(O(Ue,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),O(Ue,`RPC '${e}' stream ${s} sending:`,b),p.send(b))},Ho:()=>p.close()});return vs(p,xs.EventType.OPEN,(()=>{_||(O(Ue,`RPC '${e}' stream ${s} transport opened.`),g.i_())})),vs(p,xs.EventType.CLOSE,(()=>{_||(_=!0,O(Ue,`RPC '${e}' stream ${s} transport closed`),g.o_(),this.E_(p))})),vs(p,xs.EventType.ERROR,(b=>{_||(_=!0,yn(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,b.name,"Message:",b.message),g.o_(new L(D.UNAVAILABLE,"The operation could not be completed")))})),vs(p,xs.EventType.MESSAGE,(b=>{if(!_){const C=b.data[0];K(!!C,16349);const E=C,N=E?.error||E[0]?.error;if(N){O(Ue,`RPC '${e}' stream ${s} received error:`,N);const V=N.status;let j=(function(J){const x=ve[J];if(x!==void 0)return Cp(x)})(V),z=N.message;V==="NOT_FOUND"&&z.includes("database")&&z.includes("does not exist")&&z.includes(this.databaseId.database)&&yn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),j===void 0&&(j=D.INTERNAL,z="Unknown error status: "+V+" with message "+N.message),_=!0,g.o_(new L(j,z)),p.close()}else O(Ue,`RPC '${e}' stream ${s} received:`,C),g.__(C)}})),Sr.u_(),setTimeout((()=>{g.s_()}),0),g}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Nf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(n){return new Sr(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){return typeof window<"u"?window:null}function io(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n){return new kb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr.c_=!1;class um{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="PersistentStream";class dm{constructor(e,t,r,s,i,o,c,l){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new um(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(He(t.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new L(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return O(rh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(O(rh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kI extends dm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Vb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return G.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Je(o.readTime):G.min()})(e);return this.listener.H_(t,r)}Z_(e){const t={};t.database=wc(this.serializer),t.addTarget=(function(i,o){let c;const l=o.target;if(c=wo(l)?{documents:jp(i,l)}:{query:Fp(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Np(i,o.resumeToken);const u=bc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(G.min())>0){c.readTime=Wr(i,o.snapshotVersion.toTimestamp());const u=bc(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=Mb(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=wc(this.serializer),t.removeTarget=e,this.K_(t)}}class DI extends dm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Ob(e.writeResults,e.commitTime),r=Je(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=wc(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>vo(this.serializer,r)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{}class VI extends NI{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Ic(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(D.UNKNOWN,i.toString())}))}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Ic(t,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(D.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function OI(n,e,t,r){return new VI(n,e,t,r)}class MI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(He(t),this.aa=!1):O("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="RemoteStore";class LI{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Mt(1e3),this.Va=new Mt(1001),this.da=new Set,this.ma=[],this.fa=i,this.fa.Mo((o=>{r.enqueueAndForget((async()=>{ir(this)&&(O(At,"Restarting streams for network reachability change."),await(async function(l){const u=Y(l);u.da.add(4),await pi(u),u.ga.set("Unknown"),u.da.delete(4),await sa(u)})(this))}))})),this.ga=new MI(r,s)}}async function sa(n){if(ir(n))for(const e of n.ma)await e(!0)}async function pi(n){for(const e of n.ma)await e(!1)}function Rc(n,e){return n.Ea.get(e)||void 0}function hm(n,e){const t=Y(n),r=Rc(t,e.targetId);if(r!==void 0&&t.Ia.has(r))return;const s=(function(c,l){const u=Rc(c,l);u!==void 0&&c.Ra.delete(u);const p=(function(_,g){return g%2!=0?_.Va.next():_.Aa.next()})(c,l);return c.Ea.set(l,p),c.Ra.set(p,l),p})(t,e.targetId);O(At,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Et(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ia.set(s,i),fl(t)?hl(t):Yr(t).O_()&&dl(t,i)}function ul(n,e){const t=Y(n),r=Yr(t),s=Rc(t,e);O(At,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ia.delete(s),t.Ea.delete(e),t.Ra.delete(s),r.O_()&&fm(t,s),t.Ia.size===0&&(r.O_()?r.L_():ir(t)&&t.ga.set("Unknown"))}function dl(n,e){if(n.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.Ra.get(e.targetId);if(t===void 0)return void O(At,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Yr(n).Z_(e)}function fm(n,e){n.pa.$e(e),Yr(n).X_(e)}function hl(n){n.pa=new Ab({getRemoteKeysForTarget:e=>{const t=n.Ra.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):te()},At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Yr(n).start(),n.ga.ua()}function fl(n){return ir(n)&&!Yr(n).x_()&&n.Ia.size>0}function ir(n){return Y(n).da.size===0}function pm(n){n.pa=void 0}async function jI(n){n.ga.set("Online")}async function FI(n){n.Ia.forEach(((e,t)=>{dl(n,e)}))}async function UI(n,e){pm(n),fl(n)?(n.ga.ha(e),hl(n)):n.ga.set("Unknown")}async function BI(n,e,t){if(n.ga.set("Online"),e instanceof Dp&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds){if(s.Ia.has(c)){const l=s.Ra.get(c);l!==void 0&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.Ra.delete(c)),s.Ia.delete(c)}s.pa.removeTarget(c)}})(n,e)}catch(r){O(At,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Po(n,r)}else if(e instanceof ro?n.pa.Xe(e):e instanceof kp?n.pa.st(e):n.pa.tt(e),!t.isEqual(G.min()))try{const r=await cm(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const c=i.pa.Tt(o);c.targetChanges.forEach(((u,p)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(p);m&&i.Ia.set(p,m.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,p)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(Ae.EMPTY_BYTE_STRING,m.snapshotVersion)),fm(i,u);const _=new Et(m.target,u,p,m.sequenceNumber);dl(i,_)}));const l=(function(p,m){const _=new Map;m.targetChanges.forEach(((b,C)=>{const E=p.Ra.get(C);E!==void 0&&_.set(E,b)}));let g=new ge(X);return m.targetMismatches.forEach(((b,C)=>{const E=p.Ra.get(b);E!==void 0&&(g=g.insert(E,C))})),new hi(m.snapshotVersion,_,g,m.documentUpdates,m.resolvedLimboDocuments)})(i,c);return i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){O(At,"Failed to raise snapshot:",r),await Po(n,r)}}async function Po(n,e,t){if(!Tn(e))throw e;n.da.add(1),await pi(n),n.ga.set("Offline"),t||(t=()=>cm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(At,"Retrying IndexedDB access"),await t(),n.da.delete(1),await sa(n)}))}function mm(n,e){return e().catch((t=>Po(n,t,e)))}async function mi(n){const e=Y(n),t=In(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qn;for(;zI(e);)try{const s=await TI(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,WI(e,s)}catch(s){await Po(e,s)}gm(e)&&ym(e)}function zI(n){return ir(n)&&n.Ta.length<10}function WI(n,e){n.Ta.push(e);const t=In(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function gm(n){return ir(n)&&!In(n).x_()&&n.Ta.length>0}function ym(n){In(n).start()}async function qI(n){In(n).ra()}async function $I(n){const e=In(n);for(const t of n.Ta)e.ea(t.mutations)}async function KI(n,e,t){const r=n.Ta.shift(),s=Zc.from(r,e,t);await mm(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await mi(n)}async function GI(n,e){e&&In(n).Y_&&await(async function(r,s){if((function(o){return vb(o)&&o!==D.ABORTED})(s.code)){const i=r.Ta.shift();In(r).B_(),await mm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await mi(r)}})(n,e),gm(n)&&ym(n)}async function sh(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),O(At,"RemoteStore received new credentials");const r=ir(t);t.da.add(3),await pi(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await sa(t)}async function HI(n,e){const t=Y(n);e?(t.da.delete(2),await sa(t)):e||(t.da.add(2),await pi(t),t.ga.set("Unknown"))}function Yr(n){return n.ya||(n.ya=(function(t,r,s){const i=Y(t);return i.sa(),new kI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:jI.bind(null,n),Yo:FI.bind(null,n),t_:UI.bind(null,n),H_:BI.bind(null,n)}),n.ma.push((async e=>{e?(n.ya.B_(),fl(n)?hl(n):n.ga.set("Unknown")):(await n.ya.stop(),pm(n))}))),n.ya}function In(n){return n.wa||(n.wa=(function(t,r,s){const i=Y(t);return i.sa(),new DI(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qI.bind(null,n),t_:GI.bind(null,n),ta:$I.bind(null,n),na:KI.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await mi(n)):(await n.wa.stop(),n.Ta.length>0&&(O(At,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new pl(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ml(n,e){if(He("AsyncQueue",`${e}: ${n}`),Tn(n))return new L(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{static emptySet(e){return new Ar(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(t,r)=>B.comparator(t.key,r.key),this.keyedMap=Ss(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ar)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ar;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.Sa=new ge(B.comparator)}track(e){const t=e.doc.key,r=this.Sa.get(t);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(t,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(t):e.type===1&&r.type===2?this.Sa=this.Sa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(t,e)}Da(){const e=[];return this.Sa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class qr{constructor(e,t,r,s,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new qr(e,t,Ar.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some((e=>e.Ma()))}}class QI{constructor(){this.queries=oh(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=oh(),i.forEach(((o,c)=>{for(const l of c.va)l.onError(r)}))})(this,new L(D.ABORTED,"Firestore shutting down"))}}function oh(){return new Ut((n=>yp(n)),Qo)}async function gl(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Fa()&&e.Ma()&&(r=2):(i=new JI,r=e.Ma()?0:1);try{switch(r){case 0:i.Ca=await t.onListen(s,!0);break;case 1:i.Ca=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=ml(o,`Initialization of query '${Tr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.va.push(e),e.Oa(t.onlineState),i.Ca&&e.Na(i.Ca)&&_l(t)}async function yl(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.va.indexOf(e);o>=0&&(i.va.splice(o,1),i.va.length===0?s=e.Ma()?0:1:!i.Fa()&&e.Ma()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function XI(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.va)c.Na(s)&&(r=!0);o.Ca=s}}r&&_l(t)}function YI(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.va)i.onError(t);r.queries.delete(e)}function _l(n){n.xa.forEach((e=>{e.next()}))}var Pc,ah;(ah=Pc||(Pc={})).Ba="default",ah.Cache="cache";class bl{constructor(e,t,r){this.query=e,this.La=t,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ka?this.qa(e)&&(this.La.next(e),t=!0):this.Ua(e,this.onlineState)&&(this.$a(e),t=!0),this.Ka=e,t}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let t=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),t=!0),t}Ua(e,t){if(!e.fromCache||!this.Ma())return!0;const r=t!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const t=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}$a(e){e=qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Pc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.key=e}}class bm{constructor(e){this.key=e}}class ZI{constructor(e,t){this.query=e,this.tu=t,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=te(),this.mutatedKeys=te(),this.iu=_p(e),this.su=new Ar(this.iu)}get ou(){return this.tu}_u(e,t){const r=t?t.au:new ih,s=t?t.su:this.su;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,m)=>{const _=s.get(p),g=di(this.query,m)?m:null,b=!!_&&this.mutatedKeys.has(_.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;_&&g?_.data.isEqual(g.data)?b!==C&&(r.track({type:3,doc:g}),E=!0):this.uu(_,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.iu(g,l)>0||u&&this.iu(g,u)<0)&&(c=!0)):!_&&g?(r.track({type:0,doc:g}),E=!0):_&&!g&&(r.track({type:1,doc:_}),E=!0,(l||u)&&(c=!0)),E&&(g?(o=o.add(g),i=C?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{su:o,au:r,bs:c,mutatedKeys:i}}uu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort(((p,m)=>(function(g,b){const C=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:E})}};return C(g)-C(b)})(p.type,m.type)||this.iu(p.doc,m.doc))),this.cu(r),s=s??!1;const c=t&&!s?this.lu():[],l=this.ru.size===0&&this.current&&!s?1:0,u=l!==this.nu;return this.nu=l,o.length!==0||u?{snapshot:new qr(this.query,e.su,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new ih,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach((t=>this.tu=this.tu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.tu=this.tu.delete(t))),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=te(),this.su.forEach((r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))}));const t=[];return e.forEach((r=>{this.ru.has(r)||t.push(new bm(r))})),this.ru.forEach((r=>{e.has(r)||t.push(new _m(r))})),t}Tu(e){this.tu=e.ks,this.ru=te();const t=this._u(e.documents);return this.applyChanges(t,!0)}Iu(){return qr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Il="SyncEngine";class ew{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class tw{constructor(e){this.key=e,this.Eu=!1}}class nw{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Ut((c=>yp(c)),Qo),this.Vu=new Map,this.du=new Set,this.mu=new ge(B.comparator),this.fu=new Map,this.gu=new il,this.pu={},this.yu=new Map,this.wu=Mt.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function rw(n,e,t=!0){const r=xm(n);let s;const i=r.Au.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Iu()):s=await Im(r,e,t,!0),s}async function sw(n,e){const t=xm(n);await Im(t,e,!0,!1)}async function Im(n,e,t,r){const s=await EI(n.localStore,ut(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await iw(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&hm(n.remoteStore,s),c}async function iw(n,e,t,r,s){n.bu=(m,_,g)=>(async function(C,E,N,V){let j=E.view._u(N);j.bs&&(j=await Zd(C.localStore,E.query,!1).then((({documents:x})=>E.view._u(x,j))));const z=V&&V.targetChanges.get(E.targetId),Q=V&&V.targetMismatches.get(E.targetId)!=null,J=E.view.applyChanges(j,C.isPrimaryClient,z,Q);return lh(C,E.targetId,J.hu),J.snapshot})(n,m,_,g);const i=await Zd(n.localStore,e,!0),o=new ZI(e,i.ks),c=o._u(i.documents),l=fi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(c,n.isPrimaryClient,l);lh(n,t,u.hu);const p=new ew(e,t,o);return n.Au.set(e,p),n.Vu.has(t)?n.Vu.get(t).push(e):n.Vu.set(t,[e]),u.snapshot}async function ow(n,e,t){const r=Y(n),s=r.Au.get(e),i=r.Vu.get(s.targetId);if(i.length>1)return r.Vu.set(s.targetId,i.filter((o=>!Qo(o,e)))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Sc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ul(r.remoteStore,s.targetId),Cc(r,s.targetId)})).catch(sr)):(Cc(r,s.targetId),await Sc(r.localStore,s.targetId,!0))}async function aw(n,e){const t=Y(n),r=t.Au.get(e),s=t.Vu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ul(t.remoteStore,r.targetId))}async function cw(n,e,t){const r=Sm(n);try{const s=await(function(o,c){const l=Y(o),u=oe.now(),p=c.reduce(((g,b)=>g.add(b.key)),te());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let b=st(),C=te();return l.xs.getEntries(g,p).next((E=>{b=E,b.forEach(((N,V)=>{V.isValidDocument()||(C=C.add(N))}))})).next((()=>l.localDocuments.getOverlayedDocuments(g,b))).next((E=>{m=E;const N=[];for(const V of c){const j=Tb(V,m.get(V.key).overlayedDocument);j!=null&&N.push(new Bt(V.key,j,cp(j.value.mapValue),je.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,N,c)})).next((E=>{_=E;const N=E.applyToLocalDocumentSet(m,C);return l.documentOverlayCache.saveOverlays(g,E.batchId,N)}))})).then((()=>({batchId:_.batchId,changes:Ip(m)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.pu[o.currentUser.toKey()];u||(u=new ge(X)),u=u.insert(c,l),o.pu[o.currentUser.toKey()]=u})(r,s.batchId,t),await gi(r,s.changes),await mi(r.remoteStore)}catch(s){const i=ml(s,"Failed to persist write");t.reject(i)}}async function wm(n,e){const t=Y(n);try{const r=await II(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.fu.get(i);o&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Eu=!0:s.modifiedDocuments.size>0?K(o.Eu,14607):s.removedDocuments.size>0&&(K(o.Eu,42227),o.Eu=!1))})),await gi(t,r,e)}catch(r){await sr(r)}}function ch(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach(((i,o)=>{const c=o.view.Oa(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=Y(o);l.onlineState=c;let u=!1;l.queries.forEach(((p,m)=>{for(const _ of m.va)_.Oa(c)&&(u=!0)})),u&&_l(l)})(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function lw(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.fu.get(e),i=s&&s.key;if(i){let o=new ge(B.comparator);o=o.insert(i,Ie.newNoDocument(i,G.min()));const c=te().add(i),l=new hi(G.min(),new Map,new ge(X),o,c);await wm(r,l),r.mu=r.mu.remove(i),r.fu.delete(e),wl(r)}else await Sc(r.localStore,e,!1).then((()=>Cc(r,e,t))).catch(sr)}async function uw(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await bI(t.localStore,e);Em(t,r,null),Tm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await gi(t,s)}catch(s){await sr(s)}}async function dw(n,e,t){const r=Y(n);try{const s=await(function(o,c){const l=Y(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let p;return l.mutationQueue.lookupMutationBatch(u,c).next((m=>(K(m!==null,37113),p=m.keys(),l.mutationQueue.removeMutationBatch(u,m)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,p,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,p))).next((()=>l.localDocuments.getDocuments(u,p)))}))})(r.localStore,e);Em(r,e,t),Tm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await gi(r,s)}catch(s){await sr(s)}}function Tm(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function Em(n,e,t){const r=Y(n);let s=r.pu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}function Cc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Vu.get(e))n.Au.delete(r),t&&n.Ru.Du(r,t);n.Vu.delete(e),n.isPrimaryClient&&n.gu.Gr(e).forEach((r=>{n.gu.containsKey(r)||vm(n,r)}))}function vm(n,e){n.du.delete(e.path.canonicalString());const t=n.mu.get(e);t!==null&&(ul(n.remoteStore,t),n.mu=n.mu.remove(e),n.fu.delete(t),wl(n))}function lh(n,e,t){for(const r of t)r instanceof _m?(n.gu.addReference(r.key,e),hw(n,r)):r instanceof bm?(O(Il,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,e),n.gu.containsKey(r.key)||vm(n,r.key)):q(19791,{Cu:r})}function hw(n,e){const t=e.key,r=t.path.canonicalString();n.mu.get(t)||n.du.has(r)||(O(Il,"New document in limbo: "+t),n.du.add(r),wl(n))}function wl(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const e=n.du.values().next().value;n.du.delete(e);const t=new B(ie.fromString(e)),r=n.wu.next();n.fu.set(r,new tw(t)),n.mu=n.mu.insert(t,r),hm(n.remoteStore,new Et(ut(ui(t.path)),r,"TargetPurposeLimboResolution",lt.ce))}}async function gi(n,e,t){const r=Y(n),s=[],i=[],o=[];r.Au.isEmpty()||(r.Au.forEach(((c,l)=>{o.push(r.bu(l,e,t).then((u=>{if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=cl.Es(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.Ru.H_(s),await(async function(l,u){const p=Y(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(m=>R.forEach(u,(_=>R.forEach(_.Ts,(g=>p.persistence.referenceDelegate.addReference(m,_.targetId,g))).next((()=>R.forEach(_.Is,(g=>p.persistence.referenceDelegate.removeReference(m,_.targetId,g)))))))))}catch(m){if(!Tn(m))throw m;O(ll,"Failed to update sequence numbers: "+m)}for(const m of u){const _=m.targetId;if(!m.fromCache){const g=p.vs.get(_),b=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(b);p.vs=p.vs.insert(_,C)}}})(r.localStore,i))}async function fw(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){O(Il,"User change. New user:",e.toKey());const r=await am(t.localStore,e);t.currentUser=e,(function(i,o){i.yu.forEach((c=>{c.forEach((l=>{l.reject(new L(D.CANCELLED,o))}))})),i.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gi(t,r.Ns)}}function pw(n,e){const t=Y(n),r=t.fu.get(e);if(r&&r.Eu)return te().add(r.key);{let s=te();const i=t.Vu.get(e);if(!i)return s;for(const o of i){const c=t.Au.get(o);s=s.unionWith(c.view.ou)}return s}}function xm(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lw.bind(null,e),e.Ru.H_=XI.bind(null,e.eventManager),e.Ru.Du=YI.bind(null,e.eventManager),e}function Sm(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=uw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dw.bind(null,e),e}class ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ra(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return om(this.persistence,new im,e.initialUser,this.serializer)}xu(e){return new ol(na.Vi,this.serializer)}Mu(e){return new lm}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ri.provider={build:()=>new ri};class mw extends ri{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){K(this.persistence.referenceDelegate instanceof Ro,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new em(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new ol((r=>Ro.Vi(r,t)),this.serializer)}}class gw extends ri{constructor(e,t,r){super(),this.Lu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Lu.initialize(this,e),await Sm(this.Lu.syncEngine),await mi(this.Lu.remoteStore),await this.persistence.zi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ou(e){return om(this.persistence,new im,e.initialUser,this.serializer)}Nu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new em(r,e.asyncQueue,t)}Bu(e,t){const r=new y0(t,this.persistence);return new g0(e.asyncQueue,r)}xu(e){const t=mI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new al(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,CI(),io(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Mu(e){return new lm}}class Co{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ch(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fw.bind(null,this.syncEngine),await HI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new QI})()}createDatastore(e){const t=ra(e.databaseInfo.databaseId),r=PI(e.databaseInfo);return OI(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,c){return new LI(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>ch(this.syncEngine,t,0)),(function(){return nh.v()?new nh:new xI})())}createSyncEngine(e,t){return(function(s,i,o,c,l,u,p){const m=new nw(s,i,o,c,l,u);return p&&(m.Su=!0),m})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=Y(t);O(At,"RemoteStore shutting down."),r.da.add(5),await pi(r),r.fa.shutdown(),r.ga.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Co.provider={build:()=>new Co};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="FirestoreClient";class yw{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=Uc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{O(wn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(O(wn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ml(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function $a(n,e){n.asyncQueue.verifyOperationInProgress(),O(wn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await am(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function uh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await _w(n);O(wn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>sh(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>sh(e.remoteStore,s))),n._onlineComponents=e}async function _w(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(wn,"Using user provided OfflineComponentProvider");try{await $a(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;yn("Error using user provided cache. Falling back to memory cache: "+t),await $a(n,new ri)}}else O(wn,"Using default OfflineComponentProvider"),await $a(n,new mw(void 0));return n._offlineComponents}async function Am(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(wn,"Using user provided OnlineComponentProvider"),await uh(n,n._uninitializedComponentsProvider._online)):(O(wn,"Using default OnlineComponentProvider"),await uh(n,new Co))),n._onlineComponents}function bw(n){return Am(n).then((e=>e.syncEngine))}async function ko(n){const e=await Am(n),t=e.eventManager;return t.onListen=rw.bind(null,e.syncEngine),t.onUnlisten=ow.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aw.bind(null,e.syncEngine),t}function Iw(n,e,t,r){const s=new Tl(r),i=new bl(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>gl(await ko(n),i))),()=>{s.Ku(),n.asyncQueue.enqueueAndForget((async()=>yl(await ko(n),i)))}}function ww(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const p=new Tl({next:_=>{p.Ku(),o.enqueueAndForget((()=>yl(i,m)));const g=_.docs.has(c);!g&&_.fromCache?u.reject(new L(D.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&_.fromCache&&l&&l.source==="server"?u.reject(new L(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),m=new bl(ui(c.path),p,{includeMetadataChanges:!0,Wa:!0});return gl(i,m)})(await ko(n),n.asyncQueue,e,t,r))),r.promise}function Tw(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const p=new Tl({next:_=>{p.Ku(),o.enqueueAndForget((()=>yl(i,m))),_.fromCache&&l.source==="server"?u.reject(new L(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),m=new bl(c,p,{includeMetadataChanges:!0,Wa:!0});return gl(i,m)})(await ko(n),n.asyncQueue,e,t,r))),r.promise}function Ew(n,e){const t=new vt;return n.asyncQueue.enqueueAndForget((async()=>cw(await bw(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="ComponentProvider",dh=new Map;function xw(n,e,t,r,s){return new K0(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Rm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="firestore.googleapis.com",hh=!0;class fh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pm,this.ssl=hh}else this.host=e.host,this.ssl=e.ssl??hh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Yb)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}h0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rm(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new n0;switch(r.type){case"firstParty":return new o0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=dh.get(t);r&&(O(vw,"Removing Datastore"),dh.delete(t),r.terminate())})(this),Promise.resolve()}}function Sw(n,e,t,r={}){n=Ye(n,ia);const s=oi(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&wf(`https://${c}`),i.host!==Pm&&i.host!==c&&yn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Jn(l,o)&&(n._setSettings(l),r.mockUserToken)){let u,p;if(typeof r.mockUserToken=="string")u=r.mockUserToken,p=Ve.MOCK_USER;else{u=Ay(r.mockUserToken,n._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ve(m)}n._authCredentials=new r0(new Of(u,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vn(this.firestore,e,this._query)}}class we{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ai(t,we._jsonSchema))return new we(e,r||null,new B(ie.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:Se("string",we._jsonSchemaVersion),referencePath:Se("string")};class mn extends vn{constructor(e,t,r){super(e,t,ui(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new B(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function Me(n,e,...t){if(n=Ee(n),Lf("collection","path",e),n instanceof ia){const r=ie.fromString(e,...t);return rd(r),new mn(n,null,r)}{if(!(n instanceof we||n instanceof mn))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return rd(r),new mn(n.firestore,null,r)}}function H(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Uc.newId()),Lf("doc","path",e),n instanceof ia){const r=ie.fromString(e,...t);return nd(r),new we(n,null,new B(r))}{if(!(n instanceof we||n instanceof mn))throw new L(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ie.fromString(e,...t));return nd(r),new we(n.firestore,n instanceof mn?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="AsyncQueue";class mh{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new um(this,"async_queue_retry"),this.lc=()=>{const r=io();r&&O(ph,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=io();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=io();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new vt;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Tn(e))throw e;O(ph,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((r=>{throw this._c=r,this.ac=!1,He("INTERNAL UNHANDLED ERROR: ",gh(r)),r})).then((r=>(this.ac=!1,r))))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=pl.createAndSchedule(this,e,t,r,(i=>this.Ec(i)));return this.oc.push(s),s}Pc(){this._c&&q(47125,{Rc:gh(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function gh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Lt extends ia{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new mh,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mh(e),this._firestoreClient=void 0,await e}}}function Aw(n,e){const t=typeof n=="object"?n:xf(),r=typeof n=="string"?n:Io,s=jc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xy("firestore");i&&Sw(s,...i)}return s}function yi(n){if(n._terminated)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cm(n),n._firestoreClient}function Cm(n){const e=n._freezeSettings(),t=xw(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new yw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(n._componentsProvider))}function Rw(n,e){yn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return Pw(n,Co.provider,{build:r=>new gw(r,t.cacheSizeBytes,e?.forceOwnership)}),Promise.resolve()}function Pw(n,e,t){if((n=Ye(n,Lt))._firestoreClient||n._terminated)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new L(D.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},Cm(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(Ae.fromBase64String(e))}catch(t){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ai(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:Se("string",ct._jsonSchemaVersion),bytes:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xt._jsonSchemaVersion}}static fromJSON(e){if(ai(e,xt._jsonSchema))return new xt(e.latitude,e.longitude)}}xt._jsonSchemaVersion="firestore/geoPoint/1.0",xt._jsonSchema={type:Se("string",xt._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:mt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ai(e,mt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new mt(e.vectorValues);throw new L(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mt._jsonSchemaVersion="firestore/vectorValue/1.0",mt._jsonSchema={type:Se("string",mt._jsonSchemaVersion),vectorValues:Se("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=/^__.*__$/;class kw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xr(e,this.data,t,this.fieldTransforms)}}class km{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Dm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{dataSource:n})}}class vl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.fc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new vl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Do(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Dm(this.dataSource)&&Cw.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Dw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ra(e)}V(e,t,r,s=!1){return new vl({dataSource:e,methodName:t,targetDoc:r,path:_e.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aa(n){const e=n._freezeSettings(),t=ra(n._databaseId);return new Dw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Nm(n,e,t,r,s,i={}){const o=n.V(i.merge||i.mergeFields?2:0,e,t,s);xl("Data must be an object, but it was:",o,r);const c=Mm(r,o);let l,u;if(i.merge)l=new Xe(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const _=nr(e,m,t);if(!o.contains(_))throw new L(D.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Fm(p,_)||p.push(_)}l=new Xe(p),u=o.fieldTransforms.filter((m=>l.covers(m.field)))}else l=null,u=o.fieldTransforms;return new kw(new We(c),l,u)}class ca extends El{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ca}}function Vm(n,e,t,r){const s=n.V(1,e,t);xl("Data must be an object, but it was:",s,r);const i=[],o=We.empty();En(r,((l,u)=>{const p=jm(e,l,t);u=Ee(u);const m=s.Sc(p);if(u instanceof ca)i.push(p);else{const _=_i(u,m);_!=null&&(i.push(p),o.set(p,_))}}));const c=new Xe(i);return new km(o,c,s.fieldTransforms)}function Om(n,e,t,r,s,i){const o=n.V(1,e,t),c=[nr(e,r,t)],l=[s];if(i.length%2!=0)throw new L(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(nr(e,i[_])),l.push(i[_+1]);const u=[],p=We.empty();for(let _=c.length-1;_>=0;--_)if(!Fm(u,c[_])){const g=c[_];let b=l[_];b=Ee(b);const C=o.Sc(g);if(b instanceof ca)u.push(g);else{const E=_i(b,C);E!=null&&(u.push(g),p.set(g,E))}}const m=new Xe(u);return new km(p,m,o.fieldTransforms)}function Nw(n,e,t,r=!1){return _i(t,n.V(r?4:3,e))}function _i(n,e){if(Lm(n=Ee(n)))return xl("Unsupported field value:",e,n),Mm(n,e);if(n instanceof El)return(function(r,s){if(!Dm(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=_i(c,s.bc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return mb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=oe.fromDate(r);return{timestampValue:Wr(s.serializer,i)}}if(r instanceof oe){const i=new oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wr(s.serializer,i)}}if(r instanceof xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ct)return{bytesValue:Np(s.serializer,r._byteString)};if(r instanceof we){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mt)return(function(o,c){const l=o instanceof mt?o.toArray():o;return{mapValue:{fields:{[Hc]:{stringValue:Jc},[Lr]:{arrayValue:{values:l.map((p=>{if(typeof p!="number")throw c.Dc("VectorValues must only contain numeric values.");return Xc(c.serializer,p)}))}}}}}})(r,s);if(qp(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${zo(r)}`)})(n,e)}function Mm(n,e){const t={};return Zf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):En(n,((r,s)=>{const i=_i(s,e.yc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Lm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof xt||n instanceof ct||n instanceof we||n instanceof El||n instanceof mt||qp(n))}function xl(n,e,t){if(!Lm(t)||!jf(t)){const r=zo(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function nr(n,e,t){if((e=Ee(e))instanceof oa)return e._internalPath;if(typeof e=="string")return jm(n,e);throw Do("Field path arguments must be of type string or ",n,!1,void 0,t)}const Vw=new RegExp("[~\\*/\\[\\]]");function jm(n,e,t){if(e.search(Vw)>=0)throw Do(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new oa(...e.split("."))._internalPath}catch{throw Do(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Do(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(D.INVALID_ARGUMENT,c+n+l)}function Fm(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{convertValue(e,t="none"){switch(_n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return En(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){const t=e.fields?.[Lr].arrayValue?.values?.map((r=>ye(r.doubleValue)));return new mt(t)}convertGeoPoint(e){return new xt(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ho(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const t=Vt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ie.fromString(e);K(Wp(r),9688,{name:e});const s=new Yn(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(t)||He(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Ow{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new we(this.firestore,null,t)}}const yh="@firebase/firestore",_h="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Mw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(nr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Mw extends Um{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Al{}class zm extends Al{}function Te(n,e,...t){let r=[];e instanceof Al&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof Rl)).length,c=i.filter((l=>l instanceof la)).length;if(o>1||o>0&&c>0)throw new L(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class la extends zm{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new la(e,t,r)}_apply(e){const t=this._parse(e);return Wm(e._query,t),new vn(e.firestore,e.converter,yc(e._query,t))}_parse(e){const t=aa(e.firestore);return(function(i,o,c,l,u,p,m){let _;if(u.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){wh(m,p);const b=[];for(const C of m)b.push(Ih(l,i,C));_={arrayValue:{values:b}}}else _=Ih(l,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||wh(m,p),_=Nw(c,o,m,p==="in"||p==="not-in");return re.create(u,p,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Be(n,e,t){const r=e,s=nr("where",n);return la._create(s,r,t)}class Rl extends Al{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rl(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Wm(o,l),o=yc(o,l)})(e._query,t),new vn(e.firestore,e.converter,yc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Pl extends zm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Pl(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ei(i,o)})(e._query,this._field,this._direction);return new vn(e.firestore,e.converter,ab(e._query,t))}}function $r(n,e="asc"){const t=e,r=nr("orderBy",n);return Pl._create(r,t)}function Ih(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new L(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gp(e)&&t.indexOf("/")!==-1)throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ie.fromString(t));if(!B.isDocumentKey(r))throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ys(n,new B(r))}if(t instanceof we)return Ys(n,t._key);throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zo(t)}.`)}function wh(n,e){if(!Array.isArray(n)||n.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wm(n,e){const t=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function qm(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gn extends Um{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(nr("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Gn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Gn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gn._jsonSchema={type:Se("string",Gn._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class oo extends Gn{data(e={}){return super.data(e)}}class Hn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ps(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new oo(this._firestore,this._userDataWriter,r.key,r,new Ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new oo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ps(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new oo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ps(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,p=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),p=o.indexOf(c.doc.key)),{type:Lw(c.type),doc:l,oldIndex:u,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hn._jsonSchemaVersion="firestore/querySnapshot/1.0",Hn._jsonSchema={type:Se("string",Hn._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=aa(e)}set(e,t,r){this._verifyNotCommitted();const s=Ka(e,this._firestore),i=qm(s.converter,t,r),o=Nm(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,je.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ka(e,this._firestore);let o;return o=typeof(t=Ee(t))=="string"||t instanceof oa?Om(this._dataReader,"WriteBatch.update",i._key,t,r,s):Vm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,je.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ka(e,this._firestore);return this._mutations=this._mutations.concat(new Zo(t._key,je.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ka(n,e){if((n=Ee(n)).firestore!==e)throw new L(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){n=Ye(n,we);const e=Ye(n.firestore,Lt),t=yi(e);return ww(t,n._key).then((r=>$m(e,n,r)))}function Ne(n){n=Ye(n,vn);const e=Ye(n.firestore,Lt),t=yi(e),r=new Sl(e);return Bm(n._query),Tw(t,n._query).then((s=>new Hn(e,r,n,s)))}function Pt(n,e,t){n=Ye(n,we);const r=Ye(n.firestore,Lt),s=qm(n.converter,e,t),i=aa(r);return Cl(r,[Nm(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,je.none())])}function Ze(n,e,t,...r){n=Ye(n,we);const s=Ye(n.firestore,Lt),i=aa(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof oa?Om(i,"updateDoc",n._key,e,t,r):Vm(i,"updateDoc",n._key,e),Cl(s,[o.toMutation(n._key,je.exists(!0))])}function or(n,...e){n=Ee(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||bh(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(bh(e[r])){const u=e[r];e[r]=u.next?.bind(u),e[r+1]=u.error?.bind(u),e[r+2]=u.complete?.bind(u)}let i,o,c;if(n instanceof we)o=Ye(n.firestore,Lt),c=ui(n._key.path),i={next:u=>{e[r]&&e[r]($m(o,n,u))},error:e[r+1],complete:e[r+2]};else{const u=Ye(n,vn);o=Ye(u.firestore,Lt),c=u._query;const p=new Sl(o);i={next:m=>{e[r]&&e[r](new Hn(o,p,u,m))},error:e[r+1],complete:e[r+2]},Bm(n._query)}const l=yi(o);return Iw(l,c,s,i)}function Cl(n,e){const t=yi(n);return Ew(t,e)}function $m(n,e,t){const r=t.docs.get(e._key),s=new Sl(n);return new Gn(n,s,e._key,r,new Ps(t.hasPendingWrites,t.fromCache),e.converter)}function ar(n){return n=Ye(n,Lt),yi(n),new jw(n,(e=>Cl(n,e)))}(function(e,t=!0){t0(Hr),kr(new Qn("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Lt(new s0(r.getProvider("auth-internal")),new a0(o,r.getProvider("app-check-internal")),G0(o,s),o);return i={useFetchStreams:t,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),hn(yh,_h,e),hn(yh,_h,"esm2020")})();function Km(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fw=Km,Gm=new ii("auth","Firebase",Km());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Mc("@firebase/auth");function Uw(n,...e){No.logLevel<=ne.WARN&&No.warn(`Auth (${Hr}): ${n}`,...e)}function ao(n,...e){No.logLevel<=ne.ERROR&&No.error(`Auth (${Hr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n,...e){throw Dl(n,...e)}function et(n,...e){return Dl(n,...e)}function kl(n,e,t){const r={...Fw(),[e]:t};return new ii("auth","Firebase",r).create(e,{appName:n.name})}function gn(n){return kl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bw(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Rt(n,"argument-error"),kl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Gm.create(n,...e)}function W(n,e,...t){if(!n)throw Dl(e,...t)}function kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ao(e),new Error(e)}function jt(n,e){n||kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(){return typeof self<"u"&&self.location?.href||""}function Hm(){return Th()==="http:"||Th()==="https:"}function Th(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hm()||Cy()||"connection"in navigator)?navigator.onLine:!0}function Ww(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ry()||ky()}get(){return zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n,e){jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kw=new bi(3e4,6e4);function Ct(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function yt(n,e,t,r,s={}){return Qm(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Gr({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...i};return Py()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&oi(n.emulatorConfig.host)&&(u.credentials="include"),Jm.fetch()(await Xm(n,n.config.apiHost,t,c),u)})}async function Qm(n,e,t){n._canInitEmulator=!1;const r={...qw,...e};try{const s=new Hw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Cs(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cs(n,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kl(n,p,u);Rt(n,p)}}catch(s){if(s instanceof Ft)throw s;Rt(n,"network-request-failed",{message:String(s)})}}async function ua(n,e,t,r,s={}){const i=await yt(n,e,t,r,s);return"mfaPendingCredential"in i&&Rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xm(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Nl(n.config,s):`${n.config.apiScheme}://${s}`;return $w.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Gw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Kw.get())})}}function Cs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=et(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n){return n!==void 0&&n.getResponse!==void 0}function vh(n){return n!==void 0&&n.enterprise!==void 0}class Ym{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Gw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(n){return(await yt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Zm(n,e){return yt(n,"GET","/v2/recaptchaConfig",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(n,e){return yt(n,"POST","/v1/accounts:delete",e)}async function Vo(n,e){return yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xw(n,e=!1){const t=Ee(n),r=await t.getIdToken(e),s=Vl(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Fs(Ga(s.auth_time)),issuedAtTime:Fs(Ga(s.iat)),expirationTime:Fs(Ga(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ga(n){return Number(n)*1e3}function Vl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const s=hf(t);return s?JSON.parse(s):(ao("Failed to decode base64 JWT payload"),null)}catch(s){return ao("Caught error parsing JWT payload as JSON",s?.toString()),null}}function xh(n){const e=Vl(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ft&&Yw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Yw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n){const e=n.auth,t=await n.getIdToken(),r=await si(n,Vo(e,{idToken:t}));W(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=s.providerUserInfo?.length?eg(s.providerUserInfo):[],o=tT(n.providerData,i),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!o?.length,u=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function eT(n){const e=Ee(n);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function eg(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(n,e){const t=await Qm(n,{},async()=>{const r=Gr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await Xm(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&oi(n.emulatorConfig.host)&&(l.credentials="include"),Jm.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rT(n,e){return yt(n,"POST","/v2/accounts:revokeToken",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=xh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await nT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Rr;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await si(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xw(this,e)}reload(){return eT(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await si(this,Qw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:g,providerData:b,stsTokenManager:C}=t;W(m&&C,e,"internal-error");const E=Rr.fromJSON(this.name,C);W(typeof m=="string",e,"internal-error"),en(r,e.name),en(s,e.name),W(typeof _=="boolean",e,"internal-error"),W(typeof g=="boolean",e,"internal-error"),en(i,e.name),en(o,e.name),en(c,e.name),en(l,e.name),en(u,e.name),en(p,e.name);const N=new pt({uid:m,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:E,createdAt:u,lastLoginAt:p});return b&&Array.isArray(b)&&(N.providerData=b.map(V=>({...V}))),l&&(N._redirectEventId=l),N}static async _fromIdTokenResponse(e,t,r=!1){const s=new Rr;s.updateFromServerResponse(t);const i=new pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?eg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,c=new Rr;c.updateFromIdToken(r);const l=new pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;function Dt(n){jt(n instanceof Function,"Expected a class definition");let e=Sh.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tg.type="NONE";const Ah=tg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(n,e,t){return`firebase:${n}:${e}:${t}`}class Pr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=co(this.userKey,s.apiKey,i),this.fullPersistenceKey=co("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vo(this.auth,{idToken:e}).catch(()=>{});return t?pt._fromGetAccountInfoResponse(this.auth,t,e):null}return pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Pr(Dt(Ah),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Dt(Ah);const o=co(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const p=await u._get(o);if(p){let m;if(typeof p=="string"){const _=await Vo(e,{idToken:p}).catch(()=>{});if(!_)break;m=await pt._fromGetAccountInfoResponse(e,_,p)}else m=pt._fromJSON(e,p);u!==i&&(c=m),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Pr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Pr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ig(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ag(e))return"Blackberry";if(cg(e))return"Webos";if(rg(e))return"Safari";if((e.includes("chrome/")||sg(e))&&!e.includes("edge/"))return"Chrome";if(og(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function ng(n=Pe()){return/firefox\//i.test(n)}function rg(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sg(n=Pe()){return/crios\//i.test(n)}function ig(n=Pe()){return/iemobile/i.test(n)}function og(n=Pe()){return/android/i.test(n)}function ag(n=Pe()){return/blackberry/i.test(n)}function cg(n=Pe()){return/webos/i.test(n)}function Ol(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sT(n=Pe()){return Ol(n)&&!!window.navigator?.standalone}function iT(){return Dy()&&document.documentMode===10}function lg(n=Pe()){return Ol(n)||og(n)||cg(n)||ag(n)||/windows phone/i.test(n)||ig(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n,e=[]){let t;switch(n){case"Browser":t=Rh(Pe());break;case"Worker":t=`${Rh(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(n,e={}){return yt(n,"GET","/v2/passwordPolicy",Ct(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=6;class lT{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??cT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ph(this),this.idTokenSubscription=new Ph(this),this.beforeStateQueue=new oT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Pr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vo(this,{idToken:e}),r=await pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(at(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===o)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ww()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(gn(this));const t=e?Ee(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aT(this),t=new lT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rT(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Uw(`Error while retrieving App Check token: ${e.error}`),e?.token}}function zt(n){return Ee(n)}class Ph{constructor(e){this.auth=e,this.observer=null,this.addObserver=jy(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dT(n){Ii=n}function Ml(n){return Ii.loadJS(n)}function hT(){return Ii.recaptchaV2Script}function fT(){return Ii.recaptchaEnterpriseScript}function pT(){return Ii.gapiScript}function dg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=500,gT=6e4,Ki=1e12;class yT{constructor(e){this.auth=e,this.counter=Ki,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new IT(e,this.auth.name,t||{})),this.counter++,r}reset(e){const t=e||Ki;this._widgets.get(t)?.delete(),this._widgets.delete(t)}getResponse(e){const t=e||Ki;return this._widgets.get(t)?.getResponse()||""}async execute(e){const t=e||Ki;return this._widgets.get(t)?.execute(),""}}class _T{constructor(){this.enterprise=new bT}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class bT{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class IT{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;W(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=wT(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},gT)},mT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function wT(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const TT="recaptcha-enterprise",Us="NO_RECAPTCHA";class hg{constructor(e){this.type=TT,this.auth=zt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Zm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ym(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;vh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Us)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _T().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&vh(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=fT();l.length!==0&&(l+=c),Ml(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Ha(n,e,t,r=!1,s=!1){const i=new hg(n);let o;if(s)o=Us;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ja(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){const i=await Ha(n,e,t);return r(n,i).catch(async o=>{if(n._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const c=await Ha(n,e,t,!1,!0);return r(n,c)}return Promise.reject(o)})}else{const i=await Ha(n,e,t,!1,!0);return r(n,i)}}async function ET(n){const e=zt(n),t=await Zm(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Ym(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new hg(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(n,e){const t=jc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Jn(i,e??{}))return s;Rt(s,"already-initialized")}return t.initialize({options:e})}function xT(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Dt);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function ST(n,e,t){const r=zt(n);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=fg(e),{host:o,port:c}=AT(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},p=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(Jn(u,r.config.emulator)&&Jn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,oi(o)?wf(`${i}//${o}${l}`):RT()}function fg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function AT(n){const e=fg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ch(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ch(o)}}}function Ch(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function RT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,t){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n,e){return ua(n,"POST","/v1/accounts:signInWithIdp",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="http://localhost";class rr extends Ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const o=new rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Cr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Cr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Cr(e,t)}buildRequest(){const e={requestUri:PT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Gr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kh(n,e){return yt(n,"POST","/v1/accounts:sendVerificationCode",Ct(n,e))}async function CT(n,e){return ua(n,"POST","/v1/accounts:signInWithPhoneNumber",Ct(n,e))}async function kT(n,e){const t=await ua(n,"POST","/v1/accounts:signInWithPhoneNumber",Ct(n,e));if(t.temporaryProof)throw Cs(n,"account-exists-with-different-credential",t);return t}const DT={USER_NOT_FOUND:"user-not-found"};async function NT(n,e){const t={...e,operation:"REAUTH"};return ua(n,"POST","/v1/accounts:signInWithPhoneNumber",Ct(n,t),DT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Ll{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Bs({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Bs({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return CT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return kT(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return NT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new Bs({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends jl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends wi{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return sn.credential(t,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends wi{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends wi{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return an.credential(t,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await pt._fromIdTokenResponse(e,r,s),o=Dh(r);return new Kr({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Dh(r);return new Kr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Dh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo extends Ft{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Mo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Mo(e,t,r,s)}}function pg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Mo._fromErrorAndOperation(n,i,e,r):i})}async function VT(n,e,t=!1){const r=await si(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Kr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(n,e,t=!1){const{auth:r}=n;if(at(r.app))return Promise.reject(gn(r));const s="reauthenticate";try{const i=await si(n,pg(r,s,e,n),t);W(i.idToken,r,"internal-error");const o=Vl(i.idToken);W(o,r,"internal-error");const{sub:c}=o;return W(n.uid===c,r,"user-mismatch"),Kr._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Rt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(n,e,t=!1){if(at(n.app))return Promise.reject(gn(n));const r="signIn",s=await pg(n,r,e),i=await Kr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function MT(n,e){return mg(zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n,e){return Ee(n).setPersistence(e)}function jT(n,e,t,r){return Ee(n).onIdTokenChanged(e,t,r)}function FT(n,e,t){return Ee(n).beforeAuthStateChanged(e,t)}function UT(n,e,t,r){return Ee(n).onAuthStateChanged(e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n,e){return yt(n,"POST","/v2/accounts/mfaEnrollment:start",Ct(n,e))}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=1e3,zT=10;class yg extends gg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);iT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},BT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yg.type="LOCAL";const _g=yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends gg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bg.type="SESSION";const Ig=bg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await WT(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Fl("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return window}function $T(n){xe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function KT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GT(){return navigator?.serviceWorker?.controller||null}function HT(){return Ul()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="firebaseLocalStorageDb",JT=1,jo="firebaseLocalStorage",Tg="fbase_key";class Ti{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ha(n,e){return n.transaction([jo],e?"readwrite":"readonly").objectStore(jo)}function QT(){const n=indexedDB.deleteDatabase(wg);return new Ti(n).toPromise()}function Nc(){const n=indexedDB.open(wg,JT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(jo,{keyPath:Tg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(jo)?e(r):(r.close(),await QT(),e(await Nc()))})})}async function Vh(n,e,t){const r=ha(n,!0).put({[Tg]:e,value:t});return new Ti(r).toPromise()}async function XT(n,e){const t=ha(n,!1).get(e),r=await new Ti(t).toPromise();return r===void 0?null:r.value}function Oh(n,e){const t=ha(n,!0).delete(e);return new Ti(t).toPromise()}const YT=800,ZT=3;class Eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ZT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ul()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=da._getInstance(HT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await KT(),!this.activeServiceWorker)return;this.sender=new qT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nc();return await Vh(e,Lo,"1"),await Oh(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>XT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Oh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Ti(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Eg.type="LOCAL";const eE=Eg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n,e){return yt(n,"POST","/v2/accounts/mfaSignIn:start",Ct(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=dg("rcb"),tE=new bi(3e4,6e4);class nE{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!xe().grecaptcha?.render}load(e,t=""){return W(rE(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Eh(xe().grecaptcha)?Promise.resolve(xe().grecaptcha):new Promise((r,s)=>{const i=xe().setTimeout(()=>{s(et(e,"network-request-failed"))},tE.get());xe()[Qa]=()=>{xe().clearTimeout(i),delete xe()[Qa];const c=xe().grecaptcha;if(!c||!Eh(c)){s(et(e,"internal-error"));return}const l=c.render;c.render=(u,p)=>{const m=l(u,p);return this.counter++,m},this.hostLanguage=t,r(c)};const o=`${hT()}?${Gr({onload:Qa,render:"explicit",hl:t})}`;Ml(o).catch(()=>{clearTimeout(i),s(et(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!xe().grecaptcha?.render&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function rE(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class sE{async load(e){return new yT(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="recaptcha",iE={theme:"light",type:"image"};class zx{constructor(e,t,r={...iE}){this.parameters=r,this.type=zs,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=zt(e),this.isInvisible=this.parameters.size==="invisible",W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;W(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new sE:new nE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){W(!this.parameters.sitekey,this.auth,"argument-error"),W(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),W(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=xe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){W(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){W(Hm()&&!Ul(),this.auth,"internal-error"),await oE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Jw(this.auth);W(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return W(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function oE(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Bs._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Wx(n,e,t){if(at(n.app))return Promise.reject(gn(n));const r=zt(n),s=await cE(r,e,Ee(t));return new aE(s,i=>MT(r,i))}async function cE(n,e,t){if(!n._getRecaptchaConfig())try{await ET(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){const s=r.session;if("phoneNumber"in r){W(s.type==="enroll",n,"internal-error");const i={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Ja(n,i,"mfaSmsEnrollment",async(u,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===Us){W(t?.type===zs,u,"argument-error");const m=await Xa(u,p,t);return Nh(u,m)}return Nh(u,p)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{W(s.type==="signin",n,"internal-error");const i=r.multiFactorHint?.uid||r.multiFactorUid;W(i,n,"missing-multi-factor-info");const o={mfaPendingCredential:s.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Ja(n,o,"mfaSmsSignIn",async(p,m)=>{if(m.phoneSignInInfo.captchaResponse===Us){W(t?.type===zs,p,"argument-error");const _=await Xa(p,m,t);return Mh(p,_)}return Mh(p,m)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Ja(n,s,"sendVerificationCode",async(l,u)=>{if(u.captchaResponse===Us){W(t?.type===zs,l,"argument-error");const p=await Xa(l,u,t);return kh(l,p)}return kh(l,u)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function Xa(n,e,t){W(t.type===zs,n,"argument-error");const r=await t.verify();W(typeof r=="string",n,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,c=s.phoneEnrollmentInfo.clientType,l=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:c,recaptchaVersion:l}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,c=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:c}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n,e){return e?Dt(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Cr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lE(n){return mg(n.auth,new Bl(n),n.bypassAuthState)}function uE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),OT(t,new Bl(n),n.bypassAuthState)}async function dE(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),VT(t,new Bl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lE;case"linkViaPopup":case"linkViaRedirect":return dE;case"reauthViaPopup":case"reauthViaRedirect":return uE;default:Rt(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new bi(2e3,1e4);async function qx(n,e,t){if(at(n.app))return Promise.reject(et(n,"operation-not-supported-in-this-environment"));const r=zt(n);Bw(n,e,jl);const s=vg(r,t);return new Wn(r,"signInViaPopup",e,s).executeNotNull()}class Wn extends xg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hE.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="pendingRedirect",lo=new Map;class pE extends xg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const r=await mE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mE(n,e){const t=_E(e),r=yE(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function gE(n,e){lo.set(n._key(),e)}function yE(n){return Dt(n._redirectPersistence)}function _E(n){return co(fE,n.config.apiKey,n.name)}async function bE(n,e,t=!1){if(at(n.app))return Promise.reject(gn(n));const r=zt(n),s=vg(r,e),o=await new pE(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=600*1e3;class wE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Sg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(et(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lh(e))}saveEventToCache(e){this.cachedEventUids.add(Lh(e)),this.lastProcessedEventTime=Date.now()}}function Lh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function TE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(n,e={}){return yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xE=/^https?/;async function SE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await EE(n);for(const t of e)try{if(AE(t))return}catch{}Rt(n,"unauthorized-domain")}function AE(n){const e=kc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!xE.test(t))return!1;if(vE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new bi(3e4,6e4);function jh(){const n=xe().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function PE(n){return new Promise((e,t)=>{function r(){jh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jh(),t(et(n,"network-request-failed"))},timeout:RE.get()})}if(xe().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(xe().gapi?.load)r();else{const s=dg("iframefcb");return xe()[s]=()=>{gapi.load?r():t(et(n,"network-request-failed"))},Ml(`${pT()}?onload=${s}`).catch(i=>t(i))}}).catch(e=>{throw uo=null,e})}let uo=null;function CE(n){return uo=uo||PE(n),uo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=new bi(5e3,15e3),DE="__/auth/iframe",NE="emulator/auth/iframe",VE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ME(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Nl(e,NE):`https://${n.config.authDomain}/${DE}`,r={apiKey:e.apiKey,appName:n.name,v:Hr},s=OE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Gr(r).slice(1)}`}async function LE(n){const e=await CE(n),t=xe().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:ME(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(n,"network-request-failed"),c=xe().setTimeout(()=>{i(o)},kE.get());function l(){xe().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FE=500,UE=600,BE="_blank",zE="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WE(n,e,t,r=FE,s=UE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...jE,width:r.toString(),height:s.toString(),top:i,left:o},u=Pe().toLowerCase();t&&(c=sg(u)?BE:t),ng(u)&&(e=e||zE,l.scrollbars="yes");const p=Object.entries(l).reduce((_,[g,b])=>`${_}${g}=${b},`,"");if(sT(u)&&c!=="_self")return qE(e||"",c),new Fh(null);const m=window.open(e||"",c,p);W(m,n,"popup-blocked");try{m.focus()}catch{}return new Fh(m)}function qE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="__/auth/handler",KE="emulator/auth/handler",GE=encodeURIComponent("fac");async function Uh(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Hr,eventId:s};if(e instanceof jl){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ly(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof wi){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),u=l?`#${GE}=${encodeURIComponent(l)}`:"";return`${HE(n)}?${Gr(c).slice(1)}${u}`}function HE({config:n}){return n.emulator?Nl(n,KE):`https://${n.authDomain}/${$E}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="webStorageSupport";class JE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ig,this._completeRedirectFn=bE,this._overrideRedirectResult=gE}async _openPopup(e,t,r,s){jt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await Uh(e,t,r,kc(),s);return WE(e,i,Fl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Uh(e,t,r,kc(),s);return $T(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(jt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await LE(e),r=new wE(e);return t.register("authEvent",s=>(W(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ya,{type:Ya},s=>{const i=s?.[0]?.[Ya];i!==void 0&&t(!!i),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=SE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return lg()||rg()||Ol()}}const QE=JE;var Bh="@firebase/auth",zh="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZE(n){kr(new Qn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ug(n)},u=new uT(r,s,i,l);return xT(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),kr(new Qn("auth-internal",e=>{const t=zt(e.getProvider("auth").getImmediate());return(r=>new XE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Bh,zh,YE(n)),hn(Bh,zh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=300,tv=gf("authIdTokenMaxAge")||ev;let Wh=null;const nv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>tv)return;const s=t?.token;Wh!==s&&(Wh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rv(n=xf()){const e=jc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vT(n,{popupRedirectResolver:QE,persistence:[eE,_g,Ig]}),r=gf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=nv(i.toString());FT(t,o,()=>o(t.currentUser)),jT(t,c=>o(c))}}const s=pf("auth");return s&&ST(t,`http://${s}`),t}function sv(){return document.getElementsByTagName("head")?.[0]??document}dT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",sv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZE("Browser");const Ag={apiKey:"AIzaSyBdWyyDkq8cSeDQaApPw9KKcUcnPUWqVNw",authDomain:"zeno-league.firebaseapp.com",projectId:"zeno-league",storageBucket:"zeno-league.firebasestorage.app",messagingSenderId:"321430657372",appId:"1:321430657372:web:bc996a439cc2faaec48999",measurementId:"G-R1X7XYQ2ES"};{const n=()=>{};console.log=n,console.warn=n}let ln,U,ho;try{if(ln=vf(Ag),U=Aw(ln),typeof window<"u"&&Rw(U).then(()=>{console.log("📴 Offline persistence: ENABLED")}).catch(n=>{n.code==="failed-precondition"?console.warn("⚠️ Persistence: Multiple tabs open (using existing cache)"):n.code==="unimplemented"?console.log("ℹ️ Persistence: Not supported (incognito/private browsing?)"):console.warn("⚠️ Persistence:",n.message)}),typeof window<"u")try{ho=rv(ln),LT(ho,_g).then(()=>console.log("🔐 Auth persistence: ENABLED")).catch(n=>console.warn("⚠️ Auth persistence:",n.message))}catch(n){console.warn("⚠️ Auth init failed:",n.message||n)}console.log("✅ Firebase core initialized")}catch(n){console.error("❌ Firebase initialization FAILED:",n),ln=null,U=null,ho=null}const iv=Promise.resolve(!0);typeof window<"u"&&ln&&(qe(async()=>{const{getAnalytics:n,isSupported:e}=await import("./index.esm-wBp2r4jU.js");return{getAnalytics:n,isSupported:e}},__vite__mapDeps([0,1,2])).then(({getAnalytics:n,isSupported:e})=>{e().then(t=>{t&&(n(ln),console.log("📊 Analytics: ACTIVE"))})}),qe(async()=>{const{getPerformance:n}=await import("./index.esm-CjAk_d4x.js");return{getPerformance:n}},__vite__mapDeps([3,1,2])).then(({getPerformance:n})=>{n(ln),console.log("⚡ Performance monitoring: ACTIVE")}));console.log("🚀 Zeno League Firebase Module Loaded");console.log(`   Project: ${Ag.projectId}`);console.log(`   Status: ${ln?"✅ READY":"❌ FAILED"}`);function ov(n){return!n||isNaN(n)?"0 TK":`${Math.round(Number(n)).toLocaleString("en-IN")} TK`}const Le=ov;function $x(n){if(!n||isNaN(n))return"0 TK";const e=Math.round(Number(n));return e>=1e3?`${(e/1e3).toFixed(1)}K TK`:`${e} TK`}function av(n){if(n<=0)return"00:00:00";const e=Math.floor(n/36e5),t=Math.floor(n%36e5/6e4),r=Math.floor(n%6e4/1e3);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}:${String(r).padStart(2,"0")}`}function Kx(n){const e=fa(n);if(!e)return"just now";const t=Date.now()-e;return t<6e4?"just now":t<36e5?Math.floor(t/6e4)+"m ago":t<864e5?Math.floor(t/36e5)+"h ago":Math.floor(t/864e5)+"d ago"}function fa(n){if(!n)return null;if(n&&typeof n.toDate=="function")return n.toDate().getTime();if(typeof n=="number")return n;if(typeof n=="string"){const e=new Date(n.replace(" ","T")).getTime();if(!isNaN(e))return e;const t=new Date(n).getTime();if(!isNaN(t))return t}return null}function cv(n){if(!n.startTime)return"unknown";const e=fa(n.startTime);if(!e)return"unknown";const t=Date.now(),r=n.gameType==="CS"?15*6e4:25*6e4;return t<e?"upcoming":t<e+r?"live":"completed"}function lv(n){if(!n.startTime)return 0;const e=fa(n.startTime);return e?e-Date.now():0}function Rg(n){return{Solo:1,Duo:2,Squad:4,"Clash Squad":4}[n]||1}function qh(n){return{Solo:50,Duo:25,Squad:12,"Clash Squad":12}[n]||50}function uv(n){return{Solo:"#6c8cff",Duo:"#fbbf24",Squad:"#a78bfa","Clash Squad":"#f87171"}[n]||"#6c8cff"}function Gx(n){return n.maxSlots?Math.min(100,Math.round((n.joinedCount||0)/n.maxSlots*100)):0}function de(n,e,t="info"){const r=Date.now()+Math.random();n({type:"SHOW_TOAST",payload:{id:r,message:e,type:t,removing:!1}}),setTimeout(()=>n({type:"TOAST_REMOVING",payload:r}),2700),setTimeout(()=>n({type:"REMOVE_TOAST",payload:r}),3e3)}function Pg(n,e){const t=Number(e);return n==="Duo"?t*2:n==="Squad"||n==="Clash Squad"?t*4:t}function dv(n,e,t){const r=Pg(e,t),s=n>=r;return{entryFeePerPlayer:Number(t),playersNeeded:Rg(e),totalCost:r,currentBalance:n,remainingBalance:n-r,canAfford:s,shortage:s?0:r-n}}function hv(n,e,t,r=!0,s=!0){const i=Number(n)*Number(e),o=Math.round(i*.2),c=i-o,l=fv(t,c,r,s);return{totalCollection:i,adminProfit:o,prizePool:c,prizes:l}}function fv(n,e,t=!0,r=!0){if(!e||e<=0)return[];if(n==="CS")return[{rank:"Winner",amount:Math.round(e*.7)},{rank:"Runner-up",amount:Math.round(e*.3)}];let s=[{rank:"1st",weight:40},{rank:"2nd",weight:22},{rank:"3rd",weight:15}];t&&s.push({rank:"4th",weight:10}),r&&s.push({rank:"5th",weight:5});const i=s.reduce((c,l)=>c+l.weight,0);let o=0;return s.map((c,l)=>{if(l===s.length-1)return{rank:c.rank,amount:Math.max(0,e-o)};const u=Math.floor(e*c.weight/i);return o+=u,{rank:c.rank,amount:u}})}function pv(n){return n===1?"st":n===2?"nd":n===3?"rd":"th"}function mv(n,e,t,r,s){let i=0;if(s==="CS"){const c=n===1?"Winner":"Runner-up",l=r.find(u=>u.rank===c);i=l?l.amount:0}else{const c=`${n}${pv(n)}`,l=r.find(u=>u.rank===c);i=l?l.amount:0}const o=(e||0)*Number(t||0);return{positionPrize:i,killPrize:o,totalPrize:i+o}}function Hx(n,e,t,r){return n.map(s=>({...s,...mv(s.position,s.kills,e,t,r)}))}function Jx(n){if(!n.startTime)return null;const e=fa(n.startTime);if(!e)return null;const r=e-600*1e3-Date.now();return r<=0?"UNLOCKED":`Unlocks in ${av(r)}`}function gv(n,e,t,r){const i=1/(1+Math.pow(10,(e-n)/400)),o=(r-t)/(r-1),c=Math.round(32*(o-i));return Math.max(-50,Math.min(50,c))}function Qx(n){return n==null?{name:"Unranked",color:"#555555",icon:"⚪",min:0,max:999}:n>=2200?{name:"Grandmaster",color:"#FF6B6B",icon:"🔥",min:2200,max:9999}:n>=2e3?{name:"Heroic",color:"#A78BFA",icon:"💀",min:2e3,max:2199}:n>=1800?{name:"Diamond",color:"#B9F2FF",icon:"💎",min:1800,max:1999}:n>=1600?{name:"Platinum",color:"#61CDFF",icon:"🥈",min:1600,max:1799}:n>=1400?{name:"Gold",color:"#FFD700",icon:"🥇",min:1400,max:1599}:n>=1200?{name:"Silver",color:"#C0C0C0",icon:"🥉",min:1200,max:1399}:n>=1e3?{name:"Bronze",color:"#CD7F32",icon:"🛡️",min:1e3,max:1199}:{name:"Unranked",color:"#555555",icon:"⚪",min:0,max:999}}function gt(n){return typeof n!="string"?n:n.replace(/[<>"'&]/g,e=>({"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","&":"&amp;"})[e]).trim().slice(0,100)}function tt(n){return`${n}_${Date.now()}_${Math.random().toString(36).slice(2,9)}`}function zl(){return new Date().toISOString().split("T")[0]}function Cg(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}`}function yv(){const n=new Date;return n.setHours(0,0,0,0),n.toISOString()}function _v(){const n=new Date;return n.setDate(1),n.setHours(0,0,0,0),n.toISOString()}const $h=[{name:"Bronze",color:"#cd7f32",minXP:0,maxXP:99},{name:"Silver",color:"#c0c0c0",minXP:100,maxXP:299},{name:"Gold",color:"#fbbf24",minXP:300,maxXP:599},{name:"Platinum",color:"#6c8cff",minXP:600,maxXP:999},{name:"Diamond",color:"#a78bfa",minXP:1e3,maxXP:1499},{name:"Master",color:"#f87171",minXP:1500,maxXP:2499},{name:"Grandmaster",color:"#00f0ff",minXP:2500,maxXP:1/0}];function bv(n){const e=Number(n)||0;return $h.find(r=>e>=r.minXP&&e<=r.maxXP)||$h[0]}function Xx(n){const e=Number(n)||0,t=bv(e),r=e-t.minXP,s=t.maxXP===1/0?100:t.maxXP-t.minXP;return{tier:t,progress:r,total:s,percentage:Math.min(100,r/s*100)}}async function Iv(n){const e=H(U,"users",n),t=await dt(e);return t.exists()?t.data():null}async function wv(n,e){const t=H(U,"users",n);await Pt(t,{...e,ign:gt(e.ign),displayName:gt(e.displayName),balance:0,lockedBalance:0,kills:0,wins:0,matchesPlayed:0,earnings:0,elo:1e3,banned:!1,status:"active",createdAt:new Date().toISOString(),streak:1,streakLastDate:new Date().toISOString().split("T")[0],level:1,xp:0,nextLevelXP:100,rank:"Unranked",dailyClaimed:!1,totalMatchesPlayed:0,totalWins:0,totalKills:0,totalEarnings:0,achievements:[],referralCode:n.slice(0,8).toUpperCase(),referredBy:null,referralCount:0,referralEarnings:0,lastSpinDate:null,totalSpinWinnings:0,lastAdWatch:null,totalAdRewards:0})}async function ot(n,e){const t=H(U,"users",n);await Ze(t,e)}async function Tv(n){if(!n||n.length===0)return[];const e=Me(U,"users"),t=Te(e,Be("ign","in",n));return(await Ne(t)).docs.map(s=>({id:s.id,...s.data()}))}async function Ev(n){if(!n||n.length===0)return[];const e=n.map(r=>H(U,"users",r));return(await Promise.all(e.map(r=>dt(r)))).filter(r=>r.exists()).map(r=>({id:r.id,...r.data()}))}async function vv(n,e){const t=H(U,"matches",n);await Pt(t,e)}async function xv(n,e){const t=H(U,"matches",n);await Ze(t,e)}async function Kh(n){const e=H(U,"settings","global");(await dt(e)).exists()?await Ze(e,n):await Pt(e,n)}async function Sv(n){const e=H(U,"addMoneyRequests",n.id);await Pt(e,{...n,txId:(n.txId||"").trim().toUpperCase(),senderNumber:gt(n.senderNumber||""),status:"pending",createdAt:new Date().toISOString()})}function Av(n){const e=Me(U,"addMoneyRequests"),t=Te(e,$r("createdAt","desc"));return or(t,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()})).filter(o=>o.status==="pending");n(i)},s=>{console.error("[DB] Add money requests subscription error:",s),n([])})}async function Yx(n,e,t){const r=H(U,"addMoneyRequests",n);await Ze(r,{status:"approved",processedAt:new Date().toISOString()});const s=H(U,"transactions",n);await Ze(s,{status:"completed"}).catch(()=>{console.warn("[DB] Transaction doc not found for approval, skipping update.")});const i=H(U,"users",e),o=await dt(i);if(o.exists()){const c=o.data().balance||0;await Ze(i,{balance:c+t})}}async function Zx(n,e){const t=H(U,"addMoneyRequests",n);await Ze(t,{status:"rejected",processedAt:new Date().toISOString()});const r=H(U,"transactions",n);await Ze(r,{status:"rejected"}).catch(()=>{console.warn("[DB] Transaction doc not found for rejection, skipping update.")})}async function Rv(n,e){if(!e||!n)return{success:!1,error:"Missing data"};const t=Me(U,"users"),r=Te(t,Be("referralCode","==",e.toUpperCase().trim())),s=await Ne(r);if(s.empty)return{success:!1,error:"Invalid referral code"};const i=s.docs[0],o={id:i.id,...i.data()};if(o.id===n)return{success:!1,error:"Cannot refer yourself"};const c=new Date().toISOString(),l=ar(U),u=H(U,"users",n);l.update(u,{referredBy:o.id,lockedBalance:20,balance:0});const p=H(U,"users",o.id);l.update(p,{referralCount:(o.referralCount||0)+1,referralEarnings:(o.referralEarnings||0)+20,lockedBalance:(o.lockedBalance||0)+20});const m=tt("tx_referral");l.set(H(U,"transactions",m),{id:m,userId:n,type:"referral_bonus",amount:20,desc:`Referral bonus: Joined using ${o.username||o.displayName||o.referralCode}'s code`,date:c,status:"completed",referrerId:o.id,referrerCode:e,locked:!0});const _=tt("tx_referral");l.set(H(U,"transactions",_),{id:_,userId:o.id,type:"referral_earn",amount:20,desc:`Referral earn: ${n.slice(0,8)} joined using your code`,date:c,status:"completed",referredUserId:n,locked:!0});const g=tt("ref");return l.set(H(U,"referrals",g),{id:g,referrerId:o.id,referredId:n,codeUsed:e.toUpperCase(),amount:20,status:"pending_match",createdAt:c}),await l.commit(),{success:!0,referrerId:o.id,amount:20}}async function Pv(n){const e=Me(U,"referrals"),t=Te(e,Be("referredId","==",n),Be("status","==","pending_match")),r=await Ne(t);if(r.empty)return{unlocked:!1};const s=ar(U);return r.docs.forEach(i=>{const o=i.data(),c=H(U,"users",o.referredId);s.update(c,{lockedBalance:0,balance:20});const l=H(U,"users",o.referrerId);s.update(l,{lockedBalance:0,balance:20}),s.update(H(U,"referrals",i.id),{status:"unlocked",unlockedAt:new Date().toISOString()})}),await s.commit(),{unlocked:!0}}async function Cv(n){const e=H(U,"users",n),t=await dt(e);if(!t.exists())return null;const r=t.data(),s=Me(U,"referrals"),i=Te(s,Be("referrerId","==",n)),c=(await Ne(i)).docs.map(p=>p.data()),l=c.filter(p=>p.status==="pending_match").length,u=c.filter(p=>p.status==="unlocked").length;return{code:r.referralCode,totalReferrals:c.length,pendingMatch:l,unlocked:u,earnings:r.referralEarnings||0,lockedBalance:r.lockedBalance||0}}const Vn=5,Gh=300*1e3;async function kv(n){const e=H(U,"users",n),t=await dt(e);if(!t.exists())throw new Error("User not found");const r=t.data(),s=r.lastAdWatch?new Date(r.lastAdWatch).getTime():0,i=Date.now();if(i-s<Gh)return{success:!1,cooldown:Math.ceil((Gh-(i-s))/1e3)};const o=new Date().toISOString(),c=ar(U);c.update(e,{balance:(r.balance||0)+Vn,lastAdWatch:o,totalAdRewards:(r.totalAdRewards||0)+Vn});const l=tt("tx_ad");c.set(H(U,"transactions",l),{id:l,userId:n,type:"ad_reward",amount:Vn,desc:`Watched ad +${Vn} TK reward`,date:o,status:"completed"});const u=tt("ad");return c.set(H(U,"adRewards",u),{id:u,userId:n,amount:Vn,createdAt:o,dateStr:zl(),monthStr:Cg()}),await c.commit(),{success:!0,amount:Vn,newBalance:(r.balance||0)+Vn}}const Hh=[{amount:5,chance:.5,label:"5 TK"},{amount:10,chance:.3,label:"10 TK"},{amount:15,chance:.15,label:"15 TK"},{amount:25,chance:.04,label:"25 TK"},{amount:0,chance:.01,label:"Free Match Entry",isFreeEntry:!0}];async function Dv(n){const e=H(U,"users",n),t=await dt(e);if(!t.exists())throw new Error("User not found");const r=t.data(),s=zl();if(r.lastSpinDate===s)return{success:!1,error:"Already spun today. Come back tomorrow!"};const i=Math.random();let o=0,c=Hh[0];for(const _ of Hh)if(o+=_.chance,i<=o){c=_;break}const l=new Date().toISOString(),u=ar(U);c.isFreeEntry?u.update(e,{lastSpinDate:s,freeMatchEntry:!0,freeMatchEntryExpiry:new Date(Date.now()+1440*60*1e3).toISOString()}):u.update(e,{lastSpinDate:s,balance:(r.balance||0)+c.amount,totalSpinWinnings:(r.totalSpinWinnings||0)+c.amount});const p=tt("spin");u.set(H(U,"spinLog",p),{id:p,userId:n,amount:c.amount,isFreeEntry:c.isFreeEntry||!1,createdAt:l,dateStr:s,monthStr:Cg()});const m=tt("tx_spin");return u.set(H(U,"transactions",m),{id:m,userId:n,type:"spin_reward",amount:c.amount,desc:c.isFreeEntry?"🎰 Clutch Spin: Free Match Entry!":`🎰 Clutch Spin: ${c.label}`,date:l,status:"completed"}),await u.commit(),{success:!0,result:c}}function Nv(n){return n.lastSpinDate?n.lastSpinDate!==zl():!0}async function Vv(){const n=yv(),e=_v(),t=Me(U,"matches"),s=(await Ne(Te(t,Be("createdAt",">=",n)))).docs.map(Z=>Z.data()),i=s.length,o=s.filter(Z=>Z.joinedCount>=Z.maxSlots).length,c=s.reduce((Z,ue)=>Z+(ue.entryFee||0)*(ue.joinedCount||0),0),l=Math.round(c*.2),u=s.reduce((Z,ue)=>Z+(ue.escrow?.distributed||0),0),p=s.filter(Z=>Z.status==="cancelled").reduce((Z,ue)=>Z+(ue.escrow?.refunded||0),0),g=(await Ne(Te(t,Be("createdAt",">=",e)))).docs.map(Z=>Z.data()).reduce((Z,ue)=>Z+(ue.entryFee||0)*(ue.joinedCount||0),0),b=Math.round(g*.2),C=Me(U,"referrals"),N=(await Ne(Te(C,Be("createdAt",">=",n)))).docs.length*40,j=(await Ne(Te(C,Be("createdAt",">=",e)))).docs.length*40,z=Me(U,"adRewards"),J=(await Ne(Te(z,Be("createdAt",">=",n)))).docs.reduce((Z,ue)=>Z+(ue.data().amount||0),0),I=(await Ne(Te(z,Be("createdAt",">=",e)))).docs.reduce((Z,ue)=>Z+(ue.data().amount||0),0),v=Me(U,"spinLog"),w=(await Ne(Te(v,Be("createdAt",">=",n)))).docs.reduce((Z,ue)=>Z+(ue.data().amount||0),0),T=(await Ne(Te(v,Be("createdAt",">=",e)))).docs.reduce((Z,ue)=>Z+(ue.data().amount||0),0),le=N+J+w,fe=l-le,Wt=j+I+T,cr=b-Wt,xn=Me(U,"users"),Sn=(await Ne(xn)).docs.map(Z=>Z.data()),An=Sn.reduce((Z,ue)=>Z+(ue.balance||0),0),lr=Sn.reduce((Z,ue)=>Z+(ue.lockedBalance||0),0),Ei=Me(U,"withdrawals"),es=(await Ne(Te(Ei,Be("status","==","pending")))).docs.reduce((Z,ue)=>Z+(ue.data().amount||0),0),ur=(await Ne(Te(t,Be("status","in",["upcoming","live"])))).docs.reduce((Z,ue)=>{const dr=ue.data();return Z+(dr.entryFee||0)*(dr.joinedCount||0)},0),qt=[],ts=s.filter(Z=>Z.status==="upcoming"&&(Z.joinedCount||0)<(Z.minPlayers||10));ts.length>0&&qt.push({type:"warning",message:`${ts.length} match(es) below minimum players`});const xi=s.filter(Z=>Z.status==="cancelled").length;return xi>0&&qt.push({type:"error",message:`${xi} match(es) cancelled today`}),le>l*.15&&qt.push({type:"warning",message:"Referral + ad costs exceed 15% of profit"}),{today:{matchesCreated:i,fullMatches:o,totalEntryFees:c,adminProfit:l,prizePoolPaid:u,cancellationRefunds:p,referralPayouts:N,adRewards:J,spinPayouts:w,totalSpendings:le,netProfit:fe},month:{totalRevenue:g,totalSpendings:Wt,netProfit:cr,adRevenueEstimate:Math.round(g*.002)},funds:{totalUserBalance:An,totalLockedBalance:lr,activeEscrow:ur,pendingWithdrawals:es,totalPlatformValue:An+lr+ur},alerts:qt}}async function Ov(n,e,t,r){const s=H(U,"matches",n),i=Number(r)||0,o=new Date().toISOString(),c=t.map(g=>(g.ign||"").trim()).filter(Boolean),l={};c.length>0&&(await Tv(c)).forEach(b=>{l[(b.ign||"").toLowerCase()]=b});const u=t.map(g=>l[(g.ign||"").trim().toLowerCase()]?.elo||1e3),p=u.length>0?u.reduce((g,b)=>g+b,0)/u.length:1e3,m=ar(U);let _=0;for(const g of t){const b=Number(g.prize)||Number(g.positionPrize)||0,C=Number(g.kills)||0,E=i*C,N=b+E;if(N<=0)continue;_+=N;const V=l[(g.ign||"").trim().toLowerCase()];if(!V){const fe=tt("tx_unclaimed");m.set(H(U,"transactions",fe),{id:fe,userId:"unknown",username:g.ign||"Unknown",ign:g.ign||"",type:"win",amount:N,desc:`Prize: ${gt(e.title)} (#${g.position}) — UNCLAIMED`,matchId:n,date:o,status:"completed",position:g.position,kills:C,positionPrize:b,killPrize:E});continue}const j=V.balance||0,z=V.elo||1e3,Q=gv(z,p,g.position,t.length),J=z+Q,x=(V.totalKills||0)+C,I=(V.totalWins||0)+(g.position===1?1:0),v=(V.totalEarnings||0)+N,A=(V.totalMatchesPlayed||0)+1,w=[...V.achievements||[]],S=(fe,Wt)=>{Wt&&!w.includes(fe)&&w.push(fe)};S("first_match",A>=1),S("first_win",I>=1),S("kill_10",x>=10),S("kill_50",x>=50),S("kill_100",x>=100),S("win_5",I>=5),S("win_10",I>=10),m.update(H(U,"users",V.id),{balance:j+N,wins:(V.wins||0)+(g.position===1?1:0),earnings:(V.earnings||0)+N,elo:J,totalMatchesPlayed:A,totalKills:x,totalWins:I,totalEarnings:v,achievements:w});const T=tt("tx_win");let le=`Prize: ${gt(e.title)}`;g.position===1?le+=" (🥇 1st Place)":g.position===2?le+=" (🥈 2nd Place)":g.position===3?le+=" (🥉 3rd Place)":le+=` (#${g.position} Place)`,E>0&&(le+=` + ${C} kills (${E} TK)`),le+=` [ELO ${Q>=0?"+":""}${Q}]`,m.set(H(U,"transactions",T),{id:T,userId:V.id,username:V.name||V.displayName||V.ign,ign:V.ign||"",type:"win",amount:N,desc:le,matchId:n,date:o,status:"completed",position:g.position,kills:C,positionPrize:b,killPrize:E,eloChange:Q})}return m.update(s,{result:{submittedAt:o,players:t},prizeDistributed:(e.prizeDistributed||0)+_,"escrow.distributed":(e.escrow?.distributed||0)+_}),await m.commit(),{totalDistributed:_,unclaimed:t.length-Object.keys(l).length}}async function Mv(n,e,t){const r=H(U,"matches",n),s=e.participants||[],i=Number(e.entryFee)||0,o=new Date().toISOString();if(s.length===0)return await Ze(r,{status:"cancelled",cancelledAt:o}),{refunded:0,count:0};const c=await Ev(s),l=ar(U);let u=0,p=0;for(const m of c){const _=(m.balance||0)+i;l.update(H(U,"users",m.id),{balance:_}),u+=i,p++;const g=tt("tx_refund");l.set(H(U,"transactions",g),{id:g,userId:m.id,username:m.name||m.displayName||"Unknown",ign:m.ign||"",type:"refund",amount:i,desc:`Refund: ${gt(e.title)} (Match cancelled by ${gt(t)||"Admin"})`,matchId:n,date:o,status:"completed"})}return l.update(r,{status:"cancelled",cancelledAt:o,cancelledBy:t||"Admin",refundCount:p,refundTotal:u,"escrow.refunded":u}),await l.commit(),{refunded:u,count:p}}async function Lv(n,e,t,r){const s=H(U,"users",n),i=await dt(s);if(!i.exists())throw new Error("User not found");const o=i.data(),c="Admin",l=new Date().toISOString();await Ze(s,{balance:Math.max(0,(o.balance||0)+e)});const u=tt("tx_admin");return await Pt(H(U,"transactions",u),{id:u,userId:n,username:o.name||o.displayName||"Unknown",ign:o.ign||"",type:e>=0?"admin_add":"admin_deduct",amount:Math.abs(e),desc:`Admin ${gt(c)}: ${gt(t)||"Balance adjustment"} (${e>=0?"Added":"Deducted"})`,date:l,status:"completed",adminName:c}),Math.max(0,(o.balance||0)+e)}async function jv(n,e){const t=H(U,"matches",n),r=await dt(t);if(!r.exists())return;const s=r.data(),i=r.data().joined||[],o=r.data().participants||[],c={...e,teamName:gt(e.teamName)};await Ze(t,{joined:[...i,c],joinedCount:(s.joinedCount||0)+1,participants:[...o,e.userId],"escrow.collected":(s.escrow?.collected||0)+(s.entryFee||0)})}async function Fv(n){const e=H(U,"withdrawals",n.id);await Pt(e,n)}async function Uv(n){const e=H(U,"activityLog",n.id);await Pt(e,n)}async function Jh(n){const e=H(U,"transactions",n.id);await Pt(e,n)}function Bv(n){const e=Me(U,"matches"),t=Te(e,$r("createdAt","desc"));return or(t,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));n(i)})}function zv(n){const e=H(U,"settings","global");return or(e,r=>{r.exists()&&n(r.data())})}function Wv(n,e){const t=H(U,"users",n);return or(t,s=>{s.exists()&&e(s.data())})}function qv(n){const e=Me(U,"withdrawals"),t=Te(e,$r("createdAt","desc"));return or(t,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));n(i)})}async function $v(n,e,t){const r=new Date().toISOString(),s=H(U,"withdrawals",n);await Ze(s,{status:"approved",processedAt:r});const i=tt("tx_wd_ok");await Pt(H(U,"transactions",i),{id:i,userId:e,amount:t,type:"withdraw",status:"completed",desc:`Withdrawal of ${t} TK approved and processed`,date:r,createdAt:r})}async function Kv(n,e,t){const r=new Date().toISOString(),s=H(U,"withdrawals",n);await Ze(s,{status:"rejected",processedAt:r});const i=H(U,"users",e),o=await dt(i);if(o.exists()){const l=o.data();await Ze(i,{balance:(l.balance||0)+t})}const c=tt("tx_wd_rj");await Pt(H(U,"transactions",c),{id:c,userId:e,amount:t,type:"refund",status:"completed",desc:`Withdrawal of ${t} TK rejected — Amount refunded to balance`,date:r,createdAt:r})}function Gv(n){const e=Me(U,"users"),t=Te(e,$r("earnings","desc"));return or(t,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));n(i)})}function Hv(n,e){const t=Me(U,"transactions"),r=Te(t,Be("userId","==",n));return or(r,i=>{const o=i.docs.map(c=>({id:c.id,...c.data()}));o.sort((c,l)=>{const u=new Date(c.date||0).getTime();return new Date(l.date||0).getTime()-u}),e(o)},i=>{console.error("[DB] Transaction subscription error:",i),e([])})}function Jv(n){const e=async()=>{try{const r=await Vv();n(r)}catch(r){console.error("[DB] Profit stats refresh error:",r)}};e();const t=setInterval(e,3e4);return()=>clearInterval(t)}async function Qv(n,e){const t=H(U,"matches",n),r=await dt(t);if(!r.exists())throw new Error("Match not found");const s=r.data(),i=new Date().toISOString(),o=ar(U),c=s.prizePool||0,l=[.6,.25,.15],u=[],p=s.joined||[];for(let _=0;_<Math.min(3,e.finalResults.length);_++){const g=e.finalResults[_],b=Math.round(c*l[_]),C=p.find(V=>V.teamName&&V.teamName===g.teamName||V.teamId&&V.teamId===g.teamId),E=C?.userId||null,N=g.playerList?.[0]?.name||C?.ign||C?.name||g.teamName;if(u.push({rank:_+1,teamId:g.teamId,teamName:g.teamName,iglUid:E,iglName:N,amount:b}),E&&b>0){const V=H(U,"users",E),j=await dt(V);if(j.exists()){const Q=j.data();o.update(V,{balance:(Q.balance||0)+b,earnings:(Q.earnings||0)+b,totalEarnings:(Q.totalEarnings||0)+b,totalWins:(Q.totalWins||0)+(_===0?1:0)})}const z=tt("tx_win");o.set(H(U,"transactions",z),{id:z,userId:E,username:N,ign:C?.ign||"",type:"win",amount:b,desc:`Prize: ${gt(s.title)} (${["🥇 1st","🥈 2nd","🥉 3rd"][_]}) — IGL: ${g.teamName}`,matchId:n,date:i,status:"completed",position:_+1})}}const m={submittedAt:i,method:"pointcalc",matchTitle:e.matchTitle||s.title,gameType:e.gameType||s.gameType,mode:e.mode||s.mode,totalRounds:e.totalRounds,finalResults:e.finalResults,roundsData:e.roundsData,prizeDistribution:u};return o.update(t,{status:"completed",result:m,"escrow.distributed":(s.escrow?.distributed||0)+c}),await o.commit(),{success:!0,prizeDistribution:u,savedResult:m}}const kg=M.createContext(null),Fo="clutch_arena_bd";(function(){try{const e=localStorage.getItem(Fo);if(e){const t=JSON.parse(e);t?.currentUser&&(t.currentUser.balance!==void 0||t.currentUser.role!==void 0)&&localStorage.removeItem(Fo)}}catch{}})();function Xv(){try{const n=localStorage.getItem(Fo);return n?JSON.parse(n):null}catch{return null}}function Yv(n){try{localStorage.setItem(Fo,JSON.stringify(n))}catch{}}const tn=n=>new Date(Date.now()+n).toISOString().slice(0,16).replace("T"," "),Dg="+8801871035221",Ng="brintomustavi247@gmail.com";function Zv(){const e=(window.location.hash.slice(1)||"login").split("/");return{view:e[0],param:e[1]||null}}const Gi=Xv(),Hi=Gi?.isLoggedIn&&Gi?.currentUser?.id?Gi:{...Gi,isLoggedIn:!1,currentUser:null},Qh=[{role:"user",phone:"01700000001",password:"1234",id:"demo_user_1",username:"shadowkiller",name:"ShadowKiller",displayName:"ShadowKiller",ign:"ShadowKiller",balance:1250},{role:"admin",username:"admin1",password:"admin123",id:"demo_admin_1",name:"Admin One",displayName:"Admin One",ign:"Admin One",balance:0},{role:"owner",username:"owner",password:"owner123",id:"demo_owner_1",name:"Owner",displayName:"Owner",ign:"Owner",balance:0}],Xh=n=>({id:n.id,username:n.username,password:n.password,role:n.role,name:n.name,displayName:n.displayName,ign:n.ign,uid:n.phone||n.username,avatar:null,balance:n.balance||0,lockedBalance:0,kills:0,wins:0,matchesPlayed:0,earnings:0,online:!0,banned:!1,status:"active",forcePasswordChange:!1,permissions:[],phone:n.phone||"",email:"",createdAt:new Date().toISOString().slice(0,16).replace("T"," ")}),ex={isLoggedIn:Hi.isLoggedIn||!1,currentUser:Hi.currentUser||null,users:[],matches:[],notifications:[],transactions:[],standings:[],adminPayments:{bKash:"",Nagad:"",Rocket:""},pendingWithdrawals:[],pendingAddMoneyRequests:[],activityLog:[],currentView:Hi.isLoggedIn?"dashboard":"login",viewParam:null,matchFilter:"all",adminTab:"admin-overview",rightPanelOpen:!1,modal:null,toasts:[],now:Date.now(),loading:!1,sidebarOpen:!1,language:Hi.language||"en",pendingPrizeDistribution:null,pendingCancelMatch:null,pendingBalanceAdjust:null,pendingPointcalcResult:null,rateLimited:!1,requireIGN:!1,joinBlocked:null,referralStats:null,adCooldown:0,canSpin:!1,spinResult:null,profitStats:null,shareMatchId:null};function tx(n,e){switch(e.type){case"TICK":return{...n,now:Date.now()};case"NAVIGATE":return{...n,currentView:e.payload.view,viewParam:e.payload.param,sidebarOpen:!1};case"SET_FILTER":return{...n,matchFilter:e.payload};case"SET_ADMIN_TAB":return{...n,adminTab:e.payload};case"TOGGLE_SIDEBAR":return{...n,sidebarOpen:!n.sidebarOpen};case"CLOSE_SIDEBAR":return{...n,sidebarOpen:!1};case"LOGIN_USER":{const{username:t,phone:r,password:s}=e.payload,i=n.users.find(l=>l.role!=="user"||l.password!==s?!1:!!(t&&l.username===t||r&&l.phone===r)),o=i?null:Qh.find(l=>l.role==="user"&&l.password===s&&(r&&l.phone===r||t&&l.username===t));if(!i&&!o)return{...n,loading:!1};const c=i||Xh(o);return c.status==="banned"?{...n,loading:!1}:{...n,isLoggedIn:!0,currentUser:{...c},currentView:"dashboard",loading:!1,modal:null}}case"LOGIN_ADMIN":{const{username:t,password:r}=e.payload,s=n.users.find(c=>c.username===t&&c.password===r&&(c.role==="admin"||c.role==="owner")),i=s?null:Qh.find(c=>(c.role==="admin"||c.role==="owner")&&c.username===t&&c.password===r);if(!s&&!i)return{...n,loading:!1};const o=s||Xh(i);return o.status==="banned"?{...n,loading:!1}:{...n,isLoggedIn:!0,currentUser:{...o},currentView:"admin-overview",loading:!1,modal:null}}case"FIREBASE_LOGIN":{const t=e.payload;if(!t)return n.currentUser?.firebaseUid?{...n,isLoggedIn:!1,currentUser:null,currentView:"login",viewParam:null,modal:null}:n;const r=(t.dbData,t),s=t.dbData||null,i=r.phoneNumber?.replace("+880","0")||"",o=r.email||"",l=i===Dg||o===Ng?"owner":s?.role||"user";return{...n,isLoggedIn:!0,currentUser:{id:r.uid,username:s?.username||r.displayName?.toLowerCase().replace(/\s+/g,"_")||"user_"+r.uid.slice(0,8),name:s?.name||r.displayName||"Firebase User",displayName:s?.displayName||r.displayName||"Firebase User",ign:s?.ign||n.currentUser?.ign||"",avatar:s?.avatar||r.photoURL||null,role:l,phone:s?.phone||i,email:s?.email||o,firebaseUid:r.uid,balance:s?.balance??0,lockedBalance:s?.lockedBalance??0,kills:s?.kills??0,wins:s?.wins??0,matchesPlayed:s?.matchesPlayed??0,earnings:s?.earnings??0,elo:s?.elo??1e3,banned:s?.banned||!1,status:s?.status||"active",permissions:s?.permissions||n.currentUser?.permissions||[],teamName:s?.teamName||n.currentUser?.teamName||"",referralCode:s?.referralCode||r.uid.slice(0,8).toUpperCase(),referredBy:s?.referredBy||null,referralCount:s?.referralCount||0,referralEarnings:s?.referralEarnings||0,lastSpinDate:s?.lastSpinDate||null,totalSpinWinnings:s?.totalSpinWinnings||0,lastAdWatch:s?.lastAdWatch||null,totalAdRewards:s?.totalAdRewards||0,streak:s?.streak||0,level:s?.level||1,xp:s?.xp||0,nextLevelXP:s?.nextLevelXP||100,winRate:s?.winRate||0,createdAt:s?.createdAt||n.currentUser?.createdAt||new Date().toISOString()},currentView:n.isLoggedIn?n.currentView:l==="owner"?"admin-overview":"dashboard",requireIGN:(!s?.ign||!s?.ign.trim())&&l!=="owner",loading:!1,modal:null}}case"FIREBASE_USER_UPDATE":{if(!n.currentUser)return n;if(e.payload?.banned===!0)return{...n,isLoggedIn:!1,currentUser:null,currentView:"login",viewParam:null,modal:null,toasts:[...n.toasts,{id:"banned_"+Date.now(),type:"error",text:"Your account has been banned by admin.",removing:!1}],sidebarOpen:!1};const t={...n,currentUser:{...n.currentUser,...e.payload}};return n.requireIGN&&e.payload?.ign?.trim()&&(t.requireIGN=!1),t}case"FIREBASE_LOGOUT":return n.currentUser?.firebaseUid?{...n,isLoggedIn:!1,currentUser:null,currentView:"login",viewParam:null,modal:null,toasts:[],sidebarOpen:!1}:n;case"RESET_PASSWORD":{const{phone:t,email:r,newPassword:s}=e.payload,i=n.users.findIndex(o=>!!(t&&o.phone===t||r&&o.email&&o.email.toLowerCase()===r.toLowerCase()));return i===-1?n:{...n,users:n.users.map((o,c)=>c===i?{...o,password:s,forcePasswordChange:!1}:o)}}case"LOGOUT":return{...n,isLoggedIn:!1,currentUser:null,currentView:"login",viewParam:null,modal:null,toasts:[],sidebarOpen:!1,referralStats:null,adCooldown:0,canSpin:!1,spinResult:null,profitStats:null};case"UPDATE_PROFILE":{const t={...n.currentUser,...e.payload};return ot(t.id,e.payload).catch(r=>console.error("Profile update failed:",r)),{...n,currentUser:t,users:n.users.map(r=>r.id===t.id?{...r,...e.payload}:r)}}case"SET_AVATAR":{const t={...n.currentUser,avatar:e.payload};return ot(t.id,{avatar:e.payload}).catch(r=>console.error("Avatar update failed:",r)),{...n,currentUser:t,users:n.users.map(r=>r.id===t.id?{...r,avatar:e.payload}:r)}}case"CHANGE_PASSWORD":{const{userId:t,newPassword:r}=e.payload;return{...n,currentUser:n.currentUser?.id===t?{...n.currentUser,password:r,forcePasswordChange:!1}:n.currentUser,users:n.users.map(s=>s.id===t?{...s,password:r,forcePasswordChange:!1}:s)}}case"CREATE_MATCH":{const t=e.payload,r=hv(t.entryFee,t.maxSlots,t.gameType,t.include4th,t.include5th),s="m"+Date.now(),i={id:s,title:t.title,mode:t.mode,map:t.map,gameType:t.gameType,entryFee:Number(t.entryFee),maxSlots:Number(t.maxSlots),joinedCount:0,perKill:Number(t.perKill)||0,include4th:!!t.include4th,include5th:!!t.include5th,status:"upcoming",startTime:t.startTime||"",roomId:"",roomPassword:"",image:t.image||"",participants:[],prizePool:r.prizePool,prizes:r.prizes,createdBy:n.currentUser?.id,createdAt:new Date().toISOString(),escrow:{collected:0,refunded:0,distributed:0},minPlayers:Number(t.minPlayers)||10,joined:[]};return vv(s,i).catch(o=>console.error("Cloud save failed:",o)),{...n,matches:[i,...n.matches]}}case"UPDATE_MATCH":return{...n,matches:n.matches.map(t=>t.id===e.payload.id?{...t,...e.payload}:t)};case"DELETE_MATCH":return{...n,matches:n.matches.filter(t=>t.id!==e.payload)};case"JOIN_MATCH":{const{matchId:t,teamName:r}=e.payload,s=n.matches.find(b=>b.id===t);if(!s||s.status==="completed"||s.status==="cancelled"||s.joinedCount>=s.maxSlots||s.participants?.includes(n.currentUser?.id))return n;if(n.matches.some(b=>(b.status==="upcoming"||b.status==="live")&&b.participants?.includes(n.currentUser?.id)))return{...n,joinBlocked:"You already have an active match. Wait for it to finish before joining another."};const o=Pg(s.mode,s.entryFee);if((n.currentUser?.balance||0)+(n.currentUser?.lockedBalance||0)<o)return n;let l=o,u=n.currentUser.balance||0,p=n.currentUser.lockedBalance||0;p>=l?(p-=l,l=0):(l-=p,p=0,u-=l);const m={...n.currentUser,balance:u,lockedBalance:p,matchesPlayed:n.currentUser.matchesPlayed+1,teamName:r||n.currentUser.teamName||""},_={userId:n.currentUser.id,ign:n.currentUser.ign||"",username:n.currentUser.username||"",name:n.currentUser.name||n.currentUser.displayName||"",teamName:r||"",joinedAt:new Date().toISOString()},g={...s,joinedCount:s.joinedCount+1,participants:[...s.participants||[],n.currentUser.id],joined:[...s.joined||[],_],escrow:{...s.escrow||{collected:0,refunded:0,distributed:0},collected:(s.escrow?.collected||0)+o}};return jv(t,_).catch(b=>console.error("Cloud join sync failed:",b)),Jh({id:"tx"+Date.now(),type:"join",amount:o,desc:r?`Joined ${s.title} (Team: ${r})`:`Joined ${s.title}`,date:tn(0),status:"completed",userId:n.currentUser.id,username:n.currentUser.name||n.currentUser.displayName,ign:n.currentUser.ign||""}).catch(()=>{}),Pv(n.currentUser.id).catch(()=>{}),ot(n.currentUser.id,{balance:u,lockedBalance:p,matchesPlayed:m.matchesPlayed,teamName:m.teamName}).catch(b=>console.error("Failed to update user match join data in DB:",b)),{...n,joinBlocked:null,matches:n.matches.map(b=>b.id===t?g:b),currentUser:m,users:n.users.map(b=>b.id===m.id?m:b),transactions:[{id:"tx"+Date.now(),type:"join",amount:o,desc:r?`Joined ${s.title} (Team: ${r})`:`Joined ${s.title}`,date:tn(0),status:"completed"},...n.transactions]}}case"SET_ROOM_CREDENTIALS":return n.matches.find(r=>r.id===e.payload.matchId)?(xv(e.payload.matchId,{roomId:e.payload.roomId.trim(),roomPassword:e.payload.roomPassword.trim(),roomUpdatedAt:new Date().toISOString()}).catch(r=>console.error("Failed to save room credentials:",r)),{...n,matches:n.matches.map(r=>r.id===e.payload.matchId?{...r,roomId:e.payload.roomId.trim(),roomPassword:e.payload.roomPassword.trim()}:r)}):n;case"SUBMIT_RESULT":{const t=n.matches.find(s=>s.id===e.payload.matchId);if(!t)return n;const r=n.matches.map(s=>s.id===e.payload.matchId?{...s,status:"completing"}:s);return{...n,matches:r,pendingPrizeDistribution:{matchId:e.payload.matchId,matchData:{...t},resultPlayers:e.payload.players,perKill:t.perKill||0,method:e.payload.method,screenshotUrl:e.payload.screenshotUrl||null},loading:!0}}case"PRIZE_DISTRIBUTION_SUCCESS":{const{matchId:t,updatedMatch:r}=e.payload,s=n.matches.map(i=>i.id===t?{...i,...r,status:"completed"}:i);return{...n,matches:s,loading:!1,pendingPrizeDistribution:null}}case"PRIZE_DISTRIBUTION_ERROR":return{...n,loading:!1,pendingPrizeDistribution:null};case"CANCEL_MATCH":{const t=typeof e.payload=="string"?e.payload:e.payload.matchId,r=n.matches.find(i=>i.id===t);if(!r)return n;const s=n.matches.map(i=>i.id===t?{...i,status:"cancelling"}:i);return{...n,matches:s,pendingCancelMatch:{matchId:t,matchData:{...r},adminName:n.currentUser?.displayName||"Admin"},loading:!0}}case"CANCEL_MATCH_SUCCESS":{const{matchId:t,result:r}=e.payload,s=n.matches.map(i=>i.id===t?{...i,status:"cancelled",cancelledAt:r.refundedAt,refundCount:r.count,refundTotal:r.refunded,escrow:{...i.escrow||{collected:0,refunded:0,distributed:0},refunded:r.refunded}}:i);return{...n,matches:s,loading:!1,pendingCancelMatch:null}}case"CANCEL_MATCH_ERROR":return{...n,loading:!1,pendingCancelMatch:null};case"BATCH_MATCH_UPDATE":return{...n,matches:e.payload};case"ADD_MONEY":{const{amount:t,method:r,txId:s}=e.payload,i=`clutch_deposit_${n.currentUser?.id}`,o=localStorage.getItem(i);if(o&&Date.now()-parseInt(o)<12e4)return{...n,rateLimited:!0};localStorage.setItem(i,Date.now().toString());const c="amr_"+Date.now(),l={id:c,type:"add",amount:Number(t),desc:`Add ৳${t} via ${r} — TXID: ${s} (Pending)`,date:tn(0),status:"pending",userId:n.currentUser.id,username:n.currentUser.name||n.currentUser.displayName,method:r,txId:s,senderNumber:e.payload.senderNumber||""},u={id:c,userId:n.currentUser.id,username:n.currentUser.name||n.currentUser.displayName,ign:n.currentUser.ign||"",phone:n.currentUser.phone||"",senderNumber:e.payload.senderNumber||"",amount:Number(t),method:r,txId:s,status:"pending",createdAt:new Date().toISOString()};return Sv(u).catch(p=>console.error("Failed to submit add money request:",p)),{...n,transactions:[l,...n.transactions],rateLimited:!1}}case"CLEAR_RATE_LIMIT":return{...n,rateLimited:!1};case"CLEAR_REQUIRE_IGN":return{...n,requireIGN:!1};case"CLEAR_JOIN_BLOCKED":return{...n,joinBlocked:null};case"APPROVE_ADD_MONEY":{const{requestId:t,userId:r,amount:s}=e.payload,i=n.transactions.map(u=>u.id===t?{...u,status:"completed",desc:u.desc.replace("(Pending)","(Approved)")}:u),o=n.users.map(u=>u.id===r?{...u,balance:u.balance+s}:u);let c=n.currentUser;c&&c.id===r&&(c={...c,balance:c.balance+s});const l=n.pendingAddMoneyRequests.filter(u=>u.id!==t);return{...n,transactions:i,users:o,currentUser:c,pendingAddMoneyRequests:l}}case"REJECT_ADD_MONEY":{const{requestId:t}=e.payload,r=n.transactions.map(i=>i.id===t?{...i,status:"rejected",desc:i.desc.replace("(Pending)","(Rejected)")}:i),s=n.pendingAddMoneyRequests.filter(i=>i.id!==t);return{...n,transactions:r,pendingAddMoneyRequests:s}}case"LOAD_PENDING_REQUESTS":return{...n,pendingAddMoneyRequests:e.payload};case"LOAD_WITHDRAWALS":return{...n,pendingWithdrawals:(e.payload||[]).filter(t=>t.status==="pending")};case"LOAD_TRANSACTIONS":return{...n,transactions:e.payload};case"LOAD_USERS":return{...n,users:e.payload};case"WITHDRAW":{if((n.currentUser?.lockedBalance||0)>0)return de({},"Use your locked balance in matches first!","error"),n;if(n.currentUser.balance<e.payload.amount)return n;const t={id:"w"+Date.now(),userId:n.currentUser.id,username:n.currentUser.name||n.currentUser.displayName,amount:e.payload.amount,method:e.payload.method,account:e.payload.account,createdAt:tn(0),status:"pending"};return Fv(t).catch(r=>console.error("Cloud withdraw sync failed:",r)),Jh({id:"tx"+Date.now(),type:"withdraw",amount:e.payload.amount,desc:`Withdrawal to ${e.payload.method}`,date:tn(0),status:"pending",userId:n.currentUser.id,username:n.currentUser.name||n.currentUser.displayName,ign:n.currentUser.ign||""}).catch(()=>{}),ot(n.currentUser.id,{balance:n.currentUser.balance-e.payload.amount}).catch(r=>console.error("Failed to deduct balance in Firestore:",r)),{...n,currentUser:{...n.currentUser,balance:n.currentUser.balance-e.payload.amount},transactions:[{id:"tx"+Date.now(),type:"withdraw",amount:e.payload.amount,desc:`Withdrawal to ${e.payload.method}`,date:tn(0),status:"pending"},...n.transactions],pendingWithdrawals:[t,...n.pendingWithdrawals]}}case"MARK_NOTIFICATIONS_READ":return{...n,notifications:n.notifications.map(t=>({...t,read:!0}))};case"MARK_NOTIFICATION_READ":return{...n,notifications:n.notifications.map(t=>t.id===e.payload?{...t,read:!0}:t)};case"TOGGLE_BAN":{const t=e.payload,r=n.users.find(o=>o.id===t);if(!r)return n;const s=!r.banned,i=s?"banned":"active";return{...n,users:n.users.map(o=>o.id===t?{...o,banned:s,status:i}:o)}}case"BAN_USER":{const t=e.payload;return ot(t,{banned:!0,status:"banned"}).catch(r=>console.error("Ban failed:",r)),{...n,users:n.users.map(r=>r.id===t?{...r,banned:!0,status:"banned"}:r)}}case"UNBAN_USER":{const t=e.payload;return ot(t,{banned:!1,status:"active"}).catch(r=>console.error("Unban failed:",r)),{...n,users:n.users.map(r=>r.id===t?{...r,banned:!1,status:"active"}:r)}}case"PROMOTE_TO_ADMIN":{const t=e.payload;return ot(t,{role:"admin",permissions:[]}).catch(r=>{console.error("Promote failed:",r),setTimeout(()=>{const{users:s}=require("./context").useApp.getState?.()||{}},100)}),{...n,users:n.users.map(r=>r.id===t?{...r,role:"admin",permissions:[]}:r)}}case"DEMOTE_TO_USER":{const t=e.payload;return ot(t,{role:"user",permissions:[]}).catch(r=>console.error("Demote failed:",r)),{...n,users:n.users.map(r=>r.id===t?{...r,role:"user",permissions:[]}:r)}}case"FORCE_PASSWORD_CHANGE":{const t=e.payload;return ot(t,{forcePasswordChange:!0}).catch(r=>console.error("Force password change failed:",r)),{...n,users:n.users.map(r=>r.id===t?{...r,forcePasswordChange:!0}:r)}}case"ADJUST_BALANCE":{const{userId:t,action:r,amount:s}=e.payload,i=Number(s);return!t||!i||i<=0||!r?n:{...n,pendingBalanceAdjust:{userId:t,action:r,amount:i,reason:e.payload.reason||"Balance adjustment"},loading:!0}}case"BALANCE_ADJUST_SUCCESS":{const{userId:t,newBalance:r}=e.payload;return{...n,loading:!1,pendingBalanceAdjust:null,users:n.users.map(s=>s.id===t?{...s,balance:r}:s)}}case"BALANCE_ADJUST_ERROR":return{...n,loading:!1,pendingBalanceAdjust:null};case"ASSIGN_PERMISSIONS":{const{userId:t,permissions:r}=e.payload;return ot(t,{permissions:r}).catch(s=>console.error("Permission save failed:",s)),{...n,users:n.users.map(s=>s.id===t?{...s,permissions:r}:s),currentUser:n.currentUser?.id===t?{...n.currentUser,permissions:r}:n.currentUser}}case"APPROVE_WITHDRAW":{const t=n.pendingWithdrawals.find(r=>r.id===e.payload);return t&&$v(t.id,t.userId,t.amount).catch(r=>console.error("Cloud approve failed:",r)),{...n}}case"REJECT_WITHDRAW":{const t=n.pendingWithdrawals.find(r=>r.id===e.payload);return t&&Kv(t.id,t.userId,t.amount).catch(r=>console.error("Cloud reject failed:",r)),{...n}}case"LOAD_SETTINGS":return{...n,adminPayments:e.payload};case"SAVE_ADMIN_PAYMENTS":return Kh(e.payload).catch(t=>console.error("Settings cloud save failed:",t)),{...n,adminPayments:{...n.adminPayments,...e.payload}};case"UPDATE_ADMIN_PAYMENTS":return Kh(e.payload).catch(t=>console.error("Settings cloud save failed:",t)),{...n,adminPayments:{...n.adminPayments,...e.payload}};case"LOG_ACTION":{const t={id:"log_"+Date.now(),adminId:n.currentUser?.id,adminName:n.currentUser?.displayName||n.currentUser?.name,adminRole:n.currentUser?.role,action:e.payload.action,target:e.payload.target||null,details:e.payload.details||null,createdAt:tn(0)};return Uv(t).catch(r=>console.error("Cloud log sync failed:",r)),{...n,activityLog:[t,...n.activityLog].slice(0,200)}}case"SET_LANGUAGE":return{...n,language:e.payload};case"TOGGLE_RIGHT_PANEL":return{...n,rightPanelOpen:!n.rightPanelOpen};case"SHOW_MODAL":return{...n,modal:e.payload};case"CLOSE_MODAL":return{...n,modal:null};case"SET_LOADING":return{...n,loading:e.payload};case"SHOW_TOAST":return{...n,toasts:[...n.toasts,e.payload]};case"TOAST_REMOVING":return{...n,toasts:n.toasts.map(t=>t.id===e.payload?{...t,removing:!0}:t)};case"REMOVE_TOAST":return{...n,toasts:n.toasts.filter(t=>t.id!==e.payload)};case"LOGIN":return{...n,isLoggedIn:!0,currentUser:e.payload,currentView:"dashboard",loading:!1,modal:null};case"SET_REFERRAL_STATS":return{...n,referralStats:e.payload};case"PROCESS_REFERRAL_SUCCESS":{const{referrerId:t,amount:r}=e.payload;return{...n,currentUser:{...n.currentUser,lockedBalance:(n.currentUser?.lockedBalance||0)+r,referredBy:t}}}case"UNLOCK_REFERRAL_BONUS":{const{amount:t}=e.payload;return{...n,currentUser:{...n.currentUser,lockedBalance:Math.max(0,(n.currentUser?.lockedBalance||0)-t),balance:(n.currentUser?.balance||0)+t,referralEarnings:(n.currentUser?.referralEarnings||0)+t}}}case"SET_AD_COOLDOWN":return{...n,adCooldown:e.payload};case"AD_REWARD_SUCCESS":{const{amount:t,newBalance:r,newTotal:s}=e.payload;return{...n,currentUser:{...n.currentUser,balance:r,totalAdRewards:s,lastAdWatch:new Date().toISOString()},adCooldown:300}}case"SET_CAN_SPIN":return{...n,canSpin:e.payload};case"SPIN_SUCCESS":{const{result:t}=e.payload,r=t.isFreeEntry;return{...n,spinResult:t,canSpin:!1,currentUser:{...n.currentUser,balance:r?n.currentUser.balance:(n.currentUser.balance||0)+t.amount,totalSpinWinnings:r?n.currentUser.totalSpinWinnings||0:(n.currentUser.totalSpinWinnings||0)+t.amount,freeMatchEntry:r||n.currentUser?.freeMatchEntry,lastSpinDate:new Date().toISOString()}}}case"CLEAR_SPIN_RESULT":return{...n,spinResult:null};case"SET_PROFIT_STATS":return{...n,profitStats:e.payload};case"SET_SHARE_MATCH":return{...n,shareMatchId:e.payload};case"SUBMIT_POINTCALC_RESULT":{const{matchId:t,resultData:r}=e.payload;return{...n,matches:n.matches.map(s=>s.id===t?{...s,status:"completing"}:s),pendingPointcalcResult:{matchId:t,resultData:r},loading:!0}}case"POINTCALC_RESULT_SUCCESS":{const{matchId:t,result:r}=e.payload;return{...n,matches:n.matches.map(s=>s.id===t?{...s,status:"completed",result:r.savedResult,"escrow.distributed":(s.escrow?.distributed||0)+(s.prizePool||0)}:s),loading:!1,pendingPointcalcResult:null}}case"POINTCALC_RESULT_ERROR":return{...n,loading:!1,pendingPointcalcResult:null};case"SHARE_MATCH":{const t=n.matches.find(s=>s.id===e.payload);if(!t)return n;const r=(n.currentUser?.balance||0)+5;return{...n,currentUser:{...n.currentUser,balance:r},transactions:[{id:"tx_share_"+Date.now(),type:"share_reward",amount:5,desc:`Shared match: ${t.title}`,date:tn(0),status:"completed"},...n.transactions]}}default:return n}}function Vg({children:n}){const[e,t]=M.useReducer(tx,ex),r=M.useMemo(()=>e.currentUser?.role==="admin"||e.currentUser?.role==="owner",[e.currentUser?.role]),s=M.useMemo(()=>e.currentUser?.role==="owner",[e.currentUser?.role]),i=M.useMemo(()=>e.isLoggedIn,[e.isLoggedIn]),o=M.useCallback(g=>g,[]);M.useMemo(()=>e.currentUser,[e.currentUser]),M.useMemo(()=>e.matches,[e.matches]);const c=M.useCallback(g=>{window.location.hash=g},[]),l=M.useCallback(async g=>{if(e.currentUser?.firebaseUid)try{const b=await Rv(e.currentUser.firebaseUid,g);return b.success&&t({type:"PROCESS_REFERRAL_SUCCESS",payload:{referrerId:b.referrerId,amount:b.amount}}),b}catch(b){return console.error("Referral processing failed:",b),{success:!1,error:b.message}}},[e.currentUser?.firebaseUid]),u=M.useCallback(async()=>{if(e.currentUser?.firebaseUid)try{const g=await kv(e.currentUser.firebaseUid);return g.success&&t({type:"AD_REWARD_SUCCESS",payload:g}),g}catch(g){return console.error("Ad reward failed:",g),{success:!1,error:g.message}}},[e.currentUser?.firebaseUid]),p=M.useCallback(async()=>{if(e.currentUser?.firebaseUid)try{const g=await Dv(e.currentUser.firebaseUid);return g.success&&t({type:"SPIN_SUCCESS",payload:{result:g.prize}}),g}catch(g){return console.error("Clutch spin failed:",g),{success:!1,error:g.message}}},[e.currentUser?.firebaseUid]);M.useEffect(()=>{const g=UT(ho,async b=>{if(b){let C=await Iv(b.uid);if(!C){const E=b.phoneNumber?.replace("+880","0")||"",N={username:b.displayName?.toLowerCase().replace(/\s+/g,"_")||"user_"+b.uid.slice(0,8),name:b.displayName||"Firebase User",displayName:b.displayName||"Firebase User",ign:"",role:E===Dg||b.email===Ng?"owner":"user",phone:E,email:b.email||"",firebaseUid:b.uid,referralCode:b.uid.slice(0,8).toUpperCase(),lockedBalance:0,streak:0,level:1,xp:0,nextLevelXP:100};await wv(b.uid,N),C=N}t({type:"FIREBASE_LOGIN",payload:{...b,dbData:C}})}});return()=>g()},[t]),M.useEffect(()=>{if(!i)return;const g=zv(b=>{b&&t({type:"LOAD_SETTINGS",payload:b})});return()=>g()},[i]),M.useEffect(()=>{const g=e.currentUser?.firebaseUid;if(!g)return;const b=Wv(g,C=>{t({type:"FIREBASE_USER_UPDATE",payload:C})});return()=>b()},[e.currentUser?.firebaseUid]),M.useEffect(()=>{if(!r)return;const g=Av(b=>{t({type:"LOAD_PENDING_REQUESTS",payload:b})});return()=>g()},[r]),M.useEffect(()=>{if(!r)return;let g=null,b=0;const C=async()=>{try{const j=(await Ne(Te(Me(U,"addMoneyRequests"),$r("createdAt","desc")).limit(50))).docs.map(z=>({id:z.id,...z.data()})).filter(z=>z.status==="pending");(j.length!==g?.length||j.length>0&&j[0]?.id!==g?.[0]?.id)&&(g=j,t({type:"LOAD_PENDING_REQUESTS",payload:j})),b++,b>10&&clearInterval(N)}catch(V){console.error("Fallback add money poll error:",V)}},E=setTimeout(C,5e3),N=setInterval(C,15e3);return()=>{clearTimeout(E),clearInterval(N)}},[r]),M.useEffect(()=>{if(!r)return;const g=qv(b=>{t({type:"LOAD_WITHDRAWALS",payload:b})});return()=>g()},[r]),M.useEffect(()=>{if(!r)return;let g=null,b=0;const C=async()=>{try{const j=(await Ne(Te(Me(U,"withdrawals"),$r("createdAt","desc")).limit(50))).docs.map(z=>({id:z.id,...z.data()})).filter(z=>z.status==="pending");(j.length!==g?.length||j.length>0&&j[0]?.id!==g?.[0]?.id)&&(g=j,t({type:"LOAD_WITHDRAWALS",payload:j})),b++,b>10&&clearInterval(N)}catch(V){console.error("Fallback withdrawal poll error:",V)}},E=setTimeout(C,5e3),N=setInterval(C,15e3);return()=>{clearTimeout(E),clearInterval(N)}},[r]),M.useEffect(()=>{if(!r)return;const g=Gv(b=>{t({type:"LOAD_USERS",payload:b})});return()=>g()},[r]),M.useEffect(()=>{const g=e.currentUser?.firebaseUid;if(!g)return;const b=Hv(g,C=>{t({type:"LOAD_TRANSACTIONS",payload:C})});return()=>b()},[e.currentUser?.firebaseUid]),M.useEffect(()=>{const g=Bv(b=>{t({type:"BATCH_MATCH_UPDATE",payload:b})});return()=>g()},[]),M.useEffect(()=>{const g=e.currentUser?.firebaseUid;if(!g)return;async function b(){try{const C=await Cv(g);C&&t({type:"SET_REFERRAL_STATS",payload:C})}catch(C){console.error("Failed to load referral stats:",C)}}b()},[e.currentUser?.firebaseUid]),M.useEffect(()=>{if(e.adCooldown<=0)return;const g=setInterval(()=>{t({type:"SET_AD_COOLDOWN",payload:Math.max(0,e.adCooldown-1)})},1e3);return()=>clearInterval(g)},[e.adCooldown]),M.useEffect(()=>{if(!e.currentUser)return;const g=Nv(e.currentUser);t({type:"SET_CAN_SPIN",payload:g})},[e.currentUser?.lastSpinDate]),M.useEffect(()=>{if(!s)return;const g=Jv(b=>{t({type:"SET_PROFIT_STATS",payload:b})});return()=>g()},[s]),M.useEffect(()=>{if(!e.pendingPrizeDistribution)return;const{matchId:g,matchData:b,resultPlayers:C,perKill:E,method:N,screenshotUrl:V}=e.pendingPrizeDistribution;Ov(g,b,C,E).then(j=>{const z={...b,status:"completed",result:{submittedAt:new Date().toISOString(),method:N,screenshotUrl:V,players:C}};t({type:"PRIZE_DISTRIBUTION_SUCCESS",payload:{matchId:g,updatedMatch:z,...j}})}).catch(j=>{console.error("Prize distribution failed:",j),t({type:"PRIZE_DISTRIBUTION_ERROR",payload:{matchId:g}}),t({type:"BATCH_MATCH_UPDATE",payload:e.matches.map(z=>z.id===g?{...z,status:"live"}:z)})})},[e.pendingPrizeDistribution]),M.useEffect(()=>{if(!e.pendingCancelMatch)return;const{matchId:g,matchData:b,adminName:C}=e.pendingCancelMatch;Mv(g,b,C).then(E=>{const N={...b,status:"cancelled",cancelledAt:E.refundedAt,refundCount:E.count,refundTotal:E.refunded};t({type:"CANCEL_MATCH_SUCCESS",payload:{matchId:g,updatedMatch:N,result:E}})}).catch(E=>{console.error("Cancel match failed:",E),t({type:"CANCEL_MATCH_ERROR",payload:{matchId:g}})})},[e.pendingCancelMatch]),M.useEffect(()=>{if(!e.pendingBalanceAdjust)return;const{userId:g,action:b,amount:C,reason:E}=e.pendingBalanceAdjust,N=b==="deduct"?-Math.abs(C):Math.abs(C);Lv(g,N,E).then(V=>{t({type:"BALANCE_ADJUST_SUCCESS",payload:{userId:g,newBalance:V}})}).catch(V=>{console.error("Balance adjust failed:",V),t({type:"BALANCE_ADJUST_ERROR",payload:{userId:g}})})},[e.pendingBalanceAdjust]),M.useEffect(()=>{if(!e.pendingPointcalcResult)return;const{matchId:g,resultData:b}=e.pendingPointcalcResult;Qv(g,b).then(C=>{t({type:"POINTCALC_RESULT_SUCCESS",payload:{matchId:g,result:C}})}).catch(C=>{console.error("Pointcalc result failed:",C),t({type:"POINTCALC_RESULT_ERROR",payload:{matchId:g}}),t({type:"BATCH_MATCH_UPDATE",payload:e.matches.map(E=>E.id===g?{...E,status:"live"}:E)})})},[e.pendingPointcalcResult]),M.useEffect(()=>{e.joinBlocked&&(de(t,e.joinBlocked,"error"),t({type:"CLEAR_JOIN_BLOCKED"}))},[e.joinBlocked]),M.useEffect(()=>{const g=setInterval(()=>t({type:"TICK"}),1e3);return()=>clearInterval(g)},[]),M.useEffect(()=>{const g=()=>{const{view:b,param:C}=Zv();t({type:"NAVIGATE",payload:{view:b,param:C}})};return g(),window.addEventListener("hashchange",g),()=>window.removeEventListener("hashchange",g)},[t]),M.useEffect(()=>{const g=e.currentView+(e.viewParam?"/"+e.viewParam:"");window.location.hash.slice(1)!==g&&(window.location.hash=g)},[e.isLoggedIn]),M.useEffect(()=>{Yv({isLoggedIn:e.isLoggedIn,currentUser:e.isLoggedIn?{id:e.currentUser?.id,firebaseUid:e.currentUser?.firebaseUid}:null,language:e.language})},[e.isLoggedIn,e.currentUser?.id,e.currentUser?.firebaseUid,e.language]),M.useEffect(()=>{const g=Date.now();let b=!1;const C=e.matches.map(E=>{if(!E.startTime)return E;let N=null;if(E.startTime&&typeof E.startTime.toDate=="function")N=E.startTime.toDate().getTime();else if(typeof E.startTime=="number")N=E.startTime;else if(typeof E.startTime=="string"){const z=new Date(E.startTime.replace(" ","T")).getTime();if(!isNaN(z))N=z;else{const Q=new Date(E.startTime).getTime();isNaN(Q)||(N=Q)}}if(!N||E.status==="cancelled"||E.status==="completing"||E.status==="cancelling")return E;const V=E.gameType==="CS"?15*6e4:25*6e4;let j=E.status;return E.status==="upcoming"&&g>=N&&(j="live"),E.status==="live"&&g>=N+V&&(j="completed"),j!==E.status?(b=!0,{...E,status:j}):E});b&&t({type:"BATCH_MATCH_UPDATE",payload:C})},[e.now]);const m=M.useRef({});M.useEffect(()=>{e.toasts.forEach(g=>{g.removing||m.current[g.id]||(m.current[g.id]=!0,setTimeout(()=>{t({type:"TOAST_REMOVING",payload:g.id})},2500),setTimeout(()=>{t({type:"REMOVE_TOAST",payload:g.id}),delete m.current[g.id]},3e3))})},[e.toasts]);const _=M.useMemo(()=>({state:e,dispatch:t,navigate:c,isAdmin:r,isOwner:s,t:o,isLoggedIn:i,updateUser:ot,processReferralCode:l,handleWatchAd:u,handleSpinClutch:p}),[e,t,c,r,s,o,i,ot,l,u,p]);return h.jsx(kg.Provider,{value:_,children:n})}function Qe(){const n=M.useContext(kg);if(!n)throw new Error("useApp must be used within AppProvider");return n}const nx=[{id:"dashboard",icon:"fa-solid fa-house",label:"Home"},{id:"matches",icon:"fa-solid fa-gamepad",label:"Matches"},{id:"wallet",icon:"fa-solid fa-wallet",label:"Wallet"},{id:"leaderboard",icon:"fa-solid fa-ranking-star",label:"Rankings"},{id:"notifications",icon:"fa-solid fa-bell",label:"Notifications"}],rx=[{id:"settings",icon:"fa-solid fa-gear",label:"Settings"},{id:"logout",icon:"fa-solid fa-right-from-bracket",label:"Logout"}];function Yh(){const{state:n,dispatch:e,navigate:t}=Qe(),{currentView:r,notifications:s}=n,i=o=>{o==="logout"?e({type:"LOGOUT"}):t(o),e({type:"CLOSE_SIDEBAR"})};return h.jsxs("aside",{className:"sidebar",children:[h.jsxs("div",{className:"sidebar-brand-premium",children:[h.jsxs("div",{className:"brand-logo-wrapper",children:[h.jsx("img",{src:"/logo.png",alt:"Zeno League",className:"brand-logo-mark"}),h.jsx("div",{className:"logo-glow-effect"})]}),h.jsxs("div",{className:"brand-text-group",children:[h.jsx("h1",{className:"brand-title-main",children:"ZENO"}),h.jsx("span",{className:"brand-title-sub",children:"LEAGUE"})]}),h.jsx("div",{className:"brand-accent-line"})]}),h.jsx("style",{children:`
        /* ════════════════════════════════════════
           SIDEBAR BRAND IDENTITY - PREMIUM STYLES
           ════════════════════════════════════════ */
        
        .sidebar-brand-premium {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 24px 16px 20px;
          
          position: relative;
          
          background: linear-gradient(
            180deg,
            rgba(168, 85, 247, 0.04) 0%,
            transparent 100%
          );
          
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          margin-bottom: 8px;
        }

        /* Logo Wrapper */
        .brand-logo-wrapper {
          position: relative;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-logo-mark {
          position: relative;
          width: 52px;
          height: 52px;
          object-fit: contain;
          
          filter: drop-shadow(0 4px 12px rgba(168, 85, 247, 0.35));
          
          z-index: 2;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .sidebar-brand-premium:hover .brand-logo-mark {
          transform: scale(1.05);
          filter: drop-shadow(0 6px 16px rgba(168, 85, 247, 0.45));
        }

        /* Soft Glow Behind Logo */
        .logo-glow-effect {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          
          background: radial-gradient(
            circle,
            rgba(168, 85, 247, 0.25) 0%,
            rgba(236, 72, 153, 0.15) 40%,
            transparent 70%
          );
          
          filter: blur(8px);
          opacity: 0.8;
          
          transition: all 0.4s ease;
        }

        .sidebar-brand-premium:hover .logo-glow-effect {
          opacity: 1;
          transform: scale(1.1);
        }

        /* Brand Text */
        .brand-text-group {
          display: flex;
          align-items: baseline;
          gap: 6px;
          line-height: 1;
        }

        .brand-title-main {
          margin: 0;
          padding: 0;
          
          font-family: 'Lexend', sans-serif;
          font-weight: 900;
          font-size: 22px;
          letter-spacing: 0.12em;
          
          color: #ffffff;
          text-transform: uppercase;
          
          background: linear-gradient(
            180deg,
            #ffffff 0%,
            #e0d4fc 50%,
            #A055F7 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
          filter: drop-shadow(0 2px 6px rgba(168, 85, 247, 0.3));
        }

        .brand-title-sub {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.18em;
          
          color: #EC4899;
          text-transform: uppercase;
          
          background: linear-gradient(
            90deg,
            #EC4899 0%,
            #f472b6 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          
          filter: drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3));
        }

        /* Accent Line Under Brand */
        .brand-accent-line {
          width: 48px;
          height: 2px;
          border-radius: 1px;
          
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(168, 85, 247, 0.5) 30%,
            rgba(236, 72, 153, 0.5) 70%,
            transparent 100%
          );
          
          box-shadow: 0 1px 6px rgba(168, 85, 247, 0.2);
        }
      `}),h.jsx("nav",{className:"sidebar-nav",children:nx.map(o=>h.jsxs("button",{className:`sidebar-item ${r===o.id?"active":""}`,onClick:()=>i(o.id),children:[h.jsx("i",{className:o.icon}),h.jsx("span",{className:"sidebar-label",children:o.label}),o.id==="matches"&&s?.matches>0&&h.jsx("span",{className:"sidebar-badge",children:s.matches}),o.id==="notifications"&&(n.notifications?.filter(c=>!c.read).length||0)>0&&h.jsx("span",{className:"sidebar-badge",children:n.notifications?.filter(c=>!c.read).length||0})]},o.id))}),h.jsx("div",{className:"sidebar-footer",children:rx.map(o=>h.jsxs("button",{className:"sidebar-item",onClick:()=>i(o.id),children:[h.jsx("i",{className:o.icon}),h.jsx("span",{className:"sidebar-label",children:o.label})]},o.id))})]})}function Zh({onMenuClick:n}){const{state:e,navigate:t,isAdmin:r}=Qe(),s=e.notifications?.filter(i=>!i.read).length||0;return r&&(e.pendingWithdrawals?.length||0)+(e.pendingAddMoneyRequests?.length||0),h.jsxs(h.Fragment,{children:[h.jsxs("header",{className:"zeno-clean-header",children:[h.jsx("div",{className:"header-bg-base"}),h.jsx("div",{className:"header-gradient-overlay"}),h.jsx("div",{className:"header-top-accent"}),h.jsxs("div",{className:"header-content",children:[h.jsx("button",{onClick:n,"aria-label":"Open menu",className:"btn-hamburger",children:h.jsx("div",{className:"hamburger-inner",children:h.jsx("i",{className:"fa-solid fa-bars"})})}),h.jsxs("div",{className:"brand-center",children:[h.jsx("img",{src:"/logo.png",alt:"Zeno League",className:"brand-logo"}),h.jsxs("div",{className:"brand-text",children:[h.jsx("span",{className:"brand-name",children:"ZENO LEAGUE"}),h.jsx("span",{className:"brand-sub",children:"ESPORTS"})]})]}),h.jsxs("button",{onClick:()=>t("notifications"),"aria-label":`Notifications (${s})`,className:`btn-notification ${s>0?"has-notifications":""}`,children:[h.jsx("i",{className:"fa-solid fa-bell"}),s>0&&h.jsx("span",{className:"notif-badge",children:s>99?"99+":s})]})]}),h.jsx("div",{className:"header-bottom-fade"})]}),h.jsx("style",{children:`
        /* ════════════════════════════════════════════════════════
           ZENO LEAGUE V9.4 - CLEAN HEADER STYLES
           ════════════════════════════════════════════════════════ */
        
        .zeno-clean-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 58px;
          
          display: flex;
          align-items: center;
          justify-content: center;
          
          padding: 0 20px;  /* ← KEY: 20px padding from edges */
          padding-top: max(14px, env(safe-area-inset-top));
          
          z-index: 1000;
          box-sizing: border-box;
          overflow: hidden;
          
          box-shadow: 
            0 4px 24px rgba(0, 0, 0, 0.4),
            0 1px 0 rgba(255, 255, 255, 0.03) inset;
        }

        /* Background Base */
        .header-bg-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 8, 22, 0.97) 0%,
            rgba(15, 12, 28, 0.96) 100%
          );
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
        }

        /* Gradient Overlay */
        .header-gradient-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 70% 50% at 20% 50%, rgba(168, 85, 247, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(236, 72, 153, 0.04) 0%, transparent 55%);
          pointer-events: none;
        }

        /* Top Accent Line */
        .header-top-accent {
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(168, 85, 247, 0.5) 30%,
            rgba(236, 72, 153, 0.6) 50%,
            rgba(168, 85, 247, 0.5) 70%,
            transparent 100%
          );
          filter: blur(0.3px);
        }

        /* Content Layer - Flex Layout */
        .header-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;  /* ← KEY: Space out left/center/right */
          width: 100%;
          max-width: 500px;  /* Prevent over-stretching */
          gap: 16px;  /* ← KEY: Gap between items */
        }

        /* ═══ HAMBURGER BUTTON ═══ */
        .btn-hamburger {
          position: relative;
          width: 46px;
          height: 46px;
          min-width: 46px;  /* Prevent shrinking */
          border-radius: 14px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;  /* Don't shrink */
        }

        .btn-hamburger:hover {
          transform: scale(1.05);
        }

        .btn-hamburger:active {
          transform: scale(0.92) !important;
        }

        .hamburger-inner {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: linear-gradient(
            135deg,
            rgba(168, 85, 247, 0.12) 0%,
            rgba(236, 72, 153, 0.08) 100%
          );
          border: 1.5px solid rgba(168, 85, 247, 0.18);
          transition: all 0.3s ease;
        }

        .btn-hamburger:hover .hamburger-inner {
          background: linear-gradient(
            135deg,
            rgba(168, 85, 247, 0.2) 0%,
            rgba(236, 72, 153, 0.14) 100%
          );
          border-color: rgba(168, 85, 247, 0.35);
          box-shadow: 0 4px 20px rgba(168, 85, 247, 0.25);
        }

        .hamburger-inner i {
          font-size: 18px;
          color: #A055F7;
          transition: all 0.3s ease;
        }

        .btn-hamburger:hover .hamburger-inner i {
          color: #c084fc;
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
        }

        /* ═══ BRAND CENTER ═══ */
        .brand-center {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 5;
        }

        .brand-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 2px 10px rgba(168, 85, 247, 0.45));
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          gap: 1px;
        }

        .brand-name {
          font-family: 'Lexend', sans-serif;
          font-weight: 900;
          font-size: 16px;
          letter-spacing: 0.12em;
          color: #fff;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #A055F7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 2px 6px rgba(168, 85, 247, 0.4));
        }

        .brand-sub {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: rgba(236, 72, 153, 0.85);
          text-transform: uppercase;
          margin-left: 1px;
        }

        /* ═══ NOTIFICATION BUTTON ═══ */
        .btn-notification {
          position: relative;
          width: 46px;
          height: 46px;
          min-width: 46px;  /* Prevent shrinking */
          border-radius: 14px;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-tap-highlight-color: transparent;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;  /* Don't shrink */
        }

        .btn-notification:hover {
          transform: scale(1.05);
        }

        .btn-notification:active {
          transform: scale(0.92) !important;
        }

        /* Notification Background (appears on hover/alerts) */
        .btn-notification::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          background: radial-gradient(
            circle at center,
            rgba(251, 191, 36, 0.12) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-notification.has-notifications::before {
          opacity: 1;
        }

        .btn-notification:hover::before {
          opacity: 1;
        }

        /* Border */
        .btn-notification::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px;
          padding: 1.5px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.04)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .btn-notification:hover::after,
        .btn-notification.has-notifications::after {
          opacity: 1;
          background: linear-gradient(
            135deg,
            rgba(239, 68, 68, 0.4),
            rgba(220, 38, 38, 0.25)
          );
        }

        .btn-notification i {
          position: relative;
          font-size: 17px;
          color: #64748b;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .btn-notification:hover i {
          color: #94a3b8;
          transform: scale(1.08);
        }

        .btn-notification.has-notifications i {
          color: #fbbf24;
          filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.5));
          animation: bell-gentle-shake 3s ease-in-out infinite;
        }

        @keyframes bell-gentle-shake {
          0%, 100% { transform: rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(-6deg); }
          20%, 40%, 60%, 80% { transform: rotate(6deg); }
        }

        /* Notification Badge */
        .notif-badge {
          position: absolute;
          top: 7px;
          right: 7px;
          min-width: 18px;
          height: 18px;
          border-radius: 9px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
          box-shadow: 
            0 2px 8px rgba(239, 68, 68, 0.5),
            0 0 0 2px rgba(10, 8, 22, 0.9);
          z-index: 3;
          animation: badge-pulse 2s ease-in-out infinite;
        }

        @keyframes badge-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        /* Bottom Fade */
        .header-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 20px;
          background: linear-gradient(
            180deg,
            rgba(10, 8, 22, 0) 0%,
            rgba(10, 8, 22, 0.06) 60%,
            rgba(10, 8, 22, 0.12) 100%
          );
          pointer-events: none;
          z-index: 8;
        }

        /* Responsive Adjustments */
        @media (max-width: 380px) {
          .brand-sub {
            display: none;
          }
          
          .brand-name {
            font-size: 14px;
          }
          
          .brand-logo {
            height: 28px;
          }
        }

        @media (max-width: 340px) {
          .brand-text {
            display: none;
          }
        }
      `})]})}const sx=[{id:"dashboard",label:"Home",icon:"fa-solid fa-house"},{id:"matches",label:"Matches",icon:"fa-solid fa-gamepad"},{id:"wallet",label:"Wallet",icon:"fa-solid fa-wallet"},{id:"notifications",label:"Alerts",icon:"fa-solid fa-bell",hasBadge:!0},{id:"profile",label:"Profile",icon:"fa-solid fa-user"}],ix=[{id:"leaderboard",label:"Rankings",icon:"fa-solid fa-ranking-star"},{id:"settings",label:"Settings",icon:"fa-solid fa-gear"}],ox=[{id:"admin-overview",label:"Overview",icon:"fa-solid fa-chart-pie",color:"#00f0ff"},{id:"admin-profit",label:"Profit",icon:"fa-solid fa-chart-line",color:"#22c55e"},{id:"admin-create",label:"Create",icon:"fa-solid fa-circle-plus",color:"#a78bfa"},{id:"admin-rooms",label:"Rooms",icon:"fa-solid fa-key",color:"#fbbf24"},{id:"admin-results",label:"Results",icon:"fa-solid fa-clipboard-check",color:"#22c55e"},{id:"admin-users",label:"Users",icon:"fa-solid fa-users-gear",color:"#6c8cff"},{id:"admin-finance",label:"Finance",icon:"fa-solid fa-money-bill-transfer",color:"#ef4444"},{id:"admin-payments",label:"Payments",icon:"fa-solid fa-credit-card",color:"#f59e0b"},{id:"admin-owners",label:"Owner",icon:"fa-solid fa-crown",color:"#fbbf24"},{id:"admin-activity",label:"Activity",icon:"fa-solid fa-clock-rotate-left",color:"#6c8cff"},{id:"admin-top-teams",label:"Top Teams",icon:"fa-solid fa-ranking-star",color:"#fbbf24"},{id:"admin-live",label:"Live",icon:"fa-solid fa-tower-broadcast",color:"#ef4444"}];function ax(){const{state:n,navigate:e,isAdmin:t}=Qe(),{currentView:r}=n,s=(n.pendingWithdrawals?.length||0)+(n.pendingAddMoneyRequests?.length||0),i=n.notifications?.filter(b=>!b.read).length||0,[o,c]=M.useState(!1),[l,u]=M.useState(null),p=M.useRef(null);M.useEffect(()=>{const b=C=>{C.key==="Escape"&&c(!1)};return o?(document.addEventListener("keydown",b),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.removeEventListener("keydown",b),document.body.style.overflow=""}},[o]);const m=b=>{b.touches[0].clientX<20&&u(b.touches[0].clientX)},_=b=>{l!==null&&b.touches[0].clientX-l>80&&(c(!0),u(null))};if(t)return h.jsxs(h.Fragment,{children:[h.jsx(Zh,{onMenuClick:()=>c(!0)}),h.jsx("nav",{ref:p,onTouchStart:m,onTouchMove:_,style:{position:"fixed",bottom:0,left:0,right:0,zIndex:1e3,background:"rgba(8,8,22,0.96)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",borderTop:"1px solid rgba(255,255,255,0.06)",paddingBottom:"env(safe-area-inset-bottom, 0px)"},children:h.jsx("div",{style:{display:"flex",alignItems:"center",gap:2,padding:"8px 56px 8px",overflowX:"auto",scrollbarWidth:"none",WebkitOverflowScrolling:"touch"},children:ox.map(b=>{const C=r===b.id,E=C?b.color:"#475569";return h.jsxs("button",{onClick:()=>e(b.id),"aria-label":b.label,style:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",gap:4,padding:"7px 10px 5px",border:"none",borderRadius:10,background:C?`${b.color}15`:"transparent",cursor:"pointer",WebkitTapHighlightColor:"transparent",minWidth:64,flexShrink:0,transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",transform:C?"scale(1.05)":"scale(1)"},children:[C&&h.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:22,height:2.5,borderRadius:"0 0 3px 3px",background:b.color,boxShadow:`0 2px 12px ${b.color}60`}}),h.jsx("i",{className:b.icon,style:{fontSize:C?17:14,color:E,filter:C?`drop-shadow(0 0 6px ${b.color}50)`:"none",transition:"all 0.25s ease"}}),h.jsx("span",{style:{fontSize:C?9.5:8.5,fontWeight:C?700:500,fontFamily:"'Plus Jakarta Sans', sans-serif",color:E,letterSpacing:.02,textTransform:"uppercase",whiteSpace:"nowrap"},children:b.label}),b.id==="admin-finance"&&s>0&&h.jsx("span",{style:{position:"absolute",top:2,right:4,minWidth:16,height:16,borderRadius:8,background:"linear-gradient(135deg, #ef4444, #dc2626)",color:"#fff",fontSize:9,fontWeight:700,fontFamily:"'Inter', sans-serif",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 4px",boxShadow:"0 2px 6px rgba(239,68,68,0.4)"},children:s>9?"9+":s})]},b.id)})})}),o&&h.jsx("div",{onClick:()=>c(!1),style:{position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",animation:"fadeIn 0.25s ease"}}),h.jsxs("aside",{style:{position:"fixed",top:0,left:0,bottom:0,width:280,zIndex:1001,background:"linear-gradient(180deg, #0f0f1a 0%, #13131f 100%)",borderRight:"1px solid rgba(255,255,255,0.06)",transform:o?"translateX(0)":"translateX(-100%)",transition:"transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",display:"flex",flexDirection:"column",overflowY:"auto",boxShadow:o?"4px 0 30px rgba(0,0,0,0.5)":"none"},children:[h.jsxs("div",{style:{padding:"48px 20px 24px",borderBottom:"1px solid rgba(255,255,255,0.05)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[h.jsx("div",{style:{width:52,height:52,borderRadius:16,background:"linear-gradient(135deg, #A055F7, #EC4899)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:"#fff",fontFamily:"'Lexend', sans-serif",boxShadow:"0 4px 20px rgba(168,85,247,0.4), 0 0 30px rgba(168,85,247,0.15)",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:n.currentUser?.name?.charAt(0)?.toUpperCase()||"A"}),h.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[h.jsx("div",{style:{fontSize:17,fontWeight:800,color:"#E5E1E4",fontFamily:"'Lexend', sans-serif",letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",textTransform:"uppercase"},children:n.currentUser?.name||"Admin"}),h.jsx("div",{style:{fontSize:11.5,color:"#A055F7",fontWeight:700,marginTop:3,fontFamily:"'Inter', sans-serif",letterSpacing:"0.05em"},children:"⭐ ADMINISTRATOR"})]}),h.jsx("button",{onClick:()=>c(!1),"aria-label":"Close menu",style:{width:32,height:32,borderRadius:8,border:"none",background:"rgba(255,255,255,0.05)",color:"#94a3b8",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},children:h.jsx("i",{className:"fa-solid fa-xmark",style:{fontSize:14}})})]}),h.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",borderRadius:12,padding:"16px 18px",border:"1px solid rgba(255,255,255,0.06)"},children:[h.jsx("div",{style:{fontSize:9.5,color:"#64748b",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8,fontFamily:"'Inter', sans-serif"},children:"Available Balance"}),h.jsxs("div",{style:{fontSize:26,fontWeight:600,fontFamily:"'Inter', sans-serif",color:"#E5E1E4",lineHeight:1.2,letterSpacing:"-0.02em"},children:[n.currentUser?.balance||0," ",h.jsx("span",{style:{fontSize:13,fontWeight:500,color:"#64748b",marginLeft:4},children:"TK"})]}),h.jsxs("div",{style:{display:"flex",gap:12,marginTop:12,paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.04)"},children:[h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{fontSize:8.5,color:"#64748b",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:3},children:"Pending"}),h.jsx("div",{style:{fontSize:15,fontWeight:600,color:"#94a3b8",fontFamily:"'Inter', sans-serif",lineHeight:1},children:s||0})]}),h.jsxs("div",{style:{flex:1},children:[h.jsx("div",{style:{fontSize:8.5,color:"#64748b",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:3},children:"Level"}),h.jsx("div",{style:{fontSize:15,fontWeight:600,color:"#94a3b8",fontFamily:"'Inter', sans-serif",lineHeight:1},children:n.currentUser?.level||1})]})]})]})]}),h.jsxs("div",{style:{padding:"16px 12px"},children:[h.jsx("div",{style:{fontSize:10.5,color:"#64748b",fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,paddingLeft:14,marginBottom:10},children:"📞 Support Channels"}),h.jsxs("button",{onClick:()=>{window.open("https://wa.me/8801XXXXXXXXX?text=Hi%20Zeno%20League%20Admin%20Support%20Needed","_blank"),c(!1)},style:{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"14px 18px",border:"1px solid rgba(16,185,129,0.25)",borderRadius:12,background:"linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.03))",cursor:"pointer",WebkitTapHighlightColor:"transparent",transition:"all 0.25s ease",marginBottom:10},children:[h.jsx("div",{style:{width:40,height:40,borderRadius:11,background:"linear-gradient(135deg, #25D366, #128C7E)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 15px rgba(37,211,102,0.3)"},children:h.jsx("i",{className:"fa-brands fa-whatsapp",style:{fontSize:22,color:"#fff"}})}),h.jsxs("div",{style:{flex:1,textAlign:"left"},children:[h.jsx("div",{style:{fontSize:14.5,fontWeight:700,color:"#10B981",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:"WhatsApp Support"}),h.jsx("div",{style:{fontSize:11,color:"#64748b",fontWeight:500,marginTop:2},children:"Chat with us instantly"})]}),h.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:11,color:"#10B981",opacity:.5}})]}),h.jsxs("button",{onClick:()=>{window.open("https://t.me/zenoleaguesupport","_blank"),c(!1)},style:{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"14px 18px",border:"1px solid rgba(59,130,246,0.25)",borderRadius:12,background:"linear-gradient(135deg, rgba(59,130,246,0.08), rgba(59,130,246,0.03))",cursor:"pointer",WebkitTapHighlightColor:"transparent",transition:"all 0.25s ease",marginBottom:10},children:[h.jsx("div",{style:{width:40,height:40,borderRadius:11,background:"linear-gradient(135deg, #0088cc, #229ED9)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 15px rgba(0,136,204,0.3)"},children:h.jsx("i",{className:"fa-brands fa-telegram",style:{fontSize:22,color:"#fff"}})}),h.jsxs("div",{style:{flex:1,textAlign:"left"},children:[h.jsx("div",{style:{fontSize:14.5,fontWeight:700,color:"#3B82F6",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:"Telegram Channel"}),h.jsx("div",{style:{fontSize:11,color:"#64748b",fontWeight:500,marginTop:2},children:"Join for updates & alerts"})]}),h.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:11,color:"#3B82F6",opacity:.5}})]})]}),h.jsxs("div",{style:{padding:"16px 12px",borderTop:"1px solid rgba(255,255,255,0.05)",marginTop:"auto"},children:[h.jsxs("button",{onClick:()=>{window.location.hash="login",c(!1)},style:{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"12px 16px",border:"1px solid rgba(239,68,68,0.2)",borderRadius:10,background:"rgba(239,68,68,0.06)",color:"#ef4444",cursor:"pointer",fontSize:13.5,fontWeight:600,fontFamily:"'Plus Jakarta Sans', sans-serif",WebkitTapHighlightColor:"transparent",transition:"all 0.2s ease"},children:[h.jsx("i",{className:"fa-solid fa-right-from-bracket",style:{fontSize:15}}),"Sign Out"]}),h.jsx("div",{style:{textAlign:"center",marginTop:12,fontSize:10,color:"#475569",fontFamily:"'Inter', sans-serif"},children:"Zeno League v9.0 ⚡"})]})]}),h.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `})]});const g=b=>r===b;return h.jsxs(h.Fragment,{children:[h.jsx(Zh,{onMenuClick:()=>c(!0)}),h.jsxs("nav",{ref:p,onTouchStart:m,onTouchMove:_,className:"premium-bottom-nav",children:[h.jsx("div",{className:"nav-bg-glass"}),h.jsx("div",{className:"nav-border-subtle"}),h.jsx("div",{className:"nav-tabs-container",children:sx.map((b,C)=>{const E=g(b.id);return h.jsxs("button",{onClick:()=>e(b.id),"aria-label":b.label,"aria-current":E?"page":void 0,className:`nav-tab-item ${E?"is-active":""}`,children:[E&&h.jsx("div",{className:"active-indicator-pill"}),h.jsxs("div",{className:"tab-icon-wrapper",children:[h.jsx("i",{className:b.icon}),b.hasBadge&&i>0&&h.jsx("span",{className:"tab-notification-dot",children:h.jsx("span",{className:"dot-core"})})]}),h.jsx("span",{className:"tab-label",children:b.label}),h.jsx("div",{className:"tab-ripple-effect"})]},b.id)})}),h.jsx("style",{children:`
          /* ════════════════════════════════════════════════════
             ZENO LEAGUE - PREMIUM BOTTOM NAVIGATION STYLES
             Design: Refined elegance • No cheap neon • iOS-grade
             ════════════════════════════════════════════════════ */
          
          .premium-bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 72px;
            
            display: flex;
            align-items: center;
            justify-content: center;
            
            padding: 0 16px;
            padding-bottom: env(safe-area-inset-bottom, 0px);
            
            z-index: 1000;
            overflow: hidden;
            
            box-shadow: 
              0 -4px 24px rgba(0, 0, 0, 0.3),
              0 -1px 0 rgba(255, 255, 255, 0.03) inset;
          }

          /* Glass Background */
          .nav-bg-glass {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(12, 10, 24, 0.96) 0%,
              rgba(8, 6, 20, 0.98) 100%
            );
            backdrop-filter: blur(30px) saturate(180%);
            -webkit-backdrop-filter: blur(30px) saturate(180%);
          }

          /* Subtle Top Border */
          .nav-border-subtle {
            position: absolute;
            top: 0;
            left: 10%;
            right: 10%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(168, 85, 247, 0.08) 30%,
              rgba(236, 72, 153, 0.1) 50%,
              rgba(168, 85, 247, 0.08) 70%,
              transparent 100%
            );
          }

          /* Tabs Container */
          .nav-tabs-container {
            position: relative;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            max-width: 480px;
            gap: 4px;
            padding: 8px 0 12px;
          }

          /* Tab Item */
          .nav-tab-item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
            
            min-width: 64px;
            max-width: 80px;
            height: 56px;
            padding: 8px 4px 6px;
            
            border: none;
            border-radius: 16px;
            background: transparent;
            cursor: pointer;
            
            -webkit-tap-highlight-color: transparent;
            outline: none;
            
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            flex: 1;
            overflow: visible;
          }

          .nav-tab-item:hover {
            transform: translateY(-2px);
          }

          .nav-tab-item:active {
            transform: scale(0.95) !important;
            transition-duration: 0.1s;
          }

          /* Active Indicator Pill */
          .active-indicator-pill {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            
            width: 24px;
            height: 3px;
            border-radius: 0 0 3px 3px;
            
            background: linear-gradient(
              90deg,
              rgba(168, 85, 247, 0.7) 0%,
              rgba(236, 72, 153, 0.7) 100%
            );
            
            box-shadow: 
              0 2px 8px rgba(168, 85, 247, 0.25),
              0 0 12px rgba(236, 72, 153, 0.15);
            
            animation: pill-slide-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes pill-slide-in {
            from { 
              opacity: 0; 
              transform: translateX(-50%) scaleX(0.5); 
            }
            to { 
              opacity: 1; 
              transform: translateX(-50%) scaleX(1); 
            }
          }

          /* Icon Wrapper */
          .tab-icon-wrapper {
            position: relative;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            transition: all 0.4s ease;
          }

          .nav-tab-item i {
            font-size: 20px;
            color: #475569;
            
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            line-height: 1;
          }

          /* Active Icon */
          .nav-tab-item.is-active i {
            font-size: 22px;
            color: #c084fc;
            
            filter: drop-shadow(0 2px 8px rgba(168, 85, 247, 0.35));
            transform: translateY(-1px);
          }

          /* Hover Icon */
          .nav-tab-item:hover:not(.is-active) i {
            color: #94a3b8;
            transform: scale(1.05);
          }

          /* Label Text */
          .tab-label {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.03em;
            color: #475569;
            
            transition: all 0.4s ease;
            white-space: nowrap;
            line-height: 1.2;
          }

          /* Active Label */
          .nav-tab-item.is-active .tab-label {
            font-weight: 700;
            font-size: 10.5px;
            color: #e2e8f0;
            letter-spacing: 0.04em;
          }

          /* Hover Label */
          .nav-tab-item:hover:not(.is-active) .tab-label {
            color: #64748b;
          }

          /* Notification Dot */
          .tab-notification-dot {
            position: absolute;
            top: -2px;
            right: -6px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ef4444;
            
            box-shadow: 0 0 0 2px rgba(12, 10, 24, 0.95);
            
            animation: dot-pulse 2.5s ease-in-out infinite;
          }

          .dot-core {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background: inherit;
          }

          @keyframes dot-pulse {
            0%, 100% { 
              opacity: 1; 
              transform: scale(1); 
            }
            50% { 
              opacity: 0.7; 
              transform: scale(1.15); 
            }
          }

          /* Ripple Effect */
          .tab-ripple-effect {
            position: absolute;
            inset: 0;
            border-radius: 16px;
            
            background: radial-gradient(
              circle at center,
              rgba(168, 85, 247, 0.15) 0%,
              transparent 70%
            );
            
            opacity: 0;
            transform: scale(0);
            
            pointer-events: none;
            transition: all 0.5s ease-out;
          }

          .nav-tab-item:active .tab-ripple-effect {
            opacity: 1;
            transform: scale(2.5);
          }

          /* Active Background (Very Subtle) */
          .nav-tab-item.is-active::before {
            content: '';
            position: absolute;
            inset: 4px;
            border-radius: 14px;
            
            background: radial-gradient(
              ellipse at center bottom,
              rgba(168, 85, 247, 0.08) 0%,
              transparent 70%
            );
            
            animation: bg-fade-in 0.4s ease-out;
          }

          @keyframes bg-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          /* Responsive */
          @media (max-width: 360px) {
            .nav-tab-item {
              min-width: 56px;
              gap: 2px;
            }
            
            .nav-tab-item i {
              font-size: 18px;
            }
            
            .nav-tab-item.is-active i {
              font-size: 19px;
            }
            
            .tab-label {
              font-size: 9px;
            }
            
            .nav-tab-item.is-active .tab-label {
              font-size: 9.5px;
            }
          }
        `})]}),o&&h.jsx("div",{onClick:()=>c(!1),style:{position:"fixed",inset:0,zIndex:999,background:"rgba(0,0,0,0.65)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",animation:"drawerFadeIn 0.3s ease"}}),h.jsxs("aside",{style:{position:"fixed",top:0,left:0,bottom:0,width:290,zIndex:1001,background:"linear-gradient(180deg, #0a0a12 0%, #111119 50%, #0f0f1a 100%)",borderRight:"1px solid rgba(168,85,247,0.1)",transform:o?"translateX(0)":"translateX(-100%)",transition:"transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)",display:"flex",flexDirection:"column",overflowY:"auto",boxShadow:o?"-4px 0 40px rgba(168,85,247,0.15), 4px 0 30px rgba(0,0,0,0.5)":"none"},children:[h.jsxs("div",{style:{padding:"52px 20px 24px",borderBottom:"1px solid rgba(255,255,255,0.05)",background:"linear-gradient(180deg, rgba(168,85,247,0.1) 0%, transparent 100%)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20},children:[n.currentUser?.avatar?h.jsx("img",{src:n.currentUser.avatar,alt:"",style:{width:56,height:56,borderRadius:18,objectFit:"cover",border:"2px solid rgba(168,85,247,0.4)",boxShadow:"0 4px 24px rgba(168,85,247,0.35), 0 0 40px rgba(168,85,247,0.15)"}}):h.jsx("div",{style:{width:56,height:56,borderRadius:18,background:"linear-gradient(135deg, #A055F7, #EC4899)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:800,color:"#fff",fontFamily:"'Lexend', sans-serif",boxShadow:"0 4px 24px rgba(168,85,247,0.4), 0 0 40px rgba(168,85,247,0.15)",textShadow:"0 2px 4px rgba(0,0,0,0.3)"},children:n.currentUser?.name?.charAt(0)?.toUpperCase()||"?"}),h.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[h.jsx("div",{style:{fontSize:19,fontWeight:800,color:"#E5E1E4",fontFamily:"'Lexend', sans-serif",letterSpacing:"-0.02em",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.2,textTransform:"uppercase"},children:n.currentUser?.name||n.currentUser?.displayName||"Player"}),h.jsxs("div",{style:{fontSize:12.5,color:"#A055F7",fontWeight:700,marginTop:4,fontFamily:"'Inter', sans-serif",letterSpacing:"0.03em"},children:["@",n.currentUser?.username||"player"]})]}),h.jsx("button",{onClick:()=>c(!1),"aria-label":"Close menu",style:{width:34,height:34,borderRadius:10,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#94a3b8",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s ease"},children:h.jsx("i",{className:"fa-solid fa-xmark",style:{fontSize:15}})})]}),h.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",borderRadius:12,padding:"16px 18px",border:"1px solid rgba(255,255,255,0.06)"},children:[h.jsx("div",{style:{fontSize:9.5,color:"#64748b",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8,fontFamily:"'Inter', sans-serif"},children:"Available Balance"}),h.jsxs("div",{style:{fontSize:26,fontWeight:600,fontFamily:"'Inter', sans-serif",color:"#E5E1E4",lineHeight:1.2,letterSpacing:"-0.02em"},children:[n.currentUser?.balance||0," ",h.jsx("span",{style:{fontSize:13,fontWeight:500,color:"#64748b",marginLeft:4},children:"TK"})]})]})]}),h.jsxs("div",{style:{display:"flex",gap:10,padding:"16px 12px 0"},children:[h.jsxs("div",{style:{flex:1,background:"rgba(255,255,255,0.03)",borderRadius:12,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)"},children:[h.jsx("div",{style:{fontSize:9,color:"#64748b",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:5},children:"Level"}),h.jsx("div",{style:{fontSize:20,fontWeight:900,color:"#A055F7",fontFamily:"'Lexend', sans-serif",lineHeight:1},children:n.currentUser?.level||1})]}),h.jsxs("div",{style:{flex:1,background:"rgba(255,255,255,0.03)",borderRadius:12,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)"},children:[h.jsx("div",{style:{fontSize:9,color:"#64748b",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:5},children:"Wins"}),h.jsx("div",{style:{fontSize:20,fontWeight:900,color:"#10B981",fontFamily:"'Lexend', sans-serif",lineHeight:1},children:n.currentUser?.wins||0})]}),h.jsxs("div",{style:{flex:1,background:"rgba(255,255,255,0.03)",borderRadius:12,padding:"12px 14px",border:"1px solid rgba(255,255,255,0.05)"},children:[h.jsx("div",{style:{fontSize:9,color:"#64748b",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:5},children:"Win %"}),h.jsxs("div",{style:{fontSize:20,fontWeight:900,color:"#F59E0B",fontFamily:"'Lexend', sans-serif",lineHeight:1},children:[n.currentUser?.winRate?Math.round(n.currentUser.winRate):0,"%"]})]})]}),h.jsxs("div",{style:{padding:"16px 12px",flex:1},children:[h.jsx("div",{style:{fontSize:10.5,color:"#64748b",fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,paddingLeft:14,marginBottom:10,marginTop:8},children:"More Options"}),ix.map(b=>{const C=g(b.id);return h.jsxs("button",{onClick:()=>{e(b.id),c(!1)},style:{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"13px 16px",border:"none",borderRadius:12,background:C?"rgba(6,214,240,0.08)":"transparent",cursor:"pointer",WebkitTapHighlightColor:"transparent",transition:"all 0.2s ease",marginBottom:3},children:[h.jsx("div",{style:{width:38,height:38,borderRadius:11,background:C?"rgba(6,214,240,0.12)":"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsx("i",{className:b.icon,style:{fontSize:17,color:C?"#06d6f0":"#64748b"}})}),h.jsx("span",{style:{fontSize:14.5,fontWeight:C?600:500,color:C?"#06d6f0":"#e2e8f0",fontFamily:"'Plus Jakarta Sans', sans-serif",flex:1,textAlign:"left"},children:b.label}),C&&h.jsx("i",{className:"fa-solid fa-chevron-right",style:{fontSize:11,color:"#06d6f0",opacity:.6}})]},b.id)}),h.jsx("div",{style:{height:1,background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",margin:"20px 12px"}}),h.jsx("div",{style:{fontSize:10.5,color:"#64748b",fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,paddingLeft:14,marginBottom:10},children:"📞 Support"}),h.jsxs("button",{onClick:()=>{window.open("https://wa.me/8801XXXXXXXXX?text=Hi%20I%20need%20help%20with%20Zeno%20League!","_blank"),c(!1)},style:{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"13px 16px",border:"1px solid rgba(16,185,129,0.2)",borderRadius:12,background:"rgba(16,185,129,0.05)",cursor:"pointer",WebkitTapHighlightColor:"transparent",transition:"all 0.2s ease",marginBottom:8},children:[h.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg, #25D366, #128C7E)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 3px 12px rgba(37,211,102,0.25)"},children:h.jsx("i",{className:"fa-brands fa-whatsapp",style:{fontSize:19,color:"#fff"}})}),h.jsx("span",{style:{fontSize:14,fontWeight:600,color:"#10B981",fontFamily:"'Plus Jakarta Sans', sans-serif",flex:1,textAlign:"left"},children:"WhatsApp"}),h.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square",style:{fontSize:11,color:"#10B981",opacity:.5}})]}),h.jsxs("button",{onClick:()=>{window.open("https://t.me/zenoleague","_blank"),c(!1)},style:{display:"flex",alignItems:"center",gap:14,width:"100%",padding:"13px 16px",border:"1px solid rgba(59,130,246,0.2)",borderRadius:12,background:"rgba(59,130,246,0.05)",cursor:"pointer",WebkitTapHighlightColor:"transparent",transition:"all 0.2s ease"},children:[h.jsx("div",{style:{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg, #0088cc, #229ED9)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 3px 12px rgba(0,136,204,0.25)"},children:h.jsx("i",{className:"fa-brands fa-telegram",style:{fontSize:19,color:"#fff"}})}),h.jsx("span",{style:{fontSize:14,fontWeight:600,color:"#3B82F6",fontFamily:"'Plus Jakarta Sans', sans-serif",flex:1,textAlign:"left"},children:"Telegram"}),h.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square",style:{fontSize:11,color:"#3B82F6",opacity:.5}})]})]}),h.jsxs("div",{style:{padding:"16px 12px 28px",borderTop:"1px solid rgba(255,255,255,0.05)"},children:[h.jsxs("button",{onClick:()=>{window.location.hash="login",c(!1)},style:{display:"flex",alignItems:"center",gap:12,width:"100%",padding:"13px 18px",border:"1px solid rgba(239,68,68,0.15)",borderRadius:12,background:"rgba(239,68,68,0.04)",color:"#ef4444",cursor:"pointer",fontSize:14,fontWeight:600,fontFamily:"'Plus Jakarta Sans', sans-serif",WebkitTapHighlightColor:"transparent",transition:"all 0.2s ease"},children:[h.jsx("i",{className:"fa-solid fa-right-from-bracket",style:{fontSize:16}}),"Sign Out"]}),h.jsx("div",{style:{textAlign:"center",marginTop:14,fontSize:10.5,color:"#334155",fontFamily:"'Inter', sans-serif",letterSpacing:.3},children:"⚡ Zeno League v9.0 • Made ❤️ in BD"})]})]}),h.jsx("style",{children:`
        @keyframes drawerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse-badge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `})]})}const fo=n=>String(n).padStart(2,"0");function cx(n){const e=new Date(n);let t=e.getHours();const r=fo(e.getMinutes()),s=t>=12?"PM":"AM";t=t%12||12;const i=e.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return{time:`${t}:${r} ${s}`,date:`${i} ${o[e.getMonth()]}`}}function lx(n){if(n<=0)return null;const e=Math.floor(n/36e5),t=Math.floor(n%36e5/6e4),r=Math.floor(n%6e4/1e3);return`${fo(e)}:${fo(t)}:${fo(r)}`}const ef={room:{color:"#06d6f0",icon:"fa-solid fa-key",bg:"rgba(6,214,240,0.1)"},result:{color:"#4ade80",icon:"fa-solid fa-trophy",bg:"rgba(74,222,128,0.1)"},match:{color:"#fbbf24",icon:"fa-solid fa-gamepad",bg:"rgba(251,191,36,0.1)"},wallet:{color:"#4ade80",icon:"fa-solid fa-wallet",bg:"rgba(74,222,128,0.1)"},system:{color:"#94a3b8",icon:"fa-solid fa-circle-info",bg:"rgba(148,163,184,0.08)"}};function ux(){const{state:n,dispatch:e,navigate:t}=Qe(),{matches:r,notifications:s,users:i,rightPanelOpen:o,currentUser:c}=n;if(!c)return null;const l=r.filter(m=>m.participants?.includes(c.id)&&m.status!=="completed"),u=i.filter(m=>m.online&&!m.banned),p=s.filter(m=>!m.read).length;return h.jsxs(h.Fragment,{children:[h.jsx("div",{onClick:()=>e({type:"TOGGLE_RIGHT_PANEL"}),style:{display:o?"block":"none",position:"fixed",inset:0,zIndex:1100,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)"}}),h.jsxs("aside",{style:{position:"fixed",top:0,right:0,bottom:0,width:340,maxWidth:"92vw",zIndex:1200,background:"linear-gradient(180deg, rgba(10,10,30,0.98) 0%, rgba(8,8,22,0.99) 100%)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",borderLeft:"1px solid rgba(6,214,240,0.08)",display:"flex",flexDirection:"column",transform:o?"translateX(0)":"translateX(100%)",transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1)",boxShadow:o?"-12px 0 50px rgba(0,0,0,0.6), -1px 0 0 rgba(6,214,240,0.06)":"none",paddingTop:"env(safe-area-inset-top, 0px)",paddingBottom:"env(safe-area-inset-bottom, 0px)",overflow:"hidden"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:"1px solid rgba(255,255,255,0.05)",flexShrink:0},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[h.jsx("div",{style:{width:34,height:34,borderRadius:9,background:"rgba(6,214,240,0.1)",border:"1px solid rgba(6,214,240,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsx("i",{className:"fa-solid fa-bolt",style:{color:"#06d6f0",fontSize:14}})}),h.jsx("span",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:16,fontWeight:700,color:"#f1f5f9"},children:"Activity"})]}),h.jsx("button",{onClick:()=>e({type:"TOGGLE_RIGHT_PANEL"}),"aria-label":"Close panel",style:{width:34,height:34,borderRadius:9,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.07)",color:"#64748b",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14},children:h.jsx("i",{className:"fa-solid fa-xmark"})})]}),h.jsxs("div",{style:{flexShrink:0,maxHeight:240,overflowY:"auto",borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[h.jsxs("div",{style:{padding:"14px 18px 8px",fontFamily:"'Exo 2', sans-serif",fontSize:11,fontWeight:700,color:"#64748b",letterSpacing:1.5,textTransform:"uppercase",display:"flex",alignItems:"center",gap:8},children:["Joined Matches",h.jsx("span",{style:{background:"rgba(6,214,240,0.12)",color:"#06d6f0",padding:"2px 9px",borderRadius:10,fontSize:10,fontFamily:"'Orbitron', monospace",fontWeight:600},children:l.length})]}),l.length===0?h.jsx("div",{style:{padding:"10px 18px 18px",fontSize:13,color:"#475569",fontFamily:"'Rajdhani', sans-serif",fontWeight:500},children:"No matches joined yet"}):h.jsx("div",{style:{padding:"0 10px 12px"},children:l.map(m=>{const _=cv(m),g=lv(m),b=cx(new Date(m.startTime.replace(" ","T")).toLocaleString()),C=uv(m.mode);return h.jsxs("div",{onClick:()=>{t(`match-detail/${m.id}`),e({type:"TOGGLE_RIGHT_PANEL"})},style:{display:"flex",alignItems:"center",gap:12,padding:"10px 8px",borderRadius:10,cursor:"pointer"},children:[h.jsx("div",{style:{width:38,height:38,borderRadius:10,flexShrink:0,background:C+"15",border:`1px solid ${C}20`,display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsx("i",{className:"fa-solid fa-gamepad",style:{fontSize:14,color:C}})}),h.jsxs("div",{style:{flex:1,minWidth:0},children:[h.jsx("div",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:13,fontWeight:600,color:"#f1f5f9",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m.title}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:3},children:[h.jsxs("span",{style:{fontFamily:"'Rajdhani', sans-serif",fontSize:12,fontWeight:500,color:"#94a3b8"},children:[h.jsx("i",{className:"fa-regular fa-clock",style:{fontSize:10,marginRight:3,color:"#64748b"}}),b.time," · ",b.date]}),_==="live"?h.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:10,fontWeight:700,color:"#4ade80",fontFamily:"'Orbitron', monospace",letterSpacing:.5},children:[h.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:"#4ade80",animation:"pulse 1.5s infinite"}}),"LIVE"]}):_==="upcoming"&&g>0?h.jsx("span",{style:{fontFamily:"'Orbitron', monospace",fontSize:10,fontWeight:600,color:"#60a5fa",letterSpacing:.3},children:lx(g)}):_==="room_open"?h.jsx("span",{style:{fontFamily:"'Orbitron', monospace",fontSize:10,fontWeight:600,color:"#06d6f0",letterSpacing:.3},children:"ROOM OPEN"}):null]})]})]},m.id)})})]}),h.jsxs("div",{style:{flexShrink:0,maxHeight:260,overflowY:"auto",borderBottom:"1px solid rgba(255,255,255,0.04)"},children:[h.jsxs("div",{style:{padding:"14px 18px 8px",fontFamily:"'Exo 2', sans-serif",fontSize:11,fontWeight:700,color:"#64748b",letterSpacing:1.5,textTransform:"uppercase",display:"flex",alignItems:"center",gap:8},children:["Notifications",p>0&&h.jsx("span",{style:{background:"linear-gradient(135deg, #ef4444, #dc2626)",color:"#fff",padding:"2px 9px",borderRadius:10,fontSize:10,fontFamily:"'Orbitron', monospace",fontWeight:700,boxShadow:"0 2px 8px rgba(239,68,68,0.3)"},children:p})]}),h.jsx("div",{style:{padding:"0 10px 12px"},children:s.length===0?h.jsx("div",{style:{padding:"10px 8px 16px",fontSize:13,color:"#475569",fontFamily:"'Rajdhani', sans-serif",fontWeight:500},children:"No notifications yet"}):s.slice(0,6).map(m=>{const _=ef[m.type]||ef.system;return h.jsxs("div",{onClick:()=>{e({type:"MARK_NOTIFICATION_READ",payload:m.id}),t("notifications"),e({type:"TOGGLE_RIGHT_PANEL"})},style:{display:"flex",gap:10,padding:"10px 8px",borderRadius:10,cursor:"pointer",background:m.read?"transparent":"rgba(255,255,255,0.02)",borderLeft:m.read?"2px solid transparent":`2px solid ${_.color}40`,marginBottom:2},children:[h.jsx("div",{style:{width:28,height:28,borderRadius:8,flexShrink:0,background:_.bg,display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsx("i",{className:_.icon,style:{fontSize:11,color:_.color}})}),h.jsxs("div",{style:{flex:1,minWidth:0},children:[h.jsx("div",{style:{fontSize:12,lineHeight:1.4,color:m.read?"#64748b":"#cbd5e1",fontFamily:"'Rajdhani', sans-serif",fontWeight:500,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:m.text}),h.jsx("div",{style:{fontSize:10,color:"#475569",marginTop:2,fontFamily:"'Rajdhani', sans-serif",fontWeight:400},children:typeof m.time=="string"?m.time:"just now"})]})]},m.id)})})]}),h.jsxs("div",{style:{flex:1,overflowY:"auto",minHeight:0},children:[h.jsxs("div",{style:{padding:"14px 18px 8px",fontFamily:"'Exo 2', sans-serif",fontSize:11,fontWeight:700,color:"#64748b",letterSpacing:1.5,textTransform:"uppercase",display:"flex",alignItems:"center",gap:8},children:["Online",h.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,color:"#4ade80",fontSize:12,fontFamily:"'Orbitron', monospace",fontWeight:600},children:[h.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px rgba(74,222,128,0.5)"}}),u.length]})]}),h.jsx("div",{style:{padding:"0 10px 20px"},children:u.length===0?h.jsx("div",{style:{padding:"10px 8px 16px",fontSize:13,color:"#475569",fontFamily:"'Rajdhani', sans-serif",fontWeight:500},children:"Nobody online"}):u.slice(0,10).map(m=>h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"7px 8px",borderRadius:8},children:[h.jsxs("div",{style:{position:"relative",flexShrink:0},children:[m.avatar?h.jsx("img",{src:m.avatar,alt:m.name,loading:"lazy",style:{width:32,height:32,borderRadius:8,objectFit:"cover"}}):h.jsx("div",{style:{width:32,height:32,borderRadius:8,background:"linear-gradient(135deg, rgba(6,214,240,0.15), rgba(167,139,250,0.15))",border:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Exo 2', sans-serif",fontSize:13,fontWeight:700,color:"#a78bfa"},children:m.name?.charAt(0)?.toUpperCase()||"?"}),h.jsx("div",{style:{position:"absolute",bottom:-1,right:-1,width:10,height:10,borderRadius:"50%",background:"#4ade80",border:"2px solid rgba(10,10,30,0.95)"}})]}),h.jsxs("div",{style:{flex:1,minWidth:0},children:[h.jsx("div",{style:{fontFamily:"'Exo 2', sans-serif",fontSize:12,fontWeight:600,color:"#e2e8f0",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m.name}),m.ign&&h.jsx("div",{style:{fontSize:10,color:"#475569",fontFamily:"'Rajdhani', sans-serif",fontWeight:400,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:m.ign})]})]},m.id))})]})]})]})}const dx=["Bermuda","Purgatory","Kalahari","Alpine"],tf=[{value:"BR",label:"Battle Royale (Free Fire)",modes:["Solo","Duo","Squad"]},{value:"CS",label:"Clash Squad (4v4)",modes:["Clash Squad"]}],hx=[0,5,10,15,20],eS=["🎮  Tournament is hosted via Free Fire Custom Room.","🔑  Room ID & Password will be visible exactly 10 minutes before match start.","⚠️  Join the room within 5 minutes after it appears. Late join = No entry.","🎯  Use your EXACT registered in-game name. Wrong name = Disqualified.","🚫  No teaming, hacking, or exploiting. Instant ban if caught.","📱  Screenshot of result screen is mandatory for prize claims.","⏱️  If server crashes, match will be rescheduled (no refund).","💬  For any issue, contact admin via in-app notification — not in-game.","🏆  Prize will be credited to your wallet within 30 minutes after result.","📋  Admin decision is final in all disputes."];function me(n){return new Date(Date.now()+n*6e4).toISOString().slice(0,16).replace("T"," ")}me(-5),me(25),me(90),me(180),me(-180),me(-150),me(-300),me(-270),me(45);me(-30),me(-60),me(-180),me(-240),me(-500),me(-600),me(-700);me(-30),me(-180),me(-60),me(-600),me(-1440),me(-120);me(-60),me(-120),me(-300);const nf=[{id:"bkash",label:"bKash",icon:"fa-solid fa-mobile-screen",color:"#E2136E"},{id:"nagad",label:"Nagad",icon:"fa-solid fa-mobile-screen",color:"#F6921E"},{id:"rocket",label:"Rocket",icon:"fa-solid fa-mobile-screen",color:"#8C3494"}],rf=[{id:"bkash",label:"bKash",icon:"fa-solid fa-mobile-screen",color:"#E2136E"},{id:"nagad",label:"Nagad",icon:"fa-solid fa-mobile-screen",color:"#F6921E"}],fx=[50,100,200,500,1e3],sf={bkash:{primary:"#E2136E",soft:"rgba(226,19,110,0.08)",border:"rgba(226,19,110,0.25)",gradient:"linear-gradient(135deg, rgba(226,19,110,0.14) 0%, rgba(226,19,110,0.03) 70%)"},nagad:{primary:"#F36F21",soft:"rgba(243,111,33,0.08)",border:"rgba(243,111,33,0.25)",gradient:"linear-gradient(135deg, rgba(243,111,33,0.14) 0%, rgba(243,111,33,0.03) 70%)"},rocket:{primary:"#4A00E0",soft:"rgba(74,0,224,0.08)",border:"rgba(74,0,224,0.25)",gradient:"linear-gradient(135deg, rgba(74,0,224,0.14) 0%, rgba(74,0,224,0.03) 70%)"}},Uo=n=>sf[n]||sf.bkash,$={label:{display:"block",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:10,fontWeight:700,color:"#555555",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:6},input:{width:"100%",padding:"11px 14px",borderRadius:10,border:"1px solid #353437",background:"#1c1b1d",color:"#e5e1e4",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:13,fontWeight:500,outline:"none",boxSizing:"border-box",WebkitTapHighlightColor:"transparent"},select:{width:"100%",padding:"11px 14px",borderRadius:10,border:"1px solid #353437",background:"#1c1b1d",color:"#e5e1e4",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:13,fontWeight:500,outline:"none",boxSizing:"border-box",WebkitTapHighlightColor:"transparent"},btnPrimary:{padding:"12px 0",borderRadius:10,border:"none",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:12,fontWeight:700,cursor:"pointer",boxShadow:"none",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8,letterSpacing:"0.1em",textTransform:"uppercase",WebkitTapHighlightColor:"transparent"},btnGhost:{padding:"12px 0",borderRadius:10,border:"1px solid #353437",background:"transparent",color:"#889299",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:12,fontWeight:700,cursor:"pointer",width:"100%",letterSpacing:"0.1em",textTransform:"uppercase",WebkitTapHighlightColor:"transparent"},row:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},fullRow:{marginBottom:14},card:{borderRadius:10,background:"#1c1b1d",border:"1px solid rgba(255,255,255,0.06)",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.03)"},infoBox:{padding:"10px 12px",borderRadius:10,fontSize:11,fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:500,display:"flex",alignItems:"flex-start",gap:6,lineHeight:1.5},methodBtn:{padding:"14px 6px",borderRadius:12,cursor:"pointer",textAlign:"center",WebkitTapHighlightColor:"transparent"}};function Og(n){return n==="Duo"||n==="Squad"||n==="Clash Squad"}function px({matchId:n,data:e}){const{state:t,dispatch:r,navigate:s}=Qe(),{currentUser:i,matches:o}=t,c=o.find(N=>N.id===n),[l,u]=M.useState([""]),[p,m]=M.useState(""),_=c?Og(c.mode):!1;if(!c||!i)return null;const g=Rg(c.mode),b=dv(i.balance,c.mode,c.entryFee);if(l.length!==g){const N=Array(g).fill("");N[0]=i.ign||"",u(N)}const C=(N,V)=>u(j=>j.map((z,Q)=>Q===N?V:z)),E=()=>{if(!b.canAfford)return de(r,"Insufficient balance!","error");if(!l.every(N=>N.trim()))return de(r,"Fill all player names!","error");if(_&&!p.trim())return de(r,"Team name is required!","error");r({type:"JOIN_MATCH",payload:{matchId:c.id,teamNames:l,teamName:p||""}}),r({type:"CLOSE_MODAL"}),de(r,`Joined ${c.title}!`,"success"),s(`match-detail/${c.id}`)};return h.jsxs("div",{children:[h.jsxs("div",{style:{...$.card,padding:"14px 16px",marginBottom:14,borderLeft:"4px solid #61cdff",background:"linear-gradient(135deg, rgba(97,205,255,0.08) 0%, rgba(97,205,255,0.01) 70%), #1c1b1d"},children:[h.jsx("div",{style:{fontFamily:"'Lexend', sans-serif",fontSize:15,fontWeight:700,color:"#e5e1e4",marginBottom:8,fontStyle:"italic",textTransform:"uppercase",letterSpacing:"-0.025em"},children:c.title}),h.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap"},children:[{label:"Mode",value:c.mode,color:"#a78bfa"},{label:"Map",value:c.map,color:"#61cdff"},{label:"Entry",value:Le(c.entryFee),color:"#facc15"},{label:"Slots",value:`${c.maxSlots-(c.joinedCount||0)}`,color:"#4ade80"}].map(N=>h.jsxs("div",{style:{fontSize:11,color:"#555555",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:[N.label," ",h.jsx("span",{style:{fontWeight:700,color:N.color,fontFamily:"'Inter', sans-serif",fontSize:12},children:N.value})]},N.label))})]}),_&&h.jsxs("div",{style:$.fullRow,children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[h.jsx("div",{style:{width:4,height:16,background:"#FFC857",borderRadius:2}}),h.jsx("label",{style:{...$.label,marginBottom:0},children:"Team Name *"})]}),h.jsx("input",{style:{...$.input,border:"1px solid rgba(255,200,87,0.3)",background:"linear-gradient(135deg, rgba(255,200,87,0.05) 0%, rgba(255,200,87,0.01) 70%), #1c1b1d",color:"#FFC857",fontFamily:"'Inter', sans-serif",fontSize:15,fontWeight:700},placeholder:"Enter your team name",value:p,onChange:N=>m(N.target.value)})]}),h.jsxs("div",{style:{...$.infoBox,marginBottom:14,background:"linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(167,139,250,0.02) 60%), #2a2a2c",border:"1px solid rgba(167,139,250,0.12)",color:"#bdc8cf"},children:[h.jsx("i",{className:"fa-solid fa-users",style:{color:"#a78bfa",fontSize:11,marginTop:2,flexShrink:0}}),h.jsxs("span",{children:[c.mode," — ",g," Player",g>1?"s":""," Required"]})]}),h.jsxs("div",{style:{marginBottom:14},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[h.jsx("div",{style:{width:4,height:16,background:"#61cdff",borderRadius:2}}),h.jsx("label",{style:{...$.label,marginBottom:0},children:"Player Names (IGN)"})]}),l.map((N,V)=>h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[h.jsx("div",{style:{width:30,height:30,borderRadius:8,flexShrink:0,background:V===0?"#2a2a2c":"#201f21",border:`1px solid ${V===0?"#353437":"#2a2a2c"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Inter', sans-serif",fontSize:11,fontWeight:700,color:V===0?"#61cdff":"#555555"},children:V+1}),h.jsx("input",{style:$.input,placeholder:V===0?"Your IGN (auto-filled)":`Player ${V+1} IGN`,value:N,onChange:j=>C(V,j.target.value),readOnly:V===0}),V===0&&h.jsx("span",{style:{fontSize:9,fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:700,color:"#61cdff",padding:"5px 10px",borderRadius:8,background:"linear-gradient(135deg, rgba(97,205,255,0.12) 0%, rgba(97,205,255,0.03) 70%), #2a2a2c",whiteSpace:"nowrap",flexShrink:0,letterSpacing:"0.1em",textTransform:"uppercase"},children:"YOU"})]},V))]}),h.jsxs("div",{style:{borderRadius:10,overflow:"hidden",marginBottom:14,border:"1px solid rgba(255,255,255,0.06)"},children:[h.jsx("div",{style:{padding:"8px 14px",background:"linear-gradient(135deg, rgba(74,222,128,0.08) 0%, rgba(74,222,128,0.02) 60%), #1c1b1d",borderBottom:"1px solid rgba(255,255,255,0.04)",borderLeft:`3px solid ${b.canAfford?"#4ade80":"#f87171"}`},children:h.jsx("span",{style:{fontSize:10,fontWeight:700,fontFamily:"'Plus Jakarta Sans', sans-serif",letterSpacing:"0.1em",textTransform:"uppercase",color:b.canAfford?"#4ade80":"#f87171"},children:"Balance Calculation"})}),h.jsxs("div",{style:{padding:"12px 14px",display:"flex",flexDirection:"column",gap:8},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{style:{fontSize:12,color:"#889299",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:500},children:"Current Balance"}),h.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:700,color:"#e5e1e4"},children:Le(b.currentBalance)})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsxs("span",{style:{fontSize:12,color:"#889299",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:500},children:["Entry x ",g]}),h.jsxs("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:700,color:"#f87171"},children:["-",Le(b.totalCost)]})]}),h.jsx("div",{style:{height:1,background:"#2a2a2c"}}),b.canAfford?h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#4ade80",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:"After Join"}),h.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:15,fontWeight:700,color:"#4ade80"},children:Le(b.remainingBalance)})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#f87171",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:"Shortage"}),h.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:15,fontWeight:700,color:"#f87171"},children:Le(b.shortage)})]}),h.jsx("div",{style:{padding:"8px 10px",borderRadius:8,background:"linear-gradient(135deg, rgba(248,113,113,0.1) 0%, rgba(248,113,113,0.02) 60%), #201f21",border:"1px solid rgba(248,113,113,0.15)",fontSize:11,color:"#f87171",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:500,textAlign:"center"},children:"Insufficient balance. Add money first."})]})]})]}),h.jsxs("div",{style:{borderRadius:10,overflow:"hidden",marginBottom:14,border:"2px solid #f87171",background:"linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(248,113,113,0.03) 60%), #1c1b1d",boxShadow:"0 0 20px rgba(248,113,113,0.08)"},children:[h.jsxs("div",{style:{padding:"10px 14px",background:"linear-gradient(135deg, rgba(248,113,113,0.15) 0%, rgba(248,113,113,0.05) 100%)",borderBottom:"1px solid rgba(248,113,113,0.2)",display:"flex",alignItems:"center",gap:8},children:[h.jsx("i",{className:"fa-solid fa-shield-halved",style:{color:"#f87171",fontSize:14}}),h.jsx("span",{style:{fontFamily:"'Lexend', sans-serif",fontSize:13,fontWeight:700,color:"#f87171",letterSpacing:"0.06em",textTransform:"uppercase"},children:"No Refund Policy"})]}),h.jsxs("div",{style:{padding:"12px 14px"},children:[h.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:12,color:"#f87171",fontWeight:700,margin:"0 0 8px 0",lineHeight:1.4},children:"Entry fee is NON-REFUNDABLE once you join."}),h.jsxs("ul",{style:{margin:0,paddingLeft:16,fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:11,color:"#bdc8cf",fontWeight:500,lineHeight:1.8},children:[h.jsx("li",{children:"No-show = No refund"}),h.jsx("li",{children:"Disconnect / lag = No refund"}),h.jsx("li",{children:"Match lost = No refund"}),h.jsxs("li",{children:["You ",h.jsx("strong",{style:{color:"#f87171"},children:"cannot"})," leave or cancel after joining"]})]}),h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:11,color:"#4ade80",fontWeight:600,margin:"10px 0 0 0",display:"flex",alignItems:"center",gap:6},children:[h.jsx("i",{className:"fa-solid fa-circle-info",style:{fontSize:10}}),"Only admin-cancelled matches get full refund"]})]})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[h.jsx("button",{style:$.btnGhost,onClick:()=>r({type:"CLOSE_MODAL"}),children:"Cancel"}),h.jsxs("button",{style:{...$.btnPrimary,background:b.canAfford?"#61cdff":"#201f21",color:b.canAfford?"#005572":"#555555",border:b.canAfford?"none":"1px solid #2a2a2c",cursor:b.canAfford?"pointer":"not-allowed"},onClick:E,disabled:!b.canAfford,children:[h.jsx("i",{className:"fa-solid fa-bolt"})," Confirm"]})]})]})}function mx(){const{state:n,dispatch:e}=Qe(),{adminPayments:t,currentUser:r,pendingAddMoneyRequests:s,transactions:i}=n,[o,c]=M.useState(""),[l,u]=M.useState("bkash"),[p,m]=M.useState(""),[_,g]=M.useState(!1),[b,C]=M.useState(r?.phone||""),E=Uo(l),N=nf.find(w=>w.id===l),j=t?.[{bkash:"bKash",nagad:"Nagad",rocket:"Rocket"}[l]]||"",z=j&&j!==""&&j!=="Not set by admin",Q=()=>{const w=t?.[l]||"";if(!(!w||w==="Not set by admin"||w===""))if(navigator.clipboard)navigator.clipboard.writeText(w).then(()=>{g(!0),setTimeout(()=>g(!1),1500)});else{const S=document.createElement("textarea");S.value=w,S.style.position="fixed",S.style.opacity="0",document.body.appendChild(S),S.select(),document.execCommand("copy"),document.body.removeChild(S),g(!0),setTimeout(()=>g(!1),1500)}},J=w=>{if(!w||w.trim().length<6)return!1;const S=w.trim().toUpperCase();return(s||[]).some(fe=>fe.txId&&fe.txId.toUpperCase()===S&&fe.status==="pending")?!0:(i||[]).some(fe=>fe.txId&&fe.txId.toUpperCase()===S)},I=(()=>{if(n.rateLimited)return{blocked:!0,waitSeconds:120};const w=Date.now(),S=120*1e3,T=(s||[]).filter(ht=>ht.userId===r?.id&&ht.status==="pending");if(T.length===0)return{blocked:!1,waitSeconds:0};const fe=[...T].sort((ht,Sn)=>{const An=ht.createdAt?new Date(ht.createdAt).getTime():0;return(Sn.createdAt?new Date(Sn.createdAt).getTime():0)-An})[0],Wt=fe?.createdAt?new Date(fe.createdAt).getTime():0,cr=w-Wt;return cr>=S?{blocked:!1,waitSeconds:0}:{blocked:!0,waitSeconds:Math.ceil((S-cr)/1e3)}})(),v=()=>{if(!z)return de(e,"Admin has not set payment number yet. Contact admin.","error");const w=parseFloat(o);if(!w||w<10)return de(e,"Minimum amount is 10 TK","error");if(!b.trim()||b.trim().length<11)return de(e,"Enter the number you sent money from","error");if(!p.trim())return de(e,"Enter transaction ID (TrxID) from your payment app","error");if(p.trim().length<6)return de(e,"Transaction ID seems too short","error");if(I.blocked)return de(e,`Please wait ${I.waitSeconds}s before submitting another request`,"error");if(J(p))return de(e,"This Transaction ID has already been used! Check your payment history.","error");e({type:"ADD_MONEY",payload:{amount:w,method:l.toUpperCase(),txId:p.trim(),senderNumber:b.trim()}}),e({type:"CLOSE_MODAL"}),de(e,`${Le(w)} request submitted! Wait for admin approval.`,"success")},A=({children:w})=>h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:12},children:[h.jsx("div",{style:{width:4,height:12,background:"#61cdff",borderRadius:9999,flexShrink:0}}),h.jsx("h2",{style:{fontFamily:"'Lexend', sans-serif",fontSize:12,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"#c6c6c6",margin:0},children:w})]});return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[h.jsxs("section",{children:[h.jsx(A,{children:"Payment Method"}),h.jsx("div",{style:{display:"flex",gap:8},children:nf.map(w=>{const S=Uo(w.id),T=l===w.id;return h.jsxs("button",{onClick:()=>u(w.id),style:{flex:1,height:56,borderRadius:12,background:T?S.primary:"#1b1b1d",border:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:8,cursor:"pointer",WebkitTapHighlightColor:"transparent",minWidth:0},children:[h.jsx("i",{className:w.icon,style:{fontSize:20,color:T?"#ffffff":"#555555"}}),h.jsx("span",{style:{fontSize:14,fontWeight:T?700:600,fontFamily:"'Plus Jakarta Sans', sans-serif",color:T?"#ffffff":"#555555",whiteSpace:"nowrap"},children:w.label})]},w.id)})})]}),h.jsxs("section",{style:{position:"relative",borderRadius:12,overflow:"hidden",background:"#1b1b1d",borderLeft:`4px solid ${z?E.primary:"#f87171"}`,boxShadow:"0 10px 25px rgba(0,0,0,0.3)"},children:[h.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(135deg, ${z?E.primary:"#f87171"}26 0%, ${z?E.primary:"#f87171"}00 100%)`,pointerEvents:"none"}}),h.jsxs("div",{style:{padding:16,position:"relative",zIndex:1},children:[h.jsx("p",{style:{fontFamily:"'Lexend', sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c6c6c6",marginBottom:4,margin:"0 0 4px 0"},children:"Send Money To"}),z?h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[h.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:22,fontWeight:700,color:E.primary,letterSpacing:"-0.01em",margin:0,wordBreak:"break-all"},children:j}),h.jsx("button",{onClick:Q,style:{padding:8,borderRadius:8,background:"rgba(53,52,55,0.5)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",WebkitTapHighlightColor:"transparent",flexShrink:0,marginLeft:12},children:h.jsx("i",{className:_?"fa-solid fa-check":"fa-regular fa-copy",style:{fontSize:14,color:_?"#4ade80":"#c6c6c6"}})})]}):h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:600,color:"#f87171",margin:0},children:[h.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{marginRight:6}}),"Not set by admin"]})]})]}),!z&&h.jsxs("section",{style:{background:"linear-gradient(135deg, rgba(248,113,113,0.08) 0%, rgba(248,113,113,0.02) 60%), #1b1b1d",borderLeft:"3px solid #f87171",padding:12,borderRadius:8,display:"flex",gap:10,alignItems:"flex-start"},children:[h.jsx("i",{className:"fa-solid fa-circle-exclamation",style:{color:"#f87171",fontSize:16,flexShrink:0,marginTop:1}}),h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:12,color:"#f87171",lineHeight:1.6,margin:0},children:["Admin has not set a ",N?.label||l.toUpperCase()," number yet. You cannot add money right now. Please contact admin to set the payment number first."]})]}),I.blocked&&h.jsxs("section",{style:{background:"linear-gradient(135deg, rgba(248,113,113,0.08) 0%, rgba(248,113,113,0.02) 60%), #1b1b1d",borderLeft:"3px solid #f87171",padding:12,borderRadius:8,display:"flex",gap:10,alignItems:"flex-start"},children:[h.jsx("i",{className:"fa-solid fa-clock",style:{color:"#f87171",fontSize:16,flexShrink:0,marginTop:1}}),h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:12,color:"#f87171",lineHeight:1.6,margin:0},children:[h.jsx("strong",{children:"Slow down!"})," You can only submit one add money request every 2 minutes. Please wait ",h.jsxs("strong",{children:[I.waitSeconds,"s"]})," before submitting again."]})]}),h.jsxs("section",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[h.jsx("div",{style:{width:4,height:12,background:E.primary,borderRadius:9999,flexShrink:0}}),h.jsxs("label",{style:{fontFamily:"'Lexend', sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c6c6c6",margin:0},children:["Your ",N?.label||l.toUpperCase()," Number *"]})]}),h.jsx("input",{style:{width:"100%",height:52,borderRadius:12,border:`1px solid ${E.primary}33`,background:`${E.primary}08`,padding:"0 16px",fontFamily:"'Inter', sans-serif",fontSize:16,fontWeight:700,color:E.primary,outline:"none",boxSizing:"border-box",WebkitTapHighlightColor:"transparent"},placeholder:"01XXXXXXXXX",type:"tel",value:b,onChange:w=>C(w.target.value),maxLength:14}),h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:10,color:"#555555",margin:"6px 0 0 0",fontWeight:500},children:[h.jsx("i",{className:"fa-solid fa-circle-info",style:{marginRight:4}}),"The number you used to send money (so admin can verify)"]})]}),h.jsxs("section",{children:[h.jsx(A,{children:"Select Amount"}),h.jsxs("div",{style:{display:"flex",gap:8,overflowX:"auto",paddingBottom:4,msOverflowStyle:"none",scrollbarWidth:"none"},children:[h.jsx("style",{children:".am-scroll::-webkit-scrollbar{display:none}"}),h.jsx("div",{className:"am-scroll",style:{display:"flex",gap:8},children:fx.map(w=>{const S=String(o)===String(w);return h.jsx("button",{onClick:()=>c(String(w)),style:{width:60,height:40,borderRadius:10,flexShrink:0,border:S?`1px solid ${E.primary}`:"none",background:S?`${E.primary}1a`:"#1b1b1d",color:S?E.primary:"#555555",fontFamily:"'Inter', sans-serif",fontSize:14,fontWeight:700,cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:w},w)})})]})]}),h.jsxs("section",{children:[h.jsx("label",{style:{display:"block",fontFamily:"'Lexend', sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c6c6c6",marginBottom:8},children:"Custom Amount (TK)"}),h.jsxs("div",{style:{position:"relative",background:"#1b1b1d",borderRadius:12},children:[h.jsx("span",{style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontFamily:"'Inter', sans-serif",fontSize:18,fontWeight:700,color:"#c6c6c6",pointerEvents:"none",zIndex:1},children:"৳"}),h.jsx("input",{style:{width:"100%",height:56,borderRadius:12,border:"1px solid #353437",background:"transparent",paddingLeft:40,paddingRight:16,fontFamily:"'Inter', sans-serif",fontSize:18,fontWeight:700,color:"#e5e1e4",outline:"none",boxSizing:"border-box",WebkitTapHighlightColor:"transparent"},placeholder:"0",type:"number",value:o,onChange:w=>c(w.target.value)})]})]}),h.jsxs("section",{children:[h.jsx("label",{style:{display:"block",fontFamily:"'Lexend', sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c6c6c6",marginBottom:8},children:"Transaction ID (TrxID) *"}),h.jsx("div",{style:{background:"#1b1b1d",borderRadius:12},children:h.jsx("input",{style:{width:"100%",height:56,borderRadius:12,border:J(p)?"1px solid #f87171":"1px solid #353437",background:J(p)?"rgba(248,113,113,0.04)":"transparent",padding:"0 16px",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:700,color:"#e5e1e4",textTransform:"uppercase",outline:"none",boxSizing:"border-box",WebkitTapHighlightColor:"transparent"},placeholder:"e.g. N123456789",type:"text",value:p,onChange:w=>m(w.target.value)})}),J(p)&&h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:11,color:"#f87171",margin:"6px 0 0 0",fontWeight:600,display:"flex",alignItems:"center",gap:4},children:[h.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),"This TXID is already used! You cannot reuse a transaction ID."]}),h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:10,color:"#555555",margin:"6px 0 0 0",fontWeight:500},children:[h.jsx("i",{className:"fa-solid fa-circle-info",style:{marginRight:4}}),"Find this in your ",N?.label||l.toUpperCase()," payment history/sms"]})]}),h.jsxs("section",{style:{background:"#1b1b1d",borderLeft:"2px solid #facc15",padding:12,borderRadius:8,display:"flex",gap:12,alignItems:"flex-start"},children:[h.jsx("i",{className:"fa-solid fa-circle-info",style:{color:"#facc15",fontSize:18,flexShrink:0,marginTop:1}}),h.jsxs("p",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:12,color:"#c6c6c6",lineHeight:1.6,margin:0},children:[h.jsx("strong",{style:{color:"#e5e1e4"},children:"Step 1:"})," Send ",o||"___"," TK to the number above via ",N?.label||l.toUpperCase(),".",h.jsx("br",{}),h.jsx("strong",{style:{color:"#e5e1e4"},children:"Step 2:"})," Enter YOUR number (the one you sent from).",h.jsx("br",{}),h.jsx("strong",{style:{color:"#e5e1e4"},children:"Step 3:"})," Copy the TrxID from your payment app.",h.jsx("br",{}),h.jsx("strong",{style:{color:"#e5e1e4"},children:"Step 4:"})," Paste it below and submit.",h.jsx("br",{}),h.jsx("strong",{style:{color:"#facc15"},children:"Note:"})," Balance will update only after admin verifies your payment."]})]}),h.jsxs("div",{style:{display:"flex",gap:12},children:[h.jsx("button",{style:{flex:1,height:56,borderRadius:12,border:"1px solid #353437",background:"transparent",color:"#e5e1e4",fontFamily:"'Lexend', sans-serif",fontSize:14,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",WebkitTapHighlightColor:"transparent",minWidth:0},onClick:()=>e({type:"CLOSE_MODAL"}),children:"Cancel"}),h.jsxs("button",{style:{flex:1,height:56,borderRadius:12,border:"none",background:z&&!J(p)&&!I.blocked?E.primary:"#2a2a2c",color:z&&!J(p)&&!I.blocked?"#ffffff":"#555555",fontFamily:"'Lexend', sans-serif",fontSize:14,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",cursor:z&&!J(p)&&!I.blocked?"pointer":"not-allowed",display:"flex",alignItems:"center",justifyContent:"center",gap:8,WebkitTapHighlightColor:"transparent",minWidth:0},onClick:v,disabled:!z||J(p)||I.blocked,children:[h.jsx("i",{className:"fa-solid fa-paper-plane",style:{fontSize:16}}),"Submit Request"]})]})]})}function gx(){const{state:n,dispatch:e}=Qe(),{currentUser:t}=n,[r,s]=M.useState(""),[i,o]=M.useState("bkash"),[c,l]=M.useState(t?.phone||"");if(!t)return null;const u=()=>{const m=parseFloat(r);if(!m||m<50)return de(e,"Minimum withdrawal is 50 TK","error");if(m>t.balance)return de(e,"Insufficient balance","error");if(!c.trim()||c.trim().length<11)return de(e,"Enter valid account number","error");e({type:"WITHDRAW",payload:{amount:m,method:i.toUpperCase(),account:c.trim()}}),e({type:"CLOSE_MODAL"}),de(e,`Withdrawal of ${Le(m)} requested`,"success")},p=Uo(i);return h.jsxs("div",{children:[h.jsxs("div",{style:{borderRadius:10,padding:"18px 16px",marginBottom:14,textAlign:"center",background:"linear-gradient(135deg, rgba(250,204,21,0.08) 0%, rgba(250,204,21,0.02) 60%), #1c1b1d",border:"1px solid rgba(250,204,21,0.15)",borderLeft:"4px solid #facc15",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.04)"},children:[h.jsx("div",{style:{fontSize:10,color:"#555555",fontFamily:"'Plus Jakarta Sans', sans-serif",letterSpacing:"0.12em",textTransform:"uppercase",marginBottom:6,fontWeight:700},children:"Available Balance"}),h.jsxs("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:30,fontWeight:700,color:"#e5e1e4"},children:[Le(t.balance)," ",h.jsx("span",{style:{fontSize:15,color:"#facc15",fontWeight:700},children:"TK"})]})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:[h.jsx("div",{style:{width:4,height:16,background:"#61cdff",borderRadius:2}}),h.jsx("label",{style:{...$.label,marginBottom:0},children:"Withdraw Method"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${rf.length}, 1fr)`,gap:8,marginBottom:14},children:rf.map(m=>{const _=Uo(m.id),g=i===m.id;return h.jsxs("button",{onClick:()=>o(m.id),style:{...$.methodBtn,border:`1px solid ${g?_.primary:"#353437"}`,background:g?_.primary:"#1c1b1d"},children:[h.jsx("i",{className:m.icon,style:{fontSize:20,color:g?"#fff":"#555555",display:"block",marginBottom:5}}),h.jsx("span",{style:{fontSize:10,fontWeight:700,fontFamily:"'Plus Jakarta Sans', sans-serif",color:g?"#fff":"#555555",letterSpacing:"0.08em",textTransform:"uppercase"},children:m.label})]},m.id)})}),h.jsxs("div",{style:$.fullRow,children:[h.jsx("label",{style:$.label,children:"Amount (TK) — Min 50"}),h.jsx("input",{style:$.input,type:"number",placeholder:"Enter amount",min:"50",max:t.balance,value:r,onChange:m=>s(m.target.value)})]}),h.jsxs("div",{style:$.fullRow,children:[h.jsx("label",{style:$.label,children:"Account Number"}),h.jsx("input",{style:$.input,placeholder:"01XXXXXXXXX",value:c,onChange:m=>l(m.target.value)})]}),t.phone&&h.jsxs("div",{style:{...$.infoBox,marginBottom:14,background:"linear-gradient(135deg, rgba(74,222,128,0.06) 0%, rgba(74,222,128,0.01) 60%), #201f21",border:"1px solid rgba(74,222,128,0.1)",color:"#889299"},children:[h.jsx("i",{className:"fa-solid fa-circle-check",style:{fontSize:10,marginTop:2,flexShrink:0,color:"#4ade80"}}),"Your registered number: ",h.jsx("strong",{style:{color:"#4ade80"},children:t.phone})]}),h.jsxs("div",{style:{...$.infoBox,marginBottom:16,background:"linear-gradient(135deg, rgba(250,204,21,0.06) 0%, rgba(250,204,21,0.01) 60%), #201f21",border:"1px solid rgba(250,204,21,0.1)",color:"#facc15"},children:[h.jsx("i",{className:"fa-solid fa-triangle-exclamation",style:{fontSize:10,marginTop:2,flexShrink:0}}),"Withdrawal will be reviewed by admin before processing. Usually takes 1-24 hours."]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[h.jsx("button",{style:$.btnGhost,onClick:()=>e({type:"CLOSE_MODAL"}),children:"Cancel"}),h.jsxs("button",{style:{...$.btnPrimary,background:p.primary,color:"#fff"},onClick:u,children:[h.jsx("i",{className:"fa-solid fa-arrow-up-from-bracket"})," Withdraw"]})]})]})}function of({isEdit:n,matchId:e}){const{state:t,dispatch:r}=Qe(),s=n?t.matches.find(E=>E.id===e):null,[i,o]=M.useState({title:s?.title||"",gameType:s?.gameType||"BR",mode:s?.mode||"Solo",map:s?.map||"Bermuda",entryFee:s?.entryFee?.toString()||"30",maxSlots:s?.maxSlots?.toString()||"50",perKill:s?.perKill?.toString()||"10",include4th:s?.include4th??!0,include5th:s?.include5th??!0,startTime:s?.startTime||""}),c=(E,N)=>{const V={...i,[E]:N};E==="gameType"&&N==="CS"&&(V.mode="Clash Squad",V.maxSlots="12"),E==="gameType"&&N==="BR"&&(V.mode="Solo",V.maxSlots="50"),E==="mode"&&(V.maxSlots=String(qh(N))),o(V)},l=E=>o(N=>({...N,[E]:!N[E]})),u=parseFloat(i.entryFee)||0,p=parseInt(i.maxSlots)||0,m=u*p,_=Math.round(m*.2),g=m-_,b=tf.find(E=>E.value===i.gameType)?.modes||[],C=()=>{if(!i.title.trim())return de(r,"Enter match title","error");if(!u||u<10)return de(r,"Min fee 10 TK","error");if(!p||p<2)return de(r,"Min 2 slots","error");const E={...i,entryFee:u,maxSlots:p,perKill:Number(i.perKill),startTime:i.startTime||new Date(Date.now()+72e5).toISOString().slice(0,16).replace("T"," ")};n&&s?(r({type:"UPDATE_MATCH",payload:{id:s.id,...E}}),de(r,`"${i.title}" updated!`,"success")):(r({type:"CREATE_MATCH",payload:E}),de(r,`"${i.title}" created!`,"success")),r({type:"CLOSE_MODAL"})};return h.jsxs("div",{children:[h.jsxs("div",{style:{borderRadius:10,marginBottom:14,background:"linear-gradient(135deg, rgba(250,204,21,0.08) 0%, rgba(250,204,21,0.02) 60%), #1c1b1d",border:"1px solid rgba(250,204,21,0.12)",borderLeft:"4px solid #facc15",overflow:"hidden",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.04)"},children:[h.jsx("div",{style:{padding:"8px 14px",borderBottom:"1px solid rgba(255,255,255,0.04)"},children:h.jsxs("span",{style:{fontSize:10,fontWeight:700,fontFamily:"'Plus Jakarta Sans', sans-serif",letterSpacing:"0.1em",textTransform:"uppercase",color:"#555555"},children:[h.jsx("i",{className:"fa-solid fa-eye",style:{marginRight:6}}),"Live Calculation"]})}),h.jsxs("div",{style:{padding:"12px 14px",display:"flex",flexDirection:"column",gap:8},children:[[{label:"Total Collection",value:Le(m),color:"#e5e1e4"},...t.isAdmin?[{label:"Admin Profit (20%)",value:Le(_),color:"#4ade80"}]:[]].map(E=>h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{style:{fontSize:12,color:"#889299",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:500},children:E.label}),h.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:700,color:E.color},children:E.value})]},E.label)),h.jsx("div",{style:{height:1,background:"#2a2a2c"}}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[h.jsx("span",{style:{fontSize:12,fontWeight:600,color:"#facc15",fontFamily:"'Plus Jakarta Sans', sans-serif"},children:"Prize Pool"}),h.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:18,fontWeight:700,color:"#facc15"},children:Le(g)})]})]})]}),h.jsxs("div",{style:$.fullRow,children:[h.jsx("label",{style:$.label,children:"Match Title *"}),h.jsx("input",{style:$.input,placeholder:"e.g. Bermuda Rush Solo",value:i.title,onChange:E=>c("title",E.target.value)})]}),h.jsxs("div",{style:$.row,children:[h.jsxs("div",{children:[h.jsx("label",{style:$.label,children:"Game Type"}),h.jsx("select",{style:$.select,value:i.gameType,onChange:E=>c("gameType",E.target.value),children:tf.map(E=>h.jsx("option",{value:E.value,children:E.label},E.value))})]}),h.jsxs("div",{children:[h.jsx("label",{style:$.label,children:"Mode"}),h.jsx("select",{style:$.select,value:i.mode,onChange:E=>c("mode",E.target.value),children:b.map(E=>h.jsx("option",{value:E,children:E},E))})]})]}),h.jsxs("div",{style:$.row,children:[h.jsxs("div",{children:[h.jsx("label",{style:$.label,children:"Map"}),h.jsx("select",{style:$.select,value:i.map,onChange:E=>c("map",E.target.value),children:dx.map(E=>h.jsx("option",{value:E,children:E},E))})]}),h.jsxs("div",{children:[h.jsx("label",{style:$.label,children:"Start Time"}),h.jsx("input",{style:{...$.input,colorScheme:"dark"},type:"datetime-local",value:i.startTime,onChange:E=>c("startTime",E.target.value)})]})]}),h.jsxs("div",{style:$.row,children:[h.jsxs("div",{children:[h.jsx("label",{style:$.label,children:"Entry Fee (TK) *"}),h.jsx("input",{style:$.input,type:"number",min:"10",value:i.entryFee,onChange:E=>c("entryFee",E.target.value)})]}),h.jsxs("div",{children:[h.jsx("label",{style:$.label,children:"Max Slots *"}),h.jsx("input",{style:$.input,type:"number",min:"2",value:i.maxSlots,onChange:E=>c("maxSlots",E.target.value)})]})]}),h.jsxs("div",{style:$.row,children:[h.jsxs("div",{children:[h.jsx("label",{style:$.label,children:"Per Kill (TK)"}),h.jsx("select",{style:$.select,value:i.perKill,onChange:E=>c("perKill",E.target.value),children:hx.map(E=>h.jsxs("option",{value:E,children:[E," TK"]},E))})]}),h.jsx("div",{style:{display:"flex",alignItems:"flex-end",paddingBottom:2},children:h.jsxs("span",{style:{fontSize:11,color:"#555555",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:600},children:["Auto slots: ",qh(i.mode)]})})]}),i.gameType==="BR"&&h.jsx("div",{style:{display:"flex",gap:20,marginBottom:14},children:["include4th","include5th"].map(E=>h.jsxs("div",{onClick:()=>l(E),style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:[h.jsx("div",{style:{width:38,height:22,borderRadius:11,background:i[E]?"#61cdff":"#2a2a2c",border:i[E]?"none":"1px solid #353437",position:"relative"},children:h.jsx("div",{style:{width:16,height:16,borderRadius:8,background:i[E]?"#005572":"#555555",position:"absolute",top:3,left:i[E]?19:3}})}),h.jsx("span",{style:{fontSize:12,color:i[E]?"#e5e1e4":"#555555",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:600},children:E==="include4th"?"4th (10%)":"5th (5%)"})]},E))}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[h.jsx("button",{style:$.btnGhost,onClick:()=>r({type:"CLOSE_MODAL"}),children:"Cancel"}),h.jsxs("button",{style:{...$.btnPrimary,background:"#61cdff",color:"#005572"},onClick:C,children:[h.jsx("i",{className:"fa-solid fa-plus"})," ",n?"Update":"Create"," Match"]})]})]})}function yx({matchId:n}){const{state:e,dispatch:t}=Qe(),r=e.matches.find(u=>u.id===n),[s,i]=M.useState(r?.roomId||""),[o,c]=M.useState(r?.roomPassword||"");if(!r)return null;const l=()=>{t({type:"SET_ROOM_CREDENTIALS",payload:{matchId:r.id,roomId:s.trim(),roomPassword:o.trim()}}),t({type:"CLOSE_MODAL"}),de(t,"Room credentials saved!","success")};return h.jsxs("div",{children:[h.jsxs("div",{style:{borderRadius:10,padding:"14px 16px",marginBottom:14,background:"linear-gradient(135deg, rgba(250,204,21,0.08) 0%, rgba(250,204,21,0.02) 60%), #1c1b1d",border:"1px solid rgba(250,204,21,0.12)",borderLeft:"4px solid #facc15",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.04)"},children:[h.jsx("div",{style:{fontFamily:"'Lexend', sans-serif",fontSize:15,fontWeight:700,color:"#e5e1e4",marginBottom:4,fontStyle:"italic",textTransform:"uppercase",letterSpacing:"-0.025em"},children:r.title}),h.jsxs("div",{style:{fontSize:12,color:"#555555",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:600},children:[r.mode," • ",r.map]})]}),h.jsxs("div",{style:$.fullRow,children:[h.jsxs("label",{style:{...$.label,display:"flex",alignItems:"center",gap:6},children:[h.jsx("i",{className:"fa-solid fa-key",style:{color:"#61cdff",fontSize:10}})," Room ID"]}),h.jsx("input",{style:{...$.input,fontFamily:"'Inter', sans-serif",fontSize:20,fontWeight:700,letterSpacing:"0.05em",textAlign:"center",color:"#61cdff"},placeholder:"Type Room ID here",value:s,onChange:u=>i(u.target.value)})]}),h.jsxs("div",{style:$.fullRow,children:[h.jsxs("label",{style:{...$.label,display:"flex",alignItems:"center",gap:6},children:[h.jsx("i",{className:"fa-solid fa-shield-halved",style:{color:"#4ade80",fontSize:10}})," Password"]}),h.jsx("input",{style:{...$.input,fontFamily:"'Inter', sans-serif",fontSize:20,fontWeight:700,letterSpacing:"0.05em",textAlign:"center",color:"#4ade80"},placeholder:"Type Password here",value:o,onChange:u=>c(u.target.value)})]}),h.jsxs("div",{style:{...$.infoBox,marginBottom:14,background:"linear-gradient(135deg, rgba(248,113,113,0.06) 0%, rgba(248,113,113,0.01) 60%), #201f21",border:"1px solid rgba(248,113,113,0.1)",color:"#f87171"},children:[h.jsx("i",{className:"fa-solid fa-ban",style:{fontSize:10,marginTop:2,flexShrink:0}}),"No copy button. Users see these 10 minutes before match."]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[h.jsx("button",{style:$.btnGhost,onClick:()=>t({type:"CLOSE_MODAL"}),children:"Cancel"}),h.jsxs("button",{style:{...$.btnPrimary,background:"#4ade80",color:"#052e16"},onClick:l,children:[h.jsx("i",{className:"fa-solid fa-save"})," Save"]})]})]})}function _x({matchId:n}){const{state:e,dispatch:t}=Qe(),r=e.matches.find(i=>i.id===n);if(!r)return null;const s=Og(r.mode);return h.jsxs("div",{children:[h.jsxs("div",{style:{borderRadius:10,padding:"14px 16px",marginBottom:14,textAlign:"center",background:"linear-gradient(135deg, rgba(74,222,128,0.08) 0%, rgba(74,222,128,0.02) 60%), #1c1b1d",border:"1px solid rgba(74,222,128,0.12)",borderLeft:"4px solid #4ade80",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.04)"},children:[h.jsx("div",{style:{fontFamily:"'Lexend', sans-serif",fontSize:15,fontWeight:700,color:"#e5e1e4",marginBottom:4,fontStyle:"italic",textTransform:"uppercase",letterSpacing:"-0.025em"},children:r.title}),h.jsxs("div",{style:{fontSize:11,color:"#555555",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em"},children:[r.mode," • ",r.map," • ",r.result?.method==="screenshot"?"Screenshot":"Manual"]})]}),r.result?.players?.length>0?h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,marginBottom:14},children:[h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"36px 1fr 50px",gap:8,padding:"8px 14px",borderRadius:10,background:"#201f21"},children:[h.jsx("span",{style:{...$.label,marginBottom:0},children:"#"}),h.jsx("span",{style:{...$.label,marginBottom:0},children:s?"Team":"Player"}),h.jsx("span",{style:{...$.label,marginBottom:0,textAlign:"center"},children:s?"Pts":"Kills"})]}),r.result.players.map((i,o)=>{const c=["#facc15","#bdc8cf","#cd7f32","#889299","#555555"];return h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"36px 1fr 50px",gap:8,padding:"10px 14px",borderRadius:10,background:o===0?"#1c1b1d":"#131315"},children:[h.jsx("span",{style:{fontSize:14,fontFamily:"'Inter', sans-serif",fontWeight:700,color:c[o]||"#555555"},children:i.position}),h.jsxs("span",{style:{fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:13,fontWeight:600,color:c[o]||"#555555",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[i.teamName&&s?h.jsx("span",{style:{color:"#FFC857"},children:i.teamName}):null,i.teamName&&i.ign?" — ":"",i.ign]}),h.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:13,fontWeight:700,color:c[o]||"#555555",textAlign:"center"},children:s&&i.points!=null?i.points:i.kills})]},o)})]}):h.jsx("div",{style:{textAlign:"center",padding:"30px 0",color:"#555555",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:500,fontSize:13},children:"No result data available"}),h.jsxs("button",{style:{...$.btnPrimary,background:"#61cdff",color:"#005572"},onClick:()=>t({type:"CLOSE_MODAL"}),children:[h.jsx("i",{className:"fa-solid fa-check"})," Close"]})]})}function bx({userId:n}){const{state:e,dispatch:t}=Qe(),r=e.users.find(g=>g.id===n),[s,i]=M.useState(1),[o,c]=M.useState("add"),[l,u]=M.useState(""),[p,m]=M.useState("");if(!r)return null;const _=()=>{if(s===1&&!o)return de(t,"Select Add or Deduct!","error");if(s===2&&(!l||parseFloat(l)<=0))return de(t,"Enter valid amount!","error");if(s===3&&!p.trim())return de(t,"Reason is required!","error");if(s===4){const g=parseFloat(l);t({type:"ADJUST_BALANCE",payload:{userId:n,action:o,amount:g,reason:p.trim()||"Admin adjustment"}}),de(t,`✅ ${o==="add"?"Added":"Deducted"} ${Le(g)} for ${r.name}`,"success"),t({type:"CLOSE_MODAL"}),i(1)}};return h.jsxs("div",{children:[h.jsxs("div",{style:{borderRadius:14,padding:"18px 16px",marginBottom:14,background:"linear-gradient(135deg, rgba(97,205,255,0.08) 0%, rgba(97,205,255,0.02) 60%), #1c1b1d",border:"1px solid rgba(97,205,255,0.12)",borderLeft:"4px solid #61cdff",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.04)",textAlign:"center"},children:[h.jsxs("div",{style:{fontSize:10,fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#555555",marginBottom:6},children:[h.jsx("i",{className:"fa-solid fa-scale-balanced",style:{marginRight:6}}),"Adjust Balance"]}),h.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:26,fontWeight:700,color:"#61cdff"},children:Le(r.balance)}),h.jsx("div",{style:{fontSize:11,color:"#889299",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:500,marginTop:2},children:"Current Balance"})]}),s===1&&h.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14},children:["add","deduct"].map(g=>h.jsxs("button",{onClick:()=>{c(g),i(2)},style:{padding:"14px 0",borderRadius:12,border:`1px solid ${o==="add"?"#4ade80":"#353437"}`,background:o==="add"?"linear-gradient(135deg, rgba(74,222,128,0.15) 0%, rgba(74,222,128,0.03) 70%)":"#1c1b1d",color:o==="add"?"#fff":"#888",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:13,fontWeight:700,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",WebkitTapHighlightColor:"transparent",display:"flex",alignItems:"center",justifyContent:"center",gap:8,minHeight:52},children:[h.jsx("i",{className:`fa-solid ${g==="add"?"fa-plus":"fa-minus"}`,style:{fontSize:16}}),g==="add"?"Add Money":"Deduct Money"]},g))}),s>=2&&h.jsxs("div",{style:{marginBottom:14},children:[h.jsx("label",{style:{display:"block",fontFamily:"'Lexend', sans-serif",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c6c6c6",marginBottom:8},children:"Enter Amount (TK) *"}),h.jsxs("div",{style:{position:"relative",background:"#1c1b1d",borderRadius:12},children:[h.jsx("span",{style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",fontFamily:"'Inter', sans-serif",fontSize:18,fontWeight:700,color:"#61cdff",pointerEvents:"none",zIndex:1},children:"৳"}),h.jsx("input",{style:{width:"100%",height:56,borderRadius:12,border:`1px solid ${o==="add"?"#4ade80":"#353437"}`,background:`${o==="add"?"rgba(97,205,255,0.08)":"transparent"}`,paddingLeft:40,paddingRight:16,fontFamily:"'Inter', sans-serif",fontSize:20,fontWeight:700,color:"#e5e1e4",outline:"none",boxSizing:"border-box",WebkitTapHighlightColor:"transparent"},placeholder:"0",type:"number",value:l,onChange:g=>u(g.target.value),autoFocus:!0})]}),h.jsx("div",{style:{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"},children:[100,200,500,1e3,5e3].map(g=>h.jsx("button",{onClick:()=>{u(String(g)),i(3)},style:{flex:1,padding:"10px 0",borderRadius:8,border:"1px solid rgba(97,205,255,0.2)",background:"rgba(97,205,255,0.06)",color:"#61cdff",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:12,fontWeight:600,cursor:"pointer",WebkitTapHighlightColor:"transparent"},children:g>=1e3?"1K+":g+" TK"}))})]}),s>=3&&h.jsxs("div",{style:{marginBottom:14},children:[h.jsx("label",{style:{display:"block",fontFamily:"'Lexend', sans-serif",fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c6c6c6",marginBottom:8},children:"Reason for Adjustment *"}),h.jsxs("div",{style:{position:"relative",background:"#1c1b1d",borderRadius:12},children:[h.jsx("i",{className:"fa-solid fa-pen",style:{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#facc15",pointerEvents:"none",zIndex:1,fontSize:14}}),h.jsx("textarea",{style:{width:"100%",minHeight:"80px",borderRadius:12,border:`1px solid ${p?.trim()?"#facc15":"#353437"}`,background:`${p?.trim()?"rgba(250,204,21,0.05)":"transparent"}`,padding:"14px 40px 14px 16px",fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:14,fontWeight:400,color:"#e5e1e4",outline:"none",resize:"vertical",WebkitTapHighlightColor:"transparent",boxSizing:"border-box"},placeholder:"Why are you adjusting? (Optional but recommended)",value:p,onChange:g=>m(g.target.value),rows:3}),!p?.trim()&&h.jsxs("p",{style:{fontSize:10,color:"#f87171",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:600,marginTop:6,display:"flex",alignItems:"center",gap:6},children:[h.jsx("i",{className:"fa-solid fa-exclamation-triangle"}),"Reason is required!"]})]})]}),s>=4&&h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{borderRadius:12,padding:"14px 16px",marginBottom:16,background:`linear-gradient(135deg, ${o==="add"?"rgba(74,222,128,0.06)":"rgba(248,113,113,0.06)"} 0%, ${o==="add"?"rgba(74,222,128,0.01)":"rgba(248,113,113,0.01)"} 60%)`,border:`1px solid ${o==="add"?"#4ade80":"#f87171"}`,textAlign:"center"},children:[h.jsx("div",{style:{fontSize:11,color:o==="add"?"#4ade80":"#f87171",fontFamily:"'Plus Jakarta Sans', sans-serif",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8},children:"New Balance Preview"}),h.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:32,fontWeight:900,color:o==="add"?"#4ade80":"#f87171",lineHeight:1},children:Le(o==="add"?r.balance+parseFloat(l):r.balance-parseFloat(l))}),h.jsxs("div",{style:{fontSize:12,color:"#889299",fontFamily:"'Plus Jakarta Sans', sans-serif",marginTop:4},children:["Current: ",Le(r.balance)," → New: ",o==="add"?"+":"-",Le(l)]})]}),h.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,margin:"18px 0 0"},children:[h.jsx("button",{onClick:()=>{i(1)},style:{...$.btnGhost,height:52,fontSize:13,letterSpacing:"0.08em",textTransform:"uppercase"},children:"← Back"}),h.jsxs("button",{onClick:_,style:{...$.btnPrimary,background:o==="add"?"linear-gradient(135deg, #4ade80, #22c55e)":"linear-gradient(135deg, #ef4444, #dc2626)",color:"#fff",height:52,fontSize:14,fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",boxShadow:`0 4px 20px ${o==="add"?"rgba(74,222,128,0.35)":"rgba(239,68,68,0.25)"}`},children:[h.jsx("i",{className:`fa-solid ${o==="add"?"fa-plus":"fa-minus"}`,style:{marginRight:8}}),o==="add"?"Confirm Add":"Confirm Deduct"]})]})]})]})}function Ix(){const{state:n,dispatch:e}=Qe(),{modal:t}=n,r=typeof window<"u"&&window.innerWidth<=768;if(M.useEffect(()=>{const u=p=>{p.key==="Escape"&&t&&e({type:"CLOSE_MODAL"})};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[t,e]),M.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),!t)return null;const s=()=>e({type:"CLOSE_MODAL"}),i=()=>{switch(t.type){case"join-match":return h.jsx(px,{matchId:t.data?.matchId||t.matchId,data:t.data});case"add-money":return h.jsx(mx,{});case"withdraw":return h.jsx(gx,{});case"create-match":return h.jsx(of,{});case"edit-match":return h.jsx(of,{isEdit:!0,matchId:t.matchId});case"room":return h.jsx(yx,{matchId:t.matchId});case"result":return h.jsx(_x,{matchId:t.matchId});case"adjust-balance":return h.jsx(bx,{userId:t.userId});default:return null}},c={"join-match":"Confirmation","add-money":"Add Money",withdraw:"Withdraw","create-match":"Create Match","edit-match":"Edit Match",room:"Room Credentials",result:"Submit Result","adjust-balance":"Adjust Balance"}[t.type]||"",l=t.type==="create-match"||t.type==="edit-match";return h.jsxs("div",{onClick:u=>{u.target===u.currentTarget&&s()},style:{position:"fixed",inset:0,zIndex:2e3,display:"flex",alignItems:r?"flex-end":"center",justifyContent:"center",background:"rgba(0,0,0,0.70)",padding:r?0:16,animation:"modalFadeIn 0.2s ease"},children:[h.jsxs("div",{role:"dialog","aria-modal":"true",style:{position:"relative",width:"100%",maxWidth:l?800:520,maxHeight:r?"85vh":"90vh",background:"#201f21",border:"1px solid #353437",borderRadius:r?"0 0 12px 12px":12,overflow:"hidden",display:"flex",flexDirection:"column",animation:r?"modalSlideUp 0.3s cubic-bezier(0.4,0,0.2,1)":"modalScaleIn 0.25s ease"},children:[c&&h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",borderBottom:"1px solid #353437",flexShrink:0},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[h.jsx("div",{style:{width:4,height:16,borderRadius:2,background:"#61cdff"}}),h.jsx("h3",{style:{fontFamily:"Lexend",fontSize:16,fontWeight:700,color:"#e8e8e8",margin:0},children:c})]}),h.jsx("button",{onClick:s,"aria-label":"Close",style:{width:32,height:32,background:"#353437",border:"none",borderRadius:8,color:"#9ca3af",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:h.jsx("i",{className:"fa-solid fa-xmark",style:{fontSize:13}})})]}),h.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",padding:"20px"},children:i()})]}),h.jsx("style",{children:`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
        @keyframes modalScaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `})]})}const af={success:"fa-solid fa-circle-check",error:"fa-solid fa-circle-xmark",info:"fa-solid fa-circle-info",warning:"fa-solid fa-triangle-exclamation",live:"fa-solid fa-circle-play"},cf={success:{bg:"rgba(34,197,94,0.1)",border:"rgba(34,197,94,0.25)",text:"#4ade80",glow:"rgba(34,197,94,0.15)"},error:{bg:"rgba(239,68,68,0.1)",border:"rgba(239,68,68,0.25)",text:"#f87171",glow:"rgba(239,68,68,0.15)"},info:{bg:"rgba(6,214,240,0.08)",border:"rgba(6,214,240,0.2)",text:"#06d6f0",glow:"rgba(6,214,240,0.12)"},warning:{bg:"rgba(251,191,36,0.1)",border:"rgba(251,191,36,0.25)",text:"#fbbf24",glow:"rgba(251,191,36,0.15)"},live:{bg:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.2)",text:"#f87171",glow:"rgba(239,68,68,0.1)"}};function wx(){const{state:n}=Qe(),{toasts:e}=n;if(!e||e.length===0)return null;const t=e.slice(-3);return h.jsxs("div",{"aria-live":"polite","aria-atomic":"false",style:{position:"fixed",top:12,right:12,left:12,zIndex:9e3,display:"flex",flexDirection:"column",gap:8,pointerEvents:"none",paddingTop:"env(safe-area-inset-top, 0px)"},children:[t.map(r=>{const s=cf[r.type]||cf.info;return r.type==="live"?h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 14px",background:"rgba(239,68,68,0.1)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(239,68,68,0.2)",borderRadius:10,pointerEvents:"auto",animation:r.removing?"toastOut 0.25s ease forwards":"toastIn 0.3s cubic-bezier(0.4,0,0.2,1) forwards",opacity:r.removing?1:0,transform:r.removing?"translateY(0)":"translateY(-12px)",maxWidth:420,marginLeft:"auto"},children:[h.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:"#f87171",animation:"pulse 1.2s infinite",flexShrink:0}}),h.jsx("span",{style:{fontSize:12,fontWeight:600,fontFamily:"'Rajdhani', sans-serif",color:"#fca5a5",lineHeight:1.3,flex:1},children:r.message})]},r.id):h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",background:s.bg,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:`1px solid ${s.border}`,borderRadius:12,boxShadow:`0 4px 20px ${s.glow}`,pointerEvents:"auto",animation:r.removing?"toastOut 0.3s ease forwards":"toastIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards",opacity:r.removing?1:0,transform:r.removing?"translateY(0)":"translateY(-14px)",maxWidth:400,marginLeft:"auto"},children:[h.jsx("div",{style:{width:28,height:28,borderRadius:8,flexShrink:0,background:s.bg,border:`1px solid ${s.border}`,display:"flex",alignItems:"center",justifyContent:"center"},children:h.jsx("i",{className:af[r.type]||af.info,style:{fontSize:13,color:s.text}})}),h.jsx("span",{style:{flex:1,fontSize:13,fontWeight:600,fontFamily:"'Rajdhani', sans-serif",color:s.text,lineHeight:1.35},children:r.message}),!r.removing&&h.jsx("div",{style:{width:4,borderRadius:2,flexShrink:0,background:s.border,overflow:"hidden",height:20},children:h.jsx("div",{style:{width:"100%",height:"100%",background:s.text,borderRadius:2,animation:"toastProgress 3s linear forwards"}})})]},r.id)}),h.jsx("style",{children:`
        @keyframes toastIn {
          0% { transform: translateY(-14px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes toastOut {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-10px); opacity: 0; }
        }
        @keyframes toastProgress {
          0% { height: 100%; }
          100% { height: 0%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `})]})}const Za=M.lazy(()=>qe(()=>import("./Dashboard-BF846Nqc.js"),__vite__mapDeps([4,2,5]))),Tx=M.lazy(()=>qe(()=>import("./Matches-DNQd1iLB.js"),__vite__mapDeps([6,2,7,5]))),Ex=M.lazy(()=>qe(()=>import("./MatchDetail-B-cPiqH9.js"),__vite__mapDeps([8,2]))),vx=M.lazy(()=>qe(()=>import("./Wallet-DQSf2y0q.js"),__vite__mapDeps([9,2]))),xx=M.lazy(()=>qe(()=>import("./Leaderboard-DSv8NyTJ.js"),__vite__mapDeps([10,2]))),Sx=M.lazy(()=>qe(()=>import("./Notifications-Im-3YjmB.js"),__vite__mapDeps([11,2]))),Ax=M.lazy(()=>qe(()=>import("./Admin-D-aA33tj.js"),__vite__mapDeps([12,2,13]))),Mg=M.lazy(()=>qe(()=>import("./Login-BSpaXb4r.js"),__vite__mapDeps([14,2]))),Rx=M.lazy(()=>qe(()=>import("./Profile-BZWoQ6wX.js"),__vite__mapDeps([15,2]))),Px=M.lazy(()=>qe(()=>import("./Settings-4yZl4Jcj.js"),__vite__mapDeps([16,2])));function Cx(){return h.jsxs("div",{style:{display:"flex",minHeight:"100dvh",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg, #0e0e10 0%, #1a1a2e 100%)",position:"relative",overflow:"hidden"},children:[h.jsx("div",{style:{position:"absolute",width:"200%",height:"200%",background:"radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)",animation:"pulse 4s ease-in-out infinite"}}),h.jsxs("div",{style:{textAlign:"center",zIndex:1,animation:"fadeInUp 0.6s ease-out"},children:[h.jsx("img",{src:"/logo.png",alt:"ZENO LEAGUE",style:{height:90,marginBottom:20,objectFit:"contain",filter:"drop-shadow(0 0 20px rgba(168,85,247,0.5))",animation:"float 3s ease-in-out infinite"}}),h.jsx("div",{style:{fontFamily:"var(--font-display)",fontSize:24,fontWeight:800,color:"#A055F7",letterSpacing:6,marginBottom:12,textTransform:"uppercase",textShadow:"0 0 20px rgba(168,85,247,0.5)"},children:"ZENO LEAGUE"}),h.jsx("div",{style:{fontSize:13,color:"#888",fontFamily:"var(--font-body)",marginBottom:24,letterSpacing:2},children:"Checking session..."}),h.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:[0,1,2].map(n=>h.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:"#A055F7",animation:"bounce 1.4s infinite ease-in-out both",animationDelay:`${n*.16}s`}},n))})]}),h.jsx("style",{children:`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
      `})]})}function Vc(){return h.jsxs("div",{style:{padding:24,animation:"fadeIn 0.3s ease-in"},children:[h.jsx("div",{className:"skeleton",style:{width:220,height:32,marginBottom:24,borderRadius:8,background:"linear-gradient(90deg, #1a1a2e 25%, #2a2a4e 50%, #1a1a2e 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite"}}),h.jsx("div",{className:"skeleton",style:{width:"100%",height:280,marginBottom:28,borderRadius:12,background:"linear-gradient(90deg, #1a1a2e 25%, #2a2a4e 50%, #1a1a2e 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite"}}),h.jsx("div",{className:"skeleton",style:{width:160,height:22,marginBottom:18,borderRadius:6,background:"linear-gradient(90deg, #1a1a2e 25%, #2a2a4e 50%, #1a1a2e 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.5s infinite"}}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:12},children:[1,2,3,4].map(n=>h.jsx("div",{className:"skeleton",style:{height:180,borderRadius:12,background:"linear-gradient(90deg, #1a1a2e 25%, #2a2a4e 50%, #1a1a2e 75%)",backgroundSize:"200% 100%",animation:`shimmer 1.5s infinite ${n*.1}s`}},n))}),h.jsx("style",{children:`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `})]})}function kx({error:n,retry:e}){return h.jsxs("div",{style:{padding:48,textAlign:"center",background:"linear-gradient(135deg, rgba(239,68,68,0.1) 0%, transparent 100%)",borderRadius:16,margin:24,border:"1px solid rgba(239,68,68,0.2)"},children:[h.jsx("div",{style:{fontSize:48,marginBottom:16},children:"⚠️"}),h.jsx("h3",{style:{color:"#ef4444",marginBottom:12,fontFamily:"var(--font-display)"},children:"Something went wrong"}),h.jsx("p",{style:{color:"#999",marginBottom:24,fontSize:14},children:n?.message||"This view failed to load"}),h.jsx("button",{onClick:e,style:{padding:"12px 32px",background:"linear-gradient(135deg, #A055F7, #EC4899)",color:"white",border:"none",borderRadius:8,cursor:"pointer",fontWeight:700,fontSize:14,fontFamily:"var(--font-body)"},children:"Try Again"})]})}class Dx extends Oc.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("View Error:",e,t)}render(){return this.state.hasError?h.jsx(kx,{error:this.state.error,retry:()=>this.setState({hasError:!1})}):this.props.children}}const Nx=Oc.memo(function({children:e}){const{state:t}=Qe();if(!t.isLoggedIn||!t.currentUser){const r=t.currentView==="admin-login"?"admin":"user";return h.jsx(M.Suspense,{fallback:h.jsx(Vc,{}),children:h.jsx(Mg,{mode:r})})}return e});function Vx(n){return n&&n.startsWith("admin")}const Ox=Oc.memo(function(){const{state:e,dispatch:t,isAdmin:r}=Qe(),{currentView:s,viewParam:i,loading:o,sidebarOpen:c}=e,l=Vx(s),[u,p]=M.useState(typeof navigator<"u"?!navigator.onLine:!1);M.useEffect(()=>{const g=()=>p(!0),b=()=>p(!1);return window.addEventListener("offline",g),window.addEventListener("online",b),()=>{window.removeEventListener("offline",g),window.removeEventListener("online",b)}},[]),M.useEffect(()=>{e.modal&&window.history.pushState({modalOpen:!0},"")},[e.modal]),M.useEffect(()=>{e.sidebarOpen&&!e.modal&&window.history.pushState({sidebarOpen:!0},"")},[e.sidebarOpen,e.modal]),M.useEffect(()=>{const g=()=>{e.modal?(window.history.pushState({modalOpen:!0},""),t({type:"CLOSE_MODAL"})):e.sidebarOpen&&(window.history.pushState({sidebarOpen:!0},""),t({type:"CLOSE_SIDEBAR"}))};return window.addEventListener("popstate",g),()=>window.removeEventListener("popstate",g)},[e.modal,e.sidebarOpen,t]),M.useEffect(()=>{"requestIdleCallback"in window&&requestIdleCallback(()=>{switch(s){case"dashboard":qe(()=>import("./Matches-DNQd1iLB.js"),__vite__mapDeps([6,2,7,5]));break;case"matches":qe(()=>import("./MatchDetail-B-cPiqH9.js"),__vite__mapDeps([8,2]));break;case"login":qe(()=>import("./Dashboard-BF846Nqc.js"),__vite__mapDeps([4,2,5]));break}},{timeout:2e3})},[s]);const m=M.useMemo(()=>{switch(s){case"dashboard":return h.jsx(Za,{});case"matches":return h.jsx(Tx,{});case"match-detail":return h.jsx(Ex,{matchId:i});case"wallet":return h.jsx(vx,{});case"leaderboard":return h.jsx(xx,{});case"notifications":return h.jsx(Sx,{});case"profile":return h.jsx(Rx,{});case"settings":return h.jsx(Px,{});case"admin-overview":case"admin-create":case"admin-rooms":case"admin-results":case"admin-users":case"admin-finance":case"admin-dashboard":case"admin-matches":case"admin-payments":case"admin-owners":case"admin-activity":case"admin-profit":case"admin-add-money":return r?h.jsx(Ax,{}):h.jsx(Za,{});case"login":case"admin-login":return h.jsx(Mg,{mode:s==="admin-login"?"admin":"user"});default:return h.jsx(Za,{})}},[s,i,r]),_=u&&h.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:9999,background:"linear-gradient(90deg, #fbbf24, #f59e0b)",color:"#1a1a1a",padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"center",gap:8,fontFamily:"'Plus Jakarta Sans', sans-serif",fontSize:13,fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",boxShadow:"0 2px 16px rgba(251,191,36,0.3)",animation:"slideDown 0.3s ease-out"},children:[h.jsx("i",{className:"fa-solid fa-wifi-slash",style:{fontSize:14}}),h.jsx("span",{children:"You're offline — Some features may be limited"}),h.jsx("button",{onClick:()=>window.location.reload(),style:{marginLeft:12,padding:"4px 12px",background:"rgba(0,0,0,0.2)",border:"none",borderRadius:4,color:"inherit",cursor:"pointer",fontSize:11,fontWeight:800},children:"Retry"})]});return o?h.jsxs("div",{style:{display:"flex",minHeight:"100dvh",paddingTop:u?48:0},children:[_,h.jsx(Yh,{}),h.jsx("div",{style:{flex:1,minWidth:0,padding:"0 16px",overflow:"hidden"},children:h.jsx(Vc,{})})]}):h.jsxs("div",{style:{display:"flex",minHeight:"100dvh",position:"relative",paddingTop:u?48:0},children:[_,h.jsx(Yh,{}),c&&h.jsx("div",{onClick:()=>t({type:"CLOSE_SIDEBAR"}),style:{position:"fixed",inset:0,zIndex:1e3,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(4px)",animation:"fadeIn 0.2s ease-out"}}),h.jsx("main",{style:{flex:1,minWidth:0,maxWidth:"100%",overflowX:"hidden",overflowY:"auto",WebkitOverflowScrolling:"touch"},children:h.jsx("div",{className:"main-content",style:{padding:"16px",paddingTop:"72px",paddingBottom:"90px",maxWidth:l?1400:900,margin:"0 auto",width:"100%",boxSizing:"border-box"},children:h.jsx(Dx,{children:h.jsx(M.Suspense,{fallback:h.jsx(Vc,{}),children:m})})})},l?"admin":s+i),h.jsx(ux,{}),h.jsx(ax,{}),h.jsx(Ix,{}),h.jsx(wx,{}),h.jsx("style",{children:`
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `})]})});function Mx(){const[n,e]=M.useState(!1);return M.useEffect(()=>{iv.then(()=>{setTimeout(()=>e(!0),100)})},[]),n?h.jsx(Vg,{children:h.jsx(Nx,{children:h.jsx(Ox,{})})}):h.jsx(Cx,{})}function Lx(n={}){const{immediate:e=!1,onNeedReload:t,onNeedRefresh:r,onOfflineReady:s,onRegistered:i,onRegisteredSW:o,onRegisterError:c}=n;let l,u;const p=async(_=!0)=>{await u};async function m(){if("serviceWorker"in navigator){if(l=await qe(async()=>{const{Workbox:_}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:_}},[]).then(({Workbox:_})=>new _("/sw.js",{scope:"/",type:"classic"})).catch(_=>{c?.(_)}),!l)return;l.addEventListener("activated",_=>{(_.isUpdate||_.isExternal)&&(t?t():window.location.reload())}),l.addEventListener("installed",_=>{_.isUpdate||s?.()}),l.register({immediate:e}).then(_=>{o?o("/sw.js",_):i?.(_)}).catch(_=>{c?.(_)})}}return u=m(),p}Lx({immediate:!0,onNeedRefresh(){console.log("[PWA] New content available, refresh needed")},onOfflineReady(){console.log("[PWA] App ready for offline use")}});my.createRoot(document.getElementById("root")).render(h.jsx(M.StrictMode,{children:h.jsx(Vg,{children:h.jsx(Mx,{})})}));export{If as A,Ny as B,Ee as C,xf as D,Jn as E,tf as F,sn as G,ii as H,kr as I,Qn as J,hn as K,Mc as L,eS as M,Ux as N,Ft as O,ne as P,a_ as Q,zx as R,$h as T,jc as _,lv as a,Jx as b,hv as c,de as d,Qx as e,Le as f,cv as g,ho as h,bv as i,h as j,dx as k,Hx as l,qh as m,Vv as n,Yx as o,Zx as p,qx as q,M as r,Gx as s,Kx as t,Qe as u,Wx as v,Xx as w,$x as x,Cy as y,Fx as z};
