var data = [];
var counter = 0;

function addTask() {
  var a = document.getElementById("taskInput");
  var task = a.value;
  if (task !== "" && task !== " ") {
    data[counter] = {
      id: counter,
      name: task,
      done: false
    };
    counter++;
    a.value = "";
    b();
  }
}

function b() {
  var ul = document.getElementById("taskList");
  ul.innerHTML = "";
  for (let j = 0; j < data.length; j++) {
    if (typeof data[j] !== "undefined") {
      const checkboxId = `customCheck${j}`; // unique id per checkbox
      var li = document.createElement("li");
      li.innerHTML = 
        `<input type='checkbox' id='${checkboxId}' ${data[j].done ? "checked" : ""} onclick='toggle(${j})'>
         <label for='${checkboxId}'></label>
         <span class="task-name">${data[j].name}</span>
         <i class='fa-solid fa-trash' onclick='deleteTask(${j})'></i>`;

      if (data[j].done === true) {
        li.querySelector(".task-name").style.textDecoration = "line-through";
      }
      ul.appendChild(li);
    }
  }
}


function toggle(index) {
  if (data[index].done === false) {
    data[index].done = true;
  } else {
    data[index].done = false;
  }
  b();
}

function deleteTask(i) {
  data[i] = "undefined"; // BAD PRACTICE: Leaves holes in array
  b();
}


async function monitorTasks() {
    while (true) {
      let allDone = true;
  
      for (let z = 0; z < data.length; z++) {
        if (data[z] && data[z].done === false) {
          allDone = false;
          console.log("Not All tasks done!");
        }
      }
  
      if (allDone && data.length > 0) {
        console.log("All tasks done!");
      }
  
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }
  
  monitorTasks();
  
