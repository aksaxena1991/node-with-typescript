import express from "express";
class App {
    public express: any;
    private router = express.Router();
    constructor() {
        this.express = express();
        this.routeInitilizer();
    }
    private routing(): void {
    this.router.get("/", (req: any, res: any) => {
          res.send("Hello World!");
        });
    }
    private routeInitilizer(): void {
        this.routing();
        this.express.use("/", this.router);
      }
    }

export default new App().express;
