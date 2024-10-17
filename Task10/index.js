
function addFruit(event) {
    event.preventDefault(); 

    const inputField = document.getElementById("fruit-to-add");
    const fruitName = inputField.value.trim();

    if (fruitName) {
        const newFruitItem = document.createElement("li");
        newFruitItem.className = "fruit"; 
        const textNode = document.createTextNode(fruitName);
        newFruitItem.appendChild(textNode);
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.innerText = "x";
        deleteButton.addEventListener("click", () => {
            newFruitItem.remove(); 
        });

        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.innerText = "Edit";
        editButton.addEventListener("click", () => {
            const newName = prompt("Edit fruit name:", fruitName);
            if (newName && newName.trim() !== "") {
                textNode.nodeValue = newName; 
            }
        });

        newFruitItem.appendChild(deleteButton);
        newFruitItem.appendChild(editButton);
        document.querySelector(".fruits").appendChild(newFruitItem);
        inputField.value = "";
    } else {
        alert("Please enter a fruit name.");
    }
}

function setupDeleteButtons() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const fruitItem = button.parentElement; 
            fruitItem.remove(); 
        });
    });
}

setupDeleteButtons();

document.querySelector("form").addEventListener("submit", addFruit);
