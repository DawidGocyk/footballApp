import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <div>
    <h2>Match Info</h2>
    <span>GameWeek: {{match.match.matchday}}</span>
    <div>
      Home Team : {{match.match.homeTeam.name}}
    </div>
    <div>Away Team : {{match.match.awayTeam.name}}</div>
    <span>Stadium: {{match.match.venue}}</span>
</div>
  <div>
    <h2>Head to head info</h2>
    <span>Numer Of Matches: {{match.head2head.numberOfMatches}}</span>
    <div>
     {{match.match.homeTeam.name}}
    </div>
    <div>Away Team : {{match.match.awayTeam.name}}</div>
    <span>Stadium: {{match.match.venue}}</span>
</div>
  `
})

export class PostDetailsComponent implements OnInit {
  match
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.match = this.route.snapshot.data['event']
    console.log('mathc = ', this.match)
  }
}
