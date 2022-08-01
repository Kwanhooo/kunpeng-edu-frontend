<template>
<div class="container">

</div>
  <div class="loginSub">
    <loginSub></loginSub>
  </div>
</template>
<script>
import loginSub from '@/views/common/loginSub.vue'
export default {
  name: "accountAuthentication",
  components:{
    loginSub,
  },
  data(){
    return {
      disVisible: true,
    }
  }
}
</script>

<style scoped>
.loginSub {
  width:20em;
  height:22em;

}
.container {
  background-image: url(../../assets/login_background.png);
}
</style>