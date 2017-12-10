today = new Date();

// Get current date
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDay = today.getDate();
console.log("Today is: " + "" + currentDay + " " + currentMonth + " " + currentYear);

document.getElementById('dateId').addEventListener('change', function(){
    
    const input = this.value;
    const birthday = new Date(input);
    const birthYear = birthday.getFullYear();
    const birthMonth = birthday.getMonth();
    const birthDay = birthday.getDate();
    
//    document.getElementById('date').innerHTML = "Birthday: " + birthDay + " " + birthMonth + " " + birthYear;
    
    //const birthYear = 2014;
//const birthMonth = 10;
//const birthDay = 16;

document.getElementById("calculateButton").onclick = function(){
    
const daysInMonthInLeapyear = [31,29,31,30,31,30,31,31,30,31,30,31];
const daysInMonthInNotLeapyear = [31,28,31,30,31,30,31,31,30,31,30,31];

// Calculate age in days

console.log("Loop1: CurrentDay: " + currentDay);
console.log("Loop1: birthDay: " +  birthDay);

if (currentDay < birthDay){

// Borrow days from current month
  currentDay = currentYear % 4 == 0 ? currentDay + daysInMonthInLeapyear[birthMonth]: currentDay + daysInMonthInNotLeapyear[birthMonth];
// Calculate age in days
  ageInDays = currentDay - birthDay;
  console.log("LOOP1:Age in days: " + ageInDays);


//   Return the bollowed month
  currentMonth = currentMonth - 1;
  
    if (currentMonth < birthMonth){
//     Borrow a year from currentYear
      currentMonth = currentMonth + 12;
//     console.log("Current month: " + currentMonth)
    
//     Caculate age in month
      ageInMonth = currentMonth - birthMonth;
      console.log("Loop1: currentMonth: " + currentMonth);
      console.log("Loop1: birthMonth: " + birthMonth);
      console.log("LOOP1:Age in months: "+ ageInMonth);
      
      // Calculate age in year
//   Deduct the borrowed year
      
      currentYear = currentYear - 1;
      console.log("Loop1: " + currentYear)
      ageInYear = currentYear - birthYear;
      
      console.log("Loop1:Age in years: " + ageInYear)
    
//     
    
  } else{
    // Caculate age in month
    console.log("Loop2:currentMonth: " + currentMonth)
    console.log("Loop2:birthMonth: " + birthMonth)
    ageInMonth = currentMonth - birthMonth;
    console.log("LOOP2: Age in months: "+ ageInMonth)
     
     // Calculate age in year
    console.log("Loop2: " + currentYear)
    ageInYear = currentYear - birthYear;
      
    console.log("Loop1:Age in years: " + ageInYear)
     
  }
    

  
// console.log(ageInDays)
}else {
//  calculate age in days
    ageInDays = currentDay - birthDay;
    console.log("Loop2: Age in days: " + ageInDays);
  
//  Calculate age in months
    console.log("currentMonth: " + currentMonth);
    console.log("birthMonth: " + birthMonth);
  
  if (currentMonth < birthMonth){
    
//  Borrow a year from currentMonth
    currentMonth = currentMonth + 12;
    
//  console.log("Current month: " + currentMonth)
    
//  Caculate age in month
    ageInMonth = currentMonth - birthMonth;
    console.log("Loop3: Age in months: "+ ageInMonth)
      

//  Deduct the bollowed year
    currentYear = currentYear - 1;
    
    
//     
    
  } else{
    //     Caculate age in month
     ageInMonth = currentMonth - birthMonth;
     console.log("Loop4:Age in months: "+ ageInMonth)
  }
    
// Calculate age in year
      ageInYear = currentYear - birthYear;
      
      console.log("Loop4: Age in years: " + ageInYear)
  
}

//console.log("Today your age is: " + ageInYear + " years " + ageInMonth + " months " + ageInDays + " days ")

document.getElementById('age').innerHTML = "Today your age is: " + ageInYear + " years " + ageInMonth + " months " + ageInDays + " days ";
};

document.getElementById("resetButton").onclick = function(){
    location.reload();
}
    
});
