import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SETTINGS, AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
 
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFireDatabaseModule],  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: SETTINGS, useValue: {} }  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
