import { Routes } from '@angular/router';
import { Table45Component } from './table45/table45.component';

export const routes: Routes = [
	{ path: 'table', component: Table45Component },
	{ path: '', redirectTo: '/table', pathMatch: 'full' },
	{ path: '**', redirectTo: '/table', pathMatch: 'full' },
];
