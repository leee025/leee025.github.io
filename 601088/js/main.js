// 中国神华财务报表分析网站 - 主要JavaScript功能

// 平滑滚动导航功能
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏链接平滑滚动
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏高亮当前section
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('text-blue-900', 'font-bold');
            item.classList.add('text-gray-600');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.remove('text-gray-600');
                item.classList.add('text-blue-900', 'font-bold');
            }
        });
    });

    // 图表初始化占位符
    console.log('图表初始化准备完成，等待数据填充');
    
    // 移动端菜单切换（如果需要）
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
});

// 财务数据格式化函数
function formatFinancialNumber(number, isPercentage = false) {
    if (typeof number !== 'number') return number;
    
    if (isPercentage) {
        return number >= 0 ? 
            `<span class="text-green-600 font-semibold">+${number.toFixed(2)}%</span>` : 
            `<span class="text-red-600 font-semibold">${number.toFixed(2)}%</span>`;
    } else {
        // 格式化大数字（亿为单位）
        if (Math.abs(number) >= 100000000) {
            return `¥${(number / 100000000).toFixed(2)}亿`;
        } else if (Math.abs(number) >= 10000) {
            return `¥${(number / 10000).toFixed(2)}万`;
        } else {
            return `¥${number.toFixed(2)}`;
        }
    }
}

// 防抖函数，用于优化滚动性能
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}