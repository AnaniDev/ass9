function addTask(){
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    if (addTask.value.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        const taskText = document.createTextNode(addTask.value);
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskList.appendChild(taskItem);
        addTask.value = "";
        checkbox.onclick = function () {
            if (checkbox.checked) {
                taskItem.style.textDecoration = "line-through";
            } else {
                taskItem.style.textDecoration = "none";
            }
        };
        
    }
}
addTask();