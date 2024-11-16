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

  export class DeleteSoldiersForSquad {
    static readonly type = "[Default] Delete Soldiers for a given Squad";
    public squadId: number;

    constructor(squadId: number) {
      this.squadId = squadId;
    }
  }
}
