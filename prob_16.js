
       
function drawCircle(str){
    var arr=[];
    var sum=0;
    for(let i of str){
        arr.push(Number(i));   
    }
    for(let i of arr){
        sum=sum+i;}
  return (sum/arr.length).toFixed(2);
  
}

var s=prompt("Enter a string: ");
var arr1=s.split('');
console.log(drawCircle(arr1));

