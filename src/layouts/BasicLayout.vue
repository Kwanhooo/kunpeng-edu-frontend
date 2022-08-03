<template>
  <div class="basic-layout-nav-outer">
    <BasicHeader></BasicHeader>
  </div>
  <div class="basic-layout-sub-menu-outer">
    <BasicSubMenu></BasicSubMenu>
  </div>
  <div class="basic-layout-content">
    <PageView></PageView>
  </div>
  <div class="basic-layout-footer-outer">
    <BasicFooter></BasicFooter>
  </div>
</template>

<script>
import { BasicHeader, BasicSubMenu, BasicFooter, PageView } from '@/layouts'

export default {
  name: 'BasicLayout',
  components: { PageView, BasicSubMenu, BasicFooter, BasicHeader },
  mounted() {
    // 当滚动超过了顶部导航栏时，触发事件
    const navOuter = document.querySelector('.basic-layout-nav-outer')
    const subMenu = document.querySelector('.--tabs')
    const icon = document.querySelector('.dy-icon')
    // 获得顶部导航栏的高度
    const navOuterHeight = navOuter.getBoundingClientRect().height
    let isDown = false
    window.addEventListener('scroll', () => {
      if (window.scrollY > navOuterHeight) {
        if (isDown) return
        isDown = true
        icon.style.transition = '0.3s ease-in-out'

        // --tabs整体向右移动，icon可见
        icon.style.opacity = '1'
        subMenu.style.transform = 'translateX(16px)'
      } else {
        if (!isDown) return
        isDown = false
        // 删除navOuter中的img元素
        const iconToRemove = document.querySelector('#dynamic-icon')
        // iconToRemove.remove()
        // icon.style.display = 'none'
        icon.style.opacity = '0'
        subMenu.style.transform = 'translateX(-16px)'
      }
    })
  },
}
</script>

<style lang="less">
@import './BasicLayout.less';
</style>
