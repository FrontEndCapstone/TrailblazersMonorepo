!function(t){function e(e){for(var r,a,u=e[0],c=e[1],l=e[2],p=0,s=[];p<u.length;p++)a=u[p],o[a]&&s.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(f&&f(e);s.length;)s.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={3:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="bundles";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;i.push([58,0]),n()}({2:function(t,e){t.exports={ProductDetails:{display:"flex",flexFlow:"column nowrap",width:"333px",padding:"20px",fontSize:"1.6rem",lineHeight:"1.5",fontFamily:'Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif',color:"#222"},ProductInfo:{display:"flex",flexFlow:"row nowrap",width:"100%",fontSize:"15px"},brand:{fontWeight:"700",fontSize:"15px",color:"#347CB1"},name:{fontWeight:"600",fontSize:"2.9 rem",fontFamily:"Arbutus Slab, serif",letterSpacing:"0.01em",paddingBottom:"10px"},rating:{paddingLeft:"20px"},reviewCount:{paddingLeft:"10px"},itemWrapper:{display:"flex",width:"50%",justifyContent:"flex-end"},itemNum:{},price:{fontFamily:"Arbutus Slab, serif",fontWeight:"500",fontSize:"18px",paddingBottom:"23px"},color:{fontSize:"14px"},image:{height:"60px",width:"60px",borderRadius:"15%",margin:"5px",border:"1px solid blue",marginBottom:"10px"},quantity:{fontSize:"14px"},button:{borderRadius:"50%"},input:{width:"35px",height:"30px",margin:"5px",textAlign:"center",fontSize:"15px"}}},58:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(5),a=n.n(i),u=n(24),c=n.n(u),l=n(2),f=n.n(l),p=n(6),s=n.n(p);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=b(this,m(e).call(this,t))).state={rating:n.props.product.rating},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,o.a.Component),function(t,e,n){e&&d(t.prototype,e),n&&d(t,n)}(e,[{key:"changeRating",value:function(t,e){this.setState({rating:t})}},{key:"render",value:function(){return o.a.createElement(s.a,{rating:this.state.rating,starRatedColor:"#bd5b0d",editing:!1,numberOfStars:5,starDimension:"15px",starSpacing:"0",name:"rating"})}}]),e}(),g=function(t){var e=t.product;return o.a.createElement("div",{className:"product-info-wrapper",style:f.a.ProductInfo},o.a.createElement(v,{product:e}),o.a.createElement("div",{style:f.a.rating},e.rating),o.a.createElement("div",{style:f.a.reviewCount},"(",e.reviewCount,")"),o.a.createElement("div",{style:f.a.itemWrapper},o.a.createElement("div",{style:f.a.itemNum},"Item #",e.itemNum)))};function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var j=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?E(t):e}(this,S(e).call(this,t))).state={counter:1},n.increment=n.increment.bind(E(E(n))),n.decrement=n.decrement.bind(E(E(n))),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,o.a.Component),function(t,e,n){e&&O(t.prototype,e),n&&O(t,n)}(e,[{key:"increment",value:function(){this.setState({counter:this.state.counter+1})}},{key:"decrement",value:function(){1===this.state.counter?alert("Quantity cannot be less than 1"):this.setState({counter:this.state.counter-1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"quantity-wrapper"},o.a.createElement("div",{style:f.a.quantity},"Quantity"),o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("button",{style:f.a.button,type:"button",onClick:this.decrement,"data-test":"inc-button"},"-"),o.a.createElement("input",{style:f.a.input,type:"text",name:"quantity",value:this.state.counter,readOnly:!0}),o.a.createElement("button",{style:f.a.button,type:"button",onClick:this.increment,"data-test":"dec-button"},"+")))}}]),e}(),_=function(t){var e=t.product;return o.a.createElement("div",{className:"product",style:f.a.ProductDetails},o.a.createElement("div",{style:f.a.brand},"Trailblazer"),o.a.createElement("div",{style:f.a.name},"Trailblazer ",e.name),o.a.createElement(g,{product:e}),o.a.createElement("div",{style:f.a.price},"$".concat(e.price,".00")),o.a.createElement("div",{style:f.a.color},"Color: ",e.color),o.a.createElement("div",{className:"details-image"},o.a.createElement("img",{style:f.a.image,src:e.image,alt:"","img-test":"details"})),o.a.createElement(j,null))};function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return!e||"object"!==P(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=k(this,T(e).call(this,t))).state={product:null,isLoading:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,o.a.Component),function(t,e,n){e&&C(t.prototype,e),n&&C(t,n)}(e,[{key:"componentDidMount",value:function(){var t=this,e=window.location.href.split("/"),n=e[e.length-1];c.a.get("http://localhost:3001/data/".concat(n)).then(function(e){var n=e.data;t.setState({product:n,isLoading:!0})}).catch(function(t){console.log("Error at GET request",t)})}},{key:"render",value:function(){var t,e=this.state,n=e.product;return e.isLoading&&(t=o.a.createElement(_,{product:n,style:f.a.ProductDetails})),o.a.createElement("div",null,t)}}]),e}();a.a.render(o.a.createElement(N,null),document.getElementById("details"))}});