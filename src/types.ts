import { Database } from "./database.types";

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];

export type InsertTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];

export type UpdateTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];

export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  created_at: string;
};

export type Recipe = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  user_id: string;
  servings: number;
};

export type RecipeIngredient = {
  id: string;
  recipe_id: string;
  ingredient_id: string;
  measurement_id: string;
  quantity: number;
  note: string;
};

export type Ingredient = {
  id: string;
  name: string;
};

export type Measurement = {
  id: string;
  unit: string;
  abbreviation: string;
};

export type Instruction = {
  id: string;
  recipe_id: string;
  step_number: number;
  instruction: string;
};

export type MealPlan = {
  id: number;
  created_at: string;
  start_date: string;
  end_date: string;
};

export type MealPlanRecipe = {
  id: string;
  created_at: string;
  day_of_week: string;
  meal_time: string;
  scaled_servings: number;
  meal_plan_id: number;
  recipe_id: string;
};
