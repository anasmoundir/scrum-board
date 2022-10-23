/**
 * In this file app.js you will find all CRUD functions name.
 *
 */
//the form that accept the creation and display of the tasks
var divButton = document.getElementById("to-do-tasks");
var countToDo = document.getElementById("to-do-tasks-count");
var inprogresse = document.getElementById("in-progress-tasks");
var countInProgress = document.getElementById("in-progress-tasks-count");
var donetasks = document.getElementById("done-tasks");
var countDoneTasks = document.getElementById("done-tasks-count");
//the function that shows all tasks
function showAllTasks() {
  //first of thing make all inputs empty
  divButton.innerHTML = "";
  inprogresse.innerHTML = "";
  donetasks.innerHTML = "";
  var count = 0;
  var count1 = 0;
  var count2 = 0;
  //second thing we go trought a loop
  for (var i = 0; i < tasks.length; i++) {
    //index = tasks[i].length;
    var a = document.getElementById("icone");
    if (tasks[i].status === "In Progress") {
      iconStr = "bi bi-hourglass-split fs-3 text-success";
    } else if (tasks[i].status === "To Do") {
      iconStr = "bi bi-question-circle fs-3 text-success";
    } else if (tasks[i].status === "Done") {
      iconStr = "bi bi-check-circle-fill fs-3 text-success";
    }

    let button = `<button   data-bs-target="#exampleModal2"  data-bs-toggle="modal" class=" p-2 w-100 d-flex border-0  bg-white mb-1" onclick="getId(${i})" >
    <div class="px-3">
        <i class="${iconStr}" id="icone"></i>
    </div>
    <div class="text-start">
        <div class="h5">${tasks[i].title}</div>
        <div class="text-start">
            <div class="h6">#${i + 1} created in ${tasks[i].date}</div>
            <div class="description" title="${tasks[i].description}">${tasks[i].description}</div>
        </div>
        <div class="text-start">
            <span class="btn btn-primary">${tasks[i].type}</span>
            <span class="btn btn-light text-black">${tasks[i].priority}</span>
        </div>
    </div>
</button>`;

    if (tasks[i].status === "In Progress") {
      iconStr = "bi bi-hourglass-split fs-3 text-success";
      inprogresse.innerHTML += button;
      count1 += 1;
    } else if (tasks[i].status === "To Do") {
      divButton.innerHTML += button;
      iconStr = "bi bi-question-circle fs-3 text-success";
      count += 1;
    } else if (tasks[i].status === "Done") {
      donetasks.innerHTML += button;
      iconStr = "bi bi-check-circle-fill fs-3 text-success";
      count2 += 1;
    }
    countToDo.innerText = count;
    countInProgress.innerText = count1;
    countDoneTasks.innerText = count2;
  }
  document.getElementById("text-title").value = "";
  document.getElementById("flexRadioDefault1").checked = false;
  document.getElementById("flexRadioDefault2").value = false;
  document.getElementById("form-select1").value = "";
  document.getElementById("time").value = "";
  document.getElementById("description").value = "";
  document.getElementById("form-select2").value = "";
}
function saveTask() {
  // Recuperer task attributes a partir les champs input
  var exampleFormControlInput1 = document.getElementById("text-title");
  var feature = document.getElementById("flexRadioDefault1");
  var bug = document.getElementById("flexRadioDefault2");
  var priority = document.getElementById("form-select1");
  var time = document.getElementById("time");
  var description = document.getElementById("description");
  var status = document.getElementById("form-select2");

  // Créez task object
  var task = {
    title: exampleFormControlInput1.value,
    type: feature.checked == true ? feature.value : bug.value,
    priority: priority.value,
    status: status.value,
    date: time.value,
    description: description.value,
  };
  // Ajoutez object au Array
  tasks.push(task);
  // refresh tasks
  showAllTasks();
}
//get the informations from the array and show it to data.
function getId(i) {
  document.getElementById("id").hidden = true;
  document.getElementById("id").value = i;
  document.getElementById("text-title2").value = tasks[i].title;
  document.getElementById("form-select1.1").value = tasks[i].priority;
  document.getElementById("form-select2.1").value = tasks[i].status;
  document.getElementById("time1").value = tasks[i].date;
  document.getElementById("description1").value = tasks[i].description;
  var radioBoxe1 = document.getElementById("flexRadioDefault1-1");
  var radioboxe2 = document.getElementById("flexRadioDefault2-1");
  tasks[i].type == "Feature" ? (radioBoxe1.checked = true) : (radioboxe2.checked = true);
  return i;
}

//delete a task
function DeleteTasks() {
  let id = document.getElementById("id").value;
  tasks.splice(id, 1);
  showAllTasks();
}
//update date
function updateTasks() {
  let id = document.getElementById("id").value;
  tasks[id].title = document.getElementById("text-title2").value;
  tasks[id].priority = document.getElementById("form-select1.1").value;
  tasks[id].status = document.getElementById("form-select2.1").value;
  tasks[id].date = document.getElementById("time1").value;
  tasks[id].description = document.getElementById("description1").value;
  var radioBoxe1 = document.getElementById("flexRadioDefault1-1");
  radioBoxe1.checked == true ? (tasks[id].type = "Feature") : (tasks[id].type = "Bug");
  showAllTasks();
}
