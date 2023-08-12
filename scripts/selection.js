function Selection(){
    document.getElementById("Time_worst").innerText="O(N^2)";
    document.getElementById("Time_avg").innerText="Θ(N^2)";
    document.getElementById("Time_best").innerText="Ω(N^2)";

    document.getElementById("space_worst").innerText="O(1)";
    c_delay=0;

    for(var i=0;i<array_size-1;i++){
        div_update(divs[i],divs_size[i],"red");
        index_min=i;
        for(var j=i+1;j<array_size;j++){
            div_update(divs[j],divs_size[j],"yellow");

            if(divs_size[j]<divs_size[index_min]){
                if(index_min!=i){
                    div_update(divs[index_min],divs_size[index_min],"blue");
                }
                index_min=j;
                div_update(divs[index_min],divs_size[index_min],"red");
            }
            else{
                div_update(divs[j],divs_size[j],"blue");
            }
        }
        if(index_min!=1){
            var temp=divs_size[index_min];
            divs_size[index_min]=divs_size[i];
            divs_size[i]=temp;

            div_update(divs[index_min],divs_size[index_min],"red");
            div_update(divs[i],divs_size[i],"red");
            div_update(divs[index_min],divs_size[index_min],"blue");
        }
        div_update(divs[i],divs_size[i],"green");
    }
    div_update(divs[i],divs_size[i],"green");//Color update

    enable_buttons();
}