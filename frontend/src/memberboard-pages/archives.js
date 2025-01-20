document.addEventListener("DOMContentLoaded", async () => {
  const API_BASE_URL = "http://localhost:5000";
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to log in first.");
    window.location.href = "/public/authentication/login.html";
    return;
  }

  // Fetch user data and update navbar
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
        console.error("Failed to fetch user data. Status:", response.status);
        window.location.href = "/public/authentication/login.html"; // Redirect to login if not authorized
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      window.location.href = "/public/authentication/login.html"; // Redirect to login in case of error
    }
  }

  // Fetch user data and update page on load
  await fetchUserData();

  // Fetching all done requests from the server
  async function fetchAllDoneRequests() {
    const requestsContainer = document.querySelector(".latest-requests");
    try {
      if (!requestsContainer) {
        console.error("Requests container not found!");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/requests/done`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("API Error:", errorDetails);
        requestsContainer.innerHTML =
          "<p>Failed to fetch requests. Please try again later.</p>";
        return;
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      if (data.success && data.requests?.length) {
        requestsContainer.innerHTML = ""; // Clear any existing requests
        data.requests.forEach((request) => {
          if (!request.needer || !request._id) {
            return;
          }

          const requestDiv = document.createElement("div");
          requestDiv.classList.add("request");
          requestDiv.id = request._id;

          let itemsContent = "";
          if (Array.isArray(request.items) && request.items.length) {
            request.items.forEach((item) => {
              if (item.item && item.item.name) {
                // If the item is found, display it
                itemsContent += `<li>Item: ${item.item.name} (ID: ${item.item._id}), Quantity: ${item.quantity}</li>`;
              } else {
                // If the item is not found, display "No data found"
                itemsContent += `<li>Item: No data found for this item, maybe deleted or no more available</li>`;
              }
            });
          } else {
            itemsContent = "<li>No data available</li>"; // Handle case where there are no items
          }

          requestDiv.innerHTML = `
              <div class="request-info">
                <p><strong>Name:</strong> ${request.needer.name || "N/A"}</p>
                <p><strong>Contact:</strong> ${
                  request.needer.phone || "N/A"
                }</p>
                <p><strong>Email:</strong> ${request.needer.email || "N/A"}</p>
                <p><strong>Status:</strong> ${request.status || "N/A"}</p>
                <div class="items-list">
                  <strong>Items:</strong>
                  <ul>${itemsContent}</ul>
                </div>
              </div>
            `;

          // Create and append the Delete button
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", () =>
            handleRequestAction(request._id, "delete")
          );

          requestDiv.appendChild(deleteButton);
          requestsContainer.appendChild(requestDiv);
        });
      } else {
        requestsContainer.innerHTML =
          "<p>No requests available at the moment.</p>";
      }
    } catch (err) {
      console.error("Error fetching requests:", err);
      requestsContainer.innerHTML =
        "<p>Failed to fetch requests. Please try again later.</p>";
    }
  }

  // Fetch requests on page load
  await fetchAllDoneRequests();

  // Handle request action (delete)
  async function handleRequestAction(requestId, action) {
    try {
      // Ensure the action is delete
      if (action === "delete") {
        const endpoint = `${API_BASE_URL}/requests/archive/delete/${requestId}`;
        const method = "DELETE";

        console.log(`Making ${method} request to: ${endpoint}`);

        const response = await fetch(endpoint, {
          method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = await response.json();
        console.log("Response data:", responseData);

        if (response.ok) {
          // Successfully deleted the request, remove it from the UI
          const requestDiv = document.getElementById(requestId);
          if (requestDiv) {
            requestDiv.remove();
          }
          const message = "Request deleted successfully!";
          alert(message);
        } else {
          console.error(
            `Error from server for delete action on request ${requestId}:`,
            responseData
          );
          alert(
            `Error: ${responseData.message || "Failed to perform action."}`
          );
        }
      }
    } catch (error) {
      console.error(`Error performing delete on request ${requestId}:`, error);
      alert("An error occurred. Please try again.");
    }
  }

  // Handling logout from client side
  document.getElementById("logoutBtn").addEventListener("click", () => {
    fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
