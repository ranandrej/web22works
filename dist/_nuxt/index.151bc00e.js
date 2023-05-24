import{_ as je}from"./nuxt-link.3face6f5.js";import{a as $,o as h,b as R,p as T,e as N,f as l,q as se,r as m,c as U,k as Z,w as ee,v as te,F as re,h as ze,j as g,u as L,m as Ye,l as Ge,t as B,s as Je}from"./entry.084cb5ff.js";import{a as Ke,E as Qe,g as We,G as Ze,N as et,S as tt,F as rt,L as nt}from"./ScrollTop.1417f937.js";const at={},$e=e=>(T("data-v-b58924d2"),e=e(),N(),e),st={class:"header"},ot=$e(()=>l("h1",null,[se("Browse your favourite "),l("span",null,"Blogs")],-1)),it=$e(()=>l("p",null,"Filter Blog topics by category search",-1)),ut=[ot,it];function ct(e,t){return h(),R("section",st,ut)}const lt=$(at,[["render",ct],["__scopeId","data-v-b58924d2"]]);var oe={exports:{}},Le=function(t,n){return function(){for(var r=new Array(arguments.length),s=0;s<r.length;s++)r[s]=arguments[s];return t.apply(n,r)}};/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var ft=function(e){return e!=null&&(Ae(e)||dt(e)||!!e._isBuffer)};function Ae(e){return!!e.constructor&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function dt(e){return typeof e.readFloatLE=="function"&&typeof e.slice=="function"&&Ae(e.slice(0,0))}var pt=Le,ht=ft,S=Object.prototype.toString;function ne(e){return S.call(e)==="[object Array]"}function vt(e){return S.call(e)==="[object ArrayBuffer]"}function mt(e){return typeof FormData<"u"&&e instanceof FormData}function _t(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function yt(e){return typeof e=="string"}function wt(e){return typeof e=="number"}function Rt(e){return typeof e>"u"}function Ue(e){return e!==null&&typeof e=="object"}function Et(e){return S.call(e)==="[object Date]"}function gt(e){return S.call(e)==="[object File]"}function Ct(e){return S.call(e)==="[object Blob]"}function Te(e){return S.call(e)==="[object Function]"}function St(e){return Ue(e)&&Te(e.pipe)}function xt(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}function qt(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function bt(){return typeof navigator<"u"&&navigator.product==="ReactNative"?!1:typeof window<"u"&&typeof document<"u"}function ie(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&!ne(e)&&(e=[e]),ne(e))for(var n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function Ne(){var e={};function t(r,s){typeof e[s]=="object"&&typeof r=="object"?e[s]=Ne(e[s],r):e[s]=r}for(var n=0,a=arguments.length;n<a;n++)ie(arguments[n],t);return e}function Bt(e,t,n){return ie(t,function(r,s){n&&typeof r=="function"?e[s]=pt(r,n):e[s]=r}),e}var v={isArray:ne,isArrayBuffer:vt,isBuffer:ht,isFormData:mt,isArrayBufferView:_t,isString:yt,isNumber:wt,isObject:Ue,isUndefined:Rt,isDate:Et,isFile:gt,isBlob:Ct,isFunction:Te,isStream:St,isURLSearchParams:xt,isStandardBrowserEnv:bt,forEach:ie,merge:Ne,extend:Bt,trim:qt},$t=v,Lt=function(t,n){$t.forEach(t,function(r,s){s!==n&&s.toUpperCase()===n.toUpperCase()&&(t[n]=r,delete t[s])})},F,de;function At(){return de||(de=1,F=function(t,n,a,r,s){return t.config=n,a&&(t.code=a),t.request=r,t.response=s,t}),F}var O,pe;function De(){if(pe)return O;pe=1;var e=At();return O=function(n,a,r,s,u){var c=new Error(n);return e(c,a,r,s,u)},O}var H,he;function Ut(){if(he)return H;he=1;var e=De();return H=function(n,a,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?n(r):a(e("Request failed with status code "+r.status,r.config,null,r.request,r))},H}var k,ve;function Tt(){if(ve)return k;ve=1;var e=v;function t(n){return encodeURIComponent(n).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}return k=function(a,r,s){if(!r)return a;var u;if(s)u=s(r);else if(e.isURLSearchParams(r))u=r.toString();else{var c=[];e.forEach(r,function(f,y){f===null||typeof f>"u"||(e.isArray(f)&&(y=y+"[]"),e.isArray(f)||(f=[f]),e.forEach(f,function(d){e.isDate(d)?d=d.toISOString():e.isObject(d)&&(d=JSON.stringify(d)),c.push(t(y)+"="+t(d))}))}),u=c.join("&")}return u&&(a+=(a.indexOf("?")===-1?"?":"&")+u),a},k}var M,me;function Nt(){if(me)return M;me=1;var e=v;return M=function(n){var a={},r,s,u;return n&&e.forEach(n.split(`
`),function(o){u=o.indexOf(":"),r=e.trim(o.substr(0,u)).toLowerCase(),s=e.trim(o.substr(u+1)),r&&(a[r]=a[r]?a[r]+", "+s:s)}),a},M}var V,_e;function Dt(){if(_e)return V;_e=1;var e=v;return V=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),r;function s(u){var c=u;return n&&(a.setAttribute("href",c),c=a.href),a.setAttribute("href",c),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return r=s(window.location.href),function(c){var o=e.isString(c)?s(c):c;return o.protocol===r.protocol&&o.host===r.host}}():function(){return function(){return!0}}(),V}var X,ye;function It(){if(ye)return X;ye=1;var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function t(){this.message="String contains an invalid character"}t.prototype=new Error,t.prototype.code=5,t.prototype.name="InvalidCharacterError";function n(a){for(var r=String(a),s="",u,c,o=0,f=e;r.charAt(o|0)||(f="=",o%1);s+=f.charAt(63&u>>8-o%1*8)){if(c=r.charCodeAt(o+=3/4),c>255)throw new t;u=u<<8|c}return s}return X=n,X}var j,we;function Pt(){if(we)return j;we=1;var e=v;return j=e.isStandardBrowserEnv()?function(){return{write:function(a,r,s,u,c,o){var f=[];f.push(a+"="+encodeURIComponent(r)),e.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),e.isString(u)&&f.push("path="+u),e.isString(c)&&f.push("domain="+c),o===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(a){var r=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),j}var z,Re;function Ee(){if(Re)return z;Re=1;var e=v,t=Ut(),n=Tt(),a=Nt(),r=Dt(),s=De(),u=typeof window<"u"&&window.btoa&&window.btoa.bind(window)||It();return z=function(o){return new Promise(function(y,E){var d=o.data,x=o.headers;e.isFormData(d)&&delete x["Content-Type"];var i=new XMLHttpRequest,ce="onreadystatechange",le=!1;if(typeof window<"u"&&window.XDomainRequest&&!("withCredentials"in i)&&!r(o.url)&&(i=new window.XDomainRequest,ce="onload",le=!0,i.onprogress=function(){},i.ontimeout=function(){}),o.auth){var ke=o.auth.username||"",Me=o.auth.password||"";x.Authorization="Basic "+u(ke+":"+Me)}if(i.open(o.method.toUpperCase(),n(o.url,o.params,o.paramsSerializer),!0),i.timeout=o.timeout,i[ce]=function(){if(!(!i||i.readyState!==4&&!le)&&!(i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0))){var q="getAllResponseHeaders"in i?a(i.getAllResponseHeaders()):null,b=!o.responseType||o.responseType==="text"?i.responseText:i.response,Xe={data:b,status:i.status===1223?204:i.status,statusText:i.status===1223?"No Content":i.statusText,headers:q,config:o,request:i};t(y,E,Xe),i=null}},i.onerror=function(){E(s("Network Error",o,null,i)),i=null},i.ontimeout=function(){E(s("timeout of "+o.timeout+"ms exceeded",o,"ECONNABORTED",i)),i=null},e.isStandardBrowserEnv()){var Ve=Pt(),fe=(o.withCredentials||r(o.url))&&o.xsrfCookieName?Ve.read(o.xsrfCookieName):void 0;fe&&(x[o.xsrfHeaderName]=fe)}if("setRequestHeader"in i&&e.forEach(x,function(q,b){typeof d>"u"&&b.toLowerCase()==="content-type"?delete x[b]:i.setRequestHeader(b,q)}),o.withCredentials&&(i.withCredentials=!0),o.responseType)try{i.responseType=o.responseType}catch(w){if(o.responseType!=="json")throw w}typeof o.onDownloadProgress=="function"&&i.addEventListener("progress",o.onDownloadProgress),typeof o.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",o.onUploadProgress),o.cancelToken&&o.cancelToken.promise.then(function(q){i&&(i.abort(),E(q),i=null)}),d===void 0&&(d=null),i.send(d)})},z}var p=v,Ft=Lt,Ot={"Content-Type":"application/x-www-form-urlencoded"};function ge(e,t){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Ht(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u")&&(e=Ee()),e}var D={adapter:Ht(),transformRequest:[function(t,n){return Ft(n,"Content-Type"),p.isFormData(t)||p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t)?t:p.isArrayBufferView(t)?t.buffer:p.isURLSearchParams(t)?(ge(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):p.isObject(t)?(ge(n,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if(typeof t=="string")try{t=JSON.parse(t)}catch{}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};D.headers={common:{Accept:"application/json, text/plain, */*"}};p.forEach(["delete","get","head"],function(t){D.headers[t]={}});p.forEach(["post","put","patch"],function(t){D.headers[t]=p.merge(Ot)});var ue=D,kt=v;function I(){this.handlers=[]}I.prototype.use=function(t,n){return this.handlers.push({fulfilled:t,rejected:n}),this.handlers.length-1};I.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};I.prototype.forEach=function(t){kt.forEach(this.handlers,function(a){a!==null&&t(a)})};var Mt=I,Vt=v,Xt=function(t,n,a){return Vt.forEach(a,function(s){t=s(t,n)}),t},Y,Ce;function Ie(){return Ce||(Ce=1,Y=function(t){return!!(t&&t.__CANCEL__)}),Y}var Se=v,G=Xt,jt=Ie(),zt=ue;function J(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var Yt=function(t){J(t),t.headers=t.headers||{},t.data=G(t.data,t.headers,t.transformRequest),t.headers=Se.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),Se.forEach(["delete","get","head","post","put","patch","common"],function(r){delete t.headers[r]});var n=t.adapter||zt.adapter;return n(t).then(function(r){return J(t),r.data=G(r.data,r.headers,t.transformResponse),r},function(r){return jt(r)||(J(t),r&&r.response&&(r.response.data=G(r.response.data,r.response.headers,t.transformResponse))),Promise.reject(r)})},Gt=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)},Jt=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},Kt=ue,C=v,xe=Mt,Qt=Yt,Wt=Gt,Zt=Jt;function P(e){this.defaults=e,this.interceptors={request:new xe,response:new xe}}P.prototype.request=function(t){typeof t=="string"&&(t=C.merge({url:arguments[0]},arguments[1])),t=C.merge(Kt,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!Wt(t.url)&&(t.url=Zt(t.baseURL,t.url));var n=[Qt,void 0],a=Promise.resolve(t);for(this.interceptors.request.forEach(function(s){n.unshift(s.fulfilled,s.rejected)}),this.interceptors.response.forEach(function(s){n.push(s.fulfilled,s.rejected)});n.length;)a=a.then(n.shift(),n.shift());return a};C.forEach(["delete","get","head","options"],function(t){P.prototype[t]=function(n,a){return this.request(C.merge(a||{},{method:t,url:n}))}});C.forEach(["post","put","patch"],function(t){P.prototype[t]=function(n,a,r){return this.request(C.merge(r||{},{method:t,url:n,data:a}))}});var er=P,K,qe;function Pe(){if(qe)return K;qe=1;function e(t){this.message=t}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,K=e,K}var Q,be;function tr(){if(be)return Q;be=1;var e=Pe();function t(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(u){a=u});var r=this;n(function(u){r.reason||(r.reason=new e(u),a(r.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.source=function(){var a,r=new t(function(u){a=u});return{token:r,cancel:a}},Q=t,Q}var W,Be;function rr(){return Be||(Be=1,W=function(t){return function(a){return t.apply(null,a)}}),W}var ae=v,nr=Le,A=er,Fe=ue;function Oe(e){var t=new A(e),n=nr(A.prototype.request,t);return ae.extend(n,A.prototype,t),ae.extend(n,t),n}var _=Oe(Fe);_.Axios=A;_.create=function(t){return Oe(ae.merge(Fe,t))};_.Cancel=Pe();_.CancelToken=tr();_.isCancel=Ie();_.all=function(t){return Promise.all(t)};_.spread=rr();oe.exports=_;oe.exports.default=_;var ar=oe.exports,sr=ar;const or=Ke(sr);const ir={},ur=e=>(T("data-v-dec76dc5"),e=e(),N(),e),cr={class:"notification is-primary"},lr=ur(()=>l("p",null,"Sucess,your message is sent!",-1)),fr=[lr];function dr(e,t){return h(),R("div",cr,fr)}const pr=$(ir,[["render",dr],["__scopeId","data-v-dec76dc5"]]);const hr=e=>(T("data-v-c7aeccbf"),e=e(),N(),e),vr={class:"form box"},mr=hr(()=>l("h2",null,[l("span",null,"Contact us"),se(" if you have any questions")],-1)),_r={__name:"Contact",setup(e){const t=m(""),n=m(""),a=m(!1),r=m(!1),s=()=>{t.value!=""&&n.value!=""?or.get("https://new-email-api.onrender.com/sendmail",{params:{param1:t.value,param2:n.value}}).then((u,c)=>{console.log(u),t.value="",n.value="",c||(a.value=!0,setTimeout(()=>{a.value=!1},2500))}):(r.value=!0,setTimeout(()=>{r.value=!1},2500))};return(u,c)=>(h(),R(re,null,[a.value?(h(),U(pr,{key:0})):Z("",!0),r.value?(h(),U(Qe,{key:1})):Z("",!0),l("div",vr,[mr,ee(l("input",{type:"text",class:"input is-primary is-rounded",placeholder:"Your E-mail","onUpdate:modelValue":c[0]||(c[0]=o=>t.value=o)},null,512),[[te,t.value]]),ee(l("textarea",{name:"",id:"",cols:"30",rows:"10",class:"input is-primary",placeholder:"Your question","onUpdate:modelValue":c[1]||(c[1]=o=>n.value=o)},null,512),[[te,n.value]]),l("button",{class:"button is-primary",onClick:s},"Send")])],64))}},yr=$(_r,[["__scopeId","data-v-c7aeccbf"]]);const wr={};function Rr(e,t){return h(),R("h2",null,"No blogs found")}const Er=$(wr,[["render",Rr],["__scopeId","data-v-25f8a8b8"]]);const He=e=>(T("data-v-b64a5d17"),e=e(),N(),e),gr={key:0,class:"all"},Cr={class:"box"},Sr=He(()=>l("h4",null,"Search by category",-1)),xr={class:"search"},qr=He(()=>l("div",{class:"recent"},[l("h1",null,"Recent posts")],-1)),br={class:"blogs"},Br={class:"card"},$r={class:"card-header"},Lr=["src"],Ar={class:"card-body"},Ur={class:"tag tag-teal"},Tr={class:"user"},Nr=["src"],Dr={class:"user-info"},Ir={__name:"index",setup(e){const t=new Ze("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhmh599j51pe01un17isa6ls/master"),n=We`
{
  posts{
    id,
    title,
    description,
    category,
    datePublished,
    slug,
    content{
      html
    },
    coverPhoto{
      url
    }
    author{
      name,
      avatar{
        url
      }
    }
      
    

    }
  }
    

`,a=m([]),r=m(""),s=m({}),u=m(!1),c=m(!1);ze(async()=>{const{posts:f}=await t.request(n);console.log(f),s.value=f,console.log(s.value),u.value=!0,a.value=s.value});const o=()=>{r.value==""?a.value=s.value:a.value=s.value.filter(f=>f.category.toLowerCase()==r.value.toLowerCase()),a.value.length==0?c.value=!0:c.value=!1};return(f,y)=>{const E=je;return h(),R(re,null,[g(et),g(tt),L(u)?(h(),R("section",gr,[g(lt),l("div",Cr,[Sr,l("div",xr,[ee(l("input",{class:"input is-primary",type:"text",placeholder:"eg.Sport,Moto-sport,Technology...","onUpdate:modelValue":y[0]||(y[0]=d=>Ye(r)?r.value=d:null)},null,512),[[te,L(r),void 0,{trim:!0}]]),l("button",{class:"button is-primary",onClick:o},"Search")])]),qr,L(c)?(h(),U(Er,{key:0})):Z("",!0),l("section",br,[(h(!0),R(re,null,Ge(L(a),d=>(h(),R("div",Br,[l("div",$r,[l("img",{src:d.coverPhoto.url,alt:"rover"},null,8,Lr)]),l("div",Ar,[l("span",Ur,B(d.category),1),l("h4",null,B(d.title),1),l("p",null,B(d.description),1),g(E,{to:`/${d.slug}`,class:"button is-info is-small is-outlined"},{default:Je(()=>[se("Read more")]),_:2},1032,["to"]),l("div",Tr,[l("img",{src:d.author.avatar.url,alt:"user"},null,8,Nr),l("div",Dr,[l("h5",null,B(d.author.name),1),l("small",null,B(d.datePublished),1)])])])]))),256))]),g(yr),g(rt)])):(h(),U(nt,{key:1}))],64)}}},Hr=$(Ir,[["__scopeId","data-v-b64a5d17"]]);export{Hr as default};