import type { ApiResponse, Episode } from "@/types";
import { handleFetchError, rethrowError } from "@/utils/error";

const baseURL = "https://rickandmortyapi.com/api/episode";

export async function getAllEpisodes() {
  try {
    // 1. Get episode counts and generate episodes ids correspondingly
    let res = await fetch(baseURL);
    const generalEpisodeData: ApiResponse<Episode> = await res.json();

    handleFetchError(res, generalEpisodeData);

    const allEpisodeIds = new Array(generalEpisodeData.info.count)
      .fill(0)
      .map((_, i) => i + 1);

    // 2. Get all episode according to ids
    res = await fetch(baseURL + "/" + allEpisodeIds.toString());
    const allEpisodes: Array<Episode> = await res.json();

    handleFetchError(res, allEpisodes);
    return allEpisodes;
  } catch (err) {
    rethrowError(err);
  }
}

export async function getEpisodeById(id: number) {
  try {
    const res = await fetch(baseURL + "/" + id);
    const data: Episode = await res.json();

    handleFetchError(res, data);

    return data;
  } catch (err) {
    rethrowError(err);
  }
}
