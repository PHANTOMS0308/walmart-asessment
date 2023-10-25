import type { Character } from "./character";
import type { Episode } from "./episode";

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ApiResponse<T> {
  info: Info;
  results: Array<T>;
}

export type { Character, Episode };
