import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PickingScreenComponent } from './picking-screen/picking-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PickingScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'what-wins';
}
