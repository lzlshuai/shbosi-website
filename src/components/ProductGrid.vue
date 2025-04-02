<template>
  <div class="product-grid">
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
          @click="$emit('show-detail', product)"
        >
          <div class="product-image">
            <el-image
              :src="getProductImage(product.model)"
              fit="cover"
              loading="lazy"
              :alt="product.model"
            >
              <template #error>
                <div class="image-placeholder">
                  <el-icon><Picture /></el-icon>
                </div>
              </template>
            </el-image>
          </div>
          <div class="product-info">
            <h3>{{ product.model }}</h3>
            <p class="description">{{ truncateText(product.description, 50) }}</p>
            <div class="tags">
              <el-tag 
                v-for="(app, index) in product.applications.slice(0, 2)" 
                :key="index"
                size="small"
              >
                {{ app }}
              </el-tag>
              <el-tag 
                v-if="product.applications.length > 2" 
                size="small"
                type="info"
              >
                +{{ product.applications.length - 2 }}
              </el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Picture } from '@element-plus/icons-vue'
import type { Product } from '../data/products'

defineProps<{
  products: Product[]
}>()

defineEmits<{
  (e: 'show-detail', product: Product): void
}>()

const truncateText = (text: string, length: number) => {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

const getProductImage = (model: string) => {
  // 将产品分为两组，交替使用两张样品图
  const group1Products = [
    'PLASBLAK® SA3176',
    'PLASBLAK® XP6633A',
    'PLASBLAK® PE2762',
    'PLASBLAK® UN2005',
    'PLASBLAK® PE6269'
  ]
  
  if (group1Products.includes(model)) {
    return '/images/products/masterbatch-granules-1.jpg'
  }
  
  // 其他产品使用第二张图片
  return '/images/products/masterbatch-granules-2.jpg'
}
</script>

<style scoped>
.product-grid {
  margin-top: 2rem;
}

.product-card {
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image .el-image {
  width: 100%;
  height: 100%;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  color: #909399;
}

.image-placeholder .el-icon {
  font-size: 48px;
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: #2c3e50;
}

.description {
  color: #5a6d7e;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 10px;
  height: 2.8em;
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.el-tag {
  margin-right: 5px;
}

@media (max-width: 768px) {
  .product-image {
    height: 160px;
  }

  .product-info h3 {
    font-size: 1rem;
  }

  .description {
    font-size: 0.8rem;
  }

  .el-tag {
    font-size: 0.7rem;
  }
}
</style> 