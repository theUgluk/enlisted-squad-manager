export class Soldier {
  public id: number;
  public squadId: number;
  private _count = 0;
  public hash = "";

  constructor(id: number, squadId: number) {
    this.id = id;
    this.squadId = squadId;
    this.calculateHash();
  }

  public tickCount(){
    this._count++;
    this.calculateHash();
  }

  private calculateHash(){
    this.hash = this.id.toString() + this._count.toString();
  }
}

