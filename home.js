// Function to calculate and display countdown
function countdown() {
    const eventDate = new Date('2024-04-03T00:00:00');
    const currentDate = new Date();

    const difference = eventDate - currentDate;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('countdown-timer').innerHTML = `
            <div>${days} <span>Days</span></div>
            <div>${hours} <span>Hours</span></div>
            <div>${minutes} <span>Minutes</span></div>
            <div>${seconds} <span>Seconds</span></div>
        `;
    } else {
        document.getElementById('countdown-timer').innerHTML = 'The event has started!';
    }
}

// Call the countdown function
countdown();

// Update the countdown every second
setInterval(countdown, 1000);
