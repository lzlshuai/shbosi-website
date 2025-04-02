<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>关于我们</h3>
        <p>上海波斯塑胶颜料有限公司是一家专业从事塑胶颜料研发、生产和销售的高新技术企业。我们致力于为客户提供高品质的塑胶颜料产品和专业的技术服务。</p>
      </div>
      
      <div class="footer-section">
        <h3>快速链接</h3>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/products">产品中心</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
          <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>联系方式</h3>
        <ul class="contact-list">
          <li>
            <el-icon><Location /></el-icon>
            <span>上海市嘉定区金园一路766号</span>
          </li>
          <li>
            <el-icon><Phone /></el-icon>
            <span>13817275635 / 18221868553</span>
          </li>
          <li>
            <el-icon><Message /></el-icon>
            <span>annlee@shbosi.com</span>
          </li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>关注我们</h3>
        <div class="qrcode">
          <el-image
            src="/wechat-qr.png"
            :preview-src-list="['/wechat-qr.png']"
            fit="cover"
            loading="lazy"
            alt="微信二维码"
          >
            <template #placeholder>
              <div class="image-placeholder">
                <el-icon><Picture /></el-icon>
              </div>
            </template>
          </el-image>
          <p>扫码关注公众号</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>© {{ new Date().getFullYear() }} 上海波斯塑胶颜料有限公司 版权所有</p>
        <p>
          <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备XXXXXXXX号-1</a>
          <span class="divider">|</span>
          <a href="https://www.beian.gov.cn/" target="_blank">
            <el-icon><Lock /></el-icon>
            沪公网安备 XXXXXXXXXXXXX号
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Location, Phone, Message, Picture, Lock } from '@element-plus/icons-vue'
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: #fff;
  padding: 60px 0 0;
  margin-top: 60px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-section h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background: #409EFF;
}

.footer-section p {
  color: #a8b2bc;
  line-height: 1.6;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

.footer-section ul li a {
  color: #a8b2bc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #409EFF;
}

.contact-list li {
  display: flex;
  align-items: center;
  color: #a8b2bc;
}

.contact-list .el-icon {
  margin-right: 10px;
  color: #409EFF;
}

.qrcode {
  text-align: center;
}

.qrcode .el-image {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.qrcode p {
  color: #a8b2bc;
  font-size: 0.9rem;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
  color: #909399;
  font-size: 24px;
}

.footer-bottom {
  margin-top: 40px;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0.2);
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  color: #a8b2bc;
  font-size: 0.9rem;
}

.footer-bottom a {
  color: #a8b2bc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom a:hover {
  color: #409EFF;
}

.divider {
  margin: 0 10px;
  color: #a8b2bc;
}

@media (max-width: 768px) {
  .footer {
    padding: 30px 0 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 15px;
  }

  .footer-section {
    text-align: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .contact-list li {
    justify-content: center;
  }

  .qrcode {
    margin: 0 auto;
  }

  .footer-bottom {
    margin-top: 20px;
  }

  .footer-bottom-content {
    padding: 0 15px;
  }

  .footer-bottom p {
    margin-bottom: 10px;
  }

  .divider {
    display: none;
  }
}
</style> 