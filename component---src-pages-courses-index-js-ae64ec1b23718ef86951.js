(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8OMb":function(e,t,a){},K7k0:function(e,t,a){},Klhf:function(e,t,a){},LzeA:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("/MKj"),l=a("hTlr"),u=a("vrFN"),i=(a("cKkA"),function(e){var t=e.onChange,a=e.value,n=e.placeholder;return r.a.createElement("input",{className:"content__search--input",type:"search",name:"search",placeholder:n,value:a,onChange:t})}),s=(a("NTr6"),a("h5b2")),o=function(e){var t=e.placeholder,a=Object(c.b)(),l=Object(n.useState)({search:""}),u=l[0],o=l[1];return r.a.createElement("div",{className:"content__search"},r.a.createElement(i,{value:u.search,onChange:function(e){var t=e.target,n=t.name,r=t.value;o((function(e){var t;return Object.assign({},e,((t={})[n]=r,t))})),a(Object(s.b)(r))},placeholder:t}))},m=(a("rTU8"),a("Wbzz"));var f=function(e){var t=e.label,a=e.url;return r.a.createElement(m.Link,{to:a,className:"chip",activeClassName:"chip__active"},r.a.createElement("div",null,r.a.createElement("span",null,t)))},d=a("pmdI"),E=(a("Klhf"),a("d9iX")),v=a.n(E);t.a=function(e){var t=e.children,a=Object(c.c)((function(e){return e.ui.heading})),i=Object(c.b)();return Object(n.useEffect)((function(){i(Object(d.c)({logo:v.a}))}),[]),r.a.createElement(l.a,null,r.a.createElement(u.a,{title:"Courses"}),r.a.createElement("div",{className:"course__page--wrapper"},r.a.createElement("div",{className:"course__page--heading"},r.a.createElement("h2",null,a)),r.a.createElement("div",{className:"course__search"},r.a.createElement(o,{placeholder:"Search for a course"})),r.a.createElement("div",{className:"chips__container"},r.a.createElement(f,{label:"available",url:"/courses"}),r.a.createElement(f,{label:"upcoming",url:"/courses/upcoming"})),t))}},NTr6:function(e,t,a){},cKkA:function(e,t,a){},g2sF:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz");a("vH9O");t.a=function(e){var t=e.title,a=e.image,n=e.description,l=e.content;return r.a.createElement(c.Link,{to:l},r.a.createElement("div",{className:"course"},r.a.createElement("div",{className:"course__header"},r.a.createElement("img",{src:a,alt:"couse_image",className:"course__image"})),r.a.createElement("div",{className:"course__card--divider"}),r.a.createElement("div",{className:"course__content"},r.a.createElement("h3",{className:"course__title"},t),r.a.createElement("p",null,n))))}},h5b2:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){return function(t){t({type:"SEARCH_CONTENT",payload:e})}},r=function(){return function(e){e({type:"RESET_SEARCH_STATE"})}}},hTlr:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=(a("gma1"),a("xMo/"),a("7O5W")),l=a("wHSu"),u=a("8tEE"),i=(a("TpwP"),a("vrFN")),s=(a("tyWD"),a("K7k0"),a("M8b6")),o=a("U1il");a("w69F");c.b.add(u.a,l.a);t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(i.a,null),r.a.createElement(s.a,null),r.a.createElement("main",null,t),r.a.createElement(o.a,null)))}},rTU8:function(e,t,a){},tyWD:function(e,t,a){},vH9O:function(e,t,a){},y5kp:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));var n=a("q1tI"),r=a.n(n),c=a("/MKj"),l=a("LzeA"),u=a("g2sF"),i=a("h5b2"),s=a("pmdI");a("8OMb");var o="3820190842";t.default=function(e){var t=e.data.allMarkdownRemark.nodes,a=Object(c.c)((function(e){return e.search.query})),o=Object(c.b)(),m=Object(n.useState)([]),f=m[0],d=m[1],E=t;Object(n.useEffect)((function(){o(Object(i.a)()),o(Object(s.a)("Available courses"))}),[]),Object(n.useEffect)((function(){d(t.filter((function(e){var t=e.frontmatter,n=t.description,r=t.title;return n.toLowerCase().includes(a.trim().toLowerCase())||r.toLowerCase().includes(a.trim().toLowerCase())})))}),[a,t]);var v=f&&""!==a?f:E;return r.a.createElement("div",null,r.a.createElement(l.a,null,v[0]?r.a.createElement("div",{className:"courses__container"},v.map((function(e){return r.a.createElement(u.a,{title:e.frontmatter.title,description:e.frontmatter.description,image:e.frontmatter.image,content:e.fields.slug})}))):r.a.createElement("div",{className:"course__notFound"},r.a.createElement("h3",null,"Sorry,we could not find results matching",r.a.createElement("span",{className:"search__query"},'"'+a+'"')))))}}}]);
//# sourceMappingURL=component---src-pages-courses-index-js-ae64ec1b23718ef86951.js.map