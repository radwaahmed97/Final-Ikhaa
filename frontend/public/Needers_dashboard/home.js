document.addEventListener("DOMContentLoaded", async () => {
  const API_BASE_URL = "http://localhost:5000";
  const notificationBtn = document.getElementById("notificationBtn");
  const notificationDropdown = document.getElementById("notificationDropdown");
  const notificationList = document.getElementById("notificationList");
  const notificationBadge = document.getElementById("notificationBadge");
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to log in first.");
    window.location.href = "/public/authentication/login.html";
    return;
  }

  const currentPage = window.location.pathname.split("/").pop();

  // Fetch user data and update sidebar
  async function fetchUserData() {
    try {
      const response = await fetch(`${API_BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const user = await response.json();
        console.log(user);
        document.getElementById("member-name").textContent = `${user.name}`;
        document.getElementById("member-image").src =
          user.photo || "default-image.jpg";

        if (user.role !== "needer") {
          alert("Unauthorized access. Redirecting...");
          window.location.href = "/unauthorized.html";
        }
      } else {
        console.error("Failed to fetch user data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  // Fetch user data and update page on load
 await fetchUserData();

  if (currentPage === "home.html") {
    // Fetch and display categories
   const fetchCategories = async () => {
      fetch(`${API_BASE_URL}/categories`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((categories) => {
          const categoryList = document.querySelector("#categories-list");
          categoryList.innerHTML = "";
          categories.forEach((category) => {
            const categoryItem = document.createElement("li");
            const categoryLink = document.createElement("a");
            categoryLink.href = "#";
            categoryLink.textContent = category.name;
            categoryLink.addEventListener("click", (e) => {
              e.preventDefault();
              fetchItemsForCategory(category._id);
            });
            categoryItem.appendChild(categoryLink);
            categoryList.appendChild(categoryItem);
          });
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
          alert("Failed to load categories. Please try again.");
        });
    };

    await fetchCategories();
  } 



  // Fetch and display items for a selected category
  const fetchItemsForCategory = (categoryId) => {
    const contentArea = document.querySelector(".items-container");
    contentArea.innerHTML = "<p>Loading items for category</p>";

    fetch(`${API_BASE_URL}/items/categories/${categoryId}/items`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch items. Status: " + response.status);
        }
        return response.json();
      })
      .then((items) => {
        contentArea.innerHTML = "";
        if (!items || items.length === 0) {
          contentArea.innerHTML = "<p>No items available in this category.</p>";
          return;
        }

        items.forEach((item) => {
          const itemElement = document.createElement("div");
          itemElement.className = "item";
          itemElement.innerHTML = `
          <div class="item-details">
            <img src="${item.photo}" alt="${item.name}" class="item-photo">
            <h3>${item.name}</h3>
            <p>${item.description || "No description available."}</p>
            <p>Available Quantity: <span class="available-quantity" data-item-id="${
              item._id
            }">${item.quantity}</span></p>
            <input type="number" min="1" max="${
              item.quantity
            }" value="1" class="quantity-input" data-item-id="${item._id}" />
            <button class="add-to-basket-btn" data-item-id="${
              item._id
            }">Add to Basket</button>
            </div>
          `;
          contentArea.appendChild(itemElement);
        });

        // Add event listener to quantity input fields
        document.querySelectorAll(".add-to-basket-btn").forEach((button) => {
          button.addEventListener("click", (e) => {
            const itemId = e.target.getAttribute("data-item-id");
            const quantityInput = document.querySelector(
              `.quantity-input[data-item-id="${itemId}"]`
            );
            const quantity = parseInt(quantityInput.value);

            if (quantity > 0) {
              addToBasket(itemId, quantity);
            } else {
              alert("Please select a valid quantity.");
            }
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        contentArea.innerHTML =
          "<p>There are no items in this category yet.</p>";
      });
  };

  // Fetch and display notifications when clicked on notifications button
  async function fetchNotifications() {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const { success, notifications } = await response.json();

        notificationList.innerHTML = "";

        if (success && notifications.length > 0) {
          notifications.forEach((notification) => {
            const ListItem = document.createElement("li");
            ListItem.textContent = notification.message;
            ListItem.classList.add("notification-item");
            notificationList.appendChild(ListItem);
          });

          notificationBadge.classList.remove("hidden");
        } else {
          notificationBadge.classList.add("hidden");
          const noNotificationsMessage = document.createElement("li");
          noNotificationsMessage.textContent =
            "You don't have any notifications.";
          noNotificationsMessage.classList.add("no-notification");
          notificationList.appendChild(noNotificationsMessage);
        }
      } else {
        console.error(
          "Failed to fetch notifications. Status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  }

  // Mark all notifications as read when clicking on the notifications button
  async function markNotificationsAsRead() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/notifications/mark-as-read`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        console.error(
          `Failed to mark notifications as read. Status: ${response.status}`
        );
        return;
      }

      const { success, message } = await response.json();

      if (success) {
        console.log(message || "Notifications marked as read successfully.");
        // Update the notification badge
        notificationBadge.classList.add("hidden");
      } else {
        console.warn("Marking notifications as read did not succeed.");
      }
    } catch (error) {
      console.error("Error marking notifications as read:", error);
    }
  }

  // Handle dropdown visibility and fetch notifications
  notificationBtn.addEventListener("click", async () => {
    // Toggle dropdown visibility
    if (notificationDropdown.classList.contains("hidden")) {
      notificationDropdown.classList.remove("hidden");
      await fetchNotifications(); // Fetch notifications when dropdown is shown
      await markNotificationsAsRead(); // Mark notifications as read
    } else {
      notificationDropdown.classList.add("hidden");
    }
  });

  // Add an item to the basket
  const addToBasket = (itemId, quantity) => {
    if (!itemId || quantity <= 0) {
      alert("Invalid item ID or quantity.");
      return;
    }

    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    fetch(`${API_BASE_URL}/items/${itemId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((item) => {
        if (!item || !item._id) {
          alert("Item not found.");
          return;
        }

        // Log item for debugging
        console.log(item);

        const existingItem = basket.find((i) => i._id === item._id);

        if (existingItem) {
          const newQuantity = existingItem.quantity + quantity;

          if (newQuantity > item.quantity) {
            alert("Insufficient quantity in stock.");
            return;
          }

          existingItem.quantity = newQuantity;
        } else {
          if (quantity > item.quantity) {
            alert("Insufficient quantity in stock.");
            return;
          }

          // Check if photo exists before adding to basket
          const itemPhoto = item.photo ? item.photo : ""; // Default to empty string if photo is not present

          basket.push({
            _id: item._id,
            name: item.name,
            description: item.description,
            quantity,
            photo: itemPhoto,
          });
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        alert(`${quantity} x ${item.name} added to basket!`);

        // Update the available quantity in the UI
        updateAvailableQuantityInUI(item._id, item.quantity - quantity);
      })
      .catch((error) => {
        console.error("Error adding item to basket:", error);
        alert("Something went wrong while adding the item to the basket.");
      });
  };

  // Update available quantity in the UI
  const updateAvailableQuantityInUI = (itemId, newQuantity) => {
    const availableQuantityElement = document.querySelector(
      `.available-quantity[data-item-id="${itemId}"]`
    );
    if (availableQuantityElement) {
      availableQuantityElement.textContent = newQuantity;
      if (newQuantity <= 0) {
        availableQuantityElement.textContent = "Out of stock";
      }
    }
  };

  // Redirect to basket page
  document.querySelector(".basket").addEventListener("click", () => {
    window.location.href = "basket.html";
  });

  //handling logout from client side
  document.getElementById("logoutBtn").addEventListener("click", () => {
    fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.removeItem("token");
          window.location.href = "/public/landingPage.html";
        } else {
          alert("Failed to logout. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
        alert("An error occurred. Please try again.");
      });
  });
});
