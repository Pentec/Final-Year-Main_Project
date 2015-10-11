var winston = require('winston'),
    bunyan = require('bunyan');

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            name: 'info-file',
            filename: './systemlogs/filelog-info.log',
            level: 'info',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false,
            formatter: function(options) { //pass object for user id here; options may be request object
                // Return string will be passed to logger.
                return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            }
        }),
        new winston.transports.File({
            name: 'error-file',
            filename: './systemlogs/filelog-error.log',
            level: 'error',
            handleExceptions: true,
            json: false
        })
    ]
});


module.exports.logger = function() {
    return logger;
};

module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
}

