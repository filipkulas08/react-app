import $ from 'jquery';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged  } from "firebase/auth";

const loginGoogle = () => {
    const $loginButton = $('#login');
    const auth = getAuth();
    let provider = GoogleAuthProvider(auth);

    $loginButton.on('click', () => {
        signInWithPopup(provider).then(function(firebaseUser) {
            localStorage.setItem('myPage.expectSignIn', '1');
            window.location.reload();
        }
            ).catch(e => {
            console.log(e)
        })
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
              localStorage.setItem('userID', user.uid)
            }
          });
    })
};

export default loginGoogle;