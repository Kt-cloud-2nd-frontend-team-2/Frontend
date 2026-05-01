export type WAllType = {
  color: string;
  pos: [number, number, number];
  boxSize: [number, number, number];
  rot?: [number, number, number];
  direction?: string;
};
export type PaintingType = {
  id: number;
  paintingUrl: string;
  title: string;
  author: string;
  desc: string;
};
export type Cell = {
  x: number;
  z: number;
  visited: boolean;
  walls: {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  };
};
