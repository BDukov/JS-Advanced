function daysInMonth(month, year){
    let date = new Date(year, month, 0).toDateString().split(' ');
    console.log(date[2]);
}
daysInMonth(1, 2012);