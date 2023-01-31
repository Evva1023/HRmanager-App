const {Router} = require("express");
const {taskDatabase} = require("../utils/taskDb");
const taskRouter = Router();

taskRouter
        .get("/", async (req, res) => {
            const taskList = await taskDatabase.getAll();
            res.json(taskList);
        })
        .post("/", async (req, res) => {
            const task = await taskDatabase.create(req.body);
            res.status(201).json(task);
        })
        .delete("/:id", async (req, res) => {
            const result = await taskDatabase.delete(req.params.id);
            res.json(result);
        });

module.exports = {
    taskRouter,
};