import { Operation } from "../domaine/Operation";
import { Operator } from "../domaine/Operator.enum.";
import { Value } from "../domaine/Value";

export class OperationRunner {
    private _state: number = 0;

    get state () {
        return this._state;
    }

    constructor(private values: Promise<Value>[], private operator: Operator) {}

    public async run(): Promise<void> {
        await Promise.all(this.values.map(async (parseValue, i) => {
            const value: Value = await parseValue
            const operation = new Operation(value, i === 0 ? Operator.INIT : this.operator)
            operation.run(this._state);
            this._state = operation.result
            return;
        }))
    }
}