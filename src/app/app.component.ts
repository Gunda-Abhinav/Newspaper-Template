
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private renderer: Renderer2) {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
      this.renderer.addClass(document.body, 'dark');
    }
  }

  toggleTheme() {
    if (document.body.classList.contains('dark')) {
      this.renderer.removeClass(document.body, 'dark');
      localStorage.setItem('darkMode', 'disabled');
    } else {
      this.renderer.addClass(document.body, 'dark');
      localStorage.setItem('darkMode', 'enabled');
    }
  }
}
