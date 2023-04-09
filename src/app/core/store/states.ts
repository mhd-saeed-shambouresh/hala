import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap, mergeMap } from 'rxjs/operators';
import { ToggleSideBar } from './actions';

class CoreStateModel {
  sideBarStatus: Boolean = true;
}
@State<CoreStateModel>({
  name: 'CORE',
  defaults: {
    sideBarStatus: true,
  },
})
@Injectable()
export class CoreState {
  constructor() {}
  @Selector()
  static GetSideBarStatus(state: CoreStateModel) {
    return state.sideBarStatus;
  }
  @Action(ToggleSideBar)
  ToggleSideBar({
    patchState,
    getState,
  }: StateContext<CoreStateModel>) {
    const currentStatus = getState().sideBarStatus;
    patchState({
      sideBarStatus: !currentStatus,
    });
  }
}
