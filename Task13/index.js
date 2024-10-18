function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const userDetails = {
      username: username,
      email: email,
      phone: phone,
    };
    localStorage.setItem("User Details", JSON.stringify(userDetails));
  }
  
  module.exports = handleFormSubmit;
  