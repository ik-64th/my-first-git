function timeOfTheDay(timeString) {
    if (timeString.toLowerCase() === "morning") {
        return "Good morning!";
    } else if (timeString.toLowerCase() === "afternoon") {
        return "Good afternoon!";
    } else if (timeString.toLowerCase() === "evening") {
        return "Good evening!";
    } else {
        return "Invalid input. Please enter 'morning', 'afternoon', or 'evening'.";
    }
}

// Example usage:
console.log(timeOfTheDay("morning"));  // Output: Good morning!
//console.log(timeOfTheDay("afternoon"));  // Output: Good afternoon!
//console.log(timeOfTheDay("evening"));  // Output: Good evening!
//console.log(timeOfTheDay("night"));  // Output: Invalid input. Please enter 'morning', 'afternoon', or 'evening'.
