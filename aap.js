// var abc = () =>{
//     for(i=0;i<=10;i++){
//         console.log(i)
//     } 
// }
// abc();

// var arr = [1,2,3,4]
// arr.map((value)=>{
//     console.log(value+2)
// })

// var abc = (a,b, ...c) =>{
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// abc(1,2,3,4,5,6,7,8,9);

//String Interpolation
// var obj ={
//     lastName : "Raza" 
// }
// var name = "Adeel" + `${obj.lastName}`;
// console.log(name);
var config = {
    apiKey: "AIzaSyBeTuZpsHoB06bVhNK1k6dFWIKUt1lzI7o",
    authDomain: "todo-d3311.firebaseapp.com",
    databaseURL: "https://todo-d3311.firebaseio.com",
    projectId: "todo-d3311",
    storageBucket: "todo-d3311.appspot.com",
    messagingSenderId: "556663392350"
};
firebase.initializeApp(config);

// var dbRef = firebase.database().ref("/");

// var obj = {
//     name: "Adeel",
//     age: 21
// }
// var abc = {
//     name: "Osama",
//     age: 22
// }

// dbRef.set(obj);

// var h1 = document.getElementById("h1");
// var h2 = document.getElementById("h2");


// // dbRef.once("value", (snapshot)=>{

// //     h1.innerHTML = snapshot.val().name;
// //     h2.innerHTML = snapshot.val().age;
// // })

// dbRef.on("value", (snapshot)=>{

//     h1.innerHTML = snapshot.val().name;
//     h2.innerHTML = snapshot.val().age;
// })

var dbRef = firebase.database().ref('/');
var trigger = () => {
    var input_val = document.getElementById('input').value;
    dbRef.push(input_val);
}
var list = document.getElementById('list');
dbRef.on('value', (snapshot) => {
    list.innerHTML= null;
   if (snapshot.val()) {
        Object.keys(snapshot.val()).map((keys) => {
            let li = document.createElement('li');
            li.innerHTML = snapshot.val()[keys];
            list.appendChild(li);
        })
    }
})
