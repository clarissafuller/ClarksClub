import { supabase } from "@/lib/supabase";
import { Tables } from "@/types";

export const fetchMealPlans = async (): Promise<Tables<"meal_plans">[]> => {
  const { data, error } = await supabase.from("meal_plans").select("*");
  if (error) throw error;
  return data;
};

export const createMealPlan = async (plan: Partial<Tables<"meal_plans">>) => {
  const { data, error } = await supabase
    .from("meal_plans")
    .insert([plan])
    .select()
    .single();
  if (error) throw error;
  return data;
};
