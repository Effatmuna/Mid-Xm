
    function findPrimeNumbers(arr){
var arr3=[];
for(let i=2;i<=100;i++){
    if(i%2!==0){
        arr3.push(i);
        
        }
    }
arr = arr.filter((num) => {
  for (var i = 2; i <=Math.sqrt(num); i++) {
    if (num % i === 0) 
       return false;
  }
  return true;
});
return arr;
}
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findPrimeNumbers(numArray));
