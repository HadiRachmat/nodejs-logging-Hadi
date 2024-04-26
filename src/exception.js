import winston, { createLogger } from "winston";

const logger = new createLogger({
    level : "info",
    transports : [
        new winston.transports.File({
            handleExceptions :true,
            filename :"exception.log"
        })
    ]
})

hello()