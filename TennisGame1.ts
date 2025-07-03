import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Score = 0;
  private player2Score = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (this.isPlayerOne(playerName)) {
      this.player1Score += 1;
      return;
    }

    if (this.isPlayerTwo(playerName)) {
      this.player2Score += 1;
    }
  }

  getScore(): string {
    if (this.equalScores()) {
      return this.getScoreFromEqualScore();
    }

    if (this.isEndGame()) {
      return this.getScoreFromEndGame();
    }

    return this.getPlayersScore();
  }

  
  // Methods to check player identity and game state

  private isPlayerOne(playerName: string): boolean {
    return playerName === this.player1Name;
  }

  private isPlayerTwo(playerName: string): boolean {
    return playerName === this.player2Name;
  }

  private equalScores(): boolean {
    return this.player1Score === this.player2Score;
  }

  private isEndGame(): boolean {
    return this.player1Score >= 4 || this.player2Score >= 4;
  }

  private player1HasAdvantage(): boolean {
    return this.player1Score - this.player2Score === 1;
  }

  private player2HasAdvantage(): boolean {
    return this.player2Score - this.player1Score === 1;
  }

  private player1Wins(): boolean {
    return this.player1Score - this.player2Score >= 2;
  }


  // Methods to get scores based on game state

  private getScoreFromEqualScore(): string {
    const scoreNames = ['Love-All', 'Fifteen-All', 'Thirty-All'];
    return scoreNames[this.player1Score] || 'Deuce';
  }

  private getScoreFromEndGame(): string {
    if (this.player1HasAdvantage()) return 'Advantage player1';
    if (this.player2HasAdvantage()) return 'Advantage player2';
    return this.player1Wins() ? 'Win for player1' : 'Win for player2';
  }

  private getPlayersScore(): string {
    const scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty'];
    return `${scoreNames[this.player1Score]}-${scoreNames[this.player2Score]}`;
  }
}
