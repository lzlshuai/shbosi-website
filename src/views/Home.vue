<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="title">上海波斯塑胶颜料有限公司</h1>
        <p class="subtitle">专业的塑胶颜料研发生产企业</p>
        <div class="cta-buttons">
          <el-button type="primary" size="large" @click="$router.push('/products')">
            查看产品
            <el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
          <el-button size="large" @click="$router.push('/about')">
            了解更多
            <el-icon class="el-icon--right"><More /></el-icon>
          </el-button>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="container">
        <h2 class="section-title">我们的优势</h2>
        <div class="features-grid">
          <div class="feature-card">
            <el-icon class="feature-icon"><Trophy /></el-icon>
            <h3>专业品质</h3>
            <p>30年专注塑胶颜料研发生产，品质值得信赖</p>
          </div>
          <div class="feature-card">
            <el-icon class="feature-icon"><Cpu /></el-icon>
            <h3>技术创新</h3>
            <p>持续创新研发，拥有多项技术专利</p>
          </div>
          <div class="feature-card">
            <el-icon class="feature-icon"><Service /></el-icon>
            <h3>优质服务</h3>
            <p>专业的技术支持团队，为您提供全方位服务</p>
          </div>
          <div class="feature-card">
            <el-icon class="feature-icon"><Connection /></el-icon>
            <h3>全球供应</h3>
            <p>产品远销海内外，服务全球客户</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Connection, ArrowRight, More, Trophy, Cpu, Service } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleContact = () => {
  router.push('/contact')
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4f1ff 50%, #c3e0ff 100%);
}

.hero-section {
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.9) 0%, rgba(236, 245, 255, 0.9) 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #409EFF20 0%, #ffffff50 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.title {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.5rem;
  color: #5a6d7e;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.features-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 60px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #409EFF;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fbff 100%);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 48px;
  color: #409EFF;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.feature-card p {
  color: #5a6d7e;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .title {
    font-size: 1.8rem;
    padding: 0 15px;
  }

  .subtitle {
    font-size: 1rem;
    padding: 0 15px;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 10px;
    padding: 0 15px;
  }

  .features-section {
    padding: 40px 15px;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 20px;
  }

  .feature-icon {
    font-size: 36px;
  }

  .feature-card h3 {
    font-size: 1.2rem;
  }

  .feature-card p {
    font-size: 0.9rem;
  }
}
</style> 