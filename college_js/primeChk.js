let a=9,count=0;
function primeHora(number)
{
    let count=0;
    for (let i = 2; i < number; i++) 
        {
            if(number%i==0)
                {
                    count++;
                    break;
                }
        }
        if(count==1)
            {
            console.log("composite");
            }
            else
            {
                console.log("prime");
            }
}
primeHora(100);
primeHora(7);

