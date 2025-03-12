const menuList = document.getElementById("menu");
const cartTable = document.getElementById("cart");
const noItemsRow = document.getElementById("no-items");

const menuItems = [
    { name: "Hamburger", price: 2.99 },
    { name: "Cheeseburger", price: 3.99 },
    { name: "Cheese Pizza", price: 3.99 },
    { name: "Pepperoni Pizza", price: 4.99 },
    { name: "Sausage Pizza", price: 4.99 },
    { name: "Caesar Salad", price: 3.99 },
    { name: "Fries", price: 1.99 },
    { name: "Onion Rings", price: 2.49 }
];

let cart = [];


function updateCart() {

    let rows = cartTable.getElementsByTagName("tr");
    for (let i = rows.length - 1; i >= 0; i--) {
        if (rows[i].id !== "no-items") {
            rows[i].remove();
        }
    }

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;

        const priceCell = document.createElement("td");
        priceCell.textContent = item.price.toFixed(2); 

        const requestCell = document.createElement("td");
        const requestTextarea = document.createElement("textarea");
        requestTextarea.value = item.specialRequest || '';
        requestTextarea.addEventListener("input", function(e) {
            item.specialRequest = e.target.value;
        });
        requestCell.appendChild(requestTextarea);

        const actionCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            cart.splice(cart.indexOf(item), 1);
            updateCart();
        });
        actionCell.appendChild(removeButton);

        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(requestCell);
        row.appendChild(actionCell);

        cartTable.appendChild(row);
    }

    if (cart.length === 0) {
        noItemsRow.style.display = "table-row";
    } else {
        noItemsRow.style.display = "none";
    }

    const total = calculateTotal();
    const totalRow = document.createElement("tr");
    const totalCell1 = document.createElement("td");
    totalCell1.textContent = "Total";
    const totalCell2 = document.createElement("td");
    totalCell2.colSpan = "3";
    totalCell2.textContent = total;

    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    cartTable.appendChild(totalRow);
}
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }

    return total.toFixed(2);
}

function populateMenu() {
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const listItem = document.createElement("li");
        listItem.textContent = item.name + " - " + item.price;

        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.dataset.name = item.name;
        addButton.dataset.price = item.price;
        addButton.addEventListener("click", function() {
            const cartItem = { 
                name: item.name, 
                price: item.price, 
                specialRequest: "" 
            };
            cart.push(cartItem);
            updateCart();
        });

        listItem.appendChild(addButton);
        menuList.appendChild(listItem);
    }
}

populateMenu();
