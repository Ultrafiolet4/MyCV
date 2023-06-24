import { TestBed } from '@angular/core/testing';
import {NgxsModule, Store} from "@ngxs/store";
import {NameState, UsernameStateModel} from "../../state/namestate";
import {ChangeName, DeleteName} from "../../actions/actions";


describe('NameState', () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([NameState])],
    });
    store = TestBed.inject(Store);
  });

  it('should change the name', () => {
    const name = 'Roman';
    store.dispatch(new ChangeName(name));
    const state: UsernameStateModel = store.selectSnapshot(NameState);
    expect(state.name).toEqual(name);
  });

  it('should delete the name', () => {
    const name = 'Roman';
    store.dispatch(new ChangeName(name));
    store.dispatch(new DeleteName());
    const state: UsernameStateModel = store.selectSnapshot(NameState);
    expect(state.name).toEqual('');
  });
});
