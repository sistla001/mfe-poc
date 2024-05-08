import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WrapperComponent, WrapperConfig } from './app-wrapper/app-wrapper.component';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule('ng-mfe1', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'mfe2',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'react_mfe2',
        exposedModule: './app',
        elementName: 'app',
      } as WrapperConfig,
    },
  }
];
