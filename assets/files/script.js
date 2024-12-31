function updateTimeAndDate() {
    const now = new Date();
    
    // Format time
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const am_pm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const formattedTime = `${hours}:${minutes} ${am_pm}`;

    // Format date
    const day = now.getDate();
    const month = now.toLocaleString('en-GB', { month: 'short' }).toUpperCase();
    const year = now.getFullYear();
    
    const suffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };
    const formattedDate = `${day}${suffix(day)} ${month} ${year}`;

    // Update DOM
    document.getElementById('time').textContent = formattedTime;
    document.getElementById('date').textContent = formattedDate;
}

// Update every second
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate(); // Initial call to display immediately




  // Get the input element
  // Function to handle the search operation
  function search(query) {
    
  }

  const searchInput = document.getElementById('search-input');


  // Add an event listener for the 'focus' event
  searchInput.addEventListener('focus', function() {
    // Add an event listener for the 'keydown' event
    searchInput.addEventListener('keydown', function(event) {
      // Check if the pressed key is Enter (key code 13)
      if (event.keyCode === 13) {
        // Prevent the default action to avoid form submission
        event.preventDefault();
        // Get the value from the input field
        const query = searchInput.value;
        // Call the search function with the input value
        search(query);
      }
    });
  });

  // Add an event listener for the 'blur' event
  searchInput.addEventListener('blur', function() {
    // Remove the 'keydown' event listener when the input loses focus
    searchInput.removeEventListener('keydown', function(event) {
      // Check if the pressed key is Enter (key code 13)
      if (event.keyCode === 13) {
        // Prevent the default action to avoid form submission
        event.preventDefault();
        // Get the value from the input field
        const query = searchInput.value;
        // Call the search function with the input value
        search(query);
      }
    });
  });