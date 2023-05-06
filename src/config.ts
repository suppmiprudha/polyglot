// https://learn.microsoft.com/zh-cn/azure/cognitive-services/speech-service/language-support?tabs=stt
export const supportLanguageMap = {
  'ar-SA1': '阿拉伯语(沙特阿拉伯)',
  'zh-CN': '中文（普通话，简体）',
  'en-AU': '英语（澳大利亚）',
  'en-CA1': '英语（加拿大）',
  'en-IN1': '英语（印度）',
  'en-GB': '英语（英国）',
  'en-US': '英语（美国）',
  'fr-CA1': '法语（加拿大）',
  'fr-FR': '法语（法国）',
  'de-DE1': '德语（德国）',
  'ja-JP': '日语（日本）',
  'ms-MY1': '马来语（马来西亚）',
  'nb-NO1': '书面挪威语（挪威）',
  'es-MX1': '西班牙语(墨西哥)',
  'es-ES': '西班牙语(西班牙)',
  'vi-VN1': '越南语(越南)',
  'af': '南非荷兰语',
  'sq': '阿尔巴尼亚语',
  'am': '阿姆哈拉语',
  'ar': '阿拉伯语',
  'hy': '亚美尼亚语',
  'as': '阿萨姆语',
  'az': '阿塞拜疆语',
  'bn': 'Bangla',
  'bs': '波斯尼亚语(拉丁语系)',
  'bg': '保加利亚语',
  'yue': '粤语(繁体)',
  'ca': '加泰罗尼亚语',
  'lzh': '中文（文学）',
  'zh-Hans': '简体中文',
  'zh-Hant': '中文(繁体)',
  'hr': '克罗地亚语',
  'cs': '捷克语',
  'da': '丹麦语',
  'prs': '达里语',
  'nl': '荷兰语',
  'en': '英语',
  'et': '爱沙尼亚语',
  'fj': '斐济语',
  'fil': '菲律宾语',
  'fi': '芬兰语',
  'fr': '法语',
  'fr-ca': '法语（加拿大）',
  'de': '德语',
  'el': '希腊语',
  'gu': '古吉拉特语',
  'ht': '海地克里奥尔语',
  'he': '希伯来语',
  'hi': 'Hindi',
  'mww': '白苗文',
  'hu': '匈牙利语',
  'is': '冰岛语',
  'id': '印度尼西亚语',
  'iu': '因纽特语',
  'ga': '爱尔兰语',
  'it': '意大利语',
  'ja': '日语',
  'kn': '卡纳达语',
  'kk': '哈萨克语',
  'km': '高棉语',
  'tlh-Latn': '克林贡语',
  'tlh-Piqd': '克林贡语(plqaD)',
  'ko': '韩语',
  'ku': '库尔德语(中部)',
  'kmr': '库尔德语(北部)',
  'lo': '老挝语',
  'lv': '拉脱维亚语',
  'lt': '立陶宛语',
  'mg': '马达加斯加语',
  'ms': '马来语',
  'ml': '马拉雅拉姆语',
  'mt': '马耳他语',
  'mi': '毛利语',
  'mr': '马拉地语',
  'my': '缅甸',
  'ne': '尼泊尔语',
  'nb': '挪威语',
  'or': '奥里亚语',
  'ps': '普什图语',
  'fa': '波斯语',
  'pl': '波兰语',
  'pt': '葡萄牙语（巴西）',
  'pt-pt': '葡萄牙语(葡萄牙)',
  'pa': '旁遮普语',
  'otq': '克雷塔罗奥托米语',
  'ro': '罗马尼亚语',
  'ru': '俄语',
  'sm': '萨摩亚语',
  'sr-Cyrl': '塞尔维亚语（西里尔）',
  'sr-Latn': '塞尔维亚语（拉丁）',
  'sk': '斯洛伐克语',
  'sl': '斯洛文尼亚语',
  'es': '西班牙语',
  'sw': '斯瓦希里语',
  'sv': '瑞典语',
  'ty': '塔希提语',
  'ta': '泰米尔语',
  'te': '泰卢固语',
  'th': '泰语',
  'ti': '提格里尼亚语',
  'to': '汤加语',
  'tr': '土耳其语',
  'uk': '乌克兰语',
  'ur': '乌尔都语',
  'vi': '越南语',
  'cy': '威尔士语',
  'yua': '尤卡坦玛雅语',
  'bn-IN': '孟加拉语',
  'bg-BG': '保加利亚语',
  'ca-ES': '加泰罗尼亚语',
  'hr-HR': '克罗地亚语',
  'cs-CZ': '捷克语',
  'da-DK': '丹麦语',
  'nl-NL': '荷兰语',
  'et-EE': '爱沙尼亚语',
  'fi-FI': '芬兰语',
  'fr-CAfr-FR': '法语',
  'de-DE': '德语（德国）',
  'el-GR': '希腊语',
  'gu-IN': '古吉拉特语',
  'he-IL': '希伯来语',
  'hi-IN': 'Hindi',
  'hu-HU': '匈牙利语',
  'id-ID': '印度尼西亚语',
  'ga-IE': '爱尔兰语',
  'it-IT': '意大利语',
  'kn-IN': '卡纳达语',
  'ml-IN': '马拉雅拉姆语',
  'ko-KR': '韩语',
  'lv-LV': '拉脱维亚语',
  'lt-LT': '立陶宛语',
  'mt-MT': '马耳他语',
  'mr-IN': '马拉地语',
  'nb-NO': '挪威语',
  'pl-PL': '波兰语',
  'pt-BRpt-PT': '葡萄牙语',
  'ro-RO': '罗马尼亚语',
  'ru-RU': '俄语',
  'sk-SK': '斯洛伐克语',
  'sl-SI': '斯洛文尼亚语',
  'sv-SE': '瑞典语',
  'ta-IN': '泰米尔语',
  'te-IN': '泰卢固语',
  'th-TH': '泰语',
  'tr-TR': '土耳其语',
  'uk-UA': '乌克兰语',
  'vi-VN': '越南语',
  'en-CA': '英语（加拿大）',
  'en-IN': '英语（印度）',
  'fr-CA': '法语（加拿大）',
  'pt-BR': '葡萄牙语（巴西）',
  'es-MX': '西班牙语(墨西哥)',
  'de-AT': '德语（奥地利）',
  'de-CH': '德语（瑞士）',
  'en-GH': '英语（加纳）',
  'en-HK': '英语（香港特别行政区）',
  'en-IE': '英语（爱尔兰）',
  'en-KE': '英语（肯尼亚）',
  'en-NG': '英语（尼日利亚）',
  'en-NZ': '英语（新西兰）',
  'en-PH': '英语（菲律宾）',
  'en-SG': '英语（新加坡）',
  'en-TZ': '英语（坦桑尼亚）',
  'en-ZA': '英语（南非）',
  'fr-BE': '法语（比利时）',
  'fr-CH': '法语（瑞士）',
  'es-AR': '西班牙语（阿根廷）',
  'es-BO': '西班牙语（玻利维亚）',
  'es-CL': '西班牙语（智利）',
  'es-CO': '西班牙语（哥伦比亚）',
  'es-CR': '西班牙语（哥斯达黎加）',
  'es-CU': '西班牙语（古巴）',
  'es-DO': '西班牙语（多米尼加共和国）',
  'es-EC': '西班牙语（厄瓜多尔）',
  'es-GQ': '西班牙语（赤道几内亚）',
  'es-GT': '西班牙语（危地马拉）',
  'es-HN': '西班牙语（洪都拉斯）',
  'es-NI': '西班牙（尼加拉瓜）',
  'es-PA': '西班牙语（巴拿马）',
  'es-PE': '西班牙语（秘鲁）',
  'es-PR': '西班牙语（波多黎各）',
  'es-PY': '西班牙语（巴拉圭）',
  'es-SV': '西班牙语（萨尔瓦多）',
  'es-US': '西班牙语（美国）',
  'es-UY': '西班牙语（乌拉圭）',
  'es-VE': '西班牙语（委内瑞拉）',
  'zh-HK': '中文(粤语，繁体)',
  'zh-TW': '中文(台湾普通话)',
} as Record<string, string>

export const azureRegions = [
  'australiaeast',
  'australiasoutheast',
  'brazilsouth',
  'canadacentral',
  'canadaeast',
  'centralindia',
  'centralus',
  'eastasia',
  'eastus',
  'eastus2',
  'francecentral',
  'francesouth',
  'germanywestcentral',
  'japaneast',
  'japanwest',
  'koreacentral',
  'koreasouth',
  'northcentralus',
  'northeurope',
  'southafricanorth',
  'southafricawest',
  'southcentralus',
  'southindia',
  'southeastasia',
  'uksouth',
  'ukwest',
  'westcentralus',
  'westeurope',
  'westindia',
  'westus',
  'westus2',
]

export const voiceStyleMap = {
  'advertisement_upbeat': '产品推广',
  'affectionate': '亲切',
  'angry': '生气',
  'assistant': '数字助理',
  'calm': '冷静',
  'chat': '轻松',
  'cheerful': '愉悦',
  'customerservice': '热情',
  'depressed': '沮丧',
  'disgruntled': '抱怨',
  'documentary-narration': '记录片',
  'embarrassed': '犹豫',
  'empathetic': '关心',
  'envious': '钦佩',
  'excited': '乐观',
  'fearful': '不安',
  'friendly': '友好',
  'gentle': '温和',
  'hopeful': '温暖',
  'lyrical': '感伤',
  'narration-professional': '客观',
  'narration-relaxed': '舒缓',
  'newscast': '新闻播报',
  'newscast-casual': '随意新闻',
  'newscast-formal': '权威新闻',
  'poetry-reading': '诗歌',
  'sad': '悲伤',
  'serious': '严肃',
  'shouting': '大喊',
  'sports_commentary': '轻松体育赛事',
  'sports_commentary_excited': '紧张体育赛事',
  'whispering': '柔和',
  'terrified': '害怕',
  'unfriendly': '无情',
} as Record<string, string>

export const openaiModels = [
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-0301',
  'gpt-4',
  'gpt-4-0314',
  'gpt-4-32k',
  'gpt-4-32k-0314',
]
