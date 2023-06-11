const projects = document.querySelector(".projects-container");

export function renderProjects(projectsArray) {
    projects.innerHTML = "";
    projectsArray.forEach((project) => project.renderSelf());
}
