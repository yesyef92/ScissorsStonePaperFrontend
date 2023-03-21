import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHistoryDialogComponent } from './game-history-dialog.component';

describe('GameHistoryDialogComponent', () => {
  let component: GameHistoryDialogComponent;
  let fixture: ComponentFixture<GameHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHistoryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
