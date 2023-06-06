const projects = document.querySelector(".projects-container");

export function createDiv(title) {
    const projectItem = document.createElement("div");
    projectItem.id = "testProject";
    projects.appendChild(projectItem);

    const icon = document.createElement("div");
    icon.className = "icon";
    icon.innerHTML = "x";
    projectItem.appendChild(icon);

    const projectTitle = document.createElement("h1");
    projectTitle.className = "title";
    projectTitle.innerHTML = title;
    projectItem.appendChild(projectTitle);
}
