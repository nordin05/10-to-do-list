import "./style.css";
import { createDiv } from "./DOM.js";

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

    render() {
        createDiv(this.name);

        this.tasksArray.forEach((task) => task.render());
    }

    // renderSelf() {
    //     createDiv(this.name);
    // }
}

export default Project;
