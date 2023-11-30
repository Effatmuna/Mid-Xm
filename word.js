
function countWords(arr){
var arr3=[];
var count=0;
for(let i of arr){
    if(i){
        count=count+1;
        }
     }
    

return count;
}
var str=prompt("Enter a string: ");
var splt=str.split(" ");
console.log(countWords(splt));
