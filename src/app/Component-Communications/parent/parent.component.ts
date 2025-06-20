import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';
import { ComponentCommunicationsService } from '../component-communications.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../Shared/shared.service';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    standalone: false
})
export class ParentComponent {
  public parentMessage = 'Hello from Parent!'; // Data to be passed to the child
  public personDetails = { name: 'John Doe', age: 30 }; // Object passed to child
  public itemList = ['Item 1', 'Item 2', 'Item 3']; // Array passed to child
  public parentName = 'Aliased Name'; // Data passed using alias
  inputData = ''; // Dynamically bound to the child
  public parentData = 'Initial Data';
  public id: string | null = null;
  public name: string | null = null;
  public details: any;
  public message: string = '';  // Data received from child service

  constructor(
    private componentCommunicationsService: ComponentCommunicationsService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.componentCommunicationsService.data$.subscribe(data => {
      this.message = data;
    });

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    });

    const navigation = this.router.getCurrentNavigation();
    this.id = navigation?.extras.state?.['id'];
    this.name = navigation?.extras.state?.['name'];

    this.details = this.sharedService.getData();
  }

  public updateData(): void {
    this.parentData = 'Updated Data'; // Update data and trigger ngOnChanges in child
  }

  // @Input
  public dataFromChild: string; // Data received from child
  public receiveData(data: string): void {
    this.dataFromChild = data;
  }

  //@ViewChild
  @ViewChild(ViewchildComponent) childComponent!: ViewchildComponent;
  public messageFromChild: string = '';
  public childMethodMessage: string = '';

  public ngAfterViewInit() {
    this.messageFromChild = this.childComponent.message;
  }

  public invokeChildMethod() {
    this.childMethodMessage = this.childComponent.greet();
  }

  //@ViewChild using templateRef variables
  @ViewChild('paragraphRef') paragraphElement!: ElementRef;

  public changeText(): void {
    this.paragraphElement.nativeElement.textContent = 'Text changed by Parent!';
  }

}
