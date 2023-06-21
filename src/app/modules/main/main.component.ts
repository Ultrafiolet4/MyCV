import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {ChangeName} from "../../actions/actions";
import {NameState} from "../../state/namestate";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  nameForm: FormGroup;

  @Select(NameState.name) name$: Observable<string> | undefined;

  constructor(private fb: FormBuilder, private store: Store) {
    this.nameForm = this.fb.group({
      name: '',
    });
  }

  ngOnInit(): void {
    this.name$?.subscribe((name) => {
      this.nameForm.patchValue({ name });
    });
  }

  onChange(): void {
    let name = this.nameForm.value.name;
    this.store.dispatch(new ChangeName(name));
  }
}
