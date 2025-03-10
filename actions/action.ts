"use server";

export const getSnippet = async (snippet: string): Promise<string> => {
  console.log("snippet", snippet);

  return `api/${snippet}`;
};
