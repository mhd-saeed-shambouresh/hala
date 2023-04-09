import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { FirstPartComponent } from './first-part/first-part.component';
import { SecondPartComponent } from './second-part/second-part.component';
import { CardComponent } from 'src/app/core/ui/card/card.component';
import { ThirdPartComponent } from './third-part/third-part.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardsComponent, FirstPartComponent, SecondPartComponent, ThirdPartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {

}
