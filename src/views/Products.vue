<template>
  <div class="products">
    <el-row class="page-header">
      <el-col :span="24">
        <h1>产品中心</h1>
        <p>专业黑色母粒解决方案</p>
      </el-col>
    </el-row>

    <el-row class="product-categories">
      <el-col :span="24">
        <el-tabs v-model="activeCategory" @tab-click="handleCategoryChange">
          <el-tab-pane label="全部产品" name="all">
            <product-grid :products="filteredProducts" @show-detail="showProductDetail" />
          </el-tab-pane>
          <el-tab-pane label="汽车应用" name="automotive">
            <product-grid :products="filteredProducts" @show-detail="showProductDetail" />
          </el-tab-pane>
          <el-tab-pane label="电子应用" name="electronics">
            <product-grid :products="filteredProducts" @show-detail="showProductDetail" />
          </el-tab-pane>
          <el-tab-pane label="包装应用" name="packaging">
            <product-grid :products="filteredProducts" @show-detail="showProductDetail" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

    <!-- 产品详情对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="selectedProduct?.model"
      width="60%"
      class="product-dialog"
    >
      <template v-if="selectedProduct">
        <div class="product-detail">
          <h3>产品描述</h3>
          <p>{{ selectedProduct.description }}</p>

          <h3>应用领域</h3>
          <el-tag
            v-for="app in selectedProduct.applications"
            :key="app"
            class="application-tag"
          >
            {{ app }}
          </el-tag>

          <template v-if="selectedProduct.features">
            <h3>产品特点</h3>
            <ul class="feature-list">
              <li v-for="feature in selectedProduct.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </template>

          <h3>技术参数</h3>
          <el-descriptions :column="2" border>
            <el-descriptions-item label="载体">
              {{ selectedProduct.properties.carrier }}
            </el-descriptions-item>
            <el-descriptions-item v-if="selectedProduct.properties.pigmentContent" label="颜料含量">
              {{ selectedProduct.properties.pigmentContent }}
            </el-descriptions-item>
            <el-descriptions-item v-if="selectedProduct.properties.density" label="密度">
              {{ selectedProduct.properties.density }}
            </el-descriptions-item>
            <el-descriptions-item v-if="selectedProduct.properties.mfi" label="熔融指数">
              {{ selectedProduct.properties.mfi }}
            </el-descriptions-item>
            <el-descriptions-item v-if="selectedProduct.properties.moistureContent" label="水分含量">
              {{ selectedProduct.properties.moistureContent }}
            </el-descriptions-item>
          </el-descriptions>

          <template v-if="selectedProduct.properties.compatibility">
            <h3>相容性</h3>
            <el-tag
              v-for="comp in selectedProduct.properties.compatibility"
              :key="comp"
              class="compatibility-tag"
              type="success"
            >
              {{ comp }}
            </el-tag>
          </template>

          <h3>添加比率</h3>
          <p>{{ selectedProduct.additionRate }}</p>

          <h3>包装信息</h3>
          <p>{{ selectedProduct.packaging }}</p>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { products } from '../data/products'
import type { Product } from '../data/products'
import ProductGrid from '../components/ProductGrid.vue'

const activeCategory = ref('all')
const dialogVisible = ref(false)
const selectedProduct = ref<Product | null>(null)

const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') {
    return products
  }
  
  const categoryMap: Record<string, string[]> = {
    automotive: ['汽车', '内饰', '外饰'],
    electronics: ['电子', '家电', 'ABS', 'PS'],
    packaging: ['包装', '薄膜', '管材']
  }

  const keywords = categoryMap[activeCategory.value] || []
  return products.filter(product => 
    keywords.some(keyword => 
      product.applications.some(app => app.includes(keyword)) ||
      product.description.includes(keyword)
    )
  )
})

const handleCategoryChange = () => {
  // 可以添加切换分类时的动画效果
}

const showProductDetail = (product: Product) => {
  selectedProduct.value = product
  dialogVisible.value = true
}
</script>

<style scoped>
.products {
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

.product-categories {
  margin-bottom: 2rem;
}

.product-detail {
  padding: 1rem;
}

.product-detail h3 {
  margin: 1.5rem 0 1rem;
  color: #2c3e50;
  font-size: 1.2rem;
}

.product-detail p {
  color: #5a6d7e;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.application-tag,
.compatibility-tag {
  margin: 0 8px 8px 0;
}

.feature-list {
  list-style-position: inside;
  color: #5a6d7e;
  margin-bottom: 1rem;
}

.feature-list li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .products {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 1.8rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .product-detail {
    padding: 0.5rem;
  }

  .product-detail h3 {
    font-size: 1.1rem;
    margin: 1rem 0 0.5rem;
  }

  .el-dialog {
    width: 90% !important;
  }
}
</style> 