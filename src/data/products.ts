interface Product {
  model: string;
  description: string;
  applications: string[];
  features?: string[];
  properties: {
    carrier: string;
    pigmentContent?: string;
    compatibility?: string[];
    density?: string;
    mfi?: string;
    moistureContent?: string;
  };
  additionRate: string;
  packaging: string;
}

export const products: Product[] = [
  {
    model: 'PLASBLAK® SA3176',
    description: 'PLASBLAK®SA3176是一种含高色素碳黑的黑色母，专用于ABS、SAN和PS着色，可应用于包装材料（如盒子、盖子等）、电子产品外壳（键帽盒、家视机等）、收音机、电视机及其它家用电器，使制成品具有优良的物理性能。',
    applications: [
      'ABS/SAN/PS注塑',
      '电子产品外壳',
      '家电部件'
    ],
    features: [
      '高色素碳黑，物理性能优异',
      '专为SAN基材优化，兼容ABS/PS',
      '优异的分散性和加工性能'
    ],
    properties: {
      carrier: 'SAN',
      pigmentContent: '30%高色素碳黑',
      compatibility: ['ABS', 'SAN', 'PS'],
      density: '1200kg/m³',
      mfi: '55g/10min'
    },
    additionRate: '2%-3%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方。'
  },
  {
    model: 'PLASBLAK® XP6633A',
    description: 'PLASBLAK XP6633A是专为汽车内外饰应用设计的高性能黑色母粒。它具有极低的气味和VOC排放，特别适合用于汽车内饰部件。产品具有优异的耐候性和抗老化性能，可提供高光泽度和均匀性能，同时保持良好的物理性能。',
    applications: [
      '汽车内饰件（仪表盘、中控台等）',
      '汽车外饰件',
      '高端注塑成型',
      '精密部件'
    ],
    features: [
      '优异的耐候性和抗老化性能',
      '高流动性，适合薄壁和精密制品',
      '低气味，符合汽车内饰VOC标准',
      '优异的分散性和着色力',
      '出色的表面光泽度'
    ],
    properties: {
      carrier: 'PP',
      pigmentContent: '44%',
      density: '>550 kg/m³',
      mfi: '>5 g/10min',
      moistureContent: '0.09%'
    },
    additionRate: '1%-3%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方。'
  },
  {
    model: 'PLASBLAK® XP6691A',
    description: 'PLASBLAK XP6691A黑色母粒专门为PA6和PA66及填充PA应用设计。它可以提供优异的光泽度并保持良好的机械性能。适用于混料和注塑加工。',
    applications: [
      'PA6和PA66应用',
      '填充PA应用',
      '混料加工',
      '注塑成型'
    ],
    properties: {
      carrier: 'PA6',
      pigmentContent: '26%',
      density: '1240 kg/m³',
      mfi: '12 g/10min'
    },
    additionRate: '1%-3%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方。'
  },
  {
    model: 'PLASBLAK® XP6603A',
    description: '经济型黑色母粒，可用于PP、PE、ABS、PA、PS和PBT的注塑成型和混料应用，提供遮盖性和着色性能，具有经济性优势。',
    applications: [
      '注塑成型',
      '混料应用',
      '汽车内饰件'
    ],
    properties: {
      carrier: 'PE',
      pigmentContent: '48%碳黑',
      compatibility: ['PS', 'ABS', 'PA', 'PBT', 'PE', 'PP'],
      density: '1220kg/m³',
      mfi: '>3 g/10 min'
    },
    additionRate: '1%-3%',
    packaging: '规则颗粒形状，每袋净重25kg。建议储存期：按说明储存可保存1年。'
  },
  {
    model: 'PLASBLAK® PA3785',
    description: 'PLASBLAK®PA3785是专为尼龙-6、尼龙-6.6、尼龙设计的黑色母，具有高光泽和高深黑度，可以赋予尼龙制品优良的物理特性。',
    applications: [
      '尼龙-6应用',
      '尼龙-6.6应用',
      '尼龙制品'
    ],
    properties: {
      carrier: '尼龙-6',
      pigmentContent: '30%高色素碳黑',
      compatibility: ['PA-6', 'PA-6.6', 'PA'],
      density: '1280kg/m³',
      mfi: '23 g/10min'
    },
    additionRate: '1%-3%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方。'
  },
  {
    model: 'PLASBLAK® PE2762',
    description: 'PLASBLAK®PE2762是一种以聚乙烯为基质的，专为薄膜、模塑件和电缆料而设计的黑色母。',
    applications: [
      '薄膜应用',
      '模塑件',
      '电缆料'
    ],
    properties: {
      carrier: 'PE',
      compatibility: ['LDPE', 'LLDPE', 'HDPE', 'PP', '乙烯共聚物'],
      density: '1220kg/m³',
      mfi: '30g/10min',
      moistureContent: '<0.3%'
    },
    additionRate: '2%-5%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方。'
  },
  {
    model: 'PLASBLAK® PE2772',
    description: 'PLASBLAK®PE2772是新一代具有高着色力和高阻光度的经济型黑色母粒，它的高浓度是树已具有价格物美的特性。',
    applications: [
      '薄膜',
      '注塑和挤出'
    ],
    properties: {
      carrier: 'PE',
      compatibility: ['LDPE', 'LLDPE', 'HDPE', 'PP', '乙烯共聚物'],
      density: '1200kg/m³',
      mfi: '27g/10min',
      moistureContent: '<0.3%'
    },
    additionRate: '3%-6%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方。'
  },
  {
    model: 'PLASBLAK® PE6269',
    description: 'PLASBLAK®PE6269是一种以聚乙烯为基质的，专为管材而设计的黑色母，具有优异的分散性等特点。',
    applications: [
      '管材应用'
    ],
    properties: {
      carrier: 'PE',
      pigmentContent: '50%碳黑',
      compatibility: ['LDPE', 'LLDPE', 'HDPE', 'PP', '乙烯共聚物'],
      density: '1220 kg/m3',
      mfi: '30 g/10 min'
    },
    additionRate: '2%-5%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方，建议储存时间不超过一年。'
  },
  {
    model: 'PLASBLAK® UN2005',
    description: 'PLASBLAK®UN2005是新一代通用型黑色母，特别为染色PS、SAN、ABS、PE和PP树脂提供优良性能。该产品的黑度和着色力与卡博特通用级黑色母UN2014相似，该产品特别被推荐用于生产混和料。',
    applications: [
      'PS着色',
      'SAN着色',
      'ABS着色',
      'PE着色',
      'PP着色'
    ],
    features: [
      '高黑亮度',
      '高着色力，特别适合应用于回料',
      '保持产品原来的物理性能'
    ],
    properties: {
      carrier: '改性PE',
      compatibility: ['PS', 'ABS', 'SAN', 'PE', 'PP'],
      density: '1220kg/m³',
      mfi: '7g/10min',
      moistureContent: '<0.3%'
    },
    additionRate: '1%-2%',
    packaging: '规则颗粒状，每袋净重25KG。请存放于干燥的地方。'
  }
];

export type { Product }; 