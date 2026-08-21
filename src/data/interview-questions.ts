// EXPORTS: IInterviewQuestion, INTERVIEW_QUESTIONS

export interface IInterviewQuestion {
  id: string;
  number: number;
  category: string;
  priority: 'P0' | 'P1' | 'P2';
  question: string;
}

export const INTERVIEW_QUESTIONS: IInterviewQuestion[] = [
  { id: 'c1', number: 1, category: '基础概念', priority: 'P0', question: 'RAG 和微调有什么区别？什么时候用哪个？' },
  { id: 'c2', number: 2, category: '基础概念', priority: 'P0', question: '什么是大模型幻觉？为什么会产生？怎么缓解？' },
  { id: 'c3', number: 3, category: '基础概念', priority: 'P0', question: 'Prompt、RAG、SFT 三者有什么区别？' },
  { id: 'c4', number: 4, category: '评估体系', priority: 'P0', question: '如何搭建大模型产品的评测体系？' },
  { id: 'c5', number: 5, category: '基础概念', priority: 'P0', question: 'Agent 和 Chatbot 有什么区别？' },
  { id: 'c6', number: 6, category: '产品判断', priority: 'P0', question: '什么样的问题适合用 AI 解决？什么样的不适合？' },
  { id: 'c7', number: 7, category: '成本', priority: 'P0', question: '什么是 token？它如何影响产品成本和体验？' },
  { id: 'c8', number: 8, category: '基础概念', priority: 'P1', question: '精确率和召回率有什么区别？' },
  { id: 'c9', number: 9, category: '产品权衡', priority: 'P1', question: '如何平衡 AI 回答的准确性和延迟？' },
  { id: 'c10', number: 10, category: '数据', priority: 'P1', question: '什么是数据飞轮？AI 产品如何构建数据飞轮？' },
  { id: 'c11', number: 11, category: '基础概念', priority: 'P0', question: '预训练、微调和 SFT 是什么关系？' },
  { id: 'c12', number: 12, category: '技术选型', priority: 'P1', question: 'LoRA 和全量微调有什么区别？怎么选？' },
  { id: 'c13', number: 13, category: '评估体系', priority: 'P1', question: '如何评估 RAG 系统的准确率？' },
  { id: 'c14', number: 14, category: '基础概念', priority: 'P1', question: '什么是上下文窗口？它和「记忆」是什么关系？' },
  { id: 'c15', number: 15, category: '前沿概念', priority: 'P1', question: '什么是 Context Engineering？和 Prompt Engineering 有什么区别？' },
  { id: 'c16', number: 16, category: '产品设计', priority: 'P1', question: 'AI 黑箱问题如何解决？怎么让用户信任 AI？' },
  { id: 'c17', number: 17, category: '评估体系', priority: 'P1', question: '离线评测效果好但线上效果差，怎么排查？' },
  { id: 'c18', number: 18, category: '评估体系', priority: 'P2', question: 'AI 产品的 A/B 测试和传统产品有什么不同？' },
  { id: 'c19', number: 19, category: '前沿概念', priority: 'P2', question: '什么是 Agentic Workflows？和传统工作流有什么区别？' },
  { id: 'c20', number: 20, category: '合规', priority: 'P1', question: '国内生成式 AI 产品需要注意哪些合规问题？' },
];
