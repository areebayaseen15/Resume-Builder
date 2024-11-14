

const skillsSection  = document.getElementById('latest-projects') as HTMLElement 
const button = document.getElementById("projects-section")as HTMLButtonElement 
button.addEventListener("click" , ()=>{
 if(skillsSection.style.display === "none"){
    skillsSection.style.display = "block";
 }else{
    skillsSection.style.display = "none";
 }
})
