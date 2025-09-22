// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    // 滚动监听，高亮当前导航项
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-600', 'font-bold', 'border-b-2', 'border-blue-600');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('text-blue-600', 'font-bold', 'border-b-2', 'border-blue-600');
            }
        });
        
        // 导航栏滚动效果
        if (window.scrollY > 100) {
            header.classList.add('bg-white/95', 'shadow-md');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-white/95', 'shadow-md');
            header.classList.add('bg-transparent');
        }
    });
    
    // 平滑滚动到锚点
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // 初始化Mermaid图表
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'neutral',
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
            },
            themeVariables: {
                primaryColor: '#005C8A',
                primaryTextColor: '#fff',
                primaryBorderColor: '#005C8A',
                lineColor: '#4A89DC',
                secondaryColor: '#00A878',
                tertiaryColor: '#F59E0B'
            }
        });
    }
    
    // 初始化滚动动画
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// 图表初始化函数 (将在Chart.js加载后由特定section调用)
function initCharts() {
    // 图表将由各个section内容填充时初始化
    console.log('Charts ready to initialize');
}