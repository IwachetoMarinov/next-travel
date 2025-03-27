export const getDifficultyColor = (difficulty: number): string => {
  switch (difficulty) {
    case 1:
      return "green-500";
    case 2:
      return "yellow-300";
    case 3:
      return "orange-500";
    case 4:
      return "red-300";
    case 5:
      return "purple-700";
    default:
      return "green-500";
  }
};

export const getDifficultyColorSVG = (difficulty: number): string => {
  switch (difficulty) {
    case 1:
      return "#0f9d58";
    case 2:
      return "#f4b400";
    case 3:
      return "#f09300";
    case 4:
      return "#e44d2e";
    case 5:
      return "#b45309";
    default:
      return "#0f9d58";
  }
};
