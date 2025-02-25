import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Фильтр по городу" />
        <button class="primary" type="button">Поиск</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
