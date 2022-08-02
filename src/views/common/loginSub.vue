<template>
  <div class="container">
    <div class="headContainer">
      <div class="logoContainer">
        <img src="../../assets/kunpeng_logo.png" class="logo">
      </div>
      <div class="loginTitle" >用户登录</div>
    </div>
    <div class="emailInputContainer">
      <input type="text" class="emailInput" placeholder="📫Email">
    </div>
    <div class="passwordInputContainer" ng-init="pswShow = false">
      <input type="password" class="passwordInput" placeholder="🔒Password" >
    </div>
    <div class="registerButtonContainer">
      <a class="registerButton" @click="register()">立即注册→</a>
      <a class="problemButton">登录时遇到问题？</a>
    </div>
    <div class="loginButtonContainer">
      <button class="loginButton" >登录</button>
    </div>
    <div class="otherLoginTextContainer">
      -------------其他登录方式-------------
    </div>
    <div class="otherLogin">
        <div class="wechatContainer">
          <img src="../../assets/wechat_logo.png" class="wechat" >
        </div>
        <div class="qqContainer">
          <img src="../../assets/qq_logo.png" class="qq">
        </div>
        <div class="usernameContainer">
          <img src="../../assets/user_logo.png" class="username">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginSub",
  data(){
    return{

    }
  },
  methods: {
    register(){
      console.log("Register1");
      this.$router.push('/common/register');
    },
  }
}
</script>

<style scoped>
.wechat{
  width:2em;
}
.qq{
  width:2em;
}
.username{
  width:2em;
}
.emailInput{
  width:90%;
  height:2em;
  outline: 0;


}
.emailInputContainer{
  text-align: center;
  margin-top:1em;
}
.passwordInput{
  width:90%;
  height:2em;
  outline: 0;

}
.passwordInputContainer{
  text-align: center;
  margin-top:1em;
}
.loginButtonContainer{
  margin-top:1em;
  text-align: center;
}
.loginButton{
  width:90%;
  height:3em;
  background-color:rgb(13,194,179);
  border-color:rgb(13,194,179);
  border-style:hidden;
}
.logo{
  width:2em;
}
.container{
  width:20em;
  height:22em;
  border-color:#767867;
  background-color:#F3F3F3
}
.headContainer {
  display: grid;
  grid-template-columns: 2em auto;
  padding-top: 1em;
  padding-left:6em;
}
.loginTitle{
  margin-top:0.2em;
}
.registerButtonContainer{
  margin-top:0.5em;
  margin-left: 0.7em;
}
.registerButton{
  color:rgb(13,194,179);
  font-size:0.85em;
}
.problemButton{
  font-size:0.85em;
  margin-left:9em;
}
.otherLoginTextContainer{
  margin-top: 1em;
  text-align: center;
}
.otherLogin{
  margin-top:1em;
  display:grid;
  grid-template-columns:auto auto auto;
  text-align: center;
}
</style>