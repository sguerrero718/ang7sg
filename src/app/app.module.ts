import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// custom components
import { AppComponent } from './app.component';
import { SeebassComponent } from './seebass/seebass.component';
import { AdvanalyticsComponent } from './advanalytics/advanalytics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingComponent } from './landing/landing.component';


const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'sa', component: SeebassComponent },
    { path: 'aa', component: AdvanalyticsComponent  },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SeebassComponent,
    AdvanalyticsComponent,
    PageNotFoundComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(
          appRoutes,
          {
              enableTracing: true
          } // <-- debugging purposes only
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
