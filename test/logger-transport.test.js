import winston from "winston";
// LOGGER USING TRANSPORT 
test('create new logger transport', () => {
    const logger = winston.createLogger({
        format : winston.format.json(),
        // format : winston.format.simple(),
        transports : [
            new winston.transports.Console({})
        ]
    })

    logger.log({
        level : "info",
        messager : "hello logging"
    })
})