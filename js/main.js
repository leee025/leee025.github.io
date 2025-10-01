document.addEventListener('DOMContentLoaded', function () {
    // 未來若要新增網頁，只需要在此陣列中新增一個物件即可
    const projects = [
        {
            title: '億緯鋰能投資分析',
            description: '一個關於億緯鋰能 (300014) 的深入投資分析網頁。',
            url: '300014/index.html',
            category: 'new-energy'
        },
        {
            title: '華魯恆升投資分析',
            description: '一個關於華魯恆升 (600426) 的詳細財務與策略分析。',
            url: '600426/index.html',
            category: 'chemical'
        },
        {
            title: '易方達國証機器人產業ETF(159530)投資分析報告',
            description: '一個關於易方達國証機器人產業ETF(159530) 的詳細財務與策略分析。',
            url: '159530/index.html',
            category: 'robot'
        },
	    {
            title: '科創板新能源ETF(5889600)投資分析報告',
            description: '一個關於科創板新能源ETF(5889600) 的詳細財務與策略分析。',
            url: '588960/index.html',
            category: 'new-energy'
        },
        {
            title: '隆機綠能 - 財務分析與投資建議報',
            description: '一個關於隆機綠能(601012)的財務分析與投資建議報。',
            url: '601012/index.html',
            category: 'new-energy'
		},
		{
            title: '華能國際 - 財務分析與投資評估報告',
            description: '一個關於華能國際(600011)的財務分析與投資建議報告。',
            url: '600011/index.html',
            category: 'new-energy'
		},
		{
            title: '曙光数创 - 財務分析與投資評估報告',
            description: '一個關於曙光数创(872808)的財務分析與投資建議報告。',
            url: '872808/index.html',
            category: 'semiconductor'
		},
		{
            title: '浪潮資訊 - 財務報表分析與投資價值評估',
            description: '一個關於浪潮資訊(000977)的財務分析與投資建議報告。',
            url: '000977/index.html',
            category: 'semiconductor'
		},
		{
            title: '歐菲光 - 財務分析與投資評估報告',
            description: '一個關於歐菲光(002456)的財務分析與投資建議報告。',
            url: '002456/index.html',
            category: 'semiconductor'
		},
		{
            title: '中國神華 - 財務報表分析及投資建議（2023-2025）',
            description: '一個關於中國神華(601088)的財務分析與投資建議報告。',
            url: '601088/index.html',
            category: 'chemical'
		},
		{
            title: '歌爾股份 - 2023-2025年財務報表分析 - 深度投資研究報告',
            description: '一個關於歌爾股份(002241)的財務分析與投資建議報告。',
            url: '002241/index.html',
            category: 'AI'
		},
		{
            title: '國軒高科 - 財務分析與投資價值評估 (2023-2025)',
            description: '一個關於國軒高科(002074)的財務分析與投資建議報告。',
            url: '002074/index.html',
            category: 'new-energy'
		}
    ];

    const container = document.getElementById('project-container');
    const paginationContainer = document.getElementById('pagination');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // 分頁設定
    const projectsPerPage = 6; // 每頁顯示的項目數量
    let currentPage = 1; // 當前頁碼
    let currentCategory = 'all'; // 當前選中的分類
    
    // 根據分類篩選項目
    function getFilteredProjects() {
        if (currentCategory === 'all') {
            return projects;
        }
        return projects.filter(project => project.category === currentCategory);
    }

    // 顯示指定頁碼的項目
    function displayProjects(page) {
        // 清空容器
        container.innerHTML = '';
        
        // 獲取當前分類的項目
        const filteredProjects = getFilteredProjects();
        
        // 計算起始和結束索引
        const startIndex = (page - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        const currentProjects = filteredProjects.slice(startIndex, endIndex);
        
        // 創建並添加項目卡片
        currentProjects.forEach(project => {
            const card = document.createElement('a');
            card.href = project.url;
            card.className = 'project-card';
            card.target = '_blank'; // 在新分頁中開啟

            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="project-link">查看詳情 &rarr;</span>
            `;

            container.appendChild(card);
        });
    }

    // 創建分頁控件
    function createPagination() {
        // 清空分頁容器
        paginationContainer.innerHTML = '';
        
        // 獲取當前分類的項目
        const filteredProjects = getFilteredProjects();
        const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
        
        // 如果沒有項目，不顯示分頁
        if (filteredProjects.length === 0) {
            return;
        }
        
        // 創建"上一頁"按鈕
        const prevButton = document.createElement('button');
        prevButton.textContent = '上一頁';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProjects(currentPage);
                createPagination();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // 創建頁碼按鈕
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = i === currentPage ? 'active' : '';
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayProjects(currentPage);
                createPagination();
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // 創建"下一頁"按鈕
        const nextButton = document.createElement('button');
        nextButton.textContent = '下一頁';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayProjects(currentPage);
                createPagination();
            }
        });
        paginationContainer.appendChild(nextButton);
        
        // 添加頁面信息
        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.textContent = `第 ${currentPage} 頁，共 ${totalPages} 頁`;
        paginationContainer.appendChild(pageInfo);
    }

    // 處理分類按鈕點擊事件
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按鈕的active類
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // 為當前點擊的按鈕添加active類
            button.classList.add('active');
            
            // 更新當前分類
            currentCategory = button.getAttribute('data-category');
            
            // 重置頁碼到第一頁
            currentPage = 1;
            
            // 重新顯示項目和分頁
            displayProjects(currentPage);
            createPagination();
        });
    });

    // 初始化顯示第一頁
    displayProjects(currentPage);
    createPagination();
});
