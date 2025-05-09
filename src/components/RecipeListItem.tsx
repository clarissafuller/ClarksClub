import { StyleSheet, Text, View } from "react-native";

const RecipeListItem = ({ recipe }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text>{recipe.description}</Text>
    </View>
  );
};

export default RecipeListItem;

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
