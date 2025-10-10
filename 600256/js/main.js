// 廣匯能源投資價值分析 - 主JavaScript文件

// 初始化函數 - 頁面加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化導航欄交互
    initNavigation();
    
    // 初始化圖表（待填充）
    initCharts();
    
    // 初始化滾動效果
    initScrollEffects();
    
    // 添加微交互效果
    initMicroInteractions();
});

// 導航欄交互功能
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    const mobileMenuBtn = document.querySelector('.md\\:hidden button');
    const navMenu = document.querySelector('.hidden.md\\:flex');
    
    // 移動端菜單切換
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
        });
    }
    
    // 導航點擊事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // 在移動端點擊後隱藏菜單
            if (navMenu && window.innerWidth < 768) {
                navMenu.classList.add('hidden');
            }
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 滾動時更新活躍導航項目
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-700', 'font-semibold');
            if (link.getAttribute('href') === '#' + currentSection && currentSection) {
                link.classList.add('text-blue-700', 'font-semibold');
            }
        });
    });
}

// 圖表初始化（待填充）
function initCharts() {
    // 此函數將在內容填充階段由其他agent實現
    // 預留財務圖表、業務分析圖表等
}

// 滾動效果初始化
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, observerOptions);
    
    // 觀察所有需要動畫的元素
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-500');
        observer.observe(el);
    });
}

// 微交互效果
function initMicroInteractions() {
    // 卡片懸停效果
    const cards = document.querySelectorAll('.card, .data-card, .risk-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
    
    // 按鈕懸停效果
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// 工具函數：格式化數字（千分位分隔）
function formatNumber(num) {
    return new Intl.NumberFormat('zh-TW').format(num);
}

// 工具函數：格式化百分比
function formatPercentage(num) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'percent',
        minimumFractionDigits: 1
    }).format(num);
}

// 工具函數：格式化貨幣（人民幣）
function formatCurrency(num) {
    return new Intl.NumberFormat('zh-TW', {
        style: 'currency',
        currency: 'CNY',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(num);
}

// 導出函數供外部使用
window.GuanghuiAnalysis = {
    formatNumber,
    formatPercentage,
    formatCurrency,
    initNavigation,
    initCharts
};