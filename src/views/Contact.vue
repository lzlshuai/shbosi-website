<template>
  <div class="contact">
    <el-row class="page-header">
      <el-col :span="24">
        <h1>联系我们</h1>
        <p>期待与您的合作</p>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12">
        <el-card class="contact-info">
          <template #header>
            <div class="card-header">
              <span>联系方式</span>
            </div>
          </template>
          <div class="card-content">
            <div class="info-item">
              <el-icon><Location /></el-icon>
              <div class="info-content">
                <h3>公司地址</h3>
                <p>上海市嘉定区金园一路766号</p>
              </div>
            </div>
            <div class="info-item">
              <el-icon><Phone /></el-icon>
              <div class="info-content">
                <h3>联系电话</h3>
                <p>王经理：13817275635</p>
                <p>林经理：18221868553</p>
              </div>
            </div>
            <div class="info-item">
              <el-icon><Message /></el-icon>
              <div class="info-content">
                <h3>在线咨询</h3>
                <div class="qr-codes">
                  <div class="qr-code">
                    <el-image
                      src="/images/wang-manager-qr.jpg.png"
                      :preview-src-list="['/images/wang-manager-qr.jpg.png']"
                      fit="cover"
                      loading="lazy"
                      alt="王经理微信二维码"
                      @error="handleQrError('wang')"
                    >
                      <template #placeholder>
                        <div class="image-placeholder">
                          <el-icon><Picture /></el-icon>
                          <p>加载中...</p>
                        </div>
                      </template>
                      <template #error>
                        <div class="image-error">
                          <el-icon><Picture /></el-icon>
                          <p>二维码加载失败</p>
                          <el-button type="primary" size="small" @click="retryLoadQr('wang')">
                            重试
                          </el-button>
                        </div>
                      </template>
                    </el-image>
                    <p>王经理微信</p>
                  </div>
                  <div class="qr-code">
                    <el-image
                      src="/images/lin-manager-qr.jpg.png"
                      :preview-src-list="['/images/lin-manager-qr.jpg.png']"
                      fit="cover"
                      loading="lazy"
                      alt="林经理微信二维码"
                      @error="handleQrError('lin')"
                    >
                      <template #placeholder>
                        <div class="image-placeholder">
                          <el-icon><Picture /></el-icon>
                          <p>加载中...</p>
                        </div>
                      </template>
                      <template #error>
                        <div class="image-error">
                          <el-icon><Picture /></el-icon>
                          <p>二维码加载失败</p>
                          <el-button type="primary" size="small" @click="retryLoadQr('lin')">
                            重试
                          </el-button>
                        </div>
                      </template>
                    </el-image>
                    <p>林经理微信</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12">
        <el-card class="contact-form">
          <template #header>
            <div class="card-header">
              <span>在线留言</span>
            </div>
          </template>
          <div class="card-content">
            <el-form
              ref="formRef"
              :model="form"
              :rules="rules"
              label-width="100px"
            >
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入您的姓名" />
              </el-form-item>
              <el-form-item label="电话" prop="phone">
                <el-input v-model="form.phone" placeholder="请输入您的联系电话" />
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入您的邮箱" />
              </el-form-item>
              <el-form-item label="公司" prop="company">
                <el-input v-model="form.company" placeholder="请输入您的公司名称" />
              </el-form-item>
              <el-form-item label="留言内容" prop="message">
                <el-input
                  v-model="form.message"
                  type="textarea"
                  :rows="4"
                  placeholder="请输入您的留言内容"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm" :loading="loading">提交留言</el-button>
                <el-button @click="resetForm" :disabled="loading">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="map-section">
      <el-col :span="24">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>公司位置</span>
            </div>
          </template>
          <div class="map-container" ref="mapContainer">
            <div v-if="mapLoading" class="map-loading">
              <el-icon class="loading"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none"/></svg></el-icon>
              <p>地图加载中...</p>
            </div>
            <div v-if="mapError" class="map-error">
              <el-icon><Warning /></el-icon>
              <p>地图加载失败</p>
              <el-button type="primary" size="small" @click="initMap">重试</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { Location, Phone, Message, Picture, Warning } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElRow, ElCol, ElCard, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import { useRouter } from 'vue-router'

const formRef = ref<FormInstance>()
const loading = ref(false)
const router = useRouter()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: '',
  message: ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入联系电话', trigger: 'blur' },
    { pattern: /^(\+86)?1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  company: [
    { required: true, message: '请输入公司名称', trigger: 'blur' },
    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  message: [
    { required: true, message: '请输入留言内容', trigger: 'blur' },
    { min: 10, max: 500, message: '长度在 10 到 500 个字符', trigger: 'blur' }
  ]
})

// 地图相关
const mapContainer = ref<HTMLElement | null>(null)
const mapLoading = ref(true)
const mapError = ref(false)

// 地图初始化函数
const initMap = async () => {
  try {
    mapLoading.value = true
    mapError.value = false
    
    // 加载高德地图脚本
    await new Promise((resolve, reject) => {
      if (window.AMap) {
        resolve(window.AMap)
        return
      }
      
      const script = document.createElement('script')
      script.src = `https://webapi.amap.com/maps?v=2.0&key=YOUR_AMAP_KEY&callback=initAMap`
      script.async = true
      script.onerror = reject
      
      window.initAMap = () => {
        resolve(window.AMap)
      }
      
      document.head.appendChild(script)
    })
    
    // 创建地图实例
    const map = new window.AMap.Map(mapContainer.value, {
      zoom: 15,
      center: [121.2517, 31.3839], // 上海市嘉定区金园一路766号的经纬度
    })
    
    // 添加标记点
    const marker = new window.AMap.Marker({
      position: [121.2517, 31.3839],
      title: '上海博实化工有限公司'
    })
    
    map.add(marker)
    
    // 添加信息窗体
    const infoWindow = new window.AMap.InfoWindow({
      content: `
        <div style="padding: 10px;">
          <h4 style="margin: 0 0 5px;">上海博实化工有限公司</h4>
          <p style="margin: 0;">上海市嘉定区金园一路766号</p>
        </div>
      `,
      offset: new window.AMap.Pixel(0, -30)
    })
    
    // 点击标记点时打开信息窗体
    marker.on('click', () => {
      infoWindow.open(map, marker.getPosition())
    })
    
    // 默认打开信息窗体
    infoWindow.open(map, marker.getPosition())
    
    mapLoading.value = false
  } catch (error) {
    console.error('地图加载失败:', error)
    mapError.value = true
    mapLoading.value = false
  }
}

// 防抖处理
const debounce = (fn: Function, delay: number) => {
  let timer: NodeJS.Timeout | null = null
  return function (...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 表单提交
const submitForm = debounce(async () => {
  if (!formRef.value) return
  
  await formRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        // 添加XSS过滤
        const sanitizedForm = {
          name: form.name.replace(/[<>]/g, ''),
          phone: form.phone.replace(/[<>]/g, ''),
          email: form.email.replace(/[<>]/g, ''),
          company: form.company.replace(/[<>]/g, ''),
          message: form.message.replace(/[<>]/g, '')
        }
        
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 保存到localStorage
        const savedForms = JSON.parse(localStorage.getItem('contactForms') || '[]')
        savedForms.push({
          ...sanitizedForm,
          timestamp: new Date().toISOString()
        })
        localStorage.setItem('contactForms', JSON.stringify(savedForms))
        
        ElMessage.success('留言提交成功！我们会尽快与您联系。')
        resetForm()
        router.push('/')
      } catch (error) {
        console.error('提交失败:', error)
        ElMessage.error('提交失败，请稍后重试')
      } finally {
        loading.value = false
      }
    }
  })
}, 500)

// 自动保存
const autoSave = debounce(() => {
  if (form.name || form.phone || form.email || form.company || form.message) {
    localStorage.setItem('contactFormDraft', JSON.stringify(form))
  }
}, 1000)

// 恢复草稿
const restoreDraft = () => {
  const draft = localStorage.getItem('contactFormDraft')
  if (draft) {
    Object.assign(form, JSON.parse(draft))
  }
}

// 监听表单变化
watch(form, () => {
  autoSave()
}, { deep: true })

// 二维码加载错误处理
const qrErrors = ref({
  wechat: false,
  whatsapp: false,
  wang: false,
  lin: false
})

const handleQrError = (type: 'wechat' | 'whatsapp' | 'wang' | 'lin') => {
  qrErrors.value[type] = true
}

const retryLoadQr = (type: 'wechat' | 'whatsapp' | 'wang' | 'lin') => {
  qrErrors.value[type] = false
}

// 预加载二维码
const preloadQrCodes = () => {
  const images = ['/wechat-qr.png', '/whatsapp-qr.png']
  images.forEach(src => {
    const img = new Image()
    img.src = src
  })
}

onMounted(() => {
  restoreDraft()
  initMap()
  preloadQrCodes()
})

const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}
</script>

<style scoped>
.contact {
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

.contact-info {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.info-item .el-icon {
  font-size: 24px;
  color: #409EFF;
  margin-right: 1rem;
  margin-top: 0.2rem;
}

.info-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  color: #303133;
}

.info-content p {
  margin: 0;
  color: #606266;
}

.qr-codes {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem;
}

.qr-code {
  text-align: center;
}

.qr-code h3 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #333;
}

.qr-code .el-image {
  width: 180px;
  height: 180px;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0.5rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 180px;
  background: #f5f7fa;
  border-radius: 4px;
  padding: 1rem;
}

.image-error .el-icon {
  font-size: 24px;
  color: #f56c6c;
  margin-bottom: 0.5rem;
}

.image-error p {
  margin: 0.5rem 0;
  color: #666;
}

.map-section {
  margin-top: 2rem;
}

.map-container {
  width: 100%;
  height: 400px;
  position: relative;
  background: #f5f7fa;
}

.map-loading,
.map-error {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
}

.map-loading .el-icon,
.map-error .el-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.map-error .el-icon {
  color: #f56c6c;
}

.loading {
  animation: rotating 2s linear infinite;
}

.circular {
  height: 32px;
  width: 32px;
  animation: rotating 2s linear infinite;
}

.path {
  stroke: #409eff;
  stroke-width: 3;
  stroke-dasharray: 90,150;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -120px;
  }
}

/* 平板设备断点 */
@media (min-width: 769px) and (max-width: 1024px) {
  .contact {
    padding: 1.5rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1.1rem;
  }

  .info-item {
    margin-bottom: 1.8rem;
  }

  .info-item .el-icon {
    font-size: 22px;
    margin-right: 0.9rem;
  }

  .info-content h3 {
    font-size: 1.15rem;
  }

  .info-content p {
    font-size: 0.95rem;
  }

  .qr-codes {
    gap: 1.5rem;
  }

  .qr-code .el-image {
    width: 130px;
    height: 130px;
  }

  .map-container {
    height: 350px;
  }

  .el-form-item {
    margin-bottom: 1.5rem;
  }

  .el-form-item__label {
    font-size: 0.95rem;
  }

  .el-input__wrapper {
    padding: 0 10px;
  }

  .el-button {
    padding: 10px 20px;
  }
}

/* 触摸设备支持 */
@media (hover: none) {
  .feature-card {
    transition: none;
  }

  .feature-card:active {
    transform: scale(0.98);
  }

  .el-button:active {
    transform: scale(0.98);
  }

  .nav a:active {
    opacity: 0.7;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .contact {
    background-color: #1a1a1a;
  }

  .el-card {
    background-color: #2c2c2c;
    border-color: #3a3a3a;
  }

  .info-content h3 {
    color: #e0e0e0;
  }

  .info-content p {
    color: #b0b0b0;
  }

  .map-container {
    background: #2c2c2c;
  }

  .map-loading,
  .map-error {
    color: #b0b0b0;
  }

  .image-error {
    background: #2c2c2c;
    color: #b0b0b0;
  }
}

/* 打印样式 */
@media print {
  .contact {
    padding: 0;
  }

  .el-card {
    box-shadow: none;
    border: 1px solid #ddd;
  }

  .map-container {
    display: none;
  }

  .qr-codes {
    display: none;
  }

  .el-button {
    display: none;
  }
}

/* iOS设备特定优化 */
@supports (-webkit-touch-callout: none) {
  .contact {
    /* 修复iOS橡皮筋效果 */
    min-height: -webkit-fill-available;
  }

  .el-input__wrapper {
    /* 修复iOS输入框圆角问题 */
    -webkit-appearance: none;
    border-radius: 4px;
  }

  .el-button {
    /* 修复iOS按钮点击高亮 */
    -webkit-tap-highlight-color: transparent;
  }

  /* 修复iOS滚动回弹 */
  .el-card {
    -webkit-overflow-scrolling: touch;
  }
}

/* 安卓设备特定优化 */
@supports not (-webkit-touch-callout: none) {
  .contact {
    /* 修复安卓状态栏遮挡 */
    padding-top: env(safe-area-inset-top);
  }

  .el-input__wrapper {
    /* 修复安卓输入框样式 */
    background-color: #fff;
  }

  /* 修复安卓长按菜单 */
  .el-card {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
  }
}

/* 移动端优化 */
@media (max-width: 768px) {
  .contact {
    padding: 1rem;
    padding-top: calc(1rem + env(safe-area-inset-top));
    padding-bottom: calc(1rem + env(safe-area-inset-bottom));
  }

  .page-header {
    margin-bottom: 1.5rem;
  }

  .page-header h1 {
    font-size: 1.8rem;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }

  .page-header p {
    font-size: 1rem;
    line-height: 1.5;
  }

  .el-card {
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,0.05);
  }

  .info-item {
    padding: 0.8rem 0;
    margin-bottom: 0.5rem;
  }

  .info-item .el-icon {
    font-size: 1.5rem;
    margin-right: 0.8rem;
    padding: 0.5rem;
    background: #f5f7fa;
    border-radius: 8px;
  }

  .info-content h3 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  .info-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0.2rem 0;
  }

  .qr-codes {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
  }

  .qr-code {
    width: 100%;
    max-width: 200px;
  }

  .qr-code .el-image {
    width: 160px;
    height: 160px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .qr-code p {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
  }

  .map-container {
    height: 280px;
    border-radius: 12px;
    overflow: hidden;
  }

  .el-form-item {
    margin-bottom: 1rem;
  }

  .el-form-item__label {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }

  .el-input__wrapper,
  .el-textarea__wrapper {
    padding: 0.5rem;
    border-radius: 8px;
  }

  .el-input__inner,
  .el-textarea__inner {
    font-size: 0.95rem;
  }

  .el-button {
    width: 100%;
    height: 44px;
    font-size: 1rem;
    border-radius: 8px;
    margin-top: 0.5rem;
  }

  /* 优化加载状态 */
  .map-loading,
  .map-error {
    padding: 2rem 1rem;
  }

  .map-loading .el-icon,
  .map-error .el-icon {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .map-loading p,
  .map-error p {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
}

/* iOS 设备特定优化 */
@supports (-webkit-touch-callout: none) {
  .el-input__wrapper,
  .el-textarea__wrapper {
    /* 修复 iOS 输入框阴影问题 */
    -webkit-appearance: none;
  }

  .el-button {
    /* 优化按钮触摸反馈 */
    -webkit-tap-highlight-color: transparent;
  }

  .map-container {
    /* 优化地图触摸滚动 */
    -webkit-overflow-scrolling: touch;
  }
}

/* 横屏模式优化 */
@media (max-width: 768px) and (orientation: landscape) {
  .contact {
    padding: 0.8rem;
    padding-left: calc(0.8rem + env(safe-area-inset-left));
    padding-right: calc(0.8rem + env(safe-area-inset-right));
  }

  .page-header {
    margin-bottom: 1rem;
  }

  .el-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .qr-codes {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .qr-code .el-image {
    width: 120px;
    height: 120px;
  }

  .map-container {
    height: 200px;
  }
}
</style>

<script lang="ts">
// 添加高德地图类型声明
declare global {
  interface Window {
    AMap: any;
    initAMap: () => void;
  }
}
</script> 