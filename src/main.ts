import { Logger } from './utils/Logger';
import { Operation } from './domaine/Operation';
import { ValuesParser } from './infra/ValuesParser';
import { OperatorParser } from './infra/OperatorParser';
import { Value } from './domaine/Value';
import { Operator } from './domaine/Operator.enum.';
import { OperationRunner } from './infra/OperationRunner';



const main = async (args: string[]) => {

    Logger.doLogging = args[2] === 'log'

    Logger.log(`start of program`)

    
    const filename: string = args[0]
    const values = new ValuesParser(filename).parse()
    const operator: Operator = new OperatorParser(args[1]).parse()

    const runner = new OperationRunner(values, operator)
    
    await runner.run();

    Logger.print(`--------------`)
    
    Logger.print(`Total = ${runner.state}`)

    Logger.log(`end of program`)

    
}

main(process.argv.slice(2)).then((_) => {});
