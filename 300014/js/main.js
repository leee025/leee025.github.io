// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // 滚动事件监听
    window.addEventListener('scroll', function() {
        // 导航栏缩小效果
        if (window.scrollY > 50) {
            navbar.style.padding = '8px 0';
        } else {
            navbar.style.padding = '15px 0';
        }
        
        // 更新当前活动导航项
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // 动画效果
    const animatedElements = document.querySelectorAll('.fade-in');
    
    function checkVisibility() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 初始检查

    // 初始化图表
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'neutral',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true
            }
        });
    }
    
    // 初始化任何Chart.js图表
    if (typeof Chart !== 'undefined') {
        // 设置Chart.js默认配置
        Chart.defaults.font.family = '"Noto Sans SC", sans-serif';
        Chart.defaults.font.size = 12;
        Chart.defaults.color = '#333';
        
        // 营收结构饼图
        const revenueCtx = document.getElementById('revenueChart');
        if (revenueCtx) {
            new Chart(revenueCtx, {
                type: 'doughnut',
                data: {
                    labels: ['動力電池', '儲能電池', '消費電池', '其他'],
                    datasets: [{
                        data: [39.43, 39.14, 21.23, 0.20],
                        backgroundColor: [
                            '#3B82F6', // 蓝色 - 动力电池
                            '#10B981', // 绿色 - 储能电池
                            '#F59E0B', // 橙色 - 消费电池  
                            '#6B7280'  // 灰色 - 其他
                        ],
                        borderWidth: 2,
                        borderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 2,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: {
                                usePointStyle: true,
                                padding: 20,
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const label = context.label || '';
                                    const value = context.parsed;
                                    const revenue = {
                                        '動力電池': '191.67億元',
                                        '儲能電池': '190.27億元', 
                                        '消費電池': '103.22億元',
                                        '其他': '0.98億元'
                                    };
                                    return `${label}: ${value}% (${revenue[label]})`;
                                }
                            }
                        }
                    },
                    elements: {
                        arc: {
                            borderWidth: 2
                        }
                    }
                }
            });
        }

        // 产能增长图表
        const capacityCtx = document.getElementById('capacityChart');
        if (capacityCtx) {
            new Chart(capacityCtx, {
                type: 'bar',
                data: {
                    labels: ['2023年底', '2025年目標', '2027年目標'],
                    datasets: [{
                        label: '產能 (GWh)',
                        data: [84, 210, 328],
                        backgroundColor: [
                            '#3498db',
                            '#2ecc71',
                            '#9b59b6'
                        ],
                        borderColor: [
                            '#2980b9',
                            '#27ae60',
                            '#8e44ad'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 2,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: '產能 (GWh)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: '高鎳電池產能擴張規劃',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    }
                }
            });
        }
    }

    // 产能规模对比图表
    const capacityCtx = document.getElementById('capacityComparisonChart');
    if (capacityCtx) {
        new Chart(capacityCtx, {
            type: 'bar',
            data: {
                labels: ['寧德時代', '比亞迪', '亿纬锂能'],
                datasets: [{
                    label: '2024年產能 (GWh)',
                    data: [676, 300, 131.1],
                    backgroundColor: ['#1a5276', '#27ae60', '#f39c12'],
                    borderColor: ['#154360', '#1e8449', '#d68910'],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' GWh';
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            padding: 20,
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y + ' GWh';
                            }
                        }
                    }
                }
            }
        });
    }

    // 营收与净利润成长预测图表
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['2023年', '2024年', '2025年E', '2026年E', '2027年E'],
                datasets: [{
                    label: '营收 (亿元)',
                    data: [417, 486, 580, 720, 850],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y'
                }, {
                    label: '净利润 (亿元)',
                    data: [22, 42, 53, 73, 93],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    yAxisID: 'y1'
                }]
            },
            options: {
                maintainAspectRatio: true,
                aspectRatio: 2,
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: '年份'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: '营收 (亿元)'
                        },
                        beginAtZero: true
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: '净利润 (亿元)'
                        },
                        beginAtZero: true,
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                }
            }
        });
    }
});