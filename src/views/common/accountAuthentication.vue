<template>
  <div class="containerInLoginIndex">
    <div class="loginSub">
      <loginSub></loginSub>
    </div>
  </div>
</template>
<script>
import loginSub from '@/views/common/loginSub.vue'
export default {
  name: 'accountAuthentication',
  components: {
    loginSub,
  },
  data() {
    return {
      disVisible: true,
    }
  },
}
</script>

<style scoped>
.loginSub {
  background-color: #f3f3f3;
  width: 20em;
  height: 22em;
}
.containerInLoginIndex {
  padding-top: 16em;
  padding-left: 7em;
  background-image: url(../../assets/login_background.png);
  width: 101em;
  height: 37em;
}
</style>
