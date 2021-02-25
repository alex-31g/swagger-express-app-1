import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API title",
      version: "1.0.0",
      description: "API description",
      contact: {
        name: "Noob dev",
      },
      servers: ["http://localhost:5000/"],
    },
  },
  apis: ["index.js"],
};

// При использовании "swagger-jsdoc" версии "^4.0.0" - await -> удалить
const swaggerDocs = await swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
app.get("/books", (req, res) => {
  res.send([
    {
      id: 1,
      title: "Harry Potter",
    },
  ]);
});

/**
 * @swagger
 * /books:
 *   post:
 *     description: Create a new book
 *     parameters:
 *     - name: title
 *       description: title of the book
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *       201:
 *         description: Created
 */
app.post("/books", (req, res) => {
  res.status(201).send();
});

app.listen(5000, () => console.log("listening on 5000"));
