import auth0, { WebAuth } from 'auth0-js';

export default class Auth {
    auth0 = new WebAuth({
        domain : 'dev-atot79z3.us.auth0.com',
        clientID:'H6huHkIb8mjWZ3MlI6hjBDylvgxYXbfH',
        scope:'',
        responseType:'',
        redirectUri:'http://localhost:3000/',
        audience:''
    })
}