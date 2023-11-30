
        function calculateStrikeRate(scrored,balls){
           var sum=(45 / 30) * 100;
           return sum.toFixed(2);

        }
        let score=Number(prompt("Enter any score: "));
        let balls=Number(prompt("Enter the balls: "));
        let calculate=calculateStrikeRate(score,balls);
        console.log(calculate);
