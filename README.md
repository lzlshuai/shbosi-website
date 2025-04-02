# 上海波斯塑胶颜料有限公司官网

## 项目简介
这是上海波斯塑胶颜料有限公司的官方网站，使用 Vue.js 3 + TypeScript + Element Plus 开发。网站展示了公司的产品信息、企业文化和联系方式等内容。

## 技术栈
- Vue.js 3
- TypeScript
- Element Plus
- Vue Router
- Three.js (3D动画)
- GSAP (动画效果)
- TailwindCSS
- Vite

## 功能特点
- 响应式设计，适配各种设备
- 3D粒子动画效果
- 产品展示和详情页
- 在线留言表单
- 企业文化和历史展示
- 多语言支持（中文/英文）

## 开发环境设置

### 前置要求
- Node.js 16+
- npm 7+

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 项目结构
```
bosi-website/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 公共组件
│   ├── views/          # 页面组件
│   ├── router/         # 路由配置
│   ├── store/          # 状态管理
│   └── utils/          # 工具函数
├── public/             # 公共资源
└── package.json        # 项目配置
```

## 部署说明
1. 构建项目：
   ```bash
   npm run build
   ```
2. 将 `dist` 目录下的文件部署到服务器

## 维护说明
- 产品信息更新：修改 `src/views/Products.vue` 中的产品数据
- 公司信息更新：修改 `src/views/About.vue` 中的相关内容
- 联系方式更新：修改 `src/components/Header.vue` 和 `src/components/Footer.vue` 中的联系信息

## 浏览器支持
- Chrome (推荐)
- Firefox
- Safari
- Edge

## 版权信息
© 2024 上海波斯塑胶颜料有限公司 版权所有
