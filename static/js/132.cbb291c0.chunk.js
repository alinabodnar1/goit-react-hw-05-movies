"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[132],{3580:function(n,r,e){e.d(r,{M1:function(){return v},TP:function(){return f},q:function(){return w},tx:function(){return g},z5:function(){return d}});var t=e(5861),c=e(4687),a=e.n(c),i=e(1243),o=e(3742);function s(){o.Loading.circle({svgColor:"#B92F2C"})}function u(){o.Loading.remove()}var p="https://api.themoviedb.org/3/",l="d9ccf9379e20517fec2957866e8ec079";function d(){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(a().mark((function n(){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(p,"movie/popular?api_key=").concat(l),s(),n.next=5,i.Z.get(r);case 5:return e=n.sent,n.abrupt("return",e.data);case 9:n.prev=9,n.t0=n.catch(0),alert("Oops, an error occurred");case 12:return n.prev=12,u(),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}function f(n){return x.apply(this,arguments)}function x(){return(x=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(p,"/movie/").concat(r,"?api_key=").concat(l),s(),n.next=5,i.Z.get(e);case 5:return t=n.sent,n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),alert("Oops, an error occurred");case 12:return n.prev=12,u(),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(p,"/movie/").concat(r,"/credits?api_key=").concat(l),n.next=4,i.Z.get(e);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),alert("Oops, an error occurred");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function g(n){return j.apply(this,arguments)}function j(){return(j=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(p,"/movie/").concat(r,"/reviews?api_key=").concat(l),n.next=4,i.Z.get(e);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),alert("Oops, an error occurred");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=(0,t.Z)(a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(p,"/search/movie?api_key=").concat(l,"&query=").concat(r),s(),n.next=5,i.Z.get(e);case 5:return t=n.sent,n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),alert("Oops, an error occurred");case 12:return n.prev=12,u(),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}},6132:function(n,r,e){e.r(r),e.d(r,{default:function(){return Z}});var t,c,a,i,o,s,u=e(9439),p=e(2791),l=e(7689),d=e(1087),h=e(5206),f=e(3580),x=e(168),v=e(7691),m=v.ZP.button(t||(t=(0,x.Z)(["\n    display: inline-block;\n    margin-left: 20px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 8px 10px;\n    min-width: 50px;\n    border-radius: 20px;\n    border-color: transparent;\n    text-transform: uppercase; \n    font-weight: 700;\n    line-height: 1.5;\n    color: #FF7F50;\n"]))),g=v.ZP.div(c||(c=(0,x.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n  display: flex;\n  gap: 15px;\n"]))),j=v.ZP.img(a||(a=(0,x.Z)(["\n    display: block;\n    width: 80%;\n    height: 80%;\n    padding: 10px;\n    object-fit: contain;\n    border-radius: 5px;\n"]))),w=v.ZP.h2(i||(i=(0,x.Z)(["\n    display: block;\n    margin: 0 auto;\n    text-decoration: underline;\n    font-weight: 700;\n    color: #505050;\n"]))),b=v.ZP.p(o||(o=(0,x.Z)(["\n    display: block;\n    text-align: justify;\n"]))),k=(0,v.ZP)(d.rU)(s||(s=(0,x.Z)(["\n    color: #686868;\n    padding: 8px 16px;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n  \n    &.active {\n    color: #FF7F50;\n    }\n"]))),y=e(184);function Z(){var n,r,e=(0,p.useState)(""),t=(0,u.Z)(e,2),c=t[0],a=t[1],i=(0,l.UO)().movieId,o=(0,l.TH)(),s=(0,p.useRef)(null!==(n=null===(r=o.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/");if((0,p.useEffect)((function(){(0,f.TP)(i).then((function(n){n&&a(n)})).catch((function(){h.Am.error("An error occurred while responding movie details from the backend.")}))}),[i]),!c)return h.Am.error("There is no movie details for this movie.");var x=c.genres.map((function(n){return n.name})).join(", ");return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.rU,{to:s.current,children:(0,y.jsx)(m,{variant:"text",children:"Back"})}),(0,y.jsxs)("div",{children:[(0,y.jsxs)(g,{children:[(0,y.jsx)(j,{src:c.poster_path&&"".concat("https://image.tmdb.org/t/p/w200").concat(c.poster_path),alt:c.title}),(0,y.jsxs)("div",{children:[(0,y.jsx)(w,{children:c.title}),(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"Popularity:"})," ",c.popularity]}),(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"Overview:"}),(0,y.jsx)(b,{children:c.overview})]}),(0,y.jsxs)("p",{children:[(0,y.jsx)("b",{children:"Genres:"})," ",x]})]})]}),(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)(k,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(k,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(p.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading additional information..."}),children:(0,y.jsx)(l.j3,{})}),(0,y.jsx)(h.Ix,{autoClose:3e3,position:"top-left"})]})]})}}}]);
//# sourceMappingURL=132.cbb291c0.chunk.js.map