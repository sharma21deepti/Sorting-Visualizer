let speed=1000;
var inp_as=document.getElementById("ar-size"),array_size=inp_as.value;

var inp_speed=document.getElementById("ar-speed");
inp_speed.addEventListener("input",vis_speed);
function vis_speed()
{
    var array_speed=inp_speed.value;
    switch(parseInt(array_speed)){
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    delay_time=10000/(Math.floor(array_size/10)*speed);
}
var  delay_time=10000/(Math.floor(array_size/10)*speed);
var c_delay=0;


function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<but_algo.length;i++)
        {
            but_algo[i].classList=[];
            but_algo[i].classList.add("but_unselected");

            but_algo[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}