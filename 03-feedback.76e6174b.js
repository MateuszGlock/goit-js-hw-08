!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,b=Math.min,g=function(){return m.Date.now()};function p(e,t,n){var i,a,o,u,l,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=a;return i=a=void 0,s=t,u=e.apply(r,n)}function O(e){return s=e,l=setTimeout(h,t),c?p(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=o}function h(){var e=g();if(S(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return m?b(n,o-(e-s)):n}(e))}function w(e){return l=void 0,d&&i?p(e):(i=a=void 0,u)}function T(){var e=g(),n=S(e);if(i=arguments,a=this,f=e,n){if(void 0===l)return O(f);if(m)return l=setTimeout(h,t),p(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(c=!!n.leading,o=(m="maxWait"in n)?v(j(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=a=l=void 0},T.flush=function(){return void 0===l?u:w(g())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):o.test(t)?NaN:+t}t=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),p(e,t,{leading:i,maxWait:t,trailing:a})};var O=document.querySelector("form.feedback-form"),S=O.querySelector('button[type="submit"]'),h=localStorage.getItem("feedback-form-state");if(h){var w=JSON.parse(h);O.elements.email.value=w.email,O.elements.message.value=w.message}O.elements.email.value.includes("@")&&""!=O.elements.message.value||(S.disabled=!0);var T=e(t)((function(){var e={email:O.elements.email.value,message:O.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);O.addEventListener("input",(function(){T();var e=O.elements.email.value.trim(),t=O.elements.message.value.trim();S.disabled=!e.includes("@")||!t})),O.addEventListener("submit",(function(e){e.preventDefault();var t=O.elements.email.value.trim(),n=O.elements.message.value.trim();console.log({email:t,message:n}),localStorage.removeItem("feedback-form-state"),O.elements.email.value="",O.elements.message.value="",S.disabled=!0}))}();
//# sourceMappingURL=03-feedback.76e6174b.js.map
