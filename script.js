document.getElementById('signup-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  
  try {
    const response = await fetch('/api/signup', {  // Adjust endpoint if needed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    alert(result.message || 'Sign-up successful!');
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error processing your request.');
  }
});
