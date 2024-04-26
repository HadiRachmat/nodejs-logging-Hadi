import winston from "winston";
//  LOGGING LEVEL TEST
test("create new logger transport", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "info", messager: "hello error",});
  logger.log({ level: "warn", messager: "hello warn",});
  logger.log({ level: "info", messager: "hello info",});
  logger.log({ level: "http", messager: "hello http",});
  logger.log({ level: "verbose", messager: "hello verbose",});
  logger.log({ level: "debug", messager: "hello debug",});
  logger.log({ level: "silly", messager: "hello silly",});
});
