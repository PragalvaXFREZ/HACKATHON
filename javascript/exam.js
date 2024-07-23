const namer = (userId)=>{
    user = [{
        name:"Dipan",
        id:1312,
        email:'dipan.silwal@deerwalk.edu.np'
    },
    {
        name:"Pragalva",
        id:1318,
        email:'pragalva.sapkota@deerwalk.edu.np'
    },
    {
        name:'Raam',
        id:1433,
        email:'ram@gmail.com'
    }];
    
    
    user.forEach(element => {
        if(element.id==userId){

            let details = Object.values(element);
            let keys  = Object.keys(element)
            for (detail in details){
                console.log(`${keys[detail]}: ${details[detail]}`)
            }
            console.log('--------------')
        }
    }); 
}

namer(1312);
namer(1318);