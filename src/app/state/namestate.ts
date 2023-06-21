import { State, Action, StateContext } from '@ngxs/store';
import {ChangeName, DeleteName} from '../actions/actions';
import {Injectable} from "@angular/core";

export interface UsernameStateModel {
  name: string;
}

@State<UsernameStateModel>({
  name: 'name',
  defaults: {
    name: '',
  },
})
@Injectable()
export class NameState {
  @Action(ChangeName)
  changeUsername({ patchState }: StateContext<UsernameStateModel>, { payload }: ChangeName) {
    patchState({
      name: payload,
    });
  }

  @Action(DeleteName)
  deleteUsername({ patchState }: StateContext<UsernameStateModel>) {
    patchState({
      name: '',
    });
  }
}
