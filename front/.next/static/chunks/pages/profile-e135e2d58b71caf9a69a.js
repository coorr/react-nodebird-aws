_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"9Emu":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return ce}));var r=n("q1tI"),i=n("8Kt/"),o=n.n(i),a=n("1kws"),u=n("jRF5"),c=n("ANBO"),s=n("/MKj"),l=n("nOHt"),d=n.n(l),f=n("vDqi"),b=n.n(f);function v(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var g,p=function(){},j=p(),O=Object,y=function(e){return e===j},w=function(e){return"function"==typeof e},m=function(e,t){return O.assign({},e,t)},x=function(){return"undefined"!=typeof window},E=new WeakMap,k=0,R=function(e){var t,n,r=typeof e,i=e&&e.constructor,o=i==Date;if(O(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=E.get(e))return t;if(t=++k+"~",E.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=R(e[n])+",";E.set(e,t)}if(i==O){t="#";for(var a=O.keys(e).sort();!y(n=a.pop());)y(e[n])||(t+=n+":"+R(e[n])+",");E.set(e,t)}}return t},C=!0,S=x(),T="undefined"!=typeof document,V=S&&window.addEventListener?window.addEventListener.bind(window):p,M=T?document.addEventListener.bind(document):p,_=S&&window.removeEventListener?window.removeEventListener.bind(window):p,D=T?document.removeEventListener.bind(document):p,I={isOnline:function(){return C},isVisible:function(){var e=T&&document.visibilityState;return y(e)||"hidden"!==e}},N={initFocus:function(e){return M("visibilitychange",e),V("focus",e),function(){D("visibilitychange",e),_("focus",e)}},initReconnect:function(e){var t=function(){C=!0,e()},n=function(){C=!1};return V("online",t),V("offline",n),function(){_("online",t),_("offline",n)}}},q=!x()||"Deno"in window,K=function(e){return x()&&"undefined"!=typeof window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,1)},P=q?r.useEffect:r.useLayoutEffect,A="undefined"!==typeof navigator&&navigator.connection,F=!q&&A&&(["slow-2g","2g"].includes(A.effectiveType)||A.saveData),L=function(e){if(w(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?R(e):"",t,e?"$swr$"+e:""]},B=new WeakMap,G=function(e,t,n,r,i,o,a){void 0===a&&(a=!0);var u=B.get(e),c=u[0],s=u[1],l=u[3],d=c[t],f=s[t];if(a&&f)for(var b=0;b<f.length;++b)f[b](n,r,i);return o&&(delete l[t],d&&d[0])?d[0](2).then((function(){return e.get(t)})):e.get(t)},J=0,W=function(){return++J},X=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return v(void 0,void 0,void 0,(function(){var t,n,r,i,o,a,u,c,s,l,d,f,b,v,g,p,O,x,E,k;return h(this,(function(h){switch(h.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],a=!1!==(o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache,u=!1!==o.revalidate,c=!1!==o.rollbackOnError,s=o.optimisticData,l=L(n),d=l[0],f=l[2],!d)return[2];if(b=B.get(t),v=b[2],e.length<3)return[2,G(t,d,t.get(d),j,j,u,a)];if(g=r,O=W(),v[d]=[O,0],x=!y(s),E=t.get(d),x&&(t.set(d,s),G(t,d,s)),w(g))try{g=g(t.get(d))}catch(R){p=R}return g&&w(g.then)?[4,g.catch((function(e){p=e}))]:[3,2];case 1:if(g=h.sent(),O!==v[d][0]){if(p)throw p;return[2,g]}p&&x&&c&&(a=!0,g=E,t.set(d,E)),h.label=2;case 2:return a&&(p||t.set(d,g),t.set(f,m(t.get(f),{error:p}))),v[d][1]=W(),[4,G(t,d,g,p,j,u,a)];case 3:if(k=h.sent(),p)throw p;return[2,a?k:g]}}))}))},H=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},U=function(e,t){if(!B.has(e)){var n=m(N,t),r={},i=X.bind(j,e),o=p;if(B.set(e,[r,{},{},{},i]),!q){var a=n.initFocus(setTimeout.bind(j,H.bind(j,r,0))),u=n.initReconnect(setTimeout.bind(j,H.bind(j,r,1)));o=function(){a&&a(),u&&u(),B.delete(e)}}return[e,i,o]}return[e,B.get(e)[4]]},z=U(new Map),$=z[0],Y=z[1],Q=m({onLoadingSlow:p,onSuccess:p,onError:p,onErrorRetry:function(e,t,n,r,i){var o=n.errorRetryCount,a=i.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!y(o)&&a>o||setTimeout(r,u,i)},onDiscarded:p,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:F?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:F?5e3:3e3,compare:function(e,t){return R(e)==R(t)},isPaused:function(){return!1},cache:$,mutate:Y,fallback:{}},I),Z=function(e,t){var n=m(e,t);if(t){var r=e.use,i=e.fallback,o=t.use,a=t.fallback;r&&o&&(n.use=r.concat(o)),i&&a&&(n.fallback=m(i,a))}return n},ee=Object(r.createContext)({}),te=function(e){return w(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},ne=function(){return m(Q,Object(r.useContext)(ee))},re=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},ie={dedupe:!0},oe=(O.defineProperty((function(e){var t=e.value,n=Z(Object(r.useContext)(ee),t),i=t&&t.provider,o=Object(r.useState)((function(){return i?U(i(n.cache||$),t):j}))[0];return o&&(n.cache=o[0],n.mutate=o[1]),P((function(){return o?o[2]:j}),[]),Object(r.createElement)(ee.Provider,m(e,{value:n}))}),"default",{value:Q}),g=function(e,t,n){var i=n.cache,o=n.compare,a=n.fallbackData,u=n.suspense,c=n.revalidateOnMount,s=n.refreshInterval,l=n.refreshWhenHidden,d=n.refreshWhenOffline,f=B.get(i),b=f[0],g=f[1],p=f[2],O=f[3],x=L(e),E=x[0],k=x[1],R=x[2],C=Object(r.useRef)(!1),S=Object(r.useRef)(!1),T=Object(r.useRef)(E),V=Object(r.useRef)(t),M=Object(r.useRef)(n),_=function(){return M.current},D=function(){return _().isVisible()&&_().isOnline()},I=function(e){return i.set(R,m(i.get(R),e))},N=i.get(E),A=y(a)?n.fallback[E]:a,F=y(N)?A:N,J=i.get(R)||{},H=J.error,U=function(){return y(c)?!_().isPaused()&&(u?!y(F):y(F)||n.revalidateIfStale):c},z=!(!E||!t)&&(!!J.isValidating||!C.current&&U()),$=function(e,t){var n=Object(r.useState)({})[1],i=Object(r.useRef)(e),o=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),a=Object(r.useCallback)((function(e){var r=!1,a=i.current;for(var u in e){var c=u;a[c]!==e[c]&&(a[c]=e[c],o.current[c]&&(r=!0))}r&&!t.current&&n({})}),[]);return P((function(){i.current=e})),[i,o.current,a]}({data:F,error:H,isValidating:z},S),Y=$[0],Q=$[1],Z=$[2],ee=Object(r.useCallback)((function(e){return v(void 0,void 0,void 0,(function(){var t,r,a,u,c,s,l,d,f,b,v,g,m;return h(this,(function(h){switch(h.label){case 0:if(t=V.current,!E||!t||S.current||_().isPaused())return[2,!1];u=!0,c=e||{},s=!O[E]||!c.dedupe,l=function(){return!S.current&&E===T.current&&C.current},d=function(){var e=O[E];e&&e[1]===a&&delete O[E]},f={isValidating:!1},b=function(){I({isValidating:!1}),l()&&Z(f)},I({isValidating:!0}),Z({isValidating:!0}),h.label=1;case 1:return h.trys.push([1,3,,4]),s&&(G(i,E,Y.current.data,Y.current.error,!0),n.loadingTimeout&&!i.get(E)&&setTimeout((function(){u&&l()&&_().onLoadingSlow(E,n)}),n.loadingTimeout),O[E]=[t.apply(void 0,k),W()]),m=O[E],r=m[0],a=m[1],[4,r];case 2:return r=h.sent(),s&&setTimeout(d,n.dedupingInterval),O[E]&&O[E][1]===a?(I({error:j}),f.error=j,v=p[E],!y(v)&&(a<=v[0]||a<=v[1]||0===v[1])?(b(),s&&l()&&_().onDiscarded(E),[2,!1]):(o(Y.current.data,r)?f.data=Y.current.data:f.data=r,o(i.get(E),r)||i.set(E,r),s&&l()&&_().onSuccess(r,E,n),[3,4])):(s&&l()&&_().onDiscarded(E),[2,!1]);case 3:return g=h.sent(),d(),_().isPaused()||(I({error:g}),f.error=g,s&&l()&&(_().onError(g,E,n),("boolean"===typeof n.shouldRetryOnError&&n.shouldRetryOnError||w(n.shouldRetryOnError)&&n.shouldRetryOnError(g))&&D()&&_().onErrorRetry(g,E,n,ee,{retryCount:(c.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return u=!1,b(),l()&&s&&G(i,E,f.data,f.error,!1),[2,!0]}}))}))}),[E]),te=Object(r.useCallback)(X.bind(j,i,(function(){return T.current})),[]);if(P((function(){V.current=t,M.current=n})),P((function(){if(E){var e=C.current,t=ee.bind(j,ie),n=0,r=re(E,g,(function(e,t,n){Z(m({error:t,isValidating:n},o(Y.current.data,e)?j:{data:e}))})),i=re(E,b,(function(e){if(0==e){var r=Date.now();_().revalidateOnFocus&&r>n&&D()&&(n=r+_().focusThrottleInterval,t())}else if(1==e)_().revalidateOnReconnect&&D()&&t();else if(2==e)return ee()}));return S.current=!1,T.current=E,C.current=!0,e&&Z({data:F,error:H,isValidating:z}),U()&&(y(F)||q?t():K(t)),function(){S.current=!0,r(),i()}}}),[E,ee]),P((function(){var e;function t(){var t=w(s)?s(F):s;t&&-1!==e&&(e=setTimeout(n,t))}function n(){Y.current.error||!l&&!_().isVisible()||!d&&!_().isOnline()?t():ee(ie).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[s,l,d,ee]),Object(r.useDebugValue)(F),u&&y(F)&&E)throw V.current=t,M.current=n,y(H)?ee(ie):H;return{mutate:te,get data(){return Q.data=!0,F},get error(){return Q.error=!0,H},get isValidating(){return Q.isValidating=!0,z}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=ne(),r=te(e),i=r[0],o=r[1],a=r[2],u=Z(n,a),c=g,s=u.use;if(s)for(var l=s.length;l-- >0;)c=s[l](c);return c(i,o||u.fetcher,u)}),ae=n("nKUr"),ue=function(e){return b.a.get(e,{withCredentials:!0}).then((function(e){return e.data}))},ce=!0;t.default=function(){Object(s.b)();var e=Object(s.c)((function(e){return e.user})).me,t=Object(r.useState)(3),n=t[0],i=t[1],l=Object(r.useState)(3),f=l[0],b=l[1],v=oe("http://localhost:4001/user/followers?limit=".concat(n),ue),h=v.data,g=v.error,p=oe("http://localhost:4001/user/followings?limit=".concat(f),ue),j=p.data,O=p.error;Object(r.useEffect)((function(){e&&e.id||d.a.push("/")}),[e&&e.id]);var y=Object(r.useCallback)((function(){i((function(e){return e+3}))}),[]),w=Object(r.useCallback)((function(){b((function(e){return e+3}))}),[]);return e?g||O?(console.error(g||O),Object(ae.jsx)("div",{children:"\ud314\ub85c\uc789/\ud314\ub85c\uc6cc \ub85c\ub529 \uc911 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."})):Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(o.a,{children:Object(ae.jsx)("title",{children:"\ud504\ub85c\ud544 | NodeBird"})}),Object(ae.jsxs)(a.a,{children:[Object(ae.jsx)(c.a,{}),Object(ae.jsx)(u.a,{header:"\ud314\ub85c\uc789",data:j,onClickMore:w,loading:!j&&!h}),Object(ae.jsx)(u.a,{header:"\ud314\ub85c\uc6cc",data:h,onClickMore:y,loading:!j&&!h})]})]}):"\ub0b4 \uc815\ubcf4 \ub85c\ub529\uc911..."}},ANBO:function(e,t,n){"use strict";var r=n("ODXe"),i=n("q1tI"),o=n("Vl3Y"),a=n("5rEg"),u=n("/MKj"),c=n("Tgth"),s=n("jVEK"),l=n("nKUr");t.a=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.user})).me,n=Object(c.a)((null===t||void 0===t?void 0:t.nickname)||""),d=Object(r.a)(n,2),f=d[0],b=d[1],v=Object(i.useMemo)((function(){return{marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"}})),h=Object(i.useCallback)((function(){e({type:s.c,data:f})}),[f]);return Object(l.jsx)(o.a,{style:v,children:Object(l.jsx)(a.a.Search,{addonBefore:"\ub2c9\ub124\uc784",enterButton:"\uc218\uc815",value:f,onChange:b,onSearch:h})})}},jRF5:function(e,t,n){"use strict";n("q1tI");var r=n("VXEj"),i=n("2/Rp"),o=n("bx4M"),a=n("dHKz"),u=n("17x9"),c=n.n(u),s=n("/MKj"),l=n("jVEK"),d=n("nKUr"),f=function(e){var t=e.header,n=e.data,u=e.onClickMore,c=e.loading,f=Object(s.b)();return Object(d.jsx)(r.b,{style:{marginBottom:20},grid:{gutter:4,xs:2,md:3},size:"small",header:Object(d.jsx)("div",{children:t}),loadMore:Object(d.jsx)("div",{style:{textAlign:"center",margin:"10px 0"},children:Object(d.jsx)(i.a,{onClick:u,loading:c,children:"\ub354 \ubcf4\uae30"})}),bordered:!0,dataSource:n,renderItem:function(e){return Object(d.jsx)(r.b.Item,{style:{marginTop:20},children:Object(d.jsx)(o.a,{actions:[Object(d.jsx)(a.StopOutlined,{onClick:(n=e.id,function(){f("\ud314\ub85c\uc789"===t?{type:l.G,data:n}:{type:l.A,data:n})})},"stop")],children:Object(d.jsx)(o.a.Meta,{description:e.nickname})})});var n}})};f.protoTypes={header:c.a.string.isRequired,data:c.a.array.isRequired,onClickMore:c.a.func.isRequired,loading:c.a.bool.isRequired},t.a=f},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("9Emu")}])}},[["u1GD",0,2,6,1,3,4,5,11]]]);