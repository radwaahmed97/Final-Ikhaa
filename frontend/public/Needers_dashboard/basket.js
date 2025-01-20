document.addEventListener("DOMContentLoaded", async () => {
  const basket = JSON.parse(localStorage.getItem("basket")) || [];
  const basketItemsContainer = document.getElementById("basket-items");
  const totalCountElement = document.getElementById("total-count");
  const API_BASE_URL = "http://localhost:5000";
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to log in first.");
    window.location.href = "/public/authentication/login.html";
    return;
  }

  // Function to display the basket items
  const displayBasket = () => {
    if (basket.length === 0) {
      basketItemsContainer.innerHTML = "<p>Your basket is empty.</p>";
      totalCountElement.innerText = "0";
      return;
    }

    basketItemsContainer.innerHTML = ""; // Clear any existing items
    let totalCount = 0;

    basket.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("basket-item");

      // Create item details
      itemDiv.innerHTML = `
      <div class="basket-item-details">
        <img src="${item.photo || "https://via.placeholder.com/50"}" alt="${
        item.name
      }">
        
          <div class="basket-item-name">${item.name}</div>
          <div class="basket-item-quantity">Quantity: ${item.quantity}</div>
          <div class="divider"></div>
          <button class="cancel-item-btn" data-index="${index}">Remove Item from Basket</button>
        </div>
        
      `;

      basketItemsContainer.appendChild(itemDiv);

      // Update total item count
      totalCount += item.quantity;
    });

    // Update the total item count in the UI
    totalCountElement.innerText = totalCount;
  };

  // Display basket items on page load
  await displayBasket();

  // Cancel individual item logic
  basketItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-item-btn")) {
      const index = event.target.getAttribute("data-index");
      basket.splice(index, 1); // Remove the item from the basket array
      localStorage.setItem("basket", JSON.stringify(basket)); // Update localStorage
      displayBasket(); // Refresh the basket display
    }
  });

  // Clear entire basket logic
  document.getElementById("clear-basket-btn").addEventListener("click", () => {
    localStorage.removeItem("basket"); // Clear the basket from localStorage
    basket.length = 0; // Clear the basket array
    displayBasket(); // Refresh the basket display
  });

  // Request button logic
  document.getElementById("request-btn").addEventListener("click", async () => {
    // Check if basket is empty
    if (basket.length === 0) {
      alert(
        "Your basket is empty. Please add items to your basket before submitting a request."
      );
      return;
    }

    // Map basket items to the required structure for the API
    const items = basket.map((item) => ({
      itemId: item._id, // Ensure this matches your backend expected field
      quantity: item.quantity,
    }));

    try {
      // Send POST request to the API
      const response = await fetch(`${API_BASE_URL}/requests/submit`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Add the token from localStorage
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({ items }), // Send items as JSON body
      });

      // Parse the response
      const data = await response.json();

      if (response.ok && data.success) {
        // Clear the basket on successful submission
        localStorage.removeItem("basket"); // Clear localStorage
        basket.length = 0; // Reset the basket array
        alert(
          "Your request has been submitted successfully. We will process it shortly."
        );
        displayBasket(); // Refresh the basket display
      } else {
        // Handle errors from the backend
        console.error("Backend error:", data);
        alert(data.message || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error submitting request:", error);
      alert(
        "An error occurred while submitting your request. Please try again."
      );
    }
  });
}); // End of DOMContentLoaded event listener
