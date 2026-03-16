export interface TarotCard {
  id: string;
  name: string;
  nameEn: string;
  arcana: 'Major' | 'Minor';
  suit?: 'Cups' | 'Pentacles' | 'Swords' | 'Wands';
  value: string;
  meaning: string;
  image: string;
}

export interface ReadingResult {
  cards: TarotCard[];
  interpretation: string;
  loading: boolean;
}
