(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2989a959"],{4105:function(e,r,t){},"669b":function(e,r,t){"use strict";var a=t("4105"),s=t.n(a);s.a},bba8:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"back"},[e.showEdit?t("el-card",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"头像"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"http://127.0.0.1:3000/admin/users/update",headers:e.headers,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imgurl?t("img",{staticClass:"avatar",attrs:{src:e.imgurl}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t("el-form-item",{attrs:{label:"昵称",prop:"username"}},[t("el-input",{model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),t("el-form-item",{attrs:{label:"QQ"}},[t("el-input",{model:{value:e.ruleForm.qq,callback:function(r){e.$set(e.ruleForm,"qq",r)},expression:"ruleForm.qq"}})],1),t("el-form-item",{attrs:{label:"简介"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("保存信息")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("取消保存")])],1)],1)],1):e._e(),e.showEdit?e._e():t("div",{staticClass:"userinfo"},[t("el-row",[e._v(" 账号："+e._s(e.ruleForm.username)+" ")]),t("el-row",[e._v(" QQ："+e._s(e.ruleForm.qq)+" ")]),t("el-row",[e._v(" 文章数量："+e._s(e.ruleForm.a_num)+" ")]),t("el-row",[e._v(" 获赞："+e._s(e.ruleForm.p_num)+" ")]),t("el-row",[e._v(" 阅读量："+e._s(e.ruleForm.h_num)+" ")]),t("el-row",[e._v(" 个性签名："+e._s(e.ruleForm.desc)+" ")]),t("el-row",{attrs:{type:"flex",justify:"center",align:"center"}},[t("el-col",{attrs:{span:3}},[t("el-button",{attrs:{type:"primary"},on:{click:e.handleShowEdit}},[e._v("修改信息")])],1)],1)],1)],1)},s=[],o=(t("d3b7"),t("3ca3"),t("ddb0"),t("2b3d"),t("96cf"),t("1da1")),n=t("b775"),l=function(){return Object(n["a"])({method:"GET",url:"users"})},u=function(e){return Object(n["a"])({method:"post",url:"users/update",header:{"content-type":"application/x-www-form-urlencoded"},data:e})},c=t("5ae9"),i={name:"userInfo",data:function(){var e=this,r=function(r,t,a){""===t?a(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),a())},t=function(r,t,a){""===t?a(new Error("请再次输入密码")):t!==e.ruleForm.password?a(new Error("两次输入密码不一致!")):a()};return{showEdit:!1,imgurl:"",ruleForm:{avatar:"",username:"",password:"",checkPass:"",qq:"",desc:""},rules:{username:[{required:!0,message:"请输入昵称",trigger:"blur"}],password:[{validator:r,trigger:"blur"}],checkPass:[{validator:t,trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}]},href:""}},created:function(){this.getUserInfo()},computed:{headers:function(){return{authorization:"Bearer "+Object(c["a"])("token")}}},methods:{getUserInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l();case 3:t=r.sent,e.ruleForm=t[0],e.imgurl=t[0].avatar,e.$store.commit("setAvatar",t[0].avatar),Object(c["c"])("avatar",t[0].avatar),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},userEdit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u(e.ruleForm);case 3:t=r.sent,200==t.code&&e.$notify({title:"成功",message:t.msg,type:"success"}),e.$router.go(0),e.resetForm(),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},handleShowEdit:function(){this.showEdit=!0},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;r.userEdit()}))},resetForm:function(){this.showEdit=!1},handleAvatarSuccess:function(e,r){this.imgurl=URL.createObjectURL(r.raw)},beforeAvatarUpload:function(e){var r="image/jpeg"===e.type,t=e.size/1024/1024<2;return r||this.$message.error("上传头像图片只能是 JPG 格式!"),t||this.$message.error("上传头像图片大小不能超过 2MB!"),r&&t}}},m=i,d=(t("669b"),t("2877")),p=Object(d["a"])(m,a,s,!1,null,"63a59e22",null);r["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2989a959.f613a92f.js.map