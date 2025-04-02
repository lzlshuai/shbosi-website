<template>
  <div class="product-list">
    <el-row :gutter="20">
      <el-col 
        v-for="product in products" 
        :key="product.model"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
      >
        <el-card 
          class="product-card"
          :body-style="{ padding: '0px' }"
          @click="showDetail(product)"
        >
          <el-image
            :src="product.image"
            :preview-src-list="[product.image]"
            fit="cover"
            loading="lazy"
            :alt="product.name"
            class="product-image"
          >
            <template #placeholder>
              <div class="image-placeholder">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
          <div class="product-info">
            <h3>{{ product.model }}</h3>
            <p class="application">{{ product.application }}</p>
            <div class="specs">
              <span>载体: {{ product.carrier }}</span>
              <span>含量: {{ product.pigmentContent }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Box, Picture } from '@element-plus/icons-vue'

interface Product {
  model: string
  application: string
  carrier: string
  pigmentContent: string
  image: string
  name: string
}

defineProps<{
  products: Product[]
}>()

const emit = defineEmits<{
  (e: 'show-detail', product: Product): void
}>()

const showDetail = (product: Product) => {
  emit('show-detail', product)
}
</script>

<style scoped>
.product-list {
  margin-top: 2rem;
}

.product-card {
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  height: 200px;
  background: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image .el-icon {
  font-size: 48px;
  color: #409EFF;
}

.product-info {
  padding: 1rem;
}

.product-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #303133;
}

.application {
  color: #606266;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.specs {
  display: flex;
  justify-content: space-between;
  color: #909399;
  font-size: 0.8rem;
}

.image-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  background: #f5f7fa;
  color: #909399;
  font-size: 24px;
}
</style> 