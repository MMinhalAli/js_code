
var Submit = () => {
    let DIV = document.getElementById("MainDiv");
 let Text = document.getElementById("Input").value;
let List = document.getElementById("List");
let Li = document.createElement("h2");

Li.setAttribute("id","SubList" );

let text = document.createTextNode(Text);
let IMG = document.createElement("img");
IMG.setAttribute("id","IMAGE" );
IMG.setAttribute("src","./img.PNG" );

Li.innerHTML=Text;

let HR = document.createElement("hr");




DIV.appendChild(IMG);

DIV.appendChild(Li);
DIV.append(HR);
}