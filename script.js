// 1. Set the date you are counting down to (Year, Month - 1, Day, Hour, Minute)
// Note: January is 0, February is 1, ..., December is 11
const targetDate = new Date(2026, 7, 21, 0, 0, 0).getTime();

// 2. Update the timer every 1 second (1000ms)
setInterval(function() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  // Math conversions
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Show result in HTML
  document.getElementById("timer").innerHTML = 
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);

// 3. Simple click event for the surprise button
// Replace your old surprise button click event with this:
document.getElementById("surpriseBtn").addEventListener("click", function() {
  window.location.href = "music.html";
});