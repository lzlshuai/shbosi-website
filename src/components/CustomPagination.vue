<template>
  <div class="custom-pagination">
    <button 
      class="pagination-btn prev"
      :disabled="currentPage === 1"
      @click="handlePrevClick"
    >
      <div class="arrow-icon prev-icon"></div>
    </button>
    <span class="page-info">{{ currentPage }} / {{ totalPages }}</span>
    <button 
      class="pagination-btn next"
      :disabled="currentPage === totalPages"
      @click="handleNextClick"
    >
      <div class="arrow-icon next-icon"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
}>()

const handlePrevClick = () => {
  if (props.currentPage > 1) {
    emit('update:currentPage', props.currentPage - 1)
  }
}

const handleNextClick = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:currentPage', props.currentPage + 1)
  }
}
</script>

<style scoped>
.custom-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  padding: 10px;
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

.pagination-btn:not(:disabled):hover {
  background: #409EFF;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
}

.pagination-btn:not(:disabled):hover .arrow-icon::before,
.pagination-btn:not(:disabled):hover .arrow-icon::after {
  background-color: #ffffff;
}

.pagination-btn:not(:disabled):active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(64, 158, 255, 0.2);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f5f7fa;
}

.arrow-icon {
  position: relative;
  width: 10px;
  height: 10px;
}

.arrow-icon::before,
.arrow-icon::after {
  content: '';
  position: absolute;
  background-color: #409EFF;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.prev-icon::before {
  top: 0;
  left: 1px;
  width: 10px;
  height: 2px;
  transform: rotate(-45deg);
  transform-origin: left;
}

.prev-icon::after {
  bottom: 0;
  left: 1px;
  width: 10px;
  height: 2px;
  transform: rotate(45deg);
  transform-origin: left;
}

.next-icon::before {
  top: 0;
  right: 1px;
  width: 10px;
  height: 2px;
  transform: rotate(45deg);
  transform-origin: right;
}

.next-icon::after {
  bottom: 0;
  right: 1px;
  width: 10px;
  height: 2px;
  transform: rotate(-45deg);
  transform-origin: right;
}

.page-info {
  font-size: 16px;
  color: #606266;
  font-weight: 500;
  min-width: 50px;
  text-align: center;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .custom-pagination {
    gap: 15px;
    margin: 20px 0;
  }

  .pagination-btn {
    width: 36px;
    height: 36px;
  }

  .page-info {
    font-size: 14px;
  }
}

/* iOS 设备特定优化 */
@supports (-webkit-touch-callout: none) {
  .pagination-btn {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
}
</style> 