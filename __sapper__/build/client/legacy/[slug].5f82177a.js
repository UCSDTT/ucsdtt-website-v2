import{_ as t,a as s,b as n,c as a,i as e,s as o,d as r,S as i,f as c,e as u,t as p,j as f,g as h,h as l,k as m,l as d,m as v,o as x,y as b,n as g}from"./chunk.037d3820.js";import{_ as j,a as k}from"./chunk.b05ee1a3.js";function y(t){var s,n,a,e,o,r,i=t.post.title,j=t.post.html;return document.title=s=t.post.title,{c:function(){n=c(),a=u("h1"),e=p(i),o=c(),r=u("div"),this.h()},l:function(t){n=f(t,"\n\n"),a=h(t,"H1",{},!1);var s=l(a);e=f(s,i),s.forEach(m),o=f(t,"\n\n"),r=h(t,"DIV",{class:!0},!1),l(r).forEach(m),this.h()},h:function(){d(r,"class","content svelte-gnxal1")},m:function(t,s){v(t,n,s),v(t,a,s),x(a,e),v(t,o,s),v(t,r,s),r.innerHTML=j},p:function(t,n){t.post&&s!==(s=n.post.title)&&(document.title=s),t.post&&i!==(i=n.post.title)&&b(e,i),t.post&&j!==(j=n.post.html)&&(r.innerHTML=j)},i:g,o:g,d:function(t){t&&(m(n),m(a),m(o),m(r))}}}function H(t){return w.apply(this,arguments)}function w(){return(w=j(k.mark(function t(s){var n,a,e;return k.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(e=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:e});case 11:this.error(a.status,e.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function E(t,s,n){var a=s.post;return t.$set=function(t){"post"in t&&n("post",a=t.post)},{post:a}}export default(function(c){function u(t){var i;return s(this,u),i=n(this,a(u).call(this)),e(r(i),t,E,y,o,["post"]),i}return t(u,i),u}());export{H as preload};
//# sourceMappingURL=[slug].5f82177a.js.map
