/* English course content. Source of truth for every other language file in this folder.
   Structure: ui (chrome strings), home, lessons[]. Each lesson is a list of blocks the
   renderer in js/app.js knows how to draw. Keep block types and ids identical across languages. */
window.ENTG_CONTENT = window.ENTG_CONTENT || {};
window.ENTG_CONTENT.en = {
  ui: {
    skip: 'Skip to content', language: 'Language', menu: 'Course menu',
    courseTitle: 'The Great Leader Profile', courseSubtitle: 'Daily Leadership at Entegris',
    heroEyebrow: 'Leadership development', startCourse: 'Start course', resumeCourse: 'Resume course',
    outline: 'Course outline', lessons: 'Lessons', lessonOf: 'Lesson {a} of {b}',
    percentComplete: '{p}% complete', complete: 'Complete', inProgress: 'In progress', notStarted: 'Not started',
    continueBtn: 'Continue', completeCourse: 'Complete course', courseCompleted: 'Course completed',
    prev: 'Previous', next: 'Next', home: 'Course home',
    videoPlaceholder: 'Video placeholder', captions: '16:9 · captions required',
    download: 'Download', flip: 'Flip', select: 'Select {x}', selected: 'Selected',
    yourChoice: 'Your choice', chooseResponse: 'Choose a response', pickClosest: 'Pick the option closest to what you would do.',
    reflect: 'Reflect', notesLocal: 'Your notes are saved with your course progress.',
    footerCopy: '© 1994-2026 Entegris. All Rights Reserved.', footerInternal: 'Internal training material',
    thatsAWrap: 'You have completed every lesson.', backToOutline: 'Back to the outline',
    objectives: 'Objectives', expand: 'Expand', printNotes: 'Print my notes', printTitle: 'My notes and go-do actions', noAnswer: '(no answer yet)', myChoice: 'My choice', translationNote: ''
  },
  home: {
    title: 'The Great Leader Profile',
    subtitle: 'Daily Leadership at Entegris',
    tagline: 'Bring your leadership. Every day.',
    intro: 'How do great leaders navigate growth, change, and uncertainty? In this course, you’ll discover how to apply the refreshed Great Leader Profile (GLP) in your daily leadership at Entegris. Through practical reflection, real-world scenarios, and actionable strategies, you’ll identify your leadership strengths, develop new approaches to empower your team, and learn how to communicate and model the GLP for lasting impact. By the end, you’ll be equipped to confidently lead yourself and others, making the GLP a living guide for your leadership journey.',
    facts: [
      { k: 'Lessons', v: '5' },
      { k: 'Format', v: 'Video · scenarios · reflection' },
      { k: 'Time', v: '≈ 60 min' },
      { k: 'Bring', v: 'GLP Playbook' }
    ]
  },
  lessons: [
    {
      id: 'intro',
      title: 'Introduction to the Great Leader Profile (GLP) and Its Relevance Today',
      short: 'Introduction to the GLP',
      blocks: [
        { type: 'heading', text: 'Why the Great Leader Profile Matters Now' },
        { type: 'text', html: 'Welcome to your introduction to the Great Leader Profile (GLP). As leaders at Entegris, you play a crucial role in shaping our culture and driving our success. This lesson will help you understand the GLP’s evolution, its core characteristics, and why it’s more relevant than ever as we navigate growth and change together.' },
        { type: 'video', id: 'l1-glp', title: 'Entegris Great Leader Profile' },
        { type: 'text', html: 'Clear objectives help you focus your learning and understand how each part of this lesson supports your growth as a leader. Knowing what you’ll accomplish helps you better connect the GLP concepts to your daily leadership experiences.' },
        { type: 'objectives', items: [
          'Learn why the Great Leader Profile guides leadership at Entegris.',
          'Identify the core characteristics and behaviors that define great leadership within our organization.',
          'See how the GLP supports consistency and clarity during times of organizational growth and change.',
          'Appreciate that leadership at Entegris is for everyone, not just people managers.'
        ] },
        { type: 'heading', text: 'Exploring the Great Leader Profile' },
        { type: 'text', html: 'Understanding the foundation of the GLP is essential for every Entegris leader. Expand each section below to learn about its purpose, evolution, core characteristics, and how it applies to all leaders.' },
        { type: 'accordion', items: [
          { title: 'Purpose of the GLP', html: '<p>The Great Leader Profile was created to define what great leadership looks like at Entegris and to set clear expectations for all leaders. It serves as a practical guide, helping leaders align their actions with our company’s strategy while allowing for authentic, individual leadership styles.</p><p>By providing this clarity, the GLP empowers leaders to make consistent decisions and foster a positive, high-performing culture across the organization.</p>' },
          { title: 'Evolution of the GLP', html: '<p>Since its introduction in 2018, the GLP has evolved alongside Entegris. As our organization grew and faced new challenges, we recognized the need to revisit and refresh the profile to reflect our current reality.</p><p>The updated GLP now incorporates new expectations and behaviors, ensuring it remains relevant and effective as a leadership guide during times of change and growth.</p>' },
          { title: 'GLP Characteristics', html: '<p>The GLP outlines seven core characteristics that define great leadership at Entegris:</p><ul><li>Builds Talent for the Future</li><li>Drives Partnership Across Our Global Organization</li><li>Fosters Innovation</li><li>Leads with Tenacity &amp; Humility</li><li>Makes Data-Driven Decisions with Speed</li><li>Drives Customer Centricity</li><li>Drives Accountability</li></ul>' },
          { title: 'GLP for All Leaders', html: '<p>Leadership at Entegris isn’t limited to people managers. The GLP applies to everyone, regardless of title or role. It’s about how you show up, collaborate, and take ownership in your daily work.</p><p>By embracing the GLP, every team member can contribute to our culture of leadership and drive positive impact across the organization.</p>' }
        ] },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'GLP Characteristics and What They Mean' },
        { type: 'text', html: 'Reviewing the definitions of each GLP characteristic will help you internalize what great leadership looks like at Entegris.' },
        { type: 'video', id: 'l1-characteristics', title: 'GLP Characteristics' },
        { type: 'characteristics', center: 'PACE', sub: 'A values-driven culture', items: [
          { icon: 'talent', name: 'Builds Talent for the Future', desc: 'Actively develops self and others, preparing the team for future challenges and opportunities.' },
          { icon: 'globe', name: 'Drives Partnership Across Our Global Organization', desc: 'Collaborates effectively across teams and regions to achieve shared goals and strengthen our global impact.' },
          { icon: 'bulb', name: 'Fosters Innovation', desc: 'Encourages creative thinking and new ideas, supporting continuous improvement and adaptability.' },
          { icon: 'shield', name: 'Drives Accountability', desc: 'Sets clear expectations, supports follow-through, and ensures individuals and teams own their commitments.' },
          { icon: 'flag', name: 'Leads with Tenacity and Humility', desc: 'Demonstrates resilience and determination while remaining open to feedback and learning from others.' },
          { icon: 'hand', name: 'Drives Customer Centricity', desc: 'Prioritizes customer needs and delivers value, building strong, lasting relationships.' },
          { icon: 'gauge', name: 'Makes Data-Driven Decisions with Speed', desc: 'Uses relevant data and insights to make timely, informed choices that drive results.' }
        ] },
        { type: 'heading', text: 'Flashcards' },
        { type: 'text', html: 'Use these flashcards to reinforce your understanding and prepare to apply these qualities in your own leadership journey. Select a card to flip it.' },
        { type: 'flashcards', useCharacteristics: true },
        { type: 'quote', text: 'Every day presents an opportunity to lead with purpose and make a positive difference. The GLP enables you to become the leader Entegris requires, regardless of your position or title.' }
      ]
    },
    {
      id: 'collaboration',
      title: 'Leadership Moment: Collaboration Under Pressure',
      short: 'Collaboration Under Pressure',
      blocks: [
        { type: 'text', html: 'Pressure reveals leadership. When timelines tighten or tensions rise, your response shapes trust, alignment, and results. In this Leadership Moment, you’ll explore how strong leaders collaborate under pressure, maintain clarity, reinforce shared ownership, and prevent silos from forming.' },
        { type: 'text', html: 'As you move through this module, reflect on how you show up when it matters most.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Leadership Growth Starts with Collaboration Under Pressure' },
        { type: 'text', html: 'Collaboration is truly tested when pressure rises. In high-stakes situations, leaders must balance urgency with alignment, bringing people together instead of allowing silos or blame to take hold. How you respond in these moments shapes trust, performance, and culture.' },
        { type: 'text', html: 'Now, watch the video and be sure to engage with your GLP Playbook as you reflect on this leadership moment.' },
        { type: 'video', id: 'l2-moment', title: 'Leadership Moment: Collaboration Under Pressure' },
        { type: 'heading', text: 'Effective Leadership Decisions' },
        { type: 'text', html: 'The Materials Solutions plant faced supply chain disruptions caused by poor collaboration and siloed teams. A cross-functional meeting was scheduled to address these issues, but a key participant, Peter, was unable to attend. Three options were considered: postpone the meeting, proceed with the full agenda, or adjust the agenda to focus on solvable issues. The leader chose to adapt the meeting, maintaining momentum and fostering collaboration. Effective leaders adapt, drive progress, and create shared ownership for solutions.' },
        { type: 'scenario', id: 'l2', prompt: 'Peter, a key participant, can’t make the cross-functional meeting. What do you do?', options: [
          { key: 'a', title: 'Postpone the meeting', text: 'Wait until Peter is available so every voice is in the room.', tag: 'Momentum lost', good: false, feedback: 'Postponing sends the signal that progress waits on one person. The supply chain issues keep costing the plant while the team stands still, and the silos that caused the problem stay in place.' },
          { key: 'b', title: 'Proceed with the full agenda', text: 'Run the meeting as planned and cover Peter’s items without him.', tag: 'Alignment at risk', good: false, feedback: 'Decisions on Peter’s items are made without the person who owns them. That invites rework and blame later, which is exactly what collaboration under pressure is meant to prevent.' },
          { key: 'c', title: 'Adjust the agenda', text: 'Focus on the issues the room can solve now and schedule Peter’s items with him.', tag: 'Shared ownership', good: true, feedback: 'You keep momentum, respect Peter’s ownership, and give the team real progress to build on. Adapting the meeting turns pressure into collaboration instead of silos.' }
        ] },
        { type: 'quote', text: 'True collaboration shines brightest under pressure, where unity transforms challenges into opportunities for success.' }
      ]
    },
    {
      id: 'letting-go',
      title: 'Leadership Moment: Letting Go at the Right Level',
      short: 'Letting Go at the Right Level',
      blocks: [
        { type: 'text', html: 'Delegation isn’t just about assigning work; it’s about transferring the right level of authority. In this leadership moment, you’ll examine the tension between staying involved and truly stepping back. Effective leaders let go with intention. They create space for others to lead, make decisions, and build credibility even when the stakes are high. Letting go at the right level strengthens trust, develops capability, and reinforces ownership.' },
        { type: 'text', html: 'As you move through this section, consider: Are you delegating tasks or empowering leadership?' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Leadership Growth Continues with Letting Go at the Right Level' },
        { type: 'text', html: 'Now, watch the video and pay close attention to how authority is either reinforced or reclaimed in the moment. As you watch, engage with your GLP Playbook and reflect on how you delegate. Are you transferring true ownership, or staying closer than necessary?' },
        { type: 'video', id: 'l3-moment', title: 'Leadership Moment: Letting Go at the Right Level' },
        { type: 'heading', text: 'Empowering Leadership' },
        { type: 'text', html: 'A plant leader delegates a key initiative to Jessica, a high-performing team member. When a stakeholder suggests the leader should attend the meeting, they must decide whether to reclaim control or fully empower Jessica. Choosing to let Jessica lead independently demonstrates trust, builds her credibility, and supports her growth as a leader.' },
        { type: 'scenario', id: 'l3', prompt: 'A stakeholder suggests you should attend Jessica’s meeting. What do you do?', options: [
          { key: 'a', title: 'Attend and lead', text: 'Join the meeting and take the lead so the stakeholder is reassured.', tag: 'Control reclaimed', good: false, feedback: 'The stakeholder is reassured, but Jessica’s authority evaporates in front of the room. You have told everyone the initiative is really yours.' },
          { key: 'b', title: 'Sit in, just in case', text: 'Attend quietly at the back and step in only if things go sideways.', tag: 'Ownership diluted', good: false, feedback: 'Your presence changes the room. Questions drift to you, Jessica second-guesses herself, and the stakeholder learns to look past her. Staying closer than necessary still costs her credibility.' },
          { key: 'c', title: 'Decline and back Jessica', text: 'Confirm to the stakeholder that Jessica has full authority, and offer to prep with her beforehand.', tag: 'Right level', good: true, feedback: 'You transfer real authority and make it visible to the stakeholder. Prepping beforehand gives Jessica support without taking the room from her. Trust, credibility, and capability all grow.' }
        ] },
        { type: 'quote', text: 'True leadership is about knowing when to let go; empowering others at the right level fosters trust, growth, and shared success.' }
      ]
    },
    {
      id: 'reinforce',
      title: 'Leadership Moment: Reinforce or Reclaim?',
      short: 'Reinforce or Reclaim?',
      blocks: [
        { type: 'text', html: 'Reinforcing trust and reclaiming focus are essential leadership skills. Effective leaders understand when to step back to empower their teams and when to step in to realign priorities. By reinforcing trust, you create an environment where others feel confident to take ownership and make decisions. Reclaiming focus ensures that the team stays aligned with overarching goals, even during challenging moments. Balancing these actions strengthens collaboration and drives success.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Reinforce or Reclaim?' },
        { type: 'text', html: 'In this leadership moment, you’ll explore a common tension: when a team member is leading, do you step in, or do you stand behind them? These moments often happen quickly and under pressure. Your response can either reinforce ownership and credibility or unintentionally reclaim authority.' },
        { type: 'text', html: 'As you watch the video, pay attention to the signals being sent, not just through words, but through presence and action.' },
        { type: 'video', id: 'l4-moment', title: 'Leadership Moment: Reinforce or Reclaim?' },
        { type: 'heading', text: 'Effective Team Support' },
        { type: 'text', html: 'Jessica and her team are diligently preparing to present their recommendations to key stakeholders following the resolution of critical issues at the Materials Solutions plant. While confident in their findings, the team seeks advice on how to effectively position their business case to ensure it resonates with their audience.' },
        { type: 'text', html: 'The leader considers several approaches: taking over the presentation to ensure clarity, offering only a brief message of reassurance, or coaching the team to refine their delivery while allowing them to maintain ownership of their work. Ultimately, the leader opts to engage the team in meaningful discussions, to understand their perspectives, and to provide constructive feedback without taking control of the process.' },
        { type: 'text', html: 'This approach highlights the importance of leadership that empowers teams. By offering guidance and fostering confidence, leaders can ensure their teams remain accountable, motivated, and prepared to succeed in high-stakes situations.' },
        { type: 'scenario', id: 'l4', prompt: 'Jessica’s team wants your input before the stakeholder presentation. What do you do?', options: [
          { key: 'a', title: 'Step back in', text: 'The meeting matters. You review the presentation, make adjustments, and lead the stakeholder session yourself.', tag: 'Reclaims ownership', good: false, feedback: 'Taking over sends a clear message: when it counts, this is not your work. Jessica led for months, and the team loses the visible moment they earned. Confidence and credibility take the hit.' },
          { key: 'b', title: 'Send an email', text: 'You tell the team you understand their concerns, you trust them, and they should present what they believe is right.', tag: 'Leaves the team alone', good: false, feedback: 'A vague message offers no guidance or coaching to a team that asked for support. They are still unsure what stakeholders expect, and their anxiety rises before a high-visibility moment.' },
          { key: 'c', title: 'Meet and listen first', text: 'You schedule time with the team. Before giving input, you ask them to walk you through their positioning and approach.', tag: 'Reinforces ownership', good: true, feedback: 'You show up, you coach, and you resist the urge to take control when pressure rises. Jessica keeps clear ownership and real decision-making authority. The team feels empowered to move on.' }
        ] },
        { type: 'reflect', id: 'l4', title: 'Am I truly empowering my team?', intro: 'Empowerment is not something we declare. It is something our teams experience. Take a few minutes with these questions.', questions: [
          { q: 'How would work continue if I were unavailable?', hint: 'If progress slows, decisions stall, or stakeholders wait for you, that is a signal.' },
          { q: 'How might my behavior in high-profile moments reinforce or weaken empowerment?', hint: 'Do you step in when the stakes rise? Answer questions directed to your team? Or stay behind them and let them lead?' },
          { q: 'How could my team operate more independently six months from now if I empower them more today?', hint: 'Are they proposing solutions instead of escalating problems? Owning stakeholder conversations? Growing in judgment?' }
        ] },
        { type: 'quote', text: 'Reclaim your focus and reinforce your priorities; success begins with clarity and determination.' }
      ]
    },
    {
      id: 'closing',
      title: 'Closing: Three Go-Do Actions',
      short: 'Three Go-Do Actions',
      blocks: [
        { type: 'text', html: 'Across these leadership moments, one theme stands out: leadership is defined in real time. Often brief. Sometimes uncomfortable. Always impactful. Whether collaborating under pressure, reinforcing or reclaiming authority, or letting go at the right level, your response sends signals: signals about trust, ownership, and even about what leadership looks like in action. Great leaders are intentional. They reinforce credibility, transfer real authority, and bring people together, especially when the stakes are high. As you move forward, pause in your own leadership moments. Ask yourself: “What signal am I sending right now?”' },
        { type: 'heading', text: 'Let’s Review' },
        { type: 'text', html: 'In this video, we’ll shift from insight to action. Leadership moments only create impact when you apply what you’ve learned. The Three Go-Do Actions are designed to help you translate reflection into real behavior, simple, intentional steps you can take immediately.' },
        { type: 'text', html: 'As you watch, think about where you can put these actions into practice in your next leadership moment.' },
        { type: 'video', id: 'l5-godo', title: 'Three Go-Do Actions' },
        { type: 'godo', id: 'l5', title: 'Your three go-do actions', intro: 'Write the three actions you will take in your next leadership moment. They save with your course progress.', labels: ['Go-do action 1', 'Go-do action 2', 'Go-do action 3'], placeholders: ['In my next high-pressure meeting, I will…', 'The next time I delegate, I will…', 'When a team member is leading, I will…'] },
        { type: 'heading', text: 'Closing' },
        { type: 'text', html: 'You’ve reached the conclusion of this course. Throughout these leadership moments, you’ve explored how your real-time choices, especially under pressure, shape trust, ownership, and culture. From reinforcing or reclaiming authority to letting go at the right level and collaborating under pressure, each moment is an opportunity to lead with intention.' },
        { type: 'text', html: 'As you move forward, remember: leadership is practiced in everyday interactions, not just major decisions.' },
        { type: 'text', html: 'Thank you for your engagement and commitment. Now, take what you’ve learned and apply it in your next leadership moment.' }
      ]
    }
  ]
};
