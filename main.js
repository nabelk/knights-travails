(()=>{var e={971:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>d});const{log:r,table:n}=console,a=function(){let e,o=Array.from({length:8},(()=>new Array(8).fill("")));return{createBoard:o,knightPosition:function(t){const r=e;e&&(o[r[0]][r[1]]=""),e=[t[0],t[1]],o[t[0]][t[1]]="K"}}}();a.knightPosition([3,3]);class d{removeBoard(){document.querySelectorAll("#board > div").forEach((e=>e.remove()))}displayBoard(){this.removeBoard(),a.createBoard.forEach(((e,o)=>{const t=document.createElement("div");t.className=`row-${o}`,e.forEach(((e,r)=>{const n=document.createElement("div");n.textContent=r+e,n.dataset.coor=[o,r],t.appendChild(n)})),document.querySelector("#board").appendChild(t)})),this.boardColumnEvent()}boardColumnEvent(){document.querySelectorAll("#board > div").forEach((e=>e.addEventListener("click",(e=>{a.knightPosition(e.target.dataset.coor.split(",").map(Number)),this.displayBoard()}))))}}}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var a=o[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{default:e}=t(971),o=new e;o.displayBoard(),o.boardColumnEvent()})()})();