import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/core/ui/card/card.component';
import { IconComponent } from 'src/app/core/ui/icon/icon.component';

@Component({
  selector: 'app-first-part',
  standalone: true,
  imports: [CommonModule, CardComponent, IconComponent],
  templateUrl: './first-part.component.html',
  styleUrls: ['./first-part.component.scss']
})
export class FirstPartComponent {

}
