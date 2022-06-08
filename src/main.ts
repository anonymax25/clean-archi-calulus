import { Logger } from './Logger';
import { Operation } from './Operation';
import { ValuesParser } from './ValuesParser';
import { OperatorParser } from './OperatorParser';
import { Value } from './Value';
import { Operator } from './Operator.enum.';



const main = async (args: string[]) => {
    Logger.doLogging = args[2] === 'log'
    
    const filename: string = args[0]
    const parseValues = new ValuesParser(filename).parse()
    const operator: Operator = new OperatorParser(args[1]).parse()

    let state: number = 0;
    Promise.all(await parseValues.map(async (parseValue, i) => {
        const value: Value = await parseValue
        const operation = new Operation(value, i === 0 ? Operator.INIT : operator)
        state = operation.run(state);
        return;
    }))

    Logger.print(`--------------`)
    
    Logger.print(`Total = ${state}`)

    Logger.log(`end of program`)

    
}

main(process.argv.slice(2)).then((_) => {});
