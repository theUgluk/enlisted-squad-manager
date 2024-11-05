export namespace SquadActions {
  export class AddSquad {
    static readonly type = "[Default] Add Squad";
  }

  export class DeleteSquad {
    static readonly type = "[Default] Delete Squad";
    public squadId: number;

    constructor(squadId: number){
      this.squadId = squadId;
    }
  }
}
