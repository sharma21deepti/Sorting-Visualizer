function Bubble(){
    document.getElementById("Time_worst").innerText="O(N^2)";
    document.getElementById("Time_avg").innerText="Θ(N^2)";
    document.getElementById("Time_best").innerText="Ω(N)";

    document.getElementById("space_worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],divs_size[j],"yellow");//Color update

            if(divs_size[j]>divs_size[j+1])
            {
                div_update(divs[j],divs_size[j], "red");//Color update
                div_update(divs[j+1],divs_size[j+1], "red");//Color update

                var temp=divs_size[j];
                divs_size[j]=divs_size[j+1];
                divs_size[j+1]=temp;

                div_update(divs[j],divs_size[j], "red");//Height update
                div_update(divs[j+1],divs_size[j+1], "red");//Height update
            }
            div_update(divs[j],divs_size[j], "blue");//Color update
        }
        div_update(divs[j],divs_size[j], "green");//Color update
    }
    div_update(divs[0],divs_size[0],"green");
    enable_buttons();

}
