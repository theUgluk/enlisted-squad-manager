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

  export class SetSquad {
    static readonly type = "[Default] Set Squad";
    public squadId: number;

    constructor(squadId: number){
      this.squadId = squadId;
    }
  }
}
