var config = {
    apiKey: "AIzaSyBeTuZpsHoB06bVhNK1k6dFWIKUt1lzI7o",
    authDomain: "todo-d3311.firebaseapp.com",
    databaseURL: "https://todo-d3311.firebaseio.com",
    projectId: "todo-d3311",
    storageBucket: "todo-d3311.appspot.com",
    messagingSenderId: "556663392350"
};
firebase.initializeApp(config);

// 

 var signin = () =>{
    let email=document.getElementById('input1').value;
    let pass=document.getElementById('input2').value;

    firebase.auth().signInWithEmailAndPassword(email,pass).then( ()=>
    {
        window.location="app.html";
    }).catch( function (error) {  alert(error.message);  });
}

var signup = () =>
{
    window.location="signuptodoapp.html";
}