function getSunday(previousWeeks = 1) {
  return new Date(
    new Date().setDate(
      new Date().getDate() + (7 - new Date().getDay()) - 7 * previousWeeks
    )
  );
}

// this function can be used as following -
//assuming that sunday is last day of the week

console.log(getSunday()); // get sunday of previous week
console.log(getSunday(7)); //get sunday before 7 weeks
console.log(getSunday(0)); //get sunday of this week
console.log(getSunday(-1)); // get sunday of upcoming week
