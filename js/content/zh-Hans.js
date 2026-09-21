/* Simplified Chinese course content. Mirrors js/content/en.js block for block.
   Keep block types and ids identical across languages. */
window.ENTG_CONTENT = window.ENTG_CONTENT || {};
window.ENTG_CONTENT['zh-Hans'] = {
  ui: {
    skip: '跳至内容', language: '语言', menu: '课程菜单',
    courseTitle: '卓越领导者画像', courseSubtitle: 'Entegris 的日常领导力',
    heroEyebrow: '领导力发展', startCourse: '开始课程', resumeCourse: '继续课程',
    outline: '课程大纲', lessons: '课程单元', lessonOf: '第 {a} 课，共 {b} 课',
    percentComplete: '已完成 {p}%', complete: '已完成', inProgress: '进行中', notStarted: '未开始',
    continueBtn: '继续', completeCourse: '完成课程', courseCompleted: '课程已完成',
    prev: '上一步', next: '下一步', home: '课程首页',
    videoPlaceholder: '视频占位符', captions: '16:9 · 需要字幕',
    download: '下载', flip: '翻转', select: '选择 {x}', selected: '已选择',
    yourChoice: '您的选择', chooseResponse: '选择一种回应', pickClosest: '选择最接近您实际做法的选项。',
    reflect: '反思', notesLocal: '您的笔记将与课程进度一同保存。',
    footerCopy: '© 1994-2026 Entegris。保留所有权利。', footerInternal: '内部培训资料',
    thatsAWrap: '您已完成所有课程单元。', backToOutline: '返回课程大纲',
    objectives: '学习目标', expand: '展开', translationNote: '翻译初稿。发布前请由母语人士审校。'
  },
  home: {
    title: '卓越领导者画像',
    subtitle: 'Entegris 的日常领导力',
    tagline: '展现您的领导力。每一天。',
    intro: '卓越的领导者如何应对增长、变革与不确定性？在本课程中，您将了解如何将全新升级的卓越领导者画像（GLP）应用于您在 Entegris 的日常领导工作。通过实用的反思、真实情境和可落地的策略，您将识别自身的领导优势，掌握赋能团队的新方法，并学习如何传达和示范 GLP，从而产生持久影响。课程结束时，您将能够自信地领导自己与他人，让 GLP 成为您领导力旅程中的鲜活指南。',
    facts: [
      { k: '课程单元', v: '5' },
      { k: '形式', v: '视频 · 情境 · 反思' },
      { k: '用时', v: '≈ 60 分钟' },
      { k: '请准备', v: '《GLP 手册》' }
    ]
  },
  lessons: [
    {
      id: 'intro',
      title: '卓越领导者画像（GLP）介绍及其当下意义',
      short: 'GLP 介绍',
      blocks: [
        { type: 'heading', text: '为什么卓越领导者画像在当下如此重要' },
        { type: 'text', html: '欢迎学习卓越领导者画像（GLP）介绍。作为 Entegris 的领导者，您在塑造企业文化和推动企业成功方面发挥着关键作用。本课将帮助您了解 GLP 的演进历程、核心特质，以及在我们携手应对增长与变革之际，它为何比以往任何时候都更具意义。' },
        { type: 'video', id: 'l1-glp', title: 'Entegris 卓越领导者画像' },
        { type: 'text', html: '明确的学习目标有助于您聚焦学习，并理解本课的每个部分如何支持您作为领导者的成长。清楚自己将达成什么，能帮助您更好地将 GLP 理念与日常领导实践联系起来。' },
        { type: 'objectives', items: [
          '了解卓越领导者画像为何是 Entegris 领导力的指引。',
          '识别在我们组织中定义卓越领导力的核心特质与行为。',
          '了解 GLP 如何在组织增长与变革时期保持一致性与清晰度。',
          '认识到在 Entegris，领导力属于每一个人，而不仅限于人员管理者。'
        ] },
        { type: 'heading', text: '探索卓越领导者画像' },
        { type: 'text', html: '理解 GLP 的基础对每一位 Entegris 领导者都至关重要。请展开下方各部分，了解其目的、演进历程、核心特质，以及它如何适用于所有领导者。' },
        { type: 'accordion', items: [
          { title: 'GLP 的目的', html: '<p>卓越领导者画像旨在定义 Entegris 卓越领导力的样貌，并为所有领导者设定明确的期望。它是一份实用指南，帮助领导者将行动与公司战略保持一致，同时允许真实、个性化的领导风格。</p><p>通过提供这种清晰度，GLP 使领导者能够做出一致的决策，并在整个组织中培育积极、高绩效的文化。</p>' },
          { title: 'GLP 的演进', html: '<p>自 2018 年推出以来，GLP 与 Entegris 一同不断演进。随着组织的成长和新挑战的出现，我们认识到需要重新审视并更新这一画像，以反映当前的现实。</p><p>更新后的 GLP 纳入了新的期望与行为，确保它在变革与增长时期仍是一份切实有效的领导力指南。</p>' },
          { title: 'GLP 特质', html: '<p>GLP 概括了定义 Entegris 卓越领导力的七项核心特质：</p><ul><li>为未来培养人才</li><li>推动全球组织协作</li><li>促进创新</li><li>以坚韧与谦逊领导</li><li>快速做出数据驱动的决策</li><li>推动以客户为中心</li><li>推动责任担当</li></ul>' },
          { title: '面向所有领导者的 GLP', html: '<p>在 Entegris，领导力不仅限于人员管理者。无论职位或角色，GLP 适用于每一个人。它关乎您在日常工作中如何展现自己、如何协作、如何承担责任。</p><p>通过践行 GLP，每位团队成员都能为我们的领导力文化贡献力量，并在整个组织中产生积极影响。</p>' }
        ] },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'GLP 特质及其含义' },
        { type: 'text', html: '回顾每项 GLP 特质的定义，有助于您深入领会 Entegris 卓越领导力的样貌。' },
        { type: 'video', id: 'l1-characteristics', title: 'GLP 特质' },
        { type: 'characteristics', center: 'PACE', sub: '价值观驱动的文化', items: [
          { icon: 'talent', name: '为未来培养人才', desc: '积极发展自己和他人，让团队为未来的挑战与机遇做好准备。' },
          { icon: 'globe', name: '推动全球组织协作', desc: '跨团队、跨区域高效协作，实现共同目标，增强我们的全球影响力。' },
          { icon: 'bulb', name: '促进创新', desc: '鼓励创造性思维和新想法，支持持续改进与灵活应变。' },
          { icon: 'shield', name: '推动责任担当', desc: '设定明确期望，支持落实执行，确保个人和团队对承诺负责。' },
          { icon: 'flag', name: '以坚韧与谦逊领导', desc: '展现韧性与决心，同时保持开放心态，接受反馈并向他人学习。' },
          { icon: 'hand', name: '推动以客户为中心', desc: '优先考虑客户需求并创造价值，建立稳固持久的合作关系。' },
          { icon: 'gauge', name: '快速做出数据驱动的决策', desc: '运用相关数据与洞察，及时做出明智决策，推动成果达成。' }
        ] },
        { type: 'heading', text: '记忆卡片' },
        { type: 'text', html: '使用这些记忆卡片巩固理解，并为在您自己的领导力旅程中运用这些特质做好准备。选择卡片即可翻转。' },
        { type: 'flashcards', useCharacteristics: true },
        { type: 'quote', text: '每一天都是以目标为导向进行领导、创造积极改变的机会。无论您的职位或头衔如何，GLP 都能助您成为 Entegris 所需要的领导者。' }
      ]
    },
    {
      id: 'collaboration',
      title: '领导力时刻：压力下的协作',
      short: '压力下的协作',
      blocks: [
        { type: 'text', html: '压力见领导力。当时间紧迫或矛盾加剧时，您的回应会影响信任、一致性与成果。在这个领导力时刻中，您将探索优秀的领导者如何在压力下协作、保持清晰、强化共同责任，并防止孤岛形成。' },
        { type: 'text', html: '在学习本模块的过程中，请反思：在最关键的时刻，您是如何表现的？' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: '领导力成长始于压力下的协作' },
        { type: 'text', html: '协作在压力上升时才真正受到考验。在高风险情境中，领导者必须在紧迫性与一致性之间取得平衡，将人们凝聚在一起，而不是任由孤岛或指责蔓延。您在这些时刻的回应，塑造着信任、绩效与文化。' },
        { type: 'text', html: '现在请观看视频，并在反思这一领导力时刻时，务必结合您的《GLP 手册》。' },
        { type: 'video', id: 'l2-moment', title: '领导力时刻：压力下的协作' },
        { type: 'heading', text: '有效的领导决策' },
        { type: 'text', html: 'Materials Solutions 工厂因协作不畅和团队孤岛而面临供应链中断。为解决这些问题，已安排了一场跨职能会议，但关键参与者 Peter 无法出席。可以考虑三个选项：推迟会议、按完整议程进行，或调整议程以聚焦于可解决的问题。领导者选择了调整会议，从而保持了推进势头并促进了协作。有效的领导者善于适应、推动进展，并为解决方案建立共同责任。' },
        { type: 'scenario', id: 'l2', prompt: '关键参与者 Peter 无法参加跨职能会议。您会怎么做？', options: [
          { key: 'a', title: '推迟会议', text: '等到 Peter 有空，确保所有人都在场。', tag: '失去势头', good: false, feedback: '推迟会议传递的信号是：进展要等一个人。团队停滞不前，供应链问题持续给工厂造成损失，而导致问题的孤岛依然存在。' },
          { key: 'b', title: '按完整议程进行', text: '按计划召开会议，在 Peter 缺席的情况下讨论他负责的事项。', tag: '一致性受损', good: false, feedback: '在负责人不在场的情况下就 Peter 的事项做出决定。这会招致日后的返工与指责，而这正是压力下的协作所要避免的。' },
          { key: 'c', title: '调整议程', text: '聚焦于在场人员当下能解决的问题，并与 Peter 另行安排他负责的事项。', tag: '共同责任', good: true, feedback: '您保持了推进势头，尊重了 Peter 的责任归属，并让团队取得了可以继续推进的实质进展。调整会议将压力转化为协作，而非孤岛。' }
        ] },
        { type: 'quote', text: '真正的协作在压力下最为耀眼，团结将挑战转化为成功的机遇。' }
      ]
    },
    {
      id: 'letting-go',
      title: '领导力时刻：在恰当的层级放手',
      short: '在恰当的层级放手',
      blocks: [
        { type: 'text', html: '授权不仅仅是分派工作，更是移交恰当层级的权力。在这个领导力时刻中，您将审视“保持参与”与“真正退后”之间的张力。有效的领导者有意识地放手。他们为他人创造空间去领导、做决策并建立可信度，即使风险很高。在恰当的层级放手，能够增强信任、培养能力并强化主导权。' },
        { type: 'text', html: '在学习本部分的过程中，请思考：您是在分派任务，还是在赋能领导？' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: '领导力成长延续于在恰当的层级放手' },
        { type: 'text', html: '现在请观看视频，密切关注权力在当下是如何被强化或被收回的。观看时，请结合您的《GLP 手册》，反思您的授权方式。您是在移交真正的主导权，还是靠得比必要的更近？' },
        { type: 'video', id: 'l3-moment', title: '领导力时刻：在恰当的层级放手' },
        { type: 'heading', text: '赋能式领导' },
        { type: 'text', html: '一位工厂领导者将一项关键举措授权给高绩效团队成员 Jessica。当一位利益相关方建议领导者应出席会议时，领导者必须决定是收回控制权，还是充分赋能 Jessica。选择让 Jessica 独立主导，体现了信任，建立了她的可信度，并支持她作为领导者成长。' },
        { type: 'scenario', id: 'l3', prompt: '一位利益相关方建议您出席 Jessica 的会议。您会怎么做？', options: [
          { key: 'a', title: '出席并主导', text: '加入会议并亲自主导，让利益相关方安心。', tag: '控制权被收回', good: false, feedback: '利益相关方安心了，但 Jessica 的权威在众人面前烟消云散。您等于告诉所有人，这项举措实际上是您的。' },
          { key: 'b', title: '旁听，以防万一', text: '安静地坐在后排旁听，只在情况失控时才介入。', tag: '主导权被稀释', good: false, feedback: '您的在场改变了会议室的气氛。问题会转向您，Jessica 开始怀疑自己，利益相关方也学会了越过她。靠得比必要的更近，同样会损害她的可信度。' },
          { key: 'c', title: '婉拒并支持 Jessica', text: '向利益相关方确认 Jessica 拥有全部权力，并主动提出事先与她一起准备。', tag: '恰当的层级', good: true, feedback: '您移交了真正的权力，并让利益相关方看到这一点。事先一起准备为 Jessica 提供了支持，却没有从她手中夺走会议室。信任、可信度和能力都得以增长。' }
        ] },
        { type: 'quote', text: '真正的领导力在于懂得何时放手；在恰当的层级赋能他人，能够培育信任、成长与共同成功。' }
      ]
    },
    {
      id: 'reinforce',
      title: '领导力时刻：强化还是收回？',
      short: '强化还是收回？',
      blocks: [
        { type: 'text', html: '强化信任与重新聚焦是至关重要的领导力技能。有效的领导者懂得何时退后以赋能团队，何时介入以重新对齐优先事项。通过强化信任，您营造出一种环境，让他人有信心承担责任并做出决策。重新聚焦则确保团队即使在艰难时刻也能与总体目标保持一致。平衡这两种行动能够增强协作并推动成功。' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: '强化还是收回？' },
        { type: 'text', html: '在这个领导力时刻中，您将探索一种常见的张力：当团队成员在主导工作时，您是介入，还是站在他们身后支持？这些时刻往往来得很快，且伴随着压力。您的回应可以强化主导权与可信度，也可能在无意中收回权力。' },
        { type: 'text', html: '观看视频时，请留意所传递的信号——不仅通过言语，也通过在场方式与行动。' },
        { type: 'video', id: 'l4-moment', title: '领导力时刻：强化还是收回？' },
        { type: 'heading', text: '有效的团队支持' },
        { type: 'text', html: 'Materials Solutions 工厂的关键问题解决后，Jessica 和她的团队正在认真准备向主要利益相关方汇报他们的建议。团队对自己的结论充满信心，但仍希望获得建议，以便有效地呈现商业论证，确保能引起听众的共鸣。' },
        { type: 'text', html: '领导者考虑了几种做法：接管演示以确保清晰；仅提供一句简短的安慰；或者辅导团队打磨呈现方式，同时让他们保持对工作的主导权。最终，领导者选择与团队进行有意义的讨论，了解他们的观点，并在不接管流程的前提下提供建设性反馈。' },
        { type: 'text', html: '这种做法凸显了赋能型领导的重要性。通过提供指导并培养信心，领导者能够确保团队在高风险情境中保持责任感、动力和充分准备，从而取得成功。' },
        { type: 'scenario', id: 'l4', prompt: 'Jessica 的团队希望在向利益相关方汇报前听取您的意见。您会怎么做？', options: [
          { key: 'a', title: '重新接手', text: '这次会议至关重要。您审阅演示文稿，进行调整，并亲自主持利益相关方会议。', tag: '收回主导权', good: false, feedback: '接管工作传递了一个明确的信息：关键时刻，这不是你们的工作。Jessica 主导了数月，团队却失去了他们应得的亮相时刻。信心与可信度因此受损。' },
          { key: 'b', title: '发送电子邮件', text: '您告诉团队您理解他们的顾虑，您信任他们，他们应当呈现自己认为正确的内容。', tag: '让团队孤立无援', good: false, feedback: '一条含糊的信息没有为寻求支持的团队提供任何指导或辅导。他们仍不清楚利益相关方的期望，在高曝光时刻来临前更加焦虑。' },
          { key: 'c', title: '先会面倾听', text: '您安排时间与团队会面。在提供意见之前，您请他们先介绍自己的定位与思路。', tag: '强化主导权', good: true, feedback: '您到场、辅导，并在压力上升时克制住收回控制权的冲动。Jessica 保有明确的主导权和真正的决策权。团队感到被赋能，得以继续推进。' }
        ] },
        { type: 'reflect', id: 'l4', title: '我是否真正在赋能我的团队？', intro: '赋能不是我们宣布的，而是团队切身感受到的。请花几分钟思考这些问题。', questions: [
          { q: '如果我不在，工作将如何继续？', hint: '如果进展放缓、决策停滞，或者利益相关方在等您，那就是一个信号。' },
          { q: '我在高曝光时刻的行为可能如何强化或削弱赋能？', hint: '风险升高时您会介入吗？会替团队回答本该由他们回答的问题吗？还是站在他们身后，让他们主导？' },
          { q: '如果我今天更多地赋能团队，六个月后他们能如何更独立地运作？', hint: '他们是在提出解决方案，而不是上报问题吗？是否主导与利益相关方的对话？判断力是否在成长？' }
        ] },
        { type: 'quote', text: '重新聚焦，强化优先事项；成功始于清晰与决心。' }
      ]
    },
    {
      id: 'closing',
      title: '结语：三项立即行动',
      short: '三项立即行动',
      blocks: [
        { type: 'text', html: '纵观这些领导力时刻，有一个主题格外突出：领导力是在实时中定义的。往往短暂，有时令人不适，但始终影响深远。无论是在压力下协作、强化或收回权力，还是在恰当的层级放手，您的回应都在传递信号：关于信任、关于主导权，乃至关于领导力在行动中的样貌。卓越的领导者是有意识的。他们强化可信度、移交真正的权力，并将人们凝聚在一起，尤其是在风险很高的时候。今后，请在您自己的领导力时刻中稍作停顿，问问自己：“我此刻正在传递什么信号？”' },
        { type: 'heading', text: '让我们回顾一下' },
        { type: 'text', html: '在本视频中，我们将从洞察转向行动。领导力时刻只有在您运用所学时才会产生影响。三项立即行动旨在帮助您将反思转化为真实行为——简单、有意识、可以立即采取的步骤。' },
        { type: 'text', html: '观看时，请思考在您的下一个领导力时刻中，可以在哪些方面将这些行动付诸实践。' },
        { type: 'video', id: 'l5-godo', title: '三项立即行动' },
        { type: 'godo', id: 'l5', title: '您的三项立即行动', intro: '写下您将在下一个领导力时刻采取的三项行动。它们将与您的课程进度一同保存。', labels: ['立即行动 1', '立即行动 2', '立即行动 3'], placeholders: ['在下一次高压会议中，我将……', '下次授权时，我将……', '当团队成员在主导工作时，我将……'] },
        { type: 'heading', text: '结语' },
        { type: 'text', html: '您已完成本课程。在这些领导力时刻中，您探索了自己的实时选择——尤其是在压力之下——如何塑造信任、主导权与文化。从强化或收回权力，到在恰当的层级放手，再到压力下的协作，每一个时刻都是有意识地进行领导的机会。' },
        { type: 'text', html: '今后请记住：领导力是在日常互动中践行的，而不仅仅体现在重大决策中。' },
        { type: 'text', html: '感谢您的参与和投入。现在，请将所学运用到您的下一个领导力时刻中。' }
      ]
    }
  ]
};
