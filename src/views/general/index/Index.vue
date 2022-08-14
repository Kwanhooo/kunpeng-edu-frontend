<template>
  <div style="width: 100%">
    <a-skeleton active :paragraph="{ rows: 50 }" :loading="true" />
  </div>
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
    this.SetPageViewTitle('')
  },
}
</script>

<style scoped></style>
