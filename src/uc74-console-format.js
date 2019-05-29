import * as winston  from 'winston';
import  chalk  from 'chalk';

const expand = function expand(value, N) {
  const result = value.split('');
  const n = result.length;
  const diff = N - n;
  for (let i = 0; i < diff; i++) {
    if (i % 2 === 0) {result.push(' ');}
    if (i % 2 !== 0) {result.unshift(' ');}
  }
  return result.join('');
};

const uc74LogfFormat = winston.format.printf((info) => {
  let color = chalk.blue;

  switch (info.level) {
  case 'silly':
    color = chalk.bgBlackBright;
    break;
  case 'debug':
    color = value => chalk.bgWhite(chalk.black(value));
    break;
  case 'verbose':
    color = value => chalk.bgGreen(chalk.black(value));
    break;
  case 'info':
    color = chalk.bgBlue;
    break;
  case 'warn':
    color = value => chalk.bgYellow(chalk.black(value));
    break;
  case 'error':
    color = chalk.bgRed;
    break;
  default:
    color = chalk.blue;
  }

  const LEVEL = color(expand(info.level.toUpperCase(), 7));
  const TIMESTAMP = chalk.grey(info.timestamp);
  const LABEL = chalk.green(`[${info.label}]`);
  const MESSAGE = chalk.grey(info.message);

  return `${LEVEL} ${TIMESTAMP} ${LABEL} ${MESSAGE}\n`;
});

export { uc74LogfFormat };
