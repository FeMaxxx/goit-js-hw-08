!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return s.Date.now()};function g(e,t,n){var i,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,l=t,f=e.apply(r,n)}function T(e){return l=e,a=setTimeout(w,t),d?g(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=y();if(h(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?g(e):(i=o=void 0,f)}function S(){var e=y(),n=h(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return T(c);if(s)return a=setTimeout(w,t),g(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},S.flush=function(){return void 0===a?f:O(y())},S}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=f.test(t);return r||a.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var T=document.querySelector("iframe"),h=new Vimeo.Player(T),w="videoplayer-current-time";h.setCurrentTime(localStorage.getItem(w)),h.getEnded(localStorage.removeItem(w)),h.on("timeupdate",e(t)((function(){h.getCurrentTime().then((function(e){localStorage.setItem(w,e)}))}),2e3))}();
//# sourceMappingURL=02-video.4f623aba.js.map