<template>
  <div class="basic-layout-nav">
    <img class="nav-icon" src="https://cloud.0xcafebabe.cn/img-host/kunpeng_logo.png" alt="logo" />
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
      <img class="s-avatar" :src="getAvatar()" alt="user-avatar" />
      <div class="s-username">{{ username }}</div>
      <div class="identity-tag-wrapper">
        <span class="identity-tag">{{ roles }}</span>
        <!--        {{ roles }}-->
      </div>
      <svg
        class="account-option-svg"
        fill="none"
        height="22"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 16 24"
      >
        <path d="M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517"></path>
      </svg>
    </div>
    <div class="basic-link-nav">
      <div
        :class="{ 'basic-link-nav-item': true, 'basic-link-nav-item-active': module.path === this.$route.path }"
        v-for="module in __generalModules"
        :key="module"
        :id="module.path"
      >
        <router-link
          :class="{ 'link-nav': true, 'basic-link-nav-item-active': module.path === this.$route.path }"
          :to="module.path"
        >
          <div class="basic-link-nav-item-inner">
            <img :src="module.icon" class="general-module-icon" />
            {{ module.title }}
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../store'

export default {
  name: 'BasicHeader',
  methods: {
    getAvatar() {
      return store.getters.avatar
    },
  },
  computed: {
    ...mapGetters(['username', 'avatar', 'roles', '__generalModules']),
  },
}
</script>

<style scoped></style>
