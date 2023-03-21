import {Choice} from "./choice";

export interface GameResponse {
  userChoice: Choice;
  computerChoice: Choice;
  result: string;
  playedAt: Date;
}
