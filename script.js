let tasks = [];

function addTask(){
    let name = document.getElementById("taskInput").value;
    let priority = document.getElementById("priority").value;

    if(name === ""){
        alert("Enter task name");
        return;
    }

    tasks.push({
        name: name,
        priority: priority,
        completed: false
    });

    document.getElementById("taskInput").value="";
    displayTasks(tasks);
}

function displayTasks(task){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML="";

    for(let i=0; i<task.length; i++) {
        let div = document.createElement("div");
        div.className="task";

        if(task[i].completed){
            div.classList.add("completed");
        }

        div.innerHTML=`
        <span class="priority-${task[i].priority.toLowerCase()}">
        ${task[i].name} (${task[i].priority})
        </span>

        <div>
        <button onclick="isComplete(${i})">Done</button>
        <button onclick="deleteTask(${i})">Delete</button>
        </div>
        `;

        taskList.appendChild(div);
    };
}

function isComplete(i){
    tasks[i].completed = !tasks[i].completed;
    displayTasks(tasks);
}

function deleteTask(index){
    tasks = tasks.filter((_, i) => i != index);
    displayTasks(tasks);
}

function filterTasks(type){
    if(type==="all"){
        displayTasks(tasks);
    }

    if(type==="completed"){
        let completed = tasks.filter(task => task.completed);
        displayTasks(completed);
    }

    if(type==="pending"){
        let pending = tasks.filter(task => !task.completed);
        displayTasks(pending);
    }
}