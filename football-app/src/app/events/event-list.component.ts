import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'event-list.component.html'
})

export class EventListComponent implements OnInit {
  events
  matches
  displayedMatches
  userPredictions = []
  constructor(private route: ActivatedRoute, private eventService: EventService) {

  }

  ngOnInit() {
    console.log('route =', this.route)
    this.events = this.route.snapshot.data['events']
    this.matches = this.events.matches
    console.log(this.events)
    this.displayedMatches = this.events.matches
    this.userPredictions = this.eventService.getUserPredictions()
    console.log('user Predictions', this.eventService.getUserPredictions())
  }

  filterBy(homeMatch: string) {
    this.displayedMatches = this.matches.filter(match => match.homeTeam.name === homeMatch)
  }
  resetFilters() {
    this.displayedMatches = this.matches
    this.sortByDate()
  }

  searchMatches(searchValue: string) {
    console.log('search', searchValue)
    if (searchValue) {
      this.displayedMatches = this.displayedMatches.filter(match => match.homeTeam.name.includes(searchValue)
        || match.awayTeam.name.includes(searchValue))
    }
    console.log('after check ', this.displayedMatches)
  }

  sortByLastUpdate() {
    this.displayedMatches.sort((m1, m2) => {
      if (m1.lastUpdated > m2.lastUpdated) return 1
      else if (m1.lastUpdated === m2.lastUpdated) return 0
      else return -1

    })
  }
  sortByDate() {
    this.displayedMatches.sort((m1, m2) => {
      if (m1.utcDate > m2.utcDate) return 1
      else if (m1.utcDate === m2.utcDate) return 0
      else return -1

    })
  }
  filterMatches(data) {
    console.log("new FIlre data", data)
    this.displayedMatches = data
  }
}
