(function(){var h,l=this,m=function(a){return"string"==typeof a},p=function(a,b,c){a=a.split(".");c=c||l;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b},ca=function(a){if(a&&a!=l)return aa(a.document);null===ba&&(ba=aa(l.document));return ba},da=/^[\w+/_-]+[=]{0,2}$/,ba=null,aa=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&
da.test(a)?a:""},q=function(a,b){for(var c=a.split("."),d=b||l,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d},r=function(){},ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},t=function(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length},u=function(a){return"function"==ea(a)},v=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},fa=function(a,b,c){return a.call.apply(a.bind,arguments)},ha=function(a,
b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ha;return w.apply(null,arguments)},ia=Date.now||function(){return+new Date},x=function(a,b){function c(){}c.prototype=b.prototype;a.Ab=
b.prototype;a.prototype=new c;a.prototype.constructor=a;a.rb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ja=function(){return!0};var y=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,y);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};x(y,Error);y.prototype.name="CustomError";var ka;var la=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ma=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1},na=function(a){return Array.prototype.concat.apply([],arguments)},oa=function(a){var b=a.length;if(0<b){for(var c=Array(b),
d=0;d<b;d++)c[d]=a[d];return c}return[]};var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var z;a:{var qa=l.navigator;if(qa){var ra=qa.userAgent;if(ra){z=ra;break a}}z=""};var sa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},ta="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),ua=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ta.length;f++)c=ta[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var B=function(){this.ia={}};B.prototype.register=function(a,b,c){this.ia[a]={ma:b,da:c||ja}};B.prototype.da=function(a){a=this.ia[a];return!!a&&a.da()};B.prototype.register=B.prototype.register;p("help.common.helpapiservice.Environment.PROD","https://clients6.google.com",void 0);p("help.common.helpapiservice.Environment.STAGING","https://content-googleapis-staging.sandbox.google.com",void 0);p("help.common.helpapiservice.Environment.TEST","https://content-googleapis-test.sandbox.google.com",void 0);var va={kb:"GHELP_SEARCH",jb:"GHELP_AUTOCOMPLETE",lb:"GHELP_SUGGEST",ib:"GHELP_ARTICLE",nb:"LINK",mb:"HELPCENTER",gb:"EMAIL",eb:"CHAT",hb:"FORUM",ob:"MARKETING",pb:"ONEBOX",fb:"CUSTOM",cb:"AUTO",qb:"TESTING"};var C=function(a,b){this.ua=a===wa&&b||"";this.Da=xa};C.prototype.za=!0;C.prototype.ya=function(){return this.ua};C.prototype.toString=function(){return"Const{"+this.ua+"}"};var xa={},wa={};var D=function(){this.qa="";this.Ea=ya};D.prototype.za=!0;D.prototype.ya=function(){return this.qa};var za=function(a){if(a instanceof D&&a.constructor===D&&a.Ea===ya)return a.qa;ea(a);return"type_error:TrustedResourceUrl"},ya={},Aa=function(a){var b=new D;b.qa=a;return b};var E=function(a,b){a.src=za(b);var c=ca();c&&a.setAttribute("nonce",c)};var Ca=function(a,b){sa(b,function(b,d){b&&"object"==typeof b&&b.za&&(b=b.ya());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ba.hasOwnProperty(d)?a.setAttribute(Ba[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Ba={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",
width:"width"},Ea=function(a,b,c){function d(c){c&&b.appendChild(m(c)?a.createTextNode(c):c)}for(var e=1;e<c.length;e++){var f=c[e];!t(f)||v(f)&&0<f.nodeType?d(f):la(Da(f)?oa(f):f,d)}},Fa=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null},Da=function(a){if(a&&"number"==typeof a.length){if(v(a))return"function"==typeof a.item||"string"==typeof a.item;if(u(a))return"function"==typeof a.item}return!1},F=function(a){this.H=a||l.document||document};h=F.prototype;
h.getElementsByTagName=function(a,b){return(b||this.H).getElementsByTagName(String(a))};h.createElement=function(a){return this.H.createElement(String(a))};h.createTextNode=function(a){return this.H.createTextNode(String(a))};h.appendChild=function(a,b){a.appendChild(b)};h.append=function(a,b){Ea(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments)};h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
h.removeNode=Fa;h.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var G=function(a,b){this.Oa=100;this.Ha=a;this.Va=b;this.ea=0;this.aa=null};G.prototype.get=function(){if(0<this.ea){this.ea--;var a=this.aa;this.aa=a.next;a.next=null}else a=this.Ha();return a};G.prototype.put=function(a){this.Va(a);this.ea<this.Oa&&(this.ea++,a.next=this.aa,this.aa=a)};var Ga=function(a){l.setTimeout(function(){throw a;},0)},Ha,Ia=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==z.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
"//"+b.location.host;a=w(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==z.indexOf("Trident")&&-1==z.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.va;c.va=null;a()}};return function(a){d.next={va:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Ja=function(){this.ha=this.T=null},La=new G(function(){return new Ka},function(a){a.reset()});Ja.prototype.add=function(a,b){var c=La.get();c.set(a,b);this.ha?this.ha.next=c:this.T=c;this.ha=c};Ja.prototype.remove=function(){var a=null;this.T&&(a=this.T,this.T=this.T.next,this.T||(this.ha=null),a.next=null);return a};var Ka=function(){this.next=this.scope=this.pa=null};Ka.prototype.set=function(a,b){this.pa=a;this.scope=b;this.next=null};
Ka.prototype.reset=function(){this.next=this.scope=this.pa=null};var Pa=function(a,b){H||Ma();Na||(H(),Na=!0);Oa.add(a,b)},H,Ma=function(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);H=function(){a.then(Qa)}}else H=function(){var a=Qa;!u(l.setImmediate)||l.Window&&l.Window.prototype&&-1==z.indexOf("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Ha||(Ha=Ia()),Ha(a)):l.setImmediate(a)}},Na=!1,Oa=new Ja,Qa=function(){for(var a;a=Oa.remove();){try{a.pa.call(a.scope)}catch(b){Ga(b)}La.put(a)}Na=!1};var Ra=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var J=function(a){this.m=0;this.v=void 0;this.M=this.w=this.f=null;this.$=this.oa=!1;if(a!=r)try{var b=this;a.call(void 0,function(a){I(b,2,a)},function(a){I(b,3,a)})}catch(c){I(this,3,c)}},Sa=function(){this.next=this.context=this.P=this.X=this.F=null;this.Z=!1};Sa.prototype.reset=function(){this.context=this.P=this.X=this.F=null;this.Z=!1};
var Ta=new G(function(){return new Sa},function(a){a.reset()}),Ua=function(a,b,c){var d=Ta.get();d.X=a;d.P=b;d.context=c;return d},Va=function(){var a=new J(r);I(a,2,void 0);return a},Wa=function(){return new J(function(a,b){b(void 0)})};J.prototype.then=function(a,b,c){return Xa(this,u(a)?a:null,u(b)?b:null,c)};J.prototype.$goog_Thenable=!0;var K=function(a){Xa(a,null,r,void 0)};J.prototype.cancel=function(a){0==this.m&&Pa(function(){var b=new L(a);Ya(this,b)},this)};
var Ya=function(a,b){if(0==a.m)if(a.f){var c=a.f;if(c.w){for(var d=0,e=null,f=null,g=c.w;g&&(g.Z||(d++,g.F==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.m&&1==d?Ya(c,b):(f?(d=f,d.next==c.M&&(c.M=d),d.next=d.next.next):Za(c),$a(c,e,3,b)))}a.f=null}else I(a,3,b)},bb=function(a,b){a.w||2!=a.m&&3!=a.m||ab(a);a.M?a.M.next=b:a.w=b;a.M=b},Xa=function(a,b,c,d){var e=Ua(null,null,null);e.F=new J(function(a,g){e.X=b?function(c){try{var e=b.call(d,c);a(e)}catch(A){g(A)}}:a;e.P=c?function(b){try{var e=c.call(d,
b);void 0===e&&b instanceof L?g(b):a(e)}catch(A){g(A)}}:g});e.F.f=a;bb(a,e);return e.F};J.prototype.ab=function(a){this.m=0;I(this,2,a)};J.prototype.bb=function(a){this.m=0;I(this,3,a)};
var I=function(a,b,c){if(0==a.m){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.m=1;a:{var d=c,e=a.ab,f=a.bb;if(d instanceof J){bb(d,Ua(e||r,f||null,a));var g=!0}else if(Ra(d))d.then(e,f,a),g=!0;else{if(v(d))try{var k=d.then;if(u(k)){cb(d,k,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}g||(a.v=c,a.m=b,a.f=null,ab(a),3!=b||c instanceof L||db(a,c))}},cb=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,
g,k)}catch(n){k(n)}},ab=function(a){a.oa||(a.oa=!0,Pa(a.Ka,a))},Za=function(a){var b=null;a.w&&(b=a.w,a.w=b.next,b.next=null);a.w||(a.M=null);return b};J.prototype.Ka=function(){for(var a;a=Za(this);)$a(this,a,this.m,this.v);this.oa=!1};
var $a=function(a,b,c,d){if(3==c&&b.P&&!b.Z)for(;a&&a.$;a=a.f)a.$=!1;if(b.F)b.F.f=null,eb(b,c,d);else try{b.Z?b.X.call(b.context):eb(b,c,d)}catch(e){fb.call(null,e)}Ta.put(b)},eb=function(a,b,c){2==b?a.X.call(a.context,c):a.P&&a.P.call(a.context,c)},db=function(a,b){a.$=!0;Pa(function(){a.$&&fb.call(null,b)})},fb=Ga,L=function(a){y.call(this,a)};x(L,y);L.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var M=function(a){var b=gb;this.fa=[];this.Aa=b;this.xa=a||null;this.V=this.N=!1;this.v=void 0;this.ta=this.Ga=this.ka=!1;this.ga=0;this.f=null;this.la=0};M.prototype.cancel=function(a){if(this.N)this.v instanceof M&&this.v.cancel();else{if(this.f){var b=this.f;delete this.f;a?b.cancel(a):(b.la--,0>=b.la&&b.cancel())}this.Aa?this.Aa.call(this.xa,this):this.ta=!0;this.N||(a=new N(this),O(this),P(this,!1,a))}};M.prototype.wa=function(a,b){this.ka=!1;P(this,a,b)};
var P=function(a,b,c){a.N=!0;a.v=c;a.V=!b;hb(a)},O=function(a){if(a.N){if(!a.ta)throw new ib(a);a.ta=!1}};M.prototype.ma=function(a){O(this);P(this,!0,a)};var jb=function(a,b,c){a.fa.push([b,c,void 0]);a.N&&hb(a)};M.prototype.then=function(a,b,c){var d,e,f=new J(function(a,b){d=a;e=b});jb(this,d,function(a){a instanceof N?f.cancel():e(a)});return f.then(a,b,c)};M.prototype.$goog_Thenable=!0;
var kb=function(a){return ma(a.fa,function(a){return u(a[1])})},hb=function(a){if(a.ga&&a.N&&kb(a)){var b=a.ga,c=lb[b];c&&(l.clearTimeout(c.ca),delete lb[b]);a.ga=0}a.f&&(a.f.la--,delete a.f);b=a.v;for(var d=c=!1;a.fa.length&&!a.ka;){var e=a.fa.shift(),f=e[0],g=e[1];e=e[2];if(f=a.V?g:f)try{var k=f.call(e||a.xa,b);void 0!==k&&(a.V=a.V&&(k==b||k instanceof Error),a.v=b=k);if(Ra(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.ka=!0}catch(n){b=n,a.V=!0,kb(a)||(c=!0)}}a.v=b;d&&(k=w(a.wa,
a,!0),d=w(a.wa,a,!1),b instanceof M?(jb(b,k,d),b.Ga=!0):b.then(k,d));c&&(b=new mb(b),lb[b.ca]=b,a.ga=b.ca)},ib=function(){y.call(this)};x(ib,y);ib.prototype.message="Deferred has already fired";ib.prototype.name="AlreadyCalledError";var N=function(){y.call(this)};x(N,y);N.prototype.message="Deferred was canceled";N.prototype.name="CanceledError";var mb=function(a){this.ca=l.setTimeout(w(this.$a,this),0);this.Ja=a};mb.prototype.$a=function(){delete lb[this.ca];throw this.Ja;};var lb={};var rb=function(){var a=nb,b={},c=b.document||document,d=za(a),e=document.createElement("SCRIPT"),f={Ba:e,Ca:void 0},g=new M(f),k=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(k=window.setTimeout(function(){ob(e,!0);var a=new pb(1,"Timeout reached for loading script "+d);O(g);P(g,!1,a)},n),f.Ca=k);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(ob(e,b.sb||!1,k),g.ma(null))};e.onerror=function(){ob(e,!0,k);var a=new pb(0,"Error while loading script "+
d);O(g);P(g,!1,a)};f=b.attributes||{};ua(f,{type:"text/javascript",charset:"UTF-8"});Ca(e,f);E(e,a);qb(c).appendChild(e);return g},qb=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},gb=function(){if(this&&this.Ba){var a=this.Ba;a&&"SCRIPT"==a.tagName&&ob(a,!0,this.Ca)}},ob=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=r;a.onerror=r;a.onreadystatechange=r;b&&window.setTimeout(function(){Fa(a)},0)},pb=function(a,b){var c="Jsloader error (code #"+
a+")";b&&(c+=": "+b);y.call(this,c);this.code=a};x(pb,y);var sb="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},tb=function(){};tb.prototype.next=function(){throw sb;};tb.prototype.Fa=function(){return this};var Q=function(a,b){this.l={};this.c=[];this.Y=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=Q.prototype;h.j=function(){ub(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.l[this.c[b]]);return a};h.u=function(){ub(this);return this.c.concat()};h.G=function(a){return R(this.l,a)};h.clear=function(){this.l={};this.Y=this.b=this.c.length=0};
h.remove=function(a){return R(this.l,a)?(delete this.l[a],this.b--,this.Y++,this.c.length>2*this.b&&ub(this),!0):!1};var ub=function(a){if(a.b!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];R(a.l,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.b!=a.c.length){var e={};for(c=b=0;b<a.c.length;)d=a.c[b],R(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};h=Q.prototype;h.get=function(a,b){return R(this.l,a)?this.l[a]:b};h.set=function(a,b){R(this.l,a)||(this.b++,this.c.push(a),this.Y++);this.l[a]=b};
h.addAll=function(a){if(a instanceof Q)for(var b=a.u(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};h.forEach=function(a,b){for(var c=this.u(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new Q(this)};h.Fa=function(a){ub(this);var b=0,c=this.Y,d=this,e=new tb;e.next=function(){if(c!=d.Y)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw sb;var e=d.c[b++];return a?e:d.l[e]};return e};
var R=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var vb=function(a){if(a.j&&"function"==typeof a.j)return a.j();if(m(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b},wb=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(t(a)||m(a))la(a,b,c);else{if(a.u&&"function"==typeof a.u)var d=a.u();else if(a.j&&"function"==typeof a.j)d=void 0;else if(t(a)||m(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else for(f in d=[],e=0,a)d[e++]=f;e=vb(a);
f=e.length;for(var g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}};var xb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,yb=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null;if(0<=e){var g=c[d].substring(0,e);f=c[d].substring(e+1)}else g=c[d];b(g,f?decodeURIComponent(f.replace(/\+/g," ")):"")}};var S=function(a,b){this.s=this.L=this.A="";this.R=null;this.K=this.o="";this.i=this.Na=!1;if(a instanceof S){this.i=void 0!==b?b:a.i;zb(this,a.A);var c=a.L;T(this);this.L=c;c=a.s;T(this);this.s=c;Ab(this,a.R);c=a.o;T(this);this.o=c;Bb(this,a.g.clone());c=a.K;T(this);this.K=c}else if(a&&(c=String(a).match(xb))){this.i=!!b;zb(this,c[1]||"",!0);var d=c[2]||"";T(this);this.L=U(d);d=c[3]||"";T(this);this.s=U(d,!0);Ab(this,c[4]);d=c[5]||"";T(this);this.o=U(d,!0);Bb(this,c[6]||"",!0);c=c[7]||"";T(this);
this.K=U(c)}else this.i=!!b,this.g=new V(null,this.i)};S.prototype.toString=function(){var a=[],b=this.A;b&&a.push(W(b,Cb,!0),":");var c=this.s;if(c||"file"==b)a.push("//"),(b=this.L)&&a.push(W(b,Cb,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.R,null!=c&&a.push(":",String(c));if(c=this.o)this.s&&"/"!=c.charAt(0)&&a.push("/"),a.push(W(c,"/"==c.charAt(0)?Db:Eb,!0));(c=this.g.toString())&&a.push("?",c);(c=this.K)&&a.push("#",W(c,Fb));return a.join("")};
S.prototype.resolve=function(a){var b=this.clone(),c=!!a.A;c?zb(b,a.A):c=!!a.L;if(c){var d=a.L;T(b);b.L=d}else c=!!a.s;c?(d=a.s,T(b),b.s=d):c=null!=a.R;d=a.o;if(c)Ab(b,a.R);else if(c=!!a.o){if("/"!=d.charAt(0))if(this.s&&!this.o)d="/"+d;else{var e=b.o.lastIndexOf("/");-1!=e&&(d=b.o.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==
k?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?(T(b),b.o=d):c=""!==a.g.toString();c?Bb(b,a.g.clone()):c=!!a.K;c&&(a=a.K,T(b),b.K=a);return b};S.prototype.clone=function(){return new S(this)};
var zb=function(a,b,c){T(a);a.A=c?U(b,!0):b;a.A&&(a.A=a.A.replace(/:$/,""))},Ab=function(a,b){T(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.R=b}else a.R=null},Bb=function(a,b,c){T(a);b instanceof V?(a.g=b,a.g.sa(a.i)):(c||(b=W(b,Gb)),a.g=new V(b,a.i))};S.prototype.getQuery=function(){return this.g.toString()};S.prototype.removeParameter=function(a){T(this);this.g.remove(a);return this};var T=function(a){if(a.Na)throw Error("Tried to modify a read-only Uri");};
S.prototype.sa=function(a){this.i=a;this.g&&this.g.sa(a)};
var U=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},W=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Hb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Hb=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Cb=/[#\/\?@]/g,Eb=/[#\?:]/g,Db=/[#\?]/g,Gb=/[#\?@]/g,Fb=/#/g,V=function(a,b){this.b=this.a=null;this.h=a||null;this.i=!!b},X=function(a){a.a||(a.a=new Q,a.b=0,a.h&&yb(a.h,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,
" ")),c)}))};h=V.prototype;h.add=function(a,b){X(this);this.h=null;a=Y(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};h.remove=function(a){X(this);a=Y(this,a);return this.a.G(a)?(this.h=null,this.b-=this.a.get(a).length,this.a.remove(a)):!1};h.clear=function(){this.a=this.h=null;this.b=0};h.G=function(a){X(this);a=Y(this,a);return this.a.G(a)};h.forEach=function(a,b){X(this);this.a.forEach(function(c,d){la(c,function(c){a.call(b,c,d,this)},this)},this)};
h.u=function(){X(this);for(var a=this.a.j(),b=this.a.u(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.j=function(a){X(this);var b=[];if(m(a))this.G(a)&&(b=na(b,this.a.get(Y(this,a))));else{a=this.a.j();for(var c=0;c<a.length;c++)b=na(b,a[c])}return b};h.set=function(a,b){X(this);this.h=null;a=Y(this,a);this.G(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
h.get=function(a,b){if(!a)return b;var c=this.j(a);return 0<c.length?String(c[0]):b};h.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var a=[],b=this.a.u(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.j(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.h=a.join("&")};h.clone=function(){var a=new V;a.h=this.h;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};
var Y=function(a,b){var c=String(b);a.i&&(c=c.toLowerCase());return c};V.prototype.sa=function(a){a&&!this.i&&(X(this),this.h=null,this.a.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),this.remove(b),0<a.length&&(this.h=null,this.a.set(Y(this,b),oa(a)),this.b+=a.length))},this));this.i=a};V.prototype.extend=function(a){for(var b=0;b<arguments.length;b++)wb(arguments[b],function(a,b){this.add(b,a)},this)};var Ib=function(){this.H=("undefined"==typeof document?null:document)||{cookie:""}};h=Ib.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0!==c||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(ia()+1E3*c)).toUTCString();this.H.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.H.cookie||"").split(";"),e=0,f;e<d.length;e++){f=pa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};h.remove=function(a,b,c){var d=this.G(a);this.set(a,"",0,b,c);return d};h.u=function(){return Jb(this).keys};h.j=function(){return Jb(this).values};h.G=function(a){return void 0!==this.get(a)};h.clear=function(){for(var a=Jb(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
var Jb=function(a){a=(a.H.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=pa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}},Kb=new Ib;var Lb=function(){var a=(Kb.get("GuidedHelpResume")||"").split(":"),b=a[2];a:{for(c in va)if(va[c]==b){var c=!0;break a}c=!1}return{J:parseInt(a[0],10)||0,B:a[1]||"",source:(c?b:void 0)||"CUSTOM"}};var Mb={},Nb=new C(wa,"https://ssl.gstatic.com/inproduct_help/guidedhelp/guide_inproduct.js"),nb=Aa(Nb instanceof C&&Nb.constructor===C&&Nb.Da===xa?Nb.ua:"type_error:Const"),Pb=function(a,b){return Ob({S:b.S,document:b.document,I:b.I||"https://clients6.google.com",D:b.D,O:b.O,locale:b.locale}).then(function(){return q("help.guide.loadFlow")(a,b.B,b.Ua,b.Ia,b.source||"CUSTOM",b.document)})},Rb=function(a,b,c,d,e,f,g,k,n,A){a=A||window.top.location;if(!Qb(a).J)return!1;n=n||"";k=k||void 0;d=d||void 0;
a=Qb(a||window.top.location);b=a.J?Pb(a.J,{D:n,document:g,I:k,O:b,locale:c,source:a.source,B:a.B,S:d}):Wa();K(b);return!0},Qb=function(a){a=a instanceof S?a.clone():new S(a,void 0);var b=a.g.get("ghstartsource")||"";return{J:parseInt(a.g.get("ghstartflowid"),10)||0,B:a.g.get("ghstartstepid")||"",source:{helpcenter:"HELPCENTER",email:"EMAIL",chat:"CHAT",forum:"FORUM",marketing:"MARKETING",onebox:"ONEBOX",testing:"TESTING"}[b]||"LINK"}},Ob=function(a){window.guidedhelp=window.guidedhelp||{};if(window.guidedhelp.loaded)var b=
Va();else Sb||(Sb=rb().then()),b=Sb;return b.then(function(){q("help.guide.init")(a.O,a.locale,a.S,a.document,a.I,a.D,Mb)})},Sb=null,Tb=function(a,b,c,d,e,f,g,k,n){if(!Lb().J)return!1;a=n||"";g=g||void 0;k=k||void 0;d=d||void 0;e=Lb();e.J?(Kb.remove("GuidedHelpResume","/",""),b=Pb(e.J,{D:a,document:g,I:k,O:b,locale:c,Ua:!1,B:e.B||void 0,S:d,source:e.source})):b=Wa();K(b);return!0};
p("hgb.loadFlow",function(a,b,c,d,e,f,g,k,n,A,bc,cc){K(Pb(a,{D:cc||"",Ia:n||!1,document:A||void 0,I:bc||void 0,O:c,locale:d,S:e||void 0,source:"CUSTOM",B:k||void 0}))},void 0);p("hgb.resumeCookiedFlow",Tb,void 0);p("hgb.startFlowFromUrl",Rb,void 0);var Vb=function(a){Ub();return Aa(a)},Ub=r;var Wb=function(a,b,c){a.timeOfStartCall=(new Date).getTime();var d=c||l,e=d.document,f=ca(d);f&&(a.nonce=f);if("help"==a.flow){var g=q("document.location.href",d);!a.helpCenterContext&&g&&(a.helpCenterContext=g.substring(0,1200));g=!0;if(b&&JSON&&JSON.stringify){var k=JSON.stringify(b);(g=1200>=k.length)&&(a.psdJson=k)}g||(b={invalidPsd:!0})}b=[a,b,c];d.GOOGLE_FEEDBACK_START_ARGUMENTS=b;c=a.serverUri||"//www.google.com/tools/feedback";if(g=d.GOOGLE_FEEDBACK_START)g.apply(d,b);else{d=c+"/load.js?";
for(var n in a)b=a[n],null!=b&&!v(b)&&(d+=encodeURIComponent(n)+"="+encodeURIComponent(b)+"&");a=(e?new F(9==e.nodeType?e:e.ownerDocument||e.document):ka||(ka=new F)).createElement("SCRIPT");f&&a.setAttribute("nonce",f);E(a,Vb(d));e.body.appendChild(a)}};p("userfeedback.api.startFeedback",Wb,void 0);var Xb=function(a,b){var c=a.serverUri||"//www.gstatic.com/feedback";l.GOOGLE_HELP_SESSION_ARGUMENTS=arguments;var d=document.createElement("SCRIPT");c=Vb(c+"/session_load.js");E(d,c);window.document.body.appendChild(d)};p("userfeedback.api.help.resumeOpenHelpSession",Xb,void 0);p("userfeedback.api.help.startHelpWithChatSupport",function(a,b){a.flow="help";Wb(a,b)},void 0);var Yb=function(a,b){Xb(a,b);var c=a.serverUri||"//www.google.com/tools/feedback";l.GOOGLE_HELP_CHAT_ARGUMENTS=arguments;var d=document.createElement("SCRIPT");c=Vb(c+"/chat_load.js");E(d,c);window.document.body.appendChild(d)};p("userfeedback.api.help.loadChatSupport",Yb,void 0);var Z=function(a,b){this.Qa=a;this.Ra=b.receiverUri;this.W=b.locale||b.locale||"en".replace(/-/g,"_");this.C=b.window||b.window||top;this.ra=b.yb||b.productData||{};this.na=b.I||b.environment||"https://clients6.google.com";this.ba=b.tb||b.helpCenterPath||"";this.ja=b.D||b.apiKey||"";this.Ta=b.zb||b.renderApiUri||""};p("help.service.Lazy",Z,void 0);
Z.create=function(a,b){var c=new Z(a,b);Tb("",c.ba,c.W,null,null,null,c.C.document,c.na,c.ja)||Rb("",c.ba,c.W,null,null,null,c.C.document,c.na,c.ja,c.C.location);return c};Z.prototype.Wa=function(a){Zb();Wb($b(this,a),this.ra,this.C)};Z.prototype.startFeedback=Z.prototype.Wa;
Z.prototype.Xa=function(a,b){var c=b||{};K(Pb(a,{D:this.ja,document:this.C.document,I:this.na,O:this.ba,locale:this.W,B:c.stepId,source:c.source,S:c.theme}));window.U||(window.U={});window.U.ub=c.onerror;window.U.vb=c.ondismiss;window.U.xb=c.onstepenter;window.U.wb=c.onload};Z.prototype.startGuide=Z.prototype.Xa;Z.prototype.Za=function(){var a=q("help.guide.dismissFlow");a&&a()};Z.prototype.stopGuide=Z.prototype.Za;
Z.prototype.Ya=function(a){var b=a||{};Zb();Wb(ac(this,a),this.ra,this.C);if(b.enableCache){var c;a=null;try{(c=this.C.localStorage||null)&&(a=c["helpPanelHtml_"+this.W])}catch(g){}if(c=a)if(a=this.C.document,b=b.customZIndex,!a.getElementById("google-feedback-wizard")){var d={id:"google-feedback-wizard",style:"border: 0; vertical-align:bottom; background: none; display: block; width: 100%; height: 100%; z-index: 10000000; top: -100%; left: 0; visibility: visible; opacity: 1;position: fixed",frameborder:"0",
allowTransparency:"true"},e=(new F(a)).createElement("IFRAME");for(f in d)e.setAttribute(f,d[f]);b&&(e.style.zIndex=b);a.body.appendChild(e);var f=e.contentDocument||e.contentWindow.document;f.open();f.write(c);f.close()}}};Z.prototype.startHelp=Z.prototype.Ya;
var $b=function(a,b){var c=b||{};return{bucket:c.bucket,locale:a.W,callback:c.onend||r,serverUri:a.Ra,productId:a.Qa,productVersion:c.productVersion,authuser:c.authuser,abuseLink:c.abuseLink,customZIndex:c.customZIndex,flow:"wizard",enableAnonymousFeedback:c.enableAnonymousFeedback,allowNonLoggedInFeedback:c.allowNonLoggedInFeedback}},ac=function(a,b){var c=b||{},d=$b(a,b);ua(d,{anchor:c.anchor,contactBucket:c.contactBucket,flow:"help",helpCenterContext:c.context,helpCenterPath:a.ba,enableSendFeedback:c.enableSendFeedback||
!1,enableCache:c.enableCache,defaultHelpArticleId:c.defaultHelpArticleId,newApi:!0,suggestHost:c.suggestHost,renderApiUri:a.Ta,useInappHelpPanel:c.useInappHelpPanel||!1});return d};Z.prototype.Pa=function(a){var b=a||{};a=ac(this,a);ua(a,{escalationJSONString:b.escalationJSONString});Yb(a,this.ra)};Z.prototype.loadChatSupport=Z.prototype.Pa;Z.prototype.Sa=function(a,b,c){dc().register(a,b,c)};Z.prototype.registerHelpAction=Z.prototype.Sa;
Z.prototype.La=function(a,b){var c=dc().ia[a];c&&c.da()&&c.ma.apply(null,b||[])};Z.prototype.executeHelpAction=Z.prototype.La;Z.prototype.Ma=function(a){return dc().da(a)};Z.prototype.isHelpActionApplicable=Z.prototype.Ma;var Zb=function(){var a=window.GOOGLE_FEEDBACK_DESTROY_FUNCTION;a&&a()},dc=function(){var a=q("help.globals.actions",top);a||(a=new B,p("help.globals.actions",a,top));return a};}).call(this);
