//tools

//Db & Model
import db from "./db";
import { User } from "../models/user";
import { Todo } from "../models/todo";

//Data
const dataUser = require("./data/user");

    db.todo
        .sync({ force: true })
        .then(async (_) => {
            pushDb_dev();
        })
        .catch((err) => {
            console.log("Erreur de synchronisation :", err);
        });


async function pushDb_dev() {
    try {
        console.log("");
        console.log("Début de synchronisation...");
        console.log("");
        await initUsers();
        console.log("");
        console.log("Synchronisation terminée !");
    } catch (err) {
        console.error("Erreur :", err);
    }
}

async function initUsers() {
    for (const data of dataUser.users) {
        await User.create(data);
        // data.password = await Crypt.hash(data.password);
        
    }
    console.log("   - ✅ Utilisateurs");
}

