function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
     const email =  event.target.email.value;
    const phone = event.target.phone.value;

    const userDetails = { username, email, phone };
    let users = JSON.parse(localStorage.getItem("users")) || [];
      const editingIndex = event.target.dataset.editingIndex;

    if (editingIndex) {
        users[editingIndex] = userDetails;
          event.target.removeAttribute("data-editing-index");
    } else {
         users.push(userDetails);
    }
      localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

function displayUsers() {
      const userList = document.querySelector("ul");
    if (!userList) return;

    userList.innerHTML = '';
       const users =  JSON.parse(localStorage.getItem("users")) || [];
    users.forEach((user, index) => {
        const li = document.createElement('li');
         li.textContent =  `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone} `;
        const deleteButton = document.createElement('button');
           deleteButton.textContent = 'Delete';
     deleteButton.addEventListener('click', () => {
            deleteUser(index);
        });
        const editButton = document.createElement('button');
           editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            editUser(index);
        });

        li.appendChild(deleteButton);
        li.appendChild(editButton);
          userList.appendChild(li);
    });
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
       users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

function editUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
     const user =  users[index];
    document.querySelector('#username').value = user.username;
       document.querySelector('#email').value = user.email;
    document.querySelector('#phone').value = user.phone;
 const form =   document.querySelector('form');
     form.setAttribute("data-editing-index", index);
}

document.addEventListener("DOMContentLoaded", displayUsers);