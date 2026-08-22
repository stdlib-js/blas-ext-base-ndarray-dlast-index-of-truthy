"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=n(function(g,t){
var v=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),s=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-stride/dist'),q=require('@stdlib/ndarray-base-offset/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist'),x=require('@stdlib/ndarray-base-clip-index/dist'),c=require('@stdlib/blas-ext-base-dlast-index-of-truthy/dist').ndarray;function l(i){var r,e,a;return a=i[0],r=v(i[1]),e=s(a,0),r=x(r,e),r>=e&&(r=e-1),c(r+1,f(a),d(a,0),q(a))}t.exports=l
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
