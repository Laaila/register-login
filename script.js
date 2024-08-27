fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("#user-table tbody");

    data.users.forEach((user) => {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = user.id;
      row.appendChild(idCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);

      const ActionCell = document.createElement("td");
      const editSpan = document.createElement("span");
      editSpan.textContent = "Edit";
      ActionCell.appendChild(editSpan);

      // Create the "Delete" span
      const deleteSpan = document.createElement("span");
      deleteSpan.textContent = "Delete";
      ActionCell.appendChild(deleteSpan);

      row.appendChild(ActionCell);

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Fetch user data from the JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    window.users = data.users;
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });


// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email == "" || password == "") {
    alert("Input must not be empty");
  } else {
    const user = window.users.find(
      (u) => u.email === email && u.password === password
    );

    const message = document.getElementById("message");
    message.classList.add("error-msg");
    if (user) {
      // Login successful
      message.textContent = `Welcome, ${user.name}!`;
      window.location.href = "dashboard.html";
    } else {
      // Login failed
      message.textContent = "Invalid Email or password.";
    }
  }
}


// Register function
function register() {
  const newUsername = document.getElementById("new-username").value;
  const newPassword = document.getElementById("new-password").value;
  const email = document.getElementById("email").value;

  if (newUsername == "" || newPassword == "" || email == "") {
    alert("Input must not be empty");
  } else {
    const existingEmail = window.users.find((u) => u.email === email);
    if (existingEmail) {
      document.getElementById("register-message").textContent =
        "Email is already taken.";
      return;
    }

    window.users.push({
      name: newUsername,
      password: newPassword,
      email: email,
    });

    window.location.href = "dashboard.html";
  }
}
