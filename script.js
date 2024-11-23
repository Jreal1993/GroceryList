// script.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("item-input");
    const addButton = document.getElementById("add-button");
    const groceryList = document.getElementById("grocery-list");

    // Add new item to the list
    addButton.addEventListener("click", () => {
        const itemText = input.value.trim();

        if (itemText === "") {
            alert("Please enter an item.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = itemText;

        // Add delete button to each item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });

        listItem.appendChild(deleteButton);
        groceryList.appendChild(listItem);

        // Clear input field
        input.value = "";
    });

    // Allow adding items by pressing Enter
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
