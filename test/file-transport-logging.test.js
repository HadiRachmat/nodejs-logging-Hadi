import winston from "winston";

test("combine format logging nodejs", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.timestamp(),
    format : winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json(),

    ),
    // format: winston.format.logstash(),
    transports: 
    [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename:"application.log"
      })
    ],
  });

  logger.info("hello Hadi");
  logger.error("hello Hadi");
  logger.warn("hello Hadi");
});
