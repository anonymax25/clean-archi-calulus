import { Value } from "./Value";
import { Operator } from "./Operator.enum.";
import { Logger } from "../utils/Logger";


export class Operation {
    private _result = 0;

    get result () {
        return this._result;
    }

    constructor(private value: Value, private operator: Operator) {}

    public run(current: number): void {
        let result = 0;
        switch(this.operator) {
            case Operator.MINUS:
                result = current - this.value.value;
                break;
            case Operator.PLUS:
                result = current + this.value.value;
                break;
                break;
            case Operator.INIT:
                result = this.value.value;
                break;
        }
        if(this.operator === Operator.INIT) {
            Logger.print(`${result}`)
        } else {
            Logger.print(`${this.operator}${this.value.value} (=${result})`)
        }
        this._result = result;
    }

}