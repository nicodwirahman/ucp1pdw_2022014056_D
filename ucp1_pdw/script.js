function updateDateTime() {
  const greetingElement = document.getElementById('greeting');
  const currentTimeElement = document.getElementById('current-time');
  const currentDateElement = document.getElementById('current-date');

  const now = new Date();
  const hours = now.getHours();

  let greeting = '';
  if (hours < 12) {
      greeting = 'Good morning';
  } else if (hours < 18) {
      greeting = 'Good afternoon';
  } else {
      greeting = 'Good evening';
  }

  const timeString = now.toLocaleTimeString('en-US');
  const dateString = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  greetingElement.textContent = greeting;
  currentTimeElement.textContent = timeString;
  currentDateElement.textContent = dateString;
}

document.addEventListener('DOMContentLoaded', function () {
  updateDateTime();
  setInterval(updateDateTime, 1000); // Update every second
});
