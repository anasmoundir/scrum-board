/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */


    var index;
    var  form = document.getElementById("exampleModal");
    var  addtaskbtn = document.getElementById('addtaskbtn');
    var  exampleFormControlInput1 = document.getElementById('text-title');
    var  feature = document.getElementById("flexRadioDefault1");  
    var  check; 
    var  bug = document.getElementById("flexRadioDefault2");
    var   priority = document.getElementById("form-select1");
    var   statuse = document.getElementById("form-select2");
    var  time = document.getElementById("time");
    var  description = document.getElementById("description");
    
    var array = [];

   if(feature.checked == true)
   {
       check = feature.value;
   }
   else if(bug.checked == true)
   {
       check =bug.value;
   }
   
function createTask() {
    // initialiser task form
    var divButton = document.getElementById('to-do-tasks');
    var inprogresse = document.getElementById('in-progress-tasks');
    var donetasks = document.getElementById('done-tasks');

    var button = `<button id=""  data-bs-target="#exampleModal" data-bs-toggle="modal" class=" p-2 w-100 d-flex border-0  bg-white mb-1">
    <div class="px-3">
        <i class="bi bi-question-circle fs-3 text-success  "></i>
    </div>
    <div class="text-start">
        <div class="h5">${exampleFormControlInput1.value}</div>
        <div class="text-start">
            <div class="h6">#${array.length +1} created in ${time.value}</div>
            <div class="" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${description.value}</div>
        </div>
        <div class="text-start">
            <span class="btn btn-primary">High</span>
            <span class="btn btn-light text-black">Feature</span>
        </div>
    </div>
</button>`;


    
    if(statuse.value === 'in progress' )
    {
    inprogresse.innerHTML +=button;
    }
    else if(statuse.value === 'to do')
    {
    divButton.innerHTML +=button;
    }
    else if(statuse.value === 'done')
    {
    donetasks.innerHTML +=button;
    }  
    console.log(button);

    // Afficher le boutton save
    saveTask();
    console.log(array);
    // index =array.length -1;
    // console.log(index);



    // Ouvrir modal form
}

function saveTask() {
    // Recuperer task attributes a partir les champs input
   

    // Créez task object
    let tasks = {
        title : exampleFormControlInput1.value,
        thepriority : priority.value,
        status: statuse.value,
        typeerreur : check,
        datetypetime : time.value,
        textarea : description.value
    };


    // Ajoutez object au Array
    array.push(tasks);
    // refresh tasks

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
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