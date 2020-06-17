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
import { EventDetailsComponent } from './events/event-details.component';
import { NewEventComponent } from './events/new-event.component';
import { EventResolver } from './events/event-resolver.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PredictionComponent } from './events/event-prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailsComponent,
    NewEventComponent,
    EventDetailsComponent,
    PredictionComponent
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
