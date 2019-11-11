import bodyParser from "body-parser";
import express from "express";
import expressSession from "express-session";
import passport from "passport";
import passportGoogleOauth from "passport-google-oauth";
class App {
    public express: any;
    private router = express.Router();
    constructor() {
        this.express = express();
        this.routeInitilizer();
    }
    private routing(): void {
        this.initilizer();
        this.router.get("/auth", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    res.send("redirect url is called");
  });
    }
    private routeInitilizer(): void {
        this.routing();
        this.express.use("/", this.router);
      }
    private initilizer(): void {
          this.express.use(
              expressSession({
                  cookie: {
                      maxAge: 1,
                      secure: true,
                },
                  resave: true,
                  saveUninitialized: false,
                  secret: "demo",
            }),
        );
          this.express.use((req: any, res: any, next: () => void) => {
              if (req.cookies) {
                console.log(req.cookies);
                res.clearCookie("session_id");
              }
              next();
        });
          this.express.use(express.json());
          this.express.use(
              bodyParser.urlencoded({
                extended: true,
          }),
        );
          passport.serializeUser((user: any, done: (arg0: any, arg1: any) => void) => {
              done(null, user);
  // where is this user.id going? Are we supposed to access this anywhere?
        });
          passport.deserializeUser((id: any, done: (arg0: any, arg1: any) => void) => {
              done(null, id);
        });
          passport.use(
              new passportGoogleOauth.OAuth2Strategy(
        {
            callbackURL: "/auth/google/redirect",
            clientID: "36930921696-at5qk7qcl2cpij66iodkugl1rfd8p7mj.apps.googleusercontent.com ",
            clientSecret: "nH-VV2CwVCrQsglBVy0qS6sm",

    },
    (accessToken: any, refreshToken: any, profile: any, done: (arg0: any, arg1: any) => void) => {
      console.log("printing profile data:::", profile);
      done(null, profile);
    },
  ),
);
      }
    }

export default new App().express;
