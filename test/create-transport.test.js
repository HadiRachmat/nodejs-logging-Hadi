import winston from "winston";
import TransportStream from "winston-transport";

test('create transport logging node js', () => {
   class MyTransport extends TransportStream{
    constructor(option){
        super(option)
    }

    log(info,next){
        console.log(`${new Date()} : ${info.level.toUpperCase()} ${info.message}`)
    }
   }
   const logger = winston.createLogger({
    level : "silly",
    transports : [
        new MyTransport({})
    ]
   });

   logger.info("hello hadi")
   logger.warn("hello hadi")
   logger.error("hello hadi")
   logger.debug("hello hadi")
   logger.silly("hello hadi")
})
