(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2859],{33528:(t,e,r)=>{"use strict";r.d(e,{gJ:()=>n,Oj:()=>o,jp:()=>i,CM:()=>a,DU:()=>u,aO:()=>c,v6:()=>f,K8:()=>l,IN:()=>s,zh:()=>p,AH:()=>E,Ub:()=>v,_9:()=>d,JB:()=>y,oh:()=>b,AY:()=>O,yi:()=>m,SW:()=>R,Hk:()=>g,iQ:()=>h,dY:()=>T,$:()=>S,_u:()=>A,gG:()=>I,DI:()=>w,dZ:()=>_,qw:()=>D,f$:()=>F,bZ:()=>P,$O:()=>U,sF:()=>G,Gk:()=>C,vO:()=>j,ut:()=>M,MK:()=>N,VV:()=>L,B8:()=>x,VM:()=>Y,a3:()=>H,Xp:()=>V,DA:()=>Z,sK:()=>W,yA:()=>k,r:()=>B,iB:()=>q,EH:()=>K,Yd:()=>$,Hg:()=>z,Lz:()=>X,ye:()=>J,Jb:()=>Q,d:()=>tt,fT:()=>et,Ib:()=>rt,Pl:()=>nt,UB:()=>ot,Uh:()=>it,QT:()=>at,oL:()=>ut,Ap:()=>ct,KD:()=>ft,Z_:()=>lt,Vw:()=>st,sY:()=>pt,kA:()=>Et,gr:()=>vt,pX:()=>dt,F5:()=>yt,MO:()=>bt,dq:()=>Ot,DY:()=>mt,oO:()=>Rt,uF:()=>gt,a8:()=>ht,Pv:()=>Tt,an:()=>St,lg:()=>At,nY:()=>It,nG:()=>wt,lx:()=>_t,$S:()=>Dt,gc:()=>Ft,Uz:()=>Pt,fO:()=>Ut,$E:()=>Gt,cE:()=>Ct,JK:()=>jt,YV:()=>Mt,t9:()=>Nt,YG:()=>Lt,HT:()=>xt,MY:()=>Yt,ve:()=>Ht,hB:()=>Vt,Ox:()=>Zt,zd:()=>Wt,aT:()=>kt,VH:()=>Bt,Yb:()=>qt,Jr:()=>Kt,pP:()=>$t});var n="FEATUREGRID:SET_UP",o="FEATUREGRID:SELECT_FEATURES",i="FEATUREGRID:DESELECT_FEATURES",a="FEATUREGRID:CLEAR_SELECTION",u="FEATUREGRID:SET_SELECTION_OPTIONS",c="FEATUREGRID:TOGGLE_MODE",f="FEATUREGRID:TOGGLE_FEATURES_SELECTION",l="FEATUREGRID:FEATURES_MODIFIED",s="FEATUREGRID:NEW_FEATURE",p="FEATUREGRID:SAVE_CHANGES",E="FEATUREGRID:SAVING",v="FEATUREGRID:START_EDITING_FEATURE",d="FEATUREGRID:START_DRAWING_FEATURE",y="FEATUREGRID:DELETE_GEOMETRY",b="FEATUREGRID:DELETE_GEOMETRY_FEATURE",O="FEATUREGRID:SAVE_SUCCESS",m="FEATUREGRID:CLEAR_CHANGES",R="FEATUREGRID:SAVE_ERROR",g="FEATUREGRID:DELETE_SELECTED_FEATURES",h="SET_FEATURES",T="FEATUREGRID:SORT_BY",S="FEATUREGRID:SET_LAYER",A="QUERY:UPDATE_FILTER",I="FEATUREGRID:CHANGE_PAGE",w="FEATUREGRID:GEOMETRY_CHANGED",_="DOCK_SIZE_FEATURES",D="FEATUREGRID:TOGGLE_TOOL",F="FEATUREGRID:CUSTOMIZE_ATTRIBUTE",P="ASK_CLOSE_FEATURE_GRID_CONFIRM",U="FEATUREGRID:OPEN_GRID",G="FEATUREGRID:CLOSE_GRID",C="FEATUREGRID:CLEAR_CHANGES_CONFIRMED",j="FEATUREGRID:FEATURE_GRID_CLOSE_CONFIRMED",M="FEATUREGRID:SET_PERMISSION",N="FEATUREGRID:DISABLE_TOOLBAR",L="FEATUREGRID:ACTIVATE_TEMPORARY_CHANGES",x="FEATUREGRID:DEACTIVATE_GEOMETRY_FILTER",Y="FEATUREGRID:ADVANCED_SEARCH",H="FEATUREGRID:ZOOM_ALL",V="FEATUREGRID:INIT_PLUGIN",Z="FEATUREGRID:SIZE_CHANGE",W="FEATUREGRID:TOGGLE_SHOW_AGAIN_FLAG",k="FEATUREGRID:HIDE_SYNC_POPOVER",B="FEATUREGRID:UPDATE_EDITORS_OPTIONS",q="FEATUREGRID:LAUNCH_UPDATE_FILTER_FUNC",K={EDIT:"EDIT",VIEW:"VIEW"},$="FEATUREGRID:START_SYNC_WMS",z="FEATUREGRID:STOP_SYNC_WMS",X="STORE_ADVANCED_SEARCH_FILTER",J="LOAD_MORE_FEATURES",Q="FEATUREGRID:QUERY_RESULT",tt="FEATUREGRID:SET_TIME_SYNC",et="FEATUREGRID:SET_PAGINATION";function rt(){return{type:W}}function nt(){return{type:k}}function ot(t,e){return{type:Q,features:t,pages:e}}function it(t){return{type:X,filterObj:t}}function at(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:V,options:t}}function ut(){return{type:C}}function ct(){return{type:j}}function ft(t,e){return{type:o,features:t,append:e}}function lt(t){return{type:n,options:t}}function st(t){return{type:w,features:t}}function pt(){return{type:v}}function Et(){return{type:d}}function vt(t){return{type:i,features:t}}function dt(){return{type:y}}function yt(t){return{type:b,features:t}}function bt(){return{type:a}}function Ot(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.multiselect,r=void 0!==e&&e;return{type:u,multiselect:r}}function mt(t,e){return{type:T,sortBy:t,sortOrder:e}}function Rt(t,e){return{type:I,page:t,size:e}}function gt(t){return{type:S,id:t}}function ht(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:A,update:t,append:e}}function Tt(t,e){return{type:D,tool:t,value:e}}function St(t,e,r){return{type:F,name:t,key:e,value:r}}function At(){return{type:c,mode:K.EDIT}}function It(){return{type:c,mode:K.VIEW}}function wt(t,e){return{type:l,features:t,updated:e}}function _t(t){return{type:s,features:t}}function Dt(){return{type:p}}function Ft(){return{type:O}}function Pt(){return{type:g}}function Ut(){return{type:E}}function Gt(){return{type:m}}function Ct(){return{type:R}}function jt(){return{type:P}}function Mt(){return{type:G}}function Nt(){return{type:U}}function Lt(t){return{type:N,disabled:t}}function xt(t){return{type:M,permission:t}}function Yt(){return{type:Y}}function Ht(){return{type:H}}function Vt(){return{type:$}}function Zt(t,e){return{type:Z,size:t,dockProps:e}}var Wt=function(t){return{type:J,pages:t}},kt=function(t){return{type:L,activated:t}},Bt=function(t){return{type:x,deactivated:t}},qt=function(t){return{type:tt,value:t}},Kt=function(t){return{type:et,size:t}},$t=function(t){return{type:q,updateFilterAction:t}}},87286:(t,e,r)=>{"use strict";r.d(e,{XL:()=>o,km:()=>i,Ih:()=>a,Xw:()=>u,Pn:()=>c,DZ:()=>f,e8:()=>l,E0:()=>s,F9:()=>p,X_:()=>E,pb:()=>v,qb:()=>d,Re:()=>y,ih:()=>b,xy:()=>O,jL:()=>m,oz:()=>R,ph:()=>g,lF:()=>h,gG:()=>T,cb:()=>S,GI:()=>A,B1:()=>I,fv:()=>w,gc:()=>_,zX:()=>D,ZF:()=>F,Zb:()=>P,Fm:()=>U,sV:()=>G,Mn:()=>C,LU:()=>j,XP:()=>M,WU:()=>N,JB:()=>L,g:()=>x,ws:()=>Y,HP:()=>H,aN:()=>V,Pg:()=>W,u0:()=>k,TM:()=>B,PM:()=>q,lK:()=>K,sv:()=>$,MO:()=>z,oO:()=>X,Mc:()=>J,Zw:()=>Q,RA:()=>tt,am:()=>et,ZM:()=>rt,wm:()=>nt,Y$:()=>ot});var n=r(47310),o="LOAD_FEATURE_INFO",i="ERROR_FEATURE_INFO",a="EXCEPTIONS_FEATURE_INFO",u="CHANGE_MAPINFO_STATE",c="NEW_MAPINFO_REQUEST",f="PURGE_MAPINFO_RESULTS",l="CHANGE_MAPINFO_FORMAT",s="SHOW_MAPINFO_MARKER",p="HIDE_MAPINFO_MARKER",E="SHOW_REVERSE_GEOCODE",v="HIDE_REVERSE_GEOCODE",d="GET_VECTOR_INFO",y="NO_QUERYABLE_LAYERS",b="CLEAR_WARNING",O="FEATURE_INFO_CLICK",m="IDENTIFY:UPDATE_FEATURE_INFO_CLICK_POINT",R="IDENTIFY:TOGGLE_HIGHLIGHT_FEATURE",g="TOGGLE_MAPINFO_STATE",h="UPDATE_CENTER_TO_MARKER",T="IDENTIFY:CHANGE_PAGE",S="IDENTIFY:CLOSE_IDENTIFY",A="IDENTIFY:CHANGE_FORMAT",I="IDENTIFY:TOGGLE_SHOW_COORD_EDITOR",w="IDENTIFY:EDIT_LAYER_FEATURES",_="IDENTIFY:CURRENT_EDIT_FEATURE_QUERY",D="IDENTIFY:SET_MAP_TRIGGER",F="IDENTIFY:TOGGLE_EMPTY_MESSAGE_GFI",P="IDENTIFY:SET_SHOW_IN_MAP_POPUP";function U(t,e,r,n,i){return{type:o,data:e,reqId:t,requestParams:r,layerMetadata:n,layer:i}}function G(t,e,r,n){return{type:i,error:e,reqId:t,requestParams:r,layerMetadata:n}}function C(t,e,r,n){return{type:a,reqId:t,exceptions:e,requestParams:r,layerMetadata:n}}function j(){return{type:y}}function M(){return{type:b}}function N(t,e){return{type:c,reqId:t,request:e}}function L(t,e,r,n){return{type:d,layer:t,request:e,metadata:r,queryableLayers:n}}function x(){return{type:f}}function Y(t){return{type:l,infoFormat:t}}function H(){return{type:s}}function V(){return{type:p}}function Z(t){return{type:E,reverseGeocodeData:t.data}}function W(t){return function(e){n.Z.reverseGeocode(t).then((function(t){e(Z(t))})).catch((function(t){e(Z(t))}))}}function k(){return{type:v}}function B(){return{type:g}}function q(t){return{type:h,status:t}}function K(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:O,point:t,layer:e,filterNameList:r,overrideParams:n,itemId:o}}function $(t){return{type:m,point:t}}function z(t){return{type:R,enabled:t}}function X(t){return{type:T,index:t}}var J=function(){return{type:S}},Q=function(t){return{type:A,format:t}},tt=function(t){return{type:I,showCoordinateEditor:t}},et=function(t){return{type:w,layer:t}},rt=function(t){return{type:_,query:t}},nt=function(t){return{type:D,trigger:t}},ot=function(t){return{type:P,value:t}}},47310:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(75875),o=r.n(n),i=r(72500),a=r.n(i),u=r(27418),c=r.n(u),f={format:"json",bounded:0,polygon_geojson:1,priority:5};const l={geocode:function(t,e){var r=c()({q:t},f,e||{}),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(t,e){var r=c()({lat:t.lat,lon:t.lng},e||{},f),n=a().format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},64152:(t,e,r)=>{"use strict";r.d(e,{Z:()=>st});var n={};r.r(n),r.d(n,{getRecords:()=>B,testService:()=>$,textSearch:()=>q,validate:()=>K});var o={};r.r(o),r.d(o,{getRecords:()=>it,parseUrl:()=>ot,textSearch:()=>at});var i=r(59551),a=r(67007),u=r(3475),c=r(37275),f=r(5055),l=r.n(f),s=r(75875),p=r.n(s),E=r(27361),v=r.n(E),d=r(84596),y=r.n(d),b=r(33044),O=r(93201);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h={},T=function(t,e){return t===e||"EPSG:3857"===t&&"EPSG:900913"===e||"EPSG:900913"===t&&"EPSG:3857"===e},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=y()(v()(t,"TileMapService.TileMaps.TileMap",[])),a=o.projection,u=v()(o,"options.service.allSRS"),c=i.map((function(e){var r=e.$,n=void 0===r?{}:r;return R(R({},n),{},{href:(0,b.cleanAuthParamsFromURL)(n.href),identifier:(0,b.cleanAuthParamsFromURL)(n.href),format:(0,O.A)(n.href),tmsUrl:(0,b.cleanAuthParamsFromURL)(t.url)})})).filter((function(t){var e=t.srs;return!(a&&!u)||T(e,a)})).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"":e,o=t.srs,i=void 0===o?"":o;return!n||-1!==r.toLowerCase().indexOf(n.toLowerCase())||-1!==i.toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:c.length,numberOfRecordsReturned:Math.min(r,c.length),nextRecord:e+Math.min(r,c.length)+1,records:c.filter((function(t,n){return n>=e-1&&n<e-1+r}))}},A=function(t){return t},I=function(t,e,r,n,o){var i=h[t];return i&&(new Date).getTime()<i.timestamp+1e3*(c.ZP.getConfigProp("cacheExpire")||60)?new Promise((function(t){t(S(i.data,e,r,n,o))})):p().get(t).then((function(i){var a;return l().parseString(i.data,{explicitArray:!1},(function(e,r){a=R(R({},r),{},{url:t})})),h[t]={timestamp:(new Date).getTime(),data:a},S(a,e,r,n,o)}))},w=r(36882),_=r(49977),D=r.n(_),F=r(11847);function P(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?P(Object(r),!0).forEach((function(e){G(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function G(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var C="custom",j=function(t,e,r,n,o){var i,a,u,c=v()(o,"options.service"),f=[];if(c.provider&&c.provider!==C){var l=(i=c.provider,Object.keys(null!==(a=null===w.Z||void 0===w.Z||null===(u=w.Z[i])||void 0===u?void 0:u.variants)&&void 0!==a?a:{}));0===l.length?f.push({provider:"".concat(c.provider),title:"".concat(c.provider)}):f=l.map((function(t){return{provider:"".concat(c.provider,".").concat(t)}}))}else c.url&&(f=[U(U({},c),{},{title:c.title,type:"tileprovider",url:c.url,attribution:c.attribution,options:c.options||{},provider:C})]);return new Promise((function(t){t(function(t,e,r,n){var o=t.filter((function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).title;return!n||-1!==(void 0===t?"":t).toLowerCase().indexOf(n.toLowerCase())})),i=o.filter((function(t,n){return n>=e-1&&n<e-1+r}));return{numberOfRecordsMatched:o.length,numberOfRecordsReturned:i.length,nextRecord:e+Math.min(r,o.length)+1,records:i}}(f,e,r,n))}))};function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function L(t){var e="function"==typeof Map?new Map:void 0;return(L=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return x(t,arguments,V(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),H(n,t)})(t)}function x(t,e,r){return(x=Y()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&H(o,r.prototype),o}).apply(null,arguments)}function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(o,t);var e,r,n=(e=o,r=Y(),function(){var t,n=V(e);if(r){var o=V(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return N(this,t)});function o(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),(r=n.call(this,t)).name="ServiceValidationError",r.notification=e,r}return o}(L(Error)),W=function(t){return""===t.title||""===t.url?D().Observable.throw(new Z("Validation Error","catalog.notification.warningAddCatalogService")):D().Observable.of(t)},k=function(t){var e=t.parseUrl;return function(t){var r="catalog.notification.errorServiceUrl";return D().Observable.defer((function(){return p().get(e(t.url))})).catch((function(){throw new Z("Service Test error",r)})).switchMap((function(e){if(e.error||""===e.data)throw new Z("Service Test error",r);return D().Observable.of(t)}))}},B=function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.options,a=i||{},u=a.service,c=void 0===u?{}:u;return"tms"===c.provider&&I(t,e,r,n,o),j(0,e,r,n,o)},q=function(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.options,a=i||{},u=a.service,c=void 0===u?{}:u;return"tms"===c.provider?I(t,e,r,n,o):j(0,e,r,n,o)},K=function(t){return"tms"===t.provider?W(t):function(t){var e,r=t.provider&&"custom"!==t.provider?!!t.provider:(e=t.url,(0,F.Nw)(e));if(t.title&&r)return _.Observable.of(t);throw new Error("catalog.config.notValidURLTemplate")}(t)},$=function(t){return"tms"===t.provider?k({parseUrl:A})(t):function(t){return _.Observable.of(t)}(t)},z=r(32420);function X(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function J(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?X(Object(r),!0).forEach((function(e){Q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function tt(t){return function(t){if(Array.isArray(t))return et(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return et(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?et(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var rt={},nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=y()(v()(t,'["wfs:WFS_Capabilities"].FeatureTypeList.FeatureType',[])),i=o.map((function(e){var r=e.Name,n=e.Title,o=e.Abstract,i=e.DefaultSRS,a=e.OtherSRS,u=void 0===a?[]:a,c=e["ows:WGS84BoundingBox"],f=c["ows:LowerCorner"].split(" "),l=c["ows:UpperCorner"].split(" "),s={minx:parseFloat(f[0]),miny:parseFloat(f[1]),maxx:parseFloat(l[0]),maxy:parseFloat(l[1])};return{featureType:e,type:"wfs",url:(0,b.cleanAuthParamsFromURL)(t.url),name:r,title:n,description:o,SRS:[i].concat(tt(u)),defaultSRS:i,boundingBox:{bounds:s,crs:"EPSG:4326"}}})).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"":e,o=t.name,i=void 0===o?"":o,a=t.description;return!n||-1!==r.toLowerCase().indexOf(n.toLowerCase())||-1!==i.toLowerCase().indexOf(n.toLowerCase())||-1!==a.toLowerCase().indexOf(n.toLowerCase())})),a=i.filter((function(t,n){return n>=e-1&&n<e-1+r}));return{numberOfRecordsMatched:i.length,numberOfRecordsReturned:Math.min(r,a.length),nextRecord:e+Math.min(r,i.length)+1,records:a}},ot=z.dN,it=function(t,e,r,n,o){var i=rt[t];return i&&(new Date).getTime()<i.timestamp+1e3*(c.ZP.getConfigProp("cacheExpire")||60)?new Promise((function(t){t(nt(i.data,e,r,n,o))})):(0,z.FU)(t).then((function(i){var a;return l().parseString(i.data,{explicitArray:!1,stripPrefix:!0},(function(e,r){a=J(J({},r),{},{url:t})})),rt[t]={timestamp:(new Date).getTime(),data:a},nt(a,e,r,n,o)}))},at=function(t,e,r,n,o){return it(t,e,r,n,o)},ut=r(32354);function ct(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ft(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(r),!0).forEach((function(e){lt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ct(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function lt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const st={csw:ft({validate:W,testService:k(i.Z)},i.Z),wfs:ft({validate:W,testService:k(o)},o),wms:ft({validate:W,testService:k(a.ZP)},a.ZP),tms:n,wmts:ft({validate:W,testService:k(u.Z)},u.Z),backgrounds:ft({validate:W,testService:k(ut.Z)},ut.Z)}},56175:(t,e,r)=>{"use strict";r.d(e,{Z:()=>q});var n=r(49977),o=r(9669),i=r.n(o),a=r(37691),u=r.n(a),c=r(30647),f=r(91175),l=r.n(f),s=r(27361),p=r.n(s),E=r(13311),v=r.n(E),d=r(1469),y=r.n(d),b=r(47037),O=r.n(b),m=r(13218),R=r.n(m),g=r(3674),h=r.n(g),T=r(93220),S=r.n(T),A=r(31273),I=r(80416),w=r(97395),_=r(82904),D=r(33528),F=r(87286),P=r(53001),U=r(88113),G=r(31935),C=r(8316),j=r(75110),M=r(76712),N=r(86267),L=r(24262),x=r(89919);function Y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||V(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t){return function(t){if(Array.isArray(t))return Z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||V(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(t,e){if(t){if("string"==typeof t)return Z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(t,e):void 0}}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const q=function(t){return{recordSearchEpic:function(e,r){return e.ofType(A.V3).switchMap((function(e){var o=e.format,i=e.url,a=e.startPosition,u=e.maxRecords,c=e.text,f=e.options;return n.Observable.defer((function(){return t[o].textSearch(i,a,u,c,k({options:f},(0,U.HN)(r.getState())))})).switchMap((function(t){return t.error?n.Observable.of((0,A.m)(t)):n.Observable.of((0,A.nX)({url:i,startPosition:a,maxRecords:u,text:c},t))})).startWith((0,A.K4)(!0)).catch((function(t){return n.Observable.of((0,A.m)(t))}))}))},addLayersFromCatalogsEpic:function(e,r){return e.ofType(A.WX).filter((function(t){var e=t.layers,r=t.sources;return y()(e)&&y()(r)&&e.length&&e.length===r.length})).switchMap((function(e){var o=e.layers,i=e.sources,a=e.options,u=e.startPosition,c=void 0===u?1:u,f=e.maxRecords,s=void 0===f?4:f,p=r.getState(),E=a||(0,U.bA)(p),v=(0,U.b6)(p),d=o.filter((function(t,e){return!!v[i[e]]})).map((function(e,r){var a=v[i[r]],u=a.type,f=a.url,l=o[r];return n.Observable.defer((function(){return t[u].textSearch(f,c,s,l,E).catch((function(){return{results:[]}}))})).map((function(t){return k(k({},t),{},{format:u,url:f,text:l})}))}));return n.Observable.forkJoin(d).switchMap((function(t){return y()(t)&&t.length?n.Observable.of(t.map((function(t){var e=t.format,r=t.url,o=t.text,i=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,["format","url","text"]),a=(0,C.Ps)(p),u=(0,M.eL)(e,i,E,a)||[],c=l()(u.filter((function(t){return t.identifier===o}))),f=(0,M.tW)(c),s=f.wms,v=f.wmts,d={},y={},b=(0,U.kS)(p);if(s){var O=(0,M.n0)(s.SRS);if(s.SRS.length>0&&!N.default.isAllowedSRS("EPSG:3857",O))return n.Observable.empty();d=(0,M.ll)(c,"wms",{removeParams:b,catalogURL:"csw"===e&&r?r+"?request=GetRecordById&service=CSW&version=2.0.2&elementSetName=full&id="+c.identifier:r},y)}else if(v){d={};var m=(0,M.n0)(v.SRS);if(v.SRS.length>0&&!N.default.isAllowedSRS("EPSG:3857",m))return n.Observable.empty();d=(0,M.ll)(c,"wmts",{removeParams:b},y)}else(0,M.FJ)(c).esri&&(d=(0,M.AD)(c,y));return c?d:o}))):n.Observable.empty()}))})).mergeMap((function(t){if(t){var e=t.filter((function(t){return O()(t)})).join(" "),r=[];return e&&(r=[(0,A.E9)(e)]),r=[].concat(H(r),H(t.filter((function(t){return R()(t)})).map((function(t){return(0,I.A4)(t)})))),n.Observable.from(r)}return n.Observable.empty()})).catch((function(){return n.Observable.empty()}))},newCatalogServiceAdded:function(e,r){return e.ofType(A.mh).switchMap((function(){var e=r.getState(),o=(0,U._S)(e);return n.Observable.of(o).switchMap((function(e){var r,o,i;return null!==(r=null===(o=t[e.type])||void 0===o||null===(i=o.validate)||void 0===i?void 0:i.call(o,e))&&void 0!==r?r:n.Observable.of(e)})).switchMap((function(e){var r,o,i;return null!==(r=null===(o=t[e.type])||void 0===o||null===(i=o.testService)||void 0===i?void 0:i.call(o,e))&&void 0!==r?r:n.Observable.of(e)})).switchMap((function(){return n.Observable.of((0,A.N3)(o),(0,w.Vp)({title:"notification.success",message:"catalog.notification.addCatalogService",autoDismiss:6,position:"tc"}))})).startWith((0,A.Rc)(!0)).catch((function(t){return n.Observable.of((0,w.vU)({exception:t,title:"notification.warning",message:t.notification||"catalog.notification.warningAddCatalogService",autoDismiss:6,position:"tc"}))})).concat(n.Observable.of((0,A.Rc)(!1)))}))},deleteCatalogServiceEpic:function(t,e){return t.ofType(A.$Y).switchMap((function(){var t=e.getState(),r=(0,U.Cb)(t),o=(0,U.b6)(t),i=o[r]?(0,w.Vp)({title:"notification.warning",message:"catalog.notification.serviceDeletedCorrectly",autoDismiss:6,position:"tc"}):(0,w.vU)({title:"notification.warning",message:"catalog.notification.impossibleDeleteService",autoDismiss:6,position:"tc"}),a=(0,A.SU)(r);return o[r]?n.Observable.of(i,a):n.Observable.of(i)}))},openCatalogEpic:function(t){return t.ofType(_.At).filter((function(t){return"metadataexplorer"===t.control&&t.value})).switchMap((function(){return n.Observable.of((0,D.YV)(),(0,F.g)(),(0,F.aN)())}))},getMetadataRecordById:function(e,r){return e.ofType(A.UT).switchMap((function(e){var o=e.metadataOptions,a=void 0===o?{}:o,f=r.getState(),l=(0,j.Iz)(f);return n.Observable.defer((function(){return t.wms.getCapabilities((0,L.Fh)(l))})).switchMap((function(e){var r=p()(e,"capability.layer.layer",[]),o=1===r.length?r[0].metadataURL:v()(r,(function(t){return t.name===l.name.split(":")[1]})),f=p()(v()(o,(function(t){return O()(t.type)&&"iso19115:2003"===t.type.toLowerCase()&&("application/xml"===t.format||"text/xml"===t.format)})),"onlineResource.href"),s=p()(v()(o,(function(t){return O()(t.type)&&"iso19115:2003"===t.type.toLowerCase()&&"text/html"===t.format})),"onlineResource.href"),E=v()(p()(a,"extractors",[]),(function(t){var e=t.properties,r=t.layersRegex,n=r?new RegExp(r):null;return R()(e)&&(!r||n.test(l.name))})),d=s?{metadataUrl:s}:{},y=n.Observable.defer((function(){return t.csw.getRecordById(l.catalogURL)})).switchMap((function(t){return t&&t.error?n.Observable.of((0,w.vU)({title:"notification.warning",message:"toc.layerMetadata.notification.warnigGetMetadataRecordById",autoDismiss:6,position:"tc"}),(0,I.c9)(d,!1)):t&&t.dc?n.Observable.of((0,I.c9)(k(k({},d),t.dc),!1)):n.Observable.empty()})),b=n.Observable.defer((function(){return i().get(f)})).pluck("data").map((function(t){return(new c.a).parseFromString(t)})).map((function(t){var e=u().useNamespaces(a.xmlNamespaces||{});return function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return S()(r).reduce((function(r,o){var i,a=Y(o,2),u=a[0],c=a[1];if(R()(c)&&O()(c.xpath)&&R()(c.properties)&&h()(c.properties).length>0)0===(i=e(c.xpath,n).map((function(e){return t(c.properties,e)}))).length&&(i=null);else{var f,l=e(c,n);1===l.length?i=null!==(f=p()(l[0],"nodeValue"))&&void 0!==f?f:p()(l[0],"childNodes[0].nodeValue"):l.length>1&&(i=l.map((function(t){return p()(t,"childNodes[0].nodeValue")})).filter((function(t){return!!t})))}return k(k({},r),i?B({},u,i):{})}),{})}(E.properties,t)})).switchMap((function(t){return n.Observable.of((0,I.c9)(k(k({},d),t),!1))}));return f&&E?b:l.catalogURL?y:n.Observable.of((0,I.c9)(d,!1))})).startWith((0,I.c9)({},!0)).catch((function(){return n.Observable.of((0,w.vU)({title:"notification.warning",message:"toc.layerMetadata.notification.warnigGetMetadataRecordById",autoDismiss:6,position:"tc"}),(0,I.c9)({},!1))}))}))},autoSearchEpic:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.getState,o=void 0===r?function(){}:r;return t.ofType(A.CO).debounce((function(){var t=o(),e=(0,U.l2)(t);return n.Observable.timer(e)})).switchMap((function(t){var e=t.text,r=o(),i=(0,U.y)(r),a=(0,U.R7)(r),u=a.type,c=a.url;return n.Observable.of((0,A.tt)({format:u,url:c,startPosition:1,maxRecords:i,text:e}))}))},catalogCloseEpic:function(t,e){return t.ofType(A.ur).switchMap((function(){var t,r=e.getState(),o=(0,G.YL)(r),i=(0,U.b6)(r);return(t=n.Observable).of.apply(t,H([(0,_.pu)("metadataexplorer","enabled",!1,"group",null),(0,A.In)("view"),(0,A.ye)()].concat("backgroundSelector"===o?[(0,A.Dw)(l()(h()(i))),(0,P.vw)(!0)]:[])))}))},getSupportedFormatsEpic:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.getState,o=void 0===r?function(){}:r;return t.ofType(A.xM).filter((function(t){return(0,U.CK)(o())!==(null==t?void 0:t.url)})).switchMap((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.url,r=void 0===e?"":e;return n.Observable.defer((function(){return(0,M.T6)(r,!0)})).switchMap((function(t){return n.Observable.of((0,A.nx)(t,r))})).let((0,x.hP)((0,A.We)(!0),(0,A.We)(!1),(function(){return n.Observable.of((0,w.vU)({title:"layerProperties.format.error.title",message:"layerProperties.format.error.message"}),(0,A.We)(!1))})))}))}}}},89919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>l});var n=r(84596),o=r.n(n),i=r(49977),a=r.n(i);function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,u(e))},l=function(t,e,r){return function(n){return(r?f(n,o()(t)).catch(r):f(n,o()(t))).concat(a().Observable.from(o()(e)))}}},38842:(t,e,r)=>{"use strict";r.d(e,{wk:()=>s,Yf:()=>p,c3:()=>E,fY:()=>v});var n=r(18721),o=r.n(n),i=r(27361),a=r.n(i),u=r(13311),c=r.n(u),f=r(22222),l=r(8316),s=function(t){return o()(t,"localConfig.localizedLayerStyles")},p=function(t){var e=a()(t,"localConfig.plugins.dashboard",[]),r=c()(e,(function(t){return"DashboardEditor"===t.name}))||{};return a()(r,"cfg.catalog.localizedLayerStyles",!1)},E=function(t){return a()(t,"localConfig.localizedLayerStyles.name","mapstore_language")},v=(0,f.P1)(s,E,l.KV,(function(t,e,r){var n=[];return t&&n.push({name:e,value:r}),n}))},93201:(t,e,r)=>{"use strict";r.d(e,{A:()=>i});var n=r(64721),o=r.n(n),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=t.split("?")[0].split("@");if(e.length>1){var r=e[e.length-1];if(o()(["png","png8","jpeg","vnd.jpeg-png","gif"],r))return r}return null}},11847:(t,e,r)=>{"use strict";r.d(e,{ij:()=>b,w0:()=>O,vl:()=>m,K2:()=>R,Nw:()=>g});var n=r(72500),o=r.n(n),i=r(1469),a=r.n(i),u=r(47037),c=r.n(u),f=r(18446),l=r.n(f),s=r(89734),p=r.n(s),E=r(13311),v=r.n(E),d=r(64210);function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=function(t){if(!t)return{};var e=!(0===t.indexOf("http")),r=e?[]:t.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(e){var n=window.location;r[1]=n.protocol,r[3]=n.hostname,r[4]=n.port,r[5]=t}r[4]=""!==r[4]&&r[4]?r[4]:"https:"===r[1]?"443":"80",r[5]=r[5]?r[5]:t.slice(r[0].length);var o,i,a=(i=6,function(t){if(Array.isArray(t))return t}(o=r)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(o,i)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[1],c=a[3],f=a[4],l=a[5],s=0===l.indexOf("/")?l.split("/")[1]:"";return{protocol:u,domain:c,port:f,rootPath:l,applicationRootPath:s}},O=function(t,e){var r=a()(t)?t[0]:t,n=a()(e)?e[0]:e;if(r===n)return!0;if(!r||!n)return!1;if(!c()(r)||!c()(n))return!1;var i=o().parse(r),u=o().parse(n),f=b(r),s=b(n),E=f.protocol===s.protocol,v=f.domain===s.domain,d=f.port===s.port,y=i.pathname===u.pathname,O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t===e)return!0;if(!t&&!e)return!0;var r=t?t.split("&").filter((function(t){return!!t})):[],n=e?e.split("&").filter((function(t){return!!t})):[];return l()(p()(r),p()(n))}(i.query,u.query);return E&&d&&v&&y&&O},m=function(t){return d.parse(t)},R=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,r=new RegExp(e);return r.test(t)},g=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,n=new RegExp(r),o=n.test(t);if(!o)return!1;if(o&&!e)return!0;if(o&&e){var i=/\{(.*?)\}/.test(t);return 0===e.filter((function(t){return v()(i,t)})).length}return!1}}}]);