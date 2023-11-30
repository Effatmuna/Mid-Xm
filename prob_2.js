
function CountPairs(str){
    var count=0;
    var arr3=[];
    var arr4=[];
    
      for(let i of str){
          if(Number(i)){
              arr3.push(i);
            }      
    }
    for(let i of arr3){
        if(i%2===0){
            count=count+1;
            }
        }
    if(count>=1){
        return count;
        
        }else{
            return 0;  
            } 
}
var num=prompt("Enter array values: ");
var splt=num.split('');
console.log(CountPairs(splt));
