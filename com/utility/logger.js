const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

module.exports = createLogger({
    transports:
        new transports.DailyRotateFile({
            filename: `./logs/%DATE%-engine.log`,
            format: format.combine(
                format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )
        }),
});