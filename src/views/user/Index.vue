<template>
  <div class="topSub"><topSub></topSub></div>
  <div class="leftSub" v-if="identity==='teacher'"><leftSubTeacher></leftSubTeacher></div>
  <div class="leftSub v-else"><leftSubStudent></leftSubStudent></div>
  <div class="bottomSub"><bottomSub></bottomSub></div>
  <router-view></router-view>
</template>

<script>
import topSub from '@/views/common/topSub.vue'
import leftSubTeacher from '@/views/common/leftSubTeacher'
import leftSubStudent from "@/views/common/leftSubStudent";
import bottomSub from '@/views/common/bottomSub.vue'
export default {
  name: 'App',
  components: {topSub,leftSubTeacher,leftSubStudent,bottomSub},
  data(){
    return{
      identity:sessionStorage.getItem('identity'),
    }
  }
}
</script>

<style>
</style>
