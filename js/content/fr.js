/* Contenu du cours en français (fr-FR, vouvoiement). Dérivé de en.js : même structure,
   mêmes types et identifiants de blocs. Seules les chaînes lisibles sont traduites. */
window.ENTG_CONTENT = window.ENTG_CONTENT || {};
window.ENTG_CONTENT.fr = {
  ui: {
    skip: 'Aller au contenu', language: 'Langue', menu: 'Menu du cours',
    courseTitle: 'Le profil du grand leader', courseSubtitle: 'Le leadership au quotidien chez Entegris',
    heroEyebrow: 'Développement du leadership', startCourse: 'Commencer le cours', resumeCourse: 'Reprendre le cours',
    outline: 'Programme du cours', lessons: 'Leçons', lessonOf: 'Leçon {a} sur {b}',
    percentComplete: '{p} % terminé', complete: 'Terminé', inProgress: 'En cours', notStarted: 'Non commencé',
    continueBtn: 'Continuer', completeCourse: 'Terminer le cours', courseCompleted: 'Cours terminé',
    prev: 'Précédent', next: 'Suivant', home: 'Accueil du cours',
    videoPlaceholder: 'Espace réservé à la vidéo', captions: '16:9 · sous-titres requis',
    download: 'Télécharger', flip: 'Retourner', select: 'Choisir {x}', selected: 'Sélectionné',
    yourChoice: 'Votre choix', chooseResponse: 'Choisissez une réponse', pickClosest: 'Choisissez l’option la plus proche de ce que vous feriez.',
    reflect: 'Réflexion', notesLocal: 'Vos notes sont enregistrées avec votre progression dans le cours.',
    footerCopy: '© 1994-2026 Entegris. Tous droits réservés.', footerInternal: 'Support de formation interne',
    thatsAWrap: 'Vous avez terminé toutes les leçons.', backToOutline: 'Retour au programme',
    objectives: 'Objectifs', expand: 'Développer', translationNote: 'Version de traduction provisoire. Merci de la faire relire par un locuteur natif avant publication.'
  },
  home: {
    title: 'Le profil du grand leader',
    subtitle: 'Le leadership au quotidien chez Entegris',
    tagline: 'Votre leadership. Chaque jour.',
    intro: 'Comment les grands leaders traversent-ils la croissance, le changement et l’incertitude ? Dans ce cours, vous découvrirez comment appliquer le profil du grand leader (GLP) actualisé dans votre leadership quotidien chez Entegris. Grâce à des réflexions pratiques, des situations réelles et des stratégies concrètes, vous identifierez vos forces de leader, développerez de nouvelles approches pour responsabiliser votre équipe et apprendrez à communiquer et à incarner le GLP pour un impact durable. À la fin, vous serez en mesure de vous diriger vous-même et de guider les autres avec confiance, en faisant du GLP un guide vivant de votre parcours de leader.',
    facts: [
      { k: 'Leçons', v: '5' },
      { k: 'Format', v: 'Vidéo · situations · réflexion' },
      { k: 'Durée', v: '≈ 60 min' },
      { k: 'À prévoir', v: 'Playbook GLP' }
    ]
  },
  lessons: [
    {
      id: 'intro',
      title: 'Introduction au profil du grand leader (GLP) et à sa pertinence aujourd’hui',
      short: 'Introduction au GLP',
      blocks: [
        { type: 'heading', text: 'Pourquoi le profil du grand leader compte aujourd’hui' },
        { type: 'text', html: 'Bienvenue dans votre introduction au profil du grand leader (GLP). En tant que leaders chez Entegris, vous jouez un rôle essentiel dans la construction de notre culture et dans notre réussite. Cette leçon vous aidera à comprendre l’évolution du GLP, ses caractéristiques fondamentales et pourquoi il est plus pertinent que jamais alors que nous traversons ensemble la croissance et le changement.' },
        { type: 'video', id: 'l1-glp', title: 'Le profil du grand leader Entegris' },
        { type: 'text', html: 'Des objectifs clairs vous aident à cibler votre apprentissage et à comprendre comment chaque partie de cette leçon soutient votre développement en tant que leader. Savoir ce que vous allez accomplir vous permet de mieux relier les concepts du GLP à vos expériences de leadership au quotidien.' },
        { type: 'objectives', items: [
          'Comprendre pourquoi le profil du grand leader guide le leadership chez Entegris.',
          'Identifier les caractéristiques et les comportements fondamentaux qui définissent un grand leadership dans notre organisation.',
          'Voir comment le GLP apporte cohérence et clarté en période de croissance et de changement organisationnel.',
          'Reconnaître que, chez Entegris, le leadership concerne tout le monde, pas seulement les managers.'
        ] },
        { type: 'heading', text: 'Explorer le profil du grand leader' },
        { type: 'text', html: 'Comprendre les fondements du GLP est essentiel pour chaque leader Entegris. Développez chaque section ci-dessous pour découvrir sa raison d’être, son évolution, ses caractéristiques fondamentales et la façon dont il s’applique à tous les leaders.' },
        { type: 'accordion', items: [
          { title: 'Raison d’être du GLP', html: '<p>Le profil du grand leader a été créé pour définir ce qu’est un grand leadership chez Entegris et pour fixer des attentes claires à tous les leaders. Il sert de guide pratique et aide les leaders à aligner leurs actions sur la stratégie de l’entreprise, tout en laissant place à des styles de leadership authentiques et individuels.</p><p>En apportant cette clarté, le GLP permet aux leaders de prendre des décisions cohérentes et de cultiver une culture positive et performante dans toute l’organisation.</p>' },
          { title: 'Évolution du GLP', html: '<p>Depuis son lancement en 2018, le GLP a évolué avec Entegris. À mesure que notre organisation grandissait et relevait de nouveaux défis, nous avons reconnu la nécessité de revoir et d’actualiser le profil pour refléter notre réalité actuelle.</p><p>Le GLP mis à jour intègre désormais de nouvelles attentes et de nouveaux comportements, afin de rester un guide de leadership pertinent et efficace en période de changement et de croissance.</p>' },
          { title: 'Les caractéristiques du GLP', html: '<p>Le GLP décrit sept caractéristiques fondamentales qui définissent un grand leadership chez Entegris :</p><ul><li>Développe les talents pour l’avenir</li><li>Favorise le partenariat dans toute notre organisation mondiale</li><li>Encourage l’innovation</li><li>Dirige avec ténacité &amp; humilité</li><li>Prend des décisions rapides fondées sur les données</li><li>Place le client au centre</li><li>Favorise la responsabilité</li></ul>' },
          { title: 'Le GLP pour tous les leaders', html: '<p>Chez Entegris, le leadership ne se limite pas aux managers. Le GLP s’applique à tout le monde, quels que soient le titre ou le rôle. Il s’agit de la façon dont vous vous présentez, collaborez et prenez vos responsabilités dans votre travail quotidien.</p><p>En adoptant le GLP, chaque membre de l’équipe peut contribuer à notre culture du leadership et avoir un impact positif dans toute l’organisation.</p>' }
        ] },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 Ko', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Les caractéristiques du GLP et leur signification' },
        { type: 'text', html: 'Relire la définition de chaque caractéristique du GLP vous aidera à intégrer ce qu’est un grand leadership chez Entegris.' },
        { type: 'video', id: 'l1-characteristics', title: 'Les caractéristiques du GLP' },
        { type: 'characteristics', center: 'PACE', sub: 'Une culture fondée sur les valeurs', items: [
          { icon: 'talent', name: 'Développe les talents pour l’avenir', desc: 'Se développe activement et développe les autres, en préparant l’équipe aux défis et aux opportunités à venir.' },
          { icon: 'globe', name: 'Favorise le partenariat dans toute notre organisation mondiale', desc: 'Collabore efficacement entre les équipes et les régions pour atteindre des objectifs communs et renforcer notre impact mondial.' },
          { icon: 'bulb', name: 'Encourage l’innovation', desc: 'Stimule la créativité et les idées nouvelles, au service de l’amélioration continue et de l’adaptabilité.' },
          { icon: 'shield', name: 'Favorise la responsabilité', desc: 'Fixe des attentes claires, soutient leur mise en œuvre et veille à ce que chacun et chaque équipe assume ses engagements.' },
          { icon: 'flag', name: 'Dirige avec ténacité et humilité', desc: 'Fait preuve de résilience et de détermination tout en restant ouvert aux retours et à l’apprentissage auprès des autres.' },
          { icon: 'hand', name: 'Place le client au centre', desc: 'Donne la priorité aux besoins des clients et crée de la valeur, en bâtissant des relations solides et durables.' },
          { icon: 'gauge', name: 'Prend des décisions rapides fondées sur les données', desc: 'S’appuie sur des données et des analyses pertinentes pour faire des choix éclairés et rapides qui produisent des résultats.' }
        ] },
        { type: 'heading', text: 'Cartes mémoire' },
        { type: 'text', html: 'Utilisez ces cartes mémoire pour consolider votre compréhension et vous préparer à appliquer ces qualités dans votre propre parcours de leader. Sélectionnez une carte pour la retourner.' },
        { type: 'flashcards', useCharacteristics: true },
        { type: 'quote', text: 'Chaque jour est une occasion de diriger avec intention et de faire une différence positive. Le GLP vous permet de devenir le leader dont Entegris a besoin, quels que soient votre poste ou votre titre.' }
      ]
    },
    {
      id: 'collaboration',
      title: 'Moment de leadership : collaborer sous pression',
      short: 'Collaborer sous pression',
      blocks: [
        { type: 'text', html: 'La pression révèle le leadership. Quand les délais se resserrent ou que les tensions montent, votre réponse façonne la confiance, l’alignement et les résultats. Dans ce moment de leadership, vous verrez comment les leaders solides collaborent sous pression, gardent le cap, renforcent la responsabilité partagée et empêchent les silos de se former.' },
        { type: 'text', html: 'Tout au long de ce module, réfléchissez à la façon dont vous vous comportez quand cela compte le plus.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 Ko', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'La progression du leader commence par la collaboration sous pression' },
        { type: 'text', html: 'La collaboration est véritablement mise à l’épreuve quand la pression monte. Dans les situations à fort enjeu, les leaders doivent concilier urgence et alignement, en rassemblant les personnes plutôt qu’en laissant les silos ou les reproches s’installer. Votre réaction dans ces moments façonne la confiance, la performance et la culture.' },
        { type: 'text', html: 'Regardez maintenant la vidéo et gardez votre Playbook GLP à portée de main pour réfléchir à ce moment de leadership.' },
        { type: 'video', id: 'l2-moment', title: 'Moment de leadership : collaborer sous pression' },
        { type: 'heading', text: 'Des décisions de leadership efficaces' },
        { type: 'text', html: 'L’usine Materials Solutions a connu des perturbations de sa chaîne d’approvisionnement dues à une mauvaise collaboration et à des équipes cloisonnées. Une réunion transversale avait été planifiée pour traiter ces problèmes, mais un participant clé, Peter, n’a pas pu y assister. Trois options ont été envisagées : reporter la réunion, dérouler l’ordre du jour complet ou adapter l’ordre du jour pour se concentrer sur les problèmes solubles. Le leader a choisi d’adapter la réunion, préservant ainsi la dynamique et favorisant la collaboration. Les leaders efficaces s’adaptent, font avancer les choses et créent une responsabilité partagée autour des solutions.' },
        { type: 'scenario', id: 'l2', prompt: 'Peter, un participant clé, ne peut pas assister à la réunion transversale. Que faites-vous ?', options: [
          { key: 'a', title: 'Reporter la réunion', text: 'Attendre que Peter soit disponible pour que toutes les voix soient présentes.', tag: 'Dynamique perdue', good: false, feedback: 'Reporter envoie le signal que l’avancement dépend d’une seule personne. Les problèmes d’approvisionnement continuent de coûter cher à l’usine pendant que l’équipe reste à l’arrêt, et les silos à l’origine du problème demeurent.' },
          { key: 'b', title: 'Dérouler l’ordre du jour complet', text: 'Tenir la réunion comme prévu et traiter les sujets de Peter sans lui.', tag: 'Alignement fragilisé', good: false, feedback: 'Des décisions sur les sujets de Peter sont prises sans la personne qui en est responsable. Cela ouvre la porte aux reprises et aux reproches par la suite, exactement ce que la collaboration sous pression doit éviter.' },
          { key: 'c', title: 'Adapter l’ordre du jour', text: 'Se concentrer sur les problèmes que le groupe peut résoudre maintenant et planifier les sujets de Peter avec lui.', tag: 'Responsabilité partagée', good: true, feedback: 'Vous préservez la dynamique, respectez la responsabilité de Peter et donnez à l’équipe de vrais progrès sur lesquels s’appuyer. Adapter la réunion transforme la pression en collaboration plutôt qu’en silos.' }
        ] },
        { type: 'quote', text: 'La vraie collaboration brille le plus sous pression, là où l’unité transforme les défis en occasions de réussir.' }
      ]
    },
    {
      id: 'letting-go',
      title: 'Moment de leadership : lâcher prise au bon niveau',
      short: 'Lâcher prise au bon niveau',
      blocks: [
        { type: 'text', html: 'Déléguer ne consiste pas seulement à confier du travail ; c’est transférer le bon niveau d’autorité. Dans ce moment de leadership, vous examinerez la tension entre rester impliqué et prendre véritablement du recul. Les leaders efficaces lâchent prise avec intention. Ils laissent aux autres l’espace pour diriger, décider et bâtir leur crédibilité, même quand les enjeux sont élevés. Lâcher prise au bon niveau renforce la confiance, développe les compétences et consolide la responsabilité.' },
        { type: 'text', html: 'Au fil de cette section, demandez-vous : déléguez-vous des tâches ou responsabilisez-vous des leaders ?' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 Ko', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'La progression du leader se poursuit en lâchant prise au bon niveau' },
        { type: 'text', html: 'Regardez maintenant la vidéo et observez attentivement comment l’autorité est soit renforcée, soit reprise sur le moment. Pendant le visionnage, appuyez-vous sur votre Playbook GLP et réfléchissez à votre façon de déléguer. Transférez-vous une vraie responsabilité, ou restez-vous plus proche que nécessaire ?' },
        { type: 'video', id: 'l3-moment', title: 'Moment de leadership : lâcher prise au bon niveau' },
        { type: 'heading', text: 'Un leadership qui responsabilise' },
        { type: 'text', html: 'Un responsable d’usine délègue une initiative clé à Jessica, une collaboratrice très performante. Quand une partie prenante suggère que le responsable devrait assister à la réunion, il doit décider s’il reprend le contrôle ou s’il responsabilise pleinement Jessica. Choisir de laisser Jessica diriger en toute autonomie témoigne de confiance, renforce sa crédibilité et soutient son développement en tant que leader.' },
        { type: 'scenario', id: 'l3', prompt: 'Une partie prenante suggère que vous devriez assister à la réunion de Jessica. Que faites-vous ?', options: [
          { key: 'a', title: 'Y assister et diriger', text: 'Participer à la réunion et prendre la main pour rassurer la partie prenante.', tag: 'Contrôle repris', good: false, feedback: 'La partie prenante est rassurée, mais l’autorité de Jessica s’évapore devant tout le monde. Vous venez de signifier à chacun que l’initiative est en réalité la vôtre.' },
          { key: 'b', title: 'Assister au cas où', text: 'Rester discrètement au fond de la salle et n’intervenir que si les choses dérapent.', tag: 'Responsabilité diluée', good: false, feedback: 'Votre présence change la dynamique. Les questions glissent vers vous, Jessica doute d’elle-même et la partie prenante apprend à passer outre. Rester plus proche que nécessaire lui coûte tout de même sa crédibilité.' },
          { key: 'c', title: 'Décliner et soutenir Jessica', text: 'Confirmer à la partie prenante que Jessica a toute autorité, et lui proposer de préparer la réunion avec elle en amont.', tag: 'Le bon niveau', good: true, feedback: 'Vous transférez une véritable autorité et la rendez visible pour la partie prenante. La préparation en amont apporte un soutien à Jessica sans lui retirer la salle. Confiance, crédibilité et compétences grandissent ensemble.' }
        ] },
        { type: 'quote', text: 'Le vrai leadership, c’est savoir quand lâcher prise ; responsabiliser les autres au bon niveau nourrit la confiance, le développement et la réussite partagée.' }
      ]
    },
    {
      id: 'reinforce',
      title: 'Moment de leadership : renforcer ou reprendre ?',
      short: 'Renforcer ou reprendre ?',
      blocks: [
        { type: 'text', html: 'Renforcer la confiance et reprendre le cap sont des compétences de leadership essentielles. Les leaders efficaces savent quand prendre du recul pour responsabiliser leurs équipes et quand intervenir pour réaligner les priorités. En renforçant la confiance, vous créez un environnement où chacun se sent en mesure de prendre ses responsabilités et de décider. Reprendre le cap garantit que l’équipe reste alignée sur les objectifs globaux, même dans les moments difficiles. L’équilibre entre ces deux actions renforce la collaboration et conduit à la réussite.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 Ko', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Renforcer ou reprendre ?' },
        { type: 'text', html: 'Dans ce moment de leadership, vous explorerez une tension courante : quand un membre de l’équipe pilote, intervenez-vous ou restez-vous en soutien ? Ces moments surviennent souvent vite et sous pression. Votre réponse peut renforcer la responsabilité et la crédibilité, ou reprendre l’autorité sans le vouloir.' },
        { type: 'text', html: 'Pendant la vidéo, soyez attentif aux signaux envoyés, non seulement par les mots, mais aussi par la présence et les actes.' },
        { type: 'video', id: 'l4-moment', title: 'Moment de leadership : renforcer ou reprendre ?' },
        { type: 'heading', text: 'Un soutien d’équipe efficace' },
        { type: 'text', html: 'Jessica et son équipe préparent avec soin la présentation de leurs recommandations aux principales parties prenantes, après la résolution de problèmes critiques à l’usine Materials Solutions. Confiante dans ses conclusions, l’équipe cherche néanmoins des conseils pour positionner efficacement son argumentaire afin qu’il trouve un écho auprès de son public.' },
        { type: 'text', html: 'Le leader envisage plusieurs approches : reprendre la présentation pour garantir la clarté, se contenter d’un bref message de réconfort, ou coacher l’équipe pour affiner sa prestation tout en lui laissant la responsabilité de son travail. Finalement, le leader choisit d’engager de vrais échanges avec l’équipe, de comprendre son point de vue et de lui apporter des retours constructifs sans prendre le contrôle du processus.' },
        { type: 'text', html: 'Cette approche souligne l’importance d’un leadership qui responsabilise les équipes. En offrant des repères et en cultivant la confiance, les leaders s’assurent que leurs équipes restent responsables, motivées et prêtes à réussir dans les situations à fort enjeu.' },
        { type: 'scenario', id: 'l4', prompt: 'L’équipe de Jessica souhaite votre avis avant la présentation aux parties prenantes. Que faites-vous ?', options: [
          { key: 'a', title: 'Reprendre la main', text: 'La réunion est importante. Vous relisez la présentation, faites des ajustements et animez vous-même la session avec les parties prenantes.', tag: 'Reprend la responsabilité', good: false, feedback: 'Reprendre le contrôle envoie un message clair : quand ça compte, ce n’est pas votre travail. Jessica a piloté pendant des mois, et l’équipe perd le moment de visibilité qu’elle a mérité. La confiance et la crédibilité en souffrent.' },
          { key: 'b', title: 'Envoyer un e-mail', text: 'Vous dites à l’équipe que vous comprenez ses inquiétudes, que vous lui faites confiance et qu’elle doit présenter ce qu’elle juge juste.', tag: 'Laisse l’équipe seule', good: false, feedback: 'Un message vague n’offre ni orientation ni coaching à une équipe qui a demandé du soutien. Elle ignore toujours ce qu’attendent les parties prenantes, et son anxiété monte avant un moment très visible.' },
          { key: 'c', title: 'Rencontrer et écouter d’abord', text: 'Vous planifiez un temps avec l’équipe. Avant de donner votre avis, vous lui demandez de vous présenter son positionnement et son approche.', tag: 'Renforce la responsabilité', good: true, feedback: 'Vous êtes présent, vous coachez et vous résistez à l’envie de reprendre le contrôle quand la pression monte. Jessica conserve une responsabilité claire et un vrai pouvoir de décision. L’équipe se sent responsabilisée pour avancer.' }
        ] },
        { type: 'reflect', id: 'l4', title: 'Est-ce que je responsabilise vraiment mon équipe ?', intro: 'La responsabilisation ne se déclare pas. Elle se vit par nos équipes. Prenez quelques minutes pour ces questions.', questions: [
          { q: 'Comment le travail continuerait-il si j’étais indisponible ?', hint: 'Si l’avancement ralentit, si les décisions stagnent ou si les parties prenantes vous attendent, c’est un signal.' },
          { q: 'Comment mon comportement dans les moments très visibles peut-il renforcer ou affaiblir la responsabilisation ?', hint: 'Intervenez-vous quand les enjeux montent ? Répondez-vous aux questions adressées à votre équipe ? Ou restez-vous en retrait pour la laisser piloter ?' },
          { q: 'Comment mon équipe pourrait-elle fonctionner plus en autonomie dans six mois si je la responsabilise davantage aujourd’hui ?', hint: 'Propose-t-elle des solutions au lieu de remonter les problèmes ? Prend-elle en charge les échanges avec les parties prenantes ? Son jugement progresse-t-il ?' }
        ] },
        { type: 'quote', text: 'Reprenez le cap et renforcez vos priorités ; la réussite commence par la clarté et la détermination.' }
      ]
    },
    {
      id: 'closing',
      title: 'Conclusion : trois actions à mettre en œuvre',
      short: 'Trois actions à mettre en œuvre',
      blocks: [
        { type: 'text', html: 'À travers ces moments de leadership, un thème ressort : le leadership se définit en temps réel. Souvent bref. Parfois inconfortable. Toujours marquant. Que vous collaboriez sous pression, que vous renforciez ou repreniez l’autorité, ou que vous lâchiez prise au bon niveau, votre réponse envoie des signaux : sur la confiance, sur la responsabilité et même sur ce qu’est le leadership en action. Les grands leaders agissent avec intention. Ils renforcent la crédibilité, transfèrent une véritable autorité et rassemblent les personnes, surtout quand les enjeux sont élevés. À l’avenir, marquez une pause dans vos propres moments de leadership. Demandez-vous : « Quel signal suis-je en train d’envoyer ? »' },
        { type: 'heading', text: 'Faisons le point' },
        { type: 'text', html: 'Dans cette vidéo, nous passons de la prise de conscience à l’action. Les moments de leadership n’ont d’impact que si vous appliquez ce que vous avez appris. Les trois actions à mettre en œuvre sont conçues pour vous aider à traduire la réflexion en comportements concrets : des gestes simples et intentionnels que vous pouvez adopter dès maintenant.' },
        { type: 'text', html: 'Pendant le visionnage, réfléchissez aux situations où vous pourrez mettre ces actions en pratique lors de votre prochain moment de leadership.' },
        { type: 'video', id: 'l5-godo', title: 'Trois actions à mettre en œuvre' },
        { type: 'godo', id: 'l5', title: 'Vos trois actions à mettre en œuvre', intro: 'Notez les trois actions que vous entreprendrez lors de votre prochain moment de leadership. Elles sont enregistrées avec votre progression dans le cours.', labels: ['Action 1', 'Action 2', 'Action 3'], placeholders: ['Lors de ma prochaine réunion sous pression, je vais…', 'La prochaine fois que je délègue, je vais…', 'Quand un membre de l’équipe pilote, je vais…'] },
        { type: 'heading', text: 'Conclusion' },
        { type: 'text', html: 'Vous avez atteint la fin de ce cours. Tout au long de ces moments de leadership, vous avez vu comment vos choix en temps réel, surtout sous pression, façonnent la confiance, la responsabilité et la culture. Qu’il s’agisse de renforcer ou de reprendre l’autorité, de lâcher prise au bon niveau ou de collaborer sous pression, chaque moment est une occasion de diriger avec intention.' },
        { type: 'text', html: 'À l’avenir, souvenez-vous : le leadership se pratique dans les interactions de tous les jours, pas seulement dans les grandes décisions.' },
        { type: 'text', html: 'Merci pour votre engagement et votre implication. Prenez maintenant ce que vous avez appris et appliquez-le lors de votre prochain moment de leadership.' }
      ]
    }
  ]
};
