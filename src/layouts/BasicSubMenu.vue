<template>
  <div class="--tabs">
    <img
      class="nav-icon dy-icon"
      src="https://cdn4.iconfinder.com/data/icons/social-media-2273/64/social_media_network_online_k-512.png"
      alt="logo"
      id="dynamic-icon"
      style="margin-top: 0.5rem; margin-right: 0.5rem"
    />
    <a class="--tab --is-active">首页</a>
    <a class="--tab">班级管理</a>
    <a class="--tab">学生管理</a>
    <a class="--tab">考试管理</a>
    <a class="--tab">试题库</a>
  </div>
</template>

<script>
export default {
  name: 'BasicSubMenu',
}
</script>

<style scoped>
.dy-icon {
  /*向上平移32px*/
  opacity: 0;
}
</style>
