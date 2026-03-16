import { TarotCard } from './types';

// Using Wikimedia Commons thumbnails for fast loading and high reliability
const WIKI_BASE = 'https://upload.wikimedia.org/wikipedia/commons/thumb';

export const TAROT_DECK: TarotCard[] = [
  { id: 'm00', name: '愚者', nameEn: 'The Fool', arcana: 'Major', value: '0', meaning: '開始、自由、純真', image: `${WIKI_BASE}/9/90/RWS_Tarot_00_Fool.jpg/200px-RWS_Tarot_00_Fool.jpg` },
  { id: 'm01', name: '魔術師', nameEn: 'The Magician', arcana: 'Major', value: '1', meaning: '創造力、行動、潛力', image: `${WIKI_BASE}/d/de/RWS_Tarot_01_Magician.jpg/200px-RWS_Tarot_01_Magician.jpg` },
  { id: 'm02', name: '女教皇', nameEn: 'The High Priestess', arcana: 'Major', value: '2', meaning: '直覺、神秘、智慧', image: `${WIKI_BASE}/8/88/RWS_Tarot_02_High_Priestess.jpg/200px-RWS_Tarot_02_High_Priestess.jpg` },
  { id: 'm03', name: '女皇', nameEn: 'The Empress', arcana: 'Major', value: '3', meaning: '豐饒、母性、自然', image: `${WIKI_BASE}/d/d2/RWS_Tarot_03_Empress.jpg/200px-RWS_Tarot_03_Empress.jpg` },
  { id: 'm04', name: '皇帝', nameEn: 'The Emperor', arcana: 'Major', value: '4', meaning: '權威、結構、穩定', image: `${WIKI_BASE}/c/c3/RWS_Tarot_04_Emperor.jpg/200px-RWS_Tarot_04_Emperor.jpg` },
  { id: 'm05', name: '教皇', nameEn: 'The Hierophant', arcana: 'Major', value: '5', meaning: '傳統、信仰、體制', image: `${WIKI_BASE}/8/8d/RWS_Tarot_05_Hierophant.jpg/200px-RWS_Tarot_05_Hierophant.jpg` },
  { id: 'm06', name: '戀人', nameEn: 'The Lovers', arcana: 'Major', value: '6', meaning: '愛、和諧、選擇', image: `${WIKI_BASE}/3/3a/RWS_Tarot_06_Lovers.jpg/200px-RWS_Tarot_06_Lovers.jpg` },
  { id: 'm07', name: '戰車', nameEn: 'The Chariot', arcana: 'Major', value: '7', meaning: '意志、勝利、前進', image: `${WIKI_BASE}/9/9b/RWS_Tarot_07_Chariot.jpg/200px-RWS_Tarot_07_Chariot.jpg` },
  { id: 'm08', name: '力量', nameEn: 'Strength', arcana: 'Major', value: '8', meaning: '勇氣、耐性、內在力量', image: `${WIKI_BASE}/f/f5/RWS_Tarot_08_Strength.jpg/200px-RWS_Tarot_08_Strength.jpg` },
  { id: 'm09', name: '隱者', nameEn: 'The Hermit', arcana: 'Major', value: '9', meaning: '內省、孤獨、引導', image: `${WIKI_BASE}/4/4d/RWS_Tarot_09_Hermit.jpg/200px-RWS_Tarot_09_Hermit.jpg` },
  { id: 'm10', name: '命運之輪', nameEn: 'Wheel of Fortune', arcana: 'Major', value: '10', meaning: '轉機、命運、循環', image: `${WIKI_BASE}/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/200px-RWS_Tarot_10_Wheel_of_Fortune.jpg` },
  { id: 'm11', name: '正義', nameEn: 'Justice', arcana: 'Major', value: '11', meaning: '公平、真理、責任', image: `${WIKI_BASE}/e/e0/RWS_Tarot_11_Justice.jpg/200px-RWS_Tarot_11_Justice.jpg` },
  { id: 'm12', name: '倒吊人', nameEn: 'The Hanged Man', arcana: 'Major', value: '12', meaning: '犧牲、等待、觀點轉變', image: `${WIKI_BASE}/2/2b/RWS_Tarot_12_Hanged_Man.jpg/200px-RWS_Tarot_12_Hanged_Man.jpg` },
  { id: 'm13', name: '死亡', nameEn: 'Death', arcana: 'Major', value: '13', meaning: '結束、轉變、新生', image: `${WIKI_BASE}/d/d7/RWS_Tarot_13_Death.jpg/200px-RWS_Tarot_13_Death.jpg` },
  { id: 'm14', name: '節制', nameEn: 'Temperance', arcana: 'Major', value: '14', meaning: '平衡、融合、目的', image: `${WIKI_BASE}/f/f8/RWS_Tarot_14_Temperance.jpg/200px-RWS_Tarot_14_Temperance.jpg` },
  { id: 'm15', name: '惡魔', nameEn: 'The Devil', arcana: 'Major', value: '15', meaning: '束縛、慾望、物質主義', image: `${WIKI_BASE}/5/55/RWS_Tarot_15_Devil.jpg/200px-RWS_Tarot_15_Devil.jpg` },
  { id: 'm16', name: '高塔', nameEn: 'The Tower', arcana: 'Major', value: '16', meaning: '劇變、覺醒、釋放', image: `${WIKI_BASE}/5/53/RWS_Tarot_16_Tower.jpg/200px-RWS_Tarot_16_Tower.jpg` },
  { id: 'm17', name: '星星', nameEn: 'The Star', arcana: 'Major', value: '17', meaning: '希望、靈感、更新', image: `${WIKI_BASE}/d/db/RWS_Tarot_17_Star.jpg/200px-RWS_Tarot_17_Star.jpg` },
  { id: 'm18', name: '月亮', nameEn: 'The Moon', arcana: 'Major', value: '18', meaning: '不安、幻覺、潛意識', image: `${WIKI_BASE}/7/7f/RWS_Tarot_18_Moon.jpg/200px-RWS_Tarot_18_Moon.jpg` },
  { id: 'm19', name: '太陽', nameEn: 'The Sun', arcana: 'Major', value: '19', meaning: '快樂、成功、活力', image: `${WIKI_BASE}/1/17/RWS_Tarot_19_Sun.jpg/200px-RWS_Tarot_19_Sun.jpg` },
  { id: 'm20', name: '審判', nameEn: 'Judgement', arcana: 'Major', value: '20', meaning: '覺醒、重生、呼喚', image: `${WIKI_BASE}/d/dd/RWS_Tarot_20_Judgement.jpg/200px-RWS_Tarot_20_Judgement.jpg` },
  { id: 'm21', name: '世界', nameEn: 'The World', arcana: 'Major', value: '21', meaning: '完成、成就、圓滿', image: `${WIKI_BASE}/f/ff/RWS_Tarot_21_World.jpg/200px-RWS_Tarot_21_World.jpg` },
];
