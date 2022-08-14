<template>Settings</template>

<script>
import { mapActions } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Settings',
  methods: {
    ...mapActions(['SetPageViewTitle']),
  },
  mounted() {
    this.SetPageViewTitle(this.$route.meta.title)
  },
}
</script>

<style scoped></style>
