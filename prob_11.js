

function findMissingNumber(arr){
   for(let i=1;i<=n;i++){
    arr2.push(i);
    }
 var difference = arr2.filter(x => arr.indexOf(x) === -1);
 return difference;
   
}
    
   var n=Number(prompt("Enter a number: "));
  var arr1=[];
  var arr2=[];
  
for(let i=1;i<n;i++){
    var num=Number(prompt("Enter numbers: "));
    arr1.push(num);
}
 

console.log(findMissingNumber(arr1));
