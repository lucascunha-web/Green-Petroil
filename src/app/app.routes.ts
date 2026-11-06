import { Routes } from '@angular/router';
import { PaginaInicial } from './pagina-inicial/pagina-inicial';
import { SobreNos } from './sobre-nos/sobre-nos';
import { ProjetosSociais } from './projetos-sociais/projetos-sociais';

export const routes: Routes = [
  { path: '', component: PaginaInicial, title: 'Green Petroil | Página inicial' },
  { path: 'sobre-nos', component: SobreNos, title: 'Green Petroil | Sobre Nós' },
  { path: 'projetos-sociais', component: ProjetosSociais, title: 'Green Petroil | Projetos Sociais' },
  { path: '**', redirectTo: '' },
];
