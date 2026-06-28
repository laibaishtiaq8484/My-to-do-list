let tasks = [];

function addNewTask() {

    const input = document.getElementById("taskInput");
    const value = input.value.trim();

    if (value.length === 0) {
        alert("Please enter a task.");
        return;
    }

    tasks.push(value);
    input.value = "";

    displayTasks();
}

function displayTasks() {

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        list.innerHTML += `
        <p>
            ${tasks[i]}
            <button onclick="updateTask(${i})">Edit</button>
            <button class="delete-btn" onclick="removeTask(${i})">Delete</button>
        </p>`;
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function updateTask(index) {

    const edited = prompt("Edit your task:", tasks[index]);

    if (edited !== null && edited.trim() !== "") {
        tasks[index] = edited.trim();
        displayTasks();
    }
}