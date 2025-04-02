<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">
        <h1>上海波斯塑胶颜料有限公司</h1>
      </div>
      <div class="mobile-menu-btn" @click="toggleMenu">
        <el-icon><Menu /></el-icon>
      </div>
      <nav class="nav" :class="{ 'nav-active': isMenuOpen }">
        <router-link to="/" @click="closeMenu">首页</router-link>
        <router-link to="/products" @click="closeMenu">产品中心</router-link>
        <router-link to="/about" @click="closeMenu">关于我们</router-link>
        <router-link to="/contact" @click="closeMenu">联系我们</router-link>
      </nav>
      <div class="contact-btn">
        <el-button type="primary" @click="showContactDialog">
          <el-icon><Phone /></el-icon>
          <span class="btn-text">联系我们</span>
        </el-button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Phone, Menu } from '@element-plus/icons-vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const showContactDialog = () => {
  const event = new CustomEvent('show-contact-dialog')
  window.dispatchEvent(event)
  closeMenu()
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo h1 {
  font-size: 1.5rem;
  color: #409EFF;
  margin: 0;
}

.mobile-menu-btn {
  display: none;
  font-size: 24px;
  color: #409EFF;
  cursor: pointer;
}

.btn-text {
  display: inline-block;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: #606266;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav a:hover,
.nav a.router-link-active {
  color: #409EFF;
}

.contact-btn {
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 10px;
  }

  .logo h1 {
    font-size: 1.2rem;
  }

  .mobile-menu-btn {
    display: block;
  }

  .nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .nav-active {
    transform: translateY(0);
    opacity: 1;
  }

  .nav a {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  .contact-btn {
    display: none;
  }

  .btn-text {
    display: none;
  }
}
</style> 