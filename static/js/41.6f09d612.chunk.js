(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[41],{728:function(t,e,r){"use strict";r.r(e);var n=r(108),i=r(114),a=r.n(i),c=r(153),s=r(37),o=r(5),l=r(20),u=r(649),d=r(729),f=r(146),p=r(709),b=r(691),j=r(714),m=r(684),v=r(144),O=r(648),h=r(143),g=r(686),x=r(2),k=r(724),y=r(109),w=r(18);var A=function(t){t.data;var e=t.mapViz,r=t.mapScale,n=Object(k.a)().t,i=Object(x.useRef)(null),a=Object(y.a)(),c=Object(s.a)(a,2),A=c[0],B=c[1],T=B.width,E=B.height;return Object(x.useEffect)((function(){if(T&&E){var t=Object(g.a)(i.current);if(e===o.n.BUBBLES){var n=t.transition().duration(o.c);t.select(".ramp").transition(n).attr("opacity",0).attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(n).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("");var a=r.domain()[1];t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle").selectAll("circle").data([a/10,2*a/5,a]).join("circle").attr("fill","none").attr("stroke","#ccc").transition(n).attr("cy",(function(t){return-r(t)})).attr("r",r);var c=r.copy().range([0,-2*r(a)]);t.select(".circleAxis").attr("transform","translate(48,50)").transition(n).call(Object(f.b)(c).tickSize(0).tickPadding(0).tickValues([a/10,2*a/5,a]).tickFormat((function(t){return Object(l.e)(t,"short")}))).selectAll(".tick text").style("text-anchor","middle"),t.select(".circleAxis").call((function(t){return t.select(".domain").remove()}))}else t.call((function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.svg,r=t.color,n=t.title,i=t.tickSize,a=void 0===i?6:i,c=t.width,s=void 0===c?320:c,l=t.height,g=void 0===l?44+a:l,x=t.marginTop,k=void 0===x?18:x,y=t.marginRight,w=void 0===y?0:y,A=t.marginBottom,B=void 0===A?16+a:A,T=t.marginLeft,E=void 0===T?0:T,R=t.ticks,C=void 0===R?s/64:R,M=t.tickFormat,S=t.tickValues,L=t.ordinalWeights;e.selectAll(".circles > *").remove(),e.selectAll(".circleAxis > *").remove();var F,_=e.transition().duration(o.c),U=function(t){t.selectAll(".tick line").attr("y1",k+B-g)};if(r.interpolate){var V=Math.min(r.domain().length,r.range().length);F=r.copy().rangeRound(Object(b.a)(Object(j.a)(E,s-w),V)),e.select(".ramp").attr("class","ramp").attr("x",E).attr("y",k).attr("width",s-E-w).attr("height",g-k-B).attr("preserveAspectRatio","none").attr("xlink:href",N(r.copy().domain(Object(b.a)(Object(j.a)(0,1),V))).toDataURL())}else if(r.interpolator){if(e.select(".bars").selectAll("rect").transition(_).attr("opacity",0).remove(),F=Object.assign(r.copy().interpolator(Object(m.a)(E,s-w)),{range:function(){return[E,s-w]}}),e.select(".ramp").attr("class","ramp").attr("x",E).attr("y",k).attr("width",s-E-w).attr("height",g-k-B).attr("preserveAspectRatio","none").attr("xlink:href",N(r.interpolator()).toDataURL()).transition(_).attr("opacity",1),!F.ticks){if(void 0===S){var z=Math.round(C+1);S=Object(u.a)(z).map((function(t){return Object(d.a)(r.domain(),t/(z-1))}))}"function"!==typeof M&&(M=Object(p.a)(void 0===M?",f":M))}}else if(r.invertExtent){var H=r.thresholds?r.thresholds():r.quantiles?r.quantiles():r.domain(),D=void 0===M?function(t){return t}:"string"===typeof M?Object(p.a)(M):M;F=Object(v.a)().domain([-1,r.range().length-1]).rangeRound([E,s-w]),e.append("g").selectAll("rect").data(r.range()).join("rect").attr("x",(function(t,e){return F(e-1)})).attr("y",k).attr("width",(function(t,e){return F(e)-F(e-1)})).attr("height",g-k-B).attr("fill",(function(t){return t})),S=Object(u.a)(-1,H.length),M=function(t){return-1===t?D(1):t!==H.length-1?t===H.length-2?D(H[t]+"+",t):D(H[t],t):void 0}}else{if(e.select(".ramp").transition(_).attr("opacity",0).attr("xlink:href",null),L){var P=Object(v.a)().domain([0,L.reduce((function(t,e){return t+e}))]).rangeRound([0,s-E-w]),Y=L.map((function(t,e){return L.slice(0,e).reduce((function(t,e){return t+P(e)}),E)}));F=Object(h.a)().domain(r.domain()).range(Y),e.select(".bars").selectAll("rect").data(r.domain()).join((function(t){return t.append("rect").attr("x",F).attr("width",(function(t,e){return P(L[e])}))})).attr("y",k).attr("height",g-k-B).attr("fill",r).transition(_).attr("x",F).attr("width",(function(t,e){return P(L[e])})).attr("opacity",1)}else F=Object(O.a)().domain(r.domain()).rangeRound([E,s-w]),e.selectAll("rect").data(r.domain()).join("rect").attr("x",F).attr("y",k).attr("width",Math.max(0,F.bandwidth()-1)).attr("height",g-k-B).attr("fill",r);U=function(){}}return e.select(".axis").attr("transform","translate(0,".concat(g-B,")")).transition(_).attr("class","axis").call(Object(f.a)(F).ticks(C,"string"===typeof M?M:void 0).tickFormat("function"===typeof M?M:void 0).tickSize(a).tickValues(S)).on("start",(function(){e.call(U).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",E).attr("y",k+B-g-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(n)})),e.node()}({svg:t,color:r,width:T,height:E,ticks:5,tickFormat:function(t,r,n){if(e!==o.n.CHOROPLETH||Number.isInteger(t))return r===n.length-1?Object(l.e)(t)+"+":Object(l.e)(t)},marginLeft:2,marginRight:0})}))}}),[n,T,E,r,e]),Object(w.jsxs)("div",{className:"svg-parent maplegend",style:{height:o.j},ref:A,children:[Object(w.jsxs)("svg",{id:"legend",preserveAspectRatio:"xMidYMid meet",ref:i,children:[Object(w.jsx)("image",{className:"ramp"}),Object(w.jsx)("g",{className:"bars"}),Object(w.jsx)("g",{className:"circles"}),Object(w.jsx)("g",{className:"circleAxis"}),Object(w.jsx)("g",{className:"axis",children:Object(w.jsx)("text",{className:"axistext"})})]}),Object(w.jsx)("canvas",{className:"color-scale",style:{position:"absolute",height:0}})]})};function N(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(g.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var B=r(90),T=r(86),E=r.n(T),R=r(640),C=r(698),M=r(711),S=r(708),L=r(652),F=r(730),_=r(692),U=r(693),V=r(694),z=r(695),H=r(696),D=r(697),P=r(101),Y=r(6),q=r(128),I=r(660);e.default=function(t){var e,r,i=this,s=t.mapCode,u=t.isDistrictView,d=t.mapViz,f=t.data,p=(t.changeMap,t.regionHighlighted),b=t.setRegionHighlighted,j=t.statistic,m=t.getStatistic,v=(t.isCountryLoaded,Object(k.a)().t),O=Object(x.useRef)(null),h=o.k[s],y=Object(Y.g)(),N=Object(q.a)(h.geoDataFile,function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,T=Object(x.useMemo)((function(){var t=Object.keys(f).filter((function(t){return"TT"!==t&&Object.keys(o.k).includes(t)}));return u?Object(R.a)(t,(function(t){var e;return(null===(e=f[t])||void 0===e?void 0:e.districts)?Object(R.a)(Object.values(f[t].districts),(function(t){return m(t)})):0})):Object(R.a)(t,(function(t){return m(f[t])}))}),[f,u,m]),W=Object(x.useMemo)((function(){return m(f[s])}),[f,s,m]),J=Object(x.useMemo)((function(){return d===o.n.BUBBLES?Object(L.b)([0,Math.max(T,1)],[0,40]).clamp(!0).nice(3):Object(F.a)([0,Math.max(1,T)],function(t){switch(t){case"confirmed":return function(t){return Object(_.a)(.85*t)};case"active":return function(t){return Object(U.a)(.85*t)};case"recovered":return function(t){return Object(V.a)(.85*t)};case"deceased":return function(t){return Object(z.a)(.85*t)};case"tested":return function(t){return Object(H.a)(.85*t)};default:return function(t){return Object(D.a)(.85*t)}}}(j)).clamp(!0)}),[d,j,T]),G=Object(x.useMemo)((function(){return N?Object(M.a)(Object(S.a)()):null}),[N]),K=Object(x.useCallback)((function(t){var e,r,n=o.t[t.properties.st_nm],i=t.properties.district,a=f[n],c=null===a||void 0===a||null===(e=a.districts)||void 0===e?void 0:e[i];return 0===(r=m(i?c:a))?"#ffffff00":J(r)}),[f,J,m]),Q=Object(x.useCallback)((function(t){return o.w[j].color+t}),[j]),X=Object(x.useMemo)((function(){return N?(u?h.mapType===o.l.COUNTRY&&d===o.n.BUBBLES?[].concat(Object(n.a)(Object(I.a)(N,N.objects.states).features),Object(n.a)(Object(I.a)(N,N.objects.districts).features)):Object(I.a)(N,N.objects.districts).features:Object(I.a)(N,N.objects.states).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(s,"-").concat(r).concat(e?"-"+e:""),n})):null}),[N,s,u,d,h]),Z=Object(x.useCallback)((function(t){t.select("title").text((function(t){if(d===o.n.BUBBLES){var e,r,n=t.properties.st_nm,i=o.t[n],a=t.properties.district,c=f[i],s=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[a];return r=m(a?s:c),Object(l.e)(r/(W||.001)*100)+"% from "+Object(l.m)(a||n)}}))}),[d,f,m,W]),$=Object(x.useRef)(null);return Object(x.useEffect)((function(){Object(g.a)(O.current).attr("pointer-events","auto").on("click",(function(){$.current=null,b({stateCode:s,districtName:null})}))}),[s,b]),Object(x.useEffect)((function(){if(N){var t=Object(g.a)(O.current),e=Object(P.b)().duration(o.c);t.select(".regions").selectAll("path").data(d!==o.n.BUBBLES?X:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",G).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t,e){$.current||b({stateCode:o.t[e.properties.st_nm],districtName:e.properties.district})})).on("pointerdown",(function(t,e){$.current===e?$.current=null:$.current=e,b({stateCode:o.t[e.properties.st_nm],districtName:e.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("click",(function(e,r){var n;e.stopPropagation();var i=o.t[r.properties.st_nm];!$.current&&h.mapType!==o.l.STATE&&(null===(n=f[i])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),y.push("/state/".concat(i).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",K).attr("stroke",Q.bind(i,""))}))}}),[d,f,X,K,N,y,h.mapType,G,b,Q]),Object(x.useEffect)((function(){if(X){var t=Object(g.a)(O.current),e=Object(P.b)().duration(o.c),r=[];d===o.n.BUBBLES&&(r=X.map((function(t){var e=o.t[t.properties.st_nm],r=t.properties.district,n=f[e];if(u){var i,a,c=null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[r];t.value=m(r?c:null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[o.F])}else t.value=m(n);return t})).sort((function(t,e){return e.value-e.value})));var n=t.select(".circles").selectAll("circle").data(r,(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(G.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t,e){$.current||b({stateCode:o.t[e.properties.st_nm],districtName:u?e.properties.district||o.F:null})})).on("pointerdown",(function(t,e){$.current===e?$.current=null:$.current=e,b({stateCode:o.t[e.properties.st_nm],districtName:u?e.properties.district||o.F:null})})).on("click",(function(t,e){t.stopPropagation(),$.current||h.mapType===o.l.STATE||y.push("/state/".concat(o.t[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("fill",o.w[j].color+"70").attr("stroke",o.w[j].color+"70").attr("r",(function(t){return J(t.value)}))}));window.requestIdleCallback((function(){Z(n)}))}}),[h.mapType,d,u,f,X,y,J,G,b,Z,j,m]),Object(x.useEffect)((function(){if(N){var t=Object(g.a)(O.current),e=Object(P.b)().duration(o.c),r=[],n=[];h.mapType===o.l.COUNTRY&&((r=[Object(I.b)(N,N.objects.states)])[0].id="".concat(s,"-states")),(h.mapType===o.l.STATE||u&&d===o.n.CHOROPLETH)&&((n=[Object(I.b)(N,N.objects.districts)])[0].id="".concat(s,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(r,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",G).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(i,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",G).attr("d",G).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(i,"40"))}}),[N,h,s,d,u,j,G,Q]),Object(x.useEffect)((function(){var t=p.stateCode,e=o.v[t],r=p.districtName,n=Object(g.a)(O.current);d===o.n.BUBBLES?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var i;return e===n.properties.st_nm&&(!r&&t!==s||r===(null===(i=n.properties)||void 0===i?void 0:i.district)||!u||r===o.F&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var i,a=e===n.properties.st_nm&&(!r&&t!==s||r===(null===(i=n.properties)||void 0===i?void 0:i.district)||!u);a&&this.parentNode.appendChild(this),Object(g.a)(this).attr("stroke-opacity",a?1:0)}))}),[N,f,s,u,d,p.stateCode,p.districtName,j]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"svg-parent",children:[Object(w.jsxs)("svg",{id:"chart",viewBox:"0 0 ".concat(432," ").concat(488),preserveAspectRatio:"xMidYMid meet",ref:O,children:[Object(w.jsx)("g",{className:"regions"}),Object(w.jsx)("g",{className:"state-borders"}),Object(w.jsx)("g",{className:"district-borders"}),Object(w.jsx)("g",{className:"circles"})]}),h.mapType===o.l.STATE&&!!m(null===(e=f[s])||void 0===e||null===(r=e.districts)||void 0===r?void 0:r[o.F])&&Object(w.jsxs)("div",{className:E()("disclaimer","is-".concat(j)),children:[Object(w.jsx)(B.a,{}),Object(w.jsx)("span",{children:v("District-wise data not available in state bulletin")})]})]}),J&&Object(w.jsx)(A,{data:f,mapViz:d,mapScale:J}),Object(w.jsx)("svg",{style:{position:"absolute",height:0},children:Object(w.jsx)("defs",{children:Object(w.jsx)("filter",{id:"balance-color",colorInterpolationFilters:"sRGB",children:Object(w.jsx)("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})})})})]})}}}]);
//# sourceMappingURL=41.6f09d612.chunk.js.map