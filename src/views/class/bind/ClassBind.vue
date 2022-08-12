<template>
  <div class="bind-op-card">
    <Card>
      <template v-slot:title> 加入班级</template>
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
            v-model="verifyCode"
          />
        </div>
      </template>
      <template v-slot:func-bar>
        <span class="mw-card-description">透过<b>"班主任"</b>分发的验证码加入班级，您可<b>加入多个</b>班级</span>
        <button class="mw-card-button" @click="handleJoinClassClick()">加入</button>
      </template>
    </Card>
  </div>
  <div class="bind-op-card">
    <Card>
      <template v-slot:title> 注册班级</template>
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
            <input type="text" class="reg-class-form-input" v-model="classInfo.school" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">所属年级</div>
            <input type="text" class="reg-class-form-input" v-model="classInfo.grade" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">班号</div>
            <input type="text" class="reg-class-form-input" v-model="classInfo.classNumber" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">班级名称</div>
            <input type="text" class="reg-class-form-input" v-model="classInfo.className" />
          </div>
          <div class="reg-class-form-item">
            <div class="reg-class-form-label">班级简介</div>
            <textarea
              class="reg-class-form-textarea"
              placeholder="关于这个新班级..."
              v-model="classInfo.classIntro"
            ></textarea>
          </div>
        </div>
      </template>
      <template v-slot:func-bar>
        <span class="mw-card-description">您被指派有<b>"班主任"</b>权限，因而你可以在此<b>创建</b>班级</span>
        <button class="mw-card-button" @click="handleRegClassClick()"><span id="reg-btn-text">注册</span></button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card/index.ts'
import { mapActions } from 'vuex'
import { checkFields } from '@/utils/fieldUtil.ts'

export default {
  name: 'ClassBind',
  components: {
    Card,
  },
  data() {
    return {
      // 绑定
      verifyCode: '',
      // 注册
      classInfo: {
        school: '',
        grade: '',
        classNumber: '',
        className: '',
        classIntro: '',
      },
      btnRegStatus: false,
    }
  },
  methods: {
    ...mapActions(['JoinClassByVerifyCode', 'RegisterClass']),
    bindCodeInputFocusIn() {
      document.querySelector('.bind-code-wrapper').classList.add('bind-code-focus')
    },
    bindCodeInputFocusOut() {
      document.querySelector('.bind-code-wrapper').classList.remove('bind-code-focus')
    },
    handleJoinClassClick() {
      if (this.verifyCode.length !== 6) {
        this.$message.error('长度不正确，请输入6位邀请码！')
        return
      }
      this.JoinClassByVerifyCode(this.verifyCode).then((res) => {
        if (res) {
          this.$message.success('加入成功，您现已位于新班级的教师行列！')
        } else {
          this.$message.error('加入班级失败，请稍候再试...')
        }
      })
    },
    handleRegClassClick() {
      if (this.btnRegStatus) {
        const regBtnText = document.querySelector('#reg-btn-text')
        const range = document.createRange()
        range.selectNode(regBtnText)
        window.getSelection().addRange(range)
        document.execCommand('copy')
        window.getSelection().removeAllRanges()
        this.btnRegStatus = true
        regBtnText.innerText = '已复制到剪贴板'
        setTimeout(() => {
          regBtnText.innerText = '注册'
          this.btnRegStatus = false
        }, 2000)
        return
      }
      if (!checkFields(this.classInfo)) {
        this.$message.error('请填写完整的班级信息！')
        return
      }
      this.RegisterClass(this.classInfo)
        .then(([msg, code]) => {
          this.$message.success(msg)
          document.querySelector('#reg-btn-text').innerText = '邀请码：' + code
          this.btnRegStatus = true
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
  },
}
</script>

<style scoped lang="less">
@import 'ClassBind.less';
</style>
