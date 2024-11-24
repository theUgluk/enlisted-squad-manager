import Util from "../util";

export class Soldier {
  public id: number;
  public squadId: number;
  public soldierTypeId = 13;
  public soldierTypeLevel =1;
  public hash = "";

  constructor(id: number, squadId: number, soldierTypeId?: number, soldierTypeLevel?: number) {
    this.id = id;
    this.squadId = squadId;
    if(soldierTypeId){
      this.soldierTypeId = soldierTypeId;
      if(soldierTypeLevel){
        this.soldierTypeLevel = soldierTypeLevel;
      }
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

  private calculateHash(){
    //	[##]	 [#]	  [#]		[##]     [#]    [#]
    // squadId-classId-classLevel-[perkId-perkAmount]
    this.hash =
      Util.makeMinLength(this.squadId.toString(36), 2)
      + Util.makeMinLength(this.soldierTypeId.toString(36), 1)
      + Util.makeMinLength(this.soldierTypeLevel.toString(36), 1);
  }
}

