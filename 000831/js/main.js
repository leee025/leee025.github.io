// 中国稀土财务报表分析 - 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 初始化滚动监听和导航高亮
    initScrollNavigation();
    
    // 初始化图表（预留位置）
    initCharts();
    
    // 初始化动画效果
    initAnimations();
});

// 滚动导航功能
function initScrollNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-blue-700', 'border-blue-700');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('text-blue-700', 'border-blue-700');
            }
        });
    });
}

// 初始化图表（预留函数）
function initCharts() {
    // Chart.js图表将在内容填充时初始化
    console.log('图表初始化函数已准备');
}

// 动画效果初始化
function initAnimations() {
    // 数字增长动画
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                if (target.classList.contains('counter')) {
                    animateCounter(target);
                }
                if (target.classList.contains('fade-in')) {
                    target.classList.add('animate-fadeIn');
                }
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.counter, .fade-in').forEach(el => {
        observer.observe(el);
    });
}

// 数字增长动画函数
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2秒
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// 响应式导航菜单切换
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// 平滑滚动到指定section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}