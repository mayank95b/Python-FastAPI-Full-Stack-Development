document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Here you can perform validation or send the data to a server
  // For simplicity, let's just log the values to the console
  console.log("Username: " + username);
  console.log("Email: " + email);
  console.log("Password: " + password);
});