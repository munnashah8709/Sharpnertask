document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const fruitInput = document.getElementById("fruit-to-add");
    const filterInput = document.getElementById("filter");
    const fruitsList = document.querySelector(".fruits");
  
    // Add the description input using DOM Manipulation
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("placeholder", "Enter fruit description...");
    form.insertBefore(descriptionInput, form.querySelector("button"));
  
    // Handle adding fruit with description
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const fruitName = fruitInput.value.trim();
      const description = descriptionInput.value.trim();
  
      if (fruitName === "" || description === "") {
        alert("Please enter both fruit name and description.");
        return;
      }
  
      // Create a new list item with the fruit name and description
      const li = document.createElement("li");
      li.classList.add("fruit");
      li.innerHTML = `${fruitName} <button class="delete-btn">x</button>`;
  
      // Create a paragraph for the description (italics)
      const p = document.createElement("p");
      p.style.fontStyle = "italic";
      p.textContent = description;
      li.appendChild(p);
  
      fruitsList.appendChild(li);
  
      // Clear the input fields
      fruitInput.value = "";
      descriptionInput.value = "";
  
      // Add delete functionality
      li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
      });
    });
  
    // Filter functionality
    filterInput.addEventListener("input", function() {
      const filterText = filterInput.value.toLowerCase();
      const fruits = document.querySelectorAll(".fruits li");
  
      fruits.forEach(function(fruit) {
        const fruitName = fruit.firstChild.textContent.toLowerCase().trim();
        const description = fruit.querySelector("p").textContent.toLowerCase().trim();
  
        // Check if either fruit name or description matches the filter
        if (fruitName.includes(filterText) || description.includes(filterText)) {
          fruit.style.display = "list-item";
        } else {
          fruit.style.display = "none";
        }
      });
    });
  });
  