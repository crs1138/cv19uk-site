(this["webpackJsonpcv19-uk-timeline"]=this["webpackJsonpcv19-uk-timeline"]||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),i=n.n(c),s=(n(50),n(3)),l=n(17),o=n.n(l);var u=function(e){var t=e.title;return e.description,r.a.createElement("header",{className:o.a.cv19__header},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:o.a.cv19__title},t)))},m=n(12),_=n.n(m),v=n(38),d=n.n(v);var f=function(e){var t=e.content;return r.a.createElement("footer",{className:d.a.tm__footer},r.a.createElement("div",{className:"container"},r.a.createElement(_.a,{blocks:t})))},p=n(128),E=n(39),h=n.n(E)()({projectId:"he2py649",dataset:"production",useCdn:!0}),g=n(16),b=n.n(g),N=n(18),y=n.n(N);var x=function(e){var t=e.sources;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t.length>1?"Sources:":"Source:"),r.a.createElement("ul",{className:y.a.sources},t.map((function(e){var t=e._key,n=e.blank,a=e.title,c=e.url;return r.a.createElement("li",{key:t,className:y.a.source},r.a.createElement("a",{href:c,title:a,target:n?"_blank":"_self"},a||c))}))))},j=n(8),k=n.n(j),O=n(40),L=n.n(O),w=n(41),S=n.n(w),J=n(42),M=n.n(J),T=n(5),F=n.n(T);k.a.extend(L.a),k.a.extend(S.a),k.a.extend(M.a);var A=b()(h);var I=function(e){var t=e.events,n={types:{figure:function(e){var t,n=e.node,a=n.alt,c=n.caption,i=n.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",null,r.a.createElement("img",{src:(t=i,A.image(t)).fit("clip").url(),alt:a}),r.a.createElement("figcaption",null,c)))}}};return r.a.createElement("ul",{className:F.a.events},t.map((function(e){var t=e._id,a=e.heading,c=e.details,i=e.date,s=e.authorName,l=e.source,o=k.a.utc(i.utc);return r.a.createElement("li",{className:F.a.event,key:t},r.a.createElement("h2",{className:F.a.event__heading},a),r.a.createElement("div",{className:F.a.event__meta},o.format("MMMM Do, YYYY")),void 0!==c&&r.a.createElement("div",{className:F.a.event__details},r.a.createElement(_.a,{blocks:c,serializers:n})),r.a.createElement("div",{className:F.a.event__meta},!!l&&l.length>0&&r.a.createElement(x,{sources:l}),r.a.createElement("p",null,"Added by: ",void 0!==s?s:"anonymous")))})))},U={getMonthName:function(e){return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e-1])},regroupEvents:function(e){var t=e.reduce((function(e,t){var n=t.date.utc.split("T")[0],a=n.split("-")[0],r=n.split("-")[1],c="".concat(a,"-").concat(r);return e[c]||(e[c]=[]),e[c].push(t),e}),{}),n=[];for(var a in t){var r=a.split("-"),c={label:{month:U.getMonthName(r[1]),year:r[0]},events:t[a]};n.push(c)}return n}},W=U,Y=n(13),B=n.n(Y);var C=function(e){var t=e.events,n=(0,W.regroupEvents)(t);return r.a.createElement("ul",{className:B.a.time_units},n.map((function(e){var t=e.label,n=e.events;return r.a.createElement("li",{className:B.a.time_unit,key:Object(p.a)()},r.a.createElement("div",{className:B.a.time_unit__label},t.month,r.a.createElement("span",null,t.year)),r.a.createElement(I,{events:n}))})))},D=n(19),H=n.n(D);var z=function(e){var t=e.events;return r.a.createElement("div",{className:H.a.tm},r.a.createElement("div",{className:H.a.tm__line}),r.a.createElement(C,{events:t}))},R=n(9),q=n.n(R),G=n(20),K="* [ _type == 'event' ] | order(date.utc asc, heading) {\n  _id,\n  heading,\n  date,\n  details,\n  source,\n  \"authorName\":author->name\n}",X="* [ _type == 'siteSettings' ] {\n\ttitle,\n\tfooter,\n  description\n}";var Z=n(43),$=n(44);n(125);var P=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!0),l=Object(s.a)(i,2),o=l[0],u=l[1];return Object(a.useEffect)((function(){function t(){return(t=Object(G.a)(q.a.mark((function t(){var n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.fetch(e);case 2:n=t.sent,c(n),u(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),[r,o]}(),t=Object(s.a)(e,2),n=t[0],c=t[1],i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=Object(a.useState)([]),n=Object(s.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!0),l=Object(s.a)(i,2),o=l[0],u=l[1];return Object(a.useEffect)((function(){function t(){return(t=Object(G.a)(q.a.mark((function t(){var n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.fetch(e);case 2:n=t.sent,c(n),u(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),[r,o]}(),l=Object(s.a)(i,2),o=l[0],m=l[1];return r.a.createElement("div",{className:"App"},c||m?r.a.createElement("div",{className:"loading"},r.a.createElement("h2",null,"Loading data\u2026"),r.a.createElement(Z.a,{icon:$.a,size:"4x",fixedWidth:!0,pulse:!0}),r.a.createElement("p",null,"Thank you for exercising your patience\u2026")):r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{title:n[0].title,description:n[0].description}),r.a.createElement("main",{className:"container"},r.a.createElement(z,{events:o})),r.a.createElement(f,{content:n[0].footer})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,t,n){e.exports={time_units:"TimeUnitList_time_units__3tjrY",time_unit:"TimeUnitList_time_unit__38ttW",time_unit__label:"TimeUnitList_time_unit__label__2cmiX"}},17:function(e,t,n){e.exports={cv19__header:"Header_cv19__header__3lRKd",cv19__title:"Header_cv19__title__3cC_L"}},18:function(e,t,n){e.exports={sources:"SourceList_sources__1c-JD",source:"SourceList_source__3usBi"}},19:function(e,t,n){e.exports={tm:"Timeline_tm__W29v7",tm__line:"Timeline_tm__line__GIT3U"}},38:function(e,t,n){e.exports={tm__footer:"Footer_tm__footer__3UES3",container:"Footer_container__1I16_"}},45:function(e,t,n){e.exports=n(126)},5:function(e,t,n){e.exports={events:"EventList_events__3mZcH",event:"EventList_event__dA5CI",microEvent:"EventList_microEvent__2Jugq",event__heading:"EventList_event__heading__39BsR",event__details:"EventList_event__details__22JOs",event__meta:"EventList_event__meta__1dxJN"}},50:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.491a5be5.chunk.js.map