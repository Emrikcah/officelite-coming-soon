const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//set date to 30 days into the future
const today = new Date();
const futureDate = new Date(today);
futureDate.setDate(futureDate.getDate() + 30);

//this will be used to display a msg to the user upon timer expiration(officelite 2.0)
const footerCountdown = document.querySelector(".footer__countdown");
//this will be used to loop through the elements and display timer values on the screen
const items = footerCountdown.querySelectorAll(".footer__countdown-amount");

const month = futureDate.getMonth();
const span = document.querySelector("[data-date]");

//display the future date to the user
span.innerHTML = `${months[month]} ${futureDate.getDate()}, ${futureDate.getFullYear()}`;

//future time in milliseconds
const futureTime = futureDate.getTime();

//subtract future time from todays time
function getRemainingTime() {
   const today = new Date().getTime();

   //get the difference of futureTime - today
   const t = futureTime - today;

   //get the values in milliseconds
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinute = 60 * 1000;

   let days = Math.floor(t / oneDay);
   //dividing would give you all the hours. get the remainder with % then divide
   let hours = Math.floor((t % oneDay) / oneHour);
   let minutes = Math.floor((t % oneHour) / oneMinute);
   let seconds = Math.floor((t % oneMinute) / 1000);

   displayTimerValues(days,hours,minutes,seconds);
}

//display timer values
function displayTimerValues(d,h,m,s){
   const values = [d,h,m,s];

   //loop through the array and access the values passed to this function and display
   items.forEach((item,i) => {
      item.innerHTML = values[i];
   });
}

setInterval(getRemainingTime,1000);

getRemainingTime();

// TODO: officelite 2.0  add text  to handle timer expiration,local storage...maybe,form validation
