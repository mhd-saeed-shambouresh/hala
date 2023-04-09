import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardState } from '../store/states';
import { Select, Store } from '@ngxs/store';
import { Icard } from '../_schema/Icard';
import { GetAllCards } from '../store/actions';
import { Observable } from 'rxjs';
import { MadaCardComponent } from '../mada-card/mada-card.component';
import { CardComponent } from 'src/app/core/ui/card/card.component';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, MadaCardComponent, CardComponent],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Select(DashBoardState.GetCards) cards$: Observable<Icard[]>;

  constructor(private store: Store) {
    this.store.dispatch(new GetAllCards());
  }
}
