import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsModule } from './modules/events.module';
import { NavComponent } from './components/nav/nav.component';
import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, EventsModule],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
