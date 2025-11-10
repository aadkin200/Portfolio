import { Routes } from '@angular/router';
import { Resume } from './components/resume/resume';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'resume' },
  { path: 'resume', component: Resume },
];
