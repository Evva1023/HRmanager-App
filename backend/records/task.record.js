const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require("uuid");

class TaskRecord {
    constructor(task) {
        const {id, title, deadline, isCompleted} = task;

        /*if (!name || typeof name !== string || name.length < 3) {
            throw new ValidationError("Task name must be entered and must have more than 3 characters");
        }*/

        this.id = uuid();
        this.title = title;
        this.deadline = deadline;
        this.isCompleted = isCompleted;
    }
}

module.exports = {
    TaskRecord,
}