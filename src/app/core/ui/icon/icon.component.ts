import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon: string;
  @Input() title: string;
  @Output() onClick = new EventEmitter();
  @Input() color: string = '#F8FAFC';
  click() {
    this.onClick.emit();
  }
}
