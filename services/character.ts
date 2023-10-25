import type { ApiResponse, Character } from "@/types";
import { handleFetchError, rethrowError } from "@/utils/error";

const baseURL = "https://rickandmortyapi.com/api/character";

export async function getCharactersByPage(pageId: number = 1) {
  try {
    const res = await fetch(baseURL + "/?page=" + pageId);
    const data: ApiResponse<Character> = await res.json();

    handleFetchError(res, data);
    return data.results;
  } catch (err) {
    rethrowError(err);
  }
}

export async function getCharactersById(ids: number[]) {
  try {
    const res = await fetch(baseURL + `/[${ids.toString()}]`);
    const data: Array<Character> = await res.json();

    handleFetchError(res, data);
    return data;
  } catch (err) {
    rethrowError;
  }
}
