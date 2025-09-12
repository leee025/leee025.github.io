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
        }
        // {
        //     title: '新專案標題',
        //     description: '新專案的簡短描述。',
        //     url: '新專案資料夾/檔案名.html'
        // },
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
