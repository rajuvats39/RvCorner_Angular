import { ChangeDetectionStrategy, Component, Input, VERSION } from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks',
    templateUrl: './lifecycle-hooks.component.html',
    styleUrls: ['./lifecycle-hooks.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default,
    standalone: false
})
export class LifecycleHooksComponent {

  name = "Angular " + VERSION.major;
 
  message = "Hello";
  content = "Hello";
  hideChild=false;
 
  constructor() {
    console.log("AppComponent:Contructed");
  }
 
  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }
 
  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }
 
  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

}
