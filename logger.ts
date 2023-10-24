import winston from "winston";

const { combine, timestamp, json, prettyPrint, colorize } = winston.format;
const logFile = process.env.NODE_ENV === 'production' ? "var/log/NEXT_APP/app.log" : "app.log";

const logger = winston.createLogger({
    format: combine(timestamp(), json()),
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: combine(
            timestamp({
                format: "DD-MMM-YYYY HH:mm:ss",
            }),
            prettyPrint(),
            colorize({ all: true }),
        ),
    })
    );
}

if (process.env.NODE_ENV === 'production') {
    logger.add(new winston.transports.File({
        filename: logFile
    }),
    );
}


export default logger;