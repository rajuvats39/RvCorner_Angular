import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnChanges {
  public selectedItem: any = '';
  public selectedSubItem: any = '';
  @Input() sideNavStatus: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  public menuList = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-dashboard',
      path: 'dashboard',
      isOpen: false,
    },
    {
      number: '2',
      name: 'Basics',
      icon: 'fa-brands fa-angular',
      path: 'basics',
      isOpen: false,
      submenu: [
        { name: 'Selectors', link: 'basics/selectors' },
        { name: 'Selectors asAttribute', link: 'basics/selectors/asAttribute' },
        { name: 'Selectors asCss', link: 'basics/selectors/asCss' },
        { name: 'Selectors asTag', link: 'basics/selectors/asTag' },
        { name: 'Style Property', link: 'basics/styleProperty' },
        { name: 'StyleUrls Property', link: 'basics/styleUrlsProperty' },
        { name: 'Template Property', link: 'basics/templateProperty' },
        { name: 'TemplateUrl Property', link: 'basics/templateUrlProperty' },
      ],
    },
    {
      number: '3',
      name: 'Components',
      icon: 'fa-solid fa-chart-line',
      path: 'components',
      isOpen: false,
      submenu: [
        { name: 'Data Bingings', link: 'components/dataBindings' },
        { name: 'Interpolation', link: 'components/interpolation' },
        { name: 'Property Binding', link: 'components/propertyBinding' },
        { name: 'Event Binding', link: 'components/eventBinding' },
        { name: 'TwoWay Binding', link: 'components/twoWayBinding' },
      ],
    },
    {
      number: '4',
      name: 'Directives',
      icon: 'fa-solid fa-box',
      path: 'directives',
      isOpen: false,
      submenu: [
        { name: 'ngIf', link: 'directives/ngIf' },
        { name: 'ngFor', link: 'directives/ngFor' },
        { name: 'trackBy', link: 'directives/trackBy' },
        { name: 'ngStyle', link: 'directives/ngStyle' },
        { name: 'ngClass', link: 'directives/ngClass' },
        { name: 'ngSwitch', link: 'directives/ngSwitch' }
      ],
    },
    {
      number: '5',
      name: 'Pipes',
      icon: 'fa fa-database',
      path: 'pipe',
      isOpen: false,
      submenu: [
        { name: 'Custom Pipe', link: 'pipe/customPipe' }
      ],
    },
    {
      number: '6',
      name: 'Component Communi',
      icon: 'fa-solid fa-exchange',
      path: 'componentComm',
      isOpen: false,
      submenu: [
        { name: 'Parent(@Input)', link: 'componentComm/parent' },
        { name: 'Child(@Output)', link: 'componentComm/child' },
        { name: 'ViewChild(@ViewChild)', link: 'componentComm/viewchild' },
        { name: 'Sibling', link: 'componentComm/sibling' },
        { name: 'Router', link: 'componentComm/router' },
      ],
    },
    {
      number: '7',
      name: 'Lifecycle Hooks',
      icon: 'fas fa-life-ring',
      path: 'lifecycleHooks',
      isOpen: false,
      submenu: [
        { name: 'Parent', link: 'lifecycleHooks/parent' },
        { name: 'Child', link: 'lifecycleHooks/child' },
        { name: 'Sibling', link: 'lifecycleHooks/sibling' },
      ],
    },
    {
      number: '8',
      name: 'Forms',
      icon: 'fa fa-wpforms',
      path: 'form',
      isOpen: false,
      submenu: [
        { name: 'Templete Driven', link: 'form/templeteDriven' },
        { name: 'Set Value TDF', link: 'form/setValueTDF' },
        { name: 'Model Driven', link: 'form/modelDriven' },
        { name: 'Form Control MDF', link: 'form/formControlMDF' },
        { name: 'FormBuilder MDF', link: 'form/formBuilderMDF' },
        { name: 'Set Value MDF', link: 'form/setValueMDF' },
      ],
    },
    {
      number: '9',
      name: 'Service DI',
      icon: 'fa-solid fa-gear',
      path: 'serviceDi',
      isOpen: false,
      submenu: [
        { name: 'Service', link: 'serviceDi/service' },
        { name: 'Dependency In', link: 'serviceDi/di' },
      ],
    },
    {
      number: '12',
      name: 'HTTP',
      icon: 'fa-solid fa-server',
      path: 'http',
      isOpen: false,
      submenu: [
        { name: 'Toaster', link: 'myDevelopment/toastrDemo' },
        { name: 'Get Data', link: 'myDevelopment/getData' }
      ],
    },
    {
      number: '10',
      name: 'Routers',
      icon: 'fa fa-arrow-right',
      path: 'routers',
      isOpen: false,
      submenu: [
        { name: 'Rout Guards', link: 'routers/routeGuards' },
      ],
    },
    {
      number: '11',
      name: 'Advanced Compont',
      icon: 'fa fa-arrow-right',
      path: 'advComponent',
      isOpen: false,
      submenu: [
        { name: 'Rout Guards', link: 'advComponent/routeGuards' },
      ],
    },
    {
      number: '11',
      name: 'State Management',
      icon: 'fa-solid fa-server',
      path: 'stateManagement',
      isOpen: false,
      submenu: [
        { name: 'RxJs Library', link: 'stateManagement/rxjs' },
        { name: 'NgRx Library', link: 'stateManagement/ngrx' },
      ],
    },
    {
      number: '12',
      name: 'My Developments',
      icon: 'fa-solid fa-server',
      path: 'myDevelopment',
      isOpen: false,
      submenu: [
        { name: 'Toaster', link: 'myDevelopment/toastrDemo' },
        { name: 'Get Data', link: 'myDevelopment/getData' },
        { name: 'Students CRUD', link: 'myDevelopment/students-crud'}
      ],
    },
    {
      number: '12',
      name: 'Interview QA',
      icon: 'fa-solid fa-server',
      path: 'interviewQA',
      isOpen: false,
      submenu: [
      ],
    },
  ];

  public selectItem(menuTitle: any): void {
    this.selectedItem = menuTitle;
    this.selectedSubItem = '';
  }

  public selectSubItem(submenuTitle: any): void {
    this.selectedItem = submenuTitle;
    this.selectedSubItem = submenuTitle;
  }
}
