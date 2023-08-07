var list = ["Hey", "Hello", "How are you??"];
var parentClass = document.getElementById("myUL");
displayAll();

function createLI(item, i) {
    var li = document.createElement("li");

    var span = document.createElement("span");
    var t = document.createTextNode(item);
    span.appendChild(t);
    li.appendChild(span);

    var x = document.createElement("i");
    x.setAttribute("class", "bx bx-x-circle");
    x.setAttribute("index", i);
    li.setAttribute("id", "id" + i);
    li.setAttribute("value", false);
    li.addEventListener("click", function () {
        if (li.value == false) {
            li.value = true;
            span.style.textDecoration = "line-through";
        }
        else {
            li.value = false;
            span.style.textDecoration = "none";
        }
    })

    x.addEventListener("click", function () {
        list.splice(Number(x.getAttribute("index")), 1);
        displayAll();
    })
    li.appendChild(x);
    parentClass.appendChild(li);
    var op = document.getElementsByTagName("INPUT");
}


function addElement() {
    let item = document.getElementById("item").value;
    if (item == "") {
        alert("Please enter a value to add to the list");
    }
    else {
        list.push(item);
        document.getElementById("item").value = "";
        createLI(item, list.length - 1);
    }
}

function displayAll() {
    parentClass.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        createLI(list[i], i);
    }
}