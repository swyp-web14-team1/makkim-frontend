import { AnimalCategory, Petsitter } from '@/lib/types/petsitter';

const MOCK_PETSITTERS: Petsitter[] = [
  {
    id: '1',
    name: '김민지 시터',
    profileImage: 'https://picsum.photos/seed/petsitter1/167/167',
    rating: 4.8,
    reviewCount: 23,
    description: '안녕하세요! 반려견 지도사 자격증을 보유한 3년 차 펫시터입니다. 산책, 배변 패드 정리, 약 복용 등 꼼꼼하고 안전하게 돌보겠습니다. 실시간 사진 공유 가능합니다!',
    locations: ['서울시 마포구', '영등포구'],
    tags: ['자격증보유', '강아지', '산책가능'],
    animalTypes: ['강아지'],
  },
  {
    id: '2',
    name: '이수진 시터',
    profileImage: 'https://picsum.photos/seed/petsitter2/167/167',
    rating: 4.9,
    reviewCount: 41,
    description: '고양이 전문 펫시터입니다. 5년 경력으로 예민한 고양이도 편안하게 돌볼 수 있어요. 하루 3회 사진/영상 공유해드립니다. 이상 증상 발견 시 즉시 연락드립니다.',
    locations: ['서울시 강남구', '서초구'],
    tags: ['고양이전문', '고양이', '장기돌봄'],
    animalTypes: ['고양이'],
  },
  {
    id: '3',
    name: '박서연 시터',
    profileImage: 'https://picsum.photos/seed/petsitter3/167/167',
    rating: 4.7,
    reviewCount: 15,
    description: '소동물 전문입니다. 햄스터, 토끼, 앵무새 등 다양한 소동물을 돌본 경험이 있습니다. 케이지 청소부터 먹이 급여까지 꼼꼼하게 관리해드립니다.',
    locations: ['서울시 용산구', '중구'],
    tags: ['소동물전문', '새', '이색동물'],
    animalTypes: ['새', '기타'],
  },
  {
    id: '4',
    name: '최지은 시터',
    profileImage: 'https://picsum.photos/seed/petsitter4/167/167',
    rating: 4.6,
    reviewCount: 8,
    description: '대형견 전문 펫시터입니다. 골든리트리버, 래브라도 등 대형견 훈련 및 돌봄 경험이 풍부합니다. 넓은 마당에서 충분한 운동을 제공합니다.',
    locations: ['서울시 송파구', '강동구'],
    tags: ['대형견전문', '강아지', '훈련가능'],
    animalTypes: ['강아지'],
  },
  {
    id: '5',
    name: '정하은 시터',
    profileImage: 'https://picsum.photos/seed/petsitter5/167/167',
    rating: 5.0,
    reviewCount: 62,
    description: '수의대 출신 펫시터로 전문적인 케어를 제공합니다. 노령견, 지병이 있는 반려동물도 안심하고 맡겨주세요. 투약 관리 가능합니다.',
    locations: ['서울시 마포구', '은평구'],
    tags: ['수의대출신', '강아지', '고양이'],
    animalTypes: ['강아지', '고양이'],
  },
  {
    id: '6',
    name: '윤채원 시터',
    profileImage: 'https://picsum.photos/seed/petsitter6/167/167',
    rating: 4.5,
    reviewCount: 19,
    description: '파충류 전문 펫시터입니다. 도마뱀, 뱀, 거북이 등 파충류 사육 10년 경력입니다. 적절한 온도/습도 관리 및 먹이 급여를 책임집니다.',
    locations: ['서울시 동작구', '관악구'],
    tags: ['파충류전문', '파충류', '이색동물'],
    animalTypes: ['파충류'],
  },
  {
    id: '7',
    name: '한소희 시터',
    profileImage: 'https://picsum.photos/seed/petsitter7/167/167',
    rating: 4.8,
    reviewCount: 34,
    description: '소형견 전문입니다. 말티즈, 포메라니안, 치와와 등 소형견 돌봄 4년 경력입니다. 혼자 있는 것을 불안해하는 아이들도 편안하게 돌봐드립니다.',
    locations: ['서울시 강서구', '양천구'],
    tags: ['소형견전문', '강아지', '분리불안'],
    animalTypes: ['강아지'],
  },
  {
    id: '8',
    name: '오지현 시터',
    profileImage: 'https://picsum.photos/seed/petsitter8/167/167',
    rating: 4.7,
    reviewCount: 27,
    description: '앵무새 전문 시터입니다. 코카투, 아프리카 그레이 등 대형 앵무새부터 왁스빌, 문조 등 소형 조류까지 폭넓게 돌봅니다.',
    locations: ['서울시 노원구', '도봉구'],
    tags: ['조류전문', '새', '이색동물'],
    animalTypes: ['새'],
  },
  {
    id: '9',
    name: '임나연 시터',
    profileImage: 'https://picsum.photos/seed/petsitter9/167/167',
    rating: 4.9,
    reviewCount: 55,
    description: '전문 그루머 출신 펫시터입니다. 돌봄과 함께 기본 그루밍도 제공합니다. 위생 관리에 특히 신경을 씁니다.',
    locations: ['서울시 성동구', '광진구'],
    tags: ['그루머출신', '강아지', '고양이'],
    animalTypes: ['강아지', '고양이'],
  },
  {
    id: '10',
    name: '강민서 시터',
    profileImage: 'https://picsum.photos/seed/petsitter10/167/167',
    rating: 4.4,
    reviewCount: 11,
    description: '양서류 전문 펫시터입니다. 아쿠아리움 관리 경험이 있어 수생 생물 및 양서류의 수질·온도·조명 환경을 철저히 관리합니다.',
    locations: ['서울시 서대문구', '은평구'],
    tags: ['양서류전문', '양서류', '이색동물'],
    animalTypes: ['양서류'],
  },
  {
    id: '11',
    name: '신예린 시터',
    profileImage: 'https://picsum.photos/seed/petsitter11/167/167',
    rating: 4.6,
    reviewCount: 18,
    description: '반려동물 행동 교정 전문가입니다. 짖음, 공격성, 분리불안 등 행동 문제가 있는 반려견도 안전하게 돌보며 교정을 도와드립니다.',
    locations: ['서울시 중랑구', '동대문구'],
    tags: ['행동교정', '강아지', '자격증보유'],
    animalTypes: ['강아지'],
  },
  {
    id: '12',
    name: '류지원 시터',
    profileImage: 'https://picsum.photos/seed/petsitter12/167/167',
    rating: 4.8,
    reviewCount: 39,
    description: '다종 반려동물 돌봄 가능합니다. 강아지, 고양이, 새, 햄스터 등 다양한 동물과 함께 생활한 경험이 있습니다. 여러 마리 동시 돌봄도 가능합니다.',
    locations: ['서울시 강북구', '성북구'],
    tags: ['다종돌봄', '강아지', '고양이'],
    animalTypes: ['강아지', '고양이', '기타'],
  },
];

interface PaginatedResult {
  petsitters: Petsitter[];
  totalPages: number;
  totalCount: number;
  currentPage: number;
}

export function getPetsitters(params?: {
  category?: AnimalCategory;
  location?: string;
  page?: number;
  perPage?: number;
}): PaginatedResult {
  // TODO: replace with real API call
  // return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/petsitters?page=${page}&category=${category}&perPage=${perPage}`)
  const page = params?.page || 1;
  const perPage = params?.perPage || 6;

  let result = [...MOCK_PETSITTERS];

  if (params?.category && params.category !== '전체') {
    result = result.filter(p =>
      p.animalTypes.includes(params.category as Exclude<AnimalCategory, '전체'>)
    );
  }

  const totalCount = result.length;
  const totalPages = Math.ceil(totalCount / perPage) || 1;
  const start = (page - 1) * perPage;
  const petsitters = result.slice(start, start + perPage);

  return { petsitters, totalPages, totalCount, currentPage: page };
}

export function getPetsitterById(id: string): Petsitter | undefined {
  // TODO: replace with real API call
  // return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/petsitters/${id}`)
  return MOCK_PETSITTERS.find(p => p.id === id);
}
