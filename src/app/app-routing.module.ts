import { ContentChild, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TecnologiasComponent } from './pages/tecnologias/tecnologias.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'tecnologias',
  component:TecnologiasComponent
},
{
  path:'projetos',
  component:ProjetosComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
