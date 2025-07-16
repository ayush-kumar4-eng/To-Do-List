function addTask () {
    let newTask = document.createElement("li");
    let list = document.querySelector(".taskList");
    list.appendChild(newTask);
    newTask.innerText=document.querySelector(".inputTask").value
    document.querySelector(".inputTask").value="";
    let delBtn = document.createElement("button");
    delBtn.innerText="Delete";
    newTask.appendChild(delBtn);
    delBtn.classList.add("deletebutton");
    delBtn.setAttribute("onclick","del()");
}

let del = () => {
    let btn = document.querySelector("li");
    btn.remove();
}