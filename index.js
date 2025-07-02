import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRoute from "./routes/studentRoute.js";
import authRoute from "./routes/authRoute.js";
import adminRoute from "./routes/adminRoute.js";
import cocRoute from "./routes/cocRoute.js";
import performanceRoute from "./routes/performanceRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173" || "http://192.168.1.11:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/student", studentRoute);
app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/coc", cocRoute);
app.use("/performance", performanceRoute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
