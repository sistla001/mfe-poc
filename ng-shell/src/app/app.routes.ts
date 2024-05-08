import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WrapperComponent, WrapperConfig } from './app-wrapper/app-wrapper.component';
import { Wrapper2Component, WrapperConfig2 } from './app-wrapper2/app-wrapper2.component';

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
  },
  {
    path: 'mfe3',
    component: Wrapper2Component,
    data: {
      config: {
        remoteEntry: 'http://localhost:4173/assets/remoteEntry.js',
        remoteName: 'react_mfe2',
        exposedModule: './app',
        elementName: 'root',
      } as WrapperConfig2,
    },
  }
];
