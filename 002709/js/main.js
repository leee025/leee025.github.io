// 天赐材料财务报表分析项目 - 主JavaScript文件

// 初始化函数
function initPage() {
    // 平滑滚动效果
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 初始化图表（留待后续内容填充）
    initCharts();
}

// 图表初始化函数
function initCharts() {
    // 后续内容填充时实现具体图表
    console.log('图表初始化准备就绪');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initPage);

// 响应式调整
window.addEventListener('resize', () => {
    // 响应式调整逻辑
});

// 导出函数供其他模块使用
window.FinancialAnalysis = {
    initPage,
    initCharts
};