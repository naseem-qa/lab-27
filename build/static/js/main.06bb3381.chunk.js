(this["webpackJsonplab-27"]=this["webpackJsonplab-27"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n(4),u=n(3),l=n(5),o=n(0),i=n.n(o),s=n(7),p=n.n(s),b=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,"Counters R fun"))}}]),t}(i.a.Component),h=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",null,"\xa9 2020 Code Fellows")}}]),t}(i.a.Component),j=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleUp=function(e){var t=n.state.count+1;n.updateCounter(t)},n.handleDown=function(e){var t=n.state.count-1;n.updateCounter(t)},n.state={count:0},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"updateCounter",value:function(e){var t="";e>0?t="positive":e<0&&(t="negative"),this.setState({count:e,polarity:t})}},{key:"render",value:function(){var e=["count",this.state.polarity].join(" ");return i.a.createElement("section",{className:"counter"},i.a.createElement("span",{className:"down clicker",onClick:this.handleDown}," - "),i.a.createElement("span",{className:e},this.state.count),i.a.createElement("span",{className:"up clicker",onClick:this.handleUp}," + "))}}]),t}(i.a.Component),m=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null),i.a.createElement(j,null),i.a.createElement(h,null))}}]),t}(i.a.Component),O=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(m,null)}}]),t}(i.a.Component),f=document.getElementById("root");p.a.render(i.a.createElement(O,null),f)},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.06bb3381.chunk.js.map