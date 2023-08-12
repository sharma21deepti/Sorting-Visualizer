function Merge(){
    document.getElementById("Time_worst").innerText="O(N^2)";
    document.getElementById("Time_avg").innerText="Θ(N^2)";
    document.getElementById("Time_best").innerText="Ω(N^2)";

    document.getElementById("space_worst").innerText="O(1)";

    c_delay=0;
    merge_partition(0,array_size-1);
    enable_buttons();
}

function merge_sort(start,mid,end)
{
    var p=start,q=mid+1;

    var Arr=[],k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=divs_size[q++];
            div_update(divs[q-1],divs_size[q-1],"red");//Color update
        }
        else if(q>end)
        {
            Arr[k++]=divs_size[p++];
            div_update(divs[p-1],divs_size[p-1],"red");//Color update
        }
        else if(divs_size[p]<divs_size[q])
        {
            Arr[k++]=divs_size[p++];
            div_update(divs[p-1],divs_size[p-1],"red");//Color update
        }
        else
        {
            Arr[k++]=divs_size[q++];
            div_update(divs[q-1],divs_size[q-1],"red");//Color update
        }
    }
    for(var t=0;t<k;t++)
    {
        divs_size[start++]=Arr[t];
        div_update(divs[start-1],divs_size[start-1],"green");//Color update
    }
}
function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],divs_size[mid],"yellow");//Color update

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}