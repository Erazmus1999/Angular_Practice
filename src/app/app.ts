import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,             // 👈 TO DODAJ
  imports: [RouterOutlet],
  template: `
    <h1>{{ sentence() }} {{ title() }}!</h1>
    <router-outlet />
  `,
  styleUrls: ['./app.component.scss'],
})

export class App {
  protected readonly title = signal('Jan');
  protected readonly sentence = signal('Witaj serdecznie Panie: ')
}