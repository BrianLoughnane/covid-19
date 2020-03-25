(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{171:function(e,t,a){e.exports=a(358)},354:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(53),i=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(20),s=a(24),l=a(16),u=a(17),d=a(11),m=a(18),h=a(19),v=a(133),p=a.n(v),f=a(13),b=a(81),S=a.n(b),k=S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(t,"t0",2);case 2:e.next=0;break;case 4:case"end":return e.stop()}}),e)})),E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(u.a)(a,[{key:"getColors",value:function(){var e=k(Array.from(this.props.colors)),t={};return this.props.keys.forEach((function(a){return t[a]=e.next().value})),t}},{key:"getMaxValue",value:function(e){var t=0;return e.forEach((function(e){Object.entries(e).forEach((function(e){var a=Object(s.a)(e,2),n=a[0],c=a[1];if("timestamp"!==n){var r=Number(c);r>t&&(t=r)}}))})),t}},{key:"onDotEnter",value:function(e){this.setState({activePoint:e})}},{key:"onDotLeave",value:function(){this.setState({activePoint:null})}},{key:"getTooltip",value:function(){var e=this.state.activePoint;return e?c.a.createElement(f.e,{content:function(){return c.a.createElement("span",null,e.dataKey,": ",e.value)}}):c.a.createElement(f.e,null)}},{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.keys,r=this.getColors();return c.a.createElement(f.d,{width:800,height:800,data:a,margin:{top:5,right:20,left:10,bottom:5}},c.a.createElement(f.a,{stroke:"#f5f5f5"}),c.a.createElement(f.f,{dataKey:"timestamp"}),c.a.createElement(f.g,{domain:["log"===this.props.scale?"auto":0,this.getMaxValue(a)],scale:this.props.scale}),c.a.createElement(f.b,null),this.getTooltip(),n.map((function(t,a){return c.a.createElement(f.c,{activeDot:{onMouseOver:e.onDotEnter.bind(e),onMouseOut:e.onDotLeave.bind(e)},type:"monotone",dataKey:t,stroke:r[t],key:t})})))}}]),a}(c.a.Component);E.defaultProps={colors:["#ff8150","#ffc139","#5dffcf","#3ef1fc","#4ec9ff"]};a(354);var y=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={visible:!1},n.handleInputChange=n.handleInputChange.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t={visible:e.visible};e.options.forEach((function(e){return t[e.key]=!1})),e.selectedValues.forEach((function(e){return t[e]=!0})),this.setState(t)}},{key:"onSubmit",value:function(e){e.preventDefault();var t=!this.state.visible;if(!t){var a=Object.entries(this.state).filter((function(e){var t=Object(s.a)(e,2),a=t[0];return t[1]&&"visible"!==a})).map((function(e){var t=Object(s.a)(e,2),a=t[0];t[1];return a}));this.props.onSubmit(a)}this.setState({visible:t})}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,n=t.checked;this.setState(Object(o.a)({},a,n))}},{key:"render",value:function(){var e=this,t=this.props,a=t.heading,n=t.options,r=this.state.visible?"":"CheckSheet--hidden";return c.a.createElement("div",{className:"CheckSheet"},c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"left"},c.a.createElement("div",{className:"CheckSheet-heading"},a)),c.a.createElement("div",{className:"right"},c.a.createElement("button",{onClick:this.onSubmit},this.state.visible?"Update":"Select Locations"))),c.a.createElement("div",{className:"CheckSheet-container ".concat(r)},n.map((function(t){return c.a.createElement("label",{key:t.key},c.a.createElement("input",{checked:e.state[t.key],name:t.key,onChange:e.handleInputChange,type:"checkbox"}),t.key)}))))}}]),a}(c.a.Component),g=(a(355),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={locationSelectedValues:e.locationSelectedValues,periodSelectedValue:e.periodSelectedValue,scaleSelectedValue:e.scaleSelectedValue},n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"makeOptions",value:function(e){return e.map((function(e){return{key:e}}))}},{key:"makePeriodOption",value:function(e){var t="All time";return 0!==e&&(t="Last ".concat(e," days")),{key:t,value:e}}},{key:"render",value:function(){var e=this,t=[3,7,10,14,21,30,60,0].map(this.makePeriodOption),a=this.makeOptions(this.props.keys),n=this.makeOptions(["linear","log"]);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"left"},c.a.createElement("span",null,"Period")),c.a.createElement("div",{className:"period-selector right"},c.a.createElement("select",{onChange:function(t){return e.onPeriodChange(t)},value:this.state.periodSelectedValue},t.map((function(e){return c.a.createElement("option",{key:e.key,value:e.value},e.key)})))))),c.a.createElement("div",null,c.a.createElement("div",{className:"clearfix"},c.a.createElement("div",{className:"left"},c.a.createElement("span",null,"Scale")),c.a.createElement("div",{className:"scale-selector right"},n.map((function(t){return c.a.createElement("label",{key:t.key},c.a.createElement("input",{checked:t.key===e.props.scaleSelectedValue,name:"scale",value:t.key,onChange:function(t){return e.onScaleChange(t)},type:"radio"}),t.key)}))))),c.a.createElement("div",{className:"location-selector"},c.a.createElement(y,{heading:"Country / State",options:a,onSubmit:function(t){return e.onLocationChange(t)},selectedValues:this.state.locationSelectedValues})))}},{key:"onLocationChange",value:function(e){this.setState({locationSelectedValues:e},this.onSubmit)}},{key:"onPeriodChange",value:function(e){this.setState({periodSelectedValue:Number(e.target.value)},this.onSubmit)}},{key:"onScaleChange",value:function(e){this.setState({scaleSelectedValue:e.target.value},this.onSubmit)}},{key:"onSubmit",value:function(){this.props.onSubmit({scale:this.state.scaleSelectedValue,period:this.state.periodSelectedValue,locations:this.state.locationSelectedValues})}}]),a}(c.a.Component));a(356);function O(e){var t=e[0],a=e[1];return a&&t?"".concat(a," - ").concat(t):a||(t||"???")}var C=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={confirmed:{data:[]},deaths:{data:[]},keys:[],locations:["Italy","Spain","France","US"],period:30,scale:"linear"},e.onSubmit=e.onSubmit.bind(Object(d.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData(this.state)}},{key:"getData",value:function(e){var t=this,a=this.state,n=a.confirmed,c=a.deaths;c.data.length?this.updateState([c.header,c.rows],e,"deaths"):window.fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv").then((function(e){return e.text()})).then((function(e){return t.parseRawData(e)})).then((function(a){return t.updateState(a,e,"deaths")})),n.data.length?this.updateState([n.header,n.rows],e,"confirmed"):window.fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv").then((function(e){return e.text()})).then((function(e){return t.parseRawData(e)})).then((function(a){return t.updateState(a,e,"confirmed")}))}},{key:"parseRawData",value:function(e){var t=p.a.parse(e).data;return[t[0],t.slice(1).sort((function(e,t){return O(e).localeCompare(O(t))}))]}},{key:"updateState",value:function(e,t,a){var n,c=Object(s.a)(e,2),r=c[0],i=c[1],l=t.locations,u=t.period,d=t.scale,m=4;0!==u&&(m=r.length-u);var h=r.slice(m),v=new Set,p=new Set(l),f=h.map((function(e,t){var a={timestamp:e};return i.forEach((function(e){var n=O(e);v.add(n),p.has(n)&&(a[n]=e[m+t])})),a}));v=Array.from(v);var b=(n={},Object(o.a)(n,a,{data:f,header:r,rows:i}),Object(o.a)(n,"keys",v),Object(o.a)(n,"locations",l),Object(o.a)(n,"period",u),Object(o.a)(n,"scale",d),n);this.setState(b)}},{key:"onSubmit",value:function(e){this.getData(e)}},{key:"render",value:function(){var e=this.state,t=e.confirmed,a=e.deaths,n=e.keys,r=e.locations,i=e.period,o=e.scale;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"App-Header"},"The Coronavirus Curve"),c.a.createElement("div",{className:"App-Form"},c.a.createElement(g,{periodSelectedValue:i,locationSelectedValues:r,scaleSelectedValue:o,keys:n,onSubmit:this.onSubmit})),c.a.createElement("h1",{className:"App-Header"},"Deaths"),c.a.createElement("div",{className:"App-Chart-container"},c.a.createElement("div",null,c.a.createElement(E,{data:a.data,keys:r,scale:o}))),c.a.createElement("div",{className:"spacer"}),c.a.createElement("h1",{className:"App-Header"},"Confirmed Cases"),c.a.createElement("div",{className:"App-Chart-container"},c.a.createElement("div",null,c.a.createElement(E,{data:t.data,keys:r,scale:o}))),c.a.createElement("div",{className:"spacer"}),c.a.createElement("div",{className:"spacer about"},"Data: ",c.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19"},"Johns Hopkins CSSE")),c.a.createElement("div",{className:"spacer"}))}}]),a}(c.a.Component);a(357);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[171,1,2]]]);
//# sourceMappingURL=main.7a254b0f.chunk.js.map