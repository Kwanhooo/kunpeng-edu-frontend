<template>
  <div style="background: palegoldenrod; width: 100%; height: 150vh"></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Index',
  methods: {
    ...mapActions(['SetPageViewTitle']),
  },
  mounted() {
    this.SetPageViewTitle(this.$route.meta.title)
  },
}
</script>

<style scoped></style>
