# Vue Antd Admin

基于 Vue 3、TypeScript、Vite 和 Ant Design Vue 的后台管理系统模板。

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- TypeScript - JavaScript 的超集
- Vite - 下一代前端构建工具
- Ant Design Vue - 企业级 UI 设计语言和 Vue 组件库
- Vue Router - Vue.js 的官方路由
- Pinia - Vue 的状态管理库

## 功能特性

- 🚀 使用 Vue 3 + TypeScript + Vite 开发
- 📦 集成 Ant Design Vue 组件库
- 🎨 可定制的主题配置
- 🔐 完善的权限管理系统
- 📱 响应式布局，支持多端适配
- 🛠️ 丰富的组件和工具函数
- 📝 详细的代码注释和文档

## 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装

```bash
# 克隆项目
git clone https://github.com/your-username/vue-antd-admin.git

# 进入项目目录
cd vue-antd-admin

# 安装依赖
npm install
```

### 开发

```bash
# 启动开发服务器
npm run dev
```

### 构建

```bash
# 构建生产环境版本
npm run build
```

### 预览

```bash
# 预览生产环境构建
npm run preview
```

## 项目结构

```
vue-antd-admin/
├── public/              # 静态资源
├── src/                 # 源代码
│   ├── api/            # API 接口
│   ├── assets/         # 主题、字体等静态资源
│   ├── components/     # 全局公用组件
│   ├── layouts/        # 全局布局
│   ├── router/         # 路由
│   ├── store/          # 全局状态管理
│   ├── utils/          # 全局公用方法
│   ├── views/          # 所有页面
│   ├── App.vue         # 入口页面
│   └── main.ts         # 入口文件
├── .env                # 环境变量
├── index.html          # HTML 模板
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 组件使用示例

### 空状态组件

```vue
<template>
  <Empty
    image="自定义图片URL"
    description="自定义描述文本"
    :image-style="{ width: '300px' }"
    :show-button="true"
  />
</template>
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

[MIT](LICENSE)

## 联系方式

如有任何问题或建议，请提交 Issue 或联系项目维护者。
