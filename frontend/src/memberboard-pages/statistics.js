document.addEventListener("DOMContentLoaded", async () => {
  const timeFilter = document.getElementById("time-filter");
  const benefitedNeedersElem = document
    .getElementById("benefited-needers")
    .querySelector("span");
  const totalRequestsElem = document
    .getElementById("total-requests")
    .querySelector("span");
  const acceptedRequestsElem = document
    .getElementById("accepted-requests")
    .querySelector("span");
  const rejectedRequestsElem = document
    .getElementById("rejected-requests")
    .querySelector("span");

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
          window.location.href = "/unauthorized.html";
        }
      } else {
        console.error("Failed to fetch user data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  await fetchUserData();

  // Fetch archive statistics from the backend
  async function fetchArchivedRequests(filter = "weekly") {
    try {
      const response = await fetch(
        `${API_BASE_URL}/statistics/?filter=${filter}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch archived requests");

      return await response.json(); // Return the statistics directly
    } catch (error) {
      console.error("Error fetching archived requests:", error);
      return {
        totalRequests: 0,
        collectedRequests: 0,
        deletedRequests: 0,
      };
    }
  }

  // Update the statistics display
  async function renderStatistics(filter = "weekly") {
    const stats = await fetchArchivedRequests(filter);

    // Update the UI with the fetched statistics
    benefitedNeedersElem.textContent = stats.collectedRequests;
    totalRequestsElem.textContent = stats.totalRequests;
    acceptedRequestsElem.textContent = stats.collectedRequests;
    rejectedRequestsElem.textContent = stats.refusedRequests;
  }

  // Handle filter change and update statistics
  timeFilter.addEventListener("change", (e) => {
    const filterValue = e.target.value;
    renderStatistics(filterValue);
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

  // Initial rendering of statistics (default: weekly)
  await renderStatistics("weekly");
});
