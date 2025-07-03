const express = require("express");
const cors = require("cors");
const postRoutes = require("./routes/posts");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/posts", postRoutes);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
