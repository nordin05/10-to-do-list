const projects = document.querySelector(".projects-container");

export function createDiv(title) {
    const projectItem = document.createElement("div");
    projectItem.id = title;
    projectItem.className = "projectItem";
    projects.appendChild(projectItem);

    const btn = document.createElement("button");
    btn.className = "close-btn";
    btn.innerHTML = "x";
    projectItem.appendChild(btn);

    const projectTitle = document.createElement("h1");
    projectTitle.className = "title";
    projectTitle.innerHTML = title;
    projectItem.appendChild(projectTitle);
}
