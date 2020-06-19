import { EventService } from './../shared/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() id
  winner
  yourPick
  selectedOption
  homeTeam = 0
  awayTeam = 1
  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    console.log("teams from pre", this.teams)
    this.winner = this.findWinner(this.teams)
    this.yourPick = this.eventService.getUserPredictionsById(this.id)
    console.log('PICK', this.yourPick)

  }

  getPredicion() {
    if (this.selectedOption == 1) {
      this.yourPick = this.teams[this.selectedOption - 1].name
    } else if (this.selectedOption === 'x') {
      this.yourPick = 'Draw'
    } else {
      this.yourPick = this.teams[this.selectedOption - 1].name
    }
    this.eventService.makeNewPrediction({
      id: this.id,
      winner: this.yourPick,
      teams: [
        this.teams[this.homeTeam].name,
        this.teams[this.awayTeam].name,
      ]
    })
    console.log('select', this.selectedOption)
    this.router.navigate([''])
  }

  findWinner(teams) {


    let homeTeamPoints
    let awayTeamPoints

    homeTeamPoints = teams[this.homeTeam].wins * 3 + teams[this.homeTeam].draws * 1
    awayTeamPoints = teams[this.awayTeam].wins * 3 + teams[this.awayTeam].draws * 1
    console.log('home', homeTeamPoints, 'away', awayTeamPoints)
    if (homeTeamPoints > awayTeamPoints) {
      return this.winner = teams[this.homeTeam].name
    } else if (homeTeamPoints === awayTeamPoints) {
      return this.winner = 'Draw'
    } else {
      return this.winner = teams[this.awayTeam].name
    }
  }
}
