var config = {
    apiKey: "AIzaSyBeTuZpsHoB06bVhNK1k6dFWIKUt1lzI7o",
    authDomain: "todo-d3311.firebaseapp.com",
    databaseURL: "https://todo-d3311.firebaseio.com",
    projectId: "todo-d3311",
    storageBucket: "todo-d3311.appspot.com",
    messagingSenderId: "556663392350"
};
firebase.initializeApp(config);

var uid;
var dbRef;
firebase.auth().onAuthStateChanged((user)=>{
    uid = user.uid;
    dbRef = firebase.database().ref('/' + uid);
    
    var list = document.getElementById('list');
    dbRef.on('value', (snapshot) => {
        list.innerHTML = null;
       if (snapshot.val()) {
            Object.keys(snapshot.val()).map((keys) => {
                let li = document.createElement('li');
                li.innerHTML = snapshot.val()[keys];
                list.appendChild(li);
            })
        }
    })
})


var trigger = () => {
    var input_val = document.getElementById('input').value;
    dbRef.push(input_val);
}



