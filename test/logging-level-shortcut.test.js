import winston from "winston";
//  LOGGING LEVEL TEST
test("create new logger transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [new winston.transports.Console({})],
  });

  logger.error("hello error",);
  logger.warn("hello warn",);
  logger.info("hello info",);
  logger.http("hello http",);
  logger.verbose("hello verbose",);
  logger.debug("hello debug",);
  logger.silly("hello silly",);
});
