const {readFile, writeFile} = require("fs").promises;
const {join} = require("path");
const {v4: uuid} = require("uuid");
const {TaskRecord} = require("../records/task.record");

class TaskDb {
    constructor(fileName) {
        this.dbFile = join(__dirname, "../data", fileName);
        this.loadData();
    }

    async loadData() {
        this.data = JSON.parse(await readFile(this.dbFile, "utf-8")).map(obj => new TaskRecord(obj));
    }

    saveData() {
        writeFile(this.dbFile, JSON.stringify(this.data), "utf-8");
    }

    create(obj) {
        const id = uuid();
        this.data.push(new TaskRecord({
            id,
            ...obj,
        }));
        this.saveData();
        return id;
    }

    getAll() {
        return this.data;
    }

    delete(id) {
        this.data = this.data.filter(obj => obj.id !== id);
        this.saveData();
        return id;
    }
}

const taskDatabase = new TaskDb("tasks.json");

module.exports = {
    taskDatabase,
}