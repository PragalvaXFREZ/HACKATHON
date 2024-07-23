let arr=[1,2,10,20,23,24,5];

function sorting(e)
{
    
     if(e%10==0)
        {
            return true;
        }
            else
            {
                return false;
            }
}
let sorted=arr.filter(sorting);
console.log(sorted);