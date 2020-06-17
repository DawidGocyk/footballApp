import { Routes } from '@angular/router'
import { EventListComponent } from './events/event-list.component'
import { EventListResolver } from './events/event-list-resolver.service'
import { NewEventComponent } from './events/new-event.component'
import { EventDetailsComponent } from './events/event-details.component'
import { EventResolver } from './events/event-resolver.service'

export const appRoutes: Routes = [
  { path: 'posts', component: EventListComponent, resolve: { events: EventListResolver } },
  { path: 'posts/new', component: NewEventComponent },
  { path: 'posts/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
]
