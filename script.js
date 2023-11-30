
        function addTask() {
            var taskInput = document.getElementById("taskInput");
            var taskList = document.getElementById("taskList");

            if (taskInput.value.trim() === "") {
                alert("Please enter a task");
                return;
            }

            var taskItem = document.createElement("li");
            taskItem.className = "taskItem";

            var taskText = document.createElement("span");
            taskText.textContent = taskInput.value;

            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "deleteButton";
            deleteButton.onclick = function() {
                taskList.removeChild(taskItem);
            };

            taskItem.appendChild(taskText);
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    