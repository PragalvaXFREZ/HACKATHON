function freq(string){
    let words = string.split(' ')
    let newObj = {}
    
    for (word in words){
        let keys = Object.keys(newObj)
        newObj[words[word]] = 0  
    }
    for(word in words){
        newObj[words[word]] += 1


    }
    console.log(newObj)
}

freq("My name is dipan and i live in kalanki My name is is")

// Timlai task you can do anythinf with this code bujha kasari kam garcha cant open browser 
// Basically vs code bahek kei use garna na pai 

// 3 2 1 GOOO