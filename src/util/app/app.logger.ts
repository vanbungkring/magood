import * as winston from 'winston';
export const logger = new winston.Logger();
const env = 'development';
// Development Logger
if (env === 'development') {
    // tslint:disable-next-line: indent
    logger.add(winston.transports.Console, {
        // tslint:disable-next-line: indent
        type: 'verbose',
        // tslint:disable-next-line: indent
        colorize: true,
        // tslint:disable-next-line: indent
        prettyPrint: true,
        // tslint:disable-next-line: indent
        handleExceptions: true,
        // tslint:disable-next-line: indent
        humanReadableUnhandledException: true,
        // tslint:disable-next-line: indent
    });
}
process.on('unhandledRejection', () => {
    return (reason: any, p: any) => {
        // tslint:disable-next-line: indent
        logger.warn('system level exceptions at, Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
    };
});
