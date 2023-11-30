

function givePositive(str) {
          var arr3=[];
          var arr4=[];
           for (let i of str) {
                   arr3.push(Number(i));
                   }
                 for(let i of arr3){
                     if(i!==NaN && i>0){
                         arr4.push(i);
                         
                         }}
                     if(arr4.length===0){
                         return `Not Found`;
                         
                         }else{
                             return arr4;
                             
                             
                             }            
          }
         var str=prompt("Enter a string: ");
           var s=str.split(" ");
         console.log(givePositive(s));
       
  