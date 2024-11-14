var skillsSection = document.getElementById('latest-projects');
var button = document.getElementById("projects-section");
button.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
