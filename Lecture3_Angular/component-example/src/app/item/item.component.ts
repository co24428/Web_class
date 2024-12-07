import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  /*
  COmponent lifecyle
  - ngOnChanges:          When an input/output binding value changes
  - ngOnInit:             after the first ngOnChanges 
  - ngDoCheck:            after every run of change detection
  - ngAfterContentInit:   after component content initialized
  - ngAfterContentChecked:after every check of component content
  - ngAfterViewInit:      after component's view(s) are initialized
  - ngOnDestroy:          just before the component is destroyed 
  */

}
