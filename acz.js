
function acr(array){
    var arr3=[];
   for(let i of array){
       if(i!='a' && i!='c' && i!='z'){
            arr3.push(i);
           }
       
     }
     
     return arr3.join('');

}

    

var str=prompt("Enter a string: ");
console.log(acr(str));