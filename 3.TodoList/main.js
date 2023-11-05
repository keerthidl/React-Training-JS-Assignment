function createTask() {
    const taskInput = document.getElementById("task");
    const prioritySelect = document.getElementById("priority");
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText) {
      const taskList = document.getElementById("taskList");
      const taskItem = document.createElement("li");
      const taskPriority = document.createElement("div");
      const taskTextElement = document.createElement("div");

      taskPriority.classList.add("task-priority", `task-priority-${priority.toLowerCase()}`);
      taskTextElement.classList.add("task-text");
      taskTextElement.innerText = taskText;

      taskItem.classList.add("task-item");
      taskItem.appendChild(taskPriority);
      taskItem.appendChild(taskTextElement);

      taskList.appendChild(taskItem);

      taskInput.value = "";
    }
  }