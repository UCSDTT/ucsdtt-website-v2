import{S as t,i as s,s as o,a,e,t as n,d as i,c as r,b as p,f as c,g as l,h as u,j as h,u as f,n as m}from"./chunk.de297630.js";function d(t){var s,o,d,g,j,v,x=t.post.title,H=t.post.html;return document.title=s=t.post.title,{c(){o=a(),d=e("h1"),g=n(x),j=a(),v=e("div"),this.h()},l(t){o=i(t,"\n\n"),d=r(t,"H1",{},!1);var s=p(d);g=i(s,x),s.forEach(c),j=i(t,"\n\n"),v=r(t,"DIV",{class:!0},!1),p(v).forEach(c),this.h()},h(){l(v,"class","content svelte-gnxal1")},m(t,s){u(t,o,s),u(t,d,s),h(d,g),u(t,j,s),u(t,v,s),v.innerHTML=H},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&x!==(x=o.post.title)&&f(g,x),t.post&&H!==(H=o.post.html)&&(v.innerHTML=H)},i:m,o:m,d(t){t&&(c(o),c(d),c(j),c(v))}}}async function g({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function j(t,s,o){let{post:a}=s;return t.$set=(t=>{"post"in t&&o("post",a=t.post)}),{post:a}}export default class extends t{constructor(t){super(),s(this,t,j,d,o,["post"])}}export{g as preload};
//# sourceMappingURL=[slug].02871fea.js.map
