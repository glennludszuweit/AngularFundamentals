import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EventsModule } from './components/events/events.module';
import { UserModule } from './components/user/user.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

import { ToastrService } from './shared/toastr.service';

const routes: Routes = [
  {
    path: 'events',
    loadChildren: () =>
      import('./components/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    EventsModule,
    UserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
