import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeModule, NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormLayoutType, NzFormModule } from 'ng-zorro-antd/form';
// import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
// import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-metalayer',
  host: {
    'class': 'd-contents'
  },
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    NgStyle,
    NzIconModule,
    NzPageHeaderModule,
    NzContentComponent,
    NzSpaceModule,
    NzButtonModule,
    NzDropDownModule,
    NzModalModule,
    NzTableModule,
    NzSwitchModule,
    NzSelectModule,
    NzDividerModule,
    NzFlexModule,
    NzTypographyModule,
    NzInputModule,
    NzTreeSelectModule,
    NzTreeModule,
    NzCardModule,
    // NzTagModule,
    // NzToolTipModule,
    // NzInputNumberModule,
    NzFormModule,
    // NzCheckboxModule
    // NzPopconfirmModule,
    // NzMessageService
    NzTagModule,
    NzGridModule
  ],
  templateUrl: './metalayer.component.html',
  styleUrls: ['./metalayer.component.less'],
})


export class MetalayerComponent implements OnInit {

  ngOnInit() {
    console.log("metalayer inited")
  }

  // Модальное окно связей - начало
  isModalLinkVisible = false;
  showModalLink(): void {
    this.isModalLinkVisible = true;
  }
  handleModalLinkOk(): void {
    console.log('Button ok clicked!');
    this.isModalLinkVisible = false;
  }
  handleModalLinkCancel(): void {
    console.log('Button cancel clicked!');
    this.isModalLinkVisible = false;
  }
  // конец

  // Таблица связей - начало
  person = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  // конец

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
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
        },
        {
          title: 'parent 1-3',
          key: '1004',
          expanded: true,
          children: [
            { title: 'beaf', key: '10030', isLeaf: true },
            { title: 'beaf', key: '10031', isLeaf: true },
            { title: 'beaf', key: '10032', isLeaf: true },
            { title: 'beaf', key: '10033', isLeaf: true },
            { title: 'beaf', key: '10034', isLeaf: true },
            { title: 'beaf', key: '10035', isLeaf: true },
            { title: 'beaf', key: '10036', isLeaf: true },
            { title: 'beaf', key: '10037', isLeaf: true },
            { title: 'beaf', key: '10038', isLeaf: true },
            { title: 'beaf', key: '10039', isLeaf: true }
          ]
        },
      ]
    }
  ];

  // cancel(): void {
  //   this.nzMessageService.info('click cancel');
  // }

  // confirm(): void {
  //   this.nzMessageService.info('click confirm');
  // }

  // constructor(private nzMessageService: NzMessageService) {}
  constructor() {}
}