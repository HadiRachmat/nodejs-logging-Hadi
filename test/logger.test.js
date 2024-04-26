import winston, { log } from "winston"
// logger without transport
test('create new logger', () => {
    const logger = winston.createLogger({})

    logger.log({
        level : "info",
        messager : "hello logging"
    })
})