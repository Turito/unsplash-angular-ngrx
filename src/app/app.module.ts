import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from './store/reducers/app.reducers';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoEffects } from './store/effects/photo.effects';
import { UnsplashService } from './services/unsplash.service';
import { GalleryComponent as GalleryContainer } from './containers/gallery/gallery.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SearchComponent } from './components/search/search.component';
import { PhotoComponent } from './containers/photo/photo.component';
import { PhotoThumbComponent } from './components/photo-thumb/photo-thumb.component';
import { PhotoViewComponent } from './components/photo/photo-view.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryContainer,
    SearchComponent,
    GalleryComponent,
    PhotoComponent,
    PhotoViewComponent,
    PhotoThumbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([PhotoEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule
  ],
  providers: [UnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule {}
