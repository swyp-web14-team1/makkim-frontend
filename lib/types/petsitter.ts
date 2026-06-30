export type AnimalCategory = '전체' | '강아지' | '고양이' | '새' | '양서류' | '파충류' | '기타';

export interface Petsitter {
  id: string;
  name: string;
  profileImage: string;
  rating: number;
  reviewCount: number;
  description: string;
  locations: string[];
  tags: string[];
  animalTypes: Exclude<AnimalCategory, '전체'>[];
}
