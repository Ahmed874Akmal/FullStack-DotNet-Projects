/////////////////////////////////////////////////////
// ✅ Task 1: Student Table
/////////////////////////////////////////////////////

let idCounter = 1;

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Please enter name and age");
        return;
    }

    if (age < 18) {
        alert("Age must be greater than 18");
        return;
    }

    let table = document.getElementById("studentTable");
    let row = table.insertRow();

    row.insertCell(0).innerHTML = idCounter++;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = age;

    let actionCell = row.insertCell(3);
    actionCell.innerHTML =
        `<button onclick="deleteStudent(this)">Delete</button>`;
}

function deleteStudent(btn) {
    let row = btn.parentElement.parentElement;
    row.remove();
}

/////////////////////////////////////////////////////
// ✅ Task 2: Count by Tag / Class / ID / Name
/////////////////////////////////////////////////////

function showResult() {

    let tag = document.getElementById("tagInput").value;
    let className = document.getElementById("classInput").value;
    let id = document.getElementById("idInput").value;
    let nameAttr = document.getElementById("nameInput").value;

    let result = "";

    if (tag !== "") {
        result += "Tag (" + tag + ") = "
            + document.getElementsByTagName(tag).length + "<br>";
    }

    if (className !== "") {
        result += "Class (" + className + ") = "
            + document.getElementsByClassName(className).length + "<br>";
    }

    if (id !== "") {
        result += "ID (" + id + ") = "
            + (document.getElementById(id) ? 1 : 0) + "<br>";
    }

    if (nameAttr !== "") {
        result += "Name (" + nameAttr + ") = "
            + document.getElementsByName(nameAttr).length + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}

/////////////////////////////////////////////////////
// ✅ Task 3: Dark / Light Mode
/////////////////////////////////////////////////////

function toggleMode() {
    document.body.classList.toggle("dark");
}

/////////////////////////////////////////////////////
// ✅ Task 4: Slider
/////////////////////////////////////////////////////

let images = [
    "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4",
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
];

let index = 0;
let interval;

function showImage() {
    document.getElementById("slider").src = images[index];
}

function next() {
    index = (index + 1) % images.length;
    showImage();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

function play() {
    interval = setInterval(next, 2000);
}

function stop() {
    clearInterval(interval);
}