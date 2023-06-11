import { addProject, projects } from "./app.js";

const projects_container = document.querySelector(".projects-container");
const add_projects = document.querySelector(".add-project-container");

export function renderProjects(projectsArray) {
    projects_container.innerHTML = "";
    projectsArray.forEach((project) => project.renderSelf());
}

function AddProjectButton() {
    const btn = document.createElement("button");
    btn.innerHTML = "+";

    add_projects.innerHTML = "";
    add_projects.appendChild(btn);

    btn.addEventListener("click", function () {
        AddProjectForm();
    });
}

function AddProjectForm() {
    const inputfield = document.createElement("input");
    inputfield.type = "text";
    inputfield.className = "project-name-input";

    const confirmButton = document.createElement("button");
    confirmButton.className = "confirm";
    confirmButton.innerHTML = "Add";

    const cancelButton = document.createElement("button");
    cancelButton.className = "cancel";
    cancelButton.innerHTML = "Cancel";

    add_projects.innerHTML = "";
    add_projects.appendChild(inputfield);
    add_projects.appendChild(confirmButton);
    add_projects.appendChild(cancelButton);

    confirmButton.addEventListener("click", function () {
        const projectName = inputfield.value;
        if (projectName != "") {
            addProject(projectName);
            renderProjects(projects);
            AddProjectButton(parent);
        }
    });

    cancelButton.addEventListener("click", function () {
        AddProjectButton(parent);
    });
}

AddProjectButton();
