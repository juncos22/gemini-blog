import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import postRoutes from './routes/posts';
import authRoutes from './routes/auth';
import profileRoutes from './routes/profile';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';

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
app.use("/api/auth", authRoutes);
app.use("/api/profiles", profileRoutes);

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});