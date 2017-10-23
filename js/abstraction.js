console.log('helloooooooo');

// compoundInterest() ---------------------------
// ----------------------------------------------
// Parameters:
//   principal    - the amount of money in the loan
//   rate         - interest rate percentage
//   timesPerYear - amount of times interest is compounded in a year
//   years        - amount of years it takes you to pay back the loan
function compoundInterest (principal, rate, timesPerYear, years){
  return principal * Math.pow(1 + (rate / timesPerYear), timesPerYear * years);
    // 10^3
    // 10 ** 3
    // Math.pow(10, 3)
}


console.log( Math.round(compoundInterest(35000, 0.07, 12, 5)) );


// Program that breaks down a loan by how many years it lasts
console.log('Given a $35,000 loan for a new Tesla with 7% interest, you will pay:');
for (var year = 3; year <= 10; year += 1) {
    var paybackAmount = Math.round(compoundInterest(35000, 0.07, 12, year));
    var extraAmount = paybackAmount - 35000;

    console.log('');
    console.log( 'For a loan that lasts '+ year +' YEARS you pay $'+ paybackAmount +'.' );
    console.log( '(that\'s an extra $'+ extraAmount +')');
}
