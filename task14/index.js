function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const userDetails = { username, email, phone };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();

}

function displayUsers() {
    const userList = document.querySelector("ul");
    if (!userList) return;
    userList.innerHTML = '';
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
        userList.appendChild(li);
    });
}
document.addEventListener("DOMContentLoaded", displayUsers);
module.exports = handleFormSubmit; 
