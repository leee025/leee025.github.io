// 歌尔股份财务报表分析 - 主JavaScript文件
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动导航
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

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 图表初始化函数
    window.initFinancialCharts = function() {
        // 图表初始化逻辑将在内容填充时实现
        console.log('图表初始化准备完成');
    };

    // 财务数据格式化函数
    window.formatFinancialNumber = function(number, type = 'currency') {
        if (type === 'currency') {
            return new Intl.NumberFormat('zh-TW', {
                style: 'currency',
                currency: 'CNY',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(number);
        } else if (type === 'percent') {
            return new Intl.NumberFormat('zh-TW', {
                style: 'percent',
                minimumFractionDigits: 1,
                maximumFractionDigits: 2
            }).format(number / 100);
        }
        return new Intl.NumberFormat('zh-TW').format(number);
    };

    // 移动端菜单切换
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.hidden.md\\:flex');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('hidden');
            navMenu.classList.toggle('flex');
            navMenu.classList.toggle('absolute');
            navMenu.classList.toggle('top-full');
            navMenu.classList.toggle('left-0');
            navMenu.classList.toggle('w-full');
            navMenu.classList.toggle('bg-white');
            navMenu.classList.toggle('shadow-lg');
            navMenu.classList.toggle('flex-col');
            navMenu.classList.toggle('p-4');
            navMenu.classList.toggle('space-y-4');
        });
    }

    // 响应式表格处理
    function handleResponsiveTables() {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            if (window.innerWidth < 768) {
                table.classList.add('responsive-table');
            } else {
                table.classList.remove('responsive-table');
            }
        });
    }

    window.addEventListener('resize', handleResponsiveTables);
    handleResponsiveTables();

    // 确保所有section正常显示
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
    });

    console.log('歌尔股份财务报表分析页面已加载完成');
});