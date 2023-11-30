<script>


function removeDuplicates(arr){
 
  
 let uniqueArray = arr.filter((e, index) => arr.indexOf(e) === index)
 return uniqueArray;
}

var num=prompt("Enter array values: ");
var splt=num.split(" ");
console.log(removeDuplicates(splt));

</script>