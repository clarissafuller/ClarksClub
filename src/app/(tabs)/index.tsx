import { StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import recipes from "../../../assets/data/recipes";

const recipe = recipes[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
