import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 4';
  myDropDown: string;
  items = ['one', 'two', 'three',  'babacar'];
  origItems = ['one', 'two', 'three'];
  @ViewChild('selectList', { static: false }) selectList: ElementRef;

  onChangeofOptions(newGov) {
    console.log(newGov);
  }

  filterItem(event) {
    if (!event) {
      this.items = this.origItems;
    } // when nothing has typed*/   
    if (typeof event === 'string') {
      console.log(event);
      this.items = this.origItems.filter(a => a.toLowerCase()
        .startsWith(event.toLowerCase()));
    }
    console.log(this.items.length);
    this.selectList.nativeElement.size = this.items.length + 1;
  }

}
