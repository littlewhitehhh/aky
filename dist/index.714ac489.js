!function(){"use strict";var t={791:function(t,e,r){t.exports=r.p+"images/[content].png"},22:function(t,e,r){t.exports=r.p+"images/[content].webp"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),function(){var t=r(791),e=r(22);console.log("say hello "),console.log("hello world");var n=document.getElementById("app");console.log(n);var o=document.createElement("img");o.src=t,n.appendChild(o);var c=document.createElement("img");c.src=e,n.appendChild(c)}()}();