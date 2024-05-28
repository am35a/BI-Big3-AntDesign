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
  constructor() {}
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

}
