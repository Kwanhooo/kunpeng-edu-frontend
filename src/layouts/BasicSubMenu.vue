<template>
  <div class="--tabs">
    <img
      class="nav-icon dy-icon"
      src="https://cdn4.iconfinder.com/data/icons/social-media-2273/64/social_media_network_online_k-512.png"
      alt="logo"
      id="dynamic-icon"
      style="margin-top: 0.5rem; margin-right: 0.5rem"
    />
    <router-link
      :class="{ '--tab': true, '--is-active': isActive(nav.path) }"
      v-for="(nav, index) in mainNav"
      :key="index"
      @click="onActiveModuleChange(nav, index)"
      :id="nav.path"
      :to="nav.path"
    >
      {{ nav.title }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BasicSubMenu',
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    onActiveModuleChange(nav, index) {
      this.activeIndex = index
    },
    isActive(path) {
      if (path === '/') {
        if (this.$route.path === '/') return true
      } else if (this.$route.path.startsWith(path)) {
        return true
      }
      return false
    },
  },
  computed: {
    ...mapGetters(['mainNav']),
  },
}
</script>

<style scoped>
.dy-icon {
  opacity: 0;
}
</style>
