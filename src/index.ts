import express from "express";

const app = express();
const port = 9001 || process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello Anubahv Saxena!");
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
