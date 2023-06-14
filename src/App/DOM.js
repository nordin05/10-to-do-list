import {
    addProject,
    addTaskToProject,
    projects,
    currentActiveProject,
    renderActiveProjectTasks,
} from "./app.js";

const projects_container = document.querySelector(".projects-container");
const add_projects = document.querySelector(".add-project-container");
const add_tasks_btn = document.querySelector(".add-tasks-container button");
const form = document.querySelector("#myForm");

export function renderProjects(projectsArray) {
    projects_container.innerHTML = "";
    projectsArray.forEach((project) => project.renderSelf());
}

function AddProjectButton() {
    const btn = document.createElement("button");
    btn.className = "add-btn";
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
            AddProjectButton();
        }
    });

    cancelButton.addEventListener("click", function () {
        AddProjectButton();
    });
}

add_tasks_btn.addEventListener("click", function () {
    form.style.display = "grid";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (currentActiveProject == undefined) {
        alert("Please select a project first.");
        return false;
    }

    let title = document.querySelector("#title").value;
    let deadline = document.querySelector("#deadline").value;

    const projectName = currentActiveProject.name;

    addTaskToProject(projectName, title, deadline, false);
    renderActiveProjectTasks(projectName);
    form.style.display = "none";
});

form.addEventListener("reset", () => {
    form.style.display = "none";
});

AddProjectButton();
