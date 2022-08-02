# 路由说明

## 格式和说明

```ecmascript 6
const routerObject = {
  redirect: noredirect,
  name: 'router-name',
  meta: {
    title: 'title',
    icon: 'a-icon',
    target: '_blank|_self|_top|_parent',
    keepAlive: true,
  }
}
```

`{ Route }` 对象

| 参数     | 说明                                      | 类型   | 默认值 |
| -------- | ----------------------------------------- | ------ | ------ |
| redirect | 重定向地址, 访问这个路由时,自定进行重定向 | string | -      |
| name     | 路由名称, 必须设置,且不能重名             | string | -      |
| meta     | 路由元信息（路由附带扩展信息）            | object | {}     |

`{ Meta }` 路由元信息对象

| 参数                | 说明                                                                 | 类型         | 默认值 |
| ------------------- | -------------------------------------------------------------------- | ------------ | ------ |
| title               | 路由标题, 用于显示面包屑, 页面标题                                   | string       | -      |
| icon                | 路由在 menu 上显示的图标                                             | [string,svg] | -      |
| keepAlive           | 缓存该路由（Vue 具有<keep-alive>标签）                               | boolean      | false  |
| target              | 菜单链接跳转目标（html a 标签的 target）                             | string       | -      |
| hiddenHeaderContent | 隐藏页头组件中的 面包屑和页面标题栏                                  | boolean      | false  |
| permission          | 与项目提供的权限拦截匹配的权限，如果不匹配，则会被禁止访问该路由页面 | array        | []     |
