import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  name$!: Observable<string>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.name$ = this.store.select(state => state.name).pipe(map(state => state.name));
  }
}
