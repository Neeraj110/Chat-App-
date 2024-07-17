// Exporting the extractTime function for use in other modules
export function extractTime(dateString) {
    // Creating a new Date object from the provided date string
    const date = new Date(dateString);
    
    // Extracting and formatting the hours
    const hours = padZero(date.getHours());
    
    // Extracting and formatting the minutes
    const minutes = padZero(date.getMinutes());
    
    // Returning the formatted time string in "HH:MM" format
    return `${hours}:${minutes}`;
  }
  
  // Helper function to pad single-digit numbers with a leading zero
  function padZero(number) {
    // Converting the number to a string and padding it to ensure it has at least 2 characters
    return number.toString().padStart(2, "0");
  }
  
