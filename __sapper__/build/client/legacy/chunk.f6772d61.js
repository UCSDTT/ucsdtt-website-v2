import"./chunk.5c78171e.js";function t(t){var n=t-1;return n*n*n+1}function n(t,n){var o=n.delay,a=void 0===o?0:o,r=n.duration,i=void 0===r?400:r,c=+getComputedStyle(t).opacity;return{delay:a,duration:i,css:function(t){return"opacity: ".concat(t*c)}}}function o(n,o){var a=o.delay,r=void 0===a?0:a,i=o.duration,c=void 0===i?400:i,e=o.easing,d=void 0===e?t:e,u=o.x,s=void 0===u?0:u,y=o.y,p=void 0===y?0:y,v=o.opacity,f=void 0===v?0:v,l=getComputedStyle(n),m=+l.opacity,g="none"===l.transform?"":l.transform,x=m*(1-f);return{delay:r,duration:c,easing:d,css:function(t,n){return"\n\t\t\ttransform: ".concat(g," translate(").concat((1-t)*s,"px, ").concat((1-t)*p,"px);\n\t\t\topacity: ").concat(m-x*n)}}}export{o as a,n as f};
//# sourceMappingURL=chunk.f6772d61.js.map
