// 


// ******************************New Task********************************************//
document.getElementById('my-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Get user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    if (name === '' || email === '') {
      showMessage('Please fill in all fields', 'error');
    } else {
      // Create an object to represent a user
      var user = {
        name: name,
        email: email
      };
  
      // Check if local storage already has users data
      var users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Add the new user to the array
      users.push(user);
  
      // Store the updated array in local storage
      localStorage.setItem('users', JSON.stringify(users));
  
      // Clear the form fields
      document.getElementById('my-form').reset();
  
      // Display a success message
      showMessage('User added successfully', 'success');
    }
  });
  
