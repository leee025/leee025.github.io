// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 导航栏滚动效果
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  
  // 滚动监听
  window.addEventListener('scroll', function() {
    // 导航栏背景变化
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // 高亮当前浏览的部分
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // 平滑滚动
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  
  // 初始化图表 (如果页面中有图表)
  initializeCharts();
  
  // 初始化 Mermaid 图表 (如果使用)
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      flowchart: { 
        useMaxWidth: true, 
        htmlLabels: true 
      }
    });
  }
});

// 图表初始化函数 (可根据需要扩展)
function initializeCharts() {
  // 检查是否有Chart.js图表需要初始化
  if (typeof Chart !== 'undefined') {
    // 这里可以添加具体的图表初始化代码
    console.log('Chart.js is available for use');
  }
}

// 格式化数字为货币格式
function formatCurrency(value, currency = 'USD') {
  return new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(value);
}

// 格式化百分比
function formatPercent(value) {
  return new Intl.NumberFormat('zh-TW', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value / 100);
}

// 日期格式化
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('zh-TW').format(date);
}