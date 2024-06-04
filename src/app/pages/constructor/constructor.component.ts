import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzContentComponent } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTreeModule, NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'app-constructor',
  host: {
    'class': 'd-contents'
  },
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzButtonModule,
    NzDropDownModule,
    NzContentComponent,
    NzInputModule,
    NzTreeModule,
    NzDividerModule,
    NzTagModule,
    NgStyle,
    NzToolTipModule,
    NzSelectModule,
    NzTypographyModule,
    NzInputNumberModule,
    NzTreeSelectModule,
    NzFormModule,
    NzCheckboxModule,
    NzModalModule,
    NzCollapseModule,
    NzListModule
  ],
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.less']
})
export class ConstructorComponent implements OnInit {

  ngOnInit() {
    console.log("constructor inited")
  }

  expandEntities = ['100', '1001'];
  valueEntities?: string;

  nodesEntities = [
    {
      title: 'Название дашборда',
      key: '100',
      expanded: true,
      children: [
        {
          title: 'Блок такой-то',
          key: '1001',
          expanded: false,
          children: [
            { title: 'График такой-то', key: '10010', isLeaf: true }
          ]
        },
        {
          title: 'Блок сякой-то',
          key: '1002',
          children: [
            { title: 'Отчет номер', key: '10020', isLeaf: true }
          ]
        },
      ]
    }
  ];

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
 

  biExpandEditor: boolean = false;
  biEditorUIMap = {
    sources: {
      isExpand: false,
      xPosition: 1
    },
    settings: {
      isExpand: false,
      xPosition: 2
    },
    editor: {
      isExpand: false,
      xPosition: 3
    },
    classString: '',
    setUIClasses(block: string): void {
      this.classString = '';
      switch (block) {
        case 'sources':
          if (this.editor.isExpand)
            this.editor.isExpand = false
          this.sources.isExpand = !this.sources.isExpand;
          break;
        case 'settings':
          if (this.editor.isExpand)
            this.editor.isExpand = false
          this.settings.isExpand = !this.settings.isExpand;
          break;
        default:
          this.editor.isExpand = !this.editor.isExpand;
          if (!this.editor.isExpand) {
            this.sources.isExpand = false;
            this.settings.isExpand = false;
          }
          break;
      }
      if(this.sources.isExpand && !this.settings.isExpand)
        this.classString = 'bi-expand-sources';
      if(!this.sources.isExpand && this.settings.isExpand)
        this.classString = 'bi-expand-settings';
      if(this.sources.isExpand && this.settings.isExpand || this.editor.isExpand)
        this.classString = 'bi-expand-editor';
    }
  }

  selectedSelectSource = null;


  CANVAS_SCALE_MIN = 80;
  CANVAS_SCALE_MAX = 200;
  canvasScale: number = 50;
  canvasTranslateX: number = 0;
  canvasTranslateY: number = 0;
  
  getEditorCanvasBgTransform() {
    return {
      'background-size': `${this.canvasScale}%`,
      'background-position-x': `calc(${this.canvasTranslateX}px + 50%)`,
      'background-position-y': `calc(${this.canvasTranslateY}px + 50%)`
    };
  }

  getCanvasTransform() {
    return {
      transform: `scale(${this.canvasScale}%) translateX(${this.canvasTranslateX}px) translateY(${this.canvasTranslateY}px)`
    };
  }




  // настройки
  demoValue = 0;
  valuePageName?: string = 'Дашборд такой-то';

  // block
  valueBlockName?: string = 'Блок такой-то';
  isBlockNameChecked: boolean = true;


// Модальное окно связей - начало
isModalEditCodeLinkVisible = false;
constructor() {}
showModalEditCodeLink(): void {
  this.isModalEditCodeLinkVisible = true;
}
handleModalEditCodeLinkOk(): void {
  console.log('Button ok clicked!');
  this.isModalEditCodeLinkVisible = false;
}
handleModalEditCodeLinkCancel(): void {
  console.log('Button cancel clicked!');
  this.isModalEditCodeLinkVisible = false;
}
// конец
}
