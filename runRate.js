
function requiredRunRate(currentRun,requiredRun,over){
   var balls=over*6;
   var runRate=(requiredRun/balls);
   

return runRate.toFixed(2);
}

console.log(requiredRunRate(120,50,20));
