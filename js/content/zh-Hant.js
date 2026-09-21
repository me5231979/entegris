/* Traditional Chinese (zh-Hant, Taiwan) course content. Translated from en.js, which is the
   source of truth. Block types and ids are identical to en.js; only human-readable strings differ.
   First-draft translation: please have a native speaker review before release. */
window.ENTG_CONTENT = window.ENTG_CONTENT || {};
window.ENTG_CONTENT['zh-Hant'] = {
  ui: {
    skip: '跳至內容', language: '語言', menu: '課程選單',
    courseTitle: '卓越領導者畫像', courseSubtitle: 'Entegris 的日常領導力',
    heroEyebrow: '領導力發展', startCourse: '開始課程', resumeCourse: '繼續課程',
    outline: '課程大綱', lessons: '課程單元', lessonOf: '第 {a} 課，共 {b} 課',
    percentComplete: '已完成 {p}%', complete: '已完成', inProgress: '進行中', notStarted: '尚未開始',
    continueBtn: '繼續', completeCourse: '完成課程', courseCompleted: '課程已完成',
    prev: '上一頁', next: '下一頁', home: '課程首頁',
    videoPlaceholder: '影片佔位符', captions: '16:9 · 需要字幕',
    download: '下載', flip: '翻面', select: '選擇 {x}', selected: '已選擇',
    yourChoice: '您的選擇', chooseResponse: '選擇一種回應', pickClosest: '選擇最接近您實際做法的選項。',
    reflect: '反思', notesLocal: '您的筆記會與課程進度一併儲存。',
    footerCopy: '© 1994-2026 Entegris。保留所有權利。', footerInternal: '內部培訓資料',
    thatsAWrap: '您已完成所有課程單元。', backToOutline: '返回課程大綱',
    objectives: '學習目標', expand: '展開', translationNote: '翻譯草稿。發布前請由母語人士審閱。'
  },
  home: {
    title: '卓越領導者畫像',
    subtitle: 'Entegris 的日常領導力',
    tagline: '展現您的領導力。每一天。',
    intro: '卓越的領導者如何因應成長、變革與不確定性？在本課程中，您將學習如何在 Entegris 的日常領導工作中運用更新後的卓越領導者畫像（GLP）。透過實務反思、真實情境與可行策略，您將辨識自己的領導優勢、發展賦能團隊的新方法，並學會如何傳達與示範 GLP，創造持久的影響。課程結束時，您將能夠自信地領導自己與他人，讓 GLP 成為您領導旅程中的活指南。',
    facts: [
      { k: '課程單元', v: '5' },
      { k: '形式', v: '影片 · 情境 · 反思' },
      { k: '用時', v: '≈ 60 分鐘' },
      { k: '請準備', v: 'GLP 手冊' }
    ]
  },
  lessons: [
    {
      id: 'intro',
      title: '卓越領導者畫像（GLP）簡介及其當今的重要性',
      short: 'GLP 簡介',
      blocks: [
        { type: 'heading', text: '為何卓越領導者畫像此刻至關重要' },
        { type: 'text', html: '歡迎進入卓越領導者畫像（GLP）的簡介。身為 Entegris 的領導者，您在塑造企業文化與推動成功方面扮演關鍵角色。本課將協助您了解 GLP 的演進、核心特質，以及在我們共同面對成長與變革之際，它為何比以往更加重要。' },
        { type: 'video', id: 'l1-glp', title: 'Entegris 卓越領導者畫像' },
        { type: 'text', html: '明確的學習目標有助於您聚焦學習，並了解本課的各個部分如何支持您成長為領導者。清楚自己將達成什麼，能幫助您將 GLP 的概念與日常領導經驗更緊密地連結。' },
        { type: 'objectives', items: [
          '了解卓越領導者畫像為何是 Entegris 領導力的指引。',
          '辨識在我們組織中定義卓越領導力的核心特質與行為。',
          '了解 GLP 如何在組織成長與變革時期維持一致性與清晰度。',
          '體認在 Entegris，領導力屬於每一個人，而不只是人員主管。'
        ] },
        { type: 'heading', text: '探索卓越領導者畫像' },
        { type: 'text', html: '了解 GLP 的基礎對每一位 Entegris 領導者都至關重要。請展開下方各節，了解其目的、演進、核心特質，以及它如何適用於所有領導者。' },
        { type: 'accordion', items: [
          { title: 'GLP 的目的', html: '<p>卓越領導者畫像的建立，旨在定義 Entegris 卓越領導力的樣貌，並為所有領導者設定明確的期望。它是一份實用指南，協助領導者將行動與公司策略對齊，同時保留真誠、獨特的個人領導風格。</p><p>透過提供這樣的清晰度，GLP 讓領導者能夠做出一致的決策，並在整個組織中培養正向、高績效的文化。</p>' },
          { title: 'GLP 的演進', html: '<p>自 2018 年推出以來，GLP 與 Entegris 一同演進。隨著組織成長並面對新的挑戰，我們體認到需要重新檢視並更新這份畫像，以反映當前的現實。</p><p>更新後的 GLP 納入了新的期望與行為，確保它在變革與成長時期仍是一份切合需求且有效的領導指南。</p>' },
          { title: 'GLP 特質', html: '<p>GLP 列出了定義 Entegris 卓越領導力的七項核心特質：</p><ul><li>為未來培育人才</li><li>推動全球組織的夥伴合作</li><li>促進創新</li><li>以堅韌與謙遜領導</li><li>快速做出數據導向的決策</li><li>推動以客戶為中心</li><li>推動當責</li></ul>' },
          { title: 'GLP 適用於所有領導者', html: '<p>在 Entegris，領導力並不限於人員主管。無論職稱或角色為何，GLP 適用於每一個人。重點在於您在日常工作中如何展現自己、如何協作、如何承擔責任。</p><p>透過擁抱 GLP，每一位團隊成員都能為我們的領導文化做出貢獻，並在整個組織中發揮正向影響。</p>' }
        ] },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'GLP 特質及其意涵' },
        { type: 'text', html: '檢視每項 GLP 特質的定義，有助於您內化 Entegris 卓越領導力的樣貌。' },
        { type: 'video', id: 'l1-characteristics', title: 'GLP 特質' },
        { type: 'characteristics', center: 'PACE', sub: '以價值觀驅動的文化', items: [
          { icon: 'talent', name: '為未來培育人才', desc: '主動發展自己與他人，讓團隊為未來的挑戰與機會做好準備。' },
          { icon: 'globe', name: '推動全球組織的夥伴合作', desc: '跨團隊、跨區域有效協作，以達成共同目標並強化我們的全球影響力。' },
          { icon: 'bulb', name: '促進創新', desc: '鼓勵創意思考與新想法，支持持續改善與應變能力。' },
          { icon: 'shield', name: '推動當責', desc: '設定明確期望、支持貫徹執行，並確保個人與團隊對自身的承諾負責。' },
          { icon: 'flag', name: '以堅韌與謙遜領導', desc: '展現韌性與決心，同時保持開放心態，接受回饋並向他人學習。' },
          { icon: 'hand', name: '推動以客戶為中心', desc: '以客戶需求為優先並創造價值，建立穩固、長久的關係。' },
          { icon: 'gauge', name: '快速做出數據導向的決策', desc: '運用相關數據與洞察，及時做出明智的選擇，推動成果。' }
        ] },
        { type: 'heading', text: '閃卡' },
        { type: 'text', html: '請利用這些閃卡強化理解，並準備在自己的領導旅程中運用這些特質。點選卡片即可翻面。' },
        { type: 'flashcards', useCharacteristics: true },
        { type: 'quote', text: '每一天都是以目標為導向、發揮正向影響的領導機會。無論您的職位或職稱為何，GLP 都能助您成為 Entegris 所需要的領導者。' }
      ]
    },
    {
      id: 'collaboration',
      title: '領導力時刻：壓力下的協作',
      short: '壓力下的協作',
      blocks: [
        { type: 'text', html: '壓力能揭示領導力。當時程緊縮或關係緊張時，您的回應會影響信任、共識與成果。在這個領導力時刻，您將探索優秀的領導者如何在壓力下協作、保持清晰、強化共同責任，並防止本位主義形成。' },
        { type: 'text', html: '在學習本單元時，請反思在最關鍵的時刻，您是如何展現自己的。' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: '領導力成長，從壓力下的協作開始' },
        { type: 'text', html: '協作在壓力升高時才真正受到考驗。在高風險的情況下，領導者必須在急迫性與共識之間取得平衡，凝聚眾人，而不是讓本位主義或互相指責滋生。您在這些時刻的回應，會塑造信任、績效與文化。' },
        { type: 'text', html: '現在請觀看影片，並在反思這個領導力時刻的同時，善用您的 GLP 手冊。' },
        { type: 'video', id: 'l2-moment', title: '領導力時刻：壓力下的協作' },
        { type: 'heading', text: '有效的領導決策' },
        { type: 'text', html: 'Materials Solutions 工廠因協作不佳與團隊各自為政而面臨供應鏈中斷。原本安排了一場跨部門會議來處理這些問題，但關鍵參與者 Peter 無法出席。當時考慮了三個選項：延後會議、按完整議程進行，或調整議程以聚焦於可解決的問題。這位領導者選擇調整會議，維持動能並促進協作。有效的領導者懂得調適、推動進展，並為解決方案建立共同責任。' },
        { type: 'scenario', id: 'l2', prompt: '關鍵參與者 Peter 無法出席跨部門會議。您會怎麼做？', options: [
          { key: 'a', title: '延後會議', text: '等到 Peter 有空，確保所有人都能到場發聲。', tag: '失去動能', good: false, feedback: '延後會議傳達的訊號是：進展要等一個人。團隊停滯不前的同時，供應鏈問題持續讓工廠付出代價，而造成問題的本位主義也依然存在。' },
          { key: 'b', title: '按完整議程進行', text: '照原計畫開會，在 Peter 缺席的情況下處理他負責的議題。', tag: '共識面臨風險', good: false, feedback: 'Peter 負責的議題在負責人不在場的情況下就做出了決定。這會招致日後的返工與指責，而這正是壓力下的協作所要避免的。' },
          { key: 'c', title: '調整議程', text: '聚焦於與會者現在就能解決的問題，並另行與 Peter 安排他負責的議題。', tag: '共同責任', good: true, feedback: '您維持了動能，尊重 Peter 的責任歸屬，並讓團隊獲得可以持續推進的實質進展。調整會議讓壓力轉化為協作，而非本位主義。' }
        ] },
        { type: 'quote', text: '真正的協作在壓力下最為耀眼，團結能將挑戰轉化為成功的契機。' }
      ]
    },
    {
      id: 'letting-go',
      title: '領導力時刻：在適當的層級放手',
      short: '在適當的層級放手',
      blocks: [
        { type: 'text', html: '授權不只是分派工作，而是轉移適當層級的權限。在這個領導力時刻，您將檢視「持續參與」與「真正退後」之間的張力。有效的領導者會有意識地放手。即使在高風險的情況下，他們也會為他人創造空間去領導、做決策並建立可信度。在適當的層級放手，能強化信任、發展能力並鞏固責任歸屬。' },
        { type: 'text', html: '在學習本節時，請思考：您是在分派任務，還是在賦能領導？' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: '領導力成長，從在適當的層級放手延續' },
        { type: 'text', html: '現在請觀看影片，並特別留意在當下，權限是如何被強化或被收回的。觀看時，請善用您的 GLP 手冊，反思自己如何授權。您是轉移了真正的責任歸屬，還是比必要的更靠近？' },
        { type: 'video', id: 'l3-moment', title: '領導力時刻：在適當的層級放手' },
        { type: 'heading', text: '賦能領導' },
        { type: 'text', html: '一位工廠領導者將一項關鍵計畫授權給表現優異的團隊成員 Jessica。當一位利害關係人建議領導者應該出席會議時，領導者必須決定是收回控制權，還是完全賦能 Jessica。選擇讓 Jessica 獨立主導，展現了信任、建立了她的可信度，並支持她成長為領導者。' },
        { type: 'scenario', id: 'l3', prompt: '一位利害關係人建議您應該出席 Jessica 的會議。您會怎麼做？', options: [
          { key: 'a', title: '出席並主導', text: '加入會議並親自主導，好讓利害關係人安心。', tag: '收回控制權', good: false, feedback: '利害關係人是安心了，但 Jessica 的權限在眾人面前煙消雲散。您等於告訴所有人，這項計畫其實是您的。' },
          { key: 'b', title: '以防萬一，坐在一旁', text: '安靜地坐在後方，只在情況失控時才介入。', tag: '責任歸屬被稀釋', good: false, feedback: '您的在場改變了整個會議。問題會轉向您，Jessica 開始懷疑自己，利害關係人也學會越過她。比必要的更靠近，仍然會損及她的可信度。' },
          { key: 'c', title: '婉拒並支持 Jessica', text: '向利害關係人確認 Jessica 擁有完整權限，並主動提議事前與她一起準備。', tag: '適當的層級', good: true, feedback: '您轉移了真正的權限，並讓利害關係人清楚看見。事前一起準備給了 Jessica 支持，卻不會奪走她的主場。信任、可信度與能力都因此成長。' }
        ] },
        { type: 'quote', text: '真正的領導力在於知道何時放手；在適當的層級賦能他人，能培養信任、成長與共同的成功。' }
      ]
    },
    {
      id: 'reinforce',
      title: '領導力時刻：強化還是收回？',
      short: '強化還是收回？',
      blocks: [
        { type: 'text', html: '強化信任與重拾焦點是必備的領導技能。有效的領導者懂得何時該退後以賦能團隊，何時該介入以重新對齊優先事項。透過強化信任，您能營造讓他人有信心承擔責任並做決策的環境。重拾焦點則確保團隊即使在艱難時刻，仍與整體目標保持一致。平衡這兩種行動能強化協作並推動成功。' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: '強化還是收回？' },
        { type: 'text', html: '在這個領導力時刻，您將探索一個常見的張力：當團隊成員在主導工作時，您是介入，還是站在他們身後支持？這些時刻往往發生得很快，而且伴隨壓力。您的回應可能強化責任歸屬與可信度，也可能在無意間收回權限。' },
        { type: 'text', html: '觀看影片時，請留意所傳達的訊號，不只是透過言語，也透過在場與行動。' },
        { type: 'video', id: 'l4-moment', title: '領導力時刻：強化還是收回？' },
        { type: 'heading', text: '有效的團隊支持' },
        { type: 'text', html: '在 Materials Solutions 工廠的關鍵問題解決後，Jessica 和她的團隊正努力準備向主要利害關係人簡報他們的建議。團隊對自己的發現很有信心，但仍希望獲得建議，了解如何有效地呈現商業論證，讓聽眾產生共鳴。' },
        { type: 'text', html: '這位領導者考慮了幾種做法：接手簡報以確保清晰、只提供簡短的安撫訊息，或是輔導團隊精進呈現方式，同時讓他們保有對工作的責任歸屬。最終，領導者選擇與團隊進行有意義的討論，了解他們的觀點，並在不接管流程的情況下提供建設性的回饋。' },
        { type: 'text', html: '這種做法凸顯了賦能團隊的領導力有多重要。透過提供指引並培養信心，領導者能確保團隊在高風險的情況下保持當責、動力十足，並準備好迎向成功。' },
        { type: 'scenario', id: 'l4', prompt: 'Jessica 的團隊希望在利害關係人簡報前聽取您的意見。您會怎麼做？', options: [
          { key: 'a', title: '重新接手', text: '這次會議至關重要。您審閱簡報，進行調整，並親自主持利害關係人會議。', tag: '收回主導權', good: false, feedback: '接管工作傳達了一個明確的訊息：關鍵時刻，這不是你們的工作。Jessica 主導了數月，團隊卻失去了他們應得的亮相時刻。信心與可信度因此受損。' },
          { key: 'b', title: '發送電子郵件', text: '您告訴團隊您理解他們的顧慮，您信任他們，他們應當呈現自己認為正確的內容。', tag: '讓團隊孤立無援', good: false, feedback: '一則含糊的訊息沒有為尋求支持的團隊提供任何指導或輔導。他們仍不清楚利害關係人的期望，在高曝光時刻來臨前更加焦慮。' },
          { key: 'c', title: '先會面傾聽', text: '您安排時間與團隊會面。在提供意見之前，您請他們先說明自己的定位與思路。', tag: '強化主導權', good: true, feedback: '您到場、輔導，並在壓力上升時克制住收回控制權的衝動。Jessica 保有明確的主導權和真正的決策權。團隊感到被賦能，得以繼續推進。' }
        ] },
        { type: 'reflect', id: 'l4', title: '我是否真正在賦能我的團隊？', intro: '賦能不是我們宣布的，而是團隊切身感受到的。請花幾分鐘思考這些問題。', questions: [
          { q: '如果我不在，工作將如何繼續？', hint: '如果進展放緩、決策停滯，或者利害關係人在等您，那就是一個訊號。' },
          { q: '我在高曝光時刻的行為可能如何強化或削弱賦能？', hint: '風險升高時您會介入嗎？會替團隊回答本該由他們回答的問題嗎？還是站在他們身後，讓他們主導？' },
          { q: '如果我今天更多地賦能團隊，六個月後他們能如何更獨立地運作？', hint: '他們是在提出解決方案，而不是上報問題嗎？是否主導與利害關係人的對話？判斷力是否在成長？' }
        ] },
        { type: 'quote', text: '重拾焦點，強化優先事項；成功始於清晰與決心。' }
      ]
    },
    {
      id: 'closing',
      title: '總結：三項立即行動',
      short: '三項立即行動',
      blocks: [
        { type: 'text', html: '綜觀這些領導力時刻，有一個主題格外突出：領導力是在當下即時被定義的。往往短暫，有時令人不自在，但始終影響深遠。無論是在壓力下協作、強化或收回權限，還是在適當的層級放手，您的回應都在傳達訊號：關於信任、責任歸屬，甚至關於領導力在行動中的樣貌。卓越的領導者是有意識的。他們強化可信度、轉移真正的權限，並凝聚眾人，尤其是在高風險的時刻。往後在您自己的領導力時刻，請先停下來問自己：「我此刻正在傳達什麼訊號？」' },
        { type: 'heading', text: '一起回顧' },
        { type: 'text', html: '在這段影片中，我們將從洞察轉向行動。領導力時刻唯有在您運用所學時，才能創造影響。三項立即行動旨在協助您將反思轉化為實際行為，也就是您可以立即採取的簡單、有意識的步驟。' },
        { type: 'text', html: '觀看時，請思考在下一個領導力時刻，您可以在哪裡實踐這些行動。' },
        { type: 'video', id: 'l5-godo', title: '三項立即行動' },
        { type: 'godo', id: 'l5', title: '您的三項立即行動', intro: '寫下您將在下一個領導力時刻採取的三項行動。它們會與您的課程進度一併儲存。', labels: ['立即行動 1', '立即行動 2', '立即行動 3'], placeholders: ['在下一場高壓會議中，我將……', '下次授權時，我將……', '當團隊成員在主導工作時，我將……'] },
        { type: 'heading', text: '結語' },
        { type: 'text', html: '您已來到本課程的尾聲。在這些領導力時刻中，您探索了自己的即時選擇（尤其是在壓力之下）如何塑造信任、責任歸屬與文化。從強化或收回權限，到在適當的層級放手與在壓力下協作，每一個時刻都是有意識地領導的機會。' },
        { type: 'text', html: '往後請記住：領導力是在日常互動中實踐的，而不只是在重大決策時。' },
        { type: 'text', html: '感謝您的投入與承諾。現在，請將所學運用在您的下一個領導力時刻。' }
      ]
    }
  ]
};
