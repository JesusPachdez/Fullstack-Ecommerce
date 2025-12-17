"use server";

import { login } from "@/api/auth";

export async function handleLogin(email: string, password: string) {
  try {
    const response = await login(email, password);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
