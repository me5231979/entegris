/* Video file names as exported, so the course finds them without renaming.
   Folder: assets/video/<language code>/. File: <prefix><title>.mp4, where the prefix is the
   language tag used by the export ("FR - ", "ZH-CN - ", ...) and English has no prefix.
   English exports may carry a copy suffix like " (2)"; when several copies exist the course takes the
   highest number first (the most recent download), then the plain name.
   The short ids (l1-glp.mp4 etc.) are also accepted in every folder. Edit this file if names change. */
window.ENTG_VIDEO_NAMES = {
  prefixes: { en: '', 'zh-Hans': 'ZH-CN - ', 'zh-Hant': 'ZH-TW - ', fr: 'FR - ', de: 'DE - ', he: 'IW - ', ms: 'MS - ', ja: 'JA - ', ko: 'KO - ' },
  titles: {
    'course-intro': ['Course Introduction'],
    'l1-glp': ['Unlocking Leadership Potential_ The Entegris Great Leader Profile', 'Unlocking Leadership Potential_ The Great Leader Profile', 'Unlocking Leadership Potential_ Great Leader Profile', 'Unlocking Leadership Potential - The Great Leader Profile', 'Entegris Great Leader Profile'],
    'l1-characteristics': ['Six GLP Characteristics', 'GLP Characteristics', 'Seven GLP Characteristics'],
    'l2-moment': ['Leadership Moment_ Collaboration Under Pressure', 'Leadership Moment - Collaboration Under Pressure'],
    'l3-moment': ['Leadership Moment_ Letting Go at the Right Level', 'Leadership Moment - Letting Go at the Right Level'],
    'l4-moment': ['Leadership Moment_ Reinforce or Reclaim_', 'Leadership Moment_ Reinforce or Reclaim', 'Leadership Moment - Reinforce or Reclaim'],
    'l5-godo': ['Three Go-Do Actions', 'Three Go Do Actions']
  },
  copySuffixes: [' (6)', ' (5)', ' (4)', ' (3)', ' (2)', ' (1)', '']
};
