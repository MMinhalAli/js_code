var i=0;
var add = () =>
{
    let input=document.getElementById('input').value;
    let list=document.getElementById('list');
    let li=document.createElement('li');
    let btn=document.createElement('button');
    btn.setAttribute("id","del"+i);
    btn.innerHTML="Delete";
    btn.setAttribute("onClick","del(this.id)");
    if(input!="")
    {
        li.innerHTML=input + "&nbsp" ;
        list.appendChild(li);
        li.appendChild(btn);
        i++;
    }   
}
var inp;
var del = (inp) =>
{
    let btn=document.getElementById(inp);
    let parli=btn.parentElement;
    let list=document.getElementById('list');
    list.removeChild(parli);
    i--;
}