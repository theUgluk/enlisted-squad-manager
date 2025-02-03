export interface IPerk {
  id: number;
  type: number;
  cost: number;
  maxLevel: number;
  text: (steps: number) => string;
  step: number;
  include: boolean;
  class: number[];
  icon: string;
  level: number;
}
