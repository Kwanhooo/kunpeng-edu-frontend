<template>
  <div class="basic-layout-nav">
    <img class="nav-icon" src="../assets/kunpeng_logo.png" alt="logo" />
    <svg
      data-testid="geist-icon"
      fill="none"
      height="32"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
      viewBox="0 0 24 24"
      width="32"
      style="color: #ededed"
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
    <div class="basic-user-info-wrapper">
      <img class="s-avatar" src="../assets/svgs/default-user-avatar.svg" alt="user-avatar" />
      <div class="s-username">Jethro</div>
      <div class="identity-tag-wrapper">
        <div class="identity-tag">内幕人士</div>
      </div>
      <svg
        class="account-option-svg"
        fill="none"
        height="16"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 16 24"
      >
        <path d="M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517"></path>
      </svg>
    </div>
    <div class="basic-link-nav">
      <a class="link-nav">🔔 通知</a>
      <a class="link-nav">📅 日程</a>
      <a class="link-nav">💻 设定</a>
      <a class="link-nav">💬 支持</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicHeader',
}
</script>

<style scoped></style>
