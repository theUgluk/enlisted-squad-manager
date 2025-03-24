import { Soldier } from "../../models/soldier.model";

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

    constructor(soldierId: number) {
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

  export class ChangeSoldierType {
    static readonly type = "[Default] Change SoldierType";
    soldierId: number;
    soldierTypeId: number;

    constructor(soldierId: number, soldierTypeId: number) {
      this.soldierId = soldierId;
      this.soldierTypeId = soldierTypeId;
    }
  }

  export class ChangeSoldierTypeLevel {
    static readonly type = "[Default] Change SoldierTypeLevel";
    soldierId: number;
    soldierTypeLevel: number;

    constructor(soldierId: number, soldierTypeLevel: number) {
      this.soldierId = soldierId;
      this.soldierTypeLevel = soldierTypeLevel;
    }
  }

  export class SetSoldier {
    static readonly type = "[Default] Set array of soldiers";
    soldiers: Soldier[];

    constructor(soldiers: Soldier[]) {
      this.soldiers = soldiers;
    }
  }

  export class AddPerkToSoldier {
    static readonly type = "[Default] Add a perk point to a soldier";
    soldierId: number;
    perkId: number;

    constructor(soldierId: number, perkId: number) {
      this.soldierId = soldierId;
      this.perkId = perkId;
    }
  }

  export class RemovePerkFromSoldier {
    static readonly type = "[Default] Remove a perk point from a soldier";
    soldierId: number;
    perkId: number;

    constructor(soldierId: number, perkId: number) {
      this.soldierId = soldierId;
      this.perkId = perkId;
    }
  }

  export class MoveSoldierUp {
    static readonly type = "[Default] Move Soldier Up";
    soldierId: number;

    constructor(soldierId: number) {
      this.soldierId = soldierId;
    }
  }

  export class MoveSoldierDown {
    static readonly type = "[Default] Move Soldier End";
    soldierId: number;

    constructor(soldierId: number) {
      this.soldierId = soldierId;
    }
  }

  export class CopySoldierToSquad {
    static readonly type = "[Default] Copy Soldier To Squad";
    soldierId: number | string;
    squadId: number;

    constructor(soldierId: number | string, squadId: number) {
      this.soldierId = soldierId;
      this.squadId = squadId;
    }
  }

  export class SwapSquadIds {
    static readonly type = "[Default] Swap Squad IDs";
    firstSquadId: number;
    secondSquadId: number;

    constructor(firstSquadId: number, secondSquadId: number) {
      this.firstSquadId = firstSquadId;
      this.secondSquadId = secondSquadId;
    }
  }
}
