<template>
  <div class="bind-op-card">
    <Card>
      <template v-slot:title> 加入班级 </template>
      <template v-slot:main>
        <div class="bind-tips">
          <span>输入<b>6位</b>有效验证码，以加入对应班级</span>
        </div>
        <div class="bind-code-wrapper">
          <input
            type="text"
            class="bind-code-input"
            @focusin="bindCodeInputFocusIn()"
            @focusout="bindCodeInputFocusOut()"
            maxlength="6"
          />
        </div>
      </template>
      <template v-slot:func-bar>
        <span class="mw-card-description">透过<b>"班主任"</b>分发的验证码加入班级，您可<b>加入多个</b>班级</span>
        <button class="mw-card-button">加入</button>
      </template>
    </Card>
  </div>
  <div class="bind-op-card">
    <Card>
      <template v-slot:title> 注册班级 </template>
      <template v-slot:main>
        <div class="bind-tips">
          <span>填写以下<b>必要信息</b>，以注册您的班级</span>
        </div>
        <div class="reg-class-divide">
          <hr class="bind-hr" />
          <span class="reg-class-divide-title">您的班级</span>
        </div>
        <div class="reg-class-form-wrapper">
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">所在学校</div>
            <input type="text" class="reg-class-form-input" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">所属年级</div>
            <input type="text" class="reg-class-form-input" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">班号</div>
            <input type="text" class="reg-class-form-input" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">班级名称</div>
            <input type="text" class="reg-class-form-input" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">班级简介</div>
            <textarea class="reg-class-form-textarea" placeholder="关于这个新班级..."></textarea>
          </div>
        </div>
      </template>
      <template v-slot:func-bar>
        <span class="mw-card-description">您被指派有<b>"班主任"</b>权限，因而你可以在此<b>创建</b>班级</span>
        <button class="mw-card-button">注册</button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/index.ts'

export default {
  name: 'ClassBind',
  components: {
    Card,
  },
  methods: {
    bindCodeInputFocusIn() {
      document.querySelector('.bind-code-wrapper').classList.add('bind-code-focus')
    },
    bindCodeInputFocusOut() {
      document.querySelector('.bind-code-wrapper').classList.remove('bind-code-focus')
    },
  },
}
</script>

<style scoped lang="less">
@import 'ClassBind.less';
</style>
