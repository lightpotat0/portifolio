let addButton = document.getElementById("add_ab");
let abas = document.querySelectorAll(".abs");
let abas1 = document.querySelectorAll(".abs1");
let box1 = document.querySelectorAll("#box1");
let box_text = document.querySelectorAll(".box_skills");
let curriculo = document.querySelectorAll("#curriculo");

let currentTab = 0;

addButton.addEventListener("click", function () {
    if (currentTab % 2 === 0) {
        abas.forEach(function (abs) {
            abs.style.display = "block";
        });
        box_text.forEach(function (box) {
            box.style.display = "block";
        });
        box1.forEach(function (box1) {
            box1.style.display = "none";
        })

    } else {
        abas1.forEach(function (abs1) {
            abs1.style.display = "block";
        });
        box_text.forEach(function (box) {
            box.style.display = "none";
        });
        curriculo.forEach(function (box3) {
            box3.style.display = "block";
        })
    }

    currentTab++;
});

let projects = document.querySelectorAll("#pr")
let close = document.getElementById("close_popup")
let popup = document.getElementById("pr_popup")

projects.forEach((project) => {
    project.addEventListener("click", function () {
        popup.style.display = "flex";
    });
});

close.addEventListener("click", function () {
    popup.style.display = "none";
});