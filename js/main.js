document.addEventListener("DOMContentLoaded", function () {
    // Get the current month and convert it to lowercase for comparison
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const currentMonthIndex = new Date().getMonth();
    const currentMonth = monthNames[currentMonthIndex];

    document.getElementById(currentMonth).classList.add('light');

});
