const form = document.getElementById("myForm");
const commentInput = document.getElementById("user-input");
const commentError = document.getElementById("commentError");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateComment(commentInput.value)) {
    commentError.textContent =
      "Comment must be at least 5 characters long and contain only letters, numbers, and common punctuation.";
    commentInput.classList.add("error");
  } else {
    commentError.textContent = "";
    commentInput.classList.remove("error");
    var userInput = document.getElementById("user-input").value;
    var newDiv = document.createElement("div");
    newDiv.textContent = userInput;
    var uesrName = document.createElement("h4");
    uesrName.textContent = "You";

    var container = document.getElementById("user-input-container");
    container.classList.add("single-comment");
    container.appendChild(uesrName);
    container.appendChild(newDiv);

    document.getElementById("user-input").value = "";

    var successful = document.getElementById("successful-msg");

    successful.classList.add("active");

    setTimeout(() => {
      successful.classList.remove("active");
    }, 3000);
  }
});

function validateComment(comment) {
  // Validate comment format
  const commentRegex = /^[a-zA-Z0-9\s.,!?'"-]{5,}$/;
  return commentRegex.test(comment);
}
