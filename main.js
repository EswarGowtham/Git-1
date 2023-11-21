// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter = document.getElementById('filter');

// // Form submit event
// form.addEventListener('submit', addItem);
// // Delete event
// itemList.addEventListener('click', removeItem);
// // Filter event
// filter.addEventListener('keyup', filterItems);

// // Add item
// function addItem(e){
//   e.preventDefault();

//   // Get input value
//   var newItem1 = document.getElementById('item1').value;
  
//   var newItem2 = document.getElementById('item2').value;

//   // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem1+" " +newItem2));

//   // Create del button element
//   var deleteBtn = document.createElement('button');
//   var editBtn = document.createElement('button');
//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//   editBtn.className="btn  btn-sm float-right edit"
//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));
//   editBtn.appendChild(document.createTextNode('Edit'));
//   // Append button to li
//   li.appendChild(deleteBtn);
//   li.appendChild(editBtn)
//   // Append li to list
//   itemList.appendChild(li);
// }

// // Remove item
// function removeItem(e){
//   if(e.target.classList.contains('delete')){
//     if(confirm('Are You Sure?')){
//       var li = e.target.parentElement;
//       itemList.removeChild(li);
//     }
//   }
// }

// // Filter Items
// function filterItems(e){
//   // convert text to lowercase
//   var text = e.target.value.toLowerCase();
//   // Get lis
//   var items = itemList.getElementsByTagName('li');
//   // Convert to an array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// }


// ********************************************New Task**********************************

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
  
      var users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      document.getElementById('my-form').reset();
  
      // Display a success message
      showMessage('User added successfully', 'success');
  
      // Re-render the user list
      renderUsers();
    }
  });
  
  function renderUsers() {
    var usersList = document.getElementById('users');
    usersList.innerHTML = '';
  
    var users = JSON.parse(localStorage.getItem('users')) || [];
  
    users.forEach(function (user, index) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(`Name: ${user.name}, Email: ${user.email}`));
      var editButton = document.createElement('button');
      editButton.innerText = 'Edit';
      editButton.addEventListener('click', function () {
      editUser(index);
      });

    li.appendChild(editButton);
      var deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function () {
        // Call the delete function with the index of the user to be deleted
        deleteUser(index);
      });
  
      li.appendChild(deleteButton);
      usersList.appendChild(li);
    });
  }
  
  // Function to delete a user by index
  function deleteUser(index) {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
  
    localStorage.setItem('users', JSON.stringify(users));
    renderUsers();
  }
  function editUser(index) {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var userToEdit = users[index];

    document.getElementById('name').value = userToEdit.name;
    document.getElementById('email').value = userToEdit.email;
  
    users.splice(index, 1);
  
    // Update the local storage with the modified users array
    localStorage.setItem('users', JSON.stringify(users));
    renderUsers();
  }
  renderUsers();
  