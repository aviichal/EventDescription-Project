document.addEventListener('DOMContentLoaded', function () {
    // Event details
    const event = {
        title: 'Data Analytics and Azure Innovations Summit',
        datetime: 'August 15, 2024 10:00 AM',
        location: 'Tech Convention Center, Silicon Valley',
        description: 'Unlock the Power of Data Analytics for Events. Join us for an insightful event on data analytics for event planning and execution. Learn how to measure event success, collect valuable insights, and leverage data to increase attendance and engagement.',
        speaker: 'Dr. John Doe, Data Scientist',
        registrationLink: 'https://www.example.com/register'
    };

    // Update HTML content with event details
    document.getElementById('event-title').innerText = event.title;
    document.getElementById('event-datetime').innerText = event.datetime;
    document.getElementById('event-location').innerText = event.location;
    document.getElementById('event-description').innerText = event.description;
    document.getElementById('speaker-info').innerText = event.speaker;
    document.getElementById('registration-link').href = event.registrationLink;

    // Countdown timer
    const countdownTimer = document.getElementById('countdown-timer');
    const eventDate = new Date(event.datetime).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (timeLeft < 0) {
            clearInterval(interval);
            countdownTimer.innerText = 'Event has started!';
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
