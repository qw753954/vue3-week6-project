(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c43f1dda"],{"057f":function(t,e,n){var o=n("fc6a"),c=n("241c").f,r={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return c(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==r.call(t)?i(t):c(o(t))}},1799:function(t,e,n){"use strict";var o=n("7a23"),c={"aria-label":"Page navigation example"},r={class:"pagination pagination-sm justify-content-center"},a=Object(o["h"])("span",{"aria-hidden":"true"},"«",-1),i=Object(o["h"])("span",{"aria-hidden":"true"},"»",-1);function s(t,e,n,s,l,d){return Object(o["t"])(),Object(o["e"])("nav",c,[Object(o["h"])("ul",r,[Object(o["h"])("li",{class:["page-item",{disabled:!n.pages.has_pre}]},[Object(o["h"])("a",{href:"#",class:"page-link",onClick:e[1]||(e[1]=Object(o["N"])((function(e){return t.$emit("emitChange",n.pages.current_page-1)}),["prevent"]))},[a])],2),(Object(o["t"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(n.pages.total_pages,(function(e,c){return Object(o["t"])(),Object(o["e"])("li",{class:["page-item",{active:n.pages.current_page==e}],key:c},[Object(o["h"])("a",{href:"#",class:"page-link",onClick:Object(o["N"])((function(n){return t.$emit("emitChange",e)}),["prevent"])},Object(o["D"])(e),9,["onClick"])],2)})),128)),Object(o["h"])("li",{class:["page-item",{disabled:!n.pages.has_next}]},[Object(o["h"])("a",{href:"#",class:"page-link",onClick:e[2]||(e[2]=Object(o["N"])((function(e){return t.$emit("emitChange",n.pages.current_page+1)}),["prevent"]))},[i])],2)])])}var l={props:["pages"]};l.render=s;e["a"]=l},"746f":function(t,e,n){var o=n("428f"),c=n("5135"),r=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});c(e,t)||a(e,t,{value:r.f(t)})}},a4d3:function(t,e,n){"use strict";var o=n("23e7"),c=n("da84"),r=n("d066"),a=n("c430"),i=n("83ab"),s=n("4930"),l=n("fdbf"),d=n("d039"),u=n("5135"),b=n("e8b5"),h=n("861d"),p=n("825a"),f=n("7b0b"),m=n("fc6a"),O=n("c04e"),g=n("5c6c"),j=n("7c73"),v=n("df75"),y=n("241c"),w=n("057f"),P=n("7418"),k=n("06cf"),M=n("9bf2"),x=n("d1e7"),S=n("9112"),N=n("6eeb"),C=n("5692"),_=n("f772"),D=n("d012"),$=n("90e3"),L=n("b622"),U=n("e538"),E=n("746f"),F=n("d44e"),V=n("69f3"),H=n("b727").forEach,J=_("hidden"),A="Symbol",I="prototype",T=L("toPrimitive"),G=V.set,Q=V.getterFor(A),W=Object[I],q=c.Symbol,z=r("JSON","stringify"),B=k.f,K=M.f,R=w.f,X=x.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),ot=c.QObject,ct=!ot||!ot[I]||!ot[I].findChild,rt=i&&d((function(){return 7!=j(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=B(W,e);o&&delete W[e],K(t,e,n),o&&t!==W&&K(W,e,o)}:K,at=function(t,e){var n=Y[t]=j(q[I]);return G(n,{type:A,tag:t,description:e}),i||(n.description=e),n},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===W&&st(Z,e,n),p(t);var o=O(e,!0);return p(n),u(Y,o)?(n.enumerable?(u(t,J)&&t[J][o]&&(t[J][o]=!1),n=j(n,{enumerable:g(0,!1)})):(u(t,J)||K(t,J,g(1,{})),t[J][o]=!0),rt(t,o,n)):K(t,o,n)},lt=function(t,e){p(t);var n=m(e),o=v(n).concat(pt(n));return H(o,(function(e){i&&!ut.call(n,e)||st(t,e,n[e])})),t},dt=function(t,e){return void 0===e?j(t):lt(j(t),e)},ut=function(t){var e=O(t,!0),n=X.call(this,e);return!(this===W&&u(Y,e)&&!u(Z,e))&&(!(n||!u(this,e)||!u(Y,e)||u(this,J)&&this[J][e])||n)},bt=function(t,e){var n=m(t),o=O(e,!0);if(n!==W||!u(Y,o)||u(Z,o)){var c=B(n,o);return!c||!u(Y,o)||u(n,J)&&n[J][o]||(c.enumerable=!0),c}},ht=function(t){var e=R(m(t)),n=[];return H(e,(function(t){u(Y,t)||u(D,t)||n.push(t)})),n},pt=function(t){var e=t===W,n=R(e?Z:m(t)),o=[];return H(n,(function(t){!u(Y,t)||e&&!u(W,t)||o.push(Y[t])})),o};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=$(t),n=function(t){this===W&&n.call(Z,t),u(this,J)&&u(this[J],e)&&(this[J][e]=!1),rt(this,e,g(1,t))};return i&&ct&&rt(W,e,{configurable:!0,set:n}),at(e,t)},N(q[I],"toString",(function(){return Q(this).tag})),N(q,"withoutSetter",(function(t){return at($(t),t)})),x.f=ut,M.f=st,k.f=bt,y.f=w.f=ht,P.f=pt,U.f=function(t){return at(L(t),t)},i&&(K(q[I],"description",{configurable:!0,get:function(){return Q(this).description}}),a||N(W,"propertyIsEnumerable",ut,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),H(v(nt),(function(t){E(t)})),o({target:A,stat:!0,forced:!s},{for:function(t){var e=String(t);if(u(tt,e))return tt[e];var n=q(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(u(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),o({target:"Object",stat:!0,forced:!s,sham:!i},{create:dt,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:bt}),o({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),o({target:"Object",stat:!0,forced:d((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(f(t))}}),z){var ft=!s||d((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}));o({target:"JSON",stat:!0,forced:ft},{stringify:function(t,e,n){var o,c=[t],r=1;while(arguments.length>r)c.push(arguments[r++]);if(o=e,(h(e)||void 0!==t)&&!it(t))return b(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!it(e))return e}),c[1]=e,z.apply(null,c)}})}q[I][T]||S(q[I],T,q[I].valueOf),F(q,A),D[J]=!0},b727:function(t,e,n){var o=n("0366"),c=n("44ad"),r=n("7b0b"),a=n("50c4"),i=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,d=4==t,u=6==t,b=7==t,h=5==t||u;return function(p,f,m,O){for(var g,j,v=r(p),y=c(v),w=o(f,m,3),P=a(y.length),k=0,M=O||i,x=e?M(p,P):n||b?M(p,0):void 0;P>k;k++)if((h||k in y)&&(g=y[k],j=w(g,k,v),t))if(e)x[k]=j;else if(j)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:s.call(x,g)}else switch(t){case 4:return!1;case 7:s.call(x,g)}return u?-1:l||d?d:x}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d416:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c={class:"text-end my-4"},r={class:"table table-hover"},a=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{width:"15%"}," 分類 "),Object(o["h"])("th",{width:"35%"}," 產品名稱 "),Object(o["h"])("th",{width:"10%"}," 原價 "),Object(o["h"])("th",{width:"10%"}," 售價 "),Object(o["h"])("th",{width:"10%"}," 是否啟用 "),Object(o["h"])("th",{width:"15%"}," 編輯 ")])],-1),i={class:"btn-group"};function s(t,e,n,s,l,d){var u=Object(o["A"])("Loading"),b=Object(o["A"])("Pagination"),h=Object(o["A"])("ProductModal"),p=Object(o["A"])("DelProductModal");return Object(o["t"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(u,{active:l.isLoading},null,8,["active"]),Object(o["h"])("div",c,[Object(o["h"])("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=function(t){return d.openModal("new")})}," 建立新的產品 ")]),Object(o["h"])("table",r,[a,Object(o["h"])("tbody",null,[(Object(o["t"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(l.products,(function(t){return Object(o["t"])(),Object(o["e"])("tr",{key:t.id},[Object(o["h"])("td",null,Object(o["D"])(t.category),1),Object(o["h"])("td",null,Object(o["D"])(t.title),1),Object(o["h"])("td",null,Object(o["D"])(t.origin_price),1),Object(o["h"])("td",null,Object(o["D"])(t.price),1),Object(o["h"])("td",{class:{"text-success":t.is_enabled}},Object(o["D"])(t.is_enabled?"啟用":"未啟用"),3),Object(o["h"])("td",null,[Object(o["h"])("div",i,[Object(o["h"])("button",{type:"button",class:"btn btn-outline-success btn-sm",onClick:function(e){return d.openModal("edit",t)}}," 編輯 ",8,["onClick"]),Object(o["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return d.openModal("delete",t)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["h"])(b,{pages:l.pagination,onEmitChange:d.getProduct},null,8,["pages","onEmitChange"]),Object(o["h"])(h,{ref:"productModal",product:l.tempProduct,"is-new":l.isNew,onEmitUpdate:d.updateProduct},null,8,["product","is-new","onEmitUpdate"]),Object(o["h"])(p,{ref:"delProductModal",product:l.tempProduct,onEmitDelete:d.delProduct},null,8,["product","onEmitDelete"])],64)}n("99af"),n("a4d3"),n("e01a");var l={class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true",ref:"modal"},d={class:"modal-dialog modal-xl"},u={class:"modal-content border-0"},b={id:"productModalLabel",class:"modal-title fw-bold"},h=Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal"},null,-1),p={class:"modal-body"},f={class:"row"},m={class:"col-sm-4"},O={class:"form-group"},g=Object(o["h"])("label",{for:"img",class:"mb-1"},"輸入圖片網址",-1),j={class:"col-sm-8"},v={class:"form-group mb-3"},y=Object(o["h"])("label",{for:"title",class:"mb-1"},"標題",-1),w={class:"row mb-3"},P={class:"form-group col-md-6"},k=Object(o["h"])("label",{for:"category",class:"mb-1"},"分類",-1),M={class:"form-group col-md-6"},x=Object(o["h"])("label",{for:"unit",class:"mb-1"},"單位",-1),S={class:"row mb-3"},N={class:"form-group col-md-6"},C=Object(o["h"])("label",{for:"origin_price",class:"mb-1"},"原價",-1),_={class:"form-group col-md-6"},D=Object(o["h"])("label",{for:"price",class:"mb-1"},"售價",-1),$=Object(o["h"])("hr",null,null,-1),L={class:"form-group mb-3"},U=Object(o["h"])("label",{for:"description",class:"mb-1"},"產品描述",-1),E={class:"form-group mb-3"},F=Object(o["h"])("label",{for:"content",class:"mb-1"},"說明內容",-1),V={class:"form-group"},H={class:"form-check"},J=Object(o["h"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),A={class:"modal-footer"},I=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function T(t,e,n,c,r,a){return Object(o["t"])(),Object(o["e"])("div",l,[Object(o["h"])("div",d,[Object(o["h"])("div",u,[Object(o["h"])("div",{style:{background:"teal"},class:["modal-header text-white",{"bg-primary":n.isNew}]},[Object(o["h"])("h5",b,[Object(o["h"])("span",null,Object(o["D"])(n.isNew?"新增產品":"編輯產品"),1)]),h],2),Object(o["h"])("div",p,[Object(o["h"])("div",f,[Object(o["h"])("div",m,[Object(o["h"])("div",O,[g,Object(o["M"])(Object(o["h"])("input",{id:"img",type:"text",class:"form-control mb-3",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.nowProduct.image=t})},null,512),[[o["H"],r.nowProduct.image]]),Object(o["h"])("img",{class:"img-fluid",src:n.product.image},null,8,["src"])])]),Object(o["h"])("div",j,[Object(o["h"])("div",v,[y,Object(o["M"])(Object(o["h"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.nowProduct.title=t})},null,512),[[o["H"],r.nowProduct.title]])]),Object(o["h"])("div",w,[Object(o["h"])("div",P,[k,Object(o["M"])(Object(o["h"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.nowProduct.category=t})},null,512),[[o["H"],r.nowProduct.category]])]),Object(o["h"])("div",M,[x,Object(o["M"])(Object(o["h"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[4]||(e[4]=function(t){return r.nowProduct.unit=t})},null,512),[[o["H"],r.nowProduct.unit]])])]),Object(o["h"])("div",S,[Object(o["h"])("div",N,[C,Object(o["M"])(Object(o["h"])("input",{id:"origin_price",type:"number",class:"form-control",placeholder:"請輸入原價",min:"0",max:"100000","onUpdate:modelValue":e[5]||(e[5]=function(t){return r.nowProduct.origin_price=t})},null,512),[[o["H"],r.nowProduct.origin_price,void 0,{number:!0}]])]),Object(o["h"])("div",_,[D,Object(o["M"])(Object(o["h"])("input",{id:"price",type:"number",class:"form-control",placeholder:"請輸入售價",min:"0",max:"100000","onUpdate:modelValue":e[6]||(e[6]=function(t){return r.nowProduct.price=t})},null,512),[[o["H"],r.nowProduct.price,void 0,{number:!0}]])])]),$,Object(o["h"])("div",L,[U,Object(o["M"])(Object(o["h"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":e[7]||(e[7]=function(t){return r.nowProduct.description=t})},"\n                ",512),[[o["H"],r.nowProduct.description]])]),Object(o["h"])("div",E,[F,Object(o["M"])(Object(o["h"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":e[8]||(e[8]=function(t){return r.nowProduct.content=t})},"\n                ",512),[[o["H"],r.nowProduct.content]])]),Object(o["h"])("div",V,[Object(o["h"])("div",H,[Object(o["M"])(Object(o["h"])("input",{id:"is_enabled",type:"checkbox",class:"form-check-input","true-value":1,"false-value":0,"onUpdate:modelValue":e[9]||(e[9]=function(t){return r.nowProduct.is_enabled=t})},null,512),[[o["G"],r.nowProduct.is_enabled]]),J])])])])]),Object(o["h"])("div",A,[I,n.isNew?(Object(o["t"])(),Object(o["e"])("button",{key:0,type:"button",class:"btn btn-primary",onClick:e[10]||(e[10]=function(){return a.triggerFn&&a.triggerFn.apply(a,arguments)})}," 確認 ")):(Object(o["t"])(),Object(o["e"])("button",{key:1,type:"button",class:"btn btn-success",onClick:e[11]||(e[11]=function(){return a.triggerFn&&a.triggerFn.apply(a,arguments)})}," 確認 "))])])])],512)}var G=n("7c2b"),Q=n.n(G),W={data:function(){return{modal:"",nowProduct:{}}},props:["product","isNew"],methods:{triggerFn:function(){this.$emit("emitUpdate",this.isNew,this.nowProduct)},openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new Q.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})},updated:function(){this.nowProduct=this.product}};W.render=T;var q=W,z={class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true",ref:"modal"},B={class:"modal-dialog"},K={class:"modal-content border-0"},R=Object(o["h"])("div",{class:"modal-header bg-danger text-white"},[Object(o["h"])("h5",{id:"delProductModalLabel",class:"modal-title fw-bold"},[Object(o["h"])("span",null,"刪除產品")]),Object(o["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),X={class:"modal-body"},Y=Object(o["g"])(" 是否刪除 "),Z={class:"text-danger"},tt=Object(o["g"])(" 商品（刪除後將無法恢復） "),et={class:"modal-footer"},nt=Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(t,e,n,c,r,a){return Object(o["t"])(),Object(o["e"])("div",z,[Object(o["h"])("div",B,[Object(o["h"])("div",K,[R,Object(o["h"])("div",X,[Y,Object(o["h"])("strong",Z,Object(o["D"])(n.product.title),1),tt]),Object(o["h"])("div",et,[nt,Object(o["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(){return a.triggerFn&&a.triggerFn.apply(a,arguments)})}," 確認刪除 ")])])])],512)}var ct={data:function(){return{modal:""}},mounted:function(){this.modal=new Q.a(this.$refs.modal,{keyboard:!1,backdrop:"static"})},props:["product"],methods:{triggerFn:function(){this.$emit("emitDelete",this.product.id),this.hideModal()},openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}}};ct.render=ot;var rt=ct,at=n("1799"),it={data:function(){return{products:[],tempProduct:{},pagination:{},isNew:!0,isLoading:!0}},components:{ProductModal:q,DelProductModal:rt,Pagination:at["a"]},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peihan","/admin/products?page=").concat(e);this.axios.get(n).then((function(e){e.data.success?(t.products=e.data.products,t.pagination=e.data.pagination):alert(e.data.message),t.isLoading=!1})).catch((function(t){console.dir(t)}))},updateProduct:function(t,e){var n,o,c=this;this.isLoading=!0,t?(n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peihan","/admin/product"),o="post"):(n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peihan","/admin/product/").concat(e.id),o="put"),this.axios[o](n,{data:e}).then((function(t){t.data.success?(c.$refs.productModal.hideModal(),c.getProduct()):(alert(t.data.message),c.isLoading=!1)})).catch((function(t){console.dir(t)}))},delProduct:function(t){var e=this;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("peihan","/admin/product/").concat(t);this.axios.delete(n).then((function(t){t.data.success?e.getProduct():(alert(t.data.message),e.isLoading=!1)})).catch((function(t){console.dir(t)}))},openModal:function(t,e){switch(t){case"new":this.isNew=!0,this.tempProduct={},this.$refs.productModal.openModal();break;case"edit":this.isNew=!1,this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.productModal.openModal();break;case"delete":this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.delProductModal.openModal();break;default:break}}}};it.render=s;e["default"]=it},e01a:function(t,e,n){"use strict";var o=n("23e7"),c=n("83ab"),r=n("da84"),a=n("5135"),i=n("861d"),s=n("9bf2").f,l=n("e893"),d=r.Symbol;if(c&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},b=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof b?new d(t):void 0===t?d():d(t);return""===t&&(u[e]=!0),e};l(b,d);var h=b.prototype=d.prototype;h.constructor=b;var p=h.toString,f="Symbol(test)"==String(d("test")),m=/^Symbol\((.*)\)[^)]+$/;s(h,"description",{configurable:!0,get:function(){var t=i(this)?this.valueOf():this,e=p.call(t);if(a(u,t))return"";var n=f?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:b})}},e538:function(t,e,n){var o=n("b622");e.f=o}}]);
//# sourceMappingURL=chunk-c43f1dda.9bd9ab86.js.map