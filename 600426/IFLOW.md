# 项目上下文说明 (IFLOW.md)

## 项目概述

这是一个关于华鲁恒升（600426.SH）的财务分析报告网站项目。该项目旨在为投资者提供一份全面的、结构化的财务分析报告，评估华鲁恒升的中期投资价值（600426.SH）。

### 核心内容
- 报告摘要与投资结论
- 公司与行业概况
- 盈利能力分析
- 偿债能力与财务稳健性
- 营运效率与现金流分析
- 成长性与发展潜力
- 估值分析与同业对比
- 投资建议与风险提示

### 技术栈
- **前端框架**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **图表库**: Chart.js, Mermaid.js
- **字体与图标**: Font Awesome, Google Fonts (Noto Sans SC, Noto Serif SC)
- **响应式设计**: 移动优先的响应式布局

## 目录结构

```
summary10/
├── 华鲁恒升财务报表分析.html  # 主网页文件
├── 项目大纲.md                 # 项目规划与内容结构
├── IFLOW.md                    # 本说明文件
├── css/
│   └── styles.css             # 主样式表文件
├── js/
│   └── main.js                # 主JavaScript文件，处理交互和数据可视化初始化
└── images/                    # 图片资源目录
    ├── hero.jpg
    ├── hualu-factory.jpg
    ├── chemical-industry.jpg
    ├── financial-analysis.jpg
    ├── investment-advice.jpg
    ├── hualu-company.jpg
    ├── chemical-production.jpg
    ├── new-materials.jpg
    ├── china-chemical-industry.jpg
    ├── financial-charts.jpg
    ├── profitability-analysis.jpg
    ├── roe-metrics.jpg
    ├── revenue-growth.jpg
    ├── debt-analysis.jpg
    ├── financial-stability.jpg
    ├── cash-flow.jpg
    ├── risk-management.jpg
    ├── operational-efficiency.jpg
    ├── cashflow-analysis.jpg
    ├── inventory-management.jpg
    ├── receivables-management.jpg
    ├── business-growth.jpg
    ├── capacity-expansion.jpg
    ├── rd-innovation.jpg
    ├── new-material-industry.jpg
    ├── future-development.jpg
    ├── stock-valuation.jpg
    ├── pe-ratio-analysis.jpg
    ├── peer-comparison.jpg
    ├── chemical-sector-analysis.jpg
    ├── investment-valuation.jpg
    ├── investment-recommendation.jpg
    ├── risk-warning.jpg
    ├── investment-strategy.jpg
    ├── stock-price.jpg
    ├── policy-risk.jpg
    └── ... (其他相关图片)
```

## 开发规范与约定

### 命名规范
- 文件名使用英文小写字母，单词间用连字符 `-` 分隔。
- CSS 类名使用 BEM (Block Element Modifier) 命名规范。
- JavaScript 变量和函数使用驼峰命名法。

### CSS 设计
- 使用 CSS 变量定义全局颜色和样式，便于维护和主题切换。
- 采用模块化的 CSS 结构，将样式按功能划分为不同的部分。
- 响应式设计使用媒体查询实现，确保在不同设备上的良好体验。

### JavaScript 交互
- 使用原生 JavaScript 实现页面交互效果，如平滑滚动、淡入动画等。
- 图表初始化由 `main.js` 中的 `initializeCharts` 函数统一管理。
- 使用 Intersection Observer API 实现滚动触发动画效果。

## 使用说明

1. 打开 `华鲁恒升财务报表分析.html` 文件即可查看完整的财务分析报告。
2. 网站已实现响应式设计，可在各种设备上正常浏览。
3. 页面包含丰富的交互效果，如平滑滚动导航、元素淡入动画等。
4. 图表部分依赖 Chart.js 和 Mermaid.js 库，需要网络连接以加载外部资源。

## 后续开发建议

1. 根据项目大纲，继续完善各章节的具体内容。
2. 添加更多数据可视化图表，丰富报告的表现形式。
3. 进一步优化响应式设计和交互效果。
4. 考虑增加离线访问支持，提升用户体验。