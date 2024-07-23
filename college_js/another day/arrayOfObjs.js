let user=[{
    fullname : "A",
    age : 12,
},
{
    fullname : "A",
    age : 12,
},
{
    fullname : "A",
    age : 17,
},
];
let filterUser= user.filter((user) => user.age >=13)
console.log(filterUser.toString());
console.log(filterUser);
