export class Soldier {
  public id: number;
  public squadId: number;
  public soldierTypeId = 13;
  public soldierTypeLevel = 1;
  private _count = 0;
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

  public tickCount(){
    this._count++;
    this.calculateHash();
  }

  private calculateHash(){
    this.hash =
      this.id.toString()
      + this.soldierTypeId.toString()
      + this.soldierTypeLevel.toString()
      + this._count.toString();
  }
}

