
function subscribeToNewsletter(email) {
 
    let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
  

    if (subscriptions.includes(email)) {
      alert('You are already subscribed to our newsletter!');
      return;
    }
  
    subscriptions.push(email);
  
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
    alert('Thank you for subscribing to our newsletter!');
  }
  
  document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value.trim();
    subscribeToNewsletter(email);
  });
  