const jwt = require('jsonwebtoken');

module.exports = (user) => {
    const payload = {
        subject: user.userId,
        username: user.username
    }
    const secret = "super secure secret";

    const options = { 
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options)
}