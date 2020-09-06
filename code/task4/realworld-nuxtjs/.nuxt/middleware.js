const middleware = {}

middleware['authorization'] = require('..\\middleware\\authorization.js')
middleware['authorization'] = middleware['authorization'].default || middleware['authorization']

middleware['notAuthorization'] = require('..\\middleware\\notAuthorization.js')
middleware['notAuthorization'] = middleware['notAuthorization'].default || middleware['notAuthorization']

export default middleware
