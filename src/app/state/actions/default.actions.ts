export namespace DefaultActions {
    export class SetBoolean {
        static readonly type = "[Default] Set Boolean";

        constructor(public boolean: boolean) {
        }
    }
}
