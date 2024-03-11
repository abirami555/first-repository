function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(taskText);

        var deleteButton = document.createElement("span");
        deleteButton.innerHTML = " &#10006;";
        deleteButton.className = "delete";
        deleteButton.onclick = function() {
            li.remove();
        };
        li.appendChild(deleteButton);

        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

function clearCompleted() {
    var taskList = document.getElementById("taskList");
    var tasks = taskList.getElementsByTagName("li");

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains("completed")) {
            tasks[i].remove();
            i--; // Adjust the index because the list size has changed
        }
    }
}

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});

document.getElementById("taskList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
});
