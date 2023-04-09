import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Icard } from '../_schema/Icard';

@Component({
  selector: 'app-mada-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mada-card.component.html',
  styleUrls: ['./mada-card.component.scss']
})
export class MadaCardComponent {
  @Input() card: Icard;
}
