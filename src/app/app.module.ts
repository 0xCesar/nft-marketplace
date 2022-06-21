import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ExploreComponent } from './page/explore/explore.component';
import { CollectionsComponent } from './page/collections/collections.component';
import { CreatorsComponent } from './page/creators/creators.component';
import { BtnBasicComponent } from './components/btn-basic/btn-basic.component';
import { CardNftComponent } from './components/card-nft/card-nft.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreComponent,
    CollectionsComponent,
    CreatorsComponent,
    BtnBasicComponent,
    CardNftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
