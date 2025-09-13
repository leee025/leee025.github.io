// 隆機綠能財務分析報告 - 主要JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
    // 初始化Mermaid圖表
    initializeMermaid();
    
    // 初始化滾動動畫
    initializeScrollAnimations();
    
    // 初始化導航欄活動狀態
    initializeNavbarActiveState();
    
    // 初始化響應式菜單
    initializeResponsiveMenu();
});

// 初始化Mermaid圖表
function initializeMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'cardinal'
            },
            securityLevel: 'loose'
        });
    }
}

// 初始化滾動動畫
function initializeScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // 初始檢查元素是否在視口中
    checkFadeElements();
    
    // 滾動時檢查元素是否在視口中
    window.addEventListener('scroll', checkFadeElements);
    
    function checkFadeElements() {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.8;
        
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            }
        });
    }
}

// 初始化導航欄活動狀態
function initializeNavbarActiveState() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar-links a');
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    function updateActiveNavLink() {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            const scrollY = window.scrollY;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSectionId) {
                link.classList.add('active');
            }
        });
    }
}

// 初始化響應式菜單
function initializeResponsiveMenu() {
    // 這裡可以添加響應式菜單的代碼，如果需要的話
}

// 初始化圖表的函數，需要在相應的部分調用
function initializeCharts() {
    // 這裡將根據具體需求初始化各種圖表
}

// 平滑滾動到指定元素
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 獲取當前日期，格式化為YYYY年MM月DD日
function getCurrentFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    return `${year}年${month}月${day}日`;
}

// 更新報告日期
function updateReportDate() {
    const reportDateElement = document.getElementById('report-date');
    if (reportDateElement) {
        reportDateElement.textContent = `報告生成日期: ${getCurrentFormattedDate()}`;
    }
}

// 頁面加載完成後更新報告日期
window.addEventListener('load', updateReportDate);