import express from "express";
import jobRoutes from "./routes/job.route";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        message: 'The server is running smoothly.',
        timestamp: new Date().toISOString(),
    });
});
app.use("/api/job", jobRoutes);

export default app;