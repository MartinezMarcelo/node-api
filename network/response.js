exports.success = (req, res, message, status) => {
    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(statusCode).send({
        error: false,
        status: statusMessage,
        body: message,
    })
}

exports.error = (req, res, message, status) => {
    let statusCode = status || 500;
    let statusMessage = message || '';

    res.status(statusCode).send({
        error: false,
        status: statusMessage,
        body: message,
    })
}