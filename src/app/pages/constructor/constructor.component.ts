import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-constructor',
  host: {
    'class': 'd-contents'
  },
  standalone: true,
  imports: [
    RouterOutlet,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzDropDownModule,
    NzContentComponent,
    NzInputModule
  ],
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.less']
})
export class ConstructorComponent implements OnInit {

  ngOnInit() {
    console.log("constructor inited")
  }

}
