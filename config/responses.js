function userExistsResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: 'Usuario ya existente'
    })
}

function userSignedUpResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'Usuario registrado'
    })
}

function userSignedOutResponse(req,res) {
    return res.status(201).json({
        success: true,
        message: 'Usuario desconectado'
    })
}

function userNotFoundResponse(req,res) {
    return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
    })
}

function mustSignInResponse(req,res) {
    return res.status(400).json({
        success: false,
        message: '¡Regístrese por favor!'
    })
}

function invalidCredentialsResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Email o contraseña incorrecta'
    })
}

function verifyResponse(req,res) {
    return res.status(401).json({
        success: false,
        message: 'Por favor, verifique su cuenta de correo electrónico e inténtelo de nuevo'
    })
}

module.exports = {
    userSignedUpResponse,
    userExistsResponse,
    userNotFoundResponse,
    userSignedOutResponse,
    mustSignInResponse,
    invalidCredentialsResponse,
    verifyResponse,
}