import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EventsModule } from './components/events/events.module';
import { UserModule } from './components/user/user.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';

import { ToastrService } from './shared/toastr.service';
import { AuthService } from './components/user/auth.service';

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
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    SimpleModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    EventsModule,
    UserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ToastrService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
