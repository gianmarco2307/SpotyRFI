import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TratteComponent } from './components/tratte/tratte.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabelloneComponent } from './components/tabellone/tabellone.component';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { PlaylistPageComponent } from './components/playlist-page/playlist-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DisclaimerDialogComponent } from './components/disclaimer-dialog/disclaimer-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TratteComponent,
    ChisiamoComponent,
    NotfoundComponent,
    FooterComponent,
    TabelloneComponent,
    PlaylistPageComponent,
    DisclaimerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [AngularFirestore, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
