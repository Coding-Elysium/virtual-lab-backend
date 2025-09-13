import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

export const ingredientsAction = [
  "chop",
  "peel",
  "stir",
  "cut",
  "marinate",
  "slice",
  "blend",
  "grind",
  "pour",
  "grate",
  "sprinkle",
  "rinse",
  "soak",
  "season",
  "whisk",
  "crack",
  "beat",
  "wash",
  "scoop",
  "scramble",
  "clean",
  "measure",
  "mix",
  "cook",
  "boil",
  "drain",
  "stirFry",
];

export const actionIngredientsTools = [
  { name: "knife", category: "cutting" },
  { name: "chopper", category: "cutting" },
  { name: "cleaver", category: "cutting" },
  { name: "paringKnife", category: "cutting" },
  { name: "breadSlicer", category: "cutting" },
  { name: "mandolineSlicer", category: "cutting" },
  { name: "cutter", category: "cutting" },
  { name: "grater", category: "cutting" },
  { name: "zester", category: "cutting" },
  { name: "peeler", category: "cutting" },
  { name: "scissors", category: "cutting" },
  { name: "juliennePeeler", category: "cutting" },

  { name: "blender", category: "mixing" },
  { name: "foodProcessor", category: "mixing" },
  { name: "grinder", category: "mixing" },
  { name: "whisk", category: "mixing" },
  { name: "mixer", category: "mixing" },
  { name: "spoon", category: "mixing" },
  { name: "spatula", category: "mixing" },
  { name: "hand", category: "mixing" },
  { name: "ladle", category: "mixing" },
  { name: "electricMixer", category: "mixing" },
  { name: "mortarAndPestle", category: "mixing" },

  { name: "measuringCup", category: "measuring" },
  { name: "cup", category: "measuring" },
  { name: "pitcher", category: "measuring" },
  { name: "bowl", category: "measuring" },
  { name: "strainer", category: "measuring" },
  { name: "fork", category: "measuring" },
  { name: "shaker", category: "measuring" },
  { name: "ladle", category: "measuring" },
  { name: "tongs", category: "measuring" },
  { name: "digitalScale", category: "measuring" },

  { name: "ziplocBag", category: "storage" },
  { name: "container", category: "storage" },
  { name: "mill", category: "storage" },
  { name: "sink", category: "cleaning" },
  { name: "towel", category: "cleaning" },
  { name: "sponge", category: "cleaning" },
  { name: "dishRack", category: "cleaning" },
  { name: "dishCloth", category: "cleaning" },
];

export const VALID_PROCEDURES = {
  ingredients: {
    garlic: {
      peel: ["hand", "peeler", "knife"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      mince: ["knife", "chopper", "cleaver", "paringKnife"],
      slice: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
      crush: ["mortarAndPestle", "knife"],
    },
    sugar: {
      measure: ["spoon", "measuringCup", "cup"],
      sprinkle: ["hand", "spoon", "shaker"],
      pour: ["spoon", "measuringCup", "cup", "bowl"],
    },
    vinegar: {
      measure: ["spoon", "measuringCup", "cup"],
      pour: ["spoon", "measuringCup", "cup", "bowl"],
    },
    tomatoPaste: {
      scoop: ["spoon", "ladle", "cup", "measuringCup"],
      measure: ["spoon", "measuringCup", "cup"],
      stir: ["spoon", "spatula"],
      mix: ["bowl", "spoon"],
    },
    cornstarch: {
      mix: ["bowl", "spoon"],
    },
    chiliFlakes: {
      measure: ["spoon", "measuringCup", "cup"],
      sprinkle: ["hand", "spoon", "shaker"],
    },
    soySauce: {
      measure: ["spoon", "measuringCup", "cup"],
      pour: ["spoon", "measuringCup", "cup", "bowl"],
    },
    ginger: {
      peel: ["knife", "peeler"],
      slice: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      mince: ["knife", "chopper", "cleaver", "paringKnife"],
      grate: ["grater", "zester"],
      crush: ["mortarAndPestle", "knife"],
    },
    onion: {
      peel: ["hand", "peeler", "knife"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      slice: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
      mince: ["knife", "chopper", "cleaver", "paringKnife"],
      grate: ["grater", "zester"],
      crush: ["mortarAndPestle", "knife"],
      wash: ["hand", "water", "sink", "bowl"],
    },
    oil: {
      pour: ["spoon", "measuringCup", "cup", "bowl"],
      measure: ["spoon", "measuringCup", "cup"],
    },
    salt: {
      measure: ["spoon", "measuringCup", "cup"],
      sprinkle: ["hand", "spoon", "shaker"],
      pour: ["spoon", "measuringCup", "cup", "bowl"],
      season: ["hand", "spoon", "shaker"],
    },
    butter: {
      scoop: ["spoon", "ladle", "cup", "measuringCup"],
      measure: ["spoon", "measuringCup", "cup"],
      melt: ["pan"],
      stir: ["spoon", "spatula"],
    },
    milk: {
      pour: ["spoon", "measuringCup", "cup", "bowl"],
      measure: ["spoon", "measuringCup", "cup"],
    },
    cream: {
      pour: ["spoon", "measuringCup", "cup", "bowl"],
      measure: ["spoon", "measuringCup", "cup"],
    },
    chicken: {
      chop: ["knife", "cleaver", "paringKnife"],
      slice: ["knife", "cleaver", "paringKnife"],
      marinate: ["bowl", "spoon", "ziplocBag", "container"],
      cook: ["pan", "pot", "kaldero"],
      boil: ["pot", "kaldero"],
      grill: ["grill", "oven"],
      bake: ["oven"],
      roast: ["oven"],
      sear: ["pan", "spatula"],
      stirFry: ["pan", "spatula"],
      clean: ["hand", "sponge", "sink", "bowl"],
      wash: ["hand", "water", "sink", "bowl"],
      drain: ["strainer", "colander"],
      portion: ["knife", "cleaver", "paringKnife"],
      debone: ["knife", "paringKnife"],
      skin: ["knife", "paringKnife"],
      shred: ["hand", "fork"],
      tenderize: ["meatMallet", "rollingPin"],
      season: ["hand", "spoon", "shaker"],
    },
    pork: {
      chop: ["knife", "cleaver", "paringKnife"],
      slice: ["knife", "cleaver", "paringKnife"],
      marinate: ["bowl", "spoon", "ziplocBag", "container"],
      cook: ["pan", "pot", "kaldero"],
      boil: ["pot", "kaldero"],
      grill: ["grill", "oven"],
      bake: ["oven"],
      roast: ["oven"],
      sear: ["pan", "spatula"],
      stirFry: ["pan", "spatula"],
      clean: ["hand", "sponge", "sink", "bowl"],
      wash: ["hand", "water", "sink", "bowl"],
      drain: ["strainer", "colander"],
      portion: ["knife", "cleaver", "paringKnife"],
      season: ["hand", "spoon", "shaker"],
    },
    tofu: {
      slice: ["knife", "cleaver", "paringKnife"],
      chop: ["knife", "cleaver", "paringKnife"],
      dice: ["knife", "cleaver", "paringKnife"],
      marinate: ["bowl", "spoon", "ziplocBag", "container"],
      stirFry: ["pan", "spatula"],
      cook: ["pan", "pot", "kaldero"],
      boil: ["pot", "kaldero"],
      grill: ["grill", "oven"],
      bake: ["oven"],
      roast: ["oven"],
      sear: ["pan", "spatula"],
      drain: ["strainer", "colander"],
      crumble: ["hand", "fork"],
      blend: ["blender", "foodProcessor"],
      mix: ["bowl", "spoon"],
      serve: ["spoon", "ladle"],
      wash: ["hand", "water", "sink", "bowl"],
      soak: ["bowl", "container"],
    },
    mushroom: {
      wash: ["hand", "water", "sink", "bowl"],
      slice: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      dice: ["knife", "chopper", "cleaver", "paringKnife"],
      mince: ["knife", "chopper", "cleaver", "paringKnife"],
      sauté: ["pan", "spatula"],
      cook: ["pan", "pot", "kaldero"],
      boil: ["pot", "kaldero"],
      grill: ["grill", "oven"],
      bake: ["oven"],
      roast: ["oven", "pan"],
      sear: ["pan", "spatula"],
      stirFry: ["pan", "spatula"],
      mix: ["bowl", "spoon"],
      serve: ["spoon", "ladle"],
      clean: ["hand", "sponge", "sink", "bowl"],
      drain: ["strainer", "colander"],
      sliceThin: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
      crumble: ["hand", "fork"],
      blend: ["blender", "foodProcessor"],
    },
    rice: {
      wash: ["hand", "water", "sink", "bowl"],
      cook: ["pot", "kaldero"],
      boil: ["pot", "kaldero"],
      stir: ["spoon", "spatula"],
      fluff: ["fork", "spoon"],
      measure: ["measuringCup", "cup"],
      serve: ["spoon", "ladle"],
      mix: ["bowl", "spoon"],
      drain: ["strainer", "colander"],
    },
    noodles: {
      boil: ["pot", "kaldero"],
      cook: ["pot", "kaldero"],
      drain: ["strainer", "colander"],
      stir: ["spoon", "spatula"],
      serve: ["spoon", "ladle"],
      rinse: ["sink", "water", "strainer"],
      measure: ["measuringCup", "cup"],
    },
    water: {
      pour: ["spoon", "measuringCup", "cup", "bowl"],
      measure: ["spoon", "measuringCup", "cup"],
      boil: ["pot", "kaldero"],
      cook: ["pot", "kaldero"],
      rinse: ["sink", "strainer", "bowl"],
      wash: ["hand", "sink", "bowl"],
    },

    bread: {
      slice: ["knife", "breadSlicer", "paringKnife"],
      toast: ["oven"],
      serve: ["hand", "spoon", "ladle"],
      butter: ["spoon", "knife"],
    },

    flour: {
      measure: ["spoon", "measuringCup", "cup"],
      sift: ["sieve"],
      mix: ["bowl", "spoon"],
      serve: ["spoon", "ladle"],
    },

    "plain Flour": {
      measure: ["spoon", "measuringCup", "cup"],
      mix: ["bowl", "spoon"],
    },

    avocado: {
      wash: ["hand", "water", "sink", "bowl"],
      cut: ["knife", "cleaver", "paringKnife"],
      slice: ["knife", "mandolineSlicer", "paringKnife"],
      mash: ["fork", "bowl"],
      serve: ["spoon", "hand"],
    },

    berries: {
      wash: ["hand", "water", "sink", "bowl"],
      serve: ["hand", "spoon", "ladle"],
      mix: ["bowl", "spoon"],
    },

    lemon: {
      wash: ["hand", "water", "sink", "bowl"],
      slice: ["knife", "paringKnife"],
      juice: ["hand", "squeezer"], // only if “squeezer” is in tools
      zest: ["zester", "grater"],
      serve: ["spoon", "hand"],
    },

    olives: {
      rinse: ["hand", "water", "sink", "bowl"],
      slice: ["knife", "paringKnife", "breadSlicer"],
      pit: ["hand", "knife"],
      serve: ["hand", "spoon"],
    },

    cheese: {
      slice: ["knife", "paringKnife", "cheeseSlicer"], // if cheeseSlicer exists
      grate: ["grater"],
      melt: ["pan", "oven"],
      serve: ["hand", "spoon", "ladle"],
    },

    swissCheese: {
      slice: ["knife", "paringKnife"],
      serve: ["hand", "spoon"],
    },

    tomato: {
      wash: ["hand", "water", "sink", "bowl"],
      slice: ["knife", "mandolineSlicer", "paringKnife", "breadSlicer"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      dice: ["knife", "chopper", "cleaver", "paringKnife"],
      serve: ["hand", "spoon", "ladle"],
    },

    parsley: {
      wash: ["hand", "water", "sink", "bowl"],
      chop: ["knife", "chopper", "paringKnife"],
      mince: ["knife", "chopper", "paringKnife"],
      garnish: ["hand"],
    },

    cabbage: {
      wash: ["hand", "water", "sink", "bowl"],
      slice: ["knife", "mandolineSlicer", "paringKnife"],
      chop: ["knife", "cleaver", "paringKnife"],
      shred: ["hand", "fork"],
      serve: ["hand", "spoon"],
    },

    carrot: {
      wash: ["hand", "water", "sink", "bowl"],
      peel: ["peeler", "paringKnife", "knife"],
      slice: ["knife", "mandolineSlicer", "paringKnife", "breadSlicer"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      julienne: ["knife", "mandolineSlicer", "paringKnife"],
      grate: ["grater"],
      serve: ["hand", "spoon", "ladle"],
    },

    cucumber: {
      wash: ["hand", "water", "sink", "bowl"],
      peel: ["peeler", "paringKnife", "knife"],
      slice: ["knife", "mandolineSlicer", "paringKnife", "breadSlicer"],
      dice: ["knife", "chopper", "paringKnife"],
      serve: ["hand", "spoon", "ladle"],
    },

    pepper: {
      wash: ["hand", "water", "sink", "bowl"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      slice: ["knife", "mandolineSlicer", "paringKnife"],
      serve: ["hand", "spoon", "ladle"],
    },
    potato: {
      wash: ["hand", "water", "sink", "bowl"],
      peel: ["peeler", "paringKnife", "knife"],
      cut: ["knife", "cutter", "cleaver", "paringKnife"],
      dice: ["knife", "chopper", "cleaver", "paringKnife"],
      slice: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
      chop: ["knife", "chopper", "cleaver", "paringKnife"],
      roast: ["oven", "pan"],
      bake: ["oven"],
      fry: ["pan"],
      boil: ["pot", "kaldero"],
      season: ["hand", "spoon", "shaker"],
    },
  },
};

// export const VALID_PROCEDURES = {
//   sauce: {
//     ingredients: {
//       garlic: {
//         peel: ["hand"],
//         chop: ["knife"],
//       },
//       sugar: {
//         measure: ["spoon"],
//       },
//       vinegar: {
//         measure: ["spoon"],
//         sprinkle: ["shaker"],
//       },
//       tomatoPaste: {
//         scoop: ["spoon"],
//       },
//       cornstarch: {
//         mix: ["bowl", "spoon"],
//       },
//       chiliFlakes: {
//         measure: ["spoon"],
//       },
//       soySauce: {
//         measure: ["spoon"],
//       },
//       ginger: {
//         peel: ["knife"],
//         slice: ["knife"],
//       },
//       springOnion: {
//         wash: ["hand", "water"],
//         chop: ["knife"],
//       },
//       oil: {
//         pour: ["spoon"],
//       },
//       salt: {
//         measure: ["spoon"],
//       },
//       butter: {
//         scoop: ["spoon"],
//       },
//       milkOrCream: {
//         pour: ["cup"],
//       },
//       onion: {
//         peel: ["hand"],
//         chop: ["knife"],
//       },
//     },
//     equipments: ["kaldero", "knife", "pan", "bowl", "spoon"],
//   },
//   mainDish: {
//     ingredients: {
//       beef: {
//         slice: ["knife"],
//         stirFry: ["pan", "spatula"],
//       },
//       bellPepper: {
//         wash: ["hand", "water"],
//         slice: ["knife"],
//       },
//       onion: {
//         wash: ["hand", "water"],
//         slice: ["knife"],
//       },
//       soySauce: {
//         measure: ["spoon"],
//       },
//       garlic: {
//         peel: ["hand"],
//         chop: ["knife"],
//       },
//       shrimp: {
//         clean: ["hand", "water"],
//         peel: ["hand"],
//       },
//       butter: {
//         measure: ["spoon"],
//       },
//       pork: {
//         slice: ["knife"],
//         marinate: ["bowl", "spoon"],
//       },
//       vinegar: {
//         measure: ["spoon"],
//       },
//       sugar: {
//         measure: ["spoon"],
//       },
//       tomatoPaste: {
//         measure: ["spoon"],
//       },
//       rice: {
//         wash: ["hand", "water"],
//         cook: ["kaldero"],
//       },
//       egg: {
//         beat: ["bowl", "fork"],
//       },
//       springOnion: {
//         wash: ["hand", "water"],
//         chop: ["knife"],
//       },
//       cookingOil: {
//         pour: ["spoon"],
//       },
//       tofu: {
//         slice: ["knife"],
//       },
//       mushroom: {
//         wash: ["hand", "water"],
//         slice: ["knife"],
//       },
//       noodles: {
//         boil: ["kaldero"],
//         drain: ["strainer"],
//       },
//       chicken: {
//         chop: ["knife"],
//         boil: ["kaldero"],
//       },
//     },
//     equipments: [
//       "kaldero",
//       "knife",
//       "pan",
//       "spatula",
//       "bowl",
//       "fork",
//       "spoon",
//       "strainer",
//     ],
//   },
//   soup: {
//     ingredients: {
//       chicken: {
//         chop: ["knife"],
//         boil: ["pot"],
//       },
//       potato: {
//         wash: ["hand", "water"],
//         cut: ["knife"],
//       },
//       carrot: {
//         wash: ["hand", "water"],
//         cut: ["knife"],
//       },
//       onion: {
//         wash: ["hand", "water"],
//         slice: ["knife"],
//       },
//       garlic: {
//         peel: ["hand"],
//         chop: ["knife"],
//       },
//       fish: {
//         clean: ["hand", "water"],
//         slice: ["knife"],
//       },
//       cabbage: {
//         wash: ["hand", "water"],
//         chop: ["knife"],
//         peel: ["paringKnife"],
//       },
//       ginger: {
//         peel: ["knife"],
//         slice: ["knife"],
//       },
//       springOnion: {
//         wash: ["hand", "water"],
//         chop: ["knife"],
//       },
//       egg: {
//         beat: ["bowl", "fork"],
//       },
//       cornstarch: {
//         mix: ["bowl", "spoon"],
//       },
//       tofu: {
//         slice: ["knife"],
//       },
//       soySauce: {
//         measure: ["spoon"],
//       },
//       salt: {
//         measure: ["spoon"],
//       },
//       water: {
//         pour: ["cup"],
//       },
//     },
//     equipments: [
//       "knife",
//       "pan",
//       "bowl",
//       "fork",
//       "spoon",
//       "cup",
//       "Gloves",
//       "Apron",
//     ],
//   },
// };

export const soupCombination = [
  //? SOUP
  {
    // name: "fish soup",
    type: "soup",
    contains: ["fish", "water", "ginger"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753802663/fish_soup_eqlcfh.png",
  },
  {
    // name: "chicken soup",
    type: "soup",
    contains: ["chicken", "water", "carrot", "onion"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753802663/chicken_soup_pm4xzq.png",
  },
  {
    // name: "tofu soup",
    type: "soup",
    contains: ["tofu", "water", "mushroom", "ginger"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753802662/tofu_soup_z1r3cb.png",
  },
  {
    // name: "vegetable soup",
    type: "soup",
    contains: ["cabbage", "carrot", "onion", "water"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753802663/vegetable_soup_gcqvot.png",
  },
  {
    // name: "beef soup",
    type: "soup",
    contains: ["beef", "water", "onion", "potato"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753802663/beef_soup_ihgwhv.png",
  },
  {
    // name: "egg drop soup",
    type: "soup",
    contains: ["egg", "water", "cornstarch", "salt"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753802663/egg_drop_soup_g0t7rf.png",
  },
];

export const mainDishCombination = [
  {
    // name: "fried rice",
    type: "mainDish",
    // contains: ["rice"],
    contains: ["rice", "egg", "soy sauce", "onion"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753804253/fried_rice_xufyck.png",
  },
  {
    // name: "sweet and sour pork",
    type: "mainDish",
    contains: ["pork", "vinegar", "sugar", "tomato paste", "bell pepper"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753804253/sweet_and_sour_pork_vpyp3c.png",
  },
  {
    // name: "chicken adobo",
    type: "mainDish",
    contains: ["chicken", "soy sauce", "vinegar", "garlic", "onion"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753804253/chicken_adobo_thpfhn.png",
  },
  {
    // name: "beef stew",
    type: "mainDish",
    contains: ["beef", "potato", "carrot", "onion"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753804254/beef_stew_f93kye.png",
  },
  {
    // name: "tofu stir fry",
    type: "mainDish",
    contains: ["tofu", "soy sauce", "garlic", "bell pepper", "onion"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753804253/tofu_stir_fry_sdfgak.png",
  },
  {
    // name: "egg noodles",
    type: "mainDish",
    contains: ["noodles", "egg", "butter", "onion", "soy sauce"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753804252/egg_noodles_ltyrfo.png",
  },
  {
    // name: "mushroom rice",
    type: "mainDish",
    contains: ["rice", "mushroom", "onion", "butter"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1753804253/mushroom_rice_anxlez.png",
  },
];

export const sauceCombination = [
  {
    // name: "sweet and sour sauce",
    type: "sauce",
    contains: ["vinegar", "sugar", "tomato paste"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823051/sauce_4_urj4te.png",
  },
  {
    // name: "soy garlic sauce",
    type: "sauce",
    contains: ["soy sauce", "garlic", "sugar"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823051/sauce_3_lrpzsl.png",
  },
  {
    // name: "spicy chili sauce",
    type: "sauce",
    contains: ["chili flakes", "garlic", "vinegar"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823051/sauce_4_urj4te.png",
  },
  {
    // name: "butter sauce",
    type: "sauce",
    contains: ["butter", "garlic", "onion"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823049/sauce_1_pimwnm.png",
  },
  {
    // name: "tomato-based sauce",
    type: "sauce",
    contains: ["tomato paste", "garlic", "onion", "sugar"],
    image:
      "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823051/sauce_4_urj4te.png",
  },
];

export const getMatchedCombination = (category, ingredients) => {
  const ingredientNames = ingredients
    .map((ing) => ing.name.toLowerCase())
    .sort();

  let combinationList = [];

  switch (category) {
    case "mainDish":
      combinationList = mainDishCombination;
      break;
    case "soup":
      combinationList = soupCombination;
      break;
    case "sauce":
      combinationList = sauceCombination;
      break;
    default:
      return null;
  }

  for (const combo of combinationList) {
    const requiredIngredients = combo.contains
      .map((i) => i.toLowerCase())
      .sort();

    const isMatch = requiredIngredients.every((ing) =>
      ingredientNames.includes(ing)
    );

    if (isMatch) {
      return combo;
    }
  }

  const fallbackCombinations = {
    mainDish: {
      // name: "Basic Dish",
      type: "mainDish",
      // contains: ["tomato paste", "garlic", "onion", "sugar"],
      image:
        "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823051/sauce_4_urj4te.png",
    },
    sauce: {
      // name: "Basic Sauce",
      type: "sauce",
      // contains: ["tomato paste", "garlic", "onion", "sugar"],
      image:
        "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823051/sauce_4_urj4te.png",
    },
    soup: {
      // name: "Basic Soup",
      type: "soup",
      // contains: ["tomato paste", "garlic", "onion", "sugar"],
      image:
        "https://res.cloudinary.com/dgvi2di6t/image/upload/v1754823051/sauce_4_urj4te.png",
    },
  };

  return fallbackCombinations[category] || null;
};

// export const actionTools = [
//   { name: "chop", tools: ["knife", "chopper", "cleaver", "paringKnife"] },
//   { name: "peel", tools: ["peeler", "paringKnife"] },
//   { name: "stir", tools: ["spoon", "spatula"] },
//   { name: "cut", tools: ["knife", "cutter", "cleaver", "paringKnife"] },
//   { name: "marinate", tools: ["bowl", "ziplocBag", "container"] },
//   {
//     name: "slice",
//     tools: ["knife", "mandolineSlicer", "breadSlicer", "paringKnife"],
//   },
//   { name: "blend", tools: ["blender", "foodProcessor"] },
//   {
//     name: "grind",
//     tools: ["grinder", "mortarAndPestle", "mill", "foodProcessor"],
//   },
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
