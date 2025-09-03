import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import studentRoute from "./routes/studentRoute.js";
import authRoute from "./routes/authRoute.js";
import adminRoute from "./routes/adminRoute.js";
import inventoryRoute from "./routes/inventoryRoute.js";
import cocRoute from "./routes/cocRoute.js";
import performanceRoute from "./routes/performanceRoute.js";
import platingRoute from "./routes/platingRoute.js";
import stageRoute from "./routes/stageRoute.js";
import changepassRoute from "./routes/changepassRoute.js";
import ingredientRoute from "./routes/ingredientRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import actionIngredientsRoute from "./routes/actionIngredientsRoute.js";
import actionToolsRoute from "./routes/actionToolsRoute.js";
import cors from "cors";
import helmet from "helmet";
import ActionTools from "./schema/ActionToolsModal.js";
import { actionTools } from "./utils/cloudinary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://virtual-lab-frontend-deployed-hku1.vercel.app",
  null,
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());

app.use("/student", studentRoute);
app.use("/auth", authRoute);
app.use("/admin", adminRoute);
app.use("/inventory", inventoryRoute);
app.use("/plating", platingRoute);
app.use("/coc", cocRoute);
app.use("/performance", performanceRoute);
app.use("/stage", stageRoute);
app.use("/password", changepassRoute);
app.use("/ingredients", ingredientRoute);
app.use("/categories", categoryRoute);
app.use("/action-ingredients", actionIngredientsRoute);
app.use("/action-tools", actionToolsRoute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // for (const action of actionTools) {
    //   await ActionTools.updateOne(
    //     { name: action.name },
    //     { $set: action },
    //     { upsert: true }
    //   );
    // }

    console.log("Default actions ensured in database ✅");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
