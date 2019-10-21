import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { InterestsComponent } from './interests/interests.component';

const routes: Routes = [
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'interests', component: InterestsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
