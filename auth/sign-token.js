const jwt = require('jsonwebtoken');

module.exports = (instructor) => {
    const payload = {
        subject: instructor.instructorId,
        instructorname: instructor.instructorname
    }
    const secret = "super secure secret";

    const options = { 
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options)
}