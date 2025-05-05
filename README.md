# ClarksClub 🍴

**ClarksClub** is a mobile app built with **React Native**, **Expo**, and **Supabase**, designed to help users discover and save recipes. The long-term vision of the app is to allow users to build personalized **meal plans** and generate **grocery lists** based on saved recipes.

---

## 🚀 Features

- 🔐 User authentication with Supabase
- 📚 Browse and save recipes
- 🧑‍🍳 Personalized recipe library
- 📦 Built with React Native and Expo
- 🧪 Written in TypeScript

### Coming Soon

- 📅 Meal plan builder
- 🛒 Smart grocery list generation
- 🔎 Recipe search and filtering
- 📝 Notes and ratings on recipes

---

## 🛠 Tech Stack

- **React Native** – Cross-platform mobile app framework
- **Expo** – Development and build tooling for React Native
- **TypeScript** – Static typing for more robust code
- **Supabase** – Backend-as-a-Service (auth, database, storage)

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Expo CLI (`npm install -g expo-cli`)
- Supabase account and project

### Installation

```bash
git clone https://github.com/yourusername/clarksclub.git
cd clarksclub
npm install
```

## 🔐 Supabase Setup

To get started with Supabase:

1. Create a Supabase project at [supabase.io](https://supabase.io).
2. Set up authentication (e.g., email/password provider).
3. Create your database tables, such as:
   - `users`
   - `recipes`
   - `saved_recipes`
4. Add a file in your project for your Supabase config (e.g., `lib/supabase.ts`) and initialize the client:

```ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!
);
```

5. Make sure to confiure enviroment variables in an .env file or via Expo's app config

## 🧪 Development Notes

- The app uses @supabase/supabase-js for client-side data and auth.
- User session and authentication are managed with React Context or a similar state management tool.
- Data is fetched using useEffect and custom hooks.
- Code is written entirely in TypeScript for improved type safety.

## 📄 License

This project is licensed under the MIT License.

## 👋 About

ClarksClub is created by Clarissa Fuller, also known as Clark, as a joyful tool to help users cook more, plan better, and eat well.

Follow Clark’s journey on YouTube - Clark’s Tables, where she shares cooking videos, recipe inspiration, and tablescape ideas.
