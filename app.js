var divMonth = document.getElementById('month');
var divYear = document.getElementById('year');

var month = moment().format('MMMM');
var year = moment().format('YYYY');

divMonth.innerText = month;
divYear.innerText = year;
