<template>
  <div class="--tabs">
    <img
      class="nav-icon dy-icon"
      src="https://cdn4.iconfinder.com/data/icons/social-media-2273/64/social_media_network_online_k-512.png"
      alt="logo"
      id="dynamic-icon"
      style="margin-top: 0.5rem; margin-right: 0.5rem"
    />
    <a
      :class="{ '--tab': true, '--is-active': activeIndex === index }"
      v-for="(module, index) in __teacherModules"
      :key="index"
      @click="onActiveModuleChange(module, index)"
    >
      {{ module }}
    </a>
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
    onActiveModuleChange(module, index) {
      this.activeIndex = index
      // this.$store.commit('setActiveModule', module)
      // this.$router.push(module.path)
    },
  },
  computed: {
    ...mapGetters(['__teacherModules']),
  },
}
</script>

<style scoped>
.dy-icon {
  /*向上平移32px*/
  opacity: 0;
}
</style>
