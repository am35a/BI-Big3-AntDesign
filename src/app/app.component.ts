import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { AppRouitingMpdule } from './app.routes';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    AppRouitingMpdule,
    NzDropDownModule,
    NzButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  /* тагл режима конструктора - по умолчанию выключен */
  public isConstructor: boolean = false;
  public isMetalayer: boolean = false;

  /* прослушиваю роут */
  constructor(private router: Router ) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) // завершение перехода
      switch (val.url) { // проверка перехода в конструктор и метаслой
        case '/constructor': 
            this.isConstructor = true;
          break;
        case '/metalayer':
            this.isMetalayer = true;
          break;
        default:
            this.isConstructor = this.isMetalayer = false;
          break;
      }
    });    
  }

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public isCollapsed: boolean = false;

}
