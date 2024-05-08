import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule('ng-mfe1', './Component').then((m) => m.AppComponent),
  },
];
