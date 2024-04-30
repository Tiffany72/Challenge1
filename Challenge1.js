let array = []
for (let i = 1; i<=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        array[i-1] = "BIGBANG"
    }

    else if(i % 5 == 0) { 
        array[i-1] = "BANG"
     } 

     else if(i % 3 == 0){
        array[i-1] = "BIG"
     }

     else{
        array[i-1] = i
     }
}

console.log(array)