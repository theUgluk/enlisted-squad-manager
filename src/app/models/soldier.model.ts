import { perks } from "../../data/perks";
import Util from "../util";

export class Soldier {
  public id: number;
  public squadId: number;
  public soldierTypeId = 13;
  public soldierTypeLevel =1;
  public hash = "";
  public perks: {perkId: number, amount: number}[] = [];

  constructor(
    id: number,
    squadId: number,
    soldierTypeId?: number,
    soldierTypeLevel?: number,
    perksToAdd?: {perkId: number, amount: number}[]
  ) {
    this.id = id;
    this.squadId = squadId;
    if(soldierTypeId){
      this.soldierTypeId = soldierTypeId;
      if(soldierTypeLevel){
        this.soldierTypeLevel = soldierTypeLevel;
      }
    }
    if(perksToAdd){
      this.perks = perksToAdd;
    }
    this.calculateHash();
  }

  // @todo set typeLevel to min level
  public setSoldierTypeId(id: number) {
    this.soldierTypeId = id;
    this.setSoldierTypeLevel(1);
    this.calculateHash();
  }

  public setSoldierTypeLevel(level: number) {
    this.soldierTypeLevel = level;
    this.calculateHash();
  }

  public addPerk(perkId: number){
    const perkIndex = this.perks.findIndex((perk) => perk.perkId === perkId);
    if(perkIndex > -1){
      const foundPerk = perks.find(perk => perk.id === perkId);
      const localPerk = this.perks[perkIndex];
      if(foundPerk && foundPerk.maxLevel > localPerk.amount){
        this.perks[perkIndex].amount++;
      }
    } else {
      this.perks = [...this.perks, {
        perkId: perkId,
        amount: 1
      }
      ];
    }
    this.calculateHash();
  }

  private calculateHash(){
    //	[##]	 [#]	  [#]		[##]     [#]    [#]
    // squadId-classId-classLevel-[perkId-perkAmount]
    this.hash =
      Util.makeMinLength(this.squadId.toString(36), 2)
      + Util.makeMinLength(this.soldierTypeId.toString(36), 1)
      + Util.makeMinLength(this.soldierTypeLevel.toString(36), 1);

    this.perks.forEach(perk => {
      this.hash += Util.makeMinLength(perk.perkId.toString(36), 1)
      + Util.makeMinLength(perk.amount.toString(36), 1)
    });
  }
}

