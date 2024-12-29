(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const c of _.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerPolicy&&(_.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?_.credentials="include":o.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}})();var q,g,Ne,H,be,Ae,ce,Be,he,le,ue,Ie,K={},Oe=[],_t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,re=Array.isArray;function T(e,t){for(var n in t)e[n]=t[n];return e}function de(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function R(e,t,n){var r,o,_,c={};for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:c[_]=t[_];if(arguments.length>2&&(c.children=arguments.length>3?q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)c[_]===void 0&&(c[_]=e.defaultProps[_]);return j(e,c,r,o,null)}function j(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Ne,__i:-1,__u:0};return o==null&&g.vnode!=null&&g.vnode(_),_}function I(e){return e.children}function V(e,t){this.props=e,this.context=t}function B(e,t){if(t==null)return e.__?B(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?B(e):null}function We(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return We(e)}}function ae(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!te.__r++||be!==g.debounceRendering)&&((be=g.debounceRendering)||Ae)(te)}function te(){var e,t,n,r,o,_,c,l;for(H.sort(ce);e=H.shift();)e.__d&&(t=H.length,r=void 0,_=(o=(n=e).__v).__e,c=[],l=[],n.__P&&((r=T({},o)).__v=o.__v+1,g.vnode&&g.vnode(r),pe(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[_]:null,c,_??B(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,qe(c,r,l),r.__e!=_&&We(r)),H.length>t&&H.sort(ce));te.__r=0}function Ge(e,t,n,r,o,_,c,l,a,u,h){var i,s,f,v,C,b,p=r&&r.__k||Oe,m=t.length;for(a=it(n,t,p,a,m),i=0;i<m;i++)(f=n.__k[i])!=null&&(s=f.__i===-1?K:p[f.__i]||K,f.__i=i,b=pe(e,f,s,o,_,c,l,a,u,h),v=f.__e,f.ref&&s.ref!=f.ref&&(s.ref&&me(s.ref,null,f),h.push(f.ref,f.__c||v,f)),C==null&&v!=null&&(C=v),4&f.__u||s.__k===f.__k?a=je(f,a,e):typeof f.type=="function"&&b!==void 0?a=b:v&&(a=v.nextSibling),f.__u&=-7);return n.__e=C,a}function it(e,t,n,r,o){var _,c,l,a,u,h=n.length,i=h,s=0;for(e.__k=new Array(o),_=0;_<o;_++)(c=t[_])!=null&&typeof c!="boolean"&&typeof c!="function"?(a=_+s,(c=e.__k[_]=typeof c=="string"||typeof c=="number"||typeof c=="bigint"||c.constructor==String?j(null,c,null,null,null):re(c)?j(I,{children:c},null,null,null):c.constructor===void 0&&c.__b>0?j(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c).__=e,c.__b=e.__b+1,l=null,(u=c.__i=ct(c,n,a,i))!==-1&&(i--,(l=n[u])&&(l.__u|=2)),l==null||l.__v===null?(u==-1&&s--,typeof c.type!="function"&&(c.__u|=4)):u!=a&&(u==a-1?s--:u==a+1?s++:(u>a?s--:s++,c.__u|=4))):e.__k[_]=null;if(i)for(_=0;_<h;_++)(l=n[_])!=null&&!(2&l.__u)&&(l.__e==r&&(r=B(l)),Ye(l,l));return r}function je(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=je(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=B(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ke(e,t){return t=t||[],e==null||typeof e=="boolean"||(re(e)?e.some(function(n){Ke(n,t)}):t.push(e)),t}function ct(e,t,n,r){var o,_,c=e.key,l=e.type,a=t[n];if(a===null||a&&c==a.key&&l===a.type&&!(2&a.__u))return n;if(r>(a!=null&&!(2&a.__u)?1:0))for(o=n-1,_=n+1;o>=0||_<t.length;){if(o>=0){if((a=t[o])&&!(2&a.__u)&&c==a.key&&l===a.type)return o;o--}if(_<t.length){if((a=t[_])&&!(2&a.__u)&&c==a.key&&l===a.type)return _;_++}}return-1}function ke(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||_t.test(t)?n:n+"px"}function z(e,t,n,r,o){var _;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ke(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ke(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")_=t!=(t=t.replace(Be,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r?n.u=r.u:(n.u=he,e.addEventListener(t,_?ue:le,_)):e.removeEventListener(t,_?ue:le,_);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function we(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=he++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function pe(e,t,n,r,o,_,c,l,a,u){var h,i,s,f,v,C,b,p,m,$,E,D,L,X,N,w,P,S=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(a=!!(32&n.__u),_=[l=t.__e=n.__e]),(h=g.__b)&&h(t);e:if(typeof S=="function")try{if(p=t.props,m="prototype"in S&&S.prototype.render,$=(h=S.contextType)&&r[h.__c],E=h?$?$.props.value:h.__:r,n.__c?b=(i=t.__c=n.__c).__=i.__E:(m?t.__c=i=new S(p,E):(t.__c=i=new V(p,E),i.constructor=S,i.render=ut),$&&$.sub(i),i.props=p,i.state||(i.state={}),i.context=E,i.__n=r,s=i.__d=!0,i.__h=[],i._sb=[]),m&&i.__s==null&&(i.__s=i.state),m&&S.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=T({},i.__s)),T(i.__s,S.getDerivedStateFromProps(p,i.__s))),f=i.props,v=i.state,i.__v=t,s)m&&S.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),m&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(m&&S.getDerivedStateFromProps==null&&p!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(p,E),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(p,i.__s,E)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(i.props=p,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(O){O&&(O.__=t)}),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(p,i.__s,E),m&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,v,C)})}if(i.context=E,i.props=p,i.__P=e,i.__e=!1,L=g.__r,X=0,m){for(i.state=i.__s,i.__d=!1,L&&L(t),h=i.render(i.props,i.state,i.context),N=0;N<i._sb.length;N++)i.__h.push(i._sb[N]);i._sb=[]}else do i.__d=!1,L&&L(t),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++X<25);i.state=i.__s,i.getChildContext!=null&&(r=T(T({},r),i.getChildContext())),m&&!s&&i.getSnapshotBeforeUpdate!=null&&(C=i.getSnapshotBeforeUpdate(f,v)),l=Ge(e,re(w=h!=null&&h.type===I&&h.key==null?h.props.children:h)?w:[w],t,n,r,o,_,c,l,a,u),i.base=t.__e,t.__u&=-161,i.__h.length&&c.push(i),b&&(i.__E=i.__=null)}catch(O){if(t.__v=null,a||_!=null)if(O.then){for(t.__u|=a?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;_[_.indexOf(l)]=null,t.__e=l}else for(P=_.length;P--;)de(_[P]);else t.__e=n.__e,t.__k=n.__k;g.__e(O,t,n)}else _==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):l=t.__e=lt(n.__e,t,n,r,o,_,c,a,u);return(h=g.diffed)&&h(t),128&t.__u?void 0:l}function qe(e,t,n){for(var r=0;r<n.length;r++)me(n[r],n[++r],n[++r]);g.__c&&g.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(_){_.call(o)})}catch(_){g.__e(_,o.__v)}})}function lt(e,t,n,r,o,_,c,l,a){var u,h,i,s,f,v,C,b=n.props,p=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),_!=null){for(u=0;u<_.length;u++)if((f=_[u])&&"setAttribute"in f==!!m&&(m?f.localName==m:f.nodeType==3)){e=f,_[u]=null;break}}if(e==null){if(m==null)return document.createTextNode(p);e=document.createElementNS(o,m,p.is&&p),l&&(g.__m&&g.__m(t,_),l=!1),_=null}if(m===null)b===p||l&&e.data===p||(e.data=p);else{if(_=_&&q.call(e.childNodes),b=n.props||K,!l&&_!=null)for(b={},u=0;u<e.attributes.length;u++)b[(f=e.attributes[u]).name]=f.value;for(u in b)if(f=b[u],u!="children"){if(u=="dangerouslySetInnerHTML")i=f;else if(!(u in p)){if(u=="value"&&"defaultValue"in p||u=="checked"&&"defaultChecked"in p)continue;z(e,u,null,f,o)}}for(u in p)f=p[u],u=="children"?s=f:u=="dangerouslySetInnerHTML"?h=f:u=="value"?v=f:u=="checked"?C=f:l&&typeof f!="function"||b[u]===f||z(e,u,f,b[u],o);if(h)l||i&&(h.__html===i.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(i&&(e.innerHTML=""),Ge(e,re(s)?s:[s],t,n,r,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,_,c,_?_[0]:n.__k&&B(n,0),l,a),_!=null)for(u=_.length;u--;)de(_[u]);l||(u="value",m=="progress"&&v==null?e.removeAttribute("value"):v!==void 0&&(v!==e[u]||m=="progress"&&!v||m=="option"&&v!==b[u])&&z(e,u,v,b[u],o),u="checked",C!==void 0&&C!==e[u]&&z(e,u,C,b[u],o))}return e}function me(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(o){g.__e(o,n)}}function Ye(e,t,n){var r,o;if(g.unmount&&g.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||me(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){g.__e(_,t)}r.base=r.__P=null}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Ye(r[o],t,n||typeof e.type!="function");n||de(e.__e),e.__c=e.__=e.__e=void 0}function ut(e,t,n){return this.constructor(e,n)}function at(e,t,n){var r,o,_,c;t==document&&(t=document.documentElement),g.__&&g.__(e,t),o=(r=typeof n=="function")?null:t.__k,_=[],c=[],pe(t,e=t.__k=R(I,null,[e]),o||K,K,t.namespaceURI,o?null:t.firstChild?q.call(t.childNodes):null,_,o?o.__e:t.firstChild,r,c),qe(_,e,c)}function xe(e,t,n){var r,o,_,c,l=T({},e.props);for(_ in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)_=="key"?r=t[_]:_=="ref"?o=t[_]:l[_]=t[_]===void 0&&c!==void 0?c[_]:t[_];return arguments.length>2&&(l.children=arguments.length>3?q.call(arguments,2):n),j(e.type,l,r||e.key,o||e.ref,null)}function Je(e,t){var n={__c:t="__cC"+Ie++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,_;return this.getChildContext||(o=new Set,(_={})[t]=this,this.getChildContext=function(){return _},this.componentWillUnmount=function(){o=null},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.forEach(function(l){l.__e=!0,ae(l)})},this.sub=function(c){o.add(c);var l=c.componentWillUnmount;c.componentWillUnmount=function(){o&&o.delete(c),l&&l.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}q=Oe.slice,g={__e:function(e,t,n,r){for(var o,_,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),c=o.__d),c)return o.__E=o}catch(l){e=l}throw e}},Ne=0,V.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=T({},this.state),typeof e=="function"&&(e=e(T({},n),this.props)),e&&T(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ae(this))},V.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ae(this))},V.prototype.render=I,H=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ce=function(e,t){return e.__v.__b-t.__v.__b},te.__r=0,Be=/(PointerCapture)$|Capture$/i,he=0,le=we(!1),ue=we(!0),Ie=0;var st=0;function d(e,t,n,r,o,_){t||(t={});var c,l,a=t;if("ref"in a)for(l in a={},t)l=="ref"?c=t[l]:a[l]=t[l];var u={type:e,props:a,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--st,__i:-1,__u:0,__source:o,__self:_};if(typeof e=="function"&&(c=e.defaultProps))for(l in c)a[l]===void 0&&(a[l]=c[l]);return g.vnode&&g.vnode(u),u}var U,y,oe,Ce,ne=0,Xe=[],k=g,Ee=k.__b,Se=k.__r,Fe=k.diffed,De=k.__c,Pe=k.unmount,Te=k.__;function Y(e,t){k.__h&&k.__h(y,e,ne||t),ne=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function _e(e){return ne=1,ge(Ve,e)}function ge(e,t,n){var r=Y(U++,2);if(r.t=e,!r.__c&&(r.__=[Ve(void 0,t),function(l){var a=r.__N?r.__N[0]:r.__[0],u=r.t(a,l);a!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var o=function(l,a,u){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(s){return!!s.__c});if(h.every(function(s){return!s.__N}))return!_||_.call(this,l,a,u);var i=r.__c.props!==l;return h.forEach(function(s){if(s.__N){var f=s.__[0];s.__=s.__N,s.__N=void 0,f!==s.__[0]&&(i=!0)}}),_&&_.call(this,l,a,u)||i};y.u=!0;var _=y.shouldComponentUpdate,c=y.componentWillUpdate;y.componentWillUpdate=function(l,a,u){if(this.__e){var h=_;_=void 0,o(l,a,u),_=h}c&&c.call(this,l,a,u)},y.shouldComponentUpdate=o}return r.__N||r.__}function ze(e,t){var n=Y(U++,3);!k.__s&&ye(n.__H,t)&&(n.__=e,n.i=t,y.__H.__h.push(n))}function Qe(e,t){var n=Y(U++,4);!k.__s&&ye(n.__H,t)&&(n.__=e,n.i=t,y.__h.push(n))}function F(e){return ne=5,ve(function(){return{current:e}},[])}function ve(e,t){var n=Y(U++,7);return ye(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ze(e){var t=y.context[e.__c],n=Y(U++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(y)),t.props.value):e.__}function ft(){for(var e;e=Xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ee),e.__H.__h.forEach(se),e.__H.__h=[]}catch(t){e.__H.__h=[],k.__e(t,e.__v)}}k.__b=function(e){y=null,Ee&&Ee(e)},k.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Te&&Te(e,t)},k.__r=function(e){Se&&Se(e),U=0;var t=(y=e.__c).__H;t&&(oe===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(t.__h.forEach(ee),t.__h.forEach(se),t.__h=[],U=0)),oe=y},k.diffed=function(e){Fe&&Fe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Xe.push(t)!==1&&Ce===k.requestAnimationFrame||((Ce=k.requestAnimationFrame)||ht)(ft)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),oe=y=null},k.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ee),n.__h=n.__h.filter(function(r){return!r.__||se(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],k.__e(r,n.__v)}}),De&&De(e,t)},k.unmount=function(e){Pe&&Pe(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ee(r)}catch(o){t=o}}),n.__H=void 0,t&&k.__e(t,n.__v))};var $e=typeof requestAnimationFrame=="function";function ht(e){var t,n=function(){clearTimeout(r),$e&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);$e&&(t=requestAnimationFrame(n))}function ee(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function se(e){var t=y;e.__c=e.__(),y=t}function ye(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ve(e,t){return typeof t=="function"?t(e):t}let M,G;const dt=(e,t)=>{if(M=void 0,t&&t.type==="click"){if(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button!==0)return e;const n=t.target.closest("a[href]"),r=n&&n.getAttribute("href");if(!n||n.origin!=location.origin||/^#/.test(r)||!/^(_?self)?$/i.test(n.target)||G&&(typeof G=="string"?!r.startsWith(G):!G.test(r)))return e;M=!0,t.preventDefault(),t=n.href.replace(location.origin,"")}else typeof t=="string"?M=!0:t&&t.url?(M=!t.replace,t=t.url):t=location.pathname+location.search;return M===!0?history.pushState(null,"",t):M===!1&&history.replaceState(null,"",t),t},pt=(e,t,n)=>{e=e.split("/").filter(Boolean),t=(t||"").split("/").filter(Boolean);for(let r=0,o,_;r<Math.max(e.length,t.length);r++){let[,c,l,a]=(t[r]||"").match(/^(:?)(.*?)([+*?]?)$/);if(o=e[r],!(!c&&l==o)){if(!c&&o&&a=="*"){n.rest="/"+e.slice(r).map(decodeURIComponent).join("/");break}if(!c||!o&&a!="?"&&a!="*")return;if(_=a=="+"||a=="*",_?o=e.slice(r).map(decodeURIComponent).join("/")||void 0:o&&(o=decodeURIComponent(o)),n.params[l]=o,l in n||(n[l]=o),_)break}}return n};function J(e){const[t,n]=ge(dt,e.url||location.pathname+location.search);e.scope&&(G=e.scope);const r=M===!0,o=ve(()=>{const _=new URL(t,location.origin),c=_.pathname.replace(/\/+$/g,"")||"/";return{url:t,path:c,query:Object.fromEntries(_.searchParams),route:(l,a)=>n({url:l,replace:a}),wasPush:r}},[t]);return Qe(()=>(addEventListener("click",n),addEventListener("popstate",n),()=>{removeEventListener("click",n),removeEventListener("popstate",n)}),[]),R(J.ctx.Provider,{value:o},e.children)}const mt=Promise.resolve();function et(e){const[t,n]=ge(w=>w+1,0),{url:r,query:o,wasPush:_,path:c}=gt(),{rest:l=c,params:a={}}=Ze(Le),u=F(!1),h=F(c),i=F(0),s=F(),f=F(),v=F(),C=F(!1),b=F();b.current=!1;const p=F(!1);let m,$,E;Ke(e.children).some(w=>{if(pt(l,w.props.path,E={...w.props,path:l,query:o,params:a,rest:""}))return m=xe(w,E);w.props.default&&($=xe(w,E))});let D=m||$;ve(()=>{f.current=s.current;const w=f.current&&f.current.props.children;!w||!D||D.type!==w.type||D.props.component!==w.props.component?(this.__v&&this.__v.__k&&this.__v.__k.reverse(),i.current++,p.current=!0):p.current=!1},[r]);const L=s.current&&s.current.__u&Q&&s.current.__u&Z,X=s.current&&s.current.__h;s.current=R(Le.Provider,{value:E},D),L?(s.current.__u|=Q,s.current.__u|=Z):X&&(s.current.__h=!0);const N=f.current;return f.current=null,this.__c=(w,P)=>{b.current=!0,f.current=N,e.onLoadStart&&e.onLoadStart(r),u.current=!0;let S=i.current;w.then(()=>{S===i.current&&(f.current=null,s.current&&(P.__h&&(s.current.__h=P.__h),P.__u&Z&&(s.current.__u|=Z),P.__u&Q&&(s.current.__u|=Q)),mt.then(n))})},Qe(()=>{const w=this.__v&&this.__v.__e;if(b.current){!C.current&&!v.current&&(v.current=w);return}!C.current&&v.current&&(v.current!==w&&v.current.remove(),v.current=null),C.current=!0,h.current!==c&&(_&&scrollTo(0,0),e.onRouteChange&&e.onRouteChange(r),h.current=c),e.onLoadEnd&&u.current&&e.onLoadEnd(r),u.current=!1},[c,_,t]),p.current?[R(ie,{r:s}),R(ie,{r:f})]:R(ie,{r:s})}const Q=32,Z=128,ie=({r:e})=>e.current;et.Provider=J;J.ctx=Je({});const Le=Je({}),Me=e=>R(e.component,e),gt=()=>Ze(J.ctx),He=g.__e;g.__e=(e,t,n)=>{if(e&&e.then){let r=t;for(;r=r.__;)if(r.__c&&r.__c.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),t.__k||(t.__k=[]),r.__c.__c(e,t)}He&&He(e,t,n)};const vt="/FfMapMarker/assets/2025_FF44_MAP_NEW_DAY1-DtQSo3EV.jpg",yt="_container_1mxvc_1",bt="_targetingBox_1mxvc_6",Re={container:yt,targetingBox:bt},Ue=[{id:"32014cff102c4d70a654d6b02d3e7276",dimension:{x:1609,y:1080,width:41,height:51},boothNumbers:["S03","S04"],boothName:"台北人",boothLink:void 0},{id:"c8c7be762d444bb8b8f3b14bedda760a",dimension:{x:1381,y:548,width:41,height:51},boothNumbers:["T25","T26"],boothName:"壞菇社",boothLink:"https://www.facebook.com/MARK4why"}];var x=(e=>(e[e.plannedToGo=0]="plannedToGo",e[e.alreadyGone=1]="alreadyGone",e[e.none=2]="none",e))(x||{});function kt(e){const t=F(null);return ze(()=>{var n,r;e.openDialog?(n=t.current)==null||n.showModal():(r=t.current)==null||r.close()},[e.openDialog]),d("dialog",{ref:t,children:[d("p",{children:["攤位名稱：",e.mapData.boothName]}),d("p",{children:["攤位編號：",wt(e.mapData.boothNumbers)]}),d("p",{children:["攤位連結：",xt(e.mapData.boothLink)]}),d("p",{children:["標記：",d("button",{onClick:()=>e.setMarker(x.plannedToGo),children:"還沒去過"}),d("button",{onClick:()=>e.setMarker(x.alreadyGone),children:"已去過"}),d("button",{onClick:()=>e.setMarker(x.none),children:"取消標記"})]}),d("button",{onClick:e.closeDialog,children:"關閉"})]})}function wt(e){return e.join(", ")}function xt(e){return e===void 0?d(I,{}):d("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:e})}const Ct={id:"",dimension:{x:0,y:0,width:0,height:0},boothNumbers:[],boothName:"",boothLink:void 0};var A=(e=>(e[e.FF44=0]="FF44",e))(A||{});const fe=0;function tt(e){switch(e){case x[x.plannedToGo]:return x.plannedToGo;case x[x.alreadyGone]:return x.alreadyGone;default:return x.none}}function nt(e,t,n){const r=ot(e,t);localStorage.setItem(r,x[n])}function rt(e,t){const n=ot(e,t),r=localStorage.getItem(n);return tt(r)}function Et(e){let t=new Map;for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);if(r===null)continue;const o=r.split(".");if(o.length===4&&o[0]===A[e]&&o[1]==="map"&&o[2]==="marker"){const _=o[3];t.set(_,rt(e,_))}}return t}function ot(e,t){return`${A[e]}.map.marker.${t}`}function St(){const e=F(null),[t,n]=_e([]),[r,o]=_e(!1),[_,c]=_e(Ct);ze(()=>{if(e.current!==null){const u={width:e.current.naturalWidth,height:e.current.naturalHeight},h={width:e.current.width,height:e.current.height},i=Ue.map(s=>({...Ft(u,h,s.dimension),id:s.id}));n(i)}},[e.current]);const l=()=>d("img",{ref:e,src:vt,alt:"Fancy Frontier Map"}),a=()=>Ue.map(u=>{const h=t.find(s=>u.id===s.id);if(h==null)return d(I,{});const i=rt(fe,u.id);return d("div",{class:Re.targetingBox,style:{backgroundColor:Dt(i),left:h.x,top:h.y,width:h.width,height:h.height},onClick:()=>{c(u),o(!0)}})});return d("div",{className:Re.container,children:[d(kt,{mapData:_,openDialog:r,closeDialog:()=>o(!1),setMarker:u=>{nt(fe,_.id,u)}}),a(),d(l,{})]})}function Ft(e,t,n){if(e.width===0||e.height===0)return{x:0,y:0,width:0,height:0};const r=t.width/e.width,o=t.height/e.height,_=n.x*r,c=n.y*o,l=n.width*r,a=n.height*o;return{x:_,y:c,width:l,height:a}}function Dt(e){switch(e){case x.plannedToGo:return"#ff0000b3";case x.alreadyGone:return"#008000b3";case x.none:return"transparent"}}function Pt(){return d("section",{children:[d("h1",{children:"404: Not Found"}),d("p",{children:"It's gone :("})]})}const W=e=>e.toString().padStart(2,"0"),Tt=()=>{const e=new Date;return e.getFullYear()+"-"+W(e.getMonth()+1)+"-"+W(e.getDate())+"-"+W(e.getHours())+"-"+W(e.getMinutes())+"-"+W(e.getSeconds())};function $t(e){return d("input",{type:"file",onChange:n=>{var o;const r=(o=n.target.files)==null?void 0:o[0];if(r){const _=new FileReader;_.onload=()=>{e.onFileContentChange(_.result)},_.onerror=()=>{console.error("Error reading file")},_.readAsText(r)}}})}function Lt(){return d("header",{children:[d("button",{onClick:Mt,children:"匯出設定"}),d("span",{children:"匯入設定："}),d($t,{onFileContentChange:Ht})]})}function Mt(){const e=Et(A.FF44),t={eventType:A[A.FF44],version:"1",mapMarker:Array.from(e).map(([c,l])=>({id:c,marker:x[l]}))},n=JSON.stringify(t),r=new Blob([n],{type:"application/json"}),o=URL.createObjectURL(r),_=document.createElement("a");_.href=o,_.download=`FF44-setting-${Tt()}.json`,_.click(),URL.revokeObjectURL(o)}function Ht(e){if(e===null)return;JSON.parse(e).mapMarker.forEach(n=>{nt(fe,n.id,tt(n.marker))})}const Rt=e=>"",Ut=Rt();function Nt(){return d(J,{children:[d(Lt,{}),d("main",{children:d(et,{children:[d(Me,{path:`/${Ut}`,component:St}),d(Me,{default:!0,component:Pt})]})})]})}at(d(Nt,{}),document.body);
