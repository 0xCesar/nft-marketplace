import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Collections } from '@material-ui/icons';
import { CollectionsComponent } from './page/collections/collections.component';
import { CreatorsComponent } from './page/creators/creators.component';
import { ExploreComponent } from './page/explore/explore.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'creators',
    component: CreatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
