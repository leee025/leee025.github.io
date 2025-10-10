// 長電科技財務分析 - 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    // 初始化導航欄交互
    initNavigation();
    
    // 初始化圖表（待填充）
    initCharts();
    
    // 初始化滾動動畫
    initScrollAnimations();
    
    // 初始化響應式功能
    initResponsiveFeatures();
});

// 導航欄功能
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 圖表初始化（待填充具體圖表）
function initCharts() {
    // 財務數據圖表將在內容填充時實現
    console.log('圖表初始化準備完成');
}

// 滾動動畫效果
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // 觀察所有section
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// 響應式功能
function initResponsiveFeatures() {
    // 移動端菜單切換
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // 切換菜單圖標
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // 點擊菜單連接後關閉菜單
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// 工具函數：格式化數字為貨幣格式
function formatCurrency(value) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'TWD',
        minimumFractionDigits: 0
    }).format(value);
}

// 工具函數：格式化百分比
function formatPercentage(value) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'percent',
        minimumFractionDigits: 1
    }).format(value);
}