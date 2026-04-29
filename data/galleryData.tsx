import { PaintingType, WAllType } from '../types/gallery';

export const ROOMSIZE = 15;

export const SPEED = 5;
export const HEIGHT = ROOMSIZE / 10;

export const WALL_HEIGHT = ROOMSIZE * 0.5;
export const INIT: PaintingType[] = [
  {
    id: 1,
    paintingUrl: '/gallery/painting.png',
    title: '바다의 노래',
    author: '최지민',
    desc: '제주도 여행에서 바라본 에메랄드빛 바다를 담았습니다. 파도 소리가 들리는 것 같은 그림을 그리고 싶었어요.',
  },
  {
    id: 2,
    paintingUrl: '/gallery/painting1.png',
    title: '봄날의 꿈',
    author: '이소율',
    desc: '봄날 공원에서 느낀 따뜻한 햇살과 꽃향기를 수채화로 표현했습니다. 핑크빛 꽃잎이 바람에 날리는 모습이 인상적이었습니다.',
  },
  {
    id: 3,
    paintingUrl: '/gallery/painting2.png',
    title: '우리 가족',
    author: '김도현',
    desc: '가족과 함께한 행복한 순간을 그렸어요. 엄마, 아빠, 그리고 강아지까지 모두 함께 있는 모습이에요.',
  },
];

export const createWalls = (
  roomSize: number,
  wallHeight: number
): WAllType[] => {
  return [
    {
      color: '#CEC8BD',
      pos: [0, wallHeight / 2, -roomSize / 2],
      boxSize: [roomSize, wallHeight, 0.5],
      rot: [0, 0, 0],
    },
    {
      color: '#D6D0C5',
      pos: [0, wallHeight / 2, roomSize / 2],
      boxSize: [roomSize, wallHeight, 0.5],
      rot: [0, Math.PI, 0],
    },
    {
      color: '#CEC8BD',
      pos: [-roomSize / 2, wallHeight / 2, 0],
      boxSize: [roomSize, wallHeight, 0.5],
      rot: [0, Math.PI / 2, 0],
    },
    {
      color: '#DDD7CC',
      pos: [roomSize / 2, wallHeight / 2, 0],
      boxSize: [roomSize, wallHeight, 0.5],
      rot: [0, -Math.PI / 2, 0],
    },
  ];
};
export const WALLS: WAllType[] = [
  {
    color: '#CEC8BD',
    pos: [0, WALL_HEIGHT / 2, -ROOMSIZE / 2],
    boxSize: [ROOMSIZE, WALL_HEIGHT, 0.5],
    rot: [0, 0, 0],
  },
  {
    color: '#D6D0C5',
    pos: [0, WALL_HEIGHT / 2, ROOMSIZE / 2],
    boxSize: [ROOMSIZE, WALL_HEIGHT, 0.5],
    rot: [0, Math.PI, 0],
  },
  {
    color: '#CEC8BD',
    pos: [-ROOMSIZE / 2, WALL_HEIGHT / 2, 0],
    boxSize: [ROOMSIZE, WALL_HEIGHT, 0.5],
    rot: [0, Math.PI / 2, 0],
  },
  {
    color: '#DDD7CC',
    pos: [ROOMSIZE / 2, WALL_HEIGHT / 2, 0],
    boxSize: [ROOMSIZE, WALL_HEIGHT, 0.5],
    rot: [0, -Math.PI / 2, 0],
  },
];
