import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";


//Initialisation de la bdd
require("./database/init");


let corsOptions = {
    origin: ["http://localhost:5173"],
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "role"],
    maxAge: 3000,
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
    res.send("Hello Abend !");
});


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("Erreur serveur :", err);

    res.status(500).json({
        message: "Erreur serveur",
        erreur: err.message || "Une erreur inconnue s'est produite",
    });
});

app.listen(5000, () => {
    console.log("Serveur en ligne.");
});
