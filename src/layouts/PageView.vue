<template>
  <div class="basic-layout-content-title">
    <div class="basic-layout-content-title-inner">
      {{ pageTitle }}
    </div>
  </div>
  <div class="basic-layout-content-main">
    <div class="basic-layout-sidebar-wrapper">
      <div class="basic-layout-sidebar-inner">
        <div
          :class="{ 'basic-layout-sidebar-item': true, 'active-side-bar-item': isActive(sub.path) }"
          v-for="(sub, index) in subNav"
          :key="index"
          @click="onActiveSubChange(sub.path)"
          :id="sub.path"
        >
          {{ sub.title }}
        </div>
      </div>
    </div>
    <div class="basic-layout-content-router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageView',
  data() {
    return {
      pageTitle: '',
      activeSubIndex: 0,
    }
  },
  methods: {
    onActiveSubChange(path) {
      this.$router.push(path)
    },
    isActive(path) {
      // 如果path带有参数，则将他去除
      if (path.indexOf('?') > -1) {
        path = path.split('?')[0]
      }
      return this.$route.path === path
    },
  },
  computed: {
    ...mapGetters(['subNav']),
  },
  mounted() {
    this.pageTitle = this.$route.meta.title
  },
}
</script>

<style scoped></style>
