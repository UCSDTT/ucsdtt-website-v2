import{S as e,i as a,s as n,e as i,c as r,b as s,f as o,g as c,E as l,F as t,h as m,t as p,a as h,d as u,j as d,u as x,n as g,m as f,p as L,q as C,r as b}from"./chunk.39ca5c26.js";import"./chunk.4dd45ec9.js";function j(e){var a,n;return{c(){a=i("div"),this.h()},l(e){a=r(e,"DIV",{class:!0,style:!0},!1),s(a).forEach(o),this.h()},h(){c(a,"class","cursor-box svelte-1ct97j0"),l(a,"top",e.picY),l(a,"left",e.picX),n=t(a,"click",e.handleMouseClick)},m(e,n){m(e,a,n)},p(e,n){e.picY&&l(a,"top",n.picY),e.picX&&l(a,"left",n.picX)},d(e){e&&o(a),n()}}}function v(e){var a,n;return{c(){a=i("h4"),n=p("Oops! Please try and select a brother (from this class) again.")},l(e){a=r(e,"H4",{},!1);var i=s(a);n=u(i,"Oops! Please try and select a brother (from this class) again."),i.forEach(o)},m(e,i){m(e,a,i),d(a,n)},p:g,d(e){e&&o(a)}}}function k(e){var a,n,c,l,t,g,f,L=e.curBrother.name,C=e.curBrother.major;return{c(){a=i("h3"),n=p("Brother: "),c=p(L),l=h(),t=i("h4"),g=p("Major: "),f=p(C)},l(e){a=r(e,"H3",{},!1);var i=s(a);n=u(i,"Brother: "),c=u(i,L),i.forEach(o),l=u(e,"\n    "),t=r(e,"H4",{},!1);var m=s(t);g=u(m,"Major: "),f=u(m,C),m.forEach(o)},m(e,i){m(e,a,i),d(a,n),d(a,c),m(e,l,i),m(e,t,i),d(t,g),d(t,f)},p(e,a){e.curBrother&&L!==(L=a.curBrother.name)&&x(c,L),e.curBrother&&C!==(C=a.curBrother.major)&&x(f,C)},d(e){e&&(o(a),o(l),o(t))}}}function X(e){var a,n,l,f,L,C,b,X,Y,y,B,I,M=e.boxVisible&&j(e);function $(e){return e.curBrother?k:v}var E=$(e),S=E(e);return{c(){a=i("p"),n=p("mx: "),l=p(e.mx),f=p(" my: "),L=p(e.my),C=h(),M&&M.c(),b=h(),X=i("div"),Y=i("img"),y=h(),B=i("div"),S.c(),this.h()},l(i){a=r(i,"P",{},!1);var c=s(a);n=u(c,"mx: "),l=u(c,e.mx),f=u(c," my: "),L=u(c,e.my),c.forEach(o),C=u(i,"\n\n"),M&&M.l(i),b=u(i,"\n\n"),X=r(i,"DIV",{class:!0},!1);var t=s(X);Y=r(t,"IMG",{class:!0,src:!0,alt:!0},!1),s(Y).forEach(o),t.forEach(o),y=u(i,"\n\n"),B=r(i,"DIV",{class:!0},!1);var m=s(B);S.l(m),m.forEach(o),this.h()},h(){c(Y,"class","class-img svelte-1ct97j0"),c(Y,"src",e.curClass.image),c(Y,"alt",e.curClass.className),c(X,"class","class-img-container svelte-1ct97j0"),c(B,"class","brother-info svelte-1ct97j0"),I=t(Y,"click",e.handleMouseClick)},m(e,i){m(e,a,i),d(a,n),d(a,l),d(a,f),d(a,L),m(e,C,i),M&&M.m(e,i),m(e,b,i),m(e,X,i),d(X,Y),m(e,y,i),m(e,B,i),S.m(B,null)},p(e,a){e.mx&&x(l,a.mx),e.my&&x(L,a.my),a.boxVisible?M?M.p(e,a):((M=j(a)).c(),M.m(b.parentNode,b)):M&&(M.d(1),M=null),E===(E=$(a))&&S?S.p(e,a):(S.d(1),(S=E(a))&&(S.c(),S.m(B,null)))},i:g,o:g,d(e){e&&(o(a),o(C)),M&&M.d(e),e&&(o(b),o(X),o(y),o(B)),S.d(),I()}}}let Y=0;function y(e,a,n){let i,r,s,o,c,{pledgeClasses:l}=a,t=!1,m=l[Y];return e.$set=(e=>{"pledgeClasses"in e&&n("pledgeClasses",l=e.pledgeClasses)}),e.$$.update=((e={mx:1,my:1})=>{e.mx&&n("picX",o=`${s-55}px`),e.my&&n("picY",c=`${r-140}px`)}),{pledgeClasses:l,boxVisible:t,curClass:m,curBrother:i,my:r,mx:s,handleMouseClick:function(e){n("mx",s=e.clientX),n("my",r=e.clientY),n("boxVisible",t=!0),n("curBrother",i=function(){const e=m.members.filter(e=>Math.abs(e.pixelLocationX-s)<50&&Math.abs(e.pixelLocationY-r)<50);if(0===e.lenght)return;if(1===e.length)return e[0];let a,n=1/0;for(member in e){let e=Math.sqrt((member.pixelLocationX-s)**2+(member.pixelLocationY-r)**2);e<n&&(n=e,a=brother)}return a}())},picX:o,picY:c}}class B extends e{constructor(e){super(),a(this,e,y,X,n,["pledgeClasses"])}}function I(e){var a,n,c,l,t,x=new B({props:{pledgeClasses:e.pledgeClasses}});return{c(){a=h(),n=i("h1"),c=p("Members"),l=h(),x.$$.fragment.c(),this.h()},l(e){a=u(e,"\n\n"),n=r(e,"H1",{},!1);var i=s(n);c=u(i,"Members"),i.forEach(o),l=u(e,"\n\n"),x.$$.fragment.l(e),this.h()},h(){document.title="Members"},m(e,i){m(e,a,i),m(e,n,i),d(n,c),m(e,l,i),f(x,e,i),t=!0},p(e,a){var n={};e.pledgeClasses&&(n.pledgeClasses=a.pledgeClasses),x.$set(n)},i(e){t||(L(x.$$.fragment,e),t=!0)},o(e){C(x.$$.fragment,e),t=!1},d(e){e&&(o(a),o(n),o(l)),b(x,e)}}}function M(e){return{pledgeClasses:[{className:"Upsilon",image:"images/upsilon_class.jpg",members:[{name:"Brent Neldner",major:"Computer Science",pixelLocationX:219,pixelLocationY:339,linkedIn:".."},{name:"Amy Li",major:"Computer Science",pixelLocationX:317,pixelLocationY:374,linkedIn:".."},{name:"Jordan Luk",major:"Mechanical Engineering",pixelLocationX:409,pixelLocationY:377,linkedIn:".."},{name:"Austin Le",major:"Data Science",pixelLocationX:529,pixelLocationY:369,linkedIn:".."},{name:"Barry Cheung",major:"Mechanical Engineering",pixelLocationX:654,pixelLocationY:380,linkedIn:".."},{name:"Jade Tran",major:"Computer Science",pixelLocationX:715,pixelLocationY:412,linkedIn:".."},{name:"Jack Lin",major:"Data Science",pixelLocationX:812,pixelLocationY:348,linkedIn:".."},{name:"Lulu Zhu",major:"Computer Science",pixelLocationX:451,pixelLocationY:476,linkedIn:".."},{name:"Claire Zhang",major:"Bioengineering",pixelLocationX:600,pixelLocationY:487,linkedIn:".."},{name:"BaoBao Laosirihongthong",major:"Chemical Engineering",pixelLocationX:398,pixelLocationY:567,linkedIn:".."},{name:"Ryan Murase",major:"Computer Science",pixelLocationX:791,pixelLocationY:562,linkedIn:".."}]}]}}export default class extends e{constructor(e){super(),a(this,e,M,I,n,[])}}
//# sourceMappingURL=members.f1103cb7.js.map
