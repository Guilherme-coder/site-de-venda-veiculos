(function(e){function t(t){for(var s,i,c=t[0],n=t[1],l=t[2],m=0,d=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,c=1;c<a.length;c++){var n=a[c];0!==r[n]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},r={app:0},o=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],n=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=n;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0185":function(e,t,a){},"02f3":function(e,t,a){},1:function(e,t){},1722:function(e,t,a){"use strict";a("c7c0")},2486:function(e,t,a){"use strict";a("5254")},"2cbe":function(e,t,a){},3245:function(e,t,a){"use strict";a("2cbe")},"4ee2":function(e,t,a){},5254:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b0c0");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i={name:"App",components:{}},c=i,n=a("2877"),l=Object(n["a"])(c,r,o,!1,null,null,null),u=l.exports,m=a("8c4f"),d=a("28dd"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("header-app"),a("div",{staticClass:"advertise_vehicle"},[a("router-link",{attrs:{to:"/anunciar"}},[a("button",{staticClass:"advertise_button"},[e._v("Anuncie já seu veículo")])])],1),e._m(0),a("div",{staticClass:"list_vehicles"},[e._m(1),"cars"===e.typeVehicle?a("ul",e._l(e.cars,(function(e){return a("card-vehicle",{key:e.picture,attrs:{vehicle:"carros",id:e.id,brand:e.brand,model:e.model,year:e.year,price:e.price,engine:e.engine,datas:e.created_at,picture:e.picture}})})),1):"motorcycles"===e.typeVehicle?a("ul",e._l(e.motorcycles,(function(e){return a("card-vehicle",{key:e.picture,attrs:{vehicle:"motocicletas",id:e.id,brand:e.brand,model:e.model,category:e.category,year:e.year,price:e.price,capacity:e.capacity,datas:e.created_at,picture:e.picture}})})),1):e._e()])],1)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("label",{staticClass:"label_vehicles",attrs:{for:"search_vehicle"}},[e._v("Busque o veículo que deseja: ")]),a("input",{staticClass:"input_vehicles",attrs:{id:"search_vehicle",type:"text"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("select",{staticClass:"switch_vehicles",attrs:{id:"select_vehicels"}},[a("option",{attrs:{value:"cars"}},[e._v("Carros")]),a("option",{attrs:{value:"motorcycles"}},[e._v("Motocicletas")])])}],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu_header"},[a("router-link",{staticClass:"link_title",attrs:{to:"/"}},[a("h2",{staticClass:"title_header"},[e._v("Site de venda de veículos")])]),a("div",[a("ul",{staticClass:"items_header"},[a("li",{staticClass:"item_header"},[a("router-link",{staticClass:"link_header",attrs:{to:"/"}},[e._v("Home")])],1),a("li",{directives:[{name:"show",rawName:"v-show",value:e.getUser,expression:"getUser"}],staticClass:"item_header",on:{click:function(t){return e.logOut()}}},[e._v(e._s(e.getUser))]),a("li",{directives:[{name:"show",rawName:"v-show",value:!e.getUser,expression:"!getUser"}],staticClass:"item_header"},[a("router-link",{staticClass:"link_header",attrs:{to:"/login"}},[e._v("Login")])],1)])])],1)},_=[],g=a("5530"),f=a("2f62"),y={data:function(){return{}},methods:Object(g["a"])(Object(g["a"])({},Object(f["b"])(["doLogout"])),{},{logOut:function(){this.doLogout(),this.$router.push("/login")}}),computed:Object(g["a"])({},Object(f["c"])(["getUser"]))},b=y,C=(a("1722"),Object(n["a"])(b,v,_,!1,null,"5a499055",null)),w=C.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("img",{staticClass:"image_vehicle",attrs:{src:this.picture,alt:"Foto Veículo"}}),a("div",{staticClass:"texts_vehicle"},[a("div",{staticClass:"title_and_price"},[a("h4",{staticClass:"title_vehicle"},[e._v(e._s(this.brand)+" "+e._s(this.model))]),a("p",{staticClass:"price_vehicle"},[e._v("R$ "+e._s(this.price))])]),a("p",{staticClass:"engine_vehicle"},[e._v(e._s(e.formatEngine())+e._s(e.formatCapacity()))]),a("p",{staticClass:"year_vehicle"},[e._v("Ano: "+e._s(this.year))]),a("p",{staticClass:"data_vehicle"},[e._v("Anunciado em: "+e._s(e.convertData()))]),"carros"===this.vehicle?a("router-link",{attrs:{to:{name:"showCar",params:{id:this.id}}}},[a("button",{staticClass:"button_details"},[e._v("VER DETALHES")])]):"motocicletas"===this.vehicle?a("router-link",{attrs:{to:{name:"showMotorcycle",params:{id:this.id},query:{vehicle:this.vehicle}}}},[a("button",{staticClass:"button_details"},[e._v("VER DETALHES")])]):e._e()],1)])},x=[],k=(a("a9e3"),a("99af"),a("d3b7"),a("25f0"),{props:{vehicle:String,id:Number,brand:String,model:String,category:String,year:Number,price:Number,engine:Number,capacity:Number,datas:String,picture:String},methods:{convertData:function(){var e=this.datas.substr(11,2)-3,t=this.datas.substr(8,2);return e<0&&(e=21+Number(this.datas.substr(11,2)),t-=1,t<10&&(t="0".concat(t))),"".concat(t,"/").concat(this.datas.substr(5,2),"/").concat(this.datas.substr(0,4)," às ").concat(e,"h").concat(this.datas.substr(14,2))},formatEngine:function(){if(this.engine){var e=this.engine.toString();return 1===e.length?"Motor: ".concat(e,".0"):"Motor: "+e}},formatCapacity:function(){if(this.capacity)return this.capacity+" cilindradas"}}}),I=k,O=(a("a00f"),Object(n["a"])(I,E,x,!1,null,"ab7c19f2",null)),S=O.exports,j={components:{"header-app":w,"card-vehicle":S},data:function(){return{vehicles:[],cars:[],motorcycles:[],typeVehicle:localStorage.getItem("typeVehicle")||"cars"}},mounted:function(){var e=this;this.$http.get("https://adonisjs-vehicles.herokuapp.com/cars/").then((function(t){e.cars=t.data})),this.$http.get("https://adonisjs-vehicles.herokuapp.com/motorcycles/").then((function(t){e.motorcycles=t.body}));var t=document.getElementById("select_vehicels");t.addEventListener("change",(function(){e.typeVehicle=t.options[t.selectedIndex].value,console.log(e.typeVehicle),localStorage.setItem("typeVehicle","".concat(e.typeVehicle))})),t.value=this.typeVehicle,console.log(this.typeVehicle)}},M=j,$=(a("ddf1"),Object(n["a"])(M,p,h,!1,null,"07af6b9f",null)),N=$.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("header-app"),a("div",{staticClass:"box"},[a("form",{staticClass:"signin",on:{submit:function(t){return t.preventDefault(),e.login()}}},[a("h2",{staticClass:"title"},[e._v("Entre com suas credenciais")]),a("label",{staticClass:"login_label",attrs:{for:"email_in"}},[e._v("Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.email,expression:"loginForm.email"}],staticClass:"login_input",attrs:{required:"",id:"email_in",type:"email"},domProps:{value:e.loginForm.email},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"email",t.target.value)}}}),a("label",{staticClass:"login_label",attrs:{for:"pass_in"}},[e._v("Senha ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.password,expression:"loginForm.password"}],staticClass:"login_input",attrs:{required:"",id:"pass_in",type:"password"},domProps:{value:e.loginForm.password},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"password",t.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:e.errMessageIn,expression:"errMessageIn"}],staticClass:"error_message"},[e._v(e._s(e.errMessageIn))]),a("button",{staticClass:"login_button",attrs:{type:"submit"}},[e._v("Entre")])]),a("form",{staticClass:"signup",on:{submit:function(t){return t.preventDefault(),e.signup()}}},[a("h2",{staticClass:"title"},[e._v("Cadastre-se, é rápido!")]),a("label",{staticClass:"login_label",attrs:{for:"username_in"}},[e._v("Username ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.registerForm.username,expression:"registerForm.username"}],staticClass:"login_input",attrs:{required:"",id:"username_up",type:"text"},domProps:{value:e.registerForm.username},on:{input:function(t){t.target.composing||e.$set(e.registerForm,"username",t.target.value)}}}),a("label",{staticClass:"login_label",attrs:{for:"email_up"}},[e._v("Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.registerForm.email,expression:"registerForm.email"}],staticClass:"login_input",attrs:{required:"",id:"email_up",type:"email"},domProps:{value:e.registerForm.email},on:{input:function(t){t.target.composing||e.$set(e.registerForm,"email",t.target.value)}}}),a("div",{staticClass:"passwords"},[a("label",{staticClass:"login_label",attrs:{for:"pass_up"}},[e._v("Crie sua senha ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.registerForm.password,expression:"registerForm.password"}],staticClass:"login_input",attrs:{required:"",id:"pass_up",type:"password"},domProps:{value:e.registerForm.password},on:{input:function(t){t.target.composing||e.$set(e.registerForm,"password",t.target.value)}}}),a("label",{staticClass:"login_label",attrs:{for:"pass_up_confirm"}},[e._v("Confirme sua senha ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.registerForm.passwordConfirm,expression:"registerForm.passwordConfirm"}],staticClass:"login_input",attrs:{required:"",id:"pass_up_confirm",type:"password"},domProps:{value:e.registerForm.passwordConfirm},on:{input:function(t){t.target.composing||e.$set(e.registerForm,"passwordConfirm",t.target.value)}}}),a("p",{directives:[{name:"show",rawName:"v-show",value:e.errMessageUp,expression:"errMessageUp"}],staticClass:"error_message"},[e._v(e._s(e.errMessageUp))]),a("button",{staticClass:"login_button",attrs:{type:"submit"}},[e._v("Cadastre-se")])])])])],1)},V=[],B=a("1da1"),A=(a("96cf"),{data:function(){return{loginForm:{email:"",password:""},registerForm:{username:"",email:"",password:"",passwordConfirm:""},errMessageIn:"",errMessageUp:""}},components:{"header-app":w},methods:Object(g["a"])(Object(g["a"])({},Object(f["b"])(["doLogin","doSignup","doLogout"])),{},{login:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.doLogin(e.loginForm).then((function(t){console.log(t),e.errMessageIn="",e.$router.push({name:"home"})})).catch((function(t){401==t.message?e.errMessageIn="Credenciais incorretas":500==t.message?e.errMessageIn="Tivemos um problema no servidor, contate o administrador":e.errMessageIn="Ouve um problema"}));case 1:case"end":return t.stop()}}),t)})))()},signup:function(){var e=this;return Object(B["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.doSignup(e.registerForm).then((function(){e.errMessageUp="",e.$router.push({name:"home"})})).catch((function(t){console.error(t),500==t.message&&(e.errMessageUp="Usuario já está cadastrado")}));case 2:case"end":return t.stop()}}),t)})))()}})}),U=A,L=(a("a006"),Object(n["a"])(U,F,V,!1,null,"b12a9da0",null)),T=L.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("header-app"),a("div",{staticClass:"form_advertise"},["cars"===e.typeVehicle?a("div",{staticClass:"title_carro"},[a("h1",{staticClass:"title"},[e._v("Vamos anunciar seu carro")]),a("h3",{staticClass:"subtitle"},[e._v("Conte mais detalhes do seu carro")])]):"motorcycles"===e.typeVehicle?a("div",{staticClass:"title_motorcycle"},[a("h1",{staticClass:"title"},[e._v("Vamos anunciar sua motocicleta")]),a("h3",{staticClass:"subtitle"},[e._v("Conte mais detalhes da sua motocicleta")])]):e._e(),a("label",{staticClass:"label_switch",attrs:{for:"select_vehicle"}},[e._v("Qual veículo quer anunciar? ")]),e._m(0),"cars"===e.typeVehicle?a("form",{staticClass:"form_advertise_car",on:{submit:function(t){return t.preventDefault(),e.advertiseCar()}}},[a("label",{staticClass:"label_advertise",attrs:{for:"brand_car"}},[e._v("Marca: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"brand_car",type:"text",placeholder:"Ex: ford"}}),a("label",{staticClass:"label_advertise",attrs:{for:"model_car"}},[e._v("Modelo: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"model_car",type:"text",placeholder:"Ex: ka"}}),a("label",{staticClass:"label_advertise",attrs:{for:"description_car"}},[e._v("Descrição: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"description_car",type:"text"}}),a("label",{staticClass:"label_advertise",attrs:{for:"engine_car"}},[e._v("Motor: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"engine_car",type:"tel",placeholder:"Ex: 1.0"}}),a("label",{staticClass:"label_advertise",attrs:{for:"year_car"}},[e._v("Ano: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"year_car",type:"number",placeholder:"Ex: 2015"}}),a("label",{staticClass:"label_advertise",attrs:{for:"price_car"}},[e._v("Preço: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"price_car",type:"number",placeholder:"Ex: 28000"}}),a("label",{staticClass:"label_advertise",attrs:{for:"picture_car"}},[e._v("Nos mande uma foto: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"picture_car",type:"text",placeholder:"Ex: https://cdn.salaodocarro.com.br/_upload/carros/2019/02/06/kia-picanto-2013-marrom-177595-0.jpg"}}),a("button",{staticClass:"button_advertise",attrs:{type:"submit"}},[e._v("Anunciar")])]):"motorcycles"===e.typeVehicle?a("form",{staticClass:"form_advertise_motorcycle",on:{submit:function(t){return t.preventDefault(),e.advertiseMotorcycle()}}},[a("label",{staticClass:"label_advertise",attrs:{for:"brand_motorcycle"}},[e._v("Marca: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"brand_motorcycle",type:"text",placeholder:"Ex: honda"}}),a("label",{staticClass:"label_advertise",attrs:{for:"model_motorcycle"}},[e._v("Modelo: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"model_motorcycle",type:"text",placeholder:"Ex: cb1000"}}),a("label",{staticClass:"label_advertise",attrs:{for:"description_motorcycle"}},[e._v("Descrição: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"description_motorcycle",type:"text"}}),a("label",{staticClass:"label_advertise",attrs:{for:"category_motorcycle"}},[e._v("Categoria: ")]),e._m(1),a("label",{staticClass:"label_advertise",attrs:{for:"capacity_motorcycle"}},[e._v("Cilindrada: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"capacity_motorcycle",type:"number",placeholder:"Ex: 1000"}}),a("label",{staticClass:"label_advertise",attrs:{for:"year_motorcycle"}},[e._v("Ano: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"year_motorcycle",type:"number",placeholder:"Ex: 2015"}}),a("label",{staticClass:"label_advertise",attrs:{for:"price_motorcycle"}},[e._v("Preço: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"price_motorcycle",type:"number",placeholder:"Ex: 35000"}}),a("label",{staticClass:"label_advertise",attrs:{for:"picture_motorcycle"}},[e._v("Nos mande uma foto: ")]),a("input",{staticClass:"input_advertise",attrs:{id:"picture_motorcycle",type:"text",placeholder:"Ex: https://http2.mlstatic.com/D_NQ_NP_820250-MLB43119116032_082020-O.jpg"}}),a("button",{staticClass:"button_advertise",attrs:{type:"submit"}},[e._v("Anunciar")])]):e._e()])],1)},R=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("select",{staticClass:"switch_vehicles",attrs:{id:"select_vehicle"}},[a("option",{attrs:{value:"cars"}},[e._v("Carro")]),a("option",{attrs:{value:"motorcycles"}},[e._v("Motocicleta")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("select",{staticClass:"switch_vehicles",attrs:{id:"category_motorcycle"}},[a("option",{attrs:{value:"naked"}},[e._v("Naked")]),a("option",{attrs:{value:"sport"}},[e._v("Carenada")]),a("option",{attrs:{value:"semi_naked"}},[e._v("Semi-carenada")]),a("option",{attrs:{value:"custom"}},[e._v("Custom")])])}],q={data:function(){return{typeVehicle:localStorage.getItem("typeVehicle"),categoryMotorcycle:"naked",token:localStorage.getItem("token")}},components:{"header-app":w},mounted:function(){var e=this,t=document.getElementById("select_vehicle");t.addEventListener("change",(function(){e.typeVehicle=t.options[t.selectedIndex].value,console.log(e.typeVehicle)})),t.value=this.typeVehicle},methods:{advertiseCar:function(){var e=this;console.log("anunciar carro");var t=document.getElementById("brand_car").value,a=document.getElementById("model_car").value,s=document.getElementById("description_car").value,r=document.getElementById("engine_car").value,o=document.getElementById("year_car").value,i=document.getElementById("price_car").value,c=document.getElementById("picture_car").value,n={brand:t,model:a,description:s,engine:Number(r),year:Number(o),price:Number(i),picture:c};console.log(n),this.$http.post("https://adonisjs-vehicles.herokuapp.com/cars/",n).then((function(){console.log("Carro cadastrado com sucesso. "),e.$router.push({name:"home"}),localStorage.setItem("typeVehicle","cars")}))},advertiseMotorcycle:function(){var e=this;console.log("anunciar moto");var t=document.getElementById("brand_motorcycle").value,a=document.getElementById("model_motorcycle").value,s=document.getElementById("description_motorcycle").value,r=document.getElementById("capacity_motorcycle").value,o=document.getElementById("year_motorcycle").value,i=document.getElementById("price_motorcycle").value,c=document.getElementById("picture_motorcycle").value,n=document.getElementById("category_motorcycle");n.addEventListener("change",(function(){e.categoryMotorcycle=n.options[n.selectedIndex].value,console.log(e.categoryMotorcycle)}));var l={brand:t,model:a,description:s,category:this.categoryMotorcycle,capacity:Number(r),year:Number(o),price:Number(i),picture:c};console.log(l),this.$http.post("https://adonisjs-vehicles.herokuapp.com/motorcycles/",l).then((function(){console.log("Carro cadastrado com sucesso. "),e.$router.push({name:"home"}),localStorage.setItem("typeVehicle","motorcycles")}))}}},D=q,z=(a("2486"),Object(n["a"])(D,P,R,!1,null,"6166044a",null)),G=z.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("header-app"),a("div",{staticClass:"car"},[a("div",{staticClass:"title_price"},[a("h1",{staticClass:"title_vehicle"},[e._v(e._s(this.car.brand)+" "+e._s(this.car.model))]),a("h1",{staticClass:"price_vehicle"},[e._v("R$ "+e._s(this.car.price))])]),a("img",{staticClass:"picture",attrs:{src:this.car.picture,alt:"foto do carro"}}),a("div",{staticClass:"info"},[a("h3",{staticClass:"title_description"},[e._v("Descrição:")]),a("p",{staticClass:"description"},[e._v(e._s(this.car.description||"O anunciante não deu descrição do carro :("))]),a("h3",{staticClass:"title_info"},[e._v("Informações Gerais: ")]),a("ul",{staticClass:"metrics"},[a("li",{staticClass:"item_metrics"},[e._v(e._s(e.formatEngine()))]),a("li",{staticClass:"item_metrics"},[e._v("Ano: "+e._s(this.car.year))]),a("li",{staticClass:"item_metrics"},[e._v("Quilometragem: "+e._s(e.calcMileage()))])])])])],1)},H=[],J={components:{"header-app":w},data:function(){return{id:this.$route.params.id,car:[]}},mounted:function(){var e=this,t=localStorage.getItem("token");this.$http.get("https://adonisjs-vehicles.herokuapp.com/cars/".concat(this.id),{headers:{Authorization:t}}).then((function(t){return e.car=t.body}))},methods:{formatEngine:function(){if(this.car.engine){var e=this.car.engine.toString();return 1===e.length?"Motor: ".concat(e,".0"):"Motor: "+e}},calcMileage:function(){return this.car.mileage?"".concat(this.car.mileage," km"):"O anunciante não nos contou a quilometragem do carro :("}}},K=J,W=(a("3245"),Object(n["a"])(K,Q,H,!1,null,"039f509e",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("header-app"),a("div",{staticClass:"motorcycle"},[a("div",{staticClass:"title_price"},[a("h1",{staticClass:"title_vehicle"},[e._v(e._s(this.motorcycle.brand)+" "+e._s(this.motorcycle.model))]),a("h1",{staticClass:"price_vehicle"},[e._v("R$ "+e._s(this.motorcycle.price))])]),a("img",{staticClass:"picture",attrs:{src:this.motorcycle.picture,alt:"foto da motocicleta"}}),a("div",{staticClass:"info"},[a("h3",{staticClass:"title_description"},[e._v("Descrição:")]),a("p",{staticClass:"description"},[e._v(e._s(this.motorcycle.description||"O anunciante não deu descrição da motocicleta :("))]),a("h3",{staticClass:"title_info"},[e._v("Informações Gerais: ")]),a("ul",{staticClass:"metrics"},[a("li",{staticClass:"item_metrics"},[e._v(e._s(e.formatCapacity()))]),a("li",{staticClass:"item_metrics"},[e._v("Ano: "+e._s(this.motorcycle.year))]),a("li",{staticClass:"item_metrics"},[e._v("Quilometragem: "+e._s(e.calcMileage()))])])])])],1)},Z=[],ee={components:{"header-app":w},data:function(){return{id:this.$route.params.id,motorcycle:[]}},mounted:function(){var e=this,t=localStorage.getItem("token");this.$http.get("https://adonisjs-vehicles.herokuapp.com/motorcycles/".concat(this.id),{headers:{Authorization:t}}).then((function(t){return e.motorcycle=t.body}))},methods:{formatCapacity:function(){return this.motorcycle.capacity+" cilindradas"},calcMileage:function(){return this.motorcycle.mileage?"".concat(this.motorcycle.mileage," km"):"O anunciante não nos contou a quilometragem da motocicleta :("}}},te=ee,ae=(a("9a0c"),Object(n["a"])(te,Y,Z,!1,null,"2b558faa",null)),se=ae.exports,re=(a("4ee2"),a("fad1"),a("bc3a")),oe=a.n(re);s["a"].use(f["a"]);var ie=localStorage.getItem("username"),ce=localStorage.getItem("token"),ne={token:ce,username:ie},le={LOGIN:function(e,t){e.token=t},LOGOUT:function(e){e.token="",e.username=""},SETUSER:function(e,t){e.username=t}},ue={getToken:function(e){return e.token},getUser:function(e){return e.username}},me={doLogin:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t,a){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=t.getters,e.next=3,oe.a.post("https://adonisjs-vehicles.herokuapp.com/login",{email:a.email,password:a.password}).then((function(e){r("LOGIN",e.data[0].token),localStorage.setItem("token",o.getToken),s["a"].http.headers.common.Authorization="Bearer ".concat(o.getToken),oe.a.defaults.headers.common["Authorization"]="Bearer ".concat(o.getToken)})).catch((function(e){throw new Error(e.response.status)}));case 3:return e.next=5,oe.a.get("https://adonisjs-vehicles.herokuapp.com/load_session").then((function(e){r("SETUSER",e.data.username),localStorage.setItem("username",o.getUser)})).catch((function(e){throw new Error(e.response.status)}));case 5:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}(),doSignup:function(){var e=Object(B["a"])(regeneratorRuntime.mark((function e(t,a){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,o=t.getters,a.password==a.passwordConfirm){e.next=3;break}throw new Error("Senhas diferentes");case 3:return e.next=5,oe.a.post("https://adonisjs-vehicles.herokuapp.com/register",{username:a.username,email:a.email,password:a.password}).then((function(e){r("LOGIN",e.data[0].token),localStorage.setItem("token",o.getToken),s["a"].http.headers.common.Authorization="Bearer ".concat(o.getToken)})).catch((function(e){throw console.log(e),new Error(e.response.status)}));case 5:case"end":return e.stop()}}),e)})));function t(t,a){return e.apply(this,arguments)}return t}(),doLogout:function(e){var t=e.commit;console.log("chegou aqui"),localStorage.removeItem("username"),localStorage.removeItem("token"),s["a"].http.headers.common.Authorization="",oe.a.defaults.headers.common["Authorization"]="",t("LOGIN",""),t("SETUSER","")}},de=new f["a"].Store({state:ne,mutations:le,getters:ue,actions:me});s["a"].config.productionTip=!1,s["a"].use(m["a"]),s["a"].use(d["a"]),s["a"].http.headers.common.Authorization="Bearer ".concat(de.getters.getToken);var pe=[{path:"/",name:"home",component:N},{path:"/login",name:"login",component:T},{path:"/anunciar",component:G},{path:"/carros/:id",name:"showCar",component:X},{path:"/veiculos/:id",name:"showMotorcycle",component:se}],he=new m["a"]({routes:pe}),ve=!1;he.beforeEach((function(e,t,a){ve=null!=localStorage.getItem("token"),"login"===e.name||ve?a():a({name:"login"})})),new s["a"]({router:he,render:function(e){return e(u)},store:de}).$mount("#app")},"6df9":function(e,t,a){},"9a0c":function(e,t,a){"use strict";a("6df9")},a006:function(e,t,a){"use strict";a("0185")},a00f:function(e,t,a){"use strict";a("d538")},c7c0:function(e,t,a){},d538:function(e,t,a){},ddf1:function(e,t,a){"use strict";a("02f3")},fad1:function(e,t,a){}});
//# sourceMappingURL=app.eee64f9f.js.map