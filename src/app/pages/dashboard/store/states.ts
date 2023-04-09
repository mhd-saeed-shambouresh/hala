import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap, mergeMap } from 'rxjs/operators';
import { Icard } from '../_schema/Icard';
import { CardsService } from '../_service/cards.service';
import { GetAllCards } from './actions';

class DashBoardStateModel {
  cards: Icard[];
}
@State<DashBoardStateModel>({
  name: 'DASHBOARD',
  defaults: {
    cards: [],
  },
})
@Injectable()
export class DashBoardState {
  constructor(private cardsService: CardsService) { }
  @Selector()
  static GetCards(state: DashBoardStateModel) {
    return [...state.cards];
  }
  @Action(GetAllCards)
  GetAllCards({
    patchState,
    getState,
  }: StateContext<DashBoardStateModel>) {
    return this.cardsService.GetCardsDetail().pipe(tap(r => {
      patchState({
        cards: r,
      });
    }))

  }
}
