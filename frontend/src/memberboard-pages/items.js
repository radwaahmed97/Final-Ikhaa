document.addEventListener("DOMContentLoaded", async () => {
  const itemsContainer = document.getElementById("items-container");
  const addItemBtn = document.getElementById("add-item-btn");
  const API_BASE_URL = "http://localhost:5000";
  const token = localStorage.getItem("token");

  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("category");

  if (!categoryId) {
    alert("Category ID is missing!");
    window.location.href =
      "/frontend/src/memberboard-pages/donationsitems.html";
    return;
  }

  if (!token) {
    alert("You need to log in first.");
    window.location.href = "/public/authentication/login.html";
    return;
  }

  async function fetchUserData() {
    try {
      const response = await fetch(`${API_BASE_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const user = await response.json();
        document.getElementById(
          "navbar-member-name"
        ).textContent = `Hi, ${user.name}`;
        document.getElementById("member-image").src =
          user.photo || "default-image.jpg";

        if (user.role !== "member") {
          alert("Unauthorized access. Redirecting...");
          window.location.href = "/public/authentication/login.html";
        }
      } else {
        const error = await response.json();
        console.error("Failed to fetch user data:", error.message);
        alert(error.message || "Error fetching user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  async function handleAPIResponse(response) {
    if (!response.ok) {
      const error = await response.json();
      alert(error.error || "An error occurred.");
      return null;
    }
    return await response.json();
  }

  async function fetchItems() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/items/categories/${categoryId}/items`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return (await handleAPIResponse(response)) || [];
    } catch (error) {
      console.error("Error fetching items:", error);
      return [];
    }
  }

  async function renderItems() {
    const items = await fetchItems();
    itemsContainer.innerHTML = "";

    if (items.length === 0) {
      itemsContainer.innerHTML = "<p>No items available in this category.</p>";
      return;
    }

    items.forEach((item) => {
      const itemCard = document.createElement("div");
      itemCard.classList.add("item-card");
      itemCard.innerHTML = `
        <img src="${item.photo || "default-item.jpg"}" alt="${
        item.name
      }" class="item-photo" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Quantity: ${item.quantity}</p>
        <button class="update-btn" data-id="${item._id}">Update</button>
        <button class="delete-btn" data-id="${item._id}">Delete</button>
      `;
      itemsContainer.appendChild(itemCard);
    });
  }

  async function addItem(itemData) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/items/categories/${categoryId}/items/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(itemData),
        }
      );

      const result = await handleAPIResponse(response);
      if (result) {
        alert("Item added successfully!");
        renderItems();
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  async function updateItem(itemId, updatedData) {
    try {
      const response = await fetch(`${API_BASE_URL}/items/update/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });

      const result = await handleAPIResponse(response);
      if (result) {
        alert("Item updated successfully!");
        renderItems();
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  }

  async function deleteItem(itemId) {
    try {
      const response = await fetch(`${API_BASE_URL}/items/delete/${itemId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const result = await handleAPIResponse(response);
      if (result) {
        alert("Item deleted successfully!");
        renderItems();
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  addItemBtn.addEventListener("click", () => {
    const itemName = prompt("Enter item name:");
    const itemDescription = prompt("Enter item description:");
    const itemPhoto = prompt("Enter item photo URL (optional):");
    const itemQuantity = prompt("Enter item quantity:");

    if (itemName && itemDescription && itemQuantity) {
      addItem({
        name: itemName,
        description: itemDescription,
        photo: itemPhoto || null,
        quantity: parseInt(itemQuantity, 10),
        addedBy: localStorage.getItem("userId"),
      });
    }
  });

  itemsContainer.addEventListener("click", async (e) => {
    const target = e.target;
    const itemId = target.getAttribute("data-id");

    if (target.classList.contains("delete-btn")) {
      showConfirmationDialog("Are you sure you want to delete this item?", () =>
        deleteItem(itemId)
      );
    } else if (target.classList.contains("update-btn")) {
      const newItemName = prompt("Enter new item name:");
      const newItemDescription = prompt("Enter new item description:");
      const newItemPhoto = prompt("Enter new item photo URL (optional):");
      const newItemQuantity = prompt("Enter new item quantity:");

      if (newItemName && newItemDescription && newItemQuantity) {
        updateItem(itemId, {
          name: newItemName,
          description: newItemDescription,
          photo: newItemPhoto || null,
          quantity: parseInt(newItemQuantity, 10),
        });
      }
    }
  });

  function showConfirmationDialog(message, onConfirm) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <p>${message}</p>
        <button id="confirm-yes">Yes</button>
        <button id="confirm-no">No</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("confirm-yes").addEventListener("click", () => {
      onConfirm();
      document.body.removeChild(modal);
    });

    document.getElementById("confirm-no").addEventListener("click", () => {
      document.body.removeChild(modal);
    });
  }

  await fetchUserData();
  await renderItems();
});
