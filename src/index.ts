import express, { type Request, type Response } from "express";
import { prismaClient } from "../lib/client";

const app = express();

app.get("/", async (req: Request, res: Response) => {
    const data = await prismaClient.user.findMany();
    res.json({
        data
    })
})

app.post("/", async (req, res) => {
    const data = await prismaClient.user.create({
        data: {
            email: "ansariarif@gmail.com", 
            password: "ansariarif"
        }
    })
    res.json({
        data
    })
})

app.listen(3000, () => {
    console.log("Server is listening on the port: 3000")
});