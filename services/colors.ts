export const getDifficultyColor = (difficulty: number): string => {
  switch (difficulty) {
    case 1:
      return "text-green-500";
    case 2:
      return "text-yellow-300";
    case 3:
      return "text-orange-500";
    case 4:
      return "text-red-300";
    case 5:
      return "text-purple-700";
    default:
      return "text-green-500";
  }
};
