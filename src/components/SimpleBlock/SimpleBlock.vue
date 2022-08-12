<template>
  <div class="simple-block-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SimpleBlock',
}
</script>

<style scoped lang="less">
@import url('./SimpleBlock.less');
</style>
