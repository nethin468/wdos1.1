
function displaySubscriptions() {
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
    const subscriptionList = document.getElementById('subscriptionList');
    subscriptionList.innerHTML = '';
    subscriptions.forEach(email => {
      const li = document.createElement('li');
      li.textContent = email;
      subscriptionList.appendChild(li);
    });
  }
  
 
  window.onload = displaySubscriptions;
  