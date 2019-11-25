import passport from "passport";
import App from "./app";
const port = process.env.PORT || 9001;

App.get("/auth/google", passport.authenticate("google", { scope: [
       "email", "profile"],
}));

App.get("/auth/google/callback",
passport.authenticate("google", {
  failureRedirect: "/fail",
  successRedirect: "/profile",

    }));
App.listen(port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
