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

//set date to 30 days into the future
const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(futureDate.getDate() + 30) ;



const month = futureDate.getMonth();
const day = futureDate.getDay();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
const span = document.querySelector("[data-date]");

const  showDate = `${months[month]} ${futureDate.getDate()}, ${futureDate.getFullYear()}`;


span.innerHTML = showDate;


