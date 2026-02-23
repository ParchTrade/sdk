import { searchWeb } from "./searchEngine";

export const runAgent = async (query: string) => {
  // Here AI reasoning would happen
  // For now we simulate intelligent search
  return searchWeb(query);
};
