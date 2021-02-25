const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get("/books", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Harry Potter",
    },
  ]);
});

app.post("/books", (req, res) => {
  res.status(201).send();
});

app.listen(5000, () => console.log("listening on 5000"));
