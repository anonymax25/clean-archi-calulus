import { readFileSync } from "fs";
import { Logger } from "./Logger";
import { Value } from "./Value";

export class ValuesParser {

    constructor(private filename: string) {}

    public parse(): Promise<Value>[] {
        const file: Buffer = readFileSync(this.filename);
        const fileContent = file.toString()
        return fileContent
            .split('\n')
            .map(async (num) => {
                try {
                    const value = new Value(parseInt(num));
                    Logger.log(`parsed value = ${value.value}`)
                    return value
                } catch (error) {
                    throw new Error('Unable to parse number from file')
                }
            });
    }

}