import { DataTypes, Model, Optional } from "sequelize";
import db from "../database/db";

interface TodoAttributes {
    id: number;
    name: string;
    statut: string;
}

interface todoCreationAttributes extends Optional<TodoAttributes, "id"> {}

class Todo
    extends Model<TodoAttributes, todoCreationAttributes>
    implements TodoAttributes
{
    public id!: number;
    public name!: string;
    public statut!: string;
}

Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
			autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Le nom ne doit pas être nul.",
                },
                notEmpty: {
                    msg: "Le nom ne doit pas être vide.",
                },
                len: {
                    args: [1, 20],
                    msg: "Trop de caractères, 20 maximum.",
                },
            },
        },
        statut: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notNull: {
                    msg: "Le statut ne doit pas être nul.",
                },
                notEmpty: {
                    msg: "Le statut ne doit pas être vide.",
                },
                len: {
                    args: [1, 255],
                    msg: "Trop de caractères, 255 maximum.",
                },
            },
        },
    },
    {
        sequelize: db.todo,
        modelName: "Todo",
        tableName: "Todos",
    }
);

export { Todo, todoCreationAttributes };
