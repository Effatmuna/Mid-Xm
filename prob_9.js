<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
     function parseString(str){
    var count1=0;
    var count2=0;
    var sum=0;
    var arr3=[];
    var arr4=[];
    
      for(let i of str){
          if(Number(i)){
              arr3.push(Number(i));
              count1++;
                   
            }else{
                count2++;
                arr4.push(i);
                }
          
    }
   if(arr3.length===str.length){
       for(let i of arr3){
           sum=sum+i;}
       
      }else if(arr4.length===str.length){
            arr4.toString();
          }
          
    if(sum>0){
        return sum;
        
        }else if(arr4.length===str.length){
           return  arr4.join(' ');
        }
        else{
            return arr4 +" "+ arr3;
        }
 
    
}
var num=prompt("Enter array values: ");
var splt=num.split(" ");
console.log(parseString(splt));
    </script>
    
</body>
</html>