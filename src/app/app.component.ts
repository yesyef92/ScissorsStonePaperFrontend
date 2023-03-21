import {Component} from '@angular/core';
import {faHandPaper, faHandRock, faHandScissors} from "@fortawesome/free-solid-svg-icons";
import {GameService} from "./service/game.service";
import {GameRequest} from "./model/gameRequest";
import {GameResponse} from "./model/gameResponse";
import {Choice} from "./model/choice";
import {GameHistoryDialogComponent} from "./game-history-dialog/game-history-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private gameService: GameService, private dialog: MatDialog) {
  }

  title = 'scissors-stone-paper-frontend';
  faHandScissors = faHandScissors;
  faHandPaper = faHandPaper;
  faHandRock = faHandRock;
  gameRequest: GameRequest | undefined = {};
  gameResponse: GameResponse | undefined;
  showResult = false;
  playerScore: number = 0;
  computerScore: number = 0;
  playedGames: GameResponse[] = [];

  playGame(): void {
    this.gameService.playGame(this.gameRequest!).subscribe({
      next:gameResponse => {
        this.gameResponse = gameResponse;
        this.changeScore(gameResponse);
        this.playedGames.push(gameResponse);
        this.showResult = true;
      },
      error: err => console.log(err)
    });
  }

  changeScore(gameResponse: GameResponse) {
    switch (gameResponse.result) {
      case 'WIN':
        this.playerScore++;
        break;
      case 'LOSS':
        this.computerScore++;
        break;
      default:
        console.log('Invalid result:', gameResponse.result);
    }
  }

  resetGameSession(): void {
    this.playerScore = 0;
    this.computerScore = 0;
    this.playedGames = [];
    this.showResult = false;
  }

  playScissor(): void {
    this.gameRequest!.userChoice = Choice.SCISSORS;
    this.playGame();
  }

  playStone(): void {
    this.gameRequest!.userChoice = Choice.STONE;
    this.playGame();
  }

  playPaper(): void {
    this.gameRequest!.userChoice = Choice.PAPER;
    this.playGame();
  }

  openDialog() {
    this.dialog.open(GameHistoryDialogComponent, {
      data: this.playedGames,
    });
  }

}
