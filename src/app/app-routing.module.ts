import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListChistesComponent } from './components/list-chistes/list-chistes.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'list', component: ListChistesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
