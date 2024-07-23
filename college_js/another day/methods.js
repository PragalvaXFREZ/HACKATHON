let userName= 
{
    fullName: "Pragalva Sapkota",
    age: 18,
    address:"kathmandu",
    getFullName:function()
    {
        console.log(this.fullName);
    },
    getAge :() =>
        {
            console.log(userName.age)
        }
};
userName.getAge();
userName.getFullName();
