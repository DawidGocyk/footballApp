import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'prediction-modal',
  template: `
<ng-template #content let-c="close" let-d="dismiss">
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Your Predictions</h4>
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <div *ngFor="let prediction of userPredictions">
      <span style="font-weight: bold;">{{prediction.id}}: {{prediction.teams | sliceTeams}}
      <!-- <button type="button" class="btn btn-primary btn-xxs">XSmall</button>
      <button type="button" class="btn btn-primary btn-xxs">XSmall</button> -->
    </span>
      <div winner>Winner: {{prediction.winner}}</div>
      <hr>
    </div>

  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="c('Save click')">Close</button>
  </div>
</ng-template>

<button class="btn btn-lg btn-outline-primary" (click)="open(content)">Show your predictions</button>
  `
})

export class EventModal implements OnInit {

  userPredictions

  constructor(config: NgbModalConfig, private modalService: NgbModal, private eventService: EventService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.userPredictions = this.eventService.getUserPredictions()
    console.log("modal", this.userPredictions)
  }

  open(content) {
    this.modalService.open(content);
  }
}
