<template>
  <div class="mw-card-wrapper">
    <div class="mw-card-display">
      <div class="mw-card-title">
        <slot name="title"></slot>
      </div>
      <div class="mw-card-main">
        <slot name="main"></slot>
      </div>
    </div>
    <div class="mw-card-func-bar">
      <slot name="func-bar"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',
}
</script>

<style lang="less">
@import './Card.less';
</style>
