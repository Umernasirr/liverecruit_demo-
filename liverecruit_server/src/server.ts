import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";

import mongoSanitize from "express-mongo-sanitize";
import path from "path";

import connectDb from "./config/db";
import { auth, users } from "./routes";

import swaggerUi from "swagger-ui-express";

dotenv.config();

//Connect to db
connectDb();

const app = express();

//Sanitize data
app.use(mongoSanitize());

//Set security headers
app.use(helmet());

// Body Parser json
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Mount routers

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(`/api/auth`, auth);
app.use(`/api/users`, users);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LR",
      version: "1.0.0",
    },
  },
  apis: ["./server.ts"], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
// console.log(openapiSpecification);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
