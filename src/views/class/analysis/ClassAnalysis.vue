<template>
  <div class="analysis-top-wrapper"></div>
  <div class="analysis-main-wrapper">
    <div class="analysis-item">
      <Card></Card>
    </div>
    <div class="analysis-item">
      <Card></Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ClassAnalysis',
  components: {
    Card,
  },
  data() {
    return {
      targetClass: {},
    }
  },
  methods: {
    ...mapActions(['SetPageViewTitle']),
  },
  computed: {
    ...mapGetters(['myClassList']),
  },
  created() {
    const classId = this.$route.params.classId
    this.targetClass = this.myClassList.find((item) => item.classId === classId)
    this.SetPageViewTitle(
      '<div class="analysis-top-wrapper" id="go-back" onclick="window.history.back()">' +
        '<img src="https://cloud.0xcafebabe.cn/img-host/go-back.svg" style="width: 32px;height: auto;margin-right: 0.8rem;margin-bottom: 0.3rem;cursor: pointer;pointer-events: all;">' +
        '</div>' +
        this.$route.meta.title +
        '<span style="padding-left: 3px;font-size: 16px;letter-spacing: 1px;font-style: italic">' +
        this.targetClass.className +
        '</span>'
    )
  },
}
</script>

<style scoped lang="less">
@import './ClassAnalysis';
</style>
