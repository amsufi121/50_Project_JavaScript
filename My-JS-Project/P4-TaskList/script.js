const taskInput = document.querySelector("#new-task input");
const taskSection = document.querySelector(".tasks");

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

document.querySelector("#push").onclick = function () {
  createTask();
};

function createTask() {
  if (taskInput.value.trim().length === 0) {
    alert("The task field is blank. Enter a task name and try again");
  } else {
    taskSection.innerHTML += `
      <div class="task">
        <label class="taskname">
          <input type="checkbox" class="check-task" onclick="updateTask(this)">
          <p>${taskInput.value}</p>
        </label>
        <div class="delete">
          delete
        </div>
      </div>`;

    let current_task = document.querySelectorAll(".delete");
    for (let i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove(); // ✅ fixed typo
      };
    }

    taskSection.offsetHeight >= 300
      ? taskSection.classList.add("overflow")
      : taskSection.classList.remove("overflow");
  }
}

function updateTask(task) {
  let taskItem = task.parentElement.lastElementChild; // ✅ fixed typo
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}
