document.addEventListener('DOMContentLoaded', function() {
  // 平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // 更新活动导航链接
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // 滚动监听，更新活动导航链接
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.pageYOffset;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = `#${section.id}`;
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === currentSectionId) {
        link.classList.add('active');
      }
    });
  });
  
  // 淡入效果
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  
  fadeElements.forEach(element => {
    fadeInObserver.observe(element);
  });
  
  // 初始化 Mermaid 图表
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      }
    });
  }
  
  // 初始化 Chart.js 图表
  initializeCharts();
});

function initializeCharts() {
  // 这个函数将在后续实现各种图表时使用
  // 各个图表的初始化代码将在对应的部分实现
}

// 格式化数字函数
function formatNumber(num) {
  return new Intl.NumberFormat('zh-HK').format(num);
}

// 格式化百分比函数
function formatPercent(num) {
  return (num * 100).toFixed(2) + '%';
}

// 格式化日期函数
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-HK', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// 获取当前日期时间
function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleDateString('zh-HK', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// 更新报告时间戳
function updateTimestamp() {
  const timestampElements = document.querySelectorAll('.timestamp');
  const currentDateTime = getCurrentDateTime();
  
  timestampElements.forEach(element => {
    element.textContent = `報告生成時間：${currentDateTime}`;
  });
}

// 页面加载完成后更新时间戳
window.addEventListener('load', updateTimestamp);