import "./style.css";
import { createDiv, createAddProjectDiv } from "./DOM.js";

class Project {
    constructor(name) {
        this.name = name;
        this.tasksArray = [];
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasksArray;
    }

    addTask(newTask) {
        this.tasksArray.push(newTask);
    }

    renderTasks() {
        this.tasksArray.forEach((task) => task.render());
    }

    renderSelf() {
        createDiv(this.name);
    }

    searchForTask(taskTitle) {
        return this.tasksArray.find((task) => task.title === taskTitle);
    }

    removeTask(taskTitle) {
        const task = this.searchForTask(taskTitle);
        const index = this.tasksArray.indexOf(task);
        this.tasksArray.splice(index, 1);
    }
}

export default Project;
