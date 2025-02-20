//Express
import express, { Request, Response } from "express";
import AuthController from "../controller/auth";

const router = express.Router();


router.post("/signin", async (req: Request, res: Response): Promise<void> => {
    console.log(req.body)
    try {
        const response = await AuthController.signin(req.body);
        res.status(200).json(response);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
