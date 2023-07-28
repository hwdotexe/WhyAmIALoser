import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
