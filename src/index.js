import "./style.css";
import {
    projects,
    addTaskToProject,
    addProject,
    renderActiveProjectTasks,
} from "./App/app.js";
import { renderProjects } from "./App/DOM.js";

const projects_container = document.querySelector(".projects-container");

function renderProjectsColumn() {
    renderProjects(projects);
}

addProject("Test Project 1");
addProject("Test Project 2");
addProject("Test Project 3");

addTaskToProject("Test Project 1", "Test task in Project 1", "2/3/2031", false);
addTaskToProject("Test Project 2", "Test task in Project 2", "2/3/2031", false);
addTaskToProject("Test Project 3", "Test task in Project 3", "2/3/2031", false);
renderProjectsColumn();

projects_container.addEventListener("click", function (e) {
    const projectItem = e.target.closest(".projectItem");

    if (projectItem) {
        renderActiveProjectTasks(projectItem);
    }
});
