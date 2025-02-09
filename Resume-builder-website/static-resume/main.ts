

const skillsSection  = document.getElementById('latest-projects') as HTMLElement 
const button = document.getElementById("projects-section")as HTMLButtonElement 
button.addEventListener("click" , ()=>{
 if(skillsSection.style.display === "none"){
    skillsSection.style.display = "block";
 }else{
    skillsSection.style.display = "none";
 }
})


const icon = document.getElementById("icon") as HTMLElement;
const resumeElement = document.getElementById('resume') as HTMLElement;

icon.onclick=function(){
   resumeElement.classList.toggle("dark-theme");
if(resumeElement.classList.contains("dark-theme")){
  icon.src="sun-image.png"

}else{
   icon.src="moon.png"
}

}
