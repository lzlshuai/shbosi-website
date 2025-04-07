<template>
  <div class="contact">
    <div class="page-header">
      <h1>联系我们</h1>
      <p>随时为您提供专业的技术支持和服务</p>
    </div>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12">
        <el-card class="contact-info">
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
              <p>13817275635 / 18221868553</p>
            </div>
          </div>

          <div class="info-item">
            <el-icon><Message /></el-icon>
            <div class="info-content">
              <h3>在线咨询</h3>
              <div class="qr-codes">
                <div class="qr-code">
                  <el-image
                    src="/bosi-website/images/lin-manager-qr.jpg.png"
                    :preview-src-list="['/bosi-website/images/lin-manager-qr.jpg.png']"
                    fit="contain"
                    loading="lazy"
                    alt="林经理微信二维码"
                    class="qr-img"
                  >
                    <template #error>
                      <div class="image-error">
                        <el-icon><ChatDotRound /></el-icon>
                        <p>扫码添加微信</p>
                      </div>
                    </template>
                  </el-image>
                  <p>林经理微信</p>
                </div>
                <div class="qr-code">
                  <el-image
                    src="/bosi-website/images/wang-qrcode-new.jpg.png"
                    :preview-src-list="['/bosi-website/images/wang-qrcode-new.jpg.png']"
                    fit="contain"
                    loading="lazy"
                    alt="王经理微信二维码"
                    class="qr-img"
                  >
                    <template #error>
                      <div class="image-error">
                        <el-icon><ChatDotRound /></el-icon>
                        <p>扫码添加微信</p>
                      </div>
                    </template>
                  </el-image>
                  <p>王经理微信</p>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12">
        <el-card class="contact-form">
          <el-form
            ref="formRef"
            :model="form"
            :rules="rules"
            label-position="top"
          >
            <el-form-item label="姓名" prop="name">
              <el-input v-model="form.name" placeholder="请输入您的姓名" />
            </el-form-item>
            <el-form-item label="电话" prop="phone">
              <el-input v-model="form.phone" placeholder="请输入您的联系电话" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email" placeholder="请输入您的邮箱地址" />
            </el-form-item>
            <el-form-item label="咨询内容" prop="message">
              <el-input
                v-model="form.message"
                type="textarea"
                :rows="4"
                placeholder="请输入您的咨询内容"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(formRef)">
                提交咨询
              </el-button>
              <el-button @click="resetForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { Location, Phone, Message, ChatDotRound } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const formRef = ref<FormInstance | null>(null)
const loading = ref(false)
const router = useRouter()

const form = reactive({
  name: '',
  phone: '',
  email: '',
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
  message: [
    { required: true, message: '请输入留言内容', trigger: 'blur' },
    { min: 10, max: 500, message: '长度在 10 到 500 个字符', trigger: 'blur' }
  ]
})

// 表单提交
const submitForm = (form: FormInstance | null) => {
  if (!form) return
  
  form.validate((valid: boolean) => {
    if (valid) {
      loading.value = true
      try {
        // 添加XSS过滤
        const sanitizedForm = {
          name: form.model.name.replace(/[<>]/g, ''),
          phone: form.model.phone.replace(/[<>]/g, ''),
          email: form.model.email.replace(/[<>]/g, ''),
          message: form.model.message.replace(/[<>]/g, '')
        }
        
        // 模拟API调用
        setTimeout(() => {
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
          loading.value = false
        }, 1000)
      } catch (error) {
        console.error('提交失败:', error)
        ElMessage.error('提交失败，请稍后重试')
        loading.value = false
      }
    }
  })
}

// 自动保存
const autoSave = () => {
  if (form.name || form.phone || form.email || form.message) {
    localStorage.setItem('contactFormDraft', JSON.stringify(form))
  }
}

// 恢复草稿
const restoreDraft = () => {
  const draft = localStorage.getItem('contactFormDraft')
  if (draft) {
    try {
      const draftData = JSON.parse(draft)
      Object.assign(form, draftData)
    } catch (e) {
      console.error('解析草稿数据失败', e)
    }
  }
}

// 监听表单变化
watch(form, () => {
  autoSave()
}, { deep: true })

onMounted(() => {
  restoreDraft()
})

const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
  // 清除草稿
  localStorage.removeItem('contactFormDraft')
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
}

.info-content {
  flex: 1;
}

.info-content h3 {
  font-size: 1.2rem;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
}

.info-content p {
  margin: 0;
  color: #5a6d7e;
}

.qr-codes {
  display: flex;
  gap: 20px;
  margin-top: 1rem;
}

.qr-code {
  text-align: center;
}

.qr-code .el-image {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #eee;
}

.qr-code p {
  margin-top: 0.5rem;
  color: #5a6d7e;
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #f5f7fa;
  border-radius: 4px;
}

.image-placeholder .el-icon {
  font-size: 24px;
  color: #909399;
  margin-bottom: 0.5rem;
}

.image-placeholder p {
  margin: 0.5rem 0;
  color: #909399;
}

.image-error {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  color: #409EFF;
}

.image-error .el-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.image-error p {
  margin: 0.5rem 0;
  color: #666;
}

.contact-form {
  height: 100%;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .contact {
    padding: 1rem;
  }

  .page-header {
    margin-bottom: 2rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .page-header p {
    font-size: 1rem;
  }

  .qr-codes {
    flex-direction: column;
    align-items: center;
  }

  .qr-code {
    margin-bottom: 1rem;
  }

  .qr-code .el-image {
    width: 100px;
    height: 100px;
  }

  .contact-form {
    margin-top: 1rem;
  }
}

/* 暗黑模式适配 */
@media (prefers-color-scheme: dark) {
  .page-header h1 {
    color: #f0f0f0;
  }

  .page-header p {
    color: #b0b0b0;
  }

  .info-content h3 {
    color: #f0f0f0;
  }

  .info-content p {
    color: #b0b0b0;
  }

  .qr-code p {
    color: #b0b0b0;
  }

  .image-placeholder {
    background: #2c2c2c;
  }

  .image-error {
    background: #2c2c2c;
    color: #b0b0b0;
  }
}

.qr-box {
  width: 120px;
  height: 120px;
  border: 2px solid #dcdfe6;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  margin-bottom: 10px;
}

.qr-icon {
  font-size: 48px;
  color: #409EFF;
  margin-bottom: 10px;
}

.qr-box p {
  color: #606266;
  font-size: 14px;
}

.qr-img {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  border: 2px solid #409EFF;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.qr-img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
</style> 