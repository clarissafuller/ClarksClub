import RecipeListItem from "@/src/components/RecipeListItem";
import { View } from "react-native";
import recipes from "@/assets/data/recipes";

export default function TabOneScreen() {
  return (
    <View>
      <RecipeListItem recipe={recipes[0]} />
      <RecipeListItem recipe={recipes[1]} />
    </View>
  );
}
