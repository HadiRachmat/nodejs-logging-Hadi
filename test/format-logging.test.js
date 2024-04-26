import winston from "winston";

test("format logging nodejs", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.simple(),
    // format: winston.format.logstash(),
    transports: [new winston.transports.Console({})],
  });

  logger.info("hello Hadi");
});
test("logging format with printf", () => {
  const logger = winston.createLogger({
    level: "info",
    //   format: winston.format.json(),
    //   format: winston.format.simple(),
      // format: winston.format.logstash(),
    format: winston.format.printf((log) => {
      return `${new Date()} : ${log.level.toUpperCase()}: ${log.message}`;
      // return `${log.level}:${log.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.error("hello Hadi");
  logger.warn("hello Hadi");
  logger.info("hello Hadi");
  // logger.info("hello Hadi");
});
