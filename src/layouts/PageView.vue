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
          :class="{ 'basic-layout-sidebar-item': true, 'active-side-bar-item': activeSubIndex === index }"
          v-for="(sub, index) in __classManagementSubs"
          :key="index"
          @click="onActiveSubChange(sub, index)"
        >
          {{ sub }}
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
    onActiveSubChange(sub, index) {
      this.activeSubIndex = index
    },
  },
  computed: {
    ...mapGetters(['__classManagementSubs']),
  },
  mounted() {
    this.pageTitle = this.$route.meta.title
  },
}
</script>

<style scoped></style>
