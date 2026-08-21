// EXPORTS: IKnowledgeCard, KNOWLEDGE_CARDS

export interface IKnowledgeCard {
  id: string;
  title: string;
  category: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
  }[];
  keyPoints?: string[];
}

export const KNOWLEDGE_CARDS: IKnowledgeCard[] = [
  {
    id: 'ml-three-paradigms',
    title: '机器学习三大范式',
    category: 'AI基础',
    summary: '机器学习不是一种技术，而是"从数据中总结规律"的方法，分三大范式：监督学习、无监督学习、强化学习。',
    sections: [
      { heading: '① 监督学习（老师改作业，照着标准答案学）', content: '有输入也有正确答案（标签），学输入→输出的映射。\n\n典型应用：垃圾邮件审核、信用评分、人脸识别、CTR预估。\n\n边界：离不开标注数据，只能学到训练数据里出现过的模式。' },
      { heading: '② 无监督学习（没有老师，自己找规律）', content: '只有输入没有标签，发现数据内部结构。\n\n典型应用：用户分群、异常检测、Embedding向量化。\n\n边界：没有标准答案，效果靠业务判断。' },
      { heading: '③ 强化学习（训练宠物，做对给零食）', content: '靠试错产生数据，学在环境中怎么做能拿到最多奖励。\n\n典型应用：游戏AI（AlphaGo）、推荐系统长期优化、机器人控制、大模型对齐RLHF。\n\n边界：奖励函数设错会被"钻空子"（reward hacking），训练不稳定成本高。' },
    ],
    keyPoints: ['有没有正确答案数据？有→监督学习', '没标签是找结构还是优化长期策略？找结构→无监督，优化策略→强化学习', '每个范式都有边界，产品选型要能说清"为什么选这个、代价是什么"'],
  },
  {
    id: 'how-llm-works',
    title: '大模型是怎么"想"的',
    category: 'AI基础',
    summary: '大模型本质是一个巨大的"接龙"系统：给定前面的文字，反复预测下一个最可能出现的词（token）。',
    sections: [
      { heading: '核心机制：预测下一个token', content: '对话、写代码、做数学题，底层都是这同一个动作——预测下一个最可能的token。\n\nToken是模型处理文本的最小单位：英文约4字符一个token，中文约1.5-2字一个token。API按token计费，上下文窗口按token计算。' },
      { heading: '为什么"接话"能接出智能？', content: '要猜对下一个词，很多时候必须先理解上下文深层含义（因果、指代）。当数据和参数跨过某个门槛后，这种能力从"记住表面模式"跃升为抽象、组合和推理能力——叫"涌现"（Emergence）。' },
      { heading: '温度（Temperature）', content: '控制输出随机性：低温（接近0）输出稳定保守，适合客服/代码；高温输出有创意，适合写作/脑暴。' },
      { heading: '预训练 → 后训练', content: '只做预训练的Base Model只会"接龙"，需要SFT（监督微调，教"怎么答"）和RLHF（人类反馈强化学习，教"哪个答得更好"）才变成听话的助手。\n\n预训练决定"知道什么、多聪明"，后训练决定"愿意怎么回答"。' },
    ],
    keyPoints: ['"聪明"和"正确"是两件事——模型目标是"接得像"不是"说得对"', '产品必须为幻觉gap做兜底设计', 'Temperature不是越高越好，按场景选'],
  },
  {
    id: 'what-is-rag',
    title: '什么是RAG',
    category: 'AI基础',
    summary: 'RAG（检索增强生成）= 先从知识库检索相关内容，再和用户问题一起交给大模型生成答案，相当于"开卷考试"。',
    sections: [
      { heading: '为什么需要RAG', content: '大模型有三个天然缺陷：\n① 知识过时（训练数据有截止日期）\n② 不懂私有知识（公司内部文档从没见过）\n③ 幻觉（不知道也会编）\n\nRAG一次性缓解这三个问题。' },
      { heading: '工作流程', content: '用户提问 → 把问题转成向量（Embedding）→ 在向量数据库检索最相关的文档片段（top 3-10段）→ 把"文档片段+用户问题"拼成Prompt → 模型基于材料生成答案（可附引用）。' },
      { heading: 'PM要关心的设计决策', content: '① 文档切片策略（切太碎丢上下文，切太大检索不准）\n② 检索不到怎么办（说"不知道"还是自由发挥？）\n③ 引用展示（建立用户信任的关键）\n④ 知识库更新机制\n⑤ 评估方法（检索准不准和答得好不好要分开评）' },
    ],
    keyPoints: ['RAG = 开卷考试，不是闭卷硬答', '检索和生成是两个独立环节，出问题要分开排查', '引用溯源Citation是建立用户信任的关键设计'],
  },
  {
    id: 'hallucination-mitigation',
    title: '幻觉问题',
    category: 'AI基础',
    summary: '幻觉是大模型生成看似流畅自信、实则与事实不符或凭空捏造的内容，是概率生成模型的结构性特性。',
    sections: [
      { heading: '什么是幻觉', content: '大模型生成看似流畅自信、实则与事实不符或凭空捏造的内容。它不是偶发bug，而是概率生成模型的结构性特性。' },
      { heading: '三大成因', content: '① 训练目标从来不是"说真话"而是"预测下一个token"，"拒绝回答"不是默认动作\n② 主流评测奖励"自信地猜"而非"诚实地说不知道"\n③ 模型内部对"熟悉度"的误判会抑制"默认拒答"机制' },
      { heading: '高发场景', content: '长尾冷门知识、需要精确数字/引用、超出训练时效、多步推理链较长、被诱导性提问。' },
      { heading: '分层缓解手段（由内到外）', content: '• 模型/Prompt层：明确允许拒答、降低温度、先取证再回答\n• 检索层：RAG用外部真实资料约束生成、Rerank优化检索质量\n• 验证层：Best-of-N交叉验证\n• 呈现层：引用溯源Citation让用户可核验\n• 兜底层：检索不到时明确告知"没找到"、高风险场景人工复核\n• 用户教育层：预期管理，告知"AI可能出错请核实"' },
    ],
    keyPoints: ['幻觉不是bug，是结构性特性——产品设计必须接受这个前提', '不是所有场景都要"零幻觉"，按风险等级分层管理', '高风险场景优先"宁可不答也不乱答"'],
  },
  {
    id: 'transformer-pm',
    title: 'Transformer架构（PM版）',
    category: 'AI基础',
    summary: '今天几乎所有主流大模型的底层骨架都是Transformer，PM不需要会推公式，但要知道它解决了什么问题、注意力机制在干什么、对产品意味着什么。',
    sections: [
      { heading: '编码器 + 解码器', content: '编码器把输入整段读完压成"理解后的表示"，解码器一边看编码器结果一边逐词生成输出。ChatGPT类对话模型主流是Decoder-only（只有解码器）。' },
      { heading: '核心机制——自注意力（Self-Attention）', content: '处理某个词时可以直接、并行地参考句子里其他位置的词，而不必像RNN那样从左到右一个个传。\n\n每个词在问"我该多看谁一眼？"再按权重把相关词信息揉进自己的表示。多头注意力=多组"关注方式"并行看一遍再综合。' },
      { heading: '为什么改变了产品世界', content: '① 训练可大规模并行（GPU吃得下，才撑得起海量数据+超大参数）\n② 长距离依赖更容易建模（任意两个位置直接联系，是上下文窗口能做大的前提）。' },
      { heading: 'PM启示', content: '① 架构决定能力边界形状（上下文多长、长文是否"后半段变傻"）\n② 成本随序列长度涨得很快（自注意力计算量大致随长度平方增长），无脑塞整库文档既贵又慢，RAG/摘要/分层检索更合理\n③ 懂到"注意力=动态决定看哪些词""GPT类是Decoder-only""窗口与成本关系"即可。' },
    ],
    keyPoints: ['自注意力是Transformer的核心，让模型能并行处理长序列', '上下文窗口越大≠越好，成本随长度快速增长', 'PM不需要懂公式，但要理解"注意力""Decoder-only""窗口与成本关系"'],
  },
  {
    id: 'agent-basics',
    title: 'Agent入门',
    category: 'AI基础',
    summary: 'Chatbot是"一次LLM调用"的产品化，Agent是"多次LLM调用+工具执行"组成的循环系统。',
    sections: [
      { heading: 'Chatbot vs Agent', content: 'Chatbot路径：提问→生成回答→结束。\n\nAgent：模型不仅生成语言，还要决定下一步做什么——直接回答还是先调用工具、拿到结果后是否继续，直到任务完成。' },
      { heading: '工作流 vs Agent', content: 'Anthropic的区分：工作流是通过预定义代码路径编排LLM和工具（每步人写死）；Agent是LLM动态指挥自己的流程和工具使用（每步模型自己决定）。\n\n多数上线产品是两者混合。' },
      { heading: '四大核心组件', content: '① 规划Planning（把模糊目标拆成可执行步骤，边执行边调整）\n② 记忆Memory（短期=当前任务中间结果放上下文；长期=跨会话存外部库按需检索）\n③ 工具调用Tool Use（调用外部API/代码/数据库，把"知道什么"扩展为"能做什么"）\n④ 环境反馈Observation（观察结果决定继续/重试/调整）。' },
      { heading: '失败模式', content: '失控风险（高风险动作设人工确认）、错误累积（限制步骤数+关键节点校验）、成本不可控（设调用预算上限）、过度工程化（不是所有场景都需要Agent）。' },
    ],
    keyPoints: ['Agent = 多次LLM调用 + 工具执行 + 循环决策', 'MCP解决连接问题，Skills解决操作手册问题', '不是所有场景都需要Agent，别过度工程化'],
  },
  {
    id: 'mcp-protocol',
    title: 'MCP协议',
    category: 'AI基础',
    summary: 'MCP（模型上下文协议）是一套开放标准，把AI应用和外部系统用同一种方式连起来，类比"AI的USB-C"。',
    sections: [
      { heading: '解决什么问题', content: 'N×M集成问题：N个Agent×M个数据源，每对都写专用连接器生态无法扩展；有了MCP变成N+M。' },
      { heading: '三个角色', content: '• MCP Host（使用AI的应用，如Claude Desktop/Cursor）\n• MCP Client（Host内与某个Server保持连接的组件）\n• MCP Server（对外暴露能力的程序，本地或远程）' },
      { heading: '三大原语', content: '① Tools（可执行动作：查库、发消息、改文件——"能办事"的按钮，要鉴权确认）\n② Resources（可读上下文：文档、schema——"给模型看的材料"，偏只读）\n③ Prompts（预置交互模板——"一键工作流入口"）。' },
    ],
    keyPoints: ['MCP = AI的USB-C，解决N×M集成问题', '三大原语：Tools / Resources / Prompts', 'PM要关心：哪些走现成MCP、权限设计、治理当功能'],
  },
  {
    id: 'context-window',
    title: '上下文窗口',
    category: 'AI基础',
    summary: '上下文窗口是大模型单次对话"能看到"的最大文字量（token），超出部分模型物理上"看不见"。',
    sections: [
      { heading: '什么是上下文窗口', content: '系统提示词+历史消息+用户输入+RAG检索资料+工具返回+模型输出，全部加起来必须≤窗口大小。超出部分模型物理上"看不见"。' },
      { heading: '"中间遗忘"（Lost in the Middle）', content: '关键信息放在长上下文开头或结尾时准确率更高，放中间位置会下降。关键指令应放在系统Prompt开头或紧邻用户问题的位置。' },
      { heading: '窗口越大越好吗？', content: '不一定——要算三笔账：\n① 成本（按token计费，窗口越满越贵）\n② 延迟（输入越长首token等待越久）\n③ 效果（塞得多不代表用得好，无关信息稀释注意力）。' },
    ],
    keyPoints: ['上下文窗口≠无限记忆，超出部分模型看不见', '中间遗忘效应：关键信息放开头或结尾效果更好', '窗口越大≠越好，成本、延迟、效果都要权衡'],
  },
  {
    id: 'prompt-basics',
    title: 'Prompt基本功',
    category: 'AI基础',
    summary: '好Prompt的五要素：角色、任务、上下文与约束、示例、输出格式。',
    sections: [
      { heading: '① 角色（Role）', content: '模型扮演谁、以什么身份说话。\n反例"帮我看看这份反馈" → 好例"你是有5年经验的To B SaaS PM，擅长从非结构化反馈中识别产品机会点"。' },
      { heading: '② 任务（Task）', content: '具体做什么、目标是什么。用结果导向语言："审查这段函数的正确性、性能问题和边界情况，按优先级给出修复清单"而非"帮我看看这段代码"。' },
      { heading: '③ 上下文与约束', content: '背景信息、不能碰的边界、字数限制、必须引用的来源、禁止编造。' },
      { heading: '④ 示例（Examples）', content: '3-5个高质量有代表性的例子，覆盖边界情况，格式完全一致。' },
      { heading: '⑤ 输出格式', content: '明确"用几点列出""按这几个字段输出""不要多余解释"。要被程序解析时需要结构化输出（JSON mode）。' },
    ],
    keyPoints: ['好Prompt五要素：角色、任务、上下文、示例、输出格式', '差Prompt→好Prompt的关键：明确给谁看、评判标准、长什么样、什么结构收尾', '推理模型时代，显式CoT的价值在下降'],
  },
  {
    id: 'precision-vs-recall',
    title: '精确率 vs 召回率',
    category: 'AI基础',
    summary: '精确率关注"找出来的对不对"，召回率关注"该找的有没有找全"。阈值一动，两者此消彼长，PM必须参与定阈值。',
    sections: [
      { heading: '为什么PM必须懂这个', content: '分类模型输出"正例概率"（如"违规概率0.73"），工程侧设阈值切成"是/否"。阈值一动，误报和漏报比例就变——这直接决定用户体验、合规风险和人工成本，PM必须参与定阈值。' },
      { heading: '精确率 vs 召回率', content: '精确率Precision = 报出来的有多少是对的（纯度）\n召回率Recall = 该找的有没有找全（覆盖面）' },
      { heading: '和准确率Accuracy不是一回事', content: '一万条内容只有10条违规，模型全判"正常"准确率99.9%但召回率0。类别不均衡时准确率会骗人。' },
      { heading: '决策框架', content: '• 漏掉代价大（安全合规风控医疗）→ 优先召回率，阈值偏低+人工复核兜底\n• 误报代价大（推荐搜索营销）→ 优先精确率，阈值偏高宁缺毋滥\n• 两端都痛→分级处置（高置信自动处理、中间带人工、低置信放过）' },
    ],
    keyPoints: ['精确率是纯度，召回率是覆盖面，两者此消彼长', '类别不均衡时准确率会骗人，要看精确率和召回率', '先问"漏掉的代价"和"误报的代价"哪个更大，再定阈值'],
  },
];
