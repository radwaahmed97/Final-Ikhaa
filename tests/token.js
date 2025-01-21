let tokens = {
  needer: null,
  member: null,
};

// Function to set the token for a specific role
const setToken = (role, newToken) => {
  if (role === "needer" || role === "member") {
    tokens[role] = newToken;
  } else {
    throw new Error("Invalid role. Must be 'needer' or 'member'.");
  }
};

// Function to get the token for a specific role
const getToken = (role) => {
  if (role === "needer" || role === "member") {
    return tokens[role];
  } else {
    throw new Error("Invalid role. Must be 'needer' or 'member'.");
  }
};

module.exports = { setToken, getToken };
