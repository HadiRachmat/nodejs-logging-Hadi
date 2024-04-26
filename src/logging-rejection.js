import { createLogger } from "winston";
import winston from "winston/lib/winston/config";

async function callAsync() {
    return Promise.reject("ups")
}

const logger = new createLogger({
    level : "info",
    transports : [
        new winston.transports.File({
            // handleExceptions :true,
            handleRejection : true,
            filename :"exception.log"
        })
    ]
})


callAsync();