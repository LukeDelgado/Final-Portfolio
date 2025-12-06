

// Get the date
const date = new Date();
const hour = date.getHours();

// Change data-theme to dark based on the time of day
if (hour < 6 || hour >= 18) 
    document.documentElement.dataset.theme = 'dark';