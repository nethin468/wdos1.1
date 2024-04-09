const subscriptionsString = localStorage.getItem('newsletterSubscriptions');


if (subscriptionsString) {
   
    const subscriptions = JSON.parse(subscriptionsString);

    const textarea = document.getElementById('newsletterTextarea');

    textarea.value = subscriptions.join('\n');
} else {
    console.log('No newsletter subscriptions found in local storage.');
}
