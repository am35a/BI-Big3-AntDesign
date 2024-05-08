import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTreeModule, NzFormatEmitEvent } from 'ng-zorro-antd/tree';


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
    NzInputModule,
    NzTreeModule
  ],
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.less']
})
export class ConstructorComponent implements OnInit {

  ngOnInit() {
    console.log("constructor inited")
  }

  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          expanded: true,
          children: [
            { title: 'leaf', key: '10010', isLeaf: true },
            { title: 'leaf', key: '10011', isLeaf: true },
            { title: 'leaf', key: '10012', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf', key: '10020', isLeaf: true }]
        },
        {
          title: 'parent 1-2',
          key: '1003',
          children: [
            { title: 'leaf', key: '10030', isLeaf: true },
            { title: 'leaf', key: '10031', isLeaf: true }
          ]
        }
      ]
    }
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
