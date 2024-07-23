function freq(string){
    let words = string.split(' ')
    let newObj = {}
    
    for (index in words){
        //  Object.keys(newObj);
        newObj[words[index]] = 0    
    }
    for(index in words){
        newObj[words[index]] += 1
        
    }
    console.log(newObj)
}

freq("My name is dipan and i*********** live in kalanki My name is is")

// Timlai task you can do anythinf with this code bujha kasari kam garcha cant open browser 
// Basically vs code bahek kei use garna na pai 

// 3 2 1 GOOO