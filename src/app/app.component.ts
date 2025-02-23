import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // определяет селектор css для HTML-элемента
  selector: 'my-app',
  // компонент будет независимым
  standalone: true,
  // импортирует в компонент другие модули
  imports: [FormsModule],
  template: `<label>Введите имя:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Добро пожаловать {{ name }}!</h1>`,
})
export class AppComponent {
  name = '';
}
