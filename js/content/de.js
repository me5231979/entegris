/* German course content (Sie-Form). Translated from en.js, which is the source of truth.
   Keep block types and ids identical to en.js. */
window.ENTG_CONTENT = window.ENTG_CONTENT || {};
window.ENTG_CONTENT.de = {
  ui: {
    skip: 'Zum Inhalt springen', language: 'Sprache', menu: 'Kursmenü',
    courseTitle: 'Das Great Leader Profile', courseSubtitle: 'Führung im Alltag bei Entegris',
    heroEyebrow: 'Führungskräfteentwicklung', startCourse: 'Kurs starten', resumeCourse: 'Kurs fortsetzen',
    outline: 'Kursübersicht', lessons: 'Lektionen', lessonOf: 'Lektion {a} von {b}',
    percentComplete: '{p} % abgeschlossen', complete: 'Abgeschlossen', inProgress: 'In Bearbeitung', notStarted: 'Nicht begonnen',
    continueBtn: 'Weiter', completeCourse: 'Kurs abschließen', courseCompleted: 'Kurs abgeschlossen',
    prev: 'Zurück', next: 'Weiter', home: 'Kursstartseite',
    videoPlaceholder: 'Video-Platzhalter', captions: '16:9 · Untertitel erforderlich',
    download: 'Herunterladen', flip: 'Umdrehen', select: '{x} wählen', selected: 'Ausgewählt',
    yourChoice: 'Ihre Wahl', chooseResponse: 'Wählen Sie eine Reaktion', pickClosest: 'Wählen Sie die Option, die dem am nächsten kommt, was Sie tun würden.',
    reflect: 'Reflektieren', notesLocal: 'Ihre Notizen werden zusammen mit Ihrem Kursfortschritt gespeichert.',
    footerCopy: '© 1994–2026 Entegris. Alle Rechte vorbehalten.', footerInternal: 'Internes Schulungsmaterial',
    thatsAWrap: 'Sie haben alle Lektionen abgeschlossen.', backToOutline: 'Zurück zur Übersicht',
    objectives: 'Lernziele', expand: 'Aufklappen', printNotes: 'Meine Notizen drucken', printTitle: 'Meine Notizen und Go-Do-Aktionen', noAnswer: '(noch keine Antwort)', myChoice: 'Meine Wahl', translationNote: 'Übersetzungsentwurf. Bitte vor der Freigabe muttersprachlich prüfen lassen.'
  },
  home: {
    title: 'Das Great Leader Profile',
    subtitle: 'Führung im Alltag bei Entegris',
    tagline: 'Zeigen Sie Führung. Jeden Tag.',
    intro: 'Wie meistern großartige Führungskräfte Wachstum, Veränderung und Unsicherheit? In diesem Kurs erfahren Sie, wie Sie das überarbeitete Great Leader Profile (GLP) in Ihrer täglichen Führungsarbeit bei Entegris anwenden. Durch praxisnahe Reflexion, realistische Szenarien und umsetzbare Strategien erkennen Sie Ihre Stärken als Führungskraft, entwickeln neue Ansätze, um Ihr Team zu stärken, und lernen, das GLP zu vermitteln und vorzuleben, damit es nachhaltig wirkt. Am Ende sind Sie in der Lage, sich selbst und andere souverän zu führen und das GLP zu einem lebendigen Leitfaden für Ihren Weg als Führungskraft zu machen.',
    facts: [
      { k: 'Lektionen', v: '5' },
      { k: 'Format', v: 'Video · Szenarien · Reflexion' },
      { k: 'Dauer', v: '≈ 60 Min.' },
      { k: 'Mitbringen', v: 'GLP-Playbook' }
    ]
  },
  lessons: [
    {
      id: 'intro',
      title: 'Einführung in das Great Leader Profile (GLP) und seine aktuelle Bedeutung',
      short: 'Einführung in das GLP',
      blocks: [
        { type: 'heading', text: 'Warum das Great Leader Profile gerade jetzt wichtig ist' },
        { type: 'text', html: 'Willkommen zu Ihrer Einführung in das Great Leader Profile (GLP). Als Führungskräfte bei Entegris spielen Sie eine entscheidende Rolle dabei, unsere Kultur zu prägen und unseren Erfolg voranzutreiben. Diese Lektion hilft Ihnen zu verstehen, wie sich das GLP entwickelt hat, welche Kernmerkmale es umfasst und warum es heute relevanter ist denn je, während wir Wachstum und Veränderung gemeinsam gestalten.' },
        { type: 'video', id: 'l1-glp', title: 'Entegris Great Leader Profile' },
        { type: 'text', html: 'Klare Lernziele helfen Ihnen, sich beim Lernen zu fokussieren und zu verstehen, wie jeder Teil dieser Lektion Ihre Entwicklung als Führungskraft unterstützt. Wenn Sie wissen, was Sie erreichen werden, können Sie die GLP-Konzepte besser mit Ihrem Führungsalltag verbinden.' },
        { type: 'objectives', items: [
          'Nachvollziehen, warum das Great Leader Profile als Leitfaden für Führung bei Entegris dient.',
          'Die Kernmerkmale und Verhaltensweisen benennen, die großartige Führung in unserer Organisation ausmachen.',
          'Erkennen, wie das GLP in Zeiten von organisatorischem Wachstum und Wandel für Konsistenz und Klarheit sorgt.',
          'Verstehen, dass Führung bei Entegris alle angeht, nicht nur Personalverantwortliche.'
        ] },
        { type: 'heading', text: 'Das Great Leader Profile im Überblick' },
        { type: 'text', html: 'Die Grundlagen des GLP zu verstehen ist für jede Führungskraft bei Entegris unerlässlich. Klappen Sie die folgenden Abschnitte auf, um mehr über Zweck, Entwicklung und Kernmerkmale des GLP zu erfahren und zu sehen, wie es für alle Führungskräfte gilt.' },
        { type: 'accordion', items: [
          { title: 'Zweck des GLP', html: '<p>Das Great Leader Profile wurde entwickelt, um zu definieren, was großartige Führung bei Entegris ausmacht, und um klare Erwartungen an alle Führungskräfte zu formulieren. Es dient als praktischer Leitfaden, der Führungskräften hilft, ihr Handeln an unserer Unternehmensstrategie auszurichten und dabei einen authentischen, individuellen Führungsstil zu bewahren.</p><p>Durch diese Klarheit befähigt das GLP Führungskräfte, konsistente Entscheidungen zu treffen und eine positive, leistungsstarke Kultur in der gesamten Organisation zu fördern.</p>' },
          { title: 'Entwicklung des GLP', html: '<p>Seit seiner Einführung im Jahr 2018 hat sich das GLP gemeinsam mit Entegris weiterentwickelt. Mit dem Wachstum unserer Organisation und neuen Herausforderungen wurde deutlich, dass das Profil überprüft und aktualisiert werden musste, um unsere heutige Realität abzubilden.</p><p>Das aktualisierte GLP enthält nun neue Erwartungen und Verhaltensweisen und bleibt so auch in Zeiten von Wandel und Wachstum ein relevanter und wirksamer Leitfaden für Führung.</p>' },
          { title: 'GLP-Merkmale', html: '<p>Das GLP beschreibt sieben Kernmerkmale, die großartige Führung bei Entegris ausmachen:</p><ul><li>Baut Talente für die Zukunft auf</li><li>Fördert partnerschaftliche Zusammenarbeit in unserer globalen Organisation</li><li>Fördert Innovation</li><li>Führt mit Beharrlichkeit und Bescheidenheit</li><li>Trifft schnelle, datenbasierte Entscheidungen</li><li>Stellt den Kunden in den Mittelpunkt</li><li>Fördert Verbindlichkeit</li></ul>' },
          { title: 'GLP für alle Führungskräfte', html: '<p>Führung bei Entegris ist nicht auf Personalverantwortliche beschränkt. Das GLP gilt für alle, unabhängig von Titel oder Rolle. Es geht darum, wie Sie auftreten, zusammenarbeiten und in Ihrer täglichen Arbeit Verantwortung übernehmen.</p><p>Indem alle Teammitglieder das GLP leben, tragen sie zu unserer Führungskultur bei und erzielen positive Wirkung in der gesamten Organisation.</p>' }
        ] },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Die GLP-Merkmale und ihre Bedeutung' },
        { type: 'text', html: 'Wenn Sie die Definitionen der einzelnen GLP-Merkmale durchgehen, verinnerlichen Sie, was großartige Führung bei Entegris bedeutet.' },
        { type: 'video', id: 'l1-characteristics', title: 'GLP-Merkmale' },
        { type: 'characteristics', center: 'PACE', sub: 'Eine werteorientierte Kultur', items: [
          { icon: 'talent', name: 'Baut Talente für die Zukunft auf', desc: 'Entwickelt sich selbst und andere aktiv weiter und bereitet das Team auf künftige Herausforderungen und Chancen vor.' },
          { icon: 'globe', name: 'Fördert partnerschaftliche Zusammenarbeit in unserer globalen Organisation', desc: 'Arbeitet wirksam über Teams und Regionen hinweg zusammen, um gemeinsame Ziele zu erreichen und unsere globale Wirkung zu stärken.' },
          { icon: 'bulb', name: 'Fördert Innovation', desc: 'Ermutigt zu kreativem Denken und neuen Ideen und unterstützt kontinuierliche Verbesserung und Anpassungsfähigkeit.' },
          { icon: 'shield', name: 'Fördert Verbindlichkeit', desc: 'Formuliert klare Erwartungen, unterstützt die Umsetzung und sorgt dafür, dass Einzelne und Teams zu ihren Zusagen stehen.' },
          { icon: 'flag', name: 'Führt mit Beharrlichkeit und Bescheidenheit', desc: 'Zeigt Widerstandsfähigkeit und Entschlossenheit und bleibt dabei offen für Feedback und das Lernen von anderen.' },
          { icon: 'hand', name: 'Stellt den Kunden in den Mittelpunkt', desc: 'Priorisiert Kundenbedürfnisse, liefert Mehrwert und baut starke, dauerhafte Beziehungen auf.' },
          { icon: 'gauge', name: 'Trifft schnelle, datenbasierte Entscheidungen', desc: 'Nutzt relevante Daten und Erkenntnisse, um zeitnah fundierte Entscheidungen zu treffen, die zu Ergebnissen führen.' }
        ] },
        { type: 'heading', text: 'Lernkarten' },
        { type: 'text', html: 'Nutzen Sie diese Lernkarten, um Ihr Verständnis zu festigen und sich darauf vorzubereiten, diese Eigenschaften in Ihrer eigenen Führungsarbeit anzuwenden. Wählen Sie eine Karte, um sie umzudrehen.' },
        { type: 'flashcards', useCharacteristics: true },
        { type: 'quote', text: 'Jeder Tag bietet die Chance, zielgerichtet zu führen und etwas Positives zu bewirken. Das GLP befähigt Sie, die Führungskraft zu werden, die Entegris braucht, unabhängig von Position oder Titel.' }
      ]
    },
    {
      id: 'collaboration',
      title: 'Führungsmoment: Zusammenarbeit unter Druck',
      short: 'Zusammenarbeit unter Druck',
      blocks: [
        { type: 'text', html: 'Unter Druck zeigt sich Führung. Wenn Zeitpläne enger werden oder Spannungen steigen, prägt Ihre Reaktion Vertrauen, Ausrichtung und Ergebnisse. In diesem Führungsmoment erkunden Sie, wie starke Führungskräfte unter Druck zusammenarbeiten, Klarheit bewahren, gemeinsame Verantwortung stärken und verhindern, dass Silos entstehen.' },
        { type: 'text', html: 'Überlegen Sie beim Durcharbeiten dieses Moduls, wie Sie auftreten, wenn es am meisten darauf ankommt.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Als Führungskraft wachsen: Zusammenarbeit unter Druck' },
        { type: 'text', html: 'Zusammenarbeit wird erst dann wirklich auf die Probe gestellt, wenn der Druck steigt. Wenn viel auf dem Spiel steht, müssen Führungskräfte Dringlichkeit und Ausrichtung in Einklang bringen und Menschen zusammenbringen, statt Silos oder Schuldzuweisungen zuzulassen. Wie Sie in diesen Momenten reagieren, prägt Vertrauen, Leistung und Kultur.' },
        { type: 'text', html: 'Sehen Sie sich nun das Video an und arbeiten Sie mit Ihrem GLP-Playbook, während Sie über diesen Führungsmoment nachdenken.' },
        { type: 'video', id: 'l2-moment', title: 'Führungsmoment: Zusammenarbeit unter Druck' },
        { type: 'heading', text: 'Wirksame Führungsentscheidungen' },
        { type: 'text', html: 'Das Werk Materials Solutions hatte mit Störungen in der Lieferkette zu kämpfen, die durch mangelnde Zusammenarbeit und abgeschottete Teams verursacht wurden. Ein bereichsübergreifendes Meeting wurde angesetzt, um diese Probleme anzugehen, doch Peter, eine Schlüsselperson, konnte nicht dabei sein. Drei Optionen standen zur Wahl: das Meeting verschieben, die gesamte Agenda durchgehen oder die Agenda auf die lösbaren Themen ausrichten. Die Führungskraft entschied sich, das Meeting anzupassen, den Schwung zu erhalten und die Zusammenarbeit zu fördern. Wirksame Führungskräfte passen sich an, treiben Fortschritt voran und schaffen gemeinsame Verantwortung für Lösungen.' },
        { type: 'scenario', id: 'l2', prompt: 'Peter, eine Schlüsselperson, kann nicht am bereichsübergreifenden Meeting teilnehmen. Was tun Sie?', options: [
          { key: 'a', title: 'Das Meeting verschieben', text: 'Warten, bis Peter verfügbar ist, damit alle Beteiligten am Tisch sitzen.', tag: 'Schwung verloren', good: false, feedback: 'Eine Verschiebung signalisiert, dass der Fortschritt von einer einzelnen Person abhängt. Die Lieferkettenprobleme kosten das Werk weiterhin Geld, während das Team stillsteht, und die Silos, die das Problem verursacht haben, bleiben bestehen.' },
          { key: 'b', title: 'Die gesamte Agenda durchgehen', text: 'Das Meeting wie geplant durchführen und Peters Themen ohne ihn behandeln.', tag: 'Ausrichtung gefährdet', good: false, feedback: 'Entscheidungen zu Peters Themen werden ohne die Person getroffen, die dafür verantwortlich ist. Das lädt später zu Nacharbeit und Schuldzuweisungen ein – genau das, was Zusammenarbeit unter Druck verhindern soll.' },
          { key: 'c', title: 'Die Agenda anpassen', text: 'Auf die Themen fokussieren, die die Anwesenden jetzt lösen können, und Peters Themen gemeinsam mit ihm neu terminieren.', tag: 'Gemeinsame Verantwortung', good: true, feedback: 'Sie halten den Schwung aufrecht, respektieren Peters Verantwortung und geben dem Team echten Fortschritt, auf dem es aufbauen kann. Das Meeting anzupassen verwandelt Druck in Zusammenarbeit statt in Silos.' }
        ] },
        { type: 'quote', text: 'Echte Zusammenarbeit zeigt sich am stärksten unter Druck, wenn Zusammenhalt Herausforderungen in Chancen für den Erfolg verwandelt.' }
      ]
    },
    {
      id: 'letting-go',
      title: 'Führungsmoment: Loslassen auf der richtigen Ebene',
      short: 'Loslassen auf der richtigen Ebene',
      blocks: [
        { type: 'text', html: 'Delegieren bedeutet nicht nur, Arbeit zu verteilen, sondern das richtige Maß an Befugnis zu übertragen. In diesem Führungsmoment untersuchen Sie das Spannungsfeld zwischen dem Bedürfnis, eingebunden zu bleiben, und echtem Zurücktreten. Wirksame Führungskräfte lassen bewusst los. Sie schaffen Raum, damit andere führen, Entscheidungen treffen und Glaubwürdigkeit aufbauen können, auch wenn viel auf dem Spiel steht. Loslassen auf der richtigen Ebene stärkt Vertrauen, entwickelt Fähigkeiten und festigt Verantwortung.' },
        { type: 'text', html: 'Fragen Sie sich beim Durcharbeiten dieses Abschnitts: Delegieren Sie Aufgaben oder befähigen Sie zur Führung?' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Als Führungskraft weiterwachsen: Loslassen auf der richtigen Ebene' },
        { type: 'text', html: 'Sehen Sie sich nun das Video an und achten Sie genau darauf, wie Befugnis im jeweiligen Moment entweder gestärkt oder zurückgeholt wird. Arbeiten Sie dabei mit Ihrem GLP-Playbook und reflektieren Sie, wie Sie delegieren. Übertragen Sie echte Verantwortung oder bleiben Sie näher dran als nötig?' },
        { type: 'video', id: 'l3-moment', title: 'Führungsmoment: Loslassen auf der richtigen Ebene' },
        { type: 'heading', text: 'Befähigende Führung' },
        { type: 'text', html: 'Eine Werksleitung delegiert eine wichtige Initiative an Jessica, ein leistungsstarkes Teammitglied. Als ein Stakeholder vorschlägt, die Führungskraft solle am Meeting teilnehmen, muss sie entscheiden, ob sie die Kontrolle zurückholt oder Jessica vollständig befähigt. Jessica eigenständig führen zu lassen, zeigt Vertrauen, stärkt ihre Glaubwürdigkeit und unterstützt ihre Entwicklung als Führungskraft.' },
        { type: 'scenario', id: 'l3', prompt: 'Ein Stakeholder schlägt vor, dass Sie an Jessicas Meeting teilnehmen sollten. Was tun Sie?', options: [
          { key: 'a', title: 'Teilnehmen und leiten', text: 'Am Meeting teilnehmen und die Leitung übernehmen, damit der Stakeholder beruhigt ist.', tag: 'Kontrolle zurückgeholt', good: false, feedback: 'Der Stakeholder ist beruhigt, doch Jessicas Befugnis löst sich vor allen Anwesenden in Luft auf. Sie haben allen gezeigt, dass die Initiative in Wirklichkeit Ihre ist.' },
          { key: 'b', title: 'Sicherheitshalber dabeisitzen', text: 'Still im Hintergrund teilnehmen und nur eingreifen, wenn etwas schiefläuft.', tag: 'Verantwortung verwässert', good: false, feedback: 'Ihre Anwesenheit verändert die Dynamik im Raum. Fragen wandern zu Ihnen, Jessica zweifelt an sich, und der Stakeholder lernt, sich an ihr vorbei an Sie zu wenden. Näher dran zu bleiben als nötig kostet sie trotzdem Glaubwürdigkeit.' },
          { key: 'c', title: 'Absagen und Jessica den Rücken stärken', text: 'Dem Stakeholder bestätigen, dass Jessica die volle Befugnis hat, und ihr anbieten, sich vorab gemeinsam vorzubereiten.', tag: 'Richtige Ebene', good: true, feedback: 'Sie übertragen echte Befugnis und machen sie für den Stakeholder sichtbar. Die gemeinsame Vorbereitung gibt Jessica Unterstützung, ohne ihr den Raum zu nehmen. Vertrauen, Glaubwürdigkeit und Fähigkeiten wachsen.' }
        ] },
        { type: 'quote', text: 'Echte Führung heißt zu wissen, wann man loslässt; andere auf der richtigen Ebene zu befähigen, fördert Vertrauen, Wachstum und gemeinsamen Erfolg.' }
      ]
    },
    {
      id: 'reinforce',
      title: 'Führungsmoment: Stärken oder zurückholen?',
      short: 'Stärken oder zurückholen?',
      blocks: [
        { type: 'text', html: 'Vertrauen zu stärken und den Fokus zurückzuholen sind zentrale Führungskompetenzen. Wirksame Führungskräfte wissen, wann sie zurücktreten sollten, um ihre Teams zu befähigen, und wann sie eingreifen müssen, um Prioritäten neu auszurichten. Indem Sie Vertrauen stärken, schaffen Sie ein Umfeld, in dem andere sich sicher fühlen, Verantwortung zu übernehmen und Entscheidungen zu treffen. Den Fokus zurückzuholen stellt sicher, dass das Team auch in schwierigen Momenten an den übergeordneten Zielen ausgerichtet bleibt. Die Balance zwischen beidem stärkt die Zusammenarbeit und führt zum Erfolg.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761,8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Stärken oder zurückholen?' },
        { type: 'text', html: 'In diesem Führungsmoment erkunden Sie ein häufiges Spannungsfeld: Wenn ein Teammitglied führt, greifen Sie ein oder stehen Sie hinter ihm? Diese Momente passieren oft schnell und unter Druck. Ihre Reaktion kann Verantwortung und Glaubwürdigkeit stärken oder unbeabsichtigt Befugnis zurückholen.' },
        { type: 'text', html: 'Achten Sie beim Ansehen des Videos auf die Signale, die gesendet werden, nicht nur durch Worte, sondern auch durch Präsenz und Handeln.' },
        { type: 'video', id: 'l4-moment', title: 'Führungsmoment: Stärken oder zurückholen?' },
        { type: 'heading', text: 'Wirksame Teamunterstützung' },
        { type: 'text', html: 'Jessica und ihr Team bereiten sich sorgfältig darauf vor, nach der Lösung kritischer Probleme im Werk Materials Solutions ihre Empfehlungen wichtigen Stakeholdern vorzustellen. Das Team ist von seinen Ergebnissen überzeugt, sucht aber Rat, wie es seinen Business Case so positionieren kann, dass er bei der Zielgruppe ankommt.' },
        { type: 'text', html: 'Die Führungskraft erwägt mehrere Ansätze: die Präsentation zu übernehmen, um Klarheit sicherzustellen, nur eine kurze beruhigende Nachricht zu senden oder das Team beim Feinschliff zu coachen und ihm dabei die Verantwortung für seine Arbeit zu lassen. Letztlich entscheidet sich die Führungskraft, mit dem Team in einen echten Austausch zu gehen, seine Sichtweisen zu verstehen und konstruktives Feedback zu geben, ohne die Kontrolle über den Prozess zu übernehmen.' },
        { type: 'text', html: 'Dieser Ansatz zeigt, wie wichtig eine Führung ist, die Teams befähigt. Durch Orientierung und die Stärkung von Selbstvertrauen stellen Führungskräfte sicher, dass ihre Teams verantwortlich, motiviert und bereit bleiben, in entscheidenden Situationen erfolgreich zu sein.' },
        { type: 'scenario', id: 'l4', prompt: 'Jessicas Team möchte vor der Stakeholder-Präsentation Ihren Input. Was tun Sie?', options: [
          { key: 'a', title: 'Selbst übernehmen', text: 'Das Meeting ist wichtig. Sie prüfen die Präsentation, nehmen Anpassungen vor und leiten die Stakeholder-Sitzung selbst.', tag: 'Holt die Verantwortung zurück', good: false, feedback: 'Die Übernahme sendet dem Team eine klare Botschaft: „Wenn es darauf ankommt, ist das nicht eure Arbeit.“ Jessica hat monatelang geführt, und das Team verliert den sichtbaren Moment, den es sich verdient hat. Selbstvertrauen und Glaubwürdigkeit leiden.' },
          { key: 'b', title: 'Eine E-Mail schicken', text: 'Sie schreiben dem Team, dass Sie die Bedenken verstehen, ihm vertrauen und es präsentieren soll, was es für richtig hält.', tag: 'Lässt das Team allein', good: false, feedback: 'Eine vage Nachricht bietet einem Team, das um Unterstützung gebeten hat, weder Orientierung noch Coaching. Es weiß weiterhin nicht, was die Stakeholder erwarten, und die Nervosität vor einem so sichtbaren Auftritt steigt.' },
          { key: 'c', title: 'Erst treffen und zuhören', text: 'Sie vereinbaren einen Termin mit dem Team. Bevor Sie Input geben, lassen Sie sich Positionierung und Vorgehen des Teams erläutern.', tag: 'Stärkt die Verantwortung', good: true, feedback: 'Sie sind präsent, Sie coachen, und Sie widerstehen dem Impuls, die Kontrolle an sich zu ziehen, wenn der Druck steigt. Jessica behält klare Verantwortung und echte Entscheidungsbefugnis. Das Team fühlt sich gestärkt und kann weitermachen.' }
        ] },
        { type: 'reflect', id: 'l4', title: 'Befähige ich mein Team wirklich?', intro: 'Empowerment lässt sich nicht verkünden. Es wird von unseren Teams erlebt. Nehmen Sie sich ein paar Minuten für diese Fragen.', questions: [
          { q: 'Wie würde die Arbeit weitergehen, wenn ich nicht erreichbar wäre?', hint: 'Wenn der Fortschritt stockt, Entscheidungen liegen bleiben oder Stakeholder auf Sie warten, ist das ein Signal.' },
          { q: 'Wie könnte mein Verhalten in exponierten Momenten Empowerment stärken oder schwächen?', hint: 'Greifen Sie ein, wenn viel auf dem Spiel steht? Beantworten Sie Fragen, die an Ihr Team gerichtet sind? Oder bleiben Sie im Hintergrund und lassen Ihr Team führen?' },
          { q: 'Wie könnte mein Team in sechs Monaten eigenständiger arbeiten, wenn ich es heute stärker befähige?', hint: 'Schlägt es Lösungen vor, statt Probleme zu eskalieren? Führt es die Gespräche mit Stakeholdern selbst? Wächst sein Urteilsvermögen?' }
        ] },
        { type: 'quote', text: 'Holen Sie Ihren Fokus zurück und stärken Sie Ihre Prioritäten; Erfolg beginnt mit Klarheit und Entschlossenheit.' }
      ]
    },
    {
      id: 'closing',
      title: 'Abschluss: Drei Go-Do-Aktionen',
      short: 'Drei Go-Do-Aktionen',
      blocks: [
        { type: 'text', html: 'Über all diese Führungsmomente hinweg sticht ein Thema hervor: Führung entscheidet sich in Echtzeit. Oft kurz. Manchmal unbequem. Immer wirkungsvoll. Ob Sie unter Druck zusammenarbeiten, Befugnis stärken oder zurückholen oder auf der richtigen Ebene loslassen: Ihre Reaktion sendet Signale. Signale über Vertrauen, Verantwortung und darüber, wie Führung in der Praxis aussieht. Großartige Führungskräfte handeln bewusst. Sie stärken Glaubwürdigkeit, übertragen echte Befugnis und bringen Menschen zusammen, gerade wenn viel auf dem Spiel steht. Halten Sie künftig in Ihren eigenen Führungsmomenten inne. Fragen Sie sich: „Welches Signal sende ich gerade?“' },
        { type: 'heading', text: 'Zusammenfassung' },
        { type: 'text', html: 'In diesem Video gehen wir von der Erkenntnis zum Handeln über. Führungsmomente entfalten nur dann Wirkung, wenn Sie das Gelernte anwenden. Die drei Go-Do-Aktionen helfen Ihnen, Reflexion in konkretes Verhalten zu übersetzen: einfache, bewusste Schritte, die Sie sofort umsetzen können.' },
        { type: 'text', html: 'Überlegen Sie beim Ansehen, wo Sie diese Aktionen in Ihrem nächsten Führungsmoment in die Praxis umsetzen können.' },
        { type: 'video', id: 'l5-godo', title: 'Drei Go-Do-Aktionen' },
        { type: 'godo', id: 'l5', title: 'Ihre drei Go-Do-Aktionen', intro: 'Notieren Sie die drei Aktionen, die Sie in Ihrem nächsten Führungsmoment umsetzen werden. Die Aktionen werden mit Ihrem Kursfortschritt gespeichert.', labels: ['Go-Do-Aktion 1', 'Go-Do-Aktion 2', 'Go-Do-Aktion 3'], placeholders: ['In meinem nächsten Meeting unter hohem Druck werde ich…', 'Wenn ich das nächste Mal delegiere, werde ich…', 'Wenn ein Teammitglied führt, werde ich…'] },
        { type: 'heading', text: 'Abschluss' },
        { type: 'text', html: 'Sie haben das Ende dieses Kurses erreicht. In diesen Führungsmomenten haben Sie erkundet, wie Ihre Entscheidungen in Echtzeit, besonders unter Druck, Vertrauen, Verantwortung und Kultur prägen. Vom Stärken oder Zurückholen von Befugnis über das Loslassen auf der richtigen Ebene bis zur Zusammenarbeit unter Druck: Jeder Moment ist eine Gelegenheit, bewusst zu führen.' },
        { type: 'text', html: 'Denken Sie auf Ihrem weiteren Weg daran: Führung wird in alltäglichen Begegnungen praktiziert, nicht nur bei großen Entscheidungen.' },
        { type: 'text', html: 'Vielen Dank für Ihr Engagement und Ihren Einsatz. Wenden Sie das Gelernte nun in Ihrem nächsten Führungsmoment an.' }
      ]
    }
  ]
};
