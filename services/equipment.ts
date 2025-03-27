export const getEquipmentIcon = (name: string | null | undefined) => {
  switch (name) {
    case "winter-boot":
      return " 🥾";
    case "food":
      return " 🥪🍪 ";
    case "gloves":
      return " 🧤";
    case "backpack":
      return " 🎒 ";
    case "shoes":
      return " 🥾 ";
    case "socks":
      return " 🧦 ";
    case "clothes":
      return " 👕👖 ";
    case "jacket":
      return " 🧥 ";
    case "geti":
      return " 🦵 ";
    case "light":
      return " 🎇🔦 ";
    case "shteki":
      return " 🦯 ";
    case "sunglasses":
      return " 🕶️ ";
    case "personal-documents":
      return " 🆔 ";
    case "food-and-drink":
      return " 🍏🥪🥤 ";
    case "pocket-knife":
      return " 🔪 ";
    case "thermos":
      return " 🥤 ";
    case "lighter":
      return " 🔥🕯️ ";
    case "first-aid-kit":
      return " 🏥 ";
    case "hat":
      return " 🧢🎭🧣 ";
    case "winter-jacket":
      return " 🧥";
    case "snowshoes-ski":
      return " ⛷️🧗‍♂️🪓 ";
    case "avalanche-equipment":
      return " 🏔️⚠️🎒 ";

    default:
      return "";
  }
};
