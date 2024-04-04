// Set the date for the conference
var conferenceDate = new Date("August 13, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var countdownInterval = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();
    
    // Calculate the time remaining until the conference date
    var timeRemaining = conferenceDate - now;
    
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the countdown timer
    document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the countdown is over, stop the countdown
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);
