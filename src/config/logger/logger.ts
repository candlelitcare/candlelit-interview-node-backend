import bunyan from 'bunyan';

const Logger = bunyan.createLogger({
  name: 'CANDLE_LIT_API',
});

export default Logger;
