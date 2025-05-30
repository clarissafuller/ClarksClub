export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          password: string;
          created_at: string;
        };
        Insert: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          password: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          password?: string;
          created_at?: string;
        };
        Relationships: [];
      };

      recipes: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          description: string;
          user_id: string;
          servings: number;
        };
        Insert: {
          id?: string;
          created_at?: string;
          title: string;
          description: string;
          user_id: string;
          servings: number;
        };
        Update: {
          id?: string;
          created_at?: string;
          title?: string;
          description?: string;
          user_id?: string;
          servings?: number;
        };
        Relationships: [
          {
            foreignKeyName: "recipes_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };

      ingredients: {
        Row: {
          id: string;
          name: string;
        };
        Insert: {
          id?: string;
          name: string;
        };
        Update: {
          id?: string;
          name?: string;
        };
        Relationships: [];
      };

      measurements: {
        Row: {
          id: string;
          unit: string;
          abbreviation: string;
        };
        Insert: {
          id?: string;
          unit: string;
          abbreviation: string;
        };
        Update: {
          id?: string;
          unit?: string;
          abbreviation?: string;
        };
        Relationships: [];
      };

      recipe_ingredients: {
        Row: {
          id: string;
          recipe_id: string;
          ingredient_id: string;
          measurement_id: string;
          quantity: number;
          note: string;
        };
        Insert: {
          id?: string;
          recipe_id: string;
          ingredient_id: string;
          measurement_id: string;
          quantity: number;
          note: string;
        };
        Update: {
          id?: string;
          recipe_id?: string;
          ingredient_id?: string;
          measurement_id?: string;
          quantity?: number;
          note?: string;
        };
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey";
            columns: ["recipe_id"];
            referencedRelation: "recipes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "recipe_ingredients_ingredient_id_fkey";
            columns: ["ingredient_id"];
            referencedRelation: "ingredients";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "recipe_ingredients_measurement_id_fkey";
            columns: ["measurement_id"];
            referencedRelation: "measurements";
            referencedColumns: ["id"];
          }
        ];
      };

      instructions: {
        Row: {
          id: string;
          recipe_id: string;
          step_number: number;
          instruction: string;
        };
        Insert: {
          id?: string;
          recipe_id: string;
          step_number: number;
          instruction: string;
        };
        Update: {
          id?: string;
          recipe_id?: string;
          step_number?: number;
          instruction?: string;
        };
        Relationships: [
          {
            foreignKeyName: "instructions_recipe_id_fkey";
            columns: ["recipe_id"];
            referencedRelation: "recipes";
            referencedColumns: ["id"];
          }
        ];
      };

      meal_plans: {
        Row: {
          id: number;
          created_at: string;
          start_date: string;
          end_date: string;
        };
        Insert: {
          id?: number;
          created_at?: string;
          start_date: string;
          end_date: string;
        };
        Update: {
          id?: number;
          created_at?: string;
          start_date?: string;
          end_date?: string;
        };
        Relationships: [];
      };

      meal_plan_recipes: {
        Row: {
          id: string;
          created_at: string;
          day_of_week: string;
          meal_time: string;
          scaled_servings: number;
          meal_plan_id: number;
          recipe_id: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          day_of_week: string;
          meal_time: string;
          scaled_servings: number;
          meal_plan_id: number;
          recipe_id: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          day_of_week?: string;
          meal_time?: string;
          scaled_servings?: number;
          meal_plan_id?: number;
          recipe_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "meal_plan_recipes_meal_plan_id_fkey";
            columns: ["meal_plan_id"];
            referencedRelation: "meal_plans";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "meal_plan_recipes_recipe_id_fkey";
            columns: ["recipe_id"];
            referencedRelation: "recipes";
            referencedColumns: ["id"];
          }
        ];
      };
    };

    Views: {
      [_ in never]: never;
    };

    Functions: {
      [_ in never]: never;
    };

    Enums: {
      [_ in never]: never;
    };

    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
