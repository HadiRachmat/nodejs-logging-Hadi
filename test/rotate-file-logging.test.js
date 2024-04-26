import winston, { createLogger} from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test('rotate file logging node js', () => {
    const logger = new createLogger({
        level :"info",
        transports :[
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename :"app-%DATE%.log",
                zippedArchive : true,
                maxFiles : "2d",
                maxSize : "1m"
            })
        ]
    });

    for (let index = 0; index < 100000; index++) {
        logger.info(`Hello ${index}`);
        
    }
});
