(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{188:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(66),l=a.n(c),o=a(11),u=a.n(o),i=a(17),s=a(18),d=a(26),m=a.n(d),p=(a(19),a(6)),f=a(27),E=a.n(f),g={color:"white",margin:"8px",width:"20rem"},v=function(e){var t=e.country,a=e.data,c=e.getData;Object(n.useEffect)((function(){c(t)}),[]);var l=a.confirmed,o=a.deaths,u=a.lastUpdate,i=a.recovered;return r.a.createElement("div",{id:"cards",className:"container",style:{flexDirection:"row"}},r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{bg:"primary",style:g},r.a.createElement(p.a.Header,null,"Confirmed Cases"),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,r.a.createElement("h2",null,l?r.a.createElement(E.a,{start:0,end:l.value,duration:1,separator:","}):"Loading...")),r.a.createElement(p.a.Text,null,new Date(u).toDateString()))),r.a.createElement(p.a,{bg:"success",style:g},r.a.createElement(p.a.Header,null,"Recovered Cases"),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,r.a.createElement("h2",null,l?r.a.createElement(E.a,{start:0,end:i.value,duration:1,separator:","}):"Loading...")),r.a.createElement(p.a.Text,null,new Date(u).toDateString()))),r.a.createElement(p.a,{bg:"danger",style:g},r.a.createElement(p.a.Header,null,"Deaths"),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,r.a.createElement("h2",null,l?r.a.createElement(E.a,{start:0,end:o.value,duration:1,separator:","}):"Loading...")),r.a.createElement(p.a.Text,null,new Date(u).toDateString())))))},b=a(39),h={marginTop:"10px",marginBottom:"2rem"},y=function(e){var t=e.country,a=e.data,c=e.dailyData,l=e.getDailyData;Object(n.useEffect)((function(){l()}),[]);var o=a.confirmed,u=a.recovered,i=a.deaths,s=a.lastUpdate,d=c.length?r.a.createElement(b.b,{data:{labels:c.map((function(e){return e.reportDate})),datasets:[{data:c.map((function(e){return e.confirmed.total})),label:"Infected",backgroundColor:"rgb(0, 0, 255, 0.2)",borderColor:"blue",borderWidth:"10px",fill:!0},{data:c.map((function(e){return e.deaths.total})),label:"Deaths",backgroundColor:"rgb(255, 0, 0, 0.2)",borderColor:"red",borderWidth:"10px",fill:!0}]},options:{title:{display:!0,text:"Confirmed Global Cases | ".concat(new Date(s).toDateString())}}}):null,m=a.confirmed?r.a.createElement(b.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{backgroundColor:["rgb(2, 116, 216)","rgb(92, 184, 92)","rgb(216, 84, 80)"],data:[o.value,u.value,i.value]}]},options:{legend:{display:!1}}}):null;return r.a.createElement("div",{className:"container",style:h},t?m:d)},D=a(40),C=function(e){var t=e.countryList,a=e.getCountryList,c=e.handleChange;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Control,{as:"select",onChange:function(e){return c(e.target.value)}},r.a.createElement("option",null,"Select Country"),t.length&&t.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))};var w=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(s.a)(l,2),d=o[0],p=o[1],f=Object(n.useState)({}),E=Object(s.a)(f,2),g=E[0],b=E[1],h=Object(n.useState)(""),D=Object(s.a)(h,2),w=D[0],x=D[1],O="https://covid19.mathdro.id/api",j=function(){var e=Object(i.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&(O="".concat(O,"/countries/").concat(t)),e.next=3,m.a.get(O);case 3:a=e.sent,c(a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(O,"/daily"));case 2:t=e.sent,p(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(O,"/countries"));case 2:t=e.sent,b(t.data.countries.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t),j(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App",style:{position:"relative"}},r.a.createElement("h1",{id:"title",style:{marginTop:"1rem"}},"COVID-19 Live Tracker"),r.a.createElement("div",{className:"container"},r.a.createElement(v,{country:w,data:a,getData:j}),r.a.createElement(C,{countryList:g,getCountryList:S,handleChange:T}),r.a.createElement(y,{country:w,dailyData:d,data:a,getDailyData:k})))};a(187);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))},19:function(e,t,a){},69:function(e,t,a){e.exports=a(188)}},[[69,1,2]]]);
//# sourceMappingURL=main.80ffbde6.chunk.js.map