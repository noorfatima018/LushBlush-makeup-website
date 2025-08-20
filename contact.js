// contact.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('order').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields!');
      event.preventDefault(); // Prevent form submission
    } else {
      alert('Thank you for contacting us! We will get back to you soon.');
    }
  });
  