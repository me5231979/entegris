/* Kandungan kursus dalam Bahasa Melayu (Malaysia). Diterjemah daripada en.js.
   Struktur: ui (rentetan antara muka), home, lessons[]. Jenis blok dan id kekal sama dengan en.js. */
window.ENTG_CONTENT = window.ENTG_CONTENT || {};
window.ENTG_CONTENT.ms = {
  ui: {
    skip: 'Langkau ke kandungan', language: 'Bahasa', menu: 'Menu kursus',
    courseTitle: 'Profil Pemimpin Hebat', courseSubtitle: 'Kepimpinan Harian di Entegris',
    heroEyebrow: 'Pembangunan kepimpinan', startCourse: 'Mulakan kursus', resumeCourse: 'Sambung kursus',
    outline: 'Rangka kursus', lessons: 'Pelajaran', lessonOf: 'Pelajaran {a} daripada {b}',
    percentComplete: '{p}% selesai', complete: 'Selesai', inProgress: 'Sedang berlangsung', notStarted: 'Belum dimulakan',
    continueBtn: 'Teruskan', completeCourse: 'Selesaikan kursus', courseCompleted: 'Kursus selesai',
    prev: 'Sebelumnya', next: 'Seterusnya', home: 'Laman utama kursus',
    videoPlaceholder: 'Pemegang tempat video', captions: '16:9 · sari kata diperlukan',
    download: 'Muat turun', flip: 'Balikkan kad', select: 'Pilih {x}', selected: 'Dipilih',
    yourChoice: 'Pilihan anda', chooseResponse: 'Pilih respons anda', pickClosest: 'Pilih opsyen yang paling hampir dengan tindakan yang akan anda ambil.',
    reflect: 'Renungkan', notesLocal: 'Nota anda disimpan bersama kemajuan kursus anda.',
    footerCopy: '© 1994-2026 Entegris. Hak cipta terpelihara.', footerInternal: 'Bahan latihan dalaman',
    thatsAWrap: 'Anda telah menyelesaikan setiap pelajaran.', backToOutline: 'Kembali ke rangka kursus',
    objectives: 'Objektif', expand: 'Kembangkan', printNotes: 'Cetak nota saya', printTitle: 'Nota dan tindakan segera saya', noAnswer: '(belum ada jawapan)', myChoice: 'Pilihan saya', translationNote: 'Draf terjemahan. Sila minta penutur asli menyemak sebelum diterbitkan.'
  },
  home: {
    title: 'Profil Pemimpin Hebat',
    subtitle: 'Kepimpinan Harian di Entegris',
    tagline: 'Bawa kepimpinan anda. Setiap hari.',
    intro: 'Bagaimanakah pemimpin hebat mengharungi pertumbuhan, perubahan dan ketidakpastian? Dalam kursus ini, anda akan mempelajari cara menerapkan Profil Pemimpin Hebat (GLP) yang diperbaharui dalam kepimpinan harian anda di Entegris. Melalui refleksi praktikal, senario dunia sebenar dan strategi yang boleh dilaksanakan, anda akan mengenal pasti kekuatan kepimpinan anda, membangunkan pendekatan baharu untuk memperkasa pasukan anda, serta belajar cara menyampaikan dan menjadi teladan GLP demi impak yang berkekalan. Di akhir kursus, anda akan bersedia untuk memimpin diri sendiri dan orang lain dengan yakin, sekali gus menjadikan GLP sebagai panduan yang sentiasa hidup dalam perjalanan kepimpinan anda.',
    facts: [
      { k: 'Pelajaran', v: '5' },
      { k: 'Format', v: 'Video · senario · refleksi' },
      { k: 'Masa', v: '≈ 60 minit' },
      { k: 'Bawa', v: 'Buku Panduan GLP' }
    ]
  },
  lessons: [
    {
      id: 'intro',
      title: 'Pengenalan kepada Profil Pemimpin Hebat (GLP) dan Kerelevanannya Hari Ini',
      short: 'Pengenalan kepada GLP',
      blocks: [
        { type: 'heading', text: 'Mengapa Profil Pemimpin Hebat Penting Sekarang' },
        { type: 'text', html: 'Selamat datang ke pengenalan Profil Pemimpin Hebat (GLP). Sebagai pemimpin di Entegris, anda memainkan peranan penting dalam membentuk budaya kita dan memacu kejayaan kita. Pelajaran ini akan membantu anda memahami evolusi GLP, ciri-ciri terasnya, dan mengapa ia lebih relevan daripada sebelumnya ketika kita mengharungi pertumbuhan dan perubahan bersama-sama.' },
        { type: 'video', id: 'l1-glp', title: 'Profil Pemimpin Hebat Entegris' },
        { type: 'text', html: 'Objektif yang jelas membantu anda memfokuskan pembelajaran dan memahami bagaimana setiap bahagian pelajaran ini menyokong perkembangan anda sebagai pemimpin. Dengan mengetahui perkara yang akan anda capai, anda dapat mengaitkan konsep GLP dengan pengalaman kepimpinan harian anda secara lebih baik.' },
        { type: 'objectives', items: [
          'Ketahui mengapa Profil Pemimpin Hebat menjadi panduan kepimpinan di Entegris.',
          'Kenal pasti ciri-ciri dan tingkah laku teras yang mentakrifkan kepimpinan hebat dalam organisasi kita.',
          'Lihat bagaimana GLP menyokong konsistensi dan kejelasan semasa tempoh pertumbuhan dan perubahan organisasi.',
          'Hargai bahawa kepimpinan di Entegris adalah untuk semua orang, bukan hanya mereka yang mengurus kakitangan.'
        ] },
        { type: 'heading', text: 'Meneroka Profil Pemimpin Hebat' },
        { type: 'text', html: 'Memahami asas GLP adalah penting bagi setiap pemimpin Entegris. Kembangkan setiap bahagian di bawah untuk mengetahui tujuannya, evolusinya, ciri-ciri terasnya, dan bagaimana ia terpakai kepada semua pemimpin.' },
        { type: 'accordion', items: [
          { title: 'Tujuan GLP', html: '<p>Profil Pemimpin Hebat diwujudkan untuk mentakrifkan gambaran kepimpinan hebat di Entegris dan menetapkan jangkaan yang jelas bagi semua pemimpin. Ia berfungsi sebagai panduan praktikal yang membantu pemimpin menyelaraskan tindakan mereka dengan strategi syarikat sambil memberi ruang kepada gaya kepimpinan yang autentik dan tersendiri.</p><p>Dengan memberikan kejelasan ini, GLP memperkasa pemimpin untuk membuat keputusan yang konsisten dan memupuk budaya positif berprestasi tinggi di seluruh organisasi.</p>' },
          { title: 'Evolusi GLP', html: '<p>Sejak diperkenalkan pada 2018, GLP telah berkembang seiring dengan Entegris. Seiring dengan pertumbuhan organisasi kita dan cabaran baharu yang dihadapi, kita menyedari keperluan untuk menyemak semula dan menyegarkan profil ini agar mencerminkan realiti semasa kita.</p><p>GLP yang telah dikemas kini merangkumi jangkaan dan tingkah laku baharu, sekali gus memastikan ia kekal relevan dan berkesan sebagai panduan kepimpinan semasa tempoh perubahan dan pertumbuhan.</p>' },
          { title: 'Ciri-ciri GLP', html: '<p>GLP menggariskan tujuh ciri teras yang mentakrifkan kepimpinan hebat di Entegris:</p><ul><li>Membina Bakat untuk Masa Depan</li><li>Memacu Perkongsian Merentas Organisasi Global Kita</li><li>Memupuk Inovasi</li><li>Memacu Akauntabiliti</li><li>Memimpin dengan Kecekalan dan Kerendahan Hati</li><li>Memacu Keutamaan Pelanggan</li><li>Membuat Keputusan Berasaskan Data dengan Pantas</li></ul>' },
          { title: 'GLP untuk Semua Pemimpin', html: '<p>Kepimpinan di Entegris tidak terhad kepada mereka yang mengurus kakitangan sahaja. GLP terpakai kepada semua orang, tanpa mengira jawatan atau peranan. Ia berkaitan dengan cara anda menampilkan diri, bekerjasama dan mengambil tanggungjawab dalam kerja harian anda.</p><p>Dengan menghayati GLP, setiap ahli pasukan boleh menyumbang kepada budaya kepimpinan kita dan memacu impak positif di seluruh organisasi.</p>' }
        ] },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Ciri-ciri GLP dan Maksudnya' },
        { type: 'text', html: 'Menyemak definisi setiap ciri GLP akan membantu anda menghayati gambaran kepimpinan hebat di Entegris.' },
        { type: 'video', id: 'l1-characteristics', title: 'Ciri-ciri GLP' },
        { type: 'characteristics', center: 'PACE', sub: 'Budaya berpandukan nilai', items: [
          { icon: 'talent', name: 'Membina Bakat untuk Masa Depan', desc: 'Secara aktif membangunkan diri dan orang lain, menyediakan pasukan untuk cabaran dan peluang masa depan.' },
          { icon: 'globe', name: 'Memacu Perkongsian Merentas Organisasi Global Kita', desc: 'Bekerjasama secara berkesan merentas pasukan dan wilayah untuk mencapai matlamat bersama dan mengukuhkan impak global kita.' },
          { icon: 'bulb', name: 'Memupuk Inovasi', desc: 'Menggalakkan pemikiran kreatif dan idea baharu, menyokong penambahbaikan berterusan dan kebolehsuaian.' },
          { icon: 'shield', name: 'Memacu Akauntabiliti', desc: 'Menetapkan jangkaan yang jelas, menyokong pelaksanaan sehingga selesai, dan memastikan individu serta pasukan bertanggungjawab sepenuhnya terhadap komitmen mereka.' },
          { icon: 'flag', name: 'Memimpin dengan Kecekalan dan Kerendahan Hati', desc: 'Menunjukkan daya tahan dan keazaman sambil kekal terbuka kepada maklum balas dan belajar daripada orang lain.' },
          { icon: 'hand', name: 'Memacu Keutamaan Pelanggan', desc: 'Mengutamakan keperluan pelanggan dan menyampaikan nilai, membina hubungan yang kukuh dan berkekalan.' },
          { icon: 'gauge', name: 'Membuat Keputusan Berasaskan Data dengan Pantas', desc: 'Menggunakan data dan pandangan yang relevan untuk membuat pilihan yang tepat pada masanya dan berasaskan maklumat bagi memacu hasil.' }
        ] },
        { type: 'heading', text: 'Kad Imbas' },
        { type: 'text', html: 'Gunakan kad imbas ini untuk mengukuhkan pemahaman anda dan bersedia menerapkan kualiti ini dalam perjalanan kepimpinan anda sendiri. Pilih kad untuk membalikkannya.' },
        { type: 'flashcards', useCharacteristics: true },
        { type: 'quote', text: 'Setiap hari memberi peluang untuk memimpin dengan tujuan dan membawa perubahan positif. GLP membolehkan anda menjadi pemimpin yang diperlukan Entegris, tanpa mengira kedudukan atau jawatan anda.' }
      ]
    },
    {
      id: 'collaboration',
      title: 'Detik Kepimpinan: Kerjasama di Bawah Tekanan',
      short: 'Kerjasama di Bawah Tekanan',
      blocks: [
        { type: 'text', html: 'Tekanan mendedahkan kepimpinan. Apabila tempoh masa semakin suntuk atau ketegangan meningkat, tindak balas anda membentuk kepercayaan, penyelarasan dan hasil. Dalam detik kepimpinan ini, anda akan meneroka bagaimana pemimpin yang mantap bekerjasama di bawah tekanan, mengekalkan kejelasan, memperkukuh pemilikan bersama, dan mencegah pembentukan silo.' },
        { type: 'text', html: 'Semasa anda melalui pelajaran ini, renungkan cara anda menampilkan diri pada saat yang paling penting.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Pertumbuhan Kepimpinan Bermula dengan Kerjasama di Bawah Tekanan' },
        { type: 'text', html: 'Kerjasama benar-benar diuji apabila tekanan meningkat. Dalam situasi berisiko tinggi, pemimpin perlu mengimbangi kesegeraan dengan penyelarasan, menyatukan orang dan bukannya membiarkan silo atau budaya saling menyalahkan bertapak. Cara anda bertindak balas dalam detik-detik ini membentuk kepercayaan, prestasi dan budaya.' },
        { type: 'text', html: 'Sekarang, tonton video dan pastikan anda merujuk Buku Panduan GLP anda semasa merenungkan detik kepimpinan ini.' },
        { type: 'video', id: 'l2-moment', title: 'Detik Kepimpinan: Kerjasama di Bawah Tekanan' },
        { type: 'heading', text: 'Keputusan Kepimpinan yang Berkesan' },
        { type: 'text', html: 'Kilang Materials Solutions menghadapi gangguan rantaian bekalan yang disebabkan oleh kerjasama yang lemah dan pasukan yang bersilo. Satu mesyuarat rentas fungsi dijadualkan untuk menangani isu-isu ini, tetapi seorang peserta utama, Peter, tidak dapat hadir. Tiga pilihan dipertimbangkan: menangguhkan mesyuarat, meneruskan dengan agenda penuh, atau melaraskan agenda untuk memberi fokus kepada isu yang boleh diselesaikan. Pemimpin memilih untuk menyesuaikan mesyuarat, sekali gus mengekalkan momentum dan memupuk kerjasama. Pemimpin yang berkesan menyesuaikan diri, memacu kemajuan, dan mewujudkan pemilikan bersama terhadap penyelesaian.' },
        { type: 'scenario', id: 'l2', prompt: 'Peter, seorang peserta utama, tidak dapat menghadiri mesyuarat rentas fungsi. Apakah yang akan anda lakukan?', options: [
          { key: 'a', title: 'Tangguhkan mesyuarat', text: 'Tunggu sehingga Peter dapat hadir supaya semua pihak dapat menyuarakan pandangan.', tag: 'Momentum hilang', good: false, feedback: 'Penangguhan menghantar isyarat bahawa kemajuan bergantung pada seorang individu. Isu rantaian bekalan terus merugikan kilang sementara pasukan terhenti, dan silo yang menyebabkan masalah itu kekal tidak berubah.' },
          { key: 'b', title: 'Teruskan dengan agenda penuh', text: 'Jalankan mesyuarat seperti yang dirancang dan bincangkan perkara di bawah tanggungjawab Peter tanpa kehadirannya.', tag: 'Penyelarasan berisiko', good: false, feedback: 'Keputusan mengenai perkara di bawah tanggungjawab Peter dibuat tanpa kehadiran orang yang memilikinya. Ini mengundang kerja semula dan budaya saling menyalahkan kemudian hari, iaitu perkara yang sepatutnya dicegah oleh kerjasama di bawah tekanan.' },
          { key: 'c', title: 'Laraskan agenda', text: 'Fokus pada isu yang boleh diselesaikan oleh mereka yang hadir sekarang dan jadualkan perkara Peter bersamanya.', tag: 'Pemilikan bersama', good: true, feedback: 'Anda mengekalkan momentum, menghormati pemilikan Peter, dan memberi pasukan kemajuan sebenar sebagai asas untuk terus maju. Menyesuaikan mesyuarat mengubah tekanan menjadi kerjasama dan bukannya silo.' }
        ] },
        { type: 'quote', text: 'Kerjasama sejati paling terserlah di bawah tekanan, apabila perpaduan mengubah cabaran menjadi peluang untuk berjaya.' }
      ]
    },
    {
      id: 'letting-go',
      title: 'Detik Kepimpinan: Melepaskan pada Tahap yang Betul',
      short: 'Melepaskan pada Tahap yang Betul',
      blocks: [
        { type: 'text', html: 'Delegasi bukan sekadar memberikan tugas; ia tentang memindahkan tahap kuasa yang betul. Dalam detik kepimpinan ini, anda akan meneliti ketegangan antara kekal terlibat dan benar-benar berundur. Pemimpin yang berkesan melepaskan secara bersengaja. Mereka mewujudkan ruang untuk orang lain memimpin, membuat keputusan, dan membina kredibiliti walaupun ketika risikonya tinggi. Melepaskan pada tahap yang betul mengukuhkan kepercayaan, membangunkan keupayaan, dan memperkukuh pemilikan.' },
        { type: 'text', html: 'Semasa anda melalui pelajaran ini, fikirkan: Adakah anda sekadar mendelegasikan tugas atau memperkasa kepimpinan?' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Pertumbuhan Kepimpinan Berterusan dengan Melepaskan pada Tahap yang Betul' },
        { type: 'text', html: 'Sekarang, tonton video dan beri perhatian kepada bagaimana kuasa sama ada diperkukuh atau diambil semula pada detik itu. Semasa menonton, rujuk Buku Panduan GLP anda dan renungkan cara anda mendelegasikan tugas. Adakah anda memindahkan pemilikan sebenar, atau kekal lebih dekat daripada yang perlu?' },
        { type: 'video', id: 'l3-moment', title: 'Detik Kepimpinan: Melepaskan pada Tahap yang Betul' },
        { type: 'heading', text: 'Kepimpinan yang Memperkasa' },
        { type: 'text', html: 'Seorang pemimpin kilang mendelegasikan satu inisiatif utama kepada Jessica, seorang ahli pasukan berprestasi tinggi. Apabila pihak berkepentingan mencadangkan agar pemimpin itu menghadiri mesyuarat, pemimpin itu perlu memutuskan sama ada untuk mengambil semula kawalan atau memperkasa Jessica sepenuhnya. Memilih untuk membiarkan Jessica memimpin secara berdikari menunjukkan kepercayaan, membina kredibilitinya, dan menyokong perkembangannya sebagai pemimpin.' },
        { type: 'scenario', id: 'l3', prompt: 'Pihak berkepentingan mencadangkan anda menghadiri mesyuarat Jessica. Apakah yang akan anda lakukan?', options: [
          { key: 'a', title: 'Hadir dan pimpin', text: 'Sertai mesyuarat dan ambil alih kepimpinan supaya pihak berkepentingan berasa yakin.', tag: 'Kawalan diambil semula', good: false, feedback: 'Pihak berkepentingan berasa yakin, tetapi kuasa Jessica lenyap di hadapan semua orang. Anda telah memberitahu semua orang bahawa inisiatif itu sebenarnya milik anda.' },
          { key: 'b', title: 'Duduk memerhati, sekadar berjaga-jaga', text: 'Hadir secara senyap di belakang dan masuk campur hanya jika keadaan tidak terkawal.', tag: 'Pemilikan terhakis', good: false, feedback: 'Kehadiran anda mengubah suasana. Soalan beralih kepada anda, Jessica mula meragui dirinya sendiri, dan pihak berkepentingan belajar untuk tidak lagi memandangnya. Kekal lebih dekat daripada yang perlu tetap menjejaskan kredibilitinya.' },
          { key: 'c', title: 'Tolak dan sokong Jessica', text: 'Sahkan kepada pihak berkepentingan bahawa Jessica mempunyai kuasa penuh, dan tawarkan untuk membuat persediaan bersamanya terlebih dahulu.', tag: 'Tahap yang betul', good: true, feedback: 'Anda memindahkan kuasa sebenar dan menjadikannya jelas kepada pihak berkepentingan. Persediaan awal memberi Jessica sokongan tanpa mengambil alih mesyuarat daripadanya. Kepercayaan, kredibiliti dan keupayaan semuanya berkembang.' }
        ] },
        { type: 'quote', text: 'Kepimpinan sejati adalah tentang mengetahui bila masanya untuk melepaskan; memperkasa orang lain pada tahap yang betul memupuk kepercayaan, pertumbuhan dan kejayaan bersama.' }
      ]
    },
    {
      id: 'reinforce',
      title: 'Detik Kepimpinan: Perkukuh atau Ambil Semula?',
      short: 'Perkukuh atau Ambil Semula?',
      blocks: [
        { type: 'text', html: 'Apabila seorang ahli pasukan memimpin, tindak balas anda sama ada memperkukuh pemilikan mereka atau mengambilnya semula secara senyap. Pemimpin yang berkesan tahu perbezaannya. Dengan memperkukuh pemilikan, anda mewujudkan persekitaran yang membuatkan orang lain yakin untuk membuat keputusan dan dilihat membuatnya.' },
        { type: 'download', name: 'Entegris Great Leader Profile & Playbook 2026.pptx', meta: 'PPTX · 761.8 KB', href: 'assets/docs/Entegris-Great-Leader-Profile-Playbook-2026.pptx' },
        { type: 'heading', text: 'Perkukuh atau Ambil Semula?' },
        { type: 'text', html: 'Dalam detik kepimpinan ini, anda akan meneroka satu ketegangan yang lazim: apabila seorang ahli pasukan sedang memimpin, adakah anda masuk campur, atau kekal menyokong di belakang mereka? Detik-detik ini sering berlaku dengan pantas dan di bawah tekanan. Tindak balas anda boleh sama ada memperkukuh pemilikan dan kredibiliti atau secara tidak sengaja mengambil semula kuasa.' },
        { type: 'text', html: 'Semasa menonton video, beri perhatian kepada isyarat yang dihantar, bukan hanya melalui kata-kata, tetapi juga melalui kehadiran dan tindakan.' },
        { type: 'video', id: 'l4-moment', title: 'Detik Kepimpinan: Perkukuh atau Ambil Semula?' },
        { type: 'heading', text: 'Sokongan Pasukan yang Berkesan' },
        { type: 'text', html: 'Jessica dan pasukannya sedang tekun membuat persediaan untuk membentangkan cadangan mereka kepada pihak berkepentingan utama selepas isu-isu kritikal di kilang Materials Solutions diselesaikan. Walaupun yakin dengan penemuan mereka, pasukan itu meminta nasihat tentang cara mengemukakan kes perniagaan mereka dengan berkesan supaya ia diterima baik oleh khalayak mereka.' },
        { type: 'text', html: 'Pemimpin mempertimbangkan beberapa pendekatan: mengambil alih pembentangan untuk memastikan kejelasan, hanya memberikan mesej ringkas untuk menenangkan, atau membimbing pasukan memperhalusi penyampaian mereka sambil membiarkan mereka mengekalkan pemilikan terhadap kerja mereka. Akhirnya, pemimpin memilih untuk melibatkan pasukan dalam perbincangan bermakna, memahami perspektif mereka, dan memberikan maklum balas membina tanpa mengambil alih kawalan proses.' },
        { type: 'text', html: 'Pendekatan ini menonjolkan kepentingan kepimpinan yang memperkasa pasukan. Dengan memberikan panduan dan memupuk keyakinan, pemimpin dapat memastikan pasukan mereka kekal bertanggungjawab, bermotivasi, dan bersedia untuk berjaya dalam situasi berisiko tinggi.' },
        { type: 'scenario', id: 'l4', prompt: 'Pasukan Jessica mahukan input anda sebelum pembentangan kepada pihak berkepentingan. Apakah yang akan anda lakukan?', options: [
          { key: 'a', title: 'Ambil alih semula', text: 'Mesyuarat ini penting. Anda menyemak pembentangan, membuat pelarasan dan mengetuai sendiri sesi dengan pihak berkepentingan.', tag: 'Mengambil semula pemilikan', good: false, feedback: 'Mengambil alih menghantar mesej yang jelas kepada pasukan: apabila tiba saat yang penting, ini bukan kerja mereka. Jessica telah memimpin selama berbulan-bulan, dan pasukan kehilangan detik penting yang telah mereka usahakan. Keyakinan dan kredibiliti terjejas.' },
          { key: 'b', title: 'Hantar e-mel', text: 'Anda memberitahu pasukan bahawa anda memahami kebimbangan mereka, anda mempercayai mereka, dan mereka patut membentangkan apa yang mereka yakini betul.', tag: 'Membiarkan pasukan bersendirian', good: false, feedback: 'Mesej yang kabur tidak memberi panduan atau bimbingan kepada pasukan yang meminta sokongan. Mereka masih tidak pasti apa yang diharapkan pihak berkepentingan, dan kebimbangan mereka meningkat menjelang detik yang mendapat perhatian tinggi.' },
          { key: 'c', title: 'Bertemu dan dengar dahulu', text: 'Anda menjadualkan masa dengan pasukan. Sebelum memberi input, anda meminta mereka menerangkan pendekatan mereka dan cara mereka merangka pembentangan itu.', tag: 'Memperkukuh pemilikan', good: true, feedback: 'Anda hadir, anda membimbing, dan anda menahan diri daripada mengambil alih kawalan apabila tekanan meningkat. Jessica mengekalkan pemilikan yang jelas dan kuasa membuat keputusan yang sebenar. Pasukan berasa diperkasa untuk terus maju.' }
        ] },
        { type: 'reflect', id: 'l4', title: 'Adakah saya benar-benar memperkasa pasukan saya?', intro: 'Pemerkasaan bukan sesuatu yang kita isytiharkan. Ia sesuatu yang dialami oleh pasukan kita. Luangkan beberapa minit untuk soalan-soalan ini.', questions: [
          { q: 'Bagaimanakah kerja akan diteruskan jika saya tidak ada?', hint: 'Jika kemajuan menjadi perlahan, keputusan tergendala, atau pihak berkepentingan menunggu saya, itu satu isyarat.' },
          { q: 'Bagaimanakah tingkah laku saya dalam detik yang mendapat perhatian tinggi mungkin memperkukuh atau melemahkan pemerkasaan?', hint: 'Adakah saya masuk campur apabila risiko meningkat? Menjawab soalan yang ditujukan kepada pasukan saya? Atau kekal di belakang mereka dan membiarkan mereka memimpin?' },
          { q: 'Bagaimanakah pasukan saya boleh beroperasi dengan lebih berdikari enam bulan dari sekarang jika saya lebih memperkasa mereka hari ini?', hint: 'Adakah mereka mencadangkan penyelesaian dan bukan sekadar menyerahkan masalah kepada anda? Mengambil tanggungjawab penuh terhadap perbualan dengan pihak berkepentingan? Berkembang dalam membuat pertimbangan?' }
        ] },
        { type: 'quote', text: 'Pemerkasaan bukan sesuatu yang anda isytiharkan. Ia sesuatu yang dialami pasukan anda pada detik-detik yang penting.' }
      ]
    },
    {
      id: 'closing',
      title: 'Penutup: Tiga Tindakan Segera',
      short: 'Tiga Tindakan Segera',
      blocks: [
        { type: 'text', html: 'Merentas detik-detik kepimpinan ini, satu tema menonjol: kepimpinan ditentukan dalam masa nyata. Sering kali singkat. Kadangkala tidak selesa. Sentiasa memberi kesan. Sama ada bekerjasama di bawah tekanan, memperkukuh atau mengambil semula kuasa, atau melepaskan pada tahap yang betul, tindak balas anda menghantar isyarat: isyarat tentang kepercayaan, pemilikan, malah tentang rupa kepimpinan dalam tindakan. Pemimpin hebat bertindak secara bersengaja. Mereka memperkukuh kredibiliti, memindahkan kuasa sebenar, dan menyatukan orang, terutamanya apabila risikonya tinggi. Ketika anda melangkah ke hadapan, berhenti sejenak dalam detik kepimpinan anda sendiri. Tanya diri anda: “Apakah isyarat yang saya hantar sekarang?”' },
        { type: 'heading', text: 'Mari Kita Imbas Semula' },
        { type: 'text', html: 'Dalam video ini, kita akan beralih daripada pemahaman kepada tindakan. Detik kepimpinan hanya memberi impak apabila anda menerapkan apa yang telah anda pelajari. Tiga Tindakan Segera direka untuk membantu anda menterjemahkan refleksi kepada tingkah laku sebenar, iaitu langkah mudah dan bersengaja yang boleh anda ambil dengan segera.' },
        { type: 'text', html: 'Semasa menonton, fikirkan di mana anda boleh mempraktikkan tindakan ini dalam detik kepimpinan anda yang seterusnya.' },
        { type: 'video', id: 'l5-godo', title: 'Tiga Tindakan Segera' },
        { type: 'godo', id: 'l5', title: 'Tiga tindakan segera anda', intro: 'Tulis tiga tindakan yang akan anda ambil dalam detik kepimpinan anda yang seterusnya. Ia disimpan bersama kemajuan kursus anda.', labels: ['Tindakan segera 1', 'Tindakan segera 2', 'Tindakan segera 3'], placeholders: ['Dalam mesyuarat bertekanan tinggi saya yang seterusnya, saya akan…', 'Kali seterusnya saya mendelegasikan tugas, saya akan…', 'Apabila seorang ahli pasukan sedang memimpin, saya akan…'] },
        { type: 'heading', text: 'Penutup' },
        { type: 'text', html: 'Anda telah sampai ke penghujung kursus ini. Sepanjang detik-detik kepimpinan ini, anda telah meneroka bagaimana pilihan masa nyata anda, terutamanya di bawah tekanan, membentuk kepercayaan, pemilikan dan budaya. Daripada memperkukuh atau mengambil semula kuasa kepada melepaskan pada tahap yang betul dan bekerjasama di bawah tekanan, setiap detik adalah peluang untuk memimpin dengan penuh kesedaran.' },
        { type: 'text', html: 'Ketika anda melangkah ke hadapan, ingatlah: kepimpinan diamalkan dalam interaksi harian, bukan hanya dalam keputusan besar.' },
        { type: 'text', html: 'Terima kasih atas penglibatan dan komitmen anda. Sekarang, ambil apa yang telah anda pelajari dan terapkannya dalam detik kepimpinan anda yang seterusnya.' }
      ]
    }
  ]
};
