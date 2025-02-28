export namespace SystemActions {
  export class SelectSoldier {
    static readonly type = "[Default] Select Soldier";
    public soldierId: number | null;

    constructor(soldierId: number | null){
      this.soldierId = soldierId;
    }
  }
}
