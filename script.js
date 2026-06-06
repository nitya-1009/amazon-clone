const searchBox = document.getElementById("searchBox");
const boxes = document.querySelectorAll(".box");
const noResult = document.getElementById("no-result");

searchBox.addEventListener("keyup", function () {

    let searchValue = searchBox.value.toLowerCase();
    let found = false;

    boxes.forEach(function(box) {

        let title = box.querySelector("h2").textContent.toLowerCase();

        if(title.includes(searchValue)) {
            box.style.display = "block";
            found = true;
        } else {
            box.style.display = "none";
        }

    });

    if(found) {
        noResult.style.display = "none";
    } else {
        noResult.style.display = "block";
    }

});
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});