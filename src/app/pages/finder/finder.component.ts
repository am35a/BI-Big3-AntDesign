import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


@Component({
  selector: 'app-finder',
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
    NzSegmentedModule,
    NzTabsModule
  ],
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.less']
})
export class FinderComponent implements OnInit {

  ngOnInit() {
    console.log("finder inited")
  }

}
