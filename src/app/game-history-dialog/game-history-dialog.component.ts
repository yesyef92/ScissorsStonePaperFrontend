import {Component, Inject} from '@angular/core';
import {GameResponse} from "../model/gameResponse";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-game-history-dialog',
  templateUrl: './game-history-dialog.component.html',
  styleUrls: ['./game-history-dialog.component.css']
})
export class GameHistoryDialogComponent {

  columnsToDisplay = ['playedAt', 'userChoice', 'computerChoice', 'result'];
  faxmark = faXmark;

  constructor(
    public dialogRef: MatDialogRef<GameHistoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public playedGames: GameResponse[]) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
