
function getMaxProduct(arr){
 var arr2=[];
 var arr3=[];
 var mul;
 for(let i of arr){
     arr2.push(Number(i));
     }
    for(let i=0;i<arr2.length;i++){
        for(let j=i+1;j<arr2.length;j++){
            mul=arr2[i]*arr2[j];
            arr3.push(mul);
            
        }}
   
    return Math.max(...arr3);
}
 
var num=prompt("Enter array values: ");
var splt=num.split(" ");
console.log(getMaxProduct(splt));
