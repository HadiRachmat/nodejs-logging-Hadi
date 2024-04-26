import winston, { ExceptionHandler, createLogger } from "winston";

test('exception loggin node js', () => {
  const logger =  new createLogger({
    level : "info",
    transports :[
        new winston.transports.File({
            handleExceptions : true,
            filename : "exceptions.log"
        })
    ]
  });  
})
