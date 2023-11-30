<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function reverseString(str) {
           
        
           var s=str.split(" ");
           var min=s[0].length;
          
           for (let i of s) {
               if (i.length<min) return i;
               }
            
          }
         let str=prompt("Enter a string: ");
         console.log(reverseString(str));
       
      
    </script>
</body>
</html>