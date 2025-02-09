
// Ensure html2pdf is globally available
declare const html2pdf: any;

document.addEventListener("DOMContentLoaded", function () {
  const educationContainer = document.getElementById("education-container")!;
  const skillsContainer = document.getElementById("skills-container")!;
  const languageContainer = document.getElementById("language-container")!;
  const projectContainer = document.getElementById("project-container")!;
  const experienceContainer = document.getElementById("experience-container")!;
  const toolContainer = document.getElementById("tool-container")!;


  const resumeDiv = document.getElementById("resume")!;
  // Add Experience Field
  document
    .getElementById("add-experience-button")
    ?.addEventListener("click", function () {
      const div = document.createElement("div");
      div.classList.add("experience-item");
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.gap = "10px";
      div.style.marginTop = "20px";

      div.innerHTML = `
        <label for="experience">Adding Experience:</label>
        <div class="input-row" style="display: flex; justify-content: space-between; gap: 10px;">
            <input type="text" placeholder="Job Title" required style="flex: 1;" />
            <input type="text" placeholder="Company Name" required style="flex: 1;" />
            <input type="text" placeholder="Years (e.g., 2020-2023)" required style="flex: 1;" />
        </div>
    `;
      experienceContainer.appendChild(div);
    });

  // Add Tools Field
  document
    .getElementById("add-tool-button")
    ?.addEventListener("click", function () {
      const div = document.createElement("div");
      div.classList.add("tool-item");
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.gap = "10px";
      div.style.marginTop = "20px";

      div.innerHTML = `
        <label for="tools">Adding Tools:</label>
        <div class="input-row" style="display: flex; justify-content: space-between; gap: 10px;">
            <input type="text" placeholder="tool Name" required " />
            <input type="file" placeholder="tool image" id="tool-image" accept="image " /*>
        </div>
    `;
      toolContainer.appendChild(div);
    });

  // Add Education Field
  document
    .getElementById("add-education-button")
    ?.addEventListener("click", function () {
      const div = document.createElement("div");
      div.classList.add("education-item");
      div.style.display = "flex";
      div.style.flexDirection = "column";
      div.style.flexWrap = "wrap";
      div.style.gap = "10px";
      div.style.marginTop = "20px";

      div.innerHTML = `
        <label for="edAdd">Adding Education:</label>
        <div class="input-row" style="display: flex; justify-content: space-between; gap: 10px;">
            <input type="text" placeholder="Degree/Certificate" required style="flex: 1;" />
            <input type="text" placeholder="Institution" required style="flex: 1;" />
            <input type="text" placeholder="Year" required style="flex: 1;" />

        </div>
        `;
      educationContainer.appendChild(div);
    });

  // Add Skill Field
  document
    .getElementById("add-skill-button")
    ?.addEventListener("click", function () {
      const div = document.createElement("div");
      div.classList.add("skill-item");
      div.innerHTML = `
        
                        <label for="project"> Adding Skill:</label>
            <input type="text" placeholder="Skill (e.g., JavaScript)" required />`;
      skillsContainer.appendChild(div);
    });

  // Add project Field
  document
    .getElementById("add-project-button")
    ?.addEventListener("click", function () {
      const div = document.createElement("div");
      div.classList.add("project-item");
      div.innerHTML = `
        
                       <label for="edproject">Adding Project:</label>
        <div class="input-row" style="display: flex; justify-content: space-between; gap: 10px;">
                     <input type="text" id="project-title" placeholder="Project Title" required />
 <input type="file" id="project-image" name="profile-image" accept="image/*">
                        <input type="text" id="project-link" placeholder="Project Link (e.g., https://example.com)" required />
                          </div>
                        `;
      projectContainer.appendChild(div);
    });

  // Add Language Field
  document
    .getElementById("add-language-button")
    ?.addEventListener("click", function () {
      const div = document.createElement("div");
      div.classList.add("language-item");
      div.innerHTML = `
        <input type="text" placeholder="e.g. language" required />`;
      languageContainer.appendChild(div);
    });
  // Generate Resume
  document
    .getElementById("resumeForm")
    ?.addEventListener("submit", function (event: Event) {
      event.preventDefault();

      // Personal Details
      const name = (
        document.getElementById("name") as HTMLInputElement
      ).value.trim();
      const profession = (
        document.getElementById("profession") as HTMLInputElement
      ).value.trim();
      const address = (
        document.getElementById("address") as HTMLInputElement
      ).value.trim();
      const phone = (
        document.getElementById("phone") as HTMLInputElement
      ).value.trim();
      const email = (
        document.getElementById("email") as HTMLInputElement
      ).value.trim();
      const quote = (
        document.getElementById("quote") as HTMLInputElement
      ).value.trim();
      const quoteAuthor = (
        document.getElementById("quoteAuthor") as HTMLInputElement
      ).value.trim();
      const instagram = (
        document.getElementById("instagram") as HTMLInputElement
      ).value.trim();
      const facebook = (
        document.getElementById("facebook") as HTMLInputElement
      ).value.trim();
      const linkdin = (
        document.getElementById("linkdin") as HTMLInputElement
      ).value.trim();
      const github = (
        document.getElementById("github") as HTMLInputElement
      ).value.trim();
      const languages = Array.from(
        languageContainer.querySelectorAll(".language-item")
      ).map((language) => {
        const input = language.querySelector("input") as HTMLInputElement;
        return input.value.trim();
      });
      const portfolio = (
        document.getElementById("portfolio") as HTMLInputElement
      ).value.trim();
      const profile = (
        document.getElementById("profile") as HTMLInputElement
      ).value.trim();
      const skills = Array.from(
        skillsContainer.querySelectorAll(".skill-item")
      ).map((skill) => {
        const input = skill.querySelector("input") as HTMLInputElement;
        return input.value.trim();
      });
      const education = Array.from(
        educationContainer.querySelectorAll(".education-item")
      ).map((edu) => {
        const inputs = edu.querySelectorAll(
          "input"
        ) as NodeListOf<HTMLInputElement>;
        return {
          degree: inputs[0]?.value.trim(),
          institution: inputs[1]?.value.trim(),
          year: inputs[2]?.value.trim(),
        };
      });

      const profileImage = (
        document.getElementById("profile-image") as HTMLInputElement
      ).files?.[0];

      // Collecting Projects

      const projects = Array.from(
        projectContainer.querySelectorAll(".project-item")
      ).map((projectItem) => {
        const inputs = projectItem.querySelectorAll(
          "input"
        ) as NodeListOf<HTMLInputElement>;
        const fileInput = projectItem.querySelector(
          "#project-image"
        ) as HTMLInputElement;

        const projectImageUrl = fileInput.files?.[0]
          ? URL.createObjectURL(fileInput.files[0])
          : "";

        return {
          title: inputs[0]?.value.trim(),
          projectImageUrl: projectImageUrl,
          projectLink: inputs[2]?.value.trim(),
        };
      });

// Collect Experience Data
const experiences = Array.from(
    experienceContainer.querySelectorAll(".experience-item")
  ).map((exp) => {
    const inputs = exp.querySelectorAll(
      "input"
    ) as NodeListOf<HTMLInputElement>;
    return {
      title: inputs[0]?.value.trim(),
      company: inputs[1]?.value.trim(),
      years: inputs[2]?.value.trim(),
    };
  }).filter(exp => exp.title || exp.company || exp.years); // Filter out empty entries
  
     // Collect tools Data
const tools = Array.from(
    toolContainer.querySelectorAll(".tool-item")
  ).map((tool) => {
    const inputs = tool.querySelectorAll(
      "input"
    ) as NodeListOf<HTMLInputElement>;
    const fileInput = tool.querySelector("#tool-image") as HTMLInputElement;
  
    const toolImageUrl = fileInput.files?.[0]
      ? URL.createObjectURL(fileInput.files[0])
      : "";
  
    return {
      title: inputs[0]?.value.trim(),
      image: toolImageUrl,
    };
  }).filter(tool => tool.title || tool.image); // Filter out empty entries
  
      // Validate Data
      if (!name || !profession || !email) {
        alert("Please fill in all required fields.");
        return;
      }

      // Generate Resume HTML
      let resumeHTML = `
             <div id="resume" class="dark-theme">
                            <div class="resume">
                                <div class="aside">
                                    <div class="content" id="profile-image">`;

      if (profileImage) {
        const imageURL = URL.createObjectURL(profileImage);
        resumeHTML += `<img src="${imageURL}" alt="Profile Image">`;
      } else {
        resumeHTML += `<p>No profile image uploaded</p>`;
      }

      resumeHTML += `</div> 
                <section class="container">
                                    <section class="container">
                                        <section>
                                            <header>
                                                <h3 >${name}</h3>
                                                <p>${profession}</p>
                                            </header>
                                        </section>
                        
                        
                                        <hr>
                                        <section class="quote">
                                            <p>${quote}"</p>
                                            <h6>${quoteAuthor}</h6>
                                        </section>
                                        <hr>
                        
                                        <section class="info">
                                            <ul>
                                                <li><i class="fa fa-envelope"></i>Email:
                                                    <p>${email}</p>
                                                </li>
                                                <li><i i class="fa fa-phone"></i>Phone:
                                                    <p>${phone}</p>
                                                </li>
                                                <li><i class="fa fa-map-marker"></i>Address:
                                                    <p>${address}</p>
                                                </li>
                                            </ul>
                                        </section>
                                        <hr>
                                        <section class="social-icons">
                                            <h2 class="heading">Socials:</h2>
                                            <li><i class="fab fa-instagram"
                                                    id="instagram"></i><span>${instagram}</span>
                                            </li>
                                            <li><i class="fab fa-facebook-f"
                                                    id="facebook"></i><span>${facebook}</span>
                                            </li>
                        
                                            <li><i class="fab fa-linkedin-in"
                                                    id="linkdin"></i><span>${linkdin}</span>
                                            </li>
                                            <li><i class="fab fa-github"
                                                    id="github"></i><span>${github}</span>
                                            </li>
                                            </ul>
                                        </section>
                                        <hr>
                                             <!-- section Portfolio -->
                                        <section class="portfolio">
                                            <h2>My Portfolio:</h2>
                                              <a href="${portfolio}"  >
                                                <i class="fas fa-link" id="web-icon"></i> https://my-portfolio
                                            </a>
                                           <hr>
                                        

         <section class="languages">
                                            <h2>Languages:</h2>
                    <ul >

   ${languages.map((language) => `<li>${language}</li>`)}
</ul>
                                        </section>
                                </div>
                        
                                <div class="main-container">
                                    <div class="main-content" >
                                        <section class="profile">
                                            <h2>Profile</h2>
                                            <div class="profileCard">
                                                <p>
                                                  ${profile} </p>
                                            </div>
                                        </section>
  
                        
                                        <section class="Education">
                                           <h2>Education:</h2>
                                             <cards class="educards">${education
                                               .map(
                                                 (edu) =>
                                                   `<div class="eduDiv"><i class="fas fa-certificate"></i><h4>${edu.degree}</h4> <p> ${edu.institution} , ${edu.year}</p></div>`
                                               )
                                               .join("")}</cards>
                                 
   </section>
                        
                        
                                        <section class="Skills-content">
                                            <h2>Skills</h2>
                                            <div class="Stack">
                                           ${skills.map(
                                             (skill) => `<span>${skill}</span>`
                                           )}
                                 
                        
                                            </div>
                        
                                        </section>
                        <section class="latest-projects" id="latest-projects">
    <h2>Latest Projects</h2>
    <div class="projects-container">
        ${projects
          .map(
            (project) => `
            <div class="project-card">
                <img src="${project.projectImageUrl}" alt="Project Image">
                <div class="project-details">
                    <h3>${project.title}</h3>
                    <a href="${project.projectLink}" target="_blank">
                        <i class="fas fa-link" id="web-icon"></i> Visit Project
                    </a>
                </div>
            </div>
          `
          )
          .join("")}
    </div>
</section>`

                        // Add experience field only if data exists
if (experiences.length > 0) {
    resumeHTML += `
      <section class="experience-section">
        <h2>Experience:</h2>
        ${experiences
          .map(
            (exp) => `
          <ul>
          <li>
          <h4>${exp.title}</h4> at
            <span>${exp.company} (${exp.years})</span>
          </li>
            
          </ul>
        `
          )
          .join("")}
      </section>
    `;
  }  
           
        // Add tools fieldL only if data exists
if (tools.length > 0) {
    resumeHTML += `
      <section class="tools">
        <h2>Tools:</h2>
         <div class="tools-content">
        ${tools
          .map(
            (tool) => `
          <div class="cards">
             <img src="${tool.image}" alt="" width="50px" height="50px">
             <p>${tool.title}</p>
         </div>
        `
          )
          .join("")}
      </section>
    `;
  }
  `

                       </div>
                          </div>
                          </div>
                      </div>
             `;
      resumeDiv.innerHTML = resumeHTML;
    });
});

const downloadButton = document.getElementById("download-btn")!;
downloadButton.addEventListener("click", function () {
  // Ensure correct selector based on your HTML structure
  const element = document.querySelector<HTMLElement>("#resume"); // Use # for ID or . for class

  if (element) {
    const options = {
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
      .catch((error: any) => {
        console.error("PDF generation failed:", error);
      });
  } else {
    console.error("Element not found for PDF generation.");
  }
});
