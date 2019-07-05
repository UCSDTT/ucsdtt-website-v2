import{_ as n,a,b as t,c as e,i,s,d as o,S as r,G as c,e as l,t as h,g as u,h as f,j as g,k as m,l as v,K as p,m as d,o as w,n as T,R as b,f as E,v as S,D as $,w as N,E as G,y as O,M as k,q as y,x as C}from"./chunk.5818301f.js";import{f as I}from"./chunk.81a87f81.js";import{P as R}from"./chunk.a13db435.js";function D(n){var a,t,e;return{c:function(){a=l("button"),t=h("<"),this.h()},l:function(n){a=u(n,"BUTTON",{class:!0},!1);var e=f(a);t=g(e,"<"),e.forEach(m),this.h()},h:function(){v(a,"class","carousel-button button-left svelte-7tzwwb"),e=p(a,"click",n.handlePrevClick)},m:function(n,e){d(n,a,e),w(a,t)},p:T,d:function(n){n&&m(a),e()}}}function z(n){var a,t,e,i;return{c:function(){a=l("div"),t=l("img"),this.h()},l:function(n){a=u(n,"DIV",{class:!0},!1);var e=f(a);t=u(e,"IMG",{src:!0,alt:!0,class:!0},!1),f(t).forEach(m),e.forEach(m),this.h()},h:function(){v(t,"src",n.image),v(t,"alt","pillar image"),v(t,"class","svelte-7tzwwb"),v(a,"class","carousel svelte-7tzwwb")},m:function(n,e){d(n,a,e),w(a,t),i=!0},p:function(n,a){i&&!n.image||v(t,"src",a.image)},i:function(n){i||(c(function(){e||(e=b(t,I,{duration:500},!0)),e.run(1)}),i=!0)},o:function(n){e||(e=b(t,I,{duration:500},!1)),e.run(0),i=!1},d:function(n){n&&(m(a),e&&e.end())}}}function M(n){var a,t,e;return{c:function(){a=l("button"),t=h(">"),this.h()},l:function(n){a=u(n,"BUTTON",{class:!0},!1);var e=f(a);t=g(e,">"),e.forEach(m),this.h()},h:function(){v(a,"class","carousel-button button-right svelte-7tzwwb"),e=p(a,"click",n.handleNextClick)},m:function(n,e){d(n,a,e),w(a,t)},p:T,d:function(n){n&&m(a),e()}}}function j(n){var a,t,e,i,s,o,r,T,b,k;c(n.onwindowresize);var y=n.iw>1e3&&D(n),C=n.visible&&z(n),I=n.iw>1e3&&M(n);return{c:function(){a=l("figure"),t=l("div"),y&&y.c(),e=E(),i=l("div"),C&&C.c(),s=E(),I&&I.c(),o=E(),r=l("figcaption"),T=h(n.caption),this.h()},l:function(c){a=u(c,"FIGURE",{class:!0},!1);var l=f(a);t=u(l,"DIV",{class:!0},!1);var h=f(t);y&&y.l(h),e=g(h,"\n    "),i=u(h,"DIV",{class:!0},!1);var v=f(i);C&&C.l(v),v.forEach(m),s=g(h,"\n    "),I&&I.l(h),h.forEach(m),o=g(l,"\n  "),r=u(l,"FIGCAPTION",{class:!0},!1);var p=f(r);T=g(p,n.caption),p.forEach(m),l.forEach(m),this.h()},h:function(){v(i,"class","carousel-wrapper svelte-7tzwwb"),v(t,"class","button-wrapper svelte-7tzwwb"),v(r,"class","carousel-caption svelte-7tzwwb"),v(a,"class","figure-wrapper svelte-7tzwwb"),k=p(window,"resize",n.onwindowresize)},m:function(n,c){d(n,a,c),w(a,t),y&&y.m(t,null),w(t,e),w(t,i),C&&C.m(i,null),w(t,s),I&&I.m(t,null),w(a,o),w(a,r),w(r,T),b=!0},p:function(n,a){a.iw>1e3?y?y.p(n,a):((y=D(a)).c(),y.m(t,e)):y&&(y.d(1),y=null),a.visible?C?(C.p(n,a),S(C,1)):((C=z(a)).c(),S(C,1),C.m(i,null)):C&&($(),N(C,1,function(){C=null}),G()),a.iw>1e3?I?I.p(n,a):((I=M(a)).c(),I.m(t,null)):I&&(I.d(1),I=null),b&&!n.caption||O(T,a.caption)},i:function(n){b||(S(C),b=!0)},o:function(n){N(C),b=!1},d:function(n){n&&m(a),y&&y.d(),C&&C.d(),I&&I.d(),k()}}}function P(n,a,t){var e,i,s=a.images,o=a.caption,r=s[0],c=0,l=!0;function h(){t("visible",l=!1),setTimeout(function(){t("visible",l=!0),c=(c+1)%s.length,t("image",r=s[c])},700)}function u(){t("visible",l=!1),setTimeout(function(){t("visible",l=!0),c=(c+s.length-1)%s.length,t("image",r=s[c])},700)}return k(function(){return e=setInterval(h,3900),function(){return clearInterval(e)}}),n.$set=function(n){"images"in n&&t("images",s=n.images),"caption"in n&&t("caption",o=n.caption)},{images:s,caption:o,image:r,visible:l,iw:i,handleNextClick:function(){clearInterval(e),l?(h(),e=setInterval(h,3900)):c=(c+1)%s.length},handlePrevClick:function(){clearInterval(e),l?(u(),e=setInterval(u,3900)):c=(c+s.length-1)%s.length},onwindowresize:function(){i=window.innerWidth,t("iw",i)}}}var q=function(c){function l(n){var r;return a(this,l),r=t(this,e(l).call(this)),i(o(r),n,P,j,s,["images","caption"]),r}return n(l,r),l}();function U(n){var a,t,e,i,s,o,r,c,p,b,S,$,N,G,O,k,y,C,I,R,D,z,M,j,P,q,U,A,J,L,B,V,x,K,W,_,F,X,Y,H,Q,Z,nn,an,tn,en,sn,on,rn,cn,ln,hn,un,fn,gn,mn,vn,pn,dn,wn,Tn,bn,En,Sn,$n;return{c:function(){a=l("div"),t=l("h1"),e=h("The Origins of Theta Tau"),i=E(),s=l("p"),o=h("In the Spring of 2009, several students of UCSD's Jacobs School of\n    Engineering felt that there was a lack of engineering representation in the\n    Greek community on campus. Luckily an opportunity arose for them to change\n    that."),r=E(),c=l("p"),p=l("strong"),b=h("Jennifer Young"),S=h(",\n    with the help of a Theta Tau alumnus,\n    thirteen founding fathers took the first step towards establishing a\n    chapter of the nation's oldest and largest professional engineering\n    fraternity on the UCSD campus."),$=E(),N=l("p"),G=l("strong"),O=h("Ashay Verma"),k=h(",\n    "),y=l("strong"),C=h("Errynne Bell"),I=h(",\n    "),R=l("strong"),D=h("Takahiro Kuwayama"),z=h(",\n    "),M=l("strong"),j=h("Amelia Chu"),P=h(",\n    "),q=l("strong"),U=h("Xiumei Wu"),A=h(",\n    "),J=l("strong"),L=h("Chris Lam"),B=h(",\n    "),V=l("strong"),x=h("Chuong Do"),K=h(",\n    "),W=l("strong"),_=h("Joe Shao"),F=h(",\n    "),X=l("strong"),Y=h("Michelle Mojica"),H=h(",\n    "),Q=l("strong"),Z=h("Tanakorn Best Techajongchareon"),nn=h(",\n    "),an=l("strong"),tn=h("Scott Louie"),en=h(",\n    "),sn=l("strong"),on=h("Alan Leung"),rn=h(",\n    and "),cn=l("strong"),ln=h("John Phu Nguyen"),hn=h("."),un=E(),fn=l("p"),gn=h("On November 20th, 2010, UCSD was installed as the \n    "),mn=l("strong"),vn=h("Epsilon Delta Chapter"),pn=h(" of \n    "),dn=l("strong"),wn=h("Theta Tau"),Tn=h("."),bn=E(),En=l("img"),Sn=E(),$n=l("img"),this.h()},l:function(n){a=u(n,"DIV",{id:!0,class:!0},!1);var l=f(a);t=u(l,"H1",{id:!0,class:!0},!1);var h=f(t);e=g(h,"The Origins of Theta Tau"),h.forEach(m),i=g(l,"\n  "),s=u(l,"P",{class:!0},!1);var v=f(s);o=g(v,"In the Spring of 2009, several students of UCSD's Jacobs School of\n    Engineering felt that there was a lack of engineering representation in the\n    Greek community on campus. Luckily an opportunity arose for them to change\n    that."),v.forEach(m),r=g(l,"\n  "),c=u(l,"P",{class:!0},!1);var d=f(c);p=u(d,"STRONG",{},!1);var w=f(p);b=g(w,"Jennifer Young"),w.forEach(m),S=g(d,",\n    with the help of a Theta Tau alumnus,\n    thirteen founding fathers took the first step towards establishing a\n    chapter of the nation's oldest and largest professional engineering\n    fraternity on the UCSD campus."),d.forEach(m),$=g(l,"\n  "),N=u(l,"P",{class:!0},!1);var T=f(N);G=u(T,"STRONG",{},!1);var E=f(G);O=g(E,"Ashay Verma"),E.forEach(m),k=g(T,",\n    "),y=u(T,"STRONG",{},!1);var Nn=f(y);C=g(Nn,"Errynne Bell"),Nn.forEach(m),I=g(T,",\n    "),R=u(T,"STRONG",{},!1);var Gn=f(R);D=g(Gn,"Takahiro Kuwayama"),Gn.forEach(m),z=g(T,",\n    "),M=u(T,"STRONG",{},!1);var On=f(M);j=g(On,"Amelia Chu"),On.forEach(m),P=g(T,",\n    "),q=u(T,"STRONG",{},!1);var kn=f(q);U=g(kn,"Xiumei Wu"),kn.forEach(m),A=g(T,",\n    "),J=u(T,"STRONG",{},!1);var yn=f(J);L=g(yn,"Chris Lam"),yn.forEach(m),B=g(T,",\n    "),V=u(T,"STRONG",{},!1);var Cn=f(V);x=g(Cn,"Chuong Do"),Cn.forEach(m),K=g(T,",\n    "),W=u(T,"STRONG",{},!1);var In=f(W);_=g(In,"Joe Shao"),In.forEach(m),F=g(T,",\n    "),X=u(T,"STRONG",{},!1);var Rn=f(X);Y=g(Rn,"Michelle Mojica"),Rn.forEach(m),H=g(T,",\n    "),Q=u(T,"STRONG",{},!1);var Dn=f(Q);Z=g(Dn,"Tanakorn Best Techajongchareon"),Dn.forEach(m),nn=g(T,",\n    "),an=u(T,"STRONG",{},!1);var zn=f(an);tn=g(zn,"Scott Louie"),zn.forEach(m),en=g(T,",\n    "),sn=u(T,"STRONG",{},!1);var Mn=f(sn);on=g(Mn,"Alan Leung"),Mn.forEach(m),rn=g(T,",\n    and "),cn=u(T,"STRONG",{},!1);var jn=f(cn);ln=g(jn,"John Phu Nguyen"),jn.forEach(m),hn=g(T,"."),T.forEach(m),un=g(l,"\n  "),fn=u(l,"P",{class:!0},!1);var Pn=f(fn);gn=g(Pn,"On November 20th, 2010, UCSD was installed as the \n    "),mn=u(Pn,"STRONG",{},!1);var qn=f(mn);vn=g(qn,"Epsilon Delta Chapter"),qn.forEach(m),pn=g(Pn," of \n    "),dn=u(Pn,"STRONG",{},!1);var Un=f(dn);wn=g(Un,"Theta Tau"),Un.forEach(m),Tn=g(Pn,"."),Pn.forEach(m),bn=g(l,"\n  "),En=u(l,"IMG",{id:!0,src:!0,alt:!0,class:!0},!1),f(En).forEach(m),Sn=g(l,"\n  "),$n=u(l,"IMG",{src:!0,alt:!0,class:!0},!1),f($n).forEach(m),l.forEach(m),this.h()},h:function(){v(t,"id","letter-header"),v(t,"class","svelte-1lbiaoq"),v(s,"class","svelte-1lbiaoq"),v(c,"class","svelte-1lbiaoq"),v(N,"class","svelte-1lbiaoq"),v(fn,"class","svelte-1lbiaoq"),v(En,"id","founders"),v(En,"src","images/founders.jpg"),v(En,"alt","the mighty founders"),v(En,"class","svelte-1lbiaoq"),v($n,"src","images/hamntongs.png"),v($n,"alt","the seals"),v($n,"class","svelte-1lbiaoq"),v(a,"id","letter"),v(a,"class","svelte-1lbiaoq")},m:function(n,l){d(n,a,l),w(a,t),w(t,e),w(a,i),w(a,s),w(s,o),w(a,r),w(a,c),w(c,p),w(p,b),w(c,S),w(a,$),w(a,N),w(N,G),w(G,O),w(N,k),w(N,y),w(y,C),w(N,I),w(N,R),w(R,D),w(N,z),w(N,M),w(M,j),w(N,P),w(N,q),w(q,U),w(N,A),w(N,J),w(J,L),w(N,B),w(N,V),w(V,x),w(N,K),w(N,W),w(W,_),w(N,F),w(N,X),w(X,Y),w(N,H),w(N,Q),w(Q,Z),w(N,nn),w(N,an),w(an,tn),w(N,en),w(N,sn),w(sn,on),w(N,rn),w(N,cn),w(cn,ln),w(N,hn),w(a,un),w(a,fn),w(fn,gn),w(fn,mn),w(mn,vn),w(fn,pn),w(fn,dn),w(dn,wn),w(fn,Tn),w(a,bn),w(a,En),w(a,Sn),w(a,$n)},p:T,i:T,o:T,d:function(n){n&&m(a)}}}var A=function(c){function l(n){var r;return a(this,l),r=t(this,e(l).call(this)),i(o(r),n,null,U,s,[]),r}return n(l,r),l}();function J(n){var a,t,e,i,s=new R({}),o=new q({props:{images:n.images,caption:n.pillarMsg}}),r=new A({});return{c:function(){a=E(),s.$$.fragment.c(),t=E(),o.$$.fragment.c(),e=E(),r.$$.fragment.c(),this.h()},l:function(n){a=g(n,"\n\n"),s.$$.fragment.l(n),t=g(n,"\n\n"),o.$$.fragment.l(n),e=g(n,"\n\n"),r.$$.fragment.l(n),this.h()},h:function(){document.title="About"},m:function(n,c){d(n,a,c),y(s,n,c),d(n,t,c),y(o,n,c),d(n,e,c),y(r,n,c),i=!0},p:function(n,a){var t={};n.images&&(t.images=a.images),n.pillarMsg&&(t.caption=a.pillarMsg),o.$set(t)},i:function(n){i||(S(s.$$.fragment,n),S(o.$$.fragment,n),S(r.$$.fragment,n),i=!0)},o:function(n){N(s.$$.fragment,n),N(o.$$.fragment,n),N(r.$$.fragment,n),i=!1},d:function(n){n&&m(a),C(s,n),n&&m(t),C(o,n),n&&m(e),C(r,n)}}}function L(n){return{images:["icons/pillar.png","images/pi_fun.jpg","images/sigma_fun.jpg"],pillarMsg:"Brothers embodying the spirit of Theta Tau through the three pillars."}}export default(function(c){function l(n){var r;return a(this,l),r=t(this,e(l).call(this)),i(o(r),n,L,J,s,[]),r}return n(l,r),l}());
//# sourceMappingURL=about.e046f423.js.map
