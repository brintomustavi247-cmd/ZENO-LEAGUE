import{C as st,_ as ct,D as ut,L as lt,P as ft,I as dt,J as pt,K as de,H as gt,B as mt,z as ht,A as Tt}from"./index-KHOMB6cC.js";import"./index.esm-Dnj41LaA.js";import"./vendor-D3F3s8fL.js";var H,pe,z=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},Ce=function(t){if(document.readyState==="loading")return"loading";var e=z();if(e){if(t<e.domInteractive)return"loading";if(e.domContentLoadedEventStart===0||t<e.domContentLoadedEventStart)return"dom-interactive";if(e.domComplete===0||t<e.domComplete)return"dom-content-loaded"}return"complete"},Et=function(t){var e=t.nodeName;return t.nodeType===1?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},ne=function(t,e){var n="";try{for(;t&&t.nodeType!==9;){var r=t,i=r.id?"#"+r.id:Et(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(e||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;t=r.parentNode}}catch{}return n},Le=-1,vt=function(){return Le},U=function(t){addEventListener("pageshow",(function(e){e.persisted&&(Le=e.timeStamp,t(e))}),!0)},re=function(){var t=z();return t&&t.activationStart||0},S=function(t,e){var n=z(),r="navigate";return vt()>=0?r="back-forward-cache":n&&(document.prerendering||re()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:t,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},R=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(i){Promise.resolve().then((function(){e(i.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch{}},b=function(t,e,n,r){var i,s;return function(o){e.value>=0&&(o||r)&&((s=e.value-(i||0))||i===void 0)&&(i=e.value,e.delta=s,e.rating=(function(a,c){return a>c[1]?"poor":a>c[0]?"needs-improvement":"good"})(e.value,n),t(e))}},ie=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},V=function(t){document.addEventListener("visibilitychange",(function(){document.visibilityState==="hidden"&&t()}))},ae=function(t){var e=!1;return function(){e||(t(),e=!0)}},y=-1,ge=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},x=function(t){document.visibilityState==="hidden"&&y>-1&&(y=t.type==="visibilitychange"?t.timeStamp:0,_t())},me=function(){addEventListener("visibilitychange",x,!0),addEventListener("prerenderingchange",x,!0)},_t=function(){removeEventListener("visibilitychange",x,!0),removeEventListener("prerenderingchange",x,!0)},Oe=function(){return y<0&&(y=ge(),me(),U((function(){setTimeout((function(){y=ge(),me()}),0)}))),{get firstHiddenTime(){return y}}},oe=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},he=[1800,3e3],It=function(t,e){e=e||{},oe((function(){var n,r=Oe(),i=S("FCP"),s=R("paint",(function(o){o.forEach((function(a){a.name==="first-contentful-paint"&&(s.disconnect(),a.startTime<r.firstHiddenTime&&(i.value=Math.max(a.startTime-re(),0),i.entries.push(a),n(!0)))}))}));s&&(n=b(t,i,he,e.reportAllChanges),U((function(o){i=S("FCP"),n=b(t,i,he,e.reportAllChanges),ie((function(){i.value=performance.now()-o.timeStamp,n(!0)}))})))}))},Te=[.1,.25],St=function(t,e){(function(n,r){r=r||{},It(ae((function(){var i,s=S("CLS",0),o=0,a=[],c=function(f){f.forEach((function(l){if(!l.hadRecentInput){var h=a[0],v=a[a.length-1];o&&l.startTime-v.startTime<1e3&&l.startTime-h.startTime<5e3?(o+=l.value,a.push(l)):(o=l.value,a=[l])}})),o>s.value&&(s.value=o,s.entries=a,i())},u=R("layout-shift",c);u&&(i=b(n,s,Te,r.reportAllChanges),V((function(){c(u.takeRecords()),i(!0)})),U((function(){o=0,s=S("CLS",0),i=b(n,s,Te,r.reportAllChanges),ie((function(){return i()}))})),setTimeout(i,0))})))})((function(n){var r=(function(i){var s,o={};if(i.entries.length){var a=i.entries.reduce((function(u,f){return u&&u.value>f.value?u:f}));if(a&&a.sources&&a.sources.length){var c=(s=a.sources).find((function(u){return u.node&&u.node.nodeType===1}))||s[0];c&&(o={largestShiftTarget:ne(c.node),largestShiftTime:a.startTime,largestShiftValue:a.value,largestShiftSource:c,largestShiftEntry:a,loadState:Ce(a.startTime)})}}return Object.assign(i,{attribution:o})})(n);t(r)}),e)},Ue=0,q=1/0,F=0,bt=function(t){t.forEach((function(e){e.interactionId&&(q=Math.min(q,e.interactionId),F=Math.max(F,e.interactionId),Ue=F?(F-q)/7+1:0)}))},we=function(){return H?Ue:performance.interactionCount||0},At=function(){"interactionCount"in performance||H||(H=R("event",bt,{type:"event",buffered:!0,durationThreshold:0}))},E=[],P=new Map,Fe=0,yt=function(){var t=Math.min(E.length-1,Math.floor((we()-Fe)/50));return E[t]},ke=[],Mt=function(t){if(ke.forEach((function(i){return i(t)})),t.interactionId||t.entryType==="first-input"){var e=E[E.length-1],n=P.get(t.interactionId);if(n||E.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};P.set(r.id,r),E.push(r)}E.sort((function(i,s){return s.latency-i.latency})),E.length>10&&E.splice(10).forEach((function(i){return P.delete(i.id)}))}}},se=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=ae(t),document.visibilityState==="hidden"?t():(n=e(t),V(t)),n},Ee=[200,500],Nt=function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},oe((function(){var n;At();var r,i=S("INP"),s=function(a){se((function(){a.forEach(Mt);var c=yt();c&&c.latency!==i.value&&(i.value=c.latency,i.entries=c.entries,r())}))},o=R("event",s,{durationThreshold:(n=e.durationThreshold)!==null&&n!==void 0?n:40});r=b(t,i,Ee,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),V((function(){s(o.takeRecords()),r(!0)})),U((function(){Fe=we(),E.length=0,P.clear(),i=S("INP"),r=b(t,i,Ee,e.reportAllChanges)})))})))},M=[],I=[],Y=0,ce=new WeakMap,N=new Map,J=-1,Rt=function(t){M=M.concat(t),De()},De=function(){J<0&&(J=se(Pt))},Pt=function(){N.size>10&&N.forEach((function(o,a){P.has(a)||N.delete(a)}));var t=E.map((function(o){return ce.get(o.entries[0])})),e=I.length-50;I=I.filter((function(o,a){return a>=e||t.includes(o)}));for(var n=new Set,r=0;r<I.length;r++){var i=I[r];Be(i.startTime,i.processingEnd).forEach((function(o){n.add(o)}))}var s=M.length-1-50;M=M.filter((function(o,a){return o.startTime>Y&&a>s||n.has(o)})),J=-1};ke.push((function(t){t.interactionId&&t.target&&!N.has(t.interactionId)&&N.set(t.interactionId,t.target)}),(function(t){var e,n=t.startTime+t.duration;Y=Math.max(Y,t.processingEnd);for(var r=I.length-1;r>=0;r--){var i=I[r];if(Math.abs(n-i.renderTime)<=8){(e=i).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:n,entries:[t]},I.push(e)),(t.interactionId||t.entryType==="first-input")&&ce.set(t,e),De()}));var Be=function(t,e){for(var n,r=[],i=0;n=M[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},Ct=function(t,e){pe||(pe=R("long-animation-frame",Rt)),Nt((function(n){var r=(function(i){var s=i.entries[0],o=ce.get(s),a=s.processingStart,c=o.processingEnd,u=o.entries.sort((function(A,ot){return A.processingStart-ot.processingStart})),f=Be(s.startTime,c),l=i.entries.find((function(A){return A.target})),h=l&&l.target||N.get(s.interactionId),v=[s.startTime+s.duration,c].concat(f.map((function(A){return A.startTime+A.duration}))),w=Math.max.apply(Math,v),at={interactionTarget:ne(h),interactionTargetElement:h,interactionType:s.name.startsWith("key")?"keyboard":"pointer",interactionTime:s.startTime,nextPaintTime:w,processedEventEntries:u,longAnimationFrameEntries:f,inputDelay:a-s.startTime,processingDuration:c-a,presentationDelay:Math.max(w-c,0),loadState:Ce(s.startTime)};return Object.assign(i,{attribution:at})})(n);t(r)}),e)},ve=[2500,4e3],$={},Lt=function(t,e){(function(n,r){r=r||{},oe((function(){var i,s=Oe(),o=S("LCP"),a=function(f){r.reportAllChanges||(f=f.slice(-1)),f.forEach((function(l){l.startTime<s.firstHiddenTime&&(o.value=Math.max(l.startTime-re(),0),o.entries=[l],i())}))},c=R("largest-contentful-paint",a);if(c){i=b(n,o,ve,r.reportAllChanges);var u=ae((function(){$[o.id]||(a(c.takeRecords()),c.disconnect(),$[o.id]=!0,i(!0))}));["keydown","click"].forEach((function(f){addEventListener(f,(function(){return se(u)}),{once:!0,capture:!0})})),V(u),U((function(f){o=S("LCP"),i=b(n,o,ve,r.reportAllChanges),ie((function(){o.value=performance.now()-f.timeStamp,$[o.id]=!0,i(!0)}))}))}}))})((function(n){var r=(function(i){var s={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:i.value};if(i.entries.length){var o=z();if(o){var a=o.activationStart||0,c=i.entries[i.entries.length-1],u=c.url&&performance.getEntriesByType("resource").filter((function(w){return w.name===c.url}))[0],f=Math.max(0,o.responseStart-a),l=Math.max(f,u?(u.requestStart||u.startTime)-a:0),h=Math.max(l,u?u.responseEnd-a:0),v=Math.max(h,c.startTime-a);s={element:ne(c.element),timeToFirstByte:f,resourceLoadDelay:l-f,resourceLoadDuration:h-l,elementRenderDelay:v-h,navigationEntry:o,lcpEntry:c},c.url&&(s.url=c.url),u&&(s.lcpResourceEntry=u)}}return Object.assign(i,{attribution:s})})(n);t(r)}),e)};const _e="@firebase/performance",Q="0.7.12";/**
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
 */const xe=Q,Ot="FB-PERF-TRACE-START",Ut="FB-PERF-TRACE-STOP",Z="FB-PERF-TRACE-MEASURE",ze="_wt_",Ve="_fp",qe="_fcp",$e="_fid",je="_lcp",wt="lcp_element",Ke="_inp",Ft="inp_interactionTarget",Ge="_cls",kt="cls_largestShiftTarget",Xe="@firebase/performance/config",We="@firebase/performance/configexpire",Dt="performance",He="Performance";/**
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
 */const Bt={"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."},p=new gt(Dt,He,Bt);/**
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
 */const _=new lt(He);_.logLevel=ft.INFO;/**
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
 */let j,Ye;class d{constructor(e){if(this.window=e,!e)throw p.create("no window");this.performance=e.performance,this.PerformanceObserver=e.PerformanceObserver,this.windowLocation=e.location,this.navigator=e.navigator,this.document=e.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=e.localStorage),e.perfMetrics&&e.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=e.perfMetrics.onFirstInputDelay),this.onLCP=Lt,this.onINP=Ct,this.onCLS=St}getUrl(){return this.windowLocation.href.split("?")[0]}mark(e){!this.performance||!this.performance.mark||this.performance.mark(e)}measure(e,n,r){!this.performance||!this.performance.measure||this.performance.measure(e,n,r)}getEntriesByType(e){return!this.performance||!this.performance.getEntriesByType?[]:this.performance.getEntriesByType(e)}getEntriesByName(e){return!this.performance||!this.performance.getEntriesByName?[]:this.performance.getEntriesByName(e)}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!fetch||!Promise||!ht()?(_.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1):Tt()?!0:(_.info("IndexedDB is not supported by current browser"),!1)}setupObserver(e,n){if(!this.PerformanceObserver)return;new this.PerformanceObserver(i=>{for(const s of i.getEntries())n(s)}).observe({entryTypes:[e]})}static getInstance(){return j===void 0&&(j=new d(Ye)),j}}function xt(t){Ye=t}/**
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
 */let Je;function zt(t){const e=t.getId();return e.then(n=>{Je=n}),e}function ue(){return Je}function Vt(t){const e=t.getToken();return e.then(n=>{}),e}/**
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
 */function Ie(t,e){const n=t.length-e.length;if(n<0||n>1)throw p.create("invalid String merger input");const r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}/**
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
 */let K;class g{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Ie("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Ie("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return K===void 0&&(K=new g),K}}/**
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
 */var C;(function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN"})(C||(C={}));const qt=["firebase_","google_","ga_"],$t=new RegExp("^[a-zA-Z]\\w*$"),jt=40,ee=100;function Kt(){const t=d.getInstance().navigator;return t?.serviceWorker?t.serviceWorker.controller?2:3:1}function Gt(){switch(d.getInstance().document.visibilityState){case"visible":return C.VISIBLE;case"hidden":return C.HIDDEN;default:return C.UNKNOWN}}function Xt(){const e=d.getInstance().navigator.connection;switch(e&&e.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}function Wt(t){return t.length===0||t.length>jt?!1:!qt.some(n=>t.startsWith(n))&&!!t.match($t)}function Ht(t){return t.length!==0&&t.length<=ee}/**
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
 */function Qe(t){const e=t.options?.appId;if(!e)throw p.create("no app id");return e}function Yt(t){const e=t.options?.projectId;if(!e)throw p.create("no project id");return e}function Jt(t){const e=t.options?.apiKey;if(!e)throw p.create("no api key");return e}/**
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
 */const Qt="0.0.1",m={loggingEnabled:!0},Zt="FIREBASE_INSTALLATIONS_AUTH";function en(t,e){const n=tn();return n?(Se(n),Promise.resolve()):an(t,e).then(Se).then(r=>nn(r),()=>{})}function tn(){const t=d.getInstance().localStorage;if(!t)return;const e=t.getItem(We);if(!e||!on(e))return;const n=t.getItem(Xe);if(n)try{return JSON.parse(n)}catch{return}}function nn(t){const e=d.getInstance().localStorage;!t||!e||(e.setItem(Xe,JSON.stringify(t)),e.setItem(We,String(Date.now()+g.getInstance().configTimeToLive*60*60*1e3)))}const rn="Could not fetch config, will use default configs";function an(t,e){return Vt(t.installations).then(n=>{const r=Yt(t.app),i=Jt(t.app),s=`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,o=new Request(s,{method:"POST",headers:{Authorization:`${Zt} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:Qe(t.app),app_version:xe,sdk_version:Qt})});return fetch(o).then(a=>{if(a.ok)return a.json();throw p.create("RC response not ok")})}).catch(()=>{_.info(rn)})}function Se(t){if(!t)return t;const e=g.getInstance(),n=t.entries||{};return n.fpr_enabled!==void 0?e.loggingEnabled=String(n.fpr_enabled)==="true":e.loggingEnabled=m.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):m.logSource&&(e.logSource=m.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:m.logEndPointUrl&&(e.logEndPointUrl=m.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:m.transportKey&&(e.transportKey=m.transportKey),n.fpr_vc_network_request_sampling_rate!==void 0?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):m.networkRequestsSamplingRate!==void 0&&(e.networkRequestsSamplingRate=m.networkRequestsSamplingRate),n.fpr_vc_trace_sampling_rate!==void 0?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):m.tracesSamplingRate!==void 0&&(e.tracesSamplingRate=m.tracesSamplingRate),n.fpr_log_max_flush_size?e.logMaxFlushSize=Number(n.fpr_log_max_flush_size):m.logMaxFlushSize&&(e.logMaxFlushSize=m.logMaxFlushSize),e.logTraceAfterSampling=be(e.tracesSamplingRate),e.logNetworkAfterSampling=be(e.networkRequestsSamplingRate),t}function on(t){return Number(t)>Date.now()}function be(t){return Math.random()<=t}/**
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
 */let le=1,G;function Ze(t){return le=2,G=G||cn(t),G}function sn(){return le===3}function cn(t){return un().then(()=>zt(t.installations)).then(e=>en(t,e)).then(()=>Ae(),()=>Ae())}function un(){const t=d.getInstance().document;return new Promise(e=>{if(t&&t.readyState!=="complete"){const n=()=>{t.readyState==="complete"&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}function Ae(){le=3}/**
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
 */const et=10*1e3,ln=5.5*1e3,fn=1e3,tt=3,dn=65536,pn=new TextEncoder;let D=tt,T=[],ye=!1;function gn(){ye||(fe(ln),ye=!0)}function fe(t){setTimeout(()=>{D<=0||(T.length>0&&mn(),fe(et))},t)}function mn(){const t=T.splice(0,fn),e=te(t);hn(e).then(()=>{D=tt}).catch(()=>{T=[...t,...T],D--,_.info(`Tries left: ${D}.`),fe(et)})}function te(t){const e=t.map(r=>({source_extension_json_proto3:r.message,event_time_ms:String(r.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:g.getInstance().logSource,log_event:e};return JSON.stringify(n)}function hn(t){const e=g.getInstance().getFlTransportFullUrl();return pn.encode(t).length<=dn&&navigator.sendBeacon&&navigator.sendBeacon(e,t)?Promise.resolve():fetch(e,{method:"POST",body:t})}function Tn(t){if(!t.eventTime||!t.message)throw p.create("invalid cc log");T=[...T,t]}function En(t){return(...e)=>{const n=t(...e);Tn({message:n,eventTime:Date.now()})}}function vn(){const t=g.getInstance().getFlTransportFullUrl();for(;T.length>0;){const e=T.splice(-g.getInstance().logMaxFlushSize),n=te(e);if(!(navigator.sendBeacon&&navigator.sendBeacon(t,n))){T=[...T,...e];break}}if(T.length>0){const e=te(T);fetch(t,{method:"POST",body:e}).catch(()=>{_.info("Failed flushing queued events.")})}}/**
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
 */let L;function nt(t,e){L||(L={send:En(Sn),flush:vn}),L.send(t,e)}function k(t){const e=g.getInstance();!e.instrumentationEnabled&&t.isAuto||!e.dataCollectionEnabled&&!t.isAuto||d.getInstance().requiredApisAvailable()&&(sn()?X(t):Ze(t.performanceController).then(()=>X(t),()=>X(t)))}function _n(){L&&L.flush()}function X(t){if(!ue())return;const e=g.getInstance();!e.loggingEnabled||!e.logTraceAfterSampling||nt(t,1)}function In(t){const e=g.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n===r||n===i||!e.loggingEnabled||!e.logNetworkAfterSampling||nt(t,0)}function Sn(t,e){return e===0?bn(t):An(t)}function bn(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:rt(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}function An(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};Object.keys(t.counters).length!==0&&(e.counters=t.counters);const n=t.getAttributes();Object.keys(n).length!==0&&(e.custom_attributes=n);const r={application_info:rt(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}function rt(t){return{google_app_id:Qe(t),app_instance_id:ue(),web_app_info:{sdk_version:xe,page_url:d.getInstance().getUrl(),service_worker_status:Kt(),visibility_state:Gt(),effective_connection_type:Xt()},application_process_state:0}}/**
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
 */function Me(t,e){const n=e;if(!n||n.responseStart===void 0)return;const r=d.getInstance().getTimeOrigin(),i=Math.floor((n.startTime+r)*1e3),s=n.responseStart?Math.floor((n.responseStart-n.startTime)*1e3):void 0,o=Math.floor((n.responseEnd-n.startTime)*1e3),a=n.name&&n.name.split("?")[0],c={performanceController:t,url:a,responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:s,timeToResponseCompletedUs:o};In(c)}/**
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
 */const yn=100,Mn="_",Nn=[Ve,qe,$e,je,Ge,Ke];function Rn(t,e){return t.length===0||t.length>yn?!1:e&&e.startsWith(ze)&&Nn.indexOf(t)>-1||!t.startsWith(Mn)}function Pn(t){const e=Math.floor(t);return e<t&&_.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}/**
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
 */class O{constructor(e,n,r=!1,i){this.performanceController=e,this.name=n,this.isAuto=r,this.state=1,this.customAttributes={},this.counters={},this.api=d.getInstance(),this.randomId=Math.floor(Math.random()*1e6),this.isAuto||(this.traceStartMark=`${Ot}-${this.randomId}-${this.name}`,this.traceStopMark=`${Ut}-${this.randomId}-${this.name}`,this.traceMeasure=i||`${Z}-${this.randomId}-${this.name}`,i&&this.calculateTraceMetrics())}start(){if(this.state!==1)throw p.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(this.state!==2)throw p.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),k(this)}record(e,n,r){if(e<=0)throw p.create("nonpositive trace startTime",{traceName:this.name});if(n<=0)throw p.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(n*1e3),this.startTimeUs=Math.floor(e*1e3),r&&r.attributes&&(this.customAttributes={...r.attributes}),r&&r.metrics)for(const i of Object.keys(r.metrics))isNaN(Number(r.metrics[i]))||(this.counters[i]=Math.floor(Number(r.metrics[i])));k(this)}incrementMetric(e,n=1){this.counters[e]===void 0?this.putMetric(e,n):this.putMetric(e,this.counters[e]+n)}putMetric(e,n){if(Rn(e,this.name))this.counters[e]=Pn(n??0);else throw p.create("invalid custom metric name",{customMetricName:e})}getMetric(e){return this.counters[e]||0}putAttribute(e,n){const r=Wt(e),i=Ht(n);if(r&&i){this.customAttributes[e]=n;return}if(!r)throw p.create("invalid attribute name",{attributeName:e});if(!i)throw p.create("invalid attribute value",{attributeValue:n})}getAttribute(e){return this.customAttributes[e]}removeAttribute(e){this.customAttributes[e]!==void 0&&delete this.customAttributes[e]}getAttributes(){return{...this.customAttributes}}setStartTime(e){this.startTimeUs=e}setDuration(e){this.durationUs=e}calculateTraceMetrics(){const e=this.api.getEntriesByName(this.traceMeasure),n=e&&e[0];n&&(this.durationUs=Math.floor(n.duration*1e3),this.startTimeUs=Math.floor((n.startTime+this.api.getTimeOrigin())*1e3))}static createOobTrace(e,n,r,i,s){const o=d.getInstance().getUrl();if(!o)return;const a=new O(e,ze+o,!0),c=Math.floor(d.getInstance().getTimeOrigin()*1e3);a.setStartTime(c),n&&n[0]&&(a.setDuration(Math.floor(n[0].duration*1e3)),a.putMetric("domInteractive",Math.floor(n[0].domInteractive*1e3)),a.putMetric("domContentLoadedEventEnd",Math.floor(n[0].domContentLoadedEventEnd*1e3)),a.putMetric("loadEventEnd",Math.floor(n[0].loadEventEnd*1e3)));const u="first-paint",f="first-contentful-paint";if(r){const l=r.find(v=>v.name===u);l&&l.startTime&&a.putMetric(Ve,Math.floor(l.startTime*1e3));const h=r.find(v=>v.name===f);h&&h.startTime&&a.putMetric(qe,Math.floor(h.startTime*1e3)),s&&a.putMetric($e,Math.floor(s*1e3))}this.addWebVitalMetric(a,je,wt,i.lcp),this.addWebVitalMetric(a,Ge,kt,i.cls),this.addWebVitalMetric(a,Ke,Ft,i.inp),k(a),_n()}static addWebVitalMetric(e,n,r,i){i&&(e.putMetric(n,Math.floor(i.value*1e3)),i.elementAttribution&&(i.elementAttribution.length>ee?e.putAttribute(r,i.elementAttribution.substring(0,ee)):e.putAttribute(r,i.elementAttribution)))}static createUserTimingTrace(e,n){const r=new O(e,n,!1,n);k(r)}}/**
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
 */let B={},Ne=!1,it;function Re(t){ue()&&(setTimeout(()=>Ln(t),0),setTimeout(()=>Cn(t),0),setTimeout(()=>On(t),0))}function Cn(t){const e=d.getInstance(),n=e.getEntriesByType("resource");for(const r of n)Me(t,r);e.setupObserver("resource",r=>Me(t,r))}function Ln(t){const e=d.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>W(t)):e.document.addEventListener("unload",()=>W(t)),e.document.addEventListener("visibilitychange",()=>{e.document.visibilityState==="hidden"&&W(t)}),e.onFirstInputDelay&&e.onFirstInputDelay(n=>{it=n}),e.onLCP(n=>{B.lcp={value:n.value,elementAttribution:n.attribution?.element}}),e.onCLS(n=>{B.cls={value:n.value,elementAttribution:n.attribution?.largestShiftTarget}}),e.onINP(n=>{B.inp={value:n.value,elementAttribution:n.attribution?.interactionTarget}})}function On(t){const e=d.getInstance(),n=e.getEntriesByType("measure");for(const r of n)Pe(t,r);e.setupObserver("measure",r=>Pe(t,r))}function Pe(t,e){const n=e.name;n.substring(0,Z.length)!==Z&&O.createUserTimingTrace(t,n)}function W(t){if(!Ne){Ne=!0;const e=d.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");setTimeout(()=>{O.createOobTrace(t,n,r,B,it)},0)}}/**
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
 */class Un{constructor(e,n){this.app=e,this.installations=n,this.initialized=!1}_init(e){this.initialized||(e?.dataCollectionEnabled!==void 0&&(this.dataCollectionEnabled=e.dataCollectionEnabled),e?.instrumentationEnabled!==void 0&&(this.instrumentationEnabled=e.instrumentationEnabled),d.getInstance().requiredApisAvailable()?mt().then(n=>{n&&(gn(),Ze(this).then(()=>Re(this),()=>Re(this)),this.initialized=!0)}).catch(n=>{_.info(`Environment doesn't support IndexedDB: ${n}`)}):_.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(e){g.getInstance().instrumentationEnabled=e}get instrumentationEnabled(){return g.getInstance().instrumentationEnabled}set dataCollectionEnabled(e){g.getInstance().dataCollectionEnabled=e}get dataCollectionEnabled(){return g.getInstance().dataCollectionEnabled}}const wn="[DEFAULT]";function zn(t=ut()){return t=st(t),ct(t,"performance").getImmediate()}const Fn=(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if(n.name!==wn)throw p.create("FB not default");if(typeof window>"u")throw p.create("no window");xt(window);const i=new Un(n,r);return i._init(e),i};function kn(){dt(new pt("performance",Fn,"PUBLIC")),de(_e,Q),de(_e,Q,"esm2020")}kn();export{zn as getPerformance};
