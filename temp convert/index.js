const textbox = document.getElementById("textbox");
const tofah = document.getElementById("tofah");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");
 let temp;

 function convert(){
    if(tofah.checked){
       temp = Number(textbox.value);
       temp = temp*9 / 5 +32;
       result.textContent = temp.toFixed(1) +  "fah" ;
     }
    else if(tocel.checked){
        temp = Number(textbox.value);
       temp = (temp-32)* (5/9);
       result.textContent = temp.toFixed(1) +  "cel" ;
       
    }
    else{
        result.textContent = "select a unit";
    }

 }