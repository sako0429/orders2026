document.addEventListener('DOMContentLoaded', function () {
  // Get the current date
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.toLocaleString('default', { month: 'long' }).toLowerCase(); // e.g., 'september'

  // Get the page name from the URL (assumes the page name corresponds to the month)
  const pageName = window.location.pathname.split('/').pop().split('.').shift().toLowerCase();

  // Convert current day to a two-digit string (e.g., '01')
  const dayString = currentDay.toString().padStart(2, '0');

  // Get all the day links
  const dayLinks = document.querySelectorAll('.day-link');

  dayLinks.forEach(link => {
    // Highlight the link for today's date ONLY IF the current month matches the page
    if (link.textContent === dayString && currentMonth === pageName) {
      link.classList.add('highlight');
    }

    // Fetch the file and check its size (this applies to all links)
    fetch(link.href, { method: 'HEAD' })
      .then(response => {
        const fileSize = response.headers.get('Content-Length');

        // Add the class 'has-content' for files larger than 0 bytes
        if (fileSize > 0) {
          link.classList.add('has-content');
        }
      })
      .catch(error => {
        console.error('Error fetching file:', error);
      });
  });
});





