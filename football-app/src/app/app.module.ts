import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventService } from './shared/event.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailsComponent } from './events/post-details.component';
import { NewPostComponent } from './events/new-post.component';
import { EventResolver } from './events/event-resolver.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    PostDetailsComponent,
    NewPostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [EventService, EventListResolver, EventResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
