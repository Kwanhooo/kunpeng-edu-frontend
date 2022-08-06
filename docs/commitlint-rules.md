# Commitlint 规则

### 作用

Commitlint 会在git commit时检查message是否符合规则（Y => 成功提交，N => 由Husky阻断）

### 格式

```shell
# 此时会触发先前注册的钩子，执行代码格式化、代码检查、代码提交等操作
git commit -m <type>[optional scope]: <description>

# 示例
git commit -m "feat: 新增动态路由功能"
```

### `type`的允许值

- `feat`：新增功能
- `fix`：bug 修复
- `docs`：文档更新
- `style`：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
- `refactor`：重构代码(既没有新增功能，也没有修复 bug)
- `perf`：性能, 体验优化
- `test`：新增测试用例或是更新现有测试
- `build`：主要目的是修改项目构建系统(例如 webpack 的配置等)的提交
- `ci`：主要目的是修改项目继续集成流程(例如 Travis，GitHub CI 等)的提交
- `chore`：不属于以上类型的其他类型，比如构建流程, 依赖管理
- `revert`：回滚某个更早之前的提交