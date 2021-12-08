import react from 'react';
import firebaseConfig from './firebaseconfig'
import config from './firebaseconfig'
import firebase from 'firebase/compat/app'
import auth from './firebaseconfig'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

function googleSignIn() {
    
 var auth = getAuth();
 const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider).then(function(result){
       const credential = GoogleAuthProvider.credentialFromResult(result);
        let token = credential.accessToken;
        let user =result.user;
        console.log("user ===>",user);
        console.log("token ===>",token);
    }).catch(function(err){
        var errorCode = err.code;
        var errorMessage =err.errorMessage;
        console.log("errorCode  =>",errorCode)
        const email = err.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(err);
    
        console.log("errorMessage  =>",errorMessage)
    })

}
const getDetail = () => {
  
    
   
   console.log("config====>",config);
  
}
function FireBase() {
    return(
        <div>
            <button type='button' onClick={googleSignIn}>GteDetails</button>
        </div>
    )
}
export default FireBase;