(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,a){t.exports=a(24)},18:function(t,e,a){},19:function(t,e,a){},23:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),r=a(5),l=a.n(r),o=(a(18),a(9)),c=a(6),s=a(7),u=a(10),h=a(8),p=a(11),b=(a(19),a(3)),d={2:"a","(":"b",")":"c",o:"d",3:"e",v:"f",n:"g","\u0398":"h",4:"i","|":"k",d:"l","-":"m","/":"n",5:"o","+":"p","\u2016":"q",p:"r","=":"s","~":"t",6:"u",g:"v",8:"w",w:"x",7:"y",9:"z","[":"bb","]":"cc",";":"ee","\u03c8":"ff",":":"ll","!":"oo","\u2260":"pp","?":"ss",T:"tt",x:"&","\u2206":"ch","^":"sh","\u221a":"th"},m=(Object.keys(d),{});for(var v in d)m[d[v]]=v;var x=Object.keys(m),f=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(h.a)(e).call(this))).state={ciphertext:"cipherhand",plaintext:"plainhand"},t}return Object(p.a)(e,t),Object(s.a)(e,[{key:"onChangeCipher",value:function(t){this.setState({ciphertext:t.target.value})}},{key:"onChangePlain",value:function(t){this.setState({plaintext:t.target.value})}},{key:"onClickAddCipher",value:function(t){var e=t.target.value,a=this.state.ciphertext+e;this.setState({ciphertext:a})}},{key:"cipher2plain",value:function(){var t=this.state.ciphertext.split("").map(function(t){return d.hasOwnProperty(t)?d[t]:t});this.setState({plaintext:t.join("")})}},{key:"plain2cipher",value:function(){var t=this.state.plaintext.split("").map(function(t){return x.indexOf(t)>-1?m[t]:t});this.setState({ciphertext:t.join("")})}},{key:"render",value:function(){var t=this;return i.a.createElement(n.Fragment,{class:"myautowrapbox"},i.a.createElement(b.a,{split:"horizontal",defaultSize:"80%"},i.a.createElement("div",{classs:"myautowrapbox"},i.a.createElement(b.a,{split:"horizontal",defaultSize:"30%"},i.a.createElement("div",{class:"myautowrapbox",borderLeftWidth:40},i.a.createElement("div",null,"\t Cipher Text \t \t",i.a.createElement("button",{type:"button",class:"btn btn-outline-primary",onClick:this.cipher2plain.bind(this)},"Decode"),i.a.createElement("br",null)),i.a.createElement("div",null,i.a.createElement("textarea",{class:"flextextarea",rows:"4",cols:"50",onChange:this.onChangeCipher.bind(this),value:this.state.ciphertext}))),i.a.createElement("div",{class:"btn-group"},Object.entries(d).map(function(e){var a=Object(o.a)(e,2),n=a[0],r=a[1];return i.a.createElement("button",{type:"button",onClick:t.onClickAddCipher.bind(t),value:n,class:"btn btn-outline-primary"},n,i.a.createElement("br",null),r)})))),i.a.createElement("div",{class:"myautowrapbox",borderLeftWidth:40},i.a.createElement("div",null,"\t Plaintext \t\t ",i.a.createElement("button",{type:"button",class:"btn btn-outline-primary",onClick:this.plain2cipher.bind(this)},"Encode"),i.a.createElement("br",null)),i.a.createElement("div",{class:"myautowrapbox"},i.a.createElement("textarea",{class:"flextextarea",rows:"3",cols:"50",onChange:this.onChangePlain.bind(this),value:this.state.plaintext})))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);l.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.c55d38f3.chunk.js.map