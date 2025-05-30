import { supabase } from "@/lib/supabase";
import { Tables } from "@/types";

export const fetchAllRecipes = async (): Promise<Tables<"recipes">[]> => {
  const { data, error } = await supabase.from("recipes").select("*");
  if (error) throw error;
  return data;
};

export const fetchRecipeById = async (id: number) => {
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};
