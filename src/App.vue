<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      identity: sessionStorage.getItem('identity'),
    }
  },
}
</script>
`

<style></style>
