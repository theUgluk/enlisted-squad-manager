export namespace SoldierActions {
  export class AddSoldier {
    static readonly type = "[Default] Add Soldier";
    squadId: number;

    constructor(squadId: number) {
      this.squadId = squadId;
    }
  }

  export class DeleteSoldier {
    static readonly type = "[Default] Delete Soldier";
    soldierId: number;

    constructor(soldierId: number){
      this.soldierId = soldierId;
    }
  }
}
