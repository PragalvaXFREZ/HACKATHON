let arr1=[1,23,4,5,6,-22,0];
function compareNum(num)
{
   if(num%2==0)
    {
        return num;
    }
    else
    return 0;
}
let sorted=arr1.sort(compareNum);
console.log(arr1);
console.log(sorted);