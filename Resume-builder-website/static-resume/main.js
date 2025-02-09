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
var icon = document.getElementById("icon");
var resumeElement = document.getElementById('resume');
icon.onclick = function () {
    resumeElement.classList.toggle("dark-theme");
    if (resumeElement.classList.contains("dark-theme")) {
        icon.src = "sun-image.png";
    }
    else {
        icon.src = "moon.png";
    }
};
