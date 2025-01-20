document.addEventListener("DOMContentLoaded", async () => {
  const categoriesContainer = document.getElementById("categories-container");
  const addCategoryBtn = document.getElementById("add-category-btn");

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
        document.getElementById(
          "navbar-member-name"
        ).textContent = `Hi, ${user.name}`;
        document.getElementById("member-image").src =
          user.photo || "default-image.jpg";

        // Ensure user is a member
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

  // Handle API response errors
  async function handleAPIResponse(response) {
    if (response.status === 401 || response.status === 403) {
      alert("Unauthorized access. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/public/authentication/login.html";
      return null;
    }
    return response.ok ? await response.json() : null;
  }

  // Fetch categories from the backend
  async function fetchCategories() {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return (await handleAPIResponse(response)) || [];
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  // Render categories on the page
  async function renderCategories() {
    const categories = await fetchCategories();
    categoriesContainer.innerHTML = ""; // Clear existing content
    categories.forEach((category) => {
      const categoryCard = document.createElement("div");
      categoryCard.classList.add("category-card");
      categoryCard.innerHTML = `
        <h3>${category.name}</h3>
        <button class="view-items-btn" data-id="${category._id}">View Items</button>
        <button class="update-btn" data-id="${category._id}">Update</button>
        <button class="delete-btn" data-id="${category._id}">Delete</button>
      `;
      categoriesContainer.appendChild(categoryCard);
    });
  }

  // Add a new category
  async function addCategory(categoryName) {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: categoryName }),
      });

      const result = await handleAPIResponse(response);
      if (result) {
        alert("Category added successfully!");
        renderCategories();
      }
    } catch (error) {
      console.error("Error adding category:", error);
    }
  }

  // Update an existing category
  async function updateCategory(categoryId, newCategoryName) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/categories/update/${categoryId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name: newCategoryName }),
        }
      );

      const result = await handleAPIResponse(response);
      if (result) {
        alert("Category updated successfully!");
        renderCategories();
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  }

  // Delete a category
  async function deleteCategory(categoryId) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/categories/delete/${categoryId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await handleAPIResponse(response);
      if (result) {
        alert("Category deleted successfully!");
        renderCategories();
      }
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  // Show a confirmation dialog
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

      const confirmYes = document.getElementById("confirm-yes");
      const confirmNo = document.getElementById("confirm-no");

      const cleanup = () => {
        confirmYes.removeEventListener("click", onYes);
        confirmNo.removeEventListener("click", onNo);
        document.body.removeChild(modal);
      };

      const onYes = () => {
        resolve(true);
        cleanup();
      };

      const onNo = () => {
        resolve(false);
        cleanup();
      };

      confirmYes.addEventListener("click", onYes);
      confirmNo.addEventListener("click", onNo);
    });
  }

  // Handle add, update, and delete actions
  addCategoryBtn.addEventListener("click", () => {
    const categoryName = prompt("Enter new category name:");
    if (categoryName) {
      addCategory(categoryName);
    }
  });

  categoriesContainer.addEventListener("click", async (e) => {
    const target = e.target;
    const categoryId = target.getAttribute("data-id");

    if (target.classList.contains("delete-btn")) {
      const confirmed = await showConfirmationDialog(
        "Are you sure you want to delete this category?"
      );
      if (confirmed) {
        deleteCategory(categoryId);
      }
    } else if (target.classList.contains("update-btn")) {
      const newCategoryName = prompt("Enter new category name:");
      if (newCategoryName) {
        updateCategory(categoryId, newCategoryName);
      }
    } else if (target.classList.contains("view-items-btn")) {
      // Redirect to items page with the selected category ID as a query parameter
      window.location.href = `/frontend/src/memberboard-pages/items.html?category=${categoryId}`;
    }
  });

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

  // Initial actions
  await fetchUserData();
  renderCategories();
});
