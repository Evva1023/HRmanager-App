const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require("uuid");
const {pool} = require("../utils/db");

class PersonRecord {
    constructor(person) {
        const {id, name, surname, pesel, email, phone, notes} = person;

        if (!name || typeof name !== "string" || name.length < 3 || name.length > 15) {
            throw new ValidationError("Name must be entered and must have between 3 and 15 characters");
        }
        if (!surname || typeof surname !== "string" || surname.length < 3 || name.length > 30) {
            throw new ValidationError("Surname must be entered and must have between 3 and 30 characters");
        }
        if (!pesel || typeof pesel !== "string" || pesel.length > 11) {
            throw new ValidationError("Pesel identificator must be entered and must have 11 digits");
        }
        if (!email || email.indexOf("@") === -1) {
            throw new ValidationError("Valid email address must be entered");
        }
        if (!phone) {
            throw new ValidationError("Phone number must be entered");
        }
        if (typeof notes !== "string") {
            throw new ValidationError("Notes must be text");
        }

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.pesel = pesel;
        this.email = email;
        this.phone = phone;
        this.notes = notes;
    }

    static async getAll() {
        const [results] = await pool.execute("SELECT * FROM `employees` ORDER BY `surname` ASC");
        return results.map(result => new PersonRecord(result));
    }

    static async getOne(id) {
        const [results] = await pool.execute("SELECT * FROM `employees` WHERE `id`=:id", {
            id,
        });
        return results.length === 0 ? null : new PersonRecord(results[0]);
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }
        await pool.execute("INSERT INTO `employees` VALUES(:id, :name, :surname, :pesel, :email, :phone, :notes)", {
            id: this.id,
            name: this.name,
            surname: this.surname,
            pesel: this.pesel,
            email: this.email,
            phone: this.phone,
            notes: this.notes
        });
        return this.id;
    }

    async update(id) {
        await pool.execute("UPDATE `employees` SET `name`=:name, `surname`=:surname, `email`=:email, `phone`=:phone, `notes`=:notes WHERE `id`=:id", {
            name: this.name,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            notes: this.notes
        });
    }

    async delete(id) {
        await pool.execute("DELETE FROM `employees` WHERE `id`=:id", {
            id,
        });
    }
}
module.exports = {
    PersonRecord,
};