export namespace SoldierActions {
  export class AddSoldier {
    static readonly type = "[Default] Add Soldier";
    squadId: number;

    constructor(squadId: number) {
      this.squadId = squadId;
    }
  }
}
