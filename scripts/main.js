var inp_as=document.getElementById("ar-size");
var array_size=inp_as.value;
var inp_gen=document.getElementById("a-generate");
var inp_speed=document.getElementById("ar-speed");
var but_algo=document.querySelectorAll(".algo button");
var divs_size=[];
var divs=[];
let margin_size;

var cont=document.getElementById("array_containers");
cont.style="display:flex; flex-direction:row";


inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);


function generate_array()
{
 cont.innerHTML="";
 for(let i=0;i<array_size;i++){
    divs_size[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
    divs[i]=document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size=0.1;
    
    divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; border:1px solid black ; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (divs_size[i]) + "%;";
 }
}


function update_array_size()
{
array_size=inp_as.value;
generate_array();
}


window.onload=update_array_size();

for(var i=0;i<but_algo.length;i++)
{
    but_algo[i].addEventListener("click",runalgo);
}

function disable_button(){
for(var i=0;i<but_algo.length;i++)
{
    but_algo[i].classList=[];
    but_algo[i].classList.add("but_locked");
    but_algo[i].disabled=true;
    inp_as.disabled=true;
    inp_gen.displayed=true;
    inp_speed.displayed=true;

}
}
function runalgo(){
    disable_button();
    this.classList.add("but_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}


