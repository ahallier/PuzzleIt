(window["webpackJsonplaugh-of-the-day"]=window["webpackJsonplaugh-of-the-day"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(2),o=n.n(c),l=(n(13),n(3)),r=n(4),u=n(6),s=n(5),h=n(7);n(14),n(15);function f(e){return i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement("img",{onClick:function(){return e.handleClick()},style:{height:"200px",width:"200px"},src:e.imgPath}))}function g(e){return i.a.createElement("div",{class:"row",style:{height:"200px"}},i.a.createElement(f,{handleClick:function(){return e.handleClick(e.configRow[0].value)},imgPath:e.configRow[0].path}),i.a.createElement(f,{handleClick:function(){return e.handleClick(e.configRow[1].value)},imgPath:e.configRow[1].path}),i.a.createElement(f,{handleClick:function(){return e.handleClick(e.configRow[2].value)},imgPath:e.configRow[2].path}))}function m(e){for(var t=[],n=1;n<=9;n++)t.push({value:n,path:"https://photo-puzzle-picture.s3.amazonaws.com/"+e+"/"+n+".png"});return t}var d=function(e){function t(e){var n;Object(l.a)(this,t);return(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={pictures:["butterfly","numbers"],active:null,picture:"numbers",configuration:m("numbers")},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"swapActiveImageWithSelectedImage",value:function(e){if(null===this.state.active){var t=this.state.configuration.slice();this.setState({configuration:t,active:e})}else{var n=this.state.configuration.slice(),a=this.getConfigLocal(e),i=this.getConfigLocal(this.state.active),c=n[a].path,o=n[i].path;n[a].path=o,n[i].path=c,this.setState({configuration:n,active:null})}}},{key:"getConfigLocal",value:function(e){return this.state.configuration.findIndex((function(t){return t.value===e}))}},{key:"handleChange",value:function(e){var t=e.target,n=(t.name,t.value);this.setState({picture:n,configuration:m(n)})}},{key:"render",value:function(){var e=this,t=this.state.pictures.map((function(e){return i.a.createElement("option",{value:e},e)}));return i.a.createElement("html",null,i.a.createElement("header",{class:"App-header"},i.a.createElement("h1",null,"Puzzle It")),i.a.createElement("body",null,i.a.createElement("div",null,i.a.createElement("select",{defaultValue:this.state.selectedPicture,onChange:this.handleChange.bind(this)},t)),i.a.createElement("div",{class:"center"},i.a.createElement("div",{class:"container",style:{display:"inline-block"}},i.a.createElement(g,{handleClick:function(t){return e.swapActiveImageWithSelectedImage(t)},configRow:this.state.configuration.slice(0,3)}),i.a.createElement(g,{handleClick:function(t){return e.swapActiveImageWithSelectedImage(t)},configRow:this.state.configuration.slice(3,6)}),i.a.createElement(g,{handleClick:function(t){return e.swapActiveImageWithSelectedImage(t)},configRow:this.state.configuration.slice(6,9)})))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f0bd9708.chunk.js.map