// 欧菲光财务分析项目 - 主JavaScript文件
// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    // 初始化Mermaid图表
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true
            }
        });
    }
    
    // 初始化滚动监听
    initScrollObserver();
    
    // 初始化图表
    initCharts();
    
    // 初始化表格响应式处理
    initResponsiveTables();
    
    // 初始化移动端菜单
    initMobileMenu();
});

// 滚动观察器 - 用于section导航高亮
function initScrollObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        let currentSection = '';
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSection = entry.target.id;
            }
        });
        
        // 更新导航高亮
        navLinks.forEach(link => {
            link.classList.remove('text-blue-600', 'font-semibold');
            link.classList.add('text-gray-600');
            
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.remove('text-gray-600');
                link.classList.add('text-blue-600', 'font-semibold');
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -70% 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// 初始化财务图表
function initCharts() {
    // 这里预留图表初始化代码
    // 后续会由其他agent填充具体的图表配置
    console.log('图表初始化完成 - 等待具体数据填充');
}

// 响应式表格处理
function initResponsiveTables() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('overflow-x-auto')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'overflow-x-auto rounded-lg border border-gray-200';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
}

// 平滑滚动到指定section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 显示/隐藏详细数据
function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details) {
        details.classList.toggle('hidden');
    }
}

// 格式化财务数据
function formatFinancialNumber(value, isPercentage = false) {
    if (typeof value !== 'number') return value;
    
    if (isPercentage) {
        return value.toFixed(2) + '%';
    }
    
    if (Math.abs(value) >= 100000000) {
        return (value / 100000000).toFixed(2) + '亿';
    } else if (Math.abs(value) >= 10000) {
        return (value / 10000).toFixed(2) + '万';
    } else {
        return value.toFixed(2);
    }
}

// 移动端菜单功能
function initMobileMenu() {
    const menuButton = document.getElementById('mobileMenuButton');
    const navMenu = document.querySelector('.md\\:flex');
    
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function() {
            const isHidden = navMenu.classList.contains('hidden');
            
            if (isHidden) {
                navMenu.classList.remove('hidden');
                navMenu.classList.add('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4', 'border-t', 'z-50');
                menuButton.innerHTML = '<i class="fas fa-times text-xl"></i>';
            } else {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4', 'border-t', 'z-50');
                menuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            }
        });
        
        // 点击导航链接后关闭菜单（移动端）
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4', 'border-t', 'z-50');
                menuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            });
        });
        
        // 点击页面其他地方关闭菜单
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !menuButton.contains(event.target) && !navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
                navMenu.classList.remove('flex', 'flex-col', 'absolute', 'top-full', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'p-4', 'border-t', 'z-50');
                menuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
            }
        });
    }
}

// 导出功能（后续扩展）
function exportReport() {
    // 后续实现导出PDF或Excel功能
    console.log('导出功能预留');
}