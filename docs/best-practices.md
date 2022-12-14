# 最佳实践

## 文档

> 记录各技术应用的最佳实践方案，少走弯路。

## 方案

1. ### Vuex

```vue
<template>
  <div>
    <h1>Hello World !</h1>
    <h1>{{ items }}</h1>
    <button @click="resetRouter">CLICK ME</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { resetRouter } from '@/router/router'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Test',
  computed: {
    // items:,
    ...mapGetters(['items']),
  },
  methods: {
    resetRouter,
    ...mapMutations({
      pushItem: 'PUSH_ITEM_TO_ITEMS',
    }),
    ...mapActions(['pushItemToItems']),
  },
}
</script>

<style scoped></style>
```

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 5,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'no-tabs': 0,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      2,
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    'no-delete-var': 2,
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false,
      },
    ],
    'template-curly-spacing': 'off',
    indent: 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
```

2. ### Card 组件（共有 3 个插槽）

```vue
<Card>
    <template v-slot:title>
      标题
    </template>
    <template v-slot:main>
      <div>
        主内容
      </div>
    </template>
    <template v-slot:func-bar>
      <span class="mw-card-description">描述</span>
      <button class="mw-card-button">按钮</button>
    </template>
  </Card>
```
