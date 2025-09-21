document.addEventListener('DOMContentLoaded', function () {
    // 未來若要新增網頁，只需要在此陣列中新增一個物件即可
    const projects = [
        {
            title: '億緯鋰能投資分析',
            description: '一個關於億緯鋰能 (300014) 的深入投資分析網頁。',
            url: '300014/index.html'
        },
        {
            title: '華魯恆升投資分析',
            description: '一個關於華魯恆升 (600426) 的詳細財務與策略分析。',
            url: '600426/index.html'
        },
        {
            title: '易方達國証機器人產業ETF(159530)投資分析報告',
            description: '一個關於易方達國証機器人產業ETF(159530) 的詳細財務與策略分析。',
            url: '159530/index.html'
        },
	    {
            title: '科創板新能源ETF(5889600)投資分析報告',
            description: '一個關於科創板新能源ETF(5889600) 的詳細財務與策略分析。',
            url: '588960/index.html'
        },
        {
            title: '隆機綠能 - 財務分析與投資建議報',
            description: '一個關於隆機綠能(601012)的財務分析與投資建議報。',
            url: '601012/index.html'
		},
		{
            title: '曙光数创 - 財務分析與投資評估報告',
            description: '一個關於曙光数创(872808)的財務分析與投資建議報告。',
            url: '872808/index.html'
		}
    ];

    const container = document.getElementById('project-container');

    projects.forEach(project => {
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
});
