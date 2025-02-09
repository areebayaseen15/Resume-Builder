document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d, _e, _f, _g;
    var educationContainer = document.getElementById("education-container");
    var skillsContainer = document.getElementById("skills-container");
    var languageContainer = document.getElementById("language-container");
    var projectContainer = document.getElementById("project-container");
    var experienceContainer = document.getElementById("experience-container");
    var toolContainer = document.getElementById("tool-container");
    var resumeDiv = document.getElementById("resume");
    // Add Experience Field
    (_a = document
        .getElementById("add-experience-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var div = document.createElement("div");
        div.classList.add("experience-item");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.gap = "10px";
        div.style.marginTop = "20px";
        div.innerHTML = "\n        <label for=\"experience\">Adding Experience:</label>\n        <div class=\"input-row\" style=\"display: flex; justify-content: space-between; gap: 10px;\">\n            <input type=\"text\" placeholder=\"Job Title\" required style=\"flex: 1;\" />\n            <input type=\"text\" placeholder=\"Company Name\" required style=\"flex: 1;\" />\n            <input type=\"text\" placeholder=\"Years (e.g., 2020-2023)\" required style=\"flex: 1;\" />\n        </div>\n    ";
        experienceContainer.appendChild(div);
    });
    // Add Tools Field
    (_b = document
        .getElementById("add-tool-button")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var div = document.createElement("div");
        div.classList.add("tool-item");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.gap = "10px";
        div.style.marginTop = "20px";
        div.innerHTML = "\n        <label for=\"tools\">Adding Tools:</label>\n        <div class=\"input-row\" style=\"display: flex; justify-content: space-between; gap: 10px;\">\n            <input type=\"text\" placeholder=\"tool Name\" required \" />\n            <input type=\"file\" placeholder=\"tool image\" id=\"tool-image\" accept=\"image \" /*>\n        </div>\n    ";
        toolContainer.appendChild(div);
    });
    // Add Education Field
    (_c = document
        .getElementById("add-education-button")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
        var div = document.createElement("div");
        div.classList.add("education-item");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.flexWrap = "wrap";
        div.style.gap = "10px";
        div.style.marginTop = "20px";
        div.innerHTML = "\n        <label for=\"edAdd\">Adding Education:</label>\n        <div class=\"input-row\" style=\"display: flex; justify-content: space-between; gap: 10px;\">\n            <input type=\"text\" placeholder=\"Degree/Certificate\" required style=\"flex: 1;\" />\n            <input type=\"text\" placeholder=\"Institution\" required style=\"flex: 1;\" />\n            <input type=\"text\" placeholder=\"Year\" required style=\"flex: 1;\" />\n\n        </div>\n        ";
        educationContainer.appendChild(div);
    });
    // Add Skill Field
    (_d = document
        .getElementById("add-skill-button")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
        var div = document.createElement("div");
        div.classList.add("skill-item");
        div.innerHTML = "\n        \n                        <label for=\"project\"> Adding Skill:</label>\n            <input type=\"text\" placeholder=\"Skill (e.g., JavaScript)\" required />";
        skillsContainer.appendChild(div);
    });
    // Add project Field
    (_e = document
        .getElementById("add-project-button")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
        var div = document.createElement("div");
        div.classList.add("project-item");
        div.innerHTML = "\n        \n                       <label for=\"edproject\">Adding Project:</label>\n        <div class=\"input-row\" style=\"display: flex; justify-content: space-between; gap: 10px;\">\n                     <input type=\"text\" id=\"project-title\" placeholder=\"Project Title\" required />\n <input type=\"file\" id=\"project-image\" name=\"profile-image\" accept=\"image/*\">\n                        <input type=\"text\" id=\"project-link\" placeholder=\"Project Link (e.g., https://example.com)\" required />\n                          </div>\n                        ";
        projectContainer.appendChild(div);
    });
    // Add Language Field
    (_f = document
        .getElementById("add-language-button")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
        var div = document.createElement("div");
        div.classList.add("language-item");
        div.innerHTML = "\n        <input type=\"text\" placeholder=\"e.g. language\" required />";
        languageContainer.appendChild(div);
    });
    // Generate Resume
    (_g = document
        .getElementById("resumeForm")) === null || _g === void 0 ? void 0 : _g.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        // Personal Details
        var name = document.getElementById("name").value.trim();
        var profession = document.getElementById("profession").value.trim();
        var address = document.getElementById("address").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var email = document.getElementById("email").value.trim();
        var quote = document.getElementById("quote").value.trim();
        var quoteAuthor = document.getElementById("quoteAuthor").value.trim();
        var instagram = document.getElementById("instagram").value.trim();
        var facebook = document.getElementById("facebook").value.trim();
        var linkdin = document.getElementById("linkdin").value.trim();
        var github = document.getElementById("github").value.trim();
        var languages = Array.from(languageContainer.querySelectorAll(".language-item")).map(function (language) {
            var input = language.querySelector("input");
            return input.value.trim();
        });
        var portfolio = document.getElementById("portfolio").value.trim();
        var profile = document.getElementById("profile").value.trim();
        var skills = Array.from(skillsContainer.querySelectorAll(".skill-item")).map(function (skill) {
            var input = skill.querySelector("input");
            return input.value.trim();
        });
        var education = Array.from(educationContainer.querySelectorAll(".education-item")).map(function (edu) {
            var _a, _b, _c;
            var inputs = edu.querySelectorAll("input");
            return {
                degree: (_a = inputs[0]) === null || _a === void 0 ? void 0 : _a.value.trim(),
                institution: (_b = inputs[1]) === null || _b === void 0 ? void 0 : _b.value.trim(),
                year: (_c = inputs[2]) === null || _c === void 0 ? void 0 : _c.value.trim(),
            };
        });
        var profileImage = (_a = document.getElementById("profile-image").files) === null || _a === void 0 ? void 0 : _a[0];
        // Collecting Projects
        var projects = Array.from(projectContainer.querySelectorAll(".project-item")).map(function (projectItem) {
            var _a, _b, _c;
            var inputs = projectItem.querySelectorAll("input");
            var fileInput = projectItem.querySelector("#project-image");
            var projectImageUrl = ((_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0])
                ? URL.createObjectURL(fileInput.files[0])
                : "";
            return {
                title: (_b = inputs[0]) === null || _b === void 0 ? void 0 : _b.value.trim(),
                projectImageUrl: projectImageUrl,
                projectLink: (_c = inputs[2]) === null || _c === void 0 ? void 0 : _c.value.trim(),
            };
        });
        // Collect Experience Data
        var experiences = Array.from(experienceContainer.querySelectorAll(".experience-item")).map(function (exp) {
            var _a, _b, _c;
            var inputs = exp.querySelectorAll("input");
            return {
                title: (_a = inputs[0]) === null || _a === void 0 ? void 0 : _a.value.trim(),
                company: (_b = inputs[1]) === null || _b === void 0 ? void 0 : _b.value.trim(),
                years: (_c = inputs[2]) === null || _c === void 0 ? void 0 : _c.value.trim(),
            };
        }).filter(function (exp) { return exp.title || exp.company || exp.years; }); // Filter out empty entries
        // Collect tools Data
        var tools = Array.from(toolContainer.querySelectorAll(".tool-item")).map(function (tool) {
            var _a, _b;
            var inputs = tool.querySelectorAll("input");
            var fileInput = tool.querySelector("#tool-image");
            var toolImageUrl = ((_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0])
                ? URL.createObjectURL(fileInput.files[0])
                : "";
            return {
                title: (_b = inputs[0]) === null || _b === void 0 ? void 0 : _b.value.trim(),
                image: toolImageUrl,
            };
        }).filter(function (tool) { return tool.title || tool.image; }); // Filter out empty entries
        // Validate Data
        if (!name || !profession || !email) {
            alert("Please fill in all required fields.");
            return;
        }
        // Generate Resume HTML
        var resumeHTML = "\n             <div id=\"resume\" class=\"dark-theme\">\n                            <div class=\"resume\">\n                                <div class=\"aside\">\n                                    <div class=\"content\" id=\"profile-image\">";
        if (profileImage) {
            var imageURL = URL.createObjectURL(profileImage);
            resumeHTML += "<img src=\"".concat(imageURL, "\" alt=\"Profile Image\">");
        }
        else {
            resumeHTML += "<p>No profile image uploaded</p>";
        }
        resumeHTML += "</div> \n                <section class=\"container\">\n                                    <section class=\"container\">\n                                        <section>\n                                            <header>\n                                                <h3 >".concat(name, "</h3>\n                                                <p>").concat(profession, "</p>\n                                            </header>\n                                        </section>\n                        \n                        \n                                        <hr>\n                                        <section class=\"quote\">\n                                            <p>").concat(quote, "\"</p>\n                                            <h6>").concat(quoteAuthor, "</h6>\n                                        </section>\n                                        <hr>\n                        \n                                        <section class=\"info\">\n                                            <ul>\n                                                <li><i class=\"fa fa-envelope\"></i>Email:\n                                                    <p>").concat(email, "</p>\n                                                </li>\n                                                <li><i i class=\"fa fa-phone\"></i>Phone:\n                                                    <p>").concat(phone, "</p>\n                                                </li>\n                                                <li><i class=\"fa fa-map-marker\"></i>Address:\n                                                    <p>").concat(address, "</p>\n                                                </li>\n                                            </ul>\n                                        </section>\n                                        <hr>\n                                        <section class=\"social-icons\">\n                                            <h2 class=\"heading\">Socials:</h2>\n                                            <li><i class=\"fab fa-instagram\"\n                                                    id=\"instagram\"></i><span>").concat(instagram, "</span>\n                                            </li>\n                                            <li><i class=\"fab fa-facebook-f\"\n                                                    id=\"facebook\"></i><span>").concat(facebook, "</span>\n                                            </li>\n                        \n                                            <li><i class=\"fab fa-linkedin-in\"\n                                                    id=\"linkdin\"></i><span>").concat(linkdin, "</span>\n                                            </li>\n                                            <li><i class=\"fab fa-github\"\n                                                    id=\"github\"></i>").concat(github, "</span>\n                                            </li>\n                                            </ul>\n                                        </section>\n                                        <hr>\n                                             <!-- section Portfolio -->\n                                        <section class=\"portfolio\">\n                                            <h2>My Portfolio:</h2>\n                                              <a href=\"").concat(portfolio, "\"  >\n                                                <i class=\"fas fa-link\" id=\"web-icon\"></i> https://my-portfolio\n                                            </a>\n                                           <hr>\n                                        \n\n         <section class=\"languages\">\n                                            <h2>Languages:</h2>\n                    <ul >\n\n   ").concat(languages.map(function (language) { return "<li>".concat(language, "</li>"); }), "\n</ul>\n                                        </section>\n                                </div>\n                        \n                                <div class=\"main-container\">\n                                    <div class=\"main-content\" >\n                                        <section class=\"profile\">\n                                            <h2>Profile</h2>\n                                            <div class=\"profileCard\">\n                                                <p>\n                                                  ").concat(profile, " </p>\n                                            </div>\n                                        </section>\n  \n                        \n                                        <section class=\"Education\">\n                                           <h2>Education:</h2>\n                                             <cards class=\"educards\">").concat(education
            .map(function (edu) {
            return "<div class=\"eduDiv\"><i class=\"fas fa-certificate\"></i><h4>".concat(edu.degree, "</h4> <p> ").concat(edu.institution, " , ").concat(edu.year, "</p></div>");
        })
            .join(""), "</cards>\n                                 \n   </section>\n                        \n                        \n                                        <section class=\"Skills-content\">\n                                            <h2>Skills</h2>\n                                            <div class=\"Stack\">\n                                           ").concat(skills.map(function (skill) { return "<span>".concat(skill, "</span>"); }), "\n                                 \n                        \n                                            </div>\n                        \n                                        </section>\n                        <section class=\"latest-projects\" id=\"latest-projects\">\n    <h2>Latest Projects</h2>\n    <div class=\"projects-container\">\n        ").concat(projects
            .map(function (project) { return "\n            <div class=\"project-card\">\n                <img src=\"".concat(project.projectImageUrl, "\" alt=\"Project Image\">\n                <div class=\"project-details\">\n                    <h3>").concat(project.title, "</h3>\n                    <a href=\"").concat(project.projectLink, "\" target=\"_blank\">\n                        <i class=\"fas fa-link\" id=\"web-icon\"></i> Visit Project\n                    </a>\n                </div>\n            </div>\n          "); })
            .join(""), "\n    </div>\n</section>");
        // Add experience field only if data exists
        if (experiences.length > 0) {
            resumeHTML += "\n      <section class=\"experience-section\">\n        <h2>Experience:</h2>\n        ".concat(experiences
                .map(function (exp) { return "\n          <ul>\n          <li>\n          <h4>".concat(exp.title, "</h4> at\n            <span>").concat(exp.company, " (").concat(exp.years, ")</span>\n          </li>\n            \n          </ul>\n        "); })
                .join(""), "\n      </section>\n    ");
        }
        // Add tools fieldL only if data exists
        if (tools.length > 0) {
            resumeHTML += "\n      <section class=\"tools\">\n        <h2>Tools:</h2>\n         <div class=\"tools-content\">\n        ".concat(tools
                .map(function (tool) { return "\n          <div class=\"cards\">\n             <img src=\"".concat(tool.image, "\" alt=\"\" width=\"50px\" height=\"50px\">\n             <p>").concat(tool.title, "</p>\n         </div>\n        "); })
                .join(""), "\n      </section>\n    ");
        }
        "\n\n                       </div>\n                          </div>\n                          </div>\n                      </div>\n             ";
        resumeDiv.innerHTML = resumeHTML;
    });
});
var downloadButton = document.getElementById("download-btn");
downloadButton.addEventListener("click", function () {
    // Ensure correct selector based on your HTML structure
    var element = document.querySelector("#resume"); // Use # for ID or . for class
    if (element) {
        var options = {
            margin: [0, 0, 0, 0],
            filename: "My_CV.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };
        html2pdf()
            .set(options)
            .from(element)
            .save()
            .catch(function (error) {
            console.error("PDF generation failed:", error);
        });
    }
    else {
        console.error("Element not found for PDF generation.");
    }
});
