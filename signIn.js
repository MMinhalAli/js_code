var config = {
    apiKey: "AIzaSyBeTuZpsHoB06bVhNK1k6dFWIKUt1lzI7o",
    authDomain: "todo-d3311.firebaseapp.com",
    databaseURL: "https://todo-d3311.firebaseio.com",
    projectId: "todo-d3311",
    storageBucket: "todo-d3311.appspot.com",
    messagingSenderId: "556663392350"
};
firebase.initializeApp(config);


function signIn  () {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    firebase.auth().signInWithEmailAndPassword(email, pass).then(() => {
       // console.log("Successful")
       window.location = "home.html";
    }).catch(function (error) {
        alert(error.message);
    });
}
