import express, { Application, Request, Response, NextFunction } from "express";

const app:Application = express();

const sum = (a:number, b:number): number => {
    return a+b;
}

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    console.log(sum(10, 20));
    res.send("Hello from / route").status(200);
})

app.listen(5000, () => {
    console.log("server running on port 5000");
})