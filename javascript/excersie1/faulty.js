// faulty calculator
// this is made using Math.random as the probability of getting numbers 1-10 when randomly generating numbers is 10%. so 10% of the time this calculator gives us faulty calculation 

let randomnum=Math.random(1,100)*100;

let x=2,y=3;
let sum,diff,multiply,expo;
if(randomnum>0 && randomnum<10)
    {
        sum=x-y;
        diff=x+y;
        multiply=x**y;
        expo=x*y;
    }

    else
    {
        sum=x+y;
        diff=x-y;
        multiply=x*y;
        expo=x**y;
    }
    console.log("sum is " + sum);
    console.log("diff is " + diff);
    console.log("multiply is " + multiply);
    console.log("expo is " + expo);

    console.log(randomnum);
    //to verify our if statement is correct or not