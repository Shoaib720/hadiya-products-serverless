const { createLogger, transports, format } = require('winston');
// const ecsFormat = require('@elastic/ecs-winston-format');
// require('winston-daily-rotate-file');

// const dailyRotateTransport = new transports.DailyRotateFile({
//     filename: 'products-api-logs-%DATE%.log',
//     datePattern: 'DD-MM-YYYY',
//     zippedArchive: true,
//     dirname: 'logs'
//   });

const Logger = createLogger({
    level: 'debug',
    // format: ecsFormat({ convertReqRes: true }),
    transports: [
        // dailyRotateTransport,
        new transports.Console()
    ]
})

// class ResponseLogger {
//     static log(res, httpStatus)
// }

// API log
// {
//     "level":"info",
//     "message":"Thu Jul 27 2023 12:59:46 GMT+0530 (India Standard Time) Request id: undefined. GET /api/v1/products 200 Products fetched successfully"
// }

class InfoLogger {
    static log(message) {
        Logger.log(
            'info',
            message,
            { env:process.env.NODE_ENV }
        );
    }
}

class HttpLogger{
    static log(message, {req, res}) {
        Logger.log('info', message, { req, res, env:process.env.NODE_ENV })
    }
}

class ErrorLogger{
    constructor(){}
    static log(err){
        console.log("=================START ERROR LOGGER=================");
        Logger.log(
            'error',
            {
                timestamp: new Date(),
                error: JSON.stringify(err),
                trace: JSON.stringify(err.stack)
            },
                
        );
        console.log("=================END ERROR LOGGER=================");
        return false;
    }
}

module.exports = {
    Logger,
    ErrorLogger
}