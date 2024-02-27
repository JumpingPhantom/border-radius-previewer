import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'border-radius-previewer';
  topLeft: number = 0;
  topRight: number = 0;
  bottomLeft: number = 0;
  bottomRight: number = 0;
  radius: string = '0';

  handleInputChange(event: any) {
    const classType = event.target.classList[1];
    switch (classType) {
      case 'top-left':
        this.topLeft = event.target.value;
        break;
      case 'top-right':
        this.topRight = event.target.value;
        break;
      case 'bottom-left':
        this.bottomLeft = event.target.value;
        break;
      case 'bottom-right':
        this.bottomRight = event.target.value;
        break;
    }
    this.radius = `${this.topLeft}px ${this.topRight}px ${this.bottomRight}px ${this.bottomLeft}px`;
  }
}
