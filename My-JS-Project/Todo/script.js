const form = document.getElementById("form"); // form
const input = document.getElementById("input-task"); // input field
const list = document.getElementById("todo-list"); // ul list

form.addEventListener("submit", function (e) {
  e.preventDefault(); // form submit page reload na kare
  const text = input.value.trim();
  if (text !== "") {
    addTask(text);
    input.value = ""; // clear input
  }
});

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  // Toggle complete on click
  // span.addEventListener("click", () => {
  //   span.classList.toggle("completed");
  // });

  // Delete button
  const btn = document.createElement("button");
  btn.textContent = "Delete";

  btn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btn);
  list.appendChild(li);
}
