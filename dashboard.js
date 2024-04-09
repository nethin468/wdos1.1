// Retrieve the array from local storage
const subscriptionsString = localStorage.getItem('newsletterSubscriptions');

// Check if there are subscriptions stored in local storage
if (subscriptionsString) {
    // Parse the JSON string into an array
    const subscriptions = JSON.parse(subscriptionsString);
    
    // Get the textarea element
    const textarea = document.getElementById('newsletterTextarea');

    // Set the value of the textarea to the subscriptions array joined by newline characters
    textarea.value = subscriptions.join('\n');
} else {
    console.log('No newsletter subscriptions found in local storage.');
}
