// EXPORTS: IPrinciple, IResourceCategory, MOCK_PRINCIPLES, MOCK_RESOURCES

export interface IPrinciple {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface IResourceCategory {
  id: string;
  name: string;
  items: {
    id: string;
    name: string;
    description: string;
  }[];
}

export const MOCK_PRINCIPLES: IPrinciple[] = [
  { id: '1', number: 1, title: '不要背答案', description: '参考答案给的是思考框架，面试官考的是你的思考过程。' },
  { id: '2', number: 2, title: '动手 > 看课', description: '一个亲手做过的 RAG Demo + 评测集，远比罗列课程证书有说服力。' },
  { id: '3', number: 3, title: 'PM 视角学技术', description: '不堆公式，只搞懂"能做什么、边界在哪、成本如何、产品上怎么用"。' },
  { id: '4', number: 4, title: '重视追问延伸', description: '每道题的「追问延伸」是面试官最可能 follow-up 的方向，务必准备。' },
  { id: '5', number: 5, title: '判断 > 执行', description: '把练习预算留给选型备忘、评测集、badcase 归因、成本取舍这类"判断证据"。' },
  { id: '6', number: 6, title: '简历不越档', description: '"调过 ChatGPT API" 不要写成"深度熟悉大模型"。' },
  { id: '7', number: 7, title: '持续产品体验', description: '每周至少深度体验 1 个新 AI 产品，记录"猜技术方案→猜商业模式→验证"。' },
];

export const MOCK_RESOURCES: IResourceCategory[] = [
  {
    id: 'tools',
    name: '学习工具',
    items: [
      { id: 't1', name: 'Obsidian', description: 'AIPM-Wiki 仓库本身就是 Obsidian vault，clone 后打开可获得双向链接和知识图谱体验' },
      { id: 't2', name: 'Vibe Coding 工具', description: 'Cursor / Claude Code / 通义灵码等，用于快速做 Demo' },
    ],
  },
  {
    id: 'sources',
    name: '持续信息源',
    items: [
      { id: 's1', name: '书籍', description: '详见 AIPM-Wiki 05-resources/books.md' },
      { id: 's2', name: '课程', description: '详见 AIPM-Wiki 05-resources/courses.md' },
      { id: 's3', name: 'Newsletter 与博客', description: '详见 AIPM-Wiki 05-resources/newsletters-and-blogs.md' },
    ],
  },
];
