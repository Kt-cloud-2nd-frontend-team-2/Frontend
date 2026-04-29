import { PaintingType, WAllType } from '../types/gallery';

export const ROOMSIZE = 15;
export const SPEED = 5;
export const HEIGHT = ROOMSIZE / 10;
export const WALL_HEIGHT = ROOMSIZE * 0.3;

export const INIT: PaintingType[] = [
  {
    id: 1,
    paintingUrl: '/gallery/painting.png',
    title: '바다의 노래',
    author: '최지민',
    desc: 'danjdwnqjnsa',
  },
  {
    id: 2,
    paintingUrl: '/gallery/painting1.png',
    title: '죽음의 노래',
    author: '최지민',
    desc: 'danjdwnqjnsa',
  },
  {
    id: 3,
    paintingUrl: '/gallery/painting2.png',
    title: '바다',
    author: '최지민',
    desc: 'test2',
  },
];

export const WALLS: WAllType[] = [
  {
    color: '#CEC8BD',
    pos: [0, WALL_HEIGHT / 2, -ROOMSIZE / 2],
    boxSize: [ROOMSIZE, WALL_HEIGHT, 0.5],
  },
  {
    color: '#D6D0C5',
    pos: [0, WALL_HEIGHT / 2, ROOMSIZE / 2],
    boxSize: [ROOMSIZE, WALL_HEIGHT, 0.5],
  },
  {
    color: '#CEC8BD',
    pos: [-ROOMSIZE / 2, WALL_HEIGHT / 2, 0],
    boxSize: [0.5, WALL_HEIGHT, ROOMSIZE],
  },
  {
    color: '#DDD7CC',
    pos: [ROOMSIZE / 2, WALL_HEIGHT / 2, 0],
    boxSize: [0.5, WALL_HEIGHT, ROOMSIZE],
  },
];
