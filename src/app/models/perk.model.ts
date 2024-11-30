export interface IPerk {
  id: number;
  type: number;
  cost: number;
  maxLevel: number;
  text: string;
  include: boolean;
  class: number[];
}
