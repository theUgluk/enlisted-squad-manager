export class Squad {
  public id: number;
  private _count = 0;
  public hash = "";
  constructor(id: number) {
    this.id = id;
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

