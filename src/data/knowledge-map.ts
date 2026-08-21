// EXPORTS: IKnowledgeNode, KNOWLEDGE_MAP

export interface IKnowledgeNode {
  id: string;
  label: string;
  category: string;
  children?: IKnowledgeNode[];
  docPath?: string;
}

export const KNOWLEDGE_MAP: IKnowledgeNode[] = [
  {
    id: 'basics',
    label: 'AI 基础知识',
    category: '基础',
    children: [
      { id: 'ml-paradigms', label: '机器学习三大范式', category: '基础', docPath: '01-ai-basics/machine-learning/ml-three-paradigms.md' },
      { id: 'datasets', label: '数据集与过拟合', category: '基础', docPath: '01-ai-basics/machine-learning/datasets-and-overfitting.md' },
      { id: 'precision-recall', label: '精确率与召回率', category: '基础', docPath: '01-ai-basics/machine-learning/precision-vs-recall.md' },
      { id: 'dl-history', label: '深度学习简史', category: '基础', docPath: '01-ai-basics/machine-learning/deep-learning-brief-history.md' },
    ],
  },
  {
    id: 'llm',
    label: '大模型核心原理',
    category: '核心',
    children: [
      { id: 'how-llm-works', label: '大模型工作原理', category: '核心', docPath: '01-ai-basics/llm/how-llm-works.md' },
      { id: 'transformer', label: 'Transformer 架构', category: '核心', docPath: '01-ai-basics/llm/transformer-architecture.md' },
      { id: 'hallucination', label: '幻觉问题', category: '核心', docPath: '01-ai-basics/llm/hallucination.md' },
      { id: 'context-window', label: '上下文窗口', category: '核心', docPath: '01-ai-basics/llm/context-window.md' },
      { id: 'rag', label: 'RAG 检索增强生成', category: '核心', docPath: '01-ai-basics/llm/what-is-rag.md' },
      { id: 'prompt-rag-sft', label: 'Prompt/RAG/微调区别', category: '核心', docPath: '01-ai-basics/llm/prompt-rag-finetuning.md' },
      { id: 'agent', label: 'Agent 入门', category: '核心', docPath: '01-ai-basics/llm/agent-basics.md' },
      { id: 'mcp', label: 'MCP 协议', category: '核心', docPath: '01-ai-basics/llm/mcp.md' },
    ],
  },
  {
    id: 'prompt',
    label: 'Prompt 工程',
    category: '技能',
    children: [
      { id: 'prompt-basics', label: 'Prompt 基本功', category: '技能', docPath: '01-ai-basics/prompt-engineering/prompt-basics.md' },
      { id: 'cot', label: '思维链 CoT', category: '技能', docPath: '01-ai-basics/prompt-engineering/chain-of-thought.md' },
      { id: 'structured-output', label: '结构化输出', category: '技能', docPath: '01-ai-basics/prompt-engineering/structured-output.md' },
      { id: 'context-eng', label: 'Context Engineering', category: '技能', docPath: '01-ai-basics/prompt-engineering/context-engineering.md' },
    ],
  },
  {
    id: 'pm-skills',
    label: 'AI PM 核心技能',
    category: '技能',
    children: [
      { id: 'ai-prd', label: 'AI PRD 指南', category: '技能', docPath: '02-pm-skills/prd-and-design/ai-prd-guide.md' },
      { id: 'fallback', label: '兜底与反馈设计', category: '技能', docPath: '02-pm-skills/prd-and-design/fallback-and-feedback-design.md' },
      { id: 'eval-set', label: '搭建评测集', category: '技能', docPath: '02-pm-skills/model-evaluation/build-your-eval-set.md' },
      { id: 'llm-judge', label: 'LLM-as-a-Judge', category: '技能', docPath: '02-pm-skills/model-evaluation/llm-as-a-judge.md' },
      { id: 'badcase', label: 'Badcase 分析', category: '技能', docPath: '02-pm-skills/model-evaluation/badcase-analysis.md' },
      { id: 'cost', label: 'Token 成本测算', category: '技能', docPath: '02-pm-skills/cost-and-tech/llm-cost-101.md' },
      { id: 'cost-opt', label: '成本优化', category: '技能', docPath: '02-pm-skills/cost-and-tech/cost-optimization.md' },
      { id: 'metrics', label: 'AI 产品指标体系', category: '技能', docPath: '02-pm-skills/ai-product-operations/ai-product-metrics.md' },
    ],
  },
  {
    id: 'cases',
    label: '案例拆解',
    category: '拓展',
    children: [
      { id: 'chatgpt', label: 'ChatGPT', category: '拓展', docPath: '03-case-studies/chatbot-assistant/chatgpt.md' },
      { id: 'perplexity', label: 'Perplexity', category: '拓展', docPath: '03-case-studies/search-and-rec/perplexity.md' },
      { id: 'cursor', label: 'Cursor vs Copilot', category: '拓展', docPath: '03-case-studies/aigc/cursor-vs-copilot.md' },
      { id: 'midjourney', label: 'Midjourney', category: '拓展', docPath: '03-case-studies/aigc/midjourney.md' },
    ],
  },
];
