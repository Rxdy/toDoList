import { DataTypes, Model } from "sequelize";
import db from "../database/db";

import { User } from "../models/user";
import { Todo } from "../models/todo";

// Interface des attributs de Tagged
interface AppartenirAttributes {
    userId: string;
    todoId: string;
}

// Définition du modèle avec TypeScript
class Appartenir extends Model<AppartenirAttributes> implements AppartenirAttributes {
    public userId!: string;
    public todoId!: string;
}

Appartenir.init(
    {
        userId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            references: {
                model: "User",
                key: "id",
            },
        },
        todoId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            references: {
                model: "Todo",
                key: "id",
            },
        },
    },
    {
        sequelize: db.todo,
        modelName: "Appartenir",
        tableName: "Appartenir",
        timestamps: true,
    }
);

// Jointure pour TagId
User.belongsToMany(Todo, {
    through: Appartenir,
    foreignKey: "userId",
    as: "appartenirUser",
});

// Jointure pour ModuleId
Todo.belongsToMany(User, {
    through: Appartenir,
    foreignKey: "todoId",
    as: "appartenirTodo",
});

export default Appartenir;
