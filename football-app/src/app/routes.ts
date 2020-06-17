import { Routes } from '@angular/router'
import { EventListComponent } from './events/event-list.component'
import { EventListResolver } from './events/event-list-resolver.service'
import { NewPostComponent } from './events/new-post.component'
import { PostDetailsComponent } from './events/post-details.component'
import { EventResolver } from './events/event-resolver.service'

export const appRoutes: Routes = [
  { path: 'posts', component: EventListComponent, resolve: { events: EventListResolver } },
  { path: 'posts/new', component: NewPostComponent },
  { path: 'posts/:id', component: PostDetailsComponent, resolve: { event: EventResolver } },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
]
