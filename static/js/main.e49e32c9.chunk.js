(this.webpackJsonplabwebview=this.webpackJsonplabwebview||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),c=a.n(i),o=(a(13),a(1)),l=a(2),s=a(3),u=a(5),d=a(4),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a),(e=t.call(this)).state={cantidad:0};return["agregar","quitar"].forEach((function(t){e[t]=e[t].bind(Object(s.a)(e))})),e}return Object(l.a)(a,[{key:"agregar",value:function(){this.setState({cantidad:this.state.cantidad+1})}},{key:"quitar",value:function(){this.setState({cantidad:this.state.cantidad-1})}},{key:"render",value:function(){var e=this.state.cantidad>0,t={border:"1px solid white",marginBottom:"1em",borderRadius:"0.5em",padding:"1em",background:e?"linear-gradient(135deg, #fad961 0%,#f76b1c 100%)":"#FFF",color:e?"#FFF":"#000",transition:"all 400ms ease-out"};return r.a.createElement("div",{style:t},r.a.createElement("h3",null,this.props.name),r.a.createElement("span",null,"Cantidad: ",this.state.cantidad," "),r.a.createElement("button",{onClick:this.agregar},"+"),r.a.createElement("button",{onClick:this.quitar},"-"),r.a.createElement("hr",null),r.a.createElement("p",null,"S/ ",this.props.price))}}]),a}(r.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={cantidad:0},e.agregar=function(){return e.setState({cantidad:e.state.cantidad+1})},e.quitar=function(){return e.setState({cantidad:e.state.cantidad-1})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Producto"),r.a.createElement("h3",null,this.props.name),r.a.createElement("div",null,"Cantidad: ",this.state.cantidad," "),r.a.createElement("button",{onClick:this.agregar},"+"),r.a.createElement("button",{onClick:this.quitar},"-"),r.a.createElement("hr",null),r.a.createElement("p",null,"S/ ",this.props.price))}}]),a}(r.a.Component);a(14);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{name:"Manzana",price:5.5}),r.a.createElement(h,{name:"Pera",price:45.5}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e49e32c9.chunk.js.map