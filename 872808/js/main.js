// 曙光数创财务分析与投资评估报告 - JavaScript功能

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化滚动监听，用于导航高亮
    initScrollSpy();
    
    // 初始化Mermaid图表
    initMermaid();
    
    // 初始化Chart.js图表占位符
    initChartPlaceholders();
    
    // 初始化页面交互效果
    initPageInteractions();
});

// 滚动监听函数，用于导航高亮
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-700', 'border-b-2', 'border-blue-700');
            link.classList.add('text-gray-700', 'hover:text-blue-700');
            
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.remove('text-gray-700', 'hover:text-blue-700');
                link.classList.add('text-blue-700', 'border-b-2', 'border-blue-700');
            }
        });
    });
}

// 初始化Mermaid图表
function initMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            theme: 'neutral',
            startOnLoad: true,
            securityLevel: 'loose',
            fontFamily: "'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif"
        });
    }
}

// 初始化Chart.js图表占位符
function initChartPlaceholders() {
    // 这里将由具体内容填充时实现真正的图表
    console.log('Chart placeholders ready for data');
}

// 页面交互效果
function initPageInteractions() {
    // 导航栏滚动效果
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'bg-white/95');
            header.classList.remove('bg-white');
        } else {
            header.classList.remove('shadow-md', 'bg-white/95');
            header.classList.add('bg-white');
        }
    });
    
    // 添加卡片悬停效果
    const cards = document.querySelectorAll('.hover-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('shadow-lg');
            this.classList.add('transform', 'transition-transform', 'duration-300', 'scale-[1.01]');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('shadow-lg');
            this.classList.remove('transform', 'transition-transform', 'duration-300', 'scale-[1.01]');
        });
    });
}

// 平滑滚动到指定部分
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}