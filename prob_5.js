<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

function mergeArrays(arr1,arr2){
      var arr3=[];
      var arr4=[];
         for(let i of arr1){
             arr3.push(Number(i));   
        }
        for(let i of arr2){
             arr4.push(Number(i));   
        }
        var conct=arr3.concat(arr4);
            return conct.sort();

        }
        var ar1=prompt("Enter arr1: ");
        var ar2=prompt("Enter arr2: ");
        var splt1=ar1.split('');
        var splt2=ar2.split('');
        console.log(mergeArrays(splt2,splt2));


    </script>
</body>
</html>