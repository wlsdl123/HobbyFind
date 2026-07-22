export type HobbyCategory = 'all' | 'sports' | 'intellectual' | 'arts';

export interface Hobby {
  id: string;
  title: string;
  description: string;
  category: Exclude<HobbyCategory, 'all'>;
  duration: string;
  level: string;
  thumbnail: string;
}

const categoryThumbnailMap: Record<Exclude<HobbyCategory, 'all'>, string> = {
  sports: '/thumbnails/sports.svg',
  intellectual: '/thumbnails/intellectual.svg',
  arts: '/thumbnails/arts.svg',
};

export const categories: { key: HobbyCategory; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'sports', label: '운동형' },
  { key: 'intellectual', label: '지능형' },
  { key: 'arts', label: '예술형' },
];

export const hobbies: Hobby[] = [
  {
    id: 'yoga',
    title: '홈 요가',
    description: '부드러운 스트레칭과 호흡으로 하루의 균형을 찾습니다.',
    category: 'sports',
    duration: '30분',
    level: '초급',
    thumbnail: categoryThumbnailMap.sports,
  },
  {
    id: 'trail-running',
    title: '트레일 러닝',
    description: '자연 속 달리기로 체력과 집중력을 모두 강화합니다.',
    category: 'sports',
    duration: '60분',
    level: '중급',
    thumbnail: categoryThumbnailMap.sports,
  },
  {
    id: 'pilates',
    title: '필라테스',
    description: '코어와 자세를 바로잡아 편안한 움직임을 만듭니다.',
    category: 'sports',
    duration: '45분',
    level: '초급',
    thumbnail: categoryThumbnailMap.sports,
  },
  {
    id: 'climbing',
    title: '실내 암벽 등반',
    description: '전신 운동과 문제 해결 능력을 동시에 키우는 취미입니다.',
    category: 'sports',
    duration: '90분',
    level: '중급',
    thumbnail: categoryThumbnailMap.sports,
  },
  {
    id: 'chess',
    title: '체스',
    description: '전략적 사고와 집중력으로 승부를 즐겨보세요.',
    category: 'intellectual',
    duration: '60분',
    level: '중급',
    thumbnail: categoryThumbnailMap.intellectual,
  },
  {
    id: 'puzzle',
    title: '퍼즐 게임',
    description: '조각을 맞추며 문제를 단계적으로 해결합니다.',
    category: 'intellectual',
    duration: '30분',
    level: '초급',
    thumbnail: categoryThumbnailMap.intellectual,
  },
  {
    id: 'coding',
    title: '코딩 챌린지',
    description: '작은 프로덕트를 만드는 과정에서 논리적 사고를 단련합니다.',
    category: 'intellectual',
    duration: '90분',
    level: '중급',
    thumbnail: categoryThumbnailMap.intellectual,
  },
  {
    id: 'language',
    title: '외국어 학습',
    description: '새로운 언어를 통해 사고의 폭을 넓히고 표현력을 키웁니다.',
    category: 'intellectual',
    duration: '45분',
    level: '초급',
    thumbnail: categoryThumbnailMap.intellectual,
  },
  {
    id: 'painting',
    title: '수채화',
    description: '물감의 색감을 활용해 감성을 표현하는 시간입니다.',
    category: 'arts',
    duration: '90분',
    level: '초급',
    thumbnail: categoryThumbnailMap.arts,
  },
  {
    id: 'pottery',
    title: '도예',
    description: '흙을 만지며 나만의 오브제를 만들어보세요.',
    category: 'arts',
    duration: '120분',
    level: '중급',
    thumbnail: categoryThumbnailMap.arts,
  },
  {
    id: 'photography',
    title: '사진 촬영',
    description: '빛과 구도를 활용해 순간의 분위기를 담습니다.',
    category: 'arts',
    duration: '60분',
    level: '중급',
    thumbnail: categoryThumbnailMap.arts,
  },
  {
    id: 'music',
    title: '디지털 뮤직 제작',
    description: '리듬과 멜로디를 만들어 나만의 사운드를 완성합니다.',
    category: 'arts',
    duration: '90분',
    level: '중급',
    thumbnail: categoryThumbnailMap.arts,
  },
  {
    id: 'hiking',
    title: '등산',
    description: '자연을 걷고 풍경 속에서 힐링을 찾습니다.',
    category: 'sports',
    duration: '120분',
    level: '초급',
    thumbnail: categoryThumbnailMap.sports,
  },
  {
    id: 'yoga-flow',
    title: '플로우 요가',
    description: '리듬감 있는 동작으로 몸과 마음의 흐름을 맞춥니다.',
    category: 'sports',
    duration: '45분',
    level: '중급',
    thumbnail: categoryThumbnailMap.sports,
  },
  {
    id: 'boardgames',
    title: '보드게임',
    description: '친구와 함께 전략과 재미를 즐길 수 있는 시간입니다.',
    category: 'intellectual',
    duration: '90분',
    level: '초급',
    thumbnail: categoryThumbnailMap.intellectual,
  },
  {
    id: 'writing',
    title: '크리에이티브 라이팅',
    description: '글로 생각을 정리하고 나만의 이야기를 써봅니다.',
    category: 'arts',
    duration: '60분',
    level: '초급',
    thumbnail: categoryThumbnailMap.arts,
  },
  {
    id: 'dance',
    title: '댄스 클래스',
    description: '음악에 맞춰 몸을 움직이며 표현력을 확장합니다.',
    category: 'arts',
    duration: '60분',
    level: '초급',
    thumbnail: categoryThumbnailMap.arts,
  },
  {
    id: 'mindfulness',
    title: '마인드풀니스',
    description: '짧은 명상과 호흡으로 집중력을 회복합니다.',
    category: 'intellectual',
    duration: '30분',
    level: '초급',
    thumbnail: categoryThumbnailMap.intellectual,
  },
];
