let addButton = document.getElementById("add_ab");
let abas = document.querySelectorAll(".abs");
let abas1 = document.querySelectorAll(".abs1");

let currentTab = 0;

addButton.addEventListener("click", function () {
    if (currentTab % 2 === 0) {
        abas.forEach(function (abs) {
            abs.style.display = "block";
        });
    } else {
        abas1.forEach(function (abs1) {
            abs1.style.display = "block";
        });
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