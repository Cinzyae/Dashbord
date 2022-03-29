var C=Object.defineProperty,E=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var v=(t,e,n)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))j.call(e,n)&&v(t,n,e[n]);if(h)for(var n of h(e))A.call(e,n)&&v(t,n,e[n]);return t},w=(t,e)=>E(t,b(e));import{r as F,t as H,v as a}from"./index.758c2a52.js";var D;(function(t){t[t.Connecting=0]="Connecting",t[t.Open=1]="Open",t[t.Closing=2]="Closing",t[t.Closed=3]="Closed"})(D||(D={}));const L="/logs",J=new TextDecoder("utf-8"),N=()=>Math.floor((1+Math.random())*65536).toString(16);let M=!1,i=!1,f="",s,d;function m(t,e){let n;try{n=JSON.parse(t)}catch{console.log("JSON.parse error",JSON.parse(t))}const r=new Date,l=T(r);n.time=l,n.id=+r-0+N(),n.even=M=!M,e(n)}function T(t){const e=t.getFullYear()%100,n=a(t.getMonth()+1,2),r=a(t.getDate(),2),l=a(t.getHours(),2),o=a(t.getMinutes(),2),c=a(t.getSeconds(),2);return`${e}-${n}-${r} ${l}:${o}:${c}`}function O(t,e){return t.read().then(({done:n,value:r})=>{f+=J.decode(r,{stream:!n});const o=f.split(`
`),c=o[o.length-1];for(let g=0;g<o.length-1;g++)m(o[g],e);if(n){m(c,e),f="",console.log("GET /logs streaming done"),i=!1;return}else f=c;return O(t,e)})}function $(t){const e=Object.keys(t);return e.sort(),e.map(n=>t[n]).join("|")}let x,u;function Y(t,e){if(t.logLevel==="uninit"||i||s&&s.readyState===1)return;d=e;const n=F(t,L);s=new WebSocket(n),s.addEventListener("error",()=>{G(t,e)}),s.addEventListener("message",function(r){m(r.data,e)})}function q(){s.close(),u&&u.abort()}function z(t){!d||!s||(s.close(),i=!1,Y(t,d))}function G(t,e){if(u&&$(t)!==x)u.abort();else if(i)return;i=!0,x=$(t),u=new AbortController;const n=u.signal,{url:r,init:l}=H(t);fetch(r+L+"?level="+t.logLevel,w(p({},l),{signal:n})).then(o=>{const c=o.body.getReader();O(c,e)},o=>{i=!1,!n.aborted&&console.log("GET /logs error:",o.message)})}export{Y as f,z as r,q as s};
