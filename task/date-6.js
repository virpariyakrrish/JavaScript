let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

let total = document.getElementById("totalTask");
let complete = document.getElementById("completedTask");
let pending = document.getElementById("pendingTask");


addBtn.addEventListener("click", function(){
    addTask();
});


function addTask(){
    if(input.value == ""){
        alert("Enter Your Task");
    }
    else{
        let li = document.createElement("li");
        let taskName = document.createElement("span");
        taskName.innerHTML = input.value;
        let completeBtn = document.createElement("button");
        completeBtn.innerHTML = "Complete";
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        li.append(taskName);
        li.append(completeBtn);
        li.append(deleteBtn);
        list.append(li);
        input.value = "";

        completeBtn.addEventListener("click", function(){
    li.classList.toggle("completed");
    countTask();
});


        deleteBtn.addEventListener("click", function(){
            li.remove();
            countTask();
        });

        countTask();
    }
}


function countTask(){
    let allTask = document.querySelectorAll("li");
    let doneTask = document.querySelectorAll(".completed");
    total.innerHTML = allTask.length;
    complete.innerHTML = doneTask.length;
    pending.innerHTML = allTask.length - doneTask.length;
}