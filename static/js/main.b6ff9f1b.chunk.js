(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(99),a(20)),i=a.n(s),l=a(31),u=a(14),f=(a(101),a(237)),m=a(238),d=a(239),v=a(231),p=a(235),h=a(2),b=a(236);a(102);function E(e){var t=e.title,a=e.cases,n=e.total,c=e.active,o=e.isRed,s=Object(h.a)(e,["title","cases","total","active","isRed"]);return r.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(o&&"infoBox--red")},r.a.createElement(p.a,null,r.a.createElement(b.a,{className:"infoBox__cases",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),r.a.createElement(b.a,{color:"textSecondary"},n," Total")))}var g=a(242),y=a(243),j=(a(106),a(17)),O=a(18),x=a.n(O),w=a(240),k=a(241),C={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},_=function(e){var t=Object(j.a)(e);return t.sort((function(e,t){return t.cases-e.cases})),t},N=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"};var S=function(e){var t=e.center,a=e.zoom,n=e.countries,c=e.casesType,o=void 0===c?"cases":c;return r.a.createElement("div",{className:"map"},r.a.createElement(g.a,{center:t,zoom:a},r.a.createElement(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:C[t].hex,fillColor:C[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*C[t].multiplier},r.a.createElement(k.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",x()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",x()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(n,o)))};a(107);var B=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,x()(a).format())))})))},R=a(87),I={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}},M=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var T=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=M(e,t);s(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(R.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},options:I}))};a(204);var D=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],b=s[1],g=Object(n.useState)({}),y=Object(u.a)(g,2),j=y[0],O=y[1],x=Object(n.useState)([]),w=Object(u.a)(x,2),k=w[0],C=w[1],R=Object(n.useState)({lat:28.7041,lng:77.1025}),I=Object(u.a)(R,2),M=I[0],D=I[1],z=Object(n.useState)(3),W=Object(u.a)(z,2),A=W[0],L=W[1],J=Object(n.useState)([]),Y=Object(u.a)(J,2),q=Y[0],F=Y[1],$=Object(n.useState)("cases"),G=Object(u.a)($,2),H=G[0],K=G[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=_(e);C(a),F(e),c(t)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){b(a),O(e),D({lat:e.countryInfo.lat,lng:e.countryInfo.long}),L(5)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"Covid-19 Tracker"),r.a.createElement(f.a,{className:"app__dropdown"},r.a.createElement(m.a,{variant:"outlined",onChange:P,value:h},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(d.a,{key:Math.random(),value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__infoboxes"},r.a.createElement(E,{isRed:!0,active:"cases"===H,onClick:function(e){return K("cases")},title:"Corona cases",cases:N(j.todayCases),total:j.cases}),r.a.createElement(E,{isRed:!1,active:"recovered"===H,onClick:function(e){return K("recovered")},title:"Recovered",cases:N(j.todayRecovered),total:j.recovered}),r.a.createElement(E,{isRed:!0,active:"deaths"===H,onClick:function(e){return K("deaths")},title:"Deaths",cases:N(j.todayDeaths),total:j.deaths})),r.a.createElement(S,{casesType:H,countries:q,center:M,zoom:A})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement("h3",null,"Live Cases By Country"),r.a.createElement(B,{countries:k}),r.a.createElement("h3",null,"World wide new ",H),r.a.createElement(T,{casesType:H}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.b6ff9f1b.chunk.js.map