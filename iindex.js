// var a ="ALI"
// const b ="Adeel"
// var c=prompt("Ali","kashan");
// var d=[1,2,3,4,5];
 
// alert(c);
// d.unshift(1,2);
// d.shift();
//  d.splice(4,1,"S");
//  console.log(d);
// var e=d.slice(0,3);
// console.log(d +":"+e);
// for(var i=0;i<3;i++)
// {
//     if(i===2)
//     {
//         alert("ALERT");
//     }
// }
// var b=["albert","EINSTEIN"];
// var fam;
// var famous=prompt("Enter the famous name");
// // famous=famous.toLowerCase();
// // fam=famous.toUpperCase();
// for(var i=0; i<2;i++)
// {
//     if(famous==b[i])
//     {
//         alert(famous);
//     }
//     // else if(fam===b[i])
//     // {
//     //     alert(fam);
//     // }
// }
// var month=prompt("Enter month");
// months=month.length;
// if(months>3)
// {
//     alert(month.slice(0,3));
// }
//  var text="india observe the World War II in subcontinent World War II";
// // for(var i=0;i<text.length;i++)
// // {
// //     // if(text.slice(i,i+12)=="World War II")
// //     // {
// //     //     var
// //     //     alert(i);
// //     // }

// // }
// alert(text.lastIndexOf("World War II"));
//replace
// var b=14.5;
// alert(Math.round(b));
//math.random();
//alert(Math.floor(b));
// var b="ALI SHAHID"
// //b=b.replace("ALI SHAHID","ALI KASHAN");
// //b=b.charAt(4);
// c=Math.ceil(1.000001);
// console.log(c);
//var alpha=prompt("Enter data in float");
//alpha=parseInt(alpha);
//alpha=parseFloat(""); //it convert string to floating point number
//alpha=Number(alpha);
//alpha=alpha.toString();
//alpha=alpha.fixed("2"); 
//var alpha=1.555;
//alpha=alpha.toFixed(3);
//var string="minhal";
// alpha=5(str);
// var alpha=1.555
// alpha=alpha.toFixed();
// var b=11;
// var alpha=Number(str);
// var rightNow=new Date();
// //var alpha=rightNow.toString();
// //var alpha=rightNow.getDate();
// //var alpha=rightNow.getTime();
// var alpha=rightNow.setFullYear(2001);
// console.log(alpha);
// function Telltime()
// {
//     var date=new Date();
//     var hours=date.getHours();
//     var min=date.getMinutes();
//     console.log(hours + ": " + min);
// }
// Telltime();
// var date=new Date();
// var time=date.setTime(11);
// console.log(time);
// function insert(d)
// {
//     console.log(d);
// }
// var c="minhal";
// insert(c);
// function deliver()
// {
//   var a="ali";
//   return a;
// }
// var d=deliver();
// console.log(d);
// var d=prompt("Enter day and get answer");
// switch(d)
// {
//     case "monday":
//     console.log("on hai");
//     break;
//     case "tuesday":
//     console.log("off hai");
//     break;
//     default:
//     console.log("jb bhe bolo");
// }
// var i =1;
// // while(i<3)
// // {
// //   console.log(i);
// // }
// do{
//     console.log(i);
//     i++;
// }
// while(i<3);
// function popup(message)
// {
//    console.log(message);
// }
// function checkaddress(email)
// {
//     if(document.getElementById(email).value==="")
//     {
//         alert("Please enter your email");
//     }
// }
// function filltextbox()
// {
//     var cityname;
//     var num=document.getElementById("email").value;
//     switch(num)
//     {
//         case "1":
//         cityname="karachi";
//         console.log(cityname);
//         break;
//         case "2":
//         cityname="lahore";
//     }
//         document.getElementById("zip").value=cityname;
// }
// function settext()
// {
//     var msg="hi";
//     document.getElementById("content").innerHTML=msg;
// }
// function setsize()
// {
//     document.getElementById("content").style.backgroundColor="yellow";
// }
// function display()
// {
//     var data="k";
//     document.getElementById("content").innerHTML=data;
//     //document.getElementById("context").childNodes[1]=document.getElementById("context").childNodes[1];
//    // console.log(data);
// }
// function display()
// {
//     var b=document.getElementById("context");
//     var c=document.createElement("p");
//     b.appendChild(c);
//     var a=document.createTextNode("Hello World");
//     c.appendChild(a)
//     //console.log(d);
// }
// function display()
// {
// var plan={
//     color:"red",
//     height:4
// };
// var p="color" in plan ;
// var c=plan.color;
// console.log(p+c);
// }
// function display()
// {
//     if(document.getElementById('last')==="")
//     {
//         document.getElementById('last').focus();
//         return false;
//     }
// }
// try{}
// catch(err)
// {
//     alert(err);
// }
// function display()
// {
//     if(document.getElementById("last").value==="")
//     {
//         throw"Please enter";
//      ///  alert("h");
//     }
// }
var i=0;
function add()
{
    
    var input=document.getElementById("input").value;
    var list=document.getElementById("list");
    var li=document.createElement('li');
    li.setAttribute('type','none')
    var button=document.createElement('button');
    button.setAttribute("id","del"+i);
    button.innerHTML="delete";
    button.setAttribute("onClick","del(this.id)");
    if(input!="")
    {
        li.innerHTML=input   +   "&nbsp"  + "&nbsp"; 
        list.appendChild(li);
        li.appendChild(button);
        i++;
    }
}
var c;
function del(c)
{
    var but=document.getElementById(c);
    var parli=but.parentElement;
    var list=document.getElementById("list");
    list.removeChild(parli);
    i--;
}