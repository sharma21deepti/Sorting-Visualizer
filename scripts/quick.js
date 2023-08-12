function Quick(){
    document.getElementById("Time_worst").innerText="O(N^2)";
    document.getElementById("Time_avg").innerText="Θ(N log N)";
    document.getElementById("Time_best").innerText="Ω(N log N)";

    document.getElementById("space_worst").innerText="O(log N)";


    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}


function quick_partition (start, end)
{
    var i = start + 1;
    var piv = divs_size[start] ;//make the first element as pivot element.
    div_update(divs[start],divs_size[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (divs_size[ j ] < piv)
            {
                div_update(divs[j],divs_size[j],"yellow");//Color update

                div_update(divs[i],divs_size[i],"red");//Color update
                div_update(divs[j],divs_size[j],"red");//Color update

                var temp=divs_size[i];
                divs_size[i]=divs_size[j];
                divs_size[j]=temp;

                div_update(divs[i],divs_size[i],"red");//Height update
                div_update(divs[j],divs_size[j],"red");//Height update

                div_update(divs[i],divs_size[i],"blue");//Height update
                div_update(divs[j],divs_size[j],"blue");//Height update

                i += 1;
            }
    }
    div_update(divs[start],divs_size[start],"red");//Color update
    div_update(divs[i-1],divs_size[i-1],"red");//Color update
    
    var temp=divs_size[start];//put the pivot element in its proper place.
    divs_size[start]=divs_size[i-1];
    divs_size[i-1]=temp;

    div_update(divs[start],divs_size[start],"red");//Height update
    div_update(divs[i-1],divs_size[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],divs_size[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
