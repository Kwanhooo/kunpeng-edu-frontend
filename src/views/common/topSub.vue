<template>
  <div class="container">
    <div class="logoContainer">
        <img src="../../assets/kunpeng_logo.png" class="logo">
    </div>
    <div class="nameContainer">
      <img src="../../assets/kunpeng_name.png" class="name">
    </div>
    <div class="userContainer">
      <div class="loginContainer" v-if="username===null">
        <a class="login">登录👨‍🏭</a>
      </div>
      <div class="userContainer" v-else>
         <a class="username">{{username}}👨‍🏭</a>
         <a class="cancellation">注销🔒</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topSub",
  data(){
    return{
      username:sessionStorage.getItem('username'),
    }
  }
}
</script>

<style scoped>
.container{
  background-color:rgb(181,242,196);
  display: grid;
  grid-template-columns: 8em 90em auto;
}
.logoContainer{
  padding-left: 2em;
  padding-top: 1em;
}
.nameContainer{
  padding-top: 1.2em;
}
.userContainer{
  padding-top:2.9em;
}
.logo{
  width:7em;
}
.name{
  width:15em;
}
.login{
  font-size:1.4em;
  font-family: 黑体,serif;
}
.username{
  font-size:1.4em;
  font-family: 黑体,serif;
}
.cancellation{
  font-size:1.4em;
  font-family: 黑体,serif;
}
</style>