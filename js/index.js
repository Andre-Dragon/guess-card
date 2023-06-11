"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){var n;if(e)return"string"==typeof e?_arrayLikeToArray(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,c,o,i=[],l=!0,u=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=c.call(n)).done)&&(i.push(a.value),i.length!==t);l=!0);}catch(e){u=!0,r=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw r}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}document.addEventListener("DOMContentLoaded",function(){var e,r,t,n,u,c,o,i,l,s,d,m,f,p,_,y;function g(e){return e<10?"0"+e:e}function b(e,t){return e.classList.add(t)}function v(e,t){return e.classList.remove(t)}function h(e,t){return Math.floor(Math.random()*(t-e)+e)}function C(){var e=new DocumentFragment;e.append(function(){var e=u[u.theme],t=document.createElement("div");t.className="confetti";for(var n,a,r=0;r<=u.figureCount;r++){var c={speed:h(u.min,u.max),color:e[h(0,e.length)],name:u.name[h(0,u.name.length)]};t.insertAdjacentHTML("beforeend",(a=void 0,a=(n=c).color,n=c.name,'\n            <i style="--speed: '.concat(c.speed,"; --bg: ").concat(a,'" class="').concat(n,'"></i>\n        ')))}return t}()),t.append(e),u.timeoutOpacity=setTimeout(function(){return t.style.opacity=0},7500),u.timeoutInnerHtml=setTimeout(function(){return t.innerHTML=""},8e3)}function E(){u.firstCard=null,u.secondCard=null,u.clickable=!0}function L(){document.getElementById("minute").textContent=g(u.minute=0),document.getElementById("second").textContent=g(u.second=0),document.getElementById("millisecond").textContent=g(u.ms=0)}function T(){var e=document.getElementById("minute"),t=document.getElementById("second"),n=document.getElementById("millisecond"),a=function(){59<u.second&&(u.minute++,e.textContent=g(u.minute),u.second=0,t.textContent=g(u.second)),59===u.minute&&59===u.second&&99===u.ms&&(clearInterval(u.interval),c(),L(),setTimeout(function(){return y(u.difficult)},600))};u.ms++,n.textContent=g(u.ms),99<u.ms&&(u.second++,t.textContent=g(u.second),u.ms=0,n.textContent=g(u.ms)),a()}function I(e,t){b(e,"overlay"),v(t,"fa-circle-pause"),b(t,"fa-circle-play")}function x(e){Object.entries(n[e]).forEach(function(e){var e=_slicedToArray(e,2),t=e[0],e=e[1];document.documentElement.style.setProperty(t,e)})}function w(){clearTimeout(u.timeoutOpacity),clearTimeout(u.timeoutInnerHtml),clearInterval(u.interval),L()}function k(){function e(e){var t=document.createElement("button");return t.className="game__field--btn",t.textContent="".concat(e," Карт"),t.addEventListener("click",function(){c(),setTimeout(function(){return y(e)},600)}),t}var t=document.createElement("h2");t.textContent="Выбор сложности",t.className="game__field--title",_(),r.append(t,e(8),e(12),e(16),e(20))}e=document.querySelector(".preloader"),r=document.querySelector(".game__field--wrap"),t=document.querySelector(".winning"),n={default:{"--default-color":"#faffaf","--preloader-color":"#ce4100","--button-bg":"#ce4100","--button-hover-bg":"#861500","--button-hover-color":"#faffaf","--button-color":"#faffaf","--disabled-bg":"#505050","--card-bg":"#ce4100","--card-color":"#faffaf","--card-flip-bg":"#861500","--card-flip-color":"#faffaf","--card-winner-bg":"#003939","--box-winner-bg":"#ce4100e6"},dark:{"--default-color":"#faffaf","--preloader-color":"#faffaf","--button-bg":"transparent","--button-hover-bg":"#faffaf","--button-color":"#faffaf","--button-hover-color":"#161e2c","--disabled-bg":"#505050","--card-bg":"transparent","--card-color":"#faffaf","--card-flip-bg":"#faffaf","--card-flip-color":"#161e2c","--card-winner-bg":"#505050","--box-winner-bg":"#000000e6"}},u={default:["cyan","red","blue","green","indigo","pink","yellow","purple","white","orange"],dark:["black","white"],name:["square","rectangle","hexagram","pentagram","dodecagram"],min:15,max:45,figureCount:40,theme:"default",firstCard:null,secondCard:null,clickable:!0,difficult:null,interval:null,minute:0,second:0,ms:0,timeoutOpacity:null,timeoutInnerHtml:null},c=function(){e.style.zIndex=9999,setTimeout(function(){return v(e,"close")},100),setTimeout(function(){return b(e,"close")},1e3),setTimeout(function(){return e.style.zIndex=-1},1100)},o=function(){var e=document.createElement("div");return e.className="game__timer--wrap",e.insertAdjacentHTML("beforeend",'\n    <div class="game__total">\n                <div class="game__total--text"><span>Время:</span></div>\n    <div class="game__indicator game__timer">\n        <span class="game__timer--minute" id="minute">'.concat(g(u.minute),'</span>\n        <span>:</span>\n        <span class="game__timer--second" id="second">').concat(g(u.second),'</span>\n        <span>:</span>\n        <span class="game__timer--millisecond" id="millisecond">').concat(g(u.ms),"</span>\n    </div>\n    </div>\n    ")),e},i=function(e,t){var n=document.createElement("div"),a=document.createElement("span"),r=document.createElement("span");return n.className="game__card",a.classList.add("fa","fa-".concat(e)),r.classList.add("fa","fa-".concat(t)),n.append(r,a),n},l=function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var a=[e[t],e[n]];e[n]=a[0],e[t]=a[1]}return e},s=function(e){return e.reduce(function(e,t){return e.concat([t,t])},[])},d=function(e){var t=["heart","home","lock","star","wifi","bomb","car","cogs","paperclip","bolt"];switch(e){case 8:return t.slice(0,4);case 12:return t.slice(0,6);case 16:return t.slice(0,8);case 20:return t}},m=function(){var l=document.querySelectorAll(".game__card");l.forEach(function(o,i){return o.addEventListener("click",function(){var e,t,n,a,r,c;!0!==u.clickable||o.classList.contains("success")||(o.classList.add("flip"),null===u.firstCard&&(u.firstCard=i),i!==u.firstCard&&(u.secondCard=i,u.clickable=!1),null!==u.firstCard&&null!==u.secondCard&&u.firstCard!==u.secondCard&&(l[u.firstCard].firstElementChild.className===l[u.secondCard].firstElementChild.className?setTimeout(function(){b(l[u.firstCard],"success"),b(l[u.secondCard],"success"),E()},500):setTimeout(function(){v(l[u.firstCard],"flip"),v(l[u.secondCard],"flip"),E()},500)),e=document.querySelector(".game__table"),t=document.querySelectorAll(".game__card"),n=document.querySelector(".game__start"),a=document.querySelector(".game__theme"),r=document.querySelector(".game__win"),c=document.querySelector(".game__indicator"),Array.from(t).every(function(e){return e.className.includes("flip")})&&(setTimeout(function(){n.disabled=!0,a.disabled=!0,b(r,"open"),b(n,"disabled"),b(a,"disabled"),I(e,n),b(c,"animate-opacity")},500),clearInterval(u.interval),r.style.zIndex=15,C()))})})},f=function(){var e=document.createElement("div"),t=document.createElement("button"),n=document.createElement("button"),a=document.createElement("button"),r=document.createElement("button");return e.className="game__btns--wrap",t.classList.add("game__btn","game__start","fa","fa-circle-play"),n.classList.add("game__btn","game__replay","fa","fa-repeat"),a.classList.add("game__btn","game__restart","fa","fa-power-off"),r.classList.add("game__btn","game__theme","fa","fa-palette",u.theme),e.append(t,n,a,r),e},p=function(){var n=document.querySelector(".game__start"),e=document.querySelector(".game__replay"),t=document.querySelector(".game__restart"),a=document.querySelector(".game__theme");n.addEventListener("click",function(){var e,t=document.querySelector(".game__table");t.classList.contains("overlay")?(e=n,v(t,"overlay"),v(e,"fa-circle-play"),b(e,"fa-circle-pause"),u.interval=setInterval(T,10)):(I(t,n),clearInterval(u.interval))}),e.addEventListener("click",function(){c(),w(),setTimeout(function(){return y(u.difficult)},600)}),t.addEventListener("click",function(){c(),w(),setTimeout(k,600)}),a.addEventListener("click",function(){a.classList.contains("default")?(u.theme="dark",b(a,"dark"),v(a,"default")):(u.theme="default",b(a,"default"),v(a,"dark")),x(u.theme)})},_=function(){r.innerHTML="",t.innerHTML="",t.style.opacity=1},y=function(e){var t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("p"),a=(_(),u.difficult=e,a.textContent="Победа в игре",t.classList.add("game__table","overlay"),n.className="game__win",a.className="game__win--text",n.append(a),t.append(n),d(e)),n=s(a);l(n).forEach(function(e){return t.append(i("file-circle-question",e))}),r.append(o(),t,f()),m(),p()},setTimeout(function(){return b(e,"close")},1e3),setTimeout(function(){return e.style.zIndex=-1},1100),k()});