import { LoadRemoteModuleOptions } from '@angular-architects/native-federation';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';

export interface WrapperConfig2 {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
  elementName: string;
}

export const initWrapperConfig2: WrapperConfig2 = {
  remoteEntry: '',
  remoteName: '',
  exposedModule: '',
  elementName: '',
}


@Component({
  selector: 'app-wrapper2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-wrapper2.component.html',
  styleUrls: ['./app-wrapper2.component.css']
})
export class Wrapper2Component implements OnInit {
  elm = inject(ElementRef);

  @Input() config = initWrapperConfig2;

  async ngOnInit() {
    const { remoteEntry, exposedModule, remoteName, elementName } = this.config;

    this.loadRemoteModule({exposedModule: exposedModule, remoteEntry: remoteEntry, remoteName: remoteName}).then((remoteModule) => {
      // Do something with the loaded remote module
      const root = document.createElement(elementName);
      this.elm.nativeElement.appendChild(root);
    });
  }

  private loadRemoteModule(options: LoadRemoteModuleOptions): Promise<any> {
    return import(options.remoteEntry || '').then((module) => {
      return module.get(options.exposedModule);
    });
  }
}
