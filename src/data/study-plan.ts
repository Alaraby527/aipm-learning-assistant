// EXPORTS: IDayTask, IWeekData, STUDY_PLAN_DATA, PHASE1_DELIVERABLES, TOTAL_TASKS

export interface IDayTask {
  day: string;
  title: string;
  description?: string;
  files: string[];
  output: string;
  weekIndex: number;
}

export interface IWeekData {
  weekIndex: number;
  title: string;
  subtitle: string;
  tasks: IDayTask[];
  weekendSelfTest: string;
  phase?: number;
}

const w1: IWeekData = {
  weekIndex: 1,
  title: '第1周 建立全貌与技术词汇体系',
  subtitle: '了解 AI PM 岗位全貌，消灭术语障碍，建立学习地图',
  phase: 1,
  tasks: [
    { day: 'D1', title: '通读入门路径+能力模型，给自己打分', description: '了解 AI PM 的成长路径和五维能力模型，对照模型给自己当前水平打分，明确弱项和学习重点。', files: ['00-roadmap/getting-started.md', '00-roadmap/ai-pm-capability-model.md'], output: '五维自评表', weekIndex: 1 },
    { day: 'D2', title: '了解AI PM岗位类型、团队分工', description: '搞清楚 AI PM 到底有多少种：To C 产品型、To B 垂直型、平台型、策略型、AI 原生型等。', files: ['00-roadmap/ai-pm-job-types.md', '00-roadmap/ai-pm-team-org-and-roles.md'], output: '目标岗位清单', weekIndex: 1 },
    { day: 'D3', title: '阅读转型指南', description: '如果你是从传统 PM/运营/设计/技术等背景转型 AI PM，找到「原有经验 + AI」的交叉点。', files: ['00-roadmap/transition-guide.md'], output: '个人转型策略笔记', weekIndex: 1 },
    { day: 'D4', title: '通读AI基础总览+机器学习三大范式', description: '先对 AI 基础知识全貌有个概念地图，再重点理解监督学习、无监督学习、强化学习。', files: ['01-ai-basics/README.md', '01-ai-basics/machine-learning/ml-three-paradigms.md'], output: '术语笔记', weekIndex: 1 },
    { day: 'D5', title: '机器学习基础：业务问题到ML、数据集与过拟合', description: '搞清楚什么样的业务问题适合用机器学习解决，以及训练集/验证集/测试集、过拟合和欠拟合。', files: ['machine-learning/business-problem-to-ml.md', 'machine-learning/datasets-and-overfitting.md'], output: '概念卡片', weekIndex: 1 },
    { day: 'D6', title: '精确率与召回率+深度学习简史', description: '精确率看「找出来的对不对」，召回率看「该找的有没有找全」。PM 要根据业务风险决定阈值。', files: ['machine-learning/precision-vs-recall.md', 'machine-learning/deep-learning-brief-history.md'], output: '能用自己的话解释P/R', weekIndex: 1 },
    { day: 'D7', title: '复习+浏览术语表', description: '把这一周学过的概念过一遍，整理出「还没搞懂的术语清单」。', files: ['01-ai-basics/glossary.md'], output: '待消灭术语清单', weekIndex: 1 },
  ],
  weekendSelfTest: '能向非技术朋友讲清楚"机器学习、深度学习、大模型是什么关系"',
};

const w2: IWeekData = {
  weekIndex: 2, title: '第2周 大模型核心原理（上）', subtitle: '理解大模型怎么工作、核心缺陷是什么', phase: 1,
  tasks: [
    { day: 'D8', title: '大模型工作原理（PM视角）', description: '大模型本质上是一个巨大的「接龙」系统——给定前面的文字，预测下一个最可能出现的词。', files: ['01-ai-basics/llm/how-llm-works.md'], output: '原理笔记', weekIndex: 2 },
    { day: 'D9', title: 'Transformer架构（PM版）', description: '核心是「自注意力机制」——处理每个词的时候可以直接看其他位置的词。', files: ['01-ai-basics/llm/transformer-architecture.md'], output: '能解释注意力机制的产品含义', weekIndex: 2 },
    { day: 'D10', title: '幻觉问题+上下文窗口', description: '幻觉是大模型「自信地胡说八道」；上下文窗口是模型一次能「看到」的最大文字量。', files: ['01-ai-basics/llm/hallucination.md', '01-ai-basics/llm/context-window.md'], output: '幻觉缓解方案清单', weekIndex: 2 },
    { day: 'D11', title: '模型版图：主流模型盘点', description: '了解当前主流大模型格局：GPT、Claude、Gemini，以及国产的豆包/Kimi/通义/文心/DeepSeek 等。', files: ['01-ai-basics/llm/model-landscape.md'], output: '主流模型对比表', weekIndex: 2 },
    { day: 'D12', title: '什么是RAG', description: 'RAG=先从知识库检索相关内容，再把内容和问题一起交给模型生成答案。类比「开卷考试」。', files: ['01-ai-basics/llm/what-is-rag.md'], output: 'RAG流程图', weekIndex: 2 },
    { day: 'D13', title: 'Prompt/RAG/微调三者区别', description: '三种手段分别作用在不同层级：Prompt改输入指令、RAG外挂知识库、微调改模型权重。', files: ['01-ai-basics/llm/prompt-rag-finetuning.md'], output: '选型决策树', weekIndex: 2 },
    { day: 'D14', title: '复习+注册2-3个主流大模型产品每天使用', description: '强迫自己每天用大模型处理真实任务，边用边记笔记。', files: [], output: 'AI产品体验笔记', weekIndex: 2 },
  ],
  weekendSelfTest: '能讲清楚"大模型为什么会胡说八道，RAG是怎么缓解它的"',
};

const w3: IWeekData = {
  weekIndex: 3, title: '第3周 大模型核心原理（下）+Prompt工程', subtitle: '掌握 RAG 进阶、Agent 基础和 Prompt 工程实践', phase: 1,
  tasks: [
    { day: 'D15', title: 'RAG演进：从朴素到Agentic', description: '从朴素RAG到带重排的多阶段检索，再到Agentic RAG。', files: ['01-ai-basics/llm/rag-evolution-naive-to-agentic.md'], output: 'RAG架构演进笔记', weekIndex: 3 },
    { day: 'D16', title: '长上下文vs RAG+生产级RAG清单', description: '窗口越来越大还需要RAG吗？答案是需要。学习生产级RAG上线检查清单。', files: ['01-ai-basics/llm/long-context-vs-rag.md', '01-ai-basics/llm/production-rag-checklist.md'], output: 'RAG上线检查清单', weekIndex: 3 },
    { day: 'D17', title: 'Agent入门+Agent检索', description: 'Agent是「给个目标，自己规划步骤、调用工具、执行完成」。理解四大核心组件。', files: ['01-ai-basics/llm/agent-basics.md', '01-ai-basics/llm/agentic-retrieval.md'], output: 'Agent vs Chatbot区别表', weekIndex: 3 },
    { day: 'D18', title: 'MCP协议+Agent Skills', description: 'MCP被称为「AI的USB-C」，Agent Skills把操作手册打包成可版本管理的文件夹。', files: ['01-ai-basics/llm/mcp.md', '01-ai-basics/llm/agent-skills.md'], output: 'MCP是什么的笔记', weekIndex: 3 },
    { day: 'D19', title: 'Prompt工程基础+思维链', description: '学好五要素：角色、任务、上下文与约束、示例、输出格式。', files: ['prompt-engineering/prompt-basics.md', 'prompt-engineering/chain-of-thought.md'], output: '5个常用Prompt模式', weekIndex: 3 },
    { day: 'D20', title: '结构化输出+System Prompt', description: '结构化输出是程序调用LLM的基础；System Prompt是模型的长期人格设定。', files: ['prompt-engineering/structured-output.md', 'prompt-engineering/system-prompt-and-prompt-ops.md'], output: 'Prompt模板库', weekIndex: 3 },
    { day: 'D21', title: 'Context Engineering+复习', description: 'Prompt Engineering关注「怎么说」，Context Engineering关注「窗口里到底装了什么」。', files: ['prompt-engineering/context-engineering.md'], output: '周复习笔记', weekIndex: 3 },
  ],
  weekendSelfTest: '能说清楚"什么场景该用Prompt、什么场景该用RAG、什么场景该用Agent"',
};

const w4: IWeekData = {
  weekIndex: 4, title: '第4周 AI PM核心技能（上）——PRD与评估', subtitle: '掌握 AI 产品 PRD 写法和模型评估方法论', phase: 1,
  tasks: [
    { day: 'D22', title: 'AI PRD指南+AI-Native vs +AI', description: 'AI输出是概率性的，需要定义评估标准和兜底方案。', files: ['02-pm-skills/prd-and-design/ai-prd-guide.md', '02-pm-skills/prd-and-design/ai-native-vs-plus-ai.md'], output: 'AI PRD模板', weekIndex: 4 },
    { day: 'D23', title: '兜底与反馈设计+Agentic UX', description: 'AI一定会出错，好的AI产品出错了用户也能接受、能纠正、能继续用。', files: ['02-pm-skills/prd-and-design/fallback-and-feedback-design.md', '02-pm-skills/prd-and-design/agentic-ux-and-trust-calibration.md'], output: '兜底设计模式清单', weekIndex: 4 },
    { day: 'D24', title: '模型评估总览+搭建评测集', description: 'PM必须参与定义「什么算答对了」。', files: ['02-pm-skills/model-evaluation/README.md', '02-pm-skills/model-evaluation/build-your-eval-set.md'], output: '评测集设计框架', weekIndex: 4 },
    { day: 'D25', title: 'LLM-as-a-Judge+Badcase分析', description: '用大模型评大模型；Badcase分析是产品迭代的核心工作流。', files: ['02-pm-skills/model-evaluation/llm-as-a-judge.md', '02-pm-skills/model-evaluation/badcase-analysis.md'], output: 'Badcase归因模板', weekIndex: 4 },
    { day: 'D26', title: 'A/B测试for AI产品', description: 'AI输出有随机性，A/B测试更难做，还要关注护栏指标。', files: ['02-pm-skills/model-evaluation/ab-testing-for-ai-products.md'], output: 'AI A/B测试注意事项', weekIndex: 4 },
    { day: 'D27', title: '挑一个常用AI产品写一份"逆向PRD"', description: '反过来推：目标用户、核心场景、功能架构、AI能力、评估指标。', files: [], output: '一份逆向PRD（2-3页）', weekIndex: 4 },
    { day: 'D28', title: '复习+完善逆向PRD', description: '检查目标用户、核心场景、AI能力应用、评估指标是否清晰。', files: [], output: '逆向PRD定稿', weekIndex: 4 },
  ],
  weekendSelfTest: '能回答"AI产品的PRD和传统PRD最大的三个区别是什么"',
};

const w5: IWeekData = {
  weekIndex: 5, title: '第5周 AI PM核心技能（下）——成本、数据、运营', subtitle: '建立成本意识、数据工作能力和 AI 产品运营思维', phase: 1,
  tasks: [
    { day: 'D29', title: '成本测算入门', description: '大模型按token计费，PM必须会算账。', files: ['02-pm-skills/cost-and-tech/llm-cost-101.md'], output: 'Token成本计算公式', weekIndex: 5 },
    { day: 'D30', title: '成本优化+模型选型框架', description: '模型分层路由、缓存、Prompt精简等优化手段。', files: ['02-pm-skills/cost-and-tech/cost-optimization.md', '02-pm-skills/cost-and-tech/model-selection-framework.md'], output: '选型决策矩阵', weekIndex: 5 },
    { day: 'D31', title: 'AI定价与商业化', description: '订阅制、按用量付费、Freemium、企业授权等模式。', files: ['02-pm-skills/cost-and-tech/ai-pricing-and-monetization.md'], output: '定价模式笔记', weekIndex: 5 },
    { day: 'D32', title: '数据标注指南+冷启动与数据飞轮', description: '数据飞轮是AI产品的核心壁垒。', files: ['02-pm-skills/data-annotation/annotation-guideline.md', '02-pm-skills/data-annotation/cold-start-and-data-flywheel.md'], output: '标注规范要点', weekIndex: 5 },
    { day: 'D33', title: '数据合规+生成式AI合规清单', description: 'PM必须知道红线在哪里。', files: ['02-pm-skills/data-annotation/data-compliance.md', '02-pm-skills/data-annotation/genai-compliance-checklist-cn.md'], output: '合规红线清单', weekIndex: 5 },
    { day: 'D34', title: 'AI产品指标体系+Agent产品设计', description: '解决率、人工介入率、采纳率、满意度等AI特有指标。', files: ['02-pm-skills/ai-product-operations/ai-product-metrics.md', '02-pm-skills/ai-product-operations/agent-product-design.md'], output: '指标体系笔记', weekIndex: 5 },
    { day: 'D35', title: 'Agent评测与可观测性+留存指标', description: 'Agent是多步骤的，可观测性把每一步都记录下来。', files: ['02-pm-skills/ai-product-operations/agent-evaluation-and-observability.md', '02-pm-skills/ai-product-operations/ai-feature-retention-and-success-metrics.md'], output: '周复习', weekIndex: 5 },
  ],
  weekendSelfTest: '给一个日活100万的AI对话产品估算月度模型调用成本',
};

const w6: IWeekData = {
  weekIndex: 6, title: '第6周 Vibe Coding实战+案例拆解（上）', subtitle: '亲手做一个 AI Demo，开始积累产品 sense', phase: 1,
  tasks: [
    { day: 'D36', title: 'Vibe Coding概念+工具盘点', description: '用自然语言描述想法，AI帮你写代码。', files: ['02-pm-skills/vibe-coding/what-is-vibe-coding.md', '02-pm-skills/vibe-coding/tool-landscape.md'], output: '工具选型', weekIndex: 6 },
    { day: 'D37', title: '搭一个RAG问答Demo（上）', description: '选一个熟悉的领域，把它变成知识库。', files: ['02-pm-skills/vibe-coding/from-idea-to-demo.md'], output: '可演示的小Demo（上）', weekIndex: 6 },
    { day: 'D38', title: '搭一个RAG问答Demo（下）', description: '完成前端界面、问答交互、引用展示。', files: ['02-pm-skills/vibe-coding/from-idea-to-demo.md'], output: '可演示的小Demo（下）', weekIndex: 6 },
    { day: 'D39', title: '为Demo设计10-20条测试用例的评测集', description: '覆盖简单题、难题、边界题、「该说不知道」的题。', files: [], output: '小型评测集', weekIndex: 6 },
    { day: 'D40', title: '案例：ChatGPT+Claude', description: '深入拆解两款旗舰级AI助手产品。', files: ['03-case-studies/chatbot-assistant/chatgpt.md', '03-case-studies/chatbot-assistant/claude-anthropic.md'], output: '对比分析笔记', weekIndex: 6 },
    { day: 'D41', title: '案例：Perplexity+AI搜索vs传统搜索', description: 'AI搜索是「给答案」，传统搜索是「给链接」。', files: ['03-case-studies/search-and-rec/perplexity.md', '03-case-studies/search-and-rec/ai-search-vs-traditional-search.md'], output: '搜索产品分析', weekIndex: 6 },
    { day: 'D42', title: '案例：Kimi/豆包/元宝/Qwen', description: '国产大模型产品大盘点。', files: ['03-case-studies/chatbot-assistant/'], output: '国产助手对比', weekIndex: 6 },
  ],
  weekendSelfTest: 'Demo能跑通，且有一份评测结果记录',
};

const w7: IWeekData = {
  weekIndex: 7, title: '第7周 案例拆解（下）+多模态', subtitle: '覆盖更多 AI 产品类型，建立行业视野', phase: 1,
  tasks: [
    { day: 'D43', title: '案例：AI客服+Harvey法律AI', description: 'AI客服是落地最成熟的场景之一；Harvey是法律垂直AI代表。', files: ['03-case-studies/vertical/ai-customer-service.md', '03-case-studies/vertical/harvey-legal-ai.md'], output: '垂直AI分析', weekIndex: 7 },
    { day: 'D44', title: '案例：Khanmigo教育+OpenEvidence医疗', description: '教育和医疗是AI最被看好但也最难做的两个垂直领域。', files: ['03-case-studies/vertical/khanmigo.md', '03-case-studies/vertical/openevidence.md'], output: '垂直AI共性总结', weekIndex: 7 },
    { day: 'D45', title: '案例：AI视频生成+Midjourney', description: 'AIGC产品的用户、商业模式和体验关键点。', files: ['03-case-studies/aigc/ai-video-generation.md', '03-case-studies/aigc/midjourney.md'], output: 'AIGC产品笔记', weekIndex: 7 },
    { day: 'D46', title: '案例：Cursor vs Copilot+Claude Code vs Codex', description: 'AI编程工具从「代码补全」进化到「整个项目开发」。', files: ['03-case-studies/aigc/cursor-vs-copilot.md', '03-case-studies/aigc/claude-code-vs-codex.md'], output: 'Coding工具对比', weekIndex: 7 },
    { day: 'D47', title: '案例：Google AI Mode+夸克+亚马逊Alexa购物', description: 'AI怎么改变搜索和推荐的产品形态。', files: ['03-case-studies/search-and-rec/'], output: '搜索/推荐产品分析', weekIndex: 7 },
    { day: 'D48', title: '多模态PM技能+AI产品变现路径', description: '多模态时代PM需要哪些新能力。', files: ['00-roadmap/multimodal-pm-skills.md', '03-case-studies/chatbot-assistant/assistant-monetization-paths.md'], output: '多模态能力笔记', weekIndex: 7 },
    { day: 'D49', title: '复习+整理个人AI产品观察清单', description: '形成自己的观点，面试中有自己的判断比背标准答案更加分。', files: [], output: 'Top 10产品观察笔记', weekIndex: 7 },
  ],
  weekendSelfTest: '能拆解3个以上不同类型AI产品',
};

const w8: IWeekData = {
  weekIndex: 8, title: '第8周 复盘、补短板、作品集雏形', subtitle: '查漏补缺，完成作品集最小可用包', phase: 1,
  tasks: [
    { day: 'D50', title: '回顾五维自评，针对最弱维度定向补读（上）', description: '不要平均用力，把短板先补到及格线以上。', files: [], output: '补短板笔记（上）', weekIndex: 8 },
    { day: 'D51', title: '回顾五维自评，针对最弱维度定向补读（下）', description: '更重要的是「用自己的话讲出来」。', files: [], output: '补短板笔记（下）', weekIndex: 8 },
    { day: 'D52', title: '为你的Demo做一次成本测算', description: '假设1万日活，人均每天查5次，总成本多少？', files: [], output: '成本估算表', weekIndex: 8 },
    { day: 'D53', title: '写一份Demo的badcase归因分析', description: '找出答错的case，逐个做归因分析。', files: [], output: 'Badcase分析文档', weekIndex: 8 },
    { day: 'D54', title: '整理作品集：Demo+逆向PRD+评测集+成本测算', description: '这四样东西比空口说「我懂AI」强100倍。', files: [], output: '作品集初稿', weekIndex: 8 },
    { day: 'D55', title: '浏览资源导航，订阅2-3个Newsletter', description: '保持信息敏感度是AI PM的基本素养。', files: ['05-resources/'], output: '持续学习清单', weekIndex: 8 },
    { day: 'D56', title: '总复习：用自己的话画出AI PM知识图谱', description: '合上书，拿一张纸画出知识图谱。', files: [], output: '知识思维导图', weekIndex: 8 },
  ],
  weekendSelfTest: '作品集最小可用包完成',
};

const w9: IWeekData = {
  weekIndex: 9, title: '第9周 概念题横扫（基础必考题）', subtitle: '刷完35道基础概念题，每题能脱稿讲2分钟', phase: 2,
  tasks: [
    { day: 'D57', title: '第一优先级10道题（RAGvs微调、幻觉等）', description: '面试出现概率最高的题，必须脱稿讲2分钟以上。', files: ['basics/'], output: '概念题第一优先级完成', weekIndex: 9 },
    { day: 'D58', title: '第一优先级10道题（评测体系、Agent等）', description: '不只是背答案，要理解背后的逻辑。', files: ['basics/'], output: '概念题第一优先级完成', weekIndex: 9 },
    { day: 'D59', title: '第二优先级10道题（预训练微调SFT、LoRA等）', description: '重点搞懂「为什么」。', files: ['basics/'], output: '概念题第二优先级完成', weekIndex: 9 },
    { day: 'D60', title: '第二优先级10道题（Context Engineering等）', description: '偏产品思维和方法论。', files: ['basics/'], output: '概念题第二优先级完成', weekIndex: 9 },
    { day: 'D61', title: '第三优先级10道题（何时不用Agent等）', description: '考察视野广度和批判性思维。', files: ['basics/'], output: '概念题第三优先级完成', weekIndex: 9 },
    { day: 'D62', title: '第三优先级10道题+剩余碎片题', description: '高频题答得深入，低频题能说清基本概念。', files: ['basics/'], output: '概念题全部过一遍', weekIndex: 9 },
    { day: 'D63', title: '复习+重点题目复述', description: '拿出白纸，不看答案写要点。', files: [], output: '概念题复习', weekIndex: 9 },
  ],
  weekendSelfTest: '35道概念题每题能脱稿讲2分钟',
};

const w10: IWeekData = {
  weekIndex: 10, title: '第10周 产品设计题+案例分析题', subtitle: '掌握设计题答题框架，动手写5+道完整方案', phase: 2,
  tasks: [
    { day: 'D64', title: '学习产品设计题五步答题框架', description: '用户场景→问题定义→方案设计→评估指标→风险与兜底。', files: ['product-design/'], output: '答题框架笔记', weekIndex: 10 },
    { day: 'D65', title: '必练设计题1：电商智能客服', description: '涵盖AI产品设计所有核心要素的经典题。', files: ['product-design/design-ecommerce-customer-service-bot.md'], output: '设计题完整方案1', weekIndex: 10 },
    { day: 'D66', title: '必练设计题2：真假AI需求+客服解决率', description: '考察判断力和量化思维。', files: ['product-design/real-vs-fake-ai-demand.md', 'product-design/ai-customer-service-resolution-rate.md'], output: '设计题完整方案2', weekIndex: 10 },
    { day: 'D67', title: '必练设计题3：微信AI功能+PMF冷启动', description: '在成熟超级App里加AI怎么做定位。', files: ['product-design/design-wechat-ai-feature.md', 'product-design/ai-product-pmf-coldstart-fallback.md'], output: '设计题完整方案3', weekIndex: 10 },
    { day: 'D68', title: '选练设计题：Agent行为边界、AI导购等', description: '时间充裕多练几道。', files: ['product-design/'], output: '选练设计题答案', weekIndex: 10 },
    { day: 'D69', title: '8道案例分析题：重点练3道', description: '成本估算、成本涨10倍降本、准确率价值量化。', files: ['case-analysis/'], output: '案例分析题答案', weekIndex: 10 },
    { day: 'D70', title: '剩余案例分析题过一遍+复习', description: '关键是「框架感」。', files: ['case-analysis/'], output: '案例分析题全部完成', weekIndex: 10 },
  ],
  weekendSelfTest: '动笔写过5+道设计题完整方案',
};

const w11: IWeekData = {
  weekIndex: 11, title: '第11周 行为面+项目深挖+作品集打磨', subtitle: '准备好"可讲清、可验证、经得起追问"的个人材料', phase: 2,
  tasks: [
    { day: 'D71', title: '准备7道行为面必考题（上）', description: '用STAR框架准备，用真实案例、说具体细节、有量化结果。', files: ['behavioral/'], output: '行为题答案（上）', weekIndex: 11 },
    { day: 'D72', title: '准备7道行为面必考题（下）', description: '重点关注和AI相关的行为题。', files: ['behavioral/'], output: '行为题答案（下）', weekIndex: 11 },
    { day: 'D73', title: '按STAR框架准备项目事实卡（项目1）', description: '提炼项目背景、你的角色、关键挑战、你的行动、最终结果。', files: ['preparation/project-deep-dive.md'], output: '项目事实卡1', weekIndex: 11 },
    { day: 'D74', title: '按STAR框架准备项目事实卡（项目2-3）', description: '准备不同类型的项目，每个准备3-5个追问点。', files: ['preparation/project-deep-dive.md'], output: '项目事实卡2-3', weekIndex: 11 },
    { day: 'D75', title: '作品集自查7项清单+打磨', description: 'Demo、PRD、评测数据、成本测算、案例分析、个人思考、排版。', files: ['preparation/portfolio-and-demo.md'], output: '作品集定稿', weekIndex: 11 },
    { day: 'D76', title: 'LLM熟悉度L1/L2/L3档位自评', description: 'L1能用AI提效、L2能定义AI产品、L3能系统性优化AI系统。', files: ['preparation/llm-familiarity-three-levels.md'], output: 'LLM熟悉度自评', weekIndex: 11 },
    { day: 'D77', title: '总复习+查漏补缺', description: '整体过一遍，不用追求完美但不要有明显硬伤。', files: [], output: '周复习', weekIndex: 11 },
  ],
  weekendSelfTest: '7道行为题有STAR答案，作品集定稿',
};

const w12: IWeekData = {
  weekIndex: 12, title: '第12周 面经精读+模拟面试', subtitle: '了解目标公司面试风格，完成3+次模拟面试', phase: 2,
  tasks: [
    { day: 'D78', title: '概念题模拟（随机抽10题限时作答）', description: '模拟面试感觉，不要翻笔记。', files: ['experiences/'], output: '概念题模拟面试', weekIndex: 12 },
    { day: 'D79', title: '精读面经：字节、美团、蚂蚁、Kimi', description: '了解不同公司的面试节奏和常考题。', files: ['experiences/'], output: '面经笔记1', weekIndex: 12 },
    { day: 'D80', title: '设计题模拟（30分钟写方案+15分钟讲）', description: '就像面试时一样。', files: ['experiences/'], output: '设计题模拟面试', weekIndex: 12 },
    { day: 'D81', title: '精读面经：百度、智谱、B站、理想、小米、商汤', description: '总结规律：哪些题几乎每家都问。', files: ['experiences/'], output: '面经笔记2', weekIndex: 12 },
    { day: 'D82', title: '行为面+项目深挖模拟', description: '对着录音讲一遍，自己复盘。', files: ['experiences/'], output: '行为面模拟面试', weekIndex: 12 },
    { day: 'D83', title: '面试当天检查清单6项准备', description: '设备/网络、环境、自我介绍、提问问题、作品集分享、心态。', files: [], output: '面试检查清单', weekIndex: 12 },
    { day: 'D84', title: '全流程模拟（概念+设计+行为，60分钟）', description: '最后一次全真模拟。', files: ['experiences/'], output: '全流程模拟面试', weekIndex: 12 },
  ],
  weekendSelfTest: '完成3+次模拟面试，无重大知识盲区',
};

export const STUDY_PLAN_DATA: IWeekData[] = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12];

export interface IDeliverableItem {
  id: string;
  title: string;
  description: string;
}

export const PHASE1_DELIVERABLES: IDeliverableItem[] = [
  { id: 'demo', title: '可演示的RAG/Agent小Demo', description: '一个能跑通的AI应用原型' },
  { id: 'prd', title: '一份逆向PRD', description: '2-3页的AI产品逆向分析文档' },
  { id: 'eval', title: '一份评测集+badcase分析', description: '10-20条测试用例+归因分析' },
  { id: 'cost', title: '一份成本估算表', description: '单位任务成本测算' },
  { id: 'cases', title: '10+篇AI产品案例分析笔记', description: '不同类型AI产品的拆解' },
  { id: 'capability', title: '五维能力全部达到及格线', description: '技术认知/产品/数据/商业/合规' },
];

let total = 0;
STUDY_PLAN_DATA.forEach(w => { total += w.tasks.length; });
export const TOTAL_TASKS = total;
