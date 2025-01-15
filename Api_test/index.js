let editingUser = null; // Track the user being edited

function handleFormSubmit(event) {
  event.preventDefault();

  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  if (editingUser) {
    // If a user is being edited, make a PUT request to update the user
    axios.put(
      `https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData/${editingUser._id}`,
      userDetails
    )
      .then((response) => {
        // Display the updated user on the screen
        updateUserOnScreen(response.data);
        // Clear the form
        clearForm();
      })
      .catch((error) => {
        console.log(error);
      });

    editingUser = null; // Reset editingUser after updating
  } else {
    // If no user is being edited, make a POST request to add a new user
    axios.post(
      "https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData",
      userDetails
    )
      .then((response) => {
        // Display the user on the screen
        displayUserOnScreen(response.data);
        // Clear the form
        clearForm();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.setAttribute("data-id", userDetails._id); // Set a custom attribute with the user ID

  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    axios.delete(
      `https://crudcrud.com/api/5519d12fca344fd6b10665aea264519d/appointmentData/${userDetails._id}`
    )
      .then(() => {
        userList.removeChild(event.target.parentElement);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  editBtn.addEventListener("click", function (event) {
    // Prefill the form with user details for editing
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
    
    // Change the form action to update (display "Update" on submit)
    document.getElementById("submit-btn").textContent = "Update";
    editingUser = userDetails; // Set the editing user
  });
}

function updateUserOnScreen(updatedUser) {
  const userList = document.querySelector("ul");
  const userItem = userList.querySelector(`[data-id='${updatedUser._id}']`);

  userItem.textContent = `${updatedUser.username} - ${updatedUser.email} - ${updatedUser.phone}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);
}

function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("submit-btn").textContent = "Submit"; // Reset the button to "Submit"
}

// Do not touch code below
module.exports = handleFormSubmit;
