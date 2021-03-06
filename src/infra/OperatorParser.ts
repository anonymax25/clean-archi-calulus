import { Logger } from "../utils/Logger";
import { Operator } from "../domaine/Operator.enum.";

export class OperatorParser {

    constructor(private operator: string) {}

    public parse(): Operator {

        const tuple = Object.entries(Operator).find(tuples => {
            return tuples[1] === this.operator
        })
        
        if(!tuple) {
            throw new Error('Can\'t parse operator')
        }
        return tuple[1];
    }

}