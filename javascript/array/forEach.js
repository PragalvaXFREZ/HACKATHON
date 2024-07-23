let arr=[12,23,45,363,'a'];
console.log(typeof(arr[3]));
arr.forEach((value)  =>
    {
        if (value==String)
            {
                console.log("hello");
            }
            else
            console.log("pello");
    });
arr.forEach((value) => {
    if(value===String)
        {
    value=1;
        }
        else
        value=value-value;
    console.log(value);
    
});
