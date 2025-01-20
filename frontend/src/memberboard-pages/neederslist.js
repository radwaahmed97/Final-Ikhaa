document.addEventListener("DOMContentLoaded", async () => {
  const API_BASE_URL = "http://localhost:5000";
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to log in.");
    window.location.href = "/public/authentication/login.html";
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
        console.log(user); // This will log the user data to the console
        document.getElementById(
          "navbar-member-name"
        ).textContent = `Hi, ${user.name}`;
        document.getElementById("member-image").src =
          user.photo || "default-image.jpg";

        if (user.role !== "member") {
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

  // Fetch needers and render table
  async function fetchNeeders() {
    try {
      const response = await fetch(`${API_BASE_URL}/needers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        renderNeeders(data.needers);
      } else {
        alert(data.error || "Failed to fetch needers.");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching needers.");
    }
  }

  function renderNeeders(needers) {
    const tableBody = document.getElementById("needers-table-body");
    tableBody.innerHTML = "";
    needers.forEach((needer) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${needer.name}</td>
        <td>${needer.email}</td>
        <td>${needer.phone}</td>
        <td>
          <button class="view-btn" onclick="viewNeeder('${needer._id}')">View</button>
          <button class="delete-btn" onclick="deleteNeeder('${needer._id}')">Delete</button>
        </td>`;
      tableBody.appendChild(row);
    });
  }

  // Delete needer
  window.deleteNeeder = async (id) => {
    if (!(await showConfirmationDialog("Are you sure?"))) return;
    try {
      const response = await fetch(`${API_BASE_URL}/needers/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        alert("Needer deleted.");
        fetchNeeders();
      } else {
        alert("Failed to delete needer.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // View needer details
  window.viewNeeder = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/needers/${id}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const needer = await response.json();
        displayNeederDetails(needer);
      } else {
        const error = await response.json();
        alert(error.message || "Failed to fetch needer details.");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching needer details.");
    }
  };

  // Function to display needer details in a modal
  function displayNeederDetails(needer) {
    // Create modal element
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button" onclick="closeModal()">×</span>
        <h2>Needer Details</h2>
        <p><strong>Name:</strong> ${needer.name}</p>
        <p><strong>Email:</strong> ${needer.email}</p>
        <p><strong>Phone:</strong> ${needer.phone}</p>
        <p><strong>Photo:</strong> <img src="${needer.photo}" alt="${needer.name}'s photo" style="max-width: 100px;"></p>
      </div>
    `;
    document.body.appendChild(modal);

    // Show modal
    modal.style.display = "block";

    // Close modal function
    window.closeModal = () => {
      modal.remove();
    };
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

  // Function to show a custom confirmation dialog
  function showConfirmationDialog(message) {
    return new Promise((resolve) => {
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
        resolve(true);
        modal.remove();
      });

      document.getElementById("confirm-no").addEventListener("click", () => {
        resolve(false);
        modal.remove();
      });
    });
  }

  await fetchNeeders();
});
