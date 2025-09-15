// DOM 元素加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 导航栏滚动效果
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
      navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.padding = '1rem 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
  
  // 移动端导航栏切换
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');
  
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarLinks.classList.toggle('active');
    });
  }
  
  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // 关闭移动导航菜单（如果打开）
        if (navbarLinks.classList.contains('active')) {
          navbarLinks.classList.remove('active');
        }
        
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // 初始化图表（如果页面中有图表）
  initializeCharts();
  
  // 初始化 Mermaid 图表（如果页面中有 Mermaid 图表）
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
});

// 初始化图表函数
function initializeCharts() {
  // 如果页面中有 Chart.js 图表，这里初始化它们
  if (typeof Chart !== 'undefined') {
    // 这里可以添加特定图表的初始化代码
    // 例如：
    
    // 基金净值走势图
    const netValueChartEl = document.getElementById('netValueChart');
    if (netValueChartEl) {
      new Chart(netValueChartEl, {
        type: 'line',
        data: {
          labels: ['2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09'],
          datasets: [{
            label: '易方达国证机器人产业ETF净值',
            data: [1.0, 1.02, 0.95, 0.93, 0.98, 1.05, 1.03, 1.08, 1.06, 0.99, 1.04, 1.12, 1.15, 1.11, 1.18, 1.21, 1.25, 1.30, 1.35, 1.32, 1.38],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false
            }
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            }
          }
        }
      });
    }
    
    // 行业分布饼图
    const industryDistributionChartEl = document.getElementById('industryDistributionChart');
    if (industryDistributionChartEl) {
      new Chart(industryDistributionChartEl, {
        type: 'pie',
        data: {
          labels: ['工业机器人', '服务机器人', '特种机器人', '人工智能', '核心零部件', '其他'],
          datasets: [{
            data: [35, 25, 15, 10, 10, 5],
            backgroundColor: [
              '#3b82f6',
              '#10b981',
              '#f59e0b',
              '#8b5cf6',
              '#ec4899',
              '#6b7280'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    }
    
    // 业绩对比图
    const performanceComparisonChartEl = document.getElementById('performanceComparisonChart');
    if (performanceComparisonChartEl) {
      new Chart(performanceComparisonChartEl, {
        type: 'bar',
        data: {
          labels: ['近1月', '近3月', '近6月', '近1年', '成立以来'],
          datasets: [
            {
              label: '易方达国证机器人产业ETF',
              data: [3.2, 8.5, 15.3, 23.8, 38.0],
              backgroundColor: 'rgba(59, 130, 246, 0.7)'
            },
            {
              label: '沪深300',
              data: [1.8, 5.2, 10.1, 15.3, 22.5],
              backgroundColor: 'rgba(239, 68, 68, 0.7)'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: '收益率(%)'
              }
            }
          },
          plugins: {
            legend: {
              position: 'top'
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return context.dataset.label + ': ' + context.raw + '%';
                }
              }
            }
          }
        }
      });
    }
    
    // 风险指标雷达图
    const riskRadarChartEl = document.getElementById('riskRadarChart');
    if (riskRadarChartEl) {
      new Chart(riskRadarChartEl, {
        type: 'radar',
        data: {
          labels: ['波动率', '夏普比率', '最大回撤', '信息比率', '贝塔系数'],
          datasets: [
            {
              label: '易方达国证机器人产业ETF',
              data: [75, 85, 65, 80, 70],
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 2
            },
            {
              label: '行业平均',
              data: [65, 70, 60, 65, 60],
              backgroundColor: 'rgba(107, 114, 128, 0.2)',
              borderColor: 'rgba(107, 114, 128, 1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 100,
              ticks: {
                display: false
              }
            }
          }
        }
      });
    }
  }
}