const homeBtn = document.getElementById("homeBtn");
const aboutMeBtn = document.getElementById("aboutMe");
const projectsBtn = document.getElementById("projects");
const contactsBtn = document.getElementById("contacts");
const aboutTheDevBtn = document.getElementById("aboutTheDev");

const introSection = document.getElementById("intro");
const aboutMeSection = document.getElementById("about-me-section");
const projectsSection = document.getElementById("projects-section");
const contactSection = document.getElementById("contact-section");
const aboutDevSection = document.getElementById("about-dev-section");

function showSection(sectionToShow) {
    const sections = [introSection, aboutMeSection, projectsSection, contactSection, aboutDevSection];
    sections.forEach(section => {
        section.style.display = "none";
    });
    sectionToShow.style.display = "block";
}

// Initial load: show intro section
showSection(introSection);

homeBtn.addEventListener("click", () => showSection(introSection));
aboutMeBtn.addEventListener("click", () => showSection(aboutMeSection));
projectsBtn.addEventListener("click", () => showSection(projectsSection));
contactsBtn.addEventListener("click", () => showSection(contactSection));
aboutTheDevBtn.addEventListener("click", () => showSection(aboutDevSection));