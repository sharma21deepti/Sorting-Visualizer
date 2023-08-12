function Heap(){
    document.getElementById("Time_worst").innerText="O(N^2)";
    document.getElementById("Time_avg").innerText="Θ(N^2)";
    document.getElementById("Time_best").innerText="Ω(N^2)";

    document.getElementById("space_worst").innerText="O(1)";
    c_delay=0;

    heap_sort();
    enable_buttons();
}

function swap(i,j){
    div_update(divs[i],divs_size[i],"red");
    div_update(divs[j],divs_size[j],"red");
    var temp=divs_size[i];
    divs_size[i]=divs_size[j];
    divs_size[j]=temp;

    div_update(divs[i],divs_size[i],"red");//Height update
    div_update(divs[j],divs_size[j],"red");//Height update

    div_update(divs[i],divs_size[i],"blue");//Color update
    div_update(divs[j],divs_size[j],"blue");//Color update
}

function max_heapify(n,i){
    var large=i;
    var l=2*i+1;
    var r=2*i+2;
    if(l<n && divs_size[l]>divs_size[large]){
        if(large!=i){
            div_update(divs[large],divs_size[large],"blue");
        }
        large=l;
        div_update(divs[large],divs_size[large],"red");
    }
   if(r<n && divs_size[r]>divs_size[large]){
    if(large!=i){
        div_update(divs[large],divs_size[large],"blue");
    }
    large=r;
    div_update(divs[large],divs_size[large],"red");
   }
   if(large!=i){
    swap(i,large);
    max_heapify(n,large);
   }
}
function heap_sort(){
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],divs_size[i],"green");//Color update
        div_update(divs[i],divs_size[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(divs[i],divs_size[i],"blue");//Color update
        div_update(divs[i],divs_size[i],"green");//Color update
    }
    div_update(divs[i],divs_size[i],"green");//Color update
}