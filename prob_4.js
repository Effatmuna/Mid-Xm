
        function reverseString(str) {
            var newString = "";
            for (var i = str.length - 1; i >= 0; i--) {
                newString += str[i];
            }
            if(newString===str){
                return true;
            }else{
                return false;
            }
        }
        let rvr=prompt("Enter a String: ");
        let reverse=reverseString(rvr);
       console.log(reverse);
  