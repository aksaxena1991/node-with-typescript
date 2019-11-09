import App from "./app";
const port = process.env.PORT || 9001;

App.listen(port, (err: any) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
