/**
 * In this file app.js you will find all CRUD functions name.
 *
 */
var index;
//the form that accept the creation and display of the tasks
var divButton = document.getElementById("to-do-tasks");
var inprogresse = document.getElementById("in-progress-tasks");
var donetasks = document.getElementById("done-tasks");
var array = [];

//this function is for the creation of
function editTask(id) {
  window.onclick = (e) => {
    console.log(e.target.innerText);
  };
}

//the function that shows all tasks
function showAllTasks() {
  //first of thing make all inputs empty

  window.innerHTML = "";
  //second thing we go trought a loop
  for (var i = 0; i < tasks.length; i++) {
    console.log("before erreur");
    let button = `<button id="${i}" data-bs-target="#exampleModal2"  data-bs-toggle="modal" class=" p-2 w-100 d-flex border-0  bg-white mb-1" onclick="editTask()" >
    <div class="px-3">
        <i class="bi bi-question-circle fs-3 text-success  "></i>
    </div>
    <div class="text-start">
        <div class="h5">${tasks[i].title}</div>
        <div class="text-start">
            <div class="h6">#${array.length + 1} created in ${tasks[i].date}</div>
            <div class="" title="">${tasks[i].description}</div>
        </div>
        <div class="text-start">
            <span class="btn btn-primary">High</span>
            <span class="btn btn-light text-black">Feature</span>
        </div>
    </div>
</button>`;

    if (tasks[i].status === "In Progress") {
      inprogresse.innerHTML += button;
    } else if (tasks[i].status === "To Do") {
      divButton.innerHTML += button;
    } else if (tasks[i].status === "Done") {
      donetasks.innerHTML += button;
    }
  }
}

function saveTask() {
  // Recuperer task attributes a partir les champs input
  var exampleFormControlInput1 = document.getElementById("text-title");
  var feature = document.getElementById("flexRadioDefault1");
  var check;
  var bug = document.getElementById("flexRadioDefault2");
  var priority = document.getElementById("form-select1");
  var time = document.getElementById("time");
  var description = document.getElementById("description");
  var priorityF = document.getElementById("form-select2");
  if (feature.checked == true) {
    check = feature.value;
  } else if (bug.checked == true) {
    check = bug.value;
  }
  // Créez task object
  let tasks = {
    title: exampleFormControlInput1,
    type: priority,
    priority: check,
    status: priorityF,
    date: time,
    description: description,
  };
  // Ajoutez object au Array
  array.push(tasks);
  // refresh tasks
  showAllTasks();
}

function updateTask() {
  // GET TASK ATTRIBUTES FROM INPUTS
  // Créez task object
  // Remplacer ancienne task par nouvelle task
  // Fermer Modal form
  // Refresh tasks
}

function deleteTask() {
  // Get index of task in the array
  // Remove task from array by index splice function
  // close modal form
  // refresh tasks
}

function initTaskForm() {
  // Clear task form from data
  // Hide all action buttons
}

function reloadTasks() {
  // Remove tasks elements
  // Set Task count
}
