export const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");


export const VALID_PROCEDURES = {
  sauce: {
    ingredients: {
      chicken: {
        chop: ["knife"],
        boil: ["pot"]
      },
      lettuce: {
        wash: ["hand", "water"],
        cut: ["knife"]
      }
    },
    equipments: ["kaldero", "knife", "pan"],
  },
  mainDish: {
    ingredients: {
      chicken: {
        chop: ["knife"],
        boil: ["pot"]
      },
      lettuce: {
        wash: ["hand", "water"],
        cut: ["knife"]
      }
    },
    equipments: ["kaldero", "knife", "pan"],
  },
  soup: {
    ingredients: {
      chicken: {
        chop: ["knife"],
        boil: ["pot"]
      },
      lettuce: {
        wash: ["hand", "water"],
        cut: ["knife"]
      }
    },
    equipments: ["kaldero", "knife", "pan"],
  },
};

