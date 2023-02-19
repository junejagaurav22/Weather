import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather';

  @HostListener('document:mousemove', ['$event'])
  onMove(event: PointerEvent) {
    const { clientX, clientY } = event;
    const blob = document.getElementById('blob');
    if (blob && blob.style) {
      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
    }
  }
}
