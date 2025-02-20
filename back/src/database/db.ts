import { Sequelize } from "sequelize";

type Dialect = 'mysql' | 'postgres' | 'mariadb' | 'sqlite' | 'mssql';

class Database {

    public todo: Sequelize;
	public name: string = "todo";
	public user: string = "root";
	public password: string = "root";
	public host: string = "bdd";
	public port: number = 3306;
	public dialect: Dialect = "mysql";


    private constructor() {

        this.todo = new Sequelize(this.name, this.user, this.password, {
            host: this.host,
            port: this.port,
            dialect: this.dialect
        });

        this.testConnection(this.todo, this.name);
    }

    private async testConnection(sequelize: Sequelize, dbName: string) {
        try {
            await sequelize.authenticate();
            console.log(`   [MySQL] ✅ Connecté à ${dbName}`);
        } catch (error) {
            console.error(`   [MySQL] ❌ Erreur de connexion à ${dbName}:`, error);
        }
    }

    public static getInstance(): Database {

        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    private static instance: Database;
}

export default Database.getInstance();
