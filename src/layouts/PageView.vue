<template>
  <div class="basic-layout-content-title" v-if="currentTitle !== undefined && currentTitle !== ''">
    <div class="basic-layout-content-title-inner" v-html="currentTitle"></div>
  </div>
  <div class="basic-layout-content-main">
    <div class="basic-layout-sidebar-wrapper" v-if="isShow()">
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
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'

export default {
  name: 'PageView',
  data() {
    return {
      pageTitle: '',
      activeSubIndex: 0,
    }
  },
  methods: {
    ...mapActions(['SetPageViewTitle']),
    isShow() {
      return store.getters.isShowSubNav
    },
    onActiveSubChange(path) {
      this.$router.push(path)
    },
    isActive(path) {
      // 如果path带有参数，则将它去除
      if (path.indexOf('?') > -1) {
        path = path.split('?')[0]
      }
      return this.$route.path === path
    },
  },
  computed: {
    ...mapGetters(['subNav', 'pageViewTitle']),
    currentTitle() {
      return this.pageViewTitle
    },
  },
}
</script>

<style lang="less">
@import './RichTextParse';
</style>
