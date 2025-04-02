<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Phone } from '@element-plus/icons-vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const contactDialogVisible = ref(false)

const showContactDialog = () => {
  contactDialogVisible.value = true
}

// 监听联系按钮点击事件
const handleShowContactDialog = () => {
  showContactDialog()
}

onMounted(() => {
  window.addEventListener('show-contact-dialog', handleShowContactDialog)
})

onUnmounted(() => {
  window.removeEventListener('show-contact-dialog', handleShowContactDialog)
})
</script>

<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
    
    <!-- 固定联系按钮 -->
    <el-button 
      class="contact-fixed-btn" 
      type="primary" 
      circle
      @click="showContactDialog"
    >
      <el-icon><Phone /></el-icon>
    </el-button>
    
    <!-- 联系信息弹窗 -->
    <el-dialog
      v-model="contactDialogVisible"
      title="联系我们"
      width="400px"
    >
      <div class="contact-info">
        <div class="contact-item">
          <el-icon><Phone /></el-icon>
          <div class="contact-text">
            <h4>王经理</h4>
            <p>13817275635</p>
          </div>
        </div>
        <div class="contact-item">
          <el-icon><Phone /></el-icon>
          <div class="contact-text">
            <h4>林经理</h4>
            <p>18221868553</p>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="contactDialogVisible = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style>
:root {
  /* iOS 安全区域变量 */
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
  --safe-area-inset-left: env(safe-area-inset-left);
  --safe-area-inset-right: env(safe-area-inset-right);
}

#app {
  width: 100%;
  min-height: 100vh;
  /* 适配 iOS 全面屏 */
  min-height: -webkit-fill-available;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
}

/* 移动端全局优化 */
@media (max-width: 768px) {
  html {
    /* 优化字体渲染 */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* 防止字体自动缩放 */
    -webkit-text-size-adjust: 100%;
    /* 优化触摸体验 */
    touch-action: manipulation;
  }

  body {
    /* 防止页面弹性滚动 */
    overscroll-behavior: none;
    /* 平滑滚动 */
    scroll-behavior: smooth;
  }

  /* 优化点击延迟 */
  * {
    touch-action: manipulation;
  }

  /* 优化按钮点击效果 */
  button, a {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }

  /* 优化输入框 */
  input, textarea {
    -webkit-appearance: none;
    border-radius: 0;
  }
}

/* iOS 设备特定优化 */
@supports (-webkit-touch-callout: none) {
  body {
    /* 防止橡皮筋效果 */
    overscroll-behavior-y: none;
    /* 平滑滚动 */
    -webkit-overflow-scrolling: touch;
  }

  /* 修复 iOS 输入框圆角问题 */
  input, textarea {
    border-radius: 0;
  }
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 60px; /* 为固定导航栏留出空间 */
}

.contact-fixed-btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  width: 50px;
  height: 50px;
  font-size: 24px;
}

.contact-info {
  padding: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.contact-item .el-icon {
  font-size: 24px;
  color: #409EFF;
  margin-right: 15px;
}

.contact-text h4 {
  margin: 0 0 5px 0;
  font-size: 16px;
  color: #303133;
}

.contact-text p {
  margin: 0;
  font-size: 14px;
  color: #606266;
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
