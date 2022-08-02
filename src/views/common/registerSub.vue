<template>
<div class="container">
<div class="topSub">
  <topSub></topSub>
</div>
  <div class="bottomSub">
    <bottomSub></bottomSub>
  </div>
</div>
</template>

<script>
import topSub from '@/views/common/topSub.vue'
import bottomSub from '@/views/common/bottomSub.vue'
export default {
  name: "regissterSub",
  components: {topSub,bottomSub},
}
</script>

<style scoped>

</style>