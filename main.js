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