import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
  <div class="container">
  <div><strong>
    <h2>Match Info</h2>
    <span>GameWeek: {{match.match.matchday}}</span>
    <div>
      Home Team : {{match.match.homeTeam.name}}
    </div>
    <div>Away Team : {{match.match.awayTeam.name}}</div>
    <span>Stadium: {{match.match.venue | stadiumPipe}}</span>
</strong></div>
<hr>
  <div>
    <h2>Head to head info</h2>
    <table class="table table-striped">
  <thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Wins</th>
    <th scope="col">Draw</th>
    <th scope="col">Loss</th>
  </tr>
  </thead>
  <tbody>
    <tr *ngFor="let team of teams">
    <th scope="row">{{team.name}}</th>
    <td winner>{{ team.wins | number }}</td>
    <td>{{ team.draws | number }}</td>
    <td>{{ team.losses | number }}</td>
    </tr>
  </tbody>
</table>
</div>
<prediction [teams]="teams" [id]="id"></prediction>
<button (click)="backToMatches()">back</button>
</div>

  `
})

export class EventDetailsComponent implements OnInit {
  match;
  teams = [];
  id: string;
  constructor(private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.match = this.route.snapshot.data.event;
    console.log('mathc = ', this.match);
    this.prepareMatchInfo();
  }
  prepareMatchInfo() {
    this.teams.push(this.match.head2head.homeTeam);
    this.teams.push(this.match.head2head.awayTeam);
    this.id = this.match.match.id;
    console.log(this.teams);
  }

  backToMatches() {
    this.router.navigate(['']);
  }

}
