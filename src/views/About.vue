<template>
  <div class="about">
    <el-row class="page-header">
      <el-col :span="24">
        <h1>关于我们</h1>
        <p>专注黑色母粒研发生产近30年</p>
      </el-col>
    </el-row>

    <el-row class="company-intro">
      <el-col :span="24">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>公司简介</span>
            </div>
          </template>
          <div class="card-content">
            <p>上海波斯塑胶颜料有限公司成立于1995年10月06日，是一家专注于黑色母粒研发、生产和销售的高新技术企业。公司拥有先进的生产设备和专业的研发团队，产品广泛应用于汽车、电子、包装等领域。</p>
            <p>经过近30年的发展，公司已成为行业内具有重要影响力的企业之一，产品远销全球多个国家和地区。</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="timeline-section">
      <el-col :span="24">
        <h2>发展历程</h2>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in timeline"
            :key="index"
            :timestamp="activity.year"
            placement="top"
          >
            <el-card>
              <h4>{{ activity.title }}</h4>
              <p>{{ activity.content }}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>

    <el-row class="culture-section">
      <el-col :span="24">
        <h2>企业文化</h2>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(value, index) in cultureValues" :key="index">
            <el-card class="culture-card">
              <template #header>
                <div class="card-header">
                  <el-icon><component :is="value.icon" /></el-icon>
                  <span>{{ value.title }}</span>
                </div>
              </template>
              <div class="card-content">
                {{ value.content }}
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="vision-section">
      <el-col :span="24">
        <el-card class="vision-card">
          <template #header>
            <div class="card-header">
              <span>企业愿景</span>
            </div>
          </template>
          <div class="card-content">
            <h3>成为全球领先的塑胶颜料解决方案提供商</h3>
            <p>以创新科技赋能材料，为客户创造可持续价值</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Star, Connection, Aim, Trophy } from '@element-plus/icons-vue'

const timeline = [
  {
    year: '1995',
    title: '公司成立',
    content: '上海波斯塑胶颜料有限公司正式成立，开始专注于黑色母粒的研发和生产'
  },
  {
    year: '2005',
    title: '拓展海外市场',
    content: '成功开拓国际市场，产品远销欧美等地区'
  },
  {
    year: '2015',
    title: '技术创新',
    content: '获得多项技术专利，成为行业技术创新的引领者'
  },
  {
    year: '2020',
    title: '智能制造升级',
    content: '引入智能化生产线，提升生产效率和产品质量'
  }
]

const cultureValues = [
  {
    icon: 'Star',
    title: '品质至上',
    content: '追求卓越品质，持续改进工艺'
  },
  {
    icon: 'Connection',
    title: '客户为本',
    content: '以客户需求为导向，提供优质服务'
  },
  {
    icon: 'Aim',
    title: '创新驱动',
    content: '持续创新，引领行业发展'
  }
]
</script>

<style scoped>
.about {
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  color: #666;
}

.company-intro {
  margin-bottom: 3rem;
}

.card-content {
  line-height: 1.8;
}

.timeline-section {
  margin-bottom: 3rem;
}

.timeline-section h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.culture-section {
  margin-bottom: 3rem;
}

.culture-section h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.culture-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.vision-card {
  text-align: center;
  background: linear-gradient(135deg, #409EFF 0%, #36cfc9 100%);
  color: white;
}

.vision-card .card-content h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.vision-card .card-content p {
  font-size: 1.2rem;
  opacity: 0.9;
}
</style> 