import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from "express";
import { connectDB } from "./DB/Database.js";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";




const app = express();
const port = process.env.PORT || 8000; // Specify a default port if process.env.PORT is undefined

const cors = require('cors');
const corsOption = {
    origin: ['http://localhost:8000'],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}
app.use(cors(corsOption));



connectDB();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log(`Server is listening on http://localhost:${5000}`);
});
