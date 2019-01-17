import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './containers/gallery/gallery.component';
import { PhotoComponent } from './containers/photo/photo.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
