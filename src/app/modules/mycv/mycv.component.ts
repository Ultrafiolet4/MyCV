import { Component } from '@angular/core';
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.scss']
})
export class MyCVComponent {

  constructor(private store: Store) {
    this.store.select(state => state.name).subscribe((name) => {
      console.log(name)
    }).unsubscribe();
  }
}
