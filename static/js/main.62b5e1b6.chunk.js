(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=(a(28),a(12)),l=a(7),s=a(8),d=a(10),p=a(9),g=a(3);var h=Object(g.a)("div",{target:"e1ob1ya20"})({name:"cnpmr7",styles:"justify-content:center;align-items:center;margin-top:25vh;margin-left:100vh"}),m=a(22),u=a.n(m),b=a(1);function x(){return Object(b.jsx)(h,{children:Object(b.jsx)(u.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}var f=a(5),j=a(23),y=a.n(j),v="https://pixabay.com/api",w="21758242-df60cf310fb09062fe07e2a40",O={fetchImages:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return y.a.get("".concat(v,"?q=").concat(e,"&page=").concat(t,"&key=").concat(w,"&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(e){return e.data.hits}))}};var k=Object(g.a)("header",{target:"e1hjgrqc4"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),S=Object(g.a)("form",{target:"e1hjgrqc3"})({name:"kbgsnr",styles:"display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden"}),L=Object(g.a)("button",{target:"e1hjgrqc2"})({name:"1a3m8tj",styles:"display:inline-block;width:48px;height:48px;border:0;background-image:url('https://image.flaticon.com/icons/svg/149/149852.svg');background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;&:hover{opacity:1;}"}),q=Object(g.a)("span",{target:"e1hjgrqc1"})({name:"jnnlmv",styles:"position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0"}),C=Object(g.a)("input",{target:"e1hjgrqc0"})({name:"g6sr3k",styles:"display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;&::placeholder{font:inherit;font-size:18px;}"});function M(e){var t=e.onSubmit;return Object(b.jsx)(k,{children:Object(b.jsxs)(S,{onSubmit:function(e){e.preventDefault();var a=e.target.elements.SearchInput.value;t(a)},children:[Object(b.jsx)(L,{type:"submit",children:Object(b.jsx)(q,{children:"Search"})}),Object(b.jsx)(C,{name:"SearchInput",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var I=Object(g.a)("ul",{target:"e1ejy0aw0"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"});var z=Object(g.a)("li",{target:"er5ycjv1"})({name:"ia8atm",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)"}),G=Object(g.a)("img",{target:"er5ycjv0"})({name:"1plt1o8",styles:"width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);&:hover{transform:scale(1.03);cursor:zoom-in;}"});function U(e){var t=e.handleClick,a=e.alt,n=e.image,r=n.webformatURL,i=n.largeImageURL;return Object(b.jsx)(z,{children:Object(b.jsx)(G,{src:r,alt:a,className:"ImageGalleryItem-image",onClick:function(e){return t(e,i)}})})}function D(e){var t=e.imageGalleryList,a=e.alt,n=e.handleClick;return Object(b.jsx)(I,{children:t.map((function(e){return Object(b.jsx)(U,{image:e,alt:a,handleClick:n},e.id)}))})}var R=Object(g.a)("button",{target:"e1bebgmb0"})({name:"1uu2342",styles:"margin:0 auto;padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"});function N(e){var t=e.onClick;return Object(b.jsx)(R,{type:"button",onClick:t,children:"Load more"})}var F=a(2),E=a.n(F);var K=Object(g.a)("div",{target:"e1mmoium1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),T=Object(g.a)("div",{target:"e1mmoium0"})({name:"nvc24w",styles:"max-width:calc(100vw - 40%);max-height:calc(100vh - 3%)"}),A=document.querySelector("#modal-root"),B=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){e.props.closeModal(t)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.alt,a=e.url,n=e.closeModal;return Object(i.createPortal)(Object(b.jsx)(K,{onClick:n,children:Object(b.jsx)(T,{children:Object(b.jsx)("img",{src:a,alt:t})})}),A)}}]),a}(n.Component);B.defaultProps={alt:E.a.string.isRequired,url:E.a.string.isRequired,closeModal:E.a.func.isRequired};var J=Object(g.a)("div",{target:"e1dqmbk90"})({name:"kyj7j7",styles:"display:grid;grid-template-columns:1fr;grid-gap:16px;padding-bottom:24px"}),P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={imageName:"",imageGalleryList:[],showModal:null,imgUrl:"",page:1,reqStatus:"idle"},e.handleFormSubmit=function(t){""===t.trim()?f.b.error("\u0412\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"):e.setState({imageName:t})},e.handleSearch=function(){var t=e.state,a=t.imageName,n=t.page;e.setState({reqStatus:"pending"}),O.fetchImages(a,n).then((function(t){return e.handleSearchData(t)}))},e.handleSearchData=function(t){var a=e.state.page;if(0===t.length&&1===a)return f.b.error("\u0412\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0434\u0430\u043b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"),void e.setState({reqStatus:"idle"});if(0===t.length&&a>1)return f.b.error("\u041a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043d\u0435\u0442"),void e.setState({reqStatus:"idle"});var n=t.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}}));e.setState((function(e){return{imageGalleryList:[].concat(Object(c.a)(e.imageGalleryList),Object(c.a)(n)),page:e.page+1,reqStatus:"resolved"}}))},e.handleScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(t){t.target!==t.currentTarget&&"Escape"!==t.code||e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClickImages=function(t,a){e.setState({imgUrl:a}),e.toggleModal(t)},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.imageName,r=a.imageGalleryList;t.imageName!==n&&(this.setState({imageGalleryList:[],page:1}),this.handleSearch()),t.imageGalleryList!==r&&0!==t.imageGalleryList.length&&this.handleScroll()}},{key:"render",value:function(){var e=this.state,t=e.imageGalleryList,a=e.imageName,n=e.reqStatus,r=e.showModal,i=e.imgUrl;return Object(b.jsxs)(J,{children:[Object(b.jsx)(M,{onSubmit:this.handleFormSubmit}),t.length>0&&Object(b.jsx)(D,{imageGalleryList:t,alt:a,handleClick:this.handleClickImages}),"pending"===n&&Object(b.jsx)(x,{}),"resolved"===n&&Object(b.jsx)(N,{onClick:this.handleSearch}),r&&Object(b.jsx)(B,{alt:a,url:i,closeModal:this.toggleModal}),Object(b.jsx)(f.a,{})]})}}]),a}(n.Component);o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.62b5e1b6.chunk.js.map