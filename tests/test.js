const winston = require('winston');
const formats = require('../build/index.cjs');

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.combine(
    winston.format.label({ label: 'EXAMPLE' }),
    winston.format.timestamp(),
    winston.format.splat(),
    formats.uc74LogfFormat,
  ),
  transports: [
    new winston.transports.Console()
  ]
});

logger.silly('%s is %s', 'LEVEL', '5');
logger.debug('4');
logger.verbose('3');

logger.info('2');
logger.warn('1');
logger.error('0');

const obj = {
  a: 1,
  b: 2
};

logger.info(JSON.stringify(obj));
