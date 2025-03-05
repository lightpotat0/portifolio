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
