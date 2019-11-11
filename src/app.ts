import express from "express";
class App {
    public express: any;
    private router = express.Router();
    constructor() {
        this.express = express();
        this.routeInitilizer();
    }
<<<<<<< HEAD
    private routing(): void {
    this.router.get("/", (req: any, res: any) => {
          res.send("Hello World!");
        });
    }
    private routeInitilizer(): void {
        this.routing();
        this.express.use("/", this.router);
      }
=======

    private mountRoutes(): void {
        const router = express.Router();
        router.get("/", (req: any, res: any) => {
      res.send("Hello World!");
    });

        this.express.use("/", router);
>>>>>>> 8638d21ca23a55ab274ad415eddca4075f8b836e
    }
  }

export default new App().express;
