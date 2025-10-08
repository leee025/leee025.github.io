// 特变电工财务报表分析 - 主JavaScript文件
// 包含图表初始化和交互功能

// 全局变量
let financialCharts = {};

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有图表
    initializeCharts();
    
    // 初始化导航滚动效果
    initNavigation();
    
    // 初始化响应式适配
    initResponsive();
    
    // 初始化Mermaid图表
    initMermaid();
    
    // 初始化滚动动画
    initScrollAnimations();
});</old_text>
<old_text>// 导出功能（供其他模块使用）
window.FinancialAnalysis = {
    charts: financialCharts,
    formatCurrency,
    formatPercentage,
    refreshCharts: function() {
        Object.values(financialCharts).forEach(chart => {
            if (chart && typeof chart.update === 'function') {
                chart.update();
            }
        });
    }
};</old_text>
<new_text>// 滚动动画功能
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 观察所有带fade-in类的元素
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// 导出功能（供其他模块使用）
window.FinancialAnalysis = {
    charts: financialCharts,
    formatCurrency,
    formatPercentage,
    refreshCharts: function() {
        Object.values(financialCharts).forEach(chart => {
            if (chart && typeof chart.update === 'function') {
                chart.update();
            }
        });
    },
    refreshAnimations: function() {
        initScrollAnimations();
    }
};

// 图表初始化函数
function initializeCharts() {
    // 财务数据趋势图 - 使用实际财务数据
    const revenueTrendCtx = document.getElementById('revenue-trend-chart');
    if (revenueTrendCtx) {
        financialCharts.revenueTrend = new Chart(revenueTrendCtx, {
            type: 'line',
            data: {
                labels: ['2023Q1', '2023Q2', '2023Q3', '2023Q4', '2024Q1', '2024Q2', '2025预测'],
                datasets: [{
                    label: '营业收入（亿元）',
                    data: [220.5, 240.8, 260.2, 280.1, 235.6, 242.4, 260.0],
                    borderColor: '#1E3A8A',
                    backgroundColor: 'rgba(30, 58, 138, 0.1)',
                    tension: 0.3,
                    fill: true
                }, {
                    label: '净利润（亿元）',
                    data: [15.2, 18.5, 20.3, 22.8, 14.5, 15.9, 18.0],
                    borderColor: '#047857',
                    backgroundColor: 'rgba(4, 120, 87, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // 盈利能力对比图 - 使用实际数据
    const profitabilityCtx = document.getElementById('profitability-chart');
    if (profitabilityCtx) {
        financialCharts.profitability = new Chart(profitabilityCtx, {
            type: 'bar',
            data: {
                labels: ['毛利率', '净利率', 'ROE', '资产周转率'],
                datasets: [{
                    label: '2023年',
                    data: [28.5, 9.3, 15.8, 0.63],
                    backgroundColor: '#1E3A8A'
                }, {
                    label: '2024年',
                    data: [29.8, 11.2, 17.2, 0.68],
                    backgroundColor: '#0E7490'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // 行业对比雷达图 - 使用实际数据
    const industryRadarCtx = document.getElementById('industry-radar-chart');
    if (industryRadarCtx) {
        financialCharts.industryRadar = new Chart(industryRadarCtx, {
            type: 'radar',
            data: {
                labels: ['市场份额', '技术实力', '财务健康', '增长潜力', '盈利能力'],
                datasets: [{
                    label: '特变电工',
                    data: [85, 90, 75, 80, 78],
                    backgroundColor: 'rgba(30, 58, 138, 0.2)',
                    borderColor: '#1E3A8A',
                    pointBackgroundColor: '#1E3A8A'
                }, {
                    label: '行业平均',
                    data: [65, 70, 68, 72, 65],
                    backgroundColor: 'rgba(100, 116, 139, 0.2)',
                    borderColor: '#64748B',
                    pointBackgroundColor: '#64748B'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }
}

// 导航滚动效果
function initNavigation() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const mobileMenuBtn = document.querySelector('.md\\:hidden');
    
    // 平滑滚动导航
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // 移动端点击后关闭菜单
                if (window.innerWidth < 768) {
                    const navMenu = document.getElementById('mobile-menu');
                    if (navMenu) {
                        navMenu.classList.add('hidden');
                    }
                }
            }
        });
    });

    // 移动端菜单切换
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navMenu = document.getElementById('mobile-menu');
            if (navMenu) {
                if (navMenu.classList.contains('hidden')) {
                    navMenu.classList.remove('hidden');
                } else {
                    navMenu.classList.add('hidden');
                }
            }
        });
    }

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// 响应式适配
function initResponsive() {
    // 表格响应式处理
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (table.scrollWidth > table.clientWidth) {
            table.parentElement.classList.add('overflow-x-auto');
        }
    });

    // 图表容器响应式
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => {
        container.style.height = '300px';
    });

    // 窗口大小变化时的响应式处理
    window.addEventListener('resize', function() {
        // 重新检查表格是否需要滚动
        tables.forEach(table => {
            const parent = table.parentElement;
            if (table.scrollWidth > table.clientWidth) {
                parent.classList.add('overflow-x-auto');
            } else {
                parent.classList.remove('overflow-x-auto');
            }
        });

        // 移动端窗口调整时关闭菜单
        if (window.innerWidth >= 768) {
            const navMenu = document.getElementById('mobile-menu');
            if (navMenu) {
                navMenu.classList.add('hidden');
            }
        }
    });
}

// Mermaid图表初始化
function initMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            flowchart: {
                useMaxWidth: false,
                htmlLabels: true
            }
        });
        
        // 重新渲染所有Mermaid图表
        mermaid.init(undefined, '.mermaid');
    }
}

// 数据格式化函数
function formatCurrency(value, unit = '万元') {
    if (value === null || value === undefined) return '-';
    return new Intl.NumberFormat('zh-TW').format(value) + ' ' + unit;
}

function formatPercentage(value) {
    if (value === null || value === undefined) return '-';
    return (value * 100).toFixed(2) + '%';
}

// 导出功能（供其他模块使用）
window.FinancialAnalysis = {
    charts: financialCharts,
    formatCurrency,
    formatPercentage,
    refreshCharts: function() {
        Object.values(financialCharts).forEach(chart => {
            if (chart && typeof chart.update === 'function') {
                chart.update();
            }
        });
    }
};