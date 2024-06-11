const colors = ["green","red", "yellow","blue ","pink","grey","brown"]
const click = document.getElementById("click");
const container = document.getElementById("container");
let btn = document.getElementById("btn");
const  randomnumber = getrandomnnumber();
let clr = document.getElementById("clr");

function getrandomnnumber(){
    return Math.floor(Math.random() * colors.length);
}
click.addEventListener("click", function(){
    const random = getrandomnnumber();
    container.style.backgroundColor = colors[random];
    clr.textContent =colors[random];
    
});
