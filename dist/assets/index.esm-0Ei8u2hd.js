import{A as t,_ as e,B as n,L as r,K as i,D as a,F as o,H as s,E as c,z as u,x as l,y as f}from"./vendor-firebase-C8FSu06l.js";import"./index.esm-rbfbV5T2.js";var d,m,p=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},g=function(t){if("loading"===document.readyState)return"loading";var e=p();if(e){if(t<e.domInteractive)return"loading";if(0===e.domContentLoadedEventStart||t<e.domContentLoadedEventStart)return"dom-interactive";if(0===e.domComplete||t<e.domComplete)return"dom-content-loaded"}return"complete"},h=function(t){var e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},v=function(t,e){var n="";try{for(;t&&9!==t.nodeType;){var r=t,i=r.id?"#"+r.id:h(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(e||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;t=r.parentNode}}catch(a){}return n},b=-1,T=function(t){addEventListener("pageshow",function(e){e.persisted&&(b=e.timeStamp,t(e))},!0)},y=function(){var t=p();return t&&t.activationStart||0},_=function(t,e){var n=p(),r="navigate";return b>=0?r="back-forward-cache":n&&(document.prerendering||y()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},E=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver(function(t){Promise.resolve().then(function(){e(t.getEntries())})});return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(i){}},S=function(t,e,n,r){var i,a;return function(o){var s,c;e.value>=0&&(o||r)&&((a=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=a,e.rating=(s=e.value)>(c=n)[1]?"poor":s>c[0]?"needs-improvement":"good",t(e))}},w=function(t){requestAnimationFrame(function(){return requestAnimationFrame(function(){return t()})})},I=function(t){document.addEventListener("visibilitychange",function(){"hidden"===document.visibilityState&&t()})},M=function(t){var e=!1;return function(){e||(t(),e=!0)}},A=-1,k=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},C=function(t){"hidden"===document.visibilityState&&A>-1&&(A="visibilitychange"===t.type?t.timeStamp:0,P())},N=function(){addEventListener("visibilitychange",C,!0),addEventListener("prerenderingchange",C,!0)},P=function(){removeEventListener("visibilitychange",C,!0),removeEventListener("prerenderingchange",C,!0)},L=function(){return A<0&&(A=k(),N(),T(function(){setTimeout(function(){A=k(),N()},0)})),{get firstHiddenTime(){return A}}},R=function(t){document.prerendering?addEventListener("prerenderingchange",function(){return t()},!0):t()},F=[1800,3e3],O=[.1,.25],U=function(t,e){var n,r;n=function(e){var n=function(t){var e,n={};if(t.entries.length){var r=t.entries.reduce(function(t,e){return t&&t.value>e.value?t:e});if(r&&r.sources&&r.sources.length){var i=(e=r.sources).find(function(t){return t.node&&1===t.node.nodeType})||e[0];i&&(n={largestShiftTarget:v(i.node),largestShiftTime:r.startTime,largestShiftValue:r.value,largestShiftSource:i,largestShiftEntry:r,loadState:g(r.startTime)})}}return Object.assign(t,{attribution:n})}(e);t(n)},r=(r=e)||{},function(t,e){e=e||{},R(function(){var n,r=L(),i=_("FCP"),a=E("paint",function(t){t.forEach(function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-y(),0),i.entries.push(t),n(!0)))})});a&&(n=S(t,i,F,e.reportAllChanges),T(function(r){i=_("FCP"),n=S(t,i,F,e.reportAllChanges),w(function(){i.value=performance.now()-r.timeStamp,n(!0)})}))})}(M(function(){var t,e=_("CLS",0),i=0,a=[],o=function(n){n.forEach(function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];i&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(i+=t.value,a.push(t)):(i=t.value,a=[t])}}),i>e.value&&(e.value=i,e.entries=a,t())},s=E("layout-shift",o);s&&(t=S(n,e,O,r.reportAllChanges),I(function(){o(s.takeRecords()),t(!0)}),T(function(){i=0,e=_("CLS",0),t=S(n,e,O,r.reportAllChanges),w(function(){return t()})}),setTimeout(t,0))}))},B=0,D=1/0,x=0,$=function(t){t.forEach(function(t){t.interactionId&&(D=Math.min(D,t.interactionId),x=Math.max(x,t.interactionId),B=x?(x-D)/7+1:0)})},q=function(){return d?B:performance.interactionCount||0},z=[],j=new Map,W=0,V=[],K=function(t){if(V.forEach(function(e){return e(t)}),t.interactionId||"first-input"===t.entryType){var e=z[z.length-1],n=j.get(t.interactionId);if(n||z.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};j.set(r.id,r),z.push(r)}z.sort(function(t,e){return e.latency-t.latency}),z.length>10&&z.splice(10).forEach(function(t){return j.delete(t.id)})}}},H=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=M(t),"hidden"===document.visibilityState?t():(n=e(t),I(t)),n},J=[200,500],G=function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},R(function(){var n;"interactionCount"in performance||d||(d=E("event",$,{type:"event",buffered:!0,durationThreshold:0}));var r,i=_("INP"),a=function(t){H(function(){t.forEach(K);var e=function(){var t=Math.min(z.length-1,Math.floor((q()-W)/50));return z[t]}();e&&e.latency!==i.value&&(i.value=e.latency,i.entries=e.entries,r())})},o=E("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});r=S(t,i,J,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),I(function(){a(o.takeRecords()),r(!0)}),T(function(){W=q(),z.length=0,j.clear(),i=_("INP"),r=S(t,i,J,e.reportAllChanges)}))}))},X=[],Z=[],Q=0,Y=new WeakMap,tt=new Map,et=-1,nt=function(t){X=X.concat(t),rt()},rt=function(){et<0&&(et=H(it))},it=function(){tt.size>10&&tt.forEach(function(t,e){j.has(e)||tt.delete(e)});var t=z.map(function(t){return Y.get(t.entries[0])}),e=Z.length-50;Z=Z.filter(function(n,r){return r>=e||t.includes(n)});for(var n=new Set,r=0;r<Z.length;r++){var i=Z[r];at(i.startTime,i.processingEnd).forEach(function(t){n.add(t)})}var a=X.length-1-50;X=X.filter(function(t,e){return t.startTime>Q&&e>a||n.has(t)}),et=-1};V.push(function(t){t.interactionId&&t.target&&!tt.has(t.interactionId)&&tt.set(t.interactionId,t.target)},function(t){var e,n=t.startTime+t.duration;Q=Math.max(Q,t.processingEnd);for(var r=Z.length-1;r>=0;r--){var i=Z[r];if(Math.abs(n-i.renderTime)<=8){(e=i).startTime=Math.min(t.startTime,e.startTime),e.processingStart=Math.min(t.processingStart,e.processingStart),e.processingEnd=Math.max(t.processingEnd,e.processingEnd),e.entries.push(t);break}}e||(e={startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,renderTime:n,entries:[t]},Z.push(e)),(t.interactionId||"first-input"===t.entryType)&&Y.set(t,e),rt()});var at=function(t,e){for(var n,r=[],i=0;n=X[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},ot=function(t,e){m||(m=E("long-animation-frame",nt)),G(function(e){var n,r,i,a,o,s,c,u,l,f,d,m,p=(r=(n=e).entries[0],i=Y.get(r),a=r.processingStart,o=i.processingEnd,s=i.entries.sort(function(t,e){return t.processingStart-e.processingStart}),c=at(r.startTime,o),u=n.entries.find(function(t){return t.target}),l=u&&u.target||tt.get(r.interactionId),f=[r.startTime+r.duration,o].concat(c.map(function(t){return t.startTime+t.duration})),d=Math.max.apply(Math,f),m={interactionTarget:v(l),interactionTargetElement:l,interactionType:r.name.startsWith("key")?"keyboard":"pointer",interactionTime:r.startTime,nextPaintTime:d,processedEventEntries:s,longAnimationFrameEntries:c,inputDelay:a-r.startTime,processingDuration:o-a,presentationDelay:Math.max(d-o,0),loadState:g(r.startTime)},Object.assign(n,{attribution:m}));t(p)},e)},st=[2500,4e3],ct={},ut=function(t,e){var n,r;n=function(e){var n=function(t){var e={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:t.value};if(t.entries.length){var n=p();if(n){var r=n.activationStart||0,i=t.entries[t.entries.length-1],a=i.url&&performance.getEntriesByType("resource").filter(function(t){return t.name===i.url})[0],o=Math.max(0,n.responseStart-r),s=Math.max(o,a?(a.requestStart||a.startTime)-r:0),c=Math.max(s,a?a.responseEnd-r:0),u=Math.max(c,i.startTime-r);e={element:v(i.element),timeToFirstByte:o,resourceLoadDelay:s-o,resourceLoadDuration:c-s,elementRenderDelay:u-c,navigationEntry:n,lcpEntry:i},i.url&&(e.url=i.url),a&&(e.lcpResourceEntry=a)}}return Object.assign(t,{attribution:e})}(e);t(n)},r=(r=e)||{},R(function(){var t,e=L(),i=_("LCP"),a=function(n){r.reportAllChanges||(n=n.slice(-1)),n.forEach(function(n){n.startTime<e.firstHiddenTime&&(i.value=Math.max(n.startTime-y(),0),i.entries=[n],t())})},o=E("largest-contentful-paint",a);if(o){t=S(n,i,st,r.reportAllChanges);var s=M(function(){ct[i.id]||(a(o.takeRecords()),o.disconnect(),ct[i.id]=!0,t(!0))});["keydown","click"].forEach(function(t){addEventListener(t,function(){return H(s)},{once:!0,capture:!0})}),I(s),T(function(e){i=_("LCP"),t=S(n,i,st,r.reportAllChanges),w(function(){i.value=performance.now()-e.timeStamp,ct[i.id]=!0,t(!0)})})}})};const lt="@firebase/performance",ft="0.7.12",dt=ft,mt="FB-PERF-TRACE-MEASURE",pt="_wt_",gt="_fcp",ht="_fid",vt="_lcp",bt="_inp",Tt="_cls",yt="@firebase/performance/config",_t="@firebase/performance/configexpire",Et="Performance",St=new c("performance",Et,{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","nonpositive trace startTime":"Trace {$traceName} startTime should be positive.","nonpositive trace duration":"Trace {$traceName} duration should be positive.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalid custom metric name":"Custom metric name {$customMetricName} is invalid","invalid String merger input":"Input for String merger is invalid, contact support team to resolve.","already initialized":"initializePerformance() has already been called with different options. To avoid this error, call initializePerformance() with the same options as when it was originally called, or call getPerformance() to return the already initialized instance."}),wt=new r(Et);
/**
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
 */
let It,Mt,At,kt;wt.logLevel=i.INFO;class Ct{constructor(t){if(this.window=t,!t)throw St.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay),this.onLCP=ut,this.onINP=ot,this.onCLS=U}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return fetch&&Promise&&l()?!!f()||(wt.info("IndexedDB is not supported by current browser"),!1):(wt.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled."),!1)}setupObserver(t,e){if(!this.PerformanceObserver)return;new this.PerformanceObserver(t=>{for(const n of t.getEntries())e(n)}).observe({entryTypes:[t]})}static getInstance(){return void 0===It&&(It=new Ct(Mt)),It}}function Nt(){return At}
/**
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
 */
function Pt(t,e){const n=t.length-e.length;if(n<0||n>1)throw St.create("invalid String merger input");const r=[];for(let i=0;i<t.length;i++)r.push(t.charAt(i)),e.length>i&&r.push(e.charAt(i));return r.join("")}
/**
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
 */class Lt{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.flTransportEndpointUrl=Pt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),this.transportKey=Pt("AzSC8r6ReiGqFMyfvgow","Iayx0u-XT3vksVM-pIV"),this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12,this.logMaxFlushSize=40}getFlTransportFullUrl(){return this.flTransportEndpointUrl.concat("?key=",this.transportKey)}static getInstance(){return void 0===kt&&(kt=new Lt),kt}}
/**
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
 */var Rt,Ft;(Ft=Rt||(Rt={}))[Ft.UNKNOWN=0]="UNKNOWN",Ft[Ft.VISIBLE=1]="VISIBLE",Ft[Ft.HIDDEN=2]="HIDDEN";const Ot=["firebase_","google_","ga_"],Ut=new RegExp("^[a-zA-Z]\\w*$");function Bt(){const t=Ct.getInstance().navigator;return t?.serviceWorker?t.serviceWorker.controller?2:3:1}function Dt(){switch(Ct.getInstance().document.visibilityState){case"visible":return Rt.VISIBLE;case"hidden":return Rt.HIDDEN;default:return Rt.UNKNOWN}}function xt(){const t=Ct.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
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
 */
function $t(t){const e=t.options?.appId;if(!e)throw St.create("no app id");return e}
/**
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
 */
const qt="0.0.1",zt={loggingEnabled:!0},jt="FIREBASE_INSTALLATIONS_AUTH";function Wt(t,e){const n=function(){const t=Ct.getInstance().localStorage;if(!t)return;const e=t.getItem(_t);if(!(e&&(n=e,Number(n)>Date.now())))return;var n;const r=t.getItem(yt);if(!r)return;try{return JSON.parse(r)}catch{return}}();return n?(Kt(n),Promise.resolve()):function(t,e){return function(t){const e=t.getToken();return e.then(t=>{}),e}(t.installations).then(n=>{const r=function(t){const e=t.options?.projectId;if(!e)throw St.create("no project id");return e}(t.app),i=function(t){const e=t.options?.apiKey;if(!e)throw St.create("no api key");return e}(t.app),a=new Request(`https://firebaseremoteconfig.googleapis.com/v1/projects/${r}/namespaces/fireperf:fetch?key=${i}`,{method:"POST",headers:{Authorization:`${jt} ${n}`},body:JSON.stringify({app_instance_id:e,app_instance_id_token:n,app_id:$t(t.app),app_version:dt,sdk_version:qt})});return fetch(a).then(t=>{if(t.ok)return t.json();throw St.create("RC response not ok")})}).catch(()=>{wt.info(Vt)})}(t,e).then(Kt).then(t=>function(t){const e=Ct.getInstance().localStorage;if(!t||!e)return;e.setItem(yt,JSON.stringify(t)),e.setItem(_t,String(Date.now()+60*Lt.getInstance().configTimeToLive*60*1e3))}(t),()=>{})}const Vt="Could not fetch config, will use default configs";function Kt(t){if(!t)return t;const e=Lt.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=zt.loggingEnabled,n.fpr_log_source?e.logSource=Number(n.fpr_log_source):zt.logSource&&(e.logSource=zt.logSource),n.fpr_log_endpoint_url?e.logEndPointUrl=n.fpr_log_endpoint_url:zt.logEndPointUrl&&(e.logEndPointUrl=zt.logEndPointUrl),n.fpr_log_transport_key?e.transportKey=n.fpr_log_transport_key:zt.transportKey&&(e.transportKey=zt.transportKey),void 0!==n.fpr_vc_network_request_sampling_rate?e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate):void 0!==zt.networkRequestsSamplingRate&&(e.networkRequestsSamplingRate=zt.networkRequestsSamplingRate),void 0!==n.fpr_vc_trace_sampling_rate?e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate):void 0!==zt.tracesSamplingRate&&(e.tracesSamplingRate=zt.tracesSamplingRate),n.fpr_log_max_flush_size?e.logMaxFlushSize=Number(n.fpr_log_max_flush_size):zt.logMaxFlushSize&&(e.logMaxFlushSize=zt.logMaxFlushSize),e.logTraceAfterSampling=Ht(e.tracesSamplingRate),e.logNetworkAfterSampling=Ht(e.networkRequestsSamplingRate),t}function Ht(t){return Math.random()<=t}
/**
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
 */let Jt,Gt=1;function Xt(t){return Gt=2,Jt=Jt||function(t){return function(){const t=Ct.getInstance().document;return new Promise(e=>{if(t&&"complete"!==t.readyState){const n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}().then(()=>function(t){const e=t.getId();return e.then(t=>{At=t}),e}(t.installations)).then(e=>Wt(t,e)).then(()=>Zt(),()=>Zt())}(t),Jt}function Zt(){Gt=3}
/**
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
 */const Qt=1e4,Yt=new TextEncoder;let te,ee=3,ne=[],re=!1;function ie(t){setTimeout(()=>{ee<=0||(ne.length>0&&function(){const t=ne.splice(0,1e3);(function(t){const e=Lt.getInstance().getFlTransportFullUrl();return Yt.encode(t).length<=65536&&navigator.sendBeacon&&navigator.sendBeacon(e,t)?Promise.resolve():fetch(e,{method:"POST",body:t})})(ae(t)).then(()=>{ee=3}).catch(()=>{ne=[...t,...ne],ee--,wt.info(`Tries left: ${ee}.`),ie(Qt)})}(),ie(Qt))},t)}function ae(t){const e=t.map(t=>({source_extension_json_proto3:t.message,event_time_ms:String(t.eventTime)})),n={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Lt.getInstance().logSource,log_event:e};return JSON.stringify(n)}function oe(t){return(...e)=>{!function(t){if(!t.eventTime||!t.message)throw St.create("invalid cc log");ne=[...ne,t]}({message:t(...e),eventTime:Date.now()})}}function se(){const t=Lt.getInstance().getFlTransportFullUrl();for(;ne.length>0;){const e=ne.splice(-Lt.getInstance().logMaxFlushSize),n=ae(e);if(!navigator.sendBeacon||!navigator.sendBeacon(t,n)){ne=[...ne,...e];break}}if(ne.length>0){const e=ae(ne);fetch(t,{method:"POST",body:e}).catch(()=>{wt.info("Failed flushing queued events.")})}}
/**
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
 */function ce(t,e){te||(te={send:oe(fe),flush:se}),te.send(t,e)}function ue(t){const e=Lt.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&Ct.getInstance().requiredApisAvailable()&&(3===Gt?le(t):Xt(t.performanceController).then(()=>le(t),()=>le(t)))}function le(t){if(!Nt())return;const e=Lt.getInstance();e.loggingEnabled&&e.logTraceAfterSampling&&ce(t,1)}function fe(t,e){return 0===e?function(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:de(t.performanceController.app),network_request_metric:e};return JSON.stringify(n)}(t):function(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=t.counters);const n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=n);const r={application_info:de(t.performanceController.app),trace_metric:e};return JSON.stringify(r)}(t)}function de(t){return{google_app_id:$t(t),app_instance_id:Nt(),web_app_info:{sdk_version:dt,page_url:Ct.getInstance().getUrl(),service_worker_status:Bt(),visibility_state:Dt(),effective_connection_type:xt()},application_process_state:0}}
/**
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
 */function me(t,e){const n=e;if(!n||void 0===n.responseStart)return;const r=Ct.getInstance().getTimeOrigin(),i=Math.floor(1e3*(n.startTime+r)),a=n.responseStart?Math.floor(1e3*(n.responseStart-n.startTime)):void 0,o=Math.floor(1e3*(n.responseEnd-n.startTime));!function(t){const e=Lt.getInstance();if(!e.instrumentationEnabled)return;const n=t.url,r=e.logEndPointUrl.split("?")[0],i=e.flTransportEndpointUrl.split("?")[0];n!==r&&n!==i&&e.loggingEnabled&&e.logNetworkAfterSampling&&ce(t,0)}({performanceController:t,url:n.name&&n.name.split("?")[0],responsePayloadBytes:n.transferSize,startTimeUs:i,timeToResponseInitiatedUs:a,timeToResponseCompletedUs:o})}
/**
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
 */const pe=["_fp",gt,ht,vt,Tt,bt];
/**
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
 */
class ge{constructor(t,e,n=!1,r){this.performanceController=t,this.name=e,this.isAuto=n,this.state=1,this.customAttributes={},this.counters={},this.api=Ct.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`FB-PERF-TRACE-START-${this.randomId}-${this.name}`,this.traceStopMark=`FB-PERF-TRACE-STOP-${this.randomId}-${this.name}`,this.traceMeasure=r||`${mt}-${this.randomId}-${this.name}`,r&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw St.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw St.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),ue(this)}record(t,e,n){if(t<=0)throw St.create("nonpositive trace startTime",{traceName:this.name});if(e<=0)throw St.create("nonpositive trace duration",{traceName:this.name});if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes={...n.attributes}),n&&n.metrics)for(const r of Object.keys(n.metrics))isNaN(Number(n.metrics[r]))||(this.counters[r]=Math.floor(Number(n.metrics[r])));ue(this)}incrementMetric(t,e=1){void 0===this.counters[t]?this.putMetric(t,e):this.putMetric(t,this.counters[t]+e)}putMetric(t,e){if(n=t,r=this.name,0===n.length||n.length>100||!(r&&r.startsWith(pt)&&pe.indexOf(n)>-1)&&n.startsWith("_"))throw St.create("invalid custom metric name",{customMetricName:t});var n,r;this.counters[t]=function(t){const e=Math.floor(t);return e<t&&wt.info(`Metric value should be an Integer, setting the value as : ${e}.`),e}(e??0)}getMetric(t){return this.counters[t]||0}putAttribute(t,e){const n=!(0===(r=t).length||r.length>40||Ot.some(t=>r.startsWith(t))||!r.match(Ut));var r;const i=function(t){return 0!==t.length&&t.length<=100}(e);if(n&&i)this.customAttributes[t]=e;else{if(!n)throw St.create("invalid attribute name",{attributeName:t});if(!i)throw St.create("invalid attribute value",{attributeValue:e})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return{...this.customAttributes}}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,e,n,r,i){const a=Ct.getInstance().getUrl();if(!a)return;const o=new ge(t,pt+a,!0),s=Math.floor(1e3*Ct.getInstance().getTimeOrigin());o.setStartTime(s),e&&e[0]&&(o.setDuration(Math.floor(1e3*e[0].duration)),o.putMetric("domInteractive",Math.floor(1e3*e[0].domInteractive)),o.putMetric("domContentLoadedEventEnd",Math.floor(1e3*e[0].domContentLoadedEventEnd)),o.putMetric("loadEventEnd",Math.floor(1e3*e[0].loadEventEnd)));if(n){const t=n.find(t=>"first-paint"===t.name);t&&t.startTime&&o.putMetric("_fp",Math.floor(1e3*t.startTime));const e=n.find(t=>"first-contentful-paint"===t.name);e&&e.startTime&&o.putMetric(gt,Math.floor(1e3*e.startTime)),i&&o.putMetric(ht,Math.floor(1e3*i))}this.addWebVitalMetric(o,vt,"lcp_element",r.lcp),this.addWebVitalMetric(o,Tt,"cls_largestShiftTarget",r.cls),this.addWebVitalMetric(o,bt,"inp_interactionTarget",r.inp),ue(o),te&&te.flush()}static addWebVitalMetric(t,e,n,r){r&&(t.putMetric(e,Math.floor(1e3*r.value)),r.elementAttribution&&(r.elementAttribution.length>100?t.putAttribute(n,r.elementAttribution.substring(0,100)):t.putAttribute(n,r.elementAttribution)))}static createUserTimingTrace(t,e){ue(new ge(t,e,!1,e))}}
/**
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
 */let he,ve={},be=!1;function Te(t){Nt()&&(setTimeout(()=>function(t){const e=Ct.getInstance();"onpagehide"in window?e.document.addEventListener("pagehide",()=>_e(t)):e.document.addEventListener("unload",()=>_e(t));e.document.addEventListener("visibilitychange",()=>{"hidden"===e.document.visibilityState&&_e(t)}),e.onFirstInputDelay&&e.onFirstInputDelay(t=>{he=t});e.onLCP(t=>{ve.lcp={value:t.value,elementAttribution:t.attribution?.element}}),e.onCLS(t=>{ve.cls={value:t.value,elementAttribution:t.attribution?.largestShiftTarget}}),e.onINP(t=>{ve.inp={value:t.value,elementAttribution:t.attribution?.interactionTarget}})}(t),0),setTimeout(()=>function(t){const e=Ct.getInstance(),n=e.getEntriesByType("resource");for(const r of n)me(t,r);e.setupObserver("resource",e=>me(t,e))}(t),0),setTimeout(()=>function(t){const e=Ct.getInstance(),n=e.getEntriesByType("measure");for(const r of n)ye(t,r);e.setupObserver("measure",e=>ye(t,e))}(t),0))}function ye(t,e){const n=e.name;n.substring(0,21)!==mt&&ge.createUserTimingTrace(t,n)}function _e(t){if(!be){be=!0;const e=Ct.getInstance(),n=e.getEntriesByType("navigation"),r=e.getEntriesByType("paint");setTimeout(()=>{ge.createOobTrace(t,n,r,ve,he)},0)}}
/**
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
 */class Ee{constructor(t,e){this.app=t,this.installations=e,this.initialized=!1}_init(t){this.initialized||(void 0!==t?.dataCollectionEnabled&&(this.dataCollectionEnabled=t.dataCollectionEnabled),void 0!==t?.instrumentationEnabled&&(this.instrumentationEnabled=t.instrumentationEnabled),Ct.getInstance().requiredApisAvailable()?u().then(t=>{t&&(re||(ie(5500),re=!0),Xt(this).then(()=>Te(this),()=>Te(this)),this.initialized=!0)}).catch(t=>{wt.info(`Environment doesn't support IndexedDB: ${t}`)}):wt.info('Firebase Performance cannot start if the browser does not support "Fetch" and "Promise", or cookies are disabled.'))}set instrumentationEnabled(t){Lt.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return Lt.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){Lt.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return Lt.getInstance().dataCollectionEnabled}}function Se(r=n()){r=t(r);return e(r,"performance").getImmediate()}a(new o("performance",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();if("[DEFAULT]"!==n.name)throw St.create("FB not default");if("undefined"==typeof window)throw St.create("no window");var i;
/**
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
 */i=window,Mt=i;const a=new Ee(n,r);return a._init(e),a},"PUBLIC")),s(lt,ft),s(lt,ft,"esm2020");export{Se as getPerformance};
