showList()

let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function(e){
    // e.preventDefault();

    let task = document.getElementById("task")
    let taskList = localStorage.getItem("taskList")

    if(task.value==""){
        alert("Please Enter a task to do")
        return;
    }

    let TaskObj = []

    if(taskList!==null){
        TaskObj = JSON.parse(taskList)
    }

    
    let myObj = {
        task : task.value
    }

    TaskObj.push(myObj)
    localStorage.setItem("taskList", JSON.stringify(TaskObj))
    task.value="";
    showList();
})

function showList(){
    let list = localStorage.getItem("taskList");

    
    let TaskObj = []
    
    if(list!==null){
        TaskObj = JSON.parse(list)
    }

    let html = ""
    TaskObj.forEach(function(element, index) {
        html += `
            <div >
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h6 class="card-title">Task ${index + 1}</h6>
                        <p class="card-text" style="white-space: break-spaces;">${element.task}</p>
                        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
                    </div>
                </div>
            </div>`;
    });
    let head = ""
    head += '<h3 class="nothing">No Task to-do yet! Add new task</h3>'
    let listElm = document.getElementById("taskList");
    let headElm= document.getElementById("head")
    if(TaskObj.length!=0){
        listElm.innerHTML = html;
    }
    else{
        listElm.innerHTML = head
    }
}

function deleteTask(index){
    let list = localStorage.getItem("taskList")
    let TaskObj = JSON.parse(list)

    TaskObj.splice(index, 1)

    localStorage.setItem("taskList", JSON.stringify(TaskObj))
    showList()
}
