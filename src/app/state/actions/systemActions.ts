export namespace SystemActions {
  export class SelectSoldier {
    static readonly type = "[Default] Select Soldier";
    public soldierId: number | null;

    constructor(soldierId: number | null){
      this.soldierId = soldierId;
    }
  }
  export class SelectSquad{
    static readonly type = "[Default] Select Squad";
    public squadId: number | null;

    constructor(squadId: number | null){
      this.squadId = squadId;
    }
  }
}
