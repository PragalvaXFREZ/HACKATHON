let num1,num2;
function multiply(num1,num2)
{
    let mul;

    for(let j=num1;j<=num2;j++)
        for(let i=1;i<=10;i++)
        {
            mul=j*i;
            console.log(`${i} x ${j} = ${i * j}\n`);
        }
}
multiply(2,8);

