import img from "./Todo-Logo.png";
import "./index.css";


document.querySelector("form").addEventListener("submit", todoList)


let todoArr = JSON.parse(localStorage.getItem("todoList")) || [];
 
window.addEventListener("load", () => {
    createTable(todoArr);
})

function todoList(event) {
    event.preventDefault();
    var taskitem = document.querySelector("#input").value;

    var taskList = {task : taskitem};
    todoArr.push(taskList);
    localStorage.setItem("todoList", JSON.stringify(todoArr));

    createTable(todoArr);
}

function createTable(todoArr) {

    document.querySelector("tbody").innerHTML = "";
    todoArr.map(function (elem,index) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.textContent = elem.task;

        var td2 = document.createElement("td");
        td2.innerHTML = "<input type='checkbox'>"

        var td3 = document.createElement("td");
        td3.innerHTML = "<button>X</button>";
        td3.addEventListener("click", function() {
            deleteTask(index)
        })

        td2.classList.add = "align";
        td3.classList.add = "align";

        tr.append(td1, td2, td3)

        document.querySelector("tbody").append(tr);
    })
}

function deleteTask(index) {
    todoArr.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoArr));
    createTable(todoArr);
}