// EXPORTS: IInterviewExperience, INTERVIEW_EXPERIENCES

export interface IInterviewExperience {
  id: string;
  company: string;
  position: string;
  date: string;
  rounds: {
    round: string;
    content: string;
    questions: string[];
  }[];
  summary: string;
  tips: string[];
}

export const INTERVIEW_EXPERIENCES: IInterviewExperience[] = [
  {
    id: 'exp1',
    company: '某头部大模型公司',
    position: 'AI 产品经理',
    date: '2026年',
    rounds: [
      {
        round: '一面（业务面）',
        content: '重点考察 AI 基础概念和产品思维',
        questions: [
          'RAG 和微调的区别？什么场景用哪个？',
          '如何评估一个 AI 客服的效果？',
          '如果模型回答准确率从 85% 提升到 90%，你怎么量化业务价值？',
        ],
      },
      {
        round: '二面（交叉面）',
        content: '深入考察技术理解和项目经验',
        questions: [
          '讲一个你做过的 AI 项目，遇到的最大挑战是什么？',
          'RAG 效果不好怎么排查？',
          '怎么设计 AI 产品的兜底机制？',
        ],
      },
      {
        round: '三面（总监面）',
        content: '考察商业判断和职业规划',
        questions: [
          '你怎么看 AI 产品的商业模式？',
          '为什么想做 AI PM？',
          '未来 3 年 AI PM 的核心能力会怎么变化？',
        ],
      },
    ],
    summary: '整体面试节奏快，注重实战能力而非理论背诵。面试官会持续追问，需要对每个概念有深入理解。',
    tips: [
      '准备 2-3 个能深入讲的 AI 项目',
      '每个概念都要能讲出产品层面的含义',
      '关注成本、评估、兜底这三个高频话题',
    ],
  },
];
