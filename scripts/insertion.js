function Insertion(){
    document.getElementById("Time_worst").innerText="O(N^2)";
    document.getElementById("Time_avg").innerText="Θ(N^2)";
    document.getElementById("Time_best").innerText="Ω(N)";

    document.getElementById("space_worst").innerText="O(1)";
    c_delay=0;

    for(var j=0;j<array_size;j++){
        div_update(divs[j],divs_size[j],"yellow");
        var key=divs_size[j];
        var i=j-1;
        while(i>=0&& divs_size[i]>key){
            div_update(divs[i],divs_size[i],"red");
            div_update(divs[i+1],divs_size[i+1],"red");

            divs_size[i+1]=divs_size[i];

            div_update(divs[i],divs_size[i],"red");//Height update
            div_update(divs[i+1],divs_size[i+1],"red");//Height update

            div_update(divs[i],divs_size[i],"blue");//
            if(i==(j-1)){
                div_update(divs[i+1],divs_size[i+1],"yellow");//
            }
            else{
                div_update(divs[i+1],divs_size[i+1],"blue");
            }
            i-=1;
        }
        divs_size[i+1]=key;
        for(var t=0;t<j;t++){
            div_update(divs[t],divs_size[t],"green");
        }

    }
    div_update(divs[j-1],divs_size[j-1],"green");//Color update

    enable_buttons();
}