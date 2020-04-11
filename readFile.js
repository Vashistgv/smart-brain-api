const fs = require('fs')

var floor = 0

const read = fs.readFile( './input.txt' , (err , data)=>{
    
    
    const input = data.toString()
    console.time('santa')
console.log("funcinp" , readData(input))
console.timeEnd('santa')
return readData(input)



} )


function readData(data) {
    console.time('santa-')
    for(let item in data ){
          
            if(data[item] === '('){
                floor++ 
             }else {
                 
                floor-- 
                 
                 } 
           }
        
           console.timeEnd('santa-')
    return floor   
}


