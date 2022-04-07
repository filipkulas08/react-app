import $ from 'jquery';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";

const login = () => {
    const $signUpButton = $('#signUp');
    const $loginButton = $('#loginBtn');
    const $logoutButton = $('.logoutButton');
    const $errorMessage = $('.errorMessage');
    const auth = getAuth();

    const loginFunction = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then(function(firebaseUser) {
            localStorage.setItem('myPage.expectSignIn', '1');
            window.location.reload();
        }
            ).catch(function(error) {
            var message = error.message;
            $errorMessage.addClass('exist');
            $errorMessage.text(message);
            $('input').val('');
        });

        onAuthStateChanged(auth, (user) => {
            if (user) {
              localStorage.setItem('userID', user.uid)
            }
          });
    }
    
    
    $signUpButton.on('click', () => {
        var email = document.getElementById('emailRegister').value;
        var password = document.getElementById('passwordRegister').value;

        createUserWithEmailAndPassword(auth, email, password).then(function(){
            loginFunction(email, password);
        }).catch(e=>{
        });

        $('input').val('');
    })

    $loginButton.on('click', () => {
        let email = document.getElementById('emailLogin').value;
        let password = document.getElementById('passwordLogin').value;

        loginFunction(email, password);
    });

    $logoutButton.on('click', () => {
        signOut(auth).then(function (firebaseUser) {
            localStorage.removeItem('myPage.expectSignIn');
            window.location.reload();
        }).catch(e => {
            console.log(e)
        });
    });

}

export default login;