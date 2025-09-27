// 浪潮信息财务分析网站 - 主脚本文件
document.addEventListener('DOMContentLoaded', function() {
    // 响应式导航菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 平滑滚动到section
    const navLinks = document.querySelectorAll('a[href^="#"]');
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

    // 滚动时更新活跃导航项
    const sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`a[href="#${id}"]`);
                if (entry.isIntersecting && navLink) {
                    navLinks.forEach(link => link.classList.remove('text-blue-600', 'border-blue-600'));
                    navLink.classList.add('text-blue-600', 'border-blue-600');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // 初始化Chart.js图表（占位符）
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        const ctx = container.getContext('2d');
        // 后续由内容填充agent添加具体图表配置
    });

    // 投资建议标签交互效果
    const recommendationTags = document.querySelectorAll('.recommendation-tag');
    recommendationTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.classList.add('scale-105', 'shadow-lg');
        });
        tag.addEventListener('mouseleave', function() {
            this.classList.remove('scale-105', 'shadow-lg');
        });
    });

    // 风险提示框交互
    const riskAlerts = document.querySelectorAll('.risk-alert');
    riskAlerts.forEach(alert => {
        alert.addEventListener('click', function() {
            this.classList.toggle('bg-red-100');
        });
    });

    console.log('浪潮信息财务分析网站初始化完成');
});