"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{3580:function(n,e,r){r.d(e,{M1:function(){return x},TP:function(){return f},q:function(){return j},tx:function(){return g},z5:function(){return l}});var t=r(5861),a=r(4687),i=r.n(a),c=r(1243),o=r(3742);function s(){o.Loading.circle({svgColor:"#B92F2C"})}function u(){o.Loading.remove()}var p="https://api.themoviedb.org/3/",d="d9ccf9379e20517fec2957866e8ec079";function l(){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="".concat(p,"movie/popular?api_key=").concat(d),s(),n.next=5,c.Z.get(e);case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(0),alert("Oops, an error occurred");case 12:return n.prev=12,u(),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}function f(n){return m.apply(this,arguments)}function m(){return(m=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(p,"/movie/").concat(e,"?api_key=").concat(d),s(),n.next=5,c.Z.get(r);case 5:return t=n.sent,n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),alert("Oops, an error occurred");case 12:return n.prev=12,u(),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(p,"/movie/").concat(e,"/credits?api_key=").concat(d),n.next=4,c.Z.get(r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),alert("Oops, an error occurred");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(p,"/movie/").concat(e,"/reviews?api_key=").concat(d),n.next=4,c.Z.get(r);case 4:return t=n.sent,n.abrupt("return",t.data);case 8:n.prev=8,n.t0=n.catch(0),alert("Oops, an error occurred");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function j(n){return w.apply(this,arguments)}function w(){return(w=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="".concat(p,"/search/movie?api_key=").concat(d,"&query=").concat(e),s(),n.next=5,c.Z.get(r);case 5:return t=n.sent,n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(0),alert("Oops, an error occurred");case 12:return n.prev=12,u(),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}},8727:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t=r(9439),a=r(2791),i=r(7689),c=r(1087),o=r(5206),s=r(3580),u=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function p(n){u.reduce((function(e,r){return Array.isArray(n)&&n.includes(r.id)&&e.push(r.name),e}),[])}var d,l,h,f,m,x,v=r(168),g=r(7691),y=g.ZP.button(d||(d=(0,v.Z)(["\n    display: inline-block;\n    margin-left: 20px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    padding: 8px 10px;\n    min-width: 50px;\n    border-radius: 20px;\n    border-color: transparent;\n    text-transform: uppercase; \n    font-weight: 700;\n    line-height: 1.5;\n    color: #FF7F50;\n"]))),j=g.ZP.div(l||(l=(0,v.Z)(["\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 16px;\n  display: flex;\n  gap: 15px;\n"]))),w=g.ZP.img(h||(h=(0,v.Z)(["\n    display: block;\n    width: 80%;\n    height: 80%;\n    padding: 10px;\n    object-fit: contain;\n    border-radius: 5px;\n"]))),b=g.ZP.h2(f||(f=(0,v.Z)(["\n    display: block;\n    margin: 0 auto;\n    text-decoration: underline;\n    font-weight: 700;\n    color: #505050;\n"]))),k=g.ZP.p(m||(m=(0,v.Z)(["\n    display: block;\n    text-align: justify;\n"]))),Z=(0,g.ZP)(c.rU)(x||(x=(0,v.Z)(["\n    color: #686868;\n    padding: 8px 16px;\n    text-decoration: none;\n    color: black;\n    font-weight: 500;\n  \n    &.active {\n    color: #FF7F50;\n    }\n"]))),F=r(184);function _(){var n,e,r=(0,a.useState)(""),d=(0,t.Z)(r,2),l=d[0],h=d[1],f=(0,i.UO)().movieId,m=(0,i.TH)(),x=(0,a.useRef)(null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),v=(l.genres,u.map((function(n){return n.name})).join(", ")),g=p(l.genres);console.log("genresDetail:",v),console.log("genresGalleryEditor:",g);return(0,a.useEffect)((function(){(0,s.TP)(f).then((function(n){n&&h(n)})).catch((function(){o.Am.error("An error occurred while responding movie details from the backend.")}))}),[f]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(c.rU,{to:x.current,children:(0,F.jsx)(y,{variant:"text",children:"Back"})}),(0,F.jsxs)("div",{children:[(0,F.jsxs)(j,{children:[(0,F.jsx)(w,{src:l.poster_path&&"".concat("https://image.tmdb.org/t/p/w200").concat(l.poster_path),alt:l.title}),(0,F.jsxs)("div",{children:[(0,F.jsx)(b,{children:l.title}),(0,F.jsxs)("p",{children:[(0,F.jsx)("b",{children:"Popularity:"})," ",l.popularity]}),(0,F.jsxs)("p",{children:[(0,F.jsx)("b",{children:"Overview:"}),(0,F.jsx)(k,{children:l.overview})]}),(0,F.jsxs)("p",{children:[(0,F.jsx)("b",{children:"Genres:"})," ",p(l.genres)]})]})]}),(0,F.jsxs)("ul",{children:[(0,F.jsx)("li",{children:(0,F.jsx)(Z,{to:"cast",children:"Cast"})}),(0,F.jsx)("li",{children:(0,F.jsx)(Z,{to:"reviews",children:"Reviews"})})]}),(0,F.jsx)(a.Suspense,{fallback:(0,F.jsx)("div",{children:"Loading additional information..."}),children:(0,F.jsx)(i.j3,{})}),(0,F.jsx)(o.Ix,{autoClose:3e3,position:"top-left"})]})]})}}}]);
//# sourceMappingURL=727.68de18e0.chunk.js.map