!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.TabChannel=n():e.TabChannel=n()}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var o=null,a=!1,i="TcMsg_oo_",s=[];function l(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<(e||5);r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var c=function(){function e(n){if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),!window.localStorage)throw new Error("localStorage not available");if(!n)throw new Error("channel name required");this.name=n,this.channelId=n,this.handler=function(e){var n=e.key,t=e.newValue,r=null;if(n.indexOf(i)>-1&&t){try{r=JSON.parse(t)}catch(e){this.onmessageerror(e)}if(r.tabId!==o&&r.channelId===this.channelId&&!this.closed){var a="string"==typeof r.message?r.message:JSON.stringify(r.message);this.onmessage({data:a}),window.localStorage.removeItem(n)}}}.bind(this),o=o||l(),s.push(this.channelId),a||(a=!0,window.addEventListener("storage",this.handler,!1))}return r(e,[{key:"postMessage",value:function(e){if(this.closed)this.onmessageerror(new Error("channel closed"));else{var n={channelId:this.channelId,tabId:o,message:"string"==typeof e?e:JSON.stringify(e)},t=i+l()+"_"+this.channelId;try{window.localStorage.setItem(t,JSON.stringify(n))}catch(e){this.onmessageerror(e)}setTimeout(function(){window.localStorage.removeItem(t)},1e3)}}},{key:"close",value:function(){this.closed=!0;var e=s.indexOf(this.channelId);e>-1&&s.splice(e,1),0===s.length&&(window.removeEventListener("storage",this.handler),a=!1)}},{key:"onmessage",value:function(){}},{key:"onmessageerror",value:function(){}}]),e}();n.default=window.BroadcastChannel||c}])});