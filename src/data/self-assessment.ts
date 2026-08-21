// EXPORTS: ICapabilityDimension, CAPABILITY_DIMENSIONS, LLM_LEVELS, PORTFOLIO_CHECKLIST, IAssessmentQuestion, ASSESSMENT_QUESTIONS, DIMENSION_COMMENTS

export interface ICapabilityDimension {
  id: string;
  name: string;
  score: number;
  passLine: string;
  excellentLine: string;
  selfCheckQuestions: string[];
}

export const CAPABILITY_DIMENSIONS: ICapabilityDimension[] = [
  { id: 'tech', name: '技术认知', score: 2, passLine: '不混淆Prompt/RAG/微调，知道模型能做什么不能做什么', excellentLine: '能和算法工程师平等讨论技术选型，理解原理和边界', selfCheckQuestions: ['能不用术语向非技术朋友讲清"大模型为什么胡说八道"吗？', '给一个需求能判断该用Prompt/RAG/微调/小模型吗？', '算法说"做不到"能追问出具体原因吗？'] },
  { id: 'product', name: '产品基本功', score: 3, passLine: '需求分析、PRD、跨团队协作（传统PM已具备）', excellentLine: '能写出高质量AI PRD，包含兜底、评测、迭代完整闭环', selfCheckQuestions: ['PRD里有没有写清"允许多大错误率"？', 'AI有时答对有时答错，方案里有兜底设计吗？', '能一页纸讲清AI功能的目标用户/场景/成功标准吗？'] },
  { id: 'data', name: '数据与评估', score: 2, passLine: '会搭评测集、懂badcase归因、知道离线/在线指标差异', excellentLine: '能设计完整评测体系，用数据驱动模型迭代和产品决策', selfCheckQuestions: ['能从零设计"客服AI回答准不准"的评测集吗？', '能说清LLM-as-a-Judge的适用场景和局限吗？', '遇到过"模型指标涨了但用户体验没好"吗？怎么排查？'] },
  { id: 'business', name: '商业判断', score: 2, passLine: '能估算token成本、理解模型选型的效果/成本/延迟权衡', excellentLine: '能设计AI产品的商业模式和定价策略，量化ROI', selfCheckQuestions: ['给日活预估能大致估算token成本吗？', '知道"自建vs调用API"该看哪几个维度吗？', '老板问"能不能免费无限用"能给基于成本的答案吗？'] },
  { id: 'ethics', name: '伦理与合规', score: 2, passLine: '知道内容安全、隐私、监管红线，能在设计阶段识别风险', excellentLine: '能设计主动的合规机制和伦理治理方案', selfCheckQuestions: ['知道公司AI产品要遵守哪些国内监管要求吗？', '发现AI功能对未成年人有过度依赖风险，产品层面怎么设计？', '"效果很好但有合规风险"的方案怎么处理？'] },
];

export interface ILLMLevel {
  level: 'L1' | 'L2' | 'L3';
  title: string;
  subtitle: string;
  description: string;
  criteria: string[];
}

export const LLM_LEVELS: ILLMLevel[] = [
  { level: 'L1', title: 'L1 概念可用', subtitle: '入门 / 初级岗', description: '能说清擅长/不擅长，知道token/上下文/温度等基础概念', criteria: ['能解释什么是token、上下文窗口、温度参数', '知道大模型擅长什么、不擅长什么', '能说出3个以上主流模型的名字和大致差异', '能用Prompt让大模型完成简单任务'] },
  { level: 'L2', title: 'L2 方案可判', subtitle: '中级岗门槛', description: '能在Prompt/RAG/微调/Agent间给出有依据的初判', criteria: ['能根据需求判断该用Prompt、RAG、微调还是Agent', '理解各方案的成本、效果、延迟权衡', '能设计简单的评测集验证效果', '知道常见的badcase类型和归因方法', '能和算法工程师有效沟通需求'] },
  { level: 'L3', title: 'L3 选型可辩', subtitle: '高级 / 专家岗', description: '能和算法平等讨论取舍，拿得出评测/成本/风险证据', criteria: ['能主导复杂AI产品的技术选型决策', '能设计完整的评测体系和数据飞轮方案', '理解模型内部原理和训练流程的关键环节', '能基于成本/效果/风险做量化的ROI分析', '能预判方案的技术边界和潜在风险'] },
];

export interface IPortfolioItem {
  id: string;
  title: string;
  description: string;
}

export const PORTFOLIO_CHECKLIST: IPortfolioItem[] = [
  { id: 'p1', title: '问题定义', description: '谁、在什么场景、完成什么任务' },
  { id: 'p2', title: '方案与关键决策', description: '为什么选RAG而不是微调' },
  { id: 'p3', title: '评测证据', description: '10-20条测试用例 + 评测结果' },
  { id: 'p4', title: '成本测算', description: '单位任务成本' },
  { id: 'p5', title: '失败兜底', description: '找不到答案时的出口' },
  { id: 'p6', title: '边界说明', description: '什么做不到' },
  { id: 'p7', title: '演示备用方案', description: '截图/录屏兜底' },
];

export interface IAssessmentOption {
  label: string;
  text: string;
  score: 1 | 2 | 3 | 4;
}

export interface IAssessmentQuestion {
  id: string;
  number: number;
  dimension: 'tech' | 'product' | 'data' | 'business' | 'ethics';
  title: string;
  options: IAssessmentOption[];
}

export const ASSESSMENT_QUESTIONS: IAssessmentQuestion[] = [
  { id: 'q1', number: 1, dimension: 'tech', title: '如果算法工程师说「这个需求不适合用大模型」，你的第一反应是？', options: [{ label: 'A', text: '接受这个结论，换个方案', score: 1 }, { label: 'B', text: '追问「为什么」，但不太能判断回答是否合理', score: 2 }, { label: 'C', text: '追问具体是延迟、成本、数据还是效果问题，并能理解答案', score: 3 }, { label: 'D', text: '能拆出可验证的约束条件，并据此提出替代方案', score: 4 }] },
  { id: 'q2', number: 2, dimension: 'tech', title: '给你一个需求「让AI回答公司内部制度问题」，你能判断技术方案吗？', options: [{ label: 'A', text: '知道要用AI，但说不清具体怎么做', score: 1 }, { label: 'B', text: '知道大概用RAG，但讲不清和微调的区别', score: 2 }, { label: 'C', text: '能说清RAG适合知识问答、微调适合风格行为', score: 3 }, { label: 'D', text: '能根据知识更新频率、溯源需求、成本约束做选型', score: 4 }] },
  { id: 'q3', number: 3, dimension: 'tech', title: '你能向非技术朋友讲清楚「大模型为什么会一本正经地胡说八道」吗？', options: [{ label: 'A', text: '不能，自己也不太明白', score: 1 }, { label: 'B', text: '知道叫「幻觉」，但解释不清原因', score: 2 }, { label: 'C', text: '能用类比讲清原理和常见缓解方法', score: 3 }, { label: 'D', text: '能讲清原理，并从产品角度说出3种以上缓解策略', score: 4 }] },
  { id: 'q4', number: 4, dimension: 'product', title: '你写AI产品PRD时，会明确写「这个功能允许多大的错误率」吗？', options: [{ label: 'A', text: '没写过，不知道还要写这个', score: 1 }, { label: 'B', text: '想过但没写进PRD', score: 2 }, { label: 'C', text: '会写一个大致的容错范围', score: 3 }, { label: 'D', text: '会按场景分级定义错误容忍度，并配套兜底和人工介入机制', score: 4 }] },
  { id: 'q5', number: 5, dimension: 'product', title: '遇到「AI有时候答对、有时候答错」，你的产品方案里有兜底设计吗？', options: [{ label: 'A', text: '没想过这个问题', score: 1 }, { label: 'B', text: '知道要有兜底，但不知道怎么设计', score: 2 }, { label: 'C', text: '会设计「转人工」或「显示不确定」的兜底', score: 3 }, { label: 'D', text: '会设计完整的分流机制和数据回流闭环', score: 4 }] },
  { id: 'q6', number: 6, dimension: 'product', title: '你能在一页纸内讲清楚一个AI功能的目标用户、核心场景和成功标准吗？', options: [{ label: 'A', text: '比较困难，容易写散', score: 1 }, { label: 'B', text: '能写但需要较长时间打磨', score: 2 }, { label: 'C', text: '基本可以，逻辑比较清晰', score: 3 }, { label: 'D', text: '可以，并且成功标准同时包含模型效果指标和业务指标', score: 4 }] },
  { id: 'q7', number: 7, dimension: 'data', title: '如果让你从零设计一个「客服AI回答准不准」的评测集，第一步做什么？', options: [{ label: 'A', text: '完全没概念', score: 1 }, { label: 'B', text: '知道要收集问题和答案，但不知道怎么系统化', score: 2 }, { label: 'C', text: '知道要从真实日志采样、定标准答案、分维度评估', score: 3 }, { label: 'D', text: '能设计完整流程：采样→标注规范→多维度评分→人工+LLM Judge结合', score: 4 }] },
  { id: 'q8', number: 8, dimension: 'data', title: '你知道「LLM-as-a-Judge」是什么、有什么局限吗？', options: [{ label: 'A', text: '没听说过', score: 1 }, { label: 'B', text: '听说过但不了解细节', score: 2 }, { label: 'C', text: '知道是用大模型当评委，也知道可能有偏差', score: 3 }, { label: 'D', text: '知道适用场景、偏差来源和缓解方法', score: 4 }] },
  { id: 'q9', number: 9, dimension: 'data', title: '遇到过「模型指标涨了但用户体验没变好」吗？知道怎么排查吗？', options: [{ label: 'A', text: '没遇到过/不知道会有这种情况', score: 1 }, { label: 'B', text: '遇到过但不知道为什么', score: 2 }, { label: 'C', text: '知道可能是离线评测和线上分布不一致', score: 3 }, { label: 'D', text: '能系统排查并设计验证方案', score: 4 }] },
  { id: 'q10', number: 10, dimension: 'business', title: '给你一个AI功能的日活预估，你能大致估算它的token成本吗？', options: [{ label: 'A', text: '不能，不知道怎么算', score: 1 }, { label: 'B', text: '知道和token有关但算不出来', score: 2 }, { label: 'C', text: '能按「日活×人均对话轮次×每轮token数×单价」粗算', score: 3 }, { label: 'D', text: '能算单位经济模型，并考虑缓存、分级路由等优化', score: 4 }] },
  { id: 'q11', number: 11, dimension: 'business', title: '「自建模型vs调用API」这个决策，你知道该看哪些维度吗？', options: [{ label: 'A', text: '没想过这个问题', score: 1 }, { label: 'B', text: '大概知道成本和效果两个维度', score: 2 }, { label: 'C', text: '能列出成本、效果、数据安全、迭代速度等维度', score: 3 }, { label: 'D', text: '能量化对比TCO、合规约束、团队能力并给出分阶段建议', score: 4 }] },
  { id: 'q12', number: 12, dimension: 'business', title: '如果老板问「这个AI功能能不能免费无限用」，你怎么回答？', options: [{ label: 'A', text: '觉得应该可以，边际成本低', score: 1 }, { label: 'B', text: '知道有成本但说不清具体数字', score: 2 }, { label: 'C', text: '能给出基于token成本的粗略测算', score: 3 }, { label: 'D', text: '能给出成本测算+分级服务方案+ROI分析', score: 4 }] },
  { id: 'q13', number: 13, dimension: 'ethics', title: '你知道国内AI产品需要遵守哪些主要监管要求吗？', options: [{ label: 'A', text: '完全不了解', score: 1 }, { label: 'B', text: '听说过《生成式人工智能服务管理暂行办法》但不了解内容', score: 2 }, { label: 'C', text: '知道主要法规和核心要求', score: 3 }, { label: 'D', text: '熟悉法规，能在设计阶段主动识别合规风险', score: 4 }] },
  { id: 'q14', number: 14, dimension: 'ethics', title: '如果发现AI功能可能对未成年人造成过度依赖风险，产品层面怎么设计？', options: [{ label: 'A', text: '没想过这个问题', score: 1 }, { label: 'B', text: '觉得应该限制使用但不知道怎么做', score: 2 }, { label: 'C', text: '知道要做使用时长提醒和实名认证', score: 3 }, { label: 'D', text: '能设计完整方案：年龄识别、时长限制、内容过滤、退出机制', score: 4 }] },
  { id: 'q15', number: 15, dimension: 'ethics', title: '遇到「效果很好但存在合规风险」的方案，你会怎么处理？', options: [{ label: 'A', text: '先上再说，后面再改', score: 1 }, { label: 'B', text: '会提出来但不知道怎么推进', score: 2 }, { label: 'C', text: '会升级给法务/安全团队评估', score: 3 }, { label: 'D', text: '能在设计阶段识别风险并设计缓解措施', score: 4 }] },
];

interface IDimensionComment {
  level: 'below' | 'pass' | 'good' | 'excellent';
  label: string;
  comment: string;
  suggestions: { section: string; files: string[] }[];
}

export const DIMENSION_COMMENTS: Record<string, Record<string, IDimensionComment>> = {
  tech: {
    below: { level: 'below', label: '待加强', comment: '技术认知是AI PM的地基，建议从AI基础系统入门。', suggestions: [{ section: 'AI基础总览+机器学习三大范式', files: ['01-ai-basics/README.md', 'machine-learning/ml-three-paradigms.md'] }, { section: '大模型工作原理', files: ['01-ai-basics/llm/how-llm-works.md'] }, { section: 'Prompt/RAG/微调区别', files: ['llm/prompt-rag-finetuning.md'] }] },
    pass: { level: 'pass', label: '及格', comment: '基本概念都有了解，建议多动手做Demo把概念落地。', suggestions: [{ section: 'RAG演进与生产级RAG', files: ['llm/rag-evolution-naive-to-agentic.md', 'llm/production-rag-checklist.md'] }, { section: 'Agent入门与MCP', files: ['llm/agent-basics.md', 'llm/mcp.md'] }, { section: 'Vibe Coding动手做Demo', files: ['02-pm-skills/vibe-coding/what-is-vibe-coding.md'] }] },
    good: { level: 'good', label: '良好', comment: '技术认知扎实，建议继续深入Agentic Workflows和多模态。', suggestions: [{ section: 'Agentic Workflows与Agent Skills', files: ['llm/agentic-retrieval.md', 'llm/agent-skills.md'] }, { section: '多模态PM能力', files: ['00-roadmap/multimodal-pm-skills.md'] }, { section: '长上下文vs RAG', files: ['llm/long-context-vs-rag.md'] }] },
    excellent: { level: 'excellent', label: '优秀', comment: '技术认知已达到专家水平，可以独立完成复杂AI产品的技术选型。', suggestions: [{ section: '持续关注前沿进展', files: ['05-resources/'] }, { section: '把技术判断写进作品集', files: [] }] },
  },
  product: {
    below: { level: 'below', label: '待加强', comment: '建议从AI PRD指南开始系统补齐。', suggestions: [{ section: 'AI PRD指南', files: ['02-pm-skills/prd-and-design/ai-prd-guide.md', 'ai-native-vs-plus-ai.md'] }, { section: '兜底与反馈设计', files: ['prd-and-design/fallback-and-feedback-design.md'] }, { section: 'Agentic UX', files: ['prd-and-design/agentic-ux-and-trust-calibration.md'] }] },
    pass: { level: 'pass', label: '及格', comment: '基本功过关，但AI特色的设计思维还需强化。', suggestions: [{ section: '兜底设计模式', files: ['prd-and-design/fallback-and-feedback-design.md'] }, { section: 'Agent产品设计', files: ['ai-product-operations/agent-product-design.md'] }, { section: '逆向PRD练习', files: [] }] },
    good: { level: 'good', label: '良好', comment: 'AI产品思维已形成，建议深化信任校准等高级话题。', suggestions: [{ section: '信任校准设计', files: ['prd-and-design/agentic-ux-and-trust-calibration.md'] }, { section: 'AI产品指标体系', files: ['ai-product-operations/ai-product-metrics.md'] }] },
    excellent: { level: 'excellent', label: '优秀', comment: 'AI产品设计能力突出，能把错误率、兜底、信任全链路打通。', suggestions: [{ section: '把完整PRD+兜底方案写进作品集', files: [] }] },
  },
  data: {
    below: { level: 'below', label: '待加强', comment: '数据与评估是AI PM区别于传统PM的核心能力，建议从零搭建评测集开始。', suggestions: [{ section: '模型评估总览+搭建评测集', files: ['02-pm-skills/model-evaluation/README.md', 'build-your-eval-set.md'] }, { section: 'Badcase分析', files: ['model-evaluation/badcase-analysis.md'] }, { section: '数据飞轮', files: ['data-annotation/cold-start-and-data-flywheel.md'] }] },
    pass: { level: 'pass', label: '及格', comment: '知道评测的重要性，但方法论还不够系统。', suggestions: [{ section: 'LLM-as-a-Judge', files: ['model-evaluation/llm-as-a-judge.md'] }, { section: 'A/B测试', files: ['model-evaluation/ab-testing-for-ai-products.md'] }, { section: 'Agent评测', files: ['ai-product-operations/agent-evaluation-and-observability.md'] }] },
    good: { level: 'good', label: '良好', comment: '评测体系搭建能力良好，建议深化离线在线Gap排查。', suggestions: [{ section: '离线vs在线Gap', files: [] }, { section: '留存指标', files: ['ai-product-operations/ai-feature-retention-and-success-metrics.md'] }] },
    excellent: { level: 'excellent', label: '优秀', comment: '数据与评估能力很强，能独立设计从评测集到数据飞轮的完整闭环。', suggestions: [{ section: '把评测集+badcase分析写进作品集', files: [] }] },
  },
  business: {
    below: { level: 'below', label: '待加强', comment: '从理解token成本开始。', suggestions: [{ section: 'Token成本测算', files: ['02-pm-skills/cost-and-tech/llm-cost-101.md'] }, { section: '成本优化+模型选型', files: ['cost-and-tech/cost-optimization.md', 'cost-and-tech/model-selection-framework.md'] }, { section: 'AI定价', files: ['cost-and-tech/ai-pricing-and-monetization.md'] }] },
    pass: { level: 'pass', label: '及格', comment: '基本成本概念有了，商业分析颗粒度可以更细。', suggestions: [{ section: '模型选型决策矩阵', files: ['cost-and-tech/model-selection-framework.md'] }, { section: 'AI产品定价', files: ['cost-and-tech/ai-pricing-and-monetization.md'] }] },
    good: { level: 'good', label: '良好', comment: '商业判断不错，建议深化TCO和ROI量化能力。', suggestions: [{ section: '自建vs API的TCO对比', files: [] }, { section: '为Demo做完整成本测算', files: [] }] },
    excellent: { level: 'excellent', label: '优秀', comment: '商业判断能力优秀，能做完整的ROI分析。', suggestions: [{ section: '把成本测算写进作品集', files: [] }] },
  },
  ethics: {
    below: { level: 'below', label: '待加强', comment: '合规是AI产品的红线，必须了解主要监管要求。', suggestions: [{ section: '生成式AI合规清单', files: ['data-annotation/genai-compliance-checklist-cn.md'] }, { section: '数据合规', files: ['data-annotation/data-compliance.md'] }] },
    pass: { level: 'pass', label: '及格', comment: '有基本合规意识，需系统化了解国内监管框架。', suggestions: [{ section: '生成式AI服务管理办法', files: ['data-annotation/genai-compliance-checklist-cn.md'] }] },
    good: { level: 'good', label: '良好', comment: '合规意识较强，建议深化特定场景的合规设计。', suggestions: [{ section: '未成年人保护设计', files: [] }, { section: '内容安全审核机制', files: [] }] },
    excellent: { level: 'excellent', label: '优秀', comment: '伦理与合规意识很强，能在设计阶段做好风险防控。', suggestions: [{ section: '把合规设计写进作品集', files: [] }] },
  },
};
