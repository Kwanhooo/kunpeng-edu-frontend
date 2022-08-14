<template>
  <div class="class-dashboard-search-wrapper">
    <input
      type="search"
      id="class-dashboard-search-input"
      placeholder="在此搜索你的班级..."
      @change="handleSearch()"
      v-model="keywords"
    />
    <button id="class-dashboard-search-btn">🔍 搜索</button>
  </div>
  <div class="class-dashboard-wrapper">
    <a-skeleton
      avatar
      :paragraph="{ rows: 5 }"
      style="margin: 2rem 0.5rem 0; width: 27.5rem; display: inline-block"
      active
      v-for="i in [1, 2, 3, 4, 5, 6]"
      :key="i"
      :loading="isShowSkeleton"
    />

    <SimpleBlock v-for="myClass in displayList" :key="myClass" @click="handleShowDetail(myClass)">
      <template v-slot:default>
        <div class="overview-top">
          <div class="class-ov-img-wrapper">
            <img class="class-ov-img" src="https://cloud.0xcafebabe.cn/img-host/default-user-avatar.svg" alt="logo" />
          </div>
          <div class="class-ov-title">
            <div class="class-ov-title-name">
              {{ myClass.className }}
            </div>
            <div class="class-ov-title-grade">
              {{ myClass.grade }}
            </div>
          </div>
        </div>
        <div class="class-ov-description">
          <a-row :gutter="16">
            <a-col :span="12">
              <a-card>
                <a-statistic
                  title="学情指数"
                  :value="myClass.studyIndex"
                  :precision="2"
                  suffix="%"
                  :value-style="{ color: '#cf1322' }"
                >
                  <template #prefix>
                    <arrow-up-outlined />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
            <a-col :span="12">
              <a-card>
                <a-statistic
                  title="积极指数"
                  :value="myClass.activityIndex"
                  :precision="2"
                  suffix="%"
                  class="demo-class"
                  :value-style="{ color: '#3f8600' }"
                >
                  <template #prefix>
                    <arrow-down-outlined />
                  </template>
                </a-statistic>
              </a-card>
            </a-col>
          </a-row>
        </div>
        <div class="class-ov-time">
          <div>21 m 前 源自</div>
          <div style="margin-bottom: 1px">
            &nbsp;<img class="class-ov-info-source-img" src="https://cloud.0xcafebabe.cn/img-host/kunpeng_logo.png" />
            <span style="font-size: 12px">unpeng Analysis</span>
          </div>
        </div>
      </template>
    </SimpleBlock>
  </div>
</template>

<script>
import SimpleBlock from '@/components/SimpleBlock'
import { mapActions } from 'vuex'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue'

export default {
  name: 'ClassDashboard',
  components: { SimpleBlock, ArrowUpOutlined, ArrowDownOutlined },
  data() {
    return {
      keywords: '',
      displayList: [],
      isShowSkeleton: true,
    }
  },
  methods: {
    ...mapActions(['GetMyClassList', 'SearchMyClass', 'SetPageViewTitle']),
    handleSearch() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this
      if (this.keywords.trim() === '') {
        this.GetMyClassList().then((res) => {
          vm.displayList = res
        })
        return
      }
      this.SearchMyClass(this.keywords).then((res) => {
        vm.displayList = res
      })
      console.log(this.displayList)
    },
    handleShowDetail(targetClass) {
      this.$router.push('/class/analysis/' + targetClass.classId)
    },
  },
  mounted() {
    this.isShowSkeleton = true
    this.SetPageViewTitle(this.$route.meta.title)
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this
    this.GetMyClassList().then((res) => {
      vm.displayList = res
      vm.isShowSkeleton = false
    })
  },
}
</script>

<style scoped lang="less">
@import url('./ClassDashboard.less');
</style>
