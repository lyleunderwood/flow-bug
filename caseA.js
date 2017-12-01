// @flow
import type { Rect as ExternalRect } from './external-rect';

export type Rect = {
  x: number,
  y: number,
  width: number,
  height: number,
};

export type UsefulRect = ExternalRect & {
  factor: number,
};

function useRect(rect: {
  idx: number,
  x: number,
  y: number,
  width: number,
  height: number,
}) {
  console.log(rect.width);
}

const rect: UsefulRect = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  factor: 2,
};

useRect({
  ...rect,
  idx: 1,
});

