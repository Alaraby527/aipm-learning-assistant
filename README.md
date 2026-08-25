# AI 产品经理学习助手

> 🟢 [在线 Demo（静态演示版）]([https://alaraby527.github.io/aipm-learning-assistant/](https://dcniaqwtmoca.aiforce.cloud/app/app_17c9upcbfne))

基于 [AIPM-Wiki](https://github.com/archlizheng/AIPM-Wiki) 知识库构建的交互式学习平台，帮助 AI 产品经理求职者系统学习、刷题和自测。

## 功能特性

- **12 周学习计划**：8 周系统学习 + 4 周面试冲刺，共 84 天任务，支持打卡追踪
- **面试题库**：20 道高频面试题，每题含参考答案、评分要点、追问延伸和延伸阅读
- **能力自测**：15 道选择题覆盖五维能力（技术认知、产品基本功、数据与评估、商业判断、伦理与合规），完成后获取个性化评估
- **知识地图**：197 篇 AIPM-Wiki 文档全文内置，按知识板块分类浏览，支持文档内阅读
- **面经分享**：真实面试经验参考
- **学习原则**：七条核心学习原则和持续学习资源
- **多档案支持**：支持创建多个学习档案，数据本地存储，隐私安全

## 技术栈

- **框架**：React 18 + TypeScript + Vite
- **路由**：React Router v7
- **样式**：Tailwind CSS + shadcn/ui
- **图标**：Lucide React
- **状态管理**：React Context + localStorage
- **UI 组件**：Radix UI primitives

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
src/
├── components/          # UI 组件
│   ├── ui/             # shadcn/ui 基础组件
│   ├── Layout.tsx      # 全局布局
│   ├── Header.tsx      # 顶部导航
│   ├── AppSidebar.tsx  # 侧边栏
│   ├── ProfileSwitcher.tsx  # 档案切换
│   ├── DataManagementDialog.tsx  # 数据管理
│   └── WikiDocViewer.tsx  # 文档阅读器
├── pages/              # 页面组件
│   ├── DashboardPage/       # 仪表盘
│   ├── StudyPlanPage/       # 学习计划
│   ├── InterviewPage/       # 面试题库
│   ├── SelfAssessmentPage/  # 能力自测
│   ├── KnowledgeMapPage/    # 知识地图
│   ├── InterviewExperiencePage/  # 面经分享
│   ├── PrinciplesPage/      # 原则与资源
│   └── NotFoundPage/        # 404
├── hooks/              # 自定义 Hooks
│   ├── useLocalStorage.ts   # localStorage 封装
│   ├── useProfile.tsx       # 学习档案管理
│   ├── useStudyProgress.tsx # 学习进度管理
│   ├── useSync.ts           # 数据同步
│   └── useScrollToTop.ts    # 路由滚动
├── data/               # 数据文件
│   ├── wiki-docs.ts         # 197 篇 Wiki 文档
│   ├── study-plan.ts        # 12 周学习计划
│   ├── interview-questions.ts  # 面试题目
│   ├── interview-answers.ts    # 面试答案
│   ├── self-assessment.ts   # 能力自测题目
│   ├── knowledge-map.ts     # 知识地图
│   ├── knowledge-cards.ts   # 知识卡片
│   ├── interview-experiences.ts  # 面经
│   └── principles.ts        # 学习原则
└── lib/                # 工具函数
    ├── utils.ts
    └── wiki-utils.ts
```

## 数据隐私

所有学习数据（打卡记录、自测答案、档案信息）均保存在浏览器 localStorage 中，不会上传到任何服务器。支持导出 JSON 备份。

## 致谢

- [AIPM-Wiki](https://github.com/archlizheng/AIPM-Wiki) - AI 产品经理知识库（CC BY-NC-SA 4.0）
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Lucide](https://lucide.dev/) - 图标库

## License

MIT
