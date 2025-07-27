export const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

export const VALID_PROCEDURES = {
  sauce: {
    ingredients: {
      sauce: {
        measure: ["spoon"],
      },
      garlic: {
        peel: ["hand"],
        chop: ["knife"],
      },
      sugar: {
        measure: ["spoon"],
      },
      vinegar: {
        measure: ["spoon"],
      },
      tomatoPaste: {
        scoop: ["spoon"],
      },
      cornstarch: {
        mix: ["bowl", "spoon"],
      },
      chiliFlakes: {
        measure: ["spoon"],
      },
      soySauce: {
        measure: ["spoon"],
      },
      ginger: {
        peel: ["knife"],
        slice: ["knife"],
      },
      springOnion: {
        wash: ["hand", "water"],
        chop: ["knife"],
      },
      oil: {
        pour: ["spoon"],
      },
      salt: {
        measure: ["spoon"],
      },
      butter: {
        scoop: ["spoon"],
      },
      milkOrCream: {
        pour: ["cup"],
      },
      onion: {
        peel: ["hand"],
        chop: ["knife"],
      },
    },
    equipments: ["kaldero", "knife", "pan", "bowl", "spoon"],
  },
  mainDish: {
    ingredients: {
      beef: {
        slice: ["knife"],
        stirFry: ["pan", "spatula"],
      },
      bellPepper: {
        wash: ["hand", "water"],
        slice: ["knife"],
      },
      onion: {
        wash: ["hand", "water"],
        slice: ["knife"],
      },
      soySauce: {
        measure: ["spoon"],
      },
      garlic: {
        peel: ["hand"],
        chop: ["knife"],
      },
      shrimp: {
        clean: ["hand", "water"],
        peel: ["hand"],
      },
      butter: {
        measure: ["spoon"],
      },
      pork: {
        slice: ["knife"],
        marinate: ["bowl", "spoon"],
      },
      vinegar: {
        measure: ["spoon"],
      },
      sugar: {
        measure: ["spoon"],
      },
      tomatoPaste: {
        measure: ["spoon"],
      },
      rice: {
        wash: ["hand", "water"],
        cook: ["kaldero"],
      },
      egg: {
        beat: ["bowl", "fork"],
      },
      springOnion: {
        wash: ["hand", "water"],
        chop: ["knife"],
      },
      cookingOil: {
        pour: ["spoon"],
      },
      tofu: {
        slice: ["knife"],
      },
      mushroom: {
        wash: ["hand", "water"],
        slice: ["knife"],
      },
      noodles: {
        boil: ["kaldero"],
        drain: ["strainer"],
      },
      chicken: {
        chop: ["knife"],
        boil: ["kaldero"],
      },
    },
    equipments: [
      "kaldero",
      "knife",
      "pan",
      "spatula",
      "bowl",
      "fork",
      "spoon",
      "strainer",
    ],
  },
  soup: {
    ingredients: {
      chicken: {
        chop: ["knife"],
        boil: ["pot"],
      },
      potato: {
        wash: ["hand", "water"],
        cut: ["knife"],
      },
      carrot: {
        wash: ["hand", "water"],
        cut: ["knife"],
      },
      onion: {
        wash: ["hand", "water"],
        slice: ["knife"],
      },
      garlic: {
        peel: ["hand"],
        chop: ["knife"],
      },
      fish: {
        clean: ["hand", "water"],
        slice: ["knife"],
      },
      cabbage: {
        wash: ["hand", "water"],
        chop: ["knife"],
      },
      ginger: {
        peel: ["knife"],
        slice: ["knife"],
      },
      springOnion: {
        wash: ["hand", "water"],
        chop: ["knife"],
      },
      egg: {
        beat: ["bowl", "fork"],
      },
      cornstarch: {
        mix: ["bowl", "spoon"],
      },
      tofu: {
        slice: ["knife"],
      },
      soySauce: {
        measure: ["spoon"],
      },
      salt: {
        measure: ["spoon"],
      },
      water: {
        pour: ["cup"],
      },
    },
    equipments: ["knife", "pan", "bowl", "fork", "spoon", "cup"],
  },
};
