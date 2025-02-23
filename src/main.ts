import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// При ошибках -> выводятся на консоль
bootstrapApplication(AppComponent).catch((e) => console.error(e));
