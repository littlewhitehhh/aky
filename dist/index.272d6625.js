(()=>{"use strict";var e={791:(e,t,r)=>{e.exports=r.p+"images/[content].png"},22:(e,t,r)=>{e.exports=r.p+"images/[content].webp"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=r(791),t=r(22);console.log("say hello "),console.log("hello world");var o=document.getElementById("app");console.log(o);var n=document.createElement("img");n.src=e,o.appendChild(n);var c=document.createElement("img");c.src=t,o.appendChild(c)})()})();