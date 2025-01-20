document.addEventListener("DOMContentLoaded", async () => {
  const API_BASE_URL = "http://localhost:5000"; // Replace with your backend API URL
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You need to log in first.");
    window.location.href = "/public/authentication/login.html";
    return;
  }

  // Fetch user data and update sidebar
  async function fetchUserName() {
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
        ).textContent = `${user.name}`;
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
  await fetchUserName();

  // Select input fields and buttons
  const fullNameInput = document.querySelector(
    'input[placeholder="Full Name"]'
  );
  const phoneInput = document.querySelector('input[placeholder="Phone"]');
  const emailInput = document.querySelector('input[placeholder="Email"]');

  // Select buttons
  const saveButton = document.getElementById("saveButton");
  const cancelButton = document.getElementById("cancelButton");

  // Profile photo upload
  const photoUploadInput = document.getElementById("photoUpload");
  const profilePhotoPreview = document.getElementById("profilePhotoPreview");

  // Fetch user data from the database and populate fields
  async function fetchUserData() {
    try {
      const response = await fetch(`${API_BASE_URL}/settings/setting`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const user = await response.json();

        // Populate input fields with user data
        fullNameInput.value = user.name || "";
        phoneInput.value = user.phone || "";
        emailInput.value = user.email || "";
        profilePhotoPreview.src = user.photo || "../../src/img/user.png";
      } else {
        alert("Failed to fetch user data.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  // Handle photo upload and preview
  profilePhotoPreview.addEventListener("click", () => {
    photoUploadInput.click(); // Trigger the hidden file input
  });

  photoUploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        profilePhotoPreview.src = event.target.result; // Update the preview
      };

      reader.readAsDataURL(file);
    }
  });

  // Save Changes Button
  saveButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Validate input
    if (!fullNameInput.value || !phoneInput.value || !emailInput.value) {
      alert("Please fill in all the fields.");
      return;
    }

    // Save the values
    const updatedUserInfo = {
      name: fullNameInput.value.trim(),
      phone: phoneInput.value.trim(),
      email: emailInput.value.trim(),
      photo: profilePhotoPreview.src, // Save the photo as a Base64 string
    };

    try {
      const response = await fetch(`${API_BASE_URL}/settings/setting`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUserInfo),
      });

      if (response.ok) {
        alert("Your changes have been saved successfully!");
      } else {
        alert("Failed to save changes.");
      }
    } catch (error) {
      console.error("Error updating user info:", error);
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

  // Cancel Button Click Event
  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    fetchUserData(); // Re-fetch and reset the fields to original values
  });

  // Fetch user data on page load
  await fetchUserData();
});
