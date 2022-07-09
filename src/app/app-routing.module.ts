import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PicturesComponent } from './pages/pictures/pictures.component';
import { VideosComponent } from './pages/videos/videos.component';

const routes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pictures', component: PicturesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
