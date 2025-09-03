import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export const actionTools = [
  { name: "chop", tools: ["knife", "chopper", "cleaver", "paringKnife"] },
  { name: "peel", tools: ["peeler", "paringKnife"] },
  { name: "stir", tools: ["spoon", "spatula"] },
  { name: "cut", tools: ["knife", "cutter", "cleaver", "paringKnife"] },
  { name: "marinate", tools: ["bowl", "ziplocBag", "container"] },
  {
    name: "slice",
    tools: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
  },
  { name: "blend", tools: ["blender", "foodProcessor"] },
  {
    name: "grind",
    tools: ["grinder", "mortarAndPestle", "mill", "foodProcessor"],
  },
  { name: "pour", tools: ["pitcher", "cup", "measuringCup", "bowl"] },
  { name: "grate", tools: ["grater", "zester"] },
  { name: "sprinkle", tools: ["hand", "spoon", "shaker"] },
  { name: "rinse", tools: ["sink", "strainer", "bowl"] },
  { name: "soak", tools: ["bowl", "container"] },
  { name: "season", tools: ["hand", "spoon", "shaker"] },
  { name: "whisk", tools: ["whisk", "mixer", "fork"] },
  { name: "crack", tools: ["hand", "bowl"] },
  { name: "beat", tools: ["mixer", "whisk", "fork"] },
  { name: "wash", tools: ["sink", "bowl"] },
  { name: "scoop", tools: ["spoon", "ladle", "cup", "measuringCup"] },
  { name: "scramble", tools: ["whisk", "spatula", "pan", "fork"] },
  { name: "clean", tools: ["sink", "sponge", "hand", "towel"] },
];

// enum IngredientType {vegetable, meat, fruit, grain, dairy, spice}
// enum ActionStatus {perfect, good, bad}

// enum ActionType {
//   chop,
//   peel,
//   stir,
//   cut,
//   marinate,
//   slice,
//   blend,
//   grind,
//   pour,
//   grate,
//   sprinkle,
//   rinse,
//   soak,
//   season,
//   whisk,
//   crack,
//   beat,
//   wash,
//   scoop,
//   scramble,
//   clean
// }

// enum ToolType {
//   knife,
//   chopper,
//   cleaver,
//   peeler,
//   paringKnife,
//   spoon,
//   spatula,
//   whisk,
//   scissors,
//   cutter,
//   container,
//   tongs,
//   blender,
//   foodProcessor,
//   grinder,
//   mortarAndPestle,
//   mill,
//   pitcher,
//   ladle,
//   grater,
//   strainer,
//   sink,
//   shaker,
//   hand,
//   fork,
//   mixer,
//   measuringCup,
//   mandolineSlicer,
//   ziplocBag,
//   cup,
//   bowl,
//   zester,
//   breadSlicer
// }
