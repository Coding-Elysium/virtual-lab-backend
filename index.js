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
import cors from "cors";
import helmet from "helmet";

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
app.use("/ingredients-action", actionIngredientsRoute);

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


//   const actions = [
//   { name: "chop", tools: ["knife", "chopper", "cleaver", "paringKnife"] },
//   { name: "peel", tools: ["peeler", "paringKnife"] },
//   { name: "stir", tools: ["spoon", "spatula"] },
//   { name: "cut", tools: ["knife", "cutter", "cleaver", "paringKnife"] },
//   { name: "marinate", tools: ["bowl", "ziplocBag", "container"] },
//   { name: "slice", tools: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"] },
//   { name: "blend", tools: ["blender", "foodProcessor"] },
//   { name: "grind", tools: ["grinder", "mortarAndPestle", "mill", "foodProcessor"] },
//   { name: "pour", tools: ["pitcher", "cup", "measuringCup", "bowl"] },
//   { name: "grate", tools: ["grater", "zester"] },
//   { name: "sprinkle", tools: ["hand", "spoon", "shaker"] },
//   { name: "rinse", tools: ["sink", "strainer", "bowl"] },
//   { name: "soak", tools: ["bowl", "container"] },
//   { name: "season", tools: ["hand", "spoon", "shaker"] },
//   { name: "whisk", tools: ["whisk", "mixer", "fork"] },
//   { name: "crack", tools: ["hand", "bowl"] },
//   { name: "beat", tools: ["mixer", "whisk", "fork"] },
//   { name: "wash", tools: ["sink", "bowl"] },
//   { name: "scoop", tools: ["spoon", "ladle", "cup", "measuringCup"] },
//   { name: "scramble", tools: ["whisk", "spatula", "pan", "fork"] },
//   { name: "clean", tools: ["sink", "sponge", "hand", "towel"] },
// ];
