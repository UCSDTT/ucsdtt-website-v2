import"./chunk.b17b5815.js";function t(t){const n=t-1;return n*n*n+1}function n(t,{delay:n=0,duration:a=400}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:a,css:t=>`opacity: ${t*o}`}}function a(n,{delay:a=0,duration:o=400,easing:r=t,x:e=0,y:s=0,opacity:i=0}){const c=getComputedStyle(n),u=+c.opacity,y="none"===c.transform?"":c.transform,p=u*(1-i);return{delay:a,duration:o,easing:r,css:(t,n)=>`\n\t\t\ttransform: ${y} translate(${(1-t)*e}px, ${(1-t)*s}px);\n\t\t\topacity: ${u-p*n}`}}export{a,n as f};
//# sourceMappingURL=chunk.e6092f58.js.map
