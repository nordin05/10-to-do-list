import "./style.css";
import {
    projects,
    addTaskToProject,
    addProject,
    renderActiveProjectTasks,
    removeProject,
} from "./App/app.js";
import { renderProjects } from "./App/DOM.js";

const projects_container = document.querySelector(".projects-container");

addProject("General Tasks");
renderProjects(projects);

addTaskToProject(
    "General Tasks",
    "Example Task",
    "2/3/2024",
    "Lorem ipsum dolor sit amet. Id aliquid impedit est dignissimos itaque aut repellendus quas in distinctio delectus id illo voluptate et molestias mollitia! Et nihil voluptatibus sed dolores harum est facere odio aut eius aliquid aut earum possimus.",
    false
);

projects_container.addEventListener("click", function (e) {
    const projectItem = e.target.closest(".projectItem");
    const remove_project_btn = e.target.closest(".projectItem .close-btn");

    if (projectItem) {
        renderActiveProjectTasks(projectItem.id);
    }
    if (remove_project_btn) {
        const projectName = remove_project_btn.parentNode.id;
        removeProject(projectName);
    }
});
