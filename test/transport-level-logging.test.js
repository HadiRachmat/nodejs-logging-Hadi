import winston from "winston";

test('transport level logging node js ', () => {
  const logger = winston.createLogger({
    level : "info",
    transports : [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename : "application.log"
        }),
        new winston.transports.File({
            level : "error",
            filename : "result.log"
        })
    ]
  })
  logger.info("Hello hadi")
  logger.warn("Hello hadi")
  logger.error("Hello hadi")

})
