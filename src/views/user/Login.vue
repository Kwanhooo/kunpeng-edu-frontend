<template>
  <div>
    Login View
    <el-button @click='handleClick()'>Test EL</el-button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  methods: {
    handleClick() {
      console.log(process.env.VUE_APP_REQUEST_TIMEOUT);
      this.$message.success('Success');
      this.axios.get('/api/test').then(response => {
        console.log(response);
      });
    },
  },
}
</script>

<style scoped></style>
