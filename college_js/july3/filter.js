let arr=[66,2,9,4,5];
function reverseArr(arr)
{
let newarr=[];
let i=0;
for(let j=arr.length-1;j>=0;j--)
    { 
        newarr[arr.length - j]=arr[j];
    }

    console.log(newarr);
}

reverseArr(arr)


    