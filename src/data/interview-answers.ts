// EXPORTS: IInterviewAnswer, INTERVIEW_ANSWERS

export interface IInterviewTable {
  headers: string[];
  rows: string[][];
}

export interface IInterviewAnswer {
  questionNumber: number;
  questionId: string;
  difficulty: string;
  frequency: string;
  keyPoints: string[];
  answerSummary: string;
  table?: IInterviewTable;
  bodySections: { heading: string; content: string }[];
  followUps: { question: string; answer: string }[];
  relatedReadings: string[];
}

export const INTERVIEW_ANSWERS: IInterviewAnswer[] = [
  {
    questionNumber: 1, questionId: 'c1', difficulty: '⭐⭐ 入门必备', frequency: '极高',
    keyPoints: ['是否理解两种技术的本质差异（外挂知识 vs 改变模型本身）', '能否从产品视角做技术选型'],
    answerSummary: 'RAG是给模型"外挂一个可随时更新的资料库"，微调是"把知识和行为模式写进模型本身"。',
    table: { headers: ['维度', 'RAG', '微调'], rows: [['本质', '推理时检索外部知识拼进Prompt', '用领域数据继续训练，改变模型权重'], ['知识更新', '改知识库即可，分钟级生效', '需要重新训练，周期长'], ['可溯源性', '天然支持引用来源', '无法溯源，黑盒'], ['成本结构', '建库+每次请求的检索开销', '一次性训练成本+数据标注成本'], ['擅长解决', '知识类问题（知道什么）', '行为类问题（怎么说、什么格式、什么风格）']] },
    bodySections: [{ heading: '选型口诀', content: '知识频繁更新、需要引用来源、私有文档问答 → RAG；要改变模型说话风格、输出格式、领域行为习惯 → 微调；两者不互斥，很多产品是"微调过的模型 + RAG"组合。' }],
    followUps: [{ question: 'RAG效果不好怎么排查？', answer: '拆环节：先看检索（相关材料有没有被找回来），再看生成（找回来了但没答好）。' }, { question: '什么情况下既不用RAG也不用微调？', answer: '通用能力已够用时，先把Prompt优化到极致——成本最低、迭代最快。' }, { question: '微调需要多少数据？', answer: '取决于任务复杂度，几百到几万条不等；数据质量远比数量重要。' }],
    relatedReadings: ['basics/rag-vs-finetuning.md'],
  },
  {
    questionNumber: 2, questionId: 'c2', difficulty: '⭐⭐ 入门必备', frequency: '极高',
    keyPoints: ['能否准确描述幻觉本质', '是否理解幻觉是结构性问题', '能否给出分层缓解方案'],
    answerSummary: '幻觉是指大模型生成看似流畅、实则与事实不符或凭空捏造的内容，且往往以高置信度呈现。',
    table: { headers: ['层级', '手段', '产品含义'], rows: [['生成端', 'Prompt约束、拒答策略', '明确"不知道就说不知道"'], ['检索端', 'RAG + Rerank', '用高质量外部知识约束生成'], ['呈现端', '引用溯源Citation', '让用户可核验来源']] },
    bodySections: [{ heading: '为什么会发生', content: '大模型的训练目标是"预测下一个token"，不是"保证事实正确"。当上下文信息不足或问题超出训练分布时，模型仍会强行补全。' }, { heading: '选型思路', content: '高风险场景优先"宁可不答也不乱答"；低风险场景可容忍一定随机性。缓解幻觉不是消灭幻觉，而是在业务可接受的风险水位下做工程化控制。' }],
    followUps: [{ question: '除了幻觉还有哪些缺陷？', answer: '时效性、一致性问题、安全合规。' }, { question: 'RAG上了幻觉还是很多怎么排查？', answer: '拆成检索问题和生成问题。' }, { question: 'Citation引用溯源怎么设计？', answer: '检索片段与回答的对应关系、用户可点击跳转原文、引用缺失时的降级展示。' }],
    relatedReadings: ['basics/hallucination-mitigation.md'],
  },
  {
    questionNumber: 3, questionId: 'c3', difficulty: '⭐⭐ 入门必备', frequency: '极高',
    keyPoints: ['能否区分三种手段的作用层级', '是否理解成本、迭代速度和适用场景差异'],
    answerSummary: 'Prompt是"怎么问"，RAG是"查什么资料再答"，SFT是"把行为模式写进模型"。',
    table: { headers: ['维度', 'Prompt', 'RAG', 'SFT'], rows: [['本质', '推理时给模型的指令', '检索外部知识拼进Prompt', '用标注数据继续训练模型权重'], ['改变什么', '不改变模型，只改变输入', '不改变模型，改变输入中的知识', '改变模型本身的行为模式'], ['成本', '最低', '中等', '较高'], ['迭代速度', '分钟级', '小时到天', '周级'], ['擅长解决', '输出格式、角色设定', '私有知识问答、需溯源', '领域话术、固定格式、行为习惯']] },
    bodySections: [{ heading: '选型口诀', content: '先用Prompt试效果 → 知识不够加RAG → 风格/行为改不了再考虑SFT。三者可组合。' }],
    followUps: [{ question: 'Prompt优化到极致还是不行，怎么判断该上RAG还是SFT？', answer: '知识类问题走RAG；行为类问题走SFT。' }, { question: 'SFT需要多少数据？', answer: '几百到几万条不等；数据质量远比数量重要。' }, { question: '三种手段成本结构？', answer: 'Prompt是每次请求token开销；RAG多了建库和检索成本；SFT是一次性训练成本+后续推理成本。' }],
    relatedReadings: ['basics/prompt-rag-sft-difference.md'],
  },
  {
    questionNumber: 4, questionId: 'c4', difficulty: '⭐⭐⭐ 常考综合', frequency: '极高',
    keyPoints: ['能否区分离线评测和在线评测', '是否理解"评测不是算法的事，产品要定义什么是好"', '能否设计分层指标体系'],
    answerSummary: '评测体系的核心问题是"谁来定义好"——产品负责定义标准，算法负责量化和优化。',
    table: { headers: ['层级', '指标类型', '示例', '谁主导'], rows: [['效果层', '任务完成质量', '回答准确率、解决率、格式合规率', '产品定义+算法量化'], ['体验层', '用户感知', '响应延迟、回答长度适中、语气得体', '产品主导'], ['商业层', '业务价值', '人工转接率下降、用户满意度、付费转化', '产品+业务']] },
    bodySections: [{ heading: '离线 vs 在线', content: '离线评测用标注好的测试集跑分，迭代快可复现；在线评测用A/B测试、用户反馈、人工抽检反映真实场景。' }, { heading: '构建步骤', content: '① 明确核心场景和用户目标\n② 构建覆盖典型case的评测集\n③ 定义可量化的评测维度\n④ 建立迭代闭环：评测→发现问题→优化→再评测\n\nPM的关键贡献：不是写评测代码，而是定义"什么算答对了"。' }],
    followUps: [{ question: '评测集怎么构建？', answer: '覆盖核心场景+边界case+历史bad case；质量远比数量重要。' }, { question: '准确率90%→95%业务价值怎么量化？', answer: '转化为业务指标：人工介入率下降、投诉减少、处理时效提升。' }, { question: '离线分数高但线上效果不好怎么排查？', answer: '评测集与真实分布不一致、评测维度遗漏、线上有新场景未覆盖。' }],
    relatedReadings: ['basics/model-evaluation-system.md'],
  },
  {
    questionNumber: 5, questionId: 'c5', difficulty: '⭐⭐ 入门必备', frequency: '极高',
    keyPoints: ['能否准确描述Agent核心特征', '是否理解Chatbot是Agent的子集', '能否判断何时需要Agent'],
    answerSummary: 'Chatbot是"能聊天的机器人"，Agent是"能自主完成任务的智能体"。',
    table: { headers: ['维度', 'Chatbot', 'Agent'], rows: [['核心能力', '理解问题→生成回答', '理解目标→规划步骤→调用工具→执行→反馈'], ['交互模式', '单轮/多轮对话', '多步骤任务编排，可能跨多个工具'], ['自主性', '低，等用户提问', '高，可主动规划和执行子任务'], ['工具使用', '通常不具备', '核心能力'], ['典型场景', '客服问答、闲聊、信息查询', '自动化办公、数据分析、复杂流程执行']] },
    bodySections: [{ heading: 'Agent关键组成', content: '① 规划Planning（拆解目标）\n② 工具调用Tool Use（调用外部API）\n③ 记忆Memory（跨步骤保持上下文）\n④ 反思Reflection（检查结果调整策略）' }, { heading: '选型思路', content: '用户只是"问问题得答案" → Chatbot足够；用户要"完成一件事" → 需要Agent。' }],
    followUps: [{ question: 'Agent和普通工作流区别？', answer: '工作流步骤固定按预设路径执行；Agent能根据中间结果动态调整计划。' }, { question: '设计Agent最大风险？', answer: '失控风险、成本不可控、错误累积。' }, { question: '怎么判断适不适合做Agent？', answer: '看任务是否多步骤、是否需要调用外部工具、是否有明确完成标准；简单问答不适合过度工程化。' }],
    relatedReadings: ['basics/agent-vs-chatbot.md'],
  },
  {
    questionNumber: 6, questionId: 'c6', difficulty: '⭐⭐ 入门必备', frequency: '高',
    keyPoints: ['能否识别AI适合和不适合的问题类型', '是否理解"AI不是万能钥匙"'],
    answerSummary: 'AI适合解决"模糊、开放、大规模"的问题，不适合"精确、规则明确、小规模"的问题。',
    table: { headers: ['维度', '适合AI', '不适合AI'], rows: [['问题性质', '模式识别、语义理解、生成创作', '精确计算、严格规则、确定性逻辑'], ['容错空间', '允许近似答案，可人工兜底', '零容错（支付金额、医疗剂量）'], ['数据基础', '有足够训练/检索数据', '数据稀缺或高度敏感'], ['规模效应', '高频、重复、人力成本高', '低频、个案、规则可穷举']] },
    bodySections: [{ heading: '快速判断清单', content: '① 人能不能做？人能做且规则清晰→传统规则引擎可能更好\n② 错了代价多大？代价极高→需人工审核兜底\n③ 有没有数据？无历史数据→先积累或从RAG/Prompt轻量起步\n④ ROI算不算得过来？人工成本<AI成本→不值得做' }, { heading: '常见误判', content: '"有AI就能做"、"ChatGPT能答就说明能做"、"竞品做了所以我们也做"。' }],
    followUps: [{ question: '业务方说"我们也要个大模型"怎么回应？', answer: '先问清解决什么具体问题、成功标准是什么、现有方案哪里不够好。' }, { question: 'AI需求和伪需求怎么区分？', answer: '真需求有明确痛点、可量化收益、数据基础具备；伪需求为AI而AI。' }, { question: 'AI搞不定给什么替代方案？', answer: '规则引擎、人工+工具辅助、简化问题范围、分阶段引入AI。' }],
    relatedReadings: ['basics/when-to-use-ai.md'],
  },
  {
    questionNumber: 7, questionId: 'c7', difficulty: '⭐⭐ 入门必备', frequency: '高',
    keyPoints: ['能否用通俗语言解释token', '是否理解token同时影响成本和体验'],
    answerSummary: 'Token是大模型处理文本的最小单位——英文约4字符一个token，中文约1.5-2字一个token。',
    table: { headers: ['影响维度', '机制', '产品含义'], rows: [['成本', 'API按token数计费（输入+输出）', '上下文越长、回答越多，单次成本越高'], ['体验', '模型有上下文窗口上限', '超出上限内容会被截断，长对话会"失忆"'], ['延迟', '生成token数越多，耗时越长', '冗长回答影响响应速度']] },
    bodySections: [{ heading: '成本优化思路', content: '① 精简Prompt\n② 控制输出长度\n③ RAG精准检索只塞相关片段\n④ 缓存复用\n⑤ 模型分级（简单问题用小模型）' }, { heading: 'PM要会算的账', content: '日活 × 人均对话轮次 × 每轮token数 × 单价 = 日成本。' }],
    followUps: [{ question: '成本涨了10倍怎么降本？', answer: '分层路由、缓存高频问答、优化Prompt、设置用量上限和熔断。' }, { question: '上下文窗口越大越好吗？', answer: '不一定：窗口大意味着单次成本高、推理慢；"够用就好"。' }, { question: '怎么估算月均模型成本？', answer: '预估DAU×使用率×人均调用次数×平均token数×单价，留2-3倍buffer。' }],
    relatedReadings: ['basics/token-cost-and-experience.md'],
  },
  {
    questionNumber: 8, questionId: 'c8', difficulty: '⭐⭐ 入门必备', frequency: '中',
    keyPoints: ['能否用通俗语言解释', '是否理解两者此消彼长关系'],
    answerSummary: '精确率关注"找出来的对不对"，召回率关注"该找的有没有找全"。',
    table: { headers: ['指标', '回答的问题'], rows: [['精确率Precision', '报出来的有多少是对的？'], ['召回率Recall', '该找的有没有漏掉？']] },
    bodySections: [{ heading: '经典类比——捕鱼', content: '精确率高 = 网到的都是目标鱼但可能漏了很多；召回率高 = 目标鱼基本都网到了但也混了不少杂鱼。' }, { heading: '决策框架', content: '漏掉代价大（安全合规）→ 优先拉高召回率，人工复核兜底；误报代价大（推荐搜索）→ 优先拉高精确率，宁缺毋滥。' }],
    followUps: [{ question: '精确率和准确率是一回事吗？', answer: '不是。准确率是整体正确比例；正负样本不均衡时准确率会误导。' }, { question: 'F1分数是什么？', answer: '精确率和召回率的调和平均。' }, { question: 'RAG中怎么平衡？', answer: '先拉高召回（多检索候选），再用Rerank提升精确率，"宽进严出"。' }],
    relatedReadings: ['basics/precision-vs-recall.md'],
  },
  {
    questionNumber: 9, questionId: 'c9', difficulty: '⭐⭐ 入门必备', frequency: '高',
    keyPoints: ['能否识别准确性和延迟的结构性张力', '能否给出产品层面的权衡策略'],
    answerSummary: '提升准确性往往意味着更多计算，而用户等待耐心有限。',
    table: { headers: ['场景类型', '准确性要求', '延迟容忍', '策略'], rows: [['高风险决策（医疗/金融）', '极高', '可等几秒', '优先准确性，用Rerank、多轮验证'], ['实时交互（客服/搜索）', '中高', '1-3秒', '平衡，小模型+RAG组合'], ['批量处理（报告生成）', '高', '分钟级可接受', '准确性优先，异步处理'], ['创意辅助（写作/脑暴）', '中', '越快越好', '延迟优先，快速出草稿']] },
    bodySections: [{ heading: '产品权衡手段', content: '① 分层响应（先快速返回简要回答，后台补充）\n② 场景路由（简单问题走轻量链路）\n③ 用户预期管理（展示"正在深度分析..."）\n④ 缓存策略（高频问题预生成）' }],
    followUps: [{ question: 'RAG加了检索后延迟上升怎么优化？', answer: '检索链路优化、结果缓存、异步预检索、按问题复杂度动态选择检索深度。' }, { question: '用户反馈"回答太慢"怎么判断？', answer: '看跳出率、中途取消率、满意度与响应时间相关性。' }, { question: '流式输出能缓解吗？', answer: '能改善感知延迟（首token时间），但总生成时间不变。' }],
    relatedReadings: ['basics/accuracy-vs-latency.md'],
  },
  {
    questionNumber: 10, questionId: 'c10', difficulty: '⭐⭐⭐ 常考综合', frequency: '高',
    keyPoints: ['能否描述飞轮闭环逻辑', '是否理解数据飞轮是核心竞争壁垒'],
    answerSummary: '数据飞轮：用户使用产品→产生行为数据→数据用于优化模型/体验→更好体验吸引更多用户→形成自我强化循环。',
    bodySections: [{ heading: '飞轮四步循环', content: '用户使用产品 → 产生行为数据（对话、反馈、标注）→ 数据用于优化（微调、评测集扩充、Prompt迭代）→ 产品体验提升 → 吸引更多用户 → 循环加速。' }, { heading: '为什么重要', content: '① AI产品边际成本递减：数据越多模型越好\n② 数据壁垒难以复制：竞品可以抄功能但抄不走用户数据\n③ 冷启动后的护城河：飞轮转起来后追赶成本指数级上升' }, { heading: '产品如何设计飞轮', content: '① 埋点采集（用户反馈、对话日志、纠错行为）\n② 闭环机制（bad case自动进入评测集→优化→验证→上线）\n③ 激励机制（让用户愿意贡献数据）' }],
    followUps: [{ question: '飞轮转不起来怎么办？', answer: '排查：数据量不够、数据质量差、闭环链路断了。' }, { question: '数据飞轮和模型飞轮区别？', answer: '数据飞轮强调用户行为数据积累；模型飞轮强调模型能力迭代，两者通常叠加。' }, { question: '用户隐私和数据飞轮怎么平衡？', answer: '脱敏处理、用户授权、差分隐私；透明告知数据用途，提供退出机制。' }],
    relatedReadings: ['basics/data-flywheel.md'],
  },
  {
    questionNumber: 11, questionId: 'c11', difficulty: '⭐⭐ 入门必备', frequency: '极高',
    keyPoints: ['能否区分预训练/微调/SFT三个阶段', '能否从产品视角判断什么时候用什么'],
    answerSummary: '预训练是"读书学通用知识"，微调是"上岗培训学特定技能"，SFT是微调中最常见的"照例题学"方式。',
    table: { headers: ['阶段', '做什么', '数据', '产出'], rows: [['预训练', '海量文本上学习语言规律和世界知识', '互联网级语料（无标注）', '基座模型'], ['微调Fine-tuning', '在基座上用特定数据继续训练', '领域数据（有标注）', '适配特定任务的模型'], ['SFT监督微调', '用"输入-标准输出"对训练', '高质量QA对、对话样本', '学会特定回答方式和格式']] },
    bodySections: [{ heading: '关键区分', content: '预训练决定模型"知识上限"，微调/SFT决定"行为模式"。SFT是微调的主流实现方式。' }, { heading: '应用场景', content: '预训练构建基座（产品侧选型而非自研）；SFT用于客服话术统一、医疗报告格式固定、代码补全风格对齐。知识类问题优先RAG，SFT解决"怎么说"而非"知道什么"。' }],
    followUps: [{ question: '预训练和微调哪个影响更大？', answer: '预训练决定底座能力上限，微调是在上限内调整行为。' }, { question: 'SFT和RLHF区别？', answer: 'SFT用标准答案教"怎么答"，RLHF用人类偏好反馈教"哪个答得更好"。' }, { question: '什么情况下不做微调？', answer: '通用能力够用、数据不足、迭代要求高时优先Prompt+RAG。' }],
    relatedReadings: ['basics/pretrain-finetune-sft.md'],
  },
  {
    questionNumber: 12, questionId: 'c12', difficulty: '⭐⭐⭐ 进阶', frequency: '高',
    keyPoints: ['能否理解LoRA的核心思想', '能否对比全量微调和LoRA'],
    answerSummary: '全量微调是"重新培训整个员工"，LoRA是"只培训关键技能模块"。',
    table: { headers: ['维度', '全量微调', 'LoRA'], rows: [['训练参数量', '全部模型参数', '仅少量低秩矩阵（通常<1%）'], ['显存/算力需求', '高，需要多卡', '低，单卡可完成'], ['训练速度', '慢', '快'], ['效果上限', '更高，尤其复杂任务', '多数场景接近全量'], ['多任务切换', '每个任务需完整模型副本', '可热切换不同LoRA适配器']] },
    bodySections: [{ heading: '选型建议', content: '数据量大、任务复杂、追求极致效果 → 全量微调；资源有限、需快速迭代、多任务并行 → LoRA；大多数产品团队的现实选择 → LoRA。' }],
    followUps: [{ question: 'LoRA效果不如全量怎么决策？', answer: '看业务指标差距是否显著，LoRA已满足上线标准就优先快速迭代。' }, { question: '微调数据和基座选型哪个重要？', answer: '数据质量 > 数据数量 > 基座选型。' }, { question: 'LoRA怎么管理多场景？', answer: '一个基座+多个LoRA权重，按场景路由加载。' }],
    relatedReadings: ['basics/lora-vs-full-finetuning.md'],
  },
  {
    questionNumber: 13, questionId: 'c13', difficulty: '⭐⭐⭐ 进阶', frequency: '高',
    keyPoints: ['能否区分RAG的多个环节', '是否理解每个环节的核心评测指标'],
    answerSummary: 'RAG的"准确率"不是单一指标，需要分环节评测。',
    table: { headers: ['环节', '评测什么', '核心指标'], rows: [['检索', '相关知识有没有被找回来', '召回率Recall、精确率Precision'], ['重排', '最相关的排前面了吗', 'MRR、NDCG'], ['生成', '基于检索内容回答得好不好', '忠实度Faithfulness、相关性'], ['端到端', '最终答案对不对', '回答准确率、用户满意度']] },
    bodySections: [{ heading: '评测集构建', content: '① 从真实用户问题采样（高频+长尾）\n② 人工标注标准答案和应检索文档\n③ 加入边界case（歧义、多跳、未覆盖问题）\n④ 定期用新bad case扩充' }, { heading: 'PM关键动作', content: '定义"什么算检索对了"、推动标注流程、建立迭代闭环。' }],
    followUps: [{ question: '检索召回率高但回答不准？', answer: '生成环节问题，检索内容对了但模型没用好或切片粒度问题。' }, { question: '知识库更新怎么保证评测集不过时？', answer: '定期同步更新，用线上新问题补充，设置覆盖率指标监控盲区。' }],
    relatedReadings: ['basics/rag-kb-accuracy-evaluation.md'],
  },
  {
    questionNumber: 14, questionId: 'c14', difficulty: '⭐⭐ 入门必备', frequency: '高',
    keyPoints: ['能否准确描述上下文窗口的含义和限制', '是否理解"上下文≠记忆"', '能否说出常见的"记忆"产品实现方式'],
    answerSummary: '上下文窗口是模型单次能"看到"的最大token数量，超出部分模型无法感知。',
    bodySections: [{ heading: '关键认知', content: '上下文窗口 ≠ 记忆，模型不会"记住"上次对话，每次请求都是独立的。' }, { heading: '"记忆"的三种产品实现', content: '• 对话历史拼接：把历史消息塞进上下文窗口 → 适用于短对话\n• 摘要压缩：定期把历史压缩成摘要 → 适用于中长对话，节省token\n• 外部记忆库：关键信息存数据库，需要时检索注入 → 适用于跨会话记忆、用户画像' }, { heading: '产品设计要点', content: '长对话接近窗口上限时主动摘要而非粗暴截断；跨会话用外部存储；明确告知用户"能记住什么"；不是窗口越大越好，够用+合理记忆策略更实际。' }],
    followUps: [{ question: '用户抱怨"你刚才不是说好了吗"？', answer: '检查历史是否被截断，优化摘要策略，关键信息写入外部记忆库。' }, { question: '上下文窗口和RAG关系？', answer: 'RAG是用检索突破窗口限制的手段。' }, { question: '多轮对话token成本怎么控制？', answer: '历史摘要、滑动窗口、关键信息提取后丢弃原文。' }],
    relatedReadings: ['basics/context-window-and-memory.md'],
  },
  {
    questionNumber: 15, questionId: 'c15', difficulty: '⭐⭐⭐ 进阶', frequency: '高',
    keyPoints: ['能否区分Prompt Engineering和Context Engineering', '能否说出PM在Context Engineering中的职责'],
    answerSummary: 'Prompt Engineering管"怎么吩咐模型"；Context Engineering管"这一次推理里窗口里到底有什么、以及这套状态怎么随轮次更新"。',
    table: { headers: ['维度', 'Prompt Engineering', 'Context Engineering'], rows: [['核心问题', '指令怎么写才稳、才可测', '这一步该装哪些token、以什么形态装'], ['典型对象', 'System/User文案、示例、输出格式', '检索片段、对话/工具历史、记忆条目、工具schema'], ['时间尺度', '一次写好+版本迭代', '每轮/每步动态策展'], ['失败形态', '歧义、格式漂移、边界不清', '该进的没进、噪声挤爆窗口、tool_result堆积']] },
    bodySections: [{ heading: '答题展开三步', content: '① 先拆失败（指令写糊了还是上下文没进对？）\n② 再列窗口部件（系统指令只是一小块，还有工具定义、RAG片段、多轮历史、tool_result、记忆）\n③ 最后划职责（PM管"要什么上下文、什么约束下拼、怎样算拼对了"，工程管caching、compaction等实现）' }],
    followUps: [{ question: '优化过Prompt算不算做了Context Engineering？', answer: '不算自动等价，改文案是Prompt资产；有没有按场景策展检索/历史/工具结果才是Context系统。' }, { question: '窗口都1M了还需要吗？', answer: '需要，窗口变大降低"塞不下"硬约束但不消除噪声、成本和"中间遗忘"风险。' }, { question: 'PM在Context上写什么进PRD？', answer: '上下文清单（必须有/可以有/禁止进窗）、token/延迟上限、工具最小必要集、触顶降级口径。' }],
    relatedReadings: ['basics/what-is-context-engineering.md'],
  },
  {
    questionNumber: 16, questionId: 'c16', difficulty: '⭐⭐⭐ 常考综合', frequency: '高',
    keyPoints: ['能否识别黑箱问题的本质', '能否给出产品层面的缓解策略'],
    answerSummary: '黑箱问题：大模型决策过程不可解释——用户看到输入输出但不知道"为什么这么答"。',
    table: { headers: ['策略', '具体做法', '解决的信任问题'], rows: [['可解释性', '展示引用来源、推理步骤、置信度', '"为什么这么答"'], ['可控性', '让用户能编辑/否决/选择回答', '"我能掌控结果"'], ['一致性', '相似问题给相似回答', '"结果是稳定的"'], ['兜底机制', '人工介入入口、降级方案、明确能力边界', '"出错了有退路"'], ['渐进信任', '从辅助建议到自动执行，逐步建立信心', '"可以先试试看"']] },
    bodySections: [{ heading: '对信任的三重打击', content: '① 不可预测（同一问题不同答案）\n② 不可纠错（出错不知如何反馈）\n③ 不可问责（出问题难定位）' }, { heading: '设计原则', content: '不是让用户"理解模型原理"，而是让用户"感到可控"。' }],
    followUps: [{ question: 'Citation能解决黑箱吗？', answer: '部分解决，用户能验证知识来源但生成逻辑仍不透明，是性价比最高的信任建设手段。' }, { question: 'B端和C端容忍度一样吗？', answer: 'B端更关注可审计可复现，C端更关注结果好不好用。' }, { question: '用户说"不相信AI答案"怎么提升采纳率？', answer: '从低风险辅助功能切入，用数据证明准确率，设计"AI错了轻松纠正"的反馈路径。' }],
    relatedReadings: ['basics/ai-blackbox-trust.md'],
  },
  {
    questionNumber: 17, questionId: 'c17', difficulty: '⭐⭐⭐⭐ 高频难点', frequency: '高',
    keyPoints: ['能否识别离线-线上Gap的常见根因', '是否有系统化的排查框架'],
    answerSummary: '离线全绿≠线上稳定好用，Gap来自分布、指标、链路、方差或过拟合。',
    table: { headers: ['根因', '表现', '排查动作'], rows: [['评测分布≠线上分布', '集子是干净问法；用户是方言错别字多意图', '按线上频率分桶重采样'], ['评测维度≠用户价值', 'Evals涨在流畅度；用户要一次办成', '把采纳、完成、转人工与eval对齐'], ['链路瓶颈不在模型', '模型分涨了但检索/兜底/UI仍卡住', '按链路分段看改善是否触达用户'], ['方差被当成稳定质量', '单次跑分全绿；线上时好时坏', '离线多trial；线上按会话聚合看分布'], ['过拟合评测集', '对着同一批case调到满分', '保留held-out；新日志持续进集']] },
    bodySections: [{ heading: '默认闭环', content: '离线评测集+安全闸门 → 小流量/影子观察 → 正式A/B（预注册OEC+护栏）→ 结论与离线对照；负向会话脱敏回流评测集。' }],
    followUps: [{ question: 'evals能替代A/B吗？', answer: '不能，evals看任务表现，A/B看真实用户与业务因果，两者互补。' }, { question: '怎么证明不是方差骗人？', answer: '离线同一用例多跑报均值与波动，线上以用户/会话为分析单元。' }, { question: '没有golden set怎么办？', answer: '先用真实轨迹抽样建种子集，行为哨兵与质量哨兵并行。' }],
    relatedReadings: ['basics/offline-eval-online-gap.md'],
  },
  {
    questionNumber: 18, questionId: 'c18', difficulty: '⭐⭐⭐ 进阶', frequency: '中高',
    keyPoints: ['能否理解AI产品A/B测试的核心差异（生成方差）', '是否知道AI实验需要额外关注的护栏指标'],
    answerSummary: '传统A/B比较两种大体确定的体验；AI A/B比较两种带生成方差的系统——结论要建立在分布差异上。',
    table: { headers: ['维度', '传统产品A/B', 'AI产品A/B'], rows: [['处理对象', 'UI/流程/规则，体验确定', 'Prompt/模型/检索/Agent策略，输出概率'], ['组内一致性', '同组用户体验大体一致', '同组内也可能因采样而差很大'], ['主要噪声', '用户异质性、季节性', '上述全部+生成方差+任务难度长尾'], ['护栏', '崩溃、延迟、核心漏斗', '再加上拒答、幻觉/安全、转人工、单位成本']] },
    bodySections: [{ heading: '三条原则', content: '① 预注册假设、OEC、护栏与停止规则\n② 显式处理生成随机性（固定模型版本与采样参数，以用户/会话为分析单元）\n③ 离线质量门+线上因果门（离线未过闸门不进A/B，线上显著要回看离线是否同向）' }],
    followUps: [{ question: '离线涨了线上不动怎么查？', answer: '分布不一致、入口没触达、延迟或成本拖垮体验。' }, { question: 'AI实验一定要更大样本吗？', answer: '往往方差更高可能需要更长窗口，但用历史方差与MDE算功效，不套外部经验天数。' }],
    relatedReadings: ['basics/ai-ab-testing-difference.md'],
  },
  {
    questionNumber: 19, questionId: 'c19', difficulty: '⭐⭐⭐ 进阶', frequency: '高',
    keyPoints: ['能否描述Agentic Workflows的核心特征', '能否判断适用场景'],
    answerSummary: 'Agentic Workflows是由AI Agent驱动的自动化工作流——LLM不仅执行任务，还负责理解目标、规划步骤、动态调整路径。',
    table: { headers: ['维度', '传统工作流', 'Agentic Workflows'], rows: [['步骤定义', '人工预设，固定路径', 'AI动态规划，可调整'], ['分支逻辑', 'if-else规则', 'LLM理解上下文后决策'], ['异常处理', '预设兜底分支', 'Agent尝试自我修正'], ['灵活性', '低，改流程需改代码', '高，改Prompt即可调整'], ['可控性', '高，每步可预期', '较低，存在不确定性']] },
    bodySections: [{ heading: '适用场景', content: '步骤不固定需根据中间结果调整的任务（调研报告生成）、需要理解判断的自动化（工单分类+路由）、跨多个工具的复杂流程编排。不适用：步骤严格固定零容错流程（支付）、简单重复任务。' }],
    followUps: [{ question: '和RAG什么关系？', answer: '互补，RAG解决"知识从哪来"，Agentic Workflows解决"任务怎么做"。' }, { question: '怎么控制成本？', answer: '限制最大步骤数、设置工具调用预算、简单任务走固定流程。' }, { question: '某一步做错了怎么办？', answer: '设计检查点，关键步骤人工确认，自动重试+降级到规则逻辑。' }],
    relatedReadings: ['basics/agentic-workflows.md'],
  },
  {
    questionNumber: 20, questionId: 'c20', difficulty: '⭐⭐⭐ 常考综合', frequency: '中高',
    keyPoints: ['能否说出国内生成式AI合规的主要板块', '是否理解PM在合规中的角色'],
    answerSummary: '六块框架：适用性、内容安全、标识、备案与评估、个保与训练数据、协议与投诉。（不构成法律意见，法规以法务意见为准）',
    table: { headers: ['板块', 'PM要能说清的要点'], rows: [['1. 适用性', '是否向境内公众提供生成服务；调海外API不自动免责'], ['2. 内容安全', '禁止类内容映射成拦截类别、人工复核、应急下线'], ['3. 标识', '显式/隐式标识（尤其图视频）；下载导出仍带标识'], ['4. 备案与评估', '是否落入"舆论属性/社会动员能力"→安全评估+算法备案；判定需法务'], ['5. 个保与训练数据', '最小必要、敏感信息单独同意、查阅/删除通道；用户数据能否训练需告知/退出'], ['6. 协议、投诉与承诺', '服务协议、投诉举报入口、滥用处置；营销文案不写"绝对安全"']] },
    bodySections: [{ heading: '三条加分边界', content: '① 分清事实义务/产品建议/必须升级法务\n② 中国包≠出海包（GDPR/EU AI Act各不同）\n③ 答题锚定官方法规，不把第三方PDF当法条' }],
    followUps: [{ question: '调用海外API算不算数据出境？', answer: '面向境内用户提供服务时产品方通常仍要按提供者准备合规材料，出境路径需评估，需法务。' }, { question: '生成内容版权归谁？', answer: '司法实践仍在发展，需法务，产品侧做预期管理和notice-and-takedown。' }, { question: '中欧美合规差在哪？', answer: '中国侧重生成服务专项义务+个保；欧盟AI Act风险分级+GDPR；美国多为行业法/州隐私法。' }],
    relatedReadings: ['basics/genai-compliance-for-pm.md'],
  },
];
