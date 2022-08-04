<template>
  <div class="basic-layout-footer">
    <div class="basic-footer-col">
      <div class="footer-icon-wrapper">
        <img class="l-icon" src="../assets/kunpeng_logo.png" alt="logo" />

        <svg id="app-name" width="auto" height="32px">
          <text id="logo-text" x="2.3rem" y="80%" text-anchor="middle">unPeng</text>
        </svg>
      </div>
      <div>
        <div class="--slogan">
          <p style="--content: 'Intelligent.'; --padding: 0.05em; --start-color: #007cf0; --end-color: #00dfd8">
            Intelligent.
          </p>
          <p style="--content: 'Efficient.'; --padding: 0.05em; --start-color: #7928ca; --end-color: #ff0080">
            Efficient.
          </p>
          <p style="--content: 'Next Gen.'; --padding: 0.05em; --start-color: #ff4d4d; --end-color: #f9cb28">
            Next Gen.
          </p>
        </div>
      </div>
    </div>
    <div class="basic-footer-col">
      <div class="basic-footer-col-title"><a href="">产品</a></div>
      <div class="basic-footer-col-item"><a href="">智能监考</a></div>
      <div class="basic-footer-col-item"><a href="">题库索引</a></div>
      <div class="basic-footer-col-item"><a href="">学生画像分析</a></div>
      <div class="basic-footer-col-item"><a href="">教育工作流</a></div>
      <div class="basic-footer-col-item"><a href="">讨论套件</a></div>
      <div class="basic-footer-col-item"><a href="">资源库</a></div>
      <div class="basic-footer-col-item"><a href="">大数据分析</a></div>
    </div>
    <div class="basic-footer-col">
      <div class="basic-footer-col-title"><a href="">资源</a></div>
      <div class="basic-footer-col-item"><a href="">使用指南</a></div>
      <div class="basic-footer-col-item"><a href="">大客户</a></div>
      <div class="basic-footer-col-item"><a href="">学生</a></div>
      <div class="basic-footer-col-item"><a href="">教师</a></div>
      <div class="basic-footer-col-item"><a href="">开发者</a></div>
      <div class="basic-footer-col-item"><a href="">下载</a></div>
    </div>
    <div class="basic-footer-col">
      <div class="basic-footer-col-title"><a href="">企业</a></div>
      <div class="basic-footer-col-item"><a href="">首页</a></div>
      <div class="basic-footer-col-item"><a href="">博客</a></div>
      <div class="basic-footer-col-item"><a href="">更新日志</a></div>
      <div class="basic-footer-col-item"><a href="">关于</a></div>
      <div class="basic-footer-col-item"><a href="">工作</a></div>
      <div class="basic-footer-col-item"><a href="">定价</a></div>
      <div class="basic-footer-col-item"><a href="">合伙人</a></div>
      <div class="basic-footer-col-item"><a href="">联系我们</a></div>
    </div>
    <div class="basic-footer-col">
      <div class="basic-footer-col-title"><a href="">政策</a></div>
      <div class="basic-footer-col-item"><a href="">您的隐私</a></div>
      <div class="basic-footer-col-item"><a href="">服务条款</a></div>
      <div class="basic-footer-col-item"><a href="">交易政策</a></div>
      <div class="basic-footer-col-item"><a href="">交互策略</a></div>
      <div class="basic-footer-col-item"><a href="">Cookies 偏好</a></div>
    </div>
  </div>
  <div class="multi-func-bar">
    <div class="copyright-text">Copyright © 2022 KunPeng Edu Org. All rights reserved.</div>
    <div class="basic-footer-repo-wrapper">
      <a href="https://github.com/Kwanhooo/kunpeng-edu-frontend" target="_blank">
        <img class="basic-footer-repo" src="../assets/svgs/github.svg" />
      </a>
      <img class="basic-footer-divide" src="../assets/svgs/divide.svg" />
      <a href="https://gitee.com/hixs/kunpeng_front" target="_blank">
        <img class="basic-footer-repo" src="../assets/svgs/gitee-fill-round.svg" />
      </a>
    </div>
    <div class="basic-footer-service-status">
      <a href="https://kp.0xcafebabe.cn/" target="_blank">
        <img
          alt="Website"
          src="https://img.shields.io/website?down_color=red&down_message=%E4%B8%A2%E5%A4%B1&label=%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8A%B6%E6%80%81&style=for-the-badge&up_color=green&up_message=%E5%9C%A8%E7%BA%BF&url=https%3A%2F%2Fkp.0xcafebabe.cn"
        />
      </a>
    </div>
    <div class="certificate-sn">
      <img class="basic-footer-beian-svg" src="../assets/svgs/beian.svg" />
      <span>粤ICP备2022013690号-2</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicFooter',
  data() {
    return {}
  },
  mounted() {
    const vm = this
    const logoEl = document.getElementById('app-name')
    // 当--app-name进入可视区域时，设置logo的class为trace
    // 获得视口高度
    const viewportHeight = window.innerHeight
    // 获得body总高度
    const bodyHeight = document.body.scrollHeight
    // 获得.basic-layout-footer-outer的高度
    const footerHeight = document.querySelector('.basic-layout-footer-outer').offsetHeight
    const targetHeight = bodyHeight - viewportHeight - footerHeight + 100
    console.log(targetHeight)
    window.addEventListener('scroll', function () {
      if (window.scrollY > targetHeight) {
        setTimeout(() => {
          logoEl.classList.add('trace')
        }, 300)
      } else {
        logoEl.classList.remove('trace')
        // 以下方法似乎可以重绘logoEl，使得动画可以多次播放
        logoEl.remove()
        const footerIconWrapper = document.querySelector('.footer-icon-wrapper')
        footerIconWrapper.appendChild(logoEl)
      }
    })
  },
}
</script>

<style scoped></style>
