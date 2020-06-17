import { EventService } from './../shared/event.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prediction',
  template: `
    <div>
      <h3 winner>Prediction by stats : {{winner}}</h3>
      <h3 winner>Your Prediction: {{yourPick}}</h3>
    </div>
    <div>
      <label>Chooser your prediction</label>
      <select [(ngModel)]="selectedOption" class="form-control form-control-sm" style="width:100px">
        <option>1</option>
        <option>x</option>
        <option>2</option>
    </select>
      <button (click)="getPredicion()">Submit</button>
    </div>
  `
})

export class PredictionComponent implements OnInit {
  @Input() teams
  winner
  yourPick
  selectedOption
  constructor(private eventService: EventService) { }

  ngOnInit() {
    console.log("teams from pre", this.teams)
    this.winner = this.findWinner(this.teams)

  }

  getPredicion() {
    if (this.selectedOption == 1) {
      this.yourPick = this.teams[this.selectedOption - 1].name
    } else if (this.selectedOption === 'x') {
      this.yourPick = 'Draw'
    } else {
      this.yourPick = this.teams[this.selectedOption - 1].name
    }
    console.log('name', this.teams[this.selectedOption - 1].name)
    console.log('select', this.selectedOption)
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
