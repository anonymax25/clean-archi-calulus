export class Logger {
    public static doLogging = false

    public static log(message: string) {
        if(this.doLogging) {
            console.log(`${this.getDateString()}[log] ${message}`)
        }
    } 
    
    public static print(message: string) {
        console.log(message)
    } 

    private static getDateString() {
        const date = new Date()
        return `[${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}:${date.getMilliseconds().toString().padStart(3, '0')}]`
    }
}