webpackJsonp([16],{"+cgv":function(t,e){},"0CFU":function(t,e,n){"use strict";(function(t){var i=n("Gu7T"),s=n.n(i),a=n("Dd8w"),r=n.n(a),o=n("NYxO");e.a={name:"selectPicture",props:{},data:function(){return{visible:!0,preViewVisible:!1,activeTab:"upload",freePictureList:[],uploadFileList:[],selectFileList:[],preViewURL:"",keyWord:"",page:1,loading:!1,error:!1,nothing:!1,more_loading:!1,more_error:!1,more_nothing:!1,lock:!1}},watch:{visible:function(t){t||this.$emit("close",!1)}},methods:r()({},Object(o.b)("writer",["get_picture_data"]),{handleClick:function(e){var n=this;"select"===this.activeTab?this.$nextTick(function(){t(".imgWrapper").on("scroll",n.onScroll)}):t(".imgWrapper").off("scroll",this.onScroll)},uploadBefore:function(t){var e="image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type,n=t.size/1024/1024<5;return e?n||this.$message.error("上传图片大小不能超过 5MB"):this.$message.error("目前只支持 jpg / png / gif 的图片格式"),e&&n},onSuccess:function(t,e,n){this.uploadFileList=n},onError:function(t,e,n){console.log("上传图片失败",t),this.$message.error("上传失败，请重新尝试!")},onRemove:function(t,e){this.uploadFileList=e},onPreview:function(t){this.preViewURL=t.url,this.preViewVisible=!0},selectComplete:function(){var t=[],e=!0;"upload"===this.activeTab?this.uploadFileList.forEach(function(n,i){n.response?t.push(n.response.data):e=!1}):"select"===this.activeTab&&(t=this.selectFileList),e||this.$message.warning("部分图片没有上传成功，请重新尝试"),this.$emit("selectComplete",t),this.visible=!1},slelectCancle:function(){this.visible=!1},get_picture:function(){var t=this;this.freePictureList=[],this.nothing=!1,this.error=!1,this.more_loading=!1,this.more_nothing=!1,this.more_error=!1,this.loading=!0;var e={key:this.keyWord,page:1};this.get_picture_data(e).then(function(e){e.data?(t.freePictureList=e.data,t.page=2):(t.freePictureList=[],t.nothing=!0),t.loading=!1}).catch(function(e){console.log(e),t.itemJson=[],t.loading=!1,t.error=!0})},get_picture_more:function(){var t=this;this.more_nothing=!1,this.more_error=!1,this.more_loading=!0;var e={key:this.keyWord,page:this.page};this.get_picture_data(e).then(function(e){if(console.log(e),e.data){var n;(n=t.freePictureList).push.apply(n,s()(e.data)),t.page++}else t.more_nothing=!0;t.more_loading=!1,t.lock=!1}).catch(function(e){t.more_error=!0,t.more_loading=!1,t.lock=!1,console.log(e)})},onScroll:function(){var e=this,n=t(".imgWrapper"),i=t(".img-list"),s=void 0;s&&clearTimeout(s),s=setTimeout(function(){var t=n.scrollTop(),s=n.height(),a=i.height(),r=t+s>=a,o=e.freePictureList.length>0&&!e.more_loading&&!e.more_error&&!e.more_nothing&&e.page>=2;r&&o&&!e.lock&&(e.get_picture_more(),e.lock=!0)},100)}})}}).call(e,n("7t+N"))},"3f40":function(t,e){},"4qOc":function(t,e){},"6eFH":function(t,e){},"8ryJ":function(t,e){},"991W":function(t,e){},"9R5P":function(t,e){},J373:function(t,e){},JD2D:function(t,e){},MqSu:function(t,e){},NHnr:function(t,e,n){"use strict";function i(t){n("dsrl")}function s(t){n("a6WA")}function a(t){n("vtoC")}function r(t){n("pfyg")}function o(t){n("MqSu")}function l(t){n("ioPr")}function c(t){n("vR5L")}function u(t){n("JD2D")}function d(t){n("8ryJ")}function p(t){n("6eFH")}function f(t){n("xwrs")}Object.defineProperty(e,"__esModule",{value:!0});var m=(n("j1ja"),n("7+uW")),v={name:"app",methods:{init_Progress:function(){var t=this;this.$router.beforeEach(function(e,n,i){t.$Progress.start(),i()}),this.$router.afterEach(function(e,n){t.$Progress.finish()})}},created:function(){this.$Progress.start(),this.init_Progress()},mounted:function(){this.$Progress.finish()}},h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("vue-progress-bar")],1)},_=[],g={render:h,staticRenderFns:_},k=g,b=n("VU/8"),w=i,x=b(v,k,!1,w,null,null),y=x.exports,C=n("/ocq"),A=function(){return n.e(0).then(n.bind(null,"QrVH"))},I=function(){return n.e(4).then(n.bind(null,"lMAp"))},S=function(){return n.e(2).then(n.bind(null,"Fw7Z"))},T=function(){return n.e(13).then(n.bind(null,"3B3s"))},L=function(){return n.e(5).then(n.bind(null,"XlR/"))},V=function(){return n.e(1).then(n.bind(null,"Dx4q"))},E=function(){return n.e(6).then(n.bind(null,"uiTF"))},P=function(){return n.e(10).then(n.bind(null,"C8Nq"))},R=function(){return n.e(8).then(n.bind(null,"aKLZ"))},U=function(){return n.e(14).then(n.bind(null,"9Nqj"))},D=function(){return n.e(7).then(n.bind(null,"KVz7"))},F=function(){return n.e(3).then(n.bind(null,"S+ON"))},$=function(){return n.e(11).then(n.bind(null,"JcqC"))},M=function(){return n.e(12).then(n.bind(null,"vHZA"))},O=function(){return n.e(9).then(n.bind(null,"AEg7"))};m.default.use(C.a);var B=new C.a({scrollBehavior:function(t,e,n){return n?(t.meta.position=n,n):{x:0,y:0}},routes:[{path:"",redirect:"/index"},{name:"login",path:"/login",component:A},{name:"preview",path:"/preview_article",component:I,meta:{login:!0}},{name:"index",path:"/index",redirect:"/index/home",component:S,meta:{login:!0},children:[{name:"home",path:"home",component:T},{name:"comment",path:"comment",component:P,redirect:"comment/newest",children:[{name:"newest",path:"newest",component:$},{name:"articles",path:"articles",component:M}]},{name:"material",path:"material",component:R,redirect:"material/pic",children:[{name:"pic",path:"pic",component:O}]},{name:"search",path:"search",component:L},{name:"publish",path:"publish",component:V},{name:"article",path:"article",component:E,redirect:"article/own",children:[{name:"own",path:"own",component:F}]},{name:"count",path:"count",component:U},{name:"setting",path:"setting",component:D}]}]}),j=n("Xxa5"),J=n.n(j),q=n("//Fk"),Q=n.n(q),W=n("exGp"),G=n.n(W),N=n("NYxO"),z=n("mtWM"),Z=n.n(z),Y=n("mw3O"),X=n.n(Y),H=this;m.default.prototype.$http=Z.a,Z.a.defaults.baseURL="http://api.toutiaojk.com/e/extend/jkh/";var K={list:"List.php",edit:"Edit.php",uploadFile:"upload_file.php",login:"ecmsadmin.php",task:"kwdata.php",picture:"picsearch"},tt=function(){var t=G()(J.a.mark(function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"POST",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=void 0,n=n.toUpperCase(),i=K[i],"GET"!==n){t.next=8;break}return t.next=6,Z.a.get(i,{params:s}).then(function(t){e=t.data});case 6:t.next=11;break;case 8:if("POST"!==n){t.next=11;break}return t.next=11,Z.a.post(i,X.a.stringify(s)).then(function(t){e=t.data});case 11:return t.abrupt("return",e);case 12:case"end":return t.stop()}},t,H)}));return function(){return t.apply(this,arguments)}}(),et=n("lbHh"),nt=n.n(et),it={namespaced:!0,state:{task:{tags:[],sentences:[],articles:[],selected:""}},getters:{task:function(t){return t.task},selected:function(t){return t.task.selected}},mutations:{set_task:function(t,e){t.task=e},set_selected:function(t,e){t.task.selected=e}},actions:{get_articleList_data:function(t,e){var n=this,i=t.rootState,s=e.type,a=e.page;return G()(J.a.mark(function t(){var e,r;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={userid:i.user.userid},e.type=s,e.page=a,t.next=5,tt("GET","list",e);case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}},t,n)}))()},get_article_data:function(t,e){var n=this,i=t.rootState;return G()(J.a.mark(function t(){var s,a;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={userid:i.user.userid,id:e,type:"edit"},t.next=3,tt("GET","list",s);case 3:return a=t.sent,t.abrupt("return",a);case 5:case"end":return t.stop()}},t,n)}))()},post_article_data:function(t,e){var n=this,i=t.rootState;return G()(J.a.mark(function t(){var s;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.userid=i.user.userid,t.next=3,tt("POST","edit",e);case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}},t,n)}))()},get_task_data:function(t){var e=this,n=t.rootState;return G()(J.a.mark(function t(){var i,s;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={userid:n.user.userid,type:"list"},t.next=3,tt("POST","task",i);case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}},t,e)}))()},post_task_data:function(t,e){var n=this,i=t.rootState;return G()(J.a.mark(function t(){var s;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.userid=i.user.userid,t.next=3,tt("POST","task",e);case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}},t,n)}))()},get_picture_data:function(t,e){var n=this;t.rootState;return G()(J.a.mark(function t(){var i;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt("GET","picture",e);case 2:return i=t.sent,t.abrupt("return",i);case 4:case"end":return t.stop()}},t,n)}))()}}};m.default.use(N.a);var st={user:"",token:""},at={user:function(t){return t.user},token:function(t){return t.token?t.token:nt.a.get("Token")?nt.a.get("Token"):""}},rt={set_user:function(t,e){t.user=e},set_token:function(t,e){t.token=e,nt.a.set("Token",e,{expires:7})},remove_token:function(t){t.user="",t.token="",nt.a.remove("Token")}},ot={get_login_data:function(t,e){var n=this,i=t.commit;return G()(J.a.mark(function t(){return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Q.a(function(t,n){tt("POST","login",e).then(function(e){e.data&&e.data.token?(i("set_token",e.data.token),t()):n(new Error("nothing data"))}).catch(function(t){n(t)})}));case 1:case"end":return t.stop()}},t,n)}))()},get_user_data:function(t,e){var n=this,i=t.getters,s=t.commit;return G()(J.a.mark(function t(){var e;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={enews:"check",token:i.token},t.abrupt("return",new Q.a(function(t,n){tt("POST","login",e).then(function(e){e.data&&e.data.userid?(s("set_user",e.data),t()):(s("remove_token"),n(new Error("nothing data")))}).catch(function(t){s("remove_token"),n(t)})}));case 2:case"end":return t.stop()}},t,n)}))()}},lt=new N.a.Store({state:st,getters:at,mutations:rt,actions:ot,modules:{writer:it}}),ct=n("zL8q"),ut=n.n(ct),dt=(n("q8zI"),n("/7iZ")),pt=n.n(dt),ft=n("7QTg"),mt=n.n(ft),vt=(n("mgS3"),n("llnD"),n("zYko")),ht=n.n(vt),_t=n("XLwt"),gt=n.n(_t),kt=(n("991W"),n("coeT"),n("J373"),n("9R5P"),n("Dd8w")),bt=n.n(kt),wt={computed:bt()({},Object(N.c)(["user"])),methods:bt()({},Object(N.d)(["set_user","set_token","remove_token"]),{handleCommand:function(t){"exit"===t&&(this.remove_token(),this.$router.push("/login"))}})},xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[n("div",{staticClass:"header_wrap"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("头条号")]),t._v(" "),n("div",{staticClass:"right"},[n("router-link",{attrs:{to:"/index/publish"}},[n("el-button",{staticClass:"publish_btn",attrs:{type:"primary"}},[t._v("发表")])],1),t._v(" "),n("el-dropdown",{staticClass:"user",attrs:{"menu-align":"start"},on:{command:t.handleCommand}},[n("div",{staticClass:"userinfo"},[n("img",{attrs:{src:t.user.headimgurl,alt:""}}),t._v(" "),n("span",{staticClass:"el-dropdown-link"},[t._v(t._s(t.user.nickname))])]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"exit"}},[t._v("退出")])],1)],1)],1)],1)])},yt=[],Ct={render:xt,staticRenderFns:yt},At=Ct,It=n("VU/8"),St=s,Tt=It(wt,At,!1,St,null,null),Lt=Tt.exports,Vt={},Et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},Pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"footer_wrap"},[n("a",{attrs:{href:"",title:""}},[t._v("关于健康头条")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{attrs:{href:"",title:""}},[t._v("用户协议")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{attrs:{href:"",title:""}},[t._v("运营规范")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{attrs:{href:"",title:""}},[t._v("侵权投诉")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{attrs:{href:"",title:""}},[t._v("联系我们")])])])}],Rt={render:Et,staticRenderFns:Pt},Ut=Rt,Dt=n("VU/8"),Ft=a,$t=Dt(Vt,Ut,!1,Ft,null,null),Mt=$t.exports,Ot={data:function(){return{activeName:"/index/home"}},computed:{menuActive:function(){for(var t=this.$route.path,e=["/index/home","/index/search","/index/publish","/index/article","/index/comment","/index/material","/index/count","/index/setting"],n=0;n<e.length;n++)if(t.includes(e[n]))return e[n];return""}},watch:{$route:function(t){this.activeName=this.menuActive}},created:function(){this.activeName=this.menuActive}},Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("el-menu",{attrs:{"default-active":t.activeName,router:!0,"default-openeds":["writer","manage"]}},[n("el-menu-item",{attrs:{index:"/index/home"}},[n("i",{staticClass:"el-icon-fa-home el-icon-fa-lg"}),t._v("主页")]),t._v(" "),n("el-submenu",{attrs:{index:"writer"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-fa-pencil el-icon-fa-lg"}),t._v("写作")]),t._v(" "),n("el-menu-item",{attrs:{index:"/index/search"}},[t._v("素材搜索")]),t._v(" "),n("el-menu-item",{attrs:{index:"/index/publish"}},[t._v("发表作品")]),t._v(" "),n("el-menu-item",{attrs:{index:"/index/article"}},[t._v("我的作品")])],2),t._v(" "),n("el-submenu",{attrs:{index:"manage"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-fa-cube el-icon-fa-lg"}),t._v("管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"/index/comment"}},[t._v("评论管理")]),t._v(" "),n("el-menu-item",{attrs:{index:"/index/material"}},[t._v("素材管理")])],2),t._v(" "),n("el-menu-item",{attrs:{index:"/index/count"}},[n("i",{staticClass:"el-icon-fa-bar-chart el-icon-fa-lg"}),t._v("统计")]),t._v(" "),n("el-menu-item",{attrs:{index:"/index/setting"}},[n("i",{staticClass:"el-icon-fa-cog el-icon-fa-lg"}),t._v("设置")])],1)],1)},jt=[],Jt={render:Bt,staticRenderFns:jt},qt=Jt,Qt=n("VU/8"),Wt=r,Gt=Qt(Ot,qt,!1,Wt,null,null),Nt=Gt.exports,zt={data:function(){return{taskList:[],taskSelect:"",form:{title:"",describe:""},tagInputVal:"",tagInput:!1,sentenceInputVal:"",sentenceInput:!1,taskVisible:!1,loading:!1}},computed:bt()({},Object(N.c)("writer",["task"])),watch:{taskVisible:function(t){t&&this.get_taskList()}},methods:bt()({},Object(N.d)("writer",["set_task","set_selected"]),Object(N.b)("writer",["get_task_data","post_task_data"]),{get_taskList:function(){var t=this;this.get_task_data().then(function(e){console.log(e),e&&e.data?t.taskList=e.data:t.taskList=[]})},post_task:function(t){var e=this;if(this.form.title){this.loading=!0;var n={type:t,title:this.form.title,describe:this.form.describe,kword:this.task.tags,gzword:this.task.sentences,ctword:this.task.articles};"edit"===t&&this.taskSelect&&(n.id=this.taskSelect),this.post_task_data(n).then(function(n){if(console.log(n),n.data){if("new"===t)e.taskList.unshift(n.data),e.taskSelect=n.data.id;else if("edit"===t){var i=e.taskList.findIndex(function(t){return t.id===n.data.id});e.taskList[i]=n.data}e.$message.success("操作成功")}else e.$message.error("操作失败，请重新尝试");e.loading=!1}).catch(function(t){console.log(t),e.loading=!1,e.$message.error("操作失败，请重新尝试")})}else this.$message.error("标题不能为空")},load_task:function(t){var e=this,n=this.taskList.findIndex(function(t){return t.id===e.taskSelect});if(n>-1){var i=this.taskList[n];this.form.title=i.title,i.describe?this.form.describe=i.describe:this.form.describe="",i.kword?this.task.tags=i.kword:this.task.tags=[],i.gzword?this.task.sentences=i.gzword:this.task.sentences=[],i.ctword?this.task.articles=i.ctword:this.task.articles=[],this.set_task(this.task)}},reset_task:function(){this.form.title="",this.form.describe="",this.task.tags=[],this.task.sentences=[],this.task.articles=[],this.taskSelect="",this.set_task(this.task)},delete_task:function(t){var e=this;console.log("delete",t),this.$confirm("此操作将永久删除该任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.loading=!0;var n={type:"del",id:t.id};e.post_task_data(n).then(function(n){var i=e.taskList.findIndex(function(e){return e.id===t.id});e.taskList.splice(i,1),e.taskSelect===t.id&&(e.taskSelect="",e.reset_task()),e.loading=!1,e.$message.success("删除成功")}).catch(function(){e.loading=!1,e.$message.error("删除失败")})})},handleClose:function(t,e){"tag"===t?this.task.tags.splice(this.task.tags.indexOf(e),1):"sentence"===t?this.task.sentences.splice(this.task.sentences.indexOf(e),1):"article"===t&&this.task.articles.splice(this.task.articles.indexOf(e),1),this.set_task(this.task)},showInput:function(t){var e=this;"tag"===t?(this.tagInput=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})):"sentence"===t&&(this.sentenceInput=!0,this.$nextTick(function(t){e.$refs.saveSentenceInput.$refs.input.focus()}))},handleInputConfirm:function(t){if("tag"===t){var e=this.tagInputVal;if(e){var n={source:"新建",name:e};this.task.tags.push(n)}this.tagInput=!1,this.tagInputVal=""}else if("sentence"===t){var i=this.sentenceInputVal;if(i){var s={source:"新建",name:i};this.task.sentences.push(s)}this.sentenceInput=!1,this.sentenceInputVal=""}this.set_task(this.task)},pickUp:function(t){"publish"===this.$route.name&&this.set_selected(t.name)}})},Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sidebar"}},[n("transition",{attrs:{name:"toggleSide"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.taskVisible,expression:"taskVisible"},{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"container",attrs:{"element-loading-text":"正在保存中"}},[n("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"70px"}},[n("el-form-item",{attrs:{label:"素材"}},[n("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},on:{change:t.load_task,clear:t.reset_task},model:{value:t.taskSelect,callback:function(e){t.taskSelect=e},expression:"taskSelect"}},t._l(t.taskList,function(e,i){return n("el-option",{key:i,attrs:{label:e.title,value:e.id}},[n("span",{staticStyle:{float:"left","vertical-align":"middle"}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"el-icon-delete",staticStyle:{float:"right","vertical-align":"middle"},on:{click:function(n){n.stopPropagation(),t.delete_task(e)}}})])}))],1),t._v(" "),n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title","string"==typeof e?e.trim():e)},expression:"form.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{model:{value:t.form.describe,callback:function(e){t.$set(t.form,"describe","string"==typeof e?e.trim():e)},expression:"form.describe"}})],1),t._v(" "),n("el-form-item",{staticClass:"tags",attrs:{label:"关键词"}},[t._l(t.task.tags,function(e,i){return n("el-tooltip",{key:i,attrs:{effect:"light",enterable:!1,content:"来源："+e.source,placement:"top"}},[n("el-tag",{attrs:{type:"primary",closable:!0,"close-transition":!0},on:{close:function(n){n.stopPropagation(),n.preventDefault(),t.handleClose("tag",e)}},nativeOn:{dblclick:function(n){n.stopPropagation(),t.pickUp(e)}}},[t._v(t._s(e.name))])],1)}),t._v(" "),t.tagInput?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"mini"},on:{blur:function(e){t.handleInputConfirm("tag")}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleInputConfirm("tag")}},model:{value:t.tagInputVal,callback:function(e){t.tagInputVal="string"==typeof e?e.trim():e},expression:"tagInputVal"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){t.showInput("tag")}}},[t._v("+ 新建标签")])],2),t._v(" "),n("el-form-item",{staticClass:"sentences",attrs:{label:"句子"}},[t._l(t.task.sentences,function(e,i){return n("el-tooltip",{key:i,attrs:{effect:"light",enterable:!1,content:"来源："+e.source,placement:"top"}},[n("el-tag",{staticClass:"wrap",attrs:{type:"primary",closable:!0,"close-transition":!0},on:{close:function(n){n.stopPropagation(),n.preventDefault(),t.handleClose("sentence",e)}},nativeOn:{dblclick:function(n){n.stopPropagation(),t.pickUp(e)}}},[t._v(t._s(e.name))])],1)}),t._v(" "),t.sentenceInput?n("el-input",{ref:"saveSentenceInput",attrs:{size:"mini"},on:{blur:function(e){t.handleInputConfirm("sentence")}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleInputConfirm("sentence")}},model:{value:t.sentenceInputVal,callback:function(e){t.sentenceInputVal="string"==typeof e?e.trim():e},expression:"sentenceInputVal"}}):n("el-button",{attrs:{size:"small"},on:{click:function(e){t.showInput("sentence")}}},[t._v("+ 新建句子")])],2),t._v(" "),t.task.articles.length>0?n("el-form-item",{staticClass:"articles",attrs:{label:"文章"}},t._l(t.task.articles,function(e,i){return n("router-link",{key:i,attrs:{target:"_blank",to:"/preview_article?id="+e.id}},[n("el-tooltip",{attrs:{effect:"light",enterable:!1,content:"来源："+e.source,placement:"top"}},[n("el-tag",{staticClass:"wrap",attrs:{type:"primary",closable:!0,"close-transition":!0},on:{close:function(n){n.stopPropagation(),n.preventDefault(),t.handleClose("article",e)}}},[t._v(t._s(e.name))])],1)],1)})):t._e(),t._v(" "),n("el-form-item",[t.taskSelect?n("el-button",{attrs:{type:"primary"},on:{click:function(e){e.stopPropagation(),t.post_task("edit")}}},[t._v("保存")]):n("el-button",{attrs:{type:"primary"},on:{click:function(e){e.stopPropagation(),t.post_task("new")}}},[t._v("新建")]),t._v(" "),n("el-button",{on:{click:function(e){e.stopPropagation(),t.reset_task(e)}}},[t._v("重置")])],1)],1)],1)]),t._v(" "),n("el-button",{staticClass:"visibleBtn",attrs:{type:"primary",icon:t.taskVisible?"d-arrow-right":"d-arrow-left"},on:{click:function(e){t.taskVisible=!t.taskVisible}}})],1)},Yt=[],Xt={render:Zt,staticRenderFns:Yt},Ht=Xt,Kt=n("VU/8"),te=o,ee=Kt(zt,Ht,!1,te,null,null),ne=ee.exports,ie={props:{visible:Boolean}},se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"loading"},[t._t("default",[n("i",{staticClass:"el-icon-loading"}),t._v("数据加载中...")])],2):t._e()},ae=[],re={render:se,staticRenderFns:ae},oe=re,le=n("VU/8"),ce=l,ue=le(ie,oe,!1,ce,"data-v-5d367399",null),de=ue.exports,pe={props:{visible:Boolean,reload:Function}},fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"error",on:{click:function(e){e.stopPropagation(),t.reload(e)}}},[t._t("default",[n("i",{staticClass:"el-icon-circle-cross"}),t._v("请求错误，点击重新加载")])],2):t._e()},me=[],ve={render:fe,staticRenderFns:me},he=ve,_e=n("VU/8"),ge=c,ke=_e(pe,he,!1,ge,"data-v-3ef28f1d",null),be=ke.exports,we={props:{visible:Boolean}},xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("div",{staticClass:"nothing"},[t._t("default",[t._v("没有符合条件的文章")])],2):t._e()},ye=[],Ce={render:xe,staticRenderFns:ye},Ae=Ce,Ie=n("VU/8"),Se=u,Te=Ie(we,Ae,!1,Se,"data-v-70bd3fda",null),Le=Te.exports,Ve={props:{itemJson:Array},methods:bt()({},Object(N.b)("writer",["post_article_data"]),{previewURL:function(t){return"0"===t.state||"1"===t.state?"http://m.toutiaojk.com/#/detail?classid="+t.classid+"&id="+t.id+"&datafrom="+t.datafrom:"/#/preview_article?id="+t.id},editArticle:function(t){this.$router.push("/index/publish?id="+t.id)},recallArticle:function(t){var e=this;this.$confirm("此操作将从主页上撤回这篇文章，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={type:"recall",id:t.id,state:"5"};e.post_article_data(n).then(function(n){t.state="5",e.$notify.success("撤回成功")}).catch(function(t){console.log("撤回失败",t),e.$notify.error("撤回失败")})}).catch(function(){console.log("撤回取消")})},deleteArticle:function(t,e){var n=this;this.$confirm("此操作将永久删除这篇文章，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i={type:"del",id:t.id,datafrom:t.datafrom};n.post_article_data(i).then(function(t){n.itemJson.splice(e,1),n.$notify.success("删除成功")}).catch(function(t){console.log("删除失败",t),n.$notify.error("删除失败")})}).catch(function(){console.log("删除取消")})}})},Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemJson?n("div",{staticClass:"article-list"},t._l(t.itemJson,function(e,i){return n("el-row",{key:i,staticClass:"article-item",class:{unpassed:"4"===e.state}},["2"===e.state?[n("div",{staticClass:"content"},[n("a",{staticClass:"title",attrs:{href:t.previewURL(e),target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"abstruct"},[n("span",{staticClass:"draft"},[t._v("草稿")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(e.newstime))])]),t._v(" "),n("div",{staticClass:"action"},[n("el-button",{attrs:{icon:"edit",type:"text"},on:{click:function(n){t.editArticle(e)}}},[t._v("修改")]),t._v(" "),n("el-button",{attrs:{icon:"delete",type:"text"},on:{click:function(n){t.deleteArticle(e,i)}}},[t._v("删除")])],1)])]:[n("el-col",{staticClass:"picture",attrs:{span:4}},[n("a",{attrs:{href:t.previewURL(e),target:"_blank"}},[n("img",{attrs:{src:e.titlepic}}),t._v(" "),e.playonlineurl?n("div",{staticClass:"playRound"},[n("div",{staticClass:"playSan"})]):t._e()])]),t._v(" "),n("el-col",{staticClass:"content",attrs:{span:20}},[n("a",{staticClass:"title",attrs:{href:t.previewURL(e),target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),"4"===e.state?[n("p",{staticClass:"unpassed_reason"},[t._v("未通过原因：内容不适合收录")]),t._v(" "),n("div",{staticClass:"action"},[n("el-tooltip",{attrs:{effect:"light",content:"内容不适合收录，禁止修改",placement:"bottom"}},[n("el-button",{staticClass:"disabled",attrs:{icon:"edit",type:"text"}},[t._v("修改")])],1),t._v(" "),n("el-button",{attrs:{icon:"delete",type:"text"},on:{click:function(n){t.deleteArticle(e,i)}}},[t._v("删除")])],1)]:[n("div",{staticClass:"abstruct"},["0"===e.state?n("a",{staticClass:"recommend"},[t._v("已推荐")]):t._e(),t._v(" "),"0"===e.state||"1"===e.state?n("span",{staticClass:"passed"},[t._v("已发表")]):t._e(),t._v(" "),"3"===e.state?n("span",{staticClass:"auditing"},[t._v("审核中")]):t._e(),t._v(" "),"5"===e.state?n("span",{staticClass:"recall"},[t._v("已撤回")]):t._e(),t._v(" "),e.newstime?n("span",{staticClass:"time"},[t._v(t._s(e.newstime))]):t._e()]),t._v(" "),n("div",{staticClass:"count"},[e.onclick?n("span",[t._v("阅读 "+t._s(e.onclick))]):n("span",[t._v("阅读 0")]),t._v(" "),e.plnum?n("span",[t._v("评论 "+t._s(e.plnum))]):n("span",[t._v("评论 0")]),t._v(" "),e.collectnum?n("span",[t._v("收藏  "+t._s(e.collectnum))]):n("span",[t._v("收藏 0")])]),t._v(" "),n("div",{staticClass:"action"},[n("el-button",{attrs:{icon:"edit",type:"text"},on:{click:function(n){t.editArticle(e)}}},[t._v("修改")]),t._v(" "),n("el-button",{attrs:{icon:"share",type:"text"}},[t._v("转发")]),t._v(" "),n("el-dropdown",{attrs:{"menu-align":"start"}},[n("el-button",{attrs:{icon:"more",type:"text"}},[t._v("更多")]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){t.recallArticle(e,i)}}},[t._v("撤回")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(n){t.deleteArticle(e,i)}}},[t._v("删除")])],1)],1)],1)]],2)]],2)})):t._e()},Pe=[],Re={render:Ee,staticRenderFns:Pe},Ue=Re,De=n("VU/8"),Fe=d,$e=De(Ve,Ue,!1,Fe,null,null),Me=$e.exports,Oe={props:{itemJson:Array}},Be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-list"},t._l(3,function(e,i){return n("div",{key:i,staticClass:"comment-item"},[t._m(0,!0,!1),t._v(" "),t._m(1,!0,!1)])}))},je=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-avatar"},[n("a",{attrs:{target:"_blank"}},[n("img",{attrs:{src:"http://p1.pstatp.com/thumb/249b0002779aafe50ad1",alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-body"},[n("div",{staticClass:"comment-header"},[n("span",{staticClass:"name"},[t._v("小郑")]),t._v(" "),n("div",{staticClass:"time"},[n("span",[t._v("前天17:21")])])]),t._v(" "),n("div",{staticClass:"comment-content"},[n("div",{staticClass:"comment-text"},[t._v("我预产期在过年那几天，还得回老家去坐月子，瓦房那种[流泪]平时冬天洗澡也冷啊，但是我冬天最多一周要洗一次澡的，不晓得咋个过这个月子哟，[流泪]")]),t._v(" "),n("div",{staticClass:"comment-article"},[t._v("\n                    评论了我的文章：「\n                    "),n("a",[t._v("急，在线等！坐月子要不要洗澡？嫂子和妈大吵起来了")]),t._v(" 」\n                ")])]),t._v(" "),n("div",{staticClass:"comment-action clearfix"},[n("div",{staticClass:"comment-action-left"},[n("div",{staticClass:"comment-action-item"},[n("i",{staticClass:"el-icon-fa-thumbs-up"}),t._v(" 0")]),t._v(" "),n("div",{staticClass:"comment-action-item"},[n("i",{staticClass:"el-icon-fa-commenting"}),t._v(" 0")])]),t._v(" "),n("div",{staticClass:"comment-action-right"},[n("div",{staticClass:"comment-action-item"},[n("a",[t._v("推荐")])]),t._v(" "),n("div",{staticClass:"comment-action-item"},[n("a",[t._v("回复")])]),t._v(" "),n("div",{staticClass:"comment-action-item"},[n("a",[t._v("点赞")])]),t._v(" "),n("div",{staticClass:"comment-action-item"},[n("a",[t._v("举报")])])])])])}],Je={render:Be,staticRenderFns:je},qe=Je,Qe=n("VU/8"),We=p,Ge=Qe(Oe,qe,!1,We,null,null),Ne=Ge.exports,ze=n("0CFU"),Ze=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"selectPicture",attrs:{visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("el-tab-pane",{staticClass:"upload",attrs:{label:"上传图片",name:"upload"}},[i("el-upload",{ref:"upload",attrs:{action:"http://api.toutiaojk.com/e/extend/jkh/upload_file.php","list-type":"picture-card",multiple:!0,"before-upload":t.uploadBefore,"on-success":t.onSuccess,"on-error":t.onError,"on-remove":t.onRemove,"on-preview":t.onPreview}},[i("i",{staticClass:"el-icon-plus"})]),t._v(" "),i("el-dialog",{staticClass:"picture_preview",attrs:{size:"tiny",modal:!1},model:{value:t.preViewVisible,callback:function(e){t.preViewVisible=e},expression:"preViewVisible"}},[i("img",{attrs:{width:"100%",src:t.preViewURL}})])],1),t._v(" "),i("el-tab-pane",{staticClass:"select",attrs:{label:"免费图片",name:"select"}},[i("el-input",{staticClass:"imgInput",attrs:{placeholder:"请输入关键字"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.get_picture(e)}},model:{value:t.keyWord,callback:function(e){t.keyWord=e},expression:"keyWord"}},[i("el-button",{attrs:{slot:"append"},on:{click:function(e){e.stopPropagation(),t.get_picture(e)}},slot:"append"},[t._v("搜索")])],1),t._v(" "),i("div",{staticClass:"imgWrapper"},[!t.freePictureList||t.freePictureList.length>0||t.loading||t.error||t.nothing?t._e():i("div",{staticClass:"nothing"},[i("img",{attrs:{src:n("cUYT")}}),t._v(" "),i("p",[t._v("还没有图片，搜索一下吧~")])]),t._v(" "),i("my-loading",{attrs:{visible:t.loading}}),t._v(" "),i("my-error",{attrs:{visible:t.error,reload:t.get_picture}}),t._v(" "),i("my-nothing",{attrs:{visible:t.nothing&&!t.loading&&!t.error}}),t._v(" "),i("el-checkbox-group",{staticClass:"img-list",attrs:{max:5},model:{value:t.selectFileList,callback:function(e){t.selectFileList=e},expression:"selectFileList"}},t._l(t.freePictureList,function(e,n){return i("div",{staticClass:"img-item"},[i("el-tooltip",{attrs:{placement:"right-end",effect:"light",enterable:!1}},[i("el-checkbox-button",{attrs:{label:e.picurl}},[i("img",{attrs:{src:e.picurl}})]),t._v(" "),i("img",{staticClass:"tooltipImg",attrs:{slot:"content",src:e.picurl},slot:"content"})],1)],1)})),t._v(" "),t.freePictureList&&t.freePictureList.length>0?[i("my-loading",{attrs:{visible:t.more_loading}}),t._v(" "),i("my-error",{attrs:{visible:t.more_error,reload:t.get_picture_more}}),t._v(" "),i("my-nothing",{attrs:{visible:t.more_nothing&&!t.loading&&!t.error}},[t._v("没有更多数据了")])]:t._e()],2)],1)],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticClass:"cancle_btn",on:{click:function(e){e.stopPropagation(),t.slelectCancle(e)}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.selectComplete}},[t._v("确 定")])],1)],1)},Ye=[],Xe={render:Ze,staticRenderFns:Ye},He=Xe,Ke=n("VU/8"),tn=f,en=Ke(ze.a,He,!1,tn,null,null),nn=en.exports;m.default.config.productionTip=!1,m.default.use(ut.a),m.default.use(pt.a),m.default.use(mt.a),m.default.use(ht.a,{color:"#29F",failedColor:"red",thickness:"4px"}),m.default.prototype.$echarts=gt.a,m.default.component("my-header",Lt),m.default.component("my-footer",Mt),m.default.component("my-menu",Nt),m.default.component("my-sidebar",ne),m.default.component("my-loading",de),m.default.component("my-error",be),m.default.component("my-nothing",Le),m.default.component("article-list",Me),m.default.component("comment-list",Ne),m.default.component("select-picture",nn),B.beforeEach(function(t,e,n){if("/login"===t.path&&lt.getters.token)n("/");else if(t.matched.some(function(t){return t.meta.login})){var i=lt.getters.token;i?(lt.commit("set_token",i),lt.getters.user.userid?n():lt.dispatch("get_user_data").then(function(t){n()}).catch(function(){window.alert("账号在别处登录，请重新登录"),n({path:"/login",query:{redirect:t.fullPath}})})):n({path:"/login",query:{redirect:t.fullPath}})}else n()}),new m.default({el:"#app",router:B,store:lt,template:"<App/>",components:{App:y}})},SK5H:function(t,e){},a6WA:function(t,e){},bJDK:function(t,e,n){"use strict";function i(t){n("SK5H")}Object.defineProperty(e,"__esModule",{value:!0}),n("4qOc"),n("+cgv"),n("3f40"),window.Quill||(window.Quill=n("yPE/"));var s={name:"quill-editor",data:function(){return{_content:"",defaultModules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]}}},props:{content:String,value:String,disabled:Boolean,options:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null},methods:{initialize:function(){if(this.$el){var t=this;t.options.theme=t.options.theme||"snow",t.options.boundary=t.options.boundary||document.body,t.options.modules=t.options.modules||t.defaultModules,t.options.modules.toolbar=void 0!==t.options.modules.toolbar?t.options.modules.toolbar:t.defaultModules.toolbar,t.options.placeholder=t.options.placeholder||"Insert text here ...",t.options.readOnly=void 0!==t.options.readOnly&&t.options.readOnly,t.quill=new Quill(t.$refs.editor,t.options),(t.value||t.content)&&t.quill.pasteHTML(t.value||t.content),t.quill.on("selection-change",function(e){e?t.$emit("focus",t.quill):t.$emit("blur",t.quill)}),t.quill.on("text-change",function(e,n,i){var s=t.$refs.editor.children[0].innerHTML,a=t.quill.getText();"<p><br></p>"===s&&(s=""),t._content=s,t.$emit("input",t._content),t.$emit("change",{editor:t.quill,html:s,text:a})}),this.disabled&&this.quill.enable(!1),t.$emit("ready",t.quill)}}},watch:{content:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},value:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},disabled:function(t,e){this.quill&&this.quill.enable(!t)}}},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quill-editor"},[t._t("toolbar"),t._v(" "),n("div",{ref:"editor"})],2)},r=[],o={render:a,staticRenderFns:r},l=o,c=n("VU/8"),u=i,d=c(s,l,!1,u,null,null);e.default=d.exports},cUYT:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABLCAIAAAB7tddWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1Q0VBNzA0MjEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Q0VBNzA0MzEyMDUxMUUzODk2Q0JFM0Q1RjE4QkExQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzNDA2MkY1MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAzNDA2MkY2MTIwMzExRTM4OTZDQkUzRDVGMThCQTFDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+K6izdgAAAvpJREFUeNrsnFmPqkAQhWmX667gEp9c/v+/MkSDG+4LrvdcSYgRbw/0ALZQ9WBUJOn+uqvqHGCG3e93hUJRUoSAQBAIAkEgCASBIBAE4neRicEcII51Xb/dbnjPGOt0OqlUKok7ApN3jIKwY6DUIBAEgkAQCALho/X47TeXy8U0TcuyrtdrZKPs9/v2m8FgINYgf9QX/gTV+Xw2DCNKBJKmxmKxsAVc0kEcDgfyGq8CNp/Pa5qWy+WiHG6v13v7/XPt6Ha7Al5D3HQ1Go1sNkvtU8lkMsmtESSoCASBSFqEW/DQ0tbr9W63O51OKK6FQkFV1XQ6nSwQ0OOTyQSvjknZbDaA0mq1QCQafSFFasxmM4eCE1Do0+lUQrcSFggsPhzq20NgsVqtkpIax+MxMs+C/aXruvMxaonND75J9W5hUWWxuYAVdRfTg8EplUphGJywQPAFuBd5Dlhw/aDwwgVtCDgCdzph1QisG+dosVjkn44WYxjGC4XnvBuNRtvt9gtA2Hv47SGsZKVS4ef8eDzG4vMVCrpSgEU3xPbZbDar1erLl1AQ7XabU8xAAXvB3XffBnIHwkR2QcUYq9fr5XIZOxkTg6BEkeNLKdQF7AWPFBy1AoUmu8RG/HmE91nxM+J/ORIr07VcLvf7feCt+stAQGIBRNJtOJolDAhdj/hXGj5+u+TzIKAF+MbkK00XFta2BhDRUE0/9gv8Elogbu4TBW8+nyPhHSeuaVqtVuNQC6TzyQUCXsg0TbfyAxfIKogr9ynP1GJyYQZ57qbg7AuIRfclKZwSlDqWBQSmxM9zFALYh+fFBwJJSkNgqeFxSrAPw+EQ9QJew7Is2Sj8FgSW2nu1gylYPkKRMsRTA+4IcjA2fxsnDkLOq/IfACFP54uP1yAQBIJAEIh4gWCPkHk+GJ7AjU/fICJ+qlIghEfoDwQMtRjvyLYDRih4rsDT+bBM9tP5kuhrzN++e6SqqvCdYUb/SIO6BoEgEASCQBAIAkEgCEQg8VeAAQAB1bbO2qoeewAAAABJRU5ErkJggg=="},coeT:function(t,e){},dsrl:function(t,e){},ioPr:function(t,e){},llnD:function(t,e){},mgS3:function(t,e){},pfyg:function(t,e){},q8zI:function(t,e){},vR5L:function(t,e){},vtoC:function(t,e){},xwrs:function(t,e){}},["NHnr"]);