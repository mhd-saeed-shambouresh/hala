import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-second-part',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './second-part.component.html',
  styleUrls: ['./second-part.component.scss']
})
export class SecondPartComponent {

}
