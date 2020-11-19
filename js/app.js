const months = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
]

const days = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
]

const date = new Date();


const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const span = document.querySelector("[data-date]");

const  showDate = `${date.getDate()},${months[month]}, ${date.getFullYear()}`;


span.innerHTML = showDate;


