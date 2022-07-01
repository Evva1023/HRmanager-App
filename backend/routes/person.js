const {Router} = require("express");
const {PersonRecord} = require("../records/person.record");
const {ValidationError} = require("../utils/errors");
const personRouter = Router();

personRouter
    .get("/", async (req, res) => {
        const list = await PersonRecord.getAll();
        res.json(list);
    })
    .get("/:id", async (req, res) => {
        const person = await PersonRecord.getOne(req.params.id);
        if (!person) {
            throw new ValidationError("Cannot find this person");
        }
        res.json(person);

    })
    .post("/", async (req, res) => {
        const person = new PersonRecord(req.body);
        await person.insert();
        res.json(person);
    })
    .put("/:id", async (req, res) => {
        const person = await PersonRecord.getOne(req.params.id);
        if (!person) {
            throw new ValidationError("Cannot modify non existing person");
        }
        await person.update(req.params.id);
        res.json(person);
    })
    .delete("/:id", async (req, res) => {
        const person = await PersonRecord.getOne(req.params.id);
        if (!person) {
            throw new ValidationError("Cannot find this person");
        }
        await person.delete(req.params.id);
        res.end();
    });

module.exports = {
    personRouter,
};
