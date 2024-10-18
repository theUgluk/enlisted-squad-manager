export namespace SoldierActions {
  export class SetBoolean {
    static readonly type = "[Default] Set Boolean";

    constructor(public boolean: boolean) {
    }
  }
}
