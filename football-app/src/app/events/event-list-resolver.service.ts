import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { map } from 'rxjs/operators'
import { EventService } from '../shared/event.service';


@Injectable()
export class EventListResolver implements Resolve<any>{
  constructor(private eventService: EventService) {

  }

  resolve() {
    console.log('heelo')
    return this.eventService.getEvents()
  }

}

