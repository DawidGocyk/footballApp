import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prediction',
  template: `
    <div>
      <h3>Prediction by stats : {{winner}}</h3>
    </div>
  `
})

export class PredictionComponent implements OnInit {
  @Input() teams
  winner
  constructor() { }

  ngOnInit() {
    console.log("teams from pre", this.teams)
    this.winner = this.findWinner(this.teams)

  }
  findWinner(teams) {
    const homeTeam = 0
    const awayTeam = 1

    let homeTeamPoints
    let awayTeamPoints

    homeTeamPoints = teams[homeTeam].wins * 3 + teams[homeTeam].draws * 1
    awayTeamPoints = teams[awayTeam].wins * 3 + teams[awayTeam].draws * 1
    console.log('home', homeTeamPoints, 'away', awayTeamPoints)
    if (homeTeamPoints > awayTeamPoints) {
      return this.winner = teams[homeTeam].name
    } else if (homeTeamPoints === awayTeamPoints) {
      return this.winner = 'Draw'
    } else {
      return this.winner = teams[awayTeam].name
    }
  }
}
