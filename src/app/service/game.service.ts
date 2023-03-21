import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GameRequest} from "../model/gameRequest";
import {GameResponse} from "../model/gameResponse";

const baseUrl = "http://localhost:8080/games";
@Injectable({
  providedIn: 'root'
})

export class GameService {


  constructor(private http: HttpClient) { }

  public getAllGames(): Observable<GameResponse[]> {
    return this.http.get<GameResponse[]>(baseUrl);
  }

  public playGame(gameRequest: GameRequest): Observable<GameResponse> {
    return this.http.post<GameResponse>(baseUrl, gameRequest);
  }
}
