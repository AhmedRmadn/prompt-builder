// client/lib/api.ts
import { Prompt } from "../types/index";

export async function fetchPrompts(): Promise<Prompt[]> {
  const res = await fetch("http://localhost:3001/prompts");
  if (!res.ok) throw new Error("Failed to fetch prompts");
  return res.json();
}
