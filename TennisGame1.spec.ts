import { TennisGame1 } from "../src";

describe('TennisGame1', () => {
    it('Adding points to a invalid player does not change the score', () => {
        const player1Name: string = 'Ruben';
        const player2Name: string = 'Beñat';
        const game: TennisGame1 = new TennisGame1(player1Name, player2Name);
        game.wonPoint('InvalidPlayer');
        expect(game.getScore()).toEqual('Love-All');
    })

    it('Both players score 6 points',() => {
        const player1Name: string = 'Ruben';
        const player2Name: string = 'Beñat';
        const game: TennisGame1 = new TennisGame1(player1Name, player2Name);
        for (let i = 0; i < 6; i++) {
            game.wonPoint(player1Name);
            game.wonPoint(player2Name);
        }
        expect(game.getScore()).toEqual('Deuce');   
    })
    
});